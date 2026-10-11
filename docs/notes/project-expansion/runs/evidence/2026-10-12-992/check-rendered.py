from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlsplit,unquote
import json,hashlib,datetime,shutil,subprocess
R=Path('/Users/dolphilia/github/libx');E=Path(__file__).resolve().parent
U=R/'docs/notes/document-import/gnu-tar/v1-35/updates/2026-10-12-option-summary'
W=Path('/private/tmp/libx-gnu-tar-update-986');D=W/'apps/gnu-tar/dist'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();cache={};rows=[];refs=0
for r in json.loads((U/'PAGE_PLAN.json').read_text())['rows']:
 for lang in ['en','ja']:
  preferred=U/'preferred'/lang/r['page'];f=D/'v1-35'/lang/r['page'][:-3]/'index.html'
  source=BeautifulSoup(preferred.read_text().split('---',2)[2],'html.parser').select_one('.gnu-tar-original-content')
  rendered=BeautifulSoup(f.read_text(),'html.parser');body=rendered.select_one('.gnu-tar-original-content')
  expected = str(source)
  normalizedBlankLine = lang == 'en' and r['page'] == '01-guide/43-short-option-summary.md'
  if normalizedBlankLine:
   needle = '\n\n<p>The latter usage is deprecated.'
   assert expected.count(needle) == 1
   expected = expected.replace(needle, '\n<p>The latter usage is deprecated.')
  assert expected==str(body),(lang,r['page'],'entire bodyDOM')
  assert [x.get_text() for x in source.select('pre')]==[x.get_text() for x in body.select('pre')]
  ids=[x['id'] for x in rendered.select('[id]')];assert len(ids)==len(set(ids)),r['page']
  for a in rendered.select('a[href]'):
   v=urlsplit(a['href'])
   if v.scheme or v.netloc:continue
   path=unquote(v.path)
   if path.startswith('/docs/gnu-tar/'):target=D/path[len('/docs/gnu-tar/'):]
   elif not path:target=f
   elif not path.startswith('/'):target=f.parent/path
   else:continue # Site root and other projects are integration checks.
   if target.is_dir():target=target/'index.html'
   assert target.exists(),(r['page'],a['href'],str(target))
   if v.fragment:
    if target not in cache:cache[target]=BeautifulSoup(target.read_text(),'html.parser')
    assert cache[target].find(id=unquote(v.fragment)),(r['page'],a['href'])
   refs+=1
  rows.append({'page':r['page'],'language':lang,'preferredSHA256':sha(preferred),'renderedSHA256':sha(f),'fullBodyExactAfterKnownWhitespace':True,'normalizedOneBlankLineBeforeNestedTableParagraph':normalizedBlankLine,'pre':len(body.select('pre'))})
tracked=subprocess.check_output(['git','-C',str(W),'diff','--name-only'],text=True).splitlines()
assert sorted(tracked)==sorted(['apps/gnu-tar/public/'+s for s in ['search/v1-35/en.json','search/v1-35/ja.json','sidebar/sidebar-en-v1-35.json','sidebar/sidebar-ja-v1-35.json']]),tracked
shutil.copyfile('/private/tmp/libx-gnu-tar-build-992.log',E/'TARGET_BUILD.log')
assert '[build] Complete!' in (E/'TARGET_BUILD.log').read_text()
out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'pages':rows,'all10WholeBodiesExactAfterKnownWhitespace':True,'all10PreCopiesExact':sum(r['pre'] for r in rows),'localReferences':refs,'allPreviousTrackedDocumentsUnchanged':True,'trackedChanges':tracked,'targetBuildPages':95,'buildInitialFailure':'First command used shared repository where app prebuild executable was unavailable (ENOENT); corrected cwd to isolated W, unchanged dependencies, succeeded.','limits':'Target build and full new bodyDOM/ownlocal links only. English43 loses exactly one blank line before the nested -o cell paragraph during Astro rendering; sole explicit normalization, no text/code/element/link difference. Native representative, globalreader-scope settings, sourcekit/replay, selective integrated regression and public deployment remain pending.'}
(E/'TARGET_RENDERED.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print('10 complete bodyDOMs;',refs,'local references;95routes build passed;old tracked docs unchanged')
