CommonMark 0.31.2 — Basics and Leaf Blocks / 基礎と葉ブロック

Original specification: Copyright (C) 2014-16 John MacFarlane.
Original version date: 28 January 2024; fixed source commit:
9103e341a973013013bb1a80e13567007c5cef6f
https://github.com/commonmark/commonmark-spec/tree/9103e341a973013013bb1a80e13567007c5cef6f
https://spec.commonmark.org/0.31.2/

The original specification and Libx's modified presentation and independent Japanese translation are provided under Creative Commons Attribution-ShareAlike 4.0 International:
https://creativecommons.org/licenses/by-sa/4.0/
The original LICENSE, copyright notices and unmodified English legal code are included. The upstream LICENSE also states separate terms for upstream test/build tools (BSD 2-Clause and the normalization file's MIT notice); those upstream tools are not copied as implementation code here and are not executed. The fixed repository link above provides them. Build-context files retain their existing notices and terms; the specification's license does not replace their terms. No endorsement by the original author is implied.

Scope: complete chapters 1–4 in 14 English and 14 Japanese guide pages, including all 227 original Markdown-input/expected-HTML pairs and 17 additional original code blocks. Chapters 5–6 and the appendix are provided in the complete fixed English specification and at the original site; they are not claimed translated.
Changes by Libx, 2026: split guide pages, independent Japanese translation, preserved original anchors, local section references, static literal input/expected-HTML code pairs, source attribution/footer, search/navigation. Try It controls and original JavaScript are omitted from the static complete English copy. Original tab arrows are stored as actual tabs; example strings and final blank lines follow the fixed spec.txt/tests.json. No example or original Markdown engine is executed.

Preferred editable inputs:
  workspace/apps/commonmark/src/content/docs/v0-31-2/{en,ja}/
Reviewed editable Japanese drafts:
  workspace/docs/notes/document-import/commonmark/v0-31-2/translations/
Original editable specification: workspace/docs/notes/document-import/commonmark/v0-31-2/source/original/spec.txt
English legal/reference material and all nine fixed input files are included. SOURCE_COMPONENTS.json lists hashes of all kit members except itself; the ZIP excludes itself to avoid recursion.

Rebuild prerequisites: Node >=20, pnpm 10.10.0; for optional source replay, Python 3 with beautifulsoup4==4.13.3. The kit includes the static Astro/shared build context; it does not include node_modules.
From workspace:
  pnpm install --frozen-lockfile --ignore-scripts
  pnpm --filter=apps-commonmark build
  pnpm --filter=apps-commonmark check:content
  pnpm --filter=apps-commonmark check:rendered
Output: apps/commonmark/dist/. Serve locally with Astro preview or a static server; no Workers are needed.
For byte-identical source-offer verification, copy the downloaded source.zip to workspace/apps/commonmark/public/source/v0-31-2/source.zip before building. This transport wrapper need not contain itself to reconstruct the document.

Optional replay from fixed source and reviewed drafts (overwrites generated Markdown):
  python3 docs/notes/document-import/commonmark/v0-31-2/regenerate-both.py
  pnpm --filter=apps-commonmark build

編集には上記のMarkdownまたは原典spec.txtを使えます。日本語草稿は画像やコンパイル済み出力ではなく、編集可能な原稿です。再生成は直接編集した配信Markdownを上書きするため、先に変更を保存してください。変更・再配布する場合は、原著者とLibxの表示、原典・ライセンスへのリンク、変更の説明を保ち、この仕様と訳文にCC BY-SA 4.0を適用してください。ビルド用の別ファイルにはそれぞれの既存の通知・条件を適用してください。
