---
title: "Windows unicode filenames"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>Unofficial presentation of the official spdlog Wiki snapshot of 2025-10-15. <a href=\"https://github.com/gabime/spdlog/wiki/Windows-unicode-filenames\">Original source</a>. Source SHA-256: <code>4515b41ba4dbbc627ab5f188755fd3b53e514f551683ff2ecd2f419975faea67</code>. Software commit: <code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>. Wiki commit: <code>d384272cd5320e27b041ae92625040aa6db71a1e</code>. This independent Wiki snapshot is not a manual tagged for spdlog 1.17.0. <a href=\"/docs/spdlog/v1-17-0/en/02-reference/01-license/\">Full original licenses and notices</a>. This presentation, translations and version annotations are unofficial Libx changes.</p><p>No separate documentation license was identified for this Wiki. Under Libx’s operating policy, the software MIT License is applied to the Wiki with this annotation. This is an operational judgment, not newly obtained permission from the rights holder.</p></aside>"},{"kind":"editorial","html":"<aside data-editorial=\"source-note\"><p>The original spd namespace alias is not declared on this page. It is retained without silently adding code.</p></aside>"}]
---



<div data-spdlog-source-body="26-windows-unicode-filenames">

spdlog supports unicode filenames under windows. 
To enable it please uncomment the 
```c++
#define SPDLOG_WCHAR_FILENAMES
```
line in the ```tweakme.h``` file and use the SPDLOG_FILENAME_T (or L..) macro when specifying filenames:

```c++
auto file_logger = spd::rotating_logger_mt("file_logger", L"logs/mylogfile", 1048576 * 5, 3);
auto file_logger2 = spd::rotating_logger_mt("file_logger2", SPDLOG_FILENAME_T("logs/mylogfile2"), 1048576 * 5, 3);
```

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
