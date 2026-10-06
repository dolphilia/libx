from pathlib import Path
import json,datetime,sys
D=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-06-848');role=sys.argv[1];old=json.loads(Path('/private/tmp/libx-zstd-production-artifact-841/manifest.json').read_text());new=json.loads(Path('/private/tmp/libx-mdbook-'+role+'-artifact-849/manifest.json').read_text());a={p['path']:p for p in old['files']};b={p['path']:p for p in new['files']};removed=sorted(a.keys()-b.keys());added=sorted(b.keys()-a.keys());changed=sorted(p for p in a.keys()&b.keys()if a[p]['sha256']!=b[p]['sha256']);same=sorted(p for p in a.keys()&b.keys()if a[p]['sha256']==b[p]['sha256']);representatives={}
for p in same:
 parts=Path(p).parts
 if not p.startswith('docs/')or not p.endswith('/index.html')or len(parts)<7:continue
 for language in ['en','ja']:
  if language not in parts:continue
  idx=parts.index(language);key='/'.join(parts[:idx-1])+':'+language;representatives.setdefault(key,p)
paths=sorted(set(added+changed+list(representatives.values())));assert not removed,removed
assert all(p.startswith('docs/mdbook/') for p in added),added
out={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'baseCommit':old['commit'],'commit':new['commit'],'oldFiles':len(a),'newFiles':len(b),'removedFiles':removed,'addedFiles':added,'changedFiles':changed,'unchangedArtifactFiles':len(same),'unchangedRepresentativeFiles':sorted(representatives.values()),'reusedUnchangedWithoutNewHTTP':len(same)-len(representatives),'publicHTTPPaths':paths,'count':len(paths),'scope':'All new and changed paths plus an unchanged English/Japanese article for each existing project. Other identical hashes reuse the prior complete artifact/publication proof; no new HTTP success is claimed for them.'};(D/'PUBLIC_VERIFICATION_SCOPE.json').write_text(json.dumps(out,indent=2)+'\n');print({k:len(v)if isinstance(v,list)else v for k,v in out.items()if k not in ['at','scope','publicHTTPPaths']})
