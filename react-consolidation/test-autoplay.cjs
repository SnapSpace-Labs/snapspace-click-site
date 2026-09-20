'use strict';
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const assert = require('assert/strict');
const ts = require('/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript');
const source = path.join(__dirname, 'react-consolidation/src/snapspace-build/InteractiveFlow.tsx');
const input = fs.readFileSync(source, 'utf8');
const transpiled = ts.transpileModule(input, {
  fileName: source,
  compilerOptions: {module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020},
  reportDiagnostics: true
});
assert.equal((transpiled.diagnostics || []).filter(x => x.category === ts.DiagnosticCategory.Error).length,0);
const h=(type,props)=>({type,props:props||{}});
function mount(props, reduced=false) {
  let slots=[], index=0, pending=[], clock=0, seq=1, currentProps={...props};
  const timers=new Map();
  const same=(a,b)=>Array.isArray(a)&&Array.isArray(b)&&a.length===b.length&&a.every((x,i)=>Object.is(x,b[i]));
  const react={
    useState(init) {const k=index++;if(!(k in slots))slots[k]={value:typeof init==='function'?init():init};return [slots[k].value,v=>{slots[k].value=typeof v==='function'?v(slots[k].value):v}];},
    useRef(value) {const k=index++;if(!(k in slots))slots[k]={current:value};return slots[k];},
    useCallback(fn,deps) {const k=index++;if(!(k in slots)||!same(slots[k].deps,deps))slots[k]={fn,deps};return slots[k].fn;},
    useEffect(fn,deps) {const k=index++;if(!(k in slots)||!same(slots[k].deps,deps)){const old=slots[k];slots[k]={deps,cleanup:null};pending.push(()=>{if(old?.cleanup)old.cleanup();slots[k].cleanup=fn();});}}
  };
  const window={matchMedia:()=>({matches:reduced,addEventListener(){},removeEventListener(){}})};
  const module={exports:{}};
  vm.runInNewContext(transpiled.outputText, {module,exports:module.exports,
    require(name){if(name==='react')return react;if(name==='react/jsx-runtime')return {jsx:h,jsxs:h};throw Error(name);},
    window,setTimeout(fn,delay){const id=seq++;timers.set(id,{at:clock+delay,fn});return id;},
    clearTimeout(id){timers.delete(id);}
  },{filename:source});
  function render(){index=0;pending=[];const tree=module.exports.default(currentProps);pending.forEach(fn=>fn());return tree;}
  let tree=render();
  function advance(ms) {const end=clock+ms;while(true){const next=[...timers].filter(([,t])=>t.at<=end).sort((a,b)=>a[1].at-b[1].at)[0];if(!next)break;const [id,t]=next;clock=t.at;timers.delete(id);t.fn();}clock=end;tree=render();}
  function button(text) {function walk(n){if(!n||typeof n!=='object')return; if(n.type==='button'&&n.props.children===text)return n;const c=n.props?.children;for(const x of Array.isArray(c)?c:[c]){const found=walk(x);if(found)return found;}}return walk(tree);}
  return {state:()=>slots[0].value,timers:()=>timers.size,advance,button,setProps(v){currentProps={...v};tree=render();},exports:module.exports};
}
// Existing Home/Platform prop must be a typed, runtime-valid contract.
assert.match(input,/export type InteractiveFlowProps = \{ mode\?: Mode; autoPlay\?: boolean \}/);
const normal=mount({mode:'normal'});
assert.equal(normal.timers(),5,'default autoPlay should schedule normal study');
normal.advance(3900);assert.equal(normal.state().phase,'evidence');
normal.advance(900);assert.equal(normal.state().settled,true);
console.log('PASS autoPlay defaults to existing automatic motion');
const manual=mount({mode:'normal',autoPlay:false});
assert.equal(manual.timers(),0,'disabled autoPlay cannot schedule anything');
assert.equal(manual.state().phase,'inactive');
manual.advance(7000);assert.equal(manual.state().phase,'inactive');
manual.button('Replay normal').props.onClick();assert.equal(manual.timers(),5);
manual.advance(1700);assert.equal(manual.state().phase,'authority');
manual.button('Interrupt / STOP').props.onClick();assert.equal(manual.timers(),0);
manual.advance(6000);assert.equal(manual.state().interrupted,true);assert.equal(manual.state().active.includes('evidence'),false);
console.log('PASS autoPlay=false remains idle until manual replay; STOP cancels downstream events');
const changing=mount({mode:'normal'});
assert.equal(changing.timers(),5);
changing.setProps({mode:'platform',autoPlay:false});
assert.equal(changing.timers(),0);assert.equal(changing.state().mode,'platform');assert.equal(changing.state().phase,'inactive');
changing.setProps({mode:'stop',autoPlay:true});assert.equal(changing.timers(),5);
changing.advance(3100);assert.equal(changing.state().interrupted,true);assert.equal(changing.state().active.includes('evidence'),false);
console.log('PASS prop/mode changes cancel old timers and respect autoPlay setting');
const reduced=mount({mode:'normal',autoPlay:false},true);
assert.equal(reduced.timers(),0);assert.equal(reduced.state().phase,'inactive');
reduced.button('Replay STOP').props.onClick();assert.equal(reduced.timers(),0);assert.equal(reduced.state().interrupted,true);
console.log('PASS reduced motion plus autoPlay=false; manual replay settles without timers');