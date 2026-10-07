from pathlib import Path
import json,sys,datetime
E=Path(__file__).parent;role=sys.argv[1];old=json.loads(Path('/private/tmp/libx-gnu-diffutils-production-artifact-948/manifest.json').read_text());new=json.loads(Path('/private/tmp/libx-gnu-sed-'+role+'-artifact-950/manifest.json').read_text());a={x['path']:x for x in old['files']};b={x['path']:x for x in new['files']};removed=sorted(a.keys()-b.keys());added=sorted(b.keys()-a.keys());changed=sorted(p for p in a.keys()&b.keys() if a[p]['sha256']!=b[p]['sha256']);same=sorted(p for p in a.keys()&b.keys() if a[p]['sha256']==b[p]['sha256'])
assert all(p.startswith('assets/style.') or p.startswith('docs/gnu-sed/assets/style.') for p in removed),removed;assert all(p.startswith('docs/gnu-sed/') or p.startswith('assets/style.') for p in added),added[:5]
reps={}
for p in same:
 parts=Path(p).parts
 if not p.startswith('docs/') or not p.endswith('/index.html') or len(parts)<7:continue
 for lang in ['en','ja']:
  if lang in parts:idx=parts.index(lang);reps.setdefault('/'.join(parts[:idx-1])+':'+lang,p)
paths=sorted(set(added+changed+list(reps.values())));out={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'baseCommit':old['commit'],'commit':new['commit'],'oldFiles':len(a),'newFiles':len(b),'removedFiles':removed,'addedFiles':added,'changedFiles':changed,'unchangedArtifactFiles':len(same),'unchangedRepresentativeFiles':sorted(reps.values()),'reusedUnchangedWithoutNewHTTP':len(same)-len(reps),'publicHTTPPaths':paths,'count':len(paths),'scope':'All GNU sed added and changed files plus every changed existing output and unchanged EN/JA representative articles fetched. Same SHA outputs reuse published Diffutils948 artifact/HTTP proofs; no new HTTP claim for reused files.'}
(E/(role.upper()+'_SCOPE.json')).write_text(json.dumps(out,indent=2)+'\n');(E/'PUBLIC_VERIFICATION_SCOPE.json').write_text(json.dumps(out,indent=2)+'\n');print({'role':role,'added':len(added),'changed':len(changed),'same':len(same),'HTTP':len(paths)})
