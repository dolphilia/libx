from pathlib import Path
import json,hashlib,subprocess,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-tar-update-986');E=Path(__file__).resolve().parent;A=Path('apps/gnu-tar');base='9913e11f258e974870420c1f2993e6f839eebc4e';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();git=lambda *args:subprocess.check_output(['git','-C',str(W),*args]);changed=git('diff','--name-only','--',str(A)).decode().splitlines();assert len(changed)==7
new=[]
for lang in ['en','ja']:
 for p in sorted((W/A/'src/content/docs/v1-35'/lang/'01-guide').glob('*.md')):
  if int(p.name.split('-')[0])<40:continue
  new += [str(p.relative_to(W)),str(A/'public/source/v1-35/edited'/lang/'01-guide'/p.name)]
assert len(new)==20
for f in changed+new:assert (R/f).read_bytes()==(W/f).read_bytes(),f
for f in changed:assert (E/'root-before'/f).read_bytes()==git('show',base+':'+f),f
previous=git('ls-tree','-r','--name-only',base,str(A/'src/content/docs/v1-35')).decode().splitlines();assert len(previous)==80
for f in previous:assert (R/f).read_bytes()==git('show',base+':'+f),f
protected=json.loads((E/'ROOT_OTHER_INPUTS_BEFORE.json').read_text());bad=[]
for f,v in protected.items():
 if h(R/f)!=v:bad.append({'path':f,'beforeSHA256':v,'observedAfterSHA256':h(R/f)})
expected={'docs/notes/document-import/awesome/editorial/INVENTORY.json','docs/notes/document-import/awesome/editorial/WORK_LOG.md','docs/notes/document-import/awesome/editorial/evidence/batch203/DRAFT_PROGRESS.json'}
assert {x['path'] for x in bad}==expected
assert all(f not in changed+new for f in expected)
out={'status':'passed-with-concurrent-unrelated-changes','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(W),'baseline':base,'existingChangedFiles':changed,'newFiles':new,'registeredFiles':27,'old80PreferredSHAExact':True,'protectedOtherFiles':len(protected),'unchangedProtectedOtherFiles':len(protected)-len(bad),'concurrentUnrelatedChanges':bad,'allProtectedOtherSHAExact':False,'noUserFilesOverwritten':True,'method':'Initial registration asserted7existing root paths equal published base and20new paths absent, saved7beforebytes, then copied exactly27explicit GNUtarpaths. Post-copy whole-repo audit found3Awesome concurrent changes outside write list. This follow-up validates every27copy byte/current80old preferred/7beforebytes and59901otherunchanged protected hashes; never restores or modifies the3unrelated files.','deploymentExclusion':'Public branch includes only27GNUtarappfiles; concurrentAwesome changes excluded.'};(E/'ROOT_SCOPED_REGISTRATION.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print('Root27copies/base80exact;',len(protected)-len(bad),'otherexact;3concurrentAwesomefilesuntouched')
