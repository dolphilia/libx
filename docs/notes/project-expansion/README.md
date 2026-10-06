# 公式文書プロジェクトの継続運用

計画は `docs/plans/CONTINUOUS_DOCUMENT_PROJECT_EXPANSION_PLAN.md`、上限・間隔・モデル方針は `POLICY.json`、候補は `CANDIDATES.json`、登録文書と作業は `OPERATIONS.json` に保存する。結果は `REPORT.md`、サイクルの判断と証拠は `runs/` に保存する。既存の記録は実施した確認範囲を保持し、未実施のレビューへ読み替えない。

## 実行方針

[計画と実行用プロンプト](../../plans/CONTINUOUS_DOCUMENT_PROJECT_EXPANSION_PLAN.md)を共通手順とする。方針はPOLICYの現行設定、対象と再開位置は最新OPERATIONSから判断する。以下の実行履歴は現行手順や現在の進捗の代わりに使わない。原文コピーと翻訳を読める範囲で提供し、原文の不備や元サイト機能の再現不足は注記・原典参照で補う。採用点はPOLICYの現行値を使い、旧基準での保留は再評価する。

## 再開操作

```bash
# 起動時に1回
node scripts/project-expansion/manage.mjs check
# バッチ確定・台帳更新後に1回
node scripts/project-expansion/manage.mjs report
```

`report --check` と `node --test tests/runtime/project-expansion-ledger.test.js` は報告器・台帳処理の変更時等に使い、毎ページでは実行しない。`update` と `report` 自体が台帳検査を行うため、同じ入力の全検査を前後に追加しない。

最初に `check` で現在の入力・本文・訳文・レビュー・検証証拠を照合する。不一致のまま完了状態を維持しない。対象作業を `stale` とし、最後の有効段階と失効した検査を記録して再開する。他プロセスの本文を以前のハッシュへ戻さない。

台帳の更新は、現在の台帳の全内容、期待リビジョン、期待する入力の `path` と `sha256` を含むパッチを用意して行う。

```bash
node scripts/project-expansion/manage.mjs update /private/tmp/libx-expansion-patch.json
```

パッチ形式は `{ "name": "OPERATIONS", "expectedRevision": 0, "expectedInputs": [{ "path": "入力の相対パス", "sha256": "64桁のハッシュ" }], "document": { "更新後の台帳全体": "実際の内容" } }`。この例は形式説明であり実行用ではない。更新対象は `CANDIDATES` または `OPERATIONS`。検査・確定の両方で入力とリビジョンを確認し、ロックと原子的置換で競合時の上書きを防ぐ。

`*.json.lock` が残る場合は担当とプロセス終了を確認する。経過時間だけで解除しない。確認手段が使えない場合はその台帳の更新を保留し、独立した調査を進める。作業場所は対象案件のOPERATIONSのworkspaceを確認する。共有checkoutのAwesome・ユーザー差分をコピーして一括ビルド・公開しない。

## 状態と証拠

- 必須条件の `unknown` は得点で補えない。固定した取得物と根拠がない `pass` を拒否する。
- `eligible` は採用待ち。必須6条件、採点、別工程の選定照合が必要。`selected` と新規生成は別の判断。
- 作業中の `blocked`・`stale` も作業枠に数える。長期保留 `deferred` には再開条件と配信除外の確認が必要。
- 内容レビューは `ai-content-review`。原文・定本・訳文のハッシュ、全文を覆う行範囲、モデル、日時、指摘をページごとに保存する。作業中の合格ページも検査する。未確認ページは `pending`、修正後の再確認前は `needs-final-review`。
- `content-reviewed` は確定範囲の全ページを確認した状態。機械検査と表示確認の全項目を通過して初めて `verified` にする。部分レビューを案件完了へ繰り上げない。
- 公開待ち2件で新規取り込みを停止する。必要な既存修正は継続する。検証済み案件の外部Preview・Production・限定pushは追加承認不要。定期実行の設定は別途指示が必要。

サイクルの入出力ハッシュは当時の記録で、後続サイクルの修正によって変わり得る。現行状態は作業台帳で照合する。検査ログなど固定証拠は、実行記録でも存在・ハッシュを検査する。`run.schema.json` はサイクル件数上限・重複・日時・ローカルLLM不使用も確認する。

モデル設定はGPT-6.1 Solを確認した。実行中モデルの識別情報は利用可能なツールで取得できないため、設定を実モデルの証拠に置き換えない。ローカルLLMは使用していない。

## 実行履歴（現行手順ではない）

2026-10-05の追加公開指示により、既存修正・更新と未完了案件を優先しつつ、公開可能な案件は追加承認なしで公開デプロイする。現在の運用設定はmaintenance-first、externalPublication=authorized-verified-awaiting-release。[公開承認指示](runs/evidence/2026-10-05-publication-policy/USER_INSTRUCTION.json)を正本とし、以下の実行履歴にある外部公開別指示の制約は当時の記録として保持する。定期実行の設定は引き続き別途指示が必要。

781・782でLua/GLFWの共有CSS保留3件を検証済みへ復帰した。隔離作業場所は`/private/tmp/libx-css-resume-781`。英日186本文のハッシュ・DOM保全、選択ビルド、代表日英デスクトップ/モバイル表示とアンカー・表キーボード操作を確認した。旧全文内容レビューを保持し、今回の確認はCSS限定の再検証。今回CSSの本番反映ではない。

784–786でLZ4 1.10.0の固定208入力を27採用・87参照・94除外へ確定した。生成manual2で省かれた説明を原ヘッダー5全量で保全し、素材別のBSD/GPL/Frame固有通知、旧版日本語資料、工数を根拠付きで確認した。必須6条件pass、71点、別工程の選定照合後に新規1件を採用。3万語を超える可能性があるため別枠判断を保存した。正式作業場所は`/private/tmp/libx-lz4-formal-786`で、共有rootに`apps/lz4`は置いていない。

787で正式英語27ページを定本化し、固定入力からの3出力再生成一致、全Markdown AST・code/ASCII図・表・見出し、全ヘッダーspan、生成manual本文と元anchor、内部リンクと原文downloadを検査した。`../document-import/lz4/v1-10-0/CANONICAL_LOCK.json`が定本正本。原文は要約・無断修正せず、原誤記・版の差と運用説明はフッターへ置いた。外部リンクの現在のHTTP到達性・画像ロードは未確認。

788–823でINSTALL、SECURITY、README、build/README・meson・visual、contrib/djgpp・snap、Block/Frame仕様、examples/README・streaming基礎・doubleBuffer・lineByLine・dictionaryRandomAccess、DLL例、lib/README、公開ヘッダー5ページ、CLI README・コマンドラインマニュアル、ブロック/フレームAPI生成マニュアル、NEWSの日本語訳と別工程の全文AI内容レビューを終えた。日本語27/27、全文レビュー27/27、未確認0。`../document-import/lz4/v1-10-0/PROGRESS.json`と`REVIEW_MANIFEST.json`に全文範囲・3役割のSHA・指摘/修正を保存した。原法的通知、全宣言/code/ASCII図、API条件とメモリ寿命を保全した。812の機械検査で欠けたinline参照と未対応アンカー記法を修正し、再レビューと9実在IDのDOM検査を行った。ページ機械検査と隔離buildは合格だが、全案件の表示/構造/link/integrity/build gate、GPL対応Libxソースキット、統合は未完。

現在はOPERATIONS913/CANDIDATES173、作業中1件、新規1件、検証済み17件（過去の公開実績を保持）、候補保留5件。LZ4のページpathをlanguage root相対へ正規化した同一作業の新IDは`OPERATION_BINDING.json`に旧IDとの対応を保存した。台帳の移行判定は同一identity・同一scopeのprefix除去・旧作業置換に限定し、ページ追加/複製による上限回避を拒否する17testsを確認した。

802では、以前のLibx英語注記の「原文はN offsetsと説明する」が誤りと確認し、訂正した。原文はN+1 offsetsを既に明示し、実際の差は末尾整数を圧縮節がblock数、図/展開節がoffset数とする点。固定codeはoffset数を書き読みする。原文本文・他26定本・既確認14JAを保全し、802のdelta証明・定本snapshot/lock・再生成3出力一致・DOM/buildで対応付けた。旧証拠は保存した。最新再生成器は`runs/evidence/2026-10-05-802/import-canonical.mjs`。

807のframe header草稿は808で全54区画の翻訳・別工程全文reviewと機械/DOM/buildを終えた。808では807履歴の可変review参照を同一SHAの固定スナップショットへ訂正した証拠も保存した。809–811のHC/file/staticヘッダー、812のCLI READMEを経て、813のCLIマニュアル草稿は814で全文レビュー・機械検査・隔離buildを終えた。全15実在IDと全オプション/数値/例外を照合し、追加inline表記と日本語隣接の強調構文を修正後再レビューした。815ではブロックAPI生成マニュアルの原文683行を全量読み、35説明区画の固定ヘッダー対応を保存した。これは機械的な候補対応で、翻訳・レビュー合格ではない。815のrunサイクル番号に旧813が残った記録ミスを検査で検出し、訂正前runと修正理由を保存してcycle815へ直した。台帳検査エラー0件。816では35原説明と元ヘッダーコメントのprefix/suffix・既存訳firstlineを全件照合し、関数/節ラベルと装飾だけを除いた同文訳を再利用して草稿を組み立てた。全35説明・12見出し・目次10リンク/11named anchor、宣言内コメントとASCII図4行を保持した。815準備の目次11リンクという記述は10リンク/11anchorへ訂正した。草稿構造のAPI識別子・数値・URL・図・35説明と明示ラベル以外の全量一致は合格だが、新ページの別工程全文内容review・取込/build/DOMは未実施。草稿は未取込で24/27レビュー済みを維持する。817では原文683/定本700/日本語411行を別工程全量reviewし、全35説明・戻り値・容量/メモリ寿命・部分展開5注意・リング3条件を確認した。DOM検査がraw HTML内のMarkdown再解釈を検出したため、35説明区画の改行/backtick/asterisk/underscoreを文字参照で保護した。旧review草稿との全文復元一致と修正版244行への対応、全48pre/51b/見出し/目次/11anchor・footer/原文downloadSHA・隔離buildが合格し、レビュー25/27へ進んだ。修正前草稿と意味reviewを保持している。818でフレームAPIマニュアルの原文508行を全量読解し、25説明区画の固定header対応を保存した。行頭**装飾の差も記録したが、訳再利用と内容reviewは未実施。819で全25区画の元コメントprefix/suffixと既存訳firstlineを再読して再利用判断を保存し、25説明・16見出し・目次14リンクの日本語草稿を組み立てた。817の改行/記号文字参照保護を適用し、全宣言/inline commentsを保持した。草稿検査で7区画の関数名照応省略を検出し、原位置へ関数名を明示して再読した。API/数値/URL/区画外全量一致は合格だが、新ページ全文内容review/取込/build/DOMは未実施。草稿は未取込で25/27合格を維持する。820では原文508/定本529/日本語280行を別工程全量reviewし、全25説明の容量・状態/辞書寿命・getFrameInfo消費量と再開位置・全宣言/inline comments・16見出し/目次14リンク/15anchorを照合した。定本の未収録5API名が日本語編集注記で省略されていたため補い、本文不変証明を保存して再読した。全pre/b/見出し/リストのDOM一致、本文14リンクとテーマ生成prevリンクの別検査、原文downloadSHA/footer/ENalternate/隔離buildが合格し26/27へ進んだ。821でNEWS原文366行を省略なしで全読解し、41版の全範囲対応と定本preからの原文復元一致を保存した。先頭101行（v1.10.0–v1.9.0）の部分草稿とAPI/数値/inlinecode/CLI option/報告者・カテゴリ・空行・版labelの検査を保存したが、全量翻訳/別工程review/取込/build/DOMは未実施。未確認はNEWS1ページで、部分草稿を完了扱いにしない。821の記録時には証拠パスの二重連結とrun入力参照への余分なメタデータ複写を検査で検出した。前者はCAS前に訂正し、後者は訂正前run・実行済みツールを保持してpath/SHAだけへ修正した。OPERATIONS898に修正証拠を登録し、台帳検査エラー0件を確認した。822では原文102–235/236–366を省略なしで読んで残り265行を翻訳し、821先頭101行と合わせ41版366行の全草稿を組み立てた。全行のAPI/数値/inlinecode/CLI option/報告者・カテゴリ・空行・版labelとHTML文字参照の復元一致が合格。旧API・人名・POSX/<stduni.h>等は無断修正せず編集注記に説明し、性能/対応/安全修正は各版の上流記録と明示した。別工程全文内容review/取込/build/DOMは未実施で26/27合格・NEWS1pendingを維持する。823ではsource366/EN375/JA decoded366を別工程全量reviewし、41版すべての条件/否定/安全修正範囲/過去性能値/寄与者/原誤記/通知を照合した。DESTDIRのstaged installsを「段階的」から「ステージング先へのインストール」へ1箇所修正して再読、残り全文不変とHTML復元一致を保存した。全366行のDOM一致、Markdown code/list非解釈、前後移動先、footer/原文downloadSHA/ENalternate/隔離buildが合格し、27/27の内容reviewが揃った。824では英日全54本文の154内部実リンクを調べ、リンク先/anchor欠落0と、日本語5ページ13実リンク（raw11定義）の英語行きを記録した。全JA対応先は存在するが、限定差分の意味確認/更新は未実施。825ではJA5ページのraw11href/実13hrefを同じ固定版・同sourceのreview済み日本語へ対応付け、旧作業中注記3をpage review状態へ更新した。旧全文reviewを完全逆変換による旧byte復元で保持し、link/注記だけ別工程で意味確認した。5新snapshot/reviewとfrozen manifest825を保存し27/27を維持。変更5全article/footer DOMは明示href/注記以外一致、他49renderedはbyte不変、全154内部href/anchor欠落0・JA→EN0・隔離buildが合格。826で旧GLFW/Lua check方式を読み、英語27・固定原文通知・生成mapの全3再生成出力一致を確認した。共通翻訳検査はexit1/46error（frontmatter27・追加span18・識別子1）として保存。全件を根拠付きで分類し、documentContext以外の不変キー/source全href/commit/SHA、追加IDの実EN/JA各1対応、block API decoded LZ4_decompress_safe双方5を確認した。共通AST text抽出がEN1/JA0になる非対称性はHTML文字参照保護の差に由来する。共通checkを変更して0にせず、専用content gateは未合格のまま。827で隔離appのread-only check-content.mjs/package check:contentを実装した。208固定入力/27EN再生成・27review/live byte・5限定復元chain、orderedheading/code・inline/image・未処理命令・decoded API・125実ID対・license/原通知・本文とfooter370内部hrefを検査。sourcefooter位置の初回誤認は実context要素の完全一致へ修正し失敗logを保持。正常再実行0error、使い捨てcopyの正常1＋12破損/欠落ケースは全期待結果で入力/実app不変。構造gateをpassedへ、意味review27は保持した。証拠rootは既定repository、隔離のみ明示ENV/CLIで、可搬な同梱sourcekitは未完。828で選択build・relative/local links556ファイル・専用contentを再検査して合格し、build/local links gateもpassedへ。integrityのrepo/categoryは合格だがlayout syncは非LZ4の31差で失敗。28は現共有とSHAが異なる隔離snapshot、3は共有jq/libuvにも存在し共有readonly確認でもexit1。ユーザー/他app/Awesomeを同期していない。git diff --checkの0だけでは未追跡LZ4を検査できないため、全109textをno-index検査して10fileのupstream空白/Markdown hardbreak/生成wrapper EOFを保存した。内容は改変せず、whitespace方針は未検証。現在はcanonical/structure/local links/build合格、integrity failed/display pending、GPL sourcekitと共有統合も未完。次回829はOPERATIONS905・827script/package・review27/liveSHAと828全結果を照合し、原バイトを保持する限定gitattributes方針を隔離で用意して実indexを使わない差分検査で確認する。非LZ4差は保護しglobal integrityの失敗を保持、独立したlocal Astro browser表示とGPL sourcekit準備を進め、共有統合時に最新template/adapterを再調査する。日本語参照確定後に英語参照を再照合し、変更ページのレビューSHAを更新する。全案件gates・GPL対応Libxソースキット・統合は未完。既存本文・共有CSS・Awesomeを巻き戻さない。CommonMarkは日本語0.31.2/655例の存在を保持し、具体的追加価値が未確定のため採用しない。外部公開・定期実行は別途指示まで行わない。

2026-10-05 サイクル829: 新規109text全ファイルを一時Git indexへintent-to-addして差分検査した。上流原文4・レビュー済みEN/JA6の計10 exactpathだけに原バイト保持の -text/-whitespace を隔離側へ追加し、git diff --checkが合格。対象外コード/JA文書2負例は末尾空白を検出し、本文・共有attributes・実index不変をSHAで確認。専用content再検査も合格し27全文reviewを維持。ローカルAstroはsandbox listen EPERM終了後に承認済みlocal-only起動（session1283、127.0.0.1:4328/docs/lz4）し、CUA tab4でJA block API1ページのdesktop表示・Chapter4の実移動・pre横スクロール・footer出典詳細展開を確認。観察記録はBROWSER_PARTIAL.json、画素保存は未実施。display全体はpending、integrity failed・GPL sourcekit/共有統合未完を維持。次は830でpreviewの実handleを再確認し、代表Markdown/表/frame API/NEWS/CLI、英語/mobile、footer/download/language/search動作を検証し、GPL対応Libx sourcekitと可搬検証へ進む。非LZ4差31/共有3とAwesome/ユーザー変更を保護し、外部公開・定期実行は行わない。

2026-10-05 サイクル830: 英日54pageを実ブラウザーでdesktop1280x720/mobile390x844の2幅検査し、全本文/出典/言語属性と全体横overflow0を確認。代表NEWS/frame API/CLI/モバイルframe表を視認し、幅広表は専用auto scroll領域。viewportはresetした。言語切替と英日API検索の動作を確認する過程で、JA NEWSのnumeric HTML referenceがMarkdown stripで分断され検索漏れになることを発見。隔離generatorのみ、実markup除去後・Markdown delimiter除去前にparse5 text復号を追加。9fixture/既存unit6/runtime1とGLFW/Lua186page抽出（非entity184text旧式一致）が合格。LZ4検索54entryの非text全field不変、38text不変/16text復号改善。選択build/content再検査合格後、browser reloadでJA NEWSがAPI検索へ復帰しクリック遷移した。共有generatorの既存user変更はbeforeSHA不変、本文27review維持。OPERATIONS907へ証拠登録し、display全体は外部badge最終状態/固定download等pending、GPL Libx sourcekit/可搬検証/共有統合とglobal integrity差は未完のまま。次は831で実preview handleを照合、固定download/MIME/SHA・画像残件・sourcekitを進め、共有統合時の検索fixは限定patchとbeforeSHAで保護する。外部公開/定期設定なし。

2026-10-05 サイクル831: 起動済みAstro1283をpollで確認し、承認済みlocal HTTP読み取りで全54HTMLと33固定原文/通知/上流archiveの計87応答が200・MIME・ファイルSHA一致。702fileの内部sourcekit草稿を /private/tmp/libx-lz4-sourcekit-831 に作成し、27EN/27JA/208原入力・通知/archive・map/lock/review・変換器・共有8package/build/plugin/SW source・依存lockを同梱。旧absolute review参照は原JSONを保持し既知root内の同ファイルを相対配置/SHA一致。offline installはajv cache不足で失敗、同scratchの承認済みfrozen-lock network導入が成功。PNPMはesbuild/sharp/workerd build scriptsをignoredしWorkersは実行なし。初portable buildのSW source不足を補い59page buildと既定同梱証拠のcontent gateが合格、702input不変。元隔離との全54HTML/CSSは生成Astro scope token/stylesheet hashだけ正規化すると全文一致。本文/リンク/ID/出典を正規化せず意味review27を保持。初回copy/build/check失敗と修正理由を保存。root LICENSE/package licenseを共有実装で確認できず外部配布可と推測しないinternal draftとし、第三者通知/条件・archive/download/footer・共有統合とdisplay/integrity残件は未完。次は832でOPERATIONS908/702SHAを照合して配布条件の事実調査とアーカイブ/限定footer保守の設計を進める。外部公開/定期設定なし。

2026-10-05 サイクル832: 導入754packageの元通知724fileとmetadataを内部kitへ保存（root通知未発見37/declared licenseなし2をunknownとして記録）。LZ4の実生成fontは0fileで、初KaTeX font存在仮定のassertを訂正し配信済みとは記録しない。READMEへ831検証結果を追記し1421file+manifest計1422member、約3.68MBの内部archiveを作成して全member/SHA/安全path一致を確認。別scratch /private/tmp/libx-lz4-unpacked-832/libx-lz4-sourcekit に実展開し、初offlineはsandbox別storeの不足で失敗、831導入の既知cacheを明示した承認済みoffline/frozen install→59page build→既定同梱証拠content gateが合格、1421input不変。root/shared8packageのlicense指定とlocal root LICENSE historyは未発見、public GitHubから許諾を推測せず配布条件unknown/再開条件を保存。archiveは公開download未配置、意味review27・display pending/integrity failedを維持。次は833でOPERATIONS909/832全証拠を照合し、配布条件unknownを保持したまま独立した最新共有template/adapter/registryと限定ローカル統合の設計へ進む。完全対応source/footer完成とは扱わず、他app/Awesome/ユーザー変更を保護。外部公開/定期設定なし。

2026-10-05 サイクル833: 最新共有276sourceを隔離workspaceへ限定統合し、offline frozen install、LZ4選択build59、専用content27/370links、template4が合格。英日54本文DOM不変、出典footerは整形空白差のみ、検索index2 byte一致、全文review54file SHA一致。保存済み27件の全文レビューに合わせ工程をcontent-reviewedへ整合し、workspaceを /private/tmp/libx-lz4-integration-833/libx-lz4-sourcekit へ切替。新規全文reviewやverifiedとは扱わない。最新rootの全体linksは1347件/142fileで失敗（明示LZ4および780–833のLZ4履歴証拠は0件）、links failedとして記録。root app/Awesome/ユーザー変更は保護。次は834で最新UIのlocal Astro表示・keyboard/downloadと内部sourcekit更新を進め、歴史contextのリンク失敗を分類する。配布条件unknown、display pending/integrity failed、公共sourcekit/footerは未完。外部公開/定期設定なし。

2026-10-05 サイクル834: 最新Astro preview37550/127.0.0.1:4329/tab5で言語menuのキーボード選択不能を実証し、共有utilsは保持して隔離のみhandlerを追加。14実keyboard操作・言語切替・JA NEWS検索遷移・出典詳細展開が成功。英日54pageをdesktop1280x720/mobile390x844で計108測定し本文/出典全存在・全体横overflow0、viewport reset、代表mobileを視認。外部badge2は現在complete/幅106・236を確認。再build59/content27/54本文DOM/出典DOM比較合格、全文review27不変。実downloadはAstro previewのContent-Encoding:gzipにより圧縮387536byteが展開tar1863680byteとしてtar.gz名で保存されSHA不一致。gzip展開内容は完全一致だがdownload/displayはfailedへ更新し、raw HTTP合格を代用しない。次835でlocal配信ヘッダーを限定修正して実byte一致を再検証、dropdown複数app回帰と最新内部kit更新へ進む。配布条件unknown/公共kit/footer/global links1347/非LZ4integrityは未完。root/Awesome/user変更保護、外部公開/定期なし。

2026-10-05 サイクル835: 現911/54review/dropdown/rootを再照合し旧Astro37550live確認。Astro5.7.12静的previewが独自Vite pluginを渡さない実装を確認し、隔離preview起動をAstro programmatic APIと同Node dispatcherのsource tar.gz限定応答へ変更。元artifact/footer不変、gzip MIME/attachment・Content-Encodingなし。Node server fieldはpublic type外なので5.7.12とactual listenerのguardを設け、upgrade時は再検証。初project-config index.js import失敗を保存し既存JS app-registryへ修正。localhost4330/Astro39916/tab5で実downloadし元387536byte/SHAが完全一致、834失敗に対する解消証拠を保存。GET/HEAD/query/encoded traversal等15caseと全54HTML+33sourceの87HTTP byte/MIME一致、専用content27合格。displayはfailedからpendingへ、verified未達。次836は最新代表表示・dropdown複数app回帰・835helperを含む最新内部kitを再作成して展開再現。共有配布条件unknown/公共kit/footer/global links1347/非LZ4integrityは未完。root/Awesome/user変更保持、外部公開/定期なし。

2026-10-05 サイクル836: 最新GLFW/Lua233sourceを別scratchへコピーしoffline frozen install後、keyboard before/after各GLFW77/Lua119計196page buildが合格。全186本文・出典DOM/text/attrs（生成Astro scope ID以外）が一致、CSS2/検索4全byte一致。2app各10操作計20の実CUA言語/版/矢印/Home/End/Escape/Tab/Enter/Spaceを確認し、回帰用tabとサーバーを終了。LZ4既存14操作と複数app検証に基づきroot current beforeSHAをguardして共有Dropdown/utils.tsだけ限定適用（40追加2変更）。元root app233fileはSHA不変、TS/生成JS syntax/diff合格。全文review27保持、新レビュー/verified/外部公開とは扱わない。次837は836shared afterSHAを期待し旧beforeへ戻さず、833最新shared+835preview helperを含む内部kit/manifest/archiveを更新して展開再現。GLFW/Lua回帰appはkitへ混入せず、LZ4残代表表示・配布条件unknown/公共sourcekit/footer/global links1347/非LZ4integrityは未完。Awesome/user変更保護、外部公開/定期なし。

## 出典・編集注記の配置変更の照合

2026-10-04のフッター移行は、OPERATIONS.presentationMaintenanceに固定したPRESENTATION_BINDINGS.jsonを登録し、過去の全文レビューを保持したまま現行本文との対応を検査する。保守前のFrontmatterと移動注記から元ファイルを復元し、旧レビューのハッシュ・確認範囲を照合する。本文、移動注記、タイトル、出典メタデータが後から変われば保守証拠は失効する。過去サイクルの計画・設定参照は固定した履歴スナップショットを照合し、現在の方針と更新時の期待入力は引き続き厳密に検査する。

これは新しい全文レビューや公開許可ではない。配置・表現の限定確認は別工程とし、意味を変更した場合は対応する内容レビューが必要になる。公開候補の検証と配信CASは別に実施する。
