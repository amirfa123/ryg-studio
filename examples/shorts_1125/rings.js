// ===== What would happen if Earth had rings like Saturn? (crazy what-if / space) =====
const TT=19.45;
const CU={c1:3.3,c2:7.7,c3:9.6,c4:12.0,c5:14.6,c6:17.6};
guy.outfit({snapback:1,capColor:0x2B4BB8});
// ---------- ring texture (planar UV of RingGeometry -> concentric bands) ----------
function ringTex(alphaMul=1){const t=canvasTex(1024,1024);const c=t.ctx;c.clearRect(0,0,1024,1024);const R0=3.4/6.2*512,R1=512;
  for(let r=R0;r<R1;r+=2){const k=(r-R0)/(R1-R0);const gap=(k>0.62&&k<0.68)||(k>0.88&&k<0.9);const a=gap?0.05:(0.55+0.4*Math.sin(k*40+Math.sin(k*13)*2))*(k<0.08?k/0.08:1)*alphaMul;
    c.strokeStyle=`rgba(${230+20*Math.sin(k*9)|0},${205+25*Math.sin(k*17)|0},${160+40*Math.sin(k*5)|0},${a})`;c.lineWidth=2.5;c.beginPath();c.arc(512,512,r,0,7);c.stroke()}
  t.tx.needsUpdate=true;return t.tx}
// ---------- scene 1: tiny ringed Earth in space ----------
const SP={S:new THREE.Scene()};lights(SP.S);SP.cam=new THREE.PerspectiveCamera(30,W/H,0.1,400);
const PLAN=new THREE.Group();SP.S.add(PLAN);PLAN.rotation.z=-0.32;
const EARTH=new THREE.Group();PLAN.add(EARTH);part(EARTH,new THREE.SphereGeometry(2.5,48,32),toon(0x2F86E0),[0,0,0],[1,1,1],[0,0,0],0.015);
for(let i=0;i<14;i++){const th=hash(i*3)*PI*2,ph=0.35+hash(i*7)*2.4;const v=new THREE.Vector3(Math.sin(ph)*Math.cos(th),Math.cos(ph),Math.sin(ph)*Math.sin(th));const m=part(EARTH,SPH,toon(i%3?0x4FB45A:0x6CC66A),[v.x*2.38,v.y*2.38,v.z*2.38],[0.7+0.5*hash(i),0.25,0.55+0.4*hash(i*5)],[0,0,0],0.008);m.lookAt(v.clone().multiplyScalar(10));m.rotateX(PI/2)}
for(const s of [-1,1])part(EARTH,SPH,toon(0xF4F8FF),[0,s*2.32,0],[0.9,0.3,0.9],[0,0,0],0.006);
const RING=part(PLAN,new THREE.RingGeometry(3.4,6.2,160,1),new THREE.MeshBasicMaterial({map:ringTex(),transparent:true,side:THREE.DoubleSide,depthWrite:false}),[0,0,0],[1,1,1],[-PI/2+0.32,0,0],0);
{const N=500,pos=new Float32Array(N*3);for(let i=0;i<N;i++){pos[i*3]=(hash(i)-0.5)*160;pos[i*3+1]=(hash(i*3)-0.5)*200;pos[i*3+2]=-60-hash(i*7)*60}const gm=new THREE.BufferGeometry();gm.setAttribute('position',new THREE.BufferAttribute(pos,3));SP.S.add(new THREE.Points(gm,new THREE.PointsMaterial({color:0xffffff,size:0.35})))}
const C0={p:[2.2,4.2,23],l:[0,1.6,0]};
function spaceScene(t){PLAN.add(holder);holder.position.set(0,2.47,0);holder.rotation.set(0,0.35,0);holder.scale.setScalar(1);EARTH.rotation.y=0.18*t;
  guy.pose({armL:[0.4,0],armR:[2.4,-0.2],bendR:0.2,blink:BLINK(t),mouth:'o',mouthSize:0.7,wide:true,headPitch:-0.2,headYaw:-0.25,lookY:0.5,jump:0.01*Math.sin(t*2*PI/1.6)})}
function spaceShot(p,l){SP.cam.position.set(...p);SP.cam.lookAt(...l);setBG('radial-gradient(circle at 50% 45%,#1A2350,#05070F 75%)');r.setClearColor(0,0);r.render(SP.S,SP.cam)}
// ---------- scenes 2/4/5: ground + painted sky backdrop ----------
const GS={S:new THREE.Scene()};lights(GS.S);GS.cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);const GL=GS.S.children.filter(c=>c.isLight);
const GROUND=part(GS.S,new THREE.PlaneGeometry(120,120),toon(0xF2D49B),[0,0,-20],[1,1,1],[-PI/2,0,0],0);
const SEA=part(GS.S,new THREE.PlaneGeometry(120,14),toon(0x2A9FD6),[0,0.02,-26],[1,1,1],[-PI/2,0,0],0);
const SKY=canvasTex(1024,1024);part(GS.S,new THREE.PlaneGeometry(60,40),new THREE.MeshBasicMaterial({map:SKY.tx,fog:false}),[0,19.9,-33],[1,1,1],[0,0,0],0);
const BEACH=new THREE.Group(),NORTH=new THREE.Group();GS.S.add(BEACH,NORTH);
palm(BEACH,-2.6,-2.5,1.3,0.25,0.4);palm(BEACH,3.0,-5.0,1.2,0.2,2.0);palm(BEACH,-5.5,-9,1.3,0.15,1.2);part(BEACH,SPH,toon(0xE8C27A),[1.8,0.05,-1.0],[1.0,0.12,0.7],[0,0,0],0.006);
for(let i=0;i<9;i++){const x=(i%2?1:-1)*(2.6+hash(i)*7),z=-3-hash(i*3)*14;const tr=new THREE.Group();tr.position.set(x,0,z);NORTH.add(tr);part(tr,cap(0.12,0.8),toon(0x6B4426),[0,0.4,0]);for(let k=0;k<3;k++)part(tr,new THREE.ConeGeometry(0.9-k*0.22,1.0,10),toon(0x2E7A4A),[0,1.0+k*0.55,0],[1,1,1],[0,0,0],0.01)}
{const h=new THREE.Group();h.position.set(3.2,0,-6);NORTH.add(h);part(h,new THREE.BoxGeometry(2.4,1.8,2),toon(0xC2403A),[0,0.9,0],[1,1,1],[0,0,0],0.015);part(h,new THREE.ConeGeometry(1.9,1.1,4),toon(0x3A3A48),[0,2.35,0],[1,1,1],[0,PI/4,0],0.01);part(h,new THREE.BoxGeometry(0.5,0.5,0.05),basic(0xFFE7A0),[-0.5,1.0,1.02],[1,1,1],[0,0,0],0)}
const SH=1024;
function skyGrad(stops){const c=SKY.ctx;const gr=c.createLinearGradient(0,0,0,SH);stops.forEach(([o,col])=>gr.addColorStop(o,col));c.fillStyle=gr;c.fillRect(0,0,SH,SH)}
function stars(n,a){const c=SKY.ctx;c.fillStyle=`rgba(255,255,255,${a})`;for(let i=0;i<n;i++){c.beginPath();c.arc(hash(i)*SH,hash(i*3)*SH*0.85,1+2*hash(i*5),0,7);c.fill()}}
function edgeLine(a){const c=SKY.ctx;const x=SH*0.5;c.save();c.globalAlpha=a;const gr=c.createLinearGradient(x-40,0,x+40,0);gr.addColorStop(0,'rgba(255,240,200,0)');gr.addColorStop(0.5,'rgba(255,245,215,0.9)');gr.addColorStop(1,'rgba(255,240,200,0)');c.fillStyle=gr;c.fillRect(x-40,0,80,SH);c.fillStyle='#FFFBEA';c.fillRect(x-4,0,8,SH);c.restore()}
function arch(peak,glow,shadow){const c=SKY.ctx;const cx=SH*0.5,cy=SH*1.05;c.save();
  for(let k=0;k<70;k++){const u=k/70;const gap=(u>0.62&&u<0.68);if(gap)continue;const rx=SH*(0.11+u*0.13),ry=(SH*peak)*(0.62+u*0.42);
    c.strokeStyle=`rgba(${240-20*u|0},${220-30*u|0},${185-40*u|0},${(0.35+0.25*Math.sin(u*30))*glow})`;c.lineWidth=SH*0.0035;c.beginPath();c.ellipse(cx,cy,rx,ry,0,PI,2*PI);c.stroke()}
  if(shadow){c.globalCompositeOperation='source-atop'}c.restore()}
function paintSky(mode,t){const c=SKY.ctx;
  if(mode==='beach'){skyGrad([[0,'#1E2A6B'],[0.55,'#7A4A9A'],[0.85,'#FF8A6B'],[1,'#FFC27A']]);stars(60,0.5);edgeLine(easeOut(seg(t,4.9,5.9)))}
  else if(mode==='day'){skyGrad([[0,'#3C8FE8'],[0.7,'#9BD3FF'],[1,'#E8F6FF']]);arch(0.5*easeOut(seg(t,8.9,10.4))+0.03,1,false)}
  else{skyGrad([[0,'#060A24'],[0.7,'#1A2560'],[1,'#3A3F80']]);stars(160,0.9);arch(0.5,1.6,false);c.fillStyle='rgba(255,250,230,0.10)';c.fillRect(0,0,SH,SH)}
  SKY.tx.needsUpdate=true}
function groundShot(mode,t,p,l){const isB=mode==='beach';BEACH.visible=isB;NORTH.visible=!isB;SEA.visible=isB;GROUND.material.color.set(isB?0xF2D49B:(mode==='night'?0xB8C4E8:0xF4F8FF));
  GL.forEach(L=>L.intensity=(L.isHemisphereLight?1.5:2.2)*(mode==='night'?0.62:mode==='beach'?0.8:1));paintSky(mode,t);GS.cam.position.set(...p);GS.cam.lookAt(...l);r.setClearColor(0,0);setBG('#000');r.render(GS.S,GS.cam)}
// ---------- 2D: globe + viewer diagram ----------
function globeDiagram(t,t0){setBG('radial-gradient(circle at 50% 45%,#1A2350,#05070F 75%)');const cx=W/2,cy=860,R=270;
  // back half of ring
  g.save();g.translate(cx,cy);g.rotate(-0.0);g.strokeStyle='rgba(240,215,170,0.85)';g.lineWidth=46;g.beginPath();g.ellipse(0,0,R*1.75,R*0.32,0,PI,2*PI);g.stroke();g.restore();
  g.fillStyle='#2F86E0';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.arc(cx,cy,R,0,7);g.fill();g.stroke();
  g.fillStyle='#4FB45A';for(let i=0;i<5;i++){g.beginPath();g.ellipse(cx-150+i*70,cy-120+((i*97)%220),60,40,i,0,7);g.fill()}
  g.strokeStyle='rgba(255,255,255,0.7)';g.setLineDash([18,14]);g.lineWidth=6;g.beginPath();g.moveTo(cx-R,cy);g.lineTo(cx+R,cy);g.stroke();g.setLineDash([]);
  g.save();g.translate(cx,cy);g.strokeStyle='rgba(250,225,180,1)';g.lineWidth=46;g.beginPath();g.ellipse(0,0,R*1.75,R*0.32,0,0,PI);g.stroke();g.restore();
  txt('EQUATOR',cx+R*1.05,cy-60,40,{fill:'#fff',sw:8,align:'left'});
  // YOU marker moves north
  const lat=lerp(0,0.95,ease(seg(t,t0+0.3,t0+1.5)));const mx=cx-Math.cos(lat)*R*0.0-Math.sin(0)*0,my=cy-Math.sin(lat)*R;const mxx=cx-Math.cos(lat)*R*0.55;
  g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.arc(mxx,my,26,0,7);g.fill();g.stroke();txt('YOU',mxx,my-62,56,{fill:'#FFD23F',sw:12});
  // view arrow from YOU toward ring
  g.save();g.globalAlpha=0.9;arrow(mxx-10,my,mxx-200,cy+40,'#FF8FC8',14);g.restore();
  txtA('NORTH',cx,cy-R-70,60,seg(t,t0+1.2,t0+1.5),{fill:'#9CC4FF',sw:12})}
// ---------- 2D: ring shadow / winter diagram ----------
function shadowDiagram(t,t0){setBG('radial-gradient(circle at 50% 45%,#141C40,#05070F 75%)');const cx=W/2+120,cy=840,R=230;
  // sun + rays
  g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.arc(-60,cy-40,230,0,7);g.fill();g.stroke();
  for(let i=0;i<7;i++){const y=cy-300+i*95;const u=((t-t0)*1.2+i*0.17)%1;g.strokeStyle='rgba(255,230,120,0.85)';g.lineWidth=12;g.beginPath();g.moveTo(190,y);g.lineTo(190+u*(cx-R-210),y);g.stroke()}
  g.save();g.translate(cx,cy);g.rotate(0.41);
  // earth
  g.fillStyle='#2F86E0';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();
  // shadow band on the winter (upper) half
  const sa=easeOut(seg(t,t0+0.8,t0+1.6));g.save();g.beginPath();g.arc(0,0,R-5,0,7);g.clip();g.fillStyle=`rgba(5,8,25,${0.7*sa})`;g.fillRect(-R,-R,2*R,R*0.72);g.restore();
  g.strokeStyle='#fff';g.lineWidth=6;g.setLineDash([16,12]);g.beginPath();g.moveTo(0,-R-80);g.lineTo(0,R+80);g.stroke();g.setLineDash([]);
  g.strokeStyle='rgba(250,225,180,1)';g.lineWidth=30;g.beginPath();g.ellipse(0,0,R*1.8,R*0.18,0,0,7);g.stroke();
  g.restore();
  txtA('RING SHADOW',cx-40,cy-R-150,56,sa,{fill:'#C8D4FF',sw:12});
  // thermometer
  const tx=W-130,ty=1080;const f=lerp(0.6,0.12,easeOut(seg(t,t0+1.4,t0+2.6)));g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=8;rr(tx-24,ty-320,48,320,24);g.fill();g.stroke();g.beginPath();g.arc(tx,ty+20,44,0,7);g.fill();g.stroke();
  g.fillStyle='#3FA0FF';g.beginPath();g.arc(tx,ty+20,32,0,7);g.fill();g.fillRect(tx-12,ty-300*f,24,300*f+10);
  txtA('COLDER',tx-60,ty+120,56,seg(t,t0+1.6,t0+1.9),{fill:'#9CC4FF',sw:12})}
// ---------- render ----------
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;
  if(t<CU.c1){spaceScene(t);const k=ease(seg(t,0.1,CU.c1));spaceShot(mix(C0.p,[1.6,3.6,20.5],k),mix(C0.l,[0,1.8,0],k));
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT IF EARTH',W/2,190,90,{sw:18});txt('HAD RINGS',W/2,305,130,{fill:'#FFD9A0',sw:24});txt('LIKE SATURN?',W/2,425,96,{fill:'#FFD23F',sw:20});g.restore();
    pill('REAL RING SCIENCE',W/2,1240,54,'#FFD9A0','#111',t,2.1,CU.c1-0.05)}
  else if(t<CU.c2){flash(t,CU.c1,0.15);GS.S.add(holder);holder.position.set(0.3,0,0.4);holder.rotation.set(0,PI-0.15,0);holder.scale.setScalar(1);const up=t>5.3;
    guy.pose(idle(t,{armR:up?[2.6,-0.3]:[0.3,0],bendR:up?0.1:0,headPitch:up?-0.45:-0.1,mouth:up?'o':'smile',mouthSize:0.7,wide:up}));
    const k=ease(seg(t,CU.c1,CU.c2));groundShot('beach',t,[lerp(1.0,0.5,k),lerp(1.4,1.2,k),lerp(14.5,13.2,k)],[0,lerp(4.0,5.0,k),-10]);
    pill('AT THE EQUATOR',W/2,330,76,'#FF8A6B','#fff',t,3.5,5.0);pill('EDGE-ON = THIN LINE',W/2,330,66,'#FFFBEA','#111',t,5.0,CU.c2);if(t>6.3)comic('ZING',W*0.72,560,90,t,6.3,{life:0.8,rot:0.12,fill:'#FFF3A0'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);clear3d();globeDiagram(t,CU.c2)}
  else if(t<CU.c4){flash(t,CU.c3,0.15);GS.S.add(holder);holder.position.set(-0.4,0,0.6);holder.rotation.set(0,PI-0.25,0);holder.scale.setScalar(1);const wow=t>10.3;
    guy.pose(idle(t,{armL:wow?[2.3,0.2]:[0.35,0],armR:wow?[2.3,-0.2]:[0.35,0],headPitch:-0.35,mouth:wow?'o':'smile',mouthSize:0.9,wide:wow,jump:wow?0.05*Math.abs(Math.sin(t*6)):0.01}));
    const k=ease(seg(t,CU.c3,CU.c4));groundShot('day',t,[lerp(0.8,0.3,k),lerp(1.4,1.2,k),lerp(14.8,13.6,k)],[0,lerp(4.4,5.4,k),-10]);
    pill('FARTHER NORTH',W/2,330,80,'#9CC4FF','#111',t,CU.c3+0.05,10.4);pill('A GIANT ARCH!',W/2,330,84,'#FFD9A0','#111',t,10.4,CU.c4);comic('WHOA',W*0.75,620,96,t,10.35,{life:0.9,rot:0.12,fill:'#FFD23F'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);GS.S.add(holder);holder.position.set(0.2,0,0.8);holder.rotation.set(0,0.25,0);holder.scale.setScalar(1);
    guy.pose(idle(t,{armR:[2.0+0.25*Math.sin(t*9),-0.3],bendR:0.4,mouth:'grin',headYaw:0.1}));
    const k=ease(seg(t,CU.c4,CU.c5));groundShot('night',t,[lerp(-0.6,-0.2,k),lerp(1.4,1.3,k),lerp(14.2,13.2,k)],[0,5.2,-10]);
    txt('NIGHT BRIGHTNESS',W/2,500,48,{sw:10});bar(W/2-260,530,520,56,lerp(0.15,0.85,easeOut(seg(t,12.8,13.8))),'#FFF3A0');
    pill('RING-LIGHT AT NIGHT',W/2,330,70,'#FFF3A0','#111',t,12.1,CU.c5);comic('NO FLASHLIGHT!',W*0.5,720,80,t,13.3,{life:1.1,rot:-0.06,fill:'#7FE0FF'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);clear3d();shadowDiagram(t,CU.c5);pill('WINTER SIDE',W/2,250,70,'#9CC4FF','#111',t,15.6,CU.c6)}
  else{const tt=t-TT;spaceScene(tt);const k=ease(seg(t,CU.c6,TT-0.2));spaceShot(mix([3.0,5.6,30],C0.p,k),mix([0,1.2,0],C0.l,k));flash(t,CU.c6,0.15)}
  vignette();captions(t)};
