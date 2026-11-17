import json,sys,re
d,body=sys.argv[1],open(sys.argv[2]).read()
src=open('template.html').read()
head=src[:src.index("const guy=makeYRG()")]
helpers=src[src.index("// ---------- overlay helpers"):src.index("const BG=")]
words=[{"w":w["text"],"st":w["start"],"en":w["end"]} for w in json.load(open(f'{d}/words_raw.json'))["words"] if w.get("type","word")=="word"]
head=re.sub(r'RAWW=\[.*?\];','RAWW='+json.dumps(words)+';',head,count=1,flags=re.S)
out=head+helpers+body+"\nawait document.fonts.load('900 80px Inter');render(0);window.READY=true;\n</script></body></html>"
open(f'{d}/video.html','w').write(out)
