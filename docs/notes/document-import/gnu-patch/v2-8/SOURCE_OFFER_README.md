# Libx GNU patch 2.8 マニュアル / editable source offer

GNU patch 2.8に同梱されたpatch.manの全14見出しを9ページに整理し、原文と独立した非公式日本語訳を提供します。実装ファイル・過去のNEWSは翻訳対象外です。例は静的な文字列です。

Original authors: Larry Wall, Paul Eggert, Wayne Davison, David MacKenzie, Andreas Gruenbacher. Original publisher: Free Software Foundation. Static editing and independent unofficial Japanese translation: Libx, 2026. The entire resulting derived manual is distributed under the identical original permission notice below. This notice applies to the manual; original program source and Libx implementation/dependencies retain their separate notices, including the program COPYING file supplied with the original distribution.

Copyright © 1989–2025 Free Software Foundation, Inc.
Copyright © 1984–1986, 1988 Larry Wall.

Permission is granted to make and distribute verbatim copies of this manual provided the copyright notice and this permission notice are preserved on all copies.

Permission is granted to copy and distribute modified versions of this manual under the conditions for verbatim copying, provided that the entire resulting derived work is distributed under the terms of a permission notice identical to this one.

Permission is granted to copy and distribute translations of this manual into another language, under the above conditions for modified versions, except that this permission notice may be included in translations approved by the copyright holders instead of in the original English.

Original distribution: https://ftp.gnu.org/gnu/patch/patch-2.8.tar.gz
SHA-256: 308a4983ff324521b9b21310bfc2398ca861798f02307c79eb99bb0e0d2bf980
Project: https://www.gnu.org/software/patch/ (online material may differ from this fixed 2.8 source).

原文の--follow-symlinksの説明と同梱NEWSの2.8変更説明には違いがあります。また環境変数VERSION_CONTROL/PATCH_VERSION_CONTROLの原文は-vを参照しますが、OPTIONSでは-vが--version、-Vが--version-controlです。本文は原文のまま保持し、各ページの出典欄に注記しています。

SOURCE_COMPONENTS.json lists every supplied file with SHA-256. workspace/docs/notes/document-import/gnu-patch/v2-8/preferred/ contains all18 editable Markdown documents. The two translation generators contain editable Japanese prose. Fixed patch.man, full derived HTML and original distribution, converters, configuration, shared source, build scripts and dependency lockfile are included. Installed dependencies, caches, build output and the ZIP itself are excluded.

## Rebuild

Use Python3 with Beautiful Soup4, Node.js20 or newer and pnpm10.10.0 as specified in workspace/package.json. From the extracted workspace/ directory:

```sh
python3 docs/notes/document-import/gnu-patch/v2-8/rebuild.py
pnpm install --filter 'apps-gnu-patch...' --frozen-lockfile
pnpm --filter apps-gnu-patch build
```

rebuild.py reproduces the supplied18 documents byte-for-byte from fixed HTML and editable translation generators, checks fixed inputs and review bindings, and prepares public edited sources. On the first rebuild in a fresh extracted packet, it also reconstructs the omitted self-ZIP deterministically from SOURCE_COMPONENTS.json and the supplied files, before updating generated records. Keep README.md and SOURCE_COMPONENTS.json beside workspace/; the reconstructed ZIP serves the local source-offer link. The normal rebuild uses included HTML and does not require mandoc. To regenerate that HTML from the original roff, use the matching mandoc tool: `mandoc -Thtml -Ofragment workspace/docs/notes/document-import/gnu-patch/v2-8/source/original/patch.man > manual.html`. Output formatting can vary with mandoc versions; the exact input used for this edition is supplied. Original programs are not executed by the rebuild.

Review records describe the supplied version. Edits require review of the affected meaning and renewed hashes. Raw fixed files and edited documents are available beside this ZIP under patch.man, manual.html, patch-2.8.tar.gz and edited/. No expiry is configured for these public source paths.
