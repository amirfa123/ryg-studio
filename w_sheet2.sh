#!/bin/bash
# usage: w_sheet2.sh w_slug "t1,t2,..."   (uses w_lib.js + body.js)
d=$1; ts=$2
cat w_lib.js $d/body.js > $d/full.js && python3 build.py $d $d/full.js || exit 1
rm -f $d/st_*.jpg
node cap.js $d/video.html stills "$ts" $d/st 2>&1 | grep -v "^$" | head -20
files=$(for t in ${ts//,/ }; do echo $d/st_$t.jpg; done)
n=$(echo $files | wc -w)
ffmpeg -y -loglevel error $(for f in $files; do echo -i $f; done) -filter_complex "$(for i in $(seq 0 $((n-1))); do printf "[$i:v]scale=270:480[v$i];"; done)$(for i in $(seq 0 $((n-1))); do printf "[v$i]"; done)hstack=inputs=$n" $d/sheet.jpg
