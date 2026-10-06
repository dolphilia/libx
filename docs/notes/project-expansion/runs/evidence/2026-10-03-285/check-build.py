import pathlib,re,json,datetime,html,posixpath,hashlib
from html.parser import HTMLParser
root=pathlib.Path('/Users/dolphilia/github/libx');ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-03-285';old=ev.parent/'2026-10-03-282';dist=pathlib.Path('/private/tmp/libx-wren-trial-20261003-283/apps/wren-trial/dist');prefix='/docs/wren-trial/'
exec((ev.parent/'2026-10-03-281/trial-render.py').read_text().split('class Inspect(HTMLParser):')[1].split('records=[];parsed={}')[0].join(['class Inspect(HTMLParser):','']))
OriginalInspect=Inspect
class Inspect(OriginalInspect):
 def handle_starttag(self,t,a):
  super().handle_starttag(t,a)
  if t in ['td','th'] and self.cur is None:self.noncode.append(' ')
 def handle_endtag(self,t):
  super().handle_endtag(t)
  if t in ['td','th'] and self.cur is None:self.noncode.append(' ')
records=[];parsed={};issues=[]
for f in sorted((old/'rendered').rglob('*.html')):
 rel=f.relative_to(old/'rendered').as_posix();route='overview' if rel=='index.html' else rel.removesuffix('.html').removesuffix('/index');out=dist/'v0-4-0/en/docs'/route/'index.html';s=out.read_text();article=re.search(r'<article\b[^>]*>([\s\S]*?)</article>',s).group(1);body=article.split('<div class="navigation-container"')[0];title=re.match(r'\s*<h1 id="page-title">(.*?)</h1>',body);assert title and title.group(1);body=re.sub(r'^\s*<h1 id="page-title">.*?</h1>','',body,count=1);expectedHtml=f.read_text()
 if rel=='modules/index.html':
  assert expectedHtml.count('[embedding in applications][embedding]')==1
  expectedHtml=expectedHtml.replace('[embedding in applications][embedding]','<a href="/docs/wren-trial/v0-4-0/en/docs/embedding/">embedding in applications</a>')
 a=Inspect();a.feed(expectedHtml);b=Inspect();b.feed(re.sub(r'<button\b[^>]*class="[^"]*docs-code-copy[^"]*"[^>]*>.*?</button>','',body,flags=re.S))
 if ' '.join(''.join(a.noncode).split())!=' '.join(''.join(b.noncode).split()):issues.append({'source':rel,'type':'normalized visible prose mismatch'})
 if a.pres!=b.pres:issues.append({'source':rel,'type':'code mismatch','beforeBlocks':len(a.pres),'afterBlocks':len(b.pres)})
 if a.headings!=b.headings:issues.append({'source':rel,'type':'heading mismatch','before':a.headings,'after':b.headings})
 if not set(a.ids).issubset(b.ids):issues.append({'source':rel,'type':'anchor missing','missing':sorted(set(a.ids)-set(b.ids))})
 if len(re.findall(r'<button\b[^>]*class="[^"]*docs-code-copy',body))!=len(a.pres):issues.append({'source':rel,'type':'copy button mismatch','buttons':len(re.findall(r'<button\b[^>]*class="[^"]*docs-code-copy',body)),'blocks':len(a.pres)})
 parsed[out]=b;records.append({'source':rel,'buildPath':str(out),'sha256':hashlib.sha256(s.encode()).hexdigest(),'bodyPresent':bool(b.noncode),'preBlocks':len(b.pres),'headings':b.headings,'copyButtons':len(re.findall(r'<button\b[^>]*class="[^"]*docs-code-copy',body)),'allCodeExact':a.pres==b.pres})
for out,b in parsed.items():
 for url in b.links:
  if re.match(r'^[a-zA-Z][\w+.-]*:',url) or url.startswith('//'):continue
  target,_,frag=url.partition('#')
  if target:
   assert target.startswith(prefix),url
   file=dist/target.removeprefix(prefix).strip('/')/'index.html'
  else:file=out
  if not file.exists():issues.append({'source':str(out),'type':'missing build route','href':url})
  elif frag:
   q=Inspect();q.feed(file.read_text())
   if frag not in q.ids:issues.append({'source':str(out),'type':'missing build anchor','href':url})
navIssues=[]
for out in parsed:
 q=Inspect();q.feed(out.read_text())
 for url in q.links:
  if not url.startswith(prefix):continue
  target=url.split('#')[0].removeprefix(prefix).strip('/')
  if not target:target='index.html'
  file=dist/target
  if not file.suffix:file=file/'index.html'
  if not file.exists():navIssues.append({'page':str(out.relative_to(dist)),'href':url})
log=pathlib.Path('/private/tmp/libx-wren-build-285.log').read_text();bad=[l for l in log.splitlines() if re.search(r'Error:|Failed to parse|Unmatched',l)]
result={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'partial','pages':len(records),'records':records,'issues':issues,'compilerDiagnostics':bad,'fullNavigationBroken':navIssues,'totalCode':sum(x['preBlocks'] for x in records),'codeVerified':all(x['allCodeExact'] for x in records),'wholeConversionPassed':False,'nativeBrowser':'284 separate record, representative only','proseContentReview':'pending','routeAlias':'core/index and5 index aliases implemented, core native redirect verified','textNormalization':'Whitespace normalized, explicit td/th cell boundaries retained; copy UI omitted by exact button class only. Syntax initial difference was minified inter-cell whitespace, not missing cell content.', 'scope':'41 source body actual Astro output; notices separate. Mechanical exact code/headings/anchor/routes only, no claim of complete prose/native verification.'}
(ev/'ASTRO_BUILD_CHECK.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps({k:result[k] for k in ['pages','totalCode','codeVerified','issues','compilerDiagnostics','fullNavigationBroken']}))
