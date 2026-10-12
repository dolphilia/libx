from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime
N=Path(__file__).resolve().parent;rows=[];sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
for u in sorted((N/'translation-units').glob('*.json')):
 x=json.loads(u.read_text());en=N/'preferred/en'/x['page'];ja=N/'preferred/ja'/x['page'];assert sha(en)==x['sourceSHA256'];assert sha(ja)==x['translationSHA256'];E=BeautifulSoup(en.read_text().split('---',2)[2],'html.parser');J=BeautifulSoup(ja.read_text().split('---',2)[2],'html.parser');assert [h['id']for h in E.select('[id]')]==[h['id']for h in J.select('[id]')];assert [p.get_text()for p in E.select('pre')]==[p.get_text()for p in J.select('pre')];assert [n.get_text()for n in E.select('dt')]==[n.get_text()for n in J.select('dt')];assert [str(n)for n in E.select('.Bd-indent')if not n.find(['pre','p','dd','li'])]==[str(n)for n in J.select('.Bd-indent')if not n.find(['pre','p','dd','li'])]
 assert len(E.select('p,dd,li'))==len(x['units']);extra=1 if ja.name=='02-options.md'else 0;assert len(J.select('p,dd,li'))==len(x['units'])+extra
 for i,z in enumerate(x['units']):assert z['index']==i and z['originalHTML'] and z['status']=='draft-not-reviewed'
 assert next(l for l in en.read_text().splitlines()if l.startswith('documentContext: '))==next(l for l in ja.read_text().splitlines()if l.startswith('documentContext: '))
 rows.append({'page':x['page'],'EnglishSHA256':sha(en),'JapaneseSHA256':sha(ja),'mappedUnits':len(x['units']),'preservedDefinitionLabels':len(E.select('dt')),'preservedPre':len(E.select('pre')),'headingAndIDsPreserved':True,'extraLiteralPlaceholderExplanation':extra})
assert len(rows)==5
(N/'BATCH1_STRUCTURE.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'passed-draft-structure-only','pages':5,'rows':rows,'mappedUnits':sum(r['mappedUnits']for r in rows),'limits':'Mapping/structure/literal preservation only; machine checks are not whole meaning review.'},indent=2)+'\n');print('5drafts structure mapped',sum(r['mappedUnits']for r in rows),'units; meaning review pending')
