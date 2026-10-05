from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,re,shutil
R=Path('/Users/dolphilia/github/libx');E=Path(__file__).parent;N=R/'docs/notes/document-import/wren/v0-4-0';W=Path('/private/tmp/libx-wren-formal-864')
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
ref=lambda p:{'path':str(p.relative_to(R)),'sha256':sha(p)}
def covered(p):return {**ref(p),'coverage':[[1,len(p.read_text().removesuffix('\n').split('\n'))]]}
def write(p,x):
 with p.open('x') as f:f.write(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
a=json.loads((E/'DRAFT_ASSEMBLY.json').read_text());assert len(a['pages'])==3
notes=['Performance: full86 units; all21 benchmark bars/numbers/widths and four tables retained. Ten-run best/execute-only measurement, hardware/version/JIT-disabled conditions, author comparisons and NaN representation/fixed layout/copy-down/signature dispatch/computed goto/single-pass tradeoffs preserved. Historical fixed-original claims not modern technical audit.', 'Q&A: full33 units/3 examples; author niche/OOP/prototype preference, bytecode/startup constraints, stack/register instruction-width distinction, method calling convention and tentative specialized arithmetic, authors other language context preserved. Literal heading ampersand escaped after rendering review; changed heading rechecked.', 'Contributing: full31 units/4 examples; original community links, wiki categories/build/docs/test workflow, proposals/minimal-language preference, code-style and feature-branch/test/AUTHORS/PR steps retained. All links/examples remain original directions, not execution or external posting.']
heads=json.loads((W/'apps/wren/src/data/document-headings.json').read_text());before=dict(heads);rows=[];old=json.loads((N/'REVIEW_MANIFEST.json').read_text());assert old['completedPages']==21
shutil.copy2(N/'REVIEW_MANIFEST.json',E/'REVIEW_MANIFEST_BEFORE.json');m=json.loads((N/'CONTENT_MAP.json').read_text());maps={p['id']:p for p in m['pages']};at=datetime.datetime.now(datetime.timezone.utc).isoformat()
for (row,note),file in zip(zip(a['pages'],notes),sorted(E.glob('*-units.json'))):
 u=json.loads(file.read_text());assert u['page']==row['page'];stem=file.name.removesuffix('-units.json');p=maps[row['page']]
 en=N/'canonical/en'/row['page'];ja=N/'canonical/ja'/row['page'];assert sha(en)==row['sourceSHA256'] and sha(ja)==row['translationSHA256'];full=E/(stem+'-full-review-readable.txt');assert full.exists()
 s=BeautifulSoup(ja.read_text().split('---\n',2)[2],'html.parser').select_one('.wren-document');hs=[]
 for h in s.find_all(re.compile('^h[2-6]$')):
  anchor=h.find('a',attrs={'name':True});slug=h.get('id') or (anchor.get('name') if anchor else None);
  if not slug:
   assert row['page']=='01-guide/22-performance.md' and h.name=='h3' and h.get_text() in ['メソッド呼び出し','DeltaBlue','二分木','再帰的なフィボナッチ計算'];continue
  hs.append({'depth':int(h.name[1]),'slug':slug,'text':re.sub(r'\s+',' ',h.get_text()).strip().removesuffix(' #')})
 heads['v0-4-0/ja/'+row['page'].removesuffix('.md')]=hs
 rows.append({**row,'fullMeaningReview':'passed','observations':note,'reviewReadable':ref(full),'corrections':ref(E/'DRAFT_CORRECTIONS.json') if '23-qa' in row['page'] else []})
 review={'id':row['page'],'status':'passed','method':'ai-content-review','model':'configured gpt-6.1-sol; actual runtime not independently exposed; no local LLM','reviewedAt':at,'separateReviewPass':True,'source':covered(R/p['source']['path']),'canonical':covered(en),'translation':covered(ja),'findings':[note],'proseBlocks':row['proseBlocks'],'codeBlocks':row['codeBlocks'],'comparison':ref(full),'passDescription':'All three drafts saved before complete separate EN/JA/source-code reading. Only Q&A literal ampersand escaped; changed heading rechecked. Prior21 same-input review evidence reused. No source technical audit.','sourceEvidenceReuse':[ref(R/'docs/notes/project-expansion/runs/evidence/2026-10-03-291/SELF_CONTAINED_REVIEW.json'),ref(R/'docs/notes/project-expansion/runs/evidence/2026-10-06-863/SAVED_EVIDENCE_REUSE.json'),ref(R/'docs/notes/project-expansion/runs/evidence/2026-10-06-864/EN_CHECK.json')],'scopeExplanation':'Same-SHA fixed-original reading and complete-source conversion reused; current EN/JA full body comparison including examples new. Directives/frontmatter/common notices retain prior fixed source evidence.'}
 if '23-qa' in row['page']:review['corrections']=ref(E/'DRAFT_CORRECTIONS.json')
 old['pages']=[review if x['id']==row['page'] else x for x in old['pages']]
assert all(heads[k]==v for k,v in before.items());(W/'apps/wren/src/data/document-headings.json').write_text(json.dumps(heads,ensure_ascii=False,indent=2)+'\n')
old.update(completedPages=24,unreviewedPages=0,reviewPass='Batches865/866/867/868/869 separate complete saved-draft EN/JA reading; first21 evidence unchanged. All24 target guides complete; formal distribution/integration/publication pending.');(N/'REVIEW_MANIFEST.json').write_text(json.dumps(old,ensure_ascii=False,indent=2)+'\n');write(E/'REVIEW_LEDGER_FROZEN.json',old)
write(E/'REVIEW_FROZEN.json',{'schemaVersion':1,'status':'passed-batch-full-meaning-review','at':at,'completedPages':3,'cumulativeReviewedPages':24,'targetPages':24,'pendingPages':0,'sourceWords':3217,'proseBlocks':150,'codeBlocks':7,'pages':rows})
write(E/'HEADINGS_UPDATE.json',{'status':'passed','previousEntriesUnchanged':len(before),'JapaneseEntriesAdded':3,'headings':sum(len(heads['v0-4-0/ja/'+row['page'].removesuffix('.md')]) for row in rows),'appHeadingsSHA256':sha(W/'apps/wren/src/data/document-headings.json')})
print('Separate review batch3/24;cumulative24;150units/7code;one ampersand correction;headings3 registered')
