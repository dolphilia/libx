---
title: "Expressions"
description: "Operators, constructors, calls and function definitions"
licenseSource: "lua-5.5.1"
---

# 3.4 – <a id="3.4"></a>Expressions

The basic expressions in Lua are the following:

```lua
	exp ::= prefixexp
	exp ::= nil | false | true
	exp ::= Numeral
	exp ::= LiteralString
	exp ::= functiondef
	exp ::= tableconstructor
	exp ::= ‘...’
	exp ::= exp binop exp
	exp ::= unop exp
	prefixexp ::= var | functioncall | ‘(’ exp ‘)’
```

Numerals and literal strings are explained in [§3.1](/docs/lua/v5-5-1/en/02-language/07-lexical-conventions/#3.1); variables are explained in [§3.2](/docs/lua/v5-5-1/en/02-language/08-variables/#3.2); function definitions are explained in [§3.4.11](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.11); function calls are explained in [§3.4.10](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.10); table constructors are explained in [§3.4.9](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.9). Vararg expressions, denoted by three dots ('`...`'), can only be used when directly inside a variadic function; they are explained in [§3.4.11](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.11).

Binary operators comprise arithmetic operators (see [§3.4.1](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.1)), bitwise operators (see [§3.4.2](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.2)), relational operators (see [§3.4.4](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.4)), logical operators (see [§3.4.5](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.5)), and the concatenation operator (see [§3.4.6](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.6)). Unary operators comprise the unary minus (see [§3.4.1](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.1)), the unary bitwise NOT (see [§3.4.2](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.2)), the unary logical **not** (see [§3.4.5](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.5)), and the unary *length operator* (see [§3.4.7](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.7)).

## 3.4.1 – <a id="3.4.1"></a>Arithmetic Operators

Lua supports the following arithmetic operators:

- **`+`**: addition
- **`-`**: subtraction
- **`*`**: multiplication
- **`/`**: float division
- **`//`**: floor division
- **`%`**: modulo
- **`^`**: exponentiation
- **`-`**: unary minus

With the exception of exponentiation and float division, the arithmetic operators work as follows: If both operands are integers, the operation is performed over integers and the result is an integer. Otherwise, if both operands are numbers, then they are converted to floats, the operation is performed following the machine's rules for floating-point arithmetic (usually the IEEE 754 standard), and the result is a float. (The string library coerces strings to numbers in arithmetic operations; see [§3.4.3](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.3) for details.)

Exponentiation and float division (`/`) always convert their operands to floats and the result is always a float. Exponentiation uses the ISO C function `pow`, so that it works for non-integer exponents too.

Floor division (`//`) is a division that rounds the quotient towards minus infinity, resulting in the floor of the division of its operands.

Modulo is defined as the remainder of a division that rounds the quotient towards minus infinity (floor division).

In case of overflows in integer arithmetic, all operations *wrap around*.

## 3.4.2 – <a id="3.4.2"></a>Bitwise Operators

Lua supports the following bitwise operators:

- **`&`**: bitwise AND
- **`|`**: bitwise OR
- **`~`**: bitwise exclusive OR
- **`>>`**: right shift
- **`<<`**: left shift
- **`~`**: unary bitwise NOT

All bitwise operations convert its operands to integers (see [§3.4.3](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.3)), operate on all bits of those integers, and result in an integer.

Both right and left shifts fill the vacant bits with zeros. Negative displacements shift to the other direction; displacements with absolute values equal to or higher than the number of bits in an integer result in zero (as all bits are shifted out).

## 3.4.3 – <a id="3.4.3"></a>Coercions and Conversions

Lua provides some automatic conversions between some types and representations at run time. Bitwise operators always convert float operands to integers. Exponentiation and float division always convert integer operands to floats. All other arithmetic operations applied to mixed numbers (integers and floats) convert the integer operand to a float. The C API also converts both integers to floats and floats to integers, as needed. Moreover, string concatenation accepts numbers as arguments, besides strings.

In a conversion from integer to float, if the integer value has an exact representation as a float, that is the result. Otherwise, the conversion gets the nearest higher or the nearest lower representable value. This kind of conversion never fails.

The conversion from float to integer checks whether the float has an exact representation as an integer (that is, the float has an integral value and it is in the range of integer representation). If it does, that representation is the result. Otherwise, the conversion fails.

Several places in Lua coerce strings to numbers when necessary. In particular, the string library sets metamethods that try to coerce strings to numbers in all arithmetic operations. If the conversion fails, the library calls the metamethod of the other operand (if present) or it raises an error. Note that bitwise operators do not do this coercion.

It is always a good practice not to rely on the implicit coercions from strings to numbers, as they are not always applied; in particular, `"1"==1` is false and `"1"<1` raises an error (see [§3.4.4](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.4)). These coercions exist mainly for compatibility and may be removed in future versions of the language.

A string is converted to an integer or a float following its syntax and the rules of the Lua lexer. The string may have also leading and trailing whitespaces and a sign. All conversions from strings to numbers accept both a dot and the current locale mark as the radix character. (The Lua lexer, however, accepts only a dot.) If the string is not a valid numeral, the conversion fails. If necessary, the result of this first step is then converted to a specific number subtype following the previous rules for conversions between floats and integers.

The conversion from numbers to strings uses a non-specified human-readable format. To convert numbers to strings in any specific way, use the function [`string.format`](/docs/lua/v5-5-1/en/05-standard-library/06-string-manipulation/#pdf-string.format).

## 3.4.4 – <a id="3.4.4"></a>Relational Operators

Lua supports the following relational operators:

- **`==`**: equality
- **`~=`**: inequality
- **`<`**: less than
- **`>`**: greater than
- **`<=`**: less or equal
- **`>=`**: greater or equal

These operators always result in **false** or **true**.

Equality (`==`) first compares the type of its operands. If the types are different, then the result is **false**. Otherwise, the values of the operands are compared. Strings are equal if they have the same byte content. Numbers are equal if they denote the same mathematical value.

Tables, userdata, and threads are compared by reference: two objects are considered equal only if they are the same object. Every time you create a new object (a table, a userdata, or a thread), this new object is different from any previously existing object. A function is always equal to itself. Functions with any detectable difference (different behavior, different definition) are always different. Functions created at different times but with no detectable differences may be classified as equal or not (depending on internal caching details).

You can change the way that Lua compares tables and userdata by using the `__eq` metamethod (see [§2.4](/docs/lua/v5-5-1/en/02-language/04-metatables-and-metamethods/#2.4)).

Equality comparisons do not convert strings to numbers or vice versa. Thus, `"0"==0` evaluates to **false**, and `t[0]` and `t["0"]` denote different entries in a table.

The operator `~=` is exactly the negation of equality (`==`).

The order operators work as follows. If both arguments are numbers, then they are compared according to their mathematical values, regardless of their subtypes. Otherwise, if both arguments are strings, then their values are compared according to the current locale. Otherwise, Lua tries to call the `__lt` or the `__le` metamethod (see [§2.4](/docs/lua/v5-5-1/en/02-language/04-metatables-and-metamethods/#2.4)). A comparison `a > b` is translated to `b < a` and `a >= b` is translated to `b <= a`.

Following the IEEE 754 standard, the special value NaN is considered neither less than, nor equal to, nor greater than any value, including itself.

## 3.4.5 – <a id="3.4.5"></a>Logical Operators

The logical operators in Lua are **and**, **or**, and **not**. Like the control structures (see [§3.3.4](/docs/lua/v5-5-1/en/02-language/09-statements/#3.3.4)), all logical operators consider both **false** and **nil** as false and anything else as true.

The negation operator **not** always returns **false** or **true**. The conjunction operator **and** returns its first argument if this value is **false** or **nil**; otherwise, **and** returns its second argument. The disjunction operator **or** returns its first argument if this value is different from **nil** and **false**; otherwise, **or** returns its second argument. Both **and** and **or** use short-circuit evaluation; that is, the second operand is evaluated only if necessary. Here are some examples:

```lua
     10 or 20            --> 10
     10 or error()       --> 10
     nil or "a"          --> "a"
     nil and 10          --> nil
     false and error()   --> false
     false and nil       --> false
     false or nil        --> nil
     10 and 20           --> 20
```

## 3.4.6 – <a id="3.4.6"></a>Concatenation

The string concatenation operator in Lua is denoted by two dots ('`..`'). If both operands are strings or numbers, then the numbers are converted to strings in a non-specified format (see [§3.4.3](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.3)). Otherwise, the `__concat` metamethod is called (see [§2.4](/docs/lua/v5-5-1/en/02-language/04-metatables-and-metamethods/#2.4)).

## 3.4.7 – <a id="3.4.7"></a>The Length Operator

The length operator is denoted by the unary prefix operator `#`.

The length of a string is its number of bytes. (That is the usual meaning of string length when each character is one byte.)

The length operator applied on a table returns a border in that table. A *border* in a table `t` is any non-negative integer that satisfies the following condition:

```lua
     (border == 0 or t[border] ~= nil) and
     (t[border + 1] == nil or border == math.maxinteger)
```

In words, a border is any positive integer index present in the table that is followed by an absent index, plus two limit cases: zero, when index 1 is absent; and the maximum value for an integer, when that index is present. Note that keys that are not positive integers do not interfere with borders.

A table with exactly one border is called a *sequence*. For instance, the table `{10,20,30,40,50}` is a sequence, as it has only one border (5). The table `{10,20,30,nil,50}` has two borders (3 and 5), and therefore it is not a sequence. (The **nil** at index 4 is called a *hole*.) The table `{nil,20,30,nil,nil,60,nil}` has three borders (0, 3, and 6), so it is not a sequence, too. The table `{}` is a sequence with border 0.

When `t` is a sequence, `#t` returns its only border, which corresponds to the intuitive notion of the length of the sequence. When `t` is not a sequence, `#t` can return any of its borders. (The exact one depends on details of the internal representation of the table, which in turn can depend on how the table was populated and the memory addresses of its non-numeric keys.)

The computation of the length of a table has a guaranteed worst time of *O(log n)*, where *n* is the largest integer key in the table.

A program can modify the behavior of the length operator for any value but strings through the `__len` metamethod (see [§2.4](/docs/lua/v5-5-1/en/02-language/04-metatables-and-metamethods/#2.4)).

## 3.4.8 – <a id="3.4.8"></a>Precedence

Operator precedence in Lua follows the table below, from lower to higher priority:

```lua
     or
     and
     <     >     <=    >=    ~=    ==
     |
     ~
     &
     <<    >>
     ..
     +     -
     *     /     //    %
     unary operators (not   #     -     ~)
     ^
```

As usual, you can use parentheses to change the precedences of an expression. The concatenation ('`..`') and exponentiation ('`^`') operators are right associative. All other binary operators are left associative.

## 3.4.9 – <a id="3.4.9"></a>Table Constructors

Table constructors are expressions that create tables. Every time a constructor is evaluated, a new table is created. A constructor can be used to create an empty table or to create a table and initialize some of its fields. The general syntax for constructors is

```lua
	tableconstructor ::= ‘{’ [fieldlist] ‘}’
	fieldlist ::= field {fieldsep field} [fieldsep]
	field ::= ‘[’ exp ‘]’ ‘=’ exp | Name ‘=’ exp | exp
	fieldsep ::= ‘,’ | ‘;’
```

Each field of the form `[exp1] = exp2` adds to the new table an entry with key `exp1` and value `exp2`. A field of the form `name = exp` is equivalent to `["name"] = exp`. Fields of the form `exp` are equivalent to `[i] = exp`, where `i` are consecutive integers starting with 1; fields in the other formats do not affect this counting. For example,

```lua
     a = { [f(1)] = g; "x", "y"; x = 1, f(x), [30] = 23; 45 }
```

is equivalent to

```lua
     do
       local t = {}
       t[f(1)] = g
       t[1] = "x"         -- 1st exp
       t[2] = "y"         -- 2nd exp
       t.x = 1            -- t["x"] = 1
       t[3] = f(x)        -- 3rd exp
       t[30] = 23
       t[4] = 45          -- 4th exp
       a = t
     end
```

The order of the assignments in a constructor is undefined. (This order would be relevant only when there are repeated keys.)

If the last field in the list has the form `exp` and the expression is a multires expression, then all values returned by this expression enter the list consecutively (see [§3.4.12](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.12)).

The field list can have an optional trailing separator, as a convenience for machine-generated code.

## 3.4.10 – <a id="3.4.10"></a>Function Calls

A function call in Lua has the following syntax:

```lua
	functioncall ::= prefixexp args
```

In a function call, first prefixexp and args are evaluated. If the value of prefixexp has type *function*, then this function is called with the given arguments. Otherwise, if present, the prefixexp `__call` metamethod is called: its first argument is the value of prefixexp, followed by the original call arguments (see [§2.4](/docs/lua/v5-5-1/en/02-language/04-metatables-and-metamethods/#2.4)).

The form

```lua
	functioncall ::= prefixexp ‘:’ Name args
```

can be used to emulate methods. A call `v:name(args)` is syntactic sugar for `v.name(v, args)`, except that `v` is evaluated only once.

Arguments have the following syntax:

```lua
	args ::= ‘(’ [explist] ‘)’
	args ::= tableconstructor
	args ::= LiteralString
```

All argument expressions are evaluated before the call. A call of the form `f{fields}` is syntactic sugar for `f({fields})`; that is, the argument list is a single new table. A call of the form `f'string'` (or `f"string"` or `f[[string]]`) is syntactic sugar for `f('string')`; that is, the argument list is a single literal string.

A call of the form `return functioncall` not in the scope of a to-be-closed variable is called a *tail call*. Lua implements *proper tail calls* (or *proper tail recursion*): In a tail call, the called function reuses the stack entry of the calling function. Therefore, there is no limit on the number of nested tail calls that a program can execute. However, a tail call erases any debug information about the calling function. Note that a tail call only happens with a particular syntax, where the **return** has one single function call as argument, and it is outside the scope of any to-be-closed variable. This syntax makes the calling function return exactly the returns of the called function, without any intervening action. So, none of the following examples are tail calls:

```lua
     return (f(x))        -- results adjusted to 1
     return 2 * f(x)      -- result multiplied by 2
     return x, f(x)       -- additional results
     f(x); return         -- results discarded
     return x or f(x)     -- results adjusted to 1
```

## 3.4.11 – <a id="3.4.11"></a>Function Definitions

The syntax for a function definition is

```lua
	functiondef ::= function funcbody
	funcbody ::= ‘(’ [parlist] ‘)’ block end
```

The following syntactic sugar simplifies function definitions:

```lua
	stat ::= function funcname funcbody
	stat ::= local function Name funcbody
	stat ::= global function Name funcbody
	funcname ::= Name {‘.’ Name} [‘:’ Name]
```

The statement

```lua
     function f () body end
```

translates to

```lua
     f = function () body end
```

The statement

```lua
     function t.a.b.c.f () body end
```

translates to

```lua
     t.a.b.c.f = function () body end
```

The statement

```lua
     local function f () body end
```

translates to

```lua
     local f; f = function () body end
```

not to

```lua
     local f = function () body end
```

(This only makes a difference when the body of the function contains recursive references to `f`.) Similarly, the statement

```lua
     global function f () body end
```

translates to

```lua
     global f; global f = function () body end
```

The second **global** makes the assignment an initialization, which will raise an error if that global is already defined.

The *colon* syntax is used to emulate *methods*, adding an implicit extra parameter `self` to the function. Thus, the statement

```lua
     function t.a.b.c:f (params) body end
```

is syntactic sugar for

```lua
     t.a.b.c.f = function (self, params) body end
```

A function definition is an executable expression, whose value has type *function*. When Lua precompiles a chunk, all its function bodies are precompiled too, but they are not created yet. Then, whenever Lua executes the function definition, the function is *instantiated* (or *closed*). This function instance, or *closure*, is the final value of the expression.

Results are returned using the **return** statement (see [§3.3.4](/docs/lua/v5-5-1/en/02-language/09-statements/#3.3.4)). If control reaches the end of a function without encountering a **return** statement, then the function returns with no results.

There is a system-dependent limit on the number of values that a function may return. This limit is guaranteed to be at least 1000.

### Parameters

Parameters act as local variables that are initialized with the argument values:

```lua
	parlist ::= namelist [‘,’ varargparam] | varargparam
	varargparam ::= ‘...’ [Name]
```

When a Lua function is called, it adjusts its list of arguments to the length of its list of parameters (see [§3.4.12](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.12)), unless the function is a *variadic function*, which is indicated by three dots ('`...`') at the end of its parameter list. A variadic function does not adjust its argument list; instead, it collects all extra arguments and supplies them to the function through a *vararg table*. In that table, the values at indices 1, 2, etc. are the extra arguments, and the value at index "`n`" is the number of extra arguments.

As an example, consider the following definitions:

```lua
     function f(a, b) end
     function g(a, b, ...) end
     function r() return 1,2,3 end
```

Then, we have the following mapping from arguments to parameters and to the vararg table:

```lua
     CALL             PARAMETERS
     
     f(3)             a=3, b=nil
     f(3, 4)          a=3, b=4
     f(3, 4, 5)       a=3, b=4
     f(r(), 10)       a=1, b=10
     f(r())           a=1, b=2
     
     g(3)             a=3, b=nil, va. table ->  {n = 0}
     g(3, 4)          a=3, b=4,   va. table ->  {n = 0}
     g(3, 4, 5, 8)    a=3, b=4,   va. table ->  {5, 8, n = 2}
     g(5, r())        a=5, b=1,   va. table ->  {2, 3, n = 2}
```

A vararg table in a variadic function can have an optional name, given after the three dots. When present, that name denotes a read-only local variable that refers to the vararg table. If the vararg table does not have a name, it can only be accessed through a vararg expression.

A vararg expression is also written as three dots, and its value is a list of the values in the vararg table, from 1 to the integer value at index "`n`". (Therefore, if the code does not modify the vararg table, this list corresponds to the extra arguments in the function call.) This list behaves like the results from a function with multiple results (see [§3.4.12](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.12)).

As an optimization, if the vararg table satisfies some conditions, the code does not create an actual table and instead translates the indexing expressions and the vararg expressions into accesses to the internal vararg data. The conditions are as follows: If the vararg table has a name, that name is not an upvalue in a nested function and it is used only as the base table in the syntactic constructions `t[exp]` or `t.id`. Note that an anonymous vararg table always satisfy these conditions.

## 3.4.12 – <a id="3.4.12"></a>Lists of Expressions, Multiple Results, and Adjustment

Both function calls and vararg expressions can result in multiple values. These expressions are called *multires expressions*.

When a multires expression is used as the last element of a list of expressions, all results from the expression are added to the list of values produced by the list of expressions. Note that a single expression in a place that expects a list of expressions is the last expression in that (singleton) list.

These are the places where Lua expects a list of expressions:

- A **return** statement, for instance `return e1,e2,e3` (see [§3.3.4](/docs/lua/v5-5-1/en/02-language/09-statements/#3.3.4)).
- A table constructor, for instance `{e1,e2,e3}` (see [§3.4.9](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.9)).
- The arguments of a function call, for instance `foo(e1,e2,e3)` (see [§3.4.10](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.10)).
- A multiple assignment, for instance `a,b,c = e1,e2,e3` (see [§3.3.3](/docs/lua/v5-5-1/en/02-language/09-statements/#3.3.3)).
- A local or global declaration, which is similar to a multiple assignment.
- The initial values in a generic **for** loop, for instance `for k in e1,e2,e3 do... end` (see [§3.3.5](/docs/lua/v5-5-1/en/02-language/09-statements/#3.3.5)).

In the last four cases, the list of values from the list of expressions must be *adjusted* to a specific length: the number of parameters in a call to a non-variadic function (see [§3.4.11](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.11)), the number of variables in a multiple assignment or a declaration, and exactly four values for a generic **for** loop. The *adjustment* follows these rules: If there are more values than needed, the extra values are thrown away; if there are fewer values than needed, the list is extended with **nil**'s. When the list of expressions ends with a multires expression, all results from that expression enter the list of values before the adjustment.

When a multires expression is used in a list of expressions without being the last element, or in a place where the syntax expects a single expression, Lua adjusts the result list of that expression to one element. As a particular case, the syntax expects a single expression inside a parenthesized expression; therefore, adding parentheses around a multires expression forces it to produce exactly one result.

We seldom need to use a vararg expression in a place where the syntax expects a single expression. (Usually it is simpler to add a regular parameter before the variadic part and use that parameter.) When there is such a need, we recommend assigning the vararg expression to a single variable and using that variable in its place.

Here are some examples of uses of multires expressions. In all cases, when the construction needs "the n-th result" and there is no such result, it uses a **nil**.

```lua
     print(x, f())      -- prints x and all results from f().
     print(x, (f()))    -- prints x and the first result from f().
     print(f(), x)      -- prints the first result from f() and x.
     print(1 + f())     -- prints 1 added to the first result from f().
     local x = ...      -- x gets the first vararg argument.
     x,y = ...          -- x gets the first vararg argument,
                        -- y gets the second vararg argument.
     x,y,z = w, f()     -- x gets w, y gets the first result from f(),
                        -- z gets the second result from f().
     x,y,z = f()        -- x gets the first result from f(),
                        -- y gets the second result from f(),
                        -- z gets the third result from f().
     x,y,z = f(), g()   -- x gets the first result from f(),
                        -- y gets the first result from g(),
                        -- z gets the second result from g().
     x,y,z = (f())      -- x gets the first result from f(), y and z get nil.
     return f()         -- returns all results from f().
     return x, ...      -- returns x and all received vararg arguments.
     return x,y,f()     -- returns x, y, and all results from f().
     {f()}              -- creates a list with all results from f().
     {...}              -- creates a list with all vararg arguments.
     {f(), 5}           -- creates a list with the first result from f() and 5.
```
