---
title: "Regular expressions"
---

<span id="regular-expressions"></span>

<!-- jq-source-field:sections/5/title:start -->
Regular expressions
<!-- jq-source-field:sections/5/title:end -->
<!-- jq-source-field:sections/5/body:start -->

jq uses the
[Oniguruma regular expression library](https://github.com/kkos/oniguruma/blob/master/doc/RE),
as do PHP, TextMate, Sublime Text, etc, so the
description here will focus on jq specifics.

Oniguruma supports several flavors of regular expression, so it is important to know
that jq uses the ["Perl NG" (Perl with named groups)](https://github.com/kkos/oniguruma/blob/master/doc/SYNTAX.md) flavor.

The jq regex filters are defined so that they can be used using
one of these patterns:

    STRING | FILTER(REGEX)
    STRING | FILTER(REGEX; FLAGS)
    STRING | FILTER([REGEX])
    STRING | FILTER([REGEX, FLAGS])

where:

* STRING, REGEX, and FLAGS are jq strings and subject to jq string interpolation;
* REGEX, after string interpolation, should be a valid regular expression;
* FILTER is one of `test`, `match`, or `capture`, as described below.

Since REGEX must evaluate to a JSON string, some characters that are needed
to form a regular expression must be escaped. For example, the regular expression
`\s` signifying a whitespace character would be written as `"\\s"`.

FLAGS is a string consisting of one of more of the supported flags:

* `g` - Global search (find all matches, not just the first)
* `i` - Case insensitive search
* `m` - Multi line mode (`.` will match newlines)
* `n` - Ignore empty matches
* `p` - Both s and m modes are enabled
* `s` - Single line mode (`^` -> `\A`, `$` -> `\Z`)
* `l` - Find longest possible matches
* `x` - Extended regex format (ignore whitespace and comments)

To match a whitespace with the `x` flag, use `\s`, e.g.

    jq -n '"a b" | test("a\\sb"; "x")'

Note that certain flags may also be specified within REGEX, e.g.

    jq -n '("test", "TEst", "teST", "TEST") | test("(?i)te(?-i)st")'

evaluates to: `true`, `true`, `false`, `false`.

<!-- jq-source-field:sections/5/body:end -->

<span id="test"></span>

### `test(val)`, `test(regex; flags)`

<!-- jq-source-field:sections/5/entries/0/body:start -->

Like `match`, but does not return match objects, only `true` or `false`
for whether or not the regex matches the input.

<!-- jq-source-field:sections/5/entries/0/body:end -->

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

<span id="match"></span>

### `match(val)`, `match(regex; flags)`

<!-- jq-source-field:sections/5/entries/1/body:start -->

**match** outputs an object for each match it finds.  Matches have
the following fields:

* `offset` - offset in UTF-8 codepoints from the beginning of the input
* `length` - length in UTF-8 codepoints of the match
* `string` - the string that it matched
* `captures` - an array of objects representing capturing groups.

Capturing group objects have the following fields:

* `offset` - offset in UTF-8 codepoints from the beginning of the input
* `length` - length in UTF-8 codepoints of this capturing group
* `string` - the string that was captured
* `name` - the name of the capturing group (or `null` if it was unnamed)

Capturing groups that did not match anything return an offset of -1

<!-- jq-source-field:sections/5/entries/1/body:end -->

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

<span id="capture"></span>

### `capture(val)`, `capture(regex; flags)`

<!-- jq-source-field:sections/5/entries/2/body:start -->

Collects the named captures in a JSON object, with the name
of each capture as the key, and the matched string as the
corresponding value.

<!-- jq-source-field:sections/5/entries/2/body:end -->

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

<span id="scan"></span>

### `scan(regex)`, `scan(regex; flags)`

<!-- jq-source-field:sections/5/entries/3/body:start -->

Emit a stream of the non-overlapping substrings of the input
that match the regex in accordance with the flags, if any
have been specified.  If there is no match, the stream is empty.
To capture all the matches for each input string, use the idiom
`[ expr ]`, e.g. `[ scan(regex) ]`.  If the regex contains capturing
groups, the filter emits a stream of arrays, each of which contains
the captured strings.

<!-- jq-source-field:sections/5/entries/3/body:end -->

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

<span id="split-2"></span>

### `split(regex; flags)`

<!-- jq-source-field:sections/5/entries/4/body:start -->

Splits an input string on each regex match.

For backwards compatibility, when called with a single argument,
`split` splits on a string, not a regex.

<!-- jq-source-field:sections/5/entries/4/body:end -->

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

<span id="splits"></span>

### `splits(regex)`, `splits(regex; flags)`

<!-- jq-source-field:sections/5/entries/5/body:start -->

These provide the same results as their `split` counterparts,
but as a stream instead of an array.

<!-- jq-source-field:sections/5/entries/5/body:end -->

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

<span id="sub"></span>

### `sub(regex; tostring)`, `sub(regex; tostring; flags)`

<!-- jq-source-field:sections/5/entries/6/body:start -->

Emit the string obtained by replacing the first match of
regex in the input string with `tostring`, after
interpolation.  `tostring` should be a jq string or a stream
of such strings, each of which may contain references to
named captures. The named captures are, in effect, presented
as a JSON object (as constructed by `capture`) to
`tostring`, so a reference to a captured variable named "x"
would take the form: `"\(.x)"`.

<!-- jq-source-field:sections/5/entries/6/body:end -->

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

<span id="gsub"></span>

### `gsub(regex; tostring)`, `gsub(regex; tostring; flags)`

<!-- jq-source-field:sections/5/entries/7/body:start -->

`gsub` is like `sub` but all the non-overlapping occurrences of the regex are
replaced by `tostring`, after interpolation. If the second argument is a stream
of jq strings, then `gsub` will produce a corresponding stream of JSON strings.

<!-- jq-source-field:sections/5/entries/7/body:end -->

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
