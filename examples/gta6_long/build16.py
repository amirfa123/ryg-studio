import json,sys,re
# usage: python3 w_gta6/build16.py w_gta6 out.html body1.js body2.js ...
d,outn=sys.argv[1],sys.argv[2];body=''.join(open(f).read()+'\n' for f in sys.argv[3:])
src=open('template.html').read()
head=src[:src.index("const guy=makeYRG()")]
helpers=src[src.index("// ---------- overlay helpers"):src.index("const BG=")]
words=[{"w":w["text"],"st":w["start"],"en":w["end"]} for w in json.load(open(f'{d}/words_raw.json'))["words"] if w.get("type","word")=="word"]
head=re.sub(r'RAWW=\[.*?\];','RAWW='+json.dumps(words)+';',head,count=1,flags=re.S)
head=head.replace('width:1080px;height:1920px','width:1920px;height:1080px').replace('width="1080" height="1920"','width="1920" height="1080"').replace('const W=1080,H=1920','const W=1920,H=1080')
assert 'const W=1920,H=1080' in head
out=head+helpers+body+"\nawait document.fonts.load('900 80px Inter');render(0);window.READY=true;\n</script></body></html>"
open(f'{d}/{outn}','w').write(out)
