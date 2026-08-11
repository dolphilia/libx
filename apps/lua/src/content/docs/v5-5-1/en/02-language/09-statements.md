---
title: "Statements"
description: "Lua statements and control structures"
licenseSource: "lua-5.5.1"
---

# 3.3 – <a id="3.3"></a>Statements

Lua supports an almost conventional set of statements, similar to those in other conventional languages. This set includes blocks, assignments, control structures, function calls, and variable declarations.

## 3.3.1 – <a id="3.3.1"></a>Blocks

A block is a list of statements, which are executed sequentially:

```lua
	block ::= {stat}
```

Lua has *empty statements* that allow you to separate statements with semicolons, start a block with a semicolon or write two semicolons in sequence:

```lua
	stat ::= ‘;’
```

Both function calls and assignments can start with an open parenthesis. This possibility leads to an ambiguity in Lua's grammar. Consider the following fragment:

```lua
     a = b + c
     (print or io.write)('done')
```

The grammar could see this fragment in two ways:

```lua
     a = b + c(print or io.write)('done')
     
     a = b + c; (print or io.write)('done')
```

The current parser always sees such constructions in the first way, interpreting the open parenthesis as the start of the arguments to a call. To avoid this ambiguity, it is a good practice to always precede with a semicolon statements that start with a parenthesis:

```lua
     ;(print or io.write)('done')
```

A block can be explicitly delimited to produce a single statement:

```lua
	stat ::= do block end
```

Explicit blocks are useful to control the scope of variable declarations. Explicit blocks are also sometimes used to add a **return** statement in the middle of another block (see [§3.3.4](/docs/lua/v5-5-1/en/02-language/09-statements/#3.3.4)).

## 3.3.2 – <a id="3.3.2"></a>Chunks

The unit of compilation of Lua is called a *chunk*. Syntactically, a chunk is simply a block:

```lua
	chunk ::= block
```

Lua handles a chunk as the body of an anonymous function with a variable number of arguments (see [§3.4.11](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.11)). As such, chunks can define local variables, receive arguments, and return values. Moreover, such anonymous function is compiled as in the scope of an external local variable called `_ENV` (see [§2.2](/docs/lua/v5-5-1/en/02-language/02-scopes-variables-and-environments/#2.2)). The resulting function always has `_ENV` as its only external variable, even if it does not use that variable.

A chunk can be stored in a file or in a string inside the host program. To execute a chunk, Lua first *loads* it, precompiling the chunk's code into instructions for a virtual machine, and then Lua executes the compiled code with an interpreter for the virtual machine.

Chunks can also be precompiled into binary form; see the program `luac` and the function [`string.dump`](/docs/lua/v5-5-1/en/05-standard-library/06-string-manipulation/#pdf-string.dump) for details. Programs in source and compiled forms are interchangeable; Lua automatically detects the file type and acts accordingly (see [`load`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-load)). Be aware that, unlike source code, maliciously crafted binary chunks can crash the interpreter.

## 3.3.3 – <a id="3.3.3"></a>Assignment

Lua allows multiple assignments. Therefore, the syntax for assignment defines a list of variables on the left side and a list of expressions on the right side. The elements in both lists are separated by commas:

```lua
	stat ::= varlist ‘=’ explist
	varlist ::= var {‘,’ var}
	explist ::= exp {‘,’ exp}
```

Expressions are discussed in [§3.4](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4).

Before the assignment, the list of values is *adjusted* to the length of the list of variables (see [§3.4.12](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.12)).

If a variable is both assigned and read inside a multiple assignment, Lua ensures that all reads get the value of the variable before the assignment. Thus the code

```lua
     i = 3
     i, a[i] = i+1, 20
```

sets `a[3]` to 20, without affecting `a[4]` because the `i` in `a[i]` is evaluated (to 3) before it is assigned 4. Similarly, the line

```lua
     x, y = y, x
```

exchanges the values of `x` and `y`, and

```lua
     x, y, z = y, z, x
```

cyclically permutes the values of `x`, `y`, and `z`.

Note that this guarantee covers only accesses syntactically inside the assignment statement. If a function or a metamethod called during the assignment changes the value of a variable, Lua gives no guarantees about the order of that access.

An assignment to a global name `x = val` is equivalent to the assignment `_ENV.x = val` (see [§2.2](/docs/lua/v5-5-1/en/02-language/02-scopes-variables-and-environments/#2.2)).

The meaning of assignments to table fields and global variables (which are actually table fields, too) can be changed via metatables (see [§2.4](/docs/lua/v5-5-1/en/02-language/04-metatables-and-metamethods/#2.4)).

## 3.3.4 – <a id="3.3.4"></a>Control Structures

The control structures **if**, **while**, and **repeat** have the usual meaning and familiar syntax:

```lua
	stat ::= while exp do block end
	stat ::= repeat block until exp
	stat ::= if exp then block {elseif exp then block} [else block] end
```

Lua also has a **for** statement, in two flavors (see [§3.3.5](/docs/lua/v5-5-1/en/02-language/09-statements/#3.3.5)).

The condition expression of a control structure can return any value. Both **false** and **nil** test false. All values different from **nil** and **false** test true. In particular, the number 0 and the empty string also test true.

In the **repeat**–**until** loop, the inner block does not end at the **until** keyword, but only after the condition. So, the condition can refer to local variables declared inside the loop block.

The **goto** statement transfers the program control to a label. For syntactical reasons, labels in Lua are considered statements too:

```lua
	stat ::= goto Name
	stat ::= label
	label ::= ‘::’ Name ‘::’
```

A label is visible in the entire block where it is defined, except inside nested functions. A goto can jump to any visible label as long as it does not enter into the scope of a variable declaration. A label should not be declared where a previous label with the same name is visible, even if this other label has been declared in an enclosing block.

The **break** statement terminates the execution of a **while**, **repeat**, or **for** loop, skipping to the next statement after the loop:

```lua
	stat ::= break
```

A **break** ends the innermost enclosing loop.

The **return** statement is used to return values from a function or a chunk (which is handled as an anonymous function). Functions can return more than one value, so the syntax for the **return** statement is

```lua
	stat ::= return [explist] [‘;’]
```

The **return** statement can only be written as the last statement of a block. If it is necessary to **return** in the middle of a block, then an explicit inner block can be used, as in the idiom `do return end`, because now **return** is the last statement in its (inner) block.

## 3.3.5 – <a id="3.3.5"></a>For Statement

The **for** statement has two forms: one numerical and one generic.

### The numerical **for** loop

The numerical **for** loop repeats a block of code while a control variable goes through an arithmetic progression. It has the following syntax:

```lua
	stat ::= for Name ‘=’ exp ‘,’ exp [‘,’ exp] do block end
```

The given identifier (Name) defines the control variable, which is a new read-only (`const`) variable local to the loop body (*block*).

The loop starts by evaluating once the three control expressions. Their values are called respectively the *initial value*, the *limit*, and the *step*. If the step is absent, it defaults to 1.

If both the initial value and the step are integers, the loop is done with integers; note that the limit may not be an integer. Otherwise, the three values are converted to floats and the loop is done with floats. Beware of floating-point accuracy in this case.

After that initialization, the loop body is repeated with the value of the control variable going through an arithmetic progression, starting at the initial value, with a common difference given by the step. A negative step makes a decreasing sequence; a step equal to zero raises an error. The loop continues while the value is less than or equal to the limit (greater than or equal to for a negative step). If the initial value is already greater than the limit (or less than, if the step is negative), the body is not executed.

For integer loops, the control variable never wraps around; instead, the loop ends in case of an overflow.

### The generic **for** loop

The generic **for** statement works over functions, called *iterators*. On each iteration, the iterator function is called to produce a new value, stopping when this new value is **nil**. The generic **for** loop has the following syntax:

```lua
	stat ::= for namelist in explist do block end
	namelist ::= Name {‘,’ Name}
```

A **for** statement like

```lua
     for var_1, ···, var_n in explist do body end
```

works as follows.

The names *var_i* declare loop variables local to the loop body. The first of these variables is the *control variable*, which is a read-only (`const`) variable.

The loop starts by evaluating *explist* to produce four values: an *iterator function*, a *state*, an initial value for the control variable, and a *closing value*.

Then, at each iteration, Lua calls the iterator function with two arguments: the state and the control variable. The results from this call are then assigned to the loop variables, following the rules of multiple assignments (see [§3.3.3](/docs/lua/v5-5-1/en/02-language/09-statements/#3.3.3)). If the control variable becomes **nil**, the loop terminates. Otherwise, the body is executed and the loop goes to the next iteration.

The closing value behaves like a to-be-closed variable (see [§3.3.8](/docs/lua/v5-5-1/en/02-language/09-statements/#3.3.8)), which can be used to release resources when the loop ends. Otherwise, it does not interfere with the loop.

## 3.3.6 – <a id="3.3.6"></a>Function Calls as Statements

To allow possible side-effects, function calls can be executed as statements:

```lua
	stat ::= functioncall
```

In this case, all returned values are thrown away. Function calls are explained in [§3.4.10](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.10).

## 3.3.7 – <a id="3.3.7"></a>Variable Declarations

Local and global variables can be declared anywhere inside a block. The declaration can include an initialization:

```lua
	stat ::= local attnamelist [‘=’ explist]
	stat ::= global attnamelist [‘=’ explist]
```

If there is no initialization, local variables are initialized with **nil**; global variables are left unchanged. Otherwise, the initialization gets the same adjustment of a multiple assignment (see [§3.3.3](/docs/lua/v5-5-1/en/02-language/09-statements/#3.3.3)). Moreover, for global variables, the initialization will raise a runtime error if the variable is already defined, that is, it has a non-nil value.

The list of names may be prefixed by an attribute (a name between angle brackets) and each variable name may be postfixed by an attribute:

```lua
	attnamelist ::=  [attrib] Name [attrib] {‘,’ Name [attrib]}
	attrib ::= ‘<’ Name ‘>’
```

A prefixed attribute applies to all names in the list; a postfixed attribute applies to its particular name. There are two possible attributes: `const`, which declares a *constant* or *read-only* variable, that is, a variable that cannot be used as the left-hand side of an assignment, and `close`, which declares a to-be-closed variable (see [§3.3.8](/docs/lua/v5-5-1/en/02-language/09-statements/#3.3.8)). Only local variables can have the `close` attribute. A list of variables can contain at most one to-be-closed variable.

Lua offers also a collective declaration for global variables:

```lua
	stat ::= global [attrib] ‘*’
```

This special form implicitly declares as globals all names not explicitly declared previously. In particular, `global<const> *` implicitly declares as read-only globals all names not explicitly declared previously; see the following example:

```lua
     global X
     global<const> *
     print(math.pi)   -- Ok, 'print' and 'math' are read-only
     X = 1            -- Ok, declared as read-write
     Y = 1            -- Error, Y is read-only
```

As noted in [§2.2](/docs/lua/v5-5-1/en/02-language/02-scopes-variables-and-environments/#2.2), all chunks start with an implicit declaration `global *`, but this preambular declaration becomes void inside the scope of any other **global** declaration. Therefore, a program that does not use global declarations or start with `global *` has free read-write access to any global; a program that starts with `global<const> *` has free read-only access to any global; and a program that starts with any other global declaration (e.g., `global none`) can only refer to declared variables.

Note that, for global variables, the effect of any declaration is only syntactical (except for the optional assignment):

```lua
     global X <const>, _G
     X = 1           -- ERROR
     _ENV.X = 1      -- Ok
     _G.print(X)     -- Ok
     foo()           -- 'foo' can freely change any global
```

A chunk is also a block (see [§3.3.2](/docs/lua/v5-5-1/en/02-language/09-statements/#3.3.2)), and so variables can be declared in a chunk outside any explicit block.

The visibility rules for variable declarations are explained in [§2.2](/docs/lua/v5-5-1/en/02-language/02-scopes-variables-and-environments/#2.2).

## 3.3.8 – <a id="3.3.8"></a>To-be-closed Variables

A to-be-closed variable behaves like a constant local variable, except that its value is *closed* whenever the variable goes out of scope, including normal block termination, exiting its block by **break**/**goto**/**return**, or exiting by an error.

Here, to *close* a value means to call its `__close` metamethod. When calling the metamethod, the value itself is passed as the first argument. If there was an error, the error object that caused the exit is passed as a second argument; otherwise, there is no second argument.

The value assigned to a to-be-closed variable must have a `__close` metamethod or be a false value. (**nil** and **false** are ignored as to-be-closed values.)

If several to-be-closed variables go out of scope at the same event, they are closed in the reverse order that they were declared.

If there is any error while running a closing method, that error is handled like an error in the regular code where the variable was defined. After an error, the other pending closing methods will still be called.

If a coroutine yields and is never resumed again, some variables may never go out of scope, and therefore they will never be closed. (These variables are the ones created inside the coroutine and in scope at the point where the coroutine yielded.) Similarly, if a coroutine ends with an error, it does not unwind its stack, so it does not close any variable. In both cases, you can either use finalizers or call [`coroutine.close`](/docs/lua/v5-5-1/en/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.close) to close the variables. However, if the coroutine was created through [`coroutine.wrap`](/docs/lua/v5-5-1/en/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.wrap), then its corresponding function will close the coroutine in case of errors.
