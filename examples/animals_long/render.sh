#!/bin/bash
cd /home/claude/ryg-studio
declare -A N=([c0]=963 [c1]=1115 [c2]=953 [c3]=1296 [c4]=908 [c5]=948 [c6]=782 [c7]=713 [c8]=758)
for c in "$@"; do
  [ -f w_animals/$c.mp4 ] && continue
  python3 w_animals/build16.py w_animals $c.html w_animals/lib.js w_animals/lib2.js w_animals/lib4.js w_animals/libA.js w_animals/$c.js
  node cap16.js w_animals/$c.html video w_animals/$c.mp4 ${N[$c]} > w_animals/log_$c.txt 2>&1
  echo "$c done $(date +%T)" >> w_animals/progress.txt
done
