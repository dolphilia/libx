# Libx GNU grep 3.12 User Guide — Chapters 1–6
# Libx GNU grep 3.12 利用ガイド — 第1〜6章

GNU grep 3.12の第1〜6章全文を27ページの英語原文と独立・非公式の日本語訳で提供します。配布条件の章・索引は固定した原英語マニュアル、Texinfo、Infoで参照できます。GNU grep本体や掲載コマンド例は実行せず、静的なテキストとして提供します。

The complete adopted chapters 1–6 are provided in 27 English pages and an independent, unofficial Japanese translation. Copying and the index are available in the fixed complete English manual and original Texinfo/Info. GNU grep and its examples are not run.

## 原著と利用条件 / Original and terms

- Original title: GNU Grep: Print lines that match patterns; version 3.12; document revision 2 January 2025; release 10 April 2025.
- Original authors: Alain Magloire et al. Original publisher: Free Software Foundation.
- Copyright © 1999–2002, 2005, 2008–2025 Free Software Foundation, Inc.
- Original documentation is available under the GNU Free Documentation License, Version 1.3 or any later version, with no Invariant Sections, no Front-Cover Texts and no Back-Cover Texts.
- Modified title: Libx GNU grep 3.12 User Guide — Chapters 1–6 / Libx GNU grep 3.12 利用ガイド — 第1〜6章. Modification author and publisher: Libx; modified 7 October 2026; Chapters 1–4 text and its 6 October modification history retained.
- Copyright © 2026 Libx, for editing and independent Japanese translation. Modified documentation is available under the same GFDL 1.3-or-later conditions. No new Invariant Sections or Cover Texts are added.
- 原著の著作権・許諾・著作者・履歴・原英語GFDL全文を保持します。ライセンスそのものの日本語訳は提供していません。原著ソース配布物のGPL等の通知は未変更の配布物と原稿内に保持します。共有Libxファイルには既存の通知・条件が適用されます。

Original sources: [GNU grep](https://www.gnu.org/software/grep/), [official manual](https://www.gnu.org/software/grep/manual/), [maintainer's release announcement](https://lists.gnu.org/archive/html/info-gnu/2025-04/msg00008.html). The fixed archive was acquired through the [GNU mirror at ibiblio](https://mirrors.ibiblio.org/gnu/grep/grep-3.12.tar.gz); its SHA256 agrees with the maintainer's published checksum. No signature verification is claimed. Acquisition date: 6 October 2026, distinct from document revision and release date.

固定配布物SHA256 / fixed archive SHA256:

```
badda546dfc4b9d97e992e2c35f3b5c7f20522ffcbe2f01ba1e9cdcbe7644cdc
```

## 編集可能な原稿 / Preferred editable sources

- [固定した原英語マニュアル全文 / fixed complete English manual](https://libx.dev/docs/gnu-grep/source/v3-12/manual.html)
- [原著GFDL全文 / original English GFDL](https://libx.dev/docs/gnu-grep/source/v3-12/manual.html#GNU-Free-Documentation-License)
- [未変更の原著ソース配布物 / unchanged original source archive](https://libx.dev/docs/gnu-grep/source/v3-12/original/grep-3.12.tar.gz)
- [原Texinfo / original Texinfo](https://libx.dev/docs/gnu-grep/source/v3-12/original/doc/grep.texi)
- [原Info / original Info](https://libx.dev/docs/gnu-grep/source/v3-12/original/doc/grep.info)
- [原英語GFDL Texinfo / original GFDL Texinfo](https://libx.dev/docs/gnu-grep/source/v3-12/original/doc/fdl.texi)
- [Libxの編集用原稿・再生成キット / editable source and rebuild kit](https://libx.dev/docs/gnu-grep/source/v3-12/source.zip)

`edited/en/01-guide/`と`edited/ja/01-guide/`には配信に使用する原文・訳文のMarkdown原稿があり、`edited/en/02-reference/01-gfdl.md`には原英語GFDL参照ページがあります。同じ55原稿と優先編集入力を`source.zip`に収録しています。Markdown内のHTMLはテキストエディターで編集できます。改行・タブの数値文字参照はコードの空白と変数の斜体を保持します。

The kit contains the original Texinfo/Info/notices/archive, the fixed complete English manual, all 55 editable Markdown documents, translation units and independent Japanese translation JSON, conversion helpers, and app/shared files required to rebuild. It excludes installed dependencies, generated build output, host operation progress, and a recursive copy of `source.zip`. `SOURCE_COMPONENTS.json` records each member's SHA256 and byte length.

## 再生成 / Regeneration

展開した`workspace/`を作業ディレクトリーとします。確認環境はNode.js 24.19.0、pnpm 10.10.0、GNU Texinfo（makeinfo）7.1、PythonとBeautifulSoup 4.13.3です。同梱のlockfileで依存バージョンを固定します。

```
pnpm install --frozen-lockfile --ignore-scripts
python3 docs/notes/document-import/gnu-grep/v3-12/regenerate-en.py
python3 docs/notes/document-import/gnu-grep/v3-12/extract-units.py
python3 docs/notes/document-import/gnu-grep/v3-12/regenerate-ja.py
node docs/notes/document-import/gnu-grep/v3-12/check-content.mjs
export LIBX_UPDATE_WORKSPACE="$PWD"
python3 docs/notes/document-import/gnu-grep/v3-12/updates/2026-10-07-chapters-5-6/prepare-drafts.py
python3 docs/notes/document-import/gnu-grep/v3-12/updates/2026-10-07-chapters-5-6/extract-units.py
python3 docs/notes/document-import/gnu-grep/v3-12/updates/2026-10-07-chapters-5-6/render-drafts.py
python3 docs/notes/document-import/gnu-grep/v3-12/updates/2026-10-07-chapters-5-6/apply-update.py
python3 docs/notes/document-import/gnu-grep/v3-12/updates/2026-10-07-chapters-5-6/prepare-context.py
pnpm --filter=apps-gnu-grep build
```

日本語の優先編集入力は`workspace/docs/notes/document-import/gnu-grep/v3-12/translations/*-ja.json`です。同じ場所の`*-units.json`は原文と保護したインライン表記の対応を記録します。原文→英語定本→翻訳単位→日本語の順に再生成してください。機械的な保持検査は意味レビューの代わりになりません。変更後は別途意味を確認し、保存済みのレビューは確認済み原稿のハッシュが一致する範囲だけ再利用できます。

Preferred Japanese edits are the `*-ja.json` files. Commands, output, variables, and inline expressions remain literal; one explanatory code comment is translated separately. Helpers convert documentation and build Libx; they do not compile or run GNU grep or its examples.

## 変更と履歴 / Changes and History

Original: GNU Grep: Print lines that match patterns; version 3.12; document revision 2 January 2025; release 10 April 2025; authors and publisher above. The original archive and notices are unchanged.

6 October 2026: Libx adopted complete chapters 1–4, split them into 24 paired pages, added an independent Japanese translation, and linked the remaining original manual. Source heading identifiers, all 29 code/output blocks, variable notation and whole English GFDL are retained. Heading self-link marks are replaced by common navigation. The original title, authors, publisher, copyright, conditions, and modification History appear in the existing footer and source kit.

The original Λ–ω tab example uses Texinfo `@tie{}`, rendered as U+00A0. This notation is preserved; a page footer points to the same page's ANSI-C backslash-t examples for explicit tab input. 原文のタブ例の表記を保持し、タブを明示できる同ページの例をフッターから案内します。

原文の説明不足・記述上の相違や元サイト固有の機能は、注記・静的表示・固定全文の原典で補います。原著プログラムの技術監査や元サイトの完全再現は提供範囲に含めません。

7 October 2026: Added complete chapters 5–6 (Performance, Reporting bugs and Known Bugs), with 3 paired pages and 21 separately reviewed prose units. Existing 49 editable documents remain byte-for-byte unchanged. New source JSON edits are in `docs/notes/document-import/gnu-grep/v3-12/updates/2026-10-07-chapters-5-6/translations/*-ja.json`; regenerate the original 24 guides first, then the new 3 guides in the order above. Dated upstream bug statements remain original documentation; no current technical audit or sample execution is claimed.
