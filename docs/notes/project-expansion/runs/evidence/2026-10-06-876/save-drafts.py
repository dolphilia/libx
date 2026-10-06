from pathlib import Path
from html.parser import HTMLParser
import json,re,hashlib,html,datetime
R=Path('/Users/dolphilia/github/libx');E=Path(__file__).parent;N=R/'docs/notes/document-import/yyjson/v0-13-0';W=Path('/private/tmp/libx-yyjson-formal-874')
class Headings(HTMLParser):
 def __init__(self):super().__init__();self.inside=False;self.level=None;self.out=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='article':self.inside=True
  if self.inside and re.fullmatch(r'h[1-6]',tag):self.level=tag;self.out.append({'slug':a.get('id'),'text':''})
 def handle_endtag(self,tag):
  if tag==self.level:self.level=None
  if tag=='article':self.inside=False
 def handle_data(self,text):
  if self.level:self.out[-1]['text']+=text
packet=json.loads((E/'DRAFT_PACKET.json').read_text());results=[]
for p in packet:
 t=E/'ja-prose'/Path(p['id']).name
 if not t.exists():continue
 prose=t.read_text();indices=[int(x) for x in re.findall(r'@@CODE_(\d+)@@',prose)];assert sorted(indices)==list(range(len(p['blocks'])))
 h=Headings();h.feed((W/'apps/yyjson/dist/v0-13-0/en'/p['id'].replace('.md','')/'index.html').read_text());headings=h.out
 lines=prose.splitlines(keepends=True);n=0;out=[];aliases=[]
 for i,l in enumerate(lines):
  heading=re.match(r'^#{1,6} (.+)',l)
  setext=i+1<len(lines) and re.match(r'^=+\s*$',lines[i+1])
  if heading or setext:
   title=(heading[1] if heading else l.strip()).replace('**','').replace('`','').strip();eng=headings[n];n+=1
   if title!=eng['text']:
    assert eng['slug'];out.append('<a id="'+html.escape(eng['slug'],quote=True)+'"></a>\n');aliases.append({'sourceSlug':eng['slug'],'titleJA':title})
  out.append(l)
 assert n==len(headings),(p['id'],n,len(headings))
 body=''.join(out)
 for i,code in enumerate(p['blocks']):body=body.replace('@@CODE_'+str(i)+'@@',code)
 assert '@@CODE_' not in body
 q=N/'translations/ja'/p['id'];q.parent.mkdir(parents=True,exist_ok=True);q.write_text(body);results.append({'id':p['id'],'translationSHA256':hashlib.sha256(q.read_bytes()).hexdigest(),'originalCodeBlocks':len(p['blocks']),'sourceFragmentAliases':aliases,'review':'pending'})
(E/'DRAFT_SAVED.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'drafts-saved-unreviewed','pages':results},ensure_ascii=False,indent=2)+'\n');print('Saved Japanese draft bodies:',len(results),'full review pending')
