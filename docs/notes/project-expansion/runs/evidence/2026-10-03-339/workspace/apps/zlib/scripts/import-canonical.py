#!/usr/bin/env python3
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
def comments(text):
    # Scan strings as well as comments. Do not interpret comment-like strings.
    i = 0
    while i < len(text):
        if text[i:i+2] == '/*':
            end = text.find('*/', i + 2)
            assert end >= 0
            yield i, end + 2
            i = end + 2
        elif text[i] in '\"\'':
            quote = text[i]
            i += 1
            while i < len(text):
                if text[i] == '\\': i += 2
                elif text[i] == quote:
                    i += 1
                    break
                else: i += 1
        elif text[i:i+2] == '//':
            end = text.find('\n', i)
            i = len(text) if end < 0 else end
        else: i += 1

def clean_comment(raw):
    body = raw[2:-2]
    lines = body.split('\n')
    following = [line for line in lines[1:] if line.strip()]
    # Strip the shared C-comment decoration only, never a prose emphasis mark.
    decorated = following and all(re.match(r'^\s*\*(?: |$)', line) for line in following)
    if decorated:
        lines = [lines[0]] + [re.sub(r'^(\s*)\*(?: |$)', r'\1', line) for line in lines[1:]]
    result = '\n'.join(lines)
    if '*must*' in body: assert '*must*' in result
    return result


def header(name):
 raw=(SRC/name).read_bytes();text=raw.decode();spans=[];cursor=0
 for start,end in comments(text):
  left=text[text.rfind('\n',0,start)+1:start];stop=text.find('\n',end);right=text[end:len(text) if stop<0 else stop]
  if left.strip() or right.strip():continue
  if start>cursor:spans.append(('code',cursor,start))
  spans.append(('comment',start,end));cursor=end
 if cursor<len(text):spans.append(('code',cursor,len(text)))
 assert ''.join(text[a:b] for _,a,b in spans).encode()==raw
 return [{'index':i,'kind':k,'start':a,'end':b,'original':text[a:b],'display':clean_comment(text[a:b]) if k=='comment' else text[a:b]} for i,(k,a,b) in enumerate(spans)]
blocks=header('zlib.h');zconf=header('zconf.h');assert len(blocks)==194 and len(zconf)==42
page_for_block={i:p['page'] for p in plans[:9] for i in p['sourceBlocks']};assert sorted(page_for_block)==list(range(194))
for p in plans[:9]:assert blocks[p['sourceBlocks'][0]]['start']==p['byteStart'] and blocks[p['sourceBlocks'][-1]]['end']==p['byteEnd']
symbols=set(re.findall(r'\bZEXPORT(?:VA)?\s+(\w+)\s*\(', (SRC/'zlib.h').read_text()));symbols.update(['deflateInit','inflateInit','deflateInit2','inflateInit2','inflateBackInit'])
def route(page):return page.removesuffix('.md')+'/'
def relative_link(target,origin):
 page,sep,fragment=target.partition('#');link=posixpath.relpath(route(page),route(origin))+'/'
 return link+(sep+fragment if sep else '')
anchors={};names_by_block={};seen=set()
proto=re.compile(r'\bZEXTERN\b[^;]*?\bZEXPORT(?:VA)?\s+(\w+)\s*\([^;]*?;',re.S)
for b in blocks:
 names=[]
 for m in proto.finditer(b['display']):
  n=m.group(1)
  if n not in symbols:continue
  if n not in names:names.append(n)
  if n not in anchors:anchors[n]=b['index']
 names_by_block[b['index']]=names
for n in ['z_stream','gz_header','alloc_func','free_func','in_func','out_func','gzFile']:
 for b in blocks:
  if b['kind']=='code' and re.search(r'\btypedef\b[\s\S]*?\b'+n+r'\b',b['display']):anchors[n]=b['index'];break
links=[]
def linked(s,origin):
 # Text labels remain exact; link destinations only refer to known anchors.
 token=re.compile(r'https?://[^\s<>]+|\bzlib\.h\b|\bzconf\.h\b|\b(?:'+ '|'.join(sorted(anchors,key=len,reverse=True))+r')\b')
 out=[];pos=0
 for m in token.finditer(s):
  n=m.group();out.append(html.escape(s[pos:m.start()]));tail=s[m.end():];before=s[max(0,m.start()-2):m.start()];
  common={'deflate','inflate','compress','compress2','uncompress','uncompress2','adler32','crc32'}
  if n in anchors and (tail.startswith(('.c','.h')) or before=='->' or (n in common and not tail.startswith('(') and not re.match(r'\s+(?:returns|return|function|routine)\b',tail))):
   out.append(html.escape(n));pos=m.end();continue
  target=n if n.startswith(('http://','https://')) else page_for_block[anchors[n]]+'#'+n if n in anchors else plans[0]['page'] if n=='zlib.h' else plans[9]['page']
  # Relative links are sibling trial routes, not nested under current page.
  if not n.startswith(('http://','https://')):target=relative_link(target,origin)
  out.append('<a href="'+html.escape(target,quote=True)+'">'+html.escape(n)+'</a>');links.append({'origin':origin,'label':n,'href':target});pos=m.end()
 out.append(html.escape(s[pos:]));return ''.join(out)
def prose(s,origin):return '<div style="white-space:pre-wrap;overflow-wrap:anywhere">'+linked(s,origin)+'</div>'
def code(s):return '<pre><code>'+html.escape(s)+'</code></pre>'
sections={'constants','basic functions','Advanced functions','utility functions','gzip file access functions','checksum functions',"various hacks, don't look :)",'undocumented functions'}
records=[];rendered={};table_rows=0
for b in blocks:
 i=b['index'];s=b['display'];names=names_by_block[i];editorial=[]
 # Section headings use their original source block, without an editorial duplicate.
 if names:editorial.append('<h3 id="nav-'+str(i)+'" data-editorial="navigation">'+html.escape(names[0])+'</h3>')
 for n,index in anchors.items():
  if index==i:editorial.insert(0,'<a id="'+n+'" data-editorial="anchor"></a>')
 pieces=[]
 if b['kind']=='code':pieces=[('code',s)]
 else:
  cursor=0
  for m in proto.finditer(s):
   if m.group(1) not in symbols:continue
   if m.start()>cursor:pieces.append(('prose',s[cursor:m.start()]))
   pieces.append(('code',s[m.start():m.end()]));cursor=m.end()
  if cursor<len(s):pieces.append(('prose',s[cursor:]))
 assert ''.join(p for _,p in pieces)==s
 out=[]
 for kind,p in pieces:
  if kind=='code':out.append(code(p));continue
  # The two source checksum examples end their comment block.
  sample=p.find('   Usage example:\n')
  if sample>=0:
   split=p.index('\n',sample)+1;out.append(prose(p[:split],page_for_block[i]));out.append(code(p[split:]));continue
  if 'Type sizes, two bits each' in p:
   # Preserve each original line exactly inside table cells. No new labels
   # or inferred fields; continuation lines stay on their original row.
   lines=p.splitlines(keepends=True);j=0
   while j<len(lines):
    if re.match(r'^\s*\d+(?:[.,-]\d+)*:',lines[j]):
     rows=[]
     while j<len(lines) and re.match(r'^\s*\d+(?:[.,-]\d+)*:',lines[j]):
      row=lines[j];j+=1
      while j<len(lines) and lines[j].strip() and not re.match(r'^\s*\d+(?:[.,-]\d+)*:',lines[j]):row+=lines[j];j+=1
      left,right=row.split(':',1);rows.append('<tr><td style="white-space:pre-wrap">'+html.escape(left+':')+'</td><td style="white-space:pre-wrap;overflow-wrap:anywhere">'+linked(right,page_for_block[i])+'</td></tr>');table_rows+=1
     out.append('<table><tbody>'+''.join(rows)+'</tbody></table>')
    else:out.append(prose(lines[j],page_for_block[i]));j+=1
   continue
  out.append(prose(p,page_for_block[i]))
 if s.strip() in sections:out=['<h2 id="section-'+str(i)+'" data-source-role="section">'+html.escape(s)+'</h2>']
 rendered[i]=''.join(editorial)+('<div data-zlib-block="'+str(i)+'">'+''.join(out)+'</div>');records.append({'index':i,'kind':b['kind'],'originalDisplaySha256':SHA(s),'pieces':[{'kind':k,'text':p} for k,p in pieces],'names':names})

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
 archive=manifest['officialArchive'];note='<aside data-editorial="provenance"><p>Unofficial formatting of the complete fixed zlib 1.3.2 originals. Original source: '+html.escape(file)+'. <a href="'+archive['url']+'">Official archive</a>; SHA-256: <code>'+archive['sha256']+'</code>. Source file SHA-256: <code>'+source['sha256']+'</code>. Original notices remain intact. This presentation and its translations are unofficial.</p><p><a href="'+relative_link(plans[-1]['page'],page)+'">Full original license</a>. Plain source references outside this manual, including deflate.c, zutil.c, test/example.c, test/minigzip.c, ChangeLog and contrib, can be found in that fixed official archive.</p></aside>'
 if file=='FAQ':note+='<aside data-editorial="source-note"><p>Security, licensing and platform statements below are those in the FAQ shipped with the fixed zlib 1.3.2 release. The original identifier strm_total_out in FAQ32 differs from the structure field total_out; both forms are retained without silently correcting the source. Each contrib item has its own license.</p></aside>';note+='<aside data-editorial="license"><p>No separate documentation license was identified for this FAQ. Under the approved operating policy, the software zlib License is applied to the FAQ with this annotation. This is not separately verified documentation permission. Original notices and disclaimers remain available through the full original-license link.</p></aside>'
 annotations={2:'Original-source note: the stream structure defines adler; the inflate comment uses strm-&gt;adler32. Both original forms are preserved.',3:'Original-source notes: the deflateBound_z declaration is spelled delfateBound_z in one comment. inflateInit2 says a header might be read, then states the current implementation defers processing until inflate; both statements are retained. The phrase “much each” is an original typo. deflateTune delegates internal tuning details to deflate.c; this manual does not invent those details.',8:'This section is explicitly undocumented upstream. Its declarations are retained without newly generated explanations.'}
 if index in annotations:note+='<aside data-editorial="source-note"><p>'+annotations[index]+'</p></aside>'
 front='---\ntitle: '+json.dumps(titles[index],ensure_ascii=False)+'\nlicenseSource: zlib-'+sources[index]+'\ntoc:\n  maxLevel: 6\n---\n\n'
 page_text=front+note+'\n<div class="zlib-document" style="overflow-wrap:anywhere">'+body+'</div>\n';parser=TextBlocks();parser.feed(page_text);assert parser.blocks==wanted,(page,'display mismatch')
 generated[page]=page_text;expected[page]=wanted;maps.append({'page':page,'source':p['source'],'byteStart':p['byteStart'],'byteEnd':p['byteEnd'],'sha256':SHA(page_text),'displayBlocks':len(wanted)})
for n,p in enumerate(plans[:9]):save(n,''.join(rendered[i] for i in p['sourceBlocks']),[blocks[i]['display'] for i in p['sourceBlocks']])
save(9,''.join('<div data-zlib-block="'+str(b['index'])+'">'+(code(b['display']) if b['kind']=='code' else prose(b['display'],plans[9]['page']))+'</div>' for b in zconf),[b['display'] for b in zconf])
for n,filename in [(10,'README'),(11,'FAQ'),(13,'LICENSE')]:
 text=(SRC/filename).read_text();parts=[];markup=[]
 if filename=='FAQ':
  matches=list(re.finditer(r'^ ?(\d+)\. ',text,re.M));assert [int(m[1]) for m in matches]==list(range(1,45));cuts=[0]+[m.start() for m in matches]+[len(text)]
 else:cuts=[0]+[m.end() for m in re.finditer(r'\n\n+',text)]+[len(text)]
 for a,b in zip(cuts,cuts[1:]):
  if b<=a:continue
  s=text[a:b];i=len(parts);parts.append(s)
  if filename=='FAQ' and i:
   question,separator,answer=s.partition('\n\n');assert separator
   markup.append('<section data-zlib-block="'+str(i)+'"><h2 data-source-role="question" id="faq-'+str(i)+'">'+linked(question+separator,plans[n]['page'])+'</h2>'+prose(answer,plans[n]['page'])+'</section>')
  else:markup.append('<section data-zlib-block="'+str(i)+'">'+prose(s,plans[n]['page'])+'</section>')
 assert ''.join(parts)==text;save(n,''.join(markup),parts)
man_full=subprocess.run(['/usr/bin/mandoc','-Thtml',str(SRC/'zlib.3')],check=True,capture_output=True,text=True).stdout
man=man_full.split('<div class="manual-text">',1)[1].split('\n</div>',1)[0]
head=re.search(r'<table class="head">[\s\S]*?</table>',man_full)[0]
foot=re.search(r'<table class="foot">[\s\S]*?</table>',man_full)[0]
# Remove only inter-tag table formatting whitespace; HTML parsers otherwise
# foster-parent those nodes. All cell text and row/cell structure are unchanged.
head=re.sub(r'>\s+<','><',head);foot=re.sub(r'>\s+<','><',foot)
original=TextBlocks();original.feed('<div data-zlib-block="0">'+man+'</div>');pieces=re.split(r'(<[^>]+>)',man);depth=0
for i,part in enumerate(pieces):
 if part.startswith('<'):
  if re.match(r'<a\b',part):depth+=1
  if re.match(r'</a\s*>',part):depth-=1
  continue
 if not depth:
  pieces[i]=re.sub(r'https?://[^\s<>]+|\bzlib\.h\b',lambda m:'<a href="'+html.escape(relative_link(plans[0]['page'],plans[12]['page']) if m[0]=='zlib.h' else m[0],quote=True)+'">'+m[0]+'</a>',part)
assert depth==0
head_parser=TextBlocks();head_parser.feed('<div data-zlib-block="0">'+head+'</div>')
foot_parser=TextBlocks();foot_parser.feed('<div data-zlib-block="2">'+foot+'</div>')
save(12,'<div data-zlib-block="0">'+head+'</div><div data-zlib-block="1">'+''.join(pieces)+'</div><div data-zlib-block="2">'+foot+'</div>',head_parser.blocks+original.blocks+foot_parser.blocks)
assert len(generated)==14 and sum(map(len,expected.values()))==321 and len(anchors)==108 and table_rows==22
outputs={str(pathlib.Path('src/content/docs/v1-3-2/en')/p):s for p,s in generated.items()}
outputs.update({'meta/canonical-map.json':json.dumps({'pages':maps,'anchors':{n:{'page':page_for_block[i],'block':i} for n,i in anchors.items()},'sourceByteReconstruction':'whole headers and plaintext companions exact','manConversion':'system mandoc whole head table, manual-text, foot table; original roff retained','tableRows':table_rows},ensure_ascii=False,indent=2)+'\n','meta/expected-blocks.json':json.dumps(expected,ensure_ascii=False,indent=2)+'\n'})
existing=set(str(p.relative_to(DOCS)) for p in DOCS.rglob('*.md')) if DOCS.exists() else set();assert existing<=set(generated),'Unexpected canonical pages require explicit reconciliation'
for target,text in outputs.items():
 p=APP/target
 if CHECK:assert p.exists() and p.read_text()==text,'canonical regeneration differs: '+target
 else:p.parent.mkdir(parents=True,exist_ok=True);p.write_text(text)
print(json.dumps({'status':'regeneration matches' if CHECK else 'generated','pages':14,'displayBlocks':321,'anchors':108,'tableRows':table_rows,'translation':'not-started','renderedCheck':'pending'}))
