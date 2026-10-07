from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,urllib.parse
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-ed-source-rebuild-935/workspace');E=Path(__file__).resolve().parent;N=W/'docs/notes/document-import/gnu-ed/v1-22-6';D=W/'apps/gnu-ed/dist';B=Path('/private/tmp/libx-gnu-time-production-artifact-932/dist');h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();norm=lambda s:' '.join(s.split());links=0;pre=0;rows=[];seen={};original=BeautifulSoup((N/'source/derived-manual.html').read_bytes(),'html.parser',from_encoding='iso-8859-15').find(id='GNU-Free-Documentation-License')
for p in sorted((N/'canonical').rglob('*.md')):
 rel=p.relative_to(N/'canonical').with_suffix('');page=D/'v1-22-6'/rel/'index.html';s=BeautifulSoup(page.read_bytes(),'html.parser');body=s.select_one('.gnu-ed-original-content');md=p.read_text();expected=BeautifulSoup(md.split('<div class="gnu-ed-original-content">',1)[1].rsplit('</div>',1)[0],'html.parser');assert norm(body.get_text())==norm(expected.get_text());assert [x.get_text()for x in body.select('pre')]==[x.get_text()for x in expected.select('pre')];pre+=len(body.select('pre'))
 footer=s.select_one('.document-provenance');assert footer;ft=footer.get_text();assert all(x in ft for x in ['François Pinard','Andrew L. Moore','Antonio Diaz Diaz','Free Software Foundation','1993','1994','2006-2026','History','Libx','7 October 2026']);assert footer.select_one('a[href="/docs/gnu-ed/source/v1-22-6/source.zip"]')
 license=footer.select_one('.gnu-ed-license #GNU-Free-Documentation-License')
 if license is not None:assert norm(license.get_text())==norm(original.get_text());assert [x.get_text()for x in license.select('pre')]==[x.get_text()for x in original.select('pre')]
 elif str(rel)=='en/02-reference/01-gfdl':assert norm(body.get_text())==norm(original.get_text())
 else:raise AssertionError(('missingfulllicense',rel))
 for a in s.select('a[href],link[href],script[src]'):
  u=a.get('href')or a.get('src');url=urllib.parse.urlsplit(u)
  if url.scheme or url.netloc or not url.path and not url.fragment:continue
  v=urllib.parse.urlsplit(urllib.parse.urljoin('/docs/gnu-ed/'+str(page.relative_to(D)),u));path=urllib.parse.unquote(v.path);q=D/path.removeprefix('/docs/gnu-ed/')if path.startswith('/docs/gnu-ed/')else B/path.lstrip('/')
  if q.is_dir():q=q/'index.html'
  elif not q.exists()and not q.suffix:q=q/'index.html'
  assert q.is_file(),(u,q);links+=1
  if v.fragment:
   if str(q)not in seen:seen[str(q)]={x.get('id')or x.get('name')for x in BeautifulSoup(q.read_bytes(),'html.parser').select('[id],[name]')}
   assert urllib.parse.unquote(v.fragment)in seen[str(q)],(u,q)
 rows.append({'route':str(rel),'canonicalSHA256':h(p),'renderSHA256':h(page),'textPreLicenseFooterAndLinks':'passed'})
assert len(rows)==25 and pre==35
for row in json.loads((N/'SOURCE_MANIFEST.json').read_text())['files']:
 if row['path']=='source/derived-manual.html':continue
 assert h(D/'source/v1-22-6/original'/row['path'].removeprefix('source/'))==row['sha256']
raw=(N/'source/derived-manual.html').read_bytes().decode('iso-8859-15');assert (D/'source/v1-22-6/manual.html').read_text()==raw.replace('charset=iso-8859-15','charset=utf-8');assert h(D/'source/v1-22-6/source.zip')==json.loads((E/'SOURCE_OFFER.json').read_text())['archiveSHA256'];assert h(D/'source/v1-22-6/SOURCE_README.md')==h(N/'SOURCE_OFFER_README.md')
out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'documents':25,'EnglishGuides':12,'JapaneseGuides':12,'EnglishOnlyReference':1,'renderedPre':pre,'allLocalReferences':links,'wholeEnglishLicenseRetainedEveryGuide':True,'originalArchiveAndPreferredTexinfoExact':True,'servedUTF8DecodedTextOnlyCharsetChange':True,'sourceKitMembers':589,'rows':rows,'limits':'No original technical audit or example execution; mechanical rendered checks reuse12separate whole meaning reviews, native/HTTP recorded separately.'};(E/'FINAL_RENDERED_LINKS.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps({k:v for k,v in out.items()if k!='rows'}))
