// ===== Chapter 1: alligator bite (global 32.1 - 69.26) =====
const T0=32.1,TT=37.16;
const SW=scene('swamp');const GZ=mkGator(SW.S);
function hbar(x,y,w,f,col,label,val,a){if(a<=0)return;g.save();g.globalAlpha=clamp(a*2);txt(label,x-20,y,52,{align:'right',sw:12});g.fillStyle='rgba(0,0,0,0.45)';rr(x,y-40,w,80,20);g.fill();g.fillStyle=col;rr(x,y-40,Math.max(40,w*f*clamp(a)),80,20);g.fill();g.strokeStyle='#111';g.lineWidth=6;g.stroke();
  txt(val,x+Math.max(40,w*f*clamp(a))+24,y+2,56,{align:'left',fill:col,sw:12});g.restore()}
function hand2D(x,y,s,flip){g.save();g.translate(x,y);g.scale(flip?-s:s,s);g.fillStyle='#FFCC2E';g.strokeStyle='#111';g.lineWidth=7;g.beginPath();g.ellipse(0,0,60,44,0,0,7);g.fill();g.stroke();for(let i=0;i<4;i++){g.beginPath();g.ellipse(46,-30+i*20,26,10,0,0,7);g.fill();g.stroke()}g.fillStyle='#14907E';rr(-120,-36,70,72,14);g.fill();g.stroke();g.restore()}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();holder.visible=true;GZ.a.visible=true;
  SW.gators.forEach((g2,i)=>g2.position.y=-0.25+0.04*Math.sin(t*2+i));
  if(t<7.2){const snap=t>2.4?Math.abs(Math.sin(t*3.2)):0.15;GZ.a.position.set(-4.2,-0.12,1.4);GZ.a.rotation.set(0,-0.5,0);GZ.anim(t,snap,0,3);
    putGuy(SW.S,0.3,0.51,2.2,-0.6);guy.pose({...idle(t),mouth:t>4.6?'o':'smile',mouthSize:0.5,look:-0.6,lookY:-0.3,headYaw:-0.3,armR:[t>4.6?1.2:0.3,0],bendR:t>4.6?1.6:0});
    if(t<2.4)SW.shot([2.0,3.6,12.5],[-0.8,0.6,1.6]);else SW.shot([-0.6,2.6,10.5],[-2.0,0.8,2.0]);
    chapterCard(t,0.05,2.3,1,'THE ALLIGATOR');pill('HOW HARD CAN IT BITE?',W/2,110,56,GOLD,'#111',t,2.45,7.15);if(t>4.6){for(let i=0;i<3;i++)txtA('?',W*(0.14+i*0.07),H*(0.35-0.05*Math.sin(t*3+i)),110,pop(t,4.6+i*0.2),{fill:GOLD,sw:18})}flash(t,2.4,0.15)}
  else if(t<11.4){clear3d();setBG('swamp');const bite=easeOut(seg(t,8.6,8.9));gator2D(W*0.42,H*0.52,3.0,lerp(1,0.12,bite));
    g.save();g.fillStyle='#C9CDD6';g.strokeStyle='#111';g.lineWidth=8;rr(W*0.56,H*0.47,420,50,14);g.fill();g.stroke();g.fillStyle='#22222C';rr(W*0.78,H*0.4,150,110,16);g.fill();g.stroke();g.restore();
    const v=2125*easeOut(seg(t,9.0,11.0));txt(Math.round(v).toLocaleString('en-US')+' lb',W*0.78+75,H*0.4+55,40,{fill:'#9DFF6B',stroke:0});
    pill('BITE BAR',W/2,110,56,GOLD,'#111',t,7.25,11.35);comic('CHOMP!',W*0.42,H*0.24,110,t,8.75,{life:1.4,rot:-0.08,fill:'#9DFF6B'});flash(t,7.2,0.2)}
  else if(t<19.4){clear3d();setBG('neon');txtA('BITE FORCE',W/2,120,88,easeOut(seg(t,11.45,11.8)),{fill:GOLD,sw:18});
    hbar(W*0.32,H*0.36,1000,1.0,'#5BE37A','ALLIGATOR','~2,125 lb',seg(t,11.5,12.8));
    hbar(W*0.32,H*0.56,1000,940/2125,'#FFB020','LION','~940 lb',seg(t,14.1,15.0));
    hbar(W*0.32,H*0.76,1000,170/2125,'#3FF0FF','YOU','~170 lb',seg(t,16.9,17.6));if(t>17.6)comic('WEAK!',W*0.62,H*0.76,90,t,17.7,{life:1.6,rot:-0.1,fill:RED});flash(t,11.4,0.2)}
  else if(t<23.7){clear3d();setBG('teal');gator2D(W*0.5,H*0.56,3.4,0.15);txtA('THE WEIRD PART',W/2,120,80,pop(t,19.45),{fill:GOLD,sw:16});
    const a1=pop(t,20.9),a2=pop(t,22.1);if(t>20.9){g.save();g.globalAlpha=clamp(a1);arrow(W*0.62,H*0.25,W*0.62,H*0.42,RED,40);txt('CLOSE',W*0.71,H*0.3,60,{fill:RED,sw:14});g.restore()}
    if(t>22.1){g.save();g.globalAlpha=clamp(a2);arrow(W*0.66,H*0.74,W*0.66,H*0.82,'#9AA0AA',10);txt('open...',W*0.75,H*0.8,44,{fill:'#C9CDD6',sw:10});g.restore();comic('WEAK!',W*0.3,H*0.3,100,t,22.9,{life:0.8,rot:-0.1,fill:CYAN})}flash(t,19.4,0.2)}
  else if(t<27.9){clear3d();setBG('swamp');const k=easeOut(seg(t,24.2,24.8));gator2D(W*0.5,H*0.56,3.4,lerp(0.6,0,k));hand2D(W*0.7,lerp(H*0.2,H*0.43,k),1.3,true);hand2D(W*0.7,lerp(H*0.95,H*0.67,k),1.3,true);
    if(t>25.0){const s=0.5+0.5*Math.sin(t*14);txtA('HELD SHUT!',W/2,H*0.16,90,pop(t,25.0),{fill:GREEN,sw:18});for(let i=0;i<3;i++){g.save();g.strokeStyle='#fff';g.lineWidth=6;g.beginPath();g.moveTo(W*0.84,H*(0.48+i*0.04));g.lineTo(W*(0.86+0.02*s),H*(0.48+i*0.04));g.stroke();g.restore()}}
    pill('DO NOT TRY THIS',W/2,H*0.8,44,RED,'#fff',t,25.6,27.85);flash(t,23.7,0.2)}
  else if(t<31.6){clear3d();setBG('pink');const a=pop(t,27.9),b=pop(t,30.0);
    g.save();g.translate(W*0.28,H*0.5);g.scale(a,a);panel(0,0,640,520,'rgba(10,12,25,0.9)',RED,34);txt('CLOSING',0,-190,60,{fill:RED,stroke:0});g.restore();if(t>27.9){gator2D(W*0.28,H*0.48,1.6*a,Math.abs(Math.sin(t*6))*0.6);txtA('MONSTER',W*0.28,H*0.7,90,pop(t,28.8),{fill:RED,sw:18})}
    if(t>30.0){g.save();g.translate(W*0.72,H*0.5);g.scale(b,b);panel(0,0,640,520,'rgba(10,12,25,0.9)','#FFE7A0',34);txt('OPENING',0,-190,60,{fill:'#FFE7A0',stroke:0});g.lineCap='round';g.strokeStyle='#111';g.lineWidth=34;g.beginPath();for(let i=0;i<=40;i++){const x=-220+i*11,y=Math.sin(i*0.5+t*6)*30;i?g.lineTo(x,y):g.moveTo(x,y)}g.stroke();g.strokeStyle='#FFE7A0';g.lineWidth=22;g.stroke();g.restore();txtA('NOODLE',W*0.72,H*0.7,90,pop(t,30.7),{fill:'#FFE7A0',sw:18})}flash(t,27.9,0.2)}
  else{const k=t-31.6;const gx=-14+k*3.4,px=gx+3.2+k*0.25;GZ.a.position.set(gx,-0.02,1.0);GZ.a.rotation.set(0,0,0);GZ.anim(t,0.4+0.3*Math.sin(t*10),k<4.3?1:0.2,12);
    putGuy(SW.S,px,0,1.2,PI/2);guy.pose(run(t));SW.shot([gx+2.5,2.4,10.5],[gx+2.0,0.7,1.0]);
    const v=k<4.0?11*easeOut(seg(k,0,0.8)):11*(1-seg(k,4.0,5.3));speedo(W*0.15,H*0.3,150,v,20,'MPH','GATOR');
    const st=1-seg(t,33.8,36.3);hpBar(W*0.62,H*0.1,560,st,'GATOR STAMINA');if(t>35.4)pill('SHORT BURSTS ONLY',W*0.6,H*0.3,52,GOLD,'#111',t,35.4,37.2);flash(t,31.6,0.2)}
  vignette();cap16(t+T0)};
