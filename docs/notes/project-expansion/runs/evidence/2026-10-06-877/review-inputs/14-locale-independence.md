# Locale Independence
The library is designed to be locale-independent.

However, there are certain conditions that you should be aware of:

1. You use libc's `setlocale()` function to change the locale.
2. Your environment does not adhere to the IEEE 754 floating-point standard (e.g. some IBM mainframes), or you explicitly set `YYJSON_DISABLE_FAST_FP_CONV` during build, in which case yyjson will use `strtod()` to parse floating-point numbers.

If **both** of these conditions are met, it is recommended to avoid calling `setlocale()` while another thread is parsing JSON. Otherwise, an error may be returned during JSON floating-point number parsing.
