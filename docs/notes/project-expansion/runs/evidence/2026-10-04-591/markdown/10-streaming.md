---
title: "Streaming"
---

<span id="streaming"></span>

<!-- jq-source-field:sections/9/title:start -->
Streaming
<!-- jq-source-field:sections/9/title:end -->
<!-- jq-source-field:sections/9/body:start -->

With the `--stream` option jq can parse input texts in a streaming
fashion, allowing jq programs to start processing large JSON texts
immediately rather than after the parse completes.  If you have a
single JSON text that is 1GB in size, streaming it will allow you
to process it much more quickly.

However, streaming isn't easy to deal with as the jq program will
have `[<path>, <leaf-value>]` (and a few other forms) as inputs.

Several builtins are provided to make handling streams easier.

The examples below use the streamed form of `["a",["b"]]`, which is
`[[0],"a"],[[1,0],"b"],[[1,0]],[[1]]`.

Streaming forms include `[<path>, <leaf-value>]` (to indicate any
scalar value, empty array, or empty object), and `[<path>]` (to
indicate the end of an array or object).  Future versions of jq
run with `--stream` and `--seq` may output additional forms such
as `["error message"]` when an input text fails to parse.

<!-- jq-source-field:sections/9/body:end -->

<span id="truncate_stream"></span>

### `truncate_stream(stream_expression)`

<!-- jq-source-field:sections/9/entries/0/body:start -->

Consumes a number as input and truncates the corresponding
number of path elements from the left of the outputs of the
given streaming expression.

<!-- jq-source-field:sections/9/entries/0/body:end -->

#### Example 1

Command

```sh
jq 'truncate_stream([[0],"a"],[[1,0],"b"],[[1,0]],[[1]])'
```

Input

```text
1
```

Output 1

```text
[[0],"b"]
```

Output 2

```text
[[0]]
```

<span id="fromstream"></span>

### `fromstream(stream_expression)`

<!-- jq-source-field:sections/9/entries/1/body:start -->

Outputs values corresponding to the stream expression's
outputs.

<!-- jq-source-field:sections/9/entries/1/body:end -->

#### Example 1

Command

```sh
jq 'fromstream(1|truncate_stream([[0],"a"],[[1,0],"b"],[[1,0]],[[1]]))'
```

Input

```text
null
```

Output 1

```text
["b"]
```

<span id="tostream"></span>

### `tostream`

<!-- jq-source-field:sections/9/entries/2/body:start -->

The `tostream` builtin outputs the streamed form of its input.

<!-- jq-source-field:sections/9/entries/2/body:end -->

#### Example 1

Command

```sh
jq '. as $dot|fromstream($dot|tostream)|.==$dot'
```

Input

```text
[0,[1,{"a":1},{"b":2}]]
```

Output 1

```text
true
```
