from pathlib import Path
import json,subprocess,os,datetime
E=Path(__file__).resolve().parent;Q=Path('/private/tmp/libx-gnu-sed-source-rebuild-962/workspace');p='docs/notes/document-import/gnu-sed/v4-10/';python='/private/tmp/libx-doc-review-python/bin/python';steps=json.loads((E.parent/'2026-10-11-958/RECONSTRUCTION_EXECUTION.json').read_text())['steps'][:-1]
steps=[{'name':r['name'],'command':r['command']}for r in steps]
for name,file in [('SOURCE','prepare-drafts'),('UNITS','extract-units'),('JAPANESE','render-drafts'),('CANONICAL','apply-update'),('CONTEXT','prepare-context')]:steps.append({'name':'CHAPTER8_10_'+name,'command':[python,p+'updates/2026-10-11-chapters-8-10/'+file+'.py']})
steps.append({'name':'BUILD','command':['pnpm','--filter=apps-gnu-sed','build']});assert len(steps)==30;env=os.environ.copy();env['LIBX_UPDATE_WORKSPACE']=str(Q);results=[]
for row in steps:
 log=E/('RECONSTRUCTION_'+row['name']+'.log')
 with log.open('w')as f:r=subprocess.run(row['command'],cwd=Q,env=env,stdout=f,stderr=subprocess.STDOUT)
 results.append({**row,'exitCode':r.returncode,'log':str(log.relative_to(Path('/Users/dolphilia/github/libx')))});out={'status':'passed'if len(results)==30 and all(x['exitCode']==0 for x in results)else'failed-or-incomplete','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(Q),'frozenIndependentInstall':'INDEPENDENT_INSTALL.log','steps':results};(E/'RECONSTRUCTION_EXECUTION.json').write_text(json.dumps(out,indent=2)+'\n');print(row['name'],r.returncode,flush=True)
 if r.returncode:raise SystemExit(r.returncode)
