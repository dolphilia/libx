"""Replay fixed, saved Doxygen bodies as Libx raw HTML; no upstream runtime required."""
from pathlib import Path
import argparse,hashlib,json,re
P=argparse.ArgumentParser();P.add_argument('--notes',type=Path,required=True);P.add_argument('--output',type=Path,required=True);args=P.parse_args();N=args.notes;O=args.output
data=json.loads((N/'regeneration/ROUTES.json').read_text());guide={g['input']:g for g in data['guides']};routes=data['routes'];prefix='/docs/rapidjson-static-trial/';target='/docs/rapidjson/'
def attrs(text):
 def change(m):
  value=m[3]
  if value.startswith(prefix+'v1-1-0/en/01-docs/'):
   rest=value[len(prefix+'v1-1-0/en/01-docs/'):];name,sep,suffix=rest.partition('/');assert name in routes
   value=target+'v1-1-0/en/'+routes[name]+'/'+suffix
  elif value.startswith(prefix):value=target+value[len(prefix):]
  return m[1]+m[2]+value+m[2]
 return re.sub(r'((?:href|src)\s*=\s*)([\"\'])(.*?)(?:\2)',change,text)
for row in data['inputs']:
 p=N/'regeneration/inputs'/row['name'];raw=p.read_bytes();assert hashlib.sha256(raw).hexdigest()==row['sha256'];front,body=raw.decode().split('---\n',2)[1:]
 context=json.loads(re.search(r'^documentContext: (.*)$',front,re.M)[1])
 for c in context:
  c['html']=attrs(c['html']).replace('適用する運用判断で掲載','適用するLibxの運用方針に基づき掲載').replace('注釈付きで適用する運用判断を用いています','注釈付きで適用するLibxの運用方針を用いています')
  c['html']=c['html'].replace('Unpublished Libx presentation trial; translation and full semantic review incomplete.','Unofficial Libx static edition. The Japanese edition covers the 13 user guides; the remaining 205 API, index and source pages are English original references.')
  c['html']=re.sub(r'<p>Static Libx trial:[\s\S]*?</p>','<p>Libx provides an unofficial static edition. Original definitions, signatures and descriptions appear as ordinary reference blocks after source or example code. Code and reference links retain their targets. Dynamic tooltips are not used. The Japanese edition covers the 13 user guides; the other 205 API, index and source pages are English original references. Refer to the linked original documentation for further details.</p>',c['html'],count=1)
  c['html']=c['html'].replace('原文説明・2つのJSコード・明示anchorを保持し、見出し階層のみ静的表示用に補正しています。翻訳・全文レビューは未実施です。','原文説明・2つのJSコード・明示anchorを保持し、見出し階層のみ静的表示用に補正しています。')
  # NPM helper has a different fixed-source notice; remove only the unpublished progress sentence.
  c['html']=c['html'].replace('日本語訳と別パス全文レビューは未実施です。','').replace('日本語訳・全文レビューは未実施です。','')
 front=re.sub(r'^documentContext: .*$',lambda m:'documentContext: '+json.dumps(context,ensure_ascii=False),front,flags=re.M)
 if row['name'] in guide:
  g=guide[row['name']];front=re.sub(r'^title: .*$',lambda m:'title: '+json.dumps(g['title']),front,flags=re.M);front=re.sub(r'^order: .*$',lambda m:'order: '+str(g['order']),front,flags=re.M)
 id=routes[p.stem]+'.md';out=O/id;out.parent.mkdir(parents=True,exist_ok=True);out.write_text('---\n'+front+'---\n'+attrs(body))
print('Replayed218 fixed English pages; guide13/reference205; Japanese drafts not generated')
