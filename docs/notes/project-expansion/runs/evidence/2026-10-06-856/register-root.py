from pathlib import Path
import shutil,json,hashlib,re,subprocess,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-rapidjson-formal-853');E=Path(__file__).parent;sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();read=lambda p:json.loads(p.read_text());write=lambda p,x:p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
for name in ['SOURCE_OFFER.json','RECONSTRUCTION_CHECK.json','LOCAL_HTTP.json','BROWSER_FINAL.json','EXISTING_OUTPUT_COMPARISON.json','INLINE_CHECK.json']:assert read(E/name)['status']=='passed'
assert not(R/'apps/rapidjson').exists();assert not(E/'ROOT_SCOPED_REGISTRATION.json').exists()
allowed={'.gitattributes','.prettierignore','pnpm-lock.yaml','sites/landing/src/config/projects.config.jsonc'}
tracked=subprocess.check_output(['git','ls-files','-z'],cwd=R).decode().split('\0');before={p:sha(R/p)for p in tracked if p and(R/p).is_file()}
shutil.copytree(W/'apps/rapidjson',R/'apps/rapidjson',ignore=shutil.ignore_patterns('node_modules','dist','.astro'))
importer=Path('scripts/importers/import-rapidjson-1.1.0.py');assert not(R/importer).exists();shutil.copy2(W/importer,R/importer)
# Append just the new lock importer without serializing other user changes.
p=R/'pnpm-lock.yaml';s=p.read_text();assert '\n  apps/rapidjson:' not in s;raw=(W/'pnpm-lock.yaml').read_text();m=re.search(r'\n  apps/rapidjson:[\s\S]*?(?=\n(?:  [^ ]|packages:))',raw);assert m;block=m[0];i=s.index('\npackages:');s=s[:i].rstrip()+'\n'+block+'\n'+s[i:];p.write_text(s)
# Preserve exact other landing bytes.
p=R/'sites/landing/src/config/projects.config.jsonc';s=p.read_text();assert '"rapidjson"' not in s;i=s.rfind('\n    }');assert i>=0;i+=6;addition=',\n    "rapidjson": {\n      "icon": "braces",\n      "tags": ["json", "cpp"],\n      "isNew": true\n    }';p.write_text(s[:i]+addition+s[i:])
for name,marker in [('.gitattributes','# RapidJSON fixed original'),('.prettierignore','# RapidJSON fixed and reviewed')]:
 p=R/name;s=p.read_text();assert marker not in s;block=(W/name).read_text().split(marker,1)[1];p.write_text(s+'\n'+marker+block)
for rel,h in before.items():
 if rel not in allowed:assert sha(R/rel)==h,('unrelated root tracked file modified',rel)
for name in ['CONTENT_MAP.json','REFERENCE_MAP.json','REVIEW_MANIFEST.json']:
 doc=read(R/'docs/notes/document-import/rapidjson/v1-1-0'/name)
 for row in doc.get('pages',[]):
  for key in ['source','canonical','translation']:
   if isinstance(row.get(key),dict):assert sha(R/row[key]['path'])==row[key]['sha256']
write(E/'ROOT_SCOPED_REGISTRATION.json',{'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'newApp':'apps/rapidjson','otherTrackedFilesPreserved':len(before)-len(allowed),'permittedPartialFiles':sorted(allowed),'importer':str(importer),'isolatedPublicationWorkspace':str(W),'rootGitStagingCommitPush':'not performed','rootAppExcludedUntilVerifiedLedger':'copied only after formal gates passed; ledger verification immediately follows'})
# Preserve input equality for baseline gates; only scoped registry/ignore entries differ.
rows=[]
for rel in subprocess.check_output(['git','ls-files','-z'],cwd=W).decode().split('\0'):
 if not rel:continue
 if rel.startswith(('apps/rapidjson/','docs/notes/document-import/rapidjson/','docs/notes/project-expansion/runs/evidence/2026-10-05-671/','docs/notes/project-expansion/runs/evidence/2026-10-06-850/','docs/notes/project-expansion/runs/evidence/2026-10-06-853/','docs/notes/project-expansion/runs/evidence/2026-10-06-854/','docs/notes/project-expansion/runs/evidence/2026-10-06-855/')) or rel in allowed or rel==str(importer):continue
 assert subprocess.check_output(['git','show','HEAD:'+rel],cwd=W)==(W/rel).read_bytes(),rel;rows.append({'path':rel,'sha256':sha(W/rel)})
write(E/'BASELINE_REUSE.json',{'status':'passed','baselineCommit':'5a3372c9b0fcb3734f8ddf3fac6368e5dc6617cc','unchangedTrackedFiles':len(rows),'newAppOnlyContentChange':True,'dependencyDelta':'33 lines new apps/rapidjson importer; no existing resolved dependency changed','sharedTests':'unchanged shared implementation/test inputs from published852 CI; no implementation-mirroring tests added','files':rows})
print('Root registered scoped RapidJSON app;',len(before)-len(allowed),'other root tracked files preserved;',len(rows),'publication baseline files exact')
