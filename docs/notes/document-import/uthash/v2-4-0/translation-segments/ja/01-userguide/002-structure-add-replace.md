
<div class="sect1">

<!--libx-source-heading:_your_structure-->

## 構造体

<div class="sectionbody">

<div class="paragraph">

uthashのハッシュテーブルは、構造体で構成されます。各構造体はキーと値の対応関係を表します。構造体の1つ以上のフィールドがキーを構成し、構造体へのポインター自体が値になります。

</div>

<div class="listingblock">

<div class="title">

ハッシュに格納できる構造体の定義

</div>

<div class="content">

    #include "uthash.h"

    struct my_struct {
        int id;                    /* key */
        char name[10];
        UT_hash_handle hh;         /* makes this structure hashable */
    };

</div>

</div>

<div class="paragraph">

uthashでは、構造体をハッシュテーブルに追加しても、その構造体が別の場所に移動されたりコピーされたりすることはありません。そのため、プログラムの実行中にその構造体をハッシュテーブルへ追加したり削除したりしても、安全にその構造体を指す別のデータ構造を保持できます。

</div>

<div class="sect2">

<!--libx-source-heading:_the_key-->

### キー

<div class="paragraph">

キーのフィールドのデータ型や名前に制限はありません。任意の名前とデータ型を持つ、複数の連続したフィールドでキーを構成することもできます。

</div>

<div class="sidebarblock">

<div class="content">

<div class="title">

本当に、どのデータ型でも使えますか？

</div>

<div class="paragraph">

はい、キーと構造体には任意のデータ型を使えます。固定のプロトタイプを持つ関数呼び出しとは異なり、uthashは引数に型を持たないマクロで構成されるため、任意の型の構造体やキーを扱えます。

</div>

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_unique_keys-->

#### キーの一意性

<div class="paragraph">

他のハッシュと同様に、すべての要素が一意のキーを持つ必要があります。アプリケーション側でキーの一意性を保証しなければなりません。要素をハッシュテーブルに追加する前に、そのキーがまだ使われていないことを確認しておく必要があります（不確かなら調べてください）。`HASH_FIND` を使って、そのキーがすでにハッシュテーブルにあるかどうかを調べられます。

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_the_hash_handle-->

### ハッシュハンドル

<div class="paragraph">

構造体には `UT_hash_handle` フィールドが必ず必要です。ハッシュを動作させるための内部管理に使われます。初期化は不要です。任意の名前を付けられますが、`hh` という名前にすると扱いが簡単になります。これにより、要素の追加・検索・削除に、より簡単な「簡便マクロ」を使えます。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_a_word_about_memory-->

### メモリーについて

<div class="sect3">

<!--libx-source-heading:_overhead-->

#### オーバーヘッド

<div class="paragraph">

ハッシュハンドルは、32ビットシステムでは要素ごとに約32バイト、64ビットシステムでは要素ごとに約56バイトを消費します。その他のオーバーヘッドであるバケットとテーブルは、これと比べれば無視できる程度です。`HASH_OVERHEAD` を使うと、ハッシュテーブルのオーバーヘッドのサイズをバイト単位で取得できます。[マクロリファレンス](#Macro_reference)を参照してください。

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_how_clean_up_occurs-->

#### 内部メモリーが解放されるタイミング

<div class="paragraph">

uthashが内部メモリーをどのように解放するのか、という質問がありました。答えは簡単です。ハッシュテーブルから *最後の要素を削除すると*、uthashはそのハッシュテーブルに関連する内部メモリーをすべて解放し、そのポインターをNULLに設定します。

</div>

</div>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_hash_operations-->

## ハッシュの操作

<div class="sectionbody">

<div class="paragraph">

この節では、例を通じてuthashのマクロを紹介します。より簡潔な一覧については、[マクロリファレンス](#Macro_reference)を参照してください。

</div>

<div class="sidebarblock">

<div class="content">

<div class="title">

簡便マクロと汎用マクロ：

</div>

<div class="paragraph">

uthashのマクロには2つの種類があります。*簡便* マクロは、整数・ポインター・文字列のキーに使えます（慣例的な名前の `hh` を `UT_hash_handle` フィールドに付けている必要があります）。簡便マクロは汎用マクロより引数が少ないため、これらの一般的なキーの型で、少し簡単に使えます。

</div>

<div class="paragraph">

*汎用* マクロは、任意の型のキー、複数のフィールドからなるキー、または `UT_hash_handle` に `hh` 以外の名前を付けている場合に使えます。引数は多くなりますが、その分、柔軟性が高くなります。ただし、簡便マクロで要件を満たせるなら、それを使ってください。コードが読みやすくなります。

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_declare_the_hash-->

### ハッシュの宣言

<div class="paragraph">

ハッシュは、構造体へのポインターとして宣言し、`NULL` で初期化しなければなりません。

</div>

<div class="literalblock">

<div class="content">

    struct my_struct *users = NULL;    /* important! initialize to NULL */

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_add_item-->

### 要素の追加

<div class="paragraph">

構造体のメモリーを確保し、用途に応じて初期化してください。このときuthashにとって重要なのは、キーを一意の値で初期化することだけです。その後、`HASH_ADD` を呼び出します（ここでは、簡便マクロ `HASH_ADD_INT` を使います。`int` 型のキーを簡単に扱えます）。

</div>

<div class="listingblock">

<div class="title">

ハッシュに要素を追加する

</div>

<div class="content">

    void add_user(int user_id, char *name) {
        struct my_struct *s;

        s = malloc(sizeof *s);
        s->id = user_id;
        strcpy(s->name, name);
        HASH_ADD_INT(users, id, s);  /* id: name of key field */
    }

</div>

</div>

<div class="paragraph">

`HASH_ADD_INT` の第1引数はハッシュテーブル、第2引数はキーのフィールドの *名前* です。この例では `id` です。最後の引数は、追加する構造体へのポインターです。

</div>

<div id="validc" class="sidebarblock">

<div class="content">

<div class="title">

引数にフィールド名を渡すのですか？

</div>

<div class="paragraph">

`id` は構造体の *フィールド名* ですが、それを引数として渡せることを不思議に思うなら、マクロの世界へようこそ。心配は不要です。Cプリプロセッサーが、有効なCコードに展開します。

</div>

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_key_must_not_be_modified_while_in_use-->

#### 使用中のキーは変更してはいけません

<div class="paragraph">

構造体をハッシュに追加した後は、そのキーの値を変更しないでください。変更するには、要素をハッシュから削除し、キーを変更してから、再び追加してください。

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_checking_uniqueness-->

#### 一意性の確認

<div class="paragraph">

上の例では、`user_id` が、ハッシュ内の既存の要素のキーになっていないかを確認していません。**プログラムが重複するキーを生成する可能性が少しでもあるなら、明示的に一意性を確認しなければなりません**。確認は、キーをハッシュに追加する前に行います。キーがすでにハッシュにある場合は、要素を追加せず、ハッシュ内の既存の構造体を変更するだけで済みます。*同じキーを持つ2つの要素をハッシュテーブルに追加するのは誤りです*。

</div>

<div class="paragraph">

IDがハッシュにあるかどうかを確認するように、`add_user` 関数を書き直してみましょう。IDがハッシュにない場合に限り、要素を作成して追加します。それ以外の場合は、すでにある構造体を変更するだけです。

</div>

<div class="literalblock">

<div class="content">

    void add_user(int user_id, char *name) {
        struct my_struct *s;

</div>

</div>

<div class="literalblock">

<div class="content">

        HASH_FIND_INT(users, &user_id, s);  /* id already in the hash? */
        if (s == NULL) {
          s = (struct my_struct *)malloc(sizeof *s);
          s->id = user_id;
          HASH_ADD_INT(users, id, s);  /* id: name of key field */
        }
        strcpy(s->name, name);
    }

</div>

</div>

<div class="paragraph">

uthashがキーの一意性を確認しないのはなぜでしょうか。それを必要としないプログラムで、ハッシュ検索のコストを省くためです。たとえば、増加し続けて重複しないカウンターでキーを生成するプログラムが該当します。

</div>

<div class="paragraph">

ただし、置換を頻繁に行う場合は、`HASH_REPLACE` マクロを使えます。このマクロは、要素を追加する前に、同じキーを持つ要素を検索し、先に削除しようとします。置換された要素へのポインターも返すため、利用者はその要素のメモリーを解放できます。

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_passing_the_hash_pointer_into_functions-->

#### ハッシュのポインターを関数に渡す

<div class="paragraph">

上の例では `users` はグローバル変数ですが、呼び出し側がハッシュのポインターを *関数の中へ* 渡し、`add_user` で扱いたい場合はどうでしょうか。一見、引数として `users` を渡すだけでよさそうですが、それでは正しく動作しません。

</div>

<div class="literalblock">

<div class="content">

    /* bad */
    void add_user(struct my_struct *users, int user_id, char *name) {
      ...
      HASH_ADD_INT(users, id, s);
    }

</div>

</div>

<div class="paragraph">

実際には、ハッシュのポインターを指す *ポインター* を渡す必要があります。

</div>

<div class="literalblock">

<div class="content">

    /* good */
    void add_user(struct my_struct **users, int user_id, char *name) { ...
      ...
      HASH_ADD_INT(*users, id, s);
    }

</div>

</div>

<div class="paragraph">

`HASH_ADD` の中でも、ポインターを参照外ししている点に注意してください。

</div>

<div class="paragraph">

ハッシュのポインターを指すポインターを扱う必要がある理由は簡単です。ハッシュのマクロがそのポインターを変更するからです（指しているものだけでなく、*ポインター自体* を変更します）。

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_replace_item-->

### 要素の置換

<div class="paragraph">

`HASH_REPLACE` マクロは、先に要素を検索して削除しようとする点を除き、HASH_ADDマクロと同じです。要素が見つかり削除された場合は、その要素へのポインターも出力引数として返します。

</div>

</div>

