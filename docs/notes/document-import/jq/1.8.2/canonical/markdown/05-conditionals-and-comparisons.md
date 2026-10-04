---
title: "Conditionals and Comparisons"
order: 5
categoryOrder: 1
---

<div class="jq-upstream-field" data-source-key="sections/4/title">

<h2 id="conditionals-and-comparisons">Conditionals and Comparisons</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/0/title">

<h3 id="==-!="><code>==</code>, <code>!=</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/0/body">

<p>The expression 'a == b' will produce 'true' if the results of evaluating
a and b are equal (that is, if they represent equivalent JSON values) and
'false' otherwise. In particular, strings are never considered equal
to numbers.  In checking for the equality of JSON objects, the ordering of keys
is irrelevant.  If you're coming from JavaScript, please note that jq's <code>==</code> is like
JavaScript's <code>===</code>, the "strict equality" operator.</p>




<p>!= is "not equal", and 'a != b' returns the opposite value of 'a == b'</p>

</div>

<!-- jq-example:sections/4/entries/0/examples/0:start -->

#### Example 1

Command

```sh
jq '. == false'
```

Input

```text
null
```

Output 1

```text
false
```

<!-- jq-example:sections/4/entries/0/examples/0:end -->

<!-- jq-example:sections/4/entries/0/examples/1:start -->

#### Example 2

Command

```sh
jq '. == {"b": {"d": (4 + 1e-20), "c": 3}, "a":1}'
```

Input

```text
{"a":1, "b": {"c": 3, "d": 4}}
```

Output 1

```text
true
```

<!-- jq-example:sections/4/entries/0/examples/1:end -->

<!-- jq-example:sections/4/entries/0/examples/2:start -->

#### Example 3

Command

```sh
jq '.[] == 1'
```

Input

```text
[1, 1.0, "1", "banana"]
```

Output 1

```text
true
```

Output 2

```text
true
```

Output 3

```text
false
```

Output 4

```text
false
```

<!-- jq-example:sections/4/entries/0/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/4/entries/1/title">

<h3 id="if-then-else-end">if-then-else-end</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/1/body">

<p><code>if A then B else C end</code> will act the same as <code>B</code> if <code>A</code>
produces a value other than false or null, but act the same
as <code>C</code> otherwise.</p>




<p><code>if A then B end</code> is the same as <code>if A then B else .  end</code>.
That is, the <code>else</code> branch is optional, and if absent is the
same as <code>.</code>. This also applies to <code>elif</code> with absent ending <code>else</code> branch.</p>




<p>Checking for false or null is a simpler notion of
"truthiness" than is found in JavaScript or Python, but it
means that you'll sometimes have to be more explicit about
the condition you want.  You can't test whether, e.g. a
string is empty using <code>if .name then A else B end</code>; you'll
need something like <code>if .name == "" then A else B end</code> instead.</p>




<p>If the condition <code>A</code> produces multiple results, then <code>B</code> is evaluated
once for each result that is not false or null, and <code>C</code> is evaluated
once for each false or null.</p>




<p>More cases can be added to an if using <code>elif A then B</code> syntax.</p>

</div>

<!-- jq-example:sections/4/entries/1/examples/0:start -->

#### Example 1

Command

```sh
jq 'if . == 0 then
  "zero"
elif . == 1 then
  "one"
else
  "many"
end'
```

Input

```text
2
```

Output 1

```text
"many"
```

<!-- jq-example:sections/4/entries/1/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/4/entries/2/title">

<h3 id=">->=-<=-<"><code>&gt;</code>, <code>&gt;=</code>, <code>&lt;=</code>, <code>&lt;</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/2/body">

<p>The comparison operators <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;=</code>, <code>&lt;</code> return whether
their left argument is greater than, greater than or equal
to, less than or equal to or less than their right argument
(respectively).</p>




<p>The ordering is the same as that described for <code>sort</code>, above.</p>

</div>

<!-- jq-example:sections/4/entries/2/examples/0:start -->

#### Example 1

Command

```sh
jq '. < 5'
```

Input

```text
2
```

Output 1

```text
true
```

<!-- jq-example:sections/4/entries/2/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/4/entries/3/title">

<h3 id="and-or-not"><code>and</code>, <code>or</code>, <code>not</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/3/body">

<p>jq supports the normal Boolean operators <code>and</code>, <code>or</code>, <code>not</code>.
They have the same standard of truth as if expressions -
<code>false</code> and <code>null</code> are considered "false values", and
anything else is a "true value".</p>




<p>If an operand of one of these operators produces multiple
results, the operator itself will produce a result for each input.</p>




<p><code>not</code> is in fact a builtin function rather than an operator,
so it is called as a filter to which things can be piped
rather than with special syntax, as in <code>.foo and .bar |
not</code>.</p>




<p>These three only produce the values <code>true</code> and <code>false</code>, and
so are only useful for genuine Boolean operations, rather
than the common Perl/Python/Ruby idiom of
"value_that_may_be_null or default". If you want to use this
form of "or", picking between two values rather than
evaluating a condition, see the <code>//</code> operator below.</p>

</div>

<!-- jq-example:sections/4/entries/3/examples/0:start -->

#### Example 1

Command

```sh
jq '42 and "a string"'
```

Input

```text
null
```

Output 1

```text
true
```

<!-- jq-example:sections/4/entries/3/examples/0:end -->

<!-- jq-example:sections/4/entries/3/examples/1:start -->

#### Example 2

Command

```sh
jq '(true, false) or false'
```

Input

```text
null
```

Output 1

```text
true
```

Output 2

```text
false
```

<!-- jq-example:sections/4/entries/3/examples/1:end -->

<!-- jq-example:sections/4/entries/3/examples/2:start -->

#### Example 3

Command

```sh
jq '(true, true) and (true, false)'
```

Input

```text
null
```

Output 1

```text
true
```

Output 2

```text
false
```

Output 3

```text
true
```

Output 4

```text
false
```

<!-- jq-example:sections/4/entries/3/examples/2:end -->

<!-- jq-example:sections/4/entries/3/examples/3:start -->

#### Example 4

Command

```sh
jq '[true, false | not]'
```

Input

```text
null
```

Output 1

```text
[false, true]
```

<!-- jq-example:sections/4/entries/3/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/4/entries/4/title">

<h3 id="alternative-operator">Alternative operator: <code>//</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/4/body">

<p>The <code>//</code> operator produces all the values of its left-hand
side that are neither <code>false</code> nor <code>null</code>. If the
left-hand side produces no values other than <code>false</code> or
<code>null</code>, then <code>//</code> produces all the values of its right-hand
side.</p>




<p>A filter of the form <code>a // b</code> produces all the results of
<code>a</code> that are not <code>false</code> or <code>null</code>.  If <code>a</code> produces no
results, or no results other than <code>false</code> or <code>null</code>, then <code>a
// b</code> produces the results of <code>b</code>.</p>




<p>This is useful for providing defaults: <code>.foo // 1</code> will
evaluate to <code>1</code> if there's no <code>.foo</code> element in the
input. It's similar to how <code>or</code> is sometimes used in Python
(jq's <code>or</code> operator is reserved for strictly Boolean
operations).</p>




<p>Note: <code>some_generator // defaults_here</code> is not the same
as <code>some_generator | . // defaults_here</code>.  The latter will
produce default values for all non-<code>false</code>, non-<code>null</code>
values of the left-hand side, while the former will not.
Precedence rules can make this confusing.  For example, in
<code>false, 1 // 2</code> the left-hand side of <code>//</code> is <code>1</code>, not
<code>false, 1</code> -- <code>false, 1 // 2</code> parses the same way as <code>false,
(1 // 2)</code>.  In <code>(false, null, 1) | . // 42</code> the left-hand
side of <code>//</code> is <code>.</code>, which always produces just one value,
while in <code>(false, null, 1) // 42</code> the left-hand side is a
generator of three values, and since it produces a
value other <code>false</code> and <code>null</code>, the default <code>42</code> is not
produced.</p>

</div>

<!-- jq-example:sections/4/entries/4/examples/0:start -->

#### Example 1

Command

```sh
jq 'empty // 42'
```

Input

```text
null
```

Output 1

```text
42
```

<!-- jq-example:sections/4/entries/4/examples/0:end -->

<!-- jq-example:sections/4/entries/4/examples/1:start -->

#### Example 2

Command

```sh
jq '.foo // 42'
```

Input

```text
{"foo": 19}
```

Output 1

```text
19
```

<!-- jq-example:sections/4/entries/4/examples/1:end -->

<!-- jq-example:sections/4/entries/4/examples/2:start -->

#### Example 3

Command

```sh
jq '.foo // 42'
```

Input

```text
{}
```

Output 1

```text
42
```

<!-- jq-example:sections/4/entries/4/examples/2:end -->

<!-- jq-example:sections/4/entries/4/examples/3:start -->

#### Example 4

Command

```sh
jq '(false, null, 1) // 42'
```

Input

```text
null
```

Output 1

```text
1
```

<!-- jq-example:sections/4/entries/4/examples/3:end -->

<!-- jq-example:sections/4/entries/4/examples/4:start -->

#### Example 5

Command

```sh
jq '(false, null, 1) | . // 42'
```

Input

```text
null
```

Output 1

```text
42
```

Output 2

```text
42
```

Output 3

```text
1
```

<!-- jq-example:sections/4/entries/4/examples/4:end -->

<div class="jq-upstream-field" data-source-key="sections/4/entries/5/title">

<h3 id="try-catch">try-catch</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/5/body">

<p>Errors can be caught by using <code>try EXP catch EXP</code>.  The first
expression is executed, and if it fails then the second is
executed with the error message.  The output of the handler,
if any, is output as if it had been the output of the
expression to try.</p>




<p>The <code>try EXP</code> form uses <code>empty</code> as the exception handler.</p>

</div>

<!-- jq-example:sections/4/entries/5/examples/0:start -->

#### Example 1

Command

```sh
jq 'try .a catch ". is not an object"'
```

Input

```text
true
```

Output 1

```text
". is not an object"
```

<!-- jq-example:sections/4/entries/5/examples/0:end -->

<!-- jq-example:sections/4/entries/5/examples/1:start -->

#### Example 2

Command

```sh
jq '[.[]|try .a]'
```

Input

```text
[{}, true, {"a":1}]
```

Output 1

```text
[null, 1]
```

<!-- jq-example:sections/4/entries/5/examples/1:end -->

<!-- jq-example:sections/4/entries/5/examples/2:start -->

#### Example 3

Command

```sh
jq 'try error("some exception") catch .'
```

Input

```text
true
```

Output 1

```text
"some exception"
```

<!-- jq-example:sections/4/entries/5/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/4/entries/6/title">

<h3 id="breaking-out-of-control-structures">Breaking out of control structures</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/6/body">

<p>A convenient use of try/catch is to break out of control
structures like <code>reduce</code>, <code>foreach</code>, <code>while</code>, and so on.</p>




<p>For example:</p>




<pre><code># Repeat an expression until it raises "break" as an
# error, then stop repeating without re-raising the error.
# But if the error caught is not "break" then re-raise it.
try repeat(exp) catch if .=="break" then empty else error
</code></pre>




<p>jq has a syntax for named lexical labels to "break" or "go (back) to":</p>




<pre><code>label $out | ... break $out ...
</code></pre>




<p>The <code>break $label_name</code> expression will cause the program to
act as though the nearest (to the left) <code>label $label_name</code>
produced <code>empty</code>.</p>




<p>The relationship between the <code>break</code> and corresponding <code>label</code>
is lexical: the label has to be "visible" from the break.</p>




<p>To break out of a <code>reduce</code>, for example:</p>




<pre><code>label $out | reduce .[] as $item (null; if .==false then break $out else ... end)
</code></pre>




<p>The following jq program produces a syntax error:</p>




<pre><code>break $out
</code></pre>




<p>because no label <code>$out</code> is visible.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/7/title">

<h3 id="error-suppression-optional-operator">Error Suppression / Optional Operator: <code>?</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/7/body">

<p>The <code>?</code> operator, used as <code>EXP?</code>, is shorthand for <code>try EXP</code>.</p>

</div>

<!-- jq-example:sections/4/entries/7/examples/0:start -->

#### Example 1

Command

```sh
jq '[.[] | .a?]'
```

Input

```text
[{}, true, {"a":1}]
```

Output 1

```text
[null, 1]
```

<!-- jq-example:sections/4/entries/7/examples/0:end -->

<!-- jq-example:sections/4/entries/7/examples/1:start -->

#### Example 2

Command

```sh
jq '[.[] | tonumber?]'
```

Input

```text
["1", "invalid", "3", 4]
```

Output 1

```text
[1, 3, 4]
```

<!-- jq-example:sections/4/entries/7/examples/1:end -->


## Source and notices

Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.

[Original manual](https://jqlang.org/manual/v1.8/) · [Fixed source](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [License](https://creativecommons.org/licenses/by/3.0/) · [Original notices](/docs/jq/v1-8-2/en/02-license/01-original-notices/) · [Full legal code](/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/)
