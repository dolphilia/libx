# 外部文書インポートのパイロット記録

このディレクトリは、外部公式文書をlibxへ取得・整形・配置・翻訳するパイロットの由来、判断、例外、検証結果を記録する。

プロジェクトごとに次を保持する。

- `SOURCE_MANIFEST.md`: 取得元、固定版、チェックサム、ライセンス
- `CONTENT_MAP.md`: 上流文書とlibx文書の対応、採否、変換状態
- `WORK_LOG.md`: 逐次作業記録
- `REVIEW_CHECKLIST.md`: 構造、技術、翻訳、表示、法務の確認
- `TRANSLATION_GUIDE.md`: プロジェクト固有の用語、保護対象、表記規則
- `MANUAL_TRANSLATION_PLAN.md`: 翻訳順序、ページ完了条件、レビュー単位

大量の上流ソースや変換途中ファイルは`.tmp/document-import/<project>/`へ置き、ここには追加しない。検証済みの公開文書は`apps/<project>/`へ配置する。

## パイロット

- [GLFW](./glfw/): Doxygen文書を対象とした最初のパイロット
- [Lua](./lua/): 手書きHTML、manページ、多数のAPIアンカーを対象とする二つ目のパイロット

共通方針は[外部公式文書の取得・定本化・翻訳ガイド](../../guides/UPSTREAM_DOCUMENT_IMPORT_AND_TRANSLATION_GUIDE.md)を参照する。プロジェクト固有の計画は各記録ディレクトリのREADMEから参照する。
