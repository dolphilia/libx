from pathlib import Path
import json,re,hashlib
from html.parser import HTMLParser
w=Path('/private/tmp/libx-xxhash-import-20261003');base=w/'apps/xxhash/src/content/docs/v0-8-4';enFooter=(base/'en/02-api/01-annotated.md').read_text().split('## Source and notices')[1];jaFooter=(base/'ja/02-api/01-annotated.md').read_text().split('## 出典と通知')[1]
items=[('02-classes','Data Structure Index','データ構造索引',None,None),('03-files','File List','ファイル一覧','Here is a list of all documented files with brief descriptions:','文書化されたすべてのファイルと、その簡単な説明を示します。'),('04-functions','Data Fields','データフィールド','Here is a list of all documented struct and union fields with links to the struct/union documentation for each field:','文書化されたすべての構造体・共用体のフィールドを示します。各フィールドには、対応する構造体・共用体の文書へのリンクがあります。'),('05-functions_vars','Data Fields - Variables','データフィールド — 変数','Here is a list of all documented variables with links to the struct/union documentation for each field:','文書化されたすべての変数を示します。各フィールドには、対応する構造体・共用体の文書へのリンクがあります。')]
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
 a=P();b=P();a.feed(s);b.feed(ja.read_text());assert a.tags==b.tags;assert a.ids==b.ids;assert a.labels==b.labels
 for href in b.hrefs:
  if href.startswith('#'):assert href[1:] in b.ids
 checks.append({'slug':'02-api/'+slug,'canonicalSHA256':hashlib.sha256(en.read_bytes()).hexdigest(),'translationSHA256':hashlib.sha256(ja.read_bytes()).hexdigest(),'tagsAttributesExactExceptLanguage':True,'ids':b.ids,'APIAnchorTextExact':True,'hrefs':b.hrefs,'samePageTargetsPassed':True,'wholeProjectLinksPassed':False})
 print(slug,'\n'+''.join(b.text),'\n')
Path('/private/tmp/xxhash-api-503-machine.json').write_text(json.dumps({'status':'passed','pages':checks},ensure_ascii=False,indent=2)+'\n')
