from pathlib import Path
import json,hashlib,datetime,shutil
E=Path(__file__).resolve().parent;W=Path('/private/tmp/libx-gnu-tar-update-986');B=Path('/private/tmp/libx-gnu-patch-production-artifact-982');m=json.loads((B/'manifest.json').read_text());current=json.loads((E/'BASELINE_INSPECTION.json').read_text());assert m['commit']==current['latestSuccessfulProduction']['sha']=='bbef8318a4cfc811bec31b5452f5b24b4dad2e2b';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
assert {str(p.relative_to(B/'dist'))for p in(B/'dist').rglob('*')if p.is_file()}=={x['path']for x in m['files']}
for x in m['files']:assert sha(B/'dist'/x['path'])==x['sha256']and(B/'dist'/x['path']).stat().st_size==x['bytes']
assert not(W/'dist').exists();shutil.copytree(B/'dist',W/'dist');assert 'apps/gnu-tar/src/content/docs/**' in (W/'.prettierignore').read_text()
(E/'INTEGRATION_BASELINE.json').write_text(json.dumps({'status':'passed-artifact-binding','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'baseCommit':m['commit'],'files':len(m['files']),'latestProductionRun':current['latestSuccessfulProduction']['id'],'remoteMainNotIntegrated':current['remoteMain'],'limits':'Full manifest byte binding; current live representative confirmation and productionCAS still required.'},indent=2)+'\n');print('Baseline manifest verified:',len(m['files']))
