<span id="command-line-interface-for-lz4-library"></span>
# LZ4ライブラリのコマンドラインインターフェース

<span id="build"></span>
### ビルド
`lz4`のコマンドラインインターフェース（CLI）は、追加のパラメーターを指定せず、`make`コマンドで生成します。

CLIは、[LZ4で圧縮したフレーム](/docs/lz4/v1-10-0/en/03-format/02-frame-format/)を生成・展開します。

ビルド処理をさらに制御できるよう、`Makefile`スクリプトは[標準の規約](https://www.gnu.org/prep/standards/html_node/Makefile-Conventions.html)すべてに対応します。標準のターゲット（`all`、`install`、`clean`など）や変数（`CC`、`CFLAGS`、`CPPFLAGS`など）も含みます。

Makefileは、用途に応じた複数のターゲットを提供します。
- `lz4`: gzipに似たコマンドライン構文を使う、既定のCLI。
- `lz4c`: 旧来のlz4コマンドに対応します（gzipとは互換性がありません）。
- `lz4c32`: `lz4c`と同じですが、32ビットの実行ファイルを生成します。
- `unlz4`、`lz4cat`: `lz4`へのシンボリックリンクで、既定では展開と、圧縮ファイルの`cat`を行います。
- `man`: Markdownソースの`lz4.1.md`からmanページを生成します。

<span id="makefile-build-variables"></span>
#### Makefileのビルド変数
- `HAVE_MULTITHREAD`: マルチスレッド対応でビルドします。通常は自動検出ですが、必要に応じて`0`または`1`へ強制できます。例えば、LinuxからWindows向けにクロスコンパイルする際に役立ちます。
- `HAVE_PTHREAD`: `<pthread>`対応の有無を決めます。自動検出ですが、必要に応じて`0`または`1`へ強制できます。`make`は、この結果を使い、マルチスレッド対応を自動的に有効にします。

<span id="c-preprocessor-build-variables"></span>
#### Cプリプロセッサーのビルド変数
これらは、コンパイル時にプリプロセッサーが読む変数です。開始時の既定値など、実行ファイルの動作に影響し、`programs/lz4conf.h`で公開しています。どのビルドシステムからでも操作できます。代入方法は環境によって異なります。
通常の`posix` + `gcc` + `make`環境では、`CPPFLAGS=-DVARIABLE=value`の代入で定義できます。
- `LZ4_CLEVEL_DEFAULT`: 指定がない場合の既定の圧縮レベル。既定値は`1`です。
- `LZ4IO_MULTITHREAD`: マルチスレッド対応を有効にします。既定では無効です。
- `LZ4_NBWORKERS_DEFAULT`: マルチスレッドモードで使うワーカースレッド数の既定値（`-T#`コマンドで上書きできます）。既定値は`0`で、ローカルCPUに基づく「自動決定」を意味します。
- `LZ4_NBWORKERS_MAX`: 実行時に要求できるワーカー数の絶対的な最大値。現在、既定値は200です。主に、百万スレッドなど、不合理で、おそらく誤った要求からシステムを保護するためです。
- `LZ4_BLOCKSIZEID_DEFAULT`: `lz4`のブロックサイズコードの既定値。有効な値は[4-7]で、64 KB、256 KB、1 MB、4 MBに対応します。執筆時点の既定値は7で、4 MBのブロックサイズです。

<span id="environment-variables"></span>
#### 環境変数
環境変数を通じて、`lz4`へ一部のパラメーターを渡せます。例えばスクリプト内から呼ぶなど、`lz4`の呼び出しは分かっていても、圧縮セッションに影響するパラメーターを`lz4`へ渡す手段がない場合に役立ちます。
環境変数は、実行ファイルの既定値より優先しますが、対応する実行時コマンドより優先順位は低くなります。グローバルな環境変数として設定すれば、実行ファイルの設定と異なる個人用の既定値を適用できます。

`LZ4_CLEVEL`は、コマンドラインで他の圧縮レベルを指定していない場合に、`lz4`が使う既定の圧縮レベルを指定できます。実行ファイルの既定値は、通常`1`です。

`LZ4_NBWORKERS`は、`lz4`が圧縮で使うスレッド数の既定値を指定できます。実行ファイルの既定値は、通常`0`で、ローカルCPUに基づく自動決定を意味します。この機能が関係するのは、`lz4`をマルチスレッド対応でコンパイルした場合だけです。ワーカー数の上限は`LZ4_NBWORKERS_MAX`です（既定では`200`）。

<span id="aggregation-of-parameters"></span>
### パラメーターの連結
`lz4` CLIは、短いコマンドの連結に対応します。例えば、`-d`、`-q`、`-f`は`-dqf`へまとめられます。
`--long-commands`では連結できず、**必ず**別々にしなければなりません。

<span id="benchmark-in-command-line-interface"></span>
### コマンドラインインターフェースのベンチマーク
`lz4` CLIは、メモリ内の圧縮ベンチマークモジュールを備え、`-b#`コマンドで開始します。`#`は圧縮レベルです。
ベンチマークは、渡したファイル名の一覧を対象に行います。I/Oの負荷をなくすため、ファイル全体をメモリへ読み込みます。
複数のファイルを渡すと、同じベンチマークセッションへまとめます（ただし、各ファイルの圧縮・展開は別々です）。`-S`コマンドを使うと、ファイルごとに一セッションへ分けます。
ファイルを渡していない場合は、代わりに内部のLorem Ipsum生成器を使います。

ベンチマークは、圧縮率、圧縮サイズ、圧縮速度、展開速度を測定します。`-b`から`-e`まで、昇順に複数の圧縮レベルを選べます。`-i`パラメーターは、各セッションに使う秒数を指定します。

<span id="usage-of-command-line-interface"></span>
### コマンドラインインターフェースの使い方
コマンドの完全な一覧は、`-h`または`-H`パラメーターで取得できます。
```
Usage :
      lz4 [arg] [input] [output]

input   : a filename
          with no FILE, or when FILE is - or stdin, read standard input
Arguments :
 -1     : Fast compression (default)
 -9     : High compression
 -d     : decompression (default for .lz4 extension)
 -z     : force compression
 -D FILE: use FILE as dictionary
 -f     : overwrite output without prompting
 -k     : preserve source files(s)  (default)
--rm    : remove source file(s) after successful de/compression
 -h/-H  : display help/long help and exit

Advanced arguments :
 -V     : display Version number and exit
 -v     : verbose mode
 -q     : suppress warnings; specify twice to suppress errors too
 -c     : force write to standard output, even if it is the console
 -t     : test compressed file integrity
 -m     : multiple input files (implies automatic output filenames)
 -r     : operate recursively on directories (sets also -m)
 -l     : compress using Legacy format (Linux kernel compression)
 -B#    : cut file into blocks of size # bytes [32+]
                     or predefined block size [4-7] (default: 7)
 -BD    : Block dependency (improve compression ratio)
 -BX    : enable block checksum (default:disabled)
--no-frame-crc : disable stream checksum (default:enabled)
--content-size : compressed frame includes original size (default:not present)
--[no-]sparse  : sparse mode (default:enabled on file, disabled on stdout)
--favor-decSpeed: compressed files decompress faster, but are less compressed
--fast[=#]: switch to ultra fast compression level (default: 1)

Benchmark arguments :
 -b#    : benchmark file(s), using # compression level (default : 1)
 -e#    : test all compression levels from -bX to # (default : 1)
 -i#    : minimum evaluation time in seconds (default : 3s)```
```

<span id="license"></span>
#### ライセンス

このディレクトリの全ファイルは、GPL-v2の条件でライセンスされています。
詳細は[COPYING](https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/programs/COPYING)を参照してください。
ライセンス本文は、各ソースファイルの先頭にも含まれています。
