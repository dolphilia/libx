---
title: "Variables"
description: "Lua variable forms and indexing semantics"
---

# 3.2 – <a id="3.2"></a>Variables

Variables are places that store values. There are three kinds of variables in Lua: global variables, local variables, and table fields.

A single name can denote a global variable or a local variable (or a function's formal parameter, which is a particular kind of local variable) (see [§2.2](/docs/lua/v5-5-1/en/02-language/02-scopes-variables-and-environments/#2.2)):

```lua
	var ::= Name
```

Name denotes identifiers (see [§3.1](/docs/lua/v5-5-1/en/02-language/07-lexical-conventions/#3.1)).

Because variables are *lexically scoped*, local variables can be freely accessed by functions defined inside their scope (see [§2.2](/docs/lua/v5-5-1/en/02-language/02-scopes-variables-and-environments/#2.2)).

Before the first assignment to a variable, its value is **nil**.

Square brackets are used to index a table:

```lua
	var ::= prefixexp ‘[’ exp ‘]’
```

The meaning of accesses to table fields can be changed via metatables (see [§2.4](/docs/lua/v5-5-1/en/02-language/04-metatables-and-metamethods/#2.4)).

The syntax `var.Name` is just syntactic sugar for `var["Name"]`:

```lua
	var ::= prefixexp ‘.’ Name
```

An access to a global variable `x` is equivalent to `_ENV.x`.
