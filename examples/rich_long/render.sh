#!/bin/bash
cd /home/claude/ryg-studio
declare -A N=([c0]=914 [c1]=803 [c2]=965 [c3]=768 [c4]=800 [c5]=576 [c6]=964 [c7]=564 [c8]=670 [c9]=795)
for c in "$@"; do
  [ -f w_rich/$c.mp4 ] && continue
  python3 w_rich/build16.py w_rich $c.html w_rich/lib.js w_rich/lib2.js w_rich/lib3.js w_rich/lib4.js w_rich/$c.js
  node cap16.js w_rich/$c.html video w_rich/$c.mp4 ${N[$c]} > w_rich/log_$c.txt 2>&1
  echo "$c done $(date +%T)" >> w_rich/progress.txt
done
