from pathlib import Path
from html.parser import HTMLParser
import json,re,hashlib,datetime,shutil
root=Path('/Users/dolphilia/github/libx');base=root/'docs/notes/project-expansion/runs/evidence';ev=base/'2026-10-03-295';app=Path('/private/tmp/libx-wren-trial-20261003-283/apps/cjson-trial');dist=app/'dist';prefix='/docs/cjson-trial/'
class P(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.ids=[];self.links=[];self.pres=[];self.text=[];self.cur=None;self.depth=0;self.skip=0;self.buttons=0
 def handle_starttag(self,t,a):
  d=dict(a)
  if 'id' in d:self.ids.append(d['id'])
  if t=='a':self.links.append(d.get('href',''))
  if t=='pre':self.cur=[]
  if t in ['script','style']:self.skip+=1
  if t=='button' and 'docs-code-copy' in d.get('class',''):self.skip+=1;self.buttons+=1
 def handle_data(self,d):
  if self.skip:return
  if self.cur is not None:self.cur.append(d)
  else:self.text.append(d)
 def handle_endtag(self,t):
  if t=='pre':self.pres.append(''.join(self.cur));self.cur=None
  if t in ['button','script','style'] and self.skip:self.skip-=1
records=[];issues=[]
for name in ['guide','license','contributors']:
 expected=(base/'2026-10-03-294/rendered'/f'{name}.html').read_text().replace('href="contributors.html"','href="/docs/cjson-trial/v1-7-19/en/docs/contributors/"');p=dist/f'v1-7-19/en/docs/{name}/index.html';s=p.read_text();article=re.search(r'<article\b[^>]*>([\s\S]*?)</article>',s).group(1);body=article.split('<div class="navigation-container"')[0];a=P();a.feed(expected);b=P();b.feed(body)
 assert a.pres==b.pres,(name,'code');assert ' '.join(''.join(a.text).split())==' '.join(''.join(b.text).split()),(name,'prose');assert set(a.ids).issubset(b.ids),(name,'headings');assert b.buttons==len(a.pres),(name,'buttons')
 for u in b.links:
  if u.startswith('#'):assert u[1:] in b.ids,(name,u)
  elif u.startswith(prefix):assert (dist/u.removeprefix(prefix).strip('/')/'index.html').exists(),u
 q=P();q.feed(s)
 for u in q.links:
  if u.startswith(prefix):
   part=u.removeprefix(prefix).split('#')[0].strip('/');target=dist/part
   if not target.suffix:target=target/'index.html'
   if not target.exists():issues.append({'page':name,'href':u})
 (ev/f'{name}-built-body.html').write_text(body);records.append({'page':name,'htmlSha256':hashlib.sha256(p.read_bytes()).hexdigest(),'preBlocks':len(b.pres),'codeExact':True,'normalizedProseExact':True,'originalIdsRetained':True,'copyButtons':b.buttons})
assert not issues,issues
assert (dist/'assets/cJSON-LICENSE.txt').read_bytes()==(base/'2026-10-03-292/LICENSE').read_bytes()
log=Path('/private/tmp/libx-cjson-build-295.log').read_text();bad=[l for l in log.splitlines() if re.search(r'Error:|Failed to parse|Unmatched',l)];assert not bad,bad
shutil.copytree(app/'src',ev/'trial-src',dirs_exist_ok=True);shutil.copyfile(app/'astro.config.mjs',ev/'astro.config.mjs')
for n in ['build','install','online-install','initial-failure']:
 p=Path('/private/tmp/libx-cjson-'+n+'-295.log')
 if p.exists():shutil.copyfile(p,ev/(n+'.log'))
(ev/'ASTRO_BUILD_CHECK.json').write_text(json.dumps({'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'partial','records':records,'compilerDiagnostics':bad,'fullNavigationIssues':issues,'licenseAssetExact':True,'native':'pending','conversion':'unknown','initialFailure':'Offlinecache missing@shikijs/types3.4.0; installmissingnode_modulescausedprebuildnotfound. Correctedscopedonlineinstallignore-scripts thenbuild.','scope':'All3actualAstroarticles mechanicallychecked; noJapanesetranslation/fullcanonicalsemantic/native claim.'},indent=2)+'\n');print(json.dumps({'records':records,'issues':issues}))
