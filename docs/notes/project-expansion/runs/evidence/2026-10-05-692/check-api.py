from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib
root=Path('/Users/dolphilia/github/libx');packet=root/'docs/notes/document-import/libuv/1.53.0';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-692';en=packet/'canonical/en/reference/api.md';ja=packet/'translation/ja/reference/api.md';a=BeautifulSoup(en.read_text().split('---\n',2)[2].replace('&#10;','\n'),'html.parser');b=BeautifulSoup(ja.read_text().split('---\n',2)[2].replace('&#10;','\n'),'html.parser')
assert len(a.select('li'))==len(b.select('li'))==27
for x,y in zip(a.find_all(),b.find_all()):
 assert x.name==y.name
 xa=dict(x.attrs);ya=dict(y.attrs)
 if x.has_attr('title'):assert xa.pop('title')=='Permalink to this heading';assert ya.pop('title')=='この見出しへの固定リンク'
 assert xa==ya
assert [x.get_text() for x in a.select('code')]==[x.get_text() for x in b.select('code')]
assert len(a.find_all())==len(b.find_all())
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();refs=[{'path':str(p.relative_to(root)),'sha256':sha(p)} for p in [packet/'sources/docs/src/api.rst',en,ja]]
(ev/'MECHANICAL_API.json').write_text(json.dumps({'inputs':refs,'listEntries':27,'sameElementStructure':True,'sameIdsAndRoutes':True,'sameTypeNames':True,'headingTitleTranslated':True,'semanticReviewPerformedByThisScript':False},indent=2)+'\n');print('API 27 entries, structure/ids/routes/type names exact')
