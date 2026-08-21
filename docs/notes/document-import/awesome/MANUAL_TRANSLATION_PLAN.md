# 手動翻訳計画

翻訳対象は`included`の英語定本ページだけである。`metadata-only`と`pending-license-review`の本文は翻訳しない。

フェーズ7では、各ページを一件ずつ翻訳し、`validate-awesome-translation`、出典ID一致、英語定本との構造・URL・項目順序・保護対象の照合に合格したものを`translation-validated`として`apps/awesome`へ入れる。原文との意味照合と日本語表現の人手内容レビューは、計画どおりフェーズ10でのみ行う。未完成の初稿は`.tmp/document-import/awesome/04-translation/`へ置く。

## 再現可能な手順

1. `TRANSLATION_TERMS.json`の保護対象を確認する。URL、コード、製品名、リポジトリ名、ライセンス名は変更しない。
2. 英語定本を一ページだけ読み、見出し階層、リスト項目、URLの順序を保持して日本語化する。
3. `pnpm awesome:validate-translation`に通過させる。Google翻訳・DeepLなどの翻訳API、品質を担保できないローカルLLM、無検査の一括生成スクリプトは使わない。Codex・Claude・Geminiなどの高性能LLMは、一ページ単位で担当者が出力を確認し、この検査を通す補助として使用できる。
4. 構造検査に合格したページを最大10件のバッチとして記録し、意味・表現に関する未解決事項はフェーズ10のレビューキューへ残す。
