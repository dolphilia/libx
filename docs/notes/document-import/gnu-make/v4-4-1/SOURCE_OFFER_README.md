Libx GNU Make 4.4.1 Getting Started Guide — Chapters 1–3
Libx GNU Make 4.4.1 入門ガイド — 第1〜3章

Original: GNU Make Manual, edition 0.77, updated 26 February 2023.
Original authors: Richard M. Stallman, Roland McGrath, Paul D. Smith.
Original publisher: Free Software Foundation. Modified author/publisher: Libx, 2026.
Manual: GNU Free Documentation License 1.3 or later; no Invariant Sections.
Front-Cover Text: A GNU Manual
Back-Cover Text: You have the freedom to copy and modify this GNU manual. Buying copies from the FSF supports it in developing GNU and promoting software freedom.
The original full permission notice and complete unmodified English GFDL are included in every guide, the English reference, and the complete original manual.
GNU Make software archive retains its original COPYING and all member notices; software COPYING is not a substitute for the manual's GFDL. The make-stds.texi include retains its own notice.

This package includes editable English/Japanese Markdown, all 15 fixed inputs, the complete original distribution archive, original Texinfo and includes, original notices/Cover Texts/History, literal Japanese assembly, and the static Astro build context. No original GNU Make software or example needs to execute.
Fixed archive: https://ftp.gnu.org/gnu/make/make-4.4.1.tar.gz
SHA-256: dd16fb1d67bfab79a72f5e8390735c49e3e8e70b4945a15ab1f81ddb78658fb3
English/Japanese guides cover complete chapters 1–3 plus the referenced footnote. Later chapters/appendices are provided by the complete fixed original manual and archive, not claimed translated.
Preferred editing format: workspace/apps/gnu-make/src/content/docs/v4-4-1/{en,ja}/
Reviewed bodies: workspace/docs/notes/document-import/gnu-make/v4-4-1/translations/
The original Texinfo is an editable source of the English original. Japanese drafts are editable Markdown, not images or compiled output. All package members have hashes in SOURCE_COMPONENTS.json; the source ZIP itself is excluded to avoid recursion.

Rebuild prerequisites: Node >=20, pnpm 10.10.0, Python 3 with beautifulsoup4==4.13.3, GNU Texinfo makeinfo 7.1, Pandoc 3.8.3. These are tools, not the GNU Make software being documented.
From workspace:
  pnpm install --frozen-lockfile
  pnpm --filter=apps-gnu-make build
Output: apps/gnu-make/dist/. Serve with Astro preview or a static local server. Use no Workers.
Optional original/translation replay (overwrites generated canonical Markdown from fixed inputs/reviewed drafts):
  python docs/notes/document-import/gnu-make/v4-4-1/regeneration/regenerate.py
  python docs/notes/document-import/gnu-make/v4-4-1/regeneration/regenerate-ja.py
  pnpm --filter=apps-gnu-make build
The source ZIP is a transport wrapper and need not contain itself to rebuild the document. Unpack the downloaded ZIP as apps/gnu-make/public/source/v4-4-1/source.zip when checking a byte-identical public source offer.

編集する場合は上記Markdownまたは原Texinfoを使ってください。保存済み日本語本文から再生成すると、直接編集した配信Markdownを上書きするため、先に変更を保存してください。新たな変更・翻訳を配布する際はGFDL、各ファイルの通知、変更者・履歴を保持してください。
