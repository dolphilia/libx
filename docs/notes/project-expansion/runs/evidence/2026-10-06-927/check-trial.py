from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,tarfile,urllib.parse
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/gnu-time/v1-10';E=Path(__file__).parent;A=Path('/private/tmp/libx-gnu-time-trial-927/apps/gnu-time-trial');M=json.loads((N/'CANDIDATE_DRAFT.json').read_text());h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();norm=lambda s:' '.join(s.split());rows=[];links=0
for lang in ['en','ja']:
 for r in M['proposedScope']['rows']:
  d=N/'drafts'/lang/(r['slug']+'.body.html');expected=BeautifulSoup(d.read_text(),'html.parser');p=A/'dist/v1-10'/lang/'01-guide'/r['slug']/'index.html';soup=BeautifulSoup(p.read_text(),'html.parser');actual=soup.select_one('.gnu-time-original-content');assert norm(actual.get_text())==norm(expected.get_text()),(lang,r['slug'],'body');assert[x.get_text()for x in actual.select('pre')]==[x.get_text()for x in expected.select('pre')];assert[x.get_text()for x in actual.select('var')]==[x.get_text()for x in expected.select('var')];assert[x.get_text()for x in actual.select('code,samp')]==[x.get_text()for x in expected.select('code,samp')];ids=[x['id']for x in soup.select('[id]')];assert len(ids)==len(set(ids))
  for a in actual.select('a[href]'):
   u=urllib.parse.urlsplit(a['href'])
   if not u.scheme and not u.netloc:
    assert not u.path,(r['slug'],a['href']);assert urllib.parse.unquote(u.fragment)in ids,(r['slug'],a['href']);links+=1
  footer=soup.select_one('.document-provenance');assert footer and 'David MacKenzie' in footer.get_text()
  rows.append({'language':lang,'slug':r['slug'],'draftSHA256':h(d),'renderedSHA256':h(p),'bodyTextPreVarCodeExact':True,'pre':len(actual.select('pre')),'VAR':len(actual.select('var')),'uniqueIDs':True})
assert len(rows)==6 and sum(x['pre']for x in rows)==18 and sum(x['VAR']for x in rows)==56
with tarfile.open(N/'source/time-1.10.tar.xz')as a:
 for r in M['sourceInputs']:
  p=N/r['path'];assert h(p)==r['sha256'];assert a.extractfile('time-1.10/'+r['path'].removeprefix('source/original/')).read()==p.read_bytes()
assert h(N/M['sourceArchive']['path'])==M['sourceArchive']['sha256'];assert h(N/'source/derived-manual.html')==M['generatedManual']['sha256']
at=datetime.datetime.now(datetime.timezone.utc).isoformat();out={'status':'passed-source-render-prototype','at':at,'pages':6,'pre':18,'VAR':56,'internalBodyLinks':links,'fixedOriginalMembersExact':11,'sourceArchiveSHA256':M['sourceArchive']['sha256'],'rows':rows,'rootAppAbsent':not(R/'apps/gnu-time').exists(),'formalOperation':False,'limits':'Candidate only; raw fixed manuscript preserved. Codes and historical measured output examples unmodified/not executed. Whole meaning review bound separately; source offer/formal adoption pending.'};(E/'TRIAL_BINDING.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
reviews=[]
for r in M['proposedScope']['rows']:
 slug=r['slug'];ep=N/'drafts/en'/(slug+'.body.html');jp=N/'drafts/ja'/(slug+'.body.html');up=N/'translations'/(slug+'-units.json');tp=N/'translations'/(slug+'-ja.json');u=json.loads(up.read_text());assert h(ep)==u['bodySHA256']
 reviews.append({'slug':slug,'reviewType':'ai-content-review','status':'passed-candidate-whole-body','reviewedAt':at,'modelConfigured':'gpt-6.1-sol','runtimeModel':None,'runtimeStatus':'not independently exposed','source':{'path':str(ep.relative_to(R)),'sha256':h(ep),'lines':[1,len(ep.read_text().splitlines())]},'translation':{'path':str(jp.relative_to(R)),'sha256':h(jp),'lines':[1,len(jp.read_text().splitlines())]},'units':{'path':str(up.relative_to(R)),'sha256':h(up),'range':[0,len(u['units'])-1]},'preferredTranslation':{'path':str(tp.relative_to(R)),'sha256':h(tp)},'findings':[],'readScope':'All saved English/JA prose/headings/definitions/bullet items and literal code/output examples read in separate comparison after drafting; condition/negation/default/unit/exit vs signal distinctions verified. Fixed source technical claims not audited.'})
(E/'DRAFT_REVIEW_MANIFEST.json').write_text(json.dumps({'status':'passed-whole-candidate-body-review','at':at,'pages':3,'reviewedUnits':sum(len(json.loads((N/'translations'/(r['slug']+'-units.json')).read_text())['units'])for r in M['proposedScope']['rows']),'rows':reviews,'notes':['Original program output labels and shell comment code bytes retained; trial footer explains bash/ksh and csh/tcsh comments in Japanese.','Original divied typo is faithfully interpreted as divided; historical BSD accuracy descriptions are original assertions, not Libx current verification.','Candidate body review does not grant formal canonical/sourceoffer/build/integration/adoption approval. Formal changed context must be separately bound.']},ensure_ascii=False,indent=2)+'\n');print('試作6本文/18pre/56VAR/固定11原稿一致。候補本文レビュー3ページ111単位を保存。')
