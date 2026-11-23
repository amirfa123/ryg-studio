// ===== Why do your eyes hurt after playing GTA 6 all day? (body/everyday + GTA 6) =====
const TT=19.1;
const CU={c1:3.85,c2:6.9,c3:10.38,c4:11.98,c5:14.3,c6:17.32};
guy.outfit({headphones:1,snapforward:0});
const R=scene('room');R.pc.children.forEach(c=>{const p=c.geometry&&c.geometry.parameters;if(p&&((p.width===0.45&&p.height===0.95)||(p.width===0.02&&p.height===0.7)))c.visible=false});
// gaming chair + keyboard + mouse at the PC corner
const CHAIR=new THREE.Group();CHAIR.position.set(4.35,0,0.6);CHAIR.rotation.y=PI/2;R.S.add(CHAIR);{const K=toon(0x1E1E26),Rd=toon(0xE23B3B);
  part(CHAIR,new THREE.BoxGeometry(0.9,0.14,0.8),K,[0,0.48,0],[1,1,1],[0,0,0],0.012);part(CHAIR,new THREE.BoxGeometry(0.86,1.3,0.16),K,[0,1.15,-0.46],[1,1,1],[-0.12,0,0],0.012);part(CHAIR,new THREE.BoxGeometry(0.3,1.2,0.17),Rd,[0,1.15,-0.455],[1,1,1],[-0.12,0,0],0);
  part(CHAIR,cap(0.05,0.3),toon(0x888899),[0,0.25,0]);for(let k=0;k<5;k++){const a=k/5*PI*2;part(CHAIR,cap(0.03,0.3),toon(0x888899),[Math.cos(a)*0.2,0.06,Math.sin(a)*0.2],[1,1,1],[0,-a,PI/2],0)}}
const KB=new THREE.Group();KB.position.set(5.22,1.06,0.62);R.S.add(KB);part(KB,new THREE.BoxGeometry(0.28,0.04,0.75),toon(0x22222C),[0,0,0],[1,1,1],[0,0,0],0.006);part(KB,new THREE.PlaneGeometry(0.22,0.68),basic(0xFF3DA6),[0,0.022,0],[1,1,1],[-PI/2,0,PI/2],0);
part(R.S,new THREE.BoxGeometry(0.16,0.05,0.1),toon(0x22222C),[5.2,1.06,0.0],[1,1,1],[0,0,0],0.006);
const MBG='radial-gradient(circle at 70% 40%,#3A1F6E,#120A26 75%)';
function gameScreen(t){const c=R.pcs.ctx,w=320,h=200;const gr=c.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#2A0E5A');gr.addColorStop(0.6,'#FF5E8A');gr.addColorStop(1,'#FFB36B');c.fillStyle=gr;c.fillRect(0,0,w,h);
  c.fillStyle='#FFE680';c.beginPath();c.arc(w/2,h*0.55,34,0,7);c.fill();for(let i=0;i<12;i++){const bw=20+hash(i*3)*14,bh=30+hash(i*7)*70,x=((i*30-(t*40)%30)%340+340)%340-20;c.fillStyle=i%2?'#1E1340':'#2A1A55';c.fillRect(x,h-40-bh,bw,bh);c.fillStyle='#3FF0FF';c.fillRect(x,h-40-bh,bw,3)}
  c.fillStyle='#2A2340';c.fillRect(0,h-40,w,40);for(let k=0;k<6;k++){c.fillStyle='#FFD23F';c.fillRect(((k*70-(t*220)%70)%420+420)%420-40,h-22,36,5)}c.fillStyle='#FF3D7F';c.fillRect(140,h-40,46,16);c.fillStyle='#111';c.fillRect(146,h-28,10,8);c.fillRect(170,h-28,10,8);R.pcs.tx.needsUpdate=true}
function sitDesk(t,o={}){R.S.add(holder);holder.rotation.order='XYZ';holder.position.set(4.42,0.08,0.6);holder.rotation.set(0,PI/2,0);holder.scale.setScalar(1);holder.visible=true;
  const tap=0.03*Math.sin(t*2*PI/0.32);guy.pose({...SIT,reachL:[0.2,1.24+tap,0.78],reachR:[-0.22,1.24-tap,0.78],mouth:'smile',blink:BLINK(t),...o})}
// ---------- 2D ----------
function blinkPanel(t,v,col,sub){panel(W/2,330,820,250,'rgba(10,12,25,0.88)',col,36);txt(String(Math.round(v)),W/2-170,320,150,{stroke:0,fill:col});txt('BLINKS',W/2+130,290,62,{stroke:0,fill:'#fff'});txt('PER MINUTE',W/2+130,360,44,{stroke:0,fill:'#B8C0D8'});if(sub)txt(sub,W/2,520,56,{fill:'#fff',sw:12})}
function eyeFront(cx,cy,R0,t,dry,lid){// big frontal eye
  g.save();g.translate(cx,cy);g.fillStyle='#F4D7C0';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.ellipse(0,0,R0*1.25,R0*0.8,0,0,7);g.fill();g.stroke();
  g.save();g.beginPath();g.ellipse(0,0,R0*1.25,R0*0.8,0,0,7);g.clip();g.fillStyle=`rgb(255,${255-dry*40|0},${255-dry*60|0})`;g.fillRect(-R0*1.3,-R0,R0*2.6,R0*2);
  // veins
  g.strokeStyle=`rgba(220,40,40,${dry})`;g.lineWidth=5;for(let i=0;i<10;i++){const a=hash(i*3.7)*PI*2;g.beginPath();let x=Math.cos(a)*R0*1.25,y=Math.sin(a)*R0*0.8;g.moveTo(x,y);for(let k=0;k<4;k++){x*=0.85;y*=0.85;x+=(hash(i*9+k)-0.5)*30;y+=(hash(i*5+k)-0.5)*30;g.lineTo(x,y)}g.stroke()}
  g.fillStyle='#2E86DE';g.beginPath();g.arc(0,0,R0*0.5,0,7);g.fill();g.strokeStyle='#1B4F8A';g.lineWidth=6;for(let i=0;i<16;i++){const a=i/16*PI*2;g.beginPath();g.moveTo(Math.cos(a)*R0*0.22,Math.sin(a)*R0*0.22);g.lineTo(Math.cos(a)*R0*0.48,Math.sin(a)*R0*0.48);g.stroke()}
  g.fillStyle='#111';g.beginPath();g.arc(0,0,R0*0.2,0,7);g.fill();g.fillStyle='#fff';g.beginPath();g.arc(-R0*0.15,-R0*0.16,R0*0.08,0,7);g.fill();
  // tear film
  g.fillStyle=`rgba(120,210,255,${0.35*(1-dry)})`;g.fillRect(-R0*1.3,-R0,R0*2.6,R0*2);
  // cracks
  if(dry>0.5){g.strokeStyle='rgba(120,60,40,'+(dry-0.5)*2+')';g.lineWidth=4;for(let i=0;i<6;i++){const a=i/6*PI*2+0.3;g.beginPath();g.moveTo(Math.cos(a)*R0*0.55,Math.sin(a)*R0*0.55);g.lineTo(Math.cos(a+0.2)*R0*0.9,Math.sin(a+0.2)*R0*0.6);g.lineTo(Math.cos(a-0.1)*R0*1.2,Math.sin(a-0.1)*R0*0.75);g.stroke()}}
  // eyelid
  if(lid>0){g.fillStyle='#F4C9A8';g.fillRect(-R0*1.3,-R0,R0*2.6,R0*2*lid*0.9)}
  g.restore();g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.ellipse(0,0,R0*1.25,R0*0.8,0,0,7);g.stroke();
  for(let i=0;i<7;i++){const a=PI+0.35+i*(PI-0.7)/6;const x=Math.cos(a)*R0*1.25,y=Math.sin(a)*R0*0.8;g.lineWidth=8;g.beginPath();g.moveTo(x,y);g.lineTo(x*1.12,y*1.25-10);g.stroke()}g.restore()}
function tumble(x,y,s,a){g.save();g.translate(x,y);g.rotate(a);g.strokeStyle='#A07840';g.lineWidth=6;for(let i=0;i<9;i++){g.beginPath();g.arc((hash(i)-0.5)*20,(hash(i*3)-0.5)*20,s*(0.5+hash(i*7)*0.5),hash(i*5)*6,hash(i*5)*6+3);g.stroke()}g.restore()}
function eyeSide(cx,cy,R0,t,k,tired){// cross-section: light enters from left
  g.save();g.translate(cx,cy);
  g.strokeStyle='rgba(255,230,120,0.9)';g.lineWidth=8;for(const dy of [-70,0,70]){g.beginPath();g.moveTo(-R0*2.2,dy);g.lineTo(-R0*0.8,dy*0.9);g.lineTo(R0*0.95,0);g.stroke()}
  g.fillStyle='#FFF4EE';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.arc(0,0,R0,0,7);g.fill();g.stroke();
  g.fillStyle='#FF8FA0';g.beginPath();g.arc(0,0,R0-14,-PI/2.6,PI/2.6);g.arc(0,0,R0-40,PI/2.6,-PI/2.6,true);g.closePath();g.fill();
  g.fillStyle='rgba(160,225,255,0.85)';g.beginPath();g.arc(-R0*0.72,0,R0*0.42,PI*0.62,PI*1.38);g.closePath();g.fill();g.stroke();
  const lw=R0*(0.13+0.05*k),lh=R0*0.3;g.fillStyle='#BFE9FF';g.beginPath();g.ellipse(-R0*0.62,0,lw,lh,0,0,7);g.fill();g.stroke();
  for(const s of [-1,1]){const my=s*R0*0.52,sc=1+0.25*k;g.fillStyle=tired?'#E0574F':'#FF6A6A';g.beginPath();g.ellipse(-R0*0.6,my,R0*0.13*sc,R0*0.08*sc,0,0,7);g.fill();g.stroke();
    g.strokeStyle='#555';g.lineWidth=4;g.beginPath();g.moveTo(-R0*0.6,my-s*R0*0.06);g.lineTo(-R0*0.62,s*lh*0.95);g.stroke();g.strokeStyle='#111';g.lineWidth=10}
  g.restore()}
function battery(x,y,f){g.save();g.translate(x,y);g.fillStyle='rgba(0,0,0,0.5)';g.strokeStyle='#111';g.lineWidth=8;rr(-110,-50,220,100,16);g.fill();g.stroke();g.fillStyle='#111';g.fillRect(110,-20,18,40);const col=f>0.5?'#5BE37A':f>0.25?'#FFD23F':'#FF4A4A';g.fillStyle=col;rr(-100,-40,200*f,80,10);g.fill();g.restore();txt(Math.round(f*100)+'%',x,y,46,{sw:10})}
function sweat(x,y,t){for(let k=0;k<3;k++){const ph=((t*1.2+k/3)%1);g.save();g.globalAlpha=1-ph;g.translate(x+k*40-40,y+ph*90);g.fillStyle='#7FD3FF';g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.moveTo(0,-22);g.quadraticCurveTo(16,6,0,12);g.quadraticCurveTo(-16,6,0,-22);g.fill();g.stroke();g.restore()}}
// ---------- opening: gaming at the desk late at night ----------
const C0={p:[8.9,2.6,6.2],l:[4.75,1.2,0.6]};
function openScene(t){gameScreen(t);clockDraw(R,2,10);sitDesk(t,{mouth:'grin',headPitch:0.05,look:0.15*Math.sin(t*2*PI/2.39),jump:0.01*Math.sin(t*2*PI/0.955)})}
function roomShot(p,l){R.cam.position.set(...p);R.cam.lookAt(...l);setBG(MBG);r.setClearColor(0,0);r.render(R.S,R.cam)}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.2,CU.c1));roomShot(mix(C0.p,[8.3,2.5,5.2],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHY DO YOUR EYES HURT',W/2,200,72,{sw:15});txt('AFTER PLAYING',W/2,300,80,{sw:15});txt('GTA 6 ALL DAY?',W/2,420,112,{fill:'#3FF0FF',sw:22});g.restore();
    comic('JUST ONE MORE MISSION',W*0.5,610,58,t,1.6,{life:1.9,rot:-0.05,fill:'#FF7AC2'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);const C=scene('city');C.mood('day');C.car.c.visible=false;C.S.add(holder);const x=lerp(-2,1.2,seg(t,CU.c1,CU.c2));holder.position.set(x,0.18,-3.6);holder.rotation.set(0,PI/2-0.25,0);
    const bl=((t-4.0)%0.9)<0.12&&t>4.0;guy.pose(walk(t,7,{blink:bl,mouth:'smile'}));C.shot([x+2.6,2.4,7.5],[x+0.4,1.25,-3.6]);
    const n=Math.min(15,Math.floor(seg(t,4.6,6.6)*15+0.001));blinkPanel(t,n,'#5BE37A','NORMAL');if(bl)comic('BLINK',W*0.7,700,70,t,t-((t-4.0)%0.9),{life:0.3,rot:0.1,fill:'#fff'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);gameScreen(t);clockDraw(R,3,0);sitDesk(t,{mouth:'o',mouthSize:0.5,wide:true,blink:false,headPitch:0.05});
    const s=0.02*Math.sin(t*1.5);roomShot([5.9+s,1.75,3.0],[4.42,1.5,0.6]);
    const v=lerp(15,7,ease(seg(t,8.7,10.0)));blinkPanel(t,v,t>8.7?'#FF4A4A':'#5BE37A',t>9.5?'ABOUT HALF!':'GAMING');
    comic('STARE...',W*0.24,1150,76,t,7.4,{life:1.2,rot:-0.1,fill:'#3FF0FF'});pill('−50%',W*0.78,700,90,'#FF4A4A','#fff',t,9.6,CU.c3)}
  else if(t<CU.c4){flash(t,CU.c3,0.15);clear3d();g.fillStyle='#E9B872';g.fillRect(0,0,W,H);g.fillStyle='#F6D79A';g.fillRect(0,0,W,H*0.42);
    const dry=ease(seg(t,10.5,11.6));eyeFront(W/2,820,330,t,dry,0);tumble(lerp(-100,W+100,seg(t,10.6,11.98)),1150,46,t*8);
    txt('TEAR FILM',W/2,300,60,{sw:12});bar(W/2-300,350,600,64,1-dry,'#7FD3FF');comic('DRY!',W*0.75,560,120,t,11.2,{life:0.8,rot:0.12,fill:'#FF7A1A'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);gameScreen(t);sitDesk(t,{mouth:'o',mouthSize:0.45,blink:false,headPitch:0.05});const hr=Math.floor(lerp(1,9,seg(t,12.3,14.2)));clockDraw(R,hr,(t*600)%60);
    roomShot([5.1,1.95,7.4],[5.15,1.3,0.6]);const e=new THREE.Vector3(4.62,1.6,0.6),m=new THREE.Vector3(5.85,1.6,0.6);const [ex,ey]=proj(e,R.cam),[mx,my]=proj(m,R.cam);
    if(t>12.5){const a=easeOut(seg(t,12.5,12.8));g.save();g.globalAlpha=a;g.setLineDash([24,18]);g.strokeStyle='#FFD23F';g.lineWidth=12;g.beginPath();g.moveTo(ex+20,ey-180);g.lineTo(mx-20,my-180);g.stroke();g.setLineDash([]);for(const xx of [ex+20,mx-20]){g.beginPath();g.moveTo(xx,ey-215);g.lineTo(xx,ey-145);g.stroke()}g.restore();txtA('SAME DISTANCE',(ex+mx)/2,ey-260,54,a,{fill:'#FFD23F',sw:12})}
    panel(W/2,330,560,200,'rgba(10,12,25,0.88)','#FFD23F',36);clockFace(W/2-150,330,70,hr,(t*600)%60);txt(hr+' HOURS',W/2+70,330,64,{stroke:0,fill:'#fff'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);clear3d();g.fillStyle='#1B1F3A';g.fillRect(0,0,W,H);const k=0.5+0.5*Math.sin(t*9);const f=lerp(1,0.12,ease(seg(t,14.6,16.9)));
    eyeSide(W/2+80,860,300,t,k*f+0.1,f<0.4);txt('FOCUS MUSCLES',W/2,330,70,{fill:'#FF8FA0',sw:14});
    const [ax,ay]=[W/2+80-180,860-160];if(t>14.7){g.save();g.globalAlpha=easeOut(seg(t,14.7,15.0));arrow(ax-230,ay-200,ax-20,ay-20,'#FF8FA0',22);g.restore()}
    battery(W/2,1180,f);if(f<0.4){sweat(W/2+260,620,t);comic('TIRED!',W*0.72,1010,100,t,16.4,{life:0.9,rot:-0.12,fill:'#FF4A4A'})}}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.2));roomShot(mix([7.6,2.2,4.4],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
