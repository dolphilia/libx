# Libx GNU M4 1.4.21 入門・起動・構文 / editable source offer

GNU M4 1.4.21の完全な第1〜3章18節と脚注1の原文コピー・独立した非公式日本語訳、および未改変の英語GFDLを提供します。他の章・索引は固定原文全文を参照してください。例は静的な文字列であり、実行機能はありません。

Original title: GNU M4, version 1.4.21, edition 1.4.21, 6 February 2026. Original authors: René Seindal, François Pinard, Gary V. Vaughan, Eric Blake. Original publisher: Free Software Foundation. Modified 11 October 2026 by Libx under the distinct title above. Copyright © 2026 Libx for independent Japanese translation and static editing. Original copyright and copying notice remain in the source manual and each page footer.

The manual and this modified document are distributed under the GNU Free Documentation License version 1.3 or later, with no Invariant Sections, no Front-Cover Texts and no Back-Cover Texts. The entire English license is included as `workspace/docs/notes/document-import/gnu-m4/v1-4-21/source/archive/m4-1.4.21/doc/fdl-1.3.texi`, in the fixed complete HTML, the English reference page, and each page footer. GNU M4 software and Libx implementation/dependencies retain their separate notices; this statement does not relicense them.

Original distribution: https://ftp.gnu.org/gnu/m4/m4-1.4.21.tar.gz
SHA-256: 38ae59f7a30bf9c108193cc5c25fbb06014f21e230c7ede2eff614f7b7c37ed8
Original online manual: https://www.gnu.org/software/m4/manual/ (online version may differ; fixed 1.4.21 source is supplied).

`SOURCE_COMPONENTS.json` inventories every supplied file with SHA-256. `workspace/docs/notes/document-import/gnu-m4/v1-4-21/preferred/` contains all 37 preferred editable Markdown documents (18 English guides, 18 Japanese guides, one English license reference). Translation generators contain editable Japanese prose. The fixed archive, Texinfo, Info and complete derived HTML, conversion scripts, configuration, build scripts, shared source and dependency lockfile are supplied. Installed dependencies, caches, build output and the ZIP itself are excluded.

## Rebuild

Use Python 3 with Beautiful Soup 4, Node.js 20 and pnpm as specified in `workspace/package.json`. From the extracted `workspace/` directory:

```sh
python3 docs/notes/document-import/gnu-m4/v1-4-21/rebuild.py
pnpm install --filter 'apps-gnu-m4...' --frozen-lockfile
pnpm --filter apps-gnu-m4 build
```

`rebuild.py` regenerates all 37 documents byte-for-byte from the fixed HTML and editable translation generators, verifies the fixed source and review bindings, and prepares public edited sources. To derive the complete HTML again from Texinfo, change directory to `workspace/docs/notes/document-import/gnu-m4/v1-4-21/` and use GNU Texinfo 7.1 with `makeinfo --html --no-split -D DISTRIB -I source/archive/m4-1.4.21/doc -o source/derived/manual.html source/archive/m4-1.4.21/doc/m4.texi`; the originally generated HTML is included, so Texinfo is not required for the normal rebuild above. Review records describe the supplied version; editing prose requires reviewing the affected meaning and renewing its hashes.

Raw fixed files and the editable documents are also available beside this ZIP under `archive/`, `manual.html`, `m4-1.4.21.tar.gz` and `edited/`. The archive has no expiry configured. Published artifacts may be rebuilt with different generated Astro scope tokens; source document equality is checked separately from rendered body and license preservation.
