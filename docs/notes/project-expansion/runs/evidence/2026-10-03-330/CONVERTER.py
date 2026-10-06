import pathlib, re, json, hashlib, html, subprocess
from html.parser import HTMLParser
ROOT=pathlib.Path('/Users/dolphilia/github/libx')
SRC=ROOT/'docs/notes/project-expansion/runs/evidence/2026-10-03-327/source/zlib-1.3.2'
OUT=ROOT/'docs/notes/project-expansion/runs/evidence/2026-10-03-330'
OUT.mkdir(exist_ok=False)
TRIAL=OUT/'markdown';TRIAL.mkdir()
sha=lambda s:hashlib.sha256(s if isinstance(s,bytes) else s.encode()).hexdigest()
class Blocks(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.depth=0;self.blocks=[]
 def handle_starttag(self,t,a):
  if dict(a).get('data-zlib-block') is not None:assert self.depth==0;self.depth=1;self.blocks.append('')
  elif self.depth:self.depth+=1
 def handle_endtag(self,t):
  if self.depth:self.depth-=1
 def handle_data(self,s):
  if self.depth:self.blocks[-1]+=s
def linked(text):
 # Only explicit source URLs. Link labels remain byte-identical display text.
 parts=[];cursor=0
 for m in re.finditer(r'https?://[^\s<>]+',text):
  u=m.group();parts.extend([html.escape(text[cursor:m.start()]),'<a href="'+html.escape(u,quote=True)+'">'+html.escape(u)+'</a>']);cursor=m.end()
 parts.append(html.escape(text[cursor:]));return ''.join(parts)
records=[];expected={}
def save(name,source,body,blocks):
 page='---\ntitle: "zlib 1.3.2 '+name+' conversion trial"\ntoc:\n  maxLevel: 6\n---\n\n<p>Local conversion trial only. Unofficial formatting of fixed zlib 1.3.2 sources.</p>\n\n<div class="zlib-trial-document">'+body+'</div>\n'
 (TRIAL/(name+'.md')).write_text(page)
 p=Blocks();p.feed(page);assert p.blocks==blocks
 expected[name]=blocks
 records.append({'file':source,'sourceSha256':sha((SRC/source).read_bytes()),'trial':name+'.md','trialSha256':sha(page),'blocks':len(blocks),'htmlParserBlocksExact':True})
for source,name in [('zlib.h','api'),('zconf.h','zconf')]:
 mapping=json.loads((ROOT/'docs/notes/project-expansion/runs/evidence/2026-10-03-328/v3'/(source+'.blocks.json')).read_text())
 assert ''.join(b['original'] for b in mapping).encode()==(SRC/source).read_bytes()
 blocks=[];body=[]
 for b in mapping:
  i=b['index'];blocks.append(b['display'])
  if b['kind']=='code':body.append(f'<pre><code data-zlib-block="{i}">{html.escape(b["display"])}</code></pre>')
  else:body.append(f'<div data-zlib-block="{i}" style="white-space:pre-wrap;overflow-wrap:anywhere">{linked(b["display"])}</div>')
 save(name,source,''.join(body),blocks)
for source,name in [('README','readme'),('FAQ','faq'),('LICENSE','license')]:
 text=(SRC/source).read_text();body=[];blocks=[]
 if source=='FAQ':
  starts=[m.start() for m in re.finditer(r'^ ?\d+\. ',text,re.M)]
  numbers=[int(m.group().strip().split('.')[0]) for m in re.finditer(r'^ ?\d+\. ',text,re.M)]
  assert numbers==list(range(1,45));cuts=[0]+starts+[len(text)]
 else:cuts=[0]+[m.end() for m in re.finditer(r'\n\n+',text)]+[len(text)]
 spans=[text[a:b] for a,b in zip(cuts,cuts[1:]) if b>a];assert ''.join(spans)==text
 for i,s in enumerate(spans):
  blocks.append(s)
  tag='section' if source=='FAQ' else 'div'
  attrs=f'id="faq-{i}"' if source=='FAQ' and i else ''
  body.append(f'<{tag} {attrs} data-zlib-block="{i}" style="white-space:pre-wrap;overflow-wrap:anywhere">{linked(s)}</{tag}>')
 save(name,source,''.join(body),blocks)
man=subprocess.run(['/usr/bin/mandoc','-Thtml',str(SRC/'zlib.3')],check=True,capture_output=True,text=True)
(OUT/'MAN_MANDOC_FULL.html').write_text(man.stdout);(OUT/'MAN_MANDOC.stderr').write_text(man.stderr)
manual=man.stdout.split('<div class="manual-text">',1)[1].split('\n</div>',1)[0]
manual='<div data-zlib-block="0">'+manual+'</div>'
p=Blocks();p.feed(manual)
assert len(p.blocks)==1
save('manual','zlib.3',manual,p.blocks)
(OUT/'EXPECTED_BLOCKS.json').write_text(json.dumps(expected,indent=2)+'\n')
(OUT/'COMPANION_MACHINE_CHECK.json').write_text(json.dumps({'status':'passed','records':records,'faqQuestions':44,'plainOriginalReconstruction':'README/FAQ/LICENSE exact bytes','man':'system mandoc -Thtml, entire manual-text preserved; roff source hash locked; native/semantic comparison pending','formalAstro':'pending','nativeBrowser':'pending','wholeConversionGate':'unknown','localLLMUsed':False},indent=2)+'\n')
print(json.dumps(records,indent=2))
