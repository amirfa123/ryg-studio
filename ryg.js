// ROUND YELLOW GUY — original ball-shaped mascot (reusable)
import * as THREE from 'three';
const grad=new THREE.DataTexture(new Uint8Array([160,160,160,255, 220,220,220,255, 255,255,255,255]),3,1,THREE.RGBAFormat);grad.minFilter=grad.magFilter=THREE.NearestFilter;grad.needsUpdate=true;
export const toon=c=>new THREE.MeshToonMaterial({color:c,gradientMap:grad});
export const basic=(c,o={})=>new THREE.MeshBasicMaterial({color:c,...o});
function outlineMat(th){const m=new THREE.MeshBasicMaterial({color:0x1b1310,side:THREE.BackSide});m.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace('#include <begin_vertex>',`vec3 transformed = position + normalize(normal)*${th.toFixed(4)};`)};return m}
export const SPH=new THREE.SphereGeometry(1,40,28);
export const cap=(r,l)=>new THREE.CapsuleGeometry(r,l,12,24);
export function part(parent,geo,mat,pos,scale=[1,1,1],rot=[0,0,0],ol=0.014){const m=new THREE.Mesh(geo,mat);m.position.set(...pos);m.scale.set(...scale);m.rotation.set(...rot);parent.add(m);
  if(ol){const k=ol/Math.max(scale[0],scale[1],scale[2]);m.add(new THREE.Mesh(geo,outlineMat(k)))}return m}
export function makeGuy(){
  const root=new THREE.Group(),g=new THREE.Group();root.add(g);
  const Y=toon(0xFFCC33),Y2=toon(0xF2B02E),W=toon(0xffffff),BL=toon(0x2F7BFF),BL2=toon(0x1F5FD6),wh=basic(0xffffff),ir=basic(0x5A3519),dk=basic(0x140c07),mo=basic(0x7A2E28);
  for(const s of [-1,1]){part(g,cap(0.085,0.14),Y,[s*0.22,0.2,0]);part(g,SPH,W,[s*0.23,0.075,0.07],[0.16,0.09,0.23])}
  const body=new THREE.Group();body.position.y=0.84;g.add(body);
  part(body,SPH,Y,[0,0,0],[0.62,0.6,0.58],[0,0,0],0.016);
  const arms={};for(const [s,k] of [[1,'L'],[-1,'R']]){const a=new THREE.Group();a.position.set(s*0.58,0.02,0.05);body.add(a);part(a,cap(0.07,0.24),Y,[0,-0.17,0]);part(a,SPH,Y,[0,-0.37,0],[0.105,0.11,0.1]);a.rotation.z=s*0.45;arms[k]=a}
  // face
  const eyes=[];for(const s of [-1,1]){const e=new THREE.Group();e.position.set(s*0.2,0.15,0.5);e.rotation.set(-0.2,s*0.33,0);body.add(e);
    part(e,SPH,wh,[0,0,0],[0.12,0.15,0.05],[0,0,0],0.01);const pu=new THREE.Group();e.add(pu);part(pu,SPH,ir,[0,-0.01,0.04],[0.066,0.066,0.02],[0,0,0],0);part(pu,SPH,dk,[0,-0.01,0.056],[0.034,0.034,0.01],[0,0,0],0);part(pu,SPH,wh,[-0.02,0.015,0.064],[0.013,0.013,0.005],[0,0,0],0);eyes.push({e,pu})}
  const brows=[];for(const s of [-1,1])brows.push(part(body,cap(0.022,0.13),dk,[s*0.2,0.345,0.46],[1,1,1],[0,0,Math.PI/2-s*0.12],0));
  const mouths={smile:part(body,new THREE.TorusGeometry(0.13,0.016,8,28,Math.PI),dk,[0,-0.06,0.575],[1,0.6,1],[0.12,0,Math.PI],0),
    o:part(body,SPH,mo,[0,-0.12,0.565],[0.07,0.09,0.03],[0.15,0,0],0.008),grin:new THREE.Group()};
  body.add(mouths.grin);mouths.grin.position.set(0,-0.05,0.578);mouths.grin.rotation.x=0.12;
  part(mouths.grin,new THREE.CircleGeometry(0.15,28,Math.PI,Math.PI),mo,[0,0,0],[1,0.85,1],[0,0,0],0);part(mouths.grin,new THREE.CircleGeometry(0.135,28,Math.PI,Math.PI),wh,[0,-0.004,0.002],[1,0.3,1],[0,0,0],0);
  part(mouths.grin,new THREE.TorusGeometry(0.15,0.013,8,28,Math.PI),dk,[0,0,0.003],[1,0.85,1],[0,0,Math.PI],0);part(mouths.grin,cap(0.013,0.29),dk,[0,0,0.003],[1,1,1],[0,0,Math.PI/2],0);
  // blue cap
  const hat=new THREE.Group();hat.position.set(0,0.36,0);hat.rotation.set(-0.12,0,0.08);body.add(hat);
  part(hat,new THREE.SphereGeometry(1,32,16,0,Math.PI*2,0,Math.PI/2),BL,[0,0,0],[0.44,0.34,0.43]);part(hat,SPH,BL2,[0,0.03,0.4],[0.3,0.035,0.24],[0.25,0,0]);part(hat,SPH,W,[0,0.345,0],[0.05,0.035,0.05],[0,0,0],0.008);
  const api={root,body,arms,eyes,brows,
    pose(o={}){const m=o.mouth||'smile';for(const k in mouths)mouths[k].visible=(k===m);if(m==='o')mouths.o.scale.set(0.07,(o.mouthSize||1)*0.09,0.03);
      for(const {e,pu} of eyes){e.scale.y=o.blink?0.08:(o.wide?1.18:1);pu.position.x=(o.look||0)*0.03;pu.position.y=(o.lookY||0)*0.03}
      brows.forEach((b,i)=>{b.position.y=0.345+(o.brow||0)+(o.wide?0.04:0)});
      const aL=o.armL||[0.45,0],aR=o.armR||[0.45,0];arms.L.rotation.set(aL[1]||0,0,aL[0]);arms.R.rotation.set(aR[1]||0,0,-aR[0]);
      const sq=o.squash||0;body.scale.set(1+sq*0.5,1-sq,1+sq*0.5);body.position.y=0.84-sq*0.35;g.position.y=o.jump||0;g.rotation.z=o.tilt||0;root.rotation.y=o.yaw||0}};
  api.pose();return api}
