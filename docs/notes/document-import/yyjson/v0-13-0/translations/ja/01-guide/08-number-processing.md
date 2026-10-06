<a id="number-processing"></a>
# 数値の処理

<a id="number-reader"></a>
## 数値の読み込み

ライブラリには、高性能な数値リーダーが組み込まれています。<br/>
既定では、次の規則で数値を読み込みます。<br/>

- 正の整数は`uint64_t`として読み込みます。オーバーフローした場合は、`double`に変換します。
- 負の整数は`int64_t`として読み込みます。オーバーフローした場合は、`double`に変換します。
- 浮動小数点数は、正しく丸めて`double`として読み込みます。
- `double`の数値がオーバーフローして無限大になると、エラーを報告します。
- 数値が[JSON](https://www.json.org)の標準に準拠していない場合は、エラーを報告します。

数値の解析方法は、次の3つのフラグで調整できます。

- `YYJSON_READ_ALLOW_INF_AND_NAN`：nan/infの数値やリテラルを`double`として読み込みます（非標準）。
- `YYJSON_READ_NUMBER_AS_RAW`：数値をすべて解析せず、未加工の文字列として読み込みます。
- `YYJSON_READ_BIGNUM_AS_RAW`：大きな数値（オーバーフローまたは無限大）を解析せず、未加工の文字列として読み込みます。

詳細は「読み込みフラグ」の節を参照してください。

<a id="number-writer"></a>
## 数値の書き出し

ライブラリには、高性能な数値ライターが組み込まれています。<br/>
既定では、次の規則で数値を書き出します。<br/>

- 正の整数は、符号なしで書き出します。
- 負の整数は、負号を付けて書き出します。
- 浮動小数点数は、次の変更を加えた[ECMAScript形式](https://www.ecma-international.org/ecma-262/11.0/index.html#sec-numeric-types-number-tostring)で書き出します。
  - 数値が`Infinity`または`NaN`の場合は、エラーを報告します。
  - 入力情報を保持するため、`-0.0`の負号を保持します。
  - 指数部の正号は除去します。
- 浮動小数点数ライターは、正しく丸められた最短の10進表現を生成します。

数値の書き出し方法は、次のフラグで調整できます。

- `YYJSON_WRITE_ALLOW_INF_AND_NAN`は、inf/nanの数値を、エラーにせず`Infinity`および`NaN`リテラルとして書き出します（非標準）。
- `YYJSON_WRITE_INF_AND_NAN_AS_NULL`は、inf/nanの数値を`null`リテラルとして書き出します。
- `YYJSON_WRITE_FP_TO_FLOAT`は、実数を`double`ではなく`float`として書き出します。
- `YYJSON_WRITE_FP_TO_FIXED(prec)`は、実数を固定小数点表記で書き出します。

詳細は「書き出しフラグ」の節を参照してください。

個々の値の出力形式を制御する補助関数もあります。

- `yyjson_set_fp_to_float(yyjson_val *val, bool flt)`と`yyjson_mut_set_fp_to_float(yyjson_mut_val *val, bool flt)`は、この実数を`float`または`double`の精度で書き出します。
- `yyjson_set_fp_to_fixed(yyjson_val *val, int prec)`と`yyjson_mut_set_fp_to_fixed(yyjson_mut_val *val, int prec)`は、この実数を固定小数点表記で書き出します。precは1から15の範囲である必要があります。

<a id="number-conversion-function"></a>
## 数値の変換関数

ライブラリ内部の数値変換処理に直接アクセスするためのユーティリティー関数も2つあります。
これらは単独で使うことを想定しており、通常はメモリを確保しません。
```c
// parse a number from string
const char *yyjson_read_number(const char *dat,
                               yyjson_val *val,
                               yyjson_read_flag flg,
                               const yyjson_alc *alc,
                               yyjson_read_err *err);
// write a number to string
char *yyjson_write_number(const yyjson_val *val, char *buf);
```
