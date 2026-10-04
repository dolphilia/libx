---
title: "クイックスタート"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href=\"https://github.com/gabime/spdlog/wiki/QuickStart\">原資料</a>。原資料のSHA-256：<code>c431355d7af40d984c3b9906ddbf7558cb4855662c3eaed3274c2c1fdd27d051</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href=\"/docs/spdlog/v1-17-0/ja/02-reference/01-license/\">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>"},{"kind":"editorial","html":"<aside data-editorial=\"source-note\"><p>末尾のユーザー定義オブジェクトの例には、名前空間スコープのfriend宣言とprivateなcodeメンバーへのアクセスがあります。原資料どおりに保持しており、この例がコンパイルできるとは主張していません。</p></aside>"}]
---



<div data-spdlog-source-body="20-quickstart">

```c++
#include "spdlog/spdlog.h"
int main()
{
    //Use the default logger (stdout, multi-threaded, colored)
    spdlog::info("Hello, {}!", "World");
}
```

spdlogは、同梱の[fmt](https://github.com/fmtlib/fmt)ライブラリを使い、Pythonに似た書式化APIを提供します（[リファレンス](https://fmt.dev/latest/syntax.html)を参照）。
```c++
logger->info("Hello {} {} !!", "param1", 123.4);
```
spdlogは「必要なものをインクルードする」という方針です。コードでは、実際に必要な機能をインクルードしてください。

たとえば、ローテーションするロガーだけが必要なら、"**spdlog/sinks/rotating_file_sink.h**"をインクルードします。

また、非同期ログの機能を使うには、"**spdlog/async.h**"をインクルードします。

#### 基本的な例
```c++
#include <iostream>
#include "spdlog/spdlog.h"
#include "spdlog/sinks/basic_file_sink.h" // support for basic file logging
#include "spdlog/sinks/rotating_file_sink.h" // support for rotating file logging

int main(int, char* [])
{
    try 
    {
        // Create basic file logger (not rotated)
        auto my_logger = spdlog::basic_logger_mt("basic_logger", "logs/basic.txt");
        
        // create a file rotating logger with 5mb size max and 3 rotated files
        auto file_logger = spdlog::rotating_logger_mt("file_logger", "myfilename", 1024 * 1024 * 5, 3);
    }
    catch (const spdlog::spdlog_ex& ex)
    {
        std::cout << "Log initialization failed: " << ex.what() << std::endl;
    }
}
```

#### ファクトリメソッドによる非同期ロガーの作成
```c++
#include <iostream>
#include "spdlog/spdlog.h"
#include "spdlog/async.h" //support for async logging.
#include "spdlog/sinks/basic_file_sink.h"

int main(int, char* [])
{
    try
    {        
        auto async_file = spdlog::basic_logger_mt<spdlog::async_factory>("async_file_logger", "logs/async_log.txt");
        for (int i = 1; i < 101; ++i)
        {
            async_file->info("Async message #{}", i);
        }
        // Under VisualStudio, this must be called before main finishes to workaround a known VS issue
        spdlog::drop_all(); 
    }
    catch (const spdlog::spdlog_ex& ex)
    {
        std::cout << "Log initialization failed: " << ex.what() << std::endl;
    }
}
```

#### 非同期ロガーの作成とスレッドプール設定の変更
```c++
#include <iostream>
#include "spdlog/spdlog.h"
#include "spdlog/async.h" //support for async logging
#include "spdlog/sinks/basic_file_sink.h"
#include "spdlog/sinks/daily_file_sink.h"
int main(int, char* [])
{
    try
    {                                        
        auto daily_sink = std::make_shared<spdlog::sinks::daily_file_sink_mt>("logfile", 23, 59);
        // default thread pool settings can be modified *before* creating the async logger:
        spdlog::init_thread_pool(10000, 1); // queue with 10K items and 1 backing thread.
        auto async_file = spdlog::basic_logger_mt<spdlog::async_factory>("async_file_logger", "logs/async_log.txt");       
        spdlog::drop_all(); 
    }
    catch (const spdlog::spdlog_ex& ex)
    {
        std::cout << "Log initialization failed: " << ex.what() << std::endl;
    }
}
```

#### 同じファイル（sink）を共有する複数ロガーの作成（カテゴリー）
```c++
#include <iostream>
#include "spdlog/spdlog.h"
#include "spdlog/sinks/daily_file_sink.h"
int main(int, char* [])
{
    try
    {
        auto daily_sink = std::make_shared<spdlog::sinks::daily_file_sink_mt>("logfile", 23, 59);
        // create synchronous  loggers
        auto net_logger = std::make_shared<spdlog::logger>("net", daily_sink);
        auto hw_logger  = std::make_shared<spdlog::logger>("hw",  daily_sink);
        auto db_logger  = std::make_shared<spdlog::logger>("db",  daily_sink);      

        net_logger->set_level(spdlog::level::critical); // independent levels
        hw_logger->set_level(spdlog::level::debug);
         
        // globally register the loggers so they can be accessed using spdlog::get(logger_name)
        spdlog::register_logger(net_logger);
    }
    catch (const spdlog::spdlog_ex& ex)
    {
        std::cout << "Log initialization failed: " << ex.what() << std::endl;
    }
}
```

#### sinkごとに独自の書式とログレベルを持つ、複数sinkのロガーを作成する
```c++
//
// Logger with console and file output.
// the console will show only warnings or worse, while the file will log all messages.
// 
#include <iostream>
#include "spdlog/spdlog.h"
#include "spdlog/sinks/stdout_color_sinks.h" // or "../stdout_sinks.h" if no colors needed
#include "spdlog/sinks/basic_file_sink.h"
int main(int, char* [])
{
    try
    {
        auto console_sink = std::make_shared<spdlog::sinks::stdout_color_sink_mt>();
        console_sink->set_level(spdlog::level::warn);
        console_sink->set_pattern("[multi_sink_example] [%^%l%$] %v");

        auto file_sink = std::make_shared<spdlog::sinks::basic_file_sink_mt>("logs/multisink.txt", true);
        file_sink->set_level(spdlog::level::trace);

        spdlog::sinks_init_list sink_list = { file_sink, console_sink };

        spdlog::logger logger("multi_sink", sink_list.begin(), sink_list.end());
        logger.set_level(spdlog::level::debug);
        logger.warn("this should appear in both console and file");
        logger.info("this message should not appear in the console, only in the file");

        // or you can even set multi_sink logger as default logger
        spdlog::set_default_logger(std::make_shared<spdlog::logger>("multi_sink", spdlog::sinks_init_list({console_sink, file_sink})));

    }
    catch (const spdlog::spdlog_ex& ex)
    {
        std::cout << "Log initialization failed: " << ex.what() << std::endl;
    }
}
```

#### ログマクロ
"spdlog.h"をインクルードする*前*に、SPDLOG_ACTIVE_LEVELを必要なログレベルに定義できます。

これにより、コンパイル時にログ文を有効・無効にします。
```c++
#define SPDLOG_ACTIVE_LEVEL SPDLOG_LEVEL_DEBUG

spdlog::set_level(spdlog::level::debug); // or spdlog::set_level(spdlog::level::trace); 

SPDLOG_LOGGER_TRACE(file_logger , "Some trace message that will not be evaluated.{} ,{}", 1, 3.23);
SPDLOG_LOGGER_DEBUG(file_logger , "Some Debug message that will be evaluated.. {} ,{}", 1, 3.23);
SPDLOG_DEBUG("Some debug message to default logger that will be evaluated");
```

debugやtraceのメッセージを表示するには、`spdlog::set_level` も必要な点に注意してください。

#### ユーザー定義オブジェクトのログ記録
```c++
#include "spdlog/spdlog.h"
#include "spdlog/fmt/ostr.h" // must be included
#include "spdlog/sinks/stdout_sinks.h"

class some_class {};
std::ostream& operator<<(std::ostream& os, const some_class& c)
{ 
    return os << "some_class"; 
}

// fmt v10 and above requires `fmt::formatter<T>` extends `fmt::ostream_formatter`.
// See: https://github.com/fmtlib/fmt/issues/3318
template <> struct fmt::formatter<some_class> : fmt::ostream_formatter {};

void custom_class_example()
{
    some_class c;
    auto console = spdlog::stdout_logger_mt("console");
    console->info("custom class with operator<<: {}..", c);
}
```
または、高度な書式化が必要な場合、同梱の `fmt` ライブラリを使います。
```c++
#include <iterator>

#include "spdlog/spdlog.h"
#include "spdlog/fmt/ostr.h" // must be included
#include "spdlog/sinks/stdout_sinks.h"

class some_class {
    int code;
};

template<typename OStream>
friend OStream &operator<<(OStream &os, const some_class& to_log)
{
    fmt::format_to(std::ostream_iterator<char>(os), "{:04X}", to_log.code);
    return os;
}

void custom_class_example()
{
    some_class c; c.code = 17;
    auto console = spdlog::stdout_logger_mt("console");
    console->info("custom class with operator<< using fmt: {}..", c);
}
```

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
