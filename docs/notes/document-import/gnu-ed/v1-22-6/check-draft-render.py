"""Check saved canonical bytes against built body; this is not meaning review."""
from pathlib import Path
from bs4 import BeautifulSoup
import json,re,hashlib
N=Path(__file__).resolve().parent;W=N.parents[4];A=W/'apps/gnu-ed';records=[]
for lang in ['en','ja']:
 for p in sorted((N/'canonical'/lang).rglob('*.md')):
  route=p.relative_to(N/'canonical'/lang).with_suffix('');target=A/'dist/v1-22-6'/lang/route/'index.html';assert target.exists(),target
  source=BeautifulSoup(p.read_text().split('<div class="gnu-ed-original-content">',1)[1].rsplit('</div>',1)[0],'html.parser');page=BeautifulSoup(target.read_bytes(),'html.parser');body=page.select_one('.gnu-ed-original-content');assert body is not None
  norm=lambda s:re.sub(r'\s+',' ',s).strip()
  assert norm(source.get_text(' ',strip=True))==norm(body.get_text(' ',strip=True)),(lang,route,'text')
  for tag in ['pre','code','samp','var','dt','dd']:
   assert [x.get_text()for x in source.select(tag)]==[x.get_text()for x in body.select(tag)],(lang,route,tag)
  assert [x.get('href')for x in source.select('a')]==[x.get('href')for x in body.select('a')],(lang,route,'links')
  ids=[x['id']for x in page.select('[id]')];assert len(ids)==len(set(ids)),(lang,route,'duplicateIDs')
  assert '\ufffd' not in page.get_text(),(lang,route,'encoding')
  records.append({'language':lang,'route':str(route),'canonicalSHA256':hashlib.sha256(p.read_bytes()).hexdigest(),'renderSHA256':hashlib.sha256(target.read_bytes()).hexdigest(),'pre':len(body.select('pre')),'links':len(body.select('a'))})
out={'status':'passed','pages':len(records),'records':records,'bodyTextProtectedElementsLinksAndIDs':'exact','meaningReview':'pending','dependencyInstall':'borrowed symlinks; independent rebuild not checked'}
(N/'DRAFT_RENDER_CHECK.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print('Draft rendered content exact',len(records),'meaning review pending')
