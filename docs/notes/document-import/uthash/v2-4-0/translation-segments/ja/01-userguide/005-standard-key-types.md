<div class="sect1">

<!--libx-source-heading:_standard_key_types-->

## 標準的なキーの型

<div class="sectionbody">

<div class="paragraph">

この節では、さまざまな種類のキーを扱う方法を詳しく説明します。整数、文字列、ポインター、構造体など、ほぼすべての型をキーに使えます。

</div>

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">注意</div>
</td>
<td class="content">
<div class="title">浮動小数点数についての注意</div>
<div class="paragraph"><p>浮動小数点数をキーに使えます。ただし、浮動小数点数の等値性を調べる
プログラムと同じ注意が必要です。つまり、2つの浮動小数点数にごくわずかでも
違いがあれば、それらは別のキーになります。</p></div>
</td>
</tr></tbody></table>

</div>

<div class="sect2">

<!--libx-source-heading:_integer_keys-->

### 整数のキー

<div class="paragraph">

これまでの例では、整数のキーを使ってきました。まとめると、整数のキーを持つ構造体には、簡便マクロ `HASH_ADD_INT` と `HASH_FIND_INT` を使います（`HASH_DELETE` や `HASH_SORT` などの他の操作は、すべての型のキーで同じです）。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_string_keys-->

### 文字列のキー

<div class="paragraph">

構造体が文字列のキーを持つ場合、使う操作は、構造体がキーを *指している*（`char *`）のか、文字列が構造体の `内部` にある（`char a[10]`）のかによって異なります。**この違いは重要です**。以下で説明するように、`HASH_ADD_KEYPTR` を使う必要があるのは、構造体がキーを *指している* 場合（キー自体が構造体の *外部* にある場合）です。一方、`HASH_ADD_STR` を使うのは、文字列のキーが構造体の **内部** にある場合です。

</div>

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">注意</div>
</td>
<td class="content">
<div class="title">char[ ]とchar*の違い</div>
<div class="paragraph"><p>以下の最初の例では、文字列は構造体の<em>内部</em>にあります。<code>name</code>は
<code>char[10]</code>のフィールドです。2番目の例では、キーは構造体の<em>外部</em>にあり、
<code>name</code>は<code>char *</code>です。そのため、最初の例では<code>HASH_ADD_STR</code>を使い、
2番目の例では<code>HASH_ADD_KEYPTR</code>を使います。このマクロの詳細については、
<a href="#Macro_reference">マクロリファレンス</a>を参照してください。</p></div>
</td>
</tr></tbody></table>

</div>

<div class="sect3">

<!--libx-source-heading:_string_em_within_em_structure-->

#### 構造体の *内部* にある文字列

<div class="listingblock">

<div class="title">

文字列をキーとするハッシュ（文字列が構造体の内部にある場合）

</div>

<div class="content">

    #include <string.h>  /* strcpy */
    #include <stdlib.h>  /* malloc */
    #include <stdio.h>   /* printf */
    #include "uthash.h"

    struct my_struct {
        char name[10];             /* key (string is WITHIN the structure) */
        int id;
        UT_hash_handle hh;         /* makes this structure hashable */
    };


    int main(int argc, char *argv[]) {
        const char *names[] = { "joe", "bob", "betty", NULL };
        struct my_struct *s, *tmp, *users = NULL;

        for (int i = 0; names[i]; ++i) {
            s = (struct my_struct *)malloc(sizeof *s);
            strcpy(s->name, names[i]);
            s->id = i;
            HASH_ADD_STR(users, name, s);
        }

        HASH_FIND_STR(users, "betty", s);
        if (s) printf("betty's id is %d\n", s->id);

        /* free the hash table contents */
        HASH_ITER(hh, users, s, tmp) {
          HASH_DEL(users, s);
          free(s);
        }
        return 0;
    }

</div>

</div>

<div class="paragraph">

この例は、配布物の `tests/test15.c` に収録されています。次のように出力します。

</div>

<div class="literalblock">

<div class="content">

    betty's id is 2

</div>

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_string_em_pointer_em_in_structure-->

#### 構造体内の文字列 *ポインター*

<div class="paragraph">

次は、同じ例で、`char *` のキーを `char [ ]` の代わりに使う場合です。

</div>

<div class="listingblock">

<div class="title">

文字列をキーとするハッシュ（構造体が文字列を指す場合）

</div>

<div class="content">

    #include <string.h>  /* strcpy */
    #include <stdlib.h>  /* malloc */
    #include <stdio.h>   /* printf */
    #include "uthash.h"

    struct my_struct {
        const char *name;          /* key */
        int id;
        UT_hash_handle hh;         /* makes this structure hashable */
    };


    int main(int argc, char *argv[]) {
        const char *names[] = { "joe", "bob", "betty", NULL };
        struct my_struct *s, *tmp, *users = NULL;

        for (int i = 0; names[i]; ++i) {
            s = (struct my_struct *)malloc(sizeof *s);
            s->name = names[i];
            s->id = i;
            HASH_ADD_KEYPTR(hh, users, s->name, strlen(s->name), s);
        }

        HASH_FIND_STR(users, "betty", s);
        if (s) printf("betty's id is %d\n", s->id);

        /* free the hash table contents */
        HASH_ITER(hh, users, s, tmp) {
          HASH_DEL(users, s);
          free(s);
        }
        return 0;
    }

</div>

</div>

<div class="paragraph">

この例は `tests/test40.c` に収録されています。

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_pointer_keys-->

### ポインターのキー

<div class="paragraph">

ポインターをキーに使うこともできます。明確に言うと、*ポインター自体* をキーにできるという意味です（*指しているもの* がキーである場合は、これとは異なる用途で、`HASH_ADD_KEYPTR` が扱います）。

</div>

<div class="paragraph">

以下は、構造体に `key` というポインターのメンバーがある簡単な例です。

</div>

<div class="listingblock">

<div class="title">

ポインターのキー

</div>

<div class="content">

    #include <assert.h>
    #include <stdlib.h>
    #include "uthash.h"

    typedef struct {
      void *key;
      int i;
      UT_hash_handle hh;
    } el_t;

    el_t *hash = NULL;
    void *someaddr = &hash;

    int main() {
      el_t *d;
      el_t *e = (el_t *)malloc(sizeof *e);
      e->key = someaddr;
      e->i = 1;
      HASH_ADD_PTR(hash, key, e);
      HASH_FIND_PTR(hash, &someaddr, d);
      assert(d == e);

      /* release memory */
      HASH_DEL(hash, e);
      free(e);
      return 0;
    }

</div>

</div>

<div class="paragraph">

この例は `tests/test57.c` に収録されています。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_structure_keys-->

### 構造体のキー

<div class="paragraph">

キーのフィールドには、任意のデータ型を使えます。uthashにとって、キーは単なるバイト列です。そのため、入れ子になった構造体でもキーに使えます。汎用マクロ `HASH_ADD` と `HASH_FIND` を使って例を示します。

</div>

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">注意</div>
</td>
<td class="content">構造体にはパディング（構造体のメンバーのアラインメント要件を満たすための、
使われない内部領域）が含まれます。このパディングのバイトは、
<em>必ずゼロにしてください</em>。これは、ハッシュに要素を追加したり、要素を検索したりする前に必要です。
そのため、使用するメンバーを設定する前に、必ず構造体全体をゼロにしてください。
以下の例では、この処理を行っています。<code>memset</code>を2回呼び出している箇所を確認してください。</td>
</tr></tbody></table>

</div>

<div class="listingblock">

<div class="title">

構造体をキーにする

</div>

<div class="content">

    #include <stdlib.h>
    #include <stdio.h>
    #include "uthash.h"

    typedef struct {
      char a;
      int b;
    } record_key_t;

    typedef struct {
        record_key_t key;
        /* ... other data ... */
        UT_hash_handle hh;
    } record_t;

    int main(int argc, char *argv[]) {
        record_t l, *p, *r, *tmp, *records = NULL;

        r = (record_t *)malloc(sizeof *r);
        memset(r, 0, sizeof *r);
        r->key.a = 'a';
        r->key.b = 1;
        HASH_ADD(hh, records, key, sizeof(record_key_t), r);

        memset(&l, 0, sizeof(record_t));
        l.key.a = 'a';
        l.key.b = 1;
        HASH_FIND(hh, records, &l.key, sizeof(record_key_t), p);

        if (p) printf("found %c %d\n", p->key.a, p->key.b);

        HASH_ITER(hh, records, p, tmp) {
          HASH_DEL(records, p);
          free(p);
        }
        return 0;
    }

</div>

</div>

<div class="paragraph">

この使い方は、以下で説明する複合キーの使い方とほぼ同じです。

</div>

<div class="paragraph">

汎用マクロには、`UT_hash_handle` の名前を第1引数として渡す必要がある点に注意してください（この例では `hh` です）。汎用マクロについては、[マクロリファレンス](#Macro_reference)で説明しています。

</div>

</div>

</div>

</div>

