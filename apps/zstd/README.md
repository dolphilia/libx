# Zstandard 形式仕様

Zstandard 1.5.7収録の圧縮形式仕様0.4.3（2024-10-07）の全文を、英語原文とLibxによる非公式日本語訳で提供します。固定コミットは `f8745da6ff1ad1e7bab384bd1f9d742439278e99` です。9章に分割し、両付録、許諾通知、全変更履歴を含めています。CLI・API・元サイト固有の機能は収録範囲外です。

原文全文と原許諾通知は `public/source/v1-5-7/` にあります。原通知による翻訳許可を用い、原文を別ライセンスで置き換えていません。原参照切れの補正と、原例の表の相違はページの編集注記に記載しています。

リポジトリルートで実行します。

```sh
pnpm --filter=apps-zstd import:canonical
pnpm --filter=apps-zstd check:content
pnpm build:selective --projects=zstd
pnpm --filter=apps-zstd check:rendered
```

定本生成器は固定原文のSHAを検査し、英語9章を決定的に再生成します。日本語訳は生成器で上書きしません。全文レビューと入力対応表は `docs/notes/document-import/zstd/v1-5-7/` に保存しています。
