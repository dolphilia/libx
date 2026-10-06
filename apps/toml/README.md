# TOML ドキュメント

TOML 1.1.0 の公開仕様全文、ABNF 文法全文、両 MIT ライセンス原文を英語と日本語で収録します。正規テンプレートから生成した通常の文書アプリです。

固定入力、収録範囲、定本、翻訳と全文レビューの記録は `docs/notes/document-import/toml/v1-1-0/` にあります。公開仕様と ABNF は異なる固定リポジトリの出典を使います。

```bash
# リポジトリルートで再生成一致と日本語版を検査
pnpm --filter apps-toml check:content

# 隔離環境で選択的に統合ビルド
pnpm build:selective --projects=toml,landing

# アプリだけをローカルで確認
pnpm --filter apps-toml dev
```

上流更新では新しい Libx 版を追加します。固定入力の翻訳を変更した場合も、該当ページの全文レビューと機械・表示検査を更新してください。ローカル検証には Astro を使います。外部公開には別途ユーザーの指示が必要です。
