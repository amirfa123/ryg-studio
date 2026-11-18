// ===== How long would it take YOU to earn Elon Musk's money? (wildcard/money) =====
const TT=22.35;
guy.outfit({chain:1});
const MY=[];function myProp(name,build){const p=stageProp(name,build);if(!MY.includes(name))MY.push(name);return p}
function only(...n){const s=scene('stage');for(const k of MY)s[k].visible=n.includes(k)}
const GREEN=0x5BC26A,BAND=0xF5F0D0;
function brick(p,x,y,z,ry=0){part(p,new THREE.BoxGeometry(0.62,0.14,0.3),toon(GREEN),[x,y,z],[1,1,1],[0,ry,0],0.008);part(p,new THREE.BoxGeometry(0.1,0.145,0.305),toon(BAND),[x,y,z],[1,1,1],[0,ry,0],0)}
function setup(){
  myProp('floor',p=>{part(p,new THREE.CircleGeometry(30,48),toon(0x6B4E1F),[0,0,0],[1,1,1],[-PI/2,0,0],0);part(p,new THREE.CircleGeometry(3.2,48),toon(0x8A6A2E),[0,0.005,0],[1,1,1],[-PI/2,0,0],0)});
  myProp('table',p=>{p.position.set(-1.05,0,0.2);part(p,new THREE.CylinderGeometry(0.42,0.42,0.06,28),toon(0xF4EBD9),[0,0.95,0],[1,1,1],[0,0,0],0.01);part(p,cap(0.04,0.85),toon(0x8C5E36),[0,0.5,0]);part(p,new THREE.CylinderGeometry(0.25,0.3,0.05,20),toon(0x8C5E36),[0,0.03,0],[1,1,1],[0,0,0],0.008);brick(p,0,1.05,0,0.3)});
  myProp('pile',p=>{const gb=new THREE.BoxGeometry(0.62,0.14,0.3),n=[];let c=0;const L=10;for(let l=0;l<L;l++){const w=L-l;for(let i=0;i<w*2;i++)for(let j=0;j<w;j++)n.push([(i-(w*2-1)/2)*0.64,0.07+l*0.145,-2.2-(j-(w-1)/2)*0.32-l*0.02])}
    const im=new THREE.InstancedMesh(gb,toon(GREEN),n.length),ib=new THREE.InstancedMesh(new THREE.BoxGeometry(0.1,0.145,0.305),toon(BAND),n.length),M=new THREE.Matrix4();n.forEach((q,i)=>{M.makeTranslation(...q);im.setMatrixAt(i,M);ib.setMatrixAt(i,M)});p.add(im);p.add(ib);p.scale.setScalar(1.6);
    const rk=new THREE.Group();rk.position.set(-6.5,0,-6);p.add(rk);part(rk,new THREE.CylinderGeometry(0.5,0.5,4.4,24),toon(0xF4F4F8),[0,2.4,0],[1,1,1],[0,0,0],0.02);part(rk,new THREE.ConeGeometry(0.5,1.2,24),toon(0xE23B3B),[0,5.2,0],[1,1,1],[0,0,0],0.02);for(let k=0;k<3;k++){const a=k/3*PI*2;part(rk,new THREE.BoxGeometry(0.08,1.0,0.8),toon(0xE23B3B),[Math.sin(a)*0.55,0.6,Math.cos(a)*0.55],[1,1,1],[0,a,0],0.01)}part(rk,SPH,basic(0x7FD3FF),[0,3.6,0.48],[0.18,0.18,0.06],[0,0,0],0.006);
    const car=makeCar(0x3FA0FF);car.c.position.set(6.2,0,-4.5);car.c.rotation.y=-0.6;p.add(car.c)});
  myProp('desk',p=>{part(p,new THREE.BoxGeometry(2.2,0.08,0.9),toon(0xEDE2CC),[0,0.96,0.95],[1,1,1],[0,0,0],0.012);for(const x of [-1.0,1.0])part(p,new THREE.BoxGeometry(0.08,0.92,0.8),toon(0xD7CBB3),[x,0.46,0.95],[1,1,1],[0,0,0],0.008);
    part(p,new THREE.BoxGeometry(0.7,0.04,0.42),toon(0x9AA0AA),[0,1.02,0.78],[1,1,1],[0,0,0],0.008);const sc=canvasTex(320,200);p.userData.scr=sc;const lid=new THREE.Group();lid.position.set(0,1.03,1.0);lid.rotation.x=0.22;p.add(lid);part(lid,new THREE.BoxGeometry(0.7,0.46,0.03),toon(0x9AA0AA),[0,0.23,0],[1,1,1],[0,0,0],0.008);part(lid,new THREE.PlaneGeometry(0.64,0.4),new THREE.MeshBasicMaterial({map:sc.tx}),[0,0.23,-0.017],[1,1,1],[0,PI,0],0);
    part(p,new THREE.BoxGeometry(0.8,0.12,0.7),toon(0x3B4A66),[0,0.56,-0.05],[1,1,1],[0,0,0],0.01);part(p,new THREE.BoxGeometry(0.8,0.9,0.12),toon(0x3B4A66),[0,1.05,-0.42],[1,1,1],[0,0,0],0.01);part(p,cap(0.05,0.3),toon(0x222230),[0,0.28,-0.05]);
    part(p,new THREE.CylinderGeometry(0.08,0.07,0.2,16),toon(0xFF8FB1),[0.8,1.1,0.9],[1,1,1],[0,0,0],0.006)});
  myProp('rain',p=>{p.userData.b=[];for(let i=0;i<46;i++){const b=part(p,new THREE.BoxGeometry(0.42,0.01,0.2),toon(i%4?GREEN:0x7FD98A),[0,0,0],[1,1,1],[0,0,0],0.006);p.userData.b.push(b)}});
}
function laptop(s,t){const sc=s.desk.userData.scr,c=sc.ctx;c.fillStyle='#F4F7FB';c.fillRect(0,0,320,200);c.fillStyle='#2E86DE';c.fillRect(0,0,320,34);c.font='900 22px Inter';c.fillStyle='#fff';c.textAlign='left';c.fillText('PAYROLL',12,24);
  c.fillStyle='#222';c.font='700 20px Inter';for(let i=0;i<4;i++){c.fillText('MONTH '+(i+1),14,66+i*34);c.fillText('$5,000',200,66+i*34)}c.fillStyle='#5BC26A';c.fillRect(190,46+((Math.floor(t*3))%4)*34,110,28);c.fillStyle='#fff';c.fillText('$5,000',200,66+((Math.floor(t*3))%4)*34);sc.tx.needsUpdate=true}
const big=v=>{const s=Math.round(v).toLocaleString('en-US');return '$'+s};
function iss(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#BFC3CC';g.strokeStyle='#111';g.lineWidth=5;g.fillRect(-90,-6,180,12);g.strokeRect(-90,-6,180,12);for(const sx of [-1,1])for(const k of [0,1]){g.fillStyle='#2E5FA8';const px=sx*(60+k*0)-(sx<0?40:0),py=k?8:-48;g.fillRect(sx*70-20,k?10:-50,40,40);g.strokeRect(sx*70-20,k?10:-50,40,40)}g.fillStyle='#F4F4F8';rr(-22,-16,44,32,8);g.fill();g.stroke();g.restore()}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();const S=scene('stage');if(!S.floor)setup();only();
  if(t<3.4){setBG('gold');only('floor','table');putGuy(S.S,0.15,0,0,-0.25);guy.pose(idle(t,{reachR:[-0.62,1.2,0.3],mouth:'o',mouthSize:0.8,wide:true,lookY:0.6,look:-0.4,headPitch:-0.2}));
    S.shot(mix([0.6,2.1,8.4],[0.4,1.95,7.4],ease(seg(t,0.3,3.4))),[-0.35,1.45,0]);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,3.1,3.38));g.save();g.globalAlpha=a;txt('HOW LONG WOULD IT TAKE YOU',W/2,215,56,{sw:14});txt('TO EARN',W/2,310,88,{sw:20});txt("ELON MUSK'S MONEY?",W/2,415,88,{fill:'#5BE37A',sw:20});g.restore()}
  else if(t<6.76){setBG('gold');only('floor','pile');putGuy(S.S,0,0,1.6,PI*0.92);const k=ease(seg(t,3.4,6.6));guy.pose(idle(t,{armL:[1.2,0],armR:[1.2,0],bendL:0.4,bendR:0.4,mouth:'o',mouthSize:1.5,wide:true,lookY:0.9,headPitch:-0.4}));
    S.shot(mix([1.2,1.8,6.5],[2.6,4.2,13.5],k),mix([0,1.6,0],[0,3.2,-2],k));flash(t,3.4,0.15);
    panel(W/2,300,900,170);txt(big(850e9*Math.pow(easeOut(seg(t,3.9,6.0)),2)),W/2,300,86,{stroke:0,fill:t>6.0?'#5BE37A':'#fff'});comic('ABOUT!',W*0.78,430,60,t,4.0,{life:1.8,rot:0.1,fill:'#FFD23F'});comic('WOW.',W*0.25,620,100,t,6.0,{life:0.75,rot:-0.1,fill:'#fff'})}
  else if(t<11.5){setBG('blue');only('floor','desk');laptop(S,t);putGuy(S.S,0,0.12,0,0);const ty=0.025*Math.sin(t*22),tz=0.025*Math.cos(t*19);const tired=t>8.8;
    guy.pose({...SIT,reachL:[0.22,1.2+ty,0.62],reachR:[-0.22,1.2-tz,0.62],poleL:[1,-0.4,0],poleR:[-1,-0.4,0],mouth:tired?'o':'smile',mouthSize:0.5,blink:BLINK(t),headPitch:tired?0.25:0.1,headRoll:tired?0.1*Math.sin(t*1.5):0});
    if(t<8.8)S.shot(mix([2.4,2.2,4.6],[2.0,2.1,4.0],seg(t,6.76,8.8)),[0,1.3,0.5]);else S.shot(mix([-2.6,2.0,3.8],[-2.2,1.9,3.3],seg(t,8.8,11.5)),[0,1.35,0.4]);flash(t,6.76,0.15);flash(t,8.8,0.12);
    pill('$60,000 / YEAR',W/2,330,66,'#5BE37A','#111',t,6.9,8.75);
    if(t>8.8){const yrs=14e6*easeOut(seg(t,9.0,10.6));panel(W/2,330,820,190);txt(Math.round(yrs).toLocaleString('en-US'),W/2,305,92,{stroke:0});txt('YEARS OF WORK',W/2,380,46,{stroke:0,fill:'#FFD23F'});
      for(let i=0;i<10;i++){const d=((t-8.8)*1.4+i/10)%1;g.save();g.translate((i%2?W*0.72:W*0.06)+hash(i*3)*W*0.22,560+d*700);g.rotate(d*6+i);g.globalAlpha=1-d;g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=5;g.fillRect(-45,-50,90,100);g.strokeRect(-45,-50,90,100);g.fillStyle='#E23B3B';g.fillRect(-45,-50,90,26);g.restore()}}}
  else if(t<16.1){setBG('teal');only('floor','rain');putGuy(S.S,0,0,0,0);const late=t>14.05;
    guy.pose(late?{armL:[0.25,0],armR:[0.25,0],mouth:'o',mouthSize:0.7,headPitch:0.15,blink:BLINK(t)}:{armL:[2.5+0.2*Math.sin(t*6),0],armR:[2.5+0.2*Math.cos(t*6),0],bendL:0.3,bendR:0.3,mouth:'grin',jump:0.08*Math.abs(Math.sin(t*5))});
    S.rain.userData.b.forEach((b,i)=>{const sp=1.2+hash(i)*0.8,ph=(hash(i*7)*4+(t-11.5)*sp)%4;b.position.set((hash(i*3)-0.5)*4,4.2-ph*1.2,(hash(i*5)-0.5)*2.5);b.rotation.set(t*2+i,t*1.3+i*2,0.4*Math.sin(t*3+i));b.visible=!late||ph<0.3});
    S.shot(mix([0.8,1.9,6.2],[0.4,1.7,5.0],seg(t,11.5,16.1)),[0,1.5,0]);flash(t,11.5,0.15);
    const secs=Math.floor(Math.max(0,t-11.6)*4);panel(W/2,330,820,190);txt(big(1000*secs),W/2,305,92,{stroke:0,fill:'#5BE37A'});txt('+$1,000 EVERY SECOND',W/2,380,44,{stroke:0,fill:'#FFD23F'});
    pill('27 YEARS',W/2,620,96,'#FF4A4A','#fff',t,14.4,16.05);comic('...',W*0.72,900,120,t,15.0,{life:1.0,fill:'#fff'})}
  else if(t<20.72){clear3d();flash(t,16.1,0.15);const sky=g.createLinearGradient(0,0,0,H);sky.addColorStop(0,'#03040C');sky.addColorStop(0.55,'#0B1640');sky.addColorStop(0.82,'#2E6FD6');sky.addColorStop(1,'#8FD0FF');g.fillStyle=sky;g.fillRect(0,0,W,H);
    for(let i=0;i<70;i++){g.fillStyle=`rgba(255,255,255,${0.3+0.5*hash(i*2)})`;g.beginPath();g.arc(hash(i*3.1)*W,hash(i*7.7)*H*0.6,1.5+hash(i)*2.5,0,7);g.fill()}
    const base=1720,kpx=(H-base-0)?1.45:1.45;const y=km=>base-km*kpx;
    g.fillStyle='#4FB860';g.beginPath();g.ellipse(W/2,base+1400,2400,1400,0,PI,2*PI);g.fill();g.strokeStyle='#111';g.lineWidth=8;g.stroke();
    g.strokeStyle='rgba(255,255,255,0.35)';g.lineWidth=3;g.setLineDash([14,14]);for(const km of [400,928]){g.beginPath();g.moveTo(0,y(km));g.lineTo(W,y(km));g.stroke()}g.setLineDash([]);
    const h=928*easeOut(seg(t,16.4,19.4));g.fillStyle='#5BC26A';g.strokeStyle='#111';g.lineWidth=6;g.fillRect(W*0.62-22,y(h),44,h*kpx);g.strokeRect(W*0.62-22,y(h),44,h*kpx);for(let k=y(h)+30;k<base;k+=60){g.fillStyle='#F5F0D0';g.fillRect(W*0.62-22,k,44,8)}
    iss(W*0.3,y(400),1.1);txt('SPACE STATION',W*0.3,y(400)+90,40,{sw:10});txt('~400 KM',W*0.3,y(400)+135,36,{fill:'#9DD8FF',sw:9});
    if(h>900){txt('~930 KM',W*0.62,y(928)-60,64,{fill:'#5BE37A',sw:14});pill('2X HIGHER!',W*0.3,600,66,'#FFD23F','#111',t,19.4,20.7)}
    yrgIcon(W*0.42,base-50,0.7);txt('$100 BILLS',W*0.62+150,base-140,40,{sw:10,fill:'#fff'})}
  else{setBG('gold');only('floor','table');const k=ease(seg(t,20.72,21.8));putGuy(S.S,0.15,0,0,-0.25);guy.pose(idle(t-TT,{reachR:[-0.62,1.2,0.3],mouth:'o',mouthSize:0.8,wide:true,lookY:0.6,look:-0.4,headPitch:-0.2}));S.shot(mix([1.8,2.6,9.4],[0.6,2.1,8.4],k),[-0.35,1.45,0]);flash(t,20.72,0.15)}
  vignette();captions(t)};
function yrgIcon(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#14939A';g.strokeStyle='#111';g.lineWidth=7;rr(-55,-10,110,120,40);g.fill();g.stroke();g.fillStyle='#FFCC2E';g.beginPath();g.arc(0,-55,50,0,7);g.fill();g.stroke();g.fillStyle='#3A2A20';g.beginPath();g.arc(0,-70,48,PI*1.05,PI*1.95);g.fill();g.strokeStyle='#111';g.lineWidth=5;for(const sx of [-18,18]){g.beginPath();g.arc(sx,-52,13,0,7);g.stroke()}g.fillStyle='#3A2A20';g.fillRect(-20,-30,40,8);g.restore()}
