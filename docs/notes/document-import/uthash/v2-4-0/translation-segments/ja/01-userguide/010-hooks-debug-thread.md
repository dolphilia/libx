<div class="sect2">

<!--libx-source-heading:_hooks-->

### フック

<div class="paragraph">

これらのフックを使う必要はありません。uthashの動作を変更したい場合のために用意されています。一部のプラットフォームで利用できない標準ライブラリ関数を置き換えたり、uthashのメモリー割り当て方法を変更したり、特定の内部イベントに応じてコードを実行したりできます。

</div>

<div class="paragraph">

`uthash.h`ヘッダーは、これらのフックが未定義であればデフォルト値を定義します。`#undef`で定義を解除し、`uthash.h`をインクルードした後で再定義しても安全です。インクルード前に定義することもできます。たとえば、コマンドラインで`-Duthash_malloc=my_malloc`を指定します。

</div>

<div class="sect3">

<!--libx-source-heading:_specifying_alternate_memory_management_functions-->

#### 代替のメモリー管理関数の指定

<div class="paragraph">

デフォルトでは、uthashは`malloc`と`free`でメモリーを管理します。アプリケーションが独自のアロケーターを使っている場合は、uthashでもそれを使えます。

</div>

<div class="listingblock">

<div class="content">

    #include "uthash.h"

    /* undefine the defaults */
    #undef uthash_malloc
    #undef uthash_free

    /* re-define, specifying alternate functions */
    #define uthash_malloc(sz) my_malloc(sz)
    #define uthash_free(ptr, sz) my_free(ptr)

    ...

</div>

</div>

<div class="paragraph">

`uthash_free`が2つのパラメーターを受け取ることに注意してください。`sz`パラメーターは、独自にメモリーを管理する組み込みプラットフォームでの便宜のためにあります。

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_specifying_alternate_standard_library_functions-->

#### 代替の標準ライブラリ関数の指定

<div class="paragraph">

uthashは`strlen`（たとえば便利マクロ`HASH_FIND_STR`内）と`memset`（メモリーのゼロクリアにのみ使用）も使います。これらの関数を提供しないプラットフォームでは、独自の実装に置き換えられます。

</div>

<div class="listingblock">

<div class="content">

    #undef uthash_bzero
    #define uthash_bzero(a, len) my_bzero(a, len)

    #undef uthash_strlen
    #define uthash_strlen(s) my_strlen(s)

</div>

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_out_of_memory-->

#### メモリー不足

<div class="paragraph">

メモリー割り当てに失敗した場合（つまり、`uthash_malloc`関数が`NULL`を返した場合）、デフォルトでは`exit(-1)`を呼び出してプロセスを終了します。`uthash_fatal`マクロを再定義すると、この動作を変更できます。

</div>

<div class="listingblock">

<div class="content">

    #undef uthash_fatal
    #define uthash_fatal(msg) my_fatal_function(msg)

</div>

</div>

<div class="paragraph">

致命的エラーの処理関数は、プロセスを終了するか、`longjmp`で安全な場所へ戻る必要があります。割り当て失敗により、回収できない割り当て済みメモリーが残る場合があります。`uthash_fatal`の後では、ハッシュテーブルオブジェクトは使用不能とみなしてください。この状態のハッシュテーブルに対しては、`HASH_CLEAR`の実行さえ安全ではない可能性があります。

</div>

<div class="paragraph">

メモリーを割り当てられない場合に「失敗を返す」動作を有効にするには、`HASH_NONFATAL_OOM`マクロを`uthash.h`ヘッダーファイルのインクルード前に定義します。この場合、`uthash_fatal`は使われません。代わりに、割り当て失敗ごとに`uthash_nonfatal_oom(elt)`が1回呼び出されます。`elt`は、失敗を引き起こした挿入対象の要素のアドレスです。`uthash_nonfatal_oom`のデフォルト動作は何もしないことです。

</div>

<div class="listingblock">

<div class="content">

    #undef uthash_nonfatal_oom
    #define uthash_nonfatal_oom(elt) perhaps_recover((element_t *) elt)

</div>

</div>

<div class="paragraph">

`uthash_nonfatal_oom`の呼び出し前に、ハッシュテーブルは問題の挿入を行う前の状態へロールバックされます。メモリーリークは発生しません。`throw`や`longjmp`で`uthash_nonfatal_oom`ハンドラーを抜けても安全です。

</div>

<div class="paragraph">

`elt`引数は、通常、正しい要素へのポインター型です。ただし、`uthash_nonfatal_oom`が`HASH_SELECT`から呼び出される場合は、`void*`型となり、使う前にキャストする必要があります。どちらの場合でも、`elt->hh.tbl`は`NULL`です。

</div>

<div class="paragraph">

割り当て失敗が起こり得るのは、ハッシュテーブルに要素を追加するときだけです（`ADD`、`REPLACE`、`SELECT`の操作を含みます）。`uthash_free`が失敗することは許されません。

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_debug_mode-->

### デバッグモード

<div class="paragraph">

このハッシュを使うプログラムを`-DHASH_DEBUG=1`でコンパイルすると、特別な内部整合性検査モードが有効になります。このモードでは、追加または削除のたびにハッシュ全体の整合性を検査します。これはuthashソフトウェア自体のデバッグ専用であり、本番コードで使うためのものではありません。

</div>

<div class="paragraph">

`tests/`ディレクトリで`make debug`を実行すると、すべてのテストをこのモードで実行します。

</div>

<div class="paragraph">

このモードでは、ハッシュデータ構造の内部エラーがあると、`stderr`にメッセージを出力し、プログラムを終了します。

</div>

<div class="paragraph">

`UT_hash_handle`データ構造には、`next`、`prev`、`hh_next`、`hh_prev`フィールドがあります。最初の2つは「アプリケーション」の順序（挿入順、つまり項目を追加した順序）を定めます。後の2つは「バケットチェーン」の順序を定めます。これらは`UT_hash_handles`を双方向リストとして連結し、バケットチェーンを形成します。

</div>

<div class="paragraph">

`-DHASH_DEBUG=1`モードでは、次の検査を行います。

</div>

<div class="ulist">

- ハッシュ全体を2回走査します。1回目は*バケット*順、2回目は*アプリケーション*順です。

- 両方の走査で見つかった項目の総数を、保存されている項目数と照合します。

- *バケット*順の走査中に、各項目の`hh_prev`ポインターが直前に訪れた項目と等しいかを確認します。

- *アプリケーション*順の走査中に、各項目の`prev`ポインターが直前に訪れた項目と等しいかを確認します。

</div>

<div class="sidebarblock">

<div class="content">

<div class="title">

マクロのデバッグ:

</div>

<div class="paragraph">

マクロ呼び出しを含む行のコンパイラー警告は、解釈が難しい場合があります。uthashでは、1つのマクロが数十行に展開されることがあります。その場合、マクロを展開してから再コンパイルすると役立ちます。警告メッセージが、マクロ内部の正確な行を指すようになります。

</div>

<div class="paragraph">

次は、マクロを展開してから再コンパイルする例です。`test1.c`プログラム（`tests/`サブディレクトリ内）を使います。

</div>

<div class="literalblock">

<div class="content">

    gcc -E -I../src test1.c > /tmp/a.c
    egrep -v '^#' /tmp/a.c > /tmp/b.c
    indent /tmp/b.c
    gcc -o /tmp/b /tmp/b.c

</div>

</div>

<div class="paragraph">

最後の行では、すべてのマクロを展開した元のプログラム（test1.c）をコンパイルします。警告が出た場合は、示された行番号を`/tmp/b.c`で確認できます。

</div>

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_thread_safety-->

### スレッド安全性

<div class="paragraph">

uthashはマルチスレッドのプログラムで使えます。ただし、ロックは自分で行う必要があります。同時書き込みから保護するために読み書きロックを使ってください。複数の読み取りを同時に行うことは可能です（uthash 1.5以降）。

</div>

<div class="paragraph">

たとえば、pthreadsを使う場合は、次のように読み書きロックを作成できます。

</div>

<div class="literalblock">

<div class="content">

    pthread_rwlock_t lock;
    if (pthread_rwlock_init(&lock, NULL) != 0) fatal("can't create rwlock");

</div>

</div>

<div class="paragraph">

読み取り側は、`HASH_FIND`の呼び出しやハッシュ要素の反復処理を行う前に、必ず読み取りロックを取得します。

</div>

<div class="literalblock">

<div class="content">

    if (pthread_rwlock_rdlock(&lock) != 0) fatal("can't get rdlock");
    HASH_FIND_INT(elts, &i, e);
    pthread_rwlock_unlock(&lock);

</div>

</div>

<div class="paragraph">

書き込み側は、どのような更新でも、その前に排他的な書き込みロックを取得する必要があります。追加・削除・ソートはすべて更新であり、ロックが必要です。

</div>

<div class="literalblock">

<div class="content">

    if (pthread_rwlock_wrlock(&lock) != 0) fatal("can't get wrlock");
    HASH_DEL(elts, e);
    pthread_rwlock_unlock(&lock);

</div>

</div>

<div class="paragraph">

読み書きロックの代わりにミューテックスを使うこともできます。ただし、その場合、読み取りを同時に行えるスレッドは1つに制限されます。

</div>

<div class="paragraph">

読み書きロックとuthashを使うサンプルプログラムが、`tests/threads/test1.c`に含まれています。

</div>

</div>

</div>

</div>

