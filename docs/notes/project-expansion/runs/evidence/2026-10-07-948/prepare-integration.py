from pathlib import Path
import json,shutil,hashlib,datetime
E=Path(__file__).resolve().parent;W=Path('/private/tmp/libx-diffutils-chapters16-18-formal-948');A=Path('/private/tmp/libx-gnu-diffutils-production-artifact-946');P=E.parent/'2026-10-07-946';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
assert json.loads((E/'FINAL_TARGET_GATES.json').read_text())['status']=='passed-final-target-gates'
for row in json.loads((E/'FINAL_TARGET_GATES.json').read_text())['rows']:assert h(W/row['preferredPath'])==row['sha256']
pub=json.loads((P/'PUBLICATION_RESULT.json').read_text());assert pub['status']=='published-and-verified'
m=json.loads((A/'manifest.json').read_text());assert m['commit']==pub['commit']=='b134354258b0f74ae923e4d8894e58227bf58466'
for x in m['files']:assert h(A/'dist'/x['path'])==x['sha256']
assert not(W/'dist').exists();shutil.copytree(A/'dist',W/'dist')
o={'status':'passed-actual-production-baseline','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'baseCommit':m['commit'],'baselineFiles':len(m['files']),'deployment':pub['deployment'],'ownTargetBuild':'224routes/219preferred independent hashes reused; no target rerun'}
(E/'INTEGRATION_BASELINE.json').write_text(json.dumps(o,indent=2)+'\n');print(json.dumps(o))
