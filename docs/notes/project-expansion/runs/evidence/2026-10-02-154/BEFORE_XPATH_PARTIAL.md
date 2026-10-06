---
title: "XPath"
description: "pugixml 1.16の公式XPath説明全文。"
licenseSource: "pugixml-manual-1.16"
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

### <a href="#source-xpath.query" class="anchor"></a><a href="#source-xpath.query" class="link">8.3. Using query objects</a>

<div id="source-xpath_query" class="paragraph">

When you call `select_nodes` with an expression string as an argument, a query object is created behind the scenes. A query object represents a compiled XPath expression. Query objects can be needed in the following circumstances:

</div>

<div class="ulist">

- You can precompile expressions to query objects to save compilation time if it becomes an issue;

- You can use query objects to evaluate XPath expressions which result in booleans, numbers or strings;

- You can get the type of expression value via query object.

</div>

<div class="paragraph">

Query objects correspond to `xpath_query` type. They are immutable and non-copyable: they are bound to the expression at creation time and can not be cloned. If you want to put query objects in a container, either allocate them on heap via `new` operator and store pointers to `xpath_query` in the container, or use a C11 compiler (query objects are movable in C11).

</div>

<div id="source-xpath_query::ctor" class="paragraph">

You can create a query object with the constructor that takes XPath expression as an argument:

</div>

<div class="listingblock">

<div class="content">

``` cpp
explicit xpath_query::xpath_query(const char_t* query, xpath_variable_set* variables = 0);
```

</div>

</div>

<div id="source-xpath_query::return_type" class="paragraph">

The expression is compiled and the compiled representation is stored in the new query object. If compilation fails, [xpath_exception](#source-xpath_exception) is thrown if exception handling is not disabled (see [Error handling](#source-xpath.errors) for details). After the query is created, you can query the type of the evaluation result using the following function:

</div>

<div class="listingblock">

<div class="content">

``` cpp
xpath_value_type xpath_query::return_type() const;
```

</div>

</div>

<div class="paragraph">

<span id="source-xpath_query::evaluate_boolean"></span><span id="source-xpath_query::evaluate_number"></span><span id="source-xpath_query::evaluate_string"></span><span id="source-xpath_query::evaluate_node_set"></span><span id="source-xpath_query::evaluate_node"></span> You can evaluate the query using one of the following functions:

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

All functions take the context node as an argument, compute the expression and return the result, converted to the requested type. According to XPath specification, value of any type can be converted to boolean, number or string value, but no type other than node set can be converted to node set. Because of this, `evaluate_boolean`, `evaluate_number` and `evaluate_string` always return a result, but `evaluate_node_set` and `evaluate_node` result in an error if the return type is not node set (see [Error handling](#source-xpath.errors)).

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
Note
</div></td>
<td class="content">Calling <code>node.select_nodes("query")</code> is equivalent to calling <code>xpath_query("query").evaluate_node_set(node)</code>. Calling <code>node.select_node("query")</code> is equivalent to calling <code>xpath_query("query").evaluate_node(node)</code>.</td>
</tr>
</tbody>
</table>

</div>

<div id="source-xpath_query::evaluate_string_buffer" class="paragraph">

Note that `evaluate_string` function returns the STL string; as such, it’s not available in [PUGIXML_NO_STL](/docs/pugixml/v1-16/en/02-manual/02-installation/#source-PUGIXML_NO_STL) mode and also usually allocates memory. There is another string evaluation function:

</div>

<div class="listingblock">

<div class="content">

``` cpp
size_t xpath_query::evaluate_string(char_t* buffer, size_t capacity, const xpath_node& n) const;
```

</div>

</div>

<div class="paragraph">

This function evaluates the string, and then writes the result to `buffer` (but at most `capacity` characters); then it returns the full size of the result in characters, including the terminating zero. If `capacity` is not 0, the resulting buffer is always zero-terminated. You can use this function as follows:

</div>

<div class="ulist">

- First call the function with `buffer = 0` and `capacity = 0`; then allocate the returned amount of characters, and call the function again, passing the allocated storage and the amount of characters;

- First call the function with small buffer and buffer capacity; then, if the result is larger than the capacity, the output has been trimmed, so allocate a larger buffer and call the function again.

</div>

<div class="paragraph">

This is an example of using query objects ([samples/xpath_query.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/xpath_query.cpp)):

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

### <a href="#source-xpath.variables" class="anchor"></a><a href="#source-xpath.variables" class="link">8.4. Using variables</a>

<div class="paragraph">

XPath queries may contain references to variables; this is useful if you want to use queries that depend on some dynamic parameter without manually preparing the complete query string, or if you want to reuse the same query object for similar queries.

</div>

<div class="paragraph">

Variable references have the form `$name`; in order to use them, you have to provide a variable set, which includes all variables present in the query with correct types. This set is passed to `xpath_query` constructor or to `select_nodes`/`select_node` functions:

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

If you’re using query objects, you can change the variable values before `evaluate`/`select` calls to change the query behavior.

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
Note
</div></td>
<td class="content">The variable set pointer is stored in the query object, along with pointers to the variables it references; you have to ensure that the lifetime of the set exceeds that of the query object, and that the set is not assigned to or moved into while the query is live.</td>
</tr>
</tbody>
</table>

</div>

<div id="source-xpath_variable_set" class="paragraph">

Variable sets correspond to `xpath_variable_set` type, which is essentially a variable container.

</div>

<div id="source-xpath_variable_set::add" class="paragraph">

You can add new variables with the following function:

</div>

<div class="listingblock">

<div class="content">

``` cpp
xpath_variable* xpath_variable_set::add(const char_t* name, xpath_value_type type);
```

</div>

</div>

<div class="paragraph">

The function tries to add a new variable with the specified name and type; if the variable with such name does not exist in the set, the function adds a new variable and returns the variable handle; if there is already a variable with the specified name, the function returns the variable handle if variable has the specified type. Otherwise the function returns null pointer; it also returns null pointer on allocation failure.

</div>

<div class="paragraph">

New variables are assigned the default value which depends on the type: `0` for numbers, `false` for booleans, empty string for strings and empty set for node sets.

</div>

<div id="source-xpath_variable_set::get" class="paragraph">

You can get the existing variables with the following functions:

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

The functions return the variable handle, or null pointer if the variable with the specified name is not found.

</div>

<div id="source-xpath_variable_set::set" class="paragraph">

Additionally, there are the helper functions for setting the variable value by name; they try to add the variable with the corresponding type, if it does not exist, and to set the value. If the variable with the same name but with different type is already present, they return `false`; they also return `false` on allocation failure. Note that these functions do not perform any type conversions.

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

The variable values are copied to the internal variable storage, so you can modify or destroy them after the functions return.

</div>

<div id="source-xpath_variable" class="paragraph">

If setting variables by name is not efficient enough, or if you have to inspect variable information or get variable values, you can use variable handles. A variable corresponds to the `xpath_variable` type, and a variable handle is simply a pointer to `xpath_variable`.

</div>

<div class="paragraph">

<span id="source-xpath_variable::type"></span><span id="source-xpath_variable::name"></span> In order to get variable information, you can use one of the following functions:

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

Note that each variable has a distinct type which is specified upon variable creation and can not be changed later.

</div>

<div class="paragraph">

<span id="source-xpath_variable::get_boolean"></span><span id="source-xpath_variable::get_number"></span><span id="source-xpath_variable::get_string"></span><span id="source-xpath_variable::get_node_set"></span> In order to get variable value, you should use one of the following functions, depending on the variable type:

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

These functions return the value of the variable. Note that no type conversions are performed; if the type mismatch occurs, a dummy value is returned (`false` for booleans, `NaN` for numbers, empty string for strings and empty set for node sets).

</div>

<div id="source-xpath_variable::set" class="paragraph">

In order to set variable value, you should use one of the following functions, depending on the variable type:

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

These functions modify the variable value. Note that no type conversions are performed; if the type mismatch occurs, the functions return `false`; they also return `false` on allocation failure. The variable values are copied to the internal variable storage, so you can modify or destroy them after the functions return.

</div>

<div class="paragraph">

This is an example of using variables in XPath queries ([samples/xpath_variables.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/xpath_variables.cpp)):

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

### <a href="#source-xpath.errors" class="anchor"></a><a href="#source-xpath.errors" class="link">8.5. Error handling</a>

<div class="paragraph">

There are two different mechanisms for error handling in XPath implementation; the mechanism used depends on whether exception support is disabled (this is controlled with [PUGIXML_NO_EXCEPTIONS](/docs/pugixml/v1-16/en/02-manual/02-installation/#source-PUGIXML_NO_EXCEPTIONS) define).

</div>

<div class="paragraph">

<span id="source-xpath_exception"></span><span id="source-xpath_exception::result"></span><span id="source-xpath_exception::what"></span> By default, XPath functions throw `xpath_exception` object in case of errors; additionally, in the event any memory allocation fails, an `std::bad_alloc` exception is thrown. Also `xpath_exception` is thrown if the query is evaluated as a node set, but the return type is not node set. If the query constructor succeeds (i.e. no exception is thrown), the query object is valid. Otherwise you can get the error details via one of the following functions:

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

<span id="source-xpath_query::unspecified_bool_type"></span><span id="source-xpath_query::result"></span> If exceptions are disabled, then in the event of parsing failure the query is initialized to invalid state; you can test if the query object is valid by using it in a boolean expression: `if (query) { …​ }`. Additionally, you can get parsing result via the result() accessor:

</div>

<div class="listingblock">

<div class="content">

``` cpp
const xpath_parse_result& xpath_query::result() const;
```

</div>

</div>

<div class="paragraph">

Without exceptions, evaluating invalid query results in `false`, empty string, `NaN` or an empty node set, depending on the type; evaluating a query as a node set results in an empty node set if the return type is not node set.

</div>

<div id="source-xpath_parse_result" class="paragraph">

The information about parsing result is returned via `xpath_parse_result` object. It contains parsing status and the offset of last successfully parsed character from the beginning of the source stream:

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

Parsing result is represented as the error message; it is either a null pointer, in case there is no error, or the error message in the form of ASCII zero-terminated string.

</div>

<div id="source-xpath_parse_result::description" class="paragraph">

`description()` member function can be used to get the error message; it never returns the null pointer, so you can safely use `description()` even if query parsing succeeded. Note that `description()` returns a `char` string even in `PUGIXML_WCHAR_MODE`; you’ll have to call [as_wide](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-as_wide) to get the `wchar_t` string.

</div>

<div id="source-xpath_parse_result::offset" class="paragraph">

In addition to the error message, parsing result has an `offset` member, which contains the offset of last successfully parsed character. This offset is in units of [pugi::char_t](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-char_t) (bytes for character mode, wide characters for wide character mode).

</div>

<div id="source-xpath_parse_result::bool" class="paragraph">

Parsing result object can be implicitly converted to `bool` like this: `if (result) { …​ } else { …​ }`.

</div>

<div class="paragraph">

This is an example of XPath error handling ([samples/xpath_error.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/xpath_error.cpp)):

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

### <a href="#source-xpath.w3c" class="anchor"></a><a href="#source-xpath.w3c" class="link">8.6. Conformance to W3C specification</a>

<div class="paragraph">

Because of the differences in document object models, performance considerations and implementation complexity, pugixml does not provide a fully conformant XPath 1.0 implementation. This is the current list of incompatibilities:

</div>

<div class="ulist">

- Consecutive text nodes sharing the same parent are not merged, i.e. in `<node>text1 <![CDATA[data]]> text2</node>` node should have one text node child, but instead has three.

- Since the document type declaration is not used for parsing, `id()` function always returns an empty node set.

- Namespace nodes are not supported (affects `namespace::` axis).

- Name tests are performed on QNames in XML document instead of expanded names; for `<foo xmlns:ns1='uri' xmlns:ns2='uri'><ns1:child/><ns2:child/></foo>`, query `foo/ns1:*` will return only the first child, not both of them. Compliant XPath implementations can return both nodes if the user provides appropriate namespace declarations.

- String functions consider a character to be either a single `char` value or a single `wchar_t` value, depending on the library configuration; this means that some string functions are not fully Unicode-aware. This affects `substring()`, `string-length()` and `translate()` functions.

</div>

</div>

</div>

</div>
