from pathlib import Path
import json,shutil,hashlib,datetime
E=Path(__file__).resolve().parent;W=Path('/private/tmp/libx-sed-chapter5-formal-951');A=Path('/private/tmp/libx-gnu-sed-production-artifact-950');P=E.parent/'2026-10-07-950';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
assert json.loads((E/'RECONSTRUCTION_PREFERRED.json').read_text())['status']=='passed'
for row in json.loads((E/'RECONSTRUCTION_PREFERRED.json').read_text())['rows']:assert h(W/row['path'])==row['sha256']
pub=json.loads((P/'PUBLICATION_RESULT.json').read_text());assert pub['status']=='published-and-verified'
m=json.loads((A/'manifest.json').read_text());assert m['commit']==pub['commit']==json.loads((P/'COMMIT_RESULT.json').read_text())['commit']
for x in m['files']:assert h(A/'dist'/x['path'])==x['sha256']
assert not(W/'dist').exists();shutil.copytree(A/'dist',W/'dist')
o={'status':'passed-actual-production-baseline','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'baseCommit':m['commit'],'baselineFiles':len(m['files']),'deployment':pub['deployment'],'ownTargetBuild':'70routes/65preferred independent hashes reused; independent replay passed;integration rebuild required for changedsourcekit'}
(E/'INTEGRATION_BASELINE.json').write_text(json.dumps(o,indent=2)+'\n');print(json.dumps(o))
