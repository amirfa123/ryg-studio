// ===== Why do you hiccup? (body/everyday) =====
const TT=20.3;
const CU={c1:2.4,c2:5.9,c3:8.1,c4:10.3,c5:12.4,c6:15.6,c7:18.6};
guy.outfit({});
// ---- original retro diner set ----
const D={S:new THREE.Scene()};lights(D.S);D.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);
D.shot=(p,l)=>{D.cam.position.set(...p);D.cam.lookAt(...l);setBG('linear-gradient(#2B1B3D,#4A2A5E)');r.setClearColor(0,0);r.render(D.S,D.cam)};
{const {ctx,tx}=canvasTex(256,256);for(let i=0;i<4;i++)for(let j=0;j<4;j++){ctx.fillStyle=(i+j)%2?'#F4F0E8':'#22222C';ctx.fillRect(i*64,j*64,64,64)}tx.wrapS=tx.wrapT=THREE.RepeatWrapping;tx.repeat.set(10,10);part(D.S,new THREE.PlaneGeometry(20,20),tmat(0xffffff,tx),[0,0,0],[1,1,1],[-PI/2,0,0],0)}
part(D.S,new THREE.PlaneGeometry(20,8),toon(0x8FE3C8),[0,4,-3.2],[1,1,1],[0,0,0],0);part(D.S,new THREE.PlaneGeometry(20,1.3),toon(0xE23B3B),[0,0.65,-3.19],[1,1,1],[0,0,0],0);
part(D.S,new THREE.BoxGeometry(20,0.1,0.06),basic(0xFF3DA6),[0,3.4,-3.15],[1,1,1],[0,0,0],0);
for(const x of [-7,7])part(D.S,new THREE.PlaneGeometry(10,8),toon(0x7AD3B8),[x>0?6:-6,4,0],[1,1,1],[0,x>0?-PI/2:PI/2,0],0);
// counter + stools along the back wall
part(D.S,new THREE.BoxGeometry(9,1.0,0.9),toon(0xE23B3B),[0,0.5,-2.5],[1,1,1],[0,0,0],0.015);part(D.S,new THREE.BoxGeometry(9.2,0.1,1.05),toon(0xF4F0E8),[0,1.05,-2.5],[1,1,1],[0,0,0],0.012);part(D.S,new THREE.BoxGeometry(9,0.08,0.92),basic(0xC9CDD6),[0,0.12,-2.5],[1,1,1],[0,0,0],0);
for(const x of [-3,-1.8,1.8,3]){part(D.S,cap(0.05,0.55),toon(0xC9CDD6),[x,0.32,-1.7]);part(D.S,new THREE.CylinderGeometry(0.28,0.28,0.12,20),toon(0xE23B3B),[x,0.68,-1.7],[1,1,1],[0,0,0],0.01)}
// menu board
{const {ctx,tx}=canvasTex(512,256);ctx.fillStyle='#22222C';ctx.fillRect(0,0,512,256);ctx.strokeStyle='#FFD23F';ctx.lineWidth=10;ctx.strokeRect(8,8,496,240);ctx.fillStyle='#fff';ctx.font='900 46px Inter';ctx.textAlign='left';[['BURGER','$5'],['FRIES','$3'],['SODA','$2']].forEach(([a,b],i)=>{ctx.fillText(a,40,80+i*66);ctx.fillStyle='#FFD23F';ctx.fillText(b,400,80+i*66);ctx.fillStyle='#fff'});part(D.S,new THREE.PlaneGeometry(2.4,1.2),new THREE.MeshBasicMaterial({map:tx}),[2.6,2.3,-3.15],[1,1,1],[0,0,0],0)}
// pendant lamps
for(const x of [-2.5,0,2.5]){part(D.S,cap(0.015,1.2),toon(0x22222C),[x,4.4,-1.2]);part(D.S,new THREE.SphereGeometry(1,20,10,0,PI*2,0,PI/2),toon(0xFFD23F),[x,3.75,-1.2],[0.35,0.3,0.35],[0,0,0],0.01);part(D.S,SPH,basic(0xFFF6C0),[x,3.72,-1.2],[0.15,0.08,0.15],[0,0,0],0)}
// the guy's stool + side table with food
part(D.S,cap(0.06,0.5),toon(0xC9CDD6),[0,0.3,0.3]);part(D.S,new THREE.CylinderGeometry(0.4,0.4,0.12,24),toon(0xE23B3B),[0,0.6,0.3],[1,1,1],[0,0,0],0.012);part(D.S,new THREE.CylinderGeometry(0.35,0.4,0.05,24),toon(0xC9CDD6),[0,0.03,0.3],[1,1,1],[0,0,0],0);
const TB=new THREE.Group();TB.position.set(-1.25,0,0.55);D.S.add(TB);part(TB,new THREE.CylinderGeometry(0.55,0.55,0.07,28),toon(0xF4F0E8),[0,0.95,0],[1,1,1],[0,0,0],0.012);part(TB,cap(0.05,0.9),toon(0xC9CDD6),[0,0.48,0]);part(TB,new THREE.CylinderGeometry(0.3,0.35,0.04,24),toon(0xC9CDD6),[0,0.02,0],[1,1,1],[0,0,0],0);
const BUN=toon(0xE8A33D);function burger(p,x,y,z,s=1){const b=new THREE.Group();b.position.set(x,y,z);b.scale.setScalar(s);p.add(b);part(b,new THREE.SphereGeometry(1,20,10,0,PI*2,0,PI/2),BUN,[0,0.1,0],[0.2,0.14,0.2],[0,0,0],0.008);part(b,new THREE.CylinderGeometry(0.21,0.21,0.05,20),toon(0x6B3A22),[0,0.07,0],[1,1,1],[0,0,0],0.006);part(b,new THREE.CylinderGeometry(0.23,0.23,0.02,20),toon(0x5BC26A),[0,0.1,0],[1,1,1],[0,0,0],0);part(b,new THREE.CylinderGeometry(0.2,0.19,0.05,20),BUN,[0,0.025,0],[1,1,1],[0,0,0],0.006);return b}
const TBUR=burger(TB,0.15,0.99,0.1);
const FR=new THREE.Group();FR.position.set(-0.2,0.99,-0.1);TB.add(FR);part(FR,new THREE.BoxGeometry(0.2,0.2,0.13),toon(0xE23B3B),[0,0.1,0],[1,1,1],[0,0,0],0.006);for(let k=0;k<5;k++)part(FR,new THREE.BoxGeometry(0.025,0.16,0.025),toon(0xFFD23F),[-0.07+k*0.035,0.25,0],[1,1,1],[0,0,(k-2)*0.1],0);
const TCUP=new THREE.Group();TCUP.position.set(0.1,0.99,-0.25);TB.add(TCUP);part(TCUP,new THREE.CylinderGeometry(0.09,0.07,0.3,20),toon(0x3FA9FF),[0,0.15,0],[1,1,1],[0,0,0],0.006);part(TCUP,cap(0.012,0.22),toon(0xFF3DA6),[0.03,0.36,0],[1,1,1],[0,0,0.2],0);
// hand props
mkProp('burger',p=>{burger(p,0,0,0,0.9)});
// hiccup jolt: periodic spike (period 1.25 s)
function hj(t,P=1.25){const ph=((t%P)+P)%P;return ph<0.25?Math.sin(ph/0.25*PI):0}
function stoolGuy(t,o={}){putGuy(D.S,0,0.66,0.3,0);guy.pose({...SIT,sitY:-0.27,blink:BLINK(t),...o})}
const C0={p:[2.6,2.6,6.6],l:[-0.3,1.8,0.3]};
function openScene(t){const j=hj(t);TCUP.visible=true;TBUR.visible=true;stoolGuy(t,{reachL:guy.bellyPoint(0.5,0.1,0.75),reachR:guy.bellyPoint(-0.5,0.1,0.75),jump:0.07*j,headPitch:-0.12*j,mouth:j>0.2?'o':'smile',mouthSize:0.6,wide:j>0.3,look:0.1})}
// ---- 2D diagrams ----
function torso(x,y,s,t,tw){g.save();g.translate(x,y);g.scale(s,s);
  g.fillStyle='#FFD43B';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.ellipse(0,60,330,420,0,0,7);g.fill();g.stroke();
  // windpipe
  g.fillStyle='#F2A0B4';rr(-28,-430,56,240,20);g.fill();g.stroke();
  // lungs
  for(const sx of [-1,1]){g.fillStyle='#FF8FA8';g.beginPath();g.ellipse(sx*130,-60,115,190,sx*0.12,0,7);g.fill();g.stroke();g.strokeStyle='rgba(180,40,80,0.5)';g.lineWidth=6;for(let k=0;k<3;k++){g.beginPath();g.moveTo(sx*40,-170+k*40);g.quadraticCurveTo(sx*110,-120+k*60,sx*170,-90+k*70);g.stroke()}g.strokeStyle='#111';g.lineWidth=10}
  // diaphragm dome
  const d=tw*70;g.lineCap='round';g.strokeStyle='#111';g.lineWidth=34;g.beginPath();g.moveTo(-300,210);g.quadraticCurveTo(0,40+d*1.8,300,210);g.stroke();g.strokeStyle='#FF6A2B';g.lineWidth=20;g.stroke();
  // belly organs hint
  g.fillStyle='rgba(255,140,60,0.35)';g.beginPath();g.ellipse(0,330,200,110,0,0,7);g.fill();
  g.restore()}
function folds(x,y,s,close){g.save();g.translate(x,y);g.scale(s,s);
  g.fillStyle='#7A1E3A';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.ellipse(0,0,300,380,0,0,7);g.fill();g.stroke();
  const gap=lerp(150,0,close);
  for(const sx of [-1,1]){g.fillStyle='#FFB6C8';g.beginPath();g.moveTo(sx*8,-300);g.quadraticCurveTo(sx*(gap*0.2+20),0,sx*(gap+12),300);g.lineTo(sx*280,250);g.quadraticCurveTo(sx*300,0,sx*200,-280);g.closePath();g.fill();g.stroke()}
  g.restore()}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();TCUP.visible=true;TBUR.visible=true;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));D.shot(mix(C0.p,[2.4,2.4,5.9],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHY DO YOU',W/2,240,96,{sw:20});txt('HICCUP?',W/2,380,170,{fill:'#FFD23F',sw:32});g.restore();
    comic('HIC!',W*0.76,830,96,t,0.0,{life:0.6,rot:0.12,fill:'#fff'});comic('HIC!',W*0.24,900,96,t,1.25,{life:0.6,rot:-0.12,fill:'#fff'})}
  else if(t<CU.c2){clear3d();setBG('teal');flash(t,CU.c1,0.15);const s=backOut(seg(t,CU.c1,CU.c1+0.45));
    const tw=t>4.84?Math.max(hj(t-4.84,0.6)*(t<5.9?1:0),0):0;torso(W/2,1020,1.18*s,t,tw);
    if(t>2.75){g.save();g.strokeStyle='#fff';g.lineWidth=7;g.beginPath();g.moveTo(W*0.8,1560);g.lineTo(W*0.72,1230);g.stroke();g.restore();pill('DIAPHRAGM',W*0.8,1600,48,'#FF6A2B','#111',t,2.75,CU.c2)}
    if(t>3.4)pill('LUNGS',W*0.2,560,46,'#FF8FA8','#111',t,3.4,CU.c2);
    comic('TWITCH!',W*0.3,1330,96,t,4.84,{life:1.0,rot:-0.1,fill:'#FF6A2B'});
    panel(W/2,330,820,150);txt('THE BIG MUSCLE',W/2,300,64,{stroke:0,fill:'#FF6A2B'});txt('UNDER YOUR LUNGS',W/2,362,44,{stroke:0})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);const g1=ease(seg(t,6.1,6.5))*(1-ease(seg(t,7.5,8.0)));
    stoolGuy(t,{armL:[0.9,0.2],armR:[0.9,-0.2],bendL:0.6,bendR:0.6,headPitch:-0.3*g1,mouth:'o',mouthSize:0.5+0.9*g1,wide:true,jump:0.03*g1});
    D.shot([0.5,2.3,4.6],[0,1.9,0.3]);
    const m=proj(new THREE.Vector3(0,2.08,0.72),D.cam);
    if(g1>0.05){g.save();g.lineCap='round';for(let i=0;i<6;i++){const ph=((t*1.6+i/6)%1),a=i/6*PI*2;const r0=lerp(520,60,ph),x=m[0]+Math.cos(a)*r0,y=m[1]+Math.sin(a)*r0*0.8;g.globalAlpha=g1*Math.min(1,ph*3);g.strokeStyle='#fff';g.lineWidth=14;g.beginPath();g.moveTo(x,y);g.lineTo(x+(m[0]-x)*0.25,y+(m[1]-y)*0.25);g.stroke()}g.restore()}
    comic('GULP!',W*0.76,540,100,t,6.2,{life:1.0,rot:0.1,fill:'#3FF0FF'});pill('YOU GULP AIR',W/2,330,60,'#3FF0FF','#111',t,6.0,CU.c3)}
  else if(t<CU.c4){clear3d();setBG('pink');flash(t,CU.c2+2.2,0.15);const cl=ease(seg(t,9.12,9.3));folds(W/2,1000,1.25,cl);
    // air arrow coming up, blocked
    const ay=lerp(1650,1250,seg(t,8.2,9.1));if(t<9.3)arrow(W/2,1750,W/2,ay,'#BFEAFF',30);
    if(t>9.12){const k=backOut(seg(t,9.12,9.4));g.save();g.strokeStyle='#FFE14D';g.lineWidth=14;g.lineCap='round';for(let i=0;i<8;i++){const a=i/8*PI*2;g.beginPath();g.moveTo(W/2+Math.cos(a)*380*k,1000+Math.sin(a)*460*k);g.lineTo(W/2+Math.cos(a)*470*k,1000+Math.sin(a)*560*k);g.stroke()}g.restore()}
    comic('SLAM!',W/2,1000,150,t,9.15,{life:0.9,fill:'#FFE14D'});
    if(t>8.4)pill('VOCAL CORDS',W/2,560,52,'#FFB6C8','#111',t,8.4,CU.c4);
    panel(W/2,330,820,150,'rgba(10,12,25,0.85)','#FF3D7F');txt('A SPLIT SECOND LATER',W/2,300,58,{stroke:0,fill:'#FFB6C8'});txt('THEY SNAP SHUT',W/2,362,44,{stroke:0})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);const j=hj(t-11.52,10)+hj(t-10.4,10)*0.6;
    stoolGuy(t,{armL:[0.5+1.2*j,0.2],armR:[0.5+1.2*j,-0.2],jump:0.12*j,headPitch:-0.15*j,mouth:j>0.15?'o':'smile',mouthSize:0.9,wide:j>0.2,look:0});
    D.shot([-1.2,0.9,5.2],[-0.2,1.5,0.3]);
    const k=backOut(seg(t,11.52,11.8));if(t>11.5){g.save();g.translate(W/2,640);g.rotate(-0.06);g.scale(k,k);txt('HIC!',0,0,260,{fill:'#FFD23F',sw:40});g.restore()}
    comic('hic',W*0.75,820,80,t,10.4,{life:0.6,rot:0.1,fill:'#fff'});pill('THAT SNAP = THE "HIC"',W/2,330,54,'#FFD23F','#111',t,10.5,CU.c5)}
  else if(t<CU.c6){flash(t,CU.c5,0.15);
    if(t<13.55){TBUR.visible=false;props.burger.visible=true;const m=Math.abs(Math.sin((t-12.4)*9));props.burger.position.set(0,1.62-0.1*m,0.5);props.burger.rotation.set(-0.3,0,0);
      stoolGuy(t,{reachR:[-0.14,1.6-0.1*m,0.5],reachL:[0.14,1.6-0.1*m,0.5],mouth:m>0.5?'o':'grin',mouthSize:0.8,jump:0.01*m})}
    else{props.cup.visible=true;TCUP.visible=false;props.cup.position.set(-0.1,1.42,0.5);props.cup.rotation.set(0.1,0,0.05);
      stoolGuy(t,{reachR:[-0.14,1.38,0.5],armL:[0.35,0.1],mouth:'o',mouthSize:0.4,look:-0.2,lookY:-0.3,headPitch:0.08,jump:0.05*hj(t-14.6,0.8)})}
    D.shot([-0.9,2.3,4.5],[-0.15,1.8,0.3]);
    if(t>13.55){const c=proj(new THREE.Vector3(-0.1,2.12,0.8),D.cam);for(let i=0;i<10;i++){const ph=((t*0.9+hash(i))%1);g.save();g.globalAlpha=1-ph;g.fillStyle='rgba(220,245,255,0.95)';g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.arc(c[0]+Math.sin(ph*8+i)*40+(hash(i*3)-0.5)*60,c[1]-ph*360,10+hash(i*7)*14,0,7);g.fill();g.stroke();g.restore()}
      comic('FIZZ',W*0.72,620,90,t,13.8,{life:1.0,rot:0.1,fill:'#3FF0FF'})}
    else comic('CHOMP',W*0.75,700,90,t,12.6,{life:0.8,rot:0.1,fill:'#fff'});
    pill('EATING TOO FAST',W/2,300,56,'#FF8A3D','#111',t,12.45,CU.c6);pill('FIZZY DRINKS',W/2,420,56,'#3FF0FF','#111',t,13.6,CU.c6)}
  else if(t<CU.c7){const ST=scene('stage');setBG('gold');flash(t,CU.c6,0.15);putGuy(ST.S,0,0,0,0.25);const j=hj(t,0.9);
    guy.pose({armL:[0.35+0.6*j,0.1],armR:[0.35+0.6*j,-0.1],jump:0.08*j,mouth:j>0.2?'o':'smile',mouthSize:0.8,wide:j>0.2,blink:BLINK(t),headPitch:-0.1*j});
    ST.shot([0.6,1.6,7.2],[0,1.55,0]);
    const n=Math.round(68*ease(seg(t,16.9,17.65)));const k=backOut(seg(t,15.7,16.05));g.save();g.translate(W/2,400);g.scale(k,k);panel(0,0,760,250,'#FFF6E0','#E23B3B',36);txt(n+' YEARS',0,-20,130,{stroke:0,fill:'#111'});txt('OF HICCUPS',0,80,52,{stroke:0,fill:'#E23B3B'});g.restore();
    pill('WORLD RECORD: 1922 – 1990',W/2,620,42,'#fff','#111',t,16.4,CU.c7);
    for(let i=0;i<3;i++)comic('HIC!',[W*0.2,W*0.8,W*0.25][i],[850,980,1150][i],70,t,16.2+i*0.9,{life:0.5,rot:(i%2?0.1:-0.1),fill:'#fff'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c7,TT-0.25));D.shot(mix([3.6,2.9,7.6],C0.p,k),C0.l);flash(t,CU.c7,0.15)}
  vignette();captions(t)};
