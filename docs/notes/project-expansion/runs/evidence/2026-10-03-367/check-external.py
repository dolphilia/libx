import urllib.request,urllib.error,json,pathlib,concurrent.futures,datetime,hashlib,re
out=pathlib.Path('/private/tmp/libx-zlib-external-367');out.mkdir(exist_ok=True)
urls=json.loads(pathlib.Path('/private/tmp/libx-zlib-japanese-whole-365.json').read_text())['externalUrls']+['https://zlib.net/zlib_license.html']
def get(pair):
 i,url=pair
 if url.endswith('.tar.gz'):return {'url':url,'scope':'locked archive hash verified separately; no duplicate download'}
 try:
  with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'libx-document-link-check/1.0'}),timeout=25) as r:
   b=r.read(2097153);truncated=len(b)>2097152;b=b[:2097152];p=out/f'{i:02d}.html';p.write_bytes(b)
   t=b.decode('utf-8',errors='replace');title=re.search(r'<title[^>]*>(.*?)</title>',t,re.I|re.S)
   return {'url':url,'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':r.status,'finalURL':r.url,'contentType':r.headers.get('Content-Type'),'bytes':len(b),'truncated':truncated,'file':p.name,'sha256':hashlib.sha256(b).hexdigest(),'title':re.sub(r'\s+',' ',title[1]).strip() if title else None,'fragment':{'name':'faq11','idOrNamePresent':bool(re.search(r'(?:id|name)\s*=\s*["\']faq11["\']',t,re.I))} if '#faq11' in url else None}
 except Exception as e:return {'url':url,'error':str(e),'status':None}
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:rows=list(pool.map(get,enumerate(urls)))
(out/'RESULTS.json').write_text(json.dumps({'scope':'bounded 2MiB external HTML downloads, title/fragment signals; no destination whole meaning review inferred','results':rows},ensure_ascii=False,indent=2)+'\n')
print(json.dumps(rows,ensure_ascii=False))
