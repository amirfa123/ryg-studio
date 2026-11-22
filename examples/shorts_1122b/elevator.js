// ===== What would happen if you jumped in a falling elevator? (crazy what-if) =====
const TT=22.25;
const CU={c1:4.45,c2:7.5,c3:11.8,c4:14.7,c5:15.8,c6:20.52};
guy.outfit({headphones:1});
const EBG='radial-gradient(circle at 50% 40%,#2E3A52,#0E1220 80%)';
// ---- elevator interior ----
const E={S:new THREE.Scene()};lights(E.S);E.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);
E.shot=(p,l)=>{E.cam.position.set(...p);E.cam.lookAt(...l);setBG(EBG);r.setClearColor(0,0);r.render(E.S,E.cam)};
const STEEL=toon(0x9FB0C8),STEEL2=toon(0x7D8DA6),DARK=toon(0x2A2F3E);
part(E.S,new THREE.BoxGeometry(2.8,0.1,2.6),toon(0x3B3F4E),[0,-0.05,0],[1,1,1],[0,0,0],0);
for(let i=0;i<6;i++)part(E.S,new THREE.PlaneGeometry(2.8,0.03),toon(0x50556A),[0,0.005,-1.2+i*0.48],[1,1,1],[-PI/2,0,0],0);
part(E.S,new THREE.BoxGeometry(2.8,3.0,0.1),STEEL,[0,1.5,-1.3],[1,1,1],[0,0,0],0);
for(const x of [-1.4,1.4])part(E.S,new THREE.BoxGeometry(0.1,3.0,2.6),STEEL2,[x,1.5,0],[1,1,1],[0,0,0],0);
for(let i=0;i<3;i++)part(E.S,new THREE.BoxGeometry(0.02,2.6,0.02),toon(0xC9D4E4),[-0.9+i*0.9,1.5,-1.24],[1,1,1],[0,0,0],0);
part(E.S,new THREE.BoxGeometry(2.8,0.1,2.6),toon(0xD8DEE8),[0,3.0,0],[1,1,1],[0,0,0],0);part(E.S,new THREE.BoxGeometry(1.4,0.04,1.0),basic(0xFFF6D8),[0,2.94,0],[1,1,1],[0,0,0],0);
part(E.S,cap(0.04,2.4),toon(0xE8C46A),[0,1.0,-1.18],[1,1,1],[0,0,PI/2],0.006);
// button panel on right wall
const BP=new THREE.Group();BP.position.set(1.33,1.4,-0.5);BP.rotation.y=-PI/2;E.S.add(BP);part(BP,new THREE.BoxGeometry(0.4,0.9,0.04),DARK,[0,0,0],[1,1,1],[0,0,0],0.006);
const BTN=[];for(let i=0;i<10;i++){const m=basic(i===9?0xFFB347:0xEDEDED);BTN.push(m);part(BP,new THREE.CylinderGeometry(0.035,0.035,0.03,14),m,[(i%2?0.08:-0.08),-0.34+Math.floor(i/2)*0.16,0.03],[1,1,1],[PI/2,0,0],0)}
// floor indicator
const IND=canvasTex(256,128);part(E.S,new THREE.PlaneGeometry(0.7,0.35),new THREE.MeshBasicMaterial({map:IND.tx}),[0,2.6,-1.24],[1,1,1],[0,0,0],0);
function indDraw(n,arrowDown){const c=IND.ctx;c.fillStyle='#111';c.fillRect(0,0,256,128);c.fillStyle='#FFB347';c.font='900 92px Inter';c.textAlign='center';c.textBaseline='middle';c.fillText(String(n),150,68);
  c.beginPath();if(arrowDown){c.moveTo(40,40);c.lineTo(80,40);c.lineTo(60,90)}else{c.moveTo(40,90);c.lineTo(80,90);c.lineTo(60,40)}c.fill();IND.tx.needsUpdate=true}
// floaty objects
const CAN=new THREE.Group();E.S.add(CAN);part(CAN,new THREE.CylinderGeometry(0.07,0.07,0.24,16),toon(0xFF3D7F),[0,0,0],[1,1,1],[0,0,0],0.006);part(CAN,new THREE.CylinderGeometry(0.072,0.072,0.03,16),toon(0xDDDDDD),[0,0.12,0],[1,1,1],[0,0,0],0);
const PHN=new THREE.Group();E.S.add(PHN);part(PHN,new THREE.BoxGeometry(0.16,0.3,0.03),toon(0x22222C),[0,0,0],[1,1,1],[0,0,0],0.006);part(PHN,new THREE.PlaneGeometry(0.13,0.25),basic(0x3FF0FF),[0,0,0.017],[1,1,1],[0,0,0],0);
const BAG=new THREE.Group();E.S.add(BAG);part(BAG,new THREE.BoxGeometry(0.4,0.3,0.2),toon(0xFFD23F),[0,0,0],[1,1,1],[0,0,0],0.01);part(BAG,new THREE.TorusGeometry(0.1,0.02,8,16,PI),toon(0x8C5E36),[0,0.15,0],[1,1,1],[0,0,0],0);
function restObjs(){CAN.position.set(-1.0,0.12,0.4);CAN.rotation.set(0,0,0);PHN.position.set(0.9,0.02,0.5);PHN.rotation.set(-PI/2,0,0.4);BAG.position.set(-0.85,0.15,-0.6);BAG.rotation.set(0,0.3,0)}
// ---- shaft (outside view) ----
const SH={S:new THREE.Scene()};lights(SH.S);SH.cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);
SH.shot=(p,l)=>{SH.cam.position.set(...p);SH.cam.lookAt(...l);setBG('linear-gradient(#0B0F1E,#1C2236 60%,#2A3350)');r.setClearColor(0,0);r.render(SH.S,SH.cam)};
part(SH.S,new THREE.BoxGeometry(5.0,60,0.2),toon(0x3A4258),[0,10,-2.2],[1,1,1],[0,0,0],0);
for(let i=-6;i<12;i++)part(SH.S,new THREE.BoxGeometry(5.0,0.15,0.3),toon(0x4E5876),[0,i*3.2,-2.05],[1,1,1],[0,0,0],0);
for(const x of [-1.85,1.85])part(SH.S,new THREE.BoxGeometry(0.18,60,0.3),toon(0xC9D4E4),[x,10,-0.2],[1,1,1],[0,0,0],0.006);
const CARB=new THREE.Group();SH.S.add(CARB);
part(CARB,new THREE.BoxGeometry(3.0,0.25,2.6),STEEL2,[0,-0.12,0],[1,1,1],[0,0,0],0.01);part(CARB,new THREE.BoxGeometry(3.0,0.25,2.6),STEEL2,[0,3.1,0],[1,1,1],[0,0,0],0.01);
part(CARB,new THREE.BoxGeometry(3.0,3.0,0.1),STEEL,[0,1.5,-1.3],[1,1,1],[0,0,0],0.01);for(const x of [-1.5,1.5])part(CARB,new THREE.BoxGeometry(0.1,3.2,2.6),STEEL2,[x,1.5,0],[1,1,1],[0,0,0],0.01);
for(let k=0;k<4;k++)part(CARB,cap(0.035,40),toon(0x1B1B26),[-0.45+k*0.3,23.2,0],[1,1,1],[0,0,0],0);part(CARB,new THREE.BoxGeometry(1.4,0.3,0.5),DARK,[0,3.35,0],[1,1,1],[0,0,0],0.01);
const SHOES=[];for(const s of [-1,1]){const b=new THREE.Group();b.position.set(s*1.62,0.2,-0.2);CARB.add(b);part(b,new THREE.BoxGeometry(0.22,0.5,0.5),toon(0xFF4A4A),[0,0,0],[1,1,1],[0,0,0],0.008);SHOES.push(b)}
// ---- 2D ----
function cutaway(t,f){// f 0..1 fall progress
  const x0=170,x1=560,top=430,bot=1300,fh=(bot-top)/10;g.save();g.fillStyle='#1A2033';g.fillRect(0,0,W,H);
  g.fillStyle='#7FC7FF';g.strokeStyle='#111';g.lineWidth=8;g.fillRect(x0,top,x1-x0,bot-top);g.strokeRect(x0,top,x1-x0,bot-top);
  for(let i=0;i<10;i++){const y=top+i*fh;g.beginPath();g.moveTo(x0,y);g.lineTo(x1,y);g.stroke();txt(String(10-i),x0-40,y+fh/2,40,{sw:8})}
  const sx=290,sw=150;g.fillStyle='#2A2F3E';g.fillRect(sx,top,sw,bot-top);g.strokeRect(sx,top,sw,bot-top);
  g.fillStyle='#5E8A5A';g.fillRect(0,bot,W,40);g.beginPath();g.moveTo(0,bot);g.lineTo(W,bot);g.stroke();
  const cy=lerp(top+4,bot-fh+4,f*f);g.fillStyle='#FFD23F';rr(sx+12,cy,sw-24,fh-8,10);g.fill();g.stroke();txt('YOU',sx+sw/2,cy+fh/2,34,{stroke:0,fill:'#111'});
  if(f<1){g.strokeStyle='rgba(255,255,255,0.7)';g.lineWidth=6;for(let k=0;k<3;k++){const xx=sx+40+k*35;g.beginPath();g.moveTo(xx,cy-20-k*10);g.lineTo(xx,cy-80-k*25);g.stroke()}}
  g.restore();const v=85*f;panel(820,780,400,300,'rgba(10,12,25,0.9)','#FF4A4A',34);txt(Math.round(v)+'',820,760,140,{stroke:0,fill:'#FF4A4A'});txt('KM/H',820,870,46,{stroke:0,fill:'#fff'});
  txt('10 FLOORS',820,520,58,{fill:'#FFD23F',sw:12});txt('≈ 30 M',820,590,48,{sw:10})}
function bars(t,t0){const rows=[['FALL','85 KM/H','#FF4A4A',85,0],['YOUR JUMP','−11','#5BE37A',11,0.55],['YOU STILL HIT','74 KM/H','#FFB347',74,1.6]];
  const a=easeOut(seg(t,t0,t0+0.3));if(a<=0)return;g.save();g.globalAlpha=a;panel(W/2,330,960,330,'rgba(10,12,25,0.9)','#FFB347',30);
  rows.forEach(([n,v,c,val,d],i)=>{const y=225+i*95,k=easeOut(seg(t,t0+d,t0+d+0.45));if(k<=0)return;txt(n,110,y,40,{stroke:0,fill:c,align:'left'});g.fillStyle='rgba(255,255,255,0.12)';rr(470,y-18,300,36,18);g.fill();g.fillStyle=c;rr(470,y-18,Math.max(36,300*val/85*k),36,18);g.fill();txt(v,990,y,40,{stroke:0,fill:'#fff',align:'right'})});g.restore()}
function stars(x,y,t){for(let i=0;i<4;i++){const a=t*4+i*PI/2;const sx=x+Math.cos(a)*110,sy=y+Math.sin(a)*30;g.save();g.translate(sx,sy);g.rotate(t*3);g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=5;g.beginPath();for(let k=0;k<10;k++){const rr_=k%2?12:28,b=k/10*PI*2;g.lineTo(Math.cos(b)*rr_,Math.sin(b)*rr_)}g.closePath();g.fill();g.stroke();g.restore()}}
function sparks(x,y,t,t0){const d=t-t0;if(d<0||d>0.9)return;g.save();for(let i=0;i<14;i++){const a=hash(i*3.3)*PI*2,sp=200+hash(i*7)*400;const px=x+Math.cos(a)*sp*d,py=y+Math.sin(a)*sp*d+300*d*d;g.strokeStyle=`rgba(255,${180+hash(i)*70|0},60,${1-d/0.9})`;g.lineWidth=6;g.beginPath();g.moveTo(px,py);g.lineTo(px-Math.cos(a)*30,py-Math.sin(a)*30);g.stroke()}g.restore()}
function notes(t){for(let k=0;k<2;k++){const ph=((t/2.2+k*0.5)%1+1)%1;const x=W*0.68+60*Math.sin(ph*PI*2+k),y=1050-ph*380;g.save();g.globalAlpha=Math.sin(ph*PI);txt(k?'♫':'♪',x,y,90,{fill:'#9FE8FF',sw:12});g.restore()}}
// ---- opening: inside the elevator, vibing to elevator music ----
const C0={p:[0.3,1.75,10.2],l:[0,1.4,0]};
function openScene(t){E.S.add(holder);holder.position.set(0.1,0,0);holder.rotation.set(0,0,0);holder.scale.setScalar(1);restObjs();indDraw(10,false);
  guy.pose({armL:[0.3,0],armR:[0.3,0],mouth:'smile',blink:BLINK(t),headRoll:0.09*Math.sin(t*2*PI/1.1125),jump:0.015*Math.abs(Math.sin(t*2*PI/2.225)),look:0.15*Math.sin(t*2*PI/4.45)})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;SHOES.forEach(b=>b.position.x=Math.sign(b.position.x)*1.62);
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));E.shot(mix(C0.p,[0.2,1.7,9.4],k),C0.l);notes(t);
    if(t>3.0){const s=0.04*Math.sin(t*60)*seg(t,3.0,3.3);E.shot(mix(C0.p,[0.2+s,1.7+s,9.4],k),C0.l)}
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT IF YOU JUMPED',W/2,200,76,{sw:15});txt('IN A FALLING',W/2,300,84,{sw:16});txt('ELEVATOR?',W/2,430,128,{fill:'#FFB347',sw:24});g.restore();
    comic('SNAP!',W*0.24,1150,90,t,3.0,{life:1.0,rot:-0.12,fill:'#FF4A4A'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);const u=t-CU.c1;E.S.add(holder);const fl=Math.min(1,u/0.8);holder.position.set(0.1,0.1+0.5*easeOut(fl)+0.05*Math.sin(u*2.2),0);holder.rotation.set(0.08*Math.sin(u*1.3),0.3*Math.sin(u*0.8),0.12*Math.sin(u*1.1));
    guy.pose({armL:[1.4+0.4*Math.sin(u*3),0.4],armR:[1.4+0.4*Math.sin(u*3+1.6),-0.4],legL:[0.4+0.3*Math.sin(u*2.4),0.5,0],legR:[0.1+0.3*Math.sin(u*2.4+1),0.6,0],mouth:'grin',wide:true,blink:false,look:0.3*Math.sin(u*1.5)});
    CAN.position.set(-0.8,0.4+0.8*easeOut(fl)+0.1*Math.sin(u*2),0.6);CAN.rotation.set(u*1.5,u,u*0.7);PHN.position.set(0.85,0.3+1.4*easeOut(fl),0.6);PHN.rotation.set(u*0.9,u*1.4,0.3);BAG.position.set(-0.85,0.2+1.6*easeOut(fl),-0.5);BAG.rotation.set(u*0.6,0.3+u*0.4,u*0.5);
    indDraw(Math.max(1,10-Math.floor(u*1.6)),true);E.shot([0.2,2.4,10.8],[0,1.95,0]);
    pill('ZERO GRAVITY',W/2,330,64,'#9FE8FF','#111',t,5.6,CU.c2);comic('WHEEE',W*0.75,640,80,t,4.8,{life:1.0,rot:0.1,fill:'#FFD23F'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);clear3d();const f=ease(seg(t,7.9,11.0))*0+seg(t,7.9,11.0);cutaway(t,clamp(f));comic('WHAM!',W*0.4,1230,100,t,11.0,{life:0.8,rot:-0.1,fill:'#FF4A4A'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);const u=t-CU.c3;E.S.add(holder);holder.position.set(0.1,0,0);holder.rotation.set(0,0,0);restObjs();indDraw(1,true);
    const crouch=seg(t,12.1,12.35)*(1-seg(t,12.35,12.45)),air=Math.sin(PI*seg(t,12.4,13.2));
    guy.pose({armL:air>0?[2.8,0.3]:[0.5-crouch*0.3,0],armR:air>0?[2.8,-0.3]:[0.5-crouch*0.3,0],legL:[crouch*0.6,crouch*0.9,0],legR:[crouch*0.6,crouch*0.9,0],jump:0.7*air-0.15*crouch,mouth:air>0?'teeth':'o',mouthSize:0.7,wide:true,blink:false});
    E.shot([0.25,2.0,10.8],[0,1.75,0]);bars(t,12.0);comic('JUMP!',W*0.25,1130,90,t,12.4,{life:0.8,rot:-0.1,fill:'#5BE37A'})}
  else if(t<CU.c5){flash(t,CU.c4,0.3);const u=t-CU.c4;E.S.add(holder);holder.position.set(0.1,0,0);holder.rotation.set(0,0,0.1*Math.sin(u*7)*(1-u));restObjs();CAN.position.set(-0.5,0.07,0.8);CAN.rotation.set(0,0,PI/2);
    guy.pose({armL:[0.6,0.4],armR:[0.6,-0.4],legL:[0.2,0.3,0],legR:[-0.1,0.3,0],mouth:'o',mouthSize:1.0,wide:true,blink:false,headRoll:0.15*Math.sin(u*9),look:0.4*Math.sin(u*5)});
    const s=0.15*Math.exp(-u*4)*Math.sin(u*70);E.shot([0.2+s,1.8+s,9.6],[0,1.4,0]);stars(W/2,560,t);comic('OUCH!',W/2,330,130,t,14.75,{life:1.0,rot:-0.06,fill:'#FF4A4A'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);const u=t-CU.c5;const stop=18.9;const y=t<stop?lerp(8,0.6,seg(t,CU.c5,stop)):0.6-0.15*Math.exp(-(t-stop)*5)*Math.sin((t-stop)*25);CARB.position.set(0,y,0);
    const clamp_=seg(t,18.75,18.95);SHOES.forEach(b=>b.position.x=Math.sign(b.position.x)*lerp(1.62,1.72,clamp_));
    SH.S.add(holder);holder.position.set(0.1,y+0.0,0.2);holder.rotation.set(0,0,0);holder.scale.setScalar(1);
    const happy=t>19.0;guy.pose({armL:happy?[2.7,0.3]:[0.4,0.2],armR:happy?[2.7,-0.3]:[0.4,-0.2],mouth:happy?'grin':'o',mouthSize:0.6,wide:!happy,blink:BLINK(t),lookY:happy?0:0.5,headPitch:happy?0:-0.25,jump:happy?0.06*Math.abs(Math.sin(t*7)):0});
    SH.shot([0.8,y+3.6,12.8],[0,y+2.7,0]);
    if(t>16.9&&t<18.7){const a=easeOut(seg(t,16.9,17.3));g.save();g.globalAlpha=a;const [cx,cy]=proj(new THREE.Vector3(0.2,y+4.6,0),SH.cam);arrow(cx+280,cy+170,cx+70,cy+20,'#FFD23F',22);txt('4 CABLES',cx+270,cy+240,56,{fill:'#FFD23F',sw:12});g.restore()}
    const [bx,by]=proj(new THREE.Vector3(1.72,y+0.2,0),SH.cam);const [bx2,]=proj(new THREE.Vector3(-1.72,y+0.2,0),SH.cam);sparks(bx,by,t,18.85);sparks(bx2,by,t,18.85);
    pill('SEVERAL CABLES',W/2,330,60,'#FFD23F','#111',t,16.9,18.7);pill('SAFETY BRAKES',W/2,330,64,'#FF4A4A','#fff',t,18.8,CU.c6);comic('CLAMP!',W*0.72,1150,84,t,18.9,{life:0.9,rot:0.1,fill:'#FF4A4A'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.25));E.shot(mix([0.6,2.4,12.5],C0.p,k),C0.l);notes(t-TT);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
