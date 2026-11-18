// ===== Could you survive jumping off a skyscraper into the ocean like in GTA? =====
const TT=22.4;
guy.outfit({snapback:1,chain:1,shades:1});
const TOP=60;
BUILD.tower=()=>{const S=new THREE.Scene();lights(S);const o={S};
  part(S,new THREE.PlaneGeometry(1200,1200),toon(0x2E9FD8),[0,0,0],[1,1,1],[-PI/2,0,0],0);
  for(let i=0;i<160;i++)part(S,new THREE.PlaneGeometry(2+hash(i)*5,0.25),basic(0xBFEFFF),[(hash(i*3)-0.5)*300,0.03,(hash(i*7)-0.2)*260],[1,1,1],[-PI/2,0,0],0);
  // beach + boardwalk behind tower
  part(S,new THREE.BoxGeometry(600,0.6,40),toon(0xF2D59A),[0,0.1,-30],[1,1,1],[0,0,0],0.02);
  for(let k=-14;k<14;k++)palm(S,k*9+3,-14,2.2,0.15,hash(k)*6);
  const pal=[0xFF8FB1,0x7FE0D6,0xFFD27F,0xB59CFF,0xFFB38A,0x8FD0FF];
  for(let i=0;i<22;i++){const x=(i-11)*16+(hash(i)-0.5)*6;if(Math.abs(x)<10)continue;const h=12+hash(i*5)*34,w=9+hash(i*3)*5;const tx=winTex(i+40);tx.repeat.set(3,Math.round(h/4));part(S,new THREE.BoxGeometry(w,h,9),tmat(pal[i%6],tx),[x,h/2,-40-hash(i*9)*20],[1,1,1],[0,0,0],0.03)}
  // the tower (at the water's edge on a pier)
  const tw=new THREE.Group();S.add(tw);const tx=winTex(7,0.7);tx.repeat.set(3,18);part(tw,new THREE.BoxGeometry(8,TOP,8),tmat(0xE9E4F5,tx),[0,TOP/2,-1.5],[1,1,1],[0,0,0],0.05);
  part(tw,new THREE.BoxGeometry(14,1.2,14),toon(0xC9B79A),[0,0.6,-1.5],[1,1,1],[0,0,0],0.03);
  part(tw,new THREE.BoxGeometry(8.4,0.5,8.4),toon(0xBDB3D6),[0,TOP+0.25,-1.5],[1,1,1],[0,0,0],0.02);
  for(const [x,z,w,d] of [[0,-5.55,8.4,0.3],[-4.05,-1.5,0.3,8.4],[4.05,-1.5,0.3,8.4]])part(tw,new THREE.BoxGeometry(w,0.6,d),toon(0x8E84B0),[x,TOP+0.8,z],[1,1,1],[0,0,0],0.015);
  part(tw,new THREE.BoxGeometry(1.6,1.6,1.6),toon(0x6E6690),[-2.4,TOP+1.3,-3.6],[1,1,1],[0,0,0],0.02);part(tw,cap(0.06,3),toon(0x333344),[2.6,TOP+2.0,-4.2]);part(tw,SPH,basic(0xFF3030),[2.6,TOP+3.6,-4.2],[0.15,0.15,0.15],[0,0,0],0);
  part(tw,new THREE.BoxGeometry(8.3,0.18,0.14),basic(0xFF3DA6),[0,TOP-0.6,2.55],[1,1,1],[0,0,0],0);
  // cliff for record dive
  const cl=new THREE.Group();cl.position.set(-150,0,0);S.add(cl);o.cliff=cl;const RK=toon(0x9C7A5A),RK2=toon(0x7E5F44);
  for(let i=0;i<9;i++)part(cl,new THREE.BoxGeometry(14-i*0.6,4,12-i*0.4),i%2?RK:RK2,[-(i%3)*0.4,2+i*3.6,-4],[1,1,1],[0,0.08*i,0],0.03);
  part(cl,SPH,toon(0x4FB860),[0,34.5,-4],[6,1.5,5],[0,0,0],0.02);part(cl,new THREE.BoxGeometry(1.4,0.25,4),toon(0xF4F4F8),[0,33.2,3.4],[1,1,1],[0,0,0],0.01);
  o.cam=new THREE.PerspectiveCamera(30,W/H,0.1,2000);o.shot=(p,l,f=30)=>{o.cam.fov=f;o.cam.updateProjectionMatrix();o.cam.position.set(...p);o.cam.lookAt(...l);setBG('sunset');r.render(o.S,o.cam)};return o};
const GP=[0,TOP+0.5,2.25];
const C0={p:[4.5,TOP+0.5,10],l:[0,TOP+1.9,2.2]};
function edgeGuy(T,t,o={}){putGuy(T.S,...GP,0);guy.pose({armL:[0.9+0.15*Math.sin(t*2*PI/2),0],armR:[0.9-0.15*Math.sin(t*2*PI/2),0],mouth:'o',mouthSize:0.7,lookY:-0.9,headPitch:0.35,blink:BLINK(t),...o})}
function streaks2(t,sp,a=0.7){g.save();g.lineCap='round';for(let i=0;i<40;i++){const x=hash(i*3.7)*W,len=120+hash(i*5.1)*300*sp,y=H-(((hash(i*9.3)*H+t*(1800+hash(i)*1400)*sp)%(H+500)))+200;g.strokeStyle=`rgba(255,255,255,${a*(0.25+0.5*hash(i*2.2))})`;g.lineWidth=5+hash(i*8)*7;g.beginPath();g.moveTo(x,y);g.lineTo(x,y+len);g.stroke()}g.restore()}
function kmh(v){g.save();g.translate(W/2,300);panel(0,0,640,170);txt(Math.round(v).toString(),60,-4,110,{stroke:0,align:'right'});txt('KM/H',90,10,60,{stroke:0,fill:'#FFD23F',align:'left'});g.restore()}
function molecule(x,y,R){g.fillStyle='#4FB8FF';g.strokeStyle='#0B3D66';g.lineWidth=5;g.beginPath();g.arc(x,y,R,0,7);g.fill();g.stroke();g.fillStyle='rgba(255,255,255,0.6)';g.beginPath();g.arc(x-R*0.3,y-R*0.3,R*0.3,0,7);g.fill()}
function yrgIcon(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#14939A';g.strokeStyle='#111';g.lineWidth=7;rr(-55,-10,110,120,40);g.fill();g.stroke();g.fillStyle='#FFCC2E';g.beginPath();g.arc(0,-55,50,0,7);g.fill();g.stroke();g.fillStyle='#3A2A20';g.beginPath();g.arc(0,-70,48,PI*1.05,PI*1.95);g.fill();
  g.strokeStyle='#111';g.lineWidth=5;for(const sx of [-18,18]){g.beginPath();g.arc(sx,-52,13,0,7);g.stroke()}g.fillStyle='#3A2A20';g.fillRect(-20,-30,40,8);g.restore()}
window.render=function(t){g.clearRect(0,0,W,H);hideProps();const T=scene('tower');
  if(t<4.72){const k=ease(seg(t,0.4,4.72));edgeGuy(T,t,{});T.shot(mix(C0.p,[3.8,TOP+0.6,8.4],k),C0.l);
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,4.4,4.7));g.save();g.globalAlpha=a;txt('COULD YOU SURVIVE JUMPING OFF',W/2,215,52,{sw:13});txt('A SKYSCRAPER',W/2,310,96,{fill:'#FFD23F',sw:20});txt('INTO THE OCEAN?',W/2,418,92,{fill:'#3FF0FF',sw:20});g.restore();
    comic('GULP.',W*0.75,1100,90,t,2.5,{life:1.2,rot:0.08,fill:'#fff'})}
  else if(t<6.52){edgeGuy(T,t,{armL:[0.5,0],armR:[0.5,0]});const k=ease(seg(t,4.72,6.5));T.shot(mix([34,40,105],[42,36,135],k),[0,31,0]);flash(t,4.72,0.15);
    const a=proj(new THREE.Vector3(5.5,TOP,2.5),T.cam),b=proj(new THREE.Vector3(5.5,0,2.5),T.cam);const gr=easeOut(seg(t,4.9,5.8));
    g.save();g.strokeStyle='#111';g.lineWidth=18;g.beginPath();g.moveTo(a[0]+40,a[1]);g.lineTo(a[0]+40,lerp(a[1],b[1],gr));g.stroke();g.strokeStyle='#FFD23F';g.lineWidth=9;g.stroke();for(const yy of [a[1],lerp(a[1],b[1],gr)]){g.lineWidth=9;g.beginPath();g.moveTo(a[0]+15,yy);g.lineTo(a[0]+65,yy);g.stroke()}g.restore();
    if(gr>0.5)pill('100 M',a[0]+40+150,(a[1]+b[1])/2,72,'#FFD23F','#111',t,5.3,6.52);comic('YOU',a[0]-100,a[1]-60,60,t,4.9,{life:1.6,fill:'#fff'})}
  else if(t<10.5){const S=scene('stage');setBG('linear-gradient(#FF9E6B,#FFD58A 60%,#8FD8FF)');const k=seg(t,6.52,10.5);streaks2(t,0.6+k,0.8);
    putGuy(S.S,Math.sin(t*2.1)*0.1,Math.sin(t*3)*0.06-0.1,0,0.3*Math.sin(t*1.3));guy.pose({armL:[2.5+0.45*Math.sin(t*12),0],armR:[2.5+0.45*Math.cos(t*11),0],legL:[0.4+0.3*Math.sin(t*9),0.5,0],legR:[0.4+0.3*Math.cos(t*9),0.5,0],mouth:'o',mouthSize:1.6,wide:true,tilt:0.15*Math.sin(t*2)});
    S.shot([0,1.0,7.2],[0,1.0,0]);const ob=seg(t,8.8,10.5);if(ob>0){const y=lerp(H+40,H*0.82,ob*ob);g.fillStyle='#2E9FD8';g.fillRect(0,y,W,H-y);g.fillStyle='#BFEFFF';for(let i=0;i<14;i++)g.fillRect(hash(i)*W,y+30+hash(i*3)*(H-y),70+hash(i*5)*90,10)}
    kmh(lerp(0,150,Math.min(1,Math.pow(seg(t,6.7,10.1),0.75))));flash(t,6.52,0.15);comic('AAAAH!',W*0.72,620,100,t,6.9,{life:1.4,rot:0.08,fill:'#fff'});}
  else if(t<13.8){clear3d();setBG('blue');flash(t,10.5,0.15);const top=980,R=46,sp=104;
    const hitT=11.9,dy=easeOut(seg(t,10.6,hitT));const yy=lerp(420,top-70,dy);
    for(let j=0;j<8;j++)for(let i=0;i<10;i++){const ox=(i-4.5)*sp+(j%2)*sp/2,oy=top+j*sp*0.86;const near=Math.hypot(ox,oy-top)<250;const jig=t>hitT&&near?Math.min(1,(t-hitT)*4)*8*Math.sin(t*40+i+j):0;molecule(W/2+ox+jig,oy,R)}
    g.strokeStyle='#fff';g.lineWidth=6;g.setLineDash([24,16]);g.beginPath();g.moveTo(0,top-R-8);g.lineTo(W,top-R-8);g.stroke();g.setLineDash([]);
    yrgIcon(W/2,yy,1.6);if(t<hitT)arrow(W/2+200,yy-120,W/2+200,yy+40,'#FFD23F',22);
    panel(W/2,300,760,150);txt('WATER MOLECULES',W/2,270,56,{stroke:0,fill:'#4FB8FF'});txt('CAN\'T MOVE IN TIME',W/2,335,48,{stroke:0});
    comic('BLOCKED!',W*0.5,610,96,t,12.3,{life:1.4,rot:-0.06,fill:'#FF4A4A'})}
  else if(t<16.0){const T2=T;const imp=14.75;let y=lerp(9,TOP*0+0.35,seg(t,13.8,imp)*seg(t,13.8,imp));putGuy(T2.S,30,y,20,0);holder.rotation.set(PI/2-0.1,0,0);
    guy.pose({armL:[1.4,0],armR:[1.4,0],legL:[0.1,0.2,0],legR:[0.1,0.2,0],mouth:t>imp?'teeth':'o',mouthSize:1.4,wide:true,teethGap:0.2});
    const sh=t>imp&&t<imp+0.35?Math.sin(t*90)*0.15*(1-(t-imp)/0.35):0;T2.shot([20+sh,5.5,32],[30,1.2,19.5]);flash(t,13.8,0.15);
    if(t>imp){const d=t-imp;const c=proj(new THREE.Vector3(30,0.3,20),T2.cam);g.save();for(let i=0;i<34;i++){const a=hash(i*4.4)*PI,v=300+hash(i*7.1)*700,x=c[0]+Math.cos(a)*v*d*1.2*(i%2?1:-1),yy=c[1]-Math.sin(a)*v*d*1.6+900*d*d;g.globalAlpha=Math.max(0,1-d/1.1);g.fillStyle=i%3?'#FFFFFF':'#BFEFFF';g.beginPath();g.arc(x,yy,14+hash(i)*14,0,7);g.fill()}
      g.globalAlpha=Math.max(0,1-d/1.2);g.strokeStyle='#fff';g.lineWidth=14;g.beginPath();g.ellipse(c[0],c[1],60+d*520,18+d*120,0,0,7);g.stroke();g.restore()}
    comic('SPLAT!',W*0.5,700,140,t,imp,{life:0.9,rot:-0.08,fill:'#fff'});
    if(t>15.0){const a=easeOut(seg(t,15.0,15.3));g.save();g.globalAlpha=a;panel(W/2,330,720,170,'#8E8E96','#111');g.fillStyle='#6E6E76';for(let i=0;i<9;i++){g.beginPath();g.arc(W/2-300+hash(i)*600,290+hash(i*3)*80,6+hash(i*5)*10,0,7);g.fill()}txt('= CONCRETE',W/2,332,84,{sw:16});g.restore()}}
  else if(t<18.9){const cl=T.cliff;putGuy(T.S,-150,33.32,3.6,0);const prep=seg(t,17.6,18.1);guy.pose({armL:[lerp(0.4,2.95,prep),0],armR:[lerp(0.4,2.95,prep),0],mouth:'grin',blink:BLINK(t),lookY:-0.6*(1-prep),headPitch:0.25*(1-prep)});
    const k=ease(seg(t,16.0,18.9));T.shot(mix([-138,36,22],[-142,35.5,17],k),[-150,33.6,1.5]);flash(t,16.0,0.15);
    pill('HIGHEST DIVE EVER?',W/2,330,62,'#fff','#111',t,16.3,18.85);comic('?!',W*0.75,820,110,t,17.0,{life:1.2,fill:'#FFD23F'})}
  else if(t<20.8){clear3d();setBG('teal');flash(t,18.9,0.15);const base=1340,sc=8.6,g1=easeOut(seg(t,19.0,19.6)),g2=easeOut(seg(t,19.3,20.0));
    g.fillStyle='#2E9FD8';g.fillRect(0,base,W,H-base);
    const bw=230;g.fillStyle='#E9E4F5';g.strokeStyle='#111';g.lineWidth=8;rr(W*0.3-bw/2,base-100*sc*g1,bw,100*sc*g1,12);g.fill();g.stroke();
    g.fillStyle='#9C7A5A';rr(W*0.7-bw/2,base-59*sc*g2,bw,59*sc*g2,12);g.fill();g.stroke();
    if(g1>0.9){txt('100 M',W*0.3,base-100*sc-60,72,{fill:'#FF4A4A',sw:16});cross(W*0.3,base-100*sc/2,1.4)}
    if(g2>0.9){txt('59 M',W*0.7,base-59*sc-60,72,{fill:'#5BE37A',sw:16});txt('RECORD',W*0.7,base-59*sc-130,48,{fill:'#FFD23F',sw:12});check(W*0.7,base-59*sc/2,1.4)}
    }
  else{const k=ease(seg(t,20.8,21.9));edgeGuy(T,t-TT,{});T.shot(mix([8,TOP+2.5,13],C0.p,k),C0.l);flash(t,20.8,0.15)}
  vignette();captions(t)};
