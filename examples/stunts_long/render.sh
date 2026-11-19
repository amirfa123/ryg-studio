#!/bin/bash
cd /home/claude/ryg-studio
declare -A N=([c0]=882 [c1]=1117 [c2]=1152 [c3]=804 [c4]=880 [c5]=1085 [c6]=855 [c7]=924 [c8]=671)
for c in "$@"; do
  [ -f w_stunts/$c.mp4 ] && continue
  python3 w_stunts/build16.py w_stunts $c.html w_stunts/lib.js w_stunts/lib2.js w_stunts/$c.js
  node cap16.js w_stunts/$c.html video w_stunts/$c.mp4 ${N[$c]} > w_stunts/log_$c.txt 2>&1
  echo "$c done $(date +%T)" >> w_stunts/progress.txt
done
