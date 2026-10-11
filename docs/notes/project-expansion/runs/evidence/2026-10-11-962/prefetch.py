import pathlib,json,subprocess,urllib.request,urllib.error,urllib.parse,hashlib,zipfile,stat,datetime
root=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-11-962')
import sys
run_id=int(sys.argv[1]);role=sys.argv[2];sha=json.loads((root/'COMMIT_RESULT.json').read_text())['commit']
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

run=api('actions/runs/'+str(run_id));assert run['head_sha']==sha
jobs=api('actions/runs/'+str(run_id)+'/jobs')['jobs'];assert next(j for j in jobs if j['name']=='quality-check')['conclusion']=='success'
artifacts=api('actions/runs/'+str(run_id)+'/artifacts')['artifacts'];name='verified-deployment-'+sha+'-'+str(run['run_attempt']);a=next(a for a in artifacts if a['name']==name);assert not a['expired']and a['workflow_run']['head_sha']==sha
archive=pathlib.Path('/private/tmp/libx-gnu-sed-preview-artifact-962.zip');assert not archive.exists();print('Downloading successful quality artifact '+str(a['id'])+' '+str(a['size_in_bytes'])+' bytes',flush=True)
data=download(a['archive_download_url']);digest=hashlib.sha256(data).hexdigest();assert 'sha256:'+digest==a['digest']and len(data)==a['size_in_bytes']
archive.write_bytes(data);out={'status':'passed-quality-artifact-prefetched-not-deployment-verification','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'run':run_id,'sha':sha,'artifactId':a['id'],'name':name,'bytes':len(data),'zipSha256':digest,'archive':str(archive),'limits':'Quality-check success independently confirmed. Deploy may still be queued/running. Main download.py must verify overall/deploy success and safe extraction before artifact/publication gates.'};(root/'PREVIEW_ARTIFACT_PREFETCH.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out),flush=True)
