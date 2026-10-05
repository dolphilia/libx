Tokenization
---

Tokenization is the process of splitting a larger string into smaller strings.
In this specific case, the split is performed specifying another string that
acts as separator. For example in the following string there are two substrings
that are separated by the `|-|` separator:

```
foo|-|bar|-|zap
```

A more common separator that consists of a single character is the comma:

```
foo,bar,zap
```

In many progrems it is useful to process a line in order to obtain the sub
strings it is composed of, so SDS provides a function that returns an
array of SDS strings given a string and a separator.

```c
sds *sdssplitlen(const char *s, int len, const char *sep, int seplen, int *count);
void sdsfreesplitres(sds *tokens, int count);
```

As usually the function can work with both SDS strings or normal C strings.
The first two arguments `s` and `len` specify the string to tokenize, and the
other two arguments `sep` and `seplen` the separator to use during the
tokenization. The final argument `count` is a pointer to an integer that will
be set to the number of tokens (sub strings) returned.

The return value is a heap allocated array of SDS strings.

```c
sds *tokens;
int count, j;

sds line = sdsnew("Hello World!");
tokens = sdssplitlen(line,sdslen(line)," ",1,&count);

for (j = 0; j < count; j++)
    printf("%s\n", tokens[j]);
sdsfreesplitres(tokens,count);

output> Hello
output> World!
```

The returned array is heap allocated, and the single elements of the array
are normal SDS strings. You can free everything calling `sdsfreesplitres`
as in the example. Alternativey you are free to release the array yourself
using the `free` function and use and/or free the individual SDS strings
as usually.

A valid approach is to set the array elements you reused in some way to
`NULL`, and use `sdsfreesplitres` to free all the rest.

Command line oriented tokenization
---

Splitting by a separator is a useful operation, but usually it is not enough
to perform one of the most common tasks involving some non trivial string
manipulation, that is, implementing a **Command Line Interface** for a program.

This is why SDS also provides an additional function that allows you to split
arguments provided by the user via the keyboard in an interactive manner, or
via a file, network, or any other mean, into tokens.

```c
sds *sdssplitargs(const char *line, int *argc);
```

The `sdssplitargs` function returns an array of SDS strings exactly like
`sdssplitlen`. The function to free the result is also identical, and is
`sdsfreesplitres`. The difference is in the way the tokenization is performed.

For example if the input is the following line:

```
call "Sabrina"    and "Mark Smith\n"
```

The function will return the following tokens:

* "call"
* "Sabrina"
* "and"
* "Mark Smith\n"

Basically different tokens need to be separated by one or more spaces, and
every single token can also be a quoted string in the same format that
`sdscatrepr` is able to emit.

String joining
---

There are two functions doing the reverse of tokenization by joining strings
into a single one.

```c
sds sdsjoin(char **argv, int argc, char *sep, size_t seplen);
sds sdsjoinsds(sds *argv, int argc, const char *sep, size_t seplen);
```

The two functions take as input an array of strings of length `argc` and
a separator and its length, and produce as output an SDS string consisting
of all the specified strings separated by the specified separator.

The difference between `sdsjoin` and `sdsjoinsds` is that the former accept
C null terminated strings as input while the latter requires all the strings
in the array to be SDS strings. However because of this only `sdsjoinsds` is
able to deal with binary data.

```c
char *tokens[3] = {"foo","bar","zap"};
sds s = sdsjoin(tokens,3,"|",1);
printf("%s\n", s);

output> foo|bar|zap
```

Error handling
---

All the SDS functions that return an SDS pointer may also return `NULL` on
out of memory, this is basically the only check you need to perform.

However many modern C programs handle out of memory simply aborting the program
so you may want to do this as well by wrapping `malloc` and other related
memory allocation calls directly.

