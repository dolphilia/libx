from pathlib import Path
import json,urllib.request,hashlib,datetime
E=Path(__file__).resolve().parent;B=Path('/private/tmp/libx-gnu-tar-production-artifact-995/dist');origin='https://d7408f8b.libx.pages.dev';rows=[]
for rel in ['ja/index.html','docs/gnu-tar/source/v1-35/SOURCE_README.md','assets/style.Clhu7_U7.css']:
 url=origin+'/'+(rel.removesuffix('index.html')if rel.endswith('index.html')else rel)
 with urllib.request.urlopen(url,timeout=30)as r:
  data=r.read();assert r.status==200 and data==(B/rel).read_bytes(),rel;rows.append({'path':rel,'url':url,'status':r.status,'sha256':hashlib.sha256(data).hexdigest(),'exact':True})
(E/'BASELINE_LIVE.json').write_text(json.dumps({'status':'passed-deployment-specific-representative-bytes','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'baseline':'d9339d5a67c732681efc007d50fa05847c448795','rows':rows,'limits':'Currentdeployment-specificrepresentatives;full6627savedmanifest separatelybound;productionCAS required at dispatch.'},indent=2)+'\n');print('3currentproductiondeploymentrepresentativesexact')
