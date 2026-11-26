// ===== What happens to your body when you crash in GTA 6? (body/everyday + GTA 6) =====
const TT=20.0;
const CU={c1:3.55,c2:5.0,c3:7.65,c4:11.3,c5:15.05,c6:18.3};
guy.outfit({headphones:1,chain:1});
const P0=[3.1,2.5,-2.0],L0=[0,1.4,1.75];
// TV content: neon road, original car driving; crash version
function driveTV(R,t,crash=0){tvDraw(R,(c,w,h)=>{const gr=c.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#1B0B45');gr.addColorStop(0.5,'#8E2B8F');gr.addColorStop(1,'#FF8A6B');c.fillStyle=gr;c.fillRect(0,0,w,h);
  c.fillStyle='#FFE680';c.beginPath();c.arc(w/2,h*0.5,60,0,7);c.fill();
  for(let i=0;i<18;i++){const bw=28+hash(i*3)*24,bh=40+hash(i*7)*90,x=((i*40-((t*60)%40))-20);c.fillStyle=i%2?'#1E1340':'#2A1A55';c.fillRect(x,h*0.55-bh,bw,bh);c.fillStyle=['#FF3DA6','#3FF0FF','#FFE14D'][i%3];c.fillRect(x,h*0.55-bh,bw,3)}
  c.fillStyle='#2E2B40';c.beginPath();c.moveTo(0,h);c.lineTo(w*0.42,h*0.55);c.lineTo(w*0.58,h*0.55);c.lineTo(w,h);c.closePath();c.fill();
  c.fillStyle='#FFD23F';for(let k=0;k<6;k++){const z=((k/6+t*1.2)%1);const y=h*0.55+z*z*h*0.45,ww=4+z*16,hh=4+z*26;c.fillRect(w/2-ww/2,y,ww,hh)}
  // palms
  for(const [px,s] of [[60,1],[580,1],[150,0.6],[490,0.6]]){c.strokeStyle='#120A26';c.lineWidth=7*s;c.beginPath();c.moveTo(px,h*0.62);c.quadraticCurveTo(px+8,h*0.62-90*s,px+14,h*0.62-130*s);c.stroke();c.fillStyle='#120A26';for(let k=0;k<6;k++){c.save();c.translate(px+14,h*0.62-130*s);c.rotate(k/6*Math.PI*2);c.beginPath();c.ellipse(26*s,0,30*s,7*s,0,0,7);c.fill();c.restore()}}
  // wall / barrier ahead when crashing
  const cx=w/2+(crash>0?0:Math.sin(t*2.2)*40);
  if(crash>0){const s=0.4+0.6*Math.min(1,crash*1.4);c.fillStyle='#FFD23F';c.fillRect(w/2-150*s,h*0.75-90*s,300*s,120*s);c.fillStyle='#16161E';for(let k=0;k<6;k++)c.fillRect(w/2-150*s+k*50*s,h*0.75-90*s,22*s,120*s)}
  // player car (rear view)
  c.save();c.translate(cx,h*0.86);if(crash>0.7){c.rotate(0.25*Math.sin(crash*20));}
  c.fillStyle='#2FD6FF';c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.roundRect(-80,-40,160,50,12);c.fill();c.stroke();c.beginPath();c.roundRect(-55,-72,110,36,10);c.fill();c.stroke();
  c.fillStyle='#FF3030';c.fillRect(-72,-28,28,10);c.fillRect(44,-28,28,10);c.fillStyle='#111';c.fillRect(-70,8,30,16);c.fillRect(40,8,30,16);c.restore();
  if(crash>0.7){c.save();c.translate(w/2,h*0.62);const k=Math.min(1,(crash-0.7)*4);c.scale(k,k);c.fillStyle='#FFE14D';c.beginPath();for(let i=0;i<16;i++){const a=i/16*Math.PI*2,rr2=i%2?60:130;c.lineTo(Math.cos(a)*rr2,Math.sin(a)*rr2)}c.closePath();c.fill();c.fillStyle='#FF4A4A';c.font='900 64px Inter';c.textAlign='center';c.textBaseline='middle';c.lineWidth=8;c.strokeStyle='#000';c.strokeText('CRASH!',0,0);c.fillText('CRASH!',0,0);c.restore()}
  })}
const PAD={reachL:[0.15,1.0,0.6],reachR:[-0.15,1.0,0.6]};
function sitPad(R,o={}){putGuy(R.S,0,0.12,1.75,PI);props.pad.visible=true;props.pad.position.set(0,1.0,0.62);guy.pose({...SIT,...PAD,mouth:'smile',...o})}
function buttonProp(){return stageProp('btn',p=>{part(p,new THREE.CylinderGeometry(0.22,0.26,1.0,24),toon(0xEDEDF5),[0,0.5,0],[1,1,1],[0,0,0],0.015);part(p,new THREE.CylinderGeometry(0.2,0.2,0.06,24),toon(0x2A2A35),[0,1.02,0],[1,1,1],[0,0,0],0.01);p.userData.cap=part(p,new THREE.CylinderGeometry(0.15,0.15,0.08,24),toon(0xFF3030),[0,1.08,0],[1,1,1],[0,0,0],0.01);
  const fl=new THREE.Group();p.add(fl);part(fl,new THREE.PlaneGeometry(30,30),toon(0x2B2348),[0,0,0],[1,1,1],[-PI/2,0,0],0);
  p.userData.lamp=basic(0xFF2A2A);for(const x of [-2.4,2.4]){part(p,cap(0.05,2.6),toon(0x2A2A35),[x,1.3,-1.6]);part(p,SPH,p.userData.lamp,[x,2.75,-1.6],[0.28,0.22,0.28],[0,0,0],0.01)}})}
// 2D head + brain diagram
function headDiag(t,cx,cy,s,kFast,kSlow){g.save();g.translate(cx,cy);g.scale(s,s);
  g.fillStyle='#FFD84A';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.moveTo(-170,220);g.lineTo(-170,60);g.bezierCurveTo(-240,-40,-200,-250,0,-260);g.bezierCurveTo(200,-260,250,-90,220,0);g.lineTo(270,70);g.lineTo(225,95);g.lineTo(230,150);g.bezierCurveTo(200,190,140,200,90,200);g.lineTo(80,220);g.closePath();g.fill();g.stroke();
  // eye
  g.fillStyle='#fff';g.beginPath();g.ellipse(170,-20,40,30,0,0,7);g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(185,-20,13,0,7);g.fill();
  // brain
  g.fillStyle='#FF9EC0';g.beginPath();g.ellipse(-30,-110,150,100,0,0,7);g.fill();g.stroke();
  g.strokeStyle='#C2577E';g.lineWidth=6;for(const [a,b,c2,d] of [[-140,-120,-90,-170],[-70,-190,-10,-150],[20,-180,90,-140],[-120,-60,-60,-90],[20,-90,90,-70]]){g.beginPath();g.moveTo(a,b);g.quadraticCurveTo((a+c2)/2,b-25,c2,d);g.stroke()}
  // amygdala (deep, small) and cortex label spot
  const AM=[-10,-50],CX=[-110,-170];
  g.lineCap='round';
  // slow path: eye -> back of brain -> cortex
  g.setLineDash([16,14]);g.strokeStyle='rgba(60,180,255,0.35)';g.lineWidth=12;g.beginPath();g.moveTo(150,-20);g.quadraticCurveTo(-160,-20,CX[0],CX[1]);g.stroke();
  g.strokeStyle='rgba(255,60,60,0.35)';g.beginPath();g.moveTo(150,-20);g.lineTo(AM[0],AM[1]);g.stroke();g.setLineDash([]);
  // dots travelling
  const pq=(k,p0,p1,p2)=>[(1-k)*(1-k)*p0[0]+2*(1-k)*k*p1[0]+k*k*p2[0],(1-k)*(1-k)*p0[1]+2*(1-k)*k*p1[1]+k*k*p2[1]];
  if(kSlow>0){const p=pq(Math.min(1,kSlow),[150,-20],[-160,-20],CX);g.fillStyle='#3FB4FF';g.beginPath();g.arc(p[0],p[1],20,0,7);g.fill();g.lineWidth=6;g.strokeStyle='#111';g.stroke()}
  if(kFast>0){const k=Math.min(1,kFast);const p=[lerp(150,AM[0],k),lerp(-20,AM[1],k)];g.fillStyle='#FF3D3D';g.beginPath();g.arc(p[0],p[1],20,0,7);g.fill();g.lineWidth=6;g.strokeStyle='#111';g.stroke()}
  const glow=kFast>=1?0.6+0.4*Math.sin(t*20):0;g.fillStyle=kFast>=1?`rgba(255,40,40,${0.6+0.4*glow})`:'#B04070';g.beginPath();g.ellipse(AM[0],AM[1],34,24,0,0,7);g.fill();g.lineWidth=6;g.strokeStyle='#111';g.stroke();
  g.restore()}
function heartIcon(x,y,s,t,bpm){const beat=1+0.12*Math.max(0,Math.sin(t*bpm/60*PI*2))**8;heart(x,y,s*beat,'#FF3D7F')}
const C0={p:P0,l:L0};
function openScene(t){const R=scene('room');driveTV(R,t);clockDraw(R,9,40);sitPad(R,{blink:BLINK(t),mouth:'grin',jump:0.008*Math.sin(t*2*PI/1.0),headYaw:0.05*Math.sin(t*2*PI/2.0)});return R}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();const st=scene('stage');if(st.btn)st.btn.visible=false;
  if(t<CU.c1){const R=openScene(t);const k=ease(seg(t,0.3,CU.c1));R.shot(mix(P0,[2.6,2.3,-1.45],k),L0);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT HAPPENS TO YOUR BODY',W/2,200,58,{sw:14});txt('WHEN YOU CRASH',W/2,300,96,{fill:'#FFD23F',sw:20});txt('IN GTA 6?',W/2,410,110,{fill:'#3FF0FF',sw:22});g.restore()}
  else if(t<CU.c2){const R=scene('room');const cr=seg(t,CU.c1,4.55);driveTV(R,t,cr);clockDraw(R,9,41);
    const hit=t>4.4;sitPad(R,{blink:false,mouth:hit?'o':'smile',mouthSize:1.0,wide:hit,jump:hit&&t<4.6?0.05:0});
    const sh=hit&&t<4.8?0.03*Math.sin(t*80):0;R.shot([0.9+sh,2.1,3.7],[0,1.95,-2.9]);flash(t,CU.c1,0.15);
    eyeIcon(W*0.22,330,1.1);pill('YOUR EYES SEE IT',W*0.56,330,48,'#FFFFFF','#111',t,3.75,CU.c2);comic('BOOM!',W*0.28,1640,110,t,4.45,{life:0.6,rot:0.1,fill:'#FF4A4A'})}
  else if(t<CU.c3){const S=scene('stage');setBG('blue');putGuy(S.S,0,0,0,0.3);
    const think=t>6.6;guy.pose(idle(t,{armL:[0.3,0],armR:[think?2.5:2.2,think?0.5:0.2],bendR:0.35,mouth:'o',mouthSize:0.6,blink:BLINK(t),headPitch:-0.1,look:0.3}));
    S.shot([0.4,1.0,8.4],[0,2.05,0]);flash(t,CU.c2,0.15);
    panel(W/2,500,900,640,'rgba(10,12,30,0.88)','#3FB4FF');headDiag(t,W/2+30,545,1.15,seg(t,5.3,5.9),seg(t,5.5,7.4));
    if(t>5.9){g.save();txt('FAST LANE',W/2-270,745,44,{fill:'#FF4A4A',sw:10});txt('⚡ 0.1 s',W/2-270,795,40,{fill:'#fff',sw:9});g.restore()}
    pill('THINKING BRAIN',W/2-150,230,44,'#3FB4FF','#111',t,5.5,CU.c3);
    if(t>7.0)txtA('"IT\'S JUST A GAME"',W/2,872,46,seg(t,7.0,7.25),{fill:'#9BD8FF',sw:10});
    comic('TOO LATE!',W*0.72,1130,90,t,7.1,{life:0.55,rot:-0.08,fill:'#FFD23F'})}
  else if(t<CU.c4){const S=scene('stage');setBG('red');const B=buttonProp();B.visible=true;B.position.set(-0.78,0,0.28);putGuy(S.S,0,0,0,0);
    const press=10.15;const hit=seg(t,press-0.15,press)*(1-seg(t,press+0.6,press+0.9));const on=t>press;
    guy.pose({armL:[on?2.4:0.3,on?0.4:0],bendL:on?0.6:0,reachR:[lerp(-0.62,-0.75,hit),lerp(1.4,1.11,hit),lerp(0.25,0.28,hit)],poleR:[-1,-0.3,0.3],mouth:on?'teeth':'o',teethGap:0.6,wide:on,blink:false,yaw:0.25,jump:on&&t<press+0.25?0.05:0});
    B.userData.cap.position.y=1.08-0.04*hit;B.userData.lamp.color.set(on&&Math.sin(t*25)>0?0xFF2A2A:0x551010);
    const sh=on&&t<press+0.4?0.04*Math.sin(t*70):0;S.shot(mix([1.6+sh,2.0,7.4],[1.2+sh,1.8,6.2],seg(t,CU.c3,CU.c4)),[-0.3,1.55,0]);flash(t,CU.c3,0.15);
    pill('ALARM CENTER',W/2,250,62,'#FFD23F','#111',t,7.8,CU.c4);pill('= AMYGDALA',W/2,370,62,'#FF4A4A','#fff',t,9.0,CU.c4);
    if(on){g.fillStyle=`rgba(255,0,0,${0.18+0.14*Math.sin(t*25)})`;g.fillRect(0,0,W,H)}
    comic('PANIC!',W*0.5,560,120,t,press,{life:1.1,rot:0.1,fill:'#FF4A4A'})}
  else if(t<CU.c5){const R=scene('room');driveTV(R,t,1.2);clockDraw(R,9,42);const fl=seg(t,11.45,11.6)*(1-seg(t,12.3,12.8));
    sitPad(R,{blink:false,mouth:'o',mouthSize:1.1,wide:true,jump:0.12*fl+0.01*Math.sin(t*30)*(t>12.4?1:0),headPitch:-0.15*fl,brow:0.02});
    const sh=t>11.45&&t<11.9?0.05*Math.sin(t*70):0;R.shot(mix([0.6+sh,2.0,-1.6],[0.5+sh,2.0,-1.25],seg(t,CU.c4,CU.c5)),[0,1.85,1.75]);flash(t,CU.c4,0.15);
    comic('FLINCH!',W*0.5,330,110,t,11.5,{life:0.8,rot:-0.1,fill:'#FFD23F'});
    if(t>12.2){const bpm=Math.round(lerp(72,118,easeOut(seg(t,12.4,13.4))));const a=pop(t,12.2);g.save();g.translate(W*0.27,560);g.scale(a,a);panel(0,0,330,250,'rgba(10,12,25,0.88)','#FF3D7F',30);heartIcon(0,-30,1.05,t,bpm);txt(bpm+' BPM',0,80,54,{stroke:0,fill:'#fff'});g.restore()}
    if(t>13.3){const a=pop(t,13.3);g.save();g.translate(W*0.73,560);g.scale(a,a);panel(0,0,350,250,'rgba(10,12,25,0.88)','#FFD23F',30);txt('ADRENALINE',0,-60,44,{stroke:0,fill:'#FFD23F'});g.restore();bar(W*0.73-140,560,280,60,a>0.5?easeOut(seg(t,13.4,14.6)):0,'#FFD23F','')}
  }
  else if(t<CU.c6){const R=scene('room');driveTV(R,t);clockDraw(R,9,43);const calm=t>17.0;
    sitPad(R,{blink:BLINK(t),mouth:calm?'o':'smile',mouthSize:0.7,wide:calm,jump:calm?0.012*Math.sin(t*40):0,headYaw:calm?0.3*Math.sin(t*6):0});
    R.shot(mix([0.2,3.3,7.4],[0,3.1,6.6],seg(t,CU.c5,CU.c6)),[0,1.5,-1.0]);flash(t,CU.c5,0.15);
    pill('SAFE ON THE COUCH',W/2,280,56,'#5BE37A','#111',t,15.3,CU.c6);if(t>15.6)check(W*0.18,280,0.9*pop(t,15.6));
    pill('BODY: NOT CONVINCED',W/2,420,56,'#FF4A4A','#fff',t,16.9,CU.c6);comic('BRUH',W*0.75,1120,96,t,17.5,{life:0.7,rot:0.1,fill:'#FF8FC8'})}
  else{const tt=t-TT;const R=openScene(tt);const k=ease(seg(t,CU.c6,TT-0.1));R.shot(mix([2.2,2.4,-1.2],P0,k),L0);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
