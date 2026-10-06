from pathlib import Path
import subprocess,urllib.request,urllib.error,urllib.parse,zipfile,io,json,datetime
E=Path(__file__).parent;c=subprocess.run(['git','credential','fill'],input='protocol=https\nhost=github.com\n\n',text=True,stdout=subprocess.PIPE,stderr=subprocess.DEVNULL,check=True);token=dict(x.split('=',1)for x in c.stdout.splitlines()if'='in x)['password'];u='https://api.github.com/repos/dolphilia/libx/actions/runs/37424241211/logs'
class NoRedirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,*a,**kw):return None
try:urllib.request.build_opener(NoRedirect).open(urllib.request.Request(u,headers={'Authorization':'Bearer '+token}),timeout=30);raise RuntimeError('Expectedredirect')
except urllib.error.HTTPError as ex:assert ex.code==302;target=ex.headers['Location']
p=urllib.parse.urlsplit(target);assert p.scheme=='https'and(p.hostname.endswith('.blob.core.windows.net')or p.hostname.endswith('.actions.githubusercontent.com'))
with urllib.request.urlopen(target,timeout=30)as r:data=r.read()
with zipfile.ZipFile(io.BytesIO(data))as z:
 names=[n for n in z.namelist()if 'Repository and content checks'in n];assert len(names)==1;text=z.read(names[0]).decode();(E/'PREVIEW_INITIAL_CONTENT_FAILURE.log').write_text(text);print(text[-13000:])
(E/'PREVIEW_INITIAL_FAILURE.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'run':37424241211,'commit':'77499bc728c0c4965673c2c7d968f42c4a4400eb','status':'failed-not-published','failedStep':'Repository and content checks','log':'PREVIEW_INITIAL_CONTENT_FAILURE.log','deployment':'skipped'},indent=2)+'\n')
