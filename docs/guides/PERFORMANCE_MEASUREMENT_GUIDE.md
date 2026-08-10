# 性能測定ガイド

libxは、読者がブラウザでページを開く性能と、管理者がサイトを生成する性能を別々に測定します。予算の正本は `config/performance-budgets.json` です。

## 読者性能

`PERF_RUNS=3 pnpm perf:reader` は統合ビルドとStarlight比較サイトを生成し、次をLighthouseの低速モバイル相当条件、コールドナビゲーションで測定します。

- 通常のLTR文書
- コード、画像、表、タスクリストを含む重いLTR文書
- 通常のRTL文書
- 最小静的HTML
- 同じAstro基盤のStarlight

各対象を同じ回数測り、LCP、CLS、転送量、アクセシビリティスコアの中央値を `.tmp/performance/reader.json` に保存します。本番URLを使った測定を追加できる場合は、ローカル値より本番値を優先してください。

## 管理者性能

`PERF_RUNS=3 pnpm perf:management` は、文書サイト1件、landingのみ、統合ビルド、1,000文書のサイドバー生成フィクスチャを測定します。所要時間とプロセスツリーの最大RSSの中央値を `.tmp/performance/management.json` に保存します。

macOSのCodexサンドボックスなど `ps` が制限される環境では、最大RSSを得るために許可付きで実行します。CIでは通常のプロセス権限で測定できます。

## 品質レポートと予算

`pnpm perf` は両測定と統合レポート生成を行います。予算超過時は終了コード1になり、対象と測定値はJSONおよび `.tmp/performance/quality-report.md` で確認できます。

予算は観測値に十分な余裕を持たせ、環境差だけで失敗しない値から開始します。継続観測後に厳しくするときはADRを更新または置換します。サイト別ビルドが恒常的に予算へ近づく場合は、文書単位の増分処理よりサイト分割を検討します。
