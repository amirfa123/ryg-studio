// ===== Chapter 5: the real killer (global 206.1 - 232.18) =====
const T0=206.1,TT=26.08;
const BEE=makeBee();BEE.b.scale.setScalar(1.6);
window.render=function(tl){const t=tl;g.clearRect(0,0,W,H);hideProps();holder.visible=true;BEE.b.visible=false;
  if(t<20.7){clear3d();setBG(t<11.5?'red':'gold');
    if(t<2.6){chapterCard(t,0.05,2.5,5,'THE REAL KILLER');skull2D(W*0.5,H*0.58,3.2*pop(t,0.4))}
    else{txtA('WHICH ANIMAL KILLS THE MOST PEOPLE IN AMERICA?',W/2,110,56,pop(t,2.65),{fill:GOLD,sw:14});
      const idx=[0,2,1],marks=[7.0,8.0,9.0];
      if(t<11.5){for(let j=0;j<3;j++){const x=W*(0.17+j*0.22),tk=3.0+j*0.25;card(x,H*0.52,idx[j],pop(t,tk),t);if(t>marks[j])cross(x+100,H*0.52-120,1.4*pop(t,marks[j]))}card(W*0.83,H*0.52,4,pop(t,3.8),t,PINK,true);if(t>9.6){const p=1+0.06*Math.sin(t*16);g.save();g.translate(W*0.83,H*0.52);g.scale(p,p);g.translate(-W*0.83,-H*0.52);card(W*0.83,H*0.52,4,1,t,PINK,true);g.restore()}}
      else{const a=pop(t,11.5,0.5);bee2D(lerp(W*0.5,W*0.3,easeOut(seg(t,14.2,14.6))),H*0.48,3.0*a,t);if(t<14.4)txtA('BEES, WASPS & HORNETS',W/2,H*0.8,80,pop(t,11.9),{fill:'#111',stroke:'#FFE14D',sw:14});
        if(t>14.4){const v=72*easeOut(seg(t,14.6,16.4));g.save();g.fillStyle='rgba(10,12,25,0.9)';rr(W*0.62,H*0.3,560,300,30);g.fill();g.strokeStyle=RED;g.lineWidth=8;g.stroke();g.restore();txt('~'+Math.round(v),W*0.62+280,H*0.42,140,{fill:RED,stroke:0});txt('DEATHS A YEAR (U.S.)',W*0.62+280,H*0.53,40,{stroke:0});
          pill('MOSTLY SEVERE ALLERGIC REACTIONS',W/2,H*0.8,48,'#fff','#111',t,18.0,20.65)}
        comic('BZZZ!',W*0.25,H*0.3,110,t,11.6,{life:1.6,rot:-0.1,fill:'#FFE14D'})}}
    flash(t,2.6,0.15);flash(t,11.5,0.3)}
  else{const C=scene('city');C.mood('day');C.cop.c.visible=false;C.car.c.position.set(30,0,1.6);BEE.b.visible=true;if(!BEE.b.parent)C.S.add(BEE.b);
    const a=t*3.2;BEE.b.position.set(1.0+Math.cos(a)*1.3,2.35+0.2*Math.sin(t*7),-3.2+Math.sin(a)*0.5);BEE.b.rotation.set(0,-a,0);BEE.anim(t);
    putGuy(C.S,1.0,0.18,-3.2,0.2);const sw=Math.sin(t*9);guy.pose({...idle(t),mouth:'o',wide:true,armL:[1.8+0.8*sw,0.3],armR:[1.8-0.8*sw,0.3],look:Math.cos(a)*0.8,headYaw:0.3*Math.cos(a),jump:0.05*Math.abs(Math.sin(t*9))});
    C.shot([2.6,2.4,3.8],[1.0,1.5,-3.2]);txtA('TINIEST = DEADLIEST',W/2,H*0.14,90,pop(t,23.7),{fill:GOLD,sw:18});comic('SWAT!',W*0.78,H*0.4,90,t,21.5,{life:1.2,rot:0.1,fill:CYAN});flash(t,20.7,0.2)}
  vignette();cap16(t+T0)};
