<div class="sect1">

<span id="changes"></span>

## <a href="#changes" class="anchor"></a><a href="#changes" class="link">9. Changelog</a>

<div class="sectionbody">

<div class="sect2">

<span id="v1.16"></span>

### <a href="#v1.16" class="anchor"></a><a href="#v1.16" class="link">v1.16 <sup>2026-06-16</sup></a>

<div class="paragraph">

Anniversary release (pugixml turns 20 this year!). Changes:

</div>

<div class="ulist">

- Behavior changes:

  <div class="olist arabic">

  1.  Elements that have a single empty PCDATA child are now printed as empty element tags (unless `format_no_empty_element_tags` is used)

  </div>

- Improvements:

  <div class="olist arabic">

  1.  `PUGIXML_CHARCONV_FLOAT` option can be enabled to switch floating point conversions to `<charconv>`; this requires C++17, makes the conversions locale-independent and can improve performance

  2.  Add `xml_node::ensure_child` and `xml_node::ensure_attribute` that return the child/attribute with the specified name, adding one if it does not exist

  3.  Improve performance of searching for nodes and attributes by name

  4.  Loading a document from an empty buffer no longer performs memory allocations

  </div>

- XPath improvements:

  <div class="olist arabic">

  1.  Improve performance of queries that evaluate or compare attribute values, like `@attr > 5`

  2.  Improve performance of queries that select nodes and attributes by name

  </div>

- Bug fixes:

  <div class="olist arabic">

  1.  Fix stack overflow when removing subtrees with extremely deep nesting

  2.  Fix integer overflows that could lead to crashes when loading very large (1+ GB) documents on 32-bit platforms in `PUGIXML_WCHAR_MODE`

  3.  Fix null pointer dereference when copying `xpath_variable_set` objects that contain string variables with unassigned values

  </div>

- CMake improvements:

  <div class="olist arabic">

  1.  Apple frameworks built with `PUGIXML_BUILD_APPLE_FRAMEWORK` now include framework headers

  2.  `PUGIXML_INSTALL_SOURCE` option can be used to install `pugixml.cpp` (useful for header-only mode)

  </div>

- Compatibility improvements:

  <div class="olist arabic">

  1.  Add project files and NuGet packages for Visual Studio 2026

  2.  Fix compatibility with C++20 modules when including `pugixml.hpp` in the global module fragment

  3.  Fix clang/gcc warnings `-Wextra-semi-stmt`, `-Wsign-conversion`, `-Wuninitialized` (GCC16)

  4.  Fix compilation for Embarcadero C++ XE5

  5.  Work around several static analysis false positives

  </div>

</div>

</div>

<div class="sect2">

<span id="v1.15"></span>

### <a href="#v1.15" class="anchor"></a><a href="#v1.15" class="link">v1.15 <sup>2025-01-10</sup></a>

<div class="paragraph">

Maintenance release. Changes:

</div>

<div class="ulist">

- Improvements:

  <div class="olist arabic">

  1.  Many `xml_attribute::` and `xml_node::` functions now transparently support `std::string_view` and `std::string` when C++17 support is detected.

  </div>

- CMake improvements:

  <div class="olist arabic">

  1.  Improve `pkg-config` file generation for NixOS

  2.  `PUGIXML_BUILD_APPLE_FRAMEWORK` CMake option can be used to build pugixml as `.xcframework`

  3.  `PUGIXML_INSTALL` CMake option can be used to disable installation targets

  </div>

- Compatibility improvements:

  <div class="olist arabic">

  1.  Fix clang/gcc warnings `-Wzero-as-null-pointer-constant`, `-Wuseless-cast`, `-Wshorten-64-to-32`

  2.  Fix unreferenced function warnings in `PUGIXML_NO_STL` configuration

  3.  Fix CMake 3.31 deprecation warnings

  4.  Stop using deprecated `throw()` when `noexcept` is available

  </div>

</div>

</div>

<div class="sect2">

<span id="v1.14"></span>

### <a href="#v1.14" class="anchor"></a><a href="#v1.14" class="link">v1.14 <sup>2023-10-01</sup></a>

<div class="paragraph">

Maintenance release. Changes:

</div>

<div class="ulist">

- Improvements:

  <div class="olist arabic">

  1.  `xml_attribute::set_name` and `xml_node::set_name` now have overloads that accept pointer to non-null-terminated string and size

  2.  Implement `parse_merge_pcdata` parsing mode in which PCDATA contents is merged into a single node when original document had comments that were skipped during parsing

  3.  `xml_document::load_file` now returns a more consistent error status when given a path to a folder

  </div>

- Bug fixes:

  <div class="olist arabic">

  1.  Fix assertion in XPath number→string conversion when using non-English locales

  2.  Fix PUGIXML_STATIC_CRT CMake option to correctly select static CRT when using MSVC and recent CMake

  </div>

- Compatibility improvements:

  <div class="olist arabic">

  1.  Fix GCC 2.95/3.3 builds

  2.  Fix CMake 3.27 deprecation warnings

  3.  Fix XCode 14 sprintf deprecation warning when compiling in C++03 mode

  4.  Fix clang/gcc warnings `-Wweak-vtables`, `-Wreserved-macro-identifier`

  </div>

</div>

</div>

<div class="sect2">

<span id="v1.13"></span>

### <a href="#v1.13" class="anchor"></a><a href="#v1.13" class="link">v1.13 <sup>2022-11-01</sup></a>

<div class="paragraph">

Maintenance release. Changes:

</div>

<div class="ulist">

- Improvements:

  <div class="olist arabic">

  1.  `xml_attribute::set_value`, `xml_node::set_value` and `xml_text::set` now have overloads that accept pointer to non-null-terminated string and size

  2.  Improve performance of tree traversal when using compact mode (`PUGIXML_COMPACT`)

  </div>

- Bug fixes:

  <div class="olist arabic">

  1.  Fix error handling in `xml_document::save_file` that could result in the function succeeding while running out of disk space

  2.  Fix memory leak during error handling of some out-of-memory conditions during `xml_document::load`

  </div>

- Compatibility improvements:

  <div class="olist arabic">

  1.  Fix exported symbols in CMake DLL builds when using CMake

  2.  Fix exported symbols in CMake shared object builds when using -fvisibility=hidden

  </div>

</div>

</div>

<div class="sect2">

<span id="v1.12"></span>

### <a href="#v1.12" class="anchor"></a><a href="#v1.12" class="link">v1.12 <sup>2022-02-09</sup></a>

<div class="paragraph">

Maintenance release. Changes:

</div>

<div class="ulist">

- Bug fixes:

  <div class="olist arabic">

  1.  Fix a bug in xml_document move construction when the source of the move is empty

  2.  Fix const-correctness issues with iterator objects to support C++20 ranges

  </div>

- XPath improvements:

  <div class="olist arabic">

  1.  Improved detection of overly complex queries that may result in stack overflow during parsing

  </div>

- Compatibility improvements:

  <div class="olist arabic">

  1.  Fix Cygwin support for DLL builds

  2.  Fix Windows CE support

  3.  Add NuGet builds and project files for VS2022

  </div>

- Build system changes

  <div class="olist arabic">

  1.  All CMake options now have the prefix `PUGIXML_`. This may require changing dependent build configurations.

  2.  Many build settings are now exposed via CMake settings, most notably `PUGIXML_COMPACT` and `PUGIXML_WCHAR_MODE` can be set without changing `pugiconfig.hpp`

  </div>

</div>

</div>

<div class="sect2">

<span id="v1.11"></span>

### <a href="#v1.11" class="anchor"></a><a href="#v1.11" class="link">v1.11 <sup>2020-11-26</sup></a>

<div class="paragraph">

Maintenance release. Changes:

</div>

<div class="ulist">

- New features:

  <div class="olist arabic">

  1.  Add xml_node::remove_attributes and xml_node::remove_children

  2.  Add a way to customize floating point precision via xml_attribute::set and xml_text::set overloads

  </div>

- XPath improvements:

  <div class="olist arabic">

  1.  XPath parser now limits recursion depth which prevents stack overflow on malicious queries

  </div>

- Compatibility improvements:

  <div class="olist arabic">

  1.  Fix Visual Studio warnings when built using clang-cl compiler

  2.  Fix Wconversion warnings in gcc

  3.  Fix Wzero-as-null-pointer-constant warnings in pugixml.hpp

  4.  Work around several static analysis false positives

  </div>

- Build system changes

  <div class="olist arabic">

  1.  The CMake package for pugixml now provides a `pugixml::pugixml` target rather than a `pugixml` target. A compatibility `pugixml` target is provided if at least version 1.11 is not requested.

  </div>

</div>

</div>

<div class="sect2">

<span id="v1.10"></span>

### <a href="#v1.10" class="anchor"></a><a href="#v1.10" class="link">v1.10 <sup>2019-09-15</sup></a>

<div class="paragraph">

Maintenance release. Changes:

</div>

<div class="ulist">

- Behavior changes:

  <div class="olist arabic">

  1.  Tab characters (ASCII 9) in attribute values are now encoded as '&amp;#9;' to survive roundtripping

  2.  `>` characters are no longer escaped in attribute values

  </div>

- New features:

  <div class="olist arabic">

  1.  Add Visual Studio .natvis files to improve debugging experience

  2.  CMake improvements (USE_POSTFIX and BUILD_SHARED_AND_STATIC_LIBS options for building multiple versions and pkg-config tweaks)

  3.  Add format_skip_control_chars formatting flag to skip non-printable ASCII characters that are invalid to use in well-formed XML files

  4.  Add format_attribute_single_quote formatting flag to use single quotes for attribute values instead of default double quotes.

  </div>

- XPath improvements:

  <div class="olist arabic">

  1.  XPath union now results in a stable order that doesn’t depend on memory allocations; crucially, this may require sorting the output of XPath query operation if you rely on the document-ordered traversal

  2.  Improve performance of XPath union operation, making it ~2x faster

  </div>

- Compatibility improvements:

  <div class="olist arabic">

  1.  Fix Visual Studio warnings when built in a DLL configuration

  2.  Fix static analysis false positives in Coverity and clang

  3.  Fix Wdouble-promotion warnings in gcc

  4.  Add Visual Studio 2019 support for NuGet packages

  </div>

</div>

</div>

<div class="sect2">

<span id="v1.9"></span>

### <a href="#v1.9" class="anchor"></a><a href="#v1.9" class="link">v1.9 <sup>2018-04-04</sup></a>

<div class="paragraph">

Maintenance release. Changes:

</div>

<div class="ulist">

- Specification changes:

  <div class="olist arabic">

  1.  `xml_document::load(const char*)` (deprecated in 1.5) now has `deprecated` attribute; use `xml_document::load_string` instead

  2.  `xml_node::select_single_node` (deprecated in 1.5) now has `deprecated` attribute; use `xml_node::select_node` instead

  </div>

- New features:

  <div class="olist arabic">

  1.  Add move semantics support for xml_document and improve move semantics support for other objects

  2.  CMake build now exports include directories

  3.  CMake build with BUILD_SHARED_LIBS=ON now uses dllexport attribute for MSVC

  </div>

- XPath improvements:

  <div class="olist arabic">

  1.  Rework parser/evaluator to not rely on exceptional control flow; longjmp is no longer used when exceptions are disabled

  2.  Improve error messages for certain invalid expressions such as `.[1]` or `(1`

  3.  Minor performance improvements

  </div>

- Compatibility improvements:

  <div class="olist arabic">

  1.  Fix Texas Instruments compiler warnings

  2.  Fix compilation issues with limits.h for some versions of gcc

  3.  Fix compilation issues with Clang/C2

  4.  Fix implicit fallthrough warnings in gcc 7

  5.  Fix unknown attribute directive warnings in gcc 8

  6.  Fix cray++ compiler errors

  7.  Fix unsigned integer overflow errors with -fsanitize=integer

  8.  Fix undefined behavior sanitizer issues in compact mode

  </div>

</div>

</div>

<div class="sect2">

<span id="v1.8"></span>

### <a href="#v1.8" class="anchor"></a><a href="#v1.8" class="link">v1.8 <sup>2016-11-24</sup></a>

<div class="paragraph">

Maintenance release. Changes:

</div>

<div class="ulist">

- Specification changes:

  <div class="olist arabic">

  1.  When printing empty elements, a space is no longer added before / in format_raw mode

  </div>

- New features:

  <div class="olist arabic">

  1.  Added parse_embed_pcdata parsing mode in which PCDATA value is stored in the element node if possible (significantly reducing memory consumption for some documents)

  2.  Added auto-detection support for Latin-1 (ISO-8859-1) encoding during parsing

  3.  Added format_no_empty_element_tags formatting flag that outputs start/end tags instead of empty element tags for empty elements

  </div>

- Performance improvements:

  <div class="olist arabic">

  1.  Minor memory allocation improvements (yielding up to 1% memory savings in some cases)

  </div>

- Compatibility improvements:

  <div class="olist arabic">

  1.  Fixed compilation issues for Borland C++ 5.4

  2.  Fixed compilation issues for some distributions of MinGW 3.8

  3.  Fixed various Clang/GCC warnings

  4.  Enabled move semantics support for XPath objects for MSVC 2010 and above

  </div>

</div>

</div>

<div class="sect2">

<span id="v1.7"></span>

### <a href="#v1.7" class="anchor"></a><a href="#v1.7" class="link">v1.7 <sup>2015-10-19</sup></a>

<div class="paragraph">

Major release, featuring performance and memory improvements along with some new features. Changes:

</div>

<div class="ulist">

- Compact mode:

  <div class="olist arabic">

  1.  Introduced a new tree storage mode that takes significantly less memory (2-5x smaller DOM) at some performance cost.

  2.  The mode can be enabled using `PUGIXML_COMPACT` define.

  </div>

- New integer parsing/formatting implementation:

  <div class="olist arabic">

  1.  Functions that convert from and to integers (e.g. `as_int`/`set_value`) do not rely on CRT any more.

  2.  New implementation is 3-5x faster and is always correct wrt overflow or underflow. This is a behavior change - where previously `as_uint()` would return UINT_MAX on a value "-1", it now returns 0.

  </div>

- New features:

  <div class="olist arabic">

  1.  XPath objects (`xpath_query`, `xpath_node_set`, `xpath_variable_set`) are now movable if your compiler supports C++11. Additionally, `xpath_variable_set` is copyable.

  2.  Added `format_indent_attributes` that makes the resulting XML friendlier to line diff/merge tools.

  3.  Added a variant of `xml_node::attribute` function with a hint that can improve lookup performance.

  4.  Custom allocation functions are now allowed (but not required) to throw instead of returning a null pointer.

  </div>

- Bug fixes:

  <div class="olist arabic">

  1.  Fix Clang 3.7 crashes in out-of-memory cases (C++ DR 1748)

  2.  Fix XPath crashes on SPARC64 (and other 32-bit architectures where doubles have to be aligned to 8 bytes)

  3.  Fix xpath_node_set assignment to provide strong exception guarantee

  4.  Fix saving for custom xml_writer implementations that can throw from write()

  </div>

</div>

</div>

<div class="sect2">

<span id="v1.6"></span>

### <a href="#v1.6" class="anchor"></a><a href="#v1.6" class="link">v1.6 <sup>2015-04-10</sup></a>

<div class="paragraph">

Maintenance release. Changes:

</div>

<div class="ulist">

- Specification changes:

  <div class="olist arabic">

  1.  Attribute/text values now use more digits when printing floating point numbers to guarantee round-tripping.

  2.  Text nodes no longer get extra surrounding whitespace when pretty-printing nodes with mixed contents

  </div>

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed translate and normalize-space XPath functions to no longer return internal NUL characters

  2.  Fixed buffer overrun on malformed comments inside DOCTYPE sections

  3.  DOCTYPE parsing can no longer run out of stack space on malformed inputs (XML parsing is now using bounded stack space)

  4.  Adjusted processing instruction output to avoid malformed documents if the PI value contains `?>`

  </div>

</div>

</div>

<div class="sect2">

<span id="v1.5"></span>

### <a href="#v1.5" class="anchor"></a><a href="#v1.5" class="link">v1.5 <sup>2014-11-27</sup></a>

<div class="paragraph">

Major release, featuring a lot of performance improvements and some new features.

</div>

<div class="ulist">

- Specification changes:

  <div class="olist arabic">

  1.  `xml_document::load(const char_t*)` was renamed to `load_string`; the old method is still available and will be deprecated in a future release

  2.  `xml_node::select_single_node` was renamed to `select_node`; the old method is still available and will be deprecated in a future release.

  </div>

- New features:

  <div class="olist arabic">

  1.  Added `xml_node::append_move` and other functions for moving nodes within a document

  2.  Added `xpath_query::evaluate_node` for evaluating queries with a single node as a result

  </div>

- Performance improvements:

  <div class="olist arabic">

  1.  Optimized XML parsing (10-40% faster with clang/gcc, up to 10% faster with MSVC)

  2.  Optimized memory consumption when copying nodes in the same document (string contents is now shared)

  3.  Optimized node copying (10% faster for cross-document copies, 3x faster for inter-document copies; also it now consumes a constant amount of stack space)

  4.  Optimized node output (60% faster; also it now consumes a constant amount of stack space)

  5.  Optimized XPath allocation (query evaluation now results in fewer temporary allocations)

  6.  Optimized XPath sorting (node set sorting is 2-3x faster in some cases)

  7.  Optimized XPath evaluation (XPathMark suite is 100x faster; some commonly used queries are 3-4x faster)

  </div>

- Compatibility improvements:

  <div class="olist arabic">

  1.  Fixed `xml_node::offset_debug` for corner cases

  2.  Fixed undefined behavior while calling memcpy in some cases

  3.  Fixed MSVC 2015 compilation warnings

  4.  Fixed `contrib/foreach.hpp` for Boost 1.56.0

  </div>

- Bug fixes

  <div class="olist arabic">

  1.  Adjusted comment output to avoid malformed documents if the comment value contains `--`

  2.  Fix XPath sorting for documents that were constructed using append_buffer

  3.  Fix `load_file` for wide-character paths with non-ASCII characters in MinGW with C++11 mode enabled

  </div>

</div>

</div>

<div class="sect2">

<span id="v1.4"></span>

### <a href="#v1.4" class="anchor"></a><a href="#v1.4" class="link">v1.4 <sup>2014-02-27</sup></a>

<div class="paragraph">

Major release, featuring various new features, bug fixes and compatibility improvements.

</div>

<div class="ulist">

- Specification changes:

  <div class="olist arabic">

  1.  Documents without element nodes are now rejected with `status_no_document_element` error, unless `parse_fragment` option is used

  </div>

- New features:

  <div class="olist arabic">

  1.  Added XML fragment parsing (`parse_fragment` flag)

  2.  Added PCDATA whitespace trimming (`parse_trim_pcdata` flag)

  3.  Added long long support for `xml_attribute` and `xml_text` (`as_llong`, `as_ullong` and `set_value`/`set` overloads)

  4.  Added hexadecimal integer parsing support for `as_int`/`as_uint`/`as_llong`/`as_ullong`

  5.  Added `xml_node::append_buffer` to improve performance of assembling documents from fragments

  6.  `xml_named_node_iterator` is now bidirectional

  7.  Reduced XPath stack consumption during compilation and evaluation (useful for embedded systems)

  </div>

- Compatibility improvements:

  <div class="olist arabic">

  1.  Improved support for platforms without wchar_t support

  2.  Fixed several false positives in clang static analysis

  3.  Fixed several compilation warnings for various GCC versions

  </div>

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed undefined pointer arithmetic in XPath implementation

  2.  Fixed non-seekable iostream support for certain stream types, i.e. Boost `file_source` with pipe input

  3.  Fixed `xpath_query::return_type` for some expressions

  4.  Fixed dllexport issues with `xml_named_node_iterator`

  5.  Fixed `find_child_by_attribute` assertion for attributes with null name/value

  </div>

</div>

</div>

<div class="sect2">

<span id="v1.2"></span>

### <a href="#v1.2" class="anchor"></a><a href="#v1.2" class="link">v1.2 <sup>2012-05-01</sup></a>

<div class="paragraph">

Major release, featuring header-only mode, various interface enhancements (i.e. PCDATA manipulation and C++11 iteration), many other features and compatibility improvements.

</div>

<div class="ulist">

- New features:

  <div class="olist arabic">

  1.  Added `xml_text` helper class for working with PCDATA/CDATA contents of an element node

  2.  Added optional header-only mode (controlled by `PUGIXML_HEADER_ONLY` define)

  3.  Added `xml_node::children()` and `xml_node::attributes()` for C++11 ranged for loop or `BOOST_FOREACH`

  4.  Added support for Latin-1 (ISO-8859-1) encoding conversion during loading and saving

  5.  Added custom default values for `xml_attribute::as_*` (they are returned if the attribute does not exist)

  6.  Added `parse_ws_pcdata_single` flag for preserving whitespace-only PCDATA in case it’s the only child

  7.  Added `format_save_file_text` for `xml_document::save_file` to open files as text instead of binary (changes newlines on Windows)

  8.  Added `format_no_escapes` flag to disable special symbol escaping (complements `~parse_escapes`)

  9.  Added support for loading document from streams that do not support seeking

  10. Added `PUGIXML_MEMORY_*` constants for tweaking allocation behavior (useful for embedded systems)

  11. Added `PUGIXML_VERSION` preprocessor define

  </div>

- Compatibility improvements:

  <div class="olist arabic">

  1.  Parser does not require setjmp support (improves compatibility with some embedded platforms, enables `/clr:pure` compilation)

  2.  STL forward declarations are no longer used (fixes SunCC/RWSTL compilation, fixes clang compilation in C++11 mode)

  3.  Fixed AirPlay SDK, Android, Windows Mobile (WinCE) and C++/CLI compilation

  4.  Fixed several compilation warnings for various GCC versions, Intel C++ compiler and Clang

  </div>

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed unsafe bool conversion to avoid problems on C++/CLI

  2.  Iterator dereference operator is const now (fixes Boost `filter_iterator` support)

  3.  `xml_document::save_file` now checks for file I/O errors during saving

  </div>

</div>

</div>

<div class="sect2">

<span id="v1.0"></span>

### <a href="#v1.0" class="anchor"></a><a href="#v1.0" class="link">v1.0 <sup>2010-11-01</sup></a>

<div class="paragraph">

Major release, featuring many XPath enhancements, wide character filename support, miscellaneous performance improvements, bug fixes and more.

</div>

<div class="ulist">

- XPath:

  <div class="olist arabic">

  1.  XPath implementation is moved to `pugixml.cpp` (which is the only source file now); use `PUGIXML_NO_XPATH` if you want to disable XPath to reduce code size

  2.  XPath is now supported without exceptions (`PUGIXML_NO_EXCEPTIONS`); the error handling mechanism depends on the presence of exception support

  3.  XPath is now supported without STL (`PUGIXML_NO_STL`)

  4.  Introduced variable support

  5.  Introduced new `xpath_query::evaluate_string`, which works without STL

  6.  Introduced new `xpath_node_set` constructor (from an iterator range)

  7.  Evaluation function now accept attribute context nodes

  8.  All internal allocations use custom allocation functions

  9.  Improved error reporting; now a last parsed offset is returned together with the parsing error

  </div>

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed memory leak for loading from streams with stream exceptions turned on

  2.  Fixed custom deallocation function calling with null pointer in one case

  3.  Fixed missing attributes for iterator category functions; all functions/classes can now be DLL-exported

  4.  Worked around Digital Mars compiler bug, which lead to minor read overfetches in several functions

  5.  `load_file` now works with 2+ Gb files in MSVC/MinGW

  6.  XPath: fixed memory leaks for incorrect queries

  7.  XPath: fixed `xpath_node()` attribute constructor with empty attribute argument

  8.  XPath: fixed `lang()` function for non-ASCII arguments

  </div>

- Specification changes:

  <div class="olist arabic">

  1.  CDATA nodes containing `]]>` are printed as several nodes; while this changes the internal structure, this is the only way to escape CDATA contents

  2.  Memory allocation errors during parsing now preserve last parsed offset (to give an idea about parsing progress)

  3.  If an element node has the only child, and it is of CDATA type, then the extra indentation is omitted (previously this behavior only held for PCDATA children)

  </div>

- Additional functionality:

  <div class="olist arabic">

  1.  Added `xml_parse_result` default constructor

  2.  Added `xml_document::load_file` and `xml_document::save_file` with wide character paths

  3.  Added `as_utf8` and `as_wide` overloads for `std::wstring`/`std::string` arguments

  4.  Added DOCTYPE node type (`node_doctype`) and a special parse flag, `parse_doctype`, to add such nodes to the document during parsing

  5.  Added `parse_full` parse flag mask, which extends `parse_default` with all node type parsing flags except `parse_ws_pcdata`

  6.  Added `xml_node::hash_value()` and `xml_attribute::hash_value()` functions for use in hash-based containers

  7.  Added `internal_object()` and additional constructor for both `xml_node` and `xml_attribute` for easier marshalling (useful for language bindings)

  8.  Added `xml_document::document_element()` function

  9.  Added `xml_node::prepend_attribute`, `xml_node::prepend_child` and `xml_node::prepend_copy` functions

  10. Added `xml_node::append_child`, `xml_node::prepend_child`, `xml_node::insert_child_before` and `xml_node::insert_child_after` overloads for element nodes (with name instead of type)

  11. Added `xml_document::reset()` function

  </div>

- Performance improvements:

  <div class="olist arabic">

  1.  `xml_node::root()` and `xml_node::offset_debug()` are now O(1) instead of O(logN)

  2.  Minor parsing optimizations

  3.  Minor memory optimization for strings in DOM tree (`set_name`/`set_value`)

  4.  Memory optimization for string memory reclaiming in DOM tree (`set_name`/`set_value` now reallocate the buffer if memory waste is too big)

  5.  XPath: optimized document order sorting

  6.  XPath: optimized child/attribute axis step

  7.  XPath: optimized number-to-string conversions in MSVC

  8.  XPath: optimized concat for many arguments

  9.  XPath: optimized evaluation allocation mechanism: constant and document strings are not heap-allocated

  10. XPath: optimized evaluation allocation mechanism: all temporaries' allocations use fast stack-like allocator

  </div>

- Compatibility:

  <div class="olist arabic">

  1.  Removed wildcard functions (`xml_node::child_w`, `xml_node::attribute_w`, etc.)

  2.  Removed `xml_node::all_elements_by_name`

  3.  Removed `xpath_type_t` enumeration; use `xpath_value_type` instead

  4.  Removed `format_write_bom_utf8` enumeration; use `format_write_bom` instead

  5.  Removed `xml_document::precompute_document_order`, `xml_attribute::document_order` and `xml_node::document_order` functions; document order sort optimization is now automatic

  6.  Removed `xml_document::parse` functions and `transfer_ownership` struct; use `xml_document::load_buffer_inplace` and `xml_document::load_buffer_inplace_own` instead

  7.  Removed `as_utf16` function; use `as_wide` instead

  </div>

</div>

</div>

<div class="sect2">

<span id="v0.9"></span>

### <a href="#v0.9" class="anchor"></a><a href="#v0.9" class="link">v0.9 <sup>2010-07-01</sup></a>

<div class="paragraph">

Major release, featuring extended and improved Unicode support, miscellaneous performance improvements, bug fixes and more.

</div>

<div class="ulist">

- Major Unicode improvements:

  <div class="olist arabic">

  1.  Introduced encoding support (automatic/manual encoding detection on load, manual encoding selection on save, conversion from/to UTF8, UTF16 LE/BE, UTF32 LE/BE)

  2.  Introduced `wchar_t` mode (you can set `PUGIXML_WCHAR_MODE` define to switch pugixml internal encoding from UTF8 to `wchar_t`; all functions are switched to their Unicode variants)

  3.  Load/save functions now support wide streams

  </div>

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed document corruption on failed parsing bug

  2.  XPath string/number conversion improvements (increased precision, fixed crash for huge numbers)

  3.  Improved DOCTYPE parsing: now parser recognizes all well-formed DOCTYPE declarations

  4.  Fixed `xml_attribute::as_uint()` for large numbers (i.e. 2<sup>32</sup>-1)

  5.  Fixed `xml_node::first_element_by_path` for path components that are prefixes of node names, but are not exactly equal to them.

  </div>

- Specification changes:

  <div class="olist arabic">

  1.  `parse()` API changed to `load_buffer`/`load_buffer_inplace`/`load_buffer_inplace_own`; `load_buffer` APIs do not require zero-terminated strings.

  2.  Renamed `as_utf16` to `as_wide`

  3.  Changed `xml_node::offset_debug` return type and `xml_parse_result::offset` type to `ptrdiff_t`

  4.  Nodes/attributes with empty names are now printed as `:anonymous`

  </div>

- Performance improvements:

  <div class="olist arabic">

  1.  Optimized document parsing and saving

  2.  Changed internal memory management: internal allocator is used for both metadata and name/value data; allocated pages are deleted if all allocations from them are deleted

  3.  Optimized memory consumption: `sizeof(xml_node_struct)` reduced from 40 bytes to 32 bytes on x86

  4.  Optimized debug mode parsing/saving by order of magnitude

  </div>

- Miscellaneous:

  <div class="olist arabic">

  1.  All STL includes except `<exception>` in `pugixml.hpp` are replaced with forward declarations

  2.  `xml_node::remove_child` and `xml_node::remove_attribute` now return the operation result

  </div>

- Compatibility:

  <div class="olist arabic">

  1.  `parse()` and `as_utf16` are left for compatibility (these functions are deprecated and will be removed in version 1.0)

  2.  Wildcard functions, `document_order`/`precompute_document_order` functions, `all_elements_by_name` function and `format_write_bom_utf8` flag are deprecated and will be removed in version 1.0

  3.  `xpath_type_t` enumeration was renamed to `xpath_value_type`; `xpath_type_t` is deprecated and will be removed in version 1.0

  </div>

</div>

</div>

<div class="sect2">

<span id="v0.5"></span>

### <a href="#v0.5" class="anchor"></a><a href="#v0.5" class="link">v0.5 <sup>2009-11-08</sup></a>

<div class="paragraph">

Major bugfix release. Changes:

</div>

<div class="ulist">

- XPath bugfixes:

  <div class="olist arabic">

  1.  Fixed `translate()`, `lang()` and `concat()` functions (infinite loops/crashes)

  2.  Fixed compilation of queries with empty literal strings (`""`)

  3.  Fixed axis tests: they never add empty nodes/attributes to the resulting node set now

  4.  Fixed string-value evaluation for node-set (the result excluded some text descendants)

  5.  Fixed `self::` axis (it behaved like `ancestor-or-self::`)

  6.  Fixed `following::` and `preceding::` axes (they included descendent and ancestor nodes, respectively)

  7.  Minor fix for `namespace-uri()` function (namespace declaration scope includes the parent element of namespace declaration attribute)

  8.  Some incorrect queries are no longer parsed now (i.e. `foo: *`)

  9.  Fixed `text()`/etc. node test parsing bug (i.e. `foo[text()]` failed to compile)

  10. Fixed root step (`/`) - it now selects empty node set if query is evaluated on empty node

  11. Fixed string to number conversion (`"123 "` converted to NaN, `"123 .456"` converted to 123.456 - now the results are 123 and NaN, respectively)

  12. Node set copying now preserves sorted type; leads to better performance on some queries

  </div>

- Miscellaneous bugfixes:

  <div class="olist arabic">

  1.  Fixed `xml_node::offset_debug` for PI nodes

  2.  Added empty attribute checks to `xml_node::remove_attribute`

  3.  Fixed `node_pi` and `node_declaration` copying

  4.  Const-correctness fixes

  </div>

- Specification changes:

  <div class="olist arabic">

  1.  `xpath_node::select_nodes()` and related functions now throw exception if expression return type is not node set (instead of assertion)

  2.  `xml_node::traverse()` now sets depth to -1 for both `begin()` and `end()` callbacks (was 0 at `begin()` and -1 at `end()`)

  3.  In case of non-raw node printing a newline is output after PCDATA inside nodes if the PCDATA has siblings

  4.  UTF8 → `wchar_t` conversion now considers 5-byte UTF8-like sequences as invalid

  </div>

- New features:

  <div class="olist arabic">

  1.  Added `xpath_node_set::operator[]` for index-based iteration

  2.  Added `xpath_query::return_type()`

  3.  Added getter accessors for memory-management functions

  </div>

</div>

</div>

<div class="sect2">

<span id="v0.42"></span>

### <a href="#v0.42" class="anchor"></a><a href="#v0.42" class="link">v0.42 <sup>2009-09-17</sup></a>

<div class="paragraph">

Maintenance release. Changes:

</div>

<div class="ulist">

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed deallocation in case of custom allocation functions or if `delete[]` / `free` are incompatible

  2.  XPath parser fixed for incorrect queries (i.e. incorrect XPath queries should now always fail to compile)

  3.  Const-correctness fixes for `find_child_by_attribute`

  4.  Improved compatibility (miscellaneous warning fixes, fixed `<cstring>` include dependency for GCC)

  5.  Fixed iterator begin/end and print function to work correctly for empty nodes

  </div>

- New features:

  <div class="olist arabic">

  1.  Added `PUGIXML_API`/`PUGIXML_CLASS`/`PUGIXML_FUNCTION` configuration macros to control class/function attributes

  2.  Added `xml_attribute::set_value` overloads for different types

  </div>

</div>

</div>

<div class="sect2">

<span id="v0.41"></span>

### <a href="#v0.41" class="anchor"></a><a href="#v0.41" class="link">v0.41 <sup>2009-02-08</sup></a>

<div class="paragraph">

Maintenance release. Changes:

</div>

<div class="ulist">

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed bug with node printing (occasionally some content was not written to output stream)

  </div>

</div>

</div>

<div class="sect2">

<span id="v0.4"></span>

### <a href="#v0.4" class="anchor"></a><a href="#v0.4" class="link">v0.4 <sup>2009-01-18</sup></a>

<div class="paragraph">

Changes:

</div>

<div class="ulist">

- Bug fixes:

  <div class="olist arabic">

  1.  Documentation fix in samples for `parse()` with manual lifetime control

  2.  Fixed document order sorting in XPath (it caused wrong order of nodes after `xpath_node_set::sort` and wrong results of some XPath queries)

  </div>

- Node printing changes:

  <div class="olist arabic">

  1.  Single quotes are no longer escaped when printing nodes

  2.  Symbols in second half of ASCII table are no longer escaped when printing nodes; because of this, `format_utf8` flag is deleted as it’s no longer needed and `format_write_bom` is renamed to `format_write_bom_utf8`.

  3.  Reworked node printing - now it works via `xml_writer` interface; implementations for `FILE*` and `std::ostream` are available. As a side-effect, `xml_document::save_file` now works without STL.

  </div>

- New features:

  <div class="olist arabic">

  1.  Added unsigned integer support for attributes (`xml_attribute::as_uint`, `xml_attribute::operator=`)

  2.  Now document declaration (`<?xml …​?>`) is parsed as node with type `node_declaration` when `parse_declaration` flag is specified (access to encoding/version is performed as if they were attributes, i.e. `doc.child("xml").attribute("version").as_float()`); corresponding flags for node printing were also added

  3.  Added support for custom memory management (see `set_memory_management_functions` for details)

  4.  Implemented node/attribute copying (see `xml_node::insert_copy_*` and `xml_node::append_copy` for details)

  5.  Added `find_child_by_attribute` and `find_child_by_attribute_w` to simplify parsing code in some cases (i.e. COLLADA files)

  6.  Added file offset information querying for debugging purposes (now you’re able to determine exact location of any `xml_node` in parsed file, see `xml_node::offset_debug` for details)

  7.  Improved error handling for parsing - now `load()`, `load_file()` and `parse()` return `xml_parse_result`, which contains error code and last parsed offset; this does not break old interface as `xml_parse_result` can be implicitly casted to `bool`.

  </div>

</div>

</div>

<div class="sect2">

<span id="v0.34"></span>

### <a href="#v0.34" class="anchor"></a><a href="#v0.34" class="link">v0.34 <sup>2007-10-31</sup></a>

<div class="paragraph">

Maintenance release. Changes:

</div>

<div class="ulist">

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed bug with loading from text-mode iostreams

  2.  Fixed leak when `transfer_ownership` is true and parsing is failing

  3.  Fixed bug in saving (`\r` and `\n` are now escaped in attribute values)

  4.  Renamed `free()` to `destroy()` - some macro conflicts were reported

  </div>

- New features:

  <div class="olist arabic">

  1.  Improved compatibility (supported Digital Mars C++, MSVC 6, CodeWarrior 8, PGI C++, Comeau, supported PS3 and XBox360)

  2.  `PUGIXML_NO_EXCEPTION` flag for platforms without exception handling

  </div>

</div>

</div>

<div class="sect2">

<span id="v0.3"></span>

### <a href="#v0.3" class="anchor"></a><a href="#v0.3" class="link">v0.3 <sup>2007-02-21</sup></a>

<div class="paragraph">

Refactored, reworked and improved version. Changes:

</div>

<div class="ulist">

- Interface:

  <div class="olist arabic">

  1.  Added XPath

  2.  Added tree modification functions

  3.  Added no STL compilation mode

  4.  Added saving document to file

  5.  Refactored parsing flags

  6.  Removed `xml_parser` class in favor of `xml_document`

  7.  Added transfer ownership parsing mode

  8.  Modified the way `xml_tree_walker` works

  9.  Iterators are now non-constant

  </div>

- Implementation:

  <div class="olist arabic">

  1.  Support of several compilers and platforms

  2.  Refactored and sped up parsing core

  3.  Improved standard compliancy

  4.  Added XPath implementation

  5.  Fixed several bugs

  </div>

</div>

</div>

<div class="sect2">

<span id="v0.2"></span>

### <a href="#v0.2" class="anchor"></a><a href="#v0.2" class="link">v0.2 <sup>2006-11-06</sup></a>

<div class="paragraph">

First public release. Changes:

</div>

<div class="ulist">

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed `child_value()` (for empty nodes)

  2.  Fixed `xml_parser_impl` warning at W4

  </div>

- New features:

  <div class="olist arabic">

  1.  Introduced `child_value(name)` and `child_value_w(name)`

  2.  `parse_eol_pcdata` and `parse_eol_attribute` flags + `parse_minimal` optimizations

  3.  Optimizations of `strconv_t`

  </div>

</div>

</div>

<div class="sect2">

<span id="v0.1"></span>

### <a href="#v0.1" class="anchor"></a><a href="#v0.1" class="link">v0.1 <sup>2006-07-15</sup></a>

<div class="paragraph">

First private release for testing purposes

</div>

</div>

</div>

</div>
