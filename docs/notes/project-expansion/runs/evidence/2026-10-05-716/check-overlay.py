from pathlib import Path
import json,hashlib,subprocess
root=Path('/Users/dolphilia/github/libx');packet=root/'docs/notes/document-import/libuv/1.53.0';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-716';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();files=list((packet/'canonical/en').rglob('*.md'))+[packet/'CONTENT_MAP.json',packet/'translation/ja/guide/processes.md'];before={str(p.relative_to(root)):sha(p) for p in files};steps=['generate-canonical.py','apply-basics-editorial-note.py','apply-networking-declaration.py','apply-processes-editorial-note.py']
for _ in range(2):
 for f in steps:subprocess.run(['/private/tmp/libx-libuv-screening-676/venv/bin/python',str(packet/f),'--repository',str(root),'--workspace','/private/tmp/libx-libuv-formal-689'],check=True,capture_output=True)
 assert {str(p.relative_to(root)):sha(p) for p in files}==before
for lang,name in [('en','EN'),('ja','JA')]:
 p=packet/('canonical/en/guide/processes.md' if lang=='en' else 'translation/ja/guide/processes.md');old=(ev/('BASELINE_'+name+'.md')).read_text().split('---\n',2)[2];assert p.read_text().split('---\n',2)[2]==old
(ev/'OVERLAY_VERIFICATION.json').write_text(json.dumps({'canonicalGenerationSteps':steps,'repeatFullGenerationCount':2,'all43CanonicalPlusMapAndJAReproduced':True,'originalProcessesBodyByteExactEN':True,'originalProcessesBodyByteExactJA':True,'hashes':before,'sourceInputsVerified':3,'fullSemanticReview':'pending','nativeDisplay':'pending'},indent=2)+'\n');print('4step reproduced twice; ENJA processes bodies byte exact')
