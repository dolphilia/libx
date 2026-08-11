# ADR-0007: 移植可能な意味的Markdown表現を採用する

- ステータス: 承認
- 日付: 2026-08-11
- 提案者: リポジトリ管理者
- 承認者: リポジトリ管理者
- 置換対象: なし
- 置換元: なし

## 背景

技術文書では注意書き、用語と説明、出典・翻訳状態を意味的に区別する必要がある。一方、外部定本をAstro固有のMDXへ変換したり、各ページへコンポーネントimportを追加したりすると、移植性、翻訳構造、決定的な再生成を損なう。

## 決定

次の小さい契約を採用する。

1. note、tip、warning、dangerはGFMで通常の引用として読める `> [!TYPE] 表示ラベル` 形式とし、remarkで意味付きの`blockquote`へ変換する。
2. definition list／option listは標準Markdown内で必要な場合、意味が重要なら`<dl><dt><dd>`のHTMLブロックを使う。外部定本の決定的変換では、当面は可読な`- **用語**: 説明`へ劣化できる形も許容する。
3. source／translation statusは本文記法へ二重入力せず、Frontmatterとプロジェクト設定から共通レイアウトが生成する。
4. 同じremark処理をAstro MarkdownとMDXへ設定し、生成HTML契約をfixtureで検査する。
5. 未知の`[!TYPE]`はビルドを失敗させ、通常の引用との曖昧な混在を防ぐ。

## 判断理由

- プラグインがないMarkdown処理系でも注意書き本文は引用として残る。
- MDX importに依存せず、`.md`と`.mdx`へ同じ処理を適用できる。
- 表示ラベルを本文言語で明記でき、色だけでなく見出しと`data-callout`で種類を識別できる。
- 出典状態を本文から分離すると、引用本来の意味を回復し、設定を唯一の入力にできる。
- 追加の構文解析依存を導入せず、ビルドと保守の負担を小さくできる。

## 検討した代替案

### remark directive

- 利点: 属性と入れ子を明示しやすい。
- 欠点: 専用parser依存が必要で、未対応処理系では記号が本文へ露出する。
- 採用しなかった理由: 最小3構造には過剰であり、標準Markdownでの劣化が引用方式より弱い。

### GFM風の追加構文

- 利点: GitHub上でも引用として内容が残り、管理者が読み書きしやすい。
- 欠点: GFMの正式仕様ではなく、ラベルの規則をlibxが管理する必要がある。
- 判断: 注意書きに限って採用する。

### インポータが意味的HTMLを直接生成

- 利点: 追加parserなしで完全なHTMLを制御できる。
- 欠点: インポータごとに表示契約が重複し、翻訳差分が大きくなる。
- 採用しなかった理由: definition list以外の共通構造には使わない。

### MDXコンポーネントを明示import

- 利点: Propsの型と複雑なUIを表現しやすい。
- 欠点: 外部定本をMDXへ変換し、ページごとのimportとAstro依存を生む。
- 採用しなかった理由: CommonMark／GFMを基礎とする原則に反する。

## 影響

### 良い影響

- 注意書きがno-JS、印刷、支援技術でも意味を保つ。
- MarkdownとMDXの表示契約を同じfixtureで検証できる。
- 本文の通常引用と出典状態を区別できる。

### 悪い影響・トレードオフ

- 注意書き構文はGFMの標準機能ではない。
- 表示ラベルの翻訳は本文構造の一部として定本・翻訳間で照合する必要がある。
- definition listの執筆記法は将来、利用実績を踏まえて再検討する可能性がある。

### 影響する範囲

- `@docs/config`のMarkdown／MDX変換設定
- `@docs/theme`の本文表示
- `@docs/ui`の出典状態表示
- 執筆ガイドとruntime fixture

## 移行方法

手書きの通知だけを新構文へ段階的に移す。通常の引用は変更しない。出典段落は`SourceStatus`が同じ情報を生成できるサイトから除去する。問題があればremarkプラグインを外すだけで注意書きは通常の引用へ戻る。

## 検証方法

- `.md`と`.mdx`の同一fixtureが、同じ`blockquote.docs-callout`、`dl`、`aside.source-status`を生成する。
- note、tip、warning、dangerと未知typeのunit testを実行する。
- 英語、日本語、RTL、印刷、no-JSで内容と種類を識別できることを確認する。
- 追加前後のビルド時間と初期JavaScriptを比較する。

## フォローアップ

- [ ] API entry／signatureの需要を次の外部文書パイロットで再評価する。
- [ ] definition listの純Markdown記法を標準化する必要が生じた場合は新しいADRで置換する。

## 関連資料

- [libx コンセプト・方針・方向性・開発原則](../spec/PROJECT_PRINCIPLES.md)
- [使いやすさ・閲覧性・Markdown改善実装計画](../plans/LIBX_USABILITY_AND_MARKDOWN_IMPROVEMENT_PLAN.md)
