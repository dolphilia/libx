from pathlib import Path
from bs4 import BeautifulSoup
from collections import Counter
import json,re,hashlib
root=Path('/private/tmp/libx-libuv-screening-676/source');gen=Path('/private/tmp/libx-libuv-normalized-679/generated/html');out=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-680');data=json.load(open('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-676/REFERENCE_MAP.json'));rows=[];used={};cache={};sha=lambda b:hashlib.sha256(b).hexdigest()
for r in data['literalIncludes']:
 page=r['from'].removeprefix('docs/src/').removesuffix('.rst')+'.html';p=root/r['target'];lines=p.read_text().splitlines(keepends=True);opts=dict(x[1:].split(':',1) for x in r['options']);opts={k:v.strip() for k,v in opts.items()};indexes=[];oob=[]
 if 'lines' in opts:
  for term in opts['lines'].split(','):
   term=term.strip()
   if '-' in term:
    a,b=term.split('-',1);start=int(a) if a else 1;end=int(b) if b else len(lines)
   else:start=end=int(term)
   indexes.extend(range(start-1,min(end,len(lines))))
   if end>len(lines):oob.append({'requestedEnd':end,'physicalLineCount':len(lines)})
 else:indexes=list(range(len(lines)))
 expected=''.join(lines[i] for i in indexes);expected=expected if expected.endswith('\n') else expected+'\n';kind='textual-reference-not-graphical' if r['target'] in ['docs/src/static/architecture.txt','docs/src/static/loop_iteration.txt'] else 'graphical-body'
 row={**r,'page':page,'expectedSha256':sha(expected.encode()),'selectedPhysicalLines':[i+1 for i in indexes],'rangeOverflow':oob,'classification':kind}
 if kind=='graphical-body':
  if page not in cache:
   soup=BeautifulSoup((gen/page).read_text(),'html.parser').find('article',role='main')
   for counter in soup.select('span.linenos'):counter.decompose()
   cache[page]=[x.get_text() for x in soup.select('div.highlight pre')];used[page]=set()
  matches=[i for i,text in enumerate(cache[page]) if text==expected and i not in used[page]];row['exactMatches']=matches
  if matches:used[page].add(matches[0]);row['generatedBlockIndex']=matches[0]
  else:row['nearestGeneratedBlocks']=[{'index':i,'prefix':repr(x[:120])} for i,x in enumerate(cache[page]) if expected[:50] in x or x[:50] in expected]
 else:row['referenceOriginalPreserved']=p.is_file()
 rows.append(row)
(out/'INCLUDE_PRESERVATION.json').write_text(json.dumps({'rows':rows,'allDirectives':len(rows),'graphicalDirectives':sum(x['classification']=='graphical-body' for x in rows),'exactGraphicalMatches':sum(bool(x.get('exactMatches')) for x in rows),'textualReferenceDirectives':2,'method':'Exact selected original physical lines and generated code text, one-to-one block use per page. Generated span.linenos (display counters) excluded from code bytes; original content indentation remains. Only missing terminal newline is supplied as Sphinx renders it; existing trailing blank lines remain exact. Textual2 are preserved original alternate diagrams, not counted as displayed Graphical body.'},ensure_ascii=False,indent=2)+'\n');print('graphical',sum(x['classification']=='graphical-body' for x in rows),'matched',sum(bool(x.get('exactMatches')) for x in rows));print('failed',[{'page':x['page'],'source':x['target'],'near':x.get('nearestGeneratedBlocks')} for x in rows if x['classification']=='graphical-body' and not x.get('exactMatches')])
