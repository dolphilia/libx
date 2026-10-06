---
title: "uthashユーザーガイド"
description: "uthash 2.4.0公式ユーザーガイドの全文日本語訳"
sourceURL: "https://github.com/troydhanson/uthash/blob/a49bed0b4abb7dff16c73906dcdc8a9718d582d2/doc/userguide.txt"
licenseSource: "uthash-userguide-2.4.0"
upstreamAuthors: ["Troy D. Hanson <tdh@tkhanson.net>","Arthur O'Dwyer <arthur.j.odwyer@gmail.com>"]
upstreamVersionHeader: "v2.4.0, June 2026"
---

<div id="preamble">

<div class="sectionbody">

<div class="paragraph">

v2.4.0, June 2026

</div>

<div class="paragraph">

uthashをダウンロードするには、[GitHubのプロジェクトページ](https://github.com/troydhanson/uthash)に戻ってください。著者の[他のプロジェクト](https://troydhanson.github.io/)に戻ることもできます。

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_a_hash_in_c-->

## Cで使うハッシュ

<div class="sectionbody">

<div class="paragraph">

この文書はCプログラマー向けに書かれています。この文書を読んでいる方なら、ハッシュがキーを使って要素を検索するためのものだとご存じでしょう。スクリプト言語では、ハッシュや「辞書」が日常的に使われます。Cには、言語自体にハッシュがありません。このソフトウェアは、Cの構造体を扱うハッシュテーブルを提供します。

</div>

<div class="sect2">

<!--libx-source-heading:_what_can_it_do-->

### 何ができますか？

<div class="paragraph">

このソフトウェアは、ハッシュテーブルの要素に対する次の操作をサポートします。

</div>

<div class="olist arabic">

1.  追加／置換

2.  検索

3.  削除

4.  要素数の取得

5.  反復処理

6.  ソート

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_is_it_fast-->

### 高速ですか？

<div class="paragraph">

追加・検索・削除は、通常、定数時間の操作です。これは、使用するキーの範囲とハッシュ関数の影響を受けます。

</div>

<div class="paragraph">

このハッシュは、最小限の構成と効率を目指しています。Cで約1000行です。マクロで実装されているため、自動的にインライン展開されます。ハッシュ関数がキーに適していれば高速です。既定のハッシュ関数を使うことも、性能を簡単に比較して他の複数の[組み込みハッシュ関数](#hash_functions)から選ぶこともできます。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_is_it_a_library-->

### ライブラリーですか？

<div class="paragraph">

いいえ、`uthash.h` という単一のヘッダーファイルだけです。ヘッダーファイルをプロジェクトにコピーし、次のように記述するだけで使えます。

</div>

<div class="literalblock">

<div class="content">

    #include "uthash.h"

</div>

</div>

<div class="paragraph">

uthashはヘッダーファイルだけで構成されるため、リンクするライブラリーのコードはありません。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_c_c_and_platforms-->

### C/C++とプラットフォーム

<div class="paragraph">

このソフトウェアは、CとC++のプログラムで使用できます。次の環境でテストされています。

</div>

<div class="ulist">

- Linux

- Visual Studio 2008および2010を使用するWindows

- Solaris

- OpenBSD

- FreeBSD

- Android

</div>

<div class="sect3">

<!--libx-source-heading:_test_suite-->

#### テストスイート

<div class="paragraph">

テストスイートを実行するには、`tests` ディレクトリに移動し、次の操作を行います。

</div>

<div class="ulist">

- Unixプラットフォームでは、`make` を実行します。

- Windowsでは、"do_tests_win32.cmd" バッチファイルを実行します（Visual Studioを標準以外の場所にインストールしている場合は、バッチファイルを編集できます）。

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_bsd_licensed-->

### BSDライセンス

<div class="paragraph">

このソフトウェアは、[修正版BSDライセンス](/docs/uthash/v2-4-0/ja/02-license/01-license/)で提供されています。無料で、オープンソースです。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_download_uthash-->

### uthashのダウンロード

<div class="paragraph">

<https://github.com/troydhanson/uthash>のリンクから、uthashをクローンするかzipファイルを取得してください。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_getting_help-->

### 質問するには

<div class="paragraph">

質問には[uthashのGoogleグループ](https://groups.google.com/d/forum/uthash)をご利用ください。<uthash@googlegroups.com>にメールを送ることもできます。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_contributing-->

### 貢献するには

<div class="paragraph">

GitHubを通じてプルリクエストを送ることができます。ただし、uthashのメンテナーは、装飾的な機能を追加するよりも、変更せずに保つことを重視しています。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_extras_included-->

### 同梱されている追加機能

<div class="paragraph">

uthashには3つの「追加機能」が同梱されています。リスト、動的配列、文字列を提供します。

</div>

<div class="ulist">

- [utlist.h](/docs/uthash/v2-4-0/ja/01-guides/02-utlist/)は、Cの構造体を扱う連結リストのマクロを提供します。

- [utarray.h](/docs/uthash/v2-4-0/ja/01-guides/03-utarray/)は、マクロを使って動的配列を実装します。

- [utstring.h](/docs/uthash/v2-4-0/ja/01-guides/06-utstring/)は、基本的な動的文字列を実装します。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_history-->

### 歴史

<div class="paragraph">

私は、自分の用途のために2004-2006年にuthashを書きました。当初はSourceForgeで公開していました。uthashは2006-2013年に約30,000回ダウンロードされ、その後GitHubへ移りました。商用ソフトウェア、学術研究、他のオープンソースソフトウェアに組み込まれています。また、複数のUnix系ディストリビューションの標準パッケージリポジトリにも追加されています。

</div>

<div class="paragraph">

uthashが書かれた当時、Cで汎用ハッシュテーブルを実現する選択肢は、現在よりも少数でした。現在は、より高速なハッシュテーブルや、メモリー効率が高く、APIも大きく異なるハッシュテーブルがあります。それでも、ミニバンを運転するのと同じように、uthashは便利で、多くの用途で必要な仕事をこなします。

</div>

<div class="paragraph">

2016年7月から、uthashはArthur O’Dwyerによって保守されています。

</div>

</div>

</div>

</div>

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

<div class="sect2">

<!--libx-source-heading:_bloom_filter_faster_misses-->

### Bloomフィルター（検索失敗を高速化）

<div class="paragraph">

検索失敗（`HASH_FIND` の結果が `NULL` になること）がある程度の割合で発生するプログラムは、組み込みのBloomフィルターから恩恵を受ける可能性があります。検索がすべて成功するプログラムではわずかな性能低下が生じるため、既定では無効です。また、削除を行うプログラムではBloomフィルターを使うべきではありません。正しく動作しますが、削除によってフィルターの利点が減るためです。有効にするには、次のように `-DHASH_BLOOM=n` を付けてコンパイルするだけです。

</div>

<div class="literalblock">

<div class="content">

    -DHASH_BLOOM=27

</div>

</div>

<div class="paragraph">

この数値は32までの任意の値を指定でき、以下に示すように、フィルターが使用するメモリー量を決めます。より多くのメモリーを使うとフィルターの精度が高まり、検索失敗をより早く打ち切ることで、プログラムを高速化できる可能性があります。

</div>

<div class="tableblock">

<table rules="none" width="50%" frame="border" cellspacing="0" cellpadding="4">
<caption class="title">表1. nの値ごとのBloomフィルターのサイズ</caption>
<colgroup><col width="25%">
<col width="75%">
</colgroup><thead>
<tr>
<th align="left" valign="top"> n   </th>
<th align="left" valign="top"> Bloomフィルターのサイズ（ハッシュテーブルごと）</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>16</code></p></td>
<td align="left" valign="top"><p class="table">8キロバイト</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>20</code></p></td>
<td align="left" valign="top"><p class="table">128キロバイト</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>24</code></p></td>
<td align="left" valign="top"><p class="table">2メガバイト</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>28</code></p></td>
<td align="left" valign="top"><p class="table">32メガバイト</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>32</code></p></td>
<td align="left" valign="top"><p class="table">512メガバイト</p></td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

Bloomフィルターは、性能だけに関わる機能です。ハッシュ操作の結果を変えることは一切ありません。プログラムに適しているかどうかを判断する唯一の方法は、試してみることです。Bloomフィルターのサイズとして妥当な値は16-32ビットです。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_select-->

### 選択

<div class="paragraph">

実験的な *選択* 操作が用意されています。指定した条件を満たす要素を、元のハッシュから宛先のハッシュへ挿入します。`HASH_ADD` を使う場合よりもいくらか効率よく挿入できます。選択した要素のキーについて、ハッシュ関数を再計算しないためです。この操作は、元のハッシュから要素を取り除きません。選択した要素は、両方のハッシュに存在するようになります。宛先のハッシュにすでに要素があっても構いません。選択した要素は、そこに追加されます。構造体を `HASH_SELECT` で使うには、2つ以上のハッシュハンドルが必要です（[複数テーブルへの登録](#multihash)で説明したように、構造体は同時に多くのハッシュテーブルに存在できますが、テーブルごとに別々のハッシュハンドルが必要です）。

</div>

<div class="literalblock">

<div class="content">

    user_t *users = NULL;   /* hash table of users */
    user_t *admins = NULL;  /* hash table of admins */

</div>

</div>

<div class="literalblock">

<div class="content">

    typedef struct {
        int id;
        UT_hash_handle hh;  /* handle for users hash */
        UT_hash_handle ah;  /* handle for admins hash */
    } user_t;

</div>

</div>

<div class="paragraph">

利用者を何人か追加した後、IDが1024未満の管理者だけを選択したいとしましょう。

</div>

<div class="literalblock">

<div class="content">

    #define is_admin(x) (((user_t*)x)->id < 1024)
    HASH_SELECT(ah, admins, hh, users, is_admin);

</div>

</div>

<div class="paragraph">

最初の2つの引数は *宛先* のハッシュハンドルとハッシュテーブル、次の2つは *元* のハッシュハンドルとハッシュテーブル、最後の引数は *選択条件* です。ここではマクロ `is_admin(x)` を使っていますが、関数を使っても構いません。

</div>

<div class="literalblock">

<div class="content">

    int is_admin(const void *userv) {
      user_t *user = (const user_t*)userv;
      return (user->id < 1024) ? 1 : 0;
    }

</div>

</div>

<div class="paragraph">

選択条件が常に真になる場合、この操作は実質的に、元のハッシュを宛先のハッシュへ *マージ* します。

</div>

<div class="paragraph">

`HASH_SELECT` は、元のハッシュから要素を取り除かずに宛先へ追加するため、元のハッシュテーブルは変わりません。宛先のハッシュテーブルは、元のハッシュテーブルと同じであってはなりません。

</div>

<div class="paragraph">

`HASH_SELECT` の使用例は、`tests/test36.c` に収録されています。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:hash_keycompare-->

### 別のキー比較関数を指定する

<div class="paragraph">

`HASH_FIND(hh, head, intfield, sizeof(int), out)` を呼び出すと、uthashはまず [`HASH_FUNCTION`](#hash_functions)`(intfield, sizeof(int), hashvalue)` を呼び出し、検索するバケット `b` を決めます。続いて、各要素 `elt` について、バケット `b` の中で、`elt->hh.hashv == hashvalue && elt.hh.keylen == sizeof(int) && HASH_KEYCMP(intfield, elt->hh.key, sizeof(int)) == 0` を評価します。`HASH_KEYCMP` は、`0` を返すことで、`elt` が一致しており返すべき要素であることを示します。0以外の値は、一致する要素の検索を続けるべきことを示します。

</div>

<div class="paragraph">

既定では、uthashは `HASH_KEYCMP` を `memcmp` の別名として定義します。`memcmp` を提供しないプラットフォームでは、独自の実装に置き換えられます。

</div>

<div class="listingblock">

<div class="content">

    #undef HASH_KEYCMP
    #define HASH_KEYCMP(a,b,len) bcmp(a, b, len)

</div>

</div>

<div class="paragraph">

キー比較関数を独自のものに置き換える別の理由として、単純には比較できない「キー」を使う場合があります。この場合、`HASH_FUNCTION` も独自のものに置き換える必要があります。

</div>

<div class="listingblock">

<div class="content">

    struct Key {
        short s;
        /* 2 bytes of padding */
        float f;
    };
    /* do not compare the padding bytes; do not use memcmp on floats */
    unsigned key_hash(struct Key *s) { return s + (unsigned)f; }
    bool key_equal(struct Key *a, struct Key *b) { return a.s == b.s && a.f == b.f; }

    #define HASH_FUNCTION(s,len,hashv) (hashv) = key_hash((struct Key *)s)
    #define HASH_KEYCMP(a,b,len) (!key_equal((struct Key *)a, (struct Key *)b))

</div>

</div>

<div class="paragraph">

キー比較関数を独自のものに置き換えるもう1つの理由は、正確性を犠牲にして速度を高めることです。uthashは、バケットを線形探索するとき、常に32ビットの `hashv` を先に比較し、`HASH_KEYCMP` を呼び出すのは `hashv` が等しい場合だけです。そのため、`HASH_KEYCMP` は、検索が成功するたびに少なくとも1回呼び出されます。良いハッシュ関数なら、`hashv` の比較が「偽陽性」の一致になるのは40億回に1回だけと期待できます。そのため、`HASH_KEYCMP` はほとんどの場合に `0` を返すと期待できます。検索が多数成功すると見込まれ、アプリケーションが時折の偽陽性を許容するなら、何もしない比較関数に置き換えることも考えられます。

</div>

<div class="listingblock">

<div class="content">

    #undef HASH_KEYCMP
    #define HASH_KEYCMP(a,b,len) 0  /* occasionally wrong, but very fast */

</div>

</div>

<div class="paragraph">

注意：グローバルな等値比較関数 `HASH_KEYCMP` は、`HASH_ADD_INORDER` に引数として渡す大小比較関数とは、まったく関係がありません。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:hash_functions-->

### 組み込みハッシュ関数

<div class="paragraph">

内部では、ハッシュ関数がキーをバケット番号へ変換します。既定のハッシュ関数を使うために何かする必要はありません。現在の既定はJenkinsです。

</div>

<div class="paragraph">

別の組み込みハッシュ関数を使うと、性能が向上するプログラムもあります。uthashには、別のハッシュ関数で性能が向上するかどうかを判断するための、簡単な解析ユーティリティーが同梱されています。

</div>

<div class="paragraph">

別のハッシュ関数を使うには、`-DHASH_FUNCTION=HASH_xyz` を付けてプログラムをコンパイルします。`xyz` は、以下に示すシンボル名のいずれかです。たとえば、次のようにします。

</div>

<div class="literalblock">

<div class="content">

    cc -DHASH_FUNCTION=HASH_BER -o program program.c

</div>

</div>

<div class="tableblock">

<table rules="none" width="50%" frame="border" cellspacing="0" cellpadding="4">
<caption class="title">表2. 組み込みハッシュ関数</caption>
<colgroup><col width="20%">
<col width="80%">
</colgroup><thead>
<tr>
<th align="center" valign="top">シンボル </th>
<th align="left" valign="top">   名前</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center" valign="top"><p class="table"><code>JEN</code></p></td>
<td align="left" valign="top"><p class="table">Jenkins（既定）</p></td>
</tr>
<tr>
<td align="center" valign="top"><p class="table"><code>BER</code></p></td>
<td align="left" valign="top"><p class="table">Bernstein</p></td>
</tr>
<tr>
<td align="center" valign="top"><p class="table"><code>SAX</code></p></td>
<td align="left" valign="top"><p class="table">Shift-Add-Xor</p></td>
</tr>
<tr>
<td align="center" valign="top"><p class="table"><code>OAT</code></p></td>
<td align="left" valign="top"><p class="table">One-at-a-time</p></td>
</tr>
<tr>
<td align="center" valign="top"><p class="table"><code>FNV</code></p></td>
<td align="left" valign="top"><p class="table">Fowler/Noll/Vo</p></td>
</tr>
<tr>
<td align="center" valign="top"><p class="table"><code>SFH</code></p></td>
<td align="left" valign="top"><p class="table">Paul Hsieh</p></td>
</tr>
</tbody>
</table>

</div>

<div class="sect3">

<!--libx-source-heading:_which_hash_function_is_best-->

#### どのハッシュ関数が最適ですか？

<div class="paragraph">

使用するキーの範囲に最適なハッシュ関数を簡単に判断できます。そのためには、まずデータ収集のためにプログラムを1回実行し、収集したデータを同梱の解析ユーティリティーで処理します。

</div>

<div class="paragraph">

まず、解析ユーティリティーをビルドしなければなりません。最上位のディレクトリから、次のように実行します。

</div>

<div class="literalblock">

<div class="content">

    cd tests/
    make

</div>

</div>

<div class="paragraph">

データ収集と解析の手順を、`test14.c` を使って示します（ここでは、`sh` の構文を使い、ファイル記述子3の出力をファイルへリダイレクトします）。

</div>

<div class="listingblock">

<div class="title">

keystatsの使用

</div>

<div class="content">

    % cc -DHASH_EMIT_KEYS=3 -I../src -o test14 test14.c
    % ./test14 3>test14.keys
    % ./keystats test14.keys
    fcn  ideal%     #items   #buckets  dup%  fl   add_usec  find_usec  del-all usec
    ---  ------ ---------- ---------- -----  -- ---------- ----------  ------------
    SFH   91.6%       1219        256    0%  ok         92        131            25
    FNV   90.3%       1219        512    0%  ok        107         97            31
    SAX   88.7%       1219        512    0%  ok        111        109            32
    OAT   87.2%       1219        256    0%  ok         99        138            26
    JEN   86.7%       1219        256    0%  ok         87        130            27
    BER   86.2%       1219        256    0%  ok        121        129            27

</div>

</div>

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">注意</div>
</td>
<td class="content"><code>-DHASH_EMIT_KEYS=3</code>の数値3はファイル記述子です。
プログラムが自身の用途に使っていないファイル記述子であれば、3の代わりに使えます。
<code>-DHASH_EMIT_KEYS=x</code>で有効にするデータ収集モードは、
本番のコードで使うべきではありません。</td>
</tr></tbody></table>

</div>

<div class="paragraph">

通常は、一覧の先頭にあるハッシュ関数を選べばよいでしょう。この例では `SFH` です。キーを最も均等に分布させる関数です。複数の関数で `ideal%` が同じ場合は、`find_usec` 列を見て最も高速なものを選んでください。

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_keystats_column_reference-->

#### keystatsの列リファレンス

<div class="dlist">

fcn  
ハッシュ関数のシンボル名

ideal%  
理想的なステップ数以内で検索できる、ハッシュテーブル内の要素の割合です（以下で詳しく説明します）。

\#items  
出力されたキーファイルから読み込んだキーの数

\#buckets  
すべてのキーを追加した後の、ハッシュ内のバケット数

dup%  
出力されたキーファイルで見つかった重複キーの割合です。キーの一意性を保つため、重複するキーは除去します（重複は通常起こるものです。たとえば、アプリケーションがハッシュへ要素を追加し、削除してから再び追加すると、そのキーは出力ファイルに2回書き込まれます）。

flags  
これは `ok` または `nx`（noexpand）です。後者は、[拡張の内部処理](#expansion)で説明する拡張抑制フラグが設定されている場合です。`noexpand` フラグが設定されるハッシュ関数の使用は推奨されません。

add_usec  
すべてのキーをハッシュに追加するために必要な実経過時間（マイクロ秒）

find_usec  
ハッシュ内のすべてのキーを検索するために必要な実経過時間（マイクロ秒）

del-all usec  
ハッシュ内のすべての要素を削除するために必要な実経過時間（マイクロ秒）

</div>

</div>

<div class="sect3">

<!--libx-source-heading:ideal-->

#### ideal%の意味

<div class="sidebarblock">

<div class="content">

<div class="title">

ideal%とは何ですか？

</div>

<div class="paragraph">

ハッシュ内の *n* 個の要素は、*k* 個のバケットに分配されます。理想的には、各バケットが均等に *(n/k)* 個の要素を持ちます。言い換えると、すべてのバケットを均等に使えば、バケットのチェーン内での要素の線形位置の最大値は *n/k* になります。一部のバケットが多用され、他のバケットの使用が少ない場合、多用されるバケットには、線形位置が *n/k* を超える要素が入ります。このような要素を、理想的でない要素とみなします。

</div>

<div class="paragraph">

お察しのとおり、`ideal%` は、ハッシュ内の理想的な要素の割合です。これらの要素は、バケットのチェーン内で有利な線形位置にあります。`ideal%` が100%に近づくほど、ハッシュテーブルの検索性能は定数時間に近づきます。

</div>

</div>

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:hashscan-->

### hashscan

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">注意</div>
</td>
<td class="content">このユーティリティーは、LinuxとFreeBSD（8.1以降）でのみ利用できます。</td>
</tr></tbody></table>

</div>

<div class="paragraph">

`hashscan` というユーティリティーが、`tests/` ディレクトリに同梱されています。このディレクトリで `make` を実行すると、自動的にビルドされます。このツールは、実行中のプロセスを調べ、そのプログラムのメモリー内で見つけたuthashのテーブルを報告します。各テーブルのキーを、`keystats` に入力できる形式で保存することもできます。

</div>

<div class="paragraph">

`hashscan` の使用例を示します。まず、ビルドされていることを確認します。

</div>

<div class="literalblock">

<div class="content">

    cd tests/
    make

</div>

</div>

<div class="paragraph">

`hashscan` は調べる対象として実行中のプログラムを必要とするため、ハッシュテーブルを作ってからスリープする簡単なプログラムを、試験対象として起動します。

</div>

<div class="literalblock">

<div class="content">

    ./test_sleep &
    pid: 9711

</div>

</div>

<div class="paragraph">

試験用プログラムが起動したので、`hashscan` で調べてみましょう。

</div>

<div class="literalblock">

<div class="content">

    ./hashscan 9711
    Address            ideal    items  buckets mc fl bloom/sat fcn keys saved to
    ------------------ ----- -------- -------- -- -- --------- --- -------------
    0x862e038            81%    10000     4096 11 ok 16    14% JEN

</div>

</div>

<div class="paragraph">

すべてのキーを取り出し、`keystats` で外部解析したい場合は、`-k` フラグを追加します。

</div>

<div class="literalblock">

<div class="content">

    ./hashscan -k 9711
    Address            ideal    items  buckets mc fl bloom/sat fcn keys saved to
    ------------------ ----- -------- -------- -- -- --------- --- -------------
    0x862e038            81%    10000     4096 11 ok 16    14% JEN /tmp/9711-0.key

</div>

</div>

<div class="paragraph">

これで、`./keystats /tmp/9711-0.key` を実行し、このキー集合に最も適した特性を持つハッシュ関数を解析できます。

</div>

<div class="sect3">

<!--libx-source-heading:_hashscan_column_reference-->

#### hashscanの列リファレンス

<div class="dlist">

Address  
ハッシュテーブルの仮想アドレス

ideal  
理想的なステップ数以内で検索できる、テーブル内の要素の割合です。[\[ideal\]](#ideal)については、`keystats` の節を参照してください。

items  
ハッシュテーブル内の要素数

buckets  
ハッシュテーブル内のバケット数

mc  
ハッシュテーブル内で見つかった最大チェーン長です（uthashは通常、各バケットの要素を10個未満に保とうとします。場合によっては10の倍数が基準になります）。

fl  
フラグです（`ok`、または拡張抑制フラグが設定されている場合は `NX`）。

bloom/sat  
ハッシュテーブルがBloomフィルターを使っている場合は、そのサイズを2のべき乗で表した値です（たとえば16なら、フィルターのサイズは2^16ビットです）。2番目の数値は、ビットの「飽和度」を割合で表します。割合が低いほど、キャッシュミスを素早く識別できる利点が大きくなる可能性があります。

fcn  
ハッシュ関数のシンボル名

keys saved to  
キーを保存した場合の保存先ファイル

</div>

<div class="sidebarblock">

<div class="content">

<div class="title">

hashscanの仕組み

</div>

<div class="paragraph">

hashscanを実行すると、対象プロセスにアタッチし、そのプロセスを一時的に停止します。この短い停止中に、対象の仮想メモリーを走査してuthashのハッシュテーブルのシグネチャーを探します。次に、そのシグネチャーに有効なハッシュテーブルの構造が伴っているかを調べ、見つかったものを報告します。デタッチすると、対象プロセスは通常の実行を再開します。hashscanは「読み取り専用」で行われ、対象プロセスを変更しません。実行中のプロセスの瞬間的なスナップショットを解析するため、実行のたびに異なる結果を返す場合があります。

</div>

</div>

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:expansion-->

### 拡張の内部処理

<div class="paragraph">

内部では、このハッシュはバケット数を管理し、各バケットに少数の要素だけが入るよう、十分な数のバケットを確保することを目指します。

</div>

<div class="sidebarblock">

<div class="content">

<div class="title">

バケット数が重要なのはなぜですか？

</div>

<div class="paragraph">

キーで要素を検索するとき、このハッシュは対応するバケットの要素を線形に走査します。線形走査を定数時間で行うには、各バケットの要素数に上限が必要です。必要に応じてバケット数を増やすことで、それを実現します。

</div>

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_normal_expansion-->

#### 通常の拡張

<div class="paragraph">

このハッシュは、各バケットの要素を10個未満に保とうとします。要素を追加することで、あるバケットがこの数を超える場合は、ハッシュ内のバケット数を2倍にし、新しいバケットへ要素を再分配します。理想的には、各バケットの要素数はそれまでの半分になります。

</div>

<div class="paragraph">

バケットの拡張は、必要に応じて自動的に、表に現れずに行われます。アプリケーションが、その発生時点を知る必要はありません。

</div>

<div class="sect4">

<!--libx-source-heading:_per_bucket_expansion_threshold-->

##### バケットごとの拡張しきい値

<div class="paragraph">

通常、すべてのバケットは、拡張を引き起こす同じしきい値（10個の要素）を共有しています。拡張処理中に、特定のバケットが多用されていると分かると、uthashはこの拡張しきい値をバケットごとに調整できます。

</div>

<div class="paragraph">

しきい値を調整すると、そのバケットでは10から10の倍数へ変更されます。何倍にするかは、実際のチェーン長が理想的な長さの何倍かに基づきます。ハッシュ関数が少数のバケットを多用していても、全体の分布は良好な場合に、過剰な拡張を減らすための実用的な対策です。ただし、全体の分布が悪くなりすぎると、uthashは方針を変えます。

</div>

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_inhibited_expansion-->

#### 拡張の抑制

<div class="paragraph">

通常、この仕組みを知ったり、気にしたりする必要はありません。特に、開発中に `keystats` ユーティリティーを使い、キーに適したハッシュ関数を選んだ場合はそうです。

</div>

<div class="paragraph">

ハッシュ関数によって、バケット間の要素の分布に偏りが生じる場合があります。適度な偏りなら問題ありません。チェーン長が増えると、通常のバケット拡張が行われます。ただし、キーの範囲にハッシュ関数が適していないために大きな偏りが生じると、拡張してもチェーン長を減らせない場合があります。

</div>

<div class="paragraph">

すべての要素を常にバケット0に入れる、非常に悪いハッシュ関数を想像してください。バケット数を何回2倍にしても、バケット0のチェーン長は変わりません。このような状況では、拡張を止め、*O(n)* の検索性能を受け入れるのが最善です。uthashはそう動作します。ハッシュ関数がキーに適していない場合でも、急激な破綻を避けながら性能が低下します。

</div>

<div class="paragraph">

2回連続のバケット拡張で、`ideal%` が50%未満になると、uthashはそのハッシュテーブルの拡張を抑制します。*バケット拡張抑制* フラグは、設定されると、ハッシュに要素がある限り有効なままです。拡張の抑制によって、`HASH_FIND` の性能が定数時間より悪くなる場合があります。

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_diagnostic_hooks-->

#### 診断フック

<div class="paragraph">

uthashがバケットを拡張するとき、または *バケット拡張抑制* フラグを設定するときに実行される、2つの「通知」フックがあります。アプリケーションがこれらのフックを設定したり、これらのイベントに応じて何かしたりする必要はありません。主に診断用です。通常、両方のフックは未定義なので、コンパイル時に取り除かれ、何も生成されません。

</div>

<div class="paragraph">

`uthash_expand_fyi` フックを定義すると、uthashがバケットを拡張するたびにコードを実行できます。

</div>

<div class="listingblock">

<div class="content">

    #undef uthash_expand_fyi
    #define uthash_expand_fyi(tbl) printf("expanded to %u buckets\n", tbl->num_buckets)

</div>

</div>

<div class="paragraph">

`uthash_noexpand_fyi` フックを定義すると、uthashが *バケット拡張抑制* フラグを設定するたびにコードを実行できます。

</div>

<div class="listingblock">

<div class="content">

    #undef uthash_noexpand_fyi
    #define uthash_noexpand_fyi(tbl) printf("warning: bucket expansion inhibited\n")

</div>

</div>

</div>

</div>

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

<div class="sect1">

<!--libx-source-heading:Macro_reference-->

## マクロリファレンス

<div class="sectionbody">

<div class="sect2">

<!--libx-source-heading:_convenience_macros-->

### 便利マクロ

<div class="paragraph">

便利マクロは汎用マクロと同じ操作を行いますが、必要な引数が少なくなっています。

</div>

<div class="paragraph">

便利マクロを使うには、次の条件を満たす必要があります。

</div>

<div class="olist arabic">

1.  構造体の`UT_hash_handle`フィールドの名前が`hh`であること。

2.  追加または検索では、キーフィールドの型が`int`、`char[]`、またはポインターであること。

</div>

<div class="tableblock">

<table rules="none" width="90%" frame="border" cellspacing="0" cellpadding="4">
<caption class="title">表3. 便利マクロ</caption>
<colgroup><col width="25%">
<col width="75%">
</colgroup><thead>
<tr>
<th align="left" valign="top">マクロ</th>
<th align="left" valign="top">引数</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_INT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_INT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr, replaced_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_FIND_INT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, key_ptr, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_STR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_STR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr, replaced_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_FIND_STR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, key_ptr, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_PTR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_PTR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr, replaced_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_FIND_PTR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, key_ptr, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_DEL</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_SORT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_COUNT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head)</code></p></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_general_macros-->

### 汎用マクロ

<div class="paragraph">

これらのマクロは、ハッシュ内の項目を追加・検索・削除・ソートします。`UT_hash_handle`の名前が`hh`以外の場合や、キーのデータ型が`int`または`char[]`ではない場合には、汎用マクロを使う必要があります。

</div>

<div class="tableblock">

<table rules="none" width="90%" frame="border" cellspacing="0" cellpadding="4">
<caption class="title">表4. 汎用マクロ</caption>
<colgroup><col width="25%">
<col width="75%">
</colgroup><thead>
<tr>
<th align="left" valign="top">マクロ</th>
<th align="left" valign="top">引数</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_BYHASHVALUE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, hashv, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_KEYPTR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_KEYPTR_BYHASHVALUE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, hashv, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_BYHASHVALUE_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, hashv, item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_KEYPTR_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_KEYPTR_BYHASHVALUE_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, hashv, item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, item_ptr, replaced_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_BYHASHVALUE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, hashv, item_ptr, replaced_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, item_ptr, replaced_item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_BYHASHVALUE_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, hashv, item_ptr, replaced_item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_FIND</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_FIND_BYHASHVALUE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, hashv, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_DELETE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_VALUE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(key_ptr, key_len, hashv)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_SRT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_CNT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_CLEAR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_SELECT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(dst_hh_name, dst_head, src_hh_name, src_head, condition)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ITER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, item_ptr, tmp_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_OVERHEAD</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head)</code></p></td>
</tr>
</tbody>
</table>

</div>

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">注意</div>
</td>
<td class="content"><code>HASH_ADD_KEYPTR</code>は、構造体がキー自体ではなく、
キーへのポインターを保持している場合に使います。</td>
</tr></tbody></table>

</div>

<div class="paragraph">

`HASH_VALUE`と`..._BYHASHVALUE`マクロは、主として、異なるハッシュテーブル内の異なる構造体が同一のキーを持つという特殊な場合に使う性能向上の仕組みです。ハッシュ値を一度だけ求めて`..._BYHASHVALUE`マクロへ渡すことで、ハッシュ値を再計算するコストを省けます。

</div>

<div class="sect3">

<!--libx-source-heading:_argument_descriptions-->

#### 引数の説明

<div class="dlist">

hh_name  
構造体内の`UT_hash_handle`フィールドの名前です。慣例では`hh`とします。

head  
ハッシュの「先頭」として働く構造体ポインター変数です。最初はハッシュに追加された最初の項目を指すため、この名前で呼ばれます。

keyfield_name  
構造体内のキーフィールドの名前です（複数フィールドのキーでは、キーの最初のフィールドです）。マクロに慣れていないと、フィールド名をパラメーターとして渡すのは奇妙に見えるかもしれません。[注意](#validc)を参照してください。

key_len  
キーフィールドの長さをバイト単位で指定します。たとえば整数キーでは`sizeof(int)`、文字列キーでは`strlen(key)`です（複数フィールドのキーについては[こちらの注意](#multifield_note)を参照してください）。

key_ptr  
`HASH_FIND`では、ハッシュ内で検索するキーへのポインターです（ポインターなので、リテラル値を直接渡すことはできません）。`HASH_ADD_KEYPTR`では、追加する項目のキーのアドレスです。

hashv  
指定したキーのハッシュ値です。`..._BYHASHVALUE`マクロでは入力パラメーター、`HASH_VALUE`では出力パラメーターです。同じキーを繰り返し検索する場合、キャッシュしたハッシュ値の再利用で性能を向上できることがあります。

item_ptr  
追加・削除・置換・検索する構造体へのポインター、または反復処理中の現在のポインターです。`HASH_ADD`、`HASH_DELETE`、`HASH_REPLACE`マクロでは入力パラメーター、`HASH_FIND`と`HASH_ITER`では出力パラメーターです（`HASH_ITER`で反復処理を行う場合、`tmp_item_ptr`は`item_ptr`と同じ型の別変数で、内部で使われます）。

replaced_item_ptr  
`HASH_REPLACE`マクロで使います。置換された項目を指すように設定される出力パラメーターです（置換される項目がなければNULLに設定されます）。

cmp  
2つの引数（比較する項目へのポインター）を受け取り、最初の項目を2番目の項目より前・同順位・後のどこに並べるかを示すintを返す比較関数へのポインターです（`strcmp`と同様）。

condition  
引数を1つ受け取る関数またはマクロです。引数は構造体へのvoidポインターで、適切な構造体型にキャストする必要があります。その構造体を宛先ハッシュへの追加対象として「選択」する場合、関数またはマクロは非ゼロの値を返す必要があります。

</div>

</div>

</div>

</div>

</div>
