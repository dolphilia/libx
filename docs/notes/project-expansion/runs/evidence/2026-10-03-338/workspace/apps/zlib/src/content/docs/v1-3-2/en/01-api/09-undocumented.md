---
title: "Undocumented functions"
licenseSource: zlib-api
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>Unofficial formatting of the complete fixed zlib 1.3.2 originals. Original source: zlib.h. <a href="https://zlib.net/zlib-1.3.2.tar.gz">Official archive</a>; SHA-256: <code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>. Source file SHA-256: <code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>. Original notices remain intact. This presentation and its translations are unofficial.</p><p><a href="../../02-appendix/05-license/">Full original license</a>. Plain source references outside this manual, including deflate.c, zutil.c, test/example.c, test/minigzip.c, ChangeLog and contrib, can be found in that fixed official archive.</p></aside><aside data-editorial="source-note"><p>This section is explicitly undocumented upstream. Its declarations are retained without newly generated explanations.</p></aside>
<div class="zlib-document" style="overflow-wrap:anywhere"><h2 id="section-192" data-editorial="navigation">undocumented functions</h2><div data-zlib-block="192"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> undocumented functions </div></div><a id="gzvprintf" data-editorial="anchor"></a><a id="gzopen_w" data-editorial="anchor"></a><a id="deflateResetKeep" data-editorial="anchor"></a><a id="inflateResetKeep" data-editorial="anchor"></a><a id="inflateCodesUsed" data-editorial="anchor"></a><a id="inflateValidate" data-editorial="anchor"></a><a id="inflateUndermine" data-editorial="anchor"></a><a id="get_crc_table" data-editorial="anchor"></a><a id="inflateSyncPoint" data-editorial="anchor"></a><a id="zError" data-editorial="anchor"></a><h3 id="nav-193" data-editorial="navigation">zError</h3><div data-zlib-block="193"><pre><code>
ZEXTERN const char   * ZEXPORT zError(int);
ZEXTERN int            ZEXPORT inflateSyncPoint(z_streamp);
ZEXTERN const z_crc_t FAR * ZEXPORT get_crc_table(void);
ZEXTERN int            ZEXPORT inflateUndermine(z_streamp, int);
ZEXTERN int            ZEXPORT inflateValidate(z_streamp, int);
ZEXTERN unsigned long  ZEXPORT inflateCodesUsed(z_streamp);
ZEXTERN int            ZEXPORT inflateResetKeep(z_streamp);
ZEXTERN int            ZEXPORT deflateResetKeep(z_streamp);
#if defined(_WIN32) &amp;&amp; !defined(Z_SOLO)
ZEXTERN gzFile         ZEXPORT gzopen_w(const wchar_t *path,
                                        const char *mode);
#endif
#if defined(STDC) || defined(Z_HAVE_STDARG_H)
#  ifndef Z_SOLO
ZEXTERN int            ZEXPORTVA gzvprintf(gzFile file,
                                           const char *format,
                                           va_list va);
#  endif
#endif

#ifdef __cplusplus
}
#endif

#endif /* ZLIB_H */
</code></pre></div></div>
