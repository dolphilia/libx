---
title: "Flush policy"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>Unofficial presentation of the official spdlog Wiki snapshot of 2025-10-15. <a href="https://github.com/gabime/spdlog/wiki/Flush-policy">Original source</a>. Source SHA-256: <code>2a3b8cc2b86a1a6a5688903544ea0bb30c289ef61013cbb1a1d280ef5b648c69</code>. Software commit: <code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>. Wiki commit: <code>d384272cd5320e27b041ae92625040aa6db71a1e</code>. This independent Wiki snapshot is not a manual tagged for spdlog 1.17.0. <a href="/docs/spdlog/v1-17-0/en/02-reference/01-license/">Full original licenses and notices</a>. This presentation, translations and version annotations are unofficial Libx changes.</p><p>No separate documentation license was identified for this Wiki. Under the approved operating policy, the software MIT License is applied to the Wiki with this annotation. This is an operational judgment, not newly obtained permission from the rights holder.</p></aside>

<div data-spdlog-source-body="10-flush-policy">

By default spdlog lets the underlying libc flush whenever it sees fit in order to achieve good performance. You can override this using the following options:


### Manual flush
You can use the ```logger->flush()``` function to instruct a logger to flush its contents. The logger will in turn call the ```flush()``` function on each of the underlying sinks.

**Note:** If using an async logger, ```logger->flush()``` posts a message to the queue requesting the flush operation, so the function returns immediately. This is different from some older versions of spdlog (which would synchronously wait until the message was received and the flush completed). Currently there is no need to explicitly call ```logger->flush()```  or ```spdlog::shutdown()``` before shutting down, it is done automatically at destruction while program exits. However, if you want to flush all the async logger manually before  "immediately" exit function such as ```abort()``` or ```_exit(-1)```, please call ```spdlog::shutdown()``` before those functions.

### Severity based flush
You can set the minimum log level that will trigger automatic flush.

For example, this will trigger flush whenever errors or more severe messages are logged:
```c++
my_logger->flush_on(spdlog::level::err); 
```

### Interval based flush
spdlog supports setting flush interval. This is implemented by a single worker thread that periodically calls flush() on each logger.


For example, turn on periodic flush with interval of 5 seconds for all registered loggers:
```c++
spdlog::flush_every(std::chrono::seconds(5));
```

**Note** Use this only on thread safe loggers, since the periodic flush happens from a different thread.

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
