// ===== Why do your ears pop on a plane? (body/everyday, travel week) =====
const TT=21.5;
const CU={c1:2.4,c2:5.6,c3:8.75,c4:11.8,c5:16.55,c6:17.35,c7:19.75};
guy.outfit({headphones:1});
// ---- cabin set ----
const CB={S:new THREE.Scene()};lights(CB.S);CB.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);
CB.shot=(p,l)=>{CB.cam.position.set(...p);CB.cam.lookAt(...l);setBG('linear-gradient(#DDE6F0,#AEB9C9)');r.setClearColor(0,0);r.render(CB.S,CB.cam)};
part(CB.S,new THREE.PlaneGeometry(8,40),toon(0x3B4A6B),[0,0,0],[1,1,1],[-PI/2,0,0],0);
part(CB.S,new THREE.PlaneGeometry(0.9,40),toon(0x2A3550),[0.75,0.005,0],[1,1,1],[-PI/2,0,0],0);
part(CB.S,new THREE.CylinderGeometry(2.6,2.6,40,40,1,true),new THREE.MeshToonMaterial({color:0xF1EEE6,side:THREE.BackSide,gradientMap:GM}),[0.4,1.3,0],[1,1,1],[PI/2,0,0],0);
// window sky texture
const wsk=canvasTex(128,192);{const c=wsk.ctx;const gr=c.createLinearGradient(0,0,0,192);gr.addColorStop(0,'#2E7FE0');gr.addColorStop(1,'#BFE6FF');c.fillStyle=gr;c.fillRect(0,0,128,192);c.fillStyle='#fff';for(let i=0;i<5;i++){c.beginPath();c.ellipse(20+i*25,140+(i%2)*20,30,12,0,0,7);c.fill()}}
for(let k=-6;k<=6;k++){const z=k*2.0;part(CB.S,new THREE.CapsuleGeometry(0.2,0.25,6,12),toon(0xC9CFD8),[-1.95,1.55,z+0.25],[1,1,0.1],[0,PI/2,0],0);part(CB.S,new THREE.PlaneGeometry(0.32,0.5),new THREE.MeshBasicMaterial({map:wsk.tx}),[-1.93,1.55,z+0.25],[1,1,1],[0,PI/2,0],0)}
// overhead bins
part(CB.S,new THREE.BoxGeometry(1.2,0.55,40),toon(0xE4E0D6),[-1.3,2.95,0],[1,1,1],[0,0,0.35],0.012);part(CB.S,new THREE.BoxGeometry(1.2,0.55,40),toon(0xE4E0D6),[2.3,2.95,0],[1,1,1],[0,0,-0.35],0.012);
// seats (facing +z)
function seat(x,z,c=0x2F6FD0){const s=new THREE.Group();s.position.set(x,0,z);s.scale.setScalar(1.5);CB.S.add(s);part(s,new THREE.BoxGeometry(0.82,0.18,0.75),toon(c),[0,0.46,0],[1,1,1],[0,0,0],0.012);part(s,new THREE.BoxGeometry(0.82,1.1,0.2),toon(c),[0,1.05,-0.42],[1,1,1],[0,0,-0.0],0.012);part(s,new THREE.BoxGeometry(0.6,0.22,0.12),toon(0xFFFFFF),[0,1.5,-0.3],[1,1,1],[0,0,0],0.008);part(s,new THREE.BoxGeometry(0.08,0.4,0.7),toon(0x2A2E38),[0.45,0.3,0],[1,1,1],[0,0,0],0.006);for(const sx of [-0.3,0.3])part(s,cap(0.04,0.35),toon(0x555A66),[sx,0.2,0.1]);return s}
for(let k=-5;k<=0;k++){seat(-1.35,k*2.0);seat(-0.08,k*2.0);seat(2.3,k*2.0)}
const SEATP=[-1.35,0.77,0.05];
function sitGuy(t,o={}){putGuy(CB.S,SEATP[0],SEATP[1]+0.05,SEATP[2]+0.08,0);guy.pose({...SIT,armL:[0.35,0.45],armR:[0.35,0.45],bendL:0.6,bendR:0.6,blink:BLINK(t),...o})}
// ---- sky set with original plane ----
const SK={S:new THREE.Scene()};lights(SK.S);SK.cam=new THREE.PerspectiveCamera(30,W/H,0.1,400);
SK.shot=(p,l)=>{SK.cam.position.set(...p);SK.cam.lookAt(...l);setBG('linear-gradient(#1F5FC8 0%,#4FA6F0 55%,#BFE6FF 100%)');r.setClearColor(0,0);r.render(SK.S,SK.cam)};
const PL=new THREE.Group();SK.S.add(PL);{const Wm=toon(0xF7F7FA),T=toon(0x14A39A),D=basic(0x1E2A44);
  part(PL,cap(0.62,6.0),Wm,[0,0,0],[1,1,1],[0,0,PI/2],0.02);part(PL,SPH,Wm,[3.4,-0.05,0],[0.75,0.6,0.62],[0,0,0],0.02);part(PL,SPH,D,[3.75,0.2,0],[0.32,0.15,0.4],[0,0,0],0);
  part(PL,new THREE.BoxGeometry(6.2,0.08,0.1),T,[0,-0.15,0.62],[1,1,1],[0,0,0],0);part(PL,new THREE.BoxGeometry(6.2,0.08,0.1),T,[0,-0.15,-0.62],[1,1,1],[0,0,0],0);
  for(let i=0;i<12;i++)for(const s of [-1,1])part(PL,SPH,D,[2.3-i*0.42,0.2,s*0.6],[0.09,0.11,0.03],[0,0,0],0);
  part(PL,new THREE.BoxGeometry(1.5,0.1,7.0),Wm,[0.2,-0.3,0],[1,1,1],[0,0,0],0.015);for(const s of [-1,1])part(PL,cap(0.22,0.7),toon(0xC9CFD8),[0.7,-0.6,s*1.6],[1,1,1],[0,0,PI/2],0.01);
  part(PL,new THREE.BoxGeometry(1.2,1.4,0.1),T,[-3.0,0.85,0],[1,1,1],[0,0,0.35],0.015);part(PL,new THREE.BoxGeometry(0.9,0.08,2.6),Wm,[-3.3,0.15,0],[1,1,1],[0,0,0],0.012)}
const CLOUDS=[];for(let i=0;i<26;i++){const c=new THREE.Group();SK.S.add(c);for(let k=0;k<4;k++)part(c,SPH,toon(0xFFFFFF),[k*0.9-1.3,0.2*hash(i+k),0.3*hash(k)],[1.0+hash(i*3+k)*0.6,0.65,0.8],[0,0,0],0);CLOUDS.push({c,x:(hash(i*1.3)-0.5)*60,y:(hash(i*2.7)-0.5)*40,z:-8-hash(i*4.1)*20})}
// ---- 2D ear cutaway ----
function earDiagram(cx,cy,s,bulge,tube,t,flow,inD,outD){g.save();g.translate(cx,cy);g.scale(s,s);g.lineJoin='round';g.lineCap='round';
  g.fillStyle='#F4C9A0';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.moveTo(-480,-420);g.lineTo(480,-420);g.lineTo(480,560);g.lineTo(-480,560);g.closePath();g.fill();
  // canal
  g.fillStyle='#FFE9D2';g.beginPath();g.moveTo(-480,-90);g.quadraticCurveTo(-240,-110,-20,-80);g.lineTo(-20,80);g.quadraticCurveTo(-240,110,-480,90);g.closePath();g.fill();g.stroke();
  // middle ear cavity
  g.fillStyle='#BFE6FF';g.beginPath();g.moveTo(10,-150);g.quadraticCurveTo(260,-200,270,0);g.quadraticCurveTo(270,140,170,160);g.lineTo(20,150);g.closePath();g.fill();g.stroke();
  // tube
  const tw=6+tube*30;g.strokeStyle='#111';g.lineWidth=tw+16;g.beginPath();g.moveTo(170,150);g.quadraticCurveTo(230,330,400,470);g.stroke();g.strokeStyle=tube>0.2?'#FFB3C7':'#E58FA8';g.lineWidth=tw;g.stroke();
  if(flow>0){for(let i=0;i<6;i++){const u=((t*0.9+i/6)%1);const x=(1-u)*(1-u)*170+2*(1-u)*u*230+u*u*400,y=(1-u)*(1-u)*150+2*(1-u)*u*330+u*u*470;g.globalAlpha=flow;g.fillStyle='#fff';g.lineWidth=4;g.beginPath();g.arc(x,y,12,0,7);g.fill();g.stroke();g.globalAlpha=1}}
  // air dots
  for(let i=0;i<inD;i++){const x=40+hash(i*3.1)*200,y=-120+hash(i*7.3)*250+6*Math.sin(t*3+i);g.fillStyle='#2E86DE';g.beginPath();g.arc(x+(x>200?-30:0),y,9,0,7);g.fill()}
  for(let i=0;i<outD;i++){const x=-440+hash(i*5.3)*400,y=-60+hash(i*2.1)*120+6*Math.sin(t*3+i);g.fillStyle='#2E86DE';g.beginPath();g.arc(x,y,9,0,7);g.fill()}
  // eardrum
  g.strokeStyle='#111';g.lineWidth=26;g.beginPath();g.moveTo(0,-150);g.quadraticCurveTo(-bulge*130,0,0,150);g.stroke();g.strokeStyle='#FF6A8E';g.lineWidth=14;g.stroke();
  g.restore()}
function lbl(s,x,y,c){pillStatic(s,x,y,36,c)}
function pillStatic(s,x,y,size,col){g.save();g.font=`900 ${size}px Inter`;const w=g.measureText(s).width+size*1.1,h=size*1.6;g.fillStyle=col;rr(x-w/2,y-h/2,w,h,h/2);g.fill();g.strokeStyle='#111';g.lineWidth=6;g.stroke();g.restore();txt(s,x,y+2,size,{stroke:0,fill:'#111'})}
function altimeter(x,y,v){panel(x,y,560,140,'rgba(10,12,25,0.85)','#3FF0FF',30);txt('ALTITUDE',x,y-36,32,{stroke:0,fill:'#3FF0FF'});txt(Math.round(v).toLocaleString('en-US')+' FT',x,y+22,64,{stroke:0})}
const C0={p:[1.4,2.4,7.6],l:[-1.1,1.85,0]};
function openScene(t){sitGuy(t,{mouth:'teeth',teethGap:0.3,brow:-0.02,look:0.1,lookY:0.35,headRoll:0.06*Math.sin(t*2*PI/2.15),jump:0.004*Math.sin(t*2*PI/1.075)})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.2,CU.c1));CB.shot(mix(C0.p,[1.2,2.3,6.9],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHY DO YOUR',W/2,210,92,{sw:18});txt('EARS POP',W/2,335,140,{fill:'#FF6A8E',sw:26});txt('ON A PLANE?',W/2,465,100,{fill:'#FFD23F',sw:21});g.restore();
    comic('OUCH',W*0.76,1120,82,t,1.2,{life:1.1,rot:0.1,fill:'#fff'})}
  else if(t<CU.c2){clear3d();setBG('pink');flash(t,CU.c1,0.15);const s=lerp(0.9,1.0,ease(seg(t,CU.c1,CU.c2)));
    earDiagram(W/2,930,s*1.08,0,0,t,0,10,10);
    if(t>2.9)lbl('EARDRUM',W/2-10,640,'#FF6A8E');if(t>3.5)lbl('EAR CANAL',W*0.24,1110,'#FFE9D2');if(t>4.2){const k=pop(t,4.2);g.save();g.translate(W*0.72,1000);g.scale(k,k);lbl('AIR POCKET',0,0,'#BFE6FF');g.restore()}
    panel(W/2,330,800,150);txt('BEHIND YOUR EARDRUM',W/2,300,56,{stroke:0,fill:'#FFD23F'});txt('A TINY POCKET OF AIR',W/2,365,44,{stroke:0})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);const k=seg(t,CU.c2,CU.c3);PL.position.set(0,k*3,0);PL.rotation.set(0,0,0.22);
    CLOUDS.forEach((o,i)=>{o.c.position.set(o.x-k*14,((o.y-k*22+20)%40+40)%40-20,o.z)});
    SK.shot([lerp(-6,-3,k),-1.5+k*3,32],[0.3,k*3+0.8,0]);
    altimeter(W/2,1700,lerp(0,8000,ease(k)));pill('CABIN PRESSURE DROPS',W/2,340,56,'#3FF0FF','#111',t,7.1,CU.c3);comic('WHOOSH',W*0.3,600,80,t,5.9,{life:0.9,rot:-0.1,fill:'#fff'})}
  else if(t<CU.c4){clear3d();setBG('pink');flash(t,CU.c3,0.15);const b=ease(seg(t,9.4,10.6));
    earDiagram(W/2,930,1.08,b*(1+0.06*Math.sin(t*14)),0,t,0,22,6);
    if(t>9.4){arrow(W/2+150,880,W/2-60,880,'#FFD23F',22);arrow(W/2+150,1010,W/2-40,1010,'#FFD23F',22)}
    if(t>10.8){const k=pop(t,10.8);g.save();g.translate(W*0.25,700);g.scale(k,k);lbl('PUSHED OUT!',0,0,'#FF6A8E');g.restore()}
    panel(W/2,330,820,150);txt('TRAPPED AIR PUSHES',W/2,300,58,{stroke:0,fill:'#FFD23F'});txt('MORE AIR INSIDE THAN OUTSIDE',W/2,365,38,{stroke:0});comic('STRETCH',W*0.75,1500,64,t,10.0,{life:1.0,rot:0.08,fill:'#fff'})}
  else if(t<CU.c5){clear3d();setBG('teal');flash(t,CU.c4,0.15);const op=t>13.95?ease(seg(t,13.95,14.3)):0,ev=ease(seg(t,14.6,16.0));
    earDiagram(W/2,900,1.04,lerp(1,0,ev),op,t,op*(1-seg(t,16.0,16.5)),Math.round(lerp(22,10,ev)),Math.round(lerp(6,10,ev)));
    if(t>12.6){const k=pop(t,12.6);g.save();g.translate(W*0.74,1500);g.scale(k,k);lbl('TUBE TO THROAT',0,0,'#FFB3C7');g.restore()}
    if(t>13.95)comic('SNAP!',W*0.78,1250,96,t,13.95,{life:0.8,rot:0.1,fill:'#FFD23F'});if(t>15.9){const k=pop(t,15.9);g.save();g.translate(W*0.24,700);g.scale(k,k);check(0,0,1.6);g.restore()}
    panel(W/2,330,820,150);txt(t<14.6?'THE TUBE SNAPS OPEN':'PRESSURE EVENS OUT',W/2,330,60,{stroke:0,fill:'#FFD23F'})}
  else if(t<CU.c6){flash(t,CU.c5,0.2);const d=t-16.62;sitGuy(t,{mouth:'o',mouthSize:1.1,wide:true,brow:0.03,jump:d>0?0.12*Math.exp(-d*6)*Math.abs(Math.sin(d*18)):0});
    CB.shot([0.4,2.3,5.4],[-1.2,1.85,0]);if(t>16.62){const k=pop(t,16.62);g.save();g.translate(W/2,1700);g.scale(k,k);g.rotate(-0.08);txt('POP!',0,0,230,{fill:'#FF6A8E',sw:36});g.restore()}}
  else if(t<CU.c7){flash(t,CU.c6,0.15);const k=seg(t,CU.c6,CU.c7);const ch=Math.sin(t*2*PI*2.4)>0;sitGuy(t,{mouth:ch?'o':'smile',mouthSize:0.45,look:0.2,headRoll:0.03*Math.sin(t*2*PI*2.4)});
    CB.shot([lerp(2.5,2.1,k),2.5,lerp(8.2,7.4,k)],[-1.0,1.8,0]);
    if(t>17.5){const s=pop(t,17.5);g.save();g.translate(W*0.76,880);g.scale(s,s);g.rotate(0.1);g.fillStyle='#FF8FB1';g.strokeStyle='#111';g.lineWidth=8;rr(-110,-60,220,120,22);g.fill();g.stroke();txt('GUM',0,4,64,{fill:'#fff',sw:12});g.restore()}
    pill('SWALLOW',W*0.3,360,56,'#5BE37A','#111',t,17.45,CU.c7);pill('CHEW GUM',W*0.7,470,56,'#FF8FB1','#111',t,18.1,CU.c7);comic('CHOMP',W*0.25,1150,70,t,18.3,{life:0.8,rot:-0.1,fill:'#fff'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c7,TT-0.25));CB.shot(mix([2.6,2.9,9.6],C0.p,k),C0.l);flash(t,CU.c7,0.15)}
  vignette();captions(t)};
