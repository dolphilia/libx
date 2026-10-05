---
title: "System Class (English original)"
documentId: "wren:modules/core/system.html"
order: 13
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">System Class (English original)</h1>
<p>The System class is a grab-bag of functionality exposed by the VM, mostly for
use during development or debugging.</p>
<h2>Static Methods <a href="#static-methods" name="static-methods" class="header-anchor">#</a></h2>
<h3>System.<strong>clock</strong> <a href="#system.clock" name="system.clock" class="header-anchor">#</a></h3>
<p>Returns the number of seconds (including fractional seconds) since the program
was started. This is usually used for benchmarking.</p>
<h3>System.<strong>gc</strong>() <a href="#system.gc()" name="system.gc()" class="header-anchor">#</a></h3>
<p>Requests that the VM perform an immediate garbage collection to free unused
memory.</p>
<h3>System.<strong>print</strong>() <a href="#system.print()" name="system.print()" class="header-anchor">#</a></h3>
<p>Prints a single newline to the console.</p>
<h3>System.<strong>print</strong>(object) <a href="#system.print(object)" name="system.print(object)" class="header-anchor">#</a></h3>
<p>Prints <code>object</code> to the console followed by a newline. If not already a string,
the object is converted to a string by calling <code>toString</code> on it.</p>
<pre class="snippet"><code>&#10;System.print(&quot;I like bananas&quot;) //&gt; I like bananas&#10;</code></pre>

<h3>System.<strong>printAll</strong>(sequence) <a href="#system.printall(sequence)" name="system.printall(sequence)" class="header-anchor">#</a></h3>
<p>Iterates over <code>sequence</code> and prints each element, then prints a single newline
at the end. Each element is converted to a string by calling <code>toString</code> on it.</p>
<pre class="snippet"><code>&#10;System.printAll([1, [2, 3], 4]) //&gt; 1[2, 3]4&#10;</code></pre>

<h3>System.<strong>write</strong>(object) <a href="#system.write(object)" name="system.write(object)" class="header-anchor">#</a></h3>
<p>Prints a single value to the console, but does not print a newline character
afterwards. Converts the value to a string by calling <code>toString</code> on it.</p>
<pre class="snippet"><code>&#10;System.write(4 + 5) //&gt; 9&#10;</code></pre>

<p>In the above example, the result of <code>4 + 5</code> is printed, and then the prompt is
printed on the same line because no newline character was printed afterwards.</p>
<h3>System.<strong>writeAll</strong>(sequence) <a href="#system.writeall(sequence)" name="system.writeall(sequence)" class="header-anchor">#</a></h3>
<p>Iterates over <code>sequence</code> and prints each element, but does not print a newline
character afterwards. Each element is converted to a string by calling <code>toString</code> on it.</p>
</div>
