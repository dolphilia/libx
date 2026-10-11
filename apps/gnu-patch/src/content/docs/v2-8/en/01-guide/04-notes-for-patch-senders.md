---
title: "Notes for patch senders"
documentId: "gnu-patch:2.8:04-notes-for-patch-senders"
licenseSource: gnu-patch-manual
toc: {"maxLevel": 3}
documentContext: [{"kind": "source", "html": "<section><h3>Libx GNU patch 2.8 Manual / Libx GNU patch 2.8 マニュアル</h3><p>Original authors: Larry Wall, Paul Eggert, Wayne Davison, David MacKenzie, Andreas Gruenbacher. Original publisher: Free Software Foundation. Modification and independent Japanese translation: Libx, 2026.</p><section class=\"Sh\">\n<h2 class=\"Sh\" id=\"patch-context-COPYING\">COPYING</h2>\n<p class=\"Pp\">Copyright © 1989–2025 Free Software Foundation, Inc.\n  <br/>\n  Copyright © 1984–1986, 1988 Larry Wall.</p>\n<p class=\"Pp\">Permission is granted to make and distribute verbatim copies of\n    this manual provided the copyright notice and this permission notice are\n    preserved on all copies.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute modified versions of\n    this manual under the conditions for verbatim copying, provided that the\n    entire resulting derived work is distributed under the terms of a permission\n    notice identical to this one.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute translations of this\n    manual into another language, under the above conditions for modified\n    versions, except that this permission notice may be included in translations\n    approved by the copyright holders instead of in the original English.</p>\n</section><p>The entire resulting derived manual is distributed under the identical original permission notice above. Copyright © 2026 Libx for static editing and independent unofficial Japanese translation.</p><p>Libx provides the complete fixed GNU patch 2.8 patch.man, organized into nine guide pages. Original examples remain static text. Other implementation files and historical NEWS entries are outside the translated scope.</p><p>LibxはGNU patch 2.8に同梱されたpatch.man全文を9ページに整理し、原文と独立した非公式日本語訳を提供します。例は原文の静的な文字列です。実装ファイルや過去のNEWSは翻訳対象外です。</p><p>Libx編集注記: --follow-symlinksの固定man本文と同梱NEWSの2.8変更説明には記述の違いがあります。本文を黙って修正せず、<a href=\"/docs/gnu-patch/source/v2-8/manual.html#follow\">固定manの説明</a>と<a href=\"/docs/gnu-patch/source/v2-8/NEWS\">原著NEWS</a>を参照できるようにしています。</p><p>Libx編集注記: 環境変数VERSION_CONTROL/PATCH_VERSION_CONTROLの説明では、原文が-vを参照しています。一方、オプションの説明では-vは--version、-Vは--version-controlです。原文と訳文の本文はそのまま保持しています。Libx editorial note: The original environment section refers to -v; the options section lists -v as --version and -V as --version-control. Both original and translated body text are preserved. <a href=\"/docs/gnu-patch/source/v2-8/manual.html#VERSION_CONTROL\">Original environment reference</a> · <a href=\"/docs/gnu-patch/source/v2-8/manual.html#V\">Original -V option</a></p><p><a href=\"/docs/gnu-patch/source/v2-8/manual.html\">Fixed complete original / 固定原文全文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch.man\">Editable original roff / 編集可能な原文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch-2.8.tar.gz\">Original distribution / 原著配布物</a> · <a href=\"/docs/gnu-patch/source/v2-8/AUTHORS\">Original AUTHORS</a></p></section>"}]
---

<div class="gnu-patch-original-content"><section class="gnu-patch-unit"><section class="Sh">
<h2 class="Sh" id="NOTES_FOR_PATCH_SENDERS">NOTES
  FOR PATCH SENDERS</h2>
<p class="Pp">There are several things you should bear in mind if you are going
    to be sending out patches.</p>
<p class="Pp">Create your patch systematically. When using a version control
    system this should be easy; for example, with Git you can use <b>git
    diff</b>. Otherwise, a good method is the command
    <b>diff -Naur </b><i>old new</i> where <i>old</i> and
    <i>new</i> identify the old and new directories. The names <i>old</i> and
    <i>new</i> should not contain any slashes.</p>
<p class="Pp">If the patch should communicate file timestamps as well as file
    contents, its <b>diff</b> commands' headers should have dates and times in
    Universal Time using traditional Unix format, so that patch recipients can
    use the <b>-Z</b> or <b>--set-utc</b> option. Here is an example command to
    generate such headers, using Bourne shell syntax:</p>

<div class="Bd-indent"><b>LC_ALL=C TZ=UTC0 diff -Naur myprog-2.7
  myprog-2.8</b></div>
<p class="Pp">Tell your recipients how to apply the patch by telling them which
    directory to <b>cd</b> to, and which <b>patch</b> options to use. The option
    string <b>-Np1</b> is recommended. Test your procedure by pretending to be a
    recipient and applying your patch to a copy of the original files.</p>
<p class="Pp">You can save people a lot of grief by keeping a
    <b>patchlevel.h</b> file which is patched to increment the patch level as
    the first diff in the patch file you send out. If you put a <b>Prereq:</b>
    line in with the patch, it won't let them apply patches out of order without
    some warning.</p>
<p class="Pp">You can create a file by sending out a diff that compares
    <b>/dev/null</b> or an empty file dated the Epoch (1970-01-01 00:00:00 UTC)
    to the file you want to create. This only works if the file you want to
    create doesn't exist already in the target directory. Conversely, you can
    remove a file by sending out a context diff that compares the file to be
    deleted with an empty file dated the Epoch. The file will be removed unless
    <b>patch</b> is conforming to POSIX and the <b>-E</b> or
    <b>--remove-empty-files</b> option is not given. An easy way to generate
    patches that create and remove files is to use GNU <b>diff</b>'s <b>-N</b>
    or <b>--new-file</b> option.</p>
<p class="Pp">If the recipient is supposed to use the <b>-p</b><i>N</i> option,
    do not send output that looks like this:</p>

<div class="Bd-indent"><span class="Li">diff -Naur v2.0.29/prog/README
  prog/README</span>
<br/>
--- v2.0.29/prog/README Mon Mar 10 15:13:12 2024
<br/>
+++ prog/README Mon Mar 17 14:58:22 2024</div>
<p class="Pp">because the two file names have different numbers of slashes, and
    different versions of <b>patch</b> interpret the file names differently. To
    avoid confusion, send output that looks like this instead:</p>

<div class="Bd-indent"><span class="Li">diff -Naur v2.0.29/prog/README
  v2.0.30/prog/README</span>
<br/>
--- v2.0.29/prog/README Mon Mar 10 15:13:12 2024
<br/>
+++ v2.0.30/prog/README Mon Mar 17 14:58:22 2024</div>

<p class="Pp">Avoid sending patches that compare backup file names like
    <b>README.orig</b>, since this might confuse <b>patch</b> into patching a
    backup file instead of the real file. Instead, send patches that compare the
    same base file names in different directories, e.g. <b>old/README</b> and
    <b>new/README</b>.</p>
<p class="Pp">Take care not to send out reversed patches, since it makes people
    wonder whether they already applied the patch.</p>
<p class="Pp">Try not to have your patch modify derived files (e.g. the file
    <b>configure</b> where there is a line <b>configure: configure.ac</b> in
    your makefile), since the recipient should be able to regenerate the derived
    files anyway. If you must send diffs of derived files, generate the diffs
    using UTC, have the recipients apply the patch with the <b>-Z</b> or
    <b>--set-utc</b> option, and have them remove any unpatched files that
    depend on patched files (e.g. with <b>make clean</b>).</p>
<p class="Pp">While you may be able to get away with putting 582 diff listings
    into one file, it may be wiser to group related patches into separate files
    in case something goes haywire.</p>
</section></section></div>
