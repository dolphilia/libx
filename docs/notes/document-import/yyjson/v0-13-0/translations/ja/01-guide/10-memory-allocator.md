<a id="memory-allocator"></a>
# メモリアロケーター

ライブラリは、libcのメモリ確保関数（malloc/realloc/free）を直接呼び出しません。メモリ確保が必要な場合、yyjsonのAPIは代わりに`alc`という引数を受け取り、呼び出し側がアロケーターを渡せるようにします。`alc`がNULLの場合は、libcの関数を単純に包んだ既定のメモリアロケーターを使います。

独自のメモリアロケーターを使うと、メモリ確保をより細かく制御できます。以下に例を示します。

<a id="single-allocator-for-multiple-json"></a>
## 複数のJSONに1つのアロケーターを使う

複数の小さなJSONを1つずつ解析する必要がある場合、1つのアロケーターを使うことで、メモリを何度も確保するのを避けられます。

サンプルコード：
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

JSONの処理に必要なメモリ量がわからない場合は、動的アロケーターを使えます。
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

<a id="stack-memory-allocator"></a>
## スタックメモリのアロケーター

JSONが十分に小さければ、スタックメモリで読み込みや書き出しを行えます。

サンプルコード：
```c
char buf[128 * 1024]; // stack buffer
yyjson_alc alc;
yyjson_alc_pool_init(&alc, buf, sizeof(buf));

yyjson_doc *doc = yyjson_read_opts(dat, len, 0, &alc, NULL);
...
yyjson_doc_free(doc); // this is optional, as the memory is on stack
```

<a id="use-a-third-party-allocator-library"></a>
## 第三者のアロケーターライブラリを使う

yyjsonには、[jemalloc](https://github.com/jemalloc/jemalloc)、[tcmalloc](https://github.com/google/tcmalloc)、[mimalloc](https://github.com/microsoft/mimalloc)など、第三者の高性能メモリアロケーターを使えます。次のコードを参考にして、独自のアロケーターを実装することもできます。

サンプルコード：
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
