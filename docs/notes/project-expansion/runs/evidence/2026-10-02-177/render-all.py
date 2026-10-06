from pathlib import Path
import subprocess,json,hashlib,time
source=Path('/private/tmp/libx-official-research-20261002-114/uthash/doc');out=Path('/private/tmp/libx-uthash-trial-177/generated');out.mkdir(parents=True,exist_ok=True)
rows=[]
for name in ['userguide','utlist','utarray','utringbuffer','utstack','utstring','ChangeLog']:
 start=time.monotonic();p=subprocess.run(['/private/tmp/libx-uthash-trial-175-venv/bin/asciidoc','-a','toc2','-o',str(out/(name+'.html')),str(source/(name+'.txt'))],capture_output=True,text=True)
 rows.append({'name':name,'sourceSHA':hashlib.sha256((source/(name+'.txt')).read_bytes()).hexdigest(),'exitCode':p.returncode,'seconds':round(time.monotonic()-start,3),'stdout':p.stdout,'stderr':p.stderr})
 if p.returncode:break
Path('/private/tmp/libx-uthash-render-all-177.json').write_text(json.dumps({'renderer':'AsciiDoc10.2.1','results':rows},indent=2)+'\n')
print(json.dumps({'rendered':len(rows),'failed':sum(r['exitCode']!=0 for r in rows),'warnings':sum(bool(r['stderr']) for r in rows)}))
