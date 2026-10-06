<div class="gnu-original-content">

<div id="Remaking-Makefiles" class="section-level-extent">

<span id="How-Makefiles-Are-Remade"></span>

### 3.5 Makefileの再生成

<span id="index-updating-makefiles" class="index-entry-id"></span> <span id="index-remaking-makefiles" class="index-entry-id"></span> <span id="index-makefile_002c-remaking-of" class="index-entry-id"></span>

makefileを、RCSやSCCSのファイルなど、ほかのファイルから作り直せる場合があります。その場合は、`make`に最新のmakefileを取得して読み込んでほしいでしょう。

そのため、すべてのmakefileを読み込んだ後、`make`は処理した順に各makefileをゴールとなるターゲットとみなし、更新を試みます。並列ビルド（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Parallel" class="pxref">並列実行</a>を参照）が有効なら、makefileも並列に再ビルドされます。

makefileを更新する方法を指定するルールがあれば（そのmakefile自体にあっても、ほかのmakefileにあっても）、または適用できる暗黙のルールがあれば（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Implicit-Rules" class="pxref">暗黙のルールの使用</a>を参照）、必要に応じて更新されます。すべてのmakefileを調べた後、実際に変更されたものが1つでもあれば、`make`はいったん白紙の状態に戻り、すべてのmakefileを読み直します。（各makefileの更新も再び試みますが、すでに最新なので、通常はもう変更されません。）再開のたびに特殊変数`MAKE_RESTARTS`が更新されます（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Special-Variables" class="pxref">その他の特殊変数</a>を参照）。

1つ以上のmakefileを作り直せないと分かっており、効率などの理由で`make`にそれらの暗黙のルールを探させたくない場合は、暗黙のルールの検索を防ぐ通常の方法を使えます。たとえば、makefileをターゲットとし、空のレシピを持つ明示的なルールを書けます（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Empty-Recipes" class="pxref">空のレシピの使用</a>を参照）。

makefileに、レシピはあるが前提条件のないダブルコロンルールが指定されていると、そのファイルは常に作り直されます（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Double_002dColon" class="pxref">ダブルコロンルール</a>を参照）。makefileの場合、そのようなルールを持つmakefileは、`make`を実行するたびに作り直され、さらに`make`が最初からやり直してmakefileを読み直すたびに、また作り直されます。これでは無限ループになります。`make`はmakefileを作り直して再開することを繰り返し、ほかの処理をまったく行えません。そのため、`make`は、レシピはあるが前提条件のないダブルコロンルールのターゲットとして指定されたmakefileを、作り直そうとは**しません**。

仮のターゲット（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Phony-Targets" class="pxref">仮のターゲット</a>を参照）にも同じ効果があります。これは決して最新とはみなされないので、読み込むファイルを仮のターゲットにすると、`make`が際限なく再開してしまいます。これを避けるため、`make`は仮のターゲットとして指定されたmakefileを作り直そうとはしません。

この性質を利用して、起動時間を短縮できます。`Makefile`を作り直す必要がないと分かっているなら、次のいずれかを追加して、makeに再生成を試みさせないようにできます。

<div class="example">

    .PHONY: Makefile



</div>

または、

<div class="example">

    Makefile:: ;



</div>

`-f`または`--file`オプションで読み込むmakefileを指定しない場合、`make`はデフォルトのmakefile名を試します。<a href="/docs/gnu-make/v4-4-1/en/01-guide/08-makefile-names/#Makefile-Names" class="pxref">Makefileの名前</a>を参照してください。`-f`または`--file`で明示的に要求したmakefileとは異なり、これらが存在するはずだと`make`は確信していません。しかし、デフォルトのmakefileが存在せず、`make`のルールを実行して作れる場合は、そのルールを実行してmakefileを使えるようにしたいでしょう。

したがって、デフォルトのmakefileがどれも存在しない場合、`make`は1つを作ることに成功するか、試す名前がなくなるまで、それぞれを作ろうとします。どのmakefileも見つからず、作ることもできなくても、エラーにはならない点に注意してください。makefileが常に必要なわけではありません。

`-t`または`--touch`オプション（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Instead-of-Execution" class="pxref">レシピを実行する代わりに</a>を参照）を使うとき、古いmakefileを使って、どのターゲットの時刻を更新するかを判断してほしくはないでしょう。そのため、`-t`はmakefileの更新には影響しません。`-t`を指定しても、makefileは実際に更新されます。同様に、`-q`（または`--question`）と`-n`（または`--just-print`）も、makefileの更新を妨げません。古いmakefileを使うと、ほかのターゲットについて誤った出力が得られるからです。したがって、`make -f mfile -n foo`は`mfile`を更新して読み込み、その後、`foo`とその前提条件を更新するレシピを、実行せずに表示します。表示される`foo`のレシピは、更新後の`mfile`の内容で指定されたものです。

ただし、ときにはmakefileの更新さえ防ぎたいことがあります。その場合は、makefileとして指定するのに加え、コマンドラインでゴールとしても指定します。makefileの名前をゴールとして明示的に指定すると、`-t`などのオプションがそれにも適用されます。

したがって、`make -f mfile -n mfile foo`はmakefile `mfile`を読み、更新に必要なレシピを実行せずに表示し、その後、`foo`の更新に必要なレシピも実行せずに表示します。`foo`のレシピは、既存の`mfile`の内容で指定されたものになります。

------------------------------------------------------------------------

</div>

</div>
