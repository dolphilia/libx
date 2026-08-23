# Awesome Production公開検証

- 検証日: 2026-08-23
- snapshot ID: `v2026-08-20`
- Cloudflare Pages project: `libx`
- Production branch: `main`
- deployment ID: `3dbc600b-1e0d-4a1d-bbab-94e01b8a78c6`
- 固有URL: `https://3dbc600b.libx.pages.dev`
- カスタムドメイン: `https://libx.dev`
- 直前のProduction deployment: `807217fe-adde-4f72-8ec8-b12673e66121`

## 公開成果物

日本語定型説明の全件修正後に、確認付き統合ビルドで生成した`dist`をProductionへ配信した。

| 項目 | 値 |
| --- | ---: |
| ファイル数 | 2,059 |
| 合計容量 | 230.17 MiB |
| 最大asset | 5.80 MiB |
| 成果物ツリーハッシュ | `db022bb896b7288f2287a7c843bd123fbd4b8c6d846346ce39d026b4dc534773` |
| 直前のProduction deployment | `807217fe-adde-4f72-8ec8-b12673e66121` |

Productionデプロイでは1,133ファイルを新規アップロードし、926ファイルは既存assetを再利用した。Cloudflareのデプロイ一覧で環境`Production`、ブランチ`main`、上記デプロイIDを確認した。

## 公開前ゲート

- 定型説明監査: 確定対象0文書、要確認0文書、定型化項目0件、日本語側だけの追加0件、欠落0件。
- `pnpm awesome:validate-translation`: 365/365ページに合格。
- `pnpm awesome:publish --check`: 365ページに合格。
- Awesome関連回帰テスト15件、リポジトリ整合性検査、`git diff --check`: 合格。
- `pnpm build -- --confirm`: Awesome 735ページを含む全6対象の統合ビルド完了。
- `pnpm check:deployment-assets`: 2,059ファイル、230.17 MiB、最大5.80 MiBで上限内。
- `pnpm test:smoke`: 12/12に合格。

## HTTP確認

Production固有URLと`https://libx.dev`で、ルート、Awesome日英概要、Node.js、修正対象のOKR、sidebar JSONはHTTP 200、未知のAwesome URLはHTTP 404だった。

ルート、日英概要、Node.js、sidebar JSONは配信内容がローカル成果物とバイト単位で一致した。OKRページも固有URLでは一致し、カスタムドメインではCloudflareのAutomatic HTTPS Rewritesが外部リンク3件の`http`を`https`へ変換した以外は完全に一致した。日本語概要から日本語Node.jsへの内部リンク、日英言語選択、`Snapshot 2026-08-20`、日本語サイドバーの「プラットフォーム」「ESP」「DOS」も確認した。

Cloudflareのdeployment固有URLには`X-Robots-Tag: noindex`が付与され、公開先のカスタムドメイン`libx.dev`には同ヘッダーがないことも確認した。

## ロールバック

Productionに異常がある場合は、直前のProduction deployment `807217fe-adde-4f72-8ec8-b12673e66121`を復旧対象とする。修正時は`OPERATIONS.md`に従い、レビュー失効範囲を確定し、新しい検証済み成果物をPreviewへ出し直す。
