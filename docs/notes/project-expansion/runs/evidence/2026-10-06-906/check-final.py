from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,urllib.parse
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-grep-formal-903');E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-906';D=W/'dist';N=W/'docs/notes/document-import/gnu-grep/v3-12';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();norm=lambda s:' '.join(s.split());M=json.loads((N/'CONTENT_MAP.json').read_text());rows=[];refs=[];seen={};links=0;footers=0;pres=0
for language in ['en','ja']:
 for row in M['items']:
  p=D/'docs/gnu-grep/v3-12'/language/row['id'].replace('.md','/index.html');soup=BeautifulSoup(p.read_text(),'html.parser');actual=soup.select_one('.gnu-grep-original-content');md=(W/'apps/gnu-grep/src/content/docs/v3-12'/language/row['id']).read_text();raw=md.split('---',2)[2];expected=BeautifulSoup(raw,'html.parser').select_one('.gnu-grep-original-content');assert norm(actual.get_text())==norm(expected.get_text());assert [x.get_text() for x in actual.select('pre')]==[x.get_text()for x in expected.select('pre')];pres+=len(actual.select('pre'));ids=[x['id']for x in soup.select('[id]')];assert len(ids)==len(set(ids))
  footer=soup.select_one('.document-provenance');assert footer;ft=norm(footer.get_text());assert all(x in ft for x in ['Alain Magloire','Free Software Foundation','1999','2025','2026','Libx','History','Invariant','2008']);z=footer.select_one('a[href="/docs/gnu-grep/source/v3-12/source.zip"]');assert z and z.get_text().strip();footers+=1
  for a in soup.select('a[href],link[href],script[src]'):
   u=a.get('href') or a.get('src');url=urllib.parse.urlsplit(u)
   if url.scheme or url.netloc or not url.path and not url.fragment:continue
   dest=urllib.parse.urljoin('/'+str(p.relative_to(D)),u);v=urllib.parse.urlsplit(dest);rel=urllib.parse.unquote(v.path).lstrip('/');q=D/rel
   if q.is_dir():q=q/'index.html'
   elif not q.exists() and not Path(rel).suffix:q=D/rel/'index.html'
   assert q.is_file(),(u,str(q));links+=1
   if v.fragment:
    if str(q)not in seen:seen[str(q)]={x.get('id') or x.get('name')for x in BeautifulSoup(q.read_text(),'html.parser').select('[id],[name]')}
    assert urllib.parse.unquote(v.fragment)in seen[str(q)],(u,str(q))
  rows.append({'path':str(p.relative_to(D)),'markdownSHA256':h(W/'apps/gnu-grep/src/content/docs/v3-12'/language/row['id']),'allBodyTextAndPreExact':True,'uniqueIDs':True,'fullFooterNoticeAndSourceZIP':True})
assert len(rows)==48 and pres==58
# Original English license and source offer are retained in the final kit/static source and rebuilt documents.
assert h(W/'apps/gnu-grep/public/source/v3-12/manual.html')==h(N/'source/derived/manual.html')
for f in json.loads((N/'SOURCE_MANIFEST.json').read_text())['files']:assert h(D/'docs/gnu-grep/source/v3-12/original'/Path(f['path']).relative_to('source/original'))==f['sha256']
source=json.loads((E/'SOURCE_OFFER.json').read_text());assert h(D/'docs/gnu-grep/source/v3-12/source.zip')==source['archiveSHA256'];assert h(D/'docs/gnu-grep/source/v3-12/SOURCE_README.md')==h(N/'SOURCE_OFFER_README.md')
result={'status':'passed-final-source-offer-render-and-links','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'guides':48,'EnglishGuides':24,'JapaneseGuides':24,'renderedPre':pres,'originalInputs':12,'footerZIPLinks':footers,'allLocalReferences':links,'rows':rows,'reusedWholeMeaningReview':24,'unmodifiedBodyReviewNotRepeated':True,'GFDLPreferredSource':'723member kit reconstructed independently;unmodified originalTexinfo/Info/archive/fullFDL,49editableMD/24preferredtranslations,authorship/publisher/title/copyright/conditions/fulllicense/History+modificationdate retained. No InvariantSections/noCoverTexts.','limits':'Original manual technical assertions and examples not audited/executed;localHTTP andnativefinalUI stillpending.'};(E/'FINAL_RENDERED_LINKS.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in result.items()if k!='rows'},ensure_ascii=False))
