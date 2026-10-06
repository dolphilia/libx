# GNU gzip 1.15 — original and editable sources / 原文と編集用原稿

This package provides the complete overview and chapters 1–7 as paired English and Japanese editable Markdown, the original English GFDL, preferred translation inputs and the files needed to regenerate the Libx guide. The concept index remains available in the fixed complete original manual, Info and Texinfo. The unchanged distribution archive is also included.

原文概要・通知と第1〜7章全文の英日Markdown、原英語GFDL、翻訳編集用入力とLibxガイドの再生成資料を提供します。概念索引は固定原文全文・Info・Texinfoで参照できます。未変更の原配布物も収録します。

Original author: Jean-loup Gailly. Original publisher: Free Software Foundation. Original document copyright: FSF 1998–1999, 2001–2002, 2006–2007, 2009–2026; Jean-loup Gailly 1992, 1993. Document revision: 3 January 2026. Release: 20 September 2026. Acquisition and Libx modification: 6 October 2026. Fixed archive SHA256: `9aa0cc780dec156b8282844833b342ab7cb08c25d2cd9a1869cdd0df31deff48`.

The original manual and modified guide are distributed under GNU Free Documentation License 1.3 or later, with no Invariant Sections or Cover Texts. The original notices and whole English license are retained. The modified work has the distinct title “Libx GNU gzip 1.15 User Guide / Libx GNU gzip 1.15 利用ガイド”; modification author and publisher: Libx; copyright © 2026 Libx for editing and independent Japanese translation. History and modification notices appear in the document footer. Original software sources and shared Libx files retain their existing notices and terms; the software archive is not relabeled as a documentation-only work.

文書の許諾はGFDL 1.3以降、不変節・表紙文言なしです。原著通知、原英語ライセンス全文、別題名、改変者・発行者、Libxの変更通知と履歴を保持します。原プログラムと掲載例の実行・技術監査、元サイトの機能再現は行いません。

The source kit excludes installed dependencies, generated build output, `.git` and its own ZIP. `SOURCE_COMPONENTS.json` records every member's hash. Editing inputs are under `workspace/docs/notes/document-import/gnu-gzip/v1-15/translations/`; complete body review records are retained under `reviews/`. Canonical Markdown is under `canonical/` and the normal application content directory. Original Texinfo, Info, copyright/license files and the unchanged archive are under `source/`.

Reconstruction requires Node.js and pnpm matching the included package metadata, GNU Texinfo 7.1, and Python with Beautiful Soup. The verification environment uses Python 3.12.14 and Beautiful Soup 4.13.3. In `workspace/`, install the locked dependencies with `pnpm install --frozen-lockfile --ignore-scripts`; a populated package cache permits adding `--offline`. Then run:

```sh
python docs/notes/document-import/gnu-gzip/v1-15/regenerate-en.py
python docs/notes/document-import/gnu-gzip/v1-15/extract-units.py
python docs/notes/document-import/gnu-gzip/v1-15/regenerate-ja.py
python docs/notes/document-import/gnu-gzip/v1-15/prepare-notice-draft.py
python docs/notes/document-import/gnu-gzip/v1-15/adopt-canonical.py
node docs/notes/document-import/gnu-gzip/v1-15/check-content.mjs
pnpm --filter=apps-gnu-gzip build
```

These commands reproduce the original-derived manual and edited documents. They do not grant a new meaning-review approval. Saved reviews are reused only when complete input/body hashes agree. No GNU gzip executable or example is built or run by this process. Signature verification is not claimed.

梱包済みファイルの一覧とハッシュはSOURCE_COMPONENTS.jsonに記録します。独立環境での再生成と配信結果の実検証は、別の運用記録を参照してください。
