// ===== Chapter 3: step 3, racing (global 89.40 - 115.00) =====
const T0=89.40,TT=25.6;
function rival(C){if(!C.rival){C.rival=makeCar(0x9DFF6B);C.S.add(C.rival.c)}return C.rival}
function arena(t){const cx=W/2,cy=H*0.5;g.save();g.fillStyle='#C9A27A';g.strokeStyle='#111';g.lineWidth=10;g.beginPath();g.ellipse(cx,cy,620,300,0,0,7);g.fill();g.stroke();g.strokeStyle='rgba(255,255,255,0.6)';g.lineWidth=6;g.setLineDash([24,20]);g.beginPath();g.ellipse(cx,cy,560,250,0,0,7);g.stroke();g.restore();
  for(let i=0;i<14;i++){const a=i/14*PI*2;g.fillStyle=i%2?'#FF4A4A':'#fff';g.beginPath();g.arc(cx+Math.cos(a)*640,cy+Math.sin(a)*318,14,0,7);g.fill()}}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<4.6){const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.cop.c.visible=false;if(C.ramps)C.ramps.gp.visible=false;const R=rival(C);R.c.visible=true;
    const x=-30+t*14,xr=-31+t*13.6;C.car.c.position.set(x,0,1.6);C.car.c.rotation.set(0,0,0);C.car.color(0xFF3D7F);C.car.spin(t*30);driver(C.car,t,{mouth:'grin'});R.c.position.set(xr,0,-0.7);R.c.rotation.set(0,0,0);R.spin(t*30);
    C.shot([x+5,1.5,4.5],[x+0.5,1.0,0.4]);chapterCard(t,0.05,2.05,3,'RACING');pill('NOBODY CHASING YOU',W/2,120,56,GREEN,'#111',t,2.2,4.55);flash(t,0,0.2)}
  else if(t<10.6){clear3d();setBG('#2A1848');arena(t);
    const a1=t*1.6,a2=t*1.6+PI*0.9;car2D(W/2+Math.cos(a1)*420,H*0.5+Math.sin(a1)*190,a1+PI/2,1.4,'#FF3D7F');car2D(W/2+Math.cos(a2)*380,H*0.5+Math.sin(a2)*170,a2+PI/2,1.4,'#9DFF6B');car2D(W/2+120*Math.sin(t*2),H*0.5,t,1.4,'#3FF0FF');
    pill('DEMOLITION DERBY',W/2,110,56,GOLD,'#111',t,4.7,10.55);
    if(t>7.5){const s=pop(t,7.5);g.save();g.translate(W/2,H*0.8);g.scale(s,s);panel(0,0,900,130,'rgba(10,12,25,0.92)',GREEN,30);txt('$4,000 – $6,000 / WIN',0,6,64,{fill:GREEN,stroke:0});g.restore()}flash(t,4.6,0.2)}
  else if(t<13.0){clear3d();setBG('#2A1848');arena(t);const k=easeOut(seg(t,10.6,11.4));const [sx,sy]=shake(t,11.4,30,0.5);g.save();g.translate(sx,sy);
    car2D(lerp(W*0.2,W*0.44,k),H*0.5,0,2.2,'#FF3D7F');car2D(lerp(W*0.8,W*0.56,k),H*0.5,PI,2.2,'#9DFF6B');g.restore();
    comic('SMASH!',W*0.3,H*0.27,110,t,10.6,{life:2.4,rot:-0.1,fill:GOLD});comic('CRASH!',W*0.7,H*0.27,110,t,11.4,{life:1.6,rot:0.1,fill:RED});comic('COLLECT!',W*0.5,H*0.78,110,t,11.9,{life:1.1,rot:-0.03,fill:GREEN});
    if(t>11.9)bills(t,11.9,W/2,H*0.5,20);flash(t,10.6,0.2)}
  else if(t<18.4){clear3d();setBG('teal');txtA('RACE PROFIT',W/2,140,80,easeOut(seg(t,13.05,13.4)),{fill:GOLD,sw:16});
    const a=pop(t,13.4),b=pop(t,15.6);g.save();g.translate(W*0.3,H*0.5);g.scale(a,a);panel(0,0,560,320,'rgba(10,12,25,0.9)',RED,30);txt('CAR RENTAL',0,-80,44,{stroke:0});txt('– ~$300',0,30,100,{fill:RED,stroke:0});g.restore();
    if(t>15.6){g.save();g.translate(W*0.7,H*0.5);g.scale(b,b);panel(0,0,560,320,'rgba(10,12,25,0.9)',GREEN,30);txt('ONE WIN',0,-80,44,{stroke:0});txt('+ ~$5,000',0,30,100,{fill:GREEN,stroke:0});g.restore()}
    txtA('PURE PROFIT',W/2,H*0.8,80,pop(t,16.8),{fill:GREEN,sw:16});flash(t,13.0,0.2)}
  else if(t<22.0){clear3d();setBG('blue');const k=easeOut(seg(t,18.6,21.6));panel(W/2,H*0.45,1100,360);txt('100% COMPLETION',W/2,H*0.33,60,{fill:GOLD,stroke:0});
    bar(W/2-460,H*0.44,920,60,0.2+0.25*k,GOLD,Math.round((0.2+0.25*k)*100)+'%');for(let i=0;i<3;i++){const tk=19.0+i*0.7;if(t>tk){check(W*(0.38+i*0.12),H*0.6,1.1*pop(t,tk))}}
    txtA('RACE WINS COUNT',W/2,H*0.76,52,pop(t,19.2),{sw:12});flash(t,18.4,0.2)}
  else{const C=scene('city');C.mood('sunset');bg.style.background=SUNSET;C.cop.c.visible=false;const R=rival(C);R.c.visible=false;const x=20+(t-22)*3;C.car.c.position.set(x,0,1.6);C.car.c.rotation.set(0,0,0);C.car.color(0xFF3D7F);C.car.spin(t*8);
    driver(C.car,t,{mouth:'grin',reachL:undefined,armL:[2.6,0.25*Math.sin(t*9)]});C.shot([x+1.5,1.9,7.0],[x,1.25,1.6]);
    const v=5000+15000*easeOut(seg(t,22.6,25.0));g.save();g.translate(W*0.76,H*0.3);moneyPanel(0,0,v,'RACE WINNINGS',GREEN,560);g.restore();comic('IT ADDS UP!',W*0.3,H*0.25,90,t,23.6,{life:1.9,rot:-0.06,fill:GREEN});flash(t,22.0,0.2)}
  vignette();cap16(t+T0)};
