---
title: "文書データの変更"
description: "pugixml 1.16の公式文書データ変更説明全文。"
licenseSource: "pugixml-manual-1.16"
documentContext: [{"kind":"editorial","html":"<p>（訳注：原文は戻り値を「属性」と記していますが、上の関数宣言ではテキストオブジェクトへの参照を返します。）</p>","context":{"anchor":"65-テキスト内容の操作","label":"<a href=\"#source-modify.text\" class=\"anchor\"></a><a href=\"#source-modify.text\" class=\"link\">6.5. テキスト内容の操作</a>"}}]
---

<div class="sect1">

<span id="source-modify"></span>

## <a href="#source-modify" class="anchor"></a><a href="#source-modify" class="link">6. 文書データの変更</a>

<div class="sectionbody">

<div class="paragraph">

pugixmlの文書は完全に変更可能です。文書の構造を全面的に変えたり、ノードや属性のデータを変更したりできます。この節では、関連する関数を説明します。すべての関数はメモリー管理と構造の整合性を自ら処理するため、結果のツリーは常に構造上有効です。ただし、不正なXMLツリーを作ることはできます。たとえば、同じ名前の属性を2つ追加したり、属性やノードの名前を空文字列や不正な文字列に設定したりする場合です。ツリーの変更は性能とメモリー消費について最適化されているため、十分なメモリーがあれば、pugixmlで文書を一から作成し、後でファイルやストリームへ保存できます。誤りの生じやすい手動のテキスト書き出しに頼る必要がなく、過度のオーバーヘッドもありません。

</div>

<div class="paragraph">

ノードや属性のデータまたは構造を変更するメンバー関数は、すべて非constであり、constハンドルでは呼び出せません。ただし、`void foo(const pugi::xml_node& n) { pugi::xml_node nc = n; }`のような単純な代入で、constハンドルを非constハンドルへ簡単に変換できます。このため、ここでのconstの正しい使用は、主に追加の説明として役立ちます。

</div>

<div class="sect2">

<span id="source-modify.nodedata"></span>

### <a href="#source-modify.nodedata" class="anchor"></a><a href="#source-modify.nodedata" class="link">6.1. ノードデータの設定</a>

<div class="paragraph">

<span id="source-xml_node::set_name"></span><span id="source-xml_node::set_value"></span> 前述のとおり、ノードは名前と値を持つことがあり、どちらも文字列です。ノード型によっては、名前や値がありません。[node_document](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_document)ノードは名前も値も持ちません。[node_element](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_element)と[node_declaration](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_declaration)ノードは常に名前を持ちますが、値は持ちません。[node_pcdata](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_pcdata)、[node_cdata](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_cdata)、[node_comment](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_comment)、[node_doctype](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_doctype)ノードは名前を持たず、常に値を持ちます。ただし、値は空の場合もあります。[node_pi](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_pi)ノードは常に名前と値を持ちますが、やはり値は空の場合があります。ノードの名前や値を設定するには、次の関数を使えます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xml_node::set_name(const char_t* rhs);
bool xml_node::set_name(const char_t* rhs, size_t sz);
bool xml_node::set_name(string_view_t rhs);
bool xml_node::set_value(const char_t* rhs);
bool xml_node::set_value(const char_t* rhs, size_t size);
bool xml_node::set_value(string_view_t rhs);
```

</div>

</div>

<div class="paragraph">

これらの関数は、名前や値を指定した文字列へ設定することを試み、操作の結果を返します。ノードが名前や値を持てない場合（たとえば、[node_pcdata](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_pcdata)ノードで`set_name`を呼び出す場合）、ノードハンドルがnullの場合、または処理に必要なメモリーが足りない場合、操作は失敗します。渡した文字列は文書が管理するメモリーへコピーされるため、関数が戻った後で破棄できます。たとえば、スタックに割り当てたバッファを安全に渡せます。名前や値の内容は検証されないため、有効なXML名だけを使うよう注意してください。そうしないと、文書が不正な形式になる場合があります。

</div>

<div class="paragraph">

ノードの名前と値を設定する例です（[samples/modify_base.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/modify_base.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
pugi::xml_node node = doc.child("node");

// change node name
std::cout << node.set_name("notnode");
std::cout << ", new node name: " << node.name() << std::endl;

// change comment text
std::cout << doc.last_child().set_value("useless comment");
std::cout << ", new comment text: " << doc.last_child().value() << std::endl;

// we can't change value of the element or name of the comment
std::cout << node.set_value("1") << ", " << doc.last_child().set_name("2") << std::endl;
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-modify.attrdata"></span>

### <a href="#source-modify.attrdata" class="anchor"></a><a href="#source-modify.attrdata" class="link">6.2. 属性データの設定</a>

<div class="paragraph">

<span id="source-xml_attribute::set_name"></span><span id="source-xml_attribute::set_value"></span> すべての属性は名前と値を持ち、どちらも文字列です。値は空の場合もあります。次の関数で設定できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xml_attribute::set_name(const char_t* rhs);
bool xml_attribute::set_name(const char_t* rhs, size_t sz);
bool xml_attribute::set_name(string_view_t rhs);
bool xml_attribute::set_value(const char_t* rhs);
bool xml_attribute::set_value(const char_t* rhs, size_t size);
bool xml_attribute::set_value(string_view_t rhs);
```

</div>

</div>

<div class="paragraph">

これらの関数は、名前や値を指定した文字列へ設定することを試み、操作の結果を返します。属性ハンドルがnullの場合、または処理に必要なメモリーが足りない場合、操作は失敗します。渡した文字列は文書が管理するメモリーへコピーされるため、関数が戻った後で破棄できます。たとえば、スタックに割り当てたバッファを安全に渡せます。名前や値の内容は検証されないため、有効なXML名だけを使うよう注意してください。そうしないと、文書が不正な形式になる場合があります。

</div>

<div class="paragraph">

文字列の関数に加えて、数値や真偽値を値とする属性を扱う関数もあります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xml_attribute::set_value(int rhs);
bool xml_attribute::set_value(unsigned int rhs);
bool xml_attribute::set_value(long rhs);
bool xml_attribute::set_value(unsigned long rhs);
bool xml_attribute::set_value(double rhs);
bool xml_attribute::set_value(double rhs, int precision);
bool xml_attribute::set_value(float rhs);
bool xml_attribute::set_value(float rhs, int precision);
bool xml_attribute::set_value(bool rhs);
bool xml_attribute::set_value(long long rhs);
bool xml_attribute::set_value(unsigned long long rhs);
```

</div>

</div>

<div class="paragraph">

上記の関数は引数を文字列へ変換し、基本の`set_value`を呼び出します。整数は10進表記へ、浮動小数点数は数値の大きさに応じて10進表記または科学的記数法へ、真偽値は`"true"`または`"false"`へ変換されます。

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
<td class="content">浮動小数点変換関数は、<code>setlocale</code>で設定された現在のCロケールに依存するため、ロケールが<code>"C"</code>以外の場合、予想外の結果を生成することがあります。<code>PUGIXML_CHARCONV_FLOAT</code>を指定してpugixmlをビルドした場合には、この制約は当てはまりません。</td>
</tr>
</tbody>
</table>

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
<td class="content"><code>set_value</code>のうち、<code>long long</code>型を取るオーバーロードは、プラットフォームがその型に対応している場合にだけ使えます。</td>
</tr>
</tbody>
</table>

</div>

<div id="source-xml_attribute::assign" class="paragraph">

利便性のため、すべての`set_value`関数に対応する代入演算子があります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_attribute& xml_attribute::operator=(const char_t* rhs);
xml_attribute& xml_attribute::operator=(string_view_t rhs);
xml_attribute& xml_attribute::operator=(int rhs);
xml_attribute& xml_attribute::operator=(unsigned int rhs);
xml_attribute& xml_attribute::operator=(long rhs);
xml_attribute& xml_attribute::operator=(unsigned long rhs);
xml_attribute& xml_attribute::operator=(double rhs);
xml_attribute& xml_attribute::operator=(float rhs);
xml_attribute& xml_attribute::operator=(bool rhs);
xml_attribute& xml_attribute::operator=(long long rhs);
xml_attribute& xml_attribute::operator=(unsigned long long rhs);
```

</div>

</div>

<div class="paragraph">

これらの演算子は、対応する`set_value`を呼び出し、呼び出し元の属性を返すだけです。`set_value`の戻り値を無視するため、エラーも無視されます。

</div>

<div class="paragraph">

属性の名前と値を設定する例です（[samples/modify_base.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/modify_base.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
pugi::xml_attribute attr = node.attribute("id");

// change attribute name/value
std::cout << attr.set_name("key") << ", " << attr.set_value("345");
std::cout << ", new attribute: " << attr.name() << "=" << attr.value() << std::endl;

// we can use numbers or booleans
attr.set_value(1.234);
std::cout << "new attribute value: " << attr.value() << std::endl;

// we can also use assignment operators for more concise code
attr = true;
std::cout << "final attribute value: " << attr.value() << std::endl;
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-modify.add"></span>

### <a href="#source-modify.add" class="anchor"></a><a href="#source-modify.add" class="link">6.3. ノード・属性の追加</a>

<div class="paragraph">

<span id="source-xml_node::prepend_attribute"></span><span id="source-xml_node::append_attribute"></span><span id="source-xml_node::insert_attribute_after"></span><span id="source-xml_node::insert_attribute_before"></span><span id="source-xml_node::ensure_attribute"></span><span id="source-xml_node::prepend_child"></span><span id="source-xml_node::append_child"></span><span id="source-xml_node::insert_child_after"></span><span id="source-xml_node::insert_child_before"></span><span id="source-xml_node::ensure_child"></span> ノードと属性は文書ツリーなしでは存在しないため、どこかの文書へ追加せずに作成することはできません。ノードや属性は、ノード・属性リストの末尾や、ほかのノードの前後に作成できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_attribute xml_node::append_attribute(const char_t* name);
xml_attribute xml_node::append_attribute(string_view_t name);
xml_attribute xml_node::prepend_attribute(const char_t* name);
xml_attribute xml_node::prepend_attribute(string_view_t name);
xml_attribute xml_node::insert_attribute_after(const char_t* name, const xml_attribute& attr);
xml_attribute xml_node::insert_attribute_after(string_view_t name, const xml_attribute& attr);
xml_attribute xml_node::insert_attribute_before(const char_t* name, const xml_attribute& attr);
xml_attribute xml_node::insert_attribute_before(string_view_t name, const xml_attribute& attr);

xml_node xml_node::append_child(xml_node_type type = node_element);
xml_node xml_node::prepend_child(xml_node_type type = node_element);
xml_node xml_node::insert_child_after(xml_node_type type, const xml_node& node);
xml_node xml_node::insert_child_before(xml_node_type type, const xml_node& node);

xml_node xml_node::append_child(const char_t* name);
xml_node xml_node::append_child(string_view_t name);
xml_node xml_node::prepend_child(const char_t* name);
xml_node xml_node::prepend_child(string_view_t name);
xml_node xml_node::insert_child_after(const char_t* name, const xml_node& node);
xml_node xml_node::insert_child_after(string_view_t name, const xml_node& node);
xml_node xml_node::insert_child_before(const char_t* name, const xml_node& node);
xml_node xml_node::insert_child_before(string_view_t name, const xml_node& node);

xml_attribute xml_node::ensure_attribute(const char_t* name);
xml_attribute xml_node::ensure_attribute(string_view_t name);
xml_node xml_node::ensure_child(const char_t* name);
xml_node xml_node::ensure_child(string_view_t name);
```

</div>

</div>

<div class="paragraph">

`append_attribute`と`append_child`は、呼び出し元ノードの対応するリストの末尾に、新しいノードや属性を作成します。`prepend_attribute`と`prepend_child`はリストの先頭に作成します。`insert_attribute_after`、`insert_attribute_before`、`insert_child_after`、`insert_child_before`は、指定したノードや属性の前後に追加します。`ensure_attribute`と`ensure_child`は、指定した名前の既存の属性や子を返し、存在しない場合にだけ新しいものを末尾へ追加します。このため、`node.ensure_attribute("id") = 123;`のようなコードを書くのに便利です。

</div>

<div class="paragraph">

属性の関数は、指定した名前の属性を作成します。必要なら、空の名前を指定して後から変更することもできます。`type`引数を取るノードの関数は、指定した型のノードを作成します。ノードの型は変更できないため、必要な型を事前に決めておく必要があります。また、すべての型を子として追加できるわけではありません。詳細は後述します。`name`引数を取るノードの関数は、指定した名前の要素ノード（[node_element](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_element)）を作成します。

</div>

<div class="paragraph">

すべての関数は、成功時には作成したオブジェクトへのハンドル、失敗時にはnullハンドルを返します。失敗する理由には次のものがあります。

</div>

<div class="ulist">

- 対象ノードがnullの場合、追加は失敗します。

- 属性を持てるのは[node_element](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_element)と[node_declaration](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_declaration)ノードだけなので、ノードが要素や宣言でない場合、属性の追加は失敗します。

- 子を持てるのは[node_document](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_document)と[node_element](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_element)ノードだけなので、対象ノードが要素や文書でない場合、子ノードの追加は失敗します。

- [node_document](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_document)と[node_null](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_null)ノードは子として挿入できないため、`type`として[node_document](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_document)または[node_null](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_null)を渡すと、操作は失敗します。

- [node_declaration](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_declaration)と[node_doctype](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_doctype)ノードは、文書ノードの子としてだけ追加できます。要素ノードの子として挿入しようとすると失敗します。

- ノードや属性の追加ではメモリー割り当てが行われ、失敗する場合があります。

- 挿入関数は、指定したノードや属性がnullの場合や、対象ノードの子・属性リストに属していない場合に失敗します。

</div>

<div class="paragraph">

操作が失敗しても、文書は整合した状態を保ちます。ただし、要求したノードや属性は追加されません。

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
<td class="content"><code>attribute()</code>と<code>child()</code>は、属性やノードをツリーへ追加しません。そのため、<code>node.attribute("id") = 123;</code>のようなコードは、<code>node</code>に<code>"id"</code>という名前の属性がなければ、何も行いません。必要に応じて追加し、既存の属性やノードを操作していることを確認するか、<code>ensure_attribute</code>や<code>ensure_child</code>を使ってください。</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

文書へ新しい属性やノードを追加する例です（[samples/modify_add.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/modify_add.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
// add node with some name
pugi::xml_node node = doc.append_child("node");

// add description node with text child
pugi::xml_node descr = node.append_child("description");
descr.append_child(pugi::node_pcdata).set_value("Simple node");

// add param node before the description
pugi::xml_node param = node.insert_child_before("param", descr);

// add attributes to param node
param.append_attribute("name") = "version";
param.append_attribute("value") = 1.1;
param.insert_attribute_after("type", param.attribute("name")) = "float";
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-modify.remove"></span>

### <a href="#source-modify.remove" class="anchor"></a><a href="#source-modify.remove" class="link">6.4. ノード・属性の削除</a>

<div class="paragraph">

<span id="source-xml_node::remove_attribute"></span><span id="source-xml_node::remove_attributes"></span><span id="source-xml_node::remove_child"></span><span id="source-xml_node::remove_children"></span> 文書に特定のノードや属性を含めたくない場合は、次の関数のいずれかで削除できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xml_node::remove_attribute(const xml_attribute& a);
bool xml_node::remove_attributes();
bool xml_node::remove_child(const xml_node& n);
bool xml_node::remove_children();
```

</div>

</div>

<div class="paragraph">

`remove_attribute`は、ノードの属性リストから属性を削除し、操作の結果を返します。`remove_child`は、すべての子孫ノードと属性を含む部分ツリー全体ごと、子ノードを文書から削除し、操作の結果を返します。`remove_attributes`はノードのすべての属性を削除し、操作の結果を返します。`remove_children`はノードのすべての子ノードを削除し、操作の結果を返します。次のいずれかに当てはまる場合、削除は失敗します。

</div>

<div class="ulist">

- 呼び出し元ノードがnullである場合。

- 削除する属性やノードがnullである場合。

- 削除する属性やノードが、ノードの属性・子リストに属していない場合。

</div>

<div class="paragraph">

属性やノードを削除すると、同じ内部オブジェクトへのすべてのハンドルと、そのオブジェクトを指すすべてのイテレーターが無効になります。ノードの削除では、その属性リストや子ノードリストの末尾の次を指すイテレーターも、すべて無効になります。このようなハンドルやイテレーターが存在しないか、属性やノードの削除後に使われないことを、慎重に確認してください。

</div>

<div class="paragraph">

属性や子ノードを名前で削除するための補助関数も2つあります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xml_node::remove_attribute(const char_t* name);
bool xml_node::remove_attribute(string_view_t name);
bool xml_node::remove_child(const char_t* name);
bool xml_node::remove_child(string_view_t name);
```

</div>

</div>

<div class="paragraph">

これらの関数は、指定した名前の最初の属性や子を探して削除し、その結果を返します。その名前の属性や子がなければ、`false`を返します。同じ名前のノードが2つあれば、最初のノードだけを削除します。指定した名前のノードをすべて削除するには、`while (node.remove_child("tool")) ;`のようなコードを使えます。

</div>

<div class="paragraph">

文書から属性やノードを削除する例です（[samples/modify_remove.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/modify_remove.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
// remove description node with the whole subtree
pugi::xml_node node = doc.child("node");
node.remove_child("description");

// remove value attribute
pugi::xml_node param = node.child("param");
param.remove_attribute("value");

// we can also remove nodes/attributes by handles
pugi::xml_attribute id = param.attribute("name");
param.remove_attribute(id);
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-modify.text"></span>

### <a href="#source-modify.text" class="anchor"></a><a href="#source-modify.text" class="link">6.5. テキスト内容の操作</a>

<div class="paragraph">

pugixmlには、ノードの値として保存されたテキスト内容を扱う専用のクラス`xml_text`があります。たとえば`<node><description>This is a node</description></node>`のような場合です。テキストオブジェクトを使ったデータ取得は、[文書データへのアクセスの説明](/docs/pugixml/v1-16/ja/02-manual/05-accessing-document-data/#source-access.text)で扱います。この節では、`xml_text`の変更インターフェースを説明します。

</div>

<div id="source-xml_text::set" class="paragraph">

`xml_text`オブジェクトがあれば、次の関数でテキスト内容を設定できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xml_text::set(const char_t* rhs);
bool xml_text::set(const char_t* rhs, size_t size);
bool xml_text::set(string_view_t rhs);
```

</div>

</div>

<div class="paragraph">

この関数は、内容を指定した文字列へ設定することを試み、操作の結果を返します。テキストオブジェクトの取得元ノードが、値を持てず、要素ノードでもない場合（たとえば[node_declaration](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_declaration)ノードの場合）、ノードハンドルがnullの場合、または処理に必要なメモリーが足りない場合、操作は失敗します。渡した文字列は文書が管理するメモリーへコピーされるため、関数が戻った後で破棄できます。たとえば、スタックに割り当てたバッファを安全に渡せます。要素ノードから取得したテキストオブジェクトの場合、必要ならPCDATAの子ノードを作成します。つまり、その要素ノードにPCDATA・CDATAの子がまだない場合です。

</div>

<div id="source-xml_text::set_value" class="paragraph">

文字列の関数に加えて、数値や真偽値を内容とするテキストを扱う関数もあります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xml_text::set(int rhs);
bool xml_text::set(unsigned int rhs);
bool xml_text::set(long rhs);
bool xml_text::set(unsigned long rhs);
bool xml_text::set(double rhs);
bool xml_text::set(double rhs, int precision);
bool xml_text::set(float rhs);
bool xml_text::set(float rhs, int precision);
bool xml_text::set(bool rhs);
bool xml_text::set(long long rhs);
bool xml_text::set(unsigned long long rhs);
```

</div>

</div>

<div class="paragraph">

上記の関数は引数を文字列へ変換し、基本の`set`を呼び出します。対応する`xml_attribute`関数と同じ意味を持ちます。詳細は[属性関数の説明](#source-xml_attribute::set_value)を参照してください。

</div>

<div id="source-xml_text::assign" class="paragraph">

利便性のため、すべての`set`関数に対応する代入演算子があります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_text& xml_text::operator=(const char_t* rhs);
xml_text& xml_text::operator=(string_view_t rhs);
xml_text& xml_text::operator=(int rhs);
xml_text& xml_text::operator=(unsigned int rhs);
xml_text& xml_text::operator=(long rhs);
xml_text& xml_text::operator=(unsigned long rhs);
xml_text& xml_text::operator=(double rhs);
xml_text& xml_text::operator=(float rhs);
xml_text& xml_text::operator=(bool rhs);
xml_text& xml_text::operator=(long long rhs);
xml_text& xml_text::operator=(unsigned long long rhs);
```

</div>

</div>

<div class="paragraph">

これらの演算子は、対応する`set`を呼び出し、呼び出し元のテキストオブジェクトを返すだけです。`set`の戻り値を無視するため、エラーも無視されます。

</div>

<div class="paragraph">

`xml_text`オブジェクトでテキスト内容を変更する例です（[samples/text.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/text.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
// change project version
project.child("version").text() = 1.2;

// add description element and set the contents
// note that we do not have to explicitly add the node_pcdata child
project.append_child("description").text().set("a test project");
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-modify.clone"></span>

### <a href="#source-modify.clone" class="anchor"></a><a href="#source-modify.clone" class="link">6.6. ノード・属性の複製</a>

<div class="paragraph">

<span id="source-xml_node::prepend_copy"></span><span id="source-xml_node::append_copy"></span><span id="source-xml_node::insert_copy_after"></span><span id="source-xml_node::insert_copy_before"></span> これまでに説明した関数を使うと、既存データの複製を含め、任意の内容と構造のツリーを作成できます。ただし、複製はよく必要になる操作なので、pugixmlにはノードと属性の複製機能が組み込まれています。ノードと属性は文書ツリーなしでは存在しないため、単独のコピーは作成できません。直ちにツリーのどこかへ挿入する必要があります。そのために、次の関数のいずれかを使えます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_attribute xml_node::append_copy(const xml_attribute& proto);
xml_attribute xml_node::prepend_copy(const xml_attribute& proto);
xml_attribute xml_node::insert_copy_after(const xml_attribute& proto, const xml_attribute& attr);
xml_attribute xml_node::insert_copy_before(const xml_attribute& proto, const xml_attribute& attr);

xml_node xml_node::append_copy(const xml_node& proto);
xml_node xml_node::prepend_copy(const xml_node& proto);
xml_node xml_node::insert_copy_after(const xml_node& proto, const xml_node& node);
xml_node xml_node::insert_copy_before(const xml_node& proto, const xml_node& node);
```

</div>

</div>

<div class="paragraph">

これらの関数の構成は、`append_child`、`prepend_child`、`insert_child_before`などの関数に対応しています。複製元オブジェクトへのハンドルを受け取り、適切な場所に新しい属性やノードを挿入した後、属性のデータやノードの部分ツリー全体を、新しいオブジェクトへコピーします。結果の複製オブジェクトへのハンドルを返し、失敗時にはnullハンドルを返します。

</div>

<div class="paragraph">

属性は名前と値を含めてコピーされます。ノードは型、名前、値を含めてコピーされ、さらに属性リストとすべての子が再帰的に複製されるため、部分ツリーの深いコピーになります。複製元オブジェクトは、同じ文書の一部でも、ほかの文書の一部でも構いません。

</div>

<div class="paragraph">

失敗する条件は、`append_child`、`insert_child_before`などの関数と似ています。詳細は[それらの説明](#source-xml_node::append_child)を参照してください。複製関数に固有の注意点もあります。

</div>

<div class="ulist">

- nullハンドルの複製は失敗します。

- ノードの複製では、最初に複製元と同じ型のノードを挿入します。このため、[node_document](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_document)は有効な挿入型ではないので、複製関数で文書全体を直接複製することはできません。下の例に回避方法を示します。

- `node.append_copy(node.parent().parent());`のように、部分ツリーを、その内部のノードの子としてコピーできます。これは有効な操作であり、複製開始前の状態の部分ツリーが複製されます。無限の再帰にはなりません。

</div>

<div class="paragraph">

XMLのincludeタグの実装方法の1つを示す例です（[samples/include.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/include.cpp)）。ノードの複製と、ほかの文書変更関数の使い方を示します。

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool load_preprocess(pugi::xml_document& doc, const char* path);

bool preprocess(pugi::xml_node node)
{
    for (pugi::xml_node child = node.first_child(); child; )
    {
        if (child.type() == pugi::node_pi && strcmp(child.name(), "include") == 0)
        {
            pugi::xml_node include = child;

            // load new preprocessed document (note: ideally this should handle relative paths)
            const char* path = include.value();

            pugi::xml_document doc;
            if (!load_preprocess(doc, path)) return false;

            // insert the comment marker above include directive
            node.insert_child_before(pugi::node_comment, include).set_value(path);

            // copy the document above the include directive (this retains the original order!)
            for (pugi::xml_node ic = doc.first_child(); ic; ic = ic.next_sibling())
            {
                node.insert_copy_before(ic, include);
            }

            // remove the include node and move to the next child
            child = child.next_sibling();

            node.remove_child(include);
        }
        else
        {
            if (!preprocess(child)) return false;

            child = child.next_sibling();
        }
    }

    return true;
}

bool load_preprocess(pugi::xml_document& doc, const char* path)
{
    pugi::xml_parse_result result = doc.load_file(path, pugi::parse_default | pugi::parse_pi); // for <?include?>

    return result ? preprocess(doc) : false;
}
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-modify.move"></span>

### <a href="#source-modify.move" class="anchor"></a><a href="#source-modify.move" class="link">6.7. ノードの移動</a>

<div class="paragraph">

<span id="source-xml_node::prepend_move"></span><span id="source-xml_node::append_move"></span><span id="source-xml_node::insert_move_after"></span><span id="source-xml_node::insert_move_before"></span> ノードを複製する代わりに、既存のノードをツリー内の別の位置へ移動したい場合があります。ノードをコピーして元を削除することでも実現できますが、余分な操作が多くなるため高コストです。同じ文書ツリー内でノードを移動する場合は、代わりに次の関数を使えます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_node xml_node::append_move(const xml_node& moved);
xml_node xml_node::prepend_move(const xml_node& moved);
xml_node xml_node::insert_move_after(const xml_node& moved, const xml_node& node);
xml_node xml_node::insert_move_before(const xml_node& moved, const xml_node& node);
```

</div>

</div>

<div class="paragraph">

これらの関数の構成は、`append_copy`、`prepend_copy`、`insert_copy_before`、`insert_copy_after`に対応しています。移動するオブジェクトへのハンドルを受け取り、すべての属性や子ノードとともに適切な場所へ移動します。結果のオブジェクト（移動したオブジェクトと同じもの）へのハンドルを返し、失敗時にはnullハンドルを返します。

</div>

<div class="paragraph">

失敗する条件は、`append_child`、`insert_child_before`などの関数と似ています。詳細は[それらの説明](#source-xml_node::append_child)を参照してください。移動関数に固有の注意点もあります。

</div>

<div class="ulist">

- nullハンドルの移動は失敗します。

- 同じ文書に属するノードだけを移動できます。文書間でノードを移動しようとすると失敗します。

- `insert_move_after`と`insert_move_before`は、移動するノードが`node`引数と同じ場合に失敗します。この場合、失敗として扱わなければ、何もしない操作になるためです。

- 部分ツリーを、その内部のノードの子へ移動することはできません。たとえば、`node.append_move(node.parent().parent());`は失敗します。

</div>

</div>

<div class="sect2">

<span id="source-modify.fragments"></span>

### <a href="#source-modify.fragments" class="anchor"></a><a href="#source-modify.fragments" class="link">6.8. フラグメントからの文書の組み立て</a>

<div id="source-xml_node::append_buffer" class="paragraph">

pugixmlには、ほかのXML文書からXML文書を組み立てる方法がいくつかあります。メモリー内のバッファとして表された文書フラグメントの集合があるとすると、実装方法には次の選択肢があります。

</div>

<div class="ulist">

- 一時的な文書を使って文字列のデータを解析し、ノードを宛先ノードへ複製します。例を示します。

  <div class="listingblock">

  <div class="content">

  ``` cpp
  bool append_fragment(pugi::xml_node target, const char* buffer, size_t size)
  {
      pugi::xml_document doc;
      if (!doc.load_buffer(buffer, size)) return false;

      for (pugi::xml_node child = doc.first_child(); child; child = child.next_sibling())
          target.append_copy(child);

      return true;
  }
  ```

  </div>

  </div>

- 解析の結果をキャッシュします。メモリー内のバッファを保持する代わりに、解析済みのフラグメントを含む文書オブジェクトを保持します。

  <div class="listingblock">

  <div class="content">

  ``` cpp
  void append_fragment(pugi::xml_node target, const pugi::xml_document& cached_fragment)
  {
      for (pugi::xml_node child = cached_fragment.first_child(); child; child = child.next_sibling())
          target.append_copy(child);
  }
  ```

  </div>

  </div>

- `xml_node::append_buffer`を直接使います。

  <div class="listingblock">

  <div class="content">

  ``` cpp
  xml_parse_result xml_node::append_buffer(const void* contents, size_t size, unsigned int options = parse_default, xml_encoding encoding = encoding_auto);
  ```

  </div>

  </div>

</div>

<div class="paragraph">

最初の方法は便利ですが、ほかの2つより低速です。`append_copy`と`append_buffer`の相対的な性能は、バッファの形式に依存します。通常、バッファがネイティブエンコーディング（`PUGIXML_WCHAR_MODE`に応じてUTF-8またはwchar_t）なら、`append_buffer`の方が高速です。一方、メモリー使用量の点では効率が低い場合があります。実装は渡されたバッファのコピーを作り、そのコピーは文書と同じ寿命を持ちます。このコピーが使うメモリーは、文書の破棄後に回収され、それより早くは回収されません。追加したノードも含め、文書内のすべてのノードを削除しても、このメモリーは回収されません。

</div>

<div class="paragraph">

`append_buffer`は[xml_document::load_buffer](/docs/pugixml/v1-16/ja/02-manual/04-loading-documents/#source-xml_document::load_buffer)と同じように動作します。入力はバイトバッファで、サイズの単位はバイトです。バッファは変更されず、関数が戻った後で解放できます。

</div>

<div id="source-status_append_invalid_root" class="paragraph">

`append_buffer`は現在のノードへ子ノードを追加する必要があるため、現在のノードが文書ノードか要素ノードの場合にだけ使えます。ほかの型のノードで`append_buffer`を呼び出すと、`status_append_invalid_root`状態のエラーになります。

</div>

</div>

</div>

</div>
