from pathlib import Path
from bs4 import BeautifulSoup
import json,copy,hashlib,html,shutil
N=Path(__file__).resolve().parent;R=N.parents[4];A=R/'apps/commonmark';S=N/'source/original';manifest=json.loads((N/'SOURCE_MANIFEST.json').read_text());
for x in manifest['files']:assert hashlib.sha256((R/x['path']).read_bytes()).hexdigest()==x['sha256']
s=BeautifulSoup((S/'official.html').read_bytes(),'html.parser');selected=[]
for h in s.select('h1.definition')[:4]:
 selected.append(copy.copy(h))
 for n in h.next_siblings:
  if n.name=='h1':break
  if n.name:selected.append(copy.copy(n))
f=BeautifulSoup(''.join(str(n) for n in selected),'html.parser');tests={x['example']:x for x in json.loads((S/'tests.json').read_text())}
for ex in f.select('.example'):
 t=tests[int(ex['id'].split('-')[1])];cs=ex.select('pre code');assert len(cs)==2
 for c,k in zip(cs,['markdown','html']):c.clear();c.append(t[k]);c['class']=['language-text']
 for x in ex.select('.dingus'):x.decompose()
 ex['class']=['commonmark-example']
assert len(f.select('.commonmark-example'))==227
for h in f.select('h2'):h.name='h3'
for h in f.select('h1'):h.name='h2';h['data-source-heading']='chapter'
segments={};current=None
for n in f.children:
 if n.name in ['h2','h3']:current=n['id'];segments[current]=[]
 if current and n.name:segments[current].append(copy.copy(n))
plan=json.loads((N/'EN_SEGMENT_DRAFTS.json').read_text())['pages'];frags={p['route']:BeautifulSoup(''.join(str(n) for k in p['sourceHeadings'] for n in segments[k]),'html.parser') for p in plan};idmap={}
for route,p in frags.items():
 for n in p.select('[id]'):assert n['id'] not in idmap;idmap[n['id']]=route
assert len(plan)==14;assert {k for p in plan for k in p['sourceHeadings']}==set(segments)
titles=['Introduction','Characters and Lines','Tabs and Insecure Characters','Backslash Escapes','Entity and Numeric Character References','Blocks and Inlines','Thematic Breaks','ATX Headings','Setext Headings','Indented Code Blocks','Fenced Code Blocks','HTML Blocks','Link Reference Definitions','Paragraphs and Blank Lines'];headings={};rows=[]
def literal_md(tree):
 replacements=[]
 for i,c in enumerate(tree.select('pre code')):
  key=f'LIBX_COMMONMARK_LITERAL_CODE_{i:05d}_END';replacements.append((key,html.escape(c.get_text(),quote=False).replace('\n','&#10;').replace('\t','&#9;')));c.clear();c.append(key)
 body=str(tree)
 for k,v in replacements:assert body.count(k)==1;body=body.replace(k,v)
 return '<div class="commonmark-original-content">\n'+body+'\n</div>\n'
for i,p in enumerate(plan):
 route=p['route'];tree=frags[route]
 for a in tree.select('a[href]'):
  href=a['href']
  if href.startswith('#'):
   key=href[1:]
   if key not in idmap:a['href']='https://spec.commonmark.org/0.31.2/'+href
   elif idmap[key]!=route:a['href']='/docs/commonmark/v0-31-2/en/01-guide/'+idmap[key]+'/'+href
 hs=[{'depth':int(h.name[1]),'slug':h['id'],'text':h.get_text(' ',strip=True)} for h in tree.select('h2,h3')];codes=[hashlib.sha256(x.get_text().encode()).hexdigest() for x in tree.select('pre code')];body=literal_md(tree);assert body==(N/'drafts/en'/ (route+'.md')).read_text(),route
 front='---\ntitle: '+json.dumps(titles[i])+'\ndescription: '+json.dumps('Rules and original examples from CommonMark 0.31.2.')+'\ndocumentId: '+json.dumps('commonmark:0.31.2:'+route)+'\nlicenseSource: commonmark-spec\n---\n\n';md=front+body
 for target in [N/'canonical/en/01-guide'/ (route+'.md'),A/'src/content/docs/v0-31-2/en/01-guide'/(route+'.md'),A/'public/source/v0-31-2/edited/en/01-guide'/(route+'.md')]:target.parent.mkdir(parents=True,exist_ok=True);target.write_text(md)
 headings['v0-31-2/en/01-guide/'+route]=hs;rows.append({'slug':'01-guide/'+route,'title':titles[i],'sourceHeadings':p['sourceHeadings'],'canonical':'docs/notes/document-import/commonmark/v0-31-2/canonical/en/01-guide/'+route+'.md','translation':'docs/notes/document-import/commonmark/v0-31-2/canonical/ja/01-guide/'+route+'.md','examplePairs':len(tree.select('.commonmark-example')),'originalCodeBlocks':len(codes),'originalCodeSHA256':codes,'batch':p['batch'],'translationStatus':'pending','contentReview':'pending'})
assert sum(x['examplePairs'] for x in rows)==227;assert sum(x['originalCodeBlocks'] for x in rows)==471
(A/'src/data').mkdir(exist_ok=True);(A/'src/data/document-headings.json').write_text(json.dumps(headings,ensure_ascii=False,indent=2)+'\n');(N/'CONTENT_MAP.json').write_text(json.dumps({'schemaVersion':1,'project':'commonmark','upstreamVersion':'0.31.2','items':rows,'sourceInputs':manifest['files'],'outsideScope':'Chapters5–6/appendixfixedfullEnglishoriginal/originlinks','JapaneseMeaningReview':'pending'},indent=2)+'\n');(N/'ID_ROUTE_MAP.json').write_text(json.dumps(idmap,indent=2)+'\n');print('CommonMark14ENcanonical exact14drafts/23headings/227pairs/471codeblocks;JA0/review0')
