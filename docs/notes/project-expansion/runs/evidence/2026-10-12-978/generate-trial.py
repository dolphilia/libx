from pathlib import Path
from bs4 import BeautifulSoup
import json,copy,shutil,hashlib,datetime,re
E=Path(__file__).parent.resolve();A=Path('/private/tmp/libx-gnu-tar-trial-964/apps/gnu-patch-trial');T=E/'trial';T.mkdir(exist_ok=True)
S=BeautifulSoup((E/'TRIAL.html').read_text(),'html.parser');manual=S.select_one('.manual-text');assert manual
base='/docs/gnu-patch-trial/source/v2-8/';P=A/'public/source/v2-8';P.mkdir(parents=True,exist_ok=True)
for f in ['patch.man','NEWS','AUTHORS','COPYING']:shutil.copyfile(E/'source/patch-2.8'/f,P/f)
(P/'manual.html').write_text('<!doctype html><html lang="en"><meta charset="utf-8"><title>GNU patch 2.8 fixed manual</title>'+str(manual)+'</html>')
notice=manual.find(id='COPYING').parent;ctx='<section><h3>Libx GNU patch 2.8 — Local conversion trial / ローカル変換試作</h3>'+str(notice)+'<p>Modification and independent unofficial sample translation: Libx, 2026. The entire derived manual uses the identical original permission notice above. Full translation and content review remain pending. This local trial is excluded from publication.</p><p>Original authors: Larry Wall, Paul Eggert, Wayne Davison, David MacKenzie, Andreas Gruenbacher. Original publisher: Free Software Foundation. Fixed version: GNU patch 2.8, 29 March 2025.</p><p><a href="'+base+'manual.html">Fixed complete original / 固定原文全文</a> · <a href="'+base+'patch.man">Editable original roff</a> · <a href="'+base+'NEWS">Original NEWS</a></p><p>Libx編集注記: 固定patch.manの--follow-symlinks説明と同梱NEWSの2.8変更説明は表現が異なります。原文を黙って修正せず、両方を参照できるようにしています。</p></section>'
context=BeautifulSoup(ctx,'html.parser')
for x in context.select('[id]'):x['id']='notice-'+x['id']
for x in context.select('a[href^="#"]'):x['href']='#notice-'+x['href'][1:]
ctx=[{'kind':'source','html':str(context)}];shutil.rmtree(A/'src/content/docs')
rows=[]
def write(lang,name,title,node):
 p=A/'src/content/docs/v2-8'/lang/'01-guide'/(name+'.md');p.parent.mkdir(parents=True,exist_ok=True)
 body=re.sub(r'(<pre[^>]*>)([\s\S]*?)(</pre>)',lambda m:m[1]+'<code>'+m[2].replace('\n','&#10;')+'</code>'+m[3],str(node))
 p.write_text('---\ntitle: '+json.dumps(title,ensure_ascii=False)+'\nlicenseSource: gnu-patch-manual\ndocumentContext: '+json.dumps(ctx,ensure_ascii=False)+'\n---\n\n<div class="gnu-patch-original-content">'+body+'</div>\n')
 target=T/'pages'/p.relative_to(A/'src/content/docs');target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,target)
 rows.append({'path':str(p.relative_to(A)),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
write('en','01-manual','GNU patch 2.8 complete manual — Local trial',manual)
pre=manual.find(id='merge').parent.find_next('pre');assert len(pre.get_text().splitlines())==7
ja=BeautifulSoup('<section id="merge-ja"><h2>--merge、--merge=merge、--merge=diff3</h2><p>diff3(1)やmerge(1)と同様に、パッチファイルを元のファイルへマージします。競合が見つかると、patchは警告を出し、競合部分を&lt;&lt;&lt;&lt;&lt;&lt;&lt;行と&gt;&gt;&gt;&gt;&gt;&gt;&gt;行で囲みます。典型的な競合は次の形です。</p></section>','html.parser').section
# Preserve literal markers; explanatory placeholders translated separately in prose.
ja.append(copy.deepcopy(pre));ja.append(BeautifulSoup('<p>例の <code>lines from the original file</code> は元のファイルの行、<code>original lines from the patch</code> はパッチ内の変更前の行、<code>new lines from the patch</code> はパッチ内の変更後の行を表します。</p><p><code>--merge</code>の省略可能な引数は競合の出力形式を決めます。diff3形式では、パッチ内の変更前の行を含む<code>|||||||</code>の部分を表示します。merge形式では、この部分を表示しません。既定はmerge形式です。</p><p>このオプションを指定すると<code>--forward</code>も有効になり、<code>--fuzz=num</code>オプションは考慮されません。</p>','html.parser'));write('ja','01-merge','patchのマージと競合表示 — 試作',ja)
c={'paths':{'baseUrlPrefix':'/docs','projectSlug':'gnu-patch-trial','siteUrl':'https://libx.dev'},'language':{'default':'en','supported':['en','ja'],'displayNames':{'en':'English','ja':'日本語'}},'translations':{l:{'displayName':v,'displayDescription':'Local conversion trial; excluded from publication','categories':{'guide':'Guide' if l=='en' else 'ガイド'}}for l,v in [('en','GNU patch local trial'),('ja','GNU patch ローカル試作')]},'versioning':{'versions':[{'id':'v2-8','name':'2.8','date':'2025-03-29T00:00:00.000Z','isLatest':True}]},'licensing':{'defaultSource':'gnu-patch-manual','showAttribution':True,'sourceLanguage':'en','sources':[{'id':'gnu-patch-manual','name':'GNU patch 2.8 manual','author':'Larry Wall and contributors / Free Software Foundation','license':'Original GNU patch manual permission','licenseUrl':base+'manual.html#COPYING','sourceUrl':'https://www.gnu.org/software/patch/','provenanceNotes':[{'en':'Local conversion trial; no adoption or publication. Original English permission preserved.','ja':'ローカル変換試作。採用・公開は未実施です。原英語の許諾通知を保持しています。'}],'attributionLinks':[{'url':base+'manual.html','label':{'en':'Fixed complete original','ja':'固定原文全文'}}]}]}}
(A/'src/config/project.config.jsonc').write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n');shutil.copyfile(A/'src/config/project.config.jsonc',T/'project.config.jsonc')
(E/'TRIAL_GENERATION.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'generated-not-adopted','app':str(A),'generator':'scripts/create-project.js --skip-install --skip-test --confirm','renderer':'/usr/bin/mandoc -Thtml -Ofragment','rows':rows,'englishSections':14,'japaneseSample':'Complete --merge option including7-line conflict example and implied --forward/ignored --fuzz','limits':['Trial only','Full Japanese translation/content review pending','mandoc emits some unusual font spans; literal text preserved; final canonical normalization pending']},indent=2)+'\n')
print('Generated normal-template English full-manual and independent Japanese merge sample')
