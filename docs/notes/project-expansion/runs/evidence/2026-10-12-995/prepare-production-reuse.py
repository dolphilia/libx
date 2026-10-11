"""Reuse Preview checks only for unchanged production output hashes."""
from pathlib import Path
import json,hashlib,datetime
E=Path(__file__).parent
read=lambda n:json.loads((E/n).read_text())
ref=lambda n:{'path':n,'sha256':hashlib.sha256((E/n).read_bytes()).hexdigest()}
p=read('PREVIEW_MANIFEST.json');q=read('PRODUCTION_MANIFEST.json')
assert p['commit']==q['commit']==json.loads((E.parent/'2026-10-12-994/COMMIT_RESULT.json').read_text())['commit']
a={x['path']:x for x in p['files']};b={x['path']:x for x in q['files']}
assert set(a)==set(b)
same=sorted(k for k in a if a[k]['sha256']==b[k]['sha256'] and a[k]['bytes']==b[k]['bytes'])
different=sorted(set(a)-set(same))
articlePaths=[k for k in b if k.startswith('docs/gnu-tar/v1-35/') and k.endswith('/index.html') and len(Path(k).parts)==7]
assert len(articlePaths)==90
sourcePaths=[k for k in b if k.startswith('docs/gnu-tar/source/')]
assert all(k in same for k in articlePaths+sourcePaths)
ownPaths=[k for k in b if k.startswith('docs/gnu-tar/')]
assert all(k in same for k in ownPaths)
at=datetime.datetime.now(datetime.timezone.utc).isoformat()
reuse={'status':'passed-identical-output-proof-reuse','at':at,'commit':p['commit'],'previewManifest':ref('PREVIEW_MANIFEST.json'),'productionManifest':ref('PRODUCTION_MANIFEST.json'),'sameOutputFiles':len(same),'ownOutputFilesIdentical':len(ownPaths),'differences':different,'all90ArticleOutputsIdentical':True,'allSourceOfferOutputsIdentical':True,'evidence':[ref('PREVIEW_ARTIFACT_VALIDATION.json'),ref('PREVIEW_RENDERED_LINKS.json'),ref('PREVIEW_OUTPUT_EQUIVALENCE.json'),ref('PREVIEW_BODY_VERIFICATION.json'),ref('PREVIEW_CLIENT_EQUIVALENCE.json')],'limits':'Only unchanged output hashes reuse corresponding Preview checks. Different outputs require scoped comparison; production HTTP/native/CAS checks are new.'}
(E/'PREVIEW_PRODUCTION_REUSE.json').write_text(json.dumps(reuse,indent=2)+'\n')
for old,new in [('PREVIEW_RENDERED_LINKS.json','PRODUCTION_RENDERED_LINKS.json'),('PREVIEW_BODY_VERIFICATION.json','PRODUCTION_BODY_VERIFICATION.json'),('PREVIEW_OUTPUT_EQUIVALENCE.json','PRODUCTION_OUTPUT_EQUIVALENCE.json'),('PREVIEW_CLIENT_EQUIVALENCE.json','PRODUCTION_CLIENT_EQUIVALENCE.json')]:
 d=read(old);assert d['status']=='passed';d.update(at=at,reusedFrom=ref(old),productionOutputBinding=ref('PREVIEW_PRODUCTION_REUSE.json'),limits='Same exact article/source outputs and fixed source inputs; reuse Preview document check. Production HTTP/native/CAS verification recorded separately.')
 (E/new).write_text(json.dumps(d,indent=2)+'\n')
print(json.dumps({'same':len(same),'different':len(different),'articles':90,'sourceOutputs':len(sourcePaths),'reusedDocumentChecks':True}))

if not different:
 for old,new in [('PREVIEW_OTHER_OUTPUT_COMPARISON.json','PRODUCTION_OTHER_OUTPUT_COMPARISON.json'),('PREVIEW_EXISTING_OUTPUT_COMPARISON.json','PRODUCTION_EXISTING_OUTPUT_COMPARISON.json')]:
  d=read(old);assert d['status']=='passed';d.update(at=at,reusedFrom=ref(old),productionOutputBinding=ref('PREVIEW_PRODUCTION_REUSE.json'),limits='All6627outputs and unchanged baseline match byte/hash/size exactly; reuse complete Preview baseline comparisons. Production HTTP/native/CAS separately checked.')
  (E/new).write_text(json.dumps(d,indent=2)+'\n')
