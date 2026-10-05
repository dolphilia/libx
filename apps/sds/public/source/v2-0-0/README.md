# SDS 2.0.0 Libx編集用ソース

固定コミット: f74b9b785b63c6d8ea312d7e7864df5267149c85
原典: https://github.com/antirez/sds/tree/f74b9b785b63c6d8ea312d7e7864df5267149c85

英語原文12ページと非公式日本語訳8章、固定版の全9ファイル、原通知、再生成入力、Libxの共有ビルドコードと設定を収録します。READMEの全文を8章に分けて英日で提供し、APIコメント・公開ヘッダー・割当ヘッダー・原ライセンスの4ページは英語のみです。全文意味レビューはガイド8章が対象です。原ソフトウェアのコード例は実行検証していません。

## 編集・再構築

1. ZIPを新しいディレクトリへ展開します。workspace/apps/sds/src/content/docs/v2-0-0/{en,ja}/ が表示用の編集可能なMarkdown原稿（raw HTMLを含む）です。public/source/v2-0-0/edited/ にも同じ原稿を収録しています。編集する場合は、配布原稿にも同じ変更を反映してください。
2. Node.js20以上とpnpm10.10.0を用い、workspaceで `pnpm install --frozen-lockfile` を実行します。依存本体は収録しないため、取得先への接続または事前取得済みstoreが必要です。
3. 展開に使ったZIPを workspace/apps/sds/public/source/v2-0-0/source.zip へコピーします。ZIP自身は再帰収録せず、これによりフッターの配布リンクを有効にします。
4. `pnpm --filter=apps-sds build` で apps/sds/dist/ を生成します。統合配信では /docs/sds/ へ配置します。原SDSソフトウェアをコンパイルする手順ではありません。

## 再生成・確認

Python3.10以上で仮想環境を作成し、 `python -m pip install -r docs/notes/document-import/sds/v2-0-0/requirements-content.txt` でMarkdown3.7を用意します。
`python scripts/importers/import-sds-2.0.0.py --output=/任意の空ディレクトリ` で、固定入力から英語12ページと保存済み日本語8章を再生成します。再翻訳や上流サイトの動作再現は行いません。
仮想環境のPythonを `SDS_PYTHON=/絶対パス/bin/python` に指定して `pnpm --filter=apps-sds check:content` と、ビルド後の `pnpm --filter=apps-sds check:rendered` を実行できます。
改変前の配布物では、固定9ファイルのSHA/Git blob、英日原稿20件・配布原稿・再生成一致、保存済みレビューの結び付け、リンクと描画本文を照合します。本文を改変した後も保存済みレビューが有効になるという意味ではありません。

## 原文と条件

固定9ファイルは workspace/docs/notes/document-import/sds/v2-0-0/source/original/ にあります。READMEは同版LICENSEのBSD2条項を明示参照します。sds.c・sds.h・sdsalloc.hには別のBSD3条項通知があり、Redisや貢献者名による推薦・宣伝の制限も全文保持します。各原通知・第三者成分・Libxの共有コードの条件を一括で置き換えるものではありません。同梱Libx LICENSEと各ファイルの通知を参照してください。
Libxの変更は、2026年10月の章分割・静的HTMLへの変換・非公式日本語訳・原典リンク・分離した編集注記です。原文の旧内部構造、結合/トリミングAPIの説明差、例の不備などはフッターで補います。原文自体の技術的正しさや現在のAPI全体を保証しません。
原文の語を削らず、3つの入れ子コードフェンスだけをインデント形式へ直した固定入力を保持します。コード改行はAstroでの再解釈を避けるためHTML参照で表しますが、表示時のコード文字・空白は原文どおりです。
SOURCE_COMPONENTS.jsonは全収録ファイルのSHA一覧であり、法的判断や新たなレビュー証明ではありません。
