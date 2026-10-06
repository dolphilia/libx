from pathlib import Path
import hashlib,json,re,shutil,subprocess,tarfile
R=Path('/Users/dolphilia/github/libx');E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-853';N=R/'docs/notes/document-import/rapidjson/v1-1-0';W=Path('/private/tmp/libx-rapidjson-formal-853');A=W/'apps/rapidjson';T=Path('/private/tmp/libx-rapidjson-static-850/apps/rapidjson-static-trial')
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def write(p,x):
 p.parent.mkdir(parents=True,exist_ok=True);p.write_text(x if isinstance(x,str) else json.dumps(x,ensure_ascii=False,indent=2)+'\n')
assert not N.exists()
# Preserve the existing lockfile byte order and insert only the new importer.
lock=W/'pnpm-lock.yaml';current=lock.read_text();base=subprocess.check_output(['git','show','HEAD:pnpm-lock.yaml'],cwd=W,text=True)
block=re.search(r'^  apps/rapidjson:\n[\s\S]*?(?=^  \S|^packages:)',current,re.M)[0]
assert '  apps/rapidjson:\n' not in base
write(lock,base.replace('\npackages:\n','\n'+block+'\npackages:\n',1))
guides=[('125-index','01-index','readme.md','RapidJSON'),('132-md_doc_2features','02-features','doc/features.md','Features'),('139-md_doc_2tutorial','03-tutorial','doc/tutorial.md','Tutorial'),('129-md_doc_2dom','04-dom','doc/dom.md','DOM'),('136-md_doc_2sax','05-sax','doc/sax.md','SAX'),('138-md_doc_2stream','06-stream','doc/stream.md','Stream'),('130-md_doc_2encoding','07-encoding','doc/encoding.md','Encoding'),('135-md_doc_2pointer','08-pointer','doc/pointer.md','Pointer'),('137-md_doc_2schema','09-schema','doc/schema.md','Schema'),('134-md_doc_2performance','10-performance','doc/performance.md','Performance'),('133-md_doc_2internals','11-internals','doc/internals.md','Internals'),('131-md_doc_2faq','12-faq','doc/faq.md','FAQ'),('218-npm-guide','13-npm','doc/npm.md','NPM guide (fixed source supplement)')]
source=T/'src/content/docs/v1-1-0/en/01-docs';files=sorted(source.glob('*.md'));assert len(files)==218
routeMap={p.stem:'02-reference/'+p.stem for p in files}
for old,new,raw,title in guides:routeMap[old]='01-guide/'+new
for p in files:shutil.copyfile(p, (lambda q:(q.parent.mkdir(parents=True,exist_ok=True),q)[1])(N/'regeneration/inputs'/p.name))
for sub in ['assets','notices','upstream']:shutil.copytree(T/'public'/sub,N/'regeneration/public'/sub);shutil.copytree(T/'public'/sub,A/'public'/sub)
shutil.copyfile(T/'src/styles/global.css',A/'src/styles/global.css')
archive=next((N/'regeneration/public/upstream').glob('*.tar.gz'));assert sha(archive)=='4a76453d36770c9628d7d175a2e9baccbfbd2169ced44f0cb72e86c5f5f2f7cd'
with tarfile.open(archive) as tf:
 for old,new,raw,title in guides:
  members=[m for m in tf.getmembers() if m.name.endswith('/'+raw)];assert len(members)==1
  p=N/'source/original'/ (raw+'.txt');p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(tf.extractfile(members[0]).read())
write(N/'regeneration/ROUTES.json',{'guides':[{'input':old+'.md','id':routeMap[old]+'.md','sourcePath':raw,'title':title,'order':i+1}for i,(old,new,raw,title) in enumerate(guides)],'routes':routeMap,'inputs':[{'name':p.name,'sha256':sha(p)}for p in files]})
shutil.rmtree(A/'src/content/docs');(A/'src/content/docs').mkdir(parents=True)
config=json.loads((T/'src/config/project.config.jsonc').read_text());config['paths']['projectSlug']='rapidjson';config['language']['supported']=['en','ja'];config['versioning']['versions'][0]['name']='1.1.0'
config['licensing']['sources'][0]['licenseUrl']='/docs/rapidjson/notices/LICENSE.txt'
for lang,title,description,categories in [('en','RapidJSON Documentation','RapidJSON 1.1.0 user guide and original API references',{'guide':'User guide','reference':'API and source (English originals)'}),('ja','RapidJSON ドキュメント','RapidJSON 1.1.0利用ガイド13件の非公式日本語訳。API・ソース参照は英語原文。',{'guide':'利用ガイド','reference':'API・ソース（英語原文）'})]:config['translations'][lang]={'displayName':title,'displayDescription':description,'categories':categories}
write(A/'src/config/project.config.jsonc',config)
write(E/'PREPARATION_INPUTS.json',{'status':'prepared-not-reviewed','workspace':str(W),'baselineCommit':subprocess.check_output(['git','rev-parse','HEAD'],cwd=W,text=True).strip(),'intermediates':218,'guideSourceUnits':13,'untranslatedReferences':205,'publicMaterials':23,'lockImporterOnly':True,'inputHashes':[{'path':str(p.relative_to(R)),'sha256':sha(p)}for p in sorted(N.rglob('*')) if p.is_file()]})
print('218 fixed intermediates +13 original guide source units; lock importer only; canonical replay next')
