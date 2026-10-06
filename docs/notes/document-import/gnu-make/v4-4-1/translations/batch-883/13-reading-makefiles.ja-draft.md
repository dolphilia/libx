<div class="gnu-original-content">

<div id="Reading-Makefiles" class="section-level-extent">

<span id="How-make-Reads-a-Makefile"></span>

### 3.7 `make`によるMakefileの読み込み

<span id="index-reading-makefiles" class="index-entry-id"></span> <span id="index-makefile_002c-reading" class="index-entry-id"></span>

GNU `make`は、明確に分かれた2つの段階で動作します。第1段階では、すべてのmakefileや、そこから読み込まれるmakefileなどを読み、すべての変数とその値、暗黙のルール、明示的なルールを内部に取り込み、すべてのターゲットとその前提条件からなる依存グラフを構築します。第2段階では、`make`はこの内部データを使って、更新が必要なターゲットを判定し、更新に必要なレシピを実行します。

この2段階の方式を理解することは重要です。変数や関数の展開方法に直接影響し、makefileを書くときに混乱の原因となることがよくあるからです。以下では、makefileに現れるさまざまな構文要素と、その各部分がどの段階で展開されるかをまとめます。

第1段階で行われる展開を*即時*展開と呼びます。`make`は、makefileを解析するときに、その構文要素の該当部分を展開します。即時でない展開を*遅延*展開と呼びます。遅延される部分の展開は、その展開結果が使われるまで、つまり即時展開の文脈から参照されるか、第2段階で必要になるまで、延期されます。

これらの構文要素の中には、まだなじみのないものもあるでしょう。後の章でそれらに慣れてきたら、この節を参照できます。

<span id="Variable-Assignment"></span>

#### 変数への代入

<span id="index-_002b_003d_002c-expansion" class="index-entry-id"></span> <span id="index-_003d_002c-expansion" class="index-entry-id"></span> <span id="index-_003f_003d_002c-expansion" class="index-entry-id"></span> <span id="index-_002b_003d_002c-expansion-1" class="index-entry-id"></span> <span id="index-_0021_003d_002c-expansion" class="index-entry-id"></span> <span id="index-define_002c-expansion" class="index-entry-id"></span>

変数の定義は、次のように解析されます。

<div class="example">

    immediate = deferred
    immediate ?= deferred
    immediate := immediate
    immediate ::= immediate
    immediate :::= immediate-with-escape
    immediate += deferred or immediate
    immediate != immediate

    define immediate
      deferred
    endef

    define immediate =
      deferred
    endef

    define immediate ?=
      deferred
    endef

    define immediate :=
      immediate
    endef

    define immediate ::=
      immediate
    endef

    define immediate :::=
      immediate-with-escape
    endef

    define immediate +=
      deferred or immediate
    endef

    define immediate !=
      immediate
    endef



</div>

追加演算子`+=`では、変数がすでに単純変数（`:=`または`::=`）として設定されている場合、右辺は即時展開され、それ以外の場合は遅延展開されます。

`immediate-with-escape`演算子`:::=`では、右辺の値は即時展開された後、エスケープされます（つまり、展開結果に含まれるすべての`$`が`$$`に置き換えられます）。

シェル代入演算子`!=`では、右辺が即座に評価され、シェルに渡されます。結果は左辺で指定した名前の変数に格納され、その変数は再帰展開変数とみなされます（したがって、参照のたびに再評価されます）。

<span id="Conditional-Directives"></span>

#### 条件付きディレクティブ

<span id="index-ifdef_002c-expansion" class="index-entry-id"></span> <span id="index-ifeq_002c-expansion" class="index-entry-id"></span> <span id="index-ifndef_002c-expansion" class="index-entry-id"></span> <span id="index-ifneq_002c-expansion" class="index-entry-id"></span>

条件付きディレクティブは即座に解析されます。つまり、たとえば自動変数は条件付きディレクティブでは使えません。自動変数は、そのルールのレシピが呼び出されるまで設定されないからです。条件付きディレクティブで自動変数を使う必要がある場合は、条件をレシピの中へ移し、代わりにシェルの条件構文を使わ*なければなりません*。

<span id="Rule-Definition"></span>

#### ルールの定義

<span id="index-target_002c-expansion" class="index-entry-id"></span> <span id="index-prerequisite_002c-expansion" class="index-entry-id"></span> <span id="index-implicit-rule_002c-expansion" class="index-entry-id"></span> <span id="index-pattern-rule_002c-expansion" class="index-entry-id"></span> <span id="index-explicit-rule_002c-expansion" class="index-entry-id"></span>

ルールは、その形式にかかわらず、常に同じように展開されます。

<div class="example">

    immediate : immediate ; deferred
            deferred



</div>

つまり、ターゲットと前提条件の部分は即時展開され、ターゲットを作るレシピは常に遅延展開されます。これは、明示的なルール、パターンルール、サフィックスルール、静的パターンルール、単純な前提条件の定義のいずれにも当てはまります。

------------------------------------------------------------------------

</div>

</div>
