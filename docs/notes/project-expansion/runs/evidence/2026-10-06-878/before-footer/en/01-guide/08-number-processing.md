---
title: "Number Processing"
documentId: "yyjson:01-guide/08-number-processing.md"
order: 8
licenseSource: "yyjson-fixed"
toc: {"maxLevel": 6}
documentContext: [{"kind": "source", "html": "<p>yyjson 0.13.0, fixed commit 6447536015f3d600f3d65323b10976103b337ca7. By YaoYuan and yyjson contributors. <a href=\"https://github.com/ibireme/yyjson/blob/6447536015f3d600f3d65323b10976103b337ca7/doc/API.md#L1583-L1644\">Fixed official original</a>. <a href=\"/docs/yyjson/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Libxによる非公式編集・日本語訳です。固定Markdown7資料とSVG7図を保持し、利用ガイド16ページが日本語訳の対象です。更新履歴・原著Performance TODO・原MIT通知は英語原文参照です。Libxの運用方針に基づき、意味のまとまった節分割・見出し・内部参照・静的な図の配置を調整しています。</p>"}, {"kind": "editorial", "html": "<p>原著のPerformance.mdはTODOのみで未執筆です。READMEの性能図表と2020年のレポートは固定原文のまま提供し、原著の制限・注意書きも保持しています。生成Doxygenの全シンボル一覧、第三者テーマ、対話型ベンチマークや構造図の編集ファイルは収録せず、<a href=\"https://ibireme.github.io/yyjson/doc/doxygen/html/\">公式文書</a>と原稿中の参照リンクで補います。原文の技術監査やサンプルプログラムの実行は行っていません。</p>"}]
---
# Number Processing

## Number reader
The library has a built-in high-performance number reader,<br/>
it will read numbers according to these rules by default:<br/>

* Positive integers are read as `uint64_t`. If an overflow occurs, it is converted to `double`.
* Negative integers are read as `int64_t`. If an overflow occurs, it is converted to `double`.
* Floating-point numbers are read as `double` with correct rounding.
* If a `double` number overflows (reaches infinity), an error is reported.
* If a number does not conform to the [JSON](https://www.json.org) standard, an error is reported.

There are 3 flags that can be used to adjust the number parsing strategy:

- `YYJSON_READ_ALLOW_INF_AND_NAN`: read nan/inf number or literal as `double` (non-standard).
- `YYJSON_READ_NUMBER_AS_RAW`: read all numbers as raw strings without parsing.
- `YYJSON_READ_BIGNUM_AS_RAW`: read big numbers (overflow or infinity) as raw strings without parsing.

See the `Reader flag` section for more details.

## Number writer
The library has a built-in high-performance number writer,<br/>
it will write numbers according to these rules by default:<br/>

* Positive integers are written without a sign.
* Negative integers are written with a negative sign.
* Floating-point numbers are written using the [ECMAScript format](https://www.ecma-international.org/ecma-262/11.0/index.html#sec-numeric-types-number-tostring), with the following modifications:
    * If the number is `Infinity` or `NaN`, an error is reported.
    * The negative sign of `-0.0` is preserved to maintain input information.
    * The positive sign in the exponent part is removed.
* The floating-point number writer will generate the shortest correctly rounded decimal representation.

There are several flags that can be used to adjust the number writing strategy:

- `YYJSON_WRITE_ALLOW_INF_AND_NAN` writes inf/nan numbers as `Infinity` and `NaN` literals without error (non-standard).
- `YYJSON_WRITE_INF_AND_NAN_AS_NULL` writes inf/nan numbers as `null` literal.
- `YYJSON_WRITE_FP_TO_FLOAT` writes real numbers as `float` instead of `double`.
- `YYJSON_WRITE_FP_TO_FIXED(prec)` writes real numbers using fixed-point notation.

See the `Writer flag` section for more details.

There are also some helper functions to control the output format of individual values:
- `yyjson_set_fp_to_float(yyjson_val *val, bool flt)` and `yyjson_mut_set_fp_to_float(yyjson_mut_val *val, bool flt)` write this real number with `float` or `double` precision.
- `yyjson_set_fp_to_fixed(yyjson_val *val, int prec)` and `yyjson_mut_set_fp_to_fixed(yyjson_mut_val *val, int prec)` write this real number using fixed-point notation, the prec should be in the range of 1 to 15.

## Number conversion function

There are also two utility functions that provide direct access to the library's internal number conversion logic.  
They are intended for standalone use and typically do not allocate memory.
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



