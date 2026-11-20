// ===== Would a real car explode like in GTA? (pop culture / GTA 6 myth-buster) =====
const TT=21.45;
const CU={c1:2.65,c2:4.05,c3:6.3,c4:10.3,c5:14.4,c6:17.2,c7:19.9};
guy.outfit({bandana:1,shades:1});
const SKY='linear-gradient(#FF8A4C 0%,#FFB867 45%,#FFE3A6 80%,#FFF4D6 100%)';
// ---- original stunt lot set ----
const L={S:new THREE.Scene()};lights(L.S);L.cam=new THREE.PerspectiveCamera(30,W/H,0.1,400);
L.shot=(p,l)=>{L.cam.position.set(...p);L.cam.lookAt(...l);setBG(SKY);r.setClearColor(0,0);r.render(L.S,L.cam)};
part(L.S,new THREE.PlaneGeometry(400,300),toon(0xE6C68C),[0,0,0],[1,1,1],[-PI/2,0,0],0);
part(L.S,new THREE.PlaneGeometry(60,14),toon(0x55505E),[0,0.01,0],[1,1,1],[-PI/2,0,0],0);
for(let i=-12;i<12;i++)part(L.S,new THREE.PlaneGeometry(1.4,0.14),basic(0xFFFFFF),[i*2.6,0.02,0],[1,1,1],[-PI/2,0,0],0);
for(const z of [-6.8,6.8])part(L.S,new THREE.PlaneGeometry(60,0.18),basic(0xFFD23F),[0,0.02,z],[1,1,1],[-PI/2,0,0],0);
// mesas far away
for(let i=0;i<9;i++){const x=-90+i*24+hash(i)*8,h=8+hash(i*3)*10,w=14+hash(i*5)*12;part(L.S,new THREE.CylinderGeometry(w*0.42,w*0.55,h,7),toon(i%2?0xC9734A:0xB8603C),[x,h/2-0.2,-70-hash(i*7)*20],[1,1,1],[0,hash(i)*3,0],0.02)}
// tire stack (crash target)
const TIRES=new THREE.Group();TIRES.position.set(4.8,0,0.2);L.S.add(TIRES);
for(let c=0;c<3;c++)for(let k=0;k<3;k++)part(TIRES,new THREE.TorusGeometry(0.42,0.2,10,20),toon(k%2?0x26262E:0x1B1B22),[0,0.2+k*0.4,-1.0+c*1.0],[1,1,1],[PI/2,0,0],0.012);
// barriers + cones
const BAR=[];for(let i=0;i<6;i++){const b=new THREE.Group();b.position.set(-14+i*2.3,0,-5.0);L.S.add(b);part(b,new THREE.BoxGeometry(2.1,0.9,0.5),toon(0xF4F0E8),[0,0.45,0],[1,1,1],[0,0,0],0.012);for(let k=0;k<3;k++)part(b,new THREE.BoxGeometry(0.32,0.92,0.52),toon(0xE23B3B),[-0.7+k*0.7,0.45,0],[1,1,1],[0,0,0],0);BAR.push(b)}
for(let i=0;i<10;i++){const cn=new THREE.Group();cn.position.set(-10+i*2.2,0,5.6);L.S.add(cn);part(cn,new THREE.ConeGeometry(0.22,0.6,16),toon(0xFF7A1A),[0,0.3,0],[1,1,1],[0,0,0],0.008);part(cn,new THREE.CylinderGeometry(0.15,0.17,0.08,16),basic(0xFFFFFF),[0,0.32,0],[1,1,1],[0,0,0],0);part(cn,new THREE.BoxGeometry(0.5,0.05,0.5),toon(0xFF7A1A),[0,0.025,0],[1,1,1],[0,0,0],0.006)}
for(let k=0;k<6;k++){palm(L.S,-16+k*7,-9.5,1.3,0.15,k);}
// floodlight towers
for(const x of [-9,11]){const t=new THREE.Group();t.position.set(x,0,-8);L.S.add(t);part(t,cap(0.12,7),toon(0x3A3A48),[0,3.6,0]);part(t,new THREE.BoxGeometry(1.6,0.9,0.3),toon(0x3A3A48),[0,7.2,0.1],[1,1,1],[0,0,0],0.01);for(let k=0;k<4;k++)part(t,new THREE.BoxGeometry(0.3,0.3,0.05),basic(0xFFF6C0),[-0.55+k*0.37,7.2,0.27],[1,1,1],[0,0,0],0)}
// FX crates + film camera + director chair (movie set props, far right side)
function crateTex(){const {ctx,tx}=canvasTex(256,256);ctx.fillStyle='#D4342F';ctx.fillRect(0,0,256,256);ctx.strokeStyle='#7A1512';ctx.lineWidth=14;ctx.strokeRect(10,10,236,236);ctx.fillStyle='#fff';ctx.font='900 110px Inter';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('FX',128,136);return tx}
const CRT=tmat(0xffffff,crateTex());const CRATES=[];
for(const [x,z] of [[19.6,-1.1],[22.4,-1.0]]){const c=part(L.S,new THREE.BoxGeometry(0.7,0.7,0.7),CRT,[x,0.35,z],[1,1,1],[0,0,0],0.012);CRATES.push(c)}
const FCAM=new THREE.Group();FCAM.position.set(19,0,4.6);FCAM.rotation.y=-0.4;L.S.add(FCAM);for(const a of [0,2.1,4.2])part(FCAM,cap(0.04,1.4),toon(0x2A2A35),[Math.sin(a)*0.3,0.65,Math.cos(a)*0.3],[1,1,1],[Math.cos(a)*0.22,0,-Math.sin(a)*0.22]);part(FCAM,new THREE.BoxGeometry(0.5,0.45,0.8),toon(0x22222C),[0,1.55,0],[1,1,1],[0,0,0],0.01);part(FCAM,new THREE.CylinderGeometry(0.16,0.2,0.4,16),toon(0x15151C),[0,1.55,-0.55],[1,1,1],[PI/2,0,0],0.01);for(const z of [-0.15,0.25])part(FCAM,new THREE.CylinderGeometry(0.22,0.22,0.08,20),toon(0x15151C),[0,1.95,z],[1,1,1],[0,0,PI/2],0.008);
const CHAIR=new THREE.Group();CHAIR.position.set(23.6,0,4.2);CHAIR.rotation.y=-0.5;L.S.add(CHAIR);{const wd=toon(0x8C5E36),cl=toon(0x1E1E2A);for(const [x,z] of [[-0.4,-0.3],[0.4,-0.3],[-0.4,0.3],[0.4,0.3]])part(CHAIR,cap(0.035,0.55),wd,[x,0.28,z]);part(CHAIR,new THREE.BoxGeometry(0.95,0.06,0.7),cl,[0,0.55,0],[1,1,1],[0,0,0],0.008);part(CHAIR,new THREE.BoxGeometry(0.95,0.4,0.05),cl,[0,1.05,-0.36],[1,1,1],[0,0,0],0.008);for(const x of [-0.45,0.45]){part(CHAIR,cap(0.03,0.75),wd,[x,0.85,-0.36]);part(CHAIR,new THREE.BoxGeometry(0.06,0.05,0.7),wd,[x,0.8,0],[1,1,1],[0,0,0],0)}}
const car=makeCar(0x8A4DFF);L.S.add(car.c);
function seatGuy(t,o={}){const c=car.c;const p=new THREE.Vector3(-0.35,0.55,0).applyEuler(c.rotation).add(c.position);putGuy(L.S,p.x,p.y,p.z,PI/2+c.rotation.y);guy.pose({...SIT,armL:[0.9,0.25],armR:[0.9,-0.25],bendL:0.9,bendR:0.9,blink:BLINK(t),mouth:'grin',...o})}
function carAt(x,z=0,ry=0,spin=0){car.c.visible=true;car.c.position.set(x,0,z);car.c.rotation.set(0,ry,0);car.spin(spin)}
const C0={p:[8.6,2.9,12.5],l:[0.4,1.15,0]};
function openScene(t){carAt(0,0,0,0);seatGuy(t,{look:0.35,lookY:0.2,headYaw:0.35,jump:0.008*Math.sin(t*2*PI/1.65)});}
// ---- 2D helpers ----
function flame(x,y,s,t){g.save();g.translate(x,y);g.scale(s,s);const f=1+0.12*Math.sin(t*23)+0.08*Math.sin(t*37);
  for(const [c,k] of [['#FF3B1F',1],['#FF9A1F',0.72],['#FFE14D',0.45]]){g.fillStyle=c;g.beginPath();g.moveTo(0,-150*k*f);g.bezierCurveTo(60*k,-70*k,80*k,0,0,30*k);g.bezierCurveTo(-80*k,0,-60*k,-70*k,0,-150*k*f);g.fill()}
  g.strokeStyle='#111';g.lineWidth=7;g.fillStyle='rgba(0,0,0,0)';g.beginPath();g.moveTo(0,-150*f);g.bezierCurveTo(60,-70,80,0,0,30);g.bezierCurveTo(-80,0,-60,-70,0,-150*f);g.stroke();g.restore()}
function fireball(x,y,k,t){if(k<=0)return;g.save();const R=520*easeOut(Math.min(1,k*1.6)),a=1-seg(k,0.7,1);g.globalAlpha=a;
  for(let i=0;i<9;i++){const an=i/9*PI*2+0.3,d=R*0.45,cx=x+Math.cos(an)*d,cy=y+Math.sin(an)*d*0.8-R*0.15;const gr=g.createRadialGradient(cx,cy,10,cx,cy,R*0.55);gr.addColorStop(0,'#FFF6B0');gr.addColorStop(0.4,'#FFB02E');gr.addColorStop(0.75,'#FF4A1F');gr.addColorStop(1,'rgba(90,30,30,0)');g.fillStyle=gr;g.beginPath();g.arc(cx,cy,R*0.55,0,7);g.fill()}
  const gr=g.createRadialGradient(x,y,10,x,y,R*0.6);gr.addColorStop(0,'#FFFFFF');gr.addColorStop(0.5,'#FFE14D');gr.addColorStop(1,'rgba(255,120,30,0)');g.fillStyle=gr;g.beginPath();g.arc(x,y,R*0.6,0,7);g.fill();g.restore()}
function drop(x,y,s,col='#7FD8FF'){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle=col;g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.moveTo(0,-170);g.bezierCurveTo(70,-60,120,0,120,60);g.arc(0,60,120,0,PI);g.bezierCurveTo(-120,0,-70,-60,0,-170);g.fill();g.stroke();g.fillStyle='rgba(255,255,255,0.7)';g.beginPath();g.ellipse(-50,40,18,40,0.3,0,7);g.fill();g.restore()}
function sidecar(x,y,s,t,off,crash){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#8A4DFF';g.strokeStyle='#111';g.lineWidth=9;
  g.beginPath();g.moveTo(-380,40);g.lineTo(-380,-40);g.quadraticCurveTo(-360,-70,-300,-75);g.lineTo(-170,-80);g.quadraticCurveTo(-120,-170,-20,-175);g.lineTo(110,-170);g.quadraticCurveTo(190,-160,240,-85);g.lineTo(360,-70);g.quadraticCurveTo(400,-55,400,0);g.lineTo(400,40);g.closePath();g.fill();g.stroke();
  g.fillStyle='#BFEAFF';g.beginPath();g.moveTo(-100,-90);g.quadraticCurveTo(-70,-150,-10,-152);g.lineTo(40,-152);g.lineTo(40,-90);g.closePath();g.fill();g.stroke();g.beginPath();g.moveTo(70,-90);g.lineTo(70,-150);g.lineTo(110,-148);g.quadraticCurveTo(170,-140,200,-90);g.closePath();g.fill();g.stroke();
  g.globalAlpha=0.35;g.fillStyle='#fff';g.fillRect(-380,-60,780,100);g.globalAlpha=1;
  for(const wx of [-250,260]){g.fillStyle='#1d1d24';g.beginPath();g.arc(wx,45,70,0,7);g.fill();g.stroke();g.fillStyle='#CFCFD8';g.beginPath();g.arc(wx,45,28,0,7);g.fill()}
  // engine + tank + line
  g.fillStyle='#6E7380';rr(250,-50,120,80,12);g.fill();g.stroke();txt('ENGINE',310,-10,26,{stroke:0,fill:'#fff'});
  g.fillStyle='#3FF0FF';rr(-330,-30,170,70,22);g.fill();g.stroke();
  g.save();g.lineCap='round';g.strokeStyle='#111';g.lineWidth=22;g.beginPath();g.moveTo(-160,10);g.lineTo(250,10);g.stroke();g.strokeStyle='#FFB02E';g.lineWidth=12;g.stroke();
  if(!off){g.setLineDash([16,22]);g.lineDashOffset=-t*220;g.strokeStyle='#FFF2B0';g.lineWidth=6;g.stroke()}g.restore();
  // pump
  g.fillStyle=off?'#FF4A4A':'#5BE37A';g.beginPath();g.arc(-60,10,40,0,7);g.fill();g.stroke();txt(off?'OFF':'ON',-60,12,28,{stroke:0,fill:'#111'});
  if(crash>0){g.save();g.translate(410,-10);g.scale(crash,crash);g.fillStyle='#FFE14D';g.beginPath();for(let i=0;i<16;i++){const a=i/16*PI*2,rr2=i%2?40:90;g.lineTo(Math.cos(a)*rr2,Math.sin(a)*rr2)}g.closePath();g.fill();g.stroke();g.restore()}
  g.restore()}
function meter(x,y,w,k){g.save();g.translate(x,y);const h=90;g.fillStyle='#FF6A5A';rr(-w/2,-h/2,w*0.42,h,20);g.fill();g.fillStyle='#5BE37A';g.fillRect(-w/2+w*0.42,-h/2,w*0.16,h);g.fillStyle='#6A9BFF';rr(-w/2+w*0.58,-h/2,w*0.42,h,20);g.fill();g.strokeStyle='#111';g.lineWidth=8;rr(-w/2,-h/2,w,h,20);g.stroke();
  txt('TOO MUCH FUEL',-w*0.29,h/2+44,30,{sw:7});txt('JUST RIGHT',0,-h/2-38,38,{sw:8,fill:'#5BE37A'});txt('TOO MUCH AIR',w*0.29,h/2+44,30,{sw:7});
  const nx=-w/2+w*k;g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.moveTo(nx,-h/2-6);g.lineTo(nx-22,-h/2-40);g.lineTo(nx+22,-h/2-40);g.closePath();g.fill();g.stroke();g.fillRect(nx-5,-h/2,10,h);g.restore()}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();car.c.visible=true;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));L.shot(mix(C0.p,[8.0,2.7,11.6],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WOULD A REAL CAR',W/2,215,84,{sw:18});txt('EXPLODE',W/2,330,120,{fill:'#FF5A2E',sw:24});txt('LIKE IN GTA?',W/2,450,100,{fill:'#FFD23F',sw:21});g.restore();
    comic('HMM...',W*0.75,1150,76,t,1.3,{life:1.2,rot:0.08,fill:'#fff'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);const hitT=3.25,k=seg(t,CU.c1,hitT);let x=lerp(-6,2.3,k*k*(3-2*k)*0.0+k);if(t>hitT)x=2.3-0.18*Math.sin(seg(t,hitT,hitT+0.5)*PI)*Math.exp(-(t-hitT)*3);
    carAt(x,0,0,x*2.8);const imp=t>hitT?Math.exp(-(t-hitT)*5):0;TIRES.position.x=4.8+0.25*imp*Math.sin((t-hitT)*20);
    seatGuy(t,{mouth:t>hitT?'o':'grin',mouthSize:0.8,wide:t>hitT,jump:0.04*imp*Math.sin((t-hitT)*30),tilt:t>hitT?0.12*imp:0});
    L.shot([3.0,2.4,15.5],[2.6,1.1,0]);
    if(t>hitT){comic('BONK',W*0.7,880,100,t,hitT,{life:0.6,rot:0.1,fill:'#fff'});comic('BOOM?',W*0.5,560,120,t,hitT+0.3,{life:0.5,fill:'#FF5A2E'})}
    pill('ALMOST NEVER!',W/2,360,62,'#5BE37A','#111',t,3.3,CU.c2)}
  else if(t<CU.c3){clear3d();setBG('blue');flash(t,CU.c2,0.15);TIRES.position.x=4.8;const s=backOut(seg(t,CU.c2,CU.c2+0.45));
    drop(W/2,1040,1.6*s,'#FFC94D');pill('LIQUID GASOLINE',W/2,1420,52,'#FFD23F','#111',t,CU.c2+0.3,CU.c3);
    if(t>5.35){const k=backOut(seg(t,5.35,5.65));g.save();g.translate(W/2,700);g.scale(k,k);g.rotate(-0.08);txt('BOOM',0,0,170,{fill:'#FF5A2E',sw:30});cross(0,0,4.2);g.restore()}
    panel(W/2,330,800,150);txt('LIQUID CAN\'T EXPLODE',W/2,300,62,{stroke:0,fill:'#FFD23F'});txt('IT JUST SITS THERE',W/2,362,44,{stroke:0});
    comic('...',W*0.78,1100,120,t,4.7,{life:0.6,fill:'#fff'})}
  else if(t<CU.c4){clear3d();setBG('neon');flash(t,CU.c3,0.15);
    drop(W*0.28,1080,0.8,'#FFC94D');
    // vapor wisps rising
    for(let i=0;i<7;i++){const ph=((t*0.6+i/7)%1),x=W*0.28+Math.sin(ph*6+i)*60,y=920-ph*360;g.save();g.globalAlpha=(1-ph)*0.85*seg(t,6.5,6.9);g.fillStyle='#FFE7A0';g.beginPath();g.arc(x,y,26+ph*40,0,7);g.fill();g.restore()}
    pill('VAPOR',W*0.28,520,52,'#FFE7A0','#111',t,6.75,CU.c4);
    // air bubbles
    if(t>8.4){for(let i=0;i<9;i++){const x=W*0.62+hash(i)*300,y=760+hash(i*3)*380+12*Math.sin(t*3+i);const k=backOut(seg(t,8.4+i*0.05,8.7+i*0.05));g.save();g.globalAlpha=0.9;g.fillStyle='#BFEAFF';g.strokeStyle='#111';g.lineWidth=5;g.beginPath();g.arc(x,y,30*k,0,7);g.fill();g.stroke();g.restore()}pill('+ AIR',W*0.72,660,52,'#BFEAFF','#111',t,8.5,CU.c4)}
    const nk=t<8.9?0.15+0.05*Math.sin(t*5):lerp(0.15,0.5,ease(seg(t,8.9,9.4)));meter(W/2,1640,880,nk);
    if(t>9.4){flame(W/2,1250,0.9*backOut(seg(t,9.4,9.7)),t);comic('FWOOSH',W*0.74,1200,76,t,9.45,{life:0.8,rot:0.08,fill:'#FFB02E'})}
    panel(W/2,330,820,150);txt('ONLY THE VAPOR BURNS',W/2,300,62,{stroke:0,fill:'#FFE7A0'});txt('AND ONLY IN THE RIGHT MIX',W/2,362,42,{stroke:0})}
  else if(t<CU.c5){clear3d();setBG('teal');flash(t,CU.c4,0.15);const off=t>12.62,cr=t>12.4?backOut(seg(t,12.4,12.65))*(1-seg(t,13.3,13.6)):0;
    sidecar(W/2-20,1050,1.12,t,off,cr);
    if(t>10.75){const k=pop(t,10.75);g.save();g.translate(W*0.24,780);g.scale(k,k);pillStatic('TOUGH PLASTIC TANK',0,0,40,'#3FF0FF');g.restore();arrowSmall(W*0.24,815,W*0.2,975)}
    if(t>12.6){const k=pop(t,12.6);g.save();g.translate(W*0.45,1230);g.scale(k,k);pillStatic('FUEL PUMP: OFF',0,0,46,'#FF4A4A');g.restore()}
    comic('CRASH!',W*0.8,800,80,t,12.42,{life:0.8,rot:0.1,fill:'#FFE14D'});
    panel(W/2,330,820,150);txt('BUILT-IN SAFETY',W/2,300,64,{stroke:0,fill:'#3FF0FF'});txt('NO FUEL FLOWS AFTER A CRASH',W/2,362,40,{stroke:0})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);carAt(-11.2,-3.4,0.12,0);TIRES.position.x=4.8;
    const k=seg(t,CU.c5+0.2,CU.c6);const gx=lerp(-11.9,-12.0,k),gz=lerp(-1.8,3.2,k);putGuy(L.S,gx,0,gz,0.15);guy.pose(walk(t,8,{mouth:'o',mouthSize:0.5,look:-0.3,headYaw:-0.4}));
    L.shot([lerp(-8.6,-9.6,k),2.7,13.5],[lerp(-10.6,-11.3,k),1.2,-0.6]);
    const p=proj(new THREE.Vector3(-9.7,1.15,-3.6),L.cam);flame(p[0],p[1],0.35+0.3*seg(t,CU.c5,CU.c6),t);
    pill('THEY START SMALL',W/2,340,58,'#FFB02E','#111',t,15.9,CU.c6);pill('= TIME TO GET OUT',W/2,470,52,'#5BE37A','#111',t,16.3,CU.c6);
    comic('NOPE',W*0.25,1250,84,t,15.0,{life:0.9,rot:-0.1,fill:'#fff'})}
  else if(t<CU.c7){flash(t,CU.c6,0.15);carAt(21,-1.0,PI,0);putGuy(L.S,23.6,0,4.2,-0.5);
    const lean=t>18.55?1:0;guy.pose({...SIT,sitY:-0.27+0.0,armL:[0.4,0.3],armR:lean?[2.6,-0.3]:[0.5,-0.3],bendL:1.2,bendR:lean?0.3:1.0,mouth:lean?'grin':'smile',blink:BLINK(t),look:-0.6,headYaw:-0.6});
    L.shot([28.5,2.8,14.5],[22.6,1.2,1.2]);
    const p=proj(new THREE.Vector3(21,1.0,-1.0),L.cam);fireball(p[0],p[1],seg(t,18.55,19.85),t);
    if(t<18.55){pill('MOVIE FIREBALLS?',W/2,360,58,'#FF5A2E','#fff',t,CU.c6+0.1,18.6)}
    else{pill('HIDDEN EXPLOSIVES',W/2,360,58,'#FFD23F','#111',t,18.55,CU.c7);comic('KABOOM',W*0.5,820,120,t,18.6,{life:0.9,fill:'#FF5A2E'});comic('CUT!',W*0.75,1150,100,t,19.3,{life:0.6,rot:0.12,fill:'#fff'})}}
  else{openScene(t-TT);const k=ease(seg(t,CU.c7,TT-0.25));L.shot(mix([3.5,2.4,10.5],C0.p,k),C0.l);flash(t,CU.c7,0.15)}
  vignette();captions(t)};
function pillStatic(s,x,y,size,col){g.save();g.font=`900 ${size}px Inter`;const w=g.measureText(s).width+size*1.1,h=size*1.6;g.fillStyle=col;rr(x-w/2,y-h/2,w,h,h/2);g.fill();g.strokeStyle='#111';g.lineWidth=6;g.stroke();g.restore();txt(s,x,y+2,size,{stroke:0,fill:'#111'})}
function arrowSmall(x0,y0,x1,y1){g.save();g.strokeStyle='#fff';g.lineWidth=7;g.beginPath();g.moveTo(x0,y0);g.lineTo(x1,y1);g.stroke();g.restore()}
