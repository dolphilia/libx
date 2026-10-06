---
title: "Overview"
description: "pugixml 1.16 Overview complete official text."
licenseSource: "pugixml-manual-1.16"
---

<div class="sect1">

<span id="source-overview"></span>

## <a href="#source-overview" class="anchor"></a><a href="#source-overview" class="link">1. Overview</a>

<div class="sectionbody">

<div class="sect2">

<span id="source-overview.introduction"></span>

### <a href="#source-overview.introduction" class="anchor"></a><a href="#source-overview.introduction" class="link">1.1. Introduction</a>

<div class="paragraph">

[pugixml](https://pugixml.org/) is a light-weight C++ XML processing library. It consists of a DOM-like interface with rich traversal/modification capabilities, an extremely fast XML parser which constructs the DOM tree from an XML file/buffer, and an [XPath 1.0 implementation](/docs/pugixml/v1-16/en/02-manual/08-xpath/#source-xpath) for complex data-driven tree queries. Full Unicode support is also available, with [two Unicode interface variants](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-dom.unicode) and conversions between different Unicode encodings (which happen automatically during parsing/saving). The library is [extremely portable](/docs/pugixml/v1-16/en/02-manual/02-installation/#source-install.portability) and easy to integrate and use. pugixml is developed and maintained since 2006 and has many users. All code is distributed under the [MIT license](#source-overview.license), making it completely free to use in both open-source and proprietary applications.

</div>

<div class="paragraph">

pugixml enables very fast, convenient and memory-efficient XML document processing. However, since pugixml has a DOM parser, it can’t process XML documents that do not fit in memory; also the parser is a non-validating one, so if you need DTD or XML Schema validation, the library is not for you.

</div>

<div class="paragraph">

This is the complete manual for pugixml, which describes all features of the library in detail. If you want to start writing code as quickly as possible, you are advised to [read the quick start guide first](/docs/pugixml/v1-16/en/01-overview/01-quick-start/).

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

<span id="source-overview.feedback"></span>

### <a href="#source-overview.feedback" class="anchor"></a><a href="#source-overview.feedback" class="link">1.2. Feedback</a>

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

<span id="source-email"></span>

If filing an issue is not possible due to privacy or other concerns, you can contact pugixml author by e-mail directly: <arseny.kapoulkine@gmail.com>.

</div>

</div>

<div class="sect2">

<span id="source-overview.thanks"></span>

### <a href="#source-overview.thanks" class="anchor"></a><a href="#source-overview.thanks" class="link">1.3. Acknowledgments</a>

<div class="paragraph">

pugixml could not be developed without the help from many people; some of them are listed in this section. If you’ve played a part in pugixml development and you can not find yourself on this list, I’m truly sorry; please [send me an e-mail](#source-email) so I can fix this.

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

<span id="source-overview.license"></span>

### <a href="#source-overview.license" class="anchor"></a><a href="#source-overview.license" class="link">1.4. License</a>

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
