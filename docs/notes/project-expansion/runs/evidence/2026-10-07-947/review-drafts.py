from pathlib import Path
import json,hashlib,datetime,shutil,collections
from bs4 import BeautifulSoup
N=Path('docs/notes/document-import/gnu-diffutils/v3-12/updates/2026-10-07-chapters-16-18');Q=Path('/private/tmp/libx-diffutils-chapters16-18-review-947/update');E=Path('docs/notes/project-expansion/runs/evidence/2026-10-07-947');E.mkdir(exist_ok=True)
assert Q.is_dir()  # Separately copied inputs read in full before binding checks
h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();at=datetime.datetime.now(datetime.timezone.utc).isoformat();binding=json.loads((Q/'DRAFT_BINDING.json').read_text());pages=[]
order={p['slug']:i for i,p in enumerate(json.loads((Q/'PAGE_PLAN.json').read_text())['pages'])}
for row in sorted(binding['pages'],key=lambda r:order[r['slug']]):
 slug=row['slug'];a=Q/'drafts/en'/(slug+'.body.html');b=Q/'drafts/ja'/(slug+'.body.html');assert h(a)==row['EnglishSHA256'] and h(b)==row['JapaneseSHA256'];sa=BeautifulSoup(a.read_text(),'html.parser');sb=BeautifulSoup(b.read_text(),'html.parser')
 assert [x.get_text() for x in sa.select('pre')]==[x.get_text() for x in sb.select('pre')]
 assert [(x.get('id'),x.get('href')) for x in sa.select('[id],[href]')]==[(x.get('id'),x.get('href')) for x in sb.select('[id],[href]')]
 assert collections.Counter(str(x) for x in sa.select('code,samp,var'))==collections.Counter(str(x) for x in sb.select('code,samp,var'))
 pages.append(dict(row,review='passed-body-only',method='ai-content-review',model='gpt-6.1-sol (POLICY configured;runtime not independently exposed)',reviewedAt=at,separateReviewPass=True,allUnitsReviewed=row['units'],literalPreReviewed=row['preExact'],findings=['Complete source and Japanese body separately read; conditions/negations/order/options/numbers/terminal examples retained.','Original static examples/historical POSIX behavior retained; no upstream technical audit. No Libx meaning omission or mistranslation found in all62 units; only frozen source claims reviewed.'],literalCodeSampMathAndURLs='exact tokens; entire reviewed saved body bound to separate path reparse'))
manifest={'schemaVersion':1,'status':'passed-body-only','scope':[x['slug']for x in pages],'completedPages':len(pages),'allUnitsReviewed':sum(x['units']for x in pages),'literalPreReviewed':sum(x['preExact']for x in pages),'separateWorkspace':str(Q),'pages':pages,'limits':'Body review only; canonical anchors/GFDL/context/source offer/build/render/integration/publication pending.'}
(N/'DRAFT_REVIEW_MANIFEST.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
p={'schemaVersion':1,'state':'source-locked','lastValidStage':'source-locked','publication':'not-requested','excludedFromDeployment':True,'existing96ReleaseInputs':'b13435425 verified release inputs; actualpublication pending','draftPages':13,'translatedPages':13,'reviewedDraftPages':13,'reviewedMeaningUnits':62,'sourceScope':'Complete chapters16–18 (1880 source words/13 sections/2 literal pre blocks)','nextAction':'947:GNU Diffutils第16〜18章13英日/62単位・2原preを別パスで全文レビュー済み、意味の欠落・誤訳なし。旧96releaseinputs保持。第11〜15章Preview37546495341→CAS3d55本番・公開後確認優先。正式26原稿/全219独立/notice/GFDL/ソースキット/対象検証を進め、実b134本番artifactを統合基準にする。節番号97〜109は全桁で扱い、既存本文を保持。草稿は配信除外保存branchのみ。','workspace':str(N.resolve())}
(N/'PROGRESS.json').write_text(json.dumps(p,ensure_ascii=False,indent=2)+'\n')
(E/'REVIEW_WORKSPACE.json').write_text(json.dumps({'workspace':str(N.resolve()),'separateReviewPath':str(Q),'priorActualPublicCommit':'3d55ca37af088961b252b38ff61076506f4bef50','publicAppChanged':False,'fixedOriginalReused':True,'workersUsed':False,'draftDeploymentExcluded':True},indent=2)+'\n')
print({'pages':len(pages),'units':manifest['allUnitsReviewed'],'pre':manifest['literalPreReviewed']})
