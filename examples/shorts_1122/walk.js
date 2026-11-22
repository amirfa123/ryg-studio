// ===== How long would it take to walk across the GTA 6 map? (pop culture + GTA 6) =====
const TT=20.8;
const CU={c1:3.72,c2:8.15,c3:10.5,c4:13.72,c5:16.6,c6:19.0};
guy.outfit({snapback:1,capColor:0x5BE37A,chain:1,shades:1});
const C=scene('city');C.car.body[3].visible=false;C.car.color(0xFFD23F);
const SW=scene('swamp');const K=scene('keys');K.car.c.visible=false;
// gators near the swamp path: lift a few so their backs and eyes break the surface
const GZ=[[-2.2,3.2,0.4],[1.4,3.4,-0.5],[4.6,3.1,0.3],[-5.6,3.3,1.1]];
SW.gators.forEach((a,i)=>{a.visible=i<4;if(i<4){a.position.set(GZ[i][0],-0.05,GZ[i][1]);a.rotation.y=GZ[i][2]+(i%2?PI:0)}});
// small original prop plane over the keys
function makePlane(){const p=new THREE.Group();const B=toon(0xF4F4F8),A=toon(0x5BE37A),Kk=toon(0x2A2A35),G=new THREE.MeshToonMaterial({color:0x7FD3FF,transparent:true,opacity:0.55,gradientMap:GM});
  part(p,cap(0.55,3.4),B,[0,0,0],[1,1,1],[0,0,PI/2],0.02);part(p,SPH,A,[1.95,0,0],[0.3,0.42,0.42],[0,0,0],0.01);
  const prop=new THREE.Group();prop.position.set(2.2,0,0);p.add(prop);part(prop,new THREE.BoxGeometry(0.06,1.5,0.14),Kk,[0,0,0],[1,1,1],[0,0,0],0.006);
  part(p,new THREE.BoxGeometry(1.0,0.1,6.2),B,[0.35,0.25,0],[1,1,1],[0,0,0],0.015);for(const z of [-3.0,3.0])part(p,new THREE.BoxGeometry(1.02,0.11,0.4),A,[0.35,0.25,z],[1,1,1],[0,0,0],0);
  part(p,new THREE.BoxGeometry(0.6,0.08,2.0),B,[-2.0,0.2,0],[1,1,1],[0,0,0],0.01);part(p,new THREE.BoxGeometry(0.7,0.9,0.08),A,[-2.0,0.6,0],[1,1,1],[0,0,0],0.01);
  part(p,SPH,G,[0.55,0.55,0],[0.75,0.45,0.48],[0,0,0],0.01);
  const seat=new THREE.Group();seat.position.set(0.45,0.05,0);p.add(seat);
  for(const z of [-0.5,0.5]){part(p,cap(0.04,0.5),Kk,[0.6,-0.65,z],[1,1,1],[0,0,0]);part(p,new THREE.CylinderGeometry(0.2,0.2,0.12,18),Kk,[0.6,-0.95,z],[1,1,1],[PI/2,0,0],0.01)}
  return {p,prop,seat}}
const PL=makePlane();K.S.add(PL.p);PL.p.visible=false;
function pilotIn(t,o={}){PL.seat.add(holder);holder.position.set(-0.15,-0.25,0);holder.rotation.set(0,PI/2,0);holder.scale.setScalar(0.62);
  guy.pose({...SIT,reachL:[0.15,1.15,0.55],reachR:[-0.15,1.15,0.55],blink:BLINK(t),mouth:'grin',...o})}
function seatGuy(t,o={}){const c=C.car.c;const p=new THREE.Vector3(-0.35,0.55,0).applyEuler(c.rotation).add(c.position);putGuy(C.S,p.x,p.y,p.z,PI/2+c.rotation.y);guy.pose({...SIT,armL:[0.9,0.25],armR:[0.9,-0.25],bendL:0.9,bendR:0.9,blink:BLINK(t),mouth:'grin',...o})}
// ---- 2D ----
function pillS(s,x,y,size,col){g.save();g.font=`900 ${size}px Inter`;const w=g.measureText(s).width+size*1.1,h=size*1.6;g.fillStyle=col;rr(x-w/2,y-h/2,w,h,h/2);g.fill();g.strokeStyle='#111';g.lineWidth=6;g.stroke();g.restore();txt(s,x,y+2,size,{stroke:0,fill:'#111'})}
function trip(f,label,col='#5BE37A'){const x0=150,x1=W-150,y=300;panel(W/2,y,900,170,'rgba(10,12,25,0.85)',col,34);txt('SOUTH',x0+20,y-38,34,{stroke:0,fill:'#fff',align:'left'});txt('NORTH',x1-20,y-38,34,{stroke:0,fill:'#fff',align:'right'});
  bar(x0+10,y+5,x1-x0-20,40,f,col);const px=lerp(x0+30,x1-30,clamp(f));g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.arc(px,y+25,24,0,7);g.fill();g.stroke();if(label)txt(label,px,y+90,30,{sw:7})}
function timer(x,y,secs,col='#FFD23F',w=640){const h=Math.floor(secs/3600),m=Math.floor(secs/60)%60,s=Math.floor(secs)%60;panel(x,y,w,170,'rgba(10,12,25,0.88)',col,34);txt(`${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`,x,y+8,110,{stroke:0,fill:col})}
function stopwatch(x,y,R,a){g.save();g.translate(x,y);g.fillStyle='#F4F4F8';g.strokeStyle='#111';g.lineWidth=10;rr(-22,-R-46,44,30,8);g.fill();g.stroke();g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();
  for(let i=0;i<12;i++){const b=i/12*PI*2;g.lineWidth=6;g.beginPath();g.moveTo(Math.sin(b)*R*0.78,-Math.cos(b)*R*0.78);g.lineTo(Math.sin(b)*R*0.9,-Math.cos(b)*R*0.9);g.stroke()}
  g.strokeStyle='#FF4A4A';g.lineWidth=9;g.lineCap='round';g.beginPath();g.moveTo(0,0);g.lineTo(Math.sin(a)*R*0.75,-Math.cos(a)*R*0.75);g.stroke();g.fillStyle='#111';g.beginPath();g.arc(0,0,10,0,7);g.fill();g.restore()}
function streaks(t,a=0.5){g.save();g.lineCap='round';for(let i=0;i<26;i++){const y=hash(i*3.7)*H*0.7+H*0.15,len=160+hash(i*5.1)*300,x=W-(((hash(i*9.3)*W+t*(2400+hash(i)*1400))%(W+600)))+300;g.strokeStyle=`rgba(255,255,255,${a*(0.25+0.5*hash(i*2.2))})`;g.lineWidth=5+hash(i*8)*6;g.beginPath();g.moveTo(x,y);g.lineTo(x+len,y);g.stroke()}g.restore()}
function board(t,t0){const rows=[['WALK','3 H 21 MIN','#FF6A5E',1],['SPRINT','1 H 41 MIN','#FFD23F',0.5],['CAR','11 MIN','#3FF0FF',0.055],['PLANE','UNDER 6 MIN','#5BE37A',0.029]];
  const a=easeOut(seg(t,t0,t0+0.3));if(a<=0)return;g.save();g.globalAlpha=a;panel(W/2,1700,940,330,'rgba(10,12,25,0.9)','#FFD23F',30);
  rows.forEach(([n,v,c,f],i)=>{const y=1580+i*76,k=easeOut(seg(t,t0+0.15+i*0.18,t0+0.5+i*0.18));txt(n,150,y,38,{stroke:0,fill:c,align:'left'});g.fillStyle='rgba(255,255,255,0.12)';rr(360,y-16,300,32,16);g.fill();g.fillStyle=c;rr(360,y-16,Math.max(32,300*f*k),32,16);g.fill();txt(v,940,y,36,{stroke:0,fill:'#fff',align:'right'})});g.restore()}
// ---- opening: neon street at sunset, standing next to his parked car ----
const C0={p:[4.4,2.3,10.6],l:[0.9,1.5,-1.4]};
function openScene(t){C.mood('sunset');const c=C.car.c;c.visible=true;c.position.set(3.4,0,-2.6);c.rotation.set(0,0,0);C.car.spin(0);
  putGuy(C.S,0.0,0.0,-1.4,0.35);guy.pose({armL:[0.35+0.05*Math.sin(t*2*PI/2.08),0],armR:[2.5,0.35],bendR:0.5,mouth:'grin',blink:BLINK(t),look:0.3,jump:0.015*Math.sin(t*2*PI/1.04),headRoll:0.06*Math.sin(t*2*PI/2.08)})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.rotation.set(0,0,0);holder.scale.setScalar(1);PL.p.visible=false;C.cop.c.visible=false;C.car.c.visible=true;
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));C.shot(mix(C0.p,[4.0,2.2,9.8],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('HOW LONG TO WALK',W/2,215,84,{sw:17});txt('ACROSS THE',W/2,320,84,{sw:17});txt('GTA 6 MAP?',W/2,450,118,{fill:'#5BE37A',sw:24});g.restore();
    comic('ON FOOT?!',W*0.27,1160,76,t,2.2,{life:1.3,rot:-0.08,fill:'#FFD23F'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);const u=t-CU.c1;const x=-4.5+u*1.6;const scare=seg(t,6.9,7.2)*(1-seg(t,7.7,8.1));
    putGuy(SW.S,x,0.0,4.6,PI/2);guy.pose({...walk(t,8),mouth:scare>0.3?'o':'smile',mouthSize:0.9,wide:scare>0.3,jump:walk(t,8).jump+0.35*Math.sin(PI*seg(t,6.95,7.45)),armL:scare>0.3?[2.4,0]:walk(t,8).armL,armR:scare>0.3?[2.4,0]:walk(t,8).armR,look:scare>0.3?-0.6:0});
    SW.gators.forEach((a,i)=>{if(i<4){a.position.y=0.16+0.04*Math.sin(t*2+i);if(i===1)a.position.y+=0.2*seg(t,6.8,7.0)*(1-seg(t,7.6,7.9))}});
    SW.shot([x+1.6,2.6,13.5],[x+0.6,1.0,3.6]);trip(lerp(0,0.35,seg(t,CU.c1,CU.c2)),'YOU');
    comic('SNAP!',W*0.72,1120,90,t,7.0,{life:1.0,rot:0.1,fill:'#5BE37A'});pill('1 TESTER DID IT',W/2,560,54,'#FFD23F','#111',t,4.0,6.4)}
  else if(t<CU.c3){flash(t,CU.c2,0.15);const u=t-CU.c2,k=seg(t,CU.c2,CU.c3);const mood=k<0.45?'day':k<0.75?'sunset':'night';C.mood(mood);
    const x=-6+u*1.4;putGuy(C.S,x,0.0,1.0,PI/2);guy.pose({...walk(t,8),mouth:'o',mouthSize:0.5});C.car.c.visible=false;
    C.shot([x+1.6,2.0,9.6],[x+0.4,1.5,0.0]);const secs=lerp(0,3*3600+21*60+20,ease(seg(t,8.3,9.9)));timer(W/2,300,secs);
    stopwatch(W*0.8,620,90,secs/3600*PI*2*6);pill('3 HOURS 21 MIN',W/2,1660,58,'#FF6A5E','#111',t,9.6,CU.c3);comic('OOF',W*0.2,640,80,t,9.9,{life:0.7,rot:-0.12,fill:'#fff'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);setBG(BGS.day);const u=t-CU.c3;const x=-10+u*6.5;putGuy(K.S,x,1.78,-0.4,PI/2);guy.pose({...run(t),mouth:'grin'});
    K.shot([x+2.4,3.0,8.6],[x+0.6,2.2,-0.4]);streaks(t,0.45);pill('SPRINTING',W/2,330,64,'#FFD23F','#111',t,10.7,CU.c4);
    pill('1 HOUR 41 MIN',W/2,1660,60,'#FFD23F','#111',t,12.6,CU.c4);comic('ZOOM',W*0.75,640,80,t,11.2,{life:0.9,rot:0.1,fill:'#FFD23F'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);C.mood('night');const u=t-CU.c4;const c=C.car.c;c.position.set(-20+u*14,0,1.6);c.rotation.set(0,0,0);C.car.spin(t*30);
    seatGuy(t,{armL:[0.9,0.25],armR:[2.6,0.2],bendR:0.3,mouth:t>15.4?'teeth':'grin'});const cx=c.position.x;C.shot([cx+7.5,3.0,12.5],[cx+0.6,1.2,1.0]);streaks(t,0.35);
    pill('HIGHWAY',W/2,330,64,'#3FF0FF','#111',t,13.9,CU.c5);pill('ABOUT 11 MIN',W/2,1660,60,'#3FF0FF','#111',t,15.3,CU.c5);comic('VROOM',W*0.25,620,84,t,14.1,{life:1.0,rot:-0.1,fill:'#3FF0FF'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);setBG(BGS.day);const u=t-CU.c5;PL.p.visible=true;const px=-30+u*9;PL.p.position.set(px,14+0.3*Math.sin(u*2),4);PL.p.rotation.set(0.12*Math.sin(u*1.6),0,0.05);PL.prop.rotation.x=t*40;
    pilotIn(t,{mouth:'grin',wide:t>17.9});K.shot([px+7,17.5,15],[px+0.5,13.2,3]);pill('UNDER 6 MIN',W/2,330,64,'#5BE37A','#111',t,17.9,CU.c6);board(t,17.2)}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.25));C.shot(mix([5.6,3.0,13.0],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
