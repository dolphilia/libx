from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,re,datetime
from collections import Counter
from urllib.parse import urlsplit,unquote
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/mdbook/v0-5-4';E=R/'docs/notes/project-expansion/runs/evidence/2026-10-05-844';W=Path('/private/tmp/libx-mdbook-formal-843/apps/mdbook');T=Path('/private/tmp/libx-mdbook-static-842/apps/mdbook-static-trial');m=json.loads((N/'CONTENT_MAP.json').read_text());sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();dom=lambda p:BeautifulSoup(p.read_text().split('---\n',2)[2],'html.parser');body=lambda d:d.select_one('.mdbook-guide');codes=lambda d:[x.get_text()for x in d.select('code')];attrs=lambda d:[(x.name,x.get('href')or x.get('src'))for x in d.select('a[href],img[src]')];shape=lambda d:[(x.name,x.get('id'))for x in d.select('h1,h2,h3,h4,h5,h6,td,th,p,li,blockquote')];textshape=lambda d:[(x.name,x.get('id'),re.sub(r'\s+',' ',x.get_text()).strip())for x in d.select('h1,h2,h3,h4,h5,h6,td,th,p,li,blockquote')];svg=lambda d:[str(x)for x in d.select('svg')];allDocs={};rows=[];pending=[];links=0
prior=json.loads((R/'docs/notes/project-expansion/runs/evidence/2026-10-05-843/BATCH_CHECK.json').read_text());reuse={(r['id'],r['language']):r for r in prior['rows']};newRows=[]
for p in m['pages']:
 name=Path(p['id']).name;c=N/'canonical/en'/p['id'];assert sha(N/'source/original'/(p['sourcePath']+'.txt'))==p['source']['sha256'];b=body(dom(c));assert sha(c)==reuse[(p['id'],'en')]['sha256']
 for lang,role in [('en','canonical'),('ja','translations')]:
  q=N/role/lang/p['id']
  if not q.exists():continue
  d=dom(q);bb=body(d);r=BeautifulSoup((W/'dist/v0-5-4'/lang/'01-guide'/name[:-3]/'index.html').read_text(),'html.parser');rb=body(r)
  if (p['id'],lang)in reuse:assert sha(q)==reuse[(p['id'],lang)]['sha256'];assert sha(q)==sha(W/'src/content/docs/v0-5-4'/lang/p['id'])==sha(W/'public/source/v0-5-4/edited'/lang/name)
  else:
   d=dom(q);bb=body(d);r=BeautifulSoup((W/'dist/v0-5-4'/lang/'01-guide'/name[:-3]/'index.html').read_text(),'html.parser');rb=body(r);assert rb;assert codes(rb)==codes(bb);assert textshape(rb)==textshape(bb);assert svg(rb)==svg(bb);assert attrs(rb)==attrs(bb);assert not d.select('aside');assert not rb.select('script,textarea,iframe');assert 'MathJax.js'not in str(r);assert 'Static Libx presentation:'in r.get_text() if lang=='en' else 'Libxでは全文・コード・図・原目次を静的に提供します。'in r.get_text();assert sha(q)==sha(W/'src/content/docs/v0-5-4'/lang/p['id'])==sha(W/'public/source/v0-5-4/edited'/lang/name);newRows.append(p['id'])
  if lang=='ja'and(p['id'],lang)not in reuse:assert [x.get_text()for x in bb.select('pre code')]==[x.get_text()for x in b.select('pre code')];assert Counter(codes(bb))==Counter(codes(b));assert [Counter(x.get_text()for x in para.select('code'))for para in bb.select('p')]==[Counter(x.get_text()for x in para.select('code'))for para in b.select('p')];assert shape(bb)==shape(b);assert svg(bb)==svg(b);assert attrs(bb)==[(a,h.replace('/v0-5-4/en/','/v0-5-4/ja/'))for a,h in attrs(b)]
  route='/docs/mdbook/v0-5-4/'+lang+'/01-guide/'+name[:-3];allDocs[route]=(d,r);rows.append({'id':p['id'],'language':lang,'codes':len(bb.select('pre code')),'SVG':len(svg(bb)),'codeTextExact':True,'renderedBodyRetained':True,'originalTextShapes':lang=='en','footerNotice':True,'file':str(q.relative_to(R)),'sha256':sha(q)})
for route,(d,r) in allDocs.items():
 for a in d.select('a[href]'):
  h=a['href'];u=urlsplit(h)
  if h.startswith('#'):assert r.find(id=unquote(u.fragment));continue
  if not h.startswith('/docs/mdbook/v0-5-4/'):continue
  links+=1;target=allDocs.get(u.path.rstrip('/'))
  if not target:target=allDocs.get(u.path.rstrip('/').replace('/v0-5-4/ja/','/v0-5-4/en/'));assert target,(route,h);pending.append({'from':route,'target':h,'reason':'Japanese chapter pending; EN target and anchor checked'})
  if u.fragment:assert target[1].find(id=unquote(u.fragment)),(route,h)
result={'status':'passed-batch-scope','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'EN':31,'JA':len(rows)-31,'originalSourceHashChecked':31,'newJapaneseStructuralChecks':len(newRows),'reusedUnchangedChapters':len(reuse),'links':links,'untranslatedTargetLinks':pending,'pendingJapaneseChapters':31-(len(rows)-31),'rows':rows,'limitations':['JA未翻訳章への参照はpending。全JAリンク閉包/全meaning review/正式release未合格。','geometry/icon SVGは既存hash照合と英日DOM一致で確認。本文の意味レビューは別パス記録。','原文の技術監査やサンプル実行は未実施、採用条件にしない。']};(E/'BATCH_CHECK.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print({k:v for k,v in result.items()if k not in ['rows','limitations','untranslatedTargetLinks']});print('Pending JA links:',len(pending))
