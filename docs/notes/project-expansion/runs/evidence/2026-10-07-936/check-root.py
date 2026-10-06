from pathlib import Path
import hashlib,json,datetime,urllib.request,urllib.error
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-ed-release-936');E=Path(__file__).resolve().parent;h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();bridges={r['path']for r in json.loads((E/'ROOT_SCOPED_REGISTRATION.json').read_text())['rootLayoutBridges']};rows=[]
for p in (W/'apps/gnu-ed').rglob('*'):
 rel=p.relative_to(W)
 if not p.is_file()or p.is_symlink()or any(x in rel.parts for x in ['node_modules','dist','.astro']):continue
 if str(rel)in bridges:continue
 assert h(p)==h(R/rel);rows.append({'path':str(rel),'sha256':h(p)})
(E/'ROOT_TARGET_EQUIVALENCE.json').write_text(json.dumps({'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'exactFiles':len(rows),'formatEquivalentTemplateBridges':len(bridges),'rows':rows},indent=2)+'\n')
url='http://127.0.0.1:4341/docs/gnu-ed/does-not-exist/'
try:urllib.request.urlopen(url);raise AssertionError('Expected404')
except urllib.error.HTTPError as x:
 assert x.code==404;body=x.read();assert b'404'in body
(E/'LOCAL_404.json').write_text(json.dumps({'status':'passed','url':url,'HTTP':404,'rendered404':True},indent=2)+'\n')
print('Root limited equivalence and scoped404passed')
