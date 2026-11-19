// ===== Could you escape a sinking car like in GTA? (crazy what-if + GTA 6) =====
const TT=21.7;
const CU={c1:3.28,c2:6.68,c3:10.76,sb:12.4,wo:13.6,go:14.56,c4:15.44,c5:17.44,c6:20.0};
guy.outfit({snapback:1,chain:1,shades:1});
BUILD.pier=()=>{const S=new THREE.Scene();lights(S);const o={S};
  o.water=toon(0x1F8FC4);part(S,new THREE.PlaneGeometry(800,800),o.water,[0,0,0],[1,1,1],[-PI/2,0,0],0);
  o.glints=[];for(let i=0;i<140;i++)o.glints.push(part(S,new THREE.PlaneGeometry(1+hash(i)*3,0.14),basic(0xBFEFFF),[(hash(i*3)-0.5)*120,0.02,(hash(i*7)-0.6)*90],[1,1,1],[-PI/2,0,0],0));
  // pier
  const W1=toon(0x9C6B3E),W2=toon(0x7A4E2A);part(S,new THREE.BoxGeometry(6,0.3,16),W1,[0,1.0,-10],[1,1,1],[0,0,0],0.02);
  for(let k=0;k<16;k++)part(S,new THREE.BoxGeometry(6.02,0.02,0.06),W2,[0,1.16,-17.5+k],[1,1,1],[0,0,0],0);
  for(const x of [-2.8,2.8])for(let z=-17;z<=-2;z+=3)part(S,cap(0.18,2.4),W2,[x,0,z]);
  for(const x of [-2.9,2.9]){part(S,new THREE.BoxGeometry(0.12,0.12,15.5),toon(0xF2F2F2),[x,1.85,-10],[1,1,1],[0,0,0],0.008);for(let z=-17.5;z<=-2.5;z+=2.5)part(S,cap(0.05,0.7),toon(0xF2F2F2),[x,1.5,z])}
  part(S,new THREE.BoxGeometry(6,0.5,0.25),toon(0xFFD23F),[0,1.35,-2.1],[1,1,1],[0,0,0],0.01);
  // shore + skyline
  part(S,new THREE.BoxGeometry(600,0.8,40),toon(0xF2D59A),[0,0.2,-38],[1,1,1],[0,0,0],0.02);for(let k=-16;k<16;k++)palm(S,k*8+2,-22,2.0,0.15,hash(k)*6);
  const pal=[0xFF8FB1,0x7FE0D6,0xFFD27F,0xB59CFF,0xFFB38A,0x8FD0FF];for(let i=0;i<26;i++){const x=(i-13)*14+(hash(i)-0.5)*5,h=10+hash(i*5)*30,w=8+hash(i*3)*5;const tx=winTex(i+70);tx.repeat.set(3,Math.round(h/4));part(S,new THREE.BoxGeometry(w,h,8),tmat(pal[i%6],tx),[x,h/2,-50-hash(i*9)*15],[1,1,1],[0,0,0],0.03)}
  const car=makeCar(0x2EC4B6);S.add(car.c);car.body[3].visible=false;o.car=car;
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,1000);o.shot=(p,l)=>{o.cam.position.set(...p);o.cam.lookAt(...l);setBG('sunset');r.render(o.S,o.cam)};return o};
const DECK=1.15;
const C0={p:[9.6,4.4,8.4],l:[0.6,1.7,-3.6]};
function carOnPier(P){P.car.c.position.set(0,DECK,-5.2);P.car.c.rotation.set(0,-PI/2,0)}
function carFloat(P,t,sink=0){const b=0.06*Math.sin(t*2.2);P.car.c.position.set(0,-0.42+b-sink,4.2);P.car.c.rotation.set(0.04*Math.sin(t*1.7)+0.08*sink,-PI/2,0.03*Math.sin(t*1.3));return b}
function waterAnim(P,t){P.glints.forEach((m,i)=>m.position.x=((hash(i*3)*120+t*0.8+60)%120)-60)}
function openGuy(P,t){putGuy(P.S,1.9,DECK,-2.7,-0.35);guy.pose({armL:[0.35,0.1],armR:[0.35,0.1],lookY:-0.6,headPitch:0.25,look:0.25*Math.sin(t*2*PI/3.4),mouth:'o',mouthSize:0.6,blink:BLINK(t),jump:0.01*Math.sin(t*2*PI/1.7)})}
function yrgIcon(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#14939A';g.strokeStyle='#111';g.lineWidth=7;rr(-55,-10,110,120,40);g.fill();g.stroke();g.fillStyle='#FFCC2E';g.beginPath();g.arc(0,-55,50,0,7);g.fill();g.stroke();g.fillStyle='#3A2A20';g.beginPath();g.arc(0,-70,48,PI*1.05,PI*1.95);g.fill();
  g.strokeStyle='#111';g.lineWidth=5;for(const sx of [-18,18]){g.beginPath();g.arc(sx,-52,13,0,7);g.stroke()}g.fillStyle='#3A2A20';g.fillRect(-20,-30,40,8);g.restore()}
function timer(sec){g.save();g.translate(W/2,330);panel(0,0,520,170,'rgba(10,12,25,0.88)',sec<15?'#FF4A4A':'#3FF0FF');const s=Math.max(0,Math.ceil(sec));txt('0:'+String(s).padStart(2,'0'),0,6,120,{stroke:0,fill:sec<15?'#FF4A4A':'#fff'});g.restore()}
function cardC(x,y,s,n,label,col,icon){if(s<=0)return;g.save();g.translate(x,y);g.scale(s,s);panel(0,0,820,190,'rgba(10,12,25,0.9)',col);g.fillStyle=col;g.beginPath();g.arc(-320,0,62,0,7);g.fill();txt(String(n),-320,4,80,{stroke:0,fill:'#111'});txt(label,60,4,76,{stroke:0});g.restore()}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();const P=scene('pier');waterAnim(P,t);
  if(t<CU.c1){carOnPier(P);openGuy(P,t);const k=ease(seg(t,0.3,CU.c1));P.shot(mix(C0.p,[8.8,4.1,7.6],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('COULD YOU ESCAPE',W/2,215,74,{sw:16});txt('A SINKING CAR',W/2,320,104,{fill:'#FFD23F',sw:22});txt('LIKE IN GTA?',W/2,430,96,{fill:'#3FF0FF',sw:20});g.restore();
    comic('GULP.',W*0.22,1120,86,t,1.9,{life:1.1,rot:-0.08,fill:'#fff'})}
  else if(t<CU.c2){carFloat(P,t);const cp=P.car.c.position;putGuy(P.S,cp.x,cp.y+0.55,cp.z-0.35,0);guy.pose({...SIT,armL:[1.2+0.5*Math.sin(t*9),0.2],armR:[1.2+0.5*Math.cos(t*9),0.2],mouth:'o',mouthSize:1.3,wide:true,blink:BLINK(t)});
    const k=ease(seg(t,CU.c1,CU.c2));P.shot(mix([6.5,2.4,11.5],[5.6,2.0,10.4],k),[0,0.6,4.0]);flash(t,CU.c1,0.15);
    timer(lerp(60,52,seg(t,CU.c1,CU.c2)));pill('ABOUT 1 MINUTE',W/2,520,58,'#FFD23F','#111',t,CU.c1+1.6,CU.c2);comic('SPLOOSH!',W*0.7,780,90,t,CU.c1+0.1,{life:1.0,rot:0.08,fill:'#fff'});comic('BLUB',W*0.25,1080,70,t,CU.c1+1.4,{life:1.0,rot:-0.08,fill:'#BFEFFF'})}
  else if(t<CU.c3){clear3d();setBG('blue');flash(t,CU.c2,0.15);const wl=lerp(1300,700,easeOut(seg(t,CU.c2+0.2,CU.c2+1.6)));
    // car side cutaway
    const cx=W/2,cy=1000;g.save();g.fillStyle='#2EC4B6';g.strokeStyle='#111';g.lineWidth=10;rr(cx-400,cy-60,800,240,50);g.fill();g.stroke();g.beginPath();g.moveTo(cx-260,cy-60);g.lineTo(cx-170,cy-230);g.lineTo(cx+190,cy-230);g.lineTo(cx+290,cy-60);g.closePath();g.fillStyle='rgba(127,211,255,0.55)';g.fill();g.stroke();
    g.strokeStyle='#111';g.lineWidth=7;rr(cx-150,cy-40,300,190,16);g.stroke();g.fillStyle='#1d1d24';for(const wx of [-260,260]){g.beginPath();g.arc(cx+wx,cy+190,70,0,7);g.fill()}g.restore();
    yrgIcon(cx-20,cy-110,1.05);
    g.save();g.globalAlpha=0.55;g.fillStyle='#1F8FC4';g.fillRect(0,wl,W,H-wl);g.globalAlpha=1;g.strokeStyle='#BFEFFF';g.lineWidth=8;g.beginPath();for(let x=0;x<=W;x+=20)g.lineTo(x,wl+10*Math.sin(x/60+t*4));g.stroke();g.restore();
    if(t>CU.c2+1.9){const n=3;for(let i=0;i<n;i++){const y=cy+i*60,pu=18*Math.sin(t*8+i);arrow(cx+480+pu,y,cx+170,y,'#FF4A4A',22)}
      g.save();g.translate(cx,cy+235);g.rotate(-0.06);const sc=backOut(seg(t,CU.c2+2.6,CU.c2+2.9));g.scale(sc,sc);g.strokeStyle='#FF4A4A';g.lineWidth=12;rr(-230,-62,460,124,18);g.stroke();txt('HELD SHUT',0,4,74,{stroke:0,fill:'#FF4A4A'});g.restore()}
    panel(W/2,330,800,150);txt('WATER PRESSURE',W/2,300,62,{stroke:0,fill:'#3FF0FF'});txt('PUSHES ON THE DOOR',W/2,362,46,{stroke:0});
    comic('NOPE!',W*0.78,560,88,t,CU.c2+2.9,{life:1.0,rot:0.08,fill:'#fff'})}
  else if(t<CU.c4){clear3d();setBG('teal');flash(t,CU.c3,0.15);panel(W/2,300,820,150);txt('EXPERTS SAY:',W/2,300,82,{stroke:0,fill:'#FFD23F'});
    cardC(W/2,620,backOut(seg(t,CU.sb,CU.sb+0.3)),1,'SEATBELT OFF','#5BE37A');cardC(W/2,860,backOut(seg(t,CU.wo,CU.wo+0.3)),2,'WINDOW OPEN','#3FF0FF');cardC(W/2,1100,backOut(seg(t,CU.go,CU.go+0.3)),3,'GET OUT!','#FFD23F');
    if(t>CU.sb+0.3)check(W*0.86,620,1.0);if(t>CU.wo+0.3)check(W*0.86,860,1.0);if(t>CU.go+0.3)check(W*0.86,1100,1.0);
    if(t<CU.sb){const s=backOut(seg(t,CU.c3+0.3,CU.c3+0.6));yrgIcon(W/2,880,1.6*s)}}
  else if(t<CU.c5){const b=carFloat(P,t,0.25);const cp=P.car.c.position;putGuy(P.S,cp.x,cp.y+1.05,cp.z-0.2,0.5);guy.pose({armL:[2.7+0.25*Math.sin(t*10),0],armR:[0.4,0.1],mouth:'grin',blink:BLINK(t),jump:0.02*Math.abs(Math.sin(t*5))});
    const k=ease(seg(t,CU.c4,CU.c5));P.shot(mix([-5.5,2.8,12.5],[-4.8,2.5,11.4],k),[0,1.4,4.2]);flash(t,CU.c4,0.15);
    g.save();const s=backOut(seg(t,CU.c4+0.2,CU.c4+0.5));g.translate(W/2,400);g.scale(s,s);panel(0,0,700,200,'rgba(10,12,25,0.9)','#FF4A4A');phoneIcon(-220,0,1.0);txt('CALL',60,-34,70,{stroke:0});txt('AFTER!',60,40,70,{stroke:0,fill:'#FFD23F'});g.restore();
    comic('PHEW!',W*0.72,850,90,t,CU.c4+1.0,{life:1.1,rot:0.08,fill:'#fff'})}
  else if(t<CU.c6){carFloat(P,t,0.55);const sx=lerp(1.5,-0.2,seg(t,CU.c5,CU.c6)),sz=lerp(2.2,-0.6,seg(t,CU.c5,CU.c6));putGuy(P.S,sx,-0.95+0.05*Math.sin(t*6),sz,PI+0.5);
    guy.pose({armL:[1.35+0.35*Math.sin(t*7),0.5*Math.sin(t*7)],armR:[1.35+0.35*Math.sin(t*7+PI),0.5*Math.sin(t*7+PI)],bendL:0.6,bendR:0.6,mouth:'grin',blink:BLINK(t),headPitch:-0.15});
    P.shot([8.5,4.2,7.5],[0.4,0.3,0.6]);flash(t,CU.c5,0.15);
    pill('GTA: JUST SWIM',W/2,330,64,'#3FF0FF','#111',t,CU.c5+0.3,CU.c6);comic('SPLISH',W*0.25,1000,70,t,CU.c5+0.6,{life:0.8,rot:-0.08,fill:'#BFEFFF'});comic('EASY MODE',W*0.68,620,74,t,CU.c5+1.2,{life:1.2,rot:0.06,fill:'#FFD23F'})}
  else{carOnPier(P);openGuy(P,t-TT);const k=ease(seg(t,CU.c6,TT-0.25));P.shot(mix([12,5.4,10.5],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
