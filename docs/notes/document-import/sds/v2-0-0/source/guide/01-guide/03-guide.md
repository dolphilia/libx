Formatting strings
---

There is a special string concatenation function that accepts a `printf` alike
format specifier and cats the formatted string to the specified string.

```c
sds sdscatprintf(sds s, const char *fmt, ...) {
```

Example:

```c
sds s;
int a = 10, b = 20;
s = sdsnew("The sum is: ");
s = sdscatprintf(s,"%d+%d = %d",a,b,a+b);
```

Often you need to create SDS string directly from `printf` format specifiers.
Because `sdscatprintf` is actually a function that concatenates strings all
you need is to concatenate your string to an empty string:


```c
char *name = "Anna";
int loc = 2500;
sds s;
s = sdscatprintf(sdsempty(), "%s wrote %d lines of LISP\n", name, loc);
```

You can use `sdscatprintf` in order to convert numbers into SDS strings:

```c
int some_integer = 100;
sds num = sdscatprintf(sdsempty(),"%d\n", some_integer);
```

However this is slow and we have a special function to make it efficient.

Fast number to string operations
---

Creating an SDS string from an integer may be a common operation in certain
kind of programs, and while you may do this with `sdscatprintf` the performance
hit is big, so SDS provides a specialized function.

```c
sds sdsfromlonglong(long long value);
```

Use it like this:

```c
sds s = sdsfromlonglong(10000);
printf("%d\n", (int) sdslen(s));

output> 5
```

