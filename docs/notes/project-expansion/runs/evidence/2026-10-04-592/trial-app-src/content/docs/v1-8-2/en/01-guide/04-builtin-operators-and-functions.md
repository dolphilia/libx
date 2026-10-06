---
title: "Builtin operators and functions"
order: 4
categoryOrder: 1
---

<span id="builtin-operators-and-functions"></span>

<!-- jq-source-field:sections/3/title:start -->
Builtin operators and functions
<!-- jq-source-field:sections/3/title:end -->
<!-- jq-source-field:sections/3/body:start -->

Some jq operators (for instance, `+`) do different things
depending on the type of their arguments (arrays, numbers,
etc.). However, jq never does implicit type conversions. If you
try to add a string to an object you'll get an error message and
no result.

Please note that all numbers are converted to IEEE754 double precision
floating point representation. Arithmetic and logical operators are working
with these converted doubles. Results of all such operations are also limited
to the double precision.

The only exception to this behaviour of number is a snapshot of original number
literal. When a number which originally was provided as a literal is never
mutated until the end of the program then it is printed to the output in its
original literal form. This also includes cases when the original literal
would be truncated when converted to the IEEE754 double precision floating point
number.

<!-- jq-source-field:sections/3/body:end -->

<span id="addition"></span>

### Addition: `+`

<!-- jq-source-field:sections/3/entries/0/body:start -->

The operator `+` takes two filters, applies them both
to the same input, and adds the results together. What
"adding" means depends on the types involved:

- **Numbers** are added by normal arithmetic.

- **Arrays** are added by being concatenated into a larger array.

- **Strings** are added by being joined into a larger string.

- **Objects** are added by merging, that is, inserting all
  the key-value pairs from both objects into a single
  combined object. If both objects contain a value for the
  same key, the object on the right of the `+` wins. (For
  recursive merge use the `*` operator.)

`null` can be added to any value, and returns the other
value unchanged.

<!-- jq-source-field:sections/3/entries/0/body:end -->

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

<span id="subtraction"></span>

### Subtraction: `-`

<!-- jq-source-field:sections/3/entries/1/body:start -->

As well as normal arithmetic subtraction on numbers, the `-`
operator can be used on arrays to remove all occurrences of
the second array's elements from the first array.

<!-- jq-source-field:sections/3/entries/1/body:end -->

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

<span id="multiplication-division-modulo"></span>

### Multiplication, division, modulo: `*`, `/`, `%`

<!-- jq-source-field:sections/3/entries/2/body:start -->

These infix operators behave as expected when given two numbers.
Division by zero raises an error. `x % y` computes x modulo y.

Multiplying a string by a number produces the concatenation of
that string that many times. `"x" * 0` produces `""`.

Dividing a string by another splits the first using the second
as separators.

Multiplying two objects will merge them recursively: this works
like addition but if both objects contain a value for the
same key, and the values are objects, the two are merged with
the same strategy.

<!-- jq-source-field:sections/3/entries/2/body:end -->

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

<span id="abs"></span>

### `abs`

<!-- jq-source-field:sections/3/entries/3/body:start -->

The builtin function `abs` is defined naively as: `if . < 0 then - . else . end`.

For numeric input, this is the absolute value.  See the
section on the identity filter for the implications of this
definition for numeric input.

To compute the absolute value of a number as a floating point number, you may wish use `fabs`.

<!-- jq-source-field:sections/3/entries/3/body:end -->

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

<span id="length"></span>

### `length`

<!-- jq-source-field:sections/3/entries/4/body:start -->

The builtin function `length` gets the length of various
different types of value:

- The length of a **string** is the number of Unicode
  codepoints it contains (which will be the same as its
  JSON-encoded length in bytes if it's pure ASCII).

- The length of a **number** is its absolute value.

- The length of an **array** is the number of elements.

- The length of an **object** is the number of key-value pairs.

- The length of **null** is zero.

- It is an error to use `length` on a **boolean**.

<!-- jq-source-field:sections/3/entries/4/body:end -->

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

<span id="utf8bytelength"></span>

### `utf8bytelength`

<!-- jq-source-field:sections/3/entries/5/body:start -->

The builtin function `utf8bytelength` outputs the number of
bytes used to encode a string in UTF-8.

<!-- jq-source-field:sections/3/entries/5/body:end -->

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

<span id="keys-keys_unsorted"></span>

### `keys`, `keys_unsorted`

<!-- jq-source-field:sections/3/entries/6/body:start -->

The builtin function `keys`, when given an object, returns
its keys in an array.

The keys are sorted "alphabetically", by unicode codepoint
order. This is not an order that makes particular sense in
any particular language, but you can count on it being the
same for any two objects with the same set of keys,
regardless of locale settings.

When `keys` is given an array, it returns the valid indices
for that array: the integers from 0 to length-1.

The `keys_unsorted` function is just like `keys`, but if
the input is an object then the keys will not be sorted,
instead the keys will roughly be in insertion order.

<!-- jq-source-field:sections/3/entries/6/body:end -->

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

<span id="has"></span>

### `has(key)`

<!-- jq-source-field:sections/3/entries/7/body:start -->

The builtin function `has` returns whether the input object
has the given key, or the input array has an element at the
given index.

`has($key)` has the same effect as checking whether `$key`
is a member of the array returned by `keys`, although `has`
will be faster.

<!-- jq-source-field:sections/3/entries/7/body:end -->

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

<span id="in"></span>

### `in`

<!-- jq-source-field:sections/3/entries/8/body:start -->

The builtin function `in` returns whether or not the input key is in the
given object, or the input index corresponds to an element
in the given array. It is, essentially, an inversed version
of `has`.

<!-- jq-source-field:sections/3/entries/8/body:end -->

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

<span id="map-map_values"></span>

### `map(f)`, `map_values(f)`

<!-- jq-source-field:sections/3/entries/9/body:start -->

For any filter `f`, `map(f)` and `map_values(f)` apply `f`
to each of the values in the input array or object, that is,
to the values of `.[]`.

In the absence of errors, `map(f)` always outputs an array
whereas `map_values(f)` outputs an array if given an array,
or an object if given an object.

When the input to `map_values(f)` is an object, the output
object has the same keys as the input object except for
those keys whose values when piped to `f` produce no values
at all.

The key difference between `map(f)` and `map_values(f)` is
that the former simply forms an array from all the values of
`($x|f)` for each value, `$x`, in the input array or object,
but `map_values(f)` only uses `first($x|f)`.

Specifically, for object inputs, `map_values(f)` constructs
the output object by examining in turn the value of
`first(.[$k]|f)` for each key, `$k`, of the input.  If this
expression produces no values, then the corresponding key
will be dropped; otherwise, the output object will have that
value at the key, `$k`.

Here are some examples to clarify the behavior of `map` and
`map_values` when applied to arrays. These examples assume the
input is `[1]` in all cases:

    map(.+1)          #=>  [2]
    map(., .)         #=>  [1,1]
    map(empty)        #=>  []

    map_values(.+1)   #=>  [2]
    map_values(., .)  #=>  [1]
    map_values(empty) #=>  []

`map(f)` is equivalent to `[.[] | f]` and
`map_values(f)` is equivalent to `.[] |= f`.

In fact, these are their implementations.

<!-- jq-source-field:sections/3/entries/9/body:end -->

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

<span id="pick"></span>

### `pick(pathexps)`

<!-- jq-source-field:sections/3/entries/10/body:start -->

Emit the projection of the input object or array defined by the
specified sequence of path expressions, such that if `p` is any
one of these specifications, then `(. | p)` will evaluate to the
same value as `(. | pick(pathexps) | p)`. For arrays, negative
indices and `.[m:n]` specifications should not be used.

<!-- jq-source-field:sections/3/entries/10/body:end -->

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

<span id="path"></span>

### `path(path_expression)`

<!-- jq-source-field:sections/3/entries/11/body:start -->

Outputs array representations of the given path expression
in `.`.  The outputs are arrays of strings (object keys)
and/or numbers (array indices).

Path expressions are jq expressions like `.a`, but also `.[]`.
There are two types of path expressions: ones that can match
exactly, and ones that cannot.  For example, `.a.b.c` is an
exact match path expression, while `.a[].b` is not.

`path(exact_path_expression)` will produce the array
representation of the path expression even if it does not
exist in `.`, if `.` is `null` or an array or an object.

`path(pattern)` will produce array representations of the
paths matching `pattern` if the paths exist in `.`.

Note that the path expressions are not different from normal
expressions.  The expression
`path(..|select(type=="boolean"))` outputs all the paths to
boolean values in `.`, and only those paths.

<!-- jq-source-field:sections/3/entries/11/body:end -->

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

<span id="del"></span>

### `del(path_expression)`

<!-- jq-source-field:sections/3/entries/12/body:start -->

The builtin function `del` removes a key and its corresponding
value from an object.

<!-- jq-source-field:sections/3/entries/12/body:end -->

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

<span id="getpath"></span>

### `getpath(PATHS)`

<!-- jq-source-field:sections/3/entries/13/body:start -->

The builtin function `getpath` outputs the values in `.` found
at each path in `PATHS`.

<!-- jq-source-field:sections/3/entries/13/body:end -->

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

<span id="setpath"></span>

### `setpath(PATHS; VALUE)`

<!-- jq-source-field:sections/3/entries/14/body:start -->

The builtin function `setpath` sets the `PATHS` in `.` to `VALUE`.

<!-- jq-source-field:sections/3/entries/14/body:end -->

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

<span id="delpaths"></span>

### `delpaths(PATHS)`

<!-- jq-source-field:sections/3/entries/15/body:start -->

The builtin function `delpaths` deletes the `PATHS` in `.`.
`PATHS` must be an array of paths, where each path is an array
of strings and numbers.

<!-- jq-source-field:sections/3/entries/15/body:end -->

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

<span id="to_entries-from_entries-with_entries"></span>

### `to_entries`, `from_entries`, `with_entries(f)`

<!-- jq-source-field:sections/3/entries/16/body:start -->

These functions convert between an object and an array of
key-value pairs. If `to_entries` is passed an object, then
for each `k: v` entry in the input, the output array
includes `{"key": k, "value": v}`.

`from_entries` does the opposite conversion, and `with_entries(f)`
is a shorthand for `to_entries | map(f) | from_entries`, useful for
doing some operation to all keys and values of an object.
`from_entries` accepts `"key"`, `"Key"`, `"name"`, `"Name"`,
`"value"`, and `"Value"` as keys.

<!-- jq-source-field:sections/3/entries/16/body:end -->

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

<span id="select"></span>

### `select(boolean_expression)`

<!-- jq-source-field:sections/3/entries/17/body:start -->

The function `select(f)` produces its input unchanged if
`f` returns true for that input, and produces no output
otherwise.

It's useful for filtering lists: `[1,2,3] | map(select(. >= 2))`
will give you `[2,3]`.

<!-- jq-source-field:sections/3/entries/17/body:end -->

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

<span id="arrays-objects-iterables-booleans-numbers-normals-finites-strings-nulls-values-scalars"></span>

### `arrays`, `objects`, `iterables`, `booleans`, `numbers`, `normals`, `finites`, `strings`, `nulls`, `values`, `scalars`

<!-- jq-source-field:sections/3/entries/18/body:start -->

These built-ins select only inputs that are arrays, objects,
iterables (arrays or objects), booleans, numbers, normal
numbers, finite numbers, strings, null, non-null values, and
non-iterables, respectively.

<!-- jq-source-field:sections/3/entries/18/body:end -->

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

<span id="empty"></span>

### `empty`

<!-- jq-source-field:sections/3/entries/19/body:start -->

`empty` returns no results. None at all. Not even `null`.

It's useful on occasion. You'll know if you need it :)

<!-- jq-source-field:sections/3/entries/19/body:end -->

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

<span id="error"></span>

### `error`, `error(message)`

<!-- jq-source-field:sections/3/entries/20/body:start -->

Produces an error with the input value, or with the message
given as the argument. Errors can be caught with try/catch;
see below.

<!-- jq-source-field:sections/3/entries/20/body:end -->

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

<span id="halt"></span>

### `halt`

<!-- jq-source-field:sections/3/entries/21/body:start -->

Stops the jq program with no further outputs.  jq will exit
with exit status `0`.

<!-- jq-source-field:sections/3/entries/21/body:end -->

<span id="halt_error"></span>

### `halt_error`, `halt_error(exit_code)`

<!-- jq-source-field:sections/3/entries/22/body:start -->

Stops the jq program with no further outputs.  The input will
be printed on `stderr` as raw output (i.e., strings will not
have double quotes) with no decoration, not even a newline.

The given `exit_code` (defaulting to `5`) will be jq's exit
status.

For example, `"Error: something went wrong\n"|halt_error(1)`.

<!-- jq-source-field:sections/3/entries/22/body:end -->

<span id="$__loc__"></span>

### `$__loc__`

<!-- jq-source-field:sections/3/entries/23/body:start -->

Produces an object with a "file" key and a "line" key, with
the filename and line number where `$__loc__` occurs, as
values.

<!-- jq-source-field:sections/3/entries/23/body:end -->

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

<span id="paths"></span>

### `paths`, `paths(node_filter)`

<!-- jq-source-field:sections/3/entries/24/body:start -->

`paths` outputs the paths to all the elements in its input
(except it does not output the empty list, representing .
itself).

`paths(f)` outputs the paths to any values for which `f` is `true`.
That is, `paths(type == "number")` outputs the paths to all numeric
values.

<!-- jq-source-field:sections/3/entries/24/body:end -->

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

<span id="add"></span>

### `add`, `add(generator)`

<!-- jq-source-field:sections/3/entries/25/body:start -->

The filter `add` takes as input an array, and produces as
output the elements of the array added together. This might
mean summed, concatenated or merged depending on the types
of the elements of the input array - the rules are the same
as those for the `+` operator (described above).

If the input is an empty array, `add` returns `null`.

`add(generator)` operates on the given generator rather than
the input.

<!-- jq-source-field:sections/3/entries/25/body:end -->

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

<span id="any"></span>

### `any`, `any(condition)`, `any(generator; condition)`

<!-- jq-source-field:sections/3/entries/26/body:start -->

The filter `any` takes as input an array of boolean values,
and produces `true` as output if any of the elements of
the array are `true`.

If the input is an empty array, `any` returns `false`.

The `any(condition)` form applies the given condition to the
elements of the input array.

The `any(generator; condition)` form applies the given
condition to all the outputs of the given generator.

<!-- jq-source-field:sections/3/entries/26/body:end -->

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

<span id="all"></span>

### `all`, `all(condition)`, `all(generator; condition)`

<!-- jq-source-field:sections/3/entries/27/body:start -->

The filter `all` takes as input an array of boolean values,
and produces `true` as output if all of the elements of
the array are `true`.

The `all(condition)` form applies the given condition to the
elements of the input array.

The `all(generator; condition)` form applies the given
condition to all the outputs of the given generator.

If the input is an empty array, `all` returns `true`.

<!-- jq-source-field:sections/3/entries/27/body:end -->

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

<span id="flatten"></span>

### `flatten`, `flatten(depth)`

<!-- jq-source-field:sections/3/entries/28/body:start -->

The filter `flatten` takes as input an array of nested arrays,
and produces a flat array in which all arrays inside the original
array have been recursively replaced by their values. You can pass
an argument to it to specify how many levels of nesting to flatten.

`flatten(2)` is like `flatten`, but going only up to two
levels deep.

<!-- jq-source-field:sections/3/entries/28/body:end -->

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

<span id="range"></span>

### `range(upto)`, `range(from; upto)`, `range(from; upto; by)`

<!-- jq-source-field:sections/3/entries/29/body:start -->

The `range` function produces a range of numbers. `range(4; 10)`
produces 6 numbers, from 4 (inclusive) to 10 (exclusive). The numbers
are produced as separate outputs. Use `[range(4; 10)]` to get a range as
an array.

The one argument form generates numbers from 0 to the given
number, with an increment of 1.

The two argument form generates numbers from `from` to `upto`
with an increment of 1.

The three argument form generates numbers `from` to `upto`
with an increment of `by`.

<!-- jq-source-field:sections/3/entries/29/body:end -->

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

<span id="floor"></span>

### `floor`

<!-- jq-source-field:sections/3/entries/30/body:start -->

The `floor` function returns the floor of its numeric input.

<!-- jq-source-field:sections/3/entries/30/body:end -->

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

<span id="sqrt"></span>

### `sqrt`

<!-- jq-source-field:sections/3/entries/31/body:start -->

The `sqrt` function returns the square root of its numeric input.

<!-- jq-source-field:sections/3/entries/31/body:end -->

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

<span id="tonumber"></span>

### `tonumber`

<!-- jq-source-field:sections/3/entries/32/body:start -->

The `tonumber` function parses its input as a number. It
will convert correctly-formatted strings to their numeric
equivalent, leave numbers alone, and give an error on all other input.

<!-- jq-source-field:sections/3/entries/32/body:end -->

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

<span id="toboolean"></span>

### `toboolean`

<!-- jq-source-field:sections/3/entries/33/body:start -->

The `toboolean` function parses its input as a boolean. It
will convert correctly-formatted strings to their boolean
equivalent, leave booleans alone, and give an error on all other input.

<!-- jq-source-field:sections/3/entries/33/body:end -->

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

<span id="tostring"></span>

### `tostring`

<!-- jq-source-field:sections/3/entries/34/body:start -->

The `tostring` function prints its input as a
string. Strings are left unchanged, and all other values are
JSON-encoded.

<!-- jq-source-field:sections/3/entries/34/body:end -->

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

<span id="type"></span>

### `type`

<!-- jq-source-field:sections/3/entries/35/body:start -->

The `type` function returns the type of its argument as a
string, which is one of null, boolean, number, string, array
or object.

<!-- jq-source-field:sections/3/entries/35/body:end -->

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

<span id="infinite-nan-isinfinite-isnan-isfinite-isnormal"></span>

### `infinite`, `nan`, `isinfinite`, `isnan`, `isfinite`, `isnormal`

<!-- jq-source-field:sections/3/entries/36/body:start -->

Some arithmetic operations can yield infinities and "not a
number" (NaN) values.  The `isinfinite` builtin returns `true`
if its input is infinite.  The `isnan` builtin returns `true`
if its input is a NaN.  The `infinite` builtin returns a
positive infinite value.  The `nan` builtin returns a NaN.
The `isnormal` builtin returns true if its input is a normal
number.

Note that division by zero raises an error.

Currently most arithmetic operations operating on infinities,
NaNs, and sub-normals do not raise errors.

<!-- jq-source-field:sections/3/entries/36/body:end -->

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

<span id="sort-sort_by"></span>

### `sort`, `sort_by(path_expression)`

<!-- jq-source-field:sections/3/entries/37/body:start -->

The `sort` functions sorts its input, which must be an
array. Values are sorted in the following order:

* `null`
* `false`
* `true`
* numbers
* strings, in alphabetical order (by unicode codepoint value)
* arrays, in lexical order
* objects

The ordering for objects is a little complex: first they're
compared by comparing their sets of keys (as arrays in
sorted order), and if their keys are equal then the values
are compared key by key.

`sort_by` may be used to sort by a particular field of an
object, or by applying any jq filter. `sort_by(f)` compares
two elements by comparing the result of `f` on each element.
When `f` produces multiple values, it firstly compares the
first values, and the second values if the first values are
equal, and so on.

<!-- jq-source-field:sections/3/entries/37/body:end -->

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

<span id="group_by"></span>

### `group_by(path_expression)`

<!-- jq-source-field:sections/3/entries/38/body:start -->

`group_by(.foo)` takes as input an array, groups the
elements having the same `.foo` field into separate arrays,
and produces all of these arrays as elements of a larger
array, sorted by the value of the `.foo` field.

Any jq expression, not just a field access, may be used in
place of `.foo`. The sorting order is the same as described
in the `sort` function above.

<!-- jq-source-field:sections/3/entries/38/body:end -->

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

<span id="min-max-min_by-max_by"></span>

### `min`, `max`, `min_by(path_exp)`, `max_by(path_exp)`

<!-- jq-source-field:sections/3/entries/39/body:start -->

Find the minimum or maximum element of the input array.

The `min_by(path_exp)` and `max_by(path_exp)` functions allow
you to specify a particular field or property to examine, e.g.
`min_by(.foo)` finds the object with the smallest `foo` field.

<!-- jq-source-field:sections/3/entries/39/body:end -->

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

<span id="unique-unique_by"></span>

### `unique`, `unique_by(path_exp)`

<!-- jq-source-field:sections/3/entries/40/body:start -->

The `unique` function takes as input an array and produces
an array of the same elements, in sorted order, with
duplicates removed.

The `unique_by(path_exp)` function will keep only one element
for each value obtained by applying the argument. Think of it
as making an array by taking one element out of every group
produced by `group`.

<!-- jq-source-field:sections/3/entries/40/body:end -->

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

<span id="reverse"></span>

### `reverse`

<!-- jq-source-field:sections/3/entries/41/body:start -->

This function reverses an array.

<!-- jq-source-field:sections/3/entries/41/body:end -->

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

<span id="contains"></span>

### `contains(element)`

<!-- jq-source-field:sections/3/entries/42/body:start -->

The filter `contains(b)` will produce true if b is
completely contained within the input. A string B is
contained in a string A if B is a substring of A. An array B
is contained in an array A if all elements in B are
contained in any element in A. An object B is contained in
object A if all of the values in B are contained in the
value in A with the same key. All other types are assumed to
be contained in each other if they are equal.

<!-- jq-source-field:sections/3/entries/42/body:end -->

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

<span id="indices"></span>

### `indices(s)`

<!-- jq-source-field:sections/3/entries/43/body:start -->

Outputs an array containing the indices in `.` where `s`
occurs.  The input may be an array, in which case if `s` is an
array then the indices output will be those where all elements
in `.` match those of `s`.

<!-- jq-source-field:sections/3/entries/43/body:end -->

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

<span id="index-rindex"></span>

### `index(s)`, `rindex(s)`

<!-- jq-source-field:sections/3/entries/44/body:start -->

Outputs the index of the first (`index`) or last (`rindex`)
occurrence of `s` in the input.

<!-- jq-source-field:sections/3/entries/44/body:end -->

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

<span id="inside"></span>

### `inside`

<!-- jq-source-field:sections/3/entries/45/body:start -->

The filter `inside(b)` will produce true if the input is
completely contained within b. It is, essentially, an
inversed version of `contains`.

<!-- jq-source-field:sections/3/entries/45/body:end -->

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

<span id="startswith"></span>

### `startswith(str)`

<!-- jq-source-field:sections/3/entries/46/body:start -->

Outputs `true` if . starts with the given string argument.

<!-- jq-source-field:sections/3/entries/46/body:end -->

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

<span id="endswith"></span>

### `endswith(str)`

<!-- jq-source-field:sections/3/entries/47/body:start -->

Outputs `true` if . ends with the given string argument.

<!-- jq-source-field:sections/3/entries/47/body:end -->

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

<span id="combinations"></span>

### `combinations`, `combinations(n)`

<!-- jq-source-field:sections/3/entries/48/body:start -->

Outputs all combinations of the elements of the arrays in the
input array. If given an argument `n`, it outputs all combinations
of `n` repetitions of the input array.

<!-- jq-source-field:sections/3/entries/48/body:end -->

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

<span id="ltrimstr"></span>

### `ltrimstr(str)`

<!-- jq-source-field:sections/3/entries/49/body:start -->

Outputs its input with the given prefix string removed, if it
starts with it.

<!-- jq-source-field:sections/3/entries/49/body:end -->

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

<span id="rtrimstr"></span>

### `rtrimstr(str)`

<!-- jq-source-field:sections/3/entries/50/body:start -->

Outputs its input with the given suffix string removed, if it
ends with it.

<!-- jq-source-field:sections/3/entries/50/body:end -->

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

<span id="trimstr"></span>

### `trimstr(str)`

<!-- jq-source-field:sections/3/entries/51/body:start -->

Outputs its input with the given string removed at both ends, if it
starts or ends with it.

<!-- jq-source-field:sections/3/entries/51/body:end -->

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

<span id="trim-ltrim-rtrim"></span>

### `trim`, `ltrim`, `rtrim`

<!-- jq-source-field:sections/3/entries/52/body:start -->

`trim` trims both leading and trailing whitespace.

`ltrim` trims only leading (left side) whitespace.

`rtrim` trims only trailing (right side) whitespace.

Whitespace characters are the usual `" "`, `"\n"` `"\t"`, `"\r"`
and also all characters in the Unicode character database with the
whitespace property. Note that what considers whitespace might
change in the future.

<!-- jq-source-field:sections/3/entries/52/body:end -->

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

<span id="explode"></span>

### `explode`

<!-- jq-source-field:sections/3/entries/53/body:start -->

Converts an input string into an array of the string's
codepoint numbers.

<!-- jq-source-field:sections/3/entries/53/body:end -->

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

<span id="implode"></span>

### `implode`

<!-- jq-source-field:sections/3/entries/54/body:start -->

The inverse of explode.

<!-- jq-source-field:sections/3/entries/54/body:end -->

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

<span id="split-1"></span>

### `split(str)`

<!-- jq-source-field:sections/3/entries/55/body:start -->

Splits an input string on the separator argument.

`split` can also split on regex matches when called with
two arguments (see the regular expressions section below).

<!-- jq-source-field:sections/3/entries/55/body:end -->

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

<span id="join"></span>

### `join(str)`

<!-- jq-source-field:sections/3/entries/56/body:start -->

Joins the array of elements given as input, using the
argument as separator. It is the inverse of `split`: that is,
running `split("foo") | join("foo")` over any input string
returns said input string.

Numbers and booleans in the input are converted to strings.
Null values are treated as empty strings. Arrays and objects
in the input are not supported.

<!-- jq-source-field:sections/3/entries/56/body:end -->

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

<span id="ascii_downcase-ascii_upcase"></span>

### `ascii_downcase`, `ascii_upcase`

<!-- jq-source-field:sections/3/entries/57/body:start -->

Emit a copy of the input string with its alphabetic characters (a-z and A-Z)
converted to the specified case.

<!-- jq-source-field:sections/3/entries/57/body:end -->

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

<span id="while"></span>

### `while(cond; update)`

<!-- jq-source-field:sections/3/entries/58/body:start -->

The `while(cond; update)` function allows you to repeatedly
apply an update to `.` until `cond` is false.

Note that `while(cond; update)` is internally defined as a
recursive jq function.  Recursive calls within `while` will
not consume additional memory if `update` produces at most one
output for each input.  See advanced topics below.

<!-- jq-source-field:sections/3/entries/58/body:end -->

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

<span id="repeat"></span>

### `repeat(exp)`

<!-- jq-source-field:sections/3/entries/59/body:start -->

The `repeat(exp)` function allows you to repeatedly
apply expression `exp` to `.` until an error is raised.

Note that `repeat(exp)` is internally defined as a
recursive jq function.  Recursive calls within `repeat` will
not consume additional memory if `exp` produces at most one
output for each input.  See advanced topics below.

<!-- jq-source-field:sections/3/entries/59/body:end -->

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

<span id="until"></span>

### `until(cond; next)`

<!-- jq-source-field:sections/3/entries/60/body:start -->

The `until(cond; next)` function allows you to repeatedly
apply the expression `next`, initially to `.` then to its own
output, until `cond` is true.  For example, this can be used
to implement a factorial function (see below).

Note that `until(cond; next)` is internally defined as a
recursive jq function.  Recursive calls within `until()` will
not consume additional memory if `next` produces at most one
output for each input.  See advanced topics below.

<!-- jq-source-field:sections/3/entries/60/body:end -->

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

<span id="recurse"></span>

### `recurse(f)`, `recurse`, `recurse(f; condition)`

<!-- jq-source-field:sections/3/entries/61/body:start -->

The `recurse(f)` function allows you to search through a
recursive structure, and extract interesting data from all
levels. Suppose your input represents a filesystem:

    {"name": "/", "children": [
      {"name": "/bin", "children": [
        {"name": "/bin/ls", "children": []},
        {"name": "/bin/sh", "children": []}]},
      {"name": "/home", "children": [
        {"name": "/home/stephen", "children": [
          {"name": "/home/stephen/jq", "children": []}]}]}]}

Now suppose you want to extract all of the filenames
present. You need to retrieve `.name`, `.children[].name`,
`.children[].children[].name`, and so on. You can do this
with:

    recurse(.children[]) | .name

When called without an argument, `recurse` is equivalent to
`recurse(.[]?)`.

`recurse(f)` is identical to `recurse(f; true)` and can be
used without concerns about recursion depth.

`recurse(f; condition)` is a generator which begins by
emitting . and then emits in turn .|f, .|f|f, .|f|f|f, ...  so long
as the computed value satisfies the condition. For example,
to generate all the integers, at least in principle, one
could write `recurse(.+1; true)`.

The recursive calls in `recurse` will not consume additional
memory whenever `f` produces at most a single output for each
input.

<!-- jq-source-field:sections/3/entries/61/body:end -->

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

<span id="walk"></span>

### `walk(f)`

<!-- jq-source-field:sections/3/entries/62/body:start -->

The `walk(f)` function applies f recursively to every
component of the input entity.  When an array is
encountered, f is first applied to its elements and then to
the array itself; when an object is encountered, f is first
applied to all the values and then to the object.  In
practice, f will usually test the type of its input, as
illustrated in the following examples.  The first example
highlights the usefulness of processing the elements of an
array of arrays before processing the array itself.  The second
example shows how all the keys of all the objects within the
input can be considered for alteration.

<!-- jq-source-field:sections/3/entries/62/body:end -->

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

<span id="have_literal_numbers"></span>

### `have_literal_numbers`

<!-- jq-source-field:sections/3/entries/63/body:start -->

This builtin returns true if jq's build configuration
includes support for preservation of input number literals.

<!-- jq-source-field:sections/3/entries/63/body:end -->

<span id="have_decnum"></span>

### `have_decnum`

<!-- jq-source-field:sections/3/entries/64/body:start -->

This builtin returns true if jq was built with "decnum",
which is the current literal number preserving numeric
backend implementation for jq.

<!-- jq-source-field:sections/3/entries/64/body:end -->

<span id="$jq_build_configuration"></span>

### `$JQ_BUILD_CONFIGURATION`

<!-- jq-source-field:sections/3/entries/65/body:start -->

This builtin binding shows the jq executable's build
configuration.  Its value has no particular format, but
it can be expected to be at least the `./configure`
command-line arguments, and may be enriched in the
future to include the version strings for the build
tooling used.

Note that this can be overridden in the command-line
with `--arg` and related options.

<!-- jq-source-field:sections/3/entries/65/body:end -->

<span id="$env-env"></span>

### `$ENV`, `env`

<!-- jq-source-field:sections/3/entries/66/body:start -->

`$ENV` is an object representing the environment variables as
set when the jq program started.

`env` outputs an object representing jq's current environment.

At the moment there is no builtin for setting environment
variables.

<!-- jq-source-field:sections/3/entries/66/body:end -->

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

<span id="transpose"></span>

### `transpose`

<!-- jq-source-field:sections/3/entries/67/body:start -->

Transpose a possibly jagged matrix (an array of arrays).
Rows are padded with nulls so the result is always rectangular.

<!-- jq-source-field:sections/3/entries/67/body:end -->

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

<span id="bsearch"></span>

### `bsearch(x)`

<!-- jq-source-field:sections/3/entries/68/body:start -->

`bsearch(x)` conducts a binary search for x in the input
array.  If the input is sorted and contains x, then
`bsearch(x)` will return its index in the array; otherwise, if
the array is sorted, it will return (-1 - ix) where ix is an
insertion point such that the array would still be sorted
after the insertion of x at ix.  If the array is not sorted,
`bsearch(x)` will return an integer that is probably of no
interest.

<!-- jq-source-field:sections/3/entries/68/body:end -->

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

<span id="string-interpolation"></span>

### String interpolation: `\(exp)`

<!-- jq-source-field:sections/3/entries/69/body:start -->

Inside a string, you can put an expression inside parens
after a backslash. Whatever the expression returns will be
interpolated into the string.

<!-- jq-source-field:sections/3/entries/69/body:end -->

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

<span id="convert-to-from-json"></span>

### Convert to/from JSON

<!-- jq-source-field:sections/3/entries/70/body:start -->

The `tojson` and `fromjson` builtins dump values as JSON texts
or parse JSON texts into values, respectively.  The `tojson`
builtin differs from `tostring` in that `tostring` returns strings
unmodified, while `tojson` encodes strings as JSON strings.

<!-- jq-source-field:sections/3/entries/70/body:end -->

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

<span id="format-strings-and-escaping"></span>

### Format strings and escaping

<!-- jq-source-field:sections/3/entries/71/body:start -->

The `@foo` syntax is used to format and escape strings,
which is useful for building URLs, documents in a language
like HTML or XML, and so forth. `@foo` can be used as a
filter on its own, the possible escapings are:

* `@text`:

  Calls `tostring`, see that function for details.

* `@json`:

  Serializes the input as JSON.

* `@html`:

  Applies HTML/XML escaping, by mapping the characters
  `<>&'"` to their entity equivalents `&lt;`, `&gt;`,
  `&amp;`, `&apos;`, `&quot;`.

* `@uri`:

  Applies percent-encoding, by mapping all reserved URI
  characters to a `%XX` sequence.

* `@urid`:

  The inverse of `@uri`, applies percent-decoding, by mapping
  all `%XX` sequences to their corresponding URI characters.

* `@csv`:

  The input must be an array, and it is rendered as CSV
  with double quotes for strings, and quotes escaped by
  repetition.

* `@tsv`:

  The input must be an array, and it is rendered as TSV
  (tab-separated values). Each input array will be printed as
  a single line. Fields are separated by a single
  tab (ascii `0x09`). Input characters line-feed (ascii `0x0a`),
  carriage-return (ascii `0x0d`), tab (ascii `0x09`) and
  backslash (ascii `0x5c`) will be output as escape sequences
  `\n`, `\r`, `\t`, `\\` respectively.

* `@sh`:

  The input is escaped suitable for use in a command-line
  for a POSIX shell. If the input is an array, the output
  will be a series of space-separated strings.

* `@base64`:

  The input is converted to base64 as specified by RFC 4648.

* `@base64d`:

  The inverse of `@base64`, input is decoded as specified by RFC 4648.
  Note\: If the decoded string is not UTF-8, the results are undefined.

This syntax can be combined with string interpolation in a
useful way. You can follow a `@foo` token with a string
literal. The contents of the string literal will *not* be
escaped. However, all interpolations made inside that string
literal will be escaped. For instance,

    @uri "https://www.google.com/search?q=\(.search)"

will produce the following output for the input
`{"search":"what is jq?"}`:

    "https://www.google.com/search?q=what%20is%20jq%3F"

Note that the slashes, question mark, etc. in the URL are
not escaped, as they were part of the string literal.

<!-- jq-source-field:sections/3/entries/71/body:end -->

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

<span id="dates"></span>

### Dates

<!-- jq-source-field:sections/3/entries/72/body:start -->

jq provides some basic date handling functionality, with some
high-level and low-level builtins.  In all cases these
builtins deal exclusively with time in UTC.

The `fromdateiso8601` builtin parses datetimes in the ISO 8601
format to a number of seconds since the Unix epoch
(1970-01-01T00:00:00Z).  The `todateiso8601` builtin does the
inverse.

The `fromdate` builtin parses datetime strings.  Currently
`fromdate` only supports ISO 8601 datetime strings, but in the
future it will attempt to parse datetime strings in more
formats.

The `todate` builtin is an alias for `todateiso8601`.

The `now` builtin outputs the current time, in seconds since
the Unix epoch.

Low-level jq interfaces to the C-library time functions are
also provided: `strptime`, `strftime`, `strflocaltime`,
`mktime`, `gmtime`, and `localtime`.  Refer to your host
operating system's documentation for the format strings used
by `strptime` and `strftime`.  Note: these are not necessarily
stable interfaces in jq, particularly as to their localization
functionality.

The `gmtime` builtin consumes a number of seconds since the
Unix epoch and outputs a "broken down time" representation of
Greenwich Mean Time as an array of numbers representing
(in this order): the year, the month (zero-based), the day of
the month (one-based), the hour of the day, the minute of the
hour, the second of the minute, the day of the week, and the
day of the year -- all one-based unless otherwise stated.  The
day of the week number may be wrong on some systems for dates
before March 1st 1900, or after December 31 2099.

The `localtime` builtin works like the `gmtime` builtin, but
using the local timezone setting.

The `mktime` builtin consumes "broken down time"
representations of time output by `gmtime` and `strptime`.

The `strptime(fmt)` builtin parses input strings matching the
`fmt` argument.  The output is in the "broken down time"
representation consumed by `mktime` and output by `gmtime`.

The `strftime(fmt)` builtin formats a time (GMT) with the
given format.  The `strflocaltime` does the same, but using
the local timezone setting.

The format strings for `strptime` and `strftime` are described
in typical C library documentation.  The format string for ISO
8601 datetime is `"%Y-%m-%dT%H:%M:%SZ"`.

jq may not support some or all of this date functionality on
some systems. In particular, the `%u` and `%j` specifiers for
`strptime(fmt)` are not supported on macOS.

<!-- jq-source-field:sections/3/entries/72/body:end -->

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

<span id="sql-style-operators"></span>

### SQL-Style Operators

<!-- jq-source-field:sections/3/entries/73/body:start -->

jq provides a few SQL-style operators.

* `INDEX(stream; index_expression)`:

  This builtin produces an object whose keys are computed by
  the given index expression applied to each value from the
  given stream.

* `JOIN($idx; stream; idx_expr; join_expr)`:

  This builtin joins the values from the given stream to the
  given index.  The index's keys are computed by applying the
  given index expression to each value from the given stream.
  An array of the value in the stream and the corresponding
  value from the index is fed to the given join expression to
  produce each result.

* `JOIN($idx; stream; idx_expr)`:

  Same as `JOIN($idx; stream; idx_expr; .)`.

* `JOIN($idx; idx_expr)`:

  This builtin joins the input `.` to the given index, applying
  the given index expression to `.` to compute the index key.
  The join operation is as described above.

* `IN(s)`:

  This builtin outputs `true` if `.` appears in the given
  stream, otherwise it outputs `false`.

* `IN(source; s)`:

  This builtin outputs `true` if any value in the source stream
  appears in the second stream, otherwise it outputs `false`.

<!-- jq-source-field:sections/3/entries/73/body:end -->

<span id="builtins"></span>

### `builtins`

<!-- jq-source-field:sections/3/entries/74/body:start -->

Returns a list of all builtin functions in the format `name/arity`.
Since functions with the same name but different arities are considered
separate functions, `all/0`, `all/1`, and `all/2` would all be present
in the list.

<!-- jq-source-field:sections/3/entries/74/body:end -->


## Source and changes

Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.

[Original manual](https://jqlang.org/manual/v1.8/) · [Fixed source](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [License](https://creativecommons.org/licenses/by/3.0/) · [Original notices](/docs/jq/v1-8-2/en/02-license/01-original-notices/) · [Full legal code](/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/)
