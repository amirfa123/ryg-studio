// ===== Chapter 5: step 5, delivery pilot (global 141.68 - 160.88) =====
const T0=141.68,TT=19.2;
let PL=null;function plane(){const S=scene('sky');if(!PL){PL=makePlane();S.S.add(PL.p)}return PL}
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();
  if(t<8.7){const S=scene('sky');const P=plane();P.p.visible=true;S.scroll(t*-6);P.p.position.set(0,0.4*Math.sin(t*1.3),0);P.p.rotation.set(0.06*Math.sin(t*1.1),0,0.04*Math.sin(t*0.9));P.prop.rotation.x=t*40;
    pilotIn(P,t,{mouth:t>4?'grin':'smile'});
    if(t<2.9)S.shot([2,1.5,12],[0,0.3,0]);else{const k=ease(seg(t,2.9,8.7));S.shot(mix([5.5,1.6,6.5],[3.2,1.3,4.2],k),[0.4,0.6,0])}
    chapterCard(t,0.05,2.85,5,'DELIVERY PILOT');pill('PILOT PETE HIRES YOU',W/2,120,56,CYAN,'#111',t,3.0,8.65);flash(t,0,0.2)}
  else if(t<11.8){clear3d();bg.style.background=BGS2.sky;const u=t-8.7;planeIcon(lerp(-100,W+100,u/3.1),H*0.18,1.4);
    for(let i=0;i<3;i++){const tx=W*(0.25+i*0.25),d=u-0.4-i*0.6;target2D(tx,H*0.85,1.6);if(d>0){const y=lerp(H*0.2,H*0.8,clamp(d/1.4));crate2D(tx,y,1.2,y<H*0.79);if(d>1.4)check(tx,H*0.62,1.0*pop(t,8.7+0.4+i*0.6+1.4))}}
    panel(W*0.86,H*0.4,300,120);const rem=Math.max(0,60-u*14);txt('0:'+String(Math.floor(rem)).padStart(2,'0'),W*0.86,H*0.4+6,70,{fill:rem<20?RED:'#fff',stroke:0});
    g.save();g.translate(W*0.16,H*0.42);panel(0,0,420,150,'rgba(10,12,25,0.9)',GREEN,26);txt('$12K–$20K',0,8,70,{fill:GREEN,stroke:0});g.restore();flash(t,8.7,0.2)}
  else if(t<14.8){const S=scene('sky');const P=plane();P.p.visible=true;S.scroll(t*-10);const u=t-11.8;P.p.position.set(-10+u*7,0.5*Math.sin(u*2),0);P.p.rotation.set(0.3*Math.sin(u*2.2),0,0.1);P.prop.rotation.x=t*40;pilotIn(P,t,{mouth:'grin',wide:true});
    S.shot([0,0.5,14],[0,0,0]);comic('FAST!',W*0.25,H*0.25,110,t,11.9,{life:2.9,rot:-0.1,fill:GOLD});comic('FUN!',W*0.5,H*0.2,110,t,12.7,{life:2.1,rot:0.08,fill:PINK});comic('YOU FLY!',W*0.76,H*0.27,100,t,13.6,{life:1.2,rot:-0.04,fill:CYAN});flash(t,11.8,0.2)}
  else{clear3d();setBG('blue');const a=pop(t,14.9);g.save();g.translate(W*0.2,H*0.45);g.scale(a,a);panel(0,0,420,380,'rgba(10,12,25,0.9)',CYAN,30);planeIcon(0,-30,1.8);txt('1 RUN',0,120,58,{fill:CYAN,stroke:0});g.restore();
    txtA('=',W*0.4,H*0.45,140,pop(t,15.5),{fill:GOLD,sw:20});
    for(let i=0;i<12;i++){const tk=15.9+i*0.12;if(t<tk)continue;car2D(W*(0.52+(i%4)*0.12),H*(0.3+Math.floor(i/4)*0.16),0,1.3*pop(t,tk),'#7FB3FF')}
    txtA('12 CARS FOR MOSES',W*0.7,H*0.8,58,pop(t,17.4),{fill:GOLD,sw:13});flash(t,14.8,0.2)}
  vignette();cap16(t+T0)};
