from pathlib import Path
from urllib.parse import urlparse,unquote
import hashlib,json,urllib.request
E=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-04-658'); A=Path('/private/tmp/libx-mdbook-astro-trial-655/apps/mdbook-trial'); sha=lambda b:hashlib.sha256(b).hexdigest(); prep=json.loads((E/'LOCAL_MATH_PREPARED.json').read_text()); assets=json.loads((E/'NATIVE_ASSETS.json').read_text()); rows=[]
for r in prep['runtimeFiles']:
 b=(A/'dist'/r['path']).read_bytes(); assert sha(b)==r['sha256'],r['path']
urls=[x['url'] for x in assets['assets'] if '/mdbook-runtime/mathjax/' in x['url']]+['http://127.0.0.1:4658/docs/mdbook-trial/downloads/mathjax-2.7.1-d71cc406.tar.gz','http://127.0.0.1:4658/docs/mdbook-trial/mdbook-runtime/mathjax/LPPL-1.3c.txt','http://127.0.0.1:4658/docs/mdbook-trial/mdbook-runtime/mathjax/LIBX-NOTICES.txt']
for u in urls:
 rel=unquote(urlparse(u).path).removeprefix('/docs/mdbook-trial/'); expected=(A/'dist'/rel).read_bytes()
 with urllib.request.urlopen(u,timeout=30) as r:b=r.read(); status=r.status
 assert b==expected,u;rows.append({'url':u,'status':status,'bytes':len(b),'sha256':sha(b),'distBytesExact':True})
static=list((A/'dist').rglob('*')); files=[p for p in static if p.is_file()]; maxbytes=max(p.stat().st_size for p in files);assert maxbytes<=26214400
out={'status':'passed-current-native-resources-and-static-bytes','runtimeFilesExact':len(prep['runtimeFiles']),'observedMathResourceRequests':len(urls)-3,'observedExternalAssets':[x['url'] for x in assets['assets'] if x['url'].startswith('http') and not x['url'].startswith('http://127.0.0.1:4658')],'httpChecks':rows,'trialStaticFilesIncludingOriginalDiagnosticMirror':len(files),'maxAssetBytes':maxbytes,'integratedProductionFilesNotYetMeasured':True,'legacyPngFallbackValidated':False,'allBrowsersValidated':False,'sourceOfferClosure':'MathJax full original component only; mdBook preferred editable source still pending','conversionGatePassed':False}
(E/'RUNTIME_CHECK.json').write_text(json.dumps(out,indent=2)+'\n');print({k:v for k,v in out.items() if k not in ['httpChecks']})
