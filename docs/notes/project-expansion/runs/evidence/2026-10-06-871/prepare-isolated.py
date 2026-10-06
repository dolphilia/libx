from pathlib import Path
import shutil,re,json,hashlib,subprocess,datetime
R=Path('/Users/dolphilia/github/libx');A=Path('/private/tmp/libx-wren-formal-864');W=Path('/private/tmp/libx-wren-formal-871');E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-871';N=Path('docs/notes/document-import/wren/v0-4-0')
assert subprocess.check_output(['git','rev-parse','HEAD'],cwd=W,text=True).strip()=='375ed5dee2d0d7abdc0ba14adef465d567c31832'
assert not subprocess.check_output(['git','status','--porcelain'],cwd=W,text=True).strip()
shutil.copytree(A/'apps/wren',W/'apps/wren',ignore=shutil.ignore_patterns('node_modules','dist','.astro','.DS_Store'))
shutil.copytree(R/N,W/N)
for c in range(863,871):
 p=Path(f'docs/notes/project-expansion/runs/evidence/2026-10-06-{c}')
 shutil.copytree(R/p,W/p)
for p in ['scripts/importers/import-wren-0.4.0.py']:
 shutil.copy2(A/p,W/p)
p=W/'pnpm-lock.yaml';s=p.read_text();wren=re.search(r'^  apps/wren:\n.*?(?=^\S|^  [^ ])',(A/'pnpm-lock.yaml').read_text(),re.M|re.S).group();assert 'apps/wren:' not in s;s=s.replace('\npackages:\n','\n'+wren+'packages:\n');p.write_text(s)
p=W/'sites/landing/src/config/projects.config.jsonc';s=p.read_text();assert '"wren"' not in s;pos=s.rfind('\n    }');s=s[:pos]+s[pos:].replace('\n    }','\n    },\n    "wren": {\n      "icon": "code",\n      "tags": ["language", "embedded", "c"],\n      "isNew": true\n    }',1);p.write_text(s)
p=W/'.prettierignore';s=p.read_text();s+='\n# Wren fixed originals, reviewed canonical inputs and source packet retain their bytes.\ndocs/notes/document-import/wren/**\napps/wren/src/content/docs/**\napps/wren/src/data/document-headings.json\napps/wren/public/source/**\napps/wren/public/notices/**\n';p.write_text(s)
for relative in ['pnpm-lock.yaml']:
 pass
out={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'passed-isolated-copy','workspace':str(W),'baseCommit':'375ed5dee2d0d7abdc0ba14adef465d567c31832','oldWorkspace':str(A),'ownedScope':['apps/wren',str(N),'docs/notes/project-expansion/runs/evidence/2026-10-06-863..870','scripts/importers/import-wren-0.4.0.py','.prettierignore:Wren exemptions','pnpm-lock.yaml:Wren importer only','sites/landing/src/config/projects.config.jsonc:Wren card only'],'rootAppRegistered':False,'sourcekit':'Existing870 standalone sourcekit baseline45 shared build packages unchanged at375;SDS-only sync route metadata is outside Wren standalone renderer. No independent full source review repeated.'}
(E/'START.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(out,ensure_ascii=False))
