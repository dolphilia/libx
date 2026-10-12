from pathlib import Path
from bs4 import BeautifulSoup
import hashlib,json,urllib.parse,datetime
R=Path('/Users/dolphilia/github/libx');Q=Path('/private/tmp/libx-sed-chapter7-formal-958');role=__import__('sys').argv[1];B=Path('/private/tmp/libx-gnu-sed-'+role+'-artifact-958/dist');D=B/'docs/gnu-sed';E=Path(__file__).resolve().parent;h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();norm=lambda s:' '.join(s.split());lic=BeautifulSoup((Q/'docs/notes/document-import/gnu-sed/v4-10/source/derived/manual.html').read_text(),'html.parser').find(id='GNU-Free-Documentation-License');rows=[];links=0;cache={}
for page in sorted((D/'v4-10').rglob('index.html')):
 rel=page.relative_to(D)
 if len(rel.parts)!=5:continue
 s=BeautifulSoup(page.read_bytes(),'html.parser');raw=(Q/'apps/gnu-sed/src/content/docs'/rel.parent.with_suffix('.md')).read_text();q=BeautifulSoup(raw.split('---',2)[2],'html.parser');selector='.gnu-sed-original-content, .appendix-level-extent#GNU-Free-Documentation-License';a=s.select_one(selector);b=q.select_one(selector);assert a and b,rel;assert norm(a.get_text())==norm(b.get_text()),rel;assert [(x.name,norm(x.get_text()))for x in a.select('h1,h2,h3,h4,h5,h6,table,li,code,samp')] == [(x.name,norm(x.get_text()))for x in b.select('h1,h2,h3,h4,h5,h6,table,li,code,samp')],rel;preA=[x.get_text()for x in a.select('pre')];preB=[x.get_text()for x in b.select('pre')];assert (preA==preB if '02-reference'not in str(rel) else [[line for line in t.splitlines() if line]for t in preA]==[[line for line in t.splitlines() if line]for t in preB]),rel;footer=s.select_one('.document-provenance');assert footer
 if '02-reference'not in str(rel):
  full=footer.select_one('.gnu-sed-license #GNU-Free-Documentation-License');assert full,rel;assert norm(full.get_text())==norm(lic.get_text()),rel;assert [x.get_text()for x in full.select('pre')]==[x.get_text()for x in lic.select('pre')],rel
 for a in s.select('a[href],link[href],script[src]'):
  u=a.get('href')or a.get('src');v=urllib.parse.urlsplit(urllib.parse.urljoin('/docs/gnu-sed/'+str(rel),u))
  if v.scheme or v.netloc:continue
  path=urllib.parse.unquote(v.path);q=D/path.removeprefix('/docs/gnu-sed/')if path.startswith('/docs/gnu-sed/')else B/path.lstrip('/')
  if q.is_dir():q=q/'index.html'
  elif not q.exists()and not q.suffix:q=q/'index.html'
  assert q.is_file(),(rel,u,q);links+=1
  if v.fragment:
   if str(q)not in cache:cache[str(q)]={x.get('id')or x.get('name')for x in BeautifulSoup(q.read_bytes(),'html.parser').select('[id],[name]')}
   assert urllib.parse.unquote(v.fragment)in cache[str(q)],(rel,u,q)
 rows.append({'path':str(rel),'renderSHA256':h(page),'references':'passed','wholeOriginalEnglishLicense':'exact for allguides/referencebody separately checked'})
assert len(rows)==123;public=Q/'apps/gnu-sed/public';assert all(h(p)==h(D/p.relative_to(public))for p in public.rglob('*')if p.is_file());z=D/'source/v4-10/source.zip';offer=json.loads((E/'SOURCE_OFFER_FINAL.json').read_text());assert h(z)==offer['archiveSHA256'];assert h(D/'source/v4-10/SOURCE_README.md')==h(R/'docs/notes/document-import/gnu-sed/v4-10/updates/2026-10-11-chapter-7/SOURCE_OFFER_README.md');out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'documents':123,'allLocalReferences':links,'wholeOriginalEnglishGFDLFooterExact':122,'method':'Compare every canonical raw HTML body text and ordered headings/tables/list items/inline code/samp after whitespace normalization; guide pre text exact; GFDL reference pre permits Markdown-elided empty line only (nonempty lines exact), footer license pre exact; every local href/fragment checked; full GFDL exact after whitespace normalization.','sourceKit':offer['archiveSHA256'],'rows':rows};(E/(role.upper()+'_RENDERED_LINKS.json')).write_text(json.dumps(out,indent=2)+'\n');print(json.dumps({k:v for k,v in out.items()if k!='rows'}))
