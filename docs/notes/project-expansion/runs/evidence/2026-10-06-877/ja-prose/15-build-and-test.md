ビルドとテスト
==============

ライブラリをプロジェクトに組み込む方法には、ソースコード、パッケージマネージャー、CMakeがあります。

# ソースコード

ライブラリは、クロスプラットフォームのJSONライブラリを提供することを目指し、ANSI C（C89）標準を対象としています。厳密なC89コンパイラーでも、現代のCまたはC++コンパイラーでもコンパイルできます。`yyjson.h`と`yyjson.c`をプロジェクトにコピーするだけで、設定せずに使い始められます。

ライブラリは、[GitHub CI](https://github.com/ibireme/yyjson/actions)で、複数のコンパイラー（`gcc`、`clang`、`msvc`、`tcc`、`watcom`）とアーキテクチャー（`x86`、`arm`、`ppc`、`riscv`、`s390x`、`wasm`）を使ってテストされています。コンパイルの問題が起きた場合は、[不具合を報告](https://github.com/ibireme/yyjson/issues/new?template=bug_report.md)してください。

既定ではすべての機能が有効ですが、コンパイル時オプションで一部を無効にできます。たとえば、シリアライズが不要ならJSONライターを無効にしてバイナリーサイズを削減したり、コメント対応を無効にして解析性能を向上させたりできます。詳細は「コンパイル時オプション」を参照してください。

# パッケージマネージャー

`vcpkg`、`conan`、`xmake`など、広く使われているパッケージマネージャーでyyjsonをダウンロードしてインストールできます。これらのパッケージマネージャーのyyjsonパッケージは、コミュニティーの貢献者が最新に保っています。バージョンが古い場合は、それぞれのリポジトリにIssueまたはプルリクエストを作成してください。

## vcpkgを使う

[vcpkg](https://github.com/Microsoft/vcpkg/)依存関係マネージャーでyyjsonをビルドしてインストールできます。

@@CODE_0@@

バージョンが古い場合は、vcpkgのリポジトリで[Issueまたはプルリクエストを作成](https://github.com/Microsoft/vcpkg)してください。

# CMake

## CMakeでライブラリをビルドする

リポジトリをクローンし、ビルドディレクトリを作成します。
@@CODE_1@@

静的ライブラリをビルドします。
@@CODE_2@@

共有ライブラリをビルドします。
@@CODE_3@@

対応するCMakeオプション（既定はOFF）：

- `-DYYJSON_BUILD_TESTS=ON`：すべてのテストをビルドします。
- `-DYYJSON_BUILD_FUZZER=ON`：LibFuzzerでファザーをビルドします。
- `-DYYJSON_BUILD_MISC=ON`：miscをビルドします。
- `-DYYJSON_BUILD_DOC=ON`：doxygenで文書をビルドします。
- `-DYYJSON_ENABLE_COVERAGE=ON`：テストのコードカバレッジを有効にします。
- `-DYYJSON_ENABLE_VALGRIND=ON`：テストのvalgrindメモリチェッカーを有効にします。
- `-DYYJSON_ENABLE_FASTMATH=ON`：テストのfast-mathを有効にします。
- `-DYYJSON_FORCE_32_BIT=ON`：テストで32ビットを強制します（gcc/clang/icc）。
- `-DYYJSON_SANITIZER=<name>`：テストのサニタイザー（`address`、`undefined`、`memory`）を有効にします。

- `-DYYJSON_DISABLE_READER=ON`：不要ならJSONリーダーを無効にします。
- `-DYYJSON_DISABLE_WRITER=ON`：不要ならJSONライターを無効にします。
- `-DYYJSON_DISABLE_INCR_READER=ON`：不要なら増分リーダーを無効にします。
- `-DYYJSON_DISABLE_FILE=ON`：ファイル/fpの読み込み・書き出しAPIを無効にします。
- `-DYYJSON_DISABLE_UTILS=ON`：JSON Pointer、JSON Patch、JSON Merge Patchを無効にします。
- `-DYYJSON_DISABLE_FAST_FP_CONV=ON`：組み込みの高速浮動小数点数変換を無効にします。
- `-DYYJSON_DISABLE_NON_STANDARD=ON`：コンパイル時に非標準JSONへの対応を無効にします。
- `-DYYJSON_DISABLE_UTF8_VALIDATION=ON`：コンパイル時にUTF-8の検証を無効にします。
- `-DYYJSON_DISABLE_UNALIGNED_MEMORY_ACCESS=ON`：コンパイル時に非アラインメモリアクセスへの対応を無効にします。
- `-DYYJSON_FREESTANDING=ON`：libcなしでビルドします（下の`YYJSON_FREESTANDING`を参照）。
- `-DYYJSON_READER_DEPTH_LIMIT=<n>`：JSONリーダーの最大ネスト深さを設定します（下の`YYJSON_READER_DEPTH_LIMIT`を参照）。
- `-DYYJSON_WRITER_DEPTH_LIMIT=<n>`：JSONライターの最大ネスト深さを設定します（下の`YYJSON_WRITER_DEPTH_LIMIT`を参照）。

## CMakeの依存関係として使う

yyjsonをダウンロードしてプロジェクトのディレクトリに展開し、`CMakeLists.txt`ファイルでリンクできます。
@@CODE_4@@

CMakeのバージョンが3.11より新しい場合は、次のコードでCMakeに自動的にダウンロードさせることができます。
@@CODE_5@@

## CMakeでプロジェクトを生成する

別のコンパイラーやIDEでyyjsonをビルドまたはデバッグしたい場合は、次のコマンドを試してください。
@@CODE_6@@

## CMakeで文書を生成する

プロジェクトは、文書の生成に[doxygen](https://www.doxygen.nl/)を使います。
続ける前に、システムに`doxygen`がインストールされていることを確認してください。
`doc/Doxyfile.in`で指定されたバージョンを使うのが最適です。

文書をビルドするには、次を実行します。
@@CODE_7@@

生成されたHTMLファイルは、`build/doxygen/html`に置かれます。

事前に生成されたオンライン文書も閲覧できます。
https://ibireme.github.io/yyjson/doc/doxygen/html/

## CMakeとCTestでテストする

すべてのテストをビルドして実行します。
@@CODE_8@@

[valgrind](https://valgrind.org/)メモリチェッカーを使ってテストをビルド・実行します。続ける前に、`valgrind`がインストールされていることを確認してください。
@@CODE_9@@

`-DYYJSON_SANITIZER=<name>`でサニタイザー（`address`、`undefined`、`memory`）を使ってテストをビルド・実行します。
`memory`の場合は、Linux x86_64の`Clang`を使います。
@@CODE_10@@

`gcc`でコードカバレッジをビルドして実行します。
@@CODE_11@@

`clang`でコードカバレッジをビルドして実行します。
@@CODE_12@@

[LibFuzzer](https://llvm.org/docs/LibFuzzer.html)でファズテストをビルドして実行します。コンパイラーは`LLVM Clang`である必要があり、`Apple Clang`と`gcc`は対応していません。
@@CODE_13@@

# コンパイル時オプション

ライブラリには、コンパイル時に1を定義すると特定の機能を無効にするオプションがあります。
たとえば、JSONライターを無効にするには、次のようにします。
@@CODE_14@@

## YYJSON_DISABLE_READER

1と定義すると、コンパイル時にJSONリーダーを無効にします。<br/>
名前に`read`を含む関数を無効にします。<br/>
バイナリーサイズを約60%削減します。<br/>
JSONの解析が不要な場合に推奨します。<br/>

## YYJSON_DISABLE_WRITER

1と定義すると、コンパイル時にJSONライターを無効にします。<br/>
名前に`write`を含む関数を無効にします。<br/>
バイナリーサイズを約30%削減します。<br/>
JSONのシリアライズが不要な場合に推奨します。<br/>

## YYJSON_DISABLE_INCR_READER

1と定義すると、コンパイル時にJSON増分リーダーを無効にします。<br/>
名前に`incr`を含む関数を無効にします。<br/>
JSONの増分読み込みが不要な場合に推奨します。<br/>

## YYJSON_DISABLE_FILE

1と定義すると、コンパイル時にファイルと`FILE`ポインターのAPIを無効にします。<br/>
これを設定すると、`yyjson.h`は`stdio.h`をインクルードしません。<br/>

## YYJSON_DISABLE_UTILS

1と定義すると、JSON Pointer、JSON Patch、JSON Merge Patchへの対応を無効にします。<br/>
名前に`ptr`または`patch`を含む関数を無効にします。<br/>
これらの関数が不要な場合に推奨します。<br/>

## YYJSON_DISABLE_FAST_FP_CONV

1と定義すると、yyjsonの高速な浮動小数点数変換を無効にします。<br/>
代わりにlibcの`strtod/snprintf`を使います。<br/>
バイナリーサイズを約30%削減しますが、浮動小数点数の読み込み・書き出し速度は大幅に低下します。<br/>
浮動小数点数が少ないJSONを処理する場合に推奨します。<br/>

## YYJSON_DISABLE_NON_STANDARD

1と定義すると、コンパイル時に非標準JSONの機能への対応を無効にします。

- YYJSON_READ_ALLOW_INF_AND_NAN
- YYJSON_READ_ALLOW_COMMENTS
- YYJSON_READ_ALLOW_TRAILING_COMMAS
- YYJSON_READ_ALLOW_INVALID_UNICODE
- YYJSON_READ_ALLOW_BOM
- YYJSON_READ_ALLOW_EXT_NUMBER
- YYJSON_READ_ALLOW_EXT_ESCAPE
- YYJSON_READ_ALLOW_EXT_WHITESPACE
- YYJSON_READ_ALLOW_SINGLE_QUOTED_STR
- YYJSON_READ_ALLOW_UNQUOTED_KEY
- YYJSON_READ_JSON5
- YYJSON_WRITE_ALLOW_INF_AND_NAN
- YYJSON_WRITE_ALLOW_INVALID_UNICODE

バイナリーサイズを約10%削減し、性能が少し向上します。<br/>
非標準JSONを扱わない場合に推奨します。

## YYJSON_DISABLE_UTF8_VALIDATION

1と定義すると、コンパイル時にUTF-8の検証を無効にします。

すべての入力文字列が有効なUTF-8であることが保証される場合に使います。たとえば、言語のString型がすでに検証されている場合です。

UTF-8の検証を無効にすると、非ASCII文字列の性能が約3%から7%向上します。

注意：このフラグを有効にして、不正なUTF-8文字列を渡すと、次のエラーが起きる場合があります。

- JSON文字列を解析する際に、エスケープされた文字が無視される場合があります。
- JSON文字列を解析する際に、終端の引用符が無視され、文字列が次の値と結合される場合があります。
- `yyjson_mut_val`でシリアライズする際に、文字列の末尾を超えてアクセスし、セグメンテーションフォールトが起きる場合があります。

## YYJSON_FREESTANDING

1と定義すると、libc（`stdlib.h`、`string.h`、`math.h`、`stdio.h`）なしでyyjsonをビルドします。

`string.h`が利用できない場合、yyjsonは`memcpy`、`memmove`、`memset`、`memcmp`、`strlen`の代替として、組み込みのインライン実装を用意します。現代のGCCやClangで`-O2`/`-O3`を使う場合、通常はこれらがインライン化され、スループットへの影響は小さくなります。代わりに、`YYJSON_FREESTANDING_HEADER`に独自実装を提供するヘッダーを定義することもできます。

`malloc`と`free`は利用できません。対応する各APIに`yyjson_alc`アロケーターを渡すか、たとえば`-DYYJSON_CUSTOM_ALC=my_alc`のように、コンパイル時にグローバルな既定値を定義してください。

ファイルと`FILE`ポインターのAPIも無効になります。これは`YYJSON_DISABLE_FILE`と同じ効果です。このマクロは、`YYJSON_DISABLE_FAST_FP_CONV`と併用できません。

libcのsysrootがないWebAssemblyなど、フリースタンディングのターゲットを想定しています。

## YYJSON_READER_DEPTH_LIMIT

正の整数として定義すると、JSON配列とオブジェクトに許可する最大ネスト深さを設定します。

解析時に、この値を超える深さのコンテナーに達すると、解析を停止し、エラーコード`YYJSON_READ_ERROR_DEPTH`を返します。

既定値は`0`で、深さの制限がないことを意味します。パーサーはスタックの再帰を使わないため、ネスト深さは利用可能なメモリによってだけ制限されます。

## YYJSON_WRITER_DEPTH_LIMIT

正の整数として定義すると、書き出すJSON配列とオブジェクトに許可する最大ネスト深さを設定します。

ドキュメントがこの深さを超えると、書き出しを停止し、`YYJSON_WRITE_ERROR_DEPTH`を返します。

既定値は`0`で、深さの制限がないことを意味します。ライターはスタックの再帰を使わないため、ネスト深さは利用可能なメモリによってだけ制限されます。

## YYJSON_EXPORTS

1と定義すると、Windows DLLとしてライブラリをビルドするときにシンボルをエクスポートします。

## YYJSON_IMPORTS

1と定義すると、Windows DLLとしてライブラリを使うときにシンボルをインポートします。
