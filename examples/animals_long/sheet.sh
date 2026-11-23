#!/bin/bash
# usage: w_animals/sheet.sh cN "t1,t2,..."  (local times)
c=$1; ts=$2; d=w_animals
python3 $d/build16.py $d $c.html $d/lib.js $d/lib2.js $d/lib4.js $d/libA.js $d/$c.js || exit 1
rm -f $d/st_${c}_*.jpg
node cap16.js $d/$c.html stills "$ts" $d/st_$c 2>&1 | grep -v "^$" | head -20
files=$(for t in ${ts//,/ }; do echo $d/st_${c}_$(node -e "process.stdout.write(String(Number('$t')))").jpg; done)
python3 - $d/sheet_$c.jpg $files <<'PY'
import sys,subprocess
out=sys.argv[1];fs=sys.argv[2:];n=len(fs);cols=3;rows=(n+cols-1)//cols
args=[];[args.extend(['-i',f]) for f in fs]
flt=''.join(f'[{i}:v]scale=640:360[v{i}];' for i in range(n))
pad=cols*rows-n
for i in range(pad):flt+=f'color=c=black:s=640x360:d=1[p{i}];'
lab=[f'[v{i}]' for i in range(n)]+[f'[p{i}]' for i in range(pad)]
lay='|'.join(f'{(i%cols)*640}_{(i//cols)*360}' for i in range(cols*rows))
flt+=''.join(lab)+f'xstack=inputs={cols*rows}:layout={lay}'
subprocess.run(['ffmpeg','-y','-loglevel','error']+args+['-filter_complex',flt,'-frames:v','1',out],check=True)
PY
