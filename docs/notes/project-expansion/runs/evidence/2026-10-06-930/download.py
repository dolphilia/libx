import pathlib,json,subprocess,urllib.request,urllib.error,urllib.parse,hashlib,zipfile,stat,datetime
root=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-06-930')
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
run=api('actions/runs/'+str(run_id));assert run['head_sha']==sha and run['conclusion']=='success'
jobs=api('actions/runs/'+str(run_id)+'/jobs')['jobs'];assert next(j for j in jobs if j['name']=='deploy-'+role)['conclusion']=='success'
artifacts=api('actions/runs/'+str(run_id)+'/artifacts')['artifacts']
quality_candidates=[a for a in artifacts if a['name'].startswith('verified-deployment-'+sha+'-') and not a['expired']]
assert quality_candidates
quality_attempt=max(int(a['name'].rsplit('-',1)[1]) for a in quality_candidates)
if quality_attempt!=run['run_attempt']:
 assert next(j for j in api('actions/runs/'+str(run_id)+'/attempts/'+str(quality_attempt)+'/jobs')['jobs'] if j['name']=='quality-check')['conclusion']=='success'
expected=['verified-deployment-'+sha+'-'+str(quality_attempt),'pages-production-before-'+str(run_id)+'-'+str(run['run_attempt']),'pages-production-state-'+str(run_id)+'-'+str(run['run_attempt'])]
if role=='preview':expected=expected[:1]
records=[]
for name in expected:
 a=next(a for a in artifacts if a['name']==name);assert not a['expired'] and a['workflow_run']['id']==run_id and a['workflow_run']['head_sha']==sha
 cache=pathlib.Path('/private/tmp/libx-gnu-time-'+role+'-'+('artifact' if name.startswith('verified-') else ('before' if name.startswith('pages-production-before-') else 'state'))+'-930.zip')
 data=cache.read_bytes() if cache.exists() else download(a['archive_download_url']);h=hashlib.sha256(data).hexdigest();assert 'sha256:'+h==a['digest'] and len(data)==a['size_in_bytes']
 kind='artifact' if name.startswith('verified-') else ('before' if name.startswith('pages-production-before-') else 'state')
 archive=pathlib.Path('/private/tmp/libx-gnu-time-'+role+'-'+kind+'-930.zip');dest=pathlib.Path('/private/tmp/libx-gnu-time-'+role+'-'+kind+'-930')
 if not archive.exists():
  with archive.open('xb') as f:f.write(data)
 dest.mkdir(exist_ok=True)
 with zipfile.ZipFile(archive) as z:
  for item in z.infolist():
   q=pathlib.PurePosixPath(item.filename)
   assert q.parts and not q.is_absolute() and '..' not in q.parts and '\\' not in item.filename and not stat.S_ISLNK(item.external_attr>>16)
   assert ((q.parts[0]=='dist' or item.filename=='manifest.json') if kind=='artifact' else item.filename in ['before.json','prepublish.json','after.json'])
  z.extractall(dest)
 records.append({'kind':kind,'id':a['id'],'name':name,'zipSha256':h,'bytes':len(data),'archive':str(archive),'directory':str(dest),'safeExtraction':True})
out={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'passed','run':run_id,'headSha':sha,'qualityArtifactAttempt':quality_attempt,'publicationAttempt':run['run_attempt'],'artifacts':records}
with (root/(role.upper()+'_DOWNLOAD.json')).open('x') as f:json.dump(out,f,indent=2);f.write('\n')
print(json.dumps(out))

logdata=download('https://api.github.com/repos/dolphilia/libx/actions/runs/'+str(run_id)+'/logs')
logzip=pathlib.Path('/private/tmp/libx-gnu-time-'+role+'-logs-930.zip');logzip.write_bytes(logdata)
with zipfile.ZipFile(logzip) as z:
 for name in z.namelist():
  if ('Deploy' in name or 'deploy' in name) and name.endswith('.txt'):
   data=z.read(name).decode('utf-8')
   import re
   urls=sorted(set(re.findall(r'https://[a-z0-9-]+\.libx\.pages\.dev',data)))
   if urls:
    (root/(role.upper()+'_DEPLOY_LOG.txt')).write_text(data)
    print(json.dumps({'log':name,'urls':urls}))
