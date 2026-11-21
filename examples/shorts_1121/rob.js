// ===== How many stores would you need to rob in GTA 6 to make a million dollars? (pop culture / GTA 6 money) =====
const TT=21.5;
const CU={c1:4.85,c2:7.95,c3:10.25,c4:14.5,c5:18.6,c6:19.82};
guy.outfit({snapback:1,chain:1,shades:1,capColor:0xFF3DA6});
const CT=scene('city');
// ---- interiors scene: corner store (x=0), jewelry store (x=40), vault (x=80) ----
const IN={S:new THREE.Scene()};lights(IN.S);IN.cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);
IN.shot=(p,l,bgc)=>{IN.cam.position.set(...p);IN.cam.lookAt(...l);setBG(bgc);r.setClearColor(0,0);r.render(IN.S,IN.cam)};
function room(x,floor,wall,trim){part(IN.S,new THREE.PlaneGeometry(30,24),toon(floor),[x,0,0],[1,1,1],[-PI/2,0,0],0);part(IN.S,new THREE.PlaneGeometry(30,12),toon(wall),[x,6,-4],[1,1,1],[0,0,0],0);part(IN.S,new THREE.BoxGeometry(30,0.25,0.1),basic(trim),[x,0.12,-3.95],[1,1,1],[0,0,0],0);part(IN.S,new THREE.PlaneGeometry(20,12),toon(wall),[x-8,6,4],[1,1,1],[0,PI/2,0],0)}
// corner store
room(0,0xE9E4D6,0x67C9B3,0xFF7A1A);
for(let i=-6;i<=6;i++)for(let j=-5;j<=5;j++)if((i+j)%2===0)part(IN.S,new THREE.PlaneGeometry(1,1),toon(0xCFC8B6),[i,0.005,j],[1,1,1],[-PI/2,0,0],0);
for(const sx of [-3.2,3.2]){const sh=new THREE.Group();sh.position.set(sx,0,-3.5);IN.S.add(sh);for(let k=0;k<4;k++){part(sh,new THREE.BoxGeometry(2.6,0.08,0.7),toon(0xF4F0E8),[0,0.5+k*0.8,0],[1,1,1],[0,0,0],0.008);for(let m=0;m<6;m++)part(sh,new THREE.BoxGeometry(0.3,0.42,0.3),toon([0xFF5A5A,0xFFD23F,0x5BC2FF,0x9DFF6B,0xFF8FB1,0xB59CFF][(m+k)%6]),[-1.05+m*0.42,0.76+k*0.8,0],[1,1,1],[0,0,0],0.006)}}
const CTR=new THREE.Group();CTR.position.set(0,0,-1.2);IN.S.add(CTR);part(CTR,new THREE.BoxGeometry(3.4,1.05,0.9),toon(0xFF7A1A),[0,0.52,0],[1,1,1],[0,0,0],0.015);part(CTR,new THREE.BoxGeometry(3.5,0.08,1.0),toon(0xF4F0E8),[0,1.08,0],[1,1,1],[0,0,0],0.008);
part(CTR,new THREE.BoxGeometry(0.6,0.35,0.45),toon(0x3A3A48),[0.9,1.3,0],[1,1,1],[0,0,0],0.01);part(CTR,new THREE.BoxGeometry(0.5,0.3,0.05),basic(0x5BE37A),[0.9,1.62,0.05],[1,1,1],[-0.3,0,0],0.008);
const SMALLCASH=new THREE.Group();SMALLCASH.position.set(-0.4,1.12,0.1);CTR.add(SMALLCASH);for(let i=0;i<2;i++){part(SMALLCASH,new THREE.BoxGeometry(0.34,0.07,0.17),toon(0x5BC26A),[i*0.1,i*0.07,0],[1,1,1],[0,i*0.4,0],0.008);part(SMALLCASH,new THREE.BoxGeometry(0.07,0.075,0.18),toon(0xF5F0D0),[i*0.1,i*0.07,0],[1,1,1],[0,i*0.4,0],0)}
const signT=canvasTex(512,160);{const c=signT.ctx;c.fillStyle='#111';c.fillRect(0,0,512,160);c.font='900 110px Inter';c.textAlign='center';c.textBaseline='middle';c.fillStyle='#FF3DA6';c.fillText('24/7',256,84)}
part(IN.S,new THREE.PlaneGeometry(2.4,0.75),new THREE.MeshBasicMaterial({map:signT.tx}),[2.4,3.3,-3.9],[1,1,1],[0,0,0],0);
// jewelry store
room(40,0x2A1E3E,0x5B2A86,0xFFD23F);
const GEMC=[0x3FF0FF,0xFF3DA6,0x9DFF6B,0xFFFFFF,0xB59CFF];const GEMS=[];
for(const cx of [37.5,40,42.5]){const cs=new THREE.Group();cs.position.set(cx,0,-1.5);IN.S.add(cs);part(cs,new THREE.BoxGeometry(2.1,1.0,0.9),toon(0x1B1528),[0,0.5,0],[1,1,1],[0,0,0],0.012);part(cs,new THREE.BoxGeometry(2.14,0.06,0.94),basic(0xFFD23F),[0,1.02,0],[1,1,1],[0,0,0],0);
  for(let k=0;k<5;k++){const gm=part(cs,new THREE.OctahedronGeometry(0.13),basic(GEMC[(k+Math.round(cx))%5]),[-0.8+k*0.4,1.22,0],[1,1.3,1],[0,0,0],0.006);GEMS.push(gm)}
  part(cs,new THREE.BoxGeometry(2.1,0.5,0.9),new THREE.MeshBasicMaterial({color:0xBFEAFF,transparent:true,opacity:0.22}),[0,1.3,0],[1,1,1],[0,0,0],0)}
for(let k=0;k<5;k++)part(IN.S,new THREE.BoxGeometry(0.9,0.06,0.06),basic(0xFFD23F),[36+k*2,4.6,-3.9],[1,1,1],[0,0,0],0);
// vault
room(80,0x6F7684,0x8E96A6,0xFFD23F);
const VD=new THREE.Group();VD.position.set(80,2.3,-3.7);IN.S.add(VD);part(VD,new THREE.CylinderGeometry(2.3,2.3,0.4,48),toon(0x5A606E),[0,0,0],[1,1,1],[PI/2,0,0],0.02);part(VD,new THREE.CylinderGeometry(1.9,1.9,0.42,48),toon(0x2A2E38),[0,0,0.01],[1,1,1],[PI/2,0,0],0);
const DOOR=new THREE.Group();DOOR.position.set(1.9,0,0.25);VD.add(DOOR);part(DOOR,new THREE.CylinderGeometry(1.88,1.88,0.45,48),toon(0xB8BFCC),[-1.9,0,0],[1,1,1],[PI/2,0,0],0.02);for(let k=0;k<3;k++)part(DOOR,cap(0.06,1.6),toon(0x6F7684),[-1.9,0,0.3],[1,1,1],[0,0,k*PI/3],0.008);part(DOOR,new THREE.CylinderGeometry(0.3,0.3,0.2,24),toon(0xFFD23F),[-1.9,0,0.35],[1,1,1],[PI/2,0,0],0.008);
const STACKS=new THREE.Group();IN.S.add(STACKS);for(let i=0;i<9;i++){const sx=77.6+(i%3)*0.95+(Math.floor(i/3)%2)*0.3,sz=-1.6+Math.floor(i/3)*0.6;for(let h=0;h<3+(i%3);h++){part(STACKS,new THREE.BoxGeometry(0.62,0.16,0.32),toon(0x5BC26A),[sx,0.08+h*0.17,sz],[1,1,1],[0,hash(i+h)*0.2,0],0.008);part(STACKS,new THREE.BoxGeometry(0.12,0.165,0.33),toon(0xF5F0D0),[sx,0.08+h*0.17,sz],[1,1,1],[0,hash(i+h)*0.2,0],0)}}
for(let i=0;i<5;i++)part(STACKS,new THREE.BoxGeometry(0.62,0.16,0.32),toon(0x5BC26A),[82.0+(i%2)*0.7,0.08+Math.floor(i/2)*0.17,-1.0],[1,1,1],[0,0.3,0],0.008);
// ---- helpers ----
function counter(x,y,v,goal=1e6){const w=760,h=150;panel(x,y,w,h,'rgba(10,12,25,0.88)','#5BE37A',30);txt(moneyStr(v),x,y-8,84,{stroke:0,fill:'#5BE37A'});bar(x-w/2+40,y+40,w-80,26,v/goal,'#5BE37A')}
function storeIcon(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#67C9B3';g.fillRect(-16,-12,32,26);g.fillStyle='#FF7A1A';g.fillRect(-19,-20,38,9);g.fillStyle='#FFF2B0';g.fillRect(-10,-4,20,18);g.restore()}
function diamond(x,y,s,c){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle=c;g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(-40,-14);g.lineTo(-22,-36);g.lineTo(22,-36);g.lineTo(40,-14);g.lineTo(0,40);g.closePath();g.fill();g.stroke();g.beginPath();g.moveTo(-40,-14);g.lineTo(40,-14);g.stroke();g.restore()}
function vaultIcon(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#B8BFCC';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.arc(0,0,60,0,7);g.fill();g.stroke();g.lineWidth=7;for(let k=0;k<3;k++){g.beginPath();g.moveTo(Math.cos(k*PI/3)*40,Math.sin(k*PI/3)*40);g.lineTo(-Math.cos(k*PI/3)*40,-Math.sin(k*PI/3)*40);g.stroke()}g.fillStyle='#FFD23F';g.beginPath();g.arc(0,0,14,0,7);g.fill();g.stroke();g.restore()}
const C0={p:[13.5,2.8,15.5],l:[4.8,1.75,1.6]};
function openScene(t){CT.mood('sunset');CT.car.c.position.set(4,0,1.6);CT.car.c.rotation.set(0,0,0);CT.car.spin(0);putGuy(CT.S,5.6,0,3.2,0.6);
  guy.pose({armL:[0.35,0],armR:[0.25,0],reachR:[0.55,1.0,-0.05],bendL:0.6,blink:BLINK(t),mouth:'grin',look:0.2,lookY:0.15,headYaw:0.3,jump:0.012*Math.sin(t*2*PI/1.72)});
  CT.neons.forEach((m,i)=>m.color.setHSL(((i*0.21)+0.02*Math.sin(t*2*PI/2.15))%1,1,0.6))}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));CT.shot(mix(C0.p,[12.2,2.6,13.8],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('HOW MANY STORES',W/2,205,88,{sw:18});txt('TO MAKE $1,000,000',W/2,320,92,{fill:'#5BE37A',sw:21});txt('IN GTA 6?',W/2,440,118,{fill:'#FFD23F',sw:24});g.restore();
    if(t>3.4){const s=pop(t,3.4);g.save();g.translate(W/2,1640);g.scale(s,s);counter(0,0,0);g.restore()}
    comic('HMM...',W*0.78,1120,76,t,1.5,{life:1.3,rot:0.08,fill:'#fff'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);const k=seg(t,CU.c1,CU.c2);putGuy(IN.S,-0.2,0,0.1,0);const grab=t>6.2;
    guy.pose({armL:[0.3,0],armR:[0.3,0],reachL:grab?[-0.25,1.15,0.75]:[-0.5,0.9,0.4],bendR:0.4,blink:BLINK(t),mouth:grab?'grin':'smile',look:-0.3,lookY:-0.6,headPitch:0.25});
    SMALLCASH.position.set(-0.4,1.12,0.1);IN.shot([lerp(4.2,3.6,k),2.9,lerp(10.5,9.5,k)],[0,1.75,-1.0],'linear-gradient(#67C9B3,#3A8E7E)');
    pill('CORNER STORE',W/2,330,62,'#67C9B3','#111',t,CU.c1+0.1,CU.c2);
    if(t>6.3){const s=pop(t,6.3);g.save();g.translate(W/2,520);g.scale(s,s);txt('~$2,000',0,0,140,{fill:'#5BE37A',sw:26});g.restore()}
    comic('AT MOST',W*0.72,700,64,t,7.2,{life:0.8,rot:0.1,fill:'#fff'});counter(W/2,1700,lerp(0,2000,ease(seg(t,6.3,7.0))))}
  else if(t<CU.c3){clear3d();setBG('neon');flash(t,CU.c2,0.15);const n=Math.floor(500*ease(seg(t,8.1,9.8)));
    for(let i=0;i<n;i++){const c=i%20,rw=Math.floor(i/20);storeIcon(100+c*46,560+rw*34,0.95)}
    panel(W/2,330,800,150);txt('500 STICK-UPS',W/2,330,78,{stroke:0,fill:'#FFD23F'});
    if(t>9.0){const s=pop(t,9.0);g.save();g.translate(W/2,1000);g.scale(s,s);g.rotate(-0.06);txt('×'+n,0,0,170,{fill:'#fff',sw:30});g.restore()}
    counter(W/2,1700,n*2000);comic('500?!',W*0.78,1230,90,t,9.3,{life:0.9,rot:0.1,fill:'#FF5A2E'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);const k=seg(t,CU.c3,CU.c4);GEMS.forEach((m,i)=>{m.rotation.y=t*2+i});
    putGuy(IN.S,40+lerp(-1.6,0,ease(seg(t,CU.c3,11.6))),0,-0.35,0);const w=t<11.6?walk(t,7):{armL:[0.9,0.2],armR:[0.9,-0.2],bendL:1.6,bendR:1.6,blink:BLINK(t),mouth:'o',mouthSize:0.7,wide:true,lookY:-0.5,headPitch:0.25,jump:0.01*Math.sin(t*6)};
    guy.pose({...w,headYaw:0});IN.shot([lerp(45,44,k),2.9,9.8],[40,1.75,-1.0],'linear-gradient(#5B2A86,#2A1E3E)');
    for(let i=0;i<5;i++){const p=proj(new THREE.Vector3(37.5+i*1.25,1.35,-1.5),IN.cam),ph=(t*1.3+i*0.37)%1;g.save();g.globalAlpha=1-ph;g.fillStyle='#fff';g.translate(p[0],p[1]-ph*30);g.rotate(PI/4);g.fillRect(-4,-18,8,36);g.fillRect(-18,-4,36,8);g.restore()}
    pill('JEWELRY STORE',W/2,330,62,'#B59CFF','#111',t,CU.c3+0.1,12.9);
    if(t>11.5){const s=pop(t,11.5);g.save();g.translate(W/2,520);g.scale(s,s);txt('UP TO $25K',0,0,120,{fill:'#3FF0FF',sw:24});g.restore()}
    if(t>13.75){const s=pop(t,13.75);g.save();g.translate(W/2,730);g.scale(s,s);g.rotate(-0.06);txt('×40',0,0,190,{fill:'#FFD23F',sw:32});g.restore()}
    comic('SHINY',W*0.24,800,70,t,11.8,{life:0.9,rot:-0.1,fill:'#fff'});counter(W/2,1700,t<13.75?25000:lerp(25000,1e6,ease(seg(t,13.75,14.4))))}
  else if(t<CU.c5){flash(t,CU.c4,0.15);const k=seg(t,CU.c4,CU.c5);const op=ease(seg(t,14.6,15.9));DOOR.rotation.y=-op*1.9;
    const cheer=t>16.2;putGuy(IN.S,80.4,0,0.4,-0.15);guy.pose(cheer?{armL:[2.6+0.2*Math.sin(t*10),0],armR:[2.6+0.2*Math.sin(t*10+1),0],bendL:0.3,bendR:0.3,mouth:'grin',blink:BLINK(t),jump:0.08*Math.abs(Math.sin(t*7))}:{...idle(t),mouth:'o',mouthSize:0.8,wide:true,look:-0.2,lookY:0.4});
    IN.shot([lerp(84.6,83.4,k),2.3,lerp(10.5,9.4,k)],[79.6,2.0,-1.2],'linear-gradient(#8E96A6,#4A505E)');
    pill('BIG BANK VAULT',W/2,330,62,'#FFD23F','#111',t,CU.c4+0.1,CU.c5);
    if(t>16.2){const s=pop(t,16.2);g.save();g.translate(W/2,500);g.scale(s,s);txt('UP TO $205K',0,0,118,{fill:'#5BE37A',sw:24});g.restore()}
    comic('CLUNK',W*0.25,1160,74,t,14.7,{life:0.8,rot:-0.1,fill:'#fff'});counter(W/2,1700,lerp(0,205000,ease(seg(t,16.2,18.3))))}
  else if(t<CU.c6){clear3d();setBG('gold');flash(t,CU.c5,0.15);
    for(let i=0;i<5;i++){if(t>18.7+i*0.12){const s=pop(t,18.7+i*0.12);vaultIcon(170+i*185,800,s*1.25)}}
    if(t>18.85){const s=pop(t,18.85);g.save();g.translate(W/2,1080);g.scale(s,s);g.rotate(-0.05);txt('JUST 5',0,0,180,{fill:'#FFD23F',sw:32});g.restore()}
    panel(W/2,330,820,150);txt('5 × $205K',W/2,330,82,{stroke:0,fill:'#5BE37A'});counter(W/2,1700,Math.min(1025000,lerp(205000,1025000,ease(seg(t,18.75,19.6)))));
    if(t>19.6)check(W/2+330,1700,1.4)}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.25));CT.shot(mix([17,4.0,18.5],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
