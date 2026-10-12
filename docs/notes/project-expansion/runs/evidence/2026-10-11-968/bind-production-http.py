"""Bind already fetched HTTP bytes to the actual Production manifest without refetching."""
from pathlib import Path
import json,hashlib,datetime
E=Path(__file__).parent
read=lambda n:json.loads((E/n).read_text())
h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
m=read('PRODUCTION_MANIFEST.json');scope=read('PRODUCTION_SCOPE.json');files={x['path']:x for x in m['files']}
for role in ['PRODUCTION','DOMAIN']:
 raw=read(role+'_HTTP.json');assert raw['commit']==m['commit'];assert raw['expectedManifestSHA256']==h(E/(raw['expectedArtifactRole'].upper()+'_MANIFEST.json'))
 records={r['path']:r for r in raw['records']};assert set(scope['publicHTTPPaths'])<=set(records),sorted(set(scope['publicHTTPPaths'])-set(records))
 bound=[]
 for path,r in records.items():
  f=files[path];q={**r,'priorExpectedSHA256':r.get('expectedSHA256'),'expectedSHA256':f['sha256'],'expectedBytes':f['bytes']}
  q['exact']=r['status']==200 and r.get('sha256')==f['sha256'] and r.get('bytes')==f['bytes'] and r.get('url','').startswith(raw['base']+'/')
  bound.append(q)
 out={**raw,'boundAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'productionManifestSHA256':h(E/'PRODUCTION_MANIFEST.json'),'productionScopeSHA256':h(E/'PRODUCTION_SCOPE.json'),'rawRequestEvidence':role+'_HTTP.json','requiredProductionPathsCovered':True,'requiredProductionPaths':len(scope['publicHTTPPaths']),'records':bound,'verifiedFiles':sum(r['exact'] for r in bound),'failures':[r for r in bound if not r['exact']],'scope':'Same actual fetched bytes newly bound to actual Production manifest. All required current Production paths covered; prior Preview expectations retained. No request repeated and no content normalization.'}
 (E/(role+'_HTTP_BOUND.json')).write_text(json.dumps(out,indent=2)+'\n');print(role,out['verifiedFiles'],out['totalFiles'],'unresolved',len(out['failures']))
for role in ['PRODUCTION','DOMAIN']:
 q=read(role+'_404.json');assert q['sha256']==files[q['expectedPath']]['sha256'] and q['bytes']==files[q['expectedPath']]['bytes']
