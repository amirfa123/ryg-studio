// YELLOW ROUND GUY — heavyset yellow man, mustache, round glasses, teal tracksuit (reusable)
import * as THREE from 'three';import {part,SPH,cap,toon,basic} from './ryg.js';
const lerp1=(a,b,t)=>a+(b-a)*t;
export function makeYRG(){
  const root=new THREE.Group(),g=new THREE.Group();root.add(g);
  const Y=toon(0xFFCC2E),N=toon(0xF5A021),T=toon(0x14939A),T2=toon(0x0F7F86),W=toon(0xffffff),O=toon(0xFF6A2B),H=toon(0x3A2A20),wh=basic(0xffffff),dk=basic(0x140c07),mo=basic(0x7A2E28);
  const legs={};for(const [s,k] of [[1,'L'],[-1,'R']]){const hip=new THREE.Group();hip.position.set(s*0.2,0.72,0);g.add(hip);
    part(hip,cap(0.155,0.14),T,[0,-0.16,0]);part(hip,cap(0.022,0.14),W,[s*0.145,-0.16,0],[1,1,1],[0,0,0],0);
    const kn=new THREE.Group();kn.position.set(0,-0.3,0);hip.add(kn);part(kn,SPH,T,[0,0,0],[0.152,0.152,0.152],[0,0,0],0.012);
    part(kn,cap(0.148,0.08),T,[0,-0.1,0]);part(kn,cap(0.022,0.08),W,[s*0.14,-0.1,0],[1,1,1],[0,0,0],0);part(kn,SPH,T2,[0,-0.22,0],[0.16,0.06,0.16],[0,0,0],0.01);
    const ft=new THREE.Group();ft.position.set(0,-0.3,0);kn.add(ft);part(ft,SPH,W,[s*0.01,-0.075,0.07],[0.165,0.05,0.24],[0,0,0],0.012);part(ft,SPH,O,[s*0.01,-0.02,0.06],[0.155,0.085,0.225]);
    legs[k]={hip,kn,ft}}
  const up=new THREE.Group();g.add(up);
  const belly=part(up,SPH,T,[0,1.08,0.03],[0.53,0.4,0.48],[0,0,0],0.016);part(up,SPH,T,[0,1.34,0],[0.46,0.27,0.37],[0,0,0],0.016);part(up,SPH,Y,[0,0.9,0.03],[0.51,0.36,0.47],[0,0,0],0.016);part(up,SPH,dk,[0,0.78,0.476],[0.022,0.03,0.012],[0,0,0],0);part(up,SPH,T,[0,0.6,0.02],[0.46,0.17,0.41],[0,0,0],0.014);
  part(up,SPH,T2,[0,0.95,0.03],[0.512,0.045,0.492],[0,0,0],0);part(up,cap(0.013,0.34),W,[0,1.2,0.49],[1,1,1],[0.16,0,0],0);
  part(up,new THREE.TorusGeometry(0.17,0.06,12,28),T,[0,1.56,0],[1,1,1],[Math.PI/2,0,0],0.012);
  const arms={};const L1=0.27,L2=0.27,L2E=0.4;for(const [s,k] of [[1,'L'],[-1,'R']]){const a=new THREE.Group();a.position.set(s*0.4,1.4,0);up.add(a);
    part(a,cap(0.105,0.15),T,[0,-0.125,0]);part(a,cap(0.02,0.15),W,[s*0.1,-0.125,0],[1,1,1],[0,0,0],0);part(a,SPH,T,[0,-L1,0],[0.108,0.108,0.108],[0,0,0],0.012);
    const el=new THREE.Group();el.position.set(0,-L1,0);a.add(el);const slv=[part(el,cap(0.1,0.14),T,[0,-0.125,0]),part(el,cap(0.02,0.14),W,[s*0.095,-0.125,0],[1,1,1],[0,0,0],0),part(el,SPH,T2,[0,-0.245,0],[0.105,0.045,0.105],[0,0,0],0.01)];
    const bare=new THREE.Group();bare.visible=false;el.add(bare);part(bare,cap(0.072,0.2),Y,[0,-0.15,0],[1,1,1],[0,0,0],0.006);part(bare,SPH,T2,[0,-0.03,0],[0.118,0.06,0.118],[0,0,0],0.01);
    const ah=[];{let q=1;const rn=()=>{q=(q*16807)%2147483647;return q/2147483647};for(let i=0;i<46;i++){const an=rn()*Math.PI*2,yy=-0.07-rn()*0.16,d=new THREE.Vector3(Math.cos(an),0,Math.sin(an));const hg=new THREE.Group();hg.position.set(d.x*0.073,yy,d.z*0.073);bare.add(hg);
      part(hg,cap(0.0035,0.04),dk,[0,0.023,0],[1,1,1],[0,0,0],0);const bp=part(bare,SPH,N,[d.x*0.071,yy,d.z*0.071],[0.012,0.012,0.012],[0,0,0],0);ah.push({hg,d,bp})}}
    const hd=new THREE.Group();hd.position.set(0,-L2,0);el.add(hd);part(hd,cap(0.055,0.05),Y,[0,-0.02,0],[1,1,0.8],[0,0,0],0.009);part(hd,SPH,Y,[0,-0.115,0],[0.092,0.085,0.05],[0,0,0],0.009);
    const fs=[];for(let i=0;i<4;i++){const f=new THREE.Group();f.position.set((i-1.5)*0.044,-0.175,0);f.rotation.z=(i-1.5)*0.1;hd.add(f);part(f,SPH,Y,[0,0.005,0],[0.027,0.027,0.027],[0,0,0],0.007);part(f,cap(0.022,0.045),Y,[0,-0.04,0],[1,1,1],[0,0,0],0.007);
      const f2=new THREE.Group();f2.position.set(0,-0.08,0);f.add(f2);part(f2,cap(0.02,(i==0||i==3)?0.028:0.042),Y,[0,-0.03,0],[1,1,1],[0,0,0],0.007);fs.push([f,f2])}
    const th=new THREE.Group();th.position.set(s*0.085,-0.085,0.01);th.rotation.z=s*0.95;hd.add(th);part(th,cap(0.025,0.055),Y,[0,-0.045,0],[1,1,1],[0,0,0],0.007);
    a.userData={hd,fs,el,s,slv,bare,ah};arms[k]=a}
  const DOWN=new THREE.Vector3(0,-1,0);
  function reach(a,T3,pole){const s=a.userData.s,S=a.position.clone(),d=T3.clone().sub(S);let D=Math.min(d.length(),L1+L2E-0.004);const dir=d.clone().normalize();const x=(L1*L1+D*D-L2E*L2E)/(2*D),hh=Math.sqrt(Math.max(0,L1*L1-x*x));
    const p=new THREE.Vector3(...(pole||[s,-0.1,-0.15]));p.sub(dir.clone().multiplyScalar(p.dot(dir))).normalize();const E=S.clone().add(dir.clone().multiplyScalar(x)).add(p.multiplyScalar(hh));
    a.quaternion.setFromUnitVectors(DOWN,E.clone().sub(S).normalize());const fd=S.clone().add(dir.multiplyScalar(D)).sub(E).normalize().applyQuaternion(a.quaternion.clone().invert());a.userData.el.quaternion.setFromUnitVectors(DOWN,fd)}
  const h=new THREE.Group();h.position.set(0,1.8,0);up.add(h);
  part(h,SPH,Y,[0,0,0],[0.27,0.28,0.27]);part(h,SPH,Y,[0,-0.11,0.02],[0.26,0.2,0.25],[0,0,0],0.014);for(const s of [-1,1])part(h,SPH,Y,[s*0.27,-0.01,0],[0.045,0.065,0.04]);
  part(h,new THREE.SphereGeometry(1,32,16,0,Math.PI*2,0,Math.PI/2),H,[0,0.09,-0.035],[0.285,0.215,0.285],[-0.3,0,0]);for(const s of [-1,1])part(h,SPH,H,[s*0.245,0.08,-0.04],[0.05,0.09,0.12],[0,0,0],0.01);
  const eyes=[];for(const s of [-1,1]){const e=new THREE.Group();e.position.set(s*0.105,0.045,0.232);e.rotation.y=s*0.2;h.add(e);part(e,SPH,wh,[0,0,0],[0.055,0.06,0.02],[0,0,0],0);const pu=part(e,SPH,dk,[0,0,0.016],[0.024,0.024,0.008],[0,0,0],0);
    part(e,new THREE.TorusGeometry(0.082,0.011,10,28),dk,[0,0,0.03],[1,1,1],[0,0,0],0);eyes.push({e,pu})}
  part(h,cap(0.01,0.05),dk,[0,0.05,0.268],[1,1,1],[0,0,Math.PI/2],0);
  const brows=[];for(const s of [-1,1])brows.push(part(h,cap(0.016,0.07),dk,[s*0.105,0.165,0.225],[1,1,1],[0,0,Math.PI/2-s*0.15],0));
  part(h,SPH,N,[0,-0.035,0.275],[0.06,0.052,0.06],[0,0,0],0.01);
  for(const s of [-1,1])part(h,SPH,H,[s*0.068,-0.105,0.255],[0.085,0.036,0.04],[0,0,s*-0.28],0.008);
  const mouths={smile:part(h,new THREE.TorusGeometry(0.055,0.01,8,20,Math.PI),dk,[0,-0.15,0.232],[1,0.5,1],[-0.2,0,Math.PI],0),o:part(h,SPH,mo,[0,-0.185,0.228],[0.04,0.05,0.02],[-0.2,0,0],0.007),
    grin:part(h,new THREE.CircleGeometry(0.075,24,Math.PI,Math.PI),mo,[0,-0.14,0.236],[1,0.9,1],[-0.2,0,0],0)};part(mouths.grin,new THREE.CircleGeometry(0.066,24,Math.PI,Math.PI),wh,[0,-0.003,0.002],[1,0.3,1],[0,0,0],0);
  const tg=new THREE.Group();tg.position.set(0,-0.172,0.236);tg.rotation.x=-0.2;h.add(tg);mouths.teeth=tg;part(tg,new THREE.CircleGeometry(1,24),dk,[0,0,0],[0.082,0.052,1],[0,0,0],0);part(tg,new THREE.CircleGeometry(1,24),mo,[0,0,0.001],[0.074,0.044,1],[0,0,0],0);
  const tU=part(tg,new THREE.PlaneGeometry(0.11,0.03),wh,[0,0.016,0.002],[1,1,1],[0,0,0],0),tL=part(tg,new THREE.PlaneGeometry(0.1,0.028),wh,[0,-0.016,0.002],[1,1,1],[0,0,0],0);for(const x of [-0.028,0,0.028]){part(tU,new THREE.PlaneGeometry(0.004,0.03),dk,[x,0,0.001],[1,1,1],[0,0,0],0);part(tL,new THREE.PlaneGeometry(0.004,0.028),dk,[x,0,0.001],[1,1,1],[0,0,0],0)}

  // ---------- OUTFITS / ACCESSORIES (toggle with api.outfit({...})) ----------
  const acc={};const HG=(n)=>{const g2=new THREE.Group();g2.visible=false;acc[n]=g2;return g2};
  const capCol=toon(0x1B1B1F),capCol2=toon(0xE23B3B),gold=toon(0xFFC531),blk=basic(0x111111),lens=toon(0x1A1A24),wool=toon(0xE24B4B),hard=toon(0xFFB000),chef=toon(0xFFFFFF),purp=toon(0x7C4DFF),grn=toon(0x2ECC71);
  {const c=HG('snapback');h.add(c);const dome=new THREE.SphereGeometry(1,32,16,0,Math.PI*2,0,Math.PI/2);
    c.userData.mats=[part(c,dome,capCol,[0,0.07,-0.01],[0.3,0.25,0.3],[-0.12,0,0],0.012)];
    c.userData.mats.push(part(c,new THREE.CylinderGeometry(1,1,1,28,1,false,0,Math.PI),capCol2,[0,0.075,-0.26],[0.22,0.03,0.19],[0.25,Math.PI/2,0],0.01));
    part(c,SPH,capCol2,[0,0.32,-0.04],[0.035,0.02,0.035],[0,0,0],0.006);part(c,cap(0.008,0.18),capCol2,[0,0.13,0.27],[1,1,1],[0,0,Math.PI/2],0)}
  {const c=HG('snapforward');h.add(c);const dome=new THREE.SphereGeometry(1,32,16,0,Math.PI*2,0,Math.PI/2);
    part(c,dome,capCol,[0,0.07,0.0],[0.3,0.25,0.3],[0.1,0,0],0.012);part(c,new THREE.CylinderGeometry(1,1,1,28,1,false,0,Math.PI),capCol2,[0,0.12,0.26],[0.22,0.03,0.19],[-0.25,-Math.PI/2,0],0.01);part(c,SPH,capCol2,[0,0.32,0.02],[0.035,0.02,0.035],[0,0,0],0.006)}
  {const c=HG('beanie');h.add(c);part(c,new THREE.SphereGeometry(1,32,16,0,Math.PI*2,0,Math.PI/2),wool,[0,0.08,-0.01],[0.3,0.3,0.3],[-0.1,0,0],0.012);part(c,new THREE.TorusGeometry(0.29,0.04,10,32),wool,[0,0.09,-0.01],[1,1,0.95],[Math.PI/2-0.1,0,0],0.01);part(c,SPH,toon(0xffffff),[0,0.4,-0.04],[0.06,0.06,0.06],[0,0,0],0.008)}
  {const c=HG('shades');h.add(c);for(const s2 of [-1,1]){part(c,SPH,lens,[s2*0.105,0.045,0.262],[0.085,0.07,0.02],[0,s2*0.2,0],0.006)}part(c,cap(0.01,0.06),blk,[0,0.06,0.272],[1,1,1],[0,0,Math.PI/2],0)}
  {const c=HG('headphones');h.add(c);part(c,new THREE.TorusGeometry(0.3,0.022,10,32,Math.PI),purp,[0,0.02,-0.02],[1,1.05,1],[0,0,0],0.008);for(const s2 of [-1,1])part(c,SPH,purp,[s2*0.29,-0.01,0],[0.06,0.09,0.08],[0,0,0],0.008)}
  {const c=HG('hardhat');h.add(c);part(c,new THREE.SphereGeometry(1,32,16,0,Math.PI*2,0,Math.PI/2),hard,[0,0.1,-0.01],[0.31,0.26,0.31],[0,0,0],0.012);part(c,new THREE.CylinderGeometry(0.37,0.37,0.025,32),hard,[0,0.1,0.01],[1,1,1],[0,0,0],0.01)}
  {const c=HG('chefhat');h.add(c);part(c,new THREE.CylinderGeometry(0.25,0.27,0.16,28),chef,[0,0.3,-0.02],[1,1,1],[-0.08,0,0],0.01);for(const [x,z] of [[-0.12,0],[0.12,0],[0,-0.08],[0,0.09]])part(c,SPH,chef,[x,0.44,z-0.02],[0.15,0.13,0.15],[0,0,0],0.01)}
  {const c=HG('crown');h.add(c);part(c,new THREE.CylinderGeometry(0.22,0.24,0.12,20,1,true),gold,[0,0.25,-0.02],[1,1,1],[0,0,0],0.008);for(let i=0;i<6;i++){const a2=i/6*Math.PI*2;part(c,new THREE.ConeGeometry(0.035,0.09,6),gold,[Math.sin(a2)*0.22,0.35,Math.cos(a2)*0.22-0.02],[1,1,1],[0,0,0],0.006)}}
  {const c=HG('chain');up.add(c);const surf=(x,y)=>{let z=0;for(const [cy,rx,ry,rz,cz] of [[1.08,0.53,0.4,0.48,0.03],[1.34,0.46,0.27,0.37,0]]){const q=1-(x/rx)**2-((y-cy)/ry)**2;if(q>0)z=Math.max(z,cz+rz*Math.sqrt(q))}return z};
    for(let i=0;i<=28;i++){const t=i/28,a2=(t-0.5)*Math.PI;const x=Math.sin(a2)*0.2,y=1.2+0.33*Math.abs(Math.sin(a2))**0.8;part(c,SPH,gold,[x,y,surf(x,y)+0.012],[0.022,0.022,0.022],[0,0,0],0)}
    const pz=surf(0,1.13)+0.02;part(c,new THREE.CylinderGeometry(0.075,0.075,0.03,20),gold,[0,1.12,pz],[1,1,1],[Math.PI/2-0.35,0,0],0.006);part(c,SPH,toon(0xffffff),[0,1.125,pz+0.017],[0.03,0.03,0.006],[0,0,0],0)}
  {const c=HG('bandana');h.add(c);part(c,new THREE.TorusGeometry(0.285,0.035,10,32),capCol2,[0,0.16,-0.01],[1,1,1],[Math.PI/2-0.15,0,0],0.008);part(c,SPH,capCol2,[0,0.14,-0.3],[0.05,0.035,0.05],[0,0,0],0.006)}
  function outfit(o={}){const want=new Set();for(const k in o)if(o[k])want.add(k);for(const k in acc)acc[k].visible=want.has(k);
    if(o.capColor!==undefined)acc.snapback.userData.mats[0].material=toon(o.capColor);}
  const UP=new THREE.Vector3(0,1,0);
  const api={root,up,arms,legs,head:h,belly,outfit,accessories:acc,
    pose(o={}){const m=o.mouth||'smile';for(const k in mouths)mouths[k].visible=(k===m);if(m==='teeth'){const gp=(o.teethGap||0);tU.position.y=0.014+gp*0.006;tL.position.y=-0.014-gp*0.012}if(m==='o')mouths.o.scale.set(0.04,0.05*(o.mouthSize||1),0.02);
      for(const {e,pu} of eyes){e.children[0].scale.y=o.blink?0.006:0.06;pu.visible=!o.blink;pu.position.x=(o.look||0)*0.018;pu.position.y=(o.lookY||0)*0.018;pu.scale.setScalar(1);pu.scale.set(o.wide?0.018:0.024,o.wide?0.018:0.024,0.008)}
      brows.forEach(b=>b.position.y=0.165+(o.brow||0)+(o.wide?0.035:0));
      const aL=o.armL||[0.28,0],aR=o.armR||[0.28,0];arms.L.userData.el.rotation.set(-(o.bendL||0),0,0);arms.R.userData.el.rotation.set(-(o.bendR||0),0,0);arms.L.rotation.set(aL[1]||0,0,aL[0]);arms.R.rotation.set(aR[1]||0,0,-aR[0]);
      arms.L.userData.hd.rotation.set(0,o.twistL||0,0);arms.R.userData.hd.rotation.set(0,o.twistR||0,0);
      if(o.reachL)reach(arms.L,new THREE.Vector3(...o.reachL),o.poleL);if(o.reachR)reach(arms.R,new THREE.Vector3(...o.reachR),o.poleR);
      h.rotation.set(o.headPitch||0,o.headYaw||0,o.headRoll||0);for(const [k,on] of [['L',o.sleeveL],['R',o.sleeveR]]){const u=arms[k].userData;u.bare.visible=!!on;for(const m of u.slv)m.visible=!on;if(on){const e=o.armHair||0;for(const {hg,d,bp} of u.ah){hg.quaternion.setFromUnitVectors(UP,new THREE.Vector3(d.x*lerp1(0.35,1,e),-lerp1(1,0.05,e),d.z*lerp1(0.35,1,e)).normalize());bp.scale.setScalar(0.003+0.007*e)}}}for(const [k,c] of [['L',o.curlL||0],['R',o.curlR||0]])for(const [f,f2] of arms[k].userData.fs){f.rotation.x=c*1.3;f2.rotation.x=c*1.5}const sq=o.squash||0;up.scale.set(1+sq*0.4,1-sq,1+sq*0.4);g.position.y=(o.jump||0)+(o.sitY||0);for(const [k,lp] of [['L',o.legL],['R',o.legR]]){const L=legs[k],v=lp||[0,0,0];L.hip.rotation.set(-(v[0]||0),0,v[3]||0);L.kn.rotation.set(v[1]||0,0,0);L.ft.rotation.set(v[2]||0,0,0)}g.rotation.z=o.tilt||0;root.rotation.y=o.yaw||0;
      belly.scale.set(0.53*(1+(o.bellyPuff||0)),0.4,0.48*(1+(o.bellyPuff||0)))}};
  api.bellyPoint=(dx,dy,dz,puff=0,off=0.05)=>{const rx=0.53*(1+puff),ry=0.4,rz=0.48*(1+puff),n=Math.hypot(dx,dy,dz);dx/=n;dy/=n;dz/=n;const k=1/Math.sqrt((dx/rx)**2+(dy/ry)**2+(dz/rz)**2)+off;return[dx*k,1.08+dy*k,0.03+dz*k]};
  api.pose();return api}
