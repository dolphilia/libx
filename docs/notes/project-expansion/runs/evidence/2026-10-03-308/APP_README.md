# cJSON 1.7.19 ドキュメント

公式リリース1.7.19（`c859b25da02955fef659d658b8f324b5cde87be3`）のREADME利用ガイド、MIT通知、貢献者一覧を、英語定本と日本語訳の全3組で提供します。API全件リファレンスやcJSON_Utilsの利用マニュアルではありません。

固定入力・対応表・保存訳・全文レビューは `../../docs/notes/document-import/cjson/v1-7-19/` にあります。MIT原通知は英日ページと配布用資産に保持し、日本語参考訳は非公式と明示しています。原文のCMake版、オブジェクト参照API名、失敗時の解放処理については本文と分けて注記しています。掲載コード例は実行検証していません。

## 検査

リポジトリのルートで、pnpm依存と固定Python Markdownを用意します。

```bash
pnpm install --frozen-lockfile
python3 -m venv .tmp/cjson-markdown-3.7
.tmp/cjson-markdown-3.7/bin/python -m pip install -r scripts/importers/requirements-cjson.txt
export LIBX_CJSON_PYTHON="$PWD/.tmp/cjson-markdown-3.7/bin/python"
pnpm --filter apps-cjson check:content
pnpm build:selective --projects=cjson
pnpm --filter apps-cjson check:rendered
```

`check:content`は書き込みなしで定本・日本語の再生成、全文レビューの現行SHA、文書集合、コード・一覧・アンカー・内部参照・原通知を照合します。Python実行ファイルは`LIBX_CJSON_PYTHON`、未設定時は`python3`を使い、Markdown 3.7がない場合は検査を失敗させます。`check:rendered`はさらに全6ページのビルド済み本文・コード・コピー操作欄・リンクの実体を確認します。CIは固定Python環境を用意し、ビルド前後にそれぞれ実行します。再生成時にLLMを呼び出しません。

## ローカル表示

```bash
pnpm --filter apps-cjson preview --host 127.0.0.1 --port 4401
```

入口は `http://127.0.0.1:4401/docs/cjson/` です。開発・検証にCloudflare Workersは使いません。外部配信は統合Cloudflare Pagesの公開工程で行います。
