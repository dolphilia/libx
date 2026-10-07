from pathlib import Path
import subprocess,json,datetime,os
R=Path('/Users/dolphilia/github/libx');E=Path(__file__).resolve().parent;W=Path('/private/tmp/libx-gnu-sed-source-rebuild-953-final/workspace');P='docs/notes/document-import/gnu-sed/v4-10/';U=P+'updates/2026-10-07-chapter-6/';env=dict(os.environ,LIBX_UPDATE_WORKSPACE=str(W));rows=[];python='/private/tmp/libx-release-content-python-837/bin/python'
commands=[[name,[python,P+file+'.py']]for name,file in [('ORIGINAL','regenerate-en'),('UNITS','extract-units'),('JAPANESE','regenerate-ja')]]+[['OLD_CANONICAL',['node',P+'check-content.mjs']]]+[[name,[python,U+file+'.py']]for name,file in [('UPDATE_SOURCE','prepare-drafts'),('UPDATE_UNITS','extract-units'),('UPDATE_JAPANESE','render-drafts'),('UPDATE_CANONICAL','apply-update'),('UPDATE_CONTEXT','prepare-context')]]+[['BUILD',['pnpm','--filter=apps-gnu-sed','build']]]
V=P+'updates/2026-10-07-chapter-4/'
prior=[[name,[python,V+file+'.py']]for name,file in [('PRIOR_SOURCE','prepare-drafts'),('PRIOR_UNITS','extract-units'),('PRIOR_JAPANESE','render-drafts'),('PRIOR_CANONICAL','apply-update'),('PRIOR_CONTEXT','prepare-context')]]
V5=P+'updates/2026-10-07-chapter-5/'
prior5=[[name,[python,V5+file+'.py']]for name,file in [('PRIOR5_SOURCE','prepare-drafts'),('PRIOR5_UNITS','extract-units'),('PRIOR5_JAPANESE','render-drafts'),('PRIOR5_CANONICAL','apply-update'),('PRIOR5_CONTEXT','prepare-context')]]
commands=commands[:4]+prior+prior5+commands[4:]
for name,cmd in commands:
 log=E/('RECONSTRUCTION_'+name+'.log')
 with log.open('w')as out:p=subprocess.run(cmd,cwd=W,env=env,stdout=out,stderr=subprocess.STDOUT)
 rows.append({'name':name,'command':cmd,'exitCode':p.returncode,'log':str(log.relative_to(R))});print(name,p.returncode,flush=True)
 if p.returncode:break
(E/'RECONSTRUCTION_EXECUTION.json').write_text(json.dumps({'status':'passed'if len(rows)==20 and all(r['exitCode']==0 for r in rows)else'failed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(W),'frozenIndependentInstall':'INDEPENDENT_INSTALL.log','steps':rows},indent=2)+'\n')
assert len(rows)==20 and all(r['exitCode']==0 for r in rows)
