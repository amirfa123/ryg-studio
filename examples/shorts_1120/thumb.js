// ===== What happens to your thumbs after 10 hours of GTA 6? (body/everyday + GTA 6) =====
const TT=20.3;
const CU={c1:3.9,c2:7.55,c3:9.0,c4:12.55,c5:15.3,c6:18.7};
guy.outfit({headphones:1});
const R=scene('room');
function tvScreen(fn){tvDraw(R,(c,w,h)=>{const gr=c.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#2A0E5A');gr.addColorStop(0.6,'#FF5E8A');gr.addColorStop(1,'#FFB36B');c.fillStyle=gr;c.fillRect(0,0,w,h);fn(c,w,h)})}
function cityTV(t){tvScreen((c,w,h)=>{c.fillStyle='#FFE680';c.beginPath();c.arc(w/2,h*0.55,70,0,7);c.fill();for(let i=0;i<12;i++){const bw=40+hash(i)*30,bh=60+hash(i*3)*140,x=i*56-10;c.fillStyle=['#2A2350','#33285E','#1E1A40'][i%3];c.fillRect(x,h-bh,bw,bh)}
  const cx=((t*260)%(w+120))-60;c.fillStyle='#3FF0FF';c.fillRect(cx,h-34,70,20);c.fillStyle='#111';c.beginPath();c.arc(cx+15,h-12,8,0,7);c.arc(cx+55,h-12,8,0,7);c.fill()})}
function couchGuy(t,o={}){putGuy(R.S,0,0.12,1.75,PI);props.pad.visible=true;props.pad.position.set(0,1.0,0.62);guy.pose({...SIT,reachL:[0.15,1.0,0.6],reachR:[-0.15,1.0,0.6],blink:BLINK(t),mouth:'grin',...o})}
const C0={p:[4.6,2.7,-2.7],l:[0,1.25,1.6]};
function openScene(t){cityTV(t);clockDraw(R,9,0);const m=Math.sin(t*2*PI/0.5);couchGuy(t,{reachL:[0.15+0.02*m,1.0,0.6],reachR:[-0.15-0.02*m,1.0,0.6],look:0.12*Math.sin(t*2*PI/2.5),jump:0.006*Math.sin(t*2*PI/1.25)})}
// ---- 2D hand cutaway ----
function hand(x,y,s,t,swell=0,speed=1){g.save();g.translate(x,y);g.scale(s,s);
  // forearm + palm
  g.fillStyle='#FFD43B';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.moveTo(-120,520);g.lineTo(-130,150);g.quadraticCurveTo(-150,-60,-60,-140);g.lineTo(150,-140);g.quadraticCurveTo(190,40,130,150);g.lineTo(120,520);g.closePath();g.fill();g.stroke();
  // fingers
  for(let i=0;i<4;i++){g.beginPath();rr(-55+i*52,-330+Math.abs(i-1.5)*30,46,220,23);g.fill();g.stroke()}
  // thumb
  g.save();g.translate(-110,-30);g.rotate(-0.75);g.beginPath();rr(-38,-230,76,250,38);g.fill();g.stroke();g.restore();
  // tendons (two lines from thumb down to wrist)
  const tunY=170;g.lineCap='round';
  for(const [dx,col] of [[-8,'#FF5E7A'],[22,'#FF8FA8']]){g.strokeStyle='#111';g.lineWidth=26;g.beginPath();g.moveTo(-230+dx,-170);g.quadraticCurveTo(-140+dx,40,-95+dx,tunY);g.lineTo(-90+dx,500);g.stroke();g.strokeStyle=col;g.lineWidth=16;g.stroke();
    // sliding stripes
    g.save();g.setLineDash([18,26]);g.lineDashOffset=-t*120*speed;g.strokeStyle='rgba(255,255,255,0.8)';g.lineWidth=5;g.stroke();g.restore()}
  // the tunnel band
  const sw=1+swell*0.55;g.save();g.translate(-80,tunY+20);g.scale(sw,1);g.fillStyle=swell>0.05?`rgb(${lerp(63,255,swell)|0},${lerp(240,74,swell)|0},${lerp(255,74,swell)|0})`:'#3FF0FF';g.globalAlpha=0.9;g.beginPath();rr(-65,-40,130,80,30);g.fill();g.globalAlpha=1;g.strokeStyle='#111';g.lineWidth=8;g.stroke();g.restore();
  if(swell>0.3){g.strokeStyle='#FF2A2A';g.lineWidth=9;for(let k=0;k<6;k++){const a=k/6*PI*2+t*2,r0=110+10*Math.sin(t*12);g.beginPath();g.moveTo(-80+Math.cos(a)*r0,tunY+20+Math.sin(a)*r0*0.7);g.lineTo(-80+Math.cos(a)*(r0+40),tunY+20+Math.sin(a)*(r0+40)*0.7);g.stroke()}}
  g.restore()}
function label(s,x,y,size,col,tx,ty){g.save();g.strokeStyle='#fff';g.lineWidth=6;g.beginPath();g.moveTo(x,y);g.lineTo(tx,ty);g.stroke();g.restore();pill0(s,x,y,size,col)}
function pill0(s,x,y,size,col){g.save();g.font=`900 ${size}px Inter`;const w=g.measureText(s).width+size*1.1,h=size*1.6;g.fillStyle=col;rr(x-w/2,y-h/2,w,h,h/2);g.fill();g.strokeStyle='#111';g.lineWidth=6;g.stroke();g.restore();txt(s,x,y+2,size,{stroke:0,fill:'#111'})}
const Y=scene('gym');
window.render=function(t){g.clearRect(0,0,W,H);hideProps();
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));R.shot(mix(C0.p,[4.3,2.6,-2.5],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT HAPPENS TO',W/2,215,76,{sw:16});txt('YOUR THUMBS AFTER',W/2,315,80,{fill:'#FFD23F',sw:17});txt('10 HOURS OF GTA 6?',W/2,425,96,{fill:'#3FF0FF',sw:20});g.restore();
    comic('CLICK CLICK',W*0.27,1150,70,t,2.2,{life:1.3,rot:-0.08,fill:'#fff'})}
  else if(t<CU.c2){clear3d();setBG('teal');flash(t,CU.c1,0.15);const s=backOut(seg(t,CU.c1,CU.c1+0.5));hand(W/2+20,1000,1.3*s,t,0,1);
    if(t>4.3)label('2 TENDONS',W*0.22,560,48,'#FF8FA8',W/2-230,760);if(t>5.9)label('TINY TUNNEL',W*0.72,1290,48,'#3FF0FF',W/2-40,1250);
    panel(W/2,330,800,150);txt('INSIDE YOUR THUMB',W/2,300,64,{stroke:0,fill:'#3FF0FF'});txt('TENDONS SLIDE THROUGH A TUNNEL',W/2,362,40,{stroke:0})}
  else if(t<CU.c3){cityTV(t);const hr=9+seg(t,CU.c2,CU.c3)*10;clockDraw(R,hr%12,(hr*60)%60);const m=Math.sin(t*40);
    couchGuy(t,{reachL:[0.15+0.03*m,1.0+0.02*m,0.6],reachR:[-0.15-0.03*m,1.0-0.02*m,0.6],mouth:'teeth',teethGap:0.4,jump:0.01*Math.abs(m),look:0.05*m});
    R.shot([1.8,2.1,-1.6],[0,1.35,1.6]);flash(t,CU.c2,0.15);
    comic('MASH!',W*0.24,800,96,t,CU.c2+0.1,{life:0.7,rot:-0.12});comic('MASH!',W*0.74,950,96,t,CU.c2+0.5,{life:0.7,rot:0.12,fill:'#3FF0FF'});comic('MASH!',W*0.4,1150,96,t,CU.c2+0.9,{life:0.6,rot:-0.05,fill:'#FF8FA8'});
    pill('3 AM...',W/2,300,60,'#FFD23F','#111',t,CU.c2+0.2,CU.c3)}
  else if(t<CU.c4){clear3d();setBG('red');flash(t,CU.c3,0.15);const sw=ease(seg(t,CU.c3+0.3,CU.c3+1.6));hand(W/2+20+6*Math.sin(t*50)*sw*(t>10.6?1:0),1000,1.3,t,sw,1-0.8*sw);
    panel(W/2,330,800,150,'rgba(10,12,25,0.85)','#FF4A4A');txt('THE TUNNEL SWELLS',W/2,300,64,{stroke:0,fill:'#FF8A8A'});txt('EVERY MOVE HURTS',W/2,362,44,{stroke:0});
    comic('OUCH!',W*0.25,1250,100,t,11.3,{life:1.1,rot:-0.1,fill:'#FF4A4A'});comic('SQUEEZE',W*0.76,800,64,t,CU.c3+1.0,{life:1.0,rot:0.08,fill:'#fff'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);putGuy(Y.S,0,0,-0.6,0);Y.foodTable.visible=false;
    guy.pose({armL:[0.35,0.1],reachR:[0.25,1.55,0.55],poleR:[1,0,0],headPitch:0.35,look:-0.25,mouth:'o',mouthSize:0.6,blink:BLINK(t),jump:0.008*Math.sin(t*3)});
    Y.shot([0.6,2.2,5.6],[0,1.85,-0.6]);
    const s=backOut(seg(t,13.9,14.3));if(s>0){g.save();g.translate(W/2,400);g.rotate(-0.06);g.scale(s,s);panel(0,0,860,220,'#FFF6E0','#E23B3B',30);txt("DOCTORS CALL IT",0,-50,46,{stroke:0,fill:'#E23B3B'});txt("GAMER'S THUMB",0,30,96,{stroke:0,fill:'#111'});g.restore()}
    pill("(DE QUERVAIN'S)",W/2,580,40,'#fff','#111',t,14.4,CU.c5);
    comic('WAIT, REALLY?',W*0.5,700,70,t,CU.c4+0.2,{life:1.2,fill:'#fff'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);putGuy(Y.S,0,0,-0.6,0);Y.foodTable.visible=false;const st=Math.sin((t-CU.c5)*2.4);
    guy.pose({armL:[2.9,0.15+0.1*st],armR:[2.9,-0.15-0.1*st],bendL:0.1,bendR:0.1,tilt:0.18*st,mouth:'smile',blink:BLINK(t),jump:0.01*Math.sin(t*4)});
    Y.shot([-0.6,1.9,6.2],[0,1.55,-0.6]);
    const items=[['BREAKS',16.4],['STRETCHES',16.96],['REST',17.96]];items.forEach(([s,t0],i)=>{if(t<t0-0.05)return;const k=backOut(seg(t,t0-0.05,t0+0.25));g.save();g.translate(W/2,260+i*130);g.scale(k,k);panel(0,0,640,110,'rgba(10,12,25,0.9)','#5BE37A',30);txt(s,-30,4,60,{stroke:0});check(230,0,0.9);g.restore()});
    pill('THE FIX',W/2,150,50,'#5BE37A','#111',t,CU.c5+0.1,CU.c6)}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.25));R.shot(mix([5.5,3.0,-2.0],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
