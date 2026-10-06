---
title: "リスト"
documentId: "wren:lists.html"
order: 5
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}]
---
<div class="wren-document">
<h1 id="page-title">リスト</h1>
<p>リストは、整数のインデックスで識別する要素の集まりを格納する複合オブジェクトです。コンマで区切った一連の式を角括弧で囲むと、リストを作成できます。</p>
<pre class="snippet"><code>&#10;[1, "banana", true]&#10;</code></pre>
<p>ここでは、要素が三つのリストを作りました。要素の型をそろえる必要はない点に注意してください。</p>
<h2>要素へのアクセス <a class="header-anchor" href="#accessing-elements" name="accessing-elements">#</a></h2>
<p>目的の要素のインデックスを渡して、リストの<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#subscripts">添字演算子</a>を呼び出すと、要素にアクセスできます。多くの言語と同様、インデックスはゼロから始まります。</p>
<pre class="snippet"><code>&#10;var trees = ["cedar", "birch", "oak", "willow"]&#10;System.print(trees[0]) //&gt; cedar&#10;System.print(trees[1]) //&gt; birch&#10;</code></pre>
<p>負のインデックスは、末尾から逆向きに数えます。</p>
<pre class="snippet"><code>&#10;System.print(trees[-1]) //&gt; willow&#10;System.print(trees[-2]) //&gt; oak&#10;</code></pre>
<p>リストの範囲外のインデックスを渡すと、実行時エラーになります。範囲が分からない場合は、countで調べられます。</p>
<pre class="snippet"><code>&#10;System.print(trees.count) //&gt; 4&#10;</code></pre>
<h2>スライスと範囲 <a class="header-anchor" href="#slices-and-ranges" name="slices-and-ranges">#</a></h2>
<p>リストから、まとまった要素をコピーしたいことがあります。次のように、添字演算子に<a href="/docs/wren/v0-4-0/en/01-guide/04-values/#ranges">範囲</a>を渡すと、それができます。</p>
<pre class="snippet"><code>&#10;System.print(trees[1..2]) //&gt; [birch, oak]&#10;</code></pre>
<p>指定した範囲内のインデックスを持つ元のリストの要素を含んだ、新しいリストが返ります。終点を含む範囲でも、含まない範囲でも、予想どおりに動作します。</p>
<p>単一の数値を渡す場合と同様、範囲の端点にも負の値を使えます。したがって、リストをコピーするには次のように書くだけです。</p>
<pre class="snippet"><code>&#10;trees[0..-1]&#10;</code></pre>
<h2>要素の追加 <a class="header-anchor" href="#adding-elements" name="adding-elements">#</a></h2>
<p>リストは<em>可変</em>で、内容を変更できます。添字セッターを使うと、リスト内の既存の要素を置き換えられます。</p>
<pre class="snippet"><code>&#10;trees[1] = "spruce"&#10;System.print(trees[1]) //&gt; spruce&#10;</code></pre>
<p>範囲外の要素を設定しようとすると、エラーになります。リストを大きくするには、<code>add</code>で一つの項目を末尾に追加できます。</p>
<pre class="snippet"><code>&#10;trees.add("maple")&#10;System.print(trees.count) //&gt; 5&#10;</code></pre>
<p><code>insert</code>を使うと、指定した位置に新しい要素を挿入できます。</p>
<pre class="snippet"><code>&#10;trees.insert(2, "hickory")&#10;</code></pre>
<p>最初の引数は挿入先のインデックス、二番目の引数は挿入する値です。場所を空けるため、挿入した要素以降のすべての要素を後ろへずらします。</p>
<p>リストの最後の要素の後に「挿入」することもできますが、その<em>直後</em>に限ります。ほかのメソッドと同様、負のインデックスで末尾から数えることもできます。この場合、一つ要素が増えた<em>後</em>のリストの大きさを基準に、後ろから数えます。</p>
<pre class="snippet"><code>&#10;var letters = ["a", "b", "c"]&#10;letters.insert(3, "d")   // OK: inserts at end.&#10;System.print(letters)    //&gt; [a, b, c, d]&#10;letters.insert(-2, "e")  // Counts back from size after insert.&#10;System.print(letters)    //&gt; [a, b, c, e, d]&#10;</code></pre>
<h2>リストの連結 <a class="header-anchor" href="#adding-lists-together" name="adding-lists-together">#</a></h2>
<p>リスト同士は<code>+</code>演算子で足し合わせられます。この操作は、一般に連結と呼ばれます。</p>
<pre class="snippet"><code>&#10;var letters = ["a", "b", "c"]&#10;var other = ["d", "e", "f"]&#10;var combined = letters + other&#10;System.print(combined)  //&gt; [a, b, c, d, e, f]&#10;</code></pre>
<h2>要素の削除 <a class="header-anchor" href="#removing-elements" name="removing-elements">#</a></h2>
<p><code>insert</code>の反対の操作は<code>removeAt</code>です。リスト内の指定した位置から、一つの要素を削除します。</p>
<p>代わりに特定の<em>値</em>を削除するには、<code>remove</code>を使います。通常の等価比較で最初に一致する値を削除します。</p>
<p>どちらの場合も、後続のすべての項目を前へずらし、空いた場所を埋めます。</p>
<pre class="snippet"><code>&#10;var letters = ["a", "b", "c", "d"]&#10;letters.removeAt(1)&#10;System.print(letters) //&gt; [a, c, d]&#10;letters.remove("a")&#10;System.print(letters) //&gt; [c, d]&#10;</code></pre>
<p><code>remove</code>と<code>removeAt</code>のメソッドは、どちらも削除した項目を返します。</p>
<pre class="snippet"><code>&#10;System.print(letters.removeAt(1)) //&gt; c&#10;</code></pre>
<p><code>remove</code>がリスト内で値を見つけられなかった場合は、nullを返します。</p>
<pre class="snippet"><code>&#10;System.print(letters.remove("not found")) //&gt; null&#10;</code></pre>
<p>リストからすべてを削除したい場合は、clearで空にできます。</p>
<pre class="snippet"><code>&#10;trees.clear()&#10;System.print(trees) //&gt; []&#10;</code></pre>
<p><br/><hr/><a class="right" href="/docs/wren/v0-4-0/en/01-guide/06-maps/">マップ →</a><a href="/docs/wren/v0-4-0/en/01-guide/04-values/">← 値</a></p>
</div>

