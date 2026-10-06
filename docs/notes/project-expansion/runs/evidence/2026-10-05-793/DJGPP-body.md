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
