# libx使いやすさ・閲覧性・Markdown改善 実装記録

- 実施日: 2026-08-11
- 対応計画: [libx使いやすさ・閲覧性・Markdown改善実装計画](../plans/LIBX_USABILITY_AND_MARKDOWN_IMPROVEMENT_PLAN.md)
- 対象: テンプレート、GLFW、Lua、sample-docs、test-verification、共有パッケージ
- 結果: 完了（延期2件、見送り1件を理由付きで記録）

## 1. 結論

計画のP0契約をすべて修復し、多言語UI、メタデータ、意味的Markdown、ページ内目次、サイト別検索、共有スキーマ、同期レイアウト、コード・表補助、任意KaTeXアセット境界まで実装した。全アプリ、正規テンプレート、統合成果物を検証し、選択的LuaビルドがGLFWとsample-docsの検索索引を変更しないこともハッシュで確認した。

進捗マニフェストを前提とする翻訳照合ハッシュ表示は別計画へ延期した。タイポグラフィは実測値が妥当で横overflowもなかったため、根拠のないCSS token変更は見送った。

## 2. 課題別の結果

| ID | 状態 | 実施結果 |
| --- | --- | --- |
| UM-01 | 完了 | ガイドの公開APIを修正し、主要UIを実ビルドするMDX fixtureと契約テストを追加した。 |
| UM-02 | 完了 | 本文ルートを`.sl-markdown-content`へ統一し、旧クラスを移行用だけに限定した。 |
| UM-03 | 完了 | Luaのインライン空白、`dl`、manの`.TP`を修正し、英日56ページを再現可能に検査した。 |
| UM-04 | 完了 | Markdownを通常文書・定本の既定、MDXをUI拡張とし、発見処理とfixtureを共通化した。 |
| UM-05 | 完了 | Alert、ContentNotice、AnchorHeading等のvisible／accessible labelをi18n化した。 |
| UM-06 | 完了 | title、description、canonical、実在翻訳の`hreflang`、Open Graph、入口、404の契約を実装した。 |
| UM-07 | 一部延期 | SourceStatusで出典・版・言語を本文引用から分離した。converter version、review status、reviewed hashは進捗マニフェストが正本になるまで延期する。二重入力を避けるためである。 |
| UM-08 | 完了 | ADR-0007に基づくcallout、`dl`、SourceStatusをMarkdown／MDX共通HTMLとして実装した。 |
| UM-09 | 完了 | 見出しに応じた目次、Frontmatterの深さ・上限、モバイル目次、IntersectionObserverと解除処理を実装した。 |
| UM-10 | 完了 | サイト・版・言語別の遅延読込静的検索を実装し、API完全一致を最優先にした。 |
| UM-11 | 完了 | 共通コンテンツschemaと、正規テンプレートからのレイアウト同期・差分検査を実装した。 |
| UM-12 | 完了 | コードcopy補助と表の横スクロールwrapperを、元の`pre`／`code`／`table`を保ったまま追加した。 |
| UM-13 | 完了 | MathDisplayを`@docs/ui/math`へ分離し、KaTeXをWOFF2だけ、かつ利用サイトだけに出力した。 |
| UM-14 | 見送り | 英語本文幅647px、16px／行高28.8px、LTR／RTL／モバイルでoverflowなしを確認した。実測上の問題がないためCSS tokenは変更しなかった。 |

## 3. 主要な決定

- [ADR-0007](../adr/0007-portable-semantic-markdown.md): 通常Markdownへ劣化できる意味的callout、定義、状態表示。
- [ADR-0008](../adr/0008-site-scoped-static-search.md): サイト・版・言語別の静的索引と操作時の遅延読込。
- [ADR-0009](../adr/0009-synchronize-doc-site-layouts.md): `templates/docs-site`をレイアウトの正本とする同期方式。
- KaTeXは現行ブラウザ向けWOFF2へ限定した。WOFF2は[W3C Recommendation](https://www.w3.org/TR/WOFF2/)であり、MathDisplay未使用サイトのフォント出力は0件、sample-docsだけ20件となった。

## 4. 実装後の計測

### 4.1 サイト別成果物

2026-08-11、同一ローカル環境で`pnpm build:template`と`pnpm build:separate`を実行した。

| サイト | HTML | 全ファイル | 容量 | KaTeXフォント |
| --- | ---: | ---: | ---: | ---: |
| 正規テンプレート | 7 | 39 | 788 KiB | 0 |
| GLFW | 77 | 106 | 14.80 MiB | 0 |
| Lua | 117 | 145 | 10.91 MiB | 0 |
| sample-docs | 44 | 186 | 8.13 MiB | 20 WOFF2 |
| test-verification | 26 | 102 | 1.71 MiB | 0 |

統合成果物は570ファイル、34.66 MiBで、内訳はHTML 281、JavaScript 227、JSON 30、WOFF2 20、SVG 7、CSS 5だった。20,000ファイルの予算に対して2.85%である。最大ファイルはGLFWのAstro content data（5.85 MiB）であり、初期表示時に読込まれるクライアント資産ではない。

### 4.2 検索索引

| 索引 | ページ | 非圧縮容量 | 生成時間（サイト全体） |
| --- | ---: | ---: | ---: |
| GLFW en | 36 | 649,353 B | 61–66 ms |
| GLFW ja | 36 | 807,427 B | 61–66 ms |
| Lua en | 56 | 364,445 B | 37–43 ms |
| Lua ja | 56 | 435,201 B | 37–43 ms |

すべて1索引2 MiB、サイト単位5秒の予算内である。初期ネットワーク9リクエストには検索client、検索索引、KaTeXフォントが含まれず、検索操作後だけ現在の版・言語の索引を取得した。

### 4.3 読者表示

ローカルpreview、通常のネットワーク／CPU設定でsample-docs代表ページを測定した。

- Performance trace: LCP 250 ms、CLS 0.00、TTFB 29 ms。
- Paint Timing: FCP 80 ms。
- Lighthouse mobile: Accessibility 100、Best Practices 100、SEO 100、Agentic 100、失敗0。
- 1280×720: 本文幅647px、本文16px、行高28.8px、横overflowなし。
- 390×844: 横overflowなし、モバイル目次を表示。
- アラビア語RTL: `lang=ar`、`dir=rtl`、横overflowなし、検索・テーマ・目次・copyのラベルをアラビア語で確認。
- no-JS: 本文、callout、目次リンク、コード、表、出典状態が生成済み静的HTMLに残る。JavaScriptは検索、copy、現在位置追跡の補助だけに限定した。
- 印刷: 既存の`@media print`契約とsemantic HTMLを維持し、操作部品を本文構造から分離した。

ローカル値は本番計測の代替ではなく、既存の[性能基準値](./PERFORMANCE_BASELINE_2026-08-11.md)と同様に回帰比較へ使用する。

## 5. 検証結果

成功した主なコマンド:

```text
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:unit        # 21件
pnpm test:runtime     # 50件
pnpm check:links      # 57ファイル
pnpm check:integrity
pnpm check:content
pnpm build:template
pnpm build:separate
pnpm build -- --confirm
pnpm test:smoke       # 6件
pnpm check:deployment-assets
pnpm build:selective --projects=lua --confirm
```

コンテンツ不変条件:

- Lua: 定本56、翻訳56、欠落0、余分0、内部リンク1,164、エラー0。
- GLFW: 定本36、翻訳36、欠落0、余分0、内部リンク6,274、エラー0。
- Lua選択的ビルド前後で、GLFW、sample-docs、Luaの代表検索索引SHA-256はすべて不変だった。

## 6. 延期事項と次の判断点

1. SourceStatusのconverter version、review status、reviewed hashは、[Luaパイロットから得た実装改善案](./document-import/lua/LIBX_IMPLEMENTATION_IMPROVEMENTS.md)にある進捗・上流差分マニフェストの採用後に実装する。
2. API entry／signature専用構造は、通常見出し、コード、検索の組合せで不足が再現した時点でADR-0007のフォローアップとして判断する。
3. 検索索引が2 MiB予算の80%へ達した場合は、語彙索引化とPagefindを再比較する。
4. 本番のCore Web Vitalsはデプロイ後も継続観測し、ローカル値だけで性能を確定しない。
