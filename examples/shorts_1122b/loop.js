// ===== Could a real car drive upside down through a loop like in GTA? (crazy what-if + GTA 6) =====
const TT=21.0;
const CU={c1:4.05,c2:7.2,c3:9.72,c4:14.2,c5:16.2,c6:19.3};
guy.outfit({bandana:1,shades:1,chain:1});
const SKY='linear-gradient(#1E8FE0 0%,#62C3FF 45%,#FFD9A0 85%,#FFB46B 100%)';
// ---- stunt arena (desert) ----
const A={S:new THREE.Scene()};lights(A.S);A.cam=new THREE.PerspectiveCamera(30,W/H,0.1,500);
A.shot=(p,l,bgc=SKY)=>{A.cam.position.set(...p);A.cam.lookAt(...l);setBG(bgc);r.setClearColor(0,0);r.render(A.S,A.cam)};
part(A.S,new THREE.PlaneGeometry(600,400),toon(0xE3A55E),[0,0,0],[1,1,1],[-PI/2,0,0],0);
part(A.S,new THREE.PlaneGeometry(600,3.2),toon(0x4A4660),[0,0.01,0],[1,1,1],[-PI/2,0,0],0);
for(let i=-60;i<60;i++)part(A.S,new THREE.PlaneGeometry(1.4,0.12),basic(0xFFFFFF),[i*3,0.02,0],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<9;i++){const x=-120+i*32+hash(i)*10,h=8+hash(i*3)*10,w=14+hash(i*5)*14;part(A.S,new THREE.BoxGeometry(w,h,10),toon(i%2?0xB8653A:0xC9784A),[x,h/2,-70-hash(i*7)*30],[1,1,1],[0,0,0],0.03);part(A.S,new THREE.BoxGeometry(w+1,1.2,11),toon(0x9C4F2C),[x,h,-70-hash(i*7)*30],[1,1,1],[0,0,0],0)}
// barriers + flags along the back
for(let i=-14;i<14;i++){part(A.S,new THREE.BoxGeometry(2.6,0.9,0.6),toon(i%2?0xFF3B3B:0xFFFFFF),[i*2.8,0.45,-4.2],[1,1,1],[0,0,0],0.015)}
for(let i=-5;i<6;i++){const fp=new THREE.Group();fp.position.set(i*7+2,0,-5.5);A.S.add(fp);part(fp,cap(0.06,5),toon(0xDDDDDD),[0,2.6,0]);part(fp,new THREE.ConeGeometry(0.6,1.6,3),toon([0xFFD23F,0x3FF0FF,0xFF3DA6][(i+9)%3]),[0.75,4.6,0],[1,0.25,1],[0,0,-PI/2],0.01)}
// cacti
for(let i=0;i<10;i++){const x=(hash(i*4.1)-0.5)*120,z=-14-hash(i*2.7)*30;if(Math.abs(x)<14)continue;const cc=new THREE.Group();cc.position.set(x,0,z);A.S.add(cc);const M=toon(0x3E9F5A);part(cc,cap(0.45,3),M,[0,1.8,0],[1,1,1],[0,0,0],0.02);part(cc,cap(0.28,1.2),M,[0.75,2.1,0],[1,1,1],[0,0,0],0.015);part(cc,cap(0.25,0.6),M,[0.45,1.5,0],[1,1,1],[0,0,PI/2],0.015)}
// the loop
function makeLoop(R,col){const L=new THREE.Group();A.S.add(L);
  part(L,new THREE.CylinderGeometry(R+0.02,R+0.02,2.8,120,1,true),new THREE.MeshToonMaterial({color:0x8D8FA8,side:THREE.DoubleSide,gradientMap:GM}),[0,R,0],[1,1,1],[PI/2,0,0],0);
  for(const z of [-1.45,1.45])part(L,new THREE.TorusGeometry(R+0.05,0.12,10,120),toon(col),[0,R,z],[1,1,1],[0,0,0],0.01);
  for(let k=0;k<24;k++){const a=k/24*PI*2;part(L,new THREE.BoxGeometry(0.12,0.12,2.9),toon(0xFFFFFF),[Math.sin(a)*(R+0.12),R-Math.cos(a)*(R+0.12),0],[1,1,1],[0,0,a],0)}
  for(const s of [-1,1]){part(L,new THREE.BoxGeometry(0.5,R*1.0,0.5),toon(0x5A5C70),[s*R*0.98,R*0.5,-2.0],[1,1,1],[0,0,0],0.01)}
  part(L,new THREE.BoxGeometry(0.5,R*2.05,0.5),toon(0x5A5C70),[0,R*1.02,-2.2],[1,1,1],[0,0,0],0.01);part(L,new THREE.BoxGeometry(2*R,0.4,0.4),toon(0x5A5C70),[0,R*2.05,-2.2],[1,1,1],[0,0,0],0.01);
  return L}
const R1=5;const L1=makeLoop(R1,0xFFD23F);
const R2=10;const L2=makeLoop(R2,0x3FF0FF);L2.visible=false;
// three-story building beside the loop (10 m)
const BLD=new THREE.Group();BLD.position.set(-9.5,0,-1.5);A.S.add(BLD);{const tx=winTex(7,0.6);tx.repeat.set(1,0.3);part(BLD,new THREE.BoxGeometry(5,10,5),tmat(0x7FE0D6,tx),[0,5,0],[1,1,1],[0,0,0],0.02);part(BLD,new THREE.BoxGeometry(5.4,0.4,5.4),toon(0x4FA8A0),[0,10.1,0],[1,1,1],[0,0,0],0.01);part(BLD,new THREE.BoxGeometry(1.2,2,0.1),toon(0x5A3B24),[0,1,2.55],[1,1,1],[0,0,0],0)}
BLD.visible=false;
// foam pit inside the loop
const FOAM=new THREE.Group();A.S.add(FOAM);for(let i=0;i<40;i++){const x=(hash(i*1.3)-0.5)*5.2,z=(hash(i*2.9)-0.5)*2.4,y=0.3+0.55*Math.floor(hash(i*5.5)*2);part(FOAM,new THREE.BoxGeometry(0.75,0.6,0.75),toon([0x3F7BFF,0x5BE3FF,0xFFFFFF][i%3]),[x,y,z],[1,1,1],[hash(i)*0.6,hash(i*2)*1.2,hash(i*3)*0.6],0.008)}FOAM.position.set(0.5,0,0);FOAM.visible=false;
// car
const car=makeCar(0xFF7A1A);A.S.add(car.c);const ROOF=car.body[3];
const car2=makeCar(0xFF3DA6);A.S.add(car2.c);car2.c.visible=false;
function seatIn(t,o={}){car.seat.add(holder);holder.position.set(0,0,0);holder.rotation.set(0,PI/2,0);holder.scale.setScalar(1);
  guy.pose({...SIT,armL:[0.9,0.25],armR:[0.9,-0.25],bendL:0.9,bendR:0.9,blink:BLINK(t),mouth:'grin',...o})}
function onLoop(c,th,R,ox=0,oz=0){c.position.set(ox+Math.sin(th)*R,R-Math.cos(th)*R,oz);c.rotation.set(0,0,th)}
function onGround(c,x,z=0){c.position.set(x,0,z);c.rotation.set(0,0,0)}
// ---- 2D ----
function gauge(x,y,R,v,vmax,col){g.save();g.translate(x,y);g.fillStyle='rgba(10,12,25,0.9)';g.strokeStyle='#111';g.lineWidth=12;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();g.strokeStyle=col;g.lineWidth=7;g.beginPath();g.arc(0,0,R-6,0,7);g.stroke();
  const a0=PI*0.75,a1=PI*2.25;g.lineCap='round';g.strokeStyle='rgba(255,255,255,0.18)';g.lineWidth=22;g.beginPath();g.arc(0,0,R*0.72,a0,a1);g.stroke();g.strokeStyle=col;g.beginPath();g.arc(0,0,R*0.72,a0,a0+(a1-a0)*clamp(v/vmax));g.stroke();
  const a=a0+(a1-a0)*clamp(v/vmax);g.strokeStyle='#FF4A4A';g.lineWidth=9;g.beginPath();g.moveTo(0,0);g.lineTo(Math.cos(a)*R*0.62,Math.sin(a)*R*0.62);g.stroke();g.fillStyle='#fff';g.beginPath();g.arc(0,0,12,0,7);g.fill();
  g.restore();txt(Math.round(v)+'',x,y+R*0.42,R*0.42,{stroke:0,fill:'#fff'});txt('KM/H',x,y+R*0.75,R*0.17,{stroke:0,fill:col})}
function bracket(x,y0,y1,label){g.save();g.strokeStyle='#111';g.lineWidth=16;g.lineCap='round';g.beginPath();g.moveTo(x+30,y0);g.lineTo(x,y0);g.lineTo(x,y1);g.lineTo(x+30,y1);g.stroke();g.strokeStyle='#FFD23F';g.lineWidth=8;g.stroke();g.restore();
  g.save();g.translate(x-60,(y0+y1)/2);g.rotate(-PI/2);txt(label,0,0,54,{fill:'#FFD23F',sw:12});g.restore()}
// ---- opening: arena, standing by his car, pointing up at the loop ----
const C0={p:[4.0,3.4,27],l:[0.6,2.4,0]};
function openScene(t){A.S.add(holder);holder.position.set(0.9,0,5.0);holder.rotation.set(0,0.3,0);holder.scale.setScalar(1);
  onGround(car.c,-3.6,1.6);car.spin(0);ROOF.visible=false;
  guy.pose({armL:[0.35+0.05*Math.sin(t*2*PI/2.1),0],armR:[2.7,0.4],bendR:0.3,mouth:'grin',blink:BLINK(t),lookY:0.5,headPitch:-0.2,look:0.25,jump:0.015*Math.sin(t*2*PI/1.05)})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;car.c.visible=true;car2.c.visible=false;L2.visible=false;L1.visible=true;BLD.visible=false;BLD.position.set(-9.5,0,-1.5);FOAM.visible=false;ROOF.visible=false;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));A.shot(mix(C0.p,[3.6,2.9,25],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('COULD A REAL CAR',W/2,215,80,{sw:16});txt('DRIVE A',W/2,315,80,{sw:16});txt('LOOP?',W/2,450,140,{fill:'#FF7A1A',sw:26});g.restore();
    comic('UPSIDE DOWN?!',W*0.5,1180,72,t,2.0,{life:1.5,rot:-0.06,fill:'#FFD23F'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);const k=seg(t,CU.c1,CU.c2);car.spin(t*40);
    if(k<0.25)onGround(car.c,lerp(-22,0,k/0.25));else if(k<0.82)onLoop(car.c,easeInOutLoop((k-0.25)/0.57)*PI*2,R1);else onGround(car.c,lerp(0,9,(k-0.82)/0.18));
    seatIn(t,{armL:[2.6,0.3],armR:[2.6,-0.3],bendL:0.2,bendR:0.2,mouth:'teeth',wide:true});A.shot([2,5.5,34],[0.6,5.2,0]);
    pill('LIKE IN GTA',W/2,330,64,'#FF7A1A','#111',t,4.2,CU.c2);comic('YES!',W*0.25,620,110,t,4.2,{life:0.9,rot:-0.1,fill:'#5BE37A'});comic('WHEEE',W*0.72,1120,84,t,5.6,{life:1.1,rot:0.1,fill:'#FFD23F'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);const th=PI+0.35*Math.sin((t-CU.c2)*1.2-0.6);onLoop(car.c,th,R1);car.spin(t*20);
    seatIn(t,{armL:[2.2,0.4],armR:[2.2,-0.4],bendL:0.3,bendR:0.3,mouth:'grin'});
    const cp=car.c.position;A.shot([cp.x+1.2,cp.y-2.0,14],[cp.x,cp.y-0.9,0]);
    const [sx,sy]=proj(new THREE.Vector3(cp.x,cp.y,0),A.cam);const ka=pop(t,7.5),kb=pop(t,7.9);
    if(ka>0){g.save();g.globalAlpha=clamp(ka);arrow(sx-300,sy-80,sx-300,sy-80+330*clamp(ka),'#FF4A4A',30);txt('GRAVITY',sx-300,sy+330,52,{fill:'#FF4A4A',sw:11});g.restore()}
    if(kb>0){g.save();g.globalAlpha=clamp(kb);arrow(sx+300,sy+250,sx+300,sy+250-330*clamp(kb),'#5BE37A',30);txt('SPEED',sx+300,sy+330,52,{fill:'#5BE37A',sw:11});txt('PRESSES YOU IN',W/2,330,60,{fill:'#5BE37A',sw:13});g.restore()}
    pill('STILL ON THE TRACK',W/2,1660,54,'#FFD23F','#111',t,8.6,CU.c3);comic('WHOA',W*0.78,600,80,t,8.9,{life:0.8,rot:0.1,fill:'#fff'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);BLD.visible=true;const u=t-CU.c3;const x=lerp(-24,-1,ease(seg(t,CU.c3,13.9)));
    if(t<13.9)onGround(car.c,x);else onLoop(car.c,(t-13.9)*2.2,R1);car.spin(t*40);seatIn(t,{armL:[0.9,0.25],armR:[0.9,-0.25],mouth:t>12?'teeth':'grin',lookY:0.3});
    const k=ease(seg(t,CU.c3,CU.c4));A.shot([lerp(-12,-4,k),5.5,48],[lerp(-9,-2,k),5.6,0]);
    const v=lerp(0,56,ease(seg(t,10.6,12.3)));
    {const [bx,by0]=proj(new THREE.Vector3(-12.3,0,1),A.cam);const [,by1]=proj(new THREE.Vector3(-12.3,10,1),A.cam);const a=easeOut(seg(t,9.9,10.3));if(a>0){g.save();g.globalAlpha=a;bracket(bx,by1,by0,'3 STORIES ≈ 10 M');g.restore()}}
    gauge(W/2,380,170,v,80,'#FF7A1A');pill('AT LEAST 56 KM/H',W/2,1660,58,'#FF7A1A','#111',t,12.0,CU.c4);comic('VROOM',W*0.78,700,76,t,11.2,{life:1.0,rot:0.1,fill:'#FFD23F'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);FOAM.visible=true;const u=t-CU.c4;let fall=0;
    if(u<0.75){const th=2.25*easeOut(u/0.75);onLoop(car.c,th,R1);car.spin(t*20)}
    else{const tau=u-0.75;const th0=2.25;const p0=[Math.sin(th0)*R1,R1-Math.cos(th0)*R1];const land=0.62;const tt_=Math.min(tau,land);
      const px=p0[0]+(-5.2)*tt_,py=Math.max(1.05,p0[1]+(-1.0)*tt_-9.8*tt_*tt_*1.1);car.c.position.set(px,py,0);car.c.rotation.set(0,0,lerp(th0,PI*2,easeOut(clamp(tt_/land))));fall=tau>land?1:0}
    seatIn(t,{armL:[2.7,0.5],armR:[2.7,-0.5],bendL:0.1,bendR:0.1,mouth:'o',mouthSize:1.0,wide:true});A.shot([1.5,5.0,24],[0.4,4.4,0]);
    pill('TOO SLOW?',W/2,330,68,'#FF4A4A','#fff',t,14.3,CU.c5);comic('BONK!',W*0.3,1150,100,t,15.6,{life:0.8,rot:-0.12,fill:'#FF4A4A'});comic('NOPE',W*0.72,620,80,t,15.0,{life:0.6,rot:0.1,fill:'#fff'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);L2.visible=true;L1.visible=false;BLD.visible=true;BLD.position.set(-8.6,0,7);car.c.visible=false;
    A.S.add(holder);holder.position.set(2.2,0,54);holder.rotation.set(0,-0.35,0);holder.scale.setScalar(1);
    guy.pose({armL:[2.8+0.15*Math.sin(t*9),0.3],armR:[2.8+0.15*Math.sin(t*9+1),-0.3],mouth:'teeth',wide:true,blink:false,jump:0.12*Math.abs(Math.sin(t*6)),lookY:0.3,headPitch:-0.1});
    car2.c.visible=true;const k=seg(t,16.5,18.9);if(k<=0)onGround(car2.c,lerp(-30,0,seg(t,CU.c5,16.5)));else if(k<1)onLoop(car2.c,easeInOutLoop(k)*PI*2,R2);else onGround(car2.c,(t-18.9)*16);car2.spin(t*40);
    A.shot([0,6.5,82],[-1,9.0,0]);
    {const a=easeOut(seg(t,16.9,17.3));const [x1,y1]=proj(new THREE.Vector3(-8.6,10.6,7),A.cam);const [x2,y2]=proj(new THREE.Vector3(0,20.6,0),A.cam);
      if(a>0){g.save();g.globalAlpha=a;txt('10 M',x1,y1-40,56,{fill:'#7FE0D6',sw:12});txt('20 M LOOP',x2,y2+110,64,{fill:'#3FF0FF',sw:13});g.restore()}}
    pill('REAL STUNT: 2× TALLER',W/2,330,58,'#3FF0FF','#111',t,16.4,CU.c6);comic('LEGENDS',W*0.72,1150,84,t,18.3,{life:0.9,rot:0.1,fill:'#FFD23F'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.25));A.shot(mix([8,4.6,30],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
function easeInOutLoop(x){x=clamp(x);return x+0.08*Math.sin(2*PI*x)}
