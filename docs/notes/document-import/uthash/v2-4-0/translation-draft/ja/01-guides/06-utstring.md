---
title: "utstring: C用の動的文字列マクロ"
description: "uthash 2.4.0の公式ガイド「utstring: C用の動的文字列マクロ」の非公式日本語訳"
sourceURL: "https://github.com/troydhanson/uthash/blob/a49bed0b4abb7dff16c73906dcdc8a9718d582d2/doc/utstring.txt"
licenseSource: "uthash-utstring-2.4.0"
upstreamAuthors: ["Troy D. Hanson <tdh@tkhanson.net>","Arthur O'Dwyer <arthur.j.odwyer@gmail.com>"]
upstreamVersionHeader: "v2.4.0, June 2026"
---

<div id="preamble">

<div class="sectionbody">

<div class="paragraph">

v2.4.0, June 2026

</div>

<div class="paragraph">

[GitHubのプロジェクトページ](https://github.com/troydhanson/uthash)はこちらです。

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_introduction-->

## はじめに

<div class="sectionbody">

<div class="paragraph">

Cプログラム向けの基本的な動的文字列マクロが、uthashの `utstring.h` に含まれています。自分のCプログラムで使うには、`utstring.h` をソースディレクトリにコピーし、プログラムで使用するだけです。

</div>

<div class="literalblock">

<div class="content">

    #include "utstring.h"

</div>

</div>

<div class="paragraph">

動的文字列は、データの挿入、連結、長さと内容の取得、部分文字列の検索、内容の消去などの操作をサポートします。utstringにはバイナリデータも格納できます。文字列の[操作](#operations)を下に示します。

</div>

<div class="paragraph">

utstringの操作の一部は、マクロではなく関数として実装されています。

</div>

<div class="sect2">

<!--libx-source-heading:_download-->

### ダウンロード

<div class="paragraph">

ヘッダーファイル `utstring.h` をダウンロードするには、<https://github.com/troydhanson/uthash> のリンクからuthashをクローンするかZIPファイルを取得し、src/ サブディレクトリを確認してください。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_bsd_licensed-->

### BSDライセンス

<div class="paragraph">

このソフトウェアは[修正版BSDライセンス](/docs/uthash/v2-4-0/ja/02-license/01-license/)で提供されています。自由に利用できるオープンソースソフトウェアです。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_platforms-->

### プラットフォーム

<div class="paragraph">

*utstring* マクロは、次の環境でテストされています。

</div>

<div class="ulist">

- Linux,

- Windows（Visual Studio 2008およびVisual Studio 2010を使用）

</div>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_usage-->

## 使い方

<div class="sectionbody">

<div class="sect2">

<!--libx-source-heading:_declaration-->

### 宣言

<div class="paragraph">

動的文字列自体のデータ型は `UT_string` です。次のように宣言します。

</div>

<div class="literalblock">

<div class="content">

    UT_string *str;

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_new_and_free-->

### 作成と解放

<div class="paragraph">

次に、`utstring_new` で文字列を作成します。使用を終えたら、`utstring_free` で文字列とその内容をすべて解放します。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_manipulation-->

### 操作方法

<div class="paragraph">

`utstring_printf` または `utstring_bincpy` の操作で、文字列にデータを挿入（コピー）します。utstringを別のutstringに連結するには `utstring_concat` を使います。文字列の内容を消去するには `utstring_clear` を使います。文字列の長さは `utstring_len` で、内容は `utstring_body` で取得できます。後者は `char*` と評価されます。このポインターが指すバッファーは常にヌル終端されています。そのため、文字列を受け取る外部関数に直接渡せます。自動的に付加されるこの終端ヌル文字は、文字列の長さには含まれません。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_samples-->

### 使用例

<div class="paragraph">

次の例でutstringの使い方を示します。

</div>

<div class="listingblock">

<div class="title">

使用例1

</div>

<div class="content">

    #include <stdio.h>
    #include "utstring.h"

    int main() {
        UT_string *s;

        utstring_new(s);
        utstring_printf(s, "hello world!" );
        printf("%s\n", utstring_body(s));

        utstring_free(s);
        return 0;
    }

</div>

</div>

<div class="paragraph">

次の例では、`utstring_printf` が文字列に*追記*することを示します。連結の例も示しています。

</div>

<div class="listingblock">

<div class="title">

使用例2

</div>

<div class="content">

    #include <stdio.h>
    #include "utstring.h"

    int main() {
        UT_string *s, *t;

        utstring_new(s);
        utstring_new(t);

        utstring_printf(s, "hello " );
        utstring_printf(s, "world " );

        utstring_printf(t, "hi " );
        utstring_printf(t, "there " );

        utstring_concat(s, t);
        printf("length: %u\n", utstring_len(s));
        printf("%s\n", utstring_body(s));

        utstring_free(s);
        utstring_free(t);
        return 0;
    }

</div>

</div>

<div class="paragraph">

次の例は、文字列にバイナリデータを挿入する方法を示します。また、文字列の内容を消去して、新しいデータを書き込んでいます。

</div>

<div class="listingblock">

<div class="title">

使用例3

</div>

<div class="content">

    #include <stdio.h>
    #include "utstring.h"

    int main() {
        UT_string *s;
        char binary[] = "\xff\xff";

        utstring_new(s);
        utstring_bincpy(s, binary, sizeof(binary));
        printf("length is %u\n", utstring_len(s));

        utstring_clear(s);
        utstring_printf(s,"number %d", 10);
        printf("%s\n", utstring_body(s));

        utstring_free(s);
        return 0;
    }

</div>

</div>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:operations-->

## リファレンス

<div class="sectionbody">

<div class="paragraph">

以下はutstringの操作です。

</div>

<div class="sect2">

<!--libx-source-heading:_operations-->

### 操作

<div class="tableblock">

<table rules="none" width="100%" frame="border" cellspacing="0" cellpadding="4">
<colgroup><col width="55%">
<col width="44%">
</colgroup><tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_new(s)</code></p></td>
<td align="left" valign="top"><p class="table">新しいutstringを割り当てる</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_renew(s)</code></p></td>
<td align="left" valign="top"><p class="table">sが <code>NULL</code> なら新しいutstringを割り当て、それ以外なら内容を消去する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_free(s)</code></p></td>
<td align="left" valign="top"><p class="table">割り当て済みのutstringを解放する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_init(s)</code></p></td>
<td align="left" valign="top"><p class="table">utstringを初期化する（構造体自体は割り当てない）</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_done(s)</code></p></td>
<td align="left" valign="top"><p class="table">utstringの内部メモリーを解放する（構造体自体は解放しない）</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_printf(s,fmt,…)</code></p></td>
<td align="left" valign="top"><p class="table">utstringに書式付きで書き込む（追記）</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_bincpy(s,bin,len)</code></p></td>
<td align="left" valign="top"><p class="table">長さlenのバイナリデータを挿入する（追記）</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_concat(dst,src)</code></p></td>
<td align="left" valign="top"><p class="table">srcのutstringをdstのutstringの末尾に連結する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_clear(s)</code></p></td>
<td align="left" valign="top"><p class="table">sの内容を消去する（長さを0にする）</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_len(s)</code></p></td>
<td align="left" valign="top"><p class="table">sの長さを符号なし整数として取得する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_body(s)</code></p></td>
<td align="left" valign="top"><p class="table">sの内容への <code>char*</code> を取得する（バッファーは常にヌル終端されている）</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_find(s,pos,str,len)</code></p></td>
<td align="left" valign="top"><p class="table">posから順方向に部分文字列を検索する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_findR(s,pos,str,len)</code></p></td>
<td align="left" valign="top"><p class="table">posから逆方向に部分文字列を検索する</p></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_new_free_vs_init_done-->

### new/freeとinit/doneの違い

<div class="paragraph">

新しい文字列を割り当てたり解放したりするには、`utstring_new` と `utstring_free` を使います。UT_stringを静的に割り当てている場合は、`utstring_init` と `utstring_done` で内部メモリーを初期化したり解放したりします。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_substring_search-->

### 部分文字列の検索

<div class="paragraph">

utstring内の部分文字列を検索するには、`utstring_find` と `utstring_findR` を使います。順方向と逆方向の検索が用意されています。逆方向の検索は、文字列の末尾から先頭方向へ走査します。これらは検索開始位置を受け取り、その位置は0（utstringの先頭）を基準に数えます。負の位置は文字列の末尾から数えるため、-1は最後の位置です。逆方向の検索では、開始位置が検索対象の部分文字列の*末尾*、たとえば *cat* の *t* に対応することに注意してください。返り値は常に、utstring内で部分文字列が*始まる*位置のオフセットを示します。一致する部分文字列が見つからない場合は、-1を返します。

</div>

<div class="paragraph">

たとえば、`s` というutstringに次の内容が入っているとします。

</div>

<div class="literalblock">

<div class="content">

    ABC ABCDAB ABCDABCDABDE

</div>

</div>

<div class="paragraph">

このとき、`ABC` を順方向および逆方向に検索すると、次の結果になります。

</div>

<div class="literalblock">

<div class="content">

    utstring_find(  s, -9, "ABC", 3 ) = 15
    utstring_find(  s,  3, "ABC", 3 ) =  4
    utstring_find(  s, 16, "ABC", 3 ) = -1
    utstring_findR( s, -9, "ABC", 3 ) = 11
    utstring_findR( s, 12, "ABC", 3 ) =  4
    utstring_findR( s,  2, "ABC", 3 ) =  0

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_multiple_use_substring_search-->

#### 繰り返し使う部分文字列検索

<div class="paragraph">

これまでの例は、内部のKnuth-Morris-Pratt（KMP）テーブルを内部で構築し、検索後に解放する「一度だけ使う」部分文字列検索です。ある部分文字列を何度も検索する必要がある場合は、KMPテーブルを保存して再利用する方が効率的です。

</div>

<div class="paragraph">

KMPテーブルを再利用するには、手動で構築してから内部の検索関数に渡します。使用する関数は次のとおりです。

</div>

<div class="literalblock">

<div class="content">

    _utstring_BuildTable  （順方向検索用のKMPテーブルを構築する）
    _utstring_BuildTableR （逆方向検索用のKMPテーブルを構築する）
    _utstring_find        （構築済みのKMPテーブルで順方向検索する）
    _utstring_findR       （構築済みのKMPテーブルで逆方向検索する）

</div>

</div>

<div class="paragraph">

次は、部分文字列「ABC」の順方向検索用KMPテーブルを構築し、検索で使う例です。

</div>

<div class="literalblock">

<div class="content">

    long *KPM_TABLE, offset;
    KPM_TABLE = (long *)malloc( sizeof(long) * (strlen("ABC")) + 1));
    _utstring_BuildTable("ABC", 3, KPM_TABLE);
    offset = _utstring_find(utstring_body(s), utstring_len(s), "ABC", 3, KPM_TABLE );
    free(KPM_TABLE);

</div>

</div>

<div class="paragraph">

内部の `_utstring_find` の第2引数は、開始位置ではなくUT_stringの長さであることに注意してください。文字列の先頭アドレスに位置を加え、その長さから同じ位置を引くことで、位置パラメーターに相当する動作を実現できます。

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_notes-->

### 注意事項

<div class="olist arabic">

1.  メモリー不足時の既定の処理（`exit(-1)` を呼び出す動作）を変更するには、`utstring_oom()` マクロを `utstring.h` のインクルード前に定義し直してください。たとえば、次のようにします。

    <div class="literalblock">

    <div class="content">

        #define utstring_oom() do { longjmp(error_handling_location); } while (0)
        ...
        #include "utstring.h"

    </div>

    </div>

</div>

</div>

</div>

</div>
