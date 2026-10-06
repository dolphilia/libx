from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,re
R=Path('/Users/dolphilia/github/libx');E=Path(__file__).parent;N=R/'docs/notes/document-import/wren/v0-4-0';W=Path('/private/tmp/libx-wren-formal-864')
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def write(p,x):
 with p.open('x') as f:f.write(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
a=json.loads((E/'DRAFT_ASSEMBLY.json').read_text());assert len(a['pages'])==8
notes=[
 'Overview all paragraphs/list/code: class-based/concurrent, small VM/source-size claims faithfully retained; no execution or source technical audit.',
 'Getting started all paragraphs/lists/inline commands: build directory/project names, dynamic/static library filenames, C99/C++98 and amalgamation command retained.',
 'Syntax all prose, 64 precedence-table cells and examples: newline, single-expression/statement blocks, operator ordering and associativity retained.',
 'Values all prose/examples: byte strings and Unicode escape widths, raw-string whitespace, inclusive/exclusive endpoints, immutable values and Null retained.',
 'Lists all prose/examples: zero/negative indices, slices/new list, insertion relative to size after growth, first matching removal and null result retained.',
 'Maps all prose/examples: permitted keys, null value versus missing key, constant-time original claim, unspecified order/exactly once and entry fields retained.',
 'Method calls all prose/lists/examples: left-to-right evaluation, arity overload, getter versus empty argument call, setter/operator/subscript signatures retained.',
 'Control flow all prose/lists/examples: only false/null falsy, short-circuit actual operand result, sequence evaluated once, body variable scope, innermost break and iterator protocol retained.'
]
heads=json.loads((W/'apps/wren/src/data/document-headings.json').read_text());before=dict(heads);rows=[]
for (row,note),file in zip(zip(a['pages'],notes),sorted(E.glob('*-units.json'))):
 u=json.loads(file.read_text());assert u['page']==row['page'];stem=file.name.removesuffix('-units.json')
 en=N/'canonical/en'/row['page'];ja=N/'canonical/ja'/row['page'];assert sha(en)==row['sourceSHA256'] and sha(ja)==row['translationSHA256']
 full=E/(stem+'-full-review-readable.txt');assert full.exists()
 s=BeautifulSoup(ja.read_text().split('---\n',2)[2],'html.parser');root=s.select_one('.wren-document')
 hs=[]
 for h in root.find_all(re.compile('^h[2-6]$')):
  anchor=h.find('a',attrs={'name':True});slug=h.get('id') or (anchor.get('name') if anchor else None);assert slug,(row['page'],str(h));text=re.sub(r'\s+',' ',h.get_text()).strip().removesuffix(' #')
  hs.append({'depth':int(h.name[1]),'slug':slug,'text':text})
 heads['v0-4-0/ja/'+row['page'].removesuffix('.md')]=hs
 rows.append({**row,'fullMeaningReview':'passed','method':'Separate complete EN/JA reading after all eight drafts saved; source examples included in reading order and exact code guard; no subagents or source technical audit.','coverage':'Complete adopted body including headings, prose, lists, table cells, inline identifiers and all source examples; unchanged source/notice footer included by existing fixed preparation evidence, API17 excluded.','observations':note,'reviewReadable':{'path':str(full.relative_to(R)),'sha256':sha(full)},'corrections':[]})
assert all(heads[k]==v for k,v in before.items())
(W/'apps/wren/src/data/document-headings.json').write_text(json.dumps(heads,ensure_ascii=False,indent=2)+'\n')
out={'schemaVersion':1,'status':'passed-batch-full-meaning-review','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'completedPages':8,'targetPages':24,'pendingPages':16,'sourceWords':5874,'proseBlocks':318,'codeBlocks':86,'pages':rows,'remainingScope':'Sixteen Japanese guides not reviewed; seventeen English API references not translated or claimed meaning-reviewed; formal distribution/integration/publication pending.'}
write(E/'REVIEW_FROZEN.json',out);write(N/'REVIEW_MANIFEST.json',out)
write(E/'HEADINGS_UPDATE.json',{'status':'passed','EnglishEntriesUnchanged':len(before),'JapaneseEntriesAdded':8,'headings':sum(len(heads[k]) for k in heads if '/ja/' in k),'appHeadingsSHA256':sha(W/'apps/wren/src/data/document-headings.json')})
print('Separate full meaning review8/24;318 units/86 unchanged code;Japanese headings8 registered')
