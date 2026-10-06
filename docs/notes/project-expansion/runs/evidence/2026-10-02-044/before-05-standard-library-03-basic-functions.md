---
title: "Basic functions"
description: "Lua basic library reference"
---

# 6.2 – <a id="6.2"></a>Basic Functions

The basic library provides core functions to Lua. If you do not include this library in your application, you should check carefully whether you need to provide implementations for some of its facilities.

---

## <a id="pdf-assert"></a>`assert (v [, message])`

Raises an error if the value of its argument `v` is false (i.e., **nil** or **false**); otherwise, returns all its arguments. In case of error, `message` is the error object; when absent, it defaults to "`assertion failed!`"

---

## <a id="pdf-collectgarbage"></a>`collectgarbage ([opt [, arg]])`

This function is a generic interface to the garbage collector. It performs different functions according to its first argument, `opt`:

- **"`collect`"**: Performs a full garbage-collection cycle. This is the default option.
- **"`stop`"**: Stops automatic execution of the garbage collector. The collector will run only when explicitly invoked, until a call to restart it.
- **"`restart`"**: Restarts automatic execution of the garbage collector.
- **"`count`"**: Returns the total memory in use by Lua in Kbytes. The value has a fractional part, so that it multiplied by 1024 gives the exact number of bytes in use by Lua.
- **"`step`"**: Performs a garbage-collection step. This option may be followed by an extra argument, an integer with the step size.
  
  If the size is a positive `n`, the collector acts as if `n` new bytes have been allocated. If the size is zero, the collector performs a basic step. In incremental mode, a basic step corresponds to the current step size. In generational mode, a basic step performs a full minor collection or an incremental step, if the collector has scheduled one.
  
  In incremental mode, the function returns **true** if the step finished a collection cycle. In generational mode, the function returns **true** if the step finished a major collection.
- **"`isrunning`"**: Returns a boolean that tells whether the collector is running (i.e., not stopped).
- **"`incremental`"**: Changes the collector mode to incremental and returns the previous mode.
- **"`generational`"**: Changes the collector mode to generational and returns the previous mode.
- **"`param`"**: Changes and/or retrieves the values of a parameter of the collector. This option must be followed by one or two extra arguments: The name of the parameter being changed or retrieved (a string) and an optional new value for that parameter, an integer in the range *[0,100000]*. The first argument must have one of the following values:
  
  - **"`minormul`"**: The minor multiplier.
  - **"`majorminor`"**: The major-minor multiplier.
  - **"`minormajor`"**: The minor-major multiplier.
  - **"`pause`"**: The garbage-collector pause.
  - **"`stepmul`"**: The step multiplier.
  - **"`stepsize`"**: The step size.
  
  The call always returns the previous value of the parameter. If the call does not give a new value, the value is left unchanged.
  
  Lua stores these values in a compressed format, so, the value returned as the previous value may not be exactly the last value set.

See [§2.5](/docs/lua/v5-5-1/en/02-language/05-garbage-collection/#2.5) for more details about garbage collection and some of these options.

This function should not be called by a finalizer.

---

## <a id="pdf-dofile"></a>`dofile ([filename])`

Opens the named file and executes its content as a Lua chunk, returning all values returned by the chunk. When called without arguments,

`dofile`

executes the content of the standard input (

`stdin`

). In case of errors,

`dofile`

propagates the error to its caller. (That is,

`dofile`

does not run in protected mode.)

---

## <a id="pdf-error"></a>`error (message [, level])`

Raises an error (see

[§2.3](/docs/lua/v5-5-1/en/02-language/03-error-handling/#2.3)

) with

`message`

as the error object. This function never returns.

Usually, `error` adds some information about the error position at the beginning of the message, if the message is a string. The `level` argument specifies how to get the error position. With level 1 (the default), the error position is where the `error` function was called. Level 2 points the error to where the function that called `error` was called; and so on. Passing a level 0 avoids the addition of error position information to the message.

---

## <a id="pdf-_G"></a>`_G`

A global variable (not a function) that holds the global environment (see

[§2.2](/docs/lua/v5-5-1/en/02-language/02-scopes-variables-and-environments/#2.2)

). Lua itself does not use this variable; changing its value does not affect any environment, nor vice versa.

---

## <a id="pdf-getmetatable"></a>`getmetatable (object)`

If `object` does not have a metatable, returns **nil**. Otherwise, if the object's metatable has a `__metatable` field, returns the associated value. Otherwise, returns the metatable of the given object.

---

## <a id="pdf-ipairs"></a>`ipairs (t)`

Returns three values (an iterator function, the value `t`, and 0) so that the construction

```lua
     for i,v in ipairs(t) do body end
```

will iterate over the key–value pairs (`1,t[1]`), (`2,t[2]`),..., up to the first absent index.

---

## <a id="pdf-load"></a>`load (chunk [, chunkname [, mode [, env]]])`

Loads a chunk.

If `chunk` is a string, the chunk is this string. If `chunk` is a function, `load` calls it repeatedly to get the chunk pieces. Each call to `chunk` must return a string that concatenates with previous results. A return of an empty string, **nil**, or no value signals the end of the chunk.

If there are no syntactic errors, `load` returns the compiled chunk as a function; otherwise, it returns **fail** plus the error message.

When you load a main chunk, the resulting function will always have exactly one upvalue, the `_ENV` variable (see [§2.2](/docs/lua/v5-5-1/en/02-language/02-scopes-variables-and-environments/#2.2)). However, when you load a binary chunk created from a function (see [`string.dump`](/docs/lua/v5-5-1/en/05-standard-library/06-string-manipulation/#pdf-string.dump)), the resulting function can have an arbitrary number of upvalues, and there is no guarantee that its first upvalue will be the `_ENV` variable. (A non-main function may not even have an `_ENV` upvalue.)

Regardless, if the resulting function has any upvalues, its first upvalue is set to the value of `env`, if that parameter is given, or to the value of the global environment. Other upvalues are initialized with **nil**. All upvalues are fresh, that is, they are not shared with any other function.

`chunkname` is used as the name of the chunk for error messages and debug information (see [§4.7](/docs/lua/v5-5-1/en/03-c-api/17-debug-interface/#4.7)). When absent, it defaults to `chunk`, if `chunk` is a string, or to "`=(load)`" otherwise.

The string `mode` controls whether the chunk can be text or binary (that is, a precompiled chunk). It may be the string "`b`" (only binary chunks), "`t`" (only text chunks), or "`bt`" (both binary and text). The default is "`bt`".

Lua does not check the consistency of binary chunks. Maliciously crafted binary chunks can crash the interpreter. You can use the `mode` parameter to prevent loading binary chunks.

---

## <a id="pdf-loadfile"></a>`loadfile ([filename [, mode [, env]]])`

Similar to [`load`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-load), but gets the chunk from file `filename` or from the standard input, if no file name is given.

---

## <a id="pdf-next"></a>`next (table [, index])`

Allows a program to traverse all fields of a table. Its first argument is a table and its second argument is an index in this table. A call to `next` returns the next index of the table and its associated value. When called with **nil** as its second argument, `next` returns an initial index and its associated value. When called with the last index, or with **nil** in an empty table, `next` returns **nil**. If the second argument is absent, then it is interpreted as **nil**. In particular, you can use `next(t)` to check whether a table is empty.

The order in which the indices are enumerated is not specified, *even for numeric indices*. (To traverse a table in numerical order, use a numerical **for**.)

You should not assign any value to a non-existent field in a table during its traversal. You may however modify existing fields. In particular, you may set existing fields to nil.

---

## <a id="pdf-pairs"></a>`pairs (t)`

If `t` has a metamethod `__pairs`, calls it with `t` as argument and returns the first four results from the call.

Otherwise, returns the [`next`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-next) function, the table `t`, plus two **nil** values, so that the construction

```lua
     for k,v in pairs(t) do body end
```

will iterate over all key–value pairs of table `t`.

See function [`next`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-next) for more details about the traversal.

---

## <a id="pdf-pcall"></a>`pcall (f [, arg1, ···])`

Calls the function `f` with the given arguments in *protected mode*. This means that any error inside `f` is not propagated; instead, `pcall` catches the error and returns a status code. Its first result is the status code (a boolean), which is **true** if the call succeeds without errors. In such case, `pcall` also returns all results from the call, after this first result. In case of any error, `pcall` returns **false** plus the error object. Note that errors caught by `pcall` do not call a message handler.

---

## <a id="pdf-print"></a>`print (···)`

Receives any number of arguments and prints their values to

`stdout`

, converting each argument to a string following the same rules of

[`tostring`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-tostring)

.

The function `print` is not intended for formatted output, but only as a quick way to show a value, for instance for debugging. For complete control over the output, use [`string.format`](/docs/lua/v5-5-1/en/05-standard-library/06-string-manipulation/#pdf-string.format) and [`io.write`](/docs/lua/v5-5-1/en/05-standard-library/10-input-and-output/#pdf-io.write).

---

## <a id="pdf-rawequal"></a>`rawequal (v1, v2)`

Checks whether

`v1`

is equal to

`v2`

, without invoking the

`__eq`

metamethod. Returns a boolean.

---

## <a id="pdf-rawget"></a>`rawget (table, index)`

Gets the real value of

`table[index]`

, without using the

`__index`

metavalue.

`table`

must be a table;

`index`

may be any value.

---

## <a id="pdf-rawlen"></a>`rawlen (v)`

Returns the length of the object

`v`

, which must be a table or a string, without invoking the

`__len`

metamethod. Returns an integer.

---

## <a id="pdf-rawset"></a>`rawset (table, index, value)`

Sets the real value of

`table[index]`

to

`value`

, without using the

`__newindex`

metavalue.

`table`

must be a table,

`index`

any value different from

**nil**

and NaN, and

`value`

any Lua value.

This function returns `table`.

---

## <a id="pdf-select"></a>`select (index, ···)`

If `index` is a number, returns all arguments after argument number `index`; a negative number indexes from the end (-1 is the last argument). Otherwise, `index` must be the string `"#"`, and `select` returns the total number of extra arguments it received.

---

## <a id="pdf-setmetatable"></a>`setmetatable (table, metatable)`

Sets the metatable for the given table. If `metatable` is **nil**, removes the metatable of the given table. If the original metatable has a `__metatable` field, raises an error.

This function returns `table`.

To change the metatable of other types from Lua code, you must use the debug library ([§6.11](/docs/lua/v5-5-1/en/05-standard-library/12-debug-library/#6.11)).

---

## <a id="pdf-tonumber"></a>`tonumber (e [, base])`

When called with no `base`, `tonumber` tries to convert its argument to a number. If the argument is already a number or a string convertible to a number, then `tonumber` returns this number; otherwise, it returns **fail**.

The conversion of strings can result in integers or floats, according to the lexical conventions of Lua (see [§3.1](/docs/lua/v5-5-1/en/02-language/07-lexical-conventions/#3.1)). The string may have leading and trailing spaces and a sign.

When called with `base`, then `e` must be a string to be interpreted as an integer numeral in that base. The base may be any integer between 2 and 36, inclusive. In bases above 10, the letter '`A`' (in either upper or lower case) represents 10, '`B`' represents 11, and so forth, with '`Z`' representing 35. If the string `e` is not a valid numeral in the given base, the function returns **fail**.

---

## <a id="pdf-tostring"></a>`tostring (v)`

Receives a value of any type and converts it to a string in a human-readable format.

If the metatable of `v` has a `__tostring` field, then `tostring` calls the corresponding value with `v` as argument, and uses the result of the call as its result. Otherwise, if the metatable of `v` has a `__name` field with a string value, `tostring` may use that string in its final result.

For complete control of how numbers are converted, use [`string.format`](/docs/lua/v5-5-1/en/05-standard-library/06-string-manipulation/#pdf-string.format).

---

## <a id="pdf-type"></a>`type (v)`

Returns the type of its only argument, coded as a string. The possible results of this function are "`nil`" (a string, not the value **nil**), "`number`", "`string`", "`boolean`", "`table`", "`function`", "`thread`", and "`userdata`".

---

## <a id="pdf-_VERSION"></a>`_VERSION`

A global variable (not a function) that holds a string containing the running Lua version. The current value of this variable is "`Lua 5.5`".

---

## <a id="pdf-warn"></a>`warn (msg1, ···)`

Emits a warning with a message composed by the concatenation of all its arguments (which should be strings).

By convention, a one-piece message starting with '`@`' is intended to be a *control message*, which is a message to the warning system itself. In particular, the standard warning function in Lua recognizes the control messages "`@off`", to stop the emission of warnings, and "`@on`", to (re)start the emission; it ignores unknown control messages.

---

## <a id="pdf-xpcall"></a>`xpcall (f, msgh [, arg1, ···])`

This function is similar to [`pcall`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-pcall), except that it sets a new message handler `msgh`.
