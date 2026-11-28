// ===== What would happen if all the ice on Earth melted? (crazy what-if) =====
const TT=20.5;
const CU={c1:3.3,c2:5.95,c3:8.6,c4:11.5,c5:13.75,c6:18.85};
guy.outfit({shades:1});
// ---------- arctic world ----------
const AR={S:new THREE.Scene()};lights(AR.S);AR.cam=new THREE.PerspectiveCamera(30,W/H,0.1,500);
const seaM=new THREE.MeshToonMaterial({color:0x1F8FC8,gradientMap:GM});
const SEA=part(AR.S,new THREE.PlaneGeometry(600,600),seaM,[0,0,0],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<70;i++)part(SEA,new THREE.PlaneGeometry(1+hash(i)*2,0.08),basic(0x9FE3FF),[(hash(i*3)-0.5)*60,(hash(i*7)-0.5)*40,0.02],[1,1,1],[0,0,0],0);
const iceM=toon(0xF4FBFF),iceM2=toon(0xBFEAFF);
// glacier wall (melts = sinks/shrinks)
const GL=new THREE.Group();GL.position.set(0,0,-42);AR.S.add(GL);
for(let i=-10;i<=10;i++){const h=4+hash(i*2.2)*4,w=3+hash(i*1.3)*2;part(GL,new THREE.BoxGeometry(w,h,6),i%3?iceM:iceM2,[i*3.4,h/2-1,hash(i)*2],[1,1,1],[0,hash(i*4)*0.3,0],0.03)}
// icebergs
const BERGS=[];for(const [x,z,s] of [[-7,-9,1.4],[8,-12,1.8],[-14,-16,2.2],[15,-6,1.0],[4,-18,1.3],[-4,-5,0.6]]){const b=new THREE.Group();b.position.set(x,0,z);AR.S.add(b);part(b,new THREE.DodecahedronGeometry(1,0),iceM,[0,0.3,0],[s*1.3,s*1.1,s],[0,x,0],0.03);part(b,new THREE.DodecahedronGeometry(1,0),iceM2,[s*0.6,0.1,0.2],[s*0.7,s*0.6,s*0.6],[0,z,0],0.02);BERGS.push(b)}
// floe under the guy
const FLOE=new THREE.Group();AR.S.add(FLOE);part(FLOE,new THREE.CylinderGeometry(1.5,1.7,0.5,9),iceM,[0,0,0],[1.3,1,1],[0,0.3,0],0.03);
function arShot(p,l){AR.cam.position.set(...p);AR.cam.lookAt(...l);setBG('day');r.setClearColor(0,0);r.render(AR.S,AR.cam)}
function arReset(wl,melt){SEA.position.y=wl;FLOE.position.set(0,wl+0.1,0);putGuy(AR.S,0,wl+0.35,0,0.25);GL.scale.y=lerp(1,0.45,melt);GL.position.y=0;BERGS.forEach((b,i)=>{b.scale.setScalar(lerp(1,0.35,melt));b.position.y=wl})}
// ---------- swim ring (used in city) ----------
const RING=new THREE.Group();const ringM=toon(0xFF5FA2);part(RING,new THREE.TorusGeometry(0.62,0.2,14,32),ringM,[0,0,0],[1,1,1],[PI/2,0,0],0.012);for(let k=0;k<4;k++)part(RING,new THREE.TorusGeometry(0.62,0.205,14,6,0.35),toon(0xffffff),[0,0,0],[1,1,1],[PI/2,0,k*PI/2],0);
const city=scene('city');city.S.add(RING);
const cwM=new THREE.MeshToonMaterial({color:0x2A9FD6,transparent:true,opacity:0.82,gradientMap:GM});const CWAT=part(city.S,new THREE.PlaneGeometry(400,200),cwM,[0,0,0],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<90;i++)part(CWAT,new THREE.PlaneGeometry(0.8+hash(i)*1.6,0.07),basic(0xBFF0FF),[(hash(i*3)-0.5)*80,(hash(i*5)-0.5)*30,0.02],[1,1,1],[0,0,0],0);
// ---------- drink table world ----------
const DK={S:new THREE.Scene()};lights(DK.S);DK.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);
part(DK.S,new THREE.PlaneGeometry(40,40),toon(0xE9CF9A),[0,0,0],[1,1,1],[-PI/2,0,0],0);
const TB=new THREE.Group();TB.position.set(0,0,0.9);DK.S.add(TB);part(TB,new THREE.CylinderGeometry(0.9,0.9,0.08,32),toon(0xFFFFFF),[0,1.05,0],[1,1,1],[0,0,0],0.012);part(TB,cap(0.06,1.0),toon(0x9AA0AA),[0,0.52,0]);part(TB,new THREE.CylinderGeometry(0.45,0.5,0.05,24),toon(0x9AA0AA),[0,0.03,0]);
// umbrella
part(DK.S,cap(0.04,3.2),toon(0xffffff),[-1.6,1.6,-0.6]);part(DK.S,new THREE.ConeGeometry(1.8,0.6,10),toon(0xFF5FA2),[-1.6,3.3,-0.6],[1,1,1],[0,0,0],0.02);
// palms + sea strip
part(DK.S,new THREE.PlaneGeometry(60,20),toon(0x2AB3D9),[0,0.01,-12],[1,1,1],[-PI/2,0,0],0);for(let k=-3;k<4;k++)palm(DK.S,k*4.2+1,-5-hash(k)*2,1.3,0.18,k);
const GLS=new THREE.Group();GLS.position.set(0.25,1.09,1.2);DK.S.add(GLS);
const glassM=new THREE.MeshToonMaterial({color:0xDFF6FF,transparent:true,opacity:0.28,gradientMap:GM,depthWrite:false});part(GLS,new THREE.CylinderGeometry(0.16,0.13,0.5,32,1,true),glassM,[0,0.25,0],[1,1,1],[0,0,0],0);
const LIQ=part(GLS,new THREE.CylinderGeometry(0.15,0.125,0.36,32),new THREE.MeshToonMaterial({color:0xFF8A2B,transparent:true,opacity:0.85,gradientMap:GM}),[0,0.18,0],[1,1,1],[0,0,0],0);
const CUBES=[];for(let k=0;k<3;k++){const c=part(GLS,new THREE.BoxGeometry(0.1,0.1,0.1),new THREE.MeshToonMaterial({color:0xEFFFFF,transparent:true,opacity:0.9,gradientMap:GM}),[(k-1)*0.07,0.37,(k%2)*0.05-0.02],[1,1,1],[k,k*2,0.3],0.004);CUBES.push(c)}
part(GLS,cap(0.012,0.5),toon(0x3FF0FF),[0.06,0.45,0],[1,1,1],[0,0,0.25],0);
function dkShot(p,l){DK.cam.position.set(...p);DK.cam.lookAt(...l);setBG('linear-gradient(#5EC8FF,#BDEBFF 60%,#FFF1D6)');r.setClearColor(0,0);r.render(DK.S,DK.cam)}
// ---------- 2D helpers ----------
function gauge(x,y,h,v,max=70){panel(x,y,150,h+120,'rgba(10,12,25,0.85)','#3FF0FF',30);const top=y-h/2,bot=y+h/2;g.fillStyle='rgba(255,255,255,0.12)';rr(x-30,top,60,h,20);g.fill();const f=clamp(v/max);
  const gr=g.createLinearGradient(0,bot,0,top);gr.addColorStop(0,'#1F6FD6');gr.addColorStop(1,'#3FF0FF');g.fillStyle=gr;rr(x-30,bot-h*f,60,Math.max(20,h*f),20);g.fill();
  for(let i=0;i<=7;i++){const yy=bot-h*i/7;g.fillStyle='#fff';g.fillRect(x+36,yy-2,i%7?14:22,4)}txt('+'+Math.round(v)+' m',x,top-34,44,{fill:'#3FF0FF',sw:10});txt('SEA',x,bot+36,34,{fill:'#fff',sw:8})}
function wave(y0,amp,ph,col,x0=0,x1=W){g.fillStyle=col;g.beginPath();g.moveTo(x0,H);for(let x=x0;x<=x1;x+=20)g.lineTo(x,y0+amp*Math.sin(x*0.02+ph));g.lineTo(x1,H);g.closePath();g.fill()}
const FLA=new Path2D('M-300,-260 L-60,-262 L-40,-238 L60,-240 C90,-238 110,-225 120,-205 C150,-140 175,-60 190,10 C205,90 215,170 190,230 C178,262 150,268 128,250 C90,200 70,140 40,90 C10,40 -10,0 -30,-60 C-45,-110 -70,-160 -110,-190 C-160,-215 -230,-215 -300,-215 Z');
function florida(x,y,s,k,t){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#1E7FBF';g.fillRect(-420,-330,840,660);
  for(let i=0;i<14;i++){g.strokeStyle='rgba(191,240,255,0.35)';g.lineWidth=4;g.beginPath();g.moveTo(-400+hash(i)*700,-300+i*45);g.lineTo(-340+hash(i)*700,-300+i*45);g.stroke()}
  // land shrinks toward the north-central ridge as the sea rises
  g.save();const ax=-20,ay=-225;g.translate(ax,ay);const sx=lerp(1,0.55,k),sy=lerp(1,0.32,k);g.scale(sx,sy);g.translate(-ax,-ay);
  g.fillStyle='#62C96F';g.strokeStyle='#111';g.lineWidth=7/Math.min(sx,sy);g.fill(FLA);g.stroke(FLA);g.restore();
  // flooded ghost outline
  if(k>0.05){g.save();g.globalAlpha=0.9*k;g.setLineDash([16,12]);g.strokeStyle='#fff';g.lineWidth=6;g.stroke(FLA);g.restore()}
  g.restore()}
// ---------- opening (loop) ----------
const C0={p:[3.0,2.8,11.5],l:[0,2.0,-1]};
function openScene(t){arReset(0,0);guy.pose(idle(t,{armL:[0.35+0.05*Math.sin(t*2*PI/(TT/8)),0],armR:[0.35,0],headYaw:0.15,look:0.3,jump:0.012*Math.sin(t*2*PI/(TT/10))}));
  const bob=0.05*Math.sin(t*2*PI/(TT/9));FLOE.position.y+=bob;holder.position.y+=bob}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();RING.visible=false;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.1,CU.c1));arShot(mix(C0.p,[2.6,2.6,10.3],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT IF ALL',W/2,200,100,{sw:20});txt('THE ICE ON EARTH',W/2,315,92,{fill:'#BFF0FF',sw:20});txt('MELTED?',W/2,450,160,{fill:'#FFD23F',sw:30});g.restore()}
  else if(t<CU.c2){flash(t,CU.c1,0.15);const m=easeOut(seg(t,3.4,5.6)),wl=m*0.9;arReset(wl,m);const bob=0.05*Math.sin(t*3);FLOE.position.y+=bob;holder.position.y+=bob;
    guy.pose({armL:[0.6+0.5*m,0.3],armR:[0.6+0.5*m,0.3],bendL:0.3,bendR:0.3,mouth:'o',mouthSize:1.0,wide:true,blink:false,headPitch:-0.15,headYaw:-0.3,lookY:0.5});
    arShot([3.0,3.0+wl,10],[-0.9,2.5+wl,-3]);
    // drips falling from the glacier
    const pg=[W/2,560];for(let i=0;i<14;i++){const ph=(t*1.3+hash(i))%1;g.fillStyle='#BFF0FF';g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.ellipse(pg[0]-380+hash(i*3)*760,pg[1]-120+ph*260,9,14,0,0,7);g.fill();g.stroke()}
    gauge(W*0.84,1000,520,m*70);comic('DRIP DRIP',W*0.3,560,90,t,3.5,{life:1.1,rot:-0.1,fill:'#BFF0FF'});pill('+70 METERS',W/2,330,74,'#3FF0FF','#111',t,4.7,CU.c2)}
  else if(t<CU.c3){flash(t,CU.c2,0.15);clear3d();setBG('linear-gradient(#5EC8FF,#BDEBFF 70%,#E9F7FF)');
    const k=easeOut(seg(t,6.2,8.0));const gx=W/2-60,gy=1600,bh=860,bw=300;
    // building
    g.fillStyle='#E9D9C0';g.strokeStyle='#111';g.lineWidth=8;g.fillRect(gx-bw/2,gy-bh,bw,bh);g.strokeRect(gx-bw/2,gy-bh,bw,bh);
    for(let f=0;f<20;f++)for(let c=0;c<3;c++){g.fillStyle=hash(f*3+c)<0.6?'#7FD3FF':'#FFE680';g.fillRect(gx-bw/2+30+c*90,gy-bh+12+f*44.5,60,26)}
    txt('20',gx+bw/2+90,gy-bh+40,80,{fill:'#FFD23F',sw:16});txt('STORIES',gx+bw/2+90,gy-bh+110,40,{sw:10});
    // water rising past the roof (70 m vs ~60 m building)
    const wy=lerp(gy,gy-bh*1.17,k);g.save();g.globalAlpha=0.5;wave(wy,14,t*4,'#2A9FD6');g.restore();wave(wy+30,10,t*5+1,'rgba(20,90,170,0.5)');
    g.strokeStyle='#fff';g.lineWidth=6;g.setLineDash([22,14]);g.beginPath();g.moveTo(40,wy);g.lineTo(W-40,wy);g.stroke();g.setLineDash([]);
    txt('+'+Math.round(k*70)+' m',170,wy-50,64,{fill:'#3FF0FF',sw:14});
    // guy icon bobbing on top in a ring
    const bx=gx-40,by=wy-10+8*Math.sin(t*4);g.save();g.translate(bx,by);g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.arc(0,-70,40,0,7);g.fill();g.stroke();g.fillStyle='#1E1E24';g.fillRect(-26,-80,52,10);
    g.fillStyle='#2FB5A8';g.beginPath();g.ellipse(0,-10,48,40,0,0,7);g.fill();g.stroke();g.fillStyle='#FF5FA2';g.beginPath();g.ellipse(0,0,70,20,0,0,7);g.fill();g.stroke();g.restore();
    comic('GLUG!',W*0.78,640,110,t,7.6,{life:0.9,rot:0.12,fill:'#3FF0FF'});pill('TALLER THAN 20 FLOORS',W/2,300,62,'#FFD23F','#111',t,6.3,CU.c3)}
  else if(t<CU.c4){flash(t,CU.c3,0.15);city.mood('sunset');city.cop.c.visible=false;const k=easeOut(seg(t,8.6,11.4));const wl=lerp(1.4,4.2,k);CWAT.position.y=wl;
    RING.visible=true;const bob=0.06*Math.sin(t*3.2);RING.position.set(1.2,wl+0.05+bob,2.6);putGuy(city.S,1.2,wl-0.95+bob,2.6,-0.35);
    guy.pose({armL:[1.0,0.1],armR:[1.0+0.25*Math.sin(t*5),0.1],bendL:0.5,bendR:0.5,legL:[0.5,0.3,0],legR:[0.3,0.3,0],mouth:'grin',blink:BLINK(t),headYaw:0.3});
    const car=city.car;car.c.position.set(-3.5,wl-0.55+0.05*Math.sin(t*2.6+1),1.2);car.c.rotation.set(0.06*Math.sin(t*2),0.4,0.05);
    const cx=lerp(-1,3.5,ease(seg(t,8.6,11.5)));city.shot([cx+2.2,wl+3.4,17.5],[cx-0.5,wl+2.6,0]);
    pill('MIAMI',W*0.27,330,66,'#FF3DA6','#fff',t,8.72,CU.c4);pill('NEW YORK',W*0.7,330,66,'#3FF0FF','#111',t,9.43,CU.c4);pill('LONDON',W/2,450,66,'#FFD23F','#111',t,9.89,CU.c4);
    comic('SPLASH',W*0.25,1150,100,t,10.75,{life:0.8,rot:-0.1,fill:'#BFF0FF'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);clear3d();setBG('#1E7FBF');const k=easeOut(seg(t,11.7,13.5));florida(W/2+20,900,1.9,k,t);
    txt('FLORIDA',W/2,330,100,{fill:'#62C96F',sw:20});if(t>12.6)pill('MOSTLY GONE',W/2,1660,74,'#FF4A4A','#fff',t,12.6,CU.c5);
    // tiny guy in ring drifting
    const gx=W*0.72+30*Math.sin(t*1.5),gy=1300+12*Math.sin(t*3);g.save();g.translate(gx,gy);g.fillStyle='#FF5FA2';g.strokeStyle='#111';g.lineWidth=5;g.beginPath();g.ellipse(0,0,46,30,0,0,7);g.fill();g.stroke();g.fillStyle='#FFD23F';g.beginPath();g.arc(0,-26,24,0,7);g.fill();g.stroke();g.restore();
    comic('BYE!',W*0.25,1250,90,t,13.1,{life:0.6,rot:-0.15,fill:'#FFD23F'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);const melt=easeOut(seg(t,14.2,17.6));CUBES.forEach((c,i)=>{c.scale.setScalar(lerp(1,0.12,clamp(melt*1.1-i*0.05)));c.position.y=0.37+0.01*Math.sin(t*3+i)});
    putGuy(DK.S,0,0,0,0);guy.pose({armL:[0.55,0.5],armR:[0.55,0.5],bendL:0.6,bendR:0.6,mouth:melt>0.8?'grin':'o',mouthSize:0.7,headPitch:0.35,blink:BLINK(t),look:0.2});
    const zoom=ease(seg(t,14.6,15.6));dkShot(mix([0.9,1.9,5.6],[0.5,1.55,2.55],zoom),mix([0.1,1.45,0.6],[0.25,1.33,1.2],zoom));
    // level line on the glass
    if(t>15.6){const a=seg(t,15.6,15.9);const p1=proj(new THREE.Vector3(0.05,1.09+0.36,1.2+0.16),DK.cam),p0=proj(new THREE.Vector3(0.45,1.09+0.36,1.2+0.16),DK.cam);g.save();g.globalAlpha=a;g.strokeStyle='#FFD23F';g.lineWidth=8;g.setLineDash([18,12]);g.beginPath();g.moveTo(p1[0]-160,p1[1]);g.lineTo(p0[0]+160,p0[1]);g.stroke();g.restore();txtA('LEVEL',p0[0]+160,p0[1]-50,46,a,{fill:'#FFD23F',sw:10})}
    if(t>16.7)check(W*0.8,560,1.6);pill("DOESN'T COUNT",W/2,330,70,'#3FF0FF','#111',t,15.7,16.8);pill('FLOATING ICE = NO RISE',W/2,330,60,'#FFD23F','#111',t,16.85,CU.c6);
    comic('PLINK',W*0.24,620,90,t,14.0,{life:0.7,rot:-0.12,fill:'#BFF0FF'})}
  else{const tt=t-TT;openScene(tt);const k=ease(seg(t,CU.c6,TT-0.1));arShot(mix([5.5,3.8,14],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
