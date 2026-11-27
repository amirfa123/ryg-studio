// ===== How tall would you have to be to dunk without jumping? (pop culture, #nba) =====
const TT=19.8;
const CU={c1:3.3,c2:7.95,c3:11.72,c4:14.5,c5:18.0};
guy.outfit({snapforward:1,capColor:0x7E5BEF,chain:1});
// ---------- court ----------
const CT={S:new THREE.Scene()};lights(CT.S);CT.cam=new THREE.PerspectiveCamera(30,W/H,0.1,300);
part(CT.S,new THREE.PlaneGeometry(200,200),toon(0x26304A),[0,-0.01,0],[1,1,1],[-PI/2,0,0],0);
part(CT.S,new THREE.PlaneGeometry(16,14),toon(0x2E6BD9),[0,0.002,1],[1,1,1],[-PI/2,0,0],0);
part(CT.S,new THREE.PlaneGeometry(3.6,5.6),toon(0xFF7A2B),[0,0.004,0.6],[1,1,1],[-PI/2,0,0],0);
for(const [w,h,x,z] of [[16,0.1,0,-6],[0.1,14,-8,1],[0.1,14,8,1],[3.6,0.1,0,3.4],[0.1,5.6,-1.8,0.6],[0.1,5.6,1.8,0.6]])part(CT.S,new THREE.PlaneGeometry(w,h),basic(0xffffff),[x,0.006,z],[1,1,1],[-PI/2,0,0],0);
part(CT.S,new THREE.RingGeometry(1.75,1.85,40,1,0,PI),basic(0xffffff),[0,0.007,3.4],[1,1,1],[-PI/2,0,0],0);
part(CT.S,new THREE.RingGeometry(6.0,6.1,60,1,PI*0.08,PI*0.84),basic(0xffffff),[0,0.007,-2.0],[1,1,1],[-PI/2,0,PI],0);
// fence + city
const FT=canvasTex(256,256);{const c=FT.ctx;c.fillStyle='rgba(0,0,0,0)';c.clearRect(0,0,256,256);c.strokeStyle='#9AA3B8';c.lineWidth=4;for(let i=-256;i<512;i+=32){c.beginPath();c.moveTo(i,0);c.lineTo(i+256,256);c.stroke();c.beginPath();c.moveTo(i+256,0);c.lineTo(i,256);c.stroke()}FT.tx.wrapS=FT.tx.wrapT=THREE.RepeatWrapping;FT.tx.repeat.set(12,2)}
part(CT.S,new THREE.PlaneGeometry(40,6),new THREE.MeshBasicMaterial({map:FT.tx,transparent:true}),[0,3,-7.5],[1,1,1],[0,0,0],0);for(let i=-5;i<=5;i++)part(CT.S,cap(0.06,6),toon(0x5A6178),[i*4,3,-7.5]);
for(let i=0;i<40;i++){const w=3+hash(i*3.1)*4,h=6+hash(i*7.3)*20;const b=part(CT.S,new THREE.BoxGeometry(w,h,3),toon([0x3A3360,0x2E2A55,0x463A70][i%3]),[-80+i*4.2,h/2,-30-hash(i*1.7)*12],[1,1,1],[0,0,0],0);
  for(let k=0;k<5;k++)part(CT.S,new THREE.BoxGeometry(0.5,0.5,0.05),basic(hash(i*k+2)<0.5?0xFFE680:0x7FF6FF),[-80+i*4.2+(hash(i+k)-0.5)*w*0.7,2+hash(i*k*3)*(h-3),-28.4-hash(i*1.7)*12],[1,1,1],[0,0,0],0)}
for(const x of [-9,9]){part(CT.S,cap(0.12,9),toon(0x5A6178),[x,4.6,-7]);part(CT.S,new THREE.BoxGeometry(1.4,0.6,0.4),toon(0x5A6178),[x,9.2,-6.8],[1,1,1],[0,0,0],0.01);part(CT.S,new THREE.BoxGeometry(1.2,0.45,0.05),basic(0xFFF6D0),[x,9.2,-6.58],[1,1,1],[0,0,0],0)}
// hoop (rim height 3.65 = "10 ft" in this world)
const RIMY=3.65,RIMZ=-1.55;const HP=new THREE.Group();CT.S.add(HP);
part(HP,cap(0.14,4.6),toon(0x3A3F55),[0,2.3,-3.1]);part(HP,new THREE.BoxGeometry(0.2,0.2,1.0),toon(0x3A3F55),[0,4.3,-2.6],[1,1,1],[0,0,0],0.01);
part(HP,new THREE.BoxGeometry(2.3,1.45,0.08),toon(0xF6F7FB),[0,4.2,-2.08],[1,1,1],[0,0,0],0.012);
for(const [w,h,x,y] of [[0.8,0.05,0,4.42],[0.8,0.05,0,3.88],[0.05,0.56,-0.38,4.15],[0.05,0.56,0.38,4.15]])part(HP,new THREE.BoxGeometry(w,h,0.02),basic(0xFF5A1F),[x,y,-2.03],[1,1,1],[0,0,0],0);
part(HP,new THREE.TorusGeometry(0.4,0.035,10,32),basic(0xFF5A1F),[0,RIMY,RIMZ],[1,1,1],[PI/2,0,0],0);part(HP,new THREE.BoxGeometry(0.1,0.04,0.22),basic(0xFF5A1F),[0,RIMY,-1.98],[1,1,1],[0,0,0],0);
const NET=new THREE.Group();NET.position.set(0,RIMY,RIMZ);HP.add(NET);for(let i=0;i<12;i++){const a=i/12*PI*2;part(NET,cap(0.008,0.5),basic(0xffffff),[Math.cos(a)*0.33,-0.3,Math.sin(a)*0.33],[1,1,1],[Math.sin(a)*0.25,0,-Math.cos(a)*0.25],0)}
part(NET,new THREE.TorusGeometry(0.24,0.01,6,24),basic(0xffffff),[0,-0.55,0],[1,1,1],[PI/2,0,0],0);
// ball
function mkBall(parent){const b=new THREE.Group();parent.add(b);part(b,SPH,toon(0xF07A22),[0,0,0],[0.3,0.3,0.3],[0,0,0],0.012);for(const r of [[PI/2,0,0],[0,0,0],[0,PI/2,0]])part(b,new THREE.TorusGeometry(0.302,0.012,6,32),basic(0x221100),[0,0,0],[1,1,1],r,0);return b}
const HB=mkBall(guy.up);HB.position.set(0,1.08,0.78);
const HANDB=mkBall(guy.arms.R.userData.hd);HANDB.position.set(0,-0.38,0.0);
const WB=mkBall(CT.S);
const CRATE=new THREE.Group();CT.S.add(CRATE);part(CRATE,new THREE.BoxGeometry(1.6,1.75,1.4),toon(0xC98A4A),[0,0.875,0],[1,1,1],[0,0,0],0.015);for(const y of [0.3,0.875,1.45])part(CRATE,new THREE.BoxGeometry(1.64,0.1,1.44),toon(0x9A6430),[0,y,0],[1,1,1],[0,0,0],0);
function balls(h,hand,w){HB.visible=h;HANDB.visible=hand;WB.visible=w}
function court(p,l){setBG('linear-gradient(#0B0D2E 0%,#2A1F5E 55%,#5A2A7A 100%)');CT.cam.position.set(...p);CT.cam.lookAt(...l);r.setClearColor(0,0);r.render(CT.S,CT.cam)}
const v3=new THREE.Vector3();function wpos(o){CT.S.updateMatrixWorld(true);return o.getWorldPosition(new THREE.Vector3())}
// ---------- 2D ----------
function vArrow(x,y0,y1,col,label,lx){g.save();g.strokeStyle='#111';g.lineWidth=16;g.beginPath();g.moveTo(x,y0);g.lineTo(x,y1);g.stroke();g.strokeStyle=col;g.lineWidth=8;g.stroke();
  for(const [y,d] of [[y0,-1],[y1,1]]){g.fillStyle=col;g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(x,y);g.lineTo(x-22,y-d*36);g.lineTo(x+22,y-d*36);g.closePath();g.fill();g.stroke()}g.restore();if(label)txt(label,lx??x,(y0+y1)/2,62,{fill:col,sw:14})}
function person(x,yb,h,col,label,sub,a=1){if(a<=0)return;g.save();g.globalAlpha=a;const s=h/360;g.translate(x,yb);g.fillStyle=col;g.strokeStyle='#111';g.lineWidth=7;
  g.beginPath();g.arc(0,-h+40*s,40*s,0,7);g.fill();g.stroke();rr(-48*s,-h+86*s,96*s,150*s,30*s);g.fill();g.stroke();rr(-40*s,-h+226*s,32*s,134*s,14*s);g.fill();g.stroke();rr(8*s,-h+226*s,32*s,134*s,14*s);g.fill();g.stroke();
  rr(-70*s,-h+92*s,24*s,120*s,12*s);g.fill();g.stroke();rr(46*s,-h+92*s,24*s,120*s,12*s);g.fill();g.stroke();g.restore();txtA(label,x,yb+52,44,a,{fill:'#fff',sw:10});if(sub)txtA(sub,x,yb+100,40,a,{fill:col,sw:10})}
// ---------- opening ----------
const C0={p:[4.6,2.7,10.2],l:[0.2,2.4,-0.4]};
function openScene(t){CT.S.add(holder);holder.position.set(0.7,0,1.3);holder.rotation.set(0,0.3,0);holder.scale.setScalar(1);balls(true,false,false);CRATE.visible=false;
  const b=0.03*Math.sin(t*2*PI/(TT/8));guy.pose({reachL:[0.34,1.08+b,0.62],reachR:[-0.34,1.08+b,0.62],mouth:'o',mouthSize:0.7,blink:BLINK(t),lookY:0.5,headPitch:-0.25,headYaw:-0.15,look:-0.2});HB.position.y=1.08+b}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;CRATE.visible=false;balls(false,false,false);NET.rotation.set(0,0,0);
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.1,CU.c1));court(mix(C0.p,[4.3,2.6,9.4],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('HOW TALL TO',W/2,180,96,{sw:18});txt('DUNK WITHOUT',W/2,295,104,{fill:'#FFD23F',sw:22});txt('JUMPING?',W/2,420,134,{fill:'#FF7A2B',sw:26});g.restore();
    comic('NO JUMP?!',W*0.7,1650,80,t,2.3,{life:1.0,rot:0.08,fill:'#3FF0FF'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);CT.S.add(holder);holder.position.set(-1.5,0,-0.4);holder.rotation.set(0,1.0,0);holder.visible=false;holder.scale.setScalar(1);balls(true,false,false);
    guy.pose({reachL:[0.34,1.08,0.62],reachR:[-0.34,1.08,0.62],mouth:'smile',blink:BLINK(t),lookY:0.4,headPitch:-0.2,look:-0.3});
    const k=ease(seg(t,CU.c1,CU.c2));court([lerp(7.5,7.0,k),2.4,lerp(3.2,2.6,k)],[0,2.25,-1.2]);
    const fl=proj(new THREE.Vector3(0,0,RIMZ),CT.cam),rm=proj(new THREE.Vector3(0,RIMY,RIMZ),CT.cam);const ax=rm[0]-150;
    if(t>3.95){const a=easeOut(seg(t,3.95,4.6));vArrow(ax,fl[1],lerp(fl[1],rm[1],a),'#FFD23F','',0);if(a>0.95){txt('10 FT',ax-10,(fl[1]+rm[1])/2-40,74,{fill:'#FFD23F',sw:16});txt('(3.05 M)',ax-10,(fl[1]+rm[1])/2+30,44,{fill:'#fff',sw:10})}}
    if(t>5.9){const a=pop(t,5.9);const hy=rm[1]-110;g.save();g.translate(rm[0]+30,hy);g.scale(a,a);g.fillStyle='#FFCC2E';g.strokeStyle='#111';g.lineWidth=8;rr(-38,-40,76,90,30);g.fill();g.stroke();for(let i=0;i<4;i++){rr(-36+i*19,-88,16,56,8);g.fill();g.stroke()}g.restore();
      g.save();g.setLineDash([14,10]);g.strokeStyle='#fff';g.lineWidth=5;g.beginPath();g.moveTo(rm[0]-90,rm[1]);g.lineTo(rm[0]+160,rm[1]);g.stroke();g.restore();if(t>6.4)txtA('+6 IN',rm[0]+190,hy-10,64,seg(t,6.4,6.7),{fill:'#5BE37A',sw:14})}
    comic('SWISH',W*0.75,1650,84,t,4.6,{life:0.9,rot:0.1,fill:'#FF7A2B'});if(t>6.9)pill('HAND ABOVE THE RIM',W/2,1650,56,'#5BE37A','#111',t,6.9,CU.c2)}
  else if(t<CU.c3){flash(t,CU.c2,0.15);CT.S.add(holder);holder.position.set(-0.85,0,2.4);holder.rotation.set(0,0.3,0);holder.scale.setScalar(1);balls(false,false,false);
    const up=easeOut(seg(t,8.3,8.8));guy.pose({armL:[0.3,0.1],armR:[lerp(0.3,3.05,up),-0.12*up],bendR:0.05,mouth:'grin',blink:BLINK(t),lookY:0.15*up});
    court([0.6,2.0,10.6],[-0.35,1.85,2.4]);
    const pa=easeOut(seg(t,8.2,8.6));if(pa>0){g.save();g.globalAlpha=pa;g.fillStyle='rgba(10,12,30,0.85)';rr(W*0.5,330,W*0.45,880,40);g.fill();g.strokeStyle='#FFD23F';g.lineWidth=6;g.stroke();g.restore();
      const px=W*0.66,yb=1080,h=480;person(px,yb,h,'#FFCC2E','','',pa);vArrow(W*0.56,yb,yb-h,'#3FF0FF','',0);txtA('HEIGHT',W*0.56+10,yb-h-50,40,pa,{fill:'#3FF0FF',sw:10});
      if(t>9.5){const a=easeOut(seg(t,9.5,10.1));const top=yb-h*1.33;g.save();g.globalAlpha=pa;g.fillStyle='#FFCC2E';g.strokeStyle='#111';g.lineWidth=7;rr(px+48*h/360,lerp(yb-h+92*h/360,top,a),24*h/360,(yb-h+92*h/360)-lerp(yb-h+92*h/360,top,a)+20,12);g.fill();g.stroke();g.restore();
        vArrow(W*0.88,yb,lerp(yb,top,a),'#FFD23F','',0);if(a>0.9)txtA('REACH',W*0.86,top-50,40,1,{fill:'#FFD23F',sw:10})}}
    if(t>10.2)pill('REACH ≈ HEIGHT × 1.33',W/2,1650,58,'#FFD23F','#111',t,10.2,CU.c3);comic('STRETCH!',W*0.5,330,96,t,8.5,{life:1.0,rot:-0.06,fill:'#FF7AC2'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);clear3d();setBG('radial-gradient(circle at 50% 45%,#1E2A5E,#0A0F26 75%)');
    const yb=1200,ft=52;const rimY=yb-10*ft;
    g.fillStyle='#2E6BD9';g.fillRect(0,yb,W,40);g.save();g.setLineDash([22,14]);g.strokeStyle='#FF7A2B';g.lineWidth=8;g.beginPath();g.moveTo(60,rimY);g.lineTo(W-60,rimY);g.stroke();g.restore();txt('RIM 10 FT',190,rimY-40,46,{fill:'#FF7A2B',sw:10});
person(220,yb,5.75*ft,'#FFCC2E','YOU','5\'9"',seg(t,11.9,12.2));person(540,yb,7.58*ft,'#B59CFF','NBA TALLEST','7\'7"',seg(t,12.4,12.7));
    const a3=seg(t,13.2,13.5);person(860,yb,7.9*ft,'#5BE37A','NEEDED','~7\'11"',a3);if(a3>0){const top=yb-7.9*ft*1.33;g.save();g.globalAlpha=a3;g.strokeStyle='#5BE37A';g.lineWidth=10;g.beginPath();g.moveTo(860+60,yb-7.9*ft+40);g.lineTo(860+60,top);g.stroke();g.restore();check(860+60,top-50,0.9*pop(t,13.6))}
    comic('ALMOST 8 FT!',W/2,330,96,t,13.3,{life:1.2,rot:-0.05,fill:'#5BE37A'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);CRATE.visible=true;CRATE.position.set(0,0,-0.55);CT.S.add(holder);holder.position.set(0,1.75,-0.62);holder.rotation.set(0,PI,0);holder.scale.setScalar(1);
    const rel=16.05;const armUp=easeOut(seg(t,14.6,15.3));const held=a=>({armL:[0.3,0.2],armR:[lerp(0.3,2.95,a),0.05],bendR:0.1,mouth:'grin',blink:false,lookY:0.6*a,headPitch:-0.3*a});
    if(t<rel){balls(false,true,false);guy.pose(held(armUp))}
    else{balls(false,true,false);guy.pose(held(1));const p0=wpos(HANDB);balls(false,false,true);const u=t-rel;
      guy.pose({armL:[1.0,0.4],armR:[2.4,-0.3],bendL:0.6,bendR:0.4,mouth:'teeth',blink:false,wide:true,lookY:0.3,jump:0});
      let y;if(u<0.35)y=lerp(p0.y,RIMY-0.6,u/0.35);else{const v=u-0.35;y=Math.max(0.3,RIMY-0.6-v*v*9-v*2);if(y<=0.3){const b=(v-0.62);y=0.3+Math.max(0,1.2*Math.sin(Math.max(0,b)*5)*Math.exp(-b*2))}}
      WB.position.set(lerp(p0.x,0,clamp(u/0.25)),y,lerp(p0.z,RIMZ,clamp(u/0.25))+ (u>0.6?(u-0.6)*0.8:0));WB.rotation.x=u*6;NET.rotation.x=u<0.6?0.25*Math.sin(u*30)*(1-u/0.6):0}
    court([7.6,3.7,6.2],[0,2.75,-1.0]);
    comic('SLAM!',W*0.5,330,130,t,rel,{life:1.0,rot:-0.06,fill:'#FF7A2B'});pill('NO JUMP NEEDED',W/2,520,58,'#5BE37A','#111',t,16.4,CU.c5);pill('TALLEST EVER IN NBA: 7\'7"',W/2,1650,52,'#B59CFF','#111',t,15.0,CU.c5)}
  else{const tt=t-TT;openScene(tt);const k=ease(seg(t,CU.c5,TT-0.1));court(mix([5.0,2.9,11.2],C0.p,k),C0.l);flash(t,CU.c5,0.15)}
  vignette();captions(t)};
