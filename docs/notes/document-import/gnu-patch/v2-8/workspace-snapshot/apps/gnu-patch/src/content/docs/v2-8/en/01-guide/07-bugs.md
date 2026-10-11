---
title: "Bugs"
documentId: "gnu-patch:2.8:07-bugs"
licenseSource: gnu-patch-manual
toc: {"maxLevel": 3}
documentContext: [{"kind": "source", "html": "<section><h3>Libx GNU patch 2.8 Manual / Libx GNU patch 2.8 マニュアル</h3><p>Original authors: Larry Wall, Paul Eggert, Wayne Davison, David MacKenzie, Andreas Gruenbacher. Original publisher: Free Software Foundation. Modification and independent Japanese translation: Libx, 2026.</p><section class=\"Sh\">\n<h2 class=\"Sh\" id=\"patch-context-COPYING\">COPYING</h2>\n<p class=\"Pp\">Copyright © 1989–2025 Free Software Foundation, Inc.\n  <br/>\n  Copyright © 1984–1986, 1988 Larry Wall.</p>\n<p class=\"Pp\">Permission is granted to make and distribute verbatim copies of\n    this manual provided the copyright notice and this permission notice are\n    preserved on all copies.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute modified versions of\n    this manual under the conditions for verbatim copying, provided that the\n    entire resulting derived work is distributed under the terms of a permission\n    notice identical to this one.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute translations of this\n    manual into another language, under the above conditions for modified\n    versions, except that this permission notice may be included in translations\n    approved by the copyright holders instead of in the original English.</p>\n</section><p>The entire resulting derived manual is distributed under the identical original permission notice above. Copyright © 2026 Libx for static editing and independent unofficial Japanese translation.</p><p>Libx provides the complete fixed GNU patch 2.8 patch.man, organized into nine guide pages. Original examples remain static text. Other implementation files and historical NEWS entries are outside the translated scope.</p><p>LibxはGNU patch 2.8に同梱されたpatch.man全文を9ページに整理し、原文と独立した非公式日本語訳を提供します。例は原文の静的な文字列です。実装ファイルや過去のNEWSは翻訳対象外です。</p><p>Libx編集注記: --follow-symlinksの固定man本文と同梱NEWSの2.8変更説明には記述の違いがあります。本文を黙って修正せず、<a href=\"/docs/gnu-patch/source/v2-8/manual.html#follow\">固定manの説明</a>と<a href=\"/docs/gnu-patch/source/v2-8/NEWS\">原著NEWS</a>を参照できるようにしています。</p><p><a href=\"/docs/gnu-patch/source/v2-8/manual.html\">Fixed complete original / 固定原文全文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch.man\">Editable original roff / 編集可能な原文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch-2.8.tar.gz\">Original distribution / 原著配布物</a> · <a href=\"/docs/gnu-patch/source/v2-8/AUTHORS\">Original AUTHORS</a></p></section>"}]
---

<div class="gnu-patch-original-content"><section class="gnu-patch-unit"><section class="Sh">
<h2 class="Sh" id="BUGS">BUGS</h2>
<p class="Pp">Please report bugs via email to
  <b>&lt;bug-patch@gnu.org&gt;</b>.</p>
<p class="Pp">If code has been duplicated (for instance with <b>#ifdef
    OLDCODE</b> ... <b>#else ... #endif</b>), <b>patch</b> is incapable of
    patching both versions, and, if it works at all, will likely patch the wrong
    one, and tell you that it succeeded to boot.</p>
<p class="Pp">If you apply a patch you've already applied, <b>patch</b> thinks
    it is a reversed patch, and offers to un-apply the patch. This could be
    construed as a feature.</p>
<p class="Pp">Computing how to merge a hunk is significantly harder than using
    the standard fuzzy algorithm. Bigger hunks, more context, a bigger offset
    from the original location, and a worse match all slow the algorithm
  down.</p>
</section></section></div>
