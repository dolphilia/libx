# Libx GNU diffutils 3.12 Comparison and Output Formats — Overview and Chapters 1–4
# Libx GNU diffutils 3.12 比較と出力書式 — 概要・第1〜4章

GNU diffutils 3.12の概要と第1〜4章全文を、43ページの英語原文と独立・非公式の日本語訳で提供します。残りの章・付録・索引は、固定した原英語マニュアル全文と原Texinfo・Infoで参照できます。GNU diffutils本体や掲載例は実行せず、静的なテキストとして提供します。

The complete Overview and chapters 1–4 are provided in 43 English pages and an independent, unofficial Japanese translation. Remaining chapters, appendices and indexes are available in the fixed complete English manual and original Texinfo/Info. GNU diffutils and its examples are not run.

## 原著と利用条件 / Original and terms

- Original title: Comparing and Merging Files; GNU Diffutils version 3.12; document revision 12 January 2025; release 8 April 2025.
- Original authors: David MacKenzie, Paul Eggert and Richard Stallman. Original publisher: Free Software Foundation.
- Copyright © 1992–1994, 1998, 2001–2002, 2004, 2006, 2009–2025 Free Software Foundation, Inc.
- Original documentation is available under the GNU Free Documentation License, Version 1.3 or any later version, with no Invariant Sections, no Front-Cover Texts and no Back-Cover Texts.
- Modified title: Libx GNU diffutils 3.12 Comparison and Output Formats — Overview and Chapters 1–4 / Libx GNU diffutils 3.12 比較と出力書式 — 概要・第1〜4章. Modification author and publisher: Libx; modified 6 October 2026.
- Copyright © 2026 Libx, for editing and independent Japanese translation. Modified documentation is available under the same GFDL 1.3-or-later conditions. No new Invariant Sections or Cover Texts are added.
- 原著の著作権・許諾・著作者・履歴・原英語GFDL全文を保持します。ライセンス自体の日本語訳は提供していません。ソフトウェアのGPL等の通知は未変更の原著配布物と原稿に保持します。共有Libxファイルには既存の通知・条件が適用されます。

Original sources: [GNU diffutils](https://www.gnu.org/software/diffutils/), [official manual](https://www.gnu.org/software/diffutils/manual/), [maintainer's release announcement](https://lists.gnu.org/archive/html/info-gnu/2025-04/msg00005.html). The fixed archive was acquired through the [GNU mirror at ibiblio](https://mirrors.ibiblio.org/gnu/diffutils/diffutils-3.12.tar.gz); its SHA256 agrees with the maintainer's published checksum. No signature verification is claimed. Acquisition date: 6 October 2026, distinct from document revision and release date.

固定配布物SHA256 / fixed archive SHA256:

```
5be181b27ec38aad2450080661a64e4a1752bb29b7d5052bf0a02a70f623f9b2
```

## 編集可能な原稿 / Preferred editable sources

- [固定した原英語マニュアル全文 / fixed complete English manual](https://libx.dev/docs/gnu-diffutils/source/v3-12/manual.html)
- [原著GFDL全文 / original English GFDL](https://libx.dev/docs/gnu-diffutils/source/v3-12/manual.html#Copying-This-Manual)
- [未変更の原著ソース配布物 / unchanged original source archive](https://libx.dev/docs/gnu-diffutils/source/v3-12/original/diffutils-3.12.tar.gz)
- [原Texinfo / original Texinfo](https://libx.dev/docs/gnu-diffutils/source/v3-12/original/doc/diffutils.texi)
- [原Info / original Info](https://libx.dev/docs/gnu-diffutils/source/v3-12/original/doc/diffutils.info)
- [原英語GFDL Texinfo / original GFDL Texinfo](https://libx.dev/docs/gnu-diffutils/source/v3-12/original/doc/fdl.texi)
- [Libxの編集用原稿・再生成キット / editable source and rebuild kit](https://libx.dev/docs/gnu-diffutils/source/v3-12/source.zip)

`edited/en/01-guide/`と`edited/ja/01-guide/`には配信に使用する原文・訳文のMarkdown原稿があり、`edited/en/02-reference/01-gfdl.md`には原英語GFDL参照ページがあります。同じ87原稿と優先編集入力を`source.zip`に収録しています。Markdown内のHTMLはテキストエディターで編集できます。改行・タブの数値文字参照はコードの空白と変数の斜体を保持します。

The kit contains the unchanged original Texinfo/Info/notices/archive, the fixed complete English manual, all 87 editable Markdown documents, translation units and independent Japanese translation JSON, conversion helpers, and app/shared files required to rebuild. It excludes installed dependencies, generated build output, host operation progress, and a recursive copy of `source.zip`. `SOURCE_COMPONENTS.json` records each member's SHA256 and byte length.

## 再生成 / Regeneration

展開した`workspace/`を作業ディレクトリーとします。確認環境はNode.js 24.19.0、pnpm 10.10.0、GNU Texinfo（makeinfo）7.1、PythonとBeautifulSoup 4.13.3です。同梱のlockfileで依存バージョンを固定します。

```
pnpm install --frozen-lockfile --ignore-scripts
python3 docs/notes/document-import/gnu-diffutils/v3-12/regenerate-en.py
python3 docs/notes/document-import/gnu-diffutils/v3-12/extract-units.py
python3 docs/notes/document-import/gnu-diffutils/v3-12/regenerate-ja.py
node docs/notes/document-import/gnu-diffutils/v3-12/check-content.mjs
pnpm --filter=apps-gnu-diffutils build
```

日本語の優先編集入力は`workspace/docs/notes/document-import/gnu-diffutils/v3-12/translations/*-ja.json`です。同じ場所の`*-units.json`は原文と保護したインライン表記の対応を記録します。原文→英語定本→翻訳単位→日本語の順に再生成してください。機械的な保持検査は意味レビューの代わりになりません。変更後は別途意味を確認し、保存済みレビューは確認済み原稿のハッシュが一致する範囲だけ再利用できます。

Preferred Japanese edits are the `*-ja.json` files. Commands, output, variables and inline expressions remain literal. Helpers convert documentation and build Libx; they do not compile or run GNU diffutils or its examples.

## 変更と履歴 / Changes and History

Original: Comparing and Merging Files; GNU Diffutils version 3.12; document revision 12 January 2025; release 8 April 2025; authors and publisher above. The original archive and notices are unchanged.

6 October 2026: Libx adopted the complete Overview and chapters 1–4, split them into 43 paired pages, added an independent Japanese translation, and linked the remaining original manual. Source heading identifiers, all 33 code/output blocks, variable notation and the whole English GFDL are retained. Heading self-link marks are replaced by common navigation. The original title, authors, publisher, copyright, conditions, and modification History appear in the existing footer and source kit.

The original Detailed-Unified section contains adjacent descriptions of single-line and empty hunk positions using both start and end terminology. Libx preserves both paragraphs and adds a bilingual footer note with a fixed original link. 原文の単一行や空のhunkの開始・終了位置に関する隣接した説明を保持し、英日フッター注記と固定原典リンクで補っています。

原文の説明不足・記述上の相違や元サイト固有の機能は、注記・静的表示・固定全文の原典で補います。原著プログラムの技術監査や元サイトの完全再現は提供範囲に含めません。
