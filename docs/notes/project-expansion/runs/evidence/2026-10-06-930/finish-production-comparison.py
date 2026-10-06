from pathlib import Path
import json,hashlib,datetime
E=Path(__file__).parent
read=lambda n:json.loads((E/n).read_text())
ref=lambda n:{'path':n,'sha256':hashlib.sha256((E/n).read_bytes()).hexdigest()}
reuse=read('PREVIEW_PRODUCTION_REUSE.json');scope=read('PRODUCTION_SCOPE.json');p=read('PREVIEW_OUTPUT_COMPARISON.json');d=read('PRODUCTION_DELTA_OUTPUT_COMPARISON.json')
assert reuse['status']=='passed-identical-output-proof-reuse' and p['status']==d['status']=='passed'
previous={x['path'] for x in p['rows']};changed=set(scope['changedFiles']);differences=set(reuse['differences'])
sameChanged=changed-differences;deltaChanged=changed&differences
assert sameChanged<=previous and {x['path']for x in d['rows']}==deltaChanged
out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'baseCommit':scope['baseCommit'],'commit':scope['commit'],'unchangedSHAReused':scope['unchangedArtifactFiles'],'existingChangedOutputs':len(changed),'existingChangesReusingExactPreviewOutputs':len(sameChanged),'existingChangesSeparatelyCompared':len(deltaChanged),'addedFiles':len(scope['addedFiles']),'failures':[],'evidence':[ref('PREVIEW_PRODUCTION_REUSE.json'),ref('PREVIEW_OUTPUT_COMPARISON.json'),ref('PRODUCTION_DELTA_OUTPUT_COMPARISON.json')],'method':'Reuse prior strict parsed-output comparison for identical output hashes; separately compare every changed output differing from Preview. No unexplained content/layout exclusions.'}
(E/'PRODUCTION_OUTPUT_COMPARISON.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out))
