// ===== DAILY SERIES: "Day N of putting my followers in a single-file line around the world" =====
// Needs CFG defined before this file (see series_line/README.md). Uses w_lib.js helpers.
// non-Latin handles (Arabic/Thai) need real fonts — loaded from node_modules (npm i installs them)
for(const [fam,f] of [['NotoAr','noto-sans-arabic/files/noto-sans-arabic-arabic-800-normal.woff2'],['NotoThai','noto-sans-thai/files/noto-sans-thai-thai-800-normal.woff2']]){try{const ff=new FontFace(fam,`url(../node_modules/@fontsource/${f})`,{weight:'800'});document.fonts.add(ff);await ff.load()}catch(e){}}
let TT=CFG.TT;
const WD=RAWW.map(w=>w.w.replace(/[^A-Za-z']/g,'').toLowerCase());
const cue=(w,from=0)=>{for(let i=from;i<RAWW.length;i++)if(WD[i]===w)return RAWW[i];return null};
const C={there:cue('there').st,num:RAWW[WD.indexOf('are')+1].st,which:cue('which').st,thats:cue("that's").st,and:cue('and').st,hit:cue('hit').st};
C.cmpWord=RAWW[WD.indexOf('and')-1].st;  // last word of the comparison (Manhattan / marathon / court / field)
C.pctWord=RAWW[WD.indexOf('only')+1].st;
{const io=WD.indexOf('only');let ia=io;while(ia<WD.length&&WD[ia]!=='around')ia++;C.s6=RAWW[Math.min(ia+1,RAWW.length-1)].st;}  // first word after "...of the way around."
C.cta=(cue('comment')||cue('hit')).st;
const NAMES=[...new Set((CFG.names||[]).map(n=>n.replace(/^@/,'')))].slice(0,400);  // [leader, ...new (never shown before), ...already-shown]
// ---- ROLL CALL PACING (owner 2026-11-25): slow on NEW names so everyone can read theirs, quick whoosh past already-shown ones ----
const N_NEW=Math.min(NAMES.length,Math.max(1,CFG.nNew??NAMES.length));  // count incl. leader
const PACE_LEAD=1.4,PACE_NEW=0.36,PACE_OLD=0.07;   // seconds per figure
const PACE=i=>i===0?PACE_LEAD:(i<N_NEW?PACE_NEW:PACE_OLD);
const ROLL=(()=>{let s=0;for(let i=0;i<Math.max(1,NAMES.length);i++)s+=PACE(i);return s})();
// ---- CTA AFTER THE ROLL CALL (owner 2026-11-28: silent ending ruined the loop) ----
// The voice is split at the first CTA word ("Comment…"/"Hit…"); everything from there plays AFTER the roll call,
// so every video ends on the narrator → clean loop. The mixer must shift the voice the same way (see README / w_mix.sh).
const VO_SPLIT=Math.min(C.cta,C.hit),VO_DELAY=Math.max(0,C.s6+ROLL+0.35-VO_SPLIT);
if(VO_DELAY>0){for(const w of RAWW)if(w.st>=VO_SPLIT-0.02){w.st+=VO_DELAY;w.en+=VO_DELAY}for(const c of CH){c.st=c.w[0].st;c.en=c.w[c.w.length-1].en}C.cta+=VO_DELAY;C.hit+=VO_DELAY}
TT=Math.max(TT+VO_DELAY,C.s6+ROLL+1.6);
window.TT_OUT=TT;window.SERIES_TIMING={TT,voSplit:VO_SPLIT,voDelay:VO_DELAY,rollStart:C.s6,rollEnd:C.s6+ROLL,nNew:N_NEW,paceNew:PACE_NEW,paceLead:PACE_LEAD};
// figure index (float) reached at time tau seconds into the roll call
function rollIdx(tau){let acc=0;for(let i=0;i<Math.max(1,NAMES.length);i++){const p=PACE(i);if(tau<acc+p)return i+(tau-acc)/p;acc+=p}return Math.max(0,NAMES.length-1)}
guy.outfit(CFG.outfit||{crown:1,chain:1});const OUT=CFG.outfit||{crown:1};
// ---------- 3D line scene ----------
const L=(()=>{const S=new THREE.Scene();lights(S);S.fog=new THREE.Fog(0xCDEBFF,25,150);const o={S};
  part(S,new THREE.PlaneGeometry(600,600),toon(0x7CCB5A),[0,0,-200],[1,1,1],[-PI/2,0,0],0);
  part(S,new THREE.PlaneGeometry(1.5,600),toon(0xE8CF94),[0,0.01,-298],[1,1,1],[-PI/2,0,0],0);
  for(let i=0;i<70;i++)part(S,new THREE.CircleGeometry(0.4+hash(i)*0.6,14),toon(0x6AB84A),[(hash(i*3)-0.5)*30,0.015,4-hash(i*7)*60],[1,1,1],[-PI/2,0,0],0);
  for(let i=0;i<90;i++){const side=i%2?1:-1,x=side*(3.5+hash(i*2.3)*14),z=2-hash(i*5.7)*140,s=0.7+hash(i*9.1)*0.8;const tr=new THREE.Group();tr.position.set(x,0,z);tr.scale.setScalar(s);S.add(tr);(o.trees=o.trees||[]).push(tr);
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
  o.shot=(p,l)=>{setBG('day');o.cam.position.set(...p);o.cam.lookAt(...l);for(const tr of (o.trees||[]))tr.visible=!(p[0]>2.5&&tr.position.x>1.5&&tr.position.x<p[0]+1&&Math.abs(tr.position.z-p[2])<9);r.render(S,o.cam)};return o})();
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
  if(OUT.beanie){g.fillStyle=OUT.beanieColor||'#E2483D';g.beginPath();g.arc(0,-14,33,PI,2*PI);g.closePath();g.fill();g.stroke();g.fillStyle='#fff';rr(-36,-20,72,14,7);g.fill();g.stroke();g.beginPath();g.arc(0,-50,9,0,7);g.fill();g.stroke()}
  else if(OUT.snapback){g.fillStyle=OUT.capHex||'#1C1C24';g.beginPath();g.arc(0,-12,34,PI,2*PI);g.closePath();g.fill();g.stroke();g.fillStyle='#E2483D';rr(-35,-20,70,10,5);g.fill();g.stroke();g.fillStyle=OUT.capHex||'#1C1C24';g.beginPath();g.ellipse(30,-20,20,7,0.25,0,7);g.fill();g.stroke()}
  else if(OUT.headphones){g.strokeStyle='#111';g.lineWidth=14;g.beginPath();g.arc(0,-2,38,PI*1.05,PI*1.95);g.stroke();g.strokeStyle=OUT.hpHex||'#E2483D';g.lineWidth=8;g.stroke();g.lineWidth=6;g.strokeStyle='#111';for(const s3 of [-1,1]){g.fillStyle=OUT.hpHex||'#E2483D';rr(s3*36-11,-14,22,34,9);g.fill();g.stroke()}}
  else if(OUT.hardhat){g.fillStyle='#FFB000';g.beginPath();g.arc(0,-14,32,PI,2*PI);g.closePath();g.fill();g.stroke();rr(-42,-20,84,11,5);g.fill();g.stroke();g.fillStyle='#FFD45C';rr(-5,-44,10,26,4);g.fill()}
  else if(OUT.bandana){g.fillStyle='#E23B3B';g.beginPath();g.arc(0,-10,34,PI*1.02,PI*1.98);g.lineTo(34,-2);g.quadraticCurveTo(0,-14,-34,-2);g.closePath();g.fill();g.stroke();g.fillStyle='#fff';for(const [dx,dy] of [[-16,-24],[2,-30],[18,-22]]){g.beginPath();g.arc(dx,dy,3.5,0,7);g.fill()}g.fillStyle='#E23B3B';g.beginPath();g.moveTo(-30,-12);g.lineTo(-56,-2);g.lineTo(-50,10);g.closePath();g.fill();g.stroke();g.beginPath();g.moveTo(-30,-10);g.lineTo(-48,16);g.lineTo(-38,22);g.closePath();g.fill();g.stroke()}
  else if(OUT.chefhat){g.fillStyle='#fff';g.beginPath();g.arc(-16,-50,17,0,7);g.arc(16,-50,17,0,7);g.arc(0,-62,20,0,7);g.fill();g.stroke();g.beginPath();g.arc(-16,-50,15,0,7);g.arc(16,-50,15,0,7);g.arc(0,-62,18,0,7);g.fill();rr(-26,-44,52,22,6);g.fill();g.stroke()}
  else{g.fillStyle='#FFD23F';g.beginPath();g.moveTo(-22,-30);g.lineTo(-24,-52);g.lineTo(-11,-40);g.lineTo(0,-56);g.lineTo(11,-40);g.lineTo(24,-52);g.lineTo(22,-30);g.closePath();g.fill();g.stroke()}
  g.lineWidth=4;for(const s2 of [-1,1]){if(OUT.shades){g.fillStyle='#111';g.beginPath();g.ellipse(s2*13,2,12,8,0,0,7);g.fill()}else{g.fillStyle='#fff';g.beginPath();g.arc(s2*13,2,9,0,7);g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(s2*13,3,3.5,0,7);g.fill()}}
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
  const isc=1/Math.max(1,CFG.cmpFrac);g.translate(540,1315);g.scale(isc,isc);g.translate(-540,-1315);
  const P=new Path2D();MAN.forEach((p,i)=>i?P.lineTo(...p):P.moveTo(...p));P.closePath();g.fillStyle='#D9D2C0';g.strokeStyle='#111';g.lineWidth=7;g.fill(P);g.stroke(P);
  g.save();g.clip(P);g.strokeStyle='rgba(120,110,95,0.35)';g.lineWidth=3;for(let i=0;i<40;i++){const y=320+i*26;g.beginPath();g.moveTo(400,y+((y-300)*0.0));g.lineTo(950,y-250);g.stroke()}g.restore();g.restore();
  const axis=[[540,1315],[600,1150],[660,990],[720,830],[780,670],[830,520],[860,380]];const q=dotsAlong(axis,Math.min(1,CFG.cmpFrac)*k,t,9);if(k>0.02)leader(q[0],q[1]-36,0.95)}
// vertical helper: dots climb a column from base y0; object height hObj px; line = CFG.cmpFrac*hObj
function climb(t,k,x,y0,hObj,r0=11){const q=dotsAlong([[x,y0],[x,y0-hObj*CFG.cmpFrac]],k,t,r0);if(k>0.02)leader(q[0],q[1]-40,1.0)}
function cmpEverest(t,k){setBG('linear-gradient(#7EC8FF,#E3F4FF)');const y0=1250,hM=Math.min(820,880/CFG.cmpFrac),cx=430,pk=y0-hM;g.save();
  g.fillStyle='#9AA7B8';g.beginPath();g.moveTo(-40,y0);g.lineTo(160,y0-hM*0.55);g.lineTo(260,y0-hM*0.42);g.lineTo(cx,pk);g.lineTo(600,y0-hM*0.5);g.lineTo(700,y0-hM*0.38);g.lineTo(880,y0);g.closePath();g.fill();g.strokeStyle='#111';g.lineWidth=7;g.stroke();
  g.fillStyle='#7D8A9C';g.beginPath();g.moveTo(cx,pk);g.lineTo(600,y0-hM*0.5);g.lineTo(700,y0-hM*0.38);g.lineTo(880,y0);g.lineTo(520,y0);g.closePath();g.fill();
  g.fillStyle='#fff';g.beginPath();g.moveTo(cx,pk);g.lineTo(cx-95,pk+hM*0.2);g.lineTo(cx-45,pk+hM*0.16);g.lineTo(cx-5,pk+hM*0.22);g.lineTo(cx+40,pk+hM*0.15);g.lineTo(cx+80,pk+hM*0.19);g.closePath();g.fill();g.stroke();
  g.fillStyle='#5FB55A';g.fillRect(0,y0,W,H-y0);g.strokeStyle='#111';g.beginPath();g.moveTo(0,y0);g.lineTo(W,y0);g.stroke();
  g.setLineDash([16,12]);g.strokeStyle='rgba(255,255,255,0.95)';g.lineWidth=5;g.beginPath();g.moveTo(cx,pk);g.lineTo(940,pk);g.stroke();g.setLineDash([]);txt('PEAK',cx+150,pk-30,38,{sw:9});g.restore();
  climb(t,k,900,y0,hM,10)}
function cmpPyramid(t,k){setBG('linear-gradient(#FFB869,#FFE3B3)');const y0=1250,hP=Math.min(820,880/Math.max(1,CFG.cmpFrac)),cx=440,bw=hP*1.57;g.save();
  g.fillStyle='#F2C86B';g.fillRect(0,y0-10,W,H-y0+10);g.fillStyle='#E7B85A';g.beginPath();g.moveTo(cx-bw/2,y0);g.lineTo(cx,y0-hP);g.lineTo(cx+bw/2,y0);g.closePath();g.fill();
  g.fillStyle='#C9963F';g.beginPath();g.moveTo(cx,y0-hP);g.lineTo(cx+bw/2,y0);g.lineTo(cx+bw*0.12,y0);g.closePath();g.fill();
  g.strokeStyle='rgba(120,80,30,0.45)';g.lineWidth=3;for(let i=1;i<14;i++){const y=y0-hP*i/14,hw=bw/2*(1-i/14);g.beginPath();g.moveTo(cx-hw,y);g.lineTo(cx+hw,y);g.stroke()}
  g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.moveTo(cx-bw/2,y0);g.lineTo(cx,y0-hP);g.lineTo(cx+bw/2,y0);g.stroke();g.beginPath();g.moveTo(0,y0);g.lineTo(W,y0);g.stroke();
  g.fillStyle='rgba(255,250,220,0.9)';g.beginPath();g.arc(880,330,60,0,7);g.fill();
  g.setLineDash([16,12]);g.strokeStyle='rgba(255,255,255,0.95)';g.lineWidth=5;g.beginPath();g.moveTo(cx,y0-hP);g.lineTo(960,y0-hP);g.stroke();g.setLineDash([]);txt('TOP',cx+150,y0-hP-30,38,{sw:9});g.restore();
  climb(t,k,930,y0,hP,10)}
function cmpChannel(t,k){setBG('linear-gradient(#2E86D6,#1D63AE)');g.save();const L0=200,R0=880,y=820;
  g.strokeStyle='rgba(255,255,255,0.25)';g.lineWidth=4;for(let i=0;i<16;i++){const yy=330+i*62,o=(t*40+i*37)%120;g.beginPath();g.moveTo(L0+20+o,yy);g.lineTo(L0+70+o,yy);g.moveTo(L0+300-o,yy+28);g.lineTo(L0+350-o,yy+28);g.stroke()}
  const land=(pts,c)=>{g.fillStyle=c;g.beginPath();pts.forEach((p,i)=>i?g.lineTo(...p):g.moveTo(...p));g.closePath();g.fill();g.strokeStyle='#111';g.lineWidth=7;g.stroke()};
  land([[-20,260],[150,260],[185,420],[170,560],[L0,y],[185,1000],[160,1180],[120,1380],[-20,1380]],'#6FBF5A');
  g.fillStyle='#F4F4F0';g.beginPath();g.moveTo(170,560);g.lineTo(L0,y);g.lineTo(185,1000);g.lineTo(160,1000);g.lineTo(172,y);g.lineTo(148,560);g.closePath();g.fill();
  land([[1100,260],[930,260],[905,460],[915,640],[R0,y],[905,980],[940,1180],[960,1380],[1100,1380]],'#E6D58F');
  g.save();g.translate(80,860);g.rotate(-PI/2);txt('ENGLAND',0,0,40,{sw:9});g.restore();g.save();g.translate(1000,860);g.rotate(PI/2);txt('FRANCE',0,0,40,{sw:9});g.restore();
  // little original ferry
  const bx=420+((t*30)%200),by=1080;g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.moveTo(bx-60,by);g.lineTo(bx+60,by);g.lineTo(bx+44,by+26);g.lineTo(bx-44,by+26);g.closePath();g.fill();g.stroke();g.fillStyle='#E2483D';g.fillRect(bx-20,by-26,40,26);g.strokeRect(bx-20,by-26,40,26);
  g.setLineDash([14,12]);g.strokeStyle='rgba(255,255,255,0.9)';g.lineWidth=4;g.beginPath();g.moveTo(L0,y+80);g.lineTo(R0,y+80);g.stroke();g.setLineDash([]);g.restore();
  const q=dotsAlong([[L0,y],[L0+(R0-L0)*CFG.cmpFrac,y]],k,t,11);if(k>0.02)leader(q[0]+10,q[1]-44,1.0)}
function cmpWhale(t,k){setBG('linear-gradient(#3AA0E0,#0E4F8F)');g.save();for(let i=0;i<30;i++){const bx=hash(i*2.7)*W,by=(1400-((t*60+hash(i)*1200)%1100));g.strokeStyle='rgba(255,255,255,0.5)';g.lineWidth=3;g.beginPath();g.arc(bx,by,4+hash(i*5)*8,0,7);g.stroke()}
  const x0=90,x1=990,cy=760,bob=6*Math.sin(t*1.6);g.translate(0,bob);
  g.fillStyle='#4F6F9A';g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.moveTo(x0,cy);g.bezierCurveTo(x0+20,cy-130,x0+380,cy-150,x1-190,cy-60);g.lineTo(x1-110,cy-30);
  g.lineTo(x1-10,cy-120);g.quadraticCurveTo(x1-40,cy-20,x1-10,cy+80);g.lineTo(x1-110,cy+10);g.bezierCurveTo(x1-300,cy+70,x0+300,cy+120,x0+60,cy+70);g.quadraticCurveTo(x0,cy+50,x0,cy);g.closePath();g.fill();g.stroke();
  g.fillStyle='#9FB8D6';g.beginPath();g.moveTo(x0+30,cy+48);g.bezierCurveTo(x0+200,cy+105,x0+420,cy+95,x1-300,cy+52);g.bezierCurveTo(x0+420,cy+70,x0+200,cy+80,x0+30,cy+48);g.fill();
  g.strokeStyle='rgba(30,40,60,0.5)';g.lineWidth=3;for(let i=0;i<6;i++){g.beginPath();g.moveTo(x0+60+i*45,cy+58+i*3);g.lineTo(x0+150+i*45,cy+78+i*3);g.stroke()}
  g.fillStyle='#111';g.beginPath();g.arc(x0+150,cy+12,9,0,7);g.fill();g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.moveTo(x0+20,cy+30);g.quadraticCurveTo(x0+120,cy+50,x0+200,cy+30);g.stroke();
  g.fillStyle='#4F6F9A';g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(x0+260,cy+70);g.lineTo(x0+330,cy+170);g.lineTo(x0+340,cy+78);g.closePath();g.fill();g.stroke();
  const sp=(t*1.3)%1;g.strokeStyle=`rgba(255,255,255,${1-sp})`;g.lineWidth=6;for(const a of [-0.5,0,0.5]){g.beginPath();g.moveTo(x0+120,cy-110);g.lineTo(x0+120+Math.sin(a)*90*sp,cy-110-Math.cos(a)*120*sp);g.stroke()}
  g.setLineDash([14,12]);g.strokeStyle='rgba(255,255,255,0.9)';g.lineWidth=4;g.beginPath();g.moveTo(x0,cy+250);g.lineTo(x1,cy+250);g.stroke();g.setLineDash([]);
  g.restore();const q=dotsAlong([[x0,cy+330],[x0+(x1-x0)*CFG.cmpFrac,cy+330]],k,t,13);if(k>0.02)leader(q[0]+10,q[1]-44,1.05)}
function cmpTrench(t,k){// ocean cross-section; dots dive DOWN from the surface (line = cmpFrac × trench depth)
  const y0=330,hT=Math.min(820,900/Math.max(1,CFG.cmpFrac)),cx=430,fl=y0+hT*0.34,bot=y0+hT;setBG('linear-gradient(#9BD8FF,#DFF3FF)');g.save();
  const wg=g.createLinearGradient(0,y0,0,H);wg.addColorStop(0,'#2E8FE0');wg.addColorStop(0.5,'#11457F');wg.addColorStop(1,'#061A35');g.fillStyle=wg;g.fillRect(0,y0,W,H-y0);
  g.strokeStyle='rgba(255,255,255,0.8)';g.lineWidth=5;g.beginPath();for(let x=0;x<=W;x+=20)g.lineTo(x,y0+5*Math.sin(x*0.03+t*3));g.stroke();
  g.fillStyle='#5A4636';g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.moveTo(-20,fl);g.lineTo(cx-230,fl+20);g.lineTo(cx-120,fl+hT*0.25);g.lineTo(cx-30,bot);g.lineTo(cx+30,bot);g.lineTo(cx+130,fl+hT*0.22);g.lineTo(cx+260,fl+10);g.lineTo(W+20,fl-10);g.lineTo(W+20,H+20);g.lineTo(-20,H+20);g.closePath();g.fill();g.stroke();
  g.fillStyle='rgba(0,0,0,0.18)';for(let i=0;i<14;i++){g.beginPath();g.ellipse(hash(i*3.3)*W,fl+80+hash(i*7.1)*(H-fl),20+hash(i)*30,8+hash(i*2)*8,0,0,7);g.fill()}
  // little original sub + fish
  const sx=180+30*Math.sin(t*0.8),sy=fl-80;g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.ellipse(sx,sy,60,26,0,0,7);g.fill();g.stroke();g.fillRect(sx-12,sy-44,24,20);g.strokeRect(sx-12,sy-44,24,20);g.fillStyle='#9FE3FF';g.beginPath();g.arc(sx+24,sy,9,0,7);g.fill();g.stroke();
  for(let i=0;i<5;i++){const fx=(hash(i*5)*W+t*(40+i*10))%W,fy=y0+60+hash(i*9)*(fl-y0-120);g.fillStyle='#FF8A3D';g.beginPath();g.ellipse(fx,fy,16,9,0,0,7);g.fill();g.beginPath();g.moveTo(fx-14,fy);g.lineTo(fx-28,fy-9);g.lineTo(fx-28,fy+9);g.closePath();g.fill()}
  g.setLineDash([16,12]);g.strokeStyle='rgba(255,255,255,0.95)';g.lineWidth=5;g.beginPath();g.moveTo(cx,bot);g.lineTo(960,bot);g.stroke();g.setLineDash([]);txt('DEEPEST POINT',cx+230,bot+44,36,{sw:9});
  txt('SEA LEVEL',170,y0-34,34,{sw:8});g.restore();
  const q=dotsAlong([[900,y0],[900,y0+hT*CFG.cmpFrac]],k,t,10);if(k>0.02)leader(q[0],q[1]+52,1.0)}
function busDraw(x,y,w){const h=w*0.36;g.save();g.translate(x,y);g.strokeStyle='#111';g.lineWidth=6;
  g.fillStyle='#FFC21A';rr(0,-h,w,h,20);g.fill();g.stroke();g.fillStyle='#FFC21A';rr(w-6,-h*0.55,w*0.1,h*0.55,10);g.fill();g.stroke();
  g.fillStyle='#111';g.fillRect(4,-h*0.36,w+w*0.08,8);g.fillRect(4,-h*0.22,w+w*0.08,5);
  g.fillStyle='#BFE6FF';const nw=6,ww=(w*0.78)/nw;for(let i=0;i<nw;i++){rr(16+i*ww,-h+16,ww-12,h*0.34,6);g.fill();g.stroke()}
  rr(w*0.84,-h+16,w*0.13,h*0.55,6);g.fill();g.stroke();
  g.font=`900 ${Math.round(w*0.06)}px Inter`;g.fillStyle='#111';g.textAlign='center';g.textBaseline='middle';g.fillText('SCHOOL BUS',w*0.42,-h*0.48+h*0.05);
  for(const wx of [w*0.2,w*0.78]){g.fillStyle='#222';g.beginPath();g.arc(wx,0,w*0.08,0,7);g.fill();g.stroke();g.fillStyle='#bbb';g.beginPath();g.arc(wx,0,w*0.035,0,7);g.fill()}
  g.fillStyle='#FFF6B0';g.beginPath();g.arc(w+w*0.08,-h*0.45,8,0,7);g.fill();g.stroke();g.restore()}
function cmpBus(t,k){setBG('linear-gradient(#8FD3FF,#E6F6FF)');g.save();const x0=60,x1=1020,cy=820,bw=(x1-x0)/2-14;
  g.fillStyle='#8CD06A';g.fillRect(0,cy+40,W,H-cy-40);g.fillStyle='#55555F';g.fillRect(0,cy-10,W,120);g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(0,cy-10);g.lineTo(W,cy-10);g.moveTo(0,cy+110);g.lineTo(W,cy+110);g.stroke();
  g.setLineDash([40,30]);g.strokeStyle='#FFD23F';g.lineWidth=6;g.beginPath();g.moveTo(0,cy+50);g.lineTo(W,cy+50);g.stroke();g.setLineDash([]);
  busDraw(x0,cy+30,bw);busDraw(x0+bw+28,cy+30,bw);
  g.setLineDash([14,12]);g.strokeStyle='rgba(255,255,255,0.95)';g.lineWidth=4;g.beginPath();g.moveTo(x0,cy+190);g.lineTo(x1,cy+190);g.stroke();g.setLineDash([]);
  txt('2 BUSES',W/2,cy+240,40,{sw:9});g.restore();
  const q=dotsAlong([[x0,cy+330],[x0+(x1-x0)*CFG.cmpFrac,cy+330]],k,t,13);if(k>0.02)leader(q[0]+10,q[1]-44,1.05)}
function cmpObelisk(t,k){setBG('linear-gradient(#78C4FF,#E1F3FF)');const y0=1250,hO=Math.min(820,880/Math.max(1,CFG.cmpFrac)),cx=500,bw=hO*0.11,tw=bw*0.68,tip=hO*0.06;g.save();
  for(let i=0;i<5;i++){const cx2=120+i*230+20*Math.sin(t*0.3+i),cy2=360+hash(i*3)*160;g.fillStyle='rgba(255,255,255,0.85)';g.beginPath();g.ellipse(cx2,cy2,70,26,0,0,7);g.ellipse(cx2+40,cy2-14,46,22,0,0,7);g.fill()}
  g.fillStyle='#6CC25A';g.fillRect(0,y0,W,H-y0);g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(0,y0);g.lineTo(W,y0);g.stroke();
  for(let i=0;i<6;i++){const tx=80+i*170+(i>2?240:0),ty=y0+10;if(tx>W-40)continue;g.fillStyle='#8A5A2B';g.fillRect(tx-6,ty-40,12,40);g.fillStyle='#2E9E5B';g.beginPath();g.arc(tx,ty-56,30,0,7);g.fill();g.stroke()}
  g.fillStyle='#ECE6D8';g.beginPath();g.moveTo(cx-bw/2,y0);g.lineTo(cx-tw/2,y0-hO+tip);g.lineTo(cx,y0-hO);g.lineTo(cx+tw/2,y0-hO+tip);g.lineTo(cx+bw/2,y0);g.closePath();g.fill();
  g.fillStyle='#CFC6B4';g.beginPath();g.moveTo(cx,y0-hO);g.lineTo(cx+tw/2,y0-hO+tip);g.lineTo(cx+bw/2,y0);g.lineTo(cx+bw*0.12,y0);g.closePath();g.fill();
  g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(cx-bw/2,y0);g.lineTo(cx-tw/2,y0-hO+tip);g.lineTo(cx,y0-hO);g.lineTo(cx+tw/2,y0-hO+tip);g.lineTo(cx+bw/2,y0);g.stroke();
  g.setLineDash([16,12]);g.strokeStyle='rgba(255,255,255,0.95)';g.lineWidth=5;g.beginPath();g.moveTo(cx,y0-hO);g.lineTo(960,y0-hO);g.stroke();g.setLineDash([]);txt('TOP',cx+170,y0-hO-30,38,{sw:9});g.restore();
  climb(t,k,930,y0,hO,10)}
function cmpSky(t,k){// vertical: altitude comparison (CFG.skyObj 'jet' | 'balloon'); line = cmpFrac × object altitude
  const y0=1250,hA=Math.min(820,880/Math.max(1,CFG.cmpFrac)),ox=400,oy=y0-hA;const sg=g.createLinearGradient(0,240,0,y0);sg.addColorStop(0,'#16306E');sg.addColorStop(0.45,'#3C78D8');sg.addColorStop(1,'#BFE6FF');setBG('#BFE6FF');g.save();g.fillStyle=sg;g.fillRect(0,0,W,y0);
  for(let i=0;i<40;i++){const a=clamp(1-(hash(i*7.3)*H)/700);if(a<=0)continue;g.fillStyle=`rgba(255,255,255,${0.6*a*(0.5+0.5*Math.sin(t*3+i))})`;g.beginPath();g.arc(hash(i*3.1)*W,250+hash(i*7.3)*500,2,0,7);g.fill()}
  for(let i=0;i<6;i++){const cx2=(80+i*210+t*12*(i%2?1:-1)+W)%(W+200)-100,cy2=y0-90-hash(i*5)*200;g.fillStyle='rgba(255,255,255,0.92)';g.beginPath();g.ellipse(cx2,cy2,80,28,0,0,7);g.ellipse(cx2+45,cy2-16,50,24,0,0,7);g.ellipse(cx2-40,cy2-8,40,20,0,0,7);g.fill()}
  g.fillStyle='#6CC25A';g.fillRect(0,y0,W,H-y0);g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(0,y0);g.lineTo(W,y0);g.stroke();
  for(let i=0;i<7;i++){const hx=60+i*150,hh=40+hash(i*2)*50;g.fillStyle=['#E2483D','#F2C14E','#5B8DEF','#fff'][i%4];g.fillRect(hx,y0-hh,60,hh);g.strokeRect(hx,y0-hh,60,hh)}
  g.lineWidth=5;g.strokeStyle='#111';
  if(CFG.skyObj==='balloon'){const bob=6*Math.sin(t*1.5);g.save();g.translate(ox,oy+bob+70);g.fillStyle='#F4F4F8';g.beginPath();g.ellipse(0,-60,78,90,0,0,7);g.fill();g.stroke();g.fillStyle='rgba(255,255,255,0.9)';g.beginPath();g.ellipse(-28,-95,16,26,-0.4,0,7);g.fill();
    g.beginPath();g.moveTo(0,30);g.quadraticCurveTo(14,70,0,110);g.stroke();g.fillStyle='#F2C14E';g.fillRect(-18,110,36,30);g.strokeRect(-18,110,36,30);g.fillStyle='#E2483D';g.beginPath();g.arc(0,125,5,0,7);g.fill();g.restore()}
  else{const bob=4*Math.sin(t*2);g.save();g.translate(ox+18*Math.sin(t*0.6),oy+bob);g.fillStyle='#F4F4F8';rr(-150,-22,300,44,22);g.fill();g.stroke();
    g.beginPath();g.moveTo(-40,0);g.lineTo(-110,95);g.lineTo(-70,95);g.lineTo(40,0);g.closePath();g.fill();g.stroke();g.beginPath();g.moveTo(-40,-6);g.lineTo(-110,-80);g.lineTo(-80,-80);g.lineTo(30,-6);g.closePath();g.fillStyle='#DADCE6';g.fill();g.stroke();
    g.fillStyle='#F4F4F8';g.beginPath();g.moveTo(-130,-10);g.lineTo(-165,-75);g.lineTo(-140,-75);g.lineTo(-105,-12);g.closePath();g.fill();g.stroke();g.fillStyle='#E2483D';g.fillRect(-150,-6,300,8);
    g.fillStyle='#8EC9FF';for(let i=0;i<7;i++){g.beginPath();g.arc(-70+i*26,-6,6,0,7);g.fill()}g.beginPath();g.moveTo(150,-6);g.quadraticCurveTo(140,-20,118,-18);g.lineTo(118,-4);g.closePath();g.fillStyle='#2B3550';g.fill();
    g.strokeStyle='rgba(255,255,255,0.8)';g.lineWidth=6;g.setLineDash([22,16]);g.beginPath();g.moveTo(-160,8);g.lineTo(-420,14);g.stroke();g.setLineDash([]);g.restore()}
  g.setLineDash([16,12]);g.strokeStyle='rgba(255,255,255,0.95)';g.lineWidth=5;g.beginPath();g.moveTo(ox+120,oy);g.lineTo(960,oy);g.stroke();g.setLineDash([]);txt(CFG.skyLbl||'',ox+70,oy+70+(CFG.skyObj==='balloon'?140:40),34,{sw:8});g.restore();
  climb(t,k,930,y0,hA,10)}
function cmpBowling(t,k){// horizontal: one lane, foul line → head pin (18.29 m); lane drawn at 1/cmpFrac of the line
  setBG('linear-gradient(#2A1B4A,#4B2C7A)');g.save();const x0=90,len=Math.min(900,900/Math.max(1,CFG.cmpFrac)),x1=x0+len,cy=800,lh=150;
  for(let i=0;i<8;i++){g.fillStyle=`hsla(${(i*50+t*60)%360},90%,65%,0.25)`;g.beginPath();g.arc(120+i*130,380+30*Math.sin(t*2+i),40,0,7);g.fill()}
  g.fillStyle='#2E2E3A';g.fillRect(0,cy-lh/2-34,W,lh+68);g.fillStyle='#D9A55B';g.fillRect(x0-60,cy-lh/2,len+140,lh);
  g.strokeStyle='rgba(140,90,40,0.45)';g.lineWidth=2;for(let i=1;i<10;i++){const y=cy-lh/2+i*lh/10;g.beginPath();g.moveTo(x0-60,y);g.lineTo(x1+80,y);g.stroke()}
  g.fillStyle='#55556A';g.fillRect(x0-60,cy-lh/2-28,len+140,28);g.fillRect(x0-60,cy+lh/2,len+140,28);
  g.strokeStyle='#111';g.lineWidth=6;g.strokeRect(x0-60,cy-lh/2-28,len+140,lh+56);
  g.strokeStyle='#C23B3B';g.lineWidth=6;g.beginPath();g.moveTo(x0,cy-lh/2);g.lineTo(x0,cy+lh/2);g.stroke();
  for(let i=0;i<7;i++){g.fillStyle='#5A3A1A';g.beginPath();const ax=x0+len*0.2,ay=cy-lh*0.36+i*lh*0.12;g.moveTo(ax+12,ay);g.lineTo(ax,ay-6);g.lineTo(ax,ay+6);g.closePath();g.fill()}
  const pin=(x,y)=>{g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=3;g.beginPath();g.arc(x,y,11,0,7);g.fill();g.stroke();g.fillStyle='#E2483D';g.beginPath();g.arc(x,y,4,0,7);g.fill()};
  const sp=26;for(let r2=0;r2<4;r2++)for(let j=0;j<=r2;j++)pin(x1+r2*sp*0.87,cy+(j-r2/2)*sp);
  const bt=(t*0.35)%1,bx=lerp(x0+20,x1-30,bt);g.fillStyle='#2B6BE0';g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.arc(bx,cy+8,22,0,7);g.fill();g.stroke();g.fillStyle='#111';for(const [dx,dy] of [[-6,-8],[5,-9],[0,2]]){g.beginPath();g.arc(bx+dx,cy+8+dy,3,0,7);g.fill()}
  txt('FOUL LINE',x0+40,cy-lh/2-80,32,{sw:8});txt('PINS',x1+30,cy-lh/2-80,32,{sw:8});
  g.setLineDash([14,12]);g.strokeStyle='rgba(255,255,255,0.9)';g.lineWidth=4;g.beginPath();g.moveTo(x0,cy+lh/2+90);g.lineTo(x1,cy+lh/2+90);g.stroke();g.setLineDash([]);
  txt('1 LANE',x0+len/2,cy+lh/2+140,40,{sw:9});g.restore();
  const q=dotsAlong([[x0,cy+330],[x0+len*CFG.cmpFrac,cy+330]],k,t,13);if(k>0.02)leader(q[0]+10,q[1]-44,1.05)}
function cmpTower(t,k){// vertical: simple original lattice tower (330 m); line = cmpFrac × tower height
  setBG('linear-gradient(#86CCFF,#E6F6FF)');const y0=1250,hT=Math.min(820,880/Math.max(1,CFG.cmpFrac)),cx=470,bw=hT*0.42;g.save();
  for(let i=0;i<5;i++){const cx2=120+i*230+20*Math.sin(t*0.3+i),cy2=340+hash(i*3)*160;g.fillStyle='rgba(255,255,255,0.85)';g.beginPath();g.ellipse(cx2,cy2,70,26,0,0,7);g.ellipse(cx2+40,cy2-14,46,22,0,0,7);g.fill()}
  g.fillStyle='#6CC25A';g.fillRect(0,y0,W,H-y0);
  const half=f=>{const u=f;return bw/2*Math.pow(1-u,2.2)+bw*0.012};// half-width at fraction f of height
  g.fillStyle='#8B6A4E';g.strokeStyle='#111';g.lineWidth=5;g.beginPath();g.moveTo(cx-half(0),y0);for(let f=0;f<=0.92;f+=0.02)g.lineTo(cx-half(f),y0-hT*f);g.lineTo(cx,y0-hT);for(let f=0.92;f>=0;f-=0.02)g.lineTo(cx+half(f),y0-hT*f);g.closePath();g.fill();g.stroke();
  g.fillStyle='#86CCFF';g.beginPath();g.moveTo(cx-half(0)*0.72,y0);g.quadraticCurveTo(cx,y0-hT*0.2,cx+half(0)*0.72,y0);g.closePath();g.fill();g.stroke();
  g.strokeStyle='rgba(60,40,25,0.7)';g.lineWidth=2.5;for(let f=0.14;f<0.88;f+=0.045){const a=half(f),b=half(f+0.045);g.beginPath();g.moveTo(cx-a,y0-hT*f);g.lineTo(cx+b,y0-hT*(f+0.045));g.moveTo(cx+a,y0-hT*f);g.lineTo(cx-b,y0-hT*(f+0.045));g.stroke()}
  for(const f of [0.18,0.4,0.88]){const a=half(f)+10;g.fillStyle='#6E523B';g.strokeStyle='#111';g.lineWidth=4;g.fillRect(cx-a,y0-hT*f-8,2*a,16);g.strokeRect(cx-a,y0-hT*f-8,2*a,16)}
  g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.moveTo(cx,y0-hT);g.lineTo(cx,y0-hT-18);g.stroke();
  g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(0,y0);g.lineTo(W,y0);g.stroke();
  for(let i=0;i<5;i++){const tx=60+i*90+(i>1?560:0);if(tx>W-40)continue;g.fillStyle='#8A5A2B';g.fillRect(tx-6,y0-30,12,30);g.fillStyle='#2E9E5B';g.strokeStyle='#111';g.lineWidth=4;g.beginPath();g.arc(tx,y0-46,26,0,7);g.fill();g.stroke()}
  g.setLineDash([16,12]);g.strokeStyle='rgba(255,255,255,0.95)';g.lineWidth=5;g.beginPath();g.moveTo(cx,y0-hT);g.lineTo(960,y0-hT);g.stroke();g.setLineDash([]);txt('TOP',cx+170,y0-hT-30,38,{sw:9});g.restore();
  climb(t,k,930,y0,hT,10)}
function cmpSkyscraper(t,k){// vertical: simple original stepped supertall tower (e.g. 828 m); line = cmpFrac × tower height
  setBG('linear-gradient(#FF9E6B,#FFE1B8)');const y0=1250,hS=Math.min(820,880/Math.max(1,CFG.cmpFrac)),cx=520,bw=hS*0.2;g.save();
  g.fillStyle='rgba(255,245,200,0.9)';g.beginPath();g.arc(170,420,70,0,7);g.fill();
  for(let i=0;i<9;i++){const bx=40+i*120,bh=60+hash(i*3.7)*120;if(Math.abs(bx+45-cx)<bw*0.7)continue;g.fillStyle='rgba(120,90,110,0.55)';g.fillRect(bx,y0-bh,90,bh)}
  g.fillStyle='#E9C27A';g.fillRect(0,y0,W,H-y0);g.strokeStyle='#111';g.lineWidth=6;g.beginPath();g.moveTo(0,y0);g.lineTo(W,y0);g.stroke();
  const tiers=[[0,1],[0.22,0.82],[0.42,0.64],[0.58,0.48],[0.7,0.34],[0.78,0.22]];
  tiers.forEach(([f,wf],i)=>{const top=i<tiers.length-1?tiers[i+1][0]:0.84,w=bw*wf,yb=y0-hS*f,yt=y0-hS*top;
    g.fillStyle='#8FC4E8';g.fillRect(cx-w/2,yt,w,yb-yt);g.fillStyle='#6FA6D0';g.fillRect(cx+w*0.1,yt,w*0.4,yb-yt);
    g.strokeStyle='rgba(40,70,100,0.5)';g.lineWidth=2;for(let y=yt+10;y<yb;y+=14){g.beginPath();g.moveTo(cx-w/2,y);g.lineTo(cx+w/2,y);g.stroke()}
    g.strokeStyle='#111';g.lineWidth=5;g.strokeRect(cx-w/2,yt,w,yb-yt)});
  g.strokeStyle='#111';g.lineWidth=5;g.fillStyle='#B8D8EE';g.beginPath();g.moveTo(cx-bw*0.06,y0-hS*0.84);g.lineTo(cx,y0-hS);g.lineTo(cx+bw*0.06,y0-hS*0.84);g.closePath();g.fill();g.stroke();
  g.fillStyle='#E2483D';g.beginPath();g.arc(cx,y0-hS-4,6+2*Math.sin(t*6),0,7);g.fill();
  g.setLineDash([16,12]);g.strokeStyle='rgba(255,255,255,0.95)';g.lineWidth=5;g.beginPath();g.moveTo(cx,y0-hS);g.lineTo(960,y0-hS);g.stroke();g.setLineDash([]);txt('TOP',cx+170,y0-hS-30,38,{sw:9});g.restore();
  climb(t,k,930,y0,hS,10)}
function cmpHoops(t,k){// basketball court (NBA 28.65 m x 15.24 m), dots run baseline -> baseline
  setBG('linear-gradient(#FF9F45,#FFD08A)');const cx=W/2,cy=870,h=820,w=h*15.24/28.65;g.save();g.fillStyle='#2B2B38';rr(cx-w/2-60,cy-h/2-60,w+120,h+120,26);g.fill();
  g.fillStyle='#E9B76F';g.fillRect(cx-w/2,cy-h/2,w,h);g.strokeStyle='rgba(150,95,40,0.35)';g.lineWidth=2;for(let x=cx-w/2+22;x<cx+w/2;x+=22){g.beginPath();g.moveTo(x,cy-h/2);g.lineTo(x,cy+h/2);g.stroke()}
  g.strokeStyle='#fff';g.lineWidth=6;g.strokeRect(cx-w/2,cy-h/2,w,h);g.beginPath();g.moveTo(cx-w/2,cy);g.lineTo(cx+w/2,cy);g.stroke();g.beginPath();g.arc(cx,cy,w*0.12,0,7);g.stroke();
  const kw=w*4.88/15.24,kh=h*5.79/28.65,r3=w*7.24/15.24;
  for(const s of [-1,1]){const by=cy+s*h/2;g.fillStyle='rgba(226,72,61,0.85)';g.fillRect(cx-kw/2,s<0?by:by-kh,kw,kh);g.strokeStyle='#fff';g.strokeRect(cx-kw/2,s<0?by:by-kh,kw,kh);
    g.beginPath();g.arc(cx,by-s*kh,kw/2,s<0?0:PI,s<0?PI:2*PI);g.stroke();
    const hy=by-s*h*1.6/28.65;g.beginPath();g.moveTo(cx-r3,by);g.lineTo(cx-r3,by-s*h*4.27/28.65);g.arc(cx,hy,r3,s<0?PI-0.33:PI+0.33,s<0?0.33:-0.33,s<0);g.lineTo(cx+r3,by);g.stroke();
    g.fillStyle='#fff';g.fillRect(cx-36,by-s*h*1.2/28.65-4,72,8);g.strokeStyle='#FF6A1A';g.lineWidth=6;g.beginPath();g.arc(cx,hy,14,0,7);g.stroke();g.strokeStyle='#fff';g.lineWidth=6}
  g.restore();const x=cx-w/2+w*0.08;const p=dotsAlong([[x,cy+h/2],[x,cy-h/2]],CFG.cmpFrac*k,t,13);if(k>0.02)leader(p[0],p[1]-40,1.1)}
const CMP={hoops:cmpHoops,tennis:cmpTennis,field:cmpField,marathon:cmpMarathon,island:cmpIsland,everest:cmpEverest,pyramid:cmpPyramid,channel:cmpChannel,whale:cmpWhale,trench:cmpTrench,bus:cmpBus,obelisk:cmpObelisk,sky:cmpSky,bowling:cmpBowling,tower:cmpTower,skyscraper:cmpSkyscraper};
// --- commenter name tags above the 3D line (this platform's commenters only) ---
const _v3=new THREE.Vector3();
function tagPill(s,x,y,fs,o={}){g.save();g.font=`800 ${fs}px Inter, NotoAr, NotoThai`;const w=g.measureText(s).width+fs*1.0,h=fs*1.6;
  g.fillStyle='rgba(0,0,0,0.28)';rr(x-w/2+3,y-h/2+6,w,h,h/2);g.fill();g.fillStyle=o.bg||'#fff';rr(x-w/2,y-h/2,w,h,h/2);g.fill();g.strokeStyle=o.edge||'#111';g.lineWidth=3;if(o.dash)g.setLineDash([8,6]);g.stroke();g.setLineDash([]);
  g.fillStyle=o.fg||'#14141c';g.textAlign='center';g.textBaseline='middle';g.fillText(s,x,y+fs*0.05);g.restore();return w}
function nameTags(t,a,yTop){if(a<=0)return;const list=NAMES.length?NAMES.map(n=>'@'+n.replace(/^@/,'')):[null];g.save();g.globalAlpha=Math.min(1,a);
  const items=[],placed=[],FS=46;list.forEach((s,i)=>{const fi=i+1;if(fi>=L.N)return;const [x,z]=L.pos(fi);_v3.set(x,0.9,z).project(L.cam);if(!(list.length>6&&yTop)&&(_v3.z>1||Math.abs(_v3.x)>1.1||_v3.y>0.9))return;if(_v3.z>1){_v3.x=-_v3.x;_v3.y=-1}
    items.push({s,i,hx:(_v3.x+1)/2*W,hy:(1-_v3.y)/2*H})});
  const pop=backOut(clamp(a*1.2));
  if(items.length>6&&yTop){// many joiners: tidy rows (round-robin by screen x so leader lines stay short), smaller pills
    let fs=38,rh,R,rows;items.sort((p,q)=>p.hx-q.hx);
    for(;fs>=26;fs-=2){g.font=`800 ${fs}px Inter`;items.forEach(it=>it.w=g.measureText(it.s).width+fs*1.0);
      const tot=items.reduce((a2,it)=>a2+it.w+16,0);rh=fs*1.6+14;R=Math.max(1,Math.ceil(tot/(W-120)));for(;;){rows=[...Array(R)].map(()=>[]);items.forEach((it,k)=>rows[k%R].push(it));if(rows.every(rw=>rw.reduce((a2,it)=>a2+it.w+12,0)<=W-50)||R>14)break;R++}
      if(yTop+R*rh+40<=1330)break}
    rows.forEach((row,ri)=>{const rw=row.reduce((a2,it)=>a2+it.w,0),gap=Math.min(40,(W-60-rw)/Math.max(1,row.length+1));let x=W/2-(rw+gap*(row.length-1))/2;const y=yTop+ri*rh+(ri%2?0:0);
      row.forEach(it=>{it.cx=x+it.w/2;it.ty=y;x+=it.w+gap})});
    for(const it of items){g.strokeStyle='rgba(255,255,255,0.9)';g.lineWidth=3;g.beginPath();g.moveTo(clamp(it.hx,0,W),clamp(it.hy,0,H));g.lineTo(it.cx,it.ty+fs*0.8);g.stroke()}
    for(const it of items){g.save();g.translate(it.cx,it.ty);g.scale(pop,pop);tagPill(it.s,0,0,fs,it.i===0?{bg:'#FFE680'}:{});
      if(it.i===0){const c=fs*0.42;g.save();g.translate(-it.w/2+6,-fs*0.75);g.rotate(-0.35);g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=3;g.beginPath();g.moveTo(-c,c*0.5);g.lineTo(-c,-c*0.4);g.lineTo(-c*0.5,0);g.lineTo(0,-c*0.7);g.lineTo(c*0.5,0);g.lineTo(c,-c*0.4);g.lineTo(c,c*0.5);g.closePath();g.fill();g.stroke();g.restore()}
      g.restore()}
    const f=items.find(it=>it.i===0);if(f){const yb=yTop+R*rh+10;g.save();g.globalAlpha=Math.min(1,a);tagPill('👑 @'+NAMES[0].replace(/^@/,'')+' = FRONT OF THE LINE',W/2,yb,30,{bg:'#FFD23F'});g.restore()}
    g.restore();return}
  for(const it of items){g.font=`800 ${FS}px Inter`;const lbl=it.s===null?'@YOUR_NAME?':it.s;const w=g.measureText(lbl).width+FS*1.0,h=FS*1.6;const extra=(it.i===0)?FS*2.6:0;
    let cx=clamp(it.hx,w/2+20,W-w/2-20),ty=it.hy-90-(it.i%2)*60;
    const hit=()=>placed.some(r=>Math.abs(r.x-cx)<(r.w+w)/2+10&&ty-h/2-extra<r.y+r.h/2+8&&ty+h/2>r.y-r.h/2-r.e-8);
    let n=0;while(hit()&&n++<30)ty-=12;it.cx=cx;it.ty=ty;placed.push({x:cx,y:ty,w,h,e:extra})}
  for(const it of items){g.strokeStyle='rgba(255,255,255,0.95)';g.lineWidth=4;g.beginPath();g.moveTo(it.hx,it.hy);g.lineTo(it.cx,it.ty);g.stroke();
    g.save();g.translate(it.cx,it.ty);g.scale(pop,pop);
    if(it.s===null){tagPill('@YOUR_NAME?',0,0,FS,{dash:1,bg:'rgba(255,255,255,0.88)'});tagPill('THE FRONT IS OPEN!',0,-FS*1.75,FS*0.75,{bg:'#FFD23F'})}
    else{tagPill(it.s,0,0,FS);if(it.i===0){const cy=-FS*1.7;tagPill('FRONT OF THE LINE',0,cy,FS*0.72,{bg:'#FFD23F'});const c=FS*0.5;g.save();g.translate(0,cy-FS*1.15);g.fillStyle='#FFD23F';g.strokeStyle='#111';g.lineWidth=3;g.beginPath();g.moveTo(-c,c*0.5);g.lineTo(-c,-c*0.4);g.lineTo(-c*0.5,0);g.lineTo(0,-c*0.7);g.lineTo(c*0.5,0);g.lineTo(c,-c*0.4);g.lineTo(c,c*0.5);g.closePath();g.fill();g.stroke();g.restore()}}
    g.restore()}
  g.restore()}

// --- NAME TAGS PINNED TO EACH LITTLE PERSON (owner request 2026-11-22) ---
// Each name floats directly above its own figure (NAMES[i] -> figure i+1). Size shrinks with distance; neighbours
// alternate high/low with a short stem so tags don't overlap. Use with a camera gliding along the line.
function headTags(t,a){if(a<=0)return;const list=NAMES.length?NAMES.map(n=>'@'+n.replace(/^@/,'')):[null];g.save();g.globalAlpha=Math.min(1,a);
  const items=[];list.forEach((s,i)=>{const fi=i+1;if(fi>=L.N)return;const [x,z]=L.pos(fi);const hop=0.05*Math.max(0,Math.sin(t*7+fi*0.9));
    _v3.set(x,0.82+hop,z);const d=_v3.distanceTo(L.cam.position);_v3.project(L.cam);if(_v3.z>1||Math.abs(_v3.x)>1.15||_v3.y>1||_v3.y<-1)return;
    items.push({s,i,hx:(_v3.x+1)/2*W,hy:(1-_v3.y)/2*H,d})});
  items.sort((p,q)=>q.d-p.d);// far first, near on top
  const placed=[];
  for(const it of items){const lbl=it.s===null?'@YOUR_NAME?':it.s;let fs=clamp(Math.round(240/it.d),36,50);g.font=`800 ${fs}px Inter, NotoAr, NotoThai`;while(fs>30&&g.measureText(lbl).width+fs>540){fs-=2;g.font=`800 ${fs}px Inter, NotoAr, NotoThai`}const w=g.measureText(lbl).width+fs*1.0,h=fs*1.6;
    let lift=fs*1.15+(it.i%2)*fs*1.75;let cx=clamp(it.hx,w/2+12,W-w/2-12),ty=it.hy-lift;
    const ex=(it.i===0||it.s===null)?fs*1.85:0;// leader/open tag has a 2nd pill above it: include it in the collision box
    const box=()=>({x:cx,t:ty-h/2-ex,b:ty+h/2,w});const hit=()=>{const B=box();return placed.some(r=>Math.abs(r.x-B.x)<(r.w+B.w)/2+6&&B.t<r.b+4&&B.b>r.t-4)};
    let n=0;while(n++<14&&hit()){ty-=h*0.8}
    placed.push(box());
    const pop=backOut(clamp(a*1.2));
    g.strokeStyle='rgba(255,255,255,0.95)';g.lineWidth=Math.max(2,fs/12);g.beginPath();g.moveTo(it.hx,it.hy-fs*0.25);g.lineTo(cx,ty+h/2);g.stroke();
    g.save();g.translate(cx,ty);g.scale(pop,pop);
    if(it.s===null){tagPill(lbl,0,0,fs,{dash:1,bg:'rgba(255,255,255,0.9)'});tagPill('THE FRONT IS OPEN!',0,-fs*1.75,fs*0.75,{bg:'#FFD23F'})}
    else if(it.i===0){tagPill(lbl,0,0,fs,{bg:'#FFE680'});const cy=-fs*1.7;tagPill('👑 LINE LEADER',0,cy,fs*0.72,{bg:'#FFD23F'})}
    else tagPill(lbl,0,0,fs);
    g.restore()}
  g.restore()}
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
    pill(CFG.cmpRef,W/2,1300,46,'#fff','#111',t,C.cmpWord,C.and);comic(CFG.cmpPop,(CFG.cmp==='island'&&CFG.cmpFrac>1)?W*0.3:['everest','pyramid','obelisk','sky','tower','skyscraper'].includes(CFG.cmp)?(CFG.cmp==='sky'?W*0.3:W*0.24):(CFG.cmpPop.length>6?W*0.62:W*0.74),(CFG.cmp==='island'&&CFG.cmpFrac>1)?620:CFG.cmp==='sky'?(880/Math.max(1,CFG.cmpFrac)<600?560:1010):CFG.cmp==='tower'?700:['everest','pyramid','obelisk','skyscraper'].includes(CFG.cmp)?520:470,CFG.cmpPop.length>6?78:96,t,C.cmpWord+0.15,{life:1.2,rot:0.1,fill:'#fff'})}
  else if(t<C.s6){// S5: globe + % bar
    clear3d();setBG('space');flash(t,C.and,0.15);globe(t,1,seg(t,C.pctWord,C.pctWord+1.4));
    const a=easeOut(seg(t,C.pctWord,C.pctWord+0.3));g.save();g.globalAlpha=a;const s=backOut(seg(t,C.pctWord,C.pctWord+0.35));g.translate(W/2,250);g.scale(s,s);panel(0,0,700,170,'rgba(10,12,25,0.88)','#FFD23F');txt(CFG.pctText,0,-14,104,{stroke:0,fill:'#FFD23F'});txt('OF THE WAY AROUND',0,58,36,{stroke:0});g.restore();
    pctBar(t,a,1215);comic('BRUH.',W*0.25,560,96,t,C.s6-1.1,{life:1.2,rot:-0.1,fill:'#fff'})}
  else{// S6: camera glides down the line, every commenter's name pinned over their own little person; then back to opening (loop)
    const u=t-TT,cheer=1-ease(seg(t,TT-1.0,TT-0.2));
    const gEnd=C.s6+ROLL,ri=rollIdx(clamp(t-C.s6,0,ROLL)),zc=L.pos(1)[1]-0.15-ri*L.SP;
    const glide={p:[5.0,1.2,zc+0.2],l:[0,0.7,zc]};
    const kb=ease(seg(t,gEnd,TT-0.15));const cam={p:mix(glide.p,CAM0.p,kb),l:mix(glide.l,CAM0.l,kb)};
    lineScene(u,cam,{armL:[lerp(0.3+0.03*Math.sin(u*2),2.7+0.25*Math.sin(t*12),cheer),0.2*cheer],armR:[lerp(0.3+0.03*Math.sin(u*2+1),2.7+0.25*Math.cos(t*12),cheer),-0.2*cheer],mouth:cheer>0.5?'grin':'smile',jump:cheer>0?0.06*cheer*Math.abs(Math.sin(t*9)):0.012*Math.sin(u*2.4),blink:BLINK(u),bendL:0.3*cheer,bendR:0.3*cheer});
    headTags(t,easeOut(seg(t,C.s6,C.s6+0.4))*(1-seg(t,gEnd-0.1,gEnd+0.4)));if(N_NEW>1&&t<gEnd){const a=easeOut(seg(t,C.s6+0.3,C.s6+0.7))*(1-seg(t,gEnd-0.3,gEnd));if(a>0){g.save();g.globalAlpha=a;pill('NEW IN THE LINE: '+(N_NEW-1),W/2,1600,40,'#5BE37A','#111',t,0,1e9);g.restore()}}
    flash(t,C.s6,0.15);if(N_NEW>1)pill('FIND YOUR NAME! 👀',W/2,330,64,'#FFD23F','#111',t,C.s6+0.4,gEnd);if(C.cta>C.hit){pill('HIT '+CFG.cta+'!',W/2,330,74,'#FF3D7F','#fff',t,C.hit,C.cta);pill('COMMENT TO JOIN THE LINE!',W/2,330,60,'#fff','#111',t,C.cta,TT-0.5)}else{pill('COMMENT TO JOIN THE LINE!',W/2,330,60,'#fff','#111',t,C.cta,C.hit);pill('HIT '+CFG.cta+'!',W/2,330,74,'#FF3D7F','#fff',t,C.hit,TT-0.5)}comic('+1',W*0.7,700,110,t,C.hit+0.9,{life:0.8,rot:0.1,fill:'#5BE37A'});comic('+1',W*0.3,640,100,t,C.hit+1.5,{life:0.8,rot:-0.1,fill:'#5BE37A'})}
  vignette();captions(t)};
