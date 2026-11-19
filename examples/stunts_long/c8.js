// ===== Chapter 8: final score (global 256.64 - 279.0) =====
const T0=256.64,TT=22.37;
function cityTV(o,t){tvDraw(o,(c,w,h)=>{const gr=c.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#3A1670');gr.addColorStop(1,'#FF5E8A');c.fillStyle=gr;c.fillRect(0,0,w,h);c.fillStyle='rgba(255,230,128,0.9)';c.beginPath();c.arc(w*0.7,h*0.6,60,0,7);c.fill();
  c.fillStyle='#1B1240';for(let i=0;i<14;i++){const bw=36+hash(i)*30,bh=60+hash(i*3)*130;c.fillRect(i*50,h-bh-40,bw,bh+40)}c.fillStyle='#2E2B40';c.fillRect(0,h-40,w,40);const x=((t*260)%(w+160))-80;c.fillStyle='#FF3D7F';c.fillRect(x,h-62,90,24);c.fillRect(x+20,h-80,46,20);c.fillStyle='#111';c.beginPath();c.arc(x+20,h-36,10,0,7);c.arc(x+70,h-36,10,0,7);c.fill()})}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();holder.visible=true;guy.outfit({snapback:1,chain:1,shades:1});
  if(t<14.2){clear3d();setBG('neon');txtA('FINAL SCORE',W/2,H*0.12,96,easeOut(seg(t,0.05,0.4)),{fill:'#FFD23F',sw:20});
    const ok=[1,0,0,1,0,0],mark=[7.2,11.9,12.1,9.6,12.3,12.5];
    for(let i=0;i<6;i++){const tk=1.0+i*0.15,a=pop(t,tk);if(t<tk)continue;const cx=W*(0.14+i*0.144),cy=H*0.4;g.save();g.translate(cx,cy);g.scale(a,a);panel(0,0,230,230,'rgba(255,255,255,0.1)',t>mark[i]?(ok[i]?'#5BE37A':'#FF4A4A'):'#3FF0FF',26);g.restore();stuntIcon(i,cx,cy,1.0*a);
      if(t>mark[i]){if(ok[i])check(cx+70,cy-80,1.4*pop(t,mark[i]));else cross(cx+70,cy-80,1.2*pop(t,mark[i]))}}
    panel(W/2,H*0.7,620,190);if(t<6.4){const p=1+0.06*Math.sin(t*12);txt('? / 6',W/2,H*0.7+8,110*p,{fill:'#fff',stroke:0})}else{txt('2 / 6',W/2,H*0.7+8,130*clamp(pop(t,6.4),0,1.3),{fill:'#5BE37A',stroke:0})}
    txt('SURVIVED',W/2,H*0.7-120,40,{sw:10});if(t>13.1){g.fillStyle='rgba(0,0,0,'+(0.55*easeOut(seg(t,13.1,13.4)))+')';g.fillRect(0,0,W,H);txtA('GAME OVER',W/2,H*0.5,190,pop(t,13.1,0.35),{fill:'#FF4A4A',sw:30})}flash(t,0,0.2)}
  else if(t<17.7){const C=scene('city');if(C.ramps)C.ramps.gp.visible=false;C.cop.c.visible=false;C.mood('sunset');C.car.c.position.set(-30,0,1.6);putGuy(C.S,-1.6,0.18,-3.1,0.35);guy.pose(idle(t,{mouth:'o',mouthSize:0.5,headPitch:0.2,armL:[0.2,0],armR:[0.2,0]}));C.shot([0.6,1.9,8.5],[0.6,1.4,-3]);
    const a=pop(t,14.5);g.save();g.translate(W*0.68,H*0.45);g.scale(a,a);g.fillStyle='#22222C';g.strokeStyle='#111';g.lineWidth=12;rr(-260,-90,520,180,40);g.fill();g.stroke();g.fillStyle='#5A5D68';rr(-240,-80,480,150,34);g.fill();g.restore();
    txtA('RESPAWN',W*0.68,H*0.45+4,90,clamp(a),{fill:'#9AA0AA',sw:0,stroke:0});if(t>15.6)cross(W*0.68,H*0.45,3.4*pop(t,15.6));pill('REAL LIFE',W*0.68,H*0.24,52,'#fff','#111',t,14.3,17.65);flash(t,14.2,0.2)}
  else{const R=scene('room');cityTV(R,t);clockDraw(R,6,0);putGuy(R.S,0,0.12,1.75,PI);props.pad.visible=true;props.pad.position.set(0,1.0,0.62);guy.pose({...SIT,reachL:[0.15,1.0,0.6],reachR:[-0.15,1.0,0.6],blink:BLINK(t),mouth:'grin'});
    const k=ease(seg(t,17.7,22.3));R.shot(mix([-1.7,3.4,6.8],[-1.1,3.2,6.0],k),[0,1.9,-2.5]);txtA('ENJOY GTA 6',W/2,H*0.13,90,easeOut(seg(t,18.0,18.4)),{fill:'#FFD23F',sw:18});
    txtA('...AND LEAVE THE STUNTS TO THE GAME',W/2,H*0.23,56,easeOut(seg(t,19.6,20.0)),{fill:'#fff',sw:12});flash(t,17.7,0.2)}
  vignette();cap16(t+T0)};
