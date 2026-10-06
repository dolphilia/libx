from pathlib import Path
from bs4 import BeautifulSoup
import json
root=Path('/Users/dolphilia/github/libx');packet=root/'docs/notes/document-import/libuv/1.53.0';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-771';rows=[]
for src in sorted((packet/'canonical/en').rglob('*.md')):
 rel=src.relative_to(packet/'canonical/en');dst=packet/'translation/ja'/rel;trees=[BeautifulSoup(f.read_text().split('---\n',2)[2].replace('&#10;','\n'),'html.parser') for f in [src,dst]]
 for t in trees:
  for a in t.select('.headerlink'):a.attrs.pop('title',None)
 for a in trees[1].select('a[href]'):a['href']=a['href'].replace('/v1-53-0/ja/','/v1-53-0/en/',1)
 assert [str(x) for x in trees[0].select('dt.sig')]==[str(x) for x in trees[1].select('dt.sig')],str(rel)
 assert [x.get_text() for x in trees[0].select('pre')]==[x.get_text() for x in trees[1].select('pre')],str(rel)
 assert [x['id'] for x in trees[0].select('[id]')]==[x['id'] for x in trees[1].select('[id]')],str(rel)
 rows.append({'page':str(rel),'declarations':len(trees[0].select('dt.sig')),'codeBlocks':len(trees[0].select('pre')),'fullSignaturesExactAfterPermalinkTitleAndHrefLanguageNormalization':True,'codeTextWhitespaceExact':True,'originalIDsOrderedExact':True})
assert len(rows)==43;(ev/'ALL_API_CODE_VERIFICATION.json').write_text(json.dumps({'pages':43,'declarations':sum(x['declarations'] for x in rows),'codeBlocks':sum(x['codeBlocks'] for x in rows),'rows':rows,'normalization':'Only translated permalink title and exact same-version href language prefix. Signature types/names/parameters and all code whitespace preserved.','nativeDisplay':'pending','fullProjectComplete':False},ensure_ascii=False,indent=2)+'\n');print('43pages declarations',sum(x['declarations'] for x in rows),'codes',sum(x['codeBlocks'] for x in rows),'exact')
