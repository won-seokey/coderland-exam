/* Real C++17 compilation and execution, entirely inside a disposable worker. */
(() => {
  const base=new URL('.',document.currentScript.src);
  let loading;
  const script=name=>new Promise((resolve,reject)=>{
    const node=document.createElement('script');node.src=new URL(name,base).href;
    node.onload=resolve;node.onerror=()=>{node.remove();reject(new Error(`${name} 파일을 불러오지 못했어요. 배포 파일을 확인하고 다시 실행하세요.`));};document.head.append(node);
  });
  async function runtime() {
    if(!loading) loading=(async()=>{
      if(!window.CPP_RUNTIME)await script('cpp-runtime.js?v=20261113-fullcourses');
      // Retry starts cleanly instead of duplicating a partially downloaded chunk.
      window.CPP_RUNTIME.parts={};
      for(const name of window.CPP_RUNTIME.files)await script(name);
      return window.CPP_RUNTIME;
    })().catch(error=>{loading=null;throw error;});
    return loading;
  }
  function main() {
    const decode=parts=>{
      const bytes=parts.map(part=>Uint8Array.from(atob(part),c=>c.charCodeAt(0)));
      const result=new Uint8Array(bytes.reduce((n,a)=>n+a.length,0));let at=0;
      for(const a of bytes){result.set(a,at);at+=a.length;}return result;
    };
    const text=bytes=>new TextDecoder().decode(Uint8Array.from(bytes,c=>c.charCodeAt(0)));
    self.onmessage=async({data})=>{
      let passed=0,output='',stderr='',phase='init';
      try {
        const url=URL.createObjectURL(new Blob([data.shared],{type:'text/javascript'}));
        try{importScripts(url);}finally{URL.revokeObjectURL(url);}
        const assets={};for(const [name,parts] of Object.entries(data.parts))assets[name]=decode(parts);
        const api=new self.CppAPI({readBuffer:async name=>assets[name].buffer,compileStreaming:async name=>WebAssembly.compile(assets[name]),hostWrite:(s,fd)=>{
          if(fd===2)stderr+=s;else output+=s;
          if(output.length+stderr.length>16*1024*1024)throw new Error('OUTPUT_LIMIT');
        }});
        await api.ready;phase='compile';self.postMessage({type:'compiling'});
        let module;
        try{module=await api.build(data.code);}
        catch(error){self.postMessage({type:'complete',status:'CE',passed:0,total:data.cases.length,error:text(output+stderr).replace(/\x1b\[[0-9;]*m/g,'').slice(-6000)});return;}
        self.postMessage({type:'ready'});phase='run';let failure;
        for(let index=0;index<data.cases.length;index++) {
          const test=data.cases[index];output='';stderr='';self.postMessage({type:'case-start',index});
          const started=performance.now();let status='AC',error='';
          try{await api.execute(module,test.input);}catch(e){status=e.message==='OUTPUT_LIMIT'?'OLE':'RE';error=String(e.message);}
          const actual=text(output),expected=test.output;
          if(status==='AC'&&JSON.stringify(actual.trim().split(/\s+/u).filter(Boolean))!==JSON.stringify(expected.trim().split(/\s+/u).filter(Boolean)))status='WA';
          if(status==='AC')passed++;else failure ||= status;
          self.postMessage({type:'case-result',index,status,ms:Math.round(performance.now()-started),error,actual:status==='AC'?null:actual.slice(0,6000),expected:status==='AC'?null:expected.slice(0,6000),input:status==='AC'?null:test.input.slice(0,6000),truncated:[actual,expected,test.input].some(s=>s.length>6000)});
          await new Promise(resolve=>setTimeout(resolve,0));
        }
        self.postMessage({type:'complete',status:failure||'AC',passed,total:data.cases.length});
      }catch(error){self.postMessage({type:'complete',status:phase==='run'?'RE':'ENGINE_ERROR',passed,total:data.cases.length,error:String(error.stack||error)});}
    };
  }
  function run({code,cases,onEvent=()=>{},caseTimeoutMs=15000,initTimeoutMs=180000,totalTimeoutMs=300000}) {
    let worker,url,timer,totalTimer,settled=false,passed=0,index=-1,resolve;
    const promise=new Promise(r=>resolve=r);
    const finish=result=>{if(settled)return;settled=true;clearTimeout(timer);clearTimeout(totalTimer);worker?.terminate();if(url)URL.revokeObjectURL(url);const event={type:'complete',passed,total:cases.length,...result};onEvent(event);resolve(event);};
    const timeout=(ms,status,message)=>{clearTimeout(timer);timer=setTimeout(()=>finish({status,index,error:message}),ms);};
    timeout(initTimeoutMs,'ENGINE_ERROR','C++ 컴파일러 준비 시간이 초과됐어요. 연결 상태를 확인하고 다시 실행하세요.');
    onEvent({type:'loading',phase:'downloading'});
    runtime().then(data=>{
      if(settled)return;
      url=URL.createObjectURL(new Blob([`(${main.toString()})();`],{type:'text/javascript'}));worker=new Worker(url);
      worker.onmessage=({data:event})=>{
        if(settled)return;
        if(event.type==='complete'){finish(event);return;}
        if(event.type==='ready'){clearTimeout(timer);totalTimer=setTimeout(()=>finish({status:'TLE',index,error:'전체 채점 시간을 초과했어요.'}),totalTimeoutMs);}
        if(event.type==='compiling'){timeout(120000,'TLE','컴파일 시간이 초과됐어요.');onEvent({type:'loading',phase:'compiling'});return;}
        if(event.type==='case-start'){index=event.index;timeout(caseTimeoutMs,'TLE','테스트 실행 시간을 초과했어요.');}
        if(event.type==='case-result'){clearTimeout(timer);if(event.status==='AC')passed++;}
        onEvent(event);
      };
      worker.onerror=event=>finish({status:'ENGINE_ERROR',error:event.message});
      worker.postMessage({code,cases,shared:data.shared,parts:data.parts});
    }).catch(error=>finish({status:'ENGINE_ERROR',error:error.message}));
    return {promise,cancel:()=>finish({status:'CANCELLED'})};
  }
  window.CppJudge={run};
})();
