from pathlib import Path
from bs4 import BeautifulSoup
import copy,json,hashlib,html,re,sys,shutil
N=Path(__file__).resolve().parent;W=Path(sys.argv[1] if len(sys.argv)>1 else '/private/tmp/libx-gnu-tar-formal-964');A=W/'apps/gnu-tar';assert A.exists();P=N/'preferred';P.mkdir(exist_ok=True);S=BeautifulSoup((N/'source/derived/manual.html').read_text(),'html.parser');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();base='/docs/gnu-tar/source/v1-35/'
manifest=json.loads((N/'SOURCE_MANIFEST.json').read_text())
for f in manifest['files']:assert sha(N/f['path'])==f['sha256']
def clean(n):
 c=copy.deepcopy(n)
 for x in c.select('.nav-panel,.copiable-link'):x.decompose()
 return c
nodes=[h.parent for ch in ['Introduction','Tutorial'] for h in S.find(id=ch).find_all(re.compile('^h[1-6]$'))];assert len(nodes)==31
routes={n['id']:f"01-guide/{i+1:02d}-{n['id'].lower()}.md" for i,n in enumerate(nodes)}
parts={};ids={}
for n in nodes:
 c=clean(n)
 for x in c.select('div[class$="-level-extent"]'):x.decompose()
 parts[n['id']]=c
 for x in [c,*c.select('[id]')]:
  if x.get('id'):assert x['id']not in ids;ids[x['id']]=routes[n['id']]
footOwner=next(k for k,c in parts.items()if c.select_one('a[href="#FOOT1"]'));f=S.find(id='FOOT1').parent;parts[footOwner].append(copy.deepcopy(f));parts[footOwner].append(copy.deepcopy(f.find_next_sibling('p')));ids['FOOT1']=routes[footOwner]
notice=''.join(str(x)for x in S.find(id='Top').find_all(['p','blockquote'],recursive=False)[:3]);authors=clean(S.find(id='Authors'));gfdl=clean(S.find(id='GNU-Free-Documentation-License'));gpl=(N/'source/COPYING').read_text()
context='<section><h3>Libx GNU tar 1.35 Introduction and Tutorial / Libx GNU tar 1.35 入門とチュートリアル</h3><p>Original authors: John Gilmore, Jay Fenlason, Joy Kendall, Thomas Bushnell n/BSG, François Pinard, Paul Eggert, Sergey Poznyakoff, Amy Gorin, Melissa Weisshaus, Daniel Hagerty, Jeff Bailey. Original publisher: Free Software Foundation. Modification author and publisher: Libx.</p>'+notice+'<p>Copyright © 2026 Libx, for static editing and independent Japanese translation. This modified version is available under GNU Free Documentation License1.3 or later; invariant section GNU General Public License; Front-Cover Text A GNU Manual; Back-Cover Text You have the freedom to copy and modify this GNU manual. No new invariant sections or cover texts have been added.</p><h3>History / 履歴</h3><p>Original: GNU tar: an archiver tool; version1.35,10July2023; John Gilmore, Jay Fenlason et al.; publisher Free Software Foundation. Fixed archive SHA25614d55e32063ea9526e057fbf35fcabd53378e769787eff7919c3755b02d2b57e; https://ftp.gnu.org/gnu/tar/tar-1.35.tar.gz.</p><p>11October2026: Libx GNU tar 1.35 Introduction and Tutorial / Libx GNU tar 1.35 入門とチュートリアル; modification author and publisher Libx. Complete chapters1–2 and footnote1 represented as static editable HTML in Markdown, with independent Japanese translation. Remaining chapters, appendices and indexes are available in the fixed complete original. Original examples remain literal text and are not executed.</p>'+str(authors)+'<h3>GNU General Public License</h3><p>Unchanged COPYING from the same fixed archive is provided as an explicit supplement. The generated original manual has no GPL appendix despite the invariant-section declaration; this supplement is not presented as an appendix found in the original.</p><pre>'+html.escape(gpl)+'</pre>'+str(gfdl)+'</section>'
c=BeautifulSoup(context,'html.parser');ctxids={x['id']:'tar-context-'+x['id']for x in c.select('[id]')}
for x in c.select('[id]'):x['id']=ctxids[x['id']]
for x in c.select('a[href]'):
 if x['href'].startswith('#'):x['href']='#'+ctxids[x['href'][1:]] if x['href'][1:]in ctxids else base+'manual.html'+x['href']
context=str(c)
trial=(N/'trial/preferred/en/01-guide/01-introduction.md').read_text();template=json.loads(next(x for x in trial.splitlines()if x.startswith('documentContext: ')).split(': ',1)[1])[0];ctx=[{**template,'html':context}];rows=[]
def rewrite(n,lang='en'):
 for a in n.select('a[href]'):
  x=a['href']
  if x.startswith('#'):
   a['href']='/docs/gnu-tar/v1-35/'+lang+'/'+ids[x[1:]][:-3]+'/#'+x[1:]if x[1:]in ids else base+'manual.html'+x
  elif x=='fileutils.html#What-information-is-listed':a['href']='https://www.gnu.org/software/coreutils/manual/html_node/What-information-is-listed.html'
 return n
for key,c in parts.items():
 original=N/'source-fragments/en'/routes[key];original=original.with_suffix('.html');original.parent.mkdir(parents=True,exist_ok=True);original.write_text(str(c)+'\n')
 c=rewrite(c);title=c.find(re.compile('^h[1-6]$')).get_text(' ',strip=True);body='<div class="gnu-tar-original-content">'+str(c)+'</div>';path=P/'en'/routes[key];path.parent.mkdir(parents=True,exist_ok=True);path.write_text('---\ntitle: '+json.dumps(title,ensure_ascii=False)+'\nlicenseSource: gnu-tar-manual\ndocumentContext: '+json.dumps(ctx,ensure_ascii=False)+'\n---\n\n'+body+'\n');rows.append({'id':key,'page':routes[key],'originalSection':key,'originalHTMLSHA256':sha(N/'source/derived/manual.html'),'canonicalSHA256':sha(path),'pre':len(c.select('pre')),'title':title})
for name,title,body in [('01-gfdl','GNU Free Documentation License',str(rewrite(gfdl))),('02-gpl','GNU General Public License','<section id="GNU-General-Public-License"><h2>GNU General Public License</h2><p>Unchanged same-archive COPYING supplement; see source details for the original absent-appendix limitation.</p><pre>'+html.escape(gpl)+'</pre></section>')]:
 body=re.sub(r'(<pre\b[^>]*>)(.*?)(</pre>)',lambda m:m[1]+m[2].replace('\n','&#10;')+m[3],body,flags=re.S)
 path=P/'en/02-reference'/(name+'.md');path.parent.mkdir(parents=True,exist_ok=True);path.write_text('---\ntitle: '+json.dumps(title)+'\nlicenseSource: gnu-tar-manual\ndocumentContext: '+json.dumps(ctx,ensure_ascii=False)+'\n---\n\n'+body+'\n')
# Only formal generated-app template content is replaced, never other apps.
shutil.rmtree(A/'src/content/docs');shutil.copytree(P,A/'src/content/docs/v1-35',dirs_exist_ok=True)
D=A/'public/source/v1-35';D.mkdir(parents=True,exist_ok=True)
for source,target in [(N/'source/derived/manual.html',D/'manual.html'),(N/'source/COPYING',D/'COPYING')]:shutil.copyfile(source,target)
shutil.copytree(N/'source/doc',D/'original/doc',dirs_exist_ok=True);archive=next((N/'source').rglob('tar-1.35.tar.gz'));(D/'original').mkdir(exist_ok=True);shutil.copyfile(archive,D/'original/tar-1.35.tar.gz')
config=json.loads((N/'trial/project.config.jsonc').read_text());config['paths']['projectSlug']='gnu-tar';config['translations']['en'].update(displayName='GNU tar Introduction and Tutorial',displayDescription='GNU tar1.35 complete Introduction and Tutorial, with fixed original sources.');config['translations']['ja'].update(displayName='GNU tar 入門とチュートリアル',displayDescription='GNU tar1.35第1〜2章全文の原文と独自日本語訳。');source=config['licensing']['sources'][0];source.update(name='GNU tar1.35 complete Introduction and Tutorial',licenseUrl=base+'manual.html#GNU-Free-Documentation-License',provenanceNotes=[{'en':'Libx provides complete original chapters1–2 and footnote1 with independent Japanese translation. Remaining chapters/appendices/indexes are available in the fixed original. Commands and examples are static literal text.','ja':'Libxは第1〜2章全文と脚注1の原文と独自日本語訳を提供します。他の章・付録・索引は固定原文を参照できます。コマンドと例は実行せず、原文の静的な文字列として示します。'},{'en':'Fixed archive document date10July2023 is distinct from online revision22August2023. Original GFDL1.3+ notices, authors, declared invariant GNU General Public License and cover texts are preserved. Same-archive COPYING is an explicit unchanged supplement because the generated original has no GPL appendix.','ja':'固定配布物の原文日付2023年7月10日はオンライン改訂日8月22日と別です。GFDL1.3以降の原通知・著作者・不変節GNU General Public Licenseと表紙文言を保持しています。生成原文にGPL付録がないため、同梱COPYINGを明示的な未変更補足として提供します。'},{'en':'Original relative fileutils reference is linked to the corresponding official GNU coreutils section; original source remains unchanged.','ja':'原文の相対fileutils参照は、対応するGNU coreutils公式節へ案内しています。固定原文は変更していません。'}],attributionLinks=[{'url':base+'manual.html','label':{'en':'Fixed complete original','ja':'固定原文全文'}},{'url':base+'COPYING','label':{'en':'Unchanged GPL supplement','ja':'未変更GPL補足'}},{'url':base+'original/tar-1.35.tar.gz','label':{'en':'Original archive','ja':'原著配布物'}}]);(A/'src/config/project.config.jsonc').write_text(json.dumps(config,ensure_ascii=False,indent=2)+'\n');(N/'project.config.jsonc').write_text(json.dumps(config,ensure_ascii=False,indent=2)+'\n')
assert sum(r['pre']for r in rows)==44
out={'status':'generated-not-yet-canonical-verified','rows':rows,'EnglishGuides':31,'EnglishReferences':2,'JapaneseGuides':len(list((P/'ja').rglob('*.md')))if(P/'ja').exists()else 0,'originalPre':44,'footnoteOwner':footOwner,'sourceArchiveSHA256':sha(archive),'fullHTMLSHA256':sha(N/'source/derived/manual.html'),'bodyTransform':'Remove source navigation/self¶ only; split hierarchy preserving text/pre/IDs; remap included references, fixed original for remaining targets; one annotated external fileutils link mapping.','workspace':str(W)};(N/'CANONICAL_GENERATION.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print({k:v for k,v in out.items()if k!='rows'})
