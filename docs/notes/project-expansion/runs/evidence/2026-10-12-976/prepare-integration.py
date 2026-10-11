from pathlib import Path
import json,hashlib,datetime,shutil
R=Path('/Users/dolphilia/github/libx'); E=Path(__file__).parent; W=Path('/private/tmp/libx-gnu-m4-formal-971'); B=Path('/private/tmp/libx-gnu-tar-production-artifact-968'); m=json.loads((B/'manifest.json').read_text()); assert m['commit']=='32cbf39324f24ac653c25902315b25b72f30bf9d'
h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
assert {str(p.relative_to(B/'dist')) for p in (B/'dist').rglob('*')if p.is_file()}=={x['path']for x in m['files']}
for x in m['files']: assert h(B/'dist'/x['path'])==x['sha256'] and (B/'dist'/x['path']).stat().st_size==x['bytes']
assert not (W/'dist').exists(); shutil.copytree(B/'dist',W/'dist')
(E/'INTEGRATION_BASELINE.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'passed-artifact-binding','baseCommit':m['commit'],'files':len(m['files']),'source':'Last successful Pages production workflow38137636572; all manifest files checked; live HTTP confirmation pending; production CAS required before release','remoteMain':'da9b57c2139b3d77043df004059f8330db5e6df1','remoteMainNotIntegrated':'43583 changed files include unrelated saved work; excluded from scoped publication'},indent=2)+'\n');print('Verified baseline',len(m['files']))
