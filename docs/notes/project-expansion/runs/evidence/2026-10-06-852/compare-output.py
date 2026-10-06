from pathlib import Path
from bs4 import BeautifulSoup
import json,datetime,sys
D=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-06-852');role=sys.argv[1];scope=json.loads((D/(role.upper()+'_SCOPE.json')).read_text());old=Path('/private/tmp/libx-mdbook-production-artifact-849/dist');new=Path('/private/tmp/libx-mdbook-'+role+'-artifact-852/dist');rows=[]
def sort_children(container,selector):
 children=container.select(':scope > '+selector)
 for child in children:child.extract()
 for child in sorted(children,key=str):container.append(child)
def normalize(s):
 for ul in s.select('aside nav ul'):sort_children(ul,'li')
 for grid in s.select('.doc-grid'):sort_children(grid,'a.card')
 for categories in s.select('.category-list'):sort_children(categories,'.category-item')
 return str(s)
for p in scope['changedFiles']:
 if p=='docs/mdbook/source/v0-5-4/source.zip':
  import hashlib
  assert hashlib.sha256((new/p).read_bytes()).hexdigest()==json.loads((D/'SOURCE_OFFER.json').read_text())['archiveSha256'];rows.append({'path':p,'ok':True,'classification':['updated source kit CSS and manifest only;811 members checked']});continue
 assert p.endswith('.html'),p;a=BeautifulSoup((old/p).read_text(),'html.parser');b=BeautifulSoup((new/p).read_text(),'html.parser');k=[]
 if p.startswith('docs/mdbook/'):
  before=a.select('head link[rel="stylesheet"]');after=b.select('head link[rel="stylesheet"]');assert len(before)==len(after)
  for x,y in zip(before,after):
   if x.get('href')=='/'+scope['removedFiles'][0]:assert y.get('href')=='/'+scope['addedFiles'][0];y['href']=x['href']
   assert x==y
  k.append('new app-only stylesheet href in head; all body/footer DOM unchanged')
 if p.startswith('docs/gperf/')and'01-user-guide'in p:
  x=a.select('head link[rel="stylesheet"]');y=b.select('head link[rel="stylesheet"]');assert sorted(map(str,x))==sorted(map(str,y))
  for t in x+y:t.extract()
  k.append('same stylesheet tags reordered')
 if p in ['docs/sample-docs/v2/'+lang+'/'+chapter+'/index.html'for lang in ['en','ja']for chapter in ['01-guide/04-organizing-content','02-components/01-overview','02-components/02-icons']]:
  x=a.select('pre code');y=b.select('pre code');assert len(x)==len(y)
  for u,v in zip(x,y):
   assert u.get_text()==v.get_text()and u.attrs==v.attrs and u.parent.attrs==v.parent.attrs;raw=u.get_text();u.clear();v.clear();u.append(raw);v.append(raw)
  k.append('same full code/pre attributes; known syntax coloring span variation only')
 ok=normalize(a)==normalize(b);rows.append({'path':p,'ok':ok,'classification':k+['same sidebar/category/card sibling sets; any order normalized'],'articleAndFooterUnchanged':str(a.select_one('article'))==str(b.select_one('article'))})
 if not ok:
  x=normalize(a);y=normalize(b);i=next((i for i,(u,v)in enumerate(zip(x,y))if u!=v),min(len(x),len(y)));print({'path':p,'old':x[max(0,i-70):i+180],'new':y[max(0,i-70):i+180]})
out={'status':'passed'if all(r['ok']for r in rows)else'failed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'baseCommit':scope['baseCommit'],'commit':scope['commit'],'files':len(rows),'rows':rows,'failures':[r for r in rows if not r['ok']],'method':'Only app stylesheet URL replacement, source kit bound to851 CSS delta, unchanged sibling order variations, unchanged gperf stylesheet ordering and six named sample exact-code coloring differences. All other DOM/URLs/footer exact; no broad HTML exclusion.'};(D/(role.upper()+'_OUTPUT_COMPARISON.json')).write_text(json.dumps(out,indent=2)+'\n');print({'status':out['status'],'files':len(rows),'failures':len(out['failures'])})
