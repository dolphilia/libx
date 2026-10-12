from pathlib import Path
import json,hashlib,subprocess,sys,shutil,zipfile
U=Path(__file__).resolve().parent;N=U.parents[1];W=U.parents[6];B=W.parent
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
inventory=B/'SOURCE_COMPONENTS.json';assert inventory.exists(),'Extract complete source kit, then run from workspace'
components=json.loads(inventory.read_text())
for f in components['files']:assert sha(B/f['path'])==f['sha256'],f['path']
target=W/'apps/gnu-tar/public/source/v1-35/source.zip'
# Recreate the omitted self ZIP before generators change host-specific metadata.
with zipfile.ZipFile(target,'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for p in sorted([B/f['path'] for f in components['files']]+[inventory]):
  i=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,12,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,p.read_bytes())
before={str(p.relative_to(W)):sha(p) for d in [N/'preferred',N/'updates/2026-10-12-invocation-styles/preferred',U/'preferred'] for p in d.rglob('*.md')};assert len(before)==90
subprocess.run([sys.executable,str(N/'rebuild.py')],cwd=W,check=True)
for update in [N/'updates/2026-10-12-invocation-styles',U]:
 for name in ['generate.py','translate.py','prepare-public.py']:subprocess.run([sys.executable,str(update/name),str(W)],cwd=W,check=True)
for p,digest in before.items():assert sha(W/p)==digest,p
for review in [N/'REVIEW_MANIFEST.json',N/'updates/2026-10-12-invocation-styles/REVIEW_MANIFEST.json',U/'REVIEW_MANIFEST.json']:
 for r in json.loads(review.read_text())['pages']:
  assert r['status']=='passed'
  for role in ['source','canonical','translation']:assert sha(W/r[role]['path'])==r[role]['sha256'],(r['id'],role)
for parent in [N/'preferred',N/'updates/2026-10-12-invocation-styles/preferred',U/'preferred']:
 for p in parent.rglob('*.md'):
  rel=p.relative_to(parent);assert sha(p)==sha(W/'apps/gnu-tar/src/content/docs/v1-35'/rel)==sha(W/'apps/gnu-tar/public/source/v1-35/edited'/rel)
print('90 preferred documents reproduced;44 whole review bindings and all fixed original inputs exact;selfZIP restored')
