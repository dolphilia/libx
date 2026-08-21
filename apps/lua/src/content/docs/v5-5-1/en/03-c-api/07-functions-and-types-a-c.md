---
title: "C API functions and types: absindex–compare"
description: "Alphabetical C API reference from lua_absindex through lua_compare"
---

# 4.6 – <a id="4.6"></a>Functions and Types

Here we list all functions and types from the C API in alphabetical order. Each function has an indicator like this: [-o, +p, *x*]

The first field, `o`, is how many elements the function pops from the stack. The second field, `p`, is how many elements the function pushes onto the stack. (Any function always pushes its results after popping its arguments.) A field in the form `x|y` means the function can push (or pop) `x` or `y` elements, depending on the situation; an interrogation mark '`?`' means that we cannot know how many elements the function pops/pushes by looking only at its arguments. (For instance, they may depend on what is in the stack.) The third field, `x`, tells whether the function may raise errors: '`-`' means the function never raises any error; '`m`' means the function may raise only out-of-memory errors; '`v`' means the function may raise the errors explained in the text; '`e`' means the function can run arbitrary Lua code, either directly or through metamethods, and therefore may raise any errors.

---

## <a id="lua_absindex"></a>`lua_absindex`

[-0, +0, –]

```c
int lua_absindex (lua_State *L, int idx);
```

Converts the acceptable index `idx` into an equivalent absolute index (that is, one that does not depend on the stack size).

---

## <a id="lua_Alloc"></a>`lua_Alloc`

```c
typedef void * (*lua_Alloc) (void *ud,
                             void *ptr,
                             size_t osize,
                             size_t nsize);
```

The type of the memory-allocator function used by Lua states. The allocator function must provide a functionality similar to `realloc`, but not exactly the same. Its arguments are `ud`, an opaque pointer passed to [`lua_newstate`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_newstate); `ptr`, a pointer to the block being allocated/reallocated/freed; `osize`, the original size of the block or some code about what is being allocated; and `nsize`, the new size of the block.

When `ptr` is not `NULL`, `osize` is the size of the block pointed by `ptr`, that is, the size given when it was allocated or reallocated.

When `ptr` is `NULL`, `osize` encodes the kind of object that Lua is allocating. `osize` is any of [`LUA_TSTRING`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#pdf-LUA_TSTRING), [`LUA_TTABLE`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#pdf-LUA_TTABLE), [`LUA_TFUNCTION`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#pdf-LUA_TFUNCTION), [`LUA_TUSERDATA`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#pdf-LUA_TUSERDATA), or [`LUA_TTHREAD`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#pdf-LUA_TTHREAD) when (and only when) Lua is creating a new object of that type. When `osize` is some other value, Lua is allocating memory for something else.

Lua assumes the following behavior from the allocator function:

When `nsize` is zero, the allocator must behave like `free` and then return `NULL`.

When `nsize` is not zero, the allocator must behave like `realloc`. In particular, the allocator returns `NULL` if and only if it cannot fulfill the request.

Here is a simple implementation for the allocator function, corresponding to the function [`luaL_alloc`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_alloc) from the auxiliary library.

```c
     void *luaL_alloc (void *ud, void *ptr, size_t osize,
                                            size_t nsize) {
       (void)ud;  (void)osize;  /* not used */
       if (nsize == 0) {
         free(ptr);
         return NULL;
       }
       else
         return realloc(ptr, nsize);
     }
```

Note that ISO C ensures that `free(NULL)` has no effect and that `realloc(NULL,size)` is equivalent to `malloc(size)`.

---

## <a id="lua_arith"></a>`lua_arith`

[-(2|1), +1, *e*]

```c
void lua_arith (lua_State *L, int op);
```

Performs an arithmetic or bitwise operation over the two values (or one, in the case of negations) at the top of the stack, with the value on the top being the second operand, pops these values, and pushes the result of the operation. The function follows the semantics of the corresponding Lua operator (that is, it may call metamethods).

The value of `op` must be one of the following constants:

- **<a id="pdf-LUA_OPADD"></a>`LUA_OPADD`**: performs addition (`+`)
- **<a id="pdf-LUA_OPSUB"></a>`LUA_OPSUB`**: performs subtraction (`-`)
- **<a id="pdf-LUA_OPMUL"></a>`LUA_OPMUL`**: performs multiplication (`*`)
- **<a id="pdf-LUA_OPDIV"></a>`LUA_OPDIV`**: performs float division (`/`)
- **<a id="pdf-LUA_OPIDIV"></a>`LUA_OPIDIV`**: performs floor division (`//`)
- **<a id="pdf-LUA_OPMOD"></a>`LUA_OPMOD`**: performs modulo (`%`)
- **<a id="pdf-LUA_OPPOW"></a>`LUA_OPPOW`**: performs exponentiation (`^`)
- **<a id="pdf-LUA_OPUNM"></a>`LUA_OPUNM`**: performs mathematical negation (unary `-`)
- **<a id="pdf-LUA_OPBNOT"></a>`LUA_OPBNOT`**: performs bitwise NOT (`~`)
- **<a id="pdf-LUA_OPBAND"></a>`LUA_OPBAND`**: performs bitwise AND (`&`)
- **<a id="pdf-LUA_OPBOR"></a>`LUA_OPBOR`**: performs bitwise OR (`|`)
- **<a id="pdf-LUA_OPBXOR"></a>`LUA_OPBXOR`**: performs bitwise exclusive OR (`~`)
- **<a id="pdf-LUA_OPSHL"></a>`LUA_OPSHL`**: performs left shift (`<<`)
- **<a id="pdf-LUA_OPSHR"></a>`LUA_OPSHR`**: performs right shift (`>>`)

---

## <a id="lua_atpanic"></a>`lua_atpanic`

[-0, +0, –]

```c
lua_CFunction lua_atpanic (lua_State *L, lua_CFunction panicf);
```

Sets a new panic function and returns the old one (see [§4.4](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#4.4)).

---

## <a id="lua_call"></a>`lua_call`

[-(nargs+1), +nresults, *e*]

```c
void lua_call (lua_State *L, int nargs, int nresults);
```

Calls a function. Like regular Lua calls, `lua_call` respects the `__call` metamethod. So, here the word "function" means any callable value.

To do a call you must use the following protocol: first, the function to be called is pushed onto the stack; then, the arguments to the call are pushed in direct order; that is, the first argument is pushed first. Finally you call [`lua_call`](/docs/lua/v5-5-1/en/03-c-api/07-functions-and-types-a-c/#lua_call); `nargs` is the number of arguments that you pushed onto the stack. When the function returns, all arguments and the function value are popped and the call results are pushed onto the stack. The number of results is adjusted to `nresults`, unless `nresults` is <a id="pdf-LUA_MULTRET"></a>`LUA_MULTRET`, which makes all results from the function to be pushed. In the first case, an explicit number of results, the caller must ensure that the stack has space for the returned values. In the second case, all results, Lua takes care that the returned values fit into the stack space, but it does not ensure any extra space in the stack. The function results are pushed onto the stack in direct order (the first result is pushed first), so that after the call the last result is on the top of the stack.

The maximum value for `nresults` is 250.

Any error while calling and running the function is propagated upwards (with a `longjmp`).

The following example shows how the host program can do the equivalent to this Lua code:

```c
     a = f("how", t.x, 14)
```

Here it is in C:

```c
     lua_getglobal(L, "f");                  /* function to be called */
     lua_pushliteral(L, "how");                       /* 1st argument */
     lua_getglobal(L, "t");                    /* table to be indexed */
     lua_getfield(L, -1, "x");        /* push result of t.x (2nd arg) */
     lua_remove(L, -2);                  /* remove 't' from the stack */
     lua_pushinteger(L, 14);                          /* 3rd argument */
     lua_call(L, 3, 1);     /* call 'f' with 3 arguments and 1 result */
     lua_setglobal(L, "a");                         /* set global 'a' */
```

Note that the code above is *balanced*: at its end, the stack is back to its original configuration. This is considered good programming practice.

---

## <a id="lua_callk"></a>`lua_callk`

[-(nargs + 1), +nresults, *e*]

```c
void lua_callk (lua_State *L,
                int nargs,
                int nresults,
                lua_KContext ctx,
                lua_KFunction k);
```

This function behaves exactly like [`lua_call`](/docs/lua/v5-5-1/en/03-c-api/07-functions-and-types-a-c/#lua_call), but allows the called function to yield (see [§4.5](/docs/lua/v5-5-1/en/03-c-api/06-handling-yields-in-c/#4.5)).

---

## <a id="lua_CFunction"></a>`lua_CFunction`

```c
typedef int (*lua_CFunction) (lua_State *L);
```

Type for C functions.

In order to communicate properly with Lua, a C function must use the following protocol, which defines the way parameters and results are passed: a C function receives its arguments from Lua in its stack in direct order (the first argument is pushed first). So, when the function starts, `lua_gettop(L)` returns the number of arguments received by the function. The first argument (if any) is at index 1 and its last argument is at index `lua_gettop(L)`. To return values to Lua, a C function just pushes them onto the stack, in direct order (the first result is pushed first), and returns in C the number of results. Any other value in the stack below the results will be properly discarded by Lua. Like a Lua function, a C function called by Lua can also return many results.

As an example, the following function receives a variable number of numeric arguments and returns their average and their sum:

```c
     static int foo (lua_State *L) {
       int n = lua_gettop(L);    /* number of arguments */
       lua_Number sum = 0.0;
       int i;
       for (i = 1; i <= n; i++) {
         if (!lua_isnumber(L, i)) {
           lua_pushliteral(L, "incorrect argument");
           lua_error(L);
         }
         sum += lua_tonumber(L, i);
       }
       lua_pushnumber(L, sum/n);        /* first result */
       lua_pushnumber(L, sum);         /* second result */
       return 2;                   /* number of results */
     }
```

---

## <a id="lua_checkstack"></a>`lua_checkstack`

[-0, +0, –]

```c
int lua_checkstack (lua_State *L, int n);
```

Ensures that the stack has space for at least `n` extra elements, that is, that you can safely push up to `n` values into it. It returns false if it cannot fulfill the request, either because it would cause the stack to be greater than a fixed maximum size (typically at least several thousand elements) or because it cannot allocate memory for the extra space. This function never shrinks the stack; if the stack already has space for the extra elements, it is left unchanged.

---

## <a id="lua_close"></a>`lua_close`

[-0, +0, –]

```c
void lua_close (lua_State *L);
```

Close all active to-be-closed variables in the main thread, release all objects in the given Lua state (calling the corresponding garbage-collection metamethods, if any), and frees all dynamic memory used by this state.

On several platforms, you may not need to call this function, because all resources are naturally released when the host program ends. On the other hand, long-running programs that create multiple states, such as daemons or web servers, will probably need to close states as soon as they are not needed.

---

## <a id="lua_closeslot"></a>`lua_closeslot`

[-0, +0, *e*]

```c
void lua_closeslot (lua_State *L, int index);
```

Close the to-be-closed slot at the given index and set its value to **nil**. The index must be the last index previously marked to be closed (see [`lua_toclose`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#lua_toclose)) that is still active (that is, not closed yet).

A `__close` metamethod cannot yield when called through this function.

---

## <a id="lua_closethread"></a>`lua_closethread`

[-0, +?, –]

```c
int lua_closethread (lua_State *L, lua_State *from);
```

Resets a thread, cleaning its call stack and closing all pending to-be-closed variables. The parameter `from` represents the coroutine that is resetting `L`. If there is no such coroutine, this parameter can be `NULL`.

Unless `L` is equal to `from`, the call returns a status code: [`LUA_OK`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_OK) for no errors in the thread (either the original error that stopped the thread or errors in closing methods), or an error status otherwise. In case of error, the error object is put on the top of the stack.

If `L` is equal to `from`, it corresponds to a thread closing itself. In that case, the call does not return; instead, the resume that (re)started the thread returns. The thread must be running inside a resume.

---

## <a id="lua_compare"></a>`lua_compare`

[-0, +0, *e*]

```c
int lua_compare (lua_State *L, int index1, int index2, int op);
```

Compares two Lua values. Returns 1 if the value at index `index1` satisfies `op` when compared with the value at index `index2`, following the semantics of the corresponding Lua operator (that is, it may call metamethods). Otherwise returns 0. Also returns 0 if any of the indices is not valid.

The value of `op` must be one of the following constants:

- **<a id="pdf-LUA_OPEQ"></a>`LUA_OPEQ`**: compares for equality (`==`)
- **<a id="pdf-LUA_OPLT"></a>`LUA_OPLT`**: compares for less than (`<`)
- **<a id="pdf-LUA_OPLE"></a>`LUA_OPLE`**: compares for less or equal (`<=`)

---
