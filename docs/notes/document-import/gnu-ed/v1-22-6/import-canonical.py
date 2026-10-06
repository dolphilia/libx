"""Replay fixed English inputs and saved Japanese drafts into the isolated app.
No translation or meaning approval is granted by generation.
"""
from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import json,re,hashlib,shutil
N=Path(__file__).resolve().parent;W=N.parents[4];A=W/'apps/gnu-ed';assert A.exists(),'Run only in the formal isolated app checkout'
h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();C=json.loads((N/'CANDIDATE_DRAFT.json').read_text());M=json.loads((N/'SOURCE_MANIFEST.json').read_text())
for r in M['files']:assert h(N/r['path'])==r['sha256']
context=json.loads((N/'drafts/notice-context.json').read_text());config=(N/'drafts/project.config.jsonc').read_text();rows=C['proposedScope']['rows'];anchors={};heads={};items=[]
for row in rows+[{'slug':'01-gfdl','sourceNode':'GNU-Free-Documentation-License','EnglishDraftPath':'drafts/reference/gfdl.body.html'}]:
 route=('02-reference/' if row['slug']=='01-gfdl' else '01-guide/')+row['slug']
 v=BeautifulSoup((N/row['EnglishDraftPath']).read_text(),'html.parser');anchors[row['sourceNode']]=route
 for x in v.select('[id]'):anchors[x['id']]=route
for row in rows+[{'slug':'01-gfdl','sourceNode':'GNU-Free-Documentation-License','EnglishDraftPath':'drafts/reference/gfdl.body.html'}]:
 slug=row['slug'];reference=slug=='01-gfdl';route=('02-reference/'if reference else'01-guide/')+slug+'.md';en=N/row['EnglishDraftPath'];fragment=N/'source-fragments/en'/route.replace('.md','.html');fragment.parent.mkdir(parents=True,exist_ok=True);fragment.write_bytes(en.read_bytes());pair=[]
 for lang in ['en','ja']:
  if reference and lang=='ja':continue
  src=en if lang=='en'else N/'drafts/ja'/(slug+'.body.html')
  if not src.exists():continue
  v=BeautifulSoup(src.read_text(),'html.parser');title=re.sub(r'^\d+\s+','',v.find(re.compile('^h[1-6]$')).get_text(' ',strip=True).replace('¶','').strip());ctx=context
  if reference:
   title='Original English GNU Free Documentation License';q=BeautifulSoup(context[0]['html'],'html.parser');q.find('details').decompose();ctx=[{'kind':'source','html':str(q)}]
  for a in v.select('a[href]'):
   if a['href'].startswith('#'):
    target=a['href'][1:];assert target in anchors,(slug,target);a['href']='/docs/gnu-ed/v1-22-6/'+('en'if anchors[target].startswith('02-reference/')else lang)+'/'+anchors[target]+'#'+target
  literal={}
  for i,pre in enumerate(v.select('pre')):
   key=f'LIBX_ED_PRE_{i}_END';literal[key]=str(pre).replace('\n','&#10;').replace('\t','&#9;').replace('`','&#96;').replace('*','&#42;').replace('_','&#95;');pre.replace_with(NavigableString(key))
  body=str(v)
  for k,value in literal.items():body=body.replace(k,value)
  front={'title':title,'description':'GNU ed1.22.6 fixed original manual.'if lang=='en'else'GNU ed1.22.6固定原文の独立・非公式日本語訳。','documentId':'gnu-ed:1.22.6:'+slug,'licenseSource':'gnu-ed-manual','toc':{'maxLevel':4},'documentContext':ctx};md='---\n'+''.join(k+': '+json.dumps(value,ensure_ascii=False)+'\n'for k,value in front.items())+'---\n\n<div class="gnu-ed-original-content">'+body+'</div>\n'
  for base in [N/'canonical'/lang,A/'src/content/docs/v1-22-6'/lang,A/'public/source/v1-22-6/edited'/lang]:
   p=base/route;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(md)
  heads['v1-22-6/'+lang+'/'+route.removesuffix('.md')]=[{'depth':int(x.name[1]),'slug':x['id'],'text':x.get_text(' ',strip=True).replace('¶','').strip()}for x in v.find_all(re.compile('^h[1-6]$'))if x.has_attr('id')];pair.append({'language':lang,'path':'canonical/'+lang+'/'+route,'sha256':h(N/'canonical'/lang/route),'bodySHA256':h(src)})
 items.append({'id':route,'sourceNode':row['sourceNode'],'source':{'path':str(fragment.relative_to(N)),'sha256':h(fragment)},'outputs':pair,'review':'pending'if not reference else'English-original-license-reference'})
for p in [A/'src/content/docs/v1',A/'public/search/v1']:
 if p.exists():shutil.rmtree(p)
for p in (A/'public/sidebar').glob('*-v1.json'):p.unlink()
(A/'src/config/project.config.jsonc').write_text(config);(A/'src/data').mkdir(exist_ok=True);(A/'src/data/document-headings.json').write_text(json.dumps(heads,ensure_ascii=False,indent=2)+'\n');(A/'src/styles/global.css').write_text("@import '@docs/theme/css/starlight-overrides.css';\n.gnu-ed-original-content pre { max-width: 100%; min-width: 0; overflow-x: auto; white-space: pre; tab-size: 4; }\n.gnu-ed-original-content pre code { white-space: pre; }\n.gnu-ed-original-content dd { min-width: 0; }\n.document-provenance .attribution-text { overflow-wrap: anywhere; }\n")
P=A/'public/source/v1-22-6';P.mkdir(parents=True,exist_ok=True);raw=(N/'source/derived-manual.html').read_bytes();decoded=raw.decode('iso-8859-15');served=decoded.replace('charset=iso-8859-15','charset=utf-8');assert served != decoded;assert served.replace('charset=utf-8','charset=iso-8859-15')==decoded;(P/'manual.html').write_text(served,encoding='utf-8');(N/'ENCODING_TRANSFORM.json').write_text(json.dumps({'sourceSHA256':hashlib.sha256(raw).hexdigest(),'sourceEncoding':'ISO-8859-15','servedEncoding':'UTF-8','servedSHA256':h(P/'manual.html'),'onlyDecodedChange':'meta charset=iso-8859-15 to charset=utf-8','decodedTextRoundTrip':True,'originalArchiveAndTexinfoPreserved':True},indent=2)+'\n')
for f in M['files']:
 rel=f['path'].removeprefix('source/')
 if rel=='derived-manual.html':continue
 p=P/'original'/rel;p.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(N/f['path'],p)
(N/'CONTENT_MAP.json').write_text(json.dumps({'schemaVersion':1,'version':'1.22.6','guidePages':12,'referenceEnglishOnly':['02-reference/01-gfdl.md'],'items':items,'meaningReview':'pending','contextAndRendererVerification':'pending'},ensure_ascii=False,indent=2)+'\n');print('GNU ed canonical outputs',sum(len(x['outputs'])for x in items),'meaningreview0')
