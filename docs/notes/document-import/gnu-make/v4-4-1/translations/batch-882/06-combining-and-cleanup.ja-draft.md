<div class="gnu-original-content">

<div id="Combine-By-Prerequisite" class="section-level-extent">

<span id="Another-Style-of-Makefile"></span>

### 2.6 別のMakefileの書き方

<span id="index-combining-rules-by-prerequisite" class="index-entry-id"></span>

makefileのオブジェクトファイルが暗黙のルールだけで作られる場合は、別の書き方もできます。この書き方では、ターゲットではなく前提条件に基づいて項目をまとめます。次のようになります。

<div class="example">

<div class="group">

    objects = main.o kbd.o command.o display.o \
              insert.o search.o files.o utils.o

    edit : $(objects)
            cc -o edit $(objects)

    $(objects) : defs.h
    kbd.o command.o files.o : command.h
    display.o insert.o search.o files.o : buffer.h



</div>

</div>

ここでは、`defs.h`をすべてのオブジェクトファイルの前提条件に指定しています。`command.h`と`buffer.h`は、それぞれについて列挙された特定のオブジェクトファイルの前提条件です。

こちらの方がよいかどうかは好みの問題です。よりコンパクトになりますが、各ターゲットに関する情報を1か所にまとめる方が分かりやすいと感じ、この書き方を好まない人もいます。

------------------------------------------------------------------------

</div>

<div id="Cleanup" class="section-level-extent">

<span id="Rules-for-Cleaning-the-Directory"></span>

### 2.7 ディレクトリを片付けるルール

<span id="index-cleaning-up" class="index-entry-id"></span> <span id="index-removing_002c-to-clean-up" class="index-entry-id"></span>

ルールを書きたくなる作業は、プログラムのコンパイルだけではありません。makefileには、コンパイル以外の作業もいくつか記述するのが一般的です。たとえば、すべてのオブジェクトファイルと実行可能ファイルを削除して、ディレクトリを`clean`な状態にする方法です。

<span id="index-clean-target-1" class="index-entry-id"></span>

この例のエディタを片付ける`make`のルールは、次のように書けます。

<div class="example">

<div class="group">

    clean:
            rm edit $(objects)



</div>

</div>

実際には、予想外の状況に対処するため、もう少し複雑に書きたいことがあります。次のようにします。

<div class="example">

<div class="group">

    .PHONY : clean
    clean :
            -rm edit $(objects)



</div>

</div>

これにより、`clean`という実在するファイルがあっても`make`が混乱せず、`rm`でエラーが起きても処理を続けます。（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Phony-Targets" class="ref">仮のターゲット</a>と<a href="/docs/gnu-make/source/v4-4-1/manual.html#Errors" class="ref">レシピのエラー</a>を参照してください。）

このようなルールは、makefileの先頭に置いてはいけません。デフォルトで実行したいわけではないからです！ したがって、このmakefileの例では、エディタを再コンパイルする`edit`のルールをデフォルトのゴールのままにします。

`clean`は`edit`の前提条件ではないため、引数なしで`make`コマンドを実行しても、このルールはまったく実行されません。実行するには、`make clean`と入力する必要があります。<a href="/docs/gnu-make/source/v4-4-1/manual.html#Running" class="xref">makeの実行方法</a>を参照してください。

------------------------------------------------------------------------

</div>

</div>
