from pathlib import Path
import urllib.request,hashlib,json,concurrent.futures,datetime
R=Path('/Users/dolphilia/github/libx');D=Path('/private/tmp/libx-gnu-findutils-formal-917/dist/docs/gnu-findutils');E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-920';h=lambda b:hashlib.sha256(b).hexdigest()
def check(p):
 rel=str(p.relative_to(D));url='http://127.0.0.1:4372/docs/gnu-findutils/'+(rel[:-10]if rel.endswith('index.html')else rel)
 with urllib.request.urlopen(url,timeout=25)as r:data=r.read();assert r.status==200
 assert h(data)==h(p.read_bytes()),rel
 return {'path':'docs/gnu-findutils/'+rel,'status':200,'sha256':h(data),'bytes':len(data)}
with concurrent.futures.ThreadPoolExecutor(max_workers=6)as pool:rows=list(pool.map(check,sorted(p for p in D.rglob('*')if p.is_file())))
assert len(rows)==150;result={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'files':len(rows),'allHTTP200AndBytesExact':True,'sourceZIPDownload':next(x for x in rows if x['path'].endswith('/source.zip')),'rows':rows};(E/'LOCAL_HTTP.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps({k:v for k,v in result.items()if k!='rows'}))
