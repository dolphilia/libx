---
title: "Custom formatting"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>Unofficial presentation of the official spdlog Wiki snapshot of 2025-10-15. <a href=\"https://github.com/gabime/spdlog/wiki/Custom-formatting\">Original source</a>. Source SHA-256: <code>7355e130376d1ee5df09eb36bdda36655248e1fd749ca30c07c5219b536fd142</code>. Software commit: <code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>. Wiki commit: <code>d384272cd5320e27b041ae92625040aa6db71a1e</code>. This independent Wiki snapshot is not a manual tagged for spdlog 1.17.0. <a href=\"/docs/spdlog/v1-17-0/en/02-reference/01-license/\">Full original licenses and notices</a>. This presentation, translations and version annotations are unofficial Libx changes.</p><p>No separate documentation license was identified for this Wiki. Under Libx’s operating policy, the software MIT License is applied to the Wiki with this annotation. This is an operational judgment, not newly obtained permission from the rights holder.</p></aside>"},{"kind":"editorial","html":"<aside data-editorial=\"source-note\"><p>This dated Wiki pattern table is not the complete spdlog 1.17.0 flag catalogue. The separately fixed README includes MDC and %&amp;. Original flags and examples remain unchanged.</p></aside>"}]
---



<div data-spdlog-source-body="06-custom-formatting">

Each logger's sink has a formatter which formats the messages to its destination.

spdlog's default logging format is in the form of:

```[2014-10-31 23:46:59.678] [my_loggername] [info] Some message```

There are 2 ways to customize a logger's format:
* Set the pattern string (*recommended*):
```c++
set_pattern(pattern_string);
```
* Or implement custom formatter that implements the [formatter](https://github.com/gabime/spdlog/blob/v1.x/include/spdlog/formatter.h) interface
and call 
```c++
set_formatter(std::make_unique<my_custom_formatter>());
``` 

## Customizing format using ```set_pattern(..)```
Format can be applied globally to **all registered** loggers:
```
spdlog::set_pattern("*** [%H:%M:%S %z] [thread %t] %v ***");
```
or to a specific **logger** object:
```
some_logger->set_pattern(">>>>>>>>> %H:%M:%S %z %v <<<<<<<<<");
```

or to a specific **sink** object:
```
some_logger->sinks()[0]->set_pattern(">>>>>>>>> %H:%M:%S %z %v <<<<<<<<<");
some_logger->sinks()[1]->set_pattern("..");
```

## Efficiency
Whenever the user calls ```set_pattern("..")``` the library "compiles" the new pattern to an internal efficient representation  - This way the performance stays excellent even with complex patterns (no re-parsing of the pattern on each log call).

## Pattern flags
Pattern flags are in the form of ```%flag``` and resembles the [strftime](http://www.cplusplus.com/reference/ctime/strftime/) function:

| flag | meaning| example |
| :------ | :-------: | :-----: |
|`%v`|The actual text to log|"some user text"|
|`%t`|Thread id|"1232"|
|`%P`|Process id|"3456"|
|`%n`|Logger's name|"some logger name"
|`%l`|The log level of the message|"debug", "info", etc|
|`%L`|Short log level of the message|"D", "I", etc|
|`%a`|Abbreviated weekday name|"Thu"|
|`%A`|Full weekday name|"Thursday"|
|`%b`|Abbreviated month name|"Aug"|
|`%B`|Full month name|"August"|
|`%c`|Date and time representation|"Thu Aug 23 15:35:46 2014"|
|`%C`|Year in 2 digits|"14"|
|`%Y`|Year in 4 digits|"2014"|
|`%D` or `%x`|Short MM/DD/YY date|"08/23/14"|
|`%m`|Month 01-12|"11"|
|`%d`|Day of month 01-31|"29"|
|`%H`|Hours in 24 format  00-23|"23"|
|`%I`|Hours in 12 format  01-12|"11"|
|`%M`|Minutes 00-59|"59"|
|`%S`|Seconds 00-59|"58"|
|`%e`|Millisecond part of the current second 000-999|"678"|
|`%f`|Microsecond part of the current second 000000-999999|"056789"|
|`%F`|Nanosecond part of the current second 000000000-999999999|"256789123"|
|`%p`|AM/PM|"AM"|
|`%r`|12 hour clock|"02:55:02 PM"|
|`%R`|24-hour HH:MM time, equivalent to %H:%M|"23:55"|
|`%T` or `%X`|ISO 8601 time format (HH:MM:SS), equivalent to %H:%M:%S|"23:55:59"|
|`%z`|ISO 8601 offset from UTC in timezone ([+/-]HH:MM)|"+02:00"|
|`%E`|Seconds since the epoch |"1528834770"|
|`%%`|The % sign|"%"|
|`%+`|spdlog's default format|"[2014-10-31 23:46:59.678] [mylogger] [info] Some message"|
|`%^`|start color range (can be used only once)|"[mylogger] [info(green)] Some message"|
|`%$`|end color range (for example %^[+++]%$ %v) (can be used only once)|[+++] Some message|
|`%@`|Source file and line (use SPDLOG_TRACE(..), SPDLOG_INFO(...) etc. instead of spdlog::trace(...)) Same as %g:%#|/some/dir/my_file.cpp:123|
|`%s`|Basename of the source file (use SPDLOG_TRACE(..), SPDLOG_INFO(...) etc.)|my_file.cpp|
|`%g`|Full or relative path of the source file as appears in spdlog::source_loc (use SPDLOG_TRACE(..), SPDLOG_INFO(...) etc.)|/some/dir/my_file.cpp|
|`%#`|Source line (use SPDLOG_TRACE(..), SPDLOG_INFO(...) etc.)|123|
|`%!`|Source function (use SPDLOG_TRACE(..), SPDLOG_INFO(...) etc. see tweakme for pretty-print)|my_func|
|`%o`|Elapsed time in milliseconds since previous message|456|
|`%i`|Elapsed time in microseconds since previous message|456734|
|`%u`|Elapsed time in nanoseconds since previous message| 456734789|
|`%O`|Elapsed time in seconds since previous message|4|

## Aligning 
Each pattern flag can be aligned by prepending a width number(up to 64).

Use`-`(left align) or `=` (center align) to control the align side:


| align | meaning| example | result|
| :------ | :-------: | :-----: |  :-----: |
|`%<width><flag>`|Right align|`%8l`|"&nbsp;&nbsp;&nbsp;&nbsp;info"|
|`%-<width><flag>`|Left align|`%-8l`|"info&nbsp;&nbsp;&nbsp;&nbsp;"|
|`%=<width><flag>`|Center align|`%=8l`|"&nbsp;&nbsp;info&nbsp;&nbsp;"|

Optionally add `!` to truncate the result if its size exceeds the specified width:

| align | meaning| example | result|
| :------ | :-------: | :-----: |  :-----: |
|`%<width>!<flag>`|Right align or truncate|`%3!l`|"inf"|
|`%-<width>!<flag>`|Left align or truncate|`%-2!l`|"in"|
|`%=<width>!<flag>`|Center align or truncate|`%=1!l`|"i"|

**Note:** To truncate function names use '!!'. For example `%10!!` will limit function names to 10 chars.


## Extending spdlog with your own flags
You can define your own flags by inheriting the [custom_flag_formatter](https://github.com/gabime/spdlog/blob/v1.x/include/spdlog/pattern_formatter.h#L66,#L75) class and implementing the ```clone()``` and ```format(...)``` abstract methods.

The following example adds a new flag **%*** - which will be bound to a <my_formatter_flag> instance.
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
**Note:** The ```clone()``` method should return a deep copy of the object and is required because spdlog passes a new copy of the object to each sink in use (for performance reasons as this enables to have a state in this object without worrying about race conditions or thread safety across sinks).

**Note:** You can also override spdlog's built in flags in this way.

## Source location flags
If you need to use source location flags like `%s`, `%g`, `%#`, `%!`, is necessary to define this compiler flag:
```cpp
#define SPDLOG_ACTIVE_LEVEL SPDLOG_LEVEL_TRACE
```

(change the log level according to your needs) and use these macros:

```cpp
SPDLOG_LOGGER_TRACE(some_logger, "trace message");
SPDLOG_LOGGER_DEBUG(some_logger, "debug message");
SPDLOG_LOGGER_INFO(some_logger, "info message");
SPDLOG_LOGGER_WARN(some_logger, "warn message");
SPDLOG_LOGGER_ERROR(some_logger, "error message");
SPDLOG_LOGGER_CRITICAL(some_logger, "critical message");
```

**NOTE:** if you've set the flag to `SPDLOG_LEVEL_TRACE` but you don't see any trace and/or debug messages, it's most likely something like this [https://github.com/gabime/spdlog/issues/2764](https://github.com/gabime/spdlog/issues/2764). In that case define it directly as a compiler flag. For example, using cmake:

```cmake
add_compile_definitions(SPDLOG_ACTIVE_LEVEL=SPDLOG_LEVEL_TRACE)
```





</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
