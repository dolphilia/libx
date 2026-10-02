<div class="sect1">

<!--libx-source-heading:_advanced_topics-->

## 高度なトピック

<div class="sectionbody">

<div class="sect2">

<!--libx-source-heading:_compound_keys-->

### 複合キー

<div class="paragraph">

複数の連続したフィールドでキーを構成することもできます。

</div>

<div class="listingblock">

<div class="title">

複数のフィールドからなるキー

</div>

<div class="content">

    #include <stdlib.h>    /* malloc       */
    #include <stddef.h>    /* offsetof     */
    #include <stdio.h>     /* printf       */
    #include <string.h>    /* memset       */
    #include "uthash.h"

    #define UTF32 1

    typedef struct {
      UT_hash_handle hh;
      int len;
      char encoding;      /* these two fields */
      int text[];         /* comprise the key */
    } msg_t;

    typedef struct {
        char encoding;
        int text[];
    } lookup_key_t;

    int main(int argc, char *argv[]) {
        unsigned keylen;
        msg_t *msg, *tmp, *msgs = NULL;
        lookup_key_t *lookup_key;

        int beijing[] = {0x5317, 0x4eac};   /* UTF-32LE for 北京 */

        /* allocate and initialize our structure */
        msg = (msg_t *)malloc(sizeof(msg_t) + sizeof(beijing));
        memset(msg, 0, sizeof(msg_t)+sizeof(beijing)); /* zero fill */
        msg->len = sizeof(beijing);
        msg->encoding = UTF32;
        memcpy(msg->text, beijing, sizeof(beijing));

        /* calculate the key length including padding, using formula */
        keylen =   offsetof(msg_t, text)       /* offset of last key field */
                 + sizeof(beijing)             /* size of last key field */
                 - offsetof(msg_t, encoding);  /* offset of first key field */

        /* add our structure to the hash table */
        HASH_ADD(hh, msgs, encoding, keylen, msg);

        /* look it up to prove that it worked :-) */
        msg = NULL;

        lookup_key = (lookup_key_t *)malloc(sizeof(*lookup_key) + sizeof(beijing));
        memset(lookup_key, 0, sizeof(*lookup_key) + sizeof(beijing));
        lookup_key->encoding = UTF32;
        memcpy(lookup_key->text, beijing, sizeof(beijing));
        HASH_FIND(hh, msgs, &lookup_key->encoding, keylen, msg);
        if (msg) printf("found \n");
        free(lookup_key);

        HASH_ITER(hh, msgs, msg, tmp) {
          HASH_DEL(msgs, msg);
          free(msg);
        }
        return 0;
    }

</div>

</div>

<div class="paragraph">

この例は、配布物の `tests/test22.c` に収録されています。

</div>

<div class="paragraph">

複数のフィールドからなるキーを使う場合は、コンパイラーが各フィールドのアラインメント要件を満たすために、隣接するフィールドの間に未使用領域を挿入する、つまりパディングを加えることを理解してください。たとえば、`char` の後に `int` がある構造体では、通常、charの後に3バイトの未使用パディングが入り、`int` フィールドが4の倍数のアドレスから始まるようになります（4はintの長さです）。

</div>

<div id="multifield_note" class="sidebarblock">

<div class="content">

<div class="title">

複数のフィールドからなるキーの長さの計算：

</div>

<div class="paragraph">

複数のフィールドからなるキーの長さを求める際は、コンパイラーがアラインメントのためにフィールド間へ加える構造体のパディングも、すべて含めなければなりません。

</div>

<div class="paragraph">

キーの長さを簡単に計算するには、`offsetof` マクロを `<stddef.h>` から利用します。式は次のとおりです。

</div>

<div class="literalblock">

<div class="content">

    key length =   offsetof(last_key_field)
                 + sizeof(last_key_field)
                 - offsetof(first_key_field)

</div>

</div>

<div class="paragraph">

上の例では、`keylen` 変数をこの式で設定しています。

</div>

</div>

</div>

<div class="paragraph">

複数のフィールドからなるキーを扱う場合は、`HASH_ADD` でハッシュテーブルに追加したり、そのフィールドを `HASH_FIND` のキーに使ったりする前に、構造体を必ずゼロで埋めてください。

</div>

<div class="paragraph">

前の例では、`memset` を使って構造体をゼロで埋め、初期化しています。これにより、キーのフィールド間のパディングもすべてゼロになります。構造体をゼロで埋めなければ、パディングには不定の値が入ります。この不定の値が `HASH_FIND` の失敗につながります。パディングに違いがあると、2つの「同一」のキーが一致しないように見えるためです。

</div>

<div class="paragraph">

別の方法として、グローバルな[キー比較関数](#hash_keycompare)と[キーハッシュ関数](#hash_functions)をカスタマイズし、キーのパディングを無視できます。[別のキー比較関数を指定する](#hash_keycompare)を参照してください。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:multilevel-->

### 多段ハッシュテーブル

<div class="paragraph">

ハッシュテーブルの各要素が、それぞれ第2階層のハッシュテーブルを持つと、多段ハッシュテーブルになります。階層数に制限はありません。スクリプト言語では、次のように書くかもしれません。

</div>

<div class="literalblock">

<div class="content">

    $items{bob}{age}=37

</div>

</div>

<div class="paragraph">

以下のCプログラムは、uthashでこの例を構築します。ハッシュテーブルの名前は `items` です。1つの要素（`bob`）を持ち、その要素自身のハッシュテーブルには、値37の要素（`age`）が1つあります。多段ハッシュテーブルを構築するための特別な関数は不要です。

</div>

<div class="paragraph">

この例では、両方の階層（`bob` と `age`）を同じ構造体で表していますが、2つの異なる構造体定義を使っても構いません。2階層ではなく、3階層以上でも構いません。

</div>

<div class="listingblock">

<div class="title">

多段ハッシュテーブル

</div>

<div class="content">

    #include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    #include "uthash.h"

    /* hash of hashes */
    typedef struct item {
      char name[10];
      struct item *sub;
      int val;
      UT_hash_handle hh;
    } item_t;

    item_t *items = NULL;

    int main(int argc, char *argvp[]) {
      item_t *item1, *item2, *tmp1, *tmp2;

      /* make initial element */
      item_t *i = malloc(sizeof(*i));
      strcpy(i->name, "bob");
      i->sub = NULL;
      i->val = 0;
      HASH_ADD_STR(items, name, i);

      /* add a sub hash table off this element */
      item_t *s = malloc(sizeof(*s));
      strcpy(s->name, "age");
      s->sub = NULL;
      s->val = 37;
      HASH_ADD_STR(i->sub, name, s);

      /* iterate over hash elements  */
      HASH_ITER(hh, items, item1, tmp1) {
        HASH_ITER(hh, item1->sub, item2, tmp2) {
          printf("$items{%s}{%s} = %d\n", item1->name, item2->name, item2->val);
        }
      }

      /* clean up both hash tables */
      HASH_ITER(hh, items, item1, tmp1) {
        HASH_ITER(hh, item1->sub, item2, tmp2) {
          HASH_DEL(item1->sub, item2);
          free(item2);
        }
        HASH_DEL(items, item1);
        free(item1);
      }

      return 0;
    }

</div>

</div>

<div class="paragraph">

上の例は `tests/test59.c` に収録されています。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:multihash-->

### 複数のハッシュテーブルに属する要素

<div class="paragraph">

1つの構造体を複数のハッシュテーブルに追加できます。そうする理由には、次のようなものがあります。

</div>

<div class="ulist">

- ハッシュテーブルごとに異なるキーを使う。

- ハッシュテーブルごとに独自のソート順を持つ。

- 単にグループ分けのために複数のハッシュテーブルを使う。たとえば、利用者を `admin_users` と `users` のハッシュテーブルに入れる。

</div>

<div class="paragraph">

構造体には、追加する可能性があるハッシュテーブルごとに、`UT_hash_handle` フィールドが必要です。任意の名前を付けられます。たとえば、次のようにします。

</div>

<div class="literalblock">

<div class="content">

    UT_hash_handle hh1, hh2;

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_items_with_multiple_keys-->

### 複数のキーを持つ要素

<div class="paragraph">

IDフィールドをキーにするハッシュテーブルと、利用者名をキーにする別のハッシュテーブルを作ることができます（利用者名が一意である場合）。同じ利用者の構造体を両方のハッシュテーブルに追加すれば、構造体を複製することなく、名前またはIDで利用者の構造体を検索できます。これを実現するには、構造体を追加するハッシュごとに、別々の `UT_hash_handle` を用意します。

</div>

<div class="listingblock">

<div class="title">

2つの異なるキーを持つ構造体

</div>

<div class="content">

    struct my_struct {
        int id;                    /* first key */
        char username[10];         /* second key */
        UT_hash_handle hh1;        /* handle for first hash table */
        UT_hash_handle hh2;        /* handle for second hash table */
    };

</div>

</div>

<div class="paragraph">

上の例では、構造体を2つの別々のハッシュテーブルに追加できます。一方のハッシュでは `id` がキーで、もう一方では `username` がキーです（2つのハッシュが異なるキーのフィールドを使う必要はありません。両方で `id` などの同じキーを使っても構いません）。

</div>

<div class="paragraph">

構造体に2つのハッシュハンドル（`hh1` と `hh2`）がある点に注意してください。以下のコードでは、それぞれのハッシュハンドルを特定のハッシュテーブルだけに使っています（`hh1` は常に `users_by_id` のハッシュに、`hh2` は常に `users_by_name` のハッシュテーブルに使います）。

</div>

<div class="listingblock">

<div class="title">

構造体上の2つのキー

</div>

<div class="content">

        struct my_struct *users_by_id = NULL, *users_by_name = NULL, *s;
        int i;
        char *name;

        s = malloc(sizeof *s);
        s->id = 1;
        strcpy(s->username, "thanson");

        /* add the structure to both hash tables */
        HASH_ADD(hh1, users_by_id, id, sizeof(int), s);
        HASH_ADD(hh2, users_by_name, username, strlen(s->username), s);

        /* find user by ID in the "users_by_id" hash table */
        i = 1;
        HASH_FIND(hh1, users_by_id, &i, sizeof(int), s);
        if (s) printf("found id %d: %s\n", i, s->username);

        /* find user by username in the "users_by_name" hash table */
        name = "thanson";
        HASH_FIND(hh2, users_by_name, name, strlen(name), s);
        if (s) printf("found user %s: %d\n", name, s->id);

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_sorted_insertion_of_new_items-->

### ソート順を保った新規要素の挿入

<div class="paragraph">

ソート済みのハッシュを維持するには、2つの方法があります。第1の方法は、`HASH_SRT` マクロを使うことです。順不同のリストを *O(n log(n))* でソートします。ランダムな順序で要素をハッシュテーブルに追加し、すべて終わった後に1回だけ `HASH_SRT` を実行するなら、これが最適な方法です。追加や削除の間もテーブルをソート済みの状態に保つ必要がある場合は、挿入のたびに `HASH_SRT` を使えますが、*O(n^2 log n)* の計算量で *n* 個の要素を挿入することになります。

</div>

<div class="paragraph">

第2の方法は、順序を保って追加・置換するマクロを使うことです。`HASH_ADD_*_INORDER` マクロは、対応する `HASH_ADD_*` マクロと同様に動作しますが、比較関数の引数を追加で受け取ります。

</div>

<div class="literalblock">

<div class="content">

    int name_sort(struct my_struct *a, struct my_struct *b) {
      return strcmp(a->name, b->name);
    }

</div>

</div>

<div class="literalblock">

<div class="content">

    HASH_ADD_KEYPTR_INORDER(hh, items, &item->name, strlen(item->name), item, name_sort);

</div>

</div>

<div class="paragraph">

これらのマクロは、ハッシュが比較関数に従ってすでにソートされていると仮定し、新しい要素を正しい位置に挿入します。1回の挿入は *O(n)* なので、全体の計算量は *O(n^2)* で、すべての *n* 個の要素を挿入できます。1回の `HASH_SRT` よりは遅くなりますが、挿入のたびに `HASH_SRT` を行うよりは高速です。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_several_sort_orders-->

### 複数のソート順

<div class="paragraph">

2つのハッシュテーブルが異なるソート順を持てるのは当然ですが、それを利用すると、*同じ要素* を複数の方法でソートできます。これは、1つの構造体を複数のハッシュテーブルに格納できることに基づいています。

</div>

<div class="paragraph">

前の例を拡張し、多くの利用者がいるとしましょう。各利用者の構造体を、`users_by_id` と `users_by_name` のハッシュテーブルに追加しています（繰り返しますが、各構造体のコピーを2つ用意する必要はありません）。これで、2つのソート関数を定義して `HASH_SRT` を使えます。

</div>

<div class="literalblock">

<div class="content">

    int sort_by_id(struct my_struct *a, struct my_struct *b) {
      if (a->id == b->id) return 0;
      return (a->id < b->id) ? -1 : 1;
    }

</div>

</div>

<div class="literalblock">

<div class="content">

    int sort_by_name(struct my_struct *a, struct my_struct *b) {
      return strcmp(a->username, b->username);
    }

</div>

</div>

<div class="literalblock">

<div class="content">

    HASH_SRT(hh1, users_by_id, sort_by_id);
    HASH_SRT(hh2, users_by_name, sort_by_name);

</div>

</div>

<div class="paragraph">

これで、`users_by_id` の要素を反復処理するとID順にたどり、`users_by_name` の要素を反復処理すると名前順にたどります。どちらの順序でも、要素は前後両方向に完全にリンクされています。したがって、1組の利用者であっても、2つのハッシュテーブルに格納することで、2つの異なるソート順で簡単に反復処理できます。

</div>

</div>

