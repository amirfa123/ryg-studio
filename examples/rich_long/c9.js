// ===== Chapter 9: recap + outro (global 234.12 - end) =====
const T0=234.12,TT=26.5;
function turtle(x,y,s){g.save();g.translate(x,y);g.scale(s,s);g.fillStyle='#7BC67B';g.strokeStyle='#111';g.lineWidth=6;for(const lx of [-40,40]){g.beginPath();g.ellipse(lx,34,16,12,0,0,7);g.fill();g.stroke()}g.beginPath();g.ellipse(80,4,26,20,0,0,7);g.fill();g.stroke();
  g.fillStyle='#2E9E5B';g.beginPath();g.ellipse(0,0,70,44,0,PI,0);g.lineTo(70,10);g.lineTo(-70,10);g.closePath();g.fill();g.stroke();g.fillStyle='#111';g.beginPath();g.arc(88,-2,4,0,7);g.fill();g.restore()}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<3.9){const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.cop.c.visible=false;if(C.rival)C.rival.c.visible=false;C.car.c.position.set(2.8,0,-1.0);C.car.c.rotation.set(0,0,0);C.car.color(0xFFC21A);C.car.spin(0);
    putGuy(C.S,-0.6,0.18,-3.1,0.25);guy.pose(idle(t,{mouth:'grin',armR:[0.3,0],armL:[0.3,0]}));C.shot([0.2,1.9,8.6],[0.4,1.7,-3]);
    titleBlock(easeOut(seg(t,0.05,0.4))*(1-seg(t,3.6,3.88)),'SO... HOW DO YOU GET','RICH FAST IN GTA 6?',110);flash(t,0,0.25)}
  else if(t<12.8){clear3d();setBG('neon');txtA('THE FASTEST ROUTE',W/2,140,84,easeOut(seg(t,3.95,4.3)),{fill:GOLD,sw:18});
    const stops=[['CARS + RACES',3.9,GREEN],['BANK EVERY SCORE',5.9,CYAN],['JEWELRY • SUPERCARS • PILOT',7.4,PINK],['VAULTS',11.1,GOLD]];
    const y=H*0.52,x0=W*0.12,x1=W*0.88;g.save();g.strokeStyle='#111';g.lineWidth=40;g.lineCap='round';g.beginPath();g.moveTo(x0,y);g.lineTo(lerp(x0,x1,easeOut(seg(t,3.9,11.4))),y);g.stroke();g.strokeStyle='#3A3A48';g.lineWidth=28;g.stroke();g.restore();
    stops.forEach(([l,tk,c],i)=>{if(t<tk)return;const x=lerp(x0,x1,i/3),s=pop(t,tk);g.save();g.translate(x,y);g.scale(s,s);g.fillStyle=c;g.strokeStyle='#111';g.lineWidth=8;g.beginPath();g.arc(0,0,60,0,7);g.fill();g.stroke();g.restore();txt(String(i+1),x,y+5,62*s,{fill:'#111',stroke:0});
      txtA(l,x,y+(i%2?-120:130),i===2?36:46,s,{sw:10});if(i===3)vaultIcon(x,y+150,0.9*s)});flash(t,3.9,0.2)}
  else if(t<16.5){clear3d();setBG('gold');const v=1e6*easeOut(seg(t,12.9,15.6));counterBar(W/2,H*0.5,v,1e6,GREEN,'YOUR FIRST MILLION');for(let i=0;i<5;i++){const tk=13.0+i*0.5;if(t>tk)vaultIcon(W*(0.26+i*0.12),H*0.8,0.8*pop(t,tk))}
    if(t>15.6)comic('JUST A FEW VAULT RUNS!',W/2,H*0.2,90,t,15.6,{life:0.9,rot:-0.04,fill:GREEN});flash(t,12.8,0.2)}
  else if(t<19.2){const R=scene('room');tvDraw(R,(c,w,h)=>{const gr=c.createLinearGradient(0,0,w,h);gr.addColorStop(0,'#12082E');gr.addColorStop(1,'#3A1670');c.fillStyle=gr;c.fillRect(0,0,w,h);c.font='900 58px Inter';c.textAlign='center';c.fillStyle='#5BE37A';c.fillText('BANK: $1,000,000',w/2,h/2+20)});
    putGuy(R.S,0,0.12,1.75,PI);props.pad.visible=true;props.pad.position.set(0,1.0,0.62);guy.pose({...SIT,reachL:[0.15,1.0,0.6],reachR:[-0.15,1.0,0.6],blink:BLINK(t),mouth:'grin',jump:0.03*Math.abs(Math.sin(t*6))});
    R.shot([1.6,3.4,7.2],[0,1.7,-2.5]);pill('IT\'S ALL IN THE GAME',W/2,120,58,CYAN,'#111',t,16.6,19.15);flash(t,16.5,0.2)}
  else if(t<24.2){clear3d();setBG('blue');txtA('REAL LIFE',W/2,150,90,pop(t,19.3),{fill:GOLD,sw:18});const k=0.02*seg(t,19.4,24.2);bar(W*0.15,H*0.48,W*0.7,60,k,GREEN);txtA('$1,000,000',W*0.85,H*0.4,46,1,{fill:'#fff',sw:10,align:'right'});
    turtle(W*0.15+20+W*0.7*k,H*0.7,1.4);if(t>23.0)comic('A LOT SLOWER',W/2,H*0.86,90,t,23.1,{life:1.2,rot:-0.05,fill:RED});flash(t,19.2,0.2)}
  else{const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.cop.c.visible=false;if(C.rival)C.rival.c.visible=false;C.car.c.position.set(2.8,0,-1.0);C.car.color(0xFFC21A);C.car.spin(0);
    putGuy(C.S,-0.6,0.18,-3.1,0.25);guy.pose(idle(t,{mouth:'grin',armR:[2.6,0.35*Math.sin(t*9)],armL:[0.3,0]}));const k=ease(seg(t,24.2,26.5));C.shot(mix([0.2,1.9,8.6],[0.6,2.3,11.5],k),[0.4,1.6,-3]);
    comic('GOOD LUCK!',W*0.5,H*0.24,120,t,24.3,{life:2.4,rot:-0.05,fill:GOLD});flash(t,24.2,0.2)}
  vignette();cap16(t+T0)};
