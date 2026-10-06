from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,urllib.parse,shutil
R=Path('/Users/dolphilia/github/libx'); W=Path('/private/tmp/libx-gnu-gzip-formal-923'); N=W/'docs/notes/document-import/gnu-gzip/v1-15'; E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-923'; D=W/'apps/gnu-gzip/dist'; BASE=Path('/private/tmp/libx-gnu-findutils-production-artifact-921/dist');h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();norm=lambda s:' '.join(s.split()); M=json.loads((N/'CONTENT_MAP.json').read_text());src=BeautifulSoup((N/'source/derived-manual.html').read_text(),'html.parser');license=src.find(id='GNU-Free-Documentation-License');rows=[]; pending=[]; refs=0; pres=0
for lang in ['en','ja']:
 for row in M['items']:
  rel='v1-15/'+lang+'/'+row['id'].replace('.md','/index.html');p=D/rel;s=BeautifulSoup(p.read_text(),'html.parser');actual=s.select_one('.gnu-gzip-original-content'); md=N/'canonical'/lang/row['id'];raw=md.read_text().split('---',2)[2];expected=BeautifulSoup(raw,'html.parser').select_one('.gnu-gzip-original-content');assert norm(actual.get_text())==norm(expected.get_text());assert [x.get_text()for x in actual.select('pre')]==[x.get_text()for x in expected.select('pre')];pres+=len(actual.select('pre'))
  ft=s.select_one('.document-provenance');assert ft; text=norm(ft.get_text());assert all(x in text for x in ['Jean-loup Gailly','Free Software Foundation','Libx','History','1992','1993','2026','Invariant','3 January 2026','Modified 6 October 2026','Libx GNU gzip 1.15 User Guide']);lic=ft.select_one('.gnu-gzip-license .appendix-level-extent');assert norm(lic.get_text())==norm(license.get_text());assert [x.get_text()for x in lic.select('pre')]==[x.get_text()for x in license.select('pre')];assert len(s.select('[id]'))==len(set(x['id']for x in s.select('[id]')))
  for a in s.select('a[href],link[href],script[src]'):
   u=a.get('href')or a.get('src');v=urllib.parse.urlsplit(u)
   if v.scheme or v.netloc or not v.path and not v.fragment:continue
   full=urllib.parse.urlsplit(urllib.parse.urljoin('/docs/gnu-gzip/'+rel,u));path=urllib.parse.unquote(full.path);own=path.startswith('/docs/gnu-gzip/');q=D/path.removeprefix('/docs/gnu-gzip/') if own else BASE/path.lstrip('/')
   if q.is_dir():q=q/'index.html'
   elif not q.exists() and not q.suffix:q=q/'index.html'
   if path=='/docs/gnu-gzip/source/v1-15/source.zip':assert not q.exists();pending.append({'page':rel,'href':u,'reason':'kit packaging pending'});continue
   assert q.is_file(),(u,str(q));refs+=1
   if full.fragment:assert urllib.parse.unquote(full.fragment)in {x.get('id')or x.get('name')for x in BeautifulSoup(q.read_text(),'html.parser').select('[id],[name]')},u
  rows.append({'path':rel,'canonicalSHA256':h(md),'bodyAndPreExact':True,'fullLicenseAndNoticeExact':True,'uniqueIDs':True})
assert len(rows)==16 and pres==30 and len(pending)==16
for f in json.loads((N/'SOURCE_MANIFEST.json').read_text())['files']:
 rel=f['path'].removeprefix('source/')
 if rel=='derived-manual.html':rel='manual.html'
 elif rel=='gzip-1.15.tar.xz':rel='original/gzip-1.15.tar.xz'
 assert h(D/'source/v1-15'/rel)==f['sha256']
proof={'status':'passed-batch-body-source-context-rendering','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'guidePairs':8,'renderedGuides':16,'preBlocks':pres,'fixedInputs':13,'wholeBodyReviewsReused':8,'reviewedUnits':84,'checkedLocalReferences':refs,'pendingReferences':pending,'allLinksComplete':False,'sourceKitAndIndependentReconstruction':'pending','rows':rows}
(E/'BATCH_RENDERED.json').write_text(json.dumps(proof,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({k:v for k,v in proof.items()if k not in ['rows','pendingReferences']},ensure_ascii=False))
