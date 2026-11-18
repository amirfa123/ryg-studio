// ===== Chapter 9: checklist + outro (global 233.7 - 265.0) =====
const T0=233.7,TT=31.3;
function listTV(o){tvDraw(o,(c,w,h)=>{c.fillStyle='#FFFDF4';c.fillRect(0,0,w,h);c.fillStyle='#FF3DA6';c.fillRect(0,0,w,80);c.font='900 44px Inter';c.textAlign='center';c.fillStyle='#fff';c.fillText('SURVIVAL CHECKLIST',w/2,56);for(let i=0;i<5;i++){c.strokeStyle='#111';c.lineWidth=5;c.strokeRect(60,110+i*48,30,30);c.fillStyle='#C9CDD6';c.fillRect(110,118+i*48,400,16)}})}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();guy.outfit({snapback:1,chain:1,shades:1});
  if(t<5.3){const R=scene('room');listTV(R);clockDraw(R,11,40);putGuy(R.S,0,0.12,1.75,PI);props.pad.visible=true;props.pad.position.set(0,1.0,0.62);guy.pose({...SIT,reachL:[0.15,1.0,0.6],reachR:[-0.15,1.0,0.6],blink:BLINK(t),mouth:'smile'});
    const k=ease(seg(t,0,5.3));R.shot(mix([-1.6,3.4,6.6],[-1.0,3.1,5.6],k),[0,1.9,-2.5]);chapterCard(t,0.05,5.2,8,'YOUR GTA 6 SURVIVAL CHECKLIST');flash(t,0,0.2)}
  else if(t<16.6){const S=scene('stage');stageOnly();setBG('teal');putGuy(S.S,2.6,0,0,-0.35);const nod=Math.sin(t*5)*0.08;guy.pose(idle(t,{armR:[1.4,-0.15],armL:[0.3,0],headPitch:nod,headYaw:-0.25,mouth:t>14.9?'grin':'smile'}));S.shot([0,1.3,9.5],[0,1.1,0]);
    const cx=W*0.36,cy=H*0.47;g.save();g.translate(cx,cy);g.fillStyle='#C98B4A';g.strokeStyle='#111';g.lineWidth=9;rr(-520,-400,1040,800,34);g.fill();g.stroke();g.fillStyle='#FFFDF4';rr(-480,-350,960,720,18);g.fill();g.stroke();g.fillStyle='#9AA0AA';rr(-110,-430,220,70,16);g.fill();g.stroke();g.restore();
    txt('SURVIVAL CHECKLIST',cx,cy-285,60,{fill:'#FF3DA6',stroke:0});
    const L=[['CLEAR 212 GB',5.5],['PRELOAD BEFORE MIDNIGHT',7.9],['PROTECT YOUR PARTNER',9.7],['CHANGE CLOTHES IF WANTED',11.0],['BANK YOUR MONEY',13.8]];
    L.forEach(([s,tk],i)=>{const y=cy-170+i*118,on=t>tk;if(i===4&&t>14.9){g.fillStyle=`rgba(255,210,63,${0.35+0.15*Math.sin(t*6)})`;rr(cx-440,y-50,880,100,20);g.fill()}g.strokeStyle='#111';g.lineWidth=7;g.strokeRect(cx-410,y-32,64,64);txt(s,cx-310,y+2,47,{align:'left',fill:on?'#111':'#9AA0AA',stroke:0});if(on)check(cx-378,y-6,1.15*pop(t,tk))});
    flash(t,5.3,0.2)}
  else if(t<23.6){clear3d();setBG('neon');g.save();g.fillStyle='#111';g.fillRect(0,H*0.3,W,H*0.36);const off=(t*260)%300;for(let i=-1;i<8;i++){const x=i*300-off;g.fillStyle='#2A2D35';rr(x+30,H*0.34,240,H*0.28,14);g.fill();g.fillStyle=['#FF3DA6','#3FF0FF','#FFD23F'][((i+Math.floor(t*260/300))%3+3)%3];rr(x+50,H*0.37,200,H*0.22,10);g.fill();for(const yy of [H*0.31,H*0.635]){for(let k=0;k<6;k++){g.fillStyle='#EEE';g.fillRect(x+20+k*48,yy,26,16)}}}g.restore();
    txt('30 FPS',W/2,H*0.48,200*pop(t,18.8),{fill:'#fff',sw:34});pill('ON LAUNCH DAY',W/2,H*0.16,52,'#FFD23F','#111',t,17.0,23.55);pill('A LITTLE CINEMATIC = NORMAL',W/2,H*0.8,50,'#5BE37A','#111',t,21.6,23.55);flash(t,16.6,0.2)}
  else if(t<26.4){const R=scene('room');listTV(R);clockDraw(R,11,50);const got=t>24.0;R.tbowl.visible=!got;props.bowl.visible=got;props.bowl.position.set(0,1.05,0.66);putGuy(R.S,0,0.12,1.75,PI);
    guy.pose({...SIT,reachL:got?[0.2,1.08,0.62]:[0.25,0.75,0.9],reachR:got?[-0.2,1.08,0.62]:[-0.1,0.75,0.9],blink:BLINK(t),mouth:'grin'});R.shot([0.6,2.0,-2.3],[0,1.25,1.8]);
    pill('GRAB YOUR SNACKS',W/2,110,54,'#FF8A3D','#111',t,23.7,25.0);pill('CHARGE YOUR CONTROLLER',W/2,110,54,'#3FF0FF','#111',t,25.05,26.35);if(t>25.1){const c=clamp((t-25.1)/1.2);panel(W*0.85,H*0.3,300,120);bar(W*0.85-110,H*0.3-25,200,50,c,'#5BE37A');g.fillStyle='#fff';g.fillRect(W*0.85+95,H*0.3-12,12,24)}flash(t,23.6,0.2)}
  else{const C=scene('city');C.mood('night');C.cop.c.visible=false;if(C.heli)C.heli.h.visible=false;C.car.c.position.set(1.6,0,-1.2);C.car.c.rotation.set(0,0,0);C.car.color(0xFF3D7F);C.car.spin(0);putGuy(C.S,-1.2,0.18,-3.2,0.15);
    const wv=t>29.3;guy.pose(idle(t,{mouth:'grin',armR:[wv?2.4+0.25*Math.sin(t*9):0.3,0],bendR:wv?0.5:0}));const k=ease(seg(t,26.4,31.3));C.shot(mix([0.3,1.9,8.0],[0.6,3.4,14.5],k),mix([0,1.4,-2.5],[0.4,2.6,-3],k));
    pill('TONIGHT, LEONIDA IS WAITING',W/2,H*0.14,52,'#FF3DA6','#fff',t,26.6,29.25);titleBlock(easeOut(seg(t,29.3,29.7)),'GTA 6 · THURSDAY NOV 19','SEE YOU IN VICE CITY',110);flash(t,26.4,0.2)}
  vignette();cap16(t+T0)};
