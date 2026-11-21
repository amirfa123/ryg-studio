// ===== Could you swim to the bottom of the Mariana Trench? (crazy what-if) =====
const TT=19.9;
const CU={c1:2.95,c2:5.6,c3:9.15,c4:13.8,c5:18.25};
guy.outfit({});
// ---- surface set: boat on open ocean ----
const O={S:new THREE.Scene()};lights(O.S);O.cam=new THREE.PerspectiveCamera(30,W/H,0.1,400);
O.shot=(p,l)=>{O.cam.position.set(...p);O.cam.lookAt(...l);setBG('linear-gradient(#2F8FE8 0%,#7CC6FF 50%,#D8F1FF 100%)');r.setClearColor(0,0);r.render(O.S,O.cam)};
part(O.S,new THREE.PlaneGeometry(400,300),toon(0x1677C4),[0,0,-100],[1,1,1],[-PI/2,0,0],0);
const WAV=[];for(let i=0;i<60;i++){const m=part(O.S,new THREE.PlaneGeometry(1.2+hash(i)*1.5,0.08),basic(0xBFE6FF),[(hash(i*2.3)-0.5)*40,0.02,-2-hash(i*4.1)*40],[1,1,1],[-PI/2,0,0],0);WAV.push(m)}
part(O.S,SPH,basic(0xFFF4C2),[-30,40,-150],[9,9,1],[0,0,0],0);
for(let i=0;i<5;i++){const c=new THREE.Group();O.S.add(c);c.position.set(-60+i*30,25+hash(i)*15,-140);for(let k=0;k<4;k++)part(c,SPH,toon(0xFFFFFF),[k*4-6,hash(i+k)*2,0],[5,3,2],[0,0,0],0)}
const BOAT=new THREE.Group();O.S.add(BOAT);{const Wh=toon(0xF7F7FA),Or=toon(0xFF7A2B),Dk=toon(0xC9874A);
  part(BOAT,new THREE.BoxGeometry(5.2,0.9,2.4),Wh,[0,0.1,0],[1,1,1],[0,0,0],0.03);part(BOAT,new THREE.BoxGeometry(5.24,0.18,2.44),Or,[0,0.35,0],[1,1,1],[0,0,0],0.01);
  part(BOAT,new THREE.CylinderGeometry(0,1.2,1.4,4),Wh,[2.95,0.1,0],[1,0.64,1.2],[0,PI/4,PI/2],0.02);part(BOAT,new THREE.BoxGeometry(5.0,0.06,2.2),Dk,[0,0.56,0],[1,1,1],[0,0,0],0);
  part(BOAT,new THREE.BoxGeometry(1.6,1.3,1.8),Wh,[-1.4,1.2,0],[1,1,1],[0,0,0],0.02);part(BOAT,new THREE.BoxGeometry(1.64,0.4,1.84),toon(0x1E2A44),[-1.4,1.55,0],[1,1,1],[0,0,0],0);
  const ring=part(BOAT,new THREE.TorusGeometry(0.32,0.1,10,24),Or,[-0.5,1.0,1.22],[1,1,1],[0,0,0],0.006);
  part(BOAT,cap(0.03,1.4),toon(0x555A66),[-1.6,2.5,0]);}
BOAT.position.set(0,0,0);
// ---- underwater set ----
const U={S:new THREE.Scene()};lights(U.S);U.cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);U.S.fog=new THREE.Fog(0x0B4A8A,8,40);
U.shot=(p,l,c1,c2)=>{U.cam.position.set(...p);U.cam.lookAt(...l);U.S.fog.color.set(c2);setBG(`linear-gradient(${c1},${c2})`);r.setClearColor(0,0);r.render(U.S,U.cam)};
const MOTE=[];for(let i=0;i<90;i++){const m=part(U.S,SPH,basic(0xCFEFFF),[0,0,0],[0.03,0.03,0.03],[0,0,0],0);MOTE.push({m,x:(hash(i*1.1)-0.5)*14,y:(hash(i*2.2)-0.5)*30,z:-hash(i*3.3)*10+2})}
const BUB=[];for(let i=0;i<14;i++){const m=part(U.S,SPH,new THREE.MeshToonMaterial({color:0xE6F7FF,transparent:true,opacity:0.8,gradientMap:GM}),[0,0,0],[0.07,0.07,0.07],[0,0,0],0.004);BUB.push(m)}
const RAYS=[];for(let i=0;i<5;i++){const m=part(U.S,new THREE.PlaneGeometry(0.8,30),new THREE.MeshBasicMaterial({color:0xBFE9FF,transparent:true,opacity:0.12,depthWrite:false}),[-4+i*2.2,8,-6],[1,1,1],[0,0,0.25],0);RAYS.push(m)}
// guideline rope with record tag
const ROPE=new THREE.Group();U.S.add(ROPE);part(ROPE,cap(0.025,40),toon(0xFFD23F),[0,0,0]);
const tagT=canvasTex(512,256);{const c=tagT.ctx;c.fillStyle='#FFD23F';c.fillRect(0,0,512,256);c.strokeStyle='#111';c.lineWidth=16;c.strokeRect(8,8,496,240);c.fillStyle='#111';c.font='900 64px Inter';c.textAlign='center';c.fillText('RECORD',256,105);c.font='900 92px Inter';c.fillText('214 M',256,205)}
const TAG=part(ROPE,new THREE.PlaneGeometry(1.4,0.7),new THREE.MeshBasicMaterial({map:tagT.tx}),[0.75,-2.9,0.05],[1,1,1],[0,0,0],0);part(ROPE,SPH,toon(0xFF7A2B),[0,-2.9,0],[0.18,0.18,0.18],[0,0,0],0.008);
function swimGuy(x,y,z,t,o={}){putGuy(U.S,x,y,z,o.ry??0.0);holder.rotation.x=o.pitch??1.25;const k=Math.sin(t*9);
  guy.pose({armL:[2.85,0.1+0.2*Math.sin(t*3)],armR:[2.85,0.1+0.2*Math.sin(t*3+PI)],legL:[0.35*k,0.25,0],legR:[-0.35*k,0.25,0],mouth:o.mouth||'o',mouthSize:o.ms||0.45,wide:o.wide,blink:BLINK(t),lookY:0.6,headPitch:-0.5})}
function underwater(t,depth){MOTE.forEach((o,i)=>o.m.position.set(o.x+0.3*Math.sin(t+i),((o.y+t*0.8)%30+30)%30-15+depth,o.z));RAYS.forEach((m,i)=>{m.position.y=depth+8;m.material.opacity=0.12*Math.max(0,1-Math.abs(depth)/20)*(0.7+0.3*Math.sin(t*1.3+i))})}
function bubbles(x,y,z,t){BUB.forEach((m,i)=>{const u=((t*0.9+i/BUB.length)%1);m.visible=true;m.position.set(x+0.25*Math.sin(i*2+t*3),y+u*3,z+0.2*Math.cos(i));m.scale.setScalar(0.04+0.05*u)})}
// ---- 2D ----
function pillS(s,x,y,size,col){g.save();g.font=`900 ${size}px Inter`;const w=g.measureText(s).width+size*1.1,h=size*1.6;g.fillStyle=col;rr(x-w/2,y-h/2,w,h,h/2);g.fill();g.strokeStyle='#111';g.lineWidth=6;g.stroke();g.restore();txt(s,x,y+2,size,{stroke:0,fill:'#111'})}
function depthMeter(x,y,v,col='#3FF0FF'){panel(x,y,600,150,'rgba(5,15,35,0.88)',col,30);txt('DEPTH',x,y-38,32,{stroke:0,fill:col});txt(Math.round(v).toLocaleString('en-US')+' M',x,y+20,70,{stroke:0})}
// cutaway: surface y0, scale px per km
function cutaway(t,ev,mk){const top=560,s=92,cx=W/2;g.save();
  const gr=g.createLinearGradient(0,top,0,top+11*s+80);gr.addColorStop(0,'#3FA7F0');gr.addColorStop(0.25,'#1660B0');gr.addColorStop(1,'#050C2A');g.fillStyle=gr;g.fillRect(0,top,W,11*s+120);
  g.fillStyle='#BFE6FF';g.fillRect(0,top-200,W,200);
  // sea floor with trench
  g.fillStyle='#4A3B2E';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.moveTo(0,top+4*s);g.lineTo(cx-330,top+4.3*s);g.lineTo(cx-150,top+10.94*s);g.lineTo(cx+140,top+10.94*s);g.lineTo(cx+330,top+4.5*s);g.lineTo(W,top+4*s);g.lineTo(W,H);g.lineTo(0,H);g.closePath();g.fill();g.stroke();
  // everest
  if(ev>0){const h=8.849*s*ease(ev),b=top+10.94*s;g.fillStyle='#8C8C9E';g.beginPath();g.moveTo(cx-140,b);g.lineTo(cx-10,b-h);g.lineTo(cx+130,b);g.closePath();g.fill();g.stroke();g.fillStyle='#fff';g.beginPath();g.moveTo(cx-10,b-h);g.lineTo(cx-10-0.18*h*0.15/0.15*0.16,b-h+0.16*h);g.lineTo(cx-10+0.16*h*0.16/0.16*0.95*0.16/0.16,b-h+0.16*h);g.closePath();g.fill();
    if(ev>=1){const py=b-h;g.strokeStyle='#FFD23F';g.lineWidth=8;g.setLineDash([16,12]);g.beginPath();g.moveTo(cx+80,top);g.lineTo(cx+80,py);g.stroke();g.setLineDash([]);pillS('2 KM TO SPARE',cx+250,(top+py)/2,40,'#FFD23F')}}
  // labels
  g.fillStyle='#fff';txt('0 KM',70,top+20,30,{align:'left',sw:6});txt('11 KM',70,top+10.94*s,30,{align:'left',sw:6});
  if(mk>=0){const y=top+mk*s;g.fillStyle='#FFD23F';g.beginPath();g.arc(cx+20,y,22,0,7);g.fill();g.lineWidth=6;g.strokeStyle='#111';g.stroke();pillS('YOU',cx+110,y,34,'#FFD23F')}
  g.restore()}
function weights(t,t0,n){const sq={x:W/2,y:1180};for(let i=0;i<n;i++){const ta=t0+i*0.32;if(t<ta)continue;const d=easeOut(seg(t,ta,ta+0.22));const y=sq.y-60-i*86;const yy=lerp(y-700,y,d);g.fillStyle=i%2?'#4A4F63':'#5E6478';g.strokeStyle='#111';g.lineWidth=7;rr(W/2-150,yy-40,300,80,14);g.fill();g.stroke();txt('1 TON',W/2,yy+2,40,{stroke:0})}
  g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=8;rr(W/2-60,sq.y-20,120,40,6);g.fill();g.stroke()}
function can(x,y,crush,t){g.save();g.translate(x,y);const h=lerp(240,70,crush),w=lerp(130,170,crush);g.fillStyle='#FF4A5A';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.moveTo(-w/2,0);for(let i=0;i<=8;i++){const yy=-h*i/8;g.lineTo(-w/2+crush*14*Math.sin(i*2.1),yy)}g.lineTo(w/2,-h);for(let i=8;i>=0;i--){const yy=-h*i/8;g.lineTo(w/2+crush*14*Math.sin(i*1.7),yy)}g.closePath();g.fill();g.stroke();
  g.fillStyle='#C9D3E0';rr(-w/2,-h-16,w,20,8);g.fill();g.stroke();g.restore()}
// ---- opening ----
const C0={p:[5.4,2.9,11.5],l:[1.2,1.4,0]};
function openScene(t){const b=0.06*Math.sin(t*2*PI/1.99);BOAT.position.y=b;BOAT.rotation.z=0.02*Math.sin(t*2*PI/1.99+0.6);WAV.forEach((m,i)=>m.position.x+=0);
  putGuy(O.S,1.4,0.59+b,0.3,0.45);guy.pose({armL:[2.6,0.15],armR:[2.6,0.15],bendL:0.2,bendR:0.2,mouth:'grin',blink:BLINK(t),look:0.3,jump:0.015*Math.sin(t*2*PI/0.995),lean:0})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.rotation.x=0;BUB.forEach(m=>m.visible=false);ROPE.visible=false;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.2,CU.c1));O.shot(mix(C0.p,[5.0,2.8,10.7],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('COULD YOU SWIM TO',W/2,210,80,{sw:16});txt('THE BOTTOM OF THE',W/2,315,80,{sw:16});txt('MARIANA TRENCH?',W/2,445,96,{fill:'#3FF0FF',sw:22});g.restore();
    comic('READY?',W*0.26,1150,76,t,1.3,{life:1.1,rot:-0.1,fill:'#FFD23F'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);const k=seg(t,CU.c1,CU.c2);const y=-k*6;underwater(t,y);swimGuy(0,y,0,t,{pitch:1.15,ry:0.3});bubbles(0,y+0.6,0.1,t);
    const c1=['#3FA7F0','#1660B0','#0A2E6E'][0],dk=k;U.shot([4.2,y+1.6,10.5],[0,y-0.1,0],`hsl(205,80%,${lerp(55,25,dk)}%)`,`hsl(215,85%,${lerp(35,10,dk)}%)`);
    depthMeter(W/2,1700,lerp(0,10935,ease(seg(t,3.2,5.0))));pill('ALMOST 11 KM DEEP',W/2,380,60,'#3FF0FF','#111',t,3.6,CU.c2);comic('GLUG',W*0.75,1150,70,t,4.2,{life:0.8,rot:0.1,fill:'#fff'})}
  else if(t<CU.c3){clear3d();setBG('#BFE6FF');flash(t,CU.c2,0.15);cutaway(t,seg(t,5.8,6.6),-1);
    panel(W/2,260,860,150);txt('MOUNT EVEREST',W/2,230,60,{stroke:0,fill:'#FFD23F'});txt('8,849 M TALL',W/2,295,44,{stroke:0});
    comic('FITS!',W*0.24,900,90,t,6.6,{life:1.0,rot:-0.1,fill:'#5BE37A'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);const k=seg(t,CU.c3,CU.c4);const y=lerp(0,-2.6,ease(seg(t,9.3,11.0)));underwater(t,y);ROPE.visible=true;ROPE.position.set(-1.1,0,-0.4);
    const stopped=t>11.0;swimGuy(0.1,y,0,t,{pitch:stopped?0.5:1.15,ry:0.2,mouth:t>12.9?'o':'o',ms:t>12.9?1.0:0.45,wide:t>10.6});bubbles(0.1,y+0.6,0.1,t);
    U.shot([3.4,y+0.6,10.5],[-0.4,y-0.4,0],'hsl(205,80%,45%)','hsl(212,85%,26%)');
    pill('ONLY 2% OF THE WAY',W/2,380,58,'#FF6A5E','#111',t,12.3,CU.c4);comic('NOPE',W*0.75,1170,80,t,12.9,{life:0.9,rot:0.1,fill:'#FF6A5E'});
    bar(W/2-300,1640,600,56,lerp(0,0.0196,ease(seg(t,11.4,12.0))),'#FFD23F');txt('214 M  /  10,935 M',W/2,1740,44,{sw:9})}
  else if(t<CU.c5){clear3d();setBG('linear-gradient(#071630,#020610)');flash(t,CU.c4,0.15);
    panel(W/2,280,860,170,'rgba(5,15,35,0.88)','#3FF0FF');txt('AT THE BOTTOM',W/2,245,46,{stroke:0,fill:'#3FF0FF'});txt('~8 TONS PER SQUARE INCH',W/2,315,52,{stroke:0,fill:'#FFD23F'});
    weights(t,15.8,8);if(t>15.0){const k=pop(t,15.0);g.save();g.translate(W/2,1270);g.scale(k,k);pillS('1 SQUARE INCH',0,0,36,'#FFD23F');g.restore()}
    can(W*0.18,1240,ease(seg(t,17.2,17.4)),t);if(t>17.2)comic('CRUNCH',W*0.2,950,64,t,17.2,{life:0.9,rot:-0.1,fill:'#fff'});
    for(let i=0;i<40;i++){const x=hash(i*7.7)*W,y=(hash(i*3.1)*H+t*20)%H;g.fillStyle='rgba(180,220,255,0.25)';g.beginPath();g.arc(x,y,3,0,7);g.fill()}}
  else{openScene(t-TT);const k=ease(seg(t,CU.c5,TT-0.25));O.shot(mix([6.2,4.0,13.5],C0.p,k),C0.l);flash(t,CU.c5,0.15)}
  vignette();captions(t)};
