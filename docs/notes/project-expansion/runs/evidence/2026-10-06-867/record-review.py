from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,re,shutil
R=Path('/Users/dolphilia/github/libx');E=Path(__file__).parent;N=R/'docs/notes/document-import/wren/v0-4-0';W=Path('/private/tmp/libx-wren-formal-864')
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
ref=lambda p:{'path':str(p.relative_to(R)),'sha256':sha(p)}
def covered(p):return {**ref(p),'coverage':[[1,len(p.read_text().removesuffix('\n').split('\n'))]]}
def write(p,x):
 with p.open('x') as f:f.write(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
a=json.loads((E/'DRAFT_ASSEMBLY.json').read_text());assert len(a['pages'])==5
notes=['Error handling: full36 units/13 examples; syntax/variable scope checks before execution, runtime abort chain and try boundary, aborted fiber unusability, abort(null) and failure-as-return distinction retained.', 'Modularity: full69 units/14 examples; independent top-level scopes, alias imports and optional for, host lookup/static CLI description, pause/new scope/new fiber/resume sequence, snapshot bindings not live, first-load caching and registry-before-execution cycles retained.', 'Modules: full11 units; implicit minimal core, host-provided file/graphics interfaces, optional host compile flags/no external dependencies, meta/random English references preserved.', 'Embedding: full41 units/9 examples; dynamic/static typing and GC/API constraints, debug assertions versus release caller responsibilities, library/source/header build directions, copied configuration/source lifetime, compile/runtime/success results, VM/handle teardown and complete literal C example retained. Existing original main-module prose discrepancy left with prior notice.', 'Slots and handles: full51 units/14 examples; zero-based ensure-before-use, validity until control returned to Wren, copied bytes and explicit length/null bytes versus borrowed pointer/type responsibility, variable lookup and list insertion indices, persistent opaque handle/GC reachability/release-before-free distinction retained.']
heads=json.loads((W/'apps/wren/src/data/document-headings.json').read_text());before=dict(heads);rows=[];old=json.loads((N/'REVIEW_MANIFEST.json').read_text());assert old['completedPages']==12
shutil.copy2(N/'REVIEW_MANIFEST.json',E/'REVIEW_MANIFEST_BEFORE.json');m=json.loads((N/'CONTENT_MAP.json').read_text());maps={p['id']:p for p in m['pages']};at=datetime.datetime.now(datetime.timezone.utc).isoformat()
for (row,note),file in zip(zip(a['pages'],notes),sorted(E.glob('*-units.json'))):
 u=json.loads(file.read_text());assert u['page']==row['page'];stem=file.name.removesuffix('-units.json');p=maps[row['page']]
 en=N/'canonical/en'/row['page'];ja=N/'canonical/ja'/row['page'];assert sha(en)==row['sourceSHA256'] and sha(ja)==row['translationSHA256'];full=E/(stem+'-full-review-readable.txt');assert full.exists()
 s=BeautifulSoup(ja.read_text().split('---\n',2)[2],'html.parser').select_one('.wren-document');hs=[]
 for h in s.find_all(re.compile('^h[2-6]$')):
  anchor=h.find('a',attrs={'name':True});slug=h.get('id') or (anchor.get('name') if anchor else None);assert slug
  hs.append({'depth':int(h.name[1]),'slug':slug,'text':re.sub(r'\s+',' ',h.get_text()).strip().removesuffix(' #')})
 heads['v0-4-0/ja/'+row['page'].removesuffix('.md')]=hs
 rows.append({**row,'fullMeaningReview':'passed','observations':note,'reviewReadable':ref(full),'corrections':ref(E/'DRAFT_CORRECTIONS.json') if '10-classes' in row['page'] else []})
 review={'id':row['page'],'status':'passed','method':'ai-content-review','model':'configured gpt-6.1-sol; actual runtime not independently exposed; no local LLM','reviewedAt':at,'separateReviewPass':True,'source':covered(R/p['source']['path']),'canonical':covered(en),'translation':covered(ja),'findings':[note],'proseBlocks':row['proseBlocks'],'codeBlocks':row['codeBlocks'],'comparison':ref(full),'passDescription':'All five drafts saved before complete separate EN/JA/source-code reading. No corrections required. Prior12 same-input review evidence reused. No source technical audit.','sourceEvidenceReuse':[ref(R/'docs/notes/project-expansion/runs/evidence/2026-10-03-291/SELF_CONTAINED_REVIEW.json'),ref(R/'docs/notes/project-expansion/runs/evidence/2026-10-06-863/SAVED_EVIDENCE_REUSE.json'),ref(R/'docs/notes/project-expansion/runs/evidence/2026-10-06-864/EN_CHECK.json')],'scopeExplanation':'Same-SHA fixed-original reading and complete-source conversion reused; current EN/JA full body comparison including examples new. Directives/frontmatter/common notices retain prior fixed source evidence.'}
 if '10-classes' in row['page']:review['corrections']=ref(E/'DRAFT_CORRECTIONS.json')
 old['pages']=[review if x['id']==row['page'] else x for x in old['pages']]
assert all(heads[k]==v for k,v in before.items());(W/'apps/wren/src/data/document-headings.json').write_text(json.dumps(heads,ensure_ascii=False,indent=2)+'\n')
old.update(completedPages=17,unreviewedPages=7,reviewPass='Batches865/866/867 separate complete saved-draft EN/JA reading; first12 evidence unchanged. Remaining7 explicitly pending.');(N/'REVIEW_MANIFEST.json').write_text(json.dumps(old,ensure_ascii=False,indent=2)+'\n');write(E/'REVIEW_LEDGER_FROZEN.json',old)
write(E/'REVIEW_FROZEN.json',{'schemaVersion':1,'status':'passed-batch-full-meaning-review','at':at,'completedPages':5,'cumulativeReviewedPages':17,'targetPages':24,'pendingPages':7,'sourceWords':5926,'proseBlocks':208,'codeBlocks':50,'pages':rows})
write(E/'HEADINGS_UPDATE.json',{'status':'passed','previousEntriesUnchanged':len(before),'JapaneseEntriesAdded':5,'headings':sum(len(heads['v0-4-0/ja/'+row['page'].removesuffix('.md')]) for row in rows),'appHeadingsSHA256':sha(W/'apps/wren/src/data/document-headings.json')})
print('Separate review batch5/24;cumulative17;208units/50code;no prose corrections;headings5 registered')
