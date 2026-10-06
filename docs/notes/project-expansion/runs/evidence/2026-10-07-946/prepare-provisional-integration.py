from pathlib import Path
import json,shutil,hashlib,datetime
E=Path(__file__).resolve().parent;R=E.parents[5];W=Path('/private/tmp/libx-diffutils-chapters11-15-formal-946');A=Path('/private/tmp/libx-gnu-diffutils-preview-artifact-944');P=E.parent/'2026-10-07-944';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
assert json.loads((E/'FINAL_TARGET_GATES.json').read_text())['status']=='passed-final-target-gates'
for row in json.loads((E/'FINAL_TARGET_GATES.json').read_text())['rows']:assert h(W/row['preferredPath'])==row['sha256']
assert json.loads((P/'PREVIEW_RESULT.json').read_text())['status']=='passed'
m=json.loads((A/'manifest.json').read_text());assert m['commit']=='3d55ca37af088961b252b38ff61076506f4bef50'
for x in m['files']:assert h(A/'dist'/x['path'])==x['sha256']
assert not (W/'dist').exists();shutil.copytree(A/'dist',W/'dist')
o={'status':'provisional-preview-only','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'baseCommit':m['commit'],'source':'Chapter10 Preview37542201910/01da541a verified manifest','baselineFiles':len(m['files']),'actualProductionBinding':'pending37544538699; release blocked until actualproduction output differences checked/rebound','ownTargetBuild':'198 routes; FINAL_TARGET_GATES/193 independent body outputs passed, same owninputs used without rerun'}
(E/'PROVISIONAL_INTEGRATION_BASELINE.json').write_text(json.dumps(o,indent=2)+'\n');print(json.dumps(o))
