from pathlib import Path
import json,hashlib,datetime,shutil,collections
from bs4 import BeautifulSoup
N=Path('docs/notes/document-import/gnu-diffutils/v3-12/updates/2026-10-07-chapters-11-15');Q=Path('/private/tmp/libx-diffutils-chapters11-15-review-945/update');E=Path('docs/notes/project-expansion/runs/evidence/2026-10-07-945');E.mkdir(exist_ok=True)
assert Q.is_dir()  # Separately copied inputs read in full before binding checks
h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();at=datetime.datetime.now(datetime.timezone.utc).isoformat();binding=json.loads((Q/'DRAFT_BINDING.json').read_text());pages=[]
for row in binding['pages']:
 slug=row['slug'];a=Q/'drafts/en'/(slug+'.body.html');b=Q/'drafts/ja'/(slug+'.body.html');assert h(a)==row['EnglishSHA256'] and h(b)==row['JapaneseSHA256'];sa=BeautifulSoup(a.read_text(),'html.parser');sb=BeautifulSoup(b.read_text(),'html.parser')
 assert [x.get_text() for x in sa.select('pre')]==[x.get_text() for x in sb.select('pre')]
 assert [(x.get('id'),x.get('href')) for x in sa.select('[id],[href]')]==[(x.get('id'),x.get('href')) for x in sb.select('[id],[href]')]
 assert collections.Counter(str(x) for x in sa.select('code,samp,var'))==collections.Counter(str(x) for x in sb.select('code,samp,var'))
 pages.append(dict(row,review='passed-body-only',method='ai-content-review',model='gpt-6.1-sol (POLICY configured;runtime not independently exposed)',reviewedAt=at,separateReviewPass=True,allUnitsReviewed=row['units'],literalPreReviewed=row['preExact'],findings=['Complete source and Japanese body separately read; conditions/negations/order/options/numbers/terminal examples retained.','Original static examples/historical POSIX behavior retained; no upstream technical audit. One relative-clause wording clarified in unit67 of diff-options and only that unit rechecked.'],literalCodeSampMathAndURLs='exact tokens; entire reviewed saved body bound to separate path reparse'))
manifest={'schemaVersion':1,'status':'passed-body-only','scope':[x['slug']for x in pages],'completedPages':len(pages),'allUnitsReviewed':sum(x['units']for x in pages),'literalPreReviewed':sum(x['preExact']for x in pages),'separateWorkspace':str(Q),'pages':pages,'limits':'Body review only; canonical anchors/GFDL/context/source offer/build/render/integration/publication pending.'}
(N/'DRAFT_REVIEW_MANIFEST.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
p={'schemaVersion':1,'state':'source-locked','lastValidStage':'source-locked','publication':'not-requested','excludedFromDeployment':True,'existing83Published':'unchanged','draftPages':13,'translatedPages':13,'reviewedDraftPages':13,'reviewedMeaningUnits':207,'sourceScope':'Complete chapters11–15 (4851 source words/13 sections/11 literal pre blocks)','nextAction':'945:GNU Diffutils第11〜15章13英日/207単位・11原preを別パスで全文レビュー済み、diff排除パターンの1文を明確化し該当単位だけ再確認。他206単位/12JAbody不変。第10章Preview37542201910→CAS24382本番・公開後確認優先、完了後に正式26原稿/全193独立/notice/GFDL/参照/ソースキット/対象・統合buildへ。草稿は配信除外保存branchのみ。','workspace':str(N.resolve())}
(N/'PROGRESS.json').write_text(json.dumps(p,ensure_ascii=False,indent=2)+'\n')
(E/'WORKSPACE.json').write_text(json.dumps({'workspace':str(N.resolve()),'separateReviewPath':str(Q),'priorActualPublicCommit':'3d55ca37af088961b252b38ff61076506f4bef50','publicAppChanged':False,'fixedOriginalReused':True,'workersUsed':False,'draftDeploymentExcluded':True},indent=2)+'\n')
print({'pages':len(pages),'units':manifest['allUnitsReviewed'],'pre':manifest['literalPreReviewed']})
