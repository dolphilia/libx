import urllib.request,pathlib,json,hashlib,datetime
D=pathlib.Path(__file__).parent
sources={'LZ4_OFFICIAL.html':'https://lz4.org/','LZ4_REPOSITORY.json':'https://api.github.com/repos/lz4/lz4','LZ4_RELEASE.json':'https://api.github.com/repos/lz4/lz4/releases/latest','COMMONMARK_OFFICIAL.html':'https://spec.commonmark.org/','COMMONMARK_REPOSITORY.json':'https://api.github.com/repos/commonmark/commonmark-spec','COMMONMARK_JA_AUTHOR.html':'https://qiita.com/gemmaro/items/128d690d0e5693936e0d'}
rows=[]
for name,url in sources.items():
 try:
  with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'Libx-document-discovery'}),timeout=30)as r:raw=r.read();status=r.status;final=r.url
  with (D/name).open('xb')as f:f.write(raw)
  rows.append({'url':url,'finalURL':final,'status':status,'path':str(D/name),'sha256':hashlib.sha256(raw).hexdigest(),'bytes':len(raw)})
 except Exception as e:rows.append({'url':url,'error':str(e)})
with (D/'DISCOVERY_FETCH.json').open('x')as f:json.dump({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sources':rows,'scope':'discovery only; no eligibility or scoring inferred'},f,indent=2)
print(json.dumps(rows))
