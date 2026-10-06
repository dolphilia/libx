---
title: "Data Structures"
documentId: "yyjson:01-guide/16-data-structures.md"
order: 16
licenseSource: "yyjson-fixed"
toc: {"maxLevel": 6}
documentContext: [{"kind": "source", "html": "<p>yyjson 0.13.0, fixed commit 6447536015f3d600f3d65323b10976103b337ca7. By YaoYuan and yyjson contributors. <a href=\"https://github.com/ibireme/yyjson/blob/6447536015f3d600f3d65323b10976103b337ca7/doc/DataStructure.md\">Fixed official original</a>. <a href=\"/docs/yyjson/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Libxによる非公式編集・日本語訳です。固定Markdown7資料とSVG7図を保持し、利用ガイド16ページが日本語訳の対象です。更新履歴・原著Performance TODO・原MIT通知は英語原文参照です。Libxの運用方針に基づき、意味のまとまった節分割・見出し・内部参照・静的な図の配置を調整しています。</p>"}, {"kind": "editorial", "html": "<p>原著のPerformance.mdはTODOのみで未執筆です。READMEの性能図表と2020年のレポートは固定原文のまま提供し、原著の制限・注意書きも保持しています。生成Doxygenの全シンボル一覧、第三者テーマ、対話型ベンチマークや構造図の編集ファイルは収録せず、<a href=\"https://ibireme.github.io/yyjson/doc/doxygen/html/\">公式文書</a>と原稿中の参照リンクで補います。原文の技術監査やサンプルプログラムの実行は行っていません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/yyjson/source/v0-13-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定Markdown7資料とSVG7図、英語原文19ページ・非公式日本語訳16ガイドの編集原稿、再生成入力、原MIT通知、共有ビルドコードと再構築手順を含みます。更新履歴・原著Performance TODO・MIT通知の3資料は未翻訳の英語原文です。各ファイルの条件を参照してください。</p>"}]
---
Data Structures
===============

yyjson consists of two types of data structures: immutable and mutable.

|          | Immutable  | Mutable        |
|----------|------------|----------------|
| Document | yyjson_doc | yyjson_mut_doc |
| Value    | yyjson_val | yyjson_mut_val |

- Immutable data structures are returned when reading a JSON document. They cannot be modified.
- Mutable data structures are created when building a JSON document. They can be modified.
- yyjson also provides some functions to convert between these two types of data structures.

Please note that the data structures described in this document are considered private, and it is recommended to use the public API to access them.

---------------
## Immutable Value
Each JSON value is stored in an immutable `yyjson_val` struct:
```c
struct yyjson_val {
    uint64_t tag;
    union {
        uint64_t    u64;
        int64_t     i64;
        double      f64;
        const char *str;
        void       *ptr;
        size_t      ofs;
    } uni;
}
```
<figure class="yyjson-figure"><img src="/docs/yyjson/source/v0-13-0/images/struct_ival.svg" alt="yyjson_val"><figcaption><a href="/docs/yyjson/source/v0-13-0/images/struct_ival.svg">Original image / 図の原寸表示</a></figcaption></figure>

The type of the value is stored in the lower 8 bits of the `tag`.<br/>
The size of the value, such as string length, object size, or array size, is stored in the higher 56 bits of the `tag`.

Modern 64-bit processors are typically limited to supporting fewer than 64 bits for RAM addresses ([Wikipedia](https://en.wikipedia.org/wiki/RAM_limit)). For example, Intel64, AMD64, and ARMv8 have a 52-bit (4PB) physical address limit. Therefore, it is safe to store the type and size information within the 64-bit `tag`.

## Immutable Document
A JSON document stores all strings in a **contiguous** memory area.<br/> 
Each string is unescaped in-place and ended with a null-terminator.<br/>
For example:

<figure class="yyjson-figure"><img src="/docs/yyjson/source/v0-13-0/images/struct_idoc1.svg" alt="yyjson_doc"><figcaption><a href="/docs/yyjson/source/v0-13-0/images/struct_idoc1.svg">Original image / 図の原寸表示</a></figcaption></figure>


A JSON document stores all values in another **contiguous** memory area.<br/>
The `object` and `array` containers store their own memory usage, allowing easy traversal of the child values.<br/>
For example:

<figure class="yyjson-figure"><img src="/docs/yyjson/source/v0-13-0/images/struct_idoc2.svg" alt="yyjson_doc"><figcaption><a href="/docs/yyjson/source/v0-13-0/images/struct_idoc2.svg">Original image / 図の原寸表示</a></figcaption></figure>

---------------
## Mutable Value
Each mutable JSON value is stored in an `yyjson_mut_val` struct:
```c
struct yyjson_mut_val {
    uint64_t tag;
    union {
        uint64_t    u64;
        int64_t     i64;
        double      f64;
        const char *str;
        void       *ptr;
        size_t      ofs;
    } uni;
    yyjson_mut_val *next;
}
```
<figure class="yyjson-figure"><img src="/docs/yyjson/source/v0-13-0/images/struct_mval.svg" alt="yyjson_mut_val"><figcaption><a href="/docs/yyjson/source/v0-13-0/images/struct_mval.svg">Original image / 図の原寸表示</a></figcaption></figure>

The `tag` and `uni` fields are the same as the immutable value, and the `next` field is used to build a linked list.


## Mutable Document
A mutable JSON document is composed of multiple `yyjson_mut_val`.

The child values of an `object` or `array` are linked as a cycle,<br/>
the parent holds the **tail** of the circular linked list, enabling yyjson to perform operations `append`, `prepend` and `remove_first` in constant time.

For example:

<figure class="yyjson-figure"><img src="/docs/yyjson/source/v0-13-0/images/struct_mdoc.svg" alt="yyjson_mut_doc"><figcaption><a href="/docs/yyjson/source/v0-13-0/images/struct_mdoc.svg">Original image / 図の原寸表示</a></figcaption></figure>


---------------
## Memory Management

A JSON document (`yyjson_doc`, `yyjson_mut_doc`) is responsible for managing the memory of all its JSON values and strings. When a document is no longer needed, it is important for the user to call `yyjson_doc_free()` or `yyjson_mut_doc_free()` to free the memory associated with it.

A JSON value (`yyjson_val`, `yyjson_mut_val`) has the same lifetime as its document. The memory is managed by its
document and cannot be freed independently.

For more information, refer to the API documentation.
