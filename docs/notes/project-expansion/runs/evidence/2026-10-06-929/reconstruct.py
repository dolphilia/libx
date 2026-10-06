from pathlib import Path
import json,subprocess,hashlib,datetime,sys
R=Path('/Users/dolphilia/github/libx');E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-929';Q=Path('/private/tmp/libx-gnu-time-source-rebuild-929-v2/workspace');N=Path('docs/notes/document-import/gnu-time/v1-10');checks=[]
commands=[('original-replay',[sys.executable,str(N/'regenerate-en.py')]),('extract-units',[sys.executable,str(N/'extract-units.py')]),('Japanese-replay',[sys.executable,str(N/'regenerate-ja.py')]),('notice-replay',[sys.executable,str(N/'prepare-notice-draft.py')]),('canonical-adoption',[sys.executable,str(N/'adopt-canonical.py')]),('all-content-render',['node',str(N/'check-content.mjs')]),('target-build',['pnpm','--filter=apps-gnu-time','build'])]
for name,cmd in commands:
 p=E/('RECONSTRUCTION_'+name+'.log')
 with p.open('wb')as f:result=subprocess.run(cmd,cwd=Q,stdout=f,stderr=subprocess.STDOUT)
 checks.append({'name':name,'command':cmd,'exitCode':result.returncode,'log':str(p.relative_to(R)),'logSHA256':hashlib.sha256(p.read_bytes()).hexdigest()});print(name,result.returncode,flush=True)
 if result.returncode:
  print(p.read_text()[-3000:],flush=True);break
proof={'status':'passed'if len(checks)==len(commands)and all(c['exitCode']==0 for c in checks)else'failed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(Q),'sourceKit':json.loads((E/'SOURCE_OFFER.json').read_text())['archiveSHA256'],'checks':checks,'meaningReview':'Saved3 separate whole reviews reused only for regenerated source/EN/JA equal hashes. No new approval from mechanical reconstruction.'};(E/'RECONSTRUCTION_EXECUTION.json').write_text(json.dumps(proof,ensure_ascii=False,indent=2)+'\n');assert proof['status']=='passed'
