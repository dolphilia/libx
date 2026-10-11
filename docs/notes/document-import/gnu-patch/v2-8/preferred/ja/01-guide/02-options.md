---
title: "オプション"
documentId: "gnu-patch:2.8:02-options"
licenseSource: gnu-patch-manual
toc: {"maxLevel": 3}
documentContext: [{"kind": "source", "html": "<section><h3>Libx GNU patch 2.8 Manual / Libx GNU patch 2.8 マニュアル</h3><p>Original authors: Larry Wall, Paul Eggert, Wayne Davison, David MacKenzie, Andreas Gruenbacher. Original publisher: Free Software Foundation. Modification and independent Japanese translation: Libx, 2026.</p><section class=\"Sh\">\n<h2 class=\"Sh\" id=\"patch-context-COPYING\">COPYING</h2>\n<p class=\"Pp\">Copyright © 1989–2025 Free Software Foundation, Inc.\n  <br/>\n  Copyright © 1984–1986, 1988 Larry Wall.</p>\n<p class=\"Pp\">Permission is granted to make and distribute verbatim copies of\n    this manual provided the copyright notice and this permission notice are\n    preserved on all copies.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute modified versions of\n    this manual under the conditions for verbatim copying, provided that the\n    entire resulting derived work is distributed under the terms of a permission\n    notice identical to this one.</p>\n<p class=\"Pp\">Permission is granted to copy and distribute translations of this\n    manual into another language, under the above conditions for modified\n    versions, except that this permission notice may be included in translations\n    approved by the copyright holders instead of in the original English.</p>\n</section><p>The entire resulting derived manual is distributed under the identical original permission notice above. Copyright © 2026 Libx for static editing and independent unofficial Japanese translation.</p><p>Libx provides the complete fixed GNU patch 2.8 patch.man, organized into nine guide pages. Original examples remain static text. Other implementation files and historical NEWS entries are outside the translated scope.</p><p>LibxはGNU patch 2.8に同梱されたpatch.man全文を9ページに整理し、原文と独立した非公式日本語訳を提供します。例は原文の静的な文字列です。実装ファイルや過去のNEWSは翻訳対象外です。</p><p>Libx編集注記: --follow-symlinksの固定man本文と同梱NEWSの2.8変更説明には記述の違いがあります。本文を黙って修正せず、<a href=\"/docs/gnu-patch/source/v2-8/manual.html#follow\">固定manの説明</a>と<a href=\"/docs/gnu-patch/source/v2-8/NEWS\">原著NEWS</a>を参照できるようにしています。</p><p>Libx編集注記: 環境変数VERSION_CONTROL/PATCH_VERSION_CONTROLの説明では、原文が-vを参照しています。一方、オプションの説明では-vは--version、-Vは--version-controlです。原文と訳文の本文はそのまま保持しています。Libx editorial note: The original environment section refers to -v; the options section lists -v as --version and -V as --version-control. Both original and translated body text are preserved. <a href=\"/docs/gnu-patch/source/v2-8/manual.html#VERSION_CONTROL\">Original environment reference</a> · <a href=\"/docs/gnu-patch/source/v2-8/manual.html#V\">Original -V option</a></p><p><a href=\"/docs/gnu-patch/source/v2-8/manual.html\">Fixed complete original / 固定原文全文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch.man\">Editable original roff / 編集可能な原文</a> · <a href=\"/docs/gnu-patch/source/v2-8/patch-2.8.tar.gz\">Original distribution / 原著配布物</a> · <a href=\"/docs/gnu-patch/source/v2-8/AUTHORS\">Original AUTHORS</a></p></section>"}]
---

<div class="gnu-patch-original-content"><section class="gnu-patch-unit"><section class="Sh">
<h2 class="Sh" id="OPTIONS">オプション</h2>
<dl class="Bl-tag">
<dt id="b"><b>-b</b> or
    <b>--backup</b></dt>
<dd>バックアップファイルを作成します。つまり、ファイルにパッチを適用するときに、元のファイルを削除する代わりに名前を変更するかコピーします。バックアップファイル名の決め方については、<code>-V</code>または<code>--version-control</code>オプションを参照してください。</dd>
<dt id="backup"><b>--backup-if-mismatch</b></dt>
<dd>パッチがファイルに完全には一致せず、ほかの指定によってバックアップを作成することにもなっていない場合、そのファイルをバックアップします。<code>patch</code>がPOSIXに準拠していない場合の既定動作です。</dd>
<dt id="no"><b>--no-backup-if-mismatch</b></dt>
<dd>パッチがファイルに完全には一致せず、ほかの指定によってバックアップを作成することにもなっていない場合、そのファイルをバックアップしません。<code>patch</code>がPOSIXに準拠している場合の既定動作です。</dd>
<dt id="B"><b>-B</b> <i>pref</i> or
    <b>--prefix=</b><i>pref</i></dt>
<dd>バックアップファイル名を<code>simple</code>方式で決定し（<code>-V method</code>または<code>--version-control method</code>を参照）、名前を生成するときにファイル名へ<var>pref</var>を付けます。たとえば、<code>-B /junk/</code>を指定すると、<code>src/patch/util.c</code>の簡易バックアップ名は<code>/junk/src/patch/util.c</code>になります。</dd>
<dt id="binary"><b>--binary</b></dt>
<dd>標準出力と<code>/dev/tty</code>を除くすべてのファイルをバイナリーモードで書き込みます。読み込み時には、CRLFの行末をLFに変換する経験則を無効にします。POSIX以外のシステムで生成したパッチを、POSIXシステム上でPOSIX以外の形式のファイルに適用する際に、このオプションが必要です。POSIXシステムでは、ファイルの読み書きで行末を変換することはありません。Windowsでは、既定で読み書き時に行末を変換するため、行末の違いが重要な場合は<code>diff --binary</code>でパッチを生成するべきです。</dd>
<dt><b>-c</b> or <b>--context</b></dt>
<dd>パッチファイルを通常のコンテキスト差分として解釈します。</dd>
<dt id="d"><b>-d</b> <i>dir</i> or
    <b>--directory=</b><i>dir</i></dt>
<dd>ほかの処理を行う前に、直ちにディレクトリ<var>dir</var>へ移動します。</dd>
<dt id="D"><b>-D</b> <i>define</i> or
    <b>--ifdef=</b><i>define</i></dt>
<dd><code>#ifdef ... #endif</code>構文を使って変更箇所を示します。条件を区別するシンボルには<var>define</var>を使用します。</dd>
<dt id="dry"><b>--dry-run</b></dt>
<dd>実際にはどのファイルも変更せず、パッチを適用した場合の結果を表示します。</dd>
<dt id="e"><b>-e</b> or <b>--ed</b></dt>
<dd>パッチファイルを<code>ed</code>のスクリプトとして解釈します。</dd>
<dt id="E"><b>-E</b> or
    <b>--remove-empty-files</b></dt>
<dd>パッチ適用後に空になった出力ファイルを削除します。通常、<code>patch</code>はヘッダーのタイムスタンプを調べて適用後にファイルが存在すべきか判定できるため、このオプションは不要です。ただし、入力がコンテキスト差分でない場合や、<code>patch</code>がPOSIXに準拠している場合は、このオプションを指定しない限り、パッチ適用後の空ファイルを削除しません。ファイルを削除するときには、空の祖先ディレクトリも削除しようとします。</dd>
<dt id="f"><b>-f</b> or <b>--force</b></dt>
<dd>ユーザーが自分のしていることを完全に理解しているものとみなし、質問を一切しません。対象ファイル名がヘッダーにないパッチは読み飛ばします。ファイルのバージョンがパッチの<code>Prereq:</code>行と異なっていても適用します。パッチが反転しているように見えても、反転していないとみなします。このオプションは処理状況の説明表示を抑えません。説明表示を抑えるには<code>-s</code>を使用してください。</dd>
<dt id="F"><b>-F</b> <i>num</i> or
    <b>--fuzz=</b><i>num</i></dt>
<dd>最大曖昧度を設定します。このオプションはコンテキストを持つ差分にだけ適用され、ハンクを適用する位置を探す際に、指定した数までのコンテキスト行を無視させます。曖昧度を大きくすると、誤ったパッチ適用が起きる可能性が高くなることに注意してください。既定の曖昧度は2です。コンテキスト差分のコンテキスト行数（通常は3）以上の曖昧度を指定すると、すべてのコンテキストを無視します。</dd>
<dt id="g"><b>-g</b> <i>num</i> or
    <b>--get=</b><i>num</i></dt>
<dd>RCSまたはSCCSの管理下にあるファイルについて、そのファイルが存在しない場合、または読み取り専用で既定のバージョンに一致する場合の動作を制御します。また、ClearCaseまたはPerforceの管理下でファイルが存在しない場合の動作も制御します。<var>num</var>が正なら、バージョン管理システムからファイルを取得（チェックアウト）します。0なら、RCS、ClearCase、Perforce、SCCSを無視し、ファイルを取得しません。負なら、ファイルを取得するかユーザーに尋ねます。環境変数<code>PATCH_GET</code>が設定されていれば、その値がこのオプションの既定値になります。設定されていなければ、既定値は0です。</dd>
<dt id="help"><b>--help</b></dt>
<dd>オプションの概要を表示して終了します。</dd>
<dt id="i"><b>-i</b> <i>patchfile</i> or
    <b>--input=</b><i>patchfile</i></dt>
<dd><var>patchfile</var>からパッチを読み込みます。<var>patchfile</var>が<code>-</code>なら、既定の場合と同じく標準入力から読み込みます。</dd>
<dt id="l"><b>-l</b> or
    <b>--ignore-whitespace</b></dt>
<dd>ファイル内のタブや空白が変わってしまった場合に備え、パターンを緩やかに照合します。パッチファイル内の1文字以上の空白（スペースまたはタブ）の並びは、元のファイル内の任意の空白の並びに一致します。行末の空白の並びは無視します。通常の文字は、引き続き完全に一致する必要があります。コンテキストの各行も、元のファイルのいずれかの行に一致する必要があります。</dd>
<dt id="merge"><b>--merge</b> or
    <b>--merge=merge</b> or <b>--merge=diff3</b></dt>
<dd><code>diff3(1)</code>や<code>merge(1)</code>と同様に、パッチファイルを元のファイルへマージします。競合が見つかると、<code>patch</code>は警告を出し、競合部分を<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>行と<code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>行で囲みます。典型的な競合は次の形です。</dd>
</dl>
<div class="Bd-indent">
<pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;&#10;lines from the original file&#10;|||||||&#10;original lines from the patch&#10;=======&#10;new lines from the patch&#10;&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code></pre><p>例の<code>lines from the original file</code>は元のファイルの行、<code>original lines from the patch</code>はパッチ内の変更前の行、<code>new lines from the patch</code>はパッチ内の変更後の行を表します。</p>
</div>
<dl class="Bl-tag">
<dt>
</dt>
<dd><code>--merge</code>の省略可能な引数は、競合の出力形式を決めます。diff3形式では、パッチ内の変更前の行を含む<code>|||||||</code>の部分を表示します。merge形式では、この部分を表示しません。既定はmerge形式です。<p class="Pp">このオプションを指定すると<code>--forward</code>も有効になり、<code>--fuzz=num</code>オプションは考慮されません。</p>
</dd>
</dl>
<dl class="Bl-tag">
<dt id="n"><b>-n</b> or
    <b>--normal</b></dt>
<dd>パッチファイルを通常形式の差分として解釈します。</dd>
<dt id="N"><b>-N</b> or
    <b>--forward</b></dt>
<dd>パッチを適用できない場合、通常の<code>patch</code>は最初のハンクを逆に適用してみて、すでに適用済みのパッチに見えるか調べます。<code>--forward</code>はこの確認を行わないようにします。<code>-R</code>も参照してください。</dd>
<dt id="o"><b>-o</b> <i>outfile</i> or
    <b>--output=</b><i>outfile</i></dt>
<dd>ファイルをその場で変更する代わりに、<var>outfile</var>へ出力します。<var>outfile</var>がパッチ適用対象のファイルのいずれかである場合、このオプションを使用してはいけません。<var>outfile</var>が<code>-</code>なら、出力を標準出力へ送り、通常は標準出力へ送るメッセージを標準エラー出力へ送ります。</dd>
<dt id="p"><b>-p</b><i>num</i> or
    <b>--strip</b><b>=</b><i>num</i></dt>
<dd>パッチファイル内で見つかった各ファイル名から、先頭側にある<var>num</var>個のスラッシュを含む最短の接頭部分を取り除きます。隣接する1個以上のスラッシュの並びは、1個のスラッシュとして数えます。パッチの送り手とは異なるディレクトリにファイルを置いている場合などに、パッチファイル内の名前をどのように扱うか制御できます。たとえば、パッチ内のファイル名が次のようになっているとします。</dd>
</dl>
<div class="Bd-indent"><b>/u/howard/src/blurfl/blurfl.c</b></div>
<p class="Pp"><code>-p0</code>を指定すると、ファイル名全体を変更せずに使用します。<code>-p1</code>なら、</p>
<div class="Bd-indent"><b>u/howard/src/blurfl/blurfl.c</b></div>
<p class="Pp">のように先頭のスラッシュを取り除きます。<code>-p4</code>なら、</p>
<div class="Bd-indent"><b>blurfl/blurfl.c</b></div>
<p class="Pp">となります。<code>-p</code>を指定しなければ、単に<code>blurfl.c</code>を使用します。いずれの場合も、現在のディレクトリか、<code>-d</code>で指定したディレクトリから、その名前を探します。</p>
<dl class="Bl-tag">
<dt id="posix"><b>--posix</b></dt>
<dd>次のように、POSIX規格へより厳密に準拠します。</dd>
</dl>
<div class="Bd-indent">
<ul class="Bl-bullet">
<li>差分ヘッダーからファイル名を推測する際、（変更前、変更後、index）のリストの中で最初に存在するファイルを選びます。</li>
<li>パッチ適用後に空になったファイルを削除しません。</li>
<li>RCS、ClearCase、Perforce、SCCSからファイルを取得するかどうかを尋ねません。</li>
<li>コマンドラインでは、すべてのオプションをファイルより前に置く必要があります。</li>
<li>不一致があってもバックアップファイルを作成しません。</li>
</ul>
</div>
<dl class="Bl-tag">
<dt id="quoting"><b>--quoting-style=</b><i>word</i></dt>
<dd>出力する名前を<var>word</var>で指定するスタイルで引用します。<var>word</var>には、次のいずれかを指定します。</dd>
</dl>
<div class="Bd-indent">
<dl class="Bl-tag">
<dt id="literal"><b>literal</b></dt>
<dd>名前をそのまま出力します。</dd>
<dt id="shell"><b>shell</b></dt>
<dd>名前にシェルのメタ文字が含まれている場合や、出力が曖昧になる場合に、シェル用に引用します。</dd>
<dt id="shell-always"><b>shell-always</b></dt>
<dd>通常は引用が不要な名前でも、シェル用に引用します。</dd>
<dt id="c"><b>c</b></dt>
<dd>C言語の文字列と同じように名前を引用します。</dd>
<dt id="escape"><b>escape</b></dt>
<dd><code>c</code>と同様に引用しますが、前後の二重引用符は付けません。</dd>
</dl>
<p class="Pp"><code>--quoting-style</code>の既定値は、環境変数<code>QUOTING_STYLE</code>で指定できます。この環境変数が設定されていなければ、既定値は<code>shell</code>です。</p>
</div>
<dl class="Bl-tag">
<dt id="r"><b>-r</b> <i>rejectfile</i> or
    <b>--reject-file=</b><i>rejectfile</i></dt>
<dd>拒否されたハンクを、既定の<code>.rej</code>ファイルではなく<var>rejectfile</var>へ出力します。<var>rejectfile</var>が<code>-</code>なら、拒否されたハンクを捨てます。</dd>
<dt id="R"><b>-R</b> or
    <b>--reverse</b></dt>
<dd>変更前と変更後のファイルが入れ替わった状態でパッチが作成されたものとみなします。残念ながら、人間のすることなので、こうしたことは実際に時々起こります。<code>patch</code>は適用前に各ハンクを逆にしようとします。拒否されたハンクも逆にした形式で出力します。ed形式の差分スクリプトでは逆の操作を再構成する情報が少なすぎるため、<code>-R</code>は動作しません。<p class="Pp">最初のハンクの適用に失敗すると、<code>patch</code>はハンクを逆にして適用できるか試します。逆にすれば適用できる場合は、<code>-R</code>を有効にするか尋ねます。逆にしても適用できなければ、パッチを通常どおり適用し続けます。ただし、この方法では、通常形式の差分で最初のコマンドが追加（本来は削除であるべきもの）の場合、反転したパッチを検出できません。空のコンテキストはどこにでも一致するので、追加は常に成功するためです。幸い、ほとんどのパッチは行を削除するよりも追加・変更するため、反転した通常形式の差分の多くは削除から始まります。その削除が失敗すると、この経験則による判定が働きます。</p>
</dd>
<dt id="read"><b>--read-only=</b><i>behavior</i></dt>
<dd>読み取り専用のファイルを変更しようとした場合の動作を指定します。問題になり得ることを無視する<code>ignore</code>、警告する<code>warn</code>（既定値）、失敗させる<code>fail</code>のいずれかです。</dd>
<dt id="reject"><b>--reject-format=</b><i>format</i></dt>
<dd>rejectファイルを指定した<var>format</var>（<code>context</code>または<code>unified</code>）で生成します。このオプションを指定しない場合、入力がunified形式のパッチなら拒否されたハンクもunified形式で出力し、それ以外は通常のコンテキスト差分形式で出力します。</dd>
<dt id="s"><b>-s</b> or <b>--silent</b> or
    <b>--quiet</b></dt>
<dd>エラーが発生しない限り、表示を抑えて動作します。</dd>
<dt id="follow"><b>--follow-symlinks</b></dt>
<dd>入力ファイルを探すときにシンボリックリンクをたどります。リンク先のファイルを変更するのではなく、シンボリックリンク自体を置き換えます。シンボリックリンクに対するGit形式のパッチは適用できなくなります。このオプションは以前のpatchとの後方互換性のために存在し、使用は推奨されません。</dd>
<dt id="t"><b>-t</b> or <b>--batch</b></dt>
<dd><code>-f</code>と同様に質問を抑えますが、前提がいくつか異なります。ヘッダーにファイル名がないパッチは読み飛ばします（<code>-f</code>と同じです）。ファイルのバージョンがパッチの<code>Prereq:</code>行と異なる場合、そのパッチを読み飛ばします。パッチが反転しているように見える場合は、反転しているとみなします。</dd>
<dt id="T"><b>-T</b> or
    <b>--set-time</b></dt>
<dd>コンテキスト差分のヘッダーにあるタイムスタンプから、パッチ適用後のファイルの変更時刻とアクセス時刻を設定します。タイムスタンプに明記されていなければ、コンテキスト差分のヘッダーはローカル時刻を使用しているものとみなします。<p class="Pp">タイムゾーンを含まないタイムスタンプでこのオプションを使用することは推奨されません。ローカル時刻を使うパッチは、別のタイムゾーンにいる人が簡単に使用できず、夏時間の調整で時計を戻す際にはローカルのタイムスタンプが曖昧になるためです。タイムスタンプにタイムゾーンを含めるか、UTCを使用してパッチを生成し、代わりに<code>-Z</code>または<code>--set-utc</code>を使用してください。</p>
</dd>
<dt id="u"><b>-u</b> or
    <b>--unified</b></dt>
<dd>パッチファイルをunified形式のコンテキスト差分として解釈します。</dd>
<dt id="v"><b>-v</b> or
    <b>--version</b></dt>
<dd><code>patch</code>のリビジョンヘッダーとパッチレベルを表示して終了します。</dd>
<dt id="V"><b>-V</b> <i>method</i> or
    <b>--version-control=</b><i>method</i></dt>
<dd><var>method</var>を使ってバックアップファイル名を決定します。この方式は環境変数<code>PATCH_VERSION_CONTROL</code>でも指定でき、それが設定されていなければ<code>VERSION_CONTROL</code>でも指定できます。このオプションの指定は環境変数より優先します。方式の指定は、バックアップを作成するかどうかには影響せず、作成するバックアップファイルの名前だけに影響します。<p class="Pp"><var>method</var>の値は、GNU Emacsの<code>version-control</code>変数に似ています。<code>patch</code>は、より説明的な同義語も受け付けます。使用できる値は次のとおりです。一意に判別できる省略形も使用できます。</p>
</dd>
</dl>
<div class="Bd-indent">
<dl class="Bl-tag">
<dt id="existing"><b>existing</b> or
    <b>nil</b></dt>
<dd>すでに番号付きバックアップがあるファイルには番号付きバックアップを作成し、それ以外には簡易バックアップを作成します。これが既定値です。</dd>
<dt id="numbered"><b>numbered</b> or
    <b>t</b></dt>
<dd>番号付きバックアップを作成します。ファイル<var>F</var>の番号付きバックアップ名は<code>F.~N~</code>となり、<var>N</var>はバージョン番号です。</dd>
<dt id="simple"><b>simple</b> or
    <b>never</b></dt>
<dd>簡易バックアップを作成します。<code>-B</code>または<code>--prefix</code>、<code>-Y</code>または<code>--basename-prefix</code>、<code>-z</code>または<code>--suffix</code>で、簡易バックアップの名前を指定できます。これらを指定しない場合は、簡易バックアップ用の接尾辞を使用します。環境変数<code>SIMPLE_BACKUP_SUFFIX</code>が設定されていればその値を、設定されていなければ<code>.orig</code>を使用します。</dd>
</dl>
<p class="Pp">番号付きバックアップや簡易バックアップのファイル名が長すぎる場合は、代わりに接尾辞<code>~</code>を使用します。<code>~</code>を付けても長すぎる場合は、ファイル名の最後の文字を<code>~</code>に置き換えます。</p>
</div>
<dl class="Bl-tag">
<dt id="verbose"><b>--verbose</b></dt>
<dd>処理について通常より詳しい情報を表示します。</dd>
<dt id="x"><b>-x</b> <i>num</i> or
    <b>--debug=</b><i>num</i></dt>
<dd><code>patch</code>自体の開発者向けの、内部デバッグフラグを設定します。</dd>
<dt id="Y"><b>-Y</b> <i>pref</i> or
    <b>--basename-prefix=</b><i>pref</i></dt>
<dd>バックアップファイル名を<code>simple</code>方式で決定し（<code>-V method</code>または<code>--version-control method</code>を参照）、バックアップ名を生成するときにファイルのベース名の前へ<var>pref</var>を付けます。たとえば、<code>-Y .del/</code>を指定すると、<code>src/patch/util.c</code>の簡易バックアップ名は<code>src/patch/.del/util.c</code>になります。</dd>
<dt id="z"><b>-z</b> <i>suffix</i> or
    <b>--suffix=</b><i>suffix</i></dt>
<dd>バックアップファイル名を<code>simple</code>方式で決定し（<code>-V method</code>または<code>--version-control method</code>を参照）、接尾辞に<var>suffix</var>を使用します。たとえば、<code>-z -</code>を指定すると、<code>src/patch/util.c</code>のバックアップ名は<code>src/patch/util.c-</code>になります。</dd>
<dt id="Z"><b>-Z</b> or
    <b>--set-utc</b></dt>
<dd>コンテキスト差分のヘッダーにあるタイムスタンプから、パッチ適用後のファイルの変更時刻とアクセス時刻を設定します。タイムスタンプに明記されていなければ、コンテキスト差分のヘッダーは協定世界時（UTC、しばしばGMTとも呼ばれます）を使用しているものとみなします。<code>-T</code>または<code>--set-time</code>も参照してください。<p class="Pp"><code>-Z</code>または<code>--set-utc</code>、および<code>-T</code>または<code>--set-time</code>は通常、元のファイルの時刻がパッチのヘッダーに記された時刻と一致しない場合や、ファイルの内容がパッチに完全には一致しない場合、ファイルの時刻を設定しません。ただし、<code>-f</code>または<code>--force</code>を指定すれば、一致するかどうかにかかわらず設定します。</p>
<p class="Pp"><code>diff</code>の出力形式の制限により、これらのオプションでは、内容が変わっていないファイルの時刻を更新できません。また、これらを使用した場合は、パッチを適用したファイルに依存するファイルをすべて（たとえば<code>make clean</code>で）削除するべきです。そうすれば、後で<code>make</code>を実行したときに、変更されたファイルの時刻によって混乱することを避けられます。</p>
</dd>
</dl>
</section></section></div>
