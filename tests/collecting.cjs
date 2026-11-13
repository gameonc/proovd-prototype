const {chromium}=require('playwright');
const http=require('node:http'),fs=require('node:fs'),assert=require('node:assert/strict');
const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'));
(async()=>{
 const server=http.createServer((req,res)=>{res.writeHead(200,{'Content-Type':'text/html'});res.end(html)}).listen(0,'127.0.0.1');await new Promise(r=>server.on('listening',r));
 const origin=`http://127.0.0.1:${server.address().port}`;
 let browser;
 try { browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH ? {executablePath:process.env.CHROMIUM_PATH} : {})}); } catch(e) { server.close(); throw e; }
 try{
 for(const viewport of [{width:390,height:844},{width:360,height:740},{width:1440,height:1000}]){
 const p=await browser.newPage({viewport,reducedMotion:'reduce'});const errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.route('**/*',route=>route.request().url().startsWith(origin)?route.continue():route.abort());
 const state=()=>p.evaluate(()=>JSON.parse(localStorage.getItem('proovd-demo-v4-tag-first')));
 const click=async s=>{await p.locator(s).click();};
 await p.goto(origin+'/#r/PRV-0001');await click('#holoNext');
 assert.equal((await state()).bought,false);assert.equal((await state()).earnings.primary,0);
 await p.evaluate(()=>location.hash='#r/PRV-0001');await click('#holoNext');assert.equal((await state()).timeline.length,1);
 await click('[data-go="fan:drop"]');await click('[data-go="fan:checkout"]');await click('#createDemoWallet');await click('#pay');
 await p.locator('#deliverPrimary').waitFor();assert.equal((await state()).earnings.primary,0);
 await click('#deliverPrimary');await click('#scanBtn');await p.locator('#acceptPrimary').waitFor();
 assert.equal((await state()).scanned,false);assert.equal((await state()).earnings.primary,0);
 await click('#acceptPrimary');await click('#holoNext');assert.equal((await state()).scanned,true);assert.equal((await state()).earnings.primary,525);
 await click('[data-go="fan:resell"]');await click('#list');
 assert.equal((await state()).resaleStage,'review');assert.equal((await state()).resold,false);
 await click('#cancelHandoff');assert.equal((await state()).resaleStage,'none');assert.equal((await state()).earnings.royalty,0);
 await click('[data-go="fan:record"]');await click('[data-go="fan:resell"]');await click('#list');
 for(const expected of ['review','approved','transit','delivered']){
  assert.equal((await state()).resaleStage,expected);
  assert.equal((await state()).resold,false);assert.equal((await state()).earnings.royalty,0);assert.equal((await state()).timeline.length,2);
  await click('#holdHandoff');assert.equal((await state()).resaleStage,'disputed');
  await p.reload();assert.equal((await state()).resaleStage,'disputed');assert.equal(await p.locator('#advanceHandoff').count(),0);
  await click('#resolveHandoff');assert.equal((await state()).resaleStage,expected);
  // Public scans, including while in transit, must not alter purchase/payout/ownership.
  const before=await state();await p.evaluate(()=>location.hash='#r/PRV-0001');await click('#holoNext');const after=await state();
  assert.deepEqual(after.earnings,before.earnings);assert.deepEqual(after.timeline,before.timeline);assert.equal(after.resaleStage,expected);
  await p.locator('[data-tab="collection"]').click();await click('[data-go="fan:record"]');await click('[data-go="fan:resell"]');
  assert.equal(await p.locator('.chips').count(),0);
  await click('#advanceHandoff');
 }
 assert.equal((await state()).resold,true);assert.equal((await state()).earnings.royalty,60);assert.equal((await state()).timeline.length,3);
 await p.reload();assert.equal((await state()).earnings.royalty,60);
 assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 if(viewport.width===390)await p.screenshot({path:'/tmp/proovd-tag-first-complete.png'});
 await click('#restartBtn');assert.equal((await state()).resold,false);assert.equal((await state()).earnings.royalty,0);
 assert.deepEqual(errors,[]);await p.close();console.log(`PASS ${viewport.width}x${viewport.height}: purchase, read-only QR, cancelled resale, every dispute stage/reload/resume, delivery settlement, reset`);
 }
 } finally{await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1});
