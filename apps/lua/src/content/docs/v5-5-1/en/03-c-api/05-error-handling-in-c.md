---
title: "Error handling in C"
description: "C API errors, long jumps and recovery"
licenseSource: "lua-5.5.1"
---

# 4.4 – <a id="4.4"></a>Error Handling in C

Internally, Lua uses the C `longjmp` facility to handle errors. (Lua will use exceptions if you compile it as C++; search for `LUAI_THROW` in the source code for details.) When Lua faces any error, such as a memory allocation error or a type error, it *raises* an error; that is, it does a long jump. A *protected environment* uses `setjmp` to set a recovery point; any error jumps to the most recent active recovery point.

Inside a C function you can raise an error explicitly by calling [`lua_error`](/docs/lua/v5-5-1/en/03-c-api/08-functions-and-types-concat-gc/#lua_error).

Most functions in the API can raise an error, for instance due to a memory allocation error. The documentation for each function indicates whether it can raise errors.

If an error happens outside any protected environment, Lua calls a *panic function* (see [`lua_atpanic`](/docs/lua/v5-5-1/en/03-c-api/07-functions-and-types-a-c/#lua_atpanic)) and then calls `abort`, thus exiting the host application. Your panic function can avoid this exit by never returning (e.g., doing a long jump to your own recovery point outside Lua).

The panic function, as its name implies, is a mechanism of last resort. Programs should avoid it. As a general rule, when a C function is called by Lua with a Lua state, it can do whatever it wants on that Lua state, as it should be already protected. However, when C code operates on other Lua states (e.g., a Lua-state argument to the function, a Lua state stored in the registry, or the result of [`lua_newthread`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_newthread)), it should use them only in API calls that cannot raise errors.

The panic function runs as if it were a message handler (see [§2.3](/docs/lua/v5-5-1/en/02-language/03-error-handling/#2.3)); in particular, the error object is on the top of the stack. However, there is no guarantee about stack space. To push anything on the stack, the panic function must first check the available space (see [§4.1.1](/docs/lua/v5-5-1/en/03-c-api/02-stack/#4.1.1)).

## 4.4.1 – <a id="4.4.1"></a>Status Codes

Several functions that report errors in the API use the following status codes to indicate different kinds of errors or other conditions:

- **<a id="pdf-LUA_OK"></a>`LUA_OK` (0)**: no errors.
- **<a id="pdf-LUA_ERRRUN"></a>`LUA_ERRRUN`**: a runtime error.
- **<a id="pdf-LUA_ERRMEM"></a>`LUA_ERRMEM`**: memory allocation error. For such errors, Lua does not call the message handler.
- **<a id="pdf-LUA_ERRERR"></a>`LUA_ERRERR`**: stack overflow while running the message handler due to another stack overflow. More often than not, this error is the result of some other error while running a message handler. An error in a message handler will call the handler again, which will generate the error again, and so on, until this loop exhausts the stack and cause this error.
- **<a id="pdf-LUA_ERRSYNTAX"></a>`LUA_ERRSYNTAX`**: syntax error during precompilation or format error in a binary chunk.
- **<a id="pdf-LUA_YIELD"></a>`LUA_YIELD`**: the thread (coroutine) yields.
- **<a id="pdf-LUA_ERRFILE"></a>`LUA_ERRFILE`**: a file-related error; e.g., it cannot open or read the file.

These constants are defined in the header file `lua.h`.
