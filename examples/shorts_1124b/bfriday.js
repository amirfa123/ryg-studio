// ===== How much do Americans spend online on Black Friday? (wildcard/money) =====
const TT=19.6;
const CU={c1:3.3,c2:7.3,c3:11.55,c4:16.05,c5:18.0};
guy.outfit({snapforward:1,chain:1});
const R=scene('room');
function tvSale(t){tvDraw(R,(c,w,h)=>{c.fillStyle='#0B0B12';c.fillRect(0,0,w,h);c.fillStyle=Math.sin(t*8)>0?'#FFD23F':'#FF3DA6';c.font='900 64px Inter';c.textAlign='center';c.textBaseline='middle';c.fillText('BLACK FRIDAY',w/2,90);
  c.fillStyle='#fff';c.font='900 130px Inter';c.fillText('-70%',w/2,205);c.fillStyle='#3FF0FF';c.font='900 40px Inter';c.fillText('ADD TO CART',w/2,310)})}
function couch(t,o={}){R.S.add(holder);holder.rotation.order='XYZ';holder.position.set(0,0.15,1.55);holder.rotation.set(0,PI-0.45,0);holder.scale.setScalar(1);holder.visible=true;guy.pose({...SIT,blink:BLINK(t),mouth:'grin',...o})}
function openScene(t){tvSale(t);const b=Math.sin(t*2*PI/0.8);couch(t,{armR:[1.5+0.15*b,-1.2],bendR:0.2,armL:[0.3,0],headPitch:-0.05,headYaw:-0.15})}
function roomShot(p,l){R.cam.position.set(...p);R.cam.lookAt(...l);setBG('room');r.setClearColor(0,0);r.render(R.S,R.cam)}
const C0={p:[4.6,2.9,-2.6],l:[0.2,1.1,1.3]};
// ---------- cash vault (growing pile) ----------
const CV={S:new THREE.Scene()};lights(CV.S);CV.cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);
part(CV.S,new THREE.CylinderGeometry(6,6,0.3,48),toon(0x2B2235),[0,-0.15,0],[1,1,1],[0,0,0],0.02);part(CV.S,new THREE.TorusGeometry(6,0.08,8,64),basic(0xFFD23F),[0,0.02,0],[1,1,1],[PI/2,0,0],0);
const BTEX=canvasTex(128,64);{const c=BTEX.ctx;c.fillStyle='#7BC67E';c.fillRect(0,0,128,64);c.fillStyle='#F4F0D8';c.fillRect(52,0,24,64);c.strokeStyle='#3E7E44';c.lineWidth=4;c.strokeRect(2,2,124,60)}
const BRM=new THREE.MeshToonMaterial({map:BTEX.tx,gradientMap:GM});const BRICKS=[];
for(let y=0;y<6;y++)for(let x=0;x<6-y;x++)for(let z=0;z<3;z++){const m=part(CV.S,new THREE.BoxGeometry(0.6,0.28,0.32),BRM,[1.0+(x+y*0.5)*0.62,0.14+y*0.29,-0.6+z*0.34],[1,1,1],[0,0,0],0.006);m.visible=false;BRICKS.push(m)}
BRICKS.sort((a,b)=>a.position.y-b.position.y||a.position.x-b.position.x);
function cvShot(p,l){CV.cam.position.set(...p);CV.cam.lookAt(...l);setBG('gold');r.setClearColor(0,0);r.render(CV.S,CV.cam)}
// ---------- the stack to the sky ----------
const SK={S:new THREE.Scene()};lights(SK.S);SK.cam=new THREE.PerspectiveCamera(30,W/H,0.1,400);
part(SK.S,new THREE.PlaneGeometry(400,400),toon(0x6CC24A),[0,0,0],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<30;i++){const x=(hash(i*3)-0.5)*80,z=-12-hash(i*5)*60,h=3+hash(i)*10;part(SK.S,new THREE.BoxGeometry(4,h,4),toon([0xFF8FB1,0x7FE0D6,0xFFD27F,0xB59CFF][i%4]),[x,h/2,z],[1,1,1],[0,0,0],0)}
const STEX=canvasTex(64,256);{const c=STEX.ctx;for(let y=0;y<256;y+=4){c.fillStyle=(y/4)%2?'#7BC67E':'#6AB36D';c.fillRect(0,y,64,4)}c.fillStyle='#F4F0D8';c.fillRect(24,0,16,256)}STEX.tx.wrapS=STEX.tx.wrapT=THREE.RepeatWrapping;
const STACK=part(SK.S,new THREE.BoxGeometry(1,1,0.5),new THREE.MeshToonMaterial({map:STEX.tx,gradientMap:GM}),[1.0,0.5,0],[1,1,1],[0,0,0],0.01);
const CLOUDS=new THREE.Group();SK.S.add(CLOUDS);for(let i=0;i<26;i++){const cl=new THREE.Group();cl.position.set((hash(i*7)-0.5)*24,10+hash(i*3)*60,-4-hash(i*9)*14);CLOUDS.add(cl);for(let k=0;k<4;k++)part(cl,SPH,toon(0xFFFFFF),[k*0.9-1.3,0.2*hash(k+i),0],[1.0+0.3*hash(k*i+1),0.6,0.7],[0,0,0],0.01)}
function stackH(t){return lerp(0.3,72,Math.pow(easeOut(seg(t,12.6,15.6)),1.3))}
// ---------- 2D helpers ----------
function bill(x,y,s,rot){g.save();g.translate(x,y);g.rotate(rot);g.scale(s,s);g.fillStyle='#7BC67E';g.strokeStyle='#2E6E34';g.lineWidth=6;rr(-90,-42,180,84,8);g.fill();g.stroke();g.fillStyle='#F4F0D8';g.beginPath();g.ellipse(0,0,26,32,0,0,7);g.fill();g.stroke();g.fillStyle='#2E6E34';g.font='900 30px Inter';g.textAlign='center';g.textBaseline='middle';g.fillText('100',-58,-20);g.fillText('100',58,22);g.restore()}
function billRain(t,t0,n=24){for(let i=0;i<n;i++){const d=t-t0-hash(i)*1.2;if(d<0)continue;const x=hash(i*3)*W+Math.sin(d*2+i)*60,y=-100+d*(500+hash(i*5)*300);if(y>H+100)continue;bill(x,y,0.9+0.4*hash(i*7),Math.sin(d*3+i)*0.6)}}
function saleTags(t){const L=['-70%','SALE','-50%','DEAL'];for(let i=0;i<4;i++){const x=[200,880,170,900][i],y=[640,700,1120,1080][i]+18*Math.sin(t*3+i);g.save();g.translate(x,y);g.rotate(0.2*Math.sin(t*2+i));g.fillStyle=i%2?'#FFD23F':'#FF3DA6';g.strokeStyle='#111';g.lineWidth=7;rr(-95,-48,190,96,16);g.fill();g.stroke();g.restore();txt(L[i],x,y,52,{fill:i%2?'#111':'#fff',stroke:0})}}
function bigNum(v){return '$'+Math.round(v).toLocaleString('en-US')}
// ---------- render ----------
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.1,CU.c1));roomShot(mix(C0.p,[4.0,2.7,-1.9],k),C0.l);saleTags(t);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('HOW MUCH DO AMERICANS',W/2,190,72,{sw:15});txt('SPEND ONLINE ON',W/2,300,90,{sw:17});txt('BLACK FRIDAY?',W/2,420,120,{fill:'#FFD23F',sw:22});g.restore()}
  else if(t<CU.c2){flash(t,CU.c1,0.15);CV.S.add(holder);holder.position.set(0.0,0,0.5);holder.rotation.set(0,0.35,0);holder.scale.setScalar(1);const cheer=t>6.3;
    guy.pose(idle(t,{mouth:cheer?'o':'grin',mouthSize:0.8,wide:cheer,armL:cheer?[2.6,0]:[0.3,0],armR:cheer?[2.6,0]:[0.3,0],jump:cheer?0.15*Math.abs(Math.sin(t*9)):0}));
    const n=Math.floor(BRICKS.length*easeOut(seg(t,4.3,6.6)));BRICKS.forEach((b,i)=>b.visible=i<n);const k=ease(seg(t,CU.c1,CU.c2));cvShot([lerp(1.4,1.8,k),lerp(3.0,3.4,k),lerp(12.5,13.5,k)],[1.3,1.0,0]);
    pill('LAST YEAR (US, ONLINE)',W/2,330,60,'#FFFFFF','#111',t,3.4,CU.c2);const v=11.8e9*Math.pow(easeOut(seg(t,4.3,6.5)),2);panel(W/2,520,940,190,'rgba(10,12,25,0.88)','#5BE37A',40);txt(bigNum(v),W/2,525,88,{stroke:0,fill:'#7CFF6B'});
    comic('$11.8 BILLION!',W/2,700,96,t,6.45,{life:0.85,fill:'#FFD23F'});billRain(t,6.4,16)}
  else if(t<CU.c3){flash(t,CU.c2,0.15);clear3d();setBG('blue');const sec=Math.max(0,Math.floor(t-7.9));const ph=(t-7.9)-Math.floor(t-7.9);
    clockFace(W/2,900,280,10,(sec+easeOut(clamp(ph*4)))*(60/60)+0,0);
    // second hand overlay (red sweeping ticks)
    const a=(sec+backOut(clamp(ph*4)))/60*PI*2*5;g.save();g.translate(W/2,900);g.rotate(a);g.strokeStyle='#111';g.lineWidth=16;g.lineCap='round';g.beginPath();g.moveTo(0,40);g.lineTo(0,-250);g.stroke();g.strokeStyle='#FF3DA6';g.lineWidth=8;g.stroke();g.restore();
    for(let k=0;k<=sec;k++){if(t<7.9)break;const d=t-7.9-k;if(d<0||d>1.0)continue;const al=1-d;g.save();g.globalAlpha=al;txt('+$136,000',W/2+(k%2?220:-220),1290-d*200,70,{fill:'#7CFF6B',sw:14});g.restore();bill(W/2+(k%2?-260:260),900+d*600,1.2,d*4)}
    panel(W/2,400,860,170,'rgba(10,12,25,0.88)','#3FF0FF',36);txt('$136,000+',W/2,370,90,{stroke:0,fill:'#7CFF6B'});txt('EVERY SECOND',W/2,445,44,{stroke:0,fill:'#fff'});
    comic('CHA-CHING',W*0.28,640,76,t,8.9,{life:0.7,rot:-0.12,fill:'#FFD23F'});comic('EVERY. SINGLE.',W*0.7,1280,70,t,10.0,{life:1.3,rot:0.08,fill:'#FFFFFF'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);const h=stackH(t);STACK.scale.set(1.0,h,0.5);STACK.position.y=h/2;STACK.material.map.repeat.set(1,h*2);
    SK.S.add(holder);holder.position.set(-0.3,0,0.4);holder.rotation.set(0,0.4,0);holder.scale.setScalar(1);const up=easeOut(seg(t,12.9,15.6));
    guy.pose(idle(t,{mouth:up>0.2?'o':'grin',mouthSize:0.9,wide:up>0.2,headPitch:-0.5*up,armR:[0.9,-0.6],bendR:0.4}));
    const cy=lerp(1.8,58,Math.pow(up,1.2)),ly=lerp(1.3,72,Math.pow(up,1.1));SK.cam.position.set(4.2+6*up,cy,9+22*up);SK.cam.lookAt(0.6,ly,0);
    setBG(up<0.5?'linear-gradient(#4FB8FF,#9BDCFF 60%,#E9F7FF)':'linear-gradient(#0B1240,#1F4FA8 60%,#7FC1FF)');r.setClearColor(0,0);r.render(SK.S,SK.cam);
    pill('$100 BILLS',W/2,330,84,'#7CFF6B','#111',t,11.6,12.9);const km=12.9*easeOut(seg(t,12.6,15.6))**1.3;
    if(t>12.9){panel(W-190,860,280,230,'rgba(10,12,25,0.85)','#FFD23F',30);txt('HEIGHT',W-190,800,36,{stroke:0,fill:'#fff'});txt(km.toFixed(1),W-190,870,84,{stroke:0,fill:'#FFD23F'});txt('KM',W-190,930,36,{stroke:0,fill:'#fff'})}
    pill('PAST THE CLOUDS',W/2,330,72,'#FFFFFF','#111',t,14.0,CU.c4);comic('WHOOSH',W*0.3,640,84,t,13.0,{life:0.8,rot:-0.12,fill:'#FFFFFF'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);clear3d();setBG('linear-gradient(#0B1240,#3A6FB0 70%,#9BDCFF)');
    const base=1160,pxkm=50;const gr=easeOut(seg(t,16.1,16.6));
    g.fillStyle='#6CC24A';g.fillRect(0,base,W,H-base);
    const eh=8.85*pxkm*gr,sh=12.9*pxkm*easeOut(seg(t,16.4,17.1));
    g.fillStyle='#8A8FA0';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.moveTo(80,base);g.lineTo(330,base-eh);g.lineTo(580,base);g.closePath();g.fill();g.stroke();
    if(eh>60){g.fillStyle='#fff';g.beginPath();g.moveTo(330,base-eh);g.lineTo(330+60,base-eh+eh*0.24);g.lineTo(330-60,base-eh+eh*0.24);g.closePath();g.fill();g.stroke()}
    g.fillStyle='#7BC67E';g.strokeStyle='#111';rr(730,base-sh,140,sh,8);g.fill();g.stroke();g.fillStyle='#F4F0D8';g.fillRect(785,base-sh+6,30,Math.max(0,sh-12));
    txtA('EVEREST',330,base+70,54,gr);txtA('8.8 KM',330,base+130,48,gr,{fill:'#FFD23F'});txtA('CASH STACK',800,base+70,54,gr);txtA('12.9 KM',800,base+130,48,gr,{fill:'#7CFF6B'});
    if(t>16.9){g.save();g.setLineDash([24,16]);g.strokeStyle='#FFD23F';g.lineWidth=8;g.beginPath();g.moveTo(330,base-eh);g.lineTo(900,base-eh);g.stroke();g.restore()}
    comic('WAY TALLER',W/2,420,100,t,16.9,{life:1.1,fill:'#FFD23F'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c5,TT-0.25));roomShot(mix([2.6,2.0,-2.2],C0.p,k),C0.l);saleTags(t-TT);flash(t,CU.c5,0.15)}
  vignette();captions(t)};
