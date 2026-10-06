"""Adopt the fixed complete guide in a normally created isolated app.
Reuse the separate whole draft reviews only when the complete body hashes match.
"""
from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
from collections import Counter
import hashlib,json,re,shutil
N=Path(__file__).resolve().parent;W=N.parents[4];A=W/'apps/gnu-gzip';P=A/'public/source/v1-15'
h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
assert A.exists(),'Run only after normal template creator in the formal isolated checkout'
C=json.loads((N/'CANDIDATE_DRAFT.json').read_text());M=json.loads((N/'SOURCE_MANIFEST.json').read_text())
for x in M['files']:assert h(N/x['path'])==x['sha256']
context=json.loads((N/'drafts/notice-context.json').read_text());notice=BeautifulSoup(context[0]['html'],'html.parser')
assert 'Jean-loup Gailly' in notice.get_text() and 'History' in notice.get_text() and 'RELICENSING' in notice.get_text()
reviews=json.loads((N/'reviews/922-draft-whole/MANIFEST.json').read_text());assert reviews['completedDraftReviews']==8
heads={};items=[];mapped=[]
for row in C['proposedScope']['rows']:
 slug=row['slug'];route='01-guide/'+slug+'.md';en=N/'drafts/en'/(slug+'.body.html');ja=N/'drafts/ja'/(slug+'.body.html')
 assert h(en)==row['bodySHA256'];a=BeautifulSoup(en.read_text(),'html.parser');b=BeautifulSoup(ja.read_text(),'html.parser')
 assert [p.get_text()for p in a.select('pre')]==[p.get_text()for p in b.select('pre')]
 assert Counter(p.get_text()for p in a.select('var'))==Counter(p.get_text()for p in b.select('var'))
 inherited=next(x for x in reviews['rows']if x['slug']==slug);oldReviewPath=N/'reviews/922-draft-whole'/(slug+'.json')
 assert h(oldReviewPath)==inherited['sha256'];r=json.loads(oldReviewPath.read_text())
 assert r['input']['EnglishDraftSHA256']==h(en) and r['input']['JapaneseDraftSHA256']==h(ja)
 assert r['input']['unitsSHA256']==h(N/'translations'/(slug+'-units.json'))
 assert r['input']['translationInputSHA256']==h(N/'translations'/(slug+'-ja.json'))
 for lang,src,s in [('en',en,a),('ja',ja,b)]:
  title=row['titleEN']if lang=='en'else re.sub(r'^\d+\s+','',s.find(re.compile('^h[1-6]$')).get_text().strip())
  if lang=='ja'and slug=='01-overview-notice':title='概要と原著通知'
  front={'title':title,'description':'Complete fixed GNU gzip 1.15 guide with paired Japanese translation.'if lang=='en'else'GNU gzip 1.15の概要と第1〜7章全文。固定原文に対するLibxの独立・非公式日本語訳。','documentId':'gnu-gzip:1.15:'+slug,'licenseSource':'gnu-gzip-manual','toc':{'maxLevel':4},'documentContext':context}
  page='---\n'+''.join(k+': '+json.dumps(v,ensure_ascii=False)+'\n'for k,v in front.items())+'---\n\n'+src.read_text()+'\n'
  for base in [N/'canonical'/lang,A/'src/content/docs/v1-15'/lang,P/'edited'/lang]:
   dest=base/route;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(page)
  heads['v1-15/'+lang+'/'+route.removesuffix('.md')]=[{'depth':int(x.name[1]),'slug':x['id'],'text':re.sub(r'\s+',' ',x.get_text()).strip()}for x in s.find_all(re.compile('^h[1-6]$'))if x.has_attr('id')]
 canonical=N/'canonical/en'/route;translated=N/'canonical/ja'/route
 sourceFragment=N/'source-fragments/en'/route.replace('.md','.html');assert h(sourceFragment)==h(en)
 mapped.append({'id':route,'status':'passed','source':{'path':'source-fragments/en/'+route.replace('.md','.html'),'sha256':h(sourceFragment)},'canonical':{'path':'canonical/en/'+route,'sha256':h(canonical)},'translation':{'path':'canonical/ja/'+route,'sha256':h(translated)},'body':{'EnglishSHA256':h(en),'JapaneseSHA256':h(ja)},'inheritedWholeReview':{'path':'reviews/922-draft-whole/'+slug+'.json','sha256':h(oldReviewPath)},'reviewedUnits':r['reviewedUnitCount'],'reviewScope':'Whole unchanged bodies inherited from saved separate draft review. Newly added frontmatter/context is verified separately.'})
 items.append(dict(row,id=route,canonical='canonical/en/'+route,canonicalSHA256=h(canonical),translationCanonical='canonical/ja/'+route,translationSHA256=h(translated),translatedBodySHA256=h(ja),unitsSHA256=h(N/'translations'/(slug+'-units.json')),translationUnitsSHA256=h(N/'translations'/(slug+'-ja.json')),translation='reviewed',meaningReview='passed'))
licensebody=N/'drafts/reference/gfdl.body.html';assert h(licensebody)==C['proposedScope']['EnglishOnlyLicense']['sha256']
ls=BeautifulSoup(licensebody.read_text(),'html.parser');ph={}
for a in ls.select('a[href]'):
 if a['href'].startswith('#'):a['href']='/docs/gnu-gzip/source/v1-15/manual.html'+a['href']
for i,pre in enumerate(ls.select('pre')):
 key=f'LIBX_GZIP_FDL_PRE_{i}_END';ph[key]=str(pre).replace('\n','&#10;').replace('\t','&#9;');pre.replace_with(NavigableString(key))
fragment=str(ls)
for key,value in ph.items():fragment=fragment.replace(key,value)
assert [x.get_text()for x in BeautifulSoup(fragment,'html.parser').select('pre')]==[x.get_text()for x in BeautifulSoup(licensebody.read_text(),'html.parser').select('pre')]
notice.find('details').decompose();front={'title':'Original English GNU Free Documentation License','licenseSource':'gnu-gzip-manual','documentContext':[{'kind':'source','html':str(notice)}]}
page='---\n'+''.join(k+': '+json.dumps(v,ensure_ascii=False)+'\n'for k,v in front.items())+'---\n\n'+fragment+'\n'
for base in [N/'canonical/en',A/'src/content/docs/v1-15/en',P/'edited/en']:
 dest=base/'02-reference/01-gfdl.md';dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(page)
for folder in [A/'src/content/docs/v1',A/'public/search/v1']:
 if folder.exists():shutil.rmtree(folder)
for f in (A/'public/sidebar').glob('*-v1.json'):f.unlink()
P.mkdir(parents=True,exist_ok=True);shutil.copyfile(N/'source/derived-manual.html',P/'manual.html');shutil.copytree(N/'source/original',P/'original',dirs_exist_ok=True);shutil.copyfile(N/'source/gzip-1.15.tar.xz',P/'original/gzip-1.15.tar.xz')
readme=N/'SOURCE_OFFER_README.md'
if readme.exists():shutil.copyfile(readme,P/'SOURCE_README.md')
else:(P/'SOURCE_README.md').write_text('# GNU gzip 1.15 — original and editable sources / 原文と編集用原稿\n\nTop and complete chapters 1–7, English-only original GFDL; fixed full original HTML, concept index, Info, Texinfo and unchanged distribution archive. GFDL1.3-or-later; no Invariant Sections or Cover Texts. Original Jean-loup Gailly and FSF notices, full license, separate Libx title/modification notice and History retained. Document 3 January 2026 / release 20 September 2026 / acquisition 6 October 2026. Whole body reviews are inherited from current saved drafts; formal source-kit/verification/publication remains pending.\n')
(A/'src/config/project.config.jsonc').write_text((N/'drafts/project.config.jsonc').read_text());(A/'src/data').mkdir(exist_ok=True);(A/'src/data/document-headings.json').write_text(json.dumps(heads,ensure_ascii=False,indent=2)+'\n')
(A/'src/styles/global.css').write_text("@import '@docs/theme/css/starlight-overrides.css';\n.gnu-gzip-original-content pre {\n  max-width: 100%;\n  min-width: 0;\n  overflow-x: auto;\n  white-space: pre;\n  tab-size: 4;\n}\n.gnu-gzip-original-content pre code {\n  white-space: pre;\n}\n.gnu-gzip-original-content dd {\n  min-width: 0;\n}\n.document-provenance .attribution-text {\n  overflow-wrap: anywhere;\n}\n")
(N/'REVIEW_MANIFEST.json').write_text(json.dumps({'schemaVersion':1,'version':'1.15','wholeBodyReviews':8,'completedPages':8,'reviewedUnits':84,'inheritedDraftManifest':{'path':'reviews/922-draft-whole/MANIFEST.json','sha256':h(N/'reviews/922-draft-whole/MANIFEST.json')},'pages':mapped,'contextAndRendererVerification':'pending'},ensure_ascii=False,indent=2)+'\n')
(N/'CONTENT_MAP.json').write_text(json.dumps({'schemaVersion':1,'version':'1.15','manualGeneratedSHA256':h(N/'source/derived-manual.html'),'guidePages':8,'referenceEnglishOnly':['02-reference/01-gfdl.md'],'originalPre':15,'VAR':6,'tables':0,'footnotes':0,'items':items,'meaningReview':'passed-body-only','contextAndRendererVerification':'pending'},ensure_ascii=False,indent=2)+'\n')
print('GNU gzip EN8+EnglishGFDL/JA8 adopted; current complete body reviews8/84 mapped; context/renderer verification pending')
