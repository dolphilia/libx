from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,subprocess,datetime
N=Path(__file__).resolve().parent;P=N/'preferred';W=Path('/private/tmp/libx-gnu-tar-formal-964');G=json.loads((N/'CANONICAL_GENERATION.json').read_text());sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def body(p):return BeautifulSoup(p.read_text().split('---',2)[2],'html.parser').select_one('.gnu-tar-original-content')
old=json.loads((N/'REVIEW_MANIFEST.json').read_text());assert old['completedPages']==20
for p in old['pages'][:20]:assert sha(Path(p['translation']['path']))==p['translation']['sha256']
for p in json.loads((N/'CANONICAL_VALIDATION.json').read_text()) .get('pages',[]):pass
rows=[]
for r in G['rows'][20:]:
 e=P/'en'/r['page'];j=P/'ja'/r['page'];a=body(e);b=body(j)
 for sel in ['pre','dt']:
  assert [x.get_text()for x in a.select(sel)]==[x.get_text()for x in b.select(sel)],(r['page'],sel)
 assert [x['id']for x in a.select('[id]')]==[x['id']for x in b.select('[id]')],r['page']
 assert [x['href'].replace('/v1-35/en/','/v1-35/ja/')for x in a.select('a[href]')]==[x['href']for x in b.select('a[href]')],r['page']
 for sel in ['p','ul.itemize>li','dl','dd','pre']:
  assert len(a.select(sel))==len(b.select(sel)),(r['page'],sel)
 assert not __import__('re').search(r'\{\d+\}',str(b))
 assert j.read_bytes()==(W/'apps/gnu-tar/src/content/docs/v1-35/ja'/r['page']).read_bytes()
 rows.append({'page':r['page'],'enSHA256':sha(e),'jaSHA256':sha(j),'literalPre':len(b.select('pre')),'literalTerms':len(b.select('dt')),'ids':len(b.select('[id]')),'links':len(b.select('a[href]'))})
before={str(p):sha(p)for p in P.rglob('*.md')};subprocess.run(['/private/tmp/libx-doc-review-python/bin/python',str(N/'translate-batch3.py')],check=True);assert before=={str(p):sha(p)for p in P.rglob('*.md')}
out={'status':'passed-structure-and-deterministic-batch3','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'rows':rows,'previous20ReviewedTranslationsUnchanged':True,'all64PreferredBytesUnchangedByRepeatTranslation':True,'limits':'Structural evidence only; separate whole meaning review required. Whole-project publication gates incomplete.'};(N/'BATCH3_STRUCTURE.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print('batch3 exact pre/terms/IDs/links/structure; deterministic bytes',len(before))
