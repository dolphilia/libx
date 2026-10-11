---
title: "Compatibility issues"
documentId: "gnu-patch:2.8:06-compatibility"
licenseSource: gnu-patch-manual
toc: {"maxLevel": 3}
documentContext: [{"kind": "source", "html": "<section><h3>Libx GNU patch 2.8 Manual / Libx GNU patch 2.8 マニュアル</h3><p>Original authors: Larry Wall, Paul Eggert, Wayne Davison, David MacKenzie, Andreas Gruenbacher. Original publisher: Free Software Foundation. Modification and independent Japanese translation: Libx, 2026.</p><section class=\"Sh\">\n<h2 class=\"Sh\" id=\"patch-context-COPYING\">COPYING</h2>\n<p class=\"Pp\">Copyright © 1989–2025 Free Software Foundation, Inc.\n  <br/>\n  Copyright © 1984–1986, 1988 Larry Wall.</p>\n<p class=\"Pp\">Permission is granted to make and distribute verbatim copies of\n    this manual provided the copyright notice and this permission notice are\n    preserved on all copies.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute modified versions of\n    this manual under the conditions for verbatim copying, provided that the\n    entire resulting derived work is distributed under the terms of a permission\n    notice identical to this one.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute translations of this\n    manual into another language, under the above conditions for modified\n    versions, except that this permission notice may be included in translations\n    approved by the copyright holders instead of in the original English.</p>\n</section><p>The entire resulting derived manual is distributed under the identical original permission notice above. Copyright © 2026 Libx for static editing and independent unofficial Japanese translation.</p><p>Libx provides the complete fixed GNU patch 2.8 patch.man, organized into nine guide pages. Original examples remain static text. Other implementation files and historical NEWS entries are outside the translated scope.</p><p>LibxはGNU patch 2.8に同梱されたpatch.man全文を9ページに整理し、原文と独立した非公式日本語訳を提供します。例は原文の静的な文字列です。実装ファイルや過去のNEWSは翻訳対象外です。</p><p>Libx編集注記: --follow-symlinksの固定man本文と同梱NEWSの2.8変更説明には記述の違いがあります。本文を黙って修正せず、<a href=\"/docs/gnu-patch/source/v2-8/manual.html#follow\">固定manの説明</a>と<a href=\"/docs/gnu-patch/source/v2-8/NEWS\">原著NEWS</a>を参照できるようにしています。</p><p>Libx編集注記: 環境変数VERSION_CONTROL/PATCH_VERSION_CONTROLの説明では、原文が-vを参照しています。一方、オプションの説明では-vは--version、-Vは--version-controlです。原文と訳文の本文はそのまま保持しています。Libx editorial note: The original environment section refers to -v; the options section lists -v as --version and -V as --version-control. Both original and translated body text are preserved. <a href=\"/docs/gnu-patch/source/v2-8/manual.html#VERSION_CONTROL\">Original environment reference</a> · <a href=\"/docs/gnu-patch/source/v2-8/manual.html#V\">Original -V option</a></p><p><a href=\"/docs/gnu-patch/source/v2-8/manual.html\">Fixed complete original / 固定原文全文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch.man\">Editable original roff / 編集可能な原文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch-2.8.tar.gz\">Original distribution / 原著配布物</a> · <a href=\"/docs/gnu-patch/source/v2-8/AUTHORS\">Original AUTHORS</a></p></section>"}]
---

<div class="gnu-patch-original-content"><section class="gnu-patch-unit"><section class="Sh">
<h2 class="Sh" id="COMPATIBILITY_ISSUES">COMPATIBILITY
  ISSUES</h2>
<p class="Pp">The POSIX standard specifies behavior that differs from GNU
    <b>patch</b>.</p>
<div class="Bd-indent">
<ul class="Bl-bullet">
<li>In POSIX <b>patch</b> when <b>-b</b> is not used, backups are not made
      even when there is a mismatch. In GNU <b>patch</b>, this behavior is
      enabled with the <b>--no-backup-if-mismatch</b> option, or by conforming
      to POSIX with the <b>--posix</b> option or by setting the
      <b>POSIXLY_CORRECT</b> environment variable.</li>
<li>When intuiting the name of the file to be patched from the patch header,
      <b>patch</b> uses a complicated method that is optionally
      POSIX-conforming. The method is equivalent to POSIX if the file names in
      the context diff header and the <b>Index:</b> line are all identical after
      prefix-stripping. Your patch is normally compatible if each header's file
      names all contain the same number of slashes.</li>
<li>Limit yourself to the following options when sending instructions meant to
      be executed by anyone running GNU <b>patch</b> or a <b>patch</b> that
      conforms to POSIX. Spaces are optional in the following list.
    
<pre><code>&#10;&#10;-b&#10;-c&#10;-d dir&#10;-D define&#10;-e&#10;-i patchfile&#10;-l&#10;-n&#10;-N&#10;-o outfile&#10;-p num&#10;-R&#10;-r rejectfile&#10;-u&#10;&#10;    </code></pre>
</li>
</ul>
</div>
</section></section></div>
