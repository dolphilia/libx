from pathlib import Path
from html.parser import HTMLParser
import re,json,hashlib,shutil,datetime
r=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-cjson-import-20261003');a=w/'apps/cjson';e=r/'docs/notes/project-expansion/runs/evidence/2026-10-03-303';n=w/'docs/notes/document-import/cjson/v1-7-19'
class P(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.pre=[];self.cur=None;self.text=[];self.skip=0;self.copy=0;self.ids=[];self.links=[];self.li=0
 def handle_starttag(self,t,attrs):
  d=dict(attrs)
  if 'id' in d:self.ids.append(d['id'])
  if t=='a':self.links.append(d.get('href',''))
  if t=='li':self.li+=1
  if t in ['script','style']:self.skip+=1
  if t=='button' and 'docs-code-copy' in d.get('class',''):self.skip+=1;self.copy+=1
  if t=='pre':self.cur=[]
 def handle_data(self,d):
  if self.skip:return
  if self.cur is not None:self.cur.append(d)
  else:self.text.append(d)
 def handle_endtag(self,t):
  if t=='pre':self.pre.append(''.join(self.cur));self.cur=None
  if t in ['script','style','button'] and self.skip:self.skip-=1
records=[];problems=[]
for lang in ['en','ja']:
 for page in ['01-guide/01-usage.md','02-license/01-license.md','02-license/02-contributors.md']:
  src=a/'src/content/docs/v1-7-19'/lang/page;expected=re.sub(r'^---\n[\s\S]*?\n---\n','',src.read_text(),count=1);built=a/'dist/v1-7-19'/lang/Path(page).with_suffix('')/'index.html';full=built.read_text();article=re.search(r'<article\b[^>]*>([\s\S]*?)</article>',full).group(1).split('<div class="navigation-container"')[0];x=P();x.feed(expected);y=P();y.feed(article);assert x.pre==y.pre,(lang,page,'code');assert ' '.join(''.join(x.text).split())==' '.join(''.join(y.text).split()),(lang,page,'prose');assert set(x.ids).issubset(y.ids);assert y.copy==len(x.pre);assert x.li==y.li
  z=P();z.feed(full)
  for href in z.links:
   if href.startswith('#'):assert href[1:] in z.ids,(lang,page,href)
   elif href.startswith('/docs/cjson/'):
    target=href.removeprefix('/docs/cjson/').split('#')[0].strip('/');file=a/'dist'/target
    if not file.suffix:file=file/'index.html'
    if not file.exists():problems.append({'lang':lang,'page':page,'href':href})
  (e/(lang+'-'+Path(page).stem+'-article.html')).write_text(article);records.append({'lang':lang,'page':page,'sourceSha256':hashlib.sha256(src.read_bytes()).hexdigest(),'htmlSha256':hashlib.sha256(built.read_bytes()).hexdigest(),'preCount':len(x.pre),'codeExact':True,'normalizedVisibleProseExact':True,'idsRetained':True,'listItemCount':x.li,'copyButtonCount':y.copy})
assert not problems,problems;assert (a/'dist/assets/cJSON-LICENSE.txt').read_bytes()==(n/'source/LICENSE').read_bytes()
for src,dest in [('/private/tmp/libx-cjson-online-install-302.log','DEPENDENCY_INSTALL.log'),('/private/tmp/libx-cjson-build-303.log','BUILD.log')]:shutil.copy(src,e/dest)
shutil.copy(w/'pnpm-lock.yaml',e/'pnpm-lock.yaml');shutil.copy(a/'src/config/project.config.jsonc',e/'project.config.jsonc')
d={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'mechanical-build-passed','records':records,'internalMissing':problems,'originalLicenseAssetExact':True,'pagesBuilt':11,'dependencyInstall':'Scoped online officialregistry completed exit0, ignore-scripts; formal app buildprebuild ran normally','normalization':'HTMLdecoded text; prose whitespacefolded only, nonvisible script/style/generatedcopybuttons excluded. predecoded text exact. No sourceparagraph skipped.','wholeENJAContentReview':'pending separate gate','native':'pending','scope':'All6formal English/Japanese pages, originalbody plus editorialnotes/referenceMITtranslation; nottrialbuild andnotproduction.'};(e/'BUILT_PRESERVATION.json').write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n');print(json.dumps({'pages':len(records),'internallinkissues':len(problems)}))
