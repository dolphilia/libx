---
title: "LZ4: ライブラリファイル"
licenseSource: "lz4-1-10-0-lib-readme-md"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>a26e68719f64ebdef6ea1a9c0ca7bf76892a49d041e336364bcf91bbfb1875eb</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/lib/README.md\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/lib/README.md.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>文書専用ライセンスの表記が確認できないため、Libxの運用方針に基づき、ソフトウェア本体の BSD-2-Clause をこの文書にも適用しています。新たに許諾を取得したという意味ではありません。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
  - kind: editorial
    html: "<p>ライセンス節は固定READMEの記述を保持しています。固定lib/dll/example/MakefileにはGPL-2.0-or-laterの個別通知があるため、lib配下すべてを一律BSDと再指定せず、個別通知を優先します。実験的API・機能の状態は原文の執筆時点の説明です。本文のビルド例・Windows手順を今回実行したという意味ではありません。仕様への内部参照は、同じ固定版のレビュー済み日本語ページへ対応付けています。</p>"
---

<span id="lz4---library-files"></span>
# LZ4: ライブラリファイル

`/lib`ディレクトリには多数のファイルがありますが、プロジェクトの目的によっては、すべてが必要なわけではありません。制限のあるシステムでは、バイナリーサイズと依存関係を減らすため、組み込むソースファイルの数を減らしたい場合があります。

機能は、以下に説明する「レベル」単位で追加します。

<span id="level-1--minimal-lz4-build"></span>
#### レベル1: 最小限のLZ4ビルド

最低限必要なのは **`lz4.c`** と **`lz4.h`** で、高速な圧縮・展開アルゴリズムを提供します。[LZ4ブロック形式][LZ4 block format]でデータを生成・展開します。

<span id="level-2--high-compression-variant"></span>
#### レベル2: 高圧縮版

圧縮速度と引き換えに圧縮率を上げるため、**lz4hc** という高圧縮版を利用できます。**`lz4hc.c`** と **`lz4hc.h`** を追加してください。この版も[LZ4ブロック形式][LZ4 block format]を使って圧縮し、通常の`lib/lz4.*`ソースファイルに依存します。

<span id="level-3--frame-support-for-interoperability"></span>
#### レベル3: 相互運用のためのフレーム対応

`lz4`コマンドラインユーティリティと互換性のある圧縮データを生成するには、[公式の相互運用可能なフレーム形式][official interoperable frame format]を使う必要があります。**lz4frame** ライブラリが、この形式を自動的に生成・展開します。公開APIは`lib/lz4frame.h`に記述されています。正しく動作するため、lz4frameには、lz4、lz4hcに加え **xxhash** も含め、`/lib`にある他のすべてのモジュールが必要です。そのため、`xxhash.c`と`xxhash.h`も組み込む必要があります。

<span id="level-4--file-compression-operations"></span>
#### レベル4: ファイル圧縮操作

ファイル操作の補助として、ライブラリには最近`lz4file.c`と`lz4file.h`が追加されました（執筆時点では、まだ実験的とみなされています）。これらは、透過的なLZ4圧縮・展開を使って、ファイルを開く・読む・書く・閉じる操作を可能にします。その結果、`lz4file`を使うと`<stdio.h>`への依存関係が増えます。

`lz4file`は、[LZ4フレーム形式][LZ4 Frame format]仕様に準拠する圧縮データを生成するため、`lz4frame`に依存します。したがって、この機能を有効にするには、`lib/`ディレクトリのすべての`*.c`と`*.h`ファイルを組み込む必要があります。

<span id="advanced--experimental-api"></span>
#### 高度なAPI・実験的API

将来のバージョンで安定性が保証されない定義は、`LZ4_STATIC_LINKING_ONLY`などのマクロで保護されています。名前が示すとおり、これらの定義は静的リンクの文脈で ***のみ*** 使うべきです。それ以外では、依存するアプリケーションが、将来のAPIまたはABIの互換性破壊により動作しなくなる可能性があります。関連するシンボルも、既定では動的ライブラリから公開されません。それでも必要な場合は、ビルドマクロ`LZ4_PUBLISH_STATIC_FUNCTIONS`と`LZ4F_PUBLISH_STATIC_FUNCTIONS`を使い、公開を強制できます。

<span id="build-macros"></span>
#### ビルドマクロ

次のビルドマクロを選び、コンパイル時のソースコードの動作を調整できます。

- `LZ4_FAST_DEC_LOOP`: 速度を最適化した展開ループを有効にします。現代のCPUでは、より効果的です。このループは`x86`、`x64`、`aarch64`のCPUでよく動作し、これらでは自動的に有効になります。プリプロセッサーに`LZ4_FAST_DEC_LOOP=1`または`0`を渡して、手動で有効・無効を切り替えることもできます。例えば、`gcc`では`-DLZ4_FAST_DEC_LOOP=1`、`make`では`CPPFLAGS+=-DLZ4_FAST_DEC_LOOP=1 make lz4`です。

- `LZ4_DISTANCE_MAX`: 圧縮器が許容する最大オフセットを制御します。既定値は65535で、lz4形式がサポートする最大値です。最大距離を減らすと、LZ4が一致を見つける機会が減り、圧縮率は悪化します。小さな最大距離を設定することで、メモリの制約がある特定の展開器との互換性を確保できる場合があります。このビルドマクロが影響するのは、圧縮器の圧縮出力だけです。

- `LZ4_DISABLE_DEPRECATE_WARNINGS`: 非推奨の関数を呼ぶと、コンパイラーが警告を出します。これは、利用者にソースコードの更新を促すためです。問題になる場合は、通常、コンパイラーに警告を無視させることができます。例えば、`gcc`の`-Wno-deprecated-declarations`や、Visual Studioの`_CRT_SECURE_NO_WARNINGS`です。このビルドマクロは、プロジェクト固有の別の方法を提供します。LZ4のヘッダーファイルを組み込む前に、`LZ4_DISABLE_DEPRECATE_WARNINGS`を定義します。

- `LZ4_FORCE_SW_BITCOUNT`: 既定では、圧縮アルゴリズムはビットカウント命令を使って長さを求めようとします。この命令は、多くのCPUで高速な単一命令として実装されています。対象CPUが対応しない場合、コンパイラーの組み込み関数が動作しない場合、または性能が悪い場合は、代わりに最適化したソフトウェア処理を使えます。このビルドマクロを設定して実現します。ほとんどの場合、必要になるとは考えられませんが、一般的でないプラットフォームでは検討する妥当な理由があります。

- `LZ4_ALIGN_TEST`: 圧縮状態として使うために引数で渡したメモリ領域が、適切にアラインされていることを、アラインメントテストで確認します。テストが不安定だと分かった場合は、値を0に設定して無効にできます。

- `LZ4_USER_MEMORY_FUNCTIONS`: `<stdlib.h>`の`malloc()`、`calloc()`、`free()`の呼び出しを、利用者定義の関数に置き換えます。関数名は`LZ4_malloc()`、`LZ4_calloc()`、`LZ4_free()`でなければなりません。利用者の関数は、リンク時に利用可能でなければなりません。

- `LZ4_STATIC_LINKING_ONLY_DISABLE_MEMORY_ALLOCATION`: 動的メモリ確保のサポートを取り除きます。詳しくは、`lib/lz4.c`にある、このマクロの説明を参照してください。

- `LZ4_STATIC_LINKING_ONLY_ENDIANNESS_INDEPENDENT_OUTPUT`: 異なるエンディアン（リトルエンディアンとビッグエンディアン）のプラットフォームで、同じ圧縮出力を生成するための実験的機能です。リトルエンディアンの出力は変わらず、ビッグエンディアンではリトルエンディアンと同じ出力を生成するようになります。後方互換性と前方互換性には、いかなる影響もないと見込まれています。

- `LZ4_FREESTANDING`: このビルドマクロを1に設定すると、LZ4/HCはC標準ライブラリへの依存関係を取り除きます。メモリ確保関数と、`memmove()`、`memcpy()`、`memset()`も対象です。組み込み環境、ブートローダーなど、制限のある環境でLZ4/HCを使いやすくするためのマクロです。詳しくは、`lib/lz4.h`にある、このマクロの説明を参照してください。

- `LZ4_HEAPMODE`: `LZ4_compress_default()`などの状態を持たない圧縮関数が、ハッシュテーブルのメモリを確保する方法を選びます。スタック（0: 既定、最速）か、ヒープ（1: malloc()が必要）です。

- `LZ4HC_HEAPMODE`: `LZ4_compress_HC()`などの状態を持たないHC圧縮関数が、作業領域のメモリを確保する方法を選びます。スタック（0）か、ヒープ（1: 既定）です。作業領域はかなり大きく、スタックでは不便な場合があるため、ヒープモードを推奨します。

- `LZ4F_HEAPMODE`: `LZ4F_compressFrame()`が圧縮状態を確保する方法を、スタック（既定、値0）か、ヒープメモリ（値1）から選びます。

<span id="makefile-variables"></span>
#### Makefile変数

次の`Makefile`変数を選び、生成するバイナリーの構成を変更できます。

- `BUILD_SHARED`: `liblz4`動的ライブラリを生成します（既定で有効）。
- `BUILD_STATIC`: `liblz4`静的ライブラリを生成します（既定で有効）。

<span id="amalgamation"></span>
#### 単一ファイルへの統合

lz4のソースコードは、単一ファイルに統合できます。次のコマンドで、すべてのソースコードを`lz4_all.c`にまとめられます。

```
cat lz4.c lz4hc.c lz4frame.c > lz4_all.c
```

（`cat`のファイル順序が重要です。）その後、`lz4_all.c`をコンパイルします。`lz4_all.c`のコンパイルには、`/lib`内のすべての`*.h`ファイルが引き続き必要です。

<span id="windows--using-mingwmsys-to-create-dll"></span>
#### Windows: MinGW+MSYSでDLLを作る

MinGW+MSYSで`make liblz4`コマンドを使い、DLLを作れます。このコマンドは、`dll\liblz4.dll`と、インポートライブラリ`dll\liblz4.lib`を生成します。Linux上でクロスコンパイルするときに`dlltool`コマンドを変更するには、`DLLTOOL`変数を設定するだけです。Linux上でmingw-w64の64ビット向けにクロスコンパイルする例:

```
make BUILD_STATIC=no CC=x86_64-w64-mingw32-gcc DLLTOOL=x86_64-w64-mingw32-dlltool OS=Windows_NT
```

インポートライブラリが必要なのは、Visual C++の場合だけです。gcc/MinGWでプロジェクトをコンパイルするには、ヘッダーファイル`lz4.h`、`lz4hc.h`、`lz4frame.h`と、動的ライブラリ`dll\liblz4.dll`が必要です。動的ライブラリはリンクオプションに追加しなければなりません。つまり、LZ4を使うプロジェクトが単一の`test-dll.c`ファイルからなる場合は、`dll\liblz4.dll`とリンクすべきです。例:

```
    $(CC) $(CFLAGS) -Iinclude/ test-dll.c -o test-dll dll\liblz4.dll
```

コンパイルした実行可能ファイルには、`dll\liblz4.dll`にあるLZ4 DLLが必要です。

<span id="miscellaneous"></span>
#### その他

ディレクトリ内のその他のファイルは、ソースコードではありません。次のファイルです。

- `LICENSE`: BSDライセンスの本文を含みます。
- `Makefile`: lz4ライブラリ（静的・動的）をコンパイル・インストールする`make`スクリプト。
- `liblz4.pc.in`: `pkg-config`用です（`make install`で使います）。
- `README.md`: このファイルです。

[official interoperable frame format]: /docs/lz4/v1-10-0/ja/03-format/02-frame-format/
[LZ4 Frame format]: /docs/lz4/v1-10-0/ja/03-format/02-frame-format/
[LZ4 block format]: /docs/lz4/v1-10-0/ja/03-format/01-block-format/

<span id="license"></span>
#### ライセンス

**lib** ディレクトリ内のすべてのソース素材は、BSD 2-Clauseライセンスです。詳しくは[LICENSE](https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/lib/LICENSE)を参照してください。各ソースファイルの先頭にもライセンスを記載しています。
