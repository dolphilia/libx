---
title: "調整"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href="https://github.com/gabime/spdlog/wiki/Tweaking">原資料</a>。原資料のSHA-256：<code>4d8865c5fe27e03b41f17c0ce0ecae3d16b3383aad486b511513e853b4d052bb</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href="/docs/spdlog/v1-17-0/ja/02-reference/01-license/">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside><aside data-editorial="source-note"><p>原資料のSPDLOG_NO_THREAD_IDの説明は%tを未定義としています。別途固定した1.17.0のtweakme.hのコメントは、ゼロを記録するとしています。日付付き原資料の記述は保持しています。</p></aside>

<div data-spdlog-source-body="25-tweaking">

spdlogの性能を最大限引き出すために、[tweakme.h](https://github.com/gabime/spdlog/blob/master/include/spdlog/tweakme.h)ヘッダーファイルを編集できます。

以下は、spdlogでLinuxの高速クロックCLOCK_REALTIME_COARSEを使う例です。

例のコードは原資料のまま保持しています。コード内コメントの日本語訳を以下に示します。

- このファイルを編集すると、性能をさらに引き出し、サポートする機能をカスタマイズできます。
- Linuxでは、より高速なCLOCK_REALTIME_COARSEクロックを使えます。このクロックは精度が低く、カーネルのHZに応じて数十ミリ秒ずれることがあります。通常のクロックの代わりに使うには、コメントを外します（`SPDLOG_CLOCK_COARSE`）。
- スレッドIDのログ記録が不要な場合（ログパターンに%tがない場合）、コメントを外します。各ログ呼び出しでスレッドIDを問い合わせなくなります。警告：このフラグが有効なときにログパターンにスレッドID（%t）が含まれると、結果は未定義です（`SPDLOG_NO_THREAD_ID`）。
- スレッドローカルストレージを使わないようにするには、コメントを外します。警告：プログラムがforkする場合、子プロセスのログに未定義のスレッドIDが現れるのを防ぐため、このフラグのコメントを外してください（`SPDLOG_NO_TLS`）。
- アトミックなログレベルを使わないようにするには、コメントを外します。異なるスレッドがロガーのログレベルを同時に変更することが決してないコードでのみ使ってください（`SPDLOG_NO_ATOMIC_LEVELS`）。
- Windowsのファイル名にwchar_tを使えるようにするには、コメントを外します（`SPDLOG_WCHAR_FILENAMES`）。
- デフォルトの行末（Linuxでは"\n"、Windowsでは"\r\n"）を上書きするには、コメントを外します（`SPDLOG_EOL`）。
- spdlogのfmtではなく、独自に用意したfmtライブラリを使うには、コメントを外します。この場合、spdlogは`<fmt/format.h>`をインクルードしようとするため、-Iフラグを適切に設定してください（`SPDLOG_FMT_EXTERNAL`）。
- wchar_tのサポート（UTF-8への変換）を有効にするには、コメントを外します（`SPDLOG_WCHAR_TO_UTF8_SUPPORT`）。
- 子プロセスがログファイルのファイル記述子を継承しないようにするには、コメントを外します（`SPDLOG_PREVENT_CHILD_FD`）。
- レベル名をカスタマイズするには、コメントを外します（例："MY TRACE"。`SPDLOG_LEVEL_NAMES`）。
- レベル名の略記をカスタマイズするには、コメントを外します（例："MT"）。略記は1文字より長くても構いません（`SPDLOG_SHORT_LEVEL_NAMES`）。
- デフォルトロガーの作成を無効にするには、コメントを外します。デフォルトロガーが不要なら、ごくわずかな初期化時間を削減できる可能性があります（`SPDLOG_DISABLE_DEFAULT_LOGGER`）。
- コストゼロのコンパイル時レベルを設定するには、コメントを外してレベルを設定します（デフォルトはINFO）。SPDLOG_DEBUG(..)、SPDLOG_INFO(..)などのマクロは、有効でなければ空の文へ展開されます（`SPDLOG_ACTIVE_LEVEL`）。
- 関数名に使うマクロのコメントを外し、必要なら変更します。これはコンパイラーに依存します。clang/gccでは`__PRETTY_FUNCTION__`、msvcでは`__FUNCTION__`が適する場合があります。未定義ならデフォルトは`__FUNCTION__`で、すべてのコンパイラーで動作するはずです（`SPDLOG_FUNCTION`）。

```c++

///////////////////////////////////////////////////////////////////////////////
//
// Edit this file to squeeze more performance, and to customize supported
// features
//
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Under Linux, the much faster CLOCK_REALTIME_COARSE clock can be used.
// This clock is less accurate - can be off by dozens of millis - depending on
// the kernel HZ.
// Uncomment to use it instead of the regular clock.
//
#define SPDLOG_CLOCK_COARSE
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Uncomment if thread id logging is not needed (i.e. no %t in the log pattern).
// This will prevent spdlog from querying the thread id on each log call.
//
// WARNING: If the log pattern contains thread id (i.e, %t) while this flag is
// on, the result is undefined.
//
// #define SPDLOG_NO_THREAD_ID
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Uncomment to prevent spdlog from using thread local storage.
//
// WARNING: if your program forks, UNCOMMENT this flag to prevent undefined
// thread ids in the children logs.
//
// #define SPDLOG_NO_TLS
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Uncomment to avoid spdlog's usage of atomic log levels
// Use only if your code never modifies a logger's log levels concurrently by
// different threads.
//
// #define SPDLOG_NO_ATOMIC_LEVELS
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Uncomment to enable usage of wchar_t for file names on Windows.
//
// #define SPDLOG_WCHAR_FILENAMES
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Uncomment to override default eol ("\n" or "\r\n" under Linux/Windows)
//
// #define SPDLOG_EOL ";-)\n"
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Uncomment to use your own copy of the fmt library instead of spdlog's copy.
// In this case spdlog will try to include <fmt/format.h> so set your -I flag
// accordingly.
//
// #define SPDLOG_FMT_EXTERNAL
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Uncomment to enable wchar_t support (convert to utf8)
//
// #define SPDLOG_WCHAR_TO_UTF8_SUPPORT
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Uncomment to prevent child processes from inheriting log file descriptors
//
// #define SPDLOG_PREVENT_CHILD_FD
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Uncomment to customize level names (e.g. "MY TRACE")
//
// #define SPDLOG_LEVEL_NAMES { "MY TRACE", "MY DEBUG", "MY INFO", "MY WARNING",
// "MY ERROR", "MY CRITICAL", "OFF" }
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Uncomment to customize short level names (e.g. "MT")
// These can be longer than one character.
//
// #define SPDLOG_SHORT_LEVEL_NAMES { "T", "D", "I", "W", "E", "C", "O" }
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Uncomment to disable default logger creation.
// This might save some (very) small initialization time if no default logger is needed.
//
// #define SPDLOG_DISABLE_DEFAULT_LOGGER
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Uncomment and set to compile time level with zero cost (default is INFO).
// Macros like SPDLOG_DEBUG(..), SPDLOG_INFO(..)  will expand to empty statements if not enabled
//
// #define SPDLOG_ACTIVE_LEVEL SPDLOG_LEVEL_INFO
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Uncomment (and change if desired) macro to use for function names.
// This is compiler dependent.
// __PRETTY_FUNCTION__ might be nicer in clang/gcc, and __FUNCTION__ in msvc.
// Defaults to __FUNCTION__ (should work on all compilers) if not defined.
//
// #define SPDLOG_FUNCTION __PRETTY_FUNCTION__
///////////////////////////////////////////////////////////////////////////////

```

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
