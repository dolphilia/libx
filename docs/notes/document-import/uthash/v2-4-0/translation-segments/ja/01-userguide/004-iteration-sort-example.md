<div class="sect2">

<!--libx-source-heading:_iterating_and_sorting-->

### 反復処理とソート

<div class="paragraph">

ハッシュの先頭から `hh.next` ポインターをたどると、要素を順に処理できます。

</div>

<div class="listingblock">

<div class="title">

ハッシュ内のすべての要素を順に処理する

</div>

<div class="content">

    void print_users() {
        struct my_struct *s;

        for (s = users; s != NULL; s = s->hh.next) {
            printf("user id %d: name %s\n", s->id, s->name);
        }
    }

</div>

</div>

<div class="paragraph">

`hh.prev` ポインターもあり、既知の任意の要素から始めて、ハッシュを逆順にたどれます。

</div>

<div class="sect3">

<!--libx-source-heading:deletesafe-->

#### 削除を安全に行える反復処理

<div class="paragraph">

上の例では、`s` を *for* ループの本体で削除してメモリーを解放すると、安全ではありません（ループを繰り返すたびに `s` を参照外しするためです）。正しく書き直すのは簡単で、`s->hh.next` ポインターを一時変数にコピーし、解放する *前に* 次の要素を保存してから、`s` のメモリーを解放すればよいのです。ただし、この処理はよく必要になるため、削除を安全に行える反復処理のマクロ `HASH_ITER` が用意されています。これは `for` ループのヘッダーに展開されます。直前の例は、次のように書き直せます。

</div>

<div class="literalblock">

<div class="content">

    struct my_struct *s, *tmp;

</div>

</div>

<div class="literalblock">

<div class="content">

    HASH_ITER(hh, users, s, tmp) {
        printf("user id %d: name %s\n", s->id, s->name);
        /* ... it is safe to delete and free s here */
    }

</div>

</div>

<div class="sidebarblock">

<div class="content">

<div class="title">

ハッシュは双方向連結リストでもあります。

</div>

<div class="paragraph">

ハッシュ内の要素を前後にたどれるのは、`hh.prev` と `hh.next` フィールドがあるためです。このポインターを繰り返したどれば、ハッシュ内のすべての要素に到達できるので、ハッシュは双方向連結リストでもあります。

</div>

</div>

</div>

<div class="paragraph">

C++のプログラムでuthashを使う場合は、`for` の反復処理に追加のキャストが必要です。たとえば、`s = static_cast<my_struct*>(s->hh.next)` とします。

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_sorting-->

#### ソート

<div class="paragraph">

`hh.next` ポインターをたどると、ハッシュ内の要素は「挿入順」で処理されます。`HASH_SORT` を使うと、要素を別の順序に並べ替えられます。

</div>

<div class="literalblock">

<div class="content">

    HASH_SORT(users, name_sort);

</div>

</div>

<div class="paragraph">

第2引数は、比較関数へのポインターです。この関数は、比較する2つの要素へのポインターを引数として受け取らなければなりません。また、`int` を返し、第1の要素が第2の要素より前に並ぶ場合は0未満、同じ場合は0、後に並ぶ場合は0より大きい値にしなければなりません（標準Cライブラリーの `strcmp` や `qsort` と同じ規約です）。

</div>

<div class="literalblock">

<div class="content">

    int sort_function(void *a, void *b) {
      /* compare a to b (cast a and b appropriately)
       * return (int) -1 if (a < b)
       * return (int)  0 if (a == b)
       * return (int)  1 if (a > b)
       */
    }

</div>

</div>

<div class="paragraph">

以下の `name_sort` と `id_sort` は、ソート関数の2つの例です。

</div>

<div class="listingblock">

<div class="title">

ハッシュ内の要素をソートする

</div>

<div class="content">

    int by_name(const struct my_struct *a, const struct my_struct *b) {
        return strcmp(a->name, b->name);
    }

    int by_id(const struct my_struct *a, const struct my_struct *b) {
        return (a->id - b->id);
    }

    void sort_by_name() {
        HASH_SORT(users, by_name);
    }

    void sort_by_id() {
        HASH_SORT(users, by_id);
    }

</div>

</div>

<div class="paragraph">

ハッシュ内の要素をソートすると、先頭の要素の位置が変わる場合があります。上の例では、`users` は `HASH_SORT` を呼び出した後に別の構造体を指す場合があります。

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_a_complete_example-->

### 完全な例

<div class="paragraph">

これまでのコードをまとめ、`main()` 関数を追加して、動作する例を作ります。

</div>

<div class="paragraph">

このコードを `example.c` というファイルに保存し、`uthash.h` と同じディレクトリに置くと、次のようにコンパイルして実行できます。

</div>

<div class="literalblock">

<div class="content">

    cc -o example example.c
    ./example

</div>

</div>

<div class="paragraph">

表示される指示に従って、プログラムを試してください。

</div>

<div class="listingblock">

<div class="title">

完全なプログラム

</div>

<div class="content">

    #include <stdio.h>   /* printf */
    #include <stdlib.h>  /* atoi, malloc */
    #include <string.h>  /* strcpy */
    #include "uthash.h"

    struct my_struct {
        int id;                    /* key */
        char name[21];
        UT_hash_handle hh;         /* makes this structure hashable */
    };

    struct my_struct *users = NULL;

    void add_user(int user_id, const char *name)
    {
        struct my_struct *s;

        HASH_FIND_INT(users, &user_id, s);  /* id already in the hash? */
        if (s == NULL) {
            s = (struct my_struct*)malloc(sizeof *s);
            s->id = user_id;
            HASH_ADD_INT(users, id, s);  /* id is the key field */
        }
        strcpy(s->name, name);
    }

    struct my_struct *find_user(int user_id)
    {
        struct my_struct *s;

        HASH_FIND_INT(users, &user_id, s);  /* s: output pointer */
        return s;
    }

    void delete_user(struct my_struct *user)
    {
        HASH_DEL(users, user);  /* user: pointer to deletee */
        free(user);
    }

    void delete_all()
    {
        struct my_struct *current_user;
        struct my_struct *tmp;

        HASH_ITER(hh, users, current_user, tmp) {
            HASH_DEL(users, current_user);  /* delete it (users advances to next) */
            free(current_user);             /* free it */
        }
    }

    void print_users()
    {
        struct my_struct *s;

        for (s = users; s != NULL; s = (struct my_struct*)(s->hh.next)) {
            printf("user id %d: name %s\n", s->id, s->name);
        }
    }

    int by_name(const struct my_struct *a, const struct my_struct *b)
    {
        return strcmp(a->name, b->name);
    }

    int by_id(const struct my_struct *a, const struct my_struct *b)
    {
        return (a->id - b->id);
    }

    const char *getl(const char *prompt)
    {
        static char buf[21];
        char *p;
        printf("%s? ", prompt); fflush(stdout);
        p = fgets(buf, sizeof(buf), stdin);
        if (p == NULL || (p = strchr(buf, '\n')) == NULL) {
            puts("Invalid input!");
            exit(EXIT_FAILURE);
        }
        *p = '\0';
        return buf;
    }

    int main()
    {
        int id = 1;
        int running = 1;
        struct my_struct *s;
        int temp;

        while (running) {
            printf(" 1. add user\n");
            printf(" 2. add or rename user by id\n");
            printf(" 3. find user\n");
            printf(" 4. delete user\n");
            printf(" 5. delete all users\n");
            printf(" 6. sort items by name\n");
            printf(" 7. sort items by id\n");
            printf(" 8. print users\n");
            printf(" 9. count users\n");
            printf("10. quit\n");
            switch (atoi(getl("Command"))) {
                case 1:
                    add_user(id++, getl("Name (20 char max)"));
                    break;
                case 2:
                    temp = atoi(getl("ID"));
                    add_user(temp, getl("Name (20 char max)"));
                    break;
                case 3:
                    s = find_user(atoi(getl("ID to find")));
                    printf("user: %s\n", s ? s->name : "unknown");
                    break;
                case 4:
                    s = find_user(atoi(getl("ID to delete")));
                    if (s) {
                        delete_user(s);
                    } else {
                        printf("id unknown\n");
                    }
                    break;
                case 5:
                    delete_all();
                    break;
                case 6:
                    HASH_SORT(users, by_name);
                    break;
                case 7:
                    HASH_SORT(users, by_id);
                    break;
                case 8:
                    print_users();
                    break;
                case 9:
                    temp = HASH_COUNT(users);
                    printf("there are %d users\n", temp);
                    break;
                case 10:
                    running = 0;
                    break;
            }
        }

        delete_all();  /* free any structures */
        return 0;
    }

</div>

</div>

<div class="paragraph">

このプログラムは、配布物の `tests/example.c` に収録されています。そのディレクトリで `make example` を実行すれば、簡単にコンパイルできます。

</div>

</div>

</div>

</div>

