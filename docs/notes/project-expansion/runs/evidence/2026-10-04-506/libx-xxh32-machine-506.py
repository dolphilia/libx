from pathlib import Path
from html.parser import HTMLParser
import json,re,hashlib
root=Path('/Users/dolphilia/github/libx');note=root/'docs/notes/document-import/xxhash/v0-8-4';w=Path('/private/tmp/libx-xxhash-import-20261003');p=json.loads((note/'API_TRANSLATION_DRAFT_PROGRESS.json').read_text());en=w/p['canonical']['path'];ja=note/'drafts/ja/12-api-xxh32-family.details-unreviewed.md';e=en.read_text();j=ja.read_text()
reverse={'XXH32_state_tを解放します。':'Frees an XXH32_state_t.','XXH32_state_tを割り当てます。':'Allocates an XXH32_state_t.','XXH32_state_tから計算済みのハッシュ値を返します。':'Returns the calculated hash value from an XXH32_state_t.','XXH3ファミリー':'XXH3 family','XXH64ファミリー':'XXH64 family','XXH32の実装':'XXH32 implementation'}
class P(HTMLParser):
 def __init__(self):super().__init__();self.tags=[];self.ids=[];self.hrefs=[];self.labels=[];self.inA=False
 def handle_starttag(self,t,a):
  self.tags.append(('start',t,[(k,reverse.get(v,v) if k=='title' else v.replace('/v0-8-4/ja/','/v0-8-4/en/') if v else v)for k,v in a]))
  if t=='a':self.inA=True
  for k,v in a:
   if k=='id':self.ids.append(v)
   if k=='href':self.hrefs.append(v)
 def handle_endtag(self,t):
  self.tags.append(('end',t))
  if t=='a':self.inA=False
 def handle_data(self,s):
  if self.inA and re.fullmatch(r'XXH[A-Za-z0-9_()]+',s.strip()):self.labels.append(s)
a=P();b=P();a.feed(e);b.feed(j);assert a.tags==b.tags;assert a.ids==b.ids;assert a.labels==b.labels
for pattern in [r'<code\b[^>]*>([\s\S]*?)</code>',r'<div class="memproto">([\s\S]*?)</div>']:
 assert re.findall(pattern,e)==[s.replace('/v0-8-4/ja/','/v0-8-4/en/') for s in re.findall(pattern,j)]
for h in b.hrefs:
 if h.startswith('#'):assert h[1:] in b.ids,h
out={'status':'passed','pages':[{'slug':p['slug'],'canonicalSHA256':hashlib.sha256(en.read_bytes()).hexdigest(),'translationSHA256':hashlib.sha256(ja.read_bytes()).hexdigest(),'tagsAttributesExactExceptLocaleAndDeclaredTooltipTranslations':True,'tooltipTranslations':reverse,'IDsExact':len(b.ids),'APILabelsExact':True,'codeAndSignaturesExact':True,'hrefs':b.hrefs,'samePageTargetsPassed':True,'wholeProjectLinksPassed':False}]}
Path('/private/tmp/xxhash-api-506-machine.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');dst=w/'apps/xxhash/src/content/docs/v0-8-4/ja/02-api/12-group___x_x_h32__family.md';assert not dst.exists();dst.write_bytes(ja.read_bytes());print({'ids':len(b.ids),'signatures':len(re.findall(r'<div class="memproto">',j)),'APIlabels':len(b.labels)})
