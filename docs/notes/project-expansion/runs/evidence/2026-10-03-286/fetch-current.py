import urllib.request,urllib.error,pathlib,json,hashlib,datetime,concurrent.futures
root=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-03-286')
urls={'CURRENT_TREE.json':'https://api.github.com/repos/wren-lang/wren/git/trees/main?recursive=1','ORG_REPOS.json':'https://api.github.com/orgs/wren-lang/repos?per_page=100','OFFICIAL_HOME.html':'https://wren.io/'}
def fetch(pair):
 name,url=pair
 try:
  with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'libx-doc-research','Accept':'application/vnd.github+json' if 'api.github.com' in url else 'text/html'}),timeout=30) as r:data=r.read();status=r.status;final=r.url
  (root/name).write_bytes(data);return {'url':url,'file':name,'status':status,'finalURL':final,'sha256':hashlib.sha256(data).hexdigest(),'bytes':len(data)}
 except Exception as e:return {'url':url,'file':name,'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:results=list(pool.map(fetch,urls.items()))
(root/'CURRENT_FETCH.json').write_text(json.dumps({'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sources':results},indent=2)+'\n');print(json.dumps(results))
