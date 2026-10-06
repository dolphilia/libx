# JSONの書き出し

ライブラリは、JSONを書き出す5組の関数を提供しています。<br/>
各関数はJSONドキュメントまたはルート値を入力として受け取り、UTF-8文字列またはファイルを返します。

## JSONを文字列に書き出す

`doc/val`はJSONドキュメントまたはルート値です。NULLの場合はNULLを返します。<br/>
`flg`は書き出しフラグです。不要なら0を渡します。詳細は書き出しフラグを参照してください。<br/>
`len`は出力長（NUL終端文字を含まない）を受け取るためのポインターです。不要ならNULLを渡します。<br/>
この関数は新しいJSON文字列を返します。エラーが起きた場合はNULLを返します。<br/>
文字列はNUL終端されたUTF-8でエンコードされます。<br/>
不要になったら、`free()`または`alc->free()`で解放する必要があります。

@@CODE_0@@

サンプルコード1：

@@CODE_1@@

サンプルコード2：

@@CODE_2@@

## JSONをファイルに書き出す

`path`は出力JSONファイルのパスです。システム固有の文字エンコーディングによるNUL終端文字列である必要があります。`path`がNULLまたは無効な場合はfalseを返します。ファイルが空でない場合、その内容は破棄されます。<br/>
`doc/val`はJSONドキュメントまたはルート値です。NULLの場合はfalseを返します。<br/>
`flg`は書き出しフラグです。不要なら0を渡します。詳細は書き出しフラグを参照してください。<br/>
`alc`はメモリアロケーターです。不要ならNULLを渡します。詳細はメモリアロケーターを参照してください。<br/>
`err`はエラーメッセージを受け取るためのポインターです。不要ならNULLを渡します。<br/>
この関数は成功するとtrueを返し、エラーが起きた場合はfalseを返します。<br/>

@@CODE_3@@

サンプルコード：

@@CODE_4@@

## JSONをファイルポインターに書き出す

`fp`は出力ファイルポインターです。ファイルの現在位置にデータを書き込みます。<br/>
`fp`がNULLまたは無効な場合はfalseを返します。<br/>
`doc/val`はJSONドキュメントまたはルート値です。NULLの場合はfalseを返します。<br/>
`flg`は書き出しフラグです。不要なら0を渡します。詳細は書き出しフラグを参照してください。<br/>
`alc`はメモリアロケーターです。不要ならNULLを渡します。詳細はメモリアロケーターを参照してください。<br/>
`err`はエラーメッセージを受け取るためのポインターです。不要ならNULLを渡します。<br/>
この関数は成功するとtrueを返し、エラーが起きた場合はfalseを返します。<br/>

@@CODE_5@@

サンプルコード：

@@CODE_6@@

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

@@CODE_7@@

サンプルコード：

@@CODE_8@@

## オプションを指定してJSONを書き出す

`doc/val`はJSONドキュメントまたはルート値です。NULLの場合はNULLを返します。<br/>
`flg`は書き出しフラグです。不要なら0を渡します。詳細は書き出しフラグを参照してください。<br/>
`alc`はメモリアロケーターです。不要ならNULLを渡します。詳細はメモリアロケーターを参照してください。<br/>
`len`は出力長（NUL終端文字を含まない）を受け取るためのポインターです。不要ならNULLを渡します。<br/>
`err`はエラーメッセージを受け取るためのポインターです。不要ならNULLを渡します。<br/>

この関数は新しいJSON文字列を返します。エラーが起きた場合はNULLを返します。<br/>
文字列はNUL終端されたUTF-8でエンコードされます。<br/>
不要になったら、free()またはalc->free()で解放する必要があります。

@@CODE_9@@

サンプルコード：

@@CODE_10@@

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

@@CODE_11@@

### **YYJSON_WRITE_LOWERCASE_HEX**

`\uXXXX`エスケープシーケンスの16進数字に、既定の大文字ではなく小文字を使います。
`YYJSON_WRITE_ESCAPE_UNICODE`も設定されている場合にのみ有効です。

### **YYJSON_WRITE_ESCAPE_SLASHES**

スラッシュ`/`を`\/`としてエスケープします。例：

@@CODE_12@@

### **YYJSON_WRITE_ALLOW_INF_AND_NAN**

inf/nanの数値についてエラーを報告する代わりに、`Infinity`および`NaN`リテラルとして書き出します。<br/>

この出力は標準JSONでは**ない**ため、ほかのJSONライブラリが受け付けない場合があることに注意してください。例：

@@CODE_13@@

### **YYJSON_WRITE_INF_AND_NAN_AS_NULL**

inf/nanの数値についてエラーを報告する代わりに、`null`リテラルとして書き出します。<br/>
このフラグは`YYJSON_WRITE_ALLOW_INF_AND_NAN`フラグを上書きします。例：

@@CODE_14@@

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
