from pathlib import Path
import urllib.request,urllib.error,json,hashlib,datetime
D=Path('/private/tmp/libx-gnu-libtool-998/apps/gnu-libtool/dist');E=Path(__file__).resolve().parent;rows=[]
for p in sorted(D.rglob('*')):
 if not p.is_file() or p.name=='404.html':continue
 rel=str(p.relative_to(D));route=rel.removesuffix('index.html')if rel.endswith('index.html')else rel;url='http://127.0.0.1:4599/docs/gnu-libtool/'+route
 with urllib.request.urlopen(url,timeout=20)as r:
  data=r.read();assert r.status==200 and data==p.read_bytes(),rel;rows.append({'path':rel,'status':r.status,'sha256':hashlib.sha256(data).hexdigest(),'mime':r.headers.get('Content-Type'),'contentEncoding':r.headers.get('Content-Encoding')})
try:urllib.request.urlopen('http://127.0.0.1:4599/docs/gnu-libtool/absent-check-999/',timeout=20);raise AssertionError('Missing route returned200')
except urllib.error.HTTPError as err:assert err.code==404
out={'status':'passed-local-static-byte-exact','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'files':len(rows),'rows':rows,'missingRoute':404,'limits':'Astro local raw HTTP only. Native ZIP separately checked. Cloudflare integrated/public HTTP and404 pending.'};(E/'LOCAL_HTTP.json').write_text(json.dumps(out,indent=2)+'\n');print(len(rows),'files rawHTTP exact;404confirmed')
