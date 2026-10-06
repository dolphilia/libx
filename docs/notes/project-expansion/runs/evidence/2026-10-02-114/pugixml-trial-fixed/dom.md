<div class="sect1">

<span id="dom"></span>

## <a href="#dom" class="anchor"></a><a href="#dom" class="link">3. Document object model</a>

<div class="sectionbody">

<div class="paragraph">

pugixml stores XML data in DOM-like way: the entire XML document (both document structure and element data) is stored in memory as a tree. The tree can be loaded from a character stream (file, string, C++ I/O stream), then traversed with the special API or XPath expressions. The whole tree is mutable: both node structure and node/attribute data can be changed at any time. Finally, the result of document transformations can be saved to a character stream (file, C++ I/O stream or custom transport).

</div>

<div class="sect2">

<span id="dom.tree"></span>

### <a href="#dom.tree" class="anchor"></a><a href="#dom.tree" class="link">3.1. Tree structure</a>

<div class="paragraph">

The XML document is represented with a tree data structure. The root of the tree is the document itself, which corresponds to C++ type [xml_document](#xml_document). Document has one or more child nodes, which correspond to C++ type [xml_node](#xml_node). Nodes have different types; depending on a type, a node can have a collection of child nodes, a collection of attributes, which correspond to C++ type [xml_attribute](#xml_attribute), and some additional data (i.e. name).

</div>

<div id="xml_node_type" class="paragraph">

The tree nodes can be of one of the following types (which together form the enumeration `xml_node_type`):

</div>

<div class="ulist">

- Document node (<span id="node_document"></span>`node_document`) - this is the root of the tree, which consists of several child nodes. This node corresponds to [xml_document](#xml_document) class; note that [xml_document](#xml_document) is a sub-class of [xml_node](#xml_node), so the entire node interface is also available. However, document node is special in several ways, which are covered below. There can be only one document node in the tree; document node does not have any XML representation. Document generally has one child element node (see [document_element()](#xml_document::document_element)), although documents parsed from XML fragments (see [parse_fragment](#parse_fragment)) can have more than one.

- Element/tag node (<span id="node_element"></span>`node_element`) - this is the most common type of node, which represents XML elements. Element nodes have a name, a collection of attributes and a collection of child nodes (both of which may be empty). The attribute is a simple name/value pair. The example XML representation of element nodes is as follows:

  <div class="listingblock">

  <div class="content">

  ``` cpp
  <node attr="value"><child/></node>
  ```

  </div>

  </div>

  <div class="paragraph">

  There are two element nodes here: one has name `"node"`, single attribute `"attr"` and single child `"child"`, another has name `"child"` and does not have any attributes or child nodes.

  </div>

- Plain character data nodes (<span id="node_pcdata"></span>`node_pcdata`) represent plain text in XML. PCDATA nodes have a value, but do not have a name or children/attributes. Note that **plain character data is not a part of the element node but instead has its own node**; an element node can have several child PCDATA nodes. The example XML representation of text nodes is as follows:

  <div class="listingblock">

  <div class="content">

  ``` cpp
  <node> text1 <child/> text2 </node>
  ```

  </div>

  </div>

  <div class="paragraph">

  Here `"node"` element has three children, two of which are PCDATA nodes with values `" text1 "` and `" text2 "`.

  </div>

- Character data nodes (<span id="node_cdata"></span>`node_cdata`) represent text in XML that is quoted in a special way. CDATA nodes do not differ from PCDATA nodes except in XML representation - the above text example looks like this with CDATA:

  <div class="listingblock">

  <div class="content">

  ``` cpp
  <node> <![CDATA[text1]]> <child/> <![CDATA[text2]]> </node>
  ```

  </div>

  </div>

  <div class="paragraph">

  CDATA nodes make it easy to include non-escaped `<`, `&` and `>` characters in plain text. CDATA value can not contain the character sequence `]]>`, since it is used to determine the end of node contents.

  </div>

- Comment nodes (<span id="node_comment"></span>`node_comment`) represent comments in XML. Comment nodes have a value, but do not have a name or children/attributes. The example XML representation of a comment node is as follows:

  <div class="listingblock">

  <div class="content">

  ``` cpp
  <!-- comment text -->
  ```

  </div>

  </div>

  <div class="paragraph">

  Here the comment node has value `"comment text"`. By default comment nodes are treated as non-essential part of XML markup and are not loaded during XML parsing. You can override this behavior with [parse_comments](#parse_comments) flag.

  </div>

- Processing instruction node (<span id="node_pi"></span>`node_pi`) represent processing instructions (PI) in XML. PI nodes have a name and an optional value, but do not have children/attributes. The example XML representation of a PI node is as follows:

  <div class="listingblock">

  <div class="content">

  ``` cpp
  <?name value?>
  ```

  </div>

  </div>

  <div class="paragraph">

  Here the name (also called PI target) is `"name"`, and the value is `"value"`. By default PI nodes are treated as non-essential part of XML markup and are not loaded during XML parsing. You can override this behavior with [parse_pi](#parse_pi) flag.

  </div>

- Declaration node (<span id="node_declaration"></span>`node_declaration`) represents document declarations in XML. Declaration nodes have a name (`"xml"`) and an optional collection of attributes, but do not have value or children. There can be only one declaration node in a document; moreover, it should be the topmost node (its parent should be the document). The example XML representation of a declaration node is as follows:

  <div class="listingblock">

  <div class="content">

  ``` cpp
  <?xml version="1.0"?>
  ```

  </div>

  </div>

  <div class="paragraph">

  Here the node has name `"xml"` and a single attribute with name `"version"` and value `"1.0"`. By default declaration nodes are treated as non-essential part of XML markup and are not loaded during XML parsing. You can override this behavior with [parse_declaration](#parse_declaration) flag. Also, by default a dummy declaration is output when XML document is saved unless there is already a declaration in the document; you can disable this with [format_no_declaration](#format_no_declaration) flag.

  </div>

- Document type declaration node (<span id="node_doctype"></span>`node_doctype`) represents document type declarations in XML. Document type declaration nodes have a value, which corresponds to the entire document type contents; no additional nodes are created for inner elements like `<!ENTITY>`. There can be only one document type declaration node in a document; moreover, it should be the topmost node (its parent should be the document). The example XML representation of a document type declaration node is as follows:

  <div class="listingblock">

  <div class="content">

  ``` cpp
  <!DOCTYPE greeting [ <!ELEMENT greeting (#PCDATA)> ]>
  ```

  </div>

  </div>

  <div class="paragraph">

  Here the node has value `"greeting [ <!ELEMENT greeting (#PCDATA)> ]"`. By default document type declaration nodes are treated as non-essential part of XML markup and are not loaded during XML parsing. You can override this behavior with [parse_doctype](#parse_doctype) flag.

  </div>

</div>

<div class="paragraph">

Finally, here is a complete example of XML document and the corresponding tree representation ([samples/tree.xml](samples/tree.xml)):

</div>

<table class="tableblock frame-none grid-all stretch">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="listingblock">
<div class="content">
<pre class="xml"><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;mesh name=&quot;mesh_root&quot;&gt;
    &lt;!-- here is a mesh node --&gt;
    some text
    &lt;![CDATA[someothertext]]&gt;
    some more text
    &lt;node attr1=&quot;value1&quot; attr2=&quot;value2&quot; /&gt;
    &lt;node attr1=&quot;value2&quot;&gt;
        &lt;innernode/&gt;
    &lt;/node&gt;
&lt;/mesh&gt;
&lt;?include somedata?&gt;</code></pre>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="images/dom_tree.png" class="image"><img src="images/dom_tree.png" alt="dom tree" /></a>
</div>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="sect2">

<span id="dom.cpp"></span>

### <a href="#dom.cpp" class="anchor"></a><a href="#dom.cpp" class="link">3.2. C++ interface</a>

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
<td class="content">All pugixml classes and functions are located in the <code>pugi</code> namespace; you have to either use explicit name qualification (i.e. <code>pugi::xml_node</code>), or to gain access to relevant symbols via <code>using</code> directive (i.e. <code>using pugi::xml_node;</code> or <code>using namespace pugi;</code>). The namespace will be omitted from all declarations in this documentation hereafter; all code examples will use fully qualified names.</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

Despite the fact that there are several node types, there are only three C++ classes representing the tree (`xml_document`, `xml_node`, `xml_attribute`); some operations on `xml_node` are only valid for certain node types. The classes are described below.

</div>

<div class="paragraph">

<span id="xml_document"></span><span id="xml_document::document_element"></span> `xml_document` is the owner of the entire document structure; it is a non-copyable class. The interface of `xml_document` consists of loading functions (see [Loading document](#loading)), saving functions (see [Saving document](#saving)) and the entire interface of `xml_node`, which allows for document inspection and/or modification. Note that while `xml_document` is a sub-class of `xml_node`, `xml_node` is not a polymorphic type; the inheritance is present only to simplify usage. Alternatively you can use the `document_element` function to get the element node that’s the immediate child of the document.

</div>

<div class="paragraph">

<span id="xml_document::ctor"></span><span id="xml_document::dtor"></span><span id="xml_document::reset"></span> Default constructor of `xml_document` initializes the document to the tree with only a root node (document node). You can then populate it with data using either tree modification functions or loading functions; all loading functions destroy the previous tree with all occupied memory, which puts existing node/attribute handles for this document to invalid state. If you want to destroy the previous tree, you can use the `xml_document::reset` function; it destroys the tree and replaces it with either an empty one or a copy of the specified document. Destructor of `xml_document` also destroys the tree, thus the lifetime of the document object should exceed the lifetimes of any node/attribute handles that point to the tree.

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
<td class="content">While technically node/attribute handles can be alive when the tree they’re referring to is destroyed, calling any member function for these handles results in undefined behavior. Thus it is recommended to make sure that the document is destroyed only after all references to its nodes/attributes are destroyed.</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

<span id="xml_node"></span><span id="xml_node::type"></span> `xml_node` is the handle to document node; it can point to any node in the document, including the document node itself. There is a common interface for nodes of all types; the actual [node type](#xml_node_type) can be queried via the `xml_node::type()` method. Note that `xml_node` is only a handle to the actual node, not the node itself - you can have several `xml_node` handles pointing to the same underlying object. Destroying `xml_node` handle does not destroy the node and does not remove it from the tree. The size of `xml_node` is equal to that of a pointer, so it is nothing more than a lightweight wrapper around a pointer; you can safely pass or return `xml_node` objects by value without additional overhead.

</div>

<div id="node_null" class="paragraph">

There is a special value of `xml_node` type, known as null node or empty node (such nodes have type `node_null`). It does not correspond to any node in any document, and thus resembles null pointer. However, all operations are defined on empty nodes; generally the operations don’t do anything and return empty nodes/attributes or empty strings as their result (see documentation for specific functions for more detailed information). This is useful for chaining calls; i.e. you can get the grandparent of a node like so: `node.parent().parent()`; if a node is a null node or it does not have a parent, the first `parent()` call returns null node; the second `parent()` call then also returns null node, which makes error handling easier.

</div>

<div id="xml_attribute" class="paragraph">

`xml_attribute` is the handle to an XML attribute; it has the same semantics as `xml_node`, i.e. there can be several `xml_attribute` handles pointing to the same underlying object and there is a special null attribute value, which propagates to function results.

</div>

<div class="paragraph">

<span id="xml_attribute::ctor"></span><span id="xml_node::ctor"></span> Both `xml_node` and `xml_attribute` have the default constructor which initializes them to null objects.

</div>

<div class="paragraph">

<span id="xml_attribute::comparison"></span><span id="xml_node::comparison"></span> `xml_node` and `xml_attribute` try to behave like pointers, that is, they can be compared with other objects of the same type, making it possible to use them as keys in associative containers. All handles to the same underlying object are equal, and any two handles to different underlying objects are not equal. Null handles only compare as equal to null handles. The result of relational comparison can not be reliably determined from the order of nodes in file or in any other way. Do not use relational comparison operators except for search optimization (i.e. associative container keys).

</div>

<div class="paragraph">

<span id="xml_attribute::hash_value"></span><span id="xml_node::hash_value"></span> If you want to use `xml_node` or `xml_attribute` objects as keys in hash-based associative containers, you can use the `hash_value` member functions. They return the hash values that are guaranteed to be the same for all handles to the same underlying object. The hash value for null handles is 0. Note that hash value does not depend on the content of the node, only on the location of the underlying structure in memory - this means that loading the same document twice will likely produce different hash values, and copying the node will not preserve the hash.

</div>

<div class="paragraph">

<span id="xml_attribute::unspecified_bool_type"></span><span id="xml_node::unspecified_bool_type"></span><span id="xml_attribute::empty"></span><span id="xml_node::empty"></span> Finally handles can be implicitly cast to boolean-like objects, so that you can test if the node/attribute is empty with the following code: `if (node) { …​ }` or `if (!node) { …​ } else { …​ }`. Alternatively you can check if a given `xml_node`/`xml_attribute` handle is null by calling the following methods:

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xml_attribute::empty() const;
bool xml_node::empty() const;
```

</div>

</div>

<div class="paragraph">

Nodes and attributes do not exist without a document tree, so you can’t create them without adding them to some document. Once underlying node/attribute objects are destroyed, the handles to those objects become invalid. While this means that destruction of the entire tree invalidates all node/attribute handles, it also means that destroying a subtree (by calling [xml_node::remove_child](#xml_node::remove_child)) or removing an attribute invalidates the corresponding handles. There is no way to check handle validity; you have to ensure correctness through external mechanisms.

</div>

</div>

<div class="sect2">

<span id="dom.unicode"></span>

### <a href="#dom.unicode" class="anchor"></a><a href="#dom.unicode" class="link">3.3. Unicode interface</a>

<div class="paragraph">

There are two choices of interface and internal representation when configuring pugixml: you can either choose the UTF-8 (also called char) interface or UTF-16/32 (also called wchar_t) one. The choice is controlled via [PUGIXML_WCHAR_MODE](#PUGIXML_WCHAR_MODE) define; you can set it via `pugiconfig.hpp` or via preprocessor options, as discussed in [Additional configuration options](#install.building.config). If this define is set, the wchar_t interface is used; otherwise (by default) the char interface is used. The exact wide character encoding is assumed to be either UTF-16 or UTF-32 and is determined based on the size of `wchar_t` type.

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
<td class="content">If the size of <code>wchar_t</code> is 2, pugixml assumes UTF-16 encoding instead of UCS-2, which means that some characters are represented as two code points.</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

All tree functions that work with strings work with either C-style null terminated strings or STL strings of the selected character type. For example, node name accessors look like this in char mode:

</div>

<div class="listingblock">

<div class="content">

``` cpp
const char* xml_node::name() const;
bool xml_node::set_name(const char* value);
```

</div>

</div>

<div class="paragraph">

and like this in wchar_t mode:

</div>

<div class="listingblock">

<div class="content">

``` cpp
const wchar_t* xml_node::name() const;
bool xml_node::set_name(const wchar_t* value);
```

</div>

</div>

<div class="paragraph">

<span id="char_t"></span><span id="string_t"></span><span id="string_view_t"></span> There is a special type, `pugi::char_t`, that is defined as the character type and depends on the library configuration; it will be also used in the documentation hereafter. There is also a type `pugi::string_t`, which is defined as the STL string of the character type; it corresponds to `std::string` in char mode and to `std::wstring` in wchar_t mode. Similarly, `string_view_t` is defined to be `std::basic_string_view<char_t>`. Overloads for `string_view_t` are only available when building for C++17 or later (see `PUGIXML_HAS_STRING_VIEW`).

</div>

<div class="paragraph">

In addition to the interface, the internal implementation changes to store XML data as `pugi::char_t`; this means that these two modes have different memory usage characteristics - generally UTF-8 mode is more memory and performance efficient, especially if `sizeof(wchar_t)` is 4. The conversion to `pugi::char_t` upon document loading and from `pugi::char_t` upon document saving happen automatically, which also carries minor performance penalty. The general advice however is to select the character mode based on usage scenario, i.e. if UTF-8 is inconvenient to process and most of your XML data is non-ASCII, wchar_t mode is probably a better choice.

</div>

<div class="paragraph">

<span id="as_utf8"></span><span id="as_wide"></span> There are cases when you’ll have to convert string data between UTF-8 and wchar_t encodings; the following helper functions are provided for such purposes:

</div>

<div class="listingblock">

<div class="content">

``` cpp
std::string as_utf8(const wchar_t* str);
std::wstring as_wide(const char* str);
```

</div>

</div>

<div class="paragraph">

Both functions accept a null-terminated string as an argument `str`, and return the converted string. `as_utf8` performs conversion from UTF-16/32 to UTF-8; `as_wide` performs conversion from UTF-8 to UTF-16/32. Invalid UTF sequences are silently discarded upon conversion. `str` has to be a valid string; passing null pointer results in undefined behavior. There are also two overloads with the same semantics which accept a string as an argument:

</div>

<div class="listingblock">

<div class="content">

``` cpp
std::string as_utf8(const std::wstring& str);
std::wstring as_wide(const std::string& str);
```

</div>

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
<td class="content"><div class="paragraph">
<p>Most examples in this documentation assume char interface and therefore will not compile with <a href="#PUGIXML_WCHAR_MODE">PUGIXML_WCHAR_MODE</a>. This is done to simplify the documentation; usually the only changes you’ll have to make is to pass <code>wchar_t</code> string literals, i.e. instead of</p>
</div>
<div class="paragraph">
<p><code>xml_node node = doc.child("bookstore").find_child_by_attribute("book", "id", "12345");</code></p>
</div>
<div class="paragraph">
<p>you’ll have to use</p>
</div>
<div class="paragraph">
<p><code>xml_node node = doc.child(L"bookstore").find_child_by_attribute(L"book", L"id", L"12345");</code></p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<span id="dom.thread"></span>

### <a href="#dom.thread" class="anchor"></a><a href="#dom.thread" class="link">3.4. Thread-safety guarantees</a>

<div class="paragraph">

Almost all functions in pugixml have the following thread-safety guarantees:

</div>

<div class="ulist">

- it is safe to call free (non-member) functions from multiple threads

- it is safe to perform concurrent read-only accesses to the same tree (all constant member functions do not modify the tree)

- it is safe to perform concurrent read/write accesses on multiple trees, as long as each tree is only accessed from a single thread at a time

</div>

<div class="paragraph">

Concurrent read/write access to a single tree requires synchronization, for example via a reader-writer lock. Modification includes altering document structure and altering individual node/attribute data, i.e. changing names/values.

</div>

<div class="paragraph">

The only exception is [set_memory_management_functions](#set_memory_management_functions); it modifies global variables and as such is not thread-safe. Its usage policy has more restrictions, see [Custom memory allocation/deallocation functions](#dom.memory.custom).

</div>

</div>

<div class="sect2">

<span id="dom.exception"></span>

### <a href="#dom.exception" class="anchor"></a><a href="#dom.exception" class="link">3.5. Exception guarantees</a>

<div class="paragraph">

With the exception of XPath, pugixml itself does not throw any exceptions. Additionally, most pugixml functions have a no-throw exception guarantee.

</div>

<div class="paragraph">

This is not applicable to functions that operate on STL strings or IOstreams; such functions have either strong guarantee (functions that operate on strings) or basic guarantee (functions that operate on streams). Also functions that call user-defined callbacks (i.e. [xml_node::traverse](#xml_node::traverse) or [xml_node::find_node](#xml_node::find_node)) do not provide any exception guarantees beyond the ones provided by the callback.

</div>

<div class="paragraph">

If exception handling is not disabled with [PUGIXML_NO_EXCEPTIONS](#PUGIXML_NO_EXCEPTIONS) define, XPath functions may throw [xpath_exception](#xpath_exception) on parsing errors; also, XPath functions may throw `std::bad_alloc` in low memory conditions. Still, XPath functions provide strong exception guarantee.

</div>

</div>

<div class="sect2">

<span id="dom.memory"></span>

### <a href="#dom.memory" class="anchor"></a><a href="#dom.memory" class="link">3.6. Memory management</a>

<div class="paragraph">

pugixml requests the memory needed for document storage in big chunks, and allocates document data inside those chunks. This section discusses replacing functions used for chunk allocation and internal memory management implementation.

</div>

<div class="sect3">

<span id="dom.memory.custom"></span>

#### <a href="#dom.memory.custom" class="anchor"></a><a href="#dom.memory.custom" class="link">3.6.1. Custom memory allocation/deallocation functions</a>

<div class="paragraph">

<span id="allocation_function"></span><span id="deallocation_function"></span> All memory for tree structure, tree data and XPath objects is allocated via globally specified functions, which default to malloc/free. You can set your own allocation functions with `set_memory_management_functions` function. The function interfaces are the same as that of malloc/free:

</div>

<div class="listingblock">

<div class="content">

``` cpp
typedef void* (*allocation_function)(size_t size);
typedef void (*deallocation_function)(void* ptr);
```

</div>

</div>

<div class="paragraph">

<span id="set_memory_management_functions"></span><span id="get_memory_allocation_function"></span><span id="get_memory_deallocation_function"></span> You can use the following accessor functions to change or get current memory management functions:

</div>

<div class="listingblock">

<div class="content">

``` cpp
void set_memory_management_functions(allocation_function allocate, deallocation_function deallocate);
allocation_function get_memory_allocation_function();
deallocation_function get_memory_deallocation_function();
```

</div>

</div>

<div class="paragraph">

Allocation function is called with the size (in bytes) as an argument and should return a pointer to a memory block with alignment that is suitable for storage of primitive types (usually a maximum of `void*` and `double` types alignment is sufficient) and size that is greater than or equal to the requested one. If the allocation fails, the function has to either return null pointer or to throw an exception.

</div>

<div class="paragraph">

Deallocation function is called with the pointer that was returned by some call to allocation function; it is never called with a null pointer. If memory management functions are not thread-safe, library thread safety is not guaranteed.

</div>

<div class="paragraph">

This is a simple example of custom memory management ([samples/custom_memory_management.cpp](samples/custom_memory_management.cpp)):

</div>

<div class="listingblock">

<div class="content">

``` cpp
void* custom_allocate(size_t size)
{
    return new (std::nothrow) char[size];
}

void custom_deallocate(void* ptr)
{
    delete[] static_cast<char*>(ptr);
}
```

</div>

</div>

<div class="listingblock">

<div class="content">

``` cpp
pugi::set_memory_management_functions(custom_allocate, custom_deallocate);
```

</div>

</div>

<div class="paragraph">

When setting new memory management functions, care must be taken to make sure that there are no live pugixml objects. Otherwise when the objects are destroyed, the new deallocation function will be called with the memory obtained by the old allocation function, resulting in undefined behavior.

</div>

</div>

<div class="sect3">

<span id="dom.memory.tuning"></span>

#### <a href="#dom.memory.tuning" class="anchor"></a><a href="#dom.memory.tuning" class="link">3.6.2. Memory consumption tuning</a>

<div class="paragraph">

There are several important buffering optimizations in pugixml that rely on predefined constants. These constants have default values that were tuned for common usage patterns; for some applications, changing these constants might improve memory consumption or increase performance. Changing these constants is not recommended unless their default values result in visible problems.

</div>

<div class="paragraph">

These constants can be tuned via configuration defines, as discussed in [Additional configuration options](#install.building.config); it is recommended to set them in `pugiconfig.hpp`.

</div>

<div class="ulist">

- `PUGIXML_MEMORY_PAGE_SIZE` controls the page size for document memory allocation. Memory for node/attribute objects is allocated in pages of the specified size. The default size is 32 Kb; for some applications the size is too large (i.e. embedded systems with little heap space or applications that keep lots of XML documents in memory). A minimum size of 1 Kb is recommended.

- `PUGIXML_MEMORY_OUTPUT_STACK` controls the cumulative stack space required to output the node. Any output operation (i.e. saving a subtree to file) uses an internal buffering scheme for performance reasons. The default size is 10 Kb; if you’re using node output from threads with little stack space, decreasing this value can prevent stack overflows. A minimum size of 1 Kb is recommended.

- `PUGIXML_MEMORY_XPATH_PAGE_SIZE` controls the page size for XPath memory allocation. Memory for XPath query objects as well as internal memory for XPath evaluation is allocated in pages of the specified size. The default size is 4 Kb; if you have a lot of resident XPath query objects, you might need to decrease the size to improve memory consumption. A minimum size of 256 bytes is recommended.

</div>

</div>

<div class="sect3">

<span id="dom.memory.internals"></span>

#### <a href="#dom.memory.internals" class="anchor"></a><a href="#dom.memory.internals" class="link">3.6.3. Document memory management internals</a>

<div class="paragraph">

Constructing a document object using the default constructor does not result in any allocations; document node is stored inside the [xml_document](#xml_document) object.

</div>

<div class="paragraph">

When the document is loaded from file/buffer, unless an inplace loading function is used (see [Loading document from memory](#loading.memory)), a complete copy of character stream is made; all names/values of nodes and attributes are allocated in this buffer. This buffer is allocated via a single large allocation and is only freed when document memory is reclaimed (i.e. if the [xml_document](#xml_document) object is destroyed or if another document is loaded in the same object). Also when loading from file or stream, an additional large allocation may be performed if encoding conversion is required; a temporary buffer is allocated, and it is freed before load function returns.

</div>

<div class="paragraph">

All additional memory, such as memory for document structure (node/attribute objects) and memory for node/attribute names/values is allocated in pages on the order of 32 Kb; actual objects are allocated inside the pages using a memory management scheme optimized for fast allocation/deallocation of many small objects. Because of the scheme specifics, the pages are only destroyed if all objects inside them are destroyed; also, generally destroying an object does not mean that subsequent object creation will reuse the same memory. This means that it is possible to devise a usage scheme which will lead to higher memory usage than expected; one example is adding a lot of nodes, and then removing all even numbered ones; not a single page is reclaimed in the process. However this is an example specifically crafted to produce unsatisfying behavior; in all practical usage scenarios the memory consumption is less than that of a general-purpose allocator because allocation meta-data is very small in size.

</div>

</div>

<div class="sect3">

<span id="dom.memory.compact"></span>

#### <a href="#dom.memory.compact" class="anchor"></a><a href="#dom.memory.compact" class="link">3.6.4. Compact mode</a>

<div class="paragraph">

By default nodes and attributes are optimized for efficiency of access. This can cause them to take a significant amount of memory - for documents with a lot of nodes and not a lot of contents (short attribute values/node text), and depending on the pointer size, the document structure can take noticeably more memory than the document itself (e.g. on a 64-bit platform in UTF-8 mode a markup-heavy document with the file size of 2.1 Mb can use 2.1 Mb for document buffer and 8.3 Mb for document structure).

</div>

<div class="paragraph">

If you are processing big documents or your platform is memory constrained and you’re willing to sacrifice a bit of performance for memory, you can compile pugixml with `PUGIXML_COMPACT` define which will activate compact mode. Compact mode uses a different representation of the document structure that assumes locality of reference between nodes and attributes to optimize memory usage. As a result you get significantly smaller node/attribute objects; usually most objects in most documents don’t require additional storage, but in the worst case - if assumptions about locality of reference don’t hold - additional memory will be allocated to store the extra data required.

</div>

<div class="paragraph">

The compact storage supports all existing operations - including tree modification - with the same amortized complexity (that is, all basic document manipulations are still O(1) on average). The operations are slightly slower; you can usually expect 10-50% slowdown in terms of processing time unless your processing was memory-bound.

</div>

<div class="paragraph">

On 32-bit architectures document structure in compact mode is typically reduced by around 2.5x; on 64-bit architectures the ratio is around 5x. Thus for big markup-heavy documents compact mode can make the difference between the processing of a multi-gigabyte document running completely from RAM vs requiring swapping to disk. Even if the document fits into memory, compact storage can use CPU caches more efficiently by taking less space and causing less cache/TLB misses.

</div>

</div>

</div>

</div>

</div>
