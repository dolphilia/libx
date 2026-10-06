from pathlib import Path
from html.parser import HTMLParser
import markdown,html,re,json,hashlib,datetime
root=Path('/Users/dolphilia/github/libx');base=root/'docs/notes/project-expansion/runs/evidence';ev=base/'2026-10-03-294';ev.mkdir();(ev/'rendered').mkdir();sources={'guide':base/'2026-10-03-292/README.md','license':base/'2026-10-03-292/LICENSE','contributors':base/'2026-10-03-293/CONTRIBUTORS.md'}
class P(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.ids=[];self.links=[];self.pres=[];self.cur=None;self.inpre=False
 def handle_starttag(self,t,a):
  d=dict(a)
  if 'id' in d:self.ids.append(d['id'])
  if t=='a':self.links.append(d.get('href',''))
  if t=='pre':self.cur=[];self.inpre=True
 def handle_data(self,d):
  if self.inpre:self.cur.append(d)
 def handle_endtag(self,t):
  if t=='pre':self.pres.append(''.join(self.cur));self.cur=None;self.inpre=False
records=[];parsed={};repairs=[]
for name,p in sources.items():
 s=p.read_text();body=markdown.markdown(s,extensions=['fenced_code','toc']) if name!='license' else '<h1 id="license">License</h1><pre>'+html.escape(s)+'</pre>';before=body
 if name=='guide':
  assert body.count('href="#Vcpkg"')==1;body=body.replace('href="#Vcpkg"','href="#vcpkg"');assert body.count('href="CONTRIBUTORS.md"')==1;body=body.replace('href="CONTRIBUTORS.md"','href="contributors.html"');repairs=[{'from':'#Vcpkg','to':'#vcpkg','reason':'case-sensitivegeneratedheadingid'},{'from':'CONTRIBUTORS.md','to':'contributors.html','reason':'includedfullattributioncompanion'}]
 q=P();q.feed(body);parsed[name]=q;expected=[b+'\n' for _,b in re.findall(r'^```([^\n]*)\n([\s\S]*?)\n```\s*$',s,re.M)] if name!='license' else [s];assert q.pres==expected,(name,len(q.pres),len(expected));(ev/'rendered'/f'{name}.html').write_text(body+'\n');records.append({'name':name,'source':str(p.relative_to(root)),'sourceSha256':hashlib.sha256(p.read_bytes()).hexdigest(),'htmlSha256':hashlib.sha256((body+'\n').encode()).hexdigest(),'preBlocks':len(q.pres),'headings':len(q.ids),'codeAllExact':True,'originalTextMutation':'none; only2hrefrepairs guide, MITplainexact'});
issues=[]
for name,q in parsed.items():
 for u in q.links:
  if u.startswith('#') and u[1:] not in q.ids:issues.append({'page':name,'missingAnchor':u})
  elif not re.match(r'^[a-zA-Z][\w+.-]*:',u) and not u.startswith('#') and u!='contributors.html':issues.append({'page':name,'unresolvedRelative':u})
assert not issues,issues
(ev/'TRIAL_RENDER.json').write_text(json.dumps({'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'partial','markdownVersion':markdown.__version__,'records':records,'hrefRepairs':repairs,'internalIssues':issues,'scope':'Entireguide=maxpage includingall3Cmonitorfunctions/struct/typeflags/ownership/threadconditions; noticeandattributioncompanions. PureHTMLparser trial only. ActualAstro/navigation/provenance/copynative/mobile notverified.','conversionGate':'unknown','contentReview':'Sourceall590linealreadyread293; canonicalsemantic/translationnotcomplete'},indent=2)+'\n');print(json.dumps({'records':records,'issues':issues}))
