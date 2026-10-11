from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,re
E=Path(__file__).parent;A=Path('/private/tmp/libx-gnu-tar-trial-964/apps/gnu-patch-trial');rows=[]
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def text(n):return ' '.join(n.get_text().split())
orig=BeautifulSoup((E/'TRIAL.html').read_text(),'html.parser').select_one('.manual-text')
for lang,name in [('en','01-manual'),('ja','01-merge')]:
 p=A/'src/content/docs/v2-8'/lang/'01-guide'/(name+'.md');s=BeautifulSoup(p.read_text().split('---',2)[2],'html.parser').select_one('.gnu-patch-original-content');d=A/'dist/v2-8'/lang/'01-guide'/name/'index.html';out=BeautifulSoup(d.read_text(),'html.parser');r=out.select_one('.gnu-patch-original-content');assert text(s)==text(r)
 assert [x.get_text()for x in s.select('pre')]==[x.get_text()for x in r.select('pre')]
 if lang=='en':assert text(s)==text(orig);assert len(s.select('h1.Sh'))==14
 ids=[x['id']for x in out.select('[id]')];assert len(ids)==len(set(ids)),[x for x in ids if ids.count(x)>1]
 links=0
 for a in out.select('a[href]'):
  h=a['href']
  if h.startswith('#'):assert h[1:] in ids;links+=1
  elif h.startswith('/docs/gnu-patch-trial/source/v2-8/'):
   rel=h.split('/source/v2-8/',1)[1];file,_,frag=rel.partition('#');target=A/'dist/source/v2-8'/file;assert target.is_file()
   if frag:assert BeautifulSoup(target.read_text(),'html.parser').find(id=frag)
   links+=1
 ctx=out.select_one('footer.document-context-footer');assert ctx
 for term in ['Copyright © 1989–2025','Copyright © 1984–1986, 1988','Permission is granted to copy and distribute translations','identical to this one.']:
  assert term in text(ctx),term
 rows.append({'source':str(p),'sourceSHA256':sha(p),'output':str(d),'outputSHA256':sha(d),'pre':len(s.select('pre')),'localBodyAndNoticeLinks':links,'textAndPreExact':True,'uniqueIDs':len(ids)})
x={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'rows':rows,'englishTextExactToMandoc':True,'originalSections':14,'limits':['Candidate trial; no full Japanese content review','Raw roff to mandoc separate representative comparison performed manually for merge, symlink, COPYING, AUTHORS','Empty font spans and one empty code block are cosmetic; formal conversion should remove empty-only elements without text changes']};(E/'TRIAL_CHECK.json').write_text(json.dumps(x,indent=2)+'\n');print(json.dumps(x))
