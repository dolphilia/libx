from pathlib import Path, PurePosixPath
import hashlib,json,zipfile,subprocess
w=Path('/private/tmp/libx-gperf-integration-20261004');a=w/'apps/gperf/public/source/v3-3/libx-gperf-3.3-document-sources.zip';target=Path('/private/tmp/gperf-zip-check-580');assert not target.exists();target.mkdir()
with zipfile.ZipFile(a) as z:
 ms=z.infolist();assert len(ms)==121;assert z.testzip() is None
 for m in ms:
  assert not m.is_dir() and not PurePosixPath(m.filename).is_absolute() and '..' not in PurePosixPath(m.filename).parts
  assert m.date_time==(1980,1,1,0,0,0) and m.external_attr >> 16 == 0o100644
 z.extractall(target)
r=target/'libx-gperf-3.3-document-sources';m=json.loads((r/'FILE_MANIFEST.json').read_text());assert len(m['files'])==120
for f in m['files']:assert hashlib.sha256((r/f['path']).read_bytes()).hexdigest()==f['sha256']
(r/'node_modules').symlink_to(w/'node_modules',target_is_directory=True)
p=subprocess.run(['node','scripts/document-import/gperf/import.mjs','--check'],cwd=r,capture_output=True,text=True);assert p.returncode==0,p.stderr
p2=subprocess.run(['python3','scripts/document-import/gperf/package-sources.py'],cwd=r,capture_output=True,text=True);assert p2.returncode==0,p2.stderr
assert a.read_bytes()==(r/'apps/gperf/public/source/v3-3'/a.name).read_bytes()
record={'format':'ZIP','members':121,'manifestEntries':120,'allHashesExact':True,'safeRegularMembers':True,'crcPassed':True,'archiveReproductionExact':True,'regeneration':json.loads(p.stdout),'bytes':a.stat().st_size,'sha256':hashlib.sha256(a.read_bytes()).hexdigest(),'borrowedDependencies':str(w/'node_modules'),'scope':'document sources; shared site dependencies from referenced baseline'}
Path('/private/tmp/gperf-zip-check-580.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n');print(json.dumps(record,ensure_ascii=False,indent=2))
