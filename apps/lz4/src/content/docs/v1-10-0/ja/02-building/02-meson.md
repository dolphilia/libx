---
title: "LZ4: Mesonビルドシステム"
licenseSource: "lz4-1-10-0-build-meson-readme-md"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>16be5030767265e9887c595769c6c234f2ae2002a565fa6f430d95b8bb48f350</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/build/meson/README.md\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/build/meson/README.md.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>文書専用ライセンスの表記が確認できないため、Libxの運用方針に基づき、ソフトウェア本体の GPL-2.0-or-later（本掲載はversion2条件を履行） をこの文書にも適用しています。新たに許諾を取得したという意味ではありません。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
  - kind: editorial
    html: "<p>原文は、移動先として旧パス contrib/meson を記載しています。この固定リリースでは該当ファイルは build/meson にあり、NEWSにも移動の記録があります。原文中のコマンドとパスを無断で修正せず保持しました。</p>"
---

<span id="meson-build-system-for-lz4"></span>

lz4 用の Meson ビルドシステム
==========================

Meson は、プログラマーの生産性を最適化するために設計されたビルドシステムです。
単体テスト、カバレッジレポート、Valgrind、CCache など、現代のソフトウェア開発で使われるツールや手法を、標準で簡単に利用できるよう支援することで、この目標の実現を目指しています。

この Meson ビルドシステムは無保証で提供されています。

<span id="how-to-build"></span>

## ビルド方法

`cd` でこの Meson ディレクトリ（`contrib/meson`）へ移動してください。

```sh
meson setup --buildtype=release -Ddefault_library=shared -Dprograms=true builddir
cd builddir
ninja             # to build
ninja install     # to install
```

ステージングディレクトリへインストールしたい場合は、次のようにします。

```sh
DESTDIR=./staging ninja install
```

ビルドオプションの設定には、次のコマンドを使います。

```sh
meson configure
```

[meson(1) のマニュアル](https://manpages.debian.org/testing/meson/meson.1.en.html)を参照してください。
