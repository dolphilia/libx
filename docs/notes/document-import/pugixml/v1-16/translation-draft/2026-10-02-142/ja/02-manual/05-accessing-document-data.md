---
title: "文書データへのアクセス"
description: "pugixml 1.16の公式文書データアクセス説明全文。"
licenseSource: "pugixml-manual-1.16"
---

<div class="sect1">

<span id="source-access"></span>

## <a href="#source-access" class="anchor"></a><a href="#source-access" class="link">5. 文書データへのアクセス</a>

<div class="sectionbody">

<div class="paragraph">

pugixmlには、文書からさまざまな型のデータを取得し、文書を走査するための幅広いインターフェースがあります。この節では、ツリーを変更しない関数をすべて説明します。ただし、XPath関連の関数は除きます。XPathのリファレンスは[XPath](/docs/pugixml/v1-16/ja/02-manual/08-xpath/#source-xpath)を参照してください。[C++インターフェース](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-dom.cpp)で説明したとおり、ツリーのデータへのハンドルには[xml_node](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-xml_node)と[xml_attribute](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-xml_attribute)の2種類があります。ハンドルには特別なnull（空）の値があり、各種関数を通じて伝播するため、より簡潔なコードを書くのに役立ちます。詳細は[この説明](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_null)を参照してください。この節では、nullを入力した場合の各関数の結果を明示します。

</div>

<div class="sect2">

<span id="source-access.basic"></span>

### <a href="#source-access.basic" class="anchor"></a><a href="#source-access.basic" class="link">5.1. 基本的な走査関数</a>

<div class="paragraph">

<span id="source-xml_node::parent"></span><span id="source-xml_node::first_child"></span><span id="source-xml_node::last_child"></span><span id="source-xml_node::next_sibling"></span><span id="source-xml_node::previous_sibling"></span><span id="source-xml_node::first_attribute"></span><span id="source-xml_node::last_attribute"></span><span id="source-xml_attribute::next_attribute"></span><span id="source-xml_attribute::previous_attribute"></span> The internal representation of the document is a tree, where each node has a list of child nodes (the order of children corresponds to their order in the XML representation), and additionally element nodes have a list of attributes, which is also ordered. Several functions are provided in order to let you get from one node in the tree to the other. These functions roughly correspond to the internal representation, and thus are usually building blocks for other methods of traversing (i.e. XPath traversals are based on these functions).

</div> 文書の内部表現はツリーで、各ノードは子ノードのリストを持ちます。子の順序はXML表現での順序と一致します。また、要素ノードは属性のリストも持ち、これにも順序があります。ツリー内のあるノードから別のノードへ移るために、いくつかの関数が用意されています。これらの関数は内部表現におおむね対応しているため、通常はほかの走査方法の構成要素になります。たとえば、XPathによる走査はこれらの関数に基づいています。

<div class="listingblock">

<div class="content">

``` cpp
xml_node xml_node::parent() const;
xml_node xml_node::first_child() const;
xml_node xml_node::last_child() const;
xml_node xml_node::next_sibling() const;
xml_node xml_node::previous_sibling() const;

xml_attribute xml_node::first_attribute() const;
xml_attribute xml_node::last_attribute() const;
xml_attribute xml_attribute::next_attribute() const;
xml_attribute xml_attribute::previous_attribute() const;
```

</div>

</div>

<div class="paragraph">

`parent`はノードの親を返します。文書以外のnullでないノードは、すべてnullでない親を持ちます。`first_child`と`last_child`は、それぞれ最初と最後の子を返します。空でない子ノードリストを持てるのは、文書ノードと要素ノードだけです。子がない場合、どちらもnullノードを返します。`next_sibling`と`previous_sibling`は、子リストでこのノードのすぐ右と左にあるノードを、それぞれ返します。たとえば`<a/><b/><c/>`で、`<b/>`を指すハンドルの`next_sibling`を呼ぶと`<c/>`を指すハンドルになり、`previous_sibling`を呼ぶと`<a/>`を指すハンドルになります。次または前の兄弟がない場合（リストの最後または最初のノードの場合）、これらの関数はnullノードを返します。`first_attribute`、`last_attribute`、`next_attribute`、`previous_attribute`も、対応する子ノード関数と同様に動作し、同じ方法で属性リストを反復処理できます。

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
<td class="content">メモリー消費を抑えるため、属性は親ノードへのリンクを持ちません。そのため、<code>xml_attribute::parent()</code>関数はありません。</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

上記の関数のいずれも、nullハンドルに対して呼び出すとnullハンドルを返します。たとえば`node.first_child().next_sibling()`は`node`の2番目の子を返しますが、`node`がnull、子がまったくない、または子ノードが1個だけの場合にはnullハンドルを返します。

</div>

<div class="paragraph">

これらの関数を使うと、次のようにすべての子ノードを反復処理し、すべての属性を表示できます（[samples/traverse_base.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_base.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
for (pugi::xml_node tool = tools.first_child(); tool; tool = tool.next_sibling())
{
    std::cout << "Tool:";

    for (pugi::xml_attribute attr = tool.first_attribute(); attr; attr = attr.next_attribute())
    {
        std::cout << " " << attr.name() << "=" << attr.value();
    }

    std::cout << std::endl;
}
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-access.nodedata"></span>

### <a href="#source-access.nodedata" class="anchor"></a><a href="#source-access.nodedata" class="link">5.2. ノードデータの取得</a>

<div class="paragraph">

<span id="source-xml_node::name"></span><span id="source-xml_node::value"></span> 構造情報（親、子ノード、属性）に加えて、ノードは名前と値を持つことがあり、どちらも文字列です。ノード型によっては、名前や値がありません。[node_document](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_document)ノードは名前も値も持ちません。[node_element](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_element)と[node_declaration](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_declaration)ノードは常に名前を持ちますが、値は持ちません。[node_pcdata](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_pcdata)、[node_cdata](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_cdata)、[node_comment](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_comment)、[node_doctype](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_doctype)ノードは名前を持たず、常に値を持ちます。ただし、値は空の場合もあります。[node_pi](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_pi)ノードは常に名前と値を持ちますが、やはり値は空の場合があります。ノードの名前や値を取得するには、次の関数を使えます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
const char_t* xml_node::name() const;
const char_t* xml_node::value() const;
```

</div>

</div>

<div class="paragraph">

ノードが名前や値を持たない場合や、ノードハンドルがnullの場合、これらの関数は空文字列を返します。nullポインターは返しません。

</div>

<div id="source-xml_node::child_value" class="paragraph">

データをノードのテキスト内容として保存することは一般的です。たとえば`<node><description>This is a node</description></node>`です。この場合、`<description>`ノード自体は値を持ちませんが、値が`"This is a node"`の[node_pcdata](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_pcdata)型の子を持ちます。pugixmlには、このようなデータを解析するための補助関数があります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
const char_t* xml_node::child_value() const;
const char_t* xml_node::child_value(const char_t* name) const;
xml_text xml_node::text() const;
```

</div>

</div>

<div class="paragraph">

`child_value()`は、[node_pcdata](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_pcdata)または[node_cdata](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_cdata)型の最初の子の値を返します。`child_value(name)`は`child(name).child_value()`の単純なラッパーです。上の例では、`node.child_value("description")`と`description.child_value()`のどちらも`"This is a node"`という文字列を返します。該当する型の子がない場合や、ハンドルがnullの場合、`child_value`関数は空文字列を返します。

</div>

<div class="paragraph">

`text()`は、値の取得より複雑な場合にPCDATAの内容を扱うための特別なオブジェクトを返します。[テキスト内容の操作](#source-access.text)で説明します。

</div>

<div class="paragraph">

これらの関数の一部を使う例が、[次の節の末尾](#source-code_traverse_base_data)にあります。

</div>

</div>

<div class="sect2">

<span id="source-access.attrdata"></span>

### <a href="#source-access.attrdata" class="anchor"></a><a href="#source-access.attrdata" class="link">5.3. 属性データの取得</a>

<div class="paragraph">

<span id="source-xml_attribute::name"></span><span id="source-xml_attribute::value"></span> すべての属性は名前と値を持ち、どちらも文字列です。値は空の場合もあります。`xml_node`と同様に、対応するアクセサーが2つあります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
const char_t* xml_attribute::name() const;
const char_t* xml_attribute::value() const;
```

</div>

</div>

<div class="paragraph">

属性ハンドルがnullの場合、これらの関数は空文字列を返します。nullポインターは返しません。

</div>

<div id="source-xml_attribute::as_string" class="paragraph">

属性ハンドルがnullのときに空でない文字列が必要なら、`as_string`アクセサーを使えます。たとえば、XML属性からオプション値を取得し、指定されていない場合には`""`ではなく`"sorted"`を既定値にしたい場合です。

</div>

<div class="listingblock">

<div class="content">

``` cpp
const char_t* xml_attribute::as_string(const char_t* def = "") const;
```

</div>

</div>

<div class="paragraph">

属性ハンドルがnullの場合は、`def`引数を返します。引数を指定しなければ、この関数は`value()`と同じです。

</div>

<div class="paragraph">

<span id="source-xml_attribute::as_int"></span><span id="source-xml_attribute::as_uint"></span><span id="source-xml_attribute::as_double"></span><span id="source-xml_attribute::as_float"></span><span id="source-xml_attribute::as_bool"></span><span id="source-xml_attribute::as_llong"></span><span id="source-xml_attribute::as_ullong"></span> 多くの場合、属性値には文字列以外の型があります。たとえば、XMLでは文字列として表されていても、常に整数として扱うべき値を含む属性があります。pugixmlには、属性値を別の型へ変換するアクセサーがいくつかあります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
int xml_attribute::as_int(int def = 0) const;
unsigned int xml_attribute::as_uint(unsigned int def = 0) const;
double xml_attribute::as_double(double def = 0) const;
float xml_attribute::as_float(float def = 0) const;
bool xml_attribute::as_bool(bool def = false) const;
long long xml_attribute::as_llong(long long def = 0) const;
unsigned long long xml_attribute::as_ullong(unsigned long long def = 0) const;
```

</div>

</div>

<div class="paragraph">

`as_int`、`as_uint`、`as_llong`、`as_ullong`、`as_double`、`as_float`は、属性値を数値へ変換します。属性ハンドルがnullの場合は、`def`引数（既定値は0）を返します。それ以外の場合は、先頭の空白文字をすべて取り除き、残りの文字列を解析します。整数の場合は10進数または16進数です。これは`as_int`、`as_uint`、`as_llong`、`as_ullong`に適用され、数値に`0x`または`0X`の接頭辞があれば16進数として扱います。浮動小数点数の場合は、10進表記または科学的記数法で解析します（`as_double`または`as_float`）。

</div>

<div class="paragraph">

整数変換では、数値でない文字列に対して0を返し、範囲外の値は表現可能な最も近い値に制限されます。浮動小数点変換の結果は実装に依存します（`PUGIXML_CHARCONV_FLOAT`を使うかどうかに応じて、CRTまたはSTL）。

</div>

<div class="admonitionblock caution">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td class="icon"><div class="title">
注意
</div></td>
<td class="content">浮動小数点変換関数は、<code>setlocale</code>で設定された現在のCロケールに依存するため、ロケールが<code>"C"</code>以外の場合、予想外の結果を返すことがあります。<code>PUGIXML_CHARCONV_FLOAT</code>を指定してpugixmlをビルドした場合には、この制約は当てはまりません。</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

`as_bool`は、次の方法で属性値を真偽値へ変換します。属性ハンドルがnullの場合は、`def`引数（既定値は`false`）を返します。属性値が空の場合は`false`を返します。それ以外の場合は、最初の文字が`'1', 't', 'T', 'y', 'Y'`のいずれかであれば`true`を返します。このため、`"true"`や`"yes"`などの文字列は`true`、`"false"`や`"no"`などの文字列は`false`と認識されます。より複雑な照合が必要なら、独自の関数を書く必要があります。

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
<td class="content"><code>as_llong</code>と<code>as_ullong</code>は、プラットフォームが<code>long long</code>型に対応している場合にだけ使えます。</td>
</tr>
</tbody>
</table>

</div>

<div id="source-code_traverse_base_data" class="paragraph">

これらの関数とノードデータ取得関数を使う例です（[samples/traverse_base.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_base.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
for (pugi::xml_node tool = tools.child("Tool"); tool; tool = tool.next_sibling("Tool"))
{
    std::cout << "Tool " << tool.attribute("Filename").value();
    std::cout << ": AllowRemote " << tool.attribute("AllowRemote").as_bool();
    std::cout << ", Timeout " << tool.attribute("Timeout").as_int();
    std::cout << ", Description '" << tool.child_value("Description") << "'\n";
}
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-access.contents"></span>

### <a href="#source-access.contents" class="anchor"></a><a href="#source-access.contents" class="link">5.4. 内容に基づく走査関数</a>

<div class="paragraph">

<span id="source-xml_node::child"></span><span id="source-xml_node::attribute"></span><span id="source-xml_node::next_sibling_name"></span><span id="source-xml_node::previous_sibling_name"></span> 文書の走査では、指定した名前のノードや属性を探すことが多いため、そのための専用の関数があります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_node xml_node::child(const char_t* name) const;
xml_node xml_node::child(string_view_t name) const;
xml_attribute xml_node::attribute(const char_t* name) const;
xml_attribute xml_node::attribute(string_view_t name) const;
xml_node xml_node::next_sibling(const char_t* name) const;
xml_node xml_node::next_sibling(string_view_t name) const;
xml_node xml_node::previous_sibling(const char_t* name) const;
xml_node xml_node::previous_sibling(string_view_t name) const;
```

</div>

</div>

<div class="paragraph">

`child`と`attribute`は、指定した名前の最初の子または属性を返します。`next_sibling`と`previous_sibling`は、対応する方向で、指定した名前の最初の兄弟を返します。文字列の比較ではすべて、大文字と小文字を区別します。ノードハンドルがnullの場合や、指定した名前のノードや属性がない場合は、nullハンドルを返します。

</div>

<div class="paragraph">

`child`と`next_sibling`を組み合わせると、次のように指定した名前のすべての子ノードをループで処理できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
for (pugi::xml_node tool = tools.child("Tool"); tool; tool = tool.next_sibling("Tool"))
```

</div>

</div>

<div id="source-xml_node::attribute_hinted" class="paragraph">

`attribute`は、目的の属性を名前で探す必要があります。ノードに多くの属性がある場合、名前で1つずつ探すと時間がかかることがあります。ノード内での属性の順序が分かっていれば、より高速な関数を使えます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_attribute xml_node::attribute(const char_t* name, xml_attribute& hint) const;
xml_attribute xml_node::attribute(string_view_t name, xml_attribute& hint) const;
```

</div>

</div>

<div class="paragraph">

追加の`hint`引数は、属性がありそうな位置の推定に使われ、次の属性の位置へ更新されます。そのため、複数の属性を正しい順序で探すと、性能を最大限に高められます。`hint`はnullか、そのノードに属する属性でなければなりません。それ以外の場合の動作は未定義です。

</div>

<div class="paragraph">

この関数は、次のように使えます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_attribute hint;
xml_attribute id = node.attribute("id", hint);
xml_attribute name = node.attribute("name", hint);
xml_attribute version = node.attribute("version", hint);
```

</div>

</div>

<div class="paragraph">

このコードは属性の順序にかかわらず正しく動作しますが、`"id"`、`"name"`、`"version"`がこの順に並んでいれば、より高速になります。

</div>

<div id="source-xml_node::find_child_by_attribute" class="paragraph">

必要なノードを、一意の名前ではなく、ある属性の値で指定することもあります。たとえば、各ノードが一意のIDを持つノードの集合は一般的です。`<group><item id="1"/> <item id="2"/></group>`のような場合です。属性値に基づいて子ノードを探す関数が2つあります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_node xml_node::find_child_by_attribute(const char_t* name, const char_t* attr_name, const char_t* attr_value) const;
xml_node xml_node::find_child_by_attribute(const char_t* attr_name, const char_t* attr_value) const;
```

</div>

</div>

<div class="paragraph">

引数が3つの関数は、指定した名前を持ち、指定した名前と値の属性を持つ、最初の子ノードを返します。引数が2つの関数はノード名の検査を省くため、異なる種類が混在する集合の検索に役立ちます。ノードハンドルがnullの場合や、ノードが見つからない場合は、nullハンドルを返します。文字列の比較ではすべて、大文字と小文字を区別します。

</div>

<div class="paragraph">

上記の関数では、すべての引数が有効な文字列でなければなりません。nullポインターを渡した場合の動作は未定義です。

</div>

<div class="paragraph">

これらの関数を使う例です（[samples/traverse_base.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_base.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
std::cout << "Tool for *.dae generation: " << tools.find_child_by_attribute("Tool", "OutputFileMasks", "*.dae").attribute("Filename").value() << "\n";

for (pugi::xml_node tool = tools.child("Tool"); tool; tool = tool.next_sibling("Tool"))
{
    std::cout << "Tool " << tool.attribute("Filename").value() << "\n";
}
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-access.rangefor"></span>

### <a href="#source-access.rangefor" class="anchor"></a><a href="#source-access.rangefor" class="link">5.5. 範囲forループへの対応</a>

<div class="paragraph">

<span id="source-xml_node::children"></span><span id="source-xml_node::attributes"></span> C++コンパイラーが範囲forループに対応していれば、ノードや属性の列挙に使えます。これはC++11の機能で、Microsoft Visual Studio 2012以降、GCC 4.6以降、Clang 3.0以降が対応しています。そのための補助機能が用意されています。[Boost Foreach](http://www.boost.org/libs/foreach/)とも互換性があり、C++11以前のほかのforeach機能でも使える可能性があります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
implementation-defined-type xml_node::children() const;
implementation-defined-type xml_node::children(const char_t* name) const;
implementation-defined-type xml_node::attributes() const;
```

</div>

</div>

<div class="paragraph">

`children`はすべての子ノードを列挙でき、`name`引数を取る`children`は指定した名前のすべての子ノードを列挙できます。`attributes`はノードのすべての属性を列挙できます。範囲forの構文では、ノードオブジェクト自体も使えます。これは`children()`を使うことと同じです。

</div>

<div class="paragraph">

これらの関数を使う例です（[samples/traverse_rangefor.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_rangefor.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
for (pugi::xml_node tool: tools.children("Tool"))
{
    std::cout << "Tool:";

    for (pugi::xml_attribute attr: tool.attributes())
    {
        std::cout << " " << attr.name() << "=" << attr.value();
    }

    for (pugi::xml_node child: tool.children())
    {
        std::cout << ", child " << child.name();
    }

    std::cout << std::endl;
}
```

</div>

</div>

<div class="paragraph">

`children()`を使うとコードの意図が明確になりますが、各ノード自体も子ノードのコンテナーとして扱えます。次の節で説明する`begin()`と`end()`メンバー関数があるためです。このため、ノード自体を使うだけで、その子を反復処理できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
for (pugi::xml_node child: tool) ...
```

</div>

</div>

<div class="paragraph">

C++20では、ノードと、`children()`や`attributes()`が返すオブジェクトを、範囲として使うこともできます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
auto tf =
    tools.children("Tool")
    | std::views::filter([](auto node) { return node.attribute("AllowRemote").as_bool(); })
    | std::views::reverse;

for (pugi::xml_node tool: tf) ...
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-access.iterators"></span>

### <a href="#source-access.iterators" class="anchor"></a><a href="#source-access.iterators" class="link">5.6. イテレーターによるノード・属性リストの走査</a>

<div class="paragraph">

<span id="source-xml_node_iterator"></span><span id="source-xml_attribute_iterator"></span><span id="source-xml_node::begin"></span><span id="source-xml_node::end"></span><span id="source-xml_node::attributes_begin"></span><span id="source-xml_node::attributes_end"></span> 子ノードリストと属性リストは、単純な双方向連結リストです。反復処理には`previous_sibling`や`next_sibling`などの関数を使えますが、pugixmlにはノードと属性のイテレーターもあります。これにより、ノードを、ほかのノードや属性のコンテナーとして扱えます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
class xml_node_iterator;
class xml_attribute_iterator;

typedef xml_node_iterator xml_node::iterator;
iterator xml_node::begin() const;
iterator xml_node::end() const;

typedef xml_attribute_iterator xml_node::attribute_iterator;
attribute_iterator xml_node::attributes_begin() const;
attribute_iterator xml_node::attributes_end() const;
```

</div>

</div>

<div class="paragraph">

`begin`と`attributes_begin`は、それぞれ最初のノードと属性を指すイテレーターを返します。`end`と`attributes_end`は、それぞれノードリストと属性リストの末尾の次を指すイテレーターを返します。このイテレーターは参照外しできませんが、デクリメントすると、リストの最後の要素を指すイテレーターになります。ただし、空のリストでは、末尾の次を指すイテレーターをデクリメントした場合の動作は未定義です。末尾の次を指すイテレーターは、通常、反復ループの終了値として使います（下の例を参照）。既存のハンドルを指すイテレーターが必要なら、`xml_node_iterator(node)`のように、ハンドル1つをコンストラクターの引数として渡して作れます。`xml_attribute_iterator`には、属性とその親ノードの両方を渡す必要があります。

</div>

<div class="paragraph">

nullノードで呼び出した場合、`begin`と`end`は等しいイテレーターを返し、これらは参照外しできません。`attributes_begin`と`attributes_end`も同様です。イテレーターを正しく使う場合、nullノードの子ノードや属性の集合は、空の集合として扱われます。

</div>

<div class="paragraph">

どちらのイテレーターも双方向イテレーターの意味論を持ちます。つまり、インクリメントとデクリメントはできますが、効率的なランダムアクセスには対応しません。比較や参照外しなど、通常のイテレーター操作をすべて使えます。指しているノードや属性のオブジェクトをツリーから削除すると、イテレーターは無効になります。ノードや属性の追加では、イテレーターは無効になりません。

</div>

<div class="paragraph">

イテレーターで文書を走査する例です（[samples/traverse_iter.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_iter.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
for (pugi::xml_node_iterator it = tools.begin(); it != tools.end(); ++it)
{
    std::cout << "Tool:";

    for (pugi::xml_attribute_iterator ait = it->attributes_begin(); ait != it->attributes_end(); ++ait)
    {
        std::cout << " " << ait->name() << "=" << ait->value();
    }

    std::cout << std::endl;
}
```

</div>

</div>

<div class="admonitionblock caution">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td class="icon"><div class="title">
注意
</div></td>
<td class="content">ノードと属性のイテレーターは、constイテレーターと非constイテレーターの中間のようなものです。参照外しすると、オブジェクトへの非const参照が得られるため、ツリーを変更する操作に使えます。ただし、この参照を代入で変更する操作、たとえば<code>std::sort</code>のような関数にイテレーターを渡す操作では、期待した結果になりません。代入は、イテレーター内に保持されたローカルなハンドルを変更するためです。</td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<span id="source-access.walker"></span>

### <a href="#source-access.walker" class="anchor"></a><a href="#source-access.walker" class="link">5.7. xml_tree_walkerによる再帰的な走査</a>

<div id="source-xml_tree_walker" class="paragraph">

これまでに説明した方法では、ノードの直接の子を走査できます。ツリーの深い走査を行うには、再帰関数などの方法を使う必要があります。ただし、pugixmlには、部分ツリーを深さ優先で走査する補助機能があります。使うには、`xml_tree_walker`インターフェースを実装し、`traverse`を呼び出してください。

</div>

<div class="listingblock">

<div class="content">

``` cpp
class xml_tree_walker
{
public:
    virtual bool begin(xml_node& node);
    virtual bool for_each(xml_node& node) = 0;
    virtual bool end(xml_node& node);

    int depth() const;
};

bool xml_node::traverse(xml_tree_walker& walker);
```

</div>

</div>

<div class="paragraph">

<span id="source-xml_tree_walker::begin"></span><span id="source-xml_tree_walker::for_each"></span><span id="source-xml_tree_walker::end"></span><span id="source-xml_node::traverse"></span> 走査の根で`traverse`を呼び出すと、次の順序で走査が始まります。

</div>

<div class="ulist">

- 最初に、走査の根を引数として`begin`が呼び出されます。

- 次に、走査の根を除く、走査対象の部分ツリーのすべてのノードについて、深さ優先の順序で`for_each`が呼び出されます。ノードが引数として渡されます。

- 最後に、走査の根を引数として`end`が呼び出されます。

</div>

<div class="paragraph">

`begin`、`end`、またはいずれかの`for_each`の呼び出しが`false`を返すと、走査は終了し、走査結果として`false`を返します。それ以外の場合は、結果として`true`を返します。`begin`や`end`をオーバーライドする必要はありません。既定の実装は`true`を返します。

</div>

<div id="source-xml_tree_walker::depth" class="paragraph">

`depth`を呼び出すと、いつでも走査の根に対するノードの相対的な深さを取得できます。`begin`や`end`から呼び出した場合は`-1`を返します。`for_each`から呼び出した場合は、0から数える深さを返します。走査の根の子はすべて深さ0、孫はすべて深さ1、という具合です。

</div>

<div class="paragraph">

xml_tree_walkerでツリー階層を走査する例です（[samples/traverse_walker.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_walker.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
struct simple_walker: pugi::xml_tree_walker
{
    virtual bool for_each(pugi::xml_node& node)
    {
        for (int i = 0; i < depth(); ++i) std::cout << "  "; // indentation

        std::cout << node_types[node.type()] << ": name='" << node.name() << "', value='" << node.value() << "'\n";

        return true; // continue traversal
    }
};
```

</div>

</div>

<div class="listingblock">

<div class="content">

``` cpp
simple_walker walker;
doc.traverse(walker);
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-access.predicate"></span>

### <a href="#source-access.predicate" class="anchor"></a><a href="#source-access.predicate" class="link">5.8. 述語によるノード・属性の検索</a>

<div class="paragraph">

<span id="source-xml_node::find_attribute"></span><span id="source-xml_node::find_child"></span><span id="source-xml_node::find_node"></span> 既知の内容を持つノードや属性を取得する関数はありますが、単純な問い合わせでも十分でない場合がよくあります。目的のノードや属性が見つかるまで手動で反復処理する代わりに、述語を作って`find_`関数のいずれかを呼び出せます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
template <typename Predicate> xml_attribute xml_node::find_attribute(Predicate pred) const;
template <typename Predicate> xml_node xml_node::find_child(Predicate pred) const;
template <typename Predicate> xml_node xml_node::find_node(Predicate pred) const;
```

</div>

</div>

<div class="paragraph">

述語は、通常の関数か関数オブジェクトで、引数を1つ受け取り、`bool`を返すものにしてください。引数の型は、`find_attribute`では`xml_attribute`、`find_child`と`find_node`では`xml_node`です。nullハンドルを引数として述語が呼び出されることはありません。

</div>

<div class="paragraph">

`find_attribute`は、指定したノードのすべての属性を反復処理し、述語が`true`を返した最初の属性を返します。すべての属性で述語が`false`を返した場合や、属性がない場合（ノードがnullの場合も含む）は、null属性を返します。

</div>

<div class="paragraph">

`find_child`は、指定したノードのすべての子ノードを反復処理し、述語が`true`を返した最初のノードを返します。すべてのノードで述語が`false`を返した場合や、子ノードがない場合（ノードがnullの場合も含む）は、nullノードを返します。

</div>

<div class="paragraph">

`find_node`は、指定したノードの部分ツリーを、ノード自体を除いて深さ優先で走査し、述語が`true`を返した最初のノードを返します。すべてのノードで述語が`false`を返した場合や、部分ツリーが空の場合は、nullノードを返します。

</div>

<div class="paragraph">

述語に基づく関数を使う例です（[samples/traverse_predicate.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_predicate.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool small_timeout(pugi::xml_node node)
{
    return node.attribute("Timeout").as_int() < 20;
}

struct allow_remote_predicate
{
    bool operator()(pugi::xml_attribute attr) const
    {
        return strcmp(attr.name(), "AllowRemote") == 0;
    }

    bool operator()(pugi::xml_node node) const
    {
        return node.attribute("AllowRemote").as_bool();
    }
};
```

</div>

</div>

<div class="listingblock">

<div class="content">

``` cpp
// Find child via predicate (looks for direct children only)
std::cout << tools.find_child(allow_remote_predicate()).attribute("Filename").value() << std::endl;

// Find node via predicate (looks for all descendants in depth-first order)
std::cout << doc.find_node(allow_remote_predicate()).attribute("Filename").value() << std::endl;

// Find attribute via predicate
std::cout << tools.last_child().find_attribute(allow_remote_predicate()).value() << std::endl;

// We can use simple functions instead of function objects
std::cout << tools.find_child(small_timeout).attribute("Filename").value() << std::endl;
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-access.text"></span>

### <a href="#source-access.text" class="anchor"></a><a href="#source-access.text" class="link">5.9. テキスト内容の操作</a>

<div id="source-xml_text" class="paragraph">

データをノードのテキスト内容として保存することは一般的です。たとえば`<node><description>This is a node</description></node>`です。この場合、`<description>`ノード自体は値を持ちませんが、値が`"This is a node"`の[node_pcdata](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_pcdata)型の子を持ちます。pugixmlには、このようなデータを扱う専用のクラス`xml_text`があります。テキストオブジェクトを使ったデータの変更は、[文書データの変更の説明](/docs/pugixml/v1-16/ja/02-manual/06-modifying-document-data/#source-modify.text)で扱います。この節では、`xml_text`のアクセスインターフェースを説明します。

</div>

<div id="source-xml_node::text" class="paragraph">

`text()`メソッドを使うと、ノードからテキストオブジェクトを取得できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_text xml_node::text() const;
```

</div>

</div>

<div class="paragraph">

ノードの型が`node_pcdata`または`node_cdata`なら、ノード自体を使ってデータを返します。それ以外の場合は、最初の`node_pcdata`または`node_cdata`型の子ノードを使います。

</div>

<div class="paragraph">

<span id="source-xml_text::empty"></span><span id="source-xml_text::unspecified_bool_type"></span> テキストオブジェクトを`if (text) { …​ }`や`if (!text) { …​ }`のように真偽値として使うと、有効なPCDATA・CDATAノードに結び付いているかどうかを確認できます。`empty()`メソッドでも確認できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xml_text::empty() const;
```

</div>

</div>

<div id="source-xml_text::get" class="paragraph">

テキストオブジェクトから、その内容（PCDATA・CDATAノードの値）を取得するには、次の関数を使えます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
const char_t* xml_text::get() const;
```

</div>

</div>

<div class="paragraph">

テキストオブジェクトが空の場合、この関数は空文字列を返します。nullポインターは返しません。

</div>

<div class="paragraph">

<span id="source-xml_text::as_string"></span><span id="source-xml_text::as_int"></span><span id="source-xml_text::as_uint"></span><span id="source-xml_text::as_double"></span><span id="source-xml_text::as_float"></span><span id="source-xml_text::as_bool"></span><span id="source-xml_text::as_llong"></span><span id="source-xml_text::as_ullong"></span> テキストオブジェクトが空のときに空でない文字列が必要な場合や、テキスト内容が、文字列として保存された数値や真偽値の場合には、次のアクセサーを使えます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
const char_t* xml_text::as_string(const char_t* def = "") const;
int xml_text::as_int(int def = 0) const;
unsigned int xml_text::as_uint(unsigned int def = 0) const;
double xml_text::as_double(double def = 0) const;
float xml_text::as_float(float def = 0) const;
bool xml_text::as_bool(bool def = false) const;
long long xml_text::as_llong(long long def = 0) const;
unsigned long long xml_text::as_ullong(unsigned long long def = 0) const;
```

</div>

</div>

<div class="paragraph">

上記の関数はすべて、対応する`xml_attribute`メンバーと同じ意味を持ちます。テキストオブジェクトが空なら既定値の引数を返し、同じ規則と制約に従って、テキスト内容を対象の型へ変換します。詳細は[属性関数の説明](#source-xml_attribute::as_int)を参照してください。

</div>

<div id="source-xml_text::data" class="paragraph">

`xml_text`は、基本的には`xml_node`の値を操作する補助クラスです。[node_pcdata](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_pcdata)または[node_cdata](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_cdata)型のノードに結び付いています。このノードを取得するには、次の関数を使えます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_node xml_text::data() const;
```

</div>

</div>

<div class="paragraph">

つまり、`text`が`xml_text`オブジェクトである場合、`text.get()`を呼び出すことは、`text.data().value()`を呼び出すことと同じです。

</div>

<div class="paragraph">

`xml_text`オブジェクトを使う例です（[samples/text.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/text.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
std::cout << "Project name: " << project.child("name").text().get() << std::endl;
std::cout << "Project version: " << project.child("version").text().as_double() << std::endl;
std::cout << "Project visibility: " << (project.child("public").text().as_bool(/* def= */ true) ? "public" : "private") << std::endl;
std::cout << "Project description: " << project.child("description").text().get() << std::endl;
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-access.misc"></span>

### <a href="#source-access.misc" class="anchor"></a><a href="#source-access.misc" class="link">5.10. その他の関数</a>

<div id="source-xml_node::root" class="paragraph">

あるノードの文書の根を取得するには、次の関数を使えます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_node xml_node::root() const;
```

</div>

</div>

<div class="paragraph">

この関数は、そのノードが属する文書の根ノードである、[node_document](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_document)型のノードを返します。ただし、ノードがnullの場合は、nullノードを返します。

</div>

<div class="paragraph">

<span id="source-xml_node::path"></span><span id="source-xml_node::first_element_by_path"></span> pugixmlは複雑なXPath式に対応していますが、単純なパス処理機能が必要な場合もあります。ノードのパスを取得する関数と、パスをノードへ変換する関数の2つがあります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
string_t xml_node::path(char_t delimiter = '/') const;
xml_node xml_node::first_element_by_path(const char_t* path, char_t delimiter = '/') const;
```

</div>

</div>

<div class="paragraph">

ノードのパスは、区切り文字（既定では`/`）で区切られたノード名からなります。自身（`.`）と親（`..`）を表す疑似的な名前も使えるため、`"../../foo/./bar"`は有効なパスです。`path`は文書の根からノードへのパスを返し、`first_element_by_path`は指定したパスで表されるノードを探します。パスは絶対パスにも、指定したノードからの相対パスにもできます。絶対パスは区切り文字で始まり、それ以降を文書の根からの相対パスとして扱います。たとえば、文書`<a><b><c/></b></a>`では、ノード`<c/>`のパスは`"a/b/c"`です。文書に対してパス`"a/b"`で`first_element_by_path`を呼び出すと、ノード`<b/>`になります。ノード`<a/>`に対してパス`"../a/./b/../."`で`first_element_by_path`を呼び出すと、ノード`<a/>`になります。パス`"/a"`で`first_element_by_path`を呼び出すと、どのノードからでもノード`<a/>`になります。

</div>

<div class="paragraph">

パスの構成要素が曖昧な場合（同じ名前のノードが2つある場合）は、最初のものを選びます。パスが文書内のノードを一意に識別する保証はありません。パスのいずれかの構成要素が見つからなければ、`first_element_by_path`の結果はnullノードです。また、nullノードで`first_element_by_path`を呼び出した場合もnullノードを返し、この場合はパスの内容は関係ありません。nullノードで`path`を呼び出すと、空文字列を返します。

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
<td class="content"><code>path</code>は結果をSTL文字列として返すため、<a href="/docs/pugixml/v1-16/ja/02-manual/02-installation/#source-PUGIXML_NO_STL">PUGIXML_NO_STL</a>を定義した場合は使えません。</td>
</tr>
</tbody>
</table>

</div>

<div id="source-xml_node::offset_debug" class="paragraph">

効率上の理由から、pugixmlは解析時にノードの行や列の情報を記録しません。ただし、解析後にノードが大きく変更されていなければ、XMLバッファの先頭からのオフセットを取得できます。つまり、名前や値が変更されず、ノード自体が元のものである場合です。ツリーから削除され、後で追加し直されたノードではいけません。

</div>

<div class="listingblock">

<div class="content">

``` cpp
ptrdiff_t xml_node::offset_debug() const;
```

</div>

</div>

<div class="paragraph">

オフセットを取得できない場合、この関数は-1を返します。これは、ノードがnull、もともとストリームから解析されたものではない、または大きく変更された場合に起こります。それ以外の場合は、XMLバッファの先頭からノードのデータまでのオフセットを、[pugi::char_t](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-char_t)単位で返します。解析オフセットの詳細は、[解析エラー処理の説明](/docs/pugixml/v1-16/ja/02-manual/04-loading-documents/#source-xml_parse_result::offset)を参照してください。

</div>

</div>

</div>

</div>
