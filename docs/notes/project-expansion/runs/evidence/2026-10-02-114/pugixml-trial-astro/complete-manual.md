<div class="sect1">

<span id="overview"></span>

## <a href="#overview" class="anchor"></a><a href="#overview" class="link">1. Overview</a>

<div class="sectionbody">

<div class="sect2">

<span id="overview.introduction"></span>

### <a href="#overview.introduction" class="anchor"></a><a href="#overview.introduction" class="link">1.1. Introduction</a>

<div class="paragraph">

[pugixml](https://pugixml.org/) is a light-weight C++ XML processing library. It consists of a DOM-like interface with rich traversal/modification capabilities, an extremely fast XML parser which constructs the DOM tree from an XML file/buffer, and an [XPath 1.0 implementation](#xpath) for complex data-driven tree queries. Full Unicode support is also available, with [two Unicode interface variants](#dom.unicode) and conversions between different Unicode encodings (which happen automatically during parsing/saving). The library is [extremely portable](#install.portability) and easy to integrate and use. pugixml is developed and maintained since 2006 and has many users. All code is distributed under the [MIT license](#overview.license), making it completely free to use in both open-source and proprietary applications.

</div>

<div class="paragraph">

pugixml enables very fast, convenient and memory-efficient XML document processing. However, since pugixml has a DOM parser, it can’t process XML documents that do not fit in memory; also the parser is a non-validating one, so if you need DTD or XML Schema validation, the library is not for you.

</div>

<div class="paragraph">

This is the complete manual for pugixml, which describes all features of the library in detail. If you want to start writing code as quickly as possible, you are advised to [read the quick start guide first](quickstart.html).

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
<td class="content">No documentation is perfect; neither is this one. If you find errors or omissions, please don’t hesitate to <a href="https://github.com/zeux/pugixml/issues/new">submit an issue or open a pull request</a> with a fix.</td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<span id="overview.feedback"></span>

### <a href="#overview.feedback" class="anchor"></a><a href="#overview.feedback" class="link">1.2. Feedback</a>

<div class="paragraph">

If you believe you’ve found a bug in pugixml (bugs include compilation problems (errors/warnings), crashes, performance degradation and incorrect behavior), please file an issue via [issue submission form](https://github.com/zeux/pugixml/issues/new). Be sure to include the relevant information so that the bug can be reproduced: the version of pugixml, compiler version and target architecture, the code that uses pugixml and exhibits the bug, etc.

</div>

<div class="paragraph">

Feature requests can be reported the same way as bugs, so if you’re missing some functionality in pugixml or if the API is rough in some places and you can suggest an improvement, [file an issue](https://github.com/zeux/pugixml/issues/new). However please note that there are many factors when considering API changes (compatibility with previous versions, API redundancy, etc.), so generally features that can be implemented via a small function without pugixml modification are not accepted. However, all rules have exceptions.

</div>

<div class="paragraph">

If you have a contribution to pugixml, such as build script for some build system/IDE, or a well-designed set of helper functions, or a binding to some language other than C++, please [file an issue or open a pull request](https://github.com/zeux/pugixml/issues/new). Your contribution has to be distributed under the terms of a license that’s compatible with pugixml license; i.e. GPL/LGPL licensed code is not accepted.

</div>

<div class="paragraph">

<span id="email"></span>

If filing an issue is not possible due to privacy or other concerns, you can contact pugixml author by e-mail directly: <arseny.kapoulkine@gmail.com>.

</div>

</div>

<div class="sect2">

<span id="overview.thanks"></span>

### <a href="#overview.thanks" class="anchor"></a><a href="#overview.thanks" class="link">1.3. Acknowledgments</a>

<div class="paragraph">

pugixml could not be developed without the help from many people; some of them are listed in this section. If you’ve played a part in pugixml development and you can not find yourself on this list, I’m truly sorry; please [send me an e-mail](#email) so I can fix this.

</div>

<div class="paragraph">

Thanks to **Kristen Wegner** for pugxml parser, which was used as a basis for pugixml.

</div>

<div class="paragraph">

Thanks to **Neville Franks** for contributions to pugxml parser.

</div>

<div class="paragraph">

Thanks to **Artyom Palvelev** for suggesting a lazy gap contraction approach.

</div>

<div class="paragraph">

Thanks to **Vyacheslav Egorov** for documentation proofreading and fuzz testing.

</div>

</div>

<div class="sect2">

<span id="overview.license"></span>

### <a href="#overview.license" class="anchor"></a><a href="#overview.license" class="link">1.4. License</a>

<div class="paragraph">

The pugixml library is distributed under the MIT license:

</div>

<div class="literalblock">

<div class="content">

    Copyright (c) 2006-2026 Arseny Kapoulkine

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

</div>

</div>

<div class="paragraph">

This means that you can freely use pugixml in your applications, both open-source and proprietary. If you use pugixml in a product, it is sufficient to add an acknowledgment like this to the product distribution:

</div>

<div class="literalblock">

<div class="content">

    This software is based on pugixml library (https://pugixml.org).
    pugixml is Copyright (C) 2006-2026 Arseny Kapoulkine.

</div>

</div>

</div>

</div>

</div>

<div class="sect1">

<span id="install"></span>

## <a href="#install" class="anchor"></a><a href="#install" class="link">2. Installation</a>

<div class="sectionbody">

<div class="sect2">

<span id="install.getting"></span>

### <a href="#install.getting" class="anchor"></a><a href="#install.getting" class="link">2.1. Getting pugixml</a>

<div class="paragraph">

pugixml is distributed in source form. You can either download a source distribution or clone the Git repository.

</div>

<div class="sect3">

<span id="install.getting.source"></span>

#### <a href="#install.getting.source" class="anchor"></a><a href="#install.getting.source" class="link">2.1.1. Source distributions</a>

<div class="paragraph">

You can download the latest source distribution as an archive:

</div>

<div class="paragraph">

[pugixml-1.16.zip](https://github.com/zeux/pugixml/releases/download/v1.16/pugixml-1.16.zip) (Windows line endings) / [pugixml-1.16.tar.gz](https://github.com/zeux/pugixml/releases/download/v1.16/pugixml-1.16.tar.gz) (Unix line endings)

</div>

<div class="paragraph">

The distribution contains library source, documentation (the manual you’re reading now and the quick start guide) and some code examples. After downloading the distribution, install pugixml by extracting all files from the compressed archive.

</div>

<div class="paragraph">

If you need an older version, you can download it from the [version archive](https://github.com/zeux/pugixml/releases).

</div>

</div>

<div class="sect3">

<span id="install.getting.git"></span>

#### <a href="#install.getting.git" class="anchor"></a><a href="#install.getting.git" class="link">2.1.2. Git repository</a>

<div class="paragraph">

The Git repository is located at [https://github.com/zeux/pugixml/](https://github.com/zeux/pugixml/). There is a Git tag "v{version}" for each version; also there is the "latest" tag, which always points to the latest stable release.

</div>

<div class="paragraph">

For example, to checkout the current version, you can use this command:

</div>

<div class="listingblock">

<div class="content">

``` bash
git clone https://github.com/zeux/pugixml
cd pugixml
git checkout v1.16
```

</div>

</div>

<div class="paragraph">

The repository contains library source, documentation, code examples and full unit test suite.

</div>

<div class="paragraph">

Use `latest` tag if you want to automatically get new versions. Use other tags if you want to switch to new versions only explicitly. Also please note that the master branch contains the work-in-progress version of the code; while this means that you can get new features and bug fixes from master without waiting for a new release, this also means that occasionally the code can be broken in some configurations.

</div>

</div>

<div class="sect3">

<span id="install.getting.packages"></span>

#### <a href="#install.getting.packages" class="anchor"></a><a href="#install.getting.packages" class="link">2.1.3. Packages</a>

<div class="paragraph">

pugixml is available as a package via various package managers. Note that most packages are maintained separately from the main repository so they do not necessarily contain the latest version.

</div>

<div class="paragraph">

Here’s an incomplete list of pugixml packages in various systems:

</div>

<div class="ulist">

- Linux ([Ubuntu](http://packages.ubuntu.com/search?keywords=pugixml), [Debian](https://tracker.debian.org/pkg/pugixml), [Fedora](https://packages.fedoraproject.org/pkgs/pugixml/pugixml), [Arch Linux](https://archlinux.org/packages/extra/x86_64/pugixml/), other [distributions](https://pkgs.org/download/pugixml))

- [FreeBSD](https://www.freshports.org/textproc/pugixml)

- OSX, via [Homebrew](https://formulae.brew.sh/formula/pugixml)

- Windows, via [NuGet](https://www.nuget.org/packages/pugixml)

- C++ package managers ([vcpkg](https://vcpkg.io/en/package/pugixml), [Conan](https://conan.io/center/recipes/pugixml))

</div>

</div>

</div>

<div class="sect2">

<span id="install.building"></span>

### <a href="#install.building" class="anchor"></a><a href="#install.building" class="link">2.2. Building pugixml</a>

<div class="paragraph">

pugixml is distributed in source form without any pre-built binaries; you have to build them yourself.

</div>

<div class="paragraph">

The complete pugixml source consists of three files - one source file, `pugixml.cpp`, and two header files, `pugixml.hpp` and `pugiconfig.hpp`. `pugixml.hpp` is the primary header which you need to include in order to use pugixml classes/functions; `pugiconfig.hpp` is a supplementary configuration file (see [Additional configuration options](#install.building.config)). The rest of this guide assumes that `pugixml.hpp` is either in the current directory or in one of include directories of your projects, so that `#include "pugixml.hpp"` can find the header; however you can also use relative path (i.e. `#include "../libs/pugixml/src/pugixml.hpp"`) or include directory-relative path (i.e. `#include <xml/thirdparty/pugixml/src/pugixml.hpp>`).

</div>

<div class="sect3">

<span id="install.building.embed"></span>

#### <a href="#install.building.embed" class="anchor"></a><a href="#install.building.embed" class="link">2.2.1. Building pugixml as a part of another static library/executable</a>

<div class="paragraph">

The easiest way to build pugixml is to compile the source file, `pugixml.cpp`, along with the existing library/executable. This process depends on the method of building your application; for example, if you’re using Microsoft Visual Studio <sup>\[<a href="#_footnotedef_1" id="_footnoteref_1" class="footnote" title="View footnote.">1</a>\]</sup>, Apple Xcode, Code::Blocks or any other IDE, just **add `pugixml.cpp` to one of your projects**.

</div>

<div class="paragraph">

If you’re using Microsoft Visual Studio and the project has precompiled headers turned on, you’ll see the following error messages:

</div>

<div class="listingblock">

<div class="content">

``` cpp
pugixml.cpp(3477) : fatal error C1010: unexpected end of file while looking for precompiled header. Did you forget to add '#include "stdafx.h"' to your source?
```

</div>

</div>

<div class="paragraph">

The correct way to resolve this is to disable precompiled headers for `pugixml.cpp`; you have to set "Create/Use Precompiled Header" option (Properties dialog → C/C++ → Precompiled Headers → Create/Use Precompiled Header) to "Not Using Precompiled Headers". You’ll have to do it for all project configurations/platforms (you can select Configuration "All Configurations" and Platform "All Platforms" before editing the option):

</div>

<table class="tableblock frame-none grid-all stretch">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="images/vs2005_pch1.png" class="image"><img src="images/vs2005_pch1.png" alt="vs2005 pch1" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="images/vs2005_pch2.png" class="image"><img src="images/vs2005_pch2.png" alt="vs2005 pch2" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="images/vs2005_pch3.png" class="image"><img src="images/vs2005_pch3.png" alt="vs2005 pch3" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="images/vs2005_pch4.png" class="image"><img src="images/vs2005_pch4.png" alt="vs2005 pch4" /></a>
</div>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="sect3">

<span id="install.building.static"></span>

#### <a href="#install.building.static" class="anchor"></a><a href="#install.building.static" class="link">2.2.2. Building pugixml as a standalone static library</a>

<div class="paragraph">

It’s possible to compile pugixml as a standalone static library. This process depends on the method of building your application; pugixml distribution comes with project files for several popular IDEs/build systems. There are project files for Apple XCode, Code::Blocks, Codelite, Microsoft Visual Studio 2005, 2008, 2010+, and configuration scripts for CMake and premake4. You’re welcome to submit project files/build scripts for other software; see [Feedback](#overview.feedback).

</div>

<div class="paragraph">

There are two projects for each version of Microsoft Visual Studio: one for dynamically linked CRT, which has a name like `pugixml_vs2008.vcproj`, and another one for statically linked CRT, which has a name like `pugixml_vs2008_static.vcproj`. You should select the version that matches the CRT used in your application; the default option for new projects created by Microsoft Visual Studio is dynamically linked CRT, so unless you changed the defaults, you should use the version with dynamic CRT (i.e. `pugixml_vs2008.vcproj` for Microsoft Visual Studio 2008).

</div>

<div class="paragraph">

In addition to adding pugixml project to your workspace, you’ll have to make sure that your application links with pugixml library. If you’re using Microsoft Visual Studio 2005/2008, you can add a dependency from your application project to pugixml one. If you’re using Microsoft Visual Studio 2010+, you’ll have to add a reference to your application project instead. For other IDEs/systems, consult the relevant documentation.

</div>

<table class="tableblock frame-none grid-all stretch">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th colspan="2" class="tableblock halign-left valign-top">Microsoft Visual Studio 2005/2008</th>
<th colspan="2" class="tableblock halign-left valign-top">Microsoft Visual Studio 2010+</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="images/vs2005_link1.png" class="image"><img src="images/vs2005_link1.png" alt="vs2005 link1" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="images/vs2005_link2.png" class="image"><img src="images/vs2005_link2.png" alt="vs2005 link2" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="images/vs2010_link1.png" class="image"><img src="images/vs2010_link1.png" alt="vs2010 link1" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="images/vs2010_link2.png" class="image"><img src="images/vs2010_link2.png" alt="vs2010 link2" /></a>
</div>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="sect3">

<span id="install.building.shared"></span>

#### <a href="#install.building.shared" class="anchor"></a><a href="#install.building.shared" class="link">2.2.3. Building pugixml as a standalone shared library</a>

<div class="paragraph">

It’s possible to compile pugixml as a standalone shared library. The process is usually similar to the static library approach; however, no preconfigured projects/scripts are included into pugixml distribution, so you’ll have to do it yourself. Generally, if you’re using GCC-based toolchain, the process does not differ from building any other library as DLL (adding -shared to compilation flags should suffice); if you’re using MSVC-based toolchain, you’ll have to explicitly mark exported symbols with a declspec attribute. You can do it by defining [PUGIXML_API](#PUGIXML_API) macro, i.e. via `pugiconfig.hpp`:

</div>

<div class="listingblock">

<div class="content">

``` cpp
#ifdef _DLL
    #define PUGIXML_API __declspec(dllexport)
#else
    #define PUGIXML_API __declspec(dllimport)
#endif
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
<td class="content">If you’re using STL-related functions, you should use the shared runtime library to ensure that a single heap is used for STL allocations in your application and in pugixml; in MSVC, this means selecting the 'Multithreaded DLL' or 'Multithreaded Debug DLL' to 'Runtime library' property (<code>/MD</code> or <code>/MDd</code> linker switch). You should also make sure that your runtime library choice is consistent between different projects.</td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect3">

<span id="install.building.header"></span>

#### <a href="#install.building.header" class="anchor"></a><a href="#install.building.header" class="link">2.2.4. Using pugixml in header-only mode</a>

<div id="PUGIXML_HEADER_ONLY" class="paragraph">

It’s possible to use pugixml in header-only mode. This means that all source code for pugixml will be included in every translation unit that includes `pugixml.hpp`. This is how most of Boost and STL libraries work.

</div>

<div class="paragraph">

Note that there are advantages and drawbacks of this approach. Header mode may improve tree traversal/modification performance (because many simple functions will be inlined), if your compiler toolchain does not support link-time optimization, or if you have it turned off (with link-time optimization the performance should be similar to non-header mode). However, since compiler now has to compile pugixml source once for each translation unit that includes it, compilation times may increase noticeably. If you want to use pugixml in header mode but do not need XPath support, you can consider disabling it by using [PUGIXML_NO_XPATH](#PUGIXML_NO_XPATH) define to improve compilation time.

</div>

<div class="paragraph">

To enable header-only mode, you have to define `PUGIXML_HEADER_ONLY`. You can either do it in `pugiconfig.hpp`, or provide them via compiler command-line.

</div>

<div class="paragraph">

Note that it is safe to compile `pugixml.cpp` if `PUGIXML_HEADER_ONLY` is defined - so if you want to i.e. use header-only mode only in Release configuration, you can include pugixml.cpp in your project (see [Building pugixml as a part of another static library/executable](#install.building.embed)), and conditionally enable header-only mode in `pugiconfig.hpp` like this:

</div>

<div class="listingblock">

<div class="content">

``` cpp
#ifndef _DEBUG
    #define PUGIXML_HEADER_ONLY
#endif
```

</div>

</div>

</div>

<div class="sect3">

<span id="install.building.config"></span>

#### <a href="#install.building.config" class="anchor"></a><a href="#install.building.config" class="link">2.2.5. Additional configuration options</a>

<div class="paragraph">

pugixml uses several defines to control the compilation process. There are two ways to define them: either put the needed definitions to `pugiconfig.hpp` (it has some examples that are commented out) or provide them via compiler command-line. Consistency is important: the definitions should match in all source files that include `pugixml.hpp` (including pugixml sources) throughout the application. Adding defines to `pugiconfig.hpp` lets you guarantee this, unless your macro definition is wrapped in preprocessor `#if`/`#ifdef` directive and this directive is not consistent. `pugiconfig.hpp` will never contain anything but comments, which means that when upgrading to a new version, you can safely leave your modified version intact.

</div>

<div class="paragraph">

<span id="PUGIXML_WCHAR_MODE"></span>`PUGIXML_WCHAR_MODE` define toggles between UTF-8 style interface (the in-memory text encoding is assumed to be UTF-8, most functions use `char` as character type) and UTF-16/32 style interface (the in-memory text encoding is assumed to be UTF-16/32, depending on `wchar_t` size, most functions use `wchar_t` as character type). See [Unicode interface](#dom.unicode) for more details.

</div>

<div class="paragraph">

<span id="PUGIXML_CHARCONV_FLOAT"></span>`PUGIXML_CHARCONV_FLOAT` will use [\<charconv\>](https://en.cppreference.com/cpp/header/charconv) for floating-point number formatting instead of `<stdio.h>` functions, which requires C++17 and UTF-8 interface. Note that the conversion will then ignore the locale and always act as if the default `C` locale is used.

</div>

<div class="paragraph">

<span id="PUGIXML_COMPACT"></span>`PUGIXML_COMPACT` define activates a different internal representation of document storage that is much more memory efficient for documents with a lot of markup (i.e. nodes and attributes), but is slightly slower to parse and access. For details see [Compact mode](#dom.memory.compact).

</div>

<div class="paragraph">

<span id="PUGIXML_NO_XPATH"></span>`PUGIXML_NO_XPATH` define disables XPath. Both XPath interfaces and XPath implementation are excluded from compilation. This option is provided in case you do not need XPath functionality and need to save code space.

</div>

<div class="paragraph">

<span id="PUGIXML_NO_STL"></span>`PUGIXML_NO_STL` define disables use of STL in pugixml. The functions that operate on STL types are no longer present (i.e. load/save via iostream) if this macro is defined. This option is provided in case your target platform does not have a standard-compliant STL implementation.

</div>

<div class="paragraph">

<span id="PUGIXML_NO_EXCEPTIONS"></span>`PUGIXML_NO_EXCEPTIONS` define disables use of exceptions in pugixml. This option is provided in case your target platform does not have exception handling capabilities.

</div>

<div class="paragraph">

<span id="PUGIXML_API"></span>`PUGIXML_API`, <span id="PUGIXML_CLASS"></span>`PUGIXML_CLASS` and <span id="PUGIXML_FUNCTION"></span>`PUGIXML_FUNCTION` defines let you specify custom attributes (i.e. declspec or calling conventions) for pugixml classes and non-member functions. In absence of `PUGIXML_CLASS` or `PUGIXML_FUNCTION` definitions, `PUGIXML_API` definition is used instead. For example, to specify fixed calling convention, you can define `PUGIXML_FUNCTION` to i.e. `__fastcall`. Another example is DLL import/export attributes in MSVC (see [Building pugixml as a standalone shared library](#install.building.shared)).

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
<td class="content">In that example <code>PUGIXML_API</code> is inconsistent between several source files; this is an exception to the consistency rule.</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

<span id="PUGIXML_MEMORY_PAGE_SIZE"></span>`PUGIXML_MEMORY_PAGE_SIZE`, <span id="PUGIXML_MEMORY_OUTPUT_STACK"></span>`PUGIXML_MEMORY_OUTPUT_STACK` and <span id="PUGIXML_MEMORY_XPATH_PAGE_SIZE"></span>`PUGIXML_MEMORY_XPATH_PAGE_SIZE` can be used to customize certain important sizes to optimize memory usage for the application-specific patterns. For details see [Memory consumption tuning](#dom.memory.tuning).

</div>

<div class="paragraph">

<span id="PUGIXML_HAS_LONG_LONG"></span>`PUGIXML_HAS_LONG_LONG` define enables support for `long long` type in pugixml. This define is automatically enabled if your platform is known to have `long long` support (i.e. has C++11 support or uses a reasonably modern version of a known compiler); if pugixml does not recognize that your platform supports `long long` but in fact it does, you can enable the define manually.

</div>

<div class="paragraph">

<span id="PUGIXML_HAS_STRING_VIEW"></span>`PUGIXML_HAS_STRING_VIEW` define enables function overloads that accept `std::string_view` arguments. This define is automatically enabled if built targeting C++17 or later; if pugixml does not recognize that your platform supports `std::string_view` but in fact it does, you can enable the define manually.

</div>

</div>

</div>

<div class="sect2">

<span id="install.portability"></span>

### <a href="#install.portability" class="anchor"></a><a href="#install.portability" class="link">2.3. Portability</a>

<div class="paragraph">

pugixml is written in standard-compliant C++ with some compiler-specific workarounds where appropriate. pugixml can be compiled with any version of the C++ standard starting from C++98; newer standards automatically enable additional functionality (move semantics and range-based for support in C++11, `std::string_view` overloads in C++17). Each version is tested with a unit test suite with code coverage exceeding 99%.

</div>

<div class="paragraph">

pugixml runs on a variety of desktop platforms (including Microsoft Windows, Linux, FreeBSD, Apple MacOSX and Sun Solaris), game consoles (including Microsoft Xbox 360, Microsoft Xbox One, Nintendo Wii, Sony Playstation Portable and Sony Playstation 3) and mobile platforms (including Android, iOS, BlackBerry, Samsung bada and Microsoft Windows CE).

</div>

<div class="paragraph">

pugixml supports various architectures, such as x86/x86-64, PowerPC, ARM, MIPS and SPARC. In general it should run on any architecture since it does not use architecture-specific code and does not rely on features such as unaligned memory access.

</div>

<div class="paragraph">

pugixml can be compiled using any C++ compiler; it was tested with all versions of Microsoft Visual C++ from 6.0 up to 2026, GCC from 3.4 up to 16, Clang from 3.2 up to 21, as well as a variety of other compilers (e.g. Borland C++, Digital Mars C++, Intel C++, Metrowerks CodeWarrior and PathScale). The code is written to avoid compilation warnings even on reasonably high warning levels.

</div>

<div class="paragraph">

Note that some platforms may have very bare-bones support of C++; in some cases you’ll have to use `PUGIXML_NO_STL` and/or `PUGIXML_NO_EXCEPTIONS` to compile without issues. This mostly applies to old game consoles and embedded systems.

</div>

</div>

</div>

</div>

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

<div class="sect1">

<span id="access"></span>

## <a href="#access" class="anchor"></a><a href="#access" class="link">5. Accessing document data</a>

<div class="sectionbody">

<div class="paragraph">

pugixml features an extensive interface for getting various types of data from the document and for traversing the document. This section provides documentation for all such functions that do not modify the tree except for XPath-related functions; see [XPath](#xpath) for XPath reference. As discussed in [C++ interface](#dom.cpp), there are two types of handles to tree data - [xml_node](#xml_node) and [xml_attribute](#xml_attribute). The handles have special null (empty) values which propagate through various functions and thus are useful for writing more concise code; see [this description](#node_null) for details. The documentation in this section will explicitly state the results of all function in case of null inputs.

</div>

<div class="sect2">

<span id="access.basic"></span>

### <a href="#access.basic" class="anchor"></a><a href="#access.basic" class="link">5.1. Basic traversal functions</a>

<div class="paragraph">

<span id="xml_node::parent"></span><span id="xml_node::first_child"></span><span id="xml_node::last_child"></span><span id="xml_node::next_sibling"></span><span id="xml_node::previous_sibling"></span><span id="xml_node::first_attribute"></span><span id="xml_node::last_attribute"></span><span id="xml_attribute::next_attribute"></span><span id="xml_attribute::previous_attribute"></span> The internal representation of the document is a tree, where each node has a list of child nodes (the order of children corresponds to their order in the XML representation), and additionally element nodes have a list of attributes, which is also ordered. Several functions are provided in order to let you get from one node in the tree to the other. These functions roughly correspond to the internal representation, and thus are usually building blocks for other methods of traversing (i.e. XPath traversals are based on these functions).

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

With these functions, you can iterate through all child nodes and display all attributes like this ([samples/traverse_base.cpp](samples/traverse_base.cpp)):

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

<span id="access.nodedata"></span>

### <a href="#access.nodedata" class="anchor"></a><a href="#access.nodedata" class="link">5.2. Getting node data</a>

<div class="paragraph">

<span id="xml_node::name"></span><span id="xml_node::value"></span> Apart from structural information (parent, child nodes, attributes), nodes can have name and value, both of which are strings. Depending on node type, name or value may be absent. [node_document](#node_document) nodes do not have a name or value, [node_element](#node_element) and [node_declaration](#node_declaration) nodes always have a name but never have a value, [node_pcdata](#node_pcdata), [node_cdata](#node_cdata), [node_comment](#node_comment) and [node_doctype](#node_doctype) nodes never have a name but always have a value (it may be empty though), [node_pi](#node_pi) nodes always have a name and a value (again, value may be empty). In order to get node’s name or value, you can use the following functions:

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

<div id="xml_node::child_value" class="paragraph">

It is common to store data as text contents of some node - i.e. `<node><description>This is a node</description></node>`. In this case, `<description>` node does not have a value, but instead has a child of type [node_pcdata](#node_pcdata) with value `"This is a node"`. pugixml provides several helper functions to parse such data:

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

`child_value()` returns the value of the first child with type [node_pcdata](#node_pcdata) or [node_cdata](#node_cdata); `child_value(name)` is a simple wrapper for `child(name).child_value()`. For the above example, calling `node.child_value("description")` and `description.child_value()` will both produce string `"This is a node"`. If there is no child with relevant type, or if the handle is null, `child_value` functions return empty string.

</div>

<div class="paragraph">

`text()` returns a special object that can be used for working with PCDATA contents in more complex cases than just retrieving the value; it is described in [Working with text contents](#access.text) sections.

</div>

<div class="paragraph">

There is an example of using some of these functions [at the end of the next section](#code_traverse_base_data).

</div>

</div>

<div class="sect2">

<span id="access.attrdata"></span>

### <a href="#access.attrdata" class="anchor"></a><a href="#access.attrdata" class="link">5.3. Getting attribute data</a>

<div class="paragraph">

<span id="xml_attribute::name"></span><span id="xml_attribute::value"></span> All attributes have name and value, both of which are strings (value may be empty). There are two corresponding accessors, like for `xml_node`:

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

<div id="xml_attribute::as_string" class="paragraph">

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

<span id="xml_attribute::as_int"></span><span id="xml_attribute::as_uint"></span><span id="xml_attribute::as_double"></span><span id="xml_attribute::as_float"></span><span id="xml_attribute::as_bool"></span><span id="xml_attribute::as_llong"></span><span id="xml_attribute::as_ullong"></span> In many cases attribute values have types that are not strings - i.e. an attribute may always contain values that should be treated as integers, despite the fact that they are represented as strings in XML. pugixml provides several accessors that convert attribute value to some other type:

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

<div id="code_traverse_base_data" class="paragraph">

This is an example of using these functions, along with node data retrieval ones ([samples/traverse_base.cpp](samples/traverse_base.cpp)):

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

<span id="access.contents"></span>

### <a href="#access.contents" class="anchor"></a><a href="#access.contents" class="link">5.4. Contents-based traversal functions</a>

<div class="paragraph">

<span id="xml_node::child"></span><span id="xml_node::attribute"></span><span id="xml_node::next_sibling_name"></span><span id="xml_node::previous_sibling_name"></span> Since a lot of document traversal consists of finding the node/attribute with the correct name, there are special functions for that purpose:

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

<div id="xml_node::attribute_hinted" class="paragraph">

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

<div id="xml_node::find_child_by_attribute" class="paragraph">

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

This is an example of using these functions ([samples/traverse_base.cpp](samples/traverse_base.cpp)):

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

<span id="access.rangefor"></span>

### <a href="#access.rangefor" class="anchor"></a><a href="#access.rangefor" class="link">5.5. Range-based for-loop support</a>

<div class="paragraph">

<span id="xml_node::children"></span><span id="xml_node::attributes"></span> If your C++ compiler supports range-based for-loop (this is a C++11 feature, supported by Microsoft Visual Studio 2012+, GCC 4.6+ and Clang 3.0+), you can use it to enumerate nodes/attributes. Additional helpers are provided to support this; note that they are also compatible with [Boost Foreach](http://www.boost.org/libs/foreach/), and possibly other pre-C++11 foreach facilities.

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

This is an example of using these functions ([samples/traverse_rangefor.cpp](samples/traverse_rangefor.cpp)):

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

<span id="access.iterators"></span>

### <a href="#access.iterators" class="anchor"></a><a href="#access.iterators" class="link">5.6. Traversing node/attribute lists via iterators</a>

<div class="paragraph">

<span id="xml_node_iterator"></span><span id="xml_attribute_iterator"></span><span id="xml_node::begin"></span><span id="xml_node::end"></span><span id="xml_node::attributes_begin"></span><span id="xml_node::attributes_end"></span> Child node lists and attribute lists are simply double-linked lists; while you can use `previous_sibling`/`next_sibling` and other such functions for iteration, pugixml additionally provides node and attribute iterators, so that you can treat nodes as containers of other nodes or attributes:

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

Here is an example of using iterators for document traversal ([samples/traverse_iter.cpp](samples/traverse_iter.cpp)):

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

<span id="access.walker"></span>

### <a href="#access.walker" class="anchor"></a><a href="#access.walker" class="link">5.7. Recursive traversal with xml_tree_walker</a>

<div id="xml_tree_walker" class="paragraph">

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

<span id="xml_tree_walker::begin"></span><span id="xml_tree_walker::for_each"></span><span id="xml_tree_walker::end"></span><span id="xml_node::traverse"></span> The traversal is launched by calling `traverse` function on traversal root and proceeds as follows:

</div>

<div class="ulist">

- First, `begin` function is called with traversal root as its argument.

- Then, `for_each` function is called for all nodes in the traversal subtree in depth first order, excluding the traversal root. Node is passed as an argument.

- Finally, `end` function is called with traversal root as its argument.

</div>

<div class="paragraph">

If `begin`, `end` or any of the `for_each` calls return `false`, the traversal is terminated and `false` is returned as the traversal result; otherwise, the traversal results in `true`. Note that you don’t have to override `begin` or `end` functions; their default implementations return `true`.

</div>

<div id="xml_tree_walker::depth" class="paragraph">

You can get the node’s depth relative to the traversal root at any point by calling `depth` function. It returns `-1` if called from `begin`/`end`, and returns 0-based depth if called from `for_each` - depth is 0 for all children of the traversal root, 1 for all grandchildren and so on.

</div>

<div class="paragraph">

This is an example of traversing tree hierarchy with xml_tree_walker ([samples/traverse_walker.cpp](samples/traverse_walker.cpp)):

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

<span id="access.predicate"></span>

### <a href="#access.predicate" class="anchor"></a><a href="#access.predicate" class="link">5.8. Searching for nodes/attributes with predicates</a>

<div class="paragraph">

<span id="xml_node::find_attribute"></span><span id="xml_node::find_child"></span><span id="xml_node::find_node"></span> While there are existing functions for getting a node/attribute with known contents, they are often not sufficient for simple queries. As an alternative for manual iteration through nodes/attributes until the needed one is found, you can make a predicate and call one of `find_` functions:

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

This is an example of using predicate-based functions ([samples/traverse_predicate.cpp](samples/traverse_predicate.cpp)):

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

<span id="access.text"></span>

### <a href="#access.text" class="anchor"></a><a href="#access.text" class="link">5.9. Working with text contents</a>

<div id="xml_text" class="paragraph">

It is common to store data as text contents of some node - i.e. `<node><description>This is a node</description></node>`. In this case, `<description>` node does not have a value, but instead has a child of type [node_pcdata](#node_pcdata) with value `"This is a node"`. pugixml provides a special class, `xml_text`, to work with such data. Working with text objects to modify data is described in [the documentation for modifying document data](#modify.text); this section describes the access interface of `xml_text`.

</div>

<div id="xml_node::text" class="paragraph">

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

<span id="xml_text::empty"></span><span id="xml_text::unspecified_bool_type"></span> You can check if the text object is bound to a valid PCDATA/CDATA node by using it as a boolean value, i.e. `if (text) { …​ }` or `if (!text) { …​ }`. Alternatively you can check it by using the `empty()` method:

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xml_text::empty() const;
```

</div>

</div>

<div id="xml_text::get" class="paragraph">

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

<span id="xml_text::as_string"></span><span id="xml_text::as_int"></span><span id="xml_text::as_uint"></span><span id="xml_text::as_double"></span><span id="xml_text::as_float"></span><span id="xml_text::as_bool"></span><span id="xml_text::as_llong"></span><span id="xml_text::as_ullong"></span> If you need a non-empty string if the text object is empty, or if the text contents is actually a number or a boolean that is stored as a string, you can use the following accessors:

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

All of the above functions have the same semantics as similar `xml_attribute` members: they return the default argument if the text object is empty, they convert the text contents to a target type using the same rules and restrictions. You can [refer to documentation for the attribute functions](#xml_attribute::as_int) for details.

</div>

<div id="xml_text::data" class="paragraph">

`xml_text` is essentially a helper class that operates on `xml_node` values. It is bound to a node of type [node_pcdata](#node_pcdata) or [node_cdata](#node_cdata). You can use the following function to retrieve this node:

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

This is an example of using `xml_text` object ([samples/text.cpp](samples/text.cpp)):

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

<span id="access.misc"></span>

### <a href="#access.misc" class="anchor"></a><a href="#access.misc" class="link">5.10. Miscellaneous functions</a>

<div id="xml_node::root" class="paragraph">

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

This function returns the node with type [node_document](#node_document), which is the root node of the document the node belongs to (unless the node is null, in which case null node is returned).

</div>

<div class="paragraph">

<span id="xml_node::path"></span><span id="xml_node::first_element_by_path"></span> While pugixml supports complex XPath expressions, sometimes a simple path handling facility is needed. There are two functions, for getting node path and for converting path to a node:

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
<td class="content"><code>path</code> function returns the result as STL string, and thus is not available if <a href="#PUGIXML_NO_STL">PUGIXML_NO_STL</a> is defined.</td>
</tr>
</tbody>
</table>

</div>

<div id="xml_node::offset_debug" class="paragraph">

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

If the offset is not available (this happens if the node is null, was not originally parsed from a stream, or has changed in a significant way), the function returns -1. Otherwise it returns the offset to node’s data from the beginning of XML buffer in [pugi::char_t](#char_t) units. For more information on parsing offsets, see [parsing error handling documentation](#xml_parse_result::offset).

</div>

</div>

</div>

</div>

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

``` cpp
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

``` cpp
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

``` cpp
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

``` cpp
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

``` cpp
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

``` cpp
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

``` cpp
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

``` cpp
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

``` cpp
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

``` cpp
xpath_node xml_node::select_node(const xpath_query& query) const;
xpath_node_set xml_node::select_nodes(const xpath_query& query) const;
```

</div>

</div>

<div class="paragraph">

If exception handling is not disabled, both functions throw [xpath_exception](#xpath_exception) if the query returns a value with type other than node set.

</div>

<div class="paragraph">

This is an example of selecting nodes using XPath expressions ([samples/xpath_select.cpp](samples/xpath_select.cpp)):

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

``` cpp
explicit xpath_query::xpath_query(const char_t* query, xpath_variable_set* variables = 0);
```

</div>

</div>

<div id="xpath_query::return_type" class="paragraph">

The expression is compiled and the compiled representation is stored in the new query object. If compilation fails, [xpath_exception](#xpath_exception) is thrown if exception handling is not disabled (see [Error handling](#xpath.errors) for details). After the query is created, you can query the type of the evaluation result using the following function:

</div>

<div class="listingblock">

<div class="content">

``` cpp
xpath_value_type xpath_query::return_type() const;
```

</div>

</div>

<div class="paragraph">

<span id="xpath_query::evaluate_boolean"></span><span id="xpath_query::evaluate_number"></span><span id="xpath_query::evaluate_string"></span><span id="xpath_query::evaluate_node_set"></span><span id="xpath_query::evaluate_node"></span> You can evaluate the query using one of the following functions:

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

This is an example of using query objects ([samples/xpath_query.cpp](samples/xpath_query.cpp)):

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

<div id="xpath_variable_set" class="paragraph">

Variable sets correspond to `xpath_variable_set` type, which is essentially a variable container.

</div>

<div id="xpath_variable_set::add" class="paragraph">

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

<div id="xpath_variable_set::get" class="paragraph">

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

<div id="xpath_variable_set::set" class="paragraph">

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

<div id="xpath_variable" class="paragraph">

If setting variables by name is not efficient enough, or if you have to inspect variable information or get variable values, you can use variable handles. A variable corresponds to the `xpath_variable` type, and a variable handle is simply a pointer to `xpath_variable`.

</div>

<div class="paragraph">

<span id="xpath_variable::type"></span><span id="xpath_variable::name"></span> In order to get variable information, you can use one of the following functions:

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

<span id="xpath_variable::get_boolean"></span><span id="xpath_variable::get_number"></span><span id="xpath_variable::get_string"></span><span id="xpath_variable::get_node_set"></span> In order to get variable value, you should use one of the following functions, depending on the variable type:

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

<div id="xpath_variable::set" class="paragraph">

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

This is an example of using variables in XPath queries ([samples/xpath_variables.cpp](samples/xpath_variables.cpp)):

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

``` cpp
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

``` cpp
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

This is an example of XPath error handling ([samples/xpath_error.cpp](samples/xpath_error.cpp)):

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

<div class="sect1">

<span id="apiref"></span>

## <a href="#apiref" class="anchor"></a><a href="#apiref" class="link">10. API Reference</a>

<div class="sectionbody">

<div class="paragraph">

This is the reference for all macros, types, enumerations, classes and functions in pugixml. Each symbol is a link that leads to the relevant section of the manual.

</div>

<div class="sect2">

<span id="apiref.macros"></span>

### <a href="#apiref.macros" class="anchor"></a><a href="#apiref.macros" class="link">10.1. Macros</a>

<div class="listingblock">

<div class="content">

<pre class="pygments highlight"><code data-lang="c++"><span></span><span class="tok-cp">#define <a href="#PUGIXML_WCHAR_MODE">PUGIXML_WCHAR_MODE</a></span>
<span class="tok-cp">#define <a href="#PUGIXML_COMPACT">PUGIXML_COMPACT</a></span>
<span class="tok-cp">#define <a href="#PUGIXML_NO_XPATH">PUGIXML_NO_XPATH</a></span>
<span class="tok-cp">#define <a href="#PUGIXML_NO_STL">PUGIXML_NO_STL</a></span>
<span class="tok-cp">#define <a href="#PUGIXML_NO_EXCEPTIONS">PUGIXML_NO_EXCEPTIONS</a></span>
<span class="tok-cp">#define <a href="#PUGIXML_API">PUGIXML_API</a></span>
<span class="tok-cp">#define <a href="#PUGIXML_CLASS">PUGIXML_CLASS</a></span>
<span class="tok-cp">#define <a href="#PUGIXML_FUNCTION">PUGIXML_FUNCTION</a></span>
<span class="tok-cp">#define <a href="#PUGIXML_MEMORY_PAGE_SIZE">PUGIXML_MEMORY_PAGE_SIZE</a></span>
<span class="tok-cp">#define <a href="#PUGIXML_MEMORY_OUTPUT_STACK">PUGIXML_MEMORY_OUTPUT_STACK</a></span>
<span class="tok-cp">#define <a href="#PUGIXML_MEMORY_XPATH_PAGE_SIZE">PUGIXML_MEMORY_XPATH_PAGE_SIZE</a></span>
<span class="tok-cp">#define <a href="#PUGIXML_HEADER_ONLY">PUGIXML_HEADER_ONLY</a></span>
<span class="tok-cp">#define <a href="#PUGIXML_HAS_LONG_LONG">PUGIXML_HAS_LONG_LONG</a></span>
<span class="tok-cp">#define <a href="#PUGIXML_HAS_STRING_VIEW">PUGIXML_HAS_STRING_VIEW</a></span></code></pre>

</div>

</div>

</div>

<div class="sect2">

<span id="apiref.types"></span>

### <a href="#apiref.types" class="anchor"></a><a href="#apiref.types" class="link">10.2. Types</a>

<div class="listingblock">

<div class="content">

<pre class="pygments highlight"><code data-lang="c++"><span></span><span class="tok-k">typedef</span><span class="tok-w"> </span><span class="tok-n">configuration</span><span class="tok-o">-</span><span class="tok-n">defined</span><span class="tok-o">-</span><span class="tok-n">type</span><span class="tok-w"> </span><a href="#char_t">char_t</a><span class="tok-p">;</span>
<span class="tok-k">typedef</span><span class="tok-w"> </span><span class="tok-n">configuration</span><span class="tok-o">-</span><span class="tok-n">defined</span><span class="tok-o">-</span><span class="tok-n">type</span><span class="tok-w"> </span><a href="#string_t">string_t</a><span class="tok-p">;</span>
<span class="tok-k">typedef</span><span class="tok-w"> </span><span class="tok-n">configuration</span><span class="tok-o">-</span><span class="tok-n">defined</span><span class="tok-o">-</span><span class="tok-n">type</span><span class="tok-w"> </span><a href="#string_view_t">string_view_t</a><span class="tok-p">;</span>
<span class="tok-k">typedef</span><span class="tok-w"> </span><span class="tok-kt">void</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-p">(</span><span class="tok-o">*</span><a href="#allocation_function">allocation_function</a><span class="tok-p">)(</span><span class="tok-kt">size_t</span><span class="tok-w"> </span><span class="tok-n">size</span><span class="tok-p">);</span>
<span class="tok-k">typedef</span><span class="tok-w"> </span><span class="tok-kt">void</span><span class="tok-w"> </span><span class="tok-p">(</span><span class="tok-o">*</span><a href="#deallocation_function">deallocation_function</a><span class="tok-p">)(</span><span class="tok-kt">void</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">ptr</span><span class="tok-p">);</span></code></pre>

</div>

</div>

</div>

<div class="sect2">

<span id="apiref.enums"></span>

### <a href="#apiref.enums" class="anchor"></a><a href="#apiref.enums" class="link">10.3. Enumerations</a>

<div class="listingblock">

<div class="content">

<pre class="pygments highlight"><code data-lang="c++"><span></span><span class="tok-k">enum</span><span class="tok-w"> </span><a href="#xml_node_type">xml_node_type</a>
<span class="tok-w">    </span><a href="#node_null">node_null</a>
<span class="tok-w">    </span><a href="#node_document">node_document</a>
<span class="tok-w">    </span><a href="#node_element">node_element</a>
<span class="tok-w">    </span><a href="#node_pcdata">node_pcdata</a>
<span class="tok-w">    </span><a href="#node_cdata">node_cdata</a>
<span class="tok-w">    </span><a href="#node_comment">node_comment</a>
<span class="tok-w">    </span><a href="#node_pi">node_pi</a>
<span class="tok-w">    </span><a href="#node_declaration">node_declaration</a>
<span class="tok-w">    </span><a href="#node_doctype">node_doctype</a>

<span class="tok-k">enum</span><span class="tok-w"> </span><a href="#xml_parse_status">xml_parse_status</a>
<span class="tok-w">    </span><a href="#status_ok">status_ok</a>
<span class="tok-w">    </span><a href="#status_file_not_found">status_file_not_found</a>
<span class="tok-w">    </span><a href="#status_io_error">status_io_error</a>
<span class="tok-w">    </span><a href="#status_out_of_memory">status_out_of_memory</a>
<span class="tok-w">    </span><a href="#status_internal_error">status_internal_error</a>
<span class="tok-w">    </span><a href="#status_unrecognized_tag">status_unrecognized_tag</a>
<span class="tok-w">    </span><a href="#status_bad_pi">status_bad_pi</a>
<span class="tok-w">    </span><a href="#status_bad_comment">status_bad_comment</a>
<span class="tok-w">    </span><a href="#status_bad_cdata">status_bad_cdata</a>
<span class="tok-w">    </span><a href="#status_bad_doctype">status_bad_doctype</a>
<span class="tok-w">    </span><a href="#status_bad_pcdata">status_bad_pcdata</a>
<span class="tok-w">    </span><a href="#status_bad_start_element">status_bad_start_element</a>
<span class="tok-w">    </span><a href="#status_bad_attribute">status_bad_attribute</a>
<span class="tok-w">    </span><a href="#status_bad_end_element">status_bad_end_element</a>
<span class="tok-w">    </span><a href="#status_end_element_mismatch">status_end_element_mismatch</a>
<span class="tok-w">    </span><a href="#status_append_invalid_root">status_append_invalid_root</a>
<span class="tok-w">    </span><a href="#status_no_document_element">status_no_document_element</a>

<span class="tok-k">enum</span><span class="tok-w"> </span><a href="#xml_encoding">xml_encoding</a>
<span class="tok-w">    </span><a href="#encoding_auto">encoding_auto</a>
<span class="tok-w">    </span><a href="#encoding_utf8">encoding_utf8</a>
<span class="tok-w">    </span><a href="#encoding_utf16_le">encoding_utf16_le</a>
<span class="tok-w">    </span><a href="#encoding_utf16_be">encoding_utf16_be</a>
<span class="tok-w">    </span><a href="#encoding_utf16">encoding_utf16</a>
<span class="tok-w">    </span><a href="#encoding_utf32_le">encoding_utf32_le</a>
<span class="tok-w">    </span><a href="#encoding_utf32_be">encoding_utf32_be</a>
<span class="tok-w">    </span><a href="#encoding_utf32">encoding_utf32</a>
<span class="tok-w">    </span><a href="#encoding_wchar">encoding_wchar</a>
<span class="tok-w">    </span><a href="#encoding_latin1">encoding_latin1</a>

<span class="tok-k">enum</span><span class="tok-w"> </span><a href="#xpath_value_type">xpath_value_type</a>
<span class="tok-w">    </span><a href="#xpath_type_none">xpath_type_none</a>
<span class="tok-w">    </span><a href="#xpath_type_node_set">xpath_type_node_set</a>
<span class="tok-w">    </span><a href="#xpath_type_number">xpath_type_number</a>
<span class="tok-w">    </span><a href="#xpath_type_string">xpath_type_string</a>
<span class="tok-w">    </span><a href="#xpath_type_boolean">xpath_type_boolean</a></code></pre>

</div>

</div>

</div>

<div class="sect2">

<span id="apiref.constants"></span>

### <a href="#apiref.constants" class="anchor"></a><a href="#apiref.constants" class="link">10.4. Constants</a>

<div class="listingblock">

<div class="content">

<pre class="pygments highlight"><code data-lang="c++"><span></span><span class="tok-c1">// Formatting options bit flags:</span>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#format_attribute_single_quote">format_attribute_single_quote</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#format_default">format_default</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#format_indent">format_indent</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#format_indent_attributes">format_indent_attributes</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#format_no_declaration">format_no_declaration</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#format_no_empty_element_tags">format_no_empty_element_tags</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#format_no_escapes">format_no_escapes</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#format_raw">format_raw</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#format_save_file_text">format_save_file_text</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#format_skip_control_chars">format_skip_control_chars</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#format_write_bom">format_write_bom</a>

<span class="tok-c1">// Parsing options bit flags:</span>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_cdata">parse_cdata</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_comments">parse_comments</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_declaration">parse_declaration</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_default">parse_default</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_doctype">parse_doctype</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_eol">parse_eol</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_escapes">parse_escapes</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_fragment">parse_fragment</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_full">parse_full</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_minimal">parse_minimal</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_pi">parse_pi</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_trim_pcdata">parse_trim_pcdata</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_ws_pcdata">parse_ws_pcdata</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_ws_pcdata_single">parse_ws_pcdata_single</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_embed_pcdata">parse_embed_pcdata</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_merge_pcdata">parse_merge_pcdata</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_wconv_attribute">parse_wconv_attribute</a>
<span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#parse_wnorm_attribute">parse_wnorm_attribute</a></code></pre>

</div>

</div>

</div>

<div class="sect2">

<span id="apiref.classes"></span>

### <a href="#apiref.classes" class="anchor"></a><a href="#apiref.classes" class="link">10.5. Classes</a>

<div class="listingblock">

<div class="content">

<pre class="pygments highlight"><code data-lang="c++"><span></span><span class="tok-k">class</span> <a href="#xml_attribute">xml_attribute</a>
<span class="tok-w">    </span><a href="#xml_attribute::ctor">xml_attribute</a><span class="tok-p">();</span>

<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::empty">empty</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-k">operator</span><span class="tok-w"> </span><a href="#xml_attribute::unspecified_bool_type">unspecified_bool_type</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::comparison">operator==</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">r</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::comparison">operator!=</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">r</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::comparison">operator&lt;</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">r</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::comparison">operator&gt;</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">r</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::comparison">operator&lt;=</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">r</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::comparison">operator&gt;=</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">r</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-kt">size_t</span><span class="tok-w"> </span><a href="#xml_attribute::hash_value">hash_value</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_attribute::next_attribute">next_attribute</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_attribute::previous_attribute">previous_attribute</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xml_attribute::name">name</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xml_attribute::value">value</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xml_attribute::as_string">as_string</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">def</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-s">""</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#xml_attribute::as_int">as_int</a><span class="tok-p">(</span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">def</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#xml_attribute::as_uint">as_uint</a><span class="tok-p">(</span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">def</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">double</span><span class="tok-w"> </span><a href="#xml_attribute::as_double">as_double</a><span class="tok-p">(</span><span class="tok-kt">double</span><span class="tok-w"> </span><span class="tok-n">def</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">float</span><span class="tok-w"> </span><a href="#xml_attribute::as_float">as_float</a><span class="tok-p">(</span><span class="tok-kt">float</span><span class="tok-w"> </span><span class="tok-n">def</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::as_bool">as_bool</a><span class="tok-p">(</span><span class="tok-kt">bool</span><span class="tok-w"> </span><span class="tok-n">def</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-nb">false</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><a href="#xml_attribute::as_llong">as_llong</a><span class="tok-p">(</span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">def</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><a href="#xml_attribute::as_ullong">as_ullong</a><span class="tok-p">(</span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">def</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_name">set_name</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_name">set_name</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">size_t</span><span class="tok-w"> </span><span class="tok-n">size</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_name">set_name</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_value">set_value</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_value">set_value</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">size_t</span><span class="tok-w"> </span><span class="tok-n">size</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_value">set_value</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_value">set_value</a><span class="tok-p">(</span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_value">set_value</a><span class="tok-p">(</span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_value">set_value</a><span class="tok-p">(</span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_value">set_value</a><span class="tok-p">(</span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_value">set_value</a><span class="tok-p">(</span><span class="tok-kt">double</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_value">set_value</a><span class="tok-p">(</span><span class="tok-kt">double</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">precision</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_value">set_value</a><span class="tok-p">(</span><span class="tok-kt">float</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_value">set_value</a><span class="tok-p">(</span><span class="tok-kt">float</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">precision</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_value">set_value</a><span class="tok-p">(</span><span class="tok-kt">bool</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_value">set_value</a><span class="tok-p">(</span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_attribute::set_value">set_value</a><span class="tok-p">(</span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_attribute::assign">operator=</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_attribute::assign">operator=</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_attribute::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_attribute::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_attribute::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_attribute::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_attribute::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">double</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_attribute::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">float</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_attribute::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">bool</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_attribute::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_attribute::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>

<span class="tok-k">class</span> <a href="#xml_node">xml_node</a>
<span class="tok-w">    </span><a href="#xml_node::ctor">xml_node</a><span class="tok-p">();</span>

<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::empty">empty</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-k">operator</span><span class="tok-w"> </span><a href="#xml_node::unspecified_bool_type">unspecified_bool_type</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::comparison">operator==</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">r</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::comparison">operator!=</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">r</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::comparison">operator&lt;</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">r</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::comparison">operator&gt;</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">r</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::comparison">operator&lt;=</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">r</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::comparison">operator&gt;=</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">r</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-kt">size_t</span><span class="tok-w"> </span><a href="#xml_node::hash_value">hash_value</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-n">xml_node_type</span><span class="tok-w"> </span><a href="#xml_node::type">type</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xml_node::name">name</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xml_node::value">value</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::parent">parent</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::first_child">first_child</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::last_child">last_child</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::next_sibling">next_sibling</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::previous_sibling">previous_sibling</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::first_attribute">first_attribute</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::last_attribute">last_attribute</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-n">implementation</span><span class="tok-o">-</span><span class="tok-n">defined</span><span class="tok-o">-</span><span class="tok-n">type</span><span class="tok-w"> </span><a href="#xml_node::children">children</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">implementation</span><span class="tok-o">-</span><span class="tok-n">defined</span><span class="tok-o">-</span><span class="tok-n">type</span><span class="tok-w"> </span><a href="#xml_node::children">children</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">implementation</span><span class="tok-o">-</span><span class="tok-n">defined</span><span class="tok-o">-</span><span class="tok-n">type</span><span class="tok-w"> </span><a href="#xml_node::attributes">attributes</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::child">child</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::child">child</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::attribute">attribute</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::attribute">attribute</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::next_sibling_name">next_sibling</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::next_sibling_name">next_sibling</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::previous_sibling_name">previous_sibling</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::previous_sibling_name">previous_sibling</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::attribute_hinted">attribute</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">hint</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::attribute_hinted">attribute</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">hint</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::find_child_by_attribute">find_child_by_attribute</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">attr_name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">attr_value</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::find_child_by_attribute">find_child_by_attribute</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">attr_name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">attr_value</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xml_node::child_value">child_value</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xml_node::child_value">child_value</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_text</span><span class="tok-w"> </span><a href="#xml_node::text">text</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-k">typedef</span><span class="tok-w"> </span><span class="tok-n">xml_node_iterator</span><span class="tok-w"> </span><a href="#xml_node_iterator">iterator</a><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">iterator</span><span class="tok-w"> </span><a href="#xml_node::begin">begin</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">iterator</span><span class="tok-w"> </span><a href="#xml_node::end">end</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-k">typedef</span><span class="tok-w"> </span><span class="tok-n">xml_attribute_iterator</span><span class="tok-w"> </span><a href="#xml_attribute_iterator">attribute_iterator</a><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">attribute_iterator</span><span class="tok-w"> </span><a href="#xml_node::attributes_begin">attributes_begin</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">attribute_iterator</span><span class="tok-w"> </span><a href="#xml_node::attributes_end">attributes_end</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::traverse">traverse</a><span class="tok-p">(</span><span class="tok-n">xml_tree_walker</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">walker</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-k">template</span><span class="tok-w"> </span><span class="tok-o">&lt;</span><span class="tok-k">typename</span><span class="tok-w"> </span><span class="tok-nc">Predicate</span><span class="tok-o">&gt;</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::find_attribute">find_attribute</a><span class="tok-p">(</span><span class="tok-n">Predicate</span><span class="tok-w"> </span><span class="tok-n">pred</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-k">template</span><span class="tok-w"> </span><span class="tok-o">&lt;</span><span class="tok-k">typename</span><span class="tok-w"> </span><span class="tok-nc">Predicate</span><span class="tok-o">&gt;</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::find_child">find_child</a><span class="tok-p">(</span><span class="tok-n">Predicate</span><span class="tok-w"> </span><span class="tok-n">pred</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-k">template</span><span class="tok-w"> </span><span class="tok-o">&lt;</span><span class="tok-k">typename</span><span class="tok-w"> </span><span class="tok-nc">Predicate</span><span class="tok-o">&gt;</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::find_node">find_node</a><span class="tok-p">(</span><span class="tok-n">Predicate</span><span class="tok-w"> </span><span class="tok-n">pred</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-n">string_t</span><span class="tok-w"> </span><a href="#xml_node::path">path</a><span class="tok-p">(</span><span class="tok-n">char_t</span><span class="tok-w"> </span><span class="tok-n">delimiter</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-sc">'/'</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::first_element_by_path">first_element_by_path</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">path</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-w"> </span><span class="tok-n">delimiter</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-sc">'/'</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::root">root</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">ptrdiff_t</span><span class="tok-w"> </span><a href="#xml_node::offset_debug">offset_debug</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::set_name">set_name</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::set_name">set_name</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">size_t</span><span class="tok-w"> </span><span class="tok-n">size</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::set_name">set_name</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::set_value">set_value</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::set_value">set_value</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">size_t</span><span class="tok-w"> </span><span class="tok-n">size</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::set_value">set_value</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::append_attribute">append_attribute</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::append_attribute">append_attribute</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::prepend_attribute">prepend_attribute</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::prepend_attribute">prepend_attribute</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::insert_attribute_after">insert_attribute_after</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">attr</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::insert_attribute_after">insert_attribute_after</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">attr</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::insert_attribute_before">insert_attribute_before</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">attr</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::insert_attribute_before">insert_attribute_before</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">attr</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::append_child">append_child</a><span class="tok-p">(</span><span class="tok-n">xml_node_type</span><span class="tok-w"> </span><span class="tok-n">type</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">node_element</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::prepend_child">prepend_child</a><span class="tok-p">(</span><span class="tok-n">xml_node_type</span><span class="tok-w"> </span><span class="tok-n">type</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">node_element</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::insert_child_after">insert_child_after</a><span class="tok-p">(</span><span class="tok-n">xml_node_type</span><span class="tok-w"> </span><span class="tok-n">type</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">node</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::insert_child_before">insert_child_before</a><span class="tok-p">(</span><span class="tok-n">xml_node_type</span><span class="tok-w"> </span><span class="tok-n">type</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">node</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::append_child">append_child</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::append_child">append_child</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::prepend_child">prepend_child</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::prepend_child">prepend_child</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::insert_child_after">insert_child_after</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">node</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::insert_child_after">insert_child_after</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">node</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::insert_child_before">insert_child_before</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">node</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::insert_child_before">insert_child_before</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">node</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::ensure_attribute">ensure_attribute</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::ensure_attribute">ensure_attribute</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::ensure_child">ensure_child</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::ensure_child">ensure_child</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::append_copy">append_copy</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">proto</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::prepend_copy">prepend_copy</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">proto</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::insert_copy_after">insert_copy_after</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">proto</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">attr</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xml_node::insert_copy_before">insert_copy_before</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">proto</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">attr</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::append_copy">append_copy</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">proto</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::prepend_copy">prepend_copy</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">proto</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::insert_copy_after">insert_copy_after</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">proto</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">node</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::insert_copy_before">insert_copy_before</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">proto</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">node</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::append_move">append_move</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">moved</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::prepend_move">prepend_move</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">moved</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::insert_move_after">insert_move_after</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">moved</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">node</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_node::insert_move_before">insert_move_before</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">moved</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">node</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::remove_attribute">remove_attribute</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">a</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::remove_attribute">remove_attribute</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::remove_attribute">remove_attribute</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::remove_attributes">remove_attributes</a><span class="tok-p">();</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::remove_child">remove_child</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">n</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::remove_child">remove_child</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::remove_child">remove_child</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_node::remove_children">remove_children</a><span class="tok-p">();</span>

<span class="tok-w">    </span><span class="tok-n">xml_parse_result</span><span class="tok-w"> </span><a href="#xml_node::append_buffer">append_buffer</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">void</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">contents</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">size_t</span><span class="tok-w"> </span><span class="tok-n">size</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">options</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">parse_default</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xml_encoding</span><span class="tok-w"> </span><span class="tok-n">encoding</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">encoding_auto</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-kt">void</span><span class="tok-w"> </span><a href="#xml_node::print">print</a><span class="tok-p">(</span><span class="tok-n">xml_writer</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">writer</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">indent</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-s">"</span><span class="tok-se">\t</span><span class="tok-s">"</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">flags</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">format_default</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xml_encoding</span><span class="tok-w"> </span><span class="tok-n">encoding</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">encoding_auto</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">depth</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">void</span><span class="tok-w"> </span><a href="#xml_node::print_stream">print</a><span class="tok-p">(</span><span class="tok-n">std</span><span class="tok-o">::</span><span class="tok-n">ostream</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">os</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">indent</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-s">"</span><span class="tok-se">\t</span><span class="tok-s">"</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">flags</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">format_default</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xml_encoding</span><span class="tok-w"> </span><span class="tok-n">encoding</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">encoding_auto</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">depth</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">void</span><span class="tok-w"> </span><a href="#xml_node::print_stream">print</a><span class="tok-p">(</span><span class="tok-n">std</span><span class="tok-o">::</span><span class="tok-n">wostream</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">os</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">indent</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-s">"</span><span class="tok-se">\t</span><span class="tok-s">"</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">flags</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">format_default</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">depth</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-n">xpath_node</span><span class="tok-w"> </span><a href="#xml_node::select_node">select_node</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">query</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xpath_variable_set</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">variables</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xpath_node</span><span class="tok-w"> </span><a href="#xml_node::select_node_precomp">select_node</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_query</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">query</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xpath_node_set</span><span class="tok-w"> </span><a href="#xml_node::select_nodes">select_nodes</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">query</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xpath_variable_set</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">variables</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xpath_node_set</span><span class="tok-w"> </span><a href="#xml_node::select_nodes_precomp">select_nodes</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_query</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">query</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-k">class</span> <a href="#xml_document">xml_document</a>
<span class="tok-w">    </span><a href="#xml_document::ctor">xml_document</a><span class="tok-p">();</span>
<span class="tok-w">    </span><span class="tok-o">~</span><a href="#xml_document::dtor">xml_document</a><span class="tok-p">();</span>

<span class="tok-w">    </span><span class="tok-kt">void</span><span class="tok-w"> </span><a href="#xml_document::reset">reset</a><span class="tok-p">();</span>
<span class="tok-w">    </span><span class="tok-kt">void</span><span class="tok-w"> </span><a href="#xml_document::reset">reset</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_document</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">proto</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-n">xml_parse_result</span><span class="tok-w"> </span><a href="#xml_document::load_stream">load</a><span class="tok-p">(</span><span class="tok-n">std</span><span class="tok-o">::</span><span class="tok-n">istream</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">stream</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">options</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">parse_default</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xml_encoding</span><span class="tok-w"> </span><span class="tok-n">encoding</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">encoding_auto</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_parse_result</span><span class="tok-w"> </span><a href="#xml_document::load_stream">load</a><span class="tok-p">(</span><span class="tok-n">std</span><span class="tok-o">::</span><span class="tok-n">wistream</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">stream</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">options</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">parse_default</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-n">xml_parse_result</span><span class="tok-w"> </span><a href="#xml_document::load_string">load_string</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">contents</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">options</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">parse_default</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-n">xml_parse_result</span><span class="tok-w"> </span><a href="#xml_document::load_file">load_file</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">char</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">path</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">options</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">parse_default</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xml_encoding</span><span class="tok-w"> </span><span class="tok-n">encoding</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">encoding_auto</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_parse_result</span><span class="tok-w"> </span><a href="#xml_document::load_file_wide">load_file</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">wchar_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">path</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">options</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">parse_default</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xml_encoding</span><span class="tok-w"> </span><span class="tok-n">encoding</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">encoding_auto</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-n">xml_parse_result</span><span class="tok-w"> </span><a href="#xml_document::load_buffer">load_buffer</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">void</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">contents</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">size_t</span><span class="tok-w"> </span><span class="tok-n">size</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">options</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">parse_default</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xml_encoding</span><span class="tok-w"> </span><span class="tok-n">encoding</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">encoding_auto</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_parse_result</span><span class="tok-w"> </span><a href="#xml_document::load_buffer_inplace">load_buffer_inplace</a><span class="tok-p">(</span><span class="tok-kt">void</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">contents</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">size_t</span><span class="tok-w"> </span><span class="tok-n">size</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">options</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">parse_default</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xml_encoding</span><span class="tok-w"> </span><span class="tok-n">encoding</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">encoding_auto</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_parse_result</span><span class="tok-w"> </span><a href="#xml_document::load_buffer_inplace_own">load_buffer_inplace_own</a><span class="tok-p">(</span><span class="tok-kt">void</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">contents</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">size_t</span><span class="tok-w"> </span><span class="tok-n">size</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">options</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">parse_default</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xml_encoding</span><span class="tok-w"> </span><span class="tok-n">encoding</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">encoding_auto</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_document::save_file">save_file</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">char</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">path</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">indent</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-s">"</span><span class="tok-se">\t</span><span class="tok-s">"</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">flags</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">format_default</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xml_encoding</span><span class="tok-w"> </span><span class="tok-n">encoding</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">encoding_auto</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_document::save_file_wide">save_file</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">wchar_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">path</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">indent</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-s">"</span><span class="tok-se">\t</span><span class="tok-s">"</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">flags</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">format_default</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xml_encoding</span><span class="tok-w"> </span><span class="tok-n">encoding</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">encoding_auto</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-kt">void</span><span class="tok-w"> </span><a href="#xml_document::save_stream">save</a><span class="tok-p">(</span><span class="tok-n">std</span><span class="tok-o">::</span><span class="tok-n">ostream</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">stream</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">indent</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-s">"</span><span class="tok-se">\t</span><span class="tok-s">"</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">flags</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">format_default</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xml_encoding</span><span class="tok-w"> </span><span class="tok-n">encoding</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">encoding_auto</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">void</span><span class="tok-w"> </span><a href="#xml_document::save_stream">save</a><span class="tok-p">(</span><span class="tok-n">std</span><span class="tok-o">::</span><span class="tok-n">wostream</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">stream</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">indent</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-s">"</span><span class="tok-se">\t</span><span class="tok-s">"</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">flags</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">format_default</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-kt">void</span><span class="tok-w"> </span><a href="#xml_document::save">save</a><span class="tok-p">(</span><span class="tok-n">xml_writer</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">writer</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">indent</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-s">"</span><span class="tok-se">\t</span><span class="tok-s">"</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">flags</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">format_default</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xml_encoding</span><span class="tok-w"> </span><span class="tok-n">encoding</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">encoding_auto</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_document::document_element">document_element</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-k">struct</span> <a href="#xml_parse_result">xml_parse_result</a>
<span class="tok-w">    </span><span class="tok-n">xml_parse_status</span><span class="tok-w"> </span><a href="#xml_parse_result::status">status</a><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">ptrdiff_t</span><span class="tok-w"> </span><a href="#xml_parse_result::offset">offset</a><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_encoding</span><span class="tok-w"> </span><a href="#xml_parse_result::encoding">encoding</a><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-k">operator</span><span class="tok-w"> </span><a href="#xml_parse_result::bool">bool</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">char</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xml_parse_result::description">description</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-k">class</span> <a href="#xml_node_iterator">xml_node_iterator</a>
<span class="tok-k">class</span> <a href="#xml_attribute_iterator">xml_attribute_iterator</a>

<span class="tok-k">class</span> <a href="#xml_tree_walker">xml_tree_walker</a>
<span class="tok-w">    </span><span class="tok-k">virtual</span><span class="tok-w"> </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_tree_walker::begin">begin</a><span class="tok-p">(</span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">node</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-k">virtual</span><span class="tok-w"> </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_tree_walker::for_each">for_each</a><span class="tok-p">(</span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">node</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-k">virtual</span><span class="tok-w"> </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_tree_walker::end">end</a><span class="tok-p">(</span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">node</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#xml_tree_walker::depth">depth</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-k">class</span> <a href="#xml_text">xml_text</a>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_text::empty">empty</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-k">operator</span><span class="tok-w"> </span><a href="#xml_text::unspecified_bool_type">unspecified_bool_type</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xml_text::get">get</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xml_text::as_string">as_string</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">def</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-s">""</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#xml_text::as_int">as_int</a><span class="tok-p">(</span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">def</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><a href="#xml_text::as_uint">as_uint</a><span class="tok-p">(</span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">def</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">double</span><span class="tok-w"> </span><a href="#xml_text::as_double">as_double</a><span class="tok-p">(</span><span class="tok-kt">double</span><span class="tok-w"> </span><span class="tok-n">def</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">float</span><span class="tok-w"> </span><a href="#xml_text::as_float">as_float</a><span class="tok-p">(</span><span class="tok-kt">float</span><span class="tok-w"> </span><span class="tok-n">def</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_text::as_bool">as_bool</a><span class="tok-p">(</span><span class="tok-kt">bool</span><span class="tok-w"> </span><span class="tok-n">def</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-nb">false</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><a href="#xml_text::as_llong">as_llong</a><span class="tok-p">(</span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">def</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><a href="#xml_text::as_ullong">as_ullong</a><span class="tok-p">(</span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">def</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_text::set">set</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_text::set">set</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">size_t</span><span class="tok-w"> </span><span class="tok-n">size</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_text::set">set</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_text::set_value">set</a><span class="tok-p">(</span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_text::set_value">set</a><span class="tok-p">(</span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_text::set_value">set</a><span class="tok-p">(</span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_text::set_value">set</a><span class="tok-p">(</span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_text::set_value">set</a><span class="tok-p">(</span><span class="tok-kt">double</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_text::set_value">set</a><span class="tok-p">(</span><span class="tok-kt">double</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">precision</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_text::set_value">set</a><span class="tok-p">(</span><span class="tok-kt">float</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_text::set_value">set</a><span class="tok-p">(</span><span class="tok-kt">float</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">precision</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_text::set_value">set</a><span class="tok-p">(</span><span class="tok-kt">bool</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_text::set_value">set</a><span class="tok-p">(</span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xml_text::set_value">set</a><span class="tok-p">(</span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-n">xml_text</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_text::assign">operator=</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_text</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_text::assign">operator=</a><span class="tok-p">(</span><span class="tok-n">string_view_t</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_text</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_text::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_text</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_text::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">int</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_text</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_text::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_text</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_text::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_text</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_text::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">double</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_text</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_text::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">float</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_text</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_text::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">bool</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_text</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_text::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-n">xml_text</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xml_text::assign">operator=</a><span class="tok-p">(</span><span class="tok-kt">unsigned</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-kt">long</span><span class="tok-w"> </span><span class="tok-n">rhs</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xml_text::data">data</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-k">class</span> <a href="#xml_writer">xml_writer</a>
<span class="tok-w">    </span><span class="tok-k">virtual</span><span class="tok-w"> </span><span class="tok-kt">void</span><span class="tok-w"> </span><a href="#xml_writer::write">write</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">void</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">data</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">size_t</span><span class="tok-w"> </span><span class="tok-n">size</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">;</span>

<span class="tok-k">class</span> <a href="#xml_writer_file">xml_writer_file</a><span class="tok-o">:</span><span class="tok-w"> </span><span class="tok-k">public</span><span class="tok-w"> </span><span class="tok-n">xml_writer</span>
<span class="tok-w">    </span><a href="#xml_writer_file">xml_writer_file</a><span class="tok-p">(</span><span class="tok-kt">void</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">file</span><span class="tok-p">);</span>

<span class="tok-k">class</span> <a href="#xml_writer_stream">xml_writer_stream</a><span class="tok-o">:</span><span class="tok-w"> </span><span class="tok-k">public</span><span class="tok-w"> </span><span class="tok-n">xml_writer</span>
<span class="tok-w">    </span><a href="#xml_writer_stream">xml_writer_stream</a><span class="tok-p">(</span><span class="tok-n">std</span><span class="tok-o">::</span><span class="tok-n">ostream</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">stream</span><span class="tok-p">);</span>
<span class="tok-w">    </span><a href="#xml_writer_stream">xml_writer_stream</a><span class="tok-p">(</span><span class="tok-n">std</span><span class="tok-o">::</span><span class="tok-n">wostream</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">stream</span><span class="tok-p">);</span>

<span class="tok-k">struct</span> <a href="#xpath_parse_result">xpath_parse_result</a>
<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">char</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xpath_parse_result::error">error</a><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">ptrdiff_t</span><span class="tok-w"> </span><a href="#xpath_parse_result::offset">offset</a><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-k">operator</span><span class="tok-w"> </span><a href="#xpath_parse_result::bool">bool</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">char</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xpath_parse_result::description">description</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-k">class</span> <a href="#xpath_query">xpath_query</a>
<span class="tok-w">    </span><span class="tok-k">explicit</span><span class="tok-w"> </span><a href="#xpath_query::ctor">xpath_query</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">query</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xpath_variable_set</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">variables</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-mi">0</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xpath_query::evaluate_boolean">evaluate_boolean</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">n</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">double</span><span class="tok-w"> </span><a href="#xpath_query::evaluate_number">evaluate_number</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">n</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">string_t</span><span class="tok-w"> </span><a href="#xpath_query::evaluate_string">evaluate_string</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">n</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">size_t</span><span class="tok-w"> </span><a href="#xpath_query::evaluate_string_buffer">evaluate_string</a><span class="tok-p">(</span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">buffer</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">size_t</span><span class="tok-w"> </span><span class="tok-n">capacity</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">n</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xpath_node_set</span><span class="tok-w"> </span><a href="#xpath_query::evaluate_node_set">evaluate_node_set</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">n</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xpath_node</span><span class="tok-w"> </span><a href="#xpath_query::evaluate_node">evaluate_node</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">n</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-n">xpath_value_type</span><span class="tok-w"> </span><a href="#xpath_query::return_type">return_type</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_parse_result</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xpath_query::result">result</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-k">operator</span><span class="tok-w"> </span><a href="#xpath_query::unspecified_bool_type">unspecified_bool_type</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-k">class</span> <a href="#xpath_exception">xpath_exception</a><span class="tok-o">:</span><span class="tok-w"> </span><span class="tok-k">public</span><span class="tok-w"> </span><span class="tok-n">std</span><span class="tok-o">::</span><span class="tok-n">exception</span>
<span class="tok-w">    </span><span class="tok-k">virtual</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">char</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xpath_exception::what">what</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-k">noexcept</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_parse_result</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xpath_exception::result">result</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-k">class</span> <a href="#xpath_node">xpath_node</a>
<span class="tok-w">    </span><a href="#xpath_node::ctor">xpath_node</a><span class="tok-p">();</span>
<span class="tok-w">    </span><a href="#xpath_node::ctor">xpath_node</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">node</span><span class="tok-p">);</span>
<span class="tok-w">    </span><a href="#xpath_node::ctor">xpath_node</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_attribute</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">attribute</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xml_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">parent</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xpath_node::node">node</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_attribute</span><span class="tok-w"> </span><a href="#xpath_node::attribute">attribute</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xml_node</span><span class="tok-w"> </span><a href="#xpath_node::parent">parent</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-k">operator</span><span class="tok-w"> </span><a href="#xpath_node::unspecified_bool_type">unspecified_bool_type</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xpath_node::comparison">operator==</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">n</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xpath_node::comparison">operator!=</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">n</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-k">class</span> <a href="#xpath_node_set">xpath_node_set</a>
<span class="tok-w">    </span><a href="#xpath_node_set::ctor">xpath_node_set</a><span class="tok-p">();</span>
<span class="tok-w">    </span><a href="#xpath_node_set::ctor">xpath_node_set</a><span class="tok-p">(</span><span class="tok-n">const_iterator</span><span class="tok-w"> </span><span class="tok-n">begin</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">const_iterator</span><span class="tok-w"> </span><span class="tok-n">end</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">type_t</span><span class="tok-w"> </span><span class="tok-n">type</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-n">type_unsorted</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-k">typedef</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_node</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xpath_node_set::const_iterator">const_iterator</a><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">const_iterator</span><span class="tok-w"> </span><a href="#xpath_node_set::begin">begin</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">const_iterator</span><span class="tok-w"> </span><a href="#xpath_node_set::end">end</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_node</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xpath_node_set::index">operator[</a><span class="tok-p">](</span><span class="tok-kt">size_t</span><span class="tok-w"> </span><span class="tok-n">index</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">size_t</span><span class="tok-w"> </span><a href="#xpath_node_set::size">size</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xpath_node_set::empty">empty</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-n">xpath_node</span><span class="tok-w"> </span><a href="#xpath_node_set::first">first</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-k">enum</span><span class="tok-w"> </span><span class="tok-nc">type_t</span><span class="tok-w"> </span><span class="tok-p">{</span><a href="#xpath_node_set::type_unsorted">type_unsorted</a><span class="tok-p">,</span><span class="tok-w"> </span><a href="#xpath_node_set::type_sorted">type_sorted</a><span class="tok-p">,</span><span class="tok-w"> </span><a href="#xpath_node_set::type_sorted_reverse">type_sorted_reverse</a><span class="tok-p">};</span>
<span class="tok-w">    </span><span class="tok-n">type_t</span><span class="tok-w"> </span><a href="#xpath_node_set::type">type</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">void</span><span class="tok-w"> </span><a href="#xpath_node_set::sort">sort</a><span class="tok-p">(</span><span class="tok-kt">bool</span><span class="tok-w"> </span><span class="tok-n">reverse</span><span class="tok-w"> </span><span class="tok-o">=</span><span class="tok-w"> </span><span class="tok-nb">false</span><span class="tok-p">);</span>

<span class="tok-k">class</span> <a href="#xpath_variable">xpath_variable</a>
<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xpath_variable::name">name</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-n">xpath_value_type</span><span class="tok-w"> </span><a href="#xpath_variable::type">type</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xpath_variable::get_boolean">get_boolean</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-kt">double</span><span class="tok-w"> </span><a href="#xpath_variable::get_number">get_number</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xpath_variable::get_string">get_string</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>
<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_node_set</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><a href="#xpath_variable::get_node_set">get_node_set</a><span class="tok-p">()</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span>

<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xpath_variable::set">set</a><span class="tok-p">(</span><span class="tok-kt">bool</span><span class="tok-w"> </span><span class="tok-n">value</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xpath_variable::set">set</a><span class="tok-p">(</span><span class="tok-kt">double</span><span class="tok-w"> </span><span class="tok-n">value</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xpath_variable::set">set</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">value</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xpath_variable::set">set</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_node_set</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">value</span><span class="tok-p">);</span>

<span class="tok-k">class</span> <a href="#xpath_variable_set">xpath_variable_set</a>
<span class="tok-w">    </span><span class="tok-n">xpath_variable</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xpath_variable_set::add">add</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">xpath_value_type</span><span class="tok-w"> </span><span class="tok-n">type</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xpath_variable_set::set">set</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">bool</span><span class="tok-w"> </span><span class="tok-n">value</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xpath_variable_set::set">set</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-kt">double</span><span class="tok-w"> </span><span class="tok-n">value</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xpath_variable_set::set">set</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">value</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-kt">bool</span><span class="tok-w"> </span><a href="#xpath_variable_set::set">set</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_node_set</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">value</span><span class="tok-p">);</span>

<span class="tok-w">    </span><span class="tok-n">xpath_variable</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xpath_variable_set::get">get</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">);</span>
<span class="tok-w">    </span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">xpath_variable</span><span class="tok-o">*</span><span class="tok-w"> </span><a href="#xpath_variable_set::get">get</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">char_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">name</span><span class="tok-p">)</span><span class="tok-w"> </span><span class="tok-k">const</span><span class="tok-p">;</span></code></pre>

</div>

</div>

</div>

<div class="sect2">

<span id="apiref.functions"></span>

### <a href="#apiref.functions" class="anchor"></a><a href="#apiref.functions" class="link">10.6. Functions</a>

<div class="listingblock">

<div class="content">

<pre class="pygments highlight"><code data-lang="c++"><span></span><span class="tok-n">std</span><span class="tok-o">::</span><span class="tok-n">string</span><span class="tok-w"> </span><a href="#as_utf8">as_utf8</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">wchar_t</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">str</span><span class="tok-p">);</span>
<span class="tok-n">std</span><span class="tok-o">::</span><span class="tok-n">string</span><span class="tok-w"> </span><a href="#as_utf8">as_utf8</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">std</span><span class="tok-o">::</span><span class="tok-n">wstring</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">str</span><span class="tok-p">);</span>
<span class="tok-n">std</span><span class="tok-o">::</span><span class="tok-n">wstring</span><span class="tok-w"> </span><a href="#as_wide">as_wide</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-kt">char</span><span class="tok-o">*</span><span class="tok-w"> </span><span class="tok-n">str</span><span class="tok-p">);</span>
<span class="tok-n">std</span><span class="tok-o">::</span><span class="tok-n">wstring</span><span class="tok-w"> </span><a href="#as_wide">as_wide</a><span class="tok-p">(</span><span class="tok-k">const</span><span class="tok-w"> </span><span class="tok-n">std</span><span class="tok-o">::</span><span class="tok-n">string</span><span class="tok-o">&amp;</span><span class="tok-w"> </span><span class="tok-n">str</span><span class="tok-p">);</span>
<span class="tok-kt">void</span><span class="tok-w"> </span><a href="#set_memory_management_functions">set_memory_management_functions</a><span class="tok-p">(</span><span class="tok-n">allocation_function</span><span class="tok-w"> </span><span class="tok-n">allocate</span><span class="tok-p">,</span><span class="tok-w"> </span><span class="tok-n">deallocation_function</span><span class="tok-w"> </span><span class="tok-n">deallocate</span><span class="tok-p">);</span>
<span class="tok-n">allocation_function</span><span class="tok-w"> </span><a href="#get_memory_allocation_function">get_memory_allocation_function</a><span class="tok-p">();</span>
<span class="tok-n">deallocation_function</span><span class="tok-w"> </span><a href="#get_memory_deallocation_function">get_memory_deallocation_function</a><span class="tok-p">();</span></code></pre>

</div>

</div>

</div>

</div>

</div>

<div id="footnotes">

------------------------------------------------------------------------

<div id="_footnotedef_1" class="footnote">

[1](#_footnoteref_1). All trademarks used are properties of their respective owners.

</div>

</div>
