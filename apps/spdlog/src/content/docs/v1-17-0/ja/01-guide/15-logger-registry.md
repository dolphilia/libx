---
title: "ロガーレジストリ"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href="https://github.com/gabime/spdlog/wiki/Logger-registry">原資料</a>。原資料のSHA-256：<code>ee3bce045fcd74fd092d50d21d1ba79fcb53dec6a5c213e456d0f3b0f491204c</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href="/docs/spdlog/v1-17-0/ja/02-reference/01-license/">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>

<div data-spdlog-source-body="15-logger-registry">

spdlogは、作成したロガーのグローバルなレジストリを、プロセスごとに管理します。

目的は、ロガーを受け渡さなくても、プロジェクトのどこからでも簡単にアクセスできるようにすることです。
```c++
spdlog::get("logger1")->info("hello");
.. 
.. 
some other source file..
..
auto l = spdlog::get("logger1");
l->info("hello again");
```

ロガーが見つからなければ、空の共有ポインターを返します。`if(l)` を使うと、ポインター `l` が有効かどうか確認できます。

### 新しいロガーの登録
通常、ロガーは自動的に登録されるため、登録する必要はありません。

手動で作成したロガー（spdlog.hのファクトリ関数で作成していないもの）を登録するには、`register_logger(std::shared_ptr<logger>)` 関数を使います。
```c++
spdlog::register_logger(some_logger);
```
これにより、`some_logger` がその名前で登録されます。

### レジストリでの衝突
レジストリに既に存在する名前で登録しようとすると、spdlogは `spdlog::spdlog_ex` 例外を送出します。

### レジストリからのロガーの削除
"drop()"関数を使うと、ロガーをレジストリから削除できます。

そのロガーを指すほかのshared_ptrが存在しなければ、ロガーは閉じられ、すべてのリソースが解放されます。
```c++
spdlog::drop("logger_name");
//or remove them all
spdlog::drop_all()
```

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
