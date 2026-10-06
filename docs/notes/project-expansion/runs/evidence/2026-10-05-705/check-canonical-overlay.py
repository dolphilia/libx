from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,subprocess,sys
root=Path('/Users/dolphilia/github/libx');packet=root/'docs/notes/document-import/libuv/1.53.0';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-705';workspace='/private/tmp/libx-libuv-formal-689';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
beforeBody=(ev/'BASELINE_BASICS_EN.md').read_text().split('---\n',2)[2];assert (packet/'canonical/en/guide/basics.md').read_text().split('---\n',2)[2]==beforeBody
paths=[packet/'CONTENT_MAP.json',*sorted((packet/'canonical/en').rglob('*.md'))];before={str(p):sha(p) for p in paths}
for script in ['generate-canonical.py','apply-basics-editorial-note.py']:
 r=subprocess.run([sys.executable,str(packet/script),'--repository',str(root),'--workspace',workspace],capture_output=True,text=True);assert r.returncode==0,r.stderr
assert before=={p:sha(Path(p)) for p in before};m=json.loads((packet/'CONTENT_MAP.json').read_text())
for row in m['rows']:assert sha(root/row['canonicalFile'])==row['canonicalSha256'];assert (root/row['canonicalFile']).read_bytes()==(Path(workspace)/'apps/libuv'/row['appRelativeFile']).read_bytes()
locked=json.loads((packet/'SOURCE_MANIFEST.json').read_text());refs=[]
for name in ['helloworld','default-loop','idle-basic']:
 p=packet/('sources/docs/code/'+name+'/main.c');rel=str(p.relative_to(root));expected=next(r for r in locked['durableSources'] if r['path']==rel);assert sha(p)==expected['sha256'];refs.append({**expected,'uvLoopCloseLines':[i for i,l in enumerate(p.read_text().splitlines(),1) if 'uv_loop_close(' in l]})
assert 'The examples never' in beforeBody and 'close loops' in beforeBody
(ev/'CANONICAL_OVERLAY_VERIFICATION.json').write_text(json.dumps({'canonicalPages':43,'regeneratedFiles':len(paths),'twoStepGenerationReproductionIdentical':True,'generationSteps':m['canonicalGenerationSteps'],'allCurrentMapCanonicalHashesMatch':True,'basicsBodyAndAllCodesUnchanged':True,'baselineCanonical':{'path':str((ev/'BASELINE_BASICS_EN.md').relative_to(root)),'sha256':sha(ev/'BASELINE_BASICS_EN.md')},'sourceExamples':refs,'defect':'Original prose says examples never close loops, but all3 included fixed original examples call uv_loop_close. Original prose and code preserved; EN/JA footer-only editorial note identifies the mismatch.','translationComplete':False,'fullSemanticReviewComplete':False},ensure_ascii=False,indent=2)+'\n');print('43canonical hashes/two-step reproduction exact; basics body untouched;3 source code discrepancies confirmed')
