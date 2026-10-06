"""Reuse Preview checks only for unchanged production output hashes."""
from pathlib import Path
import json,hashlib,datetime
E=Path(__file__).parent
read=lambda n:json.loads((E/n).read_text())
ref=lambda n:{'path':n,'sha256':hashlib.sha256((E/n).read_bytes()).hexdigest()}
p=read('PREVIEW_MANIFEST.json');q=read('PRODUCTION_MANIFEST.json')
assert p['commit']==q['commit']==read('COMMIT_RESULT.json')['commit']
a={x['path']:x for x in p['files']};b={x['path']:x for x in q['files']}
assert set(a)==set(b)
same=sorted(k for k in a if a[k]['sha256']==b[k]['sha256'] and a[k]['bytes']==b[k]['bytes'])
different=sorted(set(a)-set(same))
articlePaths=[k for k in b if k.startswith('docs/gnu-time/v1-10/') and k.endswith('/index.html') and len(Path(k).parts)==7]
assert len(articlePaths)==7
sourcePaths=[k for k in b if k.startswith('docs/gnu-time/source/')]
assert all(k in same for k in articlePaths+sourcePaths)
at=datetime.datetime.now(datetime.timezone.utc).isoformat()
reuse={'status':'passed-identical-output-proof-reuse','at':at,'commit':p['commit'],'sameOutputFiles':len(same),'differences':different,'all7ArticleOutputsIdentical':True,'allSourceOfferOutputsIdentical':True,'evidence':[ref('PREVIEW_ARTIFACT_VALIDATION.json'),ref('PREVIEW_DOCUMENTS.json'),ref('PREVIEW_ENGLISH_LICENSE_REFERENCE.json'),ref('PREVIEW_OUTPUT_COMPARISON.json')],'limits':'Only unchanged output hashes reuse corresponding Preview checks. Different outputs require scoped comparison; production HTTP/native/CAS checks are new.'}
(E/'PREVIEW_PRODUCTION_REUSE.json').write_text(json.dumps(reuse,indent=2)+'\n')
for old,new in [('PREVIEW_DOCUMENTS.json','PRODUCTION_DOCUMENTS.json'),('PREVIEW_ENGLISH_LICENSE_REFERENCE.json','PRODUCTION_ENGLISH_LICENSE_REFERENCE.json')]:
 d=read(old);assert d['status']=='passed';d.update(at=at,reusedFrom=ref(old),productionOutputBinding=ref('PREVIEW_PRODUCTION_REUSE.json'),limits='Same exact article/source outputs and fixed source inputs; reuse Preview document check. Production HTTP/native/CAS verification recorded separately.')
 (E/new).write_text(json.dumps(d,indent=2)+'\n')
print(json.dumps({'same':len(same),'different':len(different),'articles':7,'sourceOutputs':len(sourcePaths),'reusedDocumentChecks':True}))
