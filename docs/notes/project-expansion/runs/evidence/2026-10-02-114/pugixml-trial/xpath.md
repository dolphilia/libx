<div class="sect1">

<span id="xpath"></span>

## <a href="#xpath" class="anchor"></a><a href="#xpath" class="link">8. XPath</a>

<div class="sectionbody">

<div class="paragraph">

If the task at hand is to select a subset of document nodes that match some criteria, it is possible to code a function using the existing traversal functionality for any practical criteria. However, often either a data-driven approach is desirable, in case the criteria are not predefined and come from a file, or it is inconvenient to use traversal interfaces and a higher-level DSL is required. There is a standard language for XML processing, XPath, that can be useful for these cases. pugixml implements an almost complete subset of XPath 1.0. Because of differences in document object model and some performance implications, there are minor violations of the official specifications, which can be found in [Conformance to W3C specification](#xpath.w3c). The rest of this section describes the interface for XPath functionality. Please note that if you wish to learn to use XPath language, you have to look for other tutorials or manuals; for example, you can read [W3Schools XPath tutorial](https://www.w3schools.com/xml/xpath_intro.asp) or [the XPath 1.0 specification](https://www.w3.org/TR/xpath-10/).

</div>

<div class="sect2">

<span id="xpath.types"></span>

### <a href="#xpath.types" class="anchor"></a><a href="#xpath.types" class="link">8.1. XPath types</a>

<div class="paragraph">

<span id="xpath_value_type"></span><span id="xpath_type_number"></span><span id="xpath_type_string"></span><span id="xpath_type_boolean"></span><span id="xpath_type_node_set"></span><span id="xpath_type_none"></span> Each XPath expression can have one of the following types: boolean, number, string or node set. Boolean type corresponds to `bool` type, number type corresponds to `double` type, string type corresponds to either `std::string` or `std::wstring`, depending on whether [wide character interface is enabled](#dom.unicode), and node set corresponds to [xpath_node_set](#xpath_node_set) type. There is an enumeration, `xpath_value_type`, which can take the values `xpath_type_boolean`, `xpath_type_number`, `xpath_type_string` or `xpath_type_node_set`, accordingly.

</div>

<div class="paragraph">

<span id="xpath_node"></span><span id="xpath_node::node"></span><span id="xpath_node::attribute"></span><span id="xpath_node::parent"></span> Because an XPath node can be either a node or an attribute, there is a special type, `xpath_node`, which is a discriminated union of these types. A value of this type contains two node handles, one of `xml_node` type, and another one of `xml_attribute` type; at most one of them can be non-null. The accessors to get these handles are available:

</div>

<div class="listingblock">

<div class="content">

``` pygments
xml_node xpath_node::node() const;
xml_attribute xpath_node::attribute() const;
```

</div>

</div>

<div class="paragraph">

XPath nodes can be null, in which case both accessors return null handles.

</div>

<div class="paragraph">

Note that as per XPath specification, each XPath node has a parent, which can be retrieved via this function:

</div>

<div class="listingblock">

<div class="content">

``` pygments
xml_node xpath_node::parent() const;
```

</div>

</div>

<div class="paragraph">

`parent` function returns the node’s parent if the XPath node corresponds to `xml_node` handle (equivalent to `node().parent()`), or the node to which the attribute belongs to, if the XPath node corresponds to `xml_attribute` handle. For null nodes, `parent` returns null handle.

</div>

<div class="paragraph">

<span id="xpath_node::unspecified_bool_type"></span><span id="xpath_node::comparison"></span> Like node and attribute handles, XPath node handles can be implicitly cast to boolean-like object to check if it is a null node, and also can be compared for equality with each other.

</div>

<div id="xpath_node::ctor" class="paragraph">

You can also create XPath nodes with one of the three constructors: the default constructor, the constructor that takes node argument, and the constructor that takes attribute and node arguments (in which case the attribute must belong to the attribute list of the node). The constructor from `xml_node` is implicit, so you can usually pass `xml_node` to functions that expect `xpath_node`. Apart from that you usually don’t need to create your own XPath node objects, since they are returned to you via selection functions.

</div>

<div id="xpath_node_set" class="paragraph">

XPath expressions operate not on single nodes, but instead on node sets. A node set is a collection of nodes, which can be optionally ordered in either a forward document order or a reverse one. Document order is defined in XPath specification; an XPath node is before another node in document order if it appears before it in XML representation of the corresponding document.

</div>

<div class="paragraph">

<span id="xpath_node_set::const_iterator"></span><span id="xpath_node_set::begin"></span><span id="xpath_node_set::end"></span> Node sets are represented by `xpath_node_set` object, which has an interface that resembles one of sequential random-access containers. It has an iterator type along with usual begin/past-the-end iterator accessors:

</div>

<div class="listingblock">

<div class="content">

``` pygments
typedef const xpath_node* xpath_node_set::const_iterator;
const_iterator xpath_node_set::begin() const;
const_iterator xpath_node_set::end() const;
```

</div>

</div>

<div class="paragraph">

<span id="xpath_node_set::index"></span><span id="xpath_node_set::size"></span><span id="xpath_node_set::empty"></span> And it also can be iterated via indices, just like `std::vector`:

</div>

<div class="listingblock">

<div class="content">

``` pygments
const xpath_node& xpath_node_set::operator[](size_t index) const;
size_t xpath_node_set::size() const;
bool xpath_node_set::empty() const;
```

</div>

</div>

<div class="paragraph">

All of the above operations have the same semantics as that of `std::vector`: the iterators are random-access, all of the above operations are constant time, and accessing the element at index that is greater or equal than the set size results in undefined behavior. You can use both iterator-based and index-based access for iteration, however the iterator-based one can be faster.

</div>

<div class="paragraph">

<span id="xpath_node_set::type"></span><span id="xpath_node_set::type_unsorted"></span><span id="xpath_node_set::type_sorted"></span><span id="xpath_node_set::type_sorted_reverse"></span><span id="xpath_node_set::sort"></span> The order of iteration depends on the order of nodes inside the set; the order can be queried via the following function:

</div>

<div class="listingblock">

<div class="content">

``` pygments
enum xpath_node_set::type_t {type_unsorted, type_sorted, type_sorted_reverse};
type_t xpath_node_set::type() const;
```

</div>

</div>

<div class="paragraph">

`type` function returns the current order of nodes; `type_sorted` means that the nodes are in forward document order, `type_sorted_reverse` means that the nodes are in reverse document order, and `type_unsorted` means that neither order is guaranteed (nodes can accidentally be in a sorted order even if `type()` returns `type_unsorted`). If you require a specific order of iteration, you can change it via `sort` function:

</div>

<div class="listingblock">

<div class="content">

``` pygments
void xpath_node_set::sort(bool reverse = false);
```

</div>

</div>

<div class="paragraph">

Calling `sort` sorts the nodes in either forward or reverse document order, depending on the argument; after this call `type()` will return `type_sorted` or `type_sorted_reverse`.

</div>

<div id="xpath_node_set::first" class="paragraph">

Often the actual iteration is not needed; instead, only the first element in document order is required. For this, a special accessor is provided:

</div>

<div class="listingblock">

<div class="content">

``` pygments
xpath_node xpath_node_set::first() const;
```

</div>

</div>

<div class="paragraph">

This function returns the first node in forward document order from the set, or null node if the set is empty. Note that while the result of the node does not depend on the order of nodes in the set (i.e. on the result of `type()`), the complexity does - if the set is sorted, the complexity is constant, otherwise it is linear in the number of elements or worse.

</div>

<div id="xpath_node_set::ctor" class="paragraph">

While in the majority of cases the node set is returned by XPath functions, sometimes there is a need to manually construct a node set. For such cases, a constructor is provided which takes an iterator range (`const_iterator` is a typedef for `const xpath_node*`), and an optional type:

</div>

<div class="listingblock">

<div class="content">

``` pygments
xpath_node_set::xpath_node_set(const_iterator begin, const_iterator end, type_t type = type_unsorted);
```

</div>

</div>

<div class="paragraph">

The constructor copies the specified range and sets the specified type. The objects in the range are not checked in any way; you’ll have to ensure that the range contains no duplicates, and that the objects are sorted according to the `type` parameter. Otherwise XPath operations with this set may produce unexpected results.

</div>

</div>

<div class="sect2">

<span id="xpath.select"></span>

### <a href="#xpath.select" class="anchor"></a><a href="#xpath.select" class="link">8.2. Selecting nodes via XPath expression</a>

<div class="paragraph">

<span id="xml_node::select_node"></span><span id="xml_node::select_nodes"></span> If you want to select nodes that match some XPath expression, you can do it with the following functions:

</div>

<div class="listingblock">

<div class="content">

``` pygments
xpath_node xml_node::select_node(const char_t* query, xpath_variable_set* variables = 0) const;
xpath_node_set xml_node::select_nodes(const char_t* query, xpath_variable_set* variables = 0) const;
```

</div>

</div>

<div class="paragraph">

`select_nodes` function compiles the expression and then executes it with the node as a context node, and returns the resulting node set. `select_node` returns only the first node in document order from the result, and is equivalent to calling `select_nodes(query).first()`. If the XPath expression does not match anything, or the node handle is null, `select_nodes` returns an empty set, and `select_node` returns null XPath node.

</div>

<div class="paragraph">

If exception handling is not disabled, both functions throw [xpath_exception](#xpath_exception) if the query can not be compiled or if it returns a value with type other than node set; see [Error handling](#xpath.errors) for details.

</div>

<div class="paragraph">

<span id="xml_node::select_node_precomp"></span><span id="xml_node::select_nodes_precomp"></span> While compiling expressions is fast, the compilation time can introduce a significant overhead if the same expression is used many times on small subtrees. If you’re doing many similar queries, consider compiling them into query objects (see [Using query objects](#xpath.query) for further reference). Once you get a compiled query object, you can pass it to select functions instead of an expression string:

</div>

<div class="listingblock">

<div class="content">

``` pygments
xpath_node xml_node::select_node(const xpath_query& query) const;
xpath_node_set xml_node::select_nodes(const xpath_query& query) const;
```

</div>

</div>

<div class="paragraph">

If exception handling is not disabled, both functions throw [xpath_exception](#xpath_exception) if the query returns a value with type other than node set.

</div>

<div class="paragraph">

This is an example of selecting nodes using XPath expressions (<a href="samples/xpath_select.cpp" class="bare">samples/xpath_select.cpp</a>):

</div>

<div class="listingblock">

<div class="content">

``` pygments
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

<span id="xpath.query"></span>

### <a href="#xpath.query" class="anchor"></a><a href="#xpath.query" class="link">8.3. Using query objects</a>

<div id="xpath_query" class="paragraph">

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

<div id="xpath_query::ctor" class="paragraph">

You can create a query object with the constructor that takes XPath expression as an argument:

</div>

<div class="listingblock">

<div class="content">

``` pygments
explicit xpath_query::xpath_query(const char_t* query, xpath_variable_set* variables = 0);
```

</div>

</div>

<div id="xpath_query::return_type" class="paragraph">

The expression is compiled and the compiled representation is stored in the new query object. If compilation fails, [xpath_exception](#xpath_exception) is thrown if exception handling is not disabled (see [Error handling](#xpath.errors) for details). After the query is created, you can query the type of the evaluation result using the following function:

</div>

<div class="listingblock">

<div class="content">

``` pygments
xpath_value_type xpath_query::return_type() const;
```

</div>

</div>

<div class="paragraph">

<span id="xpath_query::evaluate_boolean"></span><span id="xpath_query::evaluate_number"></span><span id="xpath_query::evaluate_string"></span><span id="xpath_query::evaluate_node_set"></span><span id="xpath_query::evaluate_node"></span> You can evaluate the query using one of the following functions:

</div>

<div class="listingblock">

<div class="content">

``` pygments
bool xpath_query::evaluate_boolean(const xpath_node& n) const;
double xpath_query::evaluate_number(const xpath_node& n) const;
string_t xpath_query::evaluate_string(const xpath_node& n) const;
xpath_node_set xpath_query::evaluate_node_set(const xpath_node& n) const;
xpath_node xpath_query::evaluate_node(const xpath_node& n) const;
```

</div>

</div>

<div class="paragraph">

All functions take the context node as an argument, compute the expression and return the result, converted to the requested type. According to XPath specification, value of any type can be converted to boolean, number or string value, but no type other than node set can be converted to node set. Because of this, `evaluate_boolean`, `evaluate_number` and `evaluate_string` always return a result, but `evaluate_node_set` and `evaluate_node` result in an error if the return type is not node set (see [Error handling](#xpath.errors)).

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

<div id="xpath_query::evaluate_string_buffer" class="paragraph">

Note that `evaluate_string` function returns the STL string; as such, it’s not available in [PUGIXML_NO_STL](#PUGIXML_NO_STL) mode and also usually allocates memory. There is another string evaluation function:

</div>

<div class="listingblock">

<div class="content">

``` pygments
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

This is an example of using query objects (<a href="samples/xpath_query.cpp" class="bare">samples/xpath_query.cpp</a>):

</div>

<div class="listingblock">

<div class="content">

``` pygments
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

<span id="xpath.variables"></span>

### <a href="#xpath.variables" class="anchor"></a><a href="#xpath.variables" class="link">8.4. Using variables</a>

<div class="paragraph">

XPath queries may contain references to variables; this is useful if you want to use queries that depend on some dynamic parameter without manually preparing the complete query string, or if you want to reuse the same query object for similar queries.

</div>

<div class="paragraph">

Variable references have the form `$name`; in order to use them, you have to provide a variable set, which includes all variables present in the query with correct types. This set is passed to `xpath_query` constructor or to `select_nodes`/`select_node` functions:

</div>

<div class="listingblock">

<div class="content">

``` pygments
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

<div id="xpath_variable_set" class="paragraph">

Variable sets correspond to `xpath_variable_set` type, which is essentially a variable container.

</div>

<div id="xpath_variable_set::add" class="paragraph">

You can add new variables with the following function:

</div>

<div class="listingblock">

<div class="content">

``` pygments
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

<div id="xpath_variable_set::get" class="paragraph">

You can get the existing variables with the following functions:

</div>

<div class="listingblock">

<div class="content">

``` pygments
xpath_variable* xpath_variable_set::get(const char_t* name);
const xpath_variable* xpath_variable_set::get(const char_t* name) const;
```

</div>

</div>

<div class="paragraph">

The functions return the variable handle, or null pointer if the variable with the specified name is not found.

</div>

<div id="xpath_variable_set::set" class="paragraph">

Additionally, there are the helper functions for setting the variable value by name; they try to add the variable with the corresponding type, if it does not exist, and to set the value. If the variable with the same name but with different type is already present, they return `false`; they also return `false` on allocation failure. Note that these functions do not perform any type conversions.

</div>

<div class="listingblock">

<div class="content">

``` pygments
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

<div id="xpath_variable" class="paragraph">

If setting variables by name is not efficient enough, or if you have to inspect variable information or get variable values, you can use variable handles. A variable corresponds to the `xpath_variable` type, and a variable handle is simply a pointer to `xpath_variable`.

</div>

<div class="paragraph">

<span id="xpath_variable::type"></span><span id="xpath_variable::name"></span> In order to get variable information, you can use one of the following functions:

</div>

<div class="listingblock">

<div class="content">

``` pygments
const char_t* xpath_variable::name() const;
xpath_value_type xpath_variable::type() const;
```

</div>

</div>

<div class="paragraph">

Note that each variable has a distinct type which is specified upon variable creation and can not be changed later.

</div>

<div class="paragraph">

<span id="xpath_variable::get_boolean"></span><span id="xpath_variable::get_number"></span><span id="xpath_variable::get_string"></span><span id="xpath_variable::get_node_set"></span> In order to get variable value, you should use one of the following functions, depending on the variable type:

</div>

<div class="listingblock">

<div class="content">

``` pygments
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

<div id="xpath_variable::set" class="paragraph">

In order to set variable value, you should use one of the following functions, depending on the variable type:

</div>

<div class="listingblock">

<div class="content">

``` pygments
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

This is an example of using variables in XPath queries (<a href="samples/xpath_variables.cpp" class="bare">samples/xpath_variables.cpp</a>):

</div>

<div class="listingblock">

<div class="content">

``` pygments
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

<span id="xpath.errors"></span>

### <a href="#xpath.errors" class="anchor"></a><a href="#xpath.errors" class="link">8.5. Error handling</a>

<div class="paragraph">

There are two different mechanisms for error handling in XPath implementation; the mechanism used depends on whether exception support is disabled (this is controlled with [PUGIXML_NO_EXCEPTIONS](#PUGIXML_NO_EXCEPTIONS) define).

</div>

<div class="paragraph">

<span id="xpath_exception"></span><span id="xpath_exception::result"></span><span id="xpath_exception::what"></span> By default, XPath functions throw `xpath_exception` object in case of errors; additionally, in the event any memory allocation fails, an `std::bad_alloc` exception is thrown. Also `xpath_exception` is thrown if the query is evaluated as a node set, but the return type is not node set. If the query constructor succeeds (i.e. no exception is thrown), the query object is valid. Otherwise you can get the error details via one of the following functions:

</div>

<div class="listingblock">

<div class="content">

``` pygments
virtual const char* xpath_exception::what() const noexcept;
const xpath_parse_result& xpath_exception::result() const;
```

</div>

</div>

<div class="paragraph">

<span id="xpath_query::unspecified_bool_type"></span><span id="xpath_query::result"></span> If exceptions are disabled, then in the event of parsing failure the query is initialized to invalid state; you can test if the query object is valid by using it in a boolean expression: `if (query) { …​ }`. Additionally, you can get parsing result via the result() accessor:

</div>

<div class="listingblock">

<div class="content">

``` pygments
const xpath_parse_result& xpath_query::result() const;
```

</div>

</div>

<div class="paragraph">

Without exceptions, evaluating invalid query results in `false`, empty string, `NaN` or an empty node set, depending on the type; evaluating a query as a node set results in an empty node set if the return type is not node set.

</div>

<div id="xpath_parse_result" class="paragraph">

The information about parsing result is returned via `xpath_parse_result` object. It contains parsing status and the offset of last successfully parsed character from the beginning of the source stream:

</div>

<div class="listingblock">

<div class="content">

``` pygments
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

<div id="xpath_parse_result::error" class="paragraph">

Parsing result is represented as the error message; it is either a null pointer, in case there is no error, or the error message in the form of ASCII zero-terminated string.

</div>

<div id="xpath_parse_result::description" class="paragraph">

`description()` member function can be used to get the error message; it never returns the null pointer, so you can safely use `description()` even if query parsing succeeded. Note that `description()` returns a `char` string even in `PUGIXML_WCHAR_MODE`; you’ll have to call [as_wide](#as_wide) to get the `wchar_t` string.

</div>

<div id="xpath_parse_result::offset" class="paragraph">

In addition to the error message, parsing result has an `offset` member, which contains the offset of last successfully parsed character. This offset is in units of [pugi::char_t](#char_t) (bytes for character mode, wide characters for wide character mode).

</div>

<div id="xpath_parse_result::bool" class="paragraph">

Parsing result object can be implicitly converted to `bool` like this: `if (result) { …​ } else { …​ }`.

</div>

<div class="paragraph">

This is an example of XPath error handling (<a href="samples/xpath_error.cpp" class="bare">samples/xpath_error.cpp</a>):

</div>

<div class="listingblock">

<div class="content">

``` pygments
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

<span id="xpath.w3c"></span>

### <a href="#xpath.w3c" class="anchor"></a><a href="#xpath.w3c" class="link">8.6. Conformance to W3C specification</a>

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
