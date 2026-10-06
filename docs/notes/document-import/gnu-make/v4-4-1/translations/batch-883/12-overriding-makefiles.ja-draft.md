<div class="gnu-original-content">

<div id="Overriding-Makefiles" class="section-level-extent">

<span id="Overriding-Part-of-Another-Makefile"></span>

### 3.6 ほかのMakefileの一部を上書きする

<span id="index-overriding-makefiles" class="index-entry-id"></span> <span id="index-makefile_002c-overriding" class="index-entry-id"></span>

ほかのmakefileとほとんど同じmakefileがあると便利な場合があります。多くの場合、`include`ディレクティブで一方をもう一方に読み込み、ターゲットや変数定義を追加できます。ただし、2つのmakefileが同じターゲットに異なるレシピを指定することはできません。しかし、別の方法があります。

<span id="index-match_002danything-rule_002c-used-to-override" class="index-entry-id"></span>

読み込み側のmakefile（ほかのmakefileを読み込みたい方）では、何にでも一致するパターンルールを使えます。読み込み側のmakefileにある情報では作れないターゲットを作り直すときは、別のmakefileを調べるよう`make`に指定するのです。パターンルールの詳細は、<a href="/docs/gnu-make/source/v4-4-1/manual.html#Pattern-Rules" class="xref">パターンルールの定義と再定義</a>を参照してください。

たとえば、ターゲット`foo`（およびほかのターゲット）の作り方を記述した`Makefile`がある場合、次の内容の`GNUmakefile`を書けます。

<div class="example">

    foo:
            frobnicate > foo

    %: force
            @$(MAKE) -f Makefile $@
    force: ;



</div>

`make foo`と実行すると、`make`は`GNUmakefile`を見つけて読み込み、`foo`を作るために`frobnicate > foo`というレシピを実行する必要があると判断します。`make bar`と実行すると、`make`は`GNUmakefile`で`bar`を作る方法を見つけられないため、パターンルールのレシピである`make -f Makefile bar`を使います。`Makefile`に`bar`を更新するルールがあれば、`make`はそれを適用します。`GNUmakefile`が作り方を指定していない、ほかのターゲットについても同様です。

この仕組みでは、パターンルールのパターンが単なる`%`なので、あらゆるターゲットに一致します。このルールは前提条件として`force`を指定し、ターゲットファイルがすでに存在する場合でも、確実にレシピを実行させます。`force`ターゲットには空のレシピを指定し、`make`がそれを作るための暗黙のルールを探さないようにします。そうしなければ、同じ「何にでも一致する」ルールを`force`自体にも適用し、前提条件のループを作ってしまいます！

------------------------------------------------------------------------

</div>

</div>
