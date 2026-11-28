#!/bin/bash
# usage: w_mix.sh w_slug TT [voSplit voDelay]   (series: pass voSplit/voDelay from `node tt.js` so the CTA plays after the roll call)
d=$1;T=$2;S=${3:-0};D=${4:-0};cd $d
if python3 -c "import sys;sys.exit(0 if float('$D')>0 else 1)"; then ffmpeg -y -loglevel error -i vo.mp3 -filter_complex "[0:a]atrim=0:$S,asetpts=PTS-STARTPTS[a];[0:a]atrim=start=$S,asetpts=PTS-STARTPTS,adelay=$(python3 -c "print(int(($S+$D)*1000))"):all=1[b];[a][b]amix=inputs=2:duration=longest:normalize=0" vo_shifted.wav && VO=vo_shifted.wav; else VO=vo.mp3; fi
ffmpeg -y -loglevel error -i video.mp4 -i $VO -i sfx.wav -stream_loop -1 -i ../assets/music_funny.m4a -filter_complex "[1:a]aresample=44100,volume=1.0[v];[2:a]aresample=44100,volume=0.35[s];[3:a]aresample=44100,volume=0.15[m];[v][s][m]amix=inputs=3:duration=first:normalize=0,alimiter=limit=0.95[a]" -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -t $T -movflags +faststart final.mp4
ffprobe -v error -show_entries format=duration -of csv=p=0 final.mp4
for n in "$VO:1.0" "sfx.wav:0.35"; do f=${n%%:*};g=${n##*:};echo -n "$f "; ffmpeg -i $f -af "volume=$g,volumedetect" -f null - 2>&1 | grep mean_volume; done
echo -n "music "; ffmpeg -stream_loop -1 -i ../assets/music_funny.m4a -t $T -af "volume=0.15,volumedetect" -f null - 2>&1 | grep mean_volume
ffmpeg -y -loglevel error -ss 0 -i final.mp4 -frames:v 1 f_first.jpg; ffmpeg -y -loglevel error -sseof -0.04 -i final.mp4 -frames:v 1 f_last.jpg; ffmpeg -y -loglevel error -ss $(python3 -c "print($T/2)") -i final.mp4 -frames:v 1 f_mid.jpg
python3 -c "
from PIL import Image,ImageChops;import numpy as np
a=np.asarray(Image.open('f_first.jpg').convert('L'),float);b=np.asarray(Image.open('f_last.jpg').convert('L'),float);print('first/last mean abs diff',abs(a-b).mean())"
ffmpeg -y -loglevel error -i f_first.jpg -i f_mid.jpg -i f_last.jpg -filter_complex "[0]scale=360:640[a];[1]scale=360:640[b];[2]scale=360:640[c];[a][b][c]hstack=3" verify.jpg
