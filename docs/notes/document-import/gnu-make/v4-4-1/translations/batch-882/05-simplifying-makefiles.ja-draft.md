<div class="gnu-original-content">

<div id="Variables-Simplify" class="section-level-extent">

<span id="Variables-Make-Makefiles-Simpler"></span>

### 2.4 変数でMakefileを簡単にする

<span id="index-variables" class="index-entry-id"></span> <span id="index-simplifying-with-variables" class="index-entry-id"></span>

この例では、`edit`のルールにすべてのオブジェクトファイルを2回列挙する必要がありました（再掲します）。

<div class="example">

<div class="group">

    edit : main.o kbd.o command.o display.o \
                  insert.o search.o files.o utils.o
            cc -o edit main.o kbd.o command.o display.o \
                       insert.o search.o files.o utils.o



</div>

</div>

<span id="index-objects" class="index-entry-id"></span>

このような重複は間違いを招きがちです。新しいオブジェクトファイルを追加するとき、片方のリストには追加しても、もう片方を忘れるかもしれません。変数を使えば、この危険を取り除き、makefileを簡単にできます。*変数*は、文字列を一度定義しておき、後で複数の場所で置換できるようにするものです（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Using-Variables" class="pxref">変数の使い方</a>を参照）。

<span id="index-OBJECTS" class="index-entry-id"></span> <span id="index-objs" class="index-entry-id"></span> <span id="index-OBJS" class="index-entry-id"></span> <span id="index-obj" class="index-entry-id"></span> <span id="index-OBJ" class="index-entry-id"></span>

各makefileには、すべてのオブジェクトファイル名のリストを値とする、`objects`、`OBJECTS`、`objs`、`OBJS`、`obj`、`OBJ`などの名前の変数を用意するのが一般的です。たとえば`objects`という変数は、makefileに次のような行を書いて定義します。

<div class="example">

<div class="group">

    objects = main.o kbd.o command.o display.o \
              insert.o search.o files.o utils.o



</div>

</div>

その後、オブジェクトファイル名のリストを置きたい各場所では、`$(objects)`と書いて変数の値で置換できます（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Using-Variables" class="pxref">変数の使い方</a>を参照）。

オブジェクトファイルに変数を使うと、簡単なmakefileの全体は次のようになります。

<div class="example">

<div class="group">

    objects = main.o kbd.o command.o display.o \
              insert.o search.o files.o utils.o

    edit : $(objects)
            cc -o edit $(objects)
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
            rm edit $(objects)



</div>

</div>

------------------------------------------------------------------------

</div>

<div id="make-Deduces" class="section-level-extent">

<span id="Letting-make-Deduce-the-Recipes"></span>

### 2.5 `make`にレシピを推定させる

<span id="index-deducing-recipes-_0028implicit-rules_0029" class="index-entry-id"></span> <span id="index-implicit-rule_002c-introduction-to" class="index-entry-id"></span> <span id="index-rule_002c-implicit_002c-introduction-to" class="index-entry-id"></span>

個々のCソースファイルをコンパイルするレシピを明記する必要はありません。`make`が判断できるからです。`make`には、対応する名前の`.c`ファイルから、`cc -c`コマンドを使って`.o`ファイルを更新する*暗黙のルール*があります。たとえば、`main.c`を`main.o`にコンパイルするには、`cc -c main.c -o main.o`というレシピを使います。したがって、オブジェクトファイルのルールからレシピを省略できます。<a href="/docs/gnu-make/source/v4-4-1/manual.html#Implicit-Rules" class="xref">暗黙のルールの使用</a>を参照してください。

このように`.c`ファイルが自動的に使われる場合、そのファイルは前提条件のリストにも自動的に追加されます。したがって、レシピを省略するなら、前提条件から`.c`ファイルも省略できます。

これら2つの変更を加え、前述の`objects`変数も使った、例の全体を示します。

<div class="example">

<div class="group">

    objects = main.o kbd.o command.o display.o \
              insert.o search.o files.o utils.o

    edit : $(objects)
            cc -o edit $(objects)

    main.o : defs.h
    kbd.o : defs.h command.h
    command.o : defs.h command.h
    display.o : defs.h buffer.h
    insert.o : defs.h buffer.h
    search.o : defs.h buffer.h
    files.o : defs.h buffer.h command.h
    utils.o : defs.h

    .PHONY : clean
    clean :
            rm edit $(objects)



</div>

</div>

実際には、このようにmakefileを書きます。（`clean`に関する複雑な点は別の場所で説明します。<a href="/docs/gnu-make/source/v4-4-1/manual.html#Phony-Targets" class="ref">仮のターゲット</a>と<a href="/docs/gnu-make/source/v4-4-1/manual.html#Errors" class="ref">レシピのエラー</a>を参照してください。）

暗黙のルールはとても便利なので、重要です。頻繁に使われているのを目にするでしょう。

------------------------------------------------------------------------

</div>

</div>
