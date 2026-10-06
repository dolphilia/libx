---
title: "zlib manual page"
licenseSource: zlib-manual
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>Unofficial formatting of the complete fixed zlib 1.3.2 originals. Original source: zlib.3. <a href=\"https://zlib.net/zlib-1.3.2.tar.gz\">Official archive</a>; SHA-256: <code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>. Source file SHA-256: <code>5eebcb61a9c1ef91ff6c8e6d37b32554f5eefff825b190b1b5e5982f35d87534</code>. Original notices remain intact. This presentation and its translations are unofficial.</p><p><a href=\"../05-license/\">Full original license</a>. Plain source references outside this manual, including deflate.c, zutil.c, test/example.c, test/minigzip.c, ChangeLog and contrib, can be found in that fixed official archive.</p></aside>"}]
---


<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="0"><table class="head"><tr><td class="head-ltitle">ZLIB(3)</td><td class="head-vol">Library Functions Manual</td><td class="head-rtitle">ZLIB(3)</td></tr></table></div><div data-zlib-block="1">
<section class="Sh">
<h1 class="Sh" id="NAME"><a class="permalink" href="#NAME">NAME</a></h1>
<p class="Pp">zlib - compression/decompression library</p>
</section>
<section class="Sh">
<h1 class="Sh" id="SYNOPSIS"><a class="permalink" href="#SYNOPSIS">SYNOPSIS</a></h1>
<p class="Pp">[see <i><a href="../../01-api/01-overview/">zlib.h</a></i> for full description]</p>
</section>
<section class="Sh">
<h1 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">DESCRIPTION</a></h1>
<p class="Pp">The <i>zlib</i> library is a general purpose data compression
    library. The code is thread safe, assuming that the standard library
    functions used are thread safe, such as memory allocation routines. It
    provides in-memory compression and decompression functions, including
    integrity checks of the uncompressed data. This version of the library
    supports only one compression method (deflation) but other algorithms may be
    added later with the same stream interface.</p>
<p class="Pp">Compression can be done in a single step if the buffers are large
    enough or can be done by repeated calls of the compression function. In the
    latter case, the application must provide more input and/or consume the
    output (providing more output space) before each call.</p>
<p class="Pp">The library also supports reading and writing files in
    <i>gzip</i>(1) (.gz) format with an interface similar to that of stdio.</p>
<p class="Pp">The library does not install any signal handler. The decoder
    checks the consistency of the compressed data, so the library should never
    crash even in the case of corrupted input.</p>
<p class="Pp">All functions of the compression library are documented in the
    file <i><a href="../../01-api/01-overview/">zlib.h</a></i>. The distribution source includes examples of use of the
    library in the files <i>test/example.c</i> and <i>test/minigzip.c,</i> as
    well as other examples in the <i>examples/</i> directory.</p>
<p class="Pp">Changes to this version are documented in the file
    <i>ChangeLog</i> that accompanies the source.</p>
<p class="Pp"><i>zlib</i> is built in to many languages and operating systems,
    including but not limited to Java, Python, .NET, PHP, Perl, Ruby, Swift, and
    Go.</p>
<p class="Pp">An experimental package to read and write files in the .zip
    format, written on top of <i>zlib</i> by Gilles Vollant (info@winimage.com),
    is available at:</p>
<dl class="Bl-tag">
  <dt></dt>
  <dd><a href="https://www.winimage.com/zLibDll/minizip.html">https://www.winimage.com/zLibDll/minizip.html</a> and also in the
      <i>contrib/minizip</i> directory of the main <i>zlib</i> source
      distribution.</dd>
</dl>
</section>
<section class="Sh">
<h1 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE
  ALSO</a></h1>
<p class="Pp">The <i>zlib</i> web site can be found at:</p>
<dl class="Bl-tag">
  <dt></dt>
  <dd><a href="https://zlib.net/">https://zlib.net/</a></dd>
</dl>
<p class="Pp">The data format used by the <i>zlib</i> library is described by
    RFC (Request for Comments) 1950 to 1952 at:</p>
<dl class="Bl-tag">
  <dt></dt>
  <dd><a href="https://datatracker.ietf.org/doc/html/rfc1950">https://datatracker.ietf.org/doc/html/rfc1950</a> (for the zlib header and
      trailer format)
    <br/>
    <a href="https://datatracker.ietf.org/doc/html/rfc1951">https://datatracker.ietf.org/doc/html/rfc1951</a> (for the deflate compressed
      data format)
    <br/>
    <a href="https://datatracker.ietf.org/doc/html/rfc1952">https://datatracker.ietf.org/doc/html/rfc1952</a> (for the gzip header and
      trailer format)</dd>
</dl>
<p class="Pp">Mark Nelson wrote an article about <i>zlib</i> for the Jan. 1997
    issue of Dr. Dobb's Journal; a copy of the article is available at:</p>
<dl class="Bl-tag">
  <dt></dt>
  <dd><a href="https://zlib.net/nelson/">https://zlib.net/nelson/</a></dd>
</dl>
</section>
<section class="Sh">
<h1 class="Sh" id="REPORTING_PROBLEMS"><a class="permalink" href="#REPORTING_PROBLEMS">REPORTING
  PROBLEMS</a></h1>
<p class="Pp">Before reporting a problem, please check the <i>zlib</i> web site
    to verify that you have the latest version of <i>zlib</i>; otherwise, obtain
    the latest version and see if the problem still exists. Please read the
    <i>zlib</i> FAQ at:</p>
<dl class="Bl-tag">
  <dt></dt>
  <dd><a href="https://zlib.net/zlib_faq.html">https://zlib.net/zlib_faq.html</a></dd>
</dl>
<p class="Pp">before asking for help. Send questions and/or comments to
    zlib@gzip.org, or (for the Windows DLL version) to Gilles Vollant
    (info@winimage.com).</p>
</section>
<section class="Sh">
<h1 class="Sh" id="AUTHORS_AND_LICENSE"><a class="permalink" href="#AUTHORS_AND_LICENSE">AUTHORS
  AND LICENSE</a></h1>
<p class="Pp">Version 1.3.2</p>
<p class="Pp">Copyright (C) 1995-2026 Jean-loup Gailly and Mark Adler</p>
<p class="Pp">This software is provided 'as-is', without any express or implied
    warranty. In no event will the authors be held liable for any damages
    arising from the use of this software.</p>
<p class="Pp">Permission is granted to anyone to use this software for any
    purpose, including commercial applications, and to alter it and redistribute
    it freely, subject to the following restrictions:</p>
<dl class="Bl-tag">
  <dt>1.</dt>
  <dd>The origin of this software must not be misrepresented; you must not claim
      that you wrote the original software. If you use this software in a
      product, an acknowledgment in the product documentation would be
      appreciated but is not required.</dd>
  <dt>2.</dt>
  <dd>Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.</dd>
  <dt>3.</dt>
  <dd>This notice may not be removed or altered from any source
    distribution.</dd>
</dl>
<p class="Pp">Jean-loup Gailly Mark Adler
  <br/>
  jloup@gzip.org madler@alumni.caltech.edu</p>
<p class="Pp">The deflate format used by <i>zlib</i> was defined by Phil Katz.
    The deflate and <i>zlib</i> specifications were written by L. Peter Deutsch.
    Thanks to all the people who reported problems and suggested various
    improvements in <i>zlib</i>; who are too numerous to cite here.</p>
<p class="Pp">UNIX manual page by R. P. C. Rodgers, U.S. National Library of
    Medicine (rodgers@nlm.nih.gov).</p>
</section></div><div data-zlib-block="2"><table class="foot"><tr><td class="foot-date">17 Feb 2026</td><td class="foot-os"></td></tr></table></div></div>
