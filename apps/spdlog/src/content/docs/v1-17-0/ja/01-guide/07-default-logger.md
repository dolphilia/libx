---
title: "デフォルトロガー"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href="https://github.com/gabime/spdlog/wiki/Default-logger">原資料</a>。原資料のSHA-256：<code>eb56a2bfbb54a847b359b6431279a23d3b861972e8ef3925d4adcba977d50dee</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href="/docs/spdlog/v1-17-0/ja/02-reference/01-license/">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>

<div data-spdlog-source-body="07-default-logger">

spdlogは、手軽に使えるように、デフォルトのグローバルロガー（stdoutへの出力、色付き、マルチスレッド対応）を作成します。

`spdlog::info(..)` や `spdlog::debug(..)` などを直接呼び出すことで、簡単に利用できます。

そのインスタンスは、任意の別のロガー（shared_ptr）に置き換えられます。
```c++
spdlog::set_default_logger(some_other_logger);
spdlog::info("Use the new default logger");
```

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
