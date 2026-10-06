<div class="sect1">

<span id="saving"></span>

## <a href="#saving" class="anchor"></a><a href="#saving" class="link">7. Saving document</a>

<div class="sectionbody">

<div class="paragraph">

Often after creating a new document or loading the existing one and processing it, it is necessary to save the result back to file. Also it is occasionally useful to output the whole document or a subtree to some stream; use cases include debug printing, serialization via network or other text-oriented medium, etc. pugixml provides several functions to output any subtree of the document to a file, stream or another generic transport interface; these functions allow to customize the output format (see [Output options](#saving.options)), and also perform necessary encoding conversions (see [Encodings](#saving.encoding)). This section documents the relevant functionality.

</div>

<div class="paragraph">

Before writing to the destination the node/attribute data is properly formatted according to the node type; all special XML symbols, such as `<` and `&`, are properly escaped (unless [format_no_escapes](#format_no_escapes) flag is set). In order to guard against forgotten node/attribute names, empty node/attribute names are printed as `":anonymous"`. For well-formed output, make sure all node and attribute names are set to meaningful values.

</div>

<div class="paragraph">

CDATA sections with values that contain `"]]>"` are split into several sections as follows: section with value `"pre]]>post"` is written as `<![CDATA[pre]]]]><![CDATA[>post]]>`. While this alters the structure of the document (if you load the document after saving it, there will be two CDATA sections instead of one), this is the only way to escape CDATA contents.

</div>

<div class="sect2">

<span id="saving.file"></span>

### <a href="#saving.file" class="anchor"></a><a href="#saving.file" class="link">7.1. Saving document to a file</a>

<div class="paragraph">

<span id="xml_document::save_file"></span><span id="xml_document::save_file_wide"></span> If you want to save the whole document to a file, you can use one of the following functions:

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xml_document::save_file(const char* path, const char_t* indent = "\t", unsigned int flags = format_default, xml_encoding encoding = encoding_auto) const;
bool xml_document::save_file(const wchar_t* path, const char_t* indent = "\t", unsigned int flags = format_default, xml_encoding encoding = encoding_auto) const;
```

</div>

</div>

<div class="paragraph">

These functions accept file path as its first argument, and also three optional arguments, which specify indentation and other output options (see [Output options](#saving.options)) and output data encoding (see [Encodings](#saving.encoding)). The path has the target operating system format, so it can be a relative or absolute one, it should have the delimiters of the target system, it should have the exact case if the target file system is case-sensitive, etc. The functions return `true` on success and `false` if the file could not be opened or written to.

</div>

<div class="paragraph">

File path is passed to the system file opening function as is in case of the first function (which accepts `const char* path`); the second function either uses a special file opening function if it is provided by the runtime library or converts the path to UTF-8 and uses the system file opening function.

</div>

<div id="xml_writer_file" class="paragraph">

`save_file` opens the target file for writing, outputs the requested header (by default a document declaration is output, unless the document already has one), and then saves the document contents. Calling `save_file` is equivalent to creating an `xml_writer_file` object with `FILE*` handle as the only constructor argument and then calling `save`; see [Saving document via writer interface](#saving.writer) for writer interface details.

</div>

<div class="paragraph">

This is a simple example of saving XML document to file ([samples/save_file.cpp](samples/save_file.cpp)):

</div>

<div class="listingblock">

<div class="content">

``` cpp
// save document to file
std::cout << "Saving result: " << doc.save_file("save_file_output.xml") << std::endl;
```

</div>

</div>

</div>

<div class="sect2">

<span id="saving.stream"></span>

### <a href="#saving.stream" class="anchor"></a><a href="#saving.stream" class="link">7.2. Saving document to C++ IOstreams</a>

<div id="xml_document::save_stream" class="paragraph">

To enhance interoperability pugixml provides functions for saving document to any object which implements C++ `std::ostream` interface. This allows you to save documents to any standard C++ stream (i.e. file stream) or any third-party compliant implementation (i.e. Boost Iostreams). Most notably, this allows for easy debug output, since you can use `std::cout` stream as saving target. There are two functions, one works with narrow character streams, another handles wide character ones:

</div>

<div class="listingblock">

<div class="content">

``` cpp
void xml_document::save(std::ostream& stream, const char_t* indent = "\t", unsigned int flags = format_default, xml_encoding encoding = encoding_auto) const;
void xml_document::save(std::wostream& stream, const char_t* indent = "\t", unsigned int flags = format_default) const;
```

</div>

</div>

<div class="paragraph">

`save` with `std::ostream` argument saves the document to the stream in the same way as `save_file` (i.e. with requested header and with encoding conversions). On the other hand, `save` with `std::wostream` argument saves the document to the wide stream with [encoding_wchar](#encoding_wchar) encoding. Because of this, using `save` with wide character streams requires careful (usually platform-specific) stream setup (i.e. using the `imbue` function). Generally use of wide streams is discouraged, however it provides you with the ability to save documents to non-Unicode encodings, i.e. you can save Shift-JIS encoded data if you set the correct locale.

</div>

<div id="xml_writer_stream" class="paragraph">

Calling `save` with stream target is equivalent to creating an `xml_writer_stream` object with stream as the only constructor argument and then calling `save`; see [Saving document via writer interface](#saving.writer) for writer interface details. When using `xml_writer_stream` with wide-character streams, you must pass `encoding_wchar` explicitly, as the wide writer expects wide-character data.

</div>

<div class="paragraph">

This is a simple example of saving XML document to standard output ([samples/save_stream.cpp](samples/save_stream.cpp)):

</div>

<div class="listingblock">

<div class="content">

``` cpp
// save document to standard output
std::cout << "Document:\n";
doc.save(std::cout);
```

</div>

</div>

</div>

<div class="sect2">

<span id="saving.writer"></span>

### <a href="#saving.writer" class="anchor"></a><a href="#saving.writer" class="link">7.3. Saving document via writer interface</a>

<div class="paragraph">

<span id="xml_document::save"></span><span id="xml_writer"></span><span id="xml_writer::write"></span> All of the above saving functions are implemented in terms of writer interface. This is a simple interface with a single function, which is called several times during output process with chunks of document data as input:

</div>

<div class="listingblock">

<div class="content">

``` cpp
class xml_writer
{
public:
    virtual void write(const void* data, size_t size) = 0;
};

void xml_document::save(xml_writer& writer, const char_t* indent = "\t", unsigned int flags = format_default, xml_encoding encoding = encoding_auto) const;
```

</div>

</div>

<div class="paragraph">

In order to output the document via some custom transport, for example sockets, you should create an object which implements `xml_writer` interface and pass it to `save` function. `xml_writer::write` function is called with a buffer as an input, where `data` points to buffer start, and `size` is equal to the buffer size in bytes. `write` implementation must write the buffer to the transport; it can not save the passed buffer pointer, as the buffer contents will change after `write` returns. The buffer contains the chunk of document data in the desired encoding.

</div>

<div class="paragraph">

`write` function is called with relatively large blocks (size is usually several kilobytes, except for the last block that may be small), so there is often no need for additional buffering in the implementation.

</div>

<div class="paragraph">

This is a simple example of custom writer for saving document data to STL string ([samples/save_custom_writer.cpp](samples/save_custom_writer.cpp)); read the sample code for more complex examples:

</div>

<div class="listingblock">

<div class="content">

``` cpp
struct xml_string_writer: pugi::xml_writer
{
    std::string result;

    virtual void write(const void* data, size_t size)
    {
        result.append(static_cast<const char*>(data), size);
    }
};
```

</div>

</div>

</div>

<div class="sect2">

<span id="saving.subtree"></span>

### <a href="#saving.subtree" class="anchor"></a><a href="#saving.subtree" class="link">7.4. Saving a single subtree</a>

<div class="paragraph">

<span id="xml_node::print"></span><span id="xml_node::print_stream"></span> While the previously described functions save the whole document to the destination, it is easy to save a single subtree. The following functions are provided:

</div>

<div class="listingblock">

<div class="content">

``` cpp
void xml_node::print(std::ostream& os, const char_t* indent = "\t", unsigned int flags = format_default, xml_encoding encoding = encoding_auto, unsigned int depth = 0) const;
void xml_node::print(std::wostream& os, const char_t* indent = "\t", unsigned int flags = format_default, unsigned int depth = 0) const;
void xml_node::print(xml_writer& writer, const char_t* indent = "\t", unsigned int flags = format_default, xml_encoding encoding = encoding_auto, unsigned int depth = 0) const;
```

</div>

</div>

<div class="paragraph">

These functions have the same arguments with the same meaning as the corresponding `xml_document::save` functions, and allow you to save the subtree to either a C++ IOstream or to any object that implements `xml_writer` interface.

</div>

<div class="paragraph">

Saving a subtree differs from saving the whole document: the process behaves as if [format_write_bom](#format_write_bom) is off, and [format_no_declaration](#format_no_declaration) is on, even if actual values of the flags are different. This means that BOM is not written to the destination, and document declaration is only written if it is the node itself or is one of node’s children. Note that this also holds if you’re saving a document; this example ([samples/save_subtree.cpp](samples/save_subtree.cpp)) illustrates the difference:

</div>

<div class="listingblock">

<div class="content">

``` cpp
// get a test document
pugi::xml_document doc;
doc.load_string("<foo bar='baz'><call>hey</call></foo>");

// print document to standard output (prints <?xml version="1.0"?><foo bar="baz"><call>hey</call></foo>)
doc.save(std::cout, "", pugi::format_raw);
std::cout << std::endl;

// print document to standard output as a regular node (prints <foo bar="baz"><call>hey</call></foo>)
doc.print(std::cout, "", pugi::format_raw);
std::cout << std::endl;

// print a subtree to standard output (prints <call>hey</call>)
doc.child("foo").child("call").print(std::cout, "", pugi::format_raw);
std::cout << std::endl;
```

</div>

</div>

</div>

<div class="sect2">

<span id="saving.options"></span>

### <a href="#saving.options" class="anchor"></a><a href="#saving.options" class="link">7.5. Output options</a>

<div class="paragraph">

All saving functions accept the optional parameter `flags`. This is a bitmask that customizes the output format; you can select the way the document nodes are printed and select the needed additional information that is output before the document contents.

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

- <span id="format_indent"></span>`format_indent` determines if all nodes should be indented with the indentation string (this is an additional parameter for all saving functions, and is `"\t"` by default). If this flag is on, the indentation string is printed several times before every node, where the amount of indentation depends on the node’s depth relative to the output subtree. This flag has no effect if [format_raw](#format_raw) is enabled. This flag is **on** by default.

- <span id="format_indent_attributes"></span>`format_indent_attributes` determines if all attributes should be printed on a new line, indented with the indentation string according to the attribute’s depth. This flag implies [format_indent](#format_indent). This flag has no effect if [format_raw](#format_raw) is enabled. This flag is **off** by default.

- <span id="format_raw"></span>`format_raw` switches between formatted and raw output. If this flag is on, the nodes are not indented in any way, and also no newlines that are not part of document text are printed. Raw mode can be used for serialization where the result is not intended to be read by humans; also it can be useful if the document was parsed with [parse_ws_pcdata](#parse_ws_pcdata) flag, to preserve the original document formatting as much as possible. This flag is **off** by default.

- <span id="format_no_escapes"></span>`format_no_escapes` disables output escaping for attribute values and PCDATA contents. If this flag is off, special symbols (`"`, `&`, `<`, `>`) and all non-printable characters (those with codepoint values less than 32) are converted to XML escape sequences (i.e. `&amp;`) during output. If this flag is on, no text processing is performed; therefore, output XML can be malformed if output contents contains invalid symbols (i.e. having a stray `<` in the PCDATA will make the output malformed). This flag is **off** by default.

- <span id="format_no_empty_element_tags"></span>`format_no_empty_element_tags` determines if start/end tags should be output instead of empty element tags for empty elements (that is, elements with no children). This flag is **off** by default.

- <span id="format_skip_control_chars"></span>`format_skip_control_chars` enables skipping characters belonging to range \[0; 32) instead of "&#xNN;" encoding. This flag is **off** by default.

- <span id="format_attribute_single_quote"></span>`format_attribute_single_quote` enables using single quotes `'` instead of double quotes `"` for enclosing attribute values. This flag is **off** by default.

</div>

<div class="paragraph">

These flags control the additional output information:

</div>

<div class="ulist">

- <span id="format_no_declaration"></span>`format_no_declaration` disables default node declaration output. By default, if the document is saved via `save` or `save_file` function, and it does not have any document declaration, a default declaration is output before the document contents. Enabling this flag disables this declaration. This flag has no effect in `xml_node::print` functions: they never output the default declaration. This flag is **off** by default.

- <span id="format_write_bom"></span>`format_write_bom` enables Byte Order Mark (BOM) output. By default, no BOM is output, so in case of non UTF-8 encodings the resulting document’s encoding may not be recognized by some parsers and text editors, if they do not implement sophisticated encoding detection. Enabling this flag adds an encoding-specific BOM to the output. This flag has no effect in `xml_node::print` functions: they never output the BOM. This flag is **off** by default.

- <span id="format_save_file_text"></span>`format_save_file_text` changes the file mode when using `save_file` function. By default, file is opened in binary mode, which means that the output file will contain platform-independent newline `\n` (ASCII 10). If this flag is on, file is opened in text mode, which on some systems changes the newline format (i.e. on Windows you can use this flag to output XML documents with `\r\n` (ASCII 13 10) newlines). This flag is **off** by default.

</div>

<div class="paragraph">

Additionally, there is one predefined option mask:

</div>

<div class="ulist">

- <span id="format_default"></span>`format_default` is the default set of flags, i.e. it has all options set to their default values. It sets formatted output with indentation, without BOM and with default node declaration, if necessary.

</div>

<div class="paragraph">

This is an example that shows the outputs of different output options ([samples/save_options.cpp](samples/save_options.cpp)):

</div>

<div class="listingblock">

<div class="content">

``` cpp
// get a test document
pugi::xml_document doc;
doc.load_string("<foo bar='baz'><call>hey</call></foo>");

// default options; prints
// <?xml version="1.0"?>
// <foo bar="baz">
//         <call>hey</call>
// </foo>
doc.save(std::cout);
std::cout << std::endl;

// default options with custom indentation string; prints
// <?xml version="1.0"?>
// <foo bar="baz">
// --<call>hey</call>
// </foo>
doc.save(std::cout, "--");
std::cout << std::endl;

// default options without indentation; prints
// <?xml version="1.0"?>
// <foo bar="baz">
// <call>hey</call>
// </foo>
doc.save(std::cout, "\t", pugi::format_default & ~pugi::format_indent); // can also pass "" instead of indentation string for the same effect
std::cout << std::endl;

// raw output; prints
// <?xml version="1.0"?><foo bar="baz"><call>hey</call></foo>
doc.save(std::cout, "\t", pugi::format_raw);
std::cout << std::endl << std::endl;

// raw output without declaration; prints
// <foo bar="baz"><call>hey</call></foo>
doc.save(std::cout, "\t", pugi::format_raw | pugi::format_no_declaration);
std::cout << std::endl;
```

</div>

</div>

</div>

<div class="sect2">

<span id="saving.encoding"></span>

### <a href="#saving.encoding" class="anchor"></a><a href="#saving.encoding" class="link">7.6. Encodings</a>

<div class="paragraph">

pugixml supports all popular Unicode encodings (UTF-8, UTF-16 (big and little endian), UTF-32 (big and little endian); UCS-2 is naturally supported since it’s a strict subset of UTF-16) and handles all encoding conversions during output. The output encoding is set via the `encoding` parameter of saving functions, which is of type `xml_encoding`. The possible values for the encoding are documented in [Encodings](#loading.encoding); the only flag that has a different meaning is `encoding_auto`.

</div>

<div class="paragraph">

While all other flags set the exact encoding, `encoding_auto` is meant for automatic encoding detection. The automatic detection does not make sense for output encoding, since there is usually nothing to infer the actual encoding from, so here `encoding_auto` means UTF-8 encoding, which is the most popular encoding for XML data storage. This is also the default value of output encoding; specify another value if you do not want UTF-8 encoded output.

</div>

<div class="paragraph">

Also note that wide stream saving functions do not have `encoding` argument and always assume [encoding_wchar](#encoding_wchar) encoding.

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
<td class="content">The current behavior for Unicode conversion is to skip all invalid UTF sequences during conversion. This behavior should not be relied upon; if your node/attribute names do not contain any valid UTF sequences, they may be output as if they are empty, which will result in malformed XML document.</td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<span id="saving.declaration"></span>

### <a href="#saving.declaration" class="anchor"></a><a href="#saving.declaration" class="link">7.7. Customizing document declaration</a>

<div class="paragraph">

When you are saving the document using `xml_document::save()` or `xml_document::save_file()`, a default XML document declaration is output, if `format_no_declaration` is not specified and if the document does not have a declaration node. However, the default declaration is not customizable. If you want to customize the declaration output, you need to create the declaration node yourself.

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
<td class="content">By default the declaration node is not added to the document during parsing. If you just need to preserve the original declaration node, you have to add the flag <a href="#parse_declaration">parse_declaration</a> to the parsing flags; the resulting document will contain the original declaration node, which will be output during saving.</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

Declaration node is a node with type [node_declaration](#node_declaration); it behaves like an element node in that it has attributes with values (but it does not have child nodes). Therefore setting custom version, encoding or standalone declaration involves adding attributes and setting attribute values.

</div>

<div class="paragraph">

This is an example that shows how to create a custom declaration node ([samples/save_declaration.cpp](samples/save_declaration.cpp)):

</div>

<div class="listingblock">

<div class="content">

``` cpp
// get a test document
pugi::xml_document doc;
doc.load_string("<foo bar='baz'><call>hey</call></foo>");

// add a custom declaration node
pugi::xml_node decl = doc.prepend_child(pugi::node_declaration);
decl.append_attribute("version") = "1.0";
decl.append_attribute("encoding") = "UTF-8";
decl.append_attribute("standalone") = "no";

// <?xml version="1.0" encoding="UTF-8" standalone="no"?>
// <foo bar="baz">
//         <call>hey</call>
// </foo>
doc.save(std::cout);
std::cout << std::endl;
```

</div>

</div>

</div>

</div>

</div>
