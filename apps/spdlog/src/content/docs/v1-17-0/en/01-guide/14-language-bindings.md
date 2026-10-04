---
title: "Language bindings"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>Unofficial presentation of the official spdlog Wiki snapshot of 2025-10-15. <a href=\"https://github.com/gabime/spdlog/wiki/Language-bindings\">Original source</a>. Source SHA-256: <code>f68151eac59f6d90167965a46c0ca676bf916f66a03e0c60e3ba962146c2ed0c</code>. Software commit: <code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>. Wiki commit: <code>d384272cd5320e27b041ae92625040aa6db71a1e</code>. This independent Wiki snapshot is not a manual tagged for spdlog 1.17.0. <a href=\"/docs/spdlog/v1-17-0/en/02-reference/01-license/\">Full original licenses and notices</a>. This presentation, translations and version annotations are unofficial Libx changes.</p><p>No separate documentation license was identified for this Wiki. Under Libx’s operating policy, the software MIT License is applied to the Wiki with this annotation. This is an operational judgment, not newly obtained permission from the rights holder.</p></aside>"}]
---



<div data-spdlog-source-body="14-language-bindings">

# Language binding
## Python
On a reasonably sized log message (under 1000 bytes) spdlog will take to complete a single log transaction around **4% (async mode enabled)** and **7% (sync mode)** of the time required by python's standard logging logger (FileLogger).
### Installation from pypi.org

`pip install spdlog`

### Source
GitHub repo: [spdlog-python](https://github.com/bodgergely/spdlog-python)
### Features

* Async mode support
* ConsoleLogger
* FileLogger
* DailyLogger
* RotatingLogger
* SyslogLogger
* LogLevels
* Sinks

Missing:
* String formatting


</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
