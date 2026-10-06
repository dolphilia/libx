from pathlib import Path
import urllib.request,concurrent.futures,json,hashlib,datetime,tarfile
E=Path(__file__).parent/'next-candidate';E.mkdir(exist_ok=True);queries=[('home.html','https://www.gnu.org/software/grep/'),('release-announcement.html','https://lists.gnu.org/archive/html/info-gnu/2025-04/msg00008.html'),('gnu-directory.html','https://ftp.gnu.org/gnu/grep/'),('grep-3.12.tar.gz','https://mirrors.ibiblio.org/gnu/grep/grep-3.12.tar.gz'),('jm-gnu-index.html','https://linuxjm.sourceforge.io/INDEX/gnu.html')]
def fetch(q):
 name,url=q;p=E/name
 try:
  if p.exists():data=p.read_bytes();cached=True;final=url
  else:
   with urllib.request.urlopen(url,timeout=12)as r:data=r.read();final=r.url;assert r.status==200
   p.write_bytes(data);cached=False
  return {'path':name,'url':url,'finalURL':final,'status':'acquired','bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'cached':cached}
 except Exception as ex:return {'path':name,'url':url,'status':'not-acquired','error':type(ex).__name__+': '+str(ex)}
with concurrent.futures.ThreadPoolExecutor(max_workers=4)as pool:rows=list(pool.map(fetch,queries))
p=E/'grep-3.12.tar.gz'
if p.exists():
 with tarfile.open(p)as t:
  wanted=[m for m in t.getmembers()if m.isfile()and(m.name.startswith('grep-3.12/doc/')or m.name in ['grep-3.12/COPYING','grep-3.12/NEWS','grep-3.12/AUTHORS'])];out=E/'grep-3.12'
  for m in wanted:q=Path(m.name);assert not q.is_absolute()and'..'not in q.parts;dest=E/q;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(t.extractfile(m).read())
(E/'INITIAL_ACQUISITION.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'candidate':'GNU grep','status':'draft-only-not-selected','rows':rows,'originalProgramOrExamplesExecuted':False,'formalWorkspaceOrAppCreated':False,'releasePriority':'GNU sed901 Preview stilltakespriority'},indent=2)+'\n');print(json.dumps(rows))
