---
title: "ロガーの作成"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href="https://github.com/gabime/spdlog/wiki/Creating-loggers">原資料</a>。原資料のSHA-256：<code>ffe58404fee5d1f5cb90a5738016aae1d828b73bec81e41c4c5a5861fd38bb62</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href="/docs/spdlog/v1-17-0/ja/02-reference/01-license/">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>

<div data-spdlog-source-body="05-creating-loggers">

各ロガーは、1個以上の `std::shared_ptr<spdlog::sink>` を格納したvectorを持ちます。

ログ呼び出しのたびに、ログレベルが条件を満たしていれば、ロガーはそれぞれの `sink(log_msg)` 関数を呼び出します。

spdlogのsinkは、スレッドセーフかどうかを示すため、`_mt`（マルチスレッド）または `_st`（シングルスレッド）の接尾辞を持ちます。シングルスレッドのsinkは複数のスレッドから同時に使用できませんが、ロックを行わないため、より高速になる場合があります。

### ファクトリ関数を使ったロガーの作成
```c++
//Create and return a shared_ptr to a multithreaded console logger.
#include "spdlog/sinks/stdout_color_sinks.h"
auto console = spdlog::stdout_color_mt("some_unique_name");
```
このコードはコンソールロガーを作成し、"some_unique_name"をIDとしてspdlogのグローバルレジストリに登録し、shared_ptrとして返します。

### spdlog::get("...")を使ったロガーへのアクセス
スレッドセーフな `spdlog::get("logger_name")` を使うと、どこからでもロガーへアクセスできます。共有ポインターを返します。

**注意：** `spdlog::get` はmutexをロックするため、コードを遅くする可能性があります。注意して使用してください。少なくとも頻繁に実行されるコード経路では、返された `shared_ptr<spdlog::logger>` を保存して直接使うことを推奨します。

コンストラクターで設定する、`shared_ptr<spdlog::logger>` 型のprivateメンバーを持たせる方法が有効です。
```c++
class MyClass
{
private:
   std::shared_ptr<spdlog::logger> _logger;
public:
   MyClass()
   {
     //set _logger to some existing logger
     _logger = spdlog::get("some_logger");
     //or create directly
     //_logger = spdlog::rotating_file_logger_mt("my_logger", ...);
   }
};
```

**注意2：** 手動で作成したロガー（直接構築するもの。下記の[ロガーの手動作成](#ロガーの手動作成)を参照）は自動登録されず、`get("...")` の呼び出しでは見つかりません。

そのようなロガーを登録するには、`register_logger(...)` 関数を使います。
```c++
spdlog::register_logger(my_logger);
...
auto the_same_logger = spdlog::get("mylogger");
```

### ローテーションするファイルロガーの作成
```c++
//Create rotating file multi-threaded logger
#include "spdlog/sinks/rotating_file_sink.h"
auto file_logger = spdlog::rotating_logger_mt("file_logger", "logs/mylogfile", 1048576 * 5, 3);
...
auto same_logger= spdlog::get("file_logger");
```

### 非同期ロガーの作成
```c++
#include "spdlog/async.h"
void async_example()
{
    // default thread pool settings can be modified *before* creating the async logger:
    // spdlog::init_thread_pool(8192, 1); // queue with 8k items and 1 backing thread.
    auto async_file = spdlog::basic_logger_mt<spdlog::async_factory>("async_file_logger", "logs/async_log.txt");
    // alternatively:
    // auto async_file = spdlog::create_async<spdlog::sinks::basic_file_sink_mt>("async_file_logger", "logs/async_log.txt");
   
}
```
非同期ログでは、spdlogは専用のメッセージキューを持つ、共有のグローバルスレッドプールを使います。

そのために、メッセージキュー内に固定数の**事前割り当て済みスロット**を作成します（64ビット環境で1スロット約256バイト）。この設定は `spdlog::init_thread_pool(queue_size, backing_threads_count)` で変更できます。

メッセージを記録しようとしたときにキューが満杯であれば、呼び出し元は空きスロットができるまでブロックします（デフォルトの動作）。または、ロガーを `async_overflow_policy==overrun_oldest` で構築した場合、キュー内の最も古いメッセージを新しいメッセージで即座に上書きします。

### ロガーの手動作成
```c++
auto sink = std::make_shared<spdlog::sinks::stdout_sink_mt>();
auto my_logger = std::make_shared<spdlog::logger>("mylogger", sink);

// Optionally register the logger.  This is only needed if you want to access it with spdlog::get("mylogger")
spdlog::register_logger(my_logger);
```

> [!NOTE]
> ファクトリ関数は内部で、ログレベルなどのグローバルな状態をロガーに設定します。
> 手動で作成したロガーには、グローバルな状態は設定されません。
> ロガーにグローバルな状態を設定したい場合は、`spdlog::initialize_logger()` を呼び出してください。

### 複数のsinkを持つロガーの作成
```c++
std::vector<spdlog::sink_ptr> sinks;
sinks.push_back(std::make_shared<spdlog::sinks::stdout_sink_st>());
sinks.push_back(std::make_shared<spdlog::sinks::daily_file_sink_st>("logfile", 23, 59));
auto combined_logger = std::make_shared<spdlog::logger>("name", begin(sinks), end(sinks));
//register it if you need to access it globally
spdlog::register_logger(combined_logger);
```

### 同じ出力ファイルを使う複数のファイルロガーの作成
異なるロガーから同じ出力ファイルへ書き込みたい場合、すべてのロガーで同じsinkを共有する必要があります。そうしなければ、予期しない結果になる可能性があります。
```c++
auto sharedFileSink = std::make_shared<spdlog::sinks::basic_file_sink_mt>("fileName.txt");
auto firstLogger = std::make_shared<spdlog::logger>("firstLoggerName", sharedFileSink);
auto secondLogger = std::make_unique<spdlog::logger>("secondLoggerName", sharedFileSink);
```

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
