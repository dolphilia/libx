from pathlib import Path
from bs4 import BeautifulSoup
import json,re,hashlib,datetime,collections
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/wren/v0-4-0';E=Path(__file__).parent;W=Path('/private/tmp/libx-wren-formal-864');rows=[]
for unitfile in sorted(E.glob('*-units.json')):
 stem=unitfile.name.removesuffix('-units.json');u=json.loads(unitfile.read_text());d=json.loads((E/(stem+'-ja-draft.json')).read_text());assert len(d)==len(u['units']),stem
 src=N/'canonical/en'/u['page'];raw=src.read_text();assert hashlib.sha256(raw.encode()).hexdigest()==u['sourceCanonicalSHA256']
 front,body=raw.split('---\n',2)[1:];s=BeautifulSoup(body,'html.parser');root=s.select_one('.wren-document');nodes=[n for n in root.find_all(['h1','h2','h3','h4','h5','h6','p','li','dt','dd','th','td']) if not n.find_parent(['pre','code','li','dt','dd','th','td'])];assert len(nodes)==len(d)
 for n,unit,ja in zip(nodes,u['units'],d):
  assert n.name==unit['tag'] and n.decode_contents()==unit['originalInnerHTML']
  assert collections.Counter(re.findall(r'⟦(?:PRE|CODE)\d+⟧',ja))==collections.Counter(x['token'] for x in unit['protected']), (u['page'],unit['id'])
  for t in unit['protected']:ja=ja.replace(t['token'],t['html'])
  translated=BeautifulSoup(ja,'html.parser');n.clear()
  for child in list(translated.contents):n.append(child)
 def code_values(x):return [p.get_text() for p in x.select('pre')]
 original=BeautifulSoup(body,'html.parser');assert code_values(s)==code_values(original)
 assert collections.Counter(p.get_text() for p in s.select('code'))==collections.Counter(p.get_text() for p in original.select('code')),u['page']
 assert [(x.name,len(x.find_all('li',recursive=False))) for x in s.select('ul,ol')]==[(x.name,len(x.find_all('li',recursive=False))) for x in original.select('ul,ol')]
 assert [x.name for x in s.select('h1,h2,h3,h4,h5,h6')]==[x.name for x in original.select('h1,h2,h3,h4,h5,h6')]
 front=re.sub(r'^title: .+$','title: '+json.dumps(u['titleJA'],ensure_ascii=False),front,flags=re.M)
 translated_body=re.sub(r'<pre\b[^>]*>[\s\S]*?</pre>',lambda m:m[0].replace('\n','&#10;'),str(s))
 out='---\n'+front+'---\n'+translated_body+'\n';p=N/'canonical/ja'/u['page'];p.parent.mkdir(parents=True,exist_ok=True);p.write_text(out)
 dest=W/'apps/wren/src/content/docs/v0-4-0/ja'/u['page'];dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(out)
 pair='\n\n'.join(x['id']+' ['+x['tag']+']\nEN: '+x['sourceHTML']+'\nJA: '+ja for x,ja in zip(u['units'],d));(E/(stem+'-review-pair.txt')).write_text(pair+'\n')
 rows.append({'page':u['page'],'proseBlocks':len(d),'codeBlocks':len(code_values(s)),'sourceSHA256':hashlib.sha256(raw.encode()).hexdigest(),'draftSHA256':hashlib.sha256((E/(stem+'-ja-draft.json')).read_bytes()).hexdigest(),'translationSHA256':hashlib.sha256(out.encode()).hexdigest(),'headings':len(s.select('h1,h2,h3,h4,h5,h6')),'lists':len(s.select('ul,ol')),'codeAndStructureExact':True,'fullMeaningReview':'pending'})
out={'status':'draft-materialized','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'pages':rows,'proseBlocks':sum(r['proseBlocks'] for r in rows),'codeBlocks':sum(r['codeBlocks'] for r in rows),'scope':'Final batch3 Wren guide translations only;17 English API references/original licence unchanged. Structural/code checks do not constitute meaning review.'}
(E/'DRAFT_ASSEMBLY.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in out.items() if k!='pages'},ensure_ascii=False))
