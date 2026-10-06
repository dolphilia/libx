---
title: "Coroutine manipulation"
description: "Coroutine library reference"
---

# 6.3 – <a id="6.3"></a>Coroutine Manipulation

This library comprises the operations to manipulate coroutines, which come inside the table <a id="pdf-coroutine"></a>`coroutine`. See [§2.6](/docs/lua/v5-5-1/en/02-language/06-coroutines/#2.6) for a general description of coroutines.

---

## <a id="pdf-coroutine.close"></a>`coroutine.close ([co])`

Closes coroutine `co`, that is, closes all its pending to-be-closed variables and puts the coroutine in a dead state. The default for `co` is the running coroutine.

The given coroutine must be dead, suspended, or be the running coroutine. For the running coroutine, this function does not return. Instead, the resume that (re)started the coroutine returns.

For other coroutines, in case of error (either the original error that stopped the coroutine or errors in closing methods), this function returns **false** plus the error object; otherwise it returns **true**.

---

## <a id="pdf-coroutine.create"></a>`coroutine.create (f)`

Creates a new coroutine, with body `f`. `f` must be a function. Returns this new coroutine, an object with type `"thread"`.

---

## <a id="pdf-coroutine.isyieldable"></a>`coroutine.isyieldable ([co])`

Returns **true** when the coroutine `co` can yield. The default for `co` is the running coroutine.

A coroutine is yieldable if it is not the main thread and it is not inside a non-yieldable C function.

---

## <a id="pdf-coroutine.resume"></a>`coroutine.resume (co [, val1, ···])`

Starts or continues the execution of coroutine `co`. The first time you resume a coroutine, it starts running its body. The values `val1`,... are passed as the arguments to the body function. If the coroutine has yielded, `resume` restarts it; the values `val1`,... are passed as the results from the yield.

If the coroutine runs without any errors, `resume` returns **true** plus any values passed to `yield` (when the coroutine yields) or any values returned by the body function (when the coroutine terminates). If there is any error, `resume` returns **false** plus the error message.

---

## <a id="pdf-coroutine.running"></a>`coroutine.running ()`

Returns the running coroutine plus a boolean, **true** when the running coroutine is the main one.

---

## <a id="pdf-coroutine.status"></a>`coroutine.status (co)`

Returns the status of the coroutine `co`, as a string: `"running"`, if the coroutine is running (that is, it is the one that called `status`); `"suspended"`, if the coroutine is suspended in a call to `yield`, or if it has not started running yet; `"normal"` if the coroutine is active but not running (that is, it has resumed another coroutine); and `"dead"` if the coroutine has finished its body function, or if it has stopped with an error.

---

## <a id="pdf-coroutine.wrap"></a>`coroutine.wrap (f)`

Creates a new coroutine, with body `f`; `f` must be a function. Returns a function that resumes the coroutine each time it is called. Any arguments passed to this function behave as the extra arguments to `resume`. The function returns the same values returned by `resume`, except the first boolean. In case of error, the function closes the coroutine and propagates the error.

---

## <a id="pdf-coroutine.yield"></a>`coroutine.yield (···)`

Suspends the execution of the calling coroutine. Any arguments to `yield` are passed as extra results to `resume`.
