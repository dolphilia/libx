# 入れ子型アプリグループ実施記録

## 2026-09-05: 共通検出と移行前記録

計画全体を実行中。Awesomeの実ディレクトリ移行、グループUI、公開目録・選択統合、独立デプロイは未実装。

### 実装

- ADR-0012にユーザー採用済みの入れ子案を記録。
- `packages/project-config/src/app-registry.js`と型定義を追加。NodeとAstro向けに`@docs/project-config/app-registry`を公開。
- 単独／一段グループの検出、所属順、実package名、内部ID、root解決、個別／グループ選択を実装。
- 存在しないentry、順序重複、深いgroup、親子兼用、不完全app、package名重複、symlink、不正IDを拒否するfixtureを追加。
- pnpm workspaceとdev／build:separate／previewに子アプリの階層を追加。pnpmでlockfile整合を確認し、整形後のlockfile差分はなし。
- landingのアプリ検出、検索生成の対象解決、カテゴリ整合性検査、Service Worker同期に共通検出を接続。

### 移行前の証拠

- `.tmp/nested-app-migration/awesome-before.json`: 2,074本文のパス・SHA-256・licenseSourceと全言語ルートを保存。まだ一時保存であり、移行前に追跡可能な証拠へ整理する。
- `.tmp/nested-app-migration/baseline-build.log`: 既存構成の統合ビルド完了を確認。所要145.52秒、統合出力2,478ファイル・478,255,769 bytes。
- 上記は既存依存・生成キャッシュを残した測定。クリーン条件の確立、複数回測定、選択ビルドとの比較は未完了。
- `/usr/bin/time -l`の追加統計は`sysctl kern.clockrate: Operation not permitted`で取得不能。ビルド自体は完了したがラッパーの終了コードは1。`ps`も制限され、最大RSSは未測定として扱う。

### 検証と修正

- 共通検出テスト12件が成功。
- 型検査と変更コードのESLintが成功（接続変更後の再検査結果は後続記録へ追記する）。
- 初回runtime検査は109件中108件成功、1件失敗。前段の文書作成でAwesome直下READMEへ追加した導線が、履歴証拠の固定ハッシュを変えていた。
- 当該READMEへの今回の会話内の追記だけを撤去し、履歴ファイルの元ハッシュを保持。固定証拠の期待値は変更していない。Awesomeのsnapshot契約4件と共通検出12件の再実行が成功。
- 計画・調査への導線は通常のdocs目次へ保持する。今後もAwesomeの証拠記録を通常の可変READMEと混同しない。
- 接続変更後の型検査、runtime全109件が成功。Lua、GLFW、landingの実ビルドも成功。変更した共有処理を既存アプリで確認できたが、入れ子アプリの実ビルドと全フェーズの品質保証はまだ未完了。

### 次の作業

1. 基準計測の不足と永続的な移行前目録を整える。
2. 共通検出を残る管理CLI・ビルド・整合性検査へ接続し、テンプレート由来の入れ子appの実ビルドを検証する。
3. 公開目録・グループUI・選択統合を整えてからAwesomeを移動する。

根拠: [実装計画](../plans/NESTED_APP_GROUPS_IMPLEMENTATION_PLAN.md)、[ADR-0012](../adr/0012-nested-app-groups.md)。

## 2026-09-05: 管理CLIと入れ子アプリの実ビルド

- `create:group`を追加。テンプレートから入口を準備し、group設定と一緒にrenameで公開する。途中失敗時はステージを削除し、空グループを残さない。
- `create:project --group=<id>`を追加。グループが存在すること、生成package名が重複しないことを検査。オプションは位置引数の前にも指定可能。
- `libx-docs-prepare`をworkspace binとして追加。生成app／テンプレートから、深さに依存せずサイドバー・検索・Service Workerを準備する。
- 生成tsconfigの参照を実位置から計算。グループの公開baseをAstro設定、文書管理、サイドバー、検索で解決する。
- 文書・版・言語追加CLI、全体サイドバー生成、整合性検査を共通アプリ一覧へ接続。レイアウト同期は通常content/docsを持つappを検出し、固定4件を廃止。Awesome専用レイアウトの共通化は未完了。
- 一時的な`apps/nested-verification/{overview,web}`を実CLIで作成。両子の7ページビルドが成功し、webディレクトリからの`pnpm build`も成功。
- 両子のcanonicalと検索URLが`/docs/nested-verification/`を使用することをHTML／JSONで検査。文書・版・言語追加dry-runを子ディレクトリから実行し、v99・arが生成されないことを確認。
- グループ生成の成功・dry-run・不正ID・失敗時回収の3テストを追加。runtime全112件、型検査、変更範囲ESLintが成功（依存を元ロックへ戻す前の結果）。
- 検証グループは確認後に削除。pnpmインストール時の不要な推移依存解決差分を取り除き、元のlockfileで`pnpm install --frozen-lockfile --offline --ignore-scripts`を成功させた。依存更新は今回の目的に含めていない。
- 生成手順のガイドを更新。グループの統合公開は公開目録とUI完成まで未対応と明記。
- 元lockfileに固定し直した後もruntime全112件と型検査が成功。新しい共通prebuildを用いた正規テンプレートの7ページビルドも成功した。

ログは`.tmp/nested-app-migration/nested-{build,web-build,create,version,document,language,sidebar}.log`。公開目録・UI・選択統合と実際のAwesome移行は引き続き未完了。

## 2026-09-05: 公開所有目録とグループ選択統合

- `scripts/group-output.js`にapp出力のハッシュ目録とグループ統合を追加。group子の通常ビルド完了時に`.astro/libx-output.json`を記録する。
- 入力ハッシュ、出力ハッシュ、出力集合、検索・サイドバーのハッシュを再利用前に検査する。共有コードの変更など判定範囲が広い場合は保守的に再ビルドする。細粒度の参照依存グラフは未実装。
- 子appのCSS/JSを`assets/<child>/`へ配置。入口・404・favicon・Service Worker・版／言語入口はentry子だけを採用し、検索／サイドバーは全子の出力から集約する。
- 公開パスのindex別名・URLエンコードを正規化し、所有衝突、欠損ページへの索引参照、重複検索URLを拒否。未参照JSは公開prefixに合わせた配置で削除する。
- グループ目録は`.tmp/group-outputs/<group>/manifest.json`、配信用ファイルは同階層の`site/`に分離し、内部目録を公開しない。
- 全体・選択ビルドを`deployment-builder.js`の共通検出と処理へ接続。`--group`／`--projects=<group>/<child>`を追加し、必要な未変更子の検証済み出力を再利用する。
- 統合出力はステージで準備・検査・未参照JS削除を終えてからroot distへ切り替える。全体ビルド失敗前に既存distを削除する挙動を廃止した。

### 検証

- 公開所有・索引集約・未参照JS・衝突時保全・URL別名・不正パス・入力／出力キャッシュ検証の4テストを追加。既存の選択統合4テストと合わせて成功。
- 実際の一時グループ`output-verification/{overview,web}`を作成し、本文URLが重複しないようwebのテンプレート文書名を変更。`pnpm build:selective --group=output-verification`が成功。
- web本文だけを更新して`--projects=output-verification/web`を実行。overviewの目録はバイト単位で不変、overviewをビルドしたログはなく、webの公開HTMLへ変更が反映された。
- 同時に既存の他appの公開ファイル2,478件のSHA-256が全件不変であることを確認した。
- 検証用app・公開ディレクトリ・集約キャッシュを除去し、元lockfileで依存を再固定。runtime全116件、型検査が成功。
- 新統合処理での実リポジトリ全体ビルドは成功。smoke 13件と配信成果物予算の検査も成功（後続UI変更前は2,478ファイル・456.10 MiB）。

### 未完了事項

グループの閲覧UI、shared版の公開可用性、文書IDに基づく版／言語切替、CI artifact復元、参照元の依存追跡は未完了。現状のグループ索引集約は2 MiB上限を守り、予算超過時の分割検索は未対応。グループの`--local`は未対応として明示停止し、公開prefixを保つ通常ビルドをローカル確認に使う。Awesomeの実移行・独立デプロイにはまだ進んでいない。

ログ: `.tmp/nested-app-migration/output-{group,child}-build.log`、`runtime-stage3.log`、`typecheck-stage3-final.log`、`integrated-stage3.log`。


## 2026-09-05: グループ表示と共有ナビの初期実装

- landingの検出結果は、子appごとのカードからグループ一件へ集約する。表示名はgroup設定、説明と入口はentry appの実コンテンツを利用する。単独appは従来の検出を維持する。
- 正規MainLayoutはグループ名をヘッダー・ページタイトルへ表示し、ホームのリンクをその版・言語の一覧へ向ける。DocumentProvenanceは子の設定を引き続き使用する。
- `GroupSidebar.astro`は現在地周辺の最大5文書と一覧リンクだけを初期HTMLへ出力する。集約されたschemaVersion付きJSONから全体ナビを構築し、現在地のカテゴリを開く。本文をJavaScriptに依存させない。
- グループ統合時に`navigation/<version>/<lang>.json`と`navigation/<version>/<lang>/index.html`を生成する。後者はスクリプト不要の全体一覧で、グループ処理が所有する。HTMLのラベルをエスケープし、公開URLと版・言語・スキーマ・重複を検証する。
- JSON取得失敗、スキーマ不一致、現在ページがない古いナビでは初期の局所ナビを残す。動的DOMではtextContentを使い、任意HTMLを挿入しない。
- 正規テンプレートの変更をLua・GLFW・sample-docs・test-verificationへ同期した。Awesome専用レイアウトへの接続は移行フェーズで行う。

### 検証

一時グループ`navigation-verification/{overview,web}`を正規CLIで生成し、重複しない文書URLで選択グループビルドを実行した。両子7ページずつのビルドと共有出力の生成が成功。landingもビルドし、日本語トップにグループの入口リンクが一件、子の表示名が零件であることを確認した。

Chromeの分離コンテキストで日本語のweb子のページを検証した。

- 両子の文書が同一カテゴリのナビに表示され、現在ページだけにaria-currentが付く。
- タイトルとcanonicalがグループ名・共通公開URLになり、本文ページのconsoleにerror/warnがない。
- 390×844のモバイル表示でscrollWidthが390、ナビが表示される。
- summaryにフォーカスしてEnterで開閉でき、フォーカスが維持される。
- ナビのfetchだけを失敗させても、現在ページと静的一覧へのリンクが残る。一覧へ移動して全メンバーのリンクが表示される。
- 静的一覧のRTL・ラベルのエスケープ・スクリプト不要性、URL検査はruntimeテストでも検証する。

ログは`.tmp/nested-app-migration/navigation-{build,landing,create}.log`。検証用appと公開出力は削除し、lockfileと依存関係を元の固定バージョンへ復元した。JSをブラウザー設定で完全に無効化した検査、実RTL文書のブラウザー検査、オフラインキャッシュの切替検査は未完了。

### 残る契約

言語・版選択はまだ各子のcollectionを参照する。安定した文書IDによるグループ横断の切替、shared版の全メンバー対応検査、カテゴリIDによる統合、変更に連動する参照元の再生成は次の実装対象。初期UIの成立だけでフェーズ3全体を完了とはしない。静的一覧はフォールバックとして最小限の表示であり、通常のグループ入口との統一も残る。


最終確認: runtime 118件、unit 26件、smoke 13件が成功。typecheck、変更コードのlint、integrity（レイアウト8ファイル一致を含む）、テンプレート7ページ、Lua・GLFW・sample-docs・test-verification・landingの選択統合が成功した。配信成果物は2,478ファイル・456.11 MiB。Awesomeはまだ元の単独appであり、この数字をAwesome分割・ナビ削減の実測効果とは扱わない。

unit検査では、検索生成器が新しいapp-registryをimportしたため、テスト用TypeScript出力にそのJSが含まれない問題を発見した。`config/tsconfig.tests.json`にapp-registryとそのJSONC依存を明示追加して、実際の実行まで26件を通した。


## 2026-09-05: 文書IDとグループ横断の切替目録

- `@docs/project-config/group-pages`を追加し、本文のコンパイルや他appのMarkdownモジュールimportを伴わず、Frontmatterと経路ファイルからページ情報を集める。通常文書は任意のdocumentId、Awesomeは既存sourceIdを使用する。省略時のIDはapp IDとスラッグから導出する。
- 同一ID・版・言語とURLの重複を拒否する。shared版では全子の版IDと最新版指定の一致を検査する。文書自体の版／言語の欠落と、宣言・出力の不備を分ける。
- 正規MainLayoutはグループ文書目録から言語・版の実URLを解決する。改名と別の子への移動にも対応し、相手文書がなければ実在する一覧へ誘導する。hreflangは同じ文書の実在する翻訳だけに限定する。independentでは所有appの対応範囲を維持する。
- app出力目録にもページ情報を記録し、集約時は全ソースページのHTML・検索・ナビの存在を検査する。公開用navigation/pages.jsonには内部のsourcePathを含めない。
- 入力ハッシュへグループのページメタデータを追加した。本文だけの他子変更では同じハッシュ、経路やタイトルなどの変更では異なるハッシュになる。現状はメタデータ変更でグループ全体を保守的に無効化し、参照元だけへの絞り込みは未実装。
- Frontmatterパーサーgray-matterは既存と同じ4.0.3をproject-configへ直接宣言した。pnpmで生成したlockfile差分はこの依存宣言の3行だけで、推移依存を更新していない。

### 実ビルドの検証

一時グループcatalog-verificationのoverview/webにv1・v2と英日文書を作成。web文書のv2英語ファイルを改名し、v2日本語ファイルをoverviewへ移した。本文は同一documentIdを保持した。

グループビルドはoverview 13ページ、web 11ページで成功。v1日本語の版切替、v2英語の言語切替ともに移動後のv2日本語へリンクし、そのHTMLの存在を確認した。v2英語からv1英語へも旧ファイル名のURLを生成した。共有目録は8本文ページを含む。

web本文だけを追記して選択ビルドすると、overviewの目録はバイト単位で不変であり、overviewのビルドログはなかった。続いてwebのタイトルを変更すると、overviewが入力変更を検知して再ビルドされた。

ログ: `.tmp/nested-app-migration/catalog-{final-build,body-only,metadata-change}.log`。fixtureは削除し、必要なgray-matter宣言を含む固定lockfileへ復元した。

未完了: カテゴリIDに基づくサイドバー集約、前後リンク・内部参照の横断処理、dev時の全機能確認、Awesome専用ルートへの接続、JS完全無効・RTL・オフラインの実ブラウザー検査、CIと移行・性能測定。フェーズ3全体はまだ完了としない。


最終検査: unit 27件・runtime 122件・smoke 13件が成功。型検査、変更したコードのlint、integrity、content検査、テンプレート7ページ、既存4appとlandingの選択統合が成功。配信成果物は2,478ファイル・456.11 MiBで既存予算内。

現行Awesomeへの目録読み取りも実行し、2,074ページ（旧版365件×英日、新版672件×英日）、672文書IDを取得できた。これは既存の専用経路目録からの読み取り確認であり、Awesomeの分割移行や専用UIへの接続完了を意味しない。


## 2026-09-05: カテゴリID・前後リンク・削除時の索引

- グループサイドバーの統合キーを表示名から、文書目録が持つカテゴリIDへ変更。同じ表示名で別IDなら別カテゴリ、同じIDで表示名が異なるなら明確な診断で停止する。任意のcategoryIdを目録に書いて配置と食い違わせることも拒否する。
- 文書目録へ表示順を加えた。sharedグループでは同一版・言語・カテゴリ内で子の並び順に沿った前後リンクを生成し、independentでは所有appの範囲を維持する。
- 手動prev／nextはグループの実在ページへ解決する。ベースなしのversion-firstパス、グループ公開URL、相対パスに対応し、不明ページ・外部URL・クエリ付きURLを拒否する。アンカーそのものの存在検査は別のリンク検査で扱う。
- 正規テンプレートの文書ルートを同期対象へ追加した。既存sample-docsとの差分は同等のnull除去とコメントだけだったため、正規形へ揃えた。同期検査は4app×3ファイルの12ファイル。
- 検索索引は全件のサイズ検証とステージ生成を終えてから置き換える。削除済み言語の古いJSONが残る問題を解消し、予算超過時は従前の索引を保持する。

### 検証

一時グループpagination-verification/overviewとwebをshared設定で作成し、両子7ページの統合ビルドが成功した。実HTMLでoverviewからwebへの自動next、webからoverviewへの手動prev（指定表示名を保持）、guideカテゴリ一件への統合を確認した。

webの日本語ディレクトリを削除し、webだけを選択ビルドしたところ、削除したページのHTML・検索結果・共有ナビ項目が除去され、overviewの日本語ページは保持された。グループ目録変更によりoverviewも再ビルドされている。これは本文だけの変更時の再利用とは区別する。

runtimeには同名別カテゴリの分離、同IDの表示名矛盾、偽のID、子間ページネーション、手動リンクの解決・拒否、検索索引の削除反映・予算超過時保全を追加した。ログ: `.tmp/nested-app-migration/pagination-{build,delete-language}.log`。検証用appと出力は削除し、既存の固定lockfileへ復元した。

残る事項はAwesome専用ルートの接続と移行、一般本文内リンクの横断検査、実ブラウザーの残る受け入れケース、移行前後の基準計測、CI成果物再利用・配信方式の検証。全計画は引き続き実装中。


最終検査はunit 27件・runtime 126件・smoke 13件が成功。型検査、変更コードのlint、Markdown相対リンク（116ファイル）、integrity（同期12ファイル）、content検査、テンプレートと既存4app・landingのビルドが成功。配信成果物は2,478ファイル・456.11 MiBで既存予算内。

ADR-0012へADR-0003・0008・0009・0011と正式原則の対応表を追加した。過去ADRは変更せず、正式原則6.2・7.1・7.5へ一段の入れ子、閲覧と生成の境界、共有目録の入力変更・再利用検証を追補した。計画フェーズ0の「既存ADRと正式原則の整理」を完了した。次は保存用の移行前目録と比較可能な基準計測を整え、Awesome移行の前提を満たす。


## 2026-09-05: 移行前目録とクリーンビルド基準

[移行基準資料](./nested-app-migration/README.md)へ保存した。既存のdocument-import証拠ファイルは変更していない。

- 移行検査器は物理移動を許容し、本文全文・本文だけのハッシュ、文書ID・sourceId・出典、canonical、本文アンカー、検索項目を比較する。本文外のアンカー変更と追加公開ページは別途報告する。
- 保存目録は2,074本文・2,082公開HTML・4現行検索索引。テンプレート由来の不要なv1英日索引がAwesome配下に残っており、legacySearchesとして保存した。移行後の除去対象とする。
- 全体とAwesome選択を、同じGit HEAD・同じ入力fingerprintで各1回クリーンビルドした。対象distと.astroを削除し、依存キャッシュと生成済みソースは保持した。共通入れ子基盤を含む移行前worktreeの測定であり、最初期HEADのcheckoutだけを測ったものではない。
- 全体149.105秒、最大RSS3,214.8 MiB、追加ピーク出力ディスク1.834 GiB。Awesome選択130.100秒、最大RSS3,568.3 MiB、追加ピーク出力ディスク1.259 GiB。
- Awesome単体dist611.82 MiB、統合dist456.11 MiB・2,478ファイル。両ケースとも入力が不変で、コマンド・詳細ログ・環境・サンプリング条件を保存した。標本最大値・1回測定なので性能保証値とは区別する。
- 入口と6分野の初期分割候補を棚卸しした。最大の本文量はsystemsの16.47 MiB（分割前は計75.00 MiB）。これは本文ファイル容量の分布であり、分割後のビルド性能ではない。672 sourceIdに版別のカテゴリ変更はなく、英日・旧新版を同じ所有子に配置できる。

計画フェーズ0の保存目録と基準計測を完了した。次はこの比較器を使いながら、所有割当とAwesome生成器を入れ子へ対応させる。


保存目録とクリーンビルド後の全件照合は成功。本文・出典・canonical・本文アンカー・検索項目に差はなかった。本文外IDは全2,074ページで変わっていたが、全件を監査するとランダムなdropdown-button／dropdown-menuだけで、それ以外のID変化は零件。同じ入力でもHTML差分が発生する既存要因なので、後続で識別子を決定的に生成する改善を検討する。

追加した移行検査器のruntime 3件を含む全129件、smoke13件が成功。変更コードのlintとMarkdown相対リンク117ファイルの検査も成功した。保存JSONは専用生成器の形式を保持するため、既存Awesome証拠JSONと同様にPrettierの対象から除外した。

## 2026-09-05: Awesome所有割当と生成・検査の配置対応

`config/awesome-source-owners.json`を672取得元の所有先の正本とし、`app-ownership.mjs`に単独／入れ子の解決と経路目録の集約を追加した。版・言語・表示カテゴリから独立して所有先を解決し、未知の取得元、誤った子への配置、同一取得元・版・言語の重複、不正な本文パス、欠損した所有子を拒否する。既存の出典ロックとCONTENT_PARTITIONSは変更していない。

一処理内で所有先一覧を保持するresolverを用意した。2,074本文の存在照合は、ページごとに再探索する約10秒から、一覧を再利用する約0.05秒へ短縮した（この検査単体の観測値であり、サイトビルドの改善率ではない）。プロセス全体に残るグローバルキャッシュにはしていない。

`publish-awesome`は子別に本文・経路・サイドバー・検索を生成する構成へ、出典レジストリ生成器は子が所有・参照する出典を選ぶ構成へ変更した。出典生成に非変更の`--check`を追加し、JSONCの書式差と設定値の差を区別する。現行単独配置のv2026-08-23は出典設定値・公開生成結果とも一致した。履歴版の公開checkも既存runtime内で成功した。

`validate-awesome-single-app`の既存コマンド名を維持し、共通配置解決を使って全子の英語・翻訳・出典・asset・生成HTMLを検査するよう変更した。出典の存在は所有子ごとに検査する。二子のCLI試験で正常系と、他の子の出典登録では欠落を補えないことを確認した。実Awesomeのv2026-08-23のasset検査も成功した。

検証: 所有対応の新規6件を含むruntime全135件が成功（`.tmp/nested-app-migration/runtime-ownership-verified.log`）。その後追加した出典check非変更テストを含む対象7件も成功。変更コードのlintが成功。Awesome本体の配置・本文・設定・生成JSONには変更を加えていない。

残る作業: 子別生成器の実データ試験、複数子の生成更新のステージ化、古いsnapshot指定で出典設定から新しい版を落とさない処理、翻訳・レビュー等の固定パス更新、Awesome専用UIの共通ナビ接続、実ファイル移動。生成器を対応させたことだけでフェーズ5全体を完了扱いにはしない。

## 2026-09-05: 複数子の生成更新をステージ化し、履歴版再生成を保全

`batch-import-output.js`を追加し、Awesome公開生成器の全子の本文・経路・サイドバー・検索と共通の生成目録を、一括置換の前にすべて生成・検証するよう変更した。出典レジストリも同じ仕組みで全対象の設定を準備する。出力先の重複・親子関係を生成前に拒否する。

置換は既存`commitPreparedPathsAtomically`を利用する。捕捉できる置換エラーでは先に更新した子も元へ戻す。これはプロセス強制終了や電源断に対する永続トランザクション保証ではなく、生成中・検証中・置換中の例外に対する保全である。ステージは成功・失敗とも後始末する。英日索引は空の場合も再生成し、最後の翻訳削除後に古い日本語索引を残さない。

出典生成は要求snapshotだけでなく既存公開版のロックを読み、古い版指定で新しい版・出典を削除しないよう変更した。新しい版で対象外になった取得元も、履歴版にincludedの記録があれば出典を保持する。子内の本文が他の所有子の出典を参照する場合、その参照出典も子のレジストリへ残す。二子のCLI試験で、履歴出典の保持・共有出典参照・新版とlatest表示の保持を確認した。

実Awesomeでv2026-08-23の672定本を新しい公開生成器により再生成し、続くcheckが成功。`apps/awesome`と既存document-import証拠配下にGit差分はない。移行前の2,074本文目録との照合もpassed、errorsゼロ、追加公開URLゼロ。本文外アンカー差2,074件は前回基準照合と同数で、今回はHTMLをビルドしていない。比較ログ: `.tmp/nested-app-migration/batch-publish-evidence.json`。出典生成のcheckはv2026-08-20／v2026-08-23の両指定で成功した。

全runtime142件、変更コードのlintが成功した。ログ: `.tmp/nested-app-migration/runtime-batch-import.log`、`.tmp/nested-app-migration/publish-batch-current.log`。実ファイル移動は未実施。次は残存するAwesome固定パスの更新と、専用レイアウトを正規テンプレートのナビ供給契約へ接続する。

## 2026-09-05: Awesomeを正規レイアウトのナビ供給契約へ接続

`DocumentationNavigationProvider`をcollectionに依存しない型として公開した。各appの`src/lib/navigation.ts`は、自appの文書slug・サイドバー・ホームリンクを供給する。通常appは従来のcontent collection、Awesomeは自appの生成済み経路JSONを使う。グループのナビ・言語／版切替は既存の共通ページ目録で解決し、供給元が他の子のMarkdownを読み込む構造にはしていない。

MainLayoutとDocLayoutをAwesomeも含めて正規テンプレートへ統一した。同期対象の検出は共通app一覧と通常本文ルート／ナビ供給元の存在を使い、Awesome名によるレイアウト除外をなくした。通常4appは本文ルートと既定供給元も同期し、Awesomeの専用ルートと供給元は保持する。同期検査は18ファイル一致。ホームリンクは供給元で旧挙動を維持し、現在地判定は末尾スラッシュを正規化した一致に統一した。

全appとlandingの統合ビルド、テンプレート7ページ、runtime142件、smoke13件、共有パッケージ型検査、lint、integrity、Markdown相対リンク検査が成功した。Awesome単体の追加tsc検査で型のcollection依存が見つかったため、独立した型公開先へ分離して再検査し、成功した。この修正は型専用importと型定義の変更であり、生成HTMLの実行時処理を変えない。

統合ビルド後の全2,074本文の移行前照合はpassed、errorsゼロ、追加公開URLゼロ。本文・出典・canonical・本文アンカー・検索を保持した。本文外アンカー差2,074件は既知のランダムID差として引き続き報告対象。ログ: `.tmp/nested-app-migration/navigation-provider-{build,template,runtime,typecheck,awesome-types,smoke}.log`、照合: `.tmp/nested-app-migration/navigation-provider-evidence.json`。

計画フェーズ2のレイアウト供給契約への接続を完了。Awesomeの実ファイル移動、子をまたぐ専用ページネーションと内部リンク、インポータの残存固定パス、CI・独立配信等は未完了である。

## 2026-09-05: 子をまたぐリスト移動・内部リンクと主要検査の配置対応

共通ページネーションへ版全体・文書order順の指定を追加し、Awesome専用ルートで利用するよう変更した。通常appの既定である同一カテゴリ内の移動は保持し、Awesomeでは元のリスト順でカテゴリ・子の境界を越える。independentでは所有子の範囲を維持する。自分の本文モジュールだけをビルドする構造は変更していない。

AwesomeのAstro設定は共通root解決を使って変換器を読み込み、全子の経路目録を内部リンク変換へ渡す。概要がoverviewに分割されても他の子の同じ版・言語のリストへリンクできる。翻訳が存在しない場合はGitHubへのリンクを維持する。別の子のrepository変更で概要のキャッシュも失効するよう、ページ目録へ取得元repositoryを含めた。

翻訳本文検査・履歴定本の復元・概要リンク監査・翻訳状態同期・状態初期化・状態検査の固定apps/awesome参照を、共通の所有先または全子の本文ルート解決へ変更した。翻訳検査は子ごとに英日を照合し、子を越えて未翻訳を補った扱いにしない。検査対象ゼロ件もエラーとする。状態同期・初期化の生成処理は変更したが、既存のレビュー記録を上書きする実行はしていない。

検証: 分割した概要から別の子への内部リンク、翻訳欠落時の外部リンク維持、子間・カテゴリ間のページネーション、repository変更時のキャッシュ無効化、二子の翻訳検査・未翻訳診断を試験した。全runtime145件、smoke13件、型検査、変更コードのlint、テンプレートビルドが成功した。実Awesomeの2,082ページの選択ビルドが成功し、全2,074本文目録の照合はpassed・errorsゼロ・追加公開URLゼロ。本文外ID差2,074件は既知の報告対象として残る。

現行版の全件翻訳検査は672/672、新旧の状態検査はそれぞれ68バッチ672/672・37バッチ365/365で成功。ログは`.tmp/nested-app-migration/cross-child-{build,runtime-final,translation,typecheck,template,smoke}.log`、照合は`cross-child-evidence.json`、概要監査は`cross-child-overview-audit.json`。Awesomeの実配置は引き続き単独であり、全翻訳ユーティリティ等の残存固定パス更新と移動後の実ビルドは未完了。

## 2026-09-05: 翻訳ユーティリティの論理ファイル解決

`createAwesomeContentAccess`を追加し、既存CLIの`category/file.md`を、版の英語経路目録とsourceId所有割当から実ファイルへ解決するようにした。英語の経路があれば未作成の翻訳先も解決できる。全子の本文探索は論理ファイル名で整列し、未知ファイル・重複・誤配置・パス逸脱・symlinkを拒否する。

本文、RST、RSTリンク表示、表、参照説明、リスト説明、汎用段落の7翻訳コマンドと、翻訳初期化・内部リンク修復・説明文監査・案内ページ生成・冒頭正規化をこの解決へ移した。翻訳APIへのリクエストや`--apply`による本文更新は実行していない。初期化の非変更実行と、二子の論理ファイル解決・不正入力の診断を検証した。

説明文監査の現行版672ページ・95,861対応項目の結果は、保存済み`TEMPLATE_DESCRIPTION_AUDIT.json`とJSON全体で一致した。案内ページ生成には、既に適用済みの冒頭正規化を再現しない既存の問題があった。保存済み判断からタイトル・概要を生成し、既存の正規化器で保持リンク部分のハッシュを検査するよう修正した。証拠ハッシュの変更・検査の緩和は行っていない。現行版56ページ・履歴版0ページの非変更検査が成功し、冒頭正規化の672件checkも成功した。

全runtime147件と変更コードのlintが成功。ログ: `.tmp/nested-app-migration/content-access-runtime-final.log`、監査結果: `.tmp/nested-app-migration/content-access-description-audit.json`。本文と既存証拠ファイルのGit差分はない。残る固定パスは外部リンク報告、冒頭監査、定本照合、用語生成、進捗報告、翻訳パイロット検査等であり、実配置の移動前に引き続き対応する。

## 2026-09-05: 報告・照合処理の配置対応と証拠の区別

冒頭監査、機械監査、外部リンク報告、進捗報告、試訳検査、既存定本照合、jQueryの履歴翻訳処理、用語生成、履歴照合インベントリを共通配置解決へ移した。現行本文の固定apps/awesomeパスはインポータ内から除去し、過去Gitコミットのファイルを読むためのprefixだけを明示して保持した。冒頭監査の境界再固定も、Git側は過去の記録パス、worktree側は現在の所有先で読む。

機械監査のroutesSha256では、追加した物理appIdを除き、従来の論理経路の証拠を維持する。新旧の機械監査checkは672/672・761レビュー項目、365/365・419項目で成功。冒頭監査も1344/1344・730/730で成功した。既存証拠ファイルは変更していない。

外部リンク報告はsourceIdから直接本文を選び、共用licenseSourceによる取り違えを避けるよう変更した。既存v2026-08-23報告は365ページ時点の古い集計で、現在のincluded616本文とは一致しない。既存報告を更新せず、現行616本文・138,784リンクの報告を[追加基準](./nested-app-migration/README.md)へ保存した。`--report`で照合先、`--stdout`で非変更出力を指定できる。新基準への全項目照合テストが成功した。

進捗と用語生成にも非変更出力を追加した。現行進捗672/672、用語対象672ページ・保護語200件を確認した。全runtime148件と変更コードのlintが成功。ログ: `.tmp/nested-app-migration/report-paths-runtime.log`。履歴専用の復旧・再固定・翻訳適用コマンドは既存証拠を更新するため実行せず、本文と既存証拠のGit差分はない。次は実配置の移行ステージを作り、固定パスを持つ検証fixture等も移行後の構造へ追従させる。

## 2026-09-05: Awesomeの7子への移行と最初の統合検証

ステージ生成で2,074本文のバイト列を照合し、旧appを `.tmp/nested-app-migration/awesome-original-app` に保持して7子へ配置を切り替えた。overview 4、web 432、languages 296、systems 386、science 280、creative 150、community 526文書。初回入口ビルドは12ページで成功した。

移行ステージが存在しない `paths.baseUrl` を参照して検索・サイドバーを空にしていた不具合を修正した。共通app一覧のpublicBaseを使用し、版・言語ごとに本文と索引の件数が一致しない場合はステージを破棄する。移行済みの56索引ファイルを旧appから所有先別に復元し、検索・サイドバー各2,074件を確認した。正常な分割と欠落時の停止を実データに依存しないfixtureで検証した。

pnpmが生成した7子のimporterを採用し、無関係な依存グラフの再解決差分を戻した。既存appの依存値は変えず、`pnpm install --offline --frozen-lockfile --ignore-scripts --store-dir=/Users/dolphilia/Library/pnpm/store/v10` が22workspaceで成功した。

`pnpm build:selective --group=awesome` は全7子と統合を完了した。新旧版のpublisher checkは672ページ・365ページで成功。[移行後照合結果](./nested-app-migration/after-move-validation.json)では2,074文書の本文ソース・生成本文・ID・出典・URL・canonical・本文アンカー・検索結果に不一致がない。静的ナビ一覧4経路を追加した。UI内アンカー差分は別項目として保持し、ブラウザー操作の同等性をこの照合だけで完了扱いにしない。

旧配置を直接読むruntime検査を所有先解決へ移し、保存済み序文判断記録の過去パスは変更せず現在の本文へ解決した。smokeは統合公開物を検査し、軽量な初期ナビ、全体ナビJSON、静的一覧のそれぞれで表示名と遷移先を確認する。runtime 150件、smoke 13件、typecheck、integrity、今回変更したコードのlintが成功した。

成果物予算検査は2,526ファイル、184.90 MiB、最大ファイル1.07 MiBで成功。これは現在のローカル統合出力の値であり、同条件の性能比較や本番転送量の実測ではない。ログは `.tmp/nested-app-migration/` の `group-first-build.log`、`runtime-after-move-fixed.log`、`smoke-after-move-fixed.log`、`typecheck-after-move.log`、`integrity-after-move.log`、`assets-after-move.log` に保存した。CI成果物再利用、ローカル開発経路、Service Worker、実ブラウザー、性能測定と独立配信の判断は引き続き未完了。

## 2026-09-05: CI成果物の受け渡しと入力一致時の再利用

全体・選択ビルドに `--reuse` を追加した。グループの子、単独app、landingの出力目録を保存し、入力と全出力が一致する場合だけ再利用する。Nodeバージョン・OS・CPUアーキテクチャ、rootのpackage/workspace設定も入力へ含めた。landingなどのsiteは文書appの構成に依存するため、その入力も保守的に追跡する。公開出力の走査では、入力で除外する名前のディレクトリも検査する。

Cloudflare Pages workflowの品質ジョブへキャッシュ候補の復元、再利用ビルド、成果物予算検査、検証済みartifactの梱包・保存を追加した。プレビュー・本番ジョブの再ビルドを除去し、品質ジョブが返すartifact IDで取得する。失敗した公開ジョブだけの再実行でも同じ品質ジョブの出力を使う。キャッシュサービスの失敗は全体生成へ戻れるが、公開artifactの欠損・commit不一致・内容の不一致は停止する。入れ子の追跡生成物も差分検査に追加した。

`deployment-artifact.js` は公開ファイル全体を梱包し、commit、ファイル集合、サイズ、SHA-256を照合する。改変・追加・削除、symlink、不正な梱包先を検査する。別checkoutへ復元したapp成果物の再利用と、入力変更・出力改変・欠損時の再生成もfixtureで確認した。workflowのYAMLを解析し、ビルドは品質ジョブ1回、公開ジョブ0回であることを確認した。

実データでは最終修正後の全12対象を生成し、同一入力で再実行した結果、再ビルド0件・再利用12件となった。2,526公開ファイルの全バイト一致、tarでの梱包・別ディレクトリへの展開後の照合を確認した。[検証記録](./nested-app-migration/ci-artifact-validation.json)には未コミットのworktreeでの検証であることを明記した。保存したローカルartifactは `.tmp/nested-app-migration/verified-deployment-local/` にある。

runtime157件、smoke13件、型検査、変更コードのlint・整形、117文書の相対リンク検査が成功。成果物予算は2,526ファイル・184.90 MiB・最大1.07 MiBで成功した。調査メモの旧appコードへのリンク2件を移行後の配置へ更新した。主なログは `.tmp/nested-app-migration/` の `full-reuse-final-cold.log`、`full-reuse-warm.log`、`ci-artifact-tests.log`、`ci-runtime-final.log`、`ci-smoke.log`、`ci-assets.log`。

[ビルドガイド](../guides/BUILD_AND_DEPLOYMENT_GUIDE.md)へ操作と制約を追記した。GitHub Actions上での実行とCloudflareへの公開は行っておらず、リモート環境の品質ゲート・キャッシュ・artifact取得の実証は未完了。独立公開、ローカル開発・プレビュー、Service Worker、ブラウザー確認、正式な性能比較は引き続き進める。

## 2026-09-05: 統合プレビューとナビキャッシュの分離

`pnpm preview` を統合distのループバック配信へ変更し、`--group`・`--port` を追加した。既存の各appプレビューは `preview:separate` またはpackage filterで利用できる。グループ内の全文書、検索、ナビ、静的一覧、入口・404が存在することを開始前に検査する。HTTP配信では公開パス、資産のContent-Type、HEAD、ディレクトリの末尾スラッシュ、最寄りの404を扱い、symlinkとroot外へのパスを拒否する。

`--local` のグループ拒否を除去し、通常ビルドと同じ公開パスを保持するよう統一した。旧処理が各index.htmlを共通の英語リダイレクトへ置換していた問題を修正した。canonicalは公開設定を維持する。選択対象外の子を補完ビルドした場合も結果のbuilt一覧へ含める。

Service Workerはoriginと登録scopeをキャッシュ名へ含め、自分の旧キャッシュだけを回収する。他appや旧共有キャッシュの削除・横断検索を行わない。グループナビもネットワーク優先でキャッシュし、保存不能でも正常なネットワーク応答を返す。ページ目録とカテゴリ翻訳から決定的なナビ世代IDを計算し、HTMLの要求URLとJSONのrevisionを照合する。本文だけの変更で世代を変えず、世代違い・未取得のオフライン要求では初期HTMLの局所リンクを残す。

runtime162件、smoke13件、型・整合性・変更コードのlint、相対リンク検査が成功。HTTPテストはsandboxの待受制限でEPERMとなったため、ループバック待受を許可した実行で検証した。`pnpm build:local -- --confirm --reuse` は12対象の生成・統合に成功し、移行前の全2,074本文等の照合も通った。最後の整形で変更したHTML補正器は専用3テストと整形検査を再実行した。

実ブラウザーではAwesome ESPの390px・1440px幅で横方向のはみ出しがなく、365文書と静的一覧への366リンク、現在地ESP、HTML/JSONの世代一致を確認した。同世代のオフライン取得は366リンク、未取得世代は静的一覧を含む4リンクを保持し、本文は残った。オンライン再読込で366リンクへ回復した。Luaを同じoriginで開いてもAwesomeと別のキャッシュが保持された。Enterでカテゴリを展開し、Tabで概要リンクへのフォーカスを確認した。Enter後の概要ページ検査はブラウザーツールの応答待ちとなり、別途HTTP取得では200・156,220bytesを確認した。

[検証記録](./nested-app-migration/preview-validation.json)と、`.tmp/nested-app-migration/` の `preview-runtime.log`、`preview-smoke.log`、`preview-migration-evidence.log`、`preview-integrity.log`、`local-full-build.log` に結果を保存した。スクリーンショットはブラウザーツールの保存先制限でリポジトリへ保存できず、インライン画像で確認した。JavaScript無効の実ブラウザー検査、RTLグループfixture、性能計測は未完了。

追記: ブラウザー検査の待ちは `Runtime.evaluate` のprotocol timeoutで終了した。別の隔離コンテキストと `script-src 'none'` を付けた8088番のプレビューでJavaScript無効時を検証し、custom element未登録、本文Awesome ESP、現在地ESP、局所4リンクを確認した。静的一覧へ移動すると全365文書とホームの366リンクが存在した。概要へのキーボード移動の完了確認とRTLグループ検証は未完了として残す。

## 2026-09-05: HTMLの再現性とRTL・キーボードの検証

DropdownのランダムなDOM IDを、リクエスト内の識別情報と出現回数から生成する安定したIDへ変更した。同じ表示名の複数コントロールでもIDとARIA参照が重複しない。Sidebarの明示的な空ハッシュのフォールバックも内容由来へ変更した。実際のAstro fixtureを2回ビルドし、6個のIDの一意性・ARIAの組とHTML全体の一致を確認した。正規テンプレートでも全40出力ファイルのバイト一致を確認し、[再現性記録](./nested-app-migration/ui-reproducibility.json)へ保存した。runtime165件、型検査、変更コードのlintが成功した。この時点ではAwesomeの統合dist全体を新しいID生成で再ビルドしていない。

一時的な2子・アラビア語/英語のグループを生成し、各子7ページをビルドした。隔離したChromeで、1440pxのRTL表示、Enterによるoverviewからwebへの移動、390px幅での横はみ出しなし、Enterによる同じweb文書の英語切替とLTR復帰を確認した。JavaScriptを無効にした新しいナビゲーションでもRTL本文と局所リンク2件が残る。スクリーンショットも目視確認した。

前回応答待ちだった実Awesomeのキーボード移動も別の隔離Chromeで再検証し、ESPからoverviewへの遷移、見出し「Awesomeリスト」、現在地「Awesome」、全366リンクの復元を確認した。ブラウザーツールの待ちも後に正常な遷移結果を返した。[プレビュー検証記録](./nested-app-migration/preview-validation.json)へ結果を追記した。

一時グループとその出力を削除し、検証前のlockfileを復元した。残る統合distの2,526ファイルは検証前と全バイト一致し、frozen/offlineのpnpm installも成功した。ログとローカル画像は `.tmp/nested-app-migration/` に保持する。正式な性能比較、管理CLI等の残存監査、全体品質ゲート、リモートCIと独立配信の判断は未完了。

## 2026-09-05: 独立配信の仕様再確認（設計準備）

Cloudflare公式の[Static Assets binding](https://developers.cloudflare.com/workers/static-assets/binding/)では `env.ASSETS.fetch(request)` による資産取得が可能で、照合にはURLのpathnameを用いる。[HTTP Service bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/http/)で振り分けWorkerから子WorkerへRequestを渡せることを確認した。これは候補構成のAPI上の根拠であり、libxでの配信実証ではない。

後続試作では公開パスと所有appの既存目録から振り分け情報を生成し、子のStatic Assetsには公開パスを保持したファイル集合を渡す。カテゴリだけのprefix振り分けは、同一カテゴリに複数appがある契約と合わないため採用しない。共通ナビ・検索・404・入口と、子別の資産経路を別所有として解決する。URL正規化、末尾スラッシュ、HEAD、query、存在しないパス、子移動、同時更新の検証が必要。

[Pagesの制限](https://developers.cloudflare.com/pages/platform/limits/)はFreeの20,000ファイル、単一資産25 MiB。ローカル出力2,526ファイル・最大約1.07 MiBはこの二つの制限内にあるが、公開時間や安定性の実証にはならない。総dist容量から転送量や所要時間を推定して独立配信を必須としない。まず検証済みartifactのPagesプレビューで、アップロード処理とビルドの時間、転送量、再試行を分離して記録する。未実施の外部公開をこの確認で完了扱いにしない。

## 2026-09-05: 移行後の全体・グループ再生成の計測

移行前と同じ採取方法、対象dist/.astro削除、依存キャッシュ維持で各1回計測した。[結果と条件](./nested-app-migration/README.md)と[機械可読レポート](./nested-app-migration/build-after.json)に保存した。全体180.842秒・2351.9 MiB RSS、Awesome全7子162.335秒・2238.2 MiB RSS。統合出力2526ファイル・185.37 MiB。両ケースで入力fingerprint不変を確認した。

移行前に対し全体時間は約21.3%増、最大RSSは約26.8%減、統合容量は約59.4%減。子分割による全体起動回数の増加とナビ変更等を含むため、単独施策の因果効果は断定しない。最大子の個別CLI/RSS、閲覧性能、公開処理の測定は残る。今回の計測で全appの出力は決定的DOM ID実装を含む状態へ更新された。

再生成後に117文書の相対リンク、smoke13件、成果物予算が成功した。移行前目録との2,074本文・出典・URL・本文アンカー・検索結果の照合も不一致零件。結果は `.tmp/nested-app-migration/measurement-after-evidence.json`、`latest-links.log`、`latest-smoke.log`、`latest-assets.log` に保存した。

## 2026-09-05: 設定loaderの同名子・キャッシュ検証

実際のTypeScript設定loaderをAstro fixtureから呼び、alpha/webとbeta/webを同じプロセスで読み込んだ。公開base・表示名が分離され、同じ実ディレクトリの正規化パスが同じキャッシュへ戻り、別の子とはオブジェクトも混同しないことを確認した。設定ファイル位置からの子root推定も検証した。`tests/runtime/config-loader-groups.test.js` が成功し、フェーズ1の該当項目を完了にした。共通検出側の同名子・root探索は既存app-registryテストが扱う。

全体lintとunit27件が成功した。管理設定の監査では各appのtsconfigに階層依存の相対参照が残るため、フェーズ2の深さ依存除去は完了にしない。個別測定用に計測器へ `--scenarios=selective` を追加し、不要な全体測定を繰り返さず対象子のCLIだけを測れるようにした。

## 2026-09-05: community・systemsの個別選択ビルド

全子の入力一致を揃えた後、communityは46.587秒・1513.9 MiB RSS、systemsは43.852秒・2276.4 MiB RSSで選択ビルドと統合が成功した。各ケースの入力fingerprint不変、builtは指定一子だけ、他10appの全出力バイトとmtimeが不変であることを確認した。[計測記録](./nested-app-migration/README.md)へ準備条件と比較の限界を含めて追記した。全体再生成の時間増加と、一子更新の負荷削減を別々に報告する。

今回の全体ゲートはlint、typecheck、unit27件、runtime166件、integrity（レイアウト30ファイル一致）、content、相対リンク、smoke13件、成果物予算が成功した。整形検査で移行生成の22ファイルに差分を検出し、7子のprepare.mjs・設定・tsconfigとgroup設定を整形した。15設定ファイルのJSON値が完全一致することを確認し、全体format:checkとlintを再実行して成功した。本文・出典ロックは変更していない。

ログは `.tmp/nested-app-migration/` の `current-unit.log`、`current-runtime.log`、`current-typecheck.log`、`current-integrity.log`、`current-content.log`、`individual-links.log`、`individual-smoke.log`、`individual-assets.log`、`current-format-fixed.log`、`format-fixed-lint.log`。書式変更は成果物の入力ハッシュへ反映されるため、次回再利用ビルドでは再生成される。今回の計測JSONが記録する入力fingerprintを現在値へ書き換えない。tsconfigの深さ依存、各子全件の負荷監査、リモートCI、独立公開などは引き続き未完了。

## 2026-09-05: app設定とコマンドの階層依存を除去

`@docs/config/astro.json` を公開し、全11appと正規テンプレートが同じ設定を継承するよう変更した。共有エイリアスはpackage内で一括管理し、局所 `@/*` はTypeScriptの `${configDir}` で利用側srcへ解決する。設定自身を基点とした共有package内の相対参照は維持する。新規生成器とAwesome移行ステージも同じ継承先を出力する。

全app・テンプレートのTypeScript設定を実際に解析し、局所navigationと共有i18n・project-config・content-utils・UIアイコンを期待する実ファイルへ解決するテストを追加した。TypeScriptはlockfileの5.8.3で検証し、5.5以降の機能要件とpaths上書きの注意を[作成ガイド](../guides/NEW_PROJECT_CREATION_GUIDE.md)へ記録した。

既存4単独appのprebuildをworkspace binへ移した。Lua・GLFWのコンテンツ検査はapp内の `check-content.mjs` から共通root探索で既存検査を起動する。検査の引数は維持した。apps/templatesのpackage・tsconfig・mjs・Astro・TS・CSSを対象とする固定階層のscripts/packages/config参照の残存検索は零件。

テンプレート7ページ、Awesome overview12ページ、Lua・GLFW・sample-docs・test-verificationのビルドが成功した。Lua/GLFWのコンテンツ検査、lint、型、整形、integrity（レイアウト30一致）、runtime167件も成功した。ログは `.tmp/nested-app-migration/` の `shared-tsconfig-template.log`、`shared-tsconfig-overview.log`、`depth-flat-builds.log`、`depth-content.log`、`depth-lint.log`、`depth-typecheck.log`、`depth-format-check.log`、`depth-integrity.log`、`depth-runtime.log`。グループ全体・統合distの再生成と公開検証はこの部分検証に含めない。

## 2026-09-05: サイドバーCLIの統合と不完全出力の防止

管理CLIの参照監査では、文書・版・言語・同期・検査は共通app一覧/ID解決へ接続済みだった。一方、全体サイドバー生成には選択版とは別の生成実装と、エラーを警告で済ませる経路が残っていた。全体版を共通一覧から通常appを選び、選択版へ処理を委譲する入口へ変更した。Awesome専用ルートは従来どおり専用生成器が所有する。

選択版で空のIDを拒否し、検出・Markdown解析の失敗をコマンドの失敗として返す。本文解析を含む生成処理をステージの後始末の範囲へ入れ、失敗時は既存サイドバーを残す。別rootの入れ子fixtureを子cwdから操作し、全体/選択のURLとバイト一致、壊れた設定・本文での非零終了、既存出力保持と一時出力の除去を確認した。

実データの初回照合は不一致だった。追加確認で、直前に生成したGLFWのapp distへ `sidebar-.en-check-5nBJ97-v3-5-1.json` が混入していることを確認した。コンテンツ検査の一時ディレクトリを言語として検出していたため、ドットで始まる版・言語ディレクトリを除外した。両方の一時ディレクトリを含むfixtureで、通常の英語索引だけが生成されることを検証した。通常4appの全サイドバーは直前のapp distとバイト一致し、全appのサイドバー43ファイルは再実行で不変だった。古いapp dist内の余分なファイルは今後の再ビルドで除去する。

全体sidebar生成、lint、整形、runtime169件が成功。ログは `.tmp/nested-app-migration/` の `sidebar-cli-tests.log`、`sidebar-audit-build.log`、`sidebar-audit-lint.log`、`sidebar-audit-format.log`、`sidebar-audit-runtime.log`、`sidebar-repeat.json`。管理CLIの項目全体は残る操作検証を確認してから完了判定する。

## 2026-09-05: 現行統合出力と管理操作の受け入れ確認

全12対象を現行入力で再生成・統合した。smoke13件、成果物予算（2526ファイル・185.37 MiB・最大1.07 MiB）、移行前2074本文等の照合が成功し、一時言語のJSONもdistから除去された。テンプレートも現行入力で再ビルドした。[現行ローカル検証](./nested-app-migration/current-local-validation.json)に子の入力ハッシュとグループ所有目録のハッシュを記録した。

別rootのfixtureで、グループ作成後に子cwdから文書追加、版追加、言語追加、サイドバー・検索生成を実行した。追加された本文・版・言語と公開URLを確認し、併存する単独appの全ファイルは不変だった。リンク変換のfixtureも実際の入れ子配置に更新し、版・言語・文書追加ガイドに子IDの使い方とAwesome専用生成器との境界を追記した。

公開所有はgroup-outputの実装と衝突・欠損・資産除去・入口/404・公開URL正規化のテストで確認した。UIは共通レイアウト、group-pagesの対応文書・版/言語選択テスト、既存ブラウザー記録で確認した。各Awesome子の本文importは自分の `/src/awesome-content/**/*.md` のみで、共通集約はページメタデータを扱う。これらと管理操作、全app/template検証の計画項目を完了にした。

runtime170件と変更テストのlint、ガイドの相対リンク検査が成功。主なログは `.tmp/nested-app-migration/` の `current-integrated-build.log`、`current-integrated-smoke.log`、`current-integrated-assets.log`、`current-integrated-evidence.json`、`current-integrated-runtime.log`、`current-template-build.log`、`nested-management-cli.log`。リモートCI・独立配信、全取得元パイプラインの残存監査、性能評価と公開/復旧手順の最終確認は継続する。

## 2026-09-05: 移行前artifactの復旧実演と残存参照の分類

移行前バックアップを保存目録の2074文書へ照合して成功し、旧統合出力2478ファイルをartifact化した。一時配信先でdistとmanifestを準備後に切り替え、全ハッシュ一致を確認した。現行distは変更していない。旧入口はHTMLリダイレクト形式で、旧Awesome ESP本文ともHTTP 200で取得できた。[復旧検証](./nested-app-migration/rollback-validation.json)と[手順](../guides/BACKUP_OPERATIONS_GUIDE.md)へ記録した。ブラウザーのService Worker切替と本番deploymentの選定は未検証なので、公開/復旧項目全体は完了にしない。

Awesome publisherの両版checkは365/672ページ・全7子で成功し、出典レジストリ7子、現行翻訳672/672も成功した。出典checkの最初の実行はsnapshot省略で拒否され、明示指定して再実行した。凍結済み出典・レビュー証拠のGit差分はない。

現行scripts/packages/config/workflow/testsで残る旧flat参照は3箇所で、freeze-awesome-reconciliationの過去Gitコミット内prefix、序文正規化の凍結済み判断記録を現在所有先へ解決する検証、移行前appを作るstageテスト。いずれも現在の本文生成先ではない。現行リンク変換fixtureは入れ子へ更新済みで、現行本文・出典・経路照合も成功している。生成器と残存固定パスの項目を完了とする。

## 2026-09-05: 全7子の比較とナビ容量の分離評価

全7子の選択CLIを同じ入力fingerprintで計測し、各回で入力不変を確認した。CLIは21.093〜46.067秒、RSS標本最大は885.7〜1961.2 MiB、最大子distは71.31 MiB。既存の全体計測では時間が増加しているため、7子を初期構成として確定し、更新対象の限定とメモリ負荷の抑制を採用理由にした。入力や環境の異なる旧2子の個別計測も履歴として保持する。

同じ2074文書のHTMLサイドバーと別ファイルのナビを合計し、289994436→5292996 bytes、差284701440 bytesを確認した。容量削減はナビ共有化の寄与が大きく、ディレクトリ分割の効果と区別する。[計測まとめ](./nested-app-migration/README.md)へ範囲と限界を追記し、分割確定・性能比較の項目を完了とした。

リモートの現作業ブランチはHEADと同じ4cd36feで、手元の変更はまだ未コミット。現ブランチ名はプレビュー公開を起動するworkflow条件に該当する。リモートCIの検証準備ではこの条件を考慮し、意図せずプレビュー公開へ進めない。外部状態を変更する操作は今回行っていない。

## 2026-09-05: ブラウザーでの新旧切替とCLIヘルプ

隔離Chromeとループバック配信で、同一origin・Awesome ESP URLを新構成→移行前artifact→新構成へ切り替えた。各回でService Workerのcontroller更新を待ってオンライン再読込し、本文見出し、旧ナビへの切替、新全体ナビ366リンクへの復帰、壊れた画像零件を確認した。他app用のscope名に事前投入したキャッシュ値は両切替で残った。[検証記録](./nested-app-migration/rollback-browser-validation.json)を保存した。現行distと外部公開先は変更していない。オフラインのみの復旧や全appの実操作の網羅は、この検査の対象外。

全体/選択ビルドと統合previewに `--help` と未知引数の事前拒否を追加した。3CLIについてヘルプは成功終了、未知引数は失敗終了し、ビルド・配信を開始しないことを検証した。変更コードのlintも成功した。root README、docs目次、管理ガイド、Awesome README、正式原則・ADRへの反映を再確認し、関連する文書・CLIヘルプ項目とローカルの公開/復旧準備項目を完了にした。本番への切替は実施していない。

## 2026-09-05: 品質CI起動と独立配信の目録試作

利用者がコミット82234a4と送信先を明示承認した後、`codex/quality/nested-app-groups`へpushした。[GitHub Actions実行33951907929](https://github.com/dolphilia/libx/actions/runs/33951907929)は、依存導入・共有生成・静的解析・テスト・本文検査・テンプレートビルドを通過し、統合ビルドを実行中。現時点ではCI完了・キャッシュ再利用の成功を主張しない。このpushのworkflow条件ではCloudflareデプロイを実行しない。

独立配信用の生成処理を`experimental`に追加した。所有目録から子と共有データを分け、所有者と内容から配信先名を生成する。一子更新時の他単位不変、順序非依存、所有違反・欠損・変更・余剰・symlink拒否の4テストとlintが成功した。既存Awesomeの統合済み2,150ファイルを照合し、7子と共有データの8単位を生成した。[試作記録](./nested-app-migration/INDEPENDENT_DELIVERY_PROTOTYPE.md)へ結果と次の検証条件を記録した。ルーティングWorkerと公開操作はまだ実装・実行していない。

## 2026-09-05: リモート品質CI成功と独立Workerの全件照合

[初回リモート品質CI](./nested-app-migration/remote-quality-ci-first-run.json)が成功した。両デプロイジョブはskipped。詳細ログ取得は未認証のAPIでHTTP 403となったため、厳密なbuilt/reused件数と次回キャッシュ復元は未検証。対象コミットは82234a4で、以後のローカル試作はこのCIに含まない。

所有目録から生成したStatic Assets＋名前付きAssetDelivery＋入口Workerを、最新Wranglerの9個の独立ローカルプロセスで検証した。全2,150ファイル、173,274,929 bytesが入口経由でハッシュ一致し、追加24経路ケースと404/405も成功した。5テスト、lint、公式CLIによる型生成も成功した。一括multi-config起動での上流500は再現条件として残した。[試作記録](./nested-app-migration/INDEPENDENT_DELIVERY_PROTOTYPE.md)へ条件と限界を追記した。外部デプロイは実施していない。コード・設定を含めたリリース固定と公開・切替検証を次に進める。

## 2026-09-05: CIキャッシュ復元の原因特定とWorker梱包固定

既存Git認証で初回CIログを取得し、キャッシュなしから12対象生成を確認した。同じ82234a4を再実行した2回目も成功したが、11対象再利用・test-verificationだけ再生成だった。本文契約テストが通常distへビルドし、復元したキャッシュと異なる名前のJSが混在する経路を確認した。契約テストのoutDirを一時ディレクトリへ分離し、通常distの全ファイルハッシュとmtimeが変わらないことを検査して成功した。修正後のリモート確認は未実施。

Workerの識別子へ実コード・設定・CLI版・梱包処理を加え、封印済み梱包の外部ハッシュによる全件照合を追加した。7テストとlint、実データ2,171ファイルの梱包照合、最新Wrangler dry-runが成功した。配信先上の同一性・切替・旧資産保持はまだ検証していない。

CI出力分離と初回・2回目の検証記録をコミット5a17379へ分け、既存の品質専用ブランチへpushした。[修正後CI 33953939873](https://github.com/dolphilia/libx/actions/runs/33953939873)の起動を確認した。Worker試作やその計画追記はローカル作業として残しており、このコミットには含めていない。

## 2026-09-05: CI受け入れ完了とPagesプレビュー承認待ち

修正後CI 33953939873が成功し、12対象すべてを再利用、再生成0と確認した。保持されている修正前の2回目artifactと修正後artifactを取得し、各artifactの目録と全ファイルをハッシュ照合したうえで、公開2,526ファイルのパス・サイズ・SHA-256が全件一致した。初回artifact 9965249743は再実行後にAPI 404だったため、初回キャッシュなし生成は保存済みログを証拠とする。フェーズ4のCI受け入れ項目を完了にした。

次に5a17379を既存Pagesプロジェクトlibxの`nested-app-migration-validation-5a17379`へプレビュー配信して公開コストを測る操作を準備した。自動承認レビューは、従前の承認がCloudflareへデプロイしない品質確認の範囲であるとしてworkflow起動を拒否した。操作は実行されておらず、具体的なプレビュー対象について利用者の承認を依頼した。Worker試作と本番mainはこの公開対象に含めない。


## 2026-09-05: 承認済みPagesプレビュー配信成功

利用者からPagesプレビューの承認を受け、コミット5a17379・既存プロジェクトlibx・検証用branch `nested-app-migration-validation-5a17379`を指定したworkflow 33954776258を起動した。品質チェックとdeploy-previewが成功し、deploy-productionはskipped。公開URLは https://eabcd13f.libx.pages.dev 。品質ジョブ365秒、配信ジョブ56秒、配信コマンドのstep18秒。Wranglerは2391件アップロード・135件既存・10.65秒と報告した。統合ビルドは12対象再利用・再生成0、step28秒だった。公開内容のHTTP全件照合は別途進める。

独立配信の試作では前世代の封印済み梱包から旧アセットの経路を継承する処理を追加し、3世代保持・削除本文404・同一URL内容差し替え拒否を含む9テストが成功した。外部Workerへは配置していない。


## 2026-09-05: Pages公開内容の全件照合

[プレビュー配信記録](./nested-app-migration/pages-preview-deployment.json)のartifact 9966066729を取得し、GitHubのZIPハッシュ、目録、全ファイルを検証した。公開URLからcurl・並列8で全2526ファイル（194378646 bytes）を取得し、目録のSHA-256と全件一致した。[HTTP検証記録](./nested-app-migration/pages-preview-http.json)にHEAD、308別名・クエリ保持、Awesome専用404の結果も保存した。照合時間281.939秒は外部から全本文を読み戻した検証時間であり、18秒の配信時間とは区別する。

最初のPython urllibによる取得は全件403、curlは全件成功した。クライアントによる差を観測したが、原因をCloudflare設定やネットワークへ断定しない。今回は一つのプレビューの成功であり、長期の安定性を保証するものではない。

計画書では統合Pages公開コストの判断と、所有目録からの公開先・経路生成を完了にした。独立配信の外部検証、公開・復旧・同時更新の制御は未完了。試作の関連10テスト、lint、文書リンク検査は成功しており、Worker試作は引き続きローカル作業として分離している。


## 2026-09-05: 独立配信の公開制御と復旧梱包

公開処理をdriverから分離した制御を追加した。変更単位の先行配置・検査、保持アセットの確認、入口候補の準備と検査、基点の再照合、最後の入口切替を順に実行する。同じ状態ディレクトリのプロセス間lock、古い基点の拒否、部分失敗後の既存単位再利用、切替応答喪失時の未確定記録と肯定的な配置先照合を実装した。別Nodeプロセスからの競合拒否も確認した。

復旧は、検証済み旧梱包の本文・ナビ・コード・設定を戻しつつ、現在世代のHTMLが参照する新資産も保持する新しい梱包を作る。fixtureで旧本文復帰・新本文404・新旧JS取得、現在基点の確認、旧単位再利用を確認した。関連18テストとlintが成功。計画書の公開順・削除・復旧定義を完了にした。

[試作記録](./nested-app-migration/INDEPENDENT_DELIVERY_PROTOTYPE.md)へdriverの契約と保証範囲を追記した。制御テストは試験用driverによるもので、実Cloudflareの配置・検証driverとCI全体の直列化は未実装。独立配信の外部プレビュー・障害・復旧検証は未完了として維持する。


## 2026-09-05: Cloudflare状態読取とWrangler版操作の接続準備

公式API資料、最新Wrangler 4.129.0のCLIヘルプと実装を確認し、現在deployment・版・互換設定・bindingを読む処理と、公式CLIの版アップロード/切替を起動する処理を追加した。認証や通信の失敗を不存在と誤認しないこと、想定外の版やbindingを拒否すること、CLIの機械可読出力を照合すること、失敗時に自動再送しないことを8テストで確認した。

外部Worker操作は実行していない。実driverには、検証済み梱包と配置先版IDを結ぶ記録、本文のHTTP照合、プレビュー用設定、CI直列化の接続が残る。根拠と境界を[試作記録](./nested-app-migration/INDEPENDENT_DELIVERY_PROTOTYPE.md)へ追記した。フェーズ7の残る外部検証項目は完了にしていない。


## 2026-09-05: 独立配信driverと操作CLIの結合

公開制御へCloudflare API読取、Wrangler版操作、配置記録、ストリームHTTP照合を結合した。記録のない既存Worker・アップロード済み版を拒否し、配置済み版とローカルの封印済み梱包を照合する。CLIに梱包・復旧梱包・検証・status・publish・reconcileを追加した。Wranglerは操作用コピーで実行する。

結合テストで、一子更新はその子と入口だけ、復旧は入口だけをアップロードした。復旧後の旧本文・新JS取得、配置記録欠落・本文改変・切替応答喪失も検証し、関連30テストとlintが成功した。APIとCLIは試験用実装であり、実際のCloudflare外部配信ではない。

AwesomeのCLI梱包2171ファイルと入口dry-runを確認した。相対outdirによる梱包への2ファイル混入を封印照合が拒否し、限定除去と絶対outdirでの再実行後に原ハッシュへ全件一致した。[実データ記録](./nested-app-migration/independent-workers-cli-package.json)へ保存した。CI接続と外部Worker検証は継続する。


## 2026-09-05: 独立WorkerのCI接続

既存workflowの手動選択肢から再利用workflowを呼ぶ経路を追加した。グループ単位で準備から公開まで直列化し、直前の手動runから梱包・配置記録・未確定記録を引き継ぐ。準備はCloudflareへ接続せず、公開・復旧は確認済み梱包SHAと再生成結果が一致することを必須にした。復旧準備と未確定照合も同じ経路に接続した。通常のpush/PRでWorker公開は起動しない。

CI補助4テスト、actionlint 1.7.12、全体の整形・lint・型検査、unit27件が成功した。runtimeは206件中205件成功、統合previewのlistenだけがsandboxのEPERMで失敗したため、そのファイルの2テストを権限調整して再実行し成功した。後から追加した確認済みSHAの拒否テストも成功した。相対リンク、repository integrity、カテゴリ構造、レイアウト30一致も確認した。

[操作ガイド](../guides/INDEPENDENT_GROUP_WORKERS_PREVIEW_GUIDE.md)に入力、前回runの選定、復旧、状態保持期限と未確定時の手順を記録した。リモートCIと独立Workerの外部検証は引き続き未実施。

コミット9e3e1e7を品質専用ブランチへpushし、[品質CI 33958570359](https://github.com/dolphilia/libx/actions/runs/33958570359)と[Worker梱包準備CI 33958682021](https://github.com/dolphilia/libx/actions/runs/33958682021)を起動した。品質CIは静的解析・テスト・本文検査・テンプレートビルドを通過し、準備CIは品質検査中。両実行の完了はまだ確認していない。準備CIはCloudflareへ接続せず、既存Pagesの両配信jobもskippedだった。


## 2026-09-05: 梱包準備CIの履歴取得を修正

準備CI 33958682021は履歴版レビュー証拠のテストで失敗した。再利用workflowが既定の浅いcheckoutを使用しており、過去コミットのレビュー記録をgit showできなかった。同コミットの通常品質CIは全履歴を取得しており、このテストを通過していた。準備jobもfetch-depth: 0へ変更した。テストの省略や証拠の差替えは行っていない。[失敗記録](./nested-app-migration/worker-prepare-first-run.json)を保存した。外部Worker配信はskipped。


## 2026-09-05: 独立Workerの品質CI・梱包準備CIが成功

[品質CI 33958570359](https://github.com/dolphilia/libx/actions/runs/33958570359)、修正後c9bb3ffの[品質CI 33958950361](https://github.com/dolphilia/libx/actions/runs/33958950361)、[梱包準備CI 33958974958](https://github.com/dolphilia/libx/actions/runs/33958974958)が成功した。各実行でunit 27件・runtime 207件が全件成功。通常品質CIは統合ビルド・smoke・成果物予算も通過し、c9bb3ffでは12対象を再利用した。[CI記録](./nested-app-migration/worker-ci-success.json)へログハッシュとjob結果を保存した。全実行で外部配信jobはskipped。

準備artifact 9967394646を取得し、ZIPのSHA-256をAPIとアップロードログに照合した。準備ログの梱包SHAを外部期待値として全2,171ファイル・174,594,684 bytesのパス・サイズ・SHA-256が一致した。公開対象は2,150ファイル・173,274,929 bytes、7子＋共有の8単位と入口Worker。配信先・コミット・SHA・操作範囲を[初回配信候補](./nested-app-migration/WORKER_PREVIEW_PUBLICATION_CANDIDATE.md)に固定した。独立Workerの外部配置は未実行で、Pages承認とは別の確認を必要とする。


## 2026-09-05: 配信待ちの受け入れ根拠監査

計画第8節の15ケースについて、テスト内のassertionと保存済み検証資料を確認し、[根拠一覧](./nested-app-migration/ACCEPTANCE_EVIDENCE_INDEX.md)へ範囲と境界を記録した。古いJSONは当時の記録として維持し、計画冒頭の現状表示だけ更新した。配信候補の公開パス誤記を修正し、実artifactのpublicBase `/docs/awesome` を検証記録へ追加した。コードや配信成果物は変更していない。文書リンクと変更JSONの整形検査が成功した。独立Worker配信は承認待ち、計画全体は未完了。


## 2026-09-05: 独立Worker初回プレビューの承認と起動

利用者が確認済み候補の9 Worker初回配信を承認した。コミットc9bb3ffと梱包全2,171ファイルを再照合し、リモートブランチのHEADと品質CI成功を確認して[run 33959850978](https://github.com/dolphilia/libx/actions/runs/33959850978)を起動した。worker_package_shaは07b2c21ce9dda7e8a149f26cfa90def36ef58301d11fa021ea694ecd3b91d3ac、初回基点none。品質検査成功、グループビルド進行中。配信完了はまだ確認していない。

初回配信はaccount IDの空値によりAPIクライアント初期化で停止した。GitHubのsecret名一覧でrepoにはAPI tokenのみ、preview環境にはsecretなしと確認。既存Wranglerのlibx用アカウントキャッシュから不足するpreview用account IDを新規登録した（HTTP 201）。ローカルAPI tokenはなく、ローカルからの配信一覧確認はできなかった。[初回記録](./nested-app-migration/worker-preview-first-attempt.json)に保存した。

同じrunの失敗jobだけを再実行した2回目は、account ID・token双方の受渡しを確認できたが、入口のdeployments読取APIでHTTP 403となった。Worker作成・版アップロードへ進む前に停止しており、配置記録も未作成。トークンの実権限や対象アカウント範囲はGitHubから参照できないため、どちらが原因か断定しない。[2回目記録](./nested-app-migration/worker-preview-second-attempt.json)に保存した。承認は継続して有効だが、次の再試行にはトークン権限・対象アカウント設定の確認が必要。


## 2026-09-05: トークン設定後のCLI実行環境を修正

利用者の設定完了後、run 33959850978の失敗jobを再実行した。3回目は最初のAPI読取を通過し、version-uploadのCLI起動で失敗した。CIログのNode 20.20.2と、固定Wrangler 4.129.0のengines >=22・起動時最低版検査の不整合を確認。publish jobだけNode 24へ変更し、公開前にWrangler版を表示するstepを追加した。準備ビルドのNode版と公開payloadは変更しない。actionlintと整形検査が成功した。

[3回目記録](./nested-app-migration/worker-preview-third-attempt.json)と状態artifact 9968359563を照合した。journalはfailed-before-promotion、uploaded/reusedは空、candidateなし。生CLI stderrは従来のCI artifact対象外だったため直接のエラー文は保存されていない。次のrunは同じ梱包SHAと前回run指定で状態を引き継ぎ、配置先を読み直してから進む。


## 2026-09-05: Node修正後のCLI診断を保存

修正コミットcce2c55の配信run 33962699470は準備・同一梱包SHA照合・Wrangler版確認・前回状態引継ぎに成功したが、最初のversion-uploadで失敗した。状態artifact 9968518454は2件の失敗journalのみで、配置済み版の記録はない。Node版の修正だけでは配信完了に至らず、生CLI出力を保存していなかったため次の原因を特定できなかった。

Wrangler呼出し失敗時の終了コード・signal・stdout/stderrを各8,000文字以内に制限し、token・account ID・環境中の認証値・Bearer値を除去した診断JSONをstate artifactへ保存するよう修正した。生debug logや操作コピーは引き続き保存対象外。CLI関連5件、公開制御・driver10件のテストとlintが成功した。公開payloadは変更しない。


## 2026-09-05: 未作成Workerへのversions uploadを修正

診断対応run 33963192075のstate artifact 9968690995（SHA-256 a25a5760f833e0382fe85b29f9220fdd9beb74b6e711874d95c9d230c400928c）から、未作成Workerにはversions uploadできず最初にdeployが必要というCLIエラーを取得した。API読取の403は解消している。

初回のみ同じWorker名に、本文・資産・bindingを持たず503/no-storeを返す初期版をdeployする処理を追加した。コードと設定から初期版revisionを計算し、APIで版・etag・設定を照合して作成記録を保存する。記録と一致する初期版だけを未公開状態として扱い、その後の通常版をHTTP照合して最後に切り替える。未知の既存Workerや記録なしの作成結果は採用しない。初期作成の応答喪失も自動再送しない。

結合テストのCLIを実Cloudflareの初回作成要件に合わせ、初期版503・bindingなし、初期作成後のアップロード失敗からの再開、一子更新と復旧、既存Workerの記録欠落拒否を確認した。関連9テスト成功。外部再検証は継続する。


## 2026-09-05: 独立Worker初回プレビュー配信成功

コミット6031543のrun 33963924574が成功した。承認済み梱包SHAを維持し、9個の初期Workerを作成、8配信単位の各ファイルと入口の全2,150公開ファイルを実HTTPでSHA-256照合してから入口を有効化した。APIでactive version 659ca134-531b-4059-9634-8fc302e5e5c5、deployment 71c91162-a23c-487c-a885-35a3d3387e6eを確認した。公開URLは https://659ca134-libx-preview-705db0603fd54314.miga-and-raia.workers.dev/docs/awesome/ 。

[配信記録](./nested-app-migration/worker-preview-deployment.json)と状態artifact 9968942508のハッシュを保存した。curlによる追加HTTP確認27件で、各配信単位の本文ハッシュ、HEAD、index別名308・クエリ保持、404本文、405、no-store・revisionヘッダーが成功した。[HTTP記録](./nested-app-migration/worker-preview-http.json)を保存し、計画の初回独立配信・経路・資産検証項目を完了にした。外部での一子更新・同時公開・部分失敗・キャッシュ・旧資産保持と復旧はまだ未完了。本番Pagesと本番ドメインは切り替えていない。

## 2026-09-05: 統合Pagesの本番公開を準備

利用者の本番デプロイ指示を受け、標準方式である統合Pagesを選択した。GitHub production環境と確認済みaccount IDを設定。現行本番の復旧先を公開前にartifact保存し、直前のID再確認と公開後のcommit照合を追加した。状態記録は公開情報だけに絞り、環境変数を含むAPI応答全体は保存しない。[本番手順](./nested-app-migration/PAGES_PRODUCTION_RUNBOOK.md)に復旧方法と外部更新との競合の限界を記録した。
