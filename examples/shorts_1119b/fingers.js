// ===== Why do your fingers wrinkle in water? (body/everyday) =====
// cue times (from word timings): c1 "After", c2 "your nerves", c3 "Scientists", c4 "People", c5 "Which"
const CU={c1:4.4,c2:6.08,c3:11.88,c4:16.68,c5:19.32,tire:15.44};
const TT=21.0;
guy.outfit({});
BUILD.pool=()=>{const S=new THREE.Scene();lights(S);const o={S};
  const tile=canvasTex(256,256);{const c=tile.ctx;c.fillStyle='#F4FBFF';c.fillRect(0,0,256,256);c.strokeStyle='#BFD9E6';c.lineWidth=6;for(let i=0;i<=4;i++){c.beginPath();c.moveTo(i*64,0);c.lineTo(i*64,256);c.stroke();c.beginPath();c.moveTo(0,i*64);c.lineTo(256,i*64);c.stroke()}tile.tx.wrapS=tile.tx.wrapT=THREE.RepeatWrapping;tile.tx.repeat.set(10,10)}
  const D=tmat(0xffffff,tile.tx);
  // deck around a pool (pool spans x -4..4, z -3..3)
  part(S,new THREE.BoxGeometry(60,0.4,30),D,[0,-0.2,-18],[1,1,1],[0,0,0],0);part(S,new THREE.BoxGeometry(60,0.4,30),D,[0,-0.2,18],[1,1,1],[0,0,0],0);
  part(S,new THREE.BoxGeometry(26,0.4,6),D,[-17,-0.2,0],[1,1,1],[0,0,0],0);part(S,new THREE.BoxGeometry(26,0.4,6),D,[17,-0.2,0],[1,1,1],[0,0,0],0);
  part(S,new THREE.BoxGeometry(8,0.1,6),toon(0x1E88C9),[0,-2.0,0],[1,1,1],[0,0,0],0);
  for(const [x,z,w,d] of [[0,-3.05,8.2,0.1],[0,3.05,8.2,0.1],[-4.05,0,0.1,6.2],[4.05,0,0.1,6.2]])part(S,new THREE.BoxGeometry(w,2,d),toon(0x37A6E0),[x,-1,z],[1,1,1],[0,0,0],0);
  // coping edge
  for(const [x,z,w,d] of [[0,-3.15,8.6,0.3],[0,3.15,8.6,0.3],[-4.15,0,0.3,6.6],[4.15,0,0.3,6.6]])part(S,new THREE.BoxGeometry(w,0.12,d),toon(0xE8DCC2),[x,0.03,z],[1,1,1],[0,0,0],0.01);
  o.water=part(S,new THREE.PlaneGeometry(8,6),new THREE.MeshToonMaterial({color:0x4FD0F0,transparent:true,opacity:0.72,gradientMap:GM}),[0,-0.12,0],[1,1,1],[-PI/2,0,0],0);
  o.ripples=[];for(let i=0;i<14;i++)o.ripples.push(part(S,new THREE.PlaneGeometry(0.5+hash(i)*0.6,0.05),basic(0xE6FBFF),[(hash(i*3)-0.5)*7,-0.1,(hash(i*7)-0.5)*5],[1,1,1],[-PI/2,0,0],0));
  // ladder
  for(const x of [-0.35,0.35])part(S,new THREE.TorusGeometry(0.35,0.04,8,16,PI),toon(0xD0D6DE),[3.0+x,0.0,-3.0],[1,1,1],[0,PI/2,0],0);
  // float ring
  o.ring=new THREE.Group();S.add(o.ring);for(let i=0;i<8;i++)part(o.ring,new THREE.TorusGeometry(0.5,0.17,10,8,PI/4),toon(i%2?0xffffff:0xFF4A4A),[0,0,0],[1,1,1],[PI/2,0,i*PI/4],0.006);o.ring.position.set(-2.4,-0.08,-1.2);
  // palms, loungers, umbrella
  for(let k=0;k<7;k++)palm(S,-9+k*3+hash(k)*1.2,-7-hash(k*3)*3,1.6,0.15,hash(k*5)*6);
  for(const x of [-3,0.5]){const l=new THREE.Group();l.position.set(x,0,-4.6);S.add(l);part(l,new THREE.BoxGeometry(1.6,0.12,0.7),toon(0xFFB74D),[0,0.4,0],[1,1,1],[0,0,0],0.01);part(l,new THREE.BoxGeometry(0.7,0.1,0.7),toon(0xFFB74D),[0.9,0.65,0],[1,1,1],[0,0,0.6],0.01);for(const xx of [-0.7,0.7])part(l,new THREE.BoxGeometry(0.06,0.35,0.6),toon(0xEEEEEE),[xx,0.18,0])}
  const um=new THREE.Group();um.position.set(-1.2,0,-5.2);S.add(um);part(um,cap(0.04,2.4),toon(0xEEEEEE),[0,1.2,0]);part(um,new THREE.ConeGeometry(1.4,0.6,8),toon(0x7C4DFF),[0,2.5,0],[1,1,1],[0,0,0],0.01);
  // side table with two bowls + marbles (on deck at z=4.2)
  const tb=new THREE.Group();tb.position.set(0,0,4.4);S.add(tb);o.tb=tb;part(tb,new THREE.BoxGeometry(1.8,0.1,0.9),toon(0xC98B55),[0,1.0,0],[1,1,1],[0,0,0],0.01);for(const [x,z] of [[-0.8,-0.35],[0.8,-0.35],[-0.8,0.35],[0.8,0.35]])part(tb,cap(0.04,0.9),toon(0x8A5A2B),[x,0.5,z]);
  o.bowls=[];for(const x of [-0.5,0.5]){const b=new THREE.Group();b.position.set(x,1.05,0.05);tb.add(b);part(b,new THREE.SphereGeometry(1,24,12,0,PI*2,PI/2,PI/2),toon(x<0?0x4FB8FF:0xFF8FB1),[0,0.13,0],[0.26,0.14,0.26],[0,0,0],0.01);part(b,new THREE.CircleGeometry(0.22,20),toon(0x9FE6FF),[0,0.08,0],[1,1,1],[-PI/2,0,0],0);o.bowls.push(b)}
  o.marbles=[];for(let i=0;i<6;i++){const m=part(tb,SPH,toon([0xFF4A4A,0x5BE37A,0xFFD23F,0x8E5BFF,0x3FF0FF,0xFF9E3D][i]),[0,0,0],[0.055,0.055,0.055],[0,0,0],0.004);o.marbles.push(m)}
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);o.shot=(p,l,f=30)=>{o.cam.fov=f;o.cam.updateProjectionMatrix();o.cam.position.set(...p);o.cam.lookAt(...l);setBG('linear-gradient(#5EC2FF,#A9E2FF 55%,#E6F7FF)');r.render(o.S,o.cam)};return o};
const GPOS=[0.6,-1.0,0.6];
const C0={p:[2.6,1.2,6.4],l:[0.45,0.75,0.4]};
function poolAnim(P,t){P.water.position.y=-0.12+0.015*Math.sin(t*2*PI/2.0);P.ring.position.y=-0.08+0.03*Math.sin(t*2*PI/2.0+1);P.ring.rotation.y=0.1*Math.sin(t*2*PI/4.0);P.ripples.forEach((m,i)=>{m.position.x=(hash(i*3)-0.5)*7+0.15*Math.sin(t*2*PI/2+i)})}
// guy in water looking at his raised hands
function poolGuy(P,t,o={}){putGuy(P.S,...GPOS,-0.25);const w=0.03*Math.sin(t*2*PI/2.0);guy.pose({reachL:[0.2,1.55+w,0.55],reachR:[-0.2,1.55-w,0.55],poleL:[1,-0.4,-0.2],poleR:[-1,-0.4,-0.2],lookY:-0.55,headPitch:0.18,mouth:'o',mouthSize:0.6,blink:BLINK(t),jump:0.02*Math.sin(t*2*PI/2.0),...o})}
// 2D fingertip (palm side). wr 0..1 wrinkles
function finger(x,y,s,wr,o={}){g.save();g.translate(x,y);g.scale(s,s);const w=200,h=520,amp=wr*9;
  g.beginPath();g.moveTo(-w/2,h/2);for(let i=0;i<=20;i++){const yy=h/2-i*(h-w/2)/20;g.lineTo(-w/2+amp*0.6*Math.sin(i*1.9),yy)}g.arc(0,-h/2+w/2,w/2,PI,0);for(let i=20;i>=0;i--){const yy=h/2-i*(h-w/2)/20;g.lineTo(w/2+amp*0.6*Math.sin(i*1.7),yy)}g.closePath();
  g.fillStyle=o.fill||'#FFCC2E';g.fill();g.strokeStyle='#111';g.lineWidth=10;g.stroke();
  // joint crease
  g.strokeStyle='rgba(120,70,0,0.55)';g.lineWidth=7;g.beginPath();g.moveTo(-60,60);g.quadraticCurveTo(0,72,60,60);g.stroke();
  if(wr>0.02){g.save();g.clip();g.strokeStyle=`rgba(150,90,0,${0.25+0.6*wr})`;g.lineWidth=6+4*wr;g.lineCap='round';
    for(let k=0;k<6;k++){const bx=-70+k*28;g.beginPath();for(let i=0;i<=24;i++){const yy=-h/2+40+i*13;const xx=bx+Math.sin(i*0.9+k*2)*14*wr+Math.sin(i*0.35+k)*6*wr;i?g.lineTo(xx,yy):g.moveTo(xx,yy)}g.stroke()}g.restore()}
  g.restore()}
function sponge(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#FFE14D';g.strokeStyle='#111';g.lineWidth=9;rr(-120,-80,240,160,24);g.fill();g.stroke();g.fillStyle='#E0B82A';for(let i=0;i<9;i++){g.beginPath();g.ellipse(-80+(i%3)*80+hash(i)*20,-40+Math.floor(i/3)*40,14,10,0,0,7);g.fill()}g.restore()}
function tire(x,y,s,t){g.save();g.translate(x,y);g.scale(s,s);g.rotate(t*1.5);g.fillStyle='#2A2A35';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.arc(0,0,150,0,7);g.fill();g.stroke();
  g.fillStyle='#454555';for(let i=0;i<18;i++){g.save();g.rotate(i/18*PI*2);g.beginPath();g.moveTo(-14,-150);g.lineTo(14,-150);g.lineTo(8,-118);g.lineTo(-8,-118);g.fill();g.restore()}
  g.fillStyle='#C9CDD6';g.beginPath();g.arc(0,0,70,0,7);g.fill();g.stroke();g.fillStyle='#8E94A0';for(let i=0;i<5;i++){g.save();g.rotate(i/5*PI*2);g.fillRect(-10,-60,20,40);g.restore()}g.restore()}
function drop(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#4FC8FF';g.strokeStyle='#0B3D66';g.lineWidth=5;g.beginPath();g.moveTo(0,-30);g.quadraticCurveTo(24,6,0,22);g.quadraticCurveTo(-24,6,0,-30);g.fill();g.stroke();g.restore()}
function scissors(x,y,s,t){g.save();g.translate(x,y);g.scale(s,s);const o=0.25+0.2*Math.sin(t*14);g.strokeStyle='#111';g.lineWidth=8;g.fillStyle='#C9CDD6';for(const sg of [-1,1]){g.save();g.rotate(sg*o);g.beginPath();g.moveTo(0,0);g.lineTo(110,-8*sg);g.lineTo(110,4*sg);g.closePath();g.fill();g.stroke();g.fillStyle='#FF4A4A';g.beginPath();g.ellipse(-40,14*sg,28,18,0,0,7);g.fill();g.stroke();g.fillStyle='#C9CDD6';g.restore()}g.restore()}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();const P=scene('pool');poolAnim(P,t>=CU.c5?t-TT:t);P.tb.visible=true;
  if(t<CU.c1){poolGuy(P,t);const k=ease(seg(t,0.3,CU.c1));P.shot(mix(C0.p,[2.3,1.15,5.6],k),mix(C0.l,[0.5,0.8,0.5],k));
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,3.0,3.3));g.save();g.globalAlpha=a;txt('WHY DO YOUR FINGERS',W/2,215,62,{sw:15});txt('WRINKLE',W/2,320,120,{fill:'#FFD23F',sw:24});txt('IN WATER?',W/2,438,104,{fill:'#3FF0FF',sw:22});g.restore();
    if(t>3.0){const b=easeOut(seg(t,3.0,3.3));g.save();g.globalAlpha=b;panel(W/2,330,560,250,'rgba(10,12,25,0.85)','#FF4A4A');sponge(W/2-110,330,0.75);cross(W/2-110,330,1.5);txt('NOT A',W/2+150,290,60,{stroke:0});txt('SPONGE',W/2+150,360,60,{stroke:0,fill:'#FFD23F'});g.restore()}
    comic('PRUNE?!',W*0.74,640,90,t,1.7,{life:1.2,rot:0.08,fill:'#fff'})}
  else if(t<CU.c2){poolGuy(P,t,{lookY:-0.8,mouth:'smile'});const k=ease(seg(t,CU.c1,CU.c2));
    // close-up on the raised hands (world): guy at GPOS, hands near y=-1+1.55
    P.shot(mix([1.2,0.9,2.6],[1.0,0.75,2.2],k),[0.55,0.55,1.05]);flash(t,CU.c1,0.15);
    const m=Math.min(5,5*seg(t,CU.c1+0.1,CU.c2-0.3));g.save();g.translate(W/2,300);panel(0,0,560,170);txt(`${Math.floor(m)}:${String(Math.floor((m%1)*60)).padStart(2,'0')}`,0,-12,100,{stroke:0});txt('MINUTES IN WATER',0,58,34,{stroke:0,fill:'#FFD23F'});g.restore();
    comic('5 MIN!',W*0.72,700,90,t,CU.c2-0.6,{life:0.7,rot:0.08,fill:'#FFD23F'})}
  else if(t<CU.c3){clear3d();setBG('linear-gradient(#1B2A4A,#2D4A7A 60%,#3E6BA8)');flash(t,CU.c2,0.15);const k=seg(t,CU.c2+0.4,CU.c3-1.5),sh=ease(k);
    const cx=W/2,top=500,bot=1220,w=520;
    // skin cross-section
    g.save();g.beginPath();g.moveTo(cx-w/2,bot);g.lineTo(cx-w/2,top+w/2);for(let i=0;i<=40;i++){const a=PI+i/40*PI;const rr2=w/2+sh*14*Math.sin(i*1.3);g.lineTo(cx+Math.cos(a)*rr2,top+w/2+Math.sin(a)*rr2)}g.lineTo(cx+w/2,bot);g.closePath();g.fillStyle='#FFCC2E';g.fill();g.strokeStyle='#111';g.lineWidth=10;g.stroke();g.clip();
    g.fillStyle='#FFB3A1';g.beginPath();g.moveTo(cx-w/2+40,bot);g.lineTo(cx-w/2+40,top+w/2);g.arc(cx,top+w/2,w/2-40,PI,0);g.lineTo(cx+w/2-40,bot);g.fill();g.restore();
    // blood vessels shrink
    const vw=lerp(44,14,sh);g.save();g.lineCap='round';for(const [x0,bend] of [[-150,-60],[0,0],[150,60]]){g.strokeStyle='#5A0A14';g.lineWidth=vw+10;g.beginPath();g.moveTo(cx+x0,bot);g.quadraticCurveTo(cx+x0+bend,top+300,cx+x0*0.6,top+110);g.stroke();g.strokeStyle='#E8283C';g.lineWidth=vw;g.stroke()}g.restore();
    // nerve with pulses
    g.save();g.lineCap='round';g.strokeStyle='#111';g.lineWidth=24;g.beginPath();g.moveTo(cx+75,bot);g.bezierCurveTo(cx+120,top+500,cx+40,top+300,cx+70,top+140);g.stroke();g.strokeStyle='#FFE14D';g.lineWidth=12;g.stroke();
    for(let i=0;i<3;i++){const u=((t-CU.c2)*0.9+i/3)%1;const p=[(1-u)**3*(cx+75)+3*(1-u)**2*u*(cx+120)+3*(1-u)*u*u*(cx+40)+u**3*(cx+70),(1-u)**3*bot+3*(1-u)**2*u*(top+500)+3*(1-u)*u*u*(top+300)+u**3*(top+140)];g.fillStyle='#fff';g.shadowColor='#FFE14D';g.shadowBlur=30;g.beginPath();g.arc(p[0],p[1],18,0,7);g.fill()}g.restore();
    txt('NERVE',cx+250,top+620,52,{fill:'#FFE14D',sw:12});arrow(cx+250,top+580,cx+150,top+470,'#FFE14D',14);
    txt('BLOOD VESSELS',cx-150,bot+70,52,{fill:'#FF6B7A',sw:12});
    panel(W/2,300,820,150);txt(sh>0.5?'VESSELS SHRINK':'SIGNAL SENT',W/2,300,72,{stroke:0,fill:sh>0.5?'#FF6B7A':'#FFE14D'});
    comic('ON PURPOSE!',W*0.5,1660,90,t,CU.c3-1.6,{life:1.5,rot:-0.05,fill:'#5BE37A'});comic('SHRINK!',W*0.25,top+120,70,t,CU.c2+1.6,{life:1.0,rot:-0.1,fill:'#fff'})}
  else if(t<CU.c4){const T0=CU.c3,k=seg(t,T0,CU.c4);putGuy(P.S,0,0,5.2,PI);const L=P.bowls[0].position,R2=P.bowls[1].position;
    // marbles hop from blue bowl (x=-0.5) to pink bowl (x=0.5), one every 0.55s
    const per=0.55,n=Math.floor((t-T0)/per),ph=((t-T0)/per)%1;P.marbles.forEach((m,i)=>{const done=i<n,mov=i===n;let x=done?0.5:-0.5,y=1.13,z=0.05+((i%3)-1)*0.06;x+=((i*37)%5-2)*0.03;if(mov){x=lerp(-0.5,0.5,ease(ph));y=1.13+Math.sin(ph*PI)*0.35}m.position.set(x,y,z)});
    // guy reaches over the table (faces -z toward camera side? table is in front of him toward pool)
    const hx=-0.5+ (n<6?ease(ph):1); const hand=[-(hx),1.25+Math.sin(ph*PI)*0.35-0,0.75];
    guy.pose({reachR:[lerp(0.5,-0.5,n<6?ease(ph):1)*1,1.2+Math.sin(ph*PI)*0.3,0.8],reachL:[0.35,0.95,0.45],mouth:'grin',lookY:-0.6,look:lerp(1,-1,ease(ph))*0.6,headPitch:0.25,blink:BLINK(t)});
    P.shot(mix([2.8,2.6,1.2],[2.4,2.4,1.5],k),[0,1.2,4.6]);flash(t,T0,0.15);
    panel(W/2,330,800,230);txt('WET MARBLE TEST',W/2,270,48,{stroke:0,fill:'#3FF0FF'});const sw=seg(t,T0+0.5,CU.c4-0.6);
    g.fillStyle='#333';rr(W/2-250,320,500,34,17);g.fill();rr(W/2-250,374,500,34,17);g.fill();g.fillStyle='#5BE37A';rr(W/2-250,320,500*Math.min(1,sw*1.0),34,17);g.fill();g.fillStyle='#9AA0AA';rr(W/2-250,374,500*Math.min(1,sw*0.85),34,17);g.fill();
    txt('WRINKLY',W/2-270,337,32,{stroke:0,align:'right',fill:'#5BE37A'});txt('SMOOTH',W/2-270,391,32,{stroke:0,align:'right',fill:'#C9CDD6'});
    if(t>CU.tire){const a=backOut(seg(t,CU.tire,CU.tire+0.35));g.save();g.translate(W*0.5,1060);g.scale(a,a);panel(0,0,760,330,'rgba(10,12,25,0.88)','#FFD23F');tire(-200,0,0.85,t);txt('=',0,0,110,{stroke:0});finger(200,10,0.5,1);g.restore();comic('LIKE TREADS!',W*0.5,830,76,t,CU.tire+0.1,{life:1.1,rot:-0.05,fill:'#fff'})}
    comic('FASTER!',W*0.76,640,84,t,T0+1.4,{life:1.0,rot:0.08,fill:'#5BE37A'})}
  else if(t<CU.c5){clear3d();setBG('linear-gradient(#2B1550,#5A2A8A 60%,#8E4BC2)');flash(t,CU.c4,0.15);const a1=easeOut(seg(t,CU.c4,CU.c4+0.4)),a2=easeOut(seg(t,CU.c4+0.3,CU.c4+0.7));
    g.save();g.globalAlpha=a1;finger(W*0.3,880,1,1);txt('NORMAL',W*0.3,1230,58,{fill:'#5BE37A',sw:13});g.restore();
    g.save();g.globalAlpha=a2;finger(W*0.7,880,1,0);txt('CUT NERVE',W*0.7,1230,58,{fill:'#FF6B7A',sw:13});
    g.strokeStyle='#111';g.lineWidth=22;g.lineCap='round';g.beginPath();g.moveTo(W*0.7+40,1180);g.lineTo(W*0.7+40,1060);g.moveTo(W*0.7+40,990);g.lineTo(W*0.7+40,760);g.stroke();g.strokeStyle='#FFE14D';g.lineWidth=10;g.stroke();
    scissors(W*0.7+150,1025,0.9,t);g.restore();
    if(t>CU.c4+0.9){check(W*0.3,560,1.6);cross(W*0.7,560,1.6)}
    panel(W/2,300,700,140);txt('NO NERVE = NO PRUNE',W/2,300,58,{stroke:0,fill:'#FFD23F'});comic('SNIP!',W*0.84,880,80,t,CU.c4+0.5,{life:0.9,rot:0.1,fill:'#fff'})}
  else{const k=ease(seg(t,CU.c5,TT-0.25));poolGuy(P,t-TT);P.shot(mix([1.9,1.4,4.4],C0.p,k),mix([0.5,0.9,0.4],C0.l,k));flash(t,CU.c5,0.15)}
  vignette();captions(t)};
