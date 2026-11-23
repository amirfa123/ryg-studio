// ===== Why do you always have room for dessert? (body/everyday, Thanksgiving week) =====
const TT=22.6;
const CU={c1:2.42,c2:4.36,c3:6.04,c4:10.42,c5:13.98,c6:17.4,c7:20.92};
guy.outfit({crown:1});
// ---------- burgundy dining room ----------
const D={S:new THREE.Scene()};lights(D.S);D.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);
D.shot=(p,l,bgc)=>{D.cam.position.set(...p);D.cam.lookAt(...l);setBG(bgc||'linear-gradient(#3A0E1E,#6A1F35)');r.setClearColor(0,0);r.render(D.S,D.cam)};
part(D.S,new THREE.PlaneGeometry(30,30),toon(0x4A2A1E),[0,0,0],[1,1,1],[-PI/2,0,0],0);
part(D.S,new THREE.CircleGeometry(2.8,40),toon(0xC9A24A),[0,0.005,0.2],[1.3,1,1],[-PI/2,0,0],0);part(D.S,new THREE.CircleGeometry(2.5,40),toon(0x8E2A3E),[0,0.008,0.2],[1.3,1,1],[-PI/2,0,0],0);
part(D.S,new THREE.PlaneGeometry(30,10),toon(0x7A2440),[0,5,-3.0],[1,1,1],[0,0,0],0);for(let i=-12;i<=12;i++)part(D.S,new THREE.PlaneGeometry(0.12,10),toon(0x8E2E4E),[i*0.6,5,-2.99],[1,1,1],[0,0,0],0);
part(D.S,new THREE.PlaneGeometry(30,1.0),toon(0x4A1424),[0,0.5,-2.97],[1,1,1],[0,0,0],0);part(D.S,new THREE.BoxGeometry(30,0.1,0.08),toon(0xC9A24A),[0,1.02,-2.95],[1,1,1],[0,0,0],0);
// framed painting (abstract) + chalkboard on the right
part(D.S,new THREE.BoxGeometry(1.8,1.3,0.08),toon(0xC9A24A),[-2.3,3.3,-2.94],[1,1,1],[0,0,0],0.01);part(D.S,new THREE.PlaneGeometry(1.55,1.05),toon(0x2E86DE),[-2.3,3.3,-2.89],[1,1,1],[0,0,0],0);part(D.S,SPH,toon(0xFFB13D),[-2.6,3.4,-2.88],[0.25,0.25,0.02],[0,0,0],0);part(D.S,SPH,toon(0x5BE37A),[-2.0,3.1,-2.88],[0.35,0.18,0.02],[0,0,0],0);
const CBT=canvasTex(640,400);{const c=CBT.ctx;c.fillStyle='#24443A';c.fillRect(0,0,640,400);c.strokeStyle='rgba(255,255,255,0.08)';for(let i=0;i<30;i++){c.beginPath();c.moveTo(hash(i)*640,hash(i*2)*400);c.lineTo(hash(i*3)*640,hash(i*4)*400);c.stroke()}
  c.fillStyle='#F4F4EC';c.textAlign='center';c.font='900 64px Inter';c.fillText('SENSORY-',320,120);c.fillText('SPECIFIC',320,200);c.fillStyle='#FFD23F';c.font='900 76px Inter';c.fillText('SATIETY',320,295);c.strokeStyle='#F4F4EC';c.lineWidth=5;c.beginPath();c.moveTo(150,330);c.lineTo(490,330);c.stroke()}
const CB=new THREE.Group();CB.position.set(3.3,2.7,-2.9);D.S.add(CB);part(CB,new THREE.BoxGeometry(2.7,1.8,0.1),toon(0x8C5E36),[0,0,0],[1,1,1],[0,0,0],0.01);part(CB,new THREE.PlaneGeometry(2.5,1.6),new THREE.MeshBasicMaterial({map:CBT.tx}),[0,0,0.06],[1,1,1],[0,0,0],0);
// chair
const CHR=new THREE.Group();CHR.position.set(0,0,-0.95);D.S.add(CHR);{const m=toon(0x2B1A12),cu=toon(0xC9A24A);part(CHR,new THREE.BoxGeometry(1.25,0.16,1.1),cu,[0,0.72,0],[1,1,1],[0,0,0],0.012);part(CHR,new THREE.BoxGeometry(1.25,1.9,0.14),m,[0,1.6,-0.55],[1,1,1],[0,0,0],0.012);part(CHR,new THREE.BoxGeometry(1.0,1.4,0.05),cu,[0,1.7,-0.47],[1,1,1],[0,0,0],0.01);for(const [x,z] of [[-0.55,-0.48],[0.55,-0.48],[-0.55,0.48],[0.55,0.48]])part(CHR,new THREE.BoxGeometry(0.1,0.7,0.1),m,[x,0.35,z],[1,1,1],[0,0,0],0.006)}
// table with cloth, candles, empty plates
const TB=new THREE.Group();TB.position.set(0,0,0.65);D.S.add(TB);part(TB,new THREE.BoxGeometry(3.4,0.12,1.5),toon(0x5A3420),[0,1.12,0],[1,1,1],[0,0,0],0.012);part(TB,new THREE.BoxGeometry(3.5,0.03,1.6),toon(0xF6F0E2),[0,1.19,0],[1,1,1],[0,0,0],0.004);part(TB,new THREE.BoxGeometry(3.52,0.5,0.02),toon(0xF6F0E2),[0,0.95,0.8],[1,1,1],[0,0,0],0);
for(const [x,z] of [[-1.5,-0.6],[1.5,-0.6],[-1.5,0.6],[1.5,0.6]])part(TB,new THREE.BoxGeometry(0.12,1.1,0.12),toon(0x3A2014),[x,0.55,z],[1,1,1],[0,0,0],0.006);
const TOP=1.22;const FL=[];for(const x of [-1.25,1.25]){part(TB,new THREE.CylinderGeometry(0.08,0.12,0.06,16),toon(0xC9A24A),[x,TOP+0.03,-0.2],[1,1,1],[0,0,0],0.004);part(TB,new THREE.CylinderGeometry(0.05,0.05,0.5,12),toon(0xFFF6E0),[x,TOP+0.3,-0.2],[1,1,1],[0,0,0],0.004);FL.push(part(TB,SPH,basic(0xFFC23D),[x,TOP+0.62,-0.2],[0.05,0.09,0.05],[0,0,0],0))}
part(TB,new THREE.CylinderGeometry(0.36,0.3,0.04,28),toon(0xffffff),[0,TOP+0.02,-0.05],[1,1,1],[0,0,0],0.006);part(TB,new THREE.CylinderGeometry(0.3,0.3,0.005,28),toon(0xC9A24A),[0,TOP+0.045,-0.05],[1,1,1],[0,0,0],0);
for(let i=0;i<7;i++)part(TB,SPH,toon(0xB8682A),[(hash(i*3)-0.5)*0.3,TOP+0.05,-0.05+(hash(i*5)-0.5)*0.3],[0.025,0.012,0.02],[0,i,0],0); // crumbs
// leftover dishes (empty-ish)
part(TB,new THREE.CylinderGeometry(0.62,0.55,0.05,32),toon(0xE9E2D2),[-0.95,TOP+0.03,0.3],[1,1,0.75],[0,0,0],0.006);part(TB,cap(0.03,0.16),toon(0xFFF6E6),[-0.95,TOP+0.08,0.3],[1,1,1],[PI/2,0.4,0],0);part(TB,cap(0.03,0.14),toon(0xFFF6E6),[-0.85,TOP+0.08,0.35],[1,1,1],[PI/2,-0.6,0],0);
part(TB,new THREE.CylinderGeometry(0.26,0.22,0.12,24),toon(0xFFFFFF),[1.0,TOP+0.06,0.35],[1,1,1],[0,0,0],0.006);
// the pie (slides in)
const PIE=new THREE.Group();TB.add(PIE);part(PIE,new THREE.CylinderGeometry(0.42,0.36,0.12,32),toon(0xD9A066),[0,0.06,0],[1,1,1],[0,0,0],0.008);part(PIE,new THREE.CylinderGeometry(0.39,0.39,0.03,32),toon(0xE07A2E),[0,0.125,0],[1,1,1],[0,0,0],0);
for(let i=0;i<8;i++){const a=i/8*PI*2;part(PIE,SPH,toon(0xD9A066),[Math.cos(a)*0.39,0.13,Math.sin(a)*0.39],[0.07,0.04,0.07],[0,0,0],0.004)}part(PIE,SPH,toon(0xFFFDF5),[0,0.17,0],[0.12,0.06,0.12],[0,0,0],0.004);part(PIE,SPH,toon(0xFFFDF5),[0.05,0.22,0.02],[0.06,0.04,0.06],[0,0,0],0);
mkProp('fork',p=>{part(p,cap(0.018,0.32),toon(0xD8DCE4),[0,0.16,0]);for(const x of [-0.03,0,0.03])part(p,cap(0.008,0.08),toon(0xD8DCE4),[x,0.36,0]);part(p,SPH,toon(0xE07A2E),[0,0.42,0],[0.05,0.04,0.05],[0,0,0],0)});
const SEAT=[0,0.8,-0.88];
function sitGuy(t,o={}){putGuy(D.S,SEAT[0],SEAT[1],SEAT[2],0);guy.pose({...SIT,armL:[0.35,0.5],armR:[0.35,0.5],bendL:0.7,bendR:0.7,blink:BLINK(t),...o})}
function flicker(t){FL.forEach((f,i)=>f.scale.set(0.05,0.09+0.015*Math.sin(t*2*PI/0.565+i*2),0.05))}
// ---------- 2D helpers ----------
function stomachGauge(x,y,s,f,lab,col){g.save();g.translate(x,y);g.scale(s,s);g.lineJoin='round';g.strokeStyle='#111';g.lineWidth=10;
  const path=()=>{g.beginPath();g.moveTo(-40,-170);g.quadraticCurveTo(-60,-90,-120,-40);g.quadraticCurveTo(-170,60,-80,140);g.quadraticCurveTo(40,210,130,110);g.quadraticCurveTo(190,30,120,-60);g.quadraticCurveTo(60,-110,20,-90);g.lineTo(20,-170);g.closePath()};
  path();g.fillStyle='#F7C6C6';g.fill();g.save();path();g.clip();g.fillStyle=col||'#FF8A3D';const ly=lerp(200,-180,f);g.fillRect(-200,ly,400,420);g.fillStyle='rgba(255,255,255,0.3)';g.fillRect(-200,ly,400,14);g.restore();path();g.stroke();g.restore();
  txt(lab||Math.round(f*100)+'%',x,y+260*s,54,{fill:'#fff',sw:12})}
function brain(x,y,s,mood,t){g.save();g.translate(x,y);g.scale(s,s);g.lineJoin='round';g.strokeStyle='#111';g.lineWidth=10;g.fillStyle='#FF9EC0';
  g.beginPath();for(let k=0;k<12;k++){const a=k/12*PI*2,rr_=150+18*Math.sin(k*2.7);const bx=Math.cos(a)*rr_*1.25,by=Math.sin(a)*rr_*0.9;g.arc(bx*0.78,by*0.78,62,a-1.2,a+1.2)}g.closePath();g.fill();g.stroke();
  g.strokeStyle='#C2577E';g.lineWidth=7;g.beginPath();g.moveTo(0,-120);g.quadraticCurveTo(20,0,0,120);g.stroke();for(const s2 of [-1,1]){g.beginPath();g.moveTo(s2*50,-80);g.quadraticCurveTo(s2*110,-30,s2*60,20);g.quadraticCurveTo(s2*20,60,s2*90,90);g.stroke()}
  // face
  g.fillStyle='#111';if(mood==='bored'){g.lineWidth=8;g.strokeStyle='#111';for(const s2 of [-1,1]){g.beginPath();g.moveTo(s2*60-22,-10);g.lineTo(s2*60+22,-10);g.stroke()}g.beginPath();g.ellipse(0,55,30,22+8*Math.sin(t*3),0,0,7);g.fill()}
  else if(mood==='love'){for(const s2 of [-1,1])heart(s2*60,-10,1.1,'#FF2E63');g.lineWidth=8;g.strokeStyle='#111';g.beginPath();g.arc(0,40,40,0.2,PI-0.2);g.stroke()}
  else{for(const s2 of [-1,1]){g.beginPath();g.arc(s2*60,-10,14,0,7);g.fill()}g.lineWidth=8;g.strokeStyle='#111';g.beginPath();g.arc(0,40,34,0.3,PI-0.3);g.stroke()}
  g.restore()}
function flavorBars(x,y,vals,t){const names=[['TURKEY','#B8682A'],['POTATOES','#F5E6B8'],['STUFFING','#C9874A'],['SWEET','#FF5FA2']];panel(x,y,820,430,'rgba(20,8,14,0.88)','#FFB13D',36);
  vals.forEach((v,i)=>{if(v<0)return;const yy=y-150+i*100;txt(names[i][0],x-210,yy,42,{stroke:0,fill:names[i][1]});bar(x-30,yy-24,330,48,v,v<0.3?'#FF5A5A':'#5BE37A')})}
// ---------- opening ----------
const C0={p:[1.5,2.7,6.4],l:[0,1.8,0]};
function openScene(t){PIE.visible=false;flicker(t);const b=0.5+0.5*Math.sin(t*2*PI/2.26);
  sitGuy(t,{mouth:'o',mouthSize:0.6,armL:[0.55,0.4],armR:[0.55,0.4],bendL:0.9,bendR:0.9,headPitch:-0.12,headRoll:0.06*Math.sin(t*2*PI/2.26),sitY:-0.27+0.012*b,look:0.2})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.rotation.order='XYZ';holder.visible=true;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.2,CU.c1));D.shot(mix(C0.p,[1.3,2.6,5.9],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHY DO YOU ALWAYS',W/2,200,80,{sw:16});txt('HAVE ROOM FOR',W/2,305,80,{sw:16});txt('DESSERT?',W/2,440,150,{fill:'#FF7AB0',sw:28});g.restore();
    comic('BURP',W*0.78,1130,78,t,1.3,{life:1.0,rot:0.12,fill:'#FFD23F'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);PIE.visible=false;flicker(t);const k=seg(t,CU.c1,CU.c2);
    sitGuy(t,{mouth:'teeth',teethGap:0.1,blink:t>3.2&&t<3.7,armL:[0.25,0.1],armR:[0.6,0.55],bendR:1.2,reachR:guy.bellyPoint(0.5,0.1,1,0,0.06),headPitch:-0.25,headRoll:-0.12,sitY:-0.3});
    D.shot([lerp(-1.2,-1.4,k),2.4,lerp(5.2,4.8,k)],[0,1.7,0]);stomachGauge(W*0.78,560,0.85,lerp(0.6,1.0,ease(seg(t,2.6,3.6))),'FULL',null);
    comic('STUFFED',W*0.3,330,96,t,2.7,{life:1.6,rot:-0.08,fill:'#FF8A3D'});comic('OOF',W*0.22,1150,80,t,3.5,{life:0.8,rot:-0.1,fill:'#fff'})}
  else if(t<CU.c3){flash(t,CU.c2,0.12);flicker(t);const k=seg(t,CU.c2,CU.c3);PIE.visible=true;const sl=easeOut(seg(t,4.45,5.0));PIE.position.set(lerp(2.4,0.0,sl),TOP,lerp(0.45,0.3,sl));PIE.rotation.y=(1-sl)*2;
    const lean=ease(seg(t,4.9,5.3));sitGuy(t,{mouth:'o',mouthSize:1.4,wide:true,blink:false,armL:[0.9,0.2],armR:[0.9,0.2],bendL:0.6,bendR:0.6,headPitch:0.2*lean,lookY:-0.6,brow:0.03});holder.position.z=SEAT[2]+0.12*lean;
    D.shot([lerp(1.2,0.9,k),2.6,lerp(6.0,5.5,k)],[0.1,1.75,0.2]);if(t>5.0){const [px,py]=proj(new THREE.Vector3(0,TOP+0.3,0.95),D.cam);for(let i=0;i<6;i++){const a=i/6*PI*2+t*2;g.save();g.globalAlpha=0.8;txt('✦',px+Math.cos(a)*170,py-60+Math.sin(a)*90,44,{fill:'#FFE680',stroke:0});g.restore()}}
    comic('PIE?!',W*0.5,1130,130,t,4.95,{life:1.1,fill:'#FF7AB0'})}
  else if(t<CU.c4){clear3d();setBG('radial-gradient(circle at 50% 40%,#5A2A6E,#1A0A24 78%)');flash(t,CU.c3,0.15);
    const d=seg(t,7.0,10.0);brain(W/2,560,1.4,t>7.2?'bored':'',t);flavorBars(W/2,1150-0,[lerp(0.95,0.12,ease(seg(t,7.0,8.6))),lerp(0.9,0.15,ease(seg(t,7.6,9.2))),lerp(0.92,0.1,ease(seg(t,8.2,9.8))),-1],t);
    comic('BORING...',W*0.72,330,72,t,7.3,{life:1.6,rot:0.1,fill:'#B8C0D8'});comic('YAWN',W*0.26,330,72,t,9.1,{life:1.1,rot:-0.1,fill:'#fff'})}
  else if(t<CU.c5){clear3d();setBG('radial-gradient(circle at 50% 40%,#C2337A,#3A0B2E 78%)');flash(t,CU.c4,0.15);
    const nk=backOut(seg(t,11.0,11.4));brain(W/2,560,1.4,t>11.4?'love':'bored',t);
    flavorBars(W/2,1150,[0.12,0.15,0.1,t<11.0?-1:lerp(0,1,ease(seg(t,11.0,12.0)))],t);
    if(t>12.2){const k2=pop(t,12.2);g.save();g.translate(W*0.8,880);g.scale(k2,k2);g.fillStyle='#FF2E63';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.arc(0,0,95,0,7);g.fill();g.stroke();txt('RESET',0,0,40,{stroke:0});g.restore()}
    comic('NEW TASTE!',W/2,330,84,t,11.0,{life:1.4,fill:'#FFD23F'});comic('DING!',W*0.22,880,80,t,12.3,{life:0.9,rot:-0.1,fill:'#5BE37A'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);flicker(t);const k=seg(t,CU.c5,CU.c6);PIE.visible=true;PIE.position.set(0,TOP,0.3);PIE.rotation.y=0;
    // stands by the chalkboard pointing
    putGuy(D.S,2.75,0,-1.1,-0.2);guy.pose({armL:[0.3,0],armR:[2.1,-0.3],bendR:0.15,mouth:'grin',blink:BLINK(t),look:-0.6,lookY:0.5,headYaw:-0.35,headRoll:0.05,legL:[0,0,0],legR:[0,0,0]});
    D.shot([lerp(0.6,1.0,k),2.3,lerp(9.0,8.5,k)],[2.8,2.15,-2]);pill('THE SCIENCE NAME',W/2,330,60,'#24443A','#fff',t,14.3,CU.c6);comic('FANCY!',W*0.24,1150,84,t,16.0,{life:1.0,rot:-0.1,fill:'#FFD23F'})}
  else if(t<CU.c7){flash(t,CU.c6,0.15);flicker(t);const k=seg(t,CU.c6,CU.c7);PIE.visible=true;PIE.position.set(0,TOP,0.3);PIE.rotation.y=0;
    const ch=Math.sin(t*2*PI*1.6);props.fork.visible=true;props.fork.position.set(0.3,lerp(0.82,1.02,Math.max(0,ch)),0.66);props.fork.rotation.set(0.5+0.3*ch,0,-0.3);
    sitGuy(t,{mouth:ch>0?'o':'grin',mouthSize:0.6,blink:BLINK(t),reachR:[-0.32,0.8+0.18*Math.max(0,ch),0.72],armL:[0.5,0.4],bendL:0.8,headPitch:0.12});holder.position.z=SEAT[2]+0.1;
    D.shot([lerp(-1.6,-1.9,k),2.7,lerp(6.8,6.4,k)],[0.1,1.95,0.2]);
    stomachGauge(W*0.27,1610,0.5,1.0,'STOMACH: FULL','#FF8A3D');brain(W*0.73,1600,0.42,'love',t);txt('BRAIN: NEW!',W*0.73,1740,46,{fill:'#FF7AB0',sw:11});
    comic('NOM NOM',W*0.74,1130,78,t,18.6,{life:1.4,rot:0.1,fill:'#FFD23F'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c7,TT-0.2));D.shot(mix([2.4,3.2,8.2],C0.p,k),C0.l);flash(t,CU.c7,0.15)}
  vignette();captions(t)};
