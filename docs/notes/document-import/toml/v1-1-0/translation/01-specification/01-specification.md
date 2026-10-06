---
title: "TOML 1.1.0 仕様"
description: "TOML 1.1.0 の公式仕様全文の日本語訳。"
---

<a id="source-toml-v110"></a>

TOML v1.1.0
===========

Tom の分かりやすく最小限の言語。

著者：Tom Preston-Werner、Pradyun Gedam ほか。

<a id="source-objectives"></a>

## 目的

TOML は、意味が明確で読みやすい、最小限の設定ファイル形式を目指しています。TOML はハッシュテーブルへ曖昧さなく対応付けられるように設計されています。さまざまな言語のデータ構造へ簡単に解析できることが望まれます。

<a id="source-table-of-contents"></a>

## 目次

- [基本事項](#source-preliminaries)
- [コメント](#source-comment)
- [キーと値のペア](#source-keyvalue-pair)
- [キー](#source-keys)
- [文字列](#source-string)
- [整数](#source-integer)
- [浮動小数点数](#source-float)
- [真偽値](#source-boolean)
- [オフセット付き日時](#source-offset-date-time)
- [ローカル日時](#source-local-date-time)
- [ローカル日付](#source-local-date)
- [ローカル時刻](#source-local-time)
- [配列](#source-array)
- [テーブル](#source-table)
- [インラインテーブル](#source-inline-table)
- [テーブルの配列](#source-array-of-tables)
- [ファイル名の拡張子](#source-filename-extension)
- [MIME タイプ](#source-mime-type)
- [ABNF 文法](#source-abnf-grammar)

<a id="source-preliminaries"></a>

## 基本事項

- TOML は大文字と小文字を区別します。
- 空白とは、タブ (U+0009) またはスペース (U+0020) を指します。
- 改行とは、LF (U+000A) または CRLF (U+000D U+000A) を指します。
- TOML ファイルは、有効な UTF-8 エンコーディングの Unicode 文書でなければなりません。

  具体的には、ファイルが*全体として*[整形式のコード単位列](https://unicode.org/glossary/#well_formed_code_unit_sequence)を構成しなければならないという意味です。そうでなければ、Unicode 仕様に従い、ファイルを拒否する（こちらを推奨）か、不正なバイト列を U+FFFD に置き換えなければなりません。

<a id="source-comment"></a>

## コメント

文字列内を除き、ハッシュ記号から行末までがコメントになります。

```toml
# This is a full-line comment
key = "value"  # This is a comment at the end of a line
another = "# This is not a comment"
```

タブ以外の制御文字 (U+0000 から U+0008、U+000A から U+001F、U+007F) は、コメント内では許可されません。

コメントは、ファイルを読む人同士の意思疎通のために使うことが望まれます。パーサーは、コメントの有無や内容に基づいてキーや値を変更してはいけません。

<a id="source-keyvalue-pair"></a>

## キーと値のペア

TOML 文書の基本的な構成要素は、キーと値のペアです。

キーは等号の左側、値は右側に置きます。キー名や値の前後にある空白は無視されます。キー、等号、値は同じ行になければなりません。ただし、一部の値は複数行に分けて記述できます。

```toml
key = "value"
```

値は、次のいずれかの型でなければなりません。

- [文字列](#source-string)
- [整数](#source-integer)
- [浮動小数点数](#source-float)
- [真偽値](#source-boolean)
- [オフセット付き日時](#source-offset-date-time)
- [ローカル日時](#source-local-date-time)
- [ローカル日付](#source-local-date)
- [ローカル時刻](#source-local-time)
- [配列](#source-array)
- [インラインテーブル](#source-inline-table)

値を指定しない記述は無効です。

```toml
key = # INVALID
```

キーと値のペアの後には、改行または EOF がなければなりません。例外については[インラインテーブル](#source-inline-table)を参照してください。

```
first = "Tom" last = "Preston-Werner" # INVALID
```

<a id="source-keys"></a>

## キー

キーには、裸のキー、引用符付きキー、ドット区切りキーがあります。

**裸のキー**に含められるのは、ASCII の英字、ASCII の数字、アンダースコア、ハイフン (`A-Za-z0-9_-`) だけです。裸のキーは、`1234` のように ASCII の数字だけで構成しても構いませんが、常に文字列として解釈されます。

```toml
key = "value"
bare_key = "value"
bare-key = "value"
1234 = "value"
```

**引用符付きキー**には、基本文字列またはリテラル文字列とまったく同じ規則が適用され、はるかに幅広いキー名を使えます。どうしても必要な場合を除いて、裸のキーを使うことを推奨します。

```toml
"127.0.0.1" = "value"
"character encoding" = "value"
"ʎǝʞ" = "value"
'key2' = "value"
'quoted "value"' = "value"
```

裸のキーは空にできませんが、空の引用符付きキーは許可されます。ただし、推奨はしません。引用符付きキーの定義に複数行の文字列は使えません。

```toml
= "no key name"           # INVALID
"""key""" = "not allowed" # INVALID
"" = "blank"              # VALID but discouraged
'' = 'blank'              # VALID but discouraged
```

**ドット区切りキー**は、裸のキーまたは引用符付きキーをドットでつないだ列です。これにより、関連するプロパティをまとめられます。

```toml
name = "Orange"
physical.color = "orange"
physical.shape = "round"
site."google.com" = true
```

JSON では、次の構造に相当します。

```json
{
  "name": "Orange",
  "physical": {
    "color": "orange",
    "shape": "round"
  },
  "site": {
    "google.com": true
  }
}
```

ドット区切りキーが定義するテーブルの詳細は、後述の[テーブル](#source-table)の節を参照してください。

ドットで区切られた各部分の前後の空白は無視されます。ただし、不要な空白を入れないことを推奨します。

```toml
fruit.name = "banana"       # this is best practice
fruit. color = "yellow"     # same as fruit.color
fruit . flavor = "banana"   # same as fruit.flavor
```

インデントは空白として扱われ、無視されます。

同じキーを複数回定義することは無効です。

```
# DO NOT DO THIS
name = "Tom"
name = "Pradyun"
```

裸のキーと引用符付きキーは同等であることに注意してください。

```
# THIS WILL NOT WORK
spelling = "favorite"
"spelling" = "favourite"
```

キーが直接定義されていなければ、そのキーや、その内部の名前へ引き続き値を書き込めます。

```toml
# This makes the key "fruit" into a table.
fruit.apple.smooth = true

# So then you can add to the table "fruit" like so:
fruit.orange = 2
```

```
# THE FOLLOWING IS INVALID

# This defines the value of fruit.apple to be an integer.
fruit.apple = 1

# But then this treats fruit.apple like it's a table.
# You can't turn an integer into a table.
fruit.apple.smooth = true
```

ドット区切りキーを順不同で定義することは推奨しません。

```toml
# VALID BUT DISCOURAGED

apple.type = "fruit"
orange.type = "fruit"

apple.skin = "thin"
orange.skin = "thick"

apple.color = "red"
orange.color = "orange"
```

```toml
# RECOMMENDED

apple.type = "fruit"
apple.skin = "thin"
apple.color = "red"

orange.type = "fruit"
orange.skin = "thick"
orange.color = "orange"
```

裸のキーは ASCII の整数だけでも構成できるため、浮動小数点数のように見えても、実際には 2 つの部分からなるドット区切りキーという記述が可能です。十分な理由がない限り、このような記述は避けてください。おそらく、そのような理由はないでしょう。

```toml
3.14159 = "pi"
```

上記の TOML は、次の JSON に対応します。

```json
{ "3": { "14159": "pi" } }
```

<a id="source-string"></a>

## 文字列

文字列の表し方は、基本文字列、複数行の基本文字列、リテラル文字列、複数行のリテラル文字列の 4 種類です。すべての文字列には、Unicode 文字だけを含めなければなりません。

**基本文字列**は引用符 (`"`) で囲みます。エスケープが必要な文字を除き、任意の Unicode 文字を使えます。エスケープが必要なのは、引用符、バックスラッシュ、タブ以外の制御文字 (U+0000 から U+0008、U+000A から U+001F、U+007F) です。

```toml
str = "I'm a string. \"You can quote me\". Name\tJos\xE9\nLocation\tSF."
```

便利に記述できるよう、よく使う一部の文字には短いエスケープシーケンスが用意されています。

```
\b         - backspace       (U+0008)
\t         - tab             (U+0009)
\n         - linefeed        (U+000A)
\f         - form feed       (U+000C)
\r         - carriage return (U+000D)
\e         - escape          (U+001B)
\"         - quote           (U+0022)
\\         - backslash       (U+005C)
\xHH       - unicode         (U+00HH)
\uHHHH     - unicode         (U+HHHH)
\UHHHHHHHH - unicode         (U+HHHHHHHH)
```

任意の Unicode 文字を、`\xHH`、`\uHHHH`、`\UHHHHHHHH` の形式でエスケープできます。エスケープコードは、Unicode の[スカラー値](https://unicode.org/glossary/#unicode_scalar_value)でなければなりません。

TOML の文字列はすべて Unicode 文字の列であり、バイト列*ではない*ことに注意してください。バイナリデータにこれらのエスケープコードを使うことは避けてください。バイト列と文字列の相互変換には、代わりに、16 進数列や [Base64](https://www.base64decode.org/) など、バイナリをテキストへ変換する外部の符号化方式を使うことを推奨します。

上記にないエスケープシーケンスはすべて予約されています。それらが使われた場合、TOML はエラーを出すことが望まれます。

文章を表したい場合（翻訳ファイルなど）や、とても長い文字列を複数行に分けたい場合があります。TOML では、これを簡単に記述できます。

**複数行の基本文字列**は、両端をそれぞれ 3 つの引用符で囲み、改行を含められます。開始区切りの直後にある改行は取り除かれます。それ以外の空白と改行文字は、すべてそのまま保持されます。

```toml
str1 = """
Roses are red
Violets are blue"""
```

TOML パーサーは、実行するプラットフォームに適した形へ改行を正規化して構いません。

```toml
# On a Unix system, the above multi-line string will most likely be the same as:
str2 = "Roses are red\nViolets are blue"

# On a Windows system, it will most likely be equivalent to:
str3 = "Roses are red\r\nViolets are blue"
```

不要な空白を入れずに長い文字列を記述するには、「行末のバックスラッシュ」を使います。行の最後の空白以外の文字がエスケープされていない `\` であれば、その文字と、次の空白以外の文字または終了区切りまでにあるすべての空白（改行を含む）が取り除かれます。基本文字列で有効なエスケープシーケンスは、複数行の基本文字列でもすべて有効です。

```toml
# The following strings are byte-for-byte equivalent:
str1 = "The quick brown fox jumps over the lazy dog."

str2 = """
The quick brown \


  fox jumps over \
    the lazy dog."""

str3 = """\
       The quick brown \
       fox jumps over \
       the lazy dog.\
       """
```

エスケープが必要な文字を除き、任意の Unicode 文字を使えます。エスケープが必要なのは、バックスラッシュと、タブ、LF、CR 以外の制御文字 (U+0000 から U+0008、U+000B、U+000C、U+000E から U+001F、U+007F) です。CR (U+000D) は、改行シーケンスの一部としてのみ許可されます。

複数行の基本文字列の中では、引用符 1 つ、または隣り合う引用符 2 つをどこにでも記述できます。区切りのすぐ内側にも記述できます。

```toml
str4 = """Here are two quotation marks: "". Simple enough."""
# str5 = """Here are three quotation marks: """."""  # INVALID
str5 = """Here are three quotation marks: ""\"."""
str6 = """Here are fifteen quotation marks: ""\"""\"""\"""\"""\"."""

# "This," she said, "is just a pointless statement."
str7 = """"This," she said, "is just a pointless statement.""""
```

Windows のパスや正規表現をよく記述する場合、バックスラッシュのエスケープはすぐに煩雑になり、誤りも起こりやすくなります。そのため、TOML はエスケープをまったく許可しないリテラル文字列をサポートしています。

**リテラル文字列**は、単一引用符で囲みます。基本文字列と同様に、1 行に収まっていなければなりません。

```toml
# What you see is what you get.
winpath  = 'C:\Users\nodejs\templates'
winpath2 = '\\ServerX\admin$\system32\'
quoted   = 'Tom "Dubs" Preston-Werner'
regex    = '<\i\c*\s*>'
```

エスケープがないため、単一引用符で囲んだリテラル文字列の中に単一引用符を記述する方法はありません。この問題を解決するため、TOML は複数行のリテラル文字列もサポートしています。

**複数行のリテラル文字列**は、両端をそれぞれ 3 つの単一引用符で囲み、改行を含められます。リテラル文字列と同様に、エスケープは一切ありません。開始区切りの直後にある改行は取り除かれます。TOML パーサーは、複数行の基本文字列と同じ方法で改行を正規化しなければなりません。

区切りの間のそれ以外の内容は、すべて変更せずにそのまま解釈されます。

```toml
regex2 = '''I [dw]on't need \d{2} apples'''
lines  = '''
The first newline is
trimmed in literal strings.
   All other whitespace
   is preserved.
'''
```

複数行のリテラル文字列の中では、単一引用符 1 つまたは 2 つをどこにでも記述できますが、単一引用符が 3 つ以上連続する記述は許可されません。

```toml
quot15 = '''Here are fifteen quotation marks: """""""""""""""'''

# apos15 = '''Here are fifteen apostrophes: ''''''''''''''''''  # INVALID
apos15 = "Here are fifteen apostrophes: '''''''''''''''"

# 'That,' she said, 'is still pointless.'
str = ''''That,' she said, 'is still pointless.''''
```

タブ以外の制御文字は、リテラル文字列内では許可されません。

<a id="source-integer"></a>

## 整数

整数は、小数部分を持たない数です。正の数には、先頭にプラス記号を付けられます。負の数には、先頭にマイナス記号を付けます。

```toml
int1 = +99
int2 = 42
int3 = 0
int4 = -17
```

大きな数では、読みやすくするために、数字の間にアンダースコアを使えます。各アンダースコアの両側には、それぞれ少なくとも 1 桁の数字がなければなりません。

```toml
int5 = 1_000
int6 = 5_349_221
int7 = 53_49_221  # Indian number system grouping
int8 = 1_2_3_4_5  # VALID but discouraged
```

先頭のゼロは許可されません。整数値 `-0` と `+0` は有効で、符号を付けないゼロと同じです。

非負の整数値は、16 進数、8 進数、2 進数でも表せます。これらの形式では、先頭の `+` は許可されず、接頭辞の後の先行ゼロは許可されます。16 進数の値は大文字と小文字を区別しません。数字の間のアンダースコアは許可されますが、接頭辞と値の間には置けません。

```toml
# hexadecimal with prefix `0x`
hex1 = 0xDEADBEEF
hex2 = 0xdeadbeef
hex3 = 0xdead_beef

# octal with prefix `0o`
oct1 = 0o01234567
oct2 = 0o755 # useful for Unix file permissions

# binary with prefix `0b`
bin1 = 0b11010110
```

実装は、任意の大きさの整数をサポートして構いません。少なくとも 64 ビット符号付き整数（−2^63 から 2^63−1）を受け付け、情報を失わずに扱うことを推奨します。整数を情報を失わずに表現できない場合は、エラーを発生させなければなりません。

<a id="source-float"></a>

## 浮動小数点数

浮動小数点数は、整数部（10 進整数値と同じ規則に従う）の後に、小数部、指数部、またはその両方を続けたものです。小数部と指数部の両方がある場合、小数部は指数部より前になければなりません。

```toml
# fractional
flt1 = +1.0
flt2 = 3.1415
flt3 = -0.01

# exponent
flt4 = 5e+22
flt5 = 1e06
flt6 = -2E-2

# both
flt7 = 6.626e-34
```

小数部は、小数点の後に 1 桁以上の数字を続けたものです。

指数部は、E（大文字でも小文字でもよい）の後に整数部を続けたものです。この整数部には 10 進整数値と同じ規則が適用されますが、先行ゼロを含められます。

小数点を使う場合、その両側にはそれぞれ少なくとも 1 桁の数字がなければなりません。

```
# INVALID FLOATS
invalid_float_1 = .7
invalid_float_2 = 7.
invalid_float_3 = 3.e+20
```

整数と同様に、読みやすくするためにアンダースコアを使えます。各アンダースコアの両側には少なくとも 1 桁の数字がなければなりません。

```toml
flt8 = 224_617.445_991_228
```

浮動小数点数の値 `-0.0` と `+0.0` は有効で、IEEE 754 に従って対応付けることが望まれます。

特殊な浮動小数点数の値も表せます。これらは常に小文字です。

```toml
# infinity
sf1 = inf  # positive infinity
sf2 = +inf # positive infinity
sf3 = -inf # negative infinity

# not a number
sf4 = nan  # actual sNaN/qNaN encoding is implementation-specific
sf5 = +nan # same as `nan`
sf6 = -nan # valid, actual encoding is implementation-specific
```

実装は、任意の精度をサポートして構いません。少なくとも IEEE 754 binary64 の値をサポートすることを推奨します。

<a id="source-boolean"></a>

## 真偽値

真偽値には、おなじみのトークンを使います。常に小文字です。

```toml
bool1 = true
bool2 = false
```

<a id="source-offset-date-time"></a>

## オフセット付き日時

時間上の特定の瞬間を曖昧さなく表すには、[RFC 3339](https://tools.ietf.org/html/rfc3339) 形式のオフセット付き日時を使えます。

```toml
odt1 = 1979-05-27T07:32:00Z
odt2 = 1979-05-27T00:32:00-07:00
odt3 = 1979-05-27T00:32:00.5-07:00
odt4 = 1979-05-27T00:32:00.999999-07:00
```

読みやすくするために、日付と時刻の間の区切り T をスペース文字に置き換えられます。これは RFC 3339 の 5.6 節でも許可されています。

```toml
odt4 = 1979-05-27 07:32:00Z
```

RFC 3339 に対する例外が 1 つ許可されています。秒を省略でき、その場合は `:00` とみなされます。オフセットは分の直後に続きます。

```toml
odt5 = 1979-05-27 07:32Z
odt6 = 1979-05-27 07:32-07:00
```

実装は、少なくともミリ秒の精度をサポートしなければなりません。さらに多くの桁で精度を指定できますが、サポートする精度を超えた場合、余分な桁は丸めずに切り捨てなければなりません。

<a id="source-local-date-time"></a>

## ローカル日時

[RFC 3339](https://tools.ietf.org/html/rfc3339) 形式の日時からオフセットを省略すると、オフセットやタイムゾーンに関連付けられていない日時を表します。追加の情報がなければ、時間上の瞬間には変換できません。瞬間への変換が必要な場合、その変換は実装依存です。

```toml
ldt1 = 1979-05-27T07:32:00
ldt2 = 1979-05-27T07:32:00.5
ldt3 = 1979-05-27T00:32:00.999999
```

秒を省略でき、その場合は `:00` とみなされます。

```toml
ldt3 = 1979-05-27T07:32
```

実装は、少なくともミリ秒の精度をサポートしなければなりません。さらに多くの桁で精度を指定できますが、サポートする精度を超えた場合、余分な桁は丸めずに切り捨てなければなりません。

<a id="source-local-date"></a>

## ローカル日付

[RFC 3339](https://tools.ietf.org/html/rfc3339) 形式の日時の日付部分だけを記述すると、オフセットやタイムゾーンに関連付けられていない、その日全体を表します。

```toml
ld1 = 1979-05-27
```

<a id="source-local-time"></a>

## ローカル時刻

[RFC 3339](https://tools.ietf.org/html/rfc3339) 形式の日時の時刻部分だけを記述すると、特定の日付、オフセット、タイムゾーンのいずれにも関連付けられていない、1 日の中の時刻を表します。

```toml
lt1 = 07:32:00
lt2 = 00:32:00.5
lt3 = 00:32:00.999999
```

秒を省略でき、その場合は `:00` とみなされます。

```toml
lt3 = 07:32
```

実装は、少なくともミリ秒の精度をサポートしなければなりません。さらに多くの桁で精度を指定できますが、サポートする精度を超えた場合、余分な桁は丸めずに切り捨てなければなりません。

<a id="source-array"></a>

## 配列

配列は、角括弧で囲まれた、順序を持つ値です。空白は無視されます。要素はカンマで区切ります。配列には、キーと値のペアで許可されるものと同じデータ型の値を含められます。異なる型の値を混在させても構いません。

```toml
integers = [ 1, 2, 3 ]
colors = [ "red", "yellow", "green" ]
nested_arrays_of_ints = [ [ 1, 2 ], [3, 4, 5] ]
nested_mixed_array = [ [ 1, 2 ], ["a", "b", "c"] ]
string_array = [ "all", 'strings', """are the same""", '''type''' ]

# Mixed-type arrays are allowed
numbers = [ 0.1, 0.2, 0.5, 1, 2, 5 ]
contributors = [
  "Foo Bar <foo@example.com>",
  { name = "Baz Qux", email = "bazqux@example.com", url = "https://example.com/bazqux" }
]
```

配列は複数行にわたって記述できます。最後の値の後に、末尾のカンマを置くことも許可されます。値、カンマ、閉じ角括弧の前には、任意の数の改行やコメントを置けます。配列の値とカンマの間のインデントは、空白として扱われ、無視されます。

```toml
integers2 = [
  1, 2, 3
]

integers3 = [
  1,
  2, # this is ok
]
```

<a id="source-table"></a>

## テーブル

テーブル（ハッシュテーブルや辞書とも呼ばれる）は、キーと値のペアの集合です。テーブルは、角括弧を含むヘッダーを単独の行に置いて定義します。配列は常に値としてのみ現れるため、ヘッダーと配列を区別できます。

```toml
[table]
```

ヘッダーの下から、次のヘッダーまたは EOF までが、そのテーブルのキーと値のペアです。テーブル内のキーと値のペアが、特定の順序で並ぶことは保証されません。

```toml
[table-1]
key1 = "some string"
key2 = 123

[table-2]
key1 = "another string"
key2 = 456
```

テーブルの名前には、キーと同じ規則が適用されます。前述の[キー](#source-keys)の定義を参照してください。

```toml
[dog."tater.man"]
type.name = "pug"
```

JSON では、次の構造に相当します。

```json
{ "dog": { "tater.man": { "type": { "name": "pug" } } } }
```

キーの前後の空白は無視されます。ただし、不要な空白を入れないことを推奨します。

```toml
[a.b.c]            # this is best practice
[ d.e.f ]          # same as [d.e.f]
[ g .  h  . i ]    # same as [g.h.i]
[ j . "ʞ" . 'l' ]  # same as [j."ʞ".'l']
```

インデントは空白として扱われ、無視されます。

すべての親テーブルを明示したくなければ、明示する必要はありません。TOML が自動で処理します。

```toml
# [x] you
# [x.y] don't
# [x.y.z] need these
[x.y.z.w] # for this to work

[x] # defining a super-table afterward is ok
```

空のテーブルは許可され、単に内部にキーと値のペアがないテーブルとなります。

キーと同様に、同じテーブルを複数回定義することはできません。そのような定義は無効です。

```
# DO NOT DO THIS

[fruit]
apple = "red"

[fruit]
orange = "orange"
```

```
# DO NOT DO THIS EITHER

[fruit]
apple = "red"

[fruit.apple]
texture = "smooth"
```

テーブルを順不同で定義することは推奨しません。

```toml
# VALID BUT DISCOURAGED
[fruit.apple]
[animal]
[fruit.orange]
```

```toml
# RECOMMENDED
[fruit.apple]
[fruit.orange]
[animal]
```

トップレベルのテーブルはルートテーブルとも呼ばれ、文書の先頭から最初のテーブルヘッダーの直前（または EOF）までを範囲とします。他のテーブルと異なり、名前がなく、位置を移動できません。

```toml
# Top-level table begins.
name = "Fido"
breed = "pug"

# Top-level table ends.
[owner]
name = "Regina Dogman"
member_since = 1999-08-04
```

ドット区切りキーは、最後の部分より前の各キー部分について、テーブルを作成して定義します。そのようなテーブルのすべてのキーと値のペアは、現在の `[table]` ヘッダーの下、すべてのヘッダーより前に定義する場合はルートテーブル内、または 1 つのインラインテーブル内で定義しなければなりません。

```toml
fruit.apple.color = "red"
# Defines a table named fruit
# Defines a table named fruit.apple

fruit.apple.taste.sweet = true
# Defines a table named fruit.apple.taste
# fruit and fruit.apple were already created
```

テーブルは複数回定義できないため、ドット区切りキーで定義したテーブルを `[table]` ヘッダーで再定義することは許可されません。同様に、すでに `[table]` 形式で定義したテーブルをドット区切りキーで再定義することも許可されません。ただし、ドット区切りキーで定義したテーブル内のサブテーブルを定義するために、`[table]` 形式を使うことはできます。

```toml
[fruit]
apple.color = "red"
apple.taste.sweet = true

# [fruit.apple]  # INVALID
# [fruit.apple.taste]  # INVALID

[fruit.apple.texture]  # you can add sub-tables
smooth = true
```

<a id="source-inline-table"></a>

## インラインテーブル

インラインテーブルは、テーブルをより簡潔な構文で表す方法です。グループ化された入れ子のデータを表す際に特に役立ち、そうしたデータの記述がすぐに冗長になるのを防げます。

インラインテーブルは、波括弧 `{` と `}` の中で完全に定義します。波括弧の中には、カンマで区切った 0 個以上のキーと値のペアを記述できます。キーと値のペアの形式は、通常のテーブルと同じです。インラインテーブルを含め、すべての値の型が許可されます。

インラインテーブルでは、同じ行に複数のキーと値のペアを記述することも、別々の行に記述することもできます。最後のキーと値のペアの後に、末尾のカンマを置くことも許可されます。

```toml
name = { first = "Tom", last = "Preston-Werner" }
point = {x=1, y=2}
animal = { type.name = "pug" }
contact = {
    personal = {
        name = "Donald Duck",
        email = "donald@duckburg.com",
    },
    work = {
        name = "Coin cleaner",
        email = "donald@ScroogeCorp.com",
    },
}
```

上記のインラインテーブルは、次の通常のテーブル定義と同じです。

```toml
[name]
first = "Tom"
last = "Preston-Werner"

[point]
x = 1
y = 2

[animal]
type.name = "pug"

[contact.personal]
name = "Donald Duck"
email = "donald@duckburg.com"

[contact.work]
name = "Coin cleaner"
email = "donald@ScroogeCorp.com"
```

インラインテーブルは、それだけで完結しており、内部のすべてのキーとサブテーブルを定義します。波括弧の外からキーやサブテーブルを追加することはできません。

```toml
[product]
type = { name = "Nail" }
# type.edible = false  # INVALID
```

同様に、すでに定義されたテーブルへキーやサブテーブルを追加するために、インラインテーブルを使うことはできません。

```toml
[product]
type.name = "Nail"
# type = { edible = false }  # INVALID
```

<a id="source-array-of-tables"></a>

## テーブルの配列

まだ説明していない最後の構文では、テーブルの配列を記述できます。名前を二重の角括弧で囲んだヘッダーを使って表します。このヘッダーが最初に現れるときに、配列と、その最初のテーブル要素が定義されます。その後、同じヘッダーが現れるたびに、その配列内で新しいテーブル要素が作成され、定義されます。テーブルは、出現した順に配列へ挿入されます。

```toml
[[product]]
name = "Hammer"
sku = 738594937

[[product]]  # empty table within the array

[[product]]
name = "Nail"
sku = 284758393

color = "gray"
```

JSON では、次の構造に相当します。

```json
{
  "product": [
    { "name": "Hammer", "sku": 738594937 },
    {},
    { "name": "Nail", "sku": 284758393, "color": "gray" }
  ]
}
```

テーブルの配列への参照は、その配列内で最も直近に定義されたテーブル要素を指します。これにより、その直近のテーブル内にサブテーブルや、さらにテーブルのサブ配列を定義できます。

```toml
[[fruits]]
name = "apple"

[fruits.physical]  # subtable
color = "red"
shape = "round"

[[fruits.varieties]]  # nested array of tables
name = "red delicious"

[[fruits.varieties]]
name = "granny smith"


[[fruits]]
name = "banana"

[[fruits.varieties]]
name = "plantain"
```

上記の TOML は、次の JSON に対応します。

```json
{
  "fruits": [
    {
      "name": "apple",
      "physical": {
        "color": "red",
        "shape": "round"
      },
      "varieties": [{ "name": "red delicious" }, { "name": "granny smith" }]
    },
    {
      "name": "banana",
      "varieties": [{ "name": "plantain" }]
    }
  ]
}
```

テーブルまたはテーブルの配列の親が配列要素の場合、子を定義する前に、その要素がすでに定義されていなければなりません。この順序を逆にしようとした場合、解析時にエラーを発生させなければなりません。

```
# INVALID TOML DOC
[fruit.physical]  # subtable, but to which parent element should it belong?
color = "red"
shape = "round"

[[fruit]]  # parser must throw an error upon discovering that "fruit" is
           # an array rather than a table
name = "apple"
```

静的に定義された配列へ要素を追加しようとした場合は、その配列が空でも、解析時にエラーを発生させなければなりません。

```
# INVALID TOML DOC
fruits = []

[[fruits]] # Not allowed
```

すでに確立された配列と同じ名前の通常のテーブルを定義しようとした場合、解析時にエラーを発生させなければなりません。同様に、通常のテーブルを配列として再定義しようとした場合も、解析時にエラーを発生させなければなりません。

```
# INVALID TOML DOC
[[fruits]]
name = "apple"

[[fruits.varieties]]
name = "red delicious"

# INVALID: This table conflicts with the previous array of tables
[fruits.varieties]
name = "granny smith"

[fruits.physical]
color = "red"
shape = "round"

# INVALID: This array of tables conflicts with the previous table
[[fruits.physical]]
color = "green"
```

適切な場合には、インラインテーブルも使えます。

```toml
points = [ { x = 1, y = 2, z = 3 },
           { x = 7, y = 8, z = 9 },
           { x = 2, y = 4, z = 8 } ]
```

<a id="source-filename-extension"></a>

## ファイル名の拡張子

TOML ファイルには、拡張子 `.toml` を使うことが望まれます。

<a id="source-mime-type"></a>

## MIME タイプ

インターネットで TOML ファイルを転送するときの適切な MIME タイプは、`application/toml` です。

<a id="source-abnf-grammar"></a>

## ABNF 文法

TOML の構文を形式的に記述したものが、別の [ABNF ファイル][abnf]として用意されています。

[abnf]: /docs/toml/v1-1-0/ja/02-reference/02-abnf/
