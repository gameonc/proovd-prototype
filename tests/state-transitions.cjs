// Test actual inline handlers without a browser. No external dependencies.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
for(const m of html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g))new vm.Script(m[1]);
const slice=(start,end)=>html.slice(html.indexOf(start),html.indexOf(end,html.indexOf(start)));
function harness(){
 const handlers={},log=[],go=[],S={minted:true,bought:false,delivered:false,tagChecked:false,scanned:false,resold:false,walletReady:false,resaleStage:'none',resaleResume:null,resalePrice:1200,tagId:'DEMO',earnings:{primary:0,royalty:0},timeline:[],ledger:[]};
 const el={querySelectorAll:()=>[],querySelector:id=>({addEventListener:(_,fn)=>handlers[id.slice(1)]=fn,classList:{add(){}}})};
 const c={S,busy:false,lastDir:0,PRICE:750,ATH:.7,ROY:.05,PFEE:.1,SERIAL:'PRV-0001',I:{},STORY:[],money:x=>String(x),stamp:()=>'',hex:()=>'',render(){},askMotion(){},openHolo(){},wait:async()=>{},log:(...x)=>log.push(x),go:(...x)=>go.push(x),location:{hash:'#r/PRV-0001',pathname:'/'},history:{replaceState(){}},quickMint:()=>{throw Error('Unexpected quickMint')},el};
 vm.createContext(c);
 vm.runInContext(slice('  function bind(el){','  async function playStory')+'\n'+slice('  function advanceHandoff(){','  function storyLines(){')+'\n'+slice('  function handleHash(){','  // ================= boot')+'\nbind(el);',c);
 return {S,c,log,go,fire:async id=>handlers[id]({currentTarget:{disabled:false,textContent:''}})};
}
(async()=>{
 const h=harness(),{S,c}=h;
 for(const id of ['pay','deliverPrimary','scanBtn','acceptPrimary','list']) await h.fire(id);
 assert.equal(S.bought,false);assert.equal(S.scanned,false);assert.equal(S.resaleStage,'none');
 await h.fire('createDemoWallet');await h.fire('pay');await h.fire('pay');assert.equal(h.log.filter(x=>x[0]==='Demo order reserved').length,1);assert.equal(S.earnings.primary,0);
 await h.fire('scanBtn');await h.fire('acceptPrimary');assert.equal(S.scanned,false);
 await h.fire('deliverPrimary');await h.fire('scanBtn');assert.equal(S.scanned,false);assert.equal(S.earnings.primary,0);
 await h.fire('acceptPrimary');await h.fire('acceptPrimary');assert.equal(S.timeline.length,1);assert.equal(S.earnings.primary,525);
 await h.fire('list');await h.fire('cancelHandoff');assert.equal(S.resaleStage,'none');assert.equal(S.earnings.royalty,0);
 await h.fire('list');await h.fire('list');assert.equal(S.resaleStage,'review');
 for(const stage of ['review','approved','transit','delivered']){
  assert.equal(S.resaleStage,stage);assert.equal(S.earnings.royalty,0);assert.equal(S.resold,false);
  await h.fire('holdHandoff');const frozen=JSON.stringify(S);
  await h.fire('advanceHandoff');await h.fire('list');await h.fire('cancelHandoff');assert.equal(JSON.stringify(S),frozen);
  const before={earnings:{...S.earnings},timeline:[...S.timeline]};vm.runInContext('handleHash();handleHash();',c);
  assert.deepEqual(S.earnings,before.earnings);assert.deepEqual(S.timeline,before.timeline);assert.equal(S.resaleStage,'disputed');
  await h.fire('resolveHandoff');assert.equal(S.resaleStage,stage);await h.fire('advanceHandoff');
 }
 assert.equal(S.resold,true);assert.equal(S.earnings.royalty,60);assert.equal(S.timeline.length,2);
 const settled=JSON.stringify(S);for(const id of ['list','advanceHandoff','holdHandoff','acceptPrimary','pay'])await h.fire(id);assert.equal(JSON.stringify(S),settled);
 const fresh=harness();vm.runInContext('handleHash();handleHash();',fresh.c);assert.equal(fresh.S.bought,false);assert.equal(fresh.S.timeline.length,0);assert.equal(fresh.S.earnings.primary,0);
 console.log('PASS: unauthorized purchase/claim rejected; delivery and acceptance gate payout; duplicate purchase/acceptance safe; cancellation safe; four dispute stages block transfer/payout; scans read-only before/during resale; one settlement only.');
})().catch(e=>{console.error(e);process.exitCode=1});
