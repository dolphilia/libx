---
title: "非同期ログ"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href="https://github.com/gabime/spdlog/wiki/Asynchronous-logging">原資料</a>。原資料のSHA-256：<code>caf4f7529aaa6ac0540fdd5e2750ab5fec1256435abb68afa1968c39873f7e17</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href="/docs/spdlog/v1-17-0/ja/02-reference/01-license/">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>

<div data-spdlog-source-body="03-asynchronous-logging">

## 非同期ロガーの作成
非同期ロガーを作成する方法はいくつかあります。いずれの方法でも、`#include spdlog/async.h` が必要です。

### テンプレート引数 `<spdlog::async_factory>` を使う
```c++
#include "spdlog/async.h"
void async_example()
{
    // default thread pool settings can be modified *before* creating the async logger:
    // spdlog::init_thread_pool(8192, 1); // queue with 8k items and 1 backing thread.
    auto async_file = spdlog::basic_logger_mt<spdlog::async_factory>("async_file_logger", "logs/async_log.txt");
}
```

### `spdlog::create_async<Sink>` を使う
```c++
auto async_file = spdlog::create_async<spdlog::sinks::basic_file_sink_mt>("async_file_logger", "logs/async_log.txt");    
```

### `spdlog::create_async_nb<Sink>` を使う
キューが満杯でもブロックしないロガーを作成します。
```c++
auto async_file = spdlog::create_async_nb<spdlog::sinks::basic_file_sink_mt>("async_file_logger", "logs/async_log.txt");
```

### 直接構築してグローバルスレッドプールを使う
```c++
spdlog::init_thread_pool(queue_size, n_threads);
auto logger = std::make_shared<spdlog::async_logger>("as", some_sink, spdlog::thread_pool(), async_overflow_policy::block);
```

### 直接構築して独自のスレッドプールを使う
```c++
auto tp = std::make_shared<details::thread_pool>(queue_size, n_threads);
auto logger = std::make_shared<spdlog::async_logger>("as", some_sink, tp, async_overflow_policy::block);
```
#### 注意：上の例のロガーはtpへのweak_ptrを取得するため、tpオブジェクトの寿命はロガーオブジェクトより長くなければなりません。

## キューが満杯のときの方針
キューが満杯のときにどうするか、2つの選択肢があります。

* 空きができるまで呼び出し元をブロックする（デフォルトの動作）。
* 空きを待つ代わりに、キュー内の最も古いメッセージを破棄して、新しいメッセージに置き換える。
  `create_async_nb` ファクトリ関数、またはロガーのコンストラクターの `spdlog::async_overflow_policy` を使います。
```c++
auto logger = spdlog::create_async_nb<spdlog::sinks::basic_file_sink_mt>("async_file_logger", "logs/async_log.txt");
// or directly:
 auto logger = std::make_shared<async_logger>("as", test_sink, spdlog::thread_pool(), spdlog::async_overflow_policy::overrun_oldest);
```

## spdlogのスレッドプール
デフォルトでは、spdlogはキューサイズ8192、ワーカースレッド1個のグローバルスレッドプールを作成し、**すべての**非同期ロガーで使用します。

非同期ロガー自身は処理用のスレッドやキューを所有せず、作成もしません。それらは共有スレッドプールオブジェクトによって作成・管理されるため、非同期ロガーの作成・破棄のコストは小さくなります。

キューのすべてのスロットは、スレッドプールの構築時に**事前割り当て**されます（64ビットシステムでは、各スロットが約256バイトを占めます）。

スレッドプールのサイズとスレッド数は、次のようにリセットできます。
```c++
spdlog::init_thread_pool(queue_size, n_threads);
```
これにより古いグローバルスレッドプール（tp）が破棄され、新しいtpが作成される点に注意してください。古いtpを使っているロガーは動作しなくなるため、非同期ロガーを作成する前に呼び出すことを推奨します。

ロガーごとに別々のキューが必要な場合は、プールの異なるインスタンスを作成して、それぞれのロガーに渡せます。
```c++
auto tp = std::make_shared<details::thread_pool>(128, 1);
auto logger = std::make_shared<async_logger>("as", some_sink, tp, async_overflow_policy::overrun_oldest);

auto tp2 = std::make_shared<details::thread_pool>(1024, 4);  // create pool with queue of 1024 slots and 4 backing threads
auto logger2 = std::make_shared<async_logger>("as2", some_sink, tp2, async_overflow_policy::block);
```

スレッドプールには、コールバックを引数として受け取るコンストラクターもあります。各スレッドの作成後、および破棄前に、そのスレッドで実行されます。
```c++
std::function<void()> on_start = []() { /* execute on start */ };
auto on_stop = []() { /* execute on stop */ };
auto tp = std::make_shared<details::thread_pool>(1024, 1, on_start, on_stop);

// init_thread_pool helper also supports optional on_start and on_stop callbacks
spdlog::init_thread_pool(1024, 1, on_start);
spdlog::init_thread_pool(1024, 1, on_start, on_stop);
```

### メッセージの順序
デフォルトでは、spdlogはワーカースレッドを1個作成し、キュー内のメッセージの順序を保持します。

ワーカースレッドが複数あるスレッドプールでは、キューから取り出された後にメッセージの順序が変わる可能性がある点に注意してください。

メッセージの順序を保ちたい場合は、スレッドプール内のワーカースレッドを1個だけ作成してください。

#### Windowsに関する問題
VSランタイムには、アプリケーション終了時にデッドロックを引き起こすバグがあります。非同期ログを使う場合は、main()が終了する前に `spdlog::shutdown()` を必ず呼び出してください。
（[stackoverflow：VS2012 RCでmain終了後に呼び出すとstd::threadのjoinが停止する](http://stackoverflow.com/questions/10915233/stdthreadjoin-hangs-if-called-after-main-exits-when-using-vs2012-)）。

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
