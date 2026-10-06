---
title: "Default logger"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>Unofficial presentation of the official spdlog Wiki snapshot of 2025-10-15. <a href="https://github.com/gabime/spdlog/wiki/Default-logger">Original source</a>. Source SHA-256: <code>eb56a2bfbb54a847b359b6431279a23d3b861972e8ef3925d4adcba977d50dee</code>. Software commit: <code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>. Wiki commit: <code>d384272cd5320e27b041ae92625040aa6db71a1e</code>. This independent Wiki snapshot is not a manual tagged for spdlog 1.17.0. <a href="/docs/spdlog/v1-17-0/en/02-reference/01-license/">Full original licenses and notices</a>. This presentation, translations and version annotations are unofficial Libx changes.</p><p>No separate documentation license was identified for this Wiki. Under the approved operating policy, the software MIT License is applied to the Wiki with this annotation. This is an operational judgment, not newly obtained permission from the rights holder.</p></aside>

<div data-spdlog-source-body="07-default-logger">

For convenience, spdlog creates a default global logger (to stdout, colored and multithreaded).

It can be used easily by calling ```spdlog::info(..), spdlog::debug(..), etc``` directly.

Its instance can be replaced to any other logger (shared_ptr):
```c++
spdlog::set_default_logger(some_other_logger);
spdlog::info("Use the new default logger");
```




</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
