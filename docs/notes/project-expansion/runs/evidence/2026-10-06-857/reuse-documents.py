from pathlib import Path
import json,hashlib,datetime,subprocess
E=Path(__file__).parent;old=json.loads((E/'PREVIEW_MANIFEST.json').read_text());new=json.loads((E/'PRODUCTION_MANIFEST.json').read_text());a={x['path']:x['sha256'] for x in old['files']};b={x['path']:x['sha256'] for x in new['files']};paths=sorted(p for p in b if p.startswith('docs/rapidjson/'));same=[p for p in paths if a.get(p)==b[p]]
if len(paths)==len(same)==506:
 p=E/'PREVIEW_DOCUMENTS.json';d=json.loads(p.read_text());assert d['status']=='passed' and d['renderedBodiesExact']==231 and d['versionDatesExact']==231
 d.update(at=datetime.datetime.now(datetime.timezone.utc).isoformat(),reusedPreviewEvidence={'path':str(p.relative_to(Path('/Users/dolphilia/github/libx'))),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()},sameArtifactInputs=506,scope='All506 RapidJSON deployed files byte/SHA identical to passing Preview.231 body/source/link/date checks reused without rerunning or claiming new full meaning review. Production full manifest hashes independently validated.')
 (E/'PRODUCTION_DOCUMENTS.json').write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n');print('Production reuses231 Preview body/date checks;506 deployment files SHA-identical')
else:
 print('RapidJSON artifact delta:',len(paths)-len(same),'files; affected checker rerun required')
 subprocess.run(['node',str(E/'check-artifact.mjs'),'production'],check=True)
