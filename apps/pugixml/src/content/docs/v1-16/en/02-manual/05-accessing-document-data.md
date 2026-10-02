---
title: "Accessing Document Data"
description: "pugixml 1.16 Accessing Document Data complete official text."
licenseSource: "pugixml-manual-1.16"
---

<div class="sect1">

<span id="source-access"></span>

## <a href="#source-access" class="anchor"></a><a href="#source-access" class="link">5. Accessing document data</a>

<div class="sectionbody">

<div class="paragraph">

pugixml features an extensive interface for getting various types of data from the document and for traversing the document. This section provides documentation for all such functions that do not modify the tree except for XPath-related functions; see [XPath](/docs/pugixml/v1-16/en/02-manual/08-xpath/#source-xpath) for XPath reference. As discussed in [C++ interface](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-dom.cpp), there are two types of handles to tree data - [xml_node](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-xml_node) and [xml_attribute](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-xml_attribute). The handles have special null (empty) values which propagate through various functions and thus are useful for writing more concise code; see [this description](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_null) for details. The documentation in this section will explicitly state the results of all function in case of null inputs.

</div>

<div class="sect2">

<span id="source-access.basic"></span>

### <a href="#source-access.basic" class="anchor"></a><a href="#source-access.basic" class="link">5.1. Basic traversal functions</a>

<div class="paragraph">

<span id="source-xml_node::parent"></span><span id="source-xml_node::first_child"></span><span id="source-xml_node::last_child"></span><span id="source-xml_node::next_sibling"></span><span id="source-xml_node::previous_sibling"></span><span id="source-xml_node::first_attribute"></span><span id="source-xml_node::last_attribute"></span><span id="source-xml_attribute::next_attribute"></span><span id="source-xml_attribute::previous_attribute"></span> The internal representation of the document is a tree, where each node has a list of child nodes (the order of children corresponds to their order in the XML representation), and additionally element nodes have a list of attributes, which is also ordered. Several functions are provided in order to let you get from one node in the tree to the other. These functions roughly correspond to the internal representation, and thus are usually building blocks for other methods of traversing (i.e. XPath traversals are based on these functions).

</div>

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

`parent` function returns the node’s parent; all non-null nodes except the document have non-null parent. `first_child` and `last_child` return the first and last child of the node, respectively; note that only document nodes and element nodes can have non-empty child node list. If node has no children, both functions return null nodes. `next_sibling` and `previous_sibling` return the node that’s immediately to the right/left of this node in the children list, respectively - for example, in `<a/><b/><c/>`, calling `next_sibling` for a handle that points to `<b/>` results in a handle pointing to `<c/>`, and calling `previous_sibling` results in handle pointing to `<a/>`. If node does not have next/previous sibling (this happens if it is the last/first node in the list, respectively), the functions return null nodes. `first_attribute`, `last_attribute`, `next_attribute` and `previous_attribute` functions behave similarly to the corresponding child node functions and allow to iterate through attribute list in the same way.

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
<td class="content">Because of memory consumption reasons, attributes do not have a link to their parent nodes. Thus there is no <code>xml_attribute::parent()</code> function.</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

Calling any of the functions above on the null handle results in a null handle - i.e. `node.first_child().next_sibling()` returns the second child of `node`, and null handle if `node` is null, has no children at all or if it has only one child node.

</div>

<div class="paragraph">

With these functions, you can iterate through all child nodes and display all attributes like this ([samples/traverse_base.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_base.cpp)):

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

### <a href="#source-access.nodedata" class="anchor"></a><a href="#source-access.nodedata" class="link">5.2. Getting node data</a>

<div class="paragraph">

<span id="source-xml_node::name"></span><span id="source-xml_node::value"></span> Apart from structural information (parent, child nodes, attributes), nodes can have name and value, both of which are strings. Depending on node type, name or value may be absent. [node_document](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_document) nodes do not have a name or value, [node_element](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_element) and [node_declaration](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_declaration) nodes always have a name but never have a value, [node_pcdata](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_pcdata), [node_cdata](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_cdata), [node_comment](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_comment) and [node_doctype](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_doctype) nodes never have a name but always have a value (it may be empty though), [node_pi](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_pi) nodes always have a name and a value (again, value may be empty). In order to get node’s name or value, you can use the following functions:

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

In case node does not have a name or value or if the node handle is null, both functions return empty strings - they never return null pointers.

</div>

<div id="source-xml_node::child_value" class="paragraph">

It is common to store data as text contents of some node - i.e. `<node><description>This is a node</description></node>`. In this case, `<description>` node does not have a value, but instead has a child of type [node_pcdata](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_pcdata) with value `"This is a node"`. pugixml provides several helper functions to parse such data:

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

`child_value()` returns the value of the first child with type [node_pcdata](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_pcdata) or [node_cdata](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_cdata); `child_value(name)` is a simple wrapper for `child(name).child_value()`. For the above example, calling `node.child_value("description")` and `description.child_value()` will both produce string `"This is a node"`. If there is no child with relevant type, or if the handle is null, `child_value` functions return empty string.

</div>

<div class="paragraph">

`text()` returns a special object that can be used for working with PCDATA contents in more complex cases than just retrieving the value; it is described in [Working with text contents](#source-access.text) sections.

</div>

<div class="paragraph">

There is an example of using some of these functions [at the end of the next section](#source-code_traverse_base_data).

</div>

</div>

<div class="sect2">

<span id="source-access.attrdata"></span>

### <a href="#source-access.attrdata" class="anchor"></a><a href="#source-access.attrdata" class="link">5.3. Getting attribute data</a>

<div class="paragraph">

<span id="source-xml_attribute::name"></span><span id="source-xml_attribute::value"></span> All attributes have name and value, both of which are strings (value may be empty). There are two corresponding accessors, like for `xml_node`:

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

In case the attribute handle is null, both functions return empty strings - they never return null pointers.

</div>

<div id="source-xml_attribute::as_string" class="paragraph">

If you need a non-empty string if the attribute handle is null (for example, you need to get the option value from XML attribute, but if it is not specified, you need it to default to `"sorted"` instead of `""`), you can use `as_string` accessor:

</div>

<div class="listingblock">

<div class="content">

``` cpp
const char_t* xml_attribute::as_string(const char_t* def = "") const;
```

</div>

</div>

<div class="paragraph">

It returns `def` argument if the attribute handle is null. If you do not specify the argument, the function is equivalent to `value()`.

</div>

<div class="paragraph">

<span id="source-xml_attribute::as_int"></span><span id="source-xml_attribute::as_uint"></span><span id="source-xml_attribute::as_double"></span><span id="source-xml_attribute::as_float"></span><span id="source-xml_attribute::as_bool"></span><span id="source-xml_attribute::as_llong"></span><span id="source-xml_attribute::as_ullong"></span> In many cases attribute values have types that are not strings - i.e. an attribute may always contain values that should be treated as integers, despite the fact that they are represented as strings in XML. pugixml provides several accessors that convert attribute value to some other type:

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

`as_int`, `as_uint`, `as_llong`, `as_ullong`, `as_double` and `as_float` convert attribute values to numbers. If attribute handle is null `def` argument is returned (which is 0 by default). Otherwise, all leading whitespace characters are truncated, and the remaining string is parsed as an integer number in either decimal or hexadecimal form (applicable to `as_int`, `as_uint`, `as_llong` and `as_ullong`; hexadecimal format is used if the number has `0x` or `0X` prefix) or as a floating point number in either decimal or scientific form (`as_double` or `as_float`).

</div>

<div class="paragraph">

For integer conversions, non-numeric character sequences return 0 and out of range values are clamped to the closest representable value; for floating-point conversions, the result depends on implementation (CRT or STL depending on whether `PUGIXML_CHARCONV_FLOAT` is used).

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
Caution
</div></td>
<td class="content">Floating-point conversion functions depend on the current C locale as set with <code>setlocale</code>, so may return unexpected results if the locale is different from <code>"C"</code>. This does not apply when pugixml is built with <code>PUGIXML_CHARCONV_FLOAT</code>.</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

`as_bool` converts attribute value to boolean as follows: if attribute handle is null, `def` argument is returned (which is `false` by default). If attribute value is empty, `false` is returned. Otherwise, `true` is returned if the first character is one of `'1', 't', 'T', 'y', 'Y'`. This means that strings like `"true"` and `"yes"` are recognized as `true`, while strings like `"false"` and `"no"` are recognized as `false`. For more complex matching you’ll have to write your own function.

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
<td class="content"><code>as_llong</code> and <code>as_ullong</code> are only available if your platform has support for the <code>long long</code> type.</td>
</tr>
</tbody>
</table>

</div>

<div id="source-code_traverse_base_data" class="paragraph">

This is an example of using these functions, along with node data retrieval ones ([samples/traverse_base.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_base.cpp)):

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

### <a href="#source-access.contents" class="anchor"></a><a href="#source-access.contents" class="link">5.4. Contents-based traversal functions</a>

<div class="paragraph">

<span id="source-xml_node::child"></span><span id="source-xml_node::attribute"></span><span id="source-xml_node::next_sibling_name"></span><span id="source-xml_node::previous_sibling_name"></span> Since a lot of document traversal consists of finding the node/attribute with the correct name, there are special functions for that purpose:

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

`child` and `attribute` return the first child/attribute with the specified name; `next_sibling` and `previous_sibling` return the first sibling in the corresponding direction with the specified name. All string comparisons are case-sensitive. In case the node handle is null or there is no node/attribute with the specified name, null handle is returned.

</div>

<div class="paragraph">

`child` and `next_sibling` functions can be used together to loop through all child nodes with the desired name like this:

</div>

<div class="listingblock">

<div class="content">

``` cpp
for (pugi::xml_node tool = tools.child("Tool"); tool; tool = tool.next_sibling("Tool"))
```

</div>

</div>

<div id="source-xml_node::attribute_hinted" class="paragraph">

`attribute` function needs to look for the target attribute by name. If a node has many attributes, finding each by name can be time consuming. If you have an idea of how attributes are ordered in the node, you can use a faster function:

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

The extra `hint` argument is used to guess where the attribute might be, and is updated to the location of the next attribute so that if you search for multiple attributes in the right order, the performance is maximized. Note that `hint` has to be either null or has to belong to the node, otherwise the behavior is undefined.

</div>

<div class="paragraph">

You can use this function as follows:

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

This code is correct regardless of the order of the attributes, but it’s faster if `"id"`, `"name"` and `"version"` occur in that order.

</div>

<div id="source-xml_node::find_child_by_attribute" class="paragraph">

Occasionally the needed node is specified not by the unique name but instead by the value of some attribute; for example, it is common to have node collections with each node having a unique id: `<group><item id="1"/> <item id="2"/></group>`. There are two functions for finding child nodes based on the attribute values:

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

The three-argument function returns the first child node with the specified name which has an attribute with the specified name/value; the two-argument function skips the name test for the node, which can be useful for searching in heterogeneous collections. If the node handle is null or if no node is found, null handle is returned. All string comparisons are case-sensitive.

</div>

<div class="paragraph">

In all of the above functions, all arguments have to be valid strings; passing null pointers results in undefined behavior.

</div>

<div class="paragraph">

This is an example of using these functions ([samples/traverse_base.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_base.cpp)):

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

### <a href="#source-access.rangefor" class="anchor"></a><a href="#source-access.rangefor" class="link">5.5. Range-based for-loop support</a>

<div class="paragraph">

<span id="source-xml_node::children"></span><span id="source-xml_node::attributes"></span> If your C++ compiler supports range-based for-loop (this is a C++11 feature, supported by Microsoft Visual Studio 2012+, GCC 4.6+ and Clang 3.0+), you can use it to enumerate nodes/attributes. Additional helpers are provided to support this; note that they are also compatible with [Boost Foreach](http://www.boost.org/libs/foreach/), and possibly other pre-C++11 foreach facilities.

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

`children` function allows you to enumerate all child nodes; `children` function with `name` argument allows you to enumerate all child nodes with a specific name; `attributes` function allows you to enumerate all attributes of the node. Note that you can also use node object itself in a range-based for construct, which is equivalent to using `children()`.

</div>

<div class="paragraph">

This is an example of using these functions ([samples/traverse_rangefor.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_rangefor.cpp)):

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

While using `children()` makes the intent of the code clear, note that each node can be treated as a container of child nodes, since it provides `begin()`/`end()` member functions described in the next section. Because of this, you can iterate through node’s children simply by using the node itself:

</div>

<div class="listingblock">

<div class="content">

``` cpp
for (pugi::xml_node child: tool) ...
```

</div>

</div>

<div class="paragraph">

When using C++20, you can also use nodes as well as objects returned by `children()` and `attributes()` functions as ranges:

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

### <a href="#source-access.iterators" class="anchor"></a><a href="#source-access.iterators" class="link">5.6. Traversing node/attribute lists via iterators</a>

<div class="paragraph">

<span id="source-xml_node_iterator"></span><span id="source-xml_attribute_iterator"></span><span id="source-xml_node::begin"></span><span id="source-xml_node::end"></span><span id="source-xml_node::attributes_begin"></span><span id="source-xml_node::attributes_end"></span> Child node lists and attribute lists are simply double-linked lists; while you can use `previous_sibling`/`next_sibling` and other such functions for iteration, pugixml additionally provides node and attribute iterators, so that you can treat nodes as containers of other nodes or attributes:

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

`begin` and `attributes_begin` return iterators that point to the first node/attribute, respectively; `end` and `attributes_end` return past-the-end iterator for node/attribute list, respectively - this iterator can’t be dereferenced, but decrementing it results in an iterator pointing to the last element in the list (except for empty lists, where decrementing past-the-end iterator results in undefined behavior). Past-the-end iterator is commonly used as a termination value for iteration loops (see sample below). If you want to get an iterator that points to an existing handle, you can construct the iterator with the handle as a single constructor argument, like so: `xml_node_iterator(node)`. For `xml_attribute_iterator`, you’ll have to provide both an attribute and its parent node.

</div>

<div class="paragraph">

`begin` and `end` return equal iterators if called on null node; such iterators can’t be dereferenced. `attributes_begin` and `attributes_end` behave the same way. For correct iterator usage this means that child node/attribute collections of null nodes appear to be empty.

</div>

<div class="paragraph">

Both types of iterators have bidirectional iterator semantics (i.e. they can be incremented and decremented, but efficient random access is not supported) and support all usual iterator operations - comparison, dereference, etc. The iterators are invalidated if the node/attribute objects they’re pointing to are removed from the tree; adding nodes/attributes does not invalidate any iterators.

</div>

<div class="paragraph">

Here is an example of using iterators for document traversal ([samples/traverse_iter.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_iter.cpp)):

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
Caution
</div></td>
<td class="content">Node and attribute iterators are somewhere in the middle between const and non-const iterators. While dereference operation yields a non-constant reference to the object, so that you can use it for tree modification operations, modifying this reference using assignment - i.e. passing iterators to a function like <code>std::sort</code> - will not give expected results, as assignment modifies local handle that’s stored in the iterator.</td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<span id="source-access.walker"></span>

### <a href="#source-access.walker" class="anchor"></a><a href="#source-access.walker" class="link">5.7. Recursive traversal with xml_tree_walker</a>

<div id="source-xml_tree_walker" class="paragraph">

The methods described above allow traversal of immediate children of some node; if you want to do a deep tree traversal, you’ll have to do it via a recursive function or some equivalent method. However, pugixml provides a helper for depth-first traversal of a subtree. In order to use it, you have to implement `xml_tree_walker` interface and to call `traverse` function:

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

<span id="source-xml_tree_walker::begin"></span><span id="source-xml_tree_walker::for_each"></span><span id="source-xml_tree_walker::end"></span><span id="source-xml_node::traverse"></span> The traversal is launched by calling `traverse` function on traversal root and proceeds as follows:

</div>

<div class="ulist">

- First, `begin` function is called with traversal root as its argument.

- Then, `for_each` function is called for all nodes in the traversal subtree in depth first order, excluding the traversal root. Node is passed as an argument.

- Finally, `end` function is called with traversal root as its argument.

</div>

<div class="paragraph">

If `begin`, `end` or any of the `for_each` calls return `false`, the traversal is terminated and `false` is returned as the traversal result; otherwise, the traversal results in `true`. Note that you don’t have to override `begin` or `end` functions; their default implementations return `true`.

</div>

<div id="source-xml_tree_walker::depth" class="paragraph">

You can get the node’s depth relative to the traversal root at any point by calling `depth` function. It returns `-1` if called from `begin`/`end`, and returns 0-based depth if called from `for_each` - depth is 0 for all children of the traversal root, 1 for all grandchildren and so on.

</div>

<div class="paragraph">

This is an example of traversing tree hierarchy with xml_tree_walker ([samples/traverse_walker.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_walker.cpp)):

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

### <a href="#source-access.predicate" class="anchor"></a><a href="#source-access.predicate" class="link">5.8. Searching for nodes/attributes with predicates</a>

<div class="paragraph">

<span id="source-xml_node::find_attribute"></span><span id="source-xml_node::find_child"></span><span id="source-xml_node::find_node"></span> While there are existing functions for getting a node/attribute with known contents, they are often not sufficient for simple queries. As an alternative for manual iteration through nodes/attributes until the needed one is found, you can make a predicate and call one of `find_` functions:

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

The predicate should be either a plain function or a function object which accepts one argument of type `xml_attribute` (for `find_attribute`) or `xml_node` (for `find_child` and `find_node`), and returns `bool`. The predicate is never called with null handle as an argument.

</div>

<div class="paragraph">

`find_attribute` function iterates through all attributes of the specified node, and returns the first attribute for which the predicate returned `true`. If the predicate returned `false` for all attributes or if there were no attributes (including the case where the node is null), null attribute is returned.

</div>

<div class="paragraph">

`find_child` function iterates through all child nodes of the specified node, and returns the first node for which the predicate returned `true`. If the predicate returned `false` for all nodes or if there were no child nodes (including the case where the node is null), null node is returned.

</div>

<div class="paragraph">

`find_node` function performs a depth-first traversal through the subtree of the specified node (excluding the node itself), and returns the first node for which the predicate returned `true`. If the predicate returned `false` for all nodes or if subtree was empty, null node is returned.

</div>

<div class="paragraph">

This is an example of using predicate-based functions ([samples/traverse_predicate.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_predicate.cpp)):

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

### <a href="#source-access.text" class="anchor"></a><a href="#source-access.text" class="link">5.9. Working with text contents</a>

<div id="source-xml_text" class="paragraph">

It is common to store data as text contents of some node - i.e. `<node><description>This is a node</description></node>`. In this case, `<description>` node does not have a value, but instead has a child of type [node_pcdata](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_pcdata) with value `"This is a node"`. pugixml provides a special class, `xml_text`, to work with such data. Working with text objects to modify data is described in [the documentation for modifying document data](/docs/pugixml/v1-16/en/02-manual/06-modifying-document-data/#source-modify.text); this section describes the access interface of `xml_text`.

</div>

<div id="source-xml_node::text" class="paragraph">

You can get the text object from a node by using `text()` method:

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_text xml_node::text() const;
```

</div>

</div>

<div class="paragraph">

If the node has a type `node_pcdata` or `node_cdata`, then the node itself is used to return data; otherwise, a first child node of type `node_pcdata` or `node_cdata` is used.

</div>

<div class="paragraph">

<span id="source-xml_text::empty"></span><span id="source-xml_text::unspecified_bool_type"></span> You can check if the text object is bound to a valid PCDATA/CDATA node by using it as a boolean value, i.e. `if (text) { …​ }` or `if (!text) { …​ }`. Alternatively you can check it by using the `empty()` method:

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xml_text::empty() const;
```

</div>

</div>

<div id="source-xml_text::get" class="paragraph">

Given a text object, you can get the contents (i.e. the value of PCDATA/CDATA node) by using the following function:

</div>

<div class="listingblock">

<div class="content">

``` cpp
const char_t* xml_text::get() const;
```

</div>

</div>

<div class="paragraph">

In case text object is empty, the function returns an empty string - it never returns a null pointer.

</div>

<div class="paragraph">

<span id="source-xml_text::as_string"></span><span id="source-xml_text::as_int"></span><span id="source-xml_text::as_uint"></span><span id="source-xml_text::as_double"></span><span id="source-xml_text::as_float"></span><span id="source-xml_text::as_bool"></span><span id="source-xml_text::as_llong"></span><span id="source-xml_text::as_ullong"></span> If you need a non-empty string if the text object is empty, or if the text contents is actually a number or a boolean that is stored as a string, you can use the following accessors:

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

All of the above functions have the same semantics as similar `xml_attribute` members: they return the default argument if the text object is empty, they convert the text contents to a target type using the same rules and restrictions. You can [refer to documentation for the attribute functions](#source-xml_attribute::as_int) for details.

</div>

<div id="source-xml_text::data" class="paragraph">

`xml_text` is essentially a helper class that operates on `xml_node` values. It is bound to a node of type [node_pcdata](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_pcdata) or [node_cdata](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_cdata). You can use the following function to retrieve this node:

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_node xml_text::data() const;
```

</div>

</div>

<div class="paragraph">

Essentially, assuming `text` is an `xml_text` object, calling `text.get()` is equivalent to calling `text.data().value()`.

</div>

<div class="paragraph">

This is an example of using `xml_text` object ([samples/text.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/text.cpp)):

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

### <a href="#source-access.misc" class="anchor"></a><a href="#source-access.misc" class="link">5.10. Miscellaneous functions</a>

<div id="source-xml_node::root" class="paragraph">

If you need to get the document root of some node, you can use the following function:

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_node xml_node::root() const;
```

</div>

</div>

<div class="paragraph">

This function returns the node with type [node_document](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_document), which is the root node of the document the node belongs to (unless the node is null, in which case null node is returned).

</div>

<div class="paragraph">

<span id="source-xml_node::path"></span><span id="source-xml_node::first_element_by_path"></span> While pugixml supports complex XPath expressions, sometimes a simple path handling facility is needed. There are two functions, for getting node path and for converting path to a node:

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

Node paths consist of node names, separated with a delimiter (which is `/` by default); also paths can contain self (`.`) and parent (`..`) pseudo-names, so that this is a valid path: `"../../foo/./bar"`. `path` returns the path to the node from the document root, `first_element_by_path` looks for a node represented by a given path; a path can be an absolute one (absolute paths start with the delimiter), in which case the rest of the path is treated as document root relative, and relative to the given node. For example, in the following document: `<a><b><c/></b></a>`, node `<c/>` has path `"a/b/c"`; calling `first_element_by_path` for document with path `"a/b"` results in node `<b/>`; calling `first_element_by_path` for node `<a/>` with path `"../a/./b/../."` results in node `<a/>`; calling `first_element_by_path` with path `"/a"` results in node `<a/>` for any node.

</div>

<div class="paragraph">

In case path component is ambiguous (if there are two nodes with given name), the first one is selected; paths are not guaranteed to uniquely identify nodes in a document. If any component of a path is not found, the result of `first_element_by_path` is null node; also `first_element_by_path` returns null node for null nodes, in which case the path does not matter. `path` returns an empty string for null nodes.

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
<td class="content"><code>path</code> function returns the result as STL string, and thus is not available if <a href="/docs/pugixml/v1-16/en/02-manual/02-installation/#source-PUGIXML_NO_STL">PUGIXML_NO_STL</a> is defined.</td>
</tr>
</tbody>
</table>

</div>

<div id="source-xml_node::offset_debug" class="paragraph">

pugixml does not record row/column information for nodes upon parsing for efficiency reasons. However, if the node has not changed in a significant way since parsing (the name/value are not changed, and the node itself is the original one, i.e. it was not deleted from the tree and re-added later), it is possible to get the offset from the beginning of XML buffer:

</div>

<div class="listingblock">

<div class="content">

``` cpp
ptrdiff_t xml_node::offset_debug() const;
```

</div>

</div>

<div class="paragraph">

If the offset is not available (this happens if the node is null, was not originally parsed from a stream, or has changed in a significant way), the function returns -1. Otherwise it returns the offset to node’s data from the beginning of XML buffer in [pugi::char_t](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-char_t) units. For more information on parsing offsets, see [parsing error handling documentation](/docs/pugixml/v1-16/en/02-manual/04-loading-documents/#source-xml_parse_result::offset).

</div>

</div>

</div>

</div>
