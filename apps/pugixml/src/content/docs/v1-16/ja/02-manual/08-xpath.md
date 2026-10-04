---
title: "XPath"
description: "pugixml 1.16の公式XPath説明全文。"
licenseSource: "pugixml-manual-1.16"
documentContext: [{"kind":"editorial","html":"<p>訳注：原文は「C11」と表記しています。固定版のヘッダーでは、C++11以降または対応するMSVCでムーブコンストラクターとムーブ代入演算子が有効になることを確認できます。</p>","context":{"anchor":"83-問い合わせオブジェクトの使用","label":"<a href=\"#source-xpath.query\" class=\"anchor\"></a><a href=\"#source-xpath.query\" class=\"link\">8.3. 問い合わせオブジェクトの使用</a>"}}]
---

<div class="sect1">

<span id="source-xpath"></span>

## <a href="#source-xpath" class="anchor"></a><a href="#source-xpath" class="link">8. XPath</a>

<div class="sectionbody">

<div class="paragraph">

条件に一致する文書ノードの部分集合を選ぶ場合、実用的な条件であれば、既存の走査機能を使って関数を書くことはできます。ただし、条件が事前に決まっておらずファイルから与えられる場合には、データに基づく方法が望ましいことがよくあります。また、走査インターフェースが使いにくく、より高水準のDSLが必要な場合もあります。XML処理の標準言語XPathは、こうした場合に役立ちます。pugixmlは、XPath 1.0のほぼ完全な部分集合を実装しています。文書オブジェクトモデルの違いや性能面の理由から、公式仕様にわずかな非準拠があります。[W3C仕様への準拠](#source-xpath.w3c)を参照してください。この節の残りでは、XPath機能のインターフェースを説明します。XPath言語の使い方を学ぶには、ほかのチュートリアルやマニュアルを参照してください。たとえば、[W3SchoolsのXPathチュートリアル](https://www.w3schools.com/xml/xpath_intro.asp)や[XPath 1.0仕様](https://www.w3.org/TR/xpath-10/)があります。

</div>

<div class="sect2">

<span id="source-xpath.types"></span>

### <a href="#source-xpath.types" class="anchor"></a><a href="#source-xpath.types" class="link">8.1. XPathの型</a>

<div class="paragraph">

<span id="source-xpath_value_type"></span><span id="source-xpath_type_number"></span><span id="source-xpath_type_string"></span><span id="source-xpath_type_boolean"></span><span id="source-xpath_type_node_set"></span><span id="source-xpath_type_none"></span> 各XPath式の型は、真偽値、数値、文字列、ノード集合のいずれかです。真偽値は`bool`、数値は`double`に対応します。文字列は、[ワイド文字インターフェースが有効かどうか](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-dom.unicode)に応じて、`std::string`または`std::wstring`に対応します。ノード集合は[xpath_node_set](#source-xpath_node_set)型に対応します。列挙型`xpath_value_type`は、それぞれ`xpath_type_boolean`、`xpath_type_number`、`xpath_type_string`、`xpath_type_node_set`の値を取ります。

</div>

<div class="paragraph">

<span id="source-xpath_node"></span><span id="source-xpath_node::node"></span><span id="source-xpath_node::attribute"></span><span id="source-xpath_node::parent"></span> XPathノードはノードか属性のどちらかなので、これらの型の判別可能な共用体である専用の型`xpath_node`があります。この型の値には、`xml_node`型と`xml_attribute`型のハンドルが1つずつ含まれ、nullでないものは最大1つです。これらのハンドルを取得するアクセサーがあります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_node xpath_node::node() const;
xml_attribute xpath_node::attribute() const;
```

</div>

</div>

<div class="paragraph">

XPathノードはnullにもできます。その場合、どちらのアクセサーもnullハンドルを返します。

</div>

<div class="paragraph">

XPath仕様では、各XPathノードには親があり、次の関数で取得できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_node xpath_node::parent() const;
```

</div>

</div>

<div class="paragraph">

`parent`は、XPathノードが`xml_node`ハンドルに対応する場合には、そのノードの親を返します（`node().parent()`と同じです）。`xml_attribute`ハンドルに対応する場合には、属性が属するノードを返します。nullノードでは、`parent`はnullハンドルを返します。

</div>

<div class="paragraph">

<span id="source-xpath_node::unspecified_bool_type"></span><span id="source-xpath_node::comparison"></span> ノードや属性のハンドルと同様に、XPathノードのハンドルは、真偽値のように扱えるオブジェクトへ暗黙に変換でき、nullノードかどうかを確認できます。また、互いに等しいかどうかを比較できます。

</div>

<div id="source-xpath_node::ctor" class="paragraph">

XPathノードは、3つのコンストラクターのいずれかでも作成できます。既定のコンストラクター、ノードを引数に取るもの、属性とノードを引数に取るものです。最後の場合、属性は、そのノードの属性リストに属していなければなりません。`xml_node`からのコンストラクターは暗黙的なので、通常、`xpath_node`を受け取る関数には`xml_node`を渡せます。それ以外では、選択関数からXPathノードが返されるため、通常、自分でXPathノードオブジェクトを作成する必要はありません。

</div>

<div id="source-xpath_node_set" class="paragraph">

XPath式は、単一のノードではなく、ノード集合に対して操作します。ノード集合はノードの集まりで、必要に応じて文書順かその逆順に並べられます。文書順はXPath仕様で定義されています。対応する文書のXML表現で、あるXPathノードが別のノードより前に現れる場合、文書順でも前になります。

</div>

<div class="paragraph">

<span id="source-xpath_node_set::const_iterator"></span><span id="source-xpath_node_set::begin"></span><span id="source-xpath_node_set::end"></span> ノード集合は、列として扱うランダムアクセスコンテナーに似たインターフェースを持つ`xpath_node_set`オブジェクトで表されます。イテレーター型と、通常の先頭・末尾の次を指すイテレーターのアクセサーがあります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
typedef const xpath_node* xpath_node_set::const_iterator;
const_iterator xpath_node_set::begin() const;
const_iterator xpath_node_set::end() const;
```

</div>

</div>

<div class="paragraph">

<span id="source-xpath_node_set::index"></span><span id="source-xpath_node_set::size"></span><span id="source-xpath_node_set::empty"></span> `std::vector`と同様に、インデックスでも反復処理できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
const xpath_node& xpath_node_set::operator[](size_t index) const;
size_t xpath_node_set::size() const;
bool xpath_node_set::empty() const;
```

</div>

</div>

<div class="paragraph">

上記の操作の意味は、`std::vector`と同じです。イテレーターはランダムアクセスで、上記の操作はすべて定数時間です。集合のサイズ以上のインデックスで要素へアクセスした場合の動作は未定義です。反復処理にはイテレーターとインデックスのどちらも使えますが、イテレーターの方が高速な場合があります。

</div>

<div class="paragraph">

<span id="source-xpath_node_set::type"></span><span id="source-xpath_node_set::type_unsorted"></span><span id="source-xpath_node_set::type_sorted"></span><span id="source-xpath_node_set::type_sorted_reverse"></span><span id="source-xpath_node_set::sort"></span> 反復処理の順序は集合内のノードの順序に依存し、次の関数で確認できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
enum xpath_node_set::type_t {type_unsorted, type_sorted, type_sorted_reverse};
type_t xpath_node_set::type() const;
```

</div>

</div>

<div class="paragraph">

`type`は現在のノードの順序を返します。`type_sorted`は文書順、`type_sorted_reverse`は逆文書順、`type_unsorted`はどちらの順序も保証されないことを意味します。`type()`が`type_unsorted`を返しても、偶然整列している場合はあります。特定の順序で反復処理したい場合は、`sort`で変更できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
void xpath_node_set::sort(bool reverse = false);
```

</div>

</div>

<div class="paragraph">

`sort`を呼び出すと、引数に応じて、文書順か逆文書順にノードを並べ替えます。その後は、`type()`が`type_sorted`または`type_sorted_reverse`を返します。

</div>

<div id="source-xpath_node_set::first" class="paragraph">

実際に反復処理する必要がなく、文書順で最初の要素だけが必要な場合もよくあります。そのための専用のアクセサーがあります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xpath_node xpath_node_set::first() const;
```

</div>

</div>

<div class="paragraph">

この関数は、集合から文書順で最初のノードを返します。集合が空なら、nullノードを返します。返すノードは集合内の順序（`type()`の結果）に依存しませんが、計算量は依存します。集合が整列済みなら定数時間、それ以外なら要素数に対して線形時間か、それ以上になります。

</div>

<div id="source-xpath_node_set::ctor" class="paragraph">

多くの場合、ノード集合はXPath関数から返されますが、手動で作成する必要がある場合もあります。そのため、イテレーター範囲と、省略可能な型を取るコンストラクターがあります。`const_iterator`は`const xpath_node*`のtypedefです。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xpath_node_set::xpath_node_set(const_iterator begin, const_iterator end, type_t type = type_unsorted);
```

</div>

</div>

<div class="paragraph">

コンストラクターは指定した範囲をコピーし、指定した型を設定します。範囲内のオブジェクトは一切検査しません。重複がなく、`type`パラメーターに従って整列していることを、自分で保証する必要があります。そうしないと、この集合を使うXPath操作は予想外の結果になる場合があります。

</div>

</div>

<div class="sect2">

<span id="source-xpath.select"></span>

### <a href="#source-xpath.select" class="anchor"></a><a href="#source-xpath.select" class="link">8.2. XPath式によるノードの選択</a>

<div class="paragraph">

<span id="source-xml_node::select_node"></span><span id="source-xml_node::select_nodes"></span> XPath式に一致するノードを選ぶには、次の関数を使えます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xpath_node xml_node::select_node(const char_t* query, xpath_variable_set* variables = 0) const;
xpath_node_set xml_node::select_nodes(const char_t* query, xpath_variable_set* variables = 0) const;
```

</div>

</div>

<div class="paragraph">

`select_nodes`は式をコンパイルし、ノードをコンテキストノードとして実行して、結果のノード集合を返します。`select_node`は、結果のうち文書順で最初のノードだけを返し、`select_nodes(query).first()`と同じです。XPath式に一致するものがない場合や、ノードハンドルがnullの場合、`select_nodes`は空の集合を返し、`select_node`はnullのXPathノードを返します。

</div>

<div class="paragraph">

例外処理が無効になっていなければ、問い合わせをコンパイルできない場合や、結果の型がノード集合以外の場合、どちらの関数も[xpath_exception](#source-xpath_exception)を送出します。詳細は[エラー処理](#source-xpath.errors)を参照してください。

</div>

<div class="paragraph">

<span id="source-xml_node::select_node_precomp"></span><span id="source-xml_node::select_nodes_precomp"></span> 式のコンパイルは高速ですが、同じ式を小さい部分ツリーに対して何度も使う場合、コンパイル時間が大きなオーバーヘッドになることがあります。似た問い合わせを何度も行う場合は、問い合わせオブジェクトへコンパイルすることを検討してください（[問い合わせオブジェクトの使用](#source-xpath.query)を参照）。コンパイル済みの問い合わせオブジェクトがあれば、式の文字列の代わりに選択関数へ渡せます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xpath_node xml_node::select_node(const xpath_query& query) const;
xpath_node_set xml_node::select_nodes(const xpath_query& query) const;
```

</div>

</div>

<div class="paragraph">

例外処理が無効になっていなければ、問い合わせの結果の型がノード集合以外の場合、どちらの関数も[xpath_exception](#source-xpath_exception)を送出します。

</div>

<div class="paragraph">

XPath式でノードを選ぶ例です（[samples/xpath_select.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/xpath_select.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
pugi::xpath_node_set tools = doc.select_nodes("/Profile/Tools/Tool[@AllowRemote='true' and @DeriveCaptionFrom='lastparam']");

std::cout << "Tools:\n";

for (pugi::xpath_node_set::const_iterator it = tools.begin(); it != tools.end(); ++it)
{
    pugi::xpath_node node = *it;
    std::cout << node.node().attribute("Filename").value() << "\n";
}

pugi::xpath_node build_tool = doc.select_node("//Tool[contains(Description, 'build system')]");

if (build_tool)
    std::cout << "Build tool: " << build_tool.node().attribute("Filename").value() << "\n";
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-xpath.query"></span>

### <a href="#source-xpath.query" class="anchor"></a><a href="#source-xpath.query" class="link">8.3. 問い合わせオブジェクトの使用</a>

<div id="source-xpath_query" class="paragraph">

式の文字列を引数として`select_nodes`を呼ぶと、内部で問い合わせオブジェクトが作成されます。問い合わせオブジェクトは、コンパイル済みのXPath式を表します。次のような場合に必要になることがあります。

</div>

<div class="ulist">

- コンパイル時間が問題になる場合は、式をあらかじめ問い合わせオブジェクトへコンパイルして、その時間を節約できます。

- 真偽値、数値、文字列を結果として返すXPath式を、問い合わせオブジェクトで評価できます。

- 問い合わせオブジェクトを通じて、式の値の型を取得できます。

</div>

<div class="paragraph">

問い合わせオブジェクトは`xpath_query`型に対応します。不変で、コピーできません。作成時に式へ結び付けられ、複製できません。コンテナーに格納したい場合は、`new`演算子でヒープ上に確保し、`xpath_query`へのポインターをコンテナーへ格納するか、C++11コンパイラーを使用してください（問い合わせオブジェクトはC++11でムーブ可能です）。

</div>

<div id="source-xpath_query::ctor" class="paragraph">

XPath式を引数に取るコンストラクターで、問い合わせオブジェクトを作成できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
explicit xpath_query::xpath_query(const char_t* query, xpath_variable_set* variables = 0);
```

</div>

</div>

<div id="source-xpath_query::return_type" class="paragraph">

式がコンパイルされ、そのコンパイル済みの表現が新しい問い合わせオブジェクトに格納されます。コンパイルに失敗し、例外処理が無効になっていなければ、[xpath_exception](#source-xpath_exception)を送出します（詳細は[エラー処理](#source-xpath.errors)を参照）。作成後は、次の関数で評価結果の型を問い合わせることができます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xpath_value_type xpath_query::return_type() const;
```

</div>

</div>

<div class="paragraph">

<span id="source-xpath_query::evaluate_boolean"></span><span id="source-xpath_query::evaluate_number"></span><span id="source-xpath_query::evaluate_string"></span><span id="source-xpath_query::evaluate_node_set"></span><span id="source-xpath_query::evaluate_node"></span> 次のいずれかの関数で問い合わせを評価できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xpath_query::evaluate_boolean(const xpath_node& n) const;
double xpath_query::evaluate_number(const xpath_node& n) const;
string_t xpath_query::evaluate_string(const xpath_node& n) const;
xpath_node_set xpath_query::evaluate_node_set(const xpath_node& n) const;
xpath_node xpath_query::evaluate_node(const xpath_node& n) const;
```

</div>

</div>

<div class="paragraph">

すべての関数はコンテキストノードを引数に取り、式を計算し、指定した型へ変換した結果を返します。XPath仕様によれば、どの型の値も真偽値、数値、文字列へ変換できますが、ノード集合以外の型はノード集合へ変換できません。そのため、`evaluate_boolean`、`evaluate_number`、`evaluate_string`は常に結果を返しますが、戻り値の型がノード集合以外の場合、`evaluate_node_set`と`evaluate_node`はエラーになります（[エラー処理](#source-xpath.errors)を参照）。

</div>

<div class="admonitionblock note">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td class="icon"><div class="title">
注記
</div></td>
<td class="content"><code>node.select_nodes("query")</code>の呼び出しは、<code>xpath_query("query").evaluate_node_set(node)</code>の呼び出しと同じです。<code>node.select_node("query")</code>の呼び出しは、<code>xpath_query("query").evaluate_node(node)</code>の呼び出しと同じです。</td>
</tr>
</tbody>
</table>

</div>

<div id="source-xpath_query::evaluate_string_buffer" class="paragraph">

`evaluate_string`関数はSTLの文字列を返すため、[PUGIXML_NO_STL](/docs/pugixml/v1-16/ja/02-manual/02-installation/#source-PUGIXML_NO_STL)モードでは使えず、通常はメモリーも確保することに注意してください。別の文字列評価関数もあります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
size_t xpath_query::evaluate_string(char_t* buffer, size_t capacity, const xpath_node& n) const;
```

</div>

</div>

<div class="paragraph">

この関数は文字列を評価して、結果を`buffer`へ書き込みます（ただし、最大`capacity`文字まで）。その後、終端のゼロを含めた結果全体の文字数を返します。`capacity`が0でなければ、出力バッファーは必ずゼロで終端されます。次のように使用できます。

</div>

<div class="ulist">

- 最初に`buffer = 0`、`capacity = 0`で呼び出します。次に、返された文字数分の領域を確保し、確保した領域と文字数を渡して、もう一度呼び出します。

- 最初に小さいバッファーとその容量を渡して呼び出します。結果が容量より大きければ、出力は切り詰められています。その場合は、より大きいバッファーを確保して、もう一度呼び出します。

</div>

<div class="paragraph">

問い合わせオブジェクトを使う例です（[samples/xpath_query.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/xpath_query.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
// Select nodes via compiled query
pugi::xpath_query query_remote_tools("/Profile/Tools/Tool[@AllowRemote='true']");

pugi::xpath_node_set tools = query_remote_tools.evaluate_node_set(doc);
std::cout << "Remote tool: ";
tools[2].node().print(std::cout);

// Evaluate numbers via compiled query
pugi::xpath_query query_timeouts("sum(//Tool/@Timeout)");
std::cout << query_timeouts.evaluate_number(doc) << std::endl;

// Evaluate strings via compiled query for different context nodes
pugi::xpath_query query_name_valid("string-length(substring-before(@Filename, '_')) > 0 and @OutputFileMasks");
pugi::xpath_query query_name("concat(substring-before(@Filename, '_'), ' produces ', @OutputFileMasks)");

for (pugi::xml_node tool = doc.first_element_by_path("Profile/Tools/Tool"); tool; tool = tool.next_sibling())
{
    std::string s = query_name.evaluate_string(tool);

    if (query_name_valid.evaluate_boolean(tool)) std::cout << s << std::endl;
}
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-xpath.variables"></span>

### <a href="#source-xpath.variables" class="anchor"></a><a href="#source-xpath.variables" class="link">8.4. 変数の使用</a>

<div class="paragraph">

XPathの問い合わせには、変数への参照を含めることができます。動的なパラメーターに依存する問い合わせを、完全な問い合わせ文字列を手動で組み立てずに使いたい場合や、似た問い合わせに同じ問い合わせオブジェクトを再利用したい場合に役立ちます。

</div>

<div class="paragraph">

変数への参照は`$name`という形式です。使うには、問い合わせに現れるすべての変数を正しい型で含む変数集合を用意する必要があります。この集合を、`xpath_query`のコンストラクターか、`select_nodes`/`select_node`関数へ渡します。

</div>

<div class="listingblock">

<div class="content">

``` cpp
explicit xpath_query::xpath_query(const char_t* query, xpath_variable_set* variables = 0);
xpath_node xml_node::select_node(const char_t* query, xpath_variable_set* variables = 0) const;
xpath_node_set xml_node::select_nodes(const char_t* query, xpath_variable_set* variables = 0) const;
```

</div>

</div>

<div class="paragraph">

問い合わせオブジェクトを使う場合、`evaluate`/`select`の呼び出し前に変数の値を変更して、問い合わせの動作を変えられます。

</div>

<div class="admonitionblock note">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td class="icon"><div class="title">
注記
</div></td>
<td class="content">変数集合へのポインターと、参照している変数へのポインターは、問い合わせオブジェクトに格納されます。集合の寿命が問い合わせオブジェクトの寿命より長いことを保証する必要があります。また、問い合わせが生存している間は、集合を代入やムーブ代入の対象にしてはいけません。</td>
</tr>
</tbody>
</table>

</div>

<div id="source-xpath_variable_set" class="paragraph">

変数集合は`xpath_variable_set`型に対応し、基本的には変数のコンテナーです。

</div>

<div id="source-xpath_variable_set::add" class="paragraph">

次の関数で、新しい変数を追加できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xpath_variable* xpath_variable_set::add(const char_t* name, xpath_value_type type);
```

</div>

</div>

<div class="paragraph">

この関数は、指定した名前と型の新しい変数を追加しようとします。その名前の変数が集合に存在しなければ、新しい変数を追加し、そのハンドルを返します。同じ名前の変数がすでにあり、指定した型と一致する場合は、その変数のハンドルを返します。それ以外の場合はnullポインターを返します。メモリーの確保に失敗した場合も、nullポインターを返します。

</div>

<div class="paragraph">

新しい変数には、型に応じた既定値が代入されます。数値は`0`、真偽値は`false`、文字列は空文字列、ノード集合は空の集合です。

</div>

<div id="source-xpath_variable_set::get" class="paragraph">

次の関数で、既存の変数を取得できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xpath_variable* xpath_variable_set::get(const char_t* name);
const xpath_variable* xpath_variable_set::get(const char_t* name) const;
```

</div>

</div>

<div class="paragraph">

これらの関数は変数のハンドルを返します。指定した名前の変数が見つからない場合は、nullポインターを返します。

</div>

<div id="source-xpath_variable_set::set" class="paragraph">

さらに、名前を指定して変数の値を設定する補助関数もあります。変数が存在しなければ、対応する型の変数を追加し、その値を設定しようとします。同じ名前で型が異なる変数がすでにある場合は、`false`を返します。メモリーの確保に失敗した場合も、`false`を返します。型の変換は一切行わないことに注意してください。

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xpath_variable_set::set(const char_t* name, bool value);
bool xpath_variable_set::set(const char_t* name, double value);
bool xpath_variable_set::set(const char_t* name, const char_t* value);
bool xpath_variable_set::set(const char_t* name, const xpath_node_set& value);
```

</div>

</div>

<div class="paragraph">

変数の値は内部の変数格納領域へコピーされるため、関数が返った後は、渡した値を変更したり破棄したりできます。

</div>

<div id="source-xpath_variable" class="paragraph">

名前による変数の設定では効率が不十分な場合や、変数の情報を調べたり値を取得したりする必要がある場合は、変数のハンドルを使えます。変数は`xpath_variable`型に対応し、そのハンドルは単に`xpath_variable`へのポインターです。

</div>

<div class="paragraph">

<span id="source-xpath_variable::type"></span><span id="source-xpath_variable::name"></span> 次のいずれかの関数で、変数の情報を取得できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
const char_t* xpath_variable::name() const;
xpath_value_type xpath_variable::type() const;
```

</div>

</div>

<div class="paragraph">

各変数には、作成時に指定する固有の型があり、後から変更できないことに注意してください。

</div>

<div class="paragraph">

<span id="source-xpath_variable::get_boolean"></span><span id="source-xpath_variable::get_number"></span><span id="source-xpath_variable::get_string"></span><span id="source-xpath_variable::get_node_set"></span> 変数の値を取得するには、その型に応じて次のいずれかの関数を使います。

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xpath_variable::get_boolean() const;
double xpath_variable::get_number() const;
const char_t* xpath_variable::get_string() const;
const xpath_node_set& xpath_variable::get_node_set() const;
```

</div>

</div>

<div class="paragraph">

これらの関数は、変数の値を返します。型の変換は一切行いません。型が一致しない場合は、代替の値を返します（真偽値は`false`、数値は`NaN`、文字列は空文字列、ノード集合は空の集合）。

</div>

<div id="source-xpath_variable::set" class="paragraph">

変数の値を設定するには、その型に応じて次のいずれかの関数を使います。

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xpath_variable::set(bool value);
bool xpath_variable::set(double value);
bool xpath_variable::set(const char_t* value);
bool xpath_variable::set(const xpath_node_set& value);
```

</div>

</div>

<div class="paragraph">

これらの関数は変数の値を変更します。型の変換は一切行いません。型が一致しない場合は、`false`を返します。メモリーの確保に失敗した場合も、`false`を返します。値は内部の変数格納領域へコピーされるため、関数が返った後は、渡した値を変更したり破棄したりできます。

</div>

<div class="paragraph">

XPathの問い合わせで変数を使う例です（[samples/xpath_variables.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/xpath_variables.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
// Select nodes via compiled query
pugi::xpath_variable_set vars;
vars.add("remote", pugi::xpath_type_boolean);

pugi::xpath_query query_remote_tools("/Profile/Tools/Tool[@AllowRemote = string($remote)]", &vars);

vars.set("remote", true);
pugi::xpath_node_set tools_remote = query_remote_tools.evaluate_node_set(doc);

vars.set("remote", false);
pugi::xpath_node_set tools_local = query_remote_tools.evaluate_node_set(doc);

std::cout << "Remote tool: ";
tools_remote[2].node().print(std::cout);

std::cout << "Local tool: ";
tools_local[0].node().print(std::cout);

// You can pass the context directly to select_nodes/select_node
pugi::xpath_node_set tools_local_imm = doc.select_nodes("/Profile/Tools/Tool[@AllowRemote = string($remote)]", &vars);

std::cout << "Local tool imm: ";
tools_local_imm[0].node().print(std::cout);
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-xpath.errors"></span>

### <a href="#source-xpath.errors" class="anchor"></a><a href="#source-xpath.errors" class="link">8.5. エラー処理</a>

<div class="paragraph">

XPathの実装には、2種類のエラー処理の仕組みがあります。使われる仕組みは、例外対応が無効になっているかどうかで決まります（[PUGIXML_NO_EXCEPTIONS](/docs/pugixml/v1-16/ja/02-manual/02-installation/#source-PUGIXML_NO_EXCEPTIONS)の定義で制御します）。

</div>

<div class="paragraph">

<span id="source-xpath_exception"></span><span id="source-xpath_exception::result"></span><span id="source-xpath_exception::what"></span> 既定では、XPath関数はエラー時に`xpath_exception`オブジェクトを送出します。さらに、メモリーの確保に失敗すると、`std::bad_alloc`例外を送出します。また、問い合わせの戻り値の型がノード集合以外なのに、ノード集合として評価した場合も、`xpath_exception`を送出します。問い合わせのコンストラクターが成功した場合（つまり例外を送出しなかった場合）、問い合わせオブジェクトは有効です。それ以外の場合は、次のいずれかの関数でエラーの詳細を取得できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
virtual const char* xpath_exception::what() const noexcept;
const xpath_parse_result& xpath_exception::result() const;
```

</div>

</div>

<div class="paragraph">

<span id="source-xpath_query::unspecified_bool_type"></span><span id="source-xpath_query::result"></span> 例外が無効の場合、解析に失敗すると、問い合わせは無効な状態で初期化されます。`if (query) { …​ }`のように真偽値の式で使うと、問い合わせオブジェクトが有効かどうかを確認できます。また、result()アクセサーで解析結果を取得できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
const xpath_parse_result& xpath_query::result() const;
```

</div>

</div>

<div class="paragraph">

例外を使わない場合、無効な問い合わせの評価結果は、型に応じて`false`、空文字列、`NaN`、空のノード集合になります。戻り値の型がノード集合以外の問い合わせをノード集合として評価すると、空のノード集合になります。

</div>

<div id="source-xpath_parse_result" class="paragraph">

解析結果の情報は、`xpath_parse_result`オブジェクトで返されます。解析の状態と、入力ストリームの先頭から、最後に解析に成功した文字までのオフセットを含みます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
struct xpath_parse_result
{
    const char* error;
    ptrdiff_t offset;

    operator bool() const;
    const char* description() const;
};
```

</div>

</div>

<div id="source-xpath_parse_result::error" class="paragraph">

解析結果はエラーメッセージで表されます。エラーがなければnullポインター、エラーがあればASCIIのゼロ終端文字列によるエラーメッセージです。

</div>

<div id="source-xpath_parse_result::description" class="paragraph">

`description()`メンバー関数で、エラーメッセージを取得できます。nullポインターは決して返さないため、問い合わせの解析が成功した場合にも、安全に`description()`を使えます。`description()`は`PUGIXML_WCHAR_MODE`でも`char`文字列を返すことに注意してください。`wchar_t`文字列を取得するには、[as_wide](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-as_wide)を呼ぶ必要があります。

</div>

<div id="source-xpath_parse_result::offset" class="paragraph">

解析結果には、エラーメッセージに加えて、最後に解析に成功した文字のオフセットを含む`offset`メンバーがあります。単位は[pugi::char_t](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-char_t)です（文字モードではバイト、ワイド文字モードではワイド文字）。

</div>

<div id="source-xpath_parse_result::bool" class="paragraph">

解析結果のオブジェクトは、`if (result) { …​ } else { …​ }`のように、暗黙に`bool`へ変換できます。

</div>

<div class="paragraph">

XPathのエラー処理の例です（[samples/xpath_error.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/xpath_error.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
// Exception is thrown for incorrect query syntax
try
{
    doc.select_nodes("//nodes[#true()]");
}
catch (const pugi::xpath_exception& e)
{
    std::cout << "Select failed: " << e.what() << std::endl;
}

// Exception is thrown for incorrect query semantics
try
{
    doc.select_nodes("(123)/next");
}
catch (const pugi::xpath_exception& e)
{
    std::cout << "Select failed: " << e.what() << std::endl;
}

// Exception is thrown for query with incorrect return type
try
{
    doc.select_nodes("123");
}
catch (const pugi::xpath_exception& e)
{
    std::cout << "Select failed: " << e.what() << std::endl;
}
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-xpath.w3c"></span>

### <a href="#source-xpath.w3c" class="anchor"></a><a href="#source-xpath.w3c" class="link">8.6. W3C仕様への準拠</a>

<div class="paragraph">

文書オブジェクトモデルの違い、性能上の配慮、実装の複雑さにより、pugixmlのXPath 1.0実装は完全準拠ではありません。現在の非互換事項は次のとおりです。

</div>

<div class="ulist">

- 同じ親を持つ連続したテキストノードは結合されません。たとえば、`<node>text1 <![CDATA[data]]> text2</node>`では、本来nodeのテキストノードの子は1つになるべきですが、実際には3つになります。

- 文書型宣言を解析に使わないため、`id()`関数は常に空のノード集合を返します。

- 名前空間ノードには対応していません（`namespace::`軸に影響します）。

- 名前の検査には、展開名ではなくXML文書内のQNameを使います。`<foo xmlns:ns1='uri' xmlns:ns2='uri'><ns1:child/><ns2:child/></foo>`に対して、`foo/ns1:*`という問い合わせは、両方ではなく最初の子だけを返します。準拠したXPath実装では、適切な名前空間宣言を利用者が用意すると、両方のノードを返せます。

- 文字列関数は、ライブラリーの設定に応じて、単一の`char`値か単一の`wchar_t`値を1文字として扱います。このため、一部の文字列関数はUnicodeに完全には対応していません。`substring()`、`string-length()`、`translate()`関数に影響します。

</div>

</div>

</div>

</div>
