import json,pathlib,urllib.request,hashlib,datetime
D=pathlib.Path(__file__).parent
urls={'LZ4_TAG.json':'https://api.github.com/repos/lz4/lz4/git/ref/tags/v1.10.0','COMMONMARK_JA.html':'https://gemmaro.github.io/commonmark-spec/spec.ja.html'}
rows=[]
for name,url in urls.items():
 with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'Libx-doc-research'}),timeout=30)as r:raw=r.read();status=r.status
 with(D/name).open('xb')as f:f.write(raw)
 rows.append({'url':url,'status':status,'path':str(D/name),'sha256':hashlib.sha256(raw).hexdigest(),'bytes':len(raw)})
tag=json.loads((D/'LZ4_TAG.json').read_text());obj=tag['object'];assert obj['type']=='commit',obj
commit=obj['sha']
url='https://codeload.github.com/lz4/lz4/tar.gz/'+commit
with urllib.request.urlopen(url,timeout=30)as r:raw=r.read()
with(D/'LZ4_FIXED.tar.gz').open('xb')as f:f.write(raw)
rows.append({'url':url,'commit':commit,'path':str(D/'LZ4_FIXED.tar.gz'),'sha256':hashlib.sha256(raw).hexdigest(),'bytes':len(raw)})
with(D/'DETAIL_FETCH.json').open('x')as f:json.dump({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sources':rows,'conditions':'not evaluated'},f,indent=2)
print(json.dumps(rows))
