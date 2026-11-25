#!/bin/bash
cd /home/claude/ryg-studio
declare -A N=([c0]=568 [c1]=690 [c2]=574 [c3]=803 [c4]=899 [c5]=367 [c6]=919 [c7]=1050 [c8]=986 [c9]=971 [c10]=840)
for c in "$@"; do
  [ -f w_dbz/$c.mp4 ] && continue
  python3 w_dbz/build16.py w_dbz $c.html w_dbz/lib.js w_dbz/lib2.js w_dbz/lib4.js w_dbz/libA.js w_dbz/libG.js w_dbz/libD.js w_dbz/$c.js
  node cap16.js w_dbz/$c.html video w_dbz/$c.mp4 ${N[$c]} > w_dbz/log_$c.txt 2>&1
  echo "$c done $(date +%T)" >> w_dbz/progress.txt
done
