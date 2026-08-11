# Lua文書インポート・翻訳パイロット

Lua 5.5.1の公式文書を英語定本として取り込み、日本語へ逐次翻訳する二つ目の外部文書パイロットの記録領域である。

## 現在の状態

- 正式取得前の再確認でLua 5.5.1が2026-08-03に正式公開済みと判明したため、対象を5.5.1へ切り替えた。
- 公式tarballと比較用公式HTMLを取得し、SHA-256、HTTPメタデータ、同梱文書、固定版MITライセンスを確認した。
- 正式HTML、manページ、目次、4ヘッダーを集計し、全`doc/`ファイルを分類した。
- 56ページ・538上流アンカーのページマップを確定し、安全なLua用インポータを実装した。
- `apps/lua`を公式テンプレートから作成し、Lua 5.5.1、英語定本、日本語対応、MITライセンスを設定した。
- 英語定本56ページを生成した。再現性検査、582内部リンク検査、Luaサイト個別ビルドは成功している。
- 翻訳規則と代表ページの試訳を確定し、フェーズ5を完了した。
- 日本語56ページを一ページずつ翻訳し、英語定本と同じカテゴリ・スラッグへ配置した。全訳後に内部URLを日本語へ同期し、欠落を許容しない検査で定本56件、翻訳56件、内部リンク1,164件、エラー0件を確認した。
- 個別・選択的・統合ビルド、リポジトリ整合性、リンク、成果物予算、スモークテストに合格した。最新の統合成果物は799ファイル、36.65 MiBである。
- ローカルのブラウザ確認で、代表ページ、404、言語切替、サイドバー、モバイル、コードの横スクロール、帰属を確認した。その過程でハイフンを含む版IDのサイドバー先読みと、`.md`ページの前後移動を修正した。
- Cloudflare PagesのPreview確認後、管理者の明示承認を受けてProductionへ公開した。`libx.dev`で主要URLの200、未知URLの404、56件の入口、帰属、サイドバー、前後移動、ブラウザログ0件を確認した。

## ファイル

- [パイロット計画](../../../plans/LUA_DOCUMENT_IMPORT_TRANSLATION_PILOT_PLAN.md)
- [SOURCE_MANIFEST.md](./SOURCE_MANIFEST.md): 版、取得物、ライセンス、移動する公式情報の記録
- [CONTENT_MAP.md](./CONTENT_MAP.md): 上流文書、用途、libx配置の対応表
- [TRANSLATION_GUIDE.md](./TRANSLATION_GUIDE.md): Lua固有の用語・保護対象・表記規則
- [MANUAL_TRANSLATION_PLAN.md](./MANUAL_TRANSLATION_PLAN.md): 翻訳順序、ページ完了条件、レビュー単位
- [WORK_LOG.md](./WORK_LOG.md): 取得から公開までの逐次記録
- [REVIEW_CHECKLIST.md](./REVIEW_CHECKLIST.md): 公開前ゲート
- [RETROSPECTIVE.md](./RETROSPECTIVE.md): GLFWとの比較を含むパイロット総括
- [LIBX_IMPLEMENTATION_IMPROVEMENTS.md](./LIBX_IMPLEMENTATION_IMPROVEMENTS.md): パイロットから得た実装改善案
- [USABILITY_AND_MARKDOWN_IMPROVEMENTS.md](./USABILITY_AND_MARKDOWN_IMPROVEMENTS.md): 管理操作、閲覧性、Markdown／MDX、共通UIの追加改善調査
- [実装計画](../../../plans/LIBX_USABILITY_AND_MARKDOWN_IMPROVEMENT_PLAN.md): 追加改善調査を実施するフェーズ、依存関係、完了条件

## 一時作業領域

```text
.tmp/document-import/lua/
├── 01-source/
├── 02-extracted/
├── 03-normalized/
├── 04-translation/
└── 05-reports/
```

原資料と中間生成物は`.tmp/`に置き、検証済みの定本と翻訳だけを`apps/lua/`へ配置する。

## 完了状態

計画した取得、定本化、サイト設定、全56ページの日本語翻訳、品質ゲート、ブラウザ確認、Preview、Production、振り返りを完了した。独立した第三者校閲と実機・複数ブラウザによるアクセシビリティ確認は、計画完了後も継続できる品質改善事項として残す。
