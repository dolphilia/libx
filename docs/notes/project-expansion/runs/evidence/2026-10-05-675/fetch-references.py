import urllib.request,pathlib,json,hashlib,datetime
p=pathlib.Path(__file__).resolve().parent
urls=[('official-wiki','https://github.com/Tencent/rapidjson/wiki'),('official-gitbook','https://www.gitbook.com/book/miloyip/rapidjson/'),('pystyle-article','https://pystyle.info/cpp-rapidjson-basic-usage/'),('cocos-article','https://ie-kau.hatenablog.com/entry/2015/10/02/%E3%80%90Cocos2d-x%E3%80%91RapidJSON%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9%E3%83%A1%E3%83%A2')]
rows=[]
for name,url in urls:
 r={'name':name,'url':url,'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat()}
 try:
  with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'Libx documentation research; read-only'}),timeout=35) as response:
   data=response.read(4*1024*1024+1);assert len(data)<=4*1024*1024;f=name+'.response';(p/f).write_bytes(data);r.update(status=response.status,finalUrl=response.url,contentType=response.headers.get('Content-Type'),bytes=len(data),sha256=hashlib.sha256(data).hexdigest(),saved=f)
 except Exception as e:r['error']=str(e)
 rows.append(r)
(p/'REFERENCE_FETCH.json').write_text(json.dumps({'items':rows,'scope':'read-only public references; no login/acceptance or reused translation content'},indent=2)+'\n');print([(r['name'],r.get('status'),r.get('error')) for r in rows])
