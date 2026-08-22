---
title: "jagracey/Awesome-Unicode"
description: "Unicodeの標準、符号化、文字特性、絵文字、ライブラリ、フォントを整理した定本スナップショット"
licenseSource: "github-jagracey-Awesome-Unicode-readme-md"
---

![](https://raw.githubusercontent.com/jagracey/Awesome-Unicode/58f28d08aef7f36eb6cdca22d25e7654cd8de5ae/resources/banner.jpg)


# UnicodeのAwesomeリスト <a id="awesome-unicode"></a> [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)



> UnicodeのAwesomeリストに関するUnicode標準・文字処理の解説です。

*UnicodeのAwesomeリストに関するUnicode標準・文字処理の解説です。 関連参照: <https://github.com/jagracey/Awesome-Unicode/blob/e219c3f2de42804eae17107149fa5a025b02bc23/CONTRIBUTING.md>。
*UnicodeのAwesomeリストに関するUnicode標準・文字処理の解説です。 関連参照: <https://github.com/jagracey/Awesome-Unicode/blob/e219c3f2de42804eae17107149fa5a025b02bc23/GLOSSARY.md>。

*UnicodeのAwesomeリストに関するUnicode標準・文字処理の解説です。 関連参照: <https://wisdom.engineering/awesome-unicode/>。

<br><br>

# 前書き <a id="foreword"></a>

Unicodeは素晴らしいものです。Unicode以前は各自がASCII上位領域に異なる拡張文字集合（コードページ）を定義し、国際通信で衝突していました。Unicode標準は通信を統一し、Unicode 8.0では現代・古代・未解読の129超の書記体系から12万超の文字を標準化しています。左右両方向の文字、結合記号、多様な文化・政治・宗教上の文字や絵文字を扱います。

<br>

# 目次 <a id="contents"></a>

- [Unicodeの基礎](#quick-unicode-background)
	- [Unicode標準に含まれる文字](#what-characters-does-the-unicode-standard-include)
	- [Unicode文字エンコーディング](#unicode-character-encodings)
	- [数値の話](#lets-talk-numbers)
	- [UTF-16サロゲートペア](#utf-16-surrogate-pairs)
	- [サロゲートペアの計算](#calculating-surrogate-pairs)
	- [合成と分解](#composing--decomposing)
	- [Unicodeの誤解](#myths-of-unicode)
	- [Unicodeエンコーディングの応用](#applied-unicode-encodings)
	- [ソースコード](#source-code)
- [優れた文字の一覧](#awesome-characters-list)
	- [特殊文字](#special-characters)
	- [変数識別子には実質的に空白を含められる](#variable-identifiers-can-effectively-include-whitespace)
	- [修飾子](#modifiers)
	- [Uppercase Transformation Collisions](#collision-uppercase-transformation-collisions)
	- [Lowercase Transformation Collisions](#collision-lowercase-transformation-collisions)
- [癖とトラブルシューティング](#quirks-and-troubleshooting)
	- [一対多の大小文字対応](#one-to-many-case-mappings)
- [優れたパッケージとライブラリ](#awesome-packages--libraries)
- [絵文字](#emojis)
	- [多様性](#diversity)
- [変数・メソッドの創造的な命名](#creatively-naming-variables-and-methods)
	- [再帰的HTMLタグ改名スクリプト](#recursive-html-tag-renaming-script)
- [Unicodeフォント](#unicode-fonts)
- [追加資料](#more-reading)
- [Unicodeをさらに深く調べる](#exploring-deeper-into-unicode-yourself)
- [概要図](#overview-map)
	- [基本多言語面の図](#a-map-of-the-basic-multilingual-plane)
	- [Unicodeブロック](#unicode-blocks)
- [Unicode標準の原則](#principles-of-the-unicode-standard)
- [Unicodeの版](#unicode-versions)
- [コントリビューション](#contributing)
- [行動規範](#code-of-conduct)
- [ライセンス](#license)


# Unicodeの基礎 <a id="quick-unicode-background"></a>

## Unicode標準に含まれる文字 <a id="what-characters-does-the-unicode-standard-include"></a>

Unicode標準に含まれる文字に関するUnicode標準・文字処理の解説です。

Unicode標準に含まれる文字に関するUnicode標準・文字処理の解説です。 値: 9.0、128,172。

Unicode標準に含まれる文字に関するUnicode標準・文字処理の解説です。 値: 850,000。

Unicode標準に含まれる文字に関するUnicode標準・文字処理の解説です。 値: 6,400、131,068、6,400。



## Unicode文字エンコーディング <a id="unicode-character-encodings"></a>

Unicode文字エンコーディングに関するUnicode標準・文字処理の解説です。

Unicode文字エンコーディングに関するUnicode標準・文字処理の解説です。 値: 8、16、32。

Unicode文字エンコーディングに関するUnicode標準・文字処理の解説です。 値: 8、8、8。

Unicode文字エンコーディングに関するUnicode標準・文字処理の解説です。 値: 16、16、16。

Unicode文字エンコーディングに関するUnicode標準・文字処理の解説です。 値: 32、32、32。

Unicode文字エンコーディングに関するUnicode標準・文字処理の解説です。 値: 4、32。




## 数値の話 <a id="lets-talk-numbers"></a>


数値の話に関するUnicode標準・文字処理の解説です。 値: 17、65,536、2、1,114,112、16、17、131,072。

| \#  | Name                                    | Range                  |
|-----|-----------------------------------------|------------------------|
| 1.  | **Basic Multilingual Plane**            | (U+0000 to U+FFFF)     |
| 2.  | **Supplementary Multilingual Plane**    | (U+10000 to U+1FFFF)   |
| 3.  | **Supplementary Ideographic Plane**     | (U+20000 to U+2FFFF)   |
| 4.  | Tertiary Ideographic Plane              | (U+30000 to U+3FFFF)   |
| 5.  | Plane 5 (unassigned)                    | (U+40000 to U+4FFFF)   |
| 6.  | Plane 6 (unassigned)                    | (U+50000 to U+5FFFF)   |
| 7.  | Plane 7 (unassigned)                    | (U+60000 to U+6FFFF)   |
| 8.  | Plane 8 (unassigned)                    | (U+70000 to U+7FFFF)   |
| 9.  | Plane 9 (unassigned)                    | (U+80000 to U+8FFFF)   |
| 10. | Plane 10 (unassigned)                   | (U+90000 to U+9FFFF)   |
| 11. | Plane 11 (unassigned)                   | (U+A0000 to U+AFFFF)   |
| 12. | Plane 12 (unassigned)                   | (U+B0000 to U+BFFFF)   |
| 13. | Plane 13 (unassigned)                   | (U+C0000 to U+CFFFF)   |
| 14. | Plane 14 (unassigned)                   | (U+D0000 to U+DFFFF)   |
| 15. | **Supplementary Special-purpose Plane** | (U+E0000 to U+EFFFF)   |
| 16. | **Supplementary Private Use Area - A**  | (U+F0000 to U+FFFFF)   |
| 17. | **Supplementary Private Use Area - B**  | (U+100000 to U+10FFFF) |


数値の話に関するUnicode標準・文字処理の解説です。 値: U+0000、U+FFFF、U+010000、U+10FFFF。




## UTF-16サロゲートペア <a id="utf-16-surrogate-pairs"></a>
> UTF-16サロゲートペアに関するUnicode標準・文字処理の解説です。 値: U+1D306、16、16、0xD834、0xDF06。
UTF-16サロゲートペアに関するUnicode標準・文字処理の解説です。 値: 0xD800、0xDBFF。
UTF-16サロゲートペアに関するUnicode標準・文字処理の解説です。 値: 0xDC00、0xDFFF。

-UTF-16サロゲートペアに関するUnicode標準・文字処理の解説です。 関連参照: <https://mathiasbynens.be/notes/javascript-encoding#surrogate-pairs>。

> UTF-16サロゲートペアに関するUnicode標準・文字処理の解説です。
UTF-16サロゲートペアに関するUnicode標準・文字処理の解説です。 値: 16。
UTF-16サロゲートペアに関するUnicode標準・文字処理の解説です。 値: 16、3.9。
UTF-16サロゲートペアに関するUnicode標準・文字処理の解説です。 関連参照: <http://unicode.org/versions/Unicode8.0.0/ch03.pdf#page=47>。 値: 8.0.0、3、0.0、47。


## サロゲートペアの計算 <a id="calculating-surrogate-pairs"></a>

サロゲートペアの計算に関するUnicode標準・文字処理の解説です。 値: U+1F4A9、16。

```javascript
 var High_Surrogate = function(Code_Point){ return Math.floor((Code_Point - 0x10000) / 0x400) + 0xD800 };
 var Low_Surrogate  = function(Code_Point){ return (Code_Point - 0x10000) % 0x400 + 0xDC00 };

 // Reverses The Conversion
 var Code_Point = function(High_Surrogate, Low_Surrogate){
	return (High_Surrogate - 0xD800) * 0x400 + Low_Surrogate - 0xDC00 + 0x10000;
 };
```

```javascript
 > var codepoint = 0x1F4A9;   								// 0x1F4A9 == 128169
 > High_Surrogate(codepoint).toString(16)
 "d83d"  													// 0xD83D == 55357
 > Low_Surrogate(codepoint).toString(16)
 "dca9"  													// 0xDCA9 == 56489

 > String.fromCharCode(  High_Surrogate(codepoint) , Low_Surrogate(codepoint) );
  "💩"
> String.fromCodePoint(0x1F4A9)
  "💩"
 > '\ud83d\udca9'
  "💩"
```



## 合成と分解 <a id="composing--decomposing"></a>
合成と分解に関するUnicode標準・文字処理の解説です。



合成と分解に関するUnicode標準・文字処理の解説です。 値: U+00FC、U+0075、U+0308、1。

合成と分解に関するUnicode標準・文字処理の解説です。 関連参照: <http://unicode.org/versions/Unicode8.0.0/ch03.pdf#page=44>。 値: 0.0、44。


## Unicodeの誤解 <a id="myths-of-unicode"></a>
*Unicodeの誤解に関するUnicode標準・文字処理の解説です。 関連参照: <http://macchiato.com/slides/UnicodeMyths.pdf>。
- Unicodeの誤解に関するUnicode標準・文字処理の解説です。 値: 16、16、16、65,536。

- Unicodeの誤解に関するUnicode標準・文字処理の解説です。

- Unicodeの誤解に関するUnicode標準・文字処理の解説です。
Unicodeの誤解に関するUnicode標準・文字処理の解説です。

- Unicodeの誤解に関するUnicode標準・文字処理の解説です。 関連参照: <http://www.unicode.org/roadmaps/>

- Unicodeの誤解に関するUnicode標準・文字処理の解説です。 値: 1、1。
  - Unicodeの誤解に関するUnicode標準・文字処理の解説です。
  - Unicodeの誤解に関するUnicode標準・文字処理の解説です。
  - Unicodeの誤解に関するUnicode標準・文字処理の解説です。




## Unicodeエンコーディングの応用 <a id="applied-unicode-encodings"></a>


| Encoding Type 			|  Raw Encoding							|
|---------------------------|---------------------------------------|
|HTML Entity (Decimal) 		| &#128406;								|
|HTML Entity (Hexadecimal)  | &#x1F596;								|
|URL Escape Code 			| %F0%9F%96%96							|
|UTF-8 (hex) 				| 0xF0 0x9F 0x96 0x96 (f09f9696)		|
|UTF-8 (binary)				| 11110000:10011111:10010110:10010110	|
|UTF-16/UTF-16BE (hex)  	| 0xD83D 0xDD96 (d83ddd96)				|
|UTF-16LE (hex) 			| 0x3DD8 0x96DD (3dd896dd)				|
|UTF-32/UTF-32BE (hex)  	| 0x0001F596 (0001f596)					|
|UTF-32LE (hex) 			| 0x96F50100 (96f50100)					|
|Octal Escape Sequence  	| \360\237\226\226						|


## ソースコード <a id="source-code"></a>
|Encoding Type| Raw Encoding|
|-------------|-------------|
| JavaScript  | \u1F596 	|
| JSON 	 	  | \u1F596 	|
| C 		  | \u1F596 	|
| C++ 		  | \u1F596 	|
| Java		  | \u1F596		|
| Python	  | \u1F596 	|
| Perl		  | \x{1F596}	|
| Ruby		  | \u{1F596}	|
| CSS		  | \01F596 	|






# 優れた文字の一覧 <a id="awesome-characters-list"></a>




<center>
優れた文字の一覧に関するUnicode標準・文字処理の解説です。 関連参照: <http://imgs.xkcd.com/comics/rtl.png>、<https://xkcd.com/1137/>。 値: 1137。
</center>

## 特殊文字 <a id="special-characters"></a>

特殊文字に関するUnicode標準・文字処理の解説です。 関連参照: <http://www.unicode.org/charts/PDF/U2000.pdf>。


| Char     | Name                                     | Description                                                                                                                                                                                    |
|----------|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `'﻿'`    | U+FEFF (Byte Order Mark - BOM)           | has the important property of unambiguity on byte reorder. It is also zerowidth, and invisible. In non-complying software (like the PHP interpreter) this leads to all sorts of fun behaviour. |
| `'￯'`    | '\\uFFEF' Reversed Byte Order Mark (BOM) | does not equate to a legal character, other than the beginning of text.                                                                                                                        |
| `'​'`    | '\\u200B' zero-width non-break space     | (a character with no appearance and no effect other than preventing the formation of ligatures).                                                                                               |
| `' '`    | U+00A0 NO-BREAK SPACE                    | force adjacent characters to stick together. Well known as `&nbsp;`  in HTML.                                                                                                                          |
| `'­'`    | U+00AD SOFT HYPHEN                       | (in HTML: ­) like ZERO WIDTH SPACE, but show a hyphen if (and only if) a break occurs.                                                                                                         |
| `'‍'`    | U+200D ZERO WIDTH JOINER                 | force adjacent characters to be joined together (e.g., arabic characters or supported emoji). Can be used this to compose sequentially combined emoji.                                         |
| `'⁠'`    | U+2060 WORD JOINER                       | the same as U+00A0, but completely invisible. Good for writing @font-face on Twitter.                                                                                                          |
| `' '`    | U+1680 OGHAM SPACE MARK                  | a space that looks like a dash. Great to bring programmers close to madness: 1 +  2 === 3.                                                                                                     |
| `';'`    | U+037E GREEK QUESTION MARK               | a look-alike to the semicolon. Also a fun way to annoy developers.                                                                                                                             |
| `'‭'`    | U+202D                                   | change the text direction to Left-to-Right.                                                                                                                                                    |
| `'‮'`‭ ‭ | U+202E                                   | change the text direction to Right-to-Left:                                                                                                                                     |
| `'ꓸ'` | U+A4F8 LISU LETTER TONE MYA TI |A lookalike for the period character. |
| `'ꓹ'` | U+A4F9 LISU LETTER TONE NA PO |A lookalike for the comma character.|
| `'ꓼ'` | U+A4FC LISU LETTER TONE MYA NA |A lookalike for the semi-colon character.|
| `'ꓽ'` | U+A4FD LISU LETTER TONE MYA JEU|A lookalike for the colon character.|
| `'︀'` | **Variation Selectors** ( U+FE00 to U+FE0F & U+E0100 to U+E01EF )  | a block of 256 zero width characters that posess the ID_Continue proprerty- meaning they can be used in variable names (not the first letter). What makes these special is the fact that mouse cursors pass over them as they are combining characters - unlike most other zero width characters.|
| `'ᅟ'` | **U+115F HANGUL CHOSEONG FILLER** | In general it produces a space. Rendered as zero width (invisible) if not explicitly supported in rendering. Designated ID_Start|
| `'ᅠ'`  | **U+1160 HANGUL JUNGSEONG FILLER**  | Perhaps it produces a space? Rendered as zero width (invisible) if not explicitly supported in rendering. Designated ID_Start|
| `'ㅤ'` | **U+3164 HANGUL FILLER** | In general it produces a space. Rendered as zero width (invisible) if not explicitly supported in rendering. Designated ID_Start |
<br><br>
#### 今読んだものは何だったのか <a id="wait-a-second-what-did-i-just-read"></a>


<br><br>
## 変数識別子には実質的に空白を含められる <a id="variable-identifiers-can-effectively-include-whitespace"></a>

変数識別子には実質的に空白を含められるに関するUnicode標準・文字処理の解説です。 関連参照: <http://unicode.org/faq/unsup_char.html>。 値: U+3164。

変数識別子には実質的に空白を含められるに関するUnicode標準・文字処理の解説です。 値: U+3164、U+3164、1.1、1993。

```javascript
> var ᅟ = 'foo';
undefined
> ᅟ
'foo'


> var ㅤ= alert;
undefined
> var foo = 'bar'
undefined
> if ( foo ===ㅤ`baz` ){} 	// alert
undefined


> var varㅤfooㅤ\u{A60C}ㅤπ = 'bar';
undefined
> varㅤfooㅤꘌㅤπ
'bar'

```
<br>
*変数識別子には実質的に空白を含められるに関するUnicode標準・文字処理の解説です。 コード: `node`、`php`、`ruby`、`python3.5`、`scala`、`vim`、`cat`、`chrome`、`github gist`。 値: U+3164、5。


<br>



## 修飾子 <a id="modifiers"></a>

修飾子に関するUnicode標準・文字処理の解説です。

修飾子に関するUnicode標準・文字処理の解説です。



```javascript
> 'a'
 "a"

> 'a\u{0308}'
 "ä"

> 'a\u{20DE}\u{0308}'
 "a⃞̈"

> 'a\u{20DE}\u{0308}\u{20DD}'
 "a⃞̈⃝"

// Modifying Invisible Characters
> '\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}'
 "‎‎‎‎‎‎‎‎‎‎"

> '\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}'.length
 10
```


## :collision: 大文字変換の衝突 <a id="collision-uppercase-transformation-collisions"></a>

| Char | Code Point | Output Char |
|------|------------|-------------|
| ß | 0x00DF | `SS` |
| ı | 0x0131 | `I`  |
| ſ | 0x017F | `S`  |
| ﬀ | 0xFB00 | `FF` |
| ﬁ | 0xFB01 | `FI` |
| ﬂ | 0xFB02 | `FL` |
| ﬃ | 0xFB03 | `FFI`|
| ﬄ | 0xFB04 | `FFL`|
| ﬅ | 0xFB05 | `ST` |
| ﬆ | 0xFB06 | `ST` |

## :collision: 小文字変換の衝突 <a id="collision-lowercase-transformation-collisions"></a>
| Char | Code Point | Output Char |
|------|------------|-------------|
| K | 0x212A | `k` |



# 癖とトラブルシューティング <a id="quirks-and-troubleshooting"></a>

- 癖とトラブルシューティングに関するUnicode標準・文字処理の解説です。 コード: `a + ̈  == ̈a   `。

- 癖とトラブルシューティングに関するUnicode標準・文字処理の解説です。 関連参照: <https://github.com/mathiasbynens/esrever>。

- 癖とトラブルシューティングに関するUnicode標準・文字処理の解説です。
  - 癖とトラブルシューティングに関するUnicode標準・文字処理の解説です。
  - 癖とトラブルシューティングに関するUnicode標準・文字処理の解説です。
  - 癖とトラブルシューティングに関するUnicode標準・文字処理の解説です。



### 一対多の大小文字対応 <a id="one-to-many-case-mappings"></a>
*一対多の大小文字対応に関するUnicode標準・文字処理の解説です。





| Code Point                                      | Character | Name                                                                     | Mapped Character | Mapped Code Points     |
|-------------------------------------------------|-----------|--------------------------------------------------------------------------|------------------|------------------------|
| [U+00DF](https://codepoints.net/U+00DF?lang=en) | `ß`       | LATIN SMALL LETTER SHARP S                                               | `s`, `s`         | U+0073, U+0073         |
| [U+0130](https://codepoints.net/U+0130?lang=en) | `İ`       | LATIN CAPITAL LETTER I WITH DOT ABOVE                                    | `i`, `̇`          | U+0069, U+0307         |
| [U+0149](https://codepoints.net/U+0149?lang=en) | `ŉ`       | LATIN SMALL LETTER N PRECEDED BY APOSTROPHE                              | `ʼ`, `n`         | U+02BC, U+006E         |
| [U+01F0](https://codepoints.net/U+01F0?lang=en) | `ǰ`       | LATIN SMALL LETTER J WITH CARON                                          | `j`, `̌`          | U+006A, U+030C         |
| [U+0390](https://codepoints.net/U+0390?lang=en) | `ΐ`       | GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS                         | `ι`, `̈`, `́`      | U+03B9, U+0308, U+0301 |
| [U+03B0](https://codepoints.net/U+03B0?lang=en) | `ΰ`       | GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS                      | `υ`, `̈`, `́`      | U+03C5, U+0308, U+0301 |
| [U+0587](https://codepoints.net/U+0587?lang=en) | `և`       | ARMENIAN SMALL LIGATURE ECH YIWN                                         | `ե`, `ւ`         | U+0565, U+0582         |
| [U+1E96](https://codepoints.net/U+1E96?lang=en) | `ẖ`       | LATIN SMALL LETTER H WITH LINE BELOW                                     | `h`, `̱`          | U+0068, U+0331         |
| [U+1E97](https://codepoints.net/U+1E97?lang=en) | `ẗ`       | LATIN SMALL LETTER T WITH DIAERESIS                                      | `t`, `̈`          | U+0074, U+0308         |
| [U+1E98](https://codepoints.net/U+1E98?lang=en) | `ẘ`       | LATIN SMALL LETTER W WITH RING ABOVE                                     | `w`, `̊`          | U+0077, U+030A         |
| [U+1E99](https://codepoints.net/U+1E99?lang=en) | `ẙ`       | LATIN SMALL LETTER Y WITH RING ABOVE                                     | `y`, `̊`          | U+0079, U+030A         |
| [U+1E9A](https://codepoints.net/U+1E9A?lang=en) | `ẚ`       | LATIN SMALL LETTER A WITH RIGHT HALF RING                                | `a`, `ʾ`         | U+0061, U+02BE         |
| [U+1E9E](https://codepoints.net/U+1E9E?lang=en) | `ẞ`       | LATIN CAPITAL LETTER SHARP S                                             | `s`, `s`         | U+0073, U+0073         |
| [U+1F50](https://codepoints.net/U+1F50?lang=en) | `ὐ`       | GREEK SMALL LETTER UPSILON WITH PSILI                                    | `υ`, `̓`          | U+03C5, U+0313         |
| [U+1F52](https://codepoints.net/U+1F52?lang=en) | `ὒ`       | GREEK SMALL LETTER UPSILON WITH PSILI AND VARIA                          | `υ`, `̓`, `̀`      | U+03C5, U+0313, U+0300 |
| [U+1F54](https://codepoints.net/U+1F54?lang=en) | `ὔ`       | GREEK SMALL LETTER UPSILON WITH PSILI AND OXIA                           | `υ`, `̓`, `́`      | U+03C5, U+0313, U+0301 |
| [U+1F56](https://codepoints.net/U+1F56?lang=en) | `ὖ`       | GREEK SMALL LETTER UPSILON WITH PSILI AND PERISPOMENI                    | `υ`, `̓`, `͂`      | U+03C5, U+0313, U+0342 |
| [U+1F80](https://codepoints.net/U+1F80?lang=en) | `ᾀ`       | GREEK SMALL LETTER ALPHA WITH PSILI AND YPOGEGRAMMENI                    | `ἀ`, `ι`         | U+1F00, U+03B9         |
| [U+1F81](https://codepoints.net/U+1F81?lang=en) | `ᾁ`       | GREEK SMALL LETTER ALPHA WITH DASIA AND YPOGEGRAMMENI                    | `ἁ`, `ι`         | U+1F01, U+03B9         |
| [U+1F82](https://codepoints.net/U+1F82?lang=en) | `ᾂ`       | GREEK SMALL LETTER ALPHA WITH PSILI AND VARIA AND YPOGEGRAMMENI          | `ἂ`, `ι`         | U+1F02, U+03B9         |
| [U+1F83](https://codepoints.net/U+1F83?lang=en) | `ᾃ`       | GREEK SMALL LETTER ALPHA WITH DASIA AND VARIA AND YPOGEGRAMMENI          | `ἃ`, `ι`         | U+1F03, U+03B9         |
| [U+1F84](https://codepoints.net/U+1F84?lang=en) | `ᾄ`       | GREEK SMALL LETTER ALPHA WITH PSILI AND OXIA AND YPOGEGRAMMENI           | `ἄ`, `ι`         | U+1F04, U+03B9         |
| [U+1F85](https://codepoints.net/U+1F85?lang=en) | `ᾅ`       | GREEK SMALL LETTER ALPHA WITH DASIA AND OXIA AND YPOGEGRAMMENI           | `ἅ`, `ι`         | U+1F05, U+03B9         |
| [U+1F86](https://codepoints.net/U+1F86?lang=en) | `ᾆ`       | GREEK SMALL LETTER ALPHA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI    | `ἆ`, `ι`         | U+1F06, U+03B9         |
| [U+1F87](https://codepoints.net/U+1F87?lang=en) | `ᾇ`       | GREEK SMALL LETTER ALPHA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI    | `ἇ`, `ι`         | U+1F07, U+03B9         |
| [U+1F88](https://codepoints.net/U+1F88?lang=en) | `ᾈ`       | GREEK CAPITAL LETTER ALPHA WITH PSILI AND PROSGEGRAMMENI                 | `ἀ`, `ι`         | U+1F00, U+03B9         |
| [U+1F89](https://codepoints.net/U+1F89?lang=en) | `ᾉ`       | GREEK CAPITAL LETTER ALPHA WITH DASIA AND PROSGEGRAMMENI                 | `ἁ`, `ι`         | U+1F01, U+03B9         |
| [U+1F8A](https://codepoints.net/U+1F8A?lang=en) | `ᾊ`       | GREEK CAPITAL LETTER ALPHA WITH PSILI AND VARIA AND PROSGEGRAMMENI       | `ἂ`, `ι`         | U+1F02, U+03B9         |
| [U+1F8B](https://codepoints.net/U+1F8B?lang=en) | `ᾋ`       | GREEK CAPITAL LETTER ALPHA WITH DASIA AND VARIA AND PROSGEGRAMMENI       | `ἃ`, `ι`         | U+1F03, U+03B9         |
| [U+1F8C](https://codepoints.net/U+1F8C?lang=en) | `ᾌ`       | GREEK CAPITAL LETTER ALPHA WITH PSILI AND OXIA AND PROSGEGRAMMENI        | `ἄ`, `ι`         | U+1F04, U+03B9         |
| [U+1F8D](https://codepoints.net/U+1F8D?lang=en) | `ᾍ`       | GREEK CAPITAL LETTER ALPHA WITH DASIA AND OXIA AND PROSGEGRAMMENI        | `ἅ`, `ι`         | U+1F05, U+03B9         |
| [U+1F8E](https://codepoints.net/U+1F8E?lang=en) | `ᾎ`       | GREEK CAPITAL LETTER ALPHA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI | `ἆ`, `ι`         | U+1F06, U+03B9         |
| [U+1F8F](https://codepoints.net/U+1F8F?lang=en) | `ᾏ`       | GREEK CAPITAL LETTER ALPHA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI | `ἇ`, `ι`         | U+1F07, U+03B9         |
| [U+1F90](https://codepoints.net/U+1F90?lang=en) | `ᾐ`       | GREEK SMALL LETTER ETA WITH PSILI AND YPOGEGRAMMENI                      | `ἠ`, `ι`         | U+1F20, U+03B9         |
| [U+1F91](https://codepoints.net/U+1F91?lang=en) | `ᾑ`       | GREEK SMALL LETTER ETA WITH DASIA AND YPOGEGRAMMENI                      | `ἡ`, `ι`         | U+1F21, U+03B9         |
| [U+1F92](https://codepoints.net/U+1F92?lang=en) | `ᾒ`       | GREEK SMALL LETTER ETA WITH PSILI AND VARIA AND YPOGEGRAMMENI            | `ἢ`, `ι`         | U+1F22, U+03B9         |
| [U+1F93](https://codepoints.net/U+1F93?lang=en) | `ᾓ`       | GREEK SMALL LETTER ETA WITH DASIA AND VARIA AND YPOGEGRAMMENI            | `ἣ`, `ι`         | U+1F23, U+03B9         |
| [U+1F94](https://codepoints.net/U+1F94?lang=en) | `ᾔ`       | GREEK SMALL LETTER ETA WITH PSILI AND OXIA AND YPOGEGRAMMENI             | `ἤ`, `ι`         | U+1F24, U+03B9         |
| [U+1F95](https://codepoints.net/U+1F95?lang=en) | `ᾕ`       | GREEK SMALL LETTER ETA WITH DASIA AND OXIA AND YPOGEGRAMMENI             | `ἥ`, `ι`         | U+1F25, U+03B9         |
| [U+1F96](https://codepoints.net/U+1F96?lang=en) | `ᾖ`       | GREEK SMALL LETTER ETA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI      | `ἦ`, `ι`         | U+1F26, U+03B9         |
| [U+1F97](https://codepoints.net/U+1F97?lang=en) | `ᾗ`       | GREEK SMALL LETTER ETA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI      | `ἧ`, `ι`         | U+1F27, U+03B9         |
| [U+1F98](https://codepoints.net/U+1F98?lang=en) | `ᾘ`       | GREEK CAPITAL LETTER ETA WITH PSILI AND PROSGEGRAMMENI                   | `ἠ`, `ι`         | U+1F20, U+03B9         |
| [U+1F99](https://codepoints.net/U+1F99?lang=en) | `ᾙ`       | GREEK CAPITAL LETTER ETA WITH DASIA AND PROSGEGRAMMENI                   | `ἡ`, `ι`         | U+1F21, U+03B9         |
| [U+1F9A](https://codepoints.net/U+1F9A?lang=en) | `ᾚ`       | GREEK CAPITAL LETTER ETA WITH PSILI AND VARIA AND PROSGEGRAMMENI         | `ἢ`, `ι`         | U+1F22, U+03B9         |
| [U+1F9B](https://codepoints.net/U+1F9B?lang=en) | `ᾛ`       | GREEK CAPITAL LETTER ETA WITH DASIA AND VARIA AND PROSGEGRAMMENI         | `ἣ`, `ι`         | U+1F23, U+03B9         |
| [U+1F9C](https://codepoints.net/U+1F9C?lang=en) | `ᾜ`       | GREEK CAPITAL LETTER ETA WITH PSILI AND OXIA AND PROSGEGRAMMENI          | `ἤ`, `ι`         | U+1F24, U+03B9         |
| [U+1F9D](https://codepoints.net/U+1F9D?lang=en) | `ᾝ`       | GREEK CAPITAL LETTER ETA WITH DASIA AND OXIA AND PROSGEGRAMMENI          | `ἥ`, `ι`         | U+1F25, U+03B9         |
| [U+1F9E](https://codepoints.net/U+1F9E?lang=en) | `ᾞ`       | GREEK CAPITAL LETTER ETA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI   | `ἦ`, `ι`         | U+1F26, U+03B9         |
| [U+1F9F](https://codepoints.net/U+1F9F?lang=en) | `ᾟ`       | GREEK CAPITAL LETTER ETA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI   | `ἧ`, `ι`         | U+1F27, U+03B9         |
| [U+1FA0](https://codepoints.net/U+1FA0?lang=en) | `ᾠ`       | GREEK SMALL LETTER OMEGA WITH PSILI AND YPOGEGRAMMENI                    | `ὠ`, `ι`         | U+1F60, U+03B9         |
| [U+1FA1](https://codepoints.net/U+1FA1?lang=en) | `ᾡ`       | GREEK SMALL LETTER OMEGA WITH DASIA AND YPOGEGRAMMENI                    | `ὡ`, `ι`         | U+1F61, U+03B9         |
| [U+1FA2](https://codepoints.net/U+1FA2?lang=en) | `ᾢ`       | GREEK SMALL LETTER OMEGA WITH PSILI AND VARIA AND YPOGEGRAMMENI          | `ὢ`, `ι`         | U+1F62, U+03B9         |
| [U+1FA3](https://codepoints.net/U+1FA3?lang=en) | `ᾣ`       | GREEK SMALL LETTER OMEGA WITH DASIA AND VARIA AND YPOGEGRAMMENI          | `ὣ`, `ι`         | U+1F63, U+03B9         |
| [U+1FA4](https://codepoints.net/U+1FA4?lang=en) | `ᾤ`       | GREEK SMALL LETTER OMEGA WITH PSILI AND OXIA AND YPOGEGRAMMENI           | `ὤ`, `ι`         | U+1F64, U+03B9         |
| [U+1FA5](https://codepoints.net/U+1FA5?lang=en) | `ᾥ`       | GREEK SMALL LETTER OMEGA WITH DASIA AND OXIA AND YPOGEGRAMMENI           | `ὥ`, `ι`         | U+1F65, U+03B9         |
| [U+1FA6](https://codepoints.net/U+1FA6?lang=en) | `ᾦ`       | GREEK SMALL LETTER OMEGA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI    | `ὦ`, `ι`         | U+1F66, U+03B9         |
| [U+1FA7](https://codepoints.net/U+1FA7?lang=en) | `ᾧ`       | GREEK SMALL LETTER OMEGA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI    | `ὧ`, `ι`         | U+1F67, U+03B9         |
| [U+1FA8](https://codepoints.net/U+1FA8?lang=en) | `ᾨ`       | GREEK CAPITAL LETTER OMEGA WITH PSILI AND PROSGEGRAMMENI                 | `ὠ`, `ι`         | U+1F60, U+03B9         |
| [U+1FA9](https://codepoints.net/U+1FA9?lang=en) | `ᾩ`       | GREEK CAPITAL LETTER OMEGA WITH DASIA AND PROSGEGRAMMENI                 | `ὡ`, `ι`         | U+1F61, U+03B9         |
| [U+1FAA](https://codepoints.net/U+1FAA?lang=en) | `ᾪ`       | GREEK CAPITAL LETTER OMEGA WITH PSILI AND VARIA AND PROSGEGRAMMENI       | `ὢ`, `ι`         | U+1F62, U+03B9         |
| [U+1FAB](https://codepoints.net/U+1FAB?lang=en) | `ᾫ`       | GREEK CAPITAL LETTER OMEGA WITH DASIA AND VARIA AND PROSGEGRAMMENI       | `ὣ`, `ι`         | U+1F63, U+03B9         |
| [U+1FAC](https://codepoints.net/U+1FAC?lang=en) | `ᾬ`       | GREEK CAPITAL LETTER OMEGA WITH PSILI AND OXIA AND PROSGEGRAMMENI        | `ὤ`, `ι`         | U+1F64, U+03B9         |
| [U+1FAD](https://codepoints.net/U+1FAD?lang=en) | `ᾭ`       | GREEK CAPITAL LETTER OMEGA WITH DASIA AND OXIA AND PROSGEGRAMMENI        | `ὥ`, `ι`         | U+1F65, U+03B9         |
| [U+1FAE](https://codepoints.net/U+1FAE?lang=en) | `ᾮ`       | GREEK CAPITAL LETTER OMEGA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI | `ὦ`, `ι`         | U+1F66, U+03B9         |
| [U+1FAF](https://codepoints.net/U+1FAF?lang=en) | `ᾯ`       | GREEK CAPITAL LETTER OMEGA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI | `ὧ`, `ι`         | U+1F67, U+03B9         |
| [U+1FB2](https://codepoints.net/U+1FB2?lang=en) | `ᾲ`       | GREEK SMALL LETTER ALPHA WITH VARIA AND YPOGEGRAMMENI                    | `ὰ`, `ι`         | U+1F70, U+03B9         |
| [U+1FB3](https://codepoints.net/U+1FB3?lang=en) | `ᾳ`       | GREEK SMALL LETTER ALPHA WITH YPOGEGRAMMENI                              | `α`, `ι`         | U+03B1, U+03B9         |
| [U+1FB4](https://codepoints.net/U+1FB4?lang=en) | `ᾴ`       | GREEK SMALL LETTER ALPHA WITH OXIA AND YPOGEGRAMMENI                     | `ά`, `ι`         | U+03AC, U+03B9         |
| [U+1FB6](https://codepoints.net/U+1FB6?lang=en) | `ᾶ`       | GREEK SMALL LETTER ALPHA WITH PERISPOMENI                                | `α`, `͂`          | U+03B1, U+0342         |
| [U+1FB7](https://codepoints.net/U+1FB7?lang=en) | `ᾷ`       | GREEK SMALL LETTER ALPHA WITH PERISPOMENI AND YPOGEGRAMMENI              | `α`, `͂`, `ι`     | U+03B1, U+0342, U+03B9 |
| [U+1FBC](https://codepoints.net/U+1FBC?lang=en) | `ᾼ`       | GREEK CAPITAL LETTER ALPHA WITH PROSGEGRAMMENI                           | `α`, `ι`         | U+03B1, U+03B9         |
| [U+1FC2](https://codepoints.net/U+1FC2?lang=en) | `ῂ`       | GREEK SMALL LETTER ETA WITH VARIA AND YPOGEGRAMMENI                      | `ὴ`, `ι`         | U+1F74, U+03B9         |
| [U+1FC3](https://codepoints.net/U+1FC3?lang=en) | `ῃ`       | GREEK SMALL LETTER ETA WITH YPOGEGRAMMENI                                | `η`, `ι`         | U+03B7, U+03B9         |
| [U+1FC4](https://codepoints.net/U+1FC4?lang=en) | `ῄ`       | GREEK SMALL LETTER ETA WITH OXIA AND YPOGEGRAMMENI                       | `ή`, `ι`         | U+03AE, U+03B9         |
| [U+1FC6](https://codepoints.net/U+1FC6?lang=en) | `ῆ`       | GREEK SMALL LETTER ETA WITH PERISPOMENI                                  | `η`, `͂`          | U+03B7, U+0342         |
| [U+1FC7](https://codepoints.net/U+1FC7?lang=en) | `ῇ`       | GREEK SMALL LETTER ETA WITH PERISPOMENI AND YPOGEGRAMMENI                | `η`, `͂`, `ι`     | U+03B7, U+0342, U+03B9 |
| [U+1FCC](https://codepoints.net/U+1FCC?lang=en) | `ῌ`       | GREEK CAPITAL LETTER ETA WITH PROSGEGRAMMENI                             | `η`, `ι`         | U+03B7, U+03B9         |
| [U+1FD2](https://codepoints.net/U+1FD2?lang=en) | `ῒ`       | GREEK SMALL LETTER IOTA WITH DIALYTIKA AND VARIA                         | `ι`, `̈`, `̀`      | U+03B9, U+0308, U+0300 |
| [U+1FD3](https://codepoints.net/U+1FD3?lang=en) | `ΐ`       | GREEK SMALL LETTER IOTA WITH DIALYTIKA AND OXIA                          | `ι`, `̈`, `́`      | U+03B9, U+0308, U+0301 |
| [U+1FD6](https://codepoints.net/U+1FD6?lang=en) | `ῖ`       | GREEK SMALL LETTER IOTA WITH PERISPOMENI                                 | `ι`, `͂`          | U+03B9, U+0342         |
| [U+1FD7](https://codepoints.net/U+1FD7?lang=en) | `ῗ`       | GREEK SMALL LETTER IOTA WITH DIALYTIKA AND PERISPOMENI                   | `ι`, `̈`, `͂`      | U+03B9, U+0308, U+0342 |
| [U+1FE2](https://codepoints.net/U+1FE2?lang=en) | `ῢ`       | GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND VARIA                      | `υ`, `̈`, `̀`      | U+03C5, U+0308, U+0300 |
| [U+1FE3](https://codepoints.net/U+1FE3?lang=en) | `ΰ`       | GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND OXIA                       | `υ`, `̈`, `́`      | U+03C5, U+0308, U+0301 |
| [U+1FE4](https://codepoints.net/U+1FE4?lang=en) | `ῤ`       | GREEK SMALL LETTER RHO WITH PSILI                                        | `ρ`, `̓`          | U+03C1, U+0313         |
| [U+1FE6](https://codepoints.net/U+1FE6?lang=en) | `ῦ`       | GREEK SMALL LETTER UPSILON WITH PERISPOMENI                              | `υ`, `͂`          | U+03C5, U+0342         |
| [U+1FE7](https://codepoints.net/U+1FE7?lang=en) | `ῧ`       | GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND PERISPOMENI                | `υ`, `̈`, `͂`      | U+03C5, U+0308, U+0342 |
| [U+1FF2](https://codepoints.net/U+1FF2?lang=en) | `ῲ`       | GREEK SMALL LETTER OMEGA WITH VARIA AND YPOGEGRAMMENI                    | `ὼ`, `ι`         | U+1F7C, U+03B9         |
| [U+1FF3](https://codepoints.net/U+1FF3?lang=en) | `ῳ`       | GREEK SMALL LETTER OMEGA WITH YPOGEGRAMMENI                              | `ω`, `ι`         | U+03C9, U+03B9         |
| [U+1FF4](https://codepoints.net/U+1FF4?lang=en) | `ῴ`       | GREEK SMALL LETTER OMEGA WITH OXIA AND YPOGEGRAMMENI                     | `ώ`, `ι`         | U+03CE, U+03B9         |
| [U+1FF6](https://codepoints.net/U+1FF6?lang=en) | `ῶ`       | GREEK SMALL LETTER OMEGA WITH PERISPOMENI                                | `ω`, `͂`          | U+03C9, U+0342         |
| [U+1FF7](https://codepoints.net/U+1FF7?lang=en) | `ῷ`       | GREEK SMALL LETTER OMEGA WITH PERISPOMENI AND YPOGEGRAMMENI              | `ω`, `͂`, `ι`     | U+03C9, U+0342, U+03B9 |
| [U+1FFC](https://codepoints.net/U+1FFC?lang=en) | `ῼ`       | GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI                           | `ω`, `ι`         | U+03C9, U+03B9         |
| [U+FB00](https://codepoints.net/U+FB00?lang=en) | `ﬀ`       | LATIN SMALL LIGATURE FF                                                  | `f`, `f`         | U+0066, U+0066         |
| [U+FB01](https://codepoints.net/U+FB01?lang=en) | `ﬁ`       | LATIN SMALL LIGATURE FI                                                  | `f`, `i`         | U+0066, U+0069         |
| [U+FB02](https://codepoints.net/U+FB02?lang=en) | `ﬂ`       | LATIN SMALL LIGATURE FL                                                  | `f`, `l`         | U+0066, U+006C         |
| [U+FB03](https://codepoints.net/U+FB03?lang=en) | `ﬃ`       | LATIN SMALL LIGATURE FFI                                                 | `f`, `f`, `i`    | U+0066, U+0066, U+0069 |
| [U+FB04](https://codepoints.net/U+FB04?lang=en) | `ﬄ`       | LATIN SMALL LIGATURE FFL                                                 | `f`, `f`, `l`    | U+0066, U+0066, U+006C |
| [U+FB05](https://codepoints.net/U+FB05?lang=en) | `ﬅ`       | LATIN SMALL LIGATURE LONG S T                                            | `s`, `t`         | U+0073, U+0074         |
| [U+FB06](https://codepoints.net/U+FB06?lang=en) | `ﬆ`       | LATIN SMALL LIGATURE ST                                                  | `s`, `t`         | U+0073, U+0074         |
| [U+FB13](https://codepoints.net/U+FB13?lang=en) | `ﬓ`       | ARMENIAN SMALL LIGATURE MEN NOW                                          | `մ`, `ն`         | U+0574, U+0576         |
| [U+FB14](https://codepoints.net/U+FB14?lang=en) | `ﬔ`       | ARMENIAN SMALL LIGATURE MEN ECH                                          | `մ`, `ե`         | U+0574, U+0565         |
| [U+FB15](https://codepoints.net/U+FB15?lang=en) | `ﬕ`       | ARMENIAN SMALL LIGATURE MEN INI                                          | `մ`, `ի`         | U+0574, U+056B         |
| [U+FB16](https://codepoints.net/U+FB16?lang=en) | `ﬖ`       | ARMENIAN SMALL LIGATURE VEW NOW                                          | `վ`, `ն`         | U+057E, U+0576         |
| [U+FB17](https://codepoints.net/U+FB17?lang=en) | `ﬗ`       | ARMENIAN SMALL LIGATURE MEN XEH                                          | `մ`, `խ`         | U+0574, U+056D         |





# 優れたパッケージとライブラリ <a id="awesome-packages--libraries"></a>
- [PhantomScript](https://github.com/jagracey/PhantomScript) - :ghost: :flashlight: 不可視のJavaScriptコード実行とソーシャルエンジニアリング。
- [ESReverser](https://github.com/mathiasbynens/esrever) - Unicodeを考慮して文字列を反転するJavaScript製ツールです。
- [mimic](https://github.com/reinderien/mimic) - Unicodeを悪用して紛らわしい文字列を作成します。
- [python-ftfy](https://github.com/LuminosoInsight/python-ftfy) - Unicodeテキストの表現を統一し、文字化けなどの破損を可能な限り修復します。
- [vim-troll-stopper](https://github.com/vim-utils/vim-troll-stopper) - Unicodeを使った紛らわしい文字でコードを改変されるのを防ぎます。


# 絵文字 <a id="emojis"></a>
* [Unicode Consortium's Emoji Chart](http://www.unicode.org/emoji/charts/full-emoji-list.html)
* [Emojipedia](http://emojipedia.org/) - 個々の絵文字に関する情報とニュースブログです。
* [emojitracker](http://emojitracker.com/) - Twitter上での絵文字の使用状況をリアルタイムに追跡します。
* [World Translation Foundation](http://www.emojifoundation.com/) - 書き言葉を絵文字の視覚的なアルファベットへ翻訳する取り組みを推進・研究します。
* [Can I Emoji?](http://caniemoji.com/android-2/) - iOS、Android、Windowsにおけるネイティブ絵文字対応の現状を表示します。
* [How to register an emoji URL](http://www.name.com/blog/how-tos/2015/12/want-an-emoji-url-this-is-how-you-register-one/)


## 多様性 <a id="diversity"></a>

多様性に関するUnicode標準・文字処理の解説です。 関連参照: <http://unicode.org/reports/tr51/#Diversity>。

多様性に関するUnicode標準・文字処理の解説です。 関連参照: <http://www.unicode.org/emoji/charts/emoji-zwj-sequences.html>。


| Code Points | Recipe   | Combined |
|-------------|----------|----------|
| U+1F469 U+200D U+2764 U+FE0F U+200D U+1F469 | <img height="36" width="auto" alt="👩" src="http://unicode.org/reports/tr51/images/apple/apple_1f469.png"> <img height="36" width="auto" alt="❤️‍" src="http://unicode.org/reports/tr51/images/other/zwj.png"> <img height="36" width="auto" alt="❤️‍" src="http://unicode.org/reports/tr51/images/apple/apple_2764.png"> <img height="36" width="auto" alt="❤️‍" src="http://unicode.org/reports/tr51/images/other/zwj.png"> <img height="36" width="auto" alt="👩" src="http://unicode.org/reports/tr51/images/apple/apple_1f469.png"> | <img height="36" width="auto" alt="couple with heart: woman, woman" src="http://unicode.org/reports/tr51/images/apple/apple_1f469_200d_2764_fe0f_200d_1f469.png"> |
|U+1F468 U+200D U+1F468 U+200D U+1F467 U+200D U+1F466|<img height="36" width="auto" src="https://raw.githubusercontent.com/jagracey/Awesome-Unicode/c575db618a89c88624a8c3bdfe57eada064cbf14/resources/family%3B%20man%2C%20man%2C%20girl%2C%20boy%20-%20fallback%20-%20ZWJ.jpg">|<img height="36" width="auto" src="https://raw.githubusercontent.com/jagracey/Awesome-Unicode/58f28d08aef7f36eb6cdca22d25e7654cd8de5ae/resources/family%3B%20man%2C%20man%2C%20girl%2C%20boy.png">|

多様性に関するUnicode標準・文字処理の解説です。

> 多様性に関するUnicode標準・文字処理の解説です。 関連参照: <http://unicode.org/reports/tr51/#Diversity>。 値: 8.0、2015。




| Code    | Name                                | Samples                                                                                                                                                                                                            |
|---------|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| U+1F3FB | EMOJI MODIFIER FITZPATRICK TYPE-1-2 | <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-1-2.png" height="20" width="20"> <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-1-2-bw.png" height="20" width="20"> |
| U+1F3FC | EMOJI MODIFIER FITZPATRICK TYPE-3   | <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-3.png"   height="20" width="20"> <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-3-bw.png"   height="20" width="20"> |
| U+1F3FD | EMOJI MODIFIER FITZPATRICK TYPE-4   | <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-4.png"   height="20" width="20"> <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-4-bw.png"   height="20" width="20"> |
| U+1F3FE | EMOJI MODIFIER FITZPATRICK TYPE-5   | <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-5.png"   height="20" width="20"> <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-5-bw.png"   height="20" width="20"> |
| U+1F3FF | EMOJI MODIFIER FITZPATRICK TYPE-6   | <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-6.png"   height="20" width="20"> <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-6-bw.png"   height="20" width="20"> |



多様性に関するUnicode標準・文字処理の解説です。 コード: `\u{1F466}\u{1F3FE}`。

<p align="center">
多様性に関するUnicode標準・文字処理の解説です。 関連参照: <http://unicode.org/reports/tr51/images/other/person.png">。 値: 36。
多様性に関するUnicode標準・文字処理の解説です。 値: 36。
多様性に関するUnicode標準・文字処理の解説です。 関連参照: <http://unicode.org/reports/tr51/images/other/swatch-type-5.png">。 値: 5、36。
多様性に関するUnicode標準・文字処理の解説です。 値: 36。
多様性に関するUnicode標準・文字処理の解説です。 関連参照: <http://unicode.org/reports/tr51/images/other/person-5.png">。 値: 5、36。
</p>



<p align="center">
多様性に関するUnicode標準・文字処理の解説です。 関連参照: <http://unicode.org/reports/tr51/images/other/palette-with-gray.png">。 値: 48。
</p>




# 変数・メソッドの創造的な命名 <a id="creatively-naming-variables-and-methods"></a>
*変数・メソッドの創造的な命名に関するUnicode標準・文字処理の解説です。

変数・メソッドの創造的な命名に関するUnicode標準・文字処理の解説です。 関連参照: <https://codepoints.net/search?IDS=1>、<https://codepoints.net/search?IDC=1>。 値: 1、1。


```javascript

function rand(μ,σ){ ... };

String.prototype.reverseⵑ = function(){..};

Number.prototype.isTrueɁ = function(){..};

var WhatDoesThisDoɁɁɁɁ = 42
```



変数・メソッドの創造的な命名に関するUnicode標準・文字処理の解説です。 関連参照: <https://mathiasbynens.be/notes/javascript-identifiers#examples>。

```javascript
// How convenient!
var π = Math.PI;

// Sometimes, you just have to use the Bad Parts of JavaScript:
var ಠ_ಠ = eval;

// Code, Y U NO WORK?!
var ლ_ಠ益ಠ_ლ = 42;

// How about a JavaScript library for functional programming?
var λ = function() {};

// Obfuscate boring variable names for great justice
var \u006C\u006F\u006C\u0077\u0061\u0074 = 'heh';

// …or just make up random ones
var Ꙭൽↈⴱ = 'huh';

// While perfectly valid, this doesn’t work in most browsers:
var foo\u200Cbar = 42;

// This is *not* a bitwise left shift (`<<`):
var 〱〱 = 2;
// This is, though:
〱〱 << 〱〱; // 8

// Give yourself a discount:
var price_9̶9̶_89 = 'cheap';

// Fun with Roman numerals
var Ⅳ = 4;
var Ⅴ = 5;
Ⅳ + Ⅴ; // 9

// Cthulhu was here
var Hͫ̆̒̐ͣ̊̄ͯ͗͏̵̗̻̰̠̬͝ͅE̴̷̬͎̱̘͇͍̾ͦ͊͒͊̓̓̐_̫̠̱̩̭̤͈̑̎̋ͮͩ̒͑̾͋͘Ç̳͕̯̭̱̲̣̠̜͋̍O̴̦̗̯̹̼ͭ̐ͨ̊̈͘͠M̶̝̠̭̭̤̻͓͑̓̊ͣͤ̎͟͠E̢̞̮̹͍̞̳̣ͣͪ͐̈T̡̯̳̭̜̠͕͌̈́̽̿ͤ̿̅̑Ḧ̱̱̺̰̳̹̘̰́̏ͪ̂̽͂̀͠ = 'Zalgo';
```


変数・メソッドの創造的な命名に関するUnicode標準・文字処理の解説です。 関連参照: <https://davidwalsh.name/unicode-css-classes>。
```html

<meta charset="UTF-8" />


<div class="ಠ_ಠ">You do not have access to this page.</div>


<div class="❤">Your changes have been saved successfully!</div>
```

```css
.ಠ_ಠ {
	border: 1px solid #f00;
}

.❤ {
	background: lightgreen;
}
```

## 再帰的HTMLタグ改名スクリプト <a id="recursive-html-tag-renaming-script"></a>
再帰的HTMLタグ改名スクリプトに関するUnicode標準・文字処理の解説です。

*再帰的HTMLタグ改名スクリプトに関するUnicode標準・文字処理の解説です。
```javascript
// U+1160 HANGUL JUNGSEONG FILLER
transformAllTags('ᅠ');

// An actual HTML element node designed to look like a comment node, using the U+01C3 LATIN LETTER RETROFLEX CLICK 
//	<ǃ-- name="viewport" content="width=device-width"></ǃ-->
transformAllTags('ǃ--');

// or even <ᅠ⃝
transformAllTags('\u{1160}\u{20dd}');

// and for a bonus, all existing tag names will have each character ensquared. h⃞t⃞m⃞l⃞
transformAllTags();


function transformAllTags (newName){
   // querySelectorAll doesn't actually return an array.
   Array.from(document.querySelectorAll('*'))
     .forEach(function(x){
         transformTag(x, newName);
   });
}

function wonky(str){
  return str.split('').join('\u{20de}') + '\u{20de}';
}

function transformTag(tagIdOrElem, tagType){
    var elem = (tagIdOrElem instanceof HTMLElement) ? tagIdOrElem : document.getElementById(tagIdOrElem);
    if(!elem || !(elem instanceof HTMLElement))return;
    var children = elem.childNodes;
    var parent = elem.parentNode;
    var newNode = document.createElement(tagType||wonky(elem.tagName));
    for(var a=0;a<elem.attributes.length;a++){
        newNode.setAttribute(elem.attributes[a].nodeName, elem.attributes[a].value);
    }
    for(var i= 0,clen=children.length;i<clen;i++){
        newNode.appendChild(children[0]); //0...always point to the first non-moved element
    }
    newNode.style.cssText = elem.style.cssText;
    parent.replaceChild(newNode,elem);
}
```
再帰的HTMLタグ改名スクリプトに関するUnicode標準・文字処理の解説です。

```javascript
function testBegin(str){
 try{
    eval(`document.createElement( '${str}' );`)
    return true;
 }
 catch(e){ return false; }
}

function testContinue(str){
 try{
    eval(`document.createElement( 'a${str}' );`)
    return true;
 }
 catch(e){ return false; }
}
```

再帰的HTMLタグ改名スクリプトに関するUnicode標準・文字処理の解説です。
```javascript
// Test if dashes can start an HTML Tag
> testBegin('-')
< false

> testContinue('-')
< true

> testBegin('ᅠ-')	// Prepend dash with U+1160 HANGUL JUNGSEONG FILLER
< true
```


# Unicodeフォント <a id="unicode-fonts"></a>
*Unicodeフォントに関するUnicode標準・文字処理の解説です。 値: 8、65535、1.1、8。
- Unicodeフォントに関するUnicode標準・文字処理の解説です。 関連参照: <https://en.wikipedia.org/wiki/Unicode_font#List_of_Unicode_fonts>
- Unicodeフォントに関するUnicode標準・文字処理の解説です。 関連参照: <http://www.unifont.org/fontguide/>


# 追加資料 <a id="more-reading"></a>
* [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets](http://www.joelonsoftware.com/articles/Unicode.html) - Joel Spolskyによる記事です。
* [What Every Programmer Absolutely, Positively Needs To Know About Encodings And Character Sets To Work With Text](http://kunststube.net/encoding/)
* [The Unicode Consortium's Recommended Reading List](http://www.unicode.org/resources/readinglist.html)
* [Space Yourself](https://www.smashingmagazine.com/2015/10/space-yourself/) - Smashing Magazineによるスペーシングガイドです。
* [JavaScript has a Unicode Problem](https://mathiasbynens.be/notes/javascript-unicode)
* [Creative usernames and Spotify account hijacking](https://labs.spotify.com/2013/06/18/creative-usernames/)


# Unicodeをさらに深く調べる <a id="exploring-deeper-into-unicode-yourself"></a>
- [Shapecatcher](http://shapecatcher.com/) - 探している文字の形を描いて検索できます。
- [Confusable Unicode Characters](http://unicode.org/cldr/utility/confusables.jsp?r=None)
- [Unicode Character Database](http://www.unicode.org/ucd/)
- [Database Dumps of Codepoints.net](https://dumps.codepoints.net/)
- [Unicode Blocks List](http://www.unicode.org/Public/UCD/latest/ucd/Blocks.txt)
- [Unicode Character Code Charts](http://www.unicode.org/charts/index.html)
- [Unicode Case Charts](http://www.unicode.org/charts/case/)
- [Unicode Normalization Chart](http://www.unicode.org/charts/normalization/)
- [Unicode FAQ](http://www.unicode.org/faq/)




# 概要図 <a id="overview-map"></a>
## 基本多言語面の図 <a id="a-map-of-the-basic-multilingual-plane"></a>
*基本多言語面の図に関するUnicode標準・文字処理の解説です。 値: 256。
<p align="center">
基本多言語面の図に関するUnicode標準・文字処理の解説です。 関連参照: <https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Roadmap_to_Unicode_BMP.svg/750px-Roadmap_to_Unicode_BMP.svg.png">。 値: 8、256。
</p>

*基本多言語面の図に関するUnicode標準・文字処理の解説です。


## Unicodeブロック <a id="unicode-blocks"></a>
*Unicodeブロックに関するUnicode標準・文字処理の解説です。 値: 17。

| Name                                                                                                                         | From     | To       | \# Codepoints |
|------------------------------------------------------------------------------------------------------------------------------|----------|----------|---------------|
| [Basic Latin](https://wikipedia.org/wiki/Basic_Latin)                                                                      | U+0000   | U+007F   | (128)         |
| [Latin-1 Supplement](https://wikipedia.org/wiki/Latin-1_Supplement)                                                        | U+0080   | U+00FF   | (128)         |
| [Latin Extended-A](https://wikipedia.org/wiki/Latin_Extended-A)                                                            | U+0100   | U+017F   | (128)         |
| [Latin Extended-B](https://wikipedia.org/wiki/Latin_Extended-B)                                                            | U+0180   | U+024F   | (208)         |
| [IPA Extensions](https://wikipedia.org/wiki/IPA_Extensions)                                                                | U+0250   | U+02AF   | (96)          |
| [Spacing Modifier Letters](https://wikipedia.org/wiki/Spacing_Modifier_Letters)                                            | U+02B0   | U+02FF   | (80)          |
| [Combining Diacritical Marks](https://wikipedia.org/wiki/Combining_Diacritical_Marks)                                      | U+0300   | U+036F   | (112)         |
| [Greek and Coptic](https://wikipedia.org/wiki/Greek_and_Coptic)                                                            | U+0370   | U+03FF   | (135)         |
| [Cyrillic](https://wikipedia.org/wiki/Cyrillic)                                                                            | U+0400   | U+04FF   | (256)         |
| [Cyrillic Supplement](https://wikipedia.org/wiki/Cyrillic_Supplement)                                                      | U+0500   | U+052F   | (48)          |
| [Armenian](https://wikipedia.org/wiki/Armenian)                                                                            | U+0530   | U+058F   | (89)          |
| [Hebrew](https://wikipedia.org/wiki/Hebrew)                                                                                | U+0590   | U+05FF   | (87)          |
| [Arabic](https://wikipedia.org/wiki/Arabic)                                                                                | U+0600   | U+06FF   | (255)         |
| [Syriac](https://wikipedia.org/wiki/Syriac)                                                                                | U+0700   | U+074F   | (77)          |
| [Arabic Supplement](https://wikipedia.org/wiki/Arabic_Supplement)                                                          | U+0750   | U+077F   | (48)          |
| [Thaana](https://wikipedia.org/wiki/Thaana)                                                                                | U+0780   | U+07BF   | (50)          |
| [NKo](https://wikipedia.org/wiki/NKo)                                                                                      | U+07C0   | U+07FF   | (59)          |
| [Samaritan](https://wikipedia.org/wiki/Samaritan)                                                                          | U+0800   | U+083F   | (61)          |
| [Mandaic](https://wikipedia.org/wiki/Mandaic)                                                                              | U+0840   | U+085F   | (29)          |
| [Arabic Extended-A](https://wikipedia.org/wiki/Arabic_Extended-A)                                                          | U+08A0   | U+08FF   | (50)          |
| [Devanagari](https://wikipedia.org/wiki/Devanagari)                                                                        | U+0900   | U+097F   | (128)         |
| [Bengali](https://wikipedia.org/wiki/Bengali)                                                                              | U+0980   | U+09FF   | (93)          |
| [Gurmukhi](https://wikipedia.org/wiki/Gurmukhi)                                                                            | U+0A00   | U+0A7F   | (79)          |
| [Gujarati](https://wikipedia.org/wiki/Gujarati)                                                                            | U+0A80   | U+0AFF   | (85)          |
| [Oriya](https://wikipedia.org/wiki/Oriya)                                                                                  | U+0B00   | U+0B7F   | (90)          |
| [Tamil](https://wikipedia.org/wiki/Tamil)                                                                                  | U+0B80   | U+0BFF   | (72)          |
| [Telugu](https://wikipedia.org/wiki/Telugu)                                                                                | U+0C00   | U+0C7F   | (96)          |
| [Kannada](https://wikipedia.org/wiki/Kannada)                                                                              | U+0C80   | U+0CFF   | (87)          |
| [Malayalam](https://wikipedia.org/wiki/Malayalam)                                                                          | U+0D00   | U+0D7F   | (100)         |
| [Sinhala](https://wikipedia.org/wiki/Sinhala)                                                                              | U+0D80   | U+0DFF   | (90)          |
| [Thai](https://wikipedia.org/wiki/Thai)                                                                                    | U+0E00   | U+0E7F   | (87)          |
| [Lao](https://wikipedia.org/wiki/Lao)                                                                                      | U+0E80   | U+0EFF   | (67)          |
| [Tibetan](https://wikipedia.org/wiki/Tibetan)                                                                              | U+0F00   | U+0FFF   | (211)         |
| [Myanmar](https://wikipedia.org/wiki/Myanmar)                                                                              | U+1000   | U+109F   | (160)         |
| [Georgian](https://wikipedia.org/wiki/Georgian)                                                                            | U+10A0   | U+10FF   | (88)          |
| [Hangul Jamo](https://wikipedia.org/wiki/Hangul_Jamo)                                                                      | U+1100   | U+11FF   | (256)         |
| [Ethiopic](https://wikipedia.org/wiki/Ethiopic)                                                                            | U+1200   | U+137F   | (358)         |
| [Ethiopic Supplement](https://wikipedia.org/wiki/Ethiopic_Supplement)                                                      | U+1380   | U+139F   | (26)          |
| [Cherokee](https://wikipedia.org/wiki/Cherokee)                                                                            | U+13A0   | U+13FF   | (92)          |
| [Unified Canadian Aboriginal Syllabics](https://wikipedia.org/wiki/Unified_Canadian_Aboriginal_Syllabics)                  | U+1400   | U+167F   | (640)         |
| [Ogham](https://wikipedia.org/wiki/Ogham)                                                                                  | U+1680   | U+169F   | (29)          |
| [Runic](https://wikipedia.org/wiki/Runic)                                                                                  | U+16A0   | U+16FF   | (89)          |
| [Tagalog](https://wikipedia.org/wiki/Tagalog)                                                                              | U+1700   | U+171F   | (20)          |
| [Hanunoo](https://wikipedia.org/wiki/Hanunoo)                                                                              | U+1720   | U+173F   | (23)          |
| [Buhid](https://wikipedia.org/wiki/Buhid)                                                                                  | U+1740   | U+175F   | (20)          |
| [Tagbanwa](https://wikipedia.org/wiki/Tagbanwa)                                                                            | U+1760   | U+177F   | (18)          |
| [Khmer](https://wikipedia.org/wiki/Khmer)                                                                                  | U+1780   | U+17FF   | (114)         |
| [Mongolian](https://wikipedia.org/wiki/Mongolian)                                                                          | U+1800   | U+18AF   | (156)         |
| [Unified Canadian Aboriginal Syllabics Extended](https://wikipedia.org/wiki/Unified_Canadian_Aboriginal_Syllabics_Extended)| U+18B0   | U+18FF   | (70)          |
| [Limbu](https://wikipedia.org/wiki/Limbu)                                                                                  | U+1900   | U+194F   | (68)          |
| [Tai Le](https://wikipedia.org/wiki/Tai_Le)                                                                                | U+1950   | U+197F   | (35)          |
| [New Tai Lue](https://wikipedia.org/wiki/New_Tai_Lue)                                                                      | U+1980   | U+19DF   | (83)          |
| [Khmer Symbols](https://wikipedia.org/wiki/Khmer_Symbols)                                                                  | U+19E0   | U+19FF   | (32)          |
| [Buginese](https://wikipedia.org/wiki/Buginese)                                                                            | U+1A00   | U+1A1F   | (30)          |
| [Tai Tham](https://wikipedia.org/wiki/Tai_Tham)                                                                            | U+1A20   | U+1AAF   | (127)         |
| [Combining Diacritical Marks Extended](https://wikipedia.org/wiki/Combining_Diacritical_Marks_Extended)                    | U+1AB0   | U+1AFF   | (15)          |
| [Balinese](https://wikipedia.org/wiki/Balinese)                                                                            | U+1B00   | U+1B7F   | (121)         |
| [Sundanese](https://wikipedia.org/wiki/Sundanese)                                                                          | U+1B80   | U+1BBF   | (64)          |
| [Batak](https://wikipedia.org/wiki/Batak)                                                                                  | U+1BC0   | U+1BFF   | (56)          |
| [Lepcha](https://wikipedia.org/wiki/Lepcha)                                                                                | U+1C00   | U+1C4F   | (74)          |
| [Ol Chiki](https://wikipedia.org/wiki/Ol_Chiki)                                                                            | U+1C50   | U+1C7F   | (48)          |
| [Sundanese Supplement](https://wikipedia.org/wiki/Sundanese_Supplement)                                                    | U+1CC0   | U+1CCF   | (8)           |
| [Vedic Extensions](https://wikipedia.org/wiki/Vedic_Extensions)                                                            | U+1CD0   | U+1CFF   | (41)          |
| [Phonetic Extensions](https://wikipedia.org/wiki/Phonetic_Extensions)                                                      | U+1D00   | U+1D7F   | (128)         |
| [Phonetic Extensions Supplement](https://wikipedia.org/wiki/Phonetic_Extensions_Supplement)                                | U+1D80   | U+1DBF   | (64)          |
| [Combining Diacritical Marks Supplement](https://wikipedia.org/wiki/Combining_Diacritical_Marks_Supplement)                | U+1DC0   | U+1DFF   | (58)          |
| [Latin Extended Additional](https://wikipedia.org/wiki/Latin_Extended_Additional)                                          | U+1E00   | U+1EFF   | (256)         |
| [Greek Extended](https://wikipedia.org/wiki/Greek_Extended)                                                                | U+1F00   | U+1FFF   | (233)         |
| [General Punctuation](https://wikipedia.org/wiki/General_Punctuation)                                                      | U+2000   | U+206F   | (111)         |
| [Superscripts and Subscripts](https://wikipedia.org/wiki/Superscripts_and_Subscripts)                                      | U+2070   | U+209F   | (42)          |
| [Currency Symbols](https://wikipedia.org/wiki/Currency_Symbols)                                                            | U+20A0   | U+20CF   | (31)          |
| [Combining Diacritical Marks for Symbols](https://wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols)              | U+20D0   | U+20FF   | (33)          |
| [Letterlike Symbols](https://wikipedia.org/wiki/Letterlike_Symbols)                                                        | U+2100   | U+214F   | (80)          |
| [Number Forms](https://wikipedia.org/wiki/Number_Forms)                                                                    | U+2150   | U+218F   | (60)          |
| [Arrows](https://wikipedia.org/wiki/Arrows)                                                                                | U+2190   | U+21FF   | (112)         |
| [Mathematical Operators](https://wikipedia.org/wiki/Mathematical_Operators)                                                | U+2200   | U+22FF   | (256)         |
| [Miscellaneous Technical](https://wikipedia.org/wiki/Miscellaneous_Technical)                                              | U+2300   | U+23FF   | (251)         |
| [Control Pictures](https://wikipedia.org/wiki/Control_Pictures)                                                            | U+2400   | U+243F   | (39)          |
| [Optical Character Recognition](https://wikipedia.org/wiki/Optical_Character_Recognition)                                  | U+2440   | U+245F   | (11)          |
| [Enclosed Alphanumerics](https://wikipedia.org/wiki/Enclosed_Alphanumerics)                                                | U+2460   | U+24FF   | (160)         |
| [Box Drawing](https://wikipedia.org/wiki/Box_Drawing)                                                                      | U+2500   | U+257F   | (128)         |
| [Block Elements](https://wikipedia.org/wiki/Block_Elements)                                                                | U+2580   | U+259F   | (32)          |
| [Geometric Shapes](https://wikipedia.org/wiki/Geometric_Shapes)                                                            | U+25A0   | U+25FF   | (96)          |
| [Miscellaneous Symbols](https://wikipedia.org/wiki/Miscellaneous_Symbols)                                                  | U+2600   | U+26FF   | (256)         |
| [Dingbats](https://wikipedia.org/wiki/Dingbats)                                                                            | U+2700   | U+27BF   | (192)         |
| [Miscellaneous Mathematical Symbols-A](https://wikipedia.org/wiki/Miscellaneous_Mathematical_Symbols-A)                    | U+27C0   | U+27EF   | (48)          |
| [Supplemental Arrows-A](https://wikipedia.org/wiki/Supplemental_Arrows-A)                                                  | U+27F0   | U+27FF   | (16)          |
| [Braille Patterns](https://wikipedia.org/wiki/Braille_Patterns)                                                            | U+2800   | U+28FF   | (256)         |
| [Supplemental Arrows-B](https://wikipedia.org/wiki/Supplemental_Arrows-B)                                                  | U+2900   | U+297F   | (128)         |
| [Miscellaneous Mathematical Symbols-B](https://wikipedia.org/wiki/Miscellaneous_Mathematical_Symbols-B)                    | U+2980   | U+29FF   | (128)         |
| [Supplemental Mathematical Operators](https://wikipedia.org/wiki/Supplemental_Mathematical_Operators)                      | U+2A00   | U+2AFF   | (256)         |
| [Miscellaneous Symbols and Arrows](https://wikipedia.org/wiki/Miscellaneous_Symbols_and_Arrows)                            | U+2B00   | U+2BFF   | (206)         |
| [Glagolitic](https://wikipedia.org/wiki/Glagolitic)                                                                        | U+2C00   | U+2C5F   | (94)          |
| [Latin Extended-C](https://wikipedia.org/wiki/Latin_Extended-C)                                                            | U+2C60   | U+2C7F   | (32)          |
| [Coptic](https://wikipedia.org/wiki/Coptic)                                                                                | U+2C80   | U+2CFF   | (123)         |
| [Georgian Supplement](https://wikipedia.org/wiki/Georgian_Supplement)                                                      | U+2D00   | U+2D2F   | (40)          |
| [Tifinagh](https://wikipedia.org/wiki/Tifinagh)                                                                            | U+2D30   | U+2D7F   | (59)          |
| [Ethiopic Extended](https://wikipedia.org/wiki/Ethiopic_Extended)                                                          | U+2D80   | U+2DDF   | (79)          |
| [Cyrillic Extended-A](https://wikipedia.org/wiki/Cyrillic_Extended-A)                                                      | U+2DE0   | U+2DFF   | (32)          |
| [Supplemental Punctuation](https://wikipedia.org/wiki/Supplemental_Punctuation)                                            | U+2E00   | U+2E7F   | (67)          |
| [CJK Radicals Supplement](https://wikipedia.org/wiki/CJK_Radicals_Supplement)                                              | U+2E80   | U+2EFF   | (115)         |
| [Kangxi Radicals](https://wikipedia.org/wiki/Kangxi_Radicals)                                                              | U+2F00   | U+2FDF   | (214)         |
| [Ideographic Description Characters](https://wikipedia.org/wiki/Ideographic_Description_Characters)                        | U+2FF0   | U+2FFF   | (12)          |
| [CJK Symbols and Punctuation](https://wikipedia.org/wiki/CJK_Symbols_and_Punctuation)                                      | U+3000   | U+303F   | (64)          |
| [Hiragana](https://wikipedia.org/wiki/Hiragana)                                                                            | U+3040   | U+309F   | (93)          |
| [Katakana](https://wikipedia.org/wiki/Katakana)                                                                            | U+30A0   | U+30FF   | (96)          |
| [Bopomofo](https://wikipedia.org/wiki/Bopomofo)                                                                            | U+3100   | U+312F   | (41)          |
| [Hangul Compatibility Jamo](https://wikipedia.org/wiki/Hangul_Compatibility_Jamo)                                          | U+3130   | U+318F   | (94)          |
| [Kanbun](https://wikipedia.org/wiki/Kanbun)                                                                                | U+3190   | U+319F   | (16)          |
| [Bopomofo Extended](https://wikipedia.org/wiki/Bopomofo_Extended)                                                          | U+31A0   | U+31BF   | (27)          |
| [CJK Strokes](https://wikipedia.org/wiki/CJK_Strokes)                                                                      | U+31C0   | U+31EF   | (36)          |
| [Katakana Phonetic Extensions](https://wikipedia.org/wiki/Katakana_Phonetic_Extensions)                                    | U+31F0   | U+31FF   | (16)          |
| [Enclosed CJK Letters and Months](https://wikipedia.org/wiki/Enclosed_CJK_Letters_and_Months)                              | U+3200   | U+32FF   | (254)         |
| [CJK Compatibility](https://wikipedia.org/wiki/CJK_Compatibility)                                                          | U+3300   | U+33FF   | (256)         |
| [CJK Unified Ideographs Extension A](https://wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_A)                        | U+3400   | U+4DBF   | (6191)        |
| [Yijing Hexagram Symbols](https://wikipedia.org/wiki/Yijing_Hexagram_Symbols)                                              | U+4DC0   | U+4DFF   | (64)          |
| [CJK Unified Ideographs](https://wikipedia.org/wiki/CJK_Unified_Ideographs)                                                | U+4E00   | U+9FFF   | (20941)       |
| [Yi Syllables](https://wikipedia.org/wiki/Yi_Syllables)                                                                    | U+A000   | U+A48F   | (1165)        |
| [Yi Radicals](https://wikipedia.org/wiki/Yi_Radicals)                                                                      | U+A490   | U+A4CF   | (55)          |
| [Lisu](https://wikipedia.org/wiki/Lisu)                                                                                    | U+A4D0   | U+A4FF   | (48)          |
| [Vai](https://wikipedia.org/wiki/Vai)                                                                                      | U+A500   | U+A63F   | (300)         |
| [Cyrillic Extended-B](https://wikipedia.org/wiki/Cyrillic_Extended-B)                                                      | U+A640   | U+A69F   | (96)          |
| [Bamum](https://wikipedia.org/wiki/Bamum)                                                                                  | U+A6A0   | U+A6FF   | (88)          |
| [Modifier Tone Letters](https://wikipedia.org/wiki/Modifier_Tone_Letters)                                                  | U+A700   | U+A71F   | (32)          |
| [Latin Extended-D](https://wikipedia.org/wiki/Latin_Extended-D)                                                            | U+A720   | U+A7FF   | (159)         |
| [Syloti Nagri](https://wikipedia.org/wiki/Syloti_Nagri)                                                                    | U+A800   | U+A82F   | (44)          |
| [Common Indic Number Forms](https://wikipedia.org/wiki/Common_Indic_Number_Forms)                                          | U+A830   | U+A83F   | (10)          |
| [Phags-pa](https://wikipedia.org/wiki/Phags-pa)                                                                            | U+A840   | U+A87F   | (56)          |
| [Saurashtra](https://wikipedia.org/wiki/Saurashtra)                                                                        | U+A880   | U+A8DF   | (81)          |
| [Devanagari Extended](https://wikipedia.org/wiki/Devanagari_Extended)                                                      | U+A8E0   | U+A8FF   | (30)          |
| [Kayah Li](https://wikipedia.org/wiki/Kayah_Li)                                                                            | U+A900   | U+A92F   | (48)          |
| [Rejang](https://wikipedia.org/wiki/Rejang)                                                                                | U+A930   | U+A95F   | (37)          |
| [Hangul Jamo Extended-A](https://wikipedia.org/wiki/Hangul_Jamo_Extended-A)                                                | U+A960   | U+A97F   | (29)          |
| [Javanese](https://wikipedia.org/wiki/Javanese)                                                                            | U+A980   | U+A9DF   | (91)          |
| [Myanmar Extended-B](https://wikipedia.org/wiki/Myanmar_Extended-B)                                                        | U+A9E0   | U+A9FF   | (31)          |
| [Cham](https://wikipedia.org/wiki/Cham)                                                                                    | U+AA00   | U+AA5F   | (83)          |
| [Myanmar Extended-A](https://wikipedia.org/wiki/Myanmar_Extended-A)                                                        | U+AA60   | U+AA7F   | (32)          |
| [Tai Viet](https://wikipedia.org/wiki/Tai_Viet)                                                                            | U+AA80   | U+AADF   | (72)          |
| [Meetei Mayek Extensions](https://wikipedia.org/wiki/Meetei_Mayek_Extensions)                                              | U+AAE0   | U+AAFF   | (23)          |
| [Ethiopic Extended-A](https://wikipedia.org/wiki/Ethiopic_Extended-A)                                                      | U+AB00   | U+AB2F   | (32)          |
| [Latin Extended-E](https://wikipedia.org/wiki/Latin_Extended-E)                                                            | U+AB30   | U+AB6F   | (54)          |
| [Cherokee Supplement](https://wikipedia.org/wiki/Cherokee_Supplement)                                                      | U+AB70   | U+ABBF   | (80)          |
| [Meetei Mayek](https://wikipedia.org/wiki/Meetei_Mayek)                                                                    | U+ABC0   | U+ABFF   | (56)          |
| [Hangul Syllables](https://wikipedia.org/wiki/Hangul_Syllables)                                                            | U+AC00   | U+D7AF   | (2)           |
| [Hangul Jamo Extended-B](https://wikipedia.org/wiki/Hangul_Jamo_Extended-B)                                                | U+D7B0   | U+D7FF   | (72)          |
| [High Surrogates](https://wikipedia.org/wiki/High_Surrogates)                                                              | U+D800   | U+DB7F   | (2)           |
| [High Private Use Surrogates](https://wikipedia.org/wiki/High_Private_Use_Surrogates)                                      | U+DB80   | U+DBFF   | (2)           |
| [Low Surrogates](https://wikipedia.org/wiki/Low_Surrogates)                                                                | U+DC00   | U+DFFF   | (2)           |
| [Private Use Area](https://wikipedia.org/wiki/Private_Use_Area)                                                            | U+E000   | U+F8FF   | (2)           |
| [CJK Compatibility Ideographs](https://wikipedia.org/wiki/CJK_Compatibility_Ideographs)                                    | U+F900   | U+FAFF   | (472)         |
| [Alphabetic Presentation Forms](https://wikipedia.org/wiki/Alphabetic_Presentation_Forms)                                  | U+FB00   | U+FB4F   | (58)          |
| [Arabic Presentation Forms-A](https://wikipedia.org/wiki/Arabic_Presentation_Forms-A)                                      | U+FB50   | U+FDFF   | (643)         |
| [Variation Selectors](https://wikipedia.org/wiki/Variation_Selectors)                                                      | U+FE00   | U+FE0F   | (16)          |
| [Vertical Forms](https://wikipedia.org/wiki/Vertical_Forms)                                                                | U+FE10   | U+FE1F   | (10)          |
| [Combining Half Marks](https://wikipedia.org/wiki/Combining_Half_Marks)                                                    | U+FE20   | U+FE2F   | (16)          |
| [CJK Compatibility Forms](https://wikipedia.org/wiki/CJK_Compatibility_Forms)                                              | U+FE30   | U+FE4F   | (32)          |
| [Small Form Variants](https://wikipedia.org/wiki/Small_Form_Variants)                                                      | U+FE50   | U+FE6F   | (26)          |
| [Arabic Presentation Forms-B](https://wikipedia.org/wiki/Arabic_Presentation_Forms-B)                                      | U+FE70   | U+FEFF   | (141)         |
| [Halfwidth and Fullwidth Forms](https://wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms)                                  | U+FF00   | U+FFEF   | (225)         |
| [Specials](https://wikipedia.org/wiki/Specials)                                                                            | U+FFF0   | U+FFFF   | (7)           |
| [Linear B Syllabary](https://wikipedia.org/wiki/Linear_B_Syllabary)                                                        | U+10000  | U+1007F  | (88)          |
| [Linear B Ideograms](https://wikipedia.org/wiki/Linear_B_Ideograms)                                                        | U+10080  | U+100FF  | (123)         |
| [Aegean Numbers](https://wikipedia.org/wiki/Aegean_Numbers)                                                                | U+10100  | U+1013F  | (57)          |
| [Ancient Greek Numbers](https://wikipedia.org/wiki/Ancient_Greek_Numbers)                                                  | U+10140  | U+1018F  | (77)          |
| [Ancient Symbols](https://wikipedia.org/wiki/Ancient_Symbols)                                                              | U+10190  | U+101CF  | (13)          |
| [Phaistos Disc](https://wikipedia.org/wiki/Phaistos_Disc)                                                                  | U+101D0  | U+101FF  | (46)          |
| [Lycian](https://wikipedia.org/wiki/Lycian)                                                                                | U+10280  | U+1029F  | (29)          |
| [Carian](https://wikipedia.org/wiki/Carian)                                                                                | U+102A0  | U+102DF  | (49)          |
| [Coptic Epact Numbers](https://wikipedia.org/wiki/Coptic_Epact_Numbers)                                                    | U+102E0  | U+102FF  | (28)          |
| [Old Italic](https://wikipedia.org/wiki/Old_Italic)                                                                        | U+10300  | U+1032F  | (36)          |
| [Gothic](https://wikipedia.org/wiki/Gothic)                                                                                | U+10330  | U+1034F  | (27)          |
| [Old Permic](https://wikipedia.org/wiki/Old_Permic)                                                                        | U+10350  | U+1037F  | (43)          |
| [Ugaritic](https://wikipedia.org/wiki/Ugaritic)                                                                            | U+10380  | U+1039F  | (31)          |
| [Old Persian](https://wikipedia.org/wiki/Old_Persian)                                                                      | U+103A0  | U+103DF  | (50)          |
| [Deseret](https://wikipedia.org/wiki/Deseret)                                                                              | U+10400  | U+1044F  | (80)          |
| [Shavian](https://wikipedia.org/wiki/Shavian)                                                                              | U+10450  | U+1047F  | (48)          |
| [Osmanya](https://wikipedia.org/wiki/Osmanya)                                                                              | U+10480  | U+104AF  | (40)          |
| [Elbasan](https://wikipedia.org/wiki/Elbasan)                                                                              | U+10500  | U+1052F  | (40)          |
| [Caucasian Albanian](https://wikipedia.org/wiki/Caucasian_Albanian)                                                        | U+10530  | U+1056F  | (53)          |
| [Linear A](https://wikipedia.org/wiki/Linear_A)                                                                            | U+10600  | U+1077F  | (341)         |
| [Cypriot Syllabary](https://wikipedia.org/wiki/Cypriot_Syllabary)                                                          | U+10800  | U+1083F  | (55)          |
| [Imperial Aramaic](https://wikipedia.org/wiki/Imperial_Aramaic)                                                            | U+10840  | U+1085F  | (31)          |
| [Palmyrene](https://wikipedia.org/wiki/Palmyrene)                                                                          | U+10860  | U+1087F  | (32)          |
| [Nabataean](https://wikipedia.org/wiki/Nabataean)                                                                          | U+10880  | U+108AF  | (40)          |
| [Hatran](https://wikipedia.org/wiki/Hatran)                                                                                | U+108E0  | U+108FF  | (26)          |
| [Phoenician](https://wikipedia.org/wiki/Phoenician)                                                                        | U+10900  | U+1091F  | (29)          |
| [Lydian](https://wikipedia.org/wiki/Lydian)                                                                                | U+10920  | U+1093F  | (27)          |
| [Meroitic Hieroglyphs](https://wikipedia.org/wiki/Meroitic_Hieroglyphs)                                                    | U+10980  | U+1099F  | (32)          |
| [Meroitic Cursive](https://wikipedia.org/wiki/Meroitic_Cursive)                                                            | U+109A0  | U+109FF  | (90)          |
| [Kharoshthi](https://wikipedia.org/wiki/Kharoshthi)                                                                        | U+10A00  | U+10A5F  | (65)          |
| [Old South Arabian](https://wikipedia.org/wiki/Old_South_Arabian)                                                          | U+10A60  | U+10A7F  | (32)          |
| [Old North Arabian](https://wikipedia.org/wiki/Old_North_Arabian)                                                          | U+10A80  | U+10A9F  | (32)          |
| [Manichaean](https://wikipedia.org/wiki/Manichaean)                                                                        | U+10AC0  | U+10AFF  | (51)          |
| [Avestan](https://wikipedia.org/wiki/Avestan)                                                                              | U+10B00  | U+10B3F  | (61)          |
| [Inscriptional Parthian](https://wikipedia.org/wiki/Inscriptional_Parthian)                                                | U+10B40  | U+10B5F  | (30)          |
| [Inscriptional Pahlavi](https://wikipedia.org/wiki/Inscriptional_Pahlavi)                                                  | U+10B60  | U+10B7F  | (27)          |
| [Psalter Pahlavi](https://wikipedia.org/wiki/Psalter_Pahlavi)                                                              | U+10B80  | U+10BAF  | (29)          |
| [Old Turkic](https://wikipedia.org/wiki/Old_Turkic)                                                                        | U+10C00  | U+10C4F  | (73)          |
| [Old Hungarian](https://wikipedia.org/wiki/Old_Hungarian)                                                                  | U+10C80  | U+10CFF  | (108)         |
| [Rumi Numeral Symbols](https://wikipedia.org/wiki/Rumi_Numeral_Symbols)                                                    | U+10E60  | U+10E7F  | (31)          |
| [Brahmi](https://wikipedia.org/wiki/Brahmi)                                                                                | U+11000  | U+1107F  | (109)         |
| [Kaithi](https://wikipedia.org/wiki/Kaithi)                                                                                | U+11080  | U+110CF  | (66)          |
| [Sora Sompeng](https://wikipedia.org/wiki/Sora_Sompeng)                                                                    | U+110D0  | U+110FF  | (35)          |
| [Chakma](https://wikipedia.org/wiki/Chakma)                                                                                | U+11100  | U+1114F  | (67)          |
| [Mahajani](https://wikipedia.org/wiki/Mahajani)                                                                            | U+11150  | U+1117F  | (39)          |
| [Sharada](https://wikipedia.org/wiki/Sharada)                                                                              | U+11180  | U+111DF  | (94)          |
| [Sinhala Archaic Numbers](https://wikipedia.org/wiki/Sinhala_Archaic_Numbers)                                              | U+111E0  | U+111FF  | (20)          |
| [Khojki](https://wikipedia.org/wiki/Khojki)                                                                                | U+11200  | U+1124F  | (61)          |
| [Multani](https://wikipedia.org/wiki/Multani)                                                                              | U+11280  | U+112AF  | (38)          |
| [Khudawadi](https://wikipedia.org/wiki/Khudawadi)                                                                          | U+112B0  | U+112FF  | (69)          |
| [Grantha](https://wikipedia.org/wiki/Grantha)                                                                              | U+11300  | U+1137F  | (85)          |
| [Tirhuta](https://wikipedia.org/wiki/Tirhuta)                                                                              | U+11480  | U+114DF  | (82)          |
| [Siddham](https://wikipedia.org/wiki/Siddham)                                                                              | U+11580  | U+115FF  | (92)          |
| [Modi](https://wikipedia.org/wiki/Modi)                                                                                    | U+11600  | U+1165F  | (79)          |
| [Takri](https://wikipedia.org/wiki/Takri)                                                                                  | U+11680  | U+116CF  | (66)          |
| [Ahom](https://wikipedia.org/wiki/Ahom)                                                                                    | U+11700  | U+1173F  | (57)          |
| [Warang Citi](https://wikipedia.org/wiki/Warang_Citi)                                                                      | U+118A0  | U+118FF  | (84)          |
| [Pau Cin Hau](https://wikipedia.org/wiki/Pau_Cin_Hau)                                                                      | U+11AC0  | U+11AFF  | (57)          |
| [Cuneiform](https://wikipedia.org/wiki/Cuneiform)                                                                          | U+12000  | U+123FF  | (922)         |
| [Cuneiform Numbers and Punctuation](https://wikipedia.org/wiki/Cuneiform_Numbers_and_Punctuation)                          | U+12400  | U+1247F  | (116)         |
| [Early Dynastic Cuneiform](https://wikipedia.org/wiki/Early_Dynastic_Cuneiform)                                            | U+12480  | U+1254F  | (196)         |
| [Egyptian Hieroglyphs](https://wikipedia.org/wiki/Egyptian_Hieroglyphs)                                                    | U+13000  | U+1342F  | (1071)        |
| [Anatolian Hieroglyphs](https://wikipedia.org/wiki/Anatolian_Hieroglyphs)                                                  | U+14400  | U+1467F  | (583)         |
| [Bamum Supplement](https://wikipedia.org/wiki/Bamum_Supplement)                                                            | U+16800  | U+16A3F  | (569)         |
| [Mro](https://wikipedia.org/wiki/Mro)                                                                                      | U+16A40  | U+16A6F  | (43)          |
| [Bassa Vah](https://wikipedia.org/wiki/Bassa_Vah)                                                                          | U+16AD0  | U+16AFF  | (36)          |
| [Pahawh Hmong](https://wikipedia.org/wiki/Pahawh_Hmong)                                                                    | U+16B00  | U+16B8F  | (127)         |
| [Miao](https://wikipedia.org/wiki/Miao)                                                                                    | U+16F00  | U+16F9F  | (133)         |
| [Kana Supplement](https://wikipedia.org/wiki/Kana_Supplement)                                                              | U+1B000  | U+1B0FF  | (2)           |
| [Duployan](https://wikipedia.org/wiki/Duployan)                                                                            | U+1BC00  | U+1BC9F  | (143)         |
| [Shorthand Format Controls](https://wikipedia.org/wiki/Shorthand_Format_Controls)                                          | U+1BCA0  | U+1BCAF  | (4)           |
| [Byzantine Musical Symbols](https://wikipedia.org/wiki/Byzantine_Musical_Symbols)                                          | U+1D000  | U+1D0FF  | (246)         |
| [Musical Symbols](https://wikipedia.org/wiki/Musical_Symbols)                                                              | U+1D100  | U+1D1FF  | (231)         |
| [Ancient Greek Musical Notation](https://wikipedia.org/wiki/Ancient_Greek_Musical_Notation)                                | U+1D200  | U+1D24F  | (70)          |
| [Tai Xuan Jing Symbols](https://wikipedia.org/wiki/Tai_Xuan_Jing_Symbols)                                                  | U+1D300  | U+1D35F  | (87)          |
| [Counting Rod Numerals](https://wikipedia.org/wiki/Counting_Rod_Numerals)                                                  | U+1D360  | U+1D37F  | (18)          |
| [Mathematical Alphanumeric Symbols](https://wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols)                          | U+1D400  | U+1D7FF  | (996)         |
| [Sutton SignWriting](https://wikipedia.org/wiki/Sutton_SignWriting)                                                        | U+1D800  | U+1DAAF  | (672)         |
| [Mende Kikakui](https://wikipedia.org/wiki/Mende_Kikakui)                                                                  | U+1E800  | U+1E8DF  | (213)         |
| [Arabic Mathematical Alphabetic Symbols](https://wikipedia.org/wiki/Arabic_Mathematical_Alphabetic_Symbols)                | U+1EE00  | U+1EEFF  | (143)         |
| [Mahjong Tiles](https://wikipedia.org/wiki/Mahjong_Tiles)                                                                  | U+1F000  | U+1F02F  | (44)          |
| [Domino Tiles](https://wikipedia.org/wiki/Domino_Tiles)                                                                    | U+1F030  | U+1F09F  | (100)         |
| [Playing Cards](https://wikipedia.org/wiki/Playing_Cards)                                                                  | U+1F0A0  | U+1F0FF  | (82)          |
| [Enclosed Alphanumeric Supplement](https://wikipedia.org/wiki/Enclosed_Alphanumeric_Supplement)                            | U+1F100  | U+1F1FF  | (173)         |
| [Enclosed Ideographic Supplement](https://wikipedia.org/wiki/Enclosed_Ideographic_Supplement)                              | U+1F200  | U+1F2FF  | (57)          |
| [Miscellaneous Symbols and Pictographs](https://wikipedia.org/wiki/Miscellaneous_Symbols_and_Pictographs)                  | U+1F300  | U+1F5FF  | (766)         |
| [Emoticons](https://wikipedia.org/wiki/Emoticons)                                                                          | U+1F600  | U+1F64F  | (80)          |
| [Ornamental Dingbats](https://wikipedia.org/wiki/Ornamental_Dingbats)                                                      | U+1F650  | U+1F67F  | (48)          |
| [Transport and Map Symbols](https://wikipedia.org/wiki/Transport_and_Map_Symbols)                                          | U+1F680  | U+1F6FF  | (98)          |
| [Alchemical Symbols](https://wikipedia.org/wiki/Alchemical_Symbols)                                                        | U+1F700  | U+1F77F  | (116)         |
| [Geometric Shapes Extended](https://wikipedia.org/wiki/Geometric_Shapes_Extended)                                          | U+1F780  | U+1F7FF  | (85)          |
| [Supplemental Arrows-C](https://wikipedia.org/wiki/Supplemental_Arrows-C)                                                  | U+1F800  | U+1F8FF  | (148)         |
| [Supplemental Symbols and Pictographs](https://wikipedia.org/wiki/Supplemental_Symbols_and_Pictographs)                    | U+1F900  | U+1F9FF  | (15)          |
| [CJK Unified Ideographs Extension B](https://wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_B)                        | U+20000  | U+2A6DF  | (42676)       |
| [CJK Unified Ideographs Extension C](https://wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_C)                        | U+2A700  | U+2B73F  | (60)          |
| [CJK Unified Ideographs Extension D](https://wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_D)                        | U+2B740  | U+2B81F  | (27)          |
| [CJK Unified Ideographs Extension E](https://wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_E)                        | U+2B820  | U+2CEAF  | (2)           |
| [CJK Compatibility Ideographs Supplement](https://wikipedia.org/wiki/CJK_Compatibility_Ideographs_Supplement)              | U+2F800  | U+2FA1F  | (542)         |
| [Tags](https://wikipedia.org/wiki/Tags)                                                                                    | U+E0000  | U+E007F  | (97)          |
| [Variation Selectors Supplement](https://wikipedia.org/wiki/Variation_Selectors_Supplement)                                | U+E0100  | U+E01EF  | (240)         |
| [Supplementary Private Use Area-A](https://wikipedia.org/wiki/Supplementary_Private_Use_Area-A)                            | U+F0000  | U+FFFFF  | (4)           |
| [Supplementary Private Use Area-B](https://wikipedia.org/wiki/Supplementary_Private_Use_Area-B)                            | U+100000 | U+10FFFF | (4)           |



# [Unicode標準の原則](http://www.unicode.org/standard/principles.html) <a id="principles-of-the-unicode-standard"></a>


Unicode標準の原則に関するUnicode標準・文字処理の解説です。

* **普遍的レパートリー** - Unicode標準が守る基本原則です。
* **論理順序** - Unicode標準が守る基本原則です。
* **効率性** - Unicode標準が守る基本原則です。
* **統合** - Unicode標準が守る基本原則です。
* **グリフではなく文字** - Unicode標準が守る基本原則です。
* **動的合成** - Unicode標準が守る基本原則です。
* **意味論** - Unicode標準が守る基本原則です。
* **安定性** - Unicode標準が守る基本原則です。
* **プレーンテキスト** - Unicode標準が守る基本原則です。
* **変換可能性** - Unicode標準が守る基本原則です。

Unicode標準の原則に関するUnicode標準・文字処理の解説です。 関連参照: <https://codepoints.net/about#unicode>。



# Unicodeの版 <a id="unicode-versions"></a>

* [Version 9.0.0](http://www.unicode.org/versions/Unicode9.0.0/) (Latest Version, August 2016 - adds exactly 7,500 characters)
* [Version 8.0.0](http://www.unicode.org/versions/Unicode8.0.0/)
* [Version 7.0.0](http://www.unicode.org/versions/Unicode7.0.0/)
* [Version 6.3.0](http://www.unicode.org/versions/Unicode6.3.0/)
* [Version 6.2.0](http://www.unicode.org/versions/Unicode6.2.0/)
* [Version 6.1.0](http://www.unicode.org/versions/Unicode6.1.0/)
* [Version 6.0.0](http://www.unicode.org/versions/Unicode6.0.0/)
* [Version 5.2.0](http://www.unicode.org/versions/Unicode5.2.0/)
* [Version 5.1.0](http://www.unicode.org/versions/Unicode5.1.0/)
* Unicodeの版に関するUnicode標準・文字処理の解説です。 値: 5.0.0。
* [Version 4.0.1](http://www.unicode.org/versions/Unicode4.0.1/)
* [Version 4.0.0](http://www.unicode.org/versions/corrigendum5.html)




<br><br>


# コントリビューション <a id="contributing"></a>

貢献方法の詳細は*Awesome Unicode*の[コントリビューションガイド](https://github.com/jagracey/Awesome-Unicode/blob/e219c3f2de42804eae17107149fa5a025b02bc23/CONTRIBUTING.md)を参照してください。


# 行動規範 <a id="code-of-conduct"></a>

行動規範に関するUnicode標準・文字処理の解説です。 関連参照: <https://github.com/jagracey/Awesome-Unicode/blob/e219c3f2de42804eae17107149fa5a025b02bc23/CODE-OF-CONDUCT.md>。
>行動規範に関するUnicode標準・文字処理の解説です。
行動規範に関するUnicode標準・文字処理の解説です。
行動規範に関するUnicode標準・文字処理の解説です。
行動規範に関するUnicode標準・文字処理の解説です。
行動規範に関するUnicode標準・文字処理の解説です。


# ライセンス <a id="license"></a>
ライセンスに関するUnicode標準・文字処理の解説です。 関連参照: <http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg>、<https://creativecommons.org/publicdomain/zero/1.0/>。 値: 1.0。

法律で認められる範囲で、[コントリビューター](https://github.com/jagracey/Awesome-Unicode/graphs/contributors)はこの作品に関する著作権および関連・隣接する権利を放棄しています。詳細は[ライセンスファイル](https://github.com/jagracey/Awesome-Unicode/blob/e219c3f2de42804eae17107149fa5a025b02bc23/LICENSE)を参照してください。
