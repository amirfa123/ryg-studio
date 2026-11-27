#!/bin/bash
cd /home/claude/ryg-studio
declare -A N=([c0]=630 [c1]=1144 [c2]=944 [c3]=535 [c4]=1055 [c5]=973 [c6]=1143 [c7]=960 [c8]=776)
for c in "$@"; do
  [ -f w_hg/$c.mp4 ] && continue
  python3 w_hg/build16.py w_hg $c.html w_hg/lib.js w_hg/lib2.js w_hg/lib4.js w_hg/libA.js w_hg/libD.js w_hg/libH.js w_hg/$c.js
  node cap16.js w_hg/$c.html video w_hg/$c.mp4 ${N[$c]} > w_hg/log_$c.txt 2>&1
  echo "$c done $(date +%T)" >> w_hg/progress.txt
done
