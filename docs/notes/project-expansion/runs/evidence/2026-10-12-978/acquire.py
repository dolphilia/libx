from pathlib import Path
import urllib.request,hashlib,json,datetime,tarfile,io
E=Path(__file__).parent
urls={'releases.html':'https://ftp.gnu.org/gnu/patch/','release.html':'https://lists.gnu.org/archive/html/info-gnu/2025-03/msg00014.html','jm-index.html':'https://linuxjm.sourceforge.io/INDEX/gnu.html','jm-patch.1.html':'https://linuxjm.sourceforge.io/html/GNU_patch/man1/patch.1.html','patch-2.8.tar.gz':'https://ftp.gnu.org/gnu/patch/patch-2.8.tar.gz'}
rows=[]
for name,url in urls.items():
 with urllib.request.urlopen(url,timeout=45) as r:b=r.read();status=r.status;final=r.url
 assert status==200
 if name=='patch-2.8.tar.gz':assert hashlib.sha256(b).hexdigest()=='308a4983ff324521b9b21310bfc2398ca861798f02307c79eb99bb0e0d2bf980'
 (E/'source'/name).write_bytes(b);rows.append({'url':url,'finalURL':final,'path':'source/'+name,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
files=[]
with tarfile.open(E/'source/patch-2.8.tar.gz','r:gz') as t:
 for m in t.getmembers():
  p=Path(m.name);assert not p.is_absolute() and '..' not in p.parts
  if not m.isfile():continue
  if p.name in ['patch.man','COPYING','README','AUTHORS','NEWS','ChangeLog','README.md']:
   b=t.extractfile(m).read();out=E/'source'/p;out.parent.mkdir(exist_ok=True,parents=True);out.write_bytes(b);files.append({'path':str(out.relative_to(E)),'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
x={'status':'acquired','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sources':rows,'files':files,'limits':['Official release SHA256 matched; signature not verified','Regular documentation/notice files copied safely; no source executed','No app or operation created']}
(E/'ACQUISITION.json').write_text(json.dumps(x,indent=2)+'\n');print(json.dumps(x))
