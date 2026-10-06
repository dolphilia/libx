from pathlib import Path
import json, hashlib, re, datetime, html
from bs4 import BeautifulSoup
R=Path('/Users/dolphilia/github/libx'); W=Path('/private/tmp/libx-wren-formal-864'); E=Path(__file__).parent
N=Path('docs/notes/document-import/wren/v0-4-0'); B=R/N; A=W/'apps/wren'; V='v0-4-0'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
routes=json.loads((B/'regeneration/ROUTES.json').read_text());rows=routes['guides']+routes['references']
norm=lambda s:re.sub(r'\s+',' ',s).strip()
records=[]; parsed={}; originalCodes=0; links=0
for row in rows:
 p=B/'canonical/en'/row['id']; app=A/'src/content/docs'/V/'en'/row['id'];assert p.read_bytes()==app.read_bytes()
 body=p.read_text().split('<div class="wren-document">',1)[1].rsplit('</div>',1)[0]
 expected=BeautifulSoup(body,'html.parser');assert expected.h1;expected.h1.decompose()
 raw='<pre><code>'+html.escape((B/row['input']).read_text())+'</code></pre>' if row.get('wholeCode') else (B/row['input']).read_text()
 if row['key']=='modules/index.html':raw=raw.replace('[embedding in applications][embedding]','<a>embedding in applications</a>')
 def escaped_pre(m):
  opening,inside,closing=m.groups();wrapped=re.fullmatch(r'<code>(.*)</code>',inside,flags=re.S)
  if wrapped:inside=wrapped.group(1)
  assert '<span' not in inside
  return opening+'<code>'+html.escape(html.unescape(inside))+'</code>'+closing
 raw=re.sub(r'(<pre\b[^>]*>)(.*?)(</pre>)',escaped_pre,raw,flags=re.S)
 original=BeautifulSoup(raw,'html.parser')
 assert [x.get_text() for x in original.find_all('pre')]==[x.get_text() for x in expected.find_all('pre')],row['id']
 assert norm(original.get_text())==norm(expected.get_text()),('source text',row['id'])
 if not row.get('wholeCode'):originalCodes+=len(original.find_all('pre'))
 out=A/'dist'/V/'en'/row['id'].removesuffix('.md')/'index.html';soup=BeautifulSoup(out.read_text(),'html.parser');actual=soup.select_one('.wren-document');assert actual
 assert actual.h1.get_text()==row['titleEN'];actual.h1.decompose()
 for b in actual.select('button.docs-code-copy'):b.decompose()
 assert [x.get_text() for x in expected.find_all('pre')]==[x.get_text() for x in actual.find_all('pre')],('rendered code',row['id'])
 assert norm(expected.get_text())==norm(actual.get_text()),('rendered text',row['id'])
 headings=lambda x:[(h.name,norm(h.get_text())) for h in x.find_all(re.compile('^h[1-6]$'))]
 assert headings(expected)==headings(actual),('headings',row['id'])
 tables=lambda x:[[(c.name,norm(c.get_text())) for c in t.find_all(['td','th'])] for t in x.find_all('table')]
 assert tables(expected)==tables(actual),('table cells',row['id'])
 anchors=lambda x:{y.get('id') for y in x.find_all(attrs={'id':True})}|{y.get('name') for y in x.find_all('a',attrs={'name':True})}
 parsed['/docs/wren/'+V+'/en/'+row['id'].removesuffix('.md')+'/']={'soup':actual,'anchors':anchors(actual)}
 records.append({'id':row['id'],'canonicalSha256':sha(p),'renderedSha256':sha(out),'codeBlocks':len(expected.find_all('pre')),'headings':len(headings(expected)),'tableCells':sum(map(len,tables(expected))),'sourceTextCodeHeadingsTablesExact':True})
for path,x in parsed.items():
 for a in x['soup'].find_all('a',href=True):
  url=a['href']
  if url.startswith('#'):target=path;frag=url[1:]
  elif url.startswith('/docs/wren/'+V+'/en/'):
   target,_,frag=url.partition('#')
  else:continue
  assert target in parsed,(path,url,'missing route');assert not frag or frag in parsed[target]['anchors'],(path,url,'missing anchor');links+=1
assert originalCodes==353,originalCodes
fetch=json.loads((B/'source/FETCH.json').read_text());assert len(fetch['files'])==45
for x in fetch['files']:
 p=B/'source/original'/x['path'];raw=p.read_bytes();assert sha(p)==x['sha256'] and len(raw)==x['bytes'];assert hashlib.sha1(b'blob '+str(len(raw)).encode()+b'\0'+raw).hexdigest()==x['gitBlob']
out={'status':'passed-English-preparation','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'EnglishOriginals':42,'bodyPages':41,'originalLicense':1,'fixedOriginalFiles':45,'sourceBodyCodeBlocks':originalCodes,'originalNoticeCodeBlocks':1,'internalLinks':links,'rows':records,'JapaneseDrafts':0,'translationMeaningReviews':0,'scope':'Preparation checks only. Rendered original text/code/headings/table cells and internal links retained. Native new-template representatives/source offer/full formal integration pending.'}
(E/'EN_CHECK.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:out[k] for k in ['status','EnglishOriginals','sourceBodyCodeBlocks','internalLinks','JapaneseDrafts','translationMeaningReviews']}))
