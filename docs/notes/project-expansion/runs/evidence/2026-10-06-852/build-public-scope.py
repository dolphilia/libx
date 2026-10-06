from pathlib import Path
import json,sys,datetime
D=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-06-852');role=sys.argv[1];old=json.loads(Path('/private/tmp/libx-mdbook-production-artifact-849/manifest.json').read_text());new=json.loads(Path('/private/tmp/libx-mdbook-'+role+'-artifact-852/manifest.json').read_text());a={p['path']:p for p in old['files']};b={p['path']:p for p in new['files']};removed=sorted(a.keys()-b.keys());added=sorted(b.keys()-a.keys());changed=sorted(p for p in a.keys()&b.keys()if a[p]['sha256']!=b[p]['sha256']);same=sorted(p for p in a.keys()&b.keys()if a[p]['sha256']==b[p]['sha256']);assert removed==['docs/mdbook/assets/style.BfCRcSN2.css'],removed;assert len(added)==1 and added[0].startswith('docs/mdbook/assets/style.')and added[0].endswith('.css'),added
for p in b:
 if not p.endswith('.html'):continue
 text=(Path('/private/tmp/libx-mdbook-'+role+'-artifact-852/dist')/p).read_text();assert '/'+removed[0] not in text,p
representatives={}
for p in same:
 parts=Path(p).parts
 if not p.startswith('docs/')or not p.endswith('/index.html')or len(parts)<7:continue
 for language in ['en','ja']:
  if language not in parts:continue
  idx=parts.index(language);key='/'.join(parts[:idx-1])+':'+language;representatives.setdefault(key,p)
paths=sorted(set(added+changed+list(representatives.values())));out={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'baseCommit':old['commit'],'commit':new['commit'],'oldFiles':len(a),'newFiles':len(b),'removedFiles':removed,'addedFiles':added,'changedFiles':changed,'unchangedArtifactFiles':len(same),'unchangedRepresentativeFiles':sorted(representatives.values()),'reusedUnchangedWithoutNewHTTP':len(same)-len(representatives),'publicHTTPPaths':paths,'count':len(paths),'scope':'Only prior mdBook hashed stylesheet removed and one replacement added; all current HTML checked free of old stylesheet URL. All changed/new paths plus unchanged EN/JA representative articles fetched. Other exact SHA files reuse verified849 HTTP/artifact evidence; no new HTTP claim.'};(D/'PUBLIC_VERIFICATION_SCOPE.json').write_text(json.dumps(out,indent=2)+'\n');(D/(role.upper()+'_SCOPE.json')).write_text(json.dumps(out,indent=2)+'\n');print({'role':role,'new':len(added),'removed':len(removed),'changed':len(changed),'same':len(same),'HTTP':len(paths)})
