# Libx GNU tar 1.35 Introduction and Tutorial
# Libx GNU tar 1.35 入門とチュートリアル

GNU tar 1.35の第1〜2章全文と脚注1を、31英語ガイドと独立・非公式の日本語訳31ページで提供します。英語のGNU Free Documentation License全文と、同じ配布物の未変更COPYING（GNU General Public License全文）も提供します。他の章・付録・索引は固定原文を参照してください。掲載コマンドや原著プログラムは実行していません。

Complete chapters 1–2 and footnote 1 are provided in 31 English guides and 31 independent, unofficial Japanese translations, plus two English license reference pages. Remaining chapters, appendices and indexes are available in the fixed original. Commands and upstream software are not executed.

## 原著・利用条件 / Original and terms

Original title: GNU tar: an archiver tool; version 1.35, 10 July 2023. Original publisher: Free Software Foundation. Original authors: John Gilmore, Jay Fenlason, Joy Kendall, Thomas Bushnell n/BSG, François Pinard, Paul Eggert, Sergey Poznyakoff, Amy Gorin, Melissa Weisshaus, Daniel Hagerty, Jeff Bailey.

Copyright © 1992, 1994–1997, 1999–2001, 2003–2017, 2021–2023 Free Software Foundation, Inc.

Permission is granted to copy, distribute and/or modify the original document under the GNU Free Documentation License, Version 1.3 or any later version; with the Invariant Sections being “GNU General Public License”; with the Front-Cover Texts being “A GNU Manual”; with the Back-Cover Text “You have the freedom to copy and modify this GNU manual.” The full original notice, authors, History and English GFDL are retained in every page's source details.

Modified title: Libx GNU tar 1.35 Introduction and Tutorial / Libx GNU tar 1.35 入門とチュートリアル. Modification author and publisher: Libx, 11 October 2026. Copyright © 2026 Libx, for static editing and independent Japanese translation. The modified documentation uses the same GFDL 1.3-or-later conditions and retains the original invariant-section and cover-text declarations. No new invariant sections or cover texts are added. The license itself is not translated.

固定原文は、不変節としてGPLを宣言していますが、生成HTML/TexinfoにGPL付録がありません。同一配布物のCOPYING全文を未変更の明示的な補足として提供します。これを原文に見つかった付録と表示せず、歴史的に意図された付録と同一であるとの証明も主張しません。原著ソフトウェア配布物は元の通知を保持し、共有Libxコードには各ファイルの既存条件が適用されます。

The original declares a GPL invariant section but has no GPL appendix in its generated HTML/Texinfo. The unchanged whole COPYING from the same archive is supplied as an explicit supplement, not as an appendix found in the original or proof of the historically intended text. Original software notices and existing shared Libx notices remain intact.

Original release: [GNU archive](https://ftp.gnu.org/gnu/tar/tar-1.35.tar.gz). Fixed SHA256:

```
14d55e32063ea9526e057fbf35fcabd53378e769787eff7919c3755b02d2b57e
```

The fixed archive document date is distinct from the online revision of 22 August 2023. The source manifest records acquisition and file hashes; signature verification is not claimed.

## 原稿と再生成 / Editable sources and rebuilding

- [固定原文全文 / fixed original](https://libx.dev/docs/gnu-tar/source/v1-35/manual.html)
- [原著配布物 / unchanged archive](https://libx.dev/docs/gnu-tar/source/v1-35/original/tar-1.35.tar.gz)
- [GPL補足 / unchanged COPYING](https://libx.dev/docs/gnu-tar/source/v1-35/COPYING)
- [編集用原稿キット / editable rebuild kit](https://libx.dev/docs/gnu-tar/source/v1-35/source.zip)

`edited/`とキットの`workspace/docs/notes/document-import/gnu-tar/v1-35/preferred/`に全64 Markdown原稿があります。HTML本文もテキストエディターで編集できます。`translate-batch1.py`〜`translate-batch3.py`には、優先編集入力である独立日本語訳と変換指示があります。直接Markdownを編集する場合は、再生成時に上書きされるため、対応する翻訳入力も更新してください。固定原文、生成HTML、原文断片、レビュー対応、共有ソース、設定、lockfileを同梱し、依存物、dist、Git履歴、自己ZIPは含めません。`SOURCE_COMPONENTS.json`で全同梱ファイルを照合できます。

The kit includes all original inputs, generated HTML, source fragments, preferred Markdown, editable translation mappings, conversion helpers, review bindings, app and shared build sources, configuration and lockfile. Installed dependencies, build output, Git history and a recursive ZIP copy are excluded.

展開した`workspace/`で、Python 3とBeautifulSoup（確認環境4.13.3）、Node.js（>=20）、pnpm（同梱package.json指定）を使います。原HTMLを再生成する場合はGNU Texinfo 7.1を使用してください。通常の再構成はハッシュ固定済みHTMLを使い、上流ソフトウェアをコンパイル・実行しません。

```sh
pnpm install --frozen-lockfile --ignore-scripts
python3 docs/notes/document-import/gnu-tar/v1-35/rebuild.py
pnpm --filter=apps-gnu-tar build
```

`rebuild.py`は同梱固定入力から英語定本と3バッチの日本語を再生成し、原稿64件・本文・脚注・例のバイト一致と原文/レビュー対応を確認します。独立したインストール、再生成、ビルドの結果はLibxの案件台帳で記録します。

原文の例に残る不整合3件と改訂待ちの節は、原文を変更せず日本語ページの編集注記で説明しています。原文からのfileutils相対参照は対応するGNU coreutils公式節へ案内します。原典固有の外観や機能は再現していません。
