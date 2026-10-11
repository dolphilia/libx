from pathlib import Path
from bs4 import BeautifulSoup
import json,copy,html,hashlib,datetime,shutil,sys,re
N=Path(__file__).resolve().parent
W=Path(sys.argv[1] if len(sys.argv)>1 else '/private/tmp/libx-gnu-patch-formal-979');A=W/'apps/gnu-patch'
S=BeautifulSoup((N/'source/derived/manual.html').read_text(),'html.parser').select_one('.manual-text');assert S
base='/docs/gnu-patch/source/v2-8/'
units=[('01-introduction','Introduction and usage',['NAME','SYNOPSIS','DESCRIPTION']),('02-options','Options',['OPTIONS']),('03-environment-and-references','Environment, files and references',['ENVIRONMENT','FILES','SEE_ALSO']),('04-notes-for-patch-senders','Notes for patch senders',['NOTES_FOR_PATCH_SENDERS']),('05-diagnostics-and-caveats','Diagnostics and caveats',['DIAGNOSTICS','CAVEATS']),('06-compatibility','Compatibility issues',['COMPATIBILITY_ISSUES']),('07-bugs','Bugs',['BUGS']),('08-copying','Copying this manual',['COPYING']),('09-authors','Authors',['AUTHORS'])]
# Keep all source sections, including notices, in original order; normalize only formatting.
def clean(node):
 node=copy.deepcopy(node)
 for a in node.select('a.permalink'):a.unwrap()
 for h in node.select('h1.Sh'):h.name='h2'
 for p in list(node.select('pre')):
  raw=p.get_text()
  if not raw.strip():p.decompose();continue
  p.clear();code=BeautifulSoup('<code></code>','html.parser').code;code.string=raw;p.append(code)
 for x in list(node.select('b,i,p')):
  if not x.get_text() and not x.find(['img','a','br']):x.decompose()
 return node
notice=clean(S.find(id='COPYING').parent)
context='<section><h3>Libx GNU patch 2.8 Manual / Libx GNU patch 2.8 マニュアル</h3><p>Original authors: Larry Wall, Paul Eggert, Wayne Davison, David MacKenzie, Andreas Gruenbacher. Original publisher: Free Software Foundation. Modification and independent Japanese translation: Libx, 2026.</p>'+str(notice)+'<p>The entire resulting derived manual is distributed under the identical original permission notice above. Copyright © 2026 Libx for static editing and independent unofficial Japanese translation.</p><p>Libx provides the complete fixed GNU patch 2.8 patch.man, organized into nine guide pages. Original examples remain static text. Other implementation files and historical NEWS entries are outside the translated scope.</p><p>LibxはGNU patch 2.8に同梱されたpatch.man全文を9ページに整理し、原文と独立した非公式日本語訳を提供します。例は原文の静的な文字列です。実装ファイルや過去のNEWSは翻訳対象外です。</p><p>Libx編集注記: --follow-symlinksの固定man本文と同梱NEWSの2.8変更説明には記述の違いがあります。本文を黙って修正せず、<a href="'+base+'manual.html#follow">固定manの説明</a>と<a href="'+base+'NEWS">原著NEWS</a>を参照できるようにしています。</p><p><a href="'+base+'manual.html">Fixed complete original / 固定原文全文</a> · <a href="'+base+'patch.man">Editable original roff / 編集可能な原文</a> · <a href="'+base+'patch-2.8.tar.gz">Original distribution / 原著配布物</a> · <a href="'+base+'AUTHORS">Original AUTHORS</a></p></section>'
c=BeautifulSoup(context,'html.parser')
for x in c.select('[id]'):x['id']='patch-context-'+x['id']
ctx=[{'kind':'source','html':str(c)}];P=N/'preferred';EN=P/'en/01-guide';EN.mkdir(parents=True,exist_ok=True);F=N/'source-fragments/en';F.mkdir(parents=True,exist_ok=True)
ids={};parts={};rows=[]
for name,title,keys in units:
 raw=BeautifulSoup('<section class="gnu-patch-unit"></section>','html.parser').section
 for key in keys:raw.append(copy.deepcopy(S.find(id=key).parent))
 (F/(name+'.html')).write_text(str(raw)+'\n');node=clean(raw);parts[name]=node
 for x in node.select('[id]'):assert x['id']not in ids;ids[x['id']]=name
for name,title,keys in units:
 node=parts[name]
 for a in node.select('a[href^="#"]'):
  key=a['href'][1:];a['href']='/docs/gnu-patch/v2-8/en/01-guide/'+ids[key]+'/#'+key if key in ids else base+'manual.html#'+key
 body=re.sub(r'(<pre[^>]*>)([\s\S]*?)(</pre>)',lambda m:m[1]+m[2].replace('\n','&#10;')+m[3],str(node));p=EN/(name+'.md')
 p.write_text('---\ntitle: '+json.dumps(title,ensure_ascii=False)+'\ndocumentId: '+json.dumps('gnu-patch:2.8:'+name)+'\nlicenseSource: gnu-patch-manual\ntoc: {"maxLevel": 3}\ndocumentContext: '+json.dumps(ctx,ensure_ascii=False)+'\n---\n\n<div class="gnu-patch-original-content">'+body+'</div>\n');rows.append({'page':'01-guide/'+name+'.md','title':title,'sections':keys,'words':len(node.get_text().split()),'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'fragmentSHA256':hashlib.sha256((F/(name+'.html')).read_bytes()).hexdigest(),'pre':len(node.select('pre'))})
assert len(rows)==9 and sum(len(x['sections'])for x in rows)==14
(A/'src/content/docs').mkdir(parents=True,exist_ok=True)
for p in list((A/'src/content/docs').iterdir()):
 if p.name!='v2-8':shutil.rmtree(p) if p.is_dir() else p.unlink()
shutil.copytree(P,A/'src/content/docs/v2-8',dirs_exist_ok=True)
public=A/'public/source/v2-8';public.mkdir(parents=True,exist_ok=True)
for name in ['patch.man','NEWS','AUTHORS','COPYING','README','patch-2.8.tar.gz']:shutil.copyfile(N/'source/original'/name,public/name)
(public/'manual.html').write_text('<!doctype html><html lang="en"><meta charset="utf-8"><title>GNU patch 2.8 fixed manual</title>'+str(S)+'</html>')
config={'paths':{'baseUrlPrefix':'/docs','projectSlug':'gnu-patch','siteUrl':'https://libx.dev'},'language':{'default':'en','supported':['en','ja'],'displayNames':{'en':'English','ja':'日本語'}},'translations':{l:{'displayName':'GNU patch','displayDescription':d,'categories':{'guide':g}}for l,d,g in [('en','GNU patch 2.8 complete manual.','Guide'),('ja','GNU patch 2.8 マニュアル全文の原文と独立日本語訳。','ガイド')]},'versioning':{'versions':[{'id':'v2-8','name':'2.8','date':'2025-03-29T00:00:00.000Z','isLatest':True}]},'licensing':{'defaultSource':'gnu-patch-manual','showAttribution':True,'sourceLanguage':'en','sources':[{'id':'gnu-patch-manual','name':'GNU patch 2.8 manual','author':'Larry Wall, Paul Eggert, Wayne Davison, David MacKenzie, Andreas Gruenbacher / Free Software Foundation','license':'Original GNU patch manual permission','licenseUrl':base+'manual.html#COPYING','sourceUrl':'https://www.gnu.org/software/patch/','provenanceNotes':[{'en':'Complete fixed patch.man in nine guide pages; independent unofficial Japanese translation. Examples remain static text.','ja':'固定patch.man全文を9ページに整理し、独立した非公式日本語訳を提供します。例は原文の静的な文字列です。'},{'en':'Original English copyright and all three manual permission paragraphs are preserved. Program GPL is not substituted for the manual permission.','ja':'原著作権とマニュアル固有の英語許諾3段落を保持しています。本体のGPLを本文の許諾へ代用しません。'}],'attributionLinks':[{'url':base+'manual.html','label':{'en':'Fixed complete original','ja':'固定原文全文'}},{'url':base+'patch-2.8.tar.gz','label':{'en':'Original distribution','ja':'原著配布物'}}]}]}}
(A/'src/config/project.config.jsonc').write_text(json.dumps(config,ensure_ascii=False,indent=2)+'\n');(N/'project.config.jsonc').write_text(json.dumps(config,ensure_ascii=False,indent=2)+'\n')
(N/'CANONICAL_GENERATION.json').write_text(json.dumps({'status':'generated-not-verified','workspace':str(W),'guides':9,'originalSections':14,'originalNonemptyPre':2,'rows':rows,'normalization':['permalink wrappers unwrapped preserving label text and IDs','h1 section headings demoted to h2','Empty pre removed; nonempty pre text placed unchanged inside code wrapper to preserve initial newlines','Empty font/p elements removed; English body unchanged'],'limits':'Full Japanese translation, content review, source kit and final checks not complete'},ensure_ascii=False,indent=2)+'\n');print('Generated9English guides,14sections,2nonempty pre')
