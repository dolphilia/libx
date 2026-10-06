import hashlib, html, json, pathlib, shutil, subprocess, re

root=pathlib.Path.cwd()
ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-04-655'
clean=pathlib.Path('/private/tmp/libx-jq-footer-integration-20261004')
workspace=pathlib.Path('/private/tmp/libx-mdbook-astro-trial-655')
workspace.mkdir(exist_ok=False)
commit=subprocess.check_output(['git','rev-parse','HEAD'],cwd=clean,text=True).strip()
assert commit=='6e0dbef265ff6ebadf58a7437564a7d07ffeb296'
tracked=subprocess.check_output(['git','ls-files','-z'],cwd=clean).decode().split('\0')
inputs=[]
for rel in tracked:
 if not rel or not (rel.startswith(('scripts/','packages/','templates/docs-site/','config/')) or rel in ['package.json','pnpm-lock.yaml','pnpm-workspace.yaml']): continue
 p=clean/rel
 assert p.is_file(),rel
 original=subprocess.check_output(['git','show',commit+':'+rel],cwd=clean)
 assert p.read_bytes()==original,rel
 dest=workspace/rel;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(original)
 inputs.append({'path':rel,'sha256':hashlib.sha256(original).hexdigest()})
(workspace/'node_modules').symlink_to(clean/'node_modules',target_is_directory=True)
for p in (workspace/'packages').iterdir():
 if p.is_dir() and (clean/'packages'/p.name/'node_modules').is_dir(): (p/'node_modules').symlink_to(clean/'packages'/p.name/'node_modules',target_is_directory=True)
app=workspace/'apps/mdbook-trial'
shutil.copytree(workspace/'templates/docs-site',app)
(app/'node_modules').symlink_to(clean/'apps/jq/node_modules',target_is_directory=True)
shutil.rmtree(app/'src/content/docs')
for p in [app/'public/sidebar',app/'public/search']:
 if p.exists():shutil.rmtree(p)
config={'paths':{'baseUrlPrefix':'/docs','projectSlug':'mdbook-trial','siteUrl':'https://libx.dev'},'language':{'default':'en','supported':['en'],'displayNames':{'en':'English'}},'translations':{'en':{'displayName':'mdBook conversion trial','displayDescription':'Isolated unpublished conversion trial for mdBook 0.5.4','categories':{'guide':'Guide'}}},'versioning':{'versions':[{'id':'v0-5-4','name':'mdBook 0.5.4','date':'2026-10-04T00:00:00Z','isLatest':True}]},'licensing':{'defaultSource':'mdbook-guide','showAttribution':True,'sourceLanguage':'en','sources':[{'id':'mdbook-guide','name':'mdBook Documentation 0.5.4','author':'mdBook contributors','license':'MPL-2.0','licenseUrl':'https://www.mozilla.org/MPL/2.0/','sourceUrl':'https://github.com/rust-lang/mdBook/tree/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide'}]}}
(app/'src/config/project.config.jsonc').write_text(json.dumps(config,indent=2)+'\n')
data=json.loads((root/'docs/notes/project-expansion/runs/evidence/2026-10-04-654/ASTRO_PROCESSOR_TRIAL_v3.json').read_text())
records=data['records'];base='/docs/mdbook-trial/v0-5-4/en/01-guide/'
mapping={r['htmlPath']:f'{i+1:02d}-'+r['htmlPath'].removesuffix('.html').replace('/','-') for i,r in enumerate(records)}
headings={};pages=[]
for i,r in enumerate(records):
 text=(pathlib.Path('/private/tmp/libx-mdbook-trial-654/astro-html')/r['htmlPath']).read_text()
 replacements=[]
 def replace_link(m):
  key,url=m.group(1),html.unescape(m.group(2))
  if not url or url.startswith(('#','/')) or re.match(r'^[a-zA-Z][a-zA-Z0-9+.-]*:',url):return m.group(0)
  pathname,sep,anchor=url.partition('#')
  resolved=pathlib.PurePosixPath(r['htmlPath']).parent/pathname
  import posixpath
  resolved=posixpath.normpath(str(resolved))
  if resolved in mapping:new=base+mapping[resolved]+'/'
  else:
   source=pathlib.Path('/private/tmp/libx-mdbook-trial-654/source/guide/book/html')/resolved
   assert source.is_file(),(r['htmlPath'],url,resolved)
   new='/docs/mdbook-trial/source-assets/'+resolved
   dest=app/'public/source-assets'/resolved;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(source.read_bytes())
  new+=('#'+anchor) if sep else ''
  replacements.append({'attribute':key,'from':url,'to':new})
  return key+'="'+html.escape(new,quote=True)+'"'
 # Only real element attributes are rewritten: protect code/pre HTML text and SVG examples.
 chunks=[];last=0
 for m in re.finditer(r'<pre\b[^>]*>[\s\S]*?</pre>',text):
  chunks.append(re.sub(r'(href|src)="([^"]*)"',replace_link,text[last:m.start()]));chunks.append(m.group(0));last=m.end()
 chunks.append(re.sub(r'(href|src)="([^"]*)"',replace_link,text[last:]));text=''.join(chunks)
 slug=mapping[r['htmlPath']]
 contexts=[{'kind':'source','html':'<p>Fixed source: <a href="https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/'+r['sourcePath']+'">'+html.escape(r['sourcePath'])+'</a>; mdBook 0.5.4. Documentation: MPL-2.0. Unofficial Libx presentation; internal links and code newline encoding adapted.</p>'}]
 if r['images'] or r['svgCount']:contexts.append({'kind':'editorial','html':'<p>Original example assets retained. Rust logo: CC BY 4.0, unchanged, no affiliation or endorsement. Font Awesome SVG: CC BY 4.0; non-icon code: MIT. The original MIT wording and literal SVG example remain unchanged. This trial has not completed source-offer or behavior validation.</p>'})
 frontmatter={'title':r['headings'][0]['text'],'documentId':'mdbook:'+r['sourcePath'],'order':i+1,'licenseSource':'mdbook-guide','documentContext':contexts}
 dest=app/'src/content/docs/v0-5-4/en/01-guide'/(slug+'.md');dest.parent.mkdir(parents=True,exist_ok=True)
 dest.write_text('---\n'+'\n'.join(k+': '+json.dumps(v,ensure_ascii=False) for k,v in frontmatter.items())+'\n---\n\n'+text+'\n')
 headings['v0-5-4/en/01-guide/'+slug]=[{'depth':h['level'],'slug':h['id'],'text':h['text']} for h in r['headings']]
 pages.append({'sourcePath':r['sourcePath'],'route':base+slug+'/','file':str(dest.relative_to(workspace)),'sha256':hashlib.sha256(dest.read_bytes()).hexdigest(),'links':replacements,'originalHtmlPath':r['htmlPath']})
(app/'src/data').mkdir(exist_ok=True)
(app/'src/data/document-headings.json').write_text(json.dumps(headings,indent=2)+'\n')
(ev/'TRIAL_PREPARED.json').write_text(json.dumps({'status':'prepared-unpublished','workspace':str(workspace),'templateCommit':commit,'templateAndInfrastructureInputs':inputs,'pages':pages,'pageCount':len(pages),'selected':False,'published':False,'fullContentReviewPerformed':False,'conversionGatePassed':False,'remaining':['full build output DOM/code/link/asset comparison','normal/max/hard local Astro display','hidden lines/editor/playground/math behavior','source offer closure and work estimates'],'rootUserAwesomeChangesTouched':False},ensure_ascii=False,indent=2)+'\n')
print('Libx正規テンプレート隔離試験:31章/対応リンク/素材/フッター準備。未採用・未公開。')
