from pathlib import Path
import json,hashlib,zipfile,stat,shutil,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-sed-formal-898');E=Path(__file__).parent;n=Path('docs/notes/document-import/gnu-sed/v4-10');B=Path('/private/tmp/libx-gnu-sed-source-package-900');Q=Path('/private/tmp/libx-gnu-sed-source-rebuild-901');h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();old=json.loads((B/'SOURCE_COMPONENTS.json').read_text());previous=h(W/'apps/gnu-sed/public/source/v4-10/source.zip');assert previous=='e2b0ac49f22f2be002ce06f77f020667f9775897861369653e2b63fe58c4fddc';assert not Q.exists();p=W/n/'SOURCE_OFFER_README.md';s=p.read_text();changed=[]
for target in ['manual.html','manual.html#GNU-Free-Documentation-License','original/sed-4.10.tar.gz','original/doc/sed.texi','original/doc/sed.info','original/doc/fdl.texi','source.zip']:
 a='('+target+')';assert s.count(a)==1;s=s.replace(a,'(https://libx.dev/docs/gnu-sed/source/v4-10/'+target+')');changed.append(target)
for p in [W/n/'SOURCE_OFFER_README.md',W/'apps/gnu-sed/public/source/v4-10/SOURCE_README.md',R/n/'SOURCE_OFFER_README.md',R/'apps/gnu-sed/public/source/v4-10/SOURCE_README.md',B/'README.md',B/'workspace'/n/'SOURCE_OFFER_README.md',B/'workspace/apps/gnu-sed/public/source/v4-10/SOURCE_README.md']:p.write_text(s)
current={str(p.relative_to(B)):p for p in B.rglob('*')if p.is_file()and p.name!='SOURCE_COMPONENTS.json'};assert set(current)=={x['path']for x in old['files']};delta=[]
for row in old['files']:
 p=current[row['path']]
 if row['sha256']!=h(p):delta.append({'path':row['path'],'oldSHA256':row['sha256'],'newSHA256':h(p)});row['sha256']=h(p);row['bytes']=p.stat().st_size
assert {x['path']for x in delta}=={'README.md','workspace/'+str(n/'SOURCE_OFFER_README.md'),'workspace/apps/gnu-sed/public/source/v4-10/SOURCE_README.md'};old['sourceOfferRepair']='SevenREADMElinks are public absolute URLs,valid from repository notes,publicsourcefolder andkitroot. Documentation body,translation,review andallbuildinputs unchanged.';(B/'SOURCE_COMPONENTS.json').write_text(json.dumps(old,ensure_ascii=False,indent=2)+'\n');zpath=W/'apps/gnu-sed/public/source/v4-10/source.zip'
with zipfile.ZipFile(zpath,'w',zipfile.ZIP_DEFLATED,compresslevel=9)as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():i=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,6,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,p.read_bytes())
with zipfile.ZipFile(zpath)as z:
 assert len(z.namelist())==597
 for row in old['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256']
 for i in z.infolist():p=Path(i.filename);assert not p.is_absolute()and'..'not in p.parts and not stat.S_ISLNK(i.external_attr>>16)
 z.extractall(Q)
shutil.copy2(zpath,R/'apps/gnu-sed/public/source/v4-10/source.zip');shutil.copy2(zpath,Q/'workspace/apps/gnu-sed/public/source/v4-10/source.zip')
for d in [W/'apps/gnu-sed/dist/source/v4-10',W/'dist/docs/gnu-sed/source/v4-10']:
 for f in ['source.zip','SOURCE_README.md']:shutil.copy2(W/'apps/gnu-sed/public/source/v4-10'/f,d/f)
result={'status':'passed-source-package-member-hashes','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'archiveSHA256':h(zpath),'previousArchiveSHA256':previous,'bytes':zpath.stat().st_size,'members':597,'preferredDocuments':25,'originalInputs':14,'wholeMeaningReviews':12,'changedZIPInputs':delta,'changedPublicFiles':['SOURCE_README.md','source.zip'],'changedPreferredDocuments':0,'changedTranslations':0,'changedConversionBuildInputs':0,'safeExtraction':True,'reconstructionWorkspace':str(Q/'workspace'),'reconstruction':'pending','repair':'7relative READMElinks→public absolute URLs;repositorynote/publicREADME/kitREADME only.'};(E/'SOURCE_OFFER_REPAIR.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print(json.dumps(result,ensure_ascii=False))
