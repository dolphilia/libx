from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import json,html,hashlib,datetime
B=Path(__file__).resolve().parent;N=B.parents[1];R=N.parents[4];M=json.loads((N/'CONTENT_MAP.json').read_text());rows=[]
for row in M['items']:
 m=row['manual'];jp=B/(m+'-ja.json')
 if not jp.exists():continue
 units=json.loads((B/(m+'-units.json')).read_text());j=json.loads(jp.read_text());t=j['translations'];assert set(t)=={u['id']for u in units['units']};en=R/row['canonical'];assert hashlib.sha256(en.read_bytes()).hexdigest()==units['sourceCanonicalSHA256'];body=en.read_text().split('---\n',2)[2];s=BeautifulSoup(body,'html.parser');nodes=s.select('.pcre2-original-content h2,.pcre2-original-content p,.pcre2-original-content pre');assert len(nodes)==len(units['units']);preChanges=[]
 for node,u in zip(nodes,units['units']):
  assert node.name==u['tag'];assert node.get_text()==u['text'];v=t[u['id']]
  if v is None:assert node.name=='pre'or not u['text'].strip();continue
  if node.name=='pre':
   code=s.new_tag('code');code.string=v;node.clear();node.append(code);preChanges.append({'unit':u['id'],'sourceSHA':hashlib.sha256(u['text'].encode()).hexdigest(),'JapaneseSHA':hashlib.sha256(v.encode()).hexdigest(),'reason':'Translate explanatoryEnglish while preserving literal identifiers/syntax; fullmeaningreviewpending'})
  else:
   inner=BeautifulSoup(v,'html.parser');node.clear()
   for x in list(inner.contents):node.append(x)
 for a in s.find_all('a',href=True):
  if a['href'].startswith('/docs/pcre2/v10-49/en/'):a['href']=a['href'].replace('/v10-49/en/','/v10-49/ja/',1)
 tokens={}
 for i,pre in enumerate(s.find_all('pre')):
  k=f'LIBX_PCRE2_JAPRE_{i:05d}_END';tokens[k]='<pre><code>'+html.escape(pre.get_text(),quote=False).replace('\n','&#10;').replace('\t','&#9;')+'</code></pre>';pre.replace_with(NavigableString(k))
 content=str(s)
 for k,v in tokens.items():assert content.count(k)==1;content=content.replace(k,v)
 front='---\ntitle: '+json.dumps(j['title'],ensure_ascii=False)+'\ndescription: '+json.dumps('PCRE2 10.49の固定原典を全節収録した独自の日本語訳です。',ensure_ascii=False)+'\ndocumentId: '+json.dumps('pcre2:10.49:'+m)+'\nlicenseSource: pcre2-manual\n---\n\n';dest=B/(m+'.md');dest.write_text(front+content+'\n');rows.append({'manual':m,'file':str(dest.relative_to(R)),'SHA256':hashlib.sha256(dest.read_bytes()).hexdigest(),'status':'saved-unreviewed','units':len(nodes),'translatedPre':preChanges})
(B/'SAVED_DRAFTS.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'saved-unreviewed-drafts-not-formalreview','savedPages':len(rows),'unreviewedPages':len(rows),'pages':rows},ensure_ascii=False,indent=2)+'\n');print('SavedJapaneseMDdrafts',len(rows),'reviewed0')
