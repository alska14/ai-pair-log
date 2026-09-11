const fs=require('fs'),http=require('http'),{spawn}=require('child_process'),path=require('path');
(async()=>{
 fs.mkdirSync('.visual-check',{recursive:true});
 const server=http.createServer((req,res)=>{res.setHeader('Content-Type','text/html; charset=utf-8');res.end(fs.readFileSync('index.html'));}).listen(8766,'127.0.0.1');
 const chrome=spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--no-first-run','--disable-gpu','--in-process-gpu','--no-sandbox','--remote-debugging-port=9230',`--user-data-dir=${path.resolve('.visual-check/chrome3')}`],{windowsHide:true,stdio:'ignore'});
 chrome.on('error',error=>{console.error(error);server.close();process.exit(1);});
 let targets;
 for(let i=0;i<40;i++){try{targets=await(await fetch('http://127.0.0.1:9230/json')).json();break;}catch{await new Promise(r=>setTimeout(r,250));}}
 if(!targets){chrome.kill();server.close();throw Error('Chrome debugging endpoint unavailable');}
 const ws=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);
 await new Promise(r=>ws.onopen=r);
 let id=0;const pending=new Map(),errors=[];
 ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id){pending.get(m.id)?.(m);pending.delete(m.id);}if(m.method==='Runtime.exceptionThrown')errors.push(m.params);};
 const call=(method,params={})=>new Promise((resolve,reject)=>{const n=++id;pending.set(n,m=>m.error?reject(m.error):resolve(m.result));ws.send(JSON.stringify({id:n,method,params}));});
 await call('Page.enable');await call('Runtime.enable');
 const results=[];
 for(const [width,height] of [[1366,768],[1920,1080],[390,844]]){
  await call('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
  await call('Page.navigate',{url:'http://127.0.0.1:8766'});
  await new Promise(r=>setTimeout(r,2500));
  await call('Runtime.evaluate',{expression:'document.fonts.ready',awaitPromise:true});
  await call('Runtime.evaluate',{expression:"new Promise(resolve => { const poll = () => document.readyState === 'complete' && !document.querySelector('dialog').open ? resolve(true) : setTimeout(poll, 100); poll(); })",awaitPromise:true});
  await call('Runtime.evaluate',{expression:"Promise.all(document.getAnimations().map(a=>a.finished.catch(()=>{})))",awaitPromise:true});
  const r=await call('Runtime.evaluate',{expression:`JSON.stringify((()=>{const rect=s=>{const r=document.querySelector(s).getBoundingClientRect();return {top:r.top,bottom:r.bottom,height:r.height,visible:Math.max(0,Math.min(innerHeight,r.bottom)-Math.max(0,r.top))}};return {width:innerWidth,height:innerHeight,scrollWidth:document.documentElement.scrollWidth,evidence:rect('#evidence'),activity:rect('#activity'),firstTitle:rect('.story h3'),firstViz:rect('.outcome-viz'),overflow:[...document.querySelectorAll('main *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+1||r.left<0)}).map(e=>e.tagName+'.'+e.className),storyText:[...document.querySelectorAll('.story')].map(e=>e.textContent.replace(/\\s+/g,' ').trim()),fonts:document.fonts.status,landingOpen:document.querySelector('dialog').open}})())`,returnByValue:true});
  const data=JSON.parse(r.result.value);results.push(data);
  const shot=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});fs.writeFileSync(`.visual-check/${width}x${height}.png`,Buffer.from(shot.data,'base64'));
  const metrics=await call('Page.getLayoutMetrics');
  const full=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:0,y:0,width:metrics.cssContentSize.width,height:metrics.cssContentSize.height,scale:1}});fs.writeFileSync(`.visual-check/${width}-full.png`,Buffer.from(full.data,'base64'));
 }
 fs.writeFileSync('.visual-check/results.json',JSON.stringify({results,errors},null,2));
 console.log(JSON.stringify({results:results.map(({storyText,...r})=>r),errors},null,2));
 await call('Browser.close');ws.close();server.close();
})().catch(e=>{console.error(e);process.exit(1)});
