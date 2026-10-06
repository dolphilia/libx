from pathlib import Path
import json,re,hashlib
from html.parser import HTMLParser
w=Path('/private/tmp/libx-xxhash-import-20261003');base=w/'apps/xxhash/src/content/docs/v0-8-4';enFooter=(base/'en/02-api/01-annotated.md').read_text().split('## Source and notices')[1];jaFooter=(base/'ja/02-api/01-annotated.md').read_text().split('## 出典と通知')[1]
items=[('06-globals','Globals','グローバルAPI','Here is a list of all documented functions, variables, defines, enums, and typedefs with links to the documentation:','文書化されたすべての関数、変数、マクロ定義、列挙型、型定義を、文書へのリンクとともに示します。'),('07-globals_defs','Globals','グローバルAPI — マクロ','Here is a list of all documented macros with links to the documentation:','文書化されたすべてのマクロを、文書へのリンクとともに示します。'),('08-globals_enum','Globals','グローバルAPI — 列挙型','Here is a list of all documented enums with links to the documentation:','文書化されたすべての列挙型を、文書へのリンクとともに示します。'),('09-globals_eval','Globals','グローバルAPI — 列挙値','Here is a list of all documented enum values with links to the documentation:','文書化されたすべての列挙値を、文書へのリンクとともに示します。'),('10-globals_func','Globals','グローバルAPI — 関数','Here is a list of all documented functions with links to the documentation:','文書化されたすべての関数を、文書へのリンクとともに示します。'),('11-globals_type','Globals','グローバルAPI — 型定義','Here is a list of all documented typedefs with links to the documentation:','文書化されたすべての型定義を、文書へのリンクとともに示します。')]
class P(HTMLParser):
 def __init__(self):super().__init__();self.tags=[];self.ids=[];self.hrefs=[];self.a=False;self.labels=[];self.text=[]
 def handle_starttag(self,t,a):
  self.tags.append(('start',t,[(k,v.replace('/v0-8-4/ja/','/v0-8-4/en/') if v else v)for k,v in a]));self.a=self.a or t=='a'
  for k,v in a:
   if k=='id':self.ids.append(v)
   if k=='href':self.hrefs.append(v)
 def handle_endtag(self,t):
  self.tags.append(('end',t))
  if t=='a':self.a=False
 def handle_data(self,s):
  if self.a:self.labels.append(s)
  self.text.append(s)
checks=[]
for slug,title,jtitle,old,new in items:
 en=base/('en/02-api/'+slug+'.md');s=en.read_text();body,footer=s.split('## Source and notices');assert footer==enFooter;body=body.replace('title: "'+title+'"','title: "'+jtitle+'"')
 if old:assert old in body;body=body.replace(old,new)
 ja=base/('ja/02-api/'+slug+'.md');assert not ja.exists();ja.write_text(body.replace('/v0-8-4/en/','/v0-8-4/ja/')+'## 出典と通知'+jaFooter)
 assert ja.read_text().split('## 出典と通知')[0].replace('title: \"'+jtitle+'\"','title: \"'+title+'\"').replace(new,old).replace('/v0-8-4/ja/','/v0-8-4/en/')==s.split('## Source and notices')[0];a=P();b=P();a.feed(s);b.feed(ja.read_text());assert a.tags==b.tags;assert a.ids==b.ids;assert a.labels==b.labels
 for href in b.hrefs:
  if href.startswith('#'):assert href[1:] in b.ids
 checks.append({'slug':'02-api/'+slug,'canonicalSHA256':hashlib.sha256(en.read_bytes()).hexdigest(),'translationSHA256':hashlib.sha256(ja.read_bytes()).hexdigest(),'tagsAttributesExactExceptLanguage':True,'ids':b.ids,'APIAnchorTextExact':True,'hrefs':b.hrefs,'samePageTargetsPassed':True,'wholeProjectLinksPassed':False})
 print(slug,'\n'+''.join(b.text),'\n')
Path('/private/tmp/xxhash-api-504-machine.json').write_text(json.dumps({'status':'passed','pages':checks},ensure_ascii=False,indent=2)+'\n')
