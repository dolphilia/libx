from pathlib import Path
import subprocess,json,datetime,os
R=Path('/Users/dolphilia/github/libx');E=Path(__file__).resolve().parent;W=Path('/private/tmp/libx-gnu-diffutils-source-rebuild-946/workspace');P='docs/notes/document-import/gnu-diffutils/v3-12/';U=P+'updates/2026-10-07-chapters-5-9/';env=dict(os.environ,LIBX_UPDATE_WORKSPACE=str(W));rows=[]
commands=[['ORIGINAL',['/private/tmp/libx-release-content-python-837/bin/python',P+'regenerate-en.py']],['UNITS',['/private/tmp/libx-release-content-python-837/bin/python',P+'extract-units.py']],['JAPANESE',['/private/tmp/libx-release-content-python-837/bin/python',P+'regenerate-ja.py']],['OLD_CANONICAL_CHECK',['node',P+'check-content.mjs']],['UPDATE_SOURCE',['/private/tmp/libx-release-content-python-837/bin/python',U+'prepare-drafts.py']],['UPDATE_UNITS',['/private/tmp/libx-release-content-python-837/bin/python',U+'extract-units.py']],['UPDATE_JAPANESE',['/private/tmp/libx-release-content-python-837/bin/python',U+'render-drafts.py']],['UPDATE_CANONICAL',['/private/tmp/libx-release-content-python-837/bin/python',U+'apply-update.py']],['UPDATE_CONTEXT',['/private/tmp/libx-release-content-python-837/bin/python',U+'prepare-context.py']],['BUILD',['pnpm','--filter=apps-gnu-diffutils','build']]]
V=P+'updates/2026-10-07-chapter-10/'
commands=commands[:-1]+[[name.replace('UPDATE_','CHAPTER10_'),[cmd[0],cmd[1].replace(U,V)]]for name,cmd in commands[4:9]]+[commands[-1]]
C=P+'updates/2026-10-07-chapters-11-15/'
commands=commands[:-1]+[[name.replace('UPDATE_','CHAPTERS11_15_'),[cmd[0],cmd[1].replace(U,C)]]for name,cmd in commands[4:9]]+[commands[-1]]
for name,cmd in commands:
 log=E/('RECONSTRUCTION_'+name+'.log')
 with log.open('w')as out:p=subprocess.run(cmd,cwd=W,env=env,stdout=out,stderr=subprocess.STDOUT)
 rows.append({'name':name,'command':cmd,'exitCode':p.returncode,'log':str(log.relative_to(R))});print(name,p.returncode,flush=True)
 if p.returncode:break
(E/'RECONSTRUCTION_EXECUTION.json').write_text(json.dumps({'status':'passed'if len(rows)==20 and all(x['exitCode']==0 for x in rows)else'failed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'independentDependencies':'frozenlockfile install, no borrowed node_modules','rows':rows},indent=2)+'\n')
if len(rows)!=20 or any(x['exitCode']for x in rows):raise SystemExit(1)
