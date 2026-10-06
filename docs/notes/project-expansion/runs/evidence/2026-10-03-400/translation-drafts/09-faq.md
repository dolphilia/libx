---
title: "よくある質問"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href="https://github.com/gabime/spdlog/wiki/FAQ">原資料</a>。原資料のSHA-256：<code>01d50982fbc9dd49f285ec67a2147bc5155979979c69f8da96093b7f74e7fc87</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href="/docs/spdlog/v1-17-0/ja/02-reference/01-license/">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>

<div data-spdlog-source-body="09-faq">

## ログファイルが空のままになる

性能上の理由により、ログエントリーはファイルへ即座にフラッシュされず、libcで定義されるBUFSIZバイトが記録された後にフラッシュされます。

次のいずれかの方法で、強制的にフラッシュできます。
```c++
my_logger->flush();                            // flush now
my_logger->flush_on(spdlog::level::info);      // auto flush when "info" or higher message is logged
spdlog::flush_on(spdlog::level::info);         // auto flush when "info" or higher message is logged on all loggers
spdlog::flush_every(std::chrono::seconds(5));  // flush periodically every 5 seconds (caution: must be _mt logger)
```
詳細は[フラッシュ方針](https://github.com/gabime/spdlog/wiki/7.-Flush-policy)を参照してください。

## コンパイル時にすべてのdebug文を削除するには？
spdlog.hをインクルードする前に、`SPDLOG_ACTIVE_LEVEL` を必要なログレベルに定義し、SPDLOG_マクロを使います。
```c++
#define SPDLOG_ACTIVE_LEVEL SPDLOG_LEVEL_INFO // All DEBUG/TRACE statements will be removed by the pre-processor
#include "spdlog/spdlog.h"
...
SPDLOG_DEBUG("debug message to default logger"); // removed at compile time
SPDLOG_LOGGER_TRACE(my_logger, "trace message"); // removed at compile time
SPDLOG_INFO("info message to default logger");   // included
```

これはコンパイル時にdebug文を削除する設定ですが、ログを表示するには、実行時にも必要なログレベルを設定する必要があります。

## 同梱版ではなく外部のfmtライブラリを使うには？

外部のfmtライブラリを使うには、`SPDLOG_FMT_EXTERNAL` マクロを定義する必要があります。

CMakeでspdlogをビルドする場合は、CMake変数 `SPDLOG_FMT_EXTERNAL` または `SPDLOG_FMT_EXTERNAL_HO`（ヘッダーオンリーのfmt）を定義する必要があります。CMakeで追加されたspdlogでは、`SPDLOG_FMT_EXTERNAL` マクロが自動的に定義されます。

## 引数がないと書式文字列のコンパイル時検査が働かない

書式文字列だけを渡した場合、コンパイル時検査は働きません。この場合は性能のためにformatterを使わない設計になっているためです（[#3056](https://github.com/gabime/spdlog/issues/3056)）。
```c++
spdlog::info("{}{}", 1, 2); // OK
spdlog::info("{}{}{}", 1, 2); // Compile error.

spdlog::info("{}"); // OK.
```

## Windowsでアプリケーション終了時に非同期ログが停止する

mainの最後で `spdlog::shutdown();` を呼び出してください。

## WindowsのDLL内で非同期ログが停止する

**DllMain** 内で非同期ロガーやスレッドプールを作成しないでください。たとえば、DLL内のstaticロガー変数を使って作成することも避けてください。

## 共有ライブラリでspdlogを使うには？

詳細は[DLLでspdlogを使う方法](https://github.com/gabime/spdlog/wiki/How-to-use-spdlog-in-DLLs)を参照してください。

## 共有ライブラリ内で使うとメモリーリークが検出される

非同期ロガーと `spdlog::flush_every()` は、ワーカースレッドを作成します。

共有ライブラリでこれらを使う場合、共有ライブラリがメモリーからアンロードされる前に `spdlog::shutdown();` を呼び出す必要があります。そうしないと、スレッドに関連するオブジェクトが解放されない場合があります。

## カスタム書式を使うと色が表示されない

色を付けたい部分を `%^ ` と `%$` で囲む必要があります。

例：`spdlog::set_pattern(“%^[%l]%$ %v”);`

## カスタム書式を使うとソース情報が表示されない

`%@`、`%s`、`%g`、`%#`、`%!` などのカスタム書式パターンは、ソース情報を表示します。

これらを動作させるには、コンパイル時のログレベルマクロを使う必要があります。

例：
```cpp

#define SPDLOG_ACTIVE_LEVEL SPDLOG_LEVEL_INFO 
#include "spdlog/spdlog.h"
#include "spdlog/sinks/stdout_sinks.h"

void source_info_example()
{
    auto console = spdlog::stdout_logger_mt("console");
    spdlog::set_default_logger(console);
    spdlog::set_pattern("[source %s] [function %!] [line %#] %v");

    SPDLOG_LOGGER_INFO(console, "log with source info"); // Console: "[source example.cpp] [function source_info_example] [line 10] log with source info"
    SPDLOG_INFO("global log with source info"); // Console: "[source example.cpp] [function source_info_example] [line 11] global logger with source info"

    console->info("source info is not printed"); // Console: "[source ] [function ] [line ] source info is not printed"
}
```

## WinAPIのmin/maxマクロ定義

Windowsでspdlogのヘッダーオンリー版を同梱のfmtライブラリと併用すると、fmtライブラリ経由で `Windows.h` がインクルードされます。WinAPIの `min`/`max` マクロ定義によるエラーを防ぐには、次のいずれかの方法を使えます。

- `min()` や `max()` の呼び出しを括弧で囲む：`(std::max)(n1, n2)`。
- spdlog.hをインクルードする前に、`NOMINMAX` マクロを定義する。
- 外部のfmtライブラリを使う（spdlogのビルド時に `-DSPDLOG_FMT_EXTERNAL=ON`）。

詳細は[#1553](https://github.com/gabime/spdlog/issues/1553)または[fmt#1508](https://github.com/fmtlib/fmt/issues/1508)を参照してください。

## デフォルトロガーをstderrへ切り替える

新しい `stderr` ロガーを渡して `set_default_logger()` を呼び出せます。ログ書式を変えたくない場合、名前には空文字列を指定するべきですが、既にその名前を使っている初期デフォルトロガーと衝突します。解決するには、まずデフォルトロガーを、別の任意の名前を持つロガーに置き換えます…
```c++
#include "spdlog/sinks/stdout_color_sinks.h"
#include "spdlog/spdlog.h"
int main()
{
    // Replace the default logger with a (color, single-threaded) stderr logger
    // (but first replace it with an arbitrarily-named logger to prevent a name clash)
    spdlog::set_default_logger( spdlog::stderr_color_st( "some_arbitrary_name" ) );
    spdlog::set_default_logger( spdlog::stderr_color_st( "" ) );
    spdlog::info("This message will go to stderr");
}
```

## ログレベルフィルターを無視してログメッセージを強制的に出力するには？

`spdlog::level::off` を使うと、ログメッセージを強制的に出力できます（[議論](/gabime/spdlog/discussions/2640)）。
```cpp
logger.set_level(spdlog::level::error);

logger.warn("This message is not output.");

logger.log(spdlog::level::off, "This message is output.");
```

この方法では、ログレベルに基づくフラッシュ（`logger.flush_on(spdlog::level)`）は起動しない点に注意してください。

## GCC標準ライブラリの互換性問題

GCCコンパイラーで次のような簡単なコードをビルドして `std::bad_alloc` が発生した場合、互換性のない標準ライブラリを使っている可能性があります。
```cpp
#include "spdlog/spdlog.h"

int main(int argc, char *argv[])
{
    spdlog::info("Test message.");

    return 0;
}
```

`std::bad_alloc` は、多くの場合、ダングリングポインターやヌル終端されていない文字列を渡したときに発生します。しかしGCCでは、spdlogとアプリケーションで異なる標準ライブラリ（例：`libstdc++` と `libstdc++11`）を使っている場合にも、このエラーが報告されることがあります。パッケージマネージャーを使う場合に、この問題の報告がより多く見られます。パッケージマネージャーを使っている場合は、ABI設定を確認してください。

詳細は[#2286](https://github.com/gabime/spdlog/issues/2286)または[#2290](https://github.com/gabime/spdlog/issues/2290)を参照してください。

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
