# Libx GNU sed 4.10 Getting Started and Scripts — Chapters 1–3
# Libx GNU sed 4.10 入門とスクリプト — 第1〜3章

GNU sed 4.10の第1〜3章全文を12ページの英語原文と独立・非公式の日本語訳で提供します。参照脚注4件を収録し、残りの章・索引は固定した原英語マニュアル、Texinfo、Infoで参照できます。原著GNU sedプログラムや掲載コマンド例は実行せず、静的なテキストとして提供します。

The complete adopted chapters 1–3 are provided in 12 English pages and an independent, unofficial Japanese translation. All four referenced footnotes are included. Remaining chapters and indexes are available in the fixed complete English manual and original Texinfo/Info. The original GNU sed program and examples are not run.

## 原著と利用条件 / Original and terms

- Original title: GNU sed, a stream editor; version 4.10; document revision 20 April 2026.
- Original authors: Ken Pizzini, Paolo Bonzini, Jim Meyering, Assaf Gordon. Original publisher: Free Software Foundation.
- Copyright © 1998–2026 Free Software Foundation, Inc.
- Permission is granted to copy, distribute and/or modify the original document under the GNU Free Documentation License, Version 1.3 or any later version, with no Invariant Sections, no Front-Cover Texts and no Back-Cover Texts.
- Modified title: Libx GNU sed 4.10 Getting Started and Scripts — Chapters 1–3 / Libx GNU sed 4.10 入門とスクリプト — 第1〜3章. Modification author and publisher: Libx; modified 6 October 2026.
- Copyright © 2026 Libx, for editing and independent Japanese translation. The modified documentation is available under the same GFDL 1.3-or-later conditions. No new Invariant Sections or Cover Texts are added.
- 原著の著作権・許諾・著作者・履歴・原英語GFDL全文を保持します。ライセンスそのものの日本語訳は提供していません。原著ソース配布物のGPL等の通知は、未変更の配布物と原稿内に保持します。共有Libxファイルには、その既存の通知・条件が適用されます。

Original source: [GNU sed](https://www.gnu.org/software/sed/), [official manual](https://www.gnu.org/software/sed/manual/), [original release archive](https://ftp.gnu.org/gnu/sed/sed-4.10.tar.gz). The archive was acquired through the GNU mirror at [ibiblio](https://mirrors.ibiblio.org/gnu/sed/sed-4.10.tar.gz); its SHA256 agrees with the checksum announced by the original maintainer. No signature verification is claimed. Acquisition date: 6 October 2026, distinct from the original document revision.

固定配布物SHA256 / fixed archive SHA256:

```
4d179ffaf92ec4dcec541f7c032be1c3b9a1856f4970adb95a505221702f5277
```

## 編集可能な原稿 / Preferred editable sources

- [固定した原英語マニュアル全文 / fixed complete English manual](https://libx.dev/docs/gnu-sed/source/v4-10/manual.html)
- [原著GFDL全文 / original English GFDL](https://libx.dev/docs/gnu-sed/source/v4-10/manual.html#GNU-Free-Documentation-License)
- [未変更の原著ソース配布物 / unchanged original source archive](https://libx.dev/docs/gnu-sed/source/v4-10/original/sed-4.10.tar.gz)
- [原Texinfo / original Texinfo](https://libx.dev/docs/gnu-sed/source/v4-10/original/doc/sed.texi)
- [原Info / original Info](https://libx.dev/docs/gnu-sed/source/v4-10/original/doc/sed.info)
- [原英語GFDL Texinfo / original GFDL Texinfo](https://libx.dev/docs/gnu-sed/source/v4-10/original/doc/fdl.texi)
- [Libxの編集用原稿・再生成キット / Libx editable source and rebuild kit](https://libx.dev/docs/gnu-sed/source/v4-10/source.zip)

`edited/en/01-guide/`と`edited/ja/01-guide/`には、サイトが使用する英語・日本語のMarkdown原稿があり、`edited/en/02-reference/01-gfdl.md`には原英語GFDL参照ページがあります。同じ原稿とその優先編集入力を`source.zip`へまとめています。Markdown内のHTMLはテキストエディターで編集可能です。改行・タブの数値文字参照は、例の空白と変数の斜体を保持するためのものです。

The kit contains the original Texinfo/Info/notices/archive, the full generated English manual, all 25 editable Markdown documents, translation units and independent Japanese translation JSON, conversion helpers, and the app/shared files required to rebuild. It excludes installed dependencies, generated build output, and a recursive copy of `source.zip`. `SOURCE_COMPONENTS.json` lists the members and their SHA256 values.

## 再生成 / Regeneration

展開した`workspace/`を作業ディレクトリとします。確認環境はNode.js 24.19.0、pnpm 10.10.0、GNU Texinfo（makeinfo）7.1、PythonとBeautifulSoup 4.13.3です。依存バージョンは同梱のlockfileを使用します。

```
pnpm install --frozen-lockfile --ignore-scripts
python3 docs/notes/document-import/gnu-sed/v4-10/regenerate-en.py
python3 docs/notes/document-import/gnu-sed/v4-10/extract-units.py
python3 docs/notes/document-import/gnu-sed/v4-10/regenerate-ja.py
pnpm --filter=apps-gnu-sed build
```

日本語の優先編集入力は`workspace/docs/notes/document-import/gnu-sed/v4-10/translations/*-ja.json`、原文とインライン表記の対応は同じ場所の`*-units.json`です。原文から英語定本を再生成し、翻訳単位を抽出してから、日本語を再生成してください。原稿変更後の意味レビューは別に行う必要があります。保存済みレビューの再利用は、確認済みの原稿ハッシュが一致する範囲に限ります。

Preferred Japanese edits are the `*-ja.json` files; `*-units.json` records the original prose and protected inline notation. The helpers only convert documents and build the Libx app. They do not compile or run GNU sed or its examples. Commands and output are preserved literally; three italic descriptions in one annotated example and five descriptive command labels are translated separately while the command notation remains intact.

## 変更と履歴 / Changes and History

Original: GNU sed, a stream editor; version 4.10; document revision 20 April 2026; authors and publisher listed above. Libx preserves the unchanged release archive and original notices.

6 October 2026: Libx adopted complete chapters 1–3, split them into 12 paired reading pages, carried all four referenced footnotes, added an independent Japanese translation, and linked the remaining original manual. Source heading identifiers, code/output, variable notation and original English license remain available. Heading self-link marks in the guide are replaced by the common reading navigation. Title, authors, publisher, copyright, conditions and this modification History are supplied in the existing footer and source kit.

原文の説明不足・記述上の相違や元サイト固有の機能は、固定全文の原典で補います。原著プログラムの技術監査や元サイトの完全再現は、この文書提供の範囲には含めません。
