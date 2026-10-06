from pathlib import Path
import urllib.request,hashlib,json,tarfile,datetime,io
R=Path('/Users/dolphilia/github/libx');E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-927';N=R/'docs/notes/document-import/gnu-time/v1-10';N.mkdir(parents=True,exist_ok=True);h=lambda b:hashlib.sha256(b).hexdigest();url='https://mirrors.ibiblio.org/gnu/time/time-1.10.tar.xz'
with urllib.request.urlopen(url,timeout=40)as r:assert r.status==200;data=r.read()
p=N/'source/time-1.10.tar.xz';p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(data)
with tarfile.open(fileobj=io.BytesIO(data),mode='r:xz')as t:
 members=t.getmembers();assert all(not Path(m.name).is_absolute()and '..'not in Path(m.name).parts for m in members)
 names=[m.name for m in members if m.isfile()and(m.name.startswith('time-1.10/doc/')or m.name.split('/')[-1]in ['AUTHORS','COPYING','NEWS','README','configure.ac'])];rows=[]
 for name in names:
  m=t.getmember(name);assert m.isfile()and not m.issym()and not m.islnk();body=t.extractfile(m).read();rel=Path(name).relative_to('time-1.10');q=N/'source/original'/rel;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(body);rows.append({'path':str(q.relative_to(N)),'sha256':h(body),'bytes':len(body)})
proof={'status':'acquired-fixed-source-only-not-selected','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'officialIndex':'https://ftp.gnu.org/gnu/time/','url':url,'version':'1.10','archiveSHA256':h(data),'archiveBytes':len(data),'files':rows,'sourceProgramsNotBuiltOrExecuted':True,'signatureVerification':'not-performed','remaining':['Document license/scope/existingJapanese/value evaluation','Canonical draft/native feasibility','Separate selection review/ledger registration']};(E/'ACQUISITION.json').write_text(json.dumps(proof,ensure_ascii=False,indent=2)+'\n');print(json.dumps({'status':proof['status'],'archiveBytes':len(data),'sha256':h(data),'files':[r['path']for r in rows]},ensure_ascii=False))
