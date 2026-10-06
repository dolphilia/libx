from pathlib import Path
from bs4 import BeautifulSoup
import json,re,hashlib,datetime,shutil
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/wren/v0-4-0';E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-870';W=Path('/private/tmp/libx-wren-formal-864');E.mkdir(exist_ok=False)
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
ref=lambda p:{'path':str(p.relative_to(R)),'sha256':sha(p)}
m=json.loads((N/'CONTENT_MAP.json').read_text());review=json.loads((N/'REVIEW_MANIFEST.json').read_text());assert review['completedPages']==24
shutil.copy2(N/'REVIEW_MANIFEST.json',E/'REVIEW_MANIFEST_BEFORE.json');shutil.copy2(N/'CONTENT_MAP.json',E/'CONTENT_MAP_BEFORE.json')
rows=[];oldprefix='/docs/wren/v0-4-0/en/01-guide/';newprefix='/docs/wren/v0-4-0/ja/01-guide/'
for r in review['pages']:
 p=R/r['translation']['path'];assert sha(p)==r['translation']['sha256'];before=p.read_text();dest=E/'before'/r['id'];dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(before)
 links=[]
 def change(x):
  old=x[1];new=old.replace(oldprefix,newprefix,1);target,_,frag=new.partition('#');page=target.removeprefix('/docs/wren/v0-4-0/ja/').rstrip('/')+'.md';q=N/'canonical/ja'/page;assert q.exists(),new
  s=BeautifulSoup(q.read_text().split('---\n',2)[2],'html.parser');anchors={n['id'] for n in s.find_all(attrs={'id':True})}|{n['name'] for n in s.find_all('a',attrs={'name':True})};assert not frag or frag in anchors,new
  links.append({'before':old,'after':new});return 'href="'+new+'"'
 after=re.sub(r'href="('+re.escape(oldprefix)+r'[^"]*)"',change,before)
 # Exact inverse proves this mutation changes only already-reviewed guide hrefs.
 assert after.replace('href="'+newprefix,'href="'+oldprefix)==before
 s=lambda text:BeautifulSoup(text.split('---\n',2)[2],'html.parser').select_one('.wren-document')
 assert s(after).get_text()==s(before).get_text()
 assert [x.get_text() for x in s(after).select('pre')]==[x.get_text() for x in s(before).select('pre')]
 p.write_text(after);(W/'apps/wren/src/content/docs/v0-4-0/ja'/r['id']).write_text(after)
 r['priorFullMeaningReviewTranslation']=dict(r['translation']);r['translation']=dict(r['translation'],sha256=sha(p));r['postReviewChanges']={'scope':'Guide href EN→reviewed JA only; exact inverse, text/code unchanged; all target files/anchors checked. Full meaning pass reused.','evidence':str((E/'LINK_DELTA.json').relative_to(R))}
 for a in m['pages']:
  if a['id']==r['id']:a['translation']=ref(p)
 rows.append({'id':r['id'],'before':ref(dest),'after':ref(p),'changedLinks':links,'textCodeUnchanged':True})
out={'status':'passed-scoped-guide-link-delta','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'pages':24,'guideLinksChanged':sum(len(r['changedLinks']) for r in rows),'rows':rows,'APIReferences':'English-only original links unchanged','fullMeaningReview':'24 prior same-text/code reviews reused; no prose change.'}
(E/'LINK_DELTA.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
for r in review['pages']:r['postReviewChanges']['evidenceSHA256']=sha(E/'LINK_DELTA.json')
review['sourceWords']=25182;review['reviewedSourceWordsByBatch']=[5874,5113,5926,5052,3217];review['reviewPass']+=' Guide href-only language alignment870; exact inverse/text/code evidence recorded.'
for f,v in [('REVIEW_MANIFEST.json',review),('CONTENT_MAP.json',m)]:
 (N/f).write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n');shutil.copy2(N/f,W/N.relative_to(R)/f)
(E/'REVIEW_MANIFEST_FROZEN.json').write_text(json.dumps(review,ensure_ascii=False,indent=2)+'\n')
print('JA24 guide href-only delta',out['guideLinksChanged'],'targets/anchors passed;full meaning evidence reused')
