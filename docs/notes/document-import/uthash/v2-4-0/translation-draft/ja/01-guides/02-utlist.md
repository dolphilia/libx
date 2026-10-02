---
title: "utlist: Cの構造体用の連結リストマクロ"
description: "uthash 2.4.0の公式ガイド「utlist: Cの構造体用の連結リストマクロ」の非公式日本語訳"
sourceURL: "https://github.com/troydhanson/uthash/blob/a49bed0b4abb7dff16c73906dcdc8a9718d582d2/doc/utlist.txt"
licenseSource: "uthash-utlist-2.4.0"
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

Cの構造体向けの汎用的な*連結リスト*マクロが、uthashの `utlist.h` に含まれています。自分のCプログラムで使うには、`utlist.h` をソースディレクトリにコピーし、プログラムで使用するだけです。

</div>

<div class="literalblock">

<div class="content">

    #include "utlist.h"

</div>

</div>

<div class="paragraph">

これらのマクロは、連結リストの基本操作である要素の追加と削除、ソート、反復処理をサポートします。

</div>

<div class="sect2">

<!--libx-source-heading:_download-->

### ダウンロード

<div class="paragraph">

ヘッダーファイル `utlist.h` をダウンロードするには、<https://github.com/troydhanson/uthash> のリンクからuthashをクローンするかZIPファイルを取得し、src/ サブディレクトリを確認してください。

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

*utlist* マクロは、次の環境でテストされています。

</div>

<div class="ulist">

- Linux,

- Mac OS X

- Windows（Visual Studio 2008、Visual Studio 2010、またはCygwin/MinGWを使用）

</div>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_using_utlist-->

## utlistの使い方

<div class="sectionbody">

<div class="sect2">

<!--libx-source-heading:_types_of_lists-->

### リストの種類

<div class="paragraph">

次の3種類の連結リストをサポートします。

</div>

<div class="ulist">

- **単方向連結**リスト

- **双方向連結**リスト

- **循環双方向連結**リスト

</div>

<div class="sect3">

<!--libx-source-heading:_efficiency-->

#### 効率

<div class="dlist">

先頭への要素追加  
すべてのリスト形式で定数時間です。

末尾への追加  
単方向連結リストでは*O(n)*、双方向連結リストでは定数時間です（utlistの双方向連結リスト実装は `head->prev` に末尾へのポインターを保持するため、末尾への追加を定数時間で行えます）。

要素の削除  
単方向連結リストでは*O(n)*、双方向連結リストでは定数時間です。

ソート  
すべてのリスト形式で*O(n log(n))* です。

順序を保った挿入（ソート済みリスト向け）  
すべてのリスト形式で*O(n)* です。

反復処理、カウント、検索  
すべてのリスト形式で*O(n)* です。

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_list_elements-->

### リストの要素

<div class="paragraph">

`next` ポインターを含む構造体であれば、任意の構造体にこれらのマクロを使えます。双方向連結リストを作る場合は、要素に `prev` ポインターも必要です。

</div>

<div class="literalblock">

<div class="content">

    typedef struct element {
        char *name;
        struct element *prev; /* needed for a doubly-linked list only */
        struct element *next; /* needed for singly- or doubly-linked lists */
    } element;

</div>

</div>

<div class="paragraph">

構造体の名前は自由に付けられます。上の例では `element` としています。1つのリスト内では、すべての要素が同じ型でなければなりません。

</div>

<div class="sect3">

<!--libx-source-heading:_flexible_prev_next_naming-->

#### prev/nextの名前を自由に指定する

<div class="paragraph">

`prev` と `next` のポインターには別の名前を付けられます。その場合は、同じように動作し、これらの名前を追加の引数として受け取る[マクロ群](#flex_names)を使えます。

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_list_head-->

### リストの先頭ポインター

<div class="paragraph">

リストの先頭ポインターは、単に要素の構造体へのポインターです。名前は自由に付けられます。**必ず `NULL` で初期化してください**。

</div>

<div class="literalblock">

<div class="content">

    element *head = NULL;

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_list_operations-->

### リストの操作

<div class="paragraph">

リストは、要素の挿入と削除、ソート、反復処理をサポートします。

</div>

<div class="tableblock">

<table rules="cols" width="100%" frame="border" cellspacing="0" cellpadding="4">
<colgroup><col width="33%">
<col width="33%">
<col width="33%">
</colgroup><thead>
<tr>
<th align="left" valign="top">単方向連結</th>
<th align="left" valign="top">双方向連結</th>
<th align="left" valign="top">循環双方向連結</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_PREPEND(head,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_PREPEND(head,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_PREPEND(head,add);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_PREPEND_ELEM(head,ref,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_PREPEND_ELEM(head,ref,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_PREPEND_ELEM(head,ref,add);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_APPEND_ELEM(head,ref,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_APPEND_ELEM(head,ref,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_APPEND_ELEM(head,ref,add);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_REPLACE_ELEM(head,del,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_REPLACE_ELEM(head,del,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_REPLACE_ELEM(head,del,add);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_APPEND(head,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_APPEND(head,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_APPEND(head,add);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_INSERT_INORDER(head,add,cmp);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_INSERT_INORDER(head,add,cmp);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_INSERT_INORDER(head,add,cmp);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_CONCAT(head1,head2);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_CONCAT(head1,head2);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_CONCAT(head1,head2);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_DELETE(head,del);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_DELETE(head,del);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_DELETE(head,del);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_REVERSE(head);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_REVERSE(head);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_REVERSE(head);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_SORT(head,cmp);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_SORT(head,cmp);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_SORT(head,cmp);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_FOREACH(head,elt) {…}</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_FOREACH(head,elt) {…}</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_FOREACH(head,elt) {…}</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_FOREACH_SAFE(head,elt,tmp) {…}</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_FOREACH_SAFE(head,elt,tmp) {…}</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_FOREACH_SAFE(head,elt,tmp1,tmp2) {…}</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_SEARCH_SCALAR(head,elt,mbr,val);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_SEARCH_SCALAR(head,elt,mbr,val);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_SEARCH_SCALAR(head,elt,mbr,val);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_SEARCH(head,elt,like,cmp);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_SEARCH(head,elt,like,cmp);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_SEARCH(head,elt,like,cmp);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_LOWER_BOUND(head,elt,like,cmp);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_LOWER_BOUND(head,elt,like,cmp);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_LOWER_BOUND(head,elt,like,cmp);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_COUNT(head,elt,count);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_COUNT(head,elt,count);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_COUNT(head,elt,count);</code></p></td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

*Prepend*は、既存のリスト先頭要素があればその前に要素を挿入し、新しい要素をリストの先頭にする操作です。*Append*は、リストの末尾に要素を追加し、新しい末尾要素にする操作です。*Concatenate*は、正しく構築された2つのリストを受け取り、2つ目のリストを1つ目の末尾に連結します（Visual Studio 2008は `LL_CONCAT` と `DL_CONCAT` をサポートしませんが、VS2010では使えます）。先頭要素ではなく任意の要素の前に挿入するには、`_PREPEND_ELEM` マクロ群を使います。任意の要素の後ろに追加するには、`_APPEND_ELEM` マクロ群を使います。任意のリスト要素を別の要素で*置き換える*には、`_REPLACE_ELEM` マクロ群を使います。

</div>

<div class="paragraph">

*sort*操作は、メモリー内の要素を移動しません。各要素の `prev` と `next` ポインターを変更して、リストの順序だけを調整します。また、ソートによってリストの先頭が別の要素を指すように変わることがあります。

</div>

<div class="paragraph">

*foreach*操作を使うと、リストの先頭から末尾まで簡単に反復処理できます。使い方の例を下に示します。もちろん、`prev` と `next` ポインターを直接使い、*foreach*マクロの代わりにすることもできます。反復処理中にリスト要素を削除する予定がある場合は、*foreach_safe*操作を使ってください。

</div>

<div class="paragraph">

*search*操作は、特定の要素を探す反復処理を簡潔に書くためのものです。手動で反復し、各要素を調べる場合より速くなるわけではありません。2つの形式があり、「scalar」版は指定した構造体メンバーの単純な等値比較で要素を探します。汎用版は、`cmp` 関数でリスト内の他のすべての要素と比較する対象の要素を受け取ります。

</div>

<div class="paragraph">

*lower_bound*操作は、指定した `like` 要素以下となるリストの最初の要素を、指定した `cmp` 関数に従って探します。*lower_bound*操作は、`elt` を、`LL_APPEND_ELEM` に渡すのに適した値に設定します。つまり、適切な挿入位置がリストの先頭なら `elt=NULL`、`elt=p` なら適切な挿入位置は `p` と `p->next` の間です。

</div>

<div class="paragraph">

*count*操作は、リストを反復処理し、渡されたカウンターを増加させます。

</div>

<div class="paragraph">

上の表に示したパラメーターは、次のとおりです。

</div>

<div class="dlist">

head  
リストの先頭ポインター（リスト要素の構造体へのポインター）。

add  
リストに追加する要素の構造体へのポインター。

del  
リストから置き換える、または削除する要素の構造体へのポインター。

elt  
反復処理マクロでは、各リスト要素が順に代入されるポインター（使用例を参照）。検索マクロでは、結果を受け取るポインター。

ref  
前への挿入や後ろへの追加の基準となる要素。`ref` がNULL値のポインターなら、\_PREPEND_ELEM()では新しい要素をリストの末尾に追加し、\_APPEND_ELEM()では先頭に挿入します。`ref` はポインター変数の名前でなければならず、NULLを直接指定することはできません。その場合は、代わりに\_PREPEND()や\_APPEND()のマクロ群を使ってください。

like  
`elt` と同じ型の要素ポインターで、検索マクロが一致する要素を探す対象です（一致が見つかれば `elt` に格納します）。一致は、指定した `cmp` 関数で判定します。

cmp  
比較する2つの要素の構造体へのポインターを引数として受け取る比較関数へのポインター。この比較関数は、負、ゼロ、正の `int` を返さなければなりません。それぞれ、1つ目の要素が2つ目より前、同じ順序、後に並ぶことを表します（つまり、`strcmp` と同じ規約です）。Visual Studio 2008では、2つの引数を `void *` として宣言してから実際の型にキャストし直す必要がある場合があります。

tmp  
`elt` と同じ型のポインター。内部で使用されます。初期化は不要です。

mbr  
スカラー検索マクロで、`elt` 構造体内のメンバー名を指定します。そのメンバーの値を、`==` で `val` と等しいか調べます。

val  
スカラー検索マクロで、探す要素の構造体メンバー `field` の値を指定します。

count  
リストの長さが代入される整数。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_example-->

### 使用例

<div class="paragraph">

このサンプルプログラムは、テキストファイルから名前を読み取り（1行に1つの名前）、各名前を双方向連結リストの末尾に追加します。その後、ソートして表示します。

</div>

<div class="listingblock">

<div class="title">

双方向連結リスト

</div>

<div class="content">

    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    #include "utlist.h"

    #define BUFLEN 20

    typedef struct el {
        char bname[BUFLEN];
        struct el *next, *prev;
    } el;

    int namecmp(el *a, el *b) {
        return strcmp(a->bname,b->bname);
    }

    el *head = NULL; /* important- initialize to NULL! */

    int main(int argc, char *argv[]) {
        el *name, *elt, *tmp, etmp;

        char linebuf[BUFLEN];
        int count;
        FILE *file;

        if ( (file = fopen( "test11.dat", "r" )) == NULL ) {
            perror("can't open: ");
            exit(-1);
        }

        while (fgets(linebuf,BUFLEN,file) != NULL) {
            if ( (name = (el *)malloc(sizeof *name)) == NULL) exit(-1);
            strcpy(name->bname, linebuf);
            DL_APPEND(head, name);
        }
        DL_SORT(head, namecmp);
        DL_FOREACH(head,elt) printf("%s", elt->bname);
        DL_COUNT(head, elt, count);
        printf("%d number of elements in list\n", count);

        memcpy(&etmp.bname, "WES\n", 5);
        DL_SEARCH(head,elt,&etmp,namecmp);
        if (elt) printf("found %s\n", elt->bname);

        /* now delete each element, use the safe iterator */
        DL_FOREACH_SAFE(head,elt,tmp) {
          DL_DELETE(head,elt);
          free(elt);
        }

        fclose(file);

        return 0;
    }

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:flex_names-->

### prevとnext以外のフィールド名

<div class="paragraph">

`prev` と `next` のフィールドに別の名前を付けている場合は、別のマクロ群を使う必要があります。これらは通常のマクロと同じように動作しますが、追加のパラメーターとしてフィールド名を受け取ります。

</div>

<div class="paragraph">

この「フィールド名を自由に指定できる」マクロ群を下に示します。いずれも名前の末尾が `2` です。それぞれ末尾に `2` がない対応するマクロと同じように動作しますが、該当する `prev` と `next` のフィールド名を最後の引数として受け取ります。

</div>

<div class="tableblock">

<table rules="cols" width="100%" frame="border" cellspacing="0" cellpadding="4">
<colgroup><col width="33%">
<col width="33%">
<col width="33%">
</colgroup><thead>
<tr>
<th align="left" valign="top">単方向連結</th>
<th align="left" valign="top">双方向連結</th>
<th align="left" valign="top">循環双方向連結</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_PREPEND2(head,add,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_PREPEND2(head,add,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_PREPEND2(head,add,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_PREPEND_ELEM2(head,ref,add,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_PREPEND_ELEM2(head,ref,add,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_PREPEND_ELEM2(head,ref,add,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_APPEND_ELEM2(head,ref,add,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_APPEND_ELEM2(head,ref,add,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_APPEND_ELEM2(head,ref,add,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_REPLACE_ELEM2(head,del,add,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_REPLACE_ELEM2(head,del,add,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_REPLACE_ELEM2(head,del,add,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_APPEND2(head,add,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_APPEND2(head,add,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_APPEND2(head,add,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_INSERT_INORDER2(head,add,cmp,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_INSERT_INORDER2(head,add,cmp,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_INSERT_INORDER2(head,add,cmp,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_CONCAT2(head1,head2,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_CONCAT2(head1,head2,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_CONCAT2(head1,head2,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_DELETE2(head,del,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_DELETE2(head,del,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_DELETE2(head,del,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_REVERSE2(head,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_REVERSE2(head,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_REVERSE2(head,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_SORT2(head,cmp,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_SORT2(head,cmp,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_SORT2(head,cmp,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_FOREACH2(head,elt,next) {…}</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_FOREACH2(head,elt,next) {…}</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_FOREACH2(head,elt,next) {…}</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_FOREACH_SAFE2(head,elt,tmp,next) {…}</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_FOREACH_SAFE2(head,elt,tmp,next) {…}</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_FOREACH_SAFE2(head,elt,tmp1,tmp2,prev,next) {…}</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_SEARCH_SCALAR2(head,elt,mbr,val,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_SEARCH_SCALAR2(head,elt,mbr,val,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_SEARCH_SCALAR2(head,elt,mbr,val,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_SEARCH2(head,elt,like,cmp,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_SEARCH2(head,elt,like,cmp,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_SEARCH2(head,elt,like,cmp,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_LOWER_BOUND2(head,elt,like,cmp,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_LOWER_BOUND2(head,elt,like,cmp,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_LOWER_BOUND2(head,elt,like,cmp,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_COUNT2(head,elt,count,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_COUNT2(head,elt,count,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_COUNT2(head,elt,count,next);</code></p></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>
