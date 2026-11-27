// ===== Why does buying stuff feel so good? (body/everyday, Black Friday) =====
const TT=20.5;
const CU={c1:2.65,c2:5.15,c3:9.25,c4:12.95,c5:16.6,c6:18.95};
guy.outfit({beanie:1});
// ---------- store ----------
const ST={S:new THREE.Scene()};lights(ST.S);ST.cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);
part(ST.S,new THREE.PlaneGeometry(60,60),toon(0xF3E9FF),[0,0,0],[1,1,1],[-PI/2,0,0],0);
for(let i=-8;i<8;i++)part(ST.S,new THREE.PlaneGeometry(0.06,60),toon(0xDCCDF2),[i*2,0.004,0],[1,1,1],[-PI/2,0,0],0);
part(ST.S,new THREE.PlaneGeometry(60,14),toon(0x7E5BEF),[0,7,-6],[1,1,1],[0,0,0],0);
for(const x of [-9,9])part(ST.S,new THREE.PlaneGeometry(30,14),toon(0x6A47D8),[x,7,4],[1,1,1],[0,x<0?PI/2:-PI/2,0],0);
const BOXC=[0xFF8FB1,0x3FF0FF,0xFFD23F,0x5BE37A,0xFF6A2B,0xFFFFFF];
function shelf(x,z,ry){const s=new THREE.Group();s.position.set(x,0,z);s.rotation.y=ry;ST.S.add(s);part(s,new THREE.BoxGeometry(4.2,3.6,0.9),toon(0xFFFFFF),[0,1.8,0],[1,1,1],[0,0,0],0.015);
  for(let r=0;r<3;r++){part(s,new THREE.BoxGeometry(4.0,0.08,0.95),toon(0xDDD3EE),[0,0.6+r*1.05,0.05],[1,1,1],[0,0,0],0);for(let k=0;k<6;k++){const h=0.4+hash(x*3+r*7+k)*0.45;part(s,new THREE.BoxGeometry(0.55,h,0.6),toon(BOXC[(k+r+Math.round(x))%6]),[-1.65+k*0.66,0.64+r*1.05+h/2,0.2],[1,1,1],[0,0,0],0.01)}}}
shelf(-4.2,-5.2,0);shelf(0.4,-5.2,0);shelf(5.0,-5.2,0);shelf(-7.8,0,PI/2);shelf(7.8,-1,-PI/2);
function bannerTex(s,bgc,fg){const t=canvasTex(512,256);const c=t.ctx;c.fillStyle=bgc;c.fillRect(0,0,512,256);c.fillStyle=fg;c.font='900 150px Inter';c.textAlign='center';c.textBaseline='middle';c.fillText(s,256,135);return t.tx}
const BAN=[];[['SALE','#FF2A5A','#fff',-3.5],['-50%','#FFD23F','#111',0.8],['SALE','#3FF0FF','#111',5.2]].forEach(([s,b,f,x],i)=>{const m=part(ST.S,new THREE.PlaneGeometry(2.6,1.3),new THREE.MeshBasicMaterial({map:bannerTex(s,b,f),side:THREE.DoubleSide}),[x,7.0,-2.5+i*0.6],[1,1,1],[0,0,0],0);BAN.push(m);part(ST.S,cap(0.015,1.2),toon(0x222230),[x,8.2,-2.5+i*0.6])});
// pedestal + shiny item (original gadget box)
const PED=new THREE.Group();PED.position.set(2.2,0,0.6);ST.S.add(PED);part(PED,new THREE.CylinderGeometry(0.7,0.8,1.3,28),toon(0xFFFFFF),[0,0.65,0],[1,1,1],[0,0,0],0.015);part(PED,new THREE.CylinderGeometry(0.74,0.74,0.08,28),basic(0xFFD23F),[0,1.32,0],[1,1,1],[0,0,0],0);
const ITEM=new THREE.Group();ITEM.position.set(0,1.75,0);PED.add(ITEM);part(ITEM,new THREE.BoxGeometry(0.7,0.7,0.7),toon(0x2FD6FF),[0,0,0],[1,1,1],[0,0,0],0.015);for(const r of [0,PI/2])part(ITEM,new THREE.BoxGeometry(0.74,0.74,0.14),toon(0xFFD23F),[0,0,0],[1,1,1],[0,r,0],0);part(ITEM,new THREE.TorusGeometry(0.16,0.06,10,20),toon(0xFFD23F),[0,0.44,0],[1,1,1],[0,0,0],0.008);
// shopping bags in his hands
const BAGS=[];for(const [k,col] of [['L',0xFF3DA6],['R',0x3FF0FF]]){const b=new THREE.Group();guy.arms[k].userData.hd.add(b);b.position.set(0,-0.42,0.02);part(b,new THREE.BoxGeometry(0.42,0.46,0.2),toon(col),[0,-0.08,0],[1,1,1],[0,0,0],0.012);part(b,new THREE.TorusGeometry(0.1,0.018,8,16,PI),toon(0x222230),[0,0.15,0],[1,1,1],[0,0,0],0);part(b,SPH,basic(0xffffff),[0,-0.05,0.105],[0.08,0.08,0.01],[0,0,0],0);BAGS.push(b)}
function bags(on){BAGS.forEach(b=>b.visible=on)}
function store(p,l){setBG('linear-gradient(#6A47D8,#3A2380)');ST.cam.position.set(...p);ST.cam.lookAt(...l);r.setClearColor(0,0);r.render(ST.S,ST.cam)}
// ---------- MRI scanner ----------
const MR={S:new THREE.Scene()};lights(MR.S);MR.cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);
part(MR.S,new THREE.PlaneGeometry(40,40),toon(0xCFE8EC),[0,0,0],[1,1,1],[-PI/2,0,0],0);part(MR.S,new THREE.PlaneGeometry(40,12),toon(0x8FCBD3),[0,6,-4],[1,1,1],[0,0,0],0);
const RING=new THREE.Group();RING.position.set(2.9,1.75,0);RING.scale.setScalar(1.45);MR.S.add(RING);part(RING,new THREE.TorusGeometry(1.35,0.62,20,48),toon(0xF6F7FB),[0,0,0],[1,1.0,1.6],[0,PI/2,0],0.02);part(RING,new THREE.TorusGeometry(0.78,0.06,10,40),basic(0x3FF0FF),[-0.75,0,0],[1,1,1],[0,PI/2,0],0);
part(MR.S,new THREE.BoxGeometry(2.2,0.6,2.6),toon(0xE3E6EE),[2.6,0.3,0],[1,1,1],[0,0,0],0.015);
const BED=new THREE.Group();MR.S.add(BED);part(BED,new THREE.BoxGeometry(4.2,0.22,1.1),toon(0x7FA8FF),[0,1.05,0],[1,1,1],[0,0,0],0.012);part(BED,new THREE.BoxGeometry(3.4,0.9,0.8),toon(0xE3E6EE),[-0.6,0.45,0],[1,1,1],[0,0,0],0.012);
// monitor showing the product / price
const MON=canvasTex(512,320);const monM=part(MR.S,new THREE.PlaneGeometry(2.4,1.5),new THREE.MeshBasicMaterial({map:MON.tx}),[-1.4,3.6,-2.0],[1,1,1],[0,0.25,0],0);part(MR.S,new THREE.BoxGeometry(2.6,1.7,0.1),toon(0x22222C),[-1.4,3.6,-2.07],[1,1,1],[0,0.25,0],0.01);
function monDraw(mode){const c=MON.ctx;c.fillStyle='#1A1030';c.fillRect(0,0,512,320);if(mode==='item'){c.fillStyle='#2FD6FF';c.fillRect(186,90,140,140);c.fillStyle='#FFD23F';c.fillRect(242,90,28,140);c.fillRect(186,146,140,28);c.fillStyle='#fff';c.font='900 40px Inter';c.textAlign='center';c.fillText('WANT IT!',256,62)}
  else{c.fillStyle='#FF4A4A';c.font='900 120px Inter';c.textAlign='center';c.textBaseline='middle';c.fillText('$999',256,170)}MON.tx.needsUpdate=true}
function lieDown(x){MR.S.add(holder);holder.rotation.order='YXZ';holder.position.set(x,1.62,0);holder.rotation.set(-PI/2,-PI/2,0);holder.scale.setScalar(1)}
function mri(p,l){setBG('linear-gradient(#BFE6EC,#8FCBD3)');MR.cam.position.set(...p);MR.cam.lookAt(...l);r.setClearColor(0,0);r.render(MR.S,MR.cam)}
// ---------- 2D ----------
function brain(x,y,s,rew,pain){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#FFB3C7';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.ellipse(-70,0,150,125,0,0,7);g.fill();g.stroke();g.beginPath();g.ellipse(70,0,150,125,0,0,7);g.fill();g.stroke();
  g.fillStyle='#FFB3C7';g.fillRect(-90,-110,180,220);g.strokeStyle='#E07A98';g.lineWidth=8;g.lineCap='round';for(let i=0;i<7;i++){g.beginPath();const a=i*0.9;g.arc(-120+i*40,-30+Math.sin(a)*50,36,a,a+2.2);g.stroke()}
  g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.moveTo(0,-118);g.lineTo(0,118);g.stroke();g.fillStyle='#FFB3C7';rr(-30,110,60,70,20);g.fill();g.stroke();
  if(rew>0){const gr=g.createRadialGradient(-30,40,0,-30,40,90);gr.addColorStop(0,`rgba(91,227,122,${rew})`);gr.addColorStop(1,'rgba(91,227,122,0)');g.fillStyle=gr;g.beginPath();g.arc(-30,40,90,0,7);g.fill();g.fillStyle=`rgba(91,227,122,${rew})`;g.beginPath();g.arc(-30,40,30,0,7);g.fill()}
  if(pain>0){const gr=g.createRadialGradient(120,-10,0,120,-10,90);gr.addColorStop(0,`rgba(255,42,42,${pain})`);gr.addColorStop(1,'rgba(255,42,42,0)');g.fillStyle=gr;g.beginPath();g.arc(120,-10,90,0,7);g.fill();g.fillStyle=`rgba(255,42,42,${pain})`;g.beginPath();g.arc(120,-10,30,0,7);g.fill()}
  g.restore()}
function tag(x,y,s,txtS,col,rot=0){g.save();g.translate(x,y);g.rotate(rot);g.scale(s,s);g.fillStyle=col;g.strokeStyle='#111';g.lineWidth=9;g.beginPath();g.moveTo(-150,-70);g.lineTo(110,-70);g.lineTo(170,0);g.lineTo(110,70);g.lineTo(-150,70);g.closePath();g.fill();g.stroke();g.fillStyle='#fff';g.beginPath();g.arc(120,0,14,0,7);g.fill();g.stroke();g.restore();txt(txtS,x-20*s,y,78*s,{fill:'#fff',sw:16*s})}
// ---------- opening ----------
const C0={p:[1.9,3.0,12.6],l:[0.5,1.8,0]};
function openScene(t){ST.S.add(holder);holder.rotation.order='XYZ';holder.position.set(0,0,1.2);holder.rotation.set(0,0.25,0);holder.scale.setScalar(1);bags(true);ITEM.rotation.y=t*2*PI/(TT/4);
  BAN.forEach((b,i)=>b.rotation.y=0.12*Math.sin(t*2*PI/(TT/5)+i));
  guy.pose({armL:[0.4+0.08*Math.sin(t*2*PI/(TT/10)),0.15],armR:[0.4+0.08*Math.sin(t*2*PI/(TT/10)+1),-0.15],mouth:'grin',blink:BLINK(t),look:0.2,headYaw:0.2,jump:0.015*Math.abs(Math.sin(t*2*PI/(TT/10)))})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;bags(false);
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.1,CU.c1));store(mix(C0.p,[1.7,2.85,11.8],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHY DOES',W/2,180,90,{sw:18});txt('BUYING STUFF',W/2,290,112,{fill:'#FFD23F',sw:22});txt('FEEL SO GOOD?',W/2,410,104,{fill:'#3FF0FF',sw:22});g.restore();
    comic('BLACK FRIDAY!',W/2,1640,72,t,1.4,{life:1.3,rot:-0.05,fill:'#FF7AC2'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);const u=t-CU.c1;ITEM.rotation.y=t*1.5;ITEM.position.y=1.75+0.08*Math.sin(t*4);
    ST.S.add(holder);holder.rotation.order='XYZ';const wk=clamp(u/1.6);holder.position.set(lerp(-2.6,0.9,ease(wk)),0,1.0);holder.rotation.set(0,PI/2-0.3*ease(seg(t,3.9,4.4)),0);holder.scale.setScalar(1);
    guy.pose(wk<1?walk(t,8,{mouth:'o',wide:true}):{armL:[1.3,0.3],armR:[1.3,-0.3],bendL:0.3,bendR:0.3,mouth:'grin',blink:false,wide:true,look:0.4,jump:0.03*Math.abs(Math.sin(t*9))});
    store([5.6,2.9,10.8],[1.3,1.8,0.4]);const ip=proj(new THREE.Vector3(2.2,2.0,0.6),ST.cam);
    for(let i=0;i<6;i++){const d=((t*0.9+i/6)%1);g.save();g.globalAlpha=1-d;heart(ip[0]+Math.sin(i*2.1)*120,ip[1]-80-d*260,0.5+0.3*d,'#FF3D7F');g.restore()}
    for(let i=0;i<8;i++){const a=i/8*PI*2+t;g.strokeStyle='rgba(255,230,120,0.8)';g.lineWidth=8;g.beginPath();g.moveTo(ip[0]+Math.cos(a)*90,ip[1]+Math.sin(a)*90);g.lineTo(ip[0]+Math.cos(a)*140,ip[1]+Math.sin(a)*140);g.stroke()}
    if(t>4.5)pill('DOPAMINE!',W/2,1640,72,'#5BE37A','#111',t,4.5,CU.c2);comic('OOOH',W*0.3,520,110,t,3.0,{life:1.1,rot:-0.1,fill:'#FFD23F'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);clear3d();setBG('radial-gradient(circle at 50% 45%,#2B1A5E,#120A2A 75%)');
    const x0=130,x1=W-110,y0=1180,yt=480;g.save();g.fillStyle='rgba(255,255,255,0.06)';rr(70,330,W-140,960,40);g.fill();g.restore();
    g.strokeStyle='#fff';g.lineWidth=8;g.beginPath();g.moveTo(x0,yt-30);g.lineTo(x0,y0);g.lineTo(x1,y0);g.stroke();txt('DOPAMINE',x0+150,yt-60,44,{fill:'#5BE37A',sw:10});
    const xb=x0+(x1-x0)*0.62;const f=u=>u<0.62?0.08+0.92*Math.pow(u/0.62,2.2):0.18+0.82*Math.exp(-(u-0.62)*9);const k=easeOut(seg(t,5.5,7.7));
    g.save();g.lineCap='round';g.lineJoin='round';g.strokeStyle='#111';g.lineWidth=26;g.beginPath();for(let i=0;i<=100*k;i++){const u=i/100,x=x0+(x1-x0)*u,y=y0-(y0-yt)*f(u);i?g.lineTo(x,y):g.moveTo(x,y)}g.stroke();g.strokeStyle='#5BE37A';g.lineWidth=14;g.stroke();g.restore();
    if(k>0.5)txtA('THE HUNT',x0+(x1-x0)*0.3,y0+70,58,seg(t,6.4,6.7),{fill:'#FFD23F',sw:12});
    if(t>7.1){g.save();g.setLineDash([18,14]);g.strokeStyle='#FF7AC2';g.lineWidth=7;g.beginPath();g.moveTo(xb,yt-20);g.lineTo(xb,y0);g.stroke();g.restore();pill('BUY',xb,y0+75,50,'#FF7AC2','#111',t,7.1,CU.c3)}
    if(t>7.9)pill('PEAK = BEFORE YOU BUY',W/2,1640,56,'#5BE37A','#111',t,7.9,CU.c3);comic('WAIT WHAT?',W*0.62,300,90,t,6.15,{life:1.0,rot:0.08,fill:'#FF7AC2'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);const slide=ease(seg(t,CU.c3,10.6));BED.position.x=lerp(-1.6,0,slide);lieDown(lerp(-2.5,-0.9,slide));monDraw('item');
    guy.pose({mouth:'smile',blink:BLINK(t),look:0.0,armL:[0.15,0.1],armR:[0.15,-0.1]});
    mri([lerp(-3.6,-2.6,slide),6.4,10.5],[0.2,1.6,0]);
    const rw=seg(t,11.4,12.0);brain(W/2,420,1.0,rw*(0.8+0.2*Math.sin(t*12)),0);if(rw>0)txtA('REWARD CENTER',W/2,640,52,rw,{fill:'#5BE37A',sw:12});
    pill('BRAIN SCAN',W*0.5,1640,56,'#3FF0FF','#111',t,9.5,CU.c4);comic('DING!',W*0.25,330,90,t,11.6,{life:0.8,rot:-0.12,fill:'#5BE37A'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);clear3d();setBG('radial-gradient(circle at 50% 45%,#3A1440,#14061A 75%)');
    const pn=seg(t,14.4,15.0),pr=seg(t,15.6,16.0);brain(W/2,760,1.55,0.85,pn*(0.8+0.2*Math.sin(t*14)));
    txtA('REWARD',W/2-120,1060,50,1,{fill:'#5BE37A',sw:12});if(pn>0)txtA('PAIN AREA',W/2+230,520,54,pn,{fill:'#FF4A4A',sw:12});
    if(t>15.6){const s=pop(t,15.6);tag(W/2,320,s*1.1,'$999','#FF2A2A',-0.06)}
    comic('OUCH!',W*0.78,1120,96,t,15.75,{life:0.9,rot:0.12,fill:'#FF4A4A'});pill('INSULA',W/2+230,600,40,'#FF4A4A','#fff',t,14.6,CU.c5)}
  else if(t<CU.c6){flash(t,CU.c5,0.15);ST.S.add(holder);holder.rotation.order='XYZ';holder.position.set(0.3,0,1.2);holder.rotation.set(0,0.4,0);holder.scale.setScalar(1);bags(true);ITEM.rotation.y=t*2;
    const j=Math.max(0,Math.sin((t-17.4)*7));guy.pose({armL:[t>17.4?2.6:0.4,0.4],armR:[t>17.4?2.6:0.4,-0.4],bendL:0.3,bendR:0.3,mouth:t>17.2?'grin':'o',wide:true,blink:false,jump:t>17.4?0.25*j:0});
    store([3.0,2.6,11.0],[0.7,1.9,0.6]);const s=pop(t,16.8);tag(W/2,330,s,'$999','#FF2A2A',-0.06);
    if(t>17.15){const k=seg(t,17.15,17.4);g.save();g.strokeStyle='#111';g.lineWidth=26;g.lineCap='round';g.beginPath();g.moveTo(W/2-170,380);g.lineTo(W/2-170+340*k,280);g.stroke();g.strokeStyle='#fff';g.lineWidth=12;g.stroke();g.restore()}
    if(t>17.5){const s2=pop(t,17.5);g.save();g.translate(W/2+180,560);g.rotate(0.12);g.scale(s2,s2);g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();for(let i=0;i<24;i++){const a=i/24*PI*2,R=i%2?120:155;g.lineTo(Math.cos(a)*R,Math.sin(a)*R)}g.closePath();g.fill();g.stroke();g.restore();txtA('-70%',W/2+180,560,84,s2,{fill:'#FF2A5A',sw:16})}
    pill('SALE = LESS PAIN',W/2,1640,60,'#5BE37A','#111',t,17.6,CU.c6)}
  else{const tt=t-TT;openScene(tt);const k=ease(seg(t,CU.c6,TT-0.1));store(mix([2.4,3.3,13.6],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
