from pathlib import Path
import urllib.request,datetime,hashlib,json,concurrent.futures,tarfile,io
R=Path('/Users/dolphilia/github/libx');E=Path(__file__).parent;N=R/'docs/notes/document-import/gnu-m4/v1-4-21';at=datetime.datetime.now(datetime.timezone.utc).isoformat();(N/'source').mkdir(parents=True,exist_ok=True)
items=[('archive','https://ftp.gnu.org/gnu/m4/m4-1.4.21.tar.gz','m4-1.4.21.tar.gz'),('release','https://lists.gnu.org/archive/html/info-gnu/2026-02/msg00004.html','release.html')]
def get(t):
 kind,url,name=t
 try:
  with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'Libx-document-import/1.0'}),timeout=90)as q:
   data=q.read(20*1024*1024+1);assert len(data)<=20*1024*1024;assert q.url.startswith('https://')
   p=N/'source'/name;p.write_bytes(data);return {'kind':kind,'url':url,'finalURL':q.url,'status':q.status,'bytes':len(data),'path':str(p.relative_to(R)),'sha256':hashlib.sha256(data).hexdigest()}
 except Exception as ex:return {'kind':kind,'url':url,'status':'failed','error':str(ex)}
with concurrent.futures.ThreadPoolExecutor(max_workers=3)as pool:rows=list(pool.map(get,items))
archive=N/'source/m4-1.4.21.tar.gz';members=[]
if archive.exists():
 with tarfile.open(archive,'r:gz')as t:
  for m in t.getmembers():
   q=Path(m.name);assert not q.is_absolute() and '..'not in q.parts
   if not m.isfile():continue
   if q.parts[0]!='m4-1.4.21':raise ValueError('unexpected archive root')
   if q.name in ['COPYING','COPYING.DOC','AUTHORS','THANKS','README','NEWS']or(q.parts[1]=='doc'and (q.suffix in ['.texi','.texinfo','.info'] or q.name.startswith('m4.info-'))):
    data=t.extractfile(m).read();p=N/'source/archive'/q;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(data);members.append({'path':str(p.relative_to(R)),'member':m.name,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
out={'at':at,'status':'acquired'if all(r.get('status')==200 for r in rows)else'partial','requests':rows,'members':members,'limits':['Official HTTPS downloads; SHA fixed locally; no signature verification claimed.','No archive code executed; only regular documentation/license files extracted.','No selection/review/build/publication claim.']};(E/'ACQUISITION_1_4_21.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out),flush=True)
