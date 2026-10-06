"""Adopt saved complete body drafts into editable canonical MD and normal app.
Meaning review remains separate; mechanical assertions do not approve translations.
"""
from pathlib import Path
from bs4 import BeautifulSoup
import json,re,hashlib,shutil
from collections import Counter
N=Path(__file__).resolve().parent;W=N.parents[4];A=W/'apps/gnu-findutils';P=A/'public/source/v4-11-0';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();plan=json.loads((N/'DRAFT_PAGE_PLAN.json').read_text());M=json.loads((N/'SOURCE_MANIFEST.json').read_text());heads={};items=[]
assert A.exists(),'Run only in formal isolated checkout after normal template creator'
for row in M['files']:assert h(N/row['path'])==row['sha256']
context=json.loads((N/'drafts/notice-context.json').read_text());assert 'James Youngman' in context[0]['html'] and 'History' in context[0]['html'];assert 'RELICENSING' in re.sub(r'\s+',' ',BeautifulSoup(context[0]['html'],'html.parser').get_text())
for row in plan['pages']:
 slug=row['slug'];route='01-guide/'+slug+'.md';en=N/'drafts/en'/(slug+'.body.html');assert h(en)==row['bodySHA256'];unit=json.loads((N/'translations'/(slug+'-units.json')).read_text());ja=N/'drafts/ja'/(slug+'.body.html');assert unit['bodySHA256']==h(en)
 es=BeautifulSoup(en.read_text(),'html.parser');js=BeautifulSoup(ja.read_text(),'html.parser');assert [x.get_text() for x in es.select('pre')]==[x.get_text() for x in js.select('pre')];assert Counter(x.get_text() for x in es.select('var'))==Counter(x.get_text() for x in js.select('var'))
 for lang,src,s in [('en',en,es),('ja',ja,js)]:
  title=row['titleEN'] if lang=='en' else re.sub(r'^\d+(?:\.\d+)*\s+','',s.find(re.compile('^h[1-6]$')).get_text().strip())
  if lang=='ja' and slug=='01-overview-notice':title='概要と原著通知'
  front={'title':title,'description':'Fixed GNU findutils4.11.0 overview and complete chapters1–2 with paired Japanese translation.' if lang=='en' else 'GNU findutils4.11.0の概要と第1〜2章全文。固定原文に対するLibxの独立・非公式日本語訳。','documentId':'gnu-findutils:4.11.0:'+slug,'licenseSource':'gnu-findutils-manual','toc':{'maxLevel':4},'documentContext':context}
  page='---\n'+''.join(k+': '+json.dumps(v,ensure_ascii=False)+'\n' for k,v in front.items())+'---\n\n'+src.read_text()+'\n'
  for base in [N/'canonical'/lang,A/'src/content/docs/v4-11-0'/lang,P/'edited'/lang]:
   dest=base/route;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(page)
  heads['v4-11-0/'+lang+'/'+route.removesuffix('.md')]=[{'depth':int(x.name[1]),'slug':x['id'],'text':re.sub(r'\s+',' ',x.get_text()).strip()}for x in s.find_all(re.compile('^h[1-6]$')) if x.has_attr('id')]
 items.append(dict(row,id=route,canonical='canonical/en/'+route,canonicalSHA256=h(N/'canonical/en'/route),translationCanonical='canonical/ja/'+route,translationSHA256=h(N/'canonical/ja'/route),translatedBodySHA256=h(ja),unitsSHA256=h(N/'translations'/(slug+'-units.json')),translationUnitsSHA256=h(N/'translations'/(slug+'-ja.json')),translation='saved-unreviewed',meaningReview='pending'))
licensebody=N/'drafts/reference/gfdl.body.html';assert h(licensebody)==plan['EnglishOnlyLicenseReference']['sha256'];notice=BeautifulSoup(context[0]['html'],'html.parser');notice.find('details').decompose();front={'title':'Original English GNU Free Documentation License','licenseSource':'gnu-findutils-manual','documentContext':[{'kind':'source','html':str(notice)}]};page='---\n'+''.join(k+': '+json.dumps(v,ensure_ascii=False)+'\n'for k,v in front.items())+'---\n\n'+licensebody.read_text()+'\n'
for base in [N/'canonical/en',A/'src/content/docs/v4-11-0/en',P/'edited/en']:
 dest=base/'02-reference/01-gfdl.md';dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(page)
for folder in [A/'src/content/docs/v1',A/'public/search/v1']:
 if folder.exists():shutil.rmtree(folder)
for f in (A/'public/sidebar').glob('*-v1.json'):f.unlink()
P.mkdir(parents=True,exist_ok=True);shutil.copyfile(N/'source/derived-manual.html',P/'manual.html');shutil.copytree(N/'source/original',P/'original',dirs_exist_ok=True);shutil.copyfile(N/'source/findutils-4.11.0.tar.xz',P/'original/findutils-4.11.0.tar.xz');shutil.copytree(N/'source/derived-config',P/'derived-config',dirs_exist_ok=True)
readme=N/'SOURCE_OFFER_README.md';text=readme.read_text() if readme.exists() else '# GNU findutils4.11.0 — original and editable sources / 原文と編集用原稿\n\nTopoverview and complete chapters1–2 with whole adopted footnote. Remaining chapters, appendices and indexes supplied by fixed complete English manual, Info and unchanged Texinfo/archive. Original doc/find.texi: GFDL1.3-or-later, no Invariant Sections or Cover Texts. All original authors David MacKenzie and James Youngman, publisherFSF, original1994–2026 notice, full original English license, Libx2026 modification notice and History retained. Document9July2026 / release11July2026 / acquisition6October2026. Generated dblocation.texi is separate and matches /usr/local/var/locatedb in packagedInfo and original Makefile recipe; original inputs unchanged.\n\nFormal separate whole meaning reviews and final editable rebuild ZIP are pending. 草稿は未公開です。\n';(P/'SOURCE_README.md').write_text(text)
(A/'src/config/project.config.jsonc').write_text((N/'drafts/project.config.jsonc').read_text());(A/'src/data').mkdir(exist_ok=True);(A/'src/data/document-headings.json').write_text(json.dumps(heads,ensure_ascii=False,indent=2)+'\n')
(A/'src/styles/global.css').write_text("@import '@docs/theme/css/starlight-overrides.css';\n.gnu-findutils-original-content pre {\n  max-width: 100%;\n  min-width: 0;\n  overflow-x: auto;\n  white-space: pre;\n  tab-size: 4;\n}\n.gnu-findutils-original-content pre code {\n  white-space: pre;\n}\n.gnu-findutils-original-content dd {\n  min-width: 0;\n}\n.document-provenance .attribution-text {\n  overflow-wrap: anywhere;\n}\n")
review=json.loads((N/'REVIEW_MANIFEST.json').read_text()) if (N/'REVIEW_MANIFEST.json').exists() else {'pages':[]}
for row in items:
 approved=next((r for r in review['pages'] if r['id']==row['id'] and r['status']=='passed'),None)
 if approved and approved['canonical']['sha256']==row['canonicalSHA256'] and approved['translation']['sha256']==row['translationSHA256']:
  row['meaningReview']='passed';row['translation']='reviewed'
(N/'CONTENT_MAP.json').write_text(json.dumps({'schemaVersion':1,'version':'4.11.0','manualGeneratedSHA256':h(N/'source/derived-manual.html'),'sourceChapterOrderCoverageExact':plan['sourceChapterCoverageExact'],'guidePages':26,'referenceEnglishOnly':['02-reference/01-gfdl.md'],'originalPre':31,'VAR':146,'tables':2,'footnotes':1,'items':items,'meaningReview':'passed' if all(r['meaningReview']=='passed'for r in items) else 'pending'},ensure_ascii=False,indent=2)+'\n');print('EN26+EnglishGFDL/JA26 adopted; exact approved reviews reused',sum(r['meaningReview']=='passed'for r in items))
