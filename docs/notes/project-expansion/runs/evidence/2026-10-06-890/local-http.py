from pathlib import Path
import urllib.request,hashlib,json,concurrent.futures,datetime
root=Path('/private/tmp/libx-commonmark-formal-887/dist/docs/commonmark');e=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-06-890')
files=sorted(p for p in root.rglob('*') if p.is_file())
def check(p):
 rel=p.relative_to(root).as_posix();url='http://127.0.0.1:4360/docs/commonmark/'+(rel[:-10] if rel.endswith('index.html') else rel)
 with urllib.request.urlopen(url,timeout=30) as r: data=r.read();status=r.status
 assert status==200 and data==p.read_bytes(),rel
 return {'path':rel,'url':url,'status':status,'sha256':hashlib.sha256(data).hexdigest()}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:rows=list(pool.map(check,files))
(e/'LOCAL_HTTP.json').write_text(json.dumps({'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'files':len(rows),'allResponseBytesExact':True,'rows':rows},indent=2)+'\n');print('Local HTTP exact',len(rows))
