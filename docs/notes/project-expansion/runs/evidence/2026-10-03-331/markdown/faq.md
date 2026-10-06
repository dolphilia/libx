---
title: "zlib 1.3.2 faq conversion trial"
licenseSource: zlib-trial-faq
toc:
  maxLevel: 6
---

<p>Local unpublished conversion trial. Navigation headings are editorial.</p>

<div class="zlib-trial-document" style="overflow-wrap:anywhere"><section data-zlib-block="0"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
                Frequently Asked Questions about zlib


If your question is not there, please check the zlib home page
<a href="https://zlib.net/">https://zlib.net/</a> which may have more recent information.
The latest zlib FAQ is at <a href="https://zlib.net/zlib_faq.html">https://zlib.net/zlib_faq.html</a>


</div></section><h2 data-editorial="navigation" id="faq-1">1. Is zlib Y2K-compliant?</h2><section data-zlib-block="1"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> 1. Is zlib Y2K-compliant?

    Yes. zlib doesn&#x27;t handle dates.

</div></section><h2 data-editorial="navigation" id="faq-2">2. Where can I get a Windows DLL version?</h2><section data-zlib-block="2"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> 2. Where can I get a Windows DLL version?

    The zlib sources can be compiled without change to produce a DLL.  See the
    file win32/DLL_FAQ.txt in the zlib distribution.

</div></section><h2 data-editorial="navigation" id="faq-3">3. Where can I get a Visual Basic interface to zlib?</h2><section data-zlib-block="3"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> 3. Where can I get a Visual Basic interface to zlib?

    See
        * <a href="https://zlib.net/nelson/">https://zlib.net/nelson/</a>
        * win32/DLL_FAQ.txt in the zlib distribution

</div></section><h2 data-editorial="navigation" id="faq-4">4. compress() returns Z_BUF_ERROR.</h2><section data-zlib-block="4"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> 4. <a href="../api/#compress">compress</a>() returns Z_BUF_ERROR.

    Make sure that before the call of <a href="../api/#compress">compress</a>(), the length of the compressed
    buffer is equal to the available size of the compressed buffer and not
    zero.  For Visual Basic, check that this parameter is passed by reference
    (&quot;as any&quot;), not by value (&quot;as long&quot;).

</div></section><h2 data-editorial="navigation" id="faq-5">5. deflate() or inflate() returns Z_BUF_ERROR.</h2><section data-zlib-block="5"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> 5. <a href="../api/#deflate">deflate</a>() or <a href="../api/#inflate">inflate</a>() returns Z_BUF_ERROR.

    Before making the call, make sure that avail_in and avail_out are not zero.
    When setting the parameter flush equal to Z_FINISH, also make sure that
    avail_out is big enough to allow processing all pending input.  Note that a
    Z_BUF_ERROR is not fatal--another call to <a href="../api/#deflate">deflate</a>() or <a href="../api/#inflate">inflate</a>() can be
    made with more input or output space.  A Z_BUF_ERROR may in fact be
    unavoidable depending on how the functions are used, since it is not
    possible to tell whether or not there is more output pending when
    strm.avail_out returns with zero.  See <a href="https://zlib.net/zlib_how.html">https://zlib.net/zlib_how.html</a> for a
    heavily annotated example.

</div></section><h2 data-editorial="navigation" id="faq-6">6. Where&#x27;s the zlib documentation (man pages, etc.)?</h2><section data-zlib-block="6"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> 6. Where&#x27;s the zlib documentation (man pages, etc.)?

    It&#x27;s in <a href="../api/">zlib.h</a> .  Examples of zlib usage are in the files test/example.c
    and test/minigzip.c, with more in examples/ .

</div></section><h2 data-editorial="navigation" id="faq-7">7. Why don&#x27;t you use GNU autoconf or libtool or ...?</h2><section data-zlib-block="7"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> 7. Why don&#x27;t you use GNU autoconf or libtool or ...?

    Because we would like to keep zlib as a very small and simple package.
    zlib is rather portable and doesn&#x27;t need much configuration.

</div></section><h2 data-editorial="navigation" id="faq-8">8. I found a bug in zlib.</h2><section data-zlib-block="8"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> 8. I found a bug in zlib.

    Most of the time, such problems are due to an incorrect usage of zlib.
    Please try to reproduce the problem with a small program and send the
    corresponding source to us at zlib@gzip.org .  Do not send multi-megabyte
    data files without prior agreement.

</div></section><h2 data-editorial="navigation" id="faq-9">9. Why do I get &quot;undefined reference to gzputc&quot;?</h2><section data-zlib-block="9"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> 9. Why do I get &quot;undefined reference to <a href="../api/#gzputc">gzputc</a>&quot;?

    If &quot;make test&quot; produces something like

       example.o(.text+0x154): undefined reference to `<a href="../api/#gzputc">gzputc</a>&#x27;

    check that you don&#x27;t have old files libz.* in /usr/lib, /usr/local/lib or
    /usr/X11R6/lib. Remove any old versions, then do &quot;make install&quot;.

</div></section><h2 data-editorial="navigation" id="faq-10">10. I need a Delphi interface to zlib.</h2><section data-zlib-block="10"><div style="white-space:pre-wrap;overflow-wrap:anywhere">10. I need a Delphi interface to zlib.

    See the contrib/delphi directory in the zlib distribution.

</div></section><h2 data-editorial="navigation" id="faq-11">11. Can zlib handle .zip archives?</h2><section data-zlib-block="11"><div style="white-space:pre-wrap;overflow-wrap:anywhere">11. Can zlib handle .zip archives?

    Not by itself, no.  See the directory contrib/minizip in the zlib
    distribution.

</div></section><h2 data-editorial="navigation" id="faq-12">12. Can zlib handle .Z files?</h2><section data-zlib-block="12"><div style="white-space:pre-wrap;overflow-wrap:anywhere">12. Can zlib handle .Z files?

    No, sorry.  You have to spawn an <a href="../api/#uncompress">uncompress</a> or gunzip subprocess, or adapt
    the code of <a href="../api/#uncompress">uncompress</a> on your own.

</div></section><h2 data-editorial="navigation" id="faq-13">13. How can I make a Unix shared library?</h2><section data-zlib-block="13"><div style="white-space:pre-wrap;overflow-wrap:anywhere">13. How can I make a Unix shared library?

    By default a shared (and a static) library is built for Unix.  So:

    make distclean
    ./configure
    make

</div></section><h2 data-editorial="navigation" id="faq-14">14. How do I install a shared zlib library on Unix?</h2><section data-zlib-block="14"><div style="white-space:pre-wrap;overflow-wrap:anywhere">14. How do I install a shared zlib library on Unix?

    After the above, then:

    make install

    However, many flavors of Unix come with a shared zlib already installed.
    Before going to the trouble of compiling a shared version of zlib and
    trying to install it, you may want to check if it&#x27;s already there!  If you
    can #include &lt;<a href="../api/">zlib.h</a>&gt;, it&#x27;s there.  The -lz option will probably link to
    it.  You can check the version at the top of <a href="../api/">zlib.h</a> or with the
    ZLIB_VERSION symbol defined in <a href="../api/">zlib.h</a> .

</div></section><h2 data-editorial="navigation" id="faq-15">15. I have a question about OttoPDF.</h2><section data-zlib-block="15"><div style="white-space:pre-wrap;overflow-wrap:anywhere">15. I have a question about OttoPDF.

    We are not the authors of OttoPDF. The real author is on the OttoPDF web
    site: Joel Hainley, jhainley@myndkryme.com.

</div></section><h2 data-editorial="navigation" id="faq-16">16. Can zlib decode Flate data in an Adobe PDF file?</h2><section data-zlib-block="16"><div style="white-space:pre-wrap;overflow-wrap:anywhere">16. Can zlib decode Flate data in an Adobe PDF file?

    Yes. See <a href="https://www.pdflib.com/">https://www.pdflib.com/</a> . To modify PDF forms, see
    <a href="https://sourceforge.net/projects/acroformtool/">https://sourceforge.net/projects/acroformtool/</a> .

</div></section><h2 data-editorial="navigation" id="faq-17">17. Why am I getting this &quot;register_frame_info not found&quot; error on Solaris?</h2><section data-zlib-block="17"><div style="white-space:pre-wrap;overflow-wrap:anywhere">17. Why am I getting this &quot;register_frame_info not found&quot; error on Solaris?

    After installing zlib 1.1.4 on Solaris 2.6, running applications using zlib
    generates an error such as:

        ld.so.1: rpm: fatal: relocation error: file /usr/local/lib/libz.so:
        symbol __register_frame_info: referenced symbol not found

    The symbol __register_frame_info is not part of zlib, it is generated by
    the C compiler (cc or gcc).  You must recompile applications using zlib
    which have this problem.  This problem is specific to Solaris.  See
    <a href="http://www.sunfreeware.com">http://www.sunfreeware.com</a> for Solaris versions of zlib and applications
    using zlib.

</div></section><h2 data-editorial="navigation" id="faq-18">18. Why does gzip give an error on a file I make with compress/deflate?</h2><section data-zlib-block="18"><div style="white-space:pre-wrap;overflow-wrap:anywhere">18. Why does gzip give an error on a file I make with <a href="../api/#compress">compress</a>/<a href="../api/#deflate">deflate</a>?

    The <a href="../api/#compress">compress</a> and <a href="../api/#deflate">deflate</a> functions produce data in the zlib format, which
    is different and incompatible with the gzip format.  The gz* functions in
    zlib on the other hand use the gzip format.  Both the zlib and gzip formats
    use the same compressed data format internally, but have different headers
    and trailers around the compressed data.

</div></section><h2 data-editorial="navigation" id="faq-19">19. Ok, so why are there two different formats?</h2><section data-zlib-block="19"><div style="white-space:pre-wrap;overflow-wrap:anywhere">19. Ok, so why are there two different formats?

    The gzip format was designed to retain the directory information about a
    single file, such as the name and last modification date.  The zlib format
    on the other hand was designed for in-memory and communication channel
    applications, and has a much more compact header and trailer and uses a
    faster integrity check than gzip.

</div></section><h2 data-editorial="navigation" id="faq-20">20. Well that&#x27;s nice, but how do I make a gzip file in memory?</h2><section data-zlib-block="20"><div style="white-space:pre-wrap;overflow-wrap:anywhere">20. Well that&#x27;s nice, but how do I make a gzip file in memory?

    You can request that <a href="../api/#deflate">deflate</a> write the gzip format instead of the zlib
    format using <a href="../api/#deflateInit2">deflateInit2</a>().  You can also request that <a href="../api/#inflate">inflate</a> decode the
    gzip format using <a href="../api/#inflateInit2">inflateInit2</a>().  Read <a href="../api/">zlib.h</a> for more details.

</div></section><h2 data-editorial="navigation" id="faq-21">21. Is zlib thread-safe?</h2><section data-zlib-block="21"><div style="white-space:pre-wrap;overflow-wrap:anywhere">21. Is zlib thread-safe?

    Yes.  However any library routines that zlib uses and any application-
    provided memory allocation routines must also be thread-safe.  zlib&#x27;s gz*
    functions use stdio library routines, and most of zlib&#x27;s functions use the
    library memory allocation routines by default.  zlib&#x27;s *Init* functions
    allow for the application to provide custom memory allocation routines.

    If the non-default BUILDFIXED or DYNAMIC_CRC_TABLE defines are used on a
    system without atomics (e.g. pre-C11), then <a href="../api/#inflate">inflate</a>() and <a href="../api/#crc32">crc32</a>() will not
    be thread safe.

    Of course, you should only operate on any given zlib or gzip stream from a
    single thread at a time.

</div></section><h2 data-editorial="navigation" id="faq-22">22. Can I use zlib in my commercial application?</h2><section data-zlib-block="22"><div style="white-space:pre-wrap;overflow-wrap:anywhere">22. Can I use zlib in my commercial application?

    Yes.  Please read the license in <a href="../api/">zlib.h</a>.

</div></section><h2 data-editorial="navigation" id="faq-23">23. Is zlib under the GNU license?</h2><section data-zlib-block="23"><div style="white-space:pre-wrap;overflow-wrap:anywhere">23. Is zlib under the GNU license?

    No.  Please read the license in <a href="../api/">zlib.h</a>.

</div></section><h2 data-editorial="navigation" id="faq-24">24. The license says that altered source versions must be &quot;plainly marked&quot;. So
    what exactly do I need to do to meet that requirement?</h2><section data-zlib-block="24"><div style="white-space:pre-wrap;overflow-wrap:anywhere">24. The license says that altered source versions must be &quot;plainly marked&quot;. So
    what exactly do I need to do to meet that requirement?

    You need to change the ZLIB_VERSION and ZLIB_VERNUM #defines in <a href="../api/">zlib.h</a>.  In
    particular, the final version number needs to be changed to &quot;f&quot;, and an
    identification string should be appended to ZLIB_VERSION.  Version numbers
    x.x.x.f are reserved for modifications to zlib by others than the zlib
    maintainers.  For example, if the version of the base zlib you are altering
    is &quot;1.2.3.4&quot;, then in <a href="../api/">zlib.h</a> you should change ZLIB_VERNUM to 0x123f, and
    ZLIB_VERSION to something like &quot;1.2.3.f-zachary-mods-v3&quot;.  You can also
    update the version strings in <a href="../api/#deflate">deflate</a>.c and inftrees.c.

    For altered source distributions, you should also note the origin and
    nature of the changes in <a href="../api/">zlib.h</a>, as well as in ChangeLog and README, along
    with the dates of the alterations.  The origin should include at least your
    name (or your company&#x27;s name), and an email address to contact for help or
    issues with the library.

    Note that distributing a compiled zlib library along with <a href="../api/">zlib.h</a> and
    <a href="../zconf/">zconf.h</a> is also a source distribution, and so you should change
    ZLIB_VERSION and ZLIB_VERNUM and note the origin and nature of the changes
    in <a href="../api/">zlib.h</a> as you would for a full source distribution.

</div></section><h2 data-editorial="navigation" id="faq-25">25. Will zlib work on a big-endian or little-endian architecture, and can I
    exchange compressed data between them?</h2><section data-zlib-block="25"><div style="white-space:pre-wrap;overflow-wrap:anywhere">25. Will zlib work on a big-endian or little-endian architecture, and can I
    exchange compressed data between them?

    Yes and yes.

</div></section><h2 data-editorial="navigation" id="faq-26">26. Will zlib work on a 64-bit machine?</h2><section data-zlib-block="26"><div style="white-space:pre-wrap;overflow-wrap:anywhere">26. Will zlib work on a 64-bit machine?

    Yes.  It has been tested on 64-bit machines, and has no dependence on any
    data types being limited to 32-bits in length.  If you have any
    difficulties, please provide a complete problem report to zlib@gzip.org

</div></section><h2 data-editorial="navigation" id="faq-27">27. Will zlib decompress data from the PKWare Data Compression Library?</h2><section data-zlib-block="27"><div style="white-space:pre-wrap;overflow-wrap:anywhere">27. Will zlib decompress data from the PKWare Data Compression Library?

    No.  The PKWare DCL uses a completely different compressed data format than
    does PKZIP and zlib.  However, you can look in zlib&#x27;s contrib/blast
    directory for a possible solution to your problem.

</div></section><h2 data-editorial="navigation" id="faq-28">28. Can I access data randomly in a compressed stream?</h2><section data-zlib-block="28"><div style="white-space:pre-wrap;overflow-wrap:anywhere">28. Can I access data randomly in a compressed stream?

    No, not without some preparation.  If when compressing you periodically use
    Z_FULL_FLUSH, carefully write all the pending data at those points, and
    keep an index of those locations, then you can start decompression at those
    points.  You have to be careful to not use Z_FULL_FLUSH too often, since it
    can significantly degrade compression.  Alternatively, you can scan a
    <a href="../api/#deflate">deflate</a> stream once to generate an index, and then use that index for
    random access.  See examples/zran.c .

</div></section><h2 data-editorial="navigation" id="faq-29">29. Does zlib work on MVS, OS/390, CICS, etc.?</h2><section data-zlib-block="29"><div style="white-space:pre-wrap;overflow-wrap:anywhere">29. Does zlib work on MVS, OS/390, CICS, etc.?

    It has in the past, but we have not heard of any recent evidence.  There
    were working ports of zlib 1.1.4 to MVS, but those links no longer work.
    If you know of recent, successful applications of zlib on these operating
    systems, please let us know.  Thanks.

</div></section><h2 data-editorial="navigation" id="faq-30">30. Is there some simpler, easier to read version of inflate I can look at to
    understand the deflate format?</h2><section data-zlib-block="30"><div style="white-space:pre-wrap;overflow-wrap:anywhere">30. Is there some simpler, easier to read version of <a href="../api/#inflate">inflate</a> I can look at to
    understand the <a href="../api/#deflate">deflate</a> format?

    First off, you should read RFC 1951.  Second, yes.  Look in zlib&#x27;s
    contrib/puff directory.

</div></section><h2 data-editorial="navigation" id="faq-31">31. Does zlib infringe on any patents?</h2><section data-zlib-block="31"><div style="white-space:pre-wrap;overflow-wrap:anywhere">31. Does zlib infringe on any patents?

    As far as we know, no.  In fact, that was originally the whole point behind
    zlib.  Look here for some more information:

    <a href="https://web.archive.org/web/20180729212847/http://www.gzip.org/#faq11">https://web.archive.org/web/20180729212847/http://www.gzip.org/#faq11</a>

</div></section><h2 data-editorial="navigation" id="faq-32">32. Can zlib work with greater than 4 GB of data?</h2><section data-zlib-block="32"><div style="white-space:pre-wrap;overflow-wrap:anywhere">32. Can zlib work with greater than 4 GB of data?

    Yes.  <a href="../api/#inflate">inflate</a>() and <a href="../api/#deflate">deflate</a>() will process any amount of data correctly.
    Each call of <a href="../api/#inflate">inflate</a>() or <a href="../api/#deflate">deflate</a>() is limited to input and output chunks
    of the maximum value that can be stored in the compiler&#x27;s &quot;unsigned int&quot;
    type, but there is no limit to the number of chunks.  Note however that the
    strm.total_in and strm_total_out counters may be limited to 4 GB.  These
    counters are provided as a convenience and are not used internally by
    <a href="../api/#inflate">inflate</a>() or <a href="../api/#deflate">deflate</a>().  The application can easily set up its own counters
    updated after each call of <a href="../api/#inflate">inflate</a>() or <a href="../api/#deflate">deflate</a>() to count beyond 4 GB.
    <a href="../api/#compress">compress</a>() and <a href="../api/#uncompress">uncompress</a>() may be limited to 4 GB, since they operate in a
    single call.  <a href="../api/#gzseek">gzseek</a>() and <a href="../api/#gztell">gztell</a>() may be limited to 4 GB depending on how
    zlib is compiled.  See the <a href="../api/#zlibCompileFlags">zlibCompileFlags</a>() function in <a href="../api/">zlib.h</a>.

    The word &quot;may&quot; appears several times above since there is a 4 GB limit only
    if the compiler&#x27;s &quot;long&quot; type is 32 bits.  If the compiler&#x27;s &quot;long&quot; type is
    64 bits, then the limit is 16 exabytes.

</div></section><h2 data-editorial="navigation" id="faq-33">33. Does zlib have any security vulnerabilities?</h2><section data-zlib-block="33"><div style="white-space:pre-wrap;overflow-wrap:anywhere">33. Does zlib have any security vulnerabilities?

    The only one that we are aware of is potentially in <a href="../api/#gzprintf">gzprintf</a>().  If zlib is
    compiled to use sprintf() or vsprintf(), which requires that ZLIB_INSECURE
    be defined, then there is no protection against a buffer overflow of an 8K
    string space (or other value as set by <a href="../api/#gzbuffer">gzbuffer</a>()), other than the caller
    of <a href="../api/#gzprintf">gzprintf</a>() assuring that the output will not exceed 8K.  On the other
    hand, if zlib is compiled to use snprintf() or vsnprintf(), which should
    normally be the case, then there is no vulnerability.  The ./configure
    script will display warnings if an insecure variation of sprintf() will be
    used by <a href="../api/#gzprintf">gzprintf</a>().  Also the <a href="../api/#zlibCompileFlags">zlibCompileFlags</a>() function will return
    information on what variant of sprintf() is used by <a href="../api/#gzprintf">gzprintf</a>().

    If you don&#x27;t have snprintf() or vsnprintf() and would like one, you can
    find a good portable implementation in stb_sprintf.h here:

        <a href="https://github.com/nothings/stb">https://github.com/nothings/stb</a>

    Note that you should be using the most recent version of zlib.  Versions
    1.1.3 and before were subject to a double-free vulnerability, and versions
    1.2.1 and 1.2.2 were subject to an access exception when decompressing
    invalid compressed data.

</div></section><h2 data-editorial="navigation" id="faq-34">34. Is there a Java version of zlib?</h2><section data-zlib-block="34"><div style="white-space:pre-wrap;overflow-wrap:anywhere">34. Is there a Java version of zlib?

    Probably what you want is to use zlib in Java. zlib is already included
    as part of the Java SDK in the java.util.zip package. If you really want
    a version of zlib written in the Java language, look on the zlib home
    page for links: <a href="https://zlib.net/">https://zlib.net/</a> .

</div></section><h2 data-editorial="navigation" id="faq-35">35. I get this or that compiler or source-code scanner warning when I crank it
    up to maximally-pedantic. Can&#x27;t you guys write proper code?</h2><section data-zlib-block="35"><div style="white-space:pre-wrap;overflow-wrap:anywhere">35. I get this or that compiler or source-code scanner warning when I crank it
    up to maximally-pedantic. Can&#x27;t you guys write proper code?

    Many years ago, we gave up attempting to avoid warnings on every compiler
    in the universe.  It just got to be a waste of time, and some compilers
    were downright silly as well as contradicted each other.  So now, we simply
    make sure that the code always works.

</div></section><h2 data-editorial="navigation" id="faq-36">36. Valgrind (or some similar memory access checker) says that deflate is
    performing a conditional jump that depends on an uninitialized value.
    Isn&#x27;t that a bug?</h2><section data-zlib-block="36"><div style="white-space:pre-wrap;overflow-wrap:anywhere">36. Valgrind (or some similar memory access checker) says that <a href="../api/#deflate">deflate</a> is
    performing a conditional jump that depends on an uninitialized value.
    Isn&#x27;t that a bug?

    No.  That is intentional for performance reasons, and the output of <a href="../api/#deflate">deflate</a>
    is not affected.  This only started showing up recently since zlib 1.2.x
    uses malloc() by default for allocations, whereas earlier versions used
    calloc(), which zeros out the allocated memory.  Even though the code was
    correct, versions 1.2.4 and later was changed to not stimulate these
    checkers.

</div></section><h2 data-editorial="navigation" id="faq-37">37. Will zlib read the (insert any ancient or arcane format here) compressed
    data format?</h2><section data-zlib-block="37"><div style="white-space:pre-wrap;overflow-wrap:anywhere">37. Will zlib read the (insert any ancient or arcane format here) compressed
    data format?

    Probably not. Look in the comp.compression FAQ for pointers to various
    formats and associated software.

</div></section><h2 data-editorial="navigation" id="faq-38">38. How can I encrypt/decrypt zip files with zlib?</h2><section data-zlib-block="38"><div style="white-space:pre-wrap;overflow-wrap:anywhere">38. How can I encrypt/decrypt zip files with zlib?

    zlib doesn&#x27;t support encryption.  The original PKZIP encryption is very
    weak and can be broken with freely available programs.  To get strong
    encryption, use GnuPG, <a href="https://www.gnupg.org/">https://www.gnupg.org/</a> , which already includes zlib
    compression.  For PKZIP compatible &quot;encryption&quot;, look at
    <a href="https://infozip.sourceforge.net/">https://infozip.sourceforge.net/</a>

</div></section><h2 data-editorial="navigation" id="faq-39">39. What&#x27;s the difference between the &quot;gzip&quot; and &quot;deflate&quot; HTTP 1.1 encodings?</h2><section data-zlib-block="39"><div style="white-space:pre-wrap;overflow-wrap:anywhere">39. What&#x27;s the difference between the &quot;gzip&quot; and &quot;<a href="../api/#deflate">deflate</a>&quot; HTTP 1.1 encodings?

    &quot;gzip&quot; is the gzip format, and &quot;<a href="../api/#deflate">deflate</a>&quot; is the zlib format.  They should
    probably have called the second one &quot;zlib&quot; instead to avoid confusion with
    the raw <a href="../api/#deflate">deflate</a> compressed data format.  While the HTTP 1.1 RFC 2616
    correctly points to the zlib specification in RFC 1950 for the &quot;<a href="../api/#deflate">deflate</a>&quot;
    transfer encoding, there have been reports of servers and browsers that
    incorrectly produce or expect raw <a href="../api/#deflate">deflate</a> data per the <a href="../api/#deflate">deflate</a>
    specification in RFC 1951, most notably Microsoft.  So even though the
    &quot;<a href="../api/#deflate">deflate</a>&quot; transfer encoding using the zlib format would be the more
    efficient approach (and in fact exactly what the zlib format was designed
    for), using the &quot;gzip&quot; transfer encoding is probably more reliable due to
    an unfortunate choice of name on the part of the HTTP 1.1 authors.

    Bottom line: use the gzip format for HTTP 1.1 encoding.

</div></section><h2 data-editorial="navigation" id="faq-40">40. Does zlib support the new &quot;Deflate64&quot; format introduced by PKWare?</h2><section data-zlib-block="40"><div style="white-space:pre-wrap;overflow-wrap:anywhere">40. Does zlib support the new &quot;Deflate64&quot; format introduced by PKWare?

    No.  PKWare has apparently decided to keep that format proprietary, since
    they have not documented it as they have previous compression formats.  In
    any case, the compression improvements are so modest compared to other more
    modern approaches, that it&#x27;s not worth the effort to implement.

</div></section><h2 data-editorial="navigation" id="faq-41">41. I&#x27;m having a problem with the zip functions in zlib, can you help?</h2><section data-zlib-block="41"><div style="white-space:pre-wrap;overflow-wrap:anywhere">41. I&#x27;m having a problem with the zip functions in zlib, can you help?

    There are no zip functions in zlib.  You are probably using minizip by
    Giles Vollant, which is found in the contrib directory of zlib.  It is not
    part of zlib.  In fact none of the stuff in contrib is part of zlib.  The
    files in there are not supported by the zlib authors.  You need to contact
    the authors of the respective contribution for help.

</div></section><h2 data-editorial="navigation" id="faq-42">42. The match.asm code in contrib is under the GNU General Public License.
    Since it&#x27;s part of zlib, doesn&#x27;t that mean that all of zlib falls under the
    GNU GPL?</h2><section data-zlib-block="42"><div style="white-space:pre-wrap;overflow-wrap:anywhere">42. The match.asm code in contrib is under the GNU General Public License.
    Since it&#x27;s part of zlib, doesn&#x27;t that mean that all of zlib falls under the
    GNU GPL?

    No.  The files in contrib are not part of zlib.  They were contributed by
    other authors and are provided as a convenience to the user within the zlib
    distribution.  Each item in contrib has its own license.

</div></section><h2 data-editorial="navigation" id="faq-43">43. Is zlib subject to export controls?  What is its ECCN?</h2><section data-zlib-block="43"><div style="white-space:pre-wrap;overflow-wrap:anywhere">43. Is zlib subject to export controls?  What is its ECCN?

    zlib is not subject to export controls, and so is classified as EAR99.

</div></section><h2 data-editorial="navigation" id="faq-44">44. Can you please sign these lengthy legal documents and fax them back to us
    so that we can use your software in our product?</h2><section data-zlib-block="44"><div style="white-space:pre-wrap;overflow-wrap:anywhere">44. Can you please sign these lengthy legal documents and fax them back to us
    so that we can use your software in our product?

    No. Go away. Shoo.
</div></section></div>
