---
title: "パッチを送る人への注意"
documentId: "gnu-patch:2.8:04-notes-for-patch-senders"
licenseSource: gnu-patch-manual
toc: {"maxLevel": 3}
documentContext: [{"kind": "source", "html": "<section><h3>Libx GNU patch 2.8 Manual / Libx GNU patch 2.8 マニュアル</h3><p>Original authors: Larry Wall, Paul Eggert, Wayne Davison, David MacKenzie, Andreas Gruenbacher. Original publisher: Free Software Foundation. Modification and independent Japanese translation: Libx, 2026.</p><section class=\"Sh\">\n<h2 class=\"Sh\" id=\"patch-context-COPYING\">COPYING</h2>\n<p class=\"Pp\">Copyright © 1989–2025 Free Software Foundation, Inc.\n  <br/>\n  Copyright © 1984–1986, 1988 Larry Wall.</p>\n<p class=\"Pp\">Permission is granted to make and distribute verbatim copies of\n    this manual provided the copyright notice and this permission notice are\n    preserved on all copies.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute modified versions of\n    this manual under the conditions for verbatim copying, provided that the\n    entire resulting derived work is distributed under the terms of a permission\n    notice identical to this one.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute translations of this\n    manual into another language, under the above conditions for modified\n    versions, except that this permission notice may be included in translations\n    approved by the copyright holders instead of in the original English.</p>\n</section><p>The entire resulting derived manual is distributed under the identical original permission notice above. Copyright © 2026 Libx for static editing and independent unofficial Japanese translation.</p><p>Libx provides the complete fixed GNU patch 2.8 patch.man, organized into nine guide pages. Original examples remain static text. Other implementation files and historical NEWS entries are outside the translated scope.</p><p>LibxはGNU patch 2.8に同梱されたpatch.man全文を9ページに整理し、原文と独立した非公式日本語訳を提供します。例は原文の静的な文字列です。実装ファイルや過去のNEWSは翻訳対象外です。</p><p>Libx編集注記: --follow-symlinksの固定man本文と同梱NEWSの2.8変更説明には記述の違いがあります。本文を黙って修正せず、<a href=\"/docs/gnu-patch/source/v2-8/manual.html#follow\">固定manの説明</a>と<a href=\"/docs/gnu-patch/source/v2-8/NEWS\">原著NEWS</a>を参照できるようにしています。</p><p><a href=\"/docs/gnu-patch/source/v2-8/manual.html\">Fixed complete original / 固定原文全文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch.man\">Editable original roff / 編集可能な原文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch-2.8.tar.gz\">Original distribution / 原著配布物</a> · <a href=\"/docs/gnu-patch/source/v2-8/AUTHORS\">Original AUTHORS</a></p></section>"}]
---

<div class="gnu-patch-original-content"><section class="gnu-patch-unit"><section class="Sh">
<h2 class="Sh" id="NOTES_FOR_PATCH_SENDERS">パッチを送る人への注意</h2>
<p class="Pp">パッチを送る場合は、いくつか心に留めておくべきことがあります。</p>
<p class="Pp">パッチは一貫した手順で作成してください。バージョン管理システムを使用していれば、これは簡単なはずです。たとえばGitでは<code>git diff</code>を使用できます。それ以外の場合は、<code>diff -Naur old new</code>がよい方法です。<var>old</var>と<var>new</var>は、それぞれ変更前と変更後のディレクトリを表します。これらの名前にスラッシュを含めてはいけません。</p>
<p class="Pp">ファイルの内容だけでなくタイムスタンプも伝える場合は、<code>diff</code>の出力ヘッダーに、従来のUnix形式を使った世界時の日付と時刻を含めるべきです。そうすれば、受け手は<code>-Z</code>または<code>--set-utc</code>を使用できます。次は、そのようなヘッダーを生成するコマンドの例です。Bourneシェルの構文を使用しています。</p>
<div class="Bd-indent"><b>LC_ALL=C TZ=UTC0 diff -Naur myprog-2.7
  myprog-2.8</b></div>
<p class="Pp">受け手がどのディレクトリへ<code>cd</code>し、<code>patch</code>にどのオプションを指定すればよいかを伝えて、パッチの適用方法を説明してください。オプションは<code>-Np1</code>を推奨します。自分を受け手とみなし、元のファイルのコピーへパッチを適用して、手順を試してください。</p>
<p class="Pp"><code>patchlevel.h</code>ファイルを用意し、送るパッチファイルの最初の差分でパッチレベルを増やすようにすれば、多くの人の苦労を減らせます。パッチに<code>Prereq:</code>行を入れておけば、順序を間違えて適用しようとしたときに、何の警告もなく適用されることを防げます。</p>
<p class="Pp"><code>/dev/null</code>、またはエポック（1970-01-01 00:00:00 UTC）の時刻を持つ空ファイルと、作成したいファイルを比較する差分を送れば、ファイルを新規作成できます。これは、対象ディレクトリにそのファイルがまだ存在しない場合にだけ機能します。逆に、削除したいファイルとエポックの時刻を持つ空ファイルを比較するコンテキスト差分を送れば、そのファイルを削除できます。ただし、<code>patch</code>がPOSIXに準拠していて、<code>-E</code>または<code>--remove-empty-files</code>を指定しない場合は削除しません。ファイルを作成・削除するパッチを簡単に生成するには、GNU <code>diff</code>の<code>-N</code>または<code>--new-file</code>を使用します。</p>
<p class="Pp">受け手が<code>-pN</code>を使用する場合、次のような出力を送ってはいけません。</p>
<div class="Bd-indent"><span class="Li">diff -Naur v2.0.29/prog/README
  prog/README</span>
<br/>
--- v2.0.29/prog/README Mon Mar 10 15:13:12 2024
<br/>
+++ prog/README Mon Mar 17 14:58:22 2024</div>
<p class="Pp">2つのファイル名でスラッシュの数が異なり、<code>patch</code>のバージョンによってファイル名の解釈が異なるためです。混乱を避けるには、代わりに次のような出力を送ってください。</p>
<div class="Bd-indent"><span class="Li">diff -Naur v2.0.29/prog/README
  v2.0.30/prog/README</span>
<br/>
--- v2.0.29/prog/README Mon Mar 10 15:13:12 2024
<br/>
+++ v2.0.30/prog/README Mon Mar 17 14:58:22 2024</div>
<p class="Pp"><code>README.orig</code>のようなバックアップファイル名を比較するパッチは避けてください。<code>patch</code>が本来のファイルではなくバックアップへパッチを適用してしまうおそれがあるためです。代わりに、<code>old/README</code>と<code>new/README</code>のように、別々のディレクトリにある同じベース名のファイルを比較するパッチを送ってください。</p>
<p class="Pp">反転したパッチを送らないように注意してください。受け手が、すでにそのパッチを適用したのではないかと迷ってしまうためです。</p>
<p class="Pp">パッチでは派生ファイルを変更しないようにしてください。たとえば、makefileに<code>configure: configure.ac</code>という行がある場合の<code>configure</code>が該当します。受け手自身が派生ファイルを再生成できるはずだからです。派生ファイルの差分を送る必要がある場合は、UTCを使って差分を生成し、受け手には<code>-Z</code>または<code>--set-utc</code>を指定して適用してもらってください。また、パッチを適用したファイルに依存する未変更のファイルを、すべて（たとえば<code>make clean</code>で）削除してもらってください。</p>
<p class="Pp">582個の差分リストを1つのファイルにまとめても済むかもしれませんが、問題が起きた場合に備え、関連するパッチごとにファイルを分ける方が賢明でしょう。</p>
</section></section></div>
