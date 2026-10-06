---
title: "utstack: C用の侵入型スタックマクロ"
description: "uthash 2.4.0の公式ガイド「utstack: C用の侵入型スタックマクロ」の非公式日本語訳"
sourceURL: "https://github.com/troydhanson/uthash/blob/a49bed0b4abb7dff16c73906dcdc8a9718d582d2/doc/utstack.txt"
licenseSource: "uthash-utstack-2.4.0"
upstreamAuthors: ["Arthur O'Dwyer <arthur.j.odwyer@gmail.com>"]
upstreamVersionHeader: "v2.4.0, June 2026"
---

<div id="preamble">

<div class="sectionbody">

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

Cの構造体向けの非常に簡単なスタックマクロが、uthashの `utstack.h` に含まれています。自分のCプログラムでこれらのマクロを使うには、`utstack.h` をソースディレクトリにコピーし、プログラムで使用するだけです。

</div>

<div class="literalblock">

<div class="content">

    #include "utstack.h"

</div>

</div>

<div class="paragraph">

これらのマクロは、侵入型の連結リストで実装されたスタックの基本操作を提供します。スタックは「push」「pop」「count」の操作に加え、スタックの先頭要素を取得する単純な操作をサポートします。

</div>

<div class="sect2">

<!--libx-source-heading:_download-->

### ダウンロード

<div class="paragraph">

ヘッダーファイル `utstack.h` をダウンロードするには、<https://github.com/troydhanson/uthash> のリンクからuthashをクローンするかZIPファイルを取得し、src/ サブディレクトリを確認してください。

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

*utstack* マクロは、次の環境でテストされています。

</div>

<div class="ulist">

- Linux,

- Mac OS X,

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

<!--libx-source-heading:_stack_list_head-->

### スタック（リスト）の先頭ポインター

<div class="paragraph">

スタックの先頭ポインターは、単に要素の構造体へのポインターです。名前は自由に付けられます。**必ず `NULL` で初期化してください**。これはスタックの先頭要素へのポインターでもあります。

</div>

<div class="literalblock">

<div class="content">

    element *stack = NULL;

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_stack_operations-->

### スタックの操作

<div class="paragraph">

スタックの操作は、O(1)のpush、O(1)のpop、およびO(n)の要素数のカウントだけです。提供されているマクロでは、先頭要素以外のスタック要素に直接アクセスすることはできません。

</div>

<div class="paragraph">

コードを読みやすくするため、マクロ `STACK_EMPTY(head)` を `head == NULL` の代わりに、`STACK_TOP(head)` を `head` の代わりに使うことができます。

</div>

<div class="tableblock">

<table rules="none" width="100%" frame="border" cellspacing="0" cellpadding="4">
<colgroup><col width="55%">
<col width="44%">
</colgroup><tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>STACK_PUSH(stack,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>add</code> を <code>stack</code> にpushする</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>STACK_POP(stack,elt);</code></p></td>
<td align="left" valign="top"><p class="table"><code>stack</code> からpopし、それまでの先頭要素を <code>elt</code> に保存する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>STACK_COUNT(stack,tmp,count);</code></p></td>
<td align="left" valign="top"><p class="table">要素数を <code>count</code> に格納する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>STACK_TOP(stack)</code></p></td>
<td align="left" valign="top"><p class="table"><code>stack</code> を返す</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>STACK_EMPTY(stack)</code></p></td>
<td align="left" valign="top"><p class="table"><code>stack == NULL</code> を返す</p></td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

上の表に示したパラメーターは、次のとおりです。

</div>

<div class="dlist">

stack  
スタックの先頭ポインター（要素の構造体へのポインター）。

add  
スタックに追加する要素の構造体へのポインター。

elt  
popされた要素のアドレスが代入されるポインター。初期化は不要です。

tmp  
`elt` と同じ型のポインター。内部で使用されます。初期化は不要です。

count  
スタックの要素数が代入される整数。初期化は不要です。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_example-->

### 使用例

<div class="paragraph">

このサンプルプログラムは、テキストファイルから名前を読み取り（1行に1つの名前）、各名前をスタックにpushします。その後、popして逆順に表示します。

</div>

<div class="listingblock">

<div class="title">

名前のスタック

</div>

<div class="content">

    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    #include "utstack.h"

    #define BUFLEN 20

    typedef struct el {
        char bname[BUFLEN];
        struct el *next;
    } el;

    el *head = NULL; /* important- initialize to NULL! */

    int main(int argc, char *argv[]) {
        el *elt, *tmp;

        char linebuf[sizeof el->bname];
        int count;
        FILE *file = fopen("test11.dat", "r");
        if (file == NULL) {
            perror("can't open: ");
            exit(-1);
        }

        while (fgets(linebuf, sizeof linebuf, file) != NULL) {
            el *name = malloc(sizeof *name);
            if (name == NULL) exit(-1);
            strcpy(name->bname, linebuf);
            STACK_PUSH(head, name);
        }
        fclose(file);

        STACK_COUNT(head, elt, count);
        printf("%d elements were read into the stack\n", count);

        /* now pop, print, and delete each element */
        while (!STACK_EMPTY(head)) {
            printf("%s\n", STACK_TOP(head)->bname);
            STACK_POP(head, elt);
            free(elt);
        }

        return 0;
    }

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:flex_names-->

### next以外のフィールド名

<div class="paragraph">

要素の構造体の `next` フィールドに別の名前を付けている場合は、別のマクロ群を使う必要があります。これらは通常のマクロと同じように動作しますが、追加のパラメーターとしてフィールド名を受け取ります。

</div>

<div class="paragraph">

この「フィールド名を自由に指定できる」マクロ群を下に示します。いずれも名前の末尾が `2` です。それぞれ末尾に `2` がない対応するマクロと同じように動作しますが、最後の引数として `next` フィールドの名前を受け取ります。

</div>

<div class="tableblock">

<table rules="none" width="100%" frame="border" cellspacing="0" cellpadding="4">
<colgroup><col width="55%">
<col width="44%">
</colgroup><tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>STACK_PUSH2(stack,add,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>add</code> を <code>stack</code> にpushする</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>STACK_POP2(stack,elt,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>stack</code> からpopし、それまでの先頭要素を <code>elt</code> に保存する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>STACK_COUNT2(stack,tmp,count,next);</code></p></td>
<td align="left" valign="top"><p class="table">要素数を <code>count</code> に格納する</p></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>
