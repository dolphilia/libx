import pathlib,json,datetime,hashlib
root=pathlib.Path.cwd();base=root/'docs/notes/project-expansion';ev=base/'runs/evidence/2026-10-05-786';notes=root/'docs/notes/document-import/lz4/v1-10-0';assert not notes.exists();assert not (root/'apps/lz4').exists();notes.mkdir(parents=True);at=datetime.datetime.now(datetime.timezone.utc).isoformat()
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def ref(p):return {'path':str(p.relative_to(root)),'sha256':sha(p)}
b=json.load(open(base/'runs/evidence/2026-10-05-784/BOUNDARY.json'));adopt=[f for f in b['files'] if f['classification']=='adopt'];cat={
'INSTALL':('01-overview','02-installing'),'NEWS':('01-overview','03-history'),'README.md':('01-overview','01-about'),'SECURITY.md':('01-overview','04-security'),
'build/README.md':('02-building','01-building'),'build/meson/README.md':('02-building','02-meson'),'build/visual/README.md':('02-building','03-visual'),'contrib/djgpp/README.MD':('02-building','04-djgpp'),'contrib/snap/README.md':('02-building','05-snap'),
'doc/lz4_Block_format.md':('03-format','01-block-format'),'doc/lz4_Frame_format.md':('03-format','02-frame-format'),'doc/lz4_manual.html':('04-api','01-block-api'),'doc/lz4frame_manual.html':('04-api','02-frame-api'),
'examples/README.md':('05-examples','01-examples'),'examples/blockStreaming_doubleBuffer.md':('05-examples','03-double-buffer'),'examples/blockStreaming_lineByLine.md':('05-examples','04-line-by-line'),'examples/dictionaryRandomAccess.md':('05-examples','05-dictionary-random-access'),'examples/streaming_api_basics.md':('05-examples','02-streaming-basics'),'lib/dll/example/README.md':('05-examples','06-dll-example'),
'lib/README.md':('06-library','01-library'),'lib/lz4.h':('06-library','02-block-header'),'lib/lz4frame.h':('06-library','03-frame-header'),'lib/lz4hc.h':('06-library','04-hc-header'),'lib/lz4file.h':('06-library','05-file-header'),'lib/lz4frame_static.h':('06-library','06-static-wrapper'),
'programs/README.md':('07-cli','01-cli'),'programs/lz4.1.md':('07-cli','02-lz4-command')}
assert set(cat)==set(f['path'] for f in adopt)
rows=[]
for f in adopt:
 rel='/'.join(cat[f['path']])+'.md';rows.append({'sourcePath':f['path'],'sourceSha256':f['sha256'],'canonicalPath':'apps/lz4/src/content/docs/v1-10-0/en/'+rel,'translationPath':'apps/lz4/src/content/docs/v1-10-0/ja/'+rel,'route':'/docs/lz4/v1-10-0/en/'+rel[:-3]+'/','state':'pending-canonical','translation':'pending','contentReview':'pending','sourceLanguage':'en'})
mp={'schemaVersion':1,'at':at,'app':'lz4','version':'v1-10-0','upstreamVersion':'1.10.0','commit':b['commit'],'scope':b['scope'],'boundary':ref(base/'runs/evidence/2026-10-05-784/BOUNDARY.json'),'pages':rows,'referenceFiles':[f for f in b['files'] if f['classification']=='reference'],'excludedFiles':[f for f in b['files'] if f['classification']=='exclude'],'readingGranularity':'原27入力を1page基本。rawheaderは原comment proseと全codeを区別し原行範囲を保持。機械図/code保存と全文reviewを別記録。変更で再分割する場合は正式scope/map/hashを再登録。'};(notes/'CONTENT_MAP.json').write_text(json.dumps(mp,ensure_ascii=False,indent=2)+'\n')
manifest=f'''# LZ4 1.10.0 固定出典と取り込み判断

作成日: {at}。正式作業は準備段階。日本語翻訳・全文内容レビュー・正式検証は未完了。

- 公式プロジェクト: https://github.com/lz4/lz4 / https://lz4.org/
- 固定タグ: v1.10.0、commit `{b['commit']}`。
- 固定archive: `docs/notes/project-expansion/runs/evidence/2026-10-05-780/LZ4_FIXED.tar.gz`、SHA-256 `{b['archiveSha256']}`。
- release/tag取得証拠: expansion evidence780のLZ4_RELEASE.json / LZ4_TAG.json。公開日時はその固定JSONを正本としここで推定しない。
- 全208入力: evidence784 BOUNDARY.json、27採用/87参照/94除外。`CONTENT_MAP.json`で7カテゴリ・27原文/日本語pageの対応を固定。
- 生成manual2は固定公式gen_manual.cpp/header2と版1.10.0からbyte一致を再現（evidence785 GENERATOR_REPRODUCTION.json）。
- 原header9識別子の生成省略を避けるため全header5を保存し、コードから新しい説明を書かない。

## 権利と履行

evidence784 RIGHTS_AND_FULFILLMENT.jsonの27ファイル別判断と固定LICENSE/COPYING全文を継承する。libのBSD、lib/dll/example/MakefileのGPL例外、djgppのlpsantil BSD、Frame仕様の固有文書許諾、その他のGPL-2.0-or-laterを区別する。文書専用指定が未発見の範囲は、承認済みのソフトウェアライセンス文書適用を注釈付きの運用判断として明示する。権利者の新許諾を取得したと記録しない。

各ページ出典欄に原版/著者/原文/ライセンス全文/注釈/非公式翻訳と変更日を表示する。原著本文の著作権・許諾・免責通知は本文でも保持する。GPL部分の完全な対応source kit（全208原入力、定本・訳文、map/importer/生成手順と通知）を同じサイトから静的downloadできるようにし、内容/到達性を正式検証する。source kitや通知配置は現在未実施で、候補qualificationの権利判断を履行完了へ繰り上げない。

## 採用と保守

evidence786 SCORECARD.jsonで71点、INDEPENDENT_SELECTION_REVIEW.jsonで別passを実施。同じCodexによる別確認であり人間/別agentレビューではない。固定Frame旧訳・AMD部分日本語資料を認め、原著との版/範囲差と調査先を記録。未発見を不存在と断定しない。

識別子を含む語数28897、空白token31077。3万語超の可能性を保守的に扱いLARGE_SCOPE_DECISION.jsonへ実測・限定再利用converter・初回/毎版工数を残した別枠判断。量のために必要な章を切り捨てない。正式新規active上限1/全体2/未公開verified上限2は維持する。

作業場は `/private/tmp/libx-lz4-formal-786`。rootのapps/lz4はまだ存在せず、配信対象から物理的に分離している。正規template生成→固定取得確認→safe canonical出力→ページ逐次翻訳→別AI全文review→機械検査/正式表示へ進む。外部公開・定期設定は別途指示まで行わない。
''';(notes/'SOURCE_MANIFEST.md').write_text(manifest)
progress={'schemaVersion':1,'at':at,'app':'lz4','version':'v1-10-0','model':{'configured':'gpt-6.1-sol','runtime':None,'localLLMUsed':False},'workspace':'/private/tmp/libx-lz4-formal-786','publication':'not-requested','excludedFromDeployment':True,'pages':[{'source':x['sourcePath'],'canonical':'pending','translation':'pending','contentReview':'pending','machineChecks':'pending'} for x in rows]};(notes/'PROGRESS.json').write_text(json.dumps(progress,ensure_ascii=False,indent=2)+'\n')
plan={'at':at,'candidateId':'lz4','version':'v1-10-0','scope':{'description':b['scope'],'pages':[x['canonicalPath'] for x in rows]},'workspace':progress['workspace'],'sourceManifest':ref(notes/'SOURCE_MANIFEST.md'),'contentMap':ref(notes/'CONTENT_MAP.json'),'progress':ref(notes/'PROGRESS.json'),'creationRule':'正規template+currentgenerator dry-run済み。CAS selected/planned記録後に隔離生成する。template sampleは正式内容ではなく除去・記録し本番対象へ混入しない。','deploymentProof':'root apps/lz4 absent / only isolated workspace. 外部push/builddeploy/公開なし。'};(ev/'OPERATION_PLAN.json').write_text(json.dumps(plan,ensure_ascii=False,indent=2)+'\n');print('27-page formal map/manifest/progress pending created; root app absent')
