---
title: "Preventing undefined thread ids in child processes"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>Unofficial presentation of the official spdlog Wiki snapshot of 2025-10-15. <a href="https://github.com/gabime/spdlog/wiki/Preventing-undefined-thread-ids-in-child-processes">Original source</a>. Source SHA-256: <code>ecaf833b4deb534067c70721119491c65e0eba2674d2fad794d9edfc70f3b16e</code>. Software commit: <code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>. Wiki commit: <code>d384272cd5320e27b041ae92625040aa6db71a1e</code>. This independent Wiki snapshot is not a manual tagged for spdlog 1.17.0. <a href="/docs/spdlog/v1-17-0/en/02-reference/01-license/">Full original licenses and notices</a>. This presentation, translations and version annotations are unofficial Libx changes.</p><p>No separate documentation license was identified for this Wiki. Under the approved operating policy, the software MIT License is applied to the Wiki with this annotation. This is an operational judgment, not newly obtained permission from the rights holder.</p></aside>

<div data-spdlog-source-body="19-preventing-undefined-thread-ids-in-child-processes">

By default spdlog saves thread ids in thread local storage to gain a few micros for each call, but if your program forks, you **must** uncomment the ```SPDLOG_DISABLE_TID_CACHING``` flag in [tweakme.h](https://github.com/gabime/spdlog/blob/master/include/spdlog/tweakme.h).

This will prevent undefined thread ids in child log messages:

```c++
#define SPDLOG_DISABLE_TID_CACHING
```


</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
