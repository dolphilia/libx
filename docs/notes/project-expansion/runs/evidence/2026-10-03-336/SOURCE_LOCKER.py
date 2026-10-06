import pathlib,json,hashlib,shutil,re
R=pathlib.Path('/Users/dolphilia/github/libx'); W=pathlib.Path('/private/tmp/libx-zlib-import-20261003'); A=W/'apps/zlib'; E=R/'docs/notes/project-expansion/runs/evidence/2026-10-03-336'; P=R/'docs/notes/project-expansion/runs/evidence'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
src=P/'2026-10-03-327/source/zlib-1.3.2'; upstream=A/'upstream/v1.3.2';upstream.mkdir(parents=True,exist_ok=False)
files=['zlib.h','zconf.h','README','FAQ','zlib.3','LICENSE']; records=[]
for n in files:
 shutil.copyfile(src/n,upstream/n);assert sha(src/n)==sha(upstream/n);records.append({'path':'upstream/v1.3.2/'+n,'sha256':sha(upstream/n),'bytes':(upstream/n).stat().st_size})
shutil.copyfile(P/'2026-10-03-327/zlib-1.3.2.tar.gz',upstream/'zlib-1.3.2.tar.gz')
fetched=json.loads((P/'2026-10-03-327/FETCH.json').read_text());assert sha(upstream/'zlib-1.3.2.tar.gz')==fetched['expectedOfficialSHA256']
meta=A/'meta';meta.mkdir(exist_ok=False)
for source,target in [('2026-10-03-327/ZLIB_SOURCE_BOUNDARY.json','source-boundary.json'),('2026-10-03-327/ZLIB_RIGHTS_DECISION.json','rights-decision.json'),('2026-10-03-328/ZLIB_SOURCE_CONTENT_ASSESSMENT.json','source-content-assessment.json')]:shutil.copyfile(P/source,meta/target)
manifest={'schemaVersion':1,'project':'zlib','version':'1.3.2','releaseDate':'2026-02-17','sourceLanguage':'en','officialArchive':{'url':'https://zlib.net/zlib-1.3.2.tar.gz','sha256':sha(upstream/'zlib-1.3.2.tar.gz'),'path':'upstream/v1.3.2/zlib-1.3.2.tar.gz','retrievedAt':fetched['checkedAt']},'files':records,'scope':'Whole zlib.h public interface original plus zconf.h, README, FAQ44, zlib.3 and LICENSE. Original comments/code/macros/types/notices retained; undocumented declarations labelled, not newly documented.','excluded':'examples/zlib_how.html CC BY-ND4.0 guide is outside translated manual scope. Software-license fallback does not override explicit third-party terms.','status':'source-locked; canonical generation and translation pending','fixedSourceNeverSilentlyUpdated':True}
(meta/'source-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
operation=json.loads((R/'docs/notes/project-expansion/OPERATIONS.json').read_text())['operations'];o=next(o for o in operation if o['appId']=='zlib')
blocks=json.loads((P/'2026-10-03-328/v3/zlib.h.blocks.json').read_text()); cuts=[0,8,24,40,96,110,164,184,192,194]; mapping=[]
for page,a,b in zip(o['scope']['pages'][:9],cuts,cuts[1:]):
 subset=blocks[a:b];assert subset and [x['index'] for x in subset]==list(range(a,b));mapping.append({'page':page,'source':'upstream/v1.3.2/zlib.h','byteStart':subset[0]['start'],'byteEnd':subset[-1]['end'],'lineStart':subset[0]['lineStart'],'lineEnd':subset[-1]['lineEnd'],'sourceBlocks':list(range(a,b)),'status':'planned-not-generated'})
assert mapping[0]['byteStart']==0 and mapping[-1]['byteEnd']==(upstream/'zlib.h').stat().st_size
for a,b in zip(mapping,mapping[1:]):assert a['byteEnd']==b['byteStart']
for page,n in zip(o['scope']['pages'][9:],['zconf.h','README','FAQ','zlib.3','LICENSE']):mapping.append({'page':page,'source':'upstream/v1.3.2/'+n,'byteStart':0,'byteEnd':(upstream/n).stat().st_size,'status':'planned-not-generated'})
(meta/'page-plan.json').write_text(json.dumps({'pages':mapping,'generation':'pending','translation':'pending','contentReview':'pending'},ensure_ascii=False,indent=2)+'\n')
# Remove only generated template fixtures inside the new, owned app.
shutil.rmtree(A/'src/content/docs');(A/'src/content/docs').mkdir()
for p in [A/'public/search/v1',A/'public/sidebar']:
 if p.exists():shutil.rmtree(p)
confpath=A/'src/config/project.config.jsonc';text=confpath.read_text();text=re.sub(r'^\s*//.*$', '',text,flags=re.M);c=json.loads(text)
c['translations']['en'].update(displayName='zlib Documentation',displayDescription='Unofficial presentation and Japanese translation of the fixed zlib 1.3.2 API manual',categories={'api':'API reference','appendix':'Appendices'})
c['translations']['ja'].update(displayName='zlib ドキュメント',displayDescription='固定版 zlib 1.3.2 APIマニュアルの非公式日本語訳',categories={'api':'APIリファレンス','appendix':'付録'})
c['versioning']['versions']=[{'id':'v1-3-2','name':'zlib 1.3.2','date':'2026-02-17T00:00:00.000Z','isLatest':True}]
c['licensing']={'defaultSource':'zlib-api','showAttribution':True,'sourceLanguage':'en','sources':[{'id':'zlib-'+n,'name':'zlib 1.3.2 '+filename,'author':'Jean-loup Gailly and Mark Adler'+('; manual page: R. P. C. Rodgers' if n=='manual' else ''),'license':'zlib License'+(' (software license applied with annotation)' if n=='faq' else ''),'licenseUrl':'https://zlib.net/zlib_license.html','sourceUrl':'https://zlib.net/zlib-1.3.2.tar.gz'} for n,filename in [('api','zlib.h'),('zconf','zconf.h'),('readme','README'),('faq','FAQ'),('manual','zlib.3'),('license','LICENSE')]]}
confpath.write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n')
(A/'README.md').write_text('''# zlib documentation workspace

This app was created from the canonical `templates/docs-site` by the project creator. It is an isolated, unpublished work in progress. No canonical or translated pages are complete yet.

The source is the official zlib 1.3.2 archive, released 2026-02-17. See `meta/source-manifest.json` for its original retrieval date, URL and SHA-256. The entire original archive and the six adopted root files are retained under `upstream/v1.3.2/`. Never silently switch versions. `meta/source-boundary.json` records the classification of all 254 original files.

The planned fourteen pages preserve the entire API header (introduction and eight upstream sections), plus zconf.h, README, all 44 FAQ entries, the complete man page and LICENSE. `meta/page-plan.json` records the exact source byte boundaries; generation remains pending. Declaration tails explicitly marked undocumented stay that way. Internal implementation references are preserved; no missing explanations are invented.

Original notices and disclaimers must remain intact. Generated pages must identify the official version, archive URL/SHA, original file, unofficial translation and formatting changes. The FAQ has no separately identified documentation license; the authorized operating decision applies the software zlib License with an explicit annotation and a full original-license link. This is not a claim of separately verified documentation permission. The distinct `examples/zlib_how.html` guide has CC BY-ND4.0 and is excluded from translation; code public-domain notices do not override that guide's terms. Preserve R. P. C. Rodgers' man-page credit.

Next: implement an app-specific importer and raw-HTML plugins from the tested conversion, verify full original reconstruction and regenerated blocks/anchors/links, then translate and review every page separately. Check source notes for known original typos and version-specific apparent contradictions. Formal build/display/integration and publication checks are still pending. Use integrated Cloudflare Pages only after verified publication registration.
''')
snapshot=E/'workspace';snapshot.mkdir(exist_ok=False);shutil.copytree(A,snapshot/'apps/zlib',ignore=shutil.ignore_patterns('node_modules','dist','.astro'))
shutil.copyfile(W/'sites/landing/src/config/projects.config.jsonc',snapshot/'LANDING_AFTER.jsonc')
shutil.copyfile('/private/tmp/libx-zlib-create-dry-336.log',E/'CREATE_DRY_RUN.log');shutil.copyfile('/private/tmp/libx-zlib-create-336.log',E/'CREATE_PROJECT.log')
check={'status':'passed-for-source-lock','cloneHead':__import__('subprocess').check_output(['git','rev-parse','HEAD'],cwd=W,text=True).strip(),'sourceFiles':records,'archiveMatched':True,'pagePlan14':True,'headerByteCoverageWhole':True,'sampleDocsRemaining':list(str(p) for p in (A/'src/content/docs').rglob('*')),'sampleV1SearchRemaining':(A/'public/search/v1').exists(),'formalCanonical':'pending','translation':'pending','build':'pending','publicDeployment':'not-started','sharedCheckoutAppCreated':(R/'apps/zlib').exists(),'snapshot':'workspace/apps/zlib','dependencies':'frozen-lockfile/ignore-scripts install in isolated clone succeeded after offline missing tarball/network sandbox DNS; no root install','creatorTests':'skipped as app content still pending; not reported as passed'}
assert not check['sampleDocsRemaining'] and not check['sampleV1SearchRemaining'] and not check['sharedCheckoutAppCreated'];(E/'SOURCE_LOCK_CHECK.json').write_text(json.dumps(check,ensure_ascii=False,indent=2)+'\n');print(json.dumps(check,ensure_ascii=False))
