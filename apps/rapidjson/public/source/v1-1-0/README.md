# RapidJSON 1.1.0 Libx編集用ソース

このZIPは、英語原文218ページと非公式日本語訳13章の編集可能なMarkdown（raw HTMLを含む）、固定原文、通知、静的再生成入力、Libx表示のビルドに使う共有コードと設定を収録しています。API・索引・ソースの205ページは英語原文です。日本語の全文意味レビューは利用ガイド13章が対象です。

## 編集と再構築

1. ZIPを新しいディレクトリへ展開します。`workspace/apps/rapidjson/src/content/docs/v1-1-0/{en,ja}/`が表示用の編集原稿です。`public/source/v1-1-0/edited/`の配布用原稿も同じ内容に更新します。生成済みHTMLを編集する必要はありません。
2. Node.js 20以上とpnpm 10.10.0を用い、`workspace`で`pnpm install --frozen-lockfile`を実行します。依存の版は同梱lockfileに固定しています。依存パッケージの本体は含まないため、通常の取得先への接続または事前取得済みstoreが必要です。
3. 自分が展開したZIPを`workspace/apps/rapidjson/public/source/v1-1-0/source.zip`へコピーします。ZIPは再帰収録を避けるため自身を含まず、フッターのダウンロード参照を有効にするために戻します。
4. `pnpm --filter=apps-rapidjson build`で`workspace/apps/rapidjson/dist/`を生成します。公開URLのプレフィックスは`/docs/rapidjson/`です。Libx統合配信ではこの位置へ配置します。
5. 改変前の配布物は`pnpm --filter=apps-rapidjson check:content`と`pnpm --filter=apps-rapidjson check:rendered`で再生成、原稿、保存済み全文レビューのハッシュ、リンク、本文描画を照合できます。改変後に保存済みレビューがそのまま有効になるという意味ではありません。

## 静的入力からの再生成

`workspace`で`python3 scripts/importers/import-rapidjson-1.1.0.py --output=/任意の空ディレクトリ`を実行します。Python 3.10以上の標準ライブラリーだけを用い、保存済み英語Doxygen本文218件と、レビュー済み日本語入力13件から再生成します。原文に対応する3件の表示修正は固定ソースと前後のハッシュを確認して適用します。元サイトのJavaScriptやDoxygenの実行、再翻訳は行いません。元の固定原文一式は`upstream/rapidjson-f54b0e47a08782a6131cc3d60f94d038fa6e0a51.tar.gz`にあり、その固定コミット・SHA-256はSOURCE_MANIFESTに記録しています。

## 条件と提供範囲

RapidJSONの元の著作権、MIT License、個別コンポーネントの例外条件を`notices/LICENSE.txt`と原文アーカイブで保持しています。文書専用条件が確認できない部分にはソフトウェア本体のライセンスを注釈付きで適用するLibxの運用方針を示しています。図20点を変更せず保持し、外部バッジ4点は元URLを参照します。第三者素材、Doxygen自体、Libxの共有コードを一括でRapidJSONのMITに変更するものではありません。各ファイルの原通知と同梱したLibxのLICENSEを参照してください。

コード、表、図、アンカーと元の定義を静的表示します。定義はソースまたは例の後の参照ブロックです。動的ツールチップや元サイトの全機能を再現せず、詳しい情報は原典リンクで補います。2016年版の原文の技術的正しさや現在の性能を追加保証するものではありません。
