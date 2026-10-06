<div class="sect1">

<span id="modify"></span>

## <a href="#modify" class="anchor"></a><a href="#modify" class="link">6. Modifying document data</a>

<div class="sectionbody">

<div class="paragraph">

The document in pugixml is fully mutable: you can completely change the document structure and modify the data of nodes/attributes. This section provides documentation for the relevant functions. All functions take care of memory management and structural integrity themselves, so they always result in structurally valid tree - however, it is possible to create an invalid XML tree (for example, by adding two attributes with the same name or by setting attribute/node name to empty/invalid string). Tree modification is optimized for performance and for memory consumption, so if you have enough memory you can create documents from scratch with pugixml and later save them to file/stream instead of relying on error-prone manual text writing and without too much overhead.

</div>

<div class="paragraph">

All member functions that change node/attribute data or structure are non-constant and thus can not be called on constant handles. However, you can easily convert constant handle to non-constant one by simple assignment: `void foo(const pugi::xml_node& n) { pugi::xml_node nc = n; }`, so const-correctness here mainly provides additional documentation.

</div>

<div class="sect2">

<span id="modify.nodedata"></span>

### <a href="#modify.nodedata" class="anchor"></a><a href="#modify.nodedata" class="link">6.1. Setting node data</a>

<div class="paragraph">

<span id="xml_node::set_name"></span><span id="xml_node::set_value"></span> As discussed before, nodes can have name and value, both of which are strings. Depending on node type, name or value may be absent. [node_document](#node_document) nodes do not have a name or value, [node_element](#node_element) and [node_declaration](#node_declaration) nodes always have a name but never have a value, [node_pcdata](#node_pcdata), [node_cdata](#node_cdata), [node_comment](#node_comment) and [node_doctype](#node_doctype) nodes never have a name but always have a value (it may be empty though), [node_pi](#node_pi) nodes always have a name and a value (again, value may be empty). In order to set node’s name or value, you can use the following functions:

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

Both functions try to set the name/value to the specified string, and return the operation result. The operation fails if the node can not have name or value (for instance, when trying to call `set_name` on a [node_pcdata](#node_pcdata) node), if the node handle is null, or if there is insufficient memory to handle the request. The provided string is copied into document managed memory and can be destroyed after the function returns (for example, you can safely pass stack-allocated buffers to these functions). The name/value content is not verified, so take care to use only valid XML names, or the document may become malformed.

</div>

<div class="paragraph">

This is an example of setting node name and value ([samples/modify_base.cpp](samples/modify_base.cpp)):

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

<span id="modify.attrdata"></span>

### <a href="#modify.attrdata" class="anchor"></a><a href="#modify.attrdata" class="link">6.2. Setting attribute data</a>

<div class="paragraph">

<span id="xml_attribute::set_name"></span><span id="xml_attribute::set_value"></span> All attributes have name and value, both of which are strings (value may be empty). You can set them with the following functions:

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

Both functions try to set the name/value to the specified string, and return the operation result. The operation fails if the attribute handle is null, or if there is insufficient memory to handle the request. The provided string is copied into document managed memory and can be destroyed after the function returns (for example, you can safely pass stack-allocated buffers to these functions). The name/value content is not verified, so take care to use only valid XML names, or the document may become malformed.

</div>

<div class="paragraph">

In addition to string functions, several functions are provided for handling attributes with numbers and booleans as values:

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

The above functions convert the argument to string and then call the base `set_value` function. Integers are converted to a decimal form, floating-point numbers are converted to either decimal or scientific form, depending on the number magnitude, boolean values are converted to either `"true"` or `"false"`.

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
<td class="content">Floating-point conversion functions depend on the current C locale as set with <code>setlocale</code>, so may generate unexpected results if the locale is different from <code>"C"</code>. This does not apply when pugixml is built with <code>PUGIXML_CHARCONV_FLOAT</code>.</td>
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
Note
</div></td>
<td class="content"><code>set_value</code> overloads with <code>long long</code> type are only available if your platform has support for the type.</td>
</tr>
</tbody>
</table>

</div>

<div id="xml_attribute::assign" class="paragraph">

For convenience, all `set_value` functions have the corresponding assignment operators:

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

These operators simply call the right `set_value` function and return the attribute they’re called on; the return value of `set_value` is ignored, so errors are ignored.

</div>

<div class="paragraph">

This is an example of setting attribute name and value ([samples/modify_base.cpp](samples/modify_base.cpp)):

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

<span id="modify.add"></span>

### <a href="#modify.add" class="anchor"></a><a href="#modify.add" class="link">6.3. Adding nodes/attributes</a>

<div class="paragraph">

<span id="xml_node::prepend_attribute"></span><span id="xml_node::append_attribute"></span><span id="xml_node::insert_attribute_after"></span><span id="xml_node::insert_attribute_before"></span><span id="xml_node::ensure_attribute"></span><span id="xml_node::prepend_child"></span><span id="xml_node::append_child"></span><span id="xml_node::insert_child_after"></span><span id="xml_node::insert_child_before"></span><span id="xml_node::ensure_child"></span> Nodes and attributes do not exist without a document tree, so you can’t create them without adding them to some document. A node or attribute can be created at the end of node/attribute list or before/after some other node:

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

`append_attribute` and `append_child` create a new node/attribute at the end of the corresponding list of the node the method is called on; `prepend_attribute` and `prepend_child` create a new node/attribute at the beginning of the list; `insert_attribute_after`, `insert_attribute_before`, `insert_child_after` and `insert_child_before` add the node/attribute before or after the specified node/attribute. `ensure_attribute` and `ensure_child` return the existing attribute/child with the specified name, appending a new one only if no such attribute/child exists; this makes it convenient to write code like `node.ensure_attribute("id") = 123;`.

</div>

<div class="paragraph">

Attribute functions create an attribute with the specified name; you can specify the empty name and change the name later if you want to. Node functions with the `type` argument create the node with the specified type; since node type can’t be changed, you have to know the desired type beforehand. Also note that not all types can be added as children; see below for clarification. Node functions with the `name` argument create the element node ([node_element](#node_element)) with the specified name.

</div>

<div class="paragraph">

All functions return the handle to the created object on success, and null handle on failure. There are several reasons for failure:

</div>

<div class="ulist">

- Adding fails if the target node is null;

- Only [node_element](#node_element) and [node_declaration](#node_declaration) nodes can contain attributes, so attribute adding fails if node is not an element or a declaration;

- Only [node_document](#node_document) and [node_element](#node_element) nodes can contain children, so child node adding fails if the target node is not an element or a document;

- [node_document](#node_document) and [node_null](#node_null) nodes can not be inserted as children, so passing [node_document](#node_document) or [node_null](#node_null) value as `type` results in operation failure;

- [node_declaration](#node_declaration) and [node_doctype](#node_doctype) nodes can only be added as children of the document node; attempt to insert them as children of an element node fails;

- Adding node/attribute results in memory allocation, which may fail;

- Insertion functions fail if the specified node or attribute is null or is not in the target node’s children/attribute list.

</div>

<div class="paragraph">

Even if the operation fails, the document remains in consistent state, but the requested node/attribute is not added.

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
<td class="content"><code>attribute()</code> and <code>child()</code> functions do not add attributes or nodes to the tree, so code like <code>node.attribute("id") = 123;</code> will not do anything if <code>node</code> does not have an attribute with name <code>"id"</code>. Make sure you’re operating with existing attributes/nodes by adding them if necessary, or use <code>ensure_attribute</code>/<code>ensure_child</code>.</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

This is an example of adding new attributes/nodes to the document ([samples/modify_add.cpp](samples/modify_add.cpp)):

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

<span id="modify.remove"></span>

### <a href="#modify.remove" class="anchor"></a><a href="#modify.remove" class="link">6.4. Removing nodes/attributes</a>

<div class="paragraph">

<span id="xml_node::remove_attribute"></span><span id="xml_node::remove_attributes"></span><span id="xml_node::remove_child"></span><span id="xml_node::remove_children"></span> If you do not want your document to contain some node or attribute, you can remove it with one of the following functions:

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

`remove_attribute` removes the attribute from the attribute list of the node, and returns the operation result. `remove_child` removes the child node with the entire subtree (including all descendant nodes and attributes) from the document, and returns the operation result. `remove_attributes` removes all the attributes of the node, and returns the operation result. `remove_children` removes all the child nodes of the node, and returns the operation result. Removing fails if one of the following is true:

</div>

<div class="ulist">

- The node the function is called on is null;

- The attribute/node to be removed is null;

- The attribute/node to be removed is not in the node’s attribute/child list.

</div>

<div class="paragraph">

Removing the attribute or node invalidates all handles to the same underlying object, and also invalidates all iterators pointing to the same object. Removing node also invalidates all past-the-end iterators to its attribute or child node list. Be careful to ensure that all such handles and iterators either do not exist or are not used after the attribute/node is removed.

</div>

<div class="paragraph">

If you want to remove the attribute or child node by its name, two additional helper functions are available:

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

These functions look for the first attribute or child with the specified name, and then remove it, returning the result. If there is no attribute or child with such name, the function returns `false`; if there are two nodes with the given name, only the first node is deleted. If you want to delete all nodes with the specified name, you can use code like this: `while (node.remove_child("tool")) ;`.

</div>

<div class="paragraph">

This is an example of removing attributes/nodes from the document ([samples/modify_remove.cpp](samples/modify_remove.cpp)):

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

<span id="modify.text"></span>

### <a href="#modify.text" class="anchor"></a><a href="#modify.text" class="link">6.5. Working with text contents</a>

<div class="paragraph">

pugixml provides a special class, `xml_text`, to work with text contents stored as a value of some node, i.e. `<node><description>This is a node</description></node>`. Working with text objects to retrieve data is described in [the documentation for accessing document data](#access.text); this section describes the modification interface of `xml_text`.

</div>

<div id="xml_text::set" class="paragraph">

Once you have an `xml_text` object, you can set the text contents using the following function:

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

This function tries to set the contents to the specified string, and returns the operation result. The operation fails if the text object was retrieved from a node that can not have a value and is not an element node (i.e. it is a [node_declaration](#node_declaration) node), if the node handle is null, or if there is insufficient memory to handle the request. The provided string is copied into document managed memory and can be destroyed after the function returns (for example, you can safely pass stack-allocated buffers to this function). Note that if the text object was retrieved from an element node, this function creates the PCDATA child node if necessary (i.e. if the element node does not have a PCDATA/CDATA child already).

</div>

<div id="xml_text::set_value" class="paragraph">

In addition to a string function, several functions are provided for handling text with numbers and booleans as contents:

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

The above functions convert the argument to string and then call the base `set` function. These functions have the same semantics as similar `xml_attribute` functions. You can [refer to documentation for the attribute functions](#xml_attribute::set_value) for details.

</div>

<div id="xml_text::assign" class="paragraph">

For convenience, all `set` functions have the corresponding assignment operators:

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

These operators simply call the right `set` function and return the attribute they’re called on; the return value of `set` is ignored, so errors are ignored.

</div>

<div class="paragraph">

This is an example of using `xml_text` object to modify text contents ([samples/text.cpp](samples/text.cpp)):

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

<span id="modify.clone"></span>

### <a href="#modify.clone" class="anchor"></a><a href="#modify.clone" class="link">6.6. Cloning nodes/attributes</a>

<div class="paragraph">

<span id="xml_node::prepend_copy"></span><span id="xml_node::append_copy"></span><span id="xml_node::insert_copy_after"></span><span id="xml_node::insert_copy_before"></span> With the help of previously described functions, it is possible to create trees with any contents and structure, including cloning the existing data. However since this is an often needed operation, pugixml provides built-in node/attribute cloning facilities. Since nodes and attributes do not exist without a document tree, you can’t create a standalone copy - you have to immediately insert it somewhere in the tree. For this, you can use one of the following functions:

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

These functions mirror the structure of `append_child`, `prepend_child`, `insert_child_before` and related functions - they take the handle to the prototype object, which is to be cloned, insert a new attribute/node at the appropriate place, and then copy the attribute data or the whole node subtree to the new object. The functions return the handle to the resulting duplicate object, or null handle on failure.

</div>

<div class="paragraph">

The attribute is copied along with the name and value; the node is copied along with its type, name and value; additionally attribute list and all children are recursively cloned, resulting in the deep subtree clone. The prototype object can be a part of the same document, or a part of any other document.

</div>

<div class="paragraph">

The failure conditions resemble those of `append_child`, `insert_child_before` and related functions, [consult their documentation for more information](#xml_node::append_child). There are additional caveats specific to cloning functions:

</div>

<div class="ulist">

- Cloning null handles results in operation failure;

- Node cloning starts with insertion of the node of the same type as that of the prototype; for this reason, cloning functions can not be directly used to clone entire documents, since [node_document](#node_document) is not a valid insertion type. The example below provides a workaround.

- It is possible to copy a subtree as a child of some node inside this subtree, i.e. `node.append_copy(node.parent().parent());`. This is a valid operation, and it results in a clone of the subtree in the state before cloning started, i.e. no infinite recursion takes place.

</div>

<div class="paragraph">

This is an example with one possible implementation of include tags in XML ([samples/include.cpp](samples/include.cpp)). It illustrates node cloning and usage of other document modification functions:

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

<span id="modify.move"></span>

### <a href="#modify.move" class="anchor"></a><a href="#modify.move" class="link">6.7. Moving nodes</a>

<div class="paragraph">

<span id="xml_node::prepend_move"></span><span id="xml_node::append_move"></span><span id="xml_node::insert_move_after"></span><span id="xml_node::insert_move_before"></span> Sometimes instead of cloning a node you need to move an existing node to a different position in a tree. This can be accomplished by copying the node and removing the original; however, this is expensive since it results in a lot of extra operations. For moving nodes within the same document tree, you can use of the following functions instead:

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

These functions mirror the structure of `append_copy`, `prepend_copy`, `insert_copy_before` and `insert_copy_after` - they take the handle to the moved object and move it to the appropriate place with all attributes and/or child nodes. The functions return the handle to the resulting object (which is the same as the moved object), or null handle on failure.

</div>

<div class="paragraph">

The failure conditions resemble those of `append_child`, `insert_child_before` and related functions, [consult their documentation for more information](#xml_node::append_child). There are additional caveats specific to moving functions:

</div>

<div class="ulist">

- Moving null handles results in operation failure;

- Moving is only possible for nodes that belong to the same document; attempting to move nodes between documents will fail.

- `insert_move_after` and `insert_move_before` functions fail if the moved node is the same as the `node` argument (this operation would be a no-op otherwise).

- It is impossible to move a subtree to a child of some node inside this subtree, i.e. `node.append_move(node.parent().parent());` will fail.

</div>

</div>

<div class="sect2">

<span id="modify.fragments"></span>

### <a href="#modify.fragments" class="anchor"></a><a href="#modify.fragments" class="link">6.8. Assembling document from fragments</a>

<div id="xml_node::append_buffer" class="paragraph">

pugixml provides several ways to assemble an XML document from other XML documents. Assuming there is a set of document fragments, represented as in-memory buffers, the implementation choices are as follows:

</div>

<div class="ulist">

- Use a temporary document to parse the data from a string, then clone the nodes to a destination node. For example:

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

- Cache the parsing step - instead of keeping in-memory buffers, keep document objects that already contain the parsed fragment:

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

- Use `xml_node::append_buffer` directly:

  <div class="listingblock">

  <div class="content">

  ``` cpp
  xml_parse_result xml_node::append_buffer(const void* contents, size_t size, unsigned int options = parse_default, xml_encoding encoding = encoding_auto);
  ```

  </div>

  </div>

</div>

<div class="paragraph">

The first method is more convenient, but slower than the other two. The relative performance of `append_copy` and `append_buffer` depends on the buffer format - usually `append_buffer` is faster if the buffer is in native encoding (UTF-8 or wchar_t, depending on `PUGIXML_WCHAR_MODE`). At the same time it might be less efficient in terms of memory usage - the implementation makes a copy of the provided buffer, and the copy has the same lifetime as the document - the memory used by that copy will be reclaimed after the document is destroyed, but no sooner. Even deleting all nodes in the document, including the appended ones, won’t reclaim the memory.

</div>

<div class="paragraph">

`append_buffer` behaves in the same way as [xml_document::load_buffer](#xml_document::load_buffer) - the input buffer is a byte buffer, with size in bytes; the buffer is not modified and can be freed after the function returns.

</div>

<div id="status_append_invalid_root" class="paragraph">

Since `append_buffer` needs to append child nodes to the current node, it only works if the current node is either document or element node. Calling `append_buffer` on a node with any other type results in an error with `status_append_invalid_root` status.

</div>

</div>

</div>

</div>
