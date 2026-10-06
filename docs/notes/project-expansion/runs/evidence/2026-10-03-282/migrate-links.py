import pathlib,json,re,hashlib,datetime,html,posixpath
from html.parser import HTMLParser
root=pathlib.Path('/Users/dolphilia/github/libx');base=root/'docs/notes/project-expansion/runs/evidence';prev=base/'2026-10-03-281';ev=base/'2026-10-03-282';dest=ev/'rendered';dest.mkdir()
exec((prev/'trial-render.py').read_text().split('class Inspect(HTMLParser):')[1].split('records=[];parsed={}')[0].join(['class Inspect(HTMLParser):','']))
fixes={'modules/core/fn.html':{'../functions.html#block-arguments':'../../functions.html#block-arguments'},'modules/core/object.html':{'../values.html':'../../values.html','control-flow.html#truth':'../../control-flow.html#truth'},'modules/core/sequence.html':{'../control-flow.html#truth':'../../control-flow.html#truth'},'classes.html':{'#signature':'method-calls.html#signature'},'modularity.html':{'getting-started.html#using-the-wren-cli':'https://wren.io/cli/'}}
records=[];parsed={};changes=[]
for f in sorted((prev/'rendered').rglob('*.html')):
 rel=f.relative_to(prev/'rendered').as_posix();before=f.read_text();after=before;a=Inspect();a.feed(before)
 for old,new in fixes.get(rel,{}).items():
  token='href="'+html.escape(old,quote=True)+'"';n=after.count(token);assert n>0
  after=after.replace(token,'href="'+html.escape(new,quote=True)+'"');changes.append({'source':rel,'old':old,'new':new,'count':n,'reason':'Fixed target header/article exists' if rel!='modularity.html' else 'Removed CLI heading absent in fixed GettingStarted; official separate CLI entry, no claim of loader behavior verification'})
 # Out-of-scope official CLI/blog/playground remain references on original official site.
 for url in set(a.links):
  if re.match(r'^[a-zA-Z][\w+.-]*:',url) or url.startswith('//'):continue
  target,_,fragment=url.partition('#');target=posixpath.normpath(posixpath.join(posixpath.dirname(rel),target)) if target else rel;target=target.lstrip('/')
  if target.split('/')[0] in ['cli','blog','try']:
   new='https://wren.io/'+target+('#'+fragment if fragment else '');token='href="'+html.escape(url,quote=True)+'"';n=after.count(token)
   if n:after=after.replace(token,'href="'+html.escape(new,quote=True)+'"');changes.append({'source':rel,'old':url,'new':new,'count':n,'reason':'Explicit excluded separate official reference, retain external destination'})
 b=Inspect();b.feed(after);assert a.noncode==b.noncode and a.pres==b.pres and a.ids==b.ids and a.headings==b.headings;assert not b.active
 out=dest/rel;out.parent.mkdir(exist_ok=True,parents=True);out.write_text(after);parsed[rel]=b;records.append({'path':rel,'sha256':hashlib.sha256(after.encode()).hexdigest(),'textCodeHeadingsPreserved':True})
missing=[]
for rel,a in parsed.items():
 for url in a.links:
  if re.match(r'^[a-zA-Z][\w+.-]*:',url) or url.startswith('//'):continue
  target,_,frag=url.partition('#');target=posixpath.normpath(posixpath.join(posixpath.dirname(rel),target)) if target else rel
  if not target.endswith('.html'):target=target.rstrip('/')+'/index.html'
  target=target.lstrip('/')
  if target=='modules/core/index.html':target='modules/index.html'
  if target not in parsed or (frag and frag not in parsed[target].ids):missing.append({'source':rel,'href':url,'target':target,'fragment':frag})
assert not missing
(ev/'LINK_MIGRATION.json').write_text(json.dumps({'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'partial','changes':changes,'files':records,'unresolvedInternalLinks':missing,'bodyPages':len(records),'wholeConversionPassed':False,'pending':['Actual Astro integration and native browser trials','Title/provenance/TOC/codecopy','Whole prose content review','CLI loader paragraph factual review separate from repaired reference'],'officialCliVerification':{'url':'https://wren.io/cli/','observation':'Official current About page confirms CLI separate project, not bundled; used only as reference entry','method':'web open current official page plus fixed doc/site/cli/index.markdown'}} ,indent=2)+'\n')
print(json.dumps({'bodyPages':len(records),'changedOccurrences':sum(x['count'] for x in changes),'unresolvedInternalLinks':len(missing),'wholeConversionPassed':False}))
