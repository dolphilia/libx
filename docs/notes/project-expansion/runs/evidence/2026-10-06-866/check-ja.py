from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,re,datetime
R=Path('/Users/dolphilia/github/libx');E=Path(__file__).parent;N=R/'docs/notes/document-import/wren/v0-4-0';A=Path('/private/tmp/libx-wren-formal-864/apps/wren');V='v0-4-0'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
norm=lambda s:re.sub(r'\s+',' ',s).strip()
a=json.loads((E/'DRAFT_ASSEMBLY.json').read_text());review=json.loads((E/'REVIEW_FROZEN.json').read_text());assert review['completedPages']==4
old=json.loads((R/'docs/notes/project-expansion/runs/evidence/2026-10-06-864/EN_CHECK.json').read_text())
previous=json.loads((E/'REVIEW_MANIFEST_BEFORE.json').read_text())
assert previous['completedPages']==8
for r in previous['pages']:
 if r['status']!='passed':continue
 p=R/r['translation']['path'];assert sha(p)==r['translation']['sha256']
 assert p.read_bytes()==(A/'src/content/docs'/V/'ja'/r['id']).read_bytes()
for x in old['rows']:
 assert sha(N/'canonical/en'/x['id'])==x['canonicalSha256']
 assert (N/'canonical/en'/x['id']).read_bytes()==(A/'src/content/docs'/V/'en'/x['id']).read_bytes()
headingMap=json.loads((A/'src/data/document-headings.json').read_text());records=[];links=0;parsed={}
def get_route(url):
 assert url.startswith('/docs/wren/'+V+'/');lang,rest=url.removeprefix('/docs/wren/'+V+'/').split('/',1)
 path=A/'dist'/V/lang/rest/'index.html';assert path.exists(),url
 if url not in parsed:
  soup=BeautifulSoup(path.read_text(),'html.parser');parsed[url]=(soup,{n.get('id') for n in soup.find_all(attrs={'id':True})}|{n.get('name') for n in soup.find_all('a',attrs={'name':True})})
 return parsed[url]
for row,r in zip(a['pages'],review['pages']):
 p=N/'canonical/ja'/row['page'];assert sha(p)==row['translationSHA256']==r['translationSHA256']
 assert p.read_bytes()==(A/'src/content/docs'/V/'ja'/row['page']).read_bytes()
 expected=BeautifulSoup(p.read_text().split('---\n',2)[2],'html.parser').select_one('.wren-document')
 path='/docs/wren/'+V+'/ja/'+row['page'].removesuffix('.md')+'/';soup,anchors=get_route(path);actual=soup.select_one('.wren-document');assert actual
 for b in actual.select('button.docs-code-copy'):b.decompose()
 assert norm(expected.get_text())==norm(actual.get_text()),('text',row['page'])
 code=lambda s:[x.get_text() for x in s.select('pre')]
 assert code(expected)==code(actual),('code',row['page'])
 en=BeautifulSoup((N/'canonical/en'/row['page']).read_text().split('---\n',2)[2],'html.parser').select_one('.wren-document');assert code(en)==code(actual)
 hs=lambda s:[(h.name,norm(h.get_text())) for h in s.find_all(re.compile('^h[1-6]$'))]
 assert hs(expected)==hs(actual)
 table=lambda s:[[(c.name,norm(c.get_text())) for c in t.find_all(['th','td'])] for t in s.select('table')]
 assert table(expected)==table(actual)
 for h in headingMap[V+'/ja/'+row['page'].removesuffix('.md')]:
  assert h['slug'] in anchors
  assert any(x.get('href')=='#'+h['slug'] and norm(x.get_text())==h['text'] for x in soup.find_all('a')),('toc',row['page'],h)
 for aTag in expected.find_all('a',href=True):
  url=aTag['href']
  if url.startswith('#'):target=path;frag=url[1:]
  elif url.startswith('/docs/wren/'+V+'/'):target,_,frag=url.partition('#')
  else:continue
  _,targetAnchors=get_route(target);assert not frag or frag in targetAnchors,(path,url);links+=1
 records.append({'page':row['page'],'translationSHA256':sha(p),'renderedSHA256':sha(A/'dist'/V/'ja'/row['page'].removesuffix('.md')/'index.html'),'proseBlocks':row['proseBlocks'],'codeBlocks':len(code(actual)),'tocHeadings':len(headingMap[V+'/ja/'+row['page'].removesuffix('.md')]),'renderedTextCodeHeadingsTableCellsExact':True})
assert sum(x['codeBlocks'] for x in records)==69
out={'status':'passed-batch-Japanese-rendering','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'JapanesePages':4,'sourceWords':5113,'proseBlocks':200,'codeBlocks':69,'internalLinks':links,'reusedEnglishCanonicalPages':42,'pendingJapanesePages':12,'rows':records,'scope':'Only four completed Japanese draft bodies and their links/TOC validated. English42 fixed canonical/source/code evidence from864 reused by unchanged input hashes. All guide links remain existing English until Japanese24 completion. Formal source offer/full navigation/integration/Pages publication pending;first8 Japanese bodies unchanged/evidence reused.'}
(E/'JA_CHECK.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in out.items() if k not in ['rows','scope']},ensure_ascii=False))
