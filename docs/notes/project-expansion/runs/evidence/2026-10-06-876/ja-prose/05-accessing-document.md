# JSONドキュメントへのアクセス

## JSONドキュメント

次の関数で、ドキュメントの内容にアクセスできます。
@@CODE_0@@

ドキュメントは、内部の値と文字列に使うメモリをすべて保持します。不要になったら、ドキュメントを解放して、すべてのメモリを解放する必要があります。
@@CODE_1@@

## JSON値

各JSON値には、次の表に示す型とサブタイプがあります。

|型|サブタイプ|説明|
|---|---|---|
| YYJSON_TYPE_NONE | | 無効な値 |
| YYJSON_TYPE_RAW | | 未加工の文字列 |
| YYJSON_TYPE_NULL | | `null`リテラル |
| YYJSON_TYPE_BOOL | YYJSON_SUBTYPE_FALSE | `false`リテラル |
| YYJSON_TYPE_BOOL | YYJSON_SUBTYPE_TRUE | `true`リテラル |
| YYJSON_TYPE_NUM | YYJSON_SUBTYPE_UINT | `uint64_t`の数値 |
| YYJSON_TYPE_NUM | YYJSON_SUBTYPE_SINT | `int64_t`の数値 |
| YYJSON_TYPE_NUM | YYJSON_SUBTYPE_REAL | `double`の数値 |
| YYJSON_TYPE_STR | | 文字列の値 |
| YYJSON_TYPE_STR | YYJSON_SUBTYPE_NOESC | エスケープが不要な文字列の値 |
| YYJSON_TYPE_ARR | | 配列の値 |
| YYJSON_TYPE_OBJ | | オブジェクトの値 |

- `YYJSON_TYPE_NONE`は無効な値を意味します。JSONの解析に成功した場合には現れません。
- `YYJSON_TYPE_RAW`は、対応する`YYJSON_READ_XXX_AS_RAW`フラグを使った場合にだけ現れます。
- `YYJSON_SUBTYPE_NOESC`は、エスケープが不要な文字列の書き出し速度を最適化するために使います。このサブタイプは内部で使われるため、利用者が処理する必要はありません。

次の関数で、JSON値の型を判定できます。

@@CODE_2@@

次の関数で、JSON値の内容を取得できます。

@@CODE_3@@

次の関数で、JSON値の内容を変更できます。<br/>

警告：不変ドキュメントの場合、これらの関数は`immutable`という取り決めを破ります。このAPI群は慎重に使う必要があります。たとえば、ドキュメントへのアクセスを単一スレッドだけに限定してください。

@@CODE_4@@

## JSON配列

次の関数で、JSON配列にアクセスできます。<br/>

インデックスで要素にアクセスすると、線形探索の時間がかかる場合があることに注意してください。そのため、配列を走査する場合は、イテレーターAPIを使うことを推奨します。

@@CODE_5@@

## JSON配列のイテレーター

配列を走査する方法は2つあります。<br/>

サンプルコード1（イテレーターAPI）：
@@CODE_6@@

サンプルコード2（foreachマクロ）：
@@CODE_7@@
<br/>

可変配列を走査するための、可変版APIもあります。<br/>

サンプルコード1（可変版イテレーターAPI）：
@@CODE_8@@

サンプルコード2（可変版foreachマクロ）：
@@CODE_9@@

## JSONオブジェクト

次の関数で、JSONオブジェクトにアクセスできます。<br/>

キーで要素にアクセスすると、線形探索の時間がかかる場合があることに注意してください。そのため、オブジェクトを走査する場合は、イテレーターAPIを使うことを推奨します。

@@CODE_10@@

## JSONオブジェクトのイテレーター

オブジェクトを走査する方法は2つあります。<br/>

サンプルコード1（イテレーターAPI）：
@@CODE_11@@

サンプルコード2（foreachマクロ）：
@@CODE_12@@
<br/>

可変オブジェクトを走査するための、可変版APIもあります。<br/>

サンプルコード1（可変版イテレーターAPI）：
@@CODE_13@@

サンプルコード2（可変版foreachマクロ）：
@@CODE_14@@

---------------
