// ===== Chapter 1: intro (global 0 - 23.0) =====
const T0=0,TT=23.0;
const SUNSET='radial-gradient(circle at 72% 58%,#FFF0A0 0,#FFD27A 5%,rgba(255,180,107,0) 12%),'+BGS.sunset;
function skyline2D(t,y0){g.save();g.fillStyle='#1B1240';for(let i=0;i<26;i++){const w=60+hash(i)*60,h=120+hash(i*3)*260,x=i*78-30;g.fillRect(x,y0-h,w,h+400);g.fillStyle=hash(i*5)<0.5?'#FF3DA6':'#3FF0FF';g.fillRect(x,y0-h,w,6);g.fillStyle='#1B1240'}
  for(let i=0;i<140;i++){const x=(hash(i*7.3)*W*1.1)%W,y=y0-30-hash(i*2.9)*300;if(hash(i*11)<0.6){g.fillStyle=hash(i)<0.5?'#FFE680':'#7FF6FF';g.fillRect(x,y,10,12)}}g.restore()}
function tinyGuy(x,y,s,rot){g.save();g.translate(x,y);g.rotate(rot);g.scale(s,s);g.fillStyle='#FFCC2E';g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.arc(0,0,22,0,7);g.fill();g.stroke();g.fillStyle='#14939A';g.beginPath();g.arc(0,0,22,0.2,PI-0.2);g.fill();g.fillStyle='#111';g.fillRect(-10,-6,6,6);g.fillRect(4,-6,6,6);g.restore()}
function guideTV(o,t){tvDraw(o,(c,w,h)=>{const gr=c.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#3A1670');gr.addColorStop(1,'#FF5E8A');c.fillStyle=gr;c.fillRect(0,0,w,h);c.fillStyle='rgba(255,230,128,0.9)';c.beginPath();c.arc(w*0.7,h*0.62,70,0,7);c.fill();c.fillStyle='#1B1240';for(let i=0;i<12;i++){const bw=40+hash(i)*30,bh=60+hash(i*3)*120;c.fillRect(i*56,h-bh,bw,bh)}
  c.font='900 54px Inter';c.textAlign='center';c.lineWidth=10;c.strokeStyle='#111';c.strokeText('5-MINUTE GUIDE',w/2,90);c.fillStyle='#fff';c.fillText('5-MINUTE GUIDE',w/2,90);c.font='900 34px Inter';c.fillStyle='#3FF0FF';c.strokeText('BEFORE YOU PLAY',w/2,140);c.fillText('BEFORE YOU PLAY',w/2,140)})}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<4.0){const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.car.c.position.set(2.4,0,-1.2);C.car.c.rotation.y=0;C.car.spin(0);C.cop.c.visible=false;
    putGuy(C.S,-0.9,0.18,-3.0,0.25);guy.pose(idle(t,{mouth:t>2.6?'grin':'smile',armR:[0.3,0],armL:[0.3,0]}));
    const k=ease(seg(t,0,4.0));C.shot(mix([0.6,2.6,13.5],[0.2,1.9,8.6],k),mix([0.6,2.2,-3],[0.0,1.6,-3],k));
    titleBlock(easeOut(seg(t,0.05,0.4))*(1-seg(t,3.6,3.95)),'WHAT DO YOU NEED TO KNOW','BEFORE YOU PLAY GTA 6?',130);
    comic('?!',W*0.36,H*0.47,120,t,2.4,{life:1.4,rot:-0.15,fill:'#fff'});flash(t,0,0.25)}
  else if(t<8.6){clear3d();setBG('neon');const u=t-4.0;skyline2D(t,H-60);
    for(let i=0;i<90;i++){const st=hash(i*3.7)*3.6,d=u-st;if(d<0)continue;const x=W*0.08+hash(i*5.3)*W*0.84,y=-60+d*d*900+d*120;if(y>H-140)continue;tinyGuy(x,y,1.6+hash(i)*1.0,d*4*(hash(i*2)-0.5))}
    pill('MIDNIGHT TONIGHT',W/2,130,58,'#FF3DA6','#fff',t,4.15,8.55);comic('MILLIONS!',W*0.5,H*0.42,150,t,5.7,{life:1.6,rot:-0.06});
    pill('DROPPING INTO VICE CITY',W/2,H*0.62,46,'#fff','#111',t,7.0,8.55);flash(t,4.0,0.2)}
  else if(t<12.4){const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.car.c.position.set(-14,0,-1.2);C.cop.c.visible=false;const u=t-8.6;const stop=seg(t,10.0,10.3);
    const z=lerp(-4.2,-3.4,Math.min(u,1.6)/1.6);putGuy(C.S,-1.6+Math.min(u,1.5)*1.3,0.18,-3.3,0.9-0.9*stop);
    guy.pose(t<10.1?walk(t):idle(t,{mouth:'teeth',teethGap:0.4,wide:true,armL:[0.9,0],armR:[0.9,0],bendL:0.6,bendR:0.6}));
    C.shot([1.8,1.9,5.8],[-0.2,1.3,-3.4]);
    for(let k=0;k<3;k++){const tk=10.4+k*0.35;if(t>tk){g.save();g.globalAlpha=1-seg(t,12.1,12.4);cross(W*(0.62+k*0.11),H*0.3+(k%2)*60,1.3*pop(t,tk));g.restore()}}
    pill('THE SAME MISTAKES',W*0.5,H*0.72,50,'#FF4A4A','#fff',t,10.4,12.35);flash(t,8.6,0.2)}
  else if(t<15.3){const R=scene('room');guideTV(R,t);clockDraw(R,11,22+t);putGuy(R.S,0,0.12,1.75,PI);props.pad.visible=true;props.pad.position.set(0,1.0,0.62);
    guy.pose({...SIT,reachL:[0.15,1.0,0.6],reachR:[-0.15,1.0,0.6],blink:BLINK(t),mouth:'smile',headPitch:-0.05});
    const k=ease(seg(t,12.4,15.3));R.shot(mix([1.5,3.2,5.8],[0.9,3.0,4.9],k),[0,1.9,-2.5]);flash(t,12.4,0.2)}
  else if(t<17.9){const R=scene('room');guideTV(R,t);putGuy(R.S,0,0.12,1.75,PI);props.pad.visible=true;props.pad.position.set(0,1.0,0.62);
    guy.pose({...SIT,reachL:[0.15,1.0,0.6],reachR:[-0.15,1.0,0.6],blink:BLINK(t),mouth:'grin',headPitch:-0.1,jump:0.03*Math.abs(Math.sin(t*6))});
    R.shot([0.6,2.0,-2.3],[0,1.25,1.8]);pill('EVERYTHING YOU NEED TO KNOW',W/2,120,52,'#FFD23F','#111',t,15.4,17.85);flash(t,15.3,0.15)}
  else{const S=scene('stage');setBG('teal');putGuy(S.S,1.6,0,0,-0.35);const pt=seg(t,18.0,18.4);
    guy.pose(idle(t,{armR:[0.3+1.15*easeOut(pt),-0.2*pt],armL:[0.3,0],mouth:t>19.8?'grin':'smile',headYaw:-0.25}));S.shot([0,1.3,9.5],[0,1.1,0]);
    const a=easeOut(seg(t,18.0,18.4));g.save();g.globalAlpha=a;g.translate(W*0.32,H*0.5);g.scale(0.9+0.1*a,0.9+0.1*a);g.fillStyle='#C98B4A';g.strokeStyle='#111';g.lineWidth=8;rr(-250,-330,500,640,30);g.fill();g.stroke();g.fillStyle='#FFFDF4';rr(-215,-270,430,560,16);g.fill();g.stroke();
    g.fillStyle='#9AA0AA';rr(-80,-355,160,60,14);g.fill();g.stroke();g.restore();if(a>0){txtA('SURVIVAL',W*0.32,H*0.5-200,48,a,{fill:'#111',stroke:0});txtA('CHECKLIST',W*0.32,H*0.5-145,48,a,{fill:'#FF3DA6',stroke:0});
      for(let i=0;i<5;i++){const y=H*0.5-60+i*68;g.save();g.globalAlpha=a;g.strokeStyle='#111';g.lineWidth=6;g.strokeRect(W*0.32-180,y-20,40,40);g.fillStyle='#C9CDD6';rr(W*0.32-120,y-12,280,24,12);g.fill();g.restore();txtA('?',W*0.32+20,y,44,a,{fill:'#FF3DA6',sw:8})}}
    pill('COMING UP AT THE END',W*0.32,H*0.12,46,'#FF3DA6','#fff',t,19.2,22.9);comic('SAVE HOURS!',W*0.7,H*0.2,90,t,20.6,{life:1.8,rot:0.08});flash(t,17.9,0.2)}
  vignette();cap16(t+T0)};
