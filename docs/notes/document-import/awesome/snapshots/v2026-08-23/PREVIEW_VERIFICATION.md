# Awesome Preview表示検証

- 最終更新日: 2026-08-30
- snapshot ID: `v2026-08-23`
- 状態: `completed`
- Preview branch: `awesome-v2026-08-23-preview`
- deployment ID: `a18734a2-08a2-4be4-a57b-3a8cdf14bd40`
- Preview URL: `https://a18734a2.libx.pages.dev`
- branch alias: `https://awesome-v2026-08-23-preview.libx.pages.dev`
- 確認日時: 2026-08-30T10:07:10+09:00
- 確認者: `codex`
- Preview配置承認: 取得済み（2026-08-30、管理者の明示指示）
- Production配置承認: 取得済み（2026-08-30、配置完了）

## 現在地点

本snapshotの外部Preview配置と実ブラウザ検証は完了した。以前このファイルに記載されていたdeployment ID、URL、365ページ、416件レビュー完了などの値は、`v2026-08-20`の公開記録を流用したものであり、今回の記録へ置き換えた。

2026-08-30に管理者が送信物`dist`、配置先`libx`、Preview branchを示した追加承認を行った。Wrangler標準の40 MiB×3並列asset uploadはCloudflare APIのヘッダー待ちで失敗したため、同じWrangler 4.127.1の一時コピーで送信バケットだけを10 MiBへ縮小した。成果物は変更せず、全4,754件（新規3,451件、既存1,303件）を配置した。この時点ではProductionを変更せず、後続の明示承認後に同一成果物をProductionへ配置した。

ローカルでは次を確認済みである。

| 項目 | 現在値 |
| --- | ---: |
| 英語定本 | 672 |
| 日本語ファイル | 672 |
| 翻訳状態登録 | 672/672、68バッチ |
| 翻訳構造検査 | 672/672合格 |
| 定型説明監査 | 未解決0ページ・0項目 |
| 機械監査レビューキュー | 759件 |
| 最終レビュー | 自動証拠レビュー759/759承認、未解決0 |
| Preview候補ファイル | 4,754 |
| Preview候補容量 | 653.19 MiB |
| Preview候補ツリーハッシュ | `bfc252bcefc11be01cc8a236f50650f7771669230060c9508de408695aee6948` |

ツリーハッシュは、相対パス昇順で各ファイルについて`relative path + NUL + file sha256 hex + LF`を連結し、その全体をSHA-256で算出した。

人手による自然さの署名は完了条件から外されている。これは自然さを人手確認済みとする記録ではない。配置直前の統合ビルドと全ローカル品質ゲートが合格した時点でPreview候補成果物を固定する。

## 配置・表示検証結果

| 検査 | 結果 |
| --- | --- |
| Cloudflare環境・branch | Preview / `awesome-v2026-08-23-preview` |
| 固有URL・branch alias | 両方とも主要ページ200 |
| 新版日本語概要 | 200、見出し・概要・28カテゴリ表示名・サイドバー表示を確認 |
| 履歴版英語概要 | 200、版切替後も同一slugを維持 |
| 言語切替 | `ja`から`en`へ切替後も版・slugを維持 |
| 検索 | `node`で`awesome-nodered`と`awesome-nodejs`を表示 |
| 大規模ページ | Board Gamesをデスクトップ・390×844で表示、横方向overflowなし |
| sidebar/search JSON | 200、`v2026-08-23`・`ja`の内容を確認 |
| 未知URL | 404、専用Page not found表示 |
| Preview検索除外 | HTML・JSONで`X-Robots-Tag: noindex` |
| 自動証拠レビュー表示 | `759/759`と、人手による自然さ確認ではない旨を表示 |

## 配置前ゲート

- `v2026-08-20`と`v2026-08-23`の版別検査が合格している。
- 最終本文から検索、サイドバー、ルート、機械監査、レビューキューを再生成している。
- 履歴版と新版の自動証拠レビューに未解決がない。
- Awesomeビルド、選択的統合ビルド、リンク、integrity、asset、runtime、smoke検査が合格している。
- Preview配置について管理者の明示承認がある。（取得済み）

## Previewで確認する項目

1. Production候補と同一の成果物をPreviewへ配置し、成果物ツリーハッシュを記録する。
2. 英日入口、短い・中央値・最大ページ、28カテゴリ、404、帰属をデスクトップとモバイルで確認する。
3. 言語切替と`v2026-08-20`／`v2026-08-23`の版切替が同じsource IDを維持することを確認する。
4. 内部リンク、アンカー、外部リンク表示、サイドバー、検索結果、前後移動を確認する。
5. sidebar・search JSON、未知URL、`X-Robots-Tag`をHTTPで確認する。
6. deployment ID、固有URL、branch alias、確認日時、確認者、viewport、検出事項を追記する。

上記項目が合格したため、本記録を`completed`とする。
