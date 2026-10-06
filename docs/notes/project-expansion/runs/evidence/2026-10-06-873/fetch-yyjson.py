from pathlib import Path
import urllib.request,json,hashlib,datetime,subprocess
E=Path(__file__).parent;S=E/'source/yyjson';S.mkdir(parents=True,exist_ok=True)
c=subprocess.run(['git','credential','fill'],input='protocol=https\nhost=github.com\n\n',text=True,stdout=subprocess.PIPE,stderr=subprocess.DEVNULL,check=True);token=dict(x.split('=',1)for x in c.stdout.splitlines()if '='in x)['password']
def api(p):
 u='https://api.github.com/repos/ibireme/yyjson'+p
 with urllib.request.urlopen(urllib.request.Request(u,headers={'Authorization':'Bearer '+token,'Accept':'application/vnd.github+json'}),timeout=45) as r:return json.load(r)
def save(name,x):
 p=S/name;assert not p.exists();p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
release=api('/releases/latest');save('RELEASE.json',release);tag=release['tag_name'];commit=api('/commits/'+tag);save('COMMIT.json',commit);sha=commit['sha'];tree=api('/git/trees/'+commit['commit']['tree']['sha']+'?recursive=1');assert not tree.get('truncated');save('TREE.json',tree)
selected=[x for x in tree['tree'] if x['type']=='blob' and (x['path'] in ['README.md','LICENSE','CHANGELOG.md']or(x['path'].startswith('doc/')and x['path'].endswith('.md')))]
rows=[]
for f in selected:
 u='https://raw.githubusercontent.com/ibireme/yyjson/'+sha+'/'+f['path']
 with urllib.request.urlopen(u,timeout=45) as r:data=r.read()
 assert hashlib.sha1(b'blob '+str(len(data)).encode()+b'\0'+data).hexdigest()==f['sha'];p=S/'original'/f['path'];p.parent.mkdir(parents=True,exist_ok=True);assert not p.exists();p.write_bytes(data)
 rows.append({'path':str(p.relative_to(E)),'upstreamPath':f['path'],'url':u,'sha256':hashlib.sha256(data).hexdigest(),'gitBlob':f['sha'],'bytes':len(data),'words':len(data.decode().split()),'lines':len(data.decode().splitlines())})
x={'status':'passed-fixed-fetch','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'repository':'https://github.com/ibireme/yyjson','version':tag,'commit':sha,'releaseAt':release['published_at'],'files':rows,'scope':'Read-only official Markdown inventory,not adoption/translation review. No full original technical audit.'};(E/'FIXED_INPUTS.json').write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n');print(json.dumps({'version':tag,'commit':sha,'files':[{k:f[k]for k in ['upstreamPath','bytes','words','lines']}for f in rows]}))
