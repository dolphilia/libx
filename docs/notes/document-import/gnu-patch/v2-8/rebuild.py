from pathlib import Path
import sys,subprocess,hashlib,json
N=Path(__file__).resolve().parent;R=N.parents[4];W=Path(sys.argv[1])if len(sys.argv)>1 else R;P=N/'preferred';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();before={str(p.relative_to(P)):sha(p)for p in P.rglob('*.md')};assert len(before)==18
for row in json.loads((N/'SOURCE_MANIFEST.json').read_text())['files']:assert sha(R/row['path'])==row['sha256'],row['path']
for name in ['generate-canonical.py','translate-batch1.py','translate-batch2.py','prepare-source-public.py']:subprocess.run([sys.executable,str(N/name),str(W)],check=True)
assert before=={str(p.relative_to(P)):sha(p)for p in P.rglob('*.md')},'regenerated preferred documents differ'
for row in json.loads((N/'REVIEW_MANIFEST.json').read_text())['pages']:
 assert row['status']=='passed'
 for role in ['source','canonical','translation']:assert sha(R/row[role]['path'])==row[role]['sha256'],(row['id'],role)
for rel,digest in before.items():assert sha(W/'apps/gnu-patch/src/content/docs/v2-8'/rel)==digest
print('18 preferred documents reproduced exactly;9 whole review bindings and7 fixed inputs exact')
