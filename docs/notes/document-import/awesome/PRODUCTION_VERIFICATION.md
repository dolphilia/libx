# Awesome Production公開検証

- 検証日: 2026-08-22
- snapshot ID: `v2026-08-20`
- Cloudflare Pages project: `libx`
- Production branch: `main`
- deployment ID: `01c0fffb-b509-4dfd-a187-6297c78e980a`
- 固有URL: `https://01c0fffb.libx.pages.dev`
- カスタムドメイン: `https://libx.dev`
- 直前のProduction deployment: `c4f018b5-b184-4b7a-bf1c-dba59b879814`

## 公開成果物

最終PreviewとProductionへ、確認付き統合ビルドで生成した同一`dist`を順に配信した。

| 項目 | 値 |
| --- | ---: |
| ファイル数 | 2,059 |
| 合計容量 | 228.94 MiB |
| 最大asset | 5.80 MiB |
| 成果物ツリーハッシュ | `85dda92baa6438d77ae7013a35527da0682d0b817325d8257d8ae8b6ce92bf55` |
| 最終Preview deployment | `0d8fa21f-221b-46a5-b2fe-581aac92212b` |

Productionデプロイでは2,059ファイルがすべて既存アップロードと一致し、追加アップロード0件で配信された。これにより、最終PreviewとProductionが同一Cloudflare asset集合を使用したことも確認した。

## 公開前ゲート

- `pnpm check`: unit 26/26、runtime 74/74、全アプリビルド、smoke 7/7に合格。
- `pnpm build -- --confirm`: 統合ビルド完了。
- `pnpm check:deployment-assets`: 2,059ファイル、上限内。
- `pnpm awesome:sync-final-review --require-complete`: 365/365ページ、37/37バッチ、pending 0件。
- `pnpm awesome:audit-machine --check`: 英日365/365ページ、レビュー416件。
- `pnpm awesome:publish --check`、`git diff --check`: 合格。

## HTTP確認

Production固有URLと`https://libx.dev`の双方で、ルート、Awesome日本語入口、短い代表ページ、最大ページ、sidebar JSON、search JSONはHTTP 200、未知のAwesome URLはHTTP 404だった。

Cloudflareのdeployment固有URLには`X-Robots-Tag: noindex`が付与されたが、公開先のカスタムドメイン`libx.dev`には同ヘッダーがないことを確認した。

## 実ブラウザ確認

Codex in-app Browser（Chromium）で`https://libx.dev/docs/awesome/v2026-08-20/ja/`を確認した。

- 日本語入口は`lang="ja"`で、レビュー済み`416/416`と「内容の人手レビューは完了しています。」を表示する。
- 表示本文に`人手レビュー前`、`未検査`、`作業中`、`未翻訳`の旧進捗表記はない。
- 検索ダイアログへ`PocketBase`を入力すると`benallfree/awesome-pocketbase`が表示される。
- 最大ページ`avelino/awesome-go`は日本語見出し、サイドバー、本文を表示する。

## ロールバック

Productionに異常がある場合は、直前のProduction deployment `c4f018b5-b184-4b7a-bf1c-dba59b879814`を復旧対象とする。修正時は`OPERATIONS.md`に従い、レビュー失効範囲を確定し、新しい検証済み成果物をPreviewへ出し直す。
