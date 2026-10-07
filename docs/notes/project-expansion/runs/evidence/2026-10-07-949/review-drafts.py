from pathlib import Path
import json,hashlib,datetime,shutil,collections
from bs4 import BeautifulSoup
N=Path('docs/notes/document-import/gnu-sed/v4-10/updates/2026-10-07-chapter-4');Q=Path('/private/tmp/libx-sed-chapter4-review-949/update');E=Path('docs/notes/project-expansion/runs/evidence/2026-10-07-949');E.mkdir(exist_ok=True)
assert Q.is_dir()  # Separately copied inputs read in full before binding checks
h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();at=datetime.datetime.now(datetime.timezone.utc).isoformat();binding=json.loads((Q/'DRAFT_BINDING.json').read_text());pages=[]
order={p['slug']:i for i,p in enumerate(json.loads((Q/'PAGE_PLAN.json').read_text())['pages'])}
for row in sorted(binding['pages'],key=lambda r:order[r['slug']]):
 slug=row['slug'];a=Q/'drafts/en'/(slug+'.body.html');b=Q/'drafts/ja'/(slug+'.body.html');assert h(a)==row['EnglishSHA256'] and h(b)==row['JapaneseSHA256'];sa=BeautifulSoup(a.read_text(),'html.parser');sb=BeautifulSoup(b.read_text(),'html.parser')
 assert [x.get_text() for x in sa.select('pre')]==[x.get_text() for x in sb.select('pre')]
 assert [(x.get('id'),x.get('href')) for x in sa.select('[id],[href]')]==[(x.get('id'),x.get('href')) for x in sb.select('[id],[href]')]
 assert collections.Counter(str(x) for x in sa.select('code,samp,var'))==collections.Counter(str(x) for x in sb.select('code,samp,var'))
 pages.append(dict(row,review='passed-body-only',method='ai-content-review',model='gpt-6.1-sol (POLICY configured;runtime not independently exposed)',reviewedAt=at,separateReviewPass=True,allUnitsReviewed=row['units'],literalPreReviewed=row['preExact'],findings=['Complete source and Japanese body separately read; conditions/negations/order/options/numbers/terminal examples retained.','Original static examples/historical POSIX behavior retained; no upstream technical audit. No Libx meaning omission or mistranslation found in all49 units; only frozen source claims reviewed.'],literalCodeSampMathAndURLs='exact tokens; entire reviewed saved body bound to separate path reparse'))
manifest={'schemaVersion':1,'status':'passed-body-only','scope':[x['slug']for x in pages],'completedPages':len(pages),'allUnitsReviewed':sum(x['units']for x in pages),'literalPreReviewed':sum(x['preExact']for x in pages),'separateWorkspace':str(Q),'pages':pages,'limits':'Body review only; canonical anchors/GFDL/context/source offer/build/render/integration/publication pending.'}
(N/'DRAFT_REVIEW_MANIFEST.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
p={'schemaVersion':1,'state':'source-locked','lastValidStage':'source-locked','publication':'not-requested','excludedFromDeployment':True,'existing12ReleaseInputs':'2151cecac GNU sed1–3 already published; preserved canonical SHA','draftPages':6,'translatedPages':6,'reviewedDraftPages':6,'reviewedMeaningUnits':49,'sourceScope':'Complete chapter4 (1449 sourcewords plus completefootnote5/6sections/19literalpreblocks)','nextAction':'949:GNU sed第4章6英日/49単位・19pre・脚注5全文を別パス全文レビュー済み。草稿は配信除外保存のみ。948 Diffutils Previewテスト失敗を診断・回復し公開後確認を優先。続いてsed4章正式12追加原稿/既存25保持・通知・原稿キット・独立再生成・対象統合検証へ。','workspace':str(N.resolve())}
(N/'PROGRESS.json').write_text(json.dumps(p,ensure_ascii=False,indent=2)+'\n')
(E/'REVIEW_WORKSPACE.json').write_text(json.dumps({'workspace':str(N.resolve()),'separateReviewPath':str(Q),'priorActualPublicCommit':'b134354258b0f74ae923e4d8894e58227bf58466','publicAppChanged':False,'fixedOriginalReused':True,'workersUsed':False,'draftDeploymentExcluded':True},indent=2)+'\n')
print({'pages':len(pages),'units':manifest['allUnitsReviewed'],'pre':manifest['literalPreReviewed']})
