# Libx GNU tar 1.35 Introduction, Tutorial and Invocation
# Libx GNU tar 1.35 入門・チュートリアル・呼び出し

GNU tar 1.35の第1〜2章全文と第3章前半（3〜3.3.4）を、39英語ガイドと独立・非公式の日本語訳39ページで提供します。脚注1〜4、英語のGNU Free Documentation License全文、同じ配布物の未変更COPYING（GNU General Public License全文）も含みます。3.4以降・他の章・付録・索引は固定原文を参照してください。コマンド例や原著プログラムは実行していません。

Complete chapters1–2 and sections3–3.3.4 are provided in39 English guides and39 independent, unofficial Japanese translations, including footnotes1–4. Two English references provide the full GFDL and unchanged same-archive COPYING. Section3.4onward, other chapters, appendices and indexes are available in the fixed complete original. Commands are literal examples, not executed demos.

## 原典・利用条件 / Original and terms

Original: *GNU tar: an archiver tool*, version1.35,10July2023. Publisher: Free Software Foundation. Original authors: John Gilmore, Jay Fenlason, Joy Kendall, Thomas Bushnell n/BSG, François Pinard, Paul Eggert, Sergey Poznyakoff, Amy Gorin, Melissa Weisshaus, Daniel Hagerty, Jeff Bailey. Original notices and full Authors text are preserved in the page footers.

The documentation is licensed under GNU Free Documentation License1.3 or later, with invariant section **GNU General Public License**, Front-Cover Text **A GNU Manual**, and Back-Cover Text **You have the freedom to copy and modify this GNU manual.** The generated fixed original has no GPL appendix; unchanged same-archive COPYING is supplied as an explicit supplement, without claiming it was an appendix in that original. No invariant sections or cover texts have been added. Original software and shared code retain their own notices.

Copyright © 2026 Libx for static editing and independent Japanese translation. Modification author and publisher: Libx. These modified documents are supplied under the original GFDL terms. Page footers retain original copyright, permission, authors, full English GFDL, unchanged GPL supplement, modification titles and History.

History:11October2026, *Libx GNU tar 1.35 Introduction and Tutorial / Libx GNU tar 1.35 入門とチュートリアル*, chapters1–2 and footnote1;12October2026, *Libx GNU tar 1.35 Invocation and Option Styles / Libx GNU tar 1.35 呼び出しとオプション形式*, sections3–3.3.4 and footnotes2–4. Modification author and publisher for both: Libx. This combined offer is titled *Libx GNU tar 1.35 Introduction, Tutorial and Invocation / Libx GNU tar 1.35 入門・チュートリアル・呼び出し*.

Fixed original: [tar-1.35.tar.gz](https://ftp.gnu.org/gnu/tar/tar-1.35.tar.gz), SHA256 `14d55e32063ea9526e057fbf35fcabd53378e769787eff7919c3755b02d2b57e`. The fixed archive document date differs from the online revision of22August2023. Signature verification is not claimed.

## 原稿と再生成 / Editable sources and rebuilding

- [固定原文全文 / fixed original](https://libx.dev/docs/gnu-tar/source/v1-35/manual.html)
- [原著配布物 / unchanged archive](https://libx.dev/docs/gnu-tar/source/v1-35/original/tar-1.35.tar.gz)
- [GPL補足 / unchanged COPYING](https://libx.dev/docs/gnu-tar/source/v1-35/COPYING)
- [編集用原稿キット / editable rebuild kit](https://libx.dev/docs/gnu-tar/source/v1-35/source.zip)

`edited/`に全80 Markdown原稿があります。キットでは、第1〜2章を`workspace/docs/notes/document-import/gnu-tar/v1-35/preferred/`、今回の追加8節をその下の`updates/2026-10-12-invocation-styles/preferred/`に収録します。優先編集入力は、既存の`translate-batch1.py`〜`translate-batch3.py`と、追加範囲の`translate.py`です。直接Markdownを編集する場合は、再生成で上書きされるため、対応する翻訳入力も更新してください。HTML本文はテキストエディターで編集できます。

The kit includes fixed original inputs, generated HTML, source fragments, all80 preferred Markdown documents, editable translation mappings, conversion helpers, whole meaning-review bindings, app/shared build sources, configuration and lockfile. Installed dependencies, dist, Git history and the recursive ZIP copy are excluded. `SOURCE_COMPONENTS.json` inventories every included file. Rebuilding restores the omitted ZIP deterministically from that inventory.

展開した`workspace/`で、Python3とBeautifulSoup（今回の確認環境4.13.4）、Node.js（>=20）、pnpm（同梱package.json指定）を使います。通常はハッシュ固定済みHTMLを使い、上流ソフトウェアをコンパイル・実行しません。原HTMLを再生成する場合はGNU Texinfo7.1を使用します。

```sh
pnpm install --frozen-lockfile --ignore-scripts
python3 docs/notes/document-import/gnu-tar/v1-35/updates/2026-10-12-invocation-styles/rebuild.py
pnpm --filter=apps-gnu-tar build
```

`rebuild.py`は既存64原稿と追加16原稿を再生成し、全80原稿・原文入力・39件の全文意味レビュー対応を照合します。配布ZIPは、初期の全同梱ファイルが照合できた場合だけ、変更前の入力から復元します。再生成後の編集内容で新たな配布物を作る場合は、同梱ファイル一覧とハッシュを更新してください。

原文の既知の不整合は黙って修正せず、既存ページの編集注記と原典で補います。元サイト固有の外観や機能は再現していません。fileutils相対参照は対応するGNU coreutils公式節へ案内します。
