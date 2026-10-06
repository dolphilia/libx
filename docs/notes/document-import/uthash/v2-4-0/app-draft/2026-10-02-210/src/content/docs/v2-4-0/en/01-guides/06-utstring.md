---
title: "utstring: dynamic string macros for C"
description: "uthash 2.4.0 official source: utstring: dynamic string macros for C"
sourceURL: "https://github.com/troydhanson/uthash/blob/a49bed0b4abb7dff16c73906dcdc8a9718d582d2/doc/utstring.txt"
licenseSource: "uthash-utstring-2.4.0"
upstreamAuthors: ["Troy D. Hanson <tdh@tkhanson.net>","Arthur O'Dwyer <arthur.j.odwyer@gmail.com>"]
upstreamVersionHeader: "v2.4.0, June 2026"
---

<div id="preamble">

<div class="sectionbody">

<div class="paragraph">

v2.4.0, June 2026

</div>

<div class="paragraph">

Here’s a link back to the [GitHub project page](https://github.com/troydhanson/uthash).

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_introduction-->

## Introduction

<div class="sectionbody">

<div class="paragraph">

A set of basic dynamic string macros for C programs are included with uthash in `utstring.h`. To use these in your own C program, just copy `utstring.h` into your source directory and use it in your programs.

</div>

<div class="literalblock">

<div class="content">

    #include "utstring.h"

</div>

</div>

<div class="paragraph">

The dynamic string supports operations such as inserting data, concatenation, getting the length and content, substring search, and clear. It’s ok to put binary data into a utstring too. The string [operations](#operations) are listed below.

</div>

<div class="paragraph">

Some utstring operations are implemented as functions rather than macros.

</div>

<div class="sect2">

<!--libx-source-heading:_download-->

### Download

<div class="paragraph">

To download the `utstring.h` header file, follow the links on <https://github.com/troydhanson/uthash> to clone uthash or get a zip file, then look in the src/ sub-directory.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_bsd_licensed-->

### BSD licensed

<div class="paragraph">

This software is made available under the [revised BSD license](/docs/uthash/v2-4-0/en/02-license/01-license/). It is free and open source.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_platforms-->

### Platforms

<div class="paragraph">

The *utstring* macros have been tested on:

</div>

<div class="ulist">

- Linux,

- Windows, using Visual Studio 2008 and Visual Studio 2010

</div>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_usage-->

## Usage

<div class="sectionbody">

<div class="sect2">

<!--libx-source-heading:_declaration-->

### Declaration

<div class="paragraph">

The dynamic string itself has the data type `UT_string`. It is declared like,

</div>

<div class="literalblock">

<div class="content">

    UT_string *str;

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_new_and_free-->

### New and free

<div class="paragraph">

The next step is to create the string using `utstring_new`. Later when you’re done with it, `utstring_free` will free it and all its content.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_manipulation-->

### Manipulation

<div class="paragraph">

The `utstring_printf` or `utstring_bincpy` operations insert (copy) data into the string. To concatenate one utstring to another, use `utstring_concat`. To clear the content of the string, use `utstring_clear`. The length of the string is available from `utstring_len`, and its content from `utstring_body`. This evaluates to a `char*`. The buffer it points to is always null-terminated. So, it can be used directly with external functions that expect a string. This automatic null terminator is not counted in the length of the string.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_samples-->

### Samples

<div class="paragraph">

These examples show how to use utstring.

</div>

<div class="listingblock">

<div class="title">

Sample 1

</div>

<div class="content">

    #include <stdio.h>
    #include "utstring.h"

    int main() {
        UT_string *s;

        utstring_new(s);
        utstring_printf(s, "hello world!" );
        printf("%s\n", utstring_body(s));

        utstring_free(s);
        return 0;
    }

</div>

</div>

<div class="paragraph">

The next example demonstrates that `utstring_printf` *appends* to the string. It also shows concatenation.

</div>

<div class="listingblock">

<div class="title">

Sample 2

</div>

<div class="content">

    #include <stdio.h>
    #include "utstring.h"

    int main() {
        UT_string *s, *t;

        utstring_new(s);
        utstring_new(t);

        utstring_printf(s, "hello " );
        utstring_printf(s, "world " );

        utstring_printf(t, "hi " );
        utstring_printf(t, "there " );

        utstring_concat(s, t);
        printf("length: %u\n", utstring_len(s));
        printf("%s\n", utstring_body(s));

        utstring_free(s);
        utstring_free(t);
        return 0;
    }

</div>

</div>

<div class="paragraph">

The next example shows how binary data can be inserted into the string. It also clears the string and prints new data into it.

</div>

<div class="listingblock">

<div class="title">

Sample 3

</div>

<div class="content">

    #include <stdio.h>
    #include "utstring.h"

    int main() {
        UT_string *s;
        char binary[] = "\xff\xff";

        utstring_new(s);
        utstring_bincpy(s, binary, sizeof(binary));
        printf("length is %u\n", utstring_len(s));

        utstring_clear(s);
        utstring_printf(s,"number %d", 10);
        printf("%s\n", utstring_body(s));

        utstring_free(s);
        return 0;
    }

</div>

</div>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:operations-->

## Reference

<div class="sectionbody">

<div class="paragraph">

These are the utstring operations.

</div>

<div class="sect2">

<!--libx-source-heading:_operations-->

### Operations

<div class="tableblock">

<table rules="none" width="100%" frame="border" cellspacing="0" cellpadding="4">
<colgroup><col width="55%">
<col width="44%">
</colgroup><tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_new(s)</code></p></td>
<td align="left" valign="top"><p class="table">allocate a new utstring</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_renew(s)</code></p></td>
<td align="left" valign="top"><p class="table">allocate a new utstring (if s is <code>NULL</code>) otherwise clears it</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_free(s)</code></p></td>
<td align="left" valign="top"><p class="table">free an allocated utstring</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_init(s)</code></p></td>
<td align="left" valign="top"><p class="table">init a utstring (non-alloc)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_done(s)</code></p></td>
<td align="left" valign="top"><p class="table">dispose of a utstring (non-alloc)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_printf(s,fmt,…)</code></p></td>
<td align="left" valign="top"><p class="table">printf into a utstring (appends)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_bincpy(s,bin,len)</code></p></td>
<td align="left" valign="top"><p class="table">insert binary data of length len (appends)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_concat(dst,src)</code></p></td>
<td align="left" valign="top"><p class="table">concatenate src utstring to end of dst utstring</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_clear(s)</code></p></td>
<td align="left" valign="top"><p class="table">clear the content of s (setting its length to 0)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_len(s)</code></p></td>
<td align="left" valign="top"><p class="table">obtain the length of s as an unsigned integer</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_body(s)</code></p></td>
<td align="left" valign="top"><p class="table">get <code>char*</code> to body of s (buffer is always null-terminated)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_find(s,pos,str,len)</code></p></td>
<td align="left" valign="top"><p class="table">forward search from pos for a substring</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utstring_findR(s,pos,str,len)</code></p></td>
<td align="left" valign="top"><p class="table">reverse search from pos for a substring</p></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_new_free_vs_init_done-->

### New/free vs. init/done

<div class="paragraph">

Use `utstring_new` and `utstring_free` to allocate a new string or free it. If the UT_string is statically allocated, use `utstring_init` and `utstring_done` to initialize or free its internal memory.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_substring_search-->

### Substring search

<div class="paragraph">

Use `utstring_find` and `utstring_findR` to search for a substring in a utstring. It comes in forward and reverse varieties. The reverse search scans from the end of the string backward. These take a position to start searching from, measured from 0 (the start of the utstring). A negative position is counted from the end of the string, so, -1 is the last position. Note that in the reverse search, the initial position anchors to the *end* of the substring being searched for; e.g., the *t* in *cat*. The return value always refers to the offset where the substring *starts* in the utstring. When no substring match is found, -1 is returned.

</div>

<div class="paragraph">

For example if a utstring called `s` contains:

</div>

<div class="literalblock">

<div class="content">

    ABC ABCDAB ABCDABCDABDE

</div>

</div>

<div class="paragraph">

Then these forward and reverse substring searches for `ABC` produce these results:

</div>

<div class="literalblock">

<div class="content">

    utstring_find(  s, -9, "ABC", 3 ) = 15
    utstring_find(  s,  3, "ABC", 3 ) =  4
    utstring_find(  s, 16, "ABC", 3 ) = -1
    utstring_findR( s, -9, "ABC", 3 ) = 11
    utstring_findR( s, 12, "ABC", 3 ) =  4
    utstring_findR( s,  2, "ABC", 3 ) =  0

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_multiple_use_substring_search-->

#### "Multiple use" substring search

<div class="paragraph">

The preceding examples show "single use" versions of substring matching, where the internal Knuth-Morris-Pratt (KMP) table is internally built and then freed after the search. If your program needs to run many searches for a given substring, it is more efficient to save the KMP table and reuse it.

</div>

<div class="paragraph">

To reuse the KMP table, build it manually and then pass it into the internal search functions. The functions involved are:

</div>

<div class="literalblock">

<div class="content">

    _utstring_BuildTable  (build the KMP table for a forward search)
    _utstring_BuildTableR (build the KMP table for a reverse search)
    _utstring_find        (forward search using a prebuilt KMP table)
    _utstring_findR       (reverse search using a prebuilt KMP table)

</div>

</div>

<div class="paragraph">

This is an example of building a forward KMP table for the substring "ABC", and then using it in a search:

</div>

<div class="literalblock">

<div class="content">

    long *KPM_TABLE, offset;
    KPM_TABLE = (long *)malloc( sizeof(long) * (strlen("ABC")) + 1));
    _utstring_BuildTable("ABC", 3, KPM_TABLE);
    offset = _utstring_find(utstring_body(s), utstring_len(s), "ABC", 3, KPM_TABLE );
    free(KPM_TABLE);

</div>

</div>

<div class="paragraph">

Note that the internal `_utstring_find` has the length of the UT_string as its second argument, rather than the start position. You can emulate the position parameter by adding to the string start address and subtracting from its length.

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_notes-->

### Notes

<div class="olist arabic">

1.  To override the default out-of-memory handling behavior (which calls `exit(-1)`), override the `utstring_oom()` macro before including `utstring.h`. For example,

    <div class="literalblock">

    <div class="content">

        #define utstring_oom() do { longjmp(error_handling_location); } while (0)
        ...
        #include "utstring.h"

    </div>

    </div>

</div>

</div>

</div>

</div>
