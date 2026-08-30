# Awesome Production公開検証

- 最終更新日: 2026-08-30
- snapshot ID: `v2026-08-23`
- 状態: `completed`
- Production branch: `main`
- deployment ID: `e2f480a1-2b26-4dd6-a6f5-6ea4b336f6b3`
- 固有URL: `https://e2f480a1.libx.pages.dev`
- Pages標準URL: `https://libx.pages.dev`
- カスタムドメイン: `https://libx.dev`
- source: `452b5d0`
- 公開・確認日時: 2026-08-30T11:34:04+09:00
- 実施・確認者: `codex`
- 管理者の公開承認: 取得済み（2026-08-30、明示指示）

## 最新リンク修正版の再公開

管理者の明示承認後、トップページ、Awesome汎用入口、404、サイトタイトルが可能な限り最新の`v2026-08-23`を指すよう修正した統合`dist`を、Production branch `main`へDirect Uploadした。Wrangler 4.60.0の標準送信は2,658件目でCloudflare API応答待ちになったため中断し、前回成功実績のあるWrangler 4.127.1の10 MiB送信版で再開した。成果物自体は変更していない。

| 項目 | 値 |
| --- | ---: |
| ファイル数 | 4,754 |
| 合計容量 | 653.19 MiB |
| 最大asset | 5.80 MiB（`dist/docs/glfw/assets/_astro_data-layer-content.4nRuzYGZ.js`） |
| 成果物ツリーハッシュ | `a989fa8d74b528757553e90c43aa64e5a55bcfa0e57459010ee5f0ce48faf995` |
| Cloudflare upload | 2,096件送信、2,658件既存一致 |

公開後、固有URL、`libx.pages.dev`、`libx.dev`で日英トップページが各言語の`v2026-08-23` overviewを指すことを確認した。`/docs/awesome/`は`/docs/awesome/v2026-08-23/en/`へ遷移し、最新版日本語overviewは200、未知URLは404だった。固有deployment URLだけに`X-Robots-Tag: noindex`があり、Pages標準URLとカスタムドメインには付与されていない。

再公開前のProduction deploymentは`85bb19db-7da5-4d2e-9b39-3bbecf6d1fb6`である。

## 初回公開結果

管理者の明示承認後、Preview deployment `a18734a2-08a2-4be4-a57b-3a8cdf14bd40`で検証したものと同一の統合`dist`をCloudflare Pagesプロジェクト`libx`のProduction branch `main`へDirect Uploadした。Cloudflareのasset照合では4,754件すべてが既存アップロードと一致し、再送信は0件だった。

| 項目 | 値 |
| --- | ---: |
| ファイル数 | 4,754 |
| 合計容量 | 684,919,398 bytes（653.19 MiB） |
| 最大asset | 6,084,592 bytes（`dist/docs/glfw/assets/_astro_data-layer-content.4nRuzYGZ.js`） |
| 成果物ツリーハッシュ | `bfc252bcefc11be01cc8a236f50650f7771669230060c9508de408695aee6948` |
| Previewとのハッシュ一致 | 一致 |
| Cloudflare upload | 0件送信、4,754件既存一致 |

ツリーハッシュは、相対パス昇順で各ファイルについて`relative path + NUL + file sha256 hex + LF`を連結し、その全体をSHA-256で算出した。

## 公開後検証

| 検査 | 結果 |
| --- | --- |
| deployment登録 | Production / `main` / source `c2daeec`を確認 |
| 固有URL・Pages標準URL・カスタムドメイン | 主要ページ200 |
| 新版日本語 | 672/672、レビュー759/759、自然さの人手確認ではない旨を表示 |
| 履歴版 | `v2026-08-20`の英日URLが200、版切替で同一言語を維持 |
| 言語切替 | `ja`から`en`へ切替後もsnapshotを維持 |
| sidebar・search JSON | 200、`v2026-08-23`・`ja`の内容を確認 |
| 検索UI | `node`で`awesome-nodered`と`awesome-nodejs`を表示 |
| 大規模ページ | Board Gamesを390×844で表示し、横方向overflowなし（`innerWidth=390`、`scrollWidth=375`） |
| 未知URL | 404、専用Page not found表示 |
| 検索制御 | 固有deployment URLのみ`X-Robots-Tag: noindex`、`libx.pages.dev`と`libx.dev`には付与なし |
| 帰属・ナビゲーション | Previewと同一成果物であることと主要動線を確認 |

HTTP検査と実ブラウザ検査はいずれも合格し、公開後に本文、設定、生成物の修正は発生していない。

## 初回公開時のロールバック記録

- 直前のProduction deployment: `ee06cf82-bd17-4348-9f6b-77b0ce606be1`
- 復旧時はCloudflare Pagesでこのdeploymentへロールバックし、主要URL、sidebar・search JSON、404を再検証する。
- 修正版を再公開する場合は、新しい成果物としてPreviewから検証をやり直し、Production復帰の明示承認を得る。

公開、公開後確認、証跡記録が完了したため、本記録を`completed`とする。
