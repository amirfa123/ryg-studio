// ===== How long could you actually survive in the Hunger Games? (pop culture) =====
// cues: c1 "Survival", c2 "Three"(minutes), cH "Three"(hours), c3 "Three"(days), cF "Three"(weeks), c4 "So", cW "Find", c5 "Which"
const CU={c1:3.0,c2:5.4,cH:7.0,c3:9.6,cF:11.0,c4:12.6,cW:15.4,c5:17.4};
const TT=19.2;
BUILD.arena=()=>{const S=new THREE.Scene();lights(S);const o={S};o.L=S.children.filter(c=>c.isLight);o.L0=o.L.map(l=>l.intensity);
  o.grass=toon(0x5E9A3E);part(S,new THREE.PlaneGeometry(300,300),o.grass,[0,0,0],[1,1,1],[-PI/2,0,0],0);
  for(let i=0;i<50;i++)part(S,new THREE.CircleGeometry(0.4+hash(i)*0.5,12),toon(0x78B24E),[(hash(i*3)-0.5)*30,0.01,(hash(i*7)-0.5)*20],[1,1,1],[-PI/2,0,0],0);
  const tree=(x,z,s)=>{const tr=new THREE.Group();tr.position.set(x,0,z);tr.scale.setScalar(s);S.add(tr);part(tr,cap(0.22,3.4),toon(0x5A4632),[0,1.9,0]);for(let k=0;k<3;k++)part(tr,new THREE.ConeGeometry(1.5-k*0.35,1.6,9),toon(k%2?0x2F6B3A:0x3C7F45),[0,3.0+k*1.0,0],[1,1,1],[0,k,0],0.015);o.trees.push(tr)};o.trees=[];
  for(let i=0;i<70;i++){const a=hash(i*2.3)*PI*2,d=9+hash(i*5.1)*14;const x=Math.cos(a)*d,z=Math.sin(a)*d-4;tree(x,z,0.9+hash(i)*0.6)}
  for(const [x,z] of [[-3.5,-2.5],[3.8,-1.5],[-4.5,2.5]])tree(x,z,1.1);
  // supply crates in the middle
  o.crates=new THREE.Group();o.crates.position.set(-1.6,0,-2.2);S.add(o.crates);for(const [x,y,z,ry] of [[0,0.4,0,0.2],[0.9,0.4,0.2,-0.3],[0.45,1.2,0.1,0.5],[-0.8,0.3,0.5,0.1]]){const c=part(o.crates,new THREE.BoxGeometry(0.8,0.8,0.8),toon(0xB9824A),[x,y,z],[1,1,1],[0,ry,0],0.015);part(c,new THREE.BoxGeometry(1.02,0.12,1.02),toon(0x7A4E2A),[0,0,0],[1,1,1],[0,0,0],0)}
  // stream
  o.water=toon(0x3FB6E0);part(S,new THREE.PlaneGeometry(60,1.8),o.water,[0,0.02,3.4],[1,1,1],[-PI/2,0,0.05],0);o.flow=[];for(let i=0;i<16;i++)o.flow.push(part(S,new THREE.PlaneGeometry(0.6,0.06),basic(0xDDF6FF),[(hash(i)-0.5)*20,0.03,3.0+hash(i*3)*0.8],[1,1,1],[-PI/2,0,0.05],0));
  for(let i=0;i<10;i++)part(S,SPH,toon(0x9A9AA6),[(hash(i*4)-0.5)*14,0.1,2.4+(i%2)*2.0],[0.3+hash(i)*0.2,0.18,0.25],[0,hash(i)*3,0],0.012);
  o.rock=part(S,SPH,toon(0x8A8A96),[0.4,0.18,1.5],[0.45,0.32,0.4],[0,0,0],0.015);
  o.tent=new THREE.Group();o.tent.position.set(2.6,0,-0.8);S.add(o.tent);part(o.tent,new THREE.ConeGeometry(1.1,1.4,4),toon(0xE2873A),[0,0.7,0],[1,1,1],[0,PI/4,0],0.015);part(o.tent,new THREE.PlaneGeometry(0.5,0.8),basic(0x2A1A10),[0,0.4,0.56],[1,1,1],[-0.38,0,0],0);
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,300);
  o.mode=(m)=>{const n=m==='night';o.L.forEach((l,i)=>l.intensity=o.L0[i]*(n?0.45:1));o.grass.color.set(n?0x9FB6C8:0x5E9A3E);o.water.color.set(n?0x2A5A80:0x3FB6E0)};
  o.shot=(p,l,bgc)=>{o.cam.position.set(...p);o.cam.lookAt(...l);setBG(bgc);r.render(o.S,o.cam)};return o};
const DUSK='linear-gradient(#3B2A6B,#B4568C 45%,#FFB36B 80%,#FFD58A)',NIGHT='linear-gradient(#03050F,#0B1430 60%,#1B2650)',DAY='linear-gradient(#5EC2FF,#A9E2FF 60%,#E6F7FF)';
const GP0=[0.2,0,0.2],C0={p:[2.2,1.9,7.4],l:[0,1.3,0]};
guy.outfit({bandana:1});
function look(B,t,o={}){putGuy(B.S,...GP0,0.35*Math.sin(t*2*PI/4.8));guy.pose({armL:[0.35,0.1],armR:[0.35,0.1],look:Math.sin(t*2*PI/4.8),mouth:'o',mouthSize:0.6,blink:BLINK(t),brow:0.02,jump:0.01*Math.sin(t*2*PI/2.4),...o})}
function streamAnim(B,t){B.flow.forEach((m,i)=>m.position.x=((hash(i)*20+t*1.2)%20)-10)}
function card(x,y,s,icon,big,small,col,t){g.save();g.translate(x,y);g.scale(s,s);panel(0,0,300,380,'rgba(10,12,25,0.88)',col);icon(0,-60);txt(big,0,85,96,{stroke:0,fill:col});txt(small,0,150,40,{stroke:0});g.restore()}
const ICON={air:(x,y)=>{g.fillStyle='#FF9EC0';g.strokeStyle='#111';g.lineWidth=7;for(const s of [-1,1]){g.beginPath();g.ellipse(x+s*42,y,36,60,s*0.15,0,7);g.fill();g.stroke()}g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.moveTo(x,y-80);g.lineTo(x,y-20);g.stroke()},
  tent:(x,y)=>{g.fillStyle='#E2873A';g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.moveTo(x-80,y+50);g.lineTo(x,y-70);g.lineTo(x+80,y+50);g.closePath();g.fill();g.stroke();g.fillStyle='#2A1A10';g.beginPath();g.moveTo(x-22,y+50);g.lineTo(x,y);g.lineTo(x+22,y+50);g.fill()},
  water:(x,y)=>{g.fillStyle='#4FC8FF';g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.moveTo(x,y-75);g.quadraticCurveTo(x+65,y+10,x,y+55);g.quadraticCurveTo(x-65,y+10,x,y-75);g.fill();g.stroke()},
  food:(x,y)=>{g.fillStyle='#FF4A4A';g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.arc(x,y+5,55,0,7);g.fill();g.stroke();g.strokeStyle='#6B3A22';g.lineWidth=9;g.beginPath();g.moveTo(x,y-50);g.lineTo(x+8,y-78);g.stroke();g.fillStyle='#5BE37A';g.beginPath();g.ellipse(x+28,y-62,22,10,-0.4,0,7);g.fill()}};
function snow(t){g.save();for(let i=0;i<70;i++){const x=(hash(i*3.3)*W+Math.sin(t+i)*30),y=(hash(i*5.5)*H+t*(140+hash(i)*100))%H;g.fillStyle='rgba(255,255,255,0.85)';g.beginPath();g.arc(x,y,3+hash(i*2)*5,0,7);g.fill()}g.restore()}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();const B=scene('arena');B.mode('day');streamAnim(B,t);B.rock.visible=t>=CU.c3&&t<CU.c4;
  if(t<CU.c1){look(B,t);const k=ease(seg(t,0.2,CU.c1));B.shot(mix(C0.p,[1.9,1.8,6.5],k),C0.l,DUSK);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('HOW LONG COULD YOU SURVIVE',W/2,215,56,{sw:14});txt('IN THE',W/2,300,64,{sw:14});txt('HUNGER GAMES?',W/2,400,104,{fill:'#FFD23F',sw:22});g.restore();
    comic('GULP.',W*0.76,700,86,t,1.6,{life:1.1,rot:0.08,fill:'#fff'})}
  else if(t<CU.c2){clear3d();setBG('linear-gradient(#1A1030,#3B1F5A 60%,#5A2A6E)');flash(t,CU.c1,0.15);
    const a=backOut(seg(t,CU.c1,CU.c1+0.4));g.save();g.translate(W/2,430);g.scale(a,a);txt('THE RULE OF',0,-40,72,{sw:16});txt('3s',0,90,220,{fill:'#FFD23F',sw:34});g.restore();
    const items=[['air','#3FF0FF'],['tent','#FF9E3D'],['water','#4FC8FF'],['food','#5BE37A']];items.forEach(([ic,col],i)=>{const s=backOut(seg(t,CU.c1+0.5+i*0.3,CU.c1+0.85+i*0.3));if(s<=0)return;g.save();g.translate(W/2+(i-1.5)*230,900);g.scale(s,s);panel(0,0,200,200,'rgba(10,12,25,0.88)',col);g.translate(0,0);g.scale(0.9,0.9);ICON[ic](0,0);g.restore()});
    comic('SURVIVAL 101',W/2,1180,70,t,CU.c1+0.8,{life:1.4,rot:-0.04,fill:'#fff'})}
  else if(t<CU.c3){B.mode('night');const sh=0.025*Math.sin(t*55);putGuy(B.S,0.2+sh,0,0.2,-0.2);guy.pose({armL:[0.5,-0.9],armR:[0.5,-0.9],bendL:1.6,bendR:1.6,mouth:'teeth',teethGap:0.1+0.1*Math.abs(Math.sin(t*30)),blink:BLINK(t),brow:0.03});
    B.shot(mix([-3.8,2.3,9.6],[-3.4,2.2,8.8],seg(t,CU.c2,CU.c3)),[0.4,1.9,-0.5],NIGHT);snow(t);flash(t,CU.c2,0.15);
    if(t<CU.cH)card(W/2,380,1.25*backOut(seg(t,CU.c2,CU.c2+0.35)),ICON.air,'3 MIN','NO AIR','#3FF0FF',t);else card(W/2,380,1.25*backOut(seg(t,CU.cH,CU.cH+0.35)),ICON.tent,'3 HRS','NO SHELTER','#FF9E3D',t);
    comic('BRRR!',W*0.78,860,84,t,CU.cH+0.6,{life:1.2,rot:0.08,fill:'#fff'})}
  else if(t<CU.c4){putGuy(B.S,0.4,0.12,1.6,0.15);const dip=0.5+0.5*Math.sin((t-CU.c3)*3);guy.pose({...SIT,reachR:[-0.15,0.55-0.15*dip,1.0],reachL:[0.35,0.55,0.75],mouth:t<CU.cF?'grin':'o',mouthSize:0.8,lookY:-0.7,headPitch:0.3,blink:BLINK(t)});
    B.shot(mix([4.6,2.4,9.6],[4.2,2.3,8.8],seg(t,CU.c3,CU.c4)),[0.3,1.6,1.6],DAY);flash(t,CU.c3,0.15);
    if(t<CU.cF)card(W/2,380,1.25*backOut(seg(t,CU.c3,CU.c3+0.35)),ICON.water,'3 DAYS','NO WATER','#4FC8FF',t);else card(W/2,380,1.25*backOut(seg(t,CU.cF,CU.cF+0.35)),ICON.food,'3 WEEKS','NO FOOD','#5BE37A',t);
    comic('SPLASH!',W*0.75,900,80,t,CU.c3+0.4,{life:0.9,rot:0.08,fill:'#fff'})}
  else if(t<CU.c5){clear3d();setBG('linear-gradient(#10203A,#1E3A5F 60%,#2C5A80)');flash(t,CU.c4,0.15);
    panel(W/2,300,820,140);txt('BIGGEST ENEMY?',W/2,300,72,{stroke:0,fill:'#FFD23F'});
    const rows=[['AIR','3 MIN',0.04,'#3FF0FF'],['SHELTER','3 HRS',0.16,'#FF9E3D'],['WATER','3 DAYS',0.45,'#4FC8FF'],['FOOD','3 WEEKS',1.0,'#5BE37A']];
    rows.forEach(([n,v,f,col],i)=>{const y=560+i*170,gw=easeOut(seg(t,CU.c4+0.2+i*0.2,CU.c4+0.8+i*0.2));txt(n,90,y-48,44,{align:'left',sw:10});g.fillStyle='rgba(255,255,255,0.12)';rr(90,y-20,900,70,35);g.fill();g.fillStyle=col;rr(90,y-20,Math.max(70,900*f*gw),70,35);g.fill();txt(v,90+Math.max(70,900*f*gw)+20,y+16,40,{align:'left',sw:9})});
    if(t>CU.c4+1.6){const y=560+2*170,p=0.5+0.5*Math.sin(t*10);g.save();g.strokeStyle=`rgba(255,74,74,${0.6+0.4*p})`;g.lineWidth=10;rr(70,y-80,950,150,30);g.stroke();g.restore();comic('THIRST!',W*0.78,y-110,80,t,CU.c4+1.6,{life:1.6,rot:0.06,fill:'#FF4A4A'})}
    if(t>CU.cW){check(W*0.86,560+2*170+16,1.2);comic('WEEKS!',W*0.5,1240,96,t,CU.cW+0.3,{life:1.6,rot:-0.05,fill:'#5BE37A'})}}
  else{look(B,t-TT);const k=ease(seg(t,CU.c5,TT-0.2));B.shot(mix([3.0,2.3,9.6],C0.p,k),C0.l,DUSK);flash(t,CU.c5,0.15)}
  vignette();captions(t)};
