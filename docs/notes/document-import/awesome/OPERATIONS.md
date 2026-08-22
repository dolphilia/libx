# Awesomeスナップショット運用手順

- 対象: `v2026-08-20`
- 最終更新: 2026-08-22
- 状態: 内容人手レビュー416/416合格、Cloudflare Pages Preview・Production公開検証済み

## 1. 正本と不変条件

`SOURCES.lock.json`、固定原文アーカイブ、`EXCLUSIONS.json`、`CONTENT_MAP.json`を入力の正本とする。公開本文、ルート、サイドバー、検索索引は生成物であり、英語定本を直接修正して生成差分を隠してはならない。固定後に上流の既定ブランチへ追従せず、更新は新しいsnapshot IDとして扱う。

Production公開条件は、外部Preview検証に合格し、`FINAL_REVIEW_RESULTS.json`に署名された個別結果またはキュー全体の包括証明から`FINAL_REVIEW_QUEUE.json`の全416項目を解消し、対象バッチを`human-reviewed`化し、全機械ゲートへ再合格したうえで管理者の明示承認を得ることである。`v2026-08-20`は全416件の包括合格判定を証拠ハッシュへ結び付け、365ページ・37バッチを`human-reviewed`化し、Production公開承認を得ている。

## 2. 更新差分の取り込み

1. 現行lockと成果物を保持したまま、新しいsnapshot IDで発見・固定を実行する。
2. repository、document path、commit SHA、document SHA-256、license evidenceの差分を確定する。
3. 新規・変更・削除・status変更をsource ID単位で一覧化する。ライセンス不明は`pending-license-review`で停止する。
4. 変更した固定入力だけを取得し、安全な一時出力へ正規化する。
5. `awesome:validate-canonical`と`awesome:publish --check`で、手修正や非決定差分がないことを確認する。
6. 影響ページだけを再翻訳し、最大10ページ単位で構造検査する。
7. 全件監査、ビルド、実ブラウザPreviewを再実行する。

## 3. レビュー失効

次のいずれかが変化したsource IDは、対応する英語標本レビュー、日本語全文レビュー、除外レビューを未完了へ戻す。

- 固定文書SHA-256、commit SHA、document path
- 正規化規則、除外規則、ページ境界、URL
- 英語定本の見出し、リスト項目、URL、コード、画像
- 日本語本文または用語集
- license statusまたは帰属情報

`FINAL_REVIEW_QUEUE.json`は機械監査から再生成し、人の署名結果は`FINAL_REVIEW_RESULTS.json`へ分離する。各結果は対象の固定原文・英語定本・日本語本文・除外断片から作る`evidenceHash`に結び付け、旧snapshotのレビュー結果を新snapshotへ自動継承しない。変更のないsource IDも、共通変換規則が変わった場合は生成ハッシュを比較し、差分があれば失効させる。

## 4. 再生成と検査

公開前の最小実行順は次のとおり。

```bash
pnpm awesome:publish --check
pnpm awesome:validate-assets
pnpm --filter apps-awesome check:content
pnpm awesome:validate-translation-complete
pnpm awesome:audit-machine --check
pnpm awesome:sync-final-review
pnpm build:selective --projects=awesome
pnpm check:links
pnpm check:integrity
pnpm test:runtime
pnpm check:deployment-assets
pnpm test:smoke
```

フェーズ10完了時は`pnpm awesome:sync-final-review --require-complete`も必須とする。レビュー結果を追加した後は`pnpm awesome:audit-machine`でキューへ反映し、`pnpm awesome:sync-final-review --write`でページ・バッチ状態を同期する。

生成物を更新する必要がある場合だけ、`pnpm awesome:publish`を先に実行する。公開直前はさらに`pnpm check`と確認付き統合ビルドを行い、同じ`dist`をPreviewとProductionに使用する。

## 5. Preview確認

入口、28カテゴリ、短い・中央値・最大ページ、metadata-only外部リンク、独自404、英日切替、単一版表示、帰属、サイドバー、前後移動、目次、検索、モバイル折返しを確認する。件数と既知の制約は`PREVIEW_VERIFICATION.md`へ記録する。Awesomeは英語・日本語のみのためRTLページはなく、共通レイアウトの`dir`計算に副作用がないことを確認対象とする。

外部Previewは一般公開URLとなるため、統合`dist`のアップロード前に明示承認を得る。Preview専用branchを使い、Production branch・custom domainへ反映しない。Cloudflare PagesはPreview応答へ`X-Robots-Tag: noindex`を既定付与するため、Productionと共有する成果物へPreview専用`_headers`は追加しない。配信後は固有URL、deployment ID、成果物ツリーハッシュを記録し、既定`X-Robots-Tag`、主要URL・JSON・未知URLのHTTP statusと実ブラウザ表示を検査する。

`v2026-08-20`の最終検証済みPreviewはdeployment ID `0d8fa21f-221b-46a5-b2fe-581aac92212b`、専用branch `awesome-v2026-08-20-preview`、固有URL `https://0d8fa21f.libx.pages.dev`である。Productionはdeployment ID `01c0fffb-b509-4dfd-a187-6297c78e980a`として公開済みである。検査結果と成果物ハッシュは`PREVIEW_VERIFICATION.md`と`PRODUCTION_VERIFICATION.md`を正本とする。

## 6. ロールバック

1. Production異常時は新規生成を続けず、直前に検証済みのデプロイ成果物へ戻す。
2. デプロイID、snapshot ID、lock SHA-256、統合成果物ハッシュを記録し、戻した対象を特定可能にする。
3. lockや固定原文を巻き戻して上書きせず、問題snapshotを保持して原因を調査する。
4. 修正は新しい検証済み成果物としてPreviewへ出し直し、失効したレビューを再実行する。
5. Production復帰も管理者の明示承認後に行う。

ロールバックは配信状態を戻す操作であり、レビュー状態を合格へ戻す操作ではない。
