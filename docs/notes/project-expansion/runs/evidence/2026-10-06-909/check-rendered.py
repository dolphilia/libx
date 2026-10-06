from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,re,datetime,urllib.parse,collections
W=Path('/private/tmp/libx-gnu-diffutils-formal-909');N=W/'docs/notes/document-import/gnu-diffutils/v3-12';D=W/'apps/gnu-diffutils/dist';E=Path(__file__).resolve().parent;M=json.loads((N/'CONTENT_MAP.json').read_text());h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();norm=lambda s:re.sub(r'\s+',' ',s).strip();records=[];pending={};refs=0;seen={};ids={};pre=0
for p in D.rglob('*.html'):
 s=BeautifulSoup(p.read_text(),'html.parser');values=[x['id'] for x in s.select('[id]')];assert len(values)==len(set(values)),str(p);ids[p.resolve()]=set(values)
for row in M['items']:
 for lang in ['en','ja']:
  source=N/(row['canonical'] if lang=='en' else 'drafts/ja/'+row['id'])
  if not source.exists():continue
  p=D/'v3-12'/lang/row['id'].removesuffix('.md')/'index.html';assert p.exists();raw=source.read_text().split('---',2)[2];expected=BeautifulSoup(raw,'html.parser').select_one('.gnu-diffutils-original-content');s=BeautifulSoup(p.read_text(),'html.parser');actual=s.select_one('.gnu-diffutils-original-content');assert actual and norm(actual.get_text())==norm(expected.get_text());assert [x.get_text() for x in actual.select('pre')]==[x.get_text() for x in expected.select('pre')];pre+=len(actual.select('pre'));footer=s.select_one('.document-provenance');assert footer and '1992' in footer.get_text() and 'David MacKenzie' in footer.get_text() and 'Paul Eggert' in footer.get_text() and 'Richard Stallman' in footer.get_text() and 'History' in footer.get_text() and '2026 Libx' in footer.get_text();assert footer.select_one('a[href$="source.zip"]');records.append({'id':row['id'],'lang':lang,'sourceSHA256':h(source),'renderedSHA256':h(p),'pre':len(actual.select('pre')),'allBodyTextExact':True,'noticeAndHistory':True});
  for a in [*actual.select('a[href]'),*footer.select('a[href]')]:
   href=a['href'];u=urllib.parse.urlsplit(href)
   if u.scheme or u.netloc:continue
   if u.path.startswith('/docs/gnu-diffutils/'):
    rel=u.path.removeprefix('/docs/gnu-diffutils/');t=D/urllib.parse.unquote(rel)
   elif u.path.startswith('/'):
    continue
   else:t=p if not u.path else p.parent/urllib.parse.unquote(u.path)
   if t.is_dir():t=t/'index.html'
   if not t.exists():
    rel=str(t.relative_to(D))
    allowed=rel=='source/v3-12/source.zip' or any(rel=='v3-12/ja/'+r['id'].removesuffix('.md')+'/index.html' or rel=='v3-12/ja/'+r['id'].removesuffix('.md') for r in M['items'][10:]);assert allowed,(row['id'],lang,href,rel);pending[href]=pending.get(href,0)+1;continue
   if u.fragment and t.suffix=='.html':assert urllib.parse.unquote(u.fragment) in ids[t.resolve()],(href,t)
   refs+=1
for f in json.loads((N/'SOURCE_MANIFEST.json').read_text())['files']:
 rel=Path(f['path']).relative_to('source/original');assert h(D/'source/v3-12/original'/rel)==f['sha256']
for lang,folder in [('en','canonical/en'),('ja','canonical/ja')]:
 for p in (N/folder).rglob('*.md'):assert h(p)==h(D/'source/v3-12/edited'/lang/p.relative_to(N/folder))
license=D/'v3-12/en/02-reference/01-gfdl/index.html';assert license.exists();L=BeautifulSoup(license.read_text(),'html.parser');assert 'GNU Free Documentation License' in L.get_text() and '2000–2002, 2007–2008, 2022–2025' in L.get_text()
out={'status':'passed-scoped-batch1-build-and-render','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'builtHTMLPages':len(list(D.rglob('*.html'))),'EnglishGuides':43,'JapaneseGuides':10,'EnglishOnlyLicense':1,'renderedPre':pre,'uniqueIDsAllPages':True,'originalInputsExact':12,'preferredSourcesExact':54,'resolvedBodyFooterLocalReferences':refs,'pendingPlannedTargets':pending,'records':records,'meaningReviews':10,'unreviewedJapaneseGuides':33,'notPublicationReady':True,'limits':'RemainingJA33 andeditableZIP are explicitlypending. Thoseplannedlinks are notclaimedresolved/ready. ExistingglobalLibx navigation is outside thisisolatedtargetbuild;globalsharedUI evidence reused.'};assert len(records)==53 and pre==39;(E/'BATCH1_RENDERED.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in out.items() if k not in ['records','pendingPlannedTargets']},ensure_ascii=False));print('distinct pending targets',len(pending))
