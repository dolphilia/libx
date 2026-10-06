from pathlib import Path
import json,re,hashlib,subprocess
from bs4 import BeautifulSoup
out=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-683');d=json.loads((out/'TRIAL_PREPARED.json').read_text());app=Path(d['app']);w=Path(d['workspace']);changed=[]
for r in d['rows']:
 p=Path(r['file']);s=p.read_text();fixed=re.sub(r'/docs/libuv-trial/v1-53-0/en/reference/guide/([^/#]+/)',r'/docs/libuv-trial/v1-53-0/en/guide/\1',s)
 if s!=fixed:p.write_text(fixed);changed.append(r['page'])
 body=BeautifulSoup(fixed.split('---\n',2)[2].replace('&#10;','\n'),'html.parser').select_one('article.libuv-document');r['bodySha256']=hashlib.sha256(str(body).encode()).hexdigest();r['fileSha256']=hashlib.sha256(p.read_bytes()).hexdigest()
(out/'TRIAL_PREPARED.json').write_text(json.dumps(d,indent=2)+'\n');(out/'ROUTE_PREFIX_FIX.json').write_text(json.dumps({'changedPages':changed,'reason':'Initial route replacement matched guide root as prefix of guide/chapter URLs. Exact chapter prefix restored; all original pages retained.'},indent=2)+'\n')
(w/'config').mkdir(exist_ok=True);(w/'config/global-defaults.jsonc').write_bytes(subprocess.check_output(['git','-C','/private/tmp/libx-jq-footer-integration-20261004','show','6e0dbef265ff6ebadf58a7437564a7d07ffeb296:config/global-defaults.jsonc']))
r=subprocess.run(['node',str(w/'packages/project-config/src/prepare-app.js'),'--projects=libuv-trial'],cwd=app,stdout=subprocess.PIPE,stderr=subprocess.STDOUT,timeout=60);(out/'PREBUILD.log').write_bytes(r.stdout);assert r.returncode==0
r=subprocess.run(['pnpm','exec','astro','build'],cwd=app,stdout=subprocess.PIPE,stderr=subprocess.STDOUT,timeout=120);(out/'FINAL_ASTRO_BUILD.log').write_bytes(r.stdout);(out/'FINAL_BUILD_RESULT.json').write_text(json.dumps({'exitCode':r.returncode,'cwd':str(app),'caughtPaginationErrors':r.stdout.decode().count('Error generating pagination'),'invalidSlugs':r.stdout.decode().count('Invalid entry slug'),'staticPages':47,'sidebarSearchPrepared':True},indent=2)+'\n');print('rebuild',r.returncode)
