---
title: "Diagnostics and caveats"
documentId: "gnu-patch:2.8:05-diagnostics-and-caveats"
licenseSource: gnu-patch-manual
toc: {"maxLevel": 3}
documentContext: [{"kind": "source", "html": "<section><h3>Libx GNU patch 2.8 Manual / Libx GNU patch 2.8 マニュアル</h3><p>Original authors: Larry Wall, Paul Eggert, Wayne Davison, David MacKenzie, Andreas Gruenbacher. Original publisher: Free Software Foundation. Modification and independent Japanese translation: Libx, 2026.</p><section class=\"Sh\">\n<h2 class=\"Sh\" id=\"patch-context-COPYING\">COPYING</h2>\n<p class=\"Pp\">Copyright © 1989–2025 Free Software Foundation, Inc.\n  <br/>\n  Copyright © 1984–1986, 1988 Larry Wall.</p>\n<p class=\"Pp\">Permission is granted to make and distribute verbatim copies of\n    this manual provided the copyright notice and this permission notice are\n    preserved on all copies.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute modified versions of\n    this manual under the conditions for verbatim copying, provided that the\n    entire resulting derived work is distributed under the terms of a permission\n    notice identical to this one.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute translations of this\n    manual into another language, under the above conditions for modified\n    versions, except that this permission notice may be included in translations\n    approved by the copyright holders instead of in the original English.</p>\n</section><p>The entire resulting derived manual is distributed under the identical original permission notice above. Copyright © 2026 Libx for static editing and independent unofficial Japanese translation.</p><p>Libx provides the complete fixed GNU patch 2.8 patch.man, organized into nine guide pages. Original examples remain static text. Other implementation files and historical NEWS entries are outside the translated scope.</p><p>LibxはGNU patch 2.8に同梱されたpatch.man全文を9ページに整理し、原文と独立した非公式日本語訳を提供します。例は原文の静的な文字列です。実装ファイルや過去のNEWSは翻訳対象外です。</p><p>Libx編集注記: --follow-symlinksの固定man本文と同梱NEWSの2.8変更説明には記述の違いがあります。本文を黙って修正せず、<a href=\"/docs/gnu-patch/source/v2-8/manual.html#follow\">固定manの説明</a>と<a href=\"/docs/gnu-patch/source/v2-8/NEWS\">原著NEWS</a>を参照できるようにしています。</p><p><a href=\"/docs/gnu-patch/source/v2-8/manual.html\">Fixed complete original / 固定原文全文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch.man\">Editable original roff / 編集可能な原文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch-2.8.tar.gz\">Original distribution / 原著配布物</a> · <a href=\"/docs/gnu-patch/source/v2-8/AUTHORS\">Original AUTHORS</a></p></section>"}]
---

<div class="gnu-patch-original-content"><section class="gnu-patch-unit"><section class="Sh">
<h2 class="Sh" id="DIAGNOSTICS">DIAGNOSTICS</h2>
<p class="Pp">Diagnostics generally indicate that <b>patch</b> couldn't parse
    your patch file.</p>
<p class="Pp">If the <b>--verbose</b> option is given, the message <b>Hmm...</b>
    indicates that there is unprocessed text in the patch file and that
    <b>patch</b> is attempting to intuit whether there is a patch in that text
    and, if so, what kind of patch it is.</p>
<p class="Pp"><b>patch</b>'s exit status is 0 if all hunks are applied
    successfully, 1 if some hunks cannot be applied or there were merge
    conflicts, and 2 if there is more serious trouble. When applying a set of
    patches in a loop it behooves you to check this exit status so you don't
    apply a later patch to a partially patched file.</p>
</section><section class="Sh">
<h2 class="Sh" id="CAVEATS">CAVEATS</h2>
<p class="Pp">Context diffs cannot reliably represent the creation or deletion
    of empty files, empty directories, or special files such as symbolic links.
    Nor can they represent changes to file metadata like ownership, permissions,
    or whether one file is a hard link to another. If changes like these are
    also required, separate instructions (e.g. a shell script) to accomplish
    them should accompany the patch.</p>
<p class="Pp"><b>patch</b> cannot tell if the line numbers are off in an
    <b>ed</b> script, and can detect bad line numbers in a normal diff only when
    it finds a change or deletion. A context diff using fuzz factor 3 may have
    the same problem. You should probably do a context diff in these cases to
    see if the changes made sense. Of course, compiling without errors is a
    pretty good indication that the patch worked, but not always.</p>
<p class="Pp"><b>patch</b> usually produces the correct results, even when it
    has to do a lot of guessing. However, the results are guaranteed to be
    correct only when the patch is applied to exactly the same version of the
    file that the patch was generated from.</p>
</section></section></div>
