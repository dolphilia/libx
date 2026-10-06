"""Reconstruct the fixed whole manual and complete English guide bodies."""
from pathlib import Path
from bs4 import BeautifulSoup
import copy,json,hashlib,re,subprocess,tempfile
N=Path(__file__).resolve().parent;h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
M=json.loads((N/'SOURCE_MANIFEST.json').read_text());C=json.loads((N/'CANDIDATE_DRAFT.json').read_text())
for f in M['files']:assert h(N/f['path'])==f['sha256']
assert subprocess.check_output(['makeinfo','--version'],text=True).splitlines()[0].endswith('7.1')
with tempfile.TemporaryDirectory(prefix='libx-gzip-manual-replay-')as tmp:
 p=Path(tmp)/'manual.html'
 subprocess.run(['makeinfo','--html','--no-split','-I',str(N/'source/original/doc'),'-o',str(p),str(N/'source/original/doc/gzip.texi')],check=True)
 assert h(p)==h(N/'source/derived-manual.html'),'Fixed full original manual replay mismatch'
s=BeautifulSoup((N/'source/derived-manual.html').read_text(),'html.parser');owners={};nodes={};norm=lambda t:' '.join(t.split())
for row in C['proposedScope']['rows']:
 x=copy.copy(s.select_one('div#'+row['sourceID']));assert x
 if row['sourceID']=='Top':
  for z in x.select('.chapter-level-extent,.appendix-level-extent'):z.decompose()
 for z in x.select('.nav-panel,.toc,.copiable-link'):z.decompose()
 nodes[row['sourceID']]=x
 for z in [x,*x.select('[id]')]:
  if z.get('id'):owners[z['id']]=row['slug']
for row in C['proposedScope']['rows']:
 x=nodes[row['sourceID']];original=norm(x.get_text());pre=[p.get_text()for p in x.select('pre')]
 for a in x.select('a[href]'):
  href=a['href']
  if href.startswith('#'):
   anchor=href[1:];a['href']='/docs/gnu-gzip/v1-15/en/01-guide/'+owners[anchor]+'/#'+anchor if anchor in owners else '/docs/gnu-gzip/source/v1-15/manual.html#'+anchor
 body='<div class="gnu-gzip-original-content">\n'+str(x)+'\n</div>\n'
 for p in x.select('pre'):body=body.replace(str(p),str(p).replace('\n','&#10;').replace('\t','&#9;'),1)
 p=N/'drafts/en'/(row['slug']+'.body.html');p.write_text(body);assert h(p)==row['bodySHA256'];parsed=BeautifulSoup(body,'html.parser');assert norm(parsed.get_text())==original and [z.get_text()for z in parsed.select('pre')]==pre
 originalFragment=N/'source-fragments/en/01-guide'/(row['slug']+'.html');originalFragment.parent.mkdir(parents=True,exist_ok=True);originalFragment.write_text(body)
licensebody=N/'drafts/reference/gfdl.body.html';licensebody.write_text(str(s.select_one('#GNU-Free-Documentation-License'))+'\n');assert h(licensebody)==C['proposedScope']['EnglishOnlyLicense']['sha256']
print('Fixed GNU gzip1.15 Texinfo -> whole manual -> eight complete English bodies reproduced; reviewed body hashes retained')
