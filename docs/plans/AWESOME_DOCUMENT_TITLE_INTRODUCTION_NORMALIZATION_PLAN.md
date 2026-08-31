# Awesome文書 タイトル・序文整理計画

- 作成日: 2026-08-30
- 対象アプリ: `awesome`
- 対象版: `v2026-08-20`、`v2026-08-23`
- 対象言語: 英語、日本語
- 対象文書数: 2,074文書
- 主対象: `v2026-08-23`の英日672組
- 定本言語: 英語
- 状態: `completed`
- 先行計画: `AWESOME_LIST_IMPORT_TRANSLATION_COMPLETION_PLAN.md`（完了済み・履歴として保持）

## 1. 計画の位置付け

本計画は、libx内で公開するすべてのAwesomeリスト文書について、文書冒頭のH1タイトルから目次または本文開始点の直前までを、統一されたタイトルと簡潔な概要文へ整理するための実行計画である。

理想形は、`overview/sindresorhus-awesome`と同様に、装飾のないH1と、主題を短く説明する一段落だけで始まる構成とする。

```markdown
# Awesome Lists

A curated directory of Awesome lists spanning technology, science, business, culture, and more.

## Contents
```

```markdown
# Awesomeリスト

技術、科学、ビジネス、文化など、幅広い分野のAwesomeリストを集めたディレクトリです。

## 目次
```

本作業は上流スナップショットの本文取得、ライセンス判定、翻訳完遂とは別の「libxでの表示正規化」として扱う。上流の固定入力は変更せず、何を置き換え、何を除外または移動したかを版別の機械可読記録へ残す。

## 2. 目的

1. 各文書を、原則として`Awesome ◯◯`形式の単一H1で開始する。
2. H1直後を、主題と収録範囲が分かる一段落・1〜2文の概要に統一する。
3. 冒頭からロゴ、スクリーンショット、バッジ、中央揃え、装飾用HTML、重複タイトル、スポンサー表示などを除く。
4. 警告、適用範囲、利用条件などの重要情報は消さず、概要へ要約するか、本文内の適切な位置へ移す。
5. 英語と日本語の意味を対応させ、URL、本文構造、リスト項目、コード、出典、ライセンス情報を壊さない。
6. 変更を固定入力と版別判断から決定的に再生成できるようにする。
7. タイトルと概要をfrontmatter、検索インデックス、HTMLメタデータへ一貫して反映する。

## 3. 対象範囲

### 対象

| snapshot | 英語 | 日本語 | 合計 |
| --- | ---: | ---: | ---: |
| `v2026-08-20` | 365 | 365 | 730 |
| `v2026-08-23` | 672 | 672 | 1,344 |
| 合計 | 1,037 | 1,037 | 2,074 |

対象にはoverview、全文収録ページ、metadata-only案内ページを含む。生成専用のルートリダイレクト、404、サイドバーJSON、検索JSONは本文の対象ではないが、派生生成物として再生成・検証する。

### 変更する領域

- frontmatterの`title`と`description`
- 文書先頭のH1
- H1直後から目次または本文開始境界の直前まで
- 冒頭から移動する必要がある重要情報の移動先
- 正規化を再現するスクリプト、監査記録、回帰テスト

### 原則として変更しない領域

- URL slug、snapshot ID、カテゴリ、`licenseSource`
- 目次以降のリスト本文と掲載順
- 外部URL、内部URL、アンカー、コード、表、画像のうち本文中にあるもの
- 上流取得物、commit SHA、ライセンス証拠
- サイドバーの短いナビゲーション名。ただしタイトルとの不整合が利用上問題となる場合は別判断として記録する。

## 4. 実施前ベースライン

2026-08-30時点のMarkdownを簡易走査した結果は次のとおりである。raw HTMLによる見出しや独自の目次を完全には認識しない暫定値であり、フェーズ0のMarkdown AST・HTML併用監査で正本値へ置き換える。

| 対象 | 文書 | Markdown H1なし | H1が`Awesome`系でない | 装飾付きH1 | 冒頭画像 | 中央揃え | 目次未検出 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `v2026-08-20/en` | 365 | 41 | 78 | 288 | 183 | 51 | 60 |
| `v2026-08-20/ja` | 365 | 41 | 135 | 301 | 182 | 51 | 62 |
| `v2026-08-23/en` | 672 | 73 | 210 | 466 | 307 | 82 | 202 |
| `v2026-08-23/ja` | 672 | 73 | 282 | 482 | 306 | 82 | 203 |

最新版では、冒頭領域が500文字を超える文書が英語339、日本語256あり、2,000文字を超える文書も英語63、日本語51ある。画像、リンク、リスト、複数見出し、HTMLレイアウトを含む序文が多いため、行数や最初の`##`だけを使った一括削除は禁止する。

## 5. 完成形の規則

### 5.1 H1タイトル

- frontmatter直後の最初の本文要素を、装飾のないMarkdown H1とする。
- H1は原則として`Awesome <Topic>`の形にする。日本語でも`Awesome <主題>`を基本とし、自然な既存名では`Awesomeリスト`のような形を認める。
- `awesome-foo`、`FOO Awesome`、リポジトリ名、ロゴだけのH1は、読者向けの`Awesome Foo`へ正規化する。
- バッジ、画像、リンク、絵文字、HTMLタグ、改行、バージョン番号、宣伝文句をH1へ含めない。
- `Awesome Awesome Selfhosted`のような重複を作らない。
- 製品名、固有名詞、略語の正式表記を維持する。日本語化が定着していない製品名を無理に訳さない。
- 原則から外れる必要がある文書は、理由付き例外として版別判断ファイルへ登録する。

### 5.2 概要文

- H1直後に一段落だけ置き、英語・日本語とも1〜2文とする。
- 何に関するリストか、主な収録対象は何かを簡潔に説明する。
- 英語はおおむね12〜45語、日本語はおおむね30〜120文字を目安とする。機械的な長さだけで合否を決めず、固有の適用範囲や重要な制約を優先する。
- 上流の序文と実際の収録内容に基づき、未確認の評価、最新性、網羅性、品質保証を追加しない。
- 原則として画像、バッジ、リンク、リスト、表、コードブロック、脚注、raw HTMLを含めない。
- 英日で主題、対象範囲、重要な制約を対応させる。直訳ではなくても情報量を不当に増減させない。
- frontmatterの`title`はH1と一致させ、`description`は概要文と同じ意味のプレーンテキストにする。

### 5.3 冒頭から除くもの

- ロゴ、ヘッダー画像、スクリーンショット、装飾画像
- Awesome、CI、coverage、license、chat、starsなどのバッジ列
- `<div align="center">`、`<p align="center">`、`text-align:center`などの配置指定
- 重複タイトル、ASCIIアート、空のHTMLコンテナ、改行用`<br>`
- SNS、チャット、寄付、スポンサー、キャンペーン、作者の他製品への誘導
- 自動生成された雑多なナビゲーションや、概要として不要なステータス情報

除去した断片は、固定入力に存在していたことと除去理由をハッシュ付きで記録する。上流ファイルそのものは変更しない。

### 5.4 削除せず扱いを判断するもの

次の情報は「雑多」に見えても自動削除しない。

- セキュリティ警告、非推奨・アーカイブ状態、対象バージョン
- リストへの掲載条件、対象外範囲、利用上の前提
- ライセンス、帰属、商標、引用条件
- 主題理解に必要な図、凡例、用語説明

概要に必要なら短く要約し、詳細が必要なら目次後の既存節または新設する`About`相当の節へ移す。MainLayoutの出典・ライセンス表示で代替できる情報は重複表示しない。移動はURL・アンカーへの影響を確認し、判断ファイルへ`retain`、`summarize`、`relocate`、`exclude`のいずれかを記録する。

## 6. 冒頭領域の境界規則

文書ごとに、次の優先順で正規化対象の終端を決める。

1. `Contents`、`Table of Contents`、`目次`、`TOC`などと判定できる目次見出しの直前
2. 目次がない場合は、最初の実質的なH2節の直前
3. H2がない場合は、リスト本体、表、定義一覧、コード主体の資料など、最初の主要コンテンツブロックの直前
4. metadata-only案内ページは専用テンプレートの境界規則を使う

境界検出にはMarkdown ASTに加えてraw HTML見出し、details、HTML表、参照形式画像を考慮する。検出結果には信頼度を持たせ、低信頼度の文書は自動変更せず手動分類へ送る。

各変更では、境界以降の本文ハッシュが変更前と一致することを必須とする。重要情報を移動したページだけは、移動元断片、移動先、移動後本文ハッシュを明示して例外扱いする。

## 7. 正本と再生成方式

英語定本は`.tmp/document-import/awesome/snapshots/<version>/03-normalized`から公開用本文へ生成されるため、`apps/awesome/src/awesome-content`だけを手編集して完了としない。

次の版別成果物を追加する。

- `docs/notes/document-import/awesome/snapshots/<version>/INTRODUCTION_AUDIT.json`
- `docs/notes/document-import/awesome/snapshots/<version>/INTRODUCTION_NORMALIZATION.json`
- `docs/notes/document-import/awesome/schemas/introduction-normalization.schema.json`
- `scripts/importers/awesome/audit-awesome-introductions.mjs`
- `scripts/importers/awesome/normalize-awesome-introductions.mjs`

`INTRODUCTION_NORMALIZATION.json`には少なくとも次を記録する。

- snapshot、sourceId、repository、category、英日パス
- 変更前H1、変更前冒頭断片のSHA-256、境界種別、境界以降のSHA-256
- 正規化後の英日H1、英日概要、frontmatter title・description
- 冒頭ブロックごとの`retain`、`summarize`、`relocate`、`exclude`
- 例外理由、継承元snapshot、レビュー状態

正規化処理は次の性質を持たせる。

- `--snapshot=<version>`を必須とし、暗黙の最新版を使わない。
- `--check`は読み取り専用で、未適用、古い境界ハッシュ、規則違反を検出する。
- 更新は一時領域で生成・検査してから原子的に反映する。
- 同じ入力と判断ファイルから同じ出力を生成し、二回目の実行で差分を作らない。
- 英語ではimport後の正規化済み定本へ判断を適用し、`awesome:publish --check`と一致させる。
- 日本語では対応する英語判断と日本語概要を一組として適用し、英日構造検査を維持する。
- 既存snapshotを再生成しても、別snapshotの本文や判断ファイルを上書きしない。

## 8. snapshot間の重複処理

実作業は2,074ファイルを無条件に別々に書き直さず、672個の最新版sourceIdを中心に英日ペアで行う。

- `v2026-08-20`と`v2026-08-23`でsourceId、冒頭断片ハッシュ、境界以降ハッシュが一致する場合だけ、タイトル・概要判断を継承できる。
- ハッシュが異なる場合は、同じrepositoryでも別判断とする。
- 継承時も版別JSONへ継承元と検証ハッシュを記録し、履歴版を新版ファイルへ実行時依存させない。
- metadata-onlyと全文収録の状態が版間で異なる場合は継承しない。
- 履歴版URL、カテゴリ、出典、本文内容は維持する。

## 9. 実施フェーズ

| フェーズ | 状態 | 完了条件 |
| --- | --- | --- |
| 0 全件監査と境界固定 | `completed` | 2,074文書を分類し、低信頼度・例外・重複関係を確定 |
| 1 規則・schema・変換器 | `completed` | 判断JSON、監査、正規化、`--check`、契約テストが成立 |
| 2 多様性パイロット | `completed` | 代表パターンで英日・両snapshot・再生成性を検証 |
| 3 最新版672組の整理 | `completed` | `v2026-08-23`英日全件が完成形規則へ合格 |
| 4 履歴版365組の整理 | `completed` | 安全な継承と個別判断により履歴版全件が合格 |
| 5 全件回帰・レビュー再固定 | `completed` | 派生生成物、監査、レビュー証拠、ビルドが整合 |
| 6 Preview検証 | `completed` | 軽量化後の同内容をCI Previewへ配置し、外部表示と配置時間を確認 |
| 7 Production公開・記録閉鎖 | `completed` | 明示承認後に公開し、証跡とロールバックを記録 |

### 2026-08-30 ローカル実施結果

- `v2026-08-20`は英日730文書、`v2026-08-23`は英日1,344文書、合計2,074文書を正規化し、未解決・例外は0件となった。
- 最新版56件のmetadata-only文書には専用概要を適用した。非推奨・アーカイブ等の重要状態は、履歴版10件、最新版15件で概要へ保持した。
- Markdown、日本語の`目次`・`索引`、setext見出し、RST `contents`、目次見出しのない本文を含む境界検出を契約テストで固定した。
- 履歴版365件のうち347件は、冒頭断片と保持本文のハッシュ一致を確認して最新版の判断を継承した。残りは履歴版固有判断として固定した。
- 英日翻訳検証は365/365と672/672、canonical検証は履歴版365件、最新版616件とmetadata-only 56件で合格した。
- 機械監査とレビュー証拠を再生成し、履歴版419件、最新版761件を現行の自動証拠レビューへ結び直した。人手による自然さの確認を意味しない。
- Awesome単体2,082ページ、Awesome選択ビルド、landing選択ビルド、links、integrity、runtime 94件、smoke 13件、deployment-assets、`git diff --check`が合格した。
- ローカル実ブラウザでは英日overview、metadata-only、HTML由来、目次なし、RST由来、履歴版、最大級ページを確認した。タイトル・概要・meta description・検索結果は一致し、序文内画像・中央揃えは0だった。
- 最大級のZsh Pluginsページで、長いインラインコードによるモバイル横方向overflowを検出したため、共通テーマへ安全な折返しを追加した。390×844で`scrollWidth=clientWidth=375`、横方向overflow 0を再確認した。
- 最終統合ビルド後のPreview候補`dist`は4,754ファイル、646.00 MiB、成果物ツリーハッシュ`dd9ff0d27b5ee657c7dac2afb93ecacdb2b42b306426bc56eeb7e8164961cf9a`として固定した。
- 固定入力から現行英語定本を再importすると、履歴版241件、最新版242件で序文以外にも既存差分があることを検出した。これは本計画と無関係な先行作業の影響であり、正規化器は保持本文ハッシュ不一致として上書きを停止する。対象は`INTRODUCTION_IMPORT_DRIFT.json`へ記録し、今回の公開候補へ無断で混入させていない。

### 2026-08-31 Preview・配信改善結果

- 管理者承認済みの4,754ファイル、646.00 MiB、ツリーハッシュ`dd9ff0d27b5ee657c7dac2afb93ecacdb2b42b306426bc56eeb7e8164961cf9a`をCloudflare Pages Previewへ配置した。
- deployment IDは`cfc7aff9-c346-4d0a-99c7-07d101a784f6`、固有URLは`https://cfc7aff9.libx.pages.dev`。4,176件を新規送信、578件を再利用し、asset uploadは1,620.79秒で完了した。
- overview、metadata-only、RST由来、最大級ページ、英日切替、最新版リンク、検索、390×844表示を検証し、内容候補は合格した。Productionは変更していない。
- 遅延対策として、HTML等から到達不能なAstro静的生成用JavaScript 2,276件、189.90 MiBを統合時に除外する処理と契約テストを追加した。
- 軽量化後は2,478ファイル、456.10 MiBとなり、ファイル数47.9%、容量29.4%を削減した。runtime 95/95、smoke 13/13、配信予算、ローカル実ブラウザの検索・最大級ページに合格した。
- 軽量化後のツリーハッシュは`a2d0291f55105504852abe63d26d1a76ca82e9a83f694a8d70b856a492fd1538`。GitHub Actionsのクリーン環境で不足していた履歴版正規化入力を、追跡済み定本から復元するよう契約テストを修正した。
- GitHub Actions run [#72](https://github.com/dolphilia/libx/actions/runs/33338909166)で品質ゲートと軽量化後のCI Preview配置に成功した。deployment IDは`476b728e-0fd4-464c-aeda-ae51347128f7`、固有URLは`https://476b728e.libx.pages.dev`である。Astroがビルドごとに生成するscope IDにより、CI成果物は内容上同等だがローカルで固定したProduction候補とはバイト単位で同一ではない。
- 2,478ファイル、456.10 MiBをリポジトリ固定のWrangler 4.60.0で配置し、Pages配置は30秒だった。外部Previewで主要ページ、検索、最新版リンク、JavaScript読込み、404、狭幅表示を再確認し、フェーズ6を完了した。
- 管理者の明示承認後、ローカルに保全したツリーハッシュ`a2d0291f55105504852abe63d26d1a76ca82e9a83f694a8d70b856a492fd1538`をProductionへ配置し、フェーズ7を閉鎖した。

### 2026-08-31 Production公開結果

- 2,478ファイル、456.10 MiB、ツリーハッシュ`a2d0291f55105504852abe63d26d1a76ca82e9a83f694a8d70b856a492fd1538`を再照合し、Cloudflare Pages Production branch `main`へDirect Uploadした。
- deployment IDは`14e20cca-afbc-45f7-9243-c7029c6b7080`、固有URLは`https://14e20cca.libx.pages.dev`、sourceは`f150c2d`である。
- 初回送信は2,172/2,478件でCloudflareの汎用upload errorとなった。同一成果物を再送し、2,356件送信・122件既存一致、asset upload 1,139.82秒で完了した。
- 固有URLの代表6 HTMLを保全成果物とSHA-256照合して全件一致した。`libx.pages.dev`と`libx.dev`にも同一の英日overviewが反映され、主要URL 200、未知URL 404、最新版リンク、検索制御ヘッダーを確認した。
- 実ブラウザではH1・概要、Snapshot表示、検索、390×844で横方向overflow 0、コンソール警告・エラー0を確認した。
- 直前Production deployment `e2f480a1-2b26-4dd6-a6f5-6ea4b336f6b3`をロールバック先として記録した。未解決・保留項目はない。

### フェーズ0: 全件監査と境界固定

1. Markdown ASTとraw HTMLを併用して、H1、冒頭領域、目次、最初の本文ブロックを抽出する。
2. H1なし、複数H1、装飾H1、画像、バッジ、中央揃え、HTML、リスト、長文、重要警告、metadata-onlyを分類する。
3. 英日ペアとsnapshot間の同一性をsourceId・断片ハッシュで照合する。
4. 自動変換可能、高信頼だが要レビュー、低信頼・個別処理の三群へ分ける。
5. 暫定件数を`INTRODUCTION_AUDIT.json`の正本値へ置き換える。

### フェーズ1: 規則・schema・変換器

1. 判断JSONのschemaと、タイトル・概要・境界・断片処分の必須項目を実装する。
2. 監査器、正規化器、read-onlyな`--check`を実装する。
3. import、publish、翻訳検証、機械監査との実行順を`OPERATIONS.md`へ追加する。
4. 欠損H1、HTML中央揃え、複数H1、目次なし、metadata-only、RST由来、巨大序文のfixtureを追加する。
5. 境界以降の本文を誤って変更した場合に必ず失敗する契約テストを追加する。

### フェーズ2: 多様性パイロット

次のパターンを含む12〜20 sourceIdを選ぶ。

- 現在の理想形であるoverview
- 通常のMarkdown H1と目次
- H1内に画像・リンク・バッジがある文書
- HTML中央揃えとロゴで始まる文書
- Markdown H1がない文書
- 複数H1がある文書
- 目次がない文書
- 2,000文字を超える序文
- metadata-only案内ページ
- RSTまたはHTML主体の特殊文書
- 履歴版と最新版で冒頭が同一の文書と異なる文書

パイロットでは英日を同じ作業単位とし、該当する場合は両snapshotも処理する。生成Markdown、検索結果、デスクトップ・モバイル表示、アンカー、目次、出典パネルを確認し、規則不足があれば全件着手前に修正する。

### フェーズ3: 最新版672組の整理

次の順で処理する。

1. 既に理想形または単純なプレーンテキスト序文
2. metadata-only専用テンプレート
3. Markdownだけで構成された装飾・バッジ・画像付き序文
4. raw HTML、中央揃え、複数H1を含む序文
5. 目次なし、巨大序文、境界低信頼度、重要情報を含む文書

通常バッチは最大25 sourceId、複雑なページは最大10 sourceIdとする。各sourceIdは英日を同じバッチに含める。ページを完了するたびに判断JSON、監査結果、英日対応、本文suffixハッシュを更新する。

### フェーズ4: 履歴版365組の整理

1. 最新版判断をハッシュ一致する文書だけへ継承する。
2. 冒頭または本文境界が異なる文書を個別にレビューする。
3. 履歴版の正規化済み入力を復元して、判断JSONから英語本文を再生成できることを確認する。
4. 英日365/365、履歴定本マニフェスト、publish契約を再検証する。
5. 新版を参照せず履歴版単独で`--check`できる状態へ戻す。

### フェーズ5: 全件回帰・レビュー再固定

タイトル、概要、frontmatterの変更は本文ハッシュ、検索、機械監査、最終レビュー証拠を変更する。旧レビュー結果をそのまま流用しない。

1. 両snapshotのcontent map、routes、localized routes、sidebar、search、preview statusを正規手順で再生成する。
2. 英日翻訳検証、canonical検証、publish検証、機械監査を両snapshotで実行する。
3. 変更後のレビューキューと証拠ハッシュを再生成する。
4. 現行の管理者判断に従い、自動証拠レビューを再実行する。これは概要文の自然さを人手確認したことを意味しないため、その限界を記録する。
5. タイトルと概要については、全672組を機械規則で確認し、複雑・例外・低信頼度ページを重点レビューする。
6. Awesome単体ビルド、選択的統合ビルド、ランディング再ビルド、runtime、smoke、links、integrity、deployment-assetsを実行する。

### フェーズ6: Preview検証

Previewへの外部配置は、ローカル検査完了後に管理者の明示承認を得て行う。

- overview、通常ページ、metadata-only、HTML由来、目次なし、最大級ページを確認する。
- H1、概要、目次開始位置、余白、モバイル折返し、タイトルタグ、descriptionを確認する。
- 検索結果に新タイトル・概要が表示され、旧リポジトリ名だけのtitleや定型descriptionが残らないことを確認する。
- 英日切替と版切替で対応ページを維持する。
- 画像や中央揃えを序文から除いても、本文画像、アンカー、目次が壊れていないことを確認する。
- Preview成果物のツリーハッシュとdeployment IDを記録する。

### フェーズ7: Production公開・記録閉鎖

ProductionはPreviewとは別の明示承認を得てから実施する。

1. 承認済みPreviewと同一ハッシュの`dist`をProduction branch `main`へ配置する。
2. 固有URL、Pages標準URL、`libx.dev`で主要ページと検索を再確認する。
3. deployment ID、成果物ハッシュ、公開日時、確認者、直前deploymentを記録する。
4. `WORK_LOG.md`、`OPERATIONS.md`、本計画の状態を更新する。
5. 問題発生時は直前のProduction deploymentへ戻せる状態を維持する。

## 10. 品質ゲート

### 文書単位

- frontmatter直後にMarkdown H1がちょうど1つある。
- H1は装飾を含まず、`Awesome ◯◯`原則または記録済み例外に一致する。
- H1直後は一段落・1〜2文の概要である。
- 概要に画像、バッジ、レイアウトHTML、リスト、表、コードブロックがない。
- frontmatterのtitle・descriptionと本文のH1・概要が意味上一致する。
- 境界以降の本文ハッシュが一致するか、記録済みの移動例外である。
- 英日で見出し階層、URL順序、リスト構造、コード、内部リンクが一致する。
- `licenseSource`、sourceId、snapshot、slugが変わっていない。

### バッチ単位

- 判断JSONがschemaに合格する。
- 正規化器の二回目実行が差分を作らない。
- 監査の未分類・低信頼度件数が意図どおり減少する。
- `awesome:validate-translation --require-complete`が対象snapshotで合格する。
- `awesome:publish --check`が対象snapshotで合格する。
- `git diff --check`が合格する。

### 全体

- 2,074文書すべてが合格または理由付き例外として記録されている。
- 未分類のH1欠損、装飾H1、冒頭画像、中央揃え、バッジ、レイアウトHTMLが0件である。
- frontmatter、本文、検索インデックス、生成HTMLが同じタイトル・概要を示す。
- 両snapshotを独立に再生成・検証できる。
- Awesome 2,082生成ページと統合`dist`の検査が合格する。
- PreviewとProductionの承認、deployment、ハッシュ、ロールバックが記録される。

## 11. 必須テスト

```bash
pnpm awesome:audit-introductions -- --snapshot=v2026-08-20 --check
pnpm awesome:audit-introductions -- --snapshot=v2026-08-23 --check
pnpm awesome:normalize-introductions -- --snapshot=v2026-08-20 --check
pnpm awesome:normalize-introductions -- --snapshot=v2026-08-23 --check
pnpm awesome:validate-canonical -- --snapshot=v2026-08-20
pnpm awesome:validate-canonical -- --snapshot=v2026-08-23
pnpm awesome:validate-translation -- --snapshot=v2026-08-20 --require-complete
pnpm awesome:validate-translation -- --snapshot=v2026-08-23 --require-complete
pnpm awesome:publish -- --snapshot=v2026-08-20 --check
pnpm awesome:publish -- --snapshot=v2026-08-23 --check
pnpm awesome:audit-machine -- --snapshot=v2026-08-20 --check
pnpm awesome:audit-machine -- --snapshot=v2026-08-23 --check
pnpm --filter=apps-awesome build
pnpm build:selective --projects=awesome
pnpm build:selective --projects=landing
pnpm test:runtime
pnpm test:smoke
pnpm check:links
pnpm check:integrity
pnpm check:deployment-assets
git diff --check
```

最初の4コマンドを含む正規化・検査コマンドは実装済みであり、2026-08-30のローカル検証で合格している。

## 12. 中断条件

- 冒頭領域と本文開始境界を安全に決められない。
- 重要な警告、条件、帰属を削除せずに簡潔化できない。
- 英日で対応する情報源を特定できず、概要の意味差を説明できない。
- 境界以降の本文に意図しない差分が生じる。
- 履歴版を新版へ依存させなければ再生成できない。
- 既存の計画外変更を破棄しなければ作業を継続できない。
- レビュー証拠の失効を再生成せず公開する必要が生じる。

中断時は変更を巻き戻さず、対象sourceId、検出した境界、変更前後ハッシュ、失敗した検査、再開条件を版別`WORK_LOG.md`へ記録する。

## 13. 完了判定

本計画は、2,074文書のタイトルと序文が規則または記録済み例外へ収束し、上流固定入力から再生成可能で、英日・両snapshotの本文、検索、ビルド、Preview、Productionがすべて検証された時点で`completed`とする。

計画書の作成だけでは本文変更、Preview配置、Production公開を承認したことにはならない。実装開始、Preview配置、Production公開はそれぞれの段階で管理者の指示に従う。
