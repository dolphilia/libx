# Thread Safety
The library does not use global variables. Therefore, if you can ensure that the input parameters of a function are thread-safe, then the function calls are also thread-safe.<br/>

In general, `yyjson_doc` and `yyjson_val` are immutable and thread-safe, while `yyjson_mut_doc` and `yyjson_mut_val` are mutable and not thread-safe.



