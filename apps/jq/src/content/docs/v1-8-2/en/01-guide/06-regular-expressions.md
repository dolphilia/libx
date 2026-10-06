---
title: "Regular expressions"
order: 6
categoryOrder: 1
documentContext: [{"kind":"source","html":"<h2 id=\"source-and-notices\">Source and notices</h2>\n<p>Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.</p>\n<p><a href=\"https://jqlang.org/manual/v1.8/\">Original manual</a> · <a href=\"https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml\">Fixed source</a> · <a href=\"https://creativecommons.org/licenses/by/3.0/\">License</a> · <a href=\"/docs/jq/v1-8-2/en/02-license/01-original-notices/\">Original notices</a> · <a href=\"/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/\">Full legal code</a></p>"}]
---

<div class="jq-upstream-field" data-source-key="sections/5/title">

<h2 id="regular-expressions">Regular expressions</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/body">

<p>jq uses the
<a href="https://github.com/kkos/oniguruma/blob/master/doc/RE">Oniguruma regular expression library</a>,
as do PHP, TextMate, Sublime Text, etc, so the
description here will focus on jq specifics.</p>




<p>Oniguruma supports several flavors of regular expression, so it is important to know
that jq uses the <a href="https://github.com/kkos/oniguruma/blob/master/doc/SYNTAX.md">"Perl NG" (Perl with named groups)</a> flavor.</p>




<p>The jq regex filters are defined so that they can be used using
one of these patterns:</p>




<pre><code>STRING | FILTER(REGEX)
STRING | FILTER(REGEX; FLAGS)
STRING | FILTER([REGEX])
STRING | FILTER([REGEX, FLAGS])
</code></pre>




<p>where:</p>




<ul>
<li>STRING, REGEX, and FLAGS are jq strings and subject to jq string interpolation;</li>
<li>REGEX, after string interpolation, should be a valid regular expression;</li>
<li>FILTER is one of <code>test</code>, <code>match</code>, or <code>capture</code>, as described below.</li>
</ul>




<p>Since REGEX must evaluate to a JSON string, some characters that are needed
to form a regular expression must be escaped. For example, the regular expression
<code>\s</code> signifying a whitespace character would be written as <code>"\\s"</code>.</p>




<p>FLAGS is a string consisting of one of more of the supported flags:</p>




<ul>
<li><code>g</code> - Global search (find all matches, not just the first)</li>
<li><code>i</code> - Case insensitive search</li>
<li><code>m</code> - Multi line mode (<code>.</code> will match newlines)</li>
<li><code>n</code> - Ignore empty matches</li>
<li><code>p</code> - Both s and m modes are enabled</li>
<li><code>s</code> - Single line mode (<code>^</code> -&gt; <code>\A</code>, <code>$</code> -&gt; <code>\Z</code>)</li>
<li><code>l</code> - Find longest possible matches</li>
<li><code>x</code> - Extended regex format (ignore whitespace and comments)</li>
</ul>




<p>To match a whitespace with the <code>x</code> flag, use <code>\s</code>, e.g.</p>




<pre><code>jq -n '"a b" | test("a\\sb"; "x")'
</code></pre>




<p>Note that certain flags may also be specified within REGEX, e.g.</p>




<pre><code>jq -n '("test", "TEst", "teST", "TEST") | test("(?i)te(?-i)st")'
</code></pre>




<p>evaluates to: <code>true</code>, <code>true</code>, <code>false</code>, <code>false</code>.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/0/title">

<h3 id="test"><code>test(val)</code>, <code>test(regex; flags)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/0/body">

<p>Like <code>match</code>, but does not return match objects, only <code>true</code> or <code>false</code>
for whether or not the regex matches the input.</p>

</div>

<!-- jq-example:sections/5/entries/0/examples/0:start -->

#### Example 1

Command

```sh
jq 'test("foo")'
```

Input

```text
"foo"
```

Output 1

```text
true
```

<!-- jq-example:sections/5/entries/0/examples/0:end -->

<!-- jq-example:sections/5/entries/0/examples/1:start -->

#### Example 2

Command

```sh
jq '.[] | test("a b c # spaces are ignored"; "ix")'
```

Input

```text
["xabcd", "ABC"]
```

Output 1

```text
true
```

Output 2

```text
true
```

<!-- jq-example:sections/5/entries/0/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/5/entries/1/title">

<h3 id="match"><code>match(val)</code>, <code>match(regex; flags)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/1/body">

<p><strong>match</strong> outputs an object for each match it finds.  Matches have
the following fields:</p>




<ul>
<li><code>offset</code> - offset in UTF-8 codepoints from the beginning of the input</li>
<li><code>length</code> - length in UTF-8 codepoints of the match</li>
<li><code>string</code> - the string that it matched</li>
<li><code>captures</code> - an array of objects representing capturing groups.</li>
</ul>




<p>Capturing group objects have the following fields:</p>




<ul>
<li><code>offset</code> - offset in UTF-8 codepoints from the beginning of the input</li>
<li><code>length</code> - length in UTF-8 codepoints of this capturing group</li>
<li><code>string</code> - the string that was captured</li>
<li><code>name</code> - the name of the capturing group (or <code>null</code> if it was unnamed)</li>
</ul>




<p>Capturing groups that did not match anything return an offset of -1</p>

</div>

<!-- jq-example:sections/5/entries/1/examples/0:start -->

#### Example 1

Command

```sh
jq 'match("(abc)+"; "g")'
```

Input

```text
"abc abc"
```

Output 1

```text
{"offset": 0, "length": 3, "string": "abc", "captures": [{"offset": 0, "length": 3, "string": "abc", "name": null}]}
```

Output 2

```text
{"offset": 4, "length": 3, "string": "abc", "captures": [{"offset": 4, "length": 3, "string": "abc", "name": null}]}
```

<!-- jq-example:sections/5/entries/1/examples/0:end -->

<!-- jq-example:sections/5/entries/1/examples/1:start -->

#### Example 2

Command

```sh
jq 'match("foo")'
```

Input

```text
"foo bar foo"
```

Output 1

```text
{"offset": 0, "length": 3, "string": "foo", "captures": []}
```

<!-- jq-example:sections/5/entries/1/examples/1:end -->

<!-- jq-example:sections/5/entries/1/examples/2:start -->

#### Example 3

Command

```sh
jq 'match(["foo", "ig"])'
```

Input

```text
"foo bar FOO"
```

Output 1

```text
{"offset": 0, "length": 3, "string": "foo", "captures": []}
```

Output 2

```text
{"offset": 8, "length": 3, "string": "FOO", "captures": []}
```

<!-- jq-example:sections/5/entries/1/examples/2:end -->

<!-- jq-example:sections/5/entries/1/examples/3:start -->

#### Example 4

Command

```sh
jq 'match("foo (?<bar123>bar)? foo"; "ig")'
```

Input

```text
"foo bar foo foo  foo"
```

Output 1

```text
{"offset": 0, "length": 11, "string": "foo bar foo", "captures": [{"offset": 4, "length": 3, "string": "bar", "name": "bar123"}]}
```

Output 2

```text
{"offset": 12, "length": 8, "string": "foo  foo", "captures": [{"offset": -1, "length": 0, "string": null, "name": "bar123"}]}
```

<!-- jq-example:sections/5/entries/1/examples/3:end -->

<!-- jq-example:sections/5/entries/1/examples/4:start -->

#### Example 5

Command

```sh
jq '[ match("."; "g")] | length'
```

Input

```text
"abc"
```

Output 1

```text
3
```

<!-- jq-example:sections/5/entries/1/examples/4:end -->

<div class="jq-upstream-field" data-source-key="sections/5/entries/2/title">

<h3 id="capture"><code>capture(val)</code>, <code>capture(regex; flags)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/2/body">

<p>Collects the named captures in a JSON object, with the name
of each capture as the key, and the matched string as the
corresponding value.</p>

</div>

<!-- jq-example:sections/5/entries/2/examples/0:start -->

#### Example 1

Command

```sh
jq 'capture("(?<a>[a-z]+)-(?<n>[0-9]+)")'
```

Input

```text
"xyzzy-14"
```

Output 1

```text
{ "a": "xyzzy", "n": "14" }
```

<!-- jq-example:sections/5/entries/2/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/5/entries/3/title">

<h3 id="scan"><code>scan(regex)</code>, <code>scan(regex; flags)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/3/body">

<p>Emit a stream of the non-overlapping substrings of the input
that match the regex in accordance with the flags, if any
have been specified.  If there is no match, the stream is empty.
To capture all the matches for each input string, use the idiom
<code>[ expr ]</code>, e.g. <code>[ scan(regex) ]</code>.  If the regex contains capturing
groups, the filter emits a stream of arrays, each of which contains
the captured strings.</p>

</div>

<!-- jq-example:sections/5/entries/3/examples/0:start -->

#### Example 1

Command

```sh
jq 'scan("c")'
```

Input

```text
"abcdefabc"
```

Output 1

```text
"c"
```

Output 2

```text
"c"
```

<!-- jq-example:sections/5/entries/3/examples/0:end -->

<!-- jq-example:sections/5/entries/3/examples/1:start -->

#### Example 2

Command

```sh
jq 'scan("(a+)(b+)")'
```

Input

```text
"abaabbaaabbb"
```

Output 1

```text
["a","b"]
```

Output 2

```text
["aa","bb"]
```

Output 3

```text
["aaa","bbb"]
```

<!-- jq-example:sections/5/entries/3/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/5/entries/4/title">

<h3 id="split-2"><code>split(regex; flags)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/4/body">

<p>Splits an input string on each regex match.</p>




<p>For backwards compatibility, when called with a single argument,
<code>split</code> splits on a string, not a regex.</p>

</div>

<!-- jq-example:sections/5/entries/4/examples/0:start -->

#### Example 1

Command

```sh
jq 'split(", *"; null)'
```

Input

```text
"ab,cd, ef"
```

Output 1

```text
["ab","cd","ef"]
```

<!-- jq-example:sections/5/entries/4/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/5/entries/5/title">

<h3 id="splits"><code>splits(regex)</code>, <code>splits(regex; flags)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/5/body">

<p>These provide the same results as their <code>split</code> counterparts,
but as a stream instead of an array.</p>

</div>

<!-- jq-example:sections/5/entries/5/examples/0:start -->

#### Example 1

Command

```sh
jq 'splits(", *")'
```

Input

```text
"ab,cd,   ef, gh"
```

Output 1

```text
"ab"
```

Output 2

```text
"cd"
```

Output 3

```text
"ef"
```

Output 4

```text
"gh"
```

<!-- jq-example:sections/5/entries/5/examples/0:end -->

<!-- jq-example:sections/5/entries/5/examples/1:start -->

#### Example 2

Command

```sh
jq 'splits(",? *"; "n")'
```

Input

```text
"ab,cd ef,  gh"
```

Output 1

```text
"ab"
```

Output 2

```text
"cd"
```

Output 3

```text
"ef"
```

Output 4

```text
"gh"
```

<!-- jq-example:sections/5/entries/5/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/5/entries/6/title">

<h3 id="sub"><code>sub(regex; tostring)</code>, <code>sub(regex; tostring; flags)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/6/body">

<p>Emit the string obtained by replacing the first match of
regex in the input string with <code>tostring</code>, after
interpolation.  <code>tostring</code> should be a jq string or a stream
of such strings, each of which may contain references to
named captures. The named captures are, in effect, presented
as a JSON object (as constructed by <code>capture</code>) to
<code>tostring</code>, so a reference to a captured variable named "x"
would take the form: <code>"\(.x)"</code>.</p>

</div>

<!-- jq-example:sections/5/entries/6/examples/0:start -->

#### Example 1

Command

```sh
jq 'sub("[^a-z]*(?<x>[a-z]+)"; "Z\(.x)"; "g")'
```

Input

```text
"123abc456def"
```

Output 1

```text
"ZabcZdef"
```

<!-- jq-example:sections/5/entries/6/examples/0:end -->

<!-- jq-example:sections/5/entries/6/examples/1:start -->

#### Example 2

Command

```sh
jq '[sub("(?<a>.)"; "\(.a|ascii_upcase)", "\(.a|ascii_downcase)")]'
```

Input

```text
"aB"
```

Output 1

```text
["AB","aB"]
```

<!-- jq-example:sections/5/entries/6/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/5/entries/7/title">

<h3 id="gsub"><code>gsub(regex; tostring)</code>, <code>gsub(regex; tostring; flags)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/7/body">

<p><code>gsub</code> is like <code>sub</code> but all the non-overlapping occurrences of the regex are
replaced by <code>tostring</code>, after interpolation. If the second argument is a stream
of jq strings, then <code>gsub</code> will produce a corresponding stream of JSON strings.</p>

</div>

<!-- jq-example:sections/5/entries/7/examples/0:start -->

#### Example 1

Command

```sh
jq 'gsub("(?<x>.)[^a]*"; "+\(.x)-")'
```

Input

```text
"Abcabc"
```

Output 1

```text
"+A-+a-"
```

<!-- jq-example:sections/5/entries/7/examples/0:end -->

<!-- jq-example:sections/5/entries/7/examples/1:start -->

#### Example 2

Command

```sh
jq '[gsub("p"; "a", "b")]'
```

Input

```text
"p"
```

Output 1

```text
["a","b"]
```

<!-- jq-example:sections/5/entries/7/examples/1:end -->


