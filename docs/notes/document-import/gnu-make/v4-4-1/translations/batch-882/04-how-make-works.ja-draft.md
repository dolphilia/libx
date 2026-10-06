<div class="gnu-original-content">

<div id="How-Make-Works" class="section-level-extent">

<span id="How-make-Processes-a-Makefile"></span>

### 2.3 `make`によるMakefileの処理

<span id="index-processing-a-makefile" class="index-entry-id"></span> <span id="index-makefile_002c-how-make-processes" class="index-entry-id"></span>

デフォルトでは、`make`は最初のターゲットから処理を始めます（ただし、名前が`.`で始まるターゲットは、名前に1つ以上の`/`も含まれている場合を除き、対象になりません）。これを*デフォルトのゴール*と呼びます。*ゴール*とは、`make`が最終的に更新しようとするターゲットです。この動作はコマンドライン（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Goals" class="pxref">ゴールを指定する引数</a>を参照）や、特殊変数`.DEFAULT_GOAL`（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Special-Variables" class="pxref">その他の特殊変数</a>を参照）で変更できます。 <span id="index-default-goal" class="index-entry-id"></span> <span id="index-goal_002c-default" class="index-entry-id"></span> <span id="index-goal" class="index-entry-id"></span>

前節の簡単な例では、実行可能なプログラム`edit`を更新することがデフォルトのゴールなので、そのルールを最初に置いています。

したがって、次のコマンドを実行すると、

<div class="example">

    make



</div>

`make`は現在のディレクトリにあるmakefileを読み、最初のルールから処理を始めます。この例では`edit`を再リンクするルールですが、`make`がこのルールの処理を完了する前に、`edit`が依存するファイル、この場合はオブジェクトファイルのルールを処理する必要があります。各ファイルは、それぞれのルールに従って処理されます。これらのルールは、ソースファイルをコンパイルして各`.o`ファイルを更新するよう指定しています。ソースファイル、または前提条件として指定されたヘッダーファイルのいずれかがオブジェクトファイルより新しい場合や、オブジェクトファイルが存在しない場合には、再コンパイルが必要です。

ほかのルールが処理されるのは、そのターゲットがゴールの前提条件として現れるからです。ゴール（またはゴールが依存するもの、さらにその依存先など）が依存していないルールは、`make clean`のようなコマンドで`make`に処理を指示しない限り、処理されません。

オブジェクトファイルを再コンパイルする前に、`make`は前提条件であるソースファイルとヘッダーファイルの更新を検討します。このmakefileは、それらに対する操作を指定していません。`.c`ファイルと`.h`ファイルはどのルールのターゲットでもないので、`make`はこれらのファイルについて何もしません。ただし、BisonやYaccによって作られるような自動生成されたCプログラムであれば、この時点でそれぞれのルールに従って更新します。

必要なオブジェクトファイルを再コンパイルした後、`make`は`edit`を再リンクするかどうかを判定します。`edit`ファイルが存在しない場合や、オブジェクトファイルのいずれかが`edit`より新しい場合には、再リンクが必要です。オブジェクトファイルを再コンパイルしたばかりなら、それは`edit`より新しくなるため、`edit`は再リンクされます。 <span id="index-relinking" class="index-entry-id"></span>

したがって、`insert.c`を変更して`make`を実行すると、`make`はそのファイルをコンパイルして`insert.o`を更新し、その後`edit`をリンクします。`command.h`を変更して`make`を実行すると、`make`はオブジェクトファイル`kbd.o`、`command.o`、`files.o`を再コンパイルしてから、`edit`ファイルをリンクします。

------------------------------------------------------------------------

</div>

</div>
