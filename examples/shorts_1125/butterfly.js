// ===== Why do you get butterflies in your stomach when you're nervous? (body/everyday) =====
const TT=17.75;
const CU={c1:3.3,c2:7.1,c3:9.8,c4:11.65,c5:14.0,c6:16.0};
guy.outfit({});
// ---------- talent-show stage ----------
const ST={S:new THREE.Scene()};lights(ST.S);ST.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);
part(ST.S,new THREE.BoxGeometry(14,0.5,6),toon(0xB9783E),[0,-0.25,0],[1,1,1],[0,0,0],0.02);
for(let k=-7;k<=7;k++)part(ST.S,new THREE.BoxGeometry(0.03,0.01,6),toon(0x8C5A2A),[k*0.9,0.005,0],[1,1,1],[0,0,0],0);
part(ST.S,new THREE.PlaneGeometry(40,20),toon(0x1A1030),[0,-0.5,4],[1,1,1],[-PI/2,0,0],0);
for(let k=-12;k<=12;k++)part(ST.S,new THREE.CylinderGeometry(0.32,0.32,7,14),toon(k%2?0xC2243A:0xA81C30),[k*0.55,3.3,-2.8],[1,1,1],[0,0,0],0.01);
part(ST.S,new THREE.BoxGeometry(14,0.7,0.4),toon(0x7A1424),[0,6.6,-2.4],[1,1,1],[0,0,0],0.01);
for(let k=0;k<9;k++)part(ST.S,SPH,basic(0xFFE7A0),[-4+k,6.25,-2.15],[0.09,0.09,0.09],[0,0,0],0);
const SPOT=part(ST.S,new THREE.ConeGeometry(1.3,7,32,1,true),new THREE.MeshBasicMaterial({color:0xFFF4C0,transparent:true,opacity:0.16,depthWrite:false,side:THREE.DoubleSide}),[0,3.5,0.2],[1,1,1],[0,0,0],0);
part(ST.S,new THREE.CircleGeometry(1.25,40),new THREE.MeshBasicMaterial({color:0xFFF4C0,transparent:true,opacity:0.35}),[0,0.01,0.2],[1,1,1],[-PI/2,0,0],0);
const MIC=new THREE.Group();ST.S.add(MIC);MIC.position.set(-0.85,0,0.9);part(MIC,new THREE.CylinderGeometry(0.22,0.25,0.04,20),toon(0x22222C),[0,0.02,0],[1,1,1],[0,0,0],0.006);part(MIC,cap(0.02,1.35),toon(0x55555F),[0,0.72,0],[1,1,1],[0,0,0],0.004);part(MIC,cap(0.045,0.12),toon(0x22222C),[0,1.45,0.03],[1,1,1],[0.5,0,0],0.004);part(MIC,SPH,toon(0x9A9AA6),[0,1.53,0.08],[0.06,0.06,0.06],[0,0,0],0.004);
// crowd heads (silhouettes) in front of stage
for(let k=0;k<14;k++)part(ST.S,SPH,toon(0x2A1E44),[-4.5+k*0.7+0.2*hash(k),-0.12+0.06*hash(k*3),3.3+0.3*hash(k*7)],[0.2,0.23,0.2],[0,0,0],0.006);
const RED=new THREE.PointLight(0xFF2A2A,0,12);RED.position.set(0,3,2);ST.S.add(RED);
function stagePose(t,o={}){ST.S.add(holder);holder.position.set(0,0,0.2);holder.rotation.set(0,0,0);holder.scale.setScalar(1);
  const j=Math.sin(t*2*PI/0.4);guy.pose({armL:[0.12,0.25],armR:[0.12,0.25],bendL:0.9,bendR:0.9,blink:BLINK(t),mouth:'o',mouthSize:0.45,brow:0.04,look:0.6*Math.sin(t*2*PI/2.0),lookY:-0.2,headYaw:0.08*Math.sin(t*2*PI/2.0),jump:0.006*j,...o})}
const C0={p:[0.9,1.55,8.8],l:[0,1.05,0.4]};
function stageShot(p,l){ST.cam.position.set(...p);ST.cam.lookAt(...l);setBG('linear-gradient(#0E0820,#2A1340)');r.setClearColor(0,0);r.render(ST.S,ST.cam)}
// ---------- 2D butterflies ----------
function bfly(x,y,s,ph,col){const f=Math.abs(Math.cos(ph));g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=5;
  for(const sd of [-1,1]){g.save();g.scale(sd*f,1);g.fillStyle=col;g.beginPath();g.ellipse(22,-14,24,18,-0.5,0,7);g.fill();g.stroke();g.fillStyle='#fff';g.beginPath();g.ellipse(18,16,14,11,0.5,0,7);g.fill();g.stroke();g.restore()}
  g.fillStyle='#111';g.beginPath();g.ellipse(0,0,6,24,0,0,7);g.fill();g.restore()}
const BCOL=['#FF8FC8','#7FE0FF','#FFD23F','#B59CFF','#7CFF6B'];
function swarm(cx,cy,n,t,spread,sz){for(let i=0;i<n;i++){const a=t*(0.8+hash(i)*0.9)+i*2.4,rr2=spread*(0.4+0.6*hash(i*3));bfly(cx+Math.cos(a)*rr2,cy+Math.sin(a*1.3)*rr2*0.6-spread*0.2*hash(i*5),sz*(0.7+0.5*hash(i*7)),t*18+i,BCOL[i%5])}}
function bellyScreen(){const v=new THREE.Vector3();guy.belly.getWorldPosition(v);return proj(v,ST.cam)}
// ---------- 2D: brain + panic button + adrenaline flood ----------
function brainScene(t){setBG('pink');const cx=W/2,by=560;g.save();g.translate(cx,by);const sh=t>4.45&&t<5.6?6*Math.sin(t*60):0;g.translate(sh,0);g.strokeStyle='#111';g.lineWidth=12;
  g.fillStyle='#FF9EC0';g.beginPath();for(let k=0;k<12;k++){const a=k/12*PI*2,R=250+28*Math.sin(k*2.3);const x=Math.cos(a)*R*1.15,y=Math.sin(a)*R*0.8;k?g.quadraticCurveTo(Math.cos(a-0.26)*R*1.35,Math.sin(a-0.26)*R*0.95,x,y):g.moveTo(x,y)}g.closePath();g.fill();g.stroke();
  g.lineWidth=9;for(let k=0;k<5;k++){g.beginPath();g.moveTo(-200+k*90,-120);g.bezierCurveTo(-160+k*90,-40,-240+k*90,40,-180+k*90,120);g.stroke()}
  for(const s of [-1,1]){g.fillStyle='#fff';g.beginPath();g.arc(s*70,-10,34,0,7);g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(s*70,-10+(t>4.45?-6:4),t>4.45?10:16,0,7);g.fill()}
  g.restore();
  // panic button
  const pr=t>4.3&&t<4.75?1:0;const bx=cx,byy=1060;g.save();g.fillStyle='#333';g.strokeStyle='#111';g.lineWidth=10;rr(bx-200,byy-30,400,120,30);g.fill();g.stroke();
  g.fillStyle='#E0202A';g.beginPath();g.ellipse(bx,byy-10+pr*30,150,60,0,0,7);g.fill();g.stroke();g.fillRect(bx-150,byy-10+pr*30,300,40-pr*30);g.beginPath();g.ellipse(bx,byy-60+pr*30,150,60,0,0,7);g.fillStyle='#FF3A44';g.fill();g.stroke();g.restore();
  txt('PANIC',bx,byy-60+pr*30,66,{sw:12});
  // arrow from brain down to the button
  if(t>3.9&&t<4.6){g.save();g.globalAlpha=fade(t,3.9,4.6,0.15);arrow(cx+300,800,cx+170,980,'#FFD23F',20);g.restore()}
  // alarm lights
  if(t>4.45){const on=Math.floor(t*6)%2;g.fillStyle=on?'rgba(255,40,40,0.18)':'rgba(0,0,0,0)';g.fillRect(0,0,W,H)}
  // adrenaline flood
  const lv=easeOut(seg(t,5.4,6.9));if(lv>0){const y0=H-lv*1150;g.fillStyle='rgba(255,140,30,0.88)';g.beginPath();g.moveTo(0,H);for(let x=0;x<=W;x+=20)g.lineTo(x,y0+18*Math.sin(x/70+t*8));g.lineTo(W,H);g.closePath();g.fill();
    for(let i=0;i<18;i++){const bx2=hash(i)*W,by2=H-((t*300+hash(i*3)*1200)%(lv*1150));g.strokeStyle='rgba(255,255,255,0.7)';g.lineWidth=5;g.beginPath();g.arc(bx2,by2,8+12*hash(i*5),0,7);g.stroke()}
    txtA('ADRENALINE',W/2,y0+190,110,seg(t,6.1,6.4),{fill:'#FFF3A0',sw:22})}}
// ---------- 2D: body blood-flow diagram ----------
function bodyDiagram(t,t0){setBG('blue');const cx=W/2,cy=860;g.save();g.translate(cx,cy);g.lineCap='round';g.lineJoin='round';
  const body=(c,w)=>{g.strokeStyle=c;g.lineWidth=w;g.beginPath();g.moveTo(-130,-150);g.lineTo(-300,120);g.moveTo(130,-150);g.lineTo(300,120);g.moveTo(-70,180);g.lineTo(-110,560);g.moveTo(70,180);g.lineTo(110,560);g.stroke()};
  body('#111',120);body('#3B4A7A',96);g.fillStyle='#3B4A7A';g.strokeStyle='#111';g.lineWidth=12;rr(-170,-200,340,420,120);g.fill();g.stroke();g.beginPath();g.arc(0,-310,110,0,7);g.fill();g.stroke();
  // muscles glow
  const mg=seg(t,8.6,9.3);if(mg>0){g.globalAlpha=mg;body('#FF4A5A',60);g.globalAlpha=1}
  // stomach
  const sk=1-0.25*seg(t,7.3,9.4);g.fillStyle='#FF9EC0';g.beginPath();g.ellipse(-10,40,100*sk,70*sk,-0.4,0,7);g.fill();g.stroke();
  // blood dots
  const paths=[[[-10,40],[-130,-150],[-300,120]],[[-10,40],[130,-150],[300,120]],[[-10,40],[-70,180],[-110,560]],[[-10,40],[70,180],[110,560]]];
  for(let i=0;i<24;i++){const pth=paths[i%4];const u=((t-t0-0.15)*0.9+hash(i)*1.0);if(u<0)continue;const uu=u%1;const a=uu<0.5?uu*2:(uu-0.5)*2,P=uu<0.5?[pth[0],pth[1]]:[pth[1],pth[2]];const x=lerp(P[0][0],P[1][0],a),y=lerp(P[0][1],P[1][1],a);
    g.fillStyle='#E0202A';g.strokeStyle='#111';g.lineWidth=5;g.beginPath();g.arc(x,y,16,0,7);g.fill();g.stroke()}
  g.restore();
  txtA('STOMACH',cx-10,cy+170,48,fade(t,t0+0.1,CU.c3),{fill:'#FFC8DD'});
  if(t>8.6){const a=fade(t,8.6,CU.c3);txtA('MUSCLES',cx+330,cy+300,52,a,{fill:'#FF8A8A'})}}
// ---------- 2D: stomach slowing + tightening ----------
function stomachScene(t,t0){setBG('teal');const cx=W/2,cy=820;const sp=lerp(1,0.15,easeOut(seg(t,12.2,12.9)));const tight=easeOut(seg(t,13.1,13.6));
  g.save();g.translate(cx,cy);g.strokeStyle='#111';g.lineWidth=14;g.lineJoin='round';
  // esophagus + stomach (J shape) - drawn organ, squeeze = tighten
  const S=1-0.18*tight;g.scale(S,S);g.fillStyle='#FF9EC0';g.beginPath();g.moveTo(-60,-420);g.lineTo(10,-420);g.lineTo(10,-230);
  g.bezierCurveTo(260,-260,330,60,180,230);g.bezierCurveTo(60,350,-200,330,-250,200);g.bezierCurveTo(-200,180,-120,160,-70,90);g.bezierCurveTo(-40,0,-60,-120,-60,-230);g.closePath();g.fill();g.stroke();
  // churn waves (speed sp)
  g.strokeStyle='rgba(180,40,90,0.55)';g.lineWidth=12;const ph=(t-t0)*sp*6;for(let k=0;k<3;k++){g.beginPath();for(let x=-150;x<=200;x+=10){const y=-60+k*90+14*Math.sin(x/30+ph+k);x===-150?g.moveTo(x,y):g.lineTo(x,y)}g.stroke()}
  // squeeze lines
  if(tight>0){g.strokeStyle='#FFD23F';g.lineWidth=12;for(const s of [-1,1]){g.beginPath();g.moveTo(s*380,-40);g.lineTo(s*300,0);g.lineTo(s*380,40);g.stroke()}}
  g.restore();
  // speed gauge
  txt('DIGESTION',W/2,1200,52,{sw:10});bar(W/2-260,1235,520,60,sp,'#7CFF6B');
  if(t>12.4)comic('SLOW...',W*0.75,430,80,t,12.4,{life:0.9,rot:0.1,fill:'#9CC4FF'});comic('SQUEEZE!',W*0.3,430,90,t,13.15,{life:0.8,rot:-0.1,fill:'#FFD23F'})}
// ---------- render ----------
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;RED.intensity=0;SPOT.visible=true;
  if(t<CU.c1){stagePose(t);const k=ease(seg(t,0.1,CU.c1));stageShot(mix(C0.p,[0.6,1.45,7.6],k),mix(C0.l,[0,1.0,0.4],k));
    const [bx,by]=bellyScreen();if(t>1.6)swarm(bx,by,Math.min(5,Math.floor((t-1.6)*6)),t,170,0.9);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHY DO YOU GET',W/2,190,80,{sw:16});txt('BUTTERFLIES',W/2,300,124,{fill:'#FF8FC8',sw:24});txt('IN YOUR STOMACH?',W/2,415,86,{fill:'#FFD23F',sw:18});g.restore();
    pill('WHEN YOU GET NERVOUS',W/2,1240,54,'#7FE0FF','#111',t,2.1,CU.c1-0.05)}
  else if(t<CU.c2){flash(t,CU.c1,0.15);clear3d();brainScene(t);comic('BEEP BEEP!',W*0.5,200,96,t,4.5,{life:0.9,rot:-0.06,fill:'#FF6A6A'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);clear3d();bodyDiagram(t,CU.c2);pill('BLOOD LEAVES YOUR GUT',W/2,250,60,'#FF4A5A','#fff',t,7.2,CU.c3)}
  else if(t<CU.c4){flash(t,CU.c3,0.15);const C=scene('city');C.mood('day');C.car.c.visible=false;C.cop.c.visible=false;const fight=t>10.9;
    const x=fight?(10.9-CU.c3)*3.2:(t-CU.c3)*3.2;putGuy(C.S,x,0,-2.4,fight?0.35:PI/2);
    guy.pose(fight?{armL:[0.5,-1.3],armR:[0.5,-1.3],bendL:2.0,bendR:2.0,legL:[0.3,0.2,0],legR:[-0.25,0.1,0],mouth:'teeth',teethGap:0.2,brow:-0.03,blink:false,jump:0.02*Math.abs(Math.sin(t*8))}:run(t));
    const cx2=x+(fight?0:0.6);C.shot([cx2+0.6,1.7,5.6],[cx2,1.05,-2.4]);
    pill(fight?'...OR FIGHT!':'RUN...',W/2,330,90,fight?'#FF4A4A':'#7CFF6B',fight?'#fff':'#111',t,fight?10.9:CU.c3+0.05,fight?CU.c4:10.9);if(fight)comic('HYAH!',W*0.75,620,96,t,11.0,{life:0.6,rot:0.12,fill:'#FFD23F'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);clear3d();stomachScene(t,CU.c4)}
  else if(t<CU.c6){flash(t,CU.c5,0.15);RED.intensity=1.5+1.5*Math.sin(t*10);const bp=guy.bellyPoint(0,0.1,1,0,0.06);
    stagePose(t,{reachL:[bp[0]+0.18,bp[1],bp[2]],reachR:[bp[0]-0.18,bp[1]-0.05,bp[2]],poleL:[1,-1,0],poleR:[-1,-1,0],headPitch:0.35,lookY:-0.8,look:0,mouth:'o',mouthSize:0.7,wide:true});
    const k=ease(seg(t,CU.c5,CU.c6));stageShot([lerp(0.5,0.3,k),lerp(1.45,1.35,k),lerp(7.6,6.8,k)],[0,1.0,0.2]);
    const [bx,by]=bellyScreen();swarm(bx,by-40,10,t,320*easeOut(seg(t,CU.c5,15.0))+60,1.4);comic('FLUTTER!',W*0.5,450,120,t,14.6,{life:1.1,rot:-0.08,fill:'#FF8FC8'})}
  else{const tt=t-TT;stagePose(tt);const k=ease(seg(t,CU.c6,TT-0.2));stageShot(mix([0.2,1.8,10.4],C0.p,k),mix([0,1.2,0.4],C0.l,k));flash(t,CU.c6,0.15)}
  vignette();captions(t)};
