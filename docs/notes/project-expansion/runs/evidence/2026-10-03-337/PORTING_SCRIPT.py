import pathlib,re,json
R=pathlib.Path('/Users/dolphilia/github/libx');P=R/'docs/notes/project-expansion/runs/evidence';A=pathlib.Path('/private/tmp/libx-zlib-import-20261003/apps/zlib');S=A/'scripts';S.mkdir()
old=(P/'2026-10-03-328/CONVERTER_V3.py').read_text();funcs=old[old.index('def comments(text):'):old.index('class Visible(')]
structure=(P/'2026-10-03-334/STRUCTURE_CONVERTER.py').read_text();segment=structure[structure.index('anchors={};'):structure.index("prefix='---")]
segment=segment.replace("target=n if n.startswith(('http://','https://')) else 'api/#'+n if n in anchors else 'api/' if n=='zlib.h' else 'zconf/'","target=n if n.startswith(('http://','https://')) else page_for_block[anchors[n]]+'#'+n if n in anchors else plans[0]['page'] if n=='zlib.h' else plans[9]['page']")
segment=segment.replace("if not n.startswith(('http://','https://')):target='../'+target","if not n.startswith(('http://','https://')):target=relative_link(target,origin)")
segment=segment.replace("records=[];body=[];table_rows=0","records=[];rendered={};table_rows=0")
segment=segment.replace("linked(right,'api')","linked(right,page_for_block[i])").replace("prose(p,'api')","prose(p,page_for_block[i])").replace("prose(p[:split],'api')","prose(p[:split],page_for_block[i])").replace("prose(lines[j],'api')","prose(lines[j],page_for_block[i])")
segment=segment.replace("body.extend(editorial);body.append(","rendered[i]=''.join(editorial)+(")
head='''#!/usr/bin/env python3
"""Deterministic zlib 1.3.2 whole-scope canonical importer. No software build or LLM."""
import pathlib,re,json,html,hashlib,subprocess,posixpath,sys
from html.parser import HTMLParser
APP=pathlib.Path(__file__).resolve().parents[1]
SRC=APP/'upstream/v1.3.2'; META=APP/'meta'; DOCS=APP/'src/content/docs/v1-3-2/en'
SHA=lambda x:hashlib.sha256(x.encode() if isinstance(x,str) else x).hexdigest()
manifest=json.loads((META/'source-manifest.json').read_text());plans=json.loads((META/'page-plan.json').read_text())['pages']
for file in manifest['files']:assert SHA((APP/file['path']).read_bytes())==file['sha256'],file['path']
assert SHA((APP/manifest['officialArchive']['path']).read_bytes())==manifest['officialArchive']['sha256']
CHECK='--check' in sys.argv
'''
afterfuncs='''
def header(name):
 raw=(SRC/name).read_bytes();text=raw.decode();spans=[];cursor=0
 for start,end in comments(text):
  left=text[text.rfind('\\n',0,start)+1:start];stop=text.find('\\n',end);right=text[end:len(text) if stop<0 else stop]
  if left.strip() or right.strip():continue
  if start>cursor:spans.append(('code',cursor,start))
  spans.append(('comment',start,end));cursor=end
 if cursor<len(text):spans.append(('code',cursor,len(text)))
 assert ''.join(text[a:b] for _,a,b in spans).encode()==raw
 return [{'index':i,'kind':k,'start':a,'end':b,'original':text[a:b],'display':clean_comment(text[a:b]) if k=='comment' else text[a:b]} for i,(k,a,b) in enumerate(spans)]
blocks=header('zlib.h');zconf=header('zconf.h');assert len(blocks)==194 and len(zconf)==42
page_for_block={i:p['page'] for p in plans[:9] for i in p['sourceBlocks']};assert sorted(page_for_block)==list(range(194))
for p in plans[:9]:assert blocks[p['sourceBlocks'][0]]['start']==p['byteStart'] and blocks[p['sourceBlocks'][-1]]['end']==p['byteEnd']
symbols=set(re.findall(r'\\bZEXPORT(?:VA)?\\s+(\\w+)\\s*\\(', (SRC/'zlib.h').read_text()));symbols.update(['deflateInit','inflateInit','deflateInit2','inflateInit2','inflateBackInit'])
def route(page):return '/'.join(re.sub(r'^\\d+-','',part) for part in page.removesuffix('.md').split('/'))+'/'
def relative_link(target,origin):
 page,sep,fragment=target.partition('#');link=posixpath.relpath(route(page),route(origin))+'/'
 return link+(sep+fragment if sep else '')
'''
tail='''
class TextBlocks(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.depth=0;self.blocks=[]
 def handle_starttag(self,t,a):
  if dict(a).get('data-zlib-block') is not None:assert not self.depth;self.depth=1;self.blocks.append('')
  elif self.depth:self.depth+=1
 def handle_endtag(self,t):
  if self.depth:self.depth-=1
 def handle_data(self,s):
  if self.depth:self.blocks[-1]+=s
generated={};expected={};maps=[]
titles=['Overview and original notices','Constants','Basic functions','Advanced functions','Utility functions','Gzip file access functions','Checksum functions',"Various hacks, don’t look :)",'Undocumented functions','zconf.h original appendix','README','Frequently asked questions','zlib manual page','Original license']
sources=['api']*9+['zconf','readme','faq','manual','license']
def save(index,body,wanted):
 p=plans[index];page=p['page'];file=p['source'].split('/')[-1];source=next(x for x in manifest['files'] if x['path']==p['source'])
 archive=manifest['officialArchive'];note='<aside data-editorial="provenance"><p>Unofficial formatting of the complete fixed zlib 1.3.2 originals. Original source: '+html.escape(file)+'. <a href="'+archive['url']+'">Official archive</a>; SHA-256: <code>'+archive['sha256']+'</code>. Source file SHA-256: <code>'+source['sha256']+'</code>. Original notices remain intact. Japanese translations are unofficial.</p><p><a href="'+relative_link(plans[-1]['page'],page)+'">Full original license</a>. Plain source references outside this manual, including deflate.c, zutil.c, test/example.c, test/minigzip.c, ChangeLog and contrib, can be found in that fixed official archive. They are not fabricated local routes.</p></aside>'
 if file=='FAQ':note+='<aside data-editorial="license"><p>No separate documentation license was identified for this FAQ. Under the approved operating policy, the software zlib License is applied to the FAQ with this annotation. This is not separately verified documentation permission. Original notices and disclaimers remain available through the full original-license link.</p></aside>'
 annotations={3:'Original-source notes: the stream structure defines adler; the inflate comment uses strm-&gt;adler32. The deflateBound_z declaration is spelled delfateBound_z in one comment. Both original forms are preserved.',4:'Original-source notes: inflateInit2 says a header might be read, then states the current implementation defers processing until inflate. Both statements are retained. The phrase “much each” is an original typo. deflateTune delegates internal tuning details to deflate.c; this manual does not invent those details.',8:'This section is explicitly undocumented upstream. Its declarations are retained without newly generated explanations.'}
 if index in annotations:note+='<aside data-editorial="source-note"><p>'+annotations[index]+'</p></aside>'
 front='---\\ntitle: '+json.dumps(titles[index],ensure_ascii=False)+'\\nlicenseSource: zlib-'+sources[index]+'\\ntoc:\\n  maxLevel: 6\\n---\\n\\n'
 page_text=front+note+'\\n<div class="zlib-document" style="overflow-wrap:anywhere">'+body+'</div>\\n';parser=TextBlocks();parser.feed(page_text);assert parser.blocks==wanted,(page,'display mismatch')
 generated[page]=page_text;expected[page]=wanted;maps.append({'page':page,'source':p['source'],'byteStart':p['byteStart'],'byteEnd':p['byteEnd'],'sha256':SHA(page_text),'displayBlocks':len(wanted)})
for n,p in enumerate(plans[:9]):save(n,''.join(rendered[i] for i in p['sourceBlocks']),[blocks[i]['display'] for i in p['sourceBlocks']])
save(9,''.join('<div data-zlib-block="'+str(b['index'])+'">'+(code(b['display']) if b['kind']=='code' else prose(b['display'],plans[9]['page']))+'</div>' for b in zconf),[b['display'] for b in zconf])
for n,filename in [(10,'README'),(11,'FAQ'),(13,'LICENSE')]:
 text=(SRC/filename).read_text();parts=[];markup=[]
 if filename=='FAQ':
  matches=list(re.finditer(r'^ ?(\\d+)\\. ',text,re.M));assert [int(m[1]) for m in matches]==list(range(1,45));cuts=[0]+[m.start() for m in matches]+[len(text)]
 else:cuts=[0]+[m.end() for m in re.finditer(r'\\n\\n+',text)]+[len(text)]
 for a,b in zip(cuts,cuts[1:]):
  if b<=a:continue
  s=text[a:b];i=len(parts);parts.append(s)
  if filename=='FAQ' and i:markup.append('<h2 data-editorial="navigation" id="faq-'+str(i)+'">'+html.escape(s.split('\\n\\n',1)[0].strip())+'</h2>')
  markup.append('<section data-zlib-block="'+str(i)+'">'+prose(s,plans[n]['page'])+'</section>')
 assert ''.join(parts)==text;save(n,''.join(markup),parts)
man=subprocess.run(['/usr/bin/mandoc','-Thtml',str(SRC/'zlib.3')],check=True,capture_output=True,text=True).stdout.split('<div class="manual-text">',1)[1].split('\\n</div>',1)[0]
original=TextBlocks();original.feed('<div data-zlib-block="0">'+man+'</div>');pieces=re.split(r'(<[^>]+>)',man);depth=0
for i,part in enumerate(pieces):
 if part.startswith('<'):
  if re.match(r'<a\\b',part):depth+=1
  if re.match(r'</a\\s*>',part):depth-=1
  continue
 if not depth:
  pieces[i]=re.sub(r'https?://[^\\s<>]+|\\bzlib\\.h\\b',lambda m:'<a href="'+html.escape(relative_link(plans[0]['page'],plans[12]['page']) if m[0]=='zlib.h' else m[0],quote=True)+'">'+m[0]+'</a>',part)
assert depth==0;save(12,'<div data-zlib-block="0">'+''.join(pieces)+'</div>',original.blocks)
assert len(generated)==14 and sum(map(len,expected.values()))==319 and len(anchors)==108 and table_rows==22
outputs={str(pathlib.Path('src/content/docs/v1-3-2/en')/p):s for p,s in generated.items()}
outputs.update({'meta/canonical-map.json':json.dumps({'pages':maps,'anchors':{n:{'page':page_for_block[i],'block':i} for n,i in anchors.items()},'sourceByteReconstruction':'whole headers and plaintext companions exact','manConversion':'system mandoc full manual-text, original roff retained','tableRows':table_rows},ensure_ascii=False,indent=2)+'\\n','meta/expected-blocks.json':json.dumps(expected,ensure_ascii=False,indent=2)+'\\n'})
existing=set(str(p.relative_to(DOCS)) for p in DOCS.rglob('*.md')) if DOCS.exists() else set();assert existing<=set(generated),'Unexpected canonical pages require explicit reconciliation'
for target,text in outputs.items():
 p=APP/target
 if CHECK:assert p.exists() and p.read_text()==text,'canonical regeneration differs: '+target
 else:p.parent.mkdir(parents=True,exist_ok=True);p.write_text(text)
print(json.dumps({'status':'regeneration matches' if CHECK else 'generated','pages':14,'displayBlocks':319,'anchors':108,'tableRows':table_rows,'translation':'not-started','renderedCheck':'pending'}))
'''
(S/'import-canonical.py').write_text(head+funcs+afterfuncs+segment+tail)
print('portable importer created')
