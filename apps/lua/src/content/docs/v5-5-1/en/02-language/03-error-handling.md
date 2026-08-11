---
title: "Error handling"
description: "Lua error handling and protected execution"
licenseSource: "lua-5.5.1"
---

# 2.3 – <a id="2.3"></a>Error Handling

Several operations in Lua can *raise* an error. An error interrupts the normal flow of the program, which can continue by *catching* the error.

Lua code can explicitly raise an error by calling the [`error`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-error) function. (This function never returns.)

To catch errors in Lua, you can do a *protected call*, using [`pcall`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-pcall) (or [`xpcall`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-xpcall)). The function [`pcall`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-pcall) calls a given function in *protected mode*. Any error while running the function stops its execution, and control returns immediately to `pcall`, which returns a status code.

Because Lua is an embedded extension language, Lua code starts running by a call from C code in the host program. (When you use Lua standalone, the `lua` application is the host program.) Usually, this call is protected; so, when an otherwise unprotected error occurs during the compilation or execution of a Lua chunk, control returns to the host, which can take appropriate measures, such as printing an error message.

Whenever there is an error, an *error object* is propagated with information about the error. Lua itself only generates errors whose error object is a string, but programs can generate errors with any value as the error object, except **nil**. (Lua will change a **nil** as error object to a string message.) It is up to the Lua program or its host to handle such error objects. For historical reasons, an error object is often called an *error message*, even though it does not have to be a string.

When you use [`xpcall`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-xpcall) (or [`lua_pcall`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_pcall), in C) you can give a *message handler* to be called in case of errors. This function is called with the original error object and returns a new error object. It is called before the error unwinds the stack, so that it can gather more information about the error, for instance by inspecting the stack and creating a stack traceback. This message handler is still protected by the protected call; so, an error inside the message handler will call the message handler again. If this loop goes on for too long, Lua breaks it and returns an appropriate message. The message handler is called only for regular runtime errors. It is not called for memory-allocation errors nor for errors while running finalizers or other message handlers.

Lua also offers a system of *warnings* (see [`warn`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-warn)). Unlike errors, warnings do not interfere in any way with program execution. They typically only generate a message to the user, although this behavior can be adapted from C (see [`lua_setwarnf`](/docs/lua/v5-5-1/en/03-c-api/14-functions-and-types-set-status/#lua_setwarnf)).
