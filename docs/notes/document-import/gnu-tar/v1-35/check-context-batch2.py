from pathlib import Path
from bs4 import BeautifulSoup
import json,re,copy,hashlib,datetime
N=Path(__file__).resolve().parent;P=N/'preferred';S=BeautifulSoup((N/'source/derived/manual.html').read_text(),'html.parser');norm=lambda x:re.sub(r'\s+',' ',x).strip();sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();contexts=[]
for p in P.rglob('*.md'):
 raw=p.read_text();ctx=json.loads(next(l for l in raw.splitlines()if l.startswith('documentContext: ')).split(': ',1)[1])[0]['html'];contexts.append(ctx)
assert len(contexts)==53 and len(set(contexts))==1;c=BeautifulSoup(contexts[0],'html.parser');text=c.get_text(' ',strip=True)
for x in S.find(id='Top').find_all(['p','blockquote'],recursive=False)[:3]:assert norm(x.get_text()) in norm(c.get_text())
for original,target in [('Authors','tar-context-Authors'),('GNU-Free-Documentation-License','tar-context-GNU-Free-Documentation-License')]:
 x=copy.deepcopy(S.find(id=original))
 for n in x.select('.nav-panel,.copiable-link'):n.decompose()
 assert norm(x.get_text())==norm(c.find(id=target).get_text())
gpl=c.find('h3',string='GNU General Public License').find_next('pre');assert gpl.get_text()==(N/'source/COPYING').read_text()
for x in ['A GNU Manual','You have the freedom to copy and modify this GNU manual.','Copyright © 2026 Libx','No new invariant sections or cover texts','11October2026','10July2023','no GPL appendix','explicit supplement','Modification author and publisher: Libx.']:assert x in text,x
out={'status':'passed-current-context-preservation','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'pages':53,'commonContextSHA256':hashlib.sha256(contexts[0].encode()).hexdigest(),'originalNoticeExactNormalized':True,'wholeEnglishGFDLExactNormalized':True,'wholeGPLTextExact':True,'originalAuthorsFullExactNormalized':True,'distinctModifiedTitlePublisherHistoryAndInvariantCoverLists':True,'limits':'Current formal context preservation only. Editable complete sourcekit, raw source downloads, final all-page rendering and public/source availability remain unverified.'};(N/'CONTEXT_BATCH2.json').write_text(json.dumps(out,indent=2)+'\n');print(out)
