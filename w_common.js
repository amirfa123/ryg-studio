// ===== shared helpers for this run's bodies =====
function proj(v,cam){const p=v.clone().project(cam);return [(p.x+1)/2*W,(1-p.y)/2*H]}
function mix(p,q,c){return p.map((v,i)=>lerp(v,q[i],c))}
const BLINK=t=>{const p=((t%3.1)+3.1)%3.1;return p>1.5&&p<1.6};
function canvasTex(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;const tx=new THREE.CanvasTexture(c);tx.colorSpace=THREE.SRGBColorSpace;return {c,ctx:c.getContext('2d'),tx}}
function labelBox(parent,size,col,label,pos,labCol='#1b1310',bgCol=null){const {c,ctx,tx}=canvasTex(256,256);ctx.fillStyle=bgCol||'#'+new THREE.Color(col).getHexString();ctx.fillRect(0,0,256,256);ctx.strokeStyle='rgba(0,0,0,0.25)';ctx.lineWidth=10;ctx.strokeRect(14,14,228,228);
  ctx.fillStyle=labCol;ctx.font='900 64px Inter';ctx.textAlign='center';ctx.textBaseline='middle';const L=label.split('\n');L.forEach((s,i)=>ctx.fillText(s,128,128+(i-(L.length-1)/2)*70));
  const m=new THREE.MeshToonMaterial({map:tx,gradientMap:toon(0).gradientMap});const plain=toon(col);
  return part(parent,new THREE.BoxGeometry(...size),[plain,plain,plain,plain,m,plain],pos,[1,1,1],[0,0,0],0.02)}
function palm(parent,x,z,s=1,lean=0.15){const p=new THREE.Group();p.position.set(x,0,z);p.scale.setScalar(s);parent.add(p);const tm=toon(0x9C6B3E);let px=0,py=0;
  for(let i=0;i<7;i++){const a=lean*i/6;part(p,cap(0.09-i*0.006,0.42),tm,[px,py+0.25,0],[1,1,1],[0,0,-a],0.008);px+=Math.sin(a)*0.45;py+=Math.cos(a)*0.45}
  const top=new THREE.Group();top.position.set(px,py+0.2,0);p.add(top);for(let k=0;k<7;k++){const a=k/7*Math.PI*2;const l=new THREE.Group();l.rotation.set(0,a,0);top.add(l);part(l,SPH,toon(k%2?0x2E9E5B:0x3DBA6A),[0.62,-0.12,0],[0.7,0.06,0.17],[0,0,-0.35],0.01)}
  part(top,SPH,toon(0x7A4E2A),[0,-0.05,0],[0.12,0.1,0.12],[0,0,0],0.008);return p}
function makeCar(col=0xFF3D7F){const c=new THREE.Group();const B=toon(col),Wt=toon(0xffffff),K=toon(0x1d1d24),G=new THREE.MeshToonMaterial({color:0x7FD3FF,transparent:true,opacity:0.55,gradientMap:toon(0).gradientMap});
  part(c,new THREE.BoxGeometry(4.0,0.45,1.75),B,[0,0.55,0],[1,1,1],[0,0,0],0.02);part(c,new THREE.BoxGeometry(1.3,0.28,1.7),B,[1.35,0.86,0],[1,1,1],[0,0,0.12],0.02);part(c,new THREE.BoxGeometry(1.0,0.3,1.7),B,[-1.45,0.88,0],[1,1,1],[0,0,-0.06],0.02);
  part(c,new THREE.BoxGeometry(0.85,0.3,1.72),B,[-0.2,0.9,0],[1,1,1],[0,0,0],0);part(c,new THREE.BoxGeometry(4.02,0.07,0.25),Wt,[0,0.6,0.0],[1,1,1],[0,0,0],0);
  part(c,new THREE.BoxGeometry(0.05,0.3,1.45),G,[0.82,1.1,0],[1,1,1],[0,0,0.55],0.01);
  for(const z of [-0.88,0.88]){part(c,new THREE.BoxGeometry(0.1,0.14,0.3),basic(0xFFF6B0),[2.0,0.62,z*0.7],[1,1,1],[0,0,0],0);part(c,new THREE.BoxGeometry(0.06,0.1,0.35),basic(0xFF3030),[-2.0,0.66,z*0.7],[1,1,1],[0,0,0],0)}
  const wheels=[];for(const [x,z] of [[1.3,0.88],[-1.3,0.88],[1.3,-0.88],[-1.3,-0.88]]){const w=new THREE.Group();w.position.set(x,0.36,z);c.add(w);part(w,new THREE.CylinderGeometry(0.36,0.36,0.3,24),K,[0,0,0],[1,1,1],[Math.PI/2,0,0],0.015);part(w,new THREE.BoxGeometry(0.5,0.08,0.32),toon(0xCFCFD8),[0,0,0],[1,1,1],[0,0,0],0);wheels.push(w)}
  const wheel=part(c,new THREE.TorusGeometry(0.17,0.035,8,20),K,[0.42,1.05,0.35],[1,1,1],[0,Math.PI/2,0.5],0.008);
  return {c,wheels,spin(a){for(const w of wheels)w.rotation.z=-a}}}
function arrow(x0,y0,x1,y1,c,wd=26){const a=Math.atan2(y1-y0,x1-x0);g.save();g.lineCap='round';g.strokeStyle='#111';g.lineWidth=wd+14;g.beginPath();g.moveTo(x0,y0);g.lineTo(x1-Math.cos(a)*30,y1-Math.sin(a)*30);g.stroke();g.strokeStyle=c;g.lineWidth=wd;g.stroke();
  g.translate(x1,y1);g.rotate(a);g.beginPath();g.moveTo(16,0);g.lineTo(-52,-44);g.lineTo(-52,44);g.closePath();g.lineJoin='round';g.lineWidth=12;g.strokeStyle='#111';g.stroke();g.fillStyle=c;g.fill();g.restore()}
function panel(x,y,w,h,c='rgba(10,12,25,0.85)',edge='#FFD23F'){g.fillStyle=c;rr(x-w/2,y-h/2,w,h,40);g.fill();g.strokeStyle=edge;g.lineWidth=6;g.stroke()}
function vignette(){const vg=g.createRadialGradient(W/2,H/2,H*0.35,W/2,H/2,H*0.75);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,0.3)');g.fillStyle=vg;g.fillRect(0,0,W,H)}
function title3(a,l1,l2,l3){if(a<=0)return;g.save();g.globalAlpha=a;txt(l1,W/2,215,62,{sw:15});txt(l2,W/2,310,84,{fill:'#FFD23F',sw:20});if(l3)txt(l3,W/2,410,84,{fill:'#FFD23F',sw:20});g.restore()}
