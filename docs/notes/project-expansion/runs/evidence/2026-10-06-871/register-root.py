from pathlib import Path
import shutil,json,hashlib,re,subprocess,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-wren-formal-871');E=Path(__file__).parent;N=Path('docs/notes/document-import/wren/v0-4-0');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();read=lambda p:json.loads(p.read_text())
for f in ['LOCAL_HTTP.json','EXISTING_OUTPUT_COMPARISON.json','BASELINE_REUSE.json','BROWSER_FINAL.json']:assert read(E/f)['status']=='passed',f
assert read(E/'RECONSTRUCTION_CHECK.json')['status']=='passed-independent-source-reconstruction'
for f,needle in [('SMOKE_FINAL.log','pass 13'),('FORMAT_FINAL.log','All matched files use Prettier code style!'),('RENDERED_FINAL.log','66 rendered bodies;66 exact pagination')]:assert needle in(E/f).read_text()
assert not(R/'apps/wren').exists();assert not(R/'scripts/importers/import-wren-0.4.0.py').exists()
allowed={'.prettierignore','pnpm-lock.yaml','sites/landing/src/config/projects.config.jsonc'}
tracked=subprocess.check_output(['git','ls-files','-z'],cwd=R,text=True).split('\0');other=subprocess.check_output(['git','ls-files','--others','--exclude-standard','-z'],cwd=R,text=True).split('\0');before={p:sha(R/p)for p in set(tracked+other)if p and(R/p).is_file()}
(E/'ROOT_INPUTS_BEFORE.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'files':before},ensure_ascii=False,indent=2)+'\n')
(E/'ROOT_LOCK_BEFORE.yaml').write_bytes((R/'pnpm-lock.yaml').read_bytes())
shutil.copytree(W/'apps/wren',R/'apps/wren',ignore=shutil.ignore_patterns('node_modules','dist','.astro','.DS_Store'));shutil.copy2(W/'scripts/importers/import-wren-0.4.0.py',R/'scripts/importers/import-wren-0.4.0.py')
p=R/'pnpm-lock.yaml';s=p.read_text();assert '\n  apps/wren:' not in s;m=re.search(r'\n  apps/wren:[\s\S]*?(?=\n(?:  [^ ]|packages:))',(W/'pnpm-lock.yaml').read_text());assert m;i=s.index('\npackages:');p.write_text(s[:i].rstrip()+'\n'+m[0]+'\n'+s[i:])
p=R/'sites/landing/src/config/projects.config.jsonc';s=p.read_text();assert '"wren"' not in s;i=s.rfind('\n    }');assert i>=0;i+=6;p.write_text(s[:i]+',\n    "wren": {\n      "icon": "code",\n      "tags": ["language", "embedded", "c"],\n      "isNew": true\n    }'+s[i:])
p=R/'.prettierignore';s=p.read_text();marker='# Wren fixed';assert marker not in s;block=(W/'.prettierignore').read_text();p.write_text(s+'\n'+block[block.index(marker):])
for rel,h in before.items():
 if rel not in allowed:assert sha(R/rel)==h,('unrelated root modified',rel)
for rel in (W/'apps/wren').rglob('*'):
 if rel.is_file() and not any(x in rel.parts for x in ['node_modules','dist','.astro','.DS_Store']):assert sha(rel)==sha(R/rel.relative_to(W))
x={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'newApp':'apps/wren','otherExistingFilesPreserved':len(before)-len(allowed),'permittedPartialFiles':sorted(allowed),'importer':'scripts/importers/import-wren-0.4.0.py','isolatedPublicationWorkspace':str(W),'rootGitStagingCommitPush':'not performed','guard':'No pre-existing root app/importer;only new Wren app and importer plus one lock importer/card/ignore block. All other tracked and nonignored untracked files SHA-preserved.'}
(E/'ROOT_SCOPED_REGISTRATION.json').write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n');print(json.dumps(x,ensure_ascii=False))
