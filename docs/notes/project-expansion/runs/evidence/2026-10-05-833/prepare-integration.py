import pathlib,json,hashlib,tarfile,shutil,os,re
r=pathlib.Path('/Users/dolphilia/github/libx');ev=r/'docs/notes/project-expansion/runs/evidence/2026-10-05-833';w=pathlib.Path('/private/tmp/libx-lz4-integration-833');assert not w.exists();w.mkdir()
archive=r/'docs/notes/project-expansion/runs/evidence/2026-10-05-832/LIBX_LZ4_SOURCEKIT_DRAFT.tar.gz';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
assert h(archive)==json.loads((archive.parent/'ARCHIVE_RESULT.json').read_text())['archiveSHA']
with tarfile.open(archive,'r:gz') as t:
    for m in t.getmembers():assert m.isfile() and not pathlib.PurePosixPath(m.name).is_absolute() and '..' not in pathlib.PurePosixPath(m.name).parts
    t.extractall(w,filter='data')
stage=w/'libx-lz4-sourcekit';comparison=json.loads((ev/'SHARED_COMPARISON.json').read_text());copied=[]
for row in comparison['files']:
    p=row['path']
    if p.endswith('.tsbuildinfo'):continue
    source=r/p;assert h(source)==row['sharedSHA'],p
    target=stage/p;target.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(source,target);copied.append(row)
# Keep the current user's root attributes exactly, then append only the LZ4 block.
attrs=stage/'.gitattributes';attrs.write_text(attrs.read_text()+(r/'docs/notes/project-expansion/runs/evidence/2026-10-05-829/LZ4_ATTRIBUTES_APPEND.txt').read_text())
# Only the already tested search fix is overlaid; shared source remains untouched.
before=r/'docs/notes/project-expansion/runs/evidence/2026-10-05-830/BUILD_SEARCH_BEFORE.js';after=r/'docs/notes/project-expansion/runs/evidence/2026-10-05-830/BUILD_SEARCH_AFTER.js'
assert h(r/'scripts/build-search-index.js')==h(before),'Shared search changed; do not replace user edits'
shutil.copy2(after,stage/'scripts/build-search-index.js')
# Preserve all current root lock entries and add only the new app's importer.
lock=stage/'pnpm-lock.yaml';text=lock.read_text();old=pathlib.Path('/private/tmp/libx-lz4-formal-786/pnpm-lock.yaml').read_text();match=re.search(r'(?ms)^  apps/lz4:\n.*?(?=^  \S|^packages:)',old);assert match
if not re.search(r'^  apps/lz4:',text,re.M):
    marker='\npackages:\n';assert marker in text;text=text.replace(marker,'\n'+match[0].rstrip()+'\n'+marker,1);lock.write_text(text)
else:assert re.search(r'(?ms)^  apps/lz4:\n.*?(?=^  \S|^packages:)',text)[0].strip()==match[0].strip()
for p in ['docs/notes/project-expansion/OPERATIONS.json','docs/notes/project-expansion/POLICY.json']:shutil.copy2(r/p,stage/p)
report={'status':'prepared-local-only','workspace':str(stage),'archiveSHA':h(archive),'sharedSnapshotFiles':copied,'sharedSnapshotUnchangedAfterCopy':all(h(r/x['path'])==x['sharedSHA'] for x in copied),'appliedLocalOverlays':['829 exact10-path attributes block','830 tested numeric-entity search patch','only LZ4 importer added to current pnpm lock','current operation/policy snapshot'],'rootAppAbsent':not(r/'apps/lz4').exists(),'deployment':'not run','latestUIChanges':['LanguageSelector nowrap added','Dropdown utils prior keyboard-navigation helper absent in current shared version; preserved current source, do not silently restore old code','DocumentProvenance/schema formatting changed; verify generated footer text/DOM'],'pending':['fresh frozen install/build/content','latest UI/layout and local integrated assets','shared code redistribution conditions unknown; draft remains internal']}
(ev/'INTEGRATION_PREPARATION.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');print('Prepared latest-shared local integration',stage,'copied',len(copied),'files; root app absent')
