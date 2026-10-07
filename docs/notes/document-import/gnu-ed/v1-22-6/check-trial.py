from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,urllib.parse
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/gnu-ed/v1-22-6';A=Path('/private/tmp/libx-gnu-ed-trial-932/apps/gnu-ed-trial');M=json.loads((N/'CANDIDATE_DRAFT.json').read_text());h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();norm=lambda t:' '.join(t.split());rows=[];links=0
for row in M['proposedScope']['rows']+[{'slug':'13-gfdl','EnglishDraftPath':'drafts/reference/gfdl.body.html'}]:
 expected=BeautifulSoup((N/row['EnglishDraftPath']).read_text(),'html.parser');p=A/'dist/v1-22-6/en/01-guide'/row['slug']/'index.html';soup=BeautifulSoup(p.read_text(),'html.parser');actual=soup.select_one('.gnu-ed-original-content');assert actual;assert norm(actual.get_text())==norm(expected.get_text()),(row['slug'],'text');
 for selector in ['pre','var','code,samp','dt','dd']:
  assert [x.get_text()for x in actual.select(selector)]==[x.get_text()for x in expected.select(selector)],(row['slug'],selector)
 ids=[x.get('id')for x in soup.select('[id]')];assert len(ids)==len(set(ids)),row['slug']
 for a in actual.select('a[href]'):
  u=urllib.parse.urlsplit(a['href'])
  if u.scheme or u.netloc:continue
  if not u.path:dest=p
  else:assert u.path.startswith('/docs/gnu-ed-trial/');dest=A/'dist'/u.path.removeprefix('/docs/gnu-ed-trial/')/'index.html'
  assert dest.is_file(),a['href']
  if u.fragment:assert urllib.parse.unquote(u.fragment) in [x.get('id')for x in BeautifulSoup(dest.read_text(),'html.parser').select('[id]')],a['href']
  links+=1
 footer=soup.select_one('.document-provenance');assert footer and all(t in footer.get_text()for t in ['Andrew L. Moore','François Pinard','Antonio Diaz Diaz','GNU ed','1.22.6','GFDL'])
 rows.append({'slug':row['slug'],'renderedSHA256':h(p),'draftSHA256':h(N/row['EnglishDraftPath']),'textAndLiteralCodeAndVARAndDefinitionListsExact':True,'uniqueIDs':True,'footerAttributionPreserved':True,'pre':len(actual.select('pre'))})
assert len(rows)==13 and sum(x['pre']for x in rows)==19
out={'status':'passed-candidate-conversion-build','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sourceArchiveSHA256':M['archiveSHA256'],'pages':13,'all12ManualBodyTextExact':True,'renderedPre':19,'localBodyHrefAndAnchorValid':links,'sourceEncodingCorrect':True,'rows':rows,'wholeMeaningReviewPerformed':False,'JapaneseTranslationCompleted':False,'nativeDisplay':'pending','selected':False,'scope':'Build/source-to-rendered text/pre/var/code/samp/definition correspondence and internalreferences only; no upstream technicalaudit/examples execution/sourceoffer validation'};(N/'TRIAL_BINDING.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in out.items()if k!='rows'},ensure_ascii=False))
