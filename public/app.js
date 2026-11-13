/* Local-first assessment with offline, test-case-based Python grading. */
(() => {
  'use strict';
  const problems = [...window.PYTHON_PROBLEMS.map(p=>({...p,language:'python',languageLabel:'Python 3'})),...window.CPP_PROBLEMS];
  const courses = [...window.PYTHON_COURSES.map(c=>({...c,language:'python'})),...window.CPP_COURSES];
  const caseBank = p => (p.language==='cpp'?window.CPP_JUDGE_CASES:window.PYTHON_JUDGE_CASES);
  const languages=[{id:'python',label:'Python',first:1,count:65},{id:'cpp',label:'C++',first:66,count:65}];
  const courseProblems = () => problems.filter(p => p.course === currentProblem().course);
  const caseVersion = p => p.caseVersion || window.PYTHON_JUDGE_CASES.version;
  const $ = id => document.getElementById(id);
  // Keep the older problem set's drafts intact, without mixing them into new questions.
  const KEY = 'coderland-python-assessment-easy20-v3';
  let storageAvailable = true;
  let loaded = {};
  try { loaded = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; }
  catch { storageAvailable = false; }
  const state = {
    codes: loaded.codes && typeof loaded.codes === 'object' ? loaded.codes : {},
    memos: loaded.memos && typeof loaded.memos === 'object' ? loaded.memos : {},
    completed: loaded.completed && typeof loaded.completed === 'object' ? loaded.completed : {},
    grades: loaded.grades && typeof loaded.grades === 'object' ? loaded.grades : {},
    archived: Array.isArray(loaded.archived) ? loaded.archived : [],
    problemVersions: {...loaded.problemVersions},
    exam: loaded.exam === true,
    elapsed: Number.isFinite(loaded.elapsed) && loaded.elapsed >= 0 ? loaded.elapsed : 0,
    startedAt: Number.isFinite(loaded.startedAt) && loaded.startedAt > 0 && loaded.startedAt <= Date.now() ? loaded.startedAt : null
  };
  // Revised intermediate statements must not inherit unrelated drafts or scores.
  for (const p of problems) {
    if (p.course === 'intermediate' && state.problemVersions[p.id] !== p.caseVersion) {
      if (p.id in state.codes || p.id in state.memos || p.id in state.grades || state.completed[p.id]) {
        state.archived.push({id:p.id,revision:state.problemVersions[p.id] || '2026-11-10.courses-v1',code:state.codes[p.id] || '',memo:state.memos[p.id] || '',grade:state.grades[p.id] || null,completed:!!state.completed[p.id]});
      }
      for (const bucket of ['codes','memos','grades','completed']) delete state[bucket][p.id];
    }
    state.problemVersions[p.id]=p.caseVersion;
  }
  let current = 1;
  let toastTimeout;
  let editorOpen = true;
  let activeJob = null;
  const judgeViews = {};
  const verdicts = {AC:'정답', WA:'오답', RE:'실행 오류', CE:'문법 오류', TLE:'시간 초과', OLE:'출력 초과', CANCELLED:'중단됨', ENGINE_ERROR:'실행 환경 오류', LOADING:'준비 중', RUNNING:'채점 중'};

  const verdict = (status,p) => status==='CE'&&p.language==='cpp'?'컴파일 오류':(verdicts[status] || status);

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function toast(message) {
    clearTimeout(toastTimeout);
    $('toast').textContent = message;
    $('toast').classList.add('visible');
    toastTimeout = setTimeout(() => $('toast').classList.remove('visible'), 2800);
  }
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
      storageAvailable = true;
    } catch {
      if (storageAvailable) toast('브라우저 저장 공간을 사용할 수 없어요. 전체 풀이를 내려받아 보관하세요.');
      storageAvailable = false;
    }
    $('save-status').textContent = storageAvailable ? '이 브라우저에 저장됨' : '임시 보관 중 · 내려받기 권장';
  }
  function starter(problem) {
    if(problem.language==='cpp')return `// ${problem.id} · ${problem.title}\n#include <iostream>\nusing namespace std;\n\nint main() {\n    // cin으로 입력받고 cout으로 결과를 출력하세요.\n    \n    return 0;\n}\n`;

    return `# ${problem.id} · ${problem.title}\n# 표준 입력: input() · 표준 출력: print()\n\n`;
  }
  function currentProblem() { return problems[current - 1]; }
  function sourceFor(problem) {
    return typeof state.codes[problem.id] === 'string' ? state.codes[problem.id] : starter(problem);
  }
  function gradeMatches(problem, record) {
    return record && record.code === sourceFor(problem) && record.suiteVersion === caseVersion(problem);
  }
  function updateProgress() {
    const count = problems.filter(p => state.completed[p.id] === true).length;
    $('completed-count').replaceChildren(document.createTextNode(String(count)), element('span', '', `/ ${problems.length}`));
    $('progress-fill').style.width = `${courseProblems().filter(p => state.completed[p.id]).length * 100 / courseProblems().length}%`;
    $('completed-checkbox').checked = state.completed[currentProblem().id] === true;
    $('grade-score').textContent = String(courseProblems().reduce((score, p) => score + (gradeMatches(p, state.grades[p.id]) && state.grades[p.id].status === 'AC' ? p.points : 0), 0));
  }
  function renderNavigation() {
    const nav = $('problem-list');
    const previousScroll=nav.scrollTop;
    nav.replaceChildren();
    $('language-selector').replaceChildren(...languages.map(language=>{
      const button=element('button','language-button'+(language.id===currentProblem().language?' active':''),`${language.label} · ${language.count}`);
      button.type='button';button.dataset.language=language.id;button.setAttribute('aria-pressed',String(language.id===currentProblem().language));
      button.addEventListener('click',()=>{$('problem-search').value='';navigate(language.first);});return button;
    }));
    $('course-selector').replaceChildren(...courses.filter(c=>c.language===currentProblem().language).map(course => {
      const button=element('button','course-button'+(course.id===currentProblem().course?' active':''),course.label);
      button.type='button';button.dataset.course=course.id;button.setAttribute('aria-pressed',String(course.id===currentProblem().course));
      button.addEventListener('click',()=>{$('problem-search').value='';navigate(problems.find(p=>p.course===course.id).level);});return button;
    }));
    $('course-progress').textContent=`${currentProblem().languageLabel} · ${currentProblem().courseLabel} · ${courseProblems().filter(p=>state.completed[p.id]).length} / ${courseProblems().length} 완료`;
    $('score-course').textContent=currentProblem().courseLabel;

    let lastUnit='';
    const query=$('problem-search').value.trim().toLowerCase();
    for (const p of courseProblems().filter(p=>!query||`${p.title} ${p.id} ${p.unit} ${p.courseIndex}`.toLowerCase().includes(query))) {
      if (p.unit !== lastUnit) {
        nav.append(element('h3','nav-unit-heading',p.unit));
        lastUnit=p.unit;
      }
      const button = element('button', `problem-nav-item${p.level === current ? ' active' : ''}`);
      button.type = 'button';
      button.dataset.level = p.level;
      button.setAttribute('aria-label', `문제 ${p.level}, 난이도 ${p.difficulty}, ${p.title}${state.completed[p.id] ? ', 풀이 완료 기록' : ''}`);
      if (p.level === current) button.setAttribute('aria-current', 'page');
      button.append(element('span', 'nav-number', String(p.courseIndex).padStart(2, '0')), element('span', 'nav-text', p.title));
      const accepted = gradeMatches(p, state.grades[p.id]) && state.grades[p.id].status === 'AC';
      const status = element('span', `nav-status${accepted ? ' accepted' : (state.completed[p.id] === true ? ' done' : '')}`, accepted ? '✓' : '');
      if (accepted) button.setAttribute('aria-label', `문제 ${p.level}, 난이도 ${p.difficulty}, ${p.title}, 현재 코드 정답 판정`);
      status.setAttribute('aria-hidden', 'true');
      button.append(status);
      nav.append(button);
    }
    nav.scrollTop=previousScroll;
    const selected=nav.querySelector('[aria-current="page"]');
    if(!nav.querySelector('.problem-nav-item'))nav.append(element('p','nav-empty','검색 결과가 없습니다.'));
    if(!selected)return;
    const bounds=nav.getBoundingClientRect(), box=selected.getBoundingClientRect();
    if (box.bottom>bounds.bottom) nav.scrollTop+=box.bottom-bounds.bottom+8;
    else if (box.top<bounds.top+28) nav.scrollTop-=bounds.top+28-box.top;
  }
  function section(title, paragraphs) {
    const node = element('section');
    node.append(element('h3', 'section-heading', title));
    const body = element('div', 'section-body');
    for (const paragraph of paragraphs) body.append(element('p', '', paragraph));
    node.append(body);
    return node;
  }
  function renderSamples(problem, parent) {
    const node = element('section');
    node.append(element('h3', 'section-heading', '입출력 예제'));
    problem.samples.forEach((sample, index) => {
      const grid = element('div', 'sample-grid');
      for (const type of ['input', 'output']) {
        const box = element('div', 'sample-box');
        const heading = element('div', 'sample-header');
        heading.append(element('span', '', `예제 ${type === 'input' ? '입력' : '출력'} ${index + 1}`));
        const button = element('button', 'copy-button', '복사');
        button.type = 'button';
        button.dataset.sample = String(index);
        button.dataset.copyType = type;
        button.setAttribute('aria-label', `예제 ${type === 'input' ? '입력' : '출력'} ${index + 1} 복사`);
        heading.append(button);
        box.append(heading, element('pre', '', sample[type]));
        grid.append(box);
      }
      node.append(grid);
      const explanation = element('p', 'sample-explanation');
      explanation.append(element('strong', '', '예제 설명  '), document.createTextNode(sample.explanation));
      node.append(explanation);
    });
    parent.append(node);
  }
  function renderLearning(problem) {
    $('hint-details').open = false;
    $('solution-details').open = false;
    $('hints-content').replaceChildren();
    problem.hints.forEach((hint, index) => {
      const details = element('details', 'hint-step');
      details.append(element('summary', '', `힌트 ${index + 1} 펼치기`), element('p', '', hint));
      $('hints-content').append(details);
    });
    const steps = element('ol');
    for (const step of problem.approach) steps.append(element('li', '', step));
    const code = element('pre');
    code.append(element('code', '', problem.solution));
    $('solution-content').replaceChildren(steps, element('p', 'complexity-note', problem.complexity), element('h4', '', `${problem.languageLabel} 참고 풀이`), code);
  }
  function updateMode() {
    $('practice-mode').classList.toggle('active', !state.exam);
    $('exam-mode').classList.toggle('active', state.exam);
    $('practice-mode').setAttribute('aria-pressed', String(!state.exam));
    $('exam-mode').setAttribute('aria-pressed', String(state.exam));
    $('mode-description').textContent = state.exam ? '힌트·해설 비공개' : '학습 개념·힌트·참고 풀이 제공';
    $('learning-section').hidden = state.exam;
    $('exam-notice').hidden = !state.exam;
    $('topic-tags').hidden = state.exam;
    $('concept-card').hidden = state.exam;
    $('concept-details').hidden = state.exam;
    $('problem-list').classList.toggle('exam-navigation',state.exam);
    if (state.exam) {
      $('hint-details').open = false;
      $('solution-details').open = false;
    }
  }
  function updateLineCount() {
    window.CodeEditor?.sync();
    $('line-count').textContent = `${$('code-editor').value.split('\n').length}줄`;
  }
  function render(focus = false) {
    const p = currentProblem();
    document.title = `${p.languageLabel} ${p.courseLabel} ${p.courseIndex}. ${p.title} | 코더랜드 프로그래밍 테스트`;
    $('problem-id').textContent = p.id;
    $('level-badge').replaceChildren(element('small', '', 'LEVEL'), element('strong', '', p.difficulty));
    $('problem-subtitle').textContent = p.subtitle;
    $('problem-title').textContent = p.title;
    $('problem-minutes').textContent = `권장 ${p.minutes}분`;
    $('problem-points').textContent = `${p.points}점`;
    $('topic-tags').replaceChildren(...p.topics.map(topic => element('span', 'topic-tag', topic)));
    $('difficulty-line').replaceChildren(...Array.from({length: 10}, (_, i) => element('span', i < p.difficulty ? 'filled' : '')));
    $('difficulty-line').setAttribute('aria-label', `자체 난이도 ${p.difficulty} / 10 · 문제 ${p.level} / ${problems.length}`);
    $('concept-unit').textContent=p.unit;
    $('concept-goal').textContent=p.concept;
    $('concept-input').textContent=p.ioCheck[0];
    $('concept-output').textContent=p.ioCheck[1];
    const content = $('problem-content');
    content.replaceChildren(section('문제', p.description), section('입력', p.input), section('출력', p.output));
    const constraintSection = element('section');
    constraintSection.append(element('h3', 'section-heading', '제한'));
    const list = element('ul', 'constraints');
    for (const c of p.constraints) list.append(element('li', '', c));
    constraintSection.append(list);
    content.append(constraintSection);
    renderSamples(p, content);
    renderLearning(p);
    $('editor-filename').textContent = `${p.id}.${p.language==='cpp'?'cpp':'py'}`;
    $('code-editor').dataset.language=p.language;
    $('editor-language').textContent=p.languageLabel;
    $('download-code').textContent=p.language==='cpp'?'.cpp 내려받기 ↓':'.py 내려받기 ↓';
    $('code-editor').setAttribute('aria-label',`${p.languageLabel} 코드 입력`);
    $('judge-language-help').textContent=p.language==='cpp'?'C++17 · 첫 채점 시 컴파일러 준비':'Python 3 · 첫 채점 시 실행 엔진 준비';
    window.EditorTools?.close();
    $('code-editor').value = typeof state.codes[p.id] === 'string' ? state.codes[p.id] : starter(p);
    $('code-editor').scrollTop=0;$('code-editor').scrollLeft=0;
    $('problem-memo').value = typeof state.memos[p.id] === 'string' ? state.memos[p.id] : '';
    $('pagination-label').textContent = `${p.courseLabel} ${String(p.courseIndex).padStart(2, '0')} / ${courseProblems().length}`;
    $('previous-button').disabled = p.courseIndex === 1;
    $('next-button').disabled = p.courseIndex === courseProblems().length;
    updateLineCount();
    renderNavigation();
    updateProgress();
    updateMode();
    renderJudge();
    $('save-status').textContent = storageAvailable ? '코드·메모 자동 저장' : '임시 보관 중 · 내려받기 권장';
    if (focus) {
      $('problem-panel').scrollTop=0;
      $('problem-title').focus({preventScroll: true});
    }
  }
  function navigate(level) {
    if (level < 1 || level > problems.length) return;
    if (current === level) return;
    location.hash = String(level);
    current = level;
    render(true);
  }
  function readHash() {
    const hash = location.hash.slice(1);
    return /^[1-9]\d*$/.test(hash) && Number(hash)<=problems.length ? Number(hash) : 1;
  }
  function setEditor(open) {
    editorOpen = open;
    $('editor-panel').hidden = !open;
    $('workspace').classList.toggle('editor-open', open);
    $('code-toggle').setAttribute('aria-expanded', String(open));
    $('code-toggle').textContent = open ? '편집기 접기' : '코드 편집기 열기';
    if (open) $('code-editor').focus({preventScroll: false});
  }
  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
      else {
        const previous = document.activeElement;
        const area = element('textarea');
        area.value = text;
        area.style.cssText = 'position:fixed;left:-9999px;top:0';
        document.body.append(area);
        area.select();
        const ok = document.execCommand('copy');
        area.remove();
        if (previous instanceof HTMLElement) previous.focus({preventScroll: true});
        if (!ok) throw new Error('copy unavailable');
      }
      toast('예제를 복사했어요.');
    } catch { toast('복사할 수 없어요. 예제 텍스트를 직접 선택해 복사해 주세요.'); }
  }
  function download(filename, content, type) {
    const url = URL.createObjectURL(new Blob([content], {type}));
    const anchor = element('a');
    anchor.href = url;
    anchor.download = filename;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }
  function elapsedNow() {
    return state.elapsed + (state.startedAt ? Math.max(0, Date.now() - state.startedAt) : 0);
  }
  function updateTimer() {
    const seconds = Math.floor(elapsedNow() / 1000);
    $('timer-display').textContent = [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60].map(v => String(v).padStart(2, '0')).join(':');
    $('timer-toggle').textContent = state.startedAt ? '일시정지' : '시작';
    $('timer-toggle').setAttribute('aria-label', state.startedAt ? '타이머 일시정지' : '타이머 시작');
  }

  function renderJudge() {
    const p = currentProblem();
    const view = activeJob?.id === p.id ? activeJob.view : (judgeViews[p.id] || state.grades[p.id]);
    const cases = caseBank(p)?.problems[p.id] || [];
    $('judge-case-count').textContent = String(cases.length || 19);
    $('run-samples').disabled = Boolean(activeJob);
    $('judge-submit').disabled = Boolean(activeJob);
    $('judge-stop').hidden = !activeJob;
    $('judge-results').hidden = !view;
    if (!view) return;
    const publicOnly = view.kind === 'samples';
    const title = publicOnly ? '예제 실행 결과' : '전체 채점 결과';
    $('judge-results-title').textContent = title;
    $('judge-result-badge').textContent = view.status === 'AC' && publicOnly ? '예제 통과' : (verdict(view.status,p));
    $('judge-result-badge').className = view.status === 'AC' ? 'accepted' : (['LOADING','RUNNING','CANCELLED'].includes(view.status) ? 'neutral' : 'failed');
    const results = view.results || [];
    let summary;
    if (view.status === 'LOADING' && view.loadingPhase==='cases') summary='채점 데이터를 준비하고 있습니다…';
    else if (view.status === 'LOADING' && p.language==='cpp') summary=view.loadingPhase==='compiling'?'C++ 코드를 컴파일하고 있어요…':'첫 실행을 위해 C++ 컴파일러를 준비하고 있어요. 준비 중에도 코드를 작성할 수 있어요.';
    else if (view.status === 'LOADING') summary = view.loadingPhase === 'downloading' ? '첫 채점을 위해 Python 실행 파일을 불러오고 있어요. 준비 중에도 코드는 작성할 수 있어요.' : 'Python 실행 환경을 준비하고 있어요…';
    else if (view.status === 'RUNNING') summary = `테스트 ${Math.min(results.length + 1, view.total)} / ${view.total} 실행 중 · ${view.passed || 0}개 통과`;
    else if (view.status === 'AC') summary = publicOnly ? `예제 ${view.total}개 통과. 정답 판정은 전체 채점을 실행해 주세요.` : `${view.passed} / ${view.total}개 테스트 통과 · ${p.points}점`;
    else summary = `${view.passed || 0} / ${view.total}개 테스트 통과 · ${verdict(view.status,p)}`;
    $('judge-summary').textContent = summary;
    $('judge-stale').hidden = gradeMatches(p, view);
    $('judge-progress').max = view.total || 1;
    $('judge-progress').value = results.length;
    $('judge-error').hidden = !view.error;
    $('judge-error').textContent = view.error || '';
    const rows = [];
    for (let i = 0; i < view.total; i++) {
      const test = (publicOnly ? p.samples : cases)[i];
      const result = results.find(r => r.index === i);
      const running = view.status === 'RUNNING' && view.activeIndex === i && !result;
      const row = element('div', 'judge-case');
      const head = element('div', 'judge-case-line');
      const isPublic = publicOnly || (test?.public ?? (i<2));
      const name = isPublic ? `예제 ${i + 1}` : `추가 검증 ${i - 1}`;
      head.append(element('span', '', name), element('span', result?.status === 'AC' ? 'case-pass' : (result ? 'case-fail' : 'case-wait'), result ? (result.status === 'AC' ? '통과' : (verdict(result.status,p))) : (running ? '실행 중' : (['LOADING','RUNNING'].includes(view.status) ? '대기' : '미실행'))));
      row.append(head);
      if (result && result.status !== 'AC') {
        if (result.actual !== null && result.actual !== undefined) {
          const details = element('details');
          details.append(element('summary', '', '예상 출력과 내 출력 비교'));
          details.append(element('p', '', '테스트 입력'),element('pre','',result.input || '(빈 입력)'),element('p', '', '예상 출력'), element('pre', '', result.expected || '(출력 없음)'), element('p', '', '내 출력'), element('pre', '', result.actual || '(출력 없음)'));
          if(result.truncated)details.append(element('p','','긴 입력·출력은 앞 6,000자만 표시합니다.'));
          row.append(details);
        }
        if (result.error) row.append(element('pre', 'case-error', result.error));
      }
      rows.push(row);
    }
    $('judge-case-results').replaceChildren(...rows);
  }

  function startJudge(kind) {
    if (activeJob) return;
    const p = currentProblem();
    if (!window.AssessmentRunner || !(p.language==='cpp'?window.CppJudge:window.PythonJudge)) {
      toast('채점 파일을 찾을 수 없어요. 배포 ZIP의 파일을 모두 같은 폴더에 놓아 주세요.');return;
    }
    const code = $('code-editor').value;
    if (!code.trim()) { toast('먼저 코드를 작성해 주세요.');return; }
    state.codes[p.id] = code;save();
    const cases = kind === 'samples' ? p.samples.map(s => ({input:s.input+'\n',output:s.output,public:true,mode:'tokens'})) : (caseBank(p)?.problems[p.id] || Array.from({length:19},(_,i)=>({public:i<2})));
    const view = {kind,code,suiteVersion:caseVersion(p),status:'LOADING',passed:0,total:cases.length,results:[],activeIndex:-1};
    const job = {id:p.id,view,runner:null};
    activeJob = job;judgeViews[p.id] = view;
    renderJudge();
    job.runner = window.AssessmentRunner.run({problem:p,kind,code,onEvent(event) {
      if (activeJob !== job) return;
      if (event.type === 'loading') view.loadingPhase = event.phase;
      else if (event.type === 'ready') view.status = 'RUNNING';
      else if (event.type === 'case-start') { view.status = 'RUNNING';view.activeIndex = event.index; }
      else if (event.type === 'case-result') {
        view.results.push(event);
        if (event.status === 'AC') view.passed++;
      } else if (event.type === 'complete') {
        Object.assign(view,{status:event.status,passed:event.passed,total:event.total,error:event.error || '',at:new Date().toISOString()});
        if (event.status === 'TLE' && event.index >= 0 && !view.results.some(r => r.index === event.index)) view.results.push({index:event.index,status:'TLE',error:event.error});
        activeJob = null;
        if (kind === 'all' && !['CANCELLED','ENGINE_ERROR'].includes(event.status)) {
          state.grades[p.id] = {...view,results:view.results.map(result => ({...result}))};
          if (event.status === 'AC' && gradeMatches(p, view)) state.completed[p.id] = true;
          save();
        }
        updateProgress();renderNavigation();
        toast(`${p.id} · ${event.status === 'AC' && kind === 'samples' ? '예제 통과' : (verdict(event.status,p))}`);
      }
      renderJudge();
    }});
  }

  $('problem-list').addEventListener('click', e => {
    const button = e.target.closest('[data-level]');
    if (button) navigate(Number(button.dataset.level));
  });
  window.addEventListener('hashchange', () => { const level=readHash();if(current!==level){current=level;render(true);} });
  $('previous-button').addEventListener('click', () => navigate(current - 1));
  $('next-button').addEventListener('click', () => navigate(current + 1));
  $('practice-mode').addEventListener('click', () => { state.exam = false; updateMode(); save(); });
  $('exam-mode').addEventListener('click', () => { state.exam = true; updateMode(); save(); });
  $('code-toggle').addEventListener('click', () => setEditor(!editorOpen));
  $('editor-close').addEventListener('click', () => { setEditor(false); $('code-toggle').focus(); });
  $('completed-checkbox').addEventListener('change', e => {
    state.completed[currentProblem().id] = e.target.checked;
    save(); updateProgress(); renderNavigation();
    toast(e.target.checked ? '풀이 완료로 기록했어요. 채점 결과는 별도로 확인하세요.' : '완료 기록을 해제했어요.');
  });
  $('code-editor').addEventListener('input', () => {
    state.codes[currentProblem().id] = $('code-editor').value;
    updateLineCount(); save(); updateProgress();renderNavigation();renderJudge();
  });
  $('problem-memo').addEventListener('input', () => { state.memos[currentProblem().id] = $('problem-memo').value; save(); });
  $('problem-content').addEventListener('click', e => {
    const button = e.target.closest('[data-copy-type]');
    if (button) copyText(currentProblem().samples[Number(button.dataset.sample)][button.dataset.copyType]);
  });
  $('download-code').addEventListener('click', () => { download(`${currentProblem().id}.${currentProblem().language==='cpp'?'cpp':'py'}`, $('code-editor').value, 'text/plain;charset=utf-8'); toast('현재 문제의 코드 파일을 내려받아요.'); });
  $('run-samples').addEventListener('click', () => startJudge('samples'));
  $('judge-submit').addEventListener('click', () => startJudge('all'));
  $('judge-stop').addEventListener('click', () => activeJob?.runner?.cancel());
  $('reset-code').addEventListener('click', () => {
    if (!confirm('현재 문제의 코드를 기본 틀로 되돌릴까요? 메모와 다른 문제의 코드는 유지됩니다.')) return;
    delete state.codes[currentProblem().id];
    $('code-editor').value = starter(currentProblem());
    updateLineCount();save();updateProgress();renderNavigation();renderJudge();
  });
  $('export-button').addEventListener('click', () => {
    const lines = ['# 코더랜드 프로그래밍 실력 테스트 · 내 풀이', '', `저장 시각: ${new Date().toLocaleString('ko-KR')}`, `누적 풀이 시간: ${$('timer-display').textContent}`, ...courses.map(c => `${c.language==='cpp'?'C++ ':''}${c.label} 점수: ${problems.filter(p=>p.course===c.id).reduce((sum,p)=>sum+(gradeMatches(p,state.grades[p.id])&&state.grades[p.id].status==='AC'?p.points:0),0)} / 100`), '', '> 브라우저에서 테스트로 판별한 기록입니다. 서버가 보증하는 성적표는 아닙니다.', ''];
    for (const p of problems) {
      const grade=state.grades[p.id];
      const description=grade ? `${verdict(grade.status,p)} (${grade.passed}/${grade.total}) · ${gradeMatches(p,grade) ? '현재 코드' : '코드 또는 기준 변경됨 · 재채점 필요'} · ${grade.at}` : '미채점';
      lines.push(`## ${p.languageLabel} ${p.courseLabel} ${p.courseIndex}. ${p.title} · ${p.id} (${p.points}점)`, `풀이 상태: ${state.completed[p.id] ? '완료 기록' : '미완료'}`, `전체 채점: ${description}`, '', p.language==='cpp'?'```cpp':'```python', sourceFor(p), '```', '', '### 메모', typeof state.memos[p.id] === 'string' ? state.memos[p.id] : '', '');
    }
    if (state.archived.length) {
      lines.push('# 개편 전 중급 풀이 보관함','이전 문제의 코드와 메모입니다. 현재 문제의 점수에는 포함하지 않습니다.','');
      for (const old of state.archived) lines.push(`## ${old.id} · ${old.revision}`,'```python',old.code,'```',old.memo,'');
    }
    download('코더랜드_프로그래밍_내풀이.md', lines.join('\n'), 'text/markdown;charset=utf-8');
    toast('전체 코드와 메모를 내려받아요.');
  });
  $('timer-toggle').addEventListener('click', () => {
    if (state.startedAt) { state.elapsed = elapsedNow();state.startedAt = null; }
    else state.startedAt = Date.now();
    updateTimer();save();
  });
  $('timer-reset').addEventListener('click', () => {
    if (elapsedNow() > 0 && !confirm('누적 풀이 시간을 0으로 되돌릴까요? 코드는 유지됩니다.')) return;
    state.elapsed = 0;state.startedAt = null;updateTimer();save();
  });
  $('print-button').addEventListener('click', () => window.print());
  const dialog = $('guide-dialog');
  $('guide-button').addEventListener('click', () => dialog.showModal());
  $('guide-close').addEventListener('click', () => dialog.close());
  $('guide-done').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect();if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
  $('problem-search').addEventListener('input',renderNavigation);
  window.AssessmentUI={refreshNavigation:renderNavigation,getProblem:currentProblem,setEditor};
  window.addEventListener('pagehide', save);
  current = readHash();
  render(); setEditor(true);save(); updateTimer(); setInterval(updateTimer, 1000);
  window.__assessmentReady = true;
  clearTimeout(window.__assessmentBootTimer);
  $('startup-status').hidden = true;
  if (!storageAvailable) toast('저장 공간을 사용할 수 없어요. 풀이를 내려받아 보관하세요.');
})();
