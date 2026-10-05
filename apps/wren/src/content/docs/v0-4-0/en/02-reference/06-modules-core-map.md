---
title: "Map Class (English original)"
documentId: "wren:modules/core/map.html"
order: 6
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Map Class (English original)</h1>
<p>Extends <a href="/docs/wren/v0-4-0/en/02-reference/11-modules-core-sequence/">Sequence</a>.</p>
<p>An associative collection that maps keys to values. More details <a href="/docs/wren/v0-4-0/en/01-guide/06-maps/">here</a>.</p>
<h2>Static Method <a href="#static-method" name="static-method" class="header-anchor">#</a></h2>
<h3>Map.<strong>new</strong>() <a href="#map.new()" name="map.new()" class="header-anchor">#</a></h3>
<p>Creates a new empty map. Equivalent to <code>{}</code>.</p>
<h2>Methods <a href="#methods" name="methods" class="header-anchor">#</a></h2>
<h3><strong>clear</strong>() <a href="#clear()" name="clear()" class="header-anchor">#</a></h3>
<p>Removes all entries from the map.</p>
<h3><strong>containsKey</strong>(key) <a href="#containskey(key)" name="containskey(key)" class="header-anchor">#</a></h3>
<p>Returns <code>true</code> if the map contains <code>key</code> or <code>false</code> otherwise.</p>
<h3><strong>count</strong> <a href="#count" name="count" class="header-anchor">#</a></h3>
<p>The number of entries in the map.</p>
<h3><strong>keys</strong> <a href="#keys" name="keys" class="header-anchor">#</a></h3>
<p>A <a href="/docs/wren/v0-4-0/en/02-reference/11-modules-core-sequence/">Sequence</a> that can be used to iterate over the keys in the
map. Note that iteration order is undefined. All keys will be iterated over,
but may be in any order, and may even change between invocations of Wren.</p>
<h3><strong>remove</strong>(key) <a href="#remove(key)" name="remove(key)" class="header-anchor">#</a></h3>
<p>Removes <code>key</code> and the value associated with it from the map. Returns the value.</p>
<p>If the key was not present, returns <code>null</code>.</p>
<h3><strong>values</strong> <a href="#values" name="values" class="header-anchor">#</a></h3>
<p>A <a href="/docs/wren/v0-4-0/en/02-reference/11-modules-core-sequence/">Sequence</a> that can be used to iterate over the values in the
map. Note that iteration order is undefined. All values will be iterated over,
but may be in any order, and may even change between invocations of Wren.</p>
<p>If multiple keys are associated with the same value, the value will appear
multiple times in the sequence.</p>
<h3><strong>[</strong>key<strong>]</strong> operator <a href="#[key]-operator" name="[key]-operator" class="header-anchor">#</a></h3>
<p>Gets the value associated with <code>key</code> in the map. If <code>key</code> is not present in the
map, returns <code>null</code>.</p>
<pre class="snippet"><code>&#10;var map = {&quot;george&quot;: &quot;harrison&quot;, &quot;ringo&quot;: &quot;starr&quot;}&#10;System.print(map[&quot;ringo&quot;]) //&gt; starr&#10;System.print(map[&quot;pete&quot;])  //&gt; null&#10;</code></pre>

<h3><strong>[</strong>key<strong>]=</strong>(value) operator <a href="#[key]=(value)-operator" name="[key]=(value)-operator" class="header-anchor">#</a></h3>
<p>Associates <code>value</code> with <code>key</code> in the map. If <code>key</code> was already in the map, this
replaces the previous association.</p>
<p>It is a runtime error if the key is not a <a href="/docs/wren/v0-4-0/en/02-reference/01-modules-core-bool/">Bool</a>,
<a href="/docs/wren/v0-4-0/en/02-reference/02-modules-core-class/">Class</a>, <a href="/docs/wren/v0-4-0/en/02-reference/07-modules-core-null/">Null</a>, <a href="/docs/wren/v0-4-0/en/02-reference/08-modules-core-num/">Num</a>, <a href="/docs/wren/v0-4-0/en/02-reference/10-modules-core-range/">Range</a>,
or <a href="/docs/wren/v0-4-0/en/02-reference/12-modules-core-string/">String</a>.</p>
<h3><strong>iterate</strong>(iterator), <strong>iteratorValue</strong>(iterator) <a href="#iterate(iterator),-iteratorvalue(iterator)" name="iterate(iterator),-iteratorvalue(iterator)" class="header-anchor">#</a></h3>
<p>Implements the <a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#the-iterator-protocol">iterator protocol</a> for iterating over the keys and values of a map at the same time.</p>
<p>When a map (as opposed to its keys or values separately) is iterated over, each key/value pair is wrapped in a <code>MapEntry</code> object. <code>MapEntry</code> is a small helper class which has read-only <code>key</code> and <code>value</code> properties and a familiar <code>toString</code> representation.</p>
<pre class="snippet"><code>&#10;var map = {&quot;paul&quot;: &quot;mccartney&quot;}&#10;for (entry in map) {&#10;  System.print(entry.type)                    // MapEntry&#10;  System.print(entry.key + &quot; &quot; + entry.value) // paul mccartney&#10;  System.print(entry)                         // paul:mccartney&#10;}&#10;</code></pre>

<p>All map entries will be iterated over, but may be in any order, and may even change between invocations of Wren.</p>
</div>
