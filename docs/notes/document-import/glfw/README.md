# GLFW文書インポート・翻訳パイロット

GLFW公式ドキュメントを取得し、英語定本と日本語翻訳をlibxへ配置する最初のパイロットの記録場所である。

## 現在の状態

- 状態: 英語定本と個別ビルド完了、日本語36/36ページを原文照合済み
- プロジェクトID: `glfw`
- 翻訳元: 英語（`en`）
- 最初の翻訳先: 日本語（`ja`）
- 上流版: GLFW 3.5.1（タグ`3.5.1`、コミット`d9d6f0f1f967807ffade6598ea9a631ebaf37a56`）
- libx版ID: `v3-5-1`（AstroのID正規化を避けるためピリオドを使用しない）
- libxサイト: `apps/glfw/`に作成済み

公式配布ZIP、タグ、コミット、公式`latest`入口を照合し、GLFW 3.5.1へ固定した。英語定本は14ガイドと22リファレンスページで構成し、再実行可能なインポータから生成する。

## ファイル

- [SOURCE_MANIFEST.md](./SOURCE_MANIFEST.md): 取得・版・ライセンスの記録
- [CONTENT_MAP.md](./CONTENT_MAP.md): 網羅性と配置の対応表
- [WORK_LOG.md](./WORK_LOG.md): 作業ごとの記録
- [REVIEW_CHECKLIST.md](./REVIEW_CHECKLIST.md): 公開前確認
- [TRANSLATION_GUIDE.md](./TRANSLATION_GUIDE.md): 用語と表記規則
- [MANUAL_TRANSLATION_PLAN.md](./MANUAL_TRANSLATION_PLAN.md): ページ単位の翻訳順序、完了条件、進捗表
- [TRANSLATION_MODEL_EVALUATION.md](./TRANSLATION_MODEL_EVALUATION.md): ローカル翻訳モデルの比較と自動化判断

## 一時作業領域

```text
.tmp/document-import/glfw/
├── 01-source/
├── 02-extracted/
├── 03-normalized/
├── 04-translation/
└── 05-reports/
```

一時領域の内容を直接定本にしない。出典と対応表が確定した生成物だけを`apps/glfw/`へ置き、翻訳とレビューの状態はこのディレクトリで追跡する。
