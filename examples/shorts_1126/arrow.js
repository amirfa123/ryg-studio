// ===== How far could you really shoot an arrow in the Hunger Games? (pop culture) =====
const TT=20.8;
const CU={c1:3.38,c2:7.05,c3:9.35,c4:12.55,c5:14.05,c6:16.15,c7:19.15};
guy.outfit({bandana:1});
// ---- forest arena (original) ----
const F={S:new THREE.Scene()};lights(F.S);F.S.fog=new THREE.Fog(0xBFE3C8,30,140);F.cam=new THREE.PerspectiveCamera(30,W/H,0.1,400);
part(F.S,new THREE.PlaneGeometry(600,200),toon(0x6DBE5A),[100,0,0],[1,1,1],[-PI/2,0,0],0);
part(F.S,new THREE.PlaneGeometry(600,3),toon(0xC9A66B),[100,0.01,0],[1,1,1],[-PI/2,0,0],0);
const TREES=[];for(let i=0;i<120;i++){const x=-30+hash(i*2.3)*220,side=i%2?1:-1,z=side*(4+hash(i*4.1)*22);const tr=new THREE.Group();tr.position.set(x,0,z);tr.scale.setScalar(0.9+hash(i*6.6)*0.9);F.S.add(tr);
  part(tr,cap(0.16,1.0),toon(0x7A4E2A),[0,0.5,0]);for(let k=0;k<3;k++)part(tr,new THREE.ConeGeometry(1.2-k*0.3,1.5,8),toon([0x2F7D4A,0x3A9A57,0x2A6B40][(i+k)%3]),[0,1.4+k*0.85,0],[1,1,1],[0,0,0],0.012)}
for(let i=0;i<8;i++)part(F.S,new THREE.ConeGeometry(14+hash(i)*6,16+hash(i*3)*8,6),toon(0x8FB8D9),[-60+i*40,7,-80],[1,1,1],[0,hash(i)*2,0],0.02);
for(let i=0;i<14;i++)part(F.S,SPH,toon(0x9A9AA6),[hash(i*5)*100-10,0.1,(i%2?1:-1)*(2.2+hash(i)*1.5)],[0.35,0.22,0.3],[0,i,0],0.01);
// target at 70 m (drawn 2x size so it reads)
const tgT=canvasTex(256,256);{const c=tgT.ctx;const cols=['#FFFFFF','#FFFFFF','#222222','#222222','#3FA9FF','#3FA9FF','#FF3D3D','#FF3D3D','#FFD23F','#FFD23F'];for(let i=0;i<10;i++){c.fillStyle=cols[i];c.beginPath();c.arc(128,128,128-i*12.8,0,7);c.fill();c.strokeStyle='#111';c.lineWidth=2;c.stroke()}}
const TG=new THREE.Group();TG.position.set(70,0,0);F.S.add(TG);part(TG,new THREE.CylinderGeometry(1.2,1.2,0.3,40),tmat(0xffffff,tgT.tx),[0,1.6,0],[1,1,1],[0,0,PI/2],0.012);
for(const z of [-0.6,0.6])part(TG,cap(0.07,2.0),toon(0x7A4E2A),[0.4,1.0,z],[1,1,1],[0,0,0.3]);
// arrow model
function mkArrow(){const a=new THREE.Group();part(a,new THREE.CylinderGeometry(0.02,0.02,0.85,8),toon(0x8B5A2B),[0,0,0],[1,1,1],[0,0,PI/2],0.004);part(a,new THREE.ConeGeometry(0.05,0.14,8),toon(0xBFC3CC),[0.48,0,0],[1,1,1],[0,0,-PI/2],0.004);
  for(let k=0;k<3;k++){const f=new THREE.Group();f.rotation.x=k*PI*2/3;a.add(f);part(f,new THREE.BoxGeometry(0.16,0.07,0.005),toon(0xFF3D3D),[-0.36,0.045,0],[1,1,1],[0,0,0],0)}return a}
const AR=mkArrow();F.S.add(AR);const AR2=mkArrow();F.S.add(AR2);
// bow (prop on the guy) and foot bow (world)
function mkBow(s=1){const b=new THREE.Group();part(b,new THREE.TorusGeometry(0.55*s,0.03*s,8,30,PI*0.75),toon(0x5A3B24),[0,0,0],[1,1,1],[0,0,PI-PI*0.375],0.006);
  const tipA=[Math.cos(PI-PI*0.375)*0.55*s,Math.sin(PI-PI*0.375)*0.55*s];part(b,new THREE.CylinderGeometry(0.006,0.006,2*tipA[1]+0.01,6),basic(0xF5F0E0),[tipA[0],0,0],[1,1,1],[0,0,0],0);return b}
const BOW=mkProp('bow',p=>{const b=mkBow(1);b.rotation.y=PI/2;b.position.set(0,0,0);p.add(b)});
const FBOW=mkBow(1.25);F.S.add(FBOW);FBOW.visible=false;
function stand(t,o={},x=0,ry=PI/2){F.S.add(holder);holder.rotation.order='XYZ';holder.position.set(x,0,0);holder.rotation.set(0,ry,0);holder.scale.setScalar(1);
  props.bow.visible=true;props.bow.position.set(0.32,1.2,0.62);guy.pose({reachL:[0.32,1.2,0.6],reachR:[0.05,1.25,0.1],blink:BLINK(t),mouth:'smile',look:0,...o})}
function fShot(p,l){F.cam.position.set(...p);F.cam.lookAt(...l);setBG('linear-gradient(#4FB8FF,#9BDCFF 60%,#E9F7FF)');r.setClearColor(0,0);r.render(F.S,F.cam)}
// ---- 2D ----
function ballIcon(x,y,R){g.save();g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.arc(x,y,R,0,7);g.fill();g.stroke();g.strokeStyle='#E23B3B';g.lineWidth=5;g.beginPath();g.arc(x-R*1.25,y,R,-0.6,0.6);g.stroke();g.beginPath();g.arc(x+R*1.25,y,R,PI-0.6,PI+0.6);g.stroke();g.restore()}
function arrowIcon(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=16;g.beginPath();g.moveTo(-110,0);g.lineTo(80,0);g.stroke();g.strokeStyle='#C98A4B';g.lineWidth=8;g.stroke();
  g.fillStyle='#BFC3CC';g.beginPath();g.moveTo(120,0);g.lineTo(70,-24);g.lineTo(70,24);g.closePath();g.fill();g.lineWidth=6;g.strokeStyle='#111';g.stroke();g.fillStyle='#FF3D3D';for(const s_ of [-1,1]){g.beginPath();g.moveTo(-70,0);g.lineTo(-120,s_*30);g.lineTo(-95,0);g.closePath();g.fill();g.stroke()}g.restore()}
// ---- opening: aiming in the forest ----
const C0={p:[4.2,1.65,6.2],l:[0.45,1.3,0]};
function openScene(t){FBOW.visible=false;AR.visible=true;AR.position.set(0.55,1.25,0.0);AR.rotation.set(0,0,0);AR2.visible=false;
  stand(t,{headYaw:0.0,mouth:'smile',jump:0.01*Math.sin(t*2*PI/1.3),reachR:[0.05,1.25,0.1+0.02*Math.sin(t*2*PI/2.6)]})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;AR.visible=true;AR2.visible=false;FBOW.visible=false;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.15,CU.c1));fShot(mix(C0.p,[3.8,1.6,5.6],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('HOW FAR COULD YOU',W/2,190,76,{sw:15});txt('SHOOT AN',W/2,295,104,{sw:20});txt('ARROW?',W/2,420,128,{fill:'#FFD23F',sw:24});g.restore();
    pill('HUNGER GAMES',W/2,1230,60,'#FF7A1A','#111',t,2.1,CU.c1-0.05)}
  else if(t<CU.c2){flash(t,CU.c1,0.15);const u=t-CU.c1;stand(t,{reachR:u<0.5?[0.05,1.25,0.1]:[-0.25,1.3,-0.1],mouth:u<0.5?'smile':'grin'});
    const ax=u<0.5?0.55:0.55+(u-0.5)*14;AR.position.set(ax,1.25,0);AR.rotation.set(u*20,0,0);
    const cx=Math.max(1.0,ax-0.6);fShot([cx,1.4,4.8],[cx+0.3,1.3,0]);
    const v=lerp(0,90,easeOut(seg(t,4.0,5.6)));panel(W/2,380,560,190,'rgba(10,12,25,0.9)','#5BE37A',36);txt(Math.round(v)+' M/S',W/2,365,100,{stroke:0,fill:'#5BE37A'});txt('ARROW SPEED',W/2,440,36,{stroke:0,fill:'#fff'});
    comic('FWOOSH!',W*0.6,1200,100,t,3.95,{life:1.0,rot:-0.08,fill:'#FFD23F'});pill('≈ 320 KM/H',W/2,1660,58,'#5BE37A','#111',t,6.0,CU.c2)}
  else if(t<CU.c3){flash(t,CU.c2,0.15);clear3d();setBG('radial-gradient(circle at 50% 45%,#1F7A4A,#06301C 75%)');
    const k=seg(t,7.3,9.2);for(let l=0;l<2;l++){const y=l?1000:640;g.fillStyle='rgba(255,255,255,0.12)';g.fillRect(60,y-110,W-120,220);g.strokeStyle='rgba(255,255,255,0.5)';g.setLineDash([24,18]);g.lineWidth=6;g.beginPath();g.moveTo(60,y+110);g.lineTo(W-60,y+110);g.stroke();g.setLineDash([])}
    arrowIcon(lerp(200,900,k),640,1.3);ballIcon(lerp(160,520,k),1000,80);txt('ARROW',200,520,48,{fill:'#5BE37A',sw:10});txt('PRO FASTBALL',300,880,48,{fill:'#fff',sw:10});
    txt('90 M/S',W-210,520,48,{fill:'#5BE37A',sw:10});txt('~45 M/S',W-210,880,48,{fill:'#fff',sw:10});
    pill('2× FASTER',W/2,330,80,'#FFD23F','#111',t,8.1,CU.c3);comic('ZOOM',W*0.7,1240,90,t,7.6,{life:0.9,rot:0.1,fill:'#5BE37A'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);const u=t-CU.c3;const rel=10.9;
    stand(t,{reachR:t<rel?[0.05,1.25,0.1]:[-0.25,1.3,-0.1],mouth:t<rel?'smile':'grin'});
    let ax;if(t<rel)ax=0.55;else ax=Math.min(69.2,0.55+(t-rel)*55);AR.position.set(ax,1.25+(t>rel?Math.sin(clamp((ax-0.55)/68.6)*PI)*1.2:0),0);AR.rotation.set(0,0,t>rel?0.06*Math.cos(clamp((ax-0.55)/68.6)*PI):0);
    const k=ease(seg(t,CU.c3,CU.c4));fShot([lerp(-3.2,-2.6,k),1.95,0.42],[30,1.4,-0.7]);
    const [tx,ty]=proj(new THREE.Vector3(70,1.6,0),F.cam);g.save();g.strokeStyle='#FFD23F';g.lineWidth=8;g.beginPath();g.arc(tx,ty,48,0,7);g.stroke();g.restore();
    pill('70 M',tx,ty-110,60,'#FFD23F','#111',t,10.0,CU.c4);txt('OLYMPIC TARGET',W/2,330,72,{fill:'#fff',sw:15});
    if(ax>=69.2)comic('BULLSEYE!',W*0.5,1240,90,t,rel+1.25,{life:0.9,rot:-0.08,fill:'#FF3D3D'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);AR.visible=false;stand(t,{reachR:[-0.25,1.3,-0.1],mouth:'o',mouthSize:0.9,wide:true,headYaw:0,look:0,blink:false},0,PI/2-1.0);
    fShot([2.2,1.7,5.4],[0.2,1.45,0]);comic('WAIT...',W*0.5,360,120,t,12.65,{life:1.4,rot:-0.06,fill:'#FFD23F'});pill('RECORD FLIGHT?',W/2,1660,60,'#FF7A1A','#111',t,12.8,CU.c5)}
  else if(t<CU.c6){flash(t,CU.c5,0.15);clear3d();setBG('linear-gradient(#4FB8FF,#9BDCFF 60%,#CFEFC0)');
    const gy=1250;g.fillStyle='#6DBE5A';g.fillRect(0,gy,W,H-gy);const x0=90,x1=W-90;const k=easeOut(seg(t,14.2,15.9));
    // trajectory
    g.save();g.strokeStyle='rgba(255,255,255,0.9)';g.setLineDash([20,16]);g.lineWidth=7;g.beginPath();for(let i=0;i<=60*k;i++){const f=i/60;const px=lerp(x0,x1,f),py=gy-Math.sin(f*PI)*520;i?g.lineTo(px,py):g.moveTo(px,py)}g.stroke();g.restore();
    const f=k;const px=lerp(x0,x1,f),py=gy-Math.sin(f*PI)*520;arrowIcon(px,py,0.5);
    // 70 m marker vs 1.8 km
    const m70=lerp(x0,x1,70/1854);g.fillStyle='#FF3D3D';g.fillRect(m70-6,gy-60,12,60);txt('70 M',m70+40,gy+50,40,{fill:'#fff',sw:9});
    for(let i=1;i<=16;i++){const fx=lerp(x0,x1,i*109.7/1854);g.fillStyle='rgba(255,255,255,0.75)';g.fillRect(fx-2,gy+4,4,26)}
    const d=Math.round(1854*k);panel(W/2,380,700,200,'rgba(10,12,25,0.9)','#FFD23F',36);txt(d.toLocaleString('en-US')+' M',W/2,360,110,{stroke:0,fill:'#FFD23F'});txt('WORLD RECORD (1971)',W/2,445,36,{stroke:0,fill:'#fff'});
    pill('≈ 17 FOOTBALL FIELDS',W/2,1660,56,'#FFFFFF','#111',t,15.2,CU.c6);comic('WHAT?!',W*0.8,700,90,t,15.9,{life:0.6,rot:0.12,fill:'#FF7AC2'})}
  else if(t<CU.c7){flash(t,CU.c6,0.15);AR.visible=false;FBOW.visible=true;
    F.S.add(holder);holder.rotation.order='XYZ';holder.position.set(0,0.32,0);holder.rotation.set(-PI/2,0,0);holder.scale.setScalar(1);
    const rel=18.3;guy.pose({legL:[1.25,0.25,0],legR:[1.25,0.25,0],armL:[1.6,0.15],armR:[1.6,-0.15],bendL:t<rel?0.8:0.3,bendR:t<rel?0.8:0.3,mouth:t<rel?'teeth':'grin',blink:BLINK(t),headPitch:-0.3});
    {const d=new THREE.Vector3(0,0.707,0.707);FBOW.setRotationFromMatrix(new THREE.Matrix4().makeBasis(new THREE.Vector3(0,-0.707,-0.707),new THREE.Vector3(1,0,0),new THREE.Vector3(0,-0.707,0.707)));FBOW.position.set(0,0.62,-0.62);
      AR2.visible=true;AR2.quaternion.setFromUnitVectors(new THREE.Vector3(1,0,0),d);const u=Math.max(0,t-rel);AR2.position.set(0,0.95,-0.4).addScaledVector(d,u*12)}
    const k=ease(seg(t,CU.c6,CU.c7));fShot([lerp(7.6,7.1,k),2.4,lerp(0.4,0.1,k)],[0,0.6,-1.05]);
    pill('FOOT BOW',W/2,330,80,'#FF7A1A','#111',t,16.3,CU.c7);comic('PUSH!',W*0.28,1180,90,t,17.6,{life:0.7,rot:-0.1,fill:'#FFD23F'});comic('TWANG!',W*0.7,700,90,t,rel,{life:0.8,rot:0.1,fill:'#5BE37A'})}
  else{const tt=t-TT;openScene(tt);const k=ease(seg(t,CU.c7,TT-0.12));fShot(mix([4.7,1.8,6.9],C0.p,k),C0.l);flash(t,CU.c7,0.15)}
  vignette();captions(t)};
