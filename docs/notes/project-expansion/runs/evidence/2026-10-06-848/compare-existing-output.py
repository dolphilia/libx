import pathlib,json,datetime,hashlib
from bs4 import BeautifulSoup,Tag
D=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-06-848');scope=json.loads((D/'PUBLIC_VERIFICATION_SCOPE.json').read_text());old=pathlib.Path('/private/tmp/libx-zstd-production-artifact-841/dist');new=pathlib.Path('/private/tmp/libx-mdbook-preview-artifact-849/dist');rows=[]
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
  z=b.select('a.project-card[href^="/docs/mdbook/"]');assert len(z)==1;lang='ja'if p.startswith('ja/')else'en';assert z[0]['href']=='/docs/mdbook/v0-5-4/'+lang+'/01-guide/01-index';spacing=z[0].next_sibling;assert isinstance(spacing,str)and not spacing.strip();spacing.extract();z[0].extract();kind.append('new mdBook card and its separating space only')
 if p.startswith('docs/gperf/') and '01-user-guide' in p:
  x=a.select('head link[rel="stylesheet"]');y=b.select('head link[rel="stylesheet"]');assert sorted(map(str,x))==sorted(map(str,y));
  for t in x+y:t.extract()
  kind.append('same two stylesheet tags in different order; native rendering check required')
 if p.startswith('docs/xxhash/'):kind.append('same sidebar notice sibling set; order variation')
 if p.count('/')<=5 and p.startswith('docs/'):kind.append('same category/card sets; order variation')
 if p in ['docs/sample-docs/v2/'+lang+'/'+chapter+'/index.html' for lang in ['en','ja'] for chapter in ['01-guide/04-organizing-content','02-components/01-overview','02-components/02-icons']]:
  x=a.select('pre code');y=b.select('pre code');assert len(x)==len(y)
  for u,v in zip(x,y):
   assert u.get_text()==v.get_text(),p;assert u.attrs==v.attrs and u.parent.attrs==v.parent.attrs,p
   raw=u.get_text();u.clear();v.clear();u.append(raw);v.append(raw)
  kind.append('same exact code characters/code and pre attributes; syntax token span/color variation only; native reading check required')
 ok=normalize(a)==normalize(b)
 rows.append({'path':p,'equivalentExceptDeclaredChanges':ok,'classification':kind,'articleAndFooterUnchanged':p.startswith('docs/') and str(a.select_one('article'))==str(b.select_one('article'))})
 if not ok:
  x=normalize(a);y=normalize(b);i=next((i for i,(u,v)in enumerate(zip(x,y))if u!=v),min(len(x),len(y)));print(json.dumps({'path':p,'old':x[i-80:i+200],'new':y[i-80:i+200]}))
out={'status':'passed'if all(r['equivalentExceptDeclaredChanges']for r in rows)else'failed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'oldCommit':scope['baseCommit'],'commit':scope['commit'],'comparedChangedOldFiles':len(rows),'method':'Only added mdBook card, sibling order in existing sidebar/category/card containers, two unchanged gperf stylesheet tags, and six named sample pages with exact code characters/pre-code attributes are treated explicitly. The last case ignores only inner highlighting spans after verifying the full code text; native reading is separate. All remaining parsed DOM must be identical. No prose/URL/footer/asset omission allowed.','rows':rows,'failures':[r for r in rows if not r['equivalentExceptDeclaredChanges']]};(D/'EXISTING_OUTPUT_COMPARISON.json').write_text(json.dumps(out,indent=2)+'\n');print({'status':out['status'],'files':len(rows),'failures':len(out['failures'])})
