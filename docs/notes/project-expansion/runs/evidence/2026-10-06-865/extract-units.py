from pathlib import Path
from bs4 import BeautifulSoup
import json,re,hashlib,datetime
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/wren/v0-4-0';E=Path(__file__).parent;r=json.loads((N/'regeneration/ROUTES.json').read_text());total=0
for row in r['guides'][:8]:
 raw=(N/'canonical/en'/row['id']).read_text();body=raw.split('---\n',2)[2];s=BeautifulSoup(body,'html.parser');root=s.select_one('.wren-document');units=[]
 for n in root.find_all(['h1','h2','h3','h4','h5','h6','p','li','dt','dd','th','td']):
  if n.find_parent(['pre','code']):continue
  if n.find_parent(['li','dt','dd','th','td']):continue
  fragment=n.decode_contents();tokens=[];tmp=BeautifulSoup(fragment,'html.parser')
  for p in list(tmp.select('pre')):
   token='⟦PRE'+str(len(tokens))+'⟧';tokens.append({'token':token,'html':str(p)});p.replace_with(token)
  for p in list(tmp.select('code')):
   token='⟦CODE'+str(len(tokens))+'⟧';tokens.append({'token':token,'html':str(p)});p.replace_with(token)
  units.append({'id':str(len(units)+1),'tag':n.name,'sourceHTML':str(tmp),'originalInnerHTML':fragment,'protected':tokens})
 total+=len(units);p=E/(Path(row['id']).stem+'-units.json');p.write_text(json.dumps({'page':row['id'],'titleEN':row['titleEN'],'titleJA':row['titleJA'],'sourceCanonicalSHA256':hashlib.sha256(raw.encode()).hexdigest(),'units':units},ensure_ascii=False,indent=2)+'\n')
 text='\n\n'.join(u['id']+' ['+u['tag']+'] '+u['sourceHTML'] for u in units);(E/(Path(row['id']).stem+'-source-readable.txt')).write_text(text+'\n');print(row['id'],len(units),'units')
(E/'START.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':'/private/tmp/libx-wren-formal-864','operation':'wren:v0-4-0','guideUnits':8,'textBlocks':total,'batchScope':'Wren first8 language guide units / 5,874 source tokens;17 API originals and MIT notice English-only. Draft first, then separate full meaning review; currently no JA/review pass.','publisherPriority':'SDS862 attempts1/2 runner unavailable/0steps. Resume release after official service recovery/material condition change; no unchanged retry.'},ensure_ascii=False,indent=2)+'\n');print('Total prose blocks',total)
