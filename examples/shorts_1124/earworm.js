// ===== Why do songs get stuck in your head? (body/everyday) =====
const TT=18.35;
const CU={c1:2.45,c2:3.9,c3:7.0,c4:9.65,c5:12.35,c6:16.55};
guy.outfit({beanie:1});
const R=scene('room');
// gum bubble on the head (at the mouth)
const BUB=part(guy.head,SPH,toon(0xFF8FC8),[0,-0.19,0.3],[0.1,0.1,0.1],[0,0,0],0.008);BUB.visible=false;
function couch(t,o={},ry=PI){R.S.add(holder);holder.rotation.order='XYZ';holder.position.set(0,0.15,1.55);holder.rotation.set(0,ry,0);holder.scale.setScalar(1);holder.visible=true;guy.pose({...SIT,armL:[0.25,0],armR:[0.25,0],blink:BLINK(t),mouth:'smile',...o})}
function tvEq(t,c1='#FF3DA6',c2='#3FF0FF'){const c=R.tv.ctx,w=640,h=360;c.fillStyle='#12082E';c.fillRect(0,0,w,h);for(let i=0;i<16;i++){const v=0.25+0.7*Math.abs(Math.sin(t*(3+i*0.37)+i));c.fillStyle=i%2?c1:c2;c.fillRect(20+i*38,h-20-v*(h-60),28,v*(h-60))}R.tv.tx.needsUpdate=true}
function roomShot(p,l,bgc='room'){R.cam.position.set(...p);R.cam.lookAt(...l);setBG(bgc);r.setClearColor(0,0);r.render(R.S,R.cam)}
function roomMood(k){R.S.children.filter(c=>c.isLight).forEach(l=>{l.intensity=(l.isHemisphereLight?1.5:2.2)*k})}
// ---------- bedroom (night) ----------
const BR={S:new THREE.Scene()};lights(BR.S);BR.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);BR.S.children.filter(c=>c.isLight).forEach(l=>l.intensity*=0.55);
part(BR.S,new THREE.PlaneGeometry(30,30),toon(0x3B3F6B),[0,0,0],[1,1,1],[-PI/2,0,0],0);part(BR.S,new THREE.PlaneGeometry(30,10),toon(0x23264A),[0,5,-4],[1,1,1],[0,0,0],0);part(BR.S,new THREE.PlaneGeometry(14,10),toon(0x1C1F40),[-4,5,2],[1,1,1],[0,PI/2,0],0);
{const wt=canvasTex(256,256);const c=wt.ctx;c.fillStyle='#0B0D2E';c.fillRect(0,0,256,256);for(let i=0;i<40;i++){c.fillStyle='#fff';c.fillRect(hash(i)*256,hash(i*3)*256,2,2)}c.fillStyle='#FFF2B0';c.beginPath();c.arc(170,80,36,0,7);c.fill();c.fillStyle='#0B0D2E';c.beginPath();c.arc(185,70,32,0,7);c.fill();
  part(BR.S,new THREE.PlaneGeometry(1.8,1.8),new THREE.MeshBasicMaterial({map:wt.tx}),[-3.98,2.6,-1.2],[1,1,1],[0,PI/2,0],0);part(BR.S,new THREE.BoxGeometry(0.1,0.12,2.0),toon(0xEDE2CC),[-3.95,1.65,-1.2],[1,1,1],[0,0,0],0.006)}
const BED=new THREE.Group();BED.position.set(0,0,0);BR.S.add(BED);
part(BED,new THREE.BoxGeometry(1.8,0.35,2.7),toon(0x6B4426),[0,0.2,-0.95],[1,1,1],[0,0,0],0.014);part(BED,new THREE.BoxGeometry(1.7,0.25,2.6),toon(0xF4F4F8),[0,0.5,-0.95],[1,1,1],[0,0,0],0.012);
part(BED,new THREE.BoxGeometry(1.9,1.3,0.15),toon(0x6B4426),[0,0.65,-2.35],[1,1,1],[0,0,0],0.014);part(BED,SPH,toon(0xFFFFFF),[0,0.72,-2.0],[0.55,0.13,0.3],[0,0,0],0.01);
part(BED,new THREE.BoxGeometry(1.78,0.6,1.3),toon(0x7B5CFF),[0,0.92,0.0],[1,1,1],[0,0,0],0.012);part(BED,new THREE.BoxGeometry(1.8,0.1,0.2),toon(0xFFFFFF),[0,1.2,-0.62],[1,1,1],[0,0,0],0);
const NS=new THREE.Group();NS.position.set(1.4,0,-2.0);BR.S.add(NS);part(NS,new THREE.BoxGeometry(0.6,0.7,0.6),toon(0x6B4426),[0,0.35,0],[1,1,1],[0,0,0],0.01);part(NS,new THREE.CylinderGeometry(0.12,0.2,0.3,16),basic(0xFFE7A0),[0,0.95,0],[1,1,1],[0,0,0],0);part(NS,cap(0.03,0.2),toon(0x333333),[0,0.75,0]);
function inBed(t,o={}){BR.S.add(holder);holder.rotation.order='XYZ';holder.position.set(0,0.98,0.35);holder.rotation.set(-PI/2,0,0);holder.scale.setScalar(1);holder.visible=true;guy.pose({armL:[0.15,0],armR:[0.15,0],mouth:'o',mouthSize:0.45,wide:true,blink:false,...o})}
// ---------- 2D helpers ----------
function note(x,y,s,col,rot=0){g.save();g.translate(x,y);g.rotate(rot);g.scale(s,s);g.fillStyle=col;g.strokeStyle='#111';g.lineWidth=5;g.beginPath();g.ellipse(-14,22,20,14,-0.4,0,7);g.fill();g.stroke();g.beginPath();g.ellipse(46,10,20,14,-0.4,0,7);g.fill();g.stroke();
  g.lineWidth=9;g.beginPath();g.moveTo(4,20);g.lineTo(4,-52);g.lineTo(64,-64);g.lineTo(64,8);g.stroke();g.strokeStyle=col;g.lineWidth=4;g.beginPath();g.moveTo(4,20);g.lineTo(4,-52);g.lineTo(64,-64);g.lineTo(64,8);g.stroke();g.restore()}
function notesAround(x,y,t,n=5,R0=170){for(let i=0;i<n;i++){const a=t*1.6+i/n*PI*2;note(x+Math.cos(a)*R0,y+Math.sin(a)*R0*0.45-20*Math.sin(t*4+i),0.9,['#FF3DA6','#3FF0FF','#FFD23F','#5BE37A','#B59CFF'][i%5],0.2*Math.sin(t*3+i))}}
function worm(x,y,t,s,ang){g.save();g.translate(x,y);g.rotate(ang);for(let i=7;i>=0;i--){const px=-i*34*s,py=Math.sin(t*10-i*0.9)*14*s;g.fillStyle=i%2?'#FF8FB1':'#FF6F9F';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.arc(px,py,(30-i*1.2)*s,0,7);g.fill();g.stroke()}
  g.fillStyle='#fff';for(const dy of [-10,10]){g.beginPath();g.arc(12*s,dy*s-6*s,9*s,0,7);g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(15*s,dy*s-6*s,4*s,0,7);g.fill();g.fillStyle='#fff'}
  g.strokeStyle='#22222C';g.lineWidth=8*s;g.beginPath();g.arc(0,-6*s,34*s,PI*1.1,PI*1.9);g.stroke();for(const sx of [-1,1]){g.fillStyle='#22222C';g.beginPath();g.ellipse(sx*30*s,4*s,9*s,14*s,0,0,7);g.fill()}g.restore()}
function earDraw(cx,cy,S){g.save();g.translate(cx,cy);g.scale(S,S);g.fillStyle='#F4C9A8';g.strokeStyle='#111';g.lineWidth=12;g.beginPath();g.moveTo(-40,-260);g.bezierCurveTo(200,-300,260,-40,150,80);g.bezierCurveTo(90,160,120,260,10,280);g.bezierCurveTo(-90,290,-110,180,-60,140);g.bezierCurveTo(-140,40,-170,-220,-40,-260);g.fill();g.stroke();
  g.fillStyle='#E8AE8A';g.beginPath();g.moveTo(-20,-180);g.bezierCurveTo(120,-200,150,-40,80,30);g.bezierCurveTo(40,80,20,120,-20,110);g.bezierCurveTo(-80,40,-90,-150,-20,-180);g.fill();g.lineWidth=8;g.stroke();
  g.fillStyle='#5A2A2A';g.beginPath();g.ellipse(-10,20,34,46,0.2,0,7);g.fill();g.stroke();g.restore()}
function songBar(x,y,w,t,chunkA,lift){panel(x,y,w+80,170,'rgba(10,12,25,0.88)','#3FF0FF',36);txt('0:00',x-w/2+10,y+55,30,{stroke:0,fill:'#B8C0D8',align:'left'});txt('3:30',x+w/2-10,y+55,30,{stroke:0,fill:'#B8C0D8',align:'right'});
  for(let i=0;i<60;i++){const bx=x-w/2+i*(w/60),hh=12+40*Math.abs(Math.sin(i*1.3)*Math.cos(i*0.37));const inC=i>=26&&i<31;g.fillStyle=inC?(lift>0?'rgba(255,210,63,0.25)':'#FFD23F'):'#3FF0FF';g.fillRect(bx,y-hh/2-12,w/60-4,hh)}
  const cx=x-w/2+26*(w/60),cw=5*(w/60);g.strokeStyle='#FFD23F';g.lineWidth=6;g.globalAlpha=chunkA;g.strokeRect(cx-6,y-50,cw+2,80);g.globalAlpha=1;return [cx+cw/2,y-12]}
// ---------- opening: vibing on the couch ----------
const C0={p:[3.9,2.3,-0.7],l:[0.1,1.4,1.55]};
function openScene(t){roomMood(1);BUB.visible=false;tvEq(t);const b=Math.sin(t*2*PI/0.6);couch(t,{headPitch:0.12*b,headRoll:0.04*Math.sin(t*2*PI/1.2),mouth:'grin',armL:[0.35+0.08*b,0],armR:[0.35-0.08*b,0]},PI-0.55)}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;BUB.visible=false;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.2,CU.c1));roomShot(mix(C0.p,[3.6,2.2,-0.4],k),C0.l);const [hx,hy]=proj(new THREE.Vector3(0,2.35,1.55),R.cam);notesAround(hx,hy,t);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHY DO SONGS',W/2,190,90,{sw:17});txt('GET STUCK IN',W/2,295,90,{sw:17});txt('YOUR HEAD?',W/2,415,120,{fill:'#FF7AC2',sw:22});g.restore()}
  else if(t<CU.c2){flash(t,CU.c1,0.15);clear3d();g.fillStyle='#FFB3CF';g.fillRect(0,0,W,H);g.fillStyle='#FF9DC0';for(let i=0;i<8;i++){g.beginPath();g.arc(hash(i)*W,hash(i*3)*H,80+hash(i*5)*120,0,7);g.fill()}
    earDraw(W/2+60,880,1.5);const f=easeOut(seg(t,2.6,3.6));const wx=lerp(-160,W/2+20,f),wy=lerp(1300,920,f);worm(wx,wy,t,1.3,lerp(-0.5,-0.2,f));
    notesAround(wx-120,wy-140,t,3,110);pill('EARWORM',W/2,330,96,'#FF3DA6','#fff',t,2.75,CU.c2);comic('WIGGLE',W*0.25,1150,70,t,3.1,{life:0.7,rot:-0.12,fill:'#FFD23F'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);clear3d();g.fillStyle='#2A1848';g.fillRect(0,0,W,H);
    const lit=Math.floor(seg(t,4.3,5.0)*9+0.0001);for(let i=0;i<10;i++){const row=i<5?0:1,col=i%5;const x=150+col*195,y=740+row*330+5*Math.sin(t*5+i);const on=i<lit;silhouette(x,y,0.82,on?'#FFD23F':'#5A4A7A');if(on)note(x-30,y-170,0.75,['#FF3DA6','#3FF0FF','#5BE37A'][i%3],0.25*Math.sin(t*4+i))}
    if(t>5.05)txt('?',150+4*195,640+330,90,{fill:'#B8B0D0',sw:14});
    txtA('9 IN 10',W/2,330,150,easeOut(seg(t,4.3,4.6)),{fill:'#FFD23F',sw:26});pill('EVERY WEEK',W/2,1290,72,'#3FF0FF','#111',t,5.95,CU.c3)}
  else if(t<CU.c4){flash(t,CU.c3,0.15);const C=scene('city');C.mood('day');C.car.c.visible=false;C.cop.c.visible=false;C.S.add(holder);const x=lerp(-3,0.6,seg(t,CU.c3,CU.c4));holder.position.set(x,0.18,-3.6);holder.rotation.set(0,PI/2-0.3,0);
    guy.pose(walk(t,7,{mouth:t>8.3?'o':'smile',mouthSize:0.6,headPitch:-0.05}));C.shot([x+2.4,2.5,7.0],[x+0.4,1.5,-3.6]);
    const lift=easeOut(seg(t,8.3,9.1));const [sx,sy]=songBar(W/2,330,820,t,easeOut(seg(t,7.9,8.2)),lift);const [hx,hy]=proj(new THREE.Vector3(x,2.55,-3.6),C.cam);
    if(t>7.9){const px=lerp(sx,hx,lift),py=lerp(sy,hy-120,lift);g.save();g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=6;rr(px-70,py-40,140,80,18);g.fill();g.stroke();g.restore();txt('3 SEC',px,py,40,{stroke:0,fill:'#111'})}
    if(lift>=1){g.save();g.globalAlpha=0.9;g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=6;for(const [dx,dy,r0] of [[-60,40,14],[-90,80,9]]){g.beginPath();g.arc(hx+dx,hy+dy-20,r0,0,7);g.fill();g.stroke()}g.restore()}
    comic('CATCHY!',W*0.75,1130,90,t,8.4,{life:0.9,rot:0.12,fill:'#FF7AC2'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);inBed(t,{look:0.6*Math.sin(t*2*PI/0.8),lookY:0.3});BR.cam.position.set(3.4,6.4,3.6);BR.cam.lookAt(0,1.0,-0.7);setBG('#141633');r.setClearColor(0,0);r.render(BR.S,BR.cam);
    const [hx,hy]=proj(new THREE.Vector3(0,1.5,-1.55),BR.cam);const cx=hx,cy=hy-330;g.save();g.strokeStyle='#FFD23F';g.lineWidth=14;g.setLineDash([30,20]);g.lineDashOffset=-t*200;g.beginPath();g.ellipse(cx,cy,230,110,0,0,7);g.stroke();g.restore();
    const a=t*5;const nx=cx+Math.cos(a)*230,ny=cy+Math.sin(a)*110;g.save();g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=6;rr(nx-60,ny-34,120,68,16);g.fill();g.stroke();g.restore();note(nx-22,ny+6,0.5,'#FF3DA6',0);
    const n=Math.floor(1+Math.pow(seg(t,9.9,12.2),1.6)*98);panel(W/2,330,640,170,'rgba(10,12,25,0.88)','#FFD23F',36);txt('REPLAY #'+n,W/2,330,84,{stroke:0,fill:'#FFD23F'});
    pill('UNFINISHED LOOP',W/2,560,58,'#FF3DA6','#fff',t,10.9,CU.c5);comic('AGAIN?!',W*0.24,1180,84,t,11.7,{life:0.7,rot:-0.12,fill:'#FFD23F'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);roomMood(1.05);tvEq(t,'#5BE37A','#FFD23F');const chew=t>13.55&&t<14.6;const bs=t<14.6?0:(t<15.85?0.04+0.13*easeOut(seg(t,14.6,15.8)):0);
    couch(t,{mouth:chew?(Math.sin(t*2*PI/0.33)>0?'o':'smile'):(bs>0?'o':'smile'),mouthSize:0.35,blink:BLINK(t),headPitch:-0.05,wide:t>15.85&&t<16.3});if(bs>0){BUB.visible=true;BUB.scale.setScalar(bs)}
    roomShot([1.7,2.1,-2.0],[0.05,1.55,1.55]);
    pill('THE WEIRD FIX?',W/2,330,72,'#FFFFFF','#111',t,12.4,13.55);pill('CHEWING GUM',W/2,330,80,'#FF8FC8','#111',t,13.6,CU.c6);
    if(t>14.5){const a=easeOut(seg(t,14.5,14.8));g.save();g.globalAlpha=a;g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.ellipse(W*0.27,620,170,110,0,0,7);g.fill();g.stroke();note(W*0.27-40,630,0.9,'#B59CFF',0);
      if(t>15.1){g.strokeStyle='#FF4A4A';g.lineWidth=18;g.beginPath();g.moveTo(W*0.27-110,520);g.lineTo(W*0.27+110,720);g.stroke()}g.restore();pill('INNER VOICE: BUSY',W/2,470,50,'#5BE37A','#111',t,15.2,CU.c6)}
    if(t>15.85&&t<16.4){const d=t-15.85;g.save();g.globalAlpha=1-d/0.55;for(let i=0;i<12;i++){const a=i/12*PI*2;g.fillStyle='#FF8FC8';g.beginPath();g.arc(W/2+Math.cos(a)*(60+700*d),900+Math.sin(a)*(60+700*d),26,0,7);g.fill()}g.restore()}
    comic('POP!',W*0.7,820,120,t,15.85,{life:0.7,rot:0.12,fill:'#FF8FC8'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.2));roomShot(mix([2.6,2.0,-1.2],C0.p,k),C0.l);const [hx,hy]=proj(new THREE.Vector3(0,2.35,1.55),R.cam);notesAround(hx,hy,t-TT);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
