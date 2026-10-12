# Libx GNU Libtool 2.6.2 Library Build Guide — Chapters 2–3
# Libx GNU Libtool 2.6.2 ライブラリビルドガイド — 第2〜3章

GNU Libtool 2.6.2（16 July 2026）の第2〜3章全文を、英語10ガイドと独立・非公式の日本語訳10ページで提供します。参照脚注1〜4と英語のGNU Free Documentation License全文も含みます。他章・API・索引・元サイト固有の機能は固定原文を参照してください。コマンド例は原文の文字列として保持し、実行していません。

Complete chapters 2–3 are provided in 10 English guides and 10 independent, unofficial Japanese translations, including complete footnotes 1–4. An English reference preserves the full GFDL. Other chapters, API details, indexes and upstream functionality remain available in the fixed complete original.

## 原典と利用条件 / Original and terms

Original authors: Gordon Matzigkeit, Alexandre Oliva, Thomas Tanner, Gary V. Vaughan. Original publisher: Free Software Foundation. Original: GNU Libtool, version 2.6.2, 16 July 2026. Copyright © 1996–2019, 2021–2026 Free Software Foundation, Inc.

Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, with no Front-Cover Texts, and with no Back-Cover Texts. A copy of the license is included in the section entitled “GNU Free Documentation License”.

Copyright © 2026 Libx for conversion and independent Japanese translation. Modification author and publisher: Libx. This modified version has the distinct guide title above and is available under GFDL 1.3 or later, with no Invariant Sections, no Front-Cover Texts and no Back-Cover Texts. No new invariant sections or cover texts are added. History: 12 October 2026, Libx converted complete chapters 2–3 and footnotes 1–4 and added an independent Japanese translation. Original authors, notices, full English GFDL and this modification history are retained in page footers. Software/shared build sources retain their original notices.

Fixed archive: [libtool-2.6.2.tar.gz](https://ftp.gnu.org/gnu/libtool/libtool-2.6.2.tar.gz), SHA256 `24adb3aa9ae035c70faba344af57d73215eb89281045af6c7ccd307751f8b0bf`, 2,125,092 bytes. Signature verification is not claimed. Original network locations: the archive above and [GNU Libtool manual](https://www.gnu.org/software/libtool/manual/).

## 原稿と再生成 / Editable sources and rebuilding

- [固定原文全文 / fixed complete original](https://libx.dev/docs/gnu-libtool/source/v2-6-2/manual.html)
- [原著配布物 / unchanged archive](https://libx.dev/docs/gnu-libtool/source/v2-6-2/libtool-2.6.2.tar.gz)
- [編集用原稿キット / editable rebuild kit](https://libx.dev/docs/gnu-libtool/source/v2-6-2/source.zip)

`edited/`に全21 Markdown原稿（英語ガイド10、日本語ガイド10、英語GFDL参照1）があります。キット内では`workspace/docs/notes/document-import/gnu-libtool/v2-6-2/preferred/`に同じ原稿を収録します。翻訳の優先編集入力は`TRANSLATION_DATA.json`と`translate.py`の見出し・コード注記です。`generate.py`は固定HTMLから英語定本・原文断片・翻訳単位・共通フッターを生成します。Markdownを直接編集する場合も、再生成で上書きされないよう対応する翻訳入力を更新してください。

The kit contains fixed Texinfo/HTML/archive inputs, all 21 preferred Markdown documents, editable translation mappings, conversion scripts, whole meaning-review bindings, app/shared build sources, configuration and the dependency lockfile. Installed dependencies, build outputs, Git history and the recursive ZIP copy are excluded. `SOURCE_COMPONENTS.json` inventories every included input. The omitted ZIP is restored deterministically only after all packaged inputs match their recorded hashes.

Python 3とBeautifulSoup（今回の確認環境4.13.4）、Node.js（>=20）、pnpm（同梱package.json指定）を使用します。通常の再生成は同梱の固定HTMLを読み、上流Libtoolを実行しません。元HTMLを作り直す場合のみGNU Texinfo 7.1で、同梱の`SOURCE_DERIVATION.json`にある手順を使います。

展開した`workspace/`で実行します。

```sh
pnpm install --frozen-lockfile --ignore-scripts
python3 docs/notes/document-import/gnu-libtool/v2-6-2/rebuild.py
pnpm --filter=apps-gnu-libtool build
```

`rebuild.py`は全21原稿、全固定入力、10ページの内容レビュー対応を照合します。変更後の原稿を新たに配布する場合は、同梱一覧とハッシュも更新してください。Libxの共有サイト全体ではなく、このアプリを再構築するためのキットです。

原文3.3.1のstderr/stdoutの記載差と、3.7の便宜用ライブラリに関する曖昧な一文は推測で修正せず、共通フッターに原典への案内を置いています。元サイトの外観・実行機能は再現していません。
