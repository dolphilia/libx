from pathlib import Path
import json,hashlib,sys,subprocess
N=Path(__file__).resolve().parent;W=N.parents[4];sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();P=N/'preferred';before={str(p.relative_to(P)):sha(p)for p in P.rglob('*.md')};assert len(before)==64
for r in json.loads((N/'SOURCE_MANIFEST.json').read_text())['files']:assert sha(N/r['path'])==r['sha256']
for name in ['generate-canonical.py','translate-batch1.py','translate-batch2.py','translate-batch3.py','prepare-source-public.py']:subprocess.run([sys.executable,str(N/name),str(W)],check=True)
assert before=={str(p.relative_to(P)):sha(p)for p in P.rglob('*.md')},'regeneration differs from supplied preferred inputs'
for row in json.loads((N/'REVIEW_MANIFEST.json').read_text())['pages']:
 assert row['status']=='passed'
 for role in ['source','canonical','translation']:assert sha(W/row[role]['path'])==row[role]['sha256'],(row['id'],role)
for rel,digest in before.items():assert sha(W/'apps/gnu-tar/src/content/docs/v1-35'/rel)==digest
print('64 preferred documents reproduced byte-for-byte;31 whole review bindings and24 original inputs exact')
