---
title: "カスタム書式"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href=\"https://github.com/gabime/spdlog/wiki/Custom-formatting\">原資料</a>。原資料のSHA-256：<code>7355e130376d1ee5df09eb36bdda36655248e1fd749ca30c07c5219b536fd142</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href=\"/docs/spdlog/v1-17-0/ja/02-reference/01-license/\">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>"},{"kind":"editorial","html":"<aside data-editorial=\"source-note\"><p>この日付付きWikiのパターン表は、spdlog 1.17.0のフラグを網羅した一覧ではありません。別途固定したREADMEにはMDCと%&amp;が含まれます。原資料のフラグと例は変更せず保持しています。</p></aside>"}]
---



<div data-spdlog-source-body="06-custom-formatting">

各ロガーのsinkには、メッセージを出力先向けに書式化するformatterがあります。

spdlogのデフォルトのログ書式は、次の形式です。

`[2014-10-31 23:46:59.678] [my_loggername] [info] Some message`

ロガーの書式をカスタマイズする方法は2つあります。

* パターン文字列を設定する（*推奨*）。
```c++
set_pattern(pattern_string);
```
* または、[formatter](https://github.com/gabime/spdlog/blob/v1.x/include/spdlog/formatter.h)インターフェースを実装する独自のformatterを作成し、次を呼び出します。
```c++
set_formatter(std::make_unique<my_custom_formatter>());
``` 

## set_pattern(..)による書式のカスタマイズ
書式は、グローバルに**登録済みのすべての**ロガーへ適用できます。
```
spdlog::set_pattern("*** [%H:%M:%S %z] [thread %t] %v ***");
```
または、特定の**ロガー**オブジェクトへ適用できます。
```
some_logger->set_pattern(">>>>>>>>> %H:%M:%S %z %v <<<<<<<<<");
```

または、特定の**sink**オブジェクトへ適用できます。
```
some_logger->sinks()[0]->set_pattern(">>>>>>>>> %H:%M:%S %z %v <<<<<<<<<");
some_logger->sinks()[1]->set_pattern("..");
```

## 効率
ユーザーが `set_pattern("..")` を呼び出すたびに、ライブラリは新しいパターンを効率的な内部表現へ「コンパイル」します。このため、複雑なパターンでも優れた性能を維持します（ログ呼び出しのたびにパターンを再解析しません）。

## パターンフラグ
パターンフラグは `%flag` の形式で、[strftime](http://www.cplusplus.com/reference/ctime/strftime/)関数に似ています。

| フラグ | 意味 | 例 |
| :------ | :-------: | :-----: |
|`%v`|実際にログへ記録するテキスト|"some user text"|
|`%t`|スレッドID|"1232"|
|`%P`|プロセスID|"3456"|
|`%n`|ロガー名|"some logger name"
|`%l`|メッセージのログレベル|"debug", "info", etc|
|`%L`|メッセージのログレベルの略記|"D", "I", etc|
|`%a`|曜日名の略記|"Thu"|
|`%A`|曜日名の完全表記|"Thursday"|
|`%b`|月名の略記|"Aug"|
|`%B`|月名の完全表記|"August"|
|`%c`|日付と時刻の表現|"Thu Aug 23 15:35:46 2014"|
|`%C`|2桁の年|"14"|
|`%Y`|4桁の年|"2014"|
|`%D` or `%x`|短いMM/DD/YY形式の日付|"08/23/14"|
|`%m`|月：01–12|"11"|
|`%d`|月内の日：01–31|"29"|
|`%H`|24時間表記の時：00–23|"23"|
|`%I`|12時間表記の時：01–12|"11"|
|`%M`|分：00–59|"59"|
|`%S`|秒：00–59|"58"|
|`%e`|現在の秒のミリ秒部分：000–999|"678"|
|`%f`|現在の秒のマイクロ秒部分：000000–999999|"056789"|
|`%F`|現在の秒のナノ秒部分：000000000–999999999|"256789123"|
|`%p`|AM/PM|"AM"|
|`%r`|12時間表記の時刻|"02:55:02 PM"|
|`%R`|24時間のHH:MM表記。%H:%Mと同等|"23:55"|
|`%T` or `%X`|ISO 8601の時刻形式（HH:MM:SS）。%H:%M:%Sと同等|"23:55:59"|
|`%z`|タイムゾーンのUTCからのISO 8601オフセット（[+/-]HH:MM）|"+02:00"|
|`%E`|エポックからの秒数|"1528834770"|
|`%%`|%記号|"%"|
|`%+`|spdlogのデフォルト書式|"[2014-10-31 23:46:59.678] [mylogger] [info] Some message"|
|`%^`|色付け範囲の開始（1回のみ使用可能）|"[mylogger] [info(green)] Some message"|
|`%$`|色付け範囲の終了（例：%^[+++]%$ %v）（1回のみ使用可能）|[+++] Some message|
|`%@`|ソースファイルと行（spdlog::trace(...)ではなくSPDLOG_TRACE(..)、SPDLOG_INFO(...)などを使用）。%g:%#と同等|/some/dir/my_file.cpp:123|
|`%s`|ソースファイルのベース名（SPDLOG_TRACE(..)、SPDLOG_INFO(...)などを使用）|my_file.cpp|
|`%g`|spdlog::source_locに現れるソースファイルの完全パスまたは相対パス（SPDLOG_TRACE(..)、SPDLOG_INFO(...)などを使用）|/some/dir/my_file.cpp|
|`%#`|ソース行（SPDLOG_TRACE(..)、SPDLOG_INFO(...)などを使用）|123|
|`%!`|ソース関数（SPDLOG_TRACE(..)、SPDLOG_INFO(...)などを使用。整形表示についてはtweakmeを参照）|my_func|
|`%o`|前のメッセージからの経過時間（ミリ秒）|456|
|`%i`|前のメッセージからの経過時間（マイクロ秒）|456734|
|`%u`|前のメッセージからの経過時間（ナノ秒）| 456734789|
|`%O`|前のメッセージからの経過時間（秒）|4|

## 配置
各パターンフラグは、前に幅の数値（最大64）を付けて配置できます。

`-`（左寄せ）または `=`（中央寄せ）で、配置する側を指定します。

| 配置 | 意味 | 例 | 結果 |
| :------ | :-------: | :-----: |  :-----: |
|`%<width><flag>`|右寄せ|`%8l`|"&nbsp;&nbsp;&nbsp;&nbsp;info"|
|`%-<width><flag>`|左寄せ|`%-8l`|"info&nbsp;&nbsp;&nbsp;&nbsp;"|
|`%=<width><flag>`|中央寄せ|`%=8l`|"&nbsp;&nbsp;info&nbsp;&nbsp;"|

必要に応じて `!` を加えると、結果の長さが指定幅を超える場合に切り詰められます。

| 配置 | 意味 | 例 | 結果 |
| :------ | :-------: | :-----: |  :-----: |
|`%<width>!<flag>`|右寄せまたは切り詰め|`%3!l`|"inf"|
|`%-<width>!<flag>`|左寄せまたは切り詰め|`%-2!l`|"in"|
|`%=<width>!<flag>`|中央寄せまたは切り詰め|`%=1!l`|"i"|

**注意：** 関数名を切り詰めるには '!!' を使います。たとえば `%10!!` は関数名を10文字に制限します。

## 独自のフラグによるspdlogの拡張
[custom_flag_formatter](https://github.com/gabime/spdlog/blob/v1.x/include/spdlog/pattern_formatter.h#L66,#L75)クラスを継承し、抽象メソッド `clone()` と `format(...)` を実装すると、独自のフラグを定義できます。

次の例では、新しいフラグ **%*** を追加し、`my_formatter_flag` インスタンスに結び付けます。
```c++ 
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

**注意：** `clone()` メソッドはオブジェクトのディープコピーを返す必要があります。spdlogは使用する各sinkへオブジェクトの新しいコピーを渡すため、このメソッドが必要です。これは性能上の理由によるもので、sink間の競合状態やスレッドセーフ性を心配せずに、このオブジェクト内に状態を持たせられるようにします。

**注意：** この方法で、spdlogの組み込みフラグを上書きすることもできます。

## ソース位置のフラグ
`%s`、`%g`、`%#`、`%!` などのソース位置のフラグが必要な場合、次のコンパイラーフラグを定義する必要があります。
```cpp
#define SPDLOG_ACTIVE_LEVEL SPDLOG_LEVEL_TRACE
```

ログレベルは必要に応じて変更し、次のマクロを使います。
```cpp
SPDLOG_LOGGER_TRACE(some_logger, "trace message");
SPDLOG_LOGGER_DEBUG(some_logger, "debug message");
SPDLOG_LOGGER_INFO(some_logger, "info message");
SPDLOG_LOGGER_WARN(some_logger, "warn message");
SPDLOG_LOGGER_ERROR(some_logger, "error message");
SPDLOG_LOGGER_CRITICAL(some_logger, "critical message");
```

**注意：** フラグを `SPDLOG_LEVEL_TRACE` に設定したのにtraceやdebugのメッセージが表示されない場合、[このissue](https://github.com/gabime/spdlog/issues/2764)のような問題である可能性が高いと考えられます。その場合は、コンパイラーフラグとして直接定義してください。たとえば、cmakeでは次のようにします。
```cmake
add_compile_definitions(SPDLOG_ACTIVE_LEVEL=SPDLOG_LEVEL_TRACE)
```

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
