// ===== How far could a real car jump off a ramp like in GTA? (crazy what-if + GTA 6) =====
const TT=21.0;
const CU={c1:4.0,c2:7.12,c3:9.64,c4:14.6,c5:17.28,c6:19.4};
guy.outfit({snapback:1,capColor:0x3FF0FF,chain:1});
const C=scene('city');C.car.body[3].visible=false;C.car.color(0xFFB627);
// launch ramp + landing ramp along the street
const RAMP=new THREE.Group();C.S.add(RAMP);RAMP.position.set(-6,0,0.6);
part(RAMP,new THREE.BoxGeometry(5,0.2,3.2),toon(0xFF3DA6),[0,1.2,0],[1,1,1],[0,0,0.5],0.02);part(RAMP,new THREE.BoxGeometry(0.3,2.4,3.0),toon(0x8E84B0),[2.1,1.2,0],[1,1,1],[0,0,0],0.015);
for(let i=0;i<5;i++)part(RAMP,new THREE.BoxGeometry(0.5,0.21,0.3),basic(0xFFE14D),[-1.8+i*0.9,1.2+(-1.8+i*0.9)*0.546,1.65],[1,1,1],[0,0,0.5],0);
const LAND=new THREE.Group();C.S.add(LAND);LAND.position.set(26,0,0.6);
part(LAND,new THREE.BoxGeometry(6,0.2,3.2),toon(0x3FF0FF),[0,1.4,0],[1,1,1],[0,0,-0.45],0.02);part(LAND,new THREE.BoxGeometry(0.3,2.8,3.0),toon(0x8E84B0),[-2.6,1.4,0],[1,1,1],[0,0,0],0.015);
function seatGuy(t,o={}){const c=C.car.c;const p=new THREE.Vector3(-0.35,0.55,0).applyEuler(c.rotation).add(c.position);putGuy(C.S,p.x,p.y,p.z,PI/2+c.rotation.y);holder.rotation.z=c.rotation.z;guy.pose({...SIT,armL:[0.9,0.25],armR:[0.9,-0.25],bendL:0.9,bendR:0.9,blink:BLINK(t),mouth:'grin',...o})}
const C0={p:[14.5,3.9,13.5],l:[3.0,1.3,1.4]};
function openScene(t){const c=C.car.c;c.position.set(4,0,1.6);c.rotation.set(0,0,0);C.car.spin(0);seatGuy(t,{look:0.3*Math.sin(t*2*PI/3.5),jump:0.008*Math.sin(t*2*PI/1.75)})}
function speedo(v,y=330){g.save();g.translate(W/2,y);panel(0,0,640,170);txt(Math.round(v).toString(),60,-4,110,{stroke:0,align:'right'});txt('KM/H',90,10,60,{stroke:0,fill:'#FFD23F',align:'left'});g.restore()}
function streaks(t,a=0.7){g.save();g.lineCap='round';for(let i=0;i<34;i++){const y=hash(i*3.7)*H*0.75+H*0.1,len=160+hash(i*5.1)*300,x=W-(((hash(i*9.3)*W+t*(2400+hash(i)*1400))%(W+600)))+300;g.strokeStyle=`rgba(255,255,255,${a*(0.25+0.5*hash(i*2.2))})`;g.lineWidth=5+hash(i*8)*6;g.beginPath();g.moveTo(x,y);g.lineTo(x+len,y);g.stroke()}g.restore()}
function carIcon(x,y,s,rot=0,col='#FFB627'){g.save();g.translate(x,y);g.rotate(rot);g.scale(s,s);g.fillStyle=col;g.strokeStyle='#111';g.lineWidth=7;rr(-80,-30,160,46,14);g.fill();g.stroke();g.beginPath();g.moveTo(-40,-30);g.lineTo(-20,-56);g.lineTo(30,-56);g.lineTo(50,-30);g.closePath();g.fillStyle='#7FD3FF';g.fill();g.stroke();g.fillStyle='#1d1d24';for(const wx of [-48,48]){g.beginPath();g.arc(wx,18,18,0,7);g.fill()}g.restore()}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();C.mood('sunset');
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));C.shot(mix(C0.p,[13.6,3.7,12.6],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('HOW FAR COULD A REAL CAR',W/2,215,64,{sw:15});txt('JUMP OFF A RAMP',W/2,315,96,{fill:'#FFD23F',sw:20});txt('LIKE IN GTA?',W/2,420,92,{fill:'#3FF0FF',sw:20});g.restore();
    comic('VROOM?',W*0.24,1100,80,t,2.1,{life:1.2,rot:-0.08,fill:'#fff'})}
  else if(t<CU.c2){const k=seg(t,CU.c1,CU.c2);const x=lerp(-40,-9,ease(k));const c=C.car.c;c.position.set(x,0,0.6);c.rotation.set(0,0,0);C.car.spin(t*40);seatGuy(t,{mouth:'o',mouthSize:1.0,wide:true,armL:[1.0,0.2],armR:[1.0,-0.2]});
    C.shot([x-11,3.0,4.8],[x+2.0,1.0,0.6]);streaks(t,0.6);flash(t,CU.c1,0.15);speedo(lerp(0,100,Math.min(1,Math.pow(seg(t,CU.c1+0.1,CU.c2-0.6),0.7))));
    comic('SKRRT!',W*0.7,620,88,t,CU.c1+0.2,{life:1.0,rot:0.08,fill:'#fff'});pill('STEEP RAMP AHEAD',W/2,520,52,'#FF3DA6','#fff',t,CU.c1+1.0,CU.c2)}
  else if(t<CU.c3){clear3d();setBG('neon');flash(t,CU.c2,0.15);const gy=1180,x0=150,x1=950;
    g.fillStyle='#2A2350';g.fillRect(0,gy,W,H-gy);g.strokeStyle='#3FF0FF';g.lineWidth=6;g.beginPath();g.moveTo(0,gy);g.lineTo(W,gy);g.stroke();
    g.fillStyle='#FF3DA6';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.moveTo(x0-110,gy);g.lineTo(x0,gy);g.lineTo(x0,gy-64);g.closePath();g.fill();g.stroke();
    const k=easeOut(seg(t,CU.c2+0.2,CU.c3-0.4));const P=u=>[lerp(x0,x1,u),gy-64-u*(1-u)*4*360+ u*64];
    g.save();g.setLineDash([22,16]);g.strokeStyle='#FFD23F';g.lineWidth=9;g.beginPath();for(let u=0;u<=k;u+=0.02){const p=P(u);u?g.lineTo(...p):g.moveTo(...p)}g.stroke();g.restore();
    const p=P(k),p2=P(Math.min(1,k+0.02));carIcon(p[0],p[1]-20,0.9,Math.atan2(p2[1]-p[1],p2[0]-p[0]));
    g.save();g.strokeStyle='#fff';g.lineWidth=6;g.beginPath();g.moveTo(x0,gy+60);g.lineTo(lerp(x0,x1,k),gy+60);g.stroke();g.restore();txt(Math.round(70*k)+' M',lerp(x0,x1,k)/2+x0/2,gy+130,80,{fill:'#FFD23F',sw:16});
    panel(W/2,330,720,150);txt('PHYSICS SAYS',W/2,300,60,{stroke:0,fill:'#3FF0FF'});txt('100 KM/H + 30° RAMP',W/2,362,44,{stroke:0});
    comic('WHEEE!',W*0.75,620,80,t,CU.c2+0.6,{life:1.0,rot:0.08,fill:'#fff'})}
  else if(t<CU.c4){const k=seg(t,CU.c3,CU.c4-0.6),u=ease(k);const c=C.car.c;const x=lerp(-3.5,24,u),y=0.9+Math.max(0,u*(1-u)*4*7.5)+lerp(1.6,1.6,u);c.position.set(x,y,0.6);c.rotation.set(0,0,lerp(0.4,-0.35,u));C.car.spin(t*40);
    seatGuy(t,{armL:[2.8+0.2*Math.sin(t*12),0],armR:[2.8+0.2*Math.cos(t*12),0],bendL:0,bendR:0,mouth:'o',mouthSize:1.5,wide:true});
    C.shot([x+3.5,y+1.6,17],[x,y+0.3,0.6]);flash(t,CU.c3,0.15);
    g.save();const s=backOut(seg(t,CU.c3+0.6,CU.c3+0.9));g.translate(W/2,350);g.scale(s,s);panel(0,0,700,230,'rgba(10,12,25,0.9)','#FFD23F');txt('WORLD RECORD',0,-62,52,{stroke:0,fill:'#3FF0FF'});txt('82 M',0,30,120,{stroke:0,fill:'#FFD23F'});g.restore();
    pill('RALLY CAR · 2009',W/2,560,54,'#fff','#111',t,CU.c3+2.4,CU.c4);comic('WOOO!',W*0.72,1180,96,t,CU.c3+0.4,{life:1.4,rot:0.08,fill:'#fff'});if(t>CU.c4-0.7)comic('THUD',W*0.5,900,90,t,CU.c4-0.6,{life:0.6,fill:'#FF4A4A'})}
  else if(t<CU.c5){clear3d();setBG('teal');flash(t,CU.c4,0.15);const gy=1180;g.fillStyle='#0B3D44';g.fillRect(0,gy,W,H-gy);g.strokeStyle='#fff';g.lineWidth=6;g.beginPath();g.moveTo(W/2,500);g.lineTo(W/2,gy+200);g.stroke();
    const k=seg(t,CU.c4+0.2,CU.c4+1.6),u=easeOut(k);
    // left: flat ground slam
    const lx=lerp(80,330,u),ly=lerp(640,gy-40,u*u);carIcon(lx,ly,0.85,lerp(0.2,0,u),'#FFB627');if(k>=1){cross(W*0.25,820,1.3);comic('OUCH!',W*0.25,700,72,t,CU.c4+1.6,{life:1.0,fill:'#FF4A4A'})}
    // right: downhill landing ramp
    g.fillStyle='#3FF0FF';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.moveTo(600,gy-280);g.lineTo(1000,gy);g.lineTo(600,gy);g.closePath();g.fill();g.stroke();
    const rx=lerp(560,900,u),ry=lerp(640,gy-40-(1-((lerp(560,900,u)-600)/400))*280,u);carIcon(rx,Math.min(ry,gy-40),0.85,lerp(0.3,0.6,u)*(u<1?1:0.4),'#FFB627');if(k>=1){check(W*0.78,820,1.3)}
    panel(W/2,330,800,150);txt('THE LANDING',W/2,300,64,{stroke:0,fill:'#FFD23F'});txt('NEEDS A DOWNHILL RAMP',W/2,362,44,{stroke:0});
    txt('FLAT',W*0.25,gy+90,60,{sw:12});txt('DOWNHILL',W*0.75,gy+90,60,{sw:12,fill:'#3FF0FF'})}
  else if(t<CU.c6){const c=C.car.c;c.position.set(34,0,0.6);c.rotation.set(0,0.4,0);C.car.spin(0);putGuy(C.S,33.1,0.18,3.6,0.6);
    guy.pose({armL:[0.4,0.1],armR:[0.4,0.1],tilt:0.18*Math.sin(t*6),look:0.4*Math.sin(t*5),mouth:'teeth',teethGap:0.3,blink:BLINK(t),jump:0.0});
    C.shot([37,2.6,11.5],[32.8,1.3,2.6]);flash(t,CU.c5,0.15);
    comic('OOF!',W*0.72,700,110,t,CU.c5+0.2,{life:1.2,rot:0.08,fill:'#FF4A4A'});pill('YOU FEEL EVERY METER',W/2,380,56,'#FFD23F','#111',t,CU.c5+0.4,CU.c6);
    g.save();for(let i=0;i<3;i++){const a=t*4+i*2.1;const p=proj(new THREE.Vector3(33.1+Math.cos(a)*0.5,2.4,3.6+Math.sin(a)*0.5),C.cam);txt('★',p[0],p[1],56,{fill:'#FFE14D',sw:8})}g.restore()}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.25));C.shot(mix([17,5,16],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
