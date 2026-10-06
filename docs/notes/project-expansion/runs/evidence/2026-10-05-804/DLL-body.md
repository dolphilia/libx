<span id="lz4-windows-binary-package"></span>
# LZ4 Windowsバイナリーパッケージ

<span id="the-package-contents"></span>
#### パッケージの内容

- `lz4.exe`: gzipと同様の引数をサポートするコマンドラインユーティリティ。
- `dll\msys-lz4-1.dll`: msysでコンパイルしたLZ4ライブラリのDLL。
- `dll\liblz4.dll.a`: Visual C++用のLZ4ライブラリのインポートライブラリ。
- `example\`: LZ4ライブラリの使用例。
- `include\`: LZ4ライブラリに必要なヘッダーファイル。
- `static\liblz4_static.lib`: 静的LZ4ライブラリ。

<span id="usage-of-command-line-interface"></span>
#### コマンドラインインターフェースの使い方

コマンドラインインターフェース（CLI）は、gzipと同様の引数をサポートします。既定では、入力ファイルを受け取り、出力ファイルに圧縮します。

```
    Usage: lz4 [arg] [input] [output]
```

CLIのコマンドの全一覧は、`-h`または`-H`で取得できます。`-3`から`-16`までのコマンドで圧縮率を改善できますが、レベルが高いほど圧縮は遅くなります。CLIにはメモリ内圧縮ベンチマークモジュールがあり、開始圧縮レベルを`-b`、終了圧縮レベルを`-e`、反復時間を`-i`秒で指定します。CLIはパラメーターの結合をサポートします。例えば、`-b1`、`-e18`、`-i1`は`-b1e18i1`にまとめられます。

<span id="the-example-of-usage-of-static-and-dynamic-lz4-libraries-with-gccmingw"></span>
#### gcc/MinGWによる静的・動的LZ4ライブラリの使用例

`cd example`と`make`で、`fullbench-dll`と`fullbench-lib`をビルドします。`fullbench-dll`は`dll`ディレクトリの動的LZ4ライブラリを使います。`fullbench-lib`は`lib`ディレクトリの静的LZ4ライブラリを使います。

<span id="using-lz4-dll-with-gccmingw"></span>
#### gcc/MinGWでLZ4 DLLを使う

gcc/MinGWでプロジェクトをコンパイルするには、`include\`のヘッダーファイルと、動的ライブラリ`dll\msys-lz4-1.dll`が必要です。動的ライブラリはリンクオプションに追加しなければなりません。つまり、LZ4を使うプロジェクトが単一の`test-dll.c`ファイルからなる場合は、`dll\msys-lz4-1.dll`とリンクすべきです。例:

```
    gcc $(CFLAGS) -Iinclude\ test-dll.c -o test-dll dll\msys-lz4-1.dll
```

コンパイルした実行可能ファイルには、`dll\msys-lz4-1.dll`にあるLZ4 DLLが必要です。

<span id="the-example-of-usage-of-static-and-dynamic-lz4-libraries-with-visual-c"></span>
#### Visual C++による静的・動的LZ4ライブラリの使用例

`example\fullbench-dll.sln`を開き、`dll`ディレクトリの動的LZ4ライブラリを使う`fullbench-dll`をコンパイルします。このソリューションはVisual C++ 2010以降で動作します。2010より新しいVisual C++でソリューションを開くと、現在のバージョンにアップグレードされます。

<span id="using-lz4-dll-with-visual-c"></span>
#### Visual C++でLZ4 DLLを使う

Visual C++でプロジェクトをコンパイルするには、`include\`のヘッダーファイルと、インポートライブラリ`dll\liblz4.dll.a`が必要です。

1. ヘッダーファイルは、プロジェクトのプロパティの`C/C++`→`General`にある`Additional Include Directories`に追加すべきです。
2. インポートライブラリは、プロジェクトのプロパティの`Linker`→`Input`にある`Additional Dependencies`に追加しなければなりません。ライブラリのフルパスを使わずに`liblz4.dll.a`という名前だけを指定する場合は、そのディレクトリを`Linker\General\Additional Library Directories`に追加しなければなりません。

コンパイルした実行可能ファイルには、`dll\msys-lz4-1.dll`にあるLZ4 DLLが必要です。
