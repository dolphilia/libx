---
title: "Sinks"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href=\"https://github.com/gabime/spdlog/wiki/Sinks\">原資料</a>。原資料のSHA-256：<code>945236df89324369620ff488bcc19bef85b356ea55a4bafa2614ea7dba4caef8</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href=\"/docs/spdlog/v1-17-0/ja/02-reference/01-license/\">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>"},{"kind":"editorial","html":"<aside data-editorial=\"source-note\"><p>原資料のdist sinkの例は、旧来のsimple_file_sink_stという名前を使っています。別途固定した1.17.0のヘッダーではbasic_file_sink_stを使います。原資料のコードは保持しています。</p></aside>"}]
---



<div data-spdlog-source-body="23-sinks">

sinkは、実際にログを出力先へ書き込むオブジェクトです。各sinkが担当する出力先は1つだけ（例：ファイル、コンソール、データベース）とし、各sinkはformatterオブジェクトの独自のprivateインスタンスを持ちます。

各ロガーは、1個以上の `std::shared_ptr<sink>` を格納したvectorを持ちます。ログ呼び出しのたびに、ログレベルが条件を満たしていれば、ロガーは各sinkの `"sink(log_msg)"` 関数を呼び出します。

spdlogのsinkは、スレッドセーフ性を示す_mt（マルチスレッド）または_st（シングルスレッド）の接尾辞を持ちます。シングルスレッドのsinkは、複数スレッドから同時には使用できませんが、ロックを行わないため高速です。

### 利用できるsink

***注意：*** これは一部だけの一覧です。すべてのsinkについては、[sinksフォルダー](https://github.com/gabime/spdlog/tree/v1.x/include/spdlog/sinks/)を参照してください。

***注意：*** 1.5.0以降、spdlogは必要に応じてログファイルを格納するフォルダーを作成します。それ以前は、フォルダーを手動で作成する必要があります。
***

**rotating_file_sink**

最大ファイルサイズに達すると、ファイルを閉じて名前を変更し、新しいファイルを作成します。最大ファイルサイズと最大ファイル数の両方をコンストラクターで設定できます。
```c++
// create a thread safe sink which will keep its file size to a maximum of 5MB and a maximum of 3 rotated files.
#include "spdlog/sinks/rotating_file_sink.h"
...
auto file_logger = spdlog::rotating_logger_mt("file_logger", "logs/mylogfile", 1048576 * 5, 3);
```
または、sinkを手動で作成してロガーへ渡します。
```c++
#include "spdlog/sinks/rotating_file_sink.h"
...
auto rotating = make_shared<spdlog::sinks::rotating_file_sink_mt> ("log_filename", 1024*1024, 5, false);
auto file_logger = make_shared<spdlog::logger>("my_logger", rotating);
```

***
**daily_file_sink**

毎日指定した時刻に新しいログファイルを作成し、ファイル名にタイムスタンプを付けます。
```c++
#include "spdlog/sinks/daily_file_sink.h"
..
auto daily_logger = spdlog::daily_logger_mt("daily_logger", "logs/daily", 14, 55);
```
このコードは、毎日14:55に新しいログファイルを作成するスレッドセーフなsinkを作成します。

***注意：*** 1.5.0以降、spdlogは必要に応じてログファイルを格納するフォルダーを作成します。それ以前は、フォルダーを手動で作成する必要があります。

***注意：*** 起動時には、古いログファイルは削除されません。実行中に作成されていたなら削除対象となるファイルであっても、削除されません。ローテーションと削除は実行中にのみ行われ、sinkの作成時には行われません。

***
**simple_file_sink**

指定されたログファイルへ、制限なしに書き込む単純なファイルsinkです。
***
```c++
#include "spdlog/sinks/basic_file_sink.h"
...
auto logger = spdlog::basic_logger_mt("mylogger", "log.txt");
```
***注意：*** 1.5.0以降、spdlogは必要に応じてログファイルを格納するフォルダーを作成します。それ以前は、フォルダーを手動で作成する必要があります。

***
**stdout_sink/stderr_sink**
```c++
#include "spdlog/sinks/stdout_sinks.h"
...
auto console = spdlog::stdout_logger_mt("console");
auto err_console = spdlog::stderr_logger_st("console");
```

**色付きのstdout_sink/stderr_sink**
```c++
#include "spdlog/sinks/stdout_color_sinks.h"
...
auto console = spdlog::stdout_color_mt("console");
auto err_console = spdlog::stderr_color_st("console");
```

または、sinkを直接作成します。
```c++
auto sink = std::make_shared<spdlog::sinks::stdout_color_sink_mt>();
```

***
**ostream_sink**
```c++
#include "spdlog/sinks/ostream_sink.h "
...
std::ostringstream oss;
auto ostream_sink = std::make_shared<spdlog::sinks::ostream_sink_mt> (oss);
auto logger = std::make_shared<spdlog::logger>("my_logger", ostream_sink);
```

***
**null_sink**：

ログを破棄するnull sinkです。デバッグや参照実装として使えます。
```c++
#include "spdlog/sinks/null_sink.h"
...
auto logger = spdlog::create<spdlog::sinks::null_sink_st>("null_logger");
```

***
**syslog_sink**

ログをsyslogへ送る、POSIX syslog(3)のsinkです。
```c++
#include "spdlog/sinks/syslog_sink.h"
...
auto syslog_sink = std::make_shared<spdlog::sinks::syslog_sink_mt>("my_ident", LOG_PID);
auto syslog_logger = std::make_shared<spdlog::logger>("logger_name", syslog_sink);
```

**systemd_sink**

ログをsystemdへ送るsinkです。
```c++
#include "spdlog/sinks/systemd_sink.h"
...
auto systemd_sink = std::make_shared<spdlog::sinks::systemd_sink_st>();
auto systemd_logger = std::make_shared<spdlog::logger>("logger_name", systemd_sink);
```

***
**dist_sink**（[sinks/dist_sink.h](https://github.com/gabime/spdlog/tree/master/include/spdlog/sinks/dist_sink.h)）：

ほかのsinkの一覧へログメッセージを配布します。
```c++
#include "spdlog/sinks/dist_sink.h"

...
auto dist_sink = make_shared<spdlog::sinks::dist_sink_st>();
auto sink1 = make_shared<spdlog::sinks::stdout_sink_st>();
auto sink2 = make_shared<spdlog::sinks::simple_file_sink_st>("mylog.log");

dist_sink->add_sink(sink1);
dist_sink->add_sink(sink2);
```

***
**msvc_sink**
Windowsのデバッグsinkです（OutputDebugStringAでログを記録）。
```c++
#include "spdlog/sinks/msvc_sink.h"
auto sink = std::make_shared<spdlog::sinks::msvc_sink_mt>();
auto logger = std::make_shared<spdlog::logger>("msvc_logger", sink);
```

***
**dup_filter_sink**
重複メッセージを除去するsinkです。直前のメッセージと同一で、経過時間が"max_skip_duration"未満の場合、メッセージをスキップします。

例：
```c++
#include "spdlog/sinks/dup_filter_sink.h"

auto dup_filter = std::make_shared<dup_filter_sink_st>(std::chrono::seconds(5));
dup_filter->add_sink(std::make_shared<stdout_color_sink_mt>());
spdlog::logger l("logger", dup_filter);
l.info("Hello");
l.info("Hello");
l.info("Hello");
l.info("Different Hello");
```
出力：
```
[2019-06-25 17:50:56.511] [logger] [info] Hello
[2019-06-25 17:50:56.512] [logger] [info] Skipped 3 duplicate messages..
[2019-06-25 17:50:56.512] [logger] [info] Different Hello
```

***
**ringbuffer_sink**

ringbuffer sinkは、直近のログメッセージをメモリーに保持します。ログメッセージを取得するには、`spdlog::sinks::ringbuffer_sink::last_formatted(size_t)` を呼び出します。

例：
```c++
#include "spdlog/sinks/ringbuffer_sink.h"

auto ringbuffer_sink = std::make_shared<spdlog::sinks::ringbuffer_sink_mt>(128);

std::vector<spdlog::sink_ptr> sinks;
sinks.push_back(std::make_shared<spdlog::sinks::basic_file_sink_mt>("path/to/log.txt"));
sinks.push_back(ringbuffer_sink);

auto logger = std::make_shared<spdlog::logger>("logger_name", std::begin(sinks), std::end(sinks));

for (int i = 0; i < 256; ++i) {
    logger->info("Log message {}", i);
}

// Retrieve all log messages. `log_message` contains 128 messages.
std::vector<std::string> log_messages = ringbuffer_sink->last_formatted();
// Retrieve a maximum of 64 log messages.
std::vector<std::string> log_messages = ringbuffer_sink->last_formatted(64);
```
***
**qt_sink**

qt_sinkは、QTextBrowserやQTextEditなどからログメッセージを出力できます。

例：
```c++
#include "spdlog/sinks/qt_sinks.h"
auto logger = spdlog::qt_logger_mt("QLogger",ui->textBrowser);
logger->info("hello QTextBrowser");
logger->warn("this msg from spdlog");
```
![画像](https://user-images.githubusercontent.com/40905056/191399533-8bcd7159-82cd-4221-9288-defcbde27df5.png)

### 独自のsinkの実装

独自のsinkを実装するには、単純な[sink](https://github.com/gabime/spdlog/tree/v1.x/include/spdlog/sinks/sink.h)インターフェースを実装する必要があります。

[base_sink](https://github.com/gabime/spdlog/tree/v1.x/include/spdlog/sinks/base_sink.h)クラスを継承する方法を推奨します。このクラスは既にスレッドのロックを処理するため、スレッドセーフなsinkをとても簡単に実装できます。

この場合、protectedな"sink_it_(..)"関数とflush_(..)関数だけを実装すれば済みます。
```c++
#include "spdlog/sinks/base_sink.h"

template<typename Mutex>
class my_sink : public spdlog::sinks::base_sink <Mutex>
{
...
protected:
    void sink_it_(const spdlog::details::log_msg& msg) override
    {

    // log_msg is a struct containing the log entry info like level, timestamp, thread id etc.
    // msg.payload (before v1.3.0: msg.raw) contains pre formatted log

    // If needed (very likely but not mandatory), the sink formats the message before sending it to its final destination:
    spdlog::memory_buf_t formatted;
    spdlog::sinks::base_sink<Mutex>::formatter_->format(msg, formatted);
    std::cout << fmt::to_string(formatted);
    }

    void flush_() override 
    {
       std::cout << std::flush;
    }
};

#include "spdlog/details/null_mutex.h"
#include <mutex>
using my_sink_mt = my_sink<std::mutex>;
using my_sink_st = my_sink<spdlog::details::null_mutex>;
```

### 作成後にロガーへsinkを追加する
spdlog v1.xには、sinkのvectorへの非const参照を返す関数があり、手動でsinkを末尾に追加できます。sinkのvectorを保護するmutexはありません（性能への影響を考えれば当然です）。そのため、**スレッドセーフではありません**。次も参照してください：https://github.com/gabime/spdlog/wiki/1.1.-Thread-Safety
```c++
inline std::vector<spdlog::sink_ptr> &spdlog::logger::sinks()
{
    return sinks_;
}
```

```c++
spdlog::get("myExistingLogger")->sinks().push_back(myNewSink);
```

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
