---
title: "環境変数・ファイル・関連項目"
documentId: "gnu-patch:2.8:03-environment-and-references"
licenseSource: gnu-patch-manual
toc: {"maxLevel": 3}
documentContext: [{"kind": "source", "html": "<section><h3>Libx GNU patch 2.8 Manual / Libx GNU patch 2.8 マニュアル</h3><p>Original authors: Larry Wall, Paul Eggert, Wayne Davison, David MacKenzie, Andreas Gruenbacher. Original publisher: Free Software Foundation. Modification and independent Japanese translation: Libx, 2026.</p><section class=\"Sh\">\n<h2 class=\"Sh\" id=\"patch-context-COPYING\">COPYING</h2>\n<p class=\"Pp\">Copyright © 1989–2025 Free Software Foundation, Inc.\n  <br/>\n  Copyright © 1984–1986, 1988 Larry Wall.</p>\n<p class=\"Pp\">Permission is granted to make and distribute verbatim copies of\n    this manual provided the copyright notice and this permission notice are\n    preserved on all copies.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute modified versions of\n    this manual under the conditions for verbatim copying, provided that the\n    entire resulting derived work is distributed under the terms of a permission\n    notice identical to this one.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute translations of this\n    manual into another language, under the above conditions for modified\n    versions, except that this permission notice may be included in translations\n    approved by the copyright holders instead of in the original English.</p>\n</section><p>The entire resulting derived manual is distributed under the identical original permission notice above. Copyright © 2026 Libx for static editing and independent unofficial Japanese translation.</p><p>Libx provides the complete fixed GNU patch 2.8 patch.man, organized into nine guide pages. Original examples remain static text. Other implementation files and historical NEWS entries are outside the translated scope.</p><p>LibxはGNU patch 2.8に同梱されたpatch.man全文を9ページに整理し、原文と独立した非公式日本語訳を提供します。例は原文の静的な文字列です。実装ファイルや過去のNEWSは翻訳対象外です。</p><p>Libx編集注記: --follow-symlinksの固定man本文と同梱NEWSの2.8変更説明には記述の違いがあります。本文を黙って修正せず、<a href=\"/docs/gnu-patch/source/v2-8/manual.html#follow\">固定manの説明</a>と<a href=\"/docs/gnu-patch/source/v2-8/NEWS\">原著NEWS</a>を参照できるようにしています。</p><p><a href=\"/docs/gnu-patch/source/v2-8/manual.html\">Fixed complete original / 固定原文全文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch.man\">Editable original roff / 編集可能な原文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch-2.8.tar.gz\">Original distribution / 原著配布物</a> · <a href=\"/docs/gnu-patch/source/v2-8/AUTHORS\">Original AUTHORS</a></p></section>"}]
---

<div class="gnu-patch-original-content"><section class="gnu-patch-unit"><section class="Sh">
<h2 class="Sh" id="ENVIRONMENT">環境変数</h2>
<dl class="Bl-tag">
<dt id="PATCH_GET"><b>PATCH_GET</b></dt>
<dd>RCS、ClearCase、Perforce、SCCSから、存在しないファイルや読み取り専用のファイルを既定で取得するかどうかを指定します。<code>-g</code>または<code>--get</code>を参照してください。</dd>
<dt id="POSIXLY_CORRECT"><b>POSIXLY_CORRECT</b></dt>
<dd>設定されている場合、<code>patch</code>は既定でPOSIX規格へより厳密に準拠します。<code>--posix</code>を参照してください。</dd>
<dt id="QUOTING_STYLE"><b>QUOTING_STYLE</b></dt>
<dd><code>--quoting-style</code>の既定値です。</dd>
<dt id="SIMPLE_BACKUP_SUFFIX"><b>SIMPLE_BACKUP_SUFFIX</b></dt>
<dd>簡易バックアップの名前で、<code>.orig</code>の代わりに使用する接尾辞です。</dd>
<dt id="TMPDIR"><b>TMPDIR</b>, <b>TMP</b>,
    <b>TEMP</b></dt>
<dd>一時ファイルを置くディレクトリです。このリストの中で最初に設定されている環境変数を使用します。どれも設定されていなければ、既定値はシステムに依存します。Unixでは通常<code>/tmp</code>です。</dd>
<dt id="VERSION_CONTROL"><b>VERSION_CONTROL</b>
    or <b>PATCH_VERSION_CONTROL</b></dt>
<dd>バックアップ名のバージョン管理方式を選びます。<code>-v</code>または<code>--version-control</code>を参照してください。</dd>
</dl>
</section><section class="Sh">
<h2 class="Sh" id="FILES">ファイル</h2>
<dl class="Bl-tag">
<dt><i>$TMPDIR</i><b>/p*</b></dt>
<dd>一時ファイル。</dd>
<dt><b>/dev/tty</b></dt>
<dd>制御端末。ユーザーへの質問に対する回答を受け取るために使用します。</dd>
</dl>
</section><section class="Sh">
<h2 class="Sh" id="SEE_ALSO">関連項目</h2>
<p class="Pp"><b>diff</b>(1), <b>ed</b>(1), <b>merge</b>(1).</p>
<p class="Pp">Marshall T. Rose and Einar A. Stefferud, Proposed Standard for
    Message Encapsulation, Internet RFC 934
    &lt;https://datatracker.ietf.org/doc/html/rfc934&gt; (1985-01).</p>
</section></section></div>
