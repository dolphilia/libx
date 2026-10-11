---
title: "導入と使い方"
documentId: "gnu-patch:2.8:01-introduction"
licenseSource: gnu-patch-manual
toc: {"maxLevel": 3}
documentContext: [{"kind": "source", "html": "<section><h3>Libx GNU patch 2.8 Manual / Libx GNU patch 2.8 マニュアル</h3><p>Original authors: Larry Wall, Paul Eggert, Wayne Davison, David MacKenzie, Andreas Gruenbacher. Original publisher: Free Software Foundation. Modification and independent Japanese translation: Libx, 2026.</p><section class=\"Sh\">\n<h2 class=\"Sh\" id=\"patch-context-COPYING\">COPYING</h2>\n<p class=\"Pp\">Copyright © 1989–2025 Free Software Foundation, Inc.\n  <br/>\n  Copyright © 1984–1986, 1988 Larry Wall.</p>\n<p class=\"Pp\">Permission is granted to make and distribute verbatim copies of\n    this manual provided the copyright notice and this permission notice are\n    preserved on all copies.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute modified versions of\n    this manual under the conditions for verbatim copying, provided that the\n    entire resulting derived work is distributed under the terms of a permission\n    notice identical to this one.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute translations of this\n    manual into another language, under the above conditions for modified\n    versions, except that this permission notice may be included in translations\n    approved by the copyright holders instead of in the original English.</p>\n</section><p>The entire resulting derived manual is distributed under the identical original permission notice above. Copyright © 2026 Libx for static editing and independent unofficial Japanese translation.</p><p>Libx provides the complete fixed GNU patch 2.8 patch.man, organized into nine guide pages. Original examples remain static text. Other implementation files and historical NEWS entries are outside the translated scope.</p><p>LibxはGNU patch 2.8に同梱されたpatch.man全文を9ページに整理し、原文と独立した非公式日本語訳を提供します。例は原文の静的な文字列です。実装ファイルや過去のNEWSは翻訳対象外です。</p><p>Libx編集注記: --follow-symlinksの固定man本文と同梱NEWSの2.8変更説明には記述の違いがあります。本文を黙って修正せず、<a href=\"/docs/gnu-patch/source/v2-8/manual.html#follow\">固定manの説明</a>と<a href=\"/docs/gnu-patch/source/v2-8/NEWS\">原著NEWS</a>を参照できるようにしています。</p><p><a href=\"/docs/gnu-patch/source/v2-8/manual.html\">Fixed complete original / 固定原文全文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch.man\">Editable original roff / 編集可能な原文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch-2.8.tar.gz\">Original distribution / 原著配布物</a> · <a href=\"/docs/gnu-patch/source/v2-8/AUTHORS\">Original AUTHORS</a></p></section>"}]
---

<div class="gnu-patch-original-content"><section class="gnu-patch-unit"><section class="Sh">
<h2 class="Sh" id="NAME">名前</h2>
<p class="Pp">patch — オリジナルファイルに差分ファイルを適用する</p>
</section><section class="Sh">
<h2 class="Sh" id="SYNOPSIS">書式</h2>
<p class="Pp"><b>patch</b> [<i>options</i>] [<i>originalfile</i>
    [<i>patchfile</i>]]</p>
<p class="Pp">通常は、次の簡単な形式で使用します。</p>
<p class="Pp"><b>patch -p</b><i>num</i> <b>&lt;</b><i>patchfile</i></p>
</section><section class="Sh">
<h2 class="Sh" id="DESCRIPTION">説明</h2>
<p class="Pp"><code>patch</code>は、<code>diff</code>プログラムが生成した差分リストを含むパッチファイル<var>patchfile</var>を受け取り、その差分を1個または複数の元のファイルに適用して、変更後のファイルを生成します。通常、変更後のファイルは元のファイルと置き換わります。バックアップも作成できます。<code>-b</code>または<code>--backup</code>オプションを参照してください。変更するファイルの名前は通常パッチファイルから取得しますが、変更するファイルが1個だけなら、コマンドラインで<var>originalfile</var>として指定できます。</p>
<p class="Pp">起動すると、<code>patch</code>は差分リストの形式を判別しようとします。ただし、<code>-c</code>（<code>--context</code>）、<code>-e</code>（<code>--ed</code>）、<code>-n</code>（<code>--normal</code>）、<code>-u</code>（<code>--unified</code>）のいずれかで形式を指定した場合は、その指定を優先します。コンテキスト差分（旧形式、新形式、unified形式）と通常形式の差分は<code>patch</code>自身が適用します。ed形式の差分は、パイプで<code>ed(1)</code>エディターに渡すだけです。</p>
<p class="Pp"><code>patch</code>は、差分の前にある不要なテキストを読み飛ばしてから差分を適用し、その後にある不要なテキストも読み飛ばそうとします。そのため、差分リストを含むメールのメッセージをそのまま<code>patch</code>に渡しても動作するはずです。差分全体が一定量インデントされている場合、行がCRLFで終わる場合、またはInternet RFC 934の規定に従い、<code>-</code>で始まる行に<code>- </code>を1回以上付けて差分がカプセル化されている場合は、それらを考慮します。インデントやカプセル化を取り除いた後、<code>#</code>で始まる行はコメントとみなして無視します。</p>
<p class="Pp">コンテキスト差分では、また適用できる範囲はそれより狭いものの通常形式の差分でも、<code>patch</code>はパッチに記された行番号の誤りを検出し、各ハンク（変更のまとまり）を適用する正しい位置を探そうとします。最初の候補位置は、ハンクに記された行番号に、直前のハンクを適用したときのオフセットを加減した位置です。その位置が正しくなければ、ハンクのコンテキストに一致する一連の行を前後に探します。まず、コンテキストのすべての行が一致する位置を探します。見つからず、かつコンテキスト差分で最大曖昧度（fuzz factor）が1以上なら、コンテキストの最初と最後の行を無視して再び探します。それでも見つからず、最大曖昧度が2以上なら、コンテキストの最初と最後の2行ずつを無視して再び探します。最大曖昧度の既定値は2です。</p>
<p class="Pp">曖昧度を適用した後、前側のコンテキストが後側より少ないハンクは、先頭の行番号が1ならファイルの先頭に適用しなければなりません。前側のコンテキストが後側より多いハンクは、ファイルの末尾に適用しなければなりません。</p>
<p class="Pp">ハンクを適用できる位置が見つからなければ、<code>patch</code>はそのハンクをrejectファイルに出力します。通常、その名前は出力ファイル名に<code>.rej</code>を付けたものです。<code>.rej</code>を付けると名前が長すぎる場合は、代わりに<code>#</code>を付けます。1文字の<code>#</code>を付けても長すぎる場合は、ファイル名の最後の文字を<code>#</code>に置き換えます。</p>
<p class="Pp">拒否されたハンクは、unified形式またはコンテキスト形式の差分として出力します。入力が通常形式の差分だった場合、多くのコンテキストは空になります。rejectファイル内のハンクの行番号は、パッチファイル内の行番号と異なることがあります。これは、適用に失敗したハンクが元のファイルではなく変更後のファイルのどのあたりに入ると<code>patch</code>が考えたかを示します。</p>
<p class="Pp">ハンクごとの処理が終わるたびに、失敗したかどうかを通知します。失敗した場合は、<code>patch</code>がそのハンクを挿入すべきだと考えた変更後のファイルの行番号も通知します。差分に指定された行番号とは別の行に適用した場合は、オフセットを通知します。1回でも大きなオフセットがあれば、ハンクを誤った場所に適用した可能性があります。一致させるために曖昧度を使用した場合も通知します。その場合も、少し疑ってみるべきです。<code>--verbose</code>オプションを指定すると、完全に一致したハンクについても通知します。</p>
<p class="Pp">コマンドラインで元のファイル<var>origfile</var>を指定しなかった場合、<code>patch</code>は差分の前にあるテキストから、編集するファイル名を次の規則で推測します。</p>
<p class="Pp">まず、ファイル名の候補を次のように順序付きで収集します。</p>
<div class="Bd-indent">
<ul class="Bl-bullet">
<li>コンテキスト差分のヘッダーであれば、ヘッダー内の変更前と変更後のファイル名を取得します。<code>-p num</code>または<code>--strip=num</code>オプションで必要とされる数のスラッシュがない名前は無視します。<code>/dev/null</code>という名前も無視します。</li>
<li>差分の前に<code>Index:</code>行があり、変更前と変更後の名前がどちらも存在しない場合、または<code>patch</code>がPOSIXに準拠している場合は、<code>Index:</code>行にある名前を取得します。</li>
<li>以下の規則では、ヘッダー内の出現順序にかかわらず、候補のファイル名を（変更前、変更後、index）の順序で扱います。</li>
</ul>
</div>
<p class="Pp">次に、候補のリストからファイル名を次のように選びます。</p>
<div class="Bd-indent">
<ul class="Bl-bullet">
<li>候補のうち存在するファイルがあれば、POSIXに準拠している場合は最初の名前を、それ以外の場合は最適な名前を選びます。</li>
<li>RCS、ClearCase、Perforce、SCCSを無視しておらず（<code>-g num</code>または<code>--get=num</code>を参照）、候補のファイルはどれも存在しないものの、RCS、ClearCase、Perforce、SCCSのマスターが見つかった場合は、そのようなマスターがある最初の候補名を選びます。</li>
<li>候補のファイルがどれも存在せず、RCS、ClearCase、Perforce、SCCSのマスターも見つからず、名前の候補はあり、<code>patch</code>がPOSIXに準拠しておらず、かつパッチがファイルを作成するものと考えられる場合は、必要なディレクトリの新規作成数が最も少ない最適な名前を選びます。</li>
<li>以上の経験則でファイル名が決まらなければ、パッチを適用するファイル名をユーザーに尋ね、入力された名前を選びます。</li>
</ul>
</div>
<p class="Pp">空でない候補リストから最適な名前を決めるには、まずパス名の構成要素が最も少ない名前をすべて選びます。その中からベース名が最も短いものをすべて選び、さらにその中から名前全体が最も短いものをすべて選びます。最後に、残った名前のうち最初のものを選びます。</p>
<p class="Pp">また、差分の前に<code>Prereq:</code>行があれば、<code>patch</code>はその前提条件の行の最初の単語（通常はバージョン番号）を取得し、元のファイルにその単語が含まれているか調べます。見つからなければ、処理を続ける前に確認を求めます。</p>
<p class="Pp">このため、次のようなシェルコマンドを実行すれば、</p>
<div class="Bd-indent"><b>patch -d /usr/src/local/blurfl</b></div>
<p class="Pp">標準入力から読み込んだパッチを使い、<code>blurfl</code>ディレクトリ内のファイルへ直接パッチを適用できるはずです。</p>
<p class="Pp">パッチファイルに複数のパッチが含まれている場合、<code>patch</code>はそれぞれが別々のパッチファイルから来たかのように適用しようとします。したがって、特に、差分リストごとに対象のファイル名を判定する必要があると想定します。また、先に述べたように、各差分リストの前にあるテキストには、ファイル名やリビジョンレベルなどの有用な情報が含まれていると想定します。</p>
</section></section></div>
