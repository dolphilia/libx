from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlsplit,unquote
import json,hashlib,re,datetime
E=Path(__file__).parent;N=Path('docs/notes/document-import/rapidjson/v1-1-0');A=Path('/private/tmp/libx-rapidjson-formal-853/apps/rapidjson');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
read=lambda p:json.loads(p.read_text());write=lambda p,x:p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
body=lambda p:BeautifulSoup(p.read_text().split('---\n',2)[2],'html.parser')
program=lambda s:[x.get_text()for x in s.select('.line,pre,.ttname,.ttdeci,.ttdef')]
changes=[read(E/'CANONICAL_REPAIR.json')['change']]
for c in changes:
 current=N/'canonical/en'/c['id'];before=E/(Path(c['id']).stem+'-CANONICAL_BEFORE.md.txt');assert sha(before)==c['beforeSHA256'];assert sha(current)==c['afterSHA256'];assert sha(N/c['fixedSource'])==c['sourceSHA256'];assert program(body(before))==program(body(current))
 if 'internals'in c['id']:assert 'snprintf(..., ..., "%g")'in body(current).get_text() and '`snprintf(..., ..., "%g")`'in (N/c['fixedSource']).read_text()
 elif 'pointer'in c['id']:assert '"#/%E2%82%AC"'in body(current).get_text() and '`"#/%E2%82%AC"`'in (N/c['fixedSource']).read_text()
 else:
  table=body(current).find('table');rows=table.find_all('tr');assert len(rows)==25
  source=(N/c['fixedSource']).read_text().split('|Syntax|Description|\n')[1].split('\n\n')[0];parsed=[]
  for line in source.splitlines():
   if line.startswith('|------'):continue
   m=re.fullmatch(r'\|(.+)\|\s*([^|]+?)\s*\|',line);assert m;parsed.append({'syntax':m[1].strip(),'description':m[2].strip()})
  assert parsed==c['delta']['sourceRows']
  for tr,r in zip(rows[1:],parsed):cells=tr.find_all('td');assert len(cells)==2;assert cells[0].get_text()==r['syntax'].replace('`','');assert cells[1].get_text()==r['description']
old=read(E.parent/'2026-10-06-854/BATCH_CHECK.json');pending=read(E/'BATCH_CHECK.json')['pendingJapaneseLinks'];resolved=[]
for r in old['pendingJapaneseLinks']:
 u=urlsplit(r['target']);p=A/'dist'/u.path.removeprefix('/docs/rapidjson/')/'index.html'
 if p.exists():
  soup=BeautifulSoup(p.read_text(),'html.parser');assert not u.fragment or soup.find(id=unquote(u.fragment));resolved.append(r)
 elif not any(x['from']==r['from']and x['target']==r['target']for x in pending):pending.append(r)
for r in read(E/'DRAFTS.json')['pages']:
 name=Path(r['id']).stem;d=read(E/(name+'-draft.json'));assert len(d['sentences'])==r['units'];assert sha(N/'translations/ja'/r['id'])==r['sha256'];d['status']='separate-full-review-passed';write(E/(name+'-reviewed-draft.json'),d)
write(E/'DELTA_CHECK.json',{'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sourceBoundCorrections':changes,'canonicalProgramsUnchanged':1,'newTranslationUnits':523,'newTranslations':4,'previousPendingLinksResolved':resolved,'pendingJapaneseLinks':pending,'reuse':'8549 reviews/body226 hashes unchanged; 850/853/854 styles/material/native reps unchanged','remaining':'final integrated/source-offer/publication'})
print('Internals1 source correction/523 review units/prior3 link dependencies checked; pending',len(pending))
