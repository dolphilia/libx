from pathlib import Path,PurePosixPath
import tarfile,hashlib,json
root=Path('/Users/dolphilia/github/libx');out=root/'docs/notes/project-expansion/runs/evidence/2026-10-04-553';records=[]
with tarfile.open(out/'gperf-3.3.tar.gz') as t:
 for m in t.getmembers():
  p=PurePosixPath(m.name);assert not p.is_absolute() and '..' not in p.parts and p.parts[0]=='gperf-3.3'
  if not m.isfile():records.append({'path':m.name,'type':m.type.decode('latin1'),'size':m.size});continue
  b=t.extractfile(m).read();records.append({'path':m.name,'type':'file','bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
  if m.name in ['gperf-3.3/doc/gperf.texi','gperf-3.3/doc/gpl-3.0.texi','gperf-3.3/doc/gperf.html','gperf-3.3/doc/gperf.1','gperf-3.3/doc/Makefile.in','gperf-3.3/README','gperf-3.3/NEWS','gperf-3.3/COPYING','gperf-3.3/configure.ac']:
   dest=out/'sources'/m.name;dest.parent.mkdir(parents=True,exist_ok=True)
   with dest.open('xb') as f:f.write(b)
(out/'ARCHIVE_INVENTORY.json').write_text(json.dumps({'archiveSHA256':hashlib.sha256((out/'gperf-3.3.tar.gz').read_bytes()).hexdigest(),'members':records},indent=2)+'\n')
print({'members':len(records),'regularFiles':sum(x['type']=='file' for x in records)})
