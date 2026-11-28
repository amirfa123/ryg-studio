// ===== Could you really hold your breath underwater like in GTA 6? (body/everyday + GTA 6) =====
const TT=20.0;
const CU={c1:3.95,c2:6.4,c3:9.6,c4:10.95,c5:15.15,c6:18.3};
guy.outfit({snapback:1,chain:1});
// ---------- pier world (sunset) ----------
const PR={S:new THREE.Scene()};lights(PR.S);PR.cam=new THREE.PerspectiveCamera(30,W/H,0.1,500);
const prSea=part(PR.S,new THREE.PlaneGeometry(600,600),toon(0x1AA6B8),[0,0,0],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<80;i++)part(PR.S,new THREE.PlaneGeometry(1+hash(i)*2.5,0.07),basic(0xFFC9A0),[(hash(i*3)-0.5)*70,0.02,-6-hash(i*7)*50],[1,1,1],[-PI/2,0,0],0);
const PIER=new THREE.Group();PR.S.add(PIER);for(let k=0;k<22;k++)part(PIER,new THREE.BoxGeometry(2.6,0.14,0.42),toon(k%2?0x9A6A3B:0x8A5A2B),[0,0.9,1.2+k*0.46],[1,1,1],[0,0,0],0.01);
for(let k=0;k<6;k++)for(const x of [-1.2,1.2])part(PIER,cap(0.11,2.2),toon(0x6B4426),[x,0.0,1.3+k*1.8]);
for(const x of [-1.25,1.25])part(PIER,new THREE.BoxGeometry(0.08,0.08,10),toon(0x6B4426),[x,1.6,6]);for(let k=0;k<6;k++)for(const x of [-1.25,1.25])part(PIER,cap(0.04,0.7),toon(0x6B4426),[x,1.25,1.4+k*1.8]);
// shoreline + palms + far skyline
part(PR.S,new THREE.BoxGeometry(200,0.6,20),toon(0xF2D59A),[0,0.1,26],[1,1,1],[0,0,0],0.02);for(let k=-8;k<8;k++)palm(PR.S,k*4+1,22+hash(k)*3,1.4,0.2,k);
for(let i=0;i<26;i++){const h=3+hash(i*2)*10;part(PR.S,new THREE.BoxGeometry(3,h,3),toon([0x5A3B7A,0x7A3B6E,0x3B3B7A][i%3]),[-60+i*4.8,h/2,-70],[1,1,1],[0,0,0],0.01)}
function prShot(p,l){PR.cam.position.set(...p);PR.cam.lookAt(...l);setBG('sunset');r.setClearColor(0,0);r.render(PR.S,PR.cam)}
// ---------- underwater world ----------
const UW={S:new THREE.Scene()};lights(UW.S);UW.S.fog=new THREE.Fog(0x0E5E8A,8,40);UW.cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);
part(UW.S,new THREE.PlaneGeometry(200,200),toon(0xE6C98E),[0,0,0],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<30;i++)part(UW.S,SPH,toon(i%2?0x7A7F8C:0x5E6470),[(hash(i*3)-0.5)*30,0,-2-hash(i*5)*20],[0.6+hash(i)*0.9,0.4+hash(i*2)*0.5,0.6+hash(i*4)*0.6],[0,0,0],0.015);
const WEEDS=[];for(let i=0;i<40;i++){const w=new THREE.Group();w.position.set((hash(i*7)-0.5)*26,0,-1-hash(i*9)*18);UW.S.add(w);for(let k=0;k<5;k++)part(w,cap(0.06,0.5),toon(i%3?0x2E9E5B:0x47C26A),[0,0.25+k*0.45,0],[1,1,1],[0,0,0],0.006);WEEDS.push(w)}
const FISH=[];for(let i=0;i<9;i++){const f=new THREE.Group();UW.S.add(f);const c=[0xFFB000,0xFF5FA2,0x3FF0FF][i%3];part(f,SPH,toon(c),[0,0,0],[0.32,0.18,0.1],[0,0,0],0.008);part(f,new THREE.ConeGeometry(0.14,0.22,4),toon(c),[-0.36,0,0],[1,1,0.4],[0,0,PI/2],0.006);part(f,SPH,basic(0x111111),[0.2,0.05,0.08],[0.03,0.03,0.02],[0,0,0],0);FISH.push(f)}
const ROPE=part(UW.S,cap(0.04,60),toon(0xF2E6C8),[2.2,0,-1.5]);ROPE.visible=false;
const surfM=new THREE.MeshBasicMaterial({color:0x8FE6FF,transparent:true,opacity:0.55,side:THREE.DoubleSide});const SURF=part(UW.S,new THREE.PlaneGeometry(200,200),surfM,[0,7,0],[1,1,1],[PI/2,0,0],0);
function uwShot(p,l,bgc){UW.cam.position.set(...p);UW.cam.lookAt(...l);setBG(bgc||'linear-gradient(#3FB8E8 0%,#1478B0 45%,#0B4A78 100%)');r.setClearColor(0,0);r.render(UW.S,UW.cam)}
function uwAnim(t,dy=0){WEEDS.forEach((w,i)=>{w.rotation.z=0.15*Math.sin(t*1.4+i);w.position.y=dy*0});FISH.forEach((f,i)=>{const x=((t*1.2+i*3.1)%16)-8;f.position.set(i%2?x:-x,1.0+hash(i)*3.5+dy,-3-hash(i*3)*6);f.rotation.y=i%2?0:PI})}
// ---------- bucket world (bathroom tiles) ----------
const BK={S:new THREE.Scene()};lights(BK.S);BK.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);
const tileT=canvasTex(256,256);{const c=tileT.ctx;c.fillStyle='#BFEAF2';c.fillRect(0,0,256,256);c.strokeStyle='#8CCAD6';c.lineWidth=6;for(let i=0;i<=4;i++){c.beginPath();c.moveTo(i*64,0);c.lineTo(i*64,256);c.stroke();c.beginPath();c.moveTo(0,i*64);c.lineTo(256,i*64);c.stroke()}tileT.tx.wrapS=tileT.tx.wrapT=THREE.RepeatWrapping;tileT.tx.repeat.set(8,4)}
part(BK.S,new THREE.PlaneGeometry(20,10),tmat(0xffffff,tileT.tx),[0,5,-2],[1,1,1],[0,0,0],0);part(BK.S,new THREE.PlaneGeometry(20,20),toon(0x6FA8B8),[0,0,0],[1,1,1],[-PI/2,0,0],0);
const BUCK=new THREE.Group();BK.S.add(BUCK);const bM=toon(0x3F7FFF);part(BUCK,new THREE.CylinderGeometry(0.42,0.32,0.6,24,1,true),new THREE.MeshToonMaterial({color:0x3F7FFF,gradientMap:GM,side:THREE.DoubleSide}),[0,0,0],[1,1,1],[0,0,0],0.012);part(BUCK,new THREE.CylinderGeometry(0.32,0.32,0.03,24),bM,[0,-0.3,0]);part(BUCK,new THREE.CylinderGeometry(0.38,0.38,0.02,24),toon(0x9FE3FF),[0,0.2,0]);
part(BK.S,cap(0.025,8),toon(0x8A6A4A),[0.25,7.5,0.2]);for(let k=0;k<5;k++)part(BUCK,new THREE.DodecahedronGeometry(0.08,0),toon(0xF4FBFF),[(k-2)*0.12,0.24,(k%2)*0.1-0.05],[1,1,1],[k,k,0],0.004);
function bkShot(p,l){BK.cam.position.set(...p);BK.cam.lookAt(...l);setBG('room');r.setClearColor(0,0);r.render(BK.S,BK.cam)}
// ---------- 2D ----------
function stopwatch(x,y,R,sec,col='#FFD23F'){g.save();g.translate(x,y);g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=12;g.fillRect(-18,-R-40,36,30);g.strokeRect(-18,-R-40,36,30);g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();
  g.fillStyle=col;g.beginPath();g.moveTo(0,0);g.arc(0,0,R*0.85,-PI/2,-PI/2+2*PI*((sec%60)/60));g.closePath();g.fill();
  const a=-PI/2+2*PI*((sec%60)/60);g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.moveTo(0,0);g.lineTo(Math.cos(a)*R*0.8,Math.sin(a)*R*0.8);g.stroke();g.restore();
  const m=Math.floor(sec/60),s=Math.floor(sec%60);txt(m+':'+String(s).padStart(2,'0'),x,y+R+60,R*0.55,{fill:col,sw:12})}
function bubbles(t,x,y,n=8,sp=260){for(let i=0;i<n;i++){const ph=(t*0.9+hash(i*3))%1;const bx=x+Math.sin(ph*9+i)*24+(hash(i)-0.5)*40,by=y-ph*sp;g.save();g.globalAlpha=1-ph;g.strokeStyle='#E8FBFF';g.lineWidth=5;g.beginPath();g.arc(bx,by,8+hash(i*5)*12,0,7);g.stroke();g.restore()}}
function ecg(x,y,w,h,t,bpm){panel(x+w/2,y+h/2,w+40,h+40,'rgba(5,20,15,0.9)','#5BE37A',26);g.save();g.beginPath();g.rect(x,y,w,h);g.clip();g.strokeStyle='#5BE37A';g.lineWidth=7;g.beginPath();
  for(let i=0;i<=w;i+=4){const tt=t-(w-i)/w*2.2;let ph=0;// integrate beats at changing bpm (approx using current bpm)
    ph=(tt*bpm/60)%1;if(ph<0)ph+=1;let v=0;if(ph>0.1&&ph<0.13)v=-0.15;else if(ph>0.13&&ph<0.17)v=1;else if(ph>0.17&&ph<0.2)v=-0.35;else if(ph>0.35&&ph<0.45)v=0.18*Math.sin((ph-0.35)/0.1*PI);
    const yy=y+h*0.6-v*h*0.45;i?g.lineTo(x+i,yy):g.moveTo(x+i,yy)}g.stroke();g.restore();heart(x+60,y+h*0.32,0.55+0.1*Math.max(0,Math.sin(t*bpm/60*2*PI)));txt(Math.round(bpm)+' BPM',x+w-150,y+h*0.32,58,{fill:'#5BE37A',sw:12})}
// ---------- opening (loop) ----------
const C0={p:[4.2,3.3,20.5],l:[0.3,2.1,10.6]};
function openScene(t){putGuy(PR.S,0,0.97,10.6,0.35);guy.pose(idle(t,{armL:[0.35+0.05*Math.sin(t*2*PI/(TT/8)),0],armR:[0.35,0],headYaw:0.2,look:0.3,jump:0.012*Math.sin(t*2*PI/(TT/10))}))}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();ROPE.visible=false;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.1,CU.c1));prShot(mix(C0.p,[3.8,3.1,19.3],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('COULD YOU HOLD',W/2,200,96,{sw:20});txt('YOUR BREATH LIKE',W/2,310,92,{fill:'#3FF0FF',sw:20});txt('IN GTA 6?',W/2,450,150,{fill:'#FFD23F',sw:28});g.restore()}
  else if(t<CU.c2){flash(t,CU.c1,0.15);uwAnim(t);const u=t-CU.c1,kick=Math.sin(u*5);putGuy(UW.S,0,1.2+0.08*Math.sin(u*2),0,-0.3);
    guy.pose({legL:[0.4*kick,0.4,0],legR:[-0.4*kick,0.4,0],armL:[1.2+0.25*Math.sin(u*3),0.3],armR:[1.2+0.25*Math.sin(u*3+1),0.3],bendL:0.4,bendR:0.4,mouth:'o',mouthSize:0.5,blink:false,wide:true});
    uwShot([1.6,2.8,9.4],[0,2.4,0]);const hp=proj(new THREE.Vector3(0,3.1,0.3),UW.cam);bubbles(t,hp[0],hp[1]-40,5,300);
    const sec=lerp(0,60,easeOut(seg(t,4.1,6.2)));stopwatch(W*0.78,560,110,sec,sec>50?'#FF4A4A':'#FFD23F');pill('~1 MINUTE',W/2,1640,70,'#FFD23F','#111',t,5.6,CU.c2);comic('HMMPH',W*0.24,520,90,t,4.3,{life:0.9,rot:-0.12,fill:'#3FF0FF'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);uwAnim(t);const u=t-CU.c2,p=seg(t,6.6,9.4),kick=Math.sin(u*(5+6*p));putGuy(UW.S,0,1.3,0,0.2);
    guy.pose({legL:[0.5*kick,0.5,0],legR:[-0.5*kick,0.5,0],armL:[1.0+0.6*p+0.2*Math.sin(u*8),0.3],armR:[1.0+0.6*p+0.2*Math.sin(u*8+2),0.3],bendL:0.5,bendR:0.5,mouth:'o',mouthSize:0.4+0.4*p,blink:false,wide:p>0.5,headPitch:-0.2*p});
    uwShot([-1.2,2.6,10.5],[0,2.6,0],'linear-gradient(#2A8FC0 0%,#0E5E8A 50%,#082F52 100%)');
    // blood gas panel
    panel(W/2,520,880,420);txt('YOUR BLOOD',W/2,365,52,{fill:'#fff',sw:10});const co2=lerp(0.15,0.95,easeOut(seg(t,6.7,8.4))),o2=lerp(0.95,0.8,seg(t,8.4,9.5));
    txt('CO₂',W/2-330,470,56,{fill:'#FF4A4A',sw:12});bar(W/2-250,440,620,60,co2,'#FF4A4A');txt('O₂',W/2-330,600,56,{fill:'#5BE37A',sw:12});bar(W/2-250,570,620,60,o2,'#5BE37A');
    if(t>7.3){const s=pop(t,7.3);g.save();g.translate(W/2+420,470);g.scale(s,s);arrow(0,40,0,-30,'#FF4A4A',16);g.restore()}if(t>8.6){check(W/2+425,600,0.9)}
    pill('CO₂ = PANIC BUTTON',W/2,1640,64,'#FF4A4A','#fff',t,9.55,CU.c3);pill('OXYGEN STILL OK',W/2,820,54,'#5BE37A','#111',t,8.6,CU.c3);comic('!!!',W*0.78,1140,120,t,9.7,{life:0.8,rot:0.1,fill:'#FF4A4A'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);const p=seg(t,CU.c3,CU.c3+0.8),jy=-1.9+1.6*Math.sin(Math.min(1,p)*PI*0.62);putGuy(PR.S,-4,jy,6,0.2);prSea.position.y=0;
    guy.pose({armL:[2.7,0.2],armR:[2.7,0.2],legL:[0.3,0.4,0],legR:[-0.1,0.4,0],mouth:'o',mouthSize:1.4,wide:true,blink:false,headPitch:-0.25});
    prShot([-1.8,1.5,14.5],[-4,1.4,6]);const sp=proj(new THREE.Vector3(-4,0,6),PR.cam);for(let i=0;i<16;i++){const a=i/16*PI*2,d=p*260;g.fillStyle='#E8FBFF';g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.arc(sp[0]+Math.cos(a)*d*1.3,sp[1]-Math.abs(Math.sin(a))*d*0.8-p*(1-p)*300,14*(1-p*0.6),0,7);g.fill();g.stroke()}
    comic('GASP!',W/2,1130,150,t,9.75,{life:1.1,rot:-0.08,fill:'#FFD23F'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);putGuy(BK.S,0,0,0,0);const tip=easeOut(seg(t,11.1,11.5)),hit=t>11.45,wet=seg(t,11.45,11.7);
    BUCK.position.set(0.25,3.5,0.2);BUCK.rotation.set(0,0,-2.1*tip);
    guy.pose(hit?{armL:[0.9-0.3*seg(t,12.2,13),0.6],armR:[0.9-0.3*seg(t,12.2,13),0.6],bendL:1.2,bendR:1.2,mouth:t<12.3?'o':'smile',mouthSize:1.2,wide:t<12.3,blink:t>12.6&&t<13.6,headPitch:-0.05}:{armL:[0.3,0],armR:[0.3,0],mouth:'smile',lookY:0.6,headPitch:-0.3,blink:false});
    bkShot([1.6,2.5,7.4],[0,2.2,0]);
    if(t>11.35&&t<12.0){const b=proj(new THREE.Vector3(0.1,3.2,0.2),BK.cam);for(let i=0;i<26;i++){const ph=clamp((t-11.35)*3-hash(i)*0.4);g.fillStyle='#9FE3FF';g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.ellipse(b[0]-60+hash(i*3)*120,b[1]+ph*420,12,18,0,0,7);g.fill();g.stroke()}}
    if(hit){const hd=proj(new THREE.Vector3(0,2.5,0.3),BK.cam);for(let i=0;i<6;i++){const ph=(t*1.5+hash(i))%1;g.fillStyle='#9FE3FF';g.beginPath();g.ellipse(hd[0]-140+hash(i*7)*280,hd[1]+ph*500,8,12,0,0,7);g.fill()}}
    comic('BRRR!',W*0.75,700,120,t,11.5,{life:1.0,rot:0.12,fill:'#9FE3FF'});
    const bpm=lerp(88,58,easeOut(seg(t,12.6,14.6)));if(t>11.7)ecg(W/2-400,250,800,230,t,bpm);pill('DIVE REFLEX',W/2,1640,72,'#3FF0FF','#111',t,12.75,CU.c5);if(t>13.9)pill('HEART SLOWS DOWN',W/2,610,54,'#5BE37A','#111',t,13.9,CU.c5)}
  else if(t<CU.c6){flash(t,CU.c5,0.15);const d=easeIn(seg(t,15.2,18.3));uwAnim(t,-d*0);ROPE.visible=true;ROPE.position.y=0;
    const y=6-d*0.0;putGuy(UW.S,1.6,2.6+0.06*Math.sin(t*2),-1.5,PI/2);holder.rotation.z=PI;holder.position.y=4.9;
    guy.pose({armL:[0.2,0],armR:[0.2,0],legL:[0.15*Math.sin(t*3),0.1,0],legR:[-0.15*Math.sin(t*3),0.1,0],mouth:'smile',blink:false,headPitch:0.1});
    const camY=4.2-d*3.0;uwShot([5.2,camY,6.5],[1.6,camY-0.2,-1.5],`linear-gradient(#${d>0.5?'0B4A78':'1478B0'} 0%,#082F52 55%,#03111F 100%)`);
    g.save();g.globalAlpha=0.35*d;g.fillStyle='#000814';g.fillRect(0,0,W,H);g.restore();
    const sec=lerp(0,695,easeIn(seg(t,15.3,17.9)));stopwatch(W*0.27,560,110,sec,sec>600?'#FF4A4A':'#FFD23F');
    txt(Math.round(d*60)+' m deep',W*0.75,520,56,{fill:'#BFF0FF',sw:12});pill('11+ MINUTES',W/2,1640,76,'#FFD23F','#111',t,16.9,CU.c6);comic('WHOA',W*0.72,700,100,t,17.4,{life:0.8,rot:0.1,fill:'#FFD23F'})}
  else{const tt=t-TT;openScene(tt);prSea.position.y=0;const k=ease(seg(t,CU.c6,TT-0.1));prShot(mix([6,4.2,23.5],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
function easeIn(x){x=clamp(x);return x*x}
