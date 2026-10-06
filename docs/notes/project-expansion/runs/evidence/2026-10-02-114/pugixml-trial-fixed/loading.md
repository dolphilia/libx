<div class="sect1">

<span id="loading"></span>

## <a href="#loading" class="anchor"></a><a href="#loading" class="link">4. Loading document</a>

<div class="sectionbody">

<div class="paragraph">

pugixml provides several functions for loading XML data from various places - files, C++ iostreams, memory buffers. All functions use an extremely fast non-validating parser. This parser is not fully W3C conformant - it can load any valid XML document, but does not perform some well-formedness checks. While considerable effort is made to reject invalid XML documents, some validation is not performed for performance reasons. Also some XML transformations (i.e. EOL handling or attribute value normalization) can impact parsing speed and thus can be disabled. However for vast majority of XML documents there is no performance difference between different parsing options. Parsing options also control whether certain XML nodes are parsed; see [Parsing options](#loading.options) for more information.

</div>

<div class="paragraph">

XML data is always converted to internal character format (see [Unicode interface](#dom.unicode)) before parsing. pugixml supports all popular Unicode encodings (UTF-8, UTF-16 (big and little endian), UTF-32 (big and little endian); UCS-2 is naturally supported since it’s a strict subset of UTF-16) as well as some non-Unicode encodings (Latin-1) and handles all encoding conversions automatically. Unless explicit encoding is specified, loading functions perform automatic encoding detection based on source XML data, so in most cases you do not have to specify document encoding. Encoding conversion is described in more detail in [Encodings](#loading.encoding).

</div>

<div class="sect2">

<span id="loading.file"></span>

### <a href="#loading.file" class="anchor"></a><a href="#loading.file" class="link">4.1. Loading document from file</a>

<div class="paragraph">

<span id="xml_document::load_file"></span><span id="xml_document::load_file_wide"></span> The most common source of XML data is files; pugixml provides dedicated functions for loading an XML document from file:

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_parse_result xml_document::load_file(const char* path, unsigned int options = parse_default, xml_encoding encoding = encoding_auto);
xml_parse_result xml_document::load_file(const wchar_t* path, unsigned int options = parse_default, xml_encoding encoding = encoding_auto);
```

</div>

</div>

<div class="paragraph">

These functions accept the file path as its first argument, and also two optional arguments, which specify parsing options (see [Parsing options](#loading.options)) and input data encoding (see [Encodings](#loading.encoding)). The path has the target operating system format, so it can be a relative or absolute one, it should have the delimiters of the target system, it should have the exact case if the target file system is case-sensitive, etc.

</div>

<div class="paragraph">

File path is passed to the system file opening function as is in case of the first function (which accepts `const char* path`); the second function either uses a special file opening function if it is provided by the runtime library or converts the path to UTF-8 and uses the system file opening function.

</div>

<div class="paragraph">

`load_file` destroys the existing document tree and then tries to load the new tree from the specified file. The result of the operation is returned in an [xml_parse_result](#xml_parse_result) object; this object contains the operation status and the related information (i.e. last successfully parsed position in the input file, if parsing fails). See [Handling parsing errors](#loading.errors) for error handling details.

</div>

<div class="paragraph">

This is an example of loading XML document from file ([samples/load_file.cpp](samples/load_file.cpp)):

</div>

<div class="listingblock">

<div class="content">

``` cpp
pugi::xml_document doc;

pugi::xml_parse_result result = doc.load_file("tree.xml");

std::cout << "Load result: " << result.description() << ", mesh name: " << doc.child("mesh").attribute("name").value() << std::endl;
```

</div>

</div>

</div>

<div class="sect2">

<span id="loading.memory"></span>

### <a href="#loading.memory" class="anchor"></a><a href="#loading.memory" class="link">4.2. Loading document from memory</a>

<div class="paragraph">

<span id="xml_document::load_buffer"></span><span id="xml_document::load_buffer_inplace"></span><span id="xml_document::load_buffer_inplace_own"></span> Sometimes XML data should be loaded from some other source than a file, i.e. HTTP URL; also you may want to load XML data from file using non-standard functions, i.e. to use your virtual file system facilities or to load XML from GZip-compressed files. All these scenarios require loading document from memory. First you should prepare a contiguous memory block with all XML data; then you have to invoke one of buffer loading functions. These functions will handle the necessary encoding conversions, if any, and then will parse the data into the corresponding XML tree. There are several buffer loading functions, which differ in the behavior and thus in performance/memory usage:

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_parse_result xml_document::load_buffer(const void* contents, size_t size, unsigned int options = parse_default, xml_encoding encoding = encoding_auto);
xml_parse_result xml_document::load_buffer_inplace(void* contents, size_t size, unsigned int options = parse_default, xml_encoding encoding = encoding_auto);
xml_parse_result xml_document::load_buffer_inplace_own(void* contents, size_t size, unsigned int options = parse_default, xml_encoding encoding = encoding_auto);
```

</div>

</div>

<div class="paragraph">

All functions accept the buffer which is represented by a pointer to XML data, `contents`, and data size in bytes. Also there are two optional arguments, which specify parsing options (see [Parsing options](#loading.options)) and input data encoding (see [Encodings](#loading.encoding)). The buffer does not have to be zero-terminated.

</div>

<div class="paragraph">

`load_buffer` function works with immutable buffer - it does not ever modify the buffer. Because of this restriction it has to create a private buffer and copy XML data to it before parsing (applying encoding conversions if necessary). This copy operation carries a performance penalty, so inplace functions are provided - `load_buffer_inplace` and `load_buffer_inplace_own` store the document data in the buffer, modifying it in the process. In order for the document to stay valid, you have to make sure that the buffer’s lifetime exceeds that of the tree if you’re using inplace functions. In addition to that, `load_buffer_inplace` does not assume ownership of the buffer, so you’ll have to destroy it yourself; `load_buffer_inplace_own` assumes ownership of the buffer and destroys it once it is not needed. This means that if you’re using `load_buffer_inplace_own`, you have to allocate memory with pugixml allocation function (you can get it via [get_memory_allocation_function](#get_memory_allocation_function)).

</div>

<div class="paragraph">

The best way from the performance/memory point of view is to load document using `load_buffer_inplace_own`; this function has maximum control of the buffer with XML data so it is able to avoid redundant copies and reduce peak memory usage while parsing. This is the recommended function if you have to load the document from memory and performance is critical.

</div>

<div id="xml_document::load_string" class="paragraph">

There is also a simple helper function for cases when you want to load the XML document from null-terminated character string:

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_parse_result xml_document::load_string(const char_t* contents, unsigned int options = parse_default);
```

</div>

</div>

<div class="paragraph">

It is equivalent to calling `load_buffer` with `size` being either `strlen(contents)` or `wcslen(contents) * sizeof(wchar_t)`, depending on the character type. This function assumes native encoding for input data, so it does not do any encoding conversion. In general, this function is fine for loading small documents from string literals, but has more overhead and less functionality than the buffer loading functions.

</div>

<div class="paragraph">

This is an example of loading XML document from memory using different functions ([samples/load_memory.cpp](samples/load_memory.cpp)):

</div>

<div class="listingblock">

<div class="content">

``` cpp
const char source[] = "<mesh name='sphere'><bounds>0 0 1 1</bounds></mesh>";
size_t size = sizeof(source);
```

</div>

</div>

<div class="listingblock">

<div class="content">

``` cpp
// You can use load_buffer to load document from immutable memory block:
pugi::xml_parse_result result = doc.load_buffer(source, size);
```

</div>

</div>

<div class="listingblock">

<div class="content">

``` cpp
// You can use load_buffer_inplace to load document from mutable memory block; the block's lifetime must exceed that of document
char* buffer = new char[size];
memcpy(buffer, source, size);

// The block can be allocated by any method; the block is modified during parsing
pugi::xml_parse_result result = doc.load_buffer_inplace(buffer, size);

// You have to destroy the block yourself after the document is no longer used
delete[] buffer;
```

</div>

</div>

<div class="listingblock">

<div class="content">

``` cpp
// You can use load_buffer_inplace_own to load document from mutable memory block and to pass the ownership of this block
// The block has to be allocated via pugixml allocation function - using i.e. operator new here is incorrect
char* buffer = static_cast<char*>(pugi::get_memory_allocation_function()(size));
memcpy(buffer, source, size);

// The block will be deleted by the document
pugi::xml_parse_result result = doc.load_buffer_inplace_own(buffer, size);
```

</div>

</div>

<div class="listingblock">

<div class="content">

``` cpp
// You can use load to load document from null-terminated strings, for example literals:
pugi::xml_parse_result result = doc.load_string("<mesh name='sphere'><bounds>0 0 1 1</bounds></mesh>");
```

</div>

</div>

</div>

<div class="sect2">

<span id="loading.stream"></span>

### <a href="#loading.stream" class="anchor"></a><a href="#loading.stream" class="link">4.3. Loading document from C++ IOstreams</a>

<div id="xml_document::load_stream" class="paragraph">

To enhance interoperability, pugixml provides functions for loading document from any object which implements C++ `std::istream` interface. This allows you to load documents from any standard C++ stream (i.e. file stream) or any third-party compliant implementation (i.e. Boost Iostreams). There are two functions, one works with narrow character streams, another handles wide character ones:

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_parse_result xml_document::load(std::istream& stream, unsigned int options = parse_default, xml_encoding encoding = encoding_auto);
xml_parse_result xml_document::load(std::wistream& stream, unsigned int options = parse_default);
```

</div>

</div>

<div class="paragraph">

`load` with `std::istream` argument loads the document from stream from the current read position to the end, treating the stream contents as a byte stream of the specified encoding (with encoding autodetection as necessary). Thus calling `xml_document::load` on an opened `std::ifstream` object is equivalent to calling `xml_document::load_file`.

</div>

<div class="paragraph">

`load` with `std::wistream` argument treats the stream contents as a wide character stream (encoding is always [encoding_wchar](#encoding_wchar)). Because of this, using `load` with wide character streams requires careful (usually platform-specific) stream setup (i.e. using the `imbue` function). Generally use of wide streams is discouraged, however it provides you the ability to load documents from non-Unicode encodings, i.e. you can load Shift-JIS encoded data if you set the correct locale.

</div>

<div class="paragraph">

This is a simple example of loading XML document from file using streams ([samples/load_stream.cpp](samples/load_stream.cpp)); read the sample code for more complex examples involving wide streams and locales:

</div>

<div class="listingblock">

<div class="content">

``` cpp
std::ifstream stream("weekly-utf-8.xml");
pugi::xml_parse_result result = doc.load(stream);
```

</div>

</div>

</div>

<div class="sect2">

<span id="loading.errors"></span>

### <a href="#loading.errors" class="anchor"></a><a href="#loading.errors" class="link">4.4. Handling parsing errors</a>

<div id="xml_parse_result" class="paragraph">

All document loading functions return the parsing result via `xml_parse_result` object. It contains parsing status, the offset of last successfully parsed character from the beginning of the source stream, and the encoding of the source stream:

</div>

<div class="listingblock">

<div class="content">

``` cpp
struct xml_parse_result
{
    xml_parse_status status;
    ptrdiff_t offset;
    xml_encoding encoding;

    operator bool() const;
    const char* description() const;
};
```

</div>

</div>

<div class="paragraph">

<span id="xml_parse_status"></span><span id="xml_parse_result::status"></span> Parsing status is represented as the `xml_parse_status` enumeration and can be one of the following:

</div>

<div class="ulist">

- <span id="status_ok"></span>`status_ok` means that no error was encountered during parsing; the source stream represents the valid XML document which was fully parsed and converted to a tree.

- <span id="status_file_not_found"></span>`status_file_not_found` is only returned by `load_file` function and means that file could not be opened.

- <span id="status_io_error"></span>`status_io_error` is returned by `load_file` function and by `load` functions with `std::istream`/`std::wistream` arguments; it means that some I/O error has occurred during reading the file/stream.

- <span id="status_out_of_memory"></span>`status_out_of_memory` means that there was not enough memory during some allocation; any allocation failure during parsing results in this error.

- <span id="status_internal_error"></span>`status_internal_error` means that something went horribly wrong; currently this error does not occur

- <span id="status_unrecognized_tag"></span>`status_unrecognized_tag` means that parsing stopped due to a tag with either an empty name or a name which starts with incorrect character, such as `#`.

- <span id="status_bad_pi"></span>`status_bad_pi` means that parsing stopped due to incorrect document declaration/processing instruction

- <span id="status_bad_comment"></span>`status_bad_comment`, <span id="status_bad_cdata"></span>`status_bad_cdata`, <span id="status_bad_doctype"></span>`status_bad_doctype` and <span id="status_bad_pcdata"></span>`status_bad_pcdata` mean that parsing stopped due to the invalid construct of the respective type

- <span id="status_bad_start_element"></span>`status_bad_start_element` means that parsing stopped because starting tag either had no closing `>` symbol or contained some incorrect symbol

- <span id="status_bad_attribute"></span>`status_bad_attribute` means that parsing stopped because there was an incorrect attribute, such as an attribute without value or with value that is not quoted (note that `<node attr=1>` is incorrect in XML)

- <span id="status_bad_end_element"></span>`status_bad_end_element` means that parsing stopped because ending tag had incorrect syntax (i.e. extra non-whitespace symbols between tag name and `>`)

- <span id="status_end_element_mismatch"></span>`status_end_element_mismatch` means that parsing stopped because the closing tag did not match the opening one (i.e. `<node></nedo>`) or because some tag was not closed at all

- <span id="status_no_document_element"></span>`status_no_document_element` means that no element nodes were discovered during parsing; this usually indicates an empty or invalid document

</div>

<div id="xml_parse_result::description" class="paragraph">

`description()` member function can be used to convert parsing status to a string; the returned message is always in English, so you’ll have to write your own function if you need a localized string. However please note that the exact messages returned by `description()` function may change from version to version, so any complex status handling should be based on `status` value. Note that `description()` returns a `char` string even in `PUGIXML_WCHAR_MODE`; you’ll have to call [as_wide](#as_wide) to get the `wchar_t` string.

</div>

<div class="paragraph">

If parsing failed because the source data was not a valid XML, the resulting tree is not destroyed - despite the fact that load function returns error, you can use the part of the tree that was successfully parsed. Obviously, the last element may have an unexpected name/value; for example, if the attribute value does not end with the necessary quotation mark, like in `<node attr="value>some data</node>` example, the value of attribute `attr` will contain the string `value>some data</node>`.

</div>

<div id="xml_parse_result::offset" class="paragraph">

In addition to the status code, parsing result has an `offset` member, which contains the offset of last successfully parsed character if parsing failed because of an error in source data; otherwise `offset` is 0. For parsing efficiency reasons, pugixml does not track the current line during parsing; this offset is in units of [pugi::char_t](#char_t) (bytes for character mode, wide characters for wide character mode). Many text editors support 'Go To Position' feature - you can use it to locate the exact error position. Alternatively, if you’re loading the document from memory, you can display the error chunk along with the error description (see the example code below).

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
<td class="content">Offset is calculated in the XML buffer in native encoding; if encoding conversion is performed during parsing, offset can not be used to reliably track the error position.</td>
</tr>
</tbody>
</table>

</div>

<div id="xml_parse_result::encoding" class="paragraph">

Parsing result also has an `encoding` member, which can be used to check that the source data encoding was correctly guessed. It is equal to the exact encoding used during parsing (i.e. with the exact endianness); see [Encodings](#loading.encoding) for more information.

</div>

<div id="xml_parse_result::bool" class="paragraph">

Parsing result object can be implicitly converted to `bool`; if you do not want to handle parsing errors thoroughly, you can just check the return value of load functions as if it was a `bool`: `if (doc.load_file("file.xml")) { …​ } else { …​ }`.

</div>

<div class="paragraph">

This is an example of handling loading errors ([samples/load_error_handling.cpp](samples/load_error_handling.cpp)):

</div>

<div class="listingblock">

<div class="content">

``` cpp
pugi::xml_document doc;
pugi::xml_parse_result result = doc.load_string(source);

if (result)
{
    std::cout << "XML [" << source << "] parsed without errors, attr value: [" << doc.child("node").attribute("attr").value() << "]\n\n";
}
else
{
    std::cout << "XML [" << source << "] parsed with errors, attr value: [" << doc.child("node").attribute("attr").value() << "]\n";
    std::cout << "Error description: " << result.description() << "\n";
    std::cout << "Error offset: " << result.offset << " (error at [..." << (source + result.offset) << "]\n\n";
}
```

</div>

</div>

</div>

<div class="sect2">

<span id="loading.options"></span>

### <a href="#loading.options" class="anchor"></a><a href="#loading.options" class="link">4.5. Parsing options</a>

<div class="paragraph">

All document loading functions accept the optional parameter `options`. This is a bitmask that customizes the parsing process: you can select the node types that are parsed and various transformations that are performed with the XML text. Disabling certain transformations can improve parsing performance for some documents; however, the code for all transformations is very well optimized, and thus the majority of documents won’t get any performance benefit. As a rule of thumb, only modify parsing flags if you want to get some nodes in the document that are excluded by default (i.e. declaration or comment nodes).

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
<td class="content">You should use the usual bitwise arithmetics to manipulate the bitmask: to enable a flag, use <code>mask | flag</code>; to disable a flag, use <code>mask &amp; ~flag</code>.</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

These flags control the resulting tree contents:

</div>

<div class="ulist">

- <span id="parse_declaration"></span>`parse_declaration` determines if XML document declaration (node with type [node_declaration](#node_declaration)) is to be put in DOM tree. If this flag is off, it is not put in the tree, but is still parsed and checked for correctness. This flag is **off** by default.

- <span id="parse_doctype"></span>`parse_doctype` determines if XML document type declaration (node with type [node_doctype](#node_doctype)) is to be put in DOM tree. If this flag is off, it is not put in the tree, but is still parsed and checked for correctness. This flag is **off** by default.

- <span id="parse_pi"></span>`parse_pi` determines if processing instructions (nodes with type [node_pi](#node_pi)) are to be put in DOM tree. If this flag is off, they are not put in the tree, but are still parsed and checked for correctness. Note that `<?xml …​?>` (document declaration) is not considered to be a PI. This flag is **off** by default.

- <span id="parse_comments"></span>`parse_comments` determines if comments (nodes with type [node_comment](#node_comment)) are to be put in DOM tree. If this flag is off, they are not put in the tree, but are still parsed and checked for correctness. This flag is **off** by default.

- <span id="parse_cdata"></span>`parse_cdata` determines if CDATA sections (nodes with type [node_cdata](#node_cdata)) are to be put in DOM tree. If this flag is off, they are not put in the tree, but are still parsed and checked for correctness. This flag is **on** by default.

- <span id="parse_trim_pcdata"></span>`parse_trim_pcdata` determines if leading and trailing whitespace characters are to be removed from PCDATA nodes. While for some applications leading/trailing whitespace is significant, often the application only cares about the non-whitespace contents so it’s easier to trim whitespace from text during parsing. This flag is **off** by default.

- <span id="parse_ws_pcdata"></span>`parse_ws_pcdata` determines if PCDATA nodes (nodes with type [node_pcdata](#node_pcdata)) that consist only of whitespace characters are to be put in DOM tree. Often whitespace-only data is not significant for the application, and the cost of allocating and storing such nodes (both memory and speed-wise) can be significant. For example, after parsing XML string `<node> <a/> </node>`, `<node>` element will have three children when `parse_ws_pcdata` is set (child with type [node_pcdata](#node_pcdata) and value `" "`, child with type [node_element](#node_element) and name `"a"`, and another child with type [node_pcdata](#node_pcdata) and value `" "`), and only one child when `parse_ws_pcdata` is not set. This flag is **off** by default.

- <span id="parse_ws_pcdata_single"></span>`parse_ws_pcdata_single` determines if whitespace-only PCDATA nodes that have no sibling nodes are to be put in DOM tree. In some cases application needs to parse the whitespace-only contents of nodes, i.e. `<node> </node>`, but is not interested in whitespace markup elsewhere. It is possible to use [parse_ws_pcdata](#parse_ws_pcdata) flag in this case, but it results in excessive allocations and complicates document processing; this flag can be used to avoid that. As an example, after parsing XML string `<node> <a> </a> </node>` with `parse_ws_pcdata_single` flag set, `<node>` element will have one child `<a>`, and `<a>` element will have one child with type [node_pcdata](#node_pcdata) and value `" "`. This flag has no effect if [parse_ws_pcdata](#parse_ws_pcdata) is enabled. This flag is **off** by default.

- <span id="parse_embed_pcdata"></span>`parse_embed_pcdata` determines if PCDATA contents is to be saved as element values. Normally element nodes have names but not values; this flag forces the parser to store the contents as a value if PCDATA is the first child of the element node (otherwise PCDATA node is created as usual). This can significantly reduce the memory required for documents with many PCDATA nodes. To retrieve the data you can use `xml_node::value()` on the element nodes or any of the higher-level functions like `child_value` or `text`. Since this flag significantly changes the DOM structure it is only recommended for parsing documents with many PCDATA nodes in memory-constrained environments. This flag is **off** by default.

- <span id="parse_merge_pcdata"></span>`parse_merge_pcdata` determines if PCDATA contents is to be merged with the previous PCDATA node when no intermediary nodes are present between them. If the PCDATA contains CDATA sections, PI nodes, or comments in between, and either of the flags [parse_cdata](#parse_cdata), [parse_pi](#parse_pi), [parse_comments](#parse_comments) is not set, the contents of the PCDATA node will be merged with the previous one. This flag is **off** by default. Note that this flag is not compatible with `parse_embed_pcdata`.

- <span id="parse_fragment"></span>`parse_fragment` determines if document should be treated as a fragment of a valid XML. Parsing document as a fragment leads to top-level PCDATA content (i.e. text that is not located inside a node) to be added to a tree, and additionally treats documents without element nodes as valid and permits multiple top-level element nodes (currently multiple top-level element nodes are also permitted when the flag is off, but that behavior should not be relied on). This flag is **off** by default.

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
<td class="content">Using in-place parsing (<a href="#xml_document::load_buffer_inplace">load_buffer_inplace</a>) with <code>parse_fragment</code> flag may result in the loss of the last character of the buffer if it is a part of PCDATA. Since PCDATA values are null-terminated strings, the only way to resolve this is to provide a null-terminated buffer as an input to <code>load_buffer_inplace</code> - i.e. <code>doc.load_buffer_inplace("test\0", 5, pugi::parse_default | pugi::parse_fragment)</code>.</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

These flags control the transformation of tree element contents:

</div>

<div class="ulist">

- <span id="parse_escapes"></span>`parse_escapes` determines if character and entity references are to be expanded during the parsing process. Character references have the form `&#…​;` or `&#x…​;` (`…​` is Unicode numeric representation of character in either decimal (`&#…​;`) or hexadecimal (`&#x…​;`) form), entity references are `&lt;`, `&gt;`, `&amp;`, `&apos;` and `&quot;` (note that as pugixml does not handle DTD, the only allowed entities are predefined ones). If character/entity reference can not be expanded, it is left as is, so you can do additional processing later. Reference expansion is performed on attribute values and PCDATA content. This flag is **on** by default.

- <span id="parse_eol"></span>`parse_eol` determines if EOL handling (that is, replacing sequences `\r\n` by a single `\n` character, and replacing all standalone `\r` characters by `\n`) is to be performed on input data (that is, comment contents, PCDATA/CDATA contents and attribute values). This flag is **on** by default.

- <span id="parse_wconv_attribute"></span>`parse_wconv_attribute` determines if attribute value normalization should be performed for all attributes. This means, that whitespace characters (new line, tab and space) are replaced with space (`' '`). New line characters are always treated as if [parse_eol](#parse_eol) is set, i.e. `\r\n` is converted to a single space. This flag is **on** by default.

- <span id="parse_wnorm_attribute"></span>`parse_wnorm_attribute` determines if extended attribute value normalization should be performed for all attributes. This means, that after attribute values are normalized as if [parse_wconv_attribute](#parse_wconv_attribute) was set, leading and trailing space characters are removed, and all sequences of space characters are replaced by a single space character. [parse_wconv_attribute](#parse_wconv_attribute) has no effect if this flag is on. This flag is **off** by default.

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
<td class="content"><code>parse_wconv_attribute</code> option performs transformations that are required by W3C specification for attributes that are declared as CDATA; <a href="#parse_wnorm_attribute">parse_wnorm_attribute</a> performs transformations required for NMTOKENS attributes. In the absence of document type declaration all attributes should behave as if they are declared as CDATA, thus <a href="#parse_wconv_attribute">parse_wconv_attribute</a> is the default option.</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

Additionally there are three predefined option masks:

</div>

<div class="ulist">

- <span id="parse_minimal"></span>`parse_minimal` has all options turned off. This option mask means that pugixml does not add declaration nodes, document type declaration nodes, PI nodes, CDATA sections and comments to the resulting tree and does not perform any conversion for input data, so theoretically it is the fastest mode. However, as mentioned above, in practice [parse_default](#parse_default) is usually equally fast.

- <span id="parse_default"></span>`parse_default` is the default set of flags, i.e. it has all options set to their default values. It includes parsing CDATA sections (comments/PIs are not parsed), performing character and entity reference expansion, replacing whitespace characters with spaces in attribute values and performing EOL handling. Note, that PCDATA sections consisting only of whitespace characters are not parsed (by default) for performance reasons.

- <span id="parse_full"></span>`parse_full` is the set of flags which adds nodes of all types to the resulting tree and performs default conversions for input data. It includes parsing CDATA sections, comments, PI nodes, document declaration node and document type declaration node, performing character and entity reference expansion, replacing whitespace characters with spaces in attribute values and performing EOL handling. Note, that PCDATA sections consisting only of whitespace characters are not parsed in this mode.

</div>

<div class="paragraph">

This is an example of using different parsing options ([samples/load_options.cpp](samples/load_options.cpp)):

</div>

<div class="listingblock">

<div class="content">

``` cpp
const char* source = "<!--comment--><node>&lt;</node>";

// Parsing with default options; note that comment node is not added to the tree, and entity reference &lt; is expanded
doc.load_string(source);
std::cout << "First node value: [" << doc.first_child().value() << "], node child value: [" << doc.child_value("node") << "]\n";

// Parsing with additional parse_comments option; comment node is now added to the tree
doc.load_string(source, pugi::parse_default | pugi::parse_comments);
std::cout << "First node value: [" << doc.first_child().value() << "], node child value: [" << doc.child_value("node") << "]\n";

// Parsing with additional parse_comments option and without the (default) parse_escapes option; &lt; is not expanded
doc.load_string(source, (pugi::parse_default | pugi::parse_comments) & ~pugi::parse_escapes);
std::cout << "First node value: [" << doc.first_child().value() << "], node child value: [" << doc.child_value("node") << "]\n";

// Parsing with minimal option mask; comment node is not added to the tree, and &lt; is not expanded
doc.load_string(source, pugi::parse_minimal);
std::cout << "First node value: [" << doc.first_child().value() << "], node child value: [" << doc.child_value("node") << "]\n";
```

</div>

</div>

</div>

<div class="sect2">

<span id="loading.encoding"></span>

### <a href="#loading.encoding" class="anchor"></a><a href="#loading.encoding" class="link">4.6. Encodings</a>

<div id="xml_encoding" class="paragraph">

pugixml supports all popular Unicode encodings (UTF-8, UTF-16 (big and little endian), UTF-32 (big and little endian); UCS-2 is naturally supported since it’s a strict subset of UTF-16) as well as some non-Unicode encodings (Latin-1) and handles all encoding conversions. Most loading functions accept the optional parameter `encoding`. This is a value of enumeration type `xml_encoding`, that can have the following values:

</div>

<div class="ulist">

- <span id="encoding_auto"></span>`encoding_auto` means that pugixml will try to guess the encoding based on source XML data. The algorithm is a modified version of the one presented in [Appendix F of XML recommendation](http://www.w3.org/TR/REC-xml/#sec-guessing). It tries to find a Byte Order Mark of one of the supported encodings first; if that fails, it checks if the first few bytes of the input data look like a representation of `<` or `<?` in one of UTF-16 or UTF-32 variants; if that fails as well, encoding is assumed to be either UTF-8 or one of the non-Unicode encodings - to make the final decision the algorithm tries to parse the `encoding` attribute of the XML document declaration, ultimately falling back to UTF-8 if document declaration is not present or does not specify a supported encoding.

- <span id="encoding_utf8"></span>`encoding_utf8` corresponds to UTF-8 encoding as defined in the Unicode standard; UTF-8 sequences with length equal to 5 or 6 are not standard and are rejected.

- <span id="encoding_utf16_le"></span>`encoding_utf16_le` corresponds to little-endian UTF-16 encoding as defined in the Unicode standard; surrogate pairs are supported.

- <span id="encoding_utf16_be"></span>`encoding_utf16_be` corresponds to big-endian UTF-16 encoding as defined in the Unicode standard; surrogate pairs are supported.

- <span id="encoding_utf16"></span>`encoding_utf16` corresponds to UTF-16 encoding as defined in the Unicode standard; the endianness is assumed to be that of the target platform.

- <span id="encoding_utf32_le"></span>`encoding_utf32_le` corresponds to little-endian UTF-32 encoding as defined in the Unicode standard.

- <span id="encoding_utf32_be"></span>`encoding_utf32_be` corresponds to big-endian UTF-32 encoding as defined in the Unicode standard.

- <span id="encoding_utf32"></span>`encoding_utf32` corresponds to UTF-32 encoding as defined in the Unicode standard; the endianness is assumed to be that of the target platform.

- <span id="encoding_wchar"></span>`encoding_wchar` corresponds to the encoding of `wchar_t` type; it has the same meaning as either `encoding_utf16` or `encoding_utf32`, depending on `wchar_t` size.

- <span id="encoding_latin1"></span>`encoding_latin1` corresponds to ISO-8859-1 encoding (also known as Latin-1).

</div>

<div class="paragraph">

The algorithm used for `encoding_auto` correctly detects any supported Unicode encoding for all well-formed XML documents (since they start with document declaration) and for all other XML documents that start with `<`; if your XML document does not start with `<` and has encoding that is different from UTF-8, use the specific encoding.

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
<td class="content">The current behavior for Unicode conversion is to skip all invalid UTF sequences during conversion. This behavior should not be relied upon; moreover, in case no encoding conversion is performed, the invalid sequences are not removed, so you’ll get them as is in node/attribute contents.</td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<span id="loading.w3c"></span>

### <a href="#loading.w3c" class="anchor"></a><a href="#loading.w3c" class="link">4.7. Conformance to W3C specification</a>

<div class="paragraph">

pugixml is not fully W3C conformant - it can load any valid XML document, but does not perform some well-formedness checks. While considerable effort is made to reject invalid XML documents, some validation is not performed because of performance reasons.

</div>

<div class="paragraph">

There is only one non-conformant behavior when dealing with valid XML documents: pugixml does not use information supplied in document type declaration for parsing. This means that entities declared in DOCTYPE are not expanded, and all attribute/PCDATA values are always processed in a uniform way that depends only on parsing options.

</div>

<div class="paragraph">

As for rejecting invalid XML documents, there are a number of incompatibilities with W3C specification, including:

</div>

<div class="ulist">

- Multiple attributes of the same node can have equal names.

- Tag and attribute names are not fully validated for consisting of allowed characters, so some invalid tags are not rejected

- Attribute values which contain `<` are not rejected.

- Invalid entity/character references are not rejected and are instead left as is.

- Comment values can contain `--`.

- XML data is not required to begin with document declaration; additionally, document declaration can appear after comments and other nodes.

- Invalid document type declarations are silently ignored in some cases.

- Unicode validation is not performed so invalid UTF sequences are not rejected.

- Document can contain multiple top-level element nodes.

</div>

</div>

</div>

</div>
