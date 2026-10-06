# PCRE2 10.49 原稿・翻訳・再構築キット / source and rebuild kit

原稿は PCRE2Project/pcre2 の `pcre2-10.49`、commit `6f9d7c1373262c541324a16a358785b33ef116cf` に固定しています。2026年9月28日リリース、Libx取得日は2026年10月6日です。提供範囲は概要・サンプルプログラムの説明・照合アルゴリズム・制限・構文一覧の5文書を全節収録した英語コピーと独自の日本語訳です。その他の詳細は固定した英語HTML文書一式（101 HTMLと2 text）および原典を参照できます。

The originals are fixed to the commit above. Five complete manuals have paired English and independent Japanese versions: pcre2, pcre2sample, pcre2matching, pcre2limits, and pcre2syntax. The other fixed English HTML references are supplied without a claim of Japanese translation.

## 利用条件 / notices

原著の `LICENCE.md` は `doc` ディレクトリーにもソフトウェアと同じ条件を適用することを明記しています。全文の著作権表示・3条件・免責・PCRE2例外は `workspace/docs/notes/document-import/pcre2/v10-49/source/original/LICENCE.md` と配布アプリの原稿コピーに保持しています。ライセンス表記は **BSD-3-Clause WITH PCRE2-exception** です。例外の文面を一般化せず、各原著者・寄稿者の通知も保持しています。Libxによる整形と日本語訳は非公式で、原著者・ケンブリッジ大学・寄稿者の推薦を示しません。

The original license expressly includes the doc directory. The complete copyright notices, redistribution conditions, disclaimer, and PCRE2 exception are preserved in the original LICENCE.md. Each manual retains its author, revision, and copyright notice. Libx formatting and translation are unofficial. Shared Libx build files retain their existing notices and licenses. No PCRE2 engine, SLJIT implementation, binary, or example executable is included or executed by these documentation steps.

## 内容と編集用入力 / preferred inputs

- `SOURCE_COMPONENTS.json`: ZIP全メンバーのSHA-256と固定版・範囲。
- `workspace/docs/notes/document-import/pcre2/v10-49/source/original/`: 固定原稿110ファイル（5 man、101 HTML、2 text、LICENCE.md、README）。
- `workspace/docs/notes/document-import/pcre2/v10-49/canonical/{en,ja}/`: 全5ページずつの配信用Markdown定本。
- `workspace/docs/notes/document-import/pcre2/v10-49/translations/batch-894/*-ja.json`: 日本語再生成の編集用入力。全unitが明示的に対応し、説明入りpreも翻訳済みです。構文自体の記号・関数名は保持します。
- `workspace/docs/notes/document-import/pcre2/v10-49/translations/batch-894/*-units.json`: 固定英語定本への対応とSHA-256。
- `workspace/docs/notes/document-import/pcre2/v10-49/REVIEW_MANIFEST.json`: 保存稿への別パス全文意味レビューの記録。再生成は新たな意味レビューや公開合格を自動認定しません。
- `workspace/apps/pcre2/`: 正規テンプレート由来のAstroアプリ、共有UI・通知・原稿コピー。
- `workspace/packages/`, `scripts/`, `templates/`, `config/`: 実際の公開済みCommonMark基準commit `8e2a6d55b6c4cbdd3c4b36bf3b5a667afbf8b3e9` の共有ビルド入力。今回の未完了root共有CSS変更は含みません。

The preferred editable Japanese inputs are the complete `*-ja.json` files, not an interim partial draft. Regeneration checks their fixed English hashes. To make a substantive translation change, update the JSON input, save the generated draft, review the affected meaning separately, and update the review binding before accepting it. The review manifest is independent evidence; build success does not establish translation accuracy.

## 再構築 / rebuild

Node.js 20以上（検証時24.19.0）、pnpm 10.10.0、Python 3と `beautifulsoup4==4.13.3` を使用します。展開先の `workspace/` で実行します。

```sh
pnpm install --frozen-lockfile --ignore-scripts
python3 -m venv .venv
.venv/bin/pip install beautifulsoup4==4.13.3
.venv/bin/python docs/notes/document-import/pcre2/v10-49/regenerate-both.py
node docs/notes/document-import/pcre2/v10-49/check-bilingual.mjs
pnpm --filter=apps-pcre2 build
```

依存がキャッシュ済みなら `pnpm install` に `--offline` を付けられます。`regenerate-both.py` は実際のHTML5解析結果から英語定本を再生成し、保存済み日本語入力を同じ本文構造へ反映します。表示用改行・タブを保持し、エンジンやCサンプルは実行しません。原著HTMLの生成時の変換不備が疑われる場合は、同梱の元manを参照してください。原著の索引へ戻る操作・重複目次は共有ナビゲーションと出典フッターへ置き換えています。

The original HTML was generated from man pages; the upstream notice advises consulting the man page if conversion looks nonsensical. Both forms are included. Syntax and examples remain static text. The source archive excludes itself to avoid recursive packaging. Runtime build directories and dependencies are not bundled. Historical progress records can mention the original worktree; the regeneration commands resolve paths from their own saved location.

公式原典 / official origin: https://github.com/PCRE2Project/pcre2/tree/6f9d7c1373262c541324a16a358785b33ef116cf
