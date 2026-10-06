---
title: "Memory Allocator"
documentId: "yyjson:01-guide/10-memory-allocator.md"
order: 10
licenseSource: "yyjson-fixed"
toc: {"maxLevel": 6}
documentContext: [{"kind": "source", "html": "<p>yyjson 0.13.0, fixed commit 6447536015f3d600f3d65323b10976103b337ca7. By YaoYuan and yyjson contributors. <a href=\"https://github.com/ibireme/yyjson/blob/6447536015f3d600f3d65323b10976103b337ca7/doc/API.md#L1685-L1798\">Fixed official original</a>. <a href=\"/docs/yyjson/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Libxによる非公式編集・日本語訳です。固定Markdown7資料とSVG7図を保持し、利用ガイド16ページが日本語訳の対象です。更新履歴・原著Performance TODO・原MIT通知は英語原文参照です。Libxの運用方針に基づき、意味のまとまった節分割・見出し・内部参照・静的な図の配置を調整しています。</p>"}, {"kind": "editorial", "html": "<p>原著のPerformance.mdはTODOのみで未執筆です。READMEの性能図表と2020年のレポートは固定原文のまま提供し、原著の制限・注意書きも保持しています。生成Doxygenの全シンボル一覧、第三者テーマ、対話型ベンチマークや構造図の編集ファイルは収録せず、<a href=\"https://ibireme.github.io/yyjson/doc/doxygen/html/\">公式文書</a>と原稿中の参照リンクで補います。原文の技術監査やサンプルプログラムの実行は行っていません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/yyjson/source/v0-13-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定Markdown7資料とSVG7図、英語原文19ページ・非公式日本語訳16ガイドの編集原稿、再生成入力、原MIT通知、共有ビルドコードと再構築手順を含みます。更新履歴・原著Performance TODO・MIT通知の3資料は未翻訳の英語原文です。各ファイルの条件を参照してください。</p>"}]
---
# Memory Allocator
The library does not directly call libc's memory allocation functions (malloc/realloc/free). Instead, when memory allocation is required, yyjson's API takes a parameter named `alc` that allows the caller to pass in an allocator. If the `alc` is NULL, yyjson will use the default memory allocator, which is a simple wrapper of libc's functions.

Using a custom memory allocator allows you to have more control over memory allocation, here are a few examples:


## Single allocator for multiple JSON
If you need to parse multiple small JSON one by one, you can use a single allocator to avoid multiple memory allocations.

Sample code:
```c
// max data size for single JSON
size_t max_json_size = 64 * 1024;
// calculate the max memory usage for a single JSON
size_t buf_size = yyjson_read_max_memory_usage(max_json_size, 0);
// create a buffer for allocator
void *buf = malloc(buf_size);
// set up the allocator with buffer
yyjson_alc alc;
yyjson_alc_pool_init(&alc, buf, buf_size);

// read multiple JSON using one allocator
for (int i = 0; i < your_json_file_count; i++) {
    const char *your_json_file_path = ...;
    yyjson_doc *doc = yyjson_read_file(your_json_file_path, 0, &alc, NULL);
    ...
    yyjson_doc_free(doc);
}

// free the buffer
free(buf);
```

If you are not sure about the amount of memory required to process JSON, you can use the dynamic allocator.
```c
// create a dynamic allocator
yyjson_alc *alc = yyjson_alc_dyn_new();

// read multiple JSON using one allocator
for (int i = 0; i < your_json_file_count; i++) {
    const char *your_json_file_path = ...;
    yyjson_doc *doc = yyjson_read_file(your_json_file_path, 0, alc, NULL);
    ...
    yyjson_doc_free(doc);
}

// free the allocator
yyjson_alc_dyn_free(alc);
```



## Stack memory allocator
If the JSON is small enough, you can use stack memory to read or write it.

Sample code:
```c
char buf[128 * 1024]; // stack buffer
yyjson_alc alc;
yyjson_alc_pool_init(&alc, buf, sizeof(buf));

yyjson_doc *doc = yyjson_read_opts(dat, len, 0, &alc, NULL);
...
yyjson_doc_free(doc); // this is optional, as the memory is on stack
```

## Use a third-party allocator library
You can use a third-party high-performance memory allocator for yyjson, such as [jemalloc](https://github.com/jemalloc/jemalloc), [tcmalloc](https://github.com/google/tcmalloc), [mimalloc](https://github.com/microsoft/mimalloc). You can also refer to the following code to implement your own allocator.

Sample code:
```c
// Use https://github.com/microsoft/mimalloc

#include <mimalloc.h>

// same as malloc(size)
static void *priv_malloc(void *ctx, size_t size) {
    return mi_malloc(size);
}

// same as realloc(ptr, size)
// `old_size` is the size of the originally allocated memory
static void *priv_realloc(void *ctx, void *ptr, size_t old_size, size_t size) {
    return mi_realloc(ptr, size);
}

// same as free(ptr)
static void priv_free(void *ctx, void *ptr) {
    mi_free(ptr);
}

// the allocator object
static const yyjson_alc PRIV_ALC = {
    priv_malloc,
    priv_realloc,
    priv_free,
    NULL // `ctx` which will be passed into the functions above
};

// Read with custom allocator
yyjson_doc *doc = yyjson_read_opts(dat, len, 0, &PRIV_ALC, NULL);
...
yyjson_doc_free(doc);

// Write with custom allocator
yyjson_alc *alc = &PRIV_ALC;
char *json = yyjson_write_opts(doc, 0, alc, NULL, NULL);
...
alc->free(alc->ctx, json);

```



