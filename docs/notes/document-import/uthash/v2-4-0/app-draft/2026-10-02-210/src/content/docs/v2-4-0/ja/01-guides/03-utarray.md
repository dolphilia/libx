---
title: "utarray: C用の動的配列マクロ"
description: "uthash 2.4.0の公式ガイド「utarray: C用の動的配列マクロ」の非公式日本語訳"
sourceURL: "https://github.com/troydhanson/uthash/blob/a49bed0b4abb7dff16c73906dcdc8a9718d582d2/doc/utarray.txt"
licenseSource: "uthash-utarray-2.4.0"
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

Cの構造体向けの汎用的な動的配列マクロが、uthashの `utarray.h` に含まれています。自分のCプログラムで使うには、`utarray.h` をソースディレクトリにコピーし、プログラムで使用するだけです。

</div>

<div class="literalblock">

<div class="content">

    #include "utarray.h"

</div>

</div>

<div class="paragraph">

動的配列は、配列要素のpush、pop、eraseなどの基本操作をサポートします。配列要素には、任意の単純なデータ型や構造体を使えます。配列の[操作](#operations)は、C++ STLのvectorのメソッドを大まかな基にしています。

</div>

<div class="paragraph">

動的配列の内部には連続したメモリー領域があり、そこに要素がコピーされます。このバッファーは、pushされたすべてのデータを格納できるよう、必要に応じて `realloc` で拡張されます。

</div>

<div class="sect2">

<!--libx-source-heading:_download-->

### ダウンロード

<div class="paragraph">

ヘッダーファイル `utarray.h` をダウンロードするには、<https://github.com/troydhanson/uthash> のリンクからuthashをクローンするかZIPファイルを取得し、src/ サブディレクトリを確認してください。

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

*utarray* マクロは、次の環境でテストされています。

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

格納する要素の型にかかわらず、配列自体のデータ型は `UT_array` です。次のように宣言します。

</div>

<div class="literalblock">

<div class="content">

    UT_array *nums;

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_new_and_free-->

### 作成と解放

<div class="paragraph">

次に、`utarray_new` で配列を作成します。使用を終えたら、`utarray_free` で配列とそのすべての要素を解放します。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_push_pop_etc-->

### push、popなどの操作

<div class="paragraph">

utarrayの主な機能は、要素の格納、取り出し、それらに対する反復処理です。1つの要素または一定範囲の要素を一度に扱う[操作](#operations)がいくつかあり、選んで使えます。以下の例では、要素の挿入にpush操作だけを使います。

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

この例は、整数のutarrayを作成して0〜9をpushし、内容を表示します。最後に配列を解放します。

</div>

<div class="listingblock">

<div class="title">

整数の要素

</div>

<div class="content">

    #include <stdio.h>
    #include "utarray.h"

    int main() {
      UT_array *nums;
      int i, *p;

      utarray_new(nums,&ut_int_icd);
      for(i=0; i < 10; i++) utarray_push_back(nums,&i);

      for(p=(int*)utarray_front(nums);
          p!=NULL;
          p=(int*)utarray_next(nums,p)) {
        printf("%d\n",*p);
      }

      utarray_free(nums);

      return 0;
    }

</div>

</div>

<div class="paragraph">

`utarray_push_back` の第2引数は、常に要素の型への*ポインター*です（そのため、リテラルは使えません）。整数の場合は `int*` になります。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_strings-->

### 文字列

<div class="paragraph">

この例は、文字列のutarrayを作成して2つの文字列をpushし、内容を表示してから解放します。

</div>

<div class="listingblock">

<div class="title">

文字列の要素

</div>

<div class="content">

    #include <stdio.h>
    #include "utarray.h"

    int main() {
      UT_array *strs;
      char *s, **p;

      utarray_new(strs,&ut_str_icd);

      s = "hello"; utarray_push_back(strs, &s);
      s = "world"; utarray_push_back(strs, &s);
      p = NULL;
      while ( (p=(char**)utarray_next(strs,p))) {
        printf("%s\n",*p);
      }

      utarray_free(strs);

      return 0;
    }

</div>

</div>

<div class="paragraph">

この例では要素が `char*` なので、そのポインター（`char**`）を `utarray_push_back` の第2引数に渡します。「push」は元の文字列をコピーし、そのコピーを配列にpushすることに注意してください。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_about_ut_icd-->

### UT_icdについて

<div class="paragraph">

配列の要素には、整数や文字列だけでなく、任意の型を使えます。基本型や構造体を要素にできます。整数や文字列（定義済みの `ut_int_icd` と `ut_str_icd` を使用）を扱う場合を除き、補助構造体 `UT_icd` を定義する必要があります。この構造体には、utarrayが要素を初期化、コピー、破棄するために必要な情報がすべて含まれます。

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

`init` 関数は、utarrayが空の要素を初期化する必要があるたびに呼び出されます。これは `utarray_resize` または `utarray_extend_back` に伴ってのみ発生します。`init` が `NULL` の場合は、既定でmemsetを使って新しい要素をゼロで埋めます。

</div>

<div class="paragraph">

`copy` 関数は、要素を配列にコピーするたびに使われます。`utarray_push_back`、`utarray_insert`、`utarray_inserta`、`utarray_concat` の実行中に呼び出されます。`copy` が `NULL` の場合は、既定でmemcpyによるビット単位のコピーを行います。

</div>

<div class="paragraph">

`dtor` 関数は、配列から取り除く要素の後処理に使われます。`utarray_resize`、`utarray_pop_back`、`utarray_erase`、`utarray_clear`、`utarray_done`、`utarray_free` によって呼び出されることがあります。破棄時の後処理が不要な要素なら、`dtor` を `NULL` にできます。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_scalar_types-->

### スカラー型

<div class="paragraph">

次の例は、すべて既定の設定の `UT_icd` を使って、`long` 要素のutarrayを作成します。2つのlong値をpushし、それらを表示してから配列を解放します。

</div>

<div class="listingblock">

<div class="title">

longの要素

</div>

<div class="content">

    #include <stdio.h>
    #include "utarray.h"

    UT_icd long_icd = {sizeof(long), NULL, NULL, NULL };

    int main() {
      UT_array *nums;
      long l, *p;
      utarray_new(nums, &long_icd);

      l=1; utarray_push_back(nums, &l);
      l=2; utarray_push_back(nums, &l);

      p=NULL;
      while( (p=(long*)utarray_next(nums,p))) printf("%ld\n", *p);

      utarray_free(nums);
      return 0;
    }

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_structures-->

### 構造体

<div class="paragraph">

utarrayの要素には構造体を使えます。初期化、コピー、破棄に特別な処理が不要な構造体なら、すべて既定の設定の `UT_icd` を使えます。この例は、2つの整数からなる構造体です。2つの値をpushし、それらを表示してから配列を解放します。

</div>

<div class="listingblock">

<div class="title">

構造体（単純な例）

</div>

<div class="content">

    #include <stdio.h>
    #include "utarray.h"

    typedef struct {
        int a;
        int b;
    } intpair_t;

    UT_icd intpair_icd = {sizeof(intpair_t), NULL, NULL, NULL};

    int main() {

      UT_array *pairs;
      intpair_t ip, *p;
      utarray_new(pairs,&intpair_icd);

      ip.a=1;  ip.b=2;  utarray_push_back(pairs, &ip);
      ip.a=10; ip.b=20; utarray_push_back(pairs, &ip);

      for(p=(intpair_t*)utarray_front(pairs);
          p!=NULL;
          p=(intpair_t*)utarray_next(pairs,p)) {
        printf("%d %d\n", p->a, p->b);
      }

      utarray_free(pairs);
      return 0;
    }

</div>

</div>

<div class="paragraph">

utarrayの要素が、初期化、コピー、破棄に特別な処理を必要とする構造体である場合に、`UT_icd` の真価が分かります。

</div>

<div class="paragraph">

たとえば、構造体のコピー時にコピーが必要で、構造体の解放時に解放が必要な関連メモリー領域へのポインターを構造体が含む場合、独自の `init`、`copy`、`dtor` メンバーを `UT_icd` に指定できます。

</div>

<div class="paragraph">

ここでは、整数と文字列を含む構造体を例にします。要素をコピーする際（たとえば配列へのpush時）には、`s` ポインターの参照先を「深いコピー」にしたいと考えます（元の要素と新しい要素が、それぞれ独立した `s` のコピーを指すようにするためです）。要素を破棄する際には、その `s` のコピーも「深い解放」を行います。この例は、`s` の値が `NULL` でも動作するように書かれています。

</div>

<div class="listingblock">

<div class="title">

構造体（複雑な例）

</div>

<div class="content">

    #include <stdio.h>
    #include <stdlib.h>
    #include "utarray.h"

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
      if (elt->s) free(elt->s);
    }

    UT_icd intchar_icd = {sizeof(intchar_t), NULL, intchar_copy, intchar_dtor};

    int main() {
      UT_array *intchars;
      intchar_t ic, *p;
      utarray_new(intchars, &intchar_icd);

      ic.a=1; ic.s="hello"; utarray_push_back(intchars, &ic);
      ic.a=2; ic.s="world"; utarray_push_back(intchars, &ic);

      p=NULL;
      while( (p=(intchar_t*)utarray_next(intchars,p))) {
        printf("%d %s\n", p->a, (p->s ? p->s : "null"));
      }

      utarray_free(intchars);
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

この表は、utarrayのすべての操作を示します。これらはC++のvectorクラスを大まかな基にしています。

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
<td align="left" valign="top"><p class="table"><code>utarray_new(UT_array *a, UT_icd *icd)</code></p></td>
<td align="left" valign="top"><p class="table">新しい配列を割り当てる</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_free(UT_array *a)</code></p></td>
<td align="left" valign="top"><p class="table">割り当て済みの配列を解放する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_init(UT_array *a,UT_icd *icd)</code></p></td>
<td align="left" valign="top"><p class="table">配列を初期化する（構造体自体は割り当てない）</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_done(UT_array *a)</code></p></td>
<td align="left" valign="top"><p class="table">配列の内部リソースを解放する（構造体自体は解放しない）</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_reserve(UT_array *a,int n)</code></p></td>
<td align="left" valign="top"><p class="table">さらに<em>n</em>個の要素を格納できる空きを確保する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_push_back(UT_array *a,void *p)</code></p></td>
<td align="left" valign="top"><p class="table">要素pをaにpushする</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_pop_back(UT_array *a)</code></p></td>
<td align="left" valign="top"><p class="table">aの最後の要素をpopする</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_extend_back(UT_array *a)</code></p></td>
<td align="left" valign="top"><p class="table">aに空の要素をpushする</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_len(UT_array *a)</code></p></td>
<td align="left" valign="top"><p class="table">aの長さを取得する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_eltptr(UT_array *a,int j)</code></p></td>
<td align="left" valign="top"><p class="table">インデックスから要素のポインターを取得する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_eltidx(UT_array *a,void *e)</code></p></td>
<td align="left" valign="top"><p class="table">ポインターから要素のインデックスを取得する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_insert(UT_array *a,void *p, int j)</code></p></td>
<td align="left" valign="top"><p class="table">要素pをインデックスjに挿入する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_replace(UT_array *a,void *p, int j)</code></p></td>
<td align="left" valign="top"><p class="table">インデックスjの要素をpで置き換える</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_inserta(UT_array *a,UT_array *w, int j)</code></p></td>
<td align="left" valign="top"><p class="table">配列wを配列aのインデックスjに挿入する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_resize(UT_array *dst,int num)</code></p></td>
<td align="left" valign="top"><p class="table">配列をnum個の要素に拡張または縮小する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_concat(UT_array *dst,UT_array *src)</code></p></td>
<td align="left" valign="top"><p class="table">srcを配列dstの末尾にコピーする</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_erase(UT_array *a,int pos,int len)</code></p></td>
<td align="left" valign="top"><p class="table">a[pos]..a[pos+len-1]の範囲にあるlen個の要素を削除する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_clear(UT_array *a)</code></p></td>
<td align="left" valign="top"><p class="table">aのすべての要素を消去して長さをゼロにする</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_sort(UT_array *a,cmpfcn *cmp)</code></p></td>
<td align="left" valign="top"><p class="table">比較関数を使ってaの要素をソートする</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_find(UT_array *a,void *v, cmpfcn *cmp)</code></p></td>
<td align="left" valign="top"><p class="table">utarray内の要素vを検索する（ソート済みであることが必須）</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_front(UT_array *a)</code></p></td>
<td align="left" valign="top"><p class="table">aの最初の要素を取得する</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_next(UT_array *a,void *e)</code></p></td>
<td align="left" valign="top"><p class="table">aの要素eの次の要素を取得する（eがNULLなら先頭要素）</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_prev(UT_array *a,void *e)</code></p></td>
<td align="left" valign="top"><p class="table">aの要素eの前の要素を取得する（eがNULLなら末尾要素）</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_back(UT_array *a)</code></p></td>
<td align="left" valign="top"><p class="table">aの最後の要素を取得する</p></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_notes-->

### 注意事項

<div class="olist arabic">

1.  `utarray_new` と `utarray_free` は、新しい配列の割り当てと解放に使います。一方、UT_arrayがすでに割り当て済みで、初期化や内部リソースの解放だけが必要な場合は、`utarray_init` と `utarray_done` を使えます。

2.  `utarray_reserve` が受け取るのは、確保する要素数の「増分」であり、配列に求める総容量ではありません。この点はC++ STLの「reserve」の考え方と異なります。

3.  `utarray_sort` は、通常の `strcmp` と同じ規約の比較関数を受け取ります。この関数は2つの要素（aとb）を受け取り、aがbより前なら負の値、ソート上でaとbが等しければ0、bがaより前なら正の値を返します。比較関数の例を示します。

    <div class="literalblock">

    <div class="content">

        int intsort(const void *a, const void *b) {
            int _a = *(const int *)a;
            int _b = *(const int *)b;
            return (_a < _b) ? -1 : (_a > _b);
        }

    </div>

    </div>

4.  `utarray_find` は、与えられた比較関数に従い、指定した値を持つ要素を二分探索で見つけます。utarrayは、先に同じ比較関数を使ってソートしておく必要があります。文字列のutarrayで `utarray_find` を使う例は、`tests/test61.c` に含まれています。

5.  特定の要素への*ポインター*（`utarray_eltptr`、`utarray_front`、`utarray_next`、`utarray_prev`、`utarray_back` で取得）は、utarrayに別の要素が挿入されるたびに無効になります。内部のメモリー管理で、要素の格納領域を新しいアドレスへ `realloc` する必要が生じ得るためです。そのため、実行中に要素の挿入が起こり得るコードでは、通常、整数の*インデックス*で要素を参照する方がよいでしょう。

6.  メモリー不足時の既定の処理（`exit(-1)` を呼び出す動作）を変更するには、`utarray_oom()` マクロを `utarray.h` のインクルード前に定義し直してください。たとえば、次のようにします。

    <div class="literalblock">

    <div class="content">

        #define utarray_oom() do { longjmp(error_handling_location); } while (0)
        ...
        #include "utarray.h"

    </div>

    </div>

</div>

</div>

</div>

</div>
