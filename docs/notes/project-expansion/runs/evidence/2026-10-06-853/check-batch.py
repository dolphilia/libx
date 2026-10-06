from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlsplit,unquote
from collections import Counter
import json,re,hashlib,datetime,subprocess,tempfile
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/rapidjson/v1-1-0';E=Path(__file__).parent;A=Path('/private/tmp/libx-rapidjson-formal-853/apps/rapidjson');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();routes=json.loads((N/'regeneration/ROUTES.json').read_text());targets={};rows=[];pending=[];links=0
def shape(n):
 if n.name is None:return str(n)
 attrs=dict(n.attrs)
 if n.name=='area'and'coords'in attrs:
  values=re.split(r'[,\s]+',attrs['coords'].strip());assert all(re.fullmatch(r'-?[0-9]+',v)for v in values);attrs['coords']=[int(v)for v in values]
 return {'name':n.name,'attributes':attrs,'children':[shape(x)for x in n.children if not(n.name in ['div','main']and x.name is None and not str(x).strip())]}
dom=lambda p:BeautifulSoup(p.read_text().split('---\n',2)[2],'html.parser')
program=lambda d:[x.get_text()for x in d.select('.line,pre,.ttname,.ttdeci,.ttdef')]
attrs=lambda d:[(x.name,x.get('href'),x.get('src'),x.get('id'))for x in d.select('a,area,img')]
with tempfile.TemporaryDirectory(prefix='rapidjson-replay-853-')as tmp:
 subprocess.run(['python3',str(N/'regeneration/regenerate.py'),'--notes',str(N),'--output',tmp],check=True,capture_output=True)
 for p in (N/'canonical/en').rglob('*.md'):assert sha(p)==sha(Path(tmp)/p.relative_to(N/'canonical/en'))
for lang,folder in [('en','canonical'),('ja','translations')]:
 for p in sorted((N/folder/lang).rglob('*.md')):
  id=str(p.relative_to(N/folder/lang));route=f'v1-1-0/{lang}/'+id[:-3];q=A/'src/content/docs'/route;paged=dom(p);b=paged.select_one('.rapidjson-document');assert b;assert sha(p)==sha(q.with_suffix('.md')),(id,'app source hash');rendered=BeautifulSoup((A/'dist'/route/'index.html').read_text(),'html.parser');rb=rendered.select_one('.rapidjson-document');assert shape(b)==shape(rb),(id,lang,'rendered DOM');assert not rendered.select('script[src*="doxygen"],script[src*="rapidjson-source"],iframe');targets['/docs/rapidjson/'+route]=(b,rb)
  if lang=='en':
   old=next(k for k,v in routes['routes'].items()if v+'.md'==id);original=dom(N/'regeneration/inputs'/(old+'.md')).select_one('.rapidjson-document')
   for x in original.select('[href],[src]'):
    for attr in ['href','src']:
     if attr not in x.attrs:continue
     h=x[attr];prefix='/docs/rapidjson-static-trial/v1-1-0/en/01-docs/'
     if h.startswith(prefix):base,sep,suffix=h[len(prefix):].partition('/');x[attr]='/docs/rapidjson/v1-1-0/en/'+routes['routes'][base]+'/'+suffix
     elif h.startswith('/docs/rapidjson-static-trial/'):x[attr]=h.replace('/docs/rapidjson-static-trial/','/docs/rapidjson/',1)
   assert shape(original)==shape(b),(id,'old original retention')
  else:
   en=dom(N/'canonical/en'/id).select_one('.rapidjson-document');assert program(en)==program(b),(id,'program code');assert Counter(x.get_text()for x in en.select('.tt'))==Counter(x.get_text()for x in b.select('.tt')),(id,'inline literal');expected=[(tag,h.replace('/v1-1-0/en/01-guide/','/v1-1-0/ja/01-guide/')if h else h,s,i)for tag,h,s,i in attrs(en)];assert Counter(attrs(b))==Counter(expected),(id,'link/images/anchors');assert [(x.name,x.get('id'))for x in en.select('h1,h2,h3,h4,h5,h6,td,th,p,li,blockquote')]==[(x.name,x.get('id'))for x in b.select('h1,h2,h3,h4,h5,h6,td,th,p,li,blockquote')],(id,'structure')
  rows.append({'id':id,'language':lang,'sha256':sha(p),'renderedBodyExact':True,'programCodePreserved':True,'staticDefinitionBlocks':len(b.select('.ttc'))})
for route,(b,rb)in targets.items():
 for a in b.select('a[href],area[href]'):
  h=a['href'];u=urlsplit(h)
  if h.startswith('#'):assert rb.find(id=unquote(u.fragment)),(route,h);continue
  if not h.startswith('/docs/rapidjson/'):continue
  target=targets.get(u.path.rstrip('/'))
  if target is None and '/ja/01-guide/'in u.path:
   target=targets.get(u.path.rstrip('/').replace('/ja/01-guide/','/en/01-guide/'));assert target,(route,h);pending.append({'from':route,'target':h,'status':'pending-Japanese-page','EnglishOriginalTargetAndAnchorChecked':True})
  if target:
   if u.fragment:assert target[1].find(id=unquote(u.fragment)),(route,h)
  else:assert(A/'public'/u.path.removeprefix('/docs/rapidjson/')).is_file(),(route,h)
  links+=1
materials=[]
for p in sorted((N/'regeneration/public').rglob('*')):
 if p.is_file():id=p.relative_to(N/'regeneration/public');assert sha(p)==sha(A/'public'/id)==sha(A/'dist'/id);materials.append({'path':str(id),'sha256':sha(p)})
assert len(rows)==223 and sum(r['language']=='ja'for r in rows)==5 and len(materials)==23
out={'status':'passed-batch-scope','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'EnglishOriginals':218,'JapaneseReviewedBatch':5,'remainingJapaneseGuides':8,'deterministicENReplay':218,'originalBodyDOMRetainedExceptExplicitRoutes':218,'renderedBodiesExact':223,'codeAndInlineLiteralsPreserved':5,'linksChecked':links,'pendingJapaneseLinks':pending,'materialsPreserved':materials,'rows':rows,'limitations':['8ガイドの訳/意味reviewとJA全リンク閉包は未完。API205は未翻訳原文参照・全文意味reviewを主張しない。','全体統合/正式release/source-offer/公開未検証。原文の技術監査/コード実行は追加しない。']};(E/'BATCH_CHECK.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print({k:v for k,v in out.items()if k not in ['rows','materialsPreserved','pendingJapaneseLinks','limitations']});print('Pending Japanese links',len(pending))
