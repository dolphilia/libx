---
title: "Wren overview"
documentId: "wren:index.html"
order: 1
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Wren overview</h1>
<h2>Wren is a small, fast, class-based concurrent scripting language <a href="#wren-is-a-small,-fast,-class-based-concurrent-scripting-language" name="wren-is-a-small,-fast,-class-based-concurrent-scripting-language" class="header-anchor">#</a></h2>
<hr />
<p>Think Smalltalk in a Lua-sized package with a dash of Erlang and wrapped up in
a familiar, modern <a href="/docs/wren/v0-4-0/en/01-guide/03-syntax/">syntax</a>.</p>
<pre class="snippet"><code>&#10;System.print(&quot;Hello, world!&quot;)&#10;&#10;class Wren {&#10;  flyTo(city) {&#10;    System.print(&quot;Flying to %(city)&quot;)&#10;  }&#10;}&#10;&#10;var adjectives = Fiber.new {&#10;  [&quot;small&quot;, &quot;clean&quot;, &quot;fast&quot;].each {|word| Fiber.yield(word) }&#10;}&#10;&#10;while (!adjectives.isDone) System.print(adjectives.call())&#10;</code></pre>

<ul>
<li>
<p><strong>Wren is small.</strong> The VM implementation is under <a href="https://github.com/wren-lang/wren/tree/main/src">4,000 semicolons</a>.
    You can skim the whole thing in an afternoon. It&rsquo;s <em>small</em>, but not
    <em>dense</em>. It is readable and <a href="https://github.com/wren-lang/wren/blob/46c1ba92492e9257aba6418403161072d640cb29/src/wren_value.h#L378-L433">lovingly-commented</a>.</p>
</li>
<li>
<p><strong>Wren is fast.</strong> A fast single-pass compiler to tight bytecode, and a
    compact object representation help Wren <a href="/docs/wren/v0-4-0/en/01-guide/22-performance/">compete with other dynamic
    languages</a>.</p>
</li>
<li>
<p><strong>Wren is class-based.</strong> There are lots of scripting languages out there,
    but many have unusual or non-existent object models. Wren places
    <a href="/docs/wren/v0-4-0/en/01-guide/10-classes/">classes</a> front and center.</p>
</li>
<li>
<p><strong>Wren is concurrent.</strong> Lightweight <a href="/docs/wren/v0-4-0/en/01-guide/12-concurrency/">fibers</a> are core to the execution
    model and let you organize your program into a flock of communicating
    coroutines.</p>
</li>
<li>
<p><strong>Wren is a scripting language.</strong> Wren is intended for embedding in
    applications. It has no dependencies, a small standard library,
    and <a href="/docs/wren/v0-4-0/en/01-guide/16-embedding/">an easy-to-use C API</a>. It compiles cleanly as C99, C++98
    or anything later.</p>
</li>
</ul>
<hr />
<p>You can try it <a href="https://wren.io/try">in your browser</a>! <br />
If you like the sound of this, <a href="/docs/wren/v0-4-0/en/01-guide/02-getting-started/">let&rsquo;s get started</a>.  <br />
Excited? You&rsquo;re also welcome to <a href="/docs/wren/v0-4-0/en/01-guide/24-contributing/">get involved</a>!</p>
</div>
