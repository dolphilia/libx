from pathlib import Path
from bs4 import BeautifulSoup
import json,copy,html,hashlib,datetime,shutil
N=Path(__file__).resolve().parent.parent;W=Path('/private/tmp/libx-gnu-tar-trial-964');A=W/'apps/gnu-tar-trial';S=BeautifulSoup((N/'source/derived/manual.html').read_text(),'html.parser');h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();base='/docs/gnu-tar-trial/source/v1-35/'
# Only generated template content inside the disposable trial is replaced.
assert W.name=='libx-gnu-tar-trial-964' and A.exists()
shutil.rmtree(A/'src/content/docs');P=A/'public/source/v1-35';P.mkdir(parents=True,exist_ok=True)
for source,target in [(N/'source/derived/manual.html',P/'manual.html'),(N/'source/COPYING',P/'COPYING'),(N/'source/doc/tar.texi',P/'tar.texi')]:shutil.copyfile(source,target)
def clean(node):
 n=copy.deepcopy(node)
 for x in n.select('.nav-panel,.copiable-link'):x.decompose()
 return n
notice=''.join(str(x)for x in S.find(id='Top').find_all(['p','blockquote'],recursive=False)[:3]);lic=clean(S.find(id='GNU-Free-Documentation-License'));authors=clean(S.find(id='Authors'));gpl=(N/'source/COPYING').read_text()
context='<section><h3>Libx GNU tar 1.35 Introduction and Tutorial — Local Conversion Trial / Libx GNU tar 1.35 入門とチュートリアル — ローカル変換試作</h3><p>Original authors: John Gilmore, Jay Fenlason, Joy Kendall, Thomas Bushnell n/BSG, François Pinard, Paul Eggert, Sergey Poznyakoff, Amy Gorin, Melissa Weisshaus, Daniel Hagerty, Jeff Bailey. Original publisher: Free Software Foundation. Modification author and publisher: Libx.</p>'+notice+'<p>Copyright © 2026 Libx, for trial conversion and independent sample translation. This modified version is available under GNU Free Documentation License1.3 or later; invariant section GNU General Public License; Front-Cover Text A GNU Manual; Back-Cover Text You have the freedom to copy and modify this GNU manual.</p><h3>History / 履歴</h3><p>Original: GNU tar: an archiver tool, 1.35,10July2023, John Gilmore, Jay Fenlason et al., Free Software Foundation. Modified11October2026 by Libx as the distinct local trial named above; excluded from publication.</p>'+str(authors)+'<h3>GNU General Public License</h3><p>Supplement from unchanged COPYING in the same fixed archive; generated original manual has no GPL appendix. Invariant identity assessment remains pending.</p><pre>'+html.escape(gpl)+'</pre>'+str(lic)+'</section>'
c=BeautifulSoup(context,'html.parser');ids={x['id']:'tar-context-'+x['id']for x in c.select('[id]')}
for x in c.select('[id]'):x['id']=ids[x['id']]
for x in c.select('a[href]'):
 if x['href'].startswith('#'):x['href']='#'+ids[x['href'][1:]] if x['href'][1:]in ids else base+'manual.html'+x['href']
context=str(c)+'<p>Editorial link note: the original relative fileutils.html#What-information-is-listed reference is linked to the corresponding official GNU coreutils section; the fixed original remains unchanged.</p>'
ctx=[{'kind':'source','html':context}]
# Existing schema accepts source-context objects with a title; use the actual established schema.
example=Path('/Users/dolphilia/github/libx/apps/gnu-sed/src/content/docs/v4-10/en/01-guide/64-reporting-bugs.md').read_text();template=json.loads(next(x for x in example.splitlines()if x.startswith('documentContext: ')).split(': ',1)[1])[0];ctx=[{**template,'html':context}]
rows=[]
def write(lang,name,title,node):
 n=clean(node);ids={x.get('id')for x in n.select('[id]')};ids.add(n.get('id'))
 if name=='02-tutorial':
  foot=S.find(id='FOOT1').parent;n.append(copy.deepcopy(foot));n.append(copy.deepcopy(foot.find_next_sibling('p')));ids.add('FOOT1')
 for a in n.select('a[href]'):
  href=a['href']
  if href.startswith('#')and href[1:]not in ids:a['href']=base+'manual.html'+href
  if href=='fileutils.html#What-information-is-listed':a['href']='https://www.gnu.org/software/coreutils/manual/html_node/What-information-is-listed.html'
 body='<div class="gnu-tar-original-content">'+str(n)+'</div>';p=A/'src/content/docs/v1-35'/lang/'01-guide'/(name+'.md');p.parent.mkdir(parents=True,exist_ok=True);p.write_text('---\ntitle: '+json.dumps(title,ensure_ascii=False)+'\nlicenseSource: gnu-tar-manual\ndocumentContext: '+json.dumps(ctx,ensure_ascii=False)+'\n---\n\n'+body+'\n');rows.append({'path':str(p.relative_to(A)),'sha256':h(p),'pre':len(n.select('pre')),'mode':'local conversion trial; not adopted/canonical/full meaning reviewed'})
write('en','01-introduction','Introduction — Local trial',S.find(id='Introduction'));write('en','02-tutorial','Tutorial — Local trial',S.find(id='Tutorial'))
ja=BeautifulSoup('<section id="extracting-untrusted-archives"><h2>2.8.4 信頼できない提供元からのアーカイブの展開</h2><p>アーカイブからファイルを展開すると、すでに存在するファイルが上書きされることがあります。信頼できない提供元からアーカイブを受け取った場合は、新しいディレクトリを作り、その中に展開してください。そうすれば、展開によって既存のファイルが上書きされる心配がなくなります。</p><p>たとえば、untrusted.tarがインターネット上の別の場所から来たもので、その内容を必ずしも信用できない場合は、次のように展開できます。</p></section>','html.parser').section;ja.append(copy.deepcopy(S.find(id='extracting-untrusted-archives').find('pre')));p=S.new_tag('p');p.string='展開する前に、--list（-t）オプションを使い、必要に応じて--verbose（-v）も組み合わせて、アーカイブの内容を確認するのもよい習慣です。';ja.append(p);write('ja','01-untrusted-archives','信頼できない提供元からの展開 — 試作',ja)
config={'paths':{'baseUrlPrefix':'/docs','projectSlug':'gnu-tar-trial','siteUrl':'https://libx.dev'},'language':{'default':'en','supported':['en','ja'],'displayNames':{'en':'English','ja':'日本語'}},'translations':{l:{'displayName':v,'displayDescription':'Local static conversion trial; excluded from deployment','categories':{'guide':'Guide'if l=='en'else'ガイド'}}for l,v in [('en','GNU tar local trial'),('ja','GNU tar ローカル試作')]},'versioning':{'versions':[{'id':'v1-35','name':'1.35','date':'2023-07-10T00:00:00.000Z','isLatest':True}]},'licensing':{'defaultSource':'gnu-tar-manual','showAttribution':True,'sourceLanguage':'en','sources':[{'id':'gnu-tar-manual','name':'GNU tar1.35 manual — trial','author':'John Gilmore, Jay Fenlason et al. / Free Software Foundation','license':'GFDL1.3-or-later','licenseUrl':base+'manual.html#GNU-Free-Documentation-License','sourceUrl':'https://www.gnu.org/software/tar/manual/','provenanceNotes':[{'en':'Local conversion trial only; rights review, adoption and full Japanese translation remain pending. Shell examples are static original text.','ja':'ローカル変換試作です。許諾確認・採用・範囲全体の日本語訳は未完です。コマンド例は原文の静的な文字列です。'}],'attributionLinks':[{'url':base+'manual.html','label':{'en':'Fixed complete original','ja':'固定原文全文'}}]}]}};(A/'src/config/project.config.jsonc').write_text(json.dumps(config,ensure_ascii=False,indent=2)+'\n')
out={'status':'generated-trial-not-reviewed-or-adopted','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(W),'fixedHTMLSHA256':h(N/'source/derived/manual.html'),'rows':rows,'all44OriginalPreRetained':rows[1]['pre']==44,'rightsGate':'unknown','limits':'English complete chapters1–2 and footnote1 demonstrate conversion; Japanese one sample only. No official app/operation, no deployment or examples execution.'};(N/'trial/TRIAL_GENERATION.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out))
