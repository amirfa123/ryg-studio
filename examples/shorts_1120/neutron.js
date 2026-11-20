// ===== What would happen if you held a spoonful of neutron star? (crazy what-if) =====
const TT=20.35;
const CU={c1:3.6,c2:8.02,c3:11.0,c4:14.05,c5:16.3,c6:18.85};
guy.outfit({hardhat:1});
const ST=scene('stage');const S=ST.S;
// spoon prop (guy-local coords; +z = front)
const SPN=mkProp('spoon',p=>{const M=toon(0xD8DCE6);part(p,cap(0.025,0.42),M,[0,0.21,0],[1,1,1],[0,0,0],0.006);part(p,SPH,M,[0,0.5,0.03],[0.09,0.13,0.035],[0.35,0,0],0.008);
  const spk=part(p,SPH,basic(0x8FF6FF),[0,0.5,0.065],[0.03,0.03,0.03],[0,0,0],0);p.userData.spk=spk;const halo=part(p,SPH,new THREE.MeshBasicMaterial({color:0x3FF0FF,transparent:true,opacity:0.35,depthWrite:false}),[0,0.5,0.065],[0.07,0.07,0.07],[0,0,0],0);p.userData.halo=halo});
function holdSpoon(o={}){SPN.visible=true;SPN.position.set(-0.32,1.0,0.6);SPN.rotation.set(0.45,0,0.1);return {reachR:[-0.32,1.04,0.6],...o}}
// --- space set ---
const SPACE=new THREE.Group();S.add(SPACE);
{const n=500,pos=new Float32Array(n*3);for(let i=0;i<n;i++){const a=hash(i*1.3)*PI*2,b=(hash(i*2.7)-0.3)*1.6,R=60;pos[i*3]=Math.cos(a)*Math.cos(b)*R;pos[i*3+1]=Math.sin(b)*R;pos[i*3+2]=Math.sin(a)*Math.cos(b)*R}
  const gm=new THREE.BufferGeometry();gm.setAttribute('position',new THREE.BufferAttribute(pos,3));SPACE.add(new THREE.Points(gm,new THREE.PointsMaterial({color:0xffffff,size:0.35,sizeAttenuation:true})))}
part(SPACE,SPH,toon(0x6E5A8E),[0,-0.75,0],[2.2,0.8,1.8],[0,0,0],0.02);for(let k=0;k<6;k++)part(SPACE,SPH,toon(0x58467A),[Math.cos(k*1.1)*1.5,-0.1,Math.sin(k*1.1)*1.2],[0.35,0.12,0.3],[0,0,0],0);
const NS=new THREE.Group();NS.position.set(-7,6.2,-16);SPACE.add(NS);part(NS,SPH,basic(0xE8FDFF),[0,0,0],[1.2,1.2,1.2],[0,0,0],0);part(NS,SPH,new THREE.MeshBasicMaterial({color:0x3FF0FF,transparent:true,opacity:0.25,depthWrite:false}),[0,0,0],[2.4,2.4,2.4],[0,0,0],0);
const BEAMS=new THREE.Group();NS.add(BEAMS);for(const s of [-1,1])part(BEAMS,new THREE.ConeGeometry(0.9,9,20,1,true),new THREE.MeshBasicMaterial({color:0x9DF7FF,transparent:true,opacity:0.22,side:THREE.DoubleSide,depthWrite:false}),[0,s*4.5,0],[1,1,1],[s>0?PI:0,0,0],0);BEAMS.rotation.z=0.5;
// mountain to squeeze (space set)
const MTN=new THREE.Group();S.add(MTN);part(MTN,new THREE.ConeGeometry(2.2,3.2,7),toon(0x7C8A9E),[0,1.6,0],[1,1,1],[0,0,0],0.02);part(MTN,new THREE.ConeGeometry(0.85,1.25,7),toon(0xFFFFFF),[0,2.6,0],[1,1,1],[0,0,0],0.01);part(MTN,new THREE.ConeGeometry(1.4,2.0,6),toon(0x6A7890),[1.3,1.0,0.3],[1,1,1],[0,0.4,0],0.015);
// --- earth set ---
const EARTH=new THREE.Group();S.add(EARTH);part(EARTH,new THREE.CircleGeometry(40,48),toon(0x6CCB5F),[0,0,0],[1,1,1],[-PI/2,0,0],0);part(EARTH,new THREE.PlaneGeometry(1.4,40),toon(0xD9C9A3),[0,0.01,-2],[1,1,1],[-PI/2,0,0],0);
for(let k=0;k<14;k++){const x=(hash(k*3.1)-0.5)*26,z=-4-hash(k*5.3)*14;if(Math.abs(x)<1.5)continue;const tr=new THREE.Group();tr.position.set(x,0,z);EARTH.add(tr);part(tr,cap(0.12,1.2),toon(0x8A5A2B),[0,0.6,0]);part(tr,SPH,toon(k%2?0x2E9E5B:0x3DBA6A),[0,1.6,0],[0.8,0.8,0.8],[0,0,0],0.012)}
const HOUSE=new THREE.Group();HOUSE.position.set(3.2,0,-4);EARTH.add(HOUSE);part(HOUSE,new THREE.BoxGeometry(2,1.6,1.6),toon(0xFFE0B5),[0,0.8,0],[1,1,1],[0,0,0],0.015);part(HOUSE,new THREE.ConeGeometry(1.6,1.0,4),toon(0xE2574F),[0,2.1,0],[1,1,1],[0,PI/4,0],0.015);
function setSet(k){SPACE.visible=k==='space';EARTH.visible=k==='earth';MTN.visible=false}
function shot(p,l){ST.shot(p,l)}
const C0={p:[2.3,1.8,8.0],l:[-0.3,1.35,0]};
function spk(t){const s=1+0.25*Math.sin(t*2*PI/0.7);SPN.userData.halo.scale.setScalar(0.07*s)}
function openScene(t){setSet('space');setBG('neon');BEAMS.rotation.y=t*2*PI/1.0*0.0;BEAMS.rotation.x=t*2*PI/2.5;putGuy(S,0,0,0,0.25);spk(t);
  guy.pose(holdSpoon({armL:[0.4,0.1],look:-0.35,lookY:-0.15,headPitch:0.15,mouth:'o',mouthSize:0.6,blink:BLINK(t),jump:0.01*Math.sin(t*2*PI/1.7)}))}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();
  if(t<CU.c1){openScene(t);const k=ease(seg(t,0.3,CU.c1));shot(mix(C0.p,[2.0,1.75,7.3],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,CU.c1-0.3,CU.c1));g.save();g.globalAlpha=a;txt('WHAT WOULD HAPPEN IF',W/2,215,70,{sw:15});txt('YOU HELD A SPOONFUL',W/2,315,80,{fill:'#FFD23F',sw:17});txt('OF NEUTRON STAR?',W/2,425,96,{fill:'#3FF0FF',sw:20});g.restore();
    comic('SHINY...',W*0.27,1150,76,t,2.1,{life:1.3,rot:-0.08,fill:'#fff'})}
  else if(t<CU.c2){clear3d();setBG('blue');flash(t,CU.c1,0.15);
    // 2D: a scale — tiny spoon vs counter
    const cx=W/2,cy=900,tilt=-0.22*easeOut(seg(t,5.0,6.2));
    g.save();g.translate(cx,cy);g.scale(1.05,1.05);g.fillStyle='#C9CDD6';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.moveTo(-60,330);g.lineTo(60,330);g.lineTo(18,0);g.lineTo(-18,0);g.closePath();g.fill();g.stroke();
    g.rotate(tilt);g.fillRect(-380,-14,760,28);g.strokeRect(-380,-14,760,28);
    for(const s of [-1,1]){g.save();g.translate(s*340,0);g.rotate(-tilt);g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(0,0);g.lineTo(-90,150);g.moveTo(0,0);g.lineTo(90,150);g.stroke();g.fillStyle='#C9CDD6';g.beginPath();g.ellipse(0,160,120,26,0,0,7);g.fill();g.stroke();
      if(s<0){g.fillStyle='#D8DCE6';g.save();g.translate(0,128);g.rotate(-0.2);rr(-70,-8,90,14,7);g.fill();g.stroke();g.beginPath();g.ellipse(40,-2,36,22,0,0,7);g.fill();g.stroke();g.fillStyle='#8FF6FF';g.beginPath();g.arc(40,-6,9+2*Math.sin(t*9),0,7);g.fill();g.restore();txt('1 TEASPOON',0,240,44,{sw:9})}
      else{for(let i=0;i<5;i++){g.fillStyle=['#7C8A9E','#6A7890','#8E9BB0'][i%3];g.beginPath();g.moveTo(-100+i*45,140);g.lineTo(-60+i*45,40-hash(i)*40);g.lineTo(-20+i*45,140);g.closePath();g.fill();g.stroke()}txt('A MOUNTAIN',0,240,44,{sw:9})}g.restore()}
    g.restore();
    const v=Math.pow(clamp(seg(t,5.4,7.6)),2.2)*1e9;panel(W/2,330,860,190);txt(Math.round(v).toLocaleString('en-US'),W/2,310,96,{stroke:0,fill:'#FFD23F'});txt('TONNES',W/2,385,46,{stroke:0,fill:'#3FF0FF'});
    comic('WHAT?!',W*0.78,620,84,t,7.4,{life:0.8,rot:0.1,fill:'#fff'})}
  else if(t<CU.c3){setSet('space');setBG('neon');MTN.visible=true;BEAMS.rotation.x=t*2*PI/2.5;putGuy(S,0,0,0,0.25);spk(t);flash(t,CU.c2,0.15);
    guy.pose(holdSpoon({armL:[1.2,0.4],bendL:0.5,look:0.3,lookY:0.3,mouth:'o',mouthSize:1.2,wide:true,blink:BLINK(t)}));
    guy.root.updateMatrixWorld(true);const sp=new THREE.Vector3();SPN.userData.spk.getWorldPosition(sp);
    const k=ease(seg(t,8.9,10.4));const s=lerp(1,0.005,k);MTN.scale.setScalar(s);MTN.position.set(lerp(-2.6,sp.x,k),lerp(0,sp.y,k),lerp(-2.0,sp.z,k));MTN.rotation.y=t*0.6;
    shot([2.6,2.4,8.6],[-0.8,1.6,-0.5]);
    pill('A WHOLE MOUNTAIN',W/2,380,56,'#FFD23F','#111',t,CU.c2+0.2,CU.c3);comic('SQUISH!',W*0.72,900,96,t,10.4,{life:0.6,rot:0.1,fill:'#3FF0FF'})}
  else if(t<CU.c4){setSet('earth');setBG('day');putGuy(S,0,0,0.5,0.15);spk(t);flash(t,CU.c3,0.15);const sh=seg(t,12.4,CU.c4);
    guy.pose(holdSpoon({armL:[0.6+0.2*Math.sin(t*9),0.2],mouth:'teeth',teethGap:0.4,look:-0.4,lookY:-0.2,blink:BLINK(t),jump:0.004*Math.sin(t*40)*sh}));
    SPN.position.x+=0.006*Math.sin(t*60)*sh;SPN.userData.halo.scale.setScalar(0.07+0.05*sh+0.02*Math.sin(t*30));
    shot([1.2,1.6,5.4],[-0.15,1.45,0.5]);
    // outward arrows around spoon
    guy.root.updateMatrixWorld(true);const sp=new THREE.Vector3();SPN.userData.spk.getWorldPosition(sp);const p=proj(sp,ST.cam);
    if(t>12.4){g.save();g.strokeStyle='#FF4A4A';g.lineWidth=12;g.lineCap='round';for(let i=0;i<8;i++){const a=i/8*PI*2,r0=60+30*sh+20*Math.sin(t*14),r1=r0+50+40*sh;g.beginPath();g.moveTo(p[0]+Math.cos(a)*r0,p[1]+Math.sin(a)*r0);g.lineTo(p[0]+Math.cos(a)*r1,p[1]+Math.sin(a)*r1);g.stroke()}g.restore()}
    panel(W/2,330,800,150);txt('BACK ON EARTH',W/2,300,64,{stroke:0,fill:'#5BE37A'});txt('NOTHING IS SQUEEZING IT',W/2,362,44,{stroke:0});
    comic('UH-OH',W*0.25,820,84,t,13.1,{life:0.9,rot:-0.1,fill:'#fff'})}
  else if(t<CU.c5){clear3d();setBG('#0A0A1E');const k=seg(t,CU.c4,CU.c5),e=easeOut(k);const sx=Math.sin(t*70)*24*(1-k),sy=Math.cos(t*63)*24*(1-k);
    g.save();g.translate(sx,sy);
    // Earth from space with a blast on the surface
    g.fillStyle='#2E6FD8';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.arc(W/2,1180,430,0,7);g.fill();g.stroke();g.fillStyle='#5DCB72';for(const [x,y,r] of [[-150,-120,140],[160,60,120],[-40,220,90],[200,-220,70]]){g.beginPath();g.ellipse(W/2+x,1180+y,r,r*0.7,0.4,0,7);g.fill()}
    const bx=W/2-60,by=840;const R=lerp(10,620,e);const gr=g.createRadialGradient(bx,by,0,bx,by,R);gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(0.3,'rgba(255,240,150,0.95)');gr.addColorStop(0.6,'rgba(255,120,40,0.75)');gr.addColorStop(1,'rgba(255,40,80,0)');g.fillStyle=gr;g.beginPath();g.arc(bx,by,R,0,7);g.fill();
    g.strokeStyle=`rgba(255,255,255,${1-k})`;g.lineWidth=14;g.beginPath();g.arc(bx,by,R*1.1,0,7);g.stroke();g.restore();
    flash(t,CU.c4,0.3);comic('KABOOM!',W/2,560,150,t,CU.c4+0.15,{life:1.9,rot:-0.06,fill:'#FFD23F'})}
  else if(t<CU.c6){clear3d();setBG('gold');flash(t,CU.c5,0.15);
    const gy=1240;g.strokeStyle='#fff';g.lineWidth=8;g.beginPath();g.moveTo(120,gy);g.lineTo(W-120,gy);g.stroke();
    const b1=easeOut(seg(t,16.5,17.0))*90;g.fillStyle='#FF8A3D';g.strokeStyle='#111';g.lineWidth=8;rr(220,gy-b1,240,b1,14);g.fill();g.stroke();txt('BIGGEST',340,gy+60,44,{sw:9});txt('BOMB EVER',340,gy+110,44,{sw:9});
    const b2=Math.pow(clamp(seg(t,17.2,18.4)),1.5)*960;const gr=g.createLinearGradient(0,gy,0,gy-960);gr.addColorStop(0,'#3FF0FF');gr.addColorStop(1,'#E8FDFF');g.fillStyle=gr;rr(620,gy-b2,240,b2+4,14);g.fill();g.stroke();txt('NEUTRON',740,gy+60,44,{sw:9,fill:'#3FF0FF'});txt('SPOON',740,gy+110,44,{sw:9,fill:'#3FF0FF'});
    if(t>18.1){txt('▲ OFF THE CHART',740,230,52,{sw:11,fill:'#FFD23F'})}
    comic('WAY BIGGER',W*0.33,900,74,t,17.6,{life:1.2,rot:-0.1,fill:'#fff'})}
  else{openScene(t-TT);const k=ease(seg(t,CU.c6,TT-0.25));shot(mix([3.2,2.2,8.4],C0.p,k),C0.l);flash(t,CU.c6,0.15)}
  vignette();captions(t)};
