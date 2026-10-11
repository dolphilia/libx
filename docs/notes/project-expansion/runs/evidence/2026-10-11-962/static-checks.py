from pathlib import Path
import json,subprocess,hashlib,datetime
E=Path(__file__).resolve().parent;W=Path('/private/tmp/libx-sed-chapters8-10-formal-962');steps=[]
for name,cmd in [('FORMAT',['pnpm','exec','prettier','--check','apps/gnu-sed']),('LINT',['pnpm','exec','eslint','apps/gnu-sed']),('INTEGRITY',['pnpm','check:integrity'])]:
 log=E/(name+'.log')
 with log.open('w')as f:r=subprocess.run(cmd,cwd=W,stdout=f,stderr=subprocess.STDOUT)
 steps.append({'name':name,'command':cmd,'exitCode':r.returncode,'log':{'path':str(log.relative_to(Path('/Users/dolphilia/github/libx'))),'sha256':hashlib.sha256(log.read_bytes()).hexdigest()}})
 print(name,r.returncode,flush=True)
 if r.returncode:break
(E/'TARGET_STATIC_CHECKS.json').write_text(json.dumps({'status':'passed'if len(steps)==3 and all(x['exitCode']==0 for x in steps)else'failed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'steps':steps},indent=2)+'\n')
if any(x['exitCode']for x in steps):raise SystemExit(1)
