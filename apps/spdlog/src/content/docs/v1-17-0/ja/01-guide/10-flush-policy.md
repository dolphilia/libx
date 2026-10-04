---
title: "フラッシュ方針"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href=\"https://github.com/gabime/spdlog/wiki/Flush-policy\">原資料</a>。原資料のSHA-256：<code>2a3b8cc2b86a1a6a5688903544ea0bb30c289ef61013cbb1a1d280ef5b648c69</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href=\"/docs/spdlog/v1-17-0/ja/02-reference/01-license/\">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>"}]
---



<div data-spdlog-source-body="10-flush-policy">

デフォルトでは、spdlogは良好な性能を得るため、基盤となるlibcの判断にフラッシュのタイミングを任せます。次の方法で、この動作を変更できます。

### 手動フラッシュ
`logger->flush()` 関数を使うと、ロガーに内容のフラッシュを指示できます。ロガーは、基盤となる各sinkの `flush()` 関数を呼び出します。

**注意：** 非同期ロガーの場合、`logger->flush()` はフラッシュ操作を要求するメッセージをキューへ送り、すぐに戻ります。この動作は、メッセージが受信されてフラッシュが完了するまで同期的に待っていた、spdlogの一部の旧版とは異なります。現在は、終了前に `logger->flush()` や `spdlog::shutdown()` を明示的に呼び出す必要はありません。プログラムの終了に伴う破棄時に、自動的に行われます。ただし、`abort()` や `_exit(-1)` のように「即座に」終了する関数の前に、すべての非同期ロガーを手動でフラッシュしたい場合は、それらの関数の前に `spdlog::shutdown()` を呼び出してください。

### 重大度に基づくフラッシュ
自動フラッシュを引き起こす最小ログレベルを設定できます。

たとえば、次の設定では、エラーまたはそれより重大なメッセージが記録されるたびにフラッシュします。
```c++
my_logger->flush_on(spdlog::level::err); 
```

### 時間間隔に基づくフラッシュ
spdlogでは、フラッシュの間隔を設定できます。単一のワーカースレッドが、各ロガーのflush()を定期的に呼び出すことで実装しています。

たとえば、登録済みのすべてのロガーについて、5秒間隔の定期フラッシュを有効にします。
```c++
spdlog::flush_every(std::chrono::seconds(5));
```

**注意：** 定期フラッシュは別のスレッドから行われるため、スレッドセーフなロガーに対してのみ使用してください。

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
