import pathlib,json,subprocess,urllib.request,urllib.error,urllib.parse,hashlib,zipfile,stat,datetime
root=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-07-948')
import sys
run_id=37550436637;role='preview';sha=json.loads((root/'COMMIT_RESULT.json').read_text())['commit']
c=subprocess.run(['git','credential','fill'],input='protocol=https\nhost=github.com\n\n',text=True,stdout=subprocess.PIPE,stderr=subprocess.DEVNULL,check=True)
t=dict(x.split('=',1) for x in c.stdout.splitlines() if '=' in x)['password']
def api(p):
 with urllib.request.urlopen(urllib.request.Request('https://api.github.com/repos/dolphilia/libx/'+p,headers={'Authorization':'Bearer '+t,'Accept':'application/vnd.github+json'}),timeout=45) as r:return json.load(r)
class NoRedirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,*args,**kwargs):return None
def download(url):
 try:
  urllib.request.build_opener(NoRedirect).open(urllib.request.Request(url,headers={'Authorization':'Bearer '+t}),timeout=45)
  raise RuntimeError('Expected redirect')
 except urllib.error.HTTPError as e:
  assert e.code==302;u=e.headers['Location']
 p=urllib.parse.urlsplit(u)
 assert p.scheme=='https' and (p.hostname.endswith('.blob.core.windows.net') or p.hostname.endswith('.actions.githubusercontent.com'))
 with urllib.request.urlopen(u,timeout=60) as r:return r.read()

logdata=download('https://api.github.com/repos/dolphilia/libx/actions/runs/'+str(run_id)+'/logs')
with zipfile.ZipFile(__import__('io').BytesIO(logdata)) as z:
 for name in z.namelist():
  if 'Unit and runtime tests' in name:
   data=z.read(name).decode();(root/'PREVIEW_FAILED_TEST_LOG.txt').write_text(data);print(data[-18000:])
