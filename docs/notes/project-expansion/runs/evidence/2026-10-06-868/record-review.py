from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,re,shutil
R=Path('/Users/dolphilia/github/libx');E=Path(__file__).parent;N=R/'docs/notes/document-import/wren/v0-4-0';W=Path('/private/tmp/libx-wren-formal-864')
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
ref=lambda p:{'path':str(p.relative_to(R)),'sha256':sha(p)}
def covered(p):return {**ref(p),'coverage':[[1,len(p.read_text().removesuffix('\n').split('\n'))]]}
def write(p,x):
 with p.open('x') as f:f.write(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
a=json.loads((E/'DRAFT_ASSEMBLY.json').read_text());assert len(a['pages'])==4
notes=['Calling C from Wren: full24 units/6 examples; class-definition binding once versus invocation, callback lookup versus actual foreign function, slot0 receiver/result and consecutive arguments, no VM re-entry or other fiber execution retained.', 'Calling Wren from C: full37 units/8 examples; parse/compile cost versus precompiled method symbols, signature handle caching/explicit release, class-object receiver/static methods, hoisted variable lookup, contiguous argument slots, suspend boundary and runtime-only return enum retained.', 'Storing C data: full55 units/18 examples; allocation bytes/slot0/class slot0, constructor argument lifetime and allocation-before-Wren-constructor order, caller type/bounds responsibility, reachable-memory GC versus explicit external-resource close, no slot/VM use during finalization, FILE** ownership and idempotent close helper retained.', 'Configuring VM: full50 units/9 examples; initialization defaults, per-VM configuration, module caching/source lifetime/onComplete, nullable foreign binding, silent NULL write/error callbacks, compile/runtime/stack-trace callback distinctions, allocation/new/free behavior, 10MB/1MB/50 defaults and 400→600 total example retained. Original configuration-struct omission retains existing source notice.']
heads=json.loads((W/'apps/wren/src/data/document-headings.json').read_text());before=dict(heads);rows=[];old=json.loads((N/'REVIEW_MANIFEST.json').read_text());assert old['completedPages']==17
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
 review={'id':row['page'],'status':'passed','method':'ai-content-review','model':'configured gpt-6.1-sol; actual runtime not independently exposed; no local LLM','reviewedAt':at,'separateReviewPass':True,'source':covered(R/p['source']['path']),'canonical':covered(en),'translation':covered(ja),'findings':[note],'proseBlocks':row['proseBlocks'],'codeBlocks':row['codeBlocks'],'comparison':ref(full),'passDescription':'All four drafts saved before complete separate EN/JA/source-code reading. No corrections required. Prior17 same-input review evidence reused. No source technical audit.','sourceEvidenceReuse':[ref(R/'docs/notes/project-expansion/runs/evidence/2026-10-03-291/SELF_CONTAINED_REVIEW.json'),ref(R/'docs/notes/project-expansion/runs/evidence/2026-10-06-863/SAVED_EVIDENCE_REUSE.json'),ref(R/'docs/notes/project-expansion/runs/evidence/2026-10-06-864/EN_CHECK.json')],'scopeExplanation':'Same-SHA fixed-original reading and complete-source conversion reused; current EN/JA full body comparison including examples new. Directives/frontmatter/common notices retain prior fixed source evidence.'}
 if '10-classes' in row['page']:review['corrections']=ref(E/'DRAFT_CORRECTIONS.json')
 old['pages']=[review if x['id']==row['page'] else x for x in old['pages']]
assert all(heads[k]==v for k,v in before.items());(W/'apps/wren/src/data/document-headings.json').write_text(json.dumps(heads,ensure_ascii=False,indent=2)+'\n')
old.update(completedPages=21,unreviewedPages=3,reviewPass='Batches865/866/867/868 separate complete saved-draft EN/JA reading; first17 evidence unchanged. Remaining3 explicitly pending.');(N/'REVIEW_MANIFEST.json').write_text(json.dumps(old,ensure_ascii=False,indent=2)+'\n');write(E/'REVIEW_LEDGER_FROZEN.json',old)
write(E/'REVIEW_FROZEN.json',{'schemaVersion':1,'status':'passed-batch-full-meaning-review','at':at,'completedPages':4,'cumulativeReviewedPages':21,'targetPages':24,'pendingPages':3,'sourceWords':5052,'proseBlocks':166,'codeBlocks':41,'pages':rows})
write(E/'HEADINGS_UPDATE.json',{'status':'passed','previousEntriesUnchanged':len(before),'JapaneseEntriesAdded':4,'headings':sum(len(heads['v0-4-0/ja/'+row['page'].removesuffix('.md')]) for row in rows),'appHeadingsSHA256':sha(W/'apps/wren/src/data/document-headings.json')})
print('Separate review batch4/24;cumulative21;166units/41code;no prose corrections;headings4 registered')
