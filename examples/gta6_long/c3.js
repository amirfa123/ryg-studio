// ===== Chapter 3: download size (global 56.0 - 83.5) =====
const T0=56.0,TT=27.5;
function storageTV(o,f){tvDraw(o,(c,w,h)=>{c.fillStyle='#12082E';c.fillRect(0,0,w,h);c.font='900 44px Inter';c.textAlign='center';c.fillStyle='#fff';c.fillText('STORAGE',w/2,80);c.fillStyle='#333';c.fillRect(60,150,w-120,60);c.fillStyle='#FF3DA6';c.fillRect(60,150,(w-120)*f,60);c.strokeStyle='#fff';c.lineWidth=4;c.strokeRect(60,150,w-120,60);c.font='900 90px Inter';c.fillStyle='#FFD23F';c.fillText('?',w/2,310)})}
function movieCase(x,y,s,col){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle=col;g.strokeStyle='#111';g.lineWidth=5;rr(-34,-48,68,96,8);g.fill();g.stroke();g.fillStyle='rgba(255,255,255,0.85)';g.beginPath();g.moveTo(-10,-14);g.lineTo(16,0);g.lineTo(-10,14);g.closePath();g.fill();g.restore()}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<2.8){const R=scene('room');storageTV(R,0.15+0.1*Math.sin(t*3));clockDraw(R,11,0);putGuy(R.S,0,0.12,1.75,PI);props.pad.visible=true;props.pad.position.set(0,1.0,0.62);
    guy.pose({...SIT,reachL:[0.15,1.0,0.6],reachR:[-0.15,1.0,0.6],blink:BLINK(t),mouth:'smile'});R.shot([-1.2,3.1,5.4],[0,1.9,-2.5]);chapterCard(t,0.05,2.75,2,'HOW MUCH SPACE DOES IT NEED?');flash(t,0,0.2)}
  else if(t<6.0){const S=scene('stage');stageOnly();setBG('neon');putGuy(S.S,2.2,0,0,-0.4);guy.pose(idle(t,{mouth:'o',mouthSize:0.8,lookY:0.9,look:-0.6,headPitch:-0.2,headRoll:0.12,reachR:[0.05,1.62,0.42],poleR:[-1,-0.3,0.3]}));S.shot([0,1.3,9.5],[0,1.1,0]);
    txt('GUESS!',W*0.34,H*0.18,110,{fill:'#FFD23F',sw:22});
    const btn=(s,y,tk,col)=>{if(t<tk)return;const a=pop(t,tk);g.save();g.translate(W*0.34,y);g.scale(a,a);g.fillStyle=col;g.strokeStyle='#111';g.lineWidth=9;rr(-260,-70,520,140,70);g.fill();g.stroke();g.restore();if(a>0.5)txt(s,W*0.34,y+4,80,{sw:16})};
    btn('50 GB?',H*0.44,2.8,'#3FF0FF');btn('100 GB?',H*0.66,4.0,'#FF8FB1');
    if(t>4.8){const k=seg(t,4.8,5.95);g.save();g.strokeStyle='#FFD23F';g.lineWidth=16;g.beginPath();g.arc(W*0.6,H*0.18,44,-PI/2,-PI/2+PI*2*(1-k));g.stroke();g.restore()}flash(t,2.8,0.2)}
  else if(t<8.8){clear3d();setBG('neon');const k=easeOut(seg(t,6.1,7.8));const v=212*k;const bx=W*0.12,bw=W*0.62,by=H*0.45,bh=140;
    g.fillStyle='rgba(0,0,0,0.45)';rr(bx,by,bw,bh,30);g.fill();const f=Math.min(v,100)/100;g.fillStyle='#5BE37A';rr(bx+8,by+8,(bw-16)*f,bh-16,24);g.fill();
    if(v>100){const over=(v-100)/112;g.fillStyle='#FF3DA6';const sh=(Math.sin(t*40)*6)*clamp(over*2);rr(bx+bw-30+sh,by-10,over*W*0.24,bh+20,24);g.fill();g.strokeStyle='#111';g.lineWidth=8;g.stroke()}
    g.strokeStyle='#111';g.lineWidth=10;rr(bx,by,bw,bh,30);g.stroke();txt('100 GB',bx+bw,by+bh+50,40,{sw:9});txt('0',bx,by+bh+50,40,{sw:9});
    txt(Math.round(v)+' GB',W/2,H*0.25,t>7.8?150+20*Math.exp(-(t-7.8)*6):110,{fill:t>7.8?'#FF3DA6':'#fff',sw:24});comic('WHAT?!',W*0.8,H*0.75,100,t,7.9,{life:0.9,rot:0.1});flash(t,6.0,0.2);flash(t,7.8,0.15)}
  else if(t<11.2){clear3d();setBG('blue');const cols=['#FF3DA6','#3FF0FF','#FFD23F','#5BE37A','#B59CFF'];let n=0;for(let i=0;i<42;i++){const tk=8.9+i*0.04;if(t<tk)continue;n++;const cx=i%14,cy=Math.floor(i/14);movieCase(W*0.16+cx*110,H*0.32+cy*150,pop(t,tk,0.2),cols[i%5])}
    txt('212 GB',W*0.5,H*0.13,90,{fill:'#FFD23F',sw:18});pill('= 40+ HD MOVIES',W/2,H*0.8,64,'#fff','#111',t,9.5,11.15);flash(t,8.8,0.2)}
  else if(t<16.0){const R=scene('room');clockDraw(R,2,10);putGuy(R.S,0,0.12,1.75,PI);const z=Math.sin(t*1.6);guy.pose({...SIT,blink:true,mouth:'o',mouthSize:0.7+0.3*z,headRoll:0.25,headPitch:0.15,armL:[0.45,0],armR:[0.45,0],jump:0.015*z});
    R.shot([0.5,1.9,-2.3],[0,1.25,1.8]);for(let i=0;i<3;i++){const ph=((t*0.7+i/3)%1);txtA('Z',W*0.58+ph*90+i*10,H*0.35-ph*170,50+ph*40,1-ph,{fill:'#fff',sw:10})}
    panel(W/2,H*0.13,880,170);const k=seg(t,11.4,15.6);txt('DOWNLOADING @ 20 Mbps',W/2,H*0.1,44,{stroke:0});bar(W/2-380,H*0.15,760,44,k*0.98,'#3FF0FF');
    const hrs=Math.floor(23.5*ease(k));clockFace(W*0.85,H*0.55,120,hrs%12,(23.5*ease(k)*60)%60);pill('≈ '+hrs+' HOURS',W*0.85,H*0.8,52,'#FFD23F','#111',t,11.6,15.95);flash(t,11.2,0.2)}
  else if(t<21.8){const S=scene('stage');stageOnly();setBG('teal');putGuy(S.S,-2.4,0,0,0.45);const sh=t>19.3;guy.pose(idle(t,{mouth:sh?'o':'smile',wide:sh,mouthSize:1.5,armL:[sh?1.2:0.3,0],armR:[sh?1.2:0.3,0],bendL:sh?0.8:0,bendR:sh?0.8:0}));S.shot([0,1.3,9.5],[0,1.1,0]);
    const op=ease(seg(t,17.5,18.6));const cx=W*0.62,cy=H*0.5;g.save();g.translate(cx,cy);
    g.fillStyle='#1E1F2A';g.strokeStyle='#111';g.lineWidth=10;rr(-10,-250,380,500,24);g.fill();g.stroke();g.fillStyle='#2A2B3A';rr(10,-230,340,460,16);g.fill();
    if(op>0.3){const a=clamp((op-0.3)/0.4);g.globalAlpha=a;g.fillStyle='#fff';g.strokeStyle='#111';g.lineWidth=7;rr(60,-90,240,150,14);g.fill();g.stroke();g.globalAlpha=1}
    g.save();g.translate(-10,0);g.scale(Math.cos(op*PI*0.92),1);g.fillStyle='#FF3DA6';g.strokeStyle='#111';g.lineWidth=10;rr(0,-250,380,500,24);g.fill();g.stroke();if(op<0.5){txt('GAME',190,-40,70,{sw:14});txt('BOXED COPY',190,50,40,{fill:'#111',stroke:0})}g.restore();g.restore();
    if(op>0.6){txtA('DOWNLOAD',cx+180,cy-40,34,1,{fill:'#111',stroke:0});txtA('CODE',cx+180,cy+5,34,1,{fill:'#FF3DA6',stroke:0})}
    if(t>19.2){g.save();g.globalAlpha=0.9;g.strokeStyle='#C9CDD6';g.lineWidth=10;g.setLineDash([18,14]);g.beginPath();g.arc(cx+180,cy+150,70,0,7);g.stroke();g.restore();cross(cx+180,cy+150,1.4*pop(t,19.3))}
    pill('NO DISC INSIDE!',W*0.62,H*0.08,54,'#FF4A4A','#fff',t,19.3,21.75);comic('TWIST!',W*0.3,H*0.2,100,t,16.6,{life:1.2,rot:-0.1});flash(t,16.0,0.2)}
  else{clear3d();setBG('red');const blocks=[['OLD GAME','#3FF0FF',3],['CLIPS','#FFD23F',2],['OLD GAME','#B59CFF',3],['APPS','#5BE37A',1.5],['SCREENSHOTS','#FF8FB1',2.5]];
    const bx=W*0.1,by=H*0.36,bw=W*0.8,bh=150;g.fillStyle='rgba(0,0,0,0.5)';rr(bx,by,bw,bh,24);g.fill();g.strokeStyle='#111';g.lineWidth=8;g.stroke();let x=bx+10;const tot=12;
    blocks.forEach(([s,c,u],i)=>{const w=(bw-20)*u/tot,tk=22.4+i*0.45,d=t-tk;let px=x,py=by+10,rot=0,a=1;if(d>0){const tx=W*0.84,ty=H*0.82;const k=ease(clamp(d/0.55));px=lerp(x,tx-w/4,k);py=lerp(by+10,ty,k)-Math.sin(k*PI)*220;rot=k*2;a=1-seg(d,0.45,0.6)}
      if(a>0){g.save();g.globalAlpha=a;g.translate(px+w/2,py+(bh-20)/2);g.rotate(rot);g.scale(1-0.5*clamp(d/0.55),1-0.5*clamp(d/0.55));g.fillStyle=c;rr(-w/2,-(bh-20)/2,w-6,bh-20,14);g.fill();g.strokeStyle='#111';g.lineWidth=5;g.stroke();g.restore();if(d<=0)txt(s,px+w/2,py+(bh-20)/2,30,{sw:7})}x+=w});
    const tw=W*0.84,th=H*0.84;g.fillStyle='#9AA0AA';g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.moveTo(tw-80,th-60);g.lineTo(tw+80,th-60);g.lineTo(tw+62,th+90);g.lineTo(tw-62,th+90);g.closePath();g.fill();g.stroke();g.fillRect(tw-95,th-85,190,26);g.strokeRect(tw-95,th-85,190,26);
    const fr=clamp((t-22.4)/2.6);txt('FREE: '+Math.round(fr*230)+' GB',W*0.3,H*0.62,64,{fill:fr>0.92?'#5BE37A':'#fff',sw:14});txt('CLEAR SPACE',W*0.5,H*0.16,110,{fill:'#FFD23F',sw:22});comic('RIGHT NOW!',W*0.36,H*0.85,110,t,25.7,{life:1.8,rot:-0.06,fill:'#fff'});flash(t,21.8,0.2)}
  vignette();cap16(t+T0)};
