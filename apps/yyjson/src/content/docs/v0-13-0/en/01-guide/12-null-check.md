---
title: "Null Check"
documentId: "yyjson:01-guide/12-null-check.md"
order: 12
licenseSource: "yyjson-fixed"
toc: {"maxLevel": 6}
documentContext: [{"kind": "source", "html": "<p>yyjson 0.13.0, fixed commit 6447536015f3d600f3d65323b10976103b337ca7. By YaoYuan and yyjson contributors. <a href=\"https://github.com/ibireme/yyjson/blob/6447536015f3d600f3d65323b10976103b337ca7/doc/API.md#L1809-L1838\">Fixed official original</a>. <a href=\"/docs/yyjson/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Libxによる非公式編集・日本語訳です。固定Markdown7資料とSVG7図を保持し、利用ガイド16ページが日本語訳の対象です。更新履歴・原著Performance TODO・原MIT通知は英語原文参照です。Libxの運用方針に基づき、意味のまとまった節分割・見出し・内部参照・静的な図の配置を調整しています。</p>"}, {"kind": "editorial", "html": "<p>原著のPerformance.mdはTODOのみで未執筆です。READMEの性能図表と2020年のレポートは固定原文のまま提供し、原著の制限・注意書きも保持しています。生成Doxygenの全シンボル一覧、第三者テーマ、対話型ベンチマークや構造図の編集ファイルは収録せず、<a href=\"https://ibireme.github.io/yyjson/doc/doxygen/html/\">公式文書</a>と原稿中の参照リンクで補います。原文の技術監査やサンプルプログラムの実行は行っていません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/yyjson/source/v0-13-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定Markdown7資料とSVG7図、英語原文19ページ・非公式日本語訳16ガイドの編集原稿、再生成入力、原MIT通知、共有ビルドコードと再構築手順を含みます。更新履歴・原著Performance TODO・MIT通知の3資料は未翻訳の英語原文です。各ファイルの条件を参照してください。</p>"}]
---
# Null Check
The library's public APIs perform a `null check` for every input parameter to prevent crashes.

For example, when reading a JSON, you don't need to perform null checks or type checks on each value:
```c
yyjson_doc *doc = yyjson_read(NULL, 0, 0); // doc is NULL
yyjson_val *val = yyjson_doc_get_root(doc); // val is NULL
const char *str = yyjson_get_str(val); // str is NULL
if (!str) printf("err!");
yyjson_doc_free(doc); // do nothing
```

However, if you are certain that a value is non-null and matches the expected type, you can use the `unsafe` prefix API to avoid the null check.

For example, when iterating over an array or object, the value and key must be non-null:
```c
size_t idx, max;
yyjson_val *key, *val;
yyjson_obj_foreach(obj, idx, max, key, val) {
    // this is a valid JSON, so the key must be a valid string
    if (unsafe_yyjson_equals_str(key, "id") &&
        unsafe_yyjson_is_uint(val) &&
        unsafe_yyjson_get_uint(val) == 1234) {
        ...
    }
}
```



