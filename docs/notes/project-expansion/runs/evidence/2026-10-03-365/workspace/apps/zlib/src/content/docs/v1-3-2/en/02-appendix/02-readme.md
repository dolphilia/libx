---
title: "README"
licenseSource: zlib-readme
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>Unofficial formatting of the complete fixed zlib 1.3.2 originals. Original source: README. <a href="https://zlib.net/zlib-1.3.2.tar.gz">Official archive</a>; SHA-256: <code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>. Source file SHA-256: <code>4026d921213bb2e311d8d42b44ef53361c102d5d45ae32f93f8e52eaee8d068f</code>. Original notices remain intact. This presentation and its translations are unofficial.</p><p><a href="../05-license/">Full original license</a>. Plain source references outside this manual, including deflate.c, zutil.c, test/example.c, test/minigzip.c, ChangeLog and contrib, can be found in that fixed official archive.</p></aside>
<div class="zlib-document" style="overflow-wrap:anywhere"><section data-zlib-block="0"><div style="white-space:pre-wrap;overflow-wrap:anywhere">ZLIB DATA COMPRESSION LIBRARY

</div></section><section data-zlib-block="1"><div style="white-space:pre-wrap;overflow-wrap:anywhere">zlib 1.3.2 is a general purpose data compression library.  All the code is
thread safe (though see the FAQ for caveats).  The data format used by the zlib
library is described by RFCs (Request for Comments) 1950 to 1952 at
<a href="https://datatracker.ietf.org/doc/html/rfc1950">https://datatracker.ietf.org/doc/html/rfc1950</a> (zlib format), rfc1951 (deflate
format) and rfc1952 (gzip format).

</div></section><section data-zlib-block="2"><div style="white-space:pre-wrap;overflow-wrap:anywhere">All functions of the compression library are documented in the file <a href="../../01-api/01-overview/">zlib.h</a>
(volunteer to write man pages welcome, contact zlib@gzip.org).  A usage example
of the library is given in the file test/example.c which also tests that
the library is working correctly.  Another example is given in the file
test/minigzip.c.  The compression library itself is composed of all source
files in the root directory.

</div></section><section data-zlib-block="3"><div style="white-space:pre-wrap;overflow-wrap:anywhere">To compile all files and run the test program, follow the instructions given at
the top of Makefile.in.  In short &quot;./configure; make test&quot;, and if that goes
well, &quot;make install&quot; should work for most flavors of Unix.  For Windows, use
one of the special makefiles in win32/ or contrib/vstudio/ .  For VMS, use
make_vms.com.

</div></section><section data-zlib-block="4"><div style="white-space:pre-wrap;overflow-wrap:anywhere">Questions about zlib should be sent to &lt;zlib@gzip.org&gt;, or to Gilles Vollant
&lt;info@winimage.com&gt; for the Windows DLL version.  The zlib home page is
<a href="https://zlib.net/">https://zlib.net/</a> .  Before reporting a problem, please check this site to
verify that you have the latest version of zlib; otherwise get the latest
version and check whether the problem still exists or not.

</div></section><section data-zlib-block="5"><div style="white-space:pre-wrap;overflow-wrap:anywhere">PLEASE read the zlib FAQ <a href="https://zlib.net/zlib_faq.html">https://zlib.net/zlib_faq.html</a> before asking for help.

</div></section><section data-zlib-block="6"><div style="white-space:pre-wrap;overflow-wrap:anywhere">Mark Nelson &lt;markn@ieee.org&gt; wrote an article about zlib for the Jan.  1997
issue of Dr.  Dobb&#x27;s Journal; a copy of the article is available at
<a href="https://zlib.net/nelson/">https://zlib.net/nelson/</a> .

</div></section><section data-zlib-block="7"><div style="white-space:pre-wrap;overflow-wrap:anywhere">The changes made in version 1.3.2 are documented in the file ChangeLog.

</div></section><section data-zlib-block="8"><div style="white-space:pre-wrap;overflow-wrap:anywhere">Unsupported third party contributions are provided in directory contrib/ .

</div></section><section data-zlib-block="9"><div style="white-space:pre-wrap;overflow-wrap:anywhere">zlib is available in Java using the java.util.zip package. Follow the API
Documentation link at: <a href="https://docs.oracle.com/search/?q=java.util.zip">https://docs.oracle.com/search/?q=java.util.zip</a> .

</div></section><section data-zlib-block="10"><div style="white-space:pre-wrap;overflow-wrap:anywhere">A Perl interface to zlib and bzip2 written by Paul Marquess &lt;pmqs@cpan.org&gt;
can be found at <a href="https://github.com/pmqs/IO-Compress">https://github.com/pmqs/IO-Compress</a> .

</div></section><section data-zlib-block="11"><div style="white-space:pre-wrap;overflow-wrap:anywhere">A Python interface to zlib written by A.M. Kuchling &lt;amk@amk.ca&gt; is
available in Python 1.5 and later versions, see
<a href="https://docs.python.org/3/library/zlib.html">https://docs.python.org/3/library/zlib.html</a> .

</div></section><section data-zlib-block="12"><div style="white-space:pre-wrap;overflow-wrap:anywhere">zlib is built into tcl: <a href="https://wiki.tcl-lang.org/page/zlib">https://wiki.tcl-lang.org/page/zlib</a> .

</div></section><section data-zlib-block="13"><div style="white-space:pre-wrap;overflow-wrap:anywhere">An experimental package to read and write files in .zip format, written on top
of zlib by Gilles Vollant &lt;info@winimage.com&gt;, is available in the
contrib/minizip directory of zlib.


</div></section><section data-zlib-block="14"><div style="white-space:pre-wrap;overflow-wrap:anywhere">Notes for some targets:

</div></section><section data-zlib-block="15"><div style="white-space:pre-wrap;overflow-wrap:anywhere">- For Windows DLL versions, please see win32/DLL_FAQ.txt

</div></section><section data-zlib-block="16"><div style="white-space:pre-wrap;overflow-wrap:anywhere">- For 64-bit Irix, deflate.c must be compiled without any optimization. With
  -O, one libpng test fails. The test works in 32 bit mode (with the -n32
  compiler flag). The compiler bug has been reported to SGI.

</div></section><section data-zlib-block="17"><div style="white-space:pre-wrap;overflow-wrap:anywhere">- zlib doesn&#x27;t work with gcc 2.6.3 on a DEC 3000/300LX under OSF/1 2.1 it works
  when compiled with cc.

</div></section><section data-zlib-block="18"><div style="white-space:pre-wrap;overflow-wrap:anywhere">- On Digital Unix 4.0D (formerly OSF/1) on AlphaServer, the cc option -std1 is
  necessary to get <a href="../../01-api/06-gzip/#gzprintf">gzprintf</a> working correctly. This is done by configure.

</div></section><section data-zlib-block="19"><div style="white-space:pre-wrap;overflow-wrap:anywhere">- zlib doesn&#x27;t work on HP-UX 9.05 with some versions of /bin/cc. It works with
  other compilers. Use &quot;make test&quot; to check your compiler.

</div></section><section data-zlib-block="20"><div style="white-space:pre-wrap;overflow-wrap:anywhere">- For PalmOs, see <a href="https://palmzlib.sourceforge.net/">https://palmzlib.sourceforge.net/</a>


</div></section><section data-zlib-block="21"><div style="white-space:pre-wrap;overflow-wrap:anywhere">Acknowledgments:

</div></section><section data-zlib-block="22"><div style="white-space:pre-wrap;overflow-wrap:anywhere">  The deflate format used by zlib was defined by Phil Katz.  The deflate and
  zlib specifications were written by L.  Peter Deutsch.  Thanks to all the
  people who reported problems and suggested various improvements in zlib; they
  are too numerous to cite here.

</div></section><section data-zlib-block="23"><div style="white-space:pre-wrap;overflow-wrap:anywhere">Copyright notice:

</div></section><section data-zlib-block="24"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> (C) 1995-2026 Jean-loup Gailly and Mark Adler

</div></section><section data-zlib-block="25"><div style="white-space:pre-wrap;overflow-wrap:anywhere">  This software is provided &#x27;as-is&#x27;, without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.

</div></section><section data-zlib-block="26"><div style="white-space:pre-wrap;overflow-wrap:anywhere">  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

</div></section><section data-zlib-block="27"><div style="white-space:pre-wrap;overflow-wrap:anywhere">  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
  3. This notice may not be removed or altered from any source distribution.

</div></section><section data-zlib-block="28"><div style="white-space:pre-wrap;overflow-wrap:anywhere">  Jean-loup Gailly        Mark Adler
  jloup@gzip.org          madler@alumni.caltech.edu

</div></section><section data-zlib-block="29"><div style="white-space:pre-wrap;overflow-wrap:anywhere">If you use the zlib library in a product, we would appreciate *not* receiving
lengthy legal documents to sign.  The sources are provided for free but without
warranty of any kind.  The library has been entirely written by Jean-loup
Gailly and Mark Adler; it does not include third-party code.  We make all
contributions to and distributions of this project solely in our personal
capacity, and are not conveying any rights to any intellectual property of
any third parties.

</div></section><section data-zlib-block="30"><div style="white-space:pre-wrap;overflow-wrap:anywhere">If you redistribute modified sources, we would appreciate that you include in
the file ChangeLog history information documenting your changes.  Please read
the FAQ for more information on the distribution of modified source versions.
</div></section></div>
