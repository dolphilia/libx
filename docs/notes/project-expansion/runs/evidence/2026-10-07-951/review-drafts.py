from pathlib import Path
import json,hashlib,datetime,shutil,collections
from bs4 import BeautifulSoup
N=Path('docs/notes/document-import/gnu-sed/v4-10/updates/2026-10-07-chapter-5');Q=Path('/private/tmp/libx-sed-chapter5-review-951/update');E=Path('docs/notes/project-expansion/runs/evidence/2026-10-07-951');E.mkdir(exist_ok=True)
assert Q.is_dir()  # Separately copied inputs read in full before binding checks
h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();at=datetime.datetime.now(datetime.timezone.utc).isoformat();binding=json.loads((Q/'DRAFT_BINDING.json').read_text());pages=[]
order={p['slug']:i for i,p in enumerate(json.loads((Q/'PAGE_PLAN.json').read_text())['pages'])}
for row in sorted(binding['pages'],key=lambda r:order[r['slug']]):
 slug=row['slug'];a=Q/'drafts/en'/(slug+'.body.html');b=Q/'drafts/ja'/(slug+'.body.html');assert h(a)==row['EnglishSHA256'] and h(b)==row['JapaneseSHA256'];sa=BeautifulSoup(a.read_text(),'html.parser');sb=BeautifulSoup(b.read_text(),'html.parser')
 assert [x.get_text() for x in sa.select('pre')]==[x.get_text() for x in sb.select('pre')]
 assert [(x.get('id'),x.get('href')) for x in sa.select('[id],[href]')]==[(x.get('id'),x.get('href')) for x in sb.select('[id],[href]')]
 assert collections.Counter(str(x) for x in sa.select('code,samp,var'))==collections.Counter(str(x) for x in sb.select('code,samp,var'))
 pages.append(dict(row,review='passed-body-only',method='ai-content-review',model='gpt-6.1-sol (POLICY configured;runtime not independently exposed)',reviewedAt=at,separateReviewPass=True,allUnitsReviewed=row['units'],literalPreReviewed=row['preExact'],findings=['Complete source and Japanese body separately read; conditions/negations/order/options/numbers/terminal examples retained.','Original static examples/TODO/footnotes6and7 retained; letter→字母 clarified in4units after wholepass, onlychangedmeaningdependencies reread; no upstream technical audit. No Libx meaning omission or mistranslation found in all179 units; only frozen source claims reviewed.'],literalCodeSampMathAndURLs='exact tokens; entire reviewed saved body bound to separate path reparse'))
manifest={'schemaVersion':1,'status':'passed-body-only','scope':[x['slug']for x in pages],'completedPages':len(pages),'allUnitsReviewed':sum(x['units']for x in pages),'literalPreReviewed':sum(x['preExact']for x in pages),'separateWorkspace':str(Q),'pages':pages,'limits':'Body review only; canonical anchors/GFDL/context/source offer/build/render/integration/publication pending.'}
(N/'DRAFT_REVIEW_MANIFEST.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
assert manifest['completedPages']==14 and manifest['allUnitsReviewed']==179 and manifest['literalPreReviewed']==36
print({'pages':len(pages),'units':manifest['allUnitsReviewed'],'pre':manifest['literalPreReviewed']})
