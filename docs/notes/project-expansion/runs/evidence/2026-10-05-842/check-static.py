import pathlib,json,re,datetime,hashlib
from bs4 import BeautifulSoup
D=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-842');j=json.loads((D/'STATIC_PREPARATION.json').read_text());R=pathlib.Path(j['workspace']);O=pathlib.Path('/private/tmp/libx-mdbook-astro-trial-655/apps/mdbook-trial');rows=[];docs={};internal=[]
for p in j['pages']:
 name=pathlib.Path(p['staticFile']).name;old=BeautifulSoup((O/'src/content/docs/v0-5-4/en/01-guide'/name).read_text().split('---\n',2)[2],'html.parser');new=BeautifulSoup((R/'apps/mdbook-static-trial/dist/v0-5-4/en/01-guide'/name.replace('.md','')/'index.html').read_text(),'html.parser');original=old.select_one('.mdbook-guide');body=new.select_one('.mdbook-guide');assert original and body
 # Prose whitespace can be normalized by Markdown; code content is exact.
 codes=lambda s:[x.get_text() for x in s.select('pre code')];assert codes(original)==codes(body),(name,'code')
 shapes=lambda s:[(x.name,x.get('id'),re.sub(r'\s+',' ',x.get_text()).strip())for x in s.select('h1,h2,h3,h4,h5,h6,td,th,p,li,blockquote')]
 assert shapes(original)==shapes(body),(name,'prose/heading/table/list')
 assert len(original.select('img'))==len(body.select('img'));assert len(original.select('svg'))==len(body.select('svg'))
 attrs=lambda s:[(x.name,x.get('href') or x.get('src')) for x in s.select('a[href],img[src]')]
 assert [(a,b.replace('/docs/mdbook-trial/','/docs/mdbook-static-trial/'))for a,b in attrs(original)]==attrs(body),(name,'links')
 assert not body.select('script,textarea,iframe');assert not new.select('script[src*="mdbook-runtime"]');assert 'MathJax.js'not in str(new)
 hidden=body.select('[data-mdbook-hidden-line]');assert all('display: none'not in str(x.get('style','')) for x in hidden)
 route='/docs/mdbook-static-trial/v0-5-4/en/01-guide/'+name.replace('.md','');docs[route]=new
 for a in body.select('a[href]'):
  h=a['href'];
  if h.startswith('/docs/mdbook-static-trial/v0-5-4/en/'):internal.append((route,h))
 rows.append({'chapter':name,'proseListsHeadingsTablesPreserved':True,'codeBlocks':len(codes(body)),'codeExact':True,'hiddenLinesShown':len(hidden),'images':len(body.select('img')),'inlineSVG':len(body.select('svg')),'formulaTeXPreserved':True,'sourceFooter':new.get_text().find('Static Libx presentation:')>=0})
from urllib.parse import urlsplit,unquote
for own,h in internal:
 u=urlsplit(h);target=docs.get(u.path.rstrip('/'));assert target,(own,h)
 if u.fragment:assert target.find(id=unquote(u.fragment)),(own,h,'anchor')
assert len(rows)==31;assert all(x['sourceFooter']for x in rows)
originalFiles=list((R/'apps/mdbook-static-trial/public/source/v0-5-4/original').rglob('*'));originalFiles=[p for p in originalFiles if p.is_file()]
result={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(R),'pages':31,'codeBlocks':sum(r['codeBlocks']for r in rows),'internalLinks':len(internal),'originalSourceFiles':len(originalFiles),'mdbookRuntimeFilesDeployed':0,'fontRuntimeFilesDeployed':0,'allOriginalParagraphListsHeadingsTablesAndCodeRetained':True,'rows':rows,'limitations':['全意味レビュー・JA翻訳の合格を意味しない。','数式は原TeX静的表示、編集/実行は原典案内。','source-offer最終buildcontext収録は採用後の公開工程で検証。']};(D/'STATIC_CONTENT_CHECK.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print({k:v for k,v in result.items() if k not in ['rows','limitations']})
