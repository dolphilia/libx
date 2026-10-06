---
title: "Preventing child processes from inheriting open log files"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>Unofficial presentation of the official spdlog Wiki snapshot of 2025-10-15. <a href="https://github.com/gabime/spdlog/wiki/Preventing-child-processes-from-inheriting-open-log-files">Original source</a>. Source SHA-256: <code>d72af8fcad7860d625a77f8df16282afa87d7fa7adc25fc7e6f1f5bf5e60d6c6</code>. Software commit: <code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>. Wiki commit: <code>d384272cd5320e27b041ae92625040aa6db71a1e</code>. This independent Wiki snapshot is not a manual tagged for spdlog 1.17.0. <a href="/docs/spdlog/v1-17-0/en/02-reference/01-license/">Full original licenses and notices</a>. This presentation, translations and version annotations are unofficial Libx changes.</p><p>No separate documentation license was identified for this Wiki. Under the approved operating policy, the software MIT License is applied to the Wiki with this annotation. This is an operational judgment, not newly obtained permission from the rights holder.</p></aside>

<div data-spdlog-source-body="18-preventing-child-processes-from-inheriting-open-log-files">

In _tweakme.h_, uncomment the following to prevent child processes from inheriting log file descriptors

```c++
#define SPDLOG_PREVENT_CHILD_FD
```


</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
