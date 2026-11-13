/* Offline syntax colors and explicit, inspectable completion candidates. */
(() => {
  'use strict';
  const editor=document.getElementById('code-editor'),highlight=document.getElementById('code-highlight'),popup=document.getElementById('completion-list');
  const keywords={python:new Set('and as assert async await break class continue def del elif else except False finally for from global if import in is lambda None nonlocal not or pass raise return True try while with yield'.split(' ')),cpp:new Set('alignas auto bool break case catch char class const constexpr continue default delete do double else enum explicit extern false float for friend if inline int long namespace new nullptr operator private protected public return short signed sizeof static struct switch template this throw true try typedef typename union unsigned using virtual void volatile while'.split(' '))};
  const item=(label,insert=label,detail='키워드',cursor)=>({label,insert,detail,cursor});
  const python=[...keywords.python].map(w=>item(w));
  for(const [label,insert,cursor] of [['print','print()',6],['input','input()',6],['int','int()',4],['str','str()',4],['float','float()',6],['len','len()',4],['range','range()',6],['list','list()',5],['dict','dict()',5],['set','set()',4],['sorted','sorted()',7],['sum','sum()',4],['max','max()',4],['min','min()',4],['enumerate','enumerate()',10],['map','map()',4],['zip','zip()',4],['open','open()',5]])python.push(item(label,insert,'내장 함수',cursor));
  const cpp=[...keywords.cpp].map(w=>item(w));
  for(const [label,insert,cursor] of [['cout','cout << ',8],['cin','cin >> ',7],['vector','vector<>',7],['string','string'],['map','map<>',4],['set','set<>',4],['queue','queue<>',6],['priority_queue','priority_queue<>',15],['sort','sort()',5],['lower_bound','lower_bound()',12],['upper_bound','upper_bound()',12],['getline','getline()',8],['pair','pair<>',5],['main','int main() {\n    \n}',17],['include','#include <>',10]])cpp.push(item(label,insert,'C++ 표준 라이브러리',cursor));
  const methods={python:['append','extend','pop','sort','reverse','split','strip','join','items','keys','values','get','add','remove','read','readline','write','lower','upper','count','index','find','replace'],cpp:['push_back','pop_back','push','pop','size','empty','begin','end','front','back','find','insert','erase','substr','length','clear']};
  let candidates=[],selected=0,wordStart=0,last='',composing=false;
  function close(){popup.hidden=true;candidates=[];editor.setAttribute('aria-expanded','false');editor.removeAttribute('aria-activedescendant');}
  function sync(){
    const language=editor.dataset.language||'python',source=editor.value;
    if(last!==language+'\0'+source){
      last=language+'\0'+source;highlight.replaceChildren();
      const expression=language==='cpp'?/\/\/[^\n]*|\/\*[\s\S]*?(?:\*\/|$)|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b/g:/#[^\n]*|"""[\s\S]*?(?:"""|$)|'''[\s\S]*?(?:'''|$)|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b/g;
      let at=0;
      for(const match of source.matchAll(expression)){
        highlight.append(document.createTextNode(source.slice(at,match.index)));
        const token=match[0],span=document.createElement('span');span.textContent=token;
        span.className=(token.startsWith('#')&&language==='python')||token.startsWith('//')||token.startsWith('/*')?'syntax-comment':/^['"]/.test(token)?'syntax-string':/^\d/.test(token)?'syntax-number':keywords[language]?.has(token)?'syntax-keyword':/^\s*\(/.test(source.slice(match.index+token.length))?'syntax-function':'syntax-name';
        highlight.append(span);at=match.index+token.length;
      }
      highlight.append(document.createTextNode(source.slice(at)+'\n'));
    }
    highlight.style.transform=`translate(${-editor.scrollLeft}px,${-editor.scrollTop}px)`;
  }
  function paint(){
    popup.replaceChildren();
    candidates.forEach((candidate,i)=>{
      const button=document.createElement('div');button.id='completion-option-'+i;button.role='option';button.className='completion-option'+(i===selected?' selected':'');button.setAttribute('aria-selected',String(i===selected));
      const label=document.createElement('strong');label.textContent=candidate.label;
      const detail=document.createElement('span');detail.textContent=candidate.detail;
      button.append(label,detail);button.addEventListener('pointerdown',event=>{event.preventDefault();selected=i;accept();});popup.append(button);
    });
    popup.hidden=false;editor.setAttribute('aria-expanded','true');editor.setAttribute('aria-activedescendant','completion-option-'+selected);
    const size=parseFloat(getComputedStyle(editor).fontSize),lineHeight=parseFloat(getComputedStyle(editor).lineHeight),before=editor.value.slice(0,editor.selectionStart),lines=before.split('\n');
    popup.style.left=Math.max(48,Math.min(48+(lines.at(-1).length*size*.6)-editor.scrollLeft,editor.parentElement.clientWidth-300))+'px';
    popup.style.top=Math.max(4,Math.min(20+lines.length*lineHeight-editor.scrollTop,editor.parentElement.clientHeight-210))+'px';
    popup.querySelector('.selected')?.scrollIntoView({block:'nearest'});
  }
  function suggest(force=false){
    if(composing||editor.selectionStart!==editor.selectionEnd){close();return;}
    const context=window.CodeEditor.contextAt(editor.selectionStart);if(context.quote||context.comment){close();return;}
    const before=editor.value.slice(0,editor.selectionStart),match=before.match(/[A-Za-z_]\w*$/),prefix=match?.[0]||'';
    if(!force&&prefix.length<2){close();return;}
    wordStart=editor.selectionStart-prefix.length;
    const language=editor.dataset.language||'python',member=/\.$/.test(before.slice(0,wordStart));
    const pool=member?methods[language].map(w=>item(w,w+'()','메서드',w.length+1)):[...(language==='cpp'?cpp:python)];
    const seen=new Set(pool.map(x=>x.label));
    if(!member)for(const word of Array.from(highlight.querySelectorAll('.syntax-name,.syntax-function'),node=>node.textContent))if(!seen.has(word)&&word!==prefix){pool.push(item(word,word,'현재 코드'));seen.add(word);}
    candidates=pool.filter(x=>x.label.startsWith(prefix)&&(x.label!==prefix||x.insert!==prefix)).sort((a,b)=>a.label.localeCompare(b.label)).slice(0,8);selected=0;
    if(!candidates.length){close();return;}paint();
  }
  function accept(){
    const candidate=candidates[selected];if(!candidate)return;
    const end=editor.selectionStart,start=wordStart;close();
    window.CodeEditor.replace(candidate.insert,start,end,start+(candidate.cursor??candidate.insert.length));
    close();sync();editor.focus();
  }
  function handleKey(event){
    if(event.isComposing||composing)return false;
    if((event.ctrlKey||event.metaKey)&&event.code==='Space'){event.preventDefault();suggest(true);return true;}
    if(event.ctrlKey||event.metaKey||(event.shiftKey&&event.key==='Enter')){close();return false;}
    if(popup.hidden)return false;
    if(event.key==='Escape'){event.preventDefault();close();return true;}
    if(event.key==='ArrowDown'||event.key==='ArrowUp'){event.preventDefault();selected=(selected+(event.key==='ArrowDown'?1:-1)+candidates.length)%candidates.length;paint();return true;}
    if((event.key==='Tab'&&!event.shiftKey)||event.key==='Enter'){event.preventDefault();accept();return true;}
    if(['ArrowLeft','ArrowRight','Home','End','Tab'].includes(event.key))close();
    return false;
  }
  editor.addEventListener('input',()=>{sync();suggest();});
  editor.addEventListener('compositionstart',()=>{composing=true;close();});
  editor.addEventListener('compositionend',()=>{composing=false;sync();});
  editor.addEventListener('scroll',()=>{sync();close();});editor.addEventListener('blur',close);editor.addEventListener('pointerdown',close);
  editor.parentElement.classList.add('editor-enhanced');
  window.EditorTools={sync,close,handleKey,suggest};sync();
})();
