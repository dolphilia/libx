from pathlib import Path
import shutil,json,hashlib
r=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-libuv-integration-20261005');formal=Path('/private/tmp/libx-libuv-formal-689');old=Path('/private/tmp/libx-jq-footer-integration-20261004');packet=Path('docs/notes/document-import/libuv/1.53.0');evidence=r/'docs/notes/project-expansion/runs/evidence/2026-10-05-777'
assert not (w/'apps/libuv').exists()
shutil.copytree(formal/'apps/libuv',w/'apps/libuv',ignore=shutil.ignore_patterns('node_modules','dist','.astro','__pycache__'))
shutil.copytree(r/packet,w/packet,ignore=shutil.ignore_patterns('__pycache__'))
manifest=json.loads((r/packet/'reviews/revisions/771/REVIEW_MANIFEST.json').read_text());refs=set()
def walk(x):
 if isinstance(x,dict):
  if isinstance(x.get('path'),str) and (r/x['path']).is_file():refs.add(x['path'])
  for v in x.values():walk(v)
 elif isinstance(x,list):
  for v in x:walk(v)
walk(manifest)
for f in sorted(refs):
 dest=w/f
 if not dest.exists():dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(r/f,dest)
fixed=Path('docs/notes/project-expansion/runs/evidence/2026-10-05-687');shutil.copytree(r/fixed,w/fixed)
f=Path('scripts/importers/build-libuv-search-index.mjs');shutil.copyfile(r/f,w/f)
for p in old.rglob('node_modules'):
 if '.pnpm' in p.parts:continue
 dest=w/p.relative_to(old)
 if dest.parent.exists() and not dest.exists():dest.symlink_to(p,target_is_directory=True)
(w/'apps/libuv/node_modules').symlink_to(formal/'apps/libuv/node_modules',target_is_directory=True)
sha=lambda f:hashlib.sha256(f.read_bytes()).hexdigest()
records=[]
for p in (w/'apps/libuv').rglob('*'):
 if p.is_file() and 'node_modules' not in p.parts:records.append({'path':str(p.relative_to(w)),'sha256':sha(p)})
report={'status':'copied, integration gates pending','baseline':'6e0dbef265ff6ebadf58a7437564a7d07ffeb296','baselineBranch':'codex/integrate-jq-footer-production-20261004','reviewReferencesCopied':len(refs),'appFiles':records,'rootUnrelatedChangesCopied':False,'publicationPerformed':False}
(evidence/'INTEGRATION_COPY.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print('Dedicated integration copied; current manifest references and frozen generator packet retained; all gates pending')
