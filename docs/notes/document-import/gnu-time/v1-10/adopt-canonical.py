"""Adopt the fixed complete guide in a normally created isolated app.
Reuse the separate whole draft reviews only when the complete body hashes match.
"""
from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
from collections import Counter
import hashlib,json,re,shutil
N=Path(__file__).resolve().parent;W=N.parents[4];A=W/'apps/gnu-time';P=A/'public/source/v1-10'
h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
assert A.exists(),'Run only after normal template creator in the formal isolated checkout'
C=json.loads((N/'CANDIDATE_DRAFT.json').read_text());M=json.loads((N/'SOURCE_MANIFEST.json').read_text())
for x in M['files']:assert h(N/x['path'])==x['sha256']
context=json.loads((N/'drafts/notice-context.json').read_text());notice=BeautifulSoup(context[0]['html'],'html.parser')
assert 'David MacKenzie' in notice.get_text() and 'History' in notice.get_text() and 'RELICENSING' in notice.get_text()
reviews=json.loads((N/'DRAFT_REVIEW_MANIFEST.json').read_text());assert reviews['pages']==3
heads={};items=[];mapped=[]
for row in C['proposedScope']['rows']:
 slug=row['slug'];route='01-guide/'+slug+'.md';en=N/'drafts/en'/(slug+'.body.html');ja=N/'drafts/ja'/(slug+'.body.html')
 assert h(en)==row['bodySHA256'];a=BeautifulSoup(en.read_text(),'html.parser');b=BeautifulSoup(ja.read_text(),'html.parser')
 assert [p.get_text()for p in a.select('pre')]==[p.get_text()for p in b.select('pre')]
 assert Counter(p.get_text()for p in a.select('var'))==Counter(p.get_text()for p in b.select('var'))
 inherited=next(x for x in reviews['rows']if x['slug']==slug);oldReviewPath=N/'DRAFT_REVIEW_MANIFEST.json';r=inherited
 assert r['source']['sha256']==h(en) and r['translation']['sha256']==h(ja)
 assert r['units']['sha256']==h(N/'translations'/(slug+'-units.json'))
 assert r['preferredTranslation']['sha256']==h(N/'translations'/(slug+'-ja.json'))
 for lang,src,s in [('en',en,a),('ja',ja,b)]:
  title=row['titleEN']if lang=='en'else re.sub(r'^\d+\s+','',s.find(re.compile('^h[1-6]$')).get_text().replace('¶','').strip())
  if lang=='ja'and slug=='01-overview-notice':title='概要と原著通知'
  front={'title':title,'description':'Complete fixed GNU Time 1.10 guide with paired Japanese translation.'if lang=='en'else'GNU Time 1.10の概要と第1〜2章全文。固定原文に対するLibxの独立・非公式日本語訳。','documentId':'gnu-time:1.10:'+slug,'licenseSource':'gnu-time-manual','toc':{'maxLevel':4},'documentContext':context}
  literal=src.read_text()
  if lang=='en':
   placeholders={}
   for i,pre in enumerate(s.select('pre')):
    key=f'LIBX_TIME_PRE_{i}_END';placeholders[key]=str(pre).replace('\n','&#10;').replace('\t','&#9;');pre.replace_with(NavigableString(key))
   literal=str(s)
   for key,value in placeholders.items():literal=literal.replace(key,value)
   assert [x.get_text()for x in BeautifulSoup(literal,'html.parser').select('pre')]==[x.get_text()for x in a.select('pre')] if lang!='en' else [x.get_text()for x in BeautifulSoup(en.read_text(),'html.parser').select('pre')]==[x.get_text()for x in BeautifulSoup(literal,'html.parser').select('pre')]
  page='---\n'+''.join(k+': '+json.dumps(v,ensure_ascii=False)+'\n'for k,v in front.items())+'---\n\n'+'<div class="gnu-time-original-content">'+literal+'</div>\n'
  for base in [N/'canonical'/lang,A/'src/content/docs/v1-10'/lang,P/'edited'/lang]:
   dest=base/route;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(page)
  heads['v1-10/'+lang+'/'+route.removesuffix('.md')]=[{'depth':int(x.name[1]),'slug':x['id'],'text':re.sub(r'\s+',' ',x.get_text()).strip()}for x in s.find_all(re.compile('^h[1-6]$'))if x.has_attr('id')]
 canonical=N/'canonical/en'/route;translated=N/'canonical/ja'/route
 sourceFragment=N/'source-fragments/en'/route.replace('.md','.html');assert h(sourceFragment)==h(en)
 mapped.append({'id':route,'status':'passed','source':{'path':'source-fragments/en/'+route.replace('.md','.html'),'sha256':h(sourceFragment)},'canonical':{'path':'canonical/en/'+route,'sha256':h(canonical)},'translation':{'path':'canonical/ja/'+route,'sha256':h(translated)},'body':{'EnglishSHA256':h(en),'JapaneseSHA256':h(ja)},'inheritedWholeReview':{'path':'DRAFT_REVIEW_MANIFEST.json','sha256':h(oldReviewPath)},'reviewedUnits':r['units']['range'][1]-r['units']['range'][0]+1,'reviewScope':'Whole unchanged bodies inherited from saved separate draft review. Newly added frontmatter/context is verified separately.'})
 items.append(dict(row,id=route,canonical='canonical/en/'+route,canonicalSHA256=h(canonical),translationCanonical='canonical/ja/'+route,translationSHA256=h(translated),translatedBodySHA256=h(ja),unitsSHA256=h(N/'translations'/(slug+'-units.json')),translationUnitsSHA256=h(N/'translations'/(slug+'-ja.json')),translation='reviewed',meaningReview='passed'))
licensebody=N/'drafts/reference/gfdl.body.html';assert h(licensebody)==C['proposedScope']['EnglishOnlyLicense']['sha256']
ls=BeautifulSoup(licensebody.read_text(),'html.parser');ph={}
for a in ls.select('a[href]'):
 if a['href'].startswith('#'):a['href']='/docs/gnu-time/source/v1-10/manual.html'+a['href']
for i,pre in enumerate(ls.select('pre')):
 key=f'LIBX_GZIP_FDL_PRE_{i}_END';ph[key]=str(pre).replace('\n','&#10;').replace('\t','&#9;');pre.replace_with(NavigableString(key))
fragment=str(ls)
for key,value in ph.items():fragment=fragment.replace(key,value)
assert [x.get_text()for x in BeautifulSoup(fragment,'html.parser').select('pre')]==[x.get_text()for x in BeautifulSoup(licensebody.read_text(),'html.parser').select('pre')]
notice.find('details').decompose();front={'title':'Original English GNU Free Documentation License','licenseSource':'gnu-time-manual','documentContext':[{'kind':'source','html':str(notice)}]}
page='---\n'+''.join(k+': '+json.dumps(v,ensure_ascii=False)+'\n'for k,v in front.items())+'---\n\n'+fragment+'\n'
for base in [N/'canonical/en',A/'src/content/docs/v1-10/en',P/'edited/en']:
 dest=base/'02-reference/01-gfdl.md';dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(page)
for folder in [A/'src/content/docs/v1',A/'public/search/v1']:
 if folder.exists():shutil.rmtree(folder)
for f in (A/'public/sidebar').glob('*-v1.json'):f.unlink()
P.mkdir(parents=True,exist_ok=True);shutil.copyfile(N/'source/derived-manual.html',P/'manual.html');shutil.copytree(N/'source/original',P/'original',dirs_exist_ok=True);shutil.copyfile(N/'source/time-1.10.tar.xz',P/'original/time-1.10.tar.xz')
readme=N/'SOURCE_OFFER_README.md'
if readme.exists():shutil.copyfile(readme,P/'SOURCE_README.md')
else:(P/'SOURCE_README.md').write_text('# GNU Time 1.10 — original and editable sources / 原文と編集用原稿\n\nTop and complete chapters 1–2, English-only original GFDL; fixed full original HTML, concept index, Info, Texinfo and unchanged distribution archive. GFDL1.3-or-later; no Invariant Sections or Cover Texts. Original David MacKenzie and FSF notices, full license, separate Libx title/modification notice and History retained. Document 13 February 2026 / release 14 April 2026 / acquisition 6 October 2026. Whole body reviews are inherited from current saved drafts; formal source-kit/verification/publication remains pending.\n')
(A/'src/config/project.config.jsonc').write_text((N/'drafts/project.config.jsonc').read_text());(A/'src/data').mkdir(exist_ok=True);(A/'src/data/document-headings.json').write_text(json.dumps(heads,ensure_ascii=False,indent=2)+'\n')
(A/'src/styles/global.css').write_text("@import '@docs/theme/css/starlight-overrides.css';\n.gnu-time-original-content pre {\n  max-width: 100%;\n  min-width: 0;\n  overflow-x: auto;\n  white-space: pre;\n  tab-size: 4;\n}\n.gnu-time-original-content pre code {\n  white-space: pre;\n}\n.gnu-time-original-content dd {\n  min-width: 0;\n}\n.document-provenance .attribution-text {\n  overflow-wrap: anywhere;\n}\n")
(N/'REVIEW_MANIFEST.json').write_text(json.dumps({'schemaVersion':1,'version':'1.10','wholeBodyReviews':3,'completedPages':3,'reviewedUnits':111,'inheritedDraftManifest':{'path':'DRAFT_REVIEW_MANIFEST.json','sha256':h(N/'DRAFT_REVIEW_MANIFEST.json')},'pages':mapped,'contextAndRendererVerification':'pending'},ensure_ascii=False,indent=2)+'\n')
(N/'CONTENT_MAP.json').write_text(json.dumps({'schemaVersion':1,'version':'1.10','manualGeneratedSHA256':h(N/'source/derived-manual.html'),'guidePages':3,'referenceEnglishOnly':['02-reference/01-gfdl.md'],'originalPre':9,'VAR':28,'tables':0,'footnotes':0,'items':items,'meaningReview':'passed-body-only','contextAndRendererVerification':'pending'},ensure_ascii=False,indent=2)+'\n')
print('GNU Time EN3+EnglishGFDL/JA3 adopted; current complete body reviews3/111 mapped; context/renderer verification pending')

# Inherit the frozen formal review only when every regenerated complete file matches.
formal=N/"FORMAL_REVIEW_MANIFEST.json"
if formal.exists():
 saved=json.loads(formal.read_text())
 for row in saved["pages"]:
  for role in ["source","canonical","translation"]:assert h(W/row[role]["path"])==row[role]["sha256"]
 (N/"REVIEW_MANIFEST.json").write_bytes(formal.read_bytes())
 print("Frozen whole body/formal context review reused for exact regenerated files; no new approval")
