<a id="writing-json"></a>
# JSONの書き出し

ライブラリは、JSONを書き出す5組の関数を提供しています。<br/>
各関数はJSONドキュメントまたはルート値を入力として受け取り、UTF-8文字列またはファイルを返します。

<a id="write-json-to-string"></a>
## JSONを文字列に書き出す

`doc/val`はJSONドキュメントまたはルート値です。NULLの場合はNULLを返します。<br/>
`flg`は書き出しフラグです。不要なら0を渡します。詳細は書き出しフラグを参照してください。<br/>
`len`は出力長（NUL終端文字を含まない）を受け取るためのポインターです。不要ならNULLを渡します。<br/>
この関数は新しいJSON文字列を返します。エラーが起きた場合はNULLを返します。<br/>
文字列はNUL終端されたUTF-8でエンコードされます。<br/>
不要になったら、`free()`または`alc->free()`で解放する必要があります。

```c
// doc -> str
char *yyjson_write(const yyjson_doc *doc, yyjson_write_flag flg, size_t *len);
// mut_doc -> str
char *yyjson_mut_write(const yyjson_mut_doc *doc, yyjson_write_flag flg, size_t *len);
// val -> str
char *yyjson_val_write(const yyjson_val *val, yyjson_write_flag flg, size_t *len);
// mut_val -> str
char *yyjson_mut_val_write(const yyjson_mut_val *val, yyjson_write_flag flg, size_t *len);
```


サンプルコード1：

```c
yyjson_doc *doc = yyjson_read("[1,2,3]", 7, 0);
char *json = yyjson_write(doc, YYJSON_WRITE_PRETTY, NULL);
printf("%s\n", json);
free(json);
```


サンプルコード2：

```c
yyjson_mut_doc *doc = yyjson_mut_doc_new(NULL);
yyjson_mut_val *arr = yyjson_mut_arr(doc);
yyjson_mut_doc_set_root(doc, arr);
yyjson_mut_arr_add_int(doc, arr, 1);
yyjson_mut_arr_add_int(doc, arr, 2);
yyjson_mut_arr_add_int(doc, arr, 3);
    
char *json = yyjson_mut_write(doc, YYJSON_WRITE_PRETTY, NULL);
printf("%s\n", json);
free(json);
```


<a id="write-json-to-file"></a>
## JSONをファイルに書き出す

`path`は出力JSONファイルのパスです。システム固有の文字エンコーディングによるNUL終端文字列である必要があります。`path`がNULLまたは無効な場合はfalseを返します。ファイルが空でない場合、その内容は破棄されます。<br/>
`doc/val`はJSONドキュメントまたはルート値です。NULLの場合はfalseを返します。<br/>
`flg`は書き出しフラグです。不要なら0を渡します。詳細は書き出しフラグを参照してください。<br/>
`alc`はメモリアロケーターです。不要ならNULLを渡します。詳細はメモリアロケーターを参照してください。<br/>
`err`はエラーメッセージを受け取るためのポインターです。不要ならNULLを渡します。<br/>
この関数は成功するとtrueを返し、エラーが起きた場合はfalseを返します。<br/>

```c
// doc -> file
bool yyjson_write_file(const char *path, const yyjson_doc *doc, yyjson_write_flag flg, const yyjson_alc *alc, yyjson_write_err *err);
// mut_doc -> file
bool yyjson_mut_write_file(const char *path, const yyjson_mut_doc *doc, yyjson_write_flag flg, const yyjson_alc *alc, yyjson_write_err *err);
// val -> file
bool yyjson_val_write_file(const char *path, const yyjson_val *val, yyjson_write_flag flg, const yyjson_alc *alc, yyjson_write_err *err);
// mut_val -> file
bool yyjson_mut_val_write_file(const char *path, const yyjson_mut_val *val, yyjson_write_flag flg, const yyjson_alc *alc, yyjson_write_err *err);
```


サンプルコード：

```c
yyjson_doc *doc = yyjson_read_file("/tmp/test.json", 0, NULL, NULL);
bool suc = yyjson_write_file("tmp/test.json", doc, YYJSON_WRITE_PRETTY, NULL, NULL);
if (suc) printf("OK");
```


<a id="write-json-to-file-pointer"></a>
## JSONをファイルポインターに書き出す

`fp`は出力ファイルポインターです。ファイルの現在位置にデータを書き込みます。<br/>
`fp`がNULLまたは無効な場合はfalseを返します。<br/>
`doc/val`はJSONドキュメントまたはルート値です。NULLの場合はfalseを返します。<br/>
`flg`は書き出しフラグです。不要なら0を渡します。詳細は書き出しフラグを参照してください。<br/>
`alc`はメモリアロケーターです。不要ならNULLを渡します。詳細はメモリアロケーターを参照してください。<br/>
`err`はエラーメッセージを受け取るためのポインターです。不要ならNULLを渡します。<br/>
この関数は成功するとtrueを返し、エラーが起きた場合はfalseを返します。<br/>

```c
// doc -> file
bool yyjson_write_fp(FILE *fp, const yyjson_doc *doc, yyjson_write_flag flg, const yyjson_alc *alc, yyjson_write_err *err);
// mut_doc -> file
bool yyjson_mut_write_fp(FILE *fp, const yyjson_mut_doc *doc, yyjson_write_flag flg, const yyjson_alc *alc, yyjson_write_err *err);
// val -> file
bool yyjson_val_write_fp(FILE *fp, const yyjson_val *val, yyjson_write_flag flg, const yyjson_alc *alc, yyjson_write_err *err);
// mut_val -> file
bool yyjson_mut_val_write_fp(FILE *fp, const yyjson_mut_val *val, yyjson_write_flag flg, const yyjson_alc *alc, yyjson_write_err *err);
```


サンプルコード：

```c
FILE *fp = fdopen(fd, "wb"); // POSIX file descriptor (fd)
bool suc = yyjson_write_fp(fp, doc, YYJSON_WRITE_PRETTY, NULL, NULL);
if (fp) fclose(fp);
if (suc) printf("OK");
```


<a id="write-json-to-buffer"></a>
## JSONをバッファーに書き出す

`buf`は出力バッファーです。NULLの場合は0を返します。<br/>
`buf_len`はバッファーの長さです。小さすぎる場合は0を返します。<br/>
`doc/val`はJSONドキュメントまたはルート値です。NULLの場合は0を返します。<br/>
`flg`は書き出しフラグです。不要なら0を渡します。詳細は書き出しフラグを参照してください。<br/>
`err`はエラーメッセージを受け取るためのポインターです。不要ならNULLを渡します。<br/>
この関数は書き込んだバイト数（NUL終端文字を含まない）を返し、失敗した場合は0を返します。<br/>

この関数はメモリを確保しません。ただし、一時的な作業領域を確保するため、バッファーは最終的なJSONのサイズより大きくする必要があります。

追加の領域は、各値を書き出す間だけ必要になり、後の値に再利用されます。

- 数値：`40`
- 文字列：`16 + (str_len * 6)`
- その他の値：`16`
- ネストの深さ：`16 * max_json_depth`

```c
// doc -> buffer
size_t yyjson_write_buf(char *buf, size_t buf_len, const yyjson_doc *doc, yyjson_write_flag flg, yyjson_write_err *err);
// mut_doc -> buffer
size_t yyjson_mut_write_buf(char *buf, size_t buf_len, const yyjson_mut_doc *doc, yyjson_write_flag flg, yyjson_write_err *err);
// val -> buffer
size_t yyjson_val_write_buf(char *buf, size_t buf_len, const yyjson_val *val, yyjson_write_flag flg, yyjson_write_err *err);
// mut_val -> buffer
size_t yyjson_mut_val_write_buf(char *buf, size_t buf_len, const yyjson_mut_val *val, yyjson_write_flag flg, yyjson_write_err *err);
```


サンプルコード：

```c
char buf[512];
size_t len = yyjson_write_buf(buf, sizeof(buf), doc, YYJSON_WRITE_PRETTY, NULL);
if (len > 0) printf("OK, output:\n%s\n", buf);
```



<a id="write-json-with-options"></a>
## オプションを指定してJSONを書き出す

`doc/val`はJSONドキュメントまたはルート値です。NULLの場合はNULLを返します。<br/>
`flg`は書き出しフラグです。不要なら0を渡します。詳細は書き出しフラグを参照してください。<br/>
`alc`はメモリアロケーターです。不要ならNULLを渡します。詳細はメモリアロケーターを参照してください。<br/>
`len`は出力長（NUL終端文字を含まない）を受け取るためのポインターです。不要ならNULLを渡します。<br/>
`err`はエラーメッセージを受け取るためのポインターです。不要ならNULLを渡します。<br/>

この関数は新しいJSON文字列を返します。エラーが起きた場合はNULLを返します。<br/>
文字列はNUL終端されたUTF-8でエンコードされます。<br/>
不要になったら、free()またはalc->free()で解放する必要があります。

```c
char *yyjson_write_opts(const yyjson_doc *doc, yyjson_write_flag flg, const yyjson_alc *alc, size_t *len, yyjson_write_err *err);

char *yyjson_mut_write_opts(const yyjson_mut_doc *doc, yyjson_write_flag flg, const yyjson_alc *alc, size_t *len, yyjson_write_err *err);

char *yyjson_val_write_opts(const yyjson_val *val, yyjson_write_flag flg, const yyjson_alc *alc, size_t *len, yyjson_write_err *err);

char *yyjson_mut_val_write_opts(const yyjson_mut_val *val, yyjson_write_flag flg, const yyjson_alc *alc, size_t *len, yyjson_write_err *err);
```


サンプルコード：

```c
yyjson_doc *doc = ...;

// init an allocator with stack memory
char buf[64 * 1024];
yyjson_alc alc;
yyjson_alc_pool_init(&alc, buf, sizeof(buf));

// write
size_t len;
yyjson_write_err err;
char *json = yyjson_write_opts(doc, YYJSON_WRITE_PRETTY | YYJSON_WRITE_ESCAPE_UNICODE, &alc, &len, &err);

// get result
if (json) {
    printf("suc: %lu\n%s\n", len, json);
} else {
    printf("err: %u msg:%s\n", err.code, err.msg);
}
alc.free(alc.ctx, json);
```


エラーコード（`yyjson_write_code`）の完全な一覧：

|コード|名前|説明|
|---|---|---|
|0|`YYJSON_WRITE_SUCCESS`|成功。エラーなし。|
|1|`YYJSON_WRITE_ERROR_INVALID_PARAMETER`|NULLのドキュメントなど、無効な引数。|
|2|`YYJSON_WRITE_ERROR_MEMORY_ALLOCATION`|メモリ確保の失敗。|
|3|`YYJSON_WRITE_ERROR_INVALID_VALUE_TYPE`|JSONドキュメント内の値の型が無効。|
|4|`YYJSON_WRITE_ERROR_NAN_OR_INF`|NaNまたはInfinityの数値が現れた。|
|5|`YYJSON_WRITE_ERROR_FILE_OPEN`|ファイルを開けなかった。|
|6|`YYJSON_WRITE_ERROR_FILE_WRITE`|ファイルに書き込めなかった。|
|7|`YYJSON_WRITE_ERROR_INVALID_STRING`|文字列に無効なUnicodeがある。|
|8|`YYJSON_WRITE_ERROR_DEPTH`|ネストの深さが`YYJSON_WRITER_DEPTH_LIMIT`を超えた。|

<a id="writer-flag"></a>
## 書き出しフラグ

ライブラリは、JSONライター用のフラグを用意しています。<br/>
フラグを単独で使うことも、ビット単位の`|`演算子で複数のフラグを組み合わせることもできます。

### **YYJSON_WRITE_NOFLAG = 0**

JSONライターの既定のフラグです。

- JSONを最小化した形式で書き出します。
- `inf`または`nan`の数値が現れるとエラーを報告します。
- 無効なUTF-8文字列が現れるとエラーを報告します。
- Unicodeやスラッシュをエスケープしません。

### **YYJSON_WRITE_PRETTY**

空白4つのインデントで、読みやすく整形してJSONを書き出します。

### **YYJSON_WRITE_PRETTY_TWO_SPACES**

空白2つのインデントで、読みやすく整形してJSONを書き出します。
このフラグは`YYJSON_WRITE_PRETTY`フラグを上書きします。

### **YYJSON_WRITE_ESCAPE_UNICODE**

Unicodeを`\uXXXX`としてエスケープし、出力をASCIIのみにします。例：

```json
["Alizée, 😊"]
["Aliz\\u00E9e, \\uD83D\\uDE0A"]
```


### **YYJSON_WRITE_LOWERCASE_HEX**

`\uXXXX`エスケープシーケンスの16進数字に、既定の大文字ではなく小文字を使います。
`YYJSON_WRITE_ESCAPE_UNICODE`も設定されている場合にのみ有効です。

### **YYJSON_WRITE_ESCAPE_SLASHES**

スラッシュ`/`を`\/`としてエスケープします。例：

```json
["https://github.com"]
["https:\/\/github.com"]
```


### **YYJSON_WRITE_ALLOW_INF_AND_NAN**

inf/nanの数値についてエラーを報告する代わりに、`Infinity`および`NaN`リテラルとして書き出します。<br/>

この出力は標準JSONでは**ない**ため、ほかのJSONライブラリが受け付けない場合があることに注意してください。例：

```js
{"not_a_number":NaN,"large_number":Infinity}
```


### **YYJSON_WRITE_INF_AND_NAN_AS_NULL**

inf/nanの数値についてエラーを報告する代わりに、`null`リテラルとして書き出します。<br/>
このフラグは`YYJSON_WRITE_ALLOW_INF_AND_NAN`フラグを上書きします。例：

```js
{"not_a_number":null,"large_number":null}
```


### **YYJSON_WRITE_ALLOW_INVALID_UNICODE**

文字列の値をエンコードする際に、無効なUnicodeを許可します。

文字列の値に含まれる無効な文字は、バイトごとにコピーされます。`YYJSON_WRITE_ESCAPE_UNICODE`フラグも設定されている場合、無効な文字は`\uFFFD`（置換文字）としてエスケープされます。

このフラグは、正しくエンコードされた文字列の処理性能には影響しません。

### **YYJSON_WRITE_NEWLINE_AT_END**

JSONの末尾に改行文字`\n`を追加します。
テキストエディターやNDJSONで役立つことがあります。

### **YYJSON_WRITE_FP_TO_FLOAT**

浮動小数点数を単精度（float）で書き出します。
シリアライズ前に`double`を`float`へキャストします。
出力は短くなりますが、精度が多少失われる可能性があります。
`YYJSON_WRITE_FP_TO_FIXED(prec)`も使っている場合、このフラグは無視されます。

### **YYJSON_WRITE_FP_TO_FIXED(prec)**

浮動小数点数を固定小数点表記で書き出します。
ECMAScriptの`Number.prototype.toFixed(prec)`に似ていますが、末尾の0は除去されます。`prec`の範囲は1から15です。
出力は短くなりますが、精度が多少失われる可能性があります。

---------------
