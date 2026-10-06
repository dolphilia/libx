from pathlib import Path
from bs4 import BeautifulSoup
import hashlib,json,urllib.parse,datetime
R=Path('/Users/dolphilia/github/libx');Q=Path('/private/tmp/libx-diffutils-chapters16-18-formal-948');role=__import__('sys').argv[1];B=Path('/private/tmp/libx-gnu-diffutils-'+role+'-artifact-948/dist');D=B/'docs/gnu-diffutils';E=Path(__file__).resolve().parent;h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();norm=lambda s:' '.join(s.split());lic=BeautifulSoup((Q/'docs/notes/document-import/gnu-diffutils/v3-12/source/derived/manual.html').read_text(),'html.parser').find(id='Copying-This-Manual');rows=[];links=0;cache={}
for page in sorted((D/'v3-12').rglob('index.html')):
 rel=page.relative_to(D)
 if len(rel.parts)!=5:continue
 s=BeautifulSoup(page.read_bytes(),'html.parser');q=BeautifulSoup((Q/'apps/gnu-diffutils/dist'/rel).read_bytes(),'html.parser');selector='.gnu-diffutils-original-content, .appendix-level-extent#Copying-This-Manual';a=s.select_one(selector);b=q.select_one(selector);assert a and b,rel;assert a.get_text()==b.get_text(),rel;assert [x.get_text()for x in a.select('pre')]==[x.get_text()for x in b.select('pre')],rel;footer=s.select_one('.document-provenance');assert footer
 if '02-reference'not in str(rel):
  full=footer.select_one('.gnu-diffutils-license #Copying-This-Manual');assert full,rel;assert norm(full.get_text())==norm(lic.get_text()),rel;assert [x.get_text()for x in full.select('pre')]==[x.get_text()for x in lic.select('pre')],rel
 for a in s.select('a[href],link[href],script[src]'):
  u=a.get('href')or a.get('src');v=urllib.parse.urlsplit(urllib.parse.urljoin('/docs/gnu-diffutils/'+str(rel),u))
  if v.scheme or v.netloc:continue
  path=urllib.parse.unquote(v.path);q=D/path.removeprefix('/docs/gnu-diffutils/')if path.startswith('/docs/gnu-diffutils/')else B/path.lstrip('/')
  if q.is_dir():q=q/'index.html'
  elif not q.exists()and not q.suffix:q=q/'index.html'
  assert q.is_file(),(rel,u,q);links+=1
  if v.fragment:
   if str(q)not in cache:cache[str(q)]={x.get('id')or x.get('name')for x in BeautifulSoup(q.read_bytes(),'html.parser').select('[id],[name]')}
   assert urllib.parse.unquote(v.fragment)in cache[str(q)],(rel,u,q)
 rows.append({'path':str(rel),'renderSHA256':h(page),'references':'passed','wholeOriginalEnglishLicense':'exact for allguides/referencebody separately checked'})
assert len(rows)==219;public=Q/'apps/gnu-diffutils/public';assert all(h(p)==h(D/p.relative_to(public))for p in public.rglob('*')if p.is_file());z=D/'source/v3-12/source.zip';offer=json.loads((E/'SOURCE_OFFER.json').read_text());assert h(z)==offer['archiveSHA256'];assert h(D/'source/v3-12/SOURCE_README.md')==h(Q/'docs/notes/document-import/gnu-diffutils/v3-12/updates/2026-10-07-chapters-16-18/SOURCE_OFFER_README.md');out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'documents':219,'allLocalReferences':links,'wholeOriginalEnglishGFDLFooterExact':218,'sourceKit':offer['archiveSHA256'],'rows':rows};(E/(role.upper()+'_RENDERED_LINKS.json')).write_text(json.dumps(out,indent=2)+'\n');print(json.dumps({k:v for k,v in out.items()if k!='rows'}))
