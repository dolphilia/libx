---
title: "Makefileのみを使う"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href="https://github.com/gabime/spdlog/wiki/Makefile-Only">原資料</a>。原資料のSHA-256：<code>4f003451c8a1771b8a6a765658db07c54abfe4ebcaa55ea58c25ce5b1fc210cd</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href="/docs/spdlog/v1-17-0/ja/02-reference/01-license/">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>

<div data-spdlog-source-body="16-makefile-only">

### Makefile

このライブラリは、次のようにMakefileからも利用できます。

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
