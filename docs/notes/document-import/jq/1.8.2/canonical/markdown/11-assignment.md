---
title: "Assignment"
order: 11
categoryOrder: 1
---

<div class="jq-upstream-field" data-source-key="sections/10/title">

<h2 id="assignment">Assignment</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/10/body">

<p>Assignment works a little differently in jq than in most
programming languages. jq doesn't distinguish between references
to and copies of something - two objects or arrays are either
equal or not equal, without any further notion of being "the
same object" or "not the same object".</p>




<p>If an object has two fields which are arrays, <code>.foo</code> and <code>.bar</code>,
and you append something to <code>.foo</code>, then <code>.bar</code> will not get
bigger, even if you've previously set <code>.bar = .foo</code>.  If you're
used to programming in languages like Python, Java, Ruby,
JavaScript, etc. then you can think of it as though jq does a full
deep copy of every object before it does the assignment (for
performance it doesn't actually do that, but that's the general
idea).</p>




<p>This means that it's impossible to build circular values in jq
(such as an array whose first element is itself). This is quite
intentional, and ensures that anything a jq program can produce
can be represented in JSON.</p>




<p>All the assignment operators in jq have path expressions on the
left-hand side (LHS).  The right-hand side (RHS) provides values
to set to the paths named by the LHS path expressions.</p>




<p>Values in jq are always immutable.  Internally, assignment works
by using a reduction to compute new, replacement values for <code>.</code> that
have had all the desired assignments applied to <code>.</code>, then
outputting the modified value.  This might be made clear by this
example: <code>{a:{b:{c:1}}} | (.a.b|=3), .</code>.  This will output
<code>{"a":{"b":3}}</code> and <code>{"a":{"b":{"c":1}}}</code> because the last
sub-expression, <code>.</code>, sees the original value, not the modified
value.</p>




<p>Most users will want to use modification assignment operators,
such as <code>|=</code> or <code>+=</code>, rather than <code>=</code>.</p>




<p>Note that the LHS of assignment operators refers to a value in
<code>.</code>.  Thus <code>$var.foo = 1</code> won't work as expected (<code>$var.foo</code> is
not a valid or useful path expression in <code>.</code>); use <code>$var | .foo =
1</code> instead.</p>




<p>Note too that <code>.a,.b=0</code> does not set <code>.a</code> and <code>.b</code>, but
<code>(.a,.b)=0</code> sets both.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/10/entries/0/title">

<h3 id="update-assignment">Update-assignment: <code>|=</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/10/entries/0/body">

<p>This is the "update" operator <code>|=</code>.  It takes a filter on the
right-hand side and works out the new value for the property
of <code>.</code> being assigned to by running the old value through this
expression. For instance, <code>(.foo, .bar) |= .+1</code> will build an
object with the <code>foo</code> field set to the input's <code>foo</code> plus 1,
and the <code>bar</code> field set to the input's <code>bar</code> plus 1.</p>




<p>The left-hand side can be any general path expression; see <code>path()</code>.</p>




<p>Note that the left-hand side of <code>|=</code> refers to a value in <code>.</code>.
Thus <code>$var.foo |= . + 1</code> won't work as expected (<code>$var.foo</code> is
not a valid or useful path expression in <code>.</code>); use <code>$var |
.foo |= . + 1</code> instead.</p>




<p>If the right-hand side outputs no values (i.e., <code>empty</code>), then
the left-hand side path will be deleted, as with <code>del(path)</code>.</p>




<p>If the right-hand side outputs multiple values, only the first
one will be used (COMPATIBILITY NOTE: in jq 1.5 and earlier
releases, it used to be that only the last one was used).</p>

</div>

<!-- jq-example:sections/10/entries/0/examples/0:start -->

#### Example 1

Command

```sh
jq '(..|select(type=="boolean")) |= if . then 1 else 0 end'
```

Input

```text
[true,false,[5,true,[true,[false]],false]]
```

Output 1

```text
[1,0,[5,1,[1,[0]],0]]
```

<!-- jq-example:sections/10/entries/0/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/10/entries/1/title">

<h3 id="arithmetic-update-assignment">Arithmetic update-assignment: <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code>, <code>//=</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/10/entries/1/body">

<p>jq has a few operators of the form <code>a op= b</code>, which are all
equivalent to <code>a |= . op b</code>. So, <code>+= 1</code> can be used to
increment values, being the same as <code>|= . + 1</code>.</p>

</div>

<!-- jq-example:sections/10/entries/1/examples/0:start -->

#### Example 1

Command

```sh
jq '.foo += 1'
```

Input

```text
{"foo": 42}
```

Output 1

```text
{"foo": 43}
```

<!-- jq-example:sections/10/entries/1/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/10/entries/2/title">

<h3 id="plain-assignment">Plain assignment: <code>=</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/10/entries/2/body">

<p>This is the plain assignment operator.  Unlike the others, the
input to the right-hand side (RHS) is the same as the input to
the left-hand side (LHS) rather than the value at the LHS
path, and all values output by the RHS will be used (as shown
below).</p>




<p>If the RHS of <code>=</code> produces multiple values, then for each such
value jq will set the paths on the left-hand side to the value
and then it will output the modified <code>.</code>.  For example,
<code>(.a,.b) = range(2)</code> outputs <code>{"a":0,"b":0}</code>, then
<code>{"a":1,"b":1}</code>.  The "update" assignment forms (see above) do
not do this.</p>




<p>This example should show the difference between <code>=</code> and <code>|=</code>:</p>




<p>Provide input <code>{"a": {"b": 10}, "b": 20}</code> to the programs</p>




<pre><code>.a = .b
</code></pre>




<p>and</p>




<pre><code>.a |= .b
</code></pre>




<p>The former will set the <code>a</code> field of the input to the <code>b</code>
field of the input, and produce the output <code>{"a": 20, "b": 20}</code>.
The latter will set the <code>a</code> field of the input to the <code>a</code>
field's <code>b</code> field, producing <code>{"a": 10, "b": 20}</code>.</p>

</div>

<!-- jq-example:sections/10/entries/2/examples/0:start -->

#### Example 1

Command

```sh
jq '.a = .b'
```

Input

```text
{"a": {"b": 10}, "b": 20}
```

Output 1

```text
{"a":20,"b":20}
```

<!-- jq-example:sections/10/entries/2/examples/0:end -->

<!-- jq-example:sections/10/entries/2/examples/1:start -->

#### Example 2

Command

```sh
jq '.a |= .b'
```

Input

```text
{"a": {"b": 10}, "b": 20}
```

Output 1

```text
{"a":10,"b":20}
```

<!-- jq-example:sections/10/entries/2/examples/1:end -->

<!-- jq-example:sections/10/entries/2/examples/2:start -->

#### Example 3

Command

```sh
jq '(.a, .b) = range(3)'
```

Input

```text
null
```

Output 1

```text
{"a":0,"b":0}
```

Output 2

```text
{"a":1,"b":1}
```

Output 3

```text
{"a":2,"b":2}
```

<!-- jq-example:sections/10/entries/2/examples/2:end -->

<!-- jq-example:sections/10/entries/2/examples/3:start -->

#### Example 4

Command

```sh
jq '(.a, .b) |= range(3)'
```

Input

```text
null
```

Output 1

```text
{"a":0,"b":0}
```

<!-- jq-example:sections/10/entries/2/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/10/entries/3/title">

<h3 id="complex-assignments">Complex assignments</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/10/entries/3/body">

<p>Lots more things are allowed on the left-hand side of a jq assignment
than in most languages. We've already seen simple field accesses on
the left hand side, and it's no surprise that array accesses work just
as well:</p>




<pre><code>.posts[0].title = "JQ Manual"
</code></pre>




<p>What may come as a surprise is that the expression on the left may
produce multiple results, referring to different points in the input
document:</p>




<pre><code>.posts[].comments |= . + ["this is great"]
</code></pre>




<p>That example appends the string "this is great" to the "comments"
array of each post in the input (where the input is an object with a
field "posts" which is an array of posts).</p>




<p>When jq encounters an assignment like 'a = b', it records the "path"
taken to select a part of the input document while executing a. This
path is then used to find which part of the input to change while
executing the assignment. Any filter may be used on the
left-hand side of an equals - whichever paths it selects from the
input will be where the assignment is performed.</p>




<p>This is a very powerful operation. Suppose we wanted to add a comment
to blog posts, using the same "blog" input above. This time, we only
want to comment on the posts written by "stedolan". We can find those
posts using the "select" function described earlier:</p>




<pre><code>.posts[] | select(.author == "stedolan")
</code></pre>




<p>The paths provided by this operation point to each of the posts that
"stedolan" wrote, and we can comment on each of them in the same way
that we did before:</p>




<pre><code>(.posts[] | select(.author == "stedolan") | .comments) |=
    . + ["terrible."]
</code></pre>

</div>


## Source and notices

Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.

[Original manual](https://jqlang.org/manual/v1.8/) · [Fixed source](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [License](https://creativecommons.org/licenses/by/3.0/) · [Original notices](/docs/jq/v1-8-2/en/02-license/01-original-notices/) · [Full legal code](/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/)
