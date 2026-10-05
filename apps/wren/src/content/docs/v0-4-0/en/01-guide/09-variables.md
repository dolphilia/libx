---
title: "Variables"
documentId: "wren:variables.html"
order: 9
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Variables</h1>
<p>Variables are named slots for storing values. You define a new variable in Wren
using a <code>var</code> statement, like so:</p>
<pre class="snippet"><code>&#10;var a = 1 + 2&#10;</code></pre>

<p>This creates a new variable <code>a</code> in the current scope and initializes it with
the result of the expression following the <code>=</code>. Once a variable has been
defined, it can be accessed by name as you would expect.</p>
<pre class="snippet"><code>&#10;var animal = &quot;Slow Loris&quot;&#10;System.print(animal) //&gt; Slow Loris&#10;</code></pre>

<h2>Scope <a href="#scope" name="scope" class="header-anchor">#</a></h2>
<p>Wren has true block scope: a variable exists from the point where it is defined
until the end of the <a href="/docs/wren/v0-4-0/en/01-guide/03-syntax/#blocks">block</a> where that definition appears.</p>
<pre class="snippet"><code>&#10;{&#10;  System.print(a) //! &quot;a&quot; doesn&#x27;t exist yet.&#10;  var a = 123&#10;  System.print(a) //&gt; 123&#10;}&#10;System.print(a) //! &quot;a&quot; doesn&#x27;t exist anymore.&#10;</code></pre>

<p>Variables defined at the top level of a script are <em>top-level</em> and are visible
to the <a href="/docs/wren/v0-4-0/en/01-guide/14-modularity/">module</a> system. All other variables are <em>local</em>.
Declaring a variable in an inner scope with the same name as an outer one is
called <em>shadowing</em> and is not an error (although it&rsquo;s not something you likely
intend to do much).</p>
<pre class="snippet"><code>&#10;var a = &quot;outer&quot;&#10;{&#10;  var a = &quot;inner&quot;&#10;  System.print(a) //&gt; inner&#10;}&#10;System.print(a) //&gt; outer&#10;</code></pre>

<p>Declaring a variable with the same name in the <em>same</em> scope <em>is</em> an error.</p>
<pre class="snippet"><code>&#10;var a = &quot;hi&quot;&#10;var a = &quot;again&quot; //! &quot;a&quot; is already declared.&#10;</code></pre>

<h2>Assignment <a href="#assignment" name="assignment" class="header-anchor">#</a></h2>
<p>After a variable has been declared, you can assign to it using <code>=</code></p>
<pre class="snippet"><code>&#10;var a = 123&#10;a = 234&#10;</code></pre>

<p>An assignment walks up the scope stack to find where the named variable is
declared. It&rsquo;s an error to assign to a variable that isn&rsquo;t defined. Wren
doesn&rsquo;t roll with implicit variable definition.</p>
<p>When used in a larger expression, an assignment expression evaluates to the
assigned value.</p>
<pre class="snippet"><code>&#10;var a = &quot;before&quot;&#10;System.print(a = &quot;after&quot;) //&gt; after&#10;</code></pre>

<p>If the left-hand side is some more complex expression than a bare variable name,
then it isn&rsquo;t an assignment. Instead, it&rsquo;s calling a <a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#setters">setter method</a>.</p>
<p><br><hr>
<a class="right" href="/docs/wren/v0-4-0/en/01-guide/11-functions/">Functions &rarr;</a>
<a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/">&larr; Control Flow</a></p>
</div>
