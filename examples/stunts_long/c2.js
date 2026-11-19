// ===== Chapter 2: roof (global 66.64 - 105.02) =====
const T0=66.64,TT=38.38;
const flail=(t,o={})=>({armL:[2.3+0.5*Math.sin(t*14),0.4*Math.sin(t*11)],armR:[2.3+0.5*Math.cos(t*13),-0.4*Math.sin(t*12)],legL:[0.5*Math.sin(t*10),0.4,0],legR:[-0.5*Math.sin(t*10),0.4,0],mouth:'o',wide:true,mouthSize:1.5,...o});
function cutaway(t,nf,youF,col){const x=W*0.12,yb=H*0.84,fw=360,fh=118;g.save();g.fillStyle='#4A4660';g.fillRect(0,yb,W,H-yb);g.restore();floorCut(x,yb,fw,fh,nf,col);
  for(let i=1;i<=nf;i++){txt(String(i),x-40,yb-(i-0.5)*fh+6,40,{sw:8})}return {x,yb,fw,fh}}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<2.6){const S=scene('roof');S.mat.visible=false;putGuy(S.S,0,S.top+0.5,3.5,0);guy.pose(idle(t,{mouth:'o',mouthSize:0.7,headPitch:0.4,lookY:-0.8}));const k=ease(seg(t,0,2.6));S.shot(mix([0,S.top+4,16],[3,S.top+2.2,10],k),[0,S.top+1,3]);
    chapterCard(t,0.05,2.55,2,'JUMPING OFF A ROOF');flash(t,0,0.2)}
  else if(t<6.5){const S=scene('roof');S.mat.visible=false;const tf=3.3,tl2=4.5;let y=S.top+0.5,z=3.5,o=idle(t,{mouth:'grin'});
    if(t>tf){const k=seg(t,tf,tl2);z=lerp(3.5,5.2,clamp(k*2));y=lerp(S.top+0.5,0,k*k);o=flail(t)}if(t>tl2){y=Math.abs(Math.sin((t-tl2)*8))*0.3*Math.exp(-(t-tl2)*4);z=5.2;o=idle(t,{mouth:'grin',armL:[0.9,0],armR:[0.9,0]})}
    putGuy(S.S,0,y,z,0);guy.pose(o);S.shot([14,8,36],[0,7.6,3]);pill('IN GTA',W*0.8,110,56,'#FF3DA6','#fff',t,2.7,6.45);hpBar(W*0.06,H*0.1,420,t<tl2?1:lerp(1,0.92,easeOut(seg(t,tl2,tl2+0.3))));
    if(t>tl2)txtA('-8%',W*0.06+530,H*0.1+26,56,pop(t,tl2+0.1),{fill:'#FFD23F',sw:12});comic('BOING',W*0.62,H*0.62,90,t,tl2,{life:1.0,rot:0.1});flash(t,2.6,0.2)}
  else if(t<9.7){const S=scene('roof');S.mat.visible=false;putGuy(S.S,0,S.top+0.5,3.6,0);guy.pose(idle(t,{mouth:'o',mouthSize:t>8.3?1.3:0.6,wide:t>8.3,headPitch:0.5,lookY:-1,armL:[0.5+0.06*Math.sin(t*30),0],armR:[0.5+0.06*Math.cos(t*30),0]}));
    S.shot([1.5,1.7,19],[0,S.top+0.6,3]);pill('IN REAL LIFE?',W/2,110,60,'#fff','#111',t,6.8,9.65);comic('GULP',W*0.66,H*0.32,100,t,8.3,{life:1.3,rot:0.08,fill:'#FFD23F'});flash(t,6.5,0.2)}
  else if(t<19.2){clear3d();setBG('blue');const c=cutaway(t,5,4,'#7FE0D6');const yb=c.yb,fh=c.fh,top4=yb-4*fh;
    const s4=easeOut(seg(t,11.4,11.8));g.save();g.globalAlpha=s4;g.strokeStyle='#FFD23F';g.lineWidth=8;g.setLineDash([18,12]);g.beginPath();g.moveTo(c.x-30,top4);g.lineTo(c.x+c.fw+40,top4);g.stroke();g.restore();
    let fy=top4;if(t>16.0){fy=lerp(top4,yb,clamp(Math.pow(seg(t,16.0,17.6),2)))}stickFig(c.x+c.fw+180,fy-10,1.5,t>16?0.3*Math.sin(t*12):0);txtA('YOU',c.x+c.fw+180,fy-110,40,s4,{fill:'#FFD23F',sw:10});txtA('15 m',c.x+c.fw+60,top4-30,40,s4,{fill:'#FFD23F',sw:10});
    panel(W*0.7,H*0.36,760,330);txtA('4 STORIES',W*0.7,H*0.28,80,easeOut(seg(t,11.4,11.7)),{fill:'#fff',sw:16});txtA('≈ 15 METERS',W*0.7,H*0.38,64,easeOut(seg(t,12.6,12.9)),{fill:'#3FF0FF',sw:14});
    if(t>14.0){const a=pop(t,14.0);txtA('50% DEADLY',W*0.7,H*0.47,74*clamp(a,0,1.2),1,{fill:'#FF4A4A',sw:16})}
    if(t>16.0){const v=60*clamp(seg(t,16.0,17.6));speedo(W*0.7,H*0.74,140,v,100,'KM/H','IMPACT SPEED')}flash(t,9.7,0.2);if(t>17.6)flash(t,17.6,0.15)}
  else if(t<21.6){clear3d();setBG('red');const c=cutaway(t,2,2,'#FFB38A');stickFig(c.x+c.fw/2,c.yb-2*c.fh-10,1.5);arrow(c.x+c.fw+120,c.yb-2*c.fh,c.x+c.fw+120,c.yb-30,'#FF4A4A',22);
    txtA('JUST 1-2 FLOORS',W*0.66,H*0.24,70,easeOut(seg(t,19.3,19.6)),{fill:'#fff',sw:14});const b=seg(t,20.6,20.9);bone(W*0.66,H*0.5,1.8,b>0?easeOut(b):0);if(b>0)comic('SNAP!',W*0.8,H*0.36,90,t,20.6,{life:1.0,rot:0.1,fill:'#FF4A4A'});flash(t,19.2,0.2)}
  else if(t<27.0){clear3d();setBG('neon');txtA('HOW FAST YOU STOP = HOW HARD IT HITS',W/2,H*0.13,52,easeOut(seg(t,21.7,22.1)),{fill:'#FFD23F',sw:12});
    const L=[{x:W*0.27,lab:'CONCRETE',d:0.06,tk:22.4,c:'#9AA0AA',big:1},{x:W*0.73,lab:'CRASH MAT',d:0.55,tk:24.4,c:'#2E86DE',big:0}];
    for(const o of L){if(t<o.tk)continue;const a=easeOut(seg(t,o.tk,o.tk+0.3));g.save();g.globalAlpha=a;panel(o.x,H*0.5,700,560,'rgba(10,12,25,0.8)',o.big?'#FF4A4A':'#5BE37A');g.restore();
      const gy=H*0.62;g.fillStyle=o.c;g.strokeStyle='#111';g.lineWidth=6;rr(o.x-240,gy,480,o.big?40:90,10);g.fill();g.stroke();const fall=clamp(seg(t,o.tk+0.3,o.tk+0.9));stickFig(o.x,lerp(H*0.3,gy-34+(o.big?0:30),fall),1.4);
      txtA(o.lab,o.x,H*0.28,52,a,{});txtA(o.big?'SHORT STOP':'LONG STOP',o.x,H*0.73,46,a,{fill:'#fff',sw:10});txtA(o.big?'= HUGE FORCE':'= SMALL FORCE',o.x,H*0.79,46,a,{fill:o.big?'#FF4A4A':'#5BE37A',sw:10});
      if(fall>=1){const s=o.big?2:1;arrow(o.x+170,gy-180*s*0.6-20,o.x+170,gy-10,o.big?'#FF4A4A':'#5BE37A',o.big?30:16)}}flash(t,21.6,0.2)}
  else if(t<32.4){const S=scene('roof');S.mat.visible=false;const lx=14,top=2.35;const tj=28.2,tland=28.9,tr=29.0,tre=29.9;let x=lx-0.4,y=top,rx=0,o=idle(t,{mouth:'smile'});
    if(t>tj&&t<tland){const k=seg(t,tj,tland);x=lerp(lx-0.4,lx+2.8,k);y=lerp(top,0,k*k)+0.6*Math.sin(PI*k);o={...flail(t),mouth:'grin',wide:false,armL:[2.0,0],armR:[2.0,0]}}
    else if(t>=tland&&t<tr){x=lx+2.8;y=0;o={legL:[1.2,2.0,0],legR:[1.2,2.0,0],sitY:-0.45,armL:[0.8,0],armR:[0.8,0],mouth:'grin'}}
    else if(t>=tr&&t<tre){const k=seg(t,tr,tre);x=lerp(lx+2.8,lx+5.6,k);y=0.55+0.25*Math.sin(PI*k);rx=-PI*2*ease(k);o={legL:[1.6,2.2,0],legR:[1.6,2.2,0],armL:[1.6,0],armR:[1.6,0],bendL:1.4,bendR:1.4,mouth:'grin'}}
    else if(t>=tre){x=lx+5.6;y=0;o=idle(t,{mouth:'grin',armL:[2.4,0],armR:[2.4,0]})}
    if(rx){rollAt(S.S,x,0.05,6.3,rx);guy.pose(CURL)}else{putGuy(S.S,x,y,6.3,PI/2);guy.pose(o)}
    S.shot([lx+3,2.8,20],[lx+3,1.9,6]);pill('FREE RUNNERS',W/2,110,56,'#5BE37A','#111',t,27.1,32.35);pill('BEND YOUR LEGS',W*0.3,H*0.3,44,'#fff','#111',t,29.3,32.35);pill('ROLL!',W*0.72,H*0.3,52,'#FFD23F','#111',t,30.6,32.35);flash(t,27.0,0.2)}
  else{clear3d();setBG('blue');const a=easeOut(seg(t,32.5,32.9)),b=easeOut(seg(t,34.6,35.0));
    if(a>0){g.save();g.globalAlpha=a;panel(W*0.27,H*0.47,640,560,'rgba(10,12,25,0.85)','#FFD23F');g.restore();floorCut(W*0.27-90,H*0.6,180,80,1,'#7FE0D6');txtA('1 FLOOR',W*0.27,H*0.27,64,a,{});txtA('MAYBE',W*0.27,H*0.7,72,a,{fill:'#FFD23F',sw:14})}
    if(b>0){g.save();g.globalAlpha=b;panel(W*0.73,H*0.47,640,560,'rgba(10,12,25,0.85)','#FF4A4A');g.restore();floorCut(W*0.73-60,H*0.62,120,56,4,'#7FE0D6');txtA('4 FLOORS',W*0.73,H*0.27,64,b,{})}
    if(t>35.7){cross(W*0.73,H*0.48,2.8*pop(t,35.7));txtA('NOT A CHANCE',W*0.73,H*0.7,64,easeOut(seg(t,35.8,36.1)),{fill:'#FF4A4A',sw:14})}flash(t,32.4,0.2)}
  vignette();cap16(t+T0)};
