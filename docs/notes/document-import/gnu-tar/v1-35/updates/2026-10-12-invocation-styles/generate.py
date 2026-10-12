from pathlib import Path
from bs4 import BeautifulSoup
import copy, json, re, hashlib, sys

U=Path(__file__).resolve().parent
N=U.parents[1]
W=Path(sys.argv[1]) if len(sys.argv)>1 else U.parents[6]
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
S=BeautifulSoup((N/'source/derived/manual.html').read_text(),'html.parser')
manifest=json.loads((N/'SOURCE_MANIFEST.json').read_text())
for f in manifest['files']: assert sha(N/f['path'])==f['sha256']
old=json.loads((N/'CANONICAL_GENERATION.json').read_text())['rows']
nodes=[h.parent for h in S.find(id='tar-invocation').find_all(re.compile('^h[1-6]$'))][:8]
assert [n['id'] for n in nodes]==['tar-invocation','Synopsis','using-tar-options','Styles','Long-Options','Short-Options','Old-Options','Mixing']
routes={n['id']:f"01-guide/{i+32:02d}-{n['id'].lower()}.md" for i,n in enumerate(nodes)}
ids={r['id']:r['page'] for r in old}
# Preserve all existing section/index anchors when resolving cross-references.
for r in old:
 s=BeautifulSoup((N/'preferred/en'/r['page']).read_text().split('---',2)[2],'html.parser')
 for x in s.select('.gnu-tar-original-content [id]'):ids[x['id']]=r['page']
parts={}
for n in nodes:
 c=copy.deepcopy(n)
 for x in c.select('.nav-panel,.copiable-link,div[class$="-level-extent"]'):x.decompose()
 parts[n['id']]=c
 for x in [c,*c.select('[id]')]:
  if x.get('id'):assert x['id']not in ids;ids[x['id']]=routes[n['id']]
for foot in ['FOOT2','FOOT3','FOOT4']:
 key=next(k for k,c in parts.items() if c.select_one('a[href="#'+foot+'"]'))
 h=S.find(id=foot).parent
 parts[key].append(copy.deepcopy(h))
 parts[key].append(copy.deepcopy(h.find_next_sibling('p')))
 ids[foot]=routes[key]
raw=(N/'preferred/en/01-guide/01-introduction.md').read_text()
ctx=json.loads(next(x for x in raw.splitlines() if x.startswith('documentContext: ')).split(': ',1)[1])
ctx=copy.deepcopy(ctx)
for c in ctx:
 c['html']=c['html'].replace('Libx GNU tar 1.35 Introduction and Tutorial / Libx GNU tar 1.35 入門とチュートリアル','Libx GNU tar 1.35 Invocation and Option Styles / Libx GNU tar 1.35 呼び出しとオプション形式')
 c['html']=c['html'].replace('Complete chapters1–2 and footnote1 represented','Sections3–3.3.4 represented')
 c['html']=c['html'].replace('11October2026:','12October2026:')
rows=[]
for key,c in parts.items():
 f=U/'source-fragments'/Path(routes[key]).with_suffix('.html');f.parent.mkdir(parents=True,exist_ok=True);f.write_text(str(c)+'\n')
 for a in c.select('a[href]'):
  x=a['href']
  if x.startswith('#'):a['href']='/docs/gnu-tar/v1-35/en/'+ids[x[1:]][:-3]+'/#'+x[1:] if x[1:]in ids else '/docs/gnu-tar/source/v1-35/manual.html'+x
 title=c.find(re.compile('^h[1-6]$')).get_text(' ',strip=True)
 p=U/'preferred/en'/routes[key];p.parent.mkdir(parents=True,exist_ok=True)
 p.write_text('---\ntitle: '+json.dumps(title,ensure_ascii=False)+'\nlicenseSource: gnu-tar-manual\ndocumentContext: '+json.dumps(ctx,ensure_ascii=False)+'\n---\n\n<div class="gnu-tar-original-content">'+str(c)+'</div>\n')
 rows.append({'sourceId':key,'page':routes[key],'title':title,'words':len(c.get_text().split()),'pre':len(c.select('pre')),'sourceFragmentSHA256':sha(f),'enSHA256':sha(p)})
out={'status':'canonical-draft-not-content-reviewed','scope':'GNU tar1.35 sections3–3.3.4 inclusive; remaining3.4–3.11 and subsequent chapters point to fixed full original. Existing31guides+2references unchanged.','sourceHTMLSHA256':sha(N/'source/derived/manual.html'),'sourceManifestSHA256':sha(N/'SOURCE_MANIFEST.json'),'rows':rows,'words':sum(r['words'] for r in rows),'pre':sum(r['pre'] for r in rows),'publicationBase':'bbef8318a4cfc811bec31b5452f5b24b4dad2e2b','bodyTransform':'Remove upstream nav/selflinks; split nested hierarchy without deleting child text; preserve prose/code/IDs and direct remaining sections to fixed complete original.'}
(U/'PAGE_PLAN.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
print('Canonical draft',len(rows),'pages',out['words'],'words',out['pre'],'pre; all fixed source hashes verified')
