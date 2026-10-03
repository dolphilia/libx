---
title: "言語バインディング"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href="https://github.com/gabime/spdlog/wiki/Language-bindings">原資料</a>。原資料のSHA-256：<code>f68151eac59f6d90167965a46c0ca676bf916f66a03e0c60e3ba962146c2ed0c</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href="/docs/spdlog/v1-17-0/ja/02-reference/01-license/">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>

<div data-spdlog-source-body="14-language-bindings">

# 言語バインディング
## Python
適度な長さのログメッセージ（1000バイト未満）では、spdlogが1回のログ処理を完了するのにかかる時間は、Python標準loggingのロガー（FileLogger）が必要とする時間の約**4%（非同期モード有効時）**、**7%（同期モード）**です。

### pypi.orgからのインストール

`pip install spdlog`

### ソース
GitHubリポジトリ：[spdlog-python](https://github.com/bodgergely/spdlog-python)

### 機能

* 非同期モードのサポート
* ConsoleLogger
* FileLogger
* DailyLogger
* RotatingLogger
* SyslogLogger
* LogLevels
* Sinks

未対応：
* 文字列の書式化

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
