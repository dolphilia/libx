---
title: "Basic filters"
---

<span id="basic-filters"></span>

<!-- jq-source-field:sections/1/title:start -->
Basic filters
<!-- jq-source-field:sections/1/title:end -->

<span id="identity"></span>

### Identity: `.`

<!-- jq-source-field:sections/1/entries/0/body:start -->

The absolute simplest filter is `.` .  This filter takes its
input and produces the same value as output.  That is, this
is the identity operator.

Since jq by default pretty-prints all output, a trivial
program consisting of nothing but `.` can be used to format
JSON output from, say, `curl`.

Although the identity filter never modifies the value of its
input, jq processing can sometimes make it appear as though
it does.  For example, using the current implementation of
jq, we would see that the expression:

    1E1234567890 | .

produces `1.7976931348623157e+308` on at least one platform.
This is because, in the process of parsing the number, this
particular version of jq has converted it to an IEEE754
double-precision representation, losing precision.

The way in which jq handles numbers has changed over time
and further changes are likely within the parameters set by
the relevant JSON standards.  Moreover, build configuration
options can alter how jq processes numbers.

The following remarks are therefore offered with the
understanding that they are intended to be descriptive of the
current version of jq and should not be interpreted as being
prescriptive:

(1) Any arithmetic operation on a number that has not
already been converted to an IEEE754 double precision
representation will trigger a conversion to the IEEE754
representation.

(2) jq will attempt to maintain the original decimal
precision of number literals (if the `--disable-decnum`
build configuration option was not used), but in expressions
such `1E1234567890`, precision will be lost if the exponent
is too large.

(3) Comparisons are carried out using the untruncated
big decimal representation of numbers if available, as
illustrated in one of the following examples.

The examples below use the builtin function `have_decnum` in
order to demonstrate the expected effects of using / not
using the `--disable-decnum` build configuration option, and
also to allow automated tests derived from these examples to
pass regardless of whether that option is used.

<!-- jq-source-field:sections/1/entries/0/body:end -->

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

<span id="object-identifier-index"></span>

### Object Identifier-Index: `.foo`, `.foo.bar`

<!-- jq-source-field:sections/1/entries/1/body:start -->

The simplest *useful* filter has the form `.foo`. When given a
JSON object (aka dictionary or hash) as input, `.foo` produces
the value at the key "foo" if the key is present, or null otherwise.

A filter of the form `.foo.bar` is equivalent to `.foo | .bar`.

The `.foo` syntax only works for simple, identifier-like keys, that
is, keys that are all made of alphanumeric characters and
underscore, and which do not start with a digit.

If the key contains special characters or starts with a digit,
you need to surround it with double quotes like this:
`."foo$"`, or else `.["foo$"]`.

For example `.["foo::bar"]` and `.["foo.bar"]` work while
`.foo::bar` does not.

<!-- jq-source-field:sections/1/entries/1/body:end -->

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

<span id="optional-object-identifier-index"></span>

### Optional Object Identifier-Index: `.foo?`

<!-- jq-source-field:sections/1/entries/2/body:start -->

Just like `.foo`, but does not output an error when `.` is not an
object.

<!-- jq-source-field:sections/1/entries/2/body:end -->

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

<span id="object-index"></span>

### Object Index: `.[<string>]`

<!-- jq-source-field:sections/1/entries/3/body:start -->

You can also look up fields of an object using syntax like
`.["foo"]` (`.foo` above is a shorthand version of this, but
only for identifier-like strings).

<!-- jq-source-field:sections/1/entries/3/body:end -->

<span id="array-index"></span>

### Array Index: `.[<number>]`

<!-- jq-source-field:sections/1/entries/4/body:start -->

When the index value is an integer, `.[<number>]` can index
arrays.  Arrays are zero-based, so `.[2]` returns the third
element.

Negative indices are allowed, with -1 referring to the last
element, -2 referring to the next to last element, and so on.

<!-- jq-source-field:sections/1/entries/4/body:end -->

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

<span id="array-string-slice"></span>

### Array/String Slice: `.[<number>:<number>]`

<!-- jq-source-field:sections/1/entries/5/body:start -->

The `.[<number>:<number>]` syntax can be used to return a
subarray of an array or substring of a string. The array
returned by `.[10:15]` will be of length 5, containing the
elements from index 10 (inclusive) to index 15 (exclusive).
Either index may be negative (in which case it counts
backwards from the end of the array), or omitted (in which
case it refers to the start or end of the array).
Indices are zero-based.

<!-- jq-source-field:sections/1/entries/5/body:end -->

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

<span id="array-object-value-iterator"></span>

### Array/Object Value Iterator: `.[]`

<!-- jq-source-field:sections/1/entries/6/body:start -->

If you use the `.[index]` syntax, but omit the index
entirely, it will return *all* of the elements of an
array. Running `.[]` with the input `[1,2,3]` will produce the
numbers as three separate results, rather than as a single
array. A filter of the form `.foo[]` is equivalent to
`.foo | .[]`.

You can also use this on an object, and it will return all
the values of the object.

Note that the iterator operator is a generator of values.

<!-- jq-source-field:sections/1/entries/6/body:end -->

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

<span id=".[]?"></span>

### `.[]?`

<!-- jq-source-field:sections/1/entries/7/body:start -->

Like `.[]`, but no errors will be output if . is not an array
or object. A filter of the form `.foo[]?` is equivalent to
`.foo | .[]?`.

<!-- jq-source-field:sections/1/entries/7/body:end -->

<span id="comma"></span>

### Comma: `,`

<!-- jq-source-field:sections/1/entries/8/body:start -->

If two filters are separated by a comma, then the
same input will be fed into both and the two filters' output
value streams will be concatenated in order: first, all of the
outputs produced by the left expression, and then all of the
outputs produced by the right. For instance, filter `.foo,
.bar`, produces both the "foo" fields and "bar" fields as
separate outputs.

The `,` operator is one way to construct generators.

<!-- jq-source-field:sections/1/entries/8/body:end -->

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

<span id="pipe"></span>

### Pipe: `|`

<!-- jq-source-field:sections/1/entries/9/body:start -->

The | operator combines two filters by feeding the output(s) of
the one on the left into the input of the one on the right. It's
similar to the Unix shell's pipe, if you're used to that.

If the one on the left produces multiple results, the one on
the right will be run for each of those results. So, the
expression `.[] | .foo` retrieves the "foo" field of each
element of the input array.  This is a cartesian product,
which can be surprising.

Note that `.a.b.c` is the same as `.a | .b | .c`.

Note too that `.` is the input value at the particular stage
in a "pipeline", specifically: where the `.` expression appears.
Thus `.a | . | .b` is the same as `.a.b`, as the `.` in the
middle refers to whatever value `.a` produced.

<!-- jq-source-field:sections/1/entries/9/body:end -->

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

<span id="parenthesis"></span>

### Parenthesis

<!-- jq-source-field:sections/1/entries/10/body:start -->

Parenthesis work as a grouping operator just as in any typical
programming language.

<!-- jq-source-field:sections/1/entries/10/body:end -->

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
