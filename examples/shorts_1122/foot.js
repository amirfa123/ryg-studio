// ===== Why does your foot fall asleep? (body/everyday) =====
const TT=18.5;
const CU={c1:2.1,c2:4.5,c3:6.9,c4:9.4,c5:11.2,c6:14.3,c7:16.7};
guy.outfit({beanie:1});
const R=scene('room');R.cam.fov=46;R.cam.updateProjectionMatrix();
function tvIdle(t){tvDraw(R,(c,w,h)=>{const gr=c.createLinearGradient(0,0,w,h);gr.addColorStop(0,'#1E3A8A');gr.addColorStop(1,'#7C3AED');c.fillStyle=gr;c.fillRect(0,0,w,h);c.fillStyle='#FFD23F';c.beginPath();c.arc(w/2+80*Math.sin(t*2*PI/3.7),h/2,50,0,7);c.fill()})}
clockDraw(R,1,10);
// couch: seat top ~0.62 at z 1.6, guy faces -z (towards TV / camera)
function couchGuy(t,o={}){putGuy(R.S,0.2,0.3,1.5,PI);guy.pose({...SIT,legR:[1.45,2.75,0.3],armL:[0.5,0.2],armR:[0.5,-0.2],bendL:0.8,bendR:0.8,blink:BLINK(t),mouth:'smile',...o})}
const C0={p:[2.3,2.15,-2.9],l:[0.1,1.25,1.4]};
function openScene(t){tvIdle(t);couchGuy(t,{headRoll:0.05*Math.sin(t*2*PI/2.08),jump:0.01*Math.sin(t*2*PI/1.04),look:-0.3,mouth:'grin'})}
// ---- 2D leg diagram ----
const LY=930,PX=500;
function legShape(p){// horizontal leg, hip left, foot up at right; p = pinch 0..1
  g.save();g.lineJoin='round';const top=LY-120,bot=LY+120,dip=p*70;
  g.fillStyle='#FFD94A';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.moveTo(-40,top);g.lineTo(PX-90,top);g.quadraticCurveTo(PX,top+dip*2.2,PX+90,top);g.lineTo(850,top);g.quadraticCurveTo(900,top-10,905,top-160);g.lineTo(905,top-330);g.quadraticCurveTo(905,top-380,960,top-380);g.lineTo(1010,top-380);g.quadraticCurveTo(1060,top-380,1060,top-320);
  g.lineTo(1060,bot-60);g.quadraticCurveTo(1060,bot,1000,bot);g.lineTo(PX+90,bot);g.quadraticCurveTo(PX,bot-dip*1.2,PX-90,bot);g.lineTo(-40,bot);g.closePath();g.fill();g.stroke();g.restore()}
function tubePath(yOff,p){const pts=[];for(let i=0;i<=60;i++){const x=-40+i*(950-(-40))/60;let y=LY+yOff;const d=Math.exp(-(((x-PX)/80)**2));y+=d*p*(yOff<0?55:-20);pts.push([x,y])}for(let i=1;i<=14;i++)pts.push([950+yOff*0.4,LY+yOff-i*24]);return pts}
function strokePath(pts,col,w){g.save();g.lineCap='round';g.lineJoin='round';g.strokeStyle='#111';g.lineWidth=w+10;g.beginPath();pts.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.stroke();g.strokeStyle=col;g.lineWidth=w;g.stroke();g.restore()}
function along(pts,f){const i=clamp(f)*(pts.length-1),a=Math.floor(i),b=Math.min(pts.length-1,a+1),k=i-a;return [lerp(pts[a][0],pts[b][0],k),lerp(pts[a][1],pts[b][1],k)]}
const PF=(PX+40)/990*60/74;// fraction of path where the pinch sits
function diagram(t,p,o={}){g.save();g.fillStyle='rgba(255,255,255,0.0)';legShape(p);const nerve=tubePath(-38,p),vein=tubePath(40,p);
  const nw=lerp(26,10,p),vw=lerp(30,10,p);strokePath(vein,'#FF4A5A',vw);strokePath(nerve,'#FFF36B',nw);
  // blood dots flow towards the foot, nerve signals flow towards the brain (left)
  const n=10;for(let i=0;i<n;i++){let f=((t*0.25+i/n)%1);if(p>0.6&&f>PF)f=PF+((f-PF)*0.15);const [x,y]=along(vein,f);g.fillStyle='#B3122A';g.beginPath();g.arc(x,y,9,0,7);g.fill()}
  const sigOn=o.sig??1;for(let i=0;i<n;i++){let f=1-((t*(o.rush?0.9:0.3)+i/n)%1);let col='#4AD7FF';if(p>0.6&&f<PF+0.02){f=PF+0.02+((PF-f)*0.02);col='#4AD7FF'}if(sigOn<=0)continue;const [x,y]=along(nerve,f);g.fillStyle=col;g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.arc(x,y,o.rush?16:12,0,7);g.fill();g.stroke()}
  // weight block
  if(o.weight>0){const yb=lerp(200,LY-120-p*60-150,ease(o.weight));g.fillStyle='#4A4F63';g.strokeStyle='#111';g.lineWidth=8;rr(PX-160,yb-110,320,150,20);g.fill();g.stroke();txt('YOUR',PX,yb-52,44,{stroke:0});txt('WEIGHT',PX,yb+2,52,{stroke:0,fill:'#FFD23F'});arrowDown(PX,yb+60,p)}
  g.restore()}
function arrowDown(x,y,a){if(a<=0.05)return;g.save();g.fillStyle='#FF6A5E';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(x-30,y);g.lineTo(x+30,y);g.lineTo(x,y+40*a);g.closePath();g.fill();g.stroke();g.restore()}
function brain(x,y,s,mood){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#FF9EC4';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();for(let i=0;i<8;i++){const a=i/8*PI*2;g.arc(Math.cos(a)*70,Math.sin(a)*48,42,0,7)}g.fill();g.beginPath();g.ellipse(0,0,105,78,0,0,7);g.fill();g.stroke();
  g.strokeStyle='#D9568C';g.lineWidth=6;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(i*34,-50);g.quadraticCurveTo(i*34+18,0,i*34,50);g.stroke()}g.restore();if(mood)txt(mood,x+130*s,y-90*s,90*s,{fill:'#FFD23F',sw:14})}
function zap(x,y,t,n=7,R=120){g.save();g.lineCap='round';g.lineJoin='round';for(let i=0;i<n;i++){const a=i/n*PI*2+t*3,r0=R*0.5,r1=R*(1+0.25*Math.sin(t*20+i));g.strokeStyle='#111';g.lineWidth=14;const pts=[];for(let k=0;k<=4;k++){const rr_=lerp(r0,r1,k/4),off=(k%2?1:-1)*14;pts.push([x+Math.cos(a)*rr_-Math.sin(a)*off,y+Math.sin(a)*rr_+Math.cos(a)*off])}
  g.beginPath();pts.forEach(([px,py],k)=>k?g.lineTo(px,py):g.moveTo(px,py));g.stroke();g.strokeStyle=i%2?'#4AD7FF':'#FFF36B';g.lineWidth=7;g.stroke()}g.restore()}
function pillS(s,x,y,size,col){g.save();g.font=`900 ${size}px Inter`;const w=g.measureText(s).width+size*1.1,h=size*1.6;g.fillStyle=col;rr(x-w/2,y-h/2,w,h,h/2);g.fill();g.strokeStyle='#111';g.lineWidth=6;g.stroke();g.restore();txt(s,x,y+2,size,{stroke:0,fill:'#111'})}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.rotation.set(0,0,0);tvIdle(t);
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));R.shot(mix(C0.p,[2.1,2.05,-2.4],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHY DOES YOUR',W/2,220,90,{sw:18});txt('FOOT FALL',W/2,335,104,{sw:20});txt('ASLEEP?',W/2,470,130,{fill:'#4AD7FF',sw:26});g.restore();
    comic('HUH?',W*0.75,1160,80,t,1.2,{life:0.9,rot:0.1,fill:'#FFD23F'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);// plops down onto the tucked foot, camera low by the couch
    const drop=1-easeOut(seg(t,2.2,2.55));putGuy(R.S,0.2,0.3+drop*0.5,1.5,PI);guy.pose({...SIT,legR:[1.45,2.75,0.3],armL:[1.2-drop*0.6,0.2],armR:[1.2-drop*0.6,-0.2],mouth:t>2.6?'o':'grin',mouthSize:0.6,blink:BLINK(t),look:0.4,lookY:-0.5,headPitch:0.25});
    R.shot([-1.6,1.1,-0.9],[0.25,0.75,1.5]);comic('SQUISH',W*0.72,700,84,t,2.6,{life:1.0,rot:0.1,fill:'#FF9EC4'});pill('SITTING ON YOUR FOOT',W/2,380,54,'#FFD23F','#111',t,2.9,CU.c2)}
  else if(t<CU.c3){flash(t,CU.c2,0.15);clear3d();setBG('linear-gradient(#2A1F5C,#4B2E83)');const p=ease(seg(t,4.9,5.5));
    diagram(t,p,{weight:seg(t,4.6,5.0)});txt('INSIDE YOUR LEG',W/2,250,64,{fill:'#FFD23F',sw:13});
    pill('NERVE',W*0.25,1150,46,'#FFF36B','#111',t,5.3,CU.c3);pill('BLOOD VESSEL',W*0.62,1150,46,'#FF6A5E','#111',t,5.6,CU.c3);comic('SQUEEZE',W*0.78,520,74,t,5.0,{life:1.0,rot:0.1,fill:'#FF6A5E'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);clear3d();setBG('linear-gradient(#2A1F5C,#4B2E83)');diagram(t,1,{weight:1});
    // nerve line up to the brain
    g.save();g.strokeStyle='#111';g.lineWidth=20;g.lineCap='round';g.beginPath();g.moveTo(10,LY-38);g.lineTo(10,470);g.lineTo(170,470);g.stroke();g.strokeStyle='#FFF36B';g.lineWidth=10;g.stroke();g.restore();
    brain(300,440,0.9,t>8.4?'???':'');cross(PX+70,LY-110,1.2*pop(t,7.6));txt('NO SIGNAL',PX+70,LY-230,56,{fill:'#FF6A5E',sw:12,a:1});
    comic('BLOCKED',W*0.74,1230,70,t,7.7,{life:1.0,rot:-0.08,fill:'#FF6A5E'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);// pokes the numb leg
    const pk=Math.max(0,Math.sin((t-CU.c4)*9));putGuy(R.S,0.2,0.3,1.5,PI);guy.pose({...SIT,legR:[1.45,2.75,0.3],armL:[0.5,0.2],bendL:0.8,reachR:[-0.28,0.78+0.06*pk,0.62+0.05*pk],mouth:'o',mouthSize:0.5,blink:BLINK(t),lookY:-0.8,headPitch:0.35,look:-0.3});
    R.shot([1.5,1.6,-1.0],[0.05,0.9,1.4]);pill('NUMB',W/2,380,72,'#4AD7FF','#111',t,10.2,CU.c5);comic('POKE',W*0.27,1150,72,t,9.8,{life:0.6,rot:-0.1,fill:'#fff'});comic('POKE',W*0.7,1080,72,t,10.4,{life:0.6,rot:0.1,fill:'#fff'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);const up=easeOut(seg(t,11.3,11.9));
    if(up<1){putGuy(R.S,lerp(0.2,1.7,up),lerp(0.3,0,up),lerp(1.5,0.8,up),PI);guy.pose({...SIT,legR:[lerp(1.45,0.2,up),lerp(2.75,0.3,up),0.3],legL:[lerp(1.45,0.2,up),lerp(1.45,0.3,up),0],sitY:lerp(-0.27,0,up),armL:[1.0,0.2],armR:[1.0,-0.2],mouth:'o',blink:BLINK(t)})}
    else{putGuy(R.S,1.7,0.0,0.8,PI);guy.pose({armL:[1.4+0.4*Math.sin(t*7),0.2],armR:[1.4+0.4*Math.sin(t*7+2),-0.2],legR:[0.2,0.3,0.2],mouth:'teeth',wide:true,tilt:0.12*Math.sin(t*5),blink:false})}
    R.shot([3.2,2.0,-2.6],[1.1,1.1,0.9]);if(t>12.2){clear3d&&0;const k=easeOut(seg(t,12.2,12.5));g.save();g.globalAlpha=k;g.fillStyle='rgba(42,31,92,0.88)';rr(60,1500,W-120,330,40);g.fill();g.restore();
      g.save();g.translate(0,1660-LY*0.32);g.scale(1,0.32);g.translate(0,0);g.restore();
      // mini nerve strip with rushing signals
      g.save();g.globalAlpha=k;g.strokeStyle='#111';g.lineWidth=34;g.lineCap='round';g.beginPath();g.moveTo(140,1665);g.lineTo(W-140,1665);g.stroke();g.strokeStyle='#FFF36B';g.lineWidth=22;g.stroke();
      for(let i=0;i<14;i++){const x=W-140-((t*900+i*70)%(W-280));g.fillStyle='#4AD7FF';g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.arc(x,1665,15,0,7);g.fill();g.stroke()}txt('ALL SIGNALS AT ONCE',W/2,1570,44,{sw:9});g.restore()}
    pill('WAKING UP',W/2,380,64,'#5BE37A','#111',t,12.4,CU.c6)}
  else if(t<CU.c7){flash(t,CU.c6,0.15);const hop=Math.abs(Math.sin((t-CU.c6)*6.5));putGuy(R.S,1.7,0.0,0.8,PI);
    guy.pose({legR:[0.6,1.4,0.3],legL:[0.05,0.1,0],jump:0.28*hop,armL:[2.2+0.4*Math.sin(t*9),0],armR:[2.2+0.4*Math.sin(t*9+2),0],mouth:'teeth',teethGap:1,wide:true,blink:false});
    R.shot([4.0,1.9,-3.6],[1.6,1.2,0.8]);const fp=proj(new THREE.Vector3(1.5,0.35+0.28*hop,0.55),R.cam);if(t>14.55)zap(fp[0],fp[1],t,8,140);
    comic('BZZZT!',W*0.27,560,96,t,14.6,{life:1.4,rot:-0.12,fill:'#FFF36B'});pill('PINS & NEEDLES',W/2,380,64,'#FFF36B','#111',t,15.3,CU.c7)}
  else{openScene(t-TT);const k=ease(seg(t,CU.c7,TT-0.25));R.shot(mix([3.0,2.6,-4.0],C0.p,k),C0.l);flash(t,CU.c7,0.15)}
  vignette();captions(t)};
