---
title: "Installation"
description: "pugixml 1.16 Installation complete official text."
licenseSource: "pugixml-manual-1.16"
---

<div class="sect1">

<span id="source-install"></span>

## <a href="#source-install" class="anchor"></a><a href="#source-install" class="link">2. Installation</a>

<div class="sectionbody">

<div class="sect2">

<span id="source-install.getting"></span>

### <a href="#source-install.getting" class="anchor"></a><a href="#source-install.getting" class="link">2.1. Getting pugixml</a>

<div class="paragraph">

pugixml is distributed in source form. You can either download a source distribution or clone the Git repository.

</div>

<div class="sect3">

<span id="source-install.getting.source"></span>

#### <a href="#source-install.getting.source" class="anchor"></a><a href="#source-install.getting.source" class="link">2.1.1. Source distributions</a>

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

<span id="source-install.getting.git"></span>

#### <a href="#source-install.getting.git" class="anchor"></a><a href="#source-install.getting.git" class="link">2.1.2. Git repository</a>

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

<span id="source-install.getting.packages"></span>

#### <a href="#source-install.getting.packages" class="anchor"></a><a href="#source-install.getting.packages" class="link">2.1.3. Packages</a>

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

<span id="source-install.building"></span>

### <a href="#source-install.building" class="anchor"></a><a href="#source-install.building" class="link">2.2. Building pugixml</a>

<div class="paragraph">

pugixml is distributed in source form without any pre-built binaries; you have to build them yourself.

</div>

<div class="paragraph">

The complete pugixml source consists of three files - one source file, `pugixml.cpp`, and two header files, `pugixml.hpp` and `pugiconfig.hpp`. `pugixml.hpp` is the primary header which you need to include in order to use pugixml classes/functions; `pugiconfig.hpp` is a supplementary configuration file (see [Additional configuration options](#source-install.building.config)). The rest of this guide assumes that `pugixml.hpp` is either in the current directory or in one of include directories of your projects, so that `#include "pugixml.hpp"` can find the header; however you can also use relative path (i.e. `#include "../libs/pugixml/src/pugixml.hpp"`) or include directory-relative path (i.e. `#include <xml/thirdparty/pugixml/src/pugixml.hpp>`).

</div>

<div class="sect3">

<span id="source-install.building.embed"></span>

#### <a href="#source-install.building.embed" class="anchor"></a><a href="#source-install.building.embed" class="link">2.2.1. Building pugixml as a part of another static library/executable</a>

<div class="paragraph">

The easiest way to build pugixml is to compile the source file, `pugixml.cpp`, along with the existing library/executable. This process depends on the method of building your application; for example, if you’re using Microsoft Visual Studio <sup>\[<a href="#source-_footnotedef_1" id="source-_footnoteref_1" class="footnote" title="View footnote.">1</a>\]</sup>, Apple Xcode, Code::Blocks or any other IDE, just **add `pugixml.cpp` to one of your projects**.

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
<a href="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_pch1.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_pch1.png" alt="vs2005 pch1" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_pch2.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_pch2.png" alt="vs2005 pch2" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_pch3.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_pch3.png" alt="vs2005 pch3" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_pch4.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_pch4.png" alt="vs2005 pch4" /></a>
</div>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="sect3">

<span id="source-install.building.static"></span>

#### <a href="#source-install.building.static" class="anchor"></a><a href="#source-install.building.static" class="link">2.2.2. Building pugixml as a standalone static library</a>

<div class="paragraph">

It’s possible to compile pugixml as a standalone static library. This process depends on the method of building your application; pugixml distribution comes with project files for several popular IDEs/build systems. There are project files for Apple XCode, Code::Blocks, Codelite, Microsoft Visual Studio 2005, 2008, 2010+, and configuration scripts for CMake and premake4. You’re welcome to submit project files/build scripts for other software; see [Feedback](/docs/pugixml/v1-16/en/02-manual/01-overview/#source-overview.feedback).

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
<a href="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_link1.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_link1.png" alt="vs2005 link1" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_link2.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_link2.png" alt="vs2005 link2" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="/docs/pugixml/assets/pugixml-v1-16/images/vs2010_link1.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/vs2010_link1.png" alt="vs2010 link1" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="/docs/pugixml/assets/pugixml-v1-16/images/vs2010_link2.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/vs2010_link2.png" alt="vs2010 link2" /></a>
</div>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="sect3">

<span id="source-install.building.shared"></span>

#### <a href="#source-install.building.shared" class="anchor"></a><a href="#source-install.building.shared" class="link">2.2.3. Building pugixml as a standalone shared library</a>

<div class="paragraph">

It’s possible to compile pugixml as a standalone shared library. The process is usually similar to the static library approach; however, no preconfigured projects/scripts are included into pugixml distribution, so you’ll have to do it yourself. Generally, if you’re using GCC-based toolchain, the process does not differ from building any other library as DLL (adding -shared to compilation flags should suffice); if you’re using MSVC-based toolchain, you’ll have to explicitly mark exported symbols with a declspec attribute. You can do it by defining [PUGIXML_API](#source-PUGIXML_API) macro, i.e. via `pugiconfig.hpp`:

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

<span id="source-install.building.header"></span>

#### <a href="#source-install.building.header" class="anchor"></a><a href="#source-install.building.header" class="link">2.2.4. Using pugixml in header-only mode</a>

<div id="source-PUGIXML_HEADER_ONLY" class="paragraph">

It’s possible to use pugixml in header-only mode. This means that all source code for pugixml will be included in every translation unit that includes `pugixml.hpp`. This is how most of Boost and STL libraries work.

</div>

<div class="paragraph">

Note that there are advantages and drawbacks of this approach. Header mode may improve tree traversal/modification performance (because many simple functions will be inlined), if your compiler toolchain does not support link-time optimization, or if you have it turned off (with link-time optimization the performance should be similar to non-header mode). However, since compiler now has to compile pugixml source once for each translation unit that includes it, compilation times may increase noticeably. If you want to use pugixml in header mode but do not need XPath support, you can consider disabling it by using [PUGIXML_NO_XPATH](#source-PUGIXML_NO_XPATH) define to improve compilation time.

</div>

<div class="paragraph">

To enable header-only mode, you have to define `PUGIXML_HEADER_ONLY`. You can either do it in `pugiconfig.hpp`, or provide them via compiler command-line.

</div>

<div class="paragraph">

Note that it is safe to compile `pugixml.cpp` if `PUGIXML_HEADER_ONLY` is defined - so if you want to i.e. use header-only mode only in Release configuration, you can include pugixml.cpp in your project (see [Building pugixml as a part of another static library/executable](#source-install.building.embed)), and conditionally enable header-only mode in `pugiconfig.hpp` like this:

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

<span id="source-install.building.config"></span>

#### <a href="#source-install.building.config" class="anchor"></a><a href="#source-install.building.config" class="link">2.2.5. Additional configuration options</a>

<div class="paragraph">

pugixml uses several defines to control the compilation process. There are two ways to define them: either put the needed definitions to `pugiconfig.hpp` (it has some examples that are commented out) or provide them via compiler command-line. Consistency is important: the definitions should match in all source files that include `pugixml.hpp` (including pugixml sources) throughout the application. Adding defines to `pugiconfig.hpp` lets you guarantee this, unless your macro definition is wrapped in preprocessor `#if`/`#ifdef` directive and this directive is not consistent. `pugiconfig.hpp` will never contain anything but comments, which means that when upgrading to a new version, you can safely leave your modified version intact.

</div>

<div class="paragraph">

<span id="source-PUGIXML_WCHAR_MODE"></span>`PUGIXML_WCHAR_MODE` define toggles between UTF-8 style interface (the in-memory text encoding is assumed to be UTF-8, most functions use `char` as character type) and UTF-16/32 style interface (the in-memory text encoding is assumed to be UTF-16/32, depending on `wchar_t` size, most functions use `wchar_t` as character type). See [Unicode interface](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-dom.unicode) for more details.

</div>

<div class="paragraph">

<span id="source-PUGIXML_CHARCONV_FLOAT"></span>`PUGIXML_CHARCONV_FLOAT` will use [\<charconv\>](https://en.cppreference.com/cpp/header/charconv) for floating-point number formatting instead of `<stdio.h>` functions, which requires C++17 and UTF-8 interface. Note that the conversion will then ignore the locale and always act as if the default `C` locale is used.

</div>

<div class="paragraph">

<span id="source-PUGIXML_COMPACT"></span>`PUGIXML_COMPACT` define activates a different internal representation of document storage that is much more memory efficient for documents with a lot of markup (i.e. nodes and attributes), but is slightly slower to parse and access. For details see [Compact mode](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-dom.memory.compact).

</div>

<div class="paragraph">

<span id="source-PUGIXML_NO_XPATH"></span>`PUGIXML_NO_XPATH` define disables XPath. Both XPath interfaces and XPath implementation are excluded from compilation. This option is provided in case you do not need XPath functionality and need to save code space.

</div>

<div class="paragraph">

<span id="source-PUGIXML_NO_STL"></span>`PUGIXML_NO_STL` define disables use of STL in pugixml. The functions that operate on STL types are no longer present (i.e. load/save via iostream) if this macro is defined. This option is provided in case your target platform does not have a standard-compliant STL implementation.

</div>

<div class="paragraph">

<span id="source-PUGIXML_NO_EXCEPTIONS"></span>`PUGIXML_NO_EXCEPTIONS` define disables use of exceptions in pugixml. This option is provided in case your target platform does not have exception handling capabilities.

</div>

<div class="paragraph">

<span id="source-PUGIXML_API"></span>`PUGIXML_API`, <span id="source-PUGIXML_CLASS"></span>`PUGIXML_CLASS` and <span id="source-PUGIXML_FUNCTION"></span>`PUGIXML_FUNCTION` defines let you specify custom attributes (i.e. declspec or calling conventions) for pugixml classes and non-member functions. In absence of `PUGIXML_CLASS` or `PUGIXML_FUNCTION` definitions, `PUGIXML_API` definition is used instead. For example, to specify fixed calling convention, you can define `PUGIXML_FUNCTION` to i.e. `__fastcall`. Another example is DLL import/export attributes in MSVC (see [Building pugixml as a standalone shared library](#source-install.building.shared)).

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

<span id="source-PUGIXML_MEMORY_PAGE_SIZE"></span>`PUGIXML_MEMORY_PAGE_SIZE`, <span id="source-PUGIXML_MEMORY_OUTPUT_STACK"></span>`PUGIXML_MEMORY_OUTPUT_STACK` and <span id="source-PUGIXML_MEMORY_XPATH_PAGE_SIZE"></span>`PUGIXML_MEMORY_XPATH_PAGE_SIZE` can be used to customize certain important sizes to optimize memory usage for the application-specific patterns. For details see [Memory consumption tuning](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-dom.memory.tuning).

</div>

<div class="paragraph">

<span id="source-PUGIXML_HAS_LONG_LONG"></span>`PUGIXML_HAS_LONG_LONG` define enables support for `long long` type in pugixml. This define is automatically enabled if your platform is known to have `long long` support (i.e. has C++11 support or uses a reasonably modern version of a known compiler); if pugixml does not recognize that your platform supports `long long` but in fact it does, you can enable the define manually.

</div>

<div class="paragraph">

<span id="source-PUGIXML_HAS_STRING_VIEW"></span>`PUGIXML_HAS_STRING_VIEW` define enables function overloads that accept `std::string_view` arguments. This define is automatically enabled if built targeting C++17 or later; if pugixml does not recognize that your platform supports `std::string_view` but in fact it does, you can enable the define manually.

</div>

</div>

</div>

<div class="sect2">

<span id="source-install.portability"></span>

### <a href="#source-install.portability" class="anchor"></a><a href="#source-install.portability" class="link">2.3. Portability</a>

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

<div id="source-footnotes">

------------------------------------------------------------------------

<div id="source-_footnotedef_1" class="footnote">

[1](#source-_footnoteref_1). All trademarks used are properties of their respective owners.

</div>

</div>
