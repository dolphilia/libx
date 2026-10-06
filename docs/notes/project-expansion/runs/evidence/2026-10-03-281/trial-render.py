import pathlib,json,re,hashlib,datetime,html,posixpath,sys,importlib.metadata
from html.parser import HTMLParser
import markdown
root=pathlib.Path('/Users/dolphilia/github/libx');old=root/'docs/notes/project-expansion/runs/evidence/2026-10-03-279';ev=old.parent/'2026-10-03-281';source=old/'fixed-source';boundary=json.loads((old.parent/'2026-10-03-280/BOUNDARY_LICENSE.json').read_text());dest=pathlib.Path('/private/tmp/libx-wren-render-trial-281');dest.mkdir(exist_ok=True)
class Inspect(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.pres=[];self.cur=None;self.ids=[];self.links=[];self.headings=0;self.definitions=0;self.active=[];self.noncode=[];self.inactive=False
 def handle_starttag(self,t,a):
  d=dict(a)
  if self.cur is not None:return
  if t=='script':self.inactive=True
  if t=='pre':assert self.cur is None;self.cur=[]
  if t=='script' or t in ['iframe','canvas']:self.active.append((t,d))
  if t in ['h1','h2','h3','h4','h5','h6']:self.headings+=1
  if t=='dl':self.definitions+=1
  if d.get('id'):self.ids.append(d['id'])
  if t=='a' and d.get('name'):self.ids.append(d['name'])
  if d.get('href'):self.links.append(d['href'])
 def handle_endtag(self,t):
  if t=='pre':self.pres.append(''.join(self.cur));self.cur=None
  if t=='script':self.inactive=False
 def handle_data(self,d):
  if self.cur is not None:self.cur.append(d)
  elif not self.inactive:self.noncode.append(d)
 def handle_entityref(self,n):self.handle_data(html.unescape('&'+n+';'))
 def handle_charref(self,n):self.handle_data(html.unescape('&#'+n+';'))
records=[];parsed={}
for item in boundary['files']:
 if item['role']!='adopt':continue
 p=item['path'];b=(source/p).read_bytes();assert hashlib.sha256(b).hexdigest()==item['sha256'];s=b.decode();title='';lines=[];actualLines=[];inPre=False
 for line in s.splitlines(keepends=True):
  wasPre=inPre
  if '<pre' in line:inPre=True
  protected=wasPre or inPre
  stripped=line.lstrip();indent=line[:len(line)-len(stripped)]
  if stripped.startswith('^'):
   command,_,arg=stripped.rstrip('\n').lstrip('^').partition(' ');assert command=='title';title=arg.strip()
  elif re.match(r'#+ ',stripped):
   ix=stripped.find(' ');level=stripped[:ix];heading=stripped[ix:].strip();anchor=re.sub(r'\?|!|:|/|\*|`','',heading.lower().replace(' ','-'))
   lines.append(indent+level+heading+' <a href="#'+anchor+'" name="'+anchor+'" class="header-anchor">#</a>\n')
  else:lines.append(line)
  if protected:actualLines.append(line)
  elif not stripped.startswith('^'):actualLines.append(lines[-1])
  if '</pre>' in line:inPre=False
 reference=markdown.markdown(''.join(lines),extensions=['def_list','smarty'])
 rawBlocks=[]
 def stash(m):
  token='WRENRAWPRESERVE'+str(len(rawBlocks))+'END';rawBlocks.append((token,m.group(0)));return '<pre>'+token+'</pre>'
 protectedSource=re.sub(r'<pre\b[^>]*>.*?</pre>',stash,''.join(actualLines),flags=re.S)
 actual=markdown.markdown(protectedSource,extensions=['def_list','smarty'])
 for token,block in rawBlocks:
  assert actual.count('<pre>'+token+'</pre>')==1
  actual=actual.replace('<pre>'+token+'</pre>',block)
 modifications=[]
 if p=='doc/site/performance.markdown':
  assert actual.count('<script src="script.js"></script>')==1;actual=actual.replace('<script src="script.js"></script>','');modifications.append('Remove only unresolved trailing script.js tag, preserving all article text; disclose on provenance')
 a=Inspect();a.feed(actual);r=Inspect();r.feed(reference)
 assert a.noncode==r.noncode and a.ids==r.ids and a.links==r.links and a.headings==r.headings and a.definitions==r.definitions
 assert not a.active
 if a.pres!=r.pres:modifications.append('Preserve source rawpre verbatim across line header processing and PythonMarkdown whitespace normalization; official output differs in code whitespace and/or comments')
 # Explicit source pre blocks must survive with exact interpreted text, not simply identical conversion outputs.
 expected=[]
 for block in re.findall(r'<pre\b[^>]*>(.*?)</pre>',s,re.S):
  q=Inspect();q.feed('<pre>'+block+'</pre>');expected.append(q.pres[0])
 
 cursor=0
 for token,block in rawBlocks:
  ix=actual.find(block,cursor);assert ix>=cursor, 'Source rawpre missing/reordered'
  cursor=ix+len(block)
 for e in expected:
  if e not in a.pres:
   print(json.dumps({'source':p,'expectedPrefix':e[:200],'expectedChars':len(e),'actualMatches':[(len(v),repr(v)) for v in a.pres if 'Example.attributes.self' in v], 'expectedFull':repr(e)}));raise AssertionError('Raw pre mismatch')
 rel=p.removeprefix('doc/site/').removesuffix('.markdown')+'.html';out=dest/rel;out.parent.mkdir(parents=True,exist_ok=True);out.write_text(actual)
 parsed[rel]=a
 records.append({'path':p,'output':str(out),'outputSha256':hashlib.sha256(actual.encode()).hexdigest(),'title':title,'headings':a.headings,'preBlocks':len(a.pres),'sourceRawPreBlocks':len(expected),'definitionLists':a.definitions,'links':len(a.links),'modifications':modifications})
missing=[];excluded=[];anchors=[]
for rel,inspect in parsed.items():
 for url in inspect.links:
  if re.match(r'^[a-zA-Z][\w+.-]*:',url) or url.startswith('//'):continue
  target,_,fragment=url.partition('#');target=posixpath.normpath(posixpath.join(posixpath.dirname(rel),target)) if target else rel
  if not target.endswith('.html'):target=target.rstrip('/')+'/index.html'
  target=target.lstrip('/')
  if target=='modules/core/index.html':target='modules/index.html'
  if target not in parsed:
   row={'source':rel,'href':url,'resolved':target}
   if target.startswith(('cli/','blog/','try/')):excluded.append(row)
   else:missing.append(row)
  elif fragment and fragment not in parsed[target].ids:anchors.append({'source':rel,'href':url,'target':target,'fragment':fragment})
result={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'partial','stage':'Source→official-style HTML only; Astro build/browser/complete prose review not yet done','markdownVersion':markdown.__version__,'pythonVersion':sys.version,'extensions':['def_list','smarty'],'sourceGenerator':'Fixed upstream title/header and Markdown processing reproduced; post-render output/error span formatting and template integration pending; not executed wholesale (its output deletion/server/static copying unused).','files':records,'pages':len(records),'totalPre':sum(x['preBlocks'] for x in records),'rawPre':sum(x['sourceRawPreBlocks'] for x in records),'headings':sum(x['headings'] for x in records),'definitionLists':sum(x['definitionLists'] for x in records),'missingInternalRoutes':missing,'missingInternalAnchors':anchors,'excludedOfficialReferenceRoutes':excluded,'scope':'Every41body and all source rawpre mechanically checked. No translation, no snippets executed, no lossless prose assertion beyond matched official-style renderer. All source rawpre verified in original order with exact interpreted text.','trialRepresentatives':['doc/site/values.markdown','doc/site/classes.markdown','doc/site/embedding/storing-c-data.markdown','doc/site/modules/core/sequence.markdown'],'wholeConversionPassed':False}
with (ev/'TRIAL_RENDER.json').open('x') as f:json.dump(result,f,indent=2);f.write('\n')
print(json.dumps({k:v for k,v in result.items() if k in ['status','pages','totalPre','rawPre','headings','definitionLists','missingInternalRoutes','missingInternalAnchors']}))
