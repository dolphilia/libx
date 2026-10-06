<div class="gnu-original-content">

<div id="Simple-Makefile" class="section-level-extent">

<span id="A-Simple-Makefile"></span>

### 2.2 簡単なMakefile

<span id="index-simple-makefile" class="index-entry-id"></span> <span id="index-makefile_002c-simple" class="index-entry-id"></span>

次は、`edit`という実行可能ファイルが8つのオブジェクトファイルに依存し、そのオブジェクトファイルがさらに8つのCソースファイルと3つのヘッダーファイルに依存する関係を記述した、分かりやすいmakefileです。

この例では、すべてのCファイルが`defs.h`をインクルードします。ただし、編集コマンドを定義するファイルだけが`command.h`を、エディタのバッファを変更する低水準のファイルだけが`buffer.h`をインクルードします。

<div class="example">

<div class="group">

    edit : main.o kbd.o command.o display.o \
           insert.o search.o files.o utils.o
            cc -o edit main.o kbd.o command.o display.o \
                       insert.o search.o files.o utils.o

    main.o : main.c defs.h
            cc -c main.c
    kbd.o : kbd.c defs.h command.h
            cc -c kbd.c
    command.o : command.c defs.h command.h
            cc -c command.c
    display.o : display.c defs.h buffer.h
            cc -c display.c
    insert.o : insert.c defs.h buffer.h
            cc -c insert.c
    search.o : search.c defs.h buffer.h
            cc -c search.c
    files.o : files.c defs.h buffer.h command.h
            cc -c files.c
    utils.o : utils.c defs.h
            cc -c utils.c
    clean :
            rm edit main.o kbd.o command.o display.o \
               insert.o search.o files.o utils.o



</div>

</div>

各長い行は、バックスラッシュと改行を使って2行に分けています。これは1本の長い行を使うのと同じですが、読みやすくなります。<a href="/docs/gnu-make/v4-4-1/en/01-guide/07-makefile-contents/#Splitting-Lines" class="xref">長い行の分割（英語原文）</a>を参照してください。 <span id="index-continuation-lines" class="index-entry-id"></span> <span id="index-_005c-_0028backslash_0029_002c-for-continuation-lines" class="index-entry-id"></span> <span id="index-backslash-_0028_005c_0029_002c-for-continuation-lines" class="index-entry-id"></span> <span id="index-quoting-newline_002c-in-makefile" class="index-entry-id"></span> <span id="index-newline_002c-quoting_002c-in-makefile" class="index-entry-id"></span>

このmakefileを使って`edit`という実行可能ファイルを作るには、次のように入力します。

<div class="example">

    make



</div>

このmakefileを使って、実行可能ファイルとすべてのオブジェクトファイルをディレクトリから削除するには、次のように入力します。

<div class="example">

    make clean



</div>

このmakefileの例では、実行可能ファイル`edit`や、オブジェクトファイル`main.o`、`kbd.o`がターゲットです。前提条件は`main.c`や`defs.h`などのファイルです。実際、各`.o`ファイルはターゲットでも前提条件でもあります。レシピには`cc -c main.c`や`cc -c kbd.c`などがあります。

ターゲットがファイルの場合、その前提条件のいずれかが変更されると、再コンパイルまたは再リンクが必要になります。また、前提条件自体が自動生成されるファイルである場合は、それを先に更新する必要があります。この例では、`edit`は8つのオブジェクトファイルそれぞれに依存し、オブジェクトファイル`main.o`はソースファイル`main.c`とヘッダーファイル`defs.h`に依存します。

ターゲットと前提条件を含む各行の後に、レシピを続けられます。レシピはターゲットファイルの更新方法を指定します。makefileのほかの行と区別するため、レシピの各行の先頭にはタブ文字（または`.RECIPEPREFIX`変数で指定した文字。<a href="/docs/gnu-make/source/v4-4-1/manual.html#Special-Variables" class="pxref">その他の特殊変数</a>を参照）を置かなければなりません。（`make`は、レシピがどのように動作するかを一切知りません。ターゲットファイルを正しく更新するレシピを用意するのは、あなたの役目です。`make`がするのは、ターゲットファイルの更新が必要になったときに、指定されたレシピを実行することだけです。） <span id="index-recipe" class="index-entry-id"></span>

ターゲット`clean`はファイルではなく、単なる操作の名前です。通常、このルールの操作を実行したいわけではないので、`clean`はほかのどのルールの前提条件にもなっていません。そのため、明示的に指示しない限り、`make`はこれについて何もしません。このルールはほかのルールの前提条件になっていないだけでなく、自分自身の前提条件も持ちません。したがって、このルールの唯一の目的は、指定されたレシピを実行することです。ファイルを表さず、単に操作を表すターゲットを*仮のターゲット*（phony target）と呼びます。この種のターゲットについては<a href="/docs/gnu-make/source/v4-4-1/manual.html#Phony-Targets" class="xref">仮のターゲット</a>を参照してください。`rm`などのコマンドからのエラーを`make`に無視させる方法については、<a href="/docs/gnu-make/source/v4-4-1/manual.html#Errors" class="xref">レシピのエラー</a>を参照してください。 <span id="index-clean-target" class="index-entry-id"></span> <span id="index-rm-_0028shell-command_0029" class="index-entry-id"></span>

------------------------------------------------------------------------

</div>

</div>
