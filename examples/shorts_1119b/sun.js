// ===== What would happen if the Sun suddenly disappeared? (crazy what-if) =====
// cues: c1 "For", c2 "Then", cE "Earth", c3 "In", c4 "But", c5 "Which"
const CU={c1:3.2,c2:9.76,cE:11.28,c3:13.68,c4:17.36,c5:20.16};
const TT=21.8;
BUILD.beach=()=>{const S=new THREE.Scene();lights(S);const o={S};o.L=S.children.filter(c=>c.isLight);o.L0=o.L.map(l=>l.intensity);
  o.sand=toon(0xF2D59A);o.sea=toon(0x2EB8D8);o.foam=basic(0xE6FBFF);
  part(S,new THREE.PlaneGeometry(400,60),o.sand,[0,0,10],[1,1,1],[-PI/2,0,0],0);
  part(S,new THREE.PlaneGeometry(400,300),o.sea,[0,-0.02,-150],[1,1,1],[-PI/2,0,0],0);
  o.foams=[];for(let i=0;i<20;i++)o.foams.push(part(S,new THREE.PlaneGeometry(2+hash(i)*4,0.12),o.foam,[(hash(i*3)-0.5)*60,0.01,-20+(hash(i*7)-1)*60],[1,1,1],[-PI/2,0,0],0));
  o.sun=part(S,SPH,basic(0xFFE680),[1.5,11,-80],[4,4,4],[0,0,0],0);o.glow=part(S,SPH,new THREE.MeshBasicMaterial({color:0xFFF3B0,transparent:true,opacity:0.35}),[1.5,11,-81],[6,6,6],[0,0,0],0);
  o.palms=[];for(let k=0;k<6;k++)o.palms.push(palm(S,-8+k*3.4+hash(k)*1.5,-3.5-hash(k*3)*3,1.5,0.18,hash(k*5)*6));
  const l=new THREE.Group();l.position.set(0,0,0);S.add(l);o.lounger=l;const LC=toon(0x3FA9F5);part(l,new THREE.BoxGeometry(0.9,0.1,2.0),LC,[0,0.42,0.1],[1,1,1],[0,0,0],0.01);part(l,new THREE.BoxGeometry(0.9,0.1,0.9),LC,[0,0.75,-0.95],[1,1,1],[0.65,0,0],0.01);for(const [x,z] of [[-0.4,-0.8],[0.4,-0.8],[-0.4,0.9],[0.4,0.9]])part(l,cap(0.03,0.36),toon(0xEEEEEE),[x,0.2,z]);
  const um=new THREE.Group();um.position.set(-1.5,0,-0.8);S.add(um);part(um,cap(0.04,2.6),toon(0xEEEEEE),[0,1.3,0]);for(let i=0;i<8;i++)part(um,new THREE.ConeGeometry(1.5,0.55,8,1,true,i*PI/4,PI/4),toon(i%2?0xFFFFFF:0xFF5E8A),[0,2.65,0],[1,1,1],[0,0,0],0);
  const ball=part(S,SPH,toon(0xFFD23F),[1.6,0.25,1.2],[0.25,0.25,0.25],[0,0,0],0.01);
  o.cup=new THREE.Group();o.cup.position.set(0.85,0,0.2);S.add(o.cup);part(o.cup,cap(0.03,0.45),toon(0xC98B55),[0,0.25,0]);part(o.cup,new THREE.CylinderGeometry(0.25,0.25,0.05,16),toon(0xC98B55),[0,0.5,0],[1,1,1],[0,0,0],0.006);part(o.cup,new THREE.CylinderGeometry(0.07,0.06,0.2,16),toon(0xFF8FB1),[0,0.62,0],[1,1,1],[0,0,0],0.006);
  o.ice=[];for(let i=0;i<16;i++){const m=part(S,new THREE.BoxGeometry(1+hash(i)*2,0.15,1+hash(i*2)),toon(0xDDF3FF),[(hash(i*5)-0.5)*24,0.05,-4-hash(i*9)*16],[1,1,1],[0,hash(i)*3,0],0.01);m.visible=false;o.ice.push(m)}
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,400);
  o.mode=(m)=>{const dark=m!=='day',ice=m==='ice';o.sun.visible=o.glow.visible=!dark;o.L.forEach((l,i)=>l.intensity=o.L0[i]*(m==='day'?1:ice?0.75:0.35));o.sand.color.set(ice?0xF2F8FF:0xF2D59A);o.sea.color.set(ice?0xA9DDF2:(dark?0x1C5A78:0x2EB8D8));o.ice.forEach(x=>x.visible=ice)};
  o.shot=(p,l,bgc)=>{o.cam.position.set(...p);o.cam.lookAt(...l);setBG(bgc);r.render(o.S,o.cam)};return o};
const DAYBG='linear-gradient(#3FA9FF,#8ED3FF 55%,#DDF3FF)',NIGHTBG='linear-gradient(#02030A,#070B1E 60%,#0E1530)',ICEBG='linear-gradient(#0A1030,#24305A 55%,#5A6A9A)';
const C0={p:[3.6,2.0,8.6],l:[-0.2,1.6,0]};
function lounge(B,t,o={}){putGuy(B.S,0,0.0,0.15,0);guy.pose({...SIT,sitY:-0.3,armL:[0.55,-0.35],armR:[0.55,-0.35],bendL:0.5,bendR:0.5,mouth:'smile',blink:BLINK(t),headPitch:-0.1,jump:0.01*Math.sin(t*2*PI/2.4),...o})}
function starsBG(t,n=110,a=1){for(let i=0;i<n;i++){g.fillStyle=`rgba(255,255,255,${a*(0.3+0.6*Math.abs(Math.sin(t*1.5+i)))})`;g.beginPath();g.arc(hash(i*3.1)*W,hash(i*7.7)*H*0.75,1.5+hash(i)*2.5,0,7);g.fill()}}
function earth2d(x,y,R,dark=0){g.save();g.fillStyle='#3E7BD6';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.arc(x,y,R,0,7);g.fill();g.save();g.clip();g.fillStyle='#4FB860';for(const [a,b,s] of [[-0.4,-0.3,0.5],[0.35,0.25,0.4],[-0.1,0.5,0.3]]){g.beginPath();g.ellipse(x+a*R,y+b*R,s*R,s*R*0.6,0.4,0,7);g.fill()}if(dark>0){g.fillStyle=`rgba(5,8,20,${0.75*dark})`;g.fillRect(x-R,y-R,2*R,2*R)}g.restore();g.beginPath();g.arc(x,y,R,0,7);g.stroke();g.restore()}
function thermo(x,y,v){g.save();g.translate(x,y);const f=clamp((v+80)/115);g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=8;rr(-34,-330,68,600,34);g.fill();g.stroke();g.beginPath();g.arc(0,290,62,0,7);g.fill();g.stroke();
  const col=v<0?'#4FB8FF':'#FF4A4A';g.fillStyle=col;g.beginPath();g.arc(0,290,48,0,7);g.fill();rr(-18,260-560*f,36,560*f+30,18);g.fill();
  for(let k=0;k<=5;k++){const yy=260-k*112;g.fillStyle='#111';g.fillRect(16,yy-3,18,6)}g.restore()}
function fish(x,y,s,dir){g.save();g.translate(x,y);g.scale(s*dir,s);g.fillStyle='#FF9E3D';g.strokeStyle='#111';g.lineWidth=5;g.beginPath();g.ellipse(0,0,40,22,0,0,7);g.fill();g.stroke();g.beginPath();g.moveTo(-36,0);g.lineTo(-64,-20);g.lineTo(-64,20);g.closePath();g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(20,-5,5,0,7);g.fill();g.restore()}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();const B=scene('beach');guy.outfit({shades:1});const sea=t=>B.foams.forEach((m,i)=>m.position.x=(hash(i*3)-0.5)*60+0.4*Math.sin(t*2*PI/3+i));
  if(t<CU.c1){B.mode('day');sea(t);lounge(B,t);const k=ease(seg(t,0.2,CU.c1));B.shot(mix(C0.p,[3.0,1.9,7.4],k),C0.l,DAYBG);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT WOULD HAPPEN IF THE',W/2,215,58,{sw:14});txt('SUN',W/2,330,150,{fill:'#FFD23F',sw:28});txt('DISAPPEARED?',W/2,460,96,{fill:'#FF7A3D',sw:22});g.restore();
    comic('AHHH...',W*0.72,700,80,t,1.0,{life:1.4,rot:0.08,fill:'#fff'})}
  else if(t<CU.c2){clear3d();setBG('radial-gradient(circle at 50% 30%,#141A3C,#05070F 75%)');starsBG(t);flash(t,CU.c1,0.15);
    const sx=W/2,sy=560,ex=W/2,ey=1200,k=seg(t,CU.c1+0.2,CU.c2-0.3);
    if(t<CU.c1+0.5){const a=1-seg(t,CU.c1,CU.c1+0.5);g.save();g.globalAlpha=a;g.fillStyle='#FFE680';g.beginPath();g.arc(sx,sy,130*(1+0.5*(1-a)),0,7);g.fill();g.restore()}
    g.save();g.setLineDash([22,16]);g.strokeStyle='rgba(255,230,128,0.8)';g.lineWidth=6;g.beginPath();g.arc(sx,sy,130,0,7);g.stroke();g.restore();
    // last light still travelling to Earth
    const fy=lerp(sy+130,ey-90,k);g.save();const gr=g.createLinearGradient(0,fy-260,0,fy);gr.addColorStop(0,'rgba(255,230,128,0)');gr.addColorStop(1,'rgba(255,230,128,0.85)');g.fillStyle=gr;g.fillRect(W/2-260,Math.max(sy+130,fy-260),520,fy-Math.max(sy+130,fy-260));g.restore();
    earth2d(ex,ey,80);txt('LAST SUNLIGHT',W/2+290,fy-60,40,{fill:'#FFE680',sw:10});
    const sec=Math.floor(500*k);g.save();g.translate(W/2,300);panel(0,0,560,170);txt(`${Math.floor(sec/60)}:${String(sec%60).padStart(2,'0')}`,0,-12,100,{stroke:0});txt('MIN UNTIL WE NOTICE',0,58,34,{stroke:0,fill:'#FFD23F'});g.restore();
    comic('POOF!',W*0.75,560,100,t,CU.c1+0.05,{life:0.9,rot:0.1,fill:'#fff'});pill('LIGHT + GRAVITY',W/2,1010,46,'#FFD23F','#111',t,CU.c1+2.5,CU.c2-0.1)}
  else if(t<CU.cE){B.mode('night');sea(t);const jk=seg(t,CU.c2,CU.c2+0.3);lounge(B,t,{armL:[2.6+0.4*Math.sin(t*12),0],armR:[2.6+0.4*Math.cos(t*11),0],bendL:0.2,bendR:0.2,mouth:'o',mouthSize:1.5,wide:true,jump:0.15*Math.sin(jk*PI)});
    B.shot(mix([-2.6,1.6,6.4],[-2.3,1.5,5.8],seg(t,CU.c2,CU.cE)),[0.1,1.4,0],NIGHTBG);g.save();g.globalCompositeOperation='destination-over';starsBG(t,80,0.9);g.restore();flash(t,CU.c2,0.12);
    comic('LIGHTS OUT!',W*0.5,560,104,t,CU.c2+0.15,{life:1.2,rot:-0.06,fill:'#FFD23F'})}
  else if(t<CU.c3){clear3d();setBG('radial-gradient(circle at 50% 45%,#141A3C,#05070F 75%)');starsBG(t);flash(t,CU.cE,0.15);
    const cx=W/2,cy=820,R=300,a0=-2.2,w=1.2,tb=CU.cE+0.5;g.save();g.setLineDash([18,14]);g.strokeStyle='rgba(255,255,255,0.45)';g.lineWidth=5;g.beginPath();g.arc(cx,cy,R,0,7);g.stroke();g.strokeStyle='rgba(255,230,128,0.6)';g.beginPath();g.arc(cx,cy,60,0,7);g.stroke();g.restore();
    let ex,ey;const ab=a0+w*(tb-CU.cE);if(t<tb){const a=a0+w*(t-CU.cE);ex=cx+Math.cos(a)*R;ey=cy+Math.sin(a)*R}else{const d=(t-tb)*w*R*1.0;ex=cx+Math.cos(ab)*R-Math.sin(ab)*d;ey=cy+Math.sin(ab)*R+Math.cos(ab)*d;
      g.save();g.strokeStyle='#3FF0FF';g.lineWidth=10;g.lineCap='round';g.beginPath();g.moveTo(cx+Math.cos(ab)*R,cy+Math.sin(ab)*R);g.lineTo(ex,ey);g.stroke();g.restore()}
    earth2d(ex,ey,48,0.7);panel(W/2,300,760,140);txt('STRAIGHT LINE',W/2,300,72,{stroke:0,fill:'#3FF0FF'});comic('BYE!',W*0.75,1220,96,t,tb+0.3,{life:1.0,rot:0.1,fill:'#fff'})}
  else if(t<CU.c4){B.mode('ice');guy.outfit({beanie:1});const sh=0.03*Math.sin(t*60);putGuy(B.S,0.5+sh,0,2.3,0.15);guy.pose({armL:[0.5,-0.9],armR:[0.5,-0.9],bendL:1.6,bendR:1.6,mouth:'teeth',teethGap:0.1+0.1*Math.abs(Math.sin(t*30)),blink:BLINK(t),brow:0.02});
    B.shot(mix([3.8,2.3,9.4],[3.4,2.2,8.6],seg(t,CU.c3,CU.c4)),[-0.2,1.5,1.2],ICEBG);flash(t,CU.c3,0.15);
    g.save();for(let i=0;i<70;i++){const x=(hash(i*3.3)*W+Math.sin(t+i)*30),y=(hash(i*5.5)*H+t*(120+hash(i)*100))%H;g.fillStyle='rgba(255,255,255,0.85)';g.beginPath();g.arc(x,y,3+hash(i*2)*5,0,7);g.fill()}g.restore();
    const v=lerp(15,-73,ease(seg(t,CU.c3+0.2,CU.c4-0.8)));thermo(W*0.84,800,v);g.save();g.translate(W/2,300);panel(0,0,620,170,'rgba(10,20,45,0.88)','#4FB8FF');txt(`${Math.round(v)}°C`,0,-12,104,{stroke:0,fill:v<0?'#9FE0FF':'#fff'});txt('AFTER ONE YEAR',0,58,34,{stroke:0,fill:'#FFD23F'});g.restore();
    comic('BRRRR!',W*0.3,640,96,t,CU.c3+1.2,{life:1.2,rot:-0.08,fill:'#fff'})}
  else if(t<CU.c5){clear3d();setBG('linear-gradient(#070B1E,#0E1530)');flash(t,CU.c4,0.15);const iy=560,ih=150,sb=1290;
    g.fillStyle='#DDF3FF';g.fillRect(0,iy,W,ih);g.strokeStyle='#8FC6E0';g.lineWidth=6;for(let i=0;i<7;i++){g.beginPath();g.moveTo(hash(i)*W,iy);g.lineTo(hash(i)*W+40,iy+60);g.lineTo(hash(i)*W+10,iy+ih);g.stroke()}
    const gr=g.createLinearGradient(0,iy+ih,0,sb);gr.addColorStop(0,'#2E86DE');gr.addColorStop(1,'#0B2A66');g.fillStyle=gr;g.fillRect(0,iy+ih,W,sb-iy-ih);
    g.fillStyle='#5A3A22';g.fillRect(0,sb,W,H-sb);const gl=g.createLinearGradient(0,sb,0,sb+120);gl.addColorStop(0,'rgba(255,90,40,0.8)');gl.addColorStop(1,'rgba(255,90,40,0)');g.fillStyle=gl;g.fillRect(0,sb,W,120);
    for(let i=0;i<5;i++){const x=((hash(i*4)*W+(t-CU.c4)*(80+hash(i)*60)*(i%2?1:-1))%(W+200)+W+200)%(W+200)-100;fish(x,iy+ih+120+i*85,0.9,i%2?1:-1)}
    for(let i=0;i<4;i++){const ph=((t-CU.c4)*0.8+i/4)%1;g.save();g.globalAlpha=1-ph;arrow(160+i*250,sb-10-ph*60,160+i*250,sb-140-ph*60,'#FF7A3D',16);g.restore()}
    txt('ICE',W*0.82,iy+ih/2,64,{fill:'#4FB8FF',sw:12});pill('STILL LIQUID!',W/2,iy+ih+330,60,'#5BE37A','#111',t,CU.c4+0.6,CU.c5);panel(W/2,300,820,140);txt('HEAT FROM INSIDE EARTH',W/2,300,56,{stroke:0,fill:'#FF9E3D'});
    comic('PHEW!',W*0.7,iy-90,90,t,CU.c4+1.0,{life:1.0,rot:0.08,fill:'#fff'})}
  else{B.mode('day');sea(t-TT);lounge(B,t-TT);const k=ease(seg(t,CU.c5,TT-0.2));B.shot(mix([4.6,2.4,10.6],C0.p,k),C0.l,DAYBG);flash(t,CU.c5,0.15)}
  vignette();captions(t)};
