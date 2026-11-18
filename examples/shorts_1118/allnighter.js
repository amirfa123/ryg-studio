// ===== All-nighter for GTA 6 (body/everyday + GTA) =====
const TT=21.7;
guy.outfit({headphones:1});
const P0=[3.1,2.5,-2.0],L0=[0,1.4,1.75];
function loadTV(R,prog,msg='LOADING...',col='#3FF0FF'){tvDraw(R,(c,w,h)=>{const gr=c.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#2A0E5A');gr.addColorStop(0.55,'#FF5E8A');gr.addColorStop(1,'#FFB36B');c.fillStyle=gr;c.fillRect(0,0,w,h);
  c.fillStyle='#FFE680';c.beginPath();c.arc(w/2,h*0.62,70,0,7);c.fill();for(let i=0;i<16;i++){const bw=30+hash(i*3)*26,bh=60+hash(i*7)*130,x=i*42-12;c.fillStyle=i%2?'#1E1340':'#2A1A55';c.fillRect(x,h-bh,bw,bh);c.fillStyle='#FF3DA6';c.fillRect(x,h-bh,bw,4)}
  for(const x of [70,560]){c.strokeStyle='#120A26';c.lineWidth=8;c.beginPath();c.moveTo(x,h);c.quadraticCurveTo(x+10,h-120,x+20,h-170);c.stroke();c.fillStyle='#120A26';for(let k=0;k<6;k++){c.save();c.translate(x+20,h-170);c.rotate(k/6*Math.PI*2);c.beginPath();c.ellipse(32,0,36,8,0,0,7);c.fill();c.restore()}}
  c.fillStyle='rgba(0,0,0,0.55)';c.fillRect(150,40,340,90);c.font='900 44px Inter';c.textAlign='center';c.textBaseline='middle';c.fillStyle=col;c.fillText(msg,320,72);
  if(prog>=0){c.fillStyle='#222';c.fillRect(170,108,300,14);c.fillStyle='#3FF0FF';c.fillRect(170,108,300*prog,14)}})}
function crashTV(R){tvDraw(R,(c,w,h)=>{c.fillStyle='#120A26';c.fillRect(0,0,w,h);c.font='900 72px Inter';c.textAlign='center';c.textBaseline='middle';c.lineWidth=10;c.strokeStyle='#000';c.font='900 84px Inter';c.strokeText('CRASHED!',w/2,h/2);c.fillStyle='#FF4A4A';c.fillText('CRASHED!',w/2,h/2)})}
const PAD={reachL:[0.15,1.0,0.6],reachR:[-0.15,1.0,0.6]};
function sitPad(R,o={}){putGuy(R.S,0,0.12,1.75,PI);props.pad.visible=true;props.pad.position.set(0,1.0,0.62);guy.pose({...SIT,...PAD,mouth:'smile',...o})}
function brain(x,y,s,fill,t){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#FF9EC0';g.strokeStyle='#111';g.lineWidth=9;g.beginPath();g.ellipse(0,0,150,110,0,0,7);g.fill();g.stroke();
  g.save();g.beginPath();g.ellipse(0,0,145,105,0,0,7);g.clip();const n=Math.floor(fill*34);for(let i=0;i<n;i++){const bx=(hash(i*3.1)-0.5)*260,by=95-((i*37)%200)*(0.3+0.7*fill)-hash(i)*40;g.fillStyle='#8E5BFF';g.beginPath();g.arc(bx,by+Math.sin(t*3+i)*3,15,0,7);g.fill();g.strokeStyle='#2A1460';g.lineWidth=4;g.stroke()}g.restore();
  g.strokeStyle='#C2577E';g.lineWidth=7;g.lineCap='round';for(const [a,b,c2,d] of [[-110,-20,-60,-60],[-40,-80,10,-40],[30,-70,90,-30],[-90,40,-30,10],[20,20,80,50],[-20,70,30,85]]){g.beginPath();g.moveTo(a,b);g.quadraticCurveTo((a+c2)/2,b-25,c2,d);g.stroke()}
  g.strokeStyle='#111';g.lineWidth=9;g.beginPath();g.moveTo(0,-108);g.lineTo(0,100);g.stroke();g.restore()}
// stage props: red button pedestal
function buttonProp(){return stageProp('btn',p=>{part(p,new THREE.CylinderGeometry(0.22,0.26,1.0,24),toon(0xEDEDF5),[0,0.5,0],[1,1,1],[0,0,0],0.015);part(p,new THREE.CylinderGeometry(0.2,0.2,0.06,24),toon(0x2A2A35),[0,1.02,0],[1,1,1],[0,0,0],0.01);p.userData.cap=part(p,new THREE.CylinderGeometry(0.15,0.15,0.08,24),toon(0xFF3030),[0,1.08,0],[1,1,1],[0,0,0],0.01);
  const fl=new THREE.Group();p.add(fl);part(fl,new THREE.PlaneGeometry(30,30),toon(0x2B2348),[0,0,0],[1,1,1],[-PI/2,0,0],0)})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();const st=scene('stage');if(st.btn)st.btn.visible=false;
  if(t<4.5){const R=scene('room');loadTV(R,clamp(t/9));clockDraw(R,11,58);sitPad(R,{blink:BLINK(t),mouth:'grin',jump:0.008*Math.sin(t*2*PI/1.5)});
    const k=ease(seg(t,0.5,4.5));R.shot(mix(P0,[2.6,2.3,-1.45],k),L0);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,4.15,4.45));g.save();g.globalAlpha=a;txt('WHAT HAPPENS TO YOUR BODY IF YOU',W/2,215,50,{sw:13});txt('STAY UP ALL NIGHT',W/2,310,92,{fill:'#FFD23F',sw:20});txt('PLAYING GTA 6?',W/2,415,92,{fill:'#3FF0FF',sw:20});g.restore();
    comic('12 AM LAUNCH!',W*0.5,560,70,t,1.6,{life:2.4,rot:-0.06,fill:'#FF7AC2'})}
  else if(t<8.5){const R=scene('room');loadTV(R,0.5);clockDraw(R,2,10+t*4);const yawn=seg(t,4.9,5.3)*(1-seg(t,6.3,6.7));
    if(yawn>0){putGuy(R.S,0,0.12,1.75,PI);guy.pose({...SIT,armL:[lerp(0.3,2.7,yawn),0],armR:[lerp(0.3,2.7,yawn),0],bendL:0.4*yawn,bendR:0.4*yawn,mouth:'o',mouthSize:1+0.8*yawn,blink:yawn>0.6,headPitch:-0.25*yawn})}
    else sitPad(R,{blink:t>7.6?((t*1.3)%1<0.35):BLINK(t),headPitch:t>6.7?0.18:0,mouth:t>6.7?'o':'smile'});
    R.shot(mix([2.3,2.05,-1.0],[2.0,2.0,-0.7],seg(t,4.5,8.5)),[0,1.75,1.75]);flash(t,4.5,0.15);
    panel(W/2,330,780,400,'rgba(20,10,40,0.82)','#8E5BFF');brain(W/2-150,320,0.95,seg(t,4.8,8.3),t);
    txt('SLEEP',W/2+220,250,52,{fill:'#fff',sw:12});txt('PRESSURE',W/2+220,305,52,{fill:'#fff',sw:12});bar(W/2+80,350,280,62,seg(t,4.8,8.3),seg(t,4.8,8.3)>0.7?'#FF4A4A':'#8E5BFF','');
    pill('ADENOSINE',W/2,600,58,'#8E5BFF','#fff',t,7.3,8.48);comic('YAAAWN',W*0.72,1130,90,t,5.1,{life:1.3,rot:0.08,fill:'#fff'})}
  else if(t<10.1){const S=scene('stage');setBG('neon');putGuy(S.S,0,-0.2,0,0.35);const k=seg(t,8.5,10.1);guy.pose(idle(t,{headPitch:0.25,headRoll:0.12*Math.sin(t*2),mouth:'o',mouthSize:0.45,blink:(t*1.5)%1<0.4,armL:[0.12,0],armR:[0.12,0]}));S.shot([0,1.0,9.6],[0,1.75,0]);flash(t,8.5,0.15);
    const hrs=Math.min(24,Math.floor(lerp(0,24.99,easeOut(seg(t,8.6,9.8)))));const ang=lerp(0,24,easeOut(seg(t,8.6,9.8)));clockFace(W/2,380,180,ang,(ang%1)*60,0.3*Math.sin(t*12)**2);
    panel(W/2,650,560,120);txt(hrs+' HOURS',W/2,650,76,{fill:hrs>=24?'#FF4A4A':'#fff',stroke:0});txt('AWAKE',W/2,745,60,{fill:'#FFD23F',sw:14})}
  else if(t<13.9){const S=scene('stage');setBG('teal');const B=buttonProp();B.visible=true;B.position.set(-0.78,0,0.28);putGuy(S.S,0,0,0,0);
    const hit=seg(t,11.45,11.6)*(1-seg(t,12.2,12.6));const late=t>10.5&&t<11.45;
    guy.pose({armL:[0.3,0],reachR:[lerp(-0.62,-0.75,hit),lerp(1.35,1.11,hit),lerp(0.25,0.28,hit)],poleR:[-1,-0.3,0.3],mouth:t>11.6&&t<12.8?'teeth':'o',teethGap:0.4,blink:late?(t*1.4)%1<0.45:BLINK(t),headPitch:late?0.2:0,wide:t>11.6&&t<12.8,yaw:0.25});
    B.userData.cap.position.y=1.08-0.04*hit;B.userData.cap.material.color.set(t>10.5?0x5BE37A:0xFF3030);
    S.shot(mix([1.6,2.1,7.6],[1.2,1.9,6.6],seg(t,10.1,13.9)),[-0.3,1.75,0]);flash(t,10.1,0.15);
    panel(W/2,330,860,330,'rgba(10,12,25,0.85)');txt('REACTION TIME',W/2,215,54,{fill:'#FFD23F',stroke:0});
    const r1=seg(t,10.5,10.8),r2=seg(t,10.5,11.5);txt('RESTED',W/2-250,310,44,{stroke:0});bar(W/2-120,282,470,58,r1*0.4,'#5BE37A','');txt('24H AWAKE',W/2-250,410,44,{stroke:0});bar(W/2-120,382,470,58,r2*0.95,'#FF4A4A','');
    pill('GO!',W*0.25,640,64,'#5BE37A','#111',t,10.5,11.4);comic('TOO SLOW!',W*0.66,1150,100,t,11.6,{life:1.0,rot:-0.08,fill:'#FF4A4A'});
    pill('= LEGALLY DRUNK',W/2,600,62,'#FF4A4A','#fff',t,12.5,13.88)}
  else if(t<17.7){const R=scene('room');loadTV(R,0.85,'RACE: LAP 3','#FFE14D');clockDraw(R,5,40);const nod=seg(t,14.9,15.3)*(1-seg(t,16.9,17.1));
    sitPad(R,{blink:nod>0.3||(t*1.1)%1<0.3,headPitch:lerp(0.15,0.55,nod),headRoll:0.15*nod,mouth:nod>0.5?'o':'o',mouthSize:nod>0.5?0.6:0.45,wide:t>17.0&&t<17.7});
    R.shot(mix([2.6,2.2,-1.4],[2.3,2.1,-1.1],seg(t,13.9,17.7)),[0,1.5,1.75]);flash(t,13.9,0.15);
    const dk=seg(t,15.1,15.4)*(1-seg(t,16.85,17.0));if(dk>0){g.fillStyle=`rgba(0,0,0,${0.72*dk})`;g.fillRect(0,0,W,H);g.save();g.globalAlpha=dk;txt('Z',W*0.62,700-((t*120)%90),110,{fill:'#9DB8FF',sw:18});txt('z',W*0.7,600-((t*90)%70),80,{fill:'#9DB8FF',sw:14});
      panel(W/2,1000,420,140);txt('0:0'+Math.min(3,1+Math.floor((t-15.2)*1.3)),W/2,1000,90,{stroke:0});g.restore()}
    pill('MICROSLEEP',W/2,330,66,'#9DB8FF','#111',t,14.8,16.9);comic('WHA?!',W*0.7,700,100,t,17.0,{life:0.7,rot:0.1,fill:'#fff'})}
  else if(t<20.0){const R=scene('room');crashTV(R);clockDraw(R,5,41);sitPad(R,{look:Math.sin(t*4),headYaw:0.5*Math.sin(t*3),mouth:'o',mouthSize:0.8,wide:true,blink:false});
    R.shot(mix([0.3,3.4,7.4],[0,3.3,6.8],seg(t,17.7,20)),[0,1.6,-1.0]);flash(t,17.7,0.15);comic('HUH?',W*0.25,1150,110,t,17.9,{life:1.1,rot:-0.1,fill:'#fff'});
    pill("DIDN'T EVEN NOTICE",W/2,330,58,'#FFD23F','#111',t,18.4,19.95)}
  else{const R=scene('room');const k=ease(seg(t,20.0,21.3));loadTV(R,0);clockDraw(R,11,58);sitPad(R,{blink:BLINK(t-TT),mouth:'grin',jump:0.008*Math.sin((t-TT)*2*PI/1.5)});R.shot(mix([2.0,2.1,-0.8],P0,k),L0);flash(t,20.0,0.15)}
  vignette();captions(t)};
