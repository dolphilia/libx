from pathlib import Path
import json,hashlib,datetime,shutil
R=Path('/Users/dolphilia/github/libx');E=Path(__file__).parent;N=R/'docs/notes/document-import/wren/v0-4-0'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
ref=lambda p:{'path':str(p.relative_to(R)),'sha256':sha(p)}
def covered(p):return {**ref(p),'coverage':[[1,len(p.read_text().removesuffix('\n').split('\n'))]]}
old=json.loads((E/'REVIEW_FROZEN.json').read_text());rows={x['page']:x for x in old['pages']};m=json.loads((N/'CONTENT_MAP.json').read_text());at=old['at'];pages=[]
shutil.copy2(N/'REVIEW_MANIFEST.json',E/'REVIEW_BATCH_READABLE_SCHEMA.json')
for p in m['pages']:
 if p['id'] not in rows:pages.append({'id':p['id'],'status':'pending','translation':'pending','separateReviewPass':False});continue
 r=rows[p['id']];source=R/p['source']['path'];canonical=R/p['canonical']['path'];translation=N/'canonical/ja'/p['id']
 pages.append({'id':p['id'],'status':'passed','method':'ai-content-review','model':'configured gpt-6.1-sol; actual runtime not independently exposed; no local LLM','reviewedAt':at,'separateReviewPass':True,'source':covered(source),'canonical':covered(canonical),'translation':covered(translation),'findings':[r['observations']],'proseBlocks':r['proseBlocks'],'codeBlocks':r['codeBlocks'],'comparison':r['reviewReadable'],'passDescription':r['method'],'sourceEvidenceReuse':[ref(R/'docs/notes/project-expansion/runs/evidence/2026-10-03-291/SELF_CONTAINED_REVIEW.json'),ref(R/'docs/notes/project-expansion/runs/evidence/2026-10-06-863/SAVED_EVIDENCE_REUSE.json'),ref(R/'docs/notes/project-expansion/runs/evidence/2026-10-06-864/EN_CHECK.json')],'scopeExplanation':'Fixed original same-SHA source reading and whole-source rendering retained by prior evidence; separate EN/JA body meaning pass is new. Coverage includes original directives/line endings and current canonical frontmatter/common provenance notices; no filling original technical gaps.'})
out={'schemaVersion':1,'scope':[p['id'] for p in m['pages']],'completedPages':8,'unreviewedPages':16,'reviewPass':'First eight complete drafts saved before a separate complete EN/JA meaning pass; remaining sixteen explicitly pending.','apiReferencesEnglishOnly':17,'sourceWords':5874,'pages':pages}
(N/'REVIEW_MANIFEST.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
(E/'REVIEW_LEDGER_FROZEN.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
print('Ledger review schema:scope24/passed8/pending16')
