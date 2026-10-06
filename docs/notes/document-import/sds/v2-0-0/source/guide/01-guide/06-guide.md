SDS internals and advanced usage
===

At the very beginning of this documentation it was explained how SDS strings
are allocated, however the prefix stored before the pointer returned to the
user was classified as an *header* without further details. For an advanced
usage it is better to dig more into the internals of SDS and show the
structure implementing it:

```c
struct sdshdr {
    int len;
    int free;
    char buf[];
};
```

As you can see, the structure may resemble the one of a conventional string
library, however the `buf` field of the structure is different since it is
not a pointer but an array without any length declared, so `buf` actually
points at the first byte just after the `free` integer. So in order to create
an SDS string we just allocate a piece of memory that is as large as the
`sdshdr` structure plus the length of our string, plus an additional byte
for the mandatory null term that every SDS string has.

The `len` field of the structure is quite obvious, and is the current length
of the SDS string, always computed every time the string is modified via
SDS function calls. The `free` field instead represents the amount of free
memory in the current allocation that can be used to store more characters.

So the actual SDS layout is this one:

    +------------+------------------------+-----------+---------------\
    | Len | Free | H E L L O W O R L D \n | Null term |  Free space   \
    +------------+------------------------+-----------+---------------\
                 |
                 `-> Pointer returned to the user.

You may wonder why there is some free space at the end of the string, it
looks like a waste. Actually after a new SDS string is created, there is no
free space at the end at all: the allocation will be as small as possible to
just hold the header, string, and null term. However other access patterns
will create extra free space at the end, like in the following program:

```c
s = sdsempty();
s = sdscat(s,"foo");
s = sdscat(s,"bar");
s = sdscat(s,"123");
```

Since SDS tries to be efficient it can't afford to reallocate the string every
time new data is appended, since this would be very inefficient, so it uses
the **preallocation of some free space** every time you enlarge the string.

The preallocation algorithm used is the following: every time the string
is reallocated in order to hold more bytes, the actual allocation size performed
is two times the minimum required. So for instance if the string currently
is holding 30 bytes, and we concatenate 2 more bytes, instead of allocating 32
bytes in total SDS will allocate 64 bytes.

However there is an hard limit to the allocation it can perform ahead, and is
defined by `SDS_MAX_PREALLOC`. SDS will never allocate more than 1MB of
additional space (by default, you can change this default).

Shrinking strings
---

```c
sds sdsRemoveFreeSpace(sds s);
size_t sdsAllocSize(sds s);
```

Sometimes there are class of programs that require to use very little memory.
After strings concatenations, trimming, ranges, the string may end having
a non trivial amount of additional space at the end.

It is possible to resize a string back to its minimal size in order to hold
the current content by using the function `sdsRemoveFreeSpace`.

```c
s = sdsRemoveFreeSpace(s);
```

There is also a function that can be used in order to get the size of the
total allocation for a given string, and is called `sdsAllocSize`.

```c
sds s = sdsnew("Ladies and gentlemen");
s = sdscat(s,"... welcome to the C language.");
printf("%d\n", (int) sdsAllocSize(s));
s = sdsRemoveFreeSpace(s);
printf("%d\n", (int) sdsAllocSize(s));

output> 109
output> 59
```

NOTE: SDS Low level API use cammelCase in order to warn you that you are playing with the fire.

Manual modifications of SDS strings
---

    void sdsupdatelen(sds s);

Sometimes you may want to hack with an SDS string manually, without using
SDS functions. In the following example we implicitly change the length
of the string, however we want the logical length to reflect the null terminated
C string.

The function `sdsupdatelen` does just that, updating the internal length
information for the specified string to the length obtained via `strlen`.

```c
sds s = sdsnew("foobar");
s[2] = '\0';
printf("%d\n", sdslen(s));
sdsupdatelen(s);
printf("%d\n", sdslen(s));

output> 6
output> 2
```

