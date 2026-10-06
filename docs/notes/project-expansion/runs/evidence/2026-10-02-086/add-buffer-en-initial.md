---
title: "Auxiliary functions and types: addchar–buffsub"
description: "Buffer-oriented auxiliary API reference"
---

# 5.1 – <a id="5.1"></a>Functions and Types

Here we list all functions and types from the auxiliary library in alphabetical order.

---

## <a id="luaL_addchar"></a>`luaL_addchar`

[-?, +?, *m*]

```c
void luaL_addchar (luaL_Buffer *B, char c);
```

Adds the byte `c` to the buffer `B` (see [`luaL_Buffer`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)).

---

## <a id="luaL_addgsub"></a>`luaL_addgsub`

[-?, +?, *m*]

```c
const void luaL_addgsub (luaL_Buffer *B, const char *s,
                         const char *p, const char *r);
```

Adds a copy of the string `s` to the buffer `B` (see [`luaL_Buffer`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)), replacing any occurrence of the string `p` with the string `r`.

---

## <a id="luaL_addlstring"></a>`luaL_addlstring`

[-?, +?, *m*]

```c
void luaL_addlstring (luaL_Buffer *B, const char *s, size_t l);
```

Adds the string pointed to by `s` with length `l` to the buffer `B` (see [`luaL_Buffer`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)). The string can contain embedded zeros.

---

## <a id="luaL_addsize"></a>`luaL_addsize`

[-?, +?, –]

```c
void luaL_addsize (luaL_Buffer *B, size_t n);
```

Adds to the buffer `B` a string of length `n` previously copied to the buffer area (see [`luaL_prepbuffer`](/docs/lua/v5-5-1/en/04-auxiliary-library/05-functions-and-types-make-push/#luaL_prepbuffer)).

---

## <a id="luaL_addstring"></a>`luaL_addstring`

[-?, +?, *m*]

```c
void luaL_addstring (luaL_Buffer *B, const char *s);
```

Adds the zero-terminated string pointed to by `s` to the buffer `B` (see [`luaL_Buffer`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)).

---

## <a id="luaL_addvalue"></a>`luaL_addvalue`

[-?, +?, *m*]

```c
void luaL_addvalue (luaL_Buffer *B);
```

Adds the value on the top of the stack to the buffer `B` (see [`luaL_Buffer`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)). Pops the value.

This is the only function on string buffers that can (and must) be called with an extra element on the stack, which is the value to be added to the buffer.

---

## <a id="luaL_argcheck"></a>`luaL_argcheck`

[-0, +0, *v*]

```c
void luaL_argcheck (lua_State *L,
                    int cond,
                    int arg,
                    const char *extramsg);
```

Checks whether `cond` is true. If it is not, raises an error with a standard message (see [`luaL_argerror`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_argerror)).

---

## <a id="luaL_argerror"></a>`luaL_argerror`

[-0, +0, *v*]

```c
int luaL_argerror (lua_State *L, int arg, const char *extramsg);
```

Raises an error reporting a problem with argument `arg` of the C function that called it, using a standard message that includes `extramsg` as a comment:

```c
     bad argument #arg to 'funcname' (extramsg)
```

This function never returns.

---

## <a id="luaL_argexpected"></a>`luaL_argexpected`

[-0, +0, *v*]

```c
void luaL_argexpected (lua_State *L,
                       int cond,
                       int arg,
                       const char *tname);
```

Checks whether `cond` is true. If it is not, raises an error about the type of the argument `arg` with a standard message (see [`luaL_typeerror`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_typeerror)).

---

## <a id="luaL_Buffer"></a>`luaL_Buffer`

```c
typedef struct luaL_Buffer luaL_Buffer;
```

Type for a *string buffer*.

A string buffer allows C code to build Lua strings piecemeal. Its pattern of use is as follows:

- First declare a variable `b` of type [`luaL_Buffer`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer).
- Then initialize it with a call `luaL_buffinit(L,&b)`.
- Then add string pieces to the buffer calling any of the `luaL_add*` functions.
- Finish by calling `luaL_pushresult(&b)`. This call leaves the final string on the top of the stack.

If you know beforehand the maximum size of the resulting string, you can use the buffer like this:

- First declare a variable `b` of type [`luaL_Buffer`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer).
- Then initialize it and preallocate a space of size `sz` with a call `luaL_buffinitsize(L,&b,sz)`.
- Then produce the string into that space.
- Finish by calling `luaL_pushresultsize(&b,sz)`, where `sz` is the total size of the resulting string copied into that space (which may be less than or equal to the preallocated size).

During its normal operation, a string buffer uses a variable number of stack slots. So, while using a buffer, you cannot assume that you know where the top of the stack is. You can use the stack between successive calls to buffer operations as long as that use is balanced; that is, when you call a buffer operation, the stack is at the same level it was immediately after the previous buffer operation. (The only exception to this rule is [`luaL_addvalue`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_addvalue).) After calling [`luaL_pushresult`](/docs/lua/v5-5-1/en/04-auxiliary-library/05-functions-and-types-make-push/#luaL_pushresult), the stack is back to its level when the buffer was initialized, plus the final string on its top.

---

## <a id="luaL_buffaddr"></a>`luaL_buffaddr`

[-0, +0, –]

```c
char *luaL_buffaddr (luaL_Buffer *B);
```

Returns the address of the current content of buffer `B` (see [`luaL_Buffer`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)). Note that any addition to the buffer may invalidate this address.

---

## <a id="luaL_buffinit"></a>`luaL_buffinit`

[-0, +?, –]

```c
void luaL_buffinit (lua_State *L, luaL_Buffer *B);
```

Initializes a buffer `B` (see [`luaL_Buffer`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)). This function does not allocate any space; the buffer must be declared as a variable.

---

## <a id="luaL_bufflen"></a>`luaL_bufflen`

[-0, +0, –]

```c
size_t luaL_bufflen (luaL_Buffer *B);
```

Returns the length of the current content of buffer `B` (see [`luaL_Buffer`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)).

---

## <a id="luaL_buffinitsize"></a>`luaL_buffinitsize`

[-?, +?, *m*]

```c
char *luaL_buffinitsize (lua_State *L, luaL_Buffer *B, size_t sz);
```

Equivalent to the sequence [`luaL_buffinit`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_buffinit), [`luaL_prepbuffsize`](/docs/lua/v5-5-1/en/04-auxiliary-library/05-functions-and-types-make-push/#luaL_prepbuffsize).

---

## <a id="luaL_buffsub"></a>`luaL_buffsub`

[-?, +?, –]

```c
void luaL_buffsub (luaL_Buffer *B, int n);
```

Removes `n` bytes from the buffer `B` (see [`luaL_Buffer`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)). The buffer must have at least that many bytes.

---
