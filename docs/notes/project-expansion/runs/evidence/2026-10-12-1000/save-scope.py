from pathlib import Path
import subprocess,shutil,json
R=Path('/Users/dolphilia/github/libx');S=Path('/private/tmp/libx-expansion-save-20261011');B='docs/notes/project-expansion';E=B+'/runs/evidence/2026-10-12-1000'
paths=[str(p.relative_to(R))for base in ['docs/notes/document-import/gnu-libtool/v2-6-2',E]for p in(R/base).rglob('*')if p.is_file() and '__pycache__'not in p.parts]+[B+'/CANDIDATES.json',B+'/OPERATIONS.json',B+'/REPORT.md',B+'/runs/2026-10-12-1000-gnu-libtool-integration.json'];changed=[]
dirty=subprocess.check_output(['git','-C',str(S),'diff','--name-only','HEAD','-z']).decode().split('\0')[:-1]+subprocess.check_output(['git','-C',str(S),'ls-files','--others','--exclude-standard','-z']).decode().split('\0')[:-1]
assert set(dirty)<=set(paths), 'Unrelated save checkout changes'
for f in sorted(set(paths)):
 t=S/f
 t.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(R/f,t)
 head=subprocess.run(['git','-C',str(S),'show','HEAD:'+f],capture_output=True)
 if head.returncode or head.stdout!=(R/f).read_bytes():changed.append(f)
if changed:subprocess.run(['git','-C',str(S),'add','-f','--',*changed],check=True)
staged=subprocess.check_output(['git','-C',str(S),'diff','--cached','--name-only','-z']).decode().split('\0')[:-1];assert sorted(staged)==sorted(changed)
for f in staged:assert subprocess.check_output(['git','-C',str(S),'show',':'+f])==(R/f).read_bytes(),f
subprocess.run(['git','-C',str(S),'diff','--cached','--check'],check=True);Path('/private/tmp/libx-gnu-libtool-save-paths-1000.json').write_text(json.dumps({'paths':staged,'files':len(staged)},indent=2)+'\n');print('Candidate-only scope and all staged bytes verified',len(staged))
