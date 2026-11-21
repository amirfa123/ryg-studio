// ===== Why do you get so sleepy after Thanksgiving dinner? (body/everyday, Thanksgiving week) =====
const TT=19.7;
const CU={c1:3.05,c2:4.95,c3:7.95,c4:12.45,c5:15.08,c6:17.95};
guy.outfit({chefhat:1});
// ---- dining set (warm autumn palette) ----
const D={S:new THREE.Scene()};lights(D.S);D.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);
D.shot=(p,l,bgc)=>{D.cam.position.set(...p);D.cam.lookAt(...l);setBG(bgc||'linear-gradient(#5A2E1C,#8A4A2A)');r.setClearColor(0,0);r.render(D.S,D.cam)};
part(D.S,new THREE.PlaneGeometry(30,30),toon(0x7A4A2A),[0,0,0],[1,1,1],[-PI/2,0,0],0);
for(let i=-8;i<8;i++)part(D.S,new THREE.PlaneGeometry(0.06,30),toon(0x5E3820),[i*0.9,0.004,0],[1,1,1],[-PI/2,0,0],0);
part(D.S,new THREE.PlaneGeometry(30,10),toon(0xC9662E),[0,5,-3.0],[1,1,1],[0,0,0],0);
part(D.S,new THREE.PlaneGeometry(30,1.2),toon(0x8C3F1E),[0,0.6,-2.98],[1,1,1],[0,0,0],0);
// window with autumn trees
const wt=canvasTex(320,400);{const c=wt.ctx;const gr=c.createLinearGradient(0,0,0,400);gr.addColorStop(0,'#FF9E5E');gr.addColorStop(1,'#FFD9A0');c.fillStyle=gr;c.fillRect(0,0,320,400);
  for(let i=0;i<6;i++){const x=20+i*58,y=250+(i%2)*30;c.fillStyle='#5A3420';c.fillRect(x-6,y,12,150);c.fillStyle=['#E8541E','#F2A01E','#C8361A'][i%3];c.beginPath();c.arc(x,y,52,0,7);c.fill()}}
part(D.S,new THREE.PlaneGeometry(1.8,2.2),new THREE.MeshBasicMaterial({map:wt.tx}),[-2.4,2.9,-2.96],[1,1,1],[0,0,0],0);
for(const [x,y,w,h] of [[-2.4,1.78,2.0,0.12],[-2.4,4.02,2.0,0.12],[-3.32,2.9,0.12,2.3],[-1.48,2.9,0.12,2.3],[-2.4,2.9,0.08,2.2],[-2.4,2.9,1.8,0.08]])part(D.S,new THREE.BoxGeometry(w,h,0.12),toon(0xF4E6CC),[x,y,-2.93],[1,1,1],[0,0,0],0.01);
// garland of leaves on wall
for(let i=0;i<14;i++)part(D.S,SPH,toon([0xE8541E,0xF2A01E,0xC8361A][i%3]),[0.2+i*0.42,3.9-0.25*Math.sin(i/13*PI),-2.95],[0.16,0.1,0.04],[0,0,i],0);
// chair
const CHR=new THREE.Group();CHR.position.set(0,0,-0.95);D.S.add(CHR);{const m=toon(0x6B3A1E);part(CHR,new THREE.BoxGeometry(1.25,0.14,1.1),m,[0,0.7,0],[1,1,1],[0,0,0],0.012);part(CHR,new THREE.BoxGeometry(1.25,1.7,0.14),m,[0,1.5,-0.55],[1,1,1],[0,0,0],0.012);for(const [x,z] of [[-0.55,-0.48],[0.55,-0.48],[-0.55,0.48],[0.55,0.48]])part(CHR,new THREE.BoxGeometry(0.1,0.7,0.1),m,[x,0.35,z],[1,1,1],[0,0,0],0.006)}
// table
const TB=new THREE.Group();TB.position.set(0,0,0.65);D.S.add(TB);
part(TB,new THREE.BoxGeometry(3.6,0.12,1.5),toon(0x8C5E36),[0,1.12,0],[1,1,1],[0,0,0],0.012);
part(TB,new THREE.BoxGeometry(3.7,0.03,1.6),toon(0xF4EBD9),[0,1.19,0],[1,1,1],[0,0,0],0.004);
part(TB,new THREE.BoxGeometry(3.72,0.4,0.02),toon(0xF4EBD9),[0,1.0,0.8],[1,1,1],[0,0,0],0);
part(TB,new THREE.BoxGeometry(0.5,0.02,1.62),toon(0xC8361A),[0,1.215,0],[1,1,1],[0,0,0],0);
for(const [x,z] of [[-1.6,-0.6],[1.6,-0.6],[-1.6,0.6],[1.6,0.6]])part(TB,new THREE.BoxGeometry(0.12,1.1,0.12),toon(0x6B3A1E),[x,0.55,z],[1,1,1],[0,0,0],0.006);
const TOP=1.22;
function plate(par,x,z,s=1){part(par,new THREE.CylinderGeometry(0.32*s,0.26*s,0.04,28),toon(0xFFFFFF),[x,TOP+0.02,z],[1,1,1],[0,0,0],0.006)}
// original roast turkey on platter
const TK=new THREE.Group();TK.position.set(0,TOP,0.15);TK.scale.setScalar(0.72);TB.add(TK);
part(TK,new THREE.CylinderGeometry(0.62,0.55,0.05,32),toon(0xE9E2D2),[0,0.03,0],[1,1.0,0.75],[0,0,0],0.006);
part(TK,SPH,toon(0xB8682A),[0,0.27,0],[0.42,0.26,0.32],[0,0,0],0.02);part(TK,SPH,toon(0xD08A3E),[0,0.36,0.02],[0.3,0.12,0.22],[0,0,0],0);
for(const s of [-1,1]){part(TK,SPH,toon(0xA85C24),[s*0.3,0.22,0.22],[0.14,0.12,0.18],[0.4,0,0],0.01);part(TK,cap(0.035,0.12),toon(0xFFF6E6),[s*0.34,0.27,0.38],[1,1,1],[1.1,0,0],0);part(TK,SPH,toon(0xFFF6E6),[s*0.35,0.3,0.45],[0.05,0.05,0.05],[0,0,0],0)}
for(let i=0;i<5;i++)part(TK,SPH,toon(0x4CAF50),[-0.45+i*0.22,0.07,0.32+0.05*Math.sin(i)],[0.07,0.04,0.07],[0,0,0],0);
// side dishes (appear over time in the calorie scene)
const DISH=[];function dish(build,x,z){const d=new THREE.Group();d.position.set(x,TOP,z);TB.add(d);build(d);DISH.push(d);return d}
dish(d=>{part(d,new THREE.CylinderGeometry(0.28,0.22,0.16,24),toon(0xFFFFFF),[0,0.08,0],[1,1,1],[0,0,0],0.006);part(d,SPH,toon(0xFFF2CC),[0,0.17,0],[0.22,0.1,0.22],[0,0,0],0);part(d,SPH,toon(0xF2C14E),[0.03,0.25,0],[0.06,0.03,0.06],[0,0,0],0)},-1.15,0.15); // mashed potatoes
dish(d=>{part(d,new THREE.CylinderGeometry(0.34,0.3,0.1,28),toon(0xD9A066),[0,0.05,0],[1,1,1],[0,0,0],0.006);part(d,new THREE.CylinderGeometry(0.31,0.31,0.03,28),toon(0xE07A2E),[0,0.1,0],[1,1,1],[0,0,0],0);for(let i=0;i<6;i++)part(d,new THREE.BoxGeometry(0.02,0.012,0.3),toon(0xFFF6E6),[0,0.115,0],[1,1,1],[0,i*PI/6,0],0)},1.15,0.1); // pie
dish(d=>{part(d,new THREE.CylinderGeometry(0.16,0.14,0.08,20),toon(0xFFFFFF),[0,0.04,0],[1,1,1],[0,0,0],0.004);part(d,SPH,toon(0xB3173A),[0,0.09,0],[0.13,0.05,0.13],[0,0,0],0)},-0.75,0.55); // cranberry
dish(d=>{for(let i=0;i<4;i++)part(d,SPH,toon(0xE8B04A),[(i%2)*0.18-0.09,0.07+Math.floor(i/2)*0.1,0],[0.11,0.07,0.1],[0,0,0],0.006)},0.8,0.55); // rolls
dish(d=>{part(d,new THREE.BoxGeometry(0.55,0.1,0.36),toon(0xFFFFFF),[0,0.05,0],[1,1,1],[0,0,0],0.006);part(d,new THREE.BoxGeometry(0.5,0.06,0.3),toon(0xC9874A),[0,0.11,0],[1,1,1],[0,0,0],0.01);for(let i=0;i<6;i++)part(d,SPH,toon(0x5E8F3A),[-0.18+i*0.07,0.15,0.04*Math.sin(i*2)],[0.03,0.02,0.03],[0,0,0],0)},-1.2,-0.4); // stuffing
dish(d=>{part(d,new THREE.CylinderGeometry(0.34,0.3,0.1,28),toon(0xD9A066),[0,0.05,0],[1,1,1],[0,0,0],0.006);part(d,new THREE.CylinderGeometry(0.31,0.31,0.03,28),toon(0x6B3A1E),[0,0.1,0],[1,1,1],[0,0,0],0)},1.2,-0.4); // pecan pie
dish(d=>{part(d,new THREE.CylinderGeometry(0.2,0.16,0.12,20),toon(0xFFFFFF),[0,0.06,0],[1,1,1],[0,0,0],0.004);part(d,SPH,toon(0xF2C14E),[0,0.13,0],[0.16,0.05,0.16],[0,0,0],0)},0,0.62); // mac & cheese
plate(TB,0,-0.48,1.1);
// fork prop for the guy
mkProp('fork',p=>{part(p,cap(0.018,0.32),toon(0xD8DCE4),[0,0.16,0]);for(const x of [-0.03,0,0.03])part(p,cap(0.008,0.08),toon(0xD8DCE4),[x,0.36,0])});
const SEAT=[0,0.78,-0.88];
function sitGuy(t,o={}){putGuy(D.S,SEAT[0],SEAT[1],SEAT[2],0);guy.pose({...SIT,armL:[0.35,0.5],armR:[0.35,0.5],bendL:0.7,bendR:0.7,blink:BLINK(t),...o})}
function showDishes(n){DISH.forEach((d,i)=>{const k=clamp(n-i);d.visible=k>0;d.scale.setScalar(Math.max(0.001,backOut(k)))})}
// ---- 2D drumstick ----
function drum(x,y,s,col,lab){g.save();g.translate(x,y);g.scale(s,s);g.rotate(-0.5);g.lineJoin='round';g.strokeStyle='#111';g.lineWidth=10;
  g.fillStyle='#FFF6E6';g.beginPath();g.arc(-10,150,26,0,7);g.arc(14,160,24,0,7);g.fill();g.stroke();g.fillRect(-14,40,28,120);g.strokeRect(-14,40,28,120);
  g.fillStyle=col;g.beginPath();g.ellipse(0,-30,90,115,0,0,7);g.fill();g.stroke();g.fillStyle='rgba(255,255,255,0.35)';g.beginPath();g.ellipse(-30,-60,22,40,-0.3,0,7);g.fill();g.restore();
  pillS(lab,x,y+250,50,'#fff')}
function pillS(s,x,y,size,col){g.save();g.font=`900 ${size}px Inter`;const w=g.measureText(s).width+size*1.1,h=size*1.6;g.fillStyle=col;rr(x-w/2,y-h/2,w,h,h/2);g.fill();g.strokeStyle='#111';g.lineWidth=6;g.stroke();g.restore();txt(s,x,y+2,size,{stroke:0,fill:'#111'})}
function calPanel(x,y,v,f){panel(x,y,760,230,'rgba(25,10,5,0.88)','#FF8A3D',36);txt('CALORIES',x,y-62,40,{stroke:0,fill:'#FF8A3D'});txt(Math.round(v).toLocaleString('en-US'),x,y+8,110,{stroke:0,fill:f>=1?'#FFD23F':'#fff'});bar(x-330,y+72,660,34,f,'#FF5A3D')}
// mode switch
function modeSwitch(x,y,k,t){panel(x,y,840,300,'rgba(10,12,25,0.88)','#5BE37A',40);
  txt('GO MODE',x-200,y-80,46,{stroke:0,fill:k<0.5?'#FF6A5E':'rgba(255,255,255,0.35)'});txt('REST & DIGEST',x+180,y-80,46,{stroke:0,fill:k>=0.5?'#5BE37A':'rgba(255,255,255,0.35)'});
  g.fillStyle='#222838';rr(x-260,y-10,520,120,60);g.fill();g.strokeStyle='#111';g.lineWidth=8;g.stroke();g.fillStyle=k>=0.5?'#5BE37A':'#FF6A5E';const kx=lerp(x-200,x+200,k);g.beginPath();g.arc(kx,y+50,52,0,7);g.fill();g.stroke()}
// body outline with glowing gut and blood arrows
function bodyMap(cx,cy,s,glow,t){g.save();g.translate(cx,cy);g.scale(s,s);g.lineJoin='round';g.strokeStyle='#111';g.lineWidth=12;
  g.fillStyle='#FFD84D';g.beginPath();g.arc(0,-330,105,0,7);g.fill();g.stroke();
  g.fillStyle='#26B3A6';g.beginPath();g.moveTo(-200,-190);g.quadraticCurveTo(0,-240,200,-190);g.quadraticCurveTo(290,120,190,330);g.lineTo(-190,330);g.quadraticCurveTo(-290,120,-200,-190);g.fill();g.stroke();
  // gut
  const p=1+0.06*Math.sin(t*8)*glow;g.save();g.translate(10,90);g.scale(p,p);g.shadowColor='#FFB13D';g.shadowBlur=60*glow;g.fillStyle=glow>0.1?'#FFB13D':'#F28C8C';g.beginPath();g.ellipse(0,0,120,85,-0.3,0,7);g.fill();g.shadowBlur=0;g.stroke();g.restore();
  // brain
  g.fillStyle=`rgba(255,160,190,${1-0.6*glow})`;g.beginPath();g.ellipse(0,-345,62,44,0,0,7);g.fill();g.lineWidth=7;g.stroke();
  g.restore()}
function zzz(x,y,t,t0){for(let i=0;i<3;i++){const u=((t-t0)*0.6+i/3)%1;if(t<t0)continue;g.save();g.globalAlpha=Math.sin(u*PI);txt('Z',x+u*120+i*10,y-u*260,60+i*18,{fill:'#BFE6FF',sw:12});g.restore()}}
const C0={p:[1.8,3.0,7.4],l:[0,1.7,0]};
function openScene(t){showDishes(0);TK.visible=true;sitGuy(t,{mouth:t%3.3>1.2&&t%3.3<2.2?'o':'smile',mouthSize:1.0,brow:0.01,armL:[0.5,0.35],armR:[0.5,0.35],headRoll:0.05*Math.sin(t*2*PI/2.4)})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.2,CU.c1));D.shot(mix(C0.p,[1.6,2.9,6.8],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHY DO YOU GET',W/2,210,86,{sw:17});txt('SO SLEEPY',W/2,335,140,{fill:'#FFB13D',sw:26});txt('AFTER THANKSGIVING?',W/2,460,76,{fill:'#fff',sw:16});g.restore();
    comic('YAWN',W*0.78,1130,80,t,1.3,{life:1.1,rot:0.1,fill:'#BFE6FF'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);showDishes(0);const k=seg(t,CU.c1,CU.c2);
    sitGuy(t,{mouth:'teeth',teethGap:0.2,brow:-0.03,look:0.0,lookY:-0.5,headPitch:0.25,reachR:[-0.3,0.85,0.85]});
    D.shot([lerp(2.3,1.9,k),2.8,lerp(6.4,5.8,k)],[0,1.55,0.1]);
    pill('THE SUSPECT',W/2,1650,64,'#FF6A5E','#111',t,3.3,CU.c2);comic('HMM...',W*0.75,1150,70,t,3.9,{life:0.9,rot:0.08,fill:'#fff'})}
  else if(t<CU.c3){clear3d();setBG('linear-gradient(#FFE3B8,#FFB27A)');flash(t,CU.c2,0.15);
    const a=pop(t,5.15),b=pop(t,6.95);g.save();g.translate(W*0.29,860);g.scale(a,a);drum(0,0,1.25,'#B8682A','TURKEY');g.restore();g.save();g.translate(W*0.71,860);g.scale(b,b);drum(0,0,1.25,'#E3A05A','CHICKEN');g.restore();
    if(t>6.2){const f=ease(seg(t,6.2,7.6));bar(W*0.29-150,1250,300,46,f*0.9,'#8E6BFF');}if(t>7.0){const f=ease(seg(t,7.0,7.8));bar(W*0.71-150,1250,300,46,f*0.9,'#8E6BFF')}
    if(t>7.5){const k=pop(t,7.5);g.save();g.translate(W/2,880);g.scale(k,k);txt('=',0,0,200,{fill:'#FFD23F',sw:30});g.restore()}
    panel(W/2,330,820,150);txt('TRYPTOPHAN',W/2,300,62,{stroke:0,fill:'#B9A4FF'});txt('ABOUT THE SAME!',W/2,365,44,{stroke:0})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);const k=seg(t,CU.c3,CU.c4);showDishes(seg(t,8.5,11.6)*7);
    const ch=Math.sin(t*2*PI*2.2)>0;props.fork.visible=true;props.fork.position.set(-0.3,0.85,0.68);props.fork.rotation.set(0.6+0.25*Math.sin(t*2*PI*2.2),0,0.3);
    sitGuy(t,{mouth:ch?'o':'grin',mouthSize:0.6,wide:t>10.4,reachL:[0.3,0.8+0.25*Math.max(0,Math.sin(t*2*PI*2.2)),0.7],reachR:[-0.32,0.75,0.75],look:0.15*Math.sin(t*1.7)});
    D.shot([lerp(0.6,0.2,k),lerp(3.3,3.6,k),lerp(6.2,6.8,k)],[0,1.45,0.2]);
    calPanel(W/2,1700,lerp(0,3000,ease(seg(t,9.4,11.4))),seg(t,9.4,11.4));
    comic('THE REAL CULPRIT',W/2,330,72,t,8.35,{life:1.0,fill:'#FF6A5E'});comic('3,000!',W*0.74,1150,96,t,11.4,{life:1.0,rot:0.1,fill:'#FFD23F'})}
  else if(t<CU.c5){clear3d();setBG('linear-gradient(#1E3A5F,#2E6E8E)');flash(t,CU.c4,0.15);const k=ease(seg(t,13.4,13.9));
    modeSwitch(W/2,400,k,t);bodyMap(W/2,1130,0.95,k,t);
    if(t>13.9){arrow(W*0.18,1300,W*0.4,1230,'#FF5A5A',20);arrow(W*0.82,1300,W*0.6,1230,'#FF5A5A',20)}
    if(t>14.1)pillS('BLOOD TO YOUR GUT',W/2,1540,48,'#FFB13D');comic('CLICK',W*0.8,620,64,t,13.4,{life:0.8,rot:0.1,fill:'#5BE37A'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);const k=seg(t,CU.c5,CU.c6);showDishes(7);TK.visible=true;const droop=ease(seg(t,15.4,16.6));const nod=t>16.6?0.06*Math.sin((t-16.6)*3):0;
    sitGuy(t,{mouth:'o',mouthSize:0.45,blink:t>15.6||BLINK(t),headPitch:0.38*droop+nod,headRoll:0.15*droop,armL:[0.22,0.1],armR:[0.22,0.1],bendL:0.3,bendR:0.3,sitY:-0.27-0.04*droop});
    D.shot([lerp(2.9,2.5,k),2.8,lerp(6.6,6.0,k)],[0,1.65,0]);zzz(W*0.74,640,t,15.8);
    g.save();const f=lerp(0.9,0.08,ease(seg(t,15.2,17.4)));bar(W/2-260,300,520,70,f,f>0.3?'#5BE37A':'#FF5A3D','ENERGY '+Math.round(f*100)+'%');g.restore();
    pill('GUT: WORKING OVERTIME',W/2,430,48,'#FFB13D','#111',t,16.3,CU.c6);comic('SNORE',W*0.28,1150,70,t,16.9,{life:0.9,rot:-0.1,fill:'#BFE6FF'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.25));D.shot(mix([2.2,3.2,7.2],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
