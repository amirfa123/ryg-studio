// node cap.js <page> stills t1,t2 <prefix> | node cap.js <page> video out.mp4 <nframes>
const { chromium } = require('playwright');const http=require('http'),fs=require('fs'),path=require('path'),{spawn}=require('child_process');
const T={'.html':'text/html','.js':'text/javascript','.json':'application/json'};
const srv=http.createServer((q,s)=>{const f=path.join(__dirname,decodeURIComponent(q.url.split('?')[0]));fs.readFile(f,(e,d)=>{if(e){s.writeHead(404);s.end();return}s.writeHead(200,{'Content-Type':T[path.extname(f)]||'application/octet-stream'});s.end(d)})}).listen(0,async()=>{
  const [pg,mode,a,b]=process.argv.slice(2);const port=srv.address().port;
  const br=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await br.newPage({viewport:{width:+(process.env.VW||1920),height:+(process.env.VH||1080)}});p.on('pageerror',e=>console.log('ERR',e.message));p.on('console',m=>{if(m.type()==='error'||m.type()==='warning')console.log('LOG',m.text())});
  await p.goto(`http://127.0.0.1:${port}/${pg}`);await p.waitForFunction('window.READY===true',{timeout:90000});const miss=await p.evaluate('window.MISS');if(miss&&miss.length)console.log('MISSING',JSON.stringify(miss));
  const shot=async t=>{await p.evaluate(t=>render(t),t);return p.screenshot({type:'jpeg',quality:92})};
  if(mode==='stills'){for(const t of a.split(',').map(Number))fs.writeFileSync(`${b||'still'}_${t}.jpg`,await shot(t))}
  else{const tmp=a.replace(/\.mp4$/,'.part.mp4');const ff=spawn('ffmpeg',['-y','-loglevel','error','-f','image2pipe','-c:v','mjpeg','-framerate','30','-i','-','-c:v','libx264','-preset','veryfast','-crf','19','-pix_fmt','yuv420p',tmp],{stdio:['pipe','inherit','inherit']});
    const N=+b,t0=Date.now();for(let i=0;i<N;i++){const buf=await shot(i/30);if(!ff.stdin.write(buf))await new Promise(r=>ff.stdin.once('drain',r));if(i%90===0)console.log('frame',i,((Date.now()-t0)/1000).toFixed(0)+'s')}
    ff.stdin.end();await new Promise((res,rej)=>ff.on('close',c=>c===0?res():rej(new Error('ffmpeg '+c))));fs.renameSync(tmp,a)}
  await br.close();srv.close()});
