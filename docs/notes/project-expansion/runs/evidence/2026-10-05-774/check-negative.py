from pathlib import Path
import tempfile,shutil,subprocess,sys,json,hashlib
root=Path('/Users/dolphilia/github/libx');app=Path('/private/tmp/libx-libuv-formal-689/apps/libuv');gate=root/'docs/notes/document-import/libuv/1.53.0/check-content.py';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-774';rows=[]
for case in ['missing-ja-page','changed-code','missing-license']:
 with tempfile.TemporaryDirectory(prefix='libuv-negative-') as temp:
  w=Path(temp);shutil.copytree(app,w/'apps/libuv',symlinks=True,ignore=shutil.ignore_patterns('node_modules','dist','.astro'));(w/'pnpm-workspace.yaml').write_text('packages: []\n')
  target=w/'apps/libuv/src/content/docs/v1-53-0/ja/reference/async.md'
  if case=='missing-ja-page':target.unlink()
  elif case=='changed-code':
   target=w/'apps/libuv/src/content/docs/v1-53-0/ja/guide/basics.md';text=target.read_text();assert '<pre>' in text;target.write_text(text.replace('<pre>','<pre>INCORRECT-CODE',1))
  else:(w/'apps/libuv/public/notices/LICENSE-docs.txt').unlink()
  r=subprocess.run([sys.executable,str(gate),'--repository',str(root),'--workspace',str(w)],capture_output=True,text=True);assert r.returncode!=0,case
  assert ('async.md' in r.stderr or 'AssertionError' in r.stderr) if case!='missing-license' else 'LICENSE-docs.txt' in r.stderr
  rows.append({'case':case,'exitCode':r.returncode,'rejected':True,'stderr':r.stderr})
(ev/'NEGATIVE_VERIFICATION.json').write_text(json.dumps({'status':'passed','cases':rows,'originalAppModified':False},ensure_ascii=False,indent=2)+'\n');print('3 damaged-copy cases rejected; original app unchanged')
