// ===== Could you survive the GTA 6 glitch that launches cars into the sky? (crazy what-if + GTA 6) =====
const TT=20.6;
const CU={c1:4.55,c2:6.75,c3:11.85,c4:14.15,c5:16.15,c6:18.9};
guy.outfit({snapback:1,capColor:0x1FBF8F,shades:1,chain:1});
const C=scene('city');const car=C.car;const ROOF=car.body[3];car.color(0x2FD6FF);
function seatIn(t,o={}){car.seat.add(holder);holder.position.set(0,0,0);holder.rotation.set(0,PI/2,0);holder.scale.setScalar(1);
  guy.pose({...SIT,armL:[0.9,0.25],armR:[0.9,-0.25],bendL:0.9,bendR:0.9,blink:BLINK(t),mouth:'grin',...o})}
// ---- sky set (falling) ----
const SK={S:new THREE.Scene()};lights(SK.S);SK.cam=new THREE.PerspectiveCamera(30,W/H,0.1,300);
const CLOUDS=[];for(let i=0;i<26;i++){const cl=new THREE.Group();SK.S.add(cl);for(let k=0;k<4;k++)part(cl,SPH,toon(0xFFFFFF),[k*0.9-1.3,0.2*hash(i+k),0.3*hash(k*3+i)],[1.0+hash(i*k+1)*0.5,0.7,0.8],[0,0,0],0.01);
  cl.userData={x:(hash(i*3.1)-0.5)*26,y:hash(i*7.3)*60,z:-6-hash(i*5.7)*24,s:0.6+hash(i*2.2)*1.2};cl.scale.setScalar(cl.userData.s);CLOUDS.push(cl)}
const fcar=makeCar(0x2FD6FF);SK.S.add(fcar.c);fcar.body[3].visible=false;
function skyShot(p,l,t,vy){CLOUDS.forEach(cl=>{const u=cl.userData;cl.position.set(u.x,((u.y+t*vy)%60+60)%60-30,u.z)});SK.cam.position.set(...p);SK.cam.lookAt(...l);
  setBG('linear-gradient(#2E7BE0 0%,#69B6FF 55%,#FFC98A 100%)');r.setClearColor(0,0);r.render(SK.S,SK.cam)}
// ---- crash-test hall ----
const CT={S:new THREE.Scene()};lights(CT.S);CT.cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);
part(CT.S,new THREE.PlaneGeometry(200,100),toon(0xD9DCE6),[0,0,0],[1,1,1],[-PI/2,0,0],0);
part(CT.S,new THREE.PlaneGeometry(60,2.6),toon(0x9BA1B5),[0,0.01,0],[1,1,1],[-PI/2,0,0],0);
for(let i=-12;i<12;i++)part(CT.S,new THREE.PlaneGeometry(0.12,2.6),basic(0xFFD23F),[i*2.0,0.02,0],[1,1,1],[-PI/2,0,0],0);
const stripe=canvasTex(256,256);{const c=stripe.ctx;c.fillStyle='#FFD23F';c.fillRect(0,0,256,256);c.fillStyle='#16161E';for(let k=-4;k<8;k++){c.beginPath();c.moveTo(k*64,0);c.lineTo(k*64+32,0);c.lineTo(k*64-96,256);c.lineTo(k*64-128,256);c.closePath();c.fill()}stripe.tx.wrapS=stripe.tx.wrapT=THREE.RepeatWrapping;stripe.tx.repeat.set(3,1.5)}
const WALL=new THREE.Group();WALL.position.set(6.2,0,0);CT.S.add(WALL);part(WALL,new THREE.BoxGeometry(1.4,2.6,4.6),tmat(0xffffff,stripe.tx),[0,1.3,0],[1,1,1],[0,0,0],0.02);
part(CT.S,new THREE.BoxGeometry(60,8,0.6),toon(0x4C5470),[0,4,-6],[1,1,1],[0,0,0],0.02);for(let i=-6;i<7;i++)part(CT.S,new THREE.BoxGeometry(2.6,0.3,0.2),basic(0xFFFFFF),[i*4,6.8,-5.6],[1,1,1],[0,0,0],0);
for(let i=-3;i<4;i++){part(CT.S,new THREE.BoxGeometry(1.2,0.12,0.12),basic(0x3FF0FF),[i*6,7.5,-5.6],[1,1,1],[0,0,0],0)}
const tcar=makeCar(0xF4F4F8);CT.S.add(tcar.c);part(tcar.c,new THREE.BoxGeometry(4.02,0.12,0.4),toon(0xFFD23F),[0,0.86,0],[1,1,1],[0,0,0],0);
function hallShot(p,l){CT.cam.position.set(...p);CT.cam.lookAt(...l);setBG('linear-gradient(#2A2F45,#4C5470)');r.setClearColor(0,0);r.render(CT.S,CT.cam)}
// ---- 2D ----
function gauge(x,y,R,v,vmax,col){g.save();g.translate(x,y);g.fillStyle='rgba(10,12,25,0.92)';g.strokeStyle='#111';g.lineWidth=12;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();g.strokeStyle=col;g.lineWidth=7;g.beginPath();g.arc(0,0,R-6,0,7);g.stroke();
  const a0=PI*0.75,a1=PI*2.25;g.lineCap='round';g.strokeStyle='rgba(255,255,255,0.18)';g.lineWidth=22;g.beginPath();g.arc(0,0,R*0.72,a0,a1);g.stroke();g.strokeStyle=col;g.beginPath();g.arc(0,0,R*0.72,a0,a0+(a1-a0)*clamp(v/vmax));g.stroke();
  const a=a0+(a1-a0)*clamp(v/vmax);g.strokeStyle='#FF4A4A';g.lineWidth=9;g.beginPath();g.moveTo(0,0);g.lineTo(Math.cos(a)*R*0.62,Math.sin(a)*R*0.62);g.stroke();g.fillStyle='#fff';g.beginPath();g.arc(0,0,12,0,7);g.fill();
  g.restore();txt(Math.round(v)+'',x,y+R*0.42,R*0.42,{stroke:0,fill:'#fff'});txt('KM/H',x,y+R*0.75,R*0.17,{stroke:0,fill:col})}
function carIcon(x,y,s,col,rot=0){g.save();g.translate(x,y);g.rotate(rot);g.scale(s,s);g.lineWidth=8;g.strokeStyle='#111';g.fillStyle=col;rr(-60,-18,120,30,10);g.fill();g.stroke();rr(-30,-40,55,26,10);g.fill();g.stroke();
  g.fillStyle='#222';for(const wx of [-34,34]){g.beginPath();g.arc(wx,14,13,0,7);g.fill()}g.restore()}
function tower(x,y0,h,w){g.save();g.fillStyle='#5A4E8C';g.strokeStyle='#111';g.lineWidth=8;g.fillRect(x-w/2,y0-h,w,h);g.strokeRect(x-w/2,y0-h,w,h);g.fillStyle='#FFE89A';const fl=30,fh=h/fl;for(let i=0;i<fl;i++)for(let k=0;k<3;k++){if(hash(i*3+k)<0.6)g.fillRect(x-w/2+12+k*(w-24)/3,y0-h+i*fh+fh*0.25,(w-24)/3-10,fh*0.45)}g.restore()}
// ---- opening: standing next to his car on the neon street ----
const C0={p:[12.0,2.2,14.5],l:[8.9,1.7,2.0]};
function openScene(t){C.mood('sunset');C.S.add(holder);holder.position.set(8.3,0.0,3.4);holder.rotation.set(0,0.35,0);holder.scale.setScalar(1);car.c.visible=true;car.c.position.set(10.1,0,1.0);car.c.rotation.set(0,0,0);car.spin(0);ROOF.visible=true;
  guy.pose({armL:[0.35+0.05*Math.sin(t*2*PI/2.05),0],armR:[1.3,-0.9],bendR:1.2,mouth:'grin',blink:BLINK(t),look:0.35,headYaw:0.35,jump:0.012*Math.sin(t*2*PI/1.025)})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;car.c.visible=true;ROOF.visible=true;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.2,CU.c1));C.shot(mix(C0.p,[11.6,2.0,13.2],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('COULD YOU SURVIVE',W/2,190,76,{sw:15});txt('THE GTA 6',W/2,295,112,{fill:'#3FF0FF',sw:22});txt('SKY GLITCH?',W/2,420,118,{fill:'#FFD23F',sw:24});g.restore();
    comic('WAIT WHAT?!',W*0.5,1200,78,t,2.4,{life:1.4,rot:-0.06,fill:'#FF7AC2'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);C.mood('sunset');ROOF.visible=false;const u=t-CU.c1;const y=Math.max(0,u-0.25)*Math.max(0,u-0.25)*9+Math.max(0,u-0.25)*6;
    car.c.position.set(10.1,y,1.0);car.c.rotation.set(0.15*Math.sin(u*5),0,0.1*Math.sin(u*3));car.spin(t*20);
    seatIn(t,{armL:[2.7,0.4],armR:[2.7,-0.4],bendL:0.15,bendR:0.15,mouth:'o',mouthSize:1.0,wide:true});
    C.shot([16.4,0.8,17],[10.1,y*0.92+0.8,1]);
    const h=Math.round(clamp(y/32)*100);panel(W*0.22,380,300,170,'rgba(10,12,25,0.9)','#3FF0FF',30);txt(h+' M',W*0.22,365,76,{stroke:0,fill:'#3FF0FF'});txt('HEIGHT',W*0.22,425,34,{stroke:0,fill:'#fff'});
    comic('YEET!',W*0.7,700,120,t,4.8,{life:1.1,rot:0.1,fill:'#FFD23F'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);clear3d();setBG('linear-gradient(#1C2E6E 0%,#3F7BE0 60%,#FFB36B 100%)');
    const gy=1300;g.fillStyle='#2E2B40';g.fillRect(0,gy,W,H-gy);g.fillStyle='#FFD23F';for(let i=0;i<8;i++)g.fillRect(i*150+20,gy+40,80,12);
    tower(W*0.27,gy,820,230);txt('100 M',W*0.27,gy-860,64,{fill:'#fff',sw:13});txt('≈ 30 FLOORS',W*0.27,gy-795,40,{fill:'#FFE89A',sw:10});
    g.save();g.setLineDash([22,18]);g.strokeStyle='rgba(255,255,255,0.8)';g.lineWidth=8;g.beginPath();g.moveTo(W*0.66,gy-30);g.lineTo(W*0.66,gy-820);g.stroke();g.restore();
    const k=seg(t,7.2,11.0);const hh=1-(1-k)*(1-k);const cy=gy-40-hh*780;carIcon(W*0.66,cy,1.0,'#2FD6FF');
    pill('YOU',W*0.66+150,cy-10,44,'#FF3DA6','#fff',t,7.25,CU.c3);
    const v=160*Math.sqrt(Math.max(0,1-hh));if(t>7.7){const ka=pop(t,7.7);g.save();g.translate(W*0.66,1660);g.scale(ka,ka);gauge(0,0,150,t<8.6?lerp(0,160,seg(t,7.7,8.6)):v,180,'#3FF0FF');g.restore()}
    arrow(W*0.86,gy-120,W*0.86,gy-560,'#5BE37A',30);    if(t>10.5)txtA('STRAIGHT UP!',W/2,330,84,1,{fill:'#5BE37A',sw:18});
    comic('VROOM',W*0.3,1650,80,t,8.6,{life:0.9,rot:-0.1,fill:'#FFD23F'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);const u=t-CU.c3;car.c.visible=false;fcar.c.add(holder);holder.position.set(-0.35,0.55,0);holder.rotation.set(0,PI/2,0);holder.scale.setScalar(1);
    guy.pose({...SIT,armL:[2.9,0.6],armR:[2.9,-0.6],bendL:0.1,bendR:0.1,mouth:'o',mouthSize:1.1,wide:true,blink:false,headRoll:0.06*Math.sin(t*30)});
    fcar.c.position.set(0,0,0);fcar.c.rotation.set(0.75+0.12*Math.sin(u*3),0.15*Math.sin(u*2),-1.0+0.25*Math.sin(u*2.5));fcar.spin(t*30);
    skyShot([0,1.2,16],[0,0,0],u,lerp(6,26,seg(t,CU.c3,CU.c3+1.2)));
    const v=160*easeOut(seg(t,CU.c3,13.6));gauge(W/2,1650,140,v,180,'#FF4A4A');comic('AAAAH!',W*0.5,330,130,t,12.1,{life:1.6,rot:-0.06,fill:'#FF4A4A'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);car.c.visible=false;const u=t-CU.c4;
    CT.S.add(holder);holder.position.set(0.5,0,2.7);holder.rotation.set(0,-0.8,0);holder.scale.setScalar(1);
    const hit=15.15;let x;if(t<hit)x=lerp(-14,4.0,seg(t,CU.c4,hit));else x=4.0-0.9*easeOut(seg(t,hit,hit+0.5));tcar.c.position.set(x,0,0);tcar.c.rotation.set(0,0,t>hit?0.12*Math.sin(seg(t,hit,hit+0.6)*PI):0);tcar.spin(t*30);
    guy.pose({armL:[0.35,0],armR:[0.35,0],mouth:t>hit?'o':'smile',wide:t>hit,blink:BLINK(t),look:0.2,headYaw:0.2,jump:t>hit&&t<hit+0.3?0.08:0});
    const sh=t>hit&&t<hit+0.25?0.08*Math.sin(t*90):0;hallShot([-9.5+sh,2.3,6.5],[4.5,1.0,-0.6]);
    gauge(W/2,390,150,t<hit?lerp(0,64,seg(t,CU.c4,14.9)):64,180,'#FFD23F');pill('CRASH TEST: 64 KM/H',W/2,1660,56,'#FFD23F','#111',t,14.5,CU.c5);comic('CRUNCH!',W*0.68,820,96,t,hit,{life:0.8,rot:0.12,fill:'#FFD23F'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);car.c.visible=false;tcar.c.position.set(3.1,0,0);tcar.c.rotation.set(0,0,0);tcar.spin(0);
    CT.S.add(holder);holder.position.set(1.5,0,3.4);holder.rotation.set(0,0.35,0);holder.scale.setScalar(1);
    guy.pose({armL:[2.5,0.6],armR:[2.5,-0.6],bendL:1.6,bendR:1.6,mouth:t>17.4?'teeth':'o',wide:true,blink:false,headPitch:-0.05,jump:0.01*Math.sin(t*20)});
    const k=ease(seg(t,CU.c5,CU.c6));hallShot([lerp(3.0,2.4,k),2.4,lerp(10.2,8.6,k)],[1.4,2.0,3.4]);
    const by=1230,bh=700;const b1=easeOut(seg(t,16.3,16.8)),b2=easeOut(seg(t,16.9,18.1));
    g.save();g.fillStyle='rgba(10,12,25,0.82)';rr(90,by-bh-140,W-180,bh+230,40);g.fill();g.restore();
    g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=10;const h1=bh/6.25*b1,h2=bh*b2;g.fillRect(230,by-h1,250,h1);g.strokeRect(230,by-h1,250,h1);g.fillStyle='#FF4A4A';g.fillRect(600,by-h2,250,h2);g.strokeRect(600,by-h2,250,h2);
    txt('64',355,by+50,54,{stroke:0,fill:'#FFD23F'});txt('160',725,by+50,54,{stroke:0,fill:'#FF4A4A'});txt('1×',355,by-h1-50,60,{fill:'#fff',sw:12});if(b2>0)txt((6.25*b2).toFixed(1)+'×',725,by-h2-50,70,{fill:'#fff',sw:14});
    pill('IMPACT ENERGY',W/2,by-bh-90,52,'#FFFFFF','#111',t,16.2,CU.c6);comic('BRUH',W*0.78,1650,90,t,18.1,{life:0.7,rot:0.12,fill:'#FF8FC8'})}
  else{const tt=t-TT;openScene(tt);const k=ease(seg(t,CU.c6,TT-0.12));C.shot(mix([12.6,2.5,15.6],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
