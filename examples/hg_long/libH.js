// ===== Hunger Games survival long-form: extra library =====
guy.outfit({bandana:1});
const ORANGE='#FF8A1F',BLUE='#4FB8FF',PURPLE='#7A3DB8';
function conifer(parent,x,z,s=1,dark=false){const t=new THREE.Group();t.position.set(x,0,z);t.scale.setScalar(s);parent.add(t);part(t,cap(0.16,1.2),toon(0x6B4A2E),[0,0.6,0]);
  const cs=dark?[0x24553A,0x2D6644,0x357550]:[0x2F7A45,0x3A8E50,0x47A35C];for(let k=0;k<3;k++)part(t,new THREE.ConeGeometry(1.25-k*0.3,1.6,9),toon(cs[k]),[0,1.4+k*0.85,0],[1,1,1],[0,hash(x*3+z+k),0],0.012);return t}
function roundTree(parent,x,z,s=1){const t=new THREE.Group();t.position.set(x,0,z);t.scale.setScalar(s);parent.add(t);part(t,cap(0.2,2.4),toon(0x6B4A2E),[0,1.3,0]);for(let k=0;k<4;k++)part(t,SPH,toon(k%2?0x3E8A42:0x4FA04C),[Math.cos(k*1.7)*0.7,3.0+0.35*hash(k+x),Math.sin(k*1.7)*0.6],[1.2,1.0,1.1],[0,0,0],0.015);return t}
function rival(col){const r=new THREE.Group();const M=toon(col);part(r,cap(0.26,0.5),M,[0,0.62,0]);part(r,SPH,toon(0xE8C9A0),[0,1.32,0],[0.22,0.24,0.22],[0,0,0],0.008);
  for(const s of [-1,1]){part(r,cap(0.09,0.42),M,[s*0.34,0.66,0],[1,1,1],[0,0,s*0.15]);part(r,cap(0.1,0.38),toon(0x2A2A35),[s*0.13,0.22,0])}return r}
function backpack(parent,col=0xE8742A){const b=new THREE.Group();parent.add(b);part(b,new THREE.BoxGeometry(0.5,0.6,0.3),toon(col),[0,0.3,0],[1,1,1],[0,0,0],0.012);part(b,new THREE.BoxGeometry(0.42,0.22,0.12),toon(0x8A4A1A),[0,0.2,0.19],[1,1,1],[0,0,0],0.008);part(b,SPH,toon(col),[0,0.6,0],[0.25,0.08,0.15],[0,0,0],0.006);return b}
// backpack worn on his back (up-local)
mkProp('pack',p=>{const b=backpack(p,0xE8742A);b.position.set(0,0.98,-0.34);b.scale.setScalar(0.85)});
mkProp('cloth',p=>{part(p,SPH,toon(0xE9E2CC),[0,1.55,0.36],[0.22,0.13,0.1],[0,0,0],0.008)});
mkProp('berry',p=>{for(let i=0;i<6;i++)part(p,SPH,toon(0x2A1240),[-0.3+0.05*Math.cos(i*2),1.32+0.04*(i%3),0.5+0.05*Math.sin(i*2)],[0.045,0.045,0.045],[0,0,0],0.004);part(p,SPH,toon(0x3E8A42),[-0.3,1.38,0.46],[0.08,0.02,0.05],[0,0,0.4],0)});
function flame(parent,x,z,s){const f=new THREE.Group();f.position.set(x,0,z);parent.add(f);const o=part(f,new THREE.ConeGeometry(0.5,1.6,8),basic(0xFF7A1A),[0,0.8,0]);const i=part(f,new THREE.ConeGeometry(0.28,1.0,8),basic(0xFFE14D),[0,0.55,0.05]);f.scale.setScalar(s);f.userData={o,i,s,seed:x*1.3+z};return f}
function flick(f,t){const k=f.userData.seed;const a=1+0.18*Math.sin(t*13+k*5)+0.1*Math.sin(t*23+k);f.scale.set(f.userData.s*(1-0.08*Math.sin(t*17+k)),f.userData.s*a,f.userData.s);f.rotation.z=0.08*Math.sin(t*9+k)}
// ---------- the arena: meadow, golden horn, launch plates, forest ring ----------
BUILD.arena=()=>{const S=new THREE.Scene();const L=[];{const h=new THREE.HemisphereLight(0xffffff,0x8899aa,1.5),d=new THREE.DirectionalLight(0xffffff,2.2);d.position.set(-2,4,5);S.add(h,d);L.push(h,d)}
  S.fog=new THREE.Fog(0xBFE0C8,34,95);const o={S,L};
  part(S,new THREE.PlaneGeometry(300,300),toon(0x6BA84F),[0,0,0],[1,1,1],[-PI/2,0,0],0);part(S,new THREE.CircleGeometry(7.5,48),toon(0xC9A66B),[0,0.01,0],[1,1,1],[-PI/2,0,0],0);
  for(let i=0;i<70;i++)part(S,new THREE.CircleGeometry(0.4+hash(i)*0.5,10),toon(0x7DBA5A),[(hash(i*3)-0.5)*60,0.015,(hash(i*7)-0.5)*60],[1,1,1],[-PI/2,0,0],0);
  // golden horn (open toward +z)
  const horn=new THREE.Group();S.add(horn);o.horn=horn;const GOLDM=new THREE.MeshToonMaterial({color:0xF2B630,gradientMap:GM,side:THREE.DoubleSide});
  part(horn,new THREE.ConeGeometry(2.4,6,28,1,true),GOLDM,[0,2.4,-1],[1,1,1],[-PI/2,0,0],0.02);part(horn,new THREE.TorusGeometry(2.4,0.14,10,40),toon(0xC98E1A),[0,2.4,2.0],[1,1,1],[0,0,0],0.012);
  for(let k=0;k<6;k++){const a=k/6;part(horn,SPH,GOLDM,[0,2.4+a*a*2.6,-4.0-a*1.6],[0.5-k*0.06,0.5-k*0.06,0.5-k*0.06],[0,0,0],0.01)}
  const pile=new THREE.Group();pile.position.set(0,0,2.6);S.add(pile);o.pile=pile;
  for(let k=0;k<7;k++)part(pile,new THREE.BoxGeometry(0.8,0.6,0.7),toon(k%2?0x9A6A3B:0x8A5A2B),[(k-3)*0.75,0.3+(k%3===1?0.6:0),-0.6-0.4*hash(k)],[1,1,1],[0,hash(k)*0.6,0],0.012);
  const bpc=[0xE8742A,0x3A8E50,0x2E6FD0,0xD03A3A,0xE8B83A];o.packs=[];for(let k=0;k<9;k++){const b=backpack(pile,bpc[k%5]);b.position.set((k-4)*0.6+0.2*hash(k*5),k%2?0:0.6,0.4*hash(k*2));b.rotation.y=hash(k*9)*1.2-0.6;o.packs.push(b)}
  for(let k=0;k<3;k++)part(pile,new THREE.CylinderGeometry(0.3,0.3,0.8,14),toon(0x5A6B7A),[2.8+k*0.5,0.4,-0.3],[1,1,1],[0,0,0],0.01);
  // a lone backpack between the plates and the forest (the smart grab)
  o.near=backpack(S,0x3A8E50);o.near.position.set(1.6,0,13.4);o.near.rotation.y=0.6;
  // plates + rivals
  o.plates=[];o.rivals=[];const rc=[0xD03A3A,0x2E6FD0,0x8A3DD0,0xE8B83A,0x2EA5A5,0xD0602E,0x5A5A6A,0xC0407A,0x3A8E50,0x7A5A3A,0x2E8FD0];
  for(let k=0;k<12;k++){const a=PI/2+k/12*PI*2;const x=Math.cos(a)*10,z=Math.sin(a)*10;const pl=new THREE.Group();pl.position.set(x,0,z);S.add(pl);part(pl,new THREE.CylinderGeometry(0.75,0.85,0.16,24),toon(0xC9CDD6),[0,0.08,0],[1,1,1],[0,0,0],0.012);part(pl,new THREE.TorusGeometry(0.7,0.04,6,30),toon(0x5A5E6A),[0,0.17,0],[1,1,1],[PI/2,0,0],0);o.plates.push(pl);
    if(k>0){const rv=rival(rc[k-1]);rv.position.set(x,0.16,z);rv.rotation.y=Math.atan2(-x,-z);S.add(rv);o.rivals.push(rv)}}
  for(let i=0;i<70;i++){const a=hash(i*1.7)*PI*2,rd=22+hash(i*2.9)*24;conifer(S,Math.cos(a)*rd,Math.sin(a)*rd,1.3+hash(i)*0.9,i%3===0)}
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,300);
  o.mood=m=>{const k=m==='night'?0.6:m==='dusk'?0.8:1;L[0].intensity=1.5*k;L[1].intensity=2.2*k;S.fog.color.set(m==='night'?0x1C1A40:m==='dusk'?0xE8A27A:0xBFE0C8);setBG(m==='night'?'night':m==='dusk'?'sunset':'day')};
  o.shot=(p,l,m='day')=>{o.mood(m);o.cam.position.set(...p);o.cam.lookAt(...l);r.render(o.S,o.cam)};return o};
function resetRivals(A){A.near.visible=false;A.rivals.forEach((rv,k)=>{const a=PI/2+(k+1)/12*PI*2;rv.position.set(Math.cos(a)*10,0.16,Math.sin(a)*10);rv.rotation.set(0,Math.atan2(-Math.cos(a),-Math.sin(a)),0)})}
// ---------- the forest: stream, campfire, leaf bed, berry bush, lake, fire wall, swarm ----------
BUILD.forest=()=>{const S=new THREE.Scene();const L=[];{const h=new THREE.HemisphereLight(0xffffff,0x8899aa,1.5),d=new THREE.DirectionalLight(0xffffff,2.2);d.position.set(-2,4,5);S.add(h,d);L.push(h,d)}
  S.fog=new THREE.Fog(0xA9CFAE,18,60);const o={S,L};
  part(S,new THREE.PlaneGeometry(300,300),toon(0x5C9447),[0,0,0],[1,1,1],[-PI/2,0,0],0);
  for(let i=0;i<90;i++)part(S,new THREE.CircleGeometry(0.3+hash(i)*0.4,10),toon(i%2?0x6FA852:0x4E8340),[(hash(i*3)-0.5)*50,0.012,(hash(i*7)-0.5)*40],[1,1,1],[-PI/2,0,0],0);
  // stream along x at z=-4
  const WM=new THREE.MeshToonMaterial({color:0x3FA9E0,gradientMap:GM});part(S,new THREE.PlaneGeometry(200,2.4),WM,[0,0.03,-4],[1,1,1],[-PI/2,0,0],0);o.streaks=[];
  for(let i=0;i<40;i++){const m=part(S,new THREE.PlaneGeometry(0.9+hash(i)*0.8,0.06),basic(0xCFF2FF),[0,0.04,-4.9+hash(i*5)*1.8],[1,1,1],[-PI/2,0,0],0);m.userData.x0=(hash(i*3)-0.5)*60;o.streaks.push(m)}
  for(let i=0;i<26;i++){const x=(hash(i*4.1)-0.5)*50;for(const s of [-1,1])part(S,SPH,toon(i%2?0x8A8D96:0x9EA2AB),[x+hash(i)*2,0.1,-4+s*(1.3+hash(i*s+3)*0.3)],[0.35+hash(i*2)*0.3,0.22,0.3],[0,hash(i),0],0.01)}
  // trees (keep clearing x -9..9, z -3..6 open)
  for(let i=0;i<110;i++){const x=(hash(i*2.3)-0.5)*90,z=-6-hash(i*3.7)*34;(i%4===0?roundTree:conifer)(S,x,z,1.2+hash(i*5)*0.9)}
  for(let i=0;i<40;i++){const x=(hash(i*6.1)-0.5)*90,z=7+hash(i*1.9)*20;if(Math.abs(x)<10&&z<12)continue;conifer(S,x,z,1.2+hash(i*2)*0.8)}
  for(let i=0;i<16;i++){const x=i<8?-10-hash(i)*8:10+hash(i)*8,z=-2+hash(i*3)*10;conifer(S,x,z,1.3+hash(i*4)*0.7)}
  // campfire + log seat + pot on a tripod at (2.6,0,1.6)
  const camp=new THREE.Group();camp.position.set(2.6,0,1.6);S.add(camp);o.camp=camp;for(let k=0;k<7;k++){const a=k/7*PI*2;part(camp,SPH,toon(0x8A8D96),[Math.cos(a)*0.55,0.08,Math.sin(a)*0.55],[0.16,0.1,0.14],[0,0,0],0.006)}
  for(let k=0;k<3;k++)part(camp,cap(0.07,0.7),toon(0x6B4A2E),[0,0.12,0],[1,1,1],[PI/2,k*1.05,0.1]);o.fl=[flame(camp,0,0,0.45),flame(camp,0.12,0.08,0.3),flame(camp,-0.12,-0.05,0.32)];
  const pot=new THREE.Group();pot.position.set(0,0.95,0);camp.add(pot);o.pot=pot;part(pot,new THREE.CylinderGeometry(0.3,0.24,0.36,18),toon(0x3A3A44),[0,0,0],[1,1,1],[0,0,0],0.01);o.potWater=part(pot,new THREE.CircleGeometry(0.27,18),toon(0x6FC6F0),[0,0.16,0],[1,1,1],[-PI/2,0,0],0);
  o.bub=[];for(let k=0;k<8;k++){const b=part(pot,SPH,basic(0xEAF8FF),[0,0.18,0],[0.04,0.04,0.04],[0,0,0],0);o.bub.push(b)}
  for(let k=0;k<3;k++){const a=k/3*PI*2+0.4;part(camp,cap(0.03,1.5),toon(0x5A3B24),[Math.cos(a)*0.35,0.7,Math.sin(a)*0.35],[1,1,1],[Math.sin(a)*0.25,0,-Math.cos(a)*0.25])}
  part(camp,cap(0.2,1.4),toon(0x7A5432),[-1.3,0.2,0],[1,1,1],[PI/2,0,0]);
  o.steam=[];for(let k=0;k<6;k++){const s=part(camp,SPH,new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:0.5}),[0,1.3,0],[0.12,0.12,0.12],[0,0,0],0);o.steam.push(s)}
  // leaf bed at (-3,0,1.6)
  const bed=new THREE.Group();bed.position.set(-3,0,1.6);S.add(bed);o.bed=bed;const LC=[0xC86A2A,0xD8942E,0xA8502A,0xE0B040,0x8A5A2A];
  for(let i=0;i<70;i++)part(bed,SPH,toon(LC[i%5]),[(hash(i*2.2)-0.5)*1.6,0.05+hash(i*3.1)*0.32,(hash(i*4.4)-0.5)*2.6],[0.24,0.05,0.16],[hash(i)*0.6,hash(i*7)*6,hash(i*9)*0.6],0.004);
  const cover=new THREE.Group();bed.add(cover);o.cover=cover;for(let i=0;i<70;i++){const m=part(cover,SPH,toon(LC[(i+2)%5]),[(hash(i*5.2)-0.5)*1.5,0.62+hash(i*6.1)*0.35,(hash(i*7.4)-0.5)*1.9],[0.24,0.05,0.16],[hash(i*2)*0.8,hash(i*3)*6,hash(i*4)*0.8],0.004);m.userData.k=i/70}
  // loose leaves on the ground around the bed
  for(let i=0;i<40;i++)part(S,SPH,toon(LC[i%5]),[-3+(hash(i*8.8)-0.5)*6,0.03,1.6+(hash(i*9.9)-0.5)*5],[0.2,0.03,0.13],[0,hash(i)*6,0],0);
  // berry bush at (6,0,0.5)
  const bush=new THREE.Group();bush.position.set(6.2,0,0.4);S.add(bush);o.bush=bush;for(let k=0;k<6;k++)part(bush,SPH,toon(k%2?0x2F6E3A:0x3A8246),[Math.cos(k*1.2)*0.7,0.7+0.3*hash(k),Math.sin(k*1.2)*0.5],[0.75,0.65,0.7],[0,0,0],0.012);
  for(let i=0;i<40;i++){const a=hash(i*3.3)*PI*2,b=hash(i*5.5)*PI*0.8;part(bush,SPH,toon(0x2A1240),[Math.cos(a)*Math.sin(b)*1.15,0.8+Math.cos(b)*0.75,Math.sin(a)*Math.sin(b)*0.95+0.15],[0.07,0.07,0.07],[0,0,0],0.003)}
  // lake at (-14,0,-0.5)
  const lake=new THREE.Group();lake.position.set(-15,0,1);S.add(lake);o.lake=lake;part(lake,new THREE.CircleGeometry(5,40),WM,[0,0.035,0],[1,1,1],[-PI/2,0,0],0);part(lake,new THREE.RingGeometry(5,5.5,40),toon(0xC9B88A),[0,0.03,0],[1,1,1],[-PI/2,0,0],0);
  o.ripple=part(lake,new THREE.RingGeometry(0.4,0.55,30),basic(0xEAF8FF),[0,0.05,0],[1,1,1],[-PI/2,0,0],0);o.ripple.visible=false;
  // fire wall (row of flames at z=-10, moved via o.wall.position)
  const wall=new THREE.Group();S.add(wall);o.wall=wall;wall.visible=false;o.wf=[];for(let i=0;i<46;i++){o.wf.push(flame(wall,-34+i*1.5+hash(i)*0.6,(hash(i*3)-0.5)*1.2,1.6+hash(i*2)*1.6))}
  o.smoke=[];const SM=c=>new THREE.MeshBasicMaterial({color:c,transparent:true,opacity:0.55,depthWrite:false});for(let i=0;i<40;i++){const s=part(wall,SPH,SM(i%2?0x55555E:0x6E6E78),[0,0,0],[1,1,1],[0,0,0],0);s.userData={x:-30+hash(i*2.7)*60,k:hash(i*4.3)};o.smoke.push(s)}
  // swarm
  o.swarm=[];for(let i=0;i<45;i++){const b=makeBee();b.b.scale.setScalar(1.3);b.b.visible=false;S.add(b.b);o.swarm.push(b)}
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,300);
  o.mood=m=>{const k=m==='night'?0.6:m==='dusk'?0.8:m==='fire'?0.9:1;L[0].intensity=1.5*k;L[1].intensity=2.2*k;L[1].color.set(m==='fire'?0xFFB070:m==='night'?0x9AB0FF:0xffffff);
    S.fog.color.set(m==='night'?0x141634:m==='dusk'?0xE0A07A:m==='fire'?0x8A5A48:0xA9CFAE);setBG(m==='night'?'night':m==='dusk'?'sunset':m==='fire'?'linear-gradient(#2A1010 0%,#8A3A1A 50%,#E07A2A 100%)':'day')};
  o.tick=t=>{o.streaks.forEach((m,i)=>{m.position.x=((m.userData.x0+t*1.6+30)%60+60)%60-30});o.fl.forEach(f=>flick(f,t));o.wf.forEach(f=>flick(f,t));
    o.smoke.forEach((s,i)=>{const p=((t*0.25+s.userData.k)%1);s.position.set(s.userData.x+Math.sin(t+i)*0.5,2+p*9,-1-p*2);s.scale.setScalar(1.2+p*2.6);s.material.opacity=0.55*(1-p)})};
  o.swarmAt=(t,c,R=1,on=true)=>{o.swarm.forEach((b,i)=>{b.b.visible=on;if(!on)return;const a=t*(2+hash(i)*2)+i*2.1,e=Math.sin(t*3.1+i)*0.5;b.b.position.set(c[0]+Math.cos(a)*R*(0.4+hash(i*3)),c[1]+e*R*0.6+(hash(i*5)-0.5)*R,c[2]+Math.sin(a)*R*(0.4+hash(i*7)));b.b.rotation.y=-a-PI/2;b.anim(t+i)})};
  o.steamOn=(t,a)=>{o.steam.forEach((s,i)=>{const p=((t*0.5+i/6)%1);s.visible=a>0;s.position.set(0.1*Math.sin(i*2+t),1.25+p*1.4,0.05*Math.cos(i));s.scale.setScalar(0.08+p*0.25);s.material.opacity=0.5*(1-p)*a})};
  o.boil=(t,a)=>{o.bub.forEach((b,i)=>{b.visible=a>0;const p=((t*1.8+i/8)%1);b.position.set(0.17*Math.cos(i*2.4),0.17+0.02*Math.sin(p*PI),0.17*Math.sin(i*2.4));b.scale.setScalar(0.035*(0.5+Math.sin(p*PI))*a)})};
  o.shot=(p,l,m='day')=>{o.mood(m);o.cam.position.set(...p);o.cam.lookAt(...l);r.render(o.S,o.cam)};return o};
function forestReset(F){F.wall.visible=false;F.swarmAt(0,[0,0,0],1,false);F.cover.visible=false;F.ripple.visible=false;F.steamOn(0,0);F.boil(0,0)}
// ---------- poses ----------
const KNEEL={legL:[1.5,1.9,0,0.15],legR:[0.2,1.4,0,-0.1],jump:-0.32};
const LYING=PI/2;
function crouchPose(t,o={}){return {...heavyPose(t,1),mouth:'o',mouthSize:0.4,...o}}
function lieGuy(sc,x,y,z,ry=0){sc.add(holder);holder.rotation.order='YXZ';holder.position.set(x,y,z);holder.rotation.set(-PI/2,ry,0);holder.scale.setScalar(1)}
// ---------- 2D overlays ----------
function countdown2D(x,y,n,a=1,s=1){if(a<=0)return;g.save();g.globalAlpha=a;g.translate(x,y);g.scale(s,s);panel(0,0,330,170,'rgba(10,12,25,0.92)',RED,26);txt('0:'+String(Math.max(0,n)).padStart(2,'0'),0,6,110,{fill:n<=10?RED:'#fff',stroke:0});g.restore()}
function oddsGrid(x,y,cs,hi=-1,a=1,t=0,fadeOthers=0){if(a<=0)return;for(let i=0;i<48;i++){const cx=x+((i%12)-5.5)*cs,cy=y+(Math.floor(i/12)-1.5)*cs*1.25;const s=pop(t,0.0+i*0.012)*a;if(s<=0)continue;g.save();g.globalAlpha=i===hi?1:1-fadeOthers*0.8;person2D(cx,cy,cs/40*s,i===hi?'#FFD23F':'#8FA0B8');g.restore()}}
function drop2D(x,y,s,f=1,col=BLUE){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=8;g.fillStyle=col;g.beginPath();g.moveTo(0,-70);g.bezierCurveTo(40,-20,55,10,55,30);g.arc(0,30,55,0,PI);g.bezierCurveTo(-55,10,-40,-20,0,-70);g.closePath();g.fill();g.stroke();g.fillStyle='rgba(255,255,255,0.7)';g.beginPath();g.ellipse(-20,22,9,18,0.4,0,7);g.fill();g.restore()}
function lungs2D(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=8;g.fillStyle='#FF8FB1';for(const k of [-1,1]){g.beginPath();g.ellipse(k*34,10,30,52,k*0.15,0,7);g.fill();g.stroke()}g.fillStyle='#E9E2CC';g.fillRect(-7,-62,14,48);g.strokeRect(-7,-62,14,48);g.restore()}
function hut2D(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=8;g.fillStyle='#C8823A';g.beginPath();g.moveTo(-70,50);g.lineTo(0,-60);g.lineTo(70,50);g.closePath();g.fill();g.stroke();g.fillStyle='#3A2A1A';g.beginPath();g.moveTo(-18,50);g.lineTo(0,10);g.lineTo(18,50);g.closePath();g.fill();g.restore()}
function food2D(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=8;g.fillStyle='#FF4A4A';g.beginPath();g.arc(-14,8,34,0,7);g.arc(14,8,34,0,7);g.fill();g.beginPath();g.arc(-14,8,34,0,7);g.stroke();g.beginPath();g.arc(14,8,34,0,7);g.stroke();g.fillStyle='#FF4A4A';g.beginPath();g.ellipse(0,10,40,30,0,0,7);g.fill();g.strokeStyle='#5A3B24';g.lineWidth=8;g.beginPath();g.moveTo(0,-22);g.lineTo(6,-44);g.stroke();g.fillStyle='#5BE37A';g.strokeStyle='#111';g.lineWidth=5;g.beginPath();g.ellipse(22,-40,18,9,-0.4,0,7);g.fill();g.stroke();g.restore()}
const THREES=[['AIR','3 MINUTES',lungs2D,CYAN],['SHELTER','3 HOURS',hut2D,ORANGE],['WATER','3 DAYS',drop2D,BLUE],['FOOD','3 WEEKS',food2D,GREEN]];
function threeCard(x,y,i,a,hl=0,dim=0){if(a<=0)return;const [n,v,ic,col]=THREES[i];g.save();g.translate(x,y);g.scale(a,a);g.globalAlpha=1-dim*0.65;panel(0,0,330,380,'rgba(10,12,25,0.9)',hl?'#FFD23F':col,30);if(hl){g.strokeStyle='#FFD23F';g.lineWidth=14;rr(-175,-200,350,400,36);g.stroke()}
  ic(0,-60,1.0);txt(n,0,60,46,{sw:10});txt(v,0,130,50,{fill:col,sw:12});g.restore()}
function bodyWater(x,y,s,f,lbl){g.save();g.translate(x,y);g.scale(s,s);const P=new Path2D('M0,-210 a52,52 0 1,1 -0.1,0 M-70,-130 L70,-130 Q95,-130 98,-100 L110,40 L80,40 L72,-60 L64,210 L12,210 L0,60 L-12,210 L-64,210 L-72,-60 L-80,40 L-110,40 L-98,-100 Q-95,-130 -70,-130 Z');
  g.fillStyle='rgba(255,255,255,0.15)';g.fill(P);g.save();g.clip(P);const top=lerp(210,-262,f);const gr=g.createLinearGradient(0,top,0,210);gr.addColorStop(0,'#7FD3FF');gr.addColorStop(1,'#2E6FD0');g.fillStyle=gr;g.fillRect(-130,top,260,500);g.fillStyle='rgba(255,255,255,0.5)';g.fillRect(-130,top,260,6);g.restore();g.strokeStyle='#111';g.lineWidth=8;g.stroke(P);g.restore();if(lbl)txt(lbl,x,y+250*s,44,{sw:10})}
function thermo(x,y,s,v,lo=30,hi=40){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=8;rr(-26,-220,52,250,26);g.fill();g.stroke();g.beginPath();g.arc(0,60,48,0,7);g.fill();g.stroke();
  const f=clamp((v-lo)/(hi-lo));const col=v<35?'#4FB8FF':'#FF4A4A';g.fillStyle=col;g.beginPath();g.arc(0,60,36,0,7);g.fill();rr(-13,lerp(10,-205,f),26,lerp(10,-205,f)*-1+40,13);g.fill();
  const y35=lerp(10,-205,(35-lo)/(hi-lo));g.strokeStyle='#FF4A4A';g.lineWidth=6;g.setLineDash([12,8]);g.beginPath();g.moveTo(-60,y35);g.lineTo(60,y35);g.stroke();g.setLineDash([]);g.restore();txt('35°C',x+120*s,y+y35*s,44*s/0.9,{fill:'#FF4A4A',sw:10})}
function heatArrows(x,y,w,t,downK,upK,blocked=0){for(let i=0;i<5;i++){const px=x-w/2+w*(i+0.5)/5,ph=((t*1.3+i*0.2)%1);
  if(downK>0){const len=110*downK*(1-blocked*0.8);g.save();g.globalAlpha=(1-ph)*0.9;arrow(px,y+20+ph*30,px,y+40+ph*30+len,'#FF4A4A',18*downK*(1-blocked*0.7)+4);g.restore()}
  if(upK>0){g.save();g.globalAlpha=(1-ph)*0.8;arrow(px,y-40-ph*20,px,y-80-ph*20,'#FF8A6A',9);g.restore()}}}
function smokeDiagram(x,y,w,h,t,guyLow=1){g.save();g.translate(x,y);panel(0,0,w,h,'rgba(10,12,25,0.85)','#FFD23F',28);g.beginPath();rr(-w/2+8,-h/2+8,w-16,h-16,22);g.clip();
  const gr=g.createLinearGradient(0,-h/2,0,h*0.1);gr.addColorStop(0,'rgba(70,70,80,1)');gr.addColorStop(1,'rgba(70,70,80,0)');g.fillStyle=gr;g.fillRect(-w/2,-h/2,w,h*0.6);
  for(let i=0;i<9;i++){const px=-w/2+((i*120+t*60)%(w+100))-50;g.fillStyle='rgba(110,110,120,0.8)';g.beginPath();g.arc(px,-h/2+60+20*Math.sin(i+t),50,0,7);g.fill()}
  g.fillStyle='#3E7A3A';g.fillRect(-w/2,h/2-40,w,40);txt('HOT SMOKE',w*0.25,-h/2+80,56,{sw:12});txt('CLEANER AIR',w*0.25,h/2-100,56,{fill:'#7FE8FF',sw:12});silhouette(-w*0.3,h/2-40-190*0.9,0.9,'#B0B4C0');g.save();g.globalAlpha=0.6;g.fillStyle='rgba(90,90,100,0.9)';g.beginPath();g.arc(-w*0.3,-h/2+70,110,0,7);g.fill();g.restore();cross(-w*0.3,-h/2+120,1.1);silhouette(-w*0.05,h/2-40-90*0.55,0.55,'#FFCC2E');check(-w*0.05,h/2-200,1.0);g.restore()}
function slopeDiagram(x,y,s,t,k){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#5C9447';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.moveTo(-420,160);g.lineTo(-60,160);g.lineTo(380,-180);g.lineTo(380,160);g.closePath();g.fill();g.stroke();
  // flat fire slow, slope fire fast
  const fx=lerp(-380,-150,k*0.5),sx=lerp(-60,330,k);const fl=(px,py,a)=>{g.save();g.translate(px,py);g.rotate(a);for(let i=0;i<3;i++){g.fillStyle=['#FF4A1A','#FF8A1F','#FFE14D'][i];const hh=70-i*18+8*Math.sin(t*14+i+px);g.beginPath();g.moveTo(-26+i*8,0);g.quadraticCurveTo(0,-hh*1.4,26-i*8,0);g.fill()}g.restore()};
  for(let i=0;i<4;i++)fl(fx-i*40,160,0);for(let i=0;i<5;i++){const px=sx-i*55;if(px<-60)continue;fl(px,160-(px+60)*340/440,-0.25)}
  arrow(-400,220,fx+30,220,'#FFD23F',14);txt('SLOW',(-400+fx)/2,270,40,{sw:10});
  g.save();g.translate(0,0);arrow(-20,40,lerp(0,300,k),40-lerp(0,300,k)*340/440,RED,20);g.restore();txt('FAST UPHILL!',140,-140,54,{fill:RED,sw:12});g.restore()}
function berries2D(x,y,s,skullK=0){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=6;g.fillStyle='#3E8A42';for(const a of [-0.6,0.5]){g.save();g.rotate(a);g.beginPath();g.ellipse(0,-60,24,50,0,0,7);g.fill();g.stroke();g.restore()}
  const P=[[-26,10],[22,6],[0,40],[-34,52],[34,48],[0,-6]];for(const [px,py] of P){g.fillStyle='#2A1240';g.beginPath();g.arc(px,py,26,0,7);g.fill();g.stroke();g.fillStyle='rgba(255,255,255,0.75)';g.beginPath();g.arc(px-8,py-9,6,0,7);g.fill()}g.restore();if(skullK>0){g.save();g.globalAlpha=skullK;skull2D(x+110*s,y-60*s,1.3*s*skullK);g.restore()}}
function scale2D(x,y,s,lbl){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#E9EBF0';g.strokeStyle='#111';g.lineWidth=8;rr(-90,-30,180,90,20);g.fill();g.stroke();g.fillStyle='#22222C';rr(-55,-12,110,40,10);g.fill();g.restore();txt(lbl,x,y+8*s,34*s,{fill:'#7FE8FF',stroke:0})}
function stingDots(x,y,w,h,n,t){g.save();for(let i=0;i<n;i++){const px=x-w/2+hash(i*1.13)*w,py=y-h/2+hash(i*2.71)*h;g.fillStyle='#FF4A4A';g.beginPath();g.arc(px,py,5,0,7);g.fill()}g.restore()}
function lakeDiagram(x,y,w,h,t,k){g.save();g.translate(x,y);panel(0,0,w,h,'rgba(10,12,25,0.85)',CYAN,28);g.beginPath();rr(-w/2+8,-h/2+8,w-16,h-16,22);g.clip();
  g.fillStyle='#9BDCFF';g.fillRect(-w/2,-h/2,w,h*0.45);const wy=-h/2+h*0.45;g.fillStyle='#2E6FD0';g.fillRect(-w/2,wy,w,h);g.fillStyle='#CFF2FF';g.fillRect(-w/2,wy,w,6);
  // head under water with bubbles
  const hy=wy+90;g.fillStyle='#FFCC2E';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.arc(0,hy,44,0,7);g.fill();g.stroke();for(let i=0;i<4;i++){const p=((t*0.8+i/4)%1);g.fillStyle='rgba(255,255,255,0.8)';g.beginPath();g.arc(20+6*Math.sin(i+t*3),hy-50-p*(hy-wy-50),6+i,0,7);g.fill()}
  for(let i=0;i<14;i++){const a=t*2+i*0.9;bee2D(Math.cos(a)*(90+30*hash(i)),wy-50-30*hash(i*3)+10*Math.sin(t*5+i),0.38,t+i)}g.restore();
  if(k>0)txt('THEY WAIT...',x,y+h/2+60,56,{fill:GOLD,sw:12})}
function checklist(x,y,items,t,t0,dt=0.6){items.forEach((s,i)=>{const a=pop(t,t0+i*dt);if(a<=0)return;g.save();g.translate(x,y+i*110);g.scale(a,a);panel(260,0,620,90,'rgba(10,12,25,0.88)',GREEN,24);check(-10,0,0.9);txt(s,300,4,48,{sw:10});g.restore()})}
function caloriesEmpty(x,y,s,f){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='rgba(0,0,0,0.4)';g.strokeStyle='#111';g.lineWidth=8;rr(-40,-150,80,300,30);g.fill();g.stroke();g.fillStyle=f>0.5?GREEN:f>0.25?GOLD:RED;rr(-30,140-280*f,60,280*f,22);g.fill();g.restore()}

function qmarks(x,y,t,t0,n=3,col=GOLD){for(let i=0;i<n;i++)txtA('?',x+i*60,y-20*Math.sin(t*3+i),100,pop(t,t0+i*0.18),{fill:col,sw:16})}
function germs2D(x,y,R,t,a=1){if(a<=0)return;g.save();g.globalAlpha=a;g.fillStyle='#E9F7FF';g.strokeStyle='#111';g.lineWidth=12;g.beginPath();g.arc(x,y,R,0,7);g.fill();g.stroke();g.beginPath();g.arc(x,y,R-6,0,7);g.clip();
  for(let i=0;i<14;i++){const a2=hash(i*2.3)*PI*2,rr2=hash(i*4.1)*R*0.75;const px=x+Math.cos(a2+t*0.3)*rr2,py=y+Math.sin(a2+t*0.3)*rr2;g.save();g.translate(px,py);g.rotate(t*(i%2?1:-1)+i);g.fillStyle=['#5BE37A','#B07ADB','#FF8A6A'][i%3];g.beginPath();g.ellipse(0,0,26,14,0,0,7);g.fill();g.lineWidth=4;g.stroke();
    g.beginPath();for(let k=0;k<6;k++){const aa=k/6*PI*2;g.moveTo(Math.cos(aa)*24,Math.sin(aa)*13);g.lineTo(Math.cos(aa)*36,Math.sin(aa)*20)}g.stroke();g.restore()}g.restore();
  g.save();g.globalAlpha=a;g.strokeStyle='#111';g.lineWidth=26;g.lineCap='round';g.beginPath();g.moveTo(x+R*0.72,y+R*0.72);g.lineTo(x+R*1.15,y+R*1.15);g.stroke();g.strokeStyle='#8A5A2B';g.lineWidth=14;g.stroke();g.restore()}
function flame2D(x,y,s,t){g.save();g.translate(x,y);g.scale(s,s);for(let i=0;i<3;i++){g.fillStyle=['#FF4A1A','#FF8A1F','#FFE14D'][i];g.strokeStyle='#111';g.lineWidth=i?0:8;const hh=110-i*30+8*Math.sin(t*12+i);g.beginPath();g.moveTo(-50+i*14,40);g.quadraticCurveTo(-60+i*10,-hh*0.4,0,-hh);g.quadraticCurveTo(60-i*10,-hh*0.4,50-i*14,40);g.closePath();if(!i)g.stroke();g.fill()}g.restore()}
function smoke2D(x,y,s,t){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=8;for(const [px,py,r] of [[-40,10,42],[20,-10,52],[60,20,36],[0,30,40]]){g.fillStyle='#7A7A86';g.beginPath();g.arc(px,py+4*Math.sin(t*2+px),r,0,7);g.fill();g.stroke()}for(const [px,py,r] of [[-40,10,42],[20,-10,52],[60,20,36],[0,30,40]]){g.fillStyle='#8E8E9A';g.beginPath();g.arc(px,py+4*Math.sin(t*2+px),r-8,0,7);g.fill()}g.restore()}
function shiverPose(t,o={}){const q=0.03*Math.sin(t*55);return {armL:[0.9,0.6],armR:[0.9,-0.6],bendL:1.9,bendR:1.9,yaw:q,jump:0.005*Math.sin(t*60),mouth:'teeth',teethGap:0.6+0.4*Math.sin(t*40),blink:BLINK(t),...o}}
function dayPill(s,x,y,col,t,t0,t1){pill(s,x,y,56,col,col===GOLD||col===GREEN||col===CYAN?'#111':'#fff',t,t0,t1)}
function stamp(s,x,y,size,col,t,t0,rot=-0.12){if(t<t0)return;const k=seg(t,t0,t0+0.2),sc=lerp(2.2,1,easeOut(k));g.save();g.globalAlpha=k;g.translate(x,y);g.rotate(rot);g.scale(sc,sc);g.font=`900 ${size}px Inter`;const w=g.measureText(s).width+size*0.8;g.strokeStyle=col;g.lineWidth=12;rr(-w/2,-size*0.75,w,size*1.5,18);g.stroke();txt(s,0,4,size,{fill:col,sw:size*0.18});g.restore()}
