---
title: "spdlogでJSONログを設定する"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href="https://github.com/gabime/spdlog/wiki/Setting-up-JSON-logging-with-spdlog">原資料</a>。原資料のSHA-256：<code>e255a28eb890a544519f4aa9c75ffd93ac1ebf5f952d7c0433d8a2342c8f978d</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href="/docs/spdlog/v1-17-0/ja/02-reference/01-license/">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside><aside data-editorial="source-note"><p>原資料の例には、入れ子になったset_pattern式と曲線状の引用符があり、エスケープへの注意も記されています。原資料どおり保持しており、コンパイルの成功や安全なシリアライズを主張していません。</p></aside>

<div data-spdlog-source-body="22-setting-up-json-logging-with-spdlog">

spdlogを使うJSONの例を見かけなかったので、私たちが使った方法を共有します。人間が読めるログと、JSONによる機械可読なログを用意するのは難しくありません。

```cpp
// Set up the opening brace and an array named "log"
// we're setting a global format here but as per the docs you can set this on an individual log as well
spdlog::set_pattern(set_pattern("{\n \"log\": [");

auto mylogger = spdlog::basic_logger_mt("json_logger", "mylog.json");
mylogger->info(""); // this initializes the log file with the opening brace and the "log" array as above

// We have some extra formatting on the log level %l below to keep color coding when dumping json to the console and we use a full ISO 8601 time/date format
std::string jsonpattern = {"{\"time\": \"%Y-%m-%dT%H:%M:%S.%f%z\", \"name\": \"%n\", \"level\": \"%^%l%$\", \"process\": %P, \"thread\": %t, \"message\": \"%v\"},"};

spdlog::set_pattern(jsonpattern);
```

その後は、通常どおり好きな内容を記録します。たとえば次のようにします。
```cpp
mylogger->info(“We have started.”);
```

次のような構造のログエントリーが得られます。ただし、実際にはすべて1行になります。
```json
{
     "time": "2021-01-10T13:44:14.567117-07:00",
     "name": "json_logger",
     "level": "info",
     "process": 6828,
     "thread": 23392,
     "message": "We have started."
}
```

ログメッセージへ入れる内容が有効なJSONであることは、自分で確認する必要があります。必要なら完全なJSONオブジェクトを使い、必要なだけ複雑にできます。多くのC++用JSONライブラリは、JSONとして解析できるstd::stringを出力でき、それをspdlogの引数へ渡せます。また、この例のようにプレーンテキストのメッセージを使うこともできます。

ログ記録が終わったら、"log"配列を閉じる必要があります。私たちはログをdropして、自分たちで片付ける処理も行います。
```cpp
auto mylogger = spdlog::get("json_logger");

// All we're doing below is setting the same log format, without the "," at the end
std::string jsonlastlogpattern = { "{\"time\": \"%Y-%m-%dT%H:%M:%S.%f%z\", \"name\": \"%n\", \"level\": \"%^%l%$\", \"process\": %P, \"thread\": %t, \"message\": \"%v\"}" };
spdlog::set_pattern(jsonlastlogpattern);

// below is our last log entry
mylogger->info("Finished.");

// set the last pattern to close out the "log" json array and the closing brace
spdlog::set_pattern("]\n}");

// this writes out the closed array to the file
mylogger->info("");
spdlog::drop("json_logger");
```

最終的に、次のようなログファイルになります。私たちの設定・drop処理は、実際の作業とは別のスレッドで行うため、スレッドIDが異なります。
```json
{
   "log": [
      {
         "time": "2021-01-10T13:44:14.567117-07:00",
         "name": "json_logger",
         "level": "info",
         "process": 6828,
         "thread": 23392,
         "message": "We have started."
      },
      {
         "time": "2021-01-10T13:44:23.932518-07:00",
         "name": "json_logger",
         "level": "info",
         "process": 6828,
         "thread": 8048,
         "message": "We are doing something."
      },
      {
         "time": "2021-01-10T13:44:26.927726-07:00",
         "name": "json_logger",
         "level": "info",
         "process": 6828,
         "thread": 8048,
         "message": "Look a number 123.456"
      },
      {
         "time": "2021-01-10T13:44:29.631340-07:00",
         "name": "json_logger",
         "level": "info",
         "process": 6828,
         "thread": 23392,
         "message": "Finished."
      }
   ]
}
```

コンパイル時に有効にした最小ログレベルに注意してください。"info"を無効にしている場合、最初のJSONの設定と最後に閉じる処理では、より高い重大度を使う必要があります。

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
