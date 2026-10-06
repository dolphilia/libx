from pathlib import Path
import json,hashlib,tarfile
out=Path('docs/notes/project-expansion/runs/evidence/2026-10-05-687');m=json.loads((out/'TRIAL_PREPARED.json').read_text());w=Path(m['workspace']);app=Path(m['app']);files=[]
for r in m['rows']:
 p=Path(r['file']);r['fileSha256']=hashlib.sha256(p.read_bytes()).hexdigest();r['bodySha256']=hashlib.sha256(p.read_text().split('---\n',2)[2].encode()).hexdigest()
(out/'TRIAL_PREPARED.json').write_text(json.dumps(m,indent=2)+'\n')
for p in sorted(w.rglob('*')):
 rel=p.relative_to(w)
 if p.is_symlink() or any(s in ['node_modules','dist','.astro','.git'] for s in rel.parts) or not p.is_file():continue
 files.append({'path':str(rel),'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
(out/'TRIAL_SOURCE_MANIFEST.json').write_text(json.dumps({'workspace':str(w),'files':files,'excluded':'symlink dependencies, dist, .astro, .git'},indent=2)+'\n')
with tarfile.open(out/'ASTRO_TRIAL_PACKET.tar.gz','w:gz') as t:
 for r in files:t.add(w/r['path'],arcname=r['path'],recursive=False)
(out/'BUILD_RESULT.json').write_text(json.dumps({'exitCode':0,'staticPages':len(list((app/'dist').rglob('*.html'))),'sourceFiles':len(files),'bodyUnchanged':True,'fullReview':False,'published':False},indent=2)+'\n');print(len(files))
