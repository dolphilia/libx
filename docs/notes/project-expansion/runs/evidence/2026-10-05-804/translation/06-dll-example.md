---
title: "LZ4: Windows DLL使用例"
licenseSource: "lz4-1-10-0-lib-dll-example-readme-md"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>3bfef50f199e2d06312368ecfb7198f7b5e34eff03720b9aee6783a76277cff2</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/lib/dll/example/README.md\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/lib/dll/example/README.md.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>文書専用ライセンスの表記が確認できないため、Libxの運用方針に基づき、ソフトウェア本体の BSD-2-Clause をこの文書にも適用しています。新たに許諾を取得したという意味ではありません。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
  - kind: editorial
    html: "<p>固定原文はHCレベル3–16と-18を示していますが、固定lz4hc.hのLZ4HC_CLEVEL_MAXは12です。旧バイナリーパッケージの原説明とコマンド・パスを保持したもので、旧レベルがLZ4 1.10.0で動作するという主張ではありません。gcc/MinGW・Visual C++のプラットフォーム手順は今回実行していません。パッケージ一覧のstaticディレクトリと使用例のlibディレクトリも、原記述をそのまま保持しています。</p>"
---

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
