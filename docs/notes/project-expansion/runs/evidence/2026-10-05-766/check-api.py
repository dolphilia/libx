from pathlib import Path
from bs4 import BeautifulSoup
import json
r=Path('/Users/dolphilia/github/libx');p=r/'docs/notes/project-expansion/runs/evidence/2026-10-05-766';b=r/'docs/notes/document-import/libuv/1.53.0';trees=[BeautifulSoup((b/f).read_text().split('---\n',2)[2].replace('&#10;','\n'),'html.parser') for f in ['canonical/en/reference/fs.md','translation/ja/reference/fs.md']]
for t in trees:
 for a in t.select('.headerlink'):a.attrs.pop('title',None)
assert [x.get_text() for x in trees[0].select('pre')]==[x.get_text() for x in trees[1].select('pre')];assert len(trees[1].select('pre'))==7
assert [str(d) for d in trees[0].select('dt.sig')]==[str(d) for d in trees[1].select('dt.sig')]
(p/'API_VERIFICATION.json').write_text(json.dumps({'page':'reference/fs','originalDeclarationsExact':len(trees[1].select('dt.sig')),'originalCodeBlocksExact':7,'prebuildExitCode':0,'buildExitCode':0,'fullContentReview':'pending','nativeDisplay':'pending'},indent=2)+'\n');print('fs original API declarations exact',len(trees[1].select('dt.sig')))
