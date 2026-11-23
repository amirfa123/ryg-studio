// ===== What would happen if you went to space without a spacesuit? (crazy what-if) =====
const TT=17.1;
const CU={c1:3.35,c2:5.0,c3:7.25,c4:9.56,c5:11.38,c6:15.42};
guy.outfit({});
// ---------- airlock interior ----------
const A={S:new THREE.Scene()};lights(A.S);A.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);
A.shot=(p,l)=>{A.cam.position.set(...p);A.cam.lookAt(...l);setBG('#1A1E2C');r.setClearColor(0,0);r.render(A.S,A.cam)};
const PW=toon(0xE6E9F0),PG=toon(0xB8BFCC),PD=toon(0x4A5266);
part(A.S,new THREE.BoxGeometry(8,0.2,6),toon(0x5A6378),[0,-0.1,0],[1,1,1],[0,0,0],0);for(let i=-3;i<=3;i++)part(A.S,new THREE.PlaneGeometry(0.04,6),toon(0x6E7890),[i*1.1,0.005,0],[1,1,1],[-PI/2,0,0],0);
part(A.S,new THREE.BoxGeometry(8,5,0.2),PW,[0,2.5,-2.4],[1,1,1],[0,0,0],0);for(const x of [-3.6,3.6])part(A.S,new THREE.BoxGeometry(0.2,5,6),PG,[x,2.5,0],[1,1,1],[0,0,0],0);
for(let i=0;i<5;i++)part(A.S,new THREE.BoxGeometry(0.06,4.6,0.05),PG,[-3+i*1.5,2.4,-2.28],[1,1,1],[0,0,0],0);part(A.S,new THREE.BoxGeometry(8,0.12,0.1),toon(0xFFB000),[0,0.5,-2.27],[1,1,1],[0,0,0],0);
// round window with stars + Earth limb
const WT=canvasTex(256,256);{const c=WT.ctx;c.fillStyle='#05070F';c.fillRect(0,0,256,256);for(let i=0;i<80;i++){c.fillStyle='#fff';c.fillRect(hash(i)*256,hash(i*3)*256,1+hash(i*7)*2,1+hash(i*7)*2)}const gr=c.createRadialGradient(128,520,250,128,520,330);gr.addColorStop(0,'#2E86DE');gr.addColorStop(0.9,'#7FD3FF');gr.addColorStop(1,'rgba(127,211,255,0)');c.fillStyle=gr;c.beginPath();c.arc(128,520,330,0,7);c.fill()}
part(A.S,new THREE.CircleGeometry(0.85,40),new THREE.MeshBasicMaterial({map:WT.tx}),[-0.9,3.1,-2.28],[1,1,1],[0,0,0],0);part(A.S,new THREE.TorusGeometry(0.88,0.09,10,40),PD,[-0.9,3.1,-2.25],[1,1,1],[0,0,0],0.008);
// airlock hatch (left wall area on back)
const HATCH=new THREE.Group();HATCH.position.set(-2.8,1.6,-2.27);A.S.add(HATCH);part(HATCH,new THREE.BoxGeometry(1.6,2.6,0.12),PD,[0,0,0],[1,1,1],[0,0,0],0.01);part(HATCH,new THREE.CylinderGeometry(0.35,0.35,0.08,24),toon(0xC9CDD6),[0,0.1,0.08],[1,1,1],[PI/2,0,0],0.008);
for(const y of [-1.0,1.0])part(HATCH,new THREE.BoxGeometry(1.6,0.12,0.14),toon(0xFFB000),[0,y,0.02],[1,1,1],[0,0,0],0);
const WARN=basic(0xFF2A2A);part(A.S,SPH,WARN,[-2.8,3.25,-2.2],[0.16,0.12,0.12],[0,0,0],0.006);
// hanging spacesuit (generic)
const SUIT=new THREE.Group();SUIT.position.set(1.35,0,-1.5);A.S.add(SUIT);{const S2=toon(0xF4F4F4),O=toon(0xFF7A1A);part(SUIT,cap(0.03,0.6),PD,[0,3.4,0]);part(SUIT,SPH,S2,[0,2.0,0],[0.42,0.5,0.34],[0,0,0],0.012);part(SUIT,SPH,toon(0x8FD8FF),[0,2.75,0.03],[0.26,0.26,0.26],[0,0,0],0.01);part(SUIT,new THREE.TorusGeometry(0.24,0.05,8,20),PG,[0,2.52,0],[1,1,1],[PI/2,0,0],0.006);
  for(const s of [-1,1]){part(SUIT,cap(0.11,0.5),S2,[s*0.5,1.85,0],[1,1,1],[0,0,s*0.2],0.01);part(SUIT,cap(0.12,0.55),S2,[s*0.18,1.2,0],[1,1,1],[0,0,0],0.01);part(SUIT,SPH,O,[s*0.18,0.82,0.05],[0.14,0.08,0.18],[0,0,0],0.008)}part(SUIT,new THREE.BoxGeometry(0.3,0.2,0.05),O,[0,2.1,0.34],[1,1,1],[0,0,0],0.006);
  part(SUIT,new THREE.BoxGeometry(0.62,0.7,0.3),PG,[0,2.05,-0.42],[1,1,1],[0,0,0],0.01)}
// ---------- outer space ----------
const SP={S:new THREE.Scene()};lights(SP.S);SP.cam=new THREE.PerspectiveCamera(30,W/H,0.1,2000);
SP.shot=(p,l)=>{SP.cam.position.set(...p);SP.cam.lookAt(...l);setBG('radial-gradient(circle at 50% 30%,#141B3D,#03040A 75%)');r.setClearColor(0,0);r.render(SP.S,SP.cam)};
{const n=900,pos=new Float32Array(n*3);for(let i=0;i<n;i++){const a=hash(i*1.3)*PI*2,b=Math.acos(2*hash(i*2.9)-1),R0=400;pos[i*3]=R0*Math.sin(b)*Math.cos(a);pos[i*3+1]=R0*Math.cos(b);pos[i*3+2]=R0*Math.sin(b)*Math.sin(a)}const gg=new THREE.BufferGeometry();gg.setAttribute('position',new THREE.BufferAttribute(pos,3));SP.S.add(new THREE.Points(gg,new THREE.PointsMaterial({color:0xffffff,size:1.6,sizeAttenuation:false})))}
const ET=canvasTex(1024,512);{const c=ET.ctx;c.fillStyle='#1F6FC4';c.fillRect(0,0,1024,512);for(let i=0;i<22;i++){c.fillStyle=i%5?'#3DAA5C':'#E6CF8F';c.beginPath();c.ellipse(hash(i*3.3)*1024,80+hash(i*5.1)*350,40+hash(i*7)*110,25+hash(i*9)*70,hash(i)*3,0,7);c.fill()}c.fillStyle='rgba(255,255,255,0.75)';for(let i=0;i<30;i++){c.beginPath();c.ellipse(hash(i*11)*1024,hash(i*13)*512,30+hash(i)*80,8+hash(i*2)*14,0,0,7);c.fill()}c.fillStyle='#F4F8FF';c.fillRect(0,0,1024,26);c.fillRect(0,486,1024,26)}
const EARTH=new THREE.Mesh(new THREE.SphereGeometry(60,64,32),new THREE.MeshToonMaterial({map:ET.tx,gradientMap:GM}));EARTH.position.set(0,-64,-20);EARTH.rotation.set(-1.3,0,0.2);SP.S.add(EARTH);
const ATM=new THREE.Mesh(new THREE.SphereGeometry(61.2,64,32),new THREE.MeshBasicMaterial({color:0x7FD3FF,transparent:true,opacity:0.18}));ATM.position.copy(EARTH.position);SP.S.add(ATM);
const STN=new THREE.Group();STN.position.set(-9,4.5,-30);SP.S.add(STN);{const S2=toon(0xE6E9F0);part(STN,cap(1.1,3.2),S2,[0,0,0],[1,1,1],[0,0,PI/2],0.016);for(let k=-1;k<=1;k++)part(STN,new THREE.TorusGeometry(1.12,0.08,8,30),toon(0xB8BFCC),[k*1.1,0,0],[1,1,1],[0,PI/2,0],0);
  for(const s of [-1,1]){part(STN,cap(0.06,2.2),toon(0x888899),[0,s*2.0,0]);part(STN,new THREE.BoxGeometry(1.4,2.2,0.06),toon(0x2A4FA8),[0,s*3.6,0],[1,1,1],[0,0,0],0.008);for(let k=0;k<4;k++)part(STN,new THREE.BoxGeometry(1.42,0.03,0.07),toon(0x7FA8FF),[0,s*3.6-0.9+k*0.6,0],[1,1,1],[0,0,0],0)}
  part(STN,new THREE.CylinderGeometry(0.7,0.7,0.2,24),toon(0x4A5266),[2.3,0,0],[1,1,1],[0,0,PI/2],0.01);part(STN,new THREE.CylinderGeometry(0.5,0.5,0.06,24),toon(0xFFB000),[2.42,0,0],[1,1,1],[0,0,PI/2],0)}
// ---------- 2D ----------
function boomX(x,y,s,t,t0){const a=pop(t,t0);if(a<=0)return;g.save();g.translate(x,y);g.scale(s*a,s*a);g.fillStyle='#FFB000';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();for(let k=0;k<20;k++){const rr_=k%2?70:130,b=k/20*PI*2;g.lineTo(Math.cos(b)*rr_,Math.sin(b)*rr_)}g.closePath();g.fill();g.stroke();g.fillStyle='#FF4A1F';g.beginPath();for(let k=0;k<16;k++){const rr_=k%2?40:80,b=k/16*PI*2+0.2;g.lineTo(Math.cos(b)*rr_,Math.sin(b)*rr_)}g.closePath();g.fill();txt('BOOM',0,0,52,{fill:'#fff',sw:10});g.restore();if(t>t0+0.45){const b=pop(t,t0+0.45);g.save();g.translate(x,y);g.scale(b,b);cross(0,0,4.2);g.restore()}}
function lungs(cx,cy,t,f){// f: 0 full .. 1 empty
  g.save();g.translate(cx,cy);const sc=1-0.25*f;
  g.strokeStyle='#111';g.lineWidth=10;g.fillStyle='#E9B0A0';g.beginPath();g.moveTo(-14,-300);g.lineTo(-14,-120);g.lineTo(14,-120);g.lineTo(14,-300);g.closePath();g.fill();g.stroke();
  for(const s of [-1,1]){g.save();g.scale(s,1);g.translate(150,40);g.scale(sc,sc);g.fillStyle='#FF8FA0';g.beginPath();g.moveTo(-120,-160);g.quadraticCurveTo(80,-220,110,0);g.quadraticCurveTo(120,180,-20,170);g.quadraticCurveTo(-140,160,-130,40);g.closePath();g.fill();g.stroke();
    g.strokeStyle='#C2577E';g.lineWidth=6;for(let k=0;k<5;k++){g.beginPath();g.moveTo(-120,-130);g.quadraticCurveTo(-40,-60+k*40,10+k*15,-40+k*45);g.stroke()}g.restore()}
  g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.moveTo(0,-120);g.lineTo(-110,-100);g.moveTo(0,-120);g.lineTo(110,-100);g.stroke();
  // air particles rushing up & out
  for(let i=0;i<26;i++){const ph=((t*1.6+hash(i*3.3))%1);if(f<=0.02)break;const x=(hash(i*7.1)-0.5)*200*(1-ph),y=60-ph*560;g.globalAlpha=Math.min(1,f*2)*(1-ph);g.fillStyle='#BFEFFF';g.strokeStyle='#2E6FA8';g.lineWidth=4;g.beginPath();g.arc(x,y,12+hash(i)*10,0,7);g.fill();g.stroke()}
  g.globalAlpha=1;g.restore()}
function gauge(x,y,v){panel(x,y,330,330,'rgba(10,12,25,0.9)','#7FD3FF',165);g.save();g.translate(x,y);g.strokeStyle='#fff';g.lineWidth=6;for(let k=0;k<=10;k++){const a=PI*0.75+k/10*PI*1.5;g.beginPath();g.moveTo(Math.cos(a)*110,Math.sin(a)*110);g.lineTo(Math.cos(a)*130,Math.sin(a)*130);g.stroke()}
  const a=PI*0.75+v*PI*1.5;g.strokeStyle='#FF4A4A';g.lineWidth=12;g.lineCap='round';g.beginPath();g.moveTo(0,0);g.lineTo(Math.cos(a)*100,Math.sin(a)*100);g.stroke();g.fillStyle='#fff';g.beginPath();g.arc(0,0,16,0,7);g.fill();g.restore();txt('AIR PRESSURE',x,y+110,30,{stroke:0,fill:'#7FD3FF'})}
function boilBubbles(x,y,t,t0,n=18){if(t<t0)return;for(let i=0;i<n;i++){const ph=((t*1.3+hash(i*2.3))%1);const bx=x+(hash(i*5.7)-0.5)*90+Math.sin(t*6+i)*12,by=y-ph*260;g.save();g.globalAlpha=(1-ph)*Math.min(1,(t-t0)*3);g.strokeStyle='#E8FBFF';g.fillStyle='rgba(190,240,255,0.35)';g.lineWidth=5;g.beginPath();g.arc(bx,by,8+ph*22,0,7);g.fill();g.stroke();g.restore()}}
function skinDiagram(cx,cy,t,f){// f 0..1 swelling
  const w=760,h0=170,h=h0*(1+0.9*f);g.save();g.translate(cx,cy);
  g.fillStyle='#FFD966';g.strokeStyle='#111';g.lineWidth=10;rr(-w/2,-h,w,h,30);g.fill();g.stroke();g.fillStyle='#F5A021';g.fillRect(-w/2+5,-h*0.25,w-10,h*0.25-5);
  g.fillStyle='#E9B0A0';rr(-w/2,0,w,140,20);g.fill();g.stroke();txt('MUSCLE',0,70,44,{stroke:0,fill:'#7A2E28'});
  for(let i=0;i<14;i++){const bx=-w/2+60+((i*53)%(w-120)),by=-h*0.2-hash(i*3.1)*h*0.65,rad=(6+hash(i)*8)*(1+2.2*f);g.fillStyle='rgba(190,240,255,0.85)';g.strokeStyle='#2E6FA8';g.lineWidth=4;g.beginPath();g.arc(bx,by,rad,0,7);g.fill();g.stroke()}
  g.restore();txt('SKIN',cx-w/2+90,cy-h/2,44,{sw:10});
  if(f>0.1){g.save();g.globalAlpha=Math.min(1,f*3);arrow(cx+w/2-60,cy-h0,cx+w/2-60,cy-h-40,'#5BE37A',22);g.restore()}}
function timerPanel(t,sec,awake){panel(W/2,330,760,250,'rgba(10,12,25,0.9)',awake>0.3?'#FFD23F':'#FF4A4A',36);txt(String(Math.min(15,Math.floor(sec))).padStart(2,'0')+' s',W/2-170,330,130,{stroke:0,fill:'#fff'});
  txt('AWAKE',W/2+170,285,44,{stroke:0,fill:'#B8C0D8'});bar(W/2+50,320,240,56,awake,awake>0.3?'#FFD23F':'#FF4A4A')}
function zzz(x,y,t){for(let k=0;k<3;k++){const ph=((t*0.8+k/3)%1);g.save();g.globalAlpha=Math.sin(ph*PI);txt('Z',x+ph*120+k*10,y-ph*200,50+k*16,{fill:'#BFEFFF',sw:10});g.restore()}}
// ---------- opening: in the airlock, suit hanging unused ----------
const C0={p:[0.4,2.0,9.6],l:[0.3,1.55,0]};
function openScene(t){holder.visible=true;A.S.add(holder);holder.position.set(-0.45,0,0);holder.rotation.set(0,0.2*Math.sin(t*2*PI/4.275),0);holder.scale.setScalar(1);WARN.color.setHex((t*2%1)<0.5?0xFF2A2A:0x661111);
  const sh=0.5+0.5*Math.sin(t*2*PI/1.425);guy.pose({armL:[0.6+0.5*sh,-0.2],armR:[0.6+0.5*sh,-0.2],bendL:1.2,bendR:1.2,mouth:'grin',blink:BLINK(t),look:0.6,headYaw:0.25,headRoll:0.06*Math.sin(t*2*PI/1.425),jump:0.015*sh})}
function floatGuy(t,o={}){SP.S.add(holder);holder.visible=true;holder.scale.setScalar(1)}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;holder.rotation.order='XYZ';
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.2,CU.c1));A.shot(mix(C0.p,[0.35,1.9,8.6],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT IF YOU WENT',W/2,200,80,{sw:16});txt('TO SPACE WITHOUT',W/2,300,80,{sw:16});txt('A SPACESUIT?',W/2,425,120,{fill:'#7FD3FF',sw:22});g.restore();
    if(t>1.4){const [sx,sy]=proj(new THREE.Vector3(1.35,2.9,-1.5),A.cam);const b=easeOut(seg(t,1.4,1.7));g.save();g.globalAlpha=b*(1-seg(t,3.0,3.3));arrow(sx-170,sy+260,sx-40,sy+90,'#FF4A4A',20);g.restore();comic('NAH',sx-220,sy+330,70,t,1.5,{life:1.6,rot:-0.12,fill:'#FF4A4A'})}}
  else if(t<CU.c2){flash(t,CU.c1,0.2);floatGuy(t);const u=t-CU.c1;holder.position.set(0,1.0+0.1*Math.sin(u*1.5),0);holder.rotation.set(0.15*Math.sin(u),0.4+u*0.25,0.2*Math.sin(u*0.8));
    guy.pose({armL:[1.7,0.2],armR:[1.7,-0.2],legL:[0.3,0.4,0],legR:[-0.2,0.3,0],mouth:'o',mouthSize:0.9,wide:true,blink:false});
    SP.shot([0.8,2.6,9.4],[0.1,2.0,0]);boomX(W*0.77,560,0.7,t,3.7);pill('NO EXPLODING!',W/2,330,70,'#5BE37A','#111',t,4.3,CU.c2)}
  else if(t<CU.c3){flash(t,CU.c2,0.15);clear3d();g.fillStyle='#141B3D';g.fillRect(0,0,W,H);const f=ease(seg(t,5.4,7.0));
    // head outline + body silhouette
    g.save();g.fillStyle='#14939A';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.ellipse(W/2,1150,430,330,0,PI,0);g.fill();g.stroke();g.fillStyle='#FFCC2E';g.beginPath();g.ellipse(W/2,560,170,175,0,0,7);g.fill();g.stroke();g.restore();
    g.fillStyle='#7A2E28';g.beginPath();g.ellipse(W/2,640,46,30+20*f,0,0,7);g.fill();lungs(W/2,1000,t,f);
    for(let i=0;i<10;i++){const ph=((t*1.8+hash(i*4.1))%1);if(f<0.05)break;g.save();g.globalAlpha=(1-ph)*Math.min(1,f*2);g.fillStyle='#BFEFFF';g.beginPath();g.arc(W/2+(hash(i*9)-0.5)*60+ph*(hash(i*3)-0.5)*500,640-ph*280,10+ph*24,0,7);g.fill();g.restore()}
    gauge(W*0.8,1190-560,1-f);pill('AIR RUSHES OUT',W/2,330,64,'#7FD3FF','#111',t,5.2,CU.c3);comic('WHOOSH!',W*0.24,460,80,t,5.9,{life:1.0,rot:-0.12,fill:'#BFEFFF'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);floatGuy(t);const u=t-CU.c3;holder.position.set(0,0,0);holder.rotation.set(0,0.15*Math.sin(u*0.9),0.05*Math.sin(u*1.2));
    guy.pose({armL:[1.3,0.3],armR:[1.3,-0.3],mouth:'o',mouthSize:1.6,wide:true,blink:false,headPitch:-0.08});
    SP.shot([0.15,1.8,2.6],[0,1.72,0]);const [mx,my]=proj(new THREE.Vector3(0,1.62,0.25),SP.cam);boilBubbles(mx,my-10,t,7.7);
    pill('BOILS AT BODY TEMP!',W/2,330,60,'#FF7A1A','#fff',t,8.4,CU.c4);comic('BLUBBLUB',W*0.75,1150,70,t,8.0,{life:1.1,rot:0.1,fill:'#BFEFFF'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);clear3d();g.fillStyle='#22163F';g.fillRect(0,0,W,H);const f=ease(seg(t,9.8,11.0));skinDiagram(W/2,960,t,f);
    pill('VAPOR BUBBLES',W/2,330,62,'#BFEFFF','#111',t,9.7,10.6);pill('SKIN PUFFS UP',W/2,330,64,'#5BE37A','#111',t,10.6,CU.c5);comic('PUFF!',W*0.72,520,96,t,10.6,{life:0.8,rot:0.12,fill:'#FFD23F'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);floatGuy(t);const u=t-CU.c5;const sec=lerp(0,15,seg(t,11.9,14.6)),out=seg(t,14.55,14.85);
    holder.position.set(0,1.0+0.12*Math.sin(u*1.3),0);holder.rotation.set(0.1*Math.sin(u*0.7)+0.3*out,0.6+u*0.12,0.15*Math.sin(u*0.9)+0.4*out);
    guy.pose({armL:[lerp(1.5,2.3,out),0.3],armR:[lerp(1.5,2.0,out),-0.4],legL:[0.25,lerp(0.3,0.8,out),0],legR:[-0.1,lerp(0.3,0.7,out),0],mouth:'o',mouthSize:lerp(0.7,0.45,out),wide:out<0.5,blink:out>0.5||(t>13.6&&((t*3)%1)<0.4),headRoll:0.3*out,headPitch:0.2*out});
    SP.shot([1.2,2.6,9.2],[0.1,2.05,0]);timerPanel(t,sec,1-seg(t,11.9,14.6));if(out>0.5)zzz(W*0.6,760,t);comic('ZONK',W*0.28,1120,90,t,14.7,{life:0.7,rot:-0.1,fill:'#FF4A4A'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.2));A.shot(mix([1.6,2.6,7.0],C0.p,k),C0.l);flash(t,CU.c6,0.2)}
  vignette();captions(t)};
