---
title: "Object Class (English original)"
documentId: "wren:modules/core/object.html"
order: 9
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Object Class (English original)</h1>
<h2>Static Methods <a href="#static-methods" name="static-methods" class="header-anchor">#</a></h2>
<h3><strong>same</strong>(obj1, obj2) <a href="#same(obj1,-obj2)" name="same(obj1,-obj2)" class="header-anchor">#</a></h3>
<p>Returns <code>true</code> if <em>obj1</em> and <em>obj2</em> are the same. For <a href="/docs/wren/v0-4-0/en/01-guide/04-values/">value
types</a>, this returns <code>true</code> if the objects have equivalent
state. In other words, numbers, strings, booleans, and ranges compare by value.</p>
<p>For all other objects, this returns <code>true</code> only if <em>obj1</em> and <em>obj2</em> refer to
the exact same object in memory.</p>
<p>This is similar to the built in <code>==</code> operator in Object except that this cannot
be overriden. It allows you to reliably access the built-in equality semantics
even on user-defined classes.</p>
<h2>Methods <a href="#methods" name="methods" class="header-anchor">#</a></h2>
<h3><strong>!</strong> operator <a href="#-operator" name="-operator" class="header-anchor">#</a></h3>
<p>Returns <code>false</code>, since most objects are considered <a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#truth">true</a>.</p>
<h3><strong>==</strong>(other) and <strong>!=</strong>(other) operators <a href="#==(other)-and-=(other)-operators" name="==(other)-and-=(other)-operators" class="header-anchor">#</a></h3>
<p>Compares two objects using built-in equality. This compares <a href="/docs/wren/v0-4-0/en/01-guide/04-values/">value
types</a> by value, and all other objects are compared by
identity&mdash;two objects are equal only if they are the exact same object.</p>
<h3><strong>is</strong>(class) operator <a href="#is(class)-operator" name="is(class)-operator" class="header-anchor">#</a></h3>
<p>Returns <code>true</code> if this object&rsquo;s class or one of its superclasses is <code>class</code>.</p>
<pre class="snippet"><code>&#10;System.print(123 is Num)     //&gt; true&#10;System.print(&quot;s&quot; is Num)     //&gt; false&#10;System.print(null is String) //&gt; false&#10;System.print([] is List)     //&gt; true&#10;System.print([] is Sequence) //&gt; true&#10;</code></pre>

<p>It is a runtime error if <code>class</code> is not a <a href="/docs/wren/v0-4-0/en/02-reference/02-modules-core-class/">Class</a>.</p>
<h3><strong>toString</strong> <a href="#tostring" name="tostring" class="header-anchor">#</a></h3>
<p>A default string representation of the object.</p>
<h3><strong>type</strong> <a href="#type" name="type" class="header-anchor">#</a></h3>
<p>The <a href="/docs/wren/v0-4-0/en/02-reference/02-modules-core-class/">Class</a> of the object.</p>
</div>
