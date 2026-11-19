// ===== Chapter 7: sprinting forever (global 225.84 - 256.64) =====
const T0=225.84,TT=30.8;
function battery(x,y,f,lab){g.save();g.translate(x,y);g.fillStyle='rgba(0,0,0,0.5)';g.strokeStyle='#111';g.lineWidth=10;rr(-200,-90,380,180,24);g.fill();g.stroke();g.fillStyle='#111';rr(180,-36,30,72,8);g.fill();
  const c=f>0.5?'#5BE37A':f>0.2?'#FFD23F':'#FF4A4A';if(f>0){g.fillStyle=c;rr(-186,-76,352*clamp(f),152,16);g.fill()}g.restore();if(lab)txt(lab,x,y-130,44,{sw:10})}
function sweat(x,y,t){for(let i=0;i<3;i++){const ph=((t*1.6+i/3)%1);g.save();g.globalAlpha=1-ph;g.fillStyle='#7FD3FF';g.strokeStyle='#111';g.lineWidth=4;const xx=x+(i-1)*50+ph*30*(i-1),yy=y+ph*80;g.beginPath();g.moveTo(xx,yy-22);g.quadraticCurveTo(xx+14,yy,xx,yy+10);g.quadraticCurveTo(xx-14,yy,xx,yy-22);g.fill();g.stroke();g.restore()}}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();holder.visible=true;
  const Hy=scene('hwy');Hy.piv.visible=false;guy.outfit({headphones:1});
  if(t<2.9){const x=-6+t*3;putGuy(Hy.S,x,0,2,PI/2);guy.pose(walk(t,10,{mouth:'smile'}));Hy.shot([x+3,1.6,8],[x+1,1.0,2]);chapterCard(t,0.05,2.85,7,'BONUS: SPRINTING FOREVER');flash(t,0,0.2)}
  else if(t<6.2){const x=10+(t-2.9)*12;putGuy(Hy.S,x,0,2,PI/2);guy.pose(run(t,{mouth:'grin',wide:false}));Hy.shot([x+2,1.8,9],[x+0.5,1.0,2]);
    pill('IN GTA',W/2,110,56,'#FF3DA6','#fff',t,3.0,6.15);battery(W*0.86,H*0.2,1,'STAMINA');txtA('∞',W*0.86-10,H*0.2+12,110,1,{fill:'#111',stroke:0});comic('ACROSS THE MAP!',W*0.36,H*0.32,90,t,4.4,{life:1.6,rot:-0.05});flash(t,2.9,0.2)}
  else if(t<8.0){const x=60+(t-6.2)*12;putGuy(Hy.S,x,0,2,PI/2);guy.pose(run(t,{mouth:'o',mouthSize:0.8}));Hy.shot([x+6,1.4,5],[x,1.2,2]);
    g.fillStyle='rgba(20,30,80,0.25)';g.fillRect(0,0,W,H);txtA('REAL HUMANS?',W/2,H*0.2,110,pop(t,6.3),{fill:'#FFD23F',sw:22});flash(t,6.2,0.2)}
  else if(t<15.1){const x=90+(t-8)*13;putGuy(Hy.S,x,0,2,PI/2);guy.pose(run(t*1.15,{mouth:'teeth',teethGap:0.4}));Hy.shot([x-1,1.5,8.5],[x+0.5,1.1,2]);
    pill('FASTEST SPRINTER EVER',W/2,110,54,'#FFD23F','#111',t,8.1,15.05);speedo(W*0.15,H*0.44,140,44*clamp(seg(t,9.8,11.4)),60,'KM/H','TOP SPEED');
    if(t>12.2){panel(W*0.84,H*0.44,420,240);txt('HOLD IT FOR',W*0.84,H*0.36,38,{stroke:0,fill:'#fff'});txt('A FEW SEC',W*0.84,H*0.46,60,{fill:'#FF4A4A',stroke:0})}flash(t,8.0,0.2)}
  else if(t<18.8){clear3d();setBG('neon');const f=1-clamp(seg(t,15.8,18.2));battery(W*0.36,H*0.5,f,"MUSCLES' INSTANT FUEL");panel(W*0.76,H*0.5,420,260);txt('TIME',W*0.76,H*0.41,40,{stroke:0,fill:'#3FF0FF'});
    txt((10*(1-f)).toFixed(1)+' s',W*0.76,H*0.53,100,{fill:'#fff',stroke:0});if(f<=0)comic('EMPTY!',W*0.36,H*0.78,100,t,18.2,{life:0.6,rot:-0.06,fill:'#FF4A4A'});flash(t,15.1,0.2)}
  else if(t<21.9){const k=seg(t,18.8,21.4);const x=200+(t-18.8)*lerp(12,3,k);putGuy(Hy.S,x,0,2,PI/2);const r=run(t*lerp(1.1,0.55,k),{mouth:'o',mouthSize:1.2,wide:true,headPitch:0.25*k});guy.pose(r);Hy.shot([x+3,1.5,7.5],[x+0.6,1.1,2]);
    speedo(W*0.15,H*0.44,140,lerp(44,24,k),60,'KM/H','SPEED');sweat(W*0.55,H*0.3,t);pill('SLOWING DOWN...',W/2,110,54,'#FF4A4A','#fff',t,19.0,21.85);comic('PANT PANT',W*0.78,H*0.36,80,t,20.2,{life:1.6,rot:0.06});flash(t,18.8,0.2)}
  else{clear3d();setBG('blue');const gx=W*0.12,gy=H*0.8,gw=W*0.76,gh=H*0.52;g.strokeStyle='#fff';g.lineWidth=6;g.beginPath();g.moveTo(gx,gy-gh);g.lineTo(gx,gy);g.lineTo(gx+gw,gy);g.stroke();
    txt('SPEED',gx-10,gy-gh-30,36,{sw:8});txt('0 m',gx,gy+44,34,{sw:8});txt('50 m',gx+gw/2,gy+44,34,{sw:8});txt('100 m',gx+gw,gy+44,34,{sw:8});
    const curve=(d,drop)=>{const v=1-Math.exp(-d/18);return v*(1-drop*Math.max(0,(d-60)/40)**1.3)};const k=clamp(seg(t,22.2,25.0));
    const draw=(drop,col,kk)=>{g.strokeStyle=col;g.lineWidth=12;g.lineCap='round';g.beginPath();for(let i=0;i<=100*kk;i++){const xx=gx+gw*i/100,yy=gy-gh*0.92*curve(i,drop);i?g.lineTo(xx,yy):g.moveTo(xx,yy)}g.stroke()};
    draw(0.12,'#FFD23F',k);if(k>0.6){const px=gx+gw*0.62,py=gy-gh*0.92*curve(62,0.12);g.fillStyle='#fff';g.beginPath();g.arc(px,py,14,0,7);g.fill();txtA('TOP SPEED ~60 m',px,py-50,40,easeOut(seg(t,24.0,24.3)),{sw:10})}
    if(k>=1&&t<26.2)txtA('SLOWING DOWN!',gx+gw*0.88,gy-gh*0.62,44,easeOut(seg(t,25.0,25.3)),{fill:'#FF4A4A',sw:10});
    if(t>26.2){const k2=clamp(seg(t,26.2,27.6));draw(0.25,'#FF4A4A',k2);draw(0.06,'#5BE37A',k2);if(k2>=1){txtA('WINNER',gx+gw+10,gy-gh*0.92*curve(100,0.06)-6,40,1,{fill:'#5BE37A',sw:10,align:'left'});
      panel(W*0.5,H*0.13,1100,120);txtA('THE WINNER SLOWS DOWN THE LEAST',W*0.5,H*0.13+4,52,easeOut(seg(t,27.7,28.0)),{fill:'#FFD23F',stroke:0})}}flash(t,21.9,0.2)}
  vignette();cap16(t+T0)};
