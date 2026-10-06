---
title: "Types and Values"
order: 3
categoryOrder: 1
---

<div class="jq-upstream-field" data-source-key="sections/2/title">

<h2 id="types-and-values">Types and Values</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/2/body">

<p>jq supports the same set of datatypes as JSON - numbers,
strings, booleans, arrays, objects (which in JSON-speak are
hashes with only string keys), and "null".</p>




<p>Booleans, null, strings and numbers are written the same way as
in JSON. Just like everything else in jq, these simple
values take an input and produce an output - <code>42</code> is a valid jq
expression that takes an input, ignores it, and returns 42
instead.</p>




<p>Numbers in jq are internally represented by their IEEE754 double
precision approximation. Any arithmetic operation with numbers,
whether they are literals or results of previous filters, will
produce a double precision floating point result.</p>




<p>However, when parsing a literal jq will store the original literal
string. If no mutation is applied to this value then it will make
to the output in its original form, even if conversion to double
would result in a loss.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/2/entries/0/title">

<h3 id="array-construction">Array construction: <code>[]</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/2/entries/0/body">

<p>As in JSON, <code>[]</code> is used to construct arrays, as in
<code>[1,2,3]</code>. The elements of the arrays can be any jq
expression, including a pipeline. All of the results produced
by all of the expressions are collected into one big array.
You can use it to construct an array out of a known quantity
of values (as in <code>[.foo, .bar, .baz]</code>) or to "collect" all the
results of a filter into an array (as in <code>[.items[].name]</code>)</p>




<p>Once you understand the "," operator, you can look at jq's array
syntax in a different light: the expression <code>[1,2,3]</code> is not using a
built-in syntax for comma-separated arrays, but is instead applying
the <code>[]</code> operator (collect results) to the expression 1,2,3 (which
produces three different results).</p>




<p>If you have a filter <code>X</code> that produces four results,
then the expression <code>[X]</code> will produce a single result, an
array of four elements.</p>

</div>

<!-- jq-example:sections/2/entries/0/examples/0:start -->

#### Example 1

Command

```sh
jq '[.user, .projects[]]'
```

Input

```text
{"user":"stedolan", "projects": ["jq", "wikiflow"]}
```

Output 1

```text
["stedolan", "jq", "wikiflow"]
```

<!-- jq-example:sections/2/entries/0/examples/0:end -->

<!-- jq-example:sections/2/entries/0/examples/1:start -->

#### Example 2

Command

```sh
jq '[ .[] | . * 2]'
```

Input

```text
[1, 2, 3]
```

Output 1

```text
[2, 4, 6]
```

<!-- jq-example:sections/2/entries/0/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/2/entries/1/title">

<h3 id="object-construction">Object Construction: <code>{}</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/2/entries/1/body">

<p>Like JSON, <code>{}</code> is for constructing objects (aka
dictionaries or hashes), as in: <code>{"a": 42, "b": 17}</code>.</p>




<p>If the keys are "identifier-like", then the quotes can be left
off, as in <code>{a:42, b:17}</code>.  Variable references as key
expressions use the value of the variable as the key.  Key
expressions other than constant literals, identifiers, or
variable references, need to be parenthesized, e.g.,
<code>{("a"+"b"):59}</code>.</p>




<p>The value can be any expression (although you may need to wrap
it in parentheses if, for example, it contains colons), which
gets applied to the {} expression's input (remember, all
filters have an input and an output).</p>




<pre><code>{foo: .bar}
</code></pre>




<p>will produce the JSON object <code>{"foo": 42}</code> if given the JSON
object <code>{"bar":42, "baz":43}</code> as its input. You can use this
to select particular fields of an object: if the input is an
object with "user", "title", "id", and "content" fields and
you just want "user" and "title", you can write</p>




<pre><code>{user: .user, title: .title}
</code></pre>




<p>Because that is so common, there's a shortcut syntax for it:
<code>{user, title}</code>.</p>




<p>If one of the expressions produces multiple results,
multiple dictionaries will be produced. If the input's</p>




<pre><code>{"user":"stedolan","titles":["JQ Primer", "More JQ"]}
</code></pre>




<p>then the expression</p>




<pre><code>{user, title: .titles[]}
</code></pre>




<p>will produce two outputs:</p>




<pre><code>{"user":"stedolan", "title": "JQ Primer"}
{"user":"stedolan", "title": "More JQ"}
</code></pre>




<p>Putting parentheses around the key means it will be evaluated as an
expression. With the same input as above,</p>




<pre><code>{(.user): .titles}
</code></pre>




<p>produces</p>




<pre><code>{"stedolan": ["JQ Primer", "More JQ"]}
</code></pre>




<p>Variable references as keys use the value of the variable as
the key.  Without a value then the variable's name becomes the
key and its value becomes the value,</p>




<pre><code>"f o o" as $foo | "b a r" as $bar | {$foo, $bar:$foo}
</code></pre>




<p>produces</p>




<pre><code>{"foo":"f o o","b a r":"f o o"}
</code></pre>

</div>

<!-- jq-example:sections/2/entries/1/examples/0:start -->

#### Example 1

Command

```sh
jq '{user, title: .titles[]}'
```

Input

```text
{"user":"stedolan","titles":["JQ Primer", "More JQ"]}
```

Output 1

```text
{"user":"stedolan", "title": "JQ Primer"}
```

Output 2

```text
{"user":"stedolan", "title": "More JQ"}
```

<!-- jq-example:sections/2/entries/1/examples/0:end -->

<!-- jq-example:sections/2/entries/1/examples/1:start -->

#### Example 2

Command

```sh
jq '{(.user): .titles}'
```

Input

```text
{"user":"stedolan","titles":["JQ Primer", "More JQ"]}
```

Output 1

```text
{"stedolan": ["JQ Primer", "More JQ"]}
```

<!-- jq-example:sections/2/entries/1/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/2/entries/2/title">

<h3 id="recursive-descent">Recursive Descent: <code>..</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/2/entries/2/body">

<p>Recursively descends <code>.</code>, producing every value.  This is the
same as the zero-argument <code>recurse</code> builtin (see below).  This
is intended to resemble the XPath <code>//</code> operator.  Note that
<code>..a</code> does not work; use <code>.. | .a</code> instead.  In the example
below we use <code>.. | .a?</code> to find all the values of object keys
"a" in any object found "below" <code>.</code>.</p>




<p>This is particularly useful in conjunction with <code>path(EXP)</code>
(also see below) and the <code>?</code> operator.</p>

</div>

<!-- jq-example:sections/2/entries/2/examples/0:start -->

#### Example 1

Command

```sh
jq '.. | .a?'
```

Input

```text
[[{"a":1}]]
```

Output 1

```text
1
```

<!-- jq-example:sections/2/entries/2/examples/0:end -->


## Source and notices

Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.

[Original manual](https://jqlang.org/manual/v1.8/) · [Fixed source](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [License](https://creativecommons.org/licenses/by/3.0/) · [Original notices](/docs/jq/v1-8-2/en/02-license/01-original-notices/) · [Full legal code](/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/)
