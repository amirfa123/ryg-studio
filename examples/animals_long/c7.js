// ===== Chapter 6: Bigfoot (global 232.18 - 255.94) =====
const T0=232.18,TT=23.76;
const SW=scene('swamp');
const BF=new THREE.Group();SW.S.add(BF);{const F=toon(0x2A1E16);part(BF,cap(0.55,1.4),F,[0,1.6,0],[1,1,0.8],[0,0,0],0.01);part(BF,SPH,F,[0,2.75,0],[0.4,0.42,0.38],[0,0,0],0.01);for(const s of [-1,1]){part(BF,cap(0.16,1.2),F,[s*0.68,1.4,0],[1,1,1],[0,0,s*0.12],0.008);part(BF,cap(0.2,0.8),F,[s*0.28,0.45,0],[1,1,1],[0,0,0],0.008);part(BF,SPH,basic(0xFFE14D),[s*0.14,2.8,0.34],[0.06,0.04,0.03],[0,0,0],0)}}
BF.position.set(-1.5,0,-6);
const STUMP=new THREE.Group();SW.S.add(STUMP);{part(STUMP,new THREE.CylinderGeometry(0.55,0.7,2.4,14),toon(0x5A4632),[0,1.2,0],[1,1,1],[0,0,0],0.012);for(let k=0;k<6;k++)part(STUMP,SPH,toon(0x4F7F3C),[Math.cos(k)*0.45,1.6+0.5*hash(k),Math.sin(k)*0.45],[0.35,0.5,0.3],[0,0,0],0.008);part(STUMP,SPH,toon(0x4F7F3C),[0,2.55,0],[0.5,0.4,0.45],[0,0,0],0.008)}
STUMP.position.copy(BF.position);
function dim(f){SW.S.children.filter(c=>c.isLight).forEach(l=>{l.intensity=(l.isHemisphereLight?1.5:2.2)*f})}
function zeroCard(x,y,lab,a){if(a<=0)return;g.save();g.translate(x,y);g.scale(a,a);panel(0,0,400,360,'rgba(10,12,25,0.9)',GOLD,30);txt('0',0,-20,180,{fill:GOLD,stroke:0});txt(lab,0,120,52,{stroke:0});g.restore()}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();holder.visible=true;BF.visible=false;STUMP.visible=false;dim(1);
  SW.gators.forEach(g2=>g2.position.y=-0.6);
  if(t<7.0){dim(0.35);BF.visible=true;putGuy(SW.S,1.2,0,3.0,PI+0.35);guy.pose({...walk(t,4),armR:[1.4,-0.4],bendR:0.4,mouth:'o',look:0});SW.shot([3.8,2.6,10.0],[-0.5,1.6,-3]);bg.style.background='linear-gradient(#050814,#14241C)';
    const p=proj(new THREE.Vector3(-1.5,2.0,-6),SW.cam);torch(p[0],p[1],1);fogLayer(0.6);chapterCard(t,0.05,2.1,6,'BIGFOOT');pill('SPOTTED IN THE WOODS?',W/2,110,56,GOLD,'#111',t,2.3,6.95);comic('?!',p[0]+120,p[1]-160,140,t,4.6,{life:2.4,fill:GOLD})}
  else if(t<12.2){clear3d();setBG('#2E8F9A');leonida(W*0.34,H*0.53,1.3,1);bigfoot2D(W*0.36,H*0.5,1.1*pop(t,7.2));for(let i=0;i<3;i++){g.save();g.strokeStyle='#9DFF6B';g.lineWidth=8;g.beginPath();for(let k=0;k<=12;k++){const y=H*0.3-k*10,x=W*(0.3+i*0.04)+10*Math.sin(k+t*6+i);k?g.lineTo(x,y):g.moveTo(x,y)}g.stroke();g.restore()}
    txtA('THE "SKUNK APE"',W*0.72,H*0.4,80,pop(t,8.6),{fill:'#9DFF6B',sw:16});txtA('FLORIDA LEGEND',W*0.72,H*0.52,52,pop(t,8.9),{sw:12});if(t>10.5)txtA('COULD IT GET YOU?',W*0.72,H*0.68,64,pop(t,10.5),{fill:GOLD,sw:14});flash(t,7.0,0.2)}
  else if(t<17.4){clear3d();setBG('neon');txtA('EVIDENCE FOUND BY SCIENTISTS',W/2,110,64,pop(t,12.25),{fill:GOLD,sw:14});zeroCard(W*0.22,H*0.5,'BONES',pop(t,14.2));zeroCard(W*0.5,H*0.5,'BODIES',pop(t,14.9));zeroCard(W*0.78,H*0.5,'TEETH',pop(t,15.4));if(t>16.2)verdict(t,16.2,false,'NOT ONE');flash(t,12.2,0.2)}
  else{const lit=t>18.6;dim(lit?0.8:0.35);BF.visible=!lit;STUMP.visible=lit;putGuy(SW.S,1.4,0,-1.0,PI+0.3);guy.pose({...idle(t),armR:[1.5,-0.5],bendR:0.3,mouth:lit?'grin':'o',wide:!lit});SW.shot([3.6,2.6,6.5],[-0.6,1.4,-5.0]);
    if(!lit){bg.style.background='linear-gradient(#050814,#14241C)';const p=proj(new THREE.Vector3(-1.5,2.0,-6),SW.cam);torch(p[0],p[1],1)}else setBG('swamp');comic("...IT'S A STUMP",W*0.32,H*0.25,80,t,18.8,{life:2.8,rot:-0.05,fill:'#9DFF6B'});flash(t,18.6,0.25);
    if(t>19.4){g.save();g.fillStyle='rgba(10,12,25,0.85)';rr(W*0.52,H*0.05,820,290,30);g.fill();g.restore();riskMeter(W*0.52+410,H*0.05+230,700,1-easeOut(seg(t,19.6,21.9)),'CHANCE OF A BIGFOOT ATTACK',RED);if(t>21.9)txtA('ZERO',W*0.52+410,H*0.05+75,90,pop(t,21.95),{fill:GREEN,sw:16})}}
  vignette();cap16(t+T0)};
