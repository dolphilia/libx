---
title: "Awesome Unicode"
description: "Unicodeの符号化、文字例、ケースフォールディング、絵文字列、フォント、ライブラリと過去の参照表。"
licenseSource: "github-jagracey-Awesome-Unicode-readme-md"
---

# Awesome Unicode

Unicodeは、さまざまな文字体系の文字にコードポイントを割り当てる標準です。エンコーディング、正規化、特殊な文字、大小文字の対応、絵文字列、フォント、ライブラリを、JavaScriptの例や参照表とともに紹介します。

本ページは過去のリストを編集したものです。技術例は主にUnicode 8.0・9.0とJavaScript ES6を扱い、日付・対応状況・未割当領域は原文時点の情報です。基本用語は[原文の用語集](https://github.com/jagracey/Awesome-Unicode/blob/e219c3f2de42804eae17107149fa5a025b02bc23/GLOSSARY.md)で確認できます。

## Unicodeの基礎 <a id="quick-unicode-background"></a>

Unicodeは、互換性のない各国のコードページに代わる共通の文字集合を提供します。現代・歴史的な文字体系、左から右・右から左へ書く文字、結合文字、文化・政治・宗教の記号や絵文字を扱います。原文の序文ではUnicode 8.0を「12万を超える文字、129を超える文字体系」と紹介しており、以下の節ではUnicode 9.0も扱っています。

### Unicode標準に含まれる文字 <a id="what-characters-does-the-unicode-standard-include"></a>

Unicode標準は、主要な書き言葉の文字にコードを割り当てます。ヨーロッパのアルファベット系文字、中東の右から左へ書く文字、アジアの多くの文字体系などが対象です。

句読点、ダイアクリティカルマーク、数学・技術記号、矢印、装飾記号、絵文字も含みます。たとえばチルダ（~）は、ñのように基本の文字を修飾します。Unicode 9.0には、アルファベット、表意文字、記号を合わせて128,172文字が収録されています。

よく使われる文字の多くは、最初の64Kコードポイントからなる基本多言語面（BMP）に収まります。そのほかに16の補助面があります。原文では当時850,000を超えるコードポイントが未使用で、将来の版に向けて文字の追加が検討されていると説明しています。

私用コードポイントは、ベンダーや利用者が内部用の文字・記号を定義したり、専用フォントで使ったりする領域です。BMPに6,400、補助私用領域に131,068あります。

### Unicode文字エンコーディング <a id="unicode-character-encodings"></a>

文字エンコーディングは、文字の識別と数値であるコードポイントに加え、その値をビット列でどう表すかを定めます。

Unicodeには、コード単位が8・16・32ビットの3つの符号化形式があります。同じ文字集合を表現し、正しく符号化されたUnicodeの入力であれば、情報を失わず相互変換できます。いずれもUnicodeに適合する実装方法です。

UTF-8は可変長のバイト列を使い、HTMLなどのプロトコルで広く使われます。ASCII文字のバイト値をそのまま保つため、既存ソフトウェアの大幅な変更を避けやすい形式です。

UTF-16は16ビットのコード単位を使い、保存容量とアクセスのしやすさを両立させます。BMPのスカラー値は1コード単位、補助面の文字は2コード単位で表します。

UTF-32はUnicodeスカラー値ごとに1つの32ビットコード単位を使います。メモリ使用量よりも固定長でのアクセスを重視する場合に利用できます。

各形式は、1スカラー値を最大4バイト（32ビット）で表します。複数のスカラー値からなる見た目上の1文字まで4バイトに収まるという意味ではありません。

### 数値の話 <a id="lets-talk-numbers"></a>

Unicodeのコード空間は、0〜16の番号を持つ17面からなります。各面に65,536（2¹⁶）コードポイントがあり、合計は1,114,112です。原文の表は行を1〜17で数えていますが、以下ではコードポイント範囲に対応する面番号を使います。補助私用面15・16には合計131,072の位置があり、そのうち131,068が私用コードポイントです。各面の末尾2つは非文字です。

| 面 | 名称 | 範囲 |
| --- | --- | --- |
| 0 | 基本多言語面（BMP） | (U+0000 to U+FFFF) |
| 1 | 補助多言語面 | (U+10000 to U+1FFFF) |
| 2 | 補助漢字面 | (U+20000 to U+2FFFF) |
| 3 | 第三漢字面（原文時点では未割当） | (U+30000 to U+3FFFF) |
| 4 | 面4（未割当） | (U+40000 to U+4FFFF) |
| 5 | 面5（未割当） | (U+50000 to U+5FFFF) |
| 6 | 面6（未割当） | (U+60000 to U+6FFFF) |
| 7 | 面7（未割当） | (U+70000 to U+7FFFF) |
| 8 | 面8（未割当） | (U+80000 to U+8FFFF) |
| 9 | 面9（未割当） | (U+90000 to U+9FFFF) |
| 10 | 面10（未割当） | (U+A0000 to U+AFFFF) |
| 11 | 面11（未割当） | (U+B0000 to U+BFFFF) |
| 12 | 面12（未割当） | (U+C0000 to U+CFFFF) |
| 13 | 面13（未割当） | (U+D0000 to U+DFFFF) |
| 14 | 補助特殊用途面 | (U+E0000 to U+EFFFF) |
| 15 | 補助私用領域A | (U+F0000 to U+FFFFF) |
| 16 | 補助私用領域B | (U+100000 to U+10FFFF) |

面0がBMPで、範囲はU+0000〜U+FFFFです。残る16面、U+010000〜U+10FFFFは補助面、またはアストラル面と呼ばれます。表の未割当という表記は、原文のUnicode 8.0・9.0時点を表します。

### UTF-16サロゲートペア <a id="utf-16-surrogate-pairs"></a>

BMPの外にある文字は、UTF-16では2つの16ビットコード単位で表します。たとえばU+1D306 TETRAGRAM FOR CENTRE（𝌆）は0xD834と0xDF06です。この組がサロゲートペアで、全体で1文字を表します。上位（先行）サロゲートは0xD800〜0xDBFF、下位（後続）サロゲートは0xDC00〜0xDFFFです。[Mathias Bynensの解説](https://mathiasbynens.be/notes/javascript-encoding#surrogate-pairs)も参照してください。

[Unicode 8.0第3章](http://unicode.org/versions/Unicode8.0.0/ch03.pdf#page=47)では、上位サロゲートのコード単位に下位サロゲートのコード単位が続く組として定義しています。サロゲートペアを使うのはUTF-16だけです。符号化形式は第3.9節で説明されています。

### サロゲートペアの計算 <a id="calculating-surrogate-pairs"></a>

PILE OF POO（💩、U+1F4A9）は、UTF-16では2つのサロゲートコード単位で表します。次のJavaScriptのアルゴリズムは、補助面のU+10000〜U+10FFFFをサロゲートペアへ変換し、逆変換も行います。例の数値は16進表記です。

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

### 合成と分解 <a id="composing--decomposing"></a>

結合ダイアクリティカルマークは基本の文字の後ろに置き、字形を修飾します。同じ文字に複数のマークを重ねることもできます。よく使われる文字とマークの組み合わせには、あらかじめ合成された文字も用意されています。

たとえばüは、単独のU+00FC、またはU+0075（u）とU+0308 COMBINING DIAERESISの並びで表せます。üやñなどの合成済み文字は、Latin 1をはじめとする既存の標準との互換性を保ちます。

分解は、文字列の解析や照合に役立つ場合があります。修飾マークがアルファベット順を変えない言語では、üをuと修飾マークに分けて処理できます。照合規則は言語によって異なります。Unicodeは[分解](http://unicode.org/versions/Unicode8.0.0/ch03.pdf#page=44)と正規化形式を定義し、正準等価な文字列を一貫した表現に揃えられるようにしています。

### Unicodeの誤解 <a id="myths-of-unicode"></a>

以下はMark Davisの[Unicode Myths](http://macchiato.com/slides/UnicodeMyths.pdf)で紹介された誤解の要約です。

- Unicodeは、65,536文字しか表せない単なる16ビットのコードではありません。UTF-16のコード単位は16ビットですが、Unicodeのコード空間はそれより広いものです。
- 未割当コードポイントは内部用途の予約領域ではなく、将来別の文字が割り当てられます。私用コードポイント、または用途に適した内部処理用の非文字を使います。
- すべてのコードポイントが符号化された抽象的な文字を表すわけではありません。非文字にはU+FFFE・U+FFFF・U+1FFFEがあります。サロゲート、私用・未割当領域、RLMやZWNJのような制御・書式文字も含まれます。
- 文字の追加は直線的に増えるわけではありません。原文の西暦2140年という値は、直線的な増加を仮定した例であり、Unicodeの空間が尽きるという予測ではありません。[Unicodeのロードマップ](http://www.unicode.org/roadmaps/)も参照してください。
- 大小文字の対応は常に一対一ではありません。
  - 一対多：ß → SS。
  - 文脈依存：…Σ ↔ …ς、ただし…ΣΤ… ↔ …στ…。
  - ロケール依存：I ↔ ı、İ ↔ i。

### Unicodeエンコーディングの応用 <a id="applied-unicode-encodings"></a>

表はU+1F596 RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS（🖖）の表現です。エンディアン別の行はバイト列の順序を示します。UTF-16LEの0x3DD8 0x96DDは原文がバイトを2つずつまとめた表記で、サロゲートコード単位の数値ではありません。

| 符号化形式 | 表現 |
| --- | --- |
| HTML文字参照（10進数） | `&#128406;` |
| HTML文字参照（16進数） | `&#x1F596;` |
| URLのパーセントエンコーディング | `%F0%9F%96%96` |
| UTF-8（16進数） | `0xF0 0x9F 0x96 0x96 (f09f9696)` |
| UTF-8（2進数） | `11110000:10011111:10010110:10010110` |
| UTF-16/UTF-16BE（16進数） | `0xD83D 0xDD96 (d83ddd96)` |
| UTF-16LE（16進数） | `0x3DD8 0x96DD (3dd896dd)` |
| UTF-32/UTF-32BE（16進数） | `0x0001F596 (0001f596)` |
| UTF-32LE（16進数） | `0x96F50100 (96f50100)` |
| 8進エスケープ列 | `\360\237\226\226` |

### ソースコード <a id="source-code"></a>

U+1F596を文字列リテラル内で表すエスケープの例です。原文では6言語に`\u1F596`を使っていますが、4桁の`\u`エスケープではこの補助面の文字を表せません。JavaScript ES6では波括弧付きコードポイント、JSON・JavaではUTF-16サロゲートペア、C/C++・Pythonでは8桁の`\U`エスケープを使います。言語ごとのリテラルの接頭辞などの規則にも従う必要があります。

| 言語 | エスケープ表現 |
| --- | --- |
| JavaScript (ES6) | `\u{1F596}` |
| JSON | `\uD83D\uDD96` |
| C | `\U0001F596` |
| C++ | `\U0001F596` |
| Java | `\uD83D\uDD96` |
| Python | `\U0001F596` |
| Perl | `\x{1F596}` |
| Ruby | `\u{1F596}` |
| CSS | `\01F596` |

[ECMAScript 2015第11.8.4節](https://262.ecma-international.org/6.0/#sec-literals-string-literals)、[JSON RFC 7159第7節](https://www.rfc-editor.org/rfc/rfc7159.html#section-7)、[Java SE 8第3.3節](https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.3)、[Python 3.5の字句解析](https://docs.python.org/3.5/reference/lexical_analysis.html#string-and-bytes-literals)を参照してください。

## 文字と表示 <a id="awesome-characters-list"></a> <a id="優れた文字の一覧"></a>

[xkcd第1137話「RTL」](https://xkcd.com/1137/)は、右から左への表示上書きを描いた例です。U+202Eを挿入した後、話し手の文字列が逆向きの読み順で表示されます。画像の補足文では、共同編集でU+202A〜U+202Eが使われる状況にも触れています。[原作の画像](http://imgs.xkcd.com/comics/rtl.png)。

### 特殊文字 <a id="special-characters"></a>

詳しい情報はUnicode Consortiumの[一般句読点の文字表](http://www.unicode.org/charts/PDF/U2000.pdf)で確認できます。文字名とU+200B・U+200C・U+FEFF・U+FFFEの違いは、[Unicode 9.0のNamesList](https://www.unicode.org/Public/9.0.0/ucd/NamesList.txt)で確認できます。表示はフォントやソフトウェアに依存し、原文の体験談はすべての環境での動作を保証しません。

| 文字の例 | 名称・コードポイント | 説明 |
| --- | --- | --- |
| `'﻿'` | U+FEFF ZERO WIDTH NO-BREAK SPACE / BYTE ORDER MARK | バイト順を検出する不可視のBOM。改行を抑える空白としての使用は非推奨。原文はPHPの不適合な処理による問題にも触れているが、当時の体験談。 |
| `'￯'` | U+FFEF（Unicode 9.0で未割当） | 原文は「逆BOM」とするが誤り。BOMのバイト順を逆に読んだ値はU+FFFE。U+FFEFは原文の誤りを特定するために保持。 |
| `'​'` | U+200B ZERO WIDTH SPACE | 不可視の語の区切りと改行機会を表す。原文の改行抑制・合字抑制の説明は別の書式文字と混同している。ZWNJはU+200C。 |
| `' '` | U+00A0 NO-BREAK SPACE | 隣接する文字列の途中で改行しない空白。HTMLの`&nbsp;`として知られる。 |
| `'­'` | U+00AD SOFT HYPHEN | 行を分割できる位置を示し、その位置で改行したときにハイフンを表示する。通常は不可視。 |
| `'‍'` | U+200D ZERO WIDTH JOINER | 対応する文字処理で接続形を要求する。アラビア文字の字形処理や絵文字のZWJ結合列などに使う。 |
| `'⁠'` | U+2060 WORD JOINER | 幅を取らずに改行を抑制する。原文はTwitterの@font-faceなどの文字列での利用にも触れている。 |
| `' '` | U+1680 OGHAM SPACE MARK | ハイフンのように見える場合がある。原文のJavaScript例1 +  2 === 3では空白として使っている。 |
| `';'` | U+037E GREEK QUESTION MARK | セミコロンに似ているが別の文字。 |
| `'\u202D'` | U+202D LEFT-TO-RIGHT OVERRIDE | 上書きが終わるまで、双方向の表示を左から右の向きにする。 |
| `'\u202E'` | U+202E RIGHT-TO-LEFT OVERRIDE | 上書きが終わるまで、双方向の表示を右から左の向きにする。 |
| `'ꓸ'` | U+A4F8 LISU LETTER TONE MYA TI | ピリオドに似た文字。 |
| `'ꓹ'` | U+A4F9 LISU LETTER TONE NA PO | コンマに似た文字。 |
| `'ꓼ'` | U+A4FC LISU LETTER TONE MYA NA | セミコロンに似た文字。 |
| `'ꓽ'` | U+A4FD LISU LETTER TONE MYA JEU | コロンに似た文字。 |
| `'︀'` | Variation Selectors (U+FE00–U+FE0F and U+E0100–U+E01EF) | 合計256の異体字セレクターからなる2領域。ID_StartではなくID_Continueを持ち、識別子の先頭以降に使える。原文は結合文字をまたぐカーソル移動に触れているが、エディターによって挙動は異なる。 |
| `'ᅟ'` | U+115F HANGUL CHOSEONG FILLER | ID_Startを持つ。原文では、対応状況により空白またはゼロ幅で表示されると説明。 |
| `'ᅠ'` | U+1160 HANGUL JUNGSEONG FILLER | ID_Startを持つ。原文は空白に見えるかを断定せず、未対応時は不可視になると報告。 |
| `'ㅤ'` | U+3164 HANGUL FILLER | ID_Startを持つ。原文では、対応状況により空白またはゼロ幅で表示されると説明。 |

### 変数識別子には実質的に空白を含められる <a id="variable-identifiers-can-effectively-include-whitespace"></a>

U+3164 HANGUL FILLERは空白のように見えても、識別子に使える文字です。原文では、対応する表示環境では幅のある空白、未対応時には不可視のゼロ幅文字として表示されると説明し、[Unicodeの未対応文字の表示指針](http://unicode.org/faq/unsup_char.html)を参照しています。これは原文が報告する表示挙動として読み、置換文字（�）が絶対に現れないという保証とは扱いません。

原文の著者はこの挙動の理由を断定せず、U+3164がUnicode 1.1（1993年）で追加されたことに触れています。次の例は、ハングルのフィラーを含む識別子を示します。

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

著者はUbuntuとOS Xで、`node`・`php`・`ruby`・`python3.5`・`scala`・`vim`・`cat`・`chrome`・`github gist`によるU+3164の表示を試したと報告しています。その試験ではAtomだけが空の四角を表示し、Emacs・Sublimeは未確認でした。原文では、安定した文字名・コードポイントと、変更され得るID_Start・ID_Continueなどのプロパティも区別しています。いずれも著者が原文で報告した時点の情報です。

### 修飾子 <a id="modifiers"></a>

ZERO WIDTH JOINER（ZWJ）は、アラビア文字やインド系文字などの組版で使う不可視文字です。対応する接続処理がある場合、通常は離れて表示される隣接文字に接続形を要求できます。

ZERO WIDTH NON-JOINER（ZWNJ）は、隣接文字の接続や合字を抑制します。接続する文字体系では、前の文字を語末形、後ろの文字を語頭形で表示させる場合があります。空白より間隔を狭く保ちながら、単語と形態素の間などを分離できます。

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

### 大文字変換の衝突 <a id="collision-uppercase-transformation-collisions"></a> <a id="collision-大文字変換の衝突"></a>

大文字化により、異なる元の文字列が同じ結果になることがあります。複数の文字へ展開される文字もあります。

| 文字 | コードポイント | 変換結果 |
| --- | --- | --- |
| ß | 0x00DF | `SS` |
| ı | 0x0131 | `I` |
| ſ | 0x017F | `S` |
| ﬀ | 0xFB00 | `FF` |
| ﬁ | 0xFB01 | `FI` |
| ﬂ | 0xFB02 | `FL` |
| ﬃ | 0xFB03 | `FFI` |
| ﬄ | 0xFB04 | `FFL` |
| ﬅ | 0xFB05 | `ST` |
| ﬆ | 0xFB06 | `ST` |

### 小文字変換の衝突 <a id="collision-lowercase-transformation-collisions"></a> <a id="collision-小文字変換の衝突"></a>

ケルビン記号KとアルファベットのKは、どちらも小文字化するとkになります。

| 文字 | コードポイント | 変換結果 |
| --- | --- | --- |
| K | 0x212A | `k` |

## 癖とトラブルシューティング <a id="quirks-and-troubleshooting"></a>

- 文字列の長さは、何を数えるかによって変わります。JavaScriptはUTF-16のコード単位を数えるため、1コードポイントを表すサロゲートペアも2単位になります。基本文字と結合マークの並びは、複数コードポイントでも見た目上1つの書記素になることがあります。
- 文字列の反転では、サロゲートペアや結合文字列を一体として扱う必要があります。[ES Reverser](https://github.com/mathiasbynens/esrever)はUnicodeを考慮する文字列反転ツールです。
- 大文字・小文字の対応は、常に一対一ではありません。
  - 一対多：ß → SS。
  - 文脈依存：…Σ ↔ …ς、ただし…ΣΤ… ↔ …στ…。
  - ロケール依存：I ↔ ı、İ ↔ i。

### 一対多のケースフォールディング <a id="one-to-many-case-mappings"></a> <a id="一対多の大小文字対応"></a>

以下の104行は、一対多の完全ケースフォールディングであり、大文字化と小文字化の混在ではありません。コードポイントの対応は、[Unicode 9.0のCaseFolding.txt](https://www.unicode.org/Public/9.0.0/ucd/CaseFolding.txt)のF項目と一致します。完全ケースフォールディングは大小文字を区別しない比較のために大小の違いを取り除く処理で、文字数が増える場合があります。正規化形式を維持する処理ではありません。

| コードポイント | 文字 | Unicode文字名 | 変換後の文字 | 変換後のコードポイント |
| --- | --- | --- | --- | --- |
| [U+00DF](https://codepoints.net/U+00DF?lang=en) | `ß` | LATIN SMALL LETTER SHARP S | `s`, `s` | U+0073, U+0073 |
| [U+0130](https://codepoints.net/U+0130?lang=en) | `İ` | LATIN CAPITAL LETTER I WITH DOT ABOVE | `i`, `̇` | U+0069, U+0307 |
| [U+0149](https://codepoints.net/U+0149?lang=en) | `ŉ` | LATIN SMALL LETTER N PRECEDED BY APOSTROPHE | `ʼ`, `n` | U+02BC, U+006E |
| [U+01F0](https://codepoints.net/U+01F0?lang=en) | `ǰ` | LATIN SMALL LETTER J WITH CARON | `j`, `̌` | U+006A, U+030C |
| [U+0390](https://codepoints.net/U+0390?lang=en) | `ΐ` | GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS | `ι`, `̈`, `́` | U+03B9, U+0308, U+0301 |
| [U+03B0](https://codepoints.net/U+03B0?lang=en) | `ΰ` | GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS | `υ`, `̈`, `́` | U+03C5, U+0308, U+0301 |
| [U+0587](https://codepoints.net/U+0587?lang=en) | `և` | ARMENIAN SMALL LIGATURE ECH YIWN | `ե`, `ւ` | U+0565, U+0582 |
| [U+1E96](https://codepoints.net/U+1E96?lang=en) | `ẖ` | LATIN SMALL LETTER H WITH LINE BELOW | `h`, `̱` | U+0068, U+0331 |
| [U+1E97](https://codepoints.net/U+1E97?lang=en) | `ẗ` | LATIN SMALL LETTER T WITH DIAERESIS | `t`, `̈` | U+0074, U+0308 |
| [U+1E98](https://codepoints.net/U+1E98?lang=en) | `ẘ` | LATIN SMALL LETTER W WITH RING ABOVE | `w`, `̊` | U+0077, U+030A |
| [U+1E99](https://codepoints.net/U+1E99?lang=en) | `ẙ` | LATIN SMALL LETTER Y WITH RING ABOVE | `y`, `̊` | U+0079, U+030A |
| [U+1E9A](https://codepoints.net/U+1E9A?lang=en) | `ẚ` | LATIN SMALL LETTER A WITH RIGHT HALF RING | `a`, `ʾ` | U+0061, U+02BE |
| [U+1E9E](https://codepoints.net/U+1E9E?lang=en) | `ẞ` | LATIN CAPITAL LETTER SHARP S | `s`, `s` | U+0073, U+0073 |
| [U+1F50](https://codepoints.net/U+1F50?lang=en) | `ὐ` | GREEK SMALL LETTER UPSILON WITH PSILI | `υ`, `̓` | U+03C5, U+0313 |
| [U+1F52](https://codepoints.net/U+1F52?lang=en) | `ὒ` | GREEK SMALL LETTER UPSILON WITH PSILI AND VARIA | `υ`, `̓`, `̀` | U+03C5, U+0313, U+0300 |
| [U+1F54](https://codepoints.net/U+1F54?lang=en) | `ὔ` | GREEK SMALL LETTER UPSILON WITH PSILI AND OXIA | `υ`, `̓`, `́` | U+03C5, U+0313, U+0301 |
| [U+1F56](https://codepoints.net/U+1F56?lang=en) | `ὖ` | GREEK SMALL LETTER UPSILON WITH PSILI AND PERISPOMENI | `υ`, `̓`, `͂` | U+03C5, U+0313, U+0342 |
| [U+1F80](https://codepoints.net/U+1F80?lang=en) | `ᾀ` | GREEK SMALL LETTER ALPHA WITH PSILI AND YPOGEGRAMMENI | `ἀ`, `ι` | U+1F00, U+03B9 |
| [U+1F81](https://codepoints.net/U+1F81?lang=en) | `ᾁ` | GREEK SMALL LETTER ALPHA WITH DASIA AND YPOGEGRAMMENI | `ἁ`, `ι` | U+1F01, U+03B9 |
| [U+1F82](https://codepoints.net/U+1F82?lang=en) | `ᾂ` | GREEK SMALL LETTER ALPHA WITH PSILI AND VARIA AND YPOGEGRAMMENI | `ἂ`, `ι` | U+1F02, U+03B9 |
| [U+1F83](https://codepoints.net/U+1F83?lang=en) | `ᾃ` | GREEK SMALL LETTER ALPHA WITH DASIA AND VARIA AND YPOGEGRAMMENI | `ἃ`, `ι` | U+1F03, U+03B9 |
| [U+1F84](https://codepoints.net/U+1F84?lang=en) | `ᾄ` | GREEK SMALL LETTER ALPHA WITH PSILI AND OXIA AND YPOGEGRAMMENI | `ἄ`, `ι` | U+1F04, U+03B9 |
| [U+1F85](https://codepoints.net/U+1F85?lang=en) | `ᾅ` | GREEK SMALL LETTER ALPHA WITH DASIA AND OXIA AND YPOGEGRAMMENI | `ἅ`, `ι` | U+1F05, U+03B9 |
| [U+1F86](https://codepoints.net/U+1F86?lang=en) | `ᾆ` | GREEK SMALL LETTER ALPHA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI | `ἆ`, `ι` | U+1F06, U+03B9 |
| [U+1F87](https://codepoints.net/U+1F87?lang=en) | `ᾇ` | GREEK SMALL LETTER ALPHA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI | `ἇ`, `ι` | U+1F07, U+03B9 |
| [U+1F88](https://codepoints.net/U+1F88?lang=en) | `ᾈ` | GREEK CAPITAL LETTER ALPHA WITH PSILI AND PROSGEGRAMMENI | `ἀ`, `ι` | U+1F00, U+03B9 |
| [U+1F89](https://codepoints.net/U+1F89?lang=en) | `ᾉ` | GREEK CAPITAL LETTER ALPHA WITH DASIA AND PROSGEGRAMMENI | `ἁ`, `ι` | U+1F01, U+03B9 |
| [U+1F8A](https://codepoints.net/U+1F8A?lang=en) | `ᾊ` | GREEK CAPITAL LETTER ALPHA WITH PSILI AND VARIA AND PROSGEGRAMMENI | `ἂ`, `ι` | U+1F02, U+03B9 |
| [U+1F8B](https://codepoints.net/U+1F8B?lang=en) | `ᾋ` | GREEK CAPITAL LETTER ALPHA WITH DASIA AND VARIA AND PROSGEGRAMMENI | `ἃ`, `ι` | U+1F03, U+03B9 |
| [U+1F8C](https://codepoints.net/U+1F8C?lang=en) | `ᾌ` | GREEK CAPITAL LETTER ALPHA WITH PSILI AND OXIA AND PROSGEGRAMMENI | `ἄ`, `ι` | U+1F04, U+03B9 |
| [U+1F8D](https://codepoints.net/U+1F8D?lang=en) | `ᾍ` | GREEK CAPITAL LETTER ALPHA WITH DASIA AND OXIA AND PROSGEGRAMMENI | `ἅ`, `ι` | U+1F05, U+03B9 |
| [U+1F8E](https://codepoints.net/U+1F8E?lang=en) | `ᾎ` | GREEK CAPITAL LETTER ALPHA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI | `ἆ`, `ι` | U+1F06, U+03B9 |
| [U+1F8F](https://codepoints.net/U+1F8F?lang=en) | `ᾏ` | GREEK CAPITAL LETTER ALPHA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI | `ἇ`, `ι` | U+1F07, U+03B9 |
| [U+1F90](https://codepoints.net/U+1F90?lang=en) | `ᾐ` | GREEK SMALL LETTER ETA WITH PSILI AND YPOGEGRAMMENI | `ἠ`, `ι` | U+1F20, U+03B9 |
| [U+1F91](https://codepoints.net/U+1F91?lang=en) | `ᾑ` | GREEK SMALL LETTER ETA WITH DASIA AND YPOGEGRAMMENI | `ἡ`, `ι` | U+1F21, U+03B9 |
| [U+1F92](https://codepoints.net/U+1F92?lang=en) | `ᾒ` | GREEK SMALL LETTER ETA WITH PSILI AND VARIA AND YPOGEGRAMMENI | `ἢ`, `ι` | U+1F22, U+03B9 |
| [U+1F93](https://codepoints.net/U+1F93?lang=en) | `ᾓ` | GREEK SMALL LETTER ETA WITH DASIA AND VARIA AND YPOGEGRAMMENI | `ἣ`, `ι` | U+1F23, U+03B9 |
| [U+1F94](https://codepoints.net/U+1F94?lang=en) | `ᾔ` | GREEK SMALL LETTER ETA WITH PSILI AND OXIA AND YPOGEGRAMMENI | `ἤ`, `ι` | U+1F24, U+03B9 |
| [U+1F95](https://codepoints.net/U+1F95?lang=en) | `ᾕ` | GREEK SMALL LETTER ETA WITH DASIA AND OXIA AND YPOGEGRAMMENI | `ἥ`, `ι` | U+1F25, U+03B9 |
| [U+1F96](https://codepoints.net/U+1F96?lang=en) | `ᾖ` | GREEK SMALL LETTER ETA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI | `ἦ`, `ι` | U+1F26, U+03B9 |
| [U+1F97](https://codepoints.net/U+1F97?lang=en) | `ᾗ` | GREEK SMALL LETTER ETA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI | `ἧ`, `ι` | U+1F27, U+03B9 |
| [U+1F98](https://codepoints.net/U+1F98?lang=en) | `ᾘ` | GREEK CAPITAL LETTER ETA WITH PSILI AND PROSGEGRAMMENI | `ἠ`, `ι` | U+1F20, U+03B9 |
| [U+1F99](https://codepoints.net/U+1F99?lang=en) | `ᾙ` | GREEK CAPITAL LETTER ETA WITH DASIA AND PROSGEGRAMMENI | `ἡ`, `ι` | U+1F21, U+03B9 |
| [U+1F9A](https://codepoints.net/U+1F9A?lang=en) | `ᾚ` | GREEK CAPITAL LETTER ETA WITH PSILI AND VARIA AND PROSGEGRAMMENI | `ἢ`, `ι` | U+1F22, U+03B9 |
| [U+1F9B](https://codepoints.net/U+1F9B?lang=en) | `ᾛ` | GREEK CAPITAL LETTER ETA WITH DASIA AND VARIA AND PROSGEGRAMMENI | `ἣ`, `ι` | U+1F23, U+03B9 |
| [U+1F9C](https://codepoints.net/U+1F9C?lang=en) | `ᾜ` | GREEK CAPITAL LETTER ETA WITH PSILI AND OXIA AND PROSGEGRAMMENI | `ἤ`, `ι` | U+1F24, U+03B9 |
| [U+1F9D](https://codepoints.net/U+1F9D?lang=en) | `ᾝ` | GREEK CAPITAL LETTER ETA WITH DASIA AND OXIA AND PROSGEGRAMMENI | `ἥ`, `ι` | U+1F25, U+03B9 |
| [U+1F9E](https://codepoints.net/U+1F9E?lang=en) | `ᾞ` | GREEK CAPITAL LETTER ETA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI | `ἦ`, `ι` | U+1F26, U+03B9 |
| [U+1F9F](https://codepoints.net/U+1F9F?lang=en) | `ᾟ` | GREEK CAPITAL LETTER ETA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI | `ἧ`, `ι` | U+1F27, U+03B9 |
| [U+1FA0](https://codepoints.net/U+1FA0?lang=en) | `ᾠ` | GREEK SMALL LETTER OMEGA WITH PSILI AND YPOGEGRAMMENI | `ὠ`, `ι` | U+1F60, U+03B9 |
| [U+1FA1](https://codepoints.net/U+1FA1?lang=en) | `ᾡ` | GREEK SMALL LETTER OMEGA WITH DASIA AND YPOGEGRAMMENI | `ὡ`, `ι` | U+1F61, U+03B9 |
| [U+1FA2](https://codepoints.net/U+1FA2?lang=en) | `ᾢ` | GREEK SMALL LETTER OMEGA WITH PSILI AND VARIA AND YPOGEGRAMMENI | `ὢ`, `ι` | U+1F62, U+03B9 |
| [U+1FA3](https://codepoints.net/U+1FA3?lang=en) | `ᾣ` | GREEK SMALL LETTER OMEGA WITH DASIA AND VARIA AND YPOGEGRAMMENI | `ὣ`, `ι` | U+1F63, U+03B9 |
| [U+1FA4](https://codepoints.net/U+1FA4?lang=en) | `ᾤ` | GREEK SMALL LETTER OMEGA WITH PSILI AND OXIA AND YPOGEGRAMMENI | `ὤ`, `ι` | U+1F64, U+03B9 |
| [U+1FA5](https://codepoints.net/U+1FA5?lang=en) | `ᾥ` | GREEK SMALL LETTER OMEGA WITH DASIA AND OXIA AND YPOGEGRAMMENI | `ὥ`, `ι` | U+1F65, U+03B9 |
| [U+1FA6](https://codepoints.net/U+1FA6?lang=en) | `ᾦ` | GREEK SMALL LETTER OMEGA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI | `ὦ`, `ι` | U+1F66, U+03B9 |
| [U+1FA7](https://codepoints.net/U+1FA7?lang=en) | `ᾧ` | GREEK SMALL LETTER OMEGA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI | `ὧ`, `ι` | U+1F67, U+03B9 |
| [U+1FA8](https://codepoints.net/U+1FA8?lang=en) | `ᾨ` | GREEK CAPITAL LETTER OMEGA WITH PSILI AND PROSGEGRAMMENI | `ὠ`, `ι` | U+1F60, U+03B9 |
| [U+1FA9](https://codepoints.net/U+1FA9?lang=en) | `ᾩ` | GREEK CAPITAL LETTER OMEGA WITH DASIA AND PROSGEGRAMMENI | `ὡ`, `ι` | U+1F61, U+03B9 |
| [U+1FAA](https://codepoints.net/U+1FAA?lang=en) | `ᾪ` | GREEK CAPITAL LETTER OMEGA WITH PSILI AND VARIA AND PROSGEGRAMMENI | `ὢ`, `ι` | U+1F62, U+03B9 |
| [U+1FAB](https://codepoints.net/U+1FAB?lang=en) | `ᾫ` | GREEK CAPITAL LETTER OMEGA WITH DASIA AND VARIA AND PROSGEGRAMMENI | `ὣ`, `ι` | U+1F63, U+03B9 |
| [U+1FAC](https://codepoints.net/U+1FAC?lang=en) | `ᾬ` | GREEK CAPITAL LETTER OMEGA WITH PSILI AND OXIA AND PROSGEGRAMMENI | `ὤ`, `ι` | U+1F64, U+03B9 |
| [U+1FAD](https://codepoints.net/U+1FAD?lang=en) | `ᾭ` | GREEK CAPITAL LETTER OMEGA WITH DASIA AND OXIA AND PROSGEGRAMMENI | `ὥ`, `ι` | U+1F65, U+03B9 |
| [U+1FAE](https://codepoints.net/U+1FAE?lang=en) | `ᾮ` | GREEK CAPITAL LETTER OMEGA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI | `ὦ`, `ι` | U+1F66, U+03B9 |
| [U+1FAF](https://codepoints.net/U+1FAF?lang=en) | `ᾯ` | GREEK CAPITAL LETTER OMEGA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI | `ὧ`, `ι` | U+1F67, U+03B9 |
| [U+1FB2](https://codepoints.net/U+1FB2?lang=en) | `ᾲ` | GREEK SMALL LETTER ALPHA WITH VARIA AND YPOGEGRAMMENI | `ὰ`, `ι` | U+1F70, U+03B9 |
| [U+1FB3](https://codepoints.net/U+1FB3?lang=en) | `ᾳ` | GREEK SMALL LETTER ALPHA WITH YPOGEGRAMMENI | `α`, `ι` | U+03B1, U+03B9 |
| [U+1FB4](https://codepoints.net/U+1FB4?lang=en) | `ᾴ` | GREEK SMALL LETTER ALPHA WITH OXIA AND YPOGEGRAMMENI | `ά`, `ι` | U+03AC, U+03B9 |
| [U+1FB6](https://codepoints.net/U+1FB6?lang=en) | `ᾶ` | GREEK SMALL LETTER ALPHA WITH PERISPOMENI | `α`, `͂` | U+03B1, U+0342 |
| [U+1FB7](https://codepoints.net/U+1FB7?lang=en) | `ᾷ` | GREEK SMALL LETTER ALPHA WITH PERISPOMENI AND YPOGEGRAMMENI | `α`, `͂`, `ι` | U+03B1, U+0342, U+03B9 |
| [U+1FBC](https://codepoints.net/U+1FBC?lang=en) | `ᾼ` | GREEK CAPITAL LETTER ALPHA WITH PROSGEGRAMMENI | `α`, `ι` | U+03B1, U+03B9 |
| [U+1FC2](https://codepoints.net/U+1FC2?lang=en) | `ῂ` | GREEK SMALL LETTER ETA WITH VARIA AND YPOGEGRAMMENI | `ὴ`, `ι` | U+1F74, U+03B9 |
| [U+1FC3](https://codepoints.net/U+1FC3?lang=en) | `ῃ` | GREEK SMALL LETTER ETA WITH YPOGEGRAMMENI | `η`, `ι` | U+03B7, U+03B9 |
| [U+1FC4](https://codepoints.net/U+1FC4?lang=en) | `ῄ` | GREEK SMALL LETTER ETA WITH OXIA AND YPOGEGRAMMENI | `ή`, `ι` | U+03AE, U+03B9 |
| [U+1FC6](https://codepoints.net/U+1FC6?lang=en) | `ῆ` | GREEK SMALL LETTER ETA WITH PERISPOMENI | `η`, `͂` | U+03B7, U+0342 |
| [U+1FC7](https://codepoints.net/U+1FC7?lang=en) | `ῇ` | GREEK SMALL LETTER ETA WITH PERISPOMENI AND YPOGEGRAMMENI | `η`, `͂`, `ι` | U+03B7, U+0342, U+03B9 |
| [U+1FCC](https://codepoints.net/U+1FCC?lang=en) | `ῌ` | GREEK CAPITAL LETTER ETA WITH PROSGEGRAMMENI | `η`, `ι` | U+03B7, U+03B9 |
| [U+1FD2](https://codepoints.net/U+1FD2?lang=en) | `ῒ` | GREEK SMALL LETTER IOTA WITH DIALYTIKA AND VARIA | `ι`, `̈`, `̀` | U+03B9, U+0308, U+0300 |
| [U+1FD3](https://codepoints.net/U+1FD3?lang=en) | `ΐ` | GREEK SMALL LETTER IOTA WITH DIALYTIKA AND OXIA | `ι`, `̈`, `́` | U+03B9, U+0308, U+0301 |
| [U+1FD6](https://codepoints.net/U+1FD6?lang=en) | `ῖ` | GREEK SMALL LETTER IOTA WITH PERISPOMENI | `ι`, `͂` | U+03B9, U+0342 |
| [U+1FD7](https://codepoints.net/U+1FD7?lang=en) | `ῗ` | GREEK SMALL LETTER IOTA WITH DIALYTIKA AND PERISPOMENI | `ι`, `̈`, `͂` | U+03B9, U+0308, U+0342 |
| [U+1FE2](https://codepoints.net/U+1FE2?lang=en) | `ῢ` | GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND VARIA | `υ`, `̈`, `̀` | U+03C5, U+0308, U+0300 |
| [U+1FE3](https://codepoints.net/U+1FE3?lang=en) | `ΰ` | GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND OXIA | `υ`, `̈`, `́` | U+03C5, U+0308, U+0301 |
| [U+1FE4](https://codepoints.net/U+1FE4?lang=en) | `ῤ` | GREEK SMALL LETTER RHO WITH PSILI | `ρ`, `̓` | U+03C1, U+0313 |
| [U+1FE6](https://codepoints.net/U+1FE6?lang=en) | `ῦ` | GREEK SMALL LETTER UPSILON WITH PERISPOMENI | `υ`, `͂` | U+03C5, U+0342 |
| [U+1FE7](https://codepoints.net/U+1FE7?lang=en) | `ῧ` | GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND PERISPOMENI | `υ`, `̈`, `͂` | U+03C5, U+0308, U+0342 |
| [U+1FF2](https://codepoints.net/U+1FF2?lang=en) | `ῲ` | GREEK SMALL LETTER OMEGA WITH VARIA AND YPOGEGRAMMENI | `ὼ`, `ι` | U+1F7C, U+03B9 |
| [U+1FF3](https://codepoints.net/U+1FF3?lang=en) | `ῳ` | GREEK SMALL LETTER OMEGA WITH YPOGEGRAMMENI | `ω`, `ι` | U+03C9, U+03B9 |
| [U+1FF4](https://codepoints.net/U+1FF4?lang=en) | `ῴ` | GREEK SMALL LETTER OMEGA WITH OXIA AND YPOGEGRAMMENI | `ώ`, `ι` | U+03CE, U+03B9 |
| [U+1FF6](https://codepoints.net/U+1FF6?lang=en) | `ῶ` | GREEK SMALL LETTER OMEGA WITH PERISPOMENI | `ω`, `͂` | U+03C9, U+0342 |
| [U+1FF7](https://codepoints.net/U+1FF7?lang=en) | `ῷ` | GREEK SMALL LETTER OMEGA WITH PERISPOMENI AND YPOGEGRAMMENI | `ω`, `͂`, `ι` | U+03C9, U+0342, U+03B9 |
| [U+1FFC](https://codepoints.net/U+1FFC?lang=en) | `ῼ` | GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI | `ω`, `ι` | U+03C9, U+03B9 |
| [U+FB00](https://codepoints.net/U+FB00?lang=en) | `ﬀ` | LATIN SMALL LIGATURE FF | `f`, `f` | U+0066, U+0066 |
| [U+FB01](https://codepoints.net/U+FB01?lang=en) | `ﬁ` | LATIN SMALL LIGATURE FI | `f`, `i` | U+0066, U+0069 |
| [U+FB02](https://codepoints.net/U+FB02?lang=en) | `ﬂ` | LATIN SMALL LIGATURE FL | `f`, `l` | U+0066, U+006C |
| [U+FB03](https://codepoints.net/U+FB03?lang=en) | `ﬃ` | LATIN SMALL LIGATURE FFI | `f`, `f`, `i` | U+0066, U+0066, U+0069 |
| [U+FB04](https://codepoints.net/U+FB04?lang=en) | `ﬄ` | LATIN SMALL LIGATURE FFL | `f`, `f`, `l` | U+0066, U+0066, U+006C |
| [U+FB05](https://codepoints.net/U+FB05?lang=en) | `ﬅ` | LATIN SMALL LIGATURE LONG S T | `s`, `t` | U+0073, U+0074 |
| [U+FB06](https://codepoints.net/U+FB06?lang=en) | `ﬆ` | LATIN SMALL LIGATURE ST | `s`, `t` | U+0073, U+0074 |
| [U+FB13](https://codepoints.net/U+FB13?lang=en) | `ﬓ` | ARMENIAN SMALL LIGATURE MEN NOW | `մ`, `ն` | U+0574, U+0576 |
| [U+FB14](https://codepoints.net/U+FB14?lang=en) | `ﬔ` | ARMENIAN SMALL LIGATURE MEN ECH | `մ`, `ե` | U+0574, U+0565 |
| [U+FB15](https://codepoints.net/U+FB15?lang=en) | `ﬕ` | ARMENIAN SMALL LIGATURE MEN INI | `մ`, `ի` | U+0574, U+056B |
| [U+FB16](https://codepoints.net/U+FB16?lang=en) | `ﬖ` | ARMENIAN SMALL LIGATURE VEW NOW | `վ`, `ն` | U+057E, U+0576 |
| [U+FB17](https://codepoints.net/U+FB17?lang=en) | `ﬗ` | ARMENIAN SMALL LIGATURE MEN XEH | `մ`, `խ` | U+0574, U+056D |

## パッケージとライブラリ <a id="awesome-packages--libraries"></a> <a id="優れたパッケージとライブラリ"></a>

- [PhantomScript](https://github.com/jagracey/PhantomScript) - 不可視のJavaScriptコード実行とソーシャルエンジニアリングの例。
- [ESReverser](https://github.com/mathiasbynens/esrever) - Unicodeを考慮して文字列を反転するJavaScript製ツール。
- [mimic](https://github.com/reinderien/mimic) - 似た字形のUnicode文字を使う難読化ツール。
- [python-ftfy](https://github.com/LuminosoInsight/python-ftfy) - Unicodeテキストの表現を揃え、可能な範囲で文字化けなどを修復するツール。
- [vim-troll-stopper](https://github.com/vim-utils/vim-troll-stopper) - ソースコードに紛れ込んだ紛らわしいUnicode文字を検出するツール。

## 絵文字 <a id="emojis"></a>

- [Unicode Consortiumの絵文字表](http://www.unicode.org/emoji/charts/full-emoji-list.html)
- [Emojipedia](http://emojipedia.org/) - 個々の絵文字に関する情報とニュースブログ。
- [emojitracker](http://emojitracker.com/) - Twitterでの絵文字の使用をリアルタイムに追跡するサービス。
- [World Translation Foundation](http://www.emojifoundation.com/) - 書き言葉から絵文字の視覚的なアルファベットへの翻訳を推進・探究する取り組み。
- [Can I Emoji?](http://caniemoji.com/android-2/) - iOS・Android・Windowsのネイティブ絵文字対応状況を示すサイト。
- [How to register an emoji URL](http://www.name.com/blog/how-tos/2015/12/want-an-emoji-url-this-is-how-you-register-one/)

### 多様性 <a id="diversity"></a>

Unicodeの絵文字は、家族の関係や文化的な慣習を含む人間の多様性を表現します。Unicode Consortiumの[多様性に関する報告](http://unicode.org/reports/tr51/#Diversity)を参照してください。原文では同性の家族、手をつなぐ・キスをする場面などを扱い、[ZWJで結合した絵文字列](http://www.unicode.org/emoji/charts/emoji-zwj-sequences.html)を例にしています。

| コードポイント | 構成要素 | 結合した列 |
| --- | --- | --- |
| U+1F469 U+200D U+2764 U+FE0F U+200D U+1F469 | 👩 + ZWJ + ❤️ (U+2764 U+FE0F) + ZWJ + 👩; [女性](http://unicode.org/reports/tr51/images/apple/apple_1f469.png), [ZWJ](http://unicode.org/reports/tr51/images/other/zwj.png), [ハート](http://unicode.org/reports/tr51/images/apple/apple_2764.png), [ZWJ](http://unicode.org/reports/tr51/images/other/zwj.png), [女性](http://unicode.org/reports/tr51/images/apple/apple_1f469.png) | 👩‍❤️‍👩 — ハート付きの女性2人のカップル; [結合した画像](http://unicode.org/reports/tr51/images/apple/apple_1f469_200d_2764_fe0f_200d_1f469.png) |
| U+1F468 U+200D U+1F468 U+200D U+1F467 U+200D U+1F466 | 👨 + ZWJ + 👨 + ZWJ + 👧 + ZWJ + 👦; [個別表示の画像](https://raw.githubusercontent.com/jagracey/Awesome-Unicode/c575db618a89c88624a8c3bdfe57eada064cbf14/resources/family%3B%20man%2C%20man%2C%20girl%2C%20boy%20-%20fallback%20-%20ZWJ.jpg) | 👨‍👨‍👧‍👦 — 男性2人・女の子・男の子の家族; [結合した画像](https://raw.githubusercontent.com/jagracey/Awesome-Unicode/58f28d08aef7f36eb6cdca22d25e7654cd8de5ae/resources/family%3B%20man%2C%20man%2C%20girl%2C%20boy.png) |

Unicode 8.0では、2015年半ばに5つの肌色修飾子が追加されました。フィッツパトリック尺度の6タイプを基にし、タイプ1・2は同じ修飾子で表します。[多様性に関する報告](http://unicode.org/reports/tr51/#Diversity)では、実際の色合いは実装によって異なると説明しています。

| コードポイント | Unicode文字名 | 文字例と原文の見本 |
| --- | --- | --- |
| U+1F3FB | EMOJI MODIFIER FITZPATRICK TYPE-1-2 | 🏻; [色見本](http://www.unicode.org/reports/tr51/images/other/swatch-type-1-2.png), [白黒の見本](http://www.unicode.org/reports/tr51/images/other/swatch-type-1-2-bw.png) |
| U+1F3FC | EMOJI MODIFIER FITZPATRICK TYPE-3 | 🏼; [色見本](http://www.unicode.org/reports/tr51/images/other/swatch-type-3.png), [白黒の見本](http://www.unicode.org/reports/tr51/images/other/swatch-type-3-bw.png) |
| U+1F3FD | EMOJI MODIFIER FITZPATRICK TYPE-4 | 🏽; [色見本](http://www.unicode.org/reports/tr51/images/other/swatch-type-4.png), [白黒の見本](http://www.unicode.org/reports/tr51/images/other/swatch-type-4-bw.png) |
| U+1F3FE | EMOJI MODIFIER FITZPATRICK TYPE-5 | 🏾; [色見本](http://www.unicode.org/reports/tr51/images/other/swatch-type-5.png), [白黒の見本](http://www.unicode.org/reports/tr51/images/other/swatch-type-5-bw.png) |
| U+1F3FF | EMOJI MODIFIER FITZPATRICK TYPE-6 | 🏿; [色見本](http://www.unicode.org/reports/tr51/images/other/swatch-type-6.png), [白黒の見本](http://www.unicode.org/reports/tr51/images/other/swatch-type-6-bw.png) |

対応する絵文字の直後に修飾子を置きます。たとえば`\u{1F466}\u{1F3FE}`は、BOYにEMOJI MODIFIER FITZPATRICK TYPE-5を続けた👦🏾です。原文の図では、標準の黄色い顔とタイプ5の色見本を合わせると、茶色い顔になります。[標準の顔](http://unicode.org/reports/tr51/images/other/person.png)、[修飾子の色見本](http://unicode.org/reports/tr51/images/other/swatch-type-5.png)、[結合した顔](http://unicode.org/reports/tr51/images/other/person-5.png)。

[原文のパレット](http://unicode.org/reports/tr51/images/other/palette-with-gray.png)は、灰色の一般的な顔に続けて、修飾子の色が段階的に濃くなる5つの顔を並べています。一般的な表示色は、5つの肌色修飾子とは別です。

## 変数・メソッドの創造的な命名 <a id="creatively-naming-variables-and-methods"></a>

以下はJavaScript ES6の例です。[ID_Start](https://codepoints.net/search?IDS=1)を持つ文字は一般に識別子の先頭、[ID_Continue](https://codepoints.net/search?IDC=1)を持つ文字はそれ以降に使えます。言語自体の識別子規則にも従います。

```javascript

function rand(μ,σ){ ... };

String.prototype.reverseⵑ = function(){..};

Number.prototype.isTrueɁ = function(){..};

var WhatDoesThisDoɁɁɁɁ = 42
```

次は[Mathias Bynens](https://mathiasbynens.be/notes/javascript-identifiers#examples)による例です。コード内のブラウザー対応に関するコメントは原文のまま保持しており、当時の状況を表します。

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

David Walshの[Unicodeを使ったCSSクラス](https://davidwalsh.name/unicode-css-classes)の例では、HTMLの非ASCIIクラス名と、対応するCSSセレクターに同じ文字を使います。

```html
<!-- place this within the document head -->
<meta charset="UTF-8" />

<!-- error message -->
<div class="ಠ_ಠ">You do not have access to this page.</div>

<!-- success message -->
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

### 再帰的HTMLタグ改名スクリプト <a id="recursive-html-tag-renaming-script"></a>

この例は、空白や字形の変わった名前に見える文字列でHTML要素を改名します。置換時には属性・子ノード・インラインスタイルをコピーします。HTMLの要素名では、すべてのUnicode文字が使えるわけではありません。以下の結果は原文が報告した例です。

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

次の関数は、文字列が要素名の先頭、または先頭以降に使えるかを調べます。

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

原文の結果では、ハイフンはタグ名の先頭には使えませんが、先頭文字の後ろには使えます。先頭をU+1160 HANGUL JUNGSEONG FILLERにした例も示されています。

```javascript
// Test if dashes can start an HTML Tag
> testBegin('-')
< false

> testContinue('-')
< true

> testBegin('ᅠ-')	// Prepend dash with U+1160 HANGUL JUNGSEONG FILLER
< true
```

## Unicodeフォント <a id="unicode-fonts"></a>

原文のフォント上限は「UTF-8文字数」ではなくグリフ数の話です。OpenTypeの`numGlyphs`は16ビットの符号なし整数なので、最大65,535グリフを表せます。Unicodeの1,114,112はコードポイントの位置の数であり、その数のグリフが割り当てられているわけではありません。コードポイントとグリフも一対一の関係ではありません。フォントファミリーや代替フォントを組み合わせると、より多くの文字体系に対応できます。[OpenTypeのMaximum Profile表](https://learn.microsoft.com/en-us/typography/opentype/spec/maxp)も参照してください。

- [Unicodeフォントの一覧](https://en.wikipedia.org/wiki/Unicode_font#List_of_Unicode_fonts)
- [Unicodeフォントのガイド](http://www.unifont.org/fontguide/)

## 追加資料 <a id="more-reading"></a>

- [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets](http://www.joelonsoftware.com/articles/Unicode.html) - Joel Spolskyによる記事。
- [What Every Programmer Absolutely, Positively Needs To Know About Encodings And Character Sets To Work With Text](http://kunststube.net/encoding/)
- [Unicode Consortiumの推薦文献一覧](http://www.unicode.org/resources/readinglist.html)
- [Space Yourself](https://www.smashingmagazine.com/2015/10/space-yourself/) - Smashing Magazineのスペーシングガイド。
- [JavaScript has a Unicode Problem](https://mathiasbynens.be/notes/javascript-unicode)
- [Creative usernames and Spotify account hijacking](https://labs.spotify.com/2013/06/18/creative-usernames/)

## Unicodeをさらに深く調べる <a id="exploring-deeper-into-unicode-yourself"></a>

- [Shapecatcher](http://shapecatcher.com/) - 探している文字の形を描いて検索するツール。
- [紛らわしいUnicode文字](http://unicode.org/cldr/utility/confusables.jsp?r=None)
- [Unicode文字データベース](http://www.unicode.org/ucd/)
- [Codepoints.netのデータベースダンプ](https://dumps.codepoints.net/)
- [Unicodeブロック一覧](http://www.unicode.org/Public/UCD/latest/ucd/Blocks.txt)
- [Unicode文字表](http://www.unicode.org/charts/index.html)
- [Unicode大小文字表](http://www.unicode.org/charts/case/)
- [Unicode正規化表](http://www.unicode.org/charts/normalization/)
- [Unicodeのよくある質問](http://www.unicode.org/faq/)

## 概要図 <a id="overview-map"></a>

### 基本多言語面の図 <a id="a-map-of-the-basic-multilingual-plane"></a>

原文のBMP図は、U+0000〜U+FFFFを16×16の格子に分けています。各枠は先頭2桁の16進数00〜FFで示され、256コードポイントを含みます。たとえば00の枠はU+0000〜U+00FFです。色は、ラテン、非ラテンのヨーロッパ、アフリカ、中東・南西アジア、南・中央アジア、東南アジア、東アジア、CJK、インドネシア・オセアニア、アメリカの文字体系に加え、表記体系・記号・私用・UTF-16サロゲート・未割当を区別しています。サロゲートはU+D800〜U+DFFF、私用領域はU+E000〜U+F8FFです。続くブロック表で名前付きの範囲を確認できます。

[原文の図](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Roadmap_to_Unicode_BMP.svg/750px-Roadmap_to_Unicode_BMP.svg.png)。原文のサムネイルURLは現在エラーになりますが、作者が2016年7月26日に作成した[Unicode 9.0の保存版の図](https://upload.wikimedia.org/wikipedia/commons/archive/8/8e/20170623193453%21Roadmap_to_Unicode_BMP.svg)で当時の内容を確認できます。

中国語・日本語・韓国語では多くの漢字を共有します。漢字統合は共有する文字を特定し、CJK Unified Ideographsとして符号化する処理です。同じ文字でも、言語やフォントによって字形は異なる場合があります。

### Unicodeブロック <a id="unicode-blocks"></a>

Unicodeは文字の範囲を名前付きのブロックに分けています。表には、原文に収録された17面にわたるブロックと範囲を保持しています。現在の一覧でも、Unicode 9.0の完全な一覧でもありません。原文の「# Codepoints」欄には割当数と思われる値と誤った値が混在し、Hangul Syllablesの2、補助私用領域の4などは文字数として使えません。追跡用に「原文記載値」として残しています。「範囲内の位置数」は、保持した始点・終点から両端を含めて計算した値で、割当済み文字数ではありません。ブロック名は識別用の原表記を保持します。版を固定した定義は[Unicode 9.0のBlocks.txt](https://www.unicode.org/Public/9.0.0/ucd/Blocks.txt)で確認できます。

| ブロック名 | 始点 | 終点 | 範囲内の位置数 | 原文記載値 |
| --- | --- | --- | --- | --- |
| [Basic Latin](https://wikipedia.org/wiki/Basic_Latin) | U+0000 | U+007F | 128 | (128) |
| [Latin-1 Supplement](https://wikipedia.org/wiki/Latin-1_Supplement) | U+0080 | U+00FF | 128 | (128) |
| [Latin Extended-A](https://wikipedia.org/wiki/Latin_Extended-A) | U+0100 | U+017F | 128 | (128) |
| [Latin Extended-B](https://wikipedia.org/wiki/Latin_Extended-B) | U+0180 | U+024F | 208 | (208) |
| [IPA Extensions](https://wikipedia.org/wiki/IPA_Extensions) | U+0250 | U+02AF | 96 | (96) |
| [Spacing Modifier Letters](https://wikipedia.org/wiki/Spacing_Modifier_Letters) | U+02B0 | U+02FF | 80 | (80) |
| [Combining Diacritical Marks](https://wikipedia.org/wiki/Combining_Diacritical_Marks) | U+0300 | U+036F | 112 | (112) |
| [Greek and Coptic](https://wikipedia.org/wiki/Greek_and_Coptic) | U+0370 | U+03FF | 144 | (135) |
| [Cyrillic](https://wikipedia.org/wiki/Cyrillic) | U+0400 | U+04FF | 256 | (256) |
| [Cyrillic Supplement](https://wikipedia.org/wiki/Cyrillic_Supplement) | U+0500 | U+052F | 48 | (48) |
| [Armenian](https://wikipedia.org/wiki/Armenian) | U+0530 | U+058F | 96 | (89) |
| [Hebrew](https://wikipedia.org/wiki/Hebrew) | U+0590 | U+05FF | 112 | (87) |
| [Arabic](https://wikipedia.org/wiki/Arabic) | U+0600 | U+06FF | 256 | (255) |
| [Syriac](https://wikipedia.org/wiki/Syriac) | U+0700 | U+074F | 80 | (77) |
| [Arabic Supplement](https://wikipedia.org/wiki/Arabic_Supplement) | U+0750 | U+077F | 48 | (48) |
| [Thaana](https://wikipedia.org/wiki/Thaana) | U+0780 | U+07BF | 64 | (50) |
| [NKo](https://wikipedia.org/wiki/NKo) | U+07C0 | U+07FF | 64 | (59) |
| [Samaritan](https://wikipedia.org/wiki/Samaritan) | U+0800 | U+083F | 64 | (61) |
| [Mandaic](https://wikipedia.org/wiki/Mandaic) | U+0840 | U+085F | 32 | (29) |
| [Arabic Extended-A](https://wikipedia.org/wiki/Arabic_Extended-A) | U+08A0 | U+08FF | 96 | (50) |
| [Devanagari](https://wikipedia.org/wiki/Devanagari) | U+0900 | U+097F | 128 | (128) |
| [Bengali](https://wikipedia.org/wiki/Bengali) | U+0980 | U+09FF | 128 | (93) |
| [Gurmukhi](https://wikipedia.org/wiki/Gurmukhi) | U+0A00 | U+0A7F | 128 | (79) |
| [Gujarati](https://wikipedia.org/wiki/Gujarati) | U+0A80 | U+0AFF | 128 | (85) |
| [Oriya](https://wikipedia.org/wiki/Oriya) | U+0B00 | U+0B7F | 128 | (90) |
| [Tamil](https://wikipedia.org/wiki/Tamil) | U+0B80 | U+0BFF | 128 | (72) |
| [Telugu](https://wikipedia.org/wiki/Telugu) | U+0C00 | U+0C7F | 128 | (96) |
| [Kannada](https://wikipedia.org/wiki/Kannada) | U+0C80 | U+0CFF | 128 | (87) |
| [Malayalam](https://wikipedia.org/wiki/Malayalam) | U+0D00 | U+0D7F | 128 | (100) |
| [Sinhala](https://wikipedia.org/wiki/Sinhala) | U+0D80 | U+0DFF | 128 | (90) |
| [Thai](https://wikipedia.org/wiki/Thai) | U+0E00 | U+0E7F | 128 | (87) |
| [Lao](https://wikipedia.org/wiki/Lao) | U+0E80 | U+0EFF | 128 | (67) |
| [Tibetan](https://wikipedia.org/wiki/Tibetan) | U+0F00 | U+0FFF | 256 | (211) |
| [Myanmar](https://wikipedia.org/wiki/Myanmar) | U+1000 | U+109F | 160 | (160) |
| [Georgian](https://wikipedia.org/wiki/Georgian) | U+10A0 | U+10FF | 96 | (88) |
| [Hangul Jamo](https://wikipedia.org/wiki/Hangul_Jamo) | U+1100 | U+11FF | 256 | (256) |
| [Ethiopic](https://wikipedia.org/wiki/Ethiopic) | U+1200 | U+137F | 384 | (358) |
| [Ethiopic Supplement](https://wikipedia.org/wiki/Ethiopic_Supplement) | U+1380 | U+139F | 32 | (26) |
| [Cherokee](https://wikipedia.org/wiki/Cherokee) | U+13A0 | U+13FF | 96 | (92) |
| [Unified Canadian Aboriginal Syllabics](https://wikipedia.org/wiki/Unified_Canadian_Aboriginal_Syllabics) | U+1400 | U+167F | 640 | (640) |
| [Ogham](https://wikipedia.org/wiki/Ogham) | U+1680 | U+169F | 32 | (29) |
| [Runic](https://wikipedia.org/wiki/Runic) | U+16A0 | U+16FF | 96 | (89) |
| [Tagalog](https://wikipedia.org/wiki/Tagalog) | U+1700 | U+171F | 32 | (20) |
| [Hanunoo](https://wikipedia.org/wiki/Hanunoo) | U+1720 | U+173F | 32 | (23) |
| [Buhid](https://wikipedia.org/wiki/Buhid) | U+1740 | U+175F | 32 | (20) |
| [Tagbanwa](https://wikipedia.org/wiki/Tagbanwa) | U+1760 | U+177F | 32 | (18) |
| [Khmer](https://wikipedia.org/wiki/Khmer) | U+1780 | U+17FF | 128 | (114) |
| [Mongolian](https://wikipedia.org/wiki/Mongolian) | U+1800 | U+18AF | 176 | (156) |
| [Unified Canadian Aboriginal Syllabics Extended](https://wikipedia.org/wiki/Unified_Canadian_Aboriginal_Syllabics_Extended) | U+18B0 | U+18FF | 80 | (70) |
| [Limbu](https://wikipedia.org/wiki/Limbu) | U+1900 | U+194F | 80 | (68) |
| [Tai Le](https://wikipedia.org/wiki/Tai_Le) | U+1950 | U+197F | 48 | (35) |
| [New Tai Lue](https://wikipedia.org/wiki/New_Tai_Lue) | U+1980 | U+19DF | 96 | (83) |
| [Khmer Symbols](https://wikipedia.org/wiki/Khmer_Symbols) | U+19E0 | U+19FF | 32 | (32) |
| [Buginese](https://wikipedia.org/wiki/Buginese) | U+1A00 | U+1A1F | 32 | (30) |
| [Tai Tham](https://wikipedia.org/wiki/Tai_Tham) | U+1A20 | U+1AAF | 144 | (127) |
| [Combining Diacritical Marks Extended](https://wikipedia.org/wiki/Combining_Diacritical_Marks_Extended) | U+1AB0 | U+1AFF | 80 | (15) |
| [Balinese](https://wikipedia.org/wiki/Balinese) | U+1B00 | U+1B7F | 128 | (121) |
| [Sundanese](https://wikipedia.org/wiki/Sundanese) | U+1B80 | U+1BBF | 64 | (64) |
| [Batak](https://wikipedia.org/wiki/Batak) | U+1BC0 | U+1BFF | 64 | (56) |
| [Lepcha](https://wikipedia.org/wiki/Lepcha) | U+1C00 | U+1C4F | 80 | (74) |
| [Ol Chiki](https://wikipedia.org/wiki/Ol_Chiki) | U+1C50 | U+1C7F | 48 | (48) |
| [Sundanese Supplement](https://wikipedia.org/wiki/Sundanese_Supplement) | U+1CC0 | U+1CCF | 16 | (8) |
| [Vedic Extensions](https://wikipedia.org/wiki/Vedic_Extensions) | U+1CD0 | U+1CFF | 48 | (41) |
| [Phonetic Extensions](https://wikipedia.org/wiki/Phonetic_Extensions) | U+1D00 | U+1D7F | 128 | (128) |
| [Phonetic Extensions Supplement](https://wikipedia.org/wiki/Phonetic_Extensions_Supplement) | U+1D80 | U+1DBF | 64 | (64) |
| [Combining Diacritical Marks Supplement](https://wikipedia.org/wiki/Combining_Diacritical_Marks_Supplement) | U+1DC0 | U+1DFF | 64 | (58) |
| [Latin Extended Additional](https://wikipedia.org/wiki/Latin_Extended_Additional) | U+1E00 | U+1EFF | 256 | (256) |
| [Greek Extended](https://wikipedia.org/wiki/Greek_Extended) | U+1F00 | U+1FFF | 256 | (233) |
| [General Punctuation](https://wikipedia.org/wiki/General_Punctuation) | U+2000 | U+206F | 112 | (111) |
| [Superscripts and Subscripts](https://wikipedia.org/wiki/Superscripts_and_Subscripts) | U+2070 | U+209F | 48 | (42) |
| [Currency Symbols](https://wikipedia.org/wiki/Currency_Symbols) | U+20A0 | U+20CF | 48 | (31) |
| [Combining Diacritical Marks for Symbols](https://wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols) | U+20D0 | U+20FF | 48 | (33) |
| [Letterlike Symbols](https://wikipedia.org/wiki/Letterlike_Symbols) | U+2100 | U+214F | 80 | (80) |
| [Number Forms](https://wikipedia.org/wiki/Number_Forms) | U+2150 | U+218F | 64 | (60) |
| [Arrows](https://wikipedia.org/wiki/Arrows) | U+2190 | U+21FF | 112 | (112) |
| [Mathematical Operators](https://wikipedia.org/wiki/Mathematical_Operators) | U+2200 | U+22FF | 256 | (256) |
| [Miscellaneous Technical](https://wikipedia.org/wiki/Miscellaneous_Technical) | U+2300 | U+23FF | 256 | (251) |
| [Control Pictures](https://wikipedia.org/wiki/Control_Pictures) | U+2400 | U+243F | 64 | (39) |
| [Optical Character Recognition](https://wikipedia.org/wiki/Optical_Character_Recognition) | U+2440 | U+245F | 32 | (11) |
| [Enclosed Alphanumerics](https://wikipedia.org/wiki/Enclosed_Alphanumerics) | U+2460 | U+24FF | 160 | (160) |
| [Box Drawing](https://wikipedia.org/wiki/Box_Drawing) | U+2500 | U+257F | 128 | (128) |
| [Block Elements](https://wikipedia.org/wiki/Block_Elements) | U+2580 | U+259F | 32 | (32) |
| [Geometric Shapes](https://wikipedia.org/wiki/Geometric_Shapes) | U+25A0 | U+25FF | 96 | (96) |
| [Miscellaneous Symbols](https://wikipedia.org/wiki/Miscellaneous_Symbols) | U+2600 | U+26FF | 256 | (256) |
| [Dingbats](https://wikipedia.org/wiki/Dingbats) | U+2700 | U+27BF | 192 | (192) |
| [Miscellaneous Mathematical Symbols-A](https://wikipedia.org/wiki/Miscellaneous_Mathematical_Symbols-A) | U+27C0 | U+27EF | 48 | (48) |
| [Supplemental Arrows-A](https://wikipedia.org/wiki/Supplemental_Arrows-A) | U+27F0 | U+27FF | 16 | (16) |
| [Braille Patterns](https://wikipedia.org/wiki/Braille_Patterns) | U+2800 | U+28FF | 256 | (256) |
| [Supplemental Arrows-B](https://wikipedia.org/wiki/Supplemental_Arrows-B) | U+2900 | U+297F | 128 | (128) |
| [Miscellaneous Mathematical Symbols-B](https://wikipedia.org/wiki/Miscellaneous_Mathematical_Symbols-B) | U+2980 | U+29FF | 128 | (128) |
| [Supplemental Mathematical Operators](https://wikipedia.org/wiki/Supplemental_Mathematical_Operators) | U+2A00 | U+2AFF | 256 | (256) |
| [Miscellaneous Symbols and Arrows](https://wikipedia.org/wiki/Miscellaneous_Symbols_and_Arrows) | U+2B00 | U+2BFF | 256 | (206) |
| [Glagolitic](https://wikipedia.org/wiki/Glagolitic) | U+2C00 | U+2C5F | 96 | (94) |
| [Latin Extended-C](https://wikipedia.org/wiki/Latin_Extended-C) | U+2C60 | U+2C7F | 32 | (32) |
| [Coptic](https://wikipedia.org/wiki/Coptic) | U+2C80 | U+2CFF | 128 | (123) |
| [Georgian Supplement](https://wikipedia.org/wiki/Georgian_Supplement) | U+2D00 | U+2D2F | 48 | (40) |
| [Tifinagh](https://wikipedia.org/wiki/Tifinagh) | U+2D30 | U+2D7F | 80 | (59) |
| [Ethiopic Extended](https://wikipedia.org/wiki/Ethiopic_Extended) | U+2D80 | U+2DDF | 96 | (79) |
| [Cyrillic Extended-A](https://wikipedia.org/wiki/Cyrillic_Extended-A) | U+2DE0 | U+2DFF | 32 | (32) |
| [Supplemental Punctuation](https://wikipedia.org/wiki/Supplemental_Punctuation) | U+2E00 | U+2E7F | 128 | (67) |
| [CJK Radicals Supplement](https://wikipedia.org/wiki/CJK_Radicals_Supplement) | U+2E80 | U+2EFF | 128 | (115) |
| [Kangxi Radicals](https://wikipedia.org/wiki/Kangxi_Radicals) | U+2F00 | U+2FDF | 224 | (214) |
| [Ideographic Description Characters](https://wikipedia.org/wiki/Ideographic_Description_Characters) | U+2FF0 | U+2FFF | 16 | (12) |
| [CJK Symbols and Punctuation](https://wikipedia.org/wiki/CJK_Symbols_and_Punctuation) | U+3000 | U+303F | 64 | (64) |
| [Hiragana](https://wikipedia.org/wiki/Hiragana) | U+3040 | U+309F | 96 | (93) |
| [Katakana](https://wikipedia.org/wiki/Katakana) | U+30A0 | U+30FF | 96 | (96) |
| [Bopomofo](https://wikipedia.org/wiki/Bopomofo) | U+3100 | U+312F | 48 | (41) |
| [Hangul Compatibility Jamo](https://wikipedia.org/wiki/Hangul_Compatibility_Jamo) | U+3130 | U+318F | 96 | (94) |
| [Kanbun](https://wikipedia.org/wiki/Kanbun) | U+3190 | U+319F | 16 | (16) |
| [Bopomofo Extended](https://wikipedia.org/wiki/Bopomofo_Extended) | U+31A0 | U+31BF | 32 | (27) |
| [CJK Strokes](https://wikipedia.org/wiki/CJK_Strokes) | U+31C0 | U+31EF | 48 | (36) |
| [Katakana Phonetic Extensions](https://wikipedia.org/wiki/Katakana_Phonetic_Extensions) | U+31F0 | U+31FF | 16 | (16) |
| [Enclosed CJK Letters and Months](https://wikipedia.org/wiki/Enclosed_CJK_Letters_and_Months) | U+3200 | U+32FF | 256 | (254) |
| [CJK Compatibility](https://wikipedia.org/wiki/CJK_Compatibility) | U+3300 | U+33FF | 256 | (256) |
| [CJK Unified Ideographs Extension A](https://wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_A) | U+3400 | U+4DBF | 6592 | (6191) |
| [Yijing Hexagram Symbols](https://wikipedia.org/wiki/Yijing_Hexagram_Symbols) | U+4DC0 | U+4DFF | 64 | (64) |
| [CJK Unified Ideographs](https://wikipedia.org/wiki/CJK_Unified_Ideographs) | U+4E00 | U+9FFF | 20992 | (20941) |
| [Yi Syllables](https://wikipedia.org/wiki/Yi_Syllables) | U+A000 | U+A48F | 1168 | (1165) |
| [Yi Radicals](https://wikipedia.org/wiki/Yi_Radicals) | U+A490 | U+A4CF | 64 | (55) |
| [Lisu](https://wikipedia.org/wiki/Lisu) | U+A4D0 | U+A4FF | 48 | (48) |
| [Vai](https://wikipedia.org/wiki/Vai) | U+A500 | U+A63F | 320 | (300) |
| [Cyrillic Extended-B](https://wikipedia.org/wiki/Cyrillic_Extended-B) | U+A640 | U+A69F | 96 | (96) |
| [Bamum](https://wikipedia.org/wiki/Bamum) | U+A6A0 | U+A6FF | 96 | (88) |
| [Modifier Tone Letters](https://wikipedia.org/wiki/Modifier_Tone_Letters) | U+A700 | U+A71F | 32 | (32) |
| [Latin Extended-D](https://wikipedia.org/wiki/Latin_Extended-D) | U+A720 | U+A7FF | 224 | (159) |
| [Syloti Nagri](https://wikipedia.org/wiki/Syloti_Nagri) | U+A800 | U+A82F | 48 | (44) |
| [Common Indic Number Forms](https://wikipedia.org/wiki/Common_Indic_Number_Forms) | U+A830 | U+A83F | 16 | (10) |
| [Phags-pa](https://wikipedia.org/wiki/Phags-pa) | U+A840 | U+A87F | 64 | (56) |
| [Saurashtra](https://wikipedia.org/wiki/Saurashtra) | U+A880 | U+A8DF | 96 | (81) |
| [Devanagari Extended](https://wikipedia.org/wiki/Devanagari_Extended) | U+A8E0 | U+A8FF | 32 | (30) |
| [Kayah Li](https://wikipedia.org/wiki/Kayah_Li) | U+A900 | U+A92F | 48 | (48) |
| [Rejang](https://wikipedia.org/wiki/Rejang) | U+A930 | U+A95F | 48 | (37) |
| [Hangul Jamo Extended-A](https://wikipedia.org/wiki/Hangul_Jamo_Extended-A) | U+A960 | U+A97F | 32 | (29) |
| [Javanese](https://wikipedia.org/wiki/Javanese) | U+A980 | U+A9DF | 96 | (91) |
| [Myanmar Extended-B](https://wikipedia.org/wiki/Myanmar_Extended-B) | U+A9E0 | U+A9FF | 32 | (31) |
| [Cham](https://wikipedia.org/wiki/Cham) | U+AA00 | U+AA5F | 96 | (83) |
| [Myanmar Extended-A](https://wikipedia.org/wiki/Myanmar_Extended-A) | U+AA60 | U+AA7F | 32 | (32) |
| [Tai Viet](https://wikipedia.org/wiki/Tai_Viet) | U+AA80 | U+AADF | 96 | (72) |
| [Meetei Mayek Extensions](https://wikipedia.org/wiki/Meetei_Mayek_Extensions) | U+AAE0 | U+AAFF | 32 | (23) |
| [Ethiopic Extended-A](https://wikipedia.org/wiki/Ethiopic_Extended-A) | U+AB00 | U+AB2F | 48 | (32) |
| [Latin Extended-E](https://wikipedia.org/wiki/Latin_Extended-E) | U+AB30 | U+AB6F | 64 | (54) |
| [Cherokee Supplement](https://wikipedia.org/wiki/Cherokee_Supplement) | U+AB70 | U+ABBF | 80 | (80) |
| [Meetei Mayek](https://wikipedia.org/wiki/Meetei_Mayek) | U+ABC0 | U+ABFF | 64 | (56) |
| [Hangul Syllables](https://wikipedia.org/wiki/Hangul_Syllables) | U+AC00 | U+D7AF | 11184 | (2) |
| [Hangul Jamo Extended-B](https://wikipedia.org/wiki/Hangul_Jamo_Extended-B) | U+D7B0 | U+D7FF | 80 | (72) |
| [High Surrogates](https://wikipedia.org/wiki/High_Surrogates) | U+D800 | U+DB7F | 896 | (2) |
| [High Private Use Surrogates](https://wikipedia.org/wiki/High_Private_Use_Surrogates) | U+DB80 | U+DBFF | 128 | (2) |
| [Low Surrogates](https://wikipedia.org/wiki/Low_Surrogates) | U+DC00 | U+DFFF | 1024 | (2) |
| [Private Use Area](https://wikipedia.org/wiki/Private_Use_Area) | U+E000 | U+F8FF | 6400 | (2) |
| [CJK Compatibility Ideographs](https://wikipedia.org/wiki/CJK_Compatibility_Ideographs) | U+F900 | U+FAFF | 512 | (472) |
| [Alphabetic Presentation Forms](https://wikipedia.org/wiki/Alphabetic_Presentation_Forms) | U+FB00 | U+FB4F | 80 | (58) |
| [Arabic Presentation Forms-A](https://wikipedia.org/wiki/Arabic_Presentation_Forms-A) | U+FB50 | U+FDFF | 688 | (643) |
| [Variation Selectors](https://wikipedia.org/wiki/Variation_Selectors) | U+FE00 | U+FE0F | 16 | (16) |
| [Vertical Forms](https://wikipedia.org/wiki/Vertical_Forms) | U+FE10 | U+FE1F | 16 | (10) |
| [Combining Half Marks](https://wikipedia.org/wiki/Combining_Half_Marks) | U+FE20 | U+FE2F | 16 | (16) |
| [CJK Compatibility Forms](https://wikipedia.org/wiki/CJK_Compatibility_Forms) | U+FE30 | U+FE4F | 32 | (32) |
| [Small Form Variants](https://wikipedia.org/wiki/Small_Form_Variants) | U+FE50 | U+FE6F | 32 | (26) |
| [Arabic Presentation Forms-B](https://wikipedia.org/wiki/Arabic_Presentation_Forms-B) | U+FE70 | U+FEFF | 144 | (141) |
| [Halfwidth and Fullwidth Forms](https://wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms) | U+FF00 | U+FFEF | 240 | (225) |
| [Specials](https://wikipedia.org/wiki/Specials) | U+FFF0 | U+FFFF | 16 | (7) |
| [Linear B Syllabary](https://wikipedia.org/wiki/Linear_B_Syllabary) | U+10000 | U+1007F | 128 | (88) |
| [Linear B Ideograms](https://wikipedia.org/wiki/Linear_B_Ideograms) | U+10080 | U+100FF | 128 | (123) |
| [Aegean Numbers](https://wikipedia.org/wiki/Aegean_Numbers) | U+10100 | U+1013F | 64 | (57) |
| [Ancient Greek Numbers](https://wikipedia.org/wiki/Ancient_Greek_Numbers) | U+10140 | U+1018F | 80 | (77) |
| [Ancient Symbols](https://wikipedia.org/wiki/Ancient_Symbols) | U+10190 | U+101CF | 64 | (13) |
| [Phaistos Disc](https://wikipedia.org/wiki/Phaistos_Disc) | U+101D0 | U+101FF | 48 | (46) |
| [Lycian](https://wikipedia.org/wiki/Lycian) | U+10280 | U+1029F | 32 | (29) |
| [Carian](https://wikipedia.org/wiki/Carian) | U+102A0 | U+102DF | 64 | (49) |
| [Coptic Epact Numbers](https://wikipedia.org/wiki/Coptic_Epact_Numbers) | U+102E0 | U+102FF | 32 | (28) |
| [Old Italic](https://wikipedia.org/wiki/Old_Italic) | U+10300 | U+1032F | 48 | (36) |
| [Gothic](https://wikipedia.org/wiki/Gothic) | U+10330 | U+1034F | 32 | (27) |
| [Old Permic](https://wikipedia.org/wiki/Old_Permic) | U+10350 | U+1037F | 48 | (43) |
| [Ugaritic](https://wikipedia.org/wiki/Ugaritic) | U+10380 | U+1039F | 32 | (31) |
| [Old Persian](https://wikipedia.org/wiki/Old_Persian) | U+103A0 | U+103DF | 64 | (50) |
| [Deseret](https://wikipedia.org/wiki/Deseret) | U+10400 | U+1044F | 80 | (80) |
| [Shavian](https://wikipedia.org/wiki/Shavian) | U+10450 | U+1047F | 48 | (48) |
| [Osmanya](https://wikipedia.org/wiki/Osmanya) | U+10480 | U+104AF | 48 | (40) |
| [Elbasan](https://wikipedia.org/wiki/Elbasan) | U+10500 | U+1052F | 48 | (40) |
| [Caucasian Albanian](https://wikipedia.org/wiki/Caucasian_Albanian) | U+10530 | U+1056F | 64 | (53) |
| [Linear A](https://wikipedia.org/wiki/Linear_A) | U+10600 | U+1077F | 384 | (341) |
| [Cypriot Syllabary](https://wikipedia.org/wiki/Cypriot_Syllabary) | U+10800 | U+1083F | 64 | (55) |
| [Imperial Aramaic](https://wikipedia.org/wiki/Imperial_Aramaic) | U+10840 | U+1085F | 32 | (31) |
| [Palmyrene](https://wikipedia.org/wiki/Palmyrene) | U+10860 | U+1087F | 32 | (32) |
| [Nabataean](https://wikipedia.org/wiki/Nabataean) | U+10880 | U+108AF | 48 | (40) |
| [Hatran](https://wikipedia.org/wiki/Hatran) | U+108E0 | U+108FF | 32 | (26) |
| [Phoenician](https://wikipedia.org/wiki/Phoenician) | U+10900 | U+1091F | 32 | (29) |
| [Lydian](https://wikipedia.org/wiki/Lydian) | U+10920 | U+1093F | 32 | (27) |
| [Meroitic Hieroglyphs](https://wikipedia.org/wiki/Meroitic_Hieroglyphs) | U+10980 | U+1099F | 32 | (32) |
| [Meroitic Cursive](https://wikipedia.org/wiki/Meroitic_Cursive) | U+109A0 | U+109FF | 96 | (90) |
| [Kharoshthi](https://wikipedia.org/wiki/Kharoshthi) | U+10A00 | U+10A5F | 96 | (65) |
| [Old South Arabian](https://wikipedia.org/wiki/Old_South_Arabian) | U+10A60 | U+10A7F | 32 | (32) |
| [Old North Arabian](https://wikipedia.org/wiki/Old_North_Arabian) | U+10A80 | U+10A9F | 32 | (32) |
| [Manichaean](https://wikipedia.org/wiki/Manichaean) | U+10AC0 | U+10AFF | 64 | (51) |
| [Avestan](https://wikipedia.org/wiki/Avestan) | U+10B00 | U+10B3F | 64 | (61) |
| [Inscriptional Parthian](https://wikipedia.org/wiki/Inscriptional_Parthian) | U+10B40 | U+10B5F | 32 | (30) |
| [Inscriptional Pahlavi](https://wikipedia.org/wiki/Inscriptional_Pahlavi) | U+10B60 | U+10B7F | 32 | (27) |
| [Psalter Pahlavi](https://wikipedia.org/wiki/Psalter_Pahlavi) | U+10B80 | U+10BAF | 48 | (29) |
| [Old Turkic](https://wikipedia.org/wiki/Old_Turkic) | U+10C00 | U+10C4F | 80 | (73) |
| [Old Hungarian](https://wikipedia.org/wiki/Old_Hungarian) | U+10C80 | U+10CFF | 128 | (108) |
| [Rumi Numeral Symbols](https://wikipedia.org/wiki/Rumi_Numeral_Symbols) | U+10E60 | U+10E7F | 32 | (31) |
| [Brahmi](https://wikipedia.org/wiki/Brahmi) | U+11000 | U+1107F | 128 | (109) |
| [Kaithi](https://wikipedia.org/wiki/Kaithi) | U+11080 | U+110CF | 80 | (66) |
| [Sora Sompeng](https://wikipedia.org/wiki/Sora_Sompeng) | U+110D0 | U+110FF | 48 | (35) |
| [Chakma](https://wikipedia.org/wiki/Chakma) | U+11100 | U+1114F | 80 | (67) |
| [Mahajani](https://wikipedia.org/wiki/Mahajani) | U+11150 | U+1117F | 48 | (39) |
| [Sharada](https://wikipedia.org/wiki/Sharada) | U+11180 | U+111DF | 96 | (94) |
| [Sinhala Archaic Numbers](https://wikipedia.org/wiki/Sinhala_Archaic_Numbers) | U+111E0 | U+111FF | 32 | (20) |
| [Khojki](https://wikipedia.org/wiki/Khojki) | U+11200 | U+1124F | 80 | (61) |
| [Multani](https://wikipedia.org/wiki/Multani) | U+11280 | U+112AF | 48 | (38) |
| [Khudawadi](https://wikipedia.org/wiki/Khudawadi) | U+112B0 | U+112FF | 80 | (69) |
| [Grantha](https://wikipedia.org/wiki/Grantha) | U+11300 | U+1137F | 128 | (85) |
| [Tirhuta](https://wikipedia.org/wiki/Tirhuta) | U+11480 | U+114DF | 96 | (82) |
| [Siddham](https://wikipedia.org/wiki/Siddham) | U+11580 | U+115FF | 128 | (92) |
| [Modi](https://wikipedia.org/wiki/Modi) | U+11600 | U+1165F | 96 | (79) |
| [Takri](https://wikipedia.org/wiki/Takri) | U+11680 | U+116CF | 80 | (66) |
| [Ahom](https://wikipedia.org/wiki/Ahom) | U+11700 | U+1173F | 64 | (57) |
| [Warang Citi](https://wikipedia.org/wiki/Warang_Citi) | U+118A0 | U+118FF | 96 | (84) |
| [Pau Cin Hau](https://wikipedia.org/wiki/Pau_Cin_Hau) | U+11AC0 | U+11AFF | 64 | (57) |
| [Cuneiform](https://wikipedia.org/wiki/Cuneiform) | U+12000 | U+123FF | 1024 | (922) |
| [Cuneiform Numbers and Punctuation](https://wikipedia.org/wiki/Cuneiform_Numbers_and_Punctuation) | U+12400 | U+1247F | 128 | (116) |
| [Early Dynastic Cuneiform](https://wikipedia.org/wiki/Early_Dynastic_Cuneiform) | U+12480 | U+1254F | 208 | (196) |
| [Egyptian Hieroglyphs](https://wikipedia.org/wiki/Egyptian_Hieroglyphs) | U+13000 | U+1342F | 1072 | (1071) |
| [Anatolian Hieroglyphs](https://wikipedia.org/wiki/Anatolian_Hieroglyphs) | U+14400 | U+1467F | 640 | (583) |
| [Bamum Supplement](https://wikipedia.org/wiki/Bamum_Supplement) | U+16800 | U+16A3F | 576 | (569) |
| [Mro](https://wikipedia.org/wiki/Mro) | U+16A40 | U+16A6F | 48 | (43) |
| [Bassa Vah](https://wikipedia.org/wiki/Bassa_Vah) | U+16AD0 | U+16AFF | 48 | (36) |
| [Pahawh Hmong](https://wikipedia.org/wiki/Pahawh_Hmong) | U+16B00 | U+16B8F | 144 | (127) |
| [Miao](https://wikipedia.org/wiki/Miao) | U+16F00 | U+16F9F | 160 | (133) |
| [Kana Supplement](https://wikipedia.org/wiki/Kana_Supplement) | U+1B000 | U+1B0FF | 256 | (2) |
| [Duployan](https://wikipedia.org/wiki/Duployan) | U+1BC00 | U+1BC9F | 160 | (143) |
| [Shorthand Format Controls](https://wikipedia.org/wiki/Shorthand_Format_Controls) | U+1BCA0 | U+1BCAF | 16 | (4) |
| [Byzantine Musical Symbols](https://wikipedia.org/wiki/Byzantine_Musical_Symbols) | U+1D000 | U+1D0FF | 256 | (246) |
| [Musical Symbols](https://wikipedia.org/wiki/Musical_Symbols) | U+1D100 | U+1D1FF | 256 | (231) |
| [Ancient Greek Musical Notation](https://wikipedia.org/wiki/Ancient_Greek_Musical_Notation) | U+1D200 | U+1D24F | 80 | (70) |
| [Tai Xuan Jing Symbols](https://wikipedia.org/wiki/Tai_Xuan_Jing_Symbols) | U+1D300 | U+1D35F | 96 | (87) |
| [Counting Rod Numerals](https://wikipedia.org/wiki/Counting_Rod_Numerals) | U+1D360 | U+1D37F | 32 | (18) |
| [Mathematical Alphanumeric Symbols](https://wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) | U+1D400 | U+1D7FF | 1024 | (996) |
| [Sutton SignWriting](https://wikipedia.org/wiki/Sutton_SignWriting) | U+1D800 | U+1DAAF | 688 | (672) |
| [Mende Kikakui](https://wikipedia.org/wiki/Mende_Kikakui) | U+1E800 | U+1E8DF | 224 | (213) |
| [Arabic Mathematical Alphabetic Symbols](https://wikipedia.org/wiki/Arabic_Mathematical_Alphabetic_Symbols) | U+1EE00 | U+1EEFF | 256 | (143) |
| [Mahjong Tiles](https://wikipedia.org/wiki/Mahjong_Tiles) | U+1F000 | U+1F02F | 48 | (44) |
| [Domino Tiles](https://wikipedia.org/wiki/Domino_Tiles) | U+1F030 | U+1F09F | 112 | (100) |
| [Playing Cards](https://wikipedia.org/wiki/Playing_Cards) | U+1F0A0 | U+1F0FF | 96 | (82) |
| [Enclosed Alphanumeric Supplement](https://wikipedia.org/wiki/Enclosed_Alphanumeric_Supplement) | U+1F100 | U+1F1FF | 256 | (173) |
| [Enclosed Ideographic Supplement](https://wikipedia.org/wiki/Enclosed_Ideographic_Supplement) | U+1F200 | U+1F2FF | 256 | (57) |
| [Miscellaneous Symbols and Pictographs](https://wikipedia.org/wiki/Miscellaneous_Symbols_and_Pictographs) | U+1F300 | U+1F5FF | 768 | (766) |
| [Emoticons](https://wikipedia.org/wiki/Emoticons) | U+1F600 | U+1F64F | 80 | (80) |
| [Ornamental Dingbats](https://wikipedia.org/wiki/Ornamental_Dingbats) | U+1F650 | U+1F67F | 48 | (48) |
| [Transport and Map Symbols](https://wikipedia.org/wiki/Transport_and_Map_Symbols) | U+1F680 | U+1F6FF | 128 | (98) |
| [Alchemical Symbols](https://wikipedia.org/wiki/Alchemical_Symbols) | U+1F700 | U+1F77F | 128 | (116) |
| [Geometric Shapes Extended](https://wikipedia.org/wiki/Geometric_Shapes_Extended) | U+1F780 | U+1F7FF | 128 | (85) |
| [Supplemental Arrows-C](https://wikipedia.org/wiki/Supplemental_Arrows-C) | U+1F800 | U+1F8FF | 256 | (148) |
| [Supplemental Symbols and Pictographs](https://wikipedia.org/wiki/Supplemental_Symbols_and_Pictographs) | U+1F900 | U+1F9FF | 256 | (15) |
| [CJK Unified Ideographs Extension B](https://wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_B) | U+20000 | U+2A6DF | 42720 | (42676) |
| [CJK Unified Ideographs Extension C](https://wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_C) | U+2A700 | U+2B73F | 4160 | (60) |
| [CJK Unified Ideographs Extension D](https://wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_D) | U+2B740 | U+2B81F | 224 | (27) |
| [CJK Unified Ideographs Extension E](https://wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_E) | U+2B820 | U+2CEAF | 5776 | (2) |
| [CJK Compatibility Ideographs Supplement](https://wikipedia.org/wiki/CJK_Compatibility_Ideographs_Supplement) | U+2F800 | U+2FA1F | 544 | (542) |
| [Tags](https://wikipedia.org/wiki/Tags) | U+E0000 | U+E007F | 128 | (97) |
| [Variation Selectors Supplement](https://wikipedia.org/wiki/Variation_Selectors_Supplement) | U+E0100 | U+E01EF | 240 | (240) |
| [Supplementary Private Use Area-A](https://wikipedia.org/wiki/Supplementary_Private_Use_Area-A) | U+F0000 | U+FFFFF | 65536 | (4) |
| [Supplementary Private Use Area-B](https://wikipedia.org/wiki/Supplementary_Private_Use_Area-B) | U+100000 | U+10FFFF | 65536 | (4) |

## [Unicode標準の原則](http://www.unicode.org/standard/principles.html) <a id="principles-of-the-unicode-standard"></a>

[Unicode標準の原則](http://www.unicode.org/standard/principles.html)は、標準の設計を支える考え方です。原文の説明は[codepoints.net](https://codepoints.net/about#unicode)からの引用として示されていますが、一部の文が途中で切れているため、ここでは各概念を簡潔に説明します。

- 普遍的レパートリー：歴史的なものを含め、世界の文字体系を表現する。
- 論理順序：双方向の文字列を読み順で保存し、視覚的な並べ替えは組版に任せる。
- 効率性：利用しやすく十分な文書とともに、効率的な文字処理を支える。
- 統合：複数の文字体系が同じ文字を使う場合、共有文字を1回だけ符号化する。
- グリフではなく文字：表示する字形ごとではなく、抽象的な文字を符号化する。
- 動的合成：AとCOMBINING DIAERESISからÄを表すように、文字を組み合わせる。
- 意味論：文字を区別できるように、プロパティと意味を定義する。
- 安定性：割当済みコードポイントと文字の同一性を保つ。誤りがあってもコードポイントを再割当せず、使用を非推奨にする場合がある。
- プレーンテキスト：マークアップや表示形式を規定せず、文字による内容を表現する。
- 変換可能性：既存の文字エンコーディングからの変換を支える。

## Unicodeの版 <a id="unicode-versions"></a>

原文に収録された版へのリンクです。原文の「最新版」は2016年時点のUnicode 9.0を指し、現在の最新版ではありません。原文の2016年8月という日付はコア仕様の公開予定を指し、公式な9.0のリリース日は2016年6月21日です。

* [バージョン9.0.0](http://www.unicode.org/versions/Unicode9.0.0/) — 原文時点の最新版。7,500文字を追加。
* [バージョン8.0.0](http://www.unicode.org/versions/Unicode8.0.0/)
* [バージョン7.0.0](http://www.unicode.org/versions/Unicode7.0.0/)
* [バージョン6.3.0](http://www.unicode.org/versions/Unicode6.3.0/)
* [バージョン6.2.0](http://www.unicode.org/versions/Unicode6.2.0/)
* [バージョン6.1.0](http://www.unicode.org/versions/Unicode6.1.0/)
* [バージョン6.0.0](http://www.unicode.org/versions/Unicode6.0.0/)
* [バージョン5.2.0](http://www.unicode.org/versions/Unicode5.2.0/)
* [バージョン5.1.0](http://www.unicode.org/versions/Unicode5.1.0/)
* バージョン5.0.0 （原文では入手不可）
* [バージョン4.0.1](http://www.unicode.org/versions/Unicode4.0.1/)
* [バージョン4.0.0](http://www.unicode.org/versions/corrigendum5.html)
