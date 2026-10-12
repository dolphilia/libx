from pathlib import Path
import urllib.request,urllib.error,json,hashlib,datetime
W=Path('/private/tmp/libx-gnu-libtool-998');D=W/'dist';E=Path(__file__).resolve().parent;comparison=json.loads((E/'EXISTING_OUTPUT_COMPARISON.json').read_text());files=sorted({*[str(p.relative_to(D))for p in(D/'docs/gnu-libtool').rglob('*')if p.is_file()],*[r['path']for r in comparison['changedLanding']],*[p for p in comparison['added']if not p.startswith('docs/gnu-libtool/')],'index.html'});rows=[]
for rel in files:
 if rel.endswith('404.html'):continue
 p=D/rel;route=rel.removesuffix('index.html')if rel.endswith('index.html')else rel;url='http://127.0.0.1:4600/'+route
 with urllib.request.urlopen(url,timeout=20)as r:
  data=r.read();assert r.status==200 and data==p.read_bytes(),rel;rows.append({'path':rel,'status':r.status,'sha256':hashlib.sha256(data).hexdigest(),'mime':r.headers.get('Content-Type'),'contentEncoding':r.headers.get('Content-Encoding')})
missing=[]
for route,target in [('docs/gnu-libtool/absent-check-1000/','docs/gnu-libtool/404.html'),('absent-check-1000/','404.html')]:
 try:urllib.request.urlopen('http://127.0.0.1:4600/'+route,timeout=20);raise AssertionError('Missing route200')
 except urllib.error.HTTPError as err:
  assert err.code==404;data=err.read();assert data==(D/target).read_bytes(),route;missing.append({'route':route,'status':404,'dedicated404SHA256':hashlib.sha256(data).hexdigest()})
out={'status':'passed-integrated-local-static-byte-exact','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'files':len(rows),'rows':rows,'missingRoutes':missing,'limits':'Newapp/static/source/landing/CSS/rootredirectrawHTTP,2dedicated404s;publicPagesverification pending.'};(E/'LOCAL_HTTP.json').write_text(json.dumps(out,indent=2)+'\n');print(len(rows),'integratedfilesexact;2dedicated404confirmed')
