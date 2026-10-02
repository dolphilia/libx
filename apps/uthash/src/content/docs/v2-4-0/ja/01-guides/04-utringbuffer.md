---
title: "utringbuffer: C用の動的リングバッファーマクロ"
description: "uthash 2.4.0の公式ガイド「utringbuffer: C用の動的リングバッファーマクロ」の非公式日本語訳"
sourceURL: "https://github.com/troydhanson/uthash/blob/a49bed0b4abb7dff16c73906dcdc8a9718d582d2/doc/utringbuffer.txt"
licenseSource: "uthash-utringbuffer-2.4.0"
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

`utringbuffer.h` の関数は、`utarray.h` が提供する汎用配列マクロを基にしているため、このページを読む前に[utarrayのページ](/docs/uthash/v2-4-0/ja/01-guides/03-utarray/)を読んでください。

</div>

<div class="paragraph">

自分のCプログラムでこれらのマクロを使うには、`utarray.h` と `utringbuffer.h` の両方をソースディレクトリにコピーし、プログラムで `utringbuffer.h` を使用してください。

</div>

<div class="literalblock">

<div class="content">

    #include "utringbuffer.h"

</div>

</div>

<div class="paragraph">

提供される[操作](#operations)は、C++ STLのvectorのメソッドを大まかな基にしています。リングバッファーのデータ型は、容量を指定した構築、破棄、反復処理、pushをサポートしますが、popはサポートしません。容量がいっぱいになると、新しい要素をpushする際に、最も古い要素を自動的にpopして破棄します。リングバッファーに格納する要素には、任意の単純なデータ型や構造体を使えます。

</div>

<div class="paragraph">

リングバッファーの内部には、事前に割り当てたメモリー領域があり、位置0から順に要素がコピーされます。容量がいっぱいになると、次の要素は位置0にpushされて最も古い要素を上書きし、リングバッファーの「先頭」を示す内部インデックスが増加します。一度いっぱいになったリングバッファーは、空きのある状態には戻りません。

</div>

<div class="sect2">

<!--libx-source-heading:_download-->

### ダウンロード

<div class="paragraph">

ヘッダーファイル `utringbuffer.h` をダウンロードするには、<https://github.com/troydhanson/uthash> のリンクからuthashをクローンするかZIPファイルを取得し、src/ サブディレクトリを確認してください。

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

*utringbuffer* マクロは、次の環境でテストされています。

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

<!--libx-source-heading:_declaration-->

### 宣言

<div class="paragraph">

格納する要素の型にかかわらず、リングバッファー自体のデータ型は `UT_ringbuffer` です。次のように宣言します。

</div>

<div class="literalblock">

<div class="content">

    UT_ringbuffer *history;

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_new_and_free-->

### 作成と解放

<div class="paragraph">

次に、`utringbuffer_new` でリングバッファーを作成します。使用を終えたら、`utringbuffer_free` でリングバッファーとそのすべての要素を解放します。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_push_etc-->

### pushなどの操作

<div class="paragraph">

リングバッファーの主な機能は、要素の格納と、それらに対する反復処理です。1つの要素または一定範囲の要素を一度に扱う[操作](#operations)がいくつかあります。以下の例では、要素の挿入にpush操作だけを使います。

</div>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_elements-->

## 要素

<div class="sectionbody">

<div class="paragraph">

整数や文字列の動的配列は、特に簡単に扱えます。例で示すのが分かりやすいでしょう。

</div>

<div class="sect2">

<!--libx-source-heading:_integers-->

### 整数

<div class="paragraph">

この例は、整数のリングバッファーを作成して0〜9をpushし、2通りの方法で内容を表示します。最後にリングバッファーを解放します。

</div>

<div class="listingblock">

<div class="title">

整数の要素

</div>

<div class="content">

    #include <stdio.h>
    #include "utringbuffer.h"

    int main() {
      UT_ringbuffer *history;
      int i, *p;

      utringbuffer_new(history, 7, &ut_int_icd);
      for(i=0; i < 10; i++) utringbuffer_push_back(history, &i);

      for (p = (int*)utringbuffer_front(history);
           p != NULL;
           p = (int*)utringbuffer_next(history, p)) {
        printf("%d\n", *p);  /* prints "3 4 5 6 7 8 9" */
      }

      for (i=0; i < utringbuffer_len(history); i++) {
        p = utringbuffer_eltptr(history, i);
        printf("%d\n", *p);  /* prints "3 4 5 6 7 8 9" */
      }

      utringbuffer_free(history);

      return 0;
    }

</div>

</div>

<div class="paragraph">

`utringbuffer_push_back` の第2引数は、常に要素の型への*ポインター*です（そのため、リテラルは使えません）。整数の場合は `int*` になります。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_strings-->

### 文字列

<div class="paragraph">

この例は、文字列のリングバッファーを作成して2つの文字列をpushし、内容を表示してから解放します。

</div>

<div class="listingblock">

<div class="title">

文字列の要素

</div>

<div class="content">

    #include <stdio.h>
    #include "utringbuffer.h"

    int main() {
      UT_ringbuffer *strs;
      char *s, **p;

      utringbuffer_new(strs, 7, &ut_str_icd);

      s = "hello"; utringbuffer_push_back(strs, &s);
      s = "world"; utringbuffer_push_back(strs, &s);
      p = NULL;
      while ( (p=(char**)utringbuffer_next(strs,p))) {
        printf("%s\n",*p);
      }

      utringbuffer_free(strs);

      return 0;
    }

</div>

</div>

<div class="paragraph">

この例では要素が `char*` なので、そのポインター（`char**`）を `utringbuffer_push_back` の第2引数に渡します。「push」は元の文字列をコピーし、そのコピーを配列にpushすることに注意してください。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_about_ut_icd-->

### UT_icdについて

<div class="paragraph">

配列の要素には、整数や文字列だけでなく、任意の型を使えます。基本型や構造体を要素にできます。整数や文字列（定義済みの `ut_int_icd` と `ut_str_icd` を使用）を扱う場合を除き、補助構造体 `UT_icd` を定義する必要があります。この構造体には、utringbuffer（またはutarray）が要素を初期化、コピー、破棄するために必要な情報がすべて含まれます。

</div>

<div class="literalblock">

<div class="content">

    typedef struct {
        size_t sz;
        init_f *init;
        ctor_f *copy;
        dtor_f *dtor;
    } UT_icd;

</div>

</div>

<div class="paragraph">

3つの関数ポインター `init`、`copy`、`dtor` のプロトタイプは次のとおりです。

</div>

<div class="literalblock">

<div class="content">

    typedef void (ctor_f)(void *dst, const void *src);
    typedef void (dtor_f)(void *elt);
    typedef void (init_f)(void *elt);

</div>

</div>

<div class="paragraph">

`sz` は、配列に格納する要素のサイズです。

</div>

<div class="paragraph">

`init` 関数はutarrayでは使われますが、utringbufferでは一切使われません。そのため、任意の値を設定しても問題ありません。

</div>

<div class="paragraph">

`copy` 関数は、要素をバッファーにコピーするたびに使われます。`utringbuffer_push_back` の実行中に呼び出されます。`copy` が `NULL` の場合は、既定でmemcpyによるビット単位のコピーを行います。

</div>

<div class="paragraph">

`dtor` 関数は、バッファーから取り除く要素の後処理に使われます。`utringbuffer_push_back`（バッファー内の最も古い要素に対して）、`utringbuffer_clear`、`utringbuffer_done`、`utringbuffer_free` によって呼び出されることがあります。破棄時の後処理が不要な要素なら、`dtor` を `NULL` にできます。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_scalar_types-->

### スカラー型

<div class="paragraph">

次の例は、すべて既定の設定の `UT_icd` を使って、`long` 要素のリングバッファーを作成します。容量1のバッファーに2つのlong値をpushし、バッファーの内容（つまり、最後にpushした値）を表示してから解放します。

</div>

<div class="listingblock">

<div class="title">

longの要素

</div>

<div class="content">

    #include <stdio.h>
    #include "utringbuffer.h"

    UT_icd long_icd = {sizeof(long), NULL, NULL, NULL };

    int main() {
      UT_ringbuffer *nums;
      long l, *p;
      utringbuffer_new(nums, 1, &long_icd);

      l=1; utringbuffer_push_back(nums, &l);
      l=2; utringbuffer_push_back(nums, &l);

      p=NULL;
      while((p = (long*)utringbuffer_next(nums,p))) printf("%ld\n", *p);

      utringbuffer_free(nums);
      return 0;
    }

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_structures-->

### 構造体

<div class="paragraph">

utringbufferの要素には構造体を使えます。初期化、コピー、破棄に特別な処理が不要な構造体なら、すべて既定の設定の `UT_icd` を使えます。この例は、2つの整数からなる構造体です。2つの値をpushし、それらを表示してからバッファーを解放します。

</div>

<div class="listingblock">

<div class="title">

構造体（単純な例）

</div>

<div class="content">

    #include <stdio.h>
    #include "utringbuffer.h"

    typedef struct {
        int a;
        int b;
    } intpair_t;

    UT_icd intpair_icd = {sizeof(intpair_t), NULL, NULL, NULL};

    int main() {

      UT_ringbuffer *pairs;
      intpair_t ip, *p;
      utringbuffer_new(pairs, 7, &intpair_icd);

      ip.a=1;  ip.b=2;  utringbuffer_push_back(pairs, &ip);
      ip.a=10; ip.b=20; utringbuffer_push_back(pairs, &ip);

      for(p=(intpair_t*)utringbuffer_front(pairs);
          p!=NULL;
          p=(intpair_t*)utringbuffer_next(pairs,p)) {
        printf("%d %d\n", p->a, p->b);
      }

      utringbuffer_free(pairs);
      return 0;
    }

</div>

</div>

<div class="paragraph">

リングバッファーに格納する要素が、初期化、コピー、破棄に特別な処理を必要とする構造体である場合に、`UT_icd` の真価が分かります。

</div>

<div class="paragraph">

たとえば、構造体のコピー時にコピーが必要で、構造体の解放時に解放が必要な関連メモリー領域へのポインターを構造体が含む場合、独自の `init`、`copy`、`dtor` メンバーを `UT_icd` に指定できます。

</div>

<div class="paragraph">

ここでは、整数と文字列を含む構造体を例にします。要素をコピーする際（たとえばpush時）には、`s` ポインターの参照先を「深いコピー」にしたいと考えます（元の要素と新しい要素が、それぞれ独立した `s` のコピーを指すようにするためです）。要素を破棄する際には、その `s` のコピーも「深い解放」を行います。この例は、`s` の値が `NULL` でも動作するように書かれています。

</div>

<div class="listingblock">

<div class="title">

構造体（複雑な例）

</div>

<div class="content">

    #include <stdio.h>
    #include <stdlib.h>
    #include "utringbuffer.h"

    typedef struct {
        int a;
        char *s;
    } intchar_t;

    void intchar_copy(void *_dst, const void *_src) {
      intchar_t *dst = (intchar_t*)_dst, *src = (intchar_t*)_src;
      dst->a = src->a;
      dst->s = src->s ? strdup(src->s) : NULL;
    }

    void intchar_dtor(void *_elt) {
      intchar_t *elt = (intchar_t*)_elt;
      free(elt->s);
    }

    UT_icd intchar_icd = {sizeof(intchar_t), NULL, intchar_copy, intchar_dtor};

    int main() {
      UT_ringbuffer *intchars;
      intchar_t ic, *p;
      utringbuffer_new(intchars, 2, &intchar_icd);

      ic.a=1; ic.s="hello"; utringbuffer_push_back(intchars, &ic);
      ic.a=2; ic.s="world"; utringbuffer_push_back(intchars, &ic);
      ic.a=3; ic.s="peace"; utringbuffer_push_back(intchars, &ic);

      p=NULL;
      while( (p=(intchar_t*)utringbuffer_next(intchars,p))) {
        printf("%d %s\n", p->a, (p->s ? p->s : "null"));
        /* prints "2 world 3 peace" */
      }

      utringbuffer_free(intchars);
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

この表は、utringbufferのすべての操作を示します。これらはC++のvectorクラスを大まかな基にしています。

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
<td align="left" valign="top"><p class="table"><code>utringbuffer_new(UT_ringbuffer *a, int n, UT_icd *icd)</code></p></td>
<td align="left" valign="top"><p class="table">新しいリングバッファーを割り当てる</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utringbuffer_free(UT_ringbuffer *a)</code></p></td>
<td align="left" valign="top"><p class="table">割り当て済みのリングバッファーを解放する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utringbuffer_init(UT_ringbuffer *a, int n, UT_icd *icd)</code></p></td>
<td align="left" valign="top"><p class="table">リングバッファーを初期化する（構造体自体は割り当てない）</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utringbuffer_done(UT_ringbuffer *a)</code></p></td>
<td align="left" valign="top"><p class="table">リングバッファーの内部リソースを解放する（構造体自体は解放しない）</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utringbuffer_clear(UT_ringbuffer *a)</code></p></td>
<td align="left" valign="top"><p class="table">aのすべての要素を消去して空にする</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utringbuffer_push_back(UT_ringbuffer *a, element *p)</code></p></td>
<td align="left" valign="top"><p class="table">要素pをaにpushする</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utringbuffer_len(UT_ringbuffer *a)</code></p></td>
<td align="left" valign="top"><p class="table">aの長さを取得する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utringbuffer_empty(UT_ringbuffer *a)</code></p></td>
<td align="left" valign="top"><p class="table">aが空かどうかを取得する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utringbuffer_full(UT_ringbuffer *a)</code></p></td>
<td align="left" valign="top"><p class="table">aがいっぱいかどうかを取得する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utringbuffer_eltptr(UT_ringbuffer *a, int j)</code></p></td>
<td align="left" valign="top"><p class="table">インデックスから要素のポインターを取得する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utringbuffer_eltidx(UT_ringbuffer *a, element *e)</code></p></td>
<td align="left" valign="top"><p class="table">ポインターから要素のインデックスを取得する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utringbuffer_front(UT_ringbuffer *a)</code></p></td>
<td align="left" valign="top"><p class="table">aの最も古い要素を取得する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utringbuffer_next(UT_ringbuffer *a, element *e)</code></p></td>
<td align="left" valign="top"><p class="table">aの要素eの次の要素を取得する（eがNULLなら先頭要素）</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utringbuffer_prev(UT_ringbuffer *a, element *e)</code></p></td>
<td align="left" valign="top"><p class="table">aの要素eの前の要素を取得する（eがNULLなら末尾要素）</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utringbuffer_back(UT_ringbuffer *a)</code></p></td>
<td align="left" valign="top"><p class="table">aの最も新しい要素を取得する</p></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_notes-->

### 注意事項

<div class="olist arabic">

1.  `utringbuffer_new` と `utringbuffer_free` は、新しいリングバッファーの割り当てと解放に使います。一方、UT_ringbufferがすでに割り当て済みで、初期化や内部リソースの解放だけが必要な場合は、`utringbuffer_init` と `utringbuffer_done` を使えます。

2.  `utringbuffer_new` と `utringbuffer_init` は、どちらも第2パラメーター `n` でリングバッファーの容量を受け取ります。これは、リングバッファーが「いっぱい」とみなされ、新しくpushした要素で古い要素を上書きし始めるサイズです。

3.  一度いっぱいになったリングバッファーは、`utringbuffer_clear` を使う場合を除いて、空きのある状態には戻りません。リングバッファーの先頭から古い要素を1つだけ「pop」する方法はありません。「論理的にpopした要素」の数を別の整数で保持し、`utringbuffer_eltptr(a, popped_count)` から反復処理を開始して、`utringbuffer_front(a)` からの開始に代えることで、この機能に相当する動作を実現できます。

4.  要素へのポインター（`utringbuffer_eltptr`、`utringbuffer_front`、`utringbuffer_next` などで取得）は、通常 `utringbuffer_push_back` によって無効にはなりません。utringbufferは再割り当てを行わないためです。ただし、最も古い要素へのポインターは、突然*最も新しい*要素へのポインターに変わることがあります。バッファーがいっぱいの状態で `utringbuffer_push_back` を呼び出した場合です。

5.  リングバッファーの要素は連続したメモリーに格納されますが、一度いっぱいになると、最も古い要素から最も新しい要素までが順番どおりに連続しているとは限りません。つまり、`(element *)utringbuffer_front(a) + utringbuffer_len(a)-1` は、一般には `(element *)utringbuffer_back(a)` と等しくなりません。

</div>

</div>

</div>

</div>
