import urllib.request,json,pathlib,hashlib,datetime
p=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-663'); records=[]
def fetch(url,n):
 r=urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'libx-document-screening','Accept':'application/vnd.github+json' if 'api.github' in url else '*/*'}),timeout=30); b=r.read();(p/n).write_bytes(b);records.append({'url':url,'finalUrl':r.url,'status':r.status,'name':n,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()});return b
try:
 fetch('https://rapidjson.org/','OFFICIAL_INDEX.html')
 rel=json.loads(fetch('https://api.github.com/repos/Tencent/rapidjson/releases/latest','RELEASE.json')); tag=rel['tag_name']; rr=json.loads(fetch('https://api.github.com/repos/Tencent/rapidjson/git/ref/tags/'+tag,'TAG_REF.json')); typ=rr['object']['type']; commit=rr['object']['sha']
 if typ=='tag':commit=json.loads(fetch('https://api.github.com/repos/Tencent/rapidjson/git/tags/'+commit,'TAG_OBJECT.json'))['object']['sha']
 fetch('https://api.github.com/repos/Tencent/rapidjson/git/trees/'+commit+'?recursive=1','GIT_TREE.json');fetch('https://codeload.github.com/Tencent/rapidjson/tar.gz/'+commit,'rapidjson-'+commit+'.tar.gz')
 fetch('https://raw.githubusercontent.com/Tencent/rapidjson/'+commit+'/license.txt','LICENSE.txt')
 print(json.dumps({'tag':tag,'commit':commit,'publishedAt':rel['published_at'],'records':len(records)}))
finally:(p/'FETCH.json').write_text(json.dumps({'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'records':records},indent=2)+'\n')
