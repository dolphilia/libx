import pathlib,json,shutil,re,posixpath,html,datetime
root=pathlib.Path('/Users/dolphilia/github/libx');ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-03-283';base=ev.parent;trial=pathlib.Path('/private/tmp/libx-wren-trial-20261003-283');app=trial/'apps/wren-trial';docs=app/'src/content/docs';shutil.rmtree(docs);out=docs/'v0-4-0/en/docs';out.mkdir(parents=True);prefix='/docs/wren-trial/v0-4-0/en/docs/'
titles={x['path'].removeprefix('doc/site/').removesuffix('.markdown')+'.html':x['title'] for x in json.loads((base/'2026-10-03-281/TRIAL_RENDER.json').read_text())['files']}
for f in sorted((base/'2026-10-03-282/rendered').rglob('*.html')):
 rel=f.relative_to(base/'2026-10-03-282/rendered').as_posix();s=f.read_text()
 def rewrite(m):
  url=html.unescape(m.group(1))
  if re.match(r'^[a-zA-Z][\w+.-]*:',url) or url.startswith('//') or url.startswith('#'):return m.group(0)
  target,_,fragment=url.partition('#');target=posixpath.normpath(posixpath.join(posixpath.dirname(rel),target)).lstrip('/')
  if not target.endswith('.html'):target=target.rstrip('/')+'/index.html'
  target=target.lstrip('/')
  if target=='modules/core/index.html':target='modules/index.html'
  assert target in titles
  return 'href="'+html.escape(prefix+(target.removesuffix('.html').removesuffix('/index') if target!='index.html' else 'overview')+('/' if not fragment else '/#'+fragment),quote=True)+'"'
 s=re.sub(r'href="([^"]*)"',rewrite,s)
 for a,b in [('<span class="c1">//&gt; ','<span class="output">'),('<span class="c1">//&amp;gt; ','<span class="output">'),('<span class="c1">//! ','<span class="error">')]:s=s.replace(a,b)
 p=out/('overview.md' if rel=='index.html' else rel.replace('.html','.md'));p.parent.mkdir(exist_ok=True,parents=True);p.write_text('---\ntitle: '+json.dumps(titles[rel])+'\nlicenseSource: wren-0-4-0\ntoc:\n  maxLevel: 6\n---\n\n'+s+'\n')
notice=(base/'2026-10-03-279/fixed-source/LICENSE').read_text();(out/'license.md').write_text('---\ntitle: License\nlicenseSource: wren-0-4-0\n---\n\n<pre>'+html.escape(notice)+'</pre>\n')
assets=app/'public/assets';assets.mkdir(exist_ok=True);(assets/'wren-LICENSE.txt').write_text(notice)
config={'paths':{'baseUrlPrefix':'/docs','projectSlug':'wren-trial','siteUrl':'https://libx.dev'},'language':{'default':'en','supported':['en'],'displayNames':{'en':'English'}},'translations':{'en':{'displayName':'Wren Conversion Trial','displayDescription':'Unpublished conversion trial of Wren0.4.0','categories':{'docs':'Documentation'}}},'versioning':{'versions':[{'id':'v0-4-0','name':'0.4.0','date':json.loads((base/'2026-10-03-279/releases_latest.json').read_text())['published_at'],'isLatest':True}]},'licensing':{'defaultSource':'wren-0-4-0','showAttribution':True,'sourceLanguage':'en','sources':[{'id':'wren-0-4-0','name':'Wren0.4.0 Documentation','author':'Robert Nystrom and Wren Contributors','license':'MIT','licenseUrl':'/docs/wren-trial/assets/wren-LICENSE.txt','sourceUrl':'https://github.com/wren-lang/wren/tree/4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb/doc/site','provenanceNotes':[{'en':'Unofficial, unpublished libx conversion trial. Fixed Wren0.4.0 documentation; HTML headings/code and internal links migrated. Raw pre blocks preserved; unresolved script.js omitted. The separate CLI and playground remain official external references. No Japanese translation is claimed.','ja':'非公開の変換試験です。'}]}]}}
(app/'src/config/project.config.jsonc').write_text(json.dumps(config,indent=2)+'\n')
(ev/'TRIAL_SETUP.json').write_text(json.dumps({'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(trial),'baseline':'068bfeb18b81f5098c669c04bd186605bc3a3834','method':'Official create-project.js wren-trial --skip-install --skip-test --confirm, temporary candidate conversion probe only','adopted':False,'contentPages':41,'noticePages':1,'languages':['en'],'publication':'none','scope':'Not formal adoption/operation; source remains needs-evidence','postFormatting':'Three official output/error span substitutions mirrored after source HTML rendering'},indent=2)+'\n')
