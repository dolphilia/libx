---
title: "実行中にsinkを追加する際の注意"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href=\"https://github.com/gabime/spdlog/wiki/Note-for-adding-sinks-on-the-fly\">原資料</a>。原資料のSHA-256：<code>d2b87f7fdb6e34ae9542dbb57a1da40a7f6f07f22749f4419e3e70a2b1c59dad</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href=\"/docs/spdlog/v1-17-0/ja/02-reference/01-license/\">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>"}]
---



<div data-spdlog-source-body="17-note-for-adding-sinks-on-the-fly">

私たちは、元のログ記録を維持しながら、ログメッセージを別の形式（JSONやMQTT）へ再処理できるよう、ログにコールバックsinkを追加する必要がありました。C++標準を隅々まで知らなかったため、小さな落とし穴に気付きました。sinkを追加するときは、ロガーの `sinks()` へアクセスする方法に注意してください。次の方法では動作しません。

```cpp
auto sinks = log_->sinks();
sinks.push_back(std::make_shared<spdlog::sinks::callback_sink<std::mutex> >([this](const spdlog::details::log_msg& msg) {this->LogCallback(msg);}));
```

`"auto sinks = ..."` はsinkのvectorのコピーを取得するため、ロガー内のsinkのvectorを変更していません。C++コンパイラーは、実際にはC++標準どおりに動作しています。`"auto var = xyz"` は参照を返すものではなく、右辺オブジェクトのコピーコンストラクターを呼び出します。

`auto&`、または `common.h` で定義されている元のsink_ptr型を使う必要があります。ただし、vectorへの参照でなければなりません。

```cpp
auto& sinks = log_->sinks();
sinks.push_back( .....etc
```

この説明が、ほかの方の1時間の悩みを省ければ幸いです。

---

詳細は[#3014](https://github.com/gabime/spdlog/issues/3014)を参照してください。

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
