from pathlib import Path
import json,hashlib,zipfile,datetime
E=Path(__file__).parent;W=Path('/private/tmp/libx-rapidjson-formal-853');Q=Path('/private/tmp/libx-rapidjson-source-rebuild-856-repaired');S=W/'apps/rapidjson/public/source/v1-1-0/source.zip';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
with zipfile.ZipFile(S)as z:
 components=json.loads(z.read('SOURCE_COMPONENTS.json'));assert len(z.namelist())==len(components['files'])+1
 for row in components['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256'];assert sha(Q/row['path'])==row['sha256'],row['path']
 assert not any(x.endswith('/source.zip')for x in z.namelist())
for p in (W/'apps/rapidjson/src/content/docs').rglob('*.md'):
 q=Q/'workspace'/p.relative_to(W);assert sha(p)==sha(q)
assert '236 page(s) built' in(E/'RECONSTRUCTION_BUILD_PACKAGED.log').read_text();assert '10860 internal links; 231 rendered bodies' in(E/'RECONSTRUCTION_CONTENT_PACKAGED.log').read_text()
out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'archiveSha256':sha(S),'allSourceMembersHashChecked':len(components['files']),'sourceOfferMembers':len(z.namelist()),'documentsReplayed':231,'renderedBodiesMatched':231,'internalReferences':10860,'completeFixedArchive':True,'recursiveSelfZIP':False,'dependencyInstall':'offline frozen pnpm10.10.0 install; pinned store; node_modules not copied','buildContext':'published5a3372c9 shared build code plus RapidJSON app only;templates README included for canonical prebuild directory discovery','failedAttempt':'RECONSTRUCTION_BUILD.log: missing templates directory; package fixed and rebuilt; no pass claimed for failed log','limitations':['Saved fixed Doxygen intermediates and reviewed JA inputs are replayed; original Doxygen/website runtime or retranslation not executed.','Guide13 meaning review retained;205 references English only, original technical audit not performed.']};(E/'RECONSTRUCTION_CHECK.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print(out['status'],out['sourceOfferMembers'],'members;',out['documentsReplayed'],'documents')
