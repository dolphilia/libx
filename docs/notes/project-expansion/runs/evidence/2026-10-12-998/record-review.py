from pathlib import Path
import json,hashlib,datetime
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/gnu-libtool/v2-6-2';E=R/'docs/notes/project-expansion/runs/evidence/2026-10-12-998';now=datetime.datetime.now(datetime.timezone.utc).isoformat();h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def ref(p):return {'path':str(p.relative_to(R)),'sha256':h(p)}
def covered(p):return dict(ref(p),coverage=[[1,len(p.read_text().removesuffix('\n').split('\n'))]])
findings=[
'共有ライブラリのOSごとの差、従来の手動対応とLibtoolの可搬な抽象化を全3段落で照合。',
'実行可能ファイル/ライブラリ両方の作成、同じコマンドの各モード、a23/burgerの例、章内7リンクと見出しを照合。目次ラベルとリンク先を日本語へ対応付けた。',
'PIC/non-PIC、AIX条件、.libs配置、.loのpic_object/non_pic_object、-no-suppressの目的、既存7コード例と隣接注記を全11段落で照合。旧1.5の訳を新仕様の根拠には使わない。',
'.la、-rpathとインストール場所、libm依存の記録/再リンク、共有非対応時の静的archive、5コード例、脚注1の便宜用archiveとの区別を照合。',
'インストール済み/未インストールのリンク方法、-L/-lを避け相対.laを渡す脚注2、main.oと-lmの直接依存に関する脚注3、.libs/ラッパー、実行時オーバーヘッド/サイズ、7コード例を全量照合。入れ子の3.3.1本文は独立ページに移し参照を保持。',
'Windows/Cygwin/MinGWのEXEEXTとlt-接頭辞、環境変数、--lt-debug/--lt-dump-script、引数除去/未知オプション、stdoutとstderrの原文差を全7段落/2定義で照合。原文の食い違いは補正せず共通フッターに注記。',
'ラッパーをGDBへ直接渡したエラー、実バイナリの共有ライブラリ探索エラー、--mode=execute経由のデバッグ、break/run/killとGDB通知を3コード例と隣接日本語注記で照合。',
'--mode=install、libtoolライブラリの静的/共有版の扱い、ranlib/BSD install -sの注意、rpath/finishと環境変数のヒント、静的ライブラリをstripしない脚注4を全9段落/5例で照合。',
'実行可能ファイルのインストール、通常のinstallとの差とラッパー処理、2コマンド例を全3段落で照合。',
'通常静的/PIC便宜用archive、noinst_LTLIBRARIES、-all-static、プログラム/ライブラリに使う目安、同一archive由来の重複symbolリスクを全9段落で照合。原文の曖昧な一文は推測でmore than onceを挿入せず、節末との読み合わせをフッターで案内。'
]
g=json.loads((N/'CANONICAL_GENERATION.json').read_text());pages=[]
for row,finding in zip(g['rows'][:10],findings):
 pages.append({'id':row['page'],'status':'passed','method':'ai-content-review','model':'Codex; configured gpt-6.1-sol, runtime identity not independently exposed','reviewedAt':now,'separateReviewPass':True,'findings':finding+' 固定原文断片/英語定本/日本語本文・見出し・参照・コード注記を執筆後の別パスで全量照合。変更した目次/原文注記は修正後に再確認。','source':covered(N/row['source']),'canonical':covered(N/row['canonical']),'translation':covered(N/'preferred/ja'/row['page']),'commonContext':ref(N/'DOCUMENT_CONTEXT.json')})
manifest={'schemaVersion':1,'scope':[r['id']for r in pages],'completedPages':10,'unreviewedPages':0,'reviewedProseUnits':91,'literalCodeExamples':31,'wholeFootnotes':[1,2,3,4],'pages':pages,'limits':'English-only GFDL reference is preserved source, not counted as a translated guide. Original technical correctness and running historical examples are outside review scope.'}
(N/'REVIEW_MANIFEST.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
(E/'REVIEW_SUMMARY.json').write_text(json.dumps({'status':'passed-whole-meaning-review','at':now,'review':ref(N/'REVIEW_MANIFEST.json'),'guides':10,'units':91,'literalCodeBlocks':31,'JapaneseCodeNotes':31,'sourceIssuesAnnotated':['3.3.1stderr versus stdout preserved','3.7ambiguous convenience-library sentence retained, linked to original'], 'corrections':['All8mini-TOC selected-guide refs and labels remapped to Japanese','Complete referenced footnotes1–4 retained','GFDL rendered li boundary whitespace normalized in structural check; all pre literal exact'],'failedChecksBeforeFix':[{'check':'draft structure','cause':'Japanese mini-TOC retained English guide links','resolution':'translator maps every selected guide anchor after paragraph replacement'},{'check':'rendered GFDL list','cause':'HTML processing collapses blank boundary line around block paragraphs','resolution':'non-pre whitespace normalization; all text and literal code preserved'}],'publication':'not-started','remaining':['editable GFDL source offer','independent replay','representative native display','integrated validation','verified registration and Preview/Production/postchecks']},ensure_ascii=False,indent=2)+'\n')
print('Whole separate-pass meaning review10guides/91units recorded')
