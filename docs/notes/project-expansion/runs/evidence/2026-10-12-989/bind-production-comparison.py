from pathlib import Path
import json,hashlib,datetime
E=Path(__file__).parent
read=lambda n:json.loads((E/n).read_text())
ref=lambda n:{'path':str(E/n),'sha256':hashlib.sha256((E/n).read_bytes()).hexdigest()}
r=read('PREVIEW_PRODUCTION_REUSE.json');s=read('PRODUCTION_SCOPE.json');p=read('PREVIEW_EXISTING_OUTPUT_COMPARISON.json');o=read('PRODUCTION_OTHER_OUTPUT_COMPARISON.json');assert r['status']=='passed-identical-output-proof-reuse' and p['status']==o['status']=='passed'
assert p['baseline']==s['baseCommit']==o['baseCommit'];assert p['currentFiles']==s['newFiles'];assert p['byteUnchanged']==s['unchangedArtifactFiles'];assert {x['path'] if isinstance(x,dict) else x for x in p['changedLanding']+p['changedOwn']}==set(s['changedFiles']);assert {x['path'] if isinstance(x,dict) else x for x in p['added']}==set(s['addedFiles']) and {x['path'] if isinstance(x,dict) else x for x in p['removed']}==set(s['removedFiles'])
for path in r['differences']:
 row=next(x for x in o['rows'] if x['path']==path);assert row['ok'] and not row.get('reusedPreviewIdenticalSHA')
p.update(at=datetime.datetime.now(datetime.timezone.utc).isoformat(),reusedFrom=ref('PREVIEW_EXISTING_OUTPUT_COMPARISON.json'),productionOutputBinding=ref('PREVIEW_PRODUCTION_REUSE.json'),newOtherOutputChecks=ref('PRODUCTION_OTHER_OUTPUT_COMPARISON.json'),limits='All own202,landing HTML/CSS and all other paths except explicit2LZ4indexes match Preview SHA/bytes. Complete baseline comparisons reused; the two changed indexes separately verified by wholeDOM. Actual currentscope pathsets/counts match the previous proof.')
(E/'PRODUCTION_EXISTING_OUTPUT_COMPARISON.json').write_text(json.dumps(p,indent=2)+'\n')
print('Existing output proof reused with fresh2LZ4 wholeDOM checks')
