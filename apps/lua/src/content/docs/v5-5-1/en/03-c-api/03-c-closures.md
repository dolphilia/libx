---
title: "C closures"
description: "C functions, upvalues and C closures"
licenseSource: "lua-5.5.1"
---

# 4.2 – <a id="4.2"></a>C Closures

When a C function is created, it is possible to associate some values with it, thus creating a *C closure* (see [`lua_pushcclosure`](/docs/lua/v5-5-1/en/03-c-api/12-functions-and-types-pop-push/#lua_pushcclosure)); these values are called *upvalues* and are accessible to the function whenever it is called.

Whenever a C function is called, its upvalues are located at specific pseudo-indices. These pseudo-indices are produced by the macro [`lua_upvalueindex`](/docs/lua/v5-5-1/en/03-c-api/16-functions-and-types-u-y/#lua_upvalueindex). The first upvalue associated with a function is at index `lua_upvalueindex(1)`, and so on. Any access to `lua_upvalueindex(n)`, where *n* is greater than the number of upvalues of the current function (but not greater than 256, which is one plus the maximum number of upvalues in a closure), produces an acceptable but invalid index.

A C closure can also change the values of its corresponding upvalues.
