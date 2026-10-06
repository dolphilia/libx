---
title: "API Design"
documentId: "yyjson:01-guide/02-api-design.md"
order: 2
licenseSource: "yyjson-fixed"
toc: {"maxLevel": 6}
documentContext: [{"kind": "source", "html": "<p>yyjson 0.13.0, fixed commit 6447536015f3d600f3d65323b10976103b337ca7. By YaoYuan and yyjson contributors. <a href=\"https://github.com/ibireme/yyjson/blob/6447536015f3d600f3d65323b10976103b337ca7/doc/API.md#L1-L75\">Fixed official original</a>. <a href=\"/docs/yyjson/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Libxによる非公式編集・日本語訳です。固定Markdown7資料とSVG7図を保持し、利用ガイド16ページが日本語訳の対象です。更新履歴・原著Performance TODO・原MIT通知は英語原文参照です。Libxの運用方針に基づき、意味のまとまった節分割・見出し・内部参照・静的な図の配置を調整しています。</p>"}, {"kind": "editorial", "html": "<p>原著のPerformance.mdはTODOのみで未執筆です。READMEの性能図表と2020年のレポートは固定原文のまま提供し、原著の制限・注意書きも保持しています。生成Doxygenの全シンボル一覧、第三者テーマ、対話型ベンチマークや構造図の編集ファイルは収録せず、<a href=\"https://ibireme.github.io/yyjson/doc/doxygen/html/\">公式文書</a>と原稿中の参照リンクで補います。原文の技術監査やサンプルプログラムの実行は行っていません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/yyjson/source/v0-13-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定Markdown7資料とSVG7図、英語原文19ページ・非公式日本語訳16ガイドの編集原稿、再生成入力、原MIT通知、共有ビルドコードと再構築手順を含みます。更新履歴・原著Performance TODO・MIT通知の3資料は未翻訳の英語原文です。各ファイルの条件を参照してください。</p>"}]
---
API
===

This document contains all the API usage and examples for the yyjson library.


# API Design

## API prefix

All public functions and structs are prefixed with `yyjson_`, and all constants are prefixed with `YYJSON_`.

## API for immutable/mutable data

The library has 2 types of data structures: immutable and mutable:

|          | Immutable  | Mutable        |
|----------|------------|----------------|
| Document | yyjson_doc | yyjson_mut_doc |
| Value    | yyjson_val | yyjson_mut_val |

When reading a JSON, yyjson returns immutable documents and values.<br/>
When building a JSON, yyjson creates mutable documents and values.<br/>
The document holds the memory for all its JSON values and strings.<br/>

For most immutable APIs, you can just add a `mut` after `yyjson_` to get the mutable version, for example:
```c
char *yyjson_write(yyjson_doc *doc, ...);
char *yyjson_mut_write(yyjson_mut_doc *doc, ...);

bool yyjson_is_str(const yyjson_val *val);
bool yyjson_mut_is_str(const yyjson_mut_val *val);
```

The library also provides some functions to convert values between immutable and mutable:<br/>

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

## API for string
The library supports strings with or without null-terminator (`\0`).<br/>
When you need to use a string without a null-terminator or when you explicitly know the length of the string, you can use the function that ends with `n`, for example:
```c
// null-terminator is required
bool yyjson_equals_str(const yyjson_val *val, const char *str);
// null-terminator is optional
bool yyjson_equals_strn(const yyjson_val *val, const char *str, size_t len);
```

When creating JSON, yyjson treats strings as constants for better performance. However, if your string will be modified, you should use a function with a `cpy` to copy the string to the document, for example:
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

