---
title: "フェンス付きコードブロック"
description: "CommonMark 0.31.2の規則と原典の対照例。"
documentId: "commonmark:0.31.2:11-fenced-code-blocks"
licenseSource: commonmark-spec
---

<div class="commonmark-original-content">
<h3 class="definition" id="fenced-code-blocks"><span class="number">4.5</span>フェンス付きコードブロック</h3><p><a class="definition" href="#code-fence" id="code-fence">コードフェンス</a>とは、バッククォート（<code>`</code>）またはチルダ（<code>~</code>）を、少なくとも3個連続して並べたものです。チルダとバッククォートを混ぜることはできません。<a class="definition" href="#fenced-code-block" id="fenced-code-block">フェンス付きコードブロック</a>は、最大3個のスペースによる字下げを前に置いたコードフェンスで始まります。</p><p>開始コードフェンスの行には、フェンスの後に任意でテキストを置けます。その先頭と末尾のスペースやタブを取り除いたものを、<a class="definition" href="#info-string" id="info-string">情報文字列</a>と呼びます。<a href="#info-string">情報文字列</a>がバッククォートのフェンスの後にある場合、バッククォートを含んではいけません。この制限は、そうしないと一部のインラインコードが、フェンス付きコードブロックの開始と誤って解釈されてしまうためです。</p><p>コードブロックの内容は、開始と同じ種類（バッククォートまたはチルダ）で、開始フェンス以上の個数を持つ終了<a href="#code-fence">コードフェンス</a>までの、後続のすべての行です。開始フェンスがN個のスペースで字下げされている場合、内容の各行から、存在する範囲で最大N個の字下げスペースを取り除きます。内容行が字下げされていなければ、そのまま保持します。字下げがN個以下のスペースであれば、字下げをすべて取り除きます。</p><p>終了コードフェンスの前には、最大3個のスペースによる字下げを置けます。後に置けるのはスペースやタブだけで、それらは無視されます。終了コードフェンスが見つからないまま、そのコードブロックを含むブロックまたは文書の末尾に達した場合、開始フェンスの後から、含まれているブロックまたは文書の末尾までのすべての行がコードブロックの内容になります。別の仕様として、終了フェンスが見つからない場合に後戻りして解析する方法も考えられます。しかし、それでは解析の効率が大きく落ちますし、ここで述べた挙動に実質的な欠点は見当たりません。</p><p>フェンス付きコードブロックは段落を中断でき、前後に空行は必要ありません。</p><p>コードフェンスの内容は文字どおりのテキストとして扱われ、インラインとしては解析されません。<a href="#info-string">情報文字列</a>の最初の単語は、通常、コード例の言語を指定するために使われ、<code>class</code>属性として<code>code</code>タグに出力されます。ただし、この仕様では、<a href="#info-string">情報文字列</a>の具体的な扱いは何も義務づけていません。</p><p>バッククォートを使った単純な例です。</p><div class="commonmark-example" id="example-119">
<div class="examplenum">
<a href="#example-119">例119</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;&lt;&#10; &gt;&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&amp;lt;&#10; &amp;gt;&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>チルダを使った例です。</p><div class="commonmark-example" id="example-120">
<div class="examplenum">
<a href="#example-120">例120</a>
</div>
<div class="column">
<pre><code class="language-text">~~~&#10;&lt;&#10; &gt;&#10;~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&amp;lt;&#10; &amp;gt;&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>バッククォートが3個より少ない場合は不十分です。</p><div class="commonmark-example" id="example-121">
<div class="examplenum">
<a href="#example-121">例121</a>
</div>
<div class="column">
<pre><code class="language-text">``&#10;foo&#10;``&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;code&gt;foo&lt;/code&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>終了コードフェンスには、開始フェンスと同じ文字を使わなければなりません。</p><div class="commonmark-example" id="example-122">
<div class="examplenum">
<a href="#example-122">例122</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;aaa&#10;~~~&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;~~~&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-123">
<div class="examplenum">
<a href="#example-123">例123</a>
</div>
<div class="column">
<pre><code class="language-text">~~~&#10;aaa&#10;```&#10;~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;```&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>終了コードフェンスは、開始フェンス以上の長さでなければなりません。</p><div class="commonmark-example" id="example-124">
<div class="examplenum">
<a href="#example-124">例124</a>
</div>
<div class="column">
<pre><code class="language-text">````&#10;aaa&#10;```&#10;``````&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;```&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-125">
<div class="examplenum">
<a href="#example-125">例125</a>
</div>
<div class="column">
<pre><code class="language-text">~~~~&#10;aaa&#10;~~~&#10;~~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;~~~&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>閉じられていないコードブロックは、文書の末尾、またはそれを含む<a href="https://spec.commonmark.org/0.31.2/#block-quotes">ブロック引用</a>や<a href="https://spec.commonmark.org/0.31.2/#list-items">リスト項目</a>の末尾で閉じられます。</p><div class="commonmark-example" id="example-126">
<div class="examplenum">
<a href="#example-126">例126</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-127">
<div class="examplenum">
<a href="#example-127">例127</a>
</div>
<div class="column">
<pre><code class="language-text">`````&#10;&#10;```&#10;aaa&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&#10;```&#10;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-128">
<div class="examplenum">
<a href="#example-128">例128</a>
</div>
<div class="column">
<pre><code class="language-text">&gt; ```&#10;&gt; aaa&#10;&#10;bbb&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;blockquote&gt;&#10;&lt;pre&gt;&lt;code&gt;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;/blockquote&gt;&#10;&lt;p&gt;bbb&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>コードブロックの内容は、すべて空行でもかまいません。</p><div class="commonmark-example" id="example-129">
<div class="examplenum">
<a href="#example-129">例129</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;&#10;  &#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&#10;  &#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>コードブロックは空でもかまいません。</p><div class="commonmark-example" id="example-130">
<div class="examplenum">
<a href="#example-130">例130</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>フェンスは字下げできます。開始フェンスが字下げされている場合、内容行の先頭にも同じ字下げがあれば、それを取り除きます。</p><div class="commonmark-example" id="example-131">
<div class="examplenum">
<a href="#example-131">例131</a>
</div>
<div class="column">
<pre><code class="language-text"> ```&#10; aaa&#10;aaa&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-132">
<div class="examplenum">
<a href="#example-132">例132</a>
</div>
<div class="column">
<pre><code class="language-text">  ```&#10;aaa&#10;  aaa&#10;aaa&#10;  ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;aaa&#10;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-133">
<div class="examplenum">
<a href="#example-133">例133</a>
</div>
<div class="column">
<pre><code class="language-text">   ```&#10;   aaa&#10;    aaa&#10;  aaa&#10;   ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10; aaa&#10;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>4個のスペースによる字下げは多すぎます。</p><div class="commonmark-example" id="example-134">
<div class="examplenum">
<a href="#example-134">例134</a>
</div>
<div class="column">
<pre><code class="language-text">    ```&#10;    aaa&#10;    ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;```&#10;aaa&#10;```&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>終了フェンスの前には最大3個のスペースによる字下げを置けます。その字下げは、開始フェンスの字下げと一致する必要はありません。</p><div class="commonmark-example" id="example-135">
<div class="examplenum">
<a href="#example-135">例135</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;aaa&#10;  ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-136">
<div class="examplenum">
<a href="#example-136">例136</a>
</div>
<div class="column">
<pre><code class="language-text">   ```&#10;aaa&#10;  ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>これは4個のスペースで字下げされているため、終了フェンスにはなりません。</p><div class="commonmark-example" id="example-137">
<div class="examplenum">
<a href="#example-137">例137</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;aaa&#10;    ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;    ```&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>開始と終了のコードフェンスは、内部にスペースやタブを含めることはできません。</p><div class="commonmark-example" id="example-138">
<div class="examplenum">
<a href="#example-138">例138</a>
</div>
<div class="column">
<pre><code class="language-text">``` ```&#10;aaa&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;code&gt; &lt;/code&gt;&#10;aaa&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-139">
<div class="examplenum">
<a href="#example-139">例139</a>
</div>
<div class="column">
<pre><code class="language-text">~~~~~~&#10;aaa&#10;~~~ ~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;~~~ ~~&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>フェンス付きコードブロックは、段落を中断できます。また、間に空行を置かず、直後に段落を続けることもできます。</p><div class="commonmark-example" id="example-140">
<div class="examplenum">
<a href="#example-140">例140</a>
</div>
<div class="column">
<pre><code class="language-text">foo&#10;```&#10;bar&#10;```&#10;baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;foo&lt;/p&gt;&#10;&lt;pre&gt;&lt;code&gt;bar&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;p&gt;baz&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>ほかのブロックも、間に空行を置かず、フェンス付きコードブロックの前後に置けます。</p><div class="commonmark-example" id="example-141">
<div class="examplenum">
<a href="#example-141">例141</a>
</div>
<div class="column">
<pre><code class="language-text">foo&#10;---&#10;~~~&#10;bar&#10;~~~&#10;# baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;foo&lt;/h2&gt;&#10;&lt;pre&gt;&lt;code&gt;bar&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;h1&gt;baz&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>開始コードフェンスの後には、<a href="#info-string">情報文字列</a>を指定できます。この仕様は情報文字列の具体的な扱いを義務づけませんが、その最初の単語は、通常、コードブロックの言語を指定するために使われます。HTML出力では通常、<code>code</code>要素に、<code>language-</code>とその後に言語名をつなげたクラスを追加して、言語を示します。</p><div class="commonmark-example" id="example-142">
<div class="examplenum">
<a href="#example-142">例142</a>
</div>
<div class="column">
<pre><code class="language-text">```ruby&#10;def foo(x)&#10;  return 3&#10;end&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code class="language-ruby"&gt;def foo(x)&#10;  return 3&#10;end&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-143">
<div class="examplenum">
<a href="#example-143">例143</a>
</div>
<div class="column">
<pre><code class="language-text">~~~~    ruby startline=3 $%@#$&#10;def foo(x)&#10;  return 3&#10;end&#10;~~~~~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code class="language-ruby"&gt;def foo(x)&#10;  return 3&#10;end&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-144">
<div class="examplenum">
<a href="#example-144">例144</a>
</div>
<div class="column">
<pre><code class="language-text">````;&#10;````&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code class="language-;"&gt;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>バッククォートのコードブロックの<a href="#info-string">情報文字列</a>に、バッククォートを含めることはできません。</p><div class="commonmark-example" id="example-145">
<div class="examplenum">
<a href="#example-145">例145</a>
</div>
<div class="column">
<pre><code class="language-text">``` aa ```&#10;foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;code&gt;aa&lt;/code&gt;&#10;foo&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>チルダのコードブロックの<a href="#info-string">情報文字列</a>には、バッククォートとチルダを含められます。</p><div class="commonmark-example" id="example-146">
<div class="examplenum">
<a href="#example-146">例146</a>
</div>
<div class="column">
<pre><code class="language-text">~~~ aa ``` ~~~&#10;foo&#10;~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code class="language-aa"&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>終了コードフェンスに<a href="#info-string">情報文字列</a>を付けることはできません。</p><div class="commonmark-example" id="example-147">
<div class="examplenum">
<a href="#example-147">例147</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;``` aaa&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;``` aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div>
</div>
