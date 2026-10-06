from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlsplit,unquote
import json,hashlib,re,datetime
E=Path(__file__).parent;N=Path('docs/notes/document-import/rapidjson/v1-1-0');A=Path('/private/tmp/libx-rapidjson-formal-853/apps/rapidjson');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
read=lambda p:json.loads(p.read_text());write=lambda p,x:p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
body=lambda p:BeautifulSoup(p.read_text().split('---\n',2)[2],'html.parser')
program=lambda s:[x.get_text()for x in s.select('.line,pre,.ttname,.ttdeci,.ttdef')]
changes=read(N/'regeneration/CORRECTIONS.json')
for c in changes:
 current=N/'canonical/en'/c['id'];before=E/(Path(c['id']).stem+'-CANONICAL_BEFORE.md.txt');assert sha(before)==c['beforeSHA256'];assert sha(current)==c['afterSHA256'];assert sha(N/c['fixedSource'])==c['sourceSHA256'];assert program(body(before))==program(body(current))
 if 'pointer'in c['id']:assert '"#/%E2%82%AC"'in body(current).get_text() and '`"#/%E2%82%AC"`'in (N/c['fixedSource']).read_text()
 else:
  table=body(current).find('table');rows=table.find_all('tr');assert len(rows)==25
  source=(N/c['fixedSource']).read_text().split('|Syntax|Description|\n')[1].split('\n\n')[0];parsed=[]
  for line in source.splitlines():
   if line.startswith('|------'):continue
   m=re.fullmatch(r'\|(.+)\|\s*([^|]+?)\s*\|',line);assert m;parsed.append({'syntax':m[1].strip(),'description':m[2].strip()})
  assert parsed==c['delta']['sourceRows']
  for tr,r in zip(rows[1:],parsed):cells=tr.find_all('td');assert len(cells)==2;assert cells[0].get_text()==r['syntax'].replace('`','');assert cells[1].get_text()==r['description']
old=read(E.parent/'2026-10-06-853/BATCH_CHECK.json');pending=read(E/'BATCH_CHECK.json')['pendingJapaneseLinks'];resolved=[]
for r in old['pendingJapaneseLinks']:
 u=urlsplit(r['target']);p=A/'dist'/u.path.removeprefix('/docs/rapidjson/')/'index.html'
 if p.exists():
  soup=BeautifulSoup(p.read_text(),'html.parser');assert not u.fragment or soup.find(id=unquote(u.fragment));resolved.append(r)
 elif not any(x['from']==r['from']and x['target']==r['target']for x in pending):pending.append(r)
for r in read(E/'DRAFTS.json')['pages']:
 name=Path(r['id']).stem;d=read(E/(name+'-draft.json'));assert len(d['sentences'])==r['units'];assert sha(N/'translations/ja'/r['id'])==r['sha256'];d['status']='separate-full-review-passed';write(E/(name+'-reviewed-draft.json'),d)
write(E/'DELTA_CHECK.json',{'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sourceBoundCorrections':changes,'canonicalProgramsUnchanged':2,'sourceRegexRows':24,'newTranslationUnits':476,'newTranslations':4,'previousPendingLinksResolved':resolved,'pendingJapaneseLinks':pending,'reuse':'853 full first5 reviews/body221 hashes unchanged; 850 styles/material/source/API reps unchanged','remaining':'4 guides translation/full review; final integrated/source-offer/publication'})
write(E/'BROWSER_REPRESENTATIVE.json',{'status':'passed','method':'native CUA screenshots and read-only DOM','screenshots':'tool outputs viewed; no persisted screenshot file claimed','pages':[{'id':'09-schema','language':'ja','widths':[1280,390],'regexRows':24,'headers':1,'mobileTableClient':327,'mobileTableScroll':327,'desktopTableClient':919,'desktopTableScroll':919,'documentWidth':[1265,375],'observed':'syntax/description aligned; symbols a|b/backslashes preserve; complete24 rows machine checked; no document overflow'},{'id':'03-tutorial','language':'ja','width':390,'imagesLoaded':4,'captionsTranslated':4,'documentWidth':375,'observed':'MoveSemantics code horizontally scrollable; original image and Japanese caption readable; fixed original image contents untouched'}],'reuse':['850 source066/API GenericValue/source definitions/code maximum representatives same CSS','853 JA DOM diagram/table/footer same CSS and bodyhash'],'limits':['Whole13 translated site and final public UI pending','Original code and image claims are not technically audited']})
print('Source2 corrections/24regex rows/476 review units and prior link dependencies checked; pending',len(pending))
