# Awesome Production公開検証

- 最終更新日: 2026-08-30
- snapshot ID: `v2026-08-23`
- 状態: `pending`
- Production branch: 未確定
- deployment ID: 未発行
- Production URL: 未発行
- 管理者の公開承認: 未取得

## 現在地点

本snapshotのProduction公開は実施していない。以前このファイルに記載されていたdeployment ID、カスタムドメイン確認、2,059ファイル、365ページなどの値は、`v2026-08-20`のProduction記録を流用したものであり、`v2026-08-23`の公開証拠として無効である。

Production公開は、最終レビューが完了し、同一成果物によるPreview検証が合格し、管理者から明示承認を得た後にだけ実施する。

## 公開前ゲート

- 履歴版と新版のレビュー未解決が0件である。
- Preview検証が`completed`であり、deployment IDと成果物ツリーハッシュが記録されている。
- Preview後に本文、設定、依存関係、生成物が変更されていない。
- Production公開対象のツリーハッシュがPreview成果物と一致する。
- ロールバック対象となる直前のProduction deploymentを確認している。
- 管理者の公開承認日時と承認者を記録している。

## 公開後に記録する項目

1. Production branch、deployment ID、固有URL、カスタムドメイン、公開日時、実施者。
2. ファイル数、合計容量、最大asset、成果物ツリーハッシュ。
3. PreviewとProductionの成果物ハッシュ一致。
4. 英日入口、代表ページ、sidebar・search JSON、言語・版切替、404、帰属のHTTP・ブラウザ確認。
5. `v2026-08-20`の履歴URLと証拠が維持されていること。
6. 異常時に復旧する直前deployment IDと再検証手順。

公開と公開後確認が完了するまでは状態を`completed`へ変更しない。
