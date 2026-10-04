---
title: "WindowsのUnicodeファイル名"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href=\"https://github.com/gabime/spdlog/wiki/Windows-unicode-filenames\">原資料</a>。原資料のSHA-256：<code>4515b41ba4dbbc627ab5f188755fd3b53e514f551683ff2ecd2f419975faea67</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href=\"/docs/spdlog/v1-17-0/ja/02-reference/01-license/\">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>"},{"kind":"editorial","html":"<aside data-editorial=\"source-note\"><p>原資料のspdという名前空間の別名は、この頁では宣言されていません。コードを黙って追加せず、そのまま保持しています。</p></aside>"}]
---



<div data-spdlog-source-body="26-windows-unicode-filenames">

spdlogは、WindowsでUnicodeのファイル名をサポートしています。有効にするには、`tweakme.h` ファイルの次の行のコメントを外し、ファイル名を指定するときにSPDLOG_FILENAME_T（またはL..）マクロを使ってください。

```c++
#define SPDLOG_WCHAR_FILENAMES
```

```c++
auto file_logger = spd::rotating_logger_mt("file_logger", L"logs/mylogfile", 1048576 * 5, 3);
auto file_logger2 = spd::rotating_logger_mt("file_logger2", SPDLOG_FILENAME_T("logs/mylogfile2"), 1048576 * 5, 3);
```

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
