# 外部公式文書の取得・定本化・翻訳ガイド

## 1. 目的と適用範囲

このガイドは、外部プロジェクトの公式文書を取得し、libx向けMarkdownへ整形し、翻訳元言語の定本として設定し、翻訳・検証・公開するための作業手順を定める。

GLFW 3.5.1パイロットで再現した手順を基礎にしている。取得形式や生成器に固有の処理はプロジェクト別インポータへ分離する。複数パイロットで未検証の判断は暫定とする。

## 2. 基本原則

1. 移動する`latest`ではなく、リリース、タグ、コミット、取得物のチェックサムを固定する。
2. 原資料、変換途中、翻訳途中、公開成果物を混在させない。
3. 定本化で原文を要約・補筆しない。構造・表現上の変更は由来とともに記録する。
4. 翻訳元言語を設定で一意にし、翻訳は定本と同じ構造を目指す。
5. 翻訳欠落は明示的に許容するが、別言語の本文で黙って埋めない。
6. コード、API識別子、URL、アンカー、規範表現を検査する。
7. 取得、変換、翻訳、レビュー、公開を別々のゲートとして扱う。

## 3. 作業領域

```text
docs/notes/document-import/<project>/
├── README.md
├── SOURCE_MANIFEST.md
├── CONTENT_MAP.md
├── TRANSLATION_GUIDE.md
├── WORK_LOG.md
└── REVIEW_CHECKLIST.md

.tmp/document-import/<project>/
├── 01-source/
├── 02-extracted/
├── 03-normalized/
├── 04-translation/
└── 05-reports/

apps/<project>/src/content/docs/<version-id>/<language>/
```

- `docs/notes/`: 版、出典、判断、進捗、レビューをGitで追跡する。
- `.tmp/`: 配布物、展開物、キャッシュ、失敗した変換を置く。公開しない。
- `apps/`: 検証対象となる定本と翻訳だけを置く。

## 4. 取得条件と法的条件を固定する

### 必須証拠

`SOURCE_MANIFEST.md`へ次を記録する。

- 正式リリース番号、公開日時
- Gitタグ、注釈付きタグの場合はタグオブジェクトSHA
- タグが指すコミットSHA
- 公式配布物の最終URL、取得日時、SHA-256
- 公式生成文書との版一致を示す根拠
- 固定版ライセンスファイルとSHA-256
- 著作権者、再配布・変更表示・通知保持の条件

APIの`latest`レスポンスだけで確定しない。タグ参照、コミット、配布物内の版表示を相互に照合する。

本文処理前に、翻訳と再配布が許可されていること、変更版の明示方法、保持すべき通知を確認する。判断できない場合は本文を`apps/`へ置かない。

## 5. 取得とインベントリ

1. 固定配布物を`01-source/`へ取得する。
2. 展開物の文書ソース、生成文書、公開API定義、画像を分類する。
3. 公式入口、ページ索引、生成設定、ソース一覧を照合する。
4. 各上流物を「採用」「統合」「参照」「除外」に分類する。
5. 理由とlibx配置先を`CONTENT_MAP.md`へ記録する。

Doxygenの場合は、生成設定の入力一覧、`pages.html`、`topics.html`、公開ヘッダー、ファイル・グループ・構造体ビューの重複を比較する。検索JS、テーマCSS、DoxygenのUI画像はlibxへ複製しない。

## 6. サイトとURL構造

### サイト作成

```bash
node scripts/create-project.js <project> "English name" "日本語名" --dry-run --confirm
node scripts/create-project.js <project> "English name" "日本語名" --confirm
```

dry-runで変更を確認してから実行する。依存関係はpnpmワークスペースへ登録するため、リポジトリルートから対象アプリに絞って同期する。テンプレートのサンプル本文、版、サイドバーを外部文書として公開しない。

### 版ID

上流表示名とlibx版IDを分ける。たとえば表示名`GLFW 3.5.1`に対し、版IDを`v3-5-1`とする。AstroはコンテンツID内のピリオドを除去するため、版IDにピリオドを使用しない。版ディレクトリ名と`versioning.versions[].id`を一致させる。

### ページ粒度

上流分類、ページサイズ、ファイル数、安定アンカー、更新差分、言語間構造を比較する。GLFWでは1シンボル1ページではなくDoxygenのAPIグループ単位を採用し、構造体と非推奨一覧だけを独立ページとした。

## 7. 定本の変換と設定

### 再実行可能なインポータ

プロジェクト別インポータで次を行う。

- Frontmatter生成
- 見出しと明示アンカーの変換
- Doxygen命令の変換
- コードフェンス、表、画像の保持
- 上流リンクからlibx内部リンクへの対応
- 全ページへの`licenseSource`
- 変更版であることと固定版原典の表示

再実行して同じ成果が得られることを確認する。未処理のDoxygen命令や相対HTMLリンクを残さない。

### 設定

`project.config.jsonc`で、定本言語、対応言語、カテゴリ、固定版、`licensing.sourceLanguage`、原著者、ライセンス、固定版出典、`defaultSource`を設定する。

## 8. 翻訳

### 翻訳前

`TRANSLATION_GUIDE.md`へ基本用語、固有名詞、API識別子、文体、規範語、Note・Parameters・Returns等のラベルを定める。

### 翻訳の進め方

現段階のlibxでは、翻訳機、翻訳API、ローカル翻訳モデル、一括翻訳スクリプトを初稿作成に使用しない。定本から一ページずつ翻訳し、そのページ内で原文照合を終えてから次へ進む。

次は翻訳せず、原文の値を保持する。

- Frontmatterキーと`licenseSource`
- コードフェンスとインラインコード
- HTMLタグとアンカー
- URL
- API識別子、型、マクロ、Cキーワード

ハードラップは日本語として読みやすい段落へ整える。見出し本文、リスト項目、表セル、リンクラベルは翻訳するが、記号と構造を変えない。未完成のページは公開対象へ混入させず、一時作業領域へ置く。

翻訳機やモデルの試験では、規範表現と処理順序の重大誤訳、保護トークン、見出し、コード、リンクの破損が確認された。自動翻訳を再検討する場合は、逐次翻訳手順が安定した後に管理者が別途判断し、既存の翻訳を置き換えず小規模な評価から始める。

### 翻訳検査

英語定本と翻訳で、ファイル集合、コード、URL、HTMLアンカー、API識別子、`licenseSource`、保護トークン残留を比較する。欠落を許容する途中検査と、公開前の欠落不可検査を分ける。

構造検査だけでなく、must、should、may、not、unless、until、before／afterを含む原文を重点レビュー候補として抽出する。義務、許可、推奨、処理順序が変わっていないか、定本と照合する。

## 9. ビルド、表示、公開

### 機械検査

```bash
pnpm --filter=apps-<project> build
pnpm build:selective --projects=<project>
pnpm check:links
pnpm check:integrity
git diff --check
```

プロジェクト固有の英日構造・内部リンク検査も実行する。翻訳途中の言語に対象版がない場合、版セレクターへ空配列を渡して失敗させず、表示すべき版がなければ非表示にする。

### ブラウザ確認

サイト入口、各カテゴリ、最大のガイド、APIリファレンス、表、コード、画像、言語・版切替、欠落、404、キーボード、主要アクセシビリティ、帰属を確認する。

### PreviewとProduction

選択的ビルドと成果物予算検査に合格してからPreviewへ公開する。Productionは管理者の明示判断を必要とし、パイロット完了と自動的に同一視しない。

## 10. 振り返り

作業を「人による判断」「安全に自動化できる反復」「上流生成器・プロジェクト固有」に分類する。次のパイロットでも同じ記録様式を使う。二つ以上の異なる上流形式で再現した手順を共通ツールへ昇格し、固有変換はプロジェクト別インポータに残す。

## 11. GLFWパイロットの参照実装

- `docs/notes/document-import/glfw/SOURCE_MANIFEST.md`
- `docs/notes/document-import/glfw/CONTENT_MAP.md`
- `docs/notes/document-import/glfw/MANUAL_TRANSLATION_PLAN.md`
- `docs/notes/document-import/glfw/TRANSLATION_GUIDE.md`
- `docs/notes/document-import/glfw/TRANSLATION_MODEL_EVALUATION.md`
- `scripts/importers/import-glfw-3.5.1.mjs`
- `scripts/importers/report-glfw-translation-review-hotspots.mjs`
- `scripts/importers/sync-glfw-translation-urls.mjs`
- `scripts/importers/validate-glfw-translation.mjs`
- `scripts/importers/validate-glfw-links.mjs`
