---
title: "Options"
documentId: "gnu-patch:2.8:02-options"
licenseSource: gnu-patch-manual
toc: {"maxLevel": 3}
documentContext: [{"kind": "source", "html": "<section><h3>Libx GNU patch 2.8 Manual / Libx GNU patch 2.8 マニュアル</h3><p>Original authors: Larry Wall, Paul Eggert, Wayne Davison, David MacKenzie, Andreas Gruenbacher. Original publisher: Free Software Foundation. Modification and independent Japanese translation: Libx, 2026.</p><section class=\"Sh\">\n<h2 class=\"Sh\" id=\"patch-context-COPYING\">COPYING</h2>\n<p class=\"Pp\">Copyright © 1989–2025 Free Software Foundation, Inc.\n  <br/>\n  Copyright © 1984–1986, 1988 Larry Wall.</p>\n<p class=\"Pp\">Permission is granted to make and distribute verbatim copies of\n    this manual provided the copyright notice and this permission notice are\n    preserved on all copies.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute modified versions of\n    this manual under the conditions for verbatim copying, provided that the\n    entire resulting derived work is distributed under the terms of a permission\n    notice identical to this one.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute translations of this\n    manual into another language, under the above conditions for modified\n    versions, except that this permission notice may be included in translations\n    approved by the copyright holders instead of in the original English.</p>\n</section><p>The entire resulting derived manual is distributed under the identical original permission notice above. Copyright © 2026 Libx for static editing and independent unofficial Japanese translation.</p><p>Libx provides the complete fixed GNU patch 2.8 patch.man, organized into nine guide pages. Original examples remain static text. Other implementation files and historical NEWS entries are outside the translated scope.</p><p>LibxはGNU patch 2.8に同梱されたpatch.man全文を9ページに整理し、原文と独立した非公式日本語訳を提供します。例は原文の静的な文字列です。実装ファイルや過去のNEWSは翻訳対象外です。</p><p>Libx編集注記: --follow-symlinksの固定man本文と同梱NEWSの2.8変更説明には記述の違いがあります。本文を黙って修正せず、<a href=\"/docs/gnu-patch/source/v2-8/manual.html#follow\">固定manの説明</a>と<a href=\"/docs/gnu-patch/source/v2-8/NEWS\">原著NEWS</a>を参照できるようにしています。</p><p>Libx編集注記: 環境変数VERSION_CONTROL/PATCH_VERSION_CONTROLの説明では、原文が-vを参照しています。一方、オプションの説明では-vは--version、-Vは--version-controlです。原文と訳文の本文はそのまま保持しています。Libx editorial note: The original environment section refers to -v; the options section lists -v as --version and -V as --version-control. Both original and translated body text are preserved. <a href=\"/docs/gnu-patch/source/v2-8/manual.html#VERSION_CONTROL\">Original environment reference</a> · <a href=\"/docs/gnu-patch/source/v2-8/manual.html#V\">Original -V option</a></p><p><a href=\"/docs/gnu-patch/source/v2-8/manual.html\">Fixed complete original / 固定原文全文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch.man\">Editable original roff / 編集可能な原文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch-2.8.tar.gz\">Original distribution / 原著配布物</a> · <a href=\"/docs/gnu-patch/source/v2-8/AUTHORS\">Original AUTHORS</a></p></section>"}]
---

<div class="gnu-patch-original-content"><section class="gnu-patch-unit"><section class="Sh">
<h2 class="Sh" id="OPTIONS">OPTIONS</h2>
<dl class="Bl-tag">
<dt id="b"><b>-b</b> or
    <b>--backup</b></dt>
<dd>Make backup files. That is, when patching a file, rename or copy the
      original instead of removing it. See the <b>-V</b> or
      <b>--version-control</b> option for details about how backup file names
      are determined.</dd>
<dt id="backup"><b>--backup-if-mismatch</b></dt>
<dd>Back up a file if the patch does not match the file exactly and if backups
      are not otherwise requested. This is the default unless <b>patch</b> is
      conforming to POSIX.</dd>
<dt id="no"><b>--no-backup-if-mismatch</b></dt>
<dd>Do not back up a file if the patch does not match the file exactly and if
      backups are not otherwise requested. This is the default if <b>patch</b>
      is conforming to POSIX.</dd>
<dt id="B"><b>-B</b> <i>pref</i> or
    <b>--prefix=</b><i>pref</i></dt>
<dd>Use the <b>simple</b> method to determine backup file names (see the <b>-V
      </b><i>method</i> or <b>--version-control </b><i>method</i> option), and
      append <i>pref</i> to a file name when generating its backup file name.
      For example, with <b>-B /junk/</b> the simple backup file name for
      <b>src/patch/util.c</b> is <b>/junk/src/patch/util.c</b>.</dd>
<dt id="binary"><b>--binary</b></dt>
<dd>Write all files in binary mode, except for standard output and
      <b>/dev/tty</b>. When reading, disable the heuristic for transforming CRLF
      line endings into LF line endings. This option is needed on POSIX systems
      when applying patches generated on non-POSIX systems to non-POSIX files.
      (On POSIX systems, file reads and writes never transform line endings. On
      Windows, reads and writes do transform line endings by default, and
      patches should be generated by <b>diff --binary</b> when line
      endings are significant.)</dd>
<dt><b>-c</b> or <b>--context</b></dt>
<dd>Interpret the patch file as a ordinary context diff.</dd>
<dt id="d"><b>-d</b> <i>dir</i> or
    <b>--directory=</b><i>dir</i></dt>
<dd>Change to the directory <i>dir</i> immediately, before doing anything
      else.</dd>
<dt id="D"><b>-D</b> <i>define</i> or
    <b>--ifdef=</b><i>define</i></dt>
<dd>Use the <b>#ifdef</b> ... <b>#endif</b> construct to mark changes, with
      <i>define</i> as the differentiating symbol.</dd>
<dt id="dry"><b>--dry-run</b></dt>
<dd>Print the results of applying the patches without actually changing any
      files.</dd>
<dt id="e"><b>-e</b> or <b>--ed</b></dt>
<dd>Interpret the patch file as an <b>ed</b> script.</dd>
<dt id="E"><b>-E</b> or
    <b>--remove-empty-files</b></dt>
<dd>Remove output files that are empty after the patches have been applied.
      Normally this option is unnecessary, since <b>patch</b> can examine the
      timestamps on the header to determine whether a file should exist after
      patching. However, if the input is not a context diff or if <b>patch</b>
      is conforming to POSIX, <b>patch</b> does not remove empty patched files
      unless this option is given. When <b>patch</b> removes a file, it also
      attempts to remove any empty ancestor directories.</dd>
<dt id="f"><b>-f</b> or <b>--force</b></dt>
<dd>Assume that the user knows exactly what he or she is doing, and do not ask
      any questions. Skip patches whose headers do not say which file is to be
      patched; patch files even though they have the wrong version for the
      <b>Prereq:</b> line in the patch; and assume that patches are not reversed
      even if they look like they are. This option does not suppress commentary;
      use <b>-s</b> for that.</dd>
<dt id="F"><b>-F</b> <i>num</i> or
    <b>--fuzz=</b><i>num</i></dt>
<dd>Set the maximum fuzz factor. This option only applies to diffs that have
      context, and causes <b>patch</b> to ignore up to that many lines of
      context in looking for places to install a hunk. Note that a larger fuzz
      factor increases the odds of a faulty patch. The default fuzz factor is 2.
      A fuzz factor greater than or equal to the number of lines of context in
      the context diff, ordinarily 3, ignores all context.</dd>
<dt id="g"><b>-g</b> <i>num</i> or
    <b>--get=</b><i>num</i></dt>
<dd>This option controls <b>patch</b>'s actions when a file is under RCS or
      SCCS control, and does not exist or is read-only and matches the default
      version, or when a file is under ClearCase or Perforce control and does
      not exist. If <i>num</i> is positive, <b>patch</b> gets (or checks out)
      the file from the revision control system; if zero, <b>patch</b> ignores
      RCS, ClearCase, Perforce, and SCCS and does not get the file; and if
      negative, <b>patch</b> asks the user whether to get the file. The default
      value of this option is given by the value of the <b>PATCH_GET</b>
      environment variable if it is set; if not, the default value is zero.</dd>
<dt id="help"><b>--help</b></dt>
<dd>Print a summary of options and exit.</dd>
<dt id="i"><b>-i</b> <i>patchfile</i> or
    <b>--input=</b><i>patchfile</i></dt>
<dd>Read the patch from <i>patchfile</i>. If <i>patchfile</i> is <b>-</b>,
      read from standard input, the default.</dd>
<dt id="l"><b>-l</b> or
    <b>--ignore-whitespace</b></dt>
<dd>Match patterns loosely, in case tabs or spaces have been munged in your
      files. Any sequence of one or more blanks in the patch file matches any
      sequence in the original file, and sequences of blanks at the ends of
      lines are ignored. Normal characters must still match exactly. Each line
      of the context must still match a line in the original file.</dd>
<dt id="merge"><b>--merge</b> or
    <b>--merge=merge</b> or <b>--merge=diff3</b></dt>
<dd>Merge a patch file into the original files similar to <b>diff3</b>(1) or
      <b>merge</b>(1). If a conflict is found, <b>patch</b> outputs a warning
      and brackets the conflict with <b>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</b> and
      <b>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</b> lines. A typical conflict will look
      like this:</dd>
</dl>

<div class="Bd-indent">
<pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;&#10;lines from the original file&#10;|||||||&#10;original lines from the patch&#10;=======&#10;new lines from the patch&#10;&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code></pre>
</div>

<dl class="Bl-tag">
<dt>
</dt>
<dd>The optional argument of <b>--merge</b> determines the output format for
      conflicts: the diff3 format shows the |||||||<b> section with the
      original</b> <b>lines from the patch; in the merge format, this section is
      missing. The merge</b> <b>format is the default.</b>
<p class="Pp">This option implies <b>--forward</b> and does not take the
        <b>--fuzz</b>=<i>num</i> option into account.</p>
</dd>
</dl>
<dl class="Bl-tag">
<dt id="n"><b>-n</b> or
    <b>--normal</b></dt>
<dd>Interpret the patch file as a normal diff.</dd>
<dt id="N"><b>-N</b> or
    <b>--forward</b></dt>
<dd>When a patch does not apply, patch usually checks if the patch looks like
      it has been applied already by trying to reverse-apply the first hunk. The
      <b>--forward</b> option prevents that. See also <b>-R</b>.</dd>
<dt id="o"><b>-o</b> <i>outfile</i> or
    <b>--output=</b><i>outfile</i></dt>
<dd>Send output to <i>outfile</i> instead of patching files in place. Do not
      use this option if <i>outfile</i> is one of the files to be patched. When
      <i>outfile</i> is <b>-</b>, send output to standard output, and send any
      messages that would usually go to standard output to standard error.</dd>
<dt id="p"><b>-p</b><i>num</i> or
    <b>--strip</b><b>=</b><i>num</i></dt>
<dd>Strip the smallest prefix containing <i>num</i> leading slashes from each
      file name found in the patch file. A sequence of one or more adjacent
      slashes is counted as a single slash. This controls how file names found
      in the patch file are treated, in case you keep your files in a different
      directory than the person who sent out the patch. For example, supposing
      the file name in the patch file was
    
</dd>
</dl>
<div class="Bd-indent"><b>/u/howard/src/blurfl/blurfl.c</b></div>
<p class="Pp">setting <b>-p0</b> gives the entire file name unmodified,
    <b>-p1</b> gives</p>

<div class="Bd-indent"><b>u/howard/src/blurfl/blurfl.c</b></div>
<p class="Pp">without the leading slash, <b>-p4</b> gives</p>

<div class="Bd-indent"><b>blurfl/blurfl.c</b></div>
<p class="Pp">and not specifying <b>-p</b> at all just gives you
    <b>blurfl.c</b>. Whatever you end up with is looked for either in the
    current directory, or the directory specified by the <b>-d</b> option.</p>
<dl class="Bl-tag">
<dt id="posix"><b>--posix</b></dt>
<dd>Conform more strictly to the POSIX standard, as follows.</dd>
</dl>
<div class="Bd-indent">
<ul class="Bl-bullet">
<li>Take the first existing file from the list (old, new, index) when
      intuiting file names from diff headers.</li>
<li>Do not remove files that are empty after patching.</li>
<li>Do not ask whether to get files from RCS, ClearCase, Perforce, or
    SCCS.</li>
<li>Require that all options precede the files in the command line.</li>
<li>Do not backup files when there is a mismatch.</li>
</ul>
</div>
<dl class="Bl-tag">
<dt id="quoting"><b>--quoting-style=</b><i>word</i></dt>
<dd>Use style <i>word</i> to quote output names. The <i>word</i> should be one
      of the following:</dd>
</dl>
<div class="Bd-indent">
<dl class="Bl-tag">
<dt id="literal"><b>literal</b></dt>
<dd>Output names as-is.</dd>
<dt id="shell"><b>shell</b></dt>
<dd>Quote names for the shell if they contain shell metacharacters or would
      cause ambiguous output.</dd>
<dt id="shell-always"><b>shell-always</b></dt>
<dd>Quote names for the shell, even if they would normally not require
      quoting.</dd>
<dt id="c"><b>c</b></dt>
<dd>Quote names as for a C language string.</dd>
<dt id="escape"><b>escape</b></dt>
<dd>Quote as with <b>c</b> except omit the surrounding double-quote
      characters.</dd>
</dl>
<p class="Pp">You can specify the default value of the <b>--quoting-style</b>
    option with the environment variable <b>QUOTING_STYLE</b>. If that
    environment variable is not set, the default value is <b>shell</b>.</p>
</div>
<dl class="Bl-tag">
<dt id="r"><b>-r</b> <i>rejectfile</i> or
    <b>--reject-file=</b><i>rejectfile</i></dt>
<dd>Put rejects into <i>rejectfile</i> instead of the default <b>.rej</b>
      file. When <i>rejectfile</i> is <b>-</b>, discard rejects.</dd>
<dt id="R"><b>-R</b> or
    <b>--reverse</b></dt>
<dd>Assume that this patch was created with the old and new files swapped.
      (Yes, I'm afraid that does happen occasionally, human nature being what it
      is.) <b>patch</b> attempts to swap each hunk around before applying it.
      Rejects come out in the swapped format. The <b>-R</b> option does not work
      with <b>ed</b> diff scripts because there is too little information to
      reconstruct the reverse operation.
    <p class="Pp">If the first hunk of a patch fails, <b>patch</b> reverses the
        hunk to see if it can be applied that way. If it can, you are asked if
        you want to have the <b>-R</b> option set. If it can't, the patch
        continues to be applied normally. (Note: this method cannot detect a
        reversed patch if it is a normal diff and if the first command is an
        append (i.e. it should have been a delete) since appends always succeed,
        due to the fact that a null context matches anywhere. Luckily, most
        patches add or change lines rather than delete them, so most reversed
        normal diffs begin with a delete, which fails, triggering the
        heuristic.)</p>
</dd>
<dt id="read"><b>--read-only=</b><i>behavior</i></dt>
<dd>Behave as requested when trying to modify a read-only file: <b>ignore</b>
      the potential problem, <b>warn</b> about it (the default), or
    <b>fail</b>.</dd>
<dt id="reject"><b>--reject-format=</b><i>format</i></dt>
<dd>Produce reject files in the specified <i>format</i> (either <b>context</b>
      or <b>unified</b>). Without this option, rejected hunks come out in
      unified diff format if the input patch was of that format, otherwise in
      ordinary context diff form.</dd>
<dt id="s"><b>-s</b> or <b>--silent</b> or
    <b>--quiet</b></dt>
<dd>Work silently, unless an error occurs.</dd>
<dt id="follow"><b>--follow-symlinks</b></dt>
<dd>When looking for input files, follow symbolic links. Replaces the symbolic
      links, instead of modifying the files the symbolic links point to.
      Git-style patches to symbolic links will no longer apply. This option
      exists for backwards compatibility with previous versions of patch; its
      use is discouraged.</dd>
<dt id="t"><b>-t</b> or <b>--batch</b></dt>
<dd>Suppress questions like <b>-f</b>, but make some different assumptions:
      skip patches whose headers do not contain file names (the same as
      <b>-f</b>); skip patches for which the file has the wrong version for the
      <b>Prereq:</b> line in the patch; and assume that patches are reversed if
      they look like they are.</dd>
<dt id="T"><b>-T</b> or
    <b>--set-time</b></dt>
<dd>Set the modification and access times of patched files from timestamps
      given in context diff headers. Unless specified in the timestamps, assume
      that the context diff headers use local time.
    <p class="Pp">Use of this option with timestamps that do not include time
        zones is not recommended, because patches using local time cannot easily
        be used by people in other time zones, and because local timestamps are
        ambiguous when local clocks move backwards during daylight-saving time
        adjustments. Make sure that timestamps include time zones, or generate
        patches with UTC and use the <b>-Z</b> or <b>--set-utc</b> option
        instead.</p>
</dd>
<dt id="u"><b>-u</b> or
    <b>--unified</b></dt>
<dd>Interpret the patch file as a unified context diff.</dd>
<dt id="v"><b>-v</b> or
    <b>--version</b></dt>
<dd>Print out <b>patch</b>'s revision header and patch level, and exit.</dd>
<dt id="V"><b>-V</b> <i>method</i> or
    <b>--version-control=</b><i>method</i></dt>
<dd>Use <i>method</i> to determine backup file names. The method can also be
      given by the <b>PATCH_VERSION_CONTROL</b> (or, if that's not set, the
      <b>VERSION_CONTROL</b>) environment variable, which is overridden by this
      option. The method does not affect whether backup files are made; it
      affects only the names of any backup files that are made.
    <p class="Pp">The value of <i>method</i> is like the GNU Emacs
        version-control variable; <b>patch</b> also recognizes synonyms that are
        more descriptive. The valid values for <i>method</i> are (unique
        abbreviations are accepted):</p>
</dd>
</dl>
<div class="Bd-indent">
<dl class="Bl-tag">
<dt id="existing"><b>existing</b> or
    <b>nil</b></dt>
<dd>Make numbered backups of files that already have them, otherwise simple
      backups. This is the default.</dd>
<dt id="numbered"><b>numbered</b> or
    <b>t</b></dt>
<dd>Make numbered backups. The numbered backup file name for <i>F</i> is
      <i>F</i><b>.~</b><i>N</i><b>~</b> where <i>N</i> is the version
    number.</dd>
<dt id="simple"><b>simple</b> or
    <b>never</b></dt>
<dd>Make simple backups. The <b>-B</b> or <b>--prefix</b>, <b>-Y</b> or
      <b>--basename-prefix</b>, and <b>-z</b> or <b>--suffix</b> options specify
      the simple backup file name. If none of these options are given, then a
      simple backup suffix is used; it is the value of the
      <b>SIMPLE_BACKUP_SUFFIX</b> environment variable if set, and is
      <b>.orig</b> otherwise.</dd>
</dl>
<p class="Pp">With numbered or simple backups, if the backup file name is too
    long, the backup suffix <b>~</b> is used instead; if even appending <b>~</b>
    would make the name too long, then <b>~</b> replaces the last character of
    the file name.</p>
</div>
<dl class="Bl-tag">
<dt id="verbose"><b>--verbose</b></dt>
<dd>Output extra information about the work being done.</dd>
<dt id="x"><b>-x</b> <i>num</i> or
    <b>--debug=</b><i>num</i></dt>
<dd>Set internal debugging flags of interest only to <b>patch</b>
    patchers.</dd>
<dt id="Y"><b>-Y</b> <i>pref</i> or
    <b>--basename-prefix=</b><i>pref</i></dt>
<dd>Use the <b>simple</b> method to determine backup file names (see the <b>-V
      </b><i>method</i> or <b>--version-control </b><i>method</i> option), and
      prefix <i>pref</i> to the basename of a file name when generating its
      backup file name. For example, with <b>-Y .del/</b> the simple
      backup file name for <b>src/patch/util.c</b> is
      <b>src/patch/.del/util.c</b>.</dd>
<dt id="z"><b>-z</b> <i>suffix</i> or
    <b>--suffix=</b><i>suffix</i></dt>
<dd>Use the <b>simple</b> method to determine backup file names (see the <b>-V
      </b><i>method</i> or <b>--version-control </b><i>method</i> option), and
      use <i>suffix</i> as the suffix. For example, with <b>-z -</b> the
      backup file name for <b>src/patch/util.c</b> is
    <b>src/patch/util.c-</b>.</dd>
<dt id="Z"><b>-Z</b> or
    <b>--set-utc</b></dt>
<dd>Set the modification and access times of patched files from timestamps
      given in context diff headers. Unless specified in the timestamps, assume
      that the context diff headers use Coordinated Universal Time (UTC, often
      known as GMT). Also see the <b>-T</b> or <b>--set-time</b> option.
    <p class="Pp">The <b>-Z</b> or <b>--set-utc</b> and <b>-T</b> or
        <b>--set-time</b> options normally refrain from setting a file's time if
        the file's original time does not match the time given in the patch
        header, or if its contents do not match the patch exactly. However, if
        the <b>-f</b> or <b>--force</b> option is given, the file time is set
        regardless.</p>
<p class="Pp">Due to the limitations of <b>diff</b> output format, these
        options cannot update the times of files whose contents have not
        changed. Also, if you use these options, you should remove (e.g. with
        <b>make clean</b>) all files that depend on the patched files, so
        that later invocations of <b>make</b> do not get confused by the patched
        files' times.</p>
</dd>
</dl>
</section></section></div>
