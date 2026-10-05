from pathlib import Path
import json, hashlib, shutil, datetime, html, re
R=Path('/Users/dolphilia/github/libx'); W=Path('/private/tmp/libx-wren-formal-864'); E=Path(__file__).parent
N=Path('docs/notes/document-import/wren/v0-4-0'); B=R/N; A=W/'apps/wren'; C='4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def write(p,x):
 p.parent.mkdir(parents=True,exist_ok=True); p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
def ref(p):return {'path':str(p.relative_to(R)),'sha256':sha(p)}
assert (A/"src/content/docs/v1").exists(); B.mkdir(parents=True,exist_ok=True)
H=R/'docs/notes/project-expansion/runs/evidence'; F=H/'2026-10-03-279'; saved=H/'2026-10-03-282'
fetch=json.loads((F/'FIXED_INPUTS.json').read_text()); assert fetch['commit']==C
fixed={x['path']:x for x in fetch['files']}
boundary=json.loads((H/'2026-10-03-280/BOUNDARY_LICENSE.json').read_text())
adopt=[x['path'] for x in boundary['files'] if x['role']=='adopt']; assert len(adopt)==41
selected=adopt+['LICENSE','doc/site/modules/core/index.markdown','src/include/wren.h','util/generate_docs.py']
assert len(set(selected))==45
files=[]
for path in selected:
 x=fixed[path]; p=F/'fixed-source'/path; raw=p.read_bytes()
 assert sha(p)==x['sha256'] and len(raw)==x['bytes']
 assert hashlib.sha1(b'blob '+str(len(raw)).encode()+b'\0'+raw).hexdigest()==x['gitBlob']
 q=B/'source/original'/path; q.parent.mkdir(parents=True,exist_ok=True); shutil.copy2(p,q); files.append(x)
write(B/'source/FETCH.json',{'commit':C,'release':'0.4.0','originalFetchAt':fetch['checkedAt'],'copiedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'files':files,'savedInputCount':100,'selectedCopiedFiles':45,'excluded':'Third-party fonts/siteJS/templates/playground/CLI/blog/development drafts not redistributed. Original website generator is retained as reference only, not executed.'})
work=json.loads((H/'2026-10-06-863/WORKLOAD_DECISION.json').read_text())
guides=[(R/Path(x)).relative_to(F/'fixed-source').as_posix() for batch in work['batches'] for x in batch['sources']]
assert len(guides)==24 and set(guides)<=set(adopt)
titlesJA=['概要','はじめに','構文','値','リスト','マップ','メソッド呼び出し','制御フロー','変数','クラス','関数','並行処理','エラー処理','モジュール化','組み込みモジュール','Wrenの組み込み','スロットとハンドル','WrenからCを呼び出す','CからWrenを呼び出す','Cのデータを格納する','VMの設定','性能','よくある質問','開発への参加']
trial=json.loads((H/'2026-10-03-281/TRIAL_RENDER.json').read_text()); titles={x['path']:x['title'] or 'Wren overview' for x in trial['files']}
migrated={x['path']:x['sha256'] for x in json.loads((saved/'LINK_MIGRATION.json').read_text())['files']}
rows=[]
for category, paths in [('01-guide',guides),('02-reference',sorted(set(adopt)-set(guides)))]:
 for i,path in enumerate(paths):
  key=path.removeprefix('doc/site/').removesuffix('.markdown')+'.html'
  slug=path.removeprefix('doc/site/').removesuffix('.markdown').replace('/','-')
  if slug=='index':slug='overview'
  slug=slug.removesuffix('-index')
  raw=saved/'rendered'/key; assert sha(raw)==migrated[key]
  q=B/'regeneration/inputs'/key; q.parent.mkdir(parents=True,exist_ok=True); shutil.copy2(raw,q)
  rows.append({'id':category+'/'+str(i+1).zfill(2)+'-'+slug+'.md','key':key,'input':'regeneration/inputs/'+key,'inputSha256':sha(q),'source':'source/original/'+path,'sourceSha256':fixed[path]['sha256'],'titleEN':titles[path] if category=='01-guide' else titles[path]+' (English original)','titleJA':titlesJA[i] if category=='01-guide' else None,'order':i+1,'translation':'pending' if category=='01-guide' else 'not-in-scope','role':'guide' if category=='01-guide' else 'English original reference'})
licenseRow={'id':'02-reference/18-license.md','key':'LICENSE','input':'source/original/LICENSE','inputSha256':fixed['LICENSE']['sha256'],'source':'source/original/LICENSE','sourceSha256':fixed['LICENSE']['sha256'],'titleEN':'Original MIT licence','titleJA':None,'order':18,'translation':'not-in-scope','role':'original licence','wholeCode':True}
rows.append(licenseRow); assert len(rows)==42
notice='<p>Wren 0.4.0; fixed commit '+C+'. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href="/docs/wren/notices/LICENSE.txt">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>'
limitations='<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href="/docs/wren/notices/wren.h.txt">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>'
write(B/'regeneration/CONTEXT.json',[{'kind':'source','html':notice},{'kind':'editorial','html':limitations}])
write(B/'regeneration/ROUTES.json',{'version':'v0-4-0','commit':C,'guides':rows[:24],'references':rows[24:],'aliases':{'modules/core/index.html':'modules/index.html'},'method':'Same-source retained 282 HTML conversion inputs with exact SHA, 285 unresolved embedding-link repair, Libx links/headings/rawpre encoding. No site runtime recreation.'})
shutil.copy2(E/'regenerate.py',B/'regeneration/regenerate.py')
import subprocess
subprocess.run(['python3',str(B/'regeneration/regenerate.py')],check=True)
assert len(list((B/'canonical/en').rglob('*.md')))==42
shutil.rmtree(A/'src/content/docs/v1')
shutil.copytree(B/'canonical/en',A/'src/content/docs/v0-4-0/en')
(A/'src/data').mkdir(parents=True,exist_ok=True)
shutil.copy2(B/'regeneration/document-headings.json',A/'src/data/document-headings.json')
public=A/'public/notices'; public.mkdir(parents=True,exist_ok=True)
shutil.copy2(B/'source/original/LICENSE',public/'LICENSE.txt'); shutil.copy2(B/'source/original/src/include/wren.h',public/'wren.h.txt')
published=json.loads((F/'releases_latest.json').read_text())['published_at']
config={'paths':{'baseUrlPrefix':'/docs','projectSlug':'wren','siteUrl':'https://libx.dev'},'language':{'default':'en','supported':['en','ja'],'displayNames':{'en':'English','ja':'日本語'}},'translations':{lang:{'displayName':'Wren Documentation' if lang=='en' else 'Wren ドキュメント','displayDescription':'Wren 0.4.0 fixed language/VM guides and original English API references' if lang=='en' else 'Wren 0.4.0の言語・VM利用ガイド全文の非公式日本語訳。APIは英語原文。','categories':{'guide':'Language and VM guides' if lang=='en' else '言語・VM利用ガイド','reference':'English original references' if lang=='en' else '英語原文参照'}} for lang in ['en','ja']},'versioning':{'versions':[{'id':'v0-4-0','name':'0.4.0','date':published,'isLatest':True,'description':'Fixed release publication date'}]},'licensing':{'defaultSource':'wren-fixed','showAttribution':True,'sourceLanguage':'en','sources':[{'id':'wren-fixed','name':'Wren 0.4.0 documentation','author':'Robert Nystrom and Wren contributors','license':'MIT','licenseUrl':'/docs/wren/notices/LICENSE.txt','sourceUrl':'https://github.com/wren-lang/wren/tree/'+C+'/doc/site'}]}}
write(A/'src/config/project.config.jsonc',config)
css=(H/'2026-10-03-287/global.css').read_text().split('/* Fixed Wren')[1]
with (A/'src/styles/global.css').open('a') as f:f.write('\n/* Fixed Wren'+css+'\n.wren-document { min-width: 0; overflow-wrap: anywhere; }\n.wren-document pre { white-space: pre; overflow-x: auto; }\n')
for name,p in [('TEMPLATE_DRYRUN.log','/private/tmp/libx-wren-template-dryrun-864.log'),('TEMPLATE_CREATION.log','/private/tmp/libx-wren-template-864.log'),('BASE_INSTALL.log','/private/tmp/libx-wren-base-install-864.log')]:shutil.copy2(p,E/name)
shutil.copytree(B,W/N)
write(E/'PREPARATION_INPUTS.json',{'status':'prepared-fixed-input-and-English-drafts','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(W),'baseline':'45d598a887d89a6d41405b30fbdbaa1514d13161','baselineStatus':'Published RapidJSON baseline. SDS375 Preview external runner queue; Wren release requires latest actual verified Production baseline incorporation.','fixedCommit':C,'saved100InputsReused':True,'selectedOriginalFiles':45,'copiedOriginalSHA256GitBlobBytesExact':True,'EnglishBodyPages':41,'originalLicencePages':1,'JapaneseGuideScope':24,'EnglishOnlyAPI':17,'JapaneseDrafts':0,'meaningReviews':0,'preferredEnglishDrafts':42,'rootAppAbsent':not(R/'apps/wren').exists(),'sourceMap':ref(B/'regeneration/ROUTES.json'),'originalSourceLimits':'Four old technical-completeness findings plus Meta2TODO preserved, original correctness audit not expanded.','pending':['portable canonical replay/body/code/link checks','24Japanese guides and separate full meaning review','formal source offer/build/readability/integration/publication']})
print('864 prepared45 originals / 42 English drafts / Japanese0 / review0; isolated canonical template')
