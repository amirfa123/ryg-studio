// ===== Could a scooter really fly like those GTA 6 glitch clips? (crazy what-if + GTA 6) =====
const TT=21.45;
const CU={c1:4.0,c2:7.55,c3:9.9,c4:14.15,c5:16.7,c6:19.8};
guy.outfit({snapforward:1,shades:1,chain:1});
// ---------- scooter (parented to holder; guy faces +z) ----------
const SCO=new THREE.Group();holder.add(SCO);const WH=[];
{const B=toon(0x2EC4B6),Wt=toon(0xF7F7F7),K=toon(0x1d1d24),CH=toon(0xCFCFD8);
  part(SCO,new THREE.BoxGeometry(0.5,0.07,0.85),K,[0,0.11,0.32],[1,1,1],[0,0,0],0.01);
  part(SCO,SPH,B,[0,0.26,-0.42],[0.3,0.17,0.5],[0,0,0],0.014);
  part(SCO,new THREE.BoxGeometry(0.44,0.1,0.78),toon(0x3A2A20),[0,0.42,-0.28],[1,1,1],[0,0,0],0.01);
  part(SCO,new THREE.BoxGeometry(0.46,0.95,0.12),B,[0,0.58,0.8],[1,1,1],[-0.18,0,0],0.014);
  part(SCO,new THREE.BoxGeometry(0.47,0.1,0.13),Wt,[0,0.75,0.84],[1,1,1],[-0.18,0,0],0);
  part(SCO,cap(0.04,0.3),CH,[0,1.1,0.88],[1,1,1],[-0.2,0,0],0.006);
  part(SCO,cap(0.028,0.62),CH,[0,1.25,0.76],[1,1,1],[0,0,PI/2],0.006);
  for(const s of [-1,1])part(SCO,cap(0.04,0.1),K,[s*0.33,1.25,0.76],[1,1,1],[0,0,PI/2],0.006);
  part(SCO,SPH,basic(0xFFF6B0),[0,1.02,0.95],[0.1,0.08,0.05],[0,0,0],0.006);
  part(SCO,SPH,basic(0xFF3030),[0,0.38,-0.92],[0.08,0.05,0.04],[0,0,0],0.004);
  for(const z of [-0.75,0.98]){const w=new THREE.Group();w.position.set(0,0.22,z);SCO.add(w);part(w,new THREE.CylinderGeometry(0.22,0.22,0.13,24),K,[0,0,0],[1,1,1],[0,0,PI/2],0.012);part(w,new THREE.BoxGeometry(0.14,0.3,0.06),CH,[0,0,0],[1,1,1],[0,0,0],0);WH.push(w)}
  part(SCO,cap(0.03,0.45),CH,[0,0.45,0.95],[1,1,1],[-0.15,0,0],0.004)}
// mast + delta wing (12 m^2: span 10 m, chord 2.4 m)
const RIG=new THREE.Group();SCO.add(RIG);RIG.visible=false;part(RIG,cap(0.05,2.3),toon(0x888899),[0,1.55,-0.75],[1,1,1],[0,0,0],0.006);
const WING=new THREE.Group();WING.position.set(0,2.75,-0.45);RIG.add(WING);
{const mk=(pts,col)=>{const sh=new THREE.Shape();sh.moveTo(pts[0][0],pts[0][1]);for(const p of pts.slice(1))sh.lineTo(p[0],p[1]);sh.closePath();const m=toon(col);m.side=THREE.DoubleSide;const me=new THREE.Mesh(new THREE.ShapeGeometry(sh),m);me.rotation.x=-PI/2;WING.add(me)};
  mk([[0,-1.6],[-5,0.8],[0,0.45]],0xFF7A1A);mk([[0,-1.6],[5,0.8],[0,0.45]],0xFFD23F);
}
function ridePose(t,o={}){guy.pose({...SIT,reachL:[0.31,1.25,0.74],reachR:[-0.31,1.25,0.74],poleL:[1,-0.5,-0.3],poleR:[-1,-0.5,-0.3],mouth:'grin',blink:BLINK(t),headRoll:0.03*Math.sin(t*2*PI/1.0),...o})}
function spinW(x){for(const w of WH)w.rotation.x=x/0.22}
// ---------- beach road world ----------
const BW={S:new THREE.Scene()};lights(BW.S);BW.cam=new THREE.PerspectiveCamera(30,W/H,0.1,600);
part(BW.S,new THREE.PlaneGeometry(900,22),toon(0xF2D59A),[0,0,3],[1,1,1],[-PI/2,0,0],0);
part(BW.S,new THREE.PlaneGeometry(900,3.4),toon(0x3A3550),[0,0.012,0.6],[1,1,1],[-PI/2,0,0],0);
for(let i=-140;i<140;i++)part(BW.S,new THREE.PlaneGeometry(1.4,0.12),basic(0xFFD23F),[i*3.2,0.02,0.6],[1,1,1],[-PI/2,0,0],0);
const SEAM=toon(0x1F8EC4);part(BW.S,new THREE.PlaneGeometry(900,300),SEAM,[0,0.02,-158],[1,1,1],[-PI/2,0,0],0);
for(let i=0;i<120;i++)part(BW.S,new THREE.PlaneGeometry(1.5+hash(i)*2,0.1),basic(0xBFEFFF),[(hash(i*3.1)-0.5)*400,0.03,-10-hash(i*7.7)*60],[1,1,1],[-PI/2,0,0],0);
const PALMS=new THREE.Group();BW.S.add(PALMS);for(let k=-60;k<60;k++){palm(PALMS,k*6.5+1,-4.2,1.25,0.12+0.1*hash(k),hash(k*3)*6);if(hash(k*1.7)<0.6)palm(PALMS,k*6.5+3.5,-2.6,1.1,0.2,hash(k*5)*6)}
const SKYL=new THREE.Group();BW.S.add(SKYL);for(let k=0;k<70;k++){const h=6+hash(k*3.3)*26;part(SKYL,new THREE.BoxGeometry(6+hash(k)*5,h,6),toon([0xFF8FB1,0x7FE0D6,0xFFD27F,0xB59CFF,0xFFB38A][k%5]),[-300+k*9,h/2,-150],[1,1,1],[0,0,0],0)}
const SUN=part(BW.S,new THREE.CircleGeometry(16,48),basic(0xFFD58A),[0,14,-260],[1,1,1],[0,0,0],0);
function bwMood(m){BW.S.children.filter(c=>c.isLight).forEach(l=>{l.intensity=(l.isHemisphereLight?1.5:2.2)*(m==='sunset'?0.85:1)});SEAM.color.set(m==='sunset'?0x3A6FB0:0x1F8EC4);SUN.visible=m==='sunset';PALMS.visible=true;setBG(m==='night'?'night':m)}
function bwShot(p,l){BW.cam.position.set(...p);BW.cam.lookAt(...l);SUN.position.x=p[0]+4;SKYL.position.x=p[0]*0.85;r.setClearColor(0,0);r.render(BW.S,BW.cam)}
// ---------- sky (diagram) ----------
const SK={S:new THREE.Scene()};lights(SK.S);SK.cam=new THREE.PerspectiveCamera(30,W/H,0.1,200);const CLOUDS=[];
for(let i=0;i<14;i++){const c=new THREE.Group();SK.S.add(c);for(let k=0;k<5;k++)part(c,SPH,toon(0xFFFFFF),[(k-2)*0.9,0.2*hash(i*9+k),0],[0.9+0.4*hash(i+k),0.6+0.3*hash(i*2+k),0.7],[0,0,0],0.01);c.position.set((hash(i*3.3)-0.5)*30,(hash(i*5.1)-0.5)*22,-16-hash(i*7)*16);CLOUDS.push(c)}
// ---------- 2D helpers ----------
function glitchTxt(s,x,y,size,t){const j=(hash(Math.floor(t*12))-0.5)*14;txt(s,x+j-8,y,size,{stroke:0,fill:'rgba(255,61,166,0.9)'});txt(s,x-j+8,y+3,size,{stroke:0,fill:'rgba(63,240,255,0.9)'});txt(s,x,y,size,{fill:'#fff',sw:size*0.18})}
function speedo(x,y,R,v,max,col='#3FF0FF'){g.save();g.translate(x,y);g.fillStyle='rgba(10,12,25,0.88)';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();
  g.strokeStyle='rgba(255,255,255,0.25)';g.lineWidth=R*0.12;g.beginPath();g.arc(0,0,R*0.78,PI*0.75,PI*2.25);g.stroke();g.strokeStyle=col;g.beginPath();g.arc(0,0,R*0.78,PI*0.75,PI*0.75+PI*1.5*clamp(v/max));g.stroke();
  const a=PI*0.75+PI*1.5*clamp(v/max);g.strokeStyle='#FF4A4A';g.lineWidth=10;g.lineCap='round';g.beginPath();g.moveTo(0,0);g.lineTo(Math.cos(a)*R*0.7,Math.sin(a)*R*0.7);g.stroke();g.fillStyle='#fff';g.beginPath();g.arc(0,0,12,0,7);g.fill();g.restore();
  txt(String(Math.round(v)),x,y+R*0.42,R*0.42,{stroke:0,fill:'#fff'});txt('KM/H',x,y+R*0.72,R*0.18,{stroke:0,fill:'#B8C0D8'})}
function bigArrow(x,y0,y1,col,wd){if(Math.abs(y1-y0)<10)return;arrow(x,y0,x,y1,col,wd)}
function speedLines(t,n=10){g.save();g.strokeStyle='rgba(255,255,255,0.55)';g.lineWidth=6;for(let i=0;i<n;i++){const y=520+hash(i*3.1)*900,x=W-((t*2200+hash(i)*W)%(W+400));g.beginPath();g.moveTo(x,y);g.lineTo(x+160+hash(i*5)*140,y);g.stroke()}g.restore()}
// ---------- opening: cruising the beach road at sunset ----------
const RX=t=>9*t;
function openScene(t){bwMood('sunset');BW.S.add(holder);holder.visible=true;RIG.visible=false;const x=RX(t);holder.position.set(x,0,0.6);holder.rotation.set(0,PI/2,0);holder.scale.setScalar(1);spinW(x);ridePose(t);return x}
const C0=(x)=>[[x+0.6,1.7,10.0],[x+0.45,1.2,0.6]];
window.render=function(t){g.clearRect(0,0,W,H);hideProps();holder.visible=true;holder.rotation.order='YXZ';RIG.visible=false;WING.scale.set(1,1,1);
  if(t<CU.c1){const x=openScene(t);const [p,l]=C0(x);const k=ease(seg(t,0.2,CU.c1));bwShot(mix(p,[x+0.5,1.6,9.0],k),l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('COULD A SCOOTER',W/2,200,82,{sw:16});txt('REALLY FLY LIKE THE',W/2,300,64,{sw:13});glitchTxt('GTA 6 GLITCH?',W/2,420,108,t);g.restore();
    comic('VROOM!',W*0.75,720,88,t,0.9,{life:1.0,rot:0.12,fill:'#3FF0FF'});comic('GLITCH?!',W*0.27,1160,84,t,2.9,{life:1.0,rot:-0.12,fill:'#FF3DA6'})}
  else if(t<CU.c2){flash(t,CU.c1,0.15);const C=scene('city');C.mood('day');C.car.c.visible=false;C.cop.c.visible=false;
    if(!C.scale){const s=new THREE.Group();s.position.set(0,0,1.0);C.S.add(s);part(s,new THREE.BoxGeometry(2.8,0.22,1.5),toon(0x9AA3B5),[0,0.11,0],[1,1,1],[0,0,0],0.016);part(s,new THREE.BoxGeometry(2.6,0.03,1.3),toon(0x5B6478),[0,0.23,0],[1,1,1],[0,0,0],0);
      part(s,new THREE.BoxGeometry(0.16,1.6,0.16),toon(0x5B6478),[1.55,0.8,-0.6],[1,1,1],[0,0,0],0.01);part(s,new THREE.BoxGeometry(0.9,0.6,0.16),toon(0x22222C),[1.55,1.8,-0.6],[1,1,1],[0,0,0],0.012);C.scaleDisp=part(s,new THREE.PlaneGeometry(0.78,0.48),basic(0x5BE37A),[1.55,1.8,-0.51],[1,1,1],[0,0,0],0);C.scale=s}
    C.scale.visible=true;C.S.add(holder);holder.position.set(-0.1,0.24,1.0);holder.rotation.set(0,PI/2-0.55,0);spinW(0);
    const happy=t<6.3;ridePose(t,{mouth:happy?'smile':'o',mouthSize:0.6,wide:!happy,look:t>4.6&&t<5.4?-0.6:0});
    C.shot([3.0,2.1,7.4],[0.15,1.05,1.0]);
    const tag=(s,v,t0,col)=>{const [x,y]=proj(v,C.cam);pill(s,x,y,46,col,'#111',t,t0,CU.c2)};tag('YOU',new THREE.Vector3(-0.1,2.35,1.0),4.25,'#FFD23F');tag('SCOOTER',new THREE.Vector3(0.75,0.95,1.9),4.85,'#7FE0D6');
    const kg=Math.round(lerp(0,150,easeOut(seg(t,5.5,6.4))));panel(W/2,330,660,200,'rgba(10,12,25,0.88)','#5BE37A',36);txt(kg+' KG',W/2,330,120,{stroke:0,fill:'#5BE37A'});
    comic('HEAVY!',W*0.75,1140,96,t,6.5,{life:0.9,rot:0.12,fill:'#FF7A1A'})}
  else if(t<CU.c3){flash(t,CU.c2,0.15);setBG('day');SK.S.add(holder);holder.position.set(0,0.05*Math.sin(t*3),0);holder.rotation.set(0,PI/2,0.04*Math.sin(t*2));spinW(t*20);
    ridePose(t,{mouth:'o',mouthSize:0.8,wide:true,look:0.4});for(let i=0;i<CLOUDS.length;i++)CLOUDS[i].position.x=((hash(i*3.3)-0.5)*30-t*3+45)%30-15;
    SK.cam.position.set(0.3,1.5,11.5);SK.cam.lookAt(0.2,1.1,0);r.setClearColor(0,0);r.render(SK.S,SK.cam);
    const [cx,cy]=proj(new THREE.Vector3(0,1.0,0),SK.cam);const down=easeOut(seg(t,7.7,8.1)),up=ease(seg(t,8.3,9.3));
    g.save();g.globalAlpha=down;bigArrow(cx-300,cy-60,cy-60+380*down,'#FF4A4A',40);g.restore();if(down>0.5)txt('GRAVITY',cx-300,cy-130,54,{fill:'#FF4A4A',sw:12});
    if(up>0){bigArrow(cx+300,cy+320,cy+320-380*up-10,'#5BE37A',40);txt('LIFT',cx+300,cy+320-380*up-80,56,{fill:'#5BE37A',sw:12})}
    pill('AIR MUST PUSH UP',W/2,330,64,'#FFFFFF','#111',t,7.75,9.0);pill('LIFT = 150 KG',W/2,330,72,'#5BE37A','#111',t,9.05,CU.c3)}
  else if(t<CU.c4){flash(t,CU.c3,0.15);bwMood('day');BW.S.add(holder);const x=200+RX(t-CU.c3)*1.4;holder.position.set(x,0,0.6);holder.rotation.set(0,PI/2,0);spinW(x);RIG.visible=true;
    const gw=easeOut(seg(t,10.5,13.2));WING.scale.set(Math.max(0.02,gw),1,Math.max(0.02,gw));ridePose(t,{look:-0.3,lookY:0.8,mouth:t>12.6?'o':'grin',wide:t>12.6});
    const k=ease(seg(t,10.6,13.6));PALMS.visible=false;bwShot(mix([x+2.4,2.2,10.5],[x-11,24,0.9],k),mix([x+0.3,1.4,0.6],[x,1.8,0.6],k));speedLines(t,8);
    speedo(190,360,130,lerp(0,50,easeOut(seg(t,9.95,10.8))),120);panel(W/2+160,360,560,170,'rgba(10,12,25,0.88)','#FFD23F',36);txt('WING',W/2-20,320,40,{stroke:0,fill:'#B8C0D8',align:'left'});txt(Math.round(12*gw*gw)+' M²',W/2-20,385,80,{stroke:0,fill:'#FFD23F',align:'left'});
    comic('HUGE!',W*0.74,1150,110,t,13.15,{life:0.9,rot:0.12,fill:'#FF7A1A'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);bwMood('sunset');BW.S.add(holder);const u=t-CU.c4;const x=400+u*13;const lift=easeOut(seg(t,14.3,16.2));holder.position.set(x,lift*7,0.6-lift*9);holder.rotation.set(-0.1*lift,PI/2+0.25*lift,0.05*Math.sin(t*2));spinW(x);RIG.visible=true;
    ridePose(t,{mouth:'grin',legL:[1.2,1.0,0],legR:[1.0,1.2,0],sitY:-0.27,look:0.3});
    const hp=holder.position;PALMS.visible=false;bwShot([hp.x-10,hp.y+19,hp.z+5],[hp.x,hp.y+2.0,hp.z]);
    pill('= A HANG GLIDER',W/2,330,68,'#FFD23F','#111',t,14.6,CU.c5);comic('WHEEEE!',W*0.3,1120,100,t,15.0,{life:1.2,rot:-0.12,fill:'#3FF0FF'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);bwMood('night');PALMS.visible=false;BW.S.add(holder);const u=t-CU.c5;
    const sp=lerp(50,100,ease(seg(t,17.0,17.8)));const x=700+u*16+Math.max(0,u-0.4)*8;holder.position.set(x,6+0.15*Math.sin(t*2),-24);holder.rotation.set(0,PI/2,0.04*Math.sin(t*2.3));spinW(x);RIG.visible=true;
    const s=lerp(1,0.5,ease(seg(t,18.1,19.0)));WING.scale.set(s,1,s);ridePose(t,{mouth:t>18.9?'grin':'o',wide:t<18.9,lookY:0.8,look:-0.3,legL:[1.2,1.0,0],legR:[1.0,1.2,0]});
    bwShot([x-10,25,-22],[x,6.5,-24]);speedLines(t,14);speedo(190,360,130,sp,120,'#FF3DA6');
    pill('2× SPEED',W/2+160,300,68,'#FF3DA6','#fff',t,17.0,18.2);pill('¼ THE WING',W/2+160,300,68,'#5BE37A','#111',t,18.25,CU.c6);txt(Math.round(12*s*s)+' M²',W/2+160,420,72,{fill:'#FFD23F',sw:14});
    comic('SHRINK!',W*0.72,1130,92,t,18.3,{life:0.9,rot:0.1,fill:'#5BE37A'})}
  else{const x=openScene(t-TT);const [p,l]=C0(x);const k=ease(seg(t,CU.c6,TT-0.2));bwShot(mix([x+3.2,2.3,9.0],p,k),l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
