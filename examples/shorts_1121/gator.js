// ===== Could you outrun an alligator like in GTA 6? (what-if/animals + GTA 6) =====
const TT=21.2;
const CU={c1:3.2,c2:5.6,c3:11.2,c4:15.7,c5:18.1,c6:19.5};
guy.outfit({snapback:1,shades:1,capColor:0x1FA37A});
const SW=scene('swamp');
// ---- original cartoon gator with moving jaw + legs ----
function mkGator(sc){const a=new THREE.Group();sc.add(a);const D=toon(0x2F5A22),L=toon(0x7E9F45),Wt=toon(0xF4F0D8);
  part(a,SPH,D,[0,0.32,0],[1.25,0.32,0.5],[0,0,0],0.012);
  for(let k=0;k<6;k++)part(a,new THREE.ConeGeometry(0.07,0.16,4),L,[0.9-k*0.36,0.62,0],[1,1,1],[0,0,0],0.004);
  const tail=new THREE.Group();tail.position.set(-1.1,0.3,0);a.add(tail);part(tail,new THREE.ConeGeometry(0.3,1.8,10),D,[-0.85,0,0],[1,0.55,1],[0,0,PI/2],0.01);
  const head=new THREE.Group();head.position.set(1.15,0.36,0);a.add(head);
  const up=new THREE.Group();head.add(up);part(up,new THREE.BoxGeometry(1.1,0.18,0.46),D,[0.5,0.06,0],[1,1,1],[0,0,0],0.012);
  for(const s of [-1,1]){part(up,SPH,Wt,[0.12,0.2,s*0.15],[0.1,0.1,0.1],[0,0,0],0.006);part(up,SPH,basic(0x111111),[0.18,0.21,s*0.15],[0.045,0.065,0.045],[0,0,0],0);for(let k=0;k<6;k++)part(up,new THREE.ConeGeometry(0.03,0.08,4),Wt,[0.2+k*0.15,-0.06,s*0.2],[1,1,1],[PI,0,0],0)}
  const lo=new THREE.Group();head.add(lo);part(lo,new THREE.BoxGeometry(1.05,0.12,0.42),L,[0.48,-0.08,0],[1,1,1],[0,0,0],0.012);
  const legs=[];for(const [x,z] of [[0.75,0.42],[0.75,-0.42],[-0.65,0.42],[-0.65,-0.42]]){const l=new THREE.Group();l.position.set(x,0.25,z);a.add(l);part(l,cap(0.09,0.22),D,[0,-0.12,0],[1,1,1],[0,0,0],0.008);part(l,SPH,D,[0.08,-0.24,0],[0.14,0.05,0.1],[0,0,0],0.006);legs.push(l)}
  return {a,tail,head,up,lo,legs,anim(t,open=0,gait=0,sp=10){up.rotation.z=open*0.45;lo.rotation.z=-open*0.15;tail.rotation.y=0.25*Math.sin(t*(gait?sp:3));legs.forEach((l,i)=>l.rotation.z=gait*0.7*Math.sin(t*sp+(i%3?PI:0)))}}}
const GZ=mkGator(SW.S);
// ---- land bank (east side) ----
const BANK=new THREE.Group();SW.S.add(BANK);
part(BANK,new THREE.BoxGeometry(80,0.3,40),toon(0x8DB45A),[70,-0.05,0],[1,1,1],[0,0,0],0);
part(BANK,new THREE.PlaneGeometry(80,3.2),toon(0xD8C08A),[70,0.11,0.8],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<60;i++){const x=32+hash(i*1.7)*70,z=-6-hash(i*2.9)*12;part(BANK,cap(0.03,0.9+hash(i)*0.9),toon(i%2?0x9DBB52:0x6E9A3C),[x,0.6,z],[1,1,1],[hash(i)*0.3-0.15,0,hash(i*5)*0.3-0.15],0)}
for(let k=0;k<12;k++)palm(BANK,34+k*6+hash(k)*2,-7-hash(k*3)*4,1.3,0.2,k);
for(let k=0;k<8;k++)part(BANK,SPH,toon(k%2?0x3F7F3A:0x4F9A44),[36+k*8,0.35,5.5+hash(k)*2],[1.1,0.6,0.8],[0,0,0],0.012);
// ---- shots ----
const C0={p:[4.6,3.3,14.5],l:[0,1.1,0.4]};
function openScene(t){GZ.a.visible=true;GZ.a.position.set(2.6,-0.15,4.4);GZ.a.rotation.set(0,PI-0.5,0);GZ.anim(t*0+1.0,0.25+0.25*Math.sin(t*2*PI/2.65),0,3);putGuy(SW.S,0,0.51,1.7,0.25);
  guy.pose({armL:[0.35,0.05],armR:[0.35,-0.05],bendL:0.5,bendR:0.5,blink:BLINK(t),mouth:'o',mouthSize:0.5,look:-0.5,lookY:-0.4,headYaw:-0.35,headPitch:0.12,jump:0.01*Math.sin(t*2*PI/1.4)});
  SW.gators.forEach((g2,i)=>{g2.position.y=-0.2+0.04*Math.sin(t*2*PI/(2.65)+i)})}
// ---- 2D helpers ----
function gatorIcon(x,y,s,t,open=0){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=8;g.lineJoin='round';
  g.fillStyle='#2F7A2A';g.beginPath();g.moveTo(-210,0);g.quadraticCurveTo(-120,-20+6*Math.sin(t*12),-60,-30);g.lineTo(60,-38);g.lineTo(180,-30-open*30);g.lineTo(190,-12-open*20);g.lineTo(70,-6);g.lineTo(70,6);g.lineTo(190,14);g.lineTo(180,28);g.lineTo(60,36);g.lineTo(-60,30);g.quadraticCurveTo(-120,20,-210,0);g.closePath();g.fill();g.stroke();
  g.fillStyle='#fff';g.beginPath();g.arc(60,-42,16,0,7);g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(64,-42,7,0,7);g.fill();
  g.fillStyle='#fff';for(let k=0;k<5;k++){g.beginPath();g.moveTo(90+k*18,-8-open*3*k);g.lineTo(98+k*18,6);g.lineTo(106+k*18,-8-open*3*k);g.fill()}g.restore()}
function swimIcon(x,y,s,t){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=8;
  const a=t*9;g.fillStyle='#FFD23F';g.beginPath();g.ellipse(-40+40*Math.cos(a),-20-30*Math.abs(Math.sin(a)),18,46,Math.cos(a)*0.9,0,7);g.fill();g.stroke();
  g.fillStyle='#14A39A';g.beginPath();g.ellipse(-50,8,80,24,0,0,7);g.fill();g.stroke();
  g.fillStyle='#FFD23F';g.beginPath();g.arc(48,-6,40,0,7);g.fill();g.stroke();g.fillStyle='#2A1E1A';g.beginPath();g.arc(48,-14,40,PI*1.05,PI*1.95);g.fill();
  g.lineWidth=5;g.fillStyle='rgba(255,255,255,0.6)';for(const dx of [40,70]){g.beginPath();g.arc(dx,-4,11,0,7);g.fill();g.stroke()}g.restore()}
function water(x,y,w,h,t){g.save();g.fillStyle='#1C8FD0';rr(x,y,w,h,24);g.fill();g.strokeStyle='#111';g.lineWidth=7;g.stroke();g.beginPath();rr(x,y,w,h,24);g.clip();g.strokeStyle='rgba(255,255,255,0.35)';g.lineWidth=5;for(let r2=0;r2<4;r2++){g.beginPath();for(let i=0;i<=40;i++){const xx=x+i*w/40,yy=y+30+r2*h/4+8*Math.sin(i*0.8+t*4+r2);i?g.lineTo(xx,yy):g.moveTo(xx,yy)}g.stroke()}g.restore()}
function gauge(x,y,R,v,max,label,col){g.save();g.translate(x,y);g.fillStyle='rgba(10,12,25,0.85)';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.arc(0,0,R,PI,0);g.closePath();g.fill();g.stroke();
  g.lineWidth=26;g.lineCap='round';g.strokeStyle='rgba(255,255,255,0.2)';g.beginPath();g.arc(0,-10,R*0.78,PI*1.02,PI*1.98);g.stroke();g.strokeStyle=col;g.beginPath();g.arc(0,-10,R*0.78,PI*1.02,PI*(1.02+0.96*clamp(v/max)));g.stroke();
  const an=PI*(1.02+0.96*clamp(v/max));g.strokeStyle='#fff';g.lineWidth=10;g.beginPath();g.moveTo(0,-10);g.lineTo(Math.cos(an)*R*0.62,-10+Math.sin(an)*R*0.62);g.stroke();g.fillStyle='#fff';g.beginPath();g.arc(0,-10,16,0,7);g.fill();g.restore();
  txt(Math.round(v)+' MPH',x,y-R*0.38,R*0.3,{fill:col,sw:12});txt(label,x,y+44,40,{sw:9})}
function zz(x,y,s,k,t){g.save();g.translate(x,y);g.scale(s,s);g.lineCap='round';g.lineJoin='round';
  const P=[[0,0],[-140,-120],[140,-240],[-140,-360],[140,-480],[0,-600]];g.setLineDash([22,20]);g.strokeStyle='#111';g.lineWidth=22;g.beginPath();P.forEach((p,i)=>i?g.lineTo(...p):g.moveTo(...p));g.stroke();g.strokeStyle='#FFD23F';g.lineWidth=12;g.stroke();g.setLineDash([]);
  // runner along path
  const L=P.length-1,u=clamp(k)*L,i=Math.min(L-1,Math.floor(u)),f=u-i,px=lerp(P[i][0],P[i+1][0],f),py=lerp(P[i][1],P[i+1][1],f);g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.arc(px,py,34,0,7);g.fill();g.stroke();g.restore()}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();GZ.a.visible=false;GZ.a.rotation.set(0,0,0);
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));SW.shot(mix(C0.p,[3.8,2.9,12.2],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('COULD YOU OUTRUN',W/2,215,88,{sw:18});txt('AN ALLIGATOR',W/2,335,118,{fill:'#7CE04A',sw:24});txt('LIKE IN GTA 6?',W/2,455,96,{fill:'#FFD23F',sw:21});g.restore();
    comic('GULP',W*0.76,1160,80,t,1.6,{life:1.1,rot:0.1,fill:'#fff'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);const k=seg(t,CU.c1,CU.c2);const sx=-4+k*2.5,gx=lerp(-13,sx-3.6,ease(k));
    putGuy(SW.S,sx,-0.8,6,PI/2);const s=Math.sin(t*9);guy.pose({armL:[1.5+1.2*s,0.9*s],armR:[1.5-1.2*s,-0.9*s],bendL:0.3,bendR:0.3,mouth:'o',mouthSize:1.0,wide:true,look:-0.8,headYaw:-0.7,jump:0.04*Math.sin(t*18)});
    GZ.a.visible=true;GZ.a.position.set(gx,-0.38,6);GZ.a.rotation.set(0,0,0);GZ.anim(t,t>4.3?0.5+0.5*Math.sin(t*10):0,1,14);
    SW.shot([sx-10,3.6,10.5],[sx-1.2,0.2,6]);
    for(let i=0;i<6;i++){const p=proj(new THREE.Vector3(gx-1.2-i*0.7,0.05,6+0.3*Math.sin(i)),SW.cam);g.save();g.globalAlpha=0.7*(1-i/6);g.fillStyle='#fff';g.beginPath();g.ellipse(p[0],p[1],40-i*4,12,0,0,7);g.fill();g.restore()}
    pill('IN THE WATER?',W/2,330,64,'#3FF0FF','#111',t,3.3,CU.c2);comic('NOPE!',W*0.72,700,110,t,4.45,{life:1.0,rot:0.1,fill:'#FF5A2E'})}
  else if(t<CU.c3){clear3d();setBG('teal');flash(t,CU.c2,0.15);const k=seg(t,6.0,11.0);
    panel(W/2,300,860,170);txt('SWIM RACE',W/2,262,70,{stroke:0,fill:'#3FF0FF'});txt('20 MPH  vs  ~5 MPH',W/2,334,48,{stroke:0});
    water(90,560,W-180,300,t);water(90,960,W-180,300,t);
    const gx=lerp(250,W-230,clamp(k*1.0)),sx=lerp(250,W-230,clamp(k*0.25));
    gatorIcon(gx,720,0.9,t,0.4+0.3*Math.sin(t*8));swimIcon(sx,1120,1.1,t);
    pill('GATOR 20 MPH',W/2-170,530,40,'#7CE04A','#111',t,6.6,CU.c3);pill('OLYMPIC SWIMMER ~5',W/2+90,930,40,'#FFD23F','#111',t,9.8,CU.c3);
    // finish line
    g.save();for(let i=0;i<14;i++){g.fillStyle=i%2?'#fff':'#111';g.fillRect(W-150,560+i*50,26,50)}g.restore();
    if(t>8.55){const s=pop(t,8.55);g.save();g.translate(W/2,1600);g.scale(s,s);g.rotate(-0.06);txt('4X FASTER',0,0,150,{fill:'#FF5A2E',sw:28});g.restore()}
    comic('ZOOM',W*0.68,880,80,t,6.8,{life:0.8,rot:-0.1,fill:'#fff'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);const k=seg(t,CU.c3,CU.c4);const tired=seg(t,14.3,14.9);
    const gxRun=34+k*9-tired*1.5,sxRun=36.5+k*12;GZ.a.visible=true;GZ.a.position.set(Math.min(gxRun,34+0.62*9),0.02,0.8);GZ.a.rotation.set(0,0,0);GZ.anim(t,tired?0.6:0.3+0.2*Math.sin(t*12),1-tired,16);
    putGuy(SW.S,sxRun,0.1,0.8,PI/2);guy.pose(run(t,{look:-0.6,headYaw:-0.5}));
    SW.shot([sxRun-10.5,2.8,6.5],[sxRun-1.8,0.7,0.8]);
    const sp=t<14.3?lerp(0,11,ease(seg(t,11.6,13.2))):lerp(11,1,ease(seg(t,14.3,15.2)));gauge(W/2,1760,200,sp,25,'GATOR ON LAND','#7CE04A');
    pill('BUT ON LAND...',W/2,330,64,'#D8C08A','#111',t,11.3,13.0);pill('ONLY SHORT BURSTS',W/2,330,60,'#FF8FB1','#111',t,14.0,CU.c4);
    if(t>14.6){const p=proj(new THREE.Vector3(GZ.a.position.x+1.5,1.1,0.8),SW.cam);for(let i=0;i<3;i++){const ph=(t*1.5+i/3)%1;g.save();g.globalAlpha=1-ph;g.fillStyle='#7FD8FF';g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.ellipse(p[0]+(i-1)*50,p[1]-40+ph*60,10,16,0,0,7);g.fill();g.stroke();g.restore()}comic('HUFF..',W*0.3,1180,64,t,14.7,{life:1.0,rot:-0.1,fill:'#fff'})}}
  else if(t<CU.c5){clear3d();setBG('linear-gradient(#5E8A5A,#2E4A2A)');flash(t,CU.c4,0.15);
    g.save();g.fillStyle='rgba(0,0,0,0.15)';for(let i=0;i<20;i++){g.beginPath();g.ellipse(hash(i)*W,600+hash(i*3)*1200,60,20,0,0,7);g.fill()}g.restore();
    gatorIcon(W/2,1560,0.8,t,0.3);zz(W/2,1440,1.25,seg(t,16.0,17.3),t);
    panel(W/2,330,820,150);txt('THE ZIGZAG TRICK?',W/2,330,68,{stroke:0,fill:'#FFD23F'});
    if(t>17.35){const s=pop(t,17.35);g.save();g.translate(W/2,1000);g.scale(s,s);cross(0,0,6);g.rotate(-0.1);txt('MYTH',0,0,180,{fill:'#FF4A4A',sw:30});g.restore()}}
  else if(t<CU.c6){flash(t,CU.c5,0.15);const k=seg(t,CU.c5,CU.c6);GZ.a.visible=true;GZ.a.position.set(52,0.02,0.8);GZ.anim(t,0.2,0,3);
    const sx=55+k*7;putGuy(SW.S,sx,0.1,0.8,PI/2);guy.pose(run(t,{mouth:'grin',wide:false}));
    SW.shot([46,2.6,3.2],[56,0.9,0.6]);pill('JUST RUN STRAIGHT',W/2,340,62,'#5BE37A','#111',t,18.2,CU.c6);comic('BYE!',W*0.74,900,110,t,18.6,{life:0.9,rot:0.1,fill:'#FFD23F'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.25));SW.shot(mix([2.6,3.4,13.5],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
