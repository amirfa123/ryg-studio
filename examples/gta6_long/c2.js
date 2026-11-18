// ===== Chapter 2: when can you play? (global 23.0 - 56.0) =====
const T0=23.0,TT=33.0;
function readyTV(o,txt1,col='#3FF0FF'){tvDraw(o,(c,w,h)=>{const gr=c.createLinearGradient(0,0,w,h);gr.addColorStop(0,'#12082E');gr.addColorStop(1,'#3A1670');c.fillStyle=gr;c.fillRect(0,0,w,h);c.strokeStyle=col;c.lineWidth=6;c.strokeRect(30,30,w-60,h-60);c.font='900 64px Inter';c.textAlign='center';c.textBaseline='middle';c.fillStyle='#fff';c.fillText(txt1,w/2,h/2)})}
function globe2D(x,y,R,t,lit){g.save();g.translate(x,y);g.beginPath();g.arc(0,0,R,0,7);g.save();g.clip();g.fillStyle='#2E86DE';g.fillRect(-R,-R,2*R,2*R);g.fillStyle='#5DCB72';
  const L=[[-170,-90,90,70],[-120,40,60,110],[20,-120,120,60],[60,-30,70,90],[150,80,60,40],[-30,10,40,50]];for(const [a,b,c,d] of L){g.beginPath();g.ellipse(a,b,c,d,0.3,0,7);g.fill()}
  const n=8,sw=2*R/n;for(let i=0;i<n;i++){const xi=R-(i+1)*sw;const on=i<lit;g.fillStyle=on?'rgba(255,210,63,0.45)':'rgba(8,10,36,0.55)';g.fillRect(xi,-R,sw,2*R);g.strokeStyle='rgba(255,255,255,0.5)';g.lineWidth=3;g.beginPath();g.moveTo(xi,-R);g.lineTo(xi,R);g.stroke()}
  g.restore();g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.arc(0,0,R,0,7);g.stroke();g.restore()}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<3.6){const R=scene('room');readyTV(R,'COMING SOON');const m=50+t*1.5;clockDraw(R,11,m);putGuy(R.S,1.6,0,3.2,-0.7);
    guy.pose(idle(t,{headPitch:-0.35,headYaw:-0.6,lookY:0.8,look:-0.8,mouth:'o',armR:[0.3,0],armL:[0.3,0]}));R.shot([0.6,2.4,9.6],[-0.6,2.3,-1.5]);chapterCard(t,0.1,3.5,1,'WHEN CAN YOU ACTUALLY PLAY?');flash(t,0,0.2)}
  else if(t<8.9){clear3d();setBG('neon');const k=ease(seg(t,3.7,5.3));const m=lerp(-25,0,k);const hh=m<0?11:12,mm=m<0?60+m:0;
    clockFace(W*0.32,H*0.47,250,hh,mm,t>5.3?0.6+0.4*Math.sin(t*8):0);comic('MIDNIGHT!',W*0.32,H*0.13,96,t,5.3,{life:3.4,rot:-0.05});
    const a=pop(t,6.9);if(t>6.9){g.save();g.translate(W*0.72,H*0.47);g.scale(a,a);g.rotate(0.05);g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=10;rr(-210,-220,420,440,30);g.fill();g.stroke();g.fillStyle='#FF3DA6';rr(-210,-220,420,120,30);g.fill();g.stroke();g.restore();
      g.save();g.translate(W*0.72,H*0.47);g.scale(a,a);g.rotate(0.05);txt('THURSDAY',0,-160,52,{sw:10});txt('NOV',0,-30,80,{fill:'#111',stroke:0});txt('19',0,100,170,{fill:'#111',stroke:0});g.restore()}
    pill('LOCAL TIME',W*0.32,H*0.83,46,'#3FF0FF','#111',t,5.9,8.85);flash(t,3.6,0.2)}
  else if(t<13.4){clear3d();setBG('blue');const lit=Math.floor(clamp((t-9.9)/0.42,0,8));globe2D(W*0.33,H*0.48,330,t,lit);
    const cities=['SYDNEY','TOKYO','DUBAI','LONDON','NEW YORK','LOS ANGELES'];cities.forEach((c,i)=>{const tk=10.0+i*0.55;if(t<tk)return;const a=easeOut(seg(t,tk,tk+0.25));txtA(c,W*0.66,H*0.2+i*105,58,a,{align:'left',sw:12});if(t>tk+0.15)check(W*0.63,H*0.2+i*105,0.9*pop(t,tk+0.15))});
    pill('ONE TIME ZONE AT A TIME',W*0.33,H*0.08,46,'#FFD23F','#111',t,9.2,13.35);flash(t,8.9,0.2)}
  else if(t<17.7){const R=scene('room');readyTV(R,'READY?','#FFD23F');clockDraw(R,0,2);putGuy(R.S,0.2,0,-1.0,0.2);guy.pose(idle(t,{mouth:'grin',armL:[1.0,0],armR:[1.0,0],bendL:0.5,bendR:0.5}));
    const k=ease(seg(t,13.4,17.7));R.shot(mix([0.2,2.2,4.8],[0.0,2.0,4.0],k),[0,1.4,-2.6]);
    const p1=proj(new THREE.Vector3(-1.45,1.75,-2.65),R.cam),p2=proj(new THREE.Vector3(1.45,1.75,-2.65),R.cam);
    pill('PS5',p1[0],p1[1]-80,54,'#fff','#111',t,14.2,17.65);if(t>14.5)check(p1[0],p1[1]-170,1.0*pop(t,14.5));
    pill('XBOX SERIES X|S',p2[0],p2[1]-80,50,'#5BE37A','#111',t,15.6,17.65);if(t>15.9)check(p2[0],p2[1]-170,1.0*pop(t,15.9));flash(t,13.4,0.2)}
  else if(t<22.4){const R=scene('room');readyTV(R,'');const pc=R.pcs.ctx;pc.fillStyle='#14141c';pc.fillRect(0,0,320,200);pc.font='900 30px Inter';pc.textAlign='center';pc.fillStyle=t>20.2?'#FF4A4A':'#9AA0AA';pc.fillText(t>20.2?'NOT AVAILABLE':'SEARCHING...',160,108);R.pcs.tx.needsUpdate=true;
    putGuy(R.S,4.5,0,2.1,-0.35);const sad=t>20.1;guy.pose(idle(t,{mouth:sad?'o':'smile',headPitch:sad?0.25:0,brow:sad?-0.02:0,armL:[sad?0.15:0.3,0],armR:[sad?0.15:0.3,0]}));
    R.shot([2.6,2.3,9.4],[4.7,1.5,0.9]);pill('PC PLAYERS?',W/2,110,56,'#fff','#111',t,17.8,20.0);comic('SORRY!',W*0.3,H*0.3,120,t,20.2,{life:2.1,rot:-0.1,fill:'#FF4A4A'});
    if(t>20.6){cross(W*0.66,H*0.32,2.2*pop(t,20.6))}pill('NO PC VERSION (YET)',W*0.62,H*0.6,50,'#FF4A4A','#fff',t,20.7,22.35);flash(t,17.7,0.2)}
  else if(t<27.4){const S=scene('stage');setBG('pink');stageOnly();putGuy(S.S,0,0,0,0);props.cash.visible=true;props.cash.position.set(0.05,1.12,0.6);
    guy.pose(idle(t,{reachL:[0.16,1.14,0.58],reachR:[-0.12,1.14,0.6],mouth:t>25.3?'grin':'smile'}));S.shot([0,1.3,8.5],[0,1.1,0]);
    const tag=(x,y,top,price,col,tk)=>{if(t<tk)return;const a=pop(t,tk,0.4),sw=0.12*Math.sin((t-tk)*5)*Math.exp(-(t-tk)*1.2);g.save();g.translate(x,y-260);g.rotate(sw);g.strokeStyle='#111';g.lineWidth=5;g.beginPath();g.moveTo(0,0);g.lineTo(0,120);g.stroke();g.translate(0,120);g.scale(a,a);
      g.fillStyle=col;g.lineWidth=9;g.beginPath();g.moveTo(-170,40);g.lineTo(0,-20);g.lineTo(170,40);g.lineTo(170,300);g.lineTo(-170,300);g.closePath();g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(0,25,14,0,7);g.fill();
      txt(top,0,105,44,{fill:'#111',stroke:0});txt(price,0,200,92,{sw:16});txt('USD',0,268,32,{fill:'#111',stroke:0});g.restore()};
    tag(W*0.22,H*0.45,'STANDARD','$79.99','#FFD23F',23.5);tag(W*0.78,H*0.45,'ULTIMATE','$99.99','#3FF0FF',25.3);flash(t,22.4,0.2)}
  else{const S=scene('stage');setBG('neon');const gift=stageProp('gift',gr=>{const P=toon(0xFF3DA6),Rb=toon(0xFFD23F);part(gr,new THREE.BoxGeometry(1.4,1.2,1.4),P,[0,0.6,0],[1,1,1],[0,0,0],0.02);part(gr,new THREE.BoxGeometry(0.22,1.22,1.42),Rb,[0,0.6,0],[1,1,1],[0,0,0],0);part(gr,new THREE.BoxGeometry(1.42,1.22,0.22),Rb,[0,0.6,0],[1,1,1],[0,0,0],0);
      const lid=new THREE.Group();lid.position.set(0,1.2,0);gr.add(lid);part(lid,new THREE.BoxGeometry(1.56,0.3,1.56),P,[0,0.15,0],[1,1,1],[0,0,0],0.02);part(lid,new THREE.BoxGeometry(0.24,0.32,1.58),Rb,[0,0.15,0],[1,1,1],[0,0,0],0);part(lid,new THREE.BoxGeometry(1.58,0.32,0.24),Rb,[0,0.15,0],[1,1,1],[0,0,0],0);for(const s of [-1,1])part(lid,new THREE.TorusGeometry(0.22,0.07,8,16),Rb,[s*0.2,0.45,0],[1,1,1],[0,0,s*0.6],0.008);gr.userData.lid=lid});
    stageOnly('gift');gift.position.set(1.3,0,0);const op=seg(t,29.3,30.0);const lid=gift.userData.lid;lid.position.set(op*0.8,1.2+Math.sin(op*PI)*1.6+op*0.4,0);lid.rotation.z=-op*1.4;
    putGuy(S.S,-1.4,0,0.2,0.4);guy.pose(idle(t,{mouth:t>29.3?'o':'smile',wide:t>29.3,mouthSize:1.4,armL:[t>29.3?2.5:0.3,0],armR:[t>29.3?2.5:0.3,0],bendL:t>29.3?0.5:0,bendR:t>29.3?0.5:0,jump:t>29.3&&t<29.9?0.25*Math.sin(seg(t,29.3,29.9)*PI):0.012*Math.sin(t*2.4)}));
    S.shot([0,1.6,8.5],[0,1.1,0]);if(t>29.4){const p=proj(new THREE.Vector3(1.3,1.3,0),S.cam);for(let i=0;i<16;i++){const a=i/16*PI*2,d=(t-29.4)*420*(0.6+hash(i)*0.6);if(t-29.4>1.6)break;g.fillStyle=i%2?'#FFD23F':'#3FF0FF';g.beginPath();g.arc(p[0]+Math.cos(a)*d,p[1]+Math.sin(a)*d-80,9,0,7);g.fill()}}
    pill('PRE-ORDER BONUS',W/2,110,50,'#FFD23F','#111',t,27.6,32.95);pill('VINTAGE VICE CITY PACK',W*0.66,H*0.72,52,'#FF3DA6','#fff',t,30.3,32.95);flash(t,27.4,0.2)}
  vignette();cap16(t+T0)};
