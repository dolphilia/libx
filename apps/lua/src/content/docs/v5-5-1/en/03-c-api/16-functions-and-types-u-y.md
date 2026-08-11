---
title: "C API functions and types: Unsigned–yieldk"
description: "Alphabetical C API reference from lua_Unsigned through lua_yieldk"
licenseSource: "lua-5.5.1"
---

# C API functions and types: Unsigned–yieldk

## <a id="lua_Unsigned"></a>`lua_Unsigned`

```c
typedef ... lua_Unsigned;
```

The unsigned version of [`lua_Integer`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_Integer).

---

## <a id="lua_upvalueindex"></a>`lua_upvalueindex`

[-0, +0, –]

```c
int lua_upvalueindex (int i);
```

Returns the pseudo-index that represents the `i`-th upvalue of the running function (see [§4.2](/docs/lua/v5-5-1/en/03-c-api/03-c-closures/#4.2)). `i` must be in the range *[1,256]*.

---

## <a id="lua_version"></a>`lua_version`

[-0, +0, –]

```c
lua_Number lua_version (lua_State *L);
```

Returns the version number of this core.

---

## <a id="lua_WarnFunction"></a>`lua_WarnFunction`

```c
typedef void (*lua_WarnFunction) (void *ud, const char *msg, int tocont);
```

The type of warning functions, called by Lua to emit warnings. The first parameter is an opaque pointer set by [`lua_setwarnf`](/docs/lua/v5-5-1/en/03-c-api/14-functions-and-types-set-status/#lua_setwarnf). The second parameter is the warning message. The third parameter is a boolean that indicates whether the message is to be continued by the message in the next call.

See [`warn`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-warn) for more details about warnings.

---

## <a id="lua_warning"></a>`lua_warning`

[-0, +0, –]

```c
void lua_warning (lua_State *L, const char *msg, int tocont);
```

Emits a warning with the given message. A message in a call with `tocont` true should be continued in another call to this function.

See [`warn`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-warn) for more details about warnings.

---

## <a id="lua_Writer"></a>`lua_Writer`

```c
typedef int (*lua_Writer) (lua_State *L,
                           const void* p,
                           size_t sz,
                           void* ud);
```

The type of the writer function used by [`lua_dump`](/docs/lua/v5-5-1/en/03-c-api/08-functions-and-types-concat-gc/#lua_dump). Every time [`lua_dump`](/docs/lua/v5-5-1/en/03-c-api/08-functions-and-types-concat-gc/#lua_dump) produces another piece of chunk, it calls the writer, passing along the buffer to be written (`p`), its size (`sz`), and the `ud` parameter supplied to [`lua_dump`](/docs/lua/v5-5-1/en/03-c-api/08-functions-and-types-concat-gc/#lua_dump).

After [`lua_dump`](/docs/lua/v5-5-1/en/03-c-api/08-functions-and-types-concat-gc/#lua_dump) writes its last piece, it will signal that by calling the writer function one more time, with a `NULL` buffer (and size 0).

The writer returns an error code: 0 means no errors; any other value means an error and stops [`lua_dump`](/docs/lua/v5-5-1/en/03-c-api/08-functions-and-types-concat-gc/#lua_dump) from calling the writer again.

---

## <a id="lua_xmove"></a>`lua_xmove`

[-?, +?, –]

```c
void lua_xmove (lua_State *from, lua_State *to, int n);
```

Exchange values between different threads of the same state.

This function pops `n` values from the stack `from`, and pushes them onto the stack `to`.

---

## <a id="lua_yield"></a>`lua_yield`

[-?, +?, *v*]

```c
int lua_yield (lua_State *L, int nresults);
```

This function is equivalent to [`lua_yieldk`](/docs/lua/v5-5-1/en/03-c-api/16-functions-and-types-u-y/#lua_yieldk), but it has no continuation (see [§4.5](/docs/lua/v5-5-1/en/03-c-api/06-handling-yields-in-c/#4.5)). Therefore, when the thread resumes, it continues the function that called the function calling `lua_yield`. To avoid surprises, this function should be called only in a tail call.

---

## <a id="lua_yieldk"></a>`lua_yieldk`

[-?, +?, *v*]

```c
int lua_yieldk (lua_State *L,
                int nresults,
                lua_KContext ctx,
                lua_KFunction k);
```

Yields a coroutine (thread).

When a C function calls [`lua_yieldk`](/docs/lua/v5-5-1/en/03-c-api/16-functions-and-types-u-y/#lua_yieldk), the running coroutine suspends its execution, and the call to [`lua_resume`](/docs/lua/v5-5-1/en/03-c-api/13-functions-and-types-raw-resume/#lua_resume) that started this coroutine returns. The parameter `nresults` is the number of values from the stack that will be passed as results to [`lua_resume`](/docs/lua/v5-5-1/en/03-c-api/13-functions-and-types-raw-resume/#lua_resume).

When the coroutine is resumed again, Lua calls the given continuation function `k` to continue the execution of the C function that yielded (see [§4.5](/docs/lua/v5-5-1/en/03-c-api/06-handling-yields-in-c/#4.5)). This continuation function receives the same stack from the previous function, with all the results (`nresults`) removed and replaced by the arguments passed to [`lua_resume`](/docs/lua/v5-5-1/en/03-c-api/13-functions-and-types-raw-resume/#lua_resume). Moreover, the continuation function receives the value `ctx` that was passed to [`lua_yieldk`](/docs/lua/v5-5-1/en/03-c-api/16-functions-and-types-u-y/#lua_yieldk).

Usually, this function does not return; when the coroutine eventually resumes, it continues executing the continuation function. However, there is one special case, which is when this function is called from inside a line or a count hook (see [§4.7](/docs/lua/v5-5-1/en/03-c-api/17-debug-interface/#4.7)). In that case, `lua_yieldk` should be called with no continuation (probably in the form of [`lua_yield`](/docs/lua/v5-5-1/en/03-c-api/16-functions-and-types-u-y/#lua_yield)) and no results, and the hook should return immediately after the call. Lua will yield and, when the coroutine resumes again, it will continue the normal execution of the (Lua) function that triggered the hook.

This function can raise an error if it is called from a thread with a pending C call with no continuation function (what is called a *C-call boundary*), or it is called from a thread that is not running inside a resume (typically the main thread).
