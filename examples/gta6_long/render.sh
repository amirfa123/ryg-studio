#!/bin/bash
cd /home/claude/ryg-studio
declare -A N=([c1]=690 [c2]=990 [c3]=825 [c4]=900 [c5]=873 [c6]=1008 [c7]=876 [c8]=849 [c9]=939)
for c in "$@"; do
  [ -f w_gta6/$c.mp4 ] && continue
  node cap16.js w_gta6/$c.html video w_gta6/$c.mp4 ${N[$c]} > w_gta6/log_$c.txt 2>&1
  echo "$c done $(date +%T)" >> w_gta6/progress.txt
done
