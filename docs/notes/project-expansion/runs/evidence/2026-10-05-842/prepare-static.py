import pathlib,json,re,hashlib,shutil,zipfile,tarfile,io,datetime
R=pathlib.Path('/private/tmp/libx-mdbook-static-842');A=R/'apps/mdbook-static-trial';O=pathlib.Path('/private/tmp/libx-mdbook-astro-trial-655/apps/mdbook-trial');D=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-842');root=pathlib.Path('/Users/dolphilia/github/libx');sha=lambda b:hashlib.sha256(b).hexdigest()
trial=json.loads((root/'docs/notes/project-expansion/runs/evidence/2026-10-05-661/TRIAL_PREPARED.json').read_text());boundary=json.loads((root/'docs/notes/project-expansion/runs/evidence/2026-10-04-651/MDBOOK_BOUNDARY.json').read_text());records={x['path']:x for x in boundary['records']}
# New isolated trial only; the 655 trial and repository user changes are retained.
shutil.rmtree(A/'src/content/docs');out=A/'src/content/docs/v0-5-4/en/01-guide';out.mkdir(parents=True)
source=A/'public/source/v0-5-4';source.mkdir(parents=True,exist_ok=True)
with zipfile.ZipFile(O/'public/downloads/v0-5-4/source.zip') as z:
 components=json.loads(z.read('SOURCE_COMPONENTS.json'));raw=z.read(components['mdBook']['archive']);assert sha(raw)==components['mdBook']['sha256']
 (source/'mdbook-original.tar.gz').write_bytes(raw)
 with tarfile.open(fileobj=io.BytesIO(raw),mode='r:gz') as t:
  members={m.name.split('/',1)[1]:m for m in t.getmembers() if '/'in m.name and m.isfile()}
  for p in [x['path'] for x in boundary['records'] if x['role']in ['adopt','reference']]:
   if p not in members:continue
   data=t.extractfile(members[p]).read();assert sha(data)==records[p]['sha256'];dest=source/'original'/p;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(data)
  lic=[p for p in members if 'LICENSE' in p.upper() and p.count('/')<1];print('license paths',lic)
  for p in lic:(source/p).write_bytes(t.extractfile(members[p]).read())
 for n in ['notices/FA_5_15_4_LICENSE.txt','notices/FA_6_2_0_LICENSE.txt','notices/RUST_ARTWORK_LOGO_LICENSE.md','notices/RUST_TRADEMARK_POLICY.html']:
  dest=source/n;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(z.read(n))
shutil.copytree(O/'public/source-assets',A/'public/source-assets',dirs_exist_ok=True)
page_records=[]
for page in trial['pages']:
 p=pathlib.Path(page['file']);src=O/pathlib.Path(*p.parts[2:]);text=src.read_text();assert sha(src.read_bytes())==page['sha256']
 front,body=text.split('---\n',2)[1:];name=p.name;sourcepath=page['sourcePath'];fixed=f'https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/{sourcepath}'
 prevContext=json.loads(re.search(r'^documentContext: (.*)$',front,re.M).group(1));materials=[x for x in prevContext if x['kind']=='editorial' and 'Original example assets retained' in x['html']]
 footer=[{'kind':'source','html':f'<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href="{fixed}">Original chapter</a> · <a href="/docs/mdbook-static-trial/source/v0-5-4/original/{sourcepath}">Original Markdown</a> · <a href="/docs/mdbook-static-trial/source/v0-5-4/edited/{name}">Editable Libx document</a> · <a href="/docs/mdbook-static-trial/source/v0-5-4/mdbook-original.tar.gz">Complete fixed upstream source</a>.</p>'},*materials,{'kind':'editorial','html':f'<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href="{fixed}">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This isolated conversion trial is unpublished and has no Japanese translation or full content review yet.</p>'}]
 front=re.sub(r'^documentContext: .*$', 'documentContext: '+json.dumps(footer,ensure_ascii=False),front,flags=re.M)
 front=front.replace('/docs/mdbook-trial/','/docs/mdbook-static-trial/')
 # Only styling markers change: no paragraph, code or formula is discarded.
 body=body.replace('/docs/mdbook-trial/','/docs/mdbook-static-trial/').replace('class="boring"','data-mdbook-hidden-line="true"')
 result='---\n'+front+'---\n'+body;(out/name).write_text(result);edited=source/'edited'/name;edited.parent.mkdir(exist_ok=True);edited.write_text(result)
 page_records.append({'sourcePath':sourcepath,'priorCanonicalSHA':page['sha256'],'staticFile':str(out/name),'sha256':sha(result.encode()),'originalHtmlPath':page['originalHtmlPath'],'codePreservation':'complete inner code preserved; hidden-line span marker changed only'})
config=json.loads((O/'src/config/project.config.jsonc').read_text());config['paths']['projectSlug']='mdbook-static-trial';config['translations']['en']['displayName']='mdBook static conversion trial';config['translations']['en']['displayDescription']='Unpublished static conversion reassessment for the complete mdBook 0.5.4 guide';(A/'src/config/project.config.jsonc').write_text(json.dumps(config,indent=2)+'\n')
css=A/'src/styles/global.css';css.write_text(css.read_text()+'\n/* Upstream image and inline SVG examples retain their original aspect ratio. */\n.mdbook-guide svg { display: inline-block; max-width: 100%; }\n.mdbook-guide pre { overflow-x: auto; white-space: pre; }\n')
summary={'status':'prepared-unpublished','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(R),'version':'0.5.4','commit':'2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d','pages':page_records,'pageCount':len(page_records),'sourceArchiveSHA':sha(raw),'method':'保管済み全31章HTML定本/展開済みincludeを再利用。全文・全コード・TeX・図・draftを保持、独自JS/Ace/MathJax/font runtimeを持ち込まない。非表示行は明示して全表示。','selected':False,'fullContentReviewPerformed':False,'rootChangesTouched':False,'nextAction':'通常/最大/難所/TeX代表をbuild/DOM/表示で照合→現行条件で再採点・別パス選定照合。'}
assert len(page_records)==31;(D/'STATIC_PREPARATION.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n');print('prepared31; static source/code retained; no selection/translation claimed')
