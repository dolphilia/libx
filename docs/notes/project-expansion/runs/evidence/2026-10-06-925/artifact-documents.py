from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,urllib.parse
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-gzip-formal-923');E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-925';role=__import__('sys').argv[1];D=Path('/private/tmp/libx-gnu-gzip-'+role+'-artifact-925/dist');N=W/'docs/notes/document-import/gnu-gzip/v1-15';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();norm=lambda s:' '.join(s.split());M=json.loads((N/'CONTENT_MAP.json').read_text());rows=[];refs=[];seen={};links=0;footers=0;pres=0
for language in ['en','ja']:
 for row in M['items']:
  p=D/'docs/gnu-gzip/v1-15'/language/row['id'].replace('.md','/index.html');soup=BeautifulSoup(p.read_text(),'html.parser');actual=soup.select_one('.gnu-gzip-original-content');md=(W/'apps/gnu-gzip/src/content/docs/v1-15'/language/row['id']).read_text();raw=md.split('---',2)[2];expected=BeautifulSoup(raw,'html.parser').select_one('.gnu-gzip-original-content');assert norm(actual.get_text())==norm(expected.get_text());assert [x.get_text() for x in actual.select('pre')]==[x.get_text()for x in expected.select('pre')];pres+=len(actual.select('pre'));ids=[x['id']for x in soup.select('[id]')];assert len(ids)==len(set(ids))
  footer=soup.select_one('.document-provenance');assert footer;ft=norm(footer.get_text());assert all(x in ft for x in ['Jean-loup Gailly','Free Software Foundation','1992','1993','2026','Libx','History','Invariant','3 January 2026']);z=footer.select_one('a[href="/docs/gnu-gzip/source/v1-15/source.zip"]');assert z and z.get_text().strip();footers+=1
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
  rows.append({'path':str(p.relative_to(D)),'markdownSHA256':h(W/'apps/gnu-gzip/src/content/docs/v1-15'/language/row['id']),'allBodyTextAndPreExact':True,'uniqueIDs':True,'fullFooterNoticeAndSourceZIP':True})
assert len(rows)==16 and pres==30
original=BeautifulSoup((N/'source/derived-manual.html').read_text(),'html.parser').select_one('#GNU-Free-Documentation-License')
for row in rows:
 soup=BeautifulSoup((D/row['path']).read_text(),'html.parser'); license=soup.select_one('.gnu-gzip-license .appendix-level-extent')
 assert norm(license.get_text())==norm(original.get_text()),row['path']
 assert [x.get_text()for x in license.select('pre')]==[x.get_text()for x in original.select('pre')]
assert sum(len(BeautifulSoup((D/r['path']).read_text(),'html.parser').select('.gnu-gzip-original-content var'))for r in rows)==12
assert sum(len(BeautifulSoup((D/r['path']).read_text(),'html.parser').select('.gnu-gzip-original-content table'))for r in rows)==0
# Original English license and source offer are retained in the final kit/static source and rebuilt documents.
assert h(W/'apps/gnu-gzip/public/source/v1-15/manual.html')==h(N/'source/derived-manual.html')
for f in json.loads((N/'SOURCE_MANIFEST.json').read_text())['files']:
 src=f['path']; rel=src.removeprefix('source/')
 if src=='source/derived-manual.html':rel='manual.html'
 elif src=='source/gzip-1.15.tar.xz':rel='original/gzip-1.15.tar.xz'
 assert h(D/'docs/gnu-gzip/source/v1-15'/rel)==f['sha256'],src
source=json.loads((E.parent/'2026-10-06-924/SOURCE_OFFER.json').read_text());assert h(D/'docs/gnu-gzip/source/v1-15/source.zip')==source['archiveSHA256'];assert h(D/'docs/gnu-gzip/source/v1-15/SOURCE_README.md')==h(N/'SOURCE_OFFER_README.md')
ref=D/'docs/gnu-gzip/v1-15/en/02-reference/01-gfdl/index.html';rs=BeautifulSoup(ref.read_text(),'html.parser').find(id='GNU-Free-Documentation-License');assert norm(rs.get_text())==norm(original.get_text());assert [x.get_text()for x in rs.select('pre')]==[x.get_text()for x in original.select('pre')]
result={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'guides':16,'EnglishGuides':8,'JapaneseGuides':8,'renderedPre':pres,'originalInputs':11,'footerZIPLinks':footers,'allLocalReferences':links,'rows':rows,'reusedWholeMeaningReview':8,'unmodifiedBodyReviewNotRepeated':True,'GFDLPreferredSource':'593member kit reconstructed independently;unmodified originalTexinfo/Info/archive/fullFDL,17editableMD/8preferredtranslations,authorship/publisher/title/copyright/conditions/fulllicense/History+modificationdate retained. No InvariantSections/noCoverTexts.','limits':'Original manual technical assertions and examples not audited/executed;localHTTP andnativefinalUI stillpending.'};(E/(role.upper()+'_DOCUMENTS.json')).write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in result.items()if k!='rows'},ensure_ascii=False))
