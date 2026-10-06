import json, urllib.request, urllib.error, concurrent.futures, datetime, pathlib
root=pathlib.Path('/Users/dolphilia/github/libx');p=root/'docs/notes/project-expansion/runs/evidence/2026-10-03-340/RENDERED_MACHINE_CHECK.json';urls=json.loads(p.read_text())['pending'][2]['urls']
def check(url):
 start=datetime.datetime.now(datetime.timezone.utc).isoformat()
 try:
  req=urllib.request.Request(url,headers={'User-Agent':'libx-document-link-check/1.0','Range':'bytes=0-4095'})
  with urllib.request.urlopen(req,timeout=20) as r:
   data=r.read(4096);return {'url':url,'checkedAt':start,'status':r.status,'finalURL':r.url,'contentType':r.headers.get('Content-Type'),'sampleBytes':len(data),'scope':'reachability only; destination content/fragment not validated'}
 except urllib.error.HTTPError as e:return {'url':url,'checkedAt':start,'status':e.code,'finalURL':e.url,'error':str(e),'scope':'HTTP failure; not a definitive content absence judgment'}
 except Exception as e:return {'url':url,'checkedAt':start,'status':None,'error':str(e),'scope':'not verified'}
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:rows=list(pool.map(check,urls))
out={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':'all21 unique external document/provenance URLs from340 rendered machine check; bounded GET sample','results':rows,'fragmentValidation':'pending','non2xx':[r['url'] for r in rows if not r['status'] or not 200<=r['status']<300]}
(root/'docs/notes/project-expansion/runs/evidence/2026-10-03-343/EXTERNAL_URL_CHECK.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print(json.dumps(out,ensure_ascii=False))
