from pathlib import Path
import json,subprocess,hashlib,datetime,sys
R=Path('/Users/dolphilia/github/libx');E=Path(__file__).parent;W=Path('/private/tmp/libx-gnu-gzip-formal-923');N=Path('docs/notes/document-import/gnu-gzip/v1-15');checks=[]
commands=[('original-replay',[sys.executable,str(N/'regenerate-en.py')]),('extract-units',[sys.executable,str(N/'extract-units.py')]),('Japanese-replay',[sys.executable,str(N/'regenerate-ja.py')]),('notice-replay',[sys.executable,str(N/'prepare-notice-draft.py')]),('canonical-adoption',[sys.executable,str(N/'adopt-canonical.py')]),('all-content-render',['node',str(N/'check-content.mjs')])]
for name,cmd in commands:
 log=E/(name+'.log')
 with log.open('wb')as f:result=subprocess.run(cmd,cwd=W,stdout=f,stderr=subprocess.STDOUT)
 checks.append({'name':name,'command':cmd,'exitCode':result.returncode,'log':str(log.relative_to(R)),'logSHA256':hashlib.sha256(log.read_bytes()).hexdigest()});print(name,result.returncode,flush=True)
 if result.returncode:
  print(log.read_text()[-3000:],flush=True);break
proof={'status':'passed'if len(checks)==len(commands)and all(x['exitCode']==0 for x in checks)else'failed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(W),'checks':checks,'meaningReview':'Reuse saved separate whole eight body reviews only when current complete input/body hashes agree. No new meaning approval granted by mechanical regeneration.'}
(E/'CANONICAL_EXECUTION.json').write_text(json.dumps(proof,indent=2)+'\n');assert proof['status']=='passed'
