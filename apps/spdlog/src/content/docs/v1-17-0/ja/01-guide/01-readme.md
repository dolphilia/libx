---
title: "spdlog README"
licenseSource: spdlog-readme
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>spdlog 1.17.0 READMEのガイド全文に基づく非公式の日本語訳です。<a href=\"https://github.com/gabime/spdlog/blob/79524ddd08a4ec981b7fea76afd08ee05f83755d/README.md\">原資料</a>。原資料のSHA-256：<code>d6ea8fd52d4e3194edf0b1cead3f55e9cd75130a192d52e9cd9aae87c1aa5254</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。<a href=\"/docs/spdlog/v1-17-0/ja/02-reference/01-license/\">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p></aside>"},{"kind":"editorial","html":"<aside data-editorial=\"source-note\"><p>以下のベンチマーク値とコード例は、固定した原資料の記述です。Libxによる測定値や実行済みの例ではありません。複数ロガー登録の原資料の例には、コードにsicの明示があります。</p></aside>"}]
---



<div data-spdlog-source-body="01-readme">

# spdlog

高速なC++ログライブラリ

## インストール
#### ヘッダーオンリー版
include[フォルダー](include/spdlog)をビルドツリーへコピーし、C++11コンパイラーを使ってください。

#### コンパイル版（推奨：コンパイル時間を大幅に短縮）
```console
$ git clone https://github.com/gabime/spdlog.git
$ cd spdlog && mkdir build && cd build
$ cmake .. && cmake --build .
```
使い方は、例の[CMakeLists.txt](example/CMakeLists.txt)を参照してください。

## プラットフォーム
* Linux、FreeBSD、OpenBSD、Solaris、AIX
* Windows（msvc 2013以降、cygwin）
* macOS（clang 3.5以降）
* Android

## パッケージマネージャー
* Debian：`sudo apt install libspdlog-dev`
* Homebrew：`brew install spdlog`
* MacPorts：`sudo port install spdlog`
* FreeBSD：`pkg install spdlog`
* Fedora：`dnf install spdlog`
* Gentoo：`emerge dev-libs/spdlog`
* Arch Linux：`pacman -S spdlog`
* openSUSE：`sudo zypper in spdlog-devel`
* ALT Linux：`apt-get install libspdlog-devel`
* vcpkg：`vcpkg install spdlog`
* conan：`conan install --requires=spdlog/[*]`
* conda：`conda install -c conda-forge spdlog`
* build2：`depends: spdlog ^1.8.2`

## 機能
* 非常に高速（下の[ベンチマーク](#ベンチマーク)を参照）。
* ヘッダーオンリーまたはコンパイル版。
* 優れた[fmt](https://github.com/fmtlib/fmt)ライブラリによる、豊富な書式化機能。
* 非同期モード（任意）。
* [カスタム書式](https://github.com/gabime/spdlog/wiki/Custom-formatting)。
* マルチスレッド・シングルスレッドのロガー。
* さまざまなログ出力先：
  * ローテーションするログファイル。
  * 日ごとのログファイル。
  * コンソールログ（色をサポート）。
  * syslog。
  * Windowsイベントログ。
  * Windowsデバッガー（`OutputDebugString(..)`）。
  * Qtウィジェットへのログ（[例](#qtへ見やすい色でログを出力する)）。
  * カスタムログ出力先で簡単に[拡張可能](https://github.com/gabime/spdlog/wiki/Sinks#implementing-your-own-sink)。
* ログのフィルタリング：実行時とコンパイル時の両方でログレベルを変更できます。
* argvや環境変数からログレベルを読み込めます。
* [バックトレース](#バックトレースのサポート)：debugメッセージをリングバッファーに保存し、後で必要に応じて表示できます。

## 使用例

コードは原資料のまま保持しています。各例の説明では、必要に応じて原コードのコメントも日本語に訳しています。

#### 基本的な使用方法
グローバルなログレベルをdebugへ設定し、ログパターンを変更する例です。コンパイル時のログレベルは現在のログレベルを変更せず、SPDLOG_ACTIVE_LEVELに応じてリリースコードから呼び出しを除去するだけです。
```c++
#include "spdlog/spdlog.h"

int main() 
{
    spdlog::info("Welcome to spdlog!");
    spdlog::error("Some error message with arg: {}", 1);
    
    spdlog::warn("Easy padding in numbers like {:08d}", 12);
    spdlog::critical("Support for int: {0:d};  hex: {0:x};  oct: {0:o}; bin: {0:b}", 42);
    spdlog::info("Support for floats {:03.2f}", 1.23456);
    spdlog::info("Positional args are {1} {0}..", "too", "supported");
    spdlog::info("{:<30}", "left aligned");
    
    spdlog::set_level(spdlog::level::debug); // Set *global* log level to debug
    spdlog::debug("This message should be displayed..");    
    
    // change log pattern
    spdlog::set_pattern("[%H:%M:%S %z] [%n] [%^---%L---%$] [thread %t] %v");
    
    // Compile time log levels
    // Note that this does not change the current log level, it will only
    // remove (depending on SPDLOG_ACTIVE_LEVEL) the call on the release code.
    SPDLOG_TRACE("Some trace message with param {}", 42);
    SPDLOG_DEBUG("Some debug message");
}

```
---
#### stdout/stderrロガーオブジェクトの作成
色付きのマルチスレッドロガーを作成します。`spdlog::get(logger_name)` でグローバルレジストリから取得できます。
```c++
#include "spdlog/spdlog.h"
#include "spdlog/sinks/stdout_color_sinks.h"
void stdout_example()
{
    // create a color multi-threaded logger
    auto console = spdlog::stdout_color_mt("console");    
    auto err_logger = spdlog::stderr_color_mt("stderr");    
    spdlog::get("console")->info("loggers can be retrieved from a global registry using the spdlog::get(logger_name)");
}
```

---
#### 基本的なファイルロガー
```c++
#include "spdlog/sinks/basic_file_sink.h"
void basic_logfile_example()
{
    try 
    {
        auto logger = spdlog::basic_logger_mt("basic_logger", "logs/basic-log.txt");
    }
    catch (const spdlog::spdlog_ex &ex)
    {
        std::cout << "Log init failed: " << ex.what() << std::endl;
    }
}
```
---
#### ファイルのローテーション
最大5MB、ローテーションするファイル最大3個のロガーを作成します。
```c++
#include "spdlog/sinks/rotating_file_sink.h"
void rotating_example()
{
    // Create a file rotating logger with 5 MB size max and 3 rotated files
    auto max_size = 1048576 * 5;
    auto max_files = 3;
    auto logger = spdlog::rotating_logger_mt("some_logger_name", "logs/rotating.txt", max_size, max_files);
}
```

---
#### 日ごとのファイル
毎日午前2:30に新しいファイルを作成するロガーです。
```c++

#include "spdlog/sinks/daily_file_sink.h"
void daily_example()
{
    // Create a daily logger - a new file is created every day at 2:30 am
    auto logger = spdlog::daily_logger_mt("daily_logger", "logs/daily.txt", 2, 30);
}

```

---
#### バックトレースのサポート
debugメッセージを即座に記録せず、リングバッファーに保存できます。エラー発生時など、必要なときだけdebugログを表示するのに役立ちます。`dump_backtrace()` を呼び出すと、保存したメッセージをログへ出力します。この例は直近32メッセージを保存・表示します。個別ロガーの同等の呼び出しも原コードに示しています。
```c++
// Debug messages can be stored in a ring buffer instead of being logged immediately.
// This is useful to display debug logs only when needed (e.g. when an error happens).
// When needed, call dump_backtrace() to dump them to your log.

spdlog::enable_backtrace(32); // Store the latest 32 messages in a buffer. 
// or my_logger->enable_backtrace(32)..
for(int i = 0; i < 100; i++)
{
  spdlog::debug("Backtrace message {}", i); // not logged yet..
}
// e.g. if some error happened:
spdlog::dump_backtrace(); // log them now! show the last 32 messages
// or my_logger->dump_backtrace(32)..
```

---
#### 定期フラッシュ
登録済みのすべてのロガーを3秒ごとにフラッシュします。警告：すべてのロガーがスレッドセーフ（"_mt"ロガー）な場合だけ使ってください。
```c++
// periodically flush all *registered* loggers every 3 seconds:
// warning: only use if all your loggers are thread-safe ("_mt" loggers)
spdlog::flush_every(std::chrono::seconds(3));

```

---
#### ストップウォッチ
spdlogのストップウォッチで経過時間を記録します。
```c++
// Stopwatch support for spdlog
#include "spdlog/stopwatch.h"
void stopwatch_example()
{
    spdlog::stopwatch sw;    
    spdlog::debug("Elapsed {}", sw);
    spdlog::debug("Elapsed {:.3}", sw);       
}

```

---
#### バイナリーデータを16進数で記録する
さまざまな `std::container<char>` 型と範囲を使えます。書式フラグは、`{:X}` が大文字表示、`{:s}` がバイト間の空白なし、`{:p}` が各行頭の位置表示なし、`{:n}` が改行による分割なし、`{:a}` が:n未指定時のASCII表示です。大文字・区切りなし・位置情報なしの組み合わせも原コードに示しています。
```c++
// many types of std::container<char> types can be used.
// ranges are supported too.
// format flags:
// {:X} - print in uppercase.
// {:s} - don't separate each byte with space.
// {:p} - don't print the position on each line start.
// {:n} - don't split the output into lines.
// {:a} - show ASCII if :n is not set.

#include "spdlog/fmt/bin_to_hex.h"

void binary_example()
{
    auto console = spdlog::get("console");
    std::array<char, 80> buf;
    console->info("Binary example: {}", spdlog::to_hex(buf));
    console->info("Another binary example:{:n}", spdlog::to_hex(std::begin(buf), std::begin(buf) + 10));
    // more examples:
    // logger->info("uppercase: {:X}", spdlog::to_hex(buf));
    // logger->info("uppercase, no delimiters: {:Xs}", spdlog::to_hex(buf));
    // logger->info("uppercase, no delimiters, no position info: {:Xsp}", spdlog::to_hex(buf));
}

```

---
#### 異なる書式とログレベルを持つ複数sinkのロガー
異なるログレベルと書式で2つの出力先を持つロガーです。コンソールは警告・エラーだけ、ファイルはすべてを記録する設定を示しています。
```c++

// create a logger with 2 targets, with different log levels and formats.
// The console will show only warnings or errors, while the file will log all. 
void multi_sink_example()
{
    auto console_sink = std::make_shared<spdlog::sinks::stdout_color_sink_mt>();
    console_sink->set_level(spdlog::level::warn);
    console_sink->set_pattern("[multi_sink_example] [%^%l%$] %v");

    auto file_sink = std::make_shared<spdlog::sinks::basic_file_sink_mt>("logs/multisink.txt", true);
    file_sink->set_level(spdlog::level::trace);

    spdlog::logger logger("multi_sink", {console_sink, file_sink});
    logger.set_level(spdlog::level::debug);
    logger.warn("this should appear in both console and file");
    logger.info("this message should not appear in the console, only in the file");
}
```

---
#### 複数ロガーの登録とグローバルレベルの変更
ロガーを作成し、登録済みのすべてのロガーにレベルを設定します。デフォルトロガーlogger2をtraceに設定し、その後すべての登録済みロガーをoffにする例です。原コードの `(sic!)` 表記と構文は保持しています。
```c++

// Creation of loggers. Set levels to all registered loggers. 
void set_level_example()
{
    auto logger1 = spdlog::basic_logger_mt("logger1", "logs/logger1.txt");
    auto logger2 = spdlog::basic_logger_mt("logger2", "logs/logger2.txt");

    spdlog::set_default_logger(logger2);
    spdlog::default_logger()->set_level(spdlog::level::trace); // set level for the default logger (logger2) to trace

    spdlog::trace("trace message to the logger2 (specified as default)");

    spdlog::set_level(spdlog::level::off) // (sic!) set level for *all* registered loggers to off (disable)
  
    logger1.warn("warn message will not appear because the level set to off");
    logger2.warn("warn message will not appear because the level set to off");
    spdlog::warn("warn message will not appear because the level set to off");
}
```

---
#### ログイベントのユーザー定義コールバック
ログを記録するたびに呼び出すラムダ関数のコールバックを持つロガーを作成します。例ではcallback sinkをerrに設定し、たとえば自分へのメール送信で通知する用途をコメントに挙げています。
```c++

// create a logger with a lambda function callback, the callback will be called
// each time something is logged to the logger
void callback_example()
{
    auto callback_sink = std::make_shared<spdlog::sinks::callback_sink_mt>([](const spdlog::details::log_msg &msg) {
         // for example you can be notified by sending an email to yourself
    });
    callback_sink->set_level(spdlog::level::err);

    auto console_sink = std::make_shared<spdlog::sinks::stdout_color_sink_mt>();
    spdlog::logger logger("custom_callback_logger", {console_sink, callback_sink});

    logger.info("some info log");
    logger.error("critical issue"); // will notify you
}
```

---
#### 非同期ログ
デフォルトのスレッドプール設定は、非同期ロガーの作成前に変更できます。8192項目のキューと処理用スレッド1個の設定、および別のファクトリ関数の使い方をコメントに示しています。
```c++
#include "spdlog/async.h"
#include "spdlog/sinks/basic_file_sink.h"
void async_example()
{
    // default thread pool settings can be modified *before* creating the async logger:
    // spdlog::init_thread_pool(8192, 1); // queue with 8k items and 1 backing thread.
    auto async_file = spdlog::basic_logger_mt<spdlog::async_factory>("async_file_logger", "logs/async_log.txt");
    // alternatively:
    // auto async_file = spdlog::create_async<spdlog::sinks::basic_file_sink_mt>("async_file_logger", "logs/async_log.txt");   
}

```

---
#### 複数sinkの非同期ロガー
```c++
#include "spdlog/async.h"
#include "spdlog/sinks/stdout_color_sinks.h"
#include "spdlog/sinks/rotating_file_sink.h"

void multi_sink_example2()
{
    spdlog::init_thread_pool(8192, 1);
    auto stdout_sink = std::make_shared<spdlog::sinks::stdout_color_sink_mt >();
    auto rotating_sink = std::make_shared<spdlog::sinks::rotating_file_sink_mt>("mylog.txt", 1024*1024*10, 3);
    std::vector<spdlog::sink_ptr> sinks {stdout_sink, rotating_sink};
    auto logger = std::make_shared<spdlog::async_logger>("loggername", sinks.begin(), sinks.end(), spdlog::thread_pool(), spdlog::async_overflow_policy::block);
    spdlog::register_logger(logger);
}
```

---
#### ユーザー定義型
```c++
template<>
struct fmt::formatter<my_type> : fmt::formatter<std::string>
{
    auto format(my_type my, format_context &ctx) const -> decltype(ctx.out())
    {
        return fmt::format_to(ctx.out(), "[my_type i={}]", my.i);
    }
};

void user_defined_example()
{
    spdlog::info("user defined type: {}", my_type(14));
}

```

---
#### ログパターンのユーザー定義フラグ
独自のフラグをログパターンに含められます。次の例は、`my_formatter_flag` インスタンスに結び付ける新しいフラグ `%*` を追加します。
```c++ 
// Log patterns can contain custom flags.
// the following example will add new flag '%*' - which will be bound to a <my_formatter_flag> instance.
#include "spdlog/pattern_formatter.h"
class my_formatter_flag : public spdlog::custom_flag_formatter
{
public:
    void format(const spdlog::details::log_msg &, const std::tm &, spdlog::memory_buf_t &dest) override
    {
        std::string some_txt = "custom-flag";
        dest.append(some_txt.data(), some_txt.data() + some_txt.size());
    }

    std::unique_ptr<custom_flag_formatter> clone() const override
    {
        return spdlog::details::make_unique<my_formatter_flag>();
    }
};

void custom_flags_example()
{    
    auto formatter = std::make_unique<spdlog::pattern_formatter>();
    formatter->add_flag<my_formatter_flag>('*').set_pattern("[%n] [%*] [%^%l%$] %v");
    spdlog::set_formatter(std::move(formatter));
}

```

---
#### カスタムエラーハンドラー
グローバルまたは個別ロガー（`logger->set_error_handler(..)`）に設定できます。
```c++
void err_handler_example()
{
    // can be set globally or per logger(logger->set_error_handler(..))
    spdlog::set_error_handler([](const std::string &msg) { spdlog::get("console")->error("*** LOGGER ERROR ***: {}", msg); });
    spdlog::get("console")->info("some invalid message to trigger an error {}{}{}{}", 3);
}

```

---
#### syslog
```c++
#include "spdlog/sinks/syslog_sink.h"
void syslog_example()
{
    std::string ident = "spdlog-example";
    auto syslog_logger = spdlog::syslog_logger_mt("syslog", ident, LOG_PID);
    syslog_logger->warn("This is warning that will end up in syslog.");
}
```
---
#### Androidの例
```c++
#include "spdlog/sinks/android_sink.h"
void android_example()
{
    std::string tag = "spdlog-android";
    auto android_logger = spdlog::android_logger_mt("android", tag);
    android_logger->critical("Use \"adb shell logcat\" to view this message.");
}
```

---
#### 環境変数またはargvからログレベルを読み込む
環境変数名の指定や、argvからの読み込みも原コードのコメントに示しています。
```c++
#include "spdlog/cfg/env.h"
int main (int argc, char *argv[])
{
    spdlog::cfg::load_env_levels();
    // or specify the env variable name:
    // MYAPP_LEVEL=info,mylogger=trace && ./example
    // spdlog::cfg::load_env_levels("MYAPP_LEVEL");
    // or from the command line:
    // ./example SPDLOG_LEVEL=info,mylogger=trace
    // #include "spdlog/cfg/argv.h" // for loading levels from argv
    // spdlog::cfg::load_argv_levels(argc, argv);
}
```
その後、次のように使えます。
```console
$ export SPDLOG_LEVEL=info,mylogger=trace
$ ./example
```

---
#### ログファイルの開閉イベントハンドラー
ログファイルを開く・閉じる前後に、spdlogからコールバックを受け取れます。片付け処理や、ログファイルの先頭・末尾に内容を追加するのに役立ちます。ファイルsinkへ `spdlog::file_event_handlers` を渡して開閉の通知を受けます。
```c++
// You can get callbacks from spdlog before/after a log file has been opened or closed. 
// This is useful for cleanup procedures or for adding something to the start/end of the log file.
void file_events_example()
{
    // pass the spdlog::file_event_handlers to file sinks for open/close log file notifications
    spdlog::file_event_handlers handlers;
    handlers.before_open = [](spdlog::filename_t filename) { spdlog::info("Before opening {}", filename); };
    handlers.after_open = [](spdlog::filename_t filename, std::FILE *fstream) { fputs("After opening\n", fstream); };
    handlers.before_close = [](spdlog::filename_t filename, std::FILE *fstream) { fputs("Before closing\n", fstream); };
    handlers.after_close = [](spdlog::filename_t filename) { spdlog::info("After closing {}", filename); };
    auto my_logger = spdlog::basic_logger_st("some_logger", "logs/events-sample.txt", true, handlers);        
}
```

---
#### デフォルトロガーの置き換え
```c++
void replace_default_logger_example()
{
    auto new_logger = spdlog::basic_logger_mt("new_default_logger", "logs/new-default-log.txt", true);
    spdlog::set_default_logger(new_logger);
    spdlog::info("new logger log message");
}
```

---
#### Qtへ見やすい色でログを出力する
テキストウィジェットを最大500行に保ち、必要なら古い行を削除する例です。
```c++
#include "spdlog/spdlog.h"
#include "spdlog/sinks/qt_sinks.h"
MainWindow::MainWindow(QWidget *parent) : QMainWindow(parent)
{
    setMinimumSize(640, 480);
    auto log_widget = new QTextEdit(this);
    setCentralWidget(log_widget);
    int max_lines = 500; // keep the text widget to max 500 lines. remove old lines if needed.
    auto logger = spdlog::qt_color_logger_mt("qt_logger", log_widget, max_lines);
    logger->info("Some info message");
}
```
---

#### Mapped Diagnostic Context
Mapped Diagnostic Context（MDC）は、文字列のキーと値の組をスレッドローカルストレージに保存するマップです。各スレッドは独自のMDCを持ち、ロガーは診断情報をログ出力へ付加するために使います。注意：スレッドローカルストレージに依存するため、非同期モードではサポートしていません。デフォルト書式を使わない場合、MDCのデータ表示には `%&` formatterを使います。
```c++
// Mapped Diagnostic Context (MDC) is a map that stores key-value pairs (string values) in thread local storage.
// Each thread maintains its own MDC, which loggers use to append diagnostic information to log outputs.
// Note: it is not supported in asynchronous mode due to its reliance on thread-local storage.
#include "spdlog/mdc.h"
void mdc_example()
{
    spdlog::mdc::put("key1", "value1");
    spdlog::mdc::put("key2", "value2");
    // if not using the default format, use the %& formatter to print mdc data
    // spdlog::set_pattern("[%H:%M:%S %z] [%^%L%$] [%&] %v");
}
```
---
## ベンチマーク

以下は、Ubuntu 64ビット、Intel i7-4770 CPU @ 3.40GHzで実施された[ベンチマーク](bench/bench.cpp)です。

#### 同期モード
```
[info] **************************************************************
[info] Single thread, 1,000,000 iterations
[info] **************************************************************
[info] basic_st         Elapsed: 0.17 secs        5,777,626/sec
[info] rotating_st      Elapsed: 0.18 secs        5,475,894/sec
[info] daily_st         Elapsed: 0.20 secs        5,062,659/sec
[info] empty_logger     Elapsed: 0.07 secs       14,127,300/sec
[info] **************************************************************
[info] C-string (400 bytes). Single thread, 1,000,000 iterations
[info] **************************************************************
[info] basic_st         Elapsed: 0.41 secs        2,412,483/sec
[info] rotating_st      Elapsed: 0.72 secs        1,389,196/sec
[info] daily_st         Elapsed: 0.42 secs        2,393,298/sec
[info] null_st          Elapsed: 0.04 secs       27,446,957/sec
[info] **************************************************************
[info] 10 threads, competing over the same logger object, 1,000,000 iterations
[info] **************************************************************
[info] basic_mt         Elapsed: 0.60 secs        1,659,613/sec
[info] rotating_mt      Elapsed: 0.62 secs        1,612,493/sec
[info] daily_mt         Elapsed: 0.61 secs        1,638,305/sec
[info] null_mt          Elapsed: 0.16 secs        6,272,758/sec
```
#### 非同期モード
```
[info] -------------------------------------------------
[info] Messages     : 1,000,000
[info] Threads      : 10
[info] Queue        : 8,192 slots
[info] Queue memory : 8,192 x 272 = 2,176 KB 
[info] -------------------------------------------------
[info] 
[info] *********************************
[info] Queue Overflow Policy: block
[info] *********************************
[info] Elapsed: 1.70784 secs     585,535/sec
[info] Elapsed: 1.69805 secs     588,910/sec
[info] Elapsed: 1.7026 secs      587,337/sec
[info] 
[info] *********************************
[info] Queue Overflow Policy: overrun
[info] *********************************
[info] Elapsed: 0.372816 secs    2,682,285/sec
[info] Elapsed: 0.379758 secs    2,633,255/sec
[info] Elapsed: 0.373532 secs    2,677,147/sec

```

## 文書

文書は[Wiki](https://github.com/gabime/spdlog/wiki)の頁にあります。

</div>
