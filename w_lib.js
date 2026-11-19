// ===== GTA 6 long-form shared library (16:9) =====
const PI=Math.PI;
function proj(v,cam){const p=v.clone().project(cam);return [(p.x+1)/2*W,(1-p.y)/2*H]}
function mix(p,q,c){return p.map((v,i)=>lerp(v,q[i],c))}
const BLINK=t=>{const p=((t%3.1)+3.1)%3.1;return p>1.5&&p<1.62};
function canvasTex(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;const tx=new THREE.CanvasTexture(c);tx.colorSpace=THREE.SRGBColorSpace;return {c,ctx:c.getContext('2d'),tx}}
const GM=toon(0).gradientMap;
const tmat=(c,map)=>new THREE.MeshToonMaterial({color:c,map:map||null,gradientMap:GM});
function palm(parent,x,z,s=1,lean=0.15,ry=0){const p=new THREE.Group();p.position.set(x,0,z);p.scale.setScalar(s);p.rotation.y=ry;parent.add(p);const tm=toon(0x9C6B3E);let px=0,py=0;
  for(let i=0;i<7;i++){const a=lean*i/6;part(p,cap(0.09-i*0.006,0.42),tm,[px,py+0.25,0],[1,1,1],[0,0,-a],0.008);px+=Math.sin(a)*0.45;py+=Math.cos(a)*0.45}
  const top=new THREE.Group();top.position.set(px,py+0.2,0);p.add(top);for(let k=0;k<7;k++){const a=k/7*PI*2;const l=new THREE.Group();l.rotation.set(0,a,0);top.add(l);part(l,SPH,toon(k%2?0x2E9E5B:0x3DBA6A),[0.62,-0.12,0],[0.7,0.06,0.17],[0,0,-0.35],0.01)}
  part(top,SPH,toon(0x7A4E2A),[0,-0.05,0],[0.12,0.1,0.12],[0,0,0],0.008);return p}
function makeCar(col=0xFF3D7F){const c=new THREE.Group();const B=toon(col),Wt=toon(0xffffff),K=toon(0x1d1d24),G=new THREE.MeshToonMaterial({color:0x7FD3FF,transparent:true,opacity:0.55,gradientMap:GM});
  const body=[];body.push(part(c,new THREE.BoxGeometry(4.0,0.45,1.75),B,[0,0.55,0],[1,1,1],[0,0,0],0.02));body.push(part(c,new THREE.BoxGeometry(1.3,0.28,1.7),B,[1.35,0.86,0],[1,1,1],[0,0,0.12],0.02));body.push(part(c,new THREE.BoxGeometry(1.0,0.3,1.7),B,[-1.45,0.88,0],[1,1,1],[0,0,-0.06],0.02));
  body.push(part(c,new THREE.BoxGeometry(0.85,0.3,1.72),B,[-0.2,0.9,0],[1,1,1],[0,0,0],0));part(c,new THREE.BoxGeometry(4.02,0.07,0.25),Wt,[0,0.6,0.0],[1,1,1],[0,0,0],0);
  part(c,new THREE.BoxGeometry(0.05,0.3,1.45),G,[0.82,1.1,0],[1,1,1],[0,0,0.55],0.01);
  for(const z of [-0.88,0.88]){part(c,new THREE.BoxGeometry(0.1,0.14,0.3),basic(0xFFF6B0),[2.0,0.62,z*0.7],[1,1,1],[0,0,0],0);part(c,new THREE.BoxGeometry(0.06,0.1,0.35),basic(0xFF3030),[-2.0,0.66,z*0.7],[1,1,1],[0,0,0],0)}
  const wheels=[];for(const [x,z] of [[1.3,0.88],[-1.3,0.88],[1.3,-0.88],[-1.3,-0.88]]){const w=new THREE.Group();w.position.set(x,0.36,z);c.add(w);part(w,new THREE.CylinderGeometry(0.36,0.36,0.3,24),K,[0,0,0],[1,1,1],[PI/2,0,0],0.015);part(w,new THREE.BoxGeometry(0.5,0.08,0.32),toon(0xCFCFD8),[0,0,0],[1,1,1],[0,0,0],0);wheels.push(w)}
  const seat=new THREE.Group();seat.position.set(-0.35,0.55,0);c.add(seat);
  return {c,wheels,body,B,seat,spin(a){for(const w of wheels)w.rotation.z=-a},color(h){B.color.set(h)}}}
function arrow(x0,y0,x1,y1,c,wd=26){const a=Math.atan2(y1-y0,x1-x0);g.save();g.lineCap='round';g.strokeStyle='#111';g.lineWidth=wd+14;g.beginPath();g.moveTo(x0,y0);g.lineTo(x1-Math.cos(a)*30,y1-Math.sin(a)*30);g.stroke();g.strokeStyle=c;g.lineWidth=wd;g.stroke();
  g.translate(x1,y1);g.rotate(a);g.beginPath();g.moveTo(16,0);g.lineTo(-52,-44);g.lineTo(-52,44);g.closePath();g.lineJoin='round';g.lineWidth=12;g.strokeStyle='#111';g.stroke();g.fillStyle=c;g.fill();g.restore()}
function panel(x,y,w,h,c='rgba(10,12,25,0.85)',edge='#FFD23F',rad=36){g.fillStyle='rgba(0,0,0,0.3)';rr(x-w/2+6,y-h/2+10,w,h,rad);g.fill();g.fillStyle=c;rr(x-w/2,y-h/2,w,h,rad);g.fill();g.strokeStyle=edge;g.lineWidth=6;g.stroke()}
function vignette(){const vg=g.createRadialGradient(W/2,H/2,H*0.45,W/2,H/2,H*0.95);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,0.32)');g.fillStyle=vg;g.fillRect(0,0,W,H)}
const fade=(t,a,b,d=0.25)=>easeOut(seg(t,a,a+d))*(1-seg(t,b-d,b));
function pop(t,t0,d=0.3){return backOut(seg(t,t0,t0+d))}
function txtA(s,x,y,size,a,o={}){if(a<=0)return;g.save();g.globalAlpha=Math.min(1,a);txt(s,x,y,size,o);g.restore()}
// big title block (16:9)
function titleBlock(a,l1,l2,y=150){if(a<=0)return;g.save();g.globalAlpha=a;txt(l1,W/2,y,56,{sw:14});txt(l2,W/2,y+92,96,{fill:'#FFD23F',sw:22});g.restore()}
// chapter card: slides in, holds, slides out
function chapterCard(t,t0,t1,n,q){if(t<t0||t>t1)return;const a=easeOut(seg(t,t0,t0+0.35)),b=seg(t,t1-0.3,t1);const x=lerp(-W,0,a)+lerp(0,W,ease(b));g.save();g.translate(x,0);
  g.fillStyle='rgba(12,10,30,0.82)';g.beginPath();g.moveTo(0,70);g.lineTo(W*0.78,70);g.lineTo(W*0.74,250);g.lineTo(0,250);g.closePath();g.fill();g.fillStyle='#FF3DA6';g.fillRect(0,250,W*0.74,10);
  g.restore();g.save();g.translate(x,0);txt('CHAPTER '+n,90,118,40,{align:'left',fill:'#3FF0FF',sw:10});txt(q,90,192,74,{align:'left',sw:16});g.restore()}
function pillA(s,x,y,size,bgc,fg,t,t0,t1){pill(s,x,y,size,bgc,fg,t,t0,t1)}
// captions for 16:9
function cap16(t){let cur=null;for(const c of CH)if(t>=c.st-0.03&&t<c.en+0.3)cur=c;if(!cur)return;const size=60;g.save();g.font=`900 ${size}px Inter`;const sp=size*0.35,ws=cur.w.map(w=>g.measureText(w.w.toUpperCase()).width),tot=ws.reduce((a,b)=>a+b,0)+sp*(ws.length-1);
  const fit=Math.min(1,(W-300)/tot),pp=0.85+0.15*backOut(seg(t,cur.st-0.03,cur.st+0.13)),y=H-92;g.translate(W/2,y);g.scale(pp*fit,pp*fit);let x=-tot/2;
  cur.w.forEach((w,i)=>{const on=t>=w.st,act=on&&(i===cur.w.length-1||t<cur.w[i+1].st);txt(w.w.toUpperCase(),x+ws[i]/2,0,size,{fill:act?'#FFD23F':on?'#fff':'rgba(255,255,255,0.55)',sw:15});x+=ws[i]+sp});g.restore()}
function clear3d(){r.setClearColor(0x000000,0);r.clear()}
const BGS={sunset:'linear-gradient(#2A0E5A 0%,#7B2B8F 32%,#FF5E8A 62%,#FFB36B 82%,#FFD58A 100%)',night:'linear-gradient(#080A24 0%,#1C1450 45%,#4A1F6E 80%,#7A2C7A 100%)',day:'linear-gradient(#4FB8FF,#9BDCFF 55%,#E9F7FF)',
  neon:'radial-gradient(circle at 50% 45%,#3A1670,#12082E 70%)',teal:'radial-gradient(circle at 50% 45%,#0F6E78,#062A35 75%)',pink:'radial-gradient(circle at 50% 45%,#C2337A,#3A0B2E 75%)',gold:'radial-gradient(circle at 50% 45%,#B8860B,#3A2400 78%)',
  swamp:'linear-gradient(#24402E 0%,#5E8A5A 55%,#B9C98A 100%)',room:'linear-gradient(#1A1030,#2A1848)',red:'radial-gradient(circle at 50% 45%,#8E1B2E,#22060C 75%)',blue:'radial-gradient(circle at 50% 45%,#1F4FA8,#081633 75%)'};
function setBG(k){bg.style.background=BGS[k]||k}
function sunDisk(x,y,R){const gr=g.createLinearGradient(0,y-R,0,y+R);gr.addColorStop(0,'#FFE680');gr.addColorStop(1,'#FF5E8A');g.save();g.fillStyle=gr;g.beginPath();g.arc(x,y,R,0,7);g.fill();g.globalCompositeOperation='destination-out';for(let i=0;i<5;i++){const yy=y+R*0.15+i*R*0.18;g.fillRect(x-R,yy,2*R,4+i*3)}g.restore()}

// ---------- the guy ----------
const guy=makeYRG();guy.outfit({snapback:1,chain:1,shades:1});
const holder=new THREE.Group();holder.add(guy.root);
function putGuy(sc,x,y,z,ry=0,s=1){sc.add(holder);holder.rotation.order='XYZ';holder.position.set(x,y,z);holder.rotation.set(0,ry,0);holder.scale.setScalar(s)}
const idle=(t,o={})=>({armL:[0.3+0.03*Math.sin(t*2),0],armR:[0.3+0.03*Math.sin(t*2+1),0],blink:BLINK(t),mouth:'smile',jump:0.012*Math.sin(t*2.4),...o});
function walk(t,sp=7,o={}){const s=Math.sin(t*sp);return {legL:[0.5*s,0.5*Math.max(0,-s),0],legR:[-0.5*s,0.5*Math.max(0,s),0],armL:[0.25,-0.5*s],armR:[0.25,0.5*s],jump:0.05*Math.abs(Math.cos(t*sp)),blink:BLINK(t),mouth:'smile',...o}}
function run(t,o={}){const s=Math.sin(t*12);return {legL:[0.9*s,0.9*Math.max(0,-s)+0.2,0],legR:[-0.9*s,0.9*Math.max(0,s)+0.2,0],armL:[0.35,-0.9*s],armR:[0.35,0.9*s],bendL:1.0,bendR:1.0,jump:0.12*Math.abs(Math.cos(t*12)),mouth:'o',wide:true,...o}}
const SIT={legL:[1.45,1.45,0],legR:[1.45,1.45,0],sitY:-0.27};
// props parented to guy.up (up-local coords)
const props={};
function mkProp(name,build){const p=new THREE.Group();p.visible=false;guy.up.add(p);build(p);props[name]=p;return p}
function hideProps(){for(const k in props)props[k].visible=false}
mkProp('pad',p=>{const K=toon(0x22222C);part(p,new THREE.BoxGeometry(0.34,0.08,0.16),K,[0,0,0],[1,1,1],[0,0,0],0.008);for(const s of [-1,1])part(p,SPH,K,[s*0.15,-0.02,0.04],[0.08,0.06,0.1],[0,0,0],0.008);part(p,SPH,basic(0x3FF0FF),[0.06,0.045,0],[0.02,0.01,0.02],[0,0,0],0);part(p,SPH,basic(0xFF3DA6),[-0.06,0.045,0],[0.02,0.01,0.02],[0,0,0],0)});
mkProp('cash',p=>{for(let i=0;i<3;i++)part(p,new THREE.BoxGeometry(0.3,0.06,0.15),toon(0x5BC26A),[0,i*0.065,0],[1,1,1],[0,i*0.2,0],0.008);part(p,new THREE.BoxGeometry(0.06,0.2,0.16),toon(0xF5F0D0),[0,0.065,0],[1,1,1],[0,0.2,0],0)});
mkProp('bowl',p=>{part(p,new THREE.SphereGeometry(1,24,12,0,PI*2,PI/2,PI/2),toon(0xFF6A2B),[0,0.1,0],[0.28,0.18,0.28],[0,0,0],0.01);for(let i=0;i<9;i++)part(p,SPH,toon(0xFFD966),[Math.cos(i*2.4)*0.16*(i%3)/2,0.1+0.03*(i%2),Math.sin(i*2.4)*0.16*(i%3)/2],[0.07,0.03,0.07],[i,i*2,0],0.005)});
mkProp('bell',p=>{const K=toon(0x2A2A35),S=toon(0xBFC3CC);part(p,cap(0.025,0.5),S,[0,0,0],[1,1,1],[0,0,PI/2],0.006);for(const s of [-1,1])part(p,new THREE.CylinderGeometry(0.11,0.11,0.1,20),K,[s*0.24,0,0],[1,1,1],[0,0,PI/2],0.008)});
mkProp('cup',p=>{part(p,new THREE.CylinderGeometry(0.09,0.07,0.3,20),toon(0xFF8FB1),[0,0,0],[1,1,1],[0,0,0],0.008);part(p,new THREE.CylinderGeometry(0.095,0.095,0.04,20),toon(0xffffff),[0,0.16,0],[1,1,1],[0,0,0],0.006);part(p,cap(0.012,0.22),toon(0x3FF0FF),[0.03,0.3,0],[1,1,1],[0,0,0.2],0)});

// ---------- scene factory (lazy) ----------
const SC={};
function scene(name){if(!SC[name])SC[name]=BUILD[name]();return SC[name]}
const BUILD={};
function winTex(seed,lit=0.55){const {c,ctx,tx}=canvasTex(256,512);ctx.fillStyle='#ffffff';ctx.fillRect(0,0,256,512);for(let y=0;y<10;y++)for(let x=0;x<4;x++){const on=hash(seed*31+y*7+x*3)<lit;ctx.fillStyle=on?(hash(seed+y+x*9)<0.5?'#FFF2B0':'#B8F4FF'):'#5A5878';ctx.fillRect(22+x*58,24+y*48,38,30)}tx.wrapS=tx.wrapT=THREE.RepeatWrapping;return tx}
BUILD.city=()=>{const S=new THREE.Scene();lights(S);const o={S};
  part(S,new THREE.PlaneGeometry(400,200),toon(0x3A3550),[0,0,0],[1,1,1],[-PI/2,0,0],0);
  part(S,new THREE.PlaneGeometry(400,6.4),toon(0x2E2B40),[0,0.01,0.6],[1,1,1],[-PI/2,0,0],0);
  for(let i=-40;i<40;i++)part(S,new THREE.PlaneGeometry(1.6,0.14),basic(0xFFD23F),[i*3.2,0.02,0.6],[1,1,1],[-PI/2,0,0],0);
  part(S,new THREE.BoxGeometry(400,0.18,3.2),toon(0xE7A9C0),[0,0.09,-4.2],[1,1,1],[0,0,0],0);part(S,new THREE.BoxGeometry(400,0.18,2.6),toon(0xE7A9C0),[0,0.09,5.1],[1,1,1],[0,0,0],0);
  const pal=[0xFF8FB1,0x7FE0D6,0xFFD27F,0xB59CFF,0xFFB38A,0x8FD0FF],neon=[0xFF3DA6,0x3FF0FF,0xFFE14D,0x9DFF6B];o.neons=[];
  let x=-120;let i=0;while(x<120){const w=4+hash(i*3.3)*2.6,h=4.5+hash(i*7.7)*11,d=4;const tx=winTex(i);tx.repeat.set(Math.round(w/2.2),Math.round(h/3.2));
    part(S,new THREE.BoxGeometry(w,h,d),tmat(pal[i%6],tx),[x+w/2,h/2,-8.2-hash(i*5.1)*2.5],[1,1,1],[0,0,0],0.02);
    const nm=basic(neon[i%4]);o.neons.push(nm);part(S,new THREE.BoxGeometry(w+0.1,0.16,0.16),nm,[x+w/2,h-0.4,-6.15-hash(i*5.1)*2.5],[1,1,1],[0,0,0],0);
    if(hash(i*9.1)<0.5)part(S,new THREE.BoxGeometry(0.16,h*0.6,0.16),nm,[x+0.3,h*0.45,-6.15-hash(i*5.1)*2.5],[1,1,1],[0,0,0],0);
    x+=w+0.5;i++}
  for(let k=-20;k<20;k++){palm(S,k*7+1.5,-3.6,1.15,0.12+0.08*hash(k),hash(k*3)*6);palm(S,k*9+4,6.0,1.1,0.18,hash(k*5)*6)}
  for(let k=-20;k<20;k++){const lp=new THREE.Group();lp.position.set(k*7+5,0,-3.0);S.add(lp);part(lp,cap(0.05,3.2),toon(0x2A2A35),[0,1.7,0]);part(lp,new THREE.BoxGeometry(0.7,0.08,0.1),toon(0x2A2A35),[0.3,3.3,0]);part(lp,SPH,basic(0xFFF2B0),[0.6,3.22,0],[0.13,0.07,0.1],[0,0,0],0)}
  const car=makeCar(0xFF3D7F);S.add(car.c);car.c.position.set(4,0,1.6);o.car=car;
  const cop=makeCar(0xF2F2F2);S.add(cop.c);cop.c.position.set(-30,0,-0.6);o.cop=cop;cop.c.visible=false;part(cop.c,new THREE.BoxGeometry(2.0,0.08,1.74),toon(0x1B1B26),[0,0.62,0],[1,1,1],[0,0,0],0);o.copR=basic(0xFF2A2A);o.copB=basic(0x2A6BFF);part(cop.c,new THREE.BoxGeometry(0.25,0.14,0.5),o.copR,[-0.2,1.12,0.3],[1,1,1],[0,0,0],0.006);part(cop.c,new THREE.BoxGeometry(0.25,0.14,0.5),o.copB,[-0.2,1.12,-0.3],[1,1,1],[0,0,0],0.006);
  // ATM
  const atm=new THREE.Group();atm.position.set(10,0.18,-4.6);S.add(atm);o.atm=atm;part(atm,new THREE.BoxGeometry(1.1,2.2,0.8),toon(0x3B4A66),[0,1.1,0],[1,1,1],[0,0,0],0.02);part(atm,new THREE.BoxGeometry(1.14,0.35,0.84),basic(0x3FF0FF),[0,2.05,0],[1,1,1],[0,0,0],0);
  const st=canvasTex(256,192);o.atmScr=st;part(atm,new THREE.PlaneGeometry(0.75,0.56),new THREE.MeshBasicMaterial({map:st.tx}),[0,1.45,0.41],[1,1,1],[-0.15,0,0],0);part(atm,new THREE.BoxGeometry(0.6,0.12,0.25),toon(0x222230),[0,0.95,0.45],[1,1,1],[0,0,0],0.008);
  // bank front (alarm)
  const bank=new THREE.Group();bank.position.set(-14,0.18,-6.0);S.add(bank);o.bank=bank;part(bank,new THREE.BoxGeometry(7,5,1.2),toon(0xF4EBD9),[0,2.5,0],[1,1,1],[0,0,0],0.02);for(let k=-2;k<=2;k++)part(bank,cap(0.22,3.2),toon(0xFFFFFF),[k*1.4,2.0,0.8],[1,1,1],[0,0,0],0.01);part(bank,new THREE.BoxGeometry(7.4,0.6,1.8),toon(0xE6D7B8),[0,4.6,0.4],[1,1,1],[0,0,0],0.015);
  o.alarm=basic(0xFF2A2A);part(bank,SPH,o.alarm,[0,5.25,0.5],[0.3,0.25,0.3],[0,0,0],0.01);part(bank,new THREE.BoxGeometry(1.4,2.2,0.2),toon(0x5A3B24),[0,1.1,0.7],[1,1,1],[0,0,0],0.01);
  // planter bush (hide spot)
  const bush=new THREE.Group();bush.position.set(-4,0.18,-3.3);S.add(bush);o.bush=bush;part(bush,new THREE.BoxGeometry(2.6,0.7,1.0),toon(0xC9A27A),[0,0.35,0],[1,1,1],[0,0,0],0.015);for(let k=0;k<6;k++)part(bush,SPH,toon(k%2?0x2E9E5B:0x3DBA6A),[-1.0+k*0.4,0.95+0.1*hash(k),0.05*hash(k*4)],[0.42,0.4,0.42],[0,0,0],0.012);
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,300);
  o.mood=m=>{o.S.children.filter(c=>c.isLight).forEach(l=>{l.intensity=(l.isHemisphereLight?1.5:2.2)*(m==='night'?0.42:m==='sunset'?0.85:1)});setBG(m)};
  o.shot=(p,l)=>{o.cam.position.set(...p);o.cam.lookAt(...l);r.render(o.S,o.cam)};return o};
BUILD.room=()=>{const S=new THREE.Scene();lights(S);const o={S};
  part(S,new THREE.PlaneGeometry(30,30),toon(0xB07A4A),[0,0,0],[1,1,1],[-PI/2,0,0],0);part(S,new THREE.PlaneGeometry(14,0.12),toon(0x8C5E36),[0,0.005,-1],[1,1,1],[-PI/2,0,0],0);
  part(S,new THREE.PlaneGeometry(30,10),toon(0x5B3E8C),[0,5,-3.4],[1,1,1],[0,0,0],0);part(S,new THREE.PlaneGeometry(14,10),toon(0x4A3275),[-6,5,3],[1,1,1],[0,PI/2,0],0);part(S,new THREE.PlaneGeometry(14,10),toon(0x4A3275),[7.5,5,3],[1,1,1],[0,-PI/2,0],0);
  // rug
  part(S,new THREE.CircleGeometry(2.6,40),toon(0x2FB5A8),[0,0.01,0.2],[1.4,1,1],[-PI/2,0,0],0);
  // window w/ night skyline
  const wt=canvasTex(512,320);{const c=wt.ctx;const gr=c.createLinearGradient(0,0,0,320);gr.addColorStop(0,'#0B0D2E');gr.addColorStop(1,'#5A2A7A');c.fillStyle=gr;c.fillRect(0,0,512,320);for(let i=0;i<14;i++){const w=30+hash(i)*30,h=80+hash(i*3)*170,x=i*38-10;c.fillStyle=['#2A2350','#33285E','#1E1A40'][i%3];c.fillRect(x,320-h,w,h);for(let y=320-h+10;y<310;y+=18)for(let xx=x+5;xx<x+w-8;xx+=12)if(hash(xx*y)<0.4){c.fillStyle=hash(xx+y)<0.5?'#FFE680':'#7FF6FF';c.fillRect(xx,y,6,8)}}c.fillStyle='#FF3DA6';c.fillRect(0,300,512,3)}
  part(S,new THREE.PlaneGeometry(3.2,2.0),new THREE.MeshBasicMaterial({map:wt.tx}),[3.8,3.4,-3.38],[1,1,1],[0,0,0],0);part(S,new THREE.BoxGeometry(3.4,0.12,0.15),toon(0xEDE2CC),[3.8,2.35,-3.3],[1,1,1],[0,0,0],0.01);part(S,new THREE.BoxGeometry(0.1,2.1,0.12),toon(0xEDE2CC),[3.8,3.4,-3.32],[1,1,1],[0,0,0],0);
  // TV + stand
  part(S,new THREE.BoxGeometry(4.2,0.7,0.9),toon(0x2B2235),[0,0.35,-2.7],[1,1,1],[0,0,0],0.02);
  part(S,new THREE.BoxGeometry(3.6,2.1,0.14),toon(0x15151C),[0,2.15,-2.95],[1,1,1],[0,0,0],0.02);
  const tv=canvasTex(640,360);o.tv=tv;part(S,new THREE.PlaneGeometry(3.4,1.9),new THREE.MeshBasicMaterial({map:tv.tx}),[0,2.15,-2.87],[1,1,1],[0,0,0],0);
  // consoles (generic boxes)
  const c1=new THREE.Group();c1.position.set(-1.45,0.7,-2.65);S.add(c1);part(c1,new THREE.BoxGeometry(0.32,0.95,0.7),toon(0xF4F4F8),[0,0.47,0],[1,1,1],[0,0,0],0.012);part(c1,new THREE.BoxGeometry(0.12,0.9,0.72),toon(0x22222C),[0,0.47,0],[1,1,1],[0,0,0],0);o.c1=c1;
  const c2=new THREE.Group();c2.position.set(1.45,0.7,-2.65);S.add(c2);part(c2,new THREE.BoxGeometry(0.5,0.9,0.5),toon(0x1E1F24),[0,0.45,0],[1,1,1],[0,0,0],0.012);part(c2,new THREE.CylinderGeometry(0.17,0.17,0.02,20),basic(0x6BFF6B),[0,0.91,0],[1,1,1],[0,0,0],0);o.c2=c2;
  // couch
  const couch=new THREE.Group();couch.position.set(0,0,1.6);S.add(couch);const CM=toon(0xE0574F),CM2=toon(0xC4463F);
  part(couch,new THREE.BoxGeometry(3.4,0.45,1.2),CM2,[0,0.22,0],[1,1,1],[0,0,0],0.015);part(couch,new THREE.BoxGeometry(3.2,0.2,1.1),CM,[0,0.52,-0.02],[1,1,1],[0,0,0],0.015);part(couch,new THREE.BoxGeometry(3.4,1.0,0.32),CM,[0,0.85,0.5],[1,1,1],[0,0,0],0.015);for(const s of [-1,1])part(couch,new THREE.BoxGeometry(0.32,0.75,1.2),CM2,[s*1.7,0.55,0],[1,1,1],[0,0,0],0.015);
  // coffee table + snacks
  const table=new THREE.Group();table.position.set(0,0,-0.3);S.add(table);part(table,new THREE.BoxGeometry(2.0,0.12,0.9),toon(0x8C5E36),[0,0.55,0],[1,1,1],[0,0,0],0.012);for(const [x,z] of [[-0.85,-0.35],[0.85,-0.35],[-0.85,0.35],[0.85,0.35]])part(table,cap(0.05,0.4),toon(0x6B4426),[x,0.27,z]);
  const tbowl=new THREE.Group();tbowl.position.set(-0.4,0.62,0);table.add(tbowl);part(tbowl,new THREE.SphereGeometry(1,24,12,0,PI*2,PI/2,PI/2),toon(0xFF6A2B),[0,0.12,0],[0.28,0.18,0.28],[0,0,0],0.01);for(let i=0;i<9;i++)part(tbowl,SPH,toon(0xFFD966),[Math.cos(i*2.4)*0.16*(i%3)/2,0.12+0.03*(i%2),Math.sin(i*2.4)*0.16*(i%3)/2],[0.07,0.03,0.07],[i,i*2,0],0.005);o.tbowl=tbowl;
  const can=part(table,new THREE.CylinderGeometry(0.07,0.07,0.24,16),toon(0x3FF0FF),[0.5,0.73,0.1],[1,1,1],[0,0,0],0.006);
  // wall clock
  const ck=canvasTex(256,256);o.clock=ck;part(S,new THREE.CircleGeometry(0.55,40),new THREE.MeshBasicMaterial({map:ck.tx}),[-3.6,3.9,-3.38],[1,1,1],[0,0,0],0);part(S,new THREE.TorusGeometry(0.56,0.05,10,40),toon(0x1B1B26),[-3.6,3.9,-3.36],[1,1,1],[0,0,0],0);
  // lamp
  const lamp=new THREE.Group();lamp.position.set(-2.6,0,1.4);S.add(lamp);part(lamp,cap(0.04,1.6),toon(0x2A2A35),[0,0.9,0]);part(lamp,new THREE.CylinderGeometry(0.25,0.4,0.45,20,1,true),basic(0xFFE7A0,{side:THREE.DoubleSide}),[0,1.9,0],[1,1,1],[0,0,0],0);
  // PC corner (desk at x=5.4)
  const pc=new THREE.Group();pc.position.set(5.6,0,0.6);pc.rotation.y=-PI/2;S.add(pc);o.pc=pc;part(pc,new THREE.BoxGeometry(2.4,0.1,1.0),toon(0xEDE2CC),[0,1.0,0],[1,1,1],[0,0,0],0.012);for(const x of [-1.1,1.1])part(pc,new THREE.BoxGeometry(0.08,1.0,0.9),toon(0xD7CBB3),[x,0.5,0],[1,1,1],[0,0,0],0.008);
  part(pc,new THREE.BoxGeometry(1.3,0.8,0.06),toon(0x15151C),[-0.2,1.6,-0.3],[1,1,1],[0,0,0],0.012);const pcs=canvasTex(320,200);o.pcs=pcs;part(pc,new THREE.PlaneGeometry(1.2,0.7),new THREE.MeshBasicMaterial({map:pcs.tx}),[-0.2,1.6,-0.265],[1,1,1],[0,0,0],0);part(pc,new THREE.BoxGeometry(0.1,0.3,0.1),toon(0x15151C),[-0.2,1.15,-0.3]);
  part(pc,new THREE.BoxGeometry(0.45,0.95,0.9),toon(0x22222C),[0.85,1.53,-0.05],[1,1,1],[0,0,0],0.012);part(pc,new THREE.BoxGeometry(0.02,0.7,0.6),basic(0xFF3DA6),[0.62,1.53,-0.05],[1,1,1],[0,0,0],0);
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);o.shot=(p,l)=>{o.cam.position.set(...p);o.cam.lookAt(...l);setBG('room');r.render(o.S,o.cam)};return o};
// TV drawing helpers
function tvDraw(o,fn){const c=o.tv.ctx;c.save();fn(c,640,360);c.restore();o.tv.tx.needsUpdate=true}
function clockDraw(o,h,m){const c=o.clock.ctx;c.fillStyle='#FFF8E8';c.fillRect(0,0,256,256);c.strokeStyle='#222';c.lineCap='round';for(let i=0;i<12;i++){const a=i/12*PI*2;c.lineWidth=8;c.beginPath();c.moveTo(128+Math.sin(a)*100,128-Math.cos(a)*100);c.lineTo(128+Math.sin(a)*115,128-Math.cos(a)*115);c.stroke()}
  const ha=((h%12)+m/60)/12*PI*2,ma=m/60*PI*2;c.lineWidth=14;c.beginPath();c.moveTo(128,128);c.lineTo(128+Math.sin(ha)*60,128-Math.cos(ha)*60);c.stroke();c.lineWidth=9;c.strokeStyle='#E23B3B';c.beginPath();c.moveTo(128,128);c.lineTo(128+Math.sin(ma)*95,128-Math.cos(ma)*95);c.stroke();o.clock.tx.needsUpdate=true}
BUILD.keys=()=>{const S=new THREE.Scene();lights(S);const o={S};
  part(S,new THREE.PlaneGeometry(600,400),toon(0x2EC4C9),[0,0,0],[1,1,1],[-PI/2,0,0],0);
  for(let i=0;i<80;i++)part(S,new THREE.PlaneGeometry(1.2+hash(i)*2,0.06),basic(0xBFF6F6),[(hash(i*3)-0.5)*90,0.02,(hash(i*7)-0.5)*60],[1,1,1],[-PI/2,0,0],0);
  const isl=[[-28,-14,6],[-12,-22,4],[6,-16,5],[22,-26,7],[38,-15,4],[-40,-30,8],[14,12,4],[-20,10,3]];o.isl=isl;
  for(const [x,z,s] of isl){part(S,SPH,toon(0xF2D59A),[x,-0.2,z],[s,0.6,s*0.7],[0,0,0],0.02);part(S,SPH,toon(0x4FB860),[x,0.05,z],[s*0.75,0.45,s*0.5],[0,0,0],0.015);for(let k=0;k<3;k++)palm(S,x+(k-1)*s*0.4,z+0.2*k,1.0+0.2*hash(k+x),0.2,k)}
  // bridge along x at z=0
  const BR=toon(0xECE6DA);part(S,new THREE.BoxGeometry(400,0.35,3.0),BR,[0,1.6,0],[1,1,1],[0,0,0],0.02);part(S,new THREE.BoxGeometry(400,0.05,2.6),toon(0x4A4660),[0,1.79,0],[1,1,1],[0,0,0],0);
  for(let i=-60;i<60;i++){part(S,new THREE.BoxGeometry(0.6,1.6,2.0),BR,[i*6,0.8,0],[1,1,1],[0,0,0],0.012);part(S,new THREE.PlaneGeometry(1.4,0.08),basic(0xFFD23F),[i*3,1.82,0],[1,1,1],[-PI/2,0,0],0)}
  for(const z of [-1.45,1.45])part(S,new THREE.BoxGeometry(400,0.3,0.1),BR,[0,2.0,z],[1,1,1],[0,0,0],0.008);
  const car=makeCar(0xFF3D7F);car.c.position.set(0,1.78,0.6);S.add(car.c);o.car=car;
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,400);o.shot=(p,l)=>{o.cam.position.set(...p);o.cam.lookAt(...l);r.render(o.S,o.cam)};return o};
BUILD.swamp=()=>{const S=new THREE.Scene();lights(S);S.fog=new THREE.Fog(0x7FA07A,14,46);const o={S};
  part(S,new THREE.PlaneGeometry(200,200),toon(0x4E7A3E),[0,0,0],[1,1,1],[-PI/2,0,0],0);
  for(let i=0;i<40;i++)part(S,new THREE.CircleGeometry(0.35+hash(i)*0.3,14),toon(0x7DB04E),[(hash(i*3)-0.5)*24,0.02,(hash(i*7)-0.5)*14],[1,1,1],[-PI/2,0,0],0);
  for(let i=0;i<120;i++){const x=(hash(i*2.1)-0.5)*50,z=-3-hash(i*4.3)*20;if(Math.abs(x)<2&&z>-5)continue;part(S,cap(0.03,1.0+hash(i)*1.2),toon(i%2?0x8FB04A:0x6E9A3C),[x,0.6,z],[1,1,1],[hash(i)*0.3-0.15,0,hash(i*5)*0.3-0.15],0)}
  for(let i=0;i<14;i++){const x=(hash(i*8.1)-0.5)*44,z=-8-hash(i*6.6)*16;const tr=new THREE.Group();tr.position.set(x,0,z);S.add(tr);part(tr,cap(0.25,4),toon(0x5A4632),[0,2.2,0]);for(let k=0;k<4;k++)part(tr,SPH,toon(k%2?0x3F6B34:0x4F7F3C),[Math.cos(k*1.7)*1.1,4.5+0.4*hash(k+i),Math.sin(k*1.7)*0.8],[1.4,0.9,1.2],[0,0,0],0.015);for(const s of [-1,1])part(tr,cap(0.06,1.2),toon(0x5A4632),[s*0.5,0.4,0],[1,1,1],[0,0,s*0.6])}
  // dock
  const dock=new THREE.Group();S.add(dock);for(let k=0;k<9;k++)part(dock,new THREE.BoxGeometry(2.4,0.12,0.38),toon(k%2?0x9A6A3B:0x8A5A2B),[0,0.45,3.2-k*0.42],[1,1,1],[0,0,0],0.01);for(const [x,z] of [[-1.1,3.3],[1.1,3.3],[-1.1,-0.2],[1.1,-0.2]])part(dock,cap(0.09,0.9),toon(0x6B4426),[x,0.4,z]);
  // gators
  o.gators=[];const GP=[[-2.8,0.6,0.4],[3.0,0.2,-0.5],[-4.6,-2.5,0.9],[4.8,-2.0,-1.0],[-1.6,-4.0,0.2],[1.8,-3.6,-0.3],[-6.4,-0.6,1.3],[6.6,-0.4,-1.4]];
  const GM1=toon(0x2C4A1E),GM2=toon(0x6E8F3A);
  for(const [x,z,ry] of GP){const a=new THREE.Group();a.position.set(x,-0.6,z);a.rotation.y=ry+(x<0?0:PI);S.add(a);part(a,SPH,GM1,[0,0,0],[1.1,0.28,0.42],[0,0,0],0.012);part(a,new THREE.BoxGeometry(0.9,0.22,0.42),GM1,[1.4,0.02,0],[1,1,1],[0,0,0],0.012);part(a,new THREE.BoxGeometry(0.7,0.12,0.3),GM2,[2.1,-0.02,0],[1,1,1],[0,0,0],0.01);
    for(const s of [-1,1]){part(a,SPH,toon(0xF4F0C8),[1.3,0.2,s*0.14],[0.09,0.09,0.09],[0,0,0],0.006);part(a,SPH,basic(0x111111),[1.36,0.21,s*0.14],[0.045,0.06,0.045],[0,0,0],0)}
    for(let k=0;k<5;k++)part(a,new THREE.ConeGeometry(0.06,0.14,4),GM2,[0.8-k*0.35,0.26,0],[1,1,1],[0,0,0],0.004);part(a,new THREE.ConeGeometry(0.28,1.4,10),GM1,[-1.6,0,0],[1,0.5,1],[0,0,PI/2],0.01);for(let k=0;k<6;k++)part(a,new THREE.BoxGeometry(0.02,0.04,0.02),basic(0xffffff),[2.0+k*0.06-0.15,-0.06,0.15],[1,1,1],[0,0,0],0);
    o.gators.push(a)}
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);o.shot=(p,l)=>{o.cam.position.set(...p);o.cam.lookAt(...l);setBG('swamp');r.render(o.S,o.cam)};return o};
BUILD.gym=()=>{const S=new THREE.Scene();lights(S);const o={S};
  part(S,new THREE.PlaneGeometry(30,30),toon(0x34344A),[0,0,0],[1,1,1],[-PI/2,0,0],0);part(S,new THREE.PlaneGeometry(6,4),toon(0x23233A),[0,0.01,0],[1,1,1],[-PI/2,0,0],0);
  part(S,new THREE.PlaneGeometry(30,10),toon(0x2F5DA8),[0,5,-3.4],[1,1,1],[0,0,0],0);part(S,new THREE.PlaneGeometry(8,2.6),toon(0xBFE7FF),[0,2.6,-3.38],[1,1,1],[0,0,0],0);part(S,new THREE.BoxGeometry(30,0.3,0.1),basic(0xFFE14D),[0,4.6,-3.35],[1,1,1],[0,0,0],0);
  const rack=new THREE.Group();rack.position.set(-3.8,0,-2.6);S.add(rack);part(rack,new THREE.BoxGeometry(2.4,0.1,0.6),toon(0x222230),[0,0.8,0],[1,1,1],[0,0,0],0.01);part(rack,new THREE.BoxGeometry(2.4,0.1,0.6),toon(0x222230),[0,0.4,0],[1,1,1],[0,0,0],0.01);for(let k=0;k<5;k++){for(const y of [0.5,0.9]){part(rack,cap(0.02,0.3),toon(0xBFC3CC),[-0.9+k*0.45,y+0.02,0],[1,1,1],[PI/2,0,0],0);for(const z of [-0.18,0.18])part(rack,new THREE.CylinderGeometry(0.08,0.08,0.08,14),toon(0x2A2A35),[-0.9+k*0.45,y+0.02,z],[1,1,1],[PI/2,0,0],0.006)}}
  for(const s of [-1,1])part(rack,new THREE.BoxGeometry(0.08,1.0,0.6),toon(0x222230),[s*1.2,0.5,0],[1,1,1],[0,0,0],0.008);
  const bench=new THREE.Group();bench.position.set(3.4,0,-1.2);S.add(bench);part(bench,new THREE.BoxGeometry(2.0,0.18,0.5),toon(0xE0574F),[0,0.6,0],[1,1,1],[0,0,0],0.012);for(const x of [-0.8,0.8])part(bench,new THREE.BoxGeometry(0.1,0.6,0.45),toon(0x222230),[x,0.3,0]);
  // table w/ junk food (separate spot x=0)
  const tb=new THREE.Group();tb.position.set(0,0,-0.4);S.add(tb);o.foodTable=tb;tb.visible=false;part(tb,new THREE.BoxGeometry(2.6,0.12,1.0),toon(0xF4EBD9),[0,1.0,0],[1,1,1],[0,0,0],0.012);for(const [x,z] of [[-1.1,-0.4],[1.1,-0.4],[-1.1,0.4],[1.1,0.4]])part(tb,cap(0.05,0.85),toon(0x888899),[x,0.5,z]);
  o.food=[];const mkB=(x)=>{const b=new THREE.Group();b.position.set(x,1.06,0.1);tb.add(b);part(b,SPH,toon(0xE8A33D),[0,0.16,0],[0.24,0.1,0.24],[0,0,0],0.008);part(b,new THREE.CylinderGeometry(0.25,0.25,0.06,20),toon(0x6B3A22),[0,0.07,0],[1,1,1],[0,0,0],0.006);part(b,new THREE.CylinderGeometry(0.27,0.27,0.02,20),toon(0x5BC26A),[0,0.11,0],[1,1,1],[0,0,0],0);part(b,new THREE.CylinderGeometry(0.24,0.24,0.06,20),toon(0xE8A33D),[0,0.02,0],[1,1,1],[0,0,0],0.006);return b};
  const mkF=(x)=>{const f=new THREE.Group();f.position.set(x,1.06,0.1);tb.add(f);part(f,new THREE.BoxGeometry(0.26,0.26,0.16),toon(0xE23B3B),[0,0.13,0],[1,1,1],[0,0,0],0.008);for(let k=0;k<6;k++)part(f,new THREE.BoxGeometry(0.03,0.2,0.03),toon(0xFFD23F),[-0.09+k*0.036,0.3,0],[1,1,1],[0,0,(k-2.5)*0.08],0);return f};
  const mkD=(x)=>{const d=new THREE.Group();d.position.set(x,1.06,0.1);tb.add(d);part(d,new THREE.TorusGeometry(0.13,0.06,10,20),toon(0xFF8FB1),[0,0.06,0],[1,1,1],[PI/2,0,0],0.006);return d};
  [mkB(-0.9),mkF(-0.45),mkD(0.0),mkB(0.45),mkF(0.9),mkD(-0.7),mkB(0.7)].forEach((f,i)=>{if(i>4){f.position.z=-0.25}o.food.push(f)});
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);o.shot=(p,l)=>{o.cam.position.set(...p);o.cam.lookAt(...l);setBG('room');r.render(o.S,o.cam)};return o};
BUILD.stage=()=>{const S=new THREE.Scene();lights(S);const o={S};o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,100);
  o.shot=(p,l)=>{o.cam.position.set(...p);o.cam.lookAt(...l);r.setClearColor(0,0);r.render(o.S,o.cam)};return o};
// generic stage props
function stageProp(name,build){const s=scene('stage');if(!s[name]){const gr=new THREE.Group();gr.visible=false;s.S.add(gr);build(gr);s[name]=gr}return s[name]}
function stageOnly(...names){const s=scene('stage');for(const k of ['gift','box','heli','atm2','smoothie'])if(s[k])s[k].visible=names.includes(k)}

// ---------- 2D icon helpers ----------
function moneyStr(v){return '$'+Math.round(v).toLocaleString('en-US')}
function eyeIcon(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.moveTo(-60,0);g.quadraticCurveTo(0,-55,60,0);g.quadraticCurveTo(0,55,-60,0);g.fill();g.stroke();g.fillStyle='#2E86DE';g.beginPath();g.arc(0,0,24,0,7);g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(0,0,10,0,7);g.fill();g.restore()}
function phoneIcon(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#22222C';g.strokeStyle='#111';g.lineWidth=8;rr(-34,-60,68,120,14);g.fill();g.stroke();g.fillStyle='#3FF0FF';rr(-26,-48,52,86,6);g.fill();g.fillStyle='#fff';g.font='900 26px Inter';g.textAlign='center';g.fillText('911?',0,0);g.restore()}
function camIcon(x,y,s,t=0){g.save();g.translate(x,y);g.scale(s,s);g.rotate(0.2*Math.sin(t*2));g.fillStyle='#E9EBF0';g.strokeStyle='#111';g.lineWidth=8;rr(-60,-28,100,56,10);g.fill();g.stroke();g.fillStyle='#22222C';g.beginPath();g.arc(-60,0,20,0,7);g.fill();g.stroke();g.fillStyle=(t*2%1)<0.5?'#FF2A2A':'#661111';g.beginPath();g.arc(28,-12,8,0,7);g.fill();g.fillStyle='#9AA0AA';g.fillRect(40,-8,30,16);g.restore()}
function lockIcon(x,y,s,open=0){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=26;g.beginPath();g.arc(0,-40-open*30,40,PI,0);g.lineTo(40,-40-open*30+(open?0:30));g.stroke();g.strokeStyle='#C9CDD6';g.lineWidth=14;g.stroke();g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=8;rr(-60,-30,120,90,14);g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(0,8,12,0,7);g.fill();g.fillRect(-5,10,10,26);g.restore()}
function check(x,y,s,c='#5BE37A'){g.save();g.translate(x,y);g.scale(s,s);g.lineCap='round';g.lineJoin='round';g.strokeStyle='#111';g.lineWidth=30;g.beginPath();g.moveTo(-30,0);g.lineTo(-8,24);g.lineTo(34,-26);g.stroke();g.strokeStyle=c;g.lineWidth=16;g.stroke();g.restore()}
function cross(x,y,s,c='#FF4A4A'){g.save();g.translate(x,y);g.scale(s,s);g.lineCap='round';for(const [w,col] of [[30,'#111'],[16,c]]){g.strokeStyle=col;g.lineWidth=w;g.beginPath();g.moveTo(-28,-28);g.lineTo(28,28);g.moveTo(28,-28);g.lineTo(-28,28);g.stroke()}g.restore()}
function heart(x,y,s,c='#FF3D7F'){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle=c;g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.moveTo(0,30);g.bezierCurveTo(-70,-20,-35,-70,0,-35);g.bezierCurveTo(35,-70,70,-20,0,30);g.fill();g.stroke();g.restore()}
function silhouette(x,y,s,c){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle=c;g.beginPath();g.arc(0,-60,48,0,7);g.fill();g.beginPath();g.moveTo(-95,90);g.quadraticCurveTo(-90,-5,0,-5);g.quadraticCurveTo(90,-5,95,90);g.closePath();g.fill();g.restore()}
function clockFace(x,y,R,h,m,glow=0){g.save();g.translate(x,y);g.fillStyle='#FFF8E8';g.strokeStyle='#111';g.lineWidth=12;g.beginPath();g.arc(0,0,R,0,7);g.fill();g.stroke();if(glow){g.strokeStyle=`rgba(255,61,166,${glow})`;g.lineWidth=18;g.beginPath();g.arc(0,0,R+16,0,7);g.stroke()}
  g.strokeStyle='#222';g.lineCap='round';for(let i=0;i<12;i++){const a=i/12*PI*2;g.lineWidth=8;g.beginPath();g.moveTo(Math.sin(a)*R*0.78,-Math.cos(a)*R*0.78);g.lineTo(Math.sin(a)*R*0.9,-Math.cos(a)*R*0.9);g.stroke()}
  const ha=((h%12)+m/60)/12*PI*2,ma=m/60*PI*2;g.lineWidth=R*0.09;g.beginPath();g.moveTo(0,0);g.lineTo(Math.sin(ha)*R*0.48,-Math.cos(ha)*R*0.48);g.stroke();g.strokeStyle='#E23B3B';g.lineWidth=R*0.055;g.beginPath();g.moveTo(0,0);g.lineTo(Math.sin(ma)*R*0.74,-Math.cos(ma)*R*0.74);g.stroke();g.fillStyle='#111';g.beginPath();g.arc(0,0,R*0.06,0,7);g.fill();g.restore()}
function bar(x,y,w,h,f,col,label){g.save();g.fillStyle='rgba(0,0,0,0.45)';rr(x,y,w,h,h/2);g.fill();g.strokeStyle='#111';g.lineWidth=6;g.stroke();if(f>0){g.fillStyle=col;rr(x+5,y+5,Math.max(h-10,(w-10)*clamp(f)),h-10,(h-10)/2);g.fill()}g.restore();if(label)txt(label,x+w/2,y+h/2+2,h*0.55,{sw:h*0.12})}
// stylised original peninsula ("Leonida") outline - generic shape
function leonida(x,y,s,a=1){g.save();g.globalAlpha=a;g.translate(x,y);g.scale(s,s);const P=new Path2D('M-260,-200 L120,-210 C150,-205 170,-190 185,-170 C210,-120 230,-40 240,30 C250,110 225,170 190,205 C165,230 135,226 118,200 C80,140 60,80 20,40 C-20,0 -60,-60 -110,-95 C-160,-130 -230,-140 -260,-150 Z');
  g.fillStyle='#2E8F9A';g.fillRect(-800,-450,1600,900);g.fillStyle='#5DCB72';g.strokeStyle='#111';g.lineWidth=7;g.fill(P);g.stroke(P);g.fillStyle='#3E9F5A';g.beginPath();g.ellipse(120,150,55,40,0.5,0,7);g.fill();
  g.fillStyle='#F2D59A';for(let i=0;i<9;i++){g.beginPath();g.ellipse(150-i*24,232+i*9,10-i*0.5,6,0,0,7);g.fill();g.stroke()}g.restore()}
