// ===== Is it possible to catch a falling rocket with giant chopsticks? (wildcard / space, Starship catch) =====
const TT=20.3;
const CU={c1:3.85,c2:5.4,c2b:8.0,c3:10.85,c4:12.6,c5:16.3,c6:18.5};
guy.outfit({hardhat:1});
const STEEL=toon(0xCDD2DA),BLK=toon(0x22242C),TW=toon(0x4A4E5A),TW2=toon(0x353844);
// ---------- launch site ----------
const LS={S:new THREE.Scene()};lights(LS.S);LS.cam=new THREE.PerspectiveCamera(30,W/H,0.5,3000);
part(LS.S,new THREE.PlaneGeometry(3000,3000),toon(0x2E6FA8),[0,-0.2,-600],[1,1,1],[-PI/2,0,0],0);
part(LS.S,new THREE.PlaneGeometry(800,500),toon(0xD9C7A0),[0,0,100],[1,1,1],[-PI/2,0,0],0);
part(LS.S,new THREE.CircleGeometry(40,40),toon(0x9A9AA4),[0,0.05,0],[1,1,1],[-PI/2,0,0],0);
// tower (lattice look)
const TOW=new THREE.Group();LS.S.add(TOW);TOW.position.set(-14,0,0);const TH=145;
part(TOW,new THREE.BoxGeometry(10,TH,10),TW,[0,TH/2,0],[1,1,1],[0,0,0],0.05);
for(let y=4;y<TH;y+=8){part(TOW,new THREE.BoxGeometry(10.4,0.8,10.4),TW2,[0,y,0],[1,1,1],[0,0,0],0);for(const s of [-1,1])part(TOW,new THREE.BoxGeometry(0.6,11,0.6),TW2,[s*0.1,y+4,5.25],[1,1,1],[0,0,s*0.85],0)}
part(TOW,new THREE.BoxGeometry(3,10,3),TW2,[0,TH+5,0]);part(TOW,SPH,basic(0xFF3030),[0,TH+11,0],[0.8,0.8,0.8],[0,0,0],0);
// carriage + arms
const CAR=new THREE.Group();TOW.add(CAR);CAR.position.set(5.5,96,0);part(CAR,new THREE.BoxGeometry(3,6,12),TW2,[0,0,0],[1,1,1],[0,0,0],0.05);
const ARMS=[];for(const s of [-1,1]){const pv=new THREE.Group();pv.position.set(1,0,s*5.5);CAR.add(pv);part(pv,new THREE.BoxGeometry(22,3.2,2.4),toon(0x5A5F6E),[11,0,0],[1,1,1],[0,0,0],0.05);part(pv,new THREE.BoxGeometry(20,0.6,0.4),basic(0xFFD23F),[11,-1.7,-s*1.25],[1,1,1],[0,0,0],0);ARMS.push({pv,s})}
function arms(open){for(const {pv,s} of ARMS)pv.rotation.y=-s*lerp(0.12,0.75,open)}
// far buildings / tank farm
for(let i=0;i<8;i++){part(LS.S,new THREE.CylinderGeometry(6,6,14,20),toon(0xE9EBF0),[50+i*16,7,-60-hash(i)*20],[1,1,1],[0,0,0],0.03)}
part(LS.S,new THREE.BoxGeometry(40,24,30),toon(0xE9EBF0),[-80,12,-90],[1,1,1],[0,0,0],0.05);
// the ship (original stainless rocket)
function makeShip(){const S=new THREE.Group();const body=new THREE.Group();S.add(body);
  part(body,new THREE.CylinderGeometry(4.5,4.5,38,32),STEEL,[0,19,0],[1,1,1],[0,0,0],0.06);
  part(body,new THREE.CylinderGeometry(4.52,4.52,38,32,1,true,PI*0.5,PI),BLK,[0,19,0],[1,1,1],[0,0,0],0);
  part(body,new THREE.SphereGeometry(4.5,32,16,0,PI*2,0,PI/2),STEEL,[0,38,0],[1,2.6,1],[0,0,0],0.06);
  part(body,new THREE.SphereGeometry(4.52,32,16,PI*0.5,PI,0,PI/2),BLK,[0,38,0],[1,2.6,1],[0,0,0],0);
  for(const s of [-1,1]){part(body,new THREE.BoxGeometry(0.6,8,5),BLK,[-1.5,6,s*6],[1,1,1],[0,0,0],0.03);part(body,new THREE.BoxGeometry(0.6,5,3.4),BLK,[-1.5,42,s*5],[1,1,1],[0,0,0],0.03)}
  for(const s of [-1,1])part(body,new THREE.CylinderGeometry(0.7,0.7,1.4,10),toon(0x5A5F6E),[0,30,s*4.6],[1,1,1],[PI/2,0,0],0);
  const fl=new THREE.Group();body.add(fl);for(let i=0;i<3;i++){const a=i/3*PI*2;part(fl,new THREE.ConeGeometry(1.6,14,16),new THREE.MeshBasicMaterial({color:0xFFB347,transparent:true,opacity:0.85,depthWrite:false}),[Math.cos(a)*1.8,-7,Math.sin(a)*1.8],[1,1,1],[PI,0,0],0);part(fl,new THREE.ConeGeometry(0.8,8,12),basic(0xFFF2B0),[Math.cos(a)*1.8,-4,Math.sin(a)*1.8],[1,1,1],[PI,0,0],0)}
  const glow=part(body,SPH,new THREE.MeshBasicMaterial({color:0xFF7A2A,transparent:true,opacity:0.45,depthWrite:false}),[-5,24,0],[3,26,7],[0,0,0],0);
  return {S,body,fl,glow}}
const SH=makeShip();LS.S.add(SH.S);
// ---------- space ----------
const SP={S:new THREE.Scene()};lights(SP.S);SP.cam=new THREE.PerspectiveCamera(30,W/H,1,20000);
const et=canvasTex(1024,512);{const c=et.ctx;c.fillStyle='#1E6FD0';c.fillRect(0,0,1024,512);for(let i=0;i<26;i++){c.fillStyle=i%3?'#3FA35A':'#C9B37A';c.beginPath();c.ellipse(hash(i)*1024,80+hash(i*3)*350,40+hash(i*5)*110,25+hash(i*7)*60,hash(i)*3,0,7);c.fill()}c.fillStyle='rgba(255,255,255,0.75)';for(let i=0;i<40;i++){c.beginPath();c.ellipse(hash(i*9)*1024,hash(i*11)*512,30+hash(i*13)*80,8+hash(i)*10,0,0,7);c.fill()}et.tx.needsUpdate=true}
const EARTH=part(SP.S,new THREE.SphereGeometry(1000,64,48),new THREE.MeshToonMaterial({map:et.tx,gradientMap:GM}),[0,-1000,0],[1,1,1],[0,0,0],0);
part(SP.S,new THREE.SphereGeometry(1025,64,48),new THREE.MeshBasicMaterial({color:0x7FD3FF,transparent:true,opacity:0.18,side:THREE.BackSide,depthWrite:false}),[0,-1000,0],[1,1,1],[0,0,0],0);
{const pg=new THREE.BufferGeometry();const a=[];for(let i=0;i<1500;i++){const th=hash(i)*PI*2,ph=hash(i*3.3)*PI;a.push(6000*Math.sin(ph)*Math.cos(th),6000*Math.cos(ph),6000*Math.sin(ph)*Math.sin(th))}pg.setAttribute('position',new THREE.Float32BufferAttribute(a,3));SP.S.add(new THREE.Points(pg,new THREE.PointsMaterial({color:0xffffff,size:3,sizeAttenuation:false})))}
const SH2=makeShip();SP.S.add(SH2.S);SH2.fl.visible=false;
// ---------- clouds (belly flop) ----------
const CL={S:new THREE.Scene()};lights(CL.S);CL.cam=new THREE.PerspectiveCamera(30,W/H,1,4000);const SH3=makeShip();CL.S.add(SH3.S);SH3.fl.visible=false;SH3.glow.visible=false;
const clouds=[];for(let i=0;i<40;i++){const c=new THREE.Group();CL.S.add(c);for(let k=0;k<4;k++)part(c,SPH,toon(0xffffff),[k*6-9,hash(i+k)*3,hash(i*k+2)*4],[9,5,7],[0,0,0],0.02);clouds.push({c,x:(hash(i*3.1)-0.5)*240,z:-30-hash(i*7.3)*200,y0:hash(i*5.7)*600})}
function cloudsAt(t){clouds.forEach(o=>{o.c.position.set(o.x,((o.y0+t*520)%600)-300,o.z)})}
// ---------- helpers ----------
function shotLS(p,l,bgc){LS.cam.position.set(...p);LS.cam.lookAt(...l);setBG(bgc||'linear-gradient(#1B1446 0%,#5A2A7A 38%,#FF7A6B 70%,#FFC48A 100%)');r.setClearColor(0,0);r.render(LS.S,LS.cam)}
function stars(){g.fillStyle='#06071A';g.fillRect(0,0,W,H);for(let i=0;i<160;i++){g.fillStyle=`rgba(255,255,255,${0.4+0.6*hash(i*3)})`;g.fillRect(hash(i)*W,hash(i*7)*H,3,3)}}
function speedo(x,y,v,col){panel(x,y,760,190,'rgba(10,12,25,0.88)',col,32);txt('SPEED',x,y-52,40,{fill:col,sw:10});txt(Math.round(v).toLocaleString('en-US')+' KM/H',x,y+26,92,{fill:'#fff',sw:16})}
function shipAt(sh,x,y,z,tilt){sh.S.position.set(x,y,z);sh.S.rotation.set(0,0,tilt)}
// guy on the ground near the pad (foreground)
const GX=67.9,GZ=291;function guyGround(t,o={}){putGuy(LS.S,GX,0,GZ,-0.25);guy.pose({...idle(t),headPitch:-0.45,lookY:0.9,...o})}
const C0={p:[70,1.6,300],l:[-10,55,0]};
function openScene(t){arms(1);shipAt(SH,0,0,0,0);SH.S.visible=false;guyGround(t,{armR:[2.1+0.15*Math.sin(t*2*PI/(TT/10)),-0.4],bendR:1.4,armL:[0.35,0],mouth:'smile',jump:0.012*Math.sin(t*2*PI/(TT/8))})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();SH.S.visible=true;SH.fl.visible=false;SH.glow.visible=false;holder.visible=true;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.1,CU.c1));shotLS(mix(C0.p,[69.4,1.6,298],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('IS IT POSSIBLE TO CATCH',W/2,190,70,{sw:15});txt('A FALLING ROCKET',W/2,300,92,{fill:'#3FF0FF',sw:18});txt('WITH CHOPSTICKS?',W/2,420,104,{fill:'#FFD23F',sw:22});g.restore()}
  else if(t<CU.c2){flash(t,CU.c1,0.15);arms(1);SH.S.visible=false;putGuy(LS.S,GX,0,GZ,0.2);const j=Math.abs(Math.sin((t-CU.c1)*6));guy.pose({...idle(t),armL:[2.7,0],armR:[2.7,0],jump:0.25*j,legL:[0.3*j,0.6*j,0],legR:[0.3*j,0.6*j,0],mouth:'grin',headPitch:-0.2});
    const k=ease(seg(t,CU.c1,CU.c2));shotLS([lerp(70,70.6,k),1.4,301],[-10,lerp(52,58,k),0]);pill('SPACEX DID IT!',W/2,330,66,'#FFD23F','#111',t,4.0,CU.c2);pill('NOV 14, 2026',W/2,450,48,'#FFFFFF','#111',t,4.4,CU.c2);comic('YESSS!',W*0.7,1650,100,t,4.3,{life:0.9,rot:0.1,fill:'#5BE37A'})}
  else if(t<CU.c2b){flash(t,CU.c2,0.15);setBG('#05061A');const u=seg(t,CU.c2,CU.c2b);holder.visible=false;
    SH2.glow.visible=true;SH2.glow.material.opacity=0.25+0.25*u+0.08*Math.sin(t*30);const sx=lerp(-120,20,u),sy=lerp(140,70,u);shipAt(SH2,sx,sy,0,PI/2+0.3);SP.cam.position.set(sx+90,sy+60,260);SP.cam.lookAt(sx-20,sy-40,0);r.setClearColor(0,0);r.render(SP.S,SP.cam);
    SH2.S.updateMatrixWorld(true);const p=proj(SH2.body.localToWorld(new THREE.Vector3(0,25,0)),SP.cam);
    if(t>6.0){g.save();g.globalAlpha=seg(t,6.0,6.3);g.strokeStyle='#FFD23F';g.lineWidth=8;g.setLineDash([16,10]);g.beginPath();g.arc(p[0],p[1],150,0,7);g.stroke();g.restore();txtA('50 M',p[0],p[1]-200,72,seg(t,6.0,6.3),{fill:'#FFD23F',sw:14})}
    speedo(W/2,330,lerp(0,27000,easeOut(seg(t,CU.c2,7.4))),'#FF7A2A');pill('≈ 15-STORY BUILDING',W/2,1640,54,'#FFFFFF','#111',t,6.3,CU.c2b)}
  else if(t<CU.c3){flash(t,CU.c2b,0.12);SH.S.visible=false;arms(1);putGuy(LS.S,GX,0,GZ,-0.6);guy.pose({...idle(t),armR:[2.4,-1.2],bendR:1.6,armL:[0.4,0],headPitch:-0.6,lookY:1,mouth:'o',mouthSize:0.8,wide:true});
    shotLS([70,1.5,300],[-10,48,0],'linear-gradient(#0B0B2E 0%,#2A1A5A 50%,#7A3A7A 100%)');
    // fiery streak in the sky
    const u=seg(t,CU.c2b,CU.c3);const sx=lerp(W*0.15,W*0.8,u),sy=lerp(260,520,u);g.save();const gr=g.createLinearGradient(sx-420,sy-160,sx,sy);gr.addColorStop(0,'rgba(255,120,40,0)');gr.addColorStop(1,'rgba(255,200,90,0.95)');g.strokeStyle=gr;g.lineWidth=22;g.lineCap='round';g.beginPath();g.moveTo(sx-420,sy-160);g.lineTo(sx,sy);g.stroke();g.fillStyle='#FFF2B0';g.beginPath();g.arc(sx,sy,22,0,7);g.fill();g.restore();
    speedo(W/2,760,27000,'#FF7A2A');pill('PLASMA GLOW',W/2,1640,60,'#FF7A2A','#fff',t,8.6,CU.c3);comic('WHOOSH',W*0.3,1100,90,t,8.3,{life:0.8,rot:-0.1,fill:'#FFD23F'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);holder.visible=false;cloudsAt(t);shipAt(SH3,0,0,0,PI/2);SH3.S.rotation.x=0.15*Math.sin(t*2);
    CL.cam.position.set(-22,-50,175);CL.cam.lookAt(-22,0,0);setBG('linear-gradient(#5FA8FF,#BFE3FF)');r.setClearColor(0,0);r.render(CL.S,CL.cam);
    const v=lerp(27000,300,easeOut(seg(t,CU.c3,12.3)));speedo(W/2,330,v,'#3FF0FF');pill('BELLY FLOP: AIR = BRAKES',W/2,1640,52,'#3FF0FF','#111',t,11.0,CU.c4);
    arrow(W*0.5,1250,W*0.5,1040,'#3FF0FF',22);txtA('AIR',W*0.5,1310,56,1,{fill:'#BFE9FF',sw:12});if(t>11.9)txtA('-99% SPEED',W/2,520,74,seg(t,11.9,12.2),{fill:'#FFD23F',sw:16})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);arms(1);holder.visible=false;const fl=seg(t,CU.c4,13.6);const y=lerp(150,62,easeOut(seg(t,13.0,16.0)));
    shipAt(SH,0,y,0,lerp(PI/2,0,ease(fl)));SH.S.position.x=lerp(20,0,ease(fl));SH.fl.visible=t>13.4;SH.fl.scale.setScalar(1+0.12*Math.sin(t*40));
    shotLS([70,70,140],[-4,y+12,0]);const v=t<13.4?300:lerp(300,0,easeOut(seg(t,13.4,15.9)));speedo(W/2,330,v,'#5BE37A');
    pill('FLIP!',W*0.3,560,70,'#FF3DA6','#fff',t,12.9,14.2);if(t>15.4)pill('≈ HOVER',W/2,1640,66,'#5BE37A','#111',t,15.4,CU.c5);comic('FWOOOSH',W*0.7,1150,90,t,13.5,{life:1.0,rot:0.08,fill:'#FFB347'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);const cl=easeOut(seg(t,16.6,17.2));arms(1-cl);shipAt(SH,0,62,0,0);SH.fl.visible=t<16.9;
    const k=ease(seg(t,CU.c5,CU.c6));if(t<17.6){holder.visible=false;shotLS([70,112,130],[-4,90,0])}
    else{const j=Math.abs(Math.sin((t-17.6)*6));putGuy(LS.S,GX,0,GZ,0.1);guy.pose({...idle(t),armL:[2.8,0],armR:[2.8,0],jump:0.3*j,legL:[0.3*j,0.6*j,0],legR:[0.3*j,0.6*j,0],mouth:'grin',headPitch:-0.25});shotLS([70,1.3,300.5],[-10,58,0])}
    if(t>17.2&&t<17.6){const p=proj(new THREE.Vector3(0,96,0),LS.cam);const s=pop(t,17.2);g.save();g.translate(p[0],p[1]);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=20;g.beginPath();g.arc(0,0,170,0,7);g.stroke();g.strokeStyle='#5BE37A';g.lineWidth=10;g.stroke();g.restore()}
    comic('CLAMP!',W*0.5,560,130,t,17.15,{life:0.8,rot:-0.06,fill:'#5BE37A'});pill('CAUGHT!',W/2,1640,72,'#5BE37A','#111',t,17.6,CU.c6)}
  else{const tt=t-TT;openScene(tt);SH.S.visible=false;const k=ease(seg(t,CU.c6,TT-0.1));shotLS(mix([70.8,2.2,303],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
