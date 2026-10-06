from pathlib import Path
from bs4 import BeautifulSoup
from collections import Counter
import json,hashlib,datetime,copy,re
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-commonmark-formal-887');N=R/'docs/notes/document-import/commonmark/v0-31-2';E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-888';A=W/'apps/commonmark';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();items=json.loads((N/'CONTENT_MAP.json').read_text())['items'][:7];reviews=json.loads((E/'MEANING_REVIEW.json').read_text())['pages'];headings=json.loads((A/'src/data/document-headings.json').read_text());tests={x['example']:x for x in json.loads((N/'source/original/tests.json').read_text())};out=[];links=0;codes=0;examples=0
for item,review in zip(items,reviews):
 slug=item['slug'];ja=R/item['translation'];en=R/item['canonical'];draft=N/'translations/batch-888'/(slug.split('/')[-1]+'.md');assert sha(en)==review['currentENSHA256'] and sha(draft)==review['savedDraftSHA256'];assert review['status']=='passed'
 assert ja.read_bytes()==(W/item['translation']).read_bytes()==(A/'src/content/docs/v0-31-2/ja'/(slug+'.md')).read_bytes()==(A/'public/source/v0-31-2/edited/ja'/(slug+'.md')).read_bytes()
 cs=BeautifulSoup(ja.read_text(),'html.parser').select_one('.commonmark-original-content');ds=BeautifulSoup(draft.read_text(),'html.parser').select_one('.commonmark-original-content');es=BeautifulSoup(en.read_text(),'html.parser').select_one('.commonmark-original-content');rp=A/'dist/v0-31-2/ja'/slug/'index.html';render=BeautifulSoup(rp.read_bytes(),'html.parser');rs=render.select_one('.commonmark-original-content');assert rs
 assert len(rs.select('p'))==review['reviewedParagraphs']
 assert [p.get_text() for p in rs.select('p')]==[p.get_text() for p in ds.select('p')]
 assert [c.get_text() for c in rs.select('code')]==[c.get_text() for c in cs.select('code')]==[c.get_text() for c in ds.select('code')]==[c.get_text() for c in es.select('code')]
 assert [x['id'] for x in rs.select('[id]')]==[x['id'] for x in es.select('[id]')];assert Counter(x.get('href','').replace('/v0-31-2/ja/','/v0-31-2/en/') for x in rs.select('a[href]'))==Counter(x['href'] for x in es.select('a[href]'))
 for ex in rs.select('.commonmark-example'):
  t=tests[int(ex['id'].split('-')[1])];assert [c.get_text() for c in ex.select('pre code')]==[t['markdown'],t['html']];examples+=1
 hs=[{'depth':int(h.name[1]),'slug':h['id'],'text':h.get_text(' ',strip=True)} for h in rs.select('h2,h3')];assert hs==headings['v0-31-2/ja/'+slug];toc={x.get('href') for x in render.select('[aria-labelledby="starlight-toc-heading"] a[href]')};assert {'#'+x['slug'] for x in hs}<=toc
 assert render.title and item['JapaneseTitle'] in render.title.get_text();footer=render.select_one('footer');assert 'Copyright (C) 2014-16 John MacFarlane' in footer.get_text();assert footer.find('a',href='https://creativecommons.org/licenses/by-sa/4.0/')
 for a in render.select('.commonmark-original-content a[href],footer a[href]'):
  href=a['href'];base,_,frag=href.partition('#')
  if href.startswith('#'):target=render
  elif base.startswith('/docs/commonmark/'):
   tp=A/'dist'/base[len('/docs/commonmark/'):];tp=tp if tp.suffix else tp/'index.html';assert tp.exists(),href;target=BeautifulSoup(tp.read_bytes(),'html.parser') if frag else None
  else:continue
  if frag:assert target.find(id=frag),href
  links+=1
 codes+=len(rs.select('pre code'));out.append({'slug':slug,'savedDraftSHA256':sha(draft),'canonicalJASHA256':sha(ja),'sourceENSHA256':sha(en),'renderedSHA256':sha(rp),'paragraphs':len(rs.select('p')),'codeBlocks':len(rs.select('pre code')),'headings':len(hs)})
# Prior English/full static evidence is reused only while unchanged canonical inputs/static assets match recorded proofs.
prior=json.loads((N/'EN_PREPARATION_CHECK.json').read_text());assert all(sha(R/x['canonical'])==next(b['canonicalSHA256'] for b in prior['bodyBindings'] if b['slug']==x['slug']) for x in json.loads((N/'CONTENT_MAP.json').read_text())['items'])
assert len(out)==7 and codes==138 and examples==61
result={'status':'passed-first7-JA-batch','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'JapaneseGuides':7,'meaningReviews':7,'paragraphs':sum(x['paragraphs'] for x in out),'sourceCodeBlocksExact':codes,'examplePairsExact':examples,'rawHeadingTOC':sum(x['headings'] for x in out),'bodyFooterInternalLinks':links,'targetBuildHTML':len(list((A/'dist').rglob('*.html'))),'EN14CanonicalInputsUnchanged':True,'priorSourceAndStaticProofsReused':'887 EN_PREPARATION_CHECK/FULL_STATIC_HTML5_BINDING, no repeated original technical-audit','bodyBindings':out,'remaining':'JA8–14/wholeJAfinal/sourcekit/reconstruction/scopedintegration/Pages'};(E/'BATCH_CHECK.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in result.items() if k!='bodyBindings'},ensure_ascii=False))
