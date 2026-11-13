/* Small offline editor helpers; the textarea remains the accessible source of truth. */
(() => {
  'use strict';
  const editor=document.getElementById('code-editor');
  const numbers=document.getElementById('editor-line-numbers');
  let changing=false;
  const pairs={'(':')','[':']','{':'}','"':'"',"'":"'"};
  function sync() {
    const count=editor.value.split('\n').length;
    numbers.textContent=Array.from({length:count},(_,i)=>i+1).join('\n');
    numbers.style.transform=`translateY(${-editor.scrollTop}px)`;
    window.EditorTools?.sync();
  }
  // Track Python strings, triple quotes and comments so completion does not alter prose.
  function contextAt(position) {
    if(editor.dataset.language==='cpp') {
      const source=editor.value;let quote='',comment=false,block=false;
      for(let i=0;i<position;i++) {
        const ch=source[i],next=source[i+1];
        if(comment){if(ch==='\n')comment=false;continue;}
        if(block){if(ch==='*'&&next==='/'){block=false;i++;}continue;}
        if(quote){if(ch==='\\'){i++;continue;}if(ch===quote)quote='';}
        else if(ch==='/'&&next==='/'){comment=true;i++;}
        else if(ch==='/'&&next==='*'){block=true;i++;}
        else if(ch==='"'||ch==="'")quote=ch;
      }
      return {quote,comment:comment||block};
    }

    const source=editor.value;let quote='',comment=false;
    for(let i=0;i<position;i++) {
      const ch=source[i];
      if(comment) {if(ch==='\n')comment=false;continue;}
      if(quote) {
        if(ch==='\\') {i++;continue;}
        if(source.slice(i,i+quote.length)===quote) {i+=quote.length-1;quote='';}
      } else if(ch==='#')comment=true;
      else if(ch==='"'||ch==="'") {
        quote=source.slice(i,i+3)===ch.repeat(3)?ch.repeat(3):ch;i+=quote.length-1;
      }
    }
    return {quote,comment};
  }
  function replace(text,start,end,selectionStart,selectionEnd=selectionStart) {
    editor.setSelectionRange(start,end);
    // Native editing keeps browser undo/redo for generated pairs and indentation.
    changing=true;
    try {
    if(!document.execCommand('insertText',false,text)) {
      editor.setRangeText(text,start,end,'end');
      editor.dispatchEvent(new Event('input',{bubbles:true}));
    }
    } finally {changing=false;}
    editor.setSelectionRange(selectionStart,selectionEnd);sync();
  }
  function character(key) {
    const start=editor.selectionStart,end=editor.selectionEnd,source=editor.value;
    const context=contextAt(start),quoteKey=key==='"'||key==="'";
    if(start===end && source[start]===key && ')]}\'"'.includes(key) && !context.comment && (!context.quote || context.quote===key)) {
      editor.setSelectionRange(start+1,start+1);return true;
    }
    if(pairs[key] && !context.comment && !context.quote) {
      if(quoteKey && source[start-1]==='\\')return false;
      const selected=source.slice(start,end);
      replace(key+selected+pairs[key],start,end,start+1,end+1);return true;
    }
    return false;
  }
  editor.addEventListener('keydown',event=>{
    if(window.EditorTools?.handleKey(event))return;
    if(event.isComposing||event.keyCode===229||event.ctrlKey||event.metaKey||event.altKey)return;
    const start=editor.selectionStart,end=editor.selectionEnd,source=editor.value;
    if(event.key.length===1 && character(event.key)) {event.preventDefault();return;}
    const beforeContext=contextAt(Math.max(0,start-1));
    if(event.key==='Backspace'&&start===end&&start>0&&!beforeContext.quote&&!beforeContext.comment&&pairs[source[start-1]]===source[start]) {
      event.preventDefault();replace('',start-1,start+1,start-1);return;
    }
    if(event.key==='Tab'&&!event.shiftKey) {
      event.preventDefault();replace('    ',start,end,start+4);return;
    }
    if(event.key==='Enter') {
      const context=contextAt(start);if(context.quote||context.comment)return;
      event.preventDefault();
      const before=source.slice(source.lastIndexOf('\n',start-1)+1,start);
      const indent=before.match(/^[ \t]*/)[0];
      const between=pairs[source[start-1]]===source[end]&&'([{'.includes(source[start-1]);
      const extra=before.trimEnd().endsWith(':')||(editor.dataset.language==='cpp'&&before.trimEnd().endsWith('{'))||between?'    ':'';
      const text='\n'+indent+extra+(between?'\n'+indent:'');
      replace(text,start,end,start+1+indent.length+extra.length);
    }
    // Shift+Tab keeps its native focus behavior: the editor is not a keyboard trap.
  });
  editor.addEventListener('beforeinput',event=>{
    if(!changing&&!event.isComposing&&event.inputType==='insertText'&&event.data?.length===1&&character(event.data))event.preventDefault();
  });
  editor.addEventListener('input',sync);
  editor.addEventListener('scroll',sync);
  window.CodeEditor={sync,contextAt,replace};sync();
})();
