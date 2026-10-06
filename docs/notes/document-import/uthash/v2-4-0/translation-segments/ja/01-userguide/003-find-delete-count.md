<div class="sect2">

<!--libx-source-heading:_find_item-->

### 要素の検索

<div class="paragraph">

ハッシュ内の構造体を検索するには、そのキーが必要です。そのキーを使って `HASH_FIND` を呼び出します（ここでは、簡便マクロ `HASH_FIND_INT` を `int` 型のキーに使います）。

</div>

<div class="listingblock">

<div class="title">

キーを使って構造体を検索する

</div>

<div class="content">

    struct my_struct *find_user(int user_id) {
        struct my_struct *s;

        HASH_FIND_INT(users, &user_id, s);  /* s: output pointer */
        return s;
    }

</div>

</div>

<div class="paragraph">

この例では、ハッシュテーブルは `users` で、`&user_id` はキー（この場合は整数）を指します。最後の `s` は *出力* 変数で、`HASH_FIND_INT` が結果を格納します。最終的に、`s` は指定したキーを持つ構造体を指すか、ハッシュ内にキーが見つからなければ `NULL` になります。

</div>

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">注意</div>
</td>
<td class="content">中央の引数は、キーを指す<em>ポインター</em>です。リテラルのキー
値を<code>HASH_FIND</code>に渡すことはできません。代わりに、そのリテラル値を変数に代入し、
その変数へのポインターを渡してください。</td>
</tr></tbody></table>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_delete_item-->

### 要素の削除

<div class="paragraph">

ハッシュから構造体を削除するには、その構造体へのポインターが必要です（キーしかない場合は、先に `HASH_FIND` を使って構造体へのポインターを取得してください）。

</div>

<div class="listingblock">

<div class="title">

ハッシュから要素を削除する

</div>

<div class="content">

    void delete_user(struct my_struct *user) {
        HASH_DEL(users, user);  /* user: pointer to deletee */
        free(user);             /* optional; it's up to you! */
    }

</div>

</div>

<div class="paragraph">

この例でも、`users` はハッシュテーブルで、`user` はハッシュから取り除きたい構造体へのポインターです。

</div>

<div class="sect3">

<!--libx-source-heading:_uthash_never_frees_your_structure-->

#### uthashが構造体のメモリーを解放することはありません

<div class="paragraph">

構造体の削除は、その構造体をハッシュテーブルから取り除くだけで、`free` は行いません。構造体のメモリーをいつ解放するかは、完全に利用者の判断に委ねられています。uthashが構造体のメモリーを解放することはありません。たとえば、`HASH_REPLACE` マクロでは、利用者が置換された要素のメモリーを解放できるように、その要素へのポインターを出力引数として返します。

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_delete_can_change_the_pointer-->

#### 削除によってポインターが変わる場合があります

<div class="paragraph">

ハッシュテーブルのポインターは、最初はハッシュに最初に追加した要素を指しますが、`HASH_DEL` によって変わる場合があります（ハッシュテーブルの先頭の要素を削除した場合です）。

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_iterative_deletion-->

#### 反復処理による削除

<div class="paragraph">

`HASH_ITER` マクロは、削除を安全に行える反復処理の構文で、単純な *for* ループに展開されます。

</div>

<div class="listingblock">

<div class="title">

ハッシュからすべての要素を削除する

</div>

<div class="content">

    void delete_all() {
      struct my_struct *current_user, *tmp;

      HASH_ITER(hh, users, current_user, tmp) {
        HASH_DEL(users, current_user);  /* delete; users advances to next */
        free(current_user);             /* optional- if you want to free  */
      }
    }

</div>

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_all_at_once_deletion-->

#### 一括削除

<div class="paragraph">

すべての要素を削除するだけで、メモリーの解放や要素ごとの後処理を行わない場合は、次の1回の操作で、より効率よく削除できます。

</div>

<div class="literalblock">

<div class="content">

    HASH_CLEAR(hh, users);

</div>

</div>

<div class="paragraph">

その後、リストの先頭（この例では `users`）は `NULL` に設定されます。

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_count_items-->

### 要素数の取得

<div class="paragraph">

ハッシュテーブル内の要素数は、`HASH_COUNT` を使って取得できます。

</div>

<div class="listingblock">

<div class="title">

ハッシュテーブル内の要素数

</div>

<div class="content">

    unsigned int num_users;
    num_users = HASH_COUNT(users);
    printf("there are %u users\n", num_users);

</div>

</div>

<div class="paragraph">

なお、リストの先頭（この例では `users`）が `NULL` でも使えます。その場合、要素数は0です。

</div>

</div>

