// ===== What would happen if the Moon crashed into Earth? (crazy what-if) =====
const TT=22.15;
const CU={c1:3.08,c2:5.62,c3:8.18,c4:10.36,c5:15.16,c6:17.12,c7:20.36};
guy.outfit({hardhat:1});
// ---------- moon texture ----------
const MT=canvasTex(512,256);{const c=MT.ctx;c.fillStyle='#D8D4CC';c.fillRect(0,0,512,256);for(let i=0;i<40;i++){const x=hash(i*3.1)*512,y=hash(i*5.3)*256,rd=6+hash(i*7.7)*26;c.fillStyle=i%3?'#B9B4AA':'#A39E94';c.beginPath();c.arc(x,y,rd,0,7);c.fill();c.fillStyle='rgba(255,255,255,0.25)';c.beginPath();c.arc(x-rd*0.2,y-rd*0.2,rd*0.6,0,7);c.fill()}
  for(let i=0;i<6;i++){c.fillStyle='#9C978E';c.beginPath();c.ellipse(hash(i*11)*512,hash(i*13)*256,40+hash(i)*50,25+hash(i*2)*30,0,0,7);c.fill()}}
// crack overlay texture
const CT=canvasTex(512,256);{const c=CT.ctx;c.clearRect(0,0,512,256);c.strokeStyle="#FF5A1F";c.lineWidth=2;c.lineCap='round';for(let k=0;k<16;k++){let x=hash(k*3)*512,y=30+hash(k*5)*196;c.beginPath();c.moveTo(x,y);for(let s=0;s<7;s++){x+=(hash(k*9+s)-0.5)*70;y+=(hash(k*7+s*3)-0.5)*60;c.lineTo(x,y)}c.stroke()}}
// ---------- night beach set ----------
const B={S:new THREE.Scene()};lights(B.S);B.cam=new THREE.PerspectiveCamera(34,W/H,0.1,900);
B.shot=(p,l,bgc)=>{B.cam.position.set(...p);B.cam.lookAt(...l);setBG(bgc||'linear-gradient(#060A26 0%,#14205A 50%,#2E3F86 85%,#4A5AA0 100%)');r.setClearColor(0,0);r.render(B.S,B.cam)};
{const n=700,pos=new Float32Array(n*3);for(let i=0;i<n;i++){const a=(hash(i*1.3)-0.5)*PI*1.4,b=0.05+hash(i*2.9)*1.3,R0=500;pos[i*3]=R0*Math.sin(a)*Math.cos(b);pos[i*3+1]=R0*Math.sin(b);pos[i*3+2]=-R0*Math.cos(a)*Math.cos(b)}const gg=new THREE.BufferGeometry();gg.setAttribute('position',new THREE.BufferAttribute(pos,3));B.S.add(new THREE.Points(gg,new THREE.PointsMaterial({color:0xffffff,size:2.2,sizeAttenuation:false})))}
part(B.S,new THREE.PlaneGeometry(600,300),toon(0xE6C98A),[0,0,148],[1,1,1],[-PI/2,0,0],0); // sand (z > -2)
const SEA=part(B.S,new THREE.PlaneGeometry(900,400),toon(0x1E4E9A),[0,0.02,-202],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<10;i++)part(B.S,new THREE.PlaneGeometry(200,0.08),basic(0x7FB8FF),[0,0.03,-4-i*6],[1,1,1],[-PI/2,0,0],0);
// lighthouse (left) + palm-free dunes
const LH=new THREE.Group();LH.position.set(-6,0,-6);B.S.add(LH);for(let k=0;k<5;k++)part(LH,new THREE.CylinderGeometry(0.75-k*0.07,0.8-k*0.07,1.2,20),toon(k%2?0xffffff:0xD3242E),[0,0.6+k*1.2,0],[1,1,1],[0,0,0],0.01);part(LH,new THREE.CylinderGeometry(0.55,0.55,0.8,16),basic(0xFFF2A8),[0,6.4,0],[1,1,1],[0,0,0],0.01);part(LH,new THREE.ConeGeometry(0.7,0.7,16),toon(0x2A2A35),[0,7.15,0],[1,1,1],[0,0,0],0.01);
for(const [x,z,s] of [[4,3,1.2],[-3,4,0.9],[6.5,-0.5,1.5]])part(B.S,SPH,toon(0xD9B874),[x,0,z],[1.6*s,0.5*s,1.0*s],[0,0,0],0.01);
// big moon in the sky
const MOON=new THREE.Group();B.S.add(MOON);const MS=new THREE.Mesh(new THREE.SphereGeometry(1,48,24),new THREE.MeshToonMaterial({map:MT.tx,gradientMap:GM}));MOON.add(MS);
const CR=new THREE.Mesh(new THREE.SphereGeometry(1.004,48,24),new THREE.MeshBasicMaterial({map:CT.tx,transparent:true,opacity:0}));MOON.add(CR);
const GLOW=new THREE.Mesh(new THREE.SphereGeometry(1.15,32,16),new THREE.MeshBasicMaterial({color:0xFFF4D0,transparent:true,opacity:0.12}));MOON.add(GLOW);
function moonAt(x,y,s){MOON.position.set(x,y,-120);MOON.scale.setScalar(s);MOON.rotation.set(0.2,0.8,0)}
// ring arc in sky (hidden until the end)
const RINGT=canvasTex(1024,64);{const c=RINGT.ctx;for(let x=0;x<1024;x++){const v=0.5+0.5*Math.sin(x*0.11)*Math.sin(x*0.023);c.fillStyle=`rgba(${230+25*v|0},${200+30*v|0},${170+40*v|0},${0.35+0.55*v})`;c.fillRect(x,0,1,64)}}
const SKYRING=new THREE.Mesh(new THREE.RingGeometry(170,230,128,1),new THREE.MeshBasicMaterial({color:0xFFE8C8,transparent:true,opacity:0.75,side:THREE.DoubleSide}));SKYRING.position.set(0,-40,-260);SKYRING.rotation.set(-0.15,0,0.35);B.S.add(SKYRING);SKYRING.visible=false;
// giant wave (half-cylinder) + foam
const WAVE=new THREE.Group();B.S.add(WAVE);part(WAVE,new THREE.CylinderGeometry(1,1,60,40),toon(0x2C6FD1),[0,0,0],[1,1,1],[0,0,PI/2],0);
for(let i=0;i<40;i++)part(WAVE,SPH,toon(0xEAF6FF),[(i-20)*1.5,0.98,0.1+hash(i)*0.2],[0.9,0.25,0.5],[0,0,0],0);WAVE.visible=false;
// ---------- space set (Earth + ring) ----------
const SP={S:new THREE.Scene()};lights(SP.S);SP.cam=new THREE.PerspectiveCamera(30,W/H,0.1,3000);
SP.shot=(p,l)=>{SP.cam.position.set(...p);SP.cam.lookAt(...l);setBG('radial-gradient(circle at 50% 45%,#1A1F4A,#03040A 75%)');r.setClearColor(0,0);r.render(SP.S,SP.cam)};
{const n=900,pos=new Float32Array(n*3);for(let i=0;i<n;i++){const a=hash(i*1.3)*PI*2,b=Math.acos(2*hash(i*2.9)-1),R0=900;pos[i*3]=R0*Math.sin(b)*Math.cos(a);pos[i*3+1]=R0*Math.cos(b);pos[i*3+2]=R0*Math.sin(b)*Math.sin(a)}const gg=new THREE.BufferGeometry();gg.setAttribute('position',new THREE.BufferAttribute(pos,3));SP.S.add(new THREE.Points(gg,new THREE.PointsMaterial({color:0xffffff,size:1.6,sizeAttenuation:false})))}
const ET=canvasTex(1024,512);{const c=ET.ctx;c.fillStyle='#1F6FC4';c.fillRect(0,0,1024,512);for(let i=0;i<22;i++){c.fillStyle=i%5?'#3DAA5C':'#E6CF8F';c.beginPath();c.ellipse(hash(i*3.3)*1024,80+hash(i*5.1)*350,40+hash(i*7)*110,25+hash(i*9)*70,hash(i)*3,0,7);c.fill()}c.fillStyle='rgba(255,255,255,0.75)';for(let i=0;i<30;i++){c.beginPath();c.ellipse(hash(i*11)*1024,hash(i*13)*512,30+hash(i)*80,8+hash(i*2)*14,0,0,7);c.fill()}c.fillStyle='#F4F8FF';c.fillRect(0,0,1024,26);c.fillRect(0,486,1024,26)}
const EARTH=new THREE.Mesh(new THREE.SphereGeometry(10,64,32),new THREE.MeshToonMaterial({map:ET.tx,gradientMap:GM}));SP.S.add(EARTH);
const ATM=new THREE.Mesh(new THREE.SphereGeometry(10.4,48,24),new THREE.MeshBasicMaterial({color:0x7FD3FF,transparent:true,opacity:0.16}));SP.S.add(ATM);
const RG=new THREE.Group();RG.rotation.set(-1.25,0,0.32);SP.S.add(RG);
const RING=new THREE.Mesh(new THREE.RingGeometry(14,24,160,1),new THREE.MeshBasicMaterial({color:0xF0D8B8,transparent:true,opacity:0.0,side:THREE.DoubleSide}));RG.add(RING);
const DEB=[];for(let i=0;i<260;i++){const m=part(RG,SPH,toon(i%3?0xBDB7AC:0xA39E94),[0,0,0],[1,1,1],[0,0,0],0);const s=0.08+hash(i*3.7)*0.35;m.scale.set(s,s*0.8,s);m.userData={r:14.5+hash(i*1.9)*9,a:hash(i*5.1)*PI*2,z:(hash(i*8.1)-0.5)*0.4,sp:0.25+0.2*hash(i)};DEB.push(m)}
// ---------- 2D helpers ----------
function earth2D(x,y,R,bulge,ang){g.save();g.translate(x,y);g.rotate(ang||0);g.lineJoin='round';g.strokeStyle='#111';g.lineWidth=8;
  g.fillStyle='rgba(80,170,255,0.85)';g.beginPath();g.ellipse(0,0,R*(1.08+bulge),R*(1.08-bulge*0.35),0,0,7);g.fill();g.stroke();
  g.fillStyle='#2E86DE';g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();g.fillStyle='#3DAA5C';for(let i=0;i<5;i++){g.beginPath();g.ellipse(Math.cos(i*1.7)*R*0.45,Math.sin(i*2.3)*R*0.4,R*0.28,R*0.16,i,0,7);g.fill()}g.restore()}
function moon2D(x,y,R,cr=0){g.save();g.translate(x,y);g.lineJoin='round';g.strokeStyle='#111';g.lineWidth=8;g.fillStyle='#D8D4CC';g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();g.fillStyle='#ABA69C';for(let i=0;i<5;i++){g.beginPath();g.arc(Math.cos(i*2.1)*R*0.5,Math.sin(i*1.4)*R*0.45,R*(0.12+0.06*(i%2)),0,7);g.fill()}
  if(cr>0){g.strokeStyle='#FF5A1F';g.lineWidth=6;g.globalAlpha=cr;for(let k=0;k<5;k++){g.beginPath();g.moveTo(0,0);let xx=0,yy=0;for(let s=0;s<4;s++){xx+=Math.cos(k*1.3+s*0.4)*R*0.28;yy+=Math.sin(k*1.3+s*0.5)*R*0.28;g.lineTo(xx,yy)}g.stroke()}}g.restore()}
function distPanel(x,y,km,col){panel(x,y,820,190,'rgba(10,12,25,0.9)',col||'#7FD3FF',40);txt(Math.round(km/100)*100<1?'0':Math.round(km).toLocaleString('en-US'),x+40,y,104,{stroke:0,fill:'#fff',align:'right'});txt('KM',x+70,y+12,58,{stroke:0,fill:col||'#7FD3FF',align:'left'})}
function meteors(t,t0,n,dense){if(t<t0)return;for(let i=0;i<n;i++){const per=0.9+hash(i*2.1)*0.6,ph=((t-t0)/per+hash(i*4.3))%1;if((t-t0)<hash(i*4.3)*0.4)continue;const x0=hash(i*7.7)*W*1.3-W*0.15,y0=-120,len=260+hash(i)*200;const x=x0-ph*520,y=y0+ph*(H*0.75);
  const gr=g.createLinearGradient(x,y,x+len*0.5,y-len*0.85);gr.addColorStop(0,'rgba(255,240,180,1)');gr.addColorStop(0.15,'rgba(255,140,40,0.9)');gr.addColorStop(1,'rgba(255,60,20,0)');g.save();g.strokeStyle=gr;g.lineCap='round';g.lineWidth=10+hash(i*3)*14;g.beginPath();g.moveTo(x,y);g.lineTo(x+len*0.5,y-len*0.85);g.stroke();
  g.fillStyle='#FFF4C8';g.shadowColor='#FF7A1A';g.shadowBlur=30;g.beginPath();g.arc(x,y,9+hash(i*3)*8,0,7);g.fill();g.restore()}}
// ---------- opening: beach at night, giant moon ----------
const C0={p:[0.5,1.4,9.6],l:[0.2,3.0,0]};
function openScene(t){WAVE.visible=false;SKYRING.visible=false;MOON.visible=true;CR.material.opacity=0;moonAt(3,30,10);SEA.position.y=0.02;
  putGuy(B.S,0,0,0.5,0.3);const b=0.5+0.5*Math.sin(t*2*PI/2.215);guy.pose({armL:[0.4,0],armR:[1.0+0.1*b,0.9],bendR:1.5,mouth:'o',mouthSize:0.9,blink:BLINK(t),look:0.5,lookY:0.8,headPitch:-0.35,headYaw:0.25,headRoll:0.04*Math.sin(t*2*PI/2.215)})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.rotation.order='XYZ';holder.visible=true;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.2,CU.c1));B.shot(mix(C0.p,[0.4,1.3,8.8],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT IF THE MOON',W/2,190,88,{sw:17});txt('CRASHED',W/2,310,120,{fill:'#FFD23F',sw:22});txt('INTO EARTH?',W/2,430,100,{sw:20});g.restore();
    comic('UH OH',W*0.24,1160,74,t,1.6,{life:1.2,rot:-0.12,fill:'#FFD23F'})}
  else if(t<CU.c2){clear3d();setBG('radial-gradient(circle at 50% 45%,#1A1F4A,#03040A 78%)');flash(t,CU.c1,0.15);const k=ease(seg(t,3.3,5.5));
    const ex=W*0.32,ey=880,mx=lerp(W*0.92,W*0.72,k);earth2D(ex,ey,170,0.05+0.32*k,0);moon2D(mx,ey,lerp(55,80,k));
    g.save();g.setLineDash([18,14]);g.strokeStyle='rgba(255,255,255,0.6)';g.lineWidth=5;g.beginPath();g.moveTo(ex+230,ey+150);g.lineTo(mx,ey+150);g.stroke();g.restore();
    distPanel(W/2,330,lerp(384400,120000,k));pill('TIDES GROW',W/2,1650,64,'#7FD3FF','#111',t,3.9,CU.c2);
    if(t>4.3){g.save();g.globalAlpha=easeOut(seg(t,4.3,4.6));arrow(ex+170,ey-260,ex+250,ey-60,'#5BE37A',20);g.restore()}comic('PULL!',W*0.78,640,90,t,4.4,{life:0.9,rot:0.12,fill:'#FFD23F'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);const u=t-CU.c2,k=seg(t,CU.c2,CU.c3);SKYRING.visible=false;MOON.visible=true;CR.material.opacity=0;moonAt(4,34,17);
    // giant wave rolls in; guy runs toward camera
    WAVE.visible=true;const wz=lerp(-40,-4,ease(seg(t,5.7,8.1))),wh=lerp(3,7,seg(t,5.7,7.5));WAVE.position.set(0,0,wz);WAVE.scale.set(1,wh,wh*0.7);
    putGuy(B.S,0.2,0,lerp(0.5,3.2,seg(t,6.0,8.1)),0);guy.pose(run(t,{mouth:'o',wide:true,armL:[2.4,-0.2],armR:[2.4,0.2],bendL:0.3,bendR:0.3}));
    B.shot([lerp(1.8,1.4,k),2.0,lerp(13.5,12.8,k)],[0.3,3.4,-2]);pill('GIANT WAVES',W/2,330,66,'#2C6FD1','#fff',t,5.8,CU.c3);
    comic('RUN!',W*0.24,1120,110,t,6.7,{life:1.0,rot:-0.12,fill:'#FF4A4A'});comic('SPLOOSH',W*0.72,560,84,t,7.4,{life:0.8,rot:0.1,fill:'#BFEFFF'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);const k=seg(t,CU.c3,CU.c4);WAVE.visible=false;SKYRING.visible=false;MOON.visible=true;moonAt(2,52,30);CR.material.opacity=easeOut(seg(t,9.0,10.0));
    putGuy(B.S,0,0,0.5,0.2);guy.pose({armL:[1.2,0.4],armR:[1.2,0.4],bendL:1.2,bendR:1.2,twistL:-0.5,twistR:0.5,mouth:'smile',blink:BLINK(t),look:0.3,lookY:0.5,headPitch:-0.15,headRoll:0.1});
    B.shot([lerp(0.6,0.3,k),1.0,lerp(9.8,9.2,k)],[0.3,3.7,0]);pill('IT NEVER HITS!',W/2,330,66,'#5BE37A','#111',t,8.5,CU.c4);comic('WAIT WHAT?',W*0.5,560,84,t,8.25,{life:1.2,fill:'#fff'});comic('CRACK',W*0.74,760,90,t,9.3,{life:0.9,rot:0.1,fill:'#FF7A1A'})}
  else if(t<CU.c5){clear3d();setBG('radial-gradient(circle at 50% 45%,#22163F,#06040F 78%)');flash(t,CU.c4,0.15);
    const ex=W/2,ey=900,R=150,RL=340;earth2D(ex,ey,R,0.25,0);
    g.save();g.setLineDash([22,16]);g.strokeStyle='#FF4A4A';g.lineWidth=7;g.beginPath();g.arc(ex,ey,RL,0,7);g.stroke();g.restore();txt('DANGER ZONE',ex,ey-RL-50,44,{fill:'#FF4A4A',sw:10});
    const k=ease(seg(t,10.5,13.0)),md=lerp(470,RL,k),ma=-0.6+2.2*seg(t,10.5,15.1);
    if(t<13.0){moon2D(ex+Math.cos(ma)*md,ey+Math.sin(ma)*md,60,seg(t,12.4,13.0))}
    else{const f=seg(t,13.0,15.1);for(let i=0;i<40;i++){const a=ma-0.05+(hash(i*3.3)-0.5)*f*5.5,rr_=RL+(hash(i*5.1)-0.5)*70*f;g.fillStyle=i%3?'#D8D4CC':'#ABA69C';g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.arc(ex+Math.cos(a)*rr_,ey+Math.sin(a)*rr_,lerp(22,8,f)+hash(i)*10,0,7);g.fill();g.stroke()}}
    distPanel(W/2,330,lerp(120000,18000,k),'#FF4A4A');pill('GRAVITY RIPS IT APART',W/2,1650,56,'#FF4A4A','#fff',t,13.6,CU.c5);comic('RIIIP!',W*0.76,ey+430,96,t,13.9,{life:1.0,rot:0.1,fill:'#FFD23F'})}
  else if(t<CU.c6){flash(t,CU.c5,0.2);const u=t-CU.c5,k=seg(t,CU.c5,CU.c6);holder.visible=false;RING.material.opacity=0.55*easeOut(seg(t,15.2,16.0));
    for(const d of DEB){const a=d.userData.a+u*d.userData.sp;d.position.set(Math.cos(a)*d.userData.r,Math.sin(a)*d.userData.r,d.userData.z)}EARTH.rotation.y=u*0.3;
    SP.shot([lerp(-34,-22,k),lerp(30,38,k),lerp(122,112,k)],[0,0,0]);pill('EARTH GETS A RING',W/2,330,62,'#F0D8B8','#111',t,15.4,CU.c6);comic('WOW',W*0.78,1150,96,t,15.6,{life:1.0,rot:0.12,fill:'#FFD23F'})}
  else if(t<CU.c7){flash(t,CU.c6,0.15);const u=t-CU.c6,k=seg(t,CU.c6,CU.c7);WAVE.visible=false;MOON.visible=false;SKYRING.visible=false;
    putGuy(B.S,0.4,0,0.5,0.15);const cower=Math.sin(u*14);guy.pose({armL:[2.5,0.1],armR:[2.5,-0.1],bendL:2.0,bendR:2.0,mouth:'o',mouthSize:1.3,wide:true,blink:false,headPitch:0.15,jump:0.03*Math.abs(cower),legL:[0.3,0.5,0],legR:[0.3,0.5,0]});
    B.shot([lerp(1.0,0.7,k),1.3,lerp(9.4,8.8,k)],[0.4,3.2,0],'radial-gradient(ellipse 140% 60% at 50% 72%,rgba(0,0,0,0) 62%,rgba(255,228,190,0.85) 63%,rgba(240,200,160,0.6) 68%,rgba(255,228,190,0.8) 70%,rgba(0,0,0,0) 71%),linear-gradient(#2A0A1A 0%,#6A1A2A 45%,#C2452A 85%,#FF8A3D 100%)');meteors(t,CU.c6,14);
    pill('FIERY METEORS',W/2,330,64,'#FF7A1A','#111',t,17.3,CU.c7);comic('INCOMING!',W*0.5,560,92,t,17.6,{life:1.1,fill:'#FFD23F'});comic('KABOOM',W*0.26,1160,80,t,19.3,{life:0.8,rot:-0.12,fill:'#FF4A4A'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c7,TT-0.2));B.shot(mix([2.2,1.4,9.4],C0.p,k),C0.l);flash(t,CU.c7,0.15)}
  vignette();captions(t)};
