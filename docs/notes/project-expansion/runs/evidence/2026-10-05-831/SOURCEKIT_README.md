# LZ4 1.10.0 Libx再現用ソースキット（内部検証草稿）

この草稿は外部公開していません。英語定本27・日本語27、208固定上流入力、上流アーカイブ、元の通知、内容map/lock・レビュー証拠、変換器、LZ4サイト実装、共有packagesとビルド補助、依存lockを含みます。node_modules、生成dist、他アプリの本文、Awesome資料は含みません。

## 再現

Node.js >=20（今回24.19.0）、pnpm 10.10.0、Python3を用意し、このディレクトリで次を実行します。Pythonの外部ライブラリは不要です。

```sh
pnpm install --frozen-lockfile
pnpm --filter apps-lz4 build
pnpm --filter apps-lz4 check:content
pnpm --filter apps-lz4 preview --host 127.0.0.1 --port 4328
```

表示先は http://127.0.0.1:4328/docs/lz4 です。Cloudflare Workersの起動・公開は行いません。依存lockに含まれる無関係な開発ツールはこの再現工程では実行しません。

英語定本のみの再生成は、空の一時ディレクトリを用意して次を実行します。出力は元の英語本文へ上書きせず、SHAを照合してください。日本語本文を生成する操作ではありません。

```sh
python3 docs/notes/project-expansion/runs/evidence/2026-10-05-802/generate-canonical.py --root . --stage /absolute/path/to/empty-stage
```

check:contentはこのキット内の出典・レビューを使用する既定設定で実行できます。OPERATIONSは取得時の原本を保持しますが、別案件の成果物までは同梱しないため、全体台帳検査をこの部分キットで実行しないでください。古い/tmp workspace記録は履歴であり、コマンドの実行先ではありません。

## 通知と未完条件

文書ごとのBSD/GPL/Frame固有/DJGPP条件は apps/lz4/public/source/v1-10-0/licenses と RIGHTS_AND_FULFILLMENT.json を参照してください。上流原通知を保持し、日本語は非公式翻訳・2026-10-05の改変として表示します。GPL対象の文書ソース・翻訳・定本はその記録された同条件に従います。

Libxの共有実装にはroot LICENSEとpackage license指定を確認できていません。この草稿は共有実装をGPL等へ新たに再許諾した記録ではなく、外部配布条件の確認を未完事項として残します。依存npmパッケージはlockで固定し、各配布物の原ライセンスが適用されます。必要な第三者通知・対応ソース提供範囲の確認、クリーンな依存導入・再生成・ビルド検証、キットのアーカイブ化と同サイトdownload配置、ページからのリンク、共有統合はまだ完了していません。原文アーカイブだけをLibx完全対応ソースとは呼びません。
