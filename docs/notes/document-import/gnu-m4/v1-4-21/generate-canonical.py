from pathlib import Path
from bs4 import BeautifulSoup
import json,copy,html,hashlib,datetime,shutil
N=Path(__file__).resolve().parent;W=Path('/private/tmp/libx-gnu-m4-formal-971');A=W/'apps/gnu-m4';S=BeautifulSoup((N/'source/derived/manual.html').read_text(),'html.parser');base='/docs/gnu-m4/source/v1-4-21/'
assert A.exists();shutil.rmtree(A/'src/content/docs');P=A/'public/source/v1-4-21';shutil.copytree(N/'source',P,dirs_exist_ok=True);shutil.copyfile(N/'source/derived/manual.html',P/'manual.html')
def clean(n):
 n=copy.deepcopy(n)
 for x in n.select('.nav-panel,.copiable-link'):x.decompose()
 return n
notice=''.join(str(x)for x in S.find(id='Top').find_all(['p','blockquote'],recursive=False)[:3]);lic=clean(S.find(id='GNU-Free-Documentation-License'))
context='<section><h3>Libx GNU M4 1.4.21 Introduction, Invocation and Syntax / Libx GNU M4 1.4.21 入門・起動・構文</h3><p>Original authors: René Seindal, François Pinard, Gary V. Vaughan, Eric Blake. Original publisher: Free Software Foundation. Modification author and publisher: Libx.</p>'+notice+'<p>Copyright © 2026 Libx, for independent Japanese translation and static editing. This modified version is available under GNU Free Documentation License1.3 or later, with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.</p><h3>History / 履歴</h3><p>Original: GNU M4, version1.4.21, edition1.4.21,6February2026, René Seindal, François Pinard, Gary V. Vaughan, Eric Blake, Free Software Foundation. Modified11October2026 by Libx under the distinct local modified title above; translation in progress.</p><p>This edition covers complete chapters1–3. Other chapters and references remain available in the complete fixed original. Japanese text is an independent unofficial translation; complete translation and content review remain in progress. All examples remain static text.</p><p><a href="'+base+'archive/m4-1.4.21/AUTHORS">Original AUTHORS</a> · <a href="'+base+'archive/m4-1.4.21/THANKS">Original THANKS</a> · <a href="'+base+'m4-1.4.21.tar.gz">Fixed original distribution</a> · <a href="'+base+'archive/m4-1.4.21/doc/m4.texi">Editable original Texinfo</a></p>'+str(lic)+'</section>'
c=BeautifulSoup(context,'html.parser');ids={x['id']:'m4-context-'+x['id']for x in c.select('[id]')}
for x in c.select('[id]'):x['id']=ids[x['id']]
for x in c.select('a[href]'):
 if x['href'].startswith('#'):x['href']='#'+ids[x['href'][1:]]if x['href'][1:]in ids else base+'manual.html'+x['href']
context=str(c);example=Path('/Users/dolphilia/github/libx/apps/gnu-sed/src/content/docs/v4-10/en/01-guide/64-reporting-bugs.md').read_text();template=json.loads(next(x for x in example.splitlines()if x.startswith('documentContext: ')).split(': ',1)[1])[0];ctx=[{**template,'html':context}];rows=[]
P=N/'preferred';P.mkdir(exist_ok=True)
import re
nodes=[h.parent for ch in ['Preliminaries','Invoking-m4','Syntax']for h in S.find(id=ch).find_all(re.compile('^h[2-3]$'))];assert len(nodes)==18
routes={n['id']:f"01-guide/{i+1:02d}-{n['id'].lower()}.md"for i,n in enumerate(nodes)};parts={};ids={}
for n in nodes:
 c=clean(n)
 for x in c.select('div[class$="-level-extent"]'):x.decompose()
 parts[n['id']]=c
 for x in [c,*c.select('[id]')]:
  if x.get('id'):assert x['id']not in ids;ids[x['id']]=routes[n['id']]
owner=next(k for k,c in parts.items()if c.select_one('a[href="#FOOT1"]'));f=S.find(id='FOOT1').parent;parts[owner].append(copy.deepcopy(f));parts[owner].append(copy.deepcopy(f.find_next_sibling('p')));ids['FOOT1']=routes[owner]
def rewrite(c):
 for a in c.select('a[href]'):
  x=a['href']
  if x.startswith('#'):a['href']='/docs/gnu-m4/v1-4-21/en/'+ids[x[1:]][:-3]+'/#'+x[1:]if x[1:]in ids else base+'manual.html'+x
 return c
for key,c in parts.items():
 fragment=N/'source-fragments/en'/Path(routes[key]).with_suffix('.html');fragment.parent.mkdir(parents=True,exist_ok=True);fragment.write_text(str(c)+'\n');c=rewrite(c);title=c.find(re.compile('^h[2-3]$')).get_text(' ',strip=True);p=P/'en'/routes[key];p.parent.mkdir(parents=True,exist_ok=True);p.write_text('---\ntitle: '+json.dumps(title,ensure_ascii=False)+'\nlicenseSource: gnu-m4-manual\ndocumentContext: '+json.dumps(ctx,ensure_ascii=False)+'\n---\n\n<div class="gnu-m4-original-content">'+str(c)+'</div>\n');rows.append({'id':key,'page':routes[key],'title':title,'canonicalSHA256':hashlib.sha256(p.read_bytes()).hexdigest(),'fragmentSHA256':hashlib.sha256(fragment.read_bytes()).hexdigest(),'pre':len(c.select('pre'))})
lic=clean(S.find(id='GNU-Free-Documentation-License'));body=str(rewrite(lic));body=re.sub(r'(<pre\b[^>]*>)(.*?)(</pre>)',lambda m:m[1]+m[2].replace('\n','&#10;')+m[3],body,flags=re.S);p=P/'en/02-reference/01-gfdl.md';p.parent.mkdir(parents=True,exist_ok=True);p.write_text('---\ntitle: "GNU Free Documentation License"\nlicenseSource: gnu-m4-manual\ndocumentContext: '+json.dumps(ctx,ensure_ascii=False)+'\n---\n\n'+body+'\n')
shutil.copytree(P,A/'src/content/docs/v1-4-21',dirs_exist_ok=True)
config=json.loads((N/'trial/project.config.jsonc').read_text());config['paths']['projectSlug']='gnu-m4';config['translations']['en'].update(displayName='GNU M4 Introduction, Invocation and Syntax',displayDescription='GNU M4 1.4.21 complete chapters1–3.');config['translations']['ja'].update(displayName='GNU M4 入門・起動・構文',displayDescription='GNU M4 1.4.21 第1〜3章の原文と独立日本語訳。')
for lang in ['en','ja']:config['translations'][lang]['categories']['reference']='Reference'if lang=='en'else'参考資料'
source=config['licensing']['sources'][0];source.update(name='GNU M4 1.4.21 Introduction, Invocation and Syntax',licenseUrl=base+'manual.html#GNU-Free-Documentation-License',provenanceNotes=[{'en':'Libx provides original chapters1–3 and footnote1 with independent Japanese translation. Remaining chapters and indexes are available in the complete fixed original. All examples are static text.','ja':'Libxは第1〜3章と脚注1の原文と独立日本語訳を提供します。他の章・索引は固定原文全文を参照できます。例は原文の静的な文字列です。'},{'en':'Fixed1.4.21 (6February2026) is distinct from online1.4.20. Original GFDL1.3-or-later notices, authors and full English license are retained.','ja':'固定版1.4.21（2026年2月6日）とオンライン旧版1.4.20を区別します。GFDL1.3以降の原通知・著者・英語ライセンス全文を保持しています。'}],attributionLinks=[{'url':base+'manual.html','label':{'en':'Fixed complete original','ja':'固定原文全文'}},{'url':base+'m4-1.4.21.tar.gz','label':{'en':'Original distribution','ja':'原著配布物'}}]);(A/'src/config/project.config.jsonc').write_text(json.dumps(config,ensure_ascii=False,indent=2)+'\n');(N/'project.config.jsonc').write_text(json.dumps(config,ensure_ascii=False,indent=2)+'\n')
assert sum(r['pre']for r in rows)==15
(N/'CANONICAL_GENERATION.json').write_text(json.dumps({'status':'generated-not-canonical-verified','workspace':str(W),'EnglishGuides':18,'EnglishReferences':1,'JapaneseGuides':0,'originalPre':15,'footnoteOwner':owner,'rows':rows,'limits':'Original body split with nav/copied anchors removed and links remapped; no English meaning or Japanese full review claimed.'},ensure_ascii=False,indent=2)+'\n');print('English18guides+GFDLreference generated; canonical verification pending')
