SDS basics
===

The type of SDS strings is just the char pointer `char *`. However SDS defines
an `sds` type as alias of `char *` in its header file: you should use the
`sds` type in order to make sure you remember that a given variable in your
program holds an SDS string and not a C string, however this is not mandatory.

This is the simplest SDS program you can write that does something:

```c
sds mystring = sdsnew("Hello World!");
printf("%s\n", mystring);
sdsfree(mystring);

output> Hello World!
```

The above small program already shows a few important things about SDS:

* SDS strings are created, and heap allocated, via the `sdsnew()` function, or other similar functions that we'll see in a moment.
* SDS strings can be passed to `printf()` like any other C string.
* SDS strings require to be freed with `sdsfree()`, since they are heap allocated.

Creating SDS strings
---

```c
sds sdsnewlen(const void *init, size_t initlen);
sds sdsnew(const char *init);
sds sdsempty(void);
sds sdsdup(const sds s);
```

There are many ways to create SDS strings:

* The `sdsnew` function creates an SDS string starting from a C null terminated string. We already saw how it works in the above example.
* The `sdsnewlen` function is similar to `sdsnew` but instead of creating the string assuming that the input string is null terminated, it gets an additional length parameter. This way you can create a string using binary data:


        char buf[3];
        sds mystring;

        buf[0] = 'A';
        buf[1] = 'B';
        buf[2] = 'C';
        mystring = sdsnewlen(buf,3);
        printf("%s of len %d\n", mystring, (int) sdslen(mystring));

        output> ABC of len 3


  Note: `sdslen` return value is casted to `int` because it returns a `size_t`
type. You can use the right `printf` specifier instead of casting.

* The `sdsempty()` function creates an empty zero-length string:


        sds mystring = sdsempty();
        printf("%d\n", (int) sdslen(mystring));

        output> 0


* The `sdsdup()` function duplicates an already existing SDS string:


        sds s1, s2;

        s1 = sdsnew("Hello");
        s2 = sdsdup(s1);
        printf("%s %s\n", s1, s2);

        output> Hello Hello


Obtaining the string length
---

```c
size_t sdslen(const sds s);
```

In the examples above we already used the `sdslen` function in order to get
the length of the string. This function works like `strlen` of the libc
except that:

* It runs in constant time since the length is stored in the prefix of SDS strings, so calling `sdslen` is not expensive even when called with very large strings.
* The function is binary safe like any other SDS string function, so the length is the true length of the string regardless of the content, there is no problem if the string includes null term characters in the middle.

As an example of the binary safeness of SDS strings, we can run the following
code:

```c
sds s = sdsnewlen("A\0\0B",4);
printf("%d\n", (int) sdslen(s));

output> 4
```

Note that SDS strings are always null terminated at the end, so even in that
case `s[4]` will be a null term, however printing the string with `printf`
would result in just `"A"` to be printed since libc will treat the SDS string
like a normal C string.

Destroying strings
---

```c
void sdsfree(sds s);
```

The destroy an SDS string there is just to call `sdsfree` with the string
pointer. However note that empty strings created with `sdsempty` need to be
destroyed as well otherwise they'll result into a memory leak.

The function `sdsfree` does not perform any operation if instead of an SDS
string pointer, `NULL` is passed, so you don't need to check for `NULL` explicitly before calling it:

```c
if (string) sdsfree(string); /* Not needed. */
sdsfree(string); /* Same effect but simpler. */
```

Concatenating strings
---

Concatenating strings to other strings is likely the operation you will end
using the most with a dynamic C string library. SDS provides different
functions to concatenate strings to existing strings.

```c
sds sdscatlen(sds s, const void *t, size_t len);
sds sdscat(sds s, const char *t);
```

The main string concatenation functions are `sdscatlen` and `sdscat` that are
identical, the only difference being that `sdscat` does not have an explicit
length argument since it expects a null terminated string.

```c
sds s = sdsempty();
s = sdscat(s, "Hello ");
s = sdscat(s, "World!");
printf("%s\n", s);

output> Hello World!
```

Sometimes you want to cat an SDS string to another SDS string, so you don't
need to specify the length, but at the same time the string does not need to
be null terminated but can contain any binary data. For this there is a
special function:

```c
sds sdscatsds(sds s, const sds t);
```

Usage is straightforward:

```c
sds s1 = sdsnew("aaa");
sds s2 = sdsnew("bbb");
s1 = sdscatsds(s1,s2);
sdsfree(s2);
printf("%s\n", s1);

output> aaabbb
```

Sometimes you don't want to append any special data to the string, but you want
to make sure that there are at least a given number of bytes composing the
whole string.

```c
sds sdsgrowzero(sds s, size_t len);
```

The `sdsgrowzero` function will do nothing if the current string length is
already `len` bytes, otherwise it will enlarge the string to `len` just padding
it with zero bytes.

```c
sds s = sdsnew("Hello");
s = sdsgrowzero(s,6);
s[5] = '!'; /* We are sure this is safe because of sdsgrowzero() */
printf("%s\n', s);

output> Hello!
```

