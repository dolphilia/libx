---
title: "数値処理"
documentId: "yyjson:01-guide/08-number-processing.md"
order: 8
licenseSource: "yyjson-fixed"
toc: {"maxLevel": 6}
documentContext: [{"kind": "source", "html": "<p>yyjson 0.13.0, fixed commit 6447536015f3d600f3d65323b10976103b337ca7. By YaoYuan and yyjson contributors. <a href=\"https://github.com/ibireme/yyjson/blob/6447536015f3d600f3d65323b10976103b337ca7/doc/API.md#L1583-L1644\">Fixed official original</a>. <a href=\"/docs/yyjson/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Libxによる非公式編集・日本語訳です。固定Markdown7資料とSVG7図を保持し、利用ガイド16ページが日本語訳の対象です。更新履歴・原著Performance TODO・原MIT通知は英語原文参照です。Libxの運用方針に基づき、意味のまとまった節分割・見出し・内部参照・静的な図の配置を調整しています。</p>"}, {"kind": "editorial", "html": "<p>原著のPerformance.mdはTODOのみで未執筆です。READMEの性能図表と2020年のレポートは固定原文のまま提供し、原著の制限・注意書きも保持しています。生成Doxygenの全シンボル一覧、第三者テーマ、対話型ベンチマークや構造図の編集ファイルは収録せず、<a href=\"https://ibireme.github.io/yyjson/doc/doxygen/html/\">公式文書</a>と原稿中の参照リンクで補います。原文の技術監査やサンプルプログラムの実行は行っていません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/yyjson/source/v0-13-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定Markdown7資料とSVG7図、英語原文19ページ・非公式日本語訳16ガイドの編集原稿、再生成入力、原MIT通知、共有ビルドコードと再構築手順を含みます。更新履歴・原著Performance TODO・MIT通知の3資料は未翻訳の英語原文です。各ファイルの条件を参照してください。</p>"}]
---
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
