// ===== How fast would Santa have to fly to reach every home in one night? (wildcard / Christmas) =====
const TT=20.85;
const CU={c1:4.2,c2:8.15,c3:11.05,c4:13.25,c5:16.2,c6:19.15};
guy.outfit({beanie:1});
// white fur brim + bigger pom = Santa-style hat (original)
{const hb=new THREE.Group();guy.head.add(hb);part(hb,new THREE.TorusGeometry(0.3,0.055,10,32),toon(0xffffff),[0,0.09,-0.01],[1,1,0.95],[PI/2-0.1,0,0],0.01);part(hb,SPH,toon(0xffffff),[0,0.42,-0.04],[0.075,0.075,0.075],[0,0,0],0.008)}
// ---------- snowy town ----------
const TN={S:new THREE.Scene()};lights(TN.S);TN.cam=new THREE.PerspectiveCamera(30,W/H,0.1,600);
TN.S.children.filter(c=>c.isLight).forEach(l=>l.intensity*=0.7);
part(TN.S,new THREE.PlaneGeometry(800,400),toon(0xEAF4FF),[0,0,0],[1,1,1],[-PI/2,0,0],0);
part(TN.S,new THREE.PlaneGeometry(800,3),toon(0xC9D6E8),[0,0.01,3.5],[1,1,1],[-PI/2,0,0],0);
const HC=[0xE25B4F,0x4FA3E2,0x6BC46B,0xF2B84B,0xB07AE2,0xE27AB0];
function house(x,z,i,s=1){const h=new THREE.Group();h.position.set(x,0,z);h.scale.setScalar(s);TN.S.add(h);part(h,new THREE.BoxGeometry(3,2.2,2.6),toon(HC[i%6]),[0,1.1,0],[1,1,1],[0,0,0],0.02);
  part(h,new THREE.ConeGeometry(2.35,1.5,4),toon(0x7A3B2E),[0,2.95,0],[1,1,0.9],[0,PI/4,0],0.02);part(h,new THREE.ConeGeometry(2.4,0.5,4),toon(0xffffff),[0,3.55,0],[0.62,1,0.56],[0,PI/4,0],0.0);
  part(h,new THREE.BoxGeometry(0.45,1.0,0.45),toon(0xA34A3A),[0.8,3.3,-0.2],[1,1,1],[0,0,0],0.01);part(h,new THREE.BoxGeometry(0.5,0.12,0.5),toon(0xffffff),[0.8,3.83,-0.2],[1,1,1],[0,0,0],0);
  for(const wx of [-0.8,0.8])part(h,new THREE.PlaneGeometry(0.6,0.6),basic(0xFFE7A0),[wx,1.3,1.31],[1,1,1],[0,0,0],0);part(h,new THREE.PlaneGeometry(0.6,1.0),toon(0x5A3B24),[0,0.5,1.31],[1,1,1],[0,0,0],0);
  for(let k=0;k<8;k++)part(h,SPH,basic([0xFF3D3D,0x3DFF7A,0xFFD23F,0x3FB8FF][k%4]),[-1.4+k*0.4,2.2,1.32],[0.06,0.06,0.06],[0,0,0],0);return h}
for(let i=-30;i<30;i++)house(i*5.2,-3,i+30,1);
for(let i=-30;i<30;i++){const tr=new THREE.Group();tr.position.set(i*5.2+2.6,0,-1.2);TN.S.add(tr);for(let k=0;k<3;k++)part(tr,new THREE.ConeGeometry(0.6-k*0.15,0.7,10),toon(0x2E7D4F),[0,0.5+k*0.4,0],[1,1,1],[0,0,0],0.01);part(tr,SPH,toon(0xffffff),[0,1.55,0],[0.08,0.08,0.08],[0,0,0],0)}
// snow falling (3D points)
const snowG=new THREE.BufferGeometry();const SNP=new Float32Array(900*3);for(let i=0;i<900;i++){SNP[i*3]=(hash(i)-0.5)*60;SNP[i*3+1]=hash(i*3)*18;SNP[i*3+2]=(hash(i*7)-0.5)*30}snowG.setAttribute('position',new THREE.BufferAttribute(SNP,3));
const SNOW=new THREE.Points(snowG,new THREE.PointsMaterial({color:0xffffff,size:0.09}));TN.S.add(SNOW);
// ---------- sleigh + reindeer ----------
const SL=new THREE.Group();TN.S.add(SL);const red=toon(0xD8302F),gold=toon(0xFFC531);
part(SL,new THREE.BoxGeometry(2.2,0.7,1.3),red,[0,0.75,0],[1,1,1],[0,0,0],0.03);part(SL,new THREE.BoxGeometry(0.5,1.2,1.3),red,[-1.0,1.05,0],[1,1,1],[0,0,0],0.03);part(SL,new THREE.BoxGeometry(0.5,0.5,1.3),red,[1.15,1.0,0],[1,1,1],[0,0,0.5],0.03);
part(SL,new THREE.BoxGeometry(2.3,0.06,1.34),gold,[0,1.12,0],[1,1,1],[0,0,0],0);for(const z of [-0.55,0.55]){part(SL,new THREE.BoxGeometry(2.8,0.06,0.08),gold,[0.1,0.18,z],[1,1,1],[0,0,0],0);part(SL,new THREE.TorusGeometry(0.25,0.04,8,16,PI),gold,[1.5,0.43,z],[1,1,1],[0,0,-PI/2],0);for(const x of [-0.7,0.6])part(SL,cap(0.03,0.45),gold,[x,0.4,z])}
part(SL,SPH,toon(0x6B3A22),[-0.6,1.25,0],[0.42,0.35,0.42],[0,0,0],0.01);// gift sack
for(const [x,c] of [[-0.2,0x3FB8FF],[0.25,0x6BC46B]])part(SL,new THREE.BoxGeometry(0.35,0.35,0.35),toon(c),[x-0.6,1.35,0.42],[1,1,1],[0,0.3,0],0.01);
const DEER=[];for(let k=0;k<2;k++){const d=new THREE.Group();d.position.set(3.2+k*1.9,0.6,0);SL.add(d);const br=toon(0x8A5A34);part(d,SPH,br,[0,0.55,0],[0.6,0.3,0.28],[0,0,0],0.01);part(d,cap(0.1,0.5),br,[0.5,0.85,0],[1,1,1],[0,0,-0.6]);part(d,SPH,br,[0.75,1.08,0],[0.2,0.16,0.15],[0,0,0],0.008);part(d,SPH,basic(k?0xFF3030:0x111111),[0.95,1.05,0],[0.06,0.06,0.06],[0,0,0],0);
  for(const z of [-0.09,0.09]){part(d,cap(0.02,0.3),toon(0xE8D7B0),[0.7,1.32,z],[1,1,1],[z*3,0,0.3]);part(d,cap(0.02,0.14),toon(0xE8D7B0),[0.78,1.4,z*1.6],[1,1,1],[z*4,0,-0.5])}
  const legs=[];for(const [x,z] of [[0.35,0.12],[0.35,-0.12],[-0.35,0.12],[-0.35,-0.12]]){const l=new THREE.Group();l.position.set(x,0.4,z);d.add(l);part(l,cap(0.05,0.45),br,[0,-0.25,0]);legs.push(l)}d.userData.legs=legs;DEER.push(d)}
const REIN=[];for(const z of [-0.3,0.3])REIN.push(part(SL,cap(0.012,3.2),toon(0x2A2A35),[2.4,0.95,z],[1,1,1],[0,0,PI/2-0.05]));
function deerRun(t,sp){DEER.forEach((d,i)=>d.userData.legs.forEach((l,j)=>l.rotation.z=0.6*Math.sin(t*sp+j*PI*0.5+i)))}
function rideGuy(t,o={}){putGuy(TN.S,0,0,0,PI/2);SL.add(holder);holder.position.set(0.2,0.75,0);holder.rotation.set(0,PI/2,0);guy.pose({...SIT,armL:[1.0,0.6],armR:[1.0,0.6],bendL:0.5,bendR:0.5,blink:BLINK(t),...o})}
function tnShot(p,l){TN.cam.position.set(...p);TN.cam.lookAt(...l);setBG('night');r.setClearColor(0,0);r.render(TN.S,TN.cam)}
function snowAnim(t){SNOW.position.y=-((t*1.2)%6)}
// ---------- 2D ----------
function globe(x,y,R,t,k){g.save();g.translate(x,y);g.fillStyle='#1E5FA8';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.save();g.clip();
  const sp=t*0.9;for(let i=0;i<7;i++){const cx=((i*0.9+sp)%6.3)-3.15;g.fillStyle='#4FB860';g.beginPath();g.ellipse(Math.sin(cx)*R*0.8,(hash(i)-0.5)*R*1.1,R*0.28*Math.cos(cx*0.5)**2+4,R*0.2,0,0,7);g.fill()}
  for(let i=-12;i<=12;i++){const xx=i*R/12;g.strokeStyle='rgba(255,255,255,0.25)';g.lineWidth=3;g.beginPath();g.moveTo(xx,-R);g.lineTo(xx,R);g.stroke()}
  // night sweeping across
  const nx=lerp(-R*1.6,R*1.6,k);const gr=g.createLinearGradient(nx-R*0.6,0,nx+R*0.6,0);gr.addColorStop(0,'rgba(5,8,30,0)');gr.addColorStop(0.5,'rgba(5,8,30,0.8)');gr.addColorStop(1,'rgba(5,8,30,0)');g.fillStyle=gr;g.fillRect(-R,-R,2*R,2*R);
  g.restore();g.beginPath();g.arc(0,0,R,0,7);g.stroke();g.restore()}
function speedo(x,y,R,v,max){g.save();g.translate(x,y);g.fillStyle='rgba(10,12,25,0.92)';g.strokeStyle='#111';g.lineWidth=12;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();const a0=PI*0.75,a1=PI*2.25,f=clamp(v/max);
  g.lineCap='round';g.strokeStyle='rgba(255,255,255,0.18)';g.lineWidth=22;g.beginPath();g.arc(0,0,R*0.75,a0,a1);g.stroke();g.strokeStyle=f>0.7?'#FF4A4A':'#FFD23F';g.beginPath();g.arc(0,0,R*0.75,a0,a0+(a1-a0)*f);g.stroke();
  const a=a0+(a1-a0)*f;g.strokeStyle='#fff';g.lineWidth=10;g.beginPath();g.moveTo(0,0);g.lineTo(Math.cos(a)*R*0.62,Math.sin(a)*R*0.62);g.stroke();g.fillStyle='#fff';g.beginPath();g.arc(0,0,12,0,7);g.fill();g.restore();
  txt(Math.round(v).toLocaleString('en-US'),x,y+R*0.42,R*0.34,{fill:f>0.7?'#FF4A4A':'#fff',sw:10});txt('KM / SECOND',x,y+R+40,R*0.2,{fill:'#FFD23F',sw:8})}
function streaks(t,a,col='rgba(255,255,255,0.8)'){if(a<=0)return;g.save();g.globalAlpha=a;g.strokeStyle=col;g.lineCap='round';for(let i=0;i<26;i++){const y=hash(i*3)*H,len=200+hash(i)*400,x=W-((t*3000+hash(i*7)*W*2)%(W*2));g.lineWidth=4+hash(i*5)*6;g.beginPath();g.moveTo(x,y);g.lineTo(x+len,y);g.stroke()}g.restore()}
// ---------- opening (loop) ----------
const C0={p:[0.6,3.0,16.0],l:[-0.9,1.9,1.0]};
function openScene(t){snowAnim(t);SL.position.set(-3.4,0,0.4);SL.rotation.set(0,0.35,0);deerRun(0,0);TN.S.add(holder);putGuy(TN.S,0.2,0,1.8,-0.15);
  guy.pose(idle(t,{armL:[0.35+0.05*Math.sin(t*2*PI/(TT/8)),0],armR:[0.35,0],headYaw:0.15,look:0.3,jump:0.012*Math.sin(t*2*PI/(TT/10))}))}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.1,CU.c1));tnShot(mix(C0.p,[0.5,2.9,14.8],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('HOW FAST WOULD',W/2,200,100,{sw:20});txt('SANTA HAVE TO',W/2,315,100,{fill:'#FF6B6B',sw:20});txt('FLY?',W/2,460,170,{fill:'#FFD23F',sw:30});g.restore()}
  else if(t<CU.c2){flash(t,CU.c1,0.15);clear3d();setBG('radial-gradient(circle at 50% 45%,#1C2A6E,#070A24 75%)');
    for(let i=0;i<80;i++){g.fillStyle='rgba(255,255,255,'+(0.4+0.6*hash(i*9))+')';g.fillRect(hash(i)*W,hash(i*3)*H,4,4)}
    const k=seg(t,4.3,8.0);globe(W/2,880,340,t,k);
    // sleigh icon orbiting
    const a=t*2.2;const sx=W/2+Math.cos(a)*420,sy=880+Math.sin(a)*150;g.save();g.translate(sx,sy);g.scale(Math.sin(a)>0?1:-1,1);g.fillStyle='#D8302F';g.strokeStyle='#111';g.lineWidth=5;rr(-40,-18,80,36,10);g.fill();g.stroke();g.fillStyle='#FFD23F';g.beginPath();g.arc(-6,-30,16,0,7);g.fill();g.stroke();g.restore();
    const hrs=lerp(0,32,easeOut(seg(t,5.4,7.0)));clockFace(W*0.2,440,100,hrs%12,(hrs%1)*60);txt(Math.round(hrs)+' HOURS',W*0.2,600,58,{fill:'#FFD23F',sw:12});
    pill('TIME ZONES',W*0.72,440,64,'#3FF0FF','#111',t,4.35,CU.c2);if(t>7.0){const s=pop(t,7.0);g.save();g.translate(W/2,1330);g.scale(s,s);txt('1,000,000,000',0,0,110,{fill:'#fff',sw:22});txt('HOMES',0,100,70,{fill:'#FF6B6B',sw:14});g.restore()}}
  else if(t<CU.c3){flash(t,CU.c2,0.15);snowAnim(t);const u=t-CU.c2;SL.position.set(u*14-6,6.2+0.15*Math.sin(t*4),1.0);SL.rotation.set(0,0,0.04*Math.sin(t*3));deerRun(t,14);rideGuy(t,{mouth:'grin',headYaw:-0.2});
    tnShot([SL.position.x-2.5,7.6,17],[SL.position.x+1.2,6.2,0]);
    const n=Math.round(lerp(0,8681,easeOut(seg(t,8.5,10.2))));panel(W/2,1130,820,250);txt(n.toLocaleString('en-US'),W/2,1100,120,{fill:'#FFD23F',sw:22});txt('HOMES EVERY SECOND',W/2,1200,50,{sw:10});
    
    comic('ZOOM',W*0.78,700,100,t,8.4,{life:0.8,rot:0.12,fill:'#FF6B6B'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);snowAnim(t);SL.position.set(-20,40,0);clear3d();
    // side diagram: two houses, 100 m ruler, sleigh streak
    setBG('linear-gradient(#0B0F33,#1C1450 70%,#3A2A6E)');g.fillStyle='#EAF4FF';g.fillRect(0,1180,W,740);
    for(const [hx,c] of [[200,'#E25B4F'],[880,'#4FA3E2']]){g.fillStyle=c;g.strokeStyle='#111';g.lineWidth=8;g.fillRect(hx-110,1000,220,180);g.strokeRect(hx-110,1000,220,180);g.fillStyle='#7A3B2E';g.beginPath();g.moveTo(hx-140,1000);g.lineTo(hx,880);g.lineTo(hx+140,1000);g.closePath();g.fill();g.stroke();g.fillStyle='#FFE7A0';g.fillRect(hx-60,1060,40,40);g.fillRect(hx+20,1060,40,40);g.fillStyle='#A34A3A';g.fillRect(hx+50,880,34,70);g.strokeRect(hx+50,880,34,70)}
    const k=easeOut(seg(t,11.9,12.9));g.strokeStyle='#FFD23F';g.lineWidth=10;g.beginPath();g.moveTo(267,820);g.lineTo(lerp(267,947,k),820);g.stroke();for(const x of [267,lerp(267,947,k)]){g.beginPath();g.moveTo(x,790);g.lineTo(x,850);g.stroke()}
    if(k>0.6)txt('100 m',W/2+40,750,90,{fill:'#FFD23F',sw:18});
    const sx=lerp(-200,W+300,((t-11.05)*0.9)%1.2);streaks(t,0.5);g.save();g.translate(sx,640);g.fillStyle='#D8302F';g.strokeStyle='#111';g.lineWidth=6;rr(-70,-28,140,56,14);g.fill();g.stroke();g.fillStyle='#FFD23F';g.beginPath();g.arc(-10,-46,26,0,7);g.fill();g.stroke();g.fillStyle='#E24B4B';g.beginPath();g.arc(-10,-60,24,PI,0);g.fill();g.restore();
    pill('8,700 STOPS A SECOND',W/2,330,62,'#FF6B6B','#fff',t,11.2,CU.c4);comic('WHOOSH',W*0.7,1300,90,t,12.4,{life:0.7,rot:0.1,fill:'#3FF0FF'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);snowAnim(t);const u=t-CU.c4;SL.position.set(u*40,9,1.0);SL.rotation.set(0,0,0.03*Math.sin(t*20));deerRun(t,24);rideGuy(t,{mouth:'o',mouthSize:1.2,wide:true,blink:false,armL:[1.6,0.4],armR:[1.6,0.4],headPitch:-0.1});
    tnShot([SL.position.x+0.8,10.3,13.5],[SL.position.x+1.6,9.4,0]);streaks(t,seg(t,13.3,13.8));
    const v=lerp(0,870,easeOut(seg(t,13.6,15.2)));speedo(W/2,520,170,v,900);
    if(t>14.6){const s=pop(t,14.6);g.save();g.translate(W/2,1640);g.scale(s,s);pill('2,500× THE SPEED OF SOUND',0,0,52,'#FFD23F','#111',t,14.6,CU.c5);g.restore()}comic('HOLD ON!',W*0.25,1150,90,t,13.9,{life:1.0,rot:-0.12,fill:'#FF6B6B'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);snowAnim(t);const u=t-CU.c5;SL.position.set(u*40,9,1.0);SL.rotation.set(0,0,0.04*Math.sin(t*25));deerRun(t,24);rideGuy(t,{mouth:'o',mouthSize:1.4,wide:true,blink:false,armL:[2.6,0.3],armR:[2.6,0.3],headPitch:-0.2});
    tnShot([SL.position.x+1.2,10.5,14],[SL.position.x+1.4,9.6,0]);streaks(t,1,'rgba(255,170,60,0.9)');
    // fireball glow around the sleigh
    const f=easeOut(seg(t,16.4,17.6));const c=proj(new THREE.Vector3(SL.position.x+1.5,10.2,1.0),TN.cam);g.save();g.globalCompositeOperation='lighter';const R=lerp(80,620,f);const gr=g.createRadialGradient(c[0],c[1],R*0.1,c[0],c[1],R);gr.addColorStop(0,'rgba(255,240,180,0.85)');gr.addColorStop(0.4,'rgba(255,140,40,0.6)');gr.addColorStop(1,'rgba(255,60,0,0)');g.fillStyle=gr;g.fillRect(0,0,W,H);
    for(let i=0;i<30;i++){const ph=(t*2+hash(i))%1;g.fillStyle=`rgba(255,${120+hash(i)*100},40,${(1-ph)*f})`;g.beginPath();g.arc(c[0]+R*0.6-ph*R*1.6,c[1]+(hash(i*3)-0.5)*R*0.9,14+hash(i*5)*22,0,7);g.fill()}g.restore();
    comic('FWOOSH!',W/2,560,150,t,17.3,{life:1.2,rot:-0.08,fill:'#FFB13B'});pill('FIREBALL',W/2,1640,78,'#FF4A4A','#fff',t,18.2,CU.c6);pill('AIR FRICTION',W/2,330,64,'#FFB13B','#111',t,16.3,18.0)}
  else{const tt=t-TT;openScene(tt);const k=ease(seg(t,CU.c6,TT-0.1));tnShot(mix([1.6,3.8,20],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
