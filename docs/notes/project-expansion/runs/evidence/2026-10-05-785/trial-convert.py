import pathlib,json,re,html,hashlib,datetime,shutil
root=pathlib.Path.cwd();src=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-781/lz4-fixed';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-785';work=pathlib.Path('/private/tmp/libx-lz4-trial-785');out=ev/'canonical';out.mkdir(exist_ok=True)
b=json.load(open(root/'docs/notes/project-expansion/runs/evidence/2026-10-05-784/BOUNDARY.json'));r=json.load(open(root/'docs/notes/project-expansion/runs/evidence/2026-10-05-784/RIGHTS_AND_FULFILLMENT.json'));rights={x['source']['path'].split('/lz4-fixed/')[1]:x for x in r['files']};at=datetime.datetime.now(datetime.timezone.utc).isoformat()
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def ref(p):return {'path':str(p.relative_to(root)),'sha256':sha(p)}
def write(n,d):(ev/n).write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
inputs=[x for x in b['files'] if x['classification']=='adopt'];routeBase='/docs/lua/v5-5-1/en/99-lz4-trial/';names={x['path']:f'{i+1:02d}-'+re.sub(r'[^a-z0-9]+','-',x['path'].lower()).strip('-') for i,x in enumerate(inputs)};rewrite=[]
def linkRewrite(t,path):
 def sub(m):
  u=m[1]
  if re.match(r'^[a-z]+:|^/|^#',u,re.I):return m[0]
  clean,sep,anchor=u.partition('#');joined=pathlib.PurePosixPath(path).parent/clean
  import posixpath
  target=posixpath.normpath(str(joined))
  if target in names:dest=routeBase+names[target]+'/'+(sep+anchor if sep else '')
  elif (src/target).is_file():dest='https://github.com/lz4/lz4/blob/'+b['commit']+'/'+target+(sep+anchor if sep else '')
  else:dest=u
  if dest!=u:rewrite.append({'source':path,'old':u,'new':dest})
  return ']('+dest+')'
 t=re.sub(r'\]\(([^\s)]+)\)',sub,t)
 def defsub(m):
  rewritten=re.sub(r'\]\(([^\s)]+)\)',sub,']('+m[2]+')')
  return m[1]+rewritten[2:-1]
 return re.sub(r'(?m)^([ \t]{0,3}\[[^\]]+\]:[ \t]*)([^\s]+)',defsub,t)
rows=[]
for f in inputs:
 p=f['path'];t=(src/p).read_text();assert sha(src/p)==f['sha256'];name=names[p];segments=[]
 if p.endswith('.html'):
  body=t[t.index('<body>')+6:];body=re.sub(r'</(?:body|html)>','',body)
  # Preserve literal angle expressions; recognize only markup explicitly emitted by fixed official generator.
  body=re.sub(r'<(?!/?(?:h[1-6]|a|pre|b|p|ol|li|hr|br)(?=[\s/>]))','&lt;',body,flags=re.I)
  body=body.replace('`','&#96;')
  body=re.sub(r'(</h[1-6]>)',r'\1\n',body)
  transforms='add newline after block headings for text boundary; protect literal backticks against Markdown parsing; remove outer HTML/head/CSS and body wrappers; escape literal < outside generator tag grammar; retain all original headings/Contents/anchors/pre/comments/declarations'
 elif p.endswith('.h'):
  cursor=0;chunks=[]
  # Split complete standalone block comments for future sequential prose translation; inline comments stay code.
  for m in re.finditer(r'(?m)^[ \t]*/\*.*?\*/[ \t]*(?:\n|$)',t,re.S):
   if m.start()>cursor:
    s=t[cursor:m.start()];chunks.append('<pre><code>'+html.escape(s)+'</code></pre>');segments.append({'kind':'code','start':cursor,'end':m.start(),'sha256':hashlib.sha256(s.encode()).hexdigest()})
   s=t[m.start():m.end()];chunks.append('<pre class="lz4-source-comment">'+html.escape(s)+'</pre>');segments.append({'kind':'translatable-original-comment','start':m.start(),'end':m.end(),'sha256':hashlib.sha256(s.encode()).hexdigest()});cursor=m.end()
  if cursor<len(t):
   s=t[cursor:];chunks.append('<pre><code>'+html.escape(s)+'</code></pre>');segments.append({'kind':'code','start':cursor,'end':len(t),'sha256':hashlib.sha256(s.encode()).hexdigest()})
  assert ''.join(t[s['start']:s['end']] for s in segments)==t
  body='\n\n'.join(chunks);transforms='split complete standalone C block comments as source prose pre; keep all other declaration/code chunks including inline comments; HTML-escape every literal; exact source reconstruction from ordered spans'
 elif p in ['NEWS']:
  body='<pre>'+html.escape(t)+'</pre>';transforms='plain text full exact pre (no headings invented)'
 else:
  body=linkRewrite(t,p);transforms='preserve original Markdown; only fixed local links redirected using page map/reference commit; original formatting defects retained for trial'
 source=rights[p];sid='lz4-trial-'+name;url='https://github.com/lz4/lz4/blob/'+b['commit']+'/'+p
 footer='隔離候補変換試験。正式定本・翻訳・内容レビュー・通知配布の完了ではありません。'+(source['fallbackAnnotation'] or '')
 fm='---\ntitle: '+json.dumps('LZ4 trial: '+p)+'\nlicenseSource: '+json.dumps(sid)+'\ndocumentContext:\n  - kind: source\n    html: '+json.dumps('<p>'+html.escape(footer)+'</p>',ensure_ascii=False)+'\n---\n\n'
 dest=out/(name+'.md');dest.write_text(fm+body);live=work/'apps/lua/src/content/docs/v5-5-1/en/99-lz4-trial'/dest.name;live.parent.mkdir(exist_ok=True);shutil.copyfile(dest,live)
 rows.append({'path':p,'sourceSha256':f['sha256'],'canonical':ref(dest),'route':routeBase+name+'/','transforms':transforms,'segments':segments,'licenseSource':{'id':sid,'name':'LZ4 1.10.0 '+p,'author':'Original LZ4 contributors (file-specific notices preserved)','license':source['license'],'licenseUrl':url,'sourceUrl':url}})
config=work/'apps/lua/src/config/project.config.jsonc';c=json.loads(re.sub(r"(?m)^\s*//[^\n]*", "", config.read_text()));c['licensing']['sources']=[x for x in c['licensing']['sources'] if not x['id'].startswith('lz4-trial-')];c['licensing']['sources'].extend(x['licenseSource'] for x in rows);config.write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n')
regen=[]
for file in ['lz4_manual.html','lz4frame_manual.html']:
 fixed=src/'doc'/file;made=pathlib.Path('/private/tmp/lz4-generator-785')/file;regen.append({'fixed':ref(fixed),'generatedSha256':sha(made),'bytesIdentical':fixed.read_bytes()==made.read_bytes()});shutil.copyfile(made,ev/('REGENERATED_'+file))
write('GENERATOR_REPRODUCTION.json',{'at':at,'generator':ref(src/'contrib/gen_manual/gen_manual.cpp'),'command':'c++ -O2 gen_manual.cpp; gen_manual 1.10.0 fixed_header output_html','results':regen})
write('TRIAL_MAP.json',{'at':at,'kind':'isolated qualification trial, not formal canonical-ready operation','workdir':str(work),'borrowedAstroApp':'lua isolated clone; no root app/config edits','scope':ref(root/'docs/notes/project-expansion/runs/evidence/2026-10-05-784/BOUNDARY.json'),'pages':rows,'linkRewrites':rewrite,'translation':'not started','contentReview':'not performed'})
print('27 trial pages; generator parity',[(x['bytesIdentical']) for x in regen])
