---
title: "Makefile Only"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>Unofficial presentation of the official spdlog Wiki snapshot of 2025-10-15. <a href="https://github.com/gabime/spdlog/wiki/Makefile-Only">Original source</a>. Source SHA-256: <code>4f003451c8a1771b8a6a765658db07c54abfe4ebcaa55ea58c25ce5b1fc210cd</code>. Software commit: <code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>. Wiki commit: <code>d384272cd5320e27b041ae92625040aa6db71a1e</code>. This independent Wiki snapshot is not a manual tagged for spdlog 1.17.0. <a href="/docs/spdlog/v1-17-0/en/02-reference/01-license/">Full original licenses and notices</a>. This presentation, translations and version annotations are unofficial Libx changes.</p><p>No separate documentation license was identified for this Wiki. Under the approved operating policy, the software MIT License is applied to the Wiki with this annotation. This is an operational judgment, not newly obtained permission from the rights holder.</p></aside>

<div data-spdlog-source-body="16-makefile-only">

### Makefile

The library can also be utilized via Makefile like so:

Makefile
```Makefile
LDFLAGS += -L/path/to/lib -lspdlog
```

main.cpp
```main.cpp
#define SPDLOG_COMPILED_LIB 1
#include "spdlog/spdlog.h"

// ... lots of amazing code.
```

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
