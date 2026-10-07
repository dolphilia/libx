"""Replay fixed GNU Texinfo into the complete saved English bodies."""
from pathlib import Path
from bs4 import BeautifulSoup
import hashlib,json,subprocess,tempfile
N=Path(__file__).resolve().parent
h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
M=json.loads((N/'SOURCE_MANIFEST.json').read_text())
C=json.loads((N/'CANDIDATE_DRAFT.json').read_text())
for row in M['files']:assert h(N/row['path'])==row['sha256']
assert subprocess.check_output(['makeinfo','--version'],text=True).splitlines()[0].endswith('7.1')
with tempfile.TemporaryDirectory(prefix='libx-ed-replay-')as tmp:
 p=Path(tmp)/'manual.html'
 subprocess.run(['makeinfo','--html','--no-split','--no-headers','-I',str(N/'source/doc'),'-o',str(p),str(N/'source/doc/ed.texi')],check=True)
 assert h(p)==h(N/'source/derived-manual.html')
s=BeautifulSoup((N/'source/derived-manual.html').read_bytes(),'html.parser',from_encoding='iso-8859-15')
for row in C['proposedScope']['rows']:
 x=s.find(id=row['sourceNode']);assert x
 if row['sourceNode']=='Top':body=''.join(str(c)for c in x.find_all(['h1','p','blockquote'],recursive=False))
 else:
  x=BeautifulSoup(str(x),'html.parser')
  for nav in x.select('.nav-panel'):nav.decompose()
  body=str(x)
 p=N/'drafts/en'/(row['slug']+'.body.html');p.write_text(body+'\n');assert h(p)==row['sha256']
 q=N/'source-fragments/en/01-guide'/(row['slug']+'.html');q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(p.read_bytes())
p=N/'drafts/reference/gfdl.body.html';p.write_text(str(s.find(id='GNU-Free-Documentation-License'))+'\n');assert h(p)==C['proposedScope']['EnglishOnlyLicense']['sha256']
print('GNU ed fixed whole manual and all twelve saved English bodies reproduced')
