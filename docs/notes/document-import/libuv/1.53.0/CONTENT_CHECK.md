# libuv content検査

`check:content` は読み取り専用です。Python 3とbeautifulsoup4 4.13.3、およびインストール済みのpnpmワークスペース依存が必要です。ローカルLLMを呼び出しません。

統合後はリポジトリルートで `pnpm --filter=apps-libuv check:content` を実行します。取得資料・レビュー証拠が別のリポジトリにある隔離アプリでは、`--repository /absolute/repository` と `--workspace /absolute/workspace` を指定します。`--output /absolute/evidence.json` は検査結果の保存先です。

固定107入力、現行レビュー対象の英日43対、API宣言・コード・ID・構造、本文とフッターの内部参照、出典と原通知を照合します。取得時のREADMEと版ヘッダーはリポジトリで保存・ハッシュ検査し、通知3点はnoticesに配信します。他の102入力はsourceに配信します。本文・フッターで使用する配信URLは実ファイル/アンカーへ検査します。外部URL・外部補助動画の内容を確認済みとは扱いません。

定本9段階→保存済み日本語訳配置→日本語href overlay→runtime準備→content gate準備→入口・カテゴリruntime準備→見出し→prebuild/検索を一時コピーで再実行し、定本43件・アプリ86件とruntime9ファイルの完全一致を検査します。元の文書とアプリへ書き込みません。

AI全文レビュー、ブラウザー表示、人手確認、統合・公開は別工程です。このコマンドの合格だけでは案件をverifiedにしません。

出典分類は `SOURCE_CLASSIFICATION.json` を正本として参照します。旧取得目録107入力のうち、上流原資料は106件、1件はSphinx試験生成時のPythonキャッシュです。このキャッシュは履歴証拠として保持し、公開原資料から除外します。取得READMEの参照先として同じ固定アーカイブの `SUPPORTED_PLATFORMS.md` 1件も保持しています。分類訂正で本文・訳文・全文レビュー範囲は変わりません。
