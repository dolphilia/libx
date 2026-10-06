---
title: "概要"
documentId: "yyjson:01-guide/01-introduction.md"
order: 1
licenseSource: "yyjson-fixed"
toc: {"maxLevel": 6}
documentContext: [{"kind": "source", "html": "<p>yyjson 0.13.0, fixed commit 6447536015f3d600f3d65323b10976103b337ca7. By YaoYuan and yyjson contributors. <a href=\"https://github.com/ibireme/yyjson/blob/6447536015f3d600f3d65323b10976103b337ca7/README.md\">Fixed official original</a>. <a href=\"/docs/yyjson/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Libxによる非公式編集・日本語訳です。固定Markdown7資料とSVG7図を保持し、利用ガイド16ページが日本語訳の対象です。更新履歴・原著Performance TODO・原MIT通知は英語原文参照です。Libxの運用方針に基づき、意味のまとまった節分割・見出し・内部参照・静的な図の配置を調整しています。</p>"}, {"kind": "editorial", "html": "<p>原著のPerformance.mdはTODOのみで未執筆です。READMEの性能図表と2020年のレポートは固定原文のまま提供し、原著の制限・注意書きも保持しています。生成Doxygenの全シンボル一覧、第三者テーマ、対話型ベンチマークや構造図の編集ファイルは収録せず、<a href=\"https://ibireme.github.io/yyjson/doc/doxygen/html/\">公式文書</a>と原稿中の参照リンクで補います。原文の技術監査やサンプルプログラムの実行は行っていません。</p>"}]
---
<a id="introduction"></a>
# 概要

[![Build](https://img.shields.io/github/actions/workflow/status/ibireme/yyjson/checks.yml?branch=master&style=flat-square)](https://github.com/ibireme/yyjson/actions/workflows/checks.yml)
[![Codecov](https://img.shields.io/codecov/c/github/ibireme/yyjson/master?style=flat-square)](https://codecov.io/gh/ibireme/yyjson)
[![License](https://img.shields.io/github/license/ibireme/yyjson?color=blue&style=flat-square)](https://github.com/ibireme/yyjson/blob/master/LICENSE)
[![Version](https://img.shields.io/github/v/release/ibireme/yyjson?color=orange&style=flat-square)](https://github.com/ibireme/yyjson/releases)
[![Packaging status](https://img.shields.io/repology/repositories/yyjson.svg?style=flat-square)](https://repology.org/project/yyjson/versions)

ANSI Cで書かれた高性能なJSONライブラリです。

<a id="features"></a>
# 特徴

- **高速**：現代のCPUでは、毎秒数ギガバイトのJSONデータを読み書きできます。
- **移植性**：ANSI C（C89）に準拠し、SIMDを明示的には使用しません。
- **厳密**：[RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259)のJSON標準に準拠し、数値形式の厳密な処理とUTF-8の検証を行います。
- **拡張性**：[JSON5](https://json5.org)の各機能や独自アロケーターを有効にするオプションを用意しています。
- **正確**：`int64`、`uint64`、`double`の数値を正確に読み書きできます。
- **柔軟性**：JSONのネスト段数に制限がなく、`\u0000`文字やNUL終端されていない文字列に対応します。
- **操作**：[JSON Pointer](https://datatracker.ietf.org/doc/html/rfc6901)、[JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902)、[JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7386)を使った検索と変更に対応します。
- **開発者に使いやすい**：`.h`ファイル1つと`.c`ファイル1つだけで簡単に組み込めます。

<a id="limitations"></a>
# 制限

- 配列やオブジェクトは、連結リストのような[データ構造](/docs/yyjson/v0-13-0/en/01-guide/16-data-structures/)で格納されます。そのため、インデックスやキーによる要素へのアクセスは、イテレーターを使う場合より遅くなります。
- オブジェクトのキーは重複を許容し、キーの順序は保持されます。
- JSONの解析結果は不変です。変更するには可変のコピーを作る必要があります。

<a id="performance"></a>
# 性能

ベンチマーク用のプロジェクトとデータセット：[yyjson_benchmark](https://github.com/ibireme/yyjson_benchmark)

JSONのフィールドの大半がコンパイル時に分かっている場合、simdjsonの新しい`On Demand` APIのほうが高速です。
このベンチマーク用プロジェクトはDOM APIだけを検査しています。新しいベンチマークは今後追加する予定です。

<a id="aws-ec2-amd-epyc-7r32-gcc-93"></a>
#### AWS EC2（AMD EPYC 7R32、gcc 9.3）

<figure class="yyjson-figure"><img src="/docs/yyjson/source/v0-13-0/images/perf_reader_ec2.svg" alt="ec2_chart"><figcaption><a href="/docs/yyjson/source/v0-13-0/images/perf_reader_ec2.svg">Original image / 図の原寸表示</a></figcaption></figure>

|twitter.json|解析（GB/s）|文字列化（GB/s）|
|---|---|---|
|yyjson(insitu)|1.80|1.51|
|yyjson|1.72|1.42|
|simdjson|1.52|0.61|
|sajson|1.16|   |
|rapidjson(insitu)|0.77|   |
|rapidjson(utf8)|0.26|0.39|
|cjson|0.32|0.17|
|jansson|0.05|0.11|

<a id="iphone-apple-a14-clang-12"></a>
#### iPhone（Apple A14、clang 12）

<figure class="yyjson-figure"><img src="/docs/yyjson/source/v0-13-0/images/perf_reader_a14.svg" alt="a14_chart"><figcaption><a href="/docs/yyjson/source/v0-13-0/images/perf_reader_a14.svg">Original image / 図の原寸表示</a></figcaption></figure>

|twitter.json|解析（GB/s）|文字列化（GB/s）|
|---|---|---|
|yyjson(insitu)|3.51|2.41|
|yyjson|2.39|2.01|
|simdjson|2.19|0.80|
|sajson|1.74||
|rapidjson(insitu)|0.75| |
|rapidjson(utf8)|0.30|0.58|
|cjson|0.48|0.33|
|jansson|0.09|0.24|

対話型グラフを含む、その他のベンチマークレポート（最終更新日：2020-12-12）

|プラットフォーム|CPU|コンパイラー|OS|レポート|
|---|---|---|---|---|
|Intel NUC 8i5|Core i5-8259U|msvc 2019|Windows 10 2004|[グラフ](https://ibireme.github.io/yyjson_benchmark/reports/Intel_NUC_8i5_msvc_2019.html)|
|Intel NUC 8i5|Core i5-8259U|clang 10.0|Ubuntu 20.04|[グラフ](https://ibireme.github.io/yyjson_benchmark/reports/Intel_NUC_8i5_clang_10.html)|
|Intel NUC 8i5|Core i5-8259U|gcc 9.3|Ubuntu 20.04|[グラフ](https://ibireme.github.io/yyjson_benchmark/reports/Intel_NUC_8i5_gcc_9.html)|
|AWS EC2 c5a.large|AMD EPYC 7R32|gcc 9.3|Ubuntu 20.04|[グラフ](https://ibireme.github.io/yyjson_benchmark/reports/EC2_c5a.large_gcc_9.html)|
|AWS EC2 t4g.medium|Graviton2 (ARM64)|gcc 9.3|Ubuntu 20.04|[グラフ](https://ibireme.github.io/yyjson_benchmark/reports/EC2_t4g.medium_gcc_9.html)|
|Apple iPhone 12 Pro|A14 (ARM64)|clang 12.0|iOS 14|[グラフ](https://ibireme.github.io/yyjson_benchmark/reports/Apple_A14_clang_12.html)|

<a id="for-better-performance-yyjson-prefers"></a>
### より良い性能を得るために、yyjsonが適している環境

* 次の特性を持つ現代のプロセッサー：
    * 命令レベルの並列性が高い
    * 分岐予測が優れている
    * メモリアクセスがアラインメントに沿わない場合のペナルティーが小さい
* 優れた最適化器を備えた現代のコンパイラー（clangなど）

<a id="sample-code"></a>
# サンプルコード

<a id="read-json-string"></a>
### JSON文字列を読み込む

```c
const char *json = "{\"name\":\"Mash\",\"star\":4,\"hits\":[2,2,1,3]}";

// Read JSON and get root
yyjson_doc *doc = yyjson_read(json, strlen(json), 0);
yyjson_val *root = yyjson_doc_get_root(doc);

// Get root["name"]
yyjson_val *name = yyjson_obj_get(root, "name");
printf("name: %s\n", yyjson_get_str(name));
printf("name length:%d\n", (int)yyjson_get_len(name));

// Get root["star"]
yyjson_val *star = yyjson_obj_get(root, "star");
printf("star: %d\n", (int)yyjson_get_int(star));

// Get root["hits"], iterate over the array
yyjson_val *hits = yyjson_obj_get(root, "hits");
size_t idx, max;
yyjson_val *hit;
yyjson_arr_foreach(hits, idx, max, hit) {
    printf("hit%d: %d\n", (int)idx, (int)yyjson_get_int(hit));
}

// Free the doc
yyjson_doc_free(doc);

// All functions accept NULL input, and return NULL on error.
```


<a id="write-json-string"></a>
### JSON文字列を書き出す

```c
// Create a mutable doc
yyjson_mut_doc *doc = yyjson_mut_doc_new(NULL);
yyjson_mut_val *root = yyjson_mut_obj(doc);
yyjson_mut_doc_set_root(doc, root);

// Set root["name"] and root["star"]
yyjson_mut_obj_add_str(doc, root, "name", "Mash");
yyjson_mut_obj_add_int(doc, root, "star", 4);

// Set root["hits"] with an array
int hits_arr[] = {2, 2, 1, 3};
yyjson_mut_val *hits = yyjson_mut_arr_with_sint32(doc, hits_arr, 4);
yyjson_mut_obj_add_val(doc, root, "hits", hits);

// To string, minified
const char *json = yyjson_mut_write(doc, 0, NULL);
if (json) {
    printf("json: %s\n", json); // {"name":"Mash","star":4,"hits":[2,2,1,3]}
    free((void *)json);
}

// Free the doc
yyjson_mut_doc_free(doc);
```


<a id="read-json-file-with-options"></a>
### オプションを指定してJSONファイルを読み込む

```c
// Read JSON file, allowing comments and trailing commas
yyjson_read_flag flg = YYJSON_READ_ALLOW_COMMENTS | YYJSON_READ_ALLOW_TRAILING_COMMAS;
yyjson_read_err err;
yyjson_doc *doc = yyjson_read_file("/tmp/config.json", flg, NULL, &err);

// Iterate over the root object
if (doc) {
    yyjson_val *obj = yyjson_doc_get_root(doc);
    yyjson_obj_iter iter;
    yyjson_obj_iter_init(obj, &iter);
    yyjson_val *key, *val;
    while ((key = yyjson_obj_iter_next(&iter))) {
        val = yyjson_obj_iter_get_val(key);
        printf("%s: %s\n", yyjson_get_str(key), yyjson_get_type_desc(val));
    }
} else {
    printf("read error (%u): %s at position: %ld\n", err.code, err.msg, err.pos);
}

// Free the doc
yyjson_doc_free(doc);
```


<a id="write-json-file-with-options"></a>
### オプションを指定してJSONファイルを書き出す

```c
// Read the JSON file as a mutable doc
yyjson_doc *idoc = yyjson_read_file("/tmp/config.json", 0, NULL, NULL);
yyjson_mut_doc *doc = yyjson_doc_mut_copy(idoc, NULL);
yyjson_mut_val *obj = yyjson_mut_doc_get_root(doc);

// Remove null values in root object
yyjson_mut_obj_iter iter;
yyjson_mut_obj_iter_init(obj, &iter);
yyjson_mut_val *key, *val;
while ((key = yyjson_mut_obj_iter_next(&iter))) {
    val = yyjson_mut_obj_iter_get_val(key);
    if (yyjson_mut_is_null(val)) {
        yyjson_mut_obj_iter_remove(&iter);
    }
}

// Write the JSON with pretty printing, escape unicode
yyjson_write_flag flg = YYJSON_WRITE_PRETTY | YYJSON_WRITE_ESCAPE_UNICODE;
yyjson_write_err err;
yyjson_mut_write_file("/tmp/config.json", doc, flg, NULL, &err);
if (err.code) {
    printf("write error (%u): %s\n", err.code, err.msg);
}

// Free the doc
yyjson_doc_free(idoc);
yyjson_mut_doc_free(doc);
```


<a id="documentation"></a>
# ドキュメント

最新の（未リリースの）文書は[doc](https://github.com/ibireme/yyjson/tree/master/doc)ディレクトリで参照できます。
リリース版について事前生成されたDoxygen HTMLは、次の場所で閲覧できます。

* [ホームページ](https://ibireme.github.io/yyjson/doc/doxygen/html/)
    * [ビルドとテスト](/docs/yyjson/v0-13-0/en/01-guide/15-build-and-test/)
    * [APIとサンプルコード](/docs/yyjson/v0-13-0/en/01-guide/02-api-design/)
    * [データ構造](/docs/yyjson/v0-13-0/en/01-guide/16-data-structures/)
    * [更新履歴](/docs/yyjson/v0-13-0/en/02-reference/01-changelog/)

<a id="packaging-status"></a>
# パッケージ提供状況

[![Packaging status](https://repology.org/badge/vertical-allrepos/yyjson.svg?columns=3)](https://repology.org/project/yyjson/versions)

<a id="built-with-yyjson"></a>
# yyjsonを使って作られたもの

yyjsonをほかの言語から使えるようにするプロジェクトや、主要な機能の内部でyyjsonを使うプロジェクトの、網羅的ではない一覧です。
yyjsonを使うプロジェクトをお持ちでしたら、一覧への追加を提案するPRを気軽に送ってください。

|プロジェクト|言語|説明|
|---|---|---|
|[ssrJSON][]|Python|yyjsonを基盤とする、SIMDで高速化された高性能かつ正確なPythonのJSON解析ライブラリ|
|[py_yyjson][]|Python|yyjsonのPythonバインディング|
|[orjson][]|Python|yyjsonのバックエンドを任意で使えるPython用JSONライブラリ|
|[serin][]|C++ / Python|TOON、JSON、YAMLに対応し、形式をまたいで変換できるC++・Pythonのシリアライズライブラリ|
|[cpp-yyjson][]|C++|yyjsonのバックエンドを持つC++用JSONライブラリ|
|[reflect-cpp][]|C++|構造体からフィールド名を自動取得してシリアライズするC++ライブラリ|
|[xyjson][]|C++|便利な演算子オーバーロードを備えた、yyjsonのC++プロキシーおよびラッパー|
|[yyjsonr][]|R|yyjsonのRバインディング|
|[Ananda][]|Swift|yyjsonを用いたJSONモデルのデコード|
|[ReerJSON][]|Swift|JSONDecoderに代わる、より高速なもの|
|[swift-yyjson][]|Swift|yyjsonを基盤とする高速なSwift用JSONライブラリ|
|[duckdb][]|C++|プロセス内で動作するSQL OLAPデータベース管理システム|
|[fastfetch][]|C|システム情報を見やすく表示する、Cで書かれたneofetchのようなツール|
|[Zrythm][]|C|JSONプロジェクトファイルのシリアライズにyyjsonを使うデジタルオーディオワークステーション|
|[bemorehuman][]|C|推薦を受ける人の固有性を重視する推薦エンジン|
|[mruby-yyjson][]|mruby|mruby向けの、yyjsonを使った効率的なJSON解析とシリアライズ|
|[YYJSON.jl][]|Julia|yyjsonのJuliaバインディング|
|[yyjson-go][]|Go|Goへ変換されたyyjson。CGoを使わず、2〜4倍高速|
|[nim-yyjson][]|Nim|yyjsonの薄いNimバインディング|

<a id="todo-for-v10"></a>
# v1.0に向けたTODO

* [x] ドキュメントページを追加する。
* [x] CIとcodecov用のGitHub workflowを追加する。
* [x] valgrind、sanitizer、fuzzingなどのテストを増やす。
* [x] 検索・変更のためのJSON Pointerに対応する。
* [x] JSONのリーダーとライターに`RAW`型を追加する。
* [x] 実数の出力精度を制限するオプションを追加する。
* [x] JSON5をサポートするオプションを追加する。
* [ ] ストリーミングJSON APIを追加する。
* [ ] 2つのJSONドキュメントの差分を求める関数を追加する。
* [ ] 性能最適化についての文書を追加する。
* [ ] ABIの安定性を確保する。

<a id="license"></a>
# ライセンス

このプロジェクトはMITライセンスで公開されています。

[ssrJSON]: https://github.com/Antares0982/ssrJSON
[py_yyjson]: https://github.com/tktech/py_yyjson
[orjson]: https://github.com/ijl/orjson
[serin]: https://github.com/mohammadraziei/serin
[cpp-yyjson]: https://github.com/yosh-matsuda/cpp-yyjson
[reflect-cpp]: https://github.com/getml/reflect-cpp
[xyjson]: https://github.com/lymslive/xyjson
[yyjsonr]: https://github.com/coolbutuseless/yyjsonr
[Ananda]: https://github.com/nixzhu/Ananda
[ReerJSON]: https://github.com/reers/ReerJSON
[swift-yyjson]: https://github.com/mattt/swift-yyjson
[duckdb]: https://github.com/duckdb/duckdb
[fastfetch]: https://github.com/fastfetch-cli/fastfetch
[Zrythm]: https://github.com/zrythm/zrythm
[bemorehuman]: https://github.com/BeMoreHumanOrg/bemorehuman
[mruby-yyjson]: https://github.com/buty4649/mruby-yyjson
[YYJSON.jl]: https://github.com/bhftbootcamp/YYJSON.jl
[yyjson-go]: https://github.com/dwisiswant0/yyjson
[nim-yyjson]: https://github.com/zystem/nim-yyjson
