---
title: "Builtin operators and functions"
order: 4
categoryOrder: 1
---

<div class="jq-upstream-field" data-source-key="sections/3/title">

<h2 id="builtin-operators-and-functions">Builtin operators and functions</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/body">

<p>Some jq operators (for instance, <code>+</code>) do different things
depending on the type of their arguments (arrays, numbers,
etc.). However, jq never does implicit type conversions. If you
try to add a string to an object you'll get an error message and
no result.</p>




<p>Please note that all numbers are converted to IEEE754 double precision
floating point representation. Arithmetic and logical operators are working
with these converted doubles. Results of all such operations are also limited
to the double precision.</p>




<p>The only exception to this behaviour of number is a snapshot of original number
literal. When a number which originally was provided as a literal is never
mutated until the end of the program then it is printed to the output in its
original literal form. This also includes cases when the original literal
would be truncated when converted to the IEEE754 double precision floating point
number.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/0/title">

<h3 id="addition">Addition: <code>+</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/0/body">

<p>The operator <code>+</code> takes two filters, applies them both
to the same input, and adds the results together. What
"adding" means depends on the types involved:</p>




<ul>
<li>
<p><strong>Numbers</strong> are added by normal arithmetic.</p>
</li>
<li>
<p><strong>Arrays</strong> are added by being concatenated into a larger array.</p>
</li>
<li>
<p><strong>Strings</strong> are added by being joined into a larger string.</p>
</li>
<li>
<p><strong>Objects</strong> are added by merging, that is, inserting all
  the key-value pairs from both objects into a single
  combined object. If both objects contain a value for the
  same key, the object on the right of the <code>+</code> wins. (For
  recursive merge use the <code>*</code> operator.)</p>
</li>
</ul>




<p><code>null</code> can be added to any value, and returns the other
value unchanged.</p>

</div>

<!-- jq-example:sections/3/entries/0/examples/0:start -->

#### Example 1

Command

```sh
jq '.a + 1'
```

Input

```text
{"a": 7}
```

Output 1

```text
8
```

<!-- jq-example:sections/3/entries/0/examples/0:end -->

<!-- jq-example:sections/3/entries/0/examples/1:start -->

#### Example 2

Command

```sh
jq '.a + .b'
```

Input

```text
{"a": [1,2], "b": [3,4]}
```

Output 1

```text
[1,2,3,4]
```

<!-- jq-example:sections/3/entries/0/examples/1:end -->

<!-- jq-example:sections/3/entries/0/examples/2:start -->

#### Example 3

Command

```sh
jq '.a + null'
```

Input

```text
{"a": 1}
```

Output 1

```text
1
```

<!-- jq-example:sections/3/entries/0/examples/2:end -->

<!-- jq-example:sections/3/entries/0/examples/3:start -->

#### Example 4

Command

```sh
jq '.a + 1'
```

Input

```text
{}
```

Output 1

```text
1
```

<!-- jq-example:sections/3/entries/0/examples/3:end -->

<!-- jq-example:sections/3/entries/0/examples/4:start -->

#### Example 5

Command

```sh
jq '{a: 1} + {b: 2} + {c: 3} + {a: 42}'
```

Input

```text
null
```

Output 1

```text
{"a": 42, "b": 2, "c": 3}
```

<!-- jq-example:sections/3/entries/0/examples/4:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/1/title">

<h3 id="subtraction">Subtraction: <code>-</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/1/body">

<p>As well as normal arithmetic subtraction on numbers, the <code>-</code>
operator can be used on arrays to remove all occurrences of
the second array's elements from the first array.</p>

</div>

<!-- jq-example:sections/3/entries/1/examples/0:start -->

#### Example 1

Command

```sh
jq '4 - .a'
```

Input

```text
{"a":3}
```

Output 1

```text
1
```

<!-- jq-example:sections/3/entries/1/examples/0:end -->

<!-- jq-example:sections/3/entries/1/examples/1:start -->

#### Example 2

Command

```sh
jq '. - ["xml", "yaml"]'
```

Input

```text
["xml", "yaml", "json"]
```

Output 1

```text
["json"]
```

<!-- jq-example:sections/3/entries/1/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/2/title">

<h3 id="multiplication-division-modulo">Multiplication, division, modulo: <code>*</code>, <code>/</code>, <code>%</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/2/body">

<p>These infix operators behave as expected when given two numbers.
Division by zero raises an error. <code>x % y</code> computes x modulo y.</p>




<p>Multiplying a string by a number produces the concatenation of
that string that many times. <code>"x" * 0</code> produces <code>""</code>.</p>




<p>Dividing a string by another splits the first using the second
as separators.</p>




<p>Multiplying two objects will merge them recursively: this works
like addition but if both objects contain a value for the
same key, and the values are objects, the two are merged with
the same strategy.</p>

</div>

<!-- jq-example:sections/3/entries/2/examples/0:start -->

#### Example 1

Command

```sh
jq '10 / . * 3'
```

Input

```text
5
```

Output 1

```text
6
```

<!-- jq-example:sections/3/entries/2/examples/0:end -->

<!-- jq-example:sections/3/entries/2/examples/1:start -->

#### Example 2

Command

```sh
jq '. / ", "'
```

Input

```text
"a, b,c,d, e"
```

Output 1

```text
["a","b,c,d","e"]
```

<!-- jq-example:sections/3/entries/2/examples/1:end -->

<!-- jq-example:sections/3/entries/2/examples/2:start -->

#### Example 3

Command

```sh
jq '{"k": {"a": 1, "b": 2}} * {"k": {"a": 0,"c": 3}}'
```

Input

```text
null
```

Output 1

```text
{"k": {"a": 0, "b": 2, "c": 3}}
```

<!-- jq-example:sections/3/entries/2/examples/2:end -->

<!-- jq-example:sections/3/entries/2/examples/3:start -->

#### Example 4

Command

```sh
jq '.[] | (1 / .)?'
```

Input

```text
[1,0,-1]
```

Output 1

```text
1
```

Output 2

```text
-1
```

<!-- jq-example:sections/3/entries/2/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/3/title">

<h3 id="abs"><code>abs</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/3/body">

<p>The builtin function <code>abs</code> is defined naively as: <code>if . &lt; 0 then - . else . end</code>.</p>




<p>For numeric input, this is the absolute value.  See the
section on the identity filter for the implications of this
definition for numeric input.</p>




<p>To compute the absolute value of a number as a floating point number, you may wish use <code>fabs</code>.</p>

</div>

<!-- jq-example:sections/3/entries/3/examples/0:start -->

#### Example 1

Command

```sh
jq 'map(abs)'
```

Input

```text
[-10, -1.1, -1e-1]
```

Output 1

```text
[10,1.1,1e-1]
```

<!-- jq-example:sections/3/entries/3/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/4/title">

<h3 id="length"><code>length</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/4/body">

<p>The builtin function <code>length</code> gets the length of various
different types of value:</p>




<ul>
<li>
<p>The length of a <strong>string</strong> is the number of Unicode
  codepoints it contains (which will be the same as its
  JSON-encoded length in bytes if it's pure ASCII).</p>
</li>
<li>
<p>The length of a <strong>number</strong> is its absolute value.</p>
</li>
<li>
<p>The length of an <strong>array</strong> is the number of elements.</p>
</li>
<li>
<p>The length of an <strong>object</strong> is the number of key-value pairs.</p>
</li>
<li>
<p>The length of <strong>null</strong> is zero.</p>
</li>
<li>
<p>It is an error to use <code>length</code> on a <strong>boolean</strong>.</p>
</li>
</ul>

</div>

<!-- jq-example:sections/3/entries/4/examples/0:start -->

#### Example 1

Command

```sh
jq '.[] | length'
```

Input

```text
[[1,2], "string", {"a":2}, null, -5]
```

Output 1

```text
2
```

Output 2

```text
6
```

Output 3

```text
1
```

Output 4

```text
0
```

Output 5

```text
5
```

<!-- jq-example:sections/3/entries/4/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/5/title">

<h3 id="utf8bytelength"><code>utf8bytelength</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/5/body">

<p>The builtin function <code>utf8bytelength</code> outputs the number of
bytes used to encode a string in UTF-8.</p>

</div>

<!-- jq-example:sections/3/entries/5/examples/0:start -->

#### Example 1

Command

```sh
jq 'utf8bytelength'
```

Input

```text
"\u03bc"
```

Output 1

```text
2
```

<!-- jq-example:sections/3/entries/5/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/6/title">

<h3 id="keys-keys_unsorted"><code>keys</code>, <code>keys_unsorted</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/6/body">

<p>The builtin function <code>keys</code>, when given an object, returns
its keys in an array.</p>




<p>The keys are sorted "alphabetically", by unicode codepoint
order. This is not an order that makes particular sense in
any particular language, but you can count on it being the
same for any two objects with the same set of keys,
regardless of locale settings.</p>




<p>When <code>keys</code> is given an array, it returns the valid indices
for that array: the integers from 0 to length-1.</p>




<p>The <code>keys_unsorted</code> function is just like <code>keys</code>, but if
the input is an object then the keys will not be sorted,
instead the keys will roughly be in insertion order.</p>

</div>

<!-- jq-example:sections/3/entries/6/examples/0:start -->

#### Example 1

Command

```sh
jq 'keys'
```

Input

```text
{"abc": 1, "abcd": 2, "Foo": 3}
```

Output 1

```text
["Foo", "abc", "abcd"]
```

<!-- jq-example:sections/3/entries/6/examples/0:end -->

<!-- jq-example:sections/3/entries/6/examples/1:start -->

#### Example 2

Command

```sh
jq 'keys'
```

Input

```text
[42,3,35]
```

Output 1

```text
[0,1,2]
```

<!-- jq-example:sections/3/entries/6/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/7/title">

<h3 id="has"><code>has(key)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/7/body">

<p>The builtin function <code>has</code> returns whether the input object
has the given key, or the input array has an element at the
given index.</p>




<p><code>has($key)</code> has the same effect as checking whether <code>$key</code>
is a member of the array returned by <code>keys</code>, although <code>has</code>
will be faster.</p>

</div>

<!-- jq-example:sections/3/entries/7/examples/0:start -->

#### Example 1

Command

```sh
jq 'map(has("foo"))'
```

Input

```text
[{"foo": 42}, {}]
```

Output 1

```text
[true, false]
```

<!-- jq-example:sections/3/entries/7/examples/0:end -->

<!-- jq-example:sections/3/entries/7/examples/1:start -->

#### Example 2

Command

```sh
jq 'map(has(2))'
```

Input

```text
[[0,1], ["a","b","c"]]
```

Output 1

```text
[false, true]
```

<!-- jq-example:sections/3/entries/7/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/8/title">

<h3 id="in"><code>in</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/8/body">

<p>The builtin function <code>in</code> returns whether or not the input key is in the
given object, or the input index corresponds to an element
in the given array. It is, essentially, an inversed version
of <code>has</code>.</p>

</div>

<!-- jq-example:sections/3/entries/8/examples/0:start -->

#### Example 1

Command

```sh
jq '.[] | in({"foo": 42})'
```

Input

```text
["foo", "bar"]
```

Output 1

```text
true
```

Output 2

```text
false
```

<!-- jq-example:sections/3/entries/8/examples/0:end -->

<!-- jq-example:sections/3/entries/8/examples/1:start -->

#### Example 2

Command

```sh
jq 'map(in([0,1]))'
```

Input

```text
[2, 0]
```

Output 1

```text
[false, true]
```

<!-- jq-example:sections/3/entries/8/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/9/title">

<h3 id="map-map_values"><code>map(f)</code>, <code>map_values(f)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/9/body">

<p>For any filter <code>f</code>, <code>map(f)</code> and <code>map_values(f)</code> apply <code>f</code>
to each of the values in the input array or object, that is,
to the values of <code>.[]</code>.</p>




<p>In the absence of errors, <code>map(f)</code> always outputs an array
whereas <code>map_values(f)</code> outputs an array if given an array,
or an object if given an object.</p>




<p>When the input to <code>map_values(f)</code> is an object, the output
object has the same keys as the input object except for
those keys whose values when piped to <code>f</code> produce no values
at all.</p>




<p>The key difference between <code>map(f)</code> and <code>map_values(f)</code> is
that the former simply forms an array from all the values of
<code>($x|f)</code> for each value, <code>$x</code>, in the input array or object,
but <code>map_values(f)</code> only uses <code>first($x|f)</code>.</p>




<p>Specifically, for object inputs, <code>map_values(f)</code> constructs
the output object by examining in turn the value of
<code>first(.[$k]|f)</code> for each key, <code>$k</code>, of the input.  If this
expression produces no values, then the corresponding key
will be dropped; otherwise, the output object will have that
value at the key, <code>$k</code>.</p>




<p>Here are some examples to clarify the behavior of <code>map</code> and
<code>map_values</code> when applied to arrays. These examples assume the
input is <code>[1]</code> in all cases:</p>




<pre><code>map(.+1)          #=&gt;  [2]
map(., .)         #=&gt;  [1,1]
map(empty)        #=&gt;  []

map_values(.+1)   #=&gt;  [2]
map_values(., .)  #=&gt;  [1]
map_values(empty) #=&gt;  []
</code></pre>




<p><code>map(f)</code> is equivalent to <code>[.[] | f]</code> and
<code>map_values(f)</code> is equivalent to <code>.[] |= f</code>.</p>




<p>In fact, these are their implementations.</p>

</div>

<!-- jq-example:sections/3/entries/9/examples/0:start -->

#### Example 1

Command

```sh
jq 'map(.+1)'
```

Input

```text
[1,2,3]
```

Output 1

```text
[2,3,4]
```

<!-- jq-example:sections/3/entries/9/examples/0:end -->

<!-- jq-example:sections/3/entries/9/examples/1:start -->

#### Example 2

Command

```sh
jq 'map_values(.+1)'
```

Input

```text
{"a": 1, "b": 2, "c": 3}
```

Output 1

```text
{"a": 2, "b": 3, "c": 4}
```

<!-- jq-example:sections/3/entries/9/examples/1:end -->

<!-- jq-example:sections/3/entries/9/examples/2:start -->

#### Example 3

Command

```sh
jq 'map(., .)'
```

Input

```text
[1,2]
```

Output 1

```text
[1,1,2,2]
```

<!-- jq-example:sections/3/entries/9/examples/2:end -->

<!-- jq-example:sections/3/entries/9/examples/3:start -->

#### Example 4

Command

```sh
jq 'map_values(. // empty)'
```

Input

```text
{"a": null, "b": true, "c": false}
```

Output 1

```text
{"b":true}
```

<!-- jq-example:sections/3/entries/9/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/10/title">

<h3 id="pick"><code>pick(pathexps)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/10/body">

<p>Emit the projection of the input object or array defined by the
specified sequence of path expressions, such that if <code>p</code> is any
one of these specifications, then <code>(. | p)</code> will evaluate to the
same value as <code>(. | pick(pathexps) | p)</code>. For arrays, negative
indices and <code>.[m:n]</code> specifications should not be used.</p>

</div>

<!-- jq-example:sections/3/entries/10/examples/0:start -->

#### Example 1

Command

```sh
jq 'pick(.a, .b.c, .x)'
```

Input

```text
{"a": 1, "b": {"c": 2, "d": 3}, "e": 4}
```

Output 1

```text
{"a":1,"b":{"c":2},"x":null}
```

<!-- jq-example:sections/3/entries/10/examples/0:end -->

<!-- jq-example:sections/3/entries/10/examples/1:start -->

#### Example 2

Command

```sh
jq 'pick(.[2], .[0], .[0])'
```

Input

```text
[1,2,3,4]
```

Output 1

```text
[1,null,3]
```

<!-- jq-example:sections/3/entries/10/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/11/title">

<h3 id="path"><code>path(path_expression)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/11/body">

<p>Outputs array representations of the given path expression
in <code>.</code>.  The outputs are arrays of strings (object keys)
and/or numbers (array indices).</p>




<p>Path expressions are jq expressions like <code>.a</code>, but also <code>.[]</code>.
There are two types of path expressions: ones that can match
exactly, and ones that cannot.  For example, <code>.a.b.c</code> is an
exact match path expression, while <code>.a[].b</code> is not.</p>




<p><code>path(exact_path_expression)</code> will produce the array
representation of the path expression even if it does not
exist in <code>.</code>, if <code>.</code> is <code>null</code> or an array or an object.</p>




<p><code>path(pattern)</code> will produce array representations of the
paths matching <code>pattern</code> if the paths exist in <code>.</code>.</p>




<p>Note that the path expressions are not different from normal
expressions.  The expression
<code>path(..|select(type=="boolean"))</code> outputs all the paths to
boolean values in <code>.</code>, and only those paths.</p>

</div>

<!-- jq-example:sections/3/entries/11/examples/0:start -->

#### Example 1

Command

```sh
jq 'path(.a[0].b)'
```

Input

```text
null
```

Output 1

```text
["a",0,"b"]
```

<!-- jq-example:sections/3/entries/11/examples/0:end -->

<!-- jq-example:sections/3/entries/11/examples/1:start -->

#### Example 2

Command

```sh
jq '[path(..)]'
```

Input

```text
{"a":[{"b":1}]}
```

Output 1

```text
[[],["a"],["a",0],["a",0,"b"]]
```

<!-- jq-example:sections/3/entries/11/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/12/title">

<h3 id="del"><code>del(path_expression)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/12/body">

<p>The builtin function <code>del</code> removes a key and its corresponding
value from an object.</p>

</div>

<!-- jq-example:sections/3/entries/12/examples/0:start -->

#### Example 1

Command

```sh
jq 'del(.foo)'
```

Input

```text
{"foo": 42, "bar": 9001, "baz": 42}
```

Output 1

```text
{"bar": 9001, "baz": 42}
```

<!-- jq-example:sections/3/entries/12/examples/0:end -->

<!-- jq-example:sections/3/entries/12/examples/1:start -->

#### Example 2

Command

```sh
jq 'del(.[1, 2])'
```

Input

```text
["foo", "bar", "baz"]
```

Output 1

```text
["foo"]
```

<!-- jq-example:sections/3/entries/12/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/13/title">

<h3 id="getpath"><code>getpath(PATHS)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/13/body">

<p>The builtin function <code>getpath</code> outputs the values in <code>.</code> found
at each path in <code>PATHS</code>.</p>

</div>

<!-- jq-example:sections/3/entries/13/examples/0:start -->

#### Example 1

Command

```sh
jq 'getpath(["a","b"])'
```

Input

```text
null
```

Output 1

```text
null
```

<!-- jq-example:sections/3/entries/13/examples/0:end -->

<!-- jq-example:sections/3/entries/13/examples/1:start -->

#### Example 2

Command

```sh
jq '[getpath(["a","b"], ["a","c"])]'
```

Input

```text
{"a":{"b":0, "c":1}}
```

Output 1

```text
[0, 1]
```

<!-- jq-example:sections/3/entries/13/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/14/title">

<h3 id="setpath"><code>setpath(PATHS; VALUE)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/14/body">

<p>The builtin function <code>setpath</code> sets the <code>PATHS</code> in <code>.</code> to <code>VALUE</code>.</p>

</div>

<!-- jq-example:sections/3/entries/14/examples/0:start -->

#### Example 1

Command

```sh
jq 'setpath(["a","b"]; 1)'
```

Input

```text
null
```

Output 1

```text
{"a": {"b": 1}}
```

<!-- jq-example:sections/3/entries/14/examples/0:end -->

<!-- jq-example:sections/3/entries/14/examples/1:start -->

#### Example 2

Command

```sh
jq 'setpath(["a","b"]; 1)'
```

Input

```text
{"a":{"b":0}}
```

Output 1

```text
{"a": {"b": 1}}
```

<!-- jq-example:sections/3/entries/14/examples/1:end -->

<!-- jq-example:sections/3/entries/14/examples/2:start -->

#### Example 3

Command

```sh
jq 'setpath([0,"a"]; 1)'
```

Input

```text
null
```

Output 1

```text
[{"a":1}]
```

<!-- jq-example:sections/3/entries/14/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/15/title">

<h3 id="delpaths"><code>delpaths(PATHS)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/15/body">

<p>The builtin function <code>delpaths</code> deletes the <code>PATHS</code> in <code>.</code>.
<code>PATHS</code> must be an array of paths, where each path is an array
of strings and numbers.</p>

</div>

<!-- jq-example:sections/3/entries/15/examples/0:start -->

#### Example 1

Command

```sh
jq 'delpaths([["a","b"]])'
```

Input

```text
{"a":{"b":1},"x":{"y":2}}
```

Output 1

```text
{"a":{},"x":{"y":2}}
```

<!-- jq-example:sections/3/entries/15/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/16/title">

<h3 id="to_entries-from_entries-with_entries"><code>to_entries</code>, <code>from_entries</code>, <code>with_entries(f)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/16/body">

<p>These functions convert between an object and an array of
key-value pairs. If <code>to_entries</code> is passed an object, then
for each <code>k: v</code> entry in the input, the output array
includes <code>{"key": k, "value": v}</code>.</p>




<p><code>from_entries</code> does the opposite conversion, and <code>with_entries(f)</code>
is a shorthand for <code>to_entries | map(f) | from_entries</code>, useful for
doing some operation to all keys and values of an object.
<code>from_entries</code> accepts <code>"key"</code>, <code>"Key"</code>, <code>"name"</code>, <code>"Name"</code>,
<code>"value"</code>, and <code>"Value"</code> as keys.</p>

</div>

<!-- jq-example:sections/3/entries/16/examples/0:start -->

#### Example 1

Command

```sh
jq 'to_entries'
```

Input

```text
{"a": 1, "b": 2}
```

Output 1

```text
[{"key":"a", "value":1}, {"key":"b", "value":2}]
```

<!-- jq-example:sections/3/entries/16/examples/0:end -->

<!-- jq-example:sections/3/entries/16/examples/1:start -->

#### Example 2

Command

```sh
jq 'from_entries'
```

Input

```text
[{"key":"a", "value":1}, {"key":"b", "value":2}]
```

Output 1

```text
{"a": 1, "b": 2}
```

<!-- jq-example:sections/3/entries/16/examples/1:end -->

<!-- jq-example:sections/3/entries/16/examples/2:start -->

#### Example 3

Command

```sh
jq 'with_entries(.key |= "KEY_" + .)'
```

Input

```text
{"a": 1, "b": 2}
```

Output 1

```text
{"KEY_a": 1, "KEY_b": 2}
```

<!-- jq-example:sections/3/entries/16/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/17/title">

<h3 id="select"><code>select(boolean_expression)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/17/body">

<p>The function <code>select(f)</code> produces its input unchanged if
<code>f</code> returns true for that input, and produces no output
otherwise.</p>




<p>It's useful for filtering lists: <code>[1,2,3] | map(select(. &gt;= 2))</code>
will give you <code>[2,3]</code>.</p>

</div>

<!-- jq-example:sections/3/entries/17/examples/0:start -->

#### Example 1

Command

```sh
jq 'map(select(. >= 2))'
```

Input

```text
[1,5,3,0,7]
```

Output 1

```text
[5,3,7]
```

<!-- jq-example:sections/3/entries/17/examples/0:end -->

<!-- jq-example:sections/3/entries/17/examples/1:start -->

#### Example 2

Command

```sh
jq '.[] | select(.id == "second")'
```

Input

```text
[{"id": "first", "val": 1}, {"id": "second", "val": 2}]
```

Output 1

```text
{"id": "second", "val": 2}
```

<!-- jq-example:sections/3/entries/17/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/18/title">

<h3 id="arrays-objects-iterables-booleans-numbers-normals-finites-strings-nulls-values-scalars"><code>arrays</code>, <code>objects</code>, <code>iterables</code>, <code>booleans</code>, <code>numbers</code>, <code>normals</code>, <code>finites</code>, <code>strings</code>, <code>nulls</code>, <code>values</code>, <code>scalars</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/18/body">

<p>These built-ins select only inputs that are arrays, objects,
iterables (arrays or objects), booleans, numbers, normal
numbers, finite numbers, strings, null, non-null values, and
non-iterables, respectively.</p>

</div>

<!-- jq-example:sections/3/entries/18/examples/0:start -->

#### Example 1

Command

```sh
jq '.[]|numbers'
```

Input

```text
[[],{},1,"foo",null,true,false]
```

Output 1

```text
1
```

<!-- jq-example:sections/3/entries/18/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/19/title">

<h3 id="empty"><code>empty</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/19/body">

<p><code>empty</code> returns no results. None at all. Not even <code>null</code>.</p>




<p>It's useful on occasion. You'll know if you need it :)</p>

</div>

<!-- jq-example:sections/3/entries/19/examples/0:start -->

#### Example 1

Command

```sh
jq '1, empty, 2'
```

Input

```text
null
```

Output 1

```text
1
```

Output 2

```text
2
```

<!-- jq-example:sections/3/entries/19/examples/0:end -->

<!-- jq-example:sections/3/entries/19/examples/1:start -->

#### Example 2

Command

```sh
jq '[1,2,empty,3]'
```

Input

```text
null
```

Output 1

```text
[1,2,3]
```

<!-- jq-example:sections/3/entries/19/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/20/title">

<h3 id="error"><code>error</code>, <code>error(message)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/20/body">

<p>Produces an error with the input value, or with the message
given as the argument. Errors can be caught with try/catch;
see below.</p>

</div>

<!-- jq-example:sections/3/entries/20/examples/0:start -->

#### Example 1

Command

```sh
jq 'try error catch .'
```

Input

```text
"error message"
```

Output 1

```text
"error message"
```

<!-- jq-example:sections/3/entries/20/examples/0:end -->

<!-- jq-example:sections/3/entries/20/examples/1:start -->

#### Example 2

Command

```sh
jq 'try error("invalid value: \(.)") catch .'
```

Input

```text
42
```

Output 1

```text
"invalid value: 42"
```

<!-- jq-example:sections/3/entries/20/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/21/title">

<h3 id="halt"><code>halt</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/21/body">

<p>Stops the jq program with no further outputs.  jq will exit
with exit status <code>0</code>.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/22/title">

<h3 id="halt_error"><code>halt_error</code>, <code>halt_error(exit_code)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/22/body">

<p>Stops the jq program with no further outputs.  The input will
be printed on <code>stderr</code> as raw output (i.e., strings will not
have double quotes) with no decoration, not even a newline.</p>




<p>The given <code>exit_code</code> (defaulting to <code>5</code>) will be jq's exit
status.</p>




<p>For example, <code>"Error: something went wrong\n"|halt_error(1)</code>.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/23/title">

<h3 id="$__loc__"><code>$__loc__</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/23/body">

<p>Produces an object with a "file" key and a "line" key, with
the filename and line number where <code>$__loc__</code> occurs, as
values.</p>

</div>

<!-- jq-example:sections/3/entries/23/examples/0:start -->

#### Example 1

Command

```sh
jq 'try error("\($__loc__)") catch .'
```

Input

```text
null
```

Output 1

```text
"{\"file\":\"<top-level>\",\"line\":1}"
```

<!-- jq-example:sections/3/entries/23/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/24/title">

<h3 id="paths"><code>paths</code>, <code>paths(node_filter)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/24/body">

<p><code>paths</code> outputs the paths to all the elements in its input
(except it does not output the empty list, representing .
itself).</p>




<p><code>paths(f)</code> outputs the paths to any values for which <code>f</code> is <code>true</code>.
That is, <code>paths(type == "number")</code> outputs the paths to all numeric
values.</p>

</div>

<!-- jq-example:sections/3/entries/24/examples/0:start -->

#### Example 1

Command

```sh
jq '[paths]'
```

Input

```text
[1,[[],{"a":2}]]
```

Output 1

```text
[[0],[1],[1,0],[1,1],[1,1,"a"]]
```

<!-- jq-example:sections/3/entries/24/examples/0:end -->

<!-- jq-example:sections/3/entries/24/examples/1:start -->

#### Example 2

Command

```sh
jq '[paths(type == "number")]'
```

Input

```text
[1,[[],{"a":2}]]
```

Output 1

```text
[[0],[1,1,"a"]]
```

<!-- jq-example:sections/3/entries/24/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/25/title">

<h3 id="add"><code>add</code>, <code>add(generator)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/25/body">

<p>The filter <code>add</code> takes as input an array, and produces as
output the elements of the array added together. This might
mean summed, concatenated or merged depending on the types
of the elements of the input array - the rules are the same
as those for the <code>+</code> operator (described above).</p>




<p>If the input is an empty array, <code>add</code> returns <code>null</code>.</p>




<p><code>add(generator)</code> operates on the given generator rather than
the input.</p>

</div>

<!-- jq-example:sections/3/entries/25/examples/0:start -->

#### Example 1

Command

```sh
jq 'add'
```

Input

```text
["a","b","c"]
```

Output 1

```text
"abc"
```

<!-- jq-example:sections/3/entries/25/examples/0:end -->

<!-- jq-example:sections/3/entries/25/examples/1:start -->

#### Example 2

Command

```sh
jq 'add'
```

Input

```text
[1, 2, 3]
```

Output 1

```text
6
```

<!-- jq-example:sections/3/entries/25/examples/1:end -->

<!-- jq-example:sections/3/entries/25/examples/2:start -->

#### Example 3

Command

```sh
jq 'add'
```

Input

```text
[]
```

Output 1

```text
null
```

<!-- jq-example:sections/3/entries/25/examples/2:end -->

<!-- jq-example:sections/3/entries/25/examples/3:start -->

#### Example 4

Command

```sh
jq 'add(.[].a)'
```

Input

```text
[{"a":3}, {"a":5}, {"b":6}]
```

Output 1

```text
8
```

<!-- jq-example:sections/3/entries/25/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/26/title">

<h3 id="any"><code>any</code>, <code>any(condition)</code>, <code>any(generator; condition)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/26/body">

<p>The filter <code>any</code> takes as input an array of boolean values,
and produces <code>true</code> as output if any of the elements of
the array are <code>true</code>.</p>




<p>If the input is an empty array, <code>any</code> returns <code>false</code>.</p>




<p>The <code>any(condition)</code> form applies the given condition to the
elements of the input array.</p>




<p>The <code>any(generator; condition)</code> form applies the given
condition to all the outputs of the given generator.</p>

</div>

<!-- jq-example:sections/3/entries/26/examples/0:start -->

#### Example 1

Command

```sh
jq 'any'
```

Input

```text
[true, false]
```

Output 1

```text
true
```

<!-- jq-example:sections/3/entries/26/examples/0:end -->

<!-- jq-example:sections/3/entries/26/examples/1:start -->

#### Example 2

Command

```sh
jq 'any'
```

Input

```text
[false, false]
```

Output 1

```text
false
```

<!-- jq-example:sections/3/entries/26/examples/1:end -->

<!-- jq-example:sections/3/entries/26/examples/2:start -->

#### Example 3

Command

```sh
jq 'any'
```

Input

```text
[]
```

Output 1

```text
false
```

<!-- jq-example:sections/3/entries/26/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/27/title">

<h3 id="all"><code>all</code>, <code>all(condition)</code>, <code>all(generator; condition)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/27/body">

<p>The filter <code>all</code> takes as input an array of boolean values,
and produces <code>true</code> as output if all of the elements of
the array are <code>true</code>.</p>




<p>The <code>all(condition)</code> form applies the given condition to the
elements of the input array.</p>




<p>The <code>all(generator; condition)</code> form applies the given
condition to all the outputs of the given generator.</p>




<p>If the input is an empty array, <code>all</code> returns <code>true</code>.</p>

</div>

<!-- jq-example:sections/3/entries/27/examples/0:start -->

#### Example 1

Command

```sh
jq 'all'
```

Input

```text
[true, false]
```

Output 1

```text
false
```

<!-- jq-example:sections/3/entries/27/examples/0:end -->

<!-- jq-example:sections/3/entries/27/examples/1:start -->

#### Example 2

Command

```sh
jq 'all'
```

Input

```text
[true, true]
```

Output 1

```text
true
```

<!-- jq-example:sections/3/entries/27/examples/1:end -->

<!-- jq-example:sections/3/entries/27/examples/2:start -->

#### Example 3

Command

```sh
jq 'all'
```

Input

```text
[]
```

Output 1

```text
true
```

<!-- jq-example:sections/3/entries/27/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/28/title">

<h3 id="flatten"><code>flatten</code>, <code>flatten(depth)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/28/body">

<p>The filter <code>flatten</code> takes as input an array of nested arrays,
and produces a flat array in which all arrays inside the original
array have been recursively replaced by their values. You can pass
an argument to it to specify how many levels of nesting to flatten.</p>




<p><code>flatten(2)</code> is like <code>flatten</code>, but going only up to two
levels deep.</p>

</div>

<!-- jq-example:sections/3/entries/28/examples/0:start -->

#### Example 1

Command

```sh
jq 'flatten'
```

Input

```text
[1, [2], [[3]]]
```

Output 1

```text
[1, 2, 3]
```

<!-- jq-example:sections/3/entries/28/examples/0:end -->

<!-- jq-example:sections/3/entries/28/examples/1:start -->

#### Example 2

Command

```sh
jq 'flatten(1)'
```

Input

```text
[1, [2], [[3]]]
```

Output 1

```text
[1, 2, [3]]
```

<!-- jq-example:sections/3/entries/28/examples/1:end -->

<!-- jq-example:sections/3/entries/28/examples/2:start -->

#### Example 3

Command

```sh
jq 'flatten'
```

Input

```text
[[]]
```

Output 1

```text
[]
```

<!-- jq-example:sections/3/entries/28/examples/2:end -->

<!-- jq-example:sections/3/entries/28/examples/3:start -->

#### Example 4

Command

```sh
jq 'flatten'
```

Input

```text
[{"foo": "bar"}, [{"foo": "baz"}]]
```

Output 1

```text
[{"foo": "bar"}, {"foo": "baz"}]
```

<!-- jq-example:sections/3/entries/28/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/29/title">

<h3 id="range"><code>range(upto)</code>, <code>range(from; upto)</code>, <code>range(from; upto; by)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/29/body">

<p>The <code>range</code> function produces a range of numbers. <code>range(4; 10)</code>
produces 6 numbers, from 4 (inclusive) to 10 (exclusive). The numbers
are produced as separate outputs. Use <code>[range(4; 10)]</code> to get a range as
an array.</p>




<p>The one argument form generates numbers from 0 to the given
number, with an increment of 1.</p>




<p>The two argument form generates numbers from <code>from</code> to <code>upto</code>
with an increment of 1.</p>




<p>The three argument form generates numbers <code>from</code> to <code>upto</code>
with an increment of <code>by</code>.</p>

</div>

<!-- jq-example:sections/3/entries/29/examples/0:start -->

#### Example 1

Command

```sh
jq 'range(2; 4)'
```

Input

```text
null
```

Output 1

```text
2
```

Output 2

```text
3
```

<!-- jq-example:sections/3/entries/29/examples/0:end -->

<!-- jq-example:sections/3/entries/29/examples/1:start -->

#### Example 2

Command

```sh
jq '[range(2; 4)]'
```

Input

```text
null
```

Output 1

```text
[2,3]
```

<!-- jq-example:sections/3/entries/29/examples/1:end -->

<!-- jq-example:sections/3/entries/29/examples/2:start -->

#### Example 3

Command

```sh
jq '[range(4)]'
```

Input

```text
null
```

Output 1

```text
[0,1,2,3]
```

<!-- jq-example:sections/3/entries/29/examples/2:end -->

<!-- jq-example:sections/3/entries/29/examples/3:start -->

#### Example 4

Command

```sh
jq '[range(0; 10; 3)]'
```

Input

```text
null
```

Output 1

```text
[0,3,6,9]
```

<!-- jq-example:sections/3/entries/29/examples/3:end -->

<!-- jq-example:sections/3/entries/29/examples/4:start -->

#### Example 5

Command

```sh
jq '[range(0; 10; -1)]'
```

Input

```text
null
```

Output 1

```text
[]
```

<!-- jq-example:sections/3/entries/29/examples/4:end -->

<!-- jq-example:sections/3/entries/29/examples/5:start -->

#### Example 6

Command

```sh
jq '[range(0; -5; -1)]'
```

Input

```text
null
```

Output 1

```text
[0,-1,-2,-3,-4]
```

<!-- jq-example:sections/3/entries/29/examples/5:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/30/title">

<h3 id="floor"><code>floor</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/30/body">

<p>The <code>floor</code> function returns the floor of its numeric input.</p>

</div>

<!-- jq-example:sections/3/entries/30/examples/0:start -->

#### Example 1

Command

```sh
jq 'floor'
```

Input

```text
3.14159
```

Output 1

```text
3
```

<!-- jq-example:sections/3/entries/30/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/31/title">

<h3 id="sqrt"><code>sqrt</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/31/body">

<p>The <code>sqrt</code> function returns the square root of its numeric input.</p>

</div>

<!-- jq-example:sections/3/entries/31/examples/0:start -->

#### Example 1

Command

```sh
jq 'sqrt'
```

Input

```text
9
```

Output 1

```text
3
```

<!-- jq-example:sections/3/entries/31/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/32/title">

<h3 id="tonumber"><code>tonumber</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/32/body">

<p>The <code>tonumber</code> function parses its input as a number. It
will convert correctly-formatted strings to their numeric
equivalent, leave numbers alone, and give an error on all other input.</p>

</div>

<!-- jq-example:sections/3/entries/32/examples/0:start -->

#### Example 1

Command

```sh
jq '.[] | tonumber'
```

Input

```text
[1, "1"]
```

Output 1

```text
1
```

Output 2

```text
1
```

<!-- jq-example:sections/3/entries/32/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/33/title">

<h3 id="toboolean"><code>toboolean</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/33/body">

<p>The <code>toboolean</code> function parses its input as a boolean. It
will convert correctly-formatted strings to their boolean
equivalent, leave booleans alone, and give an error on all other input.</p>

</div>

<!-- jq-example:sections/3/entries/33/examples/0:start -->

#### Example 1

Command

```sh
jq '.[] | toboolean'
```

Input

```text
["true", "false", true, false]
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

<!-- jq-example:sections/3/entries/33/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/34/title">

<h3 id="tostring"><code>tostring</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/34/body">

<p>The <code>tostring</code> function prints its input as a
string. Strings are left unchanged, and all other values are
JSON-encoded.</p>

</div>

<!-- jq-example:sections/3/entries/34/examples/0:start -->

#### Example 1

Command

```sh
jq '.[] | tostring'
```

Input

```text
[1, "1", [1]]
```

Output 1

```text
"1"
```

Output 2

```text
"1"
```

Output 3

```text
"[1]"
```

<!-- jq-example:sections/3/entries/34/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/35/title">

<h3 id="type"><code>type</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/35/body">

<p>The <code>type</code> function returns the type of its argument as a
string, which is one of null, boolean, number, string, array
or object.</p>

</div>

<!-- jq-example:sections/3/entries/35/examples/0:start -->

#### Example 1

Command

```sh
jq 'map(type)'
```

Input

```text
[0, false, [], {}, null, "hello"]
```

Output 1

```text
["number", "boolean", "array", "object", "null", "string"]
```

<!-- jq-example:sections/3/entries/35/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/36/title">

<h3 id="infinite-nan-isinfinite-isnan-isfinite-isnormal"><code>infinite</code>, <code>nan</code>, <code>isinfinite</code>, <code>isnan</code>, <code>isfinite</code>, <code>isnormal</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/36/body">

<p>Some arithmetic operations can yield infinities and "not a
number" (NaN) values.  The <code>isinfinite</code> builtin returns <code>true</code>
if its input is infinite.  The <code>isnan</code> builtin returns <code>true</code>
if its input is a NaN.  The <code>infinite</code> builtin returns a
positive infinite value.  The <code>nan</code> builtin returns a NaN.
The <code>isnormal</code> builtin returns true if its input is a normal
number.</p>




<p>Note that division by zero raises an error.</p>




<p>Currently most arithmetic operations operating on infinities,
NaNs, and sub-normals do not raise errors.</p>

</div>

<!-- jq-example:sections/3/entries/36/examples/0:start -->

#### Example 1

Command

```sh
jq '.[] | (infinite * .) < 0'
```

Input

```text
[-1, 1]
```

Output 1

```text
true
```

Output 2

```text
false
```

<!-- jq-example:sections/3/entries/36/examples/0:end -->

<!-- jq-example:sections/3/entries/36/examples/1:start -->

#### Example 2

Command

```sh
jq 'infinite, nan | type'
```

Input

```text
null
```

Output 1

```text
"number"
```

Output 2

```text
"number"
```

<!-- jq-example:sections/3/entries/36/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/37/title">

<h3 id="sort-sort_by"><code>sort</code>, <code>sort_by(path_expression)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/37/body">

<p>The <code>sort</code> functions sorts its input, which must be an
array. Values are sorted in the following order:</p>




<ul>
<li><code>null</code></li>
<li><code>false</code></li>
<li><code>true</code></li>
<li>numbers</li>
<li>strings, in alphabetical order (by unicode codepoint value)</li>
<li>arrays, in lexical order</li>
<li>objects</li>
</ul>




<p>The ordering for objects is a little complex: first they're
compared by comparing their sets of keys (as arrays in
sorted order), and if their keys are equal then the values
are compared key by key.</p>




<p><code>sort_by</code> may be used to sort by a particular field of an
object, or by applying any jq filter. <code>sort_by(f)</code> compares
two elements by comparing the result of <code>f</code> on each element.
When <code>f</code> produces multiple values, it firstly compares the
first values, and the second values if the first values are
equal, and so on.</p>

</div>

<!-- jq-example:sections/3/entries/37/examples/0:start -->

#### Example 1

Command

```sh
jq 'sort'
```

Input

```text
[8,3,null,6]
```

Output 1

```text
[null,3,6,8]
```

<!-- jq-example:sections/3/entries/37/examples/0:end -->

<!-- jq-example:sections/3/entries/37/examples/1:start -->

#### Example 2

Command

```sh
jq 'sort_by(.foo)'
```

Input

```text
[{"foo":4, "bar":10}, {"foo":3, "bar":10}, {"foo":2, "bar":1}]
```

Output 1

```text
[{"foo":2, "bar":1}, {"foo":3, "bar":10}, {"foo":4, "bar":10}]
```

<!-- jq-example:sections/3/entries/37/examples/1:end -->

<!-- jq-example:sections/3/entries/37/examples/2:start -->

#### Example 3

Command

```sh
jq 'sort_by(.foo, .bar)'
```

Input

```text
[{"foo":4, "bar":10}, {"foo":3, "bar":20}, {"foo":2, "bar":1}, {"foo":3, "bar":10}]
```

Output 1

```text
[{"foo":2, "bar":1}, {"foo":3, "bar":10}, {"foo":3, "bar":20}, {"foo":4, "bar":10}]
```

<!-- jq-example:sections/3/entries/37/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/38/title">

<h3 id="group_by"><code>group_by(path_expression)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/38/body">

<p><code>group_by(.foo)</code> takes as input an array, groups the
elements having the same <code>.foo</code> field into separate arrays,
and produces all of these arrays as elements of a larger
array, sorted by the value of the <code>.foo</code> field.</p>




<p>Any jq expression, not just a field access, may be used in
place of <code>.foo</code>. The sorting order is the same as described
in the <code>sort</code> function above.</p>

</div>

<!-- jq-example:sections/3/entries/38/examples/0:start -->

#### Example 1

Command

```sh
jq 'group_by(.foo)'
```

Input

```text
[{"foo":1, "bar":10}, {"foo":3, "bar":100}, {"foo":1, "bar":1}]
```

Output 1

```text
[[{"foo":1, "bar":10}, {"foo":1, "bar":1}], [{"foo":3, "bar":100}]]
```

<!-- jq-example:sections/3/entries/38/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/39/title">

<h3 id="min-max-min_by-max_by"><code>min</code>, <code>max</code>, <code>min_by(path_exp)</code>, <code>max_by(path_exp)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/39/body">

<p>Find the minimum or maximum element of the input array.</p>




<p>The <code>min_by(path_exp)</code> and <code>max_by(path_exp)</code> functions allow
you to specify a particular field or property to examine, e.g.
<code>min_by(.foo)</code> finds the object with the smallest <code>foo</code> field.</p>

</div>

<!-- jq-example:sections/3/entries/39/examples/0:start -->

#### Example 1

Command

```sh
jq 'min'
```

Input

```text
[5,4,2,7]
```

Output 1

```text
2
```

<!-- jq-example:sections/3/entries/39/examples/0:end -->

<!-- jq-example:sections/3/entries/39/examples/1:start -->

#### Example 2

Command

```sh
jq 'max_by(.foo)'
```

Input

```text
[{"foo":1, "bar":14}, {"foo":2, "bar":3}]
```

Output 1

```text
{"foo":2, "bar":3}
```

<!-- jq-example:sections/3/entries/39/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/40/title">

<h3 id="unique-unique_by"><code>unique</code>, <code>unique_by(path_exp)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/40/body">

<p>The <code>unique</code> function takes as input an array and produces
an array of the same elements, in sorted order, with
duplicates removed.</p>




<p>The <code>unique_by(path_exp)</code> function will keep only one element
for each value obtained by applying the argument. Think of it
as making an array by taking one element out of every group
produced by <code>group</code>.</p>

</div>

<!-- jq-example:sections/3/entries/40/examples/0:start -->

#### Example 1

Command

```sh
jq 'unique'
```

Input

```text
[1,2,5,3,5,3,1,3]
```

Output 1

```text
[1,2,3,5]
```

<!-- jq-example:sections/3/entries/40/examples/0:end -->

<!-- jq-example:sections/3/entries/40/examples/1:start -->

#### Example 2

Command

```sh
jq 'unique_by(.foo)'
```

Input

```text
[{"foo": 1, "bar": 2}, {"foo": 1, "bar": 3}, {"foo": 4, "bar": 5}]
```

Output 1

```text
[{"foo": 1, "bar": 2}, {"foo": 4, "bar": 5}]
```

<!-- jq-example:sections/3/entries/40/examples/1:end -->

<!-- jq-example:sections/3/entries/40/examples/2:start -->

#### Example 3

Command

```sh
jq 'unique_by(length)'
```

Input

```text
["chunky", "bacon", "kitten", "cicada", "asparagus"]
```

Output 1

```text
["bacon", "chunky", "asparagus"]
```

<!-- jq-example:sections/3/entries/40/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/41/title">

<h3 id="reverse"><code>reverse</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/41/body">

<p>This function reverses an array.</p>

</div>

<!-- jq-example:sections/3/entries/41/examples/0:start -->

#### Example 1

Command

```sh
jq 'reverse'
```

Input

```text
[1,2,3,4]
```

Output 1

```text
[4,3,2,1]
```

<!-- jq-example:sections/3/entries/41/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/42/title">

<h3 id="contains"><code>contains(element)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/42/body">

<p>The filter <code>contains(b)</code> will produce true if b is
completely contained within the input. A string B is
contained in a string A if B is a substring of A. An array B
is contained in an array A if all elements in B are
contained in any element in A. An object B is contained in
object A if all of the values in B are contained in the
value in A with the same key. All other types are assumed to
be contained in each other if they are equal.</p>

</div>

<!-- jq-example:sections/3/entries/42/examples/0:start -->

#### Example 1

Command

```sh
jq 'contains("bar")'
```

Input

```text
"foobar"
```

Output 1

```text
true
```

<!-- jq-example:sections/3/entries/42/examples/0:end -->

<!-- jq-example:sections/3/entries/42/examples/1:start -->

#### Example 2

Command

```sh
jq 'contains(["baz", "bar"])'
```

Input

```text
["foobar", "foobaz", "blarp"]
```

Output 1

```text
true
```

<!-- jq-example:sections/3/entries/42/examples/1:end -->

<!-- jq-example:sections/3/entries/42/examples/2:start -->

#### Example 3

Command

```sh
jq 'contains(["bazzzzz", "bar"])'
```

Input

```text
["foobar", "foobaz", "blarp"]
```

Output 1

```text
false
```

<!-- jq-example:sections/3/entries/42/examples/2:end -->

<!-- jq-example:sections/3/entries/42/examples/3:start -->

#### Example 4

Command

```sh
jq 'contains({foo: 12, bar: [{barp: 12}]})'
```

Input

```text
{"foo": 12, "bar":[1,2,{"barp":12, "blip":13}]}
```

Output 1

```text
true
```

<!-- jq-example:sections/3/entries/42/examples/3:end -->

<!-- jq-example:sections/3/entries/42/examples/4:start -->

#### Example 5

Command

```sh
jq 'contains({foo: 12, bar: [{barp: 15}]})'
```

Input

```text
{"foo": 12, "bar":[1,2,{"barp":12, "blip":13}]}
```

Output 1

```text
false
```

<!-- jq-example:sections/3/entries/42/examples/4:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/43/title">

<h3 id="indices"><code>indices(s)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/43/body">

<p>Outputs an array containing the indices in <code>.</code> where <code>s</code>
occurs.  The input may be an array, in which case if <code>s</code> is an
array then the indices output will be those where all elements
in <code>.</code> match those of <code>s</code>.</p>

</div>

<!-- jq-example:sections/3/entries/43/examples/0:start -->

#### Example 1

Command

```sh
jq 'indices(", ")'
```

Input

```text
"a,b, cd, efg, hijk"
```

Output 1

```text
[3,7,12]
```

<!-- jq-example:sections/3/entries/43/examples/0:end -->

<!-- jq-example:sections/3/entries/43/examples/1:start -->

#### Example 2

Command

```sh
jq 'indices(1)'
```

Input

```text
[0,1,2,1,3,1,4]
```

Output 1

```text
[1,3,5]
```

<!-- jq-example:sections/3/entries/43/examples/1:end -->

<!-- jq-example:sections/3/entries/43/examples/2:start -->

#### Example 3

Command

```sh
jq 'indices([1,2])'
```

Input

```text
[0,1,2,3,1,4,2,5,1,2,6,7]
```

Output 1

```text
[1,8]
```

<!-- jq-example:sections/3/entries/43/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/44/title">

<h3 id="index-rindex"><code>index(s)</code>, <code>rindex(s)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/44/body">

<p>Outputs the index of the first (<code>index</code>) or last (<code>rindex</code>)
occurrence of <code>s</code> in the input.</p>

</div>

<!-- jq-example:sections/3/entries/44/examples/0:start -->

#### Example 1

Command

```sh
jq 'index(", ")'
```

Input

```text
"a,b, cd, efg, hijk"
```

Output 1

```text
3
```

<!-- jq-example:sections/3/entries/44/examples/0:end -->

<!-- jq-example:sections/3/entries/44/examples/1:start -->

#### Example 2

Command

```sh
jq 'index(1)'
```

Input

```text
[0,1,2,1,3,1,4]
```

Output 1

```text
1
```

<!-- jq-example:sections/3/entries/44/examples/1:end -->

<!-- jq-example:sections/3/entries/44/examples/2:start -->

#### Example 3

Command

```sh
jq 'index([1,2])'
```

Input

```text
[0,1,2,3,1,4,2,5,1,2,6,7]
```

Output 1

```text
1
```

<!-- jq-example:sections/3/entries/44/examples/2:end -->

<!-- jq-example:sections/3/entries/44/examples/3:start -->

#### Example 4

Command

```sh
jq 'rindex(", ")'
```

Input

```text
"a,b, cd, efg, hijk"
```

Output 1

```text
12
```

<!-- jq-example:sections/3/entries/44/examples/3:end -->

<!-- jq-example:sections/3/entries/44/examples/4:start -->

#### Example 5

Command

```sh
jq 'rindex(1)'
```

Input

```text
[0,1,2,1,3,1,4]
```

Output 1

```text
5
```

<!-- jq-example:sections/3/entries/44/examples/4:end -->

<!-- jq-example:sections/3/entries/44/examples/5:start -->

#### Example 6

Command

```sh
jq 'rindex([1,2])'
```

Input

```text
[0,1,2,3,1,4,2,5,1,2,6,7]
```

Output 1

```text
8
```

<!-- jq-example:sections/3/entries/44/examples/5:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/45/title">

<h3 id="inside"><code>inside</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/45/body">

<p>The filter <code>inside(b)</code> will produce true if the input is
completely contained within b. It is, essentially, an
inversed version of <code>contains</code>.</p>

</div>

<!-- jq-example:sections/3/entries/45/examples/0:start -->

#### Example 1

Command

```sh
jq 'inside("foobar")'
```

Input

```text
"bar"
```

Output 1

```text
true
```

<!-- jq-example:sections/3/entries/45/examples/0:end -->

<!-- jq-example:sections/3/entries/45/examples/1:start -->

#### Example 2

Command

```sh
jq 'inside(["foobar", "foobaz", "blarp"])'
```

Input

```text
["baz", "bar"]
```

Output 1

```text
true
```

<!-- jq-example:sections/3/entries/45/examples/1:end -->

<!-- jq-example:sections/3/entries/45/examples/2:start -->

#### Example 3

Command

```sh
jq 'inside(["foobar", "foobaz", "blarp"])'
```

Input

```text
["bazzzzz", "bar"]
```

Output 1

```text
false
```

<!-- jq-example:sections/3/entries/45/examples/2:end -->

<!-- jq-example:sections/3/entries/45/examples/3:start -->

#### Example 4

Command

```sh
jq 'inside({"foo": 12, "bar":[1,2,{"barp":12, "blip":13}]})'
```

Input

```text
{"foo": 12, "bar": [{"barp": 12}]}
```

Output 1

```text
true
```

<!-- jq-example:sections/3/entries/45/examples/3:end -->

<!-- jq-example:sections/3/entries/45/examples/4:start -->

#### Example 5

Command

```sh
jq 'inside({"foo": 12, "bar":[1,2,{"barp":12, "blip":13}]})'
```

Input

```text
{"foo": 12, "bar": [{"barp": 15}]}
```

Output 1

```text
false
```

<!-- jq-example:sections/3/entries/45/examples/4:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/46/title">

<h3 id="startswith"><code>startswith(str)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/46/body">

<p>Outputs <code>true</code> if . starts with the given string argument.</p>

</div>

<!-- jq-example:sections/3/entries/46/examples/0:start -->

#### Example 1

Command

```sh
jq '[.[]|startswith("foo")]'
```

Input

```text
["fo", "foo", "barfoo", "foobar", "barfoob"]
```

Output 1

```text
[false, true, false, true, false]
```

<!-- jq-example:sections/3/entries/46/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/47/title">

<h3 id="endswith"><code>endswith(str)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/47/body">

<p>Outputs <code>true</code> if . ends with the given string argument.</p>

</div>

<!-- jq-example:sections/3/entries/47/examples/0:start -->

#### Example 1

Command

```sh
jq '[.[]|endswith("foo")]'
```

Input

```text
["foobar", "barfoo"]
```

Output 1

```text
[false, true]
```

<!-- jq-example:sections/3/entries/47/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/48/title">

<h3 id="combinations"><code>combinations</code>, <code>combinations(n)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/48/body">

<p>Outputs all combinations of the elements of the arrays in the
input array. If given an argument <code>n</code>, it outputs all combinations
of <code>n</code> repetitions of the input array.</p>

</div>

<!-- jq-example:sections/3/entries/48/examples/0:start -->

#### Example 1

Command

```sh
jq 'combinations'
```

Input

```text
[[1,2], [3, 4]]
```

Output 1

```text
[1, 3]
```

Output 2

```text
[1, 4]
```

Output 3

```text
[2, 3]
```

Output 4

```text
[2, 4]
```

<!-- jq-example:sections/3/entries/48/examples/0:end -->

<!-- jq-example:sections/3/entries/48/examples/1:start -->

#### Example 2

Command

```sh
jq 'combinations(2)'
```

Input

```text
[0, 1]
```

Output 1

```text
[0, 0]
```

Output 2

```text
[0, 1]
```

Output 3

```text
[1, 0]
```

Output 4

```text
[1, 1]
```

<!-- jq-example:sections/3/entries/48/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/49/title">

<h3 id="ltrimstr"><code>ltrimstr(str)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/49/body">

<p>Outputs its input with the given prefix string removed, if it
starts with it.</p>

</div>

<!-- jq-example:sections/3/entries/49/examples/0:start -->

#### Example 1

Command

```sh
jq '[.[]|ltrimstr("foo")]'
```

Input

```text
["fo", "foo", "barfoo", "foobar", "afoo"]
```

Output 1

```text
["fo","","barfoo","bar","afoo"]
```

<!-- jq-example:sections/3/entries/49/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/50/title">

<h3 id="rtrimstr"><code>rtrimstr(str)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/50/body">

<p>Outputs its input with the given suffix string removed, if it
ends with it.</p>

</div>

<!-- jq-example:sections/3/entries/50/examples/0:start -->

#### Example 1

Command

```sh
jq '[.[]|rtrimstr("foo")]'
```

Input

```text
["fo", "foo", "barfoo", "foobar", "foob"]
```

Output 1

```text
["fo","","bar","foobar","foob"]
```

<!-- jq-example:sections/3/entries/50/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/51/title">

<h3 id="trimstr"><code>trimstr(str)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/51/body">

<p>Outputs its input with the given string removed at both ends, if it
starts or ends with it.</p>

</div>

<!-- jq-example:sections/3/entries/51/examples/0:start -->

#### Example 1

Command

```sh
jq '[.[]|trimstr("foo")]'
```

Input

```text
["fo", "foo", "barfoo", "foobarfoo", "foob"]
```

Output 1

```text
["fo","","bar","bar","b"]
```

<!-- jq-example:sections/3/entries/51/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/52/title">

<h3 id="trim-ltrim-rtrim"><code>trim</code>, <code>ltrim</code>, <code>rtrim</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/52/body">

<p><code>trim</code> trims both leading and trailing whitespace.</p>




<p><code>ltrim</code> trims only leading (left side) whitespace.</p>




<p><code>rtrim</code> trims only trailing (right side) whitespace.</p>




<p>Whitespace characters are the usual <code>" "</code>, <code>"\n"</code> <code>"\t"</code>, <code>"\r"</code>
and also all characters in the Unicode character database with the
whitespace property. Note that what considers whitespace might
change in the future.</p>

</div>

<!-- jq-example:sections/3/entries/52/examples/0:start -->

#### Example 1

Command

```sh
jq 'trim, ltrim, rtrim'
```

Input

```text
" abc "
```

Output 1

```text
"abc"
```

Output 2

```text
"abc "
```

Output 3

```text
" abc"
```

<!-- jq-example:sections/3/entries/52/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/53/title">

<h3 id="explode"><code>explode</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/53/body">

<p>Converts an input string into an array of the string's
codepoint numbers.</p>

</div>

<!-- jq-example:sections/3/entries/53/examples/0:start -->

#### Example 1

Command

```sh
jq 'explode'
```

Input

```text
"foobar"
```

Output 1

```text
[102,111,111,98,97,114]
```

<!-- jq-example:sections/3/entries/53/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/54/title">

<h3 id="implode"><code>implode</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/54/body">

<p>The inverse of explode.</p>

</div>

<!-- jq-example:sections/3/entries/54/examples/0:start -->

#### Example 1

Command

```sh
jq 'implode'
```

Input

```text
[65, 66, 67]
```

Output 1

```text
"ABC"
```

<!-- jq-example:sections/3/entries/54/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/55/title">

<h3 id="split-1"><code>split(str)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/55/body">

<p>Splits an input string on the separator argument.</p>




<p><code>split</code> can also split on regex matches when called with
two arguments (see the regular expressions section below).</p>

</div>

<!-- jq-example:sections/3/entries/55/examples/0:start -->

#### Example 1

Command

```sh
jq 'split(", ")'
```

Input

```text
"a, b,c,d, e, "
```

Output 1

```text
["a","b,c,d","e",""]
```

<!-- jq-example:sections/3/entries/55/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/56/title">

<h3 id="join"><code>join(str)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/56/body">

<p>Joins the array of elements given as input, using the
argument as separator. It is the inverse of <code>split</code>: that is,
running <code>split("foo") | join("foo")</code> over any input string
returns said input string.</p>




<p>Numbers and booleans in the input are converted to strings.
Null values are treated as empty strings. Arrays and objects
in the input are not supported.</p>

</div>

<!-- jq-example:sections/3/entries/56/examples/0:start -->

#### Example 1

Command

```sh
jq 'join(", ")'
```

Input

```text
["a","b,c,d","e"]
```

Output 1

```text
"a, b,c,d, e"
```

<!-- jq-example:sections/3/entries/56/examples/0:end -->

<!-- jq-example:sections/3/entries/56/examples/1:start -->

#### Example 2

Command

```sh
jq 'join(" ")'
```

Input

```text
["a",1,2.3,true,null,false]
```

Output 1

```text
"a 1 2.3 true  false"
```

<!-- jq-example:sections/3/entries/56/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/57/title">

<h3 id="ascii_downcase-ascii_upcase"><code>ascii_downcase</code>, <code>ascii_upcase</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/57/body">

<p>Emit a copy of the input string with its alphabetic characters (a-z and A-Z)
converted to the specified case.</p>

</div>

<!-- jq-example:sections/3/entries/57/examples/0:start -->

#### Example 1

Command

```sh
jq 'ascii_upcase'
```

Input

```text
"useful but not for é"
```

Output 1

```text
"USEFUL BUT NOT FOR é"
```

<!-- jq-example:sections/3/entries/57/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/58/title">

<h3 id="while"><code>while(cond; update)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/58/body">

<p>The <code>while(cond; update)</code> function allows you to repeatedly
apply an update to <code>.</code> until <code>cond</code> is false.</p>




<p>Note that <code>while(cond; update)</code> is internally defined as a
recursive jq function.  Recursive calls within <code>while</code> will
not consume additional memory if <code>update</code> produces at most one
output for each input.  See advanced topics below.</p>

</div>

<!-- jq-example:sections/3/entries/58/examples/0:start -->

#### Example 1

Command

```sh
jq '[while(.<100; .*2)]'
```

Input

```text
1
```

Output 1

```text
[1,2,4,8,16,32,64]
```

<!-- jq-example:sections/3/entries/58/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/59/title">

<h3 id="repeat"><code>repeat(exp)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/59/body">

<p>The <code>repeat(exp)</code> function allows you to repeatedly
apply expression <code>exp</code> to <code>.</code> until an error is raised.</p>




<p>Note that <code>repeat(exp)</code> is internally defined as a
recursive jq function.  Recursive calls within <code>repeat</code> will
not consume additional memory if <code>exp</code> produces at most one
output for each input.  See advanced topics below.</p>

</div>

<!-- jq-example:sections/3/entries/59/examples/0:start -->

#### Example 1

Command

```sh
jq '[repeat(.*2, error)?]'
```

Input

```text
1
```

Output 1

```text
[2]
```

<!-- jq-example:sections/3/entries/59/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/60/title">

<h3 id="until"><code>until(cond; next)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/60/body">

<p>The <code>until(cond; next)</code> function allows you to repeatedly
apply the expression <code>next</code>, initially to <code>.</code> then to its own
output, until <code>cond</code> is true.  For example, this can be used
to implement a factorial function (see below).</p>




<p>Note that <code>until(cond; next)</code> is internally defined as a
recursive jq function.  Recursive calls within <code>until()</code> will
not consume additional memory if <code>next</code> produces at most one
output for each input.  See advanced topics below.</p>

</div>

<!-- jq-example:sections/3/entries/60/examples/0:start -->

#### Example 1

Command

```sh
jq '[.,1]|until(.[0] < 1; [.[0] - 1, .[1] * .[0]])|.[1]'
```

Input

```text
4
```

Output 1

```text
24
```

<!-- jq-example:sections/3/entries/60/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/61/title">

<h3 id="recurse"><code>recurse(f)</code>, <code>recurse</code>, <code>recurse(f; condition)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/61/body">

<p>The <code>recurse(f)</code> function allows you to search through a
recursive structure, and extract interesting data from all
levels. Suppose your input represents a filesystem:</p>




<pre><code>{"name": "/", "children": [
  {"name": "/bin", "children": [
    {"name": "/bin/ls", "children": []},
    {"name": "/bin/sh", "children": []}]},
  {"name": "/home", "children": [
    {"name": "/home/stephen", "children": [
      {"name": "/home/stephen/jq", "children": []}]}]}]}
</code></pre>




<p>Now suppose you want to extract all of the filenames
present. You need to retrieve <code>.name</code>, <code>.children[].name</code>,
<code>.children[].children[].name</code>, and so on. You can do this
with:</p>




<pre><code>recurse(.children[]) | .name
</code></pre>




<p>When called without an argument, <code>recurse</code> is equivalent to
<code>recurse(.[]?)</code>.</p>




<p><code>recurse(f)</code> is identical to <code>recurse(f; true)</code> and can be
used without concerns about recursion depth.</p>




<p><code>recurse(f; condition)</code> is a generator which begins by
emitting . and then emits in turn .|f, .|f|f, .|f|f|f, ...  so long
as the computed value satisfies the condition. For example,
to generate all the integers, at least in principle, one
could write <code>recurse(.+1; true)</code>.</p>




<p>The recursive calls in <code>recurse</code> will not consume additional
memory whenever <code>f</code> produces at most a single output for each
input.</p>

</div>

<!-- jq-example:sections/3/entries/61/examples/0:start -->

#### Example 1

Command

```sh
jq 'recurse(.foo[])'
```

Input

```text
{"foo":[{"foo": []}, {"foo":[{"foo":[]}]}]}
```

Output 1

```text
{"foo":[{"foo":[]},{"foo":[{"foo":[]}]}]}
```

Output 2

```text
{"foo":[]}
```

Output 3

```text
{"foo":[{"foo":[]}]}
```

Output 4

```text
{"foo":[]}
```

<!-- jq-example:sections/3/entries/61/examples/0:end -->

<!-- jq-example:sections/3/entries/61/examples/1:start -->

#### Example 2

Command

```sh
jq 'recurse'
```

Input

```text
{"a":0,"b":[1]}
```

Output 1

```text
{"a":0,"b":[1]}
```

Output 2

```text
0
```

Output 3

```text
[1]
```

Output 4

```text
1
```

<!-- jq-example:sections/3/entries/61/examples/1:end -->

<!-- jq-example:sections/3/entries/61/examples/2:start -->

#### Example 3

Command

```sh
jq 'recurse(. * .; . < 20)'
```

Input

```text
2
```

Output 1

```text
2
```

Output 2

```text
4
```

Output 3

```text
16
```

<!-- jq-example:sections/3/entries/61/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/62/title">

<h3 id="walk"><code>walk(f)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/62/body">

<p>The <code>walk(f)</code> function applies f recursively to every
component of the input entity.  When an array is
encountered, f is first applied to its elements and then to
the array itself; when an object is encountered, f is first
applied to all the values and then to the object.  In
practice, f will usually test the type of its input, as
illustrated in the following examples.  The first example
highlights the usefulness of processing the elements of an
array of arrays before processing the array itself.  The second
example shows how all the keys of all the objects within the
input can be considered for alteration.</p>

</div>

<!-- jq-example:sections/3/entries/62/examples/0:start -->

#### Example 1

Command

```sh
jq 'walk(if type == "array" then sort else . end)'
```

Input

```text
[[4, 1, 7], [8, 5, 2], [3, 6, 9]]
```

Output 1

```text
[[1,4,7],[2,5,8],[3,6,9]]
```

<!-- jq-example:sections/3/entries/62/examples/0:end -->

<!-- jq-example:sections/3/entries/62/examples/1:start -->

#### Example 2

Command

```sh
jq 'walk( if type == "object" then with_entries( .key |= sub( "^_+"; "") ) else . end )'
```

Input

```text
[ { "_a": { "__b": 2 } } ]
```

Output 1

```text
[{"a":{"b":2}}]
```

<!-- jq-example:sections/3/entries/62/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/63/title">

<h3 id="have_literal_numbers"><code>have_literal_numbers</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/63/body">

<p>This builtin returns true if jq's build configuration
includes support for preservation of input number literals.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/64/title">

<h3 id="have_decnum"><code>have_decnum</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/64/body">

<p>This builtin returns true if jq was built with "decnum",
which is the current literal number preserving numeric
backend implementation for jq.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/65/title">

<h3 id="$jq_build_configuration"><code>$JQ_BUILD_CONFIGURATION</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/65/body">

<p>This builtin binding shows the jq executable's build
configuration.  Its value has no particular format, but
it can be expected to be at least the <code>./configure</code>
command-line arguments, and may be enriched in the
future to include the version strings for the build
tooling used.</p>




<p>Note that this can be overridden in the command-line
with <code>--arg</code> and related options.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/66/title">

<h3 id="$env-env"><code>$ENV</code>, <code>env</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/66/body">

<p><code>$ENV</code> is an object representing the environment variables as
set when the jq program started.</p>




<p><code>env</code> outputs an object representing jq's current environment.</p>




<p>At the moment there is no builtin for setting environment
variables.</p>

</div>

<!-- jq-example:sections/3/entries/66/examples/0:start -->

#### Example 1

Command

```sh
jq '$ENV.PAGER'
```

Input

```text
null
```

Output 1

```text
"less"
```

<!-- jq-example:sections/3/entries/66/examples/0:end -->

<!-- jq-example:sections/3/entries/66/examples/1:start -->

#### Example 2

Command

```sh
jq 'env.PAGER'
```

Input

```text
null
```

Output 1

```text
"less"
```

<!-- jq-example:sections/3/entries/66/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/67/title">

<h3 id="transpose"><code>transpose</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/67/body">

<p>Transpose a possibly jagged matrix (an array of arrays).
Rows are padded with nulls so the result is always rectangular.</p>

</div>

<!-- jq-example:sections/3/entries/67/examples/0:start -->

#### Example 1

Command

```sh
jq 'transpose'
```

Input

```text
[[1], [2,3]]
```

Output 1

```text
[[1,2],[null,3]]
```

<!-- jq-example:sections/3/entries/67/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/68/title">

<h3 id="bsearch"><code>bsearch(x)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/68/body">

<p><code>bsearch(x)</code> conducts a binary search for x in the input
array.  If the input is sorted and contains x, then
<code>bsearch(x)</code> will return its index in the array; otherwise, if
the array is sorted, it will return (-1 - ix) where ix is an
insertion point such that the array would still be sorted
after the insertion of x at ix.  If the array is not sorted,
<code>bsearch(x)</code> will return an integer that is probably of no
interest.</p>

</div>

<!-- jq-example:sections/3/entries/68/examples/0:start -->

#### Example 1

Command

```sh
jq 'bsearch(0)'
```

Input

```text
[0,1]
```

Output 1

```text
0
```

<!-- jq-example:sections/3/entries/68/examples/0:end -->

<!-- jq-example:sections/3/entries/68/examples/1:start -->

#### Example 2

Command

```sh
jq 'bsearch(0)'
```

Input

```text
[1,2,3]
```

Output 1

```text
-1
```

<!-- jq-example:sections/3/entries/68/examples/1:end -->

<!-- jq-example:sections/3/entries/68/examples/2:start -->

#### Example 3

Command

```sh
jq 'bsearch(4) as $ix | if $ix < 0 then .[-(1+$ix)] = 4 else . end'
```

Input

```text
[1,2,3]
```

Output 1

```text
[1,2,3,4]
```

<!-- jq-example:sections/3/entries/68/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/69/title">

<h3 id="string-interpolation">String interpolation: <code>\(exp)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/69/body">

<p>Inside a string, you can put an expression inside parens
after a backslash. Whatever the expression returns will be
interpolated into the string.</p>

</div>

<!-- jq-example:sections/3/entries/69/examples/0:start -->

#### Example 1

Command

```sh
jq '"The input was \(.), which is one less than \(.+1)"'
```

Input

```text
42
```

Output 1

```text
"The input was 42, which is one less than 43"
```

<!-- jq-example:sections/3/entries/69/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/70/title">

<h3 id="convert-to-from-json">Convert to/from JSON</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/70/body">

<p>The <code>tojson</code> and <code>fromjson</code> builtins dump values as JSON texts
or parse JSON texts into values, respectively.  The <code>tojson</code>
builtin differs from <code>tostring</code> in that <code>tostring</code> returns strings
unmodified, while <code>tojson</code> encodes strings as JSON strings.</p>

</div>

<!-- jq-example:sections/3/entries/70/examples/0:start -->

#### Example 1

Command

```sh
jq '[.[]|tostring]'
```

Input

```text
[1, "foo", ["foo"]]
```

Output 1

```text
["1","foo","[\"foo\"]"]
```

<!-- jq-example:sections/3/entries/70/examples/0:end -->

<!-- jq-example:sections/3/entries/70/examples/1:start -->

#### Example 2

Command

```sh
jq '[.[]|tojson]'
```

Input

```text
[1, "foo", ["foo"]]
```

Output 1

```text
["1","\"foo\"","[\"foo\"]"]
```

<!-- jq-example:sections/3/entries/70/examples/1:end -->

<!-- jq-example:sections/3/entries/70/examples/2:start -->

#### Example 3

Command

```sh
jq '[.[]|tojson|fromjson]'
```

Input

```text
[1, "foo", ["foo"]]
```

Output 1

```text
[1,"foo",["foo"]]
```

<!-- jq-example:sections/3/entries/70/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/71/title">

<h3 id="format-strings-and-escaping">Format strings and escaping</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/71/body">

<p>The <code>@foo</code> syntax is used to format and escape strings,
which is useful for building URLs, documents in a language
like HTML or XML, and so forth. <code>@foo</code> can be used as a
filter on its own, the possible escapings are:</p>




<ul>
<li><code>@text</code>:</li>
</ul>




<p>Calls <code>tostring</code>, see that function for details.</p>




<ul>
<li><code>@json</code>:</li>
</ul>




<p>Serializes the input as JSON.</p>




<ul>
<li><code>@html</code>:</li>
</ul>




<p>Applies HTML/XML escaping, by mapping the characters
  <code>&lt;&gt;&amp;'"</code> to their entity equivalents <code>&amp;lt;</code>, <code>&amp;gt;</code>,
  <code>&amp;amp;</code>, <code>&amp;apos;</code>, <code>&amp;quot;</code>.</p>




<ul>
<li><code>@uri</code>:</li>
</ul>




<p>Applies percent-encoding, by mapping all reserved URI
  characters to a <code>%XX</code> sequence.</p>




<ul>
<li><code>@urid</code>:</li>
</ul>




<p>The inverse of <code>@uri</code>, applies percent-decoding, by mapping
  all <code>%XX</code> sequences to their corresponding URI characters.</p>




<ul>
<li><code>@csv</code>:</li>
</ul>




<p>The input must be an array, and it is rendered as CSV
  with double quotes for strings, and quotes escaped by
  repetition.</p>




<ul>
<li><code>@tsv</code>:</li>
</ul>




<p>The input must be an array, and it is rendered as TSV
  (tab-separated values). Each input array will be printed as
  a single line. Fields are separated by a single
  tab (ascii <code>0x09</code>). Input characters line-feed (ascii <code>0x0a</code>),
  carriage-return (ascii <code>0x0d</code>), tab (ascii <code>0x09</code>) and
  backslash (ascii <code>0x5c</code>) will be output as escape sequences
  <code>\n</code>, <code>\r</code>, <code>\t</code>, <code>\\</code> respectively.</p>




<ul>
<li><code>@sh</code>:</li>
</ul>




<p>The input is escaped suitable for use in a command-line
  for a POSIX shell. If the input is an array, the output
  will be a series of space-separated strings.</p>




<ul>
<li><code>@base64</code>:</li>
</ul>




<p>The input is converted to base64 as specified by RFC 4648.</p>




<ul>
<li><code>@base64d</code>:</li>
</ul>




<p>The inverse of <code>@base64</code>, input is decoded as specified by RFC 4648.
  Note\: If the decoded string is not UTF-8, the results are undefined.</p>




<p>This syntax can be combined with string interpolation in a
useful way. You can follow a <code>@foo</code> token with a string
literal. The contents of the string literal will <em>not</em> be
escaped. However, all interpolations made inside that string
literal will be escaped. For instance,</p>




<pre><code>@uri "https://www.google.com/search?q=\(.search)"
</code></pre>




<p>will produce the following output for the input
<code>{"search":"what is jq?"}</code>:</p>




<pre><code>"https://www.google.com/search?q=what%20is%20jq%3F"
</code></pre>




<p>Note that the slashes, question mark, etc. in the URL are
not escaped, as they were part of the string literal.</p>

</div>

<!-- jq-example:sections/3/entries/71/examples/0:start -->

#### Example 1

Command

```sh
jq '@html'
```

Input

```text
"This works if x < y"
```

Output 1

```text
"This works if x &lt; y"
```

<!-- jq-example:sections/3/entries/71/examples/0:end -->

<!-- jq-example:sections/3/entries/71/examples/1:start -->

#### Example 2

Command

```sh
jq '@sh "echo \(.)"'
```

Input

```text
"O'Hara's Ale"
```

Output 1

```text
"echo 'O'\\''Hara'\\''s Ale'"
```

<!-- jq-example:sections/3/entries/71/examples/1:end -->

<!-- jq-example:sections/3/entries/71/examples/2:start -->

#### Example 3

Command

```sh
jq '@base64'
```

Input

```text
"This is a message"
```

Output 1

```text
"VGhpcyBpcyBhIG1lc3NhZ2U="
```

<!-- jq-example:sections/3/entries/71/examples/2:end -->

<!-- jq-example:sections/3/entries/71/examples/3:start -->

#### Example 4

Command

```sh
jq '@base64d'
```

Input

```text
"VGhpcyBpcyBhIG1lc3NhZ2U="
```

Output 1

```text
"This is a message"
```

<!-- jq-example:sections/3/entries/71/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/72/title">

<h3 id="dates">Dates</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/72/body">

<p>jq provides some basic date handling functionality, with some
high-level and low-level builtins.  In all cases these
builtins deal exclusively with time in UTC.</p>




<p>The <code>fromdateiso8601</code> builtin parses datetimes in the ISO 8601
format to a number of seconds since the Unix epoch
(1970-01-01T00:00:00Z).  The <code>todateiso8601</code> builtin does the
inverse.</p>




<p>The <code>fromdate</code> builtin parses datetime strings.  Currently
<code>fromdate</code> only supports ISO 8601 datetime strings, but in the
future it will attempt to parse datetime strings in more
formats.</p>




<p>The <code>todate</code> builtin is an alias for <code>todateiso8601</code>.</p>




<p>The <code>now</code> builtin outputs the current time, in seconds since
the Unix epoch.</p>




<p>Low-level jq interfaces to the C-library time functions are
also provided: <code>strptime</code>, <code>strftime</code>, <code>strflocaltime</code>,
<code>mktime</code>, <code>gmtime</code>, and <code>localtime</code>.  Refer to your host
operating system's documentation for the format strings used
by <code>strptime</code> and <code>strftime</code>.  Note: these are not necessarily
stable interfaces in jq, particularly as to their localization
functionality.</p>




<p>The <code>gmtime</code> builtin consumes a number of seconds since the
Unix epoch and outputs a "broken down time" representation of
Greenwich Mean Time as an array of numbers representing
(in this order): the year, the month (zero-based), the day of
the month (one-based), the hour of the day, the minute of the
hour, the second of the minute, the day of the week, and the
day of the year -- all one-based unless otherwise stated.  The
day of the week number may be wrong on some systems for dates
before March 1st 1900, or after December 31 2099.</p>




<p>The <code>localtime</code> builtin works like the <code>gmtime</code> builtin, but
using the local timezone setting.</p>




<p>The <code>mktime</code> builtin consumes "broken down time"
representations of time output by <code>gmtime</code> and <code>strptime</code>.</p>




<p>The <code>strptime(fmt)</code> builtin parses input strings matching the
<code>fmt</code> argument.  The output is in the "broken down time"
representation consumed by <code>mktime</code> and output by <code>gmtime</code>.</p>




<p>The <code>strftime(fmt)</code> builtin formats a time (GMT) with the
given format.  The <code>strflocaltime</code> does the same, but using
the local timezone setting.</p>




<p>The format strings for <code>strptime</code> and <code>strftime</code> are described
in typical C library documentation.  The format string for ISO
8601 datetime is <code>"%Y-%m-%dT%H:%M:%SZ"</code>.</p>




<p>jq may not support some or all of this date functionality on
some systems. In particular, the <code>%u</code> and <code>%j</code> specifiers for
<code>strptime(fmt)</code> are not supported on macOS.</p>

</div>

<!-- jq-example:sections/3/entries/72/examples/0:start -->

#### Example 1

Command

```sh
jq 'fromdate'
```

Input

```text
"2015-03-05T23:51:47Z"
```

Output 1

```text
1425599507
```

<!-- jq-example:sections/3/entries/72/examples/0:end -->

<!-- jq-example:sections/3/entries/72/examples/1:start -->

#### Example 2

Command

```sh
jq 'strptime("%Y-%m-%dT%H:%M:%SZ")'
```

Input

```text
"2015-03-05T23:51:47Z"
```

Output 1

```text
[2015,2,5,23,51,47,4,63]
```

<!-- jq-example:sections/3/entries/72/examples/1:end -->

<!-- jq-example:sections/3/entries/72/examples/2:start -->

#### Example 3

Command

```sh
jq 'strptime("%Y-%m-%dT%H:%M:%SZ")|mktime'
```

Input

```text
"2015-03-05T23:51:47Z"
```

Output 1

```text
1425599507
```

<!-- jq-example:sections/3/entries/72/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/73/title">

<h3 id="sql-style-operators">SQL-Style Operators</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/73/body">

<p>jq provides a few SQL-style operators.</p>




<ul>
<li><code>INDEX(stream; index_expression)</code>:</li>
</ul>




<p>This builtin produces an object whose keys are computed by
  the given index expression applied to each value from the
  given stream.</p>




<ul>
<li><code>JOIN($idx; stream; idx_expr; join_expr)</code>:</li>
</ul>




<p>This builtin joins the values from the given stream to the
  given index.  The index's keys are computed by applying the
  given index expression to each value from the given stream.
  An array of the value in the stream and the corresponding
  value from the index is fed to the given join expression to
  produce each result.</p>




<ul>
<li><code>JOIN($idx; stream; idx_expr)</code>:</li>
</ul>




<p>Same as <code>JOIN($idx; stream; idx_expr; .)</code>.</p>




<ul>
<li><code>JOIN($idx; idx_expr)</code>:</li>
</ul>




<p>This builtin joins the input <code>.</code> to the given index, applying
  the given index expression to <code>.</code> to compute the index key.
  The join operation is as described above.</p>




<ul>
<li><code>IN(s)</code>:</li>
</ul>




<p>This builtin outputs <code>true</code> if <code>.</code> appears in the given
  stream, otherwise it outputs <code>false</code>.</p>




<ul>
<li><code>IN(source; s)</code>:</li>
</ul>




<p>This builtin outputs <code>true</code> if any value in the source stream
  appears in the second stream, otherwise it outputs <code>false</code>.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/74/title">

<h3 id="builtins"><code>builtins</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/74/body">

<p>Returns a list of all builtin functions in the format <code>name/arity</code>.
Since functions with the same name but different arities are considered
separate functions, <code>all/0</code>, <code>all/1</code>, and <code>all/2</code> would all be present
in the list.</p>

</div>


## Source and notices

Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.

[Original manual](https://jqlang.org/manual/v1.8/) · [Fixed source](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [License](https://creativecommons.org/licenses/by/3.0/) · [Original notices](/docs/jq/v1-8-2/en/02-license/01-original-notices/) · [Full legal code](/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/)
