import json,pathlib,hashlib,re,datetime,shutil,collections
root=pathlib.Path.cwd();base=root/'docs/notes/project-expansion';ev=base/'runs/evidence/2026-10-05-784';src=base/'runs/evidence/2026-10-05-781/lz4-fixed';at=datetime.datetime.now(datetime.timezone.utc).isoformat()
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def ref(p):return {'path':str(p.relative_to(root)),'sha256':sha(p)}
def write(name,data):(ev/name).write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
b=json.loads((base/'runs/evidence/2026-10-05-783/BOUNDARY.json').read_text());b['at']=at
for f in b['files']:
 assert sha(src/f['path'])==f['sha256']
 if f['path'] in ['lib/lz4.h','lib/lz4frame.h']:
  f.update(classification='adopt',reason='生成HTMLの省略を避ける原著ヘッダー全文付録。全コメント・宣言・マクロ・private/obsolete/experimental警告を保全し、コード由来の新規説明は作らない。生成manualと重複する箇所も記録。')
b['counts']=dict(collections.Counter(f['classification'] for f in b['files']));b['scope']='LZ4 1.10.0の利用/導入/統合/CLI/Block・Frame仕様/全公式使用例・読者向けbuild/packaging説明、生成manual2と原著公開ヘッダー5全量。採用27、参照87、除外94。'
b['pending']=['通常/最大/難ページの忠実な変換・描画・リンク試験','工数と日本語不足の評価・採点・別選定','翻訳・全文内容レビュー・正式build/display検証未開始']
write('BOUNDARY.json',b)
read=[]
for f in b['files']:
 if f['classification']=='adopt':
  text=(src/f['path']).read_text();read.append({'source':ref(src/f['path']),'lineRanges':[[1,len(text.splitlines())]],'purpose':'原著全文の候補自立性/品質/通知調査。定本・訳文の内容レビューではない。'})
missing=[]
for h,m in [('lib/lz4.h','doc/lz4_manual.html'),('lib/lz4frame.h','doc/lz4frame_manual.html')]:
 t=(src/h).read_text();noComments=re.sub(r'/\*.*?\*/','',t,flags=re.S)
 # Ignore preprocessing lines and deprecated attributes before counting C declaration names.
 noComments=re.sub(r'LZ4_DEPRECATED\(\"(?:[^\"\\]|\\.)*\"(?:\s*\"(?:[^\"\\]|\\.)*\")*\)', '', noComments)
 noComments=re.sub(r'^\s*#.*(?:\\\n.*)*$', '', noComments, flags=re.M)
 funcs=sorted(set(re.findall(r'\b(LZ4(?:F)?_[A-Za-z0-9_]+)\s*\([^()]*\)\s*;',noComments)))
 html=(src/m).read_text();absent=[x for x in funcs if not re.search(r'\b'+re.escape(x)+r'\b',html)]
 missing.append({'header':ref(src/h),'manual':ref(src/m),'declaredFunctionIdentifiers':funcs,'absentIdentifiers':absent,'comparisonLimit':'識別子存在比較のみ。コメント対応/宣言全文の機械一致を主張しない。ヘッダー全量を別収録して欠落を避ける。'})
findings=[
 {'source':'lib/lz4frame.h','lines':[273,751],'finding':'LZ4F_getVersion/LZ4F_getErrorCodeとadvanced生成3宣言は生成HTMLにない。全ヘッダー付録を追加。'},
 {'source':'lib/lz4frame.h','lines':[36,44],'finding':'原文の準拠版表記1.6.1と収録Frame仕様1.6.4を区別。原文を最新と偽らない。'},
 {'source':'doc/lz4frame_manual.html','lines':[476,505],'finding':'<stdlib.h>を未escapeで記述。HTML parserのみだと文字が消える。literal保全試験が必要。'},
 {'source':'lib/lz4frame.h','lines':[339,363],'finding':'説明中のLZ4_flushは宣言LZ4F_flushと相違。原文を黙って修正せず出典欄に指摘。'},
 {'source':'lib/lz4frame.h','lines':[577,598],'finding':'LZ4_createCDict/LZ4_CDictと実宣言LZ4F_createCDict/LZ4F_CDictの相違。原文保持・編集注記。'},
 {'source':'lib/lz4.h','lines':[258,285],'finding':'destSize説明dstCapacityと宣言targetDstSizeの相違。原文保持・編集注記。'},
 {'source':'build/meson/README.md','lines':[1,34],'finding':'contrib/mesonという旧パスが残る。固定treeはbuild/mesonに存在。NEWS1.10.0の移動記録と照合。'},
 {'source':'build/README.md','lines':[1,44],'finding':'VS2022説明とVS2010出力パスが同居。注記候補であり動作失敗を断定しない。'},
 {'source':'lib/dll/example/README.md','lines':[1,69],'finding':'旧レベル範囲と現在HCヘッダーの定数を区別し原文保持。'},
 {'source':'programs/README.md','lines':[1,114],'finding':'helpフェンス末尾に3backticksがhelp行内にある。可視codeの保存と囲みの変更を記録する試験が必要。'},
 {'source':'examples/dictionaryRandomAccess.md','lines':[1,67],'finding':'末尾offset数Nと図N+1の相違。実装から新説明を補筆せず原文図表を保持。'},
 {'source':'README.md','lines':[1,131],'finding':'benchmark版1.9.0等の歴史表記を維持し1.10.0測定と扱わない。'},
 {'source':'examples/streaming_api_basics.md','lines':[1,87],'finding':'旧API名を現在APIへ自動置換しない。deprecated警告を原ヘッダーから読める構成。'}]
write('ORIGINAL_READ_AND_API_GAPS.json',{'at':at,'model':{'configured':'gpt-6.1-sol','runtime':None,'localLLMUsed':False},'readFiles':read,'readCoverage':'27原著入力全文。前サイクルから同一hashの読みを継承し、truncated出力は再読した。','apiInventory':missing,'findings':findings,'selfContained':'pass','rationale':'導入/設定、blockとframeの違いとmetadata、CLI、メモリ/辞書寿命とstream処理、エラー、HC/file、全例、2仕様を範囲内に含める。主要説明をIssue/動画/コード由来の補筆で補う必要なし。原著の旧情報/誤植は明示的に残し注記する。','translationContentReview':'not started','canonicalContentReview':'not started'})
(ev/'licenses').mkdir(exist_ok=True)
licenseSources=['LICENSE','lib/LICENSE','programs/COPYING','examples/COPYING','contrib/djgpp/LICENSE']
notices=[]
for f in licenseSources:
 dest=ev/'licenses'/f.replace('/','__');shutil.copyfile(src/f,dest);notices.append({'source':ref(src/f),'preserved':ref(dest)})
rights=[]
for f in b['files']:
 if f['classification']!='adopt':continue
 p=f['path']
 if p=='doc/lz4_Frame_format.md':
  license='Frame固有文書許諾';basis='原文Notices 6–15行。翻訳/複製/配布を明示許可。';annotation=None;notice=[ref(src/p)];conditions='原著CopyrightとNotices原文全文を本文に保持し、出典欄に非公式訳・変換/翻訳の日付と実質変更/削除（ある場合）を明記。'
 elif p.startswith('lib/'):
  license='BSD-2-Clause';basis='root LICENSEとlib/READMEのall material指定、ヘッダー固有BSD通知を優先。';notice=[ref(src/'lib/LICENSE'),ref(src/p)];annotation=None if p.endswith('.h') else '文書専用ライセンスの表記が確認できないため、ソフトウェア本体のBSD-2-Clauseを文書にも適用する運用判断で掲載しています。';conditions='ヘッダー固有の著作権年/免責/条件を削除しない。元ヘッダーとlib/LICENSEの全文へ同サイトからリンク。READMEには注釈と非公式訳/変更日表示。'
 elif p.startswith('contrib/djgpp/'):
  license='BSD-2-Clause';basis='同固定ディレクトリLICENSEのCopyright(c)2014lpsantilと2条件を適用（README専用指定は未発見）。';notice=[ref(src/'contrib/djgpp/LICENSE')];annotation='文書専用ライセンスの表記が確認できないため、ソフトウェア本体のBSD-2-Clauseを文書にも適用する運用判断で掲載しています。';conditions='lpsantilの著作権/2条件/免責全文を保全してリンクし非公式訳/変更日を表示。'
 else:
  license='GPL-2.0-or-later（本掲載はversion2条件を履行）';basis='root LICENSEのall other files。programs/examples COPYINGの明示v2or-laterとv2本文。examples READMEのGPL-v2短縮表記ともversion2履行が整合。文書専用指定は未発見。';notice=[ref(src/'LICENSE'),ref(src/'programs/COPYING'),ref(src/'examples/COPYING')];annotation='文書専用ライセンスの表記が確認できないため、ソフトウェア本体のGPL-2.0-or-laterを文書にも適用する運用判断で掲載しています。';conditions='GPL文書部分の原文/翻訳/変換結果と変更日を同条件で提供。GPLv2全文、権利/無保証通知、改変表示を同サイトからリンク。完全な対応ソース（固定208原入力・全定本/訳文・map/importer/build手順・ライセンス通知）を静的downloadで同じアクセス箇所から提供し欠落なら公開不可。追加制限/問い合わせ依頼なし。'
 rights.append({'source':ref(src/p),'license':license,'basis':basis,'fallbackAnnotation':annotation,'requiredNotices':notice,'fulfillment':conditions,'destination':'各ページdocumentContext出典フッター、ライセンス全文download、対応ソースdownload。原著本文内通知は本文にも保持。'})
write('RIGHTS_AND_FULFILLMENT.json',{'at':at,'version':b['version'],'scopeEvidence':ref(ev/'BOUNDARY.json'),'status':'pass-operational-decision','dedicatedLicenseSearch':'採用27入力全文・各parentLICENSE/COPYING、rootとlib README、examples README確認。Frameのみ固有文書許諾。見つからない専用指定はユーザー承認済みfallbackとして記録。許諾を新たに取得したとは主張しない。','licenseTexts':notices,'files':rights,'referenceSourceRule':'全208原入力を変更せずarchiveとして保全。例ソース等のBSD/GPL個別通知も削除しない。lib/dll/example/Makefileはlibデフォルトの例外GPL2or-laterで、lib全体を無条件BSDと再表示しない。参考実装を新規説明へ書き換えない。','generatedManualRule':'doc/manual2はroot fallbackGPLとして掲載。元ヘッダー固有BSD通知も原著ヘッダー付録とdownloadで全文保持。gen_manual.cpp/MakefileのBSD通知を保持。生成物すべてBSDという推定をしない。','releaseGate':'通知・変更表示・GPL対応sourcekitの到達性/内容検査に合格してからverified/公開判定。今回は履行設計のpassであり配置の完了ではない。外部公開は別指示が必要。','remoteLegalFetch':'GNU old GPL2ページのweb取得は失敗。固定上流COPYINGの全文を根拠としremote取得成功とは記録しない。','next':'この固定範囲で隔離試験。各ページsource metadataへの実装とlicense/sourcekitゲートは採用後。'})
write('QUALIFICATION_PROGRESS.json',{'at':at,'conditions':{'rights':'pass','boundary':'pass','fixedInput':'pass','selfContained':'pass','conversion':'unknown','workload':'unknown'},'adopted':0,'newOperations':0,'fullOriginalRead':27,'fullTranslationReview':0,'extensionReason':'初期調査枠を延長。生成manualの欠落と複数licenseを固定原著全27へ照合する必要があり、未知をpassにしないため。次の限定試験・実測で採否を決める。','nextAction':'原HTML2を公式generatorで再生成して一致/差分を記録。HTML未escape文字・コード図・table・anchor、最大headerを隔離変換/描画。実測語数（原文本文とコード、重複は区別）/API/link/工数、日本語公式案内を調査し採点。','scopeOver30kCaution':'概算全英字tokens（Cコード/重複込み）30101。通常本文語数の算定未完。3万語超なら通常枠即着手せず別枠理由を記録。','notCompleted':['定本化','翻訳','全文内容レビュー','機械build/display','採点','別選定']})
print(json.dumps({'counts':b['counts'],'readFiles':len(read),'apiGaps':missing,'rightsFiles':len(rights)},ensure_ascii=False,indent=2))
