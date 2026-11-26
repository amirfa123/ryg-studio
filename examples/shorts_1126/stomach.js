// ===== How much can your stomach stretch on Thanksgiving? (body/everyday, Thanksgiving) =====
const TT=19.3;
const CU={c1:2.85,c2:5.7,c3:8.6,c4:11.95,c5:14.45,c6:17.6};
guy.outfit({chefhat:1});
// ---- dining room ----
const D={S:new THREE.Scene()};lights(D.S);D.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);
part(D.S,new THREE.PlaneGeometry(40,40),toon(0x8A5A3C),[0,0,0],[1,1,1],[-PI/2,0,0],0);
const wp=canvasTex(256,256);{const c=wp.ctx;c.fillStyle='#E9B872';c.fillRect(0,0,256,256);c.fillStyle='#DDA45C';for(let i=0;i<8;i++)c.fillRect(i*32,0,14,256);wp.tx.wrapS=wp.tx.wrapT=THREE.RepeatWrapping;wp.tx.repeat.set(6,2)}
part(D.S,new THREE.PlaneGeometry(30,8),tmat(0xffffff,wp.tx),[0,4,-3.0],[1,1,1],[0,0,0],0);
part(D.S,new THREE.BoxGeometry(30,1.0,0.1),toon(0x7A3E22),[0,0.5,-2.95],[1,1,1],[0,0,0],0);
// window with evening sky
const winC=canvasTex(256,320);{const c=winC.ctx;const gr=c.createLinearGradient(0,0,0,320);gr.addColorStop(0,'#3A2A6E');gr.addColorStop(1,'#FF9A5A');c.fillStyle=gr;c.fillRect(0,0,256,320);c.fillStyle='#2A1E40';for(let i=0;i<6;i++){c.beginPath();c.moveTo(i*50-10,320);c.lineTo(i*50+30,200+hash(i)*60);c.lineTo(i*50+70,320);c.fill()}}
part(D.S,new THREE.BoxGeometry(1.9,2.3,0.08),toon(0xFFFFFF),[-2.2,2.6,-2.9],[1,1,1],[0,0,0],0.01);part(D.S,new THREE.PlaneGeometry(1.6,2.0),new THREE.MeshBasicMaterial({map:winC.tx}),[-2.2,2.6,-2.85],[1,1,1],[0,0,0],0);
part(D.S,new THREE.BoxGeometry(0.06,2.0,0.04),toon(0xFFFFFF),[-2.2,2.6,-2.82],[1,1,1],[0,0,0],0);part(D.S,new THREE.BoxGeometry(1.6,0.06,0.04),toon(0xFFFFFF),[-2.2,2.6,-2.82],[1,1,1],[0,0,0],0);
// garland of leaves
for(let i=0;i<22;i++)part(D.S,SPH,toon([0xE2572B,0xF2A33A,0xB5402A][i%3]),[-5+i*0.48,3.9-0.25*Math.sin(i*0.6),-2.85],[0.2,0.13,0.05],[0,0,i],0.006);
// chair
part(D.S,new THREE.BoxGeometry(0.9,0.1,0.8),toon(0x6B3A22),[0,0.48,-0.15],[1,1,1],[0,0,0],0.01);part(D.S,new THREE.BoxGeometry(0.9,1.3,0.1),toon(0x6B3A22),[0,1.1,-0.58],[1,1,1],[0,0,0],0.01);
for(const [x,z] of [[-0.38,0.18],[0.38,0.18],[-0.38,-0.5],[0.38,-0.5]])part(D.S,cap(0.04,0.4),toon(0x5A2E1A),[x,0.24,z]);
// table
const TB=new THREE.Group();TB.position.set(0,0,0.95);D.S.add(TB);
part(TB,new THREE.BoxGeometry(3.2,0.1,1.3),toon(0x7A4A2A),[0,0.88,0],[1,1,1],[0,0,0],0.012);part(TB,new THREE.BoxGeometry(3.3,0.04,1.36),toon(0xF6EEDC),[0,0.95,0],[1,1,1],[0,0,0],0.008);
part(TB,new THREE.BoxGeometry(3.3,0.35,0.02),toon(0xF6EEDC),[0,0.78,0.68],[1,1,1],[0,0,0],0);
for(const [x,z] of [[-1.45,-0.5],[1.45,-0.5],[-1.45,0.5],[1.45,0.5]])part(TB,cap(0.06,0.7),toon(0x5A2E1A),[x,0.42,z]);
function plate(p,x,z){part(p,new THREE.CylinderGeometry(0.26,0.22,0.03,24),toon(0xFFFFFF),[x,0.985,z],[1,1,1],[0,0,0],0.006)}
plate(TB,0,-0.25);
// turkey
const TK=new THREE.Group();TK.position.set(0,0.98,0.2);TB.add(TK);part(TK,new THREE.CylinderGeometry(0.42,0.36,0.04,28),toon(0xD9D9E0),[0,0.02,0],[1,1,1],[0,0,0],0.006);
part(TK,SPH,toon(0xC9782E),[0,0.2,0],[0.3,0.2,0.24],[0,0,0],0.012);for(const s of [-1,1]){part(TK,SPH,toon(0xC9782E),[0.2,0.14,s*0.17],[0.16,0.09,0.09],[0,s*0.3,0],0.01);part(TK,cap(0.025,0.08),toon(0xFFF4E0),[0.36,0.15,s*0.19],[1,1,1],[0,0,PI/2],0.004)}
part(TK,SPH,toon(0xDB8C3E),[-0.05,0.3,0],[0.18,0.08,0.15],[0,0,0],0);
// pie
function pie(p,x,z,col=0xE58A2E){const g0=new THREE.Group();g0.position.set(x,0.98,z);p.add(g0);part(g0,new THREE.CylinderGeometry(0.24,0.2,0.08,24),toon(0xD9A066),[0,0.04,0],[1,1,1],[0,0,0],0.006);part(g0,new THREE.CylinderGeometry(0.21,0.21,0.02,24),toon(col),[0,0.085,0],[1,1,1],[0,0,0],0);return g0}
const PIE1=pie(TB,-0.95,0.15),PIE2=pie(TB,0.95,0.2,0x8E3B2A);
// mashed potatoes + corn
part(TB,SPH,toon(0xFFF1C8),[-0.55,1.03,-0.2],[0.16,0.08,0.16],[0,0,0],0.008);part(TB,SPH,toon(0xFFD23F),[0.55,1.02,-0.2],[0.14,0.06,0.14],[0,0,0],0.008);
// candles
for(const x of [-1.35,1.35]){part(TB,cap(0.035,0.25),toon(0xFFF6E0),[x,1.12,-0.35]);part(TB,SPH,basic(0xFFB83F),[x,1.32,-0.35],[0.03,0.05,0.03],[0,0,0],0)}
// extra food pile (scene 4)
const PILE=new THREE.Group();TB.add(PILE);PILE.visible=false;for(let i=0;i<14;i++){const x=(hash(i*2.1)-0.5)*2.4,z=(hash(i*3.7)-0.5)*0.8;if(i%3===0)pie(PILE,x,z,[0xE58A2E,0x8E3B2A,0xF2C14E][i%3]);else part(PILE,SPH,toon([0xC9782E,0xFFF1C8,0x5BA34A,0xD94A3A][i%4]),[x,1.05,z],[0.14,0.09,0.14],[0,i,0],0.008)}
// two original soda bottles (no labels except "2 L")
function bottle(col){const b=new THREE.Group();const G=new THREE.MeshToonMaterial({color:col,transparent:true,opacity:0.55,gradientMap:GM});
  part(b,new THREE.CylinderGeometry(0.32,0.32,1.5,28),G,[0,0.75,0],[1,1,1],[0,0,0],0.01);part(b,new THREE.CylinderGeometry(0.1,0.32,0.45,28),G,[0,1.72,0],[1,1,1],[0,0,0],0.01);part(b,new THREE.CylinderGeometry(0.11,0.11,0.12,20),toon(0xFF3D3D),[0,2.0,0],[1,1,1],[0,0,0],0.006);
  const fill=part(b,new THREE.CylinderGeometry(0.29,0.29,1.4,28),toon(0xE07A2A),[0,0.72,0],[1,1,1],[0,0,0],0);part(b,new THREE.CylinderGeometry(0.325,0.325,0.4,28),toon(0xFFFFFF),[0,0.8,0],[1,1,1],[0,0,0],0);return {b,fill}}
const B1=bottle(0x8FE3A0),B2=bottle(0x8FD0FF);[B1,B2].forEach((o,i)=>{D.S.add(o.b);o.b.position.set(i?0.8:-0.8,0.98,1.45);o.b.scale.setScalar(0.72);o.b.visible=false});
function seat(t,o={}){D.S.add(holder);holder.rotation.order='XYZ';holder.position.set(0,0.13,-0.1);holder.rotation.set(0,0,0);holder.scale.setScalar(1);
  guy.pose({...SIT,armL:[0.6,0.1],armR:[0.6,-0.1],blink:BLINK(t),mouth:'smile',...o})}
function dShot(p,l){D.cam.position.set(...p);D.cam.lookAt(...l);setBG('#E9B872');r.setClearColor(0,0);r.render(D.S,D.cam)}
// ---- 2D stomach ----
function stomach(x,y,s,folds=1,col='#FF8FA6'){g.save();g.translate(x,y);g.scale(s,s);g.lineJoin='round';
  const path=()=>{g.beginPath();g.moveTo(-40,-150);g.bezierCurveTo(-30,-110,-20,-90,-10,-70);g.bezierCurveTo(-120,-60,-150,40,-90,110);g.bezierCurveTo(-30,170,90,150,120,90);g.bezierCurveTo(150,40,130,-20,90,-40);g.bezierCurveTo(60,-55,30,-60,20,-75);g.bezierCurveTo(10,-100,0,-120,-5,-150);g.closePath()};
  path();g.fillStyle=col;g.fill();g.lineWidth=12/s*s;g.strokeStyle='#111';g.lineWidth=12;g.stroke();
  if(folds>0){g.save();path();g.clip();g.strokeStyle='rgba(180,40,70,'+(0.8*folds)+')';g.lineWidth=7;for(let k=0;k<6;k++){g.beginPath();for(let i=0;i<=24;i++){const px=-120+i*11,py=-40+k*32+Math.sin(i*1.3+k)*14*folds;i?g.lineTo(px,py):g.moveTo(px,py)}g.stroke()}g.restore()}
  g.restore()}
function fist(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#FFCC2E';g.strokeStyle='#111';g.lineWidth=10;rr(-80,-70,160,140,50);g.fill();g.stroke();for(let i=0;i<3;i++){g.beginPath();g.moveTo(-40+i*40,-70);g.lineTo(-40+i*40,-20);g.stroke()}rr(-110,-10,70,60,28);g.fill();g.stroke();g.restore()}
function jug(x,y,h,lvl,col,label){g.save();g.fillStyle='rgba(255,255,255,0.25)';g.strokeStyle='#111';g.lineWidth=10;rr(x-70,y-h,140,h,24);g.fill();g.stroke();g.fillStyle=col;const lh=(h-16)*lvl;rr(x-62,y-8-lh,124,lh,16);g.fill();g.restore();txt(label,x,y+50,48,{fill:'#fff',sw:11})}
// ---- opening ----
const C0={p:[2.6,2.3,6.4],l:[0,1.3,0.4]};
function openScene(t){PILE.visible=false;B1.b.visible=B2.b.visible=false;const b=Math.sin(t*2*PI/1.35);
  seat(t,{reachL:[0.3,0.95,0.55],reachR:[-0.3,0.95,0.55],mouth:'grin',headYaw:0.15*Math.sin(t*2*PI/2.7),headPitch:0.05+0.03*b,jump:0})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;PILE.visible=false;TK.visible=true;B1.b.visible=B2.b.visible=false;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.15,CU.c1));dShot(mix(C0.p,[2.3,2.2,5.9],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('HOW MUCH CAN',W/2,190,80,{sw:16});txt('YOUR STOMACH',W/2,300,108,{fill:'#FF8FA6',sw:22});txt('STRETCH?',W/2,425,124,{fill:'#FFD23F',sw:24});g.restore();
    pill('THANKSGIVING',W/2,1230,60,'#E2572B','#fff',t,1.7,CU.c1-0.05)}
  else if(t<CU.c2){flash(t,CU.c1,0.15);seat(t,{armR:[2.3,-0.2],bendR:1.6,armL:[0.5,0.1],mouth:'o',mouthSize:0.6,headYaw:-0.25,look:-0.3});dShot([-1.9,2.0,6.6],[0.35,1.75,0]);
    g.fillStyle='rgba(20,10,30,0.55)';g.fillRect(0,250,W,560);const s=0.85*pop(t,3.0);stomach(W*0.3,530,s*0.9,1);fist(W*0.72,540,1.15*pop(t,4.6));
    txt('=',W*0.51,540,120,{fill:'#fff',sw:20,a:1});pill('EMPTY',W*0.3,330,56,'#FF8FA6','#111',t,3.0,CU.c2);pill('A FIST',W*0.72,330,56,'#FFD23F','#111',t,4.7,CU.c2);comic('TINY!',W*0.5,1240,90,t,4.9,{life:0.8,rot:-0.1,fill:'#FF8FA6'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);clear3d();setBG('radial-gradient(circle at 50% 45%,#C2337A,#3A0B2E 75%)');
    const k=easeOut(seg(t,6.0,7.8));stomach(W*0.36,820,lerp(0.9,1.6,k),lerp(1,0.6,k));jug(W*0.8,1180,lerp(80,420,easeOut(seg(t,6.4,7.9))),k,'#FFB36B','');
    const v=lerp(0,1,k);txt(v.toFixed(1)+' L',W*0.8,1260,84,{fill:'#FFD23F',sw:16});pill('NORMAL MEAL',W/2,330,64,'#FFFFFF','#111',t,5.9,CU.c3);comic('GULP',W*0.25,1240,90,t,6.6,{life:0.8,rot:-0.12,fill:'#FFD23F'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);clear3d();setBG('radial-gradient(circle at 50% 45%,#7A1F3D,#22060C 75%)');
    // zoom inside: wall with folds that flatten
    const k=ease(seg(t,10.3,11.8));g.save();g.fillStyle='#FF8FA6';g.strokeStyle='#111';g.lineWidth=12;rr(110,420,W-220,820,60);g.fill();g.stroke();g.clip();
    for(let r_=0;r_<9;r_++){const y0=480+r_*88;g.strokeStyle='#B8284A';g.lineWidth=16;g.beginPath();for(let i=0;i<=40;i++){const px=110+i*(W-220)/40;const amp=lerp(38,3,k);const py=y0+Math.sin(i*0.9+r_)*amp*(1+0.1*Math.sin(t*6));i?g.lineTo(px,py):g.moveTo(px,py)}g.stroke()}g.restore();
    // stretch arrows
    if(k>0.05){g.save();g.globalAlpha=clamp(k*2);arrow(W/2-60,1330,140,1330,'#FFD23F',26);arrow(W/2+60,1330,W-140,1330,'#FFD23F',26);g.restore()}
    txt('FOLDS',W/2,330,104,{fill:'#FF8FA6',sw:20});pill('UNFOLD LIKE AN ACCORDION',W/2,1660,50,'#FFD23F','#111',t,10.4,CU.c4);
    // magnifier ring at start
    const zi=1-easeOut(seg(t,CU.c3,CU.c3+0.5));if(zi>0){g.save();g.globalAlpha=zi;g.fillStyle='#22060C';g.fillRect(0,0,W,H);stomach(W/2,830,1.4+zi*0.5,1);g.restore()}
    comic('WHOA',W*0.78,520,90,t,9.6,{life:0.8,rot:0.12,fill:'#fff'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);PILE.visible=true;const e=Math.sin(t*14);
    seat(t,{reachL:[0.35,1.0+0.12*Math.max(0,e),0.55],reachR:[-0.35,1.0+0.12*Math.max(0,-e),0.55],mouth:e>0?'o':'grin',mouthSize:0.8,headPitch:0.1+0.06*e});
    const k=ease(seg(t,CU.c4,CU.c5));dShot([lerp(-2.4,-1.6,k),2.6,lerp(6.4,5.4,k)],[0,1.3,0.6]);
    const L=lerp(1,4,easeOut(seg(t,12.4,14.0)));g.save();g.fillStyle='rgba(10,12,25,0.85)';rr(W/2-330,250,660,300,40);g.fill();g.strokeStyle='#FF8FA6';g.lineWidth=6;g.stroke();g.restore();
    stomach(W/2-180,400,0.42+0.12*(L-1)/3,0.6*(1-(L-1)/3));txt(L.toFixed(1)+' L',W/2+120,400,110,{fill:'#FFD23F',sw:20});
    comic('NOM NOM',W*0.26,1220,80,t,12.2,{life:1.0,rot:-0.1,fill:'#FFD23F'});comic('4×!',W*0.78,1210,110,t,13.4,{life:0.9,rot:0.1,fill:'#FF8FA6'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);B1.b.visible=B2.b.visible=true;TK.visible=false;
    const f=easeOut(seg(t,15.0,16.6));[B1,B2].forEach(o=>{o.fill.scale.y=Math.max(0.01,f);o.fill.position.y=0.02+0.7*f});
    seat(t,{armL:[2.2,0.5],armR:[2.2,-0.5],bendL:0.4,bendR:0.4,mouth:t>16.85?'teeth':'grin',wide:t>16.85,blink:BLINK(t)});
    dShot([0.0,2.2,8.8],[0,1.65,0.8]);
    const [x1,y1]=proj(new THREE.Vector3(-0.8,2.55,1.45),D.cam),[x2,y2]=proj(new THREE.Vector3(0.8,2.55,1.45),D.cam);
    pill('2 L',x1,y1-70,56,'#5BE37A','#111',t,14.7,CU.c6);pill('2 L',x2,y2-70,56,'#3FA9FF','#fff',t,14.9,CU.c6);
    pill('TURKEY + PIE',W/2,1660,60,'#E2572B','#fff',t,16.0,CU.c6);comic('BURP!',W*0.5,360,120,t,16.85,{life:0.8,rot:-0.06,fill:'#FFD23F'})}
  else{const tt=t-TT;openScene(tt);const k=ease(seg(t,CU.c6,TT-0.12));dShot(mix([3.1,2.5,7.0],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
