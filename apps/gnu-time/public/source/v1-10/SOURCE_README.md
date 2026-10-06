# GNU Time 1.10 — original and editable sources / 原文と編集用原稿

This package provides the complete overview and chapters 1–2 as paired English and Japanese editable Markdown, the original English GFDL, preferred translation inputs and the files needed to regenerate the Libx guide. The concept index remains available in the fixed complete original manual, Info and Texinfo. The unchanged distribution archive is also included.

原文概要・通知と第1〜2章全文の英日Markdown、原英語GFDL、翻訳編集用入力とLibxガイドの再生成資料を提供します。概念索引は固定原文全文・Info・Texinfoで参照できます。未変更の原配布物も収録します。

Original author: David MacKenzie. Original publisher: Free Software Foundation. Original document copyright: FSF 1991–2021, 2026. Document revision: 13 February 2026. Release: 14 April 2026. Acquisition and Libx modification: 6 October 2026. Fixed archive SHA256: `706bf7b8444ca9eb9037e9eda18e1d0eb7c2327ae7d8c2ce3a4823c5f80c7b11`.

The original manual and modified guide are distributed under GNU Free Documentation License 1.3 or later, with no Invariant Sections or Cover Texts. The original notices and whole English license are retained. The modified work has the distinct title “Libx GNU Time 1.10 User Guide / Libx GNU Time 1.10 利用ガイド”; modification author and publisher: Libx; copyright © 2026 Libx for editing and independent Japanese translation. History and modification notices appear in the document footer. Original software sources and shared Libx files retain their existing notices and terms; the software archive is not relabeled as a documentation-only work.

文書の許諾はGFDL 1.3以降、不変節・表紙文言なしです。原著通知、原英語ライセンス全文、別題名、改変者・発行者、Libxの変更通知と履歴を保持します。原プログラムと掲載例の実行・技術監査、元サイトの機能再現は行いません。

The source kit excludes installed dependencies, generated build output, `.git` and its own ZIP. `SOURCE_COMPONENTS.json` records every member's hash. Editing inputs are under `workspace/docs/notes/document-import/gnu-time/v1-15/translations/`; complete body review records are retained in `DRAFT_REVIEW_MANIFEST.json`. Canonical Markdown is under `canonical/` and the normal application content directory. Original Texinfo, Info, copyright/license files and the unchanged archive are under `source/`.

Reconstruction requires Node.js and pnpm matching the included package metadata, GNU Texinfo 7.1, and Python with Beautiful Soup. The verification environment uses Python with Beautiful Soup as recorded by the verification environment. In `workspace/`, install the locked dependencies with `pnpm install --frozen-lockfile --ignore-scripts`; a populated package cache permits adding `--offline`. Then run:

```sh
python docs/notes/document-import/gnu-time/v1-15/regenerate-en.py
python docs/notes/document-import/gnu-time/v1-15/extract-units.py
python docs/notes/document-import/gnu-time/v1-15/regenerate-ja.py
python docs/notes/document-import/gnu-time/v1-15/prepare-notice-draft.py
python docs/notes/document-import/gnu-time/v1-15/adopt-canonical.py
node docs/notes/document-import/gnu-time/v1-15/check-content.mjs
pnpm --filter=apps-gnu-time build
```

These commands reproduce the original-derived manual and edited documents. They do not grant a new meaning-review approval. Saved reviews are reused only when complete input/body hashes agree. No GNU Time executable or example is built or run by this process. Signature verification is not claimed.

梱包済みファイルの一覧とハッシュはSOURCE_COMPONENTS.jsonに記録します。独立環境での再生成と配信結果の実検証は、別の運用記録を参照してください。
