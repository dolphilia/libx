import pathlib,json,datetime,hashlib
from bs4 import BeautifulSoup,Tag
D=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-841');scope=json.loads((D/'PUBLIC_VERIFICATION_SCOPE.json').read_text());old=pathlib.Path('/private/tmp/libx-lz4-production-artifact-837/dist');new=pathlib.Path('/private/tmp/libx-zstd-production-artifact-841/dist');rows=[]
def sort_children(container,selector):
 children=container.select(':scope > '+selector)
 for child in children:child.extract()
 for child in sorted(children,key=str):container.append(child)
def normalize(s):
 for ul in s.select('aside nav ul'):sort_children(ul,'li')
 for grid in s.select('.doc-grid'):sort_children(grid,'a.card')
 for categories in s.select('.category-list'):sort_children(categories,'.category-item')
 return str(s)
for p in sorted(scope['changedFiles']):
 a=BeautifulSoup((old/p).read_text(),'html.parser');b=BeautifulSoup((new/p).read_text(),'html.parser');kind=[]
 if not p.startswith('docs/'):
  z=b.select('a.project-card[href^="/docs/zstd/"]');assert len(z)==1;lang='ja'if p.startswith('ja/')else'en';assert z[0]['href']=='/docs/zstd/v1-5-7/'+lang+'/01-specification/01-introduction';spacing=z[0].next_sibling;assert isinstance(spacing,str)and not spacing.strip();spacing.extract();z[0].extract();kind.append('new Zstandard card and its separating space only')
 if p.startswith('docs/gperf/') and '01-user-guide' in p:
  x=a.select('head link[rel="stylesheet"]');y=b.select('head link[rel="stylesheet"]');assert sorted(map(str,x))==sorted(map(str,y));
  for t in x+y:t.extract()
  kind.append('same two stylesheet tags in different order; native rendering check required')
 if p.startswith('docs/xxhash/'):kind.append('same sidebar notice sibling set; order variation')
 if p.count('/')<=5 and p.startswith('docs/'):kind.append('same category/card sets; order variation')
 ok=normalize(a)==normalize(b)
 rows.append({'path':p,'equivalentExceptDeclaredChanges':ok,'classification':kind,'articleAndFooterUnchanged':p.startswith('docs/') and str(a.select_one('article'))==str(b.select_one('article'))})
 if not ok:
  x=normalize(a);y=normalize(b);i=next((i for i,(u,v)in enumerate(zip(x,y))if u!=v),min(len(x),len(y)));print(json.dumps({'path':p,'old':x[i-80:i+200],'new':y[i-80:i+200]}))
out={'status':'passed'if all(r['equivalentExceptDeclaredChanges']for r in rows)else'failed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'oldCommit':scope['baseCommit'],'commit':scope['commit'],'comparedChangedOldFiles':len(rows),'method':'Only added Zstandard card, sibling order in existing sidebar/category/card containers, and two unchanged gperf stylesheet tags are treated explicitly. All remaining parsed DOM must be identical. No prose/URL/footer/asset omission allowed.','rows':rows,'failures':[r for r in rows if not r['equivalentExceptDeclaredChanges']]};(D/'EXISTING_OUTPUT_COMPARISON.json').write_text(json.dumps(out,indent=2)+'\n');print({'status':out['status'],'files':len(rows),'failures':len(out['failures'])})
