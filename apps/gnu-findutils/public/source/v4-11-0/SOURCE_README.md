# Libx GNU findutils 4.11.0 Finding Files — Overview and Chapters 1–2
# Libx GNU findutils 4.11.0 ファイル検索 — 概要・第1〜2章

GNU findutils 4.11.0の原文概要・通知と第1〜2章全文を、26ページの英語原文と独立・非公式の日本語訳で提供します。収録箇所の脚注本文も含めます。残りの章・索引は、固定した原英語マニュアル全文、原Texinfo・Infoで参照できます。原プログラムや掲載例は実行せず、静的な文字列として提供します。

The original overview notice and complete chapters 1–2 are provided in 26 English pages and an independent, unofficial Japanese translation, including the whole adopted footnote. Remaining chapters and indexes are available in the fixed complete English manual and unchanged Texinfo/Info.

## 原著と条件 / Original and terms

- Original title: Finding files / GNU Findutils, version 4.11.0. Document revision: 9 July 2026. Release: 11 July 2026. Acquisition: 6 October 2026.
- Original authors: David MacKenzie and James Youngman. Original publisher: Free Software Foundation.
- Copyright © 1994–2026 Free Software Foundation, Inc.
- The original document is available under the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation, with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts. A copy of the whole original English license is included in the fixed manual, English reference page, and each guide's source footer.
- Modified title: Libx GNU findutils 4.11.0 Finding Files — Overview and Chapters 1–2 / Libx GNU findutils 4.11.0 ファイル検索 — 概要・第1〜2章. Modification author and publisher: Libx, modified 6 October 2026.
- Copyright © 2026 Libx, for editing and independent Japanese translation. Modified documentation is provided under the same GFDL 1.3-or-later conditions. No Invariant Sections or Cover Texts have been added.

原著の通知・著作者・発行者・原英語ライセンス全文・履歴を保持しています。ライセンス自体の日本語訳は提供していません。未変更のソフトウェア配布物には元のGPL等の通知とソースを保持し、共有Libxファイルには既存の条件が適用されます。

Original sources: [GNU findutils](https://www.gnu.org/software/findutils/), [official manual](https://www.gnu.org/software/findutils/manual/), and the [fixed GNU distribution mirror archive](https://mirrors.ibiblio.org/gnu/findutils/findutils-4.11.0.tar.xz). The packaged NEWS identifies stable 4.11.0 with its release date; `doc/version.texi` records the distinct document revision. No GPG signature verification is claimed.

Fixed archive SHA256:

```
bfd19cb06cc71f3352d567e90284d8cdac02ac89774bbeadf0b533b0c11432fd
```

## 編集可能な原稿 / Preferred editable sources

- [固定原英語マニュアル全文 / fixed complete English manual](https://libx.dev/docs/gnu-findutils/source/v4-11-0/manual.html)
- [原英文GFDL全文 / original English GFDL](https://libx.dev/docs/gnu-findutils/source/v4-11-0/manual.html#GNU-Free-Documentation-License)
- [未変更のソース配布物 / unchanged source archive](https://libx.dev/docs/gnu-findutils/source/v4-11-0/original/findutils-4.11.0.tar.xz)
- [原Texinfo](https://libx.dev/docs/gnu-findutils/source/v4-11-0/original/doc/find.texi)
- [原Info](https://libx.dev/docs/gnu-findutils/source/v4-11-0/original/doc/find.info)
- [原英文GFDL Texinfo](https://libx.dev/docs/gnu-findutils/source/v4-11-0/original/doc/fdl.texi)
- [編集用原稿・再生成キット / editable source and rebuild kit](https://libx.dev/docs/gnu-findutils/source/v4-11-0/source.zip)

`edited/en/01-guide/`と`edited/ja/01-guide/`は配信に使う原文・訳文のMarkdown原稿です。原英語GFDL参照ページは`edited/en/02-reference/01-gfdl.md`にあります。同じ53原稿と優先編集入力を`source.zip`に収録しています。HTMLを含むMarkdownはテキストエディターで編集できます。コードの改行・タブを数値文字参照として保持し、変数表記・表・脚注の本文と往復リンクを残します。

The kit contains the unchanged original Texinfo/Info/notices/archive, fixed complete English manual, all 53 editable Markdown documents, source-to-translation units, independent Japanese JSON inputs, replay helpers, and required app/shared build files. Installed dependencies, build outputs, host progress and a recursive copy of the ZIP are excluded. `SOURCE_COMPONENTS.json` records member hashes and byte lengths.

原著配布物に含まれない生成用`dblocation.texi`を`derived-config/`へ分離して添付します。値`/usr/local/var/locatedb`は配布Infoマニュアルと原Makefileの生成方法に対応しています。元の19ファイルとアーカイブは変更していません。

## 再生成 / Regeneration

展開した`workspace/`を作業ディレクトリにします。確認環境はNode.js 24.19.0、pnpm 10.10.0、GNU Texinfo（makeinfo）7.1、PythonとBeautifulSoup 4.13.3です。依存バージョンは同梱lockfileで固定しています。

```
pnpm install --frozen-lockfile --ignore-scripts
python3 docs/notes/document-import/gnu-findutils/v4-11-0/regenerate-en.py
python3 docs/notes/document-import/gnu-findutils/v4-11-0/extract-units.py
python3 docs/notes/document-import/gnu-findutils/v4-11-0/regenerate-ja.py
python3 docs/notes/document-import/gnu-findutils/v4-11-0/prepare-notice-draft.py
python3 docs/notes/document-import/gnu-findutils/v4-11-0/adopt-canonical.py
node docs/notes/document-import/gnu-findutils/v4-11-0/check-content.mjs
pnpm --filter=apps-gnu-findutils build
```

日本語の優先編集入力は`workspace/docs/notes/document-import/gnu-findutils/v4-11-0/translations/*-ja.json`です。`*-units.json`に原文と保護したインライン表記の対応を保存しています。原文、英語本文、翻訳単位、日本語本文、共通通知、配信用Markdownの順に再生成します。保持検査は意味レビューを代替しません。保存済みレビューは、確認した原文・原稿のハッシュが一致する範囲だけ再利用できます。

These commands format documentation and rebuild Libx. They do not compile or execute GNU findutils or its examples.

## 変更と履歴 / Changes and History

Original: Finding files / GNU Findutils, version 4.11.0, document revision 9 July 2026, release 11 July 2026, authors and publisher above. Original sources, archive and notices are unchanged.

6 October 2026: Libx adopted the original overview notice and complete chapters 1–2, split them into 26 paired pages, added an independent Japanese translation, and linked the rest of the fixed original manual. All 31 code/output blocks, 146 variable elements, two tables, the whole adopted footnote, original identifiers, copyright, permission and English GFDL are retained. Heading self-link marks are replaced by common navigation. Original authors/publisher, the distinct modified title, Libx copyright and History appear in the existing footer and this source kit.

原文の説明不足・記述上の相違や元サイト固有の機能は、静的表示と固定原典へのリンクで補います。原著の技術監査や元サイトの完全再現は提供範囲に含めません。
