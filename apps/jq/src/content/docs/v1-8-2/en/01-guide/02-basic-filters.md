---
title: "Basic filters"
order: 2
categoryOrder: 1
documentContext: [{"kind":"source","html":"<h2 id=\"source-and-notices\">Source and notices</h2>\n<p>Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.</p>\n<p><a href=\"https://jqlang.org/manual/v1.8/\">Original manual</a> · <a href=\"https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml\">Fixed source</a> · <a href=\"https://creativecommons.org/licenses/by/3.0/\">License</a> · <a href=\"/docs/jq/v1-8-2/en/02-license/01-original-notices/\">Original notices</a> · <a href=\"/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/\">Full legal code</a></p>"}]
---

<div class="jq-upstream-field" data-source-key="sections/1/title">

<h2 id="basic-filters">Basic filters</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/0/title">

<h3 id="identity">Identity: <code>.</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/0/body">

<p>The absolute simplest filter is <code>.</code> .  This filter takes its
input and produces the same value as output.  That is, this
is the identity operator.</p>




<p>Since jq by default pretty-prints all output, a trivial
program consisting of nothing but <code>.</code> can be used to format
JSON output from, say, <code>curl</code>.</p>




<p>Although the identity filter never modifies the value of its
input, jq processing can sometimes make it appear as though
it does.  For example, using the current implementation of
jq, we would see that the expression:</p>




<pre><code>1E1234567890 | .
</code></pre>




<p>produces <code>1.7976931348623157e+308</code> on at least one platform.
This is because, in the process of parsing the number, this
particular version of jq has converted it to an IEEE754
double-precision representation, losing precision.</p>




<p>The way in which jq handles numbers has changed over time
and further changes are likely within the parameters set by
the relevant JSON standards.  Moreover, build configuration
options can alter how jq processes numbers.</p>




<p>The following remarks are therefore offered with the
understanding that they are intended to be descriptive of the
current version of jq and should not be interpreted as being
prescriptive:</p>




<p>(1) Any arithmetic operation on a number that has not
already been converted to an IEEE754 double precision
representation will trigger a conversion to the IEEE754
representation.</p>




<p>(2) jq will attempt to maintain the original decimal
precision of number literals (if the <code>--disable-decnum</code>
build configuration option was not used), but in expressions
such <code>1E1234567890</code>, precision will be lost if the exponent
is too large.</p>




<p>(3) Comparisons are carried out using the untruncated
big decimal representation of numbers if available, as
illustrated in one of the following examples.</p>




<p>The examples below use the builtin function <code>have_decnum</code> in
order to demonstrate the expected effects of using / not
using the <code>--disable-decnum</code> build configuration option, and
also to allow automated tests derived from these examples to
pass regardless of whether that option is used.</p>

</div>

<!-- jq-example:sections/1/entries/0/examples/0:start -->

#### Example 1

Command

```sh
jq '.'
```

Input

```text
"Hello, world!"
```

Output 1

```text
"Hello, world!"
```

<!-- jq-example:sections/1/entries/0/examples/0:end -->

<!-- jq-example:sections/1/entries/0/examples/1:start -->

#### Example 2

Command

```sh
jq '.'
```

Input

```text
0.12345678901234567890123456789
```

Output 1

```text
0.12345678901234567890123456789
```

<!-- jq-example:sections/1/entries/0/examples/1:end -->

<!-- jq-example:sections/1/entries/0/examples/2:start -->

#### Example 3

Command

```sh
jq '[., tojson] == if have_decnum then [12345678909876543212345,"12345678909876543212345"] else [12345678909876543000000,"12345678909876543000000"] end'
```

Input

```text
12345678909876543212345
```

Output 1

```text
true
```

<!-- jq-example:sections/1/entries/0/examples/2:end -->

<!-- jq-example:sections/1/entries/0/examples/3:start -->

#### Example 4

Command

```sh
jq '[1234567890987654321,-1234567890987654321 | tojson] == if have_decnum then ["1234567890987654321","-1234567890987654321"] else ["1234567890987654400","-1234567890987654400"] end'
```

Input

```text
null
```

Output 1

```text
true
```

<!-- jq-example:sections/1/entries/0/examples/3:end -->

<!-- jq-example:sections/1/entries/0/examples/4:start -->

#### Example 5

Command

```sh
jq '. < 0.12345678901234567890123456788'
```

Input

```text
0.12345678901234567890123456789
```

Output 1

```text
false
```

<!-- jq-example:sections/1/entries/0/examples/4:end -->

<!-- jq-example:sections/1/entries/0/examples/5:start -->

#### Example 6

Command

```sh
jq 'map([., . == 1]) | tojson == if have_decnum then "[[1,true],[1.000,true],[1.0,true],[1.00,true]]" else "[[1,true],[1,true],[1,true],[1,true]]" end'
```

Input

```text
[1, 1.000, 1.0, 100e-2]
```

Output 1

```text
true
```

<!-- jq-example:sections/1/entries/0/examples/5:end -->

<!-- jq-example:sections/1/entries/0/examples/6:start -->

#### Example 7

Command

```sh
jq '. as $big | [$big, $big + 1] | map(. > 10000000000000000000000000000000) | . == if have_decnum then [true, false] else [false, false] end'
```

Input

```text
10000000000000000000000000000001
```

Output 1

```text
true
```

<!-- jq-example:sections/1/entries/0/examples/6:end -->

<div class="jq-upstream-field" data-source-key="sections/1/entries/1/title">

<h3 id="object-identifier-index">Object Identifier-Index: <code>.foo</code>, <code>.foo.bar</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/1/body">

<p>The simplest <em>useful</em> filter has the form <code>.foo</code>. When given a
JSON object (aka dictionary or hash) as input, <code>.foo</code> produces
the value at the key "foo" if the key is present, or null otherwise.</p>




<p>A filter of the form <code>.foo.bar</code> is equivalent to <code>.foo | .bar</code>.</p>




<p>The <code>.foo</code> syntax only works for simple, identifier-like keys, that
is, keys that are all made of alphanumeric characters and
underscore, and which do not start with a digit.</p>




<p>If the key contains special characters or starts with a digit,
you need to surround it with double quotes like this:
<code>."foo$"</code>, or else <code>.["foo$"]</code>.</p>




<p>For example <code>.["foo::bar"]</code> and <code>.["foo.bar"]</code> work while
<code>.foo::bar</code> does not.</p>

</div>

<!-- jq-example:sections/1/entries/1/examples/0:start -->

#### Example 1

Command

```sh
jq '.foo'
```

Input

```text
{"foo": 42, "bar": "less interesting data"}
```

Output 1

```text
42
```

<!-- jq-example:sections/1/entries/1/examples/0:end -->

<!-- jq-example:sections/1/entries/1/examples/1:start -->

#### Example 2

Command

```sh
jq '.foo'
```

Input

```text
{"notfoo": true, "alsonotfoo": false}
```

Output 1

```text
null
```

<!-- jq-example:sections/1/entries/1/examples/1:end -->

<!-- jq-example:sections/1/entries/1/examples/2:start -->

#### Example 3

Command

```sh
jq '.["foo"]'
```

Input

```text
{"foo": 42}
```

Output 1

```text
42
```

<!-- jq-example:sections/1/entries/1/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/1/entries/2/title">

<h3 id="optional-object-identifier-index">Optional Object Identifier-Index: <code>.foo?</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/2/body">

<p>Just like <code>.foo</code>, but does not output an error when <code>.</code> is not an
object.</p>

</div>

<!-- jq-example:sections/1/entries/2/examples/0:start -->

#### Example 1

Command

```sh
jq '.foo?'
```

Input

```text
{"foo": 42, "bar": "less interesting data"}
```

Output 1

```text
42
```

<!-- jq-example:sections/1/entries/2/examples/0:end -->

<!-- jq-example:sections/1/entries/2/examples/1:start -->

#### Example 2

Command

```sh
jq '.foo?'
```

Input

```text
{"notfoo": true, "alsonotfoo": false}
```

Output 1

```text
null
```

<!-- jq-example:sections/1/entries/2/examples/1:end -->

<!-- jq-example:sections/1/entries/2/examples/2:start -->

#### Example 3

Command

```sh
jq '.["foo"]?'
```

Input

```text
{"foo": 42}
```

Output 1

```text
42
```

<!-- jq-example:sections/1/entries/2/examples/2:end -->

<!-- jq-example:sections/1/entries/2/examples/3:start -->

#### Example 4

Command

```sh
jq '[.foo?]'
```

Input

```text
[1,2]
```

Output 1

```text
[]
```

<!-- jq-example:sections/1/entries/2/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/1/entries/3/title">

<h3 id="object-index">Object Index: <code>.[&lt;string&gt;]</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/3/body">

<p>You can also look up fields of an object using syntax like
<code>.["foo"]</code> (<code>.foo</code> above is a shorthand version of this, but
only for identifier-like strings).</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/4/title">

<h3 id="array-index">Array Index: <code>.[&lt;number&gt;]</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/4/body">

<p>When the index value is an integer, <code>.[&lt;number&gt;]</code> can index
arrays.  Arrays are zero-based, so <code>.[2]</code> returns the third
element.</p>




<p>Negative indices are allowed, with -1 referring to the last
element, -2 referring to the next to last element, and so on.</p>

</div>

<!-- jq-example:sections/1/entries/4/examples/0:start -->

#### Example 1

Command

```sh
jq '.[0]'
```

Input

```text
[{"name":"JSON", "good":true}, {"name":"XML", "good":false}]
```

Output 1

```text
{"name":"JSON", "good":true}
```

<!-- jq-example:sections/1/entries/4/examples/0:end -->

<!-- jq-example:sections/1/entries/4/examples/1:start -->

#### Example 2

Command

```sh
jq '.[2]'
```

Input

```text
[{"name":"JSON", "good":true}, {"name":"XML", "good":false}]
```

Output 1

```text
null
```

<!-- jq-example:sections/1/entries/4/examples/1:end -->

<!-- jq-example:sections/1/entries/4/examples/2:start -->

#### Example 3

Command

```sh
jq '.[-2]'
```

Input

```text
[1,2,3]
```

Output 1

```text
2
```

<!-- jq-example:sections/1/entries/4/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/1/entries/5/title">

<h3 id="array-string-slice">Array/String Slice: <code>.[&lt;number&gt;:&lt;number&gt;]</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/5/body">

<p>The <code>.[&lt;number&gt;:&lt;number&gt;]</code> syntax can be used to return a
subarray of an array or substring of a string. The array
returned by <code>.[10:15]</code> will be of length 5, containing the
elements from index 10 (inclusive) to index 15 (exclusive).
Either index may be negative (in which case it counts
backwards from the end of the array), or omitted (in which
case it refers to the start or end of the array).
Indices are zero-based.</p>

</div>

<!-- jq-example:sections/1/entries/5/examples/0:start -->

#### Example 1

Command

```sh
jq '.[2:4]'
```

Input

```text
["a","b","c","d","e"]
```

Output 1

```text
["c", "d"]
```

<!-- jq-example:sections/1/entries/5/examples/0:end -->

<!-- jq-example:sections/1/entries/5/examples/1:start -->

#### Example 2

Command

```sh
jq '.[2:4]'
```

Input

```text
"abcdefghi"
```

Output 1

```text
"cd"
```

<!-- jq-example:sections/1/entries/5/examples/1:end -->

<!-- jq-example:sections/1/entries/5/examples/2:start -->

#### Example 3

Command

```sh
jq '.[:3]'
```

Input

```text
["a","b","c","d","e"]
```

Output 1

```text
["a", "b", "c"]
```

<!-- jq-example:sections/1/entries/5/examples/2:end -->

<!-- jq-example:sections/1/entries/5/examples/3:start -->

#### Example 4

Command

```sh
jq '.[-2:]'
```

Input

```text
["a","b","c","d","e"]
```

Output 1

```text
["d", "e"]
```

<!-- jq-example:sections/1/entries/5/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/1/entries/6/title">

<h3 id="array-object-value-iterator">Array/Object Value Iterator: <code>.[]</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/6/body">

<p>If you use the <code>.[index]</code> syntax, but omit the index
entirely, it will return <em>all</em> of the elements of an
array. Running <code>.[]</code> with the input <code>[1,2,3]</code> will produce the
numbers as three separate results, rather than as a single
array. A filter of the form <code>.foo[]</code> is equivalent to
<code>.foo | .[]</code>.</p>




<p>You can also use this on an object, and it will return all
the values of the object.</p>




<p>Note that the iterator operator is a generator of values.</p>

</div>

<!-- jq-example:sections/1/entries/6/examples/0:start -->

#### Example 1

Command

```sh
jq '.[]'
```

Input

```text
[{"name":"JSON", "good":true}, {"name":"XML", "good":false}]
```

Output 1

```text
{"name":"JSON", "good":true}
```

Output 2

```text
{"name":"XML", "good":false}
```

<!-- jq-example:sections/1/entries/6/examples/0:end -->

<!-- jq-example:sections/1/entries/6/examples/1:start -->

#### Example 2

Command

```sh
jq '.[]'
```

Input

```text
[]
```

Output: none

<!-- jq-example:sections/1/entries/6/examples/1:end -->

<!-- jq-example:sections/1/entries/6/examples/2:start -->

#### Example 3

Command

```sh
jq '.foo[]'
```

Input

```text
{"foo":[1,2,3]}
```

Output 1

```text
1
```

Output 2

```text
2
```

Output 3

```text
3
```

<!-- jq-example:sections/1/entries/6/examples/2:end -->

<!-- jq-example:sections/1/entries/6/examples/3:start -->

#### Example 4

Command

```sh
jq '.[]'
```

Input

```text
{"a": 1, "b": 1}
```

Output 1

```text
1
```

Output 2

```text
1
```

<!-- jq-example:sections/1/entries/6/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/1/entries/7/title">

<h3 id=".[]?"><code>.[]?</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/7/body">

<p>Like <code>.[]</code>, but no errors will be output if . is not an array
or object. A filter of the form <code>.foo[]?</code> is equivalent to
<code>.foo | .[]?</code>.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/8/title">

<h3 id="comma">Comma: <code>,</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/8/body">

<p>If two filters are separated by a comma, then the
same input will be fed into both and the two filters' output
value streams will be concatenated in order: first, all of the
outputs produced by the left expression, and then all of the
outputs produced by the right. For instance, filter <code>.foo,
.bar</code>, produces both the "foo" fields and "bar" fields as
separate outputs.</p>




<p>The <code>,</code> operator is one way to construct generators.</p>

</div>

<!-- jq-example:sections/1/entries/8/examples/0:start -->

#### Example 1

Command

```sh
jq '.foo, .bar'
```

Input

```text
{"foo": 42, "bar": "something else", "baz": true}
```

Output 1

```text
42
```

Output 2

```text
"something else"
```

<!-- jq-example:sections/1/entries/8/examples/0:end -->

<!-- jq-example:sections/1/entries/8/examples/1:start -->

#### Example 2

Command

```sh
jq '.user, .projects[]'
```

Input

```text
{"user":"stedolan", "projects": ["jq", "wikiflow"]}
```

Output 1

```text
"stedolan"
```

Output 2

```text
"jq"
```

Output 3

```text
"wikiflow"
```

<!-- jq-example:sections/1/entries/8/examples/1:end -->

<!-- jq-example:sections/1/entries/8/examples/2:start -->

#### Example 3

Command

```sh
jq '.[4,2]'
```

Input

```text
["a","b","c","d","e"]
```

Output 1

```text
"e"
```

Output 2

```text
"c"
```

<!-- jq-example:sections/1/entries/8/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/1/entries/9/title">

<h3 id="pipe">Pipe: <code>|</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/9/body">

<p>The | operator combines two filters by feeding the output(s) of
the one on the left into the input of the one on the right. It's
similar to the Unix shell's pipe, if you're used to that.</p>




<p>If the one on the left produces multiple results, the one on
the right will be run for each of those results. So, the
expression <code>.[] | .foo</code> retrieves the "foo" field of each
element of the input array.  This is a cartesian product,
which can be surprising.</p>




<p>Note that <code>.a.b.c</code> is the same as <code>.a | .b | .c</code>.</p>




<p>Note too that <code>.</code> is the input value at the particular stage
in a "pipeline", specifically: where the <code>.</code> expression appears.
Thus <code>.a | . | .b</code> is the same as <code>.a.b</code>, as the <code>.</code> in the
middle refers to whatever value <code>.a</code> produced.</p>

</div>

<!-- jq-example:sections/1/entries/9/examples/0:start -->

#### Example 1

Command

```sh
jq '.[] | .name'
```

Input

```text
[{"name":"JSON", "good":true}, {"name":"XML", "good":false}]
```

Output 1

```text
"JSON"
```

Output 2

```text
"XML"
```

<!-- jq-example:sections/1/entries/9/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/1/entries/10/title">

<h3 id="parenthesis">Parenthesis</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/10/body">

<p>Parenthesis work as a grouping operator just as in any typical
programming language.</p>

</div>

<!-- jq-example:sections/1/entries/10/examples/0:start -->

#### Example 1

Command

```sh
jq '(. + 2) * 5'
```

Input

```text
1
```

Output 1

```text
15
```

<!-- jq-example:sections/1/entries/10/examples/0:end -->


