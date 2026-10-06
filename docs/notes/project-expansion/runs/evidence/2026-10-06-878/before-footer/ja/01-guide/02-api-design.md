---
title: "APIの設計"
documentId: "yyjson:01-guide/02-api-design.md"
order: 2
licenseSource: "yyjson-fixed"
toc: {"maxLevel": 6}
documentContext: [{"kind": "source", "html": "<p>yyjson 0.13.0, fixed commit 6447536015f3d600f3d65323b10976103b337ca7. By YaoYuan and yyjson contributors. <a href=\"https://github.com/ibireme/yyjson/blob/6447536015f3d600f3d65323b10976103b337ca7/doc/API.md#L1-L75\">Fixed official original</a>. <a href=\"/docs/yyjson/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Libxによる非公式編集・日本語訳です。固定Markdown7資料とSVG7図を保持し、利用ガイド16ページが日本語訳の対象です。更新履歴・原著Performance TODO・原MIT通知は英語原文参照です。Libxの運用方針に基づき、意味のまとまった節分割・見出し・内部参照・静的な図の配置を調整しています。</p>"}, {"kind": "editorial", "html": "<p>原著のPerformance.mdはTODOのみで未執筆です。READMEの性能図表と2020年のレポートは固定原文のまま提供し、原著の制限・注意書きも保持しています。生成Doxygenの全シンボル一覧、第三者テーマ、対話型ベンチマークや構造図の編集ファイルは収録せず、<a href=\"https://ibireme.github.io/yyjson/doc/doxygen/html/\">公式文書</a>と原稿中の参照リンクで補います。原文の技術監査やサンプルプログラムの実行は行っていません。</p>"}]
---
API
===

この文書には、yyjsonライブラリのすべてのAPIの使い方と例を収録しています。

<a id="api-design"></a>
# APIの設計

<a id="api-prefix"></a>
## APIの接頭辞

公開関数と構造体にはすべて`yyjson_`の接頭辞が付き、定数にはすべて`YYJSON_`の接頭辞が付きます。

<a id="api-for-immutablemutable-data"></a>
## 不変・可変データ用のAPI

ライブラリには、不変と可変の2種類のデータ構造があります。

| |不変|可変|
|---|---|---|
|ドキュメント|yyjson_doc|yyjson_mut_doc|
|値|yyjson_val|yyjson_mut_val|

JSONを読み込むと、yyjsonは不変のドキュメントと値を返します。<br/>
JSONを構築すると、yyjsonは可変のドキュメントと値を作ります。<br/>
ドキュメントは、自身に属するすべてのJSON値と文字列のメモリを保持します。<br/>

不変データ用APIの大半は、`yyjson_`の後に`mut`を加えるだけで可変データ用の版になります。次に例を示します。

```c
char *yyjson_write(yyjson_doc *doc, ...);
char *yyjson_mut_write(yyjson_mut_doc *doc, ...);

bool yyjson_is_str(const yyjson_val *val);
bool yyjson_mut_is_str(const yyjson_mut_val *val);
```


ライブラリは、不変と可変の間で値を変換する関数も提供しています。<br/>

```c
// doc -> mut_doc
yyjson_mut_doc *yyjson_doc_mut_copy(const yyjson_doc *doc, ...);
// val -> mut_val
yyjson_mut_val *yyjson_val_mut_copy(const yyjson_val *val, ...);

// mut_doc -> doc
yyjson_doc *yyjson_mut_doc_imut_copy(const yyjson_mut_doc *doc, ...);
// mut_val -> val
yyjson_doc *yyjson_mut_val_imut_copy(const yyjson_mut_val *val, ...);
```


<a id="api-for-string"></a>
## 文字列用のAPI

ライブラリは、NUL終端（`\0`）のある文字列とない文字列の両方に対応します。<br/>
NUL終端のない文字列を使う場合や、文字列の長さが明確に分かっている場合は、末尾が`n`の関数を使えます。次に例を示します。

```c
// null-terminator is required
bool yyjson_equals_str(const yyjson_val *val, const char *str);
// null-terminator is optional
bool yyjson_equals_strn(const yyjson_val *val, const char *str, size_t len);
```


JSONの作成時、yyjsonは性能を高めるために文字列を定数として扱います。ただし、文字列を後で変更する場合は、`cpy`を含む関数でドキュメントに文字列をコピーする必要があります。次に例を示します。

```c
// reference only, null-terminated is required
yyjson_mut_val *yyjson_mut_str(yyjson_mut_doc *doc, const char *str);
// reference only, null-terminator is optional
yyjson_mut_val *yyjson_mut_strn(yyjson_mut_doc *doc, const char *str, size_t len);

// copied, null-terminated is required
yyjson_mut_val *yyjson_mut_strcpy(yyjson_mut_doc *doc, const char *str);
// copied, null-terminator is optional
yyjson_mut_val *yyjson_mut_strncpy(yyjson_mut_doc *doc, const char *str, size_t len);
```




---------------
