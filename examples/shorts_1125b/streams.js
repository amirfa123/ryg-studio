// ===== What would happen if you tried to watch all the GTA 6 streams from launch day? (crazy what-if + GTA 6) =====
const TT=21.2;
const CU={c1:4.35,c2:9.25,c3:13.6,c4:16.0,c5:19.5};
guy.outfit({headphones:1,snapforward:1,capColor:0x7B5CFF});
const R=scene('room');
function couch(t,o={},ry=PI){R.S.add(holder);holder.rotation.order='XYZ';holder.position.set(0,0.15,1.55);holder.rotation.set(0,ry,0);holder.scale.setScalar(1);holder.visible=true;guy.pose({...SIT,armL:[0.25,0],armR:[0.25,0],blink:BLINK(t),mouth:'smile',...o})}
function roomShot(p,l,bgc='room'){R.cam.position.set(...p);R.cam.lookAt(...l);setBG(bgc);r.setClearColor(0,0);r.render(R.S,R.cam)}
function roomMood(k){R.S.children.filter(c=>c.isLight).forEach(l=>{l.intensity=(l.isHemisphereLight?1.5:2.2)*k})}
// generic neon "stream" picture (original city, no game UI)
function streamPic(c,w,h,t,seed=0){const gr=c.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#2A0E5A');gr.addColorStop(0.6,'#FF5E8A');gr.addColorStop(1,'#FFB36B');c.fillStyle=gr;c.fillRect(0,0,w,h);
  c.fillStyle='#FFE680';c.beginPath();c.arc(w*0.7,h*0.55,h*0.18,0,7);c.fill();
  for(let i=0;i<9;i++){const bw=w/9,bh=h*(0.25+0.45*hash(i+seed*7));c.fillStyle=i%2?'#1C1450':'#2B1A66';c.fillRect(i*bw,h*0.82-bh,bw-2,bh);c.fillStyle='#FFF2B0';for(let k=0;k<3;k++)c.fillRect(i*bw+bw*0.3,h*0.82-bh+10+k*bh*0.25,bw*0.15,bh*0.06)}
  c.fillStyle='#14102A';c.fillRect(0,h*0.82,w,h*0.18);c.fillStyle='#FFD23F';for(let i=0;i<6;i++)c.fillRect(((i*w/5-t*w*0.6)%w+w)%w,h*0.9,w/12,h*0.02);
  const cx=((t*w*0.25+seed*90)%(w*1.2))-w*0.1;c.fillStyle='#FF3D7F';c.fillRect(cx,h*0.8,w*0.18,h*0.07);c.fillStyle='#7FD3FF';c.fillRect(cx+w*0.05,h*0.76,w*0.08,h*0.05);
  c.fillStyle='#FF2A2A';c.fillRect(w*0.04,h*0.06,w*0.17,h*0.13);c.fillStyle='#fff';c.font=`900 ${Math.round(h*0.09)}px Inter`;c.textAlign='center';c.textBaseline='middle';c.fillText('LIVE',w*0.125,h*0.125)}
function tvStream(t){const c=R.tv.ctx;c.save();streamPic(c,640,360,t,0);c.restore();R.tv.tx.needsUpdate=true}
// ---------- Ice Age set ----------
const IA={S:new THREE.Scene()};lights(IA.S);IA.S.fog=new THREE.Fog(0xCFE3F2,16,60);IA.cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);
part(IA.S,new THREE.PlaneGeometry(300,300),toon(0xF4F8FF),[0,0,0],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<30;i++)part(IA.S,SPH,toon(i%2?0xE6EEF8:0xFFFFFF),[(hash(i*3)-0.5)*40,-0.2,-4-hash(i*7)*20],[1.5+hash(i)*2,0.6+hash(i*5),1.5+hash(i*2)],[0,0,0],0.01);
for(let i=0;i<26;i++){const x=(hash(i*4.1)-0.5)*44,z=-7-hash(i*6.3)*18;const tr=new THREE.Group();tr.position.set(x,0,z);IA.S.add(tr);part(tr,cap(0.15,0.8),toon(0x6B4A2E),[0,0.4,0]);
  for(let k=0;k<3;k++){part(tr,new THREE.ConeGeometry(1.1-k*0.28,1.3,8),toon(0x2F6B4F),[0,1.2+k*0.75,0],[1,1,1],[0,0,0],0.012);part(tr,new THREE.ConeGeometry(0.95-k*0.28,0.35,8),toon(0xFFFFFF),[0,1.75+k*0.75,0],[1,1,1],[0,0,0],0)}}
// mountains (far)
for(let i=0;i<7;i++){part(IA.S,new THREE.ConeGeometry(9+hash(i)*5,12+hash(i*3)*8,6),toon(0xB9CCE4),[-45+i*15,5,-48],[1,1,1],[0,hash(i)*2,0],0.02);part(IA.S,new THREE.ConeGeometry(4,5,6),toon(0xFFFFFF),[-45+i*15,10.5+hash(i*3)*4,-47],[1,1,1],[0,hash(i)*2,0],0)}
// couch + tv in the snow
const ICOUCH=new THREE.Group();ICOUCH.position.set(0,0,1.6);IA.S.add(ICOUCH);{const CM=toon(0xE0574F),CM2=toon(0xC4463F);
  part(ICOUCH,new THREE.BoxGeometry(2.4,0.45,1.2),CM2,[0,0.22,0],[1,1,1],[0,0,0],0.015);part(ICOUCH,new THREE.BoxGeometry(2.2,0.2,1.1),CM,[0,0.52,-0.02],[1,1,1],[0,0,0],0.015);part(ICOUCH,new THREE.BoxGeometry(2.4,1.0,0.32),CM,[0,0.85,0.5],[1,1,1],[0,0,0],0.015);
  part(ICOUCH,new THREE.BoxGeometry(2.4,0.12,1.25),toon(0xFFFFFF),[0,1.36,0.5],[1,1,0.3],[0,0,0],0.01)}
const ITV=new THREE.Group();ITV.position.set(0,0,-1.6);IA.S.add(ITV);part(ITV,new THREE.BoxGeometry(1.6,0.6,0.6),toon(0x2B2235),[0,0.3,0],[1,1,1],[0,0,0],0.012);part(ITV,new THREE.BoxGeometry(1.9,1.1,0.1),toon(0x15151C),[0,1.2,0],[1,1,1],[0,0,0],0.012);
const itvT=canvasTex(320,180);part(ITV,new THREE.PlaneGeometry(1.75,0.98),new THREE.MeshBasicMaterial({map:itvT.tx}),[0,1.2,0.06],[1,1,1],[0,0,0],0);ITV.position.set(1.8,0,-1.2);ITV.rotation.y=-0.58;
// original cartoon woolly mammoth
function mkMammoth(){const m=new THREE.Group();const F=toon(0x7A4A2A),F2=toon(0x5E3820),T=toon(0xFFF6E0);
  part(m,SPH,F,[0,2.0,0],[1.7,1.35,1.1],[0,0,0],0.015);part(m,SPH,F2,[0.3,2.9,0],[1.1,0.7,0.9],[0,0,0],0.012);
  const legs=[];for(const [x,z] of [[0.9,0.55],[0.9,-0.55],[-0.9,0.55],[-0.9,-0.55]]){const l=new THREE.Group();l.position.set(x,1.3,z);m.add(l);part(l,cap(0.36,0.9),F2,[0,-0.6,0]);part(l,new THREE.CylinderGeometry(0.4,0.42,0.18,14),toon(0x3A2414),[0,-1.2,0],[1,1,1],[0,0,0],0.008);legs.push(l)}
  const hd=new THREE.Group();hd.position.set(1.6,2.6,0);m.add(hd);part(hd,SPH,F,[0,0,0],[0.8,0.85,0.75],[0,0,0],0.012);part(hd,SPH,F2,[-0.05,0.55,0],[0.55,0.45,0.5],[0,0,0],0.01);
  for(const s of [-1,1]){part(hd,SPH,F2,[-0.25,0.05,s*0.62],[0.3,0.4,0.12],[0,0,0],0.008);part(hd,SPH,toon(0xffffff),[0.5,0.2,s*0.35],[0.13,0.13,0.1],[0,0,0],0.006);part(hd,SPH,basic(0x111111),[0.6,0.21,s*0.37],[0.06,0.08,0.05],[0,0,0],0);
    const tk=new THREE.Group();tk.position.set(0.55,-0.45,s*0.3);hd.add(tk);part(tk,new THREE.TorusGeometry(0.55,0.08,8,20,PI*0.9),T,[0.45,0.1,0],[1,1,1],[0,0,PI*1.05],0.006)}
  const tr=[];let par=hd;for(let k=0;k<6;k++){const s=new THREE.Group();s.position.set(k?0:0.62,k?-0.22:-0.25,0);par.add(s);part(s,cap(0.2-k*0.022,0.12),F,[0,-0.11,0]);tr.push(s);par=s}
  const tail=new THREE.Group();tail.position.set(-1.65,2.2,0);m.add(tail);part(tail,cap(0.07,0.5),F2,[-0.1,-0.3,0],[1,1,1],[0,0,-0.3]);
  return {m,hd,tr,legs,tail,anim(t){tr.forEach((s,i)=>s.rotation.z=0.12+0.18*Math.sin(t*2.2-i*0.5));hd.rotation.z=0.05*Math.sin(t*1.1);tail.rotation.x=0.3*Math.sin(t*3)}}}
const MAM=mkMammoth();IA.S.add(MAM.m);MAM.m.position.set(-2.9,0,2.8);MAM.m.rotation.y=0.75;MAM.m.scale.setScalar(0.85);
function iceShot(p,l){IA.cam.position.set(...p);IA.cam.lookAt(...l);setBG('linear-gradient(#9CC3E6 0%,#CFE3F2 55%,#F4F8FF 100%)');r.setClearColor(0,0);r.render(IA.S,IA.cam)}
function snow(t,n=70){g.save();g.fillStyle='rgba(255,255,255,0.9)';for(let i=0;i<n;i++){const x=((hash(i)*W+Math.sin(t*1.3+i)*30)%W+W)%W,y=((hash(i*3)*H+t*(120+hash(i*5)*160))%H);g.beginPath();g.arc(x,y,4+hash(i*7)*6,0,7);g.fill()}g.restore()}
// ---------- 2D helpers ----------
const thumbC=document.createElement('canvas');thumbC.width=320;thumbC.height=180;const thumbX=thumbC.getContext('2d');
function streamWall(t,t0){const k=easeOut(seg(t,t0,t0+3.2));const cols=Math.round(lerp(2,6,k));const tw=(W-80)/cols,th=tw*0.5625;const rows=Math.ceil(1300/(th+8));
  for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){const i=y*cols+x;const px=40+x*tw,py=330+y*(th+8);if(py>1300)continue;streamPic(thumbX,320,180,t+i*0.37,i%5);g.save();g.globalAlpha=0.95;g.drawImage(thumbC,px+3,py,tw-6,th);g.strokeStyle='#111';g.lineWidth=Math.max(2,6-cols*0.5);g.strokeRect(px+3,py,tw-6,th);g.restore()}}
function bigClock(cx,cy,R0,a){g.save();g.translate(cx,cy);g.fillStyle='#FFF8E8';g.strokeStyle='#111';g.lineWidth=16;g.beginPath();g.arc(0,0,R0,0,7);g.fill();g.stroke();
  for(let i=0;i<12;i++){const b=i/12*PI*2;g.lineWidth=10;g.beginPath();g.moveTo(Math.sin(b)*R0*0.8,-Math.cos(b)*R0*0.8);g.lineTo(Math.sin(b)*R0*0.92,-Math.cos(b)*R0*0.92);g.stroke()}
  g.lineCap='round';g.lineWidth=20;g.beginPath();g.moveTo(0,0);g.lineTo(Math.sin(a/12)*R0*0.5,-Math.cos(a/12)*R0*0.5);g.stroke();g.strokeStyle='#E23B3B';g.lineWidth=12;g.beginPath();g.moveTo(0,0);g.lineTo(Math.sin(a)*R0*0.78,-Math.cos(a)*R0*0.78);g.stroke();
  g.fillStyle='#111';g.beginPath();g.arc(0,0,16,0,7);g.fill();g.restore()}
// ---------- opening: watching a stream on the couch ----------
const C0={p:[5.0,2.7,-1.7],l:[0.1,1.75,1.55]};
function openScene(t){roomMood(0.8);tvStream(t);props.pad.visible=true;props.pad.position.set(0,1.0,0.62);const b=Math.sin(t*2*PI/1.4);
  couch(t,{reachL:[0.15,1.0,0.6],reachR:[-0.15,1.0,0.6],mouth:'grin',headPitch:0.05+0.04*b,headYaw:0.04*Math.sin(t*2*PI/2.8),jump:0},PI-0.55)}
// ---------- render ----------
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.15,CU.c1));roomShot(mix(C0.p,[4.6,2.6,-1.3],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT IF YOU WATCHED',W/2,180,74,{sw:15});txt('EVERY GTA 6',W/2,285,112,{fill:'#FF7AC2',sw:22});txt('STREAM?',W/2,405,124,{fill:'#FFD23F',sw:24});g.restore();
    pill('LAUNCH DAY',W/2,1230,58,'#FF2A2A','#fff',t,2.0,CU.c1-0.05)}
  else if(t<CU.c2){flash(t,CU.c1,0.15);clear3d();g.fillStyle='#12082E';g.fillRect(0,0,W,H);streamWall(t,CU.c1);
    g.fillStyle='rgba(10,8,30,0.25)';g.fillRect(0,0,W,H);
    const v=125e6*Math.pow(easeOut(seg(t,5.2,6.9)),1.0);panel(W/2,760,960,330,'rgba(10,12,25,0.9)','#FF3DA6',40);txt(Math.round(v).toLocaleString('en-US'),W/2,720,124,{fill:'#FFD23F',sw:22});txt('HOURS WATCHED',W/2,840,64,{sw:12});
    pill('IN JUST 24 HOURS',W/2,1150,72,'#FF3DA6','#fff',t,7.85,CU.c2);comic('WHAT?!',W*0.5,400,130,t,6.95,{life:0.9,rot:-0.08,fill:'#FF7AC2'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);roomMood(lerp(0.8,0.45,seg(t,CU.c2,CU.c3)));tvStream(t*3);props.pad.visible=true;props.pad.position.set(0,1.0,0.62);
    const nod=(t%1.3)/1.3;const droop=nod<0.8?ease(nod/0.8)*0.45:lerp(0.45,-0.1,(nod-0.8)/0.2);
    couch(t,{reachL:[0.15,1.0,0.6],reachR:[-0.15,1.0,0.6],mouth:nod>0.8?'o':'smile',mouthSize:0.7,wide:nod>0.8,headPitch:droop,blink:nod>0.35&&nod<0.8},PI-0.25);
    roomShot([3.2,2.7,-3.4],[0,1.3,1.55]);
    bigClock(W*0.5,330,120,t*14);const d=Math.floor(Math.pow(seg(t,CU.c2,11.8),2.2)*5200000);
    if(t<11.85){panel(W/2,1210,640,140,'rgba(10,12,25,0.88)','#3FF0FF',36);txt('DAY '+d.toLocaleString('en-US'),W/2,1210,80,{stroke:0,fill:'#3FF0FF'})}
    pill('NO SLEEP',W*0.5,780,66,'#FFFFFF','#111',t,10.55,11.85);
    if(t>11.85){const p=backOut(seg(t,11.85,12.2));g.save();g.translate(W/2,1170);g.scale(p,p);panel(0,0,760,270,'rgba(10,12,25,0.92)','#FFD23F',40);txt('14,000+',0,-40,150,{fill:'#FFD23F',sw:26});txt('YEARS',0,85,80,{sw:14});g.restore()}
    comic('ZZZ',W*0.8,880,80,t,9.9,{life:0.8,rot:0.15,fill:'#B59CFF'});comic('ZZZ',W*0.2,900,80,t,10.95,{life:0.8,rot:-0.15,fill:'#B59CFF'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);clear3d();setBG('teal');const n=Math.floor(easeOut(seg(t,13.9,15.6))*180);
    for(let i=0;i<180;i++){const c=i%12,rw=Math.floor(i/12);const x=110+c*78,y=520+rw*56;silhouette(x,y,0.28,i<n?'#FFD23F':'rgba(255,255,255,0.18)')}
    txt('≈ '+n,W/2,330,150,{fill:'#FFD23F',sw:26});pill('LIFETIMES',W/2,1250,80,'#FFFFFF','#111',t,14.1,CU.c4);
    if(t>15.7)comic('BRUH',W*0.78,1120,90,t,15.7,{life:0.6,rot:0.12,fill:'#FF8FC8'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);{const c=itvT.ctx;streamPic(c,320,180,t,2);itvT.tx.needsUpdate=true}MAM.anim(t);
    IA.S.add(holder);holder.rotation.order='XYZ';holder.position.set(0,0.15,1.55);holder.rotation.set(0,PI-0.58,0);holder.scale.setScalar(1);props.pad.visible=true;props.pad.position.set(0,1.0,0.62);
    const sh=t>17.3?0.03*Math.sin(t*40):0;guy.pose({...SIT,reachL:[0.15,1.0,0.6],reachR:[-0.15,1.0,0.6],mouth:t>18.4?'o':'grin',mouthSize:0.8,wide:t>18.4,blink:BLINK(t),headYaw:t>18.4?0.8:0.05,headRoll:sh,look:t>18.4?0.6:0});
    const k=ease(seg(t,CU.c4,CU.c5));iceShot([lerp(0.4,-0.4,k),lerp(3.0,3.5,k),lerp(-12,-13.5,k)],[-0.9,1.7,0.8]);snow(t);
    const yr=Math.round(lerp(2026,-12000,easeOut(seg(t,16.1,17.4))));panel(W/2,330,720,170,'rgba(10,12,25,0.88)','#9CC4FF',36);txt(yr>0?'YEAR '+yr:Math.abs(yr).toLocaleString('en-US')+' BC',W/2,330,84,{stroke:0,fill:'#9CC4FF'});
    pill('ICE AGE',W/2,540,72,'#9CC4FF','#111',t,17.2,CU.c5);comic('BRRR!',W*0.26,1150,90,t,17.5,{life:0.8,rot:-0.12,fill:'#9CC4FF'});pill('WOOLLY MAMMOTH',W/2,1240,58,'#FFFFFF','#111',t,18.3,CU.c5)}
  else{const tt=t-TT;openScene(tt);const k=ease(seg(t,CU.c5,TT-0.15));roomShot(mix([5.6,2.9,-2.4],C0.p,k),C0.l);flash(t,CU.c5,0.15)}
  vignette();captions(t)};
