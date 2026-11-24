// ===== Why does your nose run when it's cold? (body/everyday) =====
const TT=19.65;
const CU={c1:2.62,c2:4.9,c3:8.8,c4:12.25,c5:15.1,c6:18.0};
guy.outfit({beanie:1});
// red cold nose + drip (head-local)
const RED=part(guy.head,SPH,toon(0xFF6B6B),[0,-0.035,0.277],[0.063,0.055,0.063],[0,0,0],0.01);RED.visible=false;
const DRIP=part(guy.head,SPH,toon(0x9FE3FF),[0.025,-0.09,0.3],[0.02,0.028,0.02],[0,0,0],0.004);DRIP.visible=false;
function drip(s,dy=0){DRIP.visible=s>0;DRIP.scale.set(0.016+0.012*s,0.02+0.022*s,0.016+0.012*s);DRIP.position.set(0.025,-0.085-0.02*s-dy,0.3)}
// ---------- snowy park ----------
const SP={S:new THREE.Scene()};lights(SP.S);SP.cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);
part(SP.S,new THREE.PlaneGeometry(200,200),toon(0xF4F8FF),[0,0,0],[1,1,1],[-PI/2,0,0],0);
part(SP.S,new THREE.PlaneGeometry(200,2.2),toon(0xC9D3E6),[0,0.01,2.2],[1,1,1],[-PI/2,0,0],0);
function pine(x,z,s){const p=new THREE.Group();p.position.set(x,0,z);p.scale.setScalar(s);SP.S.add(p);part(p,cap(0.12,0.6),toon(0x6B4426),[0,0.3,0]);for(let k=0;k<3;k++){part(p,new THREE.ConeGeometry(1.0-k*0.25,1.2,10),toon(0x2E7D4F),[0,1.0+k*0.7,0],[1,1,1],[0,0,0],0.012);part(p,new THREE.ConeGeometry(0.62-k*0.16,0.45,10),toon(0xFFFFFF),[0,1.45+k*0.7,0],[1,1,1],[0,0,0],0.008)}return p}
for(let i=0;i<26;i++)pine((hash(i*3.1)-0.5)*40,-5-hash(i*7.3)*22,0.9+hash(i)*0.8);pine(-3.2,-2.4,1.1);pine(3.6,-3.0,1.3);
const SNM=new THREE.Group();SNM.position.set(2.2,0,-0.8);SP.S.add(SNM);part(SNM,SPH,toon(0xFFFFFF),[0,0.45,0],[0.5,0.45,0.5],[0,0,0],0.012);part(SNM,SPH,toon(0xFFFFFF),[0,1.1,0],[0.36,0.33,0.36],[0,0,0],0.012);part(SNM,SPH,toon(0xFFFFFF),[0,1.6,0],[0.25,0.24,0.25],[0,0,0],0.012);
part(SNM,new THREE.ConeGeometry(0.05,0.3,10),toon(0xFF8A2A),[0,1.6,0.35],[1,1,1],[PI/2,0,0],0.006);for(const s of [-1,1])part(SNM,SPH,basic(0x111111),[s*0.09,1.7,0.21],[0.035,0.035,0.035],[0,0,0],0);part(SNM,new THREE.TorusGeometry(0.27,0.06,8,20),toon(0xE23B3B),[0,1.38,0],[1,1,1],[PI/2,0,0],0.008);
const BENCH=new THREE.Group();BENCH.position.set(-1.9,0,-0.6);SP.S.add(BENCH);part(BENCH,new THREE.BoxGeometry(1.8,0.1,0.5),toon(0x9A6A3B),[0,0.5,0],[1,1,1],[0,0,0],0.01);part(BENCH,new THREE.BoxGeometry(1.8,0.4,0.08),toon(0x9A6A3B),[0,0.85,-0.22],[1,1,1],[0,0,0],0.01);part(BENCH,new THREE.BoxGeometry(1.82,0.06,0.52),toon(0xFFFFFF),[0,0.58,0],[1,1,1],[0,0,0],0.006);for(const x of [-0.75,0.75])part(BENCH,new THREE.BoxGeometry(0.08,0.5,0.45),toon(0x2A2A35),[x,0.25,0]);
function spShot(p,l){SP.cam.position.set(...p);SP.cam.lookAt(...l);setBG('linear-gradient(#9CC3E8,#DCEBFA 60%,#F4F8FF)');r.setClearColor(0,0);r.render(SP.S,SP.cam)}
function flakes(t,n=70,sp=1){g.save();g.fillStyle='rgba(255,255,255,0.92)';for(let i=0;i<n;i++){const x=((hash(i)*W+Math.sin(t*1.3+i)*40+t*60*sp*(hash(i*2)-0.3))%W+W)%W,y=(((hash(i*3)*H+t*(120+hash(i*5)*160)*sp)%H)+H)%H;g.beginPath();g.arc(x,y,4+hash(i*7)*7,0,7);g.fill()}g.restore()}
const shiver=t=>({headRoll:0.03*Math.sin(t*40),armL:[0.18+0.02*Math.sin(t*37),0.25],armR:[0.18+0.02*Math.sin(t*41),0.25],bendL:0.9,bendR:0.9});
function openScene(t){SP.S.add(holder);holder.visible=true;holder.position.set(0,0,0.4);holder.rotation.set(0,-0.15,0);holder.scale.setScalar(1);RED.visible=true;drip(0.75+0.1*Math.sin(t*2));
  guy.pose({...shiver(t),blink:BLINK(t),mouth:'teeth',teethGap:0.2,jump:0})}
const C0={p:[1.3,2.2,8.2],l:[0.0,1.3,0.3]};
// ---------- window scene ----------
const WN={S:new THREE.Scene()};lights(WN.S);WN.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);
part(WN.S,new THREE.PlaneGeometry(30,30),toon(0x8C5E36),[0,0,0],[1,1,1],[-PI/2,0,0],0);part(WN.S,new THREE.PlaneGeometry(30,10),toon(0xE5B27A),[0,5,-1],[1,1,1],[0,0,0],0);
const OUT=canvasTex(512,512);{const c=OUT.ctx;const gr=c.createLinearGradient(0,0,0,512);gr.addColorStop(0,'#8FB6E0');gr.addColorStop(1,'#E8F2FF');c.fillStyle=gr;c.fillRect(0,0,512,512);c.fillStyle='#FFFFFF';c.fillRect(0,400,512,112);for(let i=0;i<6;i++){const x=40+i*85,h=120+hash(i)*100;c.fillStyle='#2E7D4F';c.beginPath();c.moveTo(x,420-h);c.lineTo(x+45,420);c.lineTo(x-45,420);c.fill();c.fillStyle='#fff';c.beginPath();c.moveTo(x,420-h);c.lineTo(x+15,420-h+40);c.lineTo(x-15,420-h+40);c.fill()}}
part(WN.S,new THREE.PlaneGeometry(1.8,1.8),new THREE.MeshBasicMaterial({map:OUT.tx}),[0.6,2.1,-0.98],[1,1,1],[0,0,0],0);
const FOG=canvasTex(512,512);const FOGM=new THREE.MeshBasicMaterial({map:FOG.tx,transparent:true});part(WN.S,new THREE.PlaneGeometry(1.8,1.8),FOGM,[0.6,2.1,-0.96],[1,1,1],[0,0,0],0);
for(const [w,h,x,y] of [[2.0,0.12,0.6,3.03],[2.0,0.16,0.6,1.17],[0.1,1.9,-0.35,2.1],[0.1,1.9,1.55,2.1],[1.8,0.06,0.6,2.1],[0.06,1.8,0.6,2.1]])part(WN.S,new THREE.BoxGeometry(w,h,0.12),toon(0xFFFFFF),[x,y,-0.92],[1,1,1],[0,0,0],0.008);
part(WN.S,new THREE.BoxGeometry(2.2,0.08,0.35),toon(0xFFFFFF),[0.6,1.1,-0.8],[1,1,1],[0,0,0],0.006);
part(WN.S,new THREE.CylinderGeometry(0.18,0.14,0.3,14),toon(0xE0574F),[1.3,1.3,-0.8],[1,1,1],[0,0,0],0.006);for(let k=0;k<3;k++)part(WN.S,SPH,toon(0x3DBA6A),[1.3+0.08*Math.cos(k*2),1.55,-0.8+0.08*Math.sin(k*2)],[0.12,0.16,0.12],[0,0,0],0.006);
function fogDraw(f,smile){const c=FOG.ctx;c.clearRect(0,0,512,512);if(f<=0){FOG.tx.needsUpdate=true;return}const gr=c.createRadialGradient(200,250,10,200,250,60+200*f);gr.addColorStop(0,`rgba(240,246,255,${0.85*Math.min(1,f*1.5)})`);gr.addColorStop(1,'rgba(240,246,255,0)');c.fillStyle=gr;c.fillRect(0,0,512,512);
  if(smile>0){c.strokeStyle='rgba(143,182,224,0.95)';c.lineWidth=14;c.lineCap='round';c.beginPath();c.arc(200,250,70,0.2,0.2+(PI-0.4)*smile);c.stroke();if(smile>0.5){c.fillStyle='rgba(143,182,224,0.95)';for(const s of [-1,1]){c.beginPath();c.arc(200+s*32,215,12,0,7);c.fill()}}}FOG.tx.needsUpdate=true}
// ---------- 2D helpers ----------
function headProfile(cx,cy,S){g.save();g.translate(cx,cy);g.scale(S,S);g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=12;g.beginPath();g.moveTo(-260,-300);g.bezierCurveTo(-60,-420,200,-360,240,-140);g.lineTo(250,-90);g.bezierCurveTo(330,-40,340,20,260,40);g.lineTo(250,90);g.bezierCurveTo(240,200,140,260,0,260);g.lineTo(-40,420);g.lineTo(-300,420);g.bezierCurveTo(-360,100,-380,-200,-260,-300);g.closePath();g.fill();g.stroke();
  // cavity
  g.fillStyle='#FFB3C1';g.beginPath();g.moveTo(250,20);g.bezierCurveTo(200,-60,80,-90,-40,-60);g.bezierCurveTo(-90,-40,-110,60,-90,180);g.lineTo(-40,420);g.lineTo(10,420);g.lineTo(-10,180);g.bezierCurveTo(-20,90,40,40,250,40);g.closePath();g.fill();g.lineWidth=8;g.stroke();
  g.fillStyle='#FF8FA6';for(let k=0;k<3;k++){g.beginPath();g.ellipse(110-k*10,-55+k*26,90,14,-0.1,0,7);g.fill()}
  g.fillStyle='#22222C';g.beginPath();g.arc(130,-200,18,0,7);g.fill();g.fillStyle='#4A2A1A';rr(180,60,90,26,13);g.fill();g.restore()}
function airDots(cx,cy,S,t,warm){const path=[[330,30],[250,30],[150,-30],[40,-50],[-60,-20],[-80,120],[-30,300],[-20,420]];g.save();g.translate(cx,cy);g.scale(S,S);
  for(let i=0;i<14;i++){const u=((t*0.45+i/14)%1);const f=u*(path.length-1),j=Math.floor(f),q=f-j;const p=path[j],n=path[Math.min(j+1,path.length-1)];const x=lerp(p[0],n[0],q),y=lerp(p[1],n[1],q);
    const w=warm?clamp(u*1.6):0;const col=`rgb(${Math.round(lerp(80,255,w))},${Math.round(lerp(190,120,w))},${Math.round(lerp(255,60,w))})`;g.fillStyle=col;g.strokeStyle='#111';g.lineWidth=5;g.beginPath();g.arc(x,y,22,0,7);g.fill();g.stroke()}g.restore()}
function thermo(x,y,h,f,label){g.save();g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=10;rr(x-40,y-h,80,h,40);g.fill();g.stroke();g.beginPath();g.arc(x,y+30,62,0,7);g.fill();g.stroke();
  const col=`rgb(${Math.round(lerp(80,255,f))},${Math.round(lerp(170,80,f))},${Math.round(lerp(255,60,f))})`;g.fillStyle=col;g.beginPath();g.arc(x,y+30,48,0,7);g.fill();rr(x-22,y-(h-30)*f,44,(h-30)*f+30,22);g.fill();g.restore();txt(label,x,y+140,56,{fill:'#fff'})}
function dropGauge(x,y,f,label){g.save();g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=10;const P=()=>{g.beginPath();g.moveTo(x,y-230);g.bezierCurveTo(x+40,y-150,x+140,y-40,x+140,y+40);g.arc(x,y+40,140,0,PI);g.bezierCurveTo(x-140,y-40,x-40,y-150,x,y-230);g.closePath()};P();g.fill();g.stroke();
  g.save();P();g.clip();g.fillStyle='#4FC3FF';g.fillRect(x-150,y+180-410*f,300,410*f);g.fillStyle='rgba(255,255,255,0.5)';g.fillRect(x-150,y+180-410*f,300,14);g.restore();g.restore();txt(label,x,y+250,56,{fill:'#fff'})}
function noseTip(t){g.fillStyle='#16233D';g.fillRect(0,0,W,H);flakes(t,40,0.6);
  const cx=W/2+40,cy=880;g.save();g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=14;g.beginPath();g.moveTo(-40,300);g.bezierCurveTo(300,320,560,560,cx+120,cy-60);g.bezierCurveTo(cx+300,cy+80,cx+260,cy+260,cx+40,cy+250);g.lineTo(-40,cy+400);g.closePath();g.fill();g.stroke();
  const cold=easeOut(seg(t,13.6,14.2));const gr=g.createRadialGradient(cx+170,cy+90,10,cx+170,cy+90,200);gr.addColorStop(0,`rgba(90,190,255,${0.85*cold})`);gr.addColorStop(1,'rgba(90,190,255,0)');g.fillStyle=gr;g.beginPath();g.arc(cx+170,cy+90,200,0,7);g.fill();
  g.fillStyle='#3A2418';g.beginPath();g.ellipse(cx+90,cy+235,70,26,0.1,0,7);g.fill();g.fillStyle='#4A2A1A';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.ellipse(cx-120,cy+330,190,60,-0.15,0,7);g.fill();g.stroke();
  g.fillStyle='#fff';g.beginPath();g.arc(cx-330,cy-330,70,0,7);g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(cx-305,cy-325,26,0,7);g.fill();g.strokeStyle='#111';g.lineWidth=14;g.beginPath();g.arc(cx-330,cy-330,100,0,7);g.stroke();g.restore();
  // warm puffs out of the nostril, rising toward the tip
  for(let i=0;i<6;i++){const u=((t-12.3)*0.8+i/6)%1;if(t<12.3)continue;const x=cx+90+u*240,y=cy+250+60*Math.sin(u*PI)-u*20;const a=1-u;g.fillStyle=`rgba(255,150,80,${0.55*a})`;g.beginPath();g.arc(x,y,40+60*u,0,7);g.fill()}
  // droplets forming on the tip
  const n=Math.floor(clamp((t-14.4)/0.12,0,9));for(let k=0;k<n;k++){const a=-0.4+k*0.18,R=210;const x=cx+130+Math.cos(a)*R*0.55,y=cy+90+Math.sin(a)*R*0.55+k%2*14;g.fillStyle='#9FE3FF';g.strokeStyle='#111';g.lineWidth=5;g.beginPath();g.arc(x,y,13+4*(k%3),0,7);g.fill();g.stroke()}
  if(t>14.8){const d=clamp((t-14.8)/0.3);const y=cy+300+d*d*500;g.fillStyle='#9FE3FF';g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.moveTo(cx+200,y-60);g.bezierCurveTo(cx+225,y-20,cx+235,y,cx+235,y+12);g.arc(cx+200,y+12,35,0,PI);g.bezierCurveTo(cx+165,y,cx+175,y-20,cx+200,y-60);g.fill();g.stroke()}
  return [cx,cy]}
// ---------- render ----------
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;RED.visible=false;DRIP.visible=false;fogDraw(0,0);
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.1,CU.c1));spShot(mix(C0.p,[0.9,2.1,7.0],k),C0.l);flakes(t);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHY DOES YOUR',W/2,190,90,{sw:17});txt('NOSE RUN',W/2,305,140,{fill:'#7FD8FF',sw:26});txt("WHEN IT'S COLD?",W/2,425,90,{sw:17});g.restore()}
  else if(t<CU.c2){flash(t,CU.c1,0.15);clear3d();setBG('blue');const S=lerp(1.25,1.32,seg(t,CU.c1,CU.c2));headProfile(W/2-120,960,S);airDots(W/2-120,960,S,t,t>3.6);
    pill('AIR CONDITIONER',W/2,330,80,'#7FD8FF','#111',t,3.6,CU.c2);comic('BRRR',W*0.8,700,90,t,2.75,{life:0.8,rot:0.12,fill:'#7FD8FF'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);SP.S.add(holder);const x=lerp(-2.6,1.8,seg(t,CU.c2,CU.c3));holder.position.set(x,0,1.6);holder.rotation.set(0,PI/2,0);RED.visible=true;
    guy.pose(run(t,{mouth:'o',mouthSize:0.6,wide:false,blink:BLINK(t)}));spShot([x+0.6,2.0,10.5],[x+0.4,2.4,1.6]);flakes(t,50,1.4);
    const wf=easeOut(seg(t,5.1,6.3)),wt=easeOut(seg(t,5.8,7.2));thermo(200,820,250,wf,'WARMS');dropGauge(W-200,720,wt,'WETS');
    const [hx,hy]=proj(new THREE.Vector3(x+0.35,2.0,1.6),SP.cam);if(t>6.2){arrow(hx+240,hy-10,hx+70,hy+10,'#7FD8FF',16)}
    pill('BEFORE YOUR LUNGS',W/2,330,66,'#FFFFFF','#111',t,7.0,CU.c3)}
  else if(t<CU.c4){flash(t,CU.c3,0.15);openScene(t);const s=0.6+1.0*easeOut(seg(t,10.4,11.5));const fall=t>11.6?Math.pow((t-11.6)/0.5,2)*0.8:0;drip(t>11.6&&fall>0.35?0.3:s,fall>0.35?0:fall);
    guy.pose({...shiver(t),blink:BLINK(t),mouth:t>11.6?'o':'teeth',teethGap:0.2,wide:t>11.6,mouthSize:0.5,headPitch:t>11.6?0.25:0});
    spShot([0.6,2.1,3.6],[0.05,1.85,0.4]);
    for(let i=0;i<7;i++){const y=500+i*130,u=((t*1.4+hash(i))%1);g.strokeStyle='rgba(255,255,255,0.85)';g.lineWidth=10;g.lineCap='round';g.beginPath();g.moveTo(W*(1.1-u*1.4),y);g.lineTo(W*(1.1-u*1.4)+220,y-20);g.stroke()}flakes(t,60,1.8);
    pill('COLD + DRY AIR',W/2,330,74,'#7FD8FF','#111',t,8.85,10.4);bar(140,540,800,90,easeOut(seg(t,10.45,11.8)),'#7CFF6B',t>11.1?'EXTRA MUCUS!':'MUCUS PUMP');
    comic('DRIP!',W*0.72,1180,100,t,11.75,{life:0.8,rot:0.12,fill:'#9FE3FF'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);clear3d();noseTip(t);
    pill('WARM BREATH',W/2,330,76,'#FF9A5A','#111',t,12.7,13.6);pill('COLD TIP',W/2,330,84,'#7FD8FF','#111',t,13.65,14.45);pill('CONDENSES!',W/2,330,90,'#FFFFFF','#111',t,14.5,CU.c5);
    comic('PLIP',W*0.78,1250,90,t,14.95,{life:0.6,rot:0.12,fill:'#9FE3FF'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);WN.S.add(holder);holder.position.set(-0.45,0,-0.2);holder.rotation.set(0,PI*0.42,0);holder.scale.setScalar(1);
    const br=t>15.25&&t<16.6;guy.pose({mouth:br?'o':'grin',mouthSize:0.7,blink:BLINK(t),armL:[0.25,0],armR:t>16.9?[1.2,-1.2]:[0.25,0],bendR:t>16.9?0.5:0,headPitch:-0.05});
    fogDraw(easeOut(seg(t,15.3,16.5)),seg(t,16.95,17.7));WN.cam.position.set(lerp(1.9,1.6,seg(t,CU.c5,CU.c6)),2.3,5.4);WN.cam.lookAt(0.15,1.85,-0.5);setBG('#E5B27A');r.setClearColor(0,0);r.render(WN.S,WN.cam);
    if(br){const [mx,my]=proj(new THREE.Vector3(-0.25,1.68,-0.5),WN.cam);for(let i=0;i<4;i++){const u=((t-15.25)*1.5+i/4)%1;g.fillStyle=`rgba(255,255,255,${0.6*(1-u)})`;g.beginPath();g.arc(mx+u*220,my-u*40,26+40*u,0,7);g.fill()}}
    pill('LIKE A FOGGY WINDOW',W/2,330,64,'#FFFFFF','#111',t,16.4,CU.c6);comic('HAAA',W*0.25,620,90,t,15.3,{life:0.8,rot:-0.12,fill:'#FF9A5A'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.25));spShot(mix([2.6,2.6,8.0],C0.p,k),C0.l);flakes(t-TT);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
