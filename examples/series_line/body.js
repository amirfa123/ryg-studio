// ===== DAILY SERIES: "Day N of putting my followers in a single-file line around the world" =====
// Needs CFG defined before this file (see series_line/README.md). Uses w_lib.js helpers.
const TT=CFG.TT;
const WD=RAWW.map(w=>w.w.replace(/[^A-Za-z']/g,'').toLowerCase());
const cue=(w,from=0)=>{for(let i=from;i<RAWW.length;i++)if(WD[i]===w)return RAWW[i];return null};
const C={there:cue('there').st,num:RAWW[WD.indexOf('are')+1].st,which:cue('which').st,thats:cue("that's").st,and:cue('and').st,hit:cue('hit').st};
C.cmpWord=RAWW[WD.indexOf('and')-1].st;  // last word of the comparison (Manhattan / marathon / court / field)
C.pctWord=RAWW[WD.indexOf('only')+1].st;
guy.outfit(CFG.outfit||{crown:1,chain:1});
// ---------- 3D line scene ----------
const L=(()=>{const S=new THREE.Scene();lights(S);S.fog=new THREE.Fog(0xCDEBFF,25,150);const o={S};
  part(S,new THREE.PlaneGeometry(600,600),toon(0x7CCB5A),[0,0,-200],[1,1,1],[-PI/2,0,0],0);
  part(S,new THREE.PlaneGeometry(1.5,600),toon(0xE8CF94),[0,0.01,-298],[1,1,1],[-PI/2,0,0],0);
  for(let i=0;i<70;i++)part(S,new THREE.CircleGeometry(0.4+hash(i)*0.6,14),toon(0x6AB84A),[(hash(i*3)-0.5)*30,0.015,4-hash(i*7)*60],[1,1,1],[-PI/2,0,0],0);
  for(let i=0;i<90;i++){const side=i%2?1:-1,x=side*(3.5+hash(i*2.3)*14),z=2-hash(i*5.7)*140,s=0.7+hash(i*9.1)*0.8;const tr=new THREE.Group();tr.position.set(x,0,z);tr.scale.setScalar(s);S.add(tr);
    part(tr,cap(0.12,0.9),toon(0x8A5A2B),[0,0.55,0],[1,1,1],[0,0,0],0.01);part(tr,SPH,toon(i%3?0x3DAA5A:0x2E9E5B),[0,1.55,0],[0.75,0.7,0.75],[0,0,0],0.014)}
  const N=Math.min(CFG.count,4000);o.N=N;const SP=0.62;o.SP=SP;
  const gB=new THREE.SphereGeometry(1,14,10),gE=new THREE.SphereGeometry(1,6,4);
  const mB=new THREE.InstancedMesh(gB,toon(0x14939A),N),mH=new THREE.InstancedMesh(gB,toon(0xFFCC2E),N),mE=new THREE.InstancedMesh(gE,basic(0x140c07),N*2);
  [mB,mH,mE].forEach(m=>{m.frustumCulled=false;S.add(m)});o.mB=mB;o.mH=mH;o.mE=mE;
  const M=new THREE.Matrix4(),q=new THREE.Quaternion(),v=new THREE.Vector3(),sc=new THREE.Vector3();
  o.pos=i=>[0.18*Math.sin(i*1.7)*0.3,-0.9-i*SP];
  o.update=(t,grow=0)=>{for(let i=0;i<N;i++){const [x,z]=o.pos(i);const hop=0.05*Math.max(0,Math.sin(t*7+i*0.9));let k=1;
      if(grow>0&&i>=N-6){const j=i-(N-6);k=clamp((grow*6-j)/1)}
      const y=hop;sc.set(0.2*k,0.24*k,0.2*k);v.set(x,y+0.24*k,z);M.compose(v,q,sc);mB.setMatrixAt(i,M);
      sc.set(0.17*k,0.17*k,0.17*k);v.set(x,y+0.6*k,z);M.compose(v,q,sc);mH.setMatrixAt(i,M);
      for(const s of [-1,1]){sc.set(0.025*k,0.035*k,0.02*k);v.set(x+s*0.06*k,y+0.63*k,z+0.155*k);M.compose(v,q,sc);mE.setMatrixAt(i*2+(s>0?1:0),M)}}
    mB.instanceMatrix.needsUpdate=mH.instanceMatrix.needsUpdate=mE.instanceMatrix.needsUpdate=true};
  o.cam=new THREE.PerspectiveCamera(32,W/H,0.1,400);
  o.shot=(p,l)=>{setBG('day');o.cam.position.set(...p);o.cam.lookAt(...l);r.render(S,o.cam)};return o})();
const CAM0={p:[3.4,2.3,8.6],l:[0.45,1.05,-1.0]};
function lineScene(t,cam,o={},grow=0){L.update(t,grow);putGuy(L.S,0,0,0.2,-0.18);guy.pose(idle(t,{armR:[0.3+0.03*Math.sin(t*2+1),0],mouth:'smile',...o}));L.shot(cam.p,cam.l)}
// ---------- 2D helpers ----------
const fmt=n=>Math.round(n).toLocaleString('en-US');
function dotsAlong(pts,frac,t,r0=11){// pts: polyline; draws yellow dots along first frac of length
  let len=0;const seglen=[];for(let i=1;i<pts.length;i++){const d=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);seglen.push(d);len+=d}
  const target=len*frac,step=r0*2.3;let acc=0,i=0,lastP=pts[0];
  g.save();g.strokeStyle='rgba(255,210,63,0.55)';g.lineWidth=r0*2.6;g.lineCap='round';g.beginPath();g.moveTo(...pts[0]);
  for(let d=0;d<=target;d+=step){while(i<seglen.length-1&&d>acc+seglen[i]){acc+=seglen[i];i++}const u=clamp((d-acc)/seglen[i]);const p=[lerp(pts[i][0],pts[i+1][0],u),lerp(pts[i][1],pts[i+1][1],u)];g.lineTo(...p);lastP=p}
  g.stroke();g.restore();i=0;acc=0;
  for(let d=0;d<=target;d+=step){while(i<seglen.length-1&&d>acc+seglen[i]){acc+=seglen[i];i++}const u=clamp((d-acc)/seglen[i]);const x=lerp(pts[i][0],pts[i+1][0],u),y=lerp(pts[i][1],pts[i+1][1],u)-Math.max(0,Math.sin(t*8+d*0.05))*3;
    g.fillStyle='#14939A';g.strokeStyle='#111';g.lineWidth=3;g.beginPath();g.arc(x,y+r0*0.6,r0*0.8,0,7);g.fill();g.stroke();g.fillStyle='#FFCC2E';g.beginPath();g.arc(x,y-r0*0.3,r0*0.75,0,7);g.fill();g.stroke()}
  return lastP}
function leader(x,y,s){// Round Yellow Guy face marker at the front of the 2D line
  g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='#111';g.lineWidth=6;g.fillStyle='#14939A';g.beginPath();g.ellipse(0,38,34,26,0,0,7);g.fill();g.stroke();
  g.fillStyle='#FFCC2E';g.beginPath();g.arc(0,0,34,0,7);g.fill();g.stroke();g.fillStyle='#3A2A20';g.beginPath();g.arc(0,-6,34,PI*1.08,PI*1.92);g.fill();
  g.fillStyle='#FFD23F';g.beginPath();g.moveTo(-22,-30);g.lineTo(-24,-52);g.lineTo(-11,-40);g.lineTo(0,-56);g.lineTo(11,-40);g.lineTo(24,-52);g.lineTo(22,-30);g.closePath();g.fill();g.stroke();
  g.lineWidth=4;for(const s2 of [-1,1]){g.fillStyle='#fff';g.beginPath();g.arc(s2*13,2,9,0,7);g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(s2*13,3,3.5,0,7);g.fill()}
  g.fillStyle='#3A2A20';g.beginPath();g.ellipse(-8,18,9,4,0.3,0,7);g.ellipse(8,18,9,4,-0.3,0,7);g.fill();g.restore()}
// --- comparison drawings (all original, simple) ---
function cmpTennis(t,k){setBG('teal');const cx=W/2,cy=900,h=760,w=h*10.97/23.77;g.save();g.fillStyle='#4FA36A';rr(cx-w/2-70,cy-h/2-70,w+140,h+140,30);g.fill();g.fillStyle='#2F6FB5';g.fillRect(cx-w/2,cy-h/2,w,h);
  g.strokeStyle='#fff';g.lineWidth=7;g.strokeRect(cx-w/2,cy-h/2,w,h);const sw=w*8.23/10.97;g.strokeRect(cx-sw/2,cy-h/2,sw,h);const sl=h*6.4/23.77;g.beginPath();g.moveTo(cx-sw/2,cy-sl);g.lineTo(cx+sw/2,cy-sl);g.moveTo(cx-sw/2,cy+sl);g.lineTo(cx+sw/2,cy+sl);g.moveTo(cx,cy-sl);g.lineTo(cx,cy+sl);g.stroke();
  g.fillStyle='#22222C';g.fillRect(cx-w/2-30,cy-6,w+60,12);for(const s of [-1,1]){g.fillStyle='#ddd';g.fillRect(cx+s*(w/2+30)-6,cy-16,12,32)}g.restore();
  const x=cx-w/2+w*0.06;const p=dotsAlong([[x,cy+h/2],[x,cy-h/2]],CFG.cmpFrac*k,t,13);if(k>0.02)leader(p[0],p[1]-40,1.1)}
function cmpField(t,k){setBG('teal');const cx=W/2,cy=900,h=840,w=h*53.3/120,ez=h*10/120;g.save();g.fillStyle='#3E9F4E';g.fillRect(cx-w/2,cy-h/2,w,h);
  for(let i=0;i<10;i++){g.fillStyle=i%2?'#46AB57':'#3E9F4E';g.fillRect(cx-w/2,cy-h/2+ez+i*(h-2*ez)/10,w,(h-2*ez)/10)}
  g.fillStyle='#C23B3B';g.fillRect(cx-w/2,cy-h/2,w,ez);g.fillStyle='#2F5FB0';g.fillRect(cx-w/2,cy+h/2-ez,w,ez);
  g.strokeStyle='#fff';g.lineWidth=6;g.strokeRect(cx-w/2,cy-h/2,w,h);for(let i=0;i<=10;i++){const y=cy-h/2+ez+i*(h-2*ez)/10;g.beginPath();g.moveTo(cx-w/2,y);g.lineTo(cx+w/2,y);g.stroke()}
  const yd=['G','10','20','30','40','50','40','30','20','10','G'];g.font='900 30px Inter';g.fillStyle='#fff';g.textAlign='center';g.textBaseline='middle';for(let i=1;i<10;i++){const y=cy-h/2+ez+i*(h-2*ez)/10;g.fillText(yd[i],cx-w/2+44,y);g.fillText(yd[i],cx+w/2-44,y)}g.restore();
  const y0=cy+h/2-ez,y1=cy-h/2+ez,x=cx;
  const pts=[[x,y0],[x,y0+(y1-y0)*CFG.cmpFrac*k+0.001]];const q=dotsAlong(pts,1,t,12);if(k>0.02)leader(q[0],q[1]-40,1.1)}
const MAR0=[[170,1260],[300,1200],[380,1080],[300,960],[220,840],[320,720],[520,700],[700,760],[860,700],[900,560],[760,470],[560,500],[400,430],[330,320]];
const MAR=MAR0.map(([x,y])=>[x,y>1000?y:y+lerp(90,0,(y-320)/680)]);
function cmpMarathon(t,k){setBG('linear-gradient(#9BD8FF,#DFF3FF)');g.save();g.fillStyle='#8CD06A';rr(80,240,920,1120,40);g.fill();g.lineJoin='round';g.lineCap='round';
  g.strokeStyle='#111';g.lineWidth=58;g.beginPath();MAR.forEach((p,i)=>i?g.lineTo(...p):g.moveTo(...p));g.stroke();g.strokeStyle='#6C6A7A';g.lineWidth=46;g.stroke();g.setLineDash([18,18]);g.strokeStyle='#fff';g.lineWidth=4;g.stroke();g.setLineDash([]);
  const flag=(p,txt1,col)=>{g.fillStyle='#333';g.fillRect(p[0]-4,p[1]-110,8,110);g.fillStyle=col;g.beginPath();g.moveTo(p[0]+4,p[1]-110);g.lineTo(p[0]+84,p[1]-88);g.lineTo(p[0]+4,p[1]-66);g.closePath();g.fill();g.strokeStyle='#111';g.lineWidth=4;g.stroke();txt(txt1,p[0]+10,p[1]-140,40,{sw:9})};
  flag(MAR[0],'START','#5BE37A');flag(MAR[MAR.length-1],'FINISH','#FF4A4A');g.restore();
  const q=dotsAlong(MAR,CFG.cmpFrac*k,t,10);if(k>0.02)leader(q[0],q[1]-38,1.0)}
const MAN0=[[555,1330],[590,1230],[640,1080],[700,920],[760,760],[810,610],[850,470],[875,370],[860,330],[815,360],[770,470],[720,610],[655,760],[590,920],[525,1080],[490,1230],[505,1320]];
const MAN=MAN0.map(([x,y])=>{const ax=lerp(540,860,clamp((1315-y)/935));return [ax+(x-ax)*1.7,y]});
function cmpIsland(t,k){setBG('linear-gradient(#2E78C6,#1F5FA8)');g.save();g.fillStyle='#E8DFC8';g.beginPath();g.moveTo(-10,240);g.lineTo(380,240);g.lineTo(300,700);g.lineTo(380,1380);g.lineTo(-10,1380);g.closePath();g.fill();
  g.beginPath();g.moveTo(1090,240);g.lineTo(960,240);g.lineTo(1000,700);g.lineTo(880,1100);g.lineTo(1090,1380);g.closePath();g.fill();
  const P=new Path2D();MAN.forEach((p,i)=>i?P.lineTo(...p):P.moveTo(...p));P.closePath();g.fillStyle='#D9D2C0';g.strokeStyle='#111';g.lineWidth=7;g.fill(P);g.stroke(P);
  g.save();g.clip(P);g.strokeStyle='rgba(120,110,95,0.35)';g.lineWidth=3;for(let i=0;i<40;i++){const y=320+i*26;g.beginPath();g.moveTo(400,y+((y-300)*0.0));g.lineTo(950,y-250);g.stroke()}g.restore();g.restore();
  const axis=[[540,1315],[600,1150],[660,990],[720,830],[780,670],[830,520],[860,380]];const q=dotsAlong(axis,CFG.cmpFrac*k,t,9);if(k>0.02)leader(q[0],q[1]-36,0.95)}
const CMP={tennis:cmpTennis,field:cmpField,marathon:cmpMarathon,island:cmpIsland};
// --- globe ---
function globe(t,k,z){const cx=W/2,cy=860,R=360;g.save();for(let i=0;i<90;i++){g.fillStyle=`rgba(255,255,255,${0.3+0.6*Math.abs(Math.sin(t*2+i))})`;g.beginPath();g.arc(hash(i*3.1)*W,hash(i*7.7)*H,1.5+hash(i)*2.5,0,7);g.fill()}
  g.shadowColor='rgba(110,180,255,0.7)';g.shadowBlur=60;g.fillStyle='#2E78D6';g.beginPath();g.arc(cx,cy,R,0,7);g.fill();g.restore();
  g.save();g.beginPath();g.arc(cx,cy,R,0,7);g.clip();const rot=t*0.25;g.fillStyle='#5DCB72';g.strokeStyle='#2E8F4A';g.lineWidth=5;
  for(let i=0;i<9;i++){const lon=((hash(i*4.4)*7+rot)%(2*PI))-PI,lat=(hash(i*2.2)-0.5)*2.2;if(Math.cos(lon)<0)continue;const x=cx+Math.sin(lon)*Math.cos(lat)*R,y=cy-Math.sin(lat)*R;g.beginPath();g.ellipse(x,y,(60+hash(i)*90)*Math.cos(lon),50+hash(i*5)*70,hash(i*8)*1.5,0,7);g.fill()}
  g.restore();g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.arc(cx,cy,R,0,7);g.stroke();
  const ey=cy,erx=R,ery=R*0.18;g.save();g.setLineDash([16,14]);g.strokeStyle='rgba(255,255,255,0.8)';g.lineWidth=5;g.beginPath();g.ellipse(cx,ey,erx,ery,0,0,PI);g.stroke();g.restore();
  // progress dot at front of equator (tiny arc)
  const px=cx,py=ey+ery;g.save();g.shadowColor='#FFD23F';g.shadowBlur=30;g.fillStyle='#FFD23F';g.beginPath();g.arc(px,py,7+3*Math.sin(t*8),0,7);g.fill();g.restore();
  // magnifier
  const mx=cx+240,my=cy+140,mr=150,a=easeOut(seg(z,0,0.3));if(a>0){g.save();g.globalAlpha=a;g.strokeStyle='#fff';g.lineWidth=5;g.setLineDash([12,10]);g.beginPath();g.moveTo(px,py);g.lineTo(mx-mr*0.7,my-mr*0.7);g.stroke();g.setLineDash([]);
    g.fillStyle='#7CCB5A';g.beginPath();g.arc(mx,my,mr,0,7);g.fill();g.save();g.clip();const zp=dotsAlong([[mx-mr*0.75,my+20],[mx+mr*0.75,my+20]],Math.min(1,0.2+z*1.2),t,9);g.restore();
    g.strokeStyle='#111';g.lineWidth=12;g.beginPath();g.arc(mx,my,mr,0,7);g.stroke();g.strokeStyle='#F4F4F8';g.lineWidth=7;g.stroke();g.strokeStyle='#111';g.lineWidth=30;g.beginPath();g.moveTo(mx+mr*0.72,my+mr*0.72);g.lineTo(mx+mr*1.15,my+mr*1.15);g.stroke();
    txt('US →',mx-mr*0.32,my-62,38,{sw:9,fill:'#FFD23F'});g.restore()}
  txt('40,075 KM AROUND',cx,cy-R-55,52,{sw:12})}
function pctBar(t,a,y){if(a<=0)return;g.save();g.globalAlpha=a;const x=110,w=W-220,h=64;g.fillStyle='rgba(0,0,0,0.5)';rr(x,y,w,h,h/2);g.fill();g.strokeStyle='#fff';g.lineWidth=6;g.stroke();
  g.fillStyle='#FFD23F';rr(x+6,y+6,Math.max(14,(w-12)*CFG.pct/100),h-12,(h-12)/2);g.fill();txt('0%',x+40,y+h+44,36,{sw:8,w:800});txt('100%',x+w-50,y+h+44,36,{sw:8,w:800});g.restore()}
// ---------- render ----------
window.render=function(t){g.clearRect(0,0,W,H);hideProps();
  if(t<C.there){// S1: Day N title over the line
    const k=ease(seg(t,0,C.there));lineScene(t,{p:mix(CAM0.p,[3.0,2.2,7.8],k),l:CAM0.l});
    const a=easeOut(seg(t,0,0.3))*(1-seg(t,C.there-0.3,C.there));g.save();g.globalAlpha=a;const s=backOut(seg(t,0,0.4));g.save();g.translate(W/2,250);g.scale(s,s);txt('DAY '+CFG.day,0,0,190,{fill:'#FFD23F',sw:34});g.restore();
      txt('OF PUTTING MY '+CFG.who,W/2,410,58,{sw:14});txt('IN A SINGLE-FILE LINE',W/2,490,72,{sw:16,fill:'#fff'});txt('AROUND THE WORLD 🌍'.replace(' 🌍',''),W/2,580,80,{sw:18,fill:'#3FF0FF'});g.restore()}
  else if(t<C.which){// S2: aerial reveal + rolling counter
    const k=ease(seg(t,C.there,C.which-0.1)),far=Math.min(L.N*L.SP,90);lineScene(t,{p:mix([3.0,2.2,7.8],[7,6+far*0.22,9+far*0.05],k),l:mix(CAM0.l,[0,0,-far*0.45-2],k)},{armL:[2.6,0.2],armR:[2.6,-0.2],mouth:'grin'});flash(t,C.there,0.15);
    const u=easeOut(seg(t,C.num,C.num+1.1));g.save();const s=backOut(seg(t,C.there,C.there+0.35));g.translate(W/2,300);g.scale(s,s);panel(0,0,860,250);txt(fmt(CFG.count*u),0,-22,140,{stroke:0,fill:'#fff'});txt(CFG.who,0,82,46,{stroke:0,fill:'#FFD23F'});g.restore();
    comic(CFG.count>=1000?'WOW!':'AWW!',W*0.76,620,110,t,C.num+1.15,{life:1.1,rot:0.1,fill:'#fff'})}
  else if(t<C.thats){// S3: side dolly along the line + length counter
    const k=seg(t,C.which,C.thats),zc=-2-k*Math.min(L.N*L.SP*0.6,40);lineScene(t,{p:[4.2,1.4,zc+3.0],l:[0,0.5,zc-1.0]},{});flash(t,C.which,0.15);
    pill('1 PERSON ≈ 0.5 M',W/2,560,50,'#fff','#111',t,C.which+0.2,C.thats);
    const u=easeOut(seg(t,C.which+0.3,C.thats-0.4));g.save();const s=backOut(seg(t,C.which,C.which+0.35));g.translate(W/2,320);g.scale(s,s);panel(0,0,820,230,'rgba(10,12,25,0.88)','#3FF0FF');
    const v=CFG.lenM*u;txt(CFG.lenM>=1000?(v/1000).toFixed(1)+' KM':v.toFixed(1)+' M',0,-12,128,{stroke:0});txt('LONG LINE',0,78,40,{stroke:0,fill:'#3FF0FF'});g.restore();
    // ruler ticks
    g.save();g.fillStyle='rgba(255,210,63,0.95)';rr(80,1180,W-160,70,14);g.fill();g.strokeStyle='#111';g.lineWidth=5;g.stroke();const off=(t*400)%60;for(let x=80-off;x<W-80;x+=60){if(x<85)continue;g.beginPath();g.moveTo(x,1180);g.lineTo(x,1215);g.stroke()}g.restore()}
  else if(t<C.and){// S4: comparison
    clear3d();flash(t,C.thats,0.15);const k=easeOut(seg(t,C.thats+0.2,C.cmpWord+0.3));CMP[CFG.cmp](t,k);
    g.save();const s=backOut(seg(t,C.thats,C.thats+0.35));g.translate(W/2,175);g.scale(s,s);panel(0,0,960,150);{g.font='900 78px Inter';const fs=Math.min(78,78*880/g.measureText(CFG.cmpTitle).width);txt(CFG.cmpTitle,0,0,fs,{stroke:0,fill:'#FFD23F'})};g.restore();
    pill(CFG.cmpRef,W/2,1300,46,'#fff','#111',t,C.cmpWord,C.and);comic(CFG.cmpPop,CFG.cmpPop.length>6?W*0.62:W*0.74,470,CFG.cmpPop.length>6?78:96,t,C.cmpWord+0.15,{life:1.2,rot:0.1,fill:'#fff'})}
  else if(t<C.hit){// S5: globe + % bar
    clear3d();setBG('space');flash(t,C.and,0.15);globe(t,1,seg(t,C.pctWord,C.pctWord+1.4));
    const a=easeOut(seg(t,C.pctWord,C.pctWord+0.3));g.save();g.globalAlpha=a;const s=backOut(seg(t,C.pctWord,C.pctWord+0.35));g.translate(W/2,250);g.scale(s,s);panel(0,0,700,170,'rgba(10,12,25,0.88)','#FFD23F');txt(CFG.pctText,0,-14,104,{stroke:0,fill:'#FFD23F'});txt('OF THE WAY AROUND',0,58,36,{stroke:0});g.restore();
    pctBar(t,a,1215);comic('BRUH.',W*0.25,560,96,t,C.hit-1.3,{life:1.2,rot:-0.1,fill:'#fff'})}
  else{// S6: back to the line, cheer, new people join, ease back to opening frame (loop)
    const u=t-TT,k=ease(seg(t,C.hit,TT-0.15));const cheer=1-ease(seg(t,TT-1.0,TT-0.2));
    lineScene(u,{p:mix([2.6,2.0,7.0],CAM0.p,k),l:mix([0.4,1.2,-1.5],CAM0.l,k)},{armL:[lerp(0.3+0.03*Math.sin(u*2),2.7+0.25*Math.sin(t*12),cheer),0.2*cheer],armR:[lerp(0.3+0.03*Math.sin(u*2+1),2.7+0.25*Math.cos(t*12),cheer),-0.2*cheer],mouth:cheer>0.5?'grin':'smile',jump:cheer>0?0.06*cheer*Math.abs(Math.sin(t*9)):0.012*Math.sin(u*2.4),blink:BLINK(u),bendL:0.3*cheer,bendR:0.3*cheer});
    flash(t,C.hit,0.15);pill('HIT '+CFG.cta+'!',W/2,330,74,'#FF3D7F','#fff',t,C.hit+0.1,TT-0.6);comic('+1',W*0.7,700,110,t,C.hit+0.9,{life:0.8,rot:0.1,fill:'#5BE37A'});comic('+1',W*0.3,640,100,t,C.hit+1.5,{life:0.8,rot:-0.1,fill:'#5BE37A'})}
  vignette();captions(t)};
