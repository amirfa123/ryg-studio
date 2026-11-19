#!/bin/bash
d=$1; ts=$2; rm -f $d/st_*; timeout 400 node cap.js $d/video.html stills "$ts" $d/st 2>&1 | grep -v "^$" | head
files=$(ls -v $d/st_*.jpg); n=$(echo $files|wc -w)
ffmpeg -y -loglevel error $(for f in $files; do echo -i $f; done) -filter_complex "$(for i in $(seq 0 $((n-1))); do printf "[$i:v]scale=270:480[v$i];"; done)$(for i in $(seq 0 $((n-1))); do printf "[v$i]"; done)hstack=inputs=$n" $d/sheet.jpg && echo ok
