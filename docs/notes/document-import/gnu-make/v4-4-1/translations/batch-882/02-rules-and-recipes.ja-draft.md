<div class="gnu-original-content">

<div id="Introduction">

<span id="An-Introduction-to-Makefiles"></span>

## 2 Makefile入門

`make`に何をするか伝えるには、*makefile*というファイルが必要です。最もよくある使い方では、makefileはプログラムのコンパイルとリンクの方法を`make`に伝えます。 <span id="index-makefile" class="index-entry-id"></span>

この章では、8つのCソースファイルと3つのヘッダーファイルからなるテキストエディタを、どのようにコンパイルしてリンクするかを記述した、簡単なmakefileを説明します。またmakefileは、明示的に要求されたときに、そのほかのさまざまなコマンドを実行する方法も`make`に伝えられます（たとえば、後片付けとして特定のファイルを削除する操作です）。より複雑なmakefileの例については、<a href="/docs/gnu-make/source/v4-4-1/manual.html#Complex-Makefile" class="ref">複雑なMakefileの例</a>を参照してください。

`make`がエディタを再コンパイルするときは、変更されたCソースファイルをそれぞれ再コンパイルする必要があります。ヘッダーファイルが変更された場合は、安全のため、そのヘッダーをインクルードする各Cソースファイルを再コンパイルする必要があります。各コンパイルでは、ソースファイルに対応するオブジェクトファイルが生成されます。最後に、ソースファイルが1つでも再コンパイルされた場合は、新しく作ったものも以前のコンパイルから残っているものも含め、すべてのオブジェクトファイルをまとめてリンクし、新しい実行可能なエディタを生成する必要があります。 <span id="index-recompilation" class="index-entry-id"></span> <span id="index-editor" class="index-entry-id"></span>

------------------------------------------------------------------------

</div>

<div id="Rule-Introduction" class="section-level-extent">

<span id="What-a-Rule-Looks-Like"></span>

### 2.1 ルールの形

<span id="index-rule_002c-introduction-to" class="index-entry-id"></span> <span id="index-makefile-rule-parts" class="index-entry-id"></span> <span id="index-parts-of-makefile-rule" class="index-entry-id"></span>

簡単なmakefileは、次の形をした「ルール」で構成されます。

<span id="index-targets_002c-introduction-to" class="index-entry-id"></span> <span id="index-prerequisites_002c-introduction-to" class="index-entry-id"></span> <span id="index-recipes_002c-introduction-to" class="index-entry-id"></span>

<div class="example">

<div class="group">

    target ... : prerequisites ...
            recipe
            ...
            ...



</div>

</div>

*ターゲット*は、通常、プログラムによって生成されるファイルの名前です。実行可能ファイルやオブジェクトファイルがその例です。ターゲットは`clean`のように、実行する操作の名前でもかまいません（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Phony-Targets" class="pxref">仮のターゲット</a>を参照）。

*前提条件*（prerequisite）は、ターゲットを作るための入力として使われるファイルです。ターゲットは複数のファイルに依存することがよくあります。

<span id="index-tabs-in-rules" class="index-entry-id"></span>

*レシピ*は`make`が実行する操作です。レシピには複数のコマンドを含められ、同じ行に書いても、それぞれ別の行に書いてもかまいません。**注意してください：** レシピの各行の先頭にはタブ文字を置く必要があります！ これは、気づいていない人が引っかかりやすい分かりにくい決まりです。レシピの先頭にタブ以外の文字を使いたい場合は、`.RECIPEPREFIX`変数に別の文字を設定できます（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Special-Variables" class="pxref">その他の特殊変数</a>を参照）。

通常、レシピは前提条件を持つルールの中にあり、前提条件のいずれかが変更された場合にターゲットファイルを作る役割を担います。ただし、ターゲットのレシピを指定するルールに、必ず前提条件が必要なわけではありません。たとえば、ターゲット`clean`に関連する削除コマンドを含むルールには、前提条件がありません。

つまり、*ルール*は、そのルールのターゲットである特定のファイルを、いつ、どのように作り直すかを説明します。`make`は前提条件を使ってレシピを実行し、ターゲットを作成または更新します。ルールは、ある操作をいつ、どのように実行するかを説明することもできます。<a href="/docs/gnu-make/source/v4-4-1/manual.html#Rules" class="xref">ルールの書き方</a>を参照してください。

makefileにはルール以外のテキストも含められますが、簡単なmakefileならルールだけで十分です。ルールはこのひな形より多少複雑に見えることもありますが、どれもおおむねこのパターンに当てはまります。

------------------------------------------------------------------------

</div>

</div>
