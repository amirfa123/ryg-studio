// ===== What would happen if everyone on Earth jumped at the same time? (crazy what-if) =====
const TT=20.4;
const CU={c1:4.05,c2:7.42,c3:9.2,c4:12.0,c5:15.08,c6:18.76};
guy.outfit({snapforward:1,capColor:0x3FA8FF});
// ---- little planet ----
const PL={S:new THREE.Scene()};lights(PL.S);PL.cam=new THREE.PerspectiveCamera(30,W/H,0.1,400);
const RP=6;const planet=new THREE.Group();PL.S.add(planet);
part(planet,new THREE.SphereGeometry(RP,64,48),toon(0x5CCB6A),[0,0,0],[1,1,1],[0,0,0],0.03);
for(let i=0;i<9;i++){const th=hash(i*4.1)*PI*2,ph=0.5+hash(i*7.7)*2.2;const n=new THREE.Vector3(Math.sin(ph)*Math.cos(th),Math.cos(ph),Math.sin(ph)*Math.sin(th));
  const m=part(planet,new THREE.CircleGeometry(0.8+hash(i)*0.9,28),toon(0x3FA8FF),n.clone().multiplyScalar(RP+0.012).toArray(),[1,1,1],[0,0,0],0);m.lookAt(n.clone().multiplyScalar(20))}
for(let i=0;i<14;i++){const th=hash(i*9.3)*PI*2,ph=0.3+hash(i*2.9)*2.5;const n=new THREE.Vector3(Math.sin(ph)*Math.cos(th),Math.cos(ph),Math.sin(ph)*Math.sin(th));
  const tr=new THREE.Group();planet.add(tr);tr.position.copy(n.clone().multiplyScalar(RP));tr.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),n);part(tr,cap(0.06,0.4),toon(0x8A5A32),[0,0.25,0]);part(tr,SPH,toon(0x2E9E5B),[0,0.6,0],[0.3,0.36,0.3],[0,0,0],0.01)}
// instanced people
const NP=2600;const pBody=new THREE.InstancedMesh(new THREE.CapsuleGeometry(0.09,0.12,4,10),toon(0x1FB8A8),NP);const pHead=new THREE.InstancedMesh(new THREE.SphereGeometry(0.085,12,10),toon(0xFFD84A),NP);
planet.add(pBody);planet.add(pHead);const PN=[];
{let k=0;for(let i=0;i<NP*1.2&&k<NP;i++){const y=1-2*(i+0.5)/(NP*1.2),r2=Math.sqrt(1-y*y),th=i*2.39996;const n=new THREE.Vector3(r2*Math.cos(th),y,r2*Math.sin(th));if(n.y>0.93&&Math.abs(n.x)<0.25)continue;PN.push({n,ph:hash(i*1.7)});k++}}
const _m=new THREE.Matrix4(),_q=new THREE.Quaternion(),_s=new THREE.Vector3(1,1,1),UPV=new THREE.Vector3(0,1,0);
function placePeople(h,t){for(let i=0;i<PN.length;i++){const {n,ph}=PN[i];_q.setFromUnitVectors(UPV,n);const hh=h*(0.85+0.3*ph)+0.01*Math.sin(t*6+ph*20)*(h>0.05?1:0);
  _m.compose(n.clone().multiplyScalar(RP+0.18+hh),_q,_s);pBody.setMatrixAt(i,_m);_m.compose(n.clone().multiplyScalar(RP+0.4+hh),_q,_s);pHead.setMatrixAt(i,_m)}pBody.instanceMatrix.needsUpdate=true;pHead.instanceMatrix.needsUpdate=true}
function hop(t){if(t<6.35)return 0;if(t<6.75)return easeOut(seg(t,6.35,6.75));if(t<12.55)return 1+0.04*Math.sin(t*3);if(t<12.85)return 1-seg(t,12.55,12.85)**2;return 0.12*Math.max(0,Math.sin(seg(t,12.85,13.25)*PI))}
function stars(){g.save();for(let i=0;i<120;i++){g.fillStyle=`rgba(255,255,255,${0.4+0.6*hash(i*3.3)})`;g.beginPath();g.arc(hash(i*7.1)*W,hash(i*5.3)*H,1+hash(i)*2.5,0,7);g.fill()}g.restore()}
function plShot(p,l,bgk){PL.cam.position.set(...p);PL.cam.lookAt(...l);setBG(bgk);r.setClearColor(0,0);r.render(PL.S,PL.cam)}
function guyTop(o={}){PL.S.add(holder);holder.position.set(0,RP,0);holder.rotation.set(0,0.25,0);holder.scale.setScalar(1)}
const crouch=(k,t)=>({legL:[0.6*k,1.1*k,0],legR:[0.6*k,1.1*k,0],sitY:-0.18*k,armL:[0.3+0.5*k,-0.6*k],armR:[0.3+0.5*k,-0.6*k],blink:BLINK(t),mouth:'grin'});
const SKY='linear-gradient(#5BB8FF 0%,#A9DEFF 60%,#EAF8FF 100%)',SPACE='radial-gradient(circle at 50% 50%,#1A1F55,#05061A 75%)';
function atomIcon(x,y,R,t){g.save();g.translate(x,y);g.strokeStyle='#7FD3FF';g.lineWidth=7;for(let k=0;k<3;k++){g.save();g.rotate(k*PI/3);g.beginPath();g.ellipse(0,0,R,R*0.35,0,0,7);g.stroke();g.restore()}
  g.fillStyle='#FF6A8A';g.beginPath();g.arc(0,0,R*0.18,0,7);g.fill();g.strokeStyle='#111';g.lineWidth=5;g.stroke();for(let k=0;k<3;k++){const a=t*3+k*2.1;const ex=Math.cos(a)*R,ey=Math.sin(a)*R*0.35;const c=Math.cos(k*PI/3),s=Math.sin(k*PI/3);g.fillStyle='#FFE14D';g.beginPath();g.arc(ex*c-ey*s,ex*s+ey*c,R*0.07,0,7);g.fill()}g.restore()}
function seismo(x,y,w,h,t,t0){g.save();panel(x,y,w,h,'#FFF8E8','#111',24);g.beginPath();g.rect(x-w/2+10,y-h/2+10,w-20,h-20);g.clip();
  g.strokeStyle='rgba(120,160,220,0.35)';g.lineWidth=2;for(let i=-10;i<20;i++){const gx=x-w/2+((i*60-((t*120)%60)));g.beginPath();g.moveTo(gx,y-h/2);g.lineTo(gx,y+h/2);g.stroke()}
  g.strokeStyle='#D0283A';g.lineWidth=5;g.beginPath();const pen=x+w*0.32;for(let px=x-w/2;px<=pen;px+=4){const tt=t-(pen-px)/120;let a=1.2*Math.sin(tt*37)*hash(Math.floor(tt*40));const d=tt-t0;if(d>0&&d<1.2)a+=14*Math.sin(d*30)*Math.exp(-d*3);px===x-w/2?g.moveTo(px,y+a):g.lineTo(px,y+a)}g.stroke();
  g.fillStyle='#222';g.beginPath();g.arc(pen,y,10,0,7);g.fill();g.restore()}
function openScene(t){placePeople(0,t);guyTop();guy.pose({...crouch(0.35+0.1*Math.sin(t*2*PI/2.0),t),headPitch:-0.05})}
const P0=[0.6,RP+1.7,7.2],L0=[0,RP+1.25,0];
window.render=function(t){g.clearRect(0,0,W,H);hideProps();planet.position.set(0,0,0);planet.rotation.set(0,0,0);
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));plShot(mix(P0,[0.4,RP+1.9,8.6],k),L0,SKY);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT IF EVERYONE',W/2,200,84,{sw:18});txt('ON EARTH JUMPED',W/2,305,96,{fill:'#FFD23F',sw:20});txt('AT ONCE?',W/2,420,120,{fill:'#3FF0FF',sw:24});g.restore();
    comic('READY...',W*0.5,560,80,t,2.6,{life:1.3,rot:-0.06,fill:'#FF7AC2'})}
  else if(t<CU.c2){const h=hop(t);placePeople(h*0.45,t);guyTop();guy.pose(h>0.05?{armL:[2.6,0.3],armR:[2.6,-0.3],bendL:0.2,bendR:0.2,legL:[0.5,0.9,0],legR:[0.2,0.6,0],jump:h*0.55,mouth:'grin',blink:false,wide:true}:crouch(0.6,t));
    planet.rotation.y=(t-CU.c1)*0.12;const k=easeOut(seg(t,CU.c1,6.2));plShot(mix([0.6,RP+3,14],[0,4,44],k),mix([0,RP+1,0],[0,0.6,0],k),SPACE);stars();flash(t,CU.c1,0.15);
    const n=Math.round(lerp(0,8000000000,easeOut(seg(t,4.1,5.5))));panel(W/2,330,800,170,'rgba(10,12,25,0.9)','#FFD23F',30);txt(n.toLocaleString('en-US'),W/2,315,78,{stroke:0,fill:'#FFD23F'});txt('PEOPLE',W/2,380,36,{stroke:0,fill:'#fff'});
    comic('HOP!',W*0.5,1650,140,t,6.45,{life:0.9,rot:-0.08,fill:'#5BE37A'})}
  else if(t<CU.c3){placePeople(0.45*hop(t),t);planet.rotation.y=(t-CU.c1)*0.12;const dy=-0.25*easeOut(seg(t,7.6,8.3));planet.position.y=dy;
    guyTop();holder.position.y=RP+dy;guy.pose({armL:[2.6,0.3],armR:[2.6,-0.3],bendL:0.2,bendR:0.2,legL:[0.5,0.9,0],legR:[0.2,0.6,0],jump:0.55*hop(t),mouth:'o',blink:false,wide:true});
    plShot([0,0.5,40],[0,0.3,0],SPACE);stars();flash(t,CU.c2,0.15);arrow(W/2,1180,W/2,1580,'#FF4A4A',34);pill('EARTH GETS PUSHED',W/2,330,58,'#FF4A4A','#fff',t,7.6,CU.c3);pill('SLOW-MO',W*0.8,470,40,'#fff','#111',t,7.5,CU.c3)}
  else if(t<CU.c4){clear3d();setBG('radial-gradient(circle at 50% 40%,#22285E,#070A20 80%)');stars();flash(t,CU.c3,0.15);
    const a=pop(t,9.3);g.save();g.translate(W/2,700);g.scale(a,a);g.fillStyle='rgba(255,255,255,0.08)';g.beginPath();g.arc(0,0,330,0,7);g.fill();g.strokeStyle='#fff';g.lineWidth=18;g.stroke();atomIcon(0,0,250,t);g.restore();
    g.save();g.strokeStyle='#C9CED8';g.lineWidth=30;g.lineCap='round';g.beginPath();g.moveTo(W/2+230,930);g.lineTo(W/2+380,1080);g.stroke();g.restore();
    txt('1 ATOM',W/2,320,70,{fill:'#7FD3FF',sw:14});
    if(t>10.2){const b=pop(t,10.2);g.save();g.translate(W/2-70,700);g.scale(b,b);g.fillStyle='#FF4A4A';g.fillRect(-2,-2,4,4);g.restore();arrow(W/2-300,1000,W/2-80,720,'#FF4A4A',14);
      pill('EARTH MOVES WAY LESS THAN THIS',W/2,1120,46,'#FF4A4A','#fff',t,10.2,CU.c4)}
    comic('WHAT?!',W*0.75,1640,100,t,11.1,{life:0.8,rot:0.1,fill:'#FFD23F'})}
  else if(t<CU.c5){const h=hop(t);placePeople(h*0.45,t);planet.rotation.y=0;guyTop();
    const land=t>12.85;guy.pose(land?{...crouch(Math.max(0,0.7-1.8*(t-12.85)),t),armL:[1.2,0],armR:[1.2,0],mouth:'grin'}:{armL:[2.6,0.3],armR:[2.6,-0.3],legL:[0.5,0.9,0],legR:[0.2,0.6,0],jump:0.55*h,mouth:'o',wide:true,blink:false});
    const sh=t>12.85&&t<13.3?0.06*Math.sin(t*70):0;plShot(mix([4.6+sh,RP+1.3,6.6],[3.6+sh,RP+1.6,8.0],seg(t,CU.c4,CU.c5)),[0,RP+0.7,0],SKY);flash(t,CU.c4,0.15);
    if(t>12.85&&t<13.6){const d=seg(t,12.85,13.6);g.save();g.globalAlpha=1-d;g.strokeStyle='#C8A57A';g.lineWidth=20;g.beginPath();g.ellipse(W/2,1300,120+500*d,30+90*d,0,0,7);g.stroke();g.restore()}
    comic('THUD!',W*0.5,330,130,t,12.85,{life:0.8,rot:-0.08,fill:'#FFD23F'});
    if(t>13.4){arrow(W*0.82,1700,W*0.82,1530,'#5BE37A',26);pill('SLIDES BACK',W*0.5,330,62,'#5BE37A','#111',t,13.4,CU.c5)}}
  else if(t<CU.c6){const S=scene('stage');setBG('teal');putGuy(S.S,0,0,0,0.2);const shrug=t>17.6;
    guy.pose(shrug?{armL:[0.9,0.9],armR:[0.9,0.9],bendL:1.3,bendR:1.3,mouth:'o',mouthSize:0.5,blink:BLINK(t),headRoll:0.12,brow:0.02}:idle(t,{look:0,lookY:1,headPitch:-0.2,mouth:'o',mouthSize:0.6}));
    S.shot([0.4,1.4,8.4],[0,2.3,0]);flash(t,CU.c5,0.15);
    seismo(W/2,560,900,420,t,16.7);pill('SEISMOMETER',W/2,300,52,'#FFD23F','#111',t,15.2,CU.c6);pill('TINY WOBBLE',W/2,830,50,'#D0283A','#fff',t,16.9,CU.c6);
    comic("THAT'S IT?",W*0.5,1640,96,t,17.9,{life:0.85,rot:-0.06,fill:'#FF8FC8'})}
  else{const tt=t-TT;openScene(tt);planet.rotation.y=0;const k=ease(seg(t,CU.c6,TT-0.1));plShot(mix([1.2,RP+2.2,9.6],P0,k),L0,SKY);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
