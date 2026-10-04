---
title: "Thread Safety"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>Unofficial presentation of the official spdlog Wiki snapshot of 2025-10-15. <a href=\"https://github.com/gabime/spdlog/wiki/Thread-Safety\">Original source</a>. Source SHA-256: <code>3d201c5694b50e0e73400531cc7145e9ce3290bbfa406b36a2e2d7f34e03acad</code>. Software commit: <code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>. Wiki commit: <code>d384272cd5320e27b041ae92625040aa6db71a1e</code>. This independent Wiki snapshot is not a manual tagged for spdlog 1.17.0. <a href=\"/docs/spdlog/v1-17-0/en/02-reference/01-license/\">Full original licenses and notices</a>. This presentation, translations and version annotations are unofficial Libx changes.</p><p>No separate documentation license was identified for this Wiki. Under Libx’s operating policy, the software MIT License is applied to the Wiki with this annotation. This is an operational judgment, not newly obtained permission from the rights holder.</p></aside>"}]
---



<div data-spdlog-source-body="24-thread-safety">

## Non thread safe functions
The following functions **should not** be called concurrently from multiple threads on the same logger object:
* ```set_error_handler(log_err_handler);``` 
* ```logger::sinks()``` - returns a reference to a non thread safe vector, so don't modify it concurrently (e.g. ```logger->sinks().push_back(new_sink);```) 

Note: This restriction applies to all kind of loggers ("_mt" or "_st").

### Loggers
To create **thread safe** loggers, use the _mt factory functions.

For example:
```c++
auto logger = spdlog::basic_logger_mt(...);
```

To create **single threaded** loggers, use the _st factory functions.

For example:
```c++
auto logger = spdlog::basic_logger_st(...);
```

### Sinks
- **Thread safe sinks:** sinks ending with ```_mt``` (e.g ```daily_file_sink_mt```)
- **Non thread safe sinks:** sinks ending with ```_st``` (e.g ```daily_file_sink_st```)




</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
