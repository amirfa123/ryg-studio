// ===== lib4: "How do you get rich fast in GTA 6?" helpers =====
guy.outfit({snapback:1,chain:1,shades:1,capColor:0x3FF0FF});
const SUNSET='radial-gradient(circle at 72% 58%,#FFF0A0 0,#FFD27A 5%,rgba(255,180,107,0) 12%),'+BGS.sunset;
const GREEN='#5BE37A',GOLD='#FFD23F',PINK='#FF3DA6',CYAN='#3FF0FF',RED='#FF4A4A';
// small original prop plane (sky scene)
function makePlane(){const p=new THREE.Group();const B=toon(0xF4F4F8),A=toon(0xFF3DA6),K=toon(0x2A2A35),G=new THREE.MeshToonMaterial({color:0x7FD3FF,transparent:true,opacity:0.55,gradientMap:GM});
  part(p,cap(0.55,3.4),B,[0,0,0],[1,1,1],[0,0,PI/2],0.02);part(p,SPH,A,[1.95,0,0],[0.3,0.42,0.42],[0,0,0],0.01);
  const prop=new THREE.Group();prop.position.set(2.2,0,0);p.add(prop);part(prop,new THREE.BoxGeometry(0.06,1.5,0.14),K,[0,0,0],[1,1,1],[0,0,0],0.006);
  part(p,new THREE.BoxGeometry(1.0,0.1,6.2),B,[0.35,0.25,0],[1,1,1],[0,0,0],0.015);for(const z of [-3.0,3.0])part(p,new THREE.BoxGeometry(1.02,0.11,0.4),A,[0.35,0.25,z],[1,1,1],[0,0,0],0);
  part(p,new THREE.BoxGeometry(0.6,0.08,2.0),B,[-2.0,0.2,0],[1,1,1],[0,0,0],0.01);part(p,new THREE.BoxGeometry(0.7,0.9,0.08),A,[-2.0,0.6,0],[1,1,1],[0,0,0],0.01);
  part(p,SPH,G,[0.55,0.55,0],[0.75,0.45,0.48],[0,0,0],0.01);
  const seat=new THREE.Group();seat.position.set(0.45,0.05,0);p.add(seat);
  for(const z of [-0.5,0.5]){part(p,cap(0.04,0.5),K,[0.6,-0.65,z],[1,1,1],[0,0,0]);part(p,new THREE.CylinderGeometry(0.2,0.2,0.12,18),K,[0.6,-0.95,z],[1,1,1],[PI/2,0,0],0.01)}
  return {p,prop,seat}}
function pilotIn(P,t,o={}){P.seat.add(holder);holder.position.set(-0.15,-0.25,0);holder.rotation.set(0,PI/2,0);holder.scale.setScalar(0.62);
  guy.pose({...SIT,reachL:[0.15,1.15,0.55],reachR:[-0.15,1.15,0.55],blink:BLINK(t),mouth:'grin',...o})}
// piggy bank (stage prop)
function piggy(gr){const P=toon(0xFF9EC4),D=toon(0xE0709A);part(gr,SPH,P,[0,0.62,0],[0.75,0.55,0.55],[0,0,0],0.02);part(gr,new THREE.CylinderGeometry(0.2,0.22,0.16,20),D,[0.75,0.62,0],[1,1,1],[0,0,PI/2],0.01);
  for(const z of [-0.08,0.08])part(gr,SPH,toon(0x8A2F55),[0.84,0.64,z],[0.02,0.04,0.03],[0,0,0],0);for(const z of [-0.28,0.28]){part(gr,new THREE.ConeGeometry(0.12,0.22,12),D,[0.45,1.1,z],[1,1,1],[0,0,0],0.008);part(gr,SPH,toon(0x222230),[0.62,0.8,z*0.75],[0.05,0.06,0.05],[0,0,0],0)}
  for(const [x,z] of [[0.38,0.28],[0.38,-0.28],[-0.38,0.28],[-0.38,-0.28]])part(gr,new THREE.CylinderGeometry(0.1,0.1,0.25,12),D,[x,0.13,z],[1,1,1],[0,0,0],0.008);
  part(gr,new THREE.BoxGeometry(0.34,0.03,0.06),toon(0x5A2040),[0,1.17,0],[1,1,1],[0,0,0],0)}
// table (stage prop)
function table(gr,w=2.2){const T=toon(0x8C5E36);part(gr,new THREE.BoxGeometry(w,0.1,1.0),T,[0,1.0,0],[1,1,1],[0,0,0],0.01);for(const x of [-w/2+0.12,w/2-0.12])for(const z of [-0.38,0.38])part(gr,new THREE.BoxGeometry(0.1,1.0,0.1),T,[x,0.5,z],[1,1,1],[0,0,0],0.005)}
// 2D helpers
function moneyPanel(x,y,v,label,col=GREEN,w=760){panel(x,y,w,190,'rgba(10,12,25,0.88)',col,30);if(label)txt(label,x,y-52,36,{stroke:0,fill:'#fff'});txt(moneyStr(v),x,y+22,100,{stroke:0,fill:col})}
function counterBar(x,y,v,goal,col=GREEN,lab){const w=820;panel(x,y,w,200,'rgba(10,12,25,0.88)',col,30);txt(moneyStr(v),x,y-20,96,{stroke:0,fill:col});bar(x-w/2+40,y+50,w-80,30,v/goal,col);if(lab)txt(lab,x,y-140,40,{sw:10})}
function bigNum(s,x,y,size,a,col='#fff'){if(a<=0)return;g.save();g.translate(x,y);const k=0.6+0.4*clamp(a);g.scale(k,k);g.globalAlpha=clamp(a*1.5);txt(s,0,0,size,{fill:col,sw:size*0.18});g.restore()}
function guidePage(x,y,s,rot,col){g.save();g.translate(x,y);g.rotate(rot);g.scale(s,s);g.fillStyle='rgba(0,0,0,0.3)';rr(-110,-140,230,290,16);g.fill();g.fillStyle='#FFFDF4';g.strokeStyle='#111';g.lineWidth=6;rr(-120,-150,230,290,16);g.fill();g.stroke();
  g.fillStyle=col;rr(-100,-130,190,44,10);g.fill();g.fillStyle='#C9C2B0';for(let i=0;i<6;i++){rr(-100,-66+i*30,i%3===2?120:190,12,6);g.fill()}g.fillStyle=GREEN;g.font='900 40px Inter';g.textAlign='center';g.fillText('$',60,110);g.restore()}
function calc(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#2A2A35';g.strokeStyle='#111';g.lineWidth=8;rr(-90,-130,180,260,22);g.fill();g.stroke();g.fillStyle='#9DFFB0';rr(-70,-110,140,60,10);g.fill();
  for(let i=0;i<3;i++)for(let j=0;j<4;j++){g.fillStyle=(i===2&&j===3)?'#FF8A2B':'#E9E4D6';rr(-70+i*50,-30+j*38,40,30,8);g.fill()}g.restore()}
function lockIcon2(x,y,s,col=GOLD){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=26;g.beginPath();g.arc(0,-30,42,PI,0);g.stroke();g.strokeStyle='#B8BFCC';g.lineWidth=14;g.stroke();g.fillStyle=col;g.lineWidth=8;g.strokeStyle='#111';rr(-62,-30,124,100,16);g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(0,12,12,0,7);g.fill();g.fillRect(-5,12,10,30);g.restore()}
function bag2D(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#3A3A48';g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.moveTo(-70,-30);g.quadraticCurveTo(-90,80,0,80);g.quadraticCurveTo(90,80,70,-30);g.closePath();g.fill();g.stroke();
  g.fillStyle='#2A2A35';rr(-40,-60,80,34,10);g.fill();g.stroke();g.fillStyle=GREEN;g.font='900 70px Inter';g.textAlign='center';g.textBaseline='middle';g.fillText('$',0,25);g.restore()}
function planeIcon(x,y,s,col='#F4F4F8'){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle=col;g.strokeStyle='#111';g.lineWidth=6;rr(-60,-12,120,24,12);g.fill();g.stroke();g.beginPath();g.moveTo(-10,-60);g.lineTo(14,-60);g.lineTo(18,60);g.lineTo(-6,60);g.closePath();g.fill();g.stroke();
  g.beginPath();g.moveTo(-60,-22);g.lineTo(-48,-22);g.lineTo(-44,22);g.lineTo(-56,22);g.closePath();g.fillStyle=PINK;g.fill();g.stroke();g.restore()}
function crate2D(x,y,s,chute=true){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=5;if(chute){g.fillStyle=PINK;g.beginPath();g.arc(0,-80,60,PI,0);g.closePath();g.fill();g.stroke();g.beginPath();g.moveTo(-58,-80);g.lineTo(-22,-22);g.moveTo(58,-80);g.lineTo(22,-22);g.moveTo(0,-80);g.lineTo(0,-22);g.stroke()}
  g.fillStyle='#C9874A';g.fillRect(-28,-22,56,48);g.strokeRect(-28,-22,56,48);g.beginPath();g.moveTo(-28,-22);g.lineTo(28,26);g.stroke();g.restore()}
function target2D(x,y,s){g.save();g.translate(x,y);g.scale(s,0.4*s);for(const [r,c] of [[60,'#FF4A4A'],[40,'#fff'],[20,'#FF4A4A']]){g.fillStyle=c;g.beginPath();g.arc(0,0,r,0,7);g.fill()}g.restore()}
function snail(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#9DFF6B';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(-70,30);g.lineTo(70,30);g.quadraticCurveTo(80,0,60,-10);g.lineTo(-60,10);g.closePath();g.fill();g.stroke();
  g.fillStyle='#FFB36B';g.beginPath();g.arc(-5,-15,45,0,7);g.fill();g.stroke();g.beginPath();g.arc(-5,-15,25,0,5);g.stroke();g.beginPath();g.moveTo(60,-10);g.lineTo(70,-50);g.moveTo(50,-8);g.lineTo(52,-46);g.stroke();g.restore()}
function towTruck2D(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=6;g.fillStyle='#FFB020';rr(-110,-40,150,50,10);g.fill();g.stroke();rr(10,-80,70,90,10);g.fill();g.stroke();g.fillStyle='#7FD3FF';rr(28,-68,40,34,6);g.fill();g.stroke();
  g.beginPath();g.moveTo(-100,-40);g.lineTo(-150,-110);g.lineTo(-170,-10);g.stroke();for(const wx of [-70,40]){g.fillStyle='#222';g.beginPath();g.arc(wx,18,24,0,7);g.fill();g.stroke()}
  g.fillStyle='#3B4A66';rr(-215,-60,70,110,8);g.fill();g.stroke();g.fillStyle=CYAN;g.fillRect(-205,-48,50,24);g.restore()}
function diver2D(x,y,s,t){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='rgba(255,255,255,0.5)';for(let i=0;i<4;i++){g.beginPath();g.arc(60+10*Math.sin(t*3+i),-50-i*36-(t*40%36),8+i*2,0,7);g.fill()}
  g.fillStyle='#FFCC2E';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.ellipse(0,0,70,40,0,0,7);g.fill();g.stroke();g.fillStyle='#7FD3FF';g.beginPath();g.arc(48,-8,22,0,7);g.fill();g.stroke();g.fillStyle='#FF8A2B';rr(-120,-12,50,24,8);g.fill();g.stroke();
  g.fillStyle='#C9874A';rr(-60,60,120,60,8);g.fill();g.stroke();g.fillStyle=GOLD;g.fillRect(-10,60,20,60);g.restore()}
function tierStep(x,y,amt,lab,a,col){if(a<=0)return;g.save();g.globalAlpha=clamp(a*1.4);panel(x,y,420,230,'rgba(10,12,25,0.88)',col,28);txt(amt,x,y-35,72,{stroke:0,fill:col});txt(lab,x,y+50,38,{sw:9});g.restore()}
function slashOver(x,y,w,h,k){if(k<=0)return;g.save();g.strokeStyle=RED;g.lineCap='round';g.lineWidth=22;g.beginPath();g.moveTo(x-w/2,y+h/2);g.lineTo(x-w/2+w*clamp(k),y+h/2-h*clamp(k));g.stroke();g.restore()}
function carGrid(x,y,cols,rows,n,cw=34,ch=20){g.save();for(let i=0;i<n;i++){const cx=x+(i%cols)*(cw+6),cy=y+Math.floor(i/cols)*(ch+6);g.fillStyle=['#FF3D7F','#3FF0FF','#FFD23F','#9DFF6B','#B59CFF'][i%5];g.fillRect(cx,cy,cw,ch-6);g.fillStyle='#111';g.fillRect(cx+4,cy+ch-8,8,6);g.fillRect(cx+cw-12,cy+ch-8,8,6)}g.restore()}
function sparkle(x,y,s,a){if(a<=0)return;g.save();g.translate(x,y);g.scale(s,s);g.globalAlpha=clamp(a);g.fillStyle='#fff';g.beginPath();for(let i=0;i<8;i++){const r=i%2?10:40,an=i/8*PI*2;g.lineTo(Math.cos(an)*r,Math.sin(an)*r)}g.closePath();g.fill();g.restore()}
function stepRoad(t,t0,labels,cur){// horizontal roadmap with numbered stops
  const n=labels.length,y=H*0.5,x0=W*0.1,x1=W*0.9;g.save();g.strokeStyle='#111';g.lineWidth=40;g.lineCap='round';g.beginPath();g.moveTo(x0,y);g.lineTo(x1,y);g.stroke();g.strokeStyle='#3A3A48';g.lineWidth=28;g.stroke();g.setLineDash([30,26]);g.strokeStyle=GOLD;g.lineWidth=5;g.stroke();g.restore();
  labels.forEach((l,i)=>{const tk=t0+i*0.22;if(t<tk)return;const x=lerp(x0,x1,i/(n-1)),s=pop(t,tk);g.save();g.translate(x,y);g.scale(s,s);g.fillStyle=i===cur?GOLD:'#fff';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.arc(0,0,52,0,7);g.fill();g.stroke();g.restore();
    txt(String(i+1),x,y+4,56*s,{fill:'#111',stroke:0});txtA(l,x,y+(i%2?-110:110),34,s,{sw:9})})}
