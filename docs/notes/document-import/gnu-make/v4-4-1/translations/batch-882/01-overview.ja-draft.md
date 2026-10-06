<div class="gnu-original-content">

<div id="Overview" class="chapter-level-extent">

<span id="Overview-of-make"></span>

## 1 `make`の概要

`make`ユーティリティは、大きなプログラムのどの部分を再コンパイルする必要があるかを自動的に判定し、そのためのコマンドを実行します。このマニュアルでは、Richard StallmanとRoland McGrathが実装したGNU `make`について説明します。バージョン3.76以降の開発はPaul D. Smithが担当しています。

GNU `make`はIEEE規格1003.2-1992（POSIX.2）の6.2節に準拠しています。 <span id="index-POSIX" class="index-entry-id"></span> <span id="index-IEEE-Standard-1003_002e2" class="index-entry-id"></span> <span id="index-standards-conformance" class="index-entry-id"></span>

例では最も一般的なCプログラムを使いますが、コンパイラをシェルコマンドで実行できるプログラミング言語なら、どれでも`make`を使えます。実際、`make`の用途はプログラムに限りません。あるファイルが変わるたびに、それに基づいて別のファイルを自動更新する必要がある作業なら、どのようなものでも記述できます。

------------------------------------------------------------------------

<span id="Preparing" class="node"></span><span id="Preparing-and-Running-Make"></span>

### Makeの準備と実行

`make`を使うには、まず*makefile*というファイルを書きます。このファイルには、プログラムを構成するファイル間の関係と、各ファイルを更新するコマンドを記述します。通常、プログラムの実行可能ファイルはオブジェクトファイルから更新され、そのオブジェクトファイルはソースファイルをコンパイルして作られます。

適切なmakefileが用意できたら、ソースファイルを変更するたびに、次の簡単なシェルコマンドを実行するだけで、

<div class="example">

    make



</div>

必要な再コンパイルがすべて行われます。`make`プログラムはmakefileのデータベースと各ファイルの最終更新時刻を使い、どのファイルを更新する必要があるかを判定します。そして、更新が必要な各ファイルについて、データベースに記録されたレシピを実行します。

`make`にコマンドライン引数を指定すれば、再コンパイルするファイルや、その方法を制御できます。<a href="/docs/gnu-make/source/v4-4-1/manual.html#Running" class="xref">makeの実行方法</a>を参照してください。

------------------------------------------------------------------------

<div id="Reading" class="section-level-extent">

<span id="How-to-Read-This-Manual"></span>

### 1.1 このマニュアルの読み方

`make`を初めて使う方や、全般的な入門説明を探している方は、各章の最初の数節を読み、後半の節は読み飛ばしてください。各章の最初の数節には入門的または一般的な情報があり、後半には専門的または技術的な情報があります。例外は第2章の<a href="/docs/gnu-make/v4-4-1/en/01-guide/02-rules-and-recipes/#Introduction" class="ref">Makefile入門（英語原文）</a>で、この章は全体が入門的な内容です。

ほかの`make`プログラムを使い慣れている方は、GNU `make`の拡張を列挙した<a href="/docs/gnu-make/source/v4-4-1/manual.html#Features" class="ref">GNU makeの機能</a>と、ほかの実装にはあってGNU `make`にはない少数の機能を説明した<a href="/docs/gnu-make/source/v4-4-1/manual.html#Missing" class="ref">非互換性と欠けている機能</a>を参照してください。

手早く概要を知りたい場合は、<a href="/docs/gnu-make/source/v4-4-1/manual.html#Options-Summary" class="ref">オプションの一覧</a>、<a href="/docs/gnu-make/source/v4-4-1/manual.html#Quick-Reference" class="ref">クイックリファレンス</a>、<a href="/docs/gnu-make/source/v4-4-1/manual.html#Special-Targets" class="ref">特殊な組み込みターゲット名</a>を参照してください。

------------------------------------------------------------------------

</div>

<div id="Bugs" class="section-level-extent">

<span id="Problems-and-Bugs"></span>

### 1.2 問題とバグ

<span id="index-reporting-bugs" class="index-entry-id"></span> <span id="index-bugs_002c-reporting" class="index-entry-id"></span> <span id="index-problems-and-bugs_002c-reporting" class="index-entry-id"></span>

GNU `make`で問題が起きた場合や、バグを見つけたと思う場合は、開発者に報告してください。対応を約束することはできませんが、修正したいと考えるかもしれません。

バグを報告する前に、本当にバグを見つけたのか確認してください。文書を注意深く読み直し、試している操作が可能だと本当に書かれているか確かめてください。その操作ができるはずなのかどうかが不明確な場合も、報告してください。それは文書のバグです！

バグを報告したり、自分で修正しようとしたりする前に、問題を再現するmakefileをできる限り小さくして、原因を切り分けてください。そのmakefileと、エラーや警告のメッセージを含む`make`の正確な実行結果を送ってください。メッセージを言い換えないでください。報告にそのままコピーして貼り付けるのが最善です。小さなmakefileを作るときは、レシピで非自由なツールや特殊なツールを使わないようにしてください。そのようなツールの動作は、ほとんどの場合、簡単なシェルコマンドで模倣できます。最後に、何が起きると期待していたかも必ず説明してください。それによって、問題が実際には文書にあるのかどうかを判断しやすくなります。

問題を具体的に整理できたら、次の2つの方法のどちらかで報告できます。次の宛先に電子メールを送るか、

<div class="example">

        bug-make@gnu.org



</div>

次の場所にあるWebベースのプロジェクト管理ツールを使ってください。

<div class="example">

        https://savannah.gnu.org/projects/make/



</div>

上記の情報に加え、使っている`make`のバージョン番号を必ず記載してください。これは`make --version`コマンドで確認できます。使用しているマシンとオペレーティングシステムの種類も必ず記載してください。この情報を得る方法の1つは、`make --help`コマンドの出力の最後の数行を見ることです。

コードの変更を提出したい場合は、`README`ファイルの「Submitting Patches」節を参照してください。

------------------------------------------------------------------------

</div>

</div>

</div>
