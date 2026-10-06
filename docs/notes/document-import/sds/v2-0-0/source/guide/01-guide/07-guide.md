Sharing SDS strings
---

If you are writing a program in which it is advantageous to share the same
SDS string across different data structures, it is absolutely advised to
encapsulate SDS strings into structures that remember the number of references
of the string, with functions to increment and decrement the number of references.

This approach is a memory management technique called *reference counting* and
in the context of SDS has two advantages:

* It is less likely that you'll create memory leaks or bugs due to non freeing SDS strings or freeing already freed strings.
* You'll not need to update every reference to an SDS string when you modify it (since the new SDS string may point to a different memory location).

While this is definitely a very common programming technique I'll outline
the basic ideas here. You create a structure like that:

```c
struct mySharedStrings {
    int refcount;
    sds string;
}
```

When new strings are created, the structure is allocated and returned with
`refcount` set to 1. The you have two functions to change the reference count
of the shared string:

* `incrementStringRefCount` will simply increment `refcount` of 1 in the structure. It will be called every time you add a reference to the string on some new data structure, variable, or whatever.
* `decrementStringRefCount` is used when you remove a reference. This function is however special since when the `refcount` drops to zero, it automatically frees the SDS string, and the `mySharedString` structure as well.

Interactions with heap checkers
---

Because SDS returns pointers into the middle of memory chunks allocated with
`malloc`, heap checkers may have issues, however:

* The popular Valgrind program will detect SDS strings are *possibly lost* memory and never as *definitely lost*, so it is easy to tell if there is a leak or not. I used Valgrind with Redis for years and every real leak was consistently detected as "definitely lost".
* OSX instrumentation tools don't detect SDS strings as leaks but are able to correctly handle pointers pointing to the middle of memory chunks.

Zero copy append from syscalls
----

At this point you should have all the tools to dig more inside the SDS
library by reading the source code, however there is an interesting pattern
you can mount using the low level API exported, that is used inside Redis
in order to improve performances of the networking code.

Using `sdsIncrLen()` and `sdsMakeRoomFor()` it is possible to mount the
following schema, to cat bytes coming from the kernel to the end of an
sds string without copying into an intermediate buffer:

```c
oldlen = sdslen(s);
s = sdsMakeRoomFor(s, BUFFER_SIZE);
nread = read(fd, s+oldlen, BUFFER_SIZE);
... check for nread <= 0 and handle it ...
sdsIncrLen(s, nread);
```

`sdsIncrLen` is documented inside the source code of `sds.c`.

