from pathlib import Path
import json,hashlib,shutil,subprocess,zipfile,datetime,stat
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-commonmark-formal-887');E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-890';N=W/'docs/notes/document-import/commonmark/v0-31-2';A=W/'apps/commonmark';S=A/'public/source/v0-31-2';B=Path('/private/tmp/libx-commonmark-source-package-890');Q=Path('/private/tmp/libx-commonmark-source-rebuild-890');assert not B.exists() and not Q.exists();sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
tracked=subprocess.check_output(['git','ls-files','-z'],cwd=W).decode().split('\0')
for rel in tracked:
 if not rel:continue
 p=W/rel
 if rel.startswith(('packages/','scripts/','config/','templates/')) or ('/' not in rel and p.is_file() and not rel.startswith('AGENTS')):
  q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
(B/'workspace/pnpm-workspace.yaml').write_text('packages:\n  - "apps/commonmark"\n  - "packages/*"\n')
for parent in [A,N]:
 for p in parent.rglob('*'):
  if not p.is_file() or p.is_symlink():continue
  rel=p.relative_to(W)
  if any(x in rel.parts for x in ['node_modules','dist','.astro']) or p==S/'source.zip':continue
  q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
for cycle in [888,889]:
 rel=Path(f'docs/notes/project-expansion/runs/evidence/2026-10-06-{cycle}')
 for name in ['MEANING_REVIEW.json','INTEGRATION_BINDINGS.json','BATCH_CHECK.json','JA_NATIVE.json','FIRST_BATCH_FALLBACK_DELTA.json']:
  p=R/rel/name
  if p.exists():q=B/'workspace'/rel/name;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
shutil.copy2(S/'SOURCE_README.md',B/'README.md');shutil.copy2(N/'SOURCE_MANIFEST.json',B/'SOURCE_MANIFEST.json')
c={'schemaVersion':1,'fixedOriginalCommit':'9103e341a973013013bb1a80e13567007c5cef6f','specSHA256':'257c41ad946f7a1414a499aca402a1aa8fdac3678532266611348c1cf54f4b80','buildContextBase':'226feca26d3b4661a56813d48bb2c757b4af0087','scope':'Complete chapters1–4;14English+14Japanese guides/227pairs/17additionalcode;fullfixedEnglish chapters5–6/appendix','preferredEditableInputs':'workspace/apps/commonmark/src/content/docs/v0-31-2/{en,ja}','terms':'Specification+independentJA CC BY-SA4.0, Copyright(C)2014-16JohnMacFarlane;Libx2026modification attribution/originalnotices/fulllicense preserved. Sharedbuild files retain own existing notices. Original upstream software/tools not executed.','sourceSelfExcluded':True,'files':[{'path':str(p.relative_to(B)),'sha256':sha(p)} for p in sorted(B.rglob('*')) if p.is_file()]};(B/'SOURCE_COMPONENTS.json').write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n')
with zipfile.ZipFile(S/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():i=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,6,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,p.read_bytes())
with zipfile.ZipFile(S/'source.zip') as z:
 assert len(z.namelist())==len(c['files'])+1 and not any(n.endswith('/source.zip') for n in z.namelist())
 for i in z.infolist():p=Path(i.filename);assert not p.is_absolute() and '..' not in p.parts and not stat.S_ISLNK(i.external_attr>>16)
 for row in c['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256']
 z.extractall(Q)
shutil.copy2(S/'source.zip',Q/'workspace/apps/commonmark/public/source/v0-31-2/source.zip')
result={'status':'passed-package-member-hashes','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'archiveSha256':sha(S/'source.zip'),'bytes':(S/'source.zip').stat().st_size,'members':len(c['files'])+1,'preferredDocuments':28,'originalFiles':9,'allMemberHashesVerified':True,'recursiveSelfZIP':False,'sourcePackage':str(B),'publicPath':'/docs/commonmark/source/v0-31-2/source.zip','reconstruction':'pending','safeExtraction':True,'reconstructionWorkspace':str(Q/'workspace')};(E/'SOURCE_OFFER.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result))
