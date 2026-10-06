---
title: "Fenced Code Blocks"
description: "Rules and original examples from CommonMark 0.31.2."
documentId: "commonmark:0.31.2:11-fenced-code-blocks"
licenseSource: commonmark-spec
---

<div class="commonmark-original-content">
<h3 class="definition" id="fenced-code-blocks">
<span class="number">4.5</span>Fenced code blocks
</h3><p>A <a class="definition" href="#code-fence" id="code-fence">code fence</a> is a sequence
of at least three consecutive backtick characters (<code>`</code>) or
tildes (<code>~</code>).  (Tildes and backticks cannot be mixed.)
A <a class="definition" href="#fenced-code-block" id="fenced-code-block">fenced code block</a>
begins with a code fence, preceded by up to three spaces of indentation.</p><p>The line with the opening code fence may optionally contain some text
following the code fence; this is trimmed of leading and trailing
spaces or tabs and called the <a class="definition" href="#info-string" id="info-string">info string</a>. If the <a href="#info-string">info string</a> comes
after a backtick fence, it may not contain any backtick
characters.  (The reason for this restriction is that otherwise
some inline code would be incorrectly interpreted as the
beginning of a fenced code block.)</p><p>The content of the code block consists of all subsequent lines, until
a closing <a href="#code-fence">code fence</a> of the same type as the code block
began with (backticks or tildes), and with at least as many backticks
or tildes as the opening code fence.  If the leading code fence is
preceded by N spaces of indentation, then up to N spaces of indentation are
removed from each line of the content (if present).  (If a content line is not
indented, it is preserved unchanged.  If it is indented N spaces or less, all
of the indentation is removed.)</p><p>The closing code fence may be preceded by up to three spaces of indentation, and
may be followed only by spaces or tabs, which are ignored.  If the end of the
containing block (or document) is reached and no closing code fence
has been found, the code block contains all of the lines after the
opening code fence until the end of the containing block (or
document).  (An alternative spec would require backtracking in the
event that a closing code fence is not found.  But this makes parsing
much less efficient, and there seems to be no real downside to the
behavior described here.)</p><p>A fenced code block may interrupt a paragraph, and does not require
a blank line either before or after.</p><p>The content of a code fence is treated as literal text, not parsed
as inlines.  The first word of the <a href="#info-string">info string</a> is typically used to
specify the language of the code sample, and rendered in the <code>class</code>
attribute of the <code>code</code> tag.  However, this spec does not mandate any
particular treatment of the <a href="#info-string">info string</a>.</p><p>Here is a simple example with backticks:</p><div class="commonmark-example" id="example-119">
<div class="examplenum">
<a href="#example-119">Example 119</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;&lt;&#10; &gt;&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&amp;lt;&#10; &amp;gt;&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>With tildes:</p><div class="commonmark-example" id="example-120">
<div class="examplenum">
<a href="#example-120">Example 120</a>
</div>
<div class="column">
<pre><code class="language-text">~~~&#10;&lt;&#10; &gt;&#10;~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&amp;lt;&#10; &amp;gt;&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Fewer than three backticks is not enough:</p><div class="commonmark-example" id="example-121">
<div class="examplenum">
<a href="#example-121">Example 121</a>
</div>
<div class="column">
<pre><code class="language-text">``&#10;foo&#10;``&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;code&gt;foo&lt;/code&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>The closing code fence must use the same character as the opening
fence:</p><div class="commonmark-example" id="example-122">
<div class="examplenum">
<a href="#example-122">Example 122</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;aaa&#10;~~~&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;~~~&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-123">
<div class="examplenum">
<a href="#example-123">Example 123</a>
</div>
<div class="column">
<pre><code class="language-text">~~~&#10;aaa&#10;```&#10;~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;```&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>The closing code fence must be at least as long as the opening fence:</p><div class="commonmark-example" id="example-124">
<div class="examplenum">
<a href="#example-124">Example 124</a>
</div>
<div class="column">
<pre><code class="language-text">````&#10;aaa&#10;```&#10;``````&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;```&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-125">
<div class="examplenum">
<a href="#example-125">Example 125</a>
</div>
<div class="column">
<pre><code class="language-text">~~~~&#10;aaa&#10;~~~&#10;~~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;~~~&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Unclosed code blocks are closed by the end of the document
(or the enclosing <a href="https://spec.commonmark.org/0.31.2/#block-quotes">block quote</a> or <a href="https://spec.commonmark.org/0.31.2/#list-items">list item</a>):</p><div class="commonmark-example" id="example-126">
<div class="examplenum">
<a href="#example-126">Example 126</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-127">
<div class="examplenum">
<a href="#example-127">Example 127</a>
</div>
<div class="column">
<pre><code class="language-text">`````&#10;&#10;```&#10;aaa&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&#10;```&#10;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-128">
<div class="examplenum">
<a href="#example-128">Example 128</a>
</div>
<div class="column">
<pre><code class="language-text">&gt; ```&#10;&gt; aaa&#10;&#10;bbb&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;blockquote&gt;&#10;&lt;pre&gt;&lt;code&gt;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;/blockquote&gt;&#10;&lt;p&gt;bbb&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>A code block can have all empty lines as its content:</p><div class="commonmark-example" id="example-129">
<div class="examplenum">
<a href="#example-129">Example 129</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;&#10;  &#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&#10;  &#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>A code block can be empty:</p><div class="commonmark-example" id="example-130">
<div class="examplenum">
<a href="#example-130">Example 130</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Fences can be indented.  If the opening fence is indented,
content lines will have equivalent opening indentation removed,
if present:</p><div class="commonmark-example" id="example-131">
<div class="examplenum">
<a href="#example-131">Example 131</a>
</div>
<div class="column">
<pre><code class="language-text"> ```&#10; aaa&#10;aaa&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-132">
<div class="examplenum">
<a href="#example-132">Example 132</a>
</div>
<div class="column">
<pre><code class="language-text">  ```&#10;aaa&#10;  aaa&#10;aaa&#10;  ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;aaa&#10;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-133">
<div class="examplenum">
<a href="#example-133">Example 133</a>
</div>
<div class="column">
<pre><code class="language-text">   ```&#10;   aaa&#10;    aaa&#10;  aaa&#10;   ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10; aaa&#10;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Four spaces of indentation is too many:</p><div class="commonmark-example" id="example-134">
<div class="examplenum">
<a href="#example-134">Example 134</a>
</div>
<div class="column">
<pre><code class="language-text">    ```&#10;    aaa&#10;    ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;```&#10;aaa&#10;```&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Closing fences may be preceded by up to three spaces of indentation, and their
indentation need not match that of the opening fence:</p><div class="commonmark-example" id="example-135">
<div class="examplenum">
<a href="#example-135">Example 135</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;aaa&#10;  ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-136">
<div class="examplenum">
<a href="#example-136">Example 136</a>
</div>
<div class="column">
<pre><code class="language-text">   ```&#10;aaa&#10;  ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>This is not a closing fence, because it is indented 4 spaces:</p><div class="commonmark-example" id="example-137">
<div class="examplenum">
<a href="#example-137">Example 137</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;aaa&#10;    ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;    ```&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Code fences (opening and closing) cannot contain internal spaces or tabs:</p><div class="commonmark-example" id="example-138">
<div class="examplenum">
<a href="#example-138">Example 138</a>
</div>
<div class="column">
<pre><code class="language-text">``` ```&#10;aaa&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;code&gt; &lt;/code&gt;&#10;aaa&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-139">
<div class="examplenum">
<a href="#example-139">Example 139</a>
</div>
<div class="column">
<pre><code class="language-text">~~~~~~&#10;aaa&#10;~~~ ~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;~~~ ~~&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Fenced code blocks can interrupt paragraphs, and can be followed
directly by paragraphs, without a blank line between:</p><div class="commonmark-example" id="example-140">
<div class="examplenum">
<a href="#example-140">Example 140</a>
</div>
<div class="column">
<pre><code class="language-text">foo&#10;```&#10;bar&#10;```&#10;baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;foo&lt;/p&gt;&#10;&lt;pre&gt;&lt;code&gt;bar&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;p&gt;baz&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Other blocks can also occur before and after fenced code blocks
without an intervening blank line:</p><div class="commonmark-example" id="example-141">
<div class="examplenum">
<a href="#example-141">Example 141</a>
</div>
<div class="column">
<pre><code class="language-text">foo&#10;---&#10;~~~&#10;bar&#10;~~~&#10;# baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;foo&lt;/h2&gt;&#10;&lt;pre&gt;&lt;code&gt;bar&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;h1&gt;baz&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>An <a href="#info-string">info string</a> can be provided after the opening code fence.
Although this spec doesn’t mandate any particular treatment of
the info string, the first word is typically used to specify
the language of the code block. In HTML output, the language is
normally indicated by adding a class to the <code>code</code> element consisting
of <code>language-</code> followed by the language name.</p><div class="commonmark-example" id="example-142">
<div class="examplenum">
<a href="#example-142">Example 142</a>
</div>
<div class="column">
<pre><code class="language-text">```ruby&#10;def foo(x)&#10;  return 3&#10;end&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code class="language-ruby"&gt;def foo(x)&#10;  return 3&#10;end&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-143">
<div class="examplenum">
<a href="#example-143">Example 143</a>
</div>
<div class="column">
<pre><code class="language-text">~~~~    ruby startline=3 $%@#$&#10;def foo(x)&#10;  return 3&#10;end&#10;~~~~~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code class="language-ruby"&gt;def foo(x)&#10;  return 3&#10;end&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-144">
<div class="examplenum">
<a href="#example-144">Example 144</a>
</div>
<div class="column">
<pre><code class="language-text">````;&#10;````&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code class="language-;"&gt;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p><a href="#info-string">Info strings</a> for backtick code blocks cannot contain backticks:</p><div class="commonmark-example" id="example-145">
<div class="examplenum">
<a href="#example-145">Example 145</a>
</div>
<div class="column">
<pre><code class="language-text">``` aa ```&#10;foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;code&gt;aa&lt;/code&gt;&#10;foo&lt;/p&gt;&#10;</code></pre>
</div>
</div><p><a href="#info-string">Info strings</a> for tilde code blocks can contain backticks and tildes:</p><div class="commonmark-example" id="example-146">
<div class="examplenum">
<a href="#example-146">Example 146</a>
</div>
<div class="column">
<pre><code class="language-text">~~~ aa ``` ~~~&#10;foo&#10;~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code class="language-aa"&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Closing code fences cannot have <a href="#info-string">info strings</a>:</p><div class="commonmark-example" id="example-147">
<div class="examplenum">
<a href="#example-147">Example 147</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;``` aaa&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;``` aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div>
</div>
