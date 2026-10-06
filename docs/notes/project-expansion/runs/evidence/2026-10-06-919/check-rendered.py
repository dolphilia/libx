from pathlib import Path
from bs4 import BeautifulSoup
import json,re,hashlib,urllib.parse
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-findutils-formal-917');N=W/'docs/notes/document-import/gnu-findutils/v4-11-0';A=W/'apps/gnu-findutils';D=A/'dist';E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-919';plan=json.loads((N/'DRAFT_PAGE_PLAN.json').read_text());norm=lambda s:re.sub(r'\s+',' ',s).strip();rows=[];references=0
for row in plan['pages'][18:26]:
 for lang in ['en','ja']:
  slug=row['slug'];p=D/f'v4-11-0/{lang}/01-guide/{slug}/index.html';s=BeautifulSoup(p.read_text(),'html.parser');a=s.select_one('article .gnu-findutils-original-content');assert a,p;raw=BeautifulSoup((N/f'drafts/{lang}/{slug}.body.html').read_text(),'html.parser').select_one('.gnu-findutils-original-content');assert norm(a.get_text())==norm(raw.get_text());assert [p.get_text()for p in a.select('pre')]==[p.get_text()for p in raw.select('pre')]
  for link in a.select('a[href]'):
   u=urllib.parse.urlparse(link['href']);
   if u.scheme or u.netloc:continue
   path=urllib.parse.unquote(u.path).removeprefix('/docs/gnu-findutils/');target=D/path if path else p
   if not target.is_file():target=target/'index.html'
   assert target.is_file(),(p,link['href']);references+=1
   if u.fragment:assert BeautifulSoup(target.read_text(),'html.parser').find(id=urllib.parse.unquote(u.fragment)),(p,link['href'])
  footer=s.select_one('.document-provenance');assert footer and 'James Youngman' in footer.get_text() and 'History' in footer.get_text() and 'RELICENSING' in footer.get_text();original=BeautifulSoup((N/'drafts/reference/gfdl.body.html').read_text(),'html.parser');license=s.select_one('details.gnu-findutils-license');assert norm(license.get_text()).endswith(norm(original.get_text()));assert footer.select_one('a[href$="/source.zip"]')
  rows.append({'slug':slug,'language':lang,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'allBodyTextExact':True,'literalPre':len(a.select('pre')),'footerOriginalAuthorsHistoryWholeLicense':True})
r={'status':'passed','at':__import__('datetime').datetime.now(__import__('datetime').timezone.utc).isoformat(),'guidePages':16,'reviewedSections':8,'renderedPre':24,'allArticleLocalReferences':references,'rows':rows,'sourceZIP':'Visible link only; final kit build/download verification pending. All26whole meaning reviews saved; final formal gates pending. Representative native observation separate.'};(E/'BATCH3_RENDERED.json').write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in r.items()if k!='rows'},ensure_ascii=False))
