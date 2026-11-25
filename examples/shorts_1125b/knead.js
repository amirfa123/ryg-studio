// ===== What does it mean when a cat kneads you? (wildcard / animals) =====
const TT=18.25;
const CU={c1:2.5,c2:7.33,c3:10.38,c4:11.75,c5:13.8,c6:16.55};
guy.outfit({});
// ---------- cozy afternoon living room (original set) ----------
const L={S:new THREE.Scene()};lights(L.S);L.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);
part(L.S,new THREE.PlaneGeometry(30,30),toon(0xC98B55),[0,0,0],[1,1,1],[-PI/2,0,0],0);for(let i=-10;i<10;i++)part(L.S,new THREE.PlaneGeometry(0.04,30),toon(0xA8703F),[i*0.6,0.003,0],[1,1,1],[-PI/2,0,0],0);
part(L.S,new THREE.PlaneGeometry(30,10),toon(0xFFC9A0),[0,5,-3.4],[1,1,1],[0,0,0],0);part(L.S,new THREE.PlaneGeometry(14,10),toon(0xF4B489),[-5,5,3],[1,1,1],[0,PI/2,0],0);part(L.S,new THREE.PlaneGeometry(14,10),toon(0xF4B489),[5,5,3],[1,1,1],[0,-PI/2,0],0);
part(L.S,new THREE.BoxGeometry(30,0.25,0.08),toon(0xFFFFFF),[0,0.12,-3.36],[1,1,1],[0,0,0],0);
{const wt=canvasTex(512,320);const c=wt.ctx;const gr=c.createLinearGradient(0,0,0,320);gr.addColorStop(0,'#5FC3FF');gr.addColorStop(1,'#CFEFFF');c.fillStyle=gr;c.fillRect(0,0,512,320);c.fillStyle='#fff';for(const [x,y,s] of [[110,90,1],[360,140,1.3],[250,60,0.7]]){c.beginPath();c.arc(x,y,30*s,0,7);c.arc(x+35*s,y-15*s,36*s,0,7);c.arc(x+75*s,y,28*s,0,7);c.fill()}
  c.fillStyle='#7BC96F';c.beginPath();c.moveTo(0,320);c.quadraticCurveTo(150,230,300,290);c.quadraticCurveTo(420,240,512,280);c.lineTo(512,320);c.fill();
  part(L.S,new THREE.PlaneGeometry(2.6,1.7),new THREE.MeshBasicMaterial({map:wt.tx}),[-1.9,2.6,-3.38],[1,1,1],[0,0,0],0);
  for(const [x,y,w,h] of [[-1.9,1.72,2.8,0.12],[-1.9,3.48,2.8,0.12],[-3.25,2.6,0.12,1.9],[-0.55,2.6,0.12,1.9],[-1.9,2.6,0.08,1.7]])part(L.S,new THREE.BoxGeometry(w,h,0.12),toon(0xFFFFFF),[x,y,-3.32],[1,1,1],[0,0,0],0.006)}
// picture frame with an abstract fish
{const ft=canvasTex(256,200);const c=ft.ctx;c.fillStyle='#FFF2D8';c.fillRect(0,0,256,200);c.fillStyle='#FF8A5B';c.beginPath();c.ellipse(120,100,60,34,0,0,7);c.fill();c.beginPath();c.moveTo(175,100);c.lineTo(225,65);c.lineTo(225,135);c.fill();c.fillStyle='#111';c.beginPath();c.arc(90,92,6,0,7);c.fill();
  part(L.S,new THREE.PlaneGeometry(1.1,0.86),new THREE.MeshBasicMaterial({map:ft.tx}),[1.8,2.8,-3.37],[1,1,1],[0,0,0],0);part(L.S,new THREE.BoxGeometry(1.25,1.0,0.05),toon(0x7A4E2A),[1.8,2.8,-3.39],[1,1,1],[0,0,0],0.006)}
// sofa (faces +z, guy sits facing camera)
const SOFA=new THREE.Group();SOFA.position.set(0,0,-1.6);L.S.add(SOFA);{const A=toon(0x3E9E7A),B=toon(0x2F7F62);
  part(SOFA,new THREE.BoxGeometry(3.2,0.45,1.2),B,[0,0.22,0],[1,1,1],[0,0,0],0.015);part(SOFA,new THREE.BoxGeometry(3.0,0.2,1.1),A,[0,0.52,0.02],[1,1,1],[0,0,0],0.015);part(SOFA,new THREE.BoxGeometry(3.2,1.0,0.32),A,[0,0.85,-0.5],[1,1,1],[0,0,0],0.015);
  for(const s of [-1,1])part(SOFA,new THREE.BoxGeometry(0.3,0.75,1.2),B,[s*1.6,0.55,0],[1,1,1],[0,0,0],0.015);part(SOFA,new THREE.BoxGeometry(0.6,0.5,0.2),toon(0xFFD23F),[1.05,0.85,-0.25],[1,1,1],[0,0,-0.15],0.03)}
// rug, plant, yarn ball
part(L.S,new THREE.CircleGeometry(2.2,40),toon(0xE86A8E),[0,0.01,0.4],[1.5,1,1],[-PI/2,0,0],0);part(L.S,new THREE.CircleGeometry(1.7,40),toon(0xF59AB4),[0,0.015,0.4],[1.5,1,1],[-PI/2,0,0],0);
const PL=new THREE.Group();PL.position.set(2.6,0,-2.3);L.S.add(PL);part(PL,new THREE.CylinderGeometry(0.35,0.28,0.6,16),toon(0xD9673A),[0,0.3,0],[1,1,1],[0,0,0],0.01);for(let k=0;k<7;k++)part(PL,SPH,toon(k%2?0x3DA84C:0x2F8F40),[Math.cos(k*0.9)*0.25,0.95+k*0.12,Math.sin(k*0.9)*0.25],[0.12,0.45,0.25],[Math.sin(k)*0.5,k,Math.cos(k)*0.5],0.006);
const YARN=part(L.S,SPH,toon(0x7B5CFF),[-1.2,0.2,0.9],[0.2,0.2,0.2],[0,0,0],0.008);
const DAY='linear-gradient(#FFD9B8,#FFC09A)';
function livShot(p,l){L.cam.position.set(...p);L.cam.lookAt(...l);setBG(DAY);r.setClearColor(0,0);r.render(L.S,L.cam)}
// ---------- the cat (original, grey tabby) ----------
const OR=toon(0x9AA3B5),ST=toon(0x5E6678),WH=toon(0xFFF4E0),PK=toon(0xFF9AB0),BK=basic(0x111111);
function makeCat(){const root=new THREE.Group(),F=new THREE.Group(),B=new THREE.Group();root.add(F);root.add(B);
  part(F,SPH,OR,[0.17,0,0],[0.24,0.17,0.17],[0,0,0],0.008);part(F,SPH,WH,[0.26,-0.04,0],[0.13,0.12,0.13],[0,0,0],0);
  const hd=new THREE.Group();hd.position.set(0.42,0.12,0);F.add(hd);part(hd,SPH,OR,[0,0,0],[0.15,0.13,0.15],[0,0,0],0.008);part(hd,SPH,WH,[0.1,-0.04,0],[0.07,0.05,0.09],[0,0,0],0);part(hd,SPH,PK,[0.145,-0.01,0],[0.02,0.015,0.025],[0,0,0],0);
  for(const s of [-1,1]){part(hd,new THREE.ConeGeometry(0.05,0.1,4),OR,[0.01,0.13,s*0.08],[1,1,1],[s*0.25,0,0],0.006);part(hd,new THREE.ConeGeometry(0.03,0.06,4),PK,[0.03,0.125,s*0.08],[1,1,1],[s*0.25,0,0],0);
    part(hd,SPH,basic(0x9BE36B),[0.115,0.035,s*0.055],[0.03,0.035,0.03],[0,0,0],0.004);part(hd,SPH,BK,[0.135,0.035,s*0.058],[0.012,0.028,0.012],[0,0,0],0);
    for(let k=0;k<2;k++)part(hd,cap(0.003,0.12),basic(0xffffff),[0.13,-0.02+k*0.02,s*0.1],[1,1,1],[PI/2-s*(0.1-k*0.15),0,0],0)}
  part(hd,SPH,ST,[-0.02,0.1,0],[0.08,0.03,0.04],[0,0,0],0);
  const legs=[];const mkLeg=(par,x,z)=>{const l=new THREE.Group();l.position.set(x,-0.08,z);par.add(l);part(l,cap(0.045,0.16),OR,[0,-0.1,0]);part(l,SPH,WH,[0.02,-0.2,0],[0.055,0.035,0.05],[0,0,0],0.004);legs.push(l);return l};
  const fl=[mkLeg(F,0.24,0.08),mkLeg(F,0.24,-0.08)];
  part(B,SPH,OR,[-0.17,0,0],[0.24,0.17,0.17],[0,0,0],0.008);for(let k=0;k<3;k++)part(B,SPH,ST,[-0.08-k*0.12,0.13,0],[0.035,0.06,0.13],[0,0,0],0);part(F,SPH,ST,[0.12,0.13,0],[0.035,0.06,0.13],[0,0,0],0);
  const bl=[mkLeg(B,-0.26,0.08),mkLeg(B,-0.26,-0.08)];
  const tail=new THREE.Group();tail.position.set(-0.38,0.05,0);B.add(tail);const tsegs=[];let par=tail;for(let k=0;k<5;k++){const s=new THREE.Group();s.position.set(k?-0.09:0,0,0);par.add(s);part(s,cap(0.035,0.08),k===4?ST:OR,[-0.045,0,0],[1,1,1],[0,0,PI/2]);tsegs.push(s);par=s}
  return {root,F,B,hd,fl,bl,tsegs,
    pose(o={}){F.rotation.set(o.fRoll||0,0,o.bend||0);B.rotation.set(o.bRoll||0,0,-(o.bend||0));const ft=o.tuckF||0,bt=o.tuckB||0;fl.forEach(l=>l.rotation.z=o.fLeg!==undefined?o.fLeg:ft*1.2);bl.forEach(l=>l.rotation.z=o.bLeg!==undefined?o.bLeg:-bt*1.0);
      const sw=o.tail||0;tsegs.forEach((s,i)=>{s.rotation.z=(o.tailUp!==undefined?o.tailUp:0.35)+0.0;s.rotation.y=sw*(0.2+i*0.05)});hd.rotation.set(0,o.headYaw||0,o.headTilt||0)}}}

const cat=makeCat();L.S.add(cat.root);
function catAt(x,y,z,ry=0,roll=0,s=1.3){cat.root.position.set(x,y,z);cat.root.rotation.set(roll,ry,0);cat.root.scale.setScalar(s)}
function knead(t,sp=6,amp=1){const s=Math.sin(t*sp);cat.fl[0].rotation.z=0.35+0.55*amp*Math.max(0,s);cat.fl[1].rotation.z=0.35+0.55*amp*Math.max(0,-s);cat.F.position.y=0.015*amp*Math.abs(s)}
function onLap(t,o={}){catAt(1.0,1.05,-1.45,PI,0,1.3);cat.pose({bend:-0.12,tail:Math.sin(t*2.2),headTilt:0.25,...o});knead(t,o.sp||6,o.amp===undefined?1:o.amp)}
function sitGuy(t,o={}){L.S.add(holder);holder.rotation.order='XYZ';holder.position.set(0,0.15,-1.55);holder.rotation.set(0,0,0);holder.scale.setScalar(1);holder.visible=true;guy.pose({...SIT,armL:[0.5,0.5],armR:[0.5,-0.5],bendL:0.6,bendR:0.6,blink:BLINK(t),mouth:'smile',...o})}
// ---------- 2D ----------
function heartF(x,y,s,a){if(a<=0)return;g.save();g.globalAlpha=a;heart(x,y,s,'#FF5FA2');g.restore()}
function momCat(cx,cy,t){g.save();g.translate(cx,cy);g.strokeStyle='#111';g.lineWidth=10;g.lineJoin='round';
  g.fillStyle='#9AA3B5';g.beginPath();g.ellipse(0,0,330,150,0,0,7);g.fill();g.stroke();g.fillStyle='#E9E4D8';g.beginPath();g.ellipse(0,70,250,70,0,0,PI);g.fill();
  g.fillStyle='#5E6678';for(let k=0;k<4;k++){g.beginPath();g.ellipse(-150+k*90,-110,22,40,0.2,0,7);g.fill()}
  g.fillStyle='#9AA3B5';g.beginPath();g.arc(-360,-80,105,0,7);g.fill();g.stroke();for(const s of [-1,1]){g.beginPath();g.moveTo(-360+s*30-40,-160);g.lineTo(-360+s*70,-230);g.lineTo(-360+s*90,-140);g.closePath();g.fill();g.stroke()}
  g.lineWidth=7;g.beginPath();g.arc(-395,-80,16,PI*1.1,PI*1.9);g.stroke();g.beginPath();g.arc(-325,-80,16,PI*1.1,PI*1.9);g.stroke();g.fillStyle='#FF9AB0';g.beginPath();g.arc(-360,-50,10,0,7);g.fill();
  g.lineWidth=10;g.fillStyle='#9AA3B5';g.beginPath();g.moveTo(320,-20);g.quadraticCurveTo(470,-80,430,-200);g.lineWidth=36;g.strokeStyle='#111';g.stroke();g.lineWidth=22;g.strokeStyle='#9AA3B5';g.stroke();g.restore()}
function kitten(x,y,s,t,ph,col){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=8;g.fillStyle=col;
  const p1=Math.max(0,Math.sin(t*7+ph)),p2=Math.max(0,-Math.sin(t*7+ph));for(const [px,pp] of [[-22,p1],[22,p2]]){g.beginPath();g.ellipse(px,-70-pp*22,14,20,0,0,7);g.fill();g.stroke()}
  g.beginPath();g.ellipse(0,0,46,56,0,0,7);g.fill();g.stroke();g.beginPath();g.arc(0,60,42,0,7);g.fill();g.stroke();for(const sx of [-1,1]){g.beginPath();g.moveTo(sx*14,90);g.lineTo(sx*36,120);g.lineTo(sx*40,80);g.closePath();g.fill();g.stroke()}g.restore()}
function pawPad(cx,cy,s,t,glow){g.save();g.translate(cx,cy);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=12;g.fillStyle='#9AA3B5';g.beginPath();g.ellipse(0,0,250,280,0,0,7);g.fill();g.stroke();
  g.fillStyle='#FF9AB0';g.beginPath();g.moveTo(-120,110);g.bezierCurveTo(-130,-10,130,-10,120,110);g.bezierCurveTo(100,170,-100,170,-120,110);g.fill();g.stroke();
  const toes=[[-150,-90],[-55,-170],[55,-170],[150,-90]];for(const [x,y] of toes){g.beginPath();g.ellipse(x,y,48,58,0,0,7);g.fill();g.stroke()}
  if(glow>0){for(const [x,y] of [...toes,[-45,90],[45,90]]){const pr=1+0.15*Math.sin(t*8+x);g.fillStyle=`rgba(255,230,80,${glow})`;g.beginPath();g.arc(x,y,24*pr,0,7);g.fill();g.strokeStyle='#111';g.lineWidth=6;g.stroke()}}
  g.restore()}
function scentLines(cx,cy,t,a){if(a<=0)return;g.save();g.globalAlpha=a;g.strokeStyle='#B59CFF';g.lineWidth=14;g.lineCap='round';for(let k=0;k<4;k++){const x0=cx-180+k*120;g.beginPath();for(let i=0;i<=20;i++){const y=cy-i*16,x=x0+22*Math.sin(i*0.6-t*6+k);i?g.lineTo(x,y):g.moveTo(x,y)}g.stroke()}g.restore()}
function stamp(x,y,s,rot,a,txt1){if(a<=0)return;g.save();g.globalAlpha=a;g.translate(x,y);g.rotate(rot);g.scale(s,s);g.strokeStyle='#E8233A';g.lineWidth=16;rr(-230,-90,460,180,20);g.stroke();txt(txt1,0,4,110,{fill:'#E8233A',stroke:0});g.restore()}
// ---------- opening: cat kneading his belly on the sofa ----------
const C0={p:[1.8,2.1,6.4],l:[0.45,1.35,-1.4]};
function openScene(t){sitGuy(t,{mouth:'grin',headPitch:0.15,headYaw:0.35,look:0.5,lookY:-0.4,armL:[0.75,0.45],armR:[0.75,-0.45],bendL:0.7,bendR:0.7});onLap(t,{sp:2*PI/0.6,headYaw:0})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;cat.root.visible=true;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.15,CU.c1));livShot(mix(C0.p,[1.6,2.0,5.8],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT DOES IT MEAN',W/2,185,84,{sw:16});txt('WHEN A CAT',W/2,295,106,{fill:'#B59CFF',sw:20});txt('KNEADS YOU?',W/2,410,118,{fill:'#FFD23F',sw:22});g.restore()}
  else if(t<CU.c2){flash(t,CU.c1,0.15);clear3d();setBG('pink');momCat(W/2+40,900,t);
    const kc=['#F29A38','#FFFFFF','#2A2A35','#C9A27A'];for(let i=0;i<4;i++){const ka=backOut(seg(t,2.9+i*0.15,3.3+i*0.15));if(ka>0)kitten(W/2-150+i*125,1120,0.95*ka,t,i*1.3,kc[i])}
    pill('KITTEN HABIT',W/2,330,80,'#FFFFFF','#111',t,2.8,CU.c2);
    if(t>5.9){for(let i=0;i<5;i++){const d=((t-5.9)*1.4+i*0.2)%1;g.save();g.globalAlpha=1-d;g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=5;g.beginPath();g.arc(W/2-200+i*100,1000-d*160,16,0,7);g.fill();g.stroke();g.restore()}}
    pill('= MORE MILK',W/2,1290,70,'#FFD23F','#111',t,6.2,CU.c2);comic('PUSH PUSH',W*0.5,560,80,t,4.7,{life:1.0,rot:-0.06,fill:'#FF8FC8'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);sitGuy(t,{mouth:'grin',headPitch:0.2,headYaw:0.45,look:0.5,lookY:-0.5,armL:[0.75,0.45],armR:[0.75,-0.45],bendL:0.7,bendR:0.7});onLap(t,{sp:7,headTilt:0.4,headYaw:0.3});
    const k=ease(seg(t,CU.c2,CU.c3));livShot([lerp(1.6,1.3,k),lerp(1.55,1.45,k),lerp(2.0,1.4,k)],[0.6,1.1,-1.5]);
    for(let i=0;i<6;i++){const d=((t-CU.c2)*0.6+i/6)%1;heartF(W/2+Math.sin(i*2.3+t)*260,1100-d*700,0.9+0.3*hash(i),(1-d)*seg(t,CU.c2,CU.c2+0.3))}
    const hf=easeOut(seg(t,8.3,9.7));bar(W/2-330,330,660,90,hf,'#FF5FA2','');txt('SAFE + HAPPY',W/2,332,52,{sw:10});comic('PURRR',W*0.24,1150,90,t,8.0,{life:1.0,rot:-0.12,fill:'#FFD23F'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);sitGuy(t,{mouth:'o',mouthSize:0.6,wide:true,headPitch:0.3,lookY:-0.6});onLap(t,{amp:0,headYaw:0.9,headTilt:0.0});
    const z=easeOut(seg(t,CU.c3,CU.c3+0.4));cat.hd.updateWorldMatrix(true,false);const hp=new THREE.Vector3();cat.hd.getWorldPosition(hp);livShot([hp.x+lerp(0.8,0.4,z),hp.y+0.15,hp.z+lerp(2.4,1.5,z)],[hp.x,hp.y,hp.z]);
    pill('BUT...',W/2,330,110,'#FFD23F','#111',t,CU.c3,CU.c4);comic('?!',W*0.78,600,140,t,10.5,{life:1.1,rot:0.1,fill:'#FF4A4A'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);clear3d();setBG('neon');const gl=easeOut(seg(t,12.7,13.1));pawPad(W/2,900,1.35,t,gl);scentLines(W/2,560,t,gl*0.9);
    pill('PAW PADS',W/2,330,84,'#FFFFFF','#111',t,CU.c4,12.75);pill('SCENT GLANDS',W/2,330,80,'#FFE650','#111',t,12.75,CU.c5);comic('SNIFF',W*0.8,1220,80,t,13.0,{life:0.7,rot:0.12,fill:'#B59CFF'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);sitGuy(t,{mouth:t>14.9?'o':'smile',mouthSize:0.7,wide:t>14.9,headPitch:0.1,armL:[0.4,0.6],armR:[0.4,-0.6]});onLap(t,{sp:7,headYaw:-0.6,headTilt:0.1});
    const k=ease(seg(t,CU.c5,CU.c6));livShot([lerp(0.0,0.3,k),lerp(2.0,2.1,k),lerp(5.2,5.7,k)],[0.55,1.35,-1.4]);
    const bp=new THREE.Vector3(...guy.bellyPoint(0,0.1,1));guy.up.localToWorld(bp);const [bx,by]=proj(bp,L.cam);
    for(let i=0;i<3;i++){const t0=14.2+i*0.55;const a=seg(t,t0,t0+0.12);if(a>0)stamp(bx+(i-1)*150,by-200+i*170,lerp(2.2,0.55,easeOut(a)),-0.2+i*0.15,1,'MINE')}
    if(t>15.6){g.save();g.globalAlpha=easeOut(seg(t,15.6,15.9));panel(W/2,330,780,150,'rgba(10,12,25,0.88)','#E8233A',36);txt('PROPERTY OF CAT',W/2,332,70,{stroke:0,fill:'#FF6A7A'});g.restore()}
    comic('YOU\'RE MINE',W*0.5,560,80,t,14.3,{life:1.0,rot:-0.08,fill:'#FF8FC8'})}
  else{const tt=t-TT;openScene(tt);const k=ease(seg(t,CU.c6,TT-0.15));livShot(mix([2.2,2.4,7.6],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
