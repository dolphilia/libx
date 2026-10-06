# yyjson 0.13.0 Libx編集用ソース

固定コミット: 6447536015f3d600f3d65323b10976103b337ca7
原典: https://github.com/ibireme/yyjson/tree/6447536015f3d600f3d65323b10976103b337ca7

公式のMarkdown7資料・SVG7図、英語原文19ページ、非公式日本語訳16ガイドを収録します。原文API.mdは全1854行を保持し、意味のまとまった13節へ分割しています。更新履歴、原著Performance.mdのTODO、原MIT通知の3資料は未翻訳の英語原文です。生成Doxygenの全シンボル一覧、第三者テーマ、対話型ベンチマーク、図の編集ファイルは収録せず、公式文書と原典リンクで補います。原著の技術監査やサンプルプログラムの実行は行っていません。

## 編集とビルド

1. ZIPを空のディレクトリへ展開します。workspace/apps/yyjson/src/content/docs/v0-13-0/{en,ja}/ は編集可能なMarkdown原稿です。workspace/docs/notes/document-import/yyjson/v0-13-0/canonical/ と、公開用の apps/yyjson/public/source/v0-13-0/edited/ にも同じ原稿があります。
2. Node.js20以上、pnpm10.10.0を用い、workspaceで `pnpm install --frozen-lockfile` を実行します。依存本体は収録していないため、取得先への接続か取得済みstoreが必要です。
3. 展開元ZIPを workspace/apps/yyjson/public/source/v0-13-0/source.zip へコピーします。ZIP自身は再帰収録していません。このコピーで配布リンクが有効になります。
4. `pnpm --filter=apps-yyjson build` で apps/yyjson/dist/ を生成します。統合配信では /docs/yyjson/ へ配置します。yyjson本体をコンパイルする手順ではありません。

## 固定入力からの再生成

Python3の標準ライブラリーだけで、workspaceから `python3 scripts/importers/import-yyjson-0.13.0.py --output=/任意の空ディレクトリ` を実行できます。固定原文のSHAを確認して英語19ページを再生成し、保存済み日本語16ガイドを出力します。翻訳本文の編集は docs/notes/document-import/yyjson/v0-13-0/translations/ja/ に反映してください。再翻訳や原著の生成器・サンプルの実行は行いません。

`pnpm --filter=apps-yyjson check:content`、ビルド後の `pnpm --filter=apps-yyjson check:rendered` で、改変前の原文14件のSHA/Git blob、原稿35件・配布原稿・再生成一致、保存した16全文レビューとの対応、内部参照、本文・表・コード・図・前後の導線を確認します。本文を改変した後も保存レビューが有効という意味ではありません。Pythonの実行ファイルは必要なら YYJSON_PYTHON で指定できます。

## 条件・変更・制限

原文は workspace/docs/notes/document-import/yyjson/v0-13-0/source/original/ にあります。原MIT通知は関連文書を明示しており、著者名と許諾・免責の全文を保持しています。LibxのLICENSEと、各共有コード・第三者成分の通知も参照してください。各ファイルの条件を一括で置き換えるものではありません。

Libxの変更は、2026年10月の章分割、見出しと内部参照の調整、原寸SVGの静的表示・横スクロールと原図リンク、非公式日本語訳、出典・編集注記です。コードとコード内コメント、図の文字は原文を保持します。原著Performance.mdはTODOのみです。READMEの古い性能表・図と2020年の報告、原著の制限・注意書きを保持し、現在の比較結果や原文の技術的正しさを保証しません。

SOURCE_COMPONENTS.jsonは収録ファイルのSHA一覧です。新たな意味レビューや法的判断を代替するものではありません。
