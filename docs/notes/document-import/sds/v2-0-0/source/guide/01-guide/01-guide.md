Simple Dynamic Strings
===

**Notes about verison 2**: this is an updated version of SDS in an attempt
to finally unify Redis, Disque, Hiredis, and the stand alone SDS versions.
This version is **NOT* binary compatible** with SDS verison 1, but the API
is 99% compatible so switching to the new lib should be trivial.

Note that this version of SDS may be a slower with certain workloads, but
uses less memory compared to V1 since header size is dynamic and depends to
the string to alloc.

Moreover it includes a few more API functions, notably `sdscatfmt` which
is a faster version of `sdscatprintf` that can be used for the simpler
cases in order to avoid the libc `printf` family functions performance
penalty.

How SDS stirngs work
===

SDS is a string library for C designed to augment the limited libc string
handling functionalities by adding heap allocated strings that are:

* Simpler to use.
* Binary safe.
* Computationally more efficient.
* But yet... Compatible with normal C string functions.

This is achieved using an alternative design in which instead of using a C
structure to represent a string, we use a binary prefix that is stored
before the actual pointer to the string that is returned by SDS to the user.

    +--------+-------------------------------+-----------+
    | Header | Binary safe C alike string... | Null term |
    +--------+-------------------------------+-----------+
             |
             `-> Pointer returned to the user.

Because of meta data stored before the actual returned pointer as a prefix,
and because of every SDS string implicitly adding a null term at the end of
the string regardless of the actual content of the string, SDS strings work
well together with C strings and the user is free to use them interchangeably
with real-only functions that access the string in read-only.

SDS was a C string I developed in the past for my everyday C programming needs,
later it was moved into Redis where it is used extensively and where it was
modified in order to be suitable for high performance operations. Now it was
extracted from Redis and forked as a stand alone project.

Because of its many years life inside Redis, SDS provides both higher level
functions for easy strings manipulation in C, but also a set of low level
functions that make it possible to write high performance code without paying
a penalty for using an higher level string library.

Advantages and disadvantages of SDS
===

Normally dynamic string libraries for C are implemented using a structure
that defines the string. The structure has a pointer field that is managed
by the string function, so it looks like this:

```c
struct yourAverageStringLibrary {
    char *buf;
    size_t len;
    ... possibly more fields here ...
};
```

SDS strings are already mentioned don't follow this schema, and are instead
a single allocation with a prefix that lives *before* the address actually
returned for the string.

There are advantages and disadvantages with this approach over the traditional
approach:

**Disadvantage #1**: many functions return the new string as value, since sometimes SDS requires to create a new string with more space, so the most SDS API calls look like this:

```c
s = sdscat(s,"Some more data");
```

As you can see `s` is used as input for `sdscat` but is also set to the value
returned by the SDS API call, since we are not sure if the call modified the
SDS string we passed or allocated a new one. Not remembering to assign back
the return value of `sdscat` or similar functions to the variable holding
the SDS string will result in a bug.

**Disadvantage #2**: if an SDS string is shared in different places in your program you have to modify all the references when you modify the string. However most of the times when you need to share SDS strings it is much better to encapsulate them into structures with a `reference count` otherwise it is too easy to incur into memory leaks.

**Advantage #1**: you can pass SDS strings to functions designed for C functions without accessing a struct member or calling a function, like this:

```c
printf("%s\n", sds_string);
```

In most other libraries this will be something like:

```c
printf("%s\n", string->buf);
```

Or:

```c
printf("%s\n", getStringPointer(string));
```

**Advantage #2**: accessing individual chars is straightforward. C is a low level language so this is an important operation in many programs. With SDS strings accessing individual chars is very natural:

```c
printf("%c %c\n", s[0], s[1]);
```

With other libraries your best chance is to assign `string->buf` (or call the function to get the string pointer) to a `char` pointer and work with this. However since the other libraries may reallocate the buffer implicitly every time you call a function that may modify the string you have to get a reference to the buffer again.

**Advantage #3**: single allocation has better cache locality. Usually when you access a string created by a string library using a structure, you have two different allocations for the structure representing the string, and the actual buffer holding the string. Over the time the buffer is reallocated, and it is likely that it ends in a totally different part of memory compared to the structure itself. Since modern programs performances are often dominated by cache misses, SDS may perform better in many workloads.

