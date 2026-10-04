---
title: "DLLでspdlogを使う方法"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href=\"https://github.com/gabime/spdlog/wiki/How-to-use-spdlog-in-DLLs\">原資料</a>。原資料のSHA-256：<code>43913283a0225b0b2c2e7092cd5eb56b64cde472cfe68c36adb48b00f7080640</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href=\"/docs/spdlog/v1-17-0/ja/02-reference/01-license/\">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>"}]
---



<div data-spdlog-source-body="12-how-to-use-spdlog-in-dlls">

### 問題

spdlogはヘッダーオンリーなので、共有ライブラリをビルドし、メインプログラムでも使った場合、両者の間でレジストリは共有されません。これは、`spdlog::set_level(spdlog::level::level_enum::info)` のような関数を呼び出しても、DLL内のロガーは変更されないという意味です。

### 回避方法

両方のレジストリにロガーを登録する方法があります。

```c++
/*
 * Disclaimer:
 *   This was not compiled but extracted from documentation and some code.
 */

// mylibrary.h
// In library, we skip the symbol exporting part

#include <memory>
#include <vector>
#include <spdlog/spdlog.h>
#include <spdlog/logger.h>
#include <spdlog/sinks/stdout_color_sinks.h>

namespace library
{
static const std::string logger_name = "example";

std::shared_ptr<spdlog::logger> setup_logger(std::vector<spdlog::sink_ptr> sinks)
{
    auto logger = spdlog::get(logger_name);
    if(not logger)
    {
        if(sinks.size() > 0)
        {
            logger = std::make_shared<spdlog::logger>(logger_name,
                                                      std::begin(sinks),
                                                      std::end(sinks));
            spdlog::register_logger(logger);
        }
        else
        {
            logger = spdlog::stdout_color_mt(logger_name);
        }
    }

    return logger;
}

void test(std::string message)
{
    auto logger = spdlog::get(logger_name);
    if(logger)
    {
        logger->debug("{}::{}", __FUNCTION__, message);
    }
}

}
```

```c++
// In the main program

#include <mylibrary.h>
#include <spdlog/logger.h>
#include <spdlog/sinks/daily_file_sink.h>
#include <spdlog/sinks/stdout_sinks.h>

int main()
{
    // We assume that we load the library here
    ...

    // Let's use the library
    std::vector<spdlog::sink_ptr> sinks;
    sinks.push_back(std::make_shared<spdlog::sinks::stdout_sink_st>());
    sinks.push_back(std::make_shared<spdlog::sinks::daily_file_sink_st>("logfile", 23, 59));

    auto logger = library::setup_logger(sinks);

    spdlog::set_level(spdlog::level::level_enum::debug); // No effect for the library.
    library::test("Hello World!"); // No logging

    spdlog::register_logger(logger);

    // Now this will also affect the library logger
    spdlog::set_level(spdlog::level::level_enum::debug);

    library::test("Hello World!"); // Hurray !

    return 0;
}
```

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
