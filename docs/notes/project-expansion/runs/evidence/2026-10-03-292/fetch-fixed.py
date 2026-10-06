import json,urllib.request,hashlib,datetime
from pathlib import Path
p=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-03-292');p.mkdir(exist_ok=True);records=[]
def fetch(url,name):
 with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'libx-document-research'}),timeout=30) as r:b=r.read();status=r.status
 (p/name).write_bytes(b);records.append({'url':url,'path':name,'status':status,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()});return b
api='https://api.github.com/repos/DaveGamble/cJSON';release=json.loads(fetch(api+'/releases/latest','LATEST_RELEASE.json'));tag=release['tag_name'];commit=json.loads(fetch(api+'/commits/'+tag,'FIXED_COMMIT.json'))['sha'];tree=json.loads(fetch(api+'/git/trees/'+commit+'?recursive=1','FIXED_TREE.json'));assert not tree['truncated']
for name in ['README.md','LICENSE','CHANGELOG.md','cJSON.h']:
 b=fetch('https://raw.githubusercontent.com/DaveGamble/cJSON/'+commit+'/'+name,name);entry=next(e for e in tree['tree'] if e['path']==name);assert hashlib.sha1(b'blob '+str(len(b)).encode()+b'\0'+b).hexdigest()==entry['sha']
(p/'FIXED_INPUTS.json').write_text(json.dumps({'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'repository':'https://github.com/DaveGamble/cJSON','version':tag,'commit':commit,'releasePublishedAt':release['published_at'],'prerelease':release['prerelease'],'draft':release['draft'],'treeComplete':True,'inputs':records,'scopeStatus':'pending-fulltreeclassification'},indent=2)+'\n');print(tag,commit,len(tree['tree']))
