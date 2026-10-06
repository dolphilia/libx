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
