---
title: "LZ4: DOS/djgpp向けビルド"
licenseSource: "lz4-1-10-0-contrib-djgpp-readme-md"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>1ec3f0dd6c6644bc3938fb52bc6caf29be557610f61ea60590c05d1bc02dd30c</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/contrib/djgpp/README.MD\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/contrib/djgpp/README.MD.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>文書専用ライセンスの表記が確認できないため、Libxの運用方針に基づき、ソフトウェア本体の BSD-2-Clause をこの文書にも適用しています。新たに許諾を取得したという意味ではありません。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
---

<span id="lz4-for-dosdjgpp"></span>

# DOS/djgpp 用の lz4
このファイルでは、OSX、Linux 上で Andrew Wu の build-djgpp クロスコンパイラー（[GitHub][0]、[バイナリ][1]）を使い、DOS/djgpp で利用する lz4.exe と liblz4.a をコンパイルする方法を説明します。

<span id="setup"></span>

## セットアップ
* 利用するプラットフォーム向けの djgpp の tarball（[バイナリ][1]）をダウンロードします。  
* 展開してインストールします（`tar jxvf djgpp-linux64-gcc492.tar.bz2`）。パスを控えておいてください。ここでは `/home/user/djgpp` と仮定します。
* `bin` フォルダーを `PATH` に追加します。bash では `export PATH=/home/user/djgpp/bin:$PATH` を実行します。
* `contrib/djgpp/` にある `Makefile` が `CC`、`AR`、`LD` を設定します。したがって、`CC=i586-pc-msdosdjgpp-gcc`、`AR=i586-pc-msdosdjgpp-ar`、`LD=i586-pc-msdosdjgpp-gcc` となります。

<span id="building-lz4-for-dos"></span>

## DOS 向けの LZ4 のビルド
lz4 のベースディレクトリで、`contrib/djgpp/Makefile` を使って次を試してください。
試すコマンド:
* `make -f contrib/djgpp/Makefile`
* `make -f contrib/djgpp/Makefile liblz4.a`
* `make -f contrib/djgpp/Makefile lz4.exe`
* `make -f contrib/djgpp/Makefile DESTDIR=/home/user/dos install`。ただし、\*nix 上ではあまり意味がありません。
* `make -f contrib/djgpp/Makefile uninstall` を実行することもできます。

[0]: https://github.com/andrewwutw/build-djgpp
[1]: https://github.com/andrewwutw/build-djgpp/releases
