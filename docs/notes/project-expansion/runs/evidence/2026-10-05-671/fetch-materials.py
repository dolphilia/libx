import json,pathlib,urllib.request,urllib.error,hashlib,datetime,concurrent.futures
out=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-671')
items=[('release-badge','https://img.shields.io/badge/release-v1.1.0-blue.png'),('travis-badge','https://travis-ci.org/miloyip/rapidjson.png?branch=master'),('appveyor-badge','https://ci.appveyor.com/api/projects/status/u658dcuwxo14a8m9/branch/master'),('coveralls-badge','https://coveralls.io/repos/miloyip/rapidjson/badge.png?branch=master'),('shields-license','https://img.shields.io/blog/mit-apache-license'),('appveyor-docs','https://www.appveyor.com/docs/status-badges/'),('coveralls-terms','https://coveralls.io/legal/'),('travis-docs','https://docs.travis-ci.com/user/status-images/')]
def fetch(item):
 name,url=item;row={'name':name,'url':url,'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat()}
 try:
  req=urllib.request.Request(url,headers={'User-Agent':'libx-document-source-audit/1.0'})
  try:r=urllib.request.urlopen(req,timeout=25)
  except urllib.error.HTTPError as e:r=e
  with r:
   b=r.read(4000001)
   if len(b)>4000000:raise ValueError('Response exceeds 4MB audit cap')
   (out/(name+'.response')).write_bytes(b);row.update({'finalUrl':r.geturl(),'status':r.status,'headers':dict(r.headers.items()),'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),'saved':name+'.response','signatureHex':b[:24].hex()})
 except Exception as e:row['error']=str(e)
 return row
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:rows=list(pool.map(fetch,items))
(out/'FETCH.json').write_text(json.dumps({'items':rows},indent=2)+'\n')
print(json.dumps([{k:r[k] for k in ['name','status','bytes','finalUrl','error'] if k in r} for r in rows],indent=2))
