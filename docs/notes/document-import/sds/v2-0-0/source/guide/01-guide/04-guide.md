Trimming strings and getting ranges
---

String trimming is a common operation where a set of characters are
removed from the left and the right of the string. Another useful operation
regarding strings is the ability to just take a range out of a larger
string.

```c
void sdstrim(sds s, const char *cset);
void sdsrange(sds s, int start, int end);
```

SDS provides both the operations with the `sdstrim` and `sdsrange` functions.
However note that both functions work differently than most functions modifying
SDS strings since the return value is null: basically those functions always
destructively modify the passed SDS string, never allocating a new one, because
both trimming and ranges will never need more room: the operations can only
remove characters from the original strings.

Because of this behavior, both functions are fast and don't involve reallocation.

This is an example of string trimming where newlines and spaces are removed
from an SDS strings:

```c
sds s = sdsnew("         my string\n\n  ");
sdstrim(s," \n");
printf("-%s-\n",s);

output> -my string-
```

Basically `sdstrim` takes the SDS string to trim as first argument, and a
null terminated set of characters to remove from left and right of the string.
The characters are removed as long as they are not interrupted by a character
that is not in the list of characters to trim: this is why the space between
`"my"` and `"string"` was preserved in the above example.

Taking ranges is similar, but instead to take a set of characters, it takes
to indexes, representing the start and the end as specified by zero-based
indexes inside the string, to obtain the range that will be retained.

```c
sds s = sdsnew("Hello World!");
sdsrange(s,1,4);
printf("-%s-\n");

output> -ello-
```

Indexes can be negative to specify a position starting from the end of the
string, so that `-1` means the last character, `-2` the penultimate, and so forth:

```c
sds s = sdsnew("Hello World!");
sdsrange(s,6,-1);
printf("-%s-\n");
sdsrange(s,0,-2);
printf("-%s-\n");

output> -World!-
output> -World-
```

`sdsrange` is very useful when implementing networking servers processing
a protocol or sending messages. For example the following code is used
implementing the write handler of the Redis Cluster message bus between
nodes:

```c
void clusterWriteHandler(..., int fd, void *privdata, ...) {
    clusterLink *link = (clusterLink*) privdata;
    ssize_t nwritten = write(fd, link->sndbuf, sdslen(link->sndbuf));
    if (nwritten <= 0) {
        /* Error handling... */
    }
    sdsrange(link->sndbuf,nwritten,-1);
    ... more code here ...
}
```

Every time the socket of the node we want to send the message to is writable
we attempt to write as much bytes as possible, and we use `sdsrange` in order
to remove from the buffer what was already sent.

The function to queue new messages to send to some node in the cluster will
simply use `sdscatlen` in order to put more data in the send buffer.

Note that the Redis Cluster bus implements a binary protocol, but since SDS
is binary safe this is not a problem, so the goal of SDS is not just to provide
an high level string API for the C programmer but also dynamically allocated
buffers that are easy to manage.

String copying
---

The most dangerous and infamus function of the standard C library is probably
`strcpy`, so perhaps it is funny how in the context of better designed dynamic
string libraries the concept of copying strings is almost irrelevant. Usually
what you do is to create strings with the content you want, or concatenating
more content as needed.

However SDS features a string copy function that is useful in performance
critical code sections, however I guess its practical usefulness is limited
as the function never managed to get called in the context of the 50k
lines of code composing the Redis code base.

```c
sds sdscpylen(sds s, const char *t, size_t len);
sds sdscpy(sds s, const char *t);
```

The string copy function of SDS is called `sdscpylen` and works like that:

```c
s = sdsnew("Hello World!");
s = sdscpylen(s,"Hello Superman!",15);
```

As you can see the function receives as input the SDS string `s`, but also
returns an SDS string. This is common to many SDS functions that modify the
string: this way the returned SDS string may be the original one modified
or a newly allocated one (for example if there was not enough room in the
old SDS string).

The `sdscpylen` will simply replace what was in the old SDS string with the
new data you pass using the pointer and length argument. There is a similar
function called `sdscpy` that does not need a length but expects a null
terminated string instead.

You may wonder why it makes sense to have a string copy function in the
SDS library, since you can simply create a new SDS string from scratch
with the new value instead of copying the value in an existing SDS string.
The reason is efficiency: `sdsnewlen` will always allocate a new string
while `sdscpylen` will try to reuse the existing string if there is enough
room to old the new content specified by the user, and will allocate a new
one only if needed.

Quoting strings
---

In order to provide consistent output to the program user, or for debugging
purposes, it is often important to turn a string that may contain binary
data or special characters into a quoted string. Here for quoted string
we mean the common format for String literals in programming source code.
However today this format is also part of the well known serialization formats
like JSON and CSV, so it definitely escaped the simple gaol of representing
literals strings in the source code of programs.

An example of quoted string literal is the following:

```c
"\x00Hello World\n"
```

The first byte is a zero byte while the last byte is a newline, so there are
two non alphanumerical characters inside the string.

SDS uses a concatenation function for this goal, that concatenates to an
existing string the quoted string representation of the input string.

```c
sds sdscatrepr(sds s, const char *p, size_t len);
```

The `scscatrepr` (where `repr` means *representation*) follows the usualy
SDS string function rules accepting a char pointer and a length, so you can
use it with SDS strings, normal C strings by using strlen() as `len` argument,
or binary data. The following is an example usage:

```c
sds s1 = sdsnew("abcd");
sds s2 = sdsempty();
s[1] = 1;
s[2] = 2;
s[3] = '\n';
s2 = sdscatrepr(s2,s1,sdslen(s1));
printf("%s\n", s2);

output> "a\x01\x02\n"
```

This is the rules `sdscatrepr` uses for conversion:

* `\` and `"` are quoted with a backslash.
* It quotes special characters `'\n'`, `'\r'`, `'\t'`, `'\a'` and `'\b'`.
* All the other non printable characters not passing the `isprint` test are quoted in `\x..` form, that is: backslash followed by `x` followed by two digit hex number representing the character byte value.
* The function always adds initial and final double quotes characters.

There is an SDS function that is able to perform the reverse conversion and is
documented in the *Tokenization* paragraph below.

