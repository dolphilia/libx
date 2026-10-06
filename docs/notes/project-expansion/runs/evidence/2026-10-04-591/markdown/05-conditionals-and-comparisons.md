---
title: "Conditionals and Comparisons"
---

<span id="conditionals-and-comparisons"></span>

<!-- jq-source-field:sections/4/title:start -->
Conditionals and Comparisons
<!-- jq-source-field:sections/4/title:end -->

<span id="==-!="></span>

### `==`, `!=`

<!-- jq-source-field:sections/4/entries/0/body:start -->

The expression 'a == b' will produce 'true' if the results of evaluating
a and b are equal (that is, if they represent equivalent JSON values) and
'false' otherwise. In particular, strings are never considered equal
to numbers.  In checking for the equality of JSON objects, the ordering of keys
is irrelevant.  If you're coming from JavaScript, please note that jq's `==` is like
JavaScript's `===`, the "strict equality" operator.

!= is "not equal", and 'a != b' returns the opposite value of 'a == b'

<!-- jq-source-field:sections/4/entries/0/body:end -->

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

<span id="if-then-else-end"></span>

### if-then-else-end

<!-- jq-source-field:sections/4/entries/1/body:start -->

`if A then B else C end` will act the same as `B` if `A`
produces a value other than false or null, but act the same
as `C` otherwise.

`if A then B end` is the same as `if A then B else .  end`.
That is, the `else` branch is optional, and if absent is the
same as `.`. This also applies to `elif` with absent ending `else` branch.

Checking for false or null is a simpler notion of
"truthiness" than is found in JavaScript or Python, but it
means that you'll sometimes have to be more explicit about
the condition you want.  You can't test whether, e.g. a
string is empty using `if .name then A else B end`; you'll
need something like `if .name == "" then A else B end` instead.

If the condition `A` produces multiple results, then `B` is evaluated
once for each result that is not false or null, and `C` is evaluated
once for each false or null.

More cases can be added to an if using `elif A then B` syntax.

<!-- jq-source-field:sections/4/entries/1/body:end -->

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

<span id=">->=-<=-<"></span>

### `>`, `>=`, `<=`, `<`

<!-- jq-source-field:sections/4/entries/2/body:start -->

The comparison operators `>`, `>=`, `<=`, `<` return whether
their left argument is greater than, greater than or equal
to, less than or equal to or less than their right argument
(respectively).

The ordering is the same as that described for `sort`, above.

<!-- jq-source-field:sections/4/entries/2/body:end -->

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

<span id="and-or-not"></span>

### `and`, `or`, `not`

<!-- jq-source-field:sections/4/entries/3/body:start -->

jq supports the normal Boolean operators `and`, `or`, `not`.
They have the same standard of truth as if expressions -
`false` and `null` are considered "false values", and
anything else is a "true value".

If an operand of one of these operators produces multiple
results, the operator itself will produce a result for each input.

`not` is in fact a builtin function rather than an operator,
so it is called as a filter to which things can be piped
rather than with special syntax, as in `.foo and .bar |
not`.

These three only produce the values `true` and `false`, and
so are only useful for genuine Boolean operations, rather
than the common Perl/Python/Ruby idiom of
"value_that_may_be_null or default". If you want to use this
form of "or", picking between two values rather than
evaluating a condition, see the `//` operator below.

<!-- jq-source-field:sections/4/entries/3/body:end -->

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

<span id="alternative-operator"></span>

### Alternative operator: `//`

<!-- jq-source-field:sections/4/entries/4/body:start -->

The `//` operator produces all the values of its left-hand
side that are neither `false` nor `null`. If the
left-hand side produces no values other than `false` or
`null`, then `//` produces all the values of its right-hand
side.

A filter of the form `a // b` produces all the results of
`a` that are not `false` or `null`.  If `a` produces no
results, or no results other than `false` or `null`, then `a
// b` produces the results of `b`.

This is useful for providing defaults: `.foo // 1` will
evaluate to `1` if there's no `.foo` element in the
input. It's similar to how `or` is sometimes used in Python
(jq's `or` operator is reserved for strictly Boolean
operations).

Note: `some_generator // defaults_here` is not the same
as `some_generator | . // defaults_here`.  The latter will
produce default values for all non-`false`, non-`null`
values of the left-hand side, while the former will not.
Precedence rules can make this confusing.  For example, in
`false, 1 // 2` the left-hand side of `//` is `1`, not
`false, 1` -- `false, 1 // 2` parses the same way as `false,
(1 // 2)`.  In `(false, null, 1) | . // 42` the left-hand
side of `//` is `.`, which always produces just one value,
while in `(false, null, 1) // 42` the left-hand side is a
generator of three values, and since it produces a
value other `false` and `null`, the default `42` is not
produced.

<!-- jq-source-field:sections/4/entries/4/body:end -->

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

<span id="try-catch"></span>

### try-catch

<!-- jq-source-field:sections/4/entries/5/body:start -->

Errors can be caught by using `try EXP catch EXP`.  The first
expression is executed, and if it fails then the second is
executed with the error message.  The output of the handler,
if any, is output as if it had been the output of the
expression to try.

The `try EXP` form uses `empty` as the exception handler.

<!-- jq-source-field:sections/4/entries/5/body:end -->

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

<span id="breaking-out-of-control-structures"></span>

### Breaking out of control structures

<!-- jq-source-field:sections/4/entries/6/body:start -->

A convenient use of try/catch is to break out of control
structures like `reduce`, `foreach`, `while`, and so on.

For example:

    # Repeat an expression until it raises "break" as an
    # error, then stop repeating without re-raising the error.
    # But if the error caught is not "break" then re-raise it.
    try repeat(exp) catch if .=="break" then empty else error

jq has a syntax for named lexical labels to "break" or "go (back) to":

    label $out | ... break $out ...

The `break $label_name` expression will cause the program to
act as though the nearest (to the left) `label $label_name`
produced `empty`.

The relationship between the `break` and corresponding `label`
is lexical: the label has to be "visible" from the break.

To break out of a `reduce`, for example:

    label $out | reduce .[] as $item (null; if .==false then break $out else ... end)

The following jq program produces a syntax error:

    break $out

because no label `$out` is visible.

<!-- jq-source-field:sections/4/entries/6/body:end -->

<span id="error-suppression-optional-operator"></span>

### Error Suppression / Optional Operator: `?`

<!-- jq-source-field:sections/4/entries/7/body:start -->

The `?` operator, used as `EXP?`, is shorthand for `try EXP`.

<!-- jq-source-field:sections/4/entries/7/body:end -->

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
