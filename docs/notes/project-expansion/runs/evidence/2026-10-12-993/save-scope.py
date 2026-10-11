from pathlib import Path
import subprocess,shutil,json,hashlib
R=Path('/Users/dolphilia/github/libx');S=Path('/private/tmp/libx-expansion-save-20261011');B='docs/notes/project-expansion';U='docs/notes/document-import/gnu-tar/v1-35/updates/2026-10-12-option-summary';E=B+'/runs/evidence/2026-10-12-993';run=B+'/runs/2026-10-12-993-gnu-tar-options-sourcekit.json'
assert not subprocess.check_output(['git','-C',str(S),'diff','--cached','--name-only'],text=True).strip(),'Existing index changes require inspection'
paths=[str(p.relative_to(R)) for d in [U,E] for p in (R/d).rglob('*') if p.is_file() and '__pycache__' not in p.parts and p.suffix!='.pyc']+[run,B+'/OPERATIONS.json',B+'/REPORT.md',B+'/runs/2026-10-12-991-gnu-tar-option-summary.json',B+'/runs/evidence/2026-10-12-991/CANONICAL_VALIDATION_INITIAL.json'];changed=[]
for f in sorted(set(paths)):
 target=S/f
 if target.exists() and target.read_bytes()==(R/f).read_bytes():continue
 target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(R/f,target);changed.append(f)
if changed:subprocess.run(['git','-C',str(S),'add','-f','--',*changed],check=True)
staged=subprocess.check_output(['git','-C',str(S),'diff','--cached','--name-only','-z']).decode().split('\0')[:-1]
assert sorted(staged)==sorted(changed)
for f in staged:assert subprocess.check_output(['git','-C',str(S),'show',':'+f])==(R/f).read_bytes(),f
subprocess.run(['git','-C',str(S),'diff','--cached','--check'],check=True)
Path('/private/tmp/libx-gnu-tar-save-paths-993.json').write_text(json.dumps({'paths':staged,'files':len(staged)},indent=2)+'\n');print('Explicit scope and every staged root byte verified;',len(staged),'files')
