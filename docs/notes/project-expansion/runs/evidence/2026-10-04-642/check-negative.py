import json, shutil, subprocess, tempfile
from pathlib import Path
r=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-jq-astro-trial-592');results=[]
with tempfile.TemporaryDirectory(prefix='jq-check-v3-negative-') as t:
 t=Path(t);p=t/'packet';a=t/'app';shutil.copytree(w/'docs/notes/document-import/jq/1.8.2',p);shutil.copytree(w/'apps/jq/src',a/'src')
 def run(name,expected):
  x=subprocess.run(['python3',str(r/'scripts/document-import/jq/check-content-v3.py'),'--packet',str(p),'--app',str(a)],capture_output=True,text=True);v=json.loads(x.stdout);assert bool(x.returncode)==expected,(name,v);results.append(dict(case=name,exitCode=x.returncode,result=v))
 run('baseline fixture accepted',False)
 target=a/'src/content/docs/v1-8-2/ja/01-guide/00-introduction.md';text=target.read_text();target.write_text(text.replace('jqのプログラム','変更されたプログラム',1));run('JA body tamper rejected',True);target.write_text(text)
 saved=p/'CONTENT_REVIEW.json';original=saved.read_text();x=json.loads(original);x['pages'][0]['fieldCoverage'][0]['read']=False;saved.write_text(json.dumps(x));run('unread semantic field rejected',True);saved.write_text(original)
 target.unlink();run('missing JA app page rejected',True)
with (r/'docs/notes/project-expansion/runs/evidence/2026-10-04-642/NEGATIVE_CHECKS.json').open('x') as f:f.write(json.dumps({'status':'passed','cases':results,'allActualBodiesUntouched':True},ensure_ascii=False,indent=2)+'\n')
print('baseline and 3 meaningful rejection cases passed')
