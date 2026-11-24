// ===== What would happen if you trained in 100 times gravity like in Dragon Ball? (pop culture / what-if) =====
const TT=21.65;
const CU={c1:4.35,c2:7.5,c3:9.4,c4:12.62,c5:13.9,c6:16.95,c7:20.05};
guy.outfit({bandana:1});
// ---------- high-tech training room ----------
const GR={S:new THREE.Scene()};lights(GR.S);GR.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);const GL=GR.S.children.filter(c=>c.isLight);
part(GR.S,new THREE.PlaneGeometry(30,30),toon(0x2B2F3A),[0,0,0],[1,1,1],[-PI/2,0,0],0);
for(let i=-10;i<=10;i++){part(GR.S,new THREE.PlaneGeometry(30,0.03),basic(0x2FA7B0),[0,0.005,i*1.5],[1,1,1],[-PI/2,0,0],0);part(GR.S,new THREE.PlaneGeometry(0.03,30),basic(0x2FA7B0),[i*1.5,0.005,0],[1,1,1],[-PI/2,0,0],0)}
part(GR.S,new THREE.PlaneGeometry(30,12),toon(0x3A4050),[0,6,-4],[1,1,1],[0,0,0],0);part(GR.S,new THREE.PlaneGeometry(20,12),toon(0x333848),[-5,6,4],[1,1,1],[0,PI/2,0],0);part(GR.S,new THREE.PlaneGeometry(20,12),toon(0x333848),[6,6,4],[1,1,1],[0,-PI/2,0],0);
const STRIP=basic(0x3FF0FF);for(const y of [0.25,5.2])part(GR.S,new THREE.BoxGeometry(30,0.12,0.06),STRIP,[0,y,-3.95],[1,1,1],[0,0,0],0);
for(let k=-4;k<=4;k++)if(Math.abs(k)>1)part(GR.S,new THREE.BoxGeometry(1.3,3.4,0.12),toon(0x4A5266),[k*1.6,2.3,-3.92],[1,1,1],[0,0,0],0.01);
const SCR=canvasTex(512,300);part(GR.S,new THREE.BoxGeometry(3.4,2.0,0.1),toon(0x15151C),[-2.6,2.7,-3.9],[1,1,1],[0,0,0],0.01);part(GR.S,new THREE.PlaneGeometry(3.2,1.85),new THREE.MeshBasicMaterial({map:SCR.tx}),[-2.6,2.7,-3.84],[1,1,1],[0,0,0],0);
const ALARM=[];for(const x of [-3.6,3.6]){const m=basic(0x551111);ALARM.push(m);part(GR.S,SPH,m,[x,4.4,-3.85],[0.28,0.28,0.18],[0,0,0],0.01)}
function screen(gv,col){const c=SCR.ctx;c.fillStyle='#0A0F1A';c.fillRect(0,0,512,300);c.strokeStyle=col;c.lineWidth=8;c.strokeRect(14,14,484,272);c.fillStyle=col;c.font='900 150px Inter';c.textAlign='center';c.textBaseline='middle';c.fillText(gv+' G',256,165);c.font='900 34px Inter';c.fillText('GRAVITY',256,50);SCR.tx.needsUpdate=true}
const SCALE=new THREE.Group();GR.S.add(SCALE);SCALE.visible=false;part(SCALE,new THREE.BoxGeometry(1.5,0.16,1.3),toon(0xF4F4F8),[0,0.08,0],[1,1,1],[0,0,0],0.012);part(SCALE,new THREE.BoxGeometry(0.5,0.02,0.22),toon(0x22222C),[0,0.17,0.48],[1,1,1],[0,0,0],0);
function grMood(alarm,t){for(const l of GL){l.color.set(alarm?0xFF8888:0xffffff);l.intensity=(l.isHemisphereLight?1.5:2.2)*(alarm?0.8:1)}const on=alarm&&Math.sin(t*14)>0;for(const m of ALARM)m.color.set(on?0xFF2020:0x551111);STRIP.color.set(alarm?0xFF3030:0x3FF0FF)}
function grShot(p,l,bgc){GR.cam.position.set(...p);GR.cam.lookAt(...l);setBG(bgc||'#1A1F2C');r.setClearColor(0,0);r.render(GR.S,GR.cam)}
function stand(sc,x,y,z,ry){sc.add(holder);holder.rotation.order='XYZ';holder.position.set(x,y,z);holder.rotation.set(0,ry,0);holder.scale.setScalar(1);holder.visible=true}
// ---------- savanna seesaw ----------
const SV={S:new THREE.Scene()};lights(SV.S);SV.cam=new THREE.PerspectiveCamera(30,W/H,0.1,300);
part(SV.S,new THREE.PlaneGeometry(300,300),toon(0xD9B56A),[0,0,0],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<14;i++){const tr=new THREE.Group();tr.position.set((hash(i*3)-0.5)*80,0,-20-hash(i*7)*40);SV.S.add(tr);part(tr,cap(0.2,3.2),toon(0x7A4E2A),[0,1.6,0]);part(tr,SPH,toon(0x5E8A3A),[0,3.4,0],[2.4,0.45,1.6],[0,0,0],0.02)}
const SAW=new THREE.Group();SV.S.add(SAW);part(SAW,new THREE.ConeGeometry(0.6,1.0,4),toon(0x8C5E36),[0,0.5,0],[1,1,0.7],[0,PI/4,0],0.012);part(SAW,new THREE.BoxGeometry(5.6,0.14,0.8),toon(0xE0574F),[0,1.07,0],[1,1,1],[0,0,0],0.012);
function makeEle(){const e=new THREE.Group();const G=toon(0x9AA0AA),D=toon(0x7D838E),K=basic(0x111111);
  part(e,SPH,G,[0,1.75,0],[1.25,0.85,0.8],[0,0,0],0.02);part(e,SPH,G,[1.25,2.15,0],[0.6,0.55,0.5],[0,0,0],0.016);
  part(e,cap(0.15,0.45),G,[1.82,1.62,0],[1,1,1],[0,0,0.25],0.012);part(e,cap(0.12,0.4),G,[1.92,1.15,0],[1,1,1],[0,0,0.05],0.01);part(e,cap(0.09,0.22),G,[2.0,0.8,0],[1,1,1],[0,0,-0.5],0.008);
  for(const s of [-1,1]){part(e,SPH,D,[1.0,2.2,s*0.48],[0.45,0.55,0.08],[0,s*0.3,0],0.01);part(e,SPH,K,[1.62,2.32,s*0.33],[0.05,0.06,0.04],[0,0,0],0);part(e,cap(0.045,0.3),toon(0xFFFDF0),[1.72,1.72,s*0.2],[1,1,1],[0,0,1.2],0.006)}
  for(const [x,z] of [[0.7,0.4],[0.7,-0.4],[-0.7,0.4],[-0.7,-0.4]])part(e,new THREE.CylinderGeometry(0.24,0.26,1.1,16),G,[x,0.55,z],[1,1,1],[0,0,0],0.012);
  part(e,cap(0.04,0.5),G,[-1.3,1.6,0],[1,1,1],[0,0,-0.4],0.006);return e}
const ELE=makeEle();SAW.add(ELE);ELE.scale.setScalar(0.85);ELE.position.set(1.75,1.14,0);ELE.rotation.y=PI;
// ---------- centrifuge hall ----------
const CF={S:new THREE.Scene()};lights(CF.S);CF.cam=new THREE.PerspectiveCamera(32,W/H,0.1,200);
part(CF.S,new THREE.CircleGeometry(16,48),toon(0x5A6170),[0,0,0],[1,1,1],[-PI/2,0,0],0);part(CF.S,new THREE.RingGeometry(9.2,9.5,64),basic(0xFFD23F),[0,0.01,0],[1,1,1],[-PI/2,0,0],0);
{const wt=canvasTex(1024,256);const c=wt.ctx;for(let i=0;i<16;i++){c.fillStyle=i%2?'#2E3446':'#3A4258';c.fillRect(i*64,0,64,256);c.fillStyle=i%4?'#FFD23F':'#3FF0FF';c.fillRect(i*64+8,120,48,10)}wt.tx.wrapS=THREE.RepeatWrapping;wt.tx.repeat.set(3,1);
  const m=new THREE.MeshBasicMaterial({map:wt.tx,side:THREE.BackSide});const cyl=new THREE.Mesh(new THREE.CylinderGeometry(15,15,10,48,1,true),m);cyl.position.y=5;CF.S.add(cyl)}
const RIG=new THREE.Group();CF.S.add(RIG);part(RIG,new THREE.CylinderGeometry(0.8,1.0,1.8,24),toon(0x8892A6),[0,0.9,0],[1,1,1],[0,0,0],0.016);part(RIG,new THREE.BoxGeometry(7.2,0.35,0.5),toon(0xE84B3C),[3.6,1.6,0],[1,1,1],[0,0,0],0.014);
const POD=new THREE.Group();POD.position.set(7.4,0,0);RIG.add(POD);part(POD,new THREE.SphereGeometry(1,28,14,0,PI*2,PI/2,PI/2),toon(0xFF7A1A),[0,1.4,0],[1.0,0.9,1.0],[0,0,0],0.014);part(POD,new THREE.BoxGeometry(0.7,0.12,0.7),toon(0x22222C),[0,0.92,0],[1,1,1],[0,0,0],0.008);
// ---------- 2D helpers ----------
function gauge(x,y,R,v,max,col,label){g.save();g.translate(x,y);g.fillStyle='rgba(10,12,25,0.9)';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();
  g.strokeStyle='rgba(255,255,255,0.22)';g.lineWidth=R*0.13;g.beginPath();g.arc(0,0,R*0.78,PI*0.75,PI*2.25);g.stroke();g.strokeStyle=col;g.beginPath();g.arc(0,0,R*0.78,PI*0.75,PI*0.75+PI*1.5*clamp(v/max));g.stroke();
  const a=PI*0.75+PI*1.5*clamp(v/max);g.strokeStyle='#fff';g.lineWidth=10;g.lineCap='round';g.beginPath();g.moveTo(0,0);g.lineTo(Math.cos(a)*R*0.68,Math.sin(a)*R*0.68);g.stroke();g.fillStyle='#fff';g.beginPath();g.arc(0,0,12,0,7);g.fill();g.restore();
  txt(String(Math.round(v))+' G',x,y+R*0.45,R*0.38,{stroke:0,fill:'#fff'});if(label)txt(label,x,y+R*0.75,R*0.15,{stroke:0,fill:'#B8C0D8'})}
function cracks(x,y,s,f,seed=1){if(f<=0)return;g.save();g.strokeStyle='#111';g.lineWidth=7;g.lineCap='round';for(let i=0;i<9;i++){const a=hash(i*3.3+seed)*PI*2;let px=x,py=y;g.beginPath();g.moveTo(px,py);for(let k=0;k<4;k++){const L=s*f*(0.4+hash(i*7+k+seed));px+=Math.cos(a+(hash(i+k*5)-0.5)*0.9)*L;py+=Math.sin(a+(hash(i+k*5)-0.5)*0.9)*L*0.45;g.lineTo(px,py)}g.stroke()}g.restore()}
function sweat(x,y,t){for(let k=0;k<3;k++){const ph=((t*1.4+k/3)%1);g.save();g.globalAlpha=1-ph;g.translate(x+k*50-50,y+ph*90);g.fillStyle='#7FD3FF';g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.moveTo(0,-22);g.quadraticCurveTo(16,6,0,12);g.quadraticCurveTo(-16,6,0,-22);g.fill();g.stroke();g.restore()}}
function stars(x,y,t){for(let i=0;i<5;i++){const a=t*4+i/5*PI*2;const px=x+Math.cos(a)*120,py=y+Math.sin(a)*40;g.save();g.translate(px,py);g.rotate(t*3);g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=4;g.beginPath();for(let k=0;k<10;k++){const rr0=k%2?12:28;g.lineTo(Math.cos(k*PI/5)*rr0,Math.sin(k*PI/5)*rr0)}g.closePath();g.fill();g.stroke();g.restore()}}
function bodyDiagram(t,gv,flow){const cx=W/2,cy=900;g.save();g.fillStyle='#F4C9A8';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.arc(cx,cy-390,120,0,7);g.fill();g.stroke();
  g.beginPath();g.moveTo(cx-170,cy-230);g.quadraticCurveTo(cx,cy-280,cx+170,cy-230);g.lineTo(cx+190,cy+120);g.lineTo(cx+110,cy+130);g.lineTo(cx+110,cy+420);g.lineTo(cx-110,cy+420);g.lineTo(cx-110,cy+130);g.lineTo(cx-190,cy+120);g.closePath();g.fill();g.stroke();
  const br=lerp(1,0.15,clamp(1-flow));g.fillStyle=`rgba(255,130,170,${0.3+0.7*br})`;g.beginPath();g.ellipse(cx,cy-410,80,55,0,0,7);g.fill();g.lineWidth=6;g.stroke();if(br<0.4)txt('NO BLOOD',cx,cy-560,48,{fill:'#9AA0AA',sw:10});
  g.strokeStyle='#C0392B';g.lineWidth=16;g.beginPath();g.moveTo(cx,cy-140);g.lineTo(cx,cy-370);g.stroke();g.beginPath();g.moveTo(cx,cy-60);g.lineTo(cx,cy+400);g.stroke();
  const beat=1+0.12*Math.max(0,Math.sin(t*2*PI*1.6));heart(cx,cy-100,0.9*beat,'#E23B3B');
  for(let i=0;i<10;i++){let ph=((t*0.9+i/10)%1);let yy;if(flow>0){yy=lerp(cy-130,cy-370,ph);g.globalAlpha=flow}else{yy=lerp(cy-60,cy+400,ph);g.globalAlpha=1}g.fillStyle='#FF2A2A';g.beginPath();g.arc(cx,yy,14,0,7);g.fill();g.globalAlpha=1}
  if(flow<1)for(let i=0;i<10;i++){const ph=((t*0.9+i/10)%1);g.globalAlpha=1-flow;g.fillStyle='#FF2A2A';g.beginPath();g.arc(cx,lerp(cy-60,cy+400,ph),14,0,7);g.fill();g.globalAlpha=1}
  g.restore()}
// ---------- opening: training punches ----------
const C0={p:[2.4,1.9,7.4],l:[0,1.3,0]};
function openScene(t){grMood(false,t);screen(1,'#3FF0FF');SCALE.visible=false;stand(GR.S,0,0,0,0.35);const ph=(t*2*PI/0.6),s=Math.sin(ph),L=s>0,ex=Math.abs(s);
  const eL=L?ex:0,eR=L?0:ex;guy.pose({reachL:[0.26-0.1*eL,1.4+0.06*eL,0.3+0.75*eL],reachR:[-0.26+0.1*eR,1.4+0.06*eR,0.3+0.75*eR],poleL:[1,-0.6,-0.3],poleR:[-1,-0.6,-0.3],legL:[0.25,0.25,0,0.12],legR:[-0.2,0.25,0,-0.12],jump:-0.03+0.02*Math.sin(ph*2),mouth:'teeth',blink:BLINK(t),headPitch:0.05,yaw:0.15*s})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;SCALE.visible=false;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.2,CU.c1));grShot(mix(C0.p,[2.1,1.8,6.6],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT IF YOU TRAINED IN',W/2,190,66,{sw:14});txt('100× GRAVITY',W/2,300,124,{fill:'#FFD23F',sw:24});txt('LIKE IN DRAGON BALL?',W/2,415,74,{sw:15});g.restore();
    comic('HYAH!',W*0.76,760,90,t,1.2,{life:0.8,rot:0.12,fill:'#FF7A1A'});comic('HUP!',W*0.24,1130,80,t,2.6,{life:0.7,rot:-0.12,fill:'#3FF0FF'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);const heavy=t>6.45;grMood(false,t);screen(heavy?100:1,heavy?'#FF4A4A':'#3FF0FF');SCALE.visible=true;stand(GR.S,0,0.16,0,0.25);
    const f=easeOut(seg(t,6.45,6.9));guy.pose({armL:[0.3+0.9*f,0],armR:[0.3+0.9*f,0],legL:[0.5*f,0.9*f,-0.4*f,0.15],legR:[0.5*f,0.9*f,-0.4*f,-0.15],jump:-0.22*f,mouth:heavy?'teeth':'smile',wide:heavy,blink:BLINK(t),lookY:heavy?0:-0.8,headPitch:heavy?0:0.25});
    const sh=heavy?0.03*Math.sin(t*60)*(1-seg(t,6.9,7.4)):0;grShot([2.0+sh,1.9,7.2],[-0.3,1.2+sh,0]);const [fx,fy]=proj(new THREE.Vector3(0,0.1,0),GR.cam);cracks(fx,fy+20,180,f,3);
    panel(W/2,330,700,200,'rgba(10,12,25,0.9)',heavy?'#FF4A4A':'#5BE37A',36);txt(heavy?Math.round(lerp(70,7000,easeOut(seg(t,6.45,7.0)))).toLocaleString('en-US')+' KG':'70 KG',W/2,330,112,{stroke:0,fill:heavy?'#FF4A4A':'#5BE37A'});
    pill('×100',W*0.78,520,84,'#FFD23F','#111',t,6.5,CU.c2);if(heavy)sweat(W/2+150,640,t);comic('CREAK!',W*0.25,1150,90,t,6.6,{life:0.8,rot:-0.12,fill:'#FF7A1A'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);setBG('day');SV.S.add(holder);SAW.add(holder);holder.rotation.order='XYZ';holder.position.set(-2.25,0.6,0);holder.rotation.set(0,0.2,0);holder.scale.setScalar(1);
    guy.pose({...SIT,armL:[0.3,0],armR:[0.3,0],mouth:'o',mouthSize:0.6,wide:true,blink:BLINK(t),look:0.6});const tilt=0.12*Math.cos((t-CU.c2)*7)*Math.exp(-(t-CU.c2)*2.2);SAW.children[1].rotation.z=0;SAW.rotation.set(0,0,0);
    SV.cam.position.set(0.1,2.6,22);SV.cam.lookAt(0.1,1.9,0);r.setClearColor(0,0);
    // seesaw plank + riders tilt together
    SAW.children.forEach((c,i)=>{if(i>0)c.rotation.z=tilt});holder.position.set(-2.25*Math.cos(tilt),0.6-2.25*Math.sin(tilt)+0.47*(1-Math.cos(tilt)),0);ELE.position.set(1.75*Math.cos(tilt),1.14+1.75*Math.sin(tilt),0);ELE.rotation.set(0,PI,-tilt);
    r.render(SV.S,SV.cam);pill('7 TONNES',W/2,330,84,'#FFD23F','#111',t,7.6,CU.c3);pill('= 1 BIG ELEPHANT',W/2,470,60,'#FFFFFF','#111',t,8.3,CU.c3);comic('BALANCED!',W*0.5,1150,84,t,8.9,{life:0.6,rot:-0.06,fill:'#5BE37A'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);clear3d();g.fillStyle='#3A0B1E';g.fillRect(0,0,W,H);const gv=lerp(1,5,ease(seg(t,9.5,10.4)));const flow=1-seg(t,10.9,11.8);
    bodyDiagram(t,gv,flow);gauge(W-200,360,140,gv,10,gv>4?'#FF4A4A':'#5BE37A','G-FORCE');if(t>10.4){g.save();g.globalAlpha=easeOut(seg(t,10.4,10.7));arrow(170,560,170,1150,'#FFD23F',40);g.restore();txt('PULL',170,1230,52,{fill:'#FFD23F',sw:12})}
    comic('UGH!',W*0.75,700,90,t,11.4,{life:0.8,rot:0.12,fill:'#FF7A1A'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);grMood(false,t);screen(5,'#FF4A4A');const f=ease(seg(t,12.8,13.4));stand(GR.S,0,0.44*f,0.0,0.35);holder.rotation.x=-PI/2*f;
    guy.pose({armL:[0.3+1.0*f,0],armR:[0.3+1.0*f,0],mouth:'o',mouthSize:0.7,blink:t>13.0,wide:t<13.0,headRoll:0.2*Math.sin(t*9)*(1-f)});grShot([2.6,2.4,6.6],[0,0.9,-0.2]);
    const d=seg(t,12.65,13.75);const vg=g.createRadialGradient(W/2,H/2,lerp(H*0.7,60,d),W/2,H/2,lerp(H*0.95,H*0.3,d));vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,0.97)');g.fillStyle=vg;g.fillRect(0,0,W,H);
    comic('THUD!',W*0.7,1050,96,t,13.35,{life:0.5,rot:0.12,fill:'#FF7A1A'});txtA('BLACKOUT',W/2,330,110,easeOut(seg(t,13.1,13.4)),{fill:'#9AA0AA',sw:20})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);setBG('#1E2333');const u=t-CU.c5;const A=-(u*2.6+u*u*0.25);RIG.rotation.y=A;POD.add(holder);holder.rotation.order='XYZ';holder.position.set(0,0.6,0);holder.rotation.set(0,PI,0);holder.scale.setScalar(1);
    guy.pose({...SIT,armL:[0.4,-0.9],armR:[0.4,-0.9],bendL:0.8,bendR:0.8,mouth:'teeth',blink:false,headRoll:-0.12,lookY:0.2});
    const P=new THREE.Vector3(7.4*Math.cos(A),1.6,-7.4*Math.sin(A));const ca=A+0.55;CF.cam.position.set(13.2*Math.cos(ca),5.6,-13.2*Math.sin(ca));CF.cam.lookAt(P.x*0.93,P.y+0.1,P.z*0.93);r.setClearColor(0,0);r.render(CF.S,CF.cam);
    const gv=lerp(1,9,ease(seg(t,14.3,16.4)));gauge(W/2,370,150,gv,10,gv>8?'#FF4A4A':'#FFD23F','FIGHTER PILOT');pill('G-SUIT',W*0.78,600,60,'#5BE37A','#111',t,14.9,16.3);pill('MAX ≈ 9 G',W/2,600,70,'#FF4A4A','#fff',t,16.3,CU.c6);
    comic('WHOOOSH',W*0.28,1150,80,t,14.1,{life:1.0,rot:-0.12,fill:'#3FF0FF'})}
  else if(t<CU.c7){flash(t,CU.c6,0.15);const big=t>17.2;grMood(big,t);screen(big?100:9,big?'#FF2020':'#FFD23F');stand(GR.S,0,0.44,0.2,0.0);holder.rotation.x=-PI/2;
    guy.pose({armL:[1.2,0],armR:[1.2,0],legL:[0,0,0,0.25],legR:[0,0,0,-0.25],mouth:'o',mouthSize:0.5,blink:true});grShot([0.3,7.5,3.2],[0,0.3,-0.6],big?'#2A0A0A':'#1A1F2C');
    const [fx,fy]=proj(new THREE.Vector3(0,0,-0.7),GR.cam);cracks(fx,fy,300,easeOut(seg(t,17.25,17.7)),7);const [hx,hy]=proj(new THREE.Vector3(0,0.6,-1.7),GR.cam);if(t>18.3)stars(hx,hy-60,t);
    gauge(W/2,380,150,lerp(9,100,easeOut(seg(t,17.15,17.75))),100,'#FF2020','GRAVITY');pill('OUT COLD',W/2,620,80,'#FFFFFF','#111',t,18.4,CU.c7);comic('K.O.',W*0.74,1080,130,t,18.9,{life:0.9,rot:0.12,fill:'#FF4A4A'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c7,TT-0.2));grShot(mix([3.4,2.4,9.2],C0.p,k),C0.l);flash(t,CU.c7,0.15)}
  vignette();captions(t)};
