/* Workspace layout controls. No account or external editor service required. */
(() => {
  const $=id=>document.getElementById(id),workspace=$('workspace'),editor=$('code-editor'),resizer=$('pane-resizer');
  try{const size=localStorage.getItem('coderland-editor-font-size');if(['14','16','18','20'].includes(size)){workspace.style.setProperty('--editor-font-size',size+'px');$('editor-font-size').value=size;}}catch{}
  function focusMode(on){workspace.classList.toggle('editor-focus',on);$('editor-focus').setAttribute('aria-pressed',String(on));$('editor-focus').textContent=on?'분할 화면':'편집기 확대';window.EditorTools?.close();}
  $('editor-focus').addEventListener('click',()=>focusMode(!workspace.classList.contains('editor-focus')));
  $('editor-font-size').addEventListener('change',event=>{workspace.style.setProperty('--editor-font-size',event.target.value+'px');try{localStorage.setItem('coderland-editor-font-size',event.target.value);}catch{}window.CodeEditor.sync();});
  function mobileTab(tab){workspace.dataset.mobileTab=tab;$('mobile-problem').classList.toggle('active',tab==='problem');$('mobile-code').classList.toggle('active',tab==='code');if(tab==='code')window.AssessmentUI.setEditor(true);}
  mobileTab('problem');
  $('code-toggle').addEventListener('click',event=>{if(matchMedia('(max-width:900px)').matches){event.stopImmediatePropagation();mobileTab('code');}},true);
  $('editor-close').addEventListener('click',event=>{if(matchMedia('(max-width:900px)').matches){event.stopImmediatePropagation();mobileTab('problem');}},true);
  $('mobile-problem').addEventListener('click',()=>mobileTab('problem'));$('mobile-code').addEventListener('click',()=>mobileTab('code'));
  $('mobile-list').addEventListener('click',()=>workspace.classList.toggle('sidebar-open'));
  $('sidebar-close').addEventListener('click',()=>workspace.classList.remove('sidebar-open'));
  $('problem-list').addEventListener('click',event=>{if(event.target.closest('[data-level]')){workspace.classList.remove('sidebar-open');mobileTab('problem');}});
  document.addEventListener('keydown',event=>{
    if(event.isComposing||event.defaultPrevented)return;
    if(event.key==='Escape'){focusMode(false);workspace.classList.remove('sidebar-open');}
    if((event.ctrlKey||event.metaKey)&&event.key==='Enter'){event.preventDefault();(event.shiftKey?$('judge-submit'):$('run-samples')).click();}
  });
  let dragging=false;
  function resize(clientX){
    const box=workspace.getBoundingClientRect(),side=$('problem-list').closest('aside').getBoundingClientRect().width;
    const maximum=Math.min(65,100*(box.width-side-6-(innerWidth>=1700?480:innerWidth<=1150?340:360))/box.width);
    const fraction=Math.max(25,Math.min(maximum,100*(clientX-box.left-side)/box.width));
    workspace.style.setProperty('--problem-size',fraction+'%');resizer.setAttribute('aria-valuenow',String(Math.round(fraction)));
  }
  resizer.addEventListener('pointerdown',event=>{dragging=true;resizer.setPointerCapture(event.pointerId);workspace.classList.add('resizing');});
  resizer.addEventListener('pointermove',event=>{if(dragging)resize(event.clientX);});
  resizer.addEventListener('pointerup',()=>{dragging=false;workspace.classList.remove('resizing');});
  resizer.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();const box=workspace.getBoundingClientRect(),side=$('problem-list').closest('aside').getBoundingClientRect().width,value=Number(resizer.getAttribute('aria-valuenow'))+(event.key==='ArrowRight'?2:-2);resize(box.left+side+box.width*value/100);}});
})();
