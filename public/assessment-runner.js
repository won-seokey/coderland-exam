/* Fetch test banks only when full grading is requested. Keep the workspace light. */
(() => {
  const base=new URL('.',document.currentScript.src),pending={};
  const bank=language=>language==='cpp'?window.CPP_JUDGE_CASES:window.PYTHON_JUDGE_CASES;
  function loadCases(language){
    if(bank(language))return Promise.resolve(bank(language));
    if(!pending[language])pending[language]=new Promise((resolve,reject)=>{
      const script=document.createElement('script');script.src=new URL((language==='cpp'?'cpp-judge-cases.js':'judge-cases.js')+'?v=20261113-workspace',base).href;
      const timer=setTimeout(()=>finish(new Error('채점 데이터 준비 시간이 초과되었습니다. 다시 실행하세요.')),120000);
      let done=false;
      function finish(error){if(done)return;done=true;clearTimeout(timer);script.onload=script.onerror=null;if(error){script.remove();delete pending[language];reject(error);}else resolve(bank(language));}
      script.onload=()=>finish(bank(language)?null:new Error('채점 데이터 형식을 확인할 수 없습니다.'));
      script.onerror=()=>finish(new Error('채점 데이터를 불러오지 못했습니다. 배포 파일을 확인하고 다시 실행하세요.'));
      document.head.append(script);
    });
    return pending[language];
  }
  function run({problem,kind,code,onEvent=()=>{}}){
    let inner,done=false,resolve;
    const total=kind==='samples'?problem.samples.length:19,promise=new Promise(r=>resolve=r);
    function forward(event){if(done)return;if(event.type==='complete'){done=true;resolve(event);}onEvent(event);}
    (async()=>{
      let cases;
      if(kind==='samples')cases=problem.samples.map(s=>({input:s.input+'\n',output:s.output,public:true,mode:'tokens'}));
      else{forward({type:'loading',phase:'cases'});const data=await loadCases(problem.language);cases=data.problems[problem.id];if(!cases)throw new Error('이 문제의 채점 데이터가 없습니다.');}
      if(done)return;
      inner=(problem.language==='cpp'?window.CppJudge:window.PythonJudge).run({code,cases,onEvent:forward});
    })().catch(error=>forward({type:'complete',status:'ENGINE_ERROR',passed:0,total,error:error.message}));
    return {promise,cancel:()=>inner?inner.cancel():forward({type:'complete',status:'CANCELLED',passed:0,total})};
  }
  window.AssessmentRunner={loadCases,run};
})();
