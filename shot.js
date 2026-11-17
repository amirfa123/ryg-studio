const { chromium } = require('playwright');const http=require('http'),fs=require('fs'),path=require('path');
const T={'.html':'text/html','.js':'text/javascript','.json':'application/json'};
const srv=http.createServer((q,s)=>{const f=path.join(__dirname,decodeURIComponent(q.url.split('?')[0]));fs.readFile(f,(e,d)=>{if(e){s.writeHead(404);s.end();return}s.writeHead(200,{'Content-Type':T[path.extname(f)]||'application/octet-stream'});s.end(d)})}).listen(0,async()=>{
  const port=srv.address().port;const [pg,out,w,h]=[process.argv[2],process.argv[3],+(process.argv[4]||1920),+(process.argv[5]||1080)];
  const b=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await b.newPage({viewport:{width:w,height:h}});p.on('console',m=>console.log('page:',m.text()));p.on('pageerror',e=>console.log('ERR',e.message));
  await p.goto(`http://127.0.0.1:${port}/${pg}`);await p.waitForFunction('window.READY===true',{timeout:60000});await p.evaluate(()=>document.fonts.ready);
  await p.screenshot({path:out});await b.close();srv.close()});
