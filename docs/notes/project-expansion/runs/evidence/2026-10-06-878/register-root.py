from pathlib import Path
import shutil,json,hashlib,re,subprocess,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-yyjson-formal-874');E=Path(__file__).parent;N=Path('docs/notes/document-import/yyjson/v0-13-0');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();read=lambda p:json.loads(p.read_text())
for f in ['LOCAL_HTTP.json','EXISTING_OUTPUT_COMPARISON.json','BASELINE_REUSE.json','BROWSER_FINAL.json']:assert read(E/f)['status']=='passed',f
assert read(E/'RECONSTRUCTION_CHECK.json')['status']=='passed-independent-source-reconstruction'
assert read(E/'QUALITY_REUSE.json')['status']=='passed-baseline-evidence-reuse'
assert read(E/'RENDERED_FINAL.json')['status']=='passed'
assert 'All matched files use Prettier code style!' in(E/'FORMAT_FINAL.log').read_text()
assert (R/'apps/yyjson').exists()
assert not(R/'scripts/importers/import-yyjson-0.13.0.py').exists()
allowed={'.prettierignore','pnpm-lock.yaml','sites/landing/src/config/projects.config.jsonc','docs/notes/project-expansion/runs/evidence/2026-10-06-878/register-root.py'}
before=read(E/'ROOT_INPUTS_BEFORE.json')['files']
assert not any(p.startswith('apps/yyjson/') for p in before)
assert (R/'pnpm-lock.yaml').read_bytes()==(E/'ROOT_LOCK_BEFORE.yaml').read_bytes()
for rel,h in before.items():
 if rel not in allowed:assert sha(R/rel)==h,('unrelated root modified before resume',rel)
for rel in (W/'apps/yyjson').rglob('*'):
 if rel.is_file() and not any(x in rel.parts for x in ['node_modules','dist','.astro','.DS_Store']):assert sha(rel)==sha(R/rel.relative_to(W))
shutil.copy2(W/'scripts/importers/import-yyjson-0.13.0.py',R/'scripts/importers/import-yyjson-0.13.0.py')
p=R/'pnpm-lock.yaml';s=p.read_text();assert '\n  apps/yyjson:' not in s;m=re.search(r'\n  apps/yyjson:[\s\S]*?(?=\n(?:  [^ ]|packages:))',(W/'pnpm-lock.yaml').read_text());assert m;i=s.index('\npackages:');p.write_text(s[:i].rstrip()+'\n'+m[0]+'\n'+s[i:])
p=R/'sites/landing/src/config/projects.config.jsonc';s=p.read_text();assert '"yyjson"' not in s;i=s.rfind('\n    }');assert i>=0;i+=6;p.write_text(s[:i]+',\n    "yyjson": {\n      "icon": "code",\n      "tags": ["c", "json", "reference"],\n      "isNew": true\n    }'+s[i:])
p=R/'.prettierignore';s=p.read_text();marker='# yyjson fixed';assert marker not in s;block=(W/'.prettierignore').read_text();p.write_text(s+'\n'+block[block.index(marker):])
for rel,h in before.items():
 if rel not in allowed:assert sha(R/rel)==h,('unrelated root modified',rel)
for rel in (W/'apps/yyjson').rglob('*'):
 if rel.is_file() and not any(x in rel.parts for x in ['node_modules','dist','.astro','.DS_Store']):assert sha(rel)==sha(R/rel.relative_to(W))
x={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'newApp':'apps/yyjson','otherExistingFilesPreserved':len(before)-len(allowed),'permittedPartialFiles':sorted(allowed),'importer':'scripts/importers/import-yyjson-0.13.0.py','isolatedPublicationWorkspace':str(W),'rootGitStagingCommitPush':'not performed','guard':'Resumed after own-new app copy and incorrect importer filename failure;original pre-registration other-file guard reused and only correcting this helper excluded. No pre-existing root app/importer;only new yyjson app and importer plus one lock importer/card/ignore block. All other tracked and nonignored untracked files SHA-preserved.'}
(E/'ROOT_SCOPED_REGISTRATION.json').write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n');print(json.dumps(x,ensure_ascii=False))
