// ===== Chapter 2: how strong can a human get? (global 87.8 - 117.76) =====
const T0=87.8,TT=29.96;
const FLEX=(t)=>({armL:[1.5,0],armR:[1.5,0],bendL:1.9+0.15*Math.sin(t*5),bendR:1.9+0.15*Math.sin(t*5+1),curlL:1,curlR:1,mouth:'grin',blink:BLINK(t),legL:[0,0,0,0.12],legR:[0,0,0,-0.12]});
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();hideFX();holder.visible=true;const G=gymExtras();G.bar.visible=false;G.bag.visible=false;
  if(t<3.9){putGuy(G.S,0,0,0.2,0.25);guy.pose(FLEX(t));const k=ease(seg(t,0,3.9));G.shot(mix([3.6,2.4,9.5],[2.4,2.0,7.0],k),[0,1.2,0]);chapterCard(t,0.05,3.8,2,'HOW STRONG CAN YOU GET?')}
  else if(t<7.4){const R=scene('rocky');R.boulder.visible=true;R.boulder.position.set(-6,3.2,0);R.fireball.visible=false;R.explode(0,[0,0,0]);putGuy(R.S,0.4,0,1.6,-PI/2-0.5);guy.pose(idle(t,{mouth:'o',mouthSize:0.7,wide:true,lookY:0.8,headPitch:-0.45}));
    const k=ease(seg(t,3.9,7.4));R.shot(mix([9.5,1.3,13.5],[8.4,1.1,12.2],k),[-3.0,3.0,0]);pill('IN THE SHOW: HOUSE-SIZED BOULDERS',W/2,110,54,GOLD,'#111',t,4.0,7.35);flash(t,3.9,0.15)}
  else if(t<13.8){G.bar.visible=true;const grip=easeOut(seg(t,7.6,8.6)),lift=ease(seg(t,9.0,10.6));const by=lerp(0.42,0.92,lift),sq=lerp(0,grip,1-lift)*1;const q=lift>0.99?0.01*Math.sin(t*45):0;
    G.bar.position.set(0,by+q,0.62);putGuy(G.S,0,0,0,0);guy.pose({reachL:[0.55,by+q,0.62],reachR:[-0.55,by+q,0.62],poleL:[1,0,-0.3],poleR:[-1,0,-0.3],legL:[0.9*sq,1.5*sq,-0.6*sq,0.22],legR:[0.9*sq,1.5*sq,-0.6*sq,-0.22],jump:-0.34*sq,headPitch:-0.1,mouth:lift>0.2?'teeth':'smile',wide:lift>0.2,blink:BLINK(t)});
    G.shot([3.2,1.6,6.2],[0,0.9,0.4]);const v=Math.round(511*easeOut(seg(t,9.2,10.9)));panel(W*0.78,H*0.3,480,160,'rgba(10,12,25,0.9)',GOLD,30);txt(v+' KG',W*0.78,H*0.3,96,{stroke:0,fill:GOLD});
    pill('DEADLIFT WORLD RECORD',W*0.25,110,52,'#fff','#111',t,7.5,13.75);if(t>11.8){horse2D(W*0.78,H*0.62,1.1*pop(t,11.85));txtA('= A WHOLE HORSE',W*0.78,H*0.82,56,pop(t,12.2),{fill:GREEN,sw:14})}
    if(lift>0.99)sweat(W*0.46,H*0.25,t);comic('HNNGH!',W*0.25,H*0.5,90,t,9.2,{life:1.2,rot:-0.1,fill:'#FF7A1A'});flash(t,7.4,0.15)}
  else if(t<18.4){clear3d();setBG('neon');const a=pop(t,13.85);weight2D(W*0.16,H*0.62,0.8*a,'511 KG');txtA('INCREDIBLE...',W*0.16,H*0.35,56,a,{fill:GREEN,sw:12});
    const b=easeOut(seg(t,15.0,16.6));if(b>0){g.save();g.translate(W*0.62,H*0.6);g.scale(b,b);g.fillStyle='#8E7E72';g.strokeStyle='#111';g.lineWidth=12;g.beginPath();for(let i=0;i<12;i++){const ang=i/12*PI*2,rr0=400*(0.85+0.15*hash(i*3));g.lineTo(Math.cos(ang)*rr0,Math.sin(ang)*rr0*0.8)}g.closePath();g.fill();g.stroke();g.restore()}
    txtA('THOUSANDS',W*0.62,H*0.55,110,pop(t,16.5),{fill:'#fff',sw:20});txtA('OF TONNES',W*0.62,H*0.68,90,pop(t,16.8),{fill:GOLD,sw:18});flash(t,13.8,0.15)}
  else if(t<25.2){clear3d();setBG('teal');txtA('MUSCLE HAS A LIMIT',W/2,120,80,pop(t,18.45),{fill:GOLD,sw:16});const gr=easeOut(seg(t,20.2,22.0));muscle2D(W*0.36,H*0.58,1.2,gr);
    if(t>20.6){txtA('BIGGER = STRONGER',W*0.36,H*0.8,60,pop(t,20.6),{fill:GREEN,sw:14})}
    if(t>22.4){const w=Math.round(lerp(70,110,easeOut(seg(t,22.6,24.2))));panel(W*0.76,H*0.5,500,170,'rgba(10,12,25,0.9)',RED,30);txt(w+' KG',W*0.76,H*0.5,96,{stroke:0,fill:RED});txtA('...BUT HEAVIER',W*0.76,H*0.72,60,pop(t,22.6),{fill:RED,sw:14})}flash(t,18.4,0.15)}
  else{clear3d();setBG('neon');const f=lerp(0.1,0.88,easeOut(seg(t,25.4,27.4)));ceilingMeter(W*0.5,H*0.86,620,f,t);txtA('HUMAN LIMIT',W*0.5+470,H*0.86-620*0.92,52,pop(t,25.6),{fill:RED,sw:12});
    if(t>27.0){txtA('STRONGEST HUMANS',W*0.5-530,H*0.86-620*0.82,48,pop(t,27.0),{fill:GOLD,sw:12});arrow(W*0.5-220,H*0.86-620*0.82,W*0.5-75,H*0.86-620*0.84,GOLD,18)}
    txtA("THERE'S A CEILING",W/2,90,76,pop(t,25.25),{sw:16});flash(t,25.2,0.15)}
  vignette();cap16(t+T0)};
