from pathlib import Path
import json,hashlib
E=Path('docs/notes/project-expansion/runs/evidence/2026-10-04-660');W=Path('/private/tmp/libx-mdbook-source-rebuild-660-v2/workspace');C=Path('/private/tmp/libx-jq-footer-integration-20261004');pairs=[(W,C),(W/'apps/mdbook-trial',C/'apps/jq')]+[(p,C/'packages'/p.name) for p in (W/'packages').iterdir() if p.is_dir()];records=[]
for target,baseline in pairs:
 src=baseline/'node_modules'
 if not src.is_dir():continue
 dest=target/'node_modules';dest.mkdir()
 for p in src.iterdir():
  if p.name=='@docs':continue
  (dest/p.name).symlink_to(p.resolve());records.append({'at':str((dest/p.name).relative_to(W)),'target':str(p.resolve()),'kind':'fixed-dependency-runtime'})
 (dest/'@docs').mkdir()
 for p in (W/'packages').iterdir():
  pkg=p/'package.json'
  if not pkg.exists():continue
  name=json.loads(pkg.read_text())['name']
  if not name.startswith('@docs/'):continue
  q=dest/name;q.symlink_to(p);records.append({'at':str(q.relative_to(W)),'target':str(p),'kind':'reconstructed-source-workspace-package'})
# All @docs mappings must point into reconstructed source, not the old clean checkout.
assert all(Path(r['target']).is_relative_to(W/'packages') for r in records if r['kind']=='reconstructed-source-workspace-package')
(E/'DEPENDENCY_CONTEXT.json').write_text(json.dumps({'method':'frozen-lock specs checked separately; existing fixed dependencies reused without install, workspace @docs remapped to reconstructed source package directories','dependenciesBundledInSourceZip':False,'rootUserNodeModulesChanged':False,'records':records},indent=2)+'\n');print('再展開source @docs mappings',sum(r['kind']=='reconstructed-source-workspace-package' for r in records))
