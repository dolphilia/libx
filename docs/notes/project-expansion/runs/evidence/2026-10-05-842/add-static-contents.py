import pathlib,json,re,posixpath
import markdown
from bs4 import BeautifulSoup
D=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-842');j=json.loads((D/'STATIC_PREPARATION.json').read_text());A=pathlib.Path(j['workspace'])/'apps/mdbook-static-trial';mapping={p['sourcePath']:'/docs/mdbook-static-trial/v0-5-4/en/01-guide/'+pathlib.Path(p['staticFile']).stem for p in j['pages']}
source=(A/'public/source/v0-5-4/original/guide/src/SUMMARY.md').read_text();toc=BeautifulSoup(markdown.markdown(source),'html.parser');draft=0
for a in toc.select('a[href]'):
 h=a['href']
 if not h:
  a.name='span';a.attrs={'aria-disabled':'true'};a.string=a.get_text()+' (not written in the original)';draft+=1
 else:
  p=posixpath.normpath('guide/src/'+h);assert p in mapping;a['href']=mapping[p]
assert draft==1;assert len(toc.select('a[href]'))==31
p=A/'src/content/docs/v0-5-4/en/01-guide/01-index.md';s=p.read_text();s=s.replace('<div class="mdbook-guide">','<nav aria-label="Original book contents"><h2>Original book contents (static)</h2>\n'+str(toc)+'\n</nav>\n\n<div class="mdbook-guide">',1);p.write_text(s);(A/'public/source/v0-5-4/edited'/p.name).write_text(s)
(D/'ORIGINAL_CONTENTS.json').write_text(json.dumps({'status':'passed','sourceSummary':'guide/src/SUMMARY.md','originalOrderAndHierarchy':True,'chapterLinks':31,'draftEntriesShownWithoutLink':1},indent=2)+'\n')
