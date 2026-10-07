from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,shutil
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-sed-chapter5-formal-951');n=Path('docs/notes/document-import/gnu-sed/v4-10/updates/2026-10-07-chapter-5');N=W/n;E=R/'docs/notes/project-expansion/runs/evidence/2026-10-07-951';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();at=datetime.datetime.now(datetime.timezone.utc).isoformat();review=json.loads((N/'DRAFT_REVIEW_MANIFEST.json').read_text());rows=[]
for row in review['pages']:
 slug=row['slug'];paths={'source':n/'drafts/en'/(slug+'.body.html'),'canonical':n/'canonical/en/01-guide'/(slug+'.md'),'translation':n/'canonical/ja/01-guide'/(slug+'.md')}
 for lang in ['en','ja']:
  a=BeautifulSoup((N/'drafts'/lang/(slug+'.body.html')).read_text(),'html.parser');b=BeautifulSoup((N/'canonical'/lang/'01-guide'/(slug+'.md')).read_text().split('---',2)[2],'html.parser');a=a.select_one('.gnu-sed-original-content');b=b.select_one('.gnu-sed-original-content');assert a.get_text()==b.get_text();assert [x.get_text()for x in a.select('pre')]==[x.get_text()for x in b.select('pre')]
 r={'id':'01-guide/'+slug+'.md','status':'passed','method':'ai-content-review','model':row['model'],'reviewedAt':row['reviewedAt'],'separateReviewPass':True,'allUnitsReviewed':row['units'],'literalPreReviewed':row['preExact'],'findings':row['findings']+['Formal decoded body and examples equal reviewed draft; all anchors remapped to available adopted32 sections or fixed complete original including linked footnote.']}
 for k,p in paths.items():r[k]={'path':str(p),'sha256':h(W/p),'coverage':[[1,len((W/p).read_text().splitlines())]]}
 rows.append(r)
(N/'REVIEW_MANIFEST.json').write_text(json.dumps({'schemaVersion':1,'scope':[x['id']for x in rows],'completedPages':14,'unreviewedPages':0,'pages':rows},ensure_ascii=False,indent=2)+'\n')
old=json.loads(next(x for x in (W/'apps/gnu-sed/src/content/docs/v4-10/en/01-guide/13-sed-addresses.md').read_text().splitlines()if x.startswith('documentContext: ')).removeprefix('documentContext: '));new=json.loads((N/'DOCUMENT_CONTEXT.json').read_text());a=old[0]['html'];b=new[0]['html'];entry=b[b.rfind('<p>7 October 2026:'):b.rfind('</section>')]
assert b.replace(entry,'').replace('User Guide — Chapters 1–5','User Guide — Chapters 1–4',1).replace('利用ガイド — 第1〜5章','利用ガイド — 第1〜4章',1)==a
(E/'CONTEXT_REVIEW.json').write_text(json.dumps({'status':'passed','at':at,'newDistinctTitle':'Libx GNU sed 4.10 User Guide — Chapters 1–5','newHistory':entry,'originalCopyrightAuthorsPermissionHistoryFullEnglishGFDL':'Exact old context after removing current history and reversing only current title pair','siteScope':'Completechapters1–5 andallsevenfootnotes; remainingoriginal links; old37 preferred unchanged','bodyReview':'14sections/179units/36pre/fullfootnotes6and7 bound to separate review951','scope':'Only current title/scope/Oct7chapter5 history read; existing context/fulllicense reused'},ensure_ascii=False,indent=2)+'\n')
shutil.copytree(N,R/n,dirs_exist_ok=True,ignore=shutil.ignore_patterns('__pycache__','*.pyc'))
print({'newFormalDocuments':28,'oldPreferredExact':37,'wholeReview':14,'context':'passed'})
