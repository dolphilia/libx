# Lua公式文書の取得・定本化・翻訳パイロット計画

- 作成日: 2026-08-11
- 対象: Lua 5.5.1公式配布物と5.5.1固有の公式訂正情報
- サイトID候補: `lua`
- 版ID: `v5-5-1`
- 定本言語: 英語
- 最初の翻訳先: 日本語
- ステータス: フェーズ0〜8完了、Cloudflare Pages Production公開済み
- 根拠: `docs/spec/PROJECT_PRINCIPLES.md`、`docs/guides/UPSTREAM_DOCUMENT_IMPORT_AND_TRANSLATION_GUIDE.md`

## 1. 目的

Lua公式文書を固定版として取得し、由来と意味を保持したMarkdownへ変換し、英語定本と日本語翻訳をlibxへ配置・検証・公開する。

二例目のパイロットとして、GLFWで扱ったDoxygenとは異なる次の条件を検証する。

- 一つの大きな手書きHTMLを意味のある複数ページへ分割する。
- 数百の名前付きアンカーと内部参照を保持する。
- Luaコード、C API宣言、BNF、manページを同じサイトで扱う。
- 固定配布物と更新され続ける公式オンライン文書を区別する。
- 安全なインポータと共通コンテンツ検査を別プロジェクトで再利用する。

## 2. 採用範囲

### 定本の主要入力

- `doc/manual.html`: Lua 5.5リファレンスマニュアル第1章から第9章
- `doc/readme.html`: 概要、ビルド、インストール、カスタマイズ、5.4からの変更、ライセンス
- `doc/lua.1`: Luaインタープリターのコマンドリファレンス
- `doc/luac.1`: Luaコンパイラーのコマンドリファレンス
- Lua 5.5.1公式bugs一覧: 既知問題と訂正情報

### 変換・完全性検査の入力

- `doc/contents.html`
- `src/lua.h`
- `src/lauxlib.h`
- `src/lualib.h`
- `src/luaconf.h`
- 配布物ルートの`README`と`Makefile`

### 初回対象外

- 5.4.9のRC、work版、未正式パッチ
- Lua 5.4以前のリファレンスマニュアル
- Programming in Luaなどの書籍
- FAQ、Technical Notes、論文、セミナースライド
- lua-users.org Wiki、メーリングリスト、ニュース、Showcase
- 公式ソースコードブラウザー全体

対象外資料が本文理解に必要な場合は外部参考リンクとし、定本へ複製しない。

## 3. 固定版の判断

2026-08-11の正式取得時点で、Lua 5.5.1は2026-08-03公開の最新正式版である。初期選定時にはRC2と判断したが、本文変換前の再確認で正式公開を確認したため、計画の切替規則に従って5.5.1へ変更した。Work areaの現在の対象は5.4.9 RC1であり、5.5.1はDownload areaと版履歴の正式版一覧にある。

配布物`lua-5.5.1.tar.gz`の公式SHA-256と実測値は`1c4b4068d67061f2a2231ad2b5422e77acea1487ea9890f6320af614f4373dce`で一致した。以後、本文変換中に新しい修正版が公開されても自動的に切り替えず、別版追加または上流更新として計画する。

## 4. 初期サイト構造案

```text
apps/lua/src/content/docs/v5-5-1/
├── en/
│   ├── 01-overview/
│   ├── 02-language/
│   ├── 03-c-api/
│   ├── 04-auxiliary-library/
│   ├── 05-standard-library/
│   ├── 06-tools/
│   └── 07-migration-and-known-issues/
└── ja/
    └── （英語定本と可能な限り同一構造）
```

この構造は正式取得物のインベントリと分割試験を経て確定した。英語定本は56ページで、ページ境界の正本は`scripts/importers/lua-5.5.1-page-map.mjs`とする。

### ページ分割原則

- 公式マニュアルの章・節を基本単位にする。
- 1 APIシンボル1ページにはせず、意味上のまとまりと表示負荷でグループ化する。
- 大きすぎる「Functions and Types」は、API種別または安定した名前範囲で分ける。
- 元アンカーは明示アンカーまたは対応表で一意に移行する。
- 同じ説明をREADME、manページ、マニュアルから無言で統合しない。
- 正式計測の結果、通常節は章・節単位、§4.6は10範囲、§5.1は5範囲とし、合計56ページに決めた。

## 5. 実施フェーズ

### フェーズ0: 版・出典・ライセンスの固定

1. 正式版とRCの状態を再確認する。
2. 公式tarballを取得し、公式SHA-256と照合する。
3. 配布物内READMEと公式版履歴の日付差を記録する。
4. 固定版のMITライセンス本文、著作権者、通知保持条件を確認する。
5. オンラインマニュアル、bugs一覧、ライセンスページを取得日時とハッシュ付きで保存する。

完了条件:

- `SOURCE_MANIFEST.md`の固定版、取得物、ライセンス欄が確定している。
- RCまたは移動するオンライン版を定本にしていない。
- 翻訳・整形・再配布の条件を説明できる。

### フェーズ1: 原資料取得とインベントリ

1. tarballを`01-source/`へ保存し、`02-extracted/`へ展開する。
2. HTML、manページ、画像、ヘッダー、ビルド文書を分類する。
3. `manual.html`の見出し、名前付きアンカー、リンク、コードブロックを機械集計する。
4. `contents.html`、マニュアル本文、ヘッダー宣言の対応を調べる。
5. 全入力を採用、統合、検査参照、外部参照、除外に分類する。

完了条件:

- 全上流ファイルが`CONTENT_MAP.md`の分類に入っている。
- 見出し、アンカー、内部リンク、API宣言の総数を記録している。
- 欠落、重複、オンライン版との差異を説明できる。

### フェーズ2: ページ粒度とURLの決定

1. 節単位分割と大規模API節の分割候補を試作する。
2. ページごとの文字数、コード量、アンカー数、リンク数を報告する。
3. 将来の5.5.x更新でも維持しやすいスラッグを選ぶ。
4. 旧アンカーから新URL・アンカーへの対応表を作る。
5. カテゴリと英日表示名を確定する。

完了条件:

- 極端に大きいページと過剰な細分化の両方を避けた理由がある。
- すべての採用範囲に配置先がある。
- URLとアンカー対応を自動検査できる。

### フェーズ3: Lua用インポータの実装

共通の安全出力基盤を使い、Lua固有変換だけをアダプターとして実装する。

必須CLI:

```text
--source
--output
--check
--dry-run
```

変換対象:

- HTML見出し、段落、リスト、定義リスト、表
- `<pre>`と`<code>`のLua・C・BNFコード
- `<a name>`とフラグメントリンク
- manマクロからMarkdownへの変換
- 画像と代替テキスト
- 全ページのFrontmatter、出典、`licenseSource`

置換前検査:

- 未処理HTMLと未解決文字参照
- 欠落・重複アンカー
- 変換不能な内部リンク
- コード、C宣言、BNFの欠落
- 欠落画像とライセンス参照
- 出力先逸脱と翻訳ディレクトリへの書き込み

完了条件:

- 一時生成と検査成功後だけ英語定本を置換する。
- `--check`が読み取り専用で再現性を判定する。
- 入力・出力・変換器版・ファイルハッシュをレポートへ残す。
- 失敗試験で既存定本が変わらない。

### フェーズ4: サイト作成と英語定本設定

1. `create-project.js`をdry-run後に実行する。
2. プロジェクトID`lua`、版ID`v5-5-1`、英語定本、日本語対応を設定する。
3. MITライセンス、Lua.org・PUC-Rio、固定版出典を設定する。
4. インポータで英語定本を生成する。
5. サイドバー、個別ビルド、内部リンク、帰属を検証する。
6. Luaサイトの`check:content`をルート品質ゲートへ接続する。

完了条件:

- テンプレートのサンプル文書・版・設定が残っていない。
- 英語定本が全件ビルドできる。
- `CONTENT_MAP.md`から全ページを追跡できる。
- `pnpm --filter=apps-lua check:content`が読み取り専用で成功する。

### フェーズ5: 日本語翻訳の準備

1. 実際の英文から用語候補と規範表現を抽出する。
2. Lua識別子、C API、スタック効果表記、BNFの保護規則を確定する。
3. ページ順、段階、完了条件、レビュー重点を`MANUAL_TRANSLATION_PLAN.md`へ確定する。
4. 代表ページ1件を人手で試訳し、構造検査を通す。

完了条件:

- `TRANSLATION_GUIDE.md`が実例を含む。
- 翻訳0件と代表1件の両方でサイトをビルドできる。
- 自動翻訳を使わず、一ページずつ定本と照合する手順が再現できる。

### フェーズ6: 日本語逐次翻訳

1. 計画順に一ページずつ翻訳する。
2. ページごとに構造・コード・リンク・アンカー検査を行う。
3. 規範表現、数値条件、スタック効果、エラー条件を原文と照合する。
4. 段階ごとにまとめてレビューし、進捗を実ファイル集合から確認する。

完了条件:

- 全採用英語ページに日本語対応ページがある。
- 共通構造・リンク検査で欠落、余分、コード改変、壊れたアンカーが0件である。
- 技術レビューと日本語レビューの状態をページ単位で追跡できる。

### フェーズ7: 表示確認・Preview・Production

1. 入口、言語仕様、C API、標準ライブラリ、man由来ページ、既知問題、404を確認する。
2. 大きい表、コード、BNF、長いAPI名、モバイル表示を確認する。
3. 言語・版切替、サイドバー、前後移動、キーボード、主要アクセシビリティを確認する。
4. 統合ビルドと成果物予算に合格後、Previewへ公開する。
5. Previewの200・404・帰属を確認後、管理者の明示承認でProductionへ公開する。

### フェーズ8: 振り返りと共通化判断

GLFWとLuaを比較し、次を記録する。

- 共通化できた安全出力、構造検査、リンク検査
- Doxygen固有処理と手書きHTML・man固有処理
- 分割粒度、アンカー移行、上流更新で必要だった人の判断
- 進捗単一正本、スキャフォールド、上流差分検査の次の改善点

二例で実証できた処理だけを共通APIへ昇格する。

## 6. 品質ゲート

最低限、次を順に通す。

```bash
pnpm --filter=apps-lua check:content
pnpm --filter=apps-lua build
pnpm build:selective --projects=lua
pnpm check:links
pnpm check:integrity
pnpm check:deployment-assets
pnpm test:smoke
```

公開前には全体の`pnpm check`と統合ビルドも実行する。

## 7. 中断条件

- 取得開始時に正式版が切り替わり、採用版を再決定していない。
- 配布物のハッシュ、文書版、ライセンスの対応が確定できない。
- HTML分割で規範的意味、C宣言、BNF、アンカーを保持できない。
- オンライン版のRC向け修正を固定版から分離できない。
- APIシンボル対応や内部リンクを機械検査できない。
- 原文との対応を追跡できない補筆・統合が必要になる。

## 8. 記録先

- `docs/notes/document-import/lua/README.md`
- `docs/notes/document-import/lua/SOURCE_MANIFEST.md`
- `docs/notes/document-import/lua/CONTENT_MAP.md`
- `docs/notes/document-import/lua/TRANSLATION_GUIDE.md`
- `docs/notes/document-import/lua/MANUAL_TRANSLATION_PLAN.md`
- `docs/notes/document-import/lua/WORK_LOG.md`
- `docs/notes/document-import/lua/REVIEW_CHECKLIST.md`
- `docs/notes/document-import/lua/RETROSPECTIVE.md`
- `docs/notes/document-import/lua/LIBX_IMPLEMENTATION_IMPROVEMENTS.md`
- `docs/notes/document-import/lua/MANUAL_TRANSLATION_PLAN.md`
- `docs/notes/document-import/lua/WORK_LOG.md`
- `docs/notes/document-import/lua/REVIEW_CHECKLIST.md`

取得物・展開物・中間生成物は`.tmp/document-import/lua/`に置き、Git管理しない。
