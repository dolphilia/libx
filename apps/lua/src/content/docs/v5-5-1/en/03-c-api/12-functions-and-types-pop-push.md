---
title: "C API functions and types: pop–pushvfstring"
description: "Alphabetical C API reference for stack push operations"
licenseSource: "lua-5.5.1"
---

# C API functions and types: pop–pushvfstring

## <a id="lua_pop"></a>`lua_pop`

[-n, +0, *e*]

```c
void lua_pop (lua_State *L, int n);
```

Pops `n` elements from the stack. It is implemented as a macro over [`lua_settop`](/docs/lua/v5-5-1/en/03-c-api/14-functions-and-types-set-status/#lua_settop).

---

## <a id="lua_pushboolean"></a>`lua_pushboolean`

[-0, +1, –]

```c
void lua_pushboolean (lua_State *L, int b);
```

Pushes a boolean value with value `b` onto the stack.

---

## <a id="lua_pushcclosure"></a>`lua_pushcclosure`

[-n, +1, *m*]

```c
void lua_pushcclosure (lua_State *L, lua_CFunction fn, int n);
```

Pushes a new C closure onto the stack. This function receives a pointer to a C function and pushes onto the stack a Lua value of type `function` that, when called, invokes the corresponding C function. The parameter `n` tells how many upvalues this function will have (see [§4.2](/docs/lua/v5-5-1/en/03-c-api/03-c-closures/#4.2)).

Any function to be callable by Lua must follow the correct protocol to receive its parameters and return its results (see [`lua_CFunction`](/docs/lua/v5-5-1/en/03-c-api/07-functions-and-types-a-c/#lua_CFunction)).

When a C function is created, it is possible to associate some values with it, the so called upvalues; these upvalues are then accessible to the function whenever it is called. This association is called a C closure (see [§4.2](/docs/lua/v5-5-1/en/03-c-api/03-c-closures/#4.2)). To create a C closure, first the initial values for its upvalues must be pushed onto the stack. (When there are multiple upvalues, the first value is pushed first.) Then [`lua_pushcclosure`](/docs/lua/v5-5-1/en/03-c-api/12-functions-and-types-pop-push/#lua_pushcclosure) is called to create and push the C function onto the stack, with the argument `n` telling how many values will be associated with the function. [`lua_pushcclosure`](/docs/lua/v5-5-1/en/03-c-api/12-functions-and-types-pop-push/#lua_pushcclosure) also pops these values from the stack.

The maximum value for `n` is 255.

When `n` is zero, this function creates a *light C function*, which is just a pointer to the C function. In that case, it never raises a memory error.

---

## <a id="lua_pushcfunction"></a>`lua_pushcfunction`

[-0, +1, –]

```c
void lua_pushcfunction (lua_State *L, lua_CFunction f);
```

Pushes a C function onto the stack. This function is equivalent to [`lua_pushcclosure`](/docs/lua/v5-5-1/en/03-c-api/12-functions-and-types-pop-push/#lua_pushcclosure) with no upvalues.

---

## <a id="lua_pushexternalstring"></a>`lua_pushexternalstring`

[-0, +1, *m*]

```c
const char *lua_pushexternalstring (lua_State *L,
                const char *s, size_t len, lua_Alloc falloc, void *ud);
```

Creates an *external string*, that is, a string that uses memory not managed by Lua. The pointer `s` points to the external buffer holding the string content, and `len` is the length of the string. The string should have a zero at its end, that is, the condition `s[len] == '\0'` should hold. As with any string in Lua, the length must fit in a Lua integer.

If `falloc` is different from `NULL`, that function will be called by Lua when the external buffer is no longer needed. The contents of the buffer should not change before this call. The function will be called with the given `ud`, the string `s` as the block, the length plus one (to account for the ending zero) as the old size, and 0 as the new size.

Even when using an external buffer, Lua still has to allocate a header for the string. In case of a memory-allocation error, Lua will call `falloc` before raising the error.

The function returns a pointer to the string (that is, `s`).

---

## <a id="lua_pushfstring"></a>`lua_pushfstring`

[-0, +1, *v*]

```c
const char *lua_pushfstring (lua_State *L, const char *fmt, ...);
```

Pushes onto the stack a formatted string and returns a pointer to this string (see [§4.1.3](/docs/lua/v5-5-1/en/03-c-api/02-stack/#4.1.3)). The result is a copy of `fmt` with each *conversion specifier* replaced by a string representation of its respective extra argument. A conversion specifier (and its corresponding extra argument) can be '`%%`' (inserts the character '`%`'), '`%s`' (inserts a zero-terminated string, with no size restrictions), '`%f`' (inserts a [`lua_Number`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_Number)), '`%I`' (inserts a [`lua_Integer`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_Integer)), '`%p`' (inserts a void pointer), '`%d`' (inserts an `int`), '`%c`' (inserts an `int` as a one-byte character), and '`%U`' (inserts an `unsigned long` as a UTF-8 byte sequence).

Every occurrence of '`%`' in the string `fmt` must form a valid conversion specifier.

Besides memory allocation errors, this function may raise an error if the resulting string is too large.

---

## <a id="lua_pushglobaltable"></a>`lua_pushglobaltable`

[-0, +1, –]

```c
void lua_pushglobaltable (lua_State *L);
```

Pushes the global environment onto the stack.

---

## <a id="lua_pushinteger"></a>`lua_pushinteger`

[-0, +1, –]

```c
void lua_pushinteger (lua_State *L, lua_Integer n);
```

Pushes an integer with value `n` onto the stack.

---

## <a id="lua_pushlightuserdata"></a>`lua_pushlightuserdata`

[-0, +1, –]

```c
void lua_pushlightuserdata (lua_State *L, void *p);
```

Pushes a light userdata onto the stack.

Userdata represent C values in Lua. A *light userdata* represents a pointer, a `void*`. It is a value (like a number): you do not create it, it has no individual metatable, and it is not collected (as it was never created). A light userdata is equal to "any" light userdata with the same C address.

---

## <a id="lua_pushliteral"></a>`lua_pushliteral`

[-0, +1, *v*]

```c
const char *lua_pushliteral (lua_State *L, const char *s);
```

This macro is equivalent to [`lua_pushstring`](/docs/lua/v5-5-1/en/03-c-api/12-functions-and-types-pop-push/#lua_pushstring), but should be used only when `s` is a literal string. (Lua may optimize this case.)

---

## <a id="lua_pushlstring"></a>`lua_pushlstring`

[-0, +1, *v*]

```c
const char *lua_pushlstring (lua_State *L, const char *s, size_t len);
```

Pushes the string pointed to by `s` with size `len` onto the stack. Lua will make or reuse an internal copy of the given string, so the memory at `s` can be freed or reused immediately after the function returns. The string can contain any binary data, including embedded zeros.

Returns a pointer to the internal copy of the string (see [§4.1.3](/docs/lua/v5-5-1/en/03-c-api/02-stack/#4.1.3)).

Besides memory allocation errors, this function may raise an error if the string is too large.

---

## <a id="lua_pushnil"></a>`lua_pushnil`

[-0, +1, –]

```c
void lua_pushnil (lua_State *L);
```

Pushes a nil value onto the stack.

---

## <a id="lua_pushnumber"></a>`lua_pushnumber`

[-0, +1, –]

```c
void lua_pushnumber (lua_State *L, lua_Number n);
```

Pushes a float with value `n` onto the stack.

---

## <a id="lua_pushstring"></a>`lua_pushstring`

[-0, +1, *m*]

```c
const char *lua_pushstring (lua_State *L, const char *s);
```

Pushes the zero-terminated string pointed to by `s` onto the stack. Lua will make or reuse an internal copy of the given string, so the memory at `s` can be freed or reused immediately after the function returns.

Returns a pointer to the internal copy of the string (see [§4.1.3](/docs/lua/v5-5-1/en/03-c-api/02-stack/#4.1.3)).

If `s` is `NULL`, pushes **nil** and returns `NULL`.

---

## <a id="lua_pushthread"></a>`lua_pushthread`

[-0, +1, –]

```c
int lua_pushthread (lua_State *L);
```

Pushes the thread represented by `L` onto the stack. Returns 1 if this thread is the main thread of its state.

---

## <a id="lua_pushvalue"></a>`lua_pushvalue`

[-0, +1, –]

```c
void lua_pushvalue (lua_State *L, int index);
```

Pushes a copy of the element at the given index onto the stack.

---

## <a id="lua_pushvfstring"></a>`lua_pushvfstring`

[-0, +1, –]

```c
const char *lua_pushvfstring (lua_State *L,
                              const char *fmt,
                              va_list argp);
```

Equivalent to [`lua_pushfstring`](/docs/lua/v5-5-1/en/03-c-api/12-functions-and-types-pop-push/#lua_pushfstring), except that it receives a `va_list` instead of a variable number of arguments, and it does not raise errors. Instead, in case of errors it pushes the error message and returns `NULL`.

---
