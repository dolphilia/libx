<a id="reading-json"></a>
# JSONの読み込み

ライブラリは、JSONを読み込む5つの関数を提供しています。<br/>
各関数はUTF-8データまたはファイルを入力として受け取り、<br/>
成功するとドキュメントを返し、失敗すると`NULL`を返します。

<a id="read-json-from-string"></a>
## 文字列からJSONを読み込む

`dat`はUTF-8文字列である必要があります。NUL終端は不要です。<br/>
`len`は`dat`のバイト長です。<br/>
`flg`は読み込みフラグです。不要なら0を渡します。詳細は読み込みフラグを参照してください。<br/>
`dat`がNULLまたは`len`が0の場合、`NULL`を返します。

```c
yyjson_doc *yyjson_read(const char *dat, 
                        size_t len, 
                        yyjson_read_flag flg);
```

サンプルコード：

```c
const char *str = "[1,2,3,4]";
yyjson_doc *doc = yyjson_read(str, strlen(str), 0);
if (doc) {...}
yyjson_doc_free(doc);
```


<a id="read-json-from-file"></a>
## ファイルからJSONを読み込む

`path`はJSONファイルのパスです。システム固有の文字エンコーディングによるNUL終端文字列である必要があります。<br/>
`flg`は読み込みフラグです。不要なら0を渡します。詳細は読み込みフラグを参照してください。<br/>
`alc`はメモリアロケーターです。不要ならNULLを渡します。詳細はメモリアロケーターを参照してください。<br/>
`err`はエラーメッセージを受け取るためのポインターです。不要ならNULLを渡します。<br/>
`path`がNULLまたは無効な場合、`NULL`を返します。

```c
yyjson_doc *yyjson_read_file(const char *path,
                             yyjson_read_flag flg,
                             const yyjson_alc *alc,
                             yyjson_read_err *err);
```


サンプルコード：

```c
yyjson_doc *doc = yyjson_read_file("/tmp/test.json", 0, NULL, NULL);
if (doc) {...}
yyjson_doc_free(doc);
```


<a id="read-json-from-file-pointer"></a>
## ファイルポインターからJSONを読み込む

`fp`はファイルポインターです。FILEの現在位置から末尾までデータを読み込みます。<br/>
`flg`は読み込みフラグです。不要なら0を渡します。詳細は読み込みフラグを参照してください。<br/>
`alc`はメモリアロケーターです。不要ならNULLを渡します。詳細はメモリアロケーターを参照してください。<br/>
`err`はエラーメッセージを受け取るためのポインターです。不要ならNULLを渡します。<br/>
`fp`がNULLまたは無効な場合、`NULL`を返します。

```c
yyjson_doc *yyjson_read_fp(FILE *fp,
                           yyjson_read_flag flg,
                           const yyjson_alc *alc,
                           yyjson_read_err *err);
```


サンプルコード：

```c
FILE *fp = fdopen(fd, "rb"); // POSIX file descriptor (fd)
yyjson_doc *doc = yyjson_read_fp(fp, 0, NULL, NULL);
if (fp) fclose(fp);
if (doc) {...}
yyjson_doc_free(doc);
```


<a id="read-json-with-options"></a>
## オプションを指定してJSONを読み込む

`dat`はUTF-8文字列である必要があります。`YYJSON_READ_INSITU`フラグを使わない場合は、const文字列を渡せます。<br/>
`len`は`dat`のバイト長です。<br/>
`flg`は読み込みフラグです。不要なら0を渡します。詳細は読み込みフラグを参照してください。<br/>
`alc`はメモリアロケーターです。不要ならNULLを渡します。詳細はメモリアロケーターを参照してください。<br/>
`err`はエラーメッセージを受け取るためのポインターです。不要ならNULLを渡します。<br/>

```c
yyjson_doc *yyjson_read_opts(char *dat, 
                             size_t len, 
                             yyjson_read_flag flg,
                             const yyjson_alc *alc, 
                             yyjson_read_err *err);
```


サンプルコード：

```c
const char *dat = your_file.bytes;
size_t len = your_file.size;

yyjson_read_flag flg = YYJSON_READ_ALLOW_COMMENTS | YYJSON_READ_ALLOW_INF_AND_NAN;
yyjson_doc *doc = yyjson_read_opts((char *)dat, len, flg, NULL, NULL);

if (doc) {...}

yyjson_doc_free(doc);
```


<a id="read-json-incrementally"></a>
## JSONを増分的に読み込む

非常に大きなJSONドキュメントを読み込むと、プログラムがしばらく停止することがあります。これが許容できない場合、増分読み込みを使えます。

増分読み込みを推奨するのは、大きなドキュメントで、プログラムの応答性を保つ必要がある場合だけです。増分読み込みは`yyjson_read()`や`yyjson_read_opts()`よりも少し遅くなります。

注：増分JSONリーダーは標準JSONにのみ対応します。
非標準の機能（コメントや末尾のカンマなど）のフラグは無視されます。

大きなJSONドキュメントを増分的に読み込む手順は次のとおりです。

1. `yyjson_incr_new()`を呼び出して、増分読み込みの状態を作ります。
2. `yyjson_incr_read()`を繰り返し呼び出します。
3. `yyjson_incr_free()`を呼び出して、状態を解放します。

<a id="create-the-state-for-incremental-reading"></a>
### 増分読み込みの状態を作る

`buf`はUTF-8文字列である必要があります。NUL終端は不要です。
`YYJSON_READ_INSITU`フラグを使わない場合は、const文字列を渡せます。<br/>
`buf_len`は`buf`のバイト長です。
`flg`は読み込みフラグです。不要なら0を渡します。詳細は読み込みフラグを参照してください。
`alc`はメモリアロケーターです。不要ならNULLを渡します。詳細はメモリアロケーターを参照してください。<br/>

この関数は新しい状態を返します。メモリの確保に失敗した場合はNULLを返します。

```c
yyjson_incr_state *yyjson_incr_new(char *buf, size_t buf_len, yyjson_read_flag flg, const yyjson_alc *alc);
```


<a id="perform-incremental-read"></a>
### 増分読み込みを行う

`len`バイトまでの増分読み込みを行います。

増分読み込み用の`state`は、`yyjson_incr_new()`で作成します。<br/>
`len`は読み込むバイト数の上限で、JSONデータの先頭から数えます。<br/>
`err`はエラー情報を受け取るためのポインターです。必須です。<br/>

この関数は、読み込みが完了するとドキュメントオブジェクトを返し、それ以外の場合はNULLを返します。
`err->code`に`YYJSON_READ_ERROR_MORE`が設定された場合、解析がまだ完了していないことを示します。
その場合は`len`を数キロバイト増やし、この関数を再度呼び出します。
`len == buf_len`（入力バッファーの全長）になるか、`YYJSON_READ_ERROR_MORE`以外のエラーが返るまで、`len`を増やし続けます。

注：非常に小さな増分で解析するのは非効率です。
数キロバイトまたは数メガバイトずつ増やすことを推奨します。

```c
yyjson_doc *yyjson_incr_read(yyjson_incr_state *state, size_t len, yyjson_read_err *err);
```


<a id="free-the-state-used-for-incremental-reading"></a>
### 増分読み込みに使った状態を解放する

`yyjson_incr_new()`で作成した`state`を解放します。

```c
void yyjson_incr_free(yyjson_incr_state *state);
```


<a id="sample-code"></a>
### サンプルコード

```c
const char *dat = your_file.bytes;
size_t len = your_file.size;

yyjson_read_flag flg = YYJSON_READ_NOFLAG;
yyjson_incr_state *state = yyjson_incr_new(dat, len, flg, NULL);
yyjson_doc *doc;
yyjson_read_err err;
size_t read_so_far = 0;
do {
    read_so_far += 100000;
    if (read_so_far > len)
        read_so_far = len;
    doc = yyjson_incr_read(state, read_so_far, &err);
    if (err.code != YYJSON_READ_ERROR_MORE)
        break;
} while (read_so_far < len);
yyjson_incr_free(state);

if (doc != NULL) { ... }

yyjson_doc_free(doc);
```


<a id="reader-error-handling"></a>
## 読み込みエラーの処理

JSONの読み込みが失敗し、エラー情報が必要な場合は、`yyjson_read_xxx()`関数に`yyjson_read_err`のポインターを渡して詳細を受け取れます。

サンプルコード：

```c
char *dat = ...;
size_t dat_len = ...;
yyjson_read_err err;
yyjson_doc *doc = yyjson_read_opts(dat, dat_len, 0, NULL, &err);

if (!doc) {
    printf("read error: %s, code: %u at byte position: %lu\n", 
            err.msg, err.code, err.pos);
    // printed:
    // read error: trailing comma is not allowed, code: 7, at byte position: 40
}

yyjson_doc_free(doc);
```


エラー情報の`pos`は、エラーが発生したバイト位置を示します。エラーの行番号と列番号が必要な場合は、`yyjson_locate_pos()`を使えます。`line`と`column`は1から、`character`は0から始まることに注意してください。各値は、さまざまなテキストエディターと互換性を保つため、Unicode文字に基づいて計算されます。

サンプルコード：

```c
char *dat = ...;
size_t dat_len = ...;
yyjson_read_err err = ...;

size_t line, col, chr;
if (yyjson_locate_pos(dat, dat_len, err.pos, &line, &col, &chr)) {
    printf("error at line: %lu, column: %lu, character index: %lu\n",
           line, col, chr);
    // printed:
    // error at line: 3, column: 5, character index: 32
}
```


エラーコード（`yyjson_read_code`）の完全な一覧：

|コード|名前|説明|
|---|---|---|
|0|`YYJSON_READ_SUCCESS`|成功。エラーなし。|
|1|`YYJSON_READ_ERROR_INVALID_PARAMETER`|NULLの入力文字列や入力長0など、無効な引数。|
|2|`YYJSON_READ_ERROR_MEMORY_ALLOCATION`|メモリ確保の失敗。|
|3|`YYJSON_READ_ERROR_EMPTY_CONTENT`|入力JSON文字列が空。|
|4|`YYJSON_READ_ERROR_UNEXPECTED_CONTENT`|`[123]abc`のように、ドキュメント末尾の後に予期しない内容がある。|
|5|`YYJSON_READ_ERROR_UNEXPECTED_END`|入力が予期せず終了した。`[123`のように、解析済みの部分は有効。|
|6|`YYJSON_READ_ERROR_UNEXPECTED_CHARACTER`|`[abc]`のように、ドキュメント内に予期しない文字がある。|
|7|`YYJSON_READ_ERROR_JSON_STRUCTURE`|`[1,]`のように、JSON構造が無効。|
|8|`YYJSON_READ_ERROR_INVALID_COMMENT`|無効なコメント（非推奨。`UNEXPECTED_END`に対応付けられる）。|
|9|`YYJSON_READ_ERROR_INVALID_NUMBER`|`123.e12`や`000`のように、数値が無効。|
|10|`YYJSON_READ_ERROR_INVALID_STRING`|無効なエスケープシーケンスなど、文字列が無効。|
|11|`YYJSON_READ_ERROR_LITERAL`|`truu`のように、JSONリテラルが無効。|
|12|`YYJSON_READ_ERROR_FILE_OPEN`|ファイルを開けなかった。|
|13|`YYJSON_READ_ERROR_FILE_READ`|ファイルを読み込めなかった。|
|14|`YYJSON_READ_ERROR_MORE`|増分解析中に入力が未完了。状態は継続用に保持される。|
|15|`YYJSON_READ_ERROR_DEPTH`|ネストの深さが`YYJSON_READER_DEPTH_LIMIT`を超えた。|

<a id="reader-flag"></a>
## 読み込みフラグ

ライブラリは、JSONリーダー用のフラグを用意しています。<br/>
フラグを単独で使うことも、ビット単位の`|`演算子で複数のフラグを組み合わせることもできます。<br/>

非標準のフラグ（`YYJSON_READ_JSON5`など）は、標準JSONの入力を読み込む際の性能に影響しません。

### **YYJSON_READ_NOFLAG = 0**

JSONリーダーの既定のフラグです（RFC-8259またはECMA-404に準拠）。

- 正の整数を`uint64_t`として読み込みます。
- 負の整数を`int64_t`として読み込みます。
- 浮動小数点数を正しく丸めて`double`として読み込みます。
- `uint64_t`や`int64_t`に収まらない整数を`double`として読み込みます。
- doubleの数値が無限大の場合はエラーを報告します。
- 文字列に無効なUTF-8文字やBOMがある場合はエラーを報告します。
- 末尾のカンマ、コメント、`Inf`および`NaN`リテラルについてエラーを報告します。

### **YYJSON_READ_INSITU**

入力データをその場所で読み込みます。<br/>

このオプションでは、リーダーが入力データを変更し、文字列の値を格納するために使用できるため、読み込み速度が少し向上することがあります。ただし、呼び出し側は、ドキュメントを解放するまで入力データを保持しなければなりません。入力データの末尾には、少なくとも`YYJSON_PADDING_SIZE`バイトのパディングが必要です。たとえば、`[1,2]`は`[1,2]\0\0\0\0`とし、入力長は5にします。

サンプルコード：

```c
size_t dat_len = ...;
char *buf = malloc(dat_len + YYJSON_PADDING_SIZE); // create a buffer larger than (len + 4)
read_from_socket(buf, ...);
memset(buf + dat_len, 0, YYJSON_PADDING_SIZE); // set 4-byte padding after data

yyjson_doc *doc = yyjson_read_opts(buf, dat_len, YYJSON_READ_INSITU, NULL, NULL);
if (doc) {...}
yyjson_doc_free(doc);
free(buf); // the input data should be freed after the document.
```


### **YYJSON_READ_STOP_WHEN_DONE**

JSONドキュメントの末尾に達すると解析を停止し、その後に追加の内容があってもエラーにしません。<br/>

このオプションは、[NDJSON](https://en.wikipedia.org/wiki/JSON_streaming)のように、大きなデータの中に含まれる小さなJSON片を解析する場合に役立ちます。<br/>

サンプルコード：

```c
// Single file with multiple JSON, such as:
// [1,2,3] [4,5,6] {"a":"b"}

size_t file_size = ...;
char *dat = malloc(file_size + YYJSON_PADDING_SIZE);
your_read_file(dat, file);
memset(dat + file_size, 0, YYJSON_PADDING_SIZE); // add padding
    
char *hdr = dat;
char *end = dat + file_size;
yyjson_read_flag flg = YYJSON_READ_INSITU | YYJSON_READ_STOP_WHEN_DONE;

while (true) {
    yyjson_doc *doc = yyjson_read_opts(hdr, end - hdr, flg, NULL, NULL);
    if (!doc) break;
    your_doc_process(doc);
    hdr += yyjson_doc_get_read_size(doc); // move to next position
    yyjson_doc_free(doc);
}
free(dat);
```


### **YYJSON_READ_ALLOW_TRAILING_COMMAS**

オブジェクトや配列の末尾にカンマを1つ置くことを許可します（非標準）。例：

```
{
    "a": 1,
    "b": 2,
}

[
    "a",
    "b",
]
```


### **YYJSON_READ_ALLOW_COMMENTS**

C形式の単一行コメントと複数行コメントを許可します（非標準）。例：

```
{
    "name": "Harry", // single-line comment
    "id": /* multi-line comment */ 123
}
```


### **YYJSON_READ_ALLOW_INF_AND_NAN**

nan/infの数値、または大文字と小文字を区別しないリテラルを許可します（非標準）。例：

```
{
    "large": 123e999,
    "nan1": NaN,
    "nan2": nan,
    "inf1": Inf,
    "inf2": -Infinity
}
```


### **YYJSON_READ_NUMBER_AS_RAW**

数値をすべて解析せず、未加工の文字列として読み込みます。

数値の解析を自分で処理する場合に便利なフラグです。
次の関数で未加工の文字列を取り出せます。

```c
bool yyjson_is_raw(const yyjson_val *val);
const char *yyjson_get_raw(const yyjson_val *val);
size_t yyjson_get_len(const yyjson_val *val);
```


### **YYJSON_READ_BIGNUM_AS_RAW**

大きな数値を未加工の文字列として読み込みます。

これらの大きな数値を自分で解析する場合に便利なフラグです。
対象には、`int64_t`や`uint64_t`で表せない整数と、有限の`double`で表せない浮動小数点数が含まれます。

このフラグは`YYJSON_READ_NUMBER_AS_RAW`フラグで上書きされることに注意してください。

### **YYJSON_READ_ALLOW_INVALID_UNICODE**

文字列の値を解析する際に、無効なUnicodeの読み込みを許可します（非標準）。例：

```
"\x80xyz"
"\xF0\x81\x81\x81"
```

このフラグは、文字列の値に無効な文字が含まれることを許可しますが、無効なエスケープシーケンスについては引き続きエラーを報告します。正しくエンコードされた文字列の処理性能には影響しません。

***警告***：このオプションを使うと、JSON値の文字列に誤ったエンコーディングが含まれることがあります。セキュリティー上のリスクを避けるため、それらの文字列を慎重に扱う必要があります。

### **YYJSON_READ_ALLOW_BOM**

UTF-8のBOMを許可し、存在する場合は解析前に読み飛ばします（非標準）。

### **YYJSON_READ_ALLOW_EXT_NUMBER**

拡張数値形式を許可します（非標準）。

- `0x7B`のような16進数。
- `.123`や`123.`のように、小数点で始まる数値または小数点で終わる数値。
- `+123`のように、先頭にプラス記号が付いた数値。

### **YYJSON_READ_ALLOW_EXT_ESCAPE**

文字列中の拡張エスケープシーケンスを許可します（非標準）。

- 追加のエスケープ：`\a`、`\e`、`\v`、``\'``、`\?`、`\0`。
- `\x7B`のような、`\xNN`形式の16進エスケープ。
- 行の継続：バックスラッシュに続く行終端シーケンス。
- 未知のエスケープ：バックスラッシュの後が未対応の文字の場合、バックスラッシュを除去し、文字自体はそのまま保持します。ただし、`\1`〜`\9`は引き続きエラーになります。

### **YYJSON_READ_ALLOW_EXT_WHITESPACE**

拡張された空白文字を許可します（非標準）。

- 垂直タブ`\v`とフォームフィード`\f`。
- 行区切り`\u2028`と段落区切り`\u2029`。
- 改行しない空白`\xA0`。
- バイトオーダーマーク：`\uFEFF`。
- UnicodeのZs（Separator, space）分類に含まれるその他の文字。

### **YYJSON_READ_ALLOW_SINGLE_QUOTED_STR**

``'ab'``のように、単一引用符で囲まれた文字列を許可します（非標準）。

### **YYJSON_READ_ALLOW_UNQUOTED_KEY**

`{a:1,b:2}`のように、引用符で囲まれていないオブジェクトのキーを許可します（非標準）。
これはECMAScriptのIdentifierName規則を拡張し、コードポイントが`U+007F`より大きい、空白以外の任意の文字を許可するものです。

### **YYJSON_READ_JSON5**

JSON5形式を許可します。参照：[JSON5](https://json5.org)。

このフラグは、JSON5の全機能に加え、次の拡張に対応します。

- JSON5よりも多くのエスケープシーケンスを受け付けます（`\a`、`\e`など）。
- 引用符で囲まれていないキーをECMAScriptのIdentifierNameに限定しません。
- `NaN`、`Inf`、`Infinity`リテラルについて、大文字と小文字を区別しません。

例：

```json
{
    /* JSON5 example */
    id: 123,
    name: 'Harry',
    color: 0x66CCFF,
    min: .001,
    max: Inf,
    data: '\x00\xAA\xFF',
}
```


---------------
