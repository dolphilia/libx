---
title: "エラー処理"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href="https://github.com/gabime/spdlog/wiki/Error-handling">原資料</a>。原資料のSHA-256：<code>1357f3d73272b2d9665d106d5aa1dc5991308a19f3156f05492b3245898a3f5b</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href="/docs/spdlog/v1-17-0/ja/02-reference/01-license/">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>

<div data-spdlog-source-body="08-error-handling">

spdlogは、ログの記録中に例外を**送出しません**（[39cdd08](https://github.com/gabime/spdlog/tree/39cdd08a5475c63959174747a140de86c24e4849)以降）。

ロガーやsinkの構築中は、エラーが致命的と見なされるため、例外を送出する可能性があります。

ログの記録中にエラーが発生すると、ライブラリはstderrへエラーメッセージを表示します。画面がエラーメッセージで埋まるのを避けるため、ロガーごとに毎分1メッセージに制限しています。

この動作は、`spdlog::set_error_handler(new_handler_fun)` または `logger->set_error_handler(new_handler_fun)` の呼び出しで変更できます。

**エラーハンドラーをグローバルに変更する：**
```c++
    spdlog::set_error_handler([](const std::string& msg) {
        std::cerr << "my err handler: " << msg << std::endl;
    });
```

**特定のロガーについて変更する：**
```c++
    critical_logger->set_error_handler([](const std::string& msg) {
        throw std::runtime_error(msg);
    });

```

**デフォルトのエラーハンドラー**

`_default_err_handler` は、次を使ってエラーを表示します。
```c++
    fmt::print(stderr, "[*** LOG ERROR ***] [{}] [{}] {}\n", date_buf, name(), msg);
```

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
