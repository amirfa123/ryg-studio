// ===== What happens to your brain when you finally play a game you've waited 13 years for? (body + GTA 6) =====
const TT=20.0;
const CU={c1:5.44,c2:7.2,sp:8.56,ng:11.28,c3:12.56,c4:15.36,st:15.68,dl:17.12,c5:18.48};
guy.outfit({headphones:1});
const R=scene('room');
function tvScreen(fn){tvDraw(R,(c,w,h)=>{c.fillStyle='#0B0D2E';c.fillRect(0,0,w,h);fn(c,w,h)})}
function tvText(c,s,x,y,size,col){c.font=`900 ${size}px Inter`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=size*0.18;c.strokeStyle='#111';c.strokeText(s,x,y);c.fillStyle=col;c.fillText(s,x,y)}
function couchGuy(t,o={}){putGuy(R.S,0,0.02,1.5,PI);guy.pose({...SIT,armL:[0.5,0.15],armR:[0.5,-0.15],bendL:0.8,bendR:0.8,blink:BLINK(t),mouth:'smile',...o})}
// guy faces the TV (-z); camera behind-side so we see his face 3/4 and the TV
const C0={p:[-4.4,2.5,-2.6],l:[0,1.05,1.3]};
function openTV(t){const pu=0.5+0.5*Math.sin(t*2*PI/1.25);tvScreen((c,w,h)=>{c.fillStyle=`rgba(255,61,166,${0.25+0.25*pu})`;c.fillRect(0,0,w,h);tvText(c,'GAME DAY',w/2,h*0.36,86,'#FFD23F');tvText(c,'13 YEARS LATER',w/2,h*0.7,54,'#3FF0FF')})}
function openGuy(t){couchGuy(t,{look:0.2*Math.sin(t*2*PI/2.5),jump:0.012*Math.sin(t*2*PI/1.25),mouth:'grin'})}
function brainShape(x,y,s,glow){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#FF9EC0';g.strokeStyle='#111';g.lineWidth=9;g.beginPath();g.ellipse(0,0,300,220,0,0,7);g.fill();g.stroke();
  g.strokeStyle='#D9668F';g.lineWidth=10;g.lineCap='round';for(let i=0;i<9;i++){g.beginPath();const a=hash(i*3)*6,xx=(hash(i*5)-0.5)*380,yy=(hash(i*7)-0.5)*260;g.arc(xx,yy,40+hash(i)*30,a,a+2.4);g.stroke()}
  g.beginPath();g.moveTo(0,-210);g.quadraticCurveTo(20,0,0,215);g.stroke();
  g.fillStyle=`rgba(255,225,77,${glow})`;g.beginPath();g.arc(30,40,70,0,7);g.fill();g.restore()}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();clockDraw(R,0,0);
  if(t<CU.c1){openTV(t);openGuy(t);const k=ease(seg(t,0.3,CU.c1));R.shot(mix(C0.p,[-4.0,2.4,-2.2],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT HAPPENS TO YOUR BRAIN',W/2,205,58,{sw:14});txt('WHEN YOU FINALLY PLAY',W/2,290,66,{sw:15});txt('A GAME YOU WAITED',W/2,385,80,{fill:'#FFD23F',sw:18});txt('13 YEARS FOR?',W/2,490,104,{fill:'#3FF0FF',sw:22});g.restore();
    comic('FINALLY!',W*0.74,1150,84,t,2.4,{life:1.3,rot:0.08,fill:'#fff'})}
  else if(t<CU.c2){clear3d();setBG('pink');flash(t,CU.c1,0.15);const s=backOut(seg(t,CU.c1,CU.c1+0.4));brainShape(W/2,880,1.3*s,0.5+0.4*Math.sin(t*12));
    for(let i=0;i<26;i++){const a=hash(i*3.1)*PI*2,d=((t-CU.c1)*(300+hash(i)*300)+hash(i*7)*200)%520;const x=W/2+30*1.3+Math.cos(a)*d,y=880+40*1.3+Math.sin(a)*d;g.fillStyle='#FFE14D';g.strokeStyle='#111';g.lineWidth=5;g.beginPath();g.arc(x,y,16,0,7);g.fill();g.stroke()}
    pill('DOPAMINE',W/2,420,90,'#FFE14D','#111',t,CU.c1+0.2,CU.c2);comic('ZING!',W*0.78,1220,84,t,CU.c1+0.5,{life:1.0,rot:0.08,fill:'#fff'})}
  else if(t<CU.c3){clear3d();setBG('neon');flash(t,CU.c2,0.15);const x0=120,x1=960,y0=1180,y1=560,X=u=>lerp(x0,x1,u),f=u=>u<0.7?Math.pow(u/0.7,1.6):1-0.55*Math.min(1,(u-0.7)/0.12);
    g.strokeStyle='#fff';g.lineWidth=7;g.beginPath();g.moveTo(x0,y1-40);g.lineTo(x0,y0);g.lineTo(x1+40,y0);g.stroke();txt('TIME',x1-40,y0+60,44,{sw:10});txt('DOPAMINE',x0+150,y1-80,44,{sw:10,fill:'#FFE14D'});
    const gx=X(0.74);g.save();g.setLineDash([20,14]);g.strokeStyle='#3FF0FF';g.lineWidth=6;g.beginPath();g.moveTo(gx,y1-20);g.lineTo(gx,y0);g.stroke();g.restore();txt('GAME DAY',gx+10,y0+60,40,{sw:10,fill:'#3FF0FF'});
    const k=easeOut(seg(t,CU.c2+0.3,CU.ng+0.4));g.save();g.lineJoin='round';g.lineCap='round';g.strokeStyle='#111';g.lineWidth=26;g.beginPath();for(let u=0;u<=k;u+=0.01){const p=[X(u),lerp(y0,y1,f(u))];u?g.lineTo(...p):g.moveTo(...p)}g.stroke();g.strokeStyle='#FFE14D';g.lineWidth=14;g.stroke();g.restore();
    if(t>CU.sp+0.3)pill('WAITING = PEAK',X(0.45),y1-30,56,'#FFE14D','#111',t,CU.sp+0.3,CU.c3);
    if(t>CU.ng){const s=backOut(seg(t,CU.ng,CU.ng+0.3));g.save();g.translate(X(0.86),lerp(y0,y1,0.45)-90);g.scale(s,s);txt('LESS?',0,0,64,{fill:'#FF4A4A',sw:14});g.restore()}
    panel(W/2,300,780,140);txt('STUDIES SHOW',W/2,300,70,{stroke:0,fill:'#FFD23F'})}
  else if(t<CU.c4){const n=Math.max(1,3-Math.floor((t-CU.c3)/0.85));tvScreen((c,w,h)=>{c.fillStyle='#3A1670';c.fillRect(0,0,w,h);tvText(c,String(n),w/2,h/2,260,'#FFD23F')});
    couchGuy(t,{jump:0.12*Math.abs(Math.sin(t*9)),armL:[2.5+0.3*Math.sin(t*14),0],armR:[2.5+0.3*Math.cos(t*14),0],bendL:0.2,bendR:0.2,mouth:'o',mouthSize:1.4,wide:true});
    const k=ease(seg(t,CU.c3,CU.c4));R.shot(mix([4.4,2.2,-2.8],[4.0,2.1,-2.4],k),[0,1.15,1.4]);flash(t,CU.c3,0.15);
    g.save();g.strokeStyle='#3FF0FF';g.lineWidth=10;g.lineJoin='round';for(let i=0;i<5;i++){const a=i/5*PI*2+t*2,cx=W/2+Math.cos(a)*330,cy=900+Math.sin(a)*380;if(hash(Math.floor(t*12)+i)<0.6){g.beginPath();g.moveTo(cx,cy);g.lineTo(cx+30,cy+40);g.lineTo(cx-10,cy+60);g.lineTo(cx+25,cy+110);g.stroke()}}g.restore();
    {const s=backOut(seg((t-CU.c3)%0.85,0,0.25));g.save();g.translate(W*0.8,720);g.scale(s,s);txt(String(n),0,0,300,{fill:'#FFD23F',sw:40});g.restore()}pill('ELECTRIC!',W/2,330,80,'#3FF0FF','#111',t,CU.c3+0.4,CU.c4);comic('LET\'S GOOO!',W*0.5,1220,84,t,CU.c3+1.2,{life:1.4,rot:-0.05,fill:'#FFD23F'})}
  else if(t<CU.c5){const pr=t<CU.dl?0:Math.min(1,(t-CU.dl)*0.6);tvScreen((c,w,h)=>{if(t<CU.dl){tvText(c,'PRESS START',w/2,h/2,80,'#fff')}else{tvText(c,'DOWNLOADING...',w/2,h*0.33,56,'#fff');c.fillStyle='#333';c.fillRect(70,h*0.55,w-140,50);c.fillStyle='#5BE37A';c.fillRect(70,h*0.55,(w-140)*0.01*(1+pr),50);tvText(c,(1+Math.floor(pr))+'%',w/2,h*0.8,56,'#FFD23F')}});
    const slump=easeOut(seg(t,CU.dl,CU.dl+0.6));couchGuy(t,{armL:[lerp(0.9,0.15,slump),0.2],armR:[lerp(0.9,0.15,slump),-0.2],headPitch:0.25*slump,mouth:slump>0.5?'o':'grin',mouthSize:0.6,tilt:0.1*slump});
    R.shot([-1.1,3.7,6.4],[0.25,1.3,-1.4]);flash(t,CU.c4,0.15);
    if(t>CU.dl){g.save();const s=backOut(seg(t,CU.dl,CU.dl+0.3));g.translate(W/2,215);g.scale(s,s);panel(0,0,860,190,'rgba(10,12,25,0.9)','#5BE37A');txt('DOWNLOAD: 1%',0,-30,70,{stroke:0});g.fillStyle='#333';rr(-360,30,720,40,20);g.fill();g.fillStyle='#5BE37A';rr(-360,30,44,40,20);g.fill();g.restore();
      comic('BRUH.',W*0.72,1180,96,t,CU.dl+0.5,{life:1.2,rot:0.08,fill:'#fff'})}}
  else{openTV(t-TT);openGuy(t-TT);const k=ease(seg(t,CU.c5,TT-0.25));R.shot(mix([-5.6,3.2,-3.6],C0.p,k),C0.l);flash(t,CU.c5,0.15)}
  vignette();captions(t)};
