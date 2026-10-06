<div class="gnu-original-content">

<div id="Makefile-Names" class="section-level-extent">

<span id="What-Name-to-Give-Your-Makefile"></span>

### 3.2 Makefileの名前

<span id="index-makefile-name" class="index-entry-id"></span> <span id="index-name-of-makefile" class="index-entry-id"></span> <span id="index-default-makefile-name" class="index-entry-id"></span> <span id="index-file-name-of-makefile" class="index-entry-id"></span>

デフォルトでは、`make`はmakefileを探すとき、`GNUmakefile`、`makefile`、`Makefile`という名前を、この順番で試します。 <span id="index-Makefile" class="index-entry-id"></span> <span id="index-GNUmakefile" class="index-entry-id"></span> <span id="index-makefile-1" class="index-entry-id"></span>

<span id="index-README" class="index-entry-id"></span>

通常、makefileの名前は`makefile`か`Makefile`にしてください。（ディレクトリの一覧で、`README`などのほかの重要なファイルの近く、先頭に近い目立つ場所に表示されるので、`Makefile`を推奨します。）最初に調べる名前である`GNUmakefile`は、ほとんどのmakefileには推奨しません。GNU `make`固有のもので、ほかのバージョンの`make`では理解できないmakefileなら、この名前を使ってください。ほかの`make`プログラムは`makefile`と`Makefile`を探しますが、`GNUmakefile`は探しません。

`make`がこれらの名前を1つも見つけられない場合、makefileを使いません。その場合は、コマンドの引数でゴールを指定する必要があり、`make`は組み込みの暗黙のルールだけを使って、そのゴールを作り直す方法を判断しようとします。<a href="/docs/gnu-make/source/v4-4-1/manual.html#Implicit-Rules" class="xref">暗黙のルールの使用</a>を参照してください。

<span id="index-_002df" class="index-entry-id"></span> <span id="index-_002d_002dfile" class="index-entry-id"></span> <span id="index-_002d_002dmakefile" class="index-entry-id"></span>

標準とは異なるmakefileの名前を使いたい場合は、`-f`または`--file`オプションで指定できます。`-f name`または`--file=name`という引数は、ファイル`name`をmakefileとして読み込むよう`make`に指示します。`-f`または`--file`を複数指定すれば、複数のmakefileを指定できます。すべてのmakefileは、指定した順番に連結されたものとして扱われます。`-f`または`--file`を指定した場合、デフォルトの名前である`GNUmakefile`、`makefile`、`Makefile`は自動的には調べられません。 <span id="index-specifying-makefile-name" class="index-entry-id"></span> <span id="index-makefile-name_002c-how-to-specify" class="index-entry-id"></span> <span id="index-name-of-makefile_002c-how-to-specify" class="index-entry-id"></span> <span id="index-file-name-of-makefile_002c-how-to-specify" class="index-entry-id"></span>

------------------------------------------------------------------------

</div>

</div>
