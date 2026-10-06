from pathlib import Path
import subprocess,json,datetime,os
R=Path('/Users/dolphilia/github/libx');E=Path(__file__).resolve().parent;W=Path('/private/tmp/libx-gnu-grep-source-rebuild-940/workspace');P='docs/notes/document-import/gnu-grep/v3-12/';U=P+'updates/2026-10-07-chapters-5-6/';env=dict(os.environ,LIBX_UPDATE_WORKSPACE=str(W));rows=[]
commands=[['ORIGINAL',['/private/tmp/libx-release-content-python-837/bin/python',P+'regenerate-en.py']],['UNITS',['/private/tmp/libx-release-content-python-837/bin/python',P+'extract-units.py']],['JAPANESE',['/private/tmp/libx-release-content-python-837/bin/python',P+'regenerate-ja.py']],['OLD_CANONICAL_CHECK',['node',P+'check-content.mjs']],['UPDATE_SOURCE',['/private/tmp/libx-release-content-python-837/bin/python',U+'prepare-drafts.py']],['UPDATE_UNITS',['/private/tmp/libx-release-content-python-837/bin/python',U+'extract-units.py']],['UPDATE_JAPANESE',['/private/tmp/libx-release-content-python-837/bin/python',U+'render-drafts.py']],['UPDATE_CANONICAL',['/private/tmp/libx-release-content-python-837/bin/python',U+'apply-update.py']],['UPDATE_CONTEXT',['/private/tmp/libx-release-content-python-837/bin/python',U+'prepare-context.py']],['BUILD',['pnpm','--filter=apps-gnu-grep','build']]]
for name,cmd in commands:
 log=E/('RECONSTRUCTION_'+name+'.log')
 with log.open('w')as out:p=subprocess.run(cmd,cwd=W,env=env,stdout=out,stderr=subprocess.STDOUT)
 rows.append({'name':name,'command':cmd,'exitCode':p.returncode,'log':str(log.relative_to(R))});print(name,p.returncode,flush=True)
 if p.returncode:break
(E/'RECONSTRUCTION_EXECUTION.json').write_text(json.dumps({'status':'passed'if len(rows)==10 and all(x['exitCode']==0 for x in rows)else'failed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'independentDependencies':'frozenlockfile install, no borrowed node_modules','rows':rows},indent=2)+'\n')
if len(rows)!=10 or any(x['exitCode']for x in rows):raise SystemExit(1)
