// ===== What would happen if Earth's gravity suddenly doubled? (crazy what-if) =====
const TT=20.45;
const CU={c1:3.3,c2:5.65,c3:8.2,c4:11.05,c5:14.05,c6:18.75};
guy.outfit({snapforward:1,capColor:0x2FB5A8});
// ---------- park world ----------
const PK={S:new THREE.Scene()};lights(PK.S);PK.cam=new THREE.PerspectiveCamera(30,W/H,0.1,400);
part(PK.S,new THREE.PlaneGeometry(400,400),toon(0x6CC04A),[0,0,0],[1,1,1],[-PI/2,0,0],0);
// mowing stripes
for(let i=-20;i<20;i++)part(PK.S,new THREE.PlaneGeometry(2.4,120),toon(i%2?0x63B544:0x74C952),[i*4.8,0.004,-20],[1,1,1],[-PI/2,0,0],0);
// path
part(PK.S,new THREE.PlaneGeometry(200,1.6),toon(0xE9D7A8),[0,0.008,4.2],[1,1,1],[-PI/2,0,0],0);
// hills
for(let i=0;i<9;i++)part(PK.S,SPH,toon(i%2?0x4FA83E:0x5DB84A),[-80+i*20,-4,-70-hash(i)*15],[16+hash(i*3)*8,10+hash(i*5)*6,10],[0,0,0],0.02);
// trees
function tree(x,z,s){const tr=new THREE.Group();tr.position.set(x,0,z);tr.scale.setScalar(s);PK.S.add(tr);part(tr,cap(0.18,1.6),toon(0x8A5A2B),[0,0.9,0]);part(tr,SPH,toon(0x3E9A3A),[0,2.3,0],[1.1,1.0,1.1],[0,0,0],0.015);part(tr,SPH,toon(0x4BAE45),[0.4,2.7,0.2],[0.7,0.6,0.7],[0,0,0],0.012);return tr}
for(let k=-12;k<12;k++){tree(k*6+2*hash(k),-14-hash(k*7)*8,1.2+0.4*hash(k*3));if(Math.abs(k)>2)tree(k*7+3,9+hash(k)*3,1.1)}
// benches + lamp posts
for(const x of [-7,7]){const b=new THREE.Group();b.position.set(x,0,5.6);PK.S.add(b);part(b,new THREE.BoxGeometry(1.8,0.1,0.5),toon(0xB4743A),[0,0.5,0],[1,1,1],[0,0,0],0.01);part(b,new THREE.BoxGeometry(1.8,0.4,0.08),toon(0xB4743A),[0,0.8,0.24],[1,1,1],[0,0,0],0.01);for(const s of [-0.8,0.8])part(b,new THREE.BoxGeometry(0.08,0.5,0.45),toon(0x2A2A35),[s,0.25,0])}
// goal posts (generic) far left for the kick
const GOAL=new THREE.Group();GOAL.position.set(-34,0,-2);PK.S.add(GOAL);for(const z of [-3.6,3.6])part(GOAL,cap(0.1,2.4),toon(0xffffff),[0,1.2,z]);part(GOAL,cap(0.1,7.2),toon(0xffffff),[0,2.4,0],[1,1,1],[PI/2,0,0]);
// bathroom scale
const SCALE=new THREE.Group();PK.S.add(SCALE);part(SCALE,new THREE.BoxGeometry(1.0,0.1,0.9),toon(0xF4F4F8),[0,0.05,0],[1,1,1],[0,0,0],0.02);const scr=canvasTex(256,96);part(SCALE,new THREE.PlaneGeometry(0.42,0.16),new THREE.MeshBasicMaterial({map:scr.tx}),[0,0.102,0.3],[1,1,1],[-PI/2,0,0],0);
function scaleRead(v){const c=scr.ctx;c.fillStyle='#14202A';c.fillRect(0,0,256,96);c.fillStyle=v>100?'#FF4A4A':'#5BFF8A';c.font='900 70px Inter';c.textAlign='center';c.textBaseline='middle';c.fillText(Math.round(v)+' kg',128,52);scr.tx.needsUpdate=true}
// ball
const BALL=new THREE.Group();PK.S.add(BALL);part(BALL,SPH,toon(0xffffff),[0,0,0],[0.2,0.2,0.2],[0,0,0],0.008);for(let i=0;i<6;i++){const a=i/6*PI*2;part(BALL,SPH,toon(0x22222C),[Math.cos(a)*0.17,Math.sin(a)*0.17*0.6,Math.sin(a)*0.1],[0.06,0.06,0.06],[0,0,0],0)}
// balloon (held in left hand)
const BAL=new THREE.Group();PK.S.add(BAL);const balM=toon(0xFF3DA6);part(BAL,SPH,balM,[0,0,0],[0.42,0.5,0.42],[0,0,0],0.01);part(BAL,new THREE.ConeGeometry(0.06,0.08,10),balM,[0,-0.52,0],[1,1,1],[PI,0,0],0);
const STR=part(PK.S,cap(0.006,1),toon(0x222222),[0,0,0]);
// second "you" (ghost)
const guy2=makeYRG();guy2.outfit({snapforward:1,capColor:0x2FB5A8});const h2=new THREE.Group();h2.add(guy2.root);PK.S.add(h2);
guy2.root.traverse(o=>{if(o.isMesh){o.material=o.material.clone();o.material.transparent=true;o.material.opacity=0.45;o.material.depthWrite=false}});
function shot(p,l){PK.cam.position.set(...p);PK.cam.lookAt(...l);setBG('day');r.setClearColor(0,0);r.render(PK.S,PK.cam)}
function reset(){putGuy(PK.S,0,0,0,0);SCALE.visible=false;BALL.visible=false;BAL.visible=false;STR.visible=false;h2.visible=false;holder.rotation.set(0,0,0)}
const CROUCH=k=>({legL:[0.9*k,1.7*k,-0.8*k],legR:[0.9*k,1.7*k,-0.8*k],sitY:-0.32*k});
// ---------- 2D ----------
function gDial(x,y,R,v){g.save();g.translate(x,y);g.fillStyle='rgba(10,12,25,0.9)';g.strokeStyle='#111';g.lineWidth=12;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();
  const a0=PI*0.8,a1=PI*2.2,k=clamp((v-0.5)/2);g.lineCap='round';g.strokeStyle='rgba(255,255,255,0.18)';g.lineWidth=20;g.beginPath();g.arc(0,0,R*0.72,a0,a1);g.stroke();g.strokeStyle=v>1.5?'#FF4A4A':'#5BE37A';g.beginPath();g.arc(0,0,R*0.72,a0,a0+(a1-a0)*k);g.stroke();
  const a=a0+(a1-a0)*k;g.strokeStyle='#FFD23F';g.lineWidth=9;g.beginPath();g.moveTo(0,0);g.lineTo(Math.cos(a)*R*0.6,Math.sin(a)*R*0.6);g.stroke();g.fillStyle='#fff';g.beginPath();g.arc(0,0,10,0,7);g.fill();g.restore();
  txt(v.toFixed(1)+'G',x,y+R*0.45,R*0.36,{fill:v>1.5?'#FF4A4A':'#fff',sw:10});txt('GRAVITY',x,y+R+40,R*0.24,{fill:'#FFD23F',sw:10})}
function downArrows(t,a){if(a<=0)return;g.save();g.globalAlpha=a;for(let i=0;i<5;i++){const x=W*0.14+i*W*0.18,y=520+((t*500+i*90)%300);arrow(x,y-90,x,y+30,'#FF4A4A',18)}g.restore()}
// ---------- opening (loop) ----------
const C0={p:[2.6,2.0,8.2],l:[0,1.75,0]};
function openScene(t){reset();guy.pose(idle(t,{armL:[0.35+0.04*Math.sin(t*2*PI/(TT/8)),0],armR:[0.35,0],jump:0.015*Math.sin(t*2*PI/(TT/10)),headYaw:0.15,look:0.3}))}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.1,CU.c1));shot(mix(C0.p,[2.3,1.9,7.4],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT IF',W/2,200,96,{sw:18});txt("EARTH'S GRAVITY",W/2,310,104,{fill:'#3FF0FF',sw:22});txt('DOUBLED?',W/2,440,150,{fill:'#FFD23F',sw:28});g.restore();
    gDial(W*0.8,1690,105,1.0)}
  else if(t<CU.c2){flash(t,CU.c1,0.15);reset();SCALE.visible=true;const k=easeOut(seg(t,3.45,3.9));const sh=t<4.1&&t>3.45?0.02*Math.sin(t*70):0;
    holder.position.y=0.1;guy.pose({...CROUCH(0.55*k),armL:[0.35+0.4*k,0],armR:[0.35+0.4*k,0],bendL:0.4*k,bendR:0.4*k,mouth:'o',mouthSize:1.1,wide:true,blink:false,brow:0.02,headPitch:0.15*k});
    scaleRead(lerp(80,160,easeOut(seg(t,3.5,4.6))));shot([1.9+sh,1.9,6.2],[0,1.15,0]);downArrows(t,seg(t,3.4,3.6));
    gDial(W*0.8,1690,105,lerp(1,2,easeOut(seg(t,3.35,3.9))));comic('OOF!',W*0.28,700,130,t,3.55,{life:1.2,rot:-0.12,fill:'#FF7AC2'});pill('2× YOUR WEIGHT',W/2,330,62,'#FF4A4A','#fff',t,4.4,CU.c2);
    const p=proj(new THREE.Vector3(0,0.1,0.3),PK.cam);if(t>4.6){const s=pop(t,4.6);g.save();g.translate(p[0],p[1]+120);g.scale(s,s);txt('80 → 160 KG',0,0,64,{fill:'#FFD23F',sw:14});g.restore()}}
  else if(t<CU.c3){flash(t,CU.c2,0.15);reset();h2.visible=true;const u=t-CU.c2;const wk=Math.sin(u*4);
    const th=-0.8;holder.position.set(0,0,0);holder.rotation.y=th;guy.pose({...CROUCH(0.25),legL:[0.25+0.3*wk,1.0,-0.4],legR:[0.25-0.3*wk,1.0,-0.4],armL:[0.5,0],armR:[0.5,0],headPitch:0.25,mouth:'teeth',teethGap:0.3,blink:BLINK(t),jump:-0.05-0.02*Math.abs(wk)});
    h2.position.set(-Math.sin(th)*0.5,0.95-0.02*Math.abs(wk),-Math.cos(th)*0.5);h2.rotation.set(0,th,0);guy2.pose({...SIT,armL:[1.3,0.6],armR:[1.3,0.6],bendL:0.6,bendR:0.6,mouth:'grin',blink:BLINK(t+1)});
    shot([-1.2,2.4,7.6],[0,1.85,0]);
    const p=proj(new THREE.Vector3(h2.position.x,3.3,h2.position.z),PK.cam);if(t>6.5){const s=pop(t,6.5);g.save();g.translate(p[0],p[1]-40);g.scale(s,s);pill('YOU #2',0,0,60,'#3FF0FF','#111',t,6.5,CU.c3);g.restore()}
    comic('HEAVY!',W*0.72,620,110,t,7.4,{life:0.8,rot:0.1,fill:'#FFD23F'})}
  else if(t<CU.c4){flash(t,CU.c3,0.15);reset();h2.visible=true;
    // left ghost = 1G, right real = 2G. jump cycle
    const ph=seg(t,8.7,9.7),ph2=seg(t,9.9,10.9);const jp=Math.max(ph>0&&ph<1?Math.sin(ph*PI):0,ph2>0&&ph2<1?Math.sin(ph2*PI):0);const air=jp>0;
    holder.position.set(1.0,0.32*jp,0);guy.pose({...(air?{legL:[0.3,0.6,0],legR:[0.3,0.6,0]}:CROUCH(0.2)),armL:[air?2.6:0.4,0],armR:[air?2.6:0.4,0],mouth:air?'grin':'o',blink:false});
    h2.position.set(-1.0,0.75*jp,0);h2.rotation.set(0,0,0);guy2.pose({...(air?{legL:[0.4,0.8,0],legR:[0.4,0.8,0]}:{}),armL:[air?2.8:0.4,0],armR:[air?2.8:0.4,0],mouth:'grin',blink:false});
    shot([0,1.8,9.2],[0,1.6,0]);
    // ruler bars
    const pg=proj(new THREE.Vector3(0,0,0),PK.cam),p1=proj(new THREE.Vector3(0,0.75,0),PK.cam),p2=proj(new THREE.Vector3(0,0.32,0),PK.cam);
    g.save();g.fillStyle='rgba(255,255,255,0.9)';g.strokeStyle='#111';g.lineWidth=6;rr(W/2-14,p1[1]-200,28,pg[1]-p1[1]+200,10);g.fill();g.stroke();for(let i=0;i<8;i++){const y=pg[1]-i*(pg[1]-p1[1])/3;g.fillStyle='#111';g.fillRect(W/2-14,y,i%2?14:28,5)}g.restore();
    if(t>9.0){txtA('1G',W*0.28,260,90,seg(t,9.0,9.3),{fill:'#5BE37A',sw:16});txtA('2G',W*0.72,260,90,seg(t,9.0,9.3),{fill:'#FF4A4A',sw:16})}
    if(t>10.0){g.save();g.globalAlpha=seg(t,10.0,10.3);for(const [p,c] of [[p1,'#5BE37A'],[p2,'#FF4A4A']]){g.strokeStyle=c;g.lineWidth=8;g.setLineDash([20,14]);g.beginPath();g.moveTo(W*0.12,p[1]-200);g.lineTo(W*0.88,p[1]-200);g.stroke()}g.restore()}
    pill('LESS THAN HALF!',W/2,1640,66,'#FF4A4A','#fff',t,10.2,CU.c4);comic('BOING',W*0.24,560,90,t,8.75,{life:0.7,rot:-0.1,fill:'#5BE37A'})}
  else if(t<CU.c5){flash(t,CU.c4,0.15);reset();BALL.visible=true;
    const kick=11.6,fly=seg(t,kick,13.6);holder.position.set(0,0,0);holder.rotation.y=-PI/2;const sw=t<kick?-0.6*seg(t,11.1,kick):lerp(1.3,0.2,seg(t,kick,kick+0.5));
    guy.pose({legL:[0,0,0],legR:[sw,0.2,0],armL:[0.8,0.4],armR:[0.8,-0.4],mouth:t>kick?'grin':'smile',blink:false});
    const D=20*0.5,X=-0.6-fly*D,Y=0.2+fly*(1-fly)*4*1.8;BALL.position.set(t<kick?-0.6:X,t<kick?0.2:Y,0.3);BALL.rotation.z=fly*14;
    const cx=lerp(-0.6,-0.6-D,ease(seg(t,kick+0.1,13.7)));shot([cx,1.9,12],[cx,1.4,0]);
    // 1G ghost arc (dashed) twice as far
    const pts=[];for(let i=0;i<=30;i++){const u=i/30;pts.push(proj(new THREE.Vector3(-0.6-u*2*D,0.2+u*(1-u)*4*3.6,0.3),PK.cam))}
    if(t>12.3){g.save();g.globalAlpha=seg(t,12.3,12.6);g.strokeStyle='#5BE37A';g.lineWidth=10;g.setLineDash([22,16]);g.beginPath();pts.forEach((p,i)=>i?g.lineTo(...p):g.moveTo(...p));g.stroke();g.restore();txtA('1G BALL KEEPS GOING',W*0.36,520,52,seg(t,12.3,12.6),{fill:'#5BE37A',sw:12});if(t>12.6)arrow(W*0.5,620,W*0.12,620,'#5BE37A',20)}
    if(t>13.6){const e=proj(new THREE.Vector3(-0.6-D,0.2,0.3),PK.cam);check(e[0],e[1]-90,1.0,'#FF4A4A');txtA('2G',e[0],e[1]-190,70,seg(t,13.6,13.8),{fill:'#FF4A4A',sw:14})}
    pill('HALF AS FAR',W/2,1640,70,'#FFD23F','#111',t,12.6,CU.c5);comic('THWACK!',W*0.66,560,100,t,kick,{life:0.8,rot:0.1,fill:'#FF7AC2'})}
  else if(t<CU.c6){flash(t,CU.c5,0.15);reset();BAL.visible=true;STR.visible=true;
    const sq=easeOut(seg(t,15.4,16.4));holder.rotation.y=-0.35;guy.pose({armL:[0.4,0],armR:[2.3,-0.2],bendR:0.3,mouth:'o',mouthSize:0.9,wide:sq>0.5,blink:false,headYaw:0.25,lookY:0.6});
    holder.updateMatrixWorld(true);const hp=new THREE.Vector3();guy.arms.R.userData.hd.getWorldPosition(hp);const s=lerp(1,0.79,sq);BAL.scale.setScalar(s);BAL.position.set(hp.x,hp.y+0.9+0.03*Math.sin(t*3),hp.z);
    STR.position.set(hp.x,hp.y+0.45-0.2*(1-s),hp.z);STR.scale.set(1,0.9*s,1);
    shot([-0.6,2.2,8.2],[-0.5,2.15,0]);
    // atmosphere column panel
    panel(W/2,470,880,520);const ex=W/2,ey=680;g.save();g.beginPath();rr(W/2-440,210,880,520,36);g.clip();
    const top=lerp(290,500,sq);const gr=g.createLinearGradient(0,top,0,ey);gr.addColorStop(0,'rgba(80,170,255,0.15)');gr.addColorStop(1,`rgba(60,140,255,${0.55+0.35*sq})`);g.fillStyle=gr;g.fillRect(W/2-440,top,880,ey-top);
    g.strokeStyle='#3FF0FF';g.lineWidth=6;g.setLineDash([16,12]);g.beginPath();g.moveTo(W/2-440,top);g.lineTo(W/2+440,top);g.stroke();g.setLineDash([]);
    for(let i=0;i<60;i++){const x=W/2-420+hash(i)*840,y=lerp(top+10,ey-10,hash(i*3.3)**(1+sq));g.fillStyle='#BFE9FF';g.beginPath();g.arc(x,y,7,0,7);g.fill()}
    g.fillStyle='#4FB860';g.fillRect(W/2-440,ey,880,60);g.restore();
    txt('AIR',W/2-330,top+40,46,{fill:'#BFE9FF',sw:10});
    const atm=lerp(1,2,sq);txt(atm.toFixed(1)+' ATM',W/2+250,ey-60,64,{fill:sq>0.5?'#FF4A4A':'#fff',sw:14});
    pill('SQUEEZED!',W/2,1640,70,'#3FF0FF','#111',t,15.6,CU.c6);comic('SQUISH',W*0.75,1130,90,t,15.5,{life:0.9,rot:0.12,fill:'#FFD23F'});
    if(t>17.1)pill('2× PRESSURE',W/2,800,56,'#FF4A4A','#fff',t,17.1,CU.c6)}
  else{const tt=t-TT;openScene(tt);const k=ease(seg(t,CU.c6,TT-0.1));shot(mix([3.2,2.4,9.4],C0.p,k),C0.l);flash(t,CU.c6,0.15);gDial(W*0.8,1690,105,lerp(2,1,ease(seg(t,CU.c6,CU.c6+0.6))))}
  vignette();captions(t)};
