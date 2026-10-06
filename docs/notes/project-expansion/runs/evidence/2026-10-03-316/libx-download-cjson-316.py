import pathlib,json,subprocess,urllib.request,urllib.parse,hashlib,zipfile,stat,datetime
root=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-03-316')
a=json.loads(sorted(root.glob('CI_*.json'))[-1].read_text())['artifacts'][0]
assert a['name']=='verified-deployment-adbe8b8d8698a406734a5e7466ae1e589a5190d4-1' and a['workflow_run']['head_sha']=='adbe8b8d8698a406734a5e7466ae1e589a5190d4' and not a['expired']
c=subprocess.run(['git','credential','fill'],input='protocol=https\nhost=github.com\n\n',text=True,stdout=subprocess.PIPE,stderr=subprocess.DEVNULL,check=True)
t=dict(x.split('=',1) for x in c.stdout.splitlines() if '=' in x)['password']
class NoRedirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,*args,**kwargs):return None
req=urllib.request.Request(a['archive_download_url'],headers={'Authorization':'Bearer '+t,'Accept':'application/vnd.github+json'})
try:
 urllib.request.build_opener(NoRedirect).open(req,timeout=45)
 raise RuntimeError('Expected redirect')
except urllib.error.HTTPError as e:
 assert e.code==302
 u=e.headers['Location']
p=urllib.parse.urlsplit(u)
assert p.scheme=='https' and (p.hostname.endswith('.blob.core.windows.net') or p.hostname.endswith('.actions.githubusercontent.com'))
zip_path=pathlib.Path('/private/tmp/libx-cjson-ci-artifact-316.zip')
with urllib.request.urlopen(u,timeout=60) as r,zip_path.open('xb') as w:
 while b:=r.read(1024*1024):w.write(b)
h=hashlib.sha256(zip_path.read_bytes()).hexdigest();assert 'sha256:'+h==a['digest']
dest=pathlib.Path('/private/tmp/libx-cjson-ci-artifact-316');dest.mkdir()
with zipfile.ZipFile(zip_path) as z:
 for item in z.infolist():
  q=pathlib.PurePosixPath(item.filename)
  assert not q.is_absolute() and '..' not in q.parts and '\\' not in item.filename and not stat.S_ISLNK(item.external_attr>>16)
  assert q.parts and (q.parts[0]=='dist' or item.filename=='manifest.json')
 z.extractall(dest)
out={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'passed','artifactId':a['id'],'runId':37078450678,'headSha':a['workflow_run']['head_sha'],'artifactName':a['name'],'zipSha256':h,'bytes':zip_path.stat().st_size,'zip':str(zip_path),'directory':str(dest),'safeExtraction':True}
with (root/'CI_DOWNLOAD.json').open('x') as f:json.dump(out,f,indent=2);f.write('\n')
print(json.dumps(out))
