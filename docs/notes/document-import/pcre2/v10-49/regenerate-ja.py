from pathlib import Path
from bs4 import BeautifulSoup
import json,shutil,subprocess,sys,hashlib
N=Path(__file__).resolve().parent;R=N.parents[4];A=R/'apps/pcre2';B=N/'translations/batch-894';M=json.loads((N/'CONTENT_MAP.json').read_text());H=json.loads((A/'src/data/document-headings.json').read_text())
subprocess.run([sys.executable,str(B/'save-drafts.py')],check=True)
review=json.loads((N/'REVIEW_MANIFEST.json').read_text()) if (N/'REVIEW_MANIFEST.json').exists() else None
for row in M['items']:
 m=row['manual'];route=row['slug']+'.md';p=B/(m+'.md');j=json.loads((B/(m+'-ja.json')).read_text());text=p.read_text()
 if review:
  r=next(x for x in review['pages']if x['id']==route);assert r['translation']['sha256']==hashlib.sha256(p.read_bytes()).hexdigest()
 for dest in [R/row['translation'],A/'src/content/docs/v10-49/ja'/route,A/'public/source/v10-49/edited/ja'/route]:dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,dest)
 s=BeautifulSoup(text.split('---'+chr(10),2)[2],'html.parser');H['v10-49/ja/'+row['slug']]=[{'depth':2,'slug':h['id'],'text':h.get_text(' ',strip=True)}for h in s.select('h2')]
 row.update({'translationStatus':'translated','contentReview':'passed'if review else'pending','JapaneseTitle':j['title']})
M['JapaneseMeaningReview']='REVIEW_MANIFEST.json / separate saved-draft whole meaning review894'if review else'pending'
(N/'CONTENT_MAP.json').write_text(json.dumps(M,ensure_ascii=False,indent=2)+chr(10));(A/'src/data/document-headings.json').write_text(json.dumps(H,ensure_ascii=False,indent=2)+chr(10));print('Regenerated5savedJapaneseMDs/heading metadata; existing English unchanged; review is separate evidence')
