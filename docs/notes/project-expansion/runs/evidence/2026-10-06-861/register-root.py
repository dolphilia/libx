from pathlib import Path
import shutil,json,hashlib,re,subprocess,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-sds-formal-859');E=Path(__file__).parent;N=Path('docs/notes/document-import/sds/v2-0-0');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();read=lambda p:json.loads(p.read_text());write=lambda p,x:p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
for name in ['SOURCE_OFFER.json','RECONSTRUCTION_CHECK.json','LOCAL_HTTP.json','BROWSER_FINAL.json','EXISTING_OUTPUT_COMPARISON.json','LOCK_FINAL.json']:assert read(E/name)['status']=='passed'
assert not(E/'ROOT_SCOPED_REGISTRATION.json').exists()
allowed={'.prettierignore','pnpm-lock.yaml','sites/landing/src/config/projects.config.jsonc','scripts/sync-docs-layouts.js'}
tracked=subprocess.check_output(['git','ls-files','-z'],cwd=R).decode().split('\0');before={p:sha(R/p)for p in tracked if p and(R/p).is_file()};before_notes={str(p.relative_to(R)):sha(p)for p in(R/N).rglob('*')if p.is_file()}
saved=read(E/'ROOT_INPUTS_BEFORE.json');before=saved['tracked'];before_notes=saved['notes']
for f in(W/'apps/sds').rglob('*'):
 if f.is_file() and not any(x in f.parts for x in ['node_modules','dist','.astro']):assert sha(f)==sha(R/f.relative_to(W))
importer=Path('scripts/importers/import-sds-2.0.0.py');assert sha(R/importer)==sha(W/importer)
p=R/'pnpm-lock.yaml';s=p.read_text();assert '\n  apps/sds:' not in s;raw=(W/'pnpm-lock.yaml').read_text();m=re.search(r'\n  apps/sds:[\s\S]*?(?=\n(?:  [^ ]|packages:))',raw);assert m;i=s.index('\npackages:');p.write_text(s[:i].rstrip()+'\n'+m[0]+'\n'+s[i:])
p=R/'sites/landing/src/config/projects.config.jsonc';s=p.read_text();assert '"sds"' not in s;i=s.rfind('\n    }');assert i>=0;i+=6;addition=',\n    "sds": {\n      "icon": "code",\n      "tags": ["c", "strings"],\n      "isNew": true\n    }';p.write_text(s[:i]+addition+s[i:])
p=R/'.prettierignore';s=p.read_text();marker='# SDS fixed';assert marker not in s;block=(W/'.prettierignore').read_text();i=block.index(marker);p.write_text(s+'\n'+block[i:])
# Preserve root's pre-existing formatting and other local changes, replacing only the inspected adapter function.
p=R/'scripts/sync-docs-layouts.js';s=p.read_text();a=s.index('function canonicalLayout(');b=s.index('\nfunction filesFor(',a);ws=(W/'scripts/sync-docs-layouts.js').read_text();wa=ws.index('function canonicalLayout(');wb=ws.index('\nfunction filesFor(',wa);p.write_text(s[:a]+ws[wa:wb]+s[b:])
for rel,h in before.items():
 if rel not in allowed and not rel.startswith(str(N)+'/'):assert sha(R/rel)==h,('unrelated root file modified',rel)
shutil.copytree(W/N,R/N,dirs_exist_ok=True)
for name in ['CONTENT_MAP.json','REFERENCE_MAP.json','REVIEW_MANIFEST.json']:
 for row in read(R/N/name).get('pages',[]):
  for key in ['source','canonical','translation']:
   if isinstance(row.get(key),dict):assert sha(R/row[key]['path'])==row[key]['sha256']
write(E/'ROOT_SCOPED_REGISTRATION.json',{'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'newApp':'apps/sds','otherTrackedFilesPreserved':len(before)-len(allowed),'permittedPartialFiles':sorted(allowed),'notesUpdated':str(N),'importer':str(importer),'isolatedPublicationWorkspace':str(W),'rootGitStagingCommitPush':'not performed','scopedSyncAdapter':'Only canonicalLayout function; other pre-existing root bytes preserved','rootAppExcludedUntilVerifiedLedger':'copy only after formal gates; ledger verification immediately follows'})
rows=[]
for rel in subprocess.check_output(['git','ls-tree','-r','--name-only','HEAD'],cwd=W).decode().splitlines():
 if rel in allowed:continue
 assert subprocess.check_output(['git','show','HEAD:'+rel],cwd=W)==(W/rel).read_bytes(),rel;rows.append({'path':rel,'sha256':sha(W/rel)})
write(E/'BASELINE_REUSE.json',{'status':'passed','baselineCommit':'45d598a887d89a6d41405b30fbdbaa1514d13161','unchangedBaselineFiles':len(rows),'dependencyDelta':'Only SDS importer; all existing packages/snapshots deep equal; frozen install passed','sharedImplementationDelta':'sync-docs-layouts adds hash-frozen SDS route; shared layouts and every other app unchanged; layout runtime test and integrity passed','previousContentGates':'857 published quality CI; same source/inputs/tests preserved; existing output strictly compared','files':rows})
print('Root registered SDS only; other files preserved:',len(rows))
