---
title: "未文書化の関数"
licenseSource: zlib-api
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>固定したzlib 1.3.2の原文全体を整形した英語定本からの非公式な日本語訳です。原資料：zlib.h。<a href="https://zlib.net/zlib-1.3.2.tar.gz">公式配布物</a>のSHA-256：<code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>。原資料のSHA-256：<code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>。原文の通知は固定原資料と<a href="../01-overview/">概要ページの英語原文</a>に保持しています。この整形版と翻訳は非公式です。</p><p><a href="../../02-appendix/05-license/">ライセンス原文の全文</a>。本文の外にあるソース参照（deflate.c、zutil.c、test/example.c、test/minigzip.c、ChangeLog、contribなど）は、固定した公式配布物内を参照してください。</p></aside><aside data-editorial="source-note"><p>この節は上流で明示的に未文書化とされています。宣言を保持し、新たに生成した説明は加えていません。</p></aside>
<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="192"><h2 id="section-192" data-source-role="section"> 未文書化の関数 </h2></div><a id="gzvprintf" data-editorial="anchor"></a><a id="gzopen_w" data-editorial="anchor"></a><a id="deflateResetKeep" data-editorial="anchor"></a><a id="inflateResetKeep" data-editorial="anchor"></a><a id="inflateCodesUsed" data-editorial="anchor"></a><a id="inflateValidate" data-editorial="anchor"></a><a id="inflateUndermine" data-editorial="anchor"></a><a id="get_crc_table" data-editorial="anchor"></a><a id="inflateSyncPoint" data-editorial="anchor"></a><a id="zError" data-editorial="anchor"></a><h3 id="nav-193" data-editorial="navigation">zError</h3><div data-zlib-block="193"><pre><code>
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
