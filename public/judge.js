/* Offline Python execution in a disposable worker. Not a trusted server judge. */
(() => {
  'use strict';
  const runtimeURL = new URL('python-runtime.js?v=20261110-loadfix', document.currentScript?.src || document.baseURI).href;
  let runtimeLoading = null;
  function loadRuntime() {
    if (window.PYTHON_RUNTIME) return Promise.resolve(window.PYTHON_RUNTIME);
    if (runtimeLoading) return runtimeLoading;
    runtimeLoading = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.async = true;
      script.src = runtimeURL;
      let completed = false;
      const timer = setTimeout(() => finish(new Error('Python 파일 다운로드가 오래 걸려 중단했어요. 연결 상태를 확인하고 다시 채점해 주세요.')), 120000);
      function finish(error) {
        if (completed) return;
        completed = true;clearTimeout(timer);
        script.onload = script.onerror = null;
        if (error) {
          script.remove();runtimeLoading = null;reject(error);
        } else resolve(window.PYTHON_RUNTIME);
      }
      script.onload = () => finish(window.PYTHON_RUNTIME?.assets ? null : new Error('Python 실행 파일의 내용을 읽지 못했어요. python-runtime.js를 다시 업로드해 주세요.'));
      script.onerror = () => finish(new Error('python-runtime.js를 불러오지 못했어요. 배포 파일이 모두 올라갔는지 확인하고 다시 시도하세요.'));
      document.head.append(script);
    });
    return runtimeLoading;
  }
  function workerMain() {
    const BASE = 'https://pyodide-bundled.invalid/';
    function decode(text) {
      const binary = atob(text);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      return bytes;
    }
    function tokens(text) { return text.trim().split(/\s+/u).filter(Boolean); }
    function matches(actual, expected, mode) {
      const a = tokens(actual), b = tokens(expected);
      return a.length === b.length && a.every((token, i) => token === b[i]);
    }
    self.onmessage = async ({data}) => {
      try {
        const binary = {
          'pyodide.asm.wasm': decode(data.wasm),
          'python_stdlib.zip': decode(data.stdlib)
        };
        // Supply exact bundled bytes; code execution never needs a CDN request.
        const nativeFetch = self.fetch.bind(self);
        self.fetch = async (input, options) => {
          const url = typeof input === 'string' ? input : (input.url || String(input));
          if (url.startsWith(BASE)) {
            const name = url.slice(BASE.length);
            if (!(name in binary)) throw new Error(`Bundled runtime asset missing: ${name}`);
            return new Response(binary[name], {headers: {'Content-Type': name.endsWith('.wasm') ? 'application/wasm' : 'application/zip'}});
          }
          return nativeFetch(input, options);
        };
        // Create script blobs inside this worker's origin, including file:// pages.
        const loaderURL = URL.createObjectURL(new Blob([data.loader], {type:'text/javascript'}));
        const asmURL = URL.createObjectURL(new Blob([data.asm], {type:'text/javascript'}));
        try { importScripts(loaderURL, asmURL); }
        finally { URL.revokeObjectURL(loaderURL);URL.revokeObjectURL(asmURL); }
        const py = await loadPyodide({
          indexURL: BASE,
          stdLibURL: BASE + 'python_stdlib.zip',
          lockFileContents: data.lock,
          stdout: () => {}, stderr: () => {}
        });
        self.postMessage({type: 'ready', version: py.version});
        py.runPython(`
import sys as _sys, io as _io, json as _json, traceback as _traceback
import types as _types, linecache as _linecache, builtins as _builtins

class _OutputLimitExceeded(Exception):
    pass

class _LimitedBytes(_io.BytesIO):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit
        self.written = 0
    def write(self, data):
        self.written += len(data)
        if self.written > self.limit:
            raise _OutputLimitExceeded("출력 크기 제한을 초과했습니다.")
        return super().write(data)

class _Output(_io.TextIOBase):
    def __init__(self, limit):
        self.buffer = _LimitedBytes(limit)
    @property
    def encoding(self):
        return "utf-8"
    def write(self, text):
        if not isinstance(text, str):
            raise TypeError("write() argument must be str")
        self.buffer.write(text.encode("utf-8"))
        return len(text)
    def flush(self):
        pass
    def writable(self):
        return True
    def value(self):
        return self.buffer.getvalue().decode("utf-8", "replace")

def _make_runner(source):
    compiled = compile(source, "student.py", "exec")
    _linecache.cache["student.py"] = (len(source), None, source.splitlines(True), "student.py")
    def execute(input_text):
        old_streams = _sys.stdin, _sys.stdout, _sys.stderr
        old_argv = _sys.argv
        old_builtins = _builtins.__dict__.copy()
        old_io_open = _io.open
        old_recursion_limit = _sys.getrecursionlimit()
        old_main = _sys.modules.get("__main__")
        reader = _io.TextIOWrapper(_io.BytesIO(input_text.encode("utf-8")), encoding="utf-8")
        out, err = _Output(16 * 1024 * 1024), _Output(1024 * 1024)
        module = _types.ModuleType("__main__")
        module.__file__ = "student.py"
        _sys.modules["__main__"] = module
        _sys.stdin, _sys.stdout, _sys.stderr = reader, out, err
        _sys.argv = ["student.py"]
        native_open = _builtins.open
        def standard_open(file, mode="r", *args, **kwargs):
            if isinstance(file, int) and file in (0, 1, 2):
                stream = (reader, out, err)[file]
                if file == 0 and any(flag in mode for flag in "wa+"):
                    raise _io.UnsupportedOperation("stdin is read-only")
                if file != 0 and "r" in mode:
                    raise _io.UnsupportedOperation("output stream is write-only")
                return stream.buffer if "b" in mode else stream
            return native_open(file, mode, *args, **kwargs)
        _builtins.open = _io.open = standard_open
        status, message = "OK", ""
        try:
            exec(compiled, module.__dict__)
        except SystemExit as exc:
            if exc.code not in (None, 0):
                status, message = "RE", "SystemExit: " + str(exc.code)
        except _OutputLimitExceeded as exc:
            status, message = "OLE", str(exc)
        except BaseException:
            status, message = "RE", _traceback.format_exc(limit=8)[-4000:]
        finally:
            _sys.stdin, _sys.stdout, _sys.stderr = old_streams
            _sys.argv = old_argv
            _builtins.__dict__.clear()
            _builtins.__dict__.update(old_builtins)
            _io.open = old_io_open
            _sys.setrecursionlimit(old_recursion_limit)
            if old_main is None:
                _sys.modules.pop("__main__", None)
            else:
                _sys.modules["__main__"] = old_main
        return _json.dumps({"status": status, "output": out.value(), "error": message, "stderr": err.value()[-2000:]})
    return execute
`);
        py.globals.set('_judge_source', data.code);
        let execute;
        try {
          execute = py.runPython('_make_runner(_judge_source)');
        } catch (error) {
          self.postMessage({type: 'complete', status: 'CE', passed: 0, total: data.cases.length, error: String(error.message).slice(-4000)});
          return;
        }
        let passed = 0;
        let firstFailure = null;
        const started = performance.now();
        for (let index = 0; index < data.cases.length; index++) {
          const test = data.cases[index];
          self.postMessage({type: 'case-start', index});
          const start = performance.now();
          const result = JSON.parse(execute(test.input));
          const status = result.status === 'OK' ? (matches(result.output, test.output, test.mode) ? 'AC' : 'WA') : result.status;
          if (status === 'AC') passed++;
          else if (!firstFailure) firstFailure = status;
          self.postMessage({
            type: 'case-result', index, status,
            ms: Math.round(performance.now() - start), error: result.error,
            actual: status !== 'AC' ? result.output.slice(0, 6000) : null,
            expected: status !== 'AC' ? test.output.slice(0, 6000) : null,
            input: status !== 'AC' ? test.input.slice(0, 6000) : null,
            truncated: status !== 'AC' && [result.output,test.output,test.input].some(text=>text.length>6000)
          });
          // Yield worker event processing between cases, independent of the UI thread.
          await new Promise(resolve => setTimeout(resolve, 0));
        }
        execute.destroy();
        self.postMessage({type: 'complete', status: firstFailure || 'AC', passed, total: data.cases.length, ms: Math.round(performance.now() - started)});
      } catch (error) {
        self.postMessage({type: 'engine-error', error: String(error.stack || error).slice(-4000)});
      }
    };
  }

  function run({code, cases, onEvent = () => {}, caseTimeoutMs = 15000, initTimeoutMs = 45000, totalTimeoutMs = 180000}) {
    let worker, timer, totalTimer, settled = false, activeIndex = -1, passed = 0;
    const urls = [];
    let finish;
    const promise = new Promise(resolve => { finish = resolve; });
    function cleanup() {
      clearTimeout(timer);clearTimeout(totalTimer);
      if (worker) worker.terminate();
      for (const url of urls) URL.revokeObjectURL(url);
    }
    function end(result) {
      if (settled) return;
      settled = true;cleanup();
      onEvent({type: 'complete', ...result});
      finish(result);
    }
    function timeout(status, message) {
      end({status, passed, total: cases.length, index: activeIndex, error: message});
    }
    function blobURL(source) {
      const url = URL.createObjectURL(new Blob([source], {type: 'text/javascript'}));
      urls.push(url);return url;
    }
    async function initialize() {
      onEvent({type:'loading',phase:window.PYTHON_RUNTIME ? 'initializing' : 'downloading'});
      const runtime = await loadRuntime();
      if (settled) return;
      onEvent({type:'loading',phase:'initializing'});
      const assets = runtime.assets;
      worker = new Worker(blobURL(`(${workerMain.toString()})();`));
      timer = setTimeout(() => timeout('ENGINE_ERROR', 'Python 실행 환경을 준비하지 못했습니다. 파일 구성을 확인하고 다시 시도하세요.'), initTimeoutMs);
      worker.onmessage = ({data}) => {
        if (settled) return;
        if (data.type === 'ready') {
          clearTimeout(timer);
          totalTimer = setTimeout(() => timeout('TLE', '전체 채점 시간을 초과하여 실행을 중단했습니다.'), totalTimeoutMs);
          timer = setTimeout(() => timeout('TLE', '코드 준비 시간을 초과했습니다.'), caseTimeoutMs);
        } else if (data.type === 'case-start') {
          clearTimeout(timer);activeIndex = data.index;
          timer = setTimeout(() => timeout('TLE', '테스트 제한 시간(15초)을 초과했습니다. 반복 종료 조건과 알고리즘을 확인하세요.'), caseTimeoutMs);
        } else if (data.type === 'case-result') {
          clearTimeout(timer);
          if (data.status === 'AC') passed++;
        } else if (data.type === 'complete') {
          end(data);return;
        } else if (data.type === 'engine-error') {
          timeout('ENGINE_ERROR', data.error);return;
        }
        onEvent(data);
      };
      worker.onerror = event => {
        event.preventDefault();
        timeout('ENGINE_ERROR', `Python 실행 환경 오류: ${event.message || '브라우저 메모리 또는 실행 제한을 확인하세요.'}`);
      };
      worker.postMessage({code, cases, loader: assets['pyodide.js'], asm: assets['pyodide.asm.js'], wasm: assets['pyodide.asm.wasm'], stdlib: assets['python_stdlib.zip'], lock: JSON.parse(assets['pyodide-lock.json'])});
    }
    // Start after returning the cancellable job handle to the caller.
    Promise.resolve().then(initialize).catch(error => timeout('ENGINE_ERROR', String(error.message)));
    return {promise, cancel: () => timeout('CANCELLED', '사용자가 실행을 중단했습니다.')};
  }
  window.PythonJudge = Object.freeze({run});
})();
