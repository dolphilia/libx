---
title: "LZ4: インストール"
licenseSource: "lz4-1-10-0-install"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>e40cb31226d6f2e42ccc84eb8e0d867776d06846d7c5b7889bc733a5618debad</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/INSTALL\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/INSTALL.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>文書専用ライセンスの表記が確認できないため、Libxの運用方針に基づき、ソフトウェア本体の GPL-2.0-or-later をこの文書にも適用しています。本掲載ではversion2の条件を履行します。新たに許諾を取得したという意味ではありません。</p><p>本文は日本語に翻訳し、英語の見出しアンカー installation を保持しました。コード・URLは原文のままです。</p>"
---

<span id="installation"></span>

インストール
=============

```
make
make install     # this command may require root access
```

LZ4 の `Makefile` は、[ステージングインストール]、[配置先の変更]、[コマンドの再定義]など、標準的な [Makefile の慣例]に対応しています。
並列ビルド（`-j#`）にも対応しています。

[Makefile の慣例]: https://www.gnu.org/prep/standards/html_node/Makefile-Conventions.html
[ステージングインストール]: https://www.gnu.org/prep/standards/html_node/DESTDIR.html
[配置先の変更]: https://www.gnu.org/prep/standards/html_node/Directory-Variables.html
[コマンドの再定義]: https://www.gnu.org/prep/standards/html_node/Utilities-in-Makefiles.html
