// ===== Why can you see your breath when it's cold? (body/everyday) =====
const TT=20.05;
const CU={c1:2.55,c2:6.75,c3:9.3,c4:12.55,c5:14.7,c6:18.3};
guy.outfit({beanie:1});
// ---------- snowy night park ----------
const P={S:new THREE.Scene()};lights(P.S);P.S.children.filter(c=>c.isLight).forEach(l=>l.intensity*=0.7);P.cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);
P.S.fog=new THREE.Fog(0x2A3570,14,48);
part(P.S,new THREE.PlaneGeometry(200,200),toon(0xE8F0FF),[0,0,0],[1,1,1],[-PI/2,0,0],0);
part(P.S,new THREE.PlaneGeometry(200,2.2),toon(0xB8C4DE),[0,0.01,0.6],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<22;i++){const x=(hash(i*4.7)-0.5)*40,z=-4-hash(i*2.3)*16;const tr=new THREE.Group();tr.position.set(x,0,z);P.S.add(tr);part(tr,cap(0.14,0.7),toon(0x5A3E28),[0,0.35,0]);
  for(let k=0;k<3;k++){part(tr,new THREE.ConeGeometry(1.0-k*0.25,1.2,8),toon(0x1F4F48),[0,1.1+k*0.7,0],[1,1,1],[0,0,0],0.012);part(tr,new THREE.ConeGeometry(0.85-k*0.25,0.3,8),toon(0xFFFFFF),[0,1.62+k*0.7,0],[1,1,1],[0,0,0],0)}}
const LAMP=new THREE.Group();LAMP.position.set(-1.6,0,-0.9);P.S.add(LAMP);part(LAMP,cap(0.06,3.0),toon(0x22222C),[0,1.6,0]);part(LAMP,new THREE.CylinderGeometry(0.22,0.3,0.4,12),toon(0x22222C),[0,3.25,0],[1,1,1],[0,0,0],0.01);part(LAMP,SPH,basic(0xFFE7A0),[0,3.05,0],[0.2,0.2,0.2],[0,0,0],0);
part(P.S,new THREE.CircleGeometry(1.6,30),basic(0xFFF2C8,{transparent:true,opacity:0.5}),[-1.6,0.02,-0.9],[1,1,1],[-PI/2,0,0],0);
const BENCH=new THREE.Group();BENCH.position.set(1.7,0,-1.1);P.S.add(BENCH);part(BENCH,new THREE.BoxGeometry(1.8,0.1,0.5),toon(0x9A6A3B),[0,0.5,0],[1,1,1],[0,0,0],0.01);part(BENCH,new THREE.BoxGeometry(1.8,0.4,0.08),toon(0x9A6A3B),[0,0.85,-0.22],[1,1,1],[0,0,0],0.01);part(BENCH,new THREE.BoxGeometry(1.8,0.08,0.5),toon(0xFFFFFF),[0,0.58,0],[1,1,1],[0,0,0],0);
for(const x of [-0.8,0.8])part(BENCH,new THREE.BoxGeometry(0.08,0.5,0.45),toon(0x22222C),[x,0.25,0],[1,1,1],[0,0,0],0);
// snowman (original)
const SM=new THREE.Group();SM.position.set(3.4,0,-2.6);P.S.add(SM);part(SM,SPH,toon(0xFFFFFF),[0,0.5,0],[0.55,0.5,0.55],[0,0,0],0.01);part(SM,SPH,toon(0xFFFFFF),[0,1.25,0],[0.38,0.36,0.38],[0,0,0],0.01);part(SM,SPH,toon(0xFFFFFF),[0,1.82,0],[0.27,0.26,0.27],[0,0,0],0.01);
part(SM,new THREE.ConeGeometry(0.05,0.3,8),toon(0xFF8A2B),[0,1.8,0.38],[1,1,1],[PI/2,0,0],0);for(const s of [-1,1])part(SM,SPH,basic(0x111111),[s*0.09,1.9,0.23],[0.035,0.035,0.035],[0,0,0],0);
const NIGHT='linear-gradient(#0B1240 0%,#26307A 55%,#5A63A8 100%)';
function parkShot(p,l){P.cam.position.set(...p);P.cam.lookAt(...l);setBG(NIGHT);r.setClearColor(0,0);r.render(P.S,P.cam)}
function stars(t){g.save();for(let i=0;i<40;i++){g.globalAlpha=0.5+0.5*Math.sin(t*3+i);g.fillStyle='#fff';g.fillRect(hash(i)*W,hash(i*3)*600,4,4)}g.restore()}
function snow(t,n=60){g.save();g.fillStyle='rgba(255,255,255,0.85)';for(let i=0;i<n;i++){const x=((hash(i)*W+Math.sin(t*1.3+i)*30)%W+W)%W,y=(((hash(i*3)*H+t*(90+hash(i*5)*120))%H)+H)%H;g.beginPath();g.arc(x,y,3+hash(i*7)*5,0,7);g.fill()}g.restore()}
// ---------- breath puff (2D at the projected mouth) ----------
function mouthScreen(cam){guy.head.updateWorldMatrix(true,false);const v=guy.head.localToWorld(new THREE.Vector3(0,-0.19,0.36));const f=guy.head.localToWorld(new THREE.Vector3(0,-0.19,1.2));return [proj(v,cam),proj(f,cam)]}
function puff(m,f,ph,scale=1,alpha=1){if(ph<0||ph>1)return;const dx=f[0]-m[0],dy=f[1]-m[1],n=Math.hypot(dx,dy)||1;const ux=dx/n,uy=dy/n;g.save();
  for(let i=0;i<9;i++){const k=ph*(0.6+0.4*hash(i));const d=(40+260*k)*scale,sp=(18+60*k)*scale;const x=m[0]+ux*d+(hash(i*3)-0.5)*sp*1.4-uy*(hash(i*5)-0.5)*sp,y=m[1]+uy*d+(hash(i*7)-0.5)*sp-30*k*scale;
    g.globalAlpha=alpha*(1-ph)*0.75;g.fillStyle='#F4F8FF';g.beginPath();g.arc(x,y,(16+70*k)*scale*(0.7+0.5*hash(i*9)),0,7);g.fill()}g.restore()}
// ---------- 2D diagrams ----------
function lungs(cx,cy,s,t){g.save();g.translate(cx,cy);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=12;g.lineJoin='round';
  g.fillStyle='#F2C9D0';g.beginPath();g.moveTo(0,-330);g.lineTo(0,-120);g.stroke();
  for(const sx of [-1,1]){const br=1+0.04*Math.sin(t*3);g.save();g.scale(sx*br,br);g.fillStyle='#FF8FA8';g.beginPath();g.moveTo(30,-150);g.bezierCurveTo(230,-260,300,40,250,200);g.bezierCurveTo(200,290,60,260,40,170);g.closePath();g.fill();g.stroke();
    g.strokeStyle='#C2456A';g.lineWidth=10;g.beginPath();g.moveTo(10,-120);g.lineTo(90,-60);g.lineTo(150,20);g.moveTo(90,-60);g.lineTo(170,-80);g.moveTo(150,20);g.lineTo(200,90);g.moveTo(150,20);g.lineTo(120,130);g.stroke();g.restore()}
  g.fillStyle='#F4EEDC';rr(-24,-340,48,230,20);g.fill();g.stroke();g.restore()}
function vaporDots(cx,cy,R0,t,a,col='rgba(160,220,255,'){for(let i=0;i<40;i++){const ang=hash(i)*7+t*(0.6+hash(i*3)),rr0=R0*Math.sqrt(hash(i*5));const x=cx+Math.cos(ang)*rr0,y=cy+Math.sin(ang)*rr0*0.8;g.fillStyle=col+(a*0.8)+')';g.beginPath();g.arc(x,y,9,0,7);g.fill()}}
function thermo(cx,cy,h,f,col,label){g.save();g.strokeStyle='#111';g.lineWidth=12;g.fillStyle='#fff';rr(cx-40,cy-h,80,h,40);g.fill();g.stroke();g.beginPath();g.arc(cx,cy+30,70,0,7);g.fill();g.stroke();
  g.fillStyle=col;g.beginPath();g.arc(cx,cy+30,52,0,7);g.fill();const hh=(h-30)*clamp(f);rr(cx-22,cy-hh,44,hh+20,22);g.fill();g.restore();if(label)txt(label,cx,cy-h-60,70,{fill:col,sw:14})}
function molecule(x,y,s,a=1){g.save();g.globalAlpha=a;g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=5;g.fillStyle='#FF5A5A';g.beginPath();g.arc(0,0,22,0,7);g.fill();g.stroke();g.fillStyle='#fff';for(const [dx,dy] of [[-22,18],[22,18]]){g.beginPath();g.arc(dx,dy,13,0,7);g.fill();g.stroke()}g.restore()}
function droplet(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#8FD3FF';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(0,-50);g.bezierCurveTo(30,-10,40,10,40,25);g.arc(0,25,40,0,PI);g.bezierCurveTo(-40,10,-30,-10,0,-50);g.fill();g.stroke();g.fillStyle='rgba(255,255,255,0.8)';g.beginPath();g.ellipse(-14,18,8,14,0.4,0,7);g.fill();g.restore()}
function cartoonCloud(x,y,s,a=1){g.save();g.globalAlpha=a;g.translate(x,y);g.scale(s,s);g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.arc(-60,10,50,PI*0.5,PI*1.5);g.arc(-10,-30,60,PI,PI*1.9);g.arc(55,-5,48,PI*1.3,PI*0.5);g.closePath();g.fill();g.stroke();
  g.fillStyle='#111';g.beginPath();g.arc(-20,0,6,0,7);g.arc(20,0,6,0,7);g.fill();g.lineWidth=5;g.beginPath();g.arc(0,12,12,0.2,PI-0.2);g.stroke();g.restore()}
// ---------- opening: standing in the snow, breathing out ----------
const BP=2.0;
const C0={p:[1.4,2.0,5.9],l:[0.25,1.75,0]};
function openScene(t){P.S.add(holder);holder.rotation.order='XYZ';holder.position.set(0,0,0);holder.rotation.set(0,0.45,0);holder.scale.setScalar(1);holder.visible=true;
  const ph=((t%BP)+BP)%BP/BP;guy.pose(idle(t,{armL:[0.45,0.25],armR:[0.45,-0.25],bendL:0.9,bendR:0.9,mouth:ph<0.5?'o':'smile',mouthSize:0.55,headPitch:-0.05,headYaw:0.15,jump:0.008*Math.sin(t*2*PI/BP)}));return ph}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;
  if(t<CU.c1){const ph=openScene(t);const k=ease(seg(t,0.15,CU.c1));parkShot(mix(C0.p,[1.2,1.95,5.3],k),C0.l);stars(t);const [m,f]=mouthScreen(P.cam);puff(m,f,ph*1.4,1.5);snow(t);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHY CAN YOU SEE',W/2,190,92,{sw:17});txt('YOUR BREATH',W/2,305,120,{fill:'#9CDCFF',sw:22});txt('WHEN IT\'S COLD?',W/2,420,92,{fill:'#FFD23F',sw:18});g.restore()}
  else if(t<CU.c2){flash(t,CU.c1,0.15);clear3d();setBG('red');lungs(W/2,860,1.25,t);
    const a1=easeOut(seg(t,3.9,4.4));thermo(W*0.84,1120,380,0.85*a1,'#FF5A5A','37°C');txtA('WARM',W*0.84,1290,56,a1,{fill:'#FFB38A',sw:12});
    const a2=easeOut(seg(t,5.1,5.7));vaporDots(W/2-180,900,160,t,a2);vaporDots(W/2+180,900,160,t+3,a2);
    pill('INVISIBLE WATER VAPOR',W/2,330,60,'#9CDCFF','#111',t,5.1,CU.c2);comic('WARM!',W*0.2,560,90,t,4.1,{life:0.8,rot:-0.12,fill:'#FFB38A'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);P.S.add(holder);holder.position.set(0,0,0);holder.rotation.set(0,PI/2,0);
    const ph=seg(t,7.0,9.2);guy.pose(idle(t,{armL:[0.45,0.25],armR:[0.45,-0.25],bendL:0.9,bendR:0.9,mouth:ph>0&&ph<0.55?'o':'smile',mouthSize:0.8,wide:true,headPitch:-0.08}));
    parkShot([0.5,2.0,5.2],[0.32,1.75,0]);snow(t,40);const [m,f]=mouthScreen(P.cam);puff(m,f,ph,1.6);
    const tf=lerp(0.85,0.12,easeOut(seg(t,7.3,8.4)));thermo(W*0.85,1150,360,tf,tf>0.5?'#FF5A5A':'#5AB8FF',tf>0.5?'37°C':'0°C');
    pill('COLD AIR',W*0.3,330,72,'#5AB8FF','#fff',t,7.3,CU.c3);comic('BRRR',W*0.28,1150,90,t,8.4,{life:0.8,rot:-0.12,fill:'#9CDCFF'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);clear3d();setBG('blue');const cx=W/2,cy=820;g.save();g.strokeStyle='#111';g.lineWidth=16;g.fillStyle='#0E2A5E';g.beginPath();g.arc(cx,cy,400,0,7);g.fill();g.stroke();g.beginPath();g.arc(cx,cy,400,0,7);g.clip();
    const cl=easeOut(seg(t,9.6,11.3));for(let i=0;i<24;i++){const gi=i%6,gx=cx+(gi%3-1)*230,gy=cy+(Math.floor(gi/3)-0.5)*300;const fx=cx+(hash(i)-0.5)*700+Math.sin(t*3+i)*30,fy=cy+(hash(i*3)-0.5)*700+Math.cos(t*2.6+i)*30;
      const ang=i/24*7;molecule(lerp(fx,gx+Math.cos(ang)*40*(i%4),cl),lerp(fy,gy+Math.sin(ang)*40*(i%4),cl),0.9,1-seg(t,11.2,11.5))}
    if(t>11.2)for(let gi=0;gi<6;gi++){const gx=cx+(gi%3-1)*230,gy=cy+(Math.floor(gi/3)-0.5)*300;droplet(gx,gy,1.1*backOut(seg(t,11.2+gi*0.05,11.55+gi*0.05)))}
    g.restore();g.save();g.strokeStyle='#111';g.lineWidth=26;g.lineCap='round';g.beginPath();g.moveTo(cx+290,cy+290);g.lineTo(cx+430,cy+430);g.stroke();g.restore();
    pill('VAPOR → DROPLETS',W/2,330,62,'#FFFFFF','#111',t,9.4,CU.c4);if(t>11.3)txtA('MILLIONS!',W/2,1290,96,easeOut(seg(t,11.3,11.5)),{fill:'#FFD23F',sw:18});comic('POP',W*0.8,560,80,t,11.25,{life:0.6,rot:0.15,fill:'#9CDCFF'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);P.S.add(holder);holder.position.set(0,0,0);holder.rotation.set(0,0.2,0);const ph=seg(t,12.6,14.3);
    guy.pose({armL:[1.9,0.3],armR:[1.9,-0.3],bendL:0.3,bendR:0.3,mouth:ph<0.4?'o':'grin',mouthSize:0.9,wide:true,headPitch:-0.25,blink:BLINK(t),jump:0.02*Math.abs(Math.sin(t*4))});
    const k=ease(seg(t,CU.c4,CU.c5));parkShot([lerp(0.6,0.3,k),lerp(1.6,1.4,k),lerp(6.0,6.8,k)],[0.1,2.2,0]);stars(t);snow(t,40);const [m,f]=mouthScreen(P.cam);puff(m,f,ph*0.7,1.4);
    const cy=lerp(m[1]-120,560,easeOut(seg(t,13.0,14.0)));if(t>12.95)cartoonCloud(W/2,cy,1.6*easeOut(seg(t,12.95,13.6)),1);
    pill('MINI CLOUD',W/2,330,84,'#FFFFFF','#111',t,13.6,CU.c5);comic('WOW',W*0.78,1120,90,t,13.75,{life:0.8,rot:0.12,fill:'#FFD23F'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);clear3d();setBG('teal');const v=lerp(70,30,easeOut(seg(t,14.9,17.2)));const f=(v-20)/60;
    thermo(W*0.3,1170,600,f,v>45?'#FF8A5B':'#5AB8FF',Math.round(v)+'°F');
    const ly=1170-(600-30)*((45-20)/60);g.save();g.setLineDash([24,16]);g.strokeStyle='#FFD23F';g.lineWidth=10;g.beginPath();g.moveTo(W*0.3-90,ly);g.lineTo(W*0.92,ly);g.stroke();g.restore();txt('45°F',W*0.8,ly-55,72,{fill:'#FFD23F',sw:14});txt('≈ 7°C',W*0.8,ly+55,48,{fill:'#fff',sw:10});
    const fx=W*0.72,fy=ly+300;g.save();g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.arc(fx,fy,90,0,7);g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(fx-30,fy-20,10,0,7);g.arc(fx+30,fy-20,10,0,7);g.fill();g.beginPath();g.arc(fx+10,fy+35,16,0,7);g.fill();g.restore();
    if(v<=45)puff([fx+20,fy+35],[fx+200,fy+10],((t-14.9)%1.2)/1.2,0.9);
    pill('BELOW ABOUT',W/2,330,64,'#FFFFFF','#111',t,15.0,CU.c6);if(v<=45.5)comic('PUFF!',W*0.75,620,90,t,16.2,{life:0.8,rot:0.1,fill:'#9CDCFF'})}
  else{const tt=t-TT;const ph=openScene(tt);const k=ease(seg(t,CU.c6,TT-0.15));parkShot(mix([2.2,2.3,7.6],C0.p,k),C0.l);stars(tt);const [m,f]=mouthScreen(P.cam);puff(m,f,ph*1.4,1.5);snow(tt);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
