---
title: "utarray: dynamic array macros for C"
description: "uthash 2.4.0 official source: utarray: dynamic array macros for C"
sourceURL: "https://github.com/troydhanson/uthash/blob/a49bed0b4abb7dff16c73906dcdc8a9718d582d2/doc/utarray.txt"
licenseSource: "uthash-utarray-2.4.0"
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

A set of general-purpose dynamic array macros for C structures are included with uthash in `utarray.h`. To use these macros in your own C program, just copy `utarray.h` into your source directory and use it in your programs.

</div>

<div class="literalblock">

<div class="content">

    #include "utarray.h"

</div>

</div>

<div class="paragraph">

The dynamic array supports basic operations such as push, pop, and erase on the array elements. These array elements can be any simple datatype or structure. The array [operations](#operations) are based loosely on the C++ STL vector methods.

</div>

<div class="paragraph">

Internally the dynamic array contains a contiguous memory region into which the elements are copied. This buffer is grown as needed using `realloc` to accommodate all the data that is pushed into it.

</div>

<div class="sect2">

<!--libx-source-heading:_download-->

### Download

<div class="paragraph">

To download the `utarray.h` header file, follow the links on <https://github.com/troydhanson/uthash> to clone uthash or get a zip file, then look in the src/ sub-directory.

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

The *utarray* macros have been tested on:

</div>

<div class="ulist">

- Linux,

- Mac OS X,

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

The array itself has the data type `UT_array`, regardless of the type of elements to be stored in it. It is declared like,

</div>

<div class="literalblock">

<div class="content">

    UT_array *nums;

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_new_and_free-->

### New and free

<div class="paragraph">

The next step is to create the array using `utarray_new`. Later when you’re done with the array, `utarray_free` will free it and all its elements.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_push_pop_etc-->

### Push, pop, etc

<div class="paragraph">

The central features of the utarray involve putting elements into it, taking them out, and iterating over them. There are several [operations](#operations) to pick from that deal with either single elements or ranges of elements at a time. In the examples below we will use only the push operation to insert elements.

</div>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_elements-->

## Elements

<div class="sectionbody">

<div class="paragraph">

Support for dynamic arrays of integers or strings is especially easy. These are best shown by example:

</div>

<div class="sect2">

<!--libx-source-heading:_integers-->

### Integers

<div class="paragraph">

This example makes a utarray of integers, pushes 0-9 into it, then prints it. Lastly it frees it.

</div>

<div class="listingblock">

<div class="title">

Integer elements

</div>

<div class="content">

    #include <stdio.h>
    #include "utarray.h"

    int main() {
      UT_array *nums;
      int i, *p;

      utarray_new(nums,&ut_int_icd);
      for(i=0; i < 10; i++) utarray_push_back(nums,&i);

      for(p=(int*)utarray_front(nums);
          p!=NULL;
          p=(int*)utarray_next(nums,p)) {
        printf("%d\n",*p);
      }

      utarray_free(nums);

      return 0;
    }

</div>

</div>

<div class="paragraph">

The second argument to `utarray_push_back` is always a *pointer* to the type (so a literal cannot be used). So for integers, it is an `int*`.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_strings-->

### Strings

<div class="paragraph">

In this example we make a utarray of strings, push two strings into it, print it and free it.

</div>

<div class="listingblock">

<div class="title">

String elements

</div>

<div class="content">

    #include <stdio.h>
    #include "utarray.h"

    int main() {
      UT_array *strs;
      char *s, **p;

      utarray_new(strs,&ut_str_icd);

      s = "hello"; utarray_push_back(strs, &s);
      s = "world"; utarray_push_back(strs, &s);
      p = NULL;
      while ( (p=(char**)utarray_next(strs,p))) {
        printf("%s\n",*p);
      }

      utarray_free(strs);

      return 0;
    }

</div>

</div>

<div class="paragraph">

In this example, since the element is a `char*`, we pass a pointer to it (`char**`) as the second argument to `utarray_push_back`. Note that "push" makes a copy of the source string and pushes that copy into the array.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_about_ut_icd-->

### About UT_icd

<div class="paragraph">

Arrays can be made of any type of element, not just integers and strings. The elements can be basic types or structures. Unless you’re dealing with integers and strings (which use pre-defined `ut_int_icd` and `ut_str_icd`), you’ll need to define a `UT_icd` helper structure. This structure contains everything that utarray needs to initialize, copy or destruct elements.

</div>

<div class="literalblock">

<div class="content">

    typedef struct {
        size_t sz;
        init_f *init;
        ctor_f *copy;
        dtor_f *dtor;
    } UT_icd;

</div>

</div>

<div class="paragraph">

The three function pointers `init`, `copy`, and `dtor` have these prototypes:

</div>

<div class="literalblock">

<div class="content">

    typedef void (ctor_f)(void *dst, const void *src);
    typedef void (dtor_f)(void *elt);
    typedef void (init_f)(void *elt);

</div>

</div>

<div class="paragraph">

The `sz` is just the size of the element being stored in the array.

</div>

<div class="paragraph">

The `init` function will be invoked whenever utarray needs to initialize an empty element. This only happens as a byproduct of `utarray_resize` or `utarray_extend_back`. If `init` is `NULL`, it defaults to zero filling the new element using memset.

</div>

<div class="paragraph">

The `copy` function is used whenever an element is copied into the array. It is invoked during `utarray_push_back`, `utarray_insert`, `utarray_inserta`, or `utarray_concat`. If `copy` is `NULL`, it defaults to a bitwise copy using memcpy.

</div>

<div class="paragraph">

The `dtor` function is used to clean up an element that is being removed from the array. It may be invoked due to `utarray_resize`, `utarray_pop_back`, `utarray_erase`, `utarray_clear`, `utarray_done` or `utarray_free`. If the elements need no cleanup upon destruction, `dtor` may be `NULL`.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_scalar_types-->

### Scalar types

<div class="paragraph">

The next example uses `UT_icd` with all its defaults to make a utarray of `long` elements. This example pushes two longs, prints them, and frees the array.

</div>

<div class="listingblock">

<div class="title">

long elements

</div>

<div class="content">

    #include <stdio.h>
    #include "utarray.h"

    UT_icd long_icd = {sizeof(long), NULL, NULL, NULL };

    int main() {
      UT_array *nums;
      long l, *p;
      utarray_new(nums, &long_icd);

      l=1; utarray_push_back(nums, &l);
      l=2; utarray_push_back(nums, &l);

      p=NULL;
      while( (p=(long*)utarray_next(nums,p))) printf("%ld\n", *p);

      utarray_free(nums);
      return 0;
    }

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_structures-->

### Structures

<div class="paragraph">

Structures can be used as utarray elements. If the structure requires no special effort to initialize, copy or destruct, we can use `UT_icd` with all its defaults. This example shows a structure that consists of two integers. Here we push two values, print them and free the array.

</div>

<div class="listingblock">

<div class="title">

Structure (simple)

</div>

<div class="content">

    #include <stdio.h>
    #include "utarray.h"

    typedef struct {
        int a;
        int b;
    } intpair_t;

    UT_icd intpair_icd = {sizeof(intpair_t), NULL, NULL, NULL};

    int main() {

      UT_array *pairs;
      intpair_t ip, *p;
      utarray_new(pairs,&intpair_icd);

      ip.a=1;  ip.b=2;  utarray_push_back(pairs, &ip);
      ip.a=10; ip.b=20; utarray_push_back(pairs, &ip);

      for(p=(intpair_t*)utarray_front(pairs);
          p!=NULL;
          p=(intpair_t*)utarray_next(pairs,p)) {
        printf("%d %d\n", p->a, p->b);
      }

      utarray_free(pairs);
      return 0;
    }

</div>

</div>

<div class="paragraph">

The real utility of `UT_icd` is apparent when the elements of the utarray are structures that require special work to initialize, copy or destruct.

</div>

<div class="paragraph">

For example, when a structure contains pointers to related memory areas that need to be copied when the structure is copied (and freed when the structure is freed), we can use custom `init`, `copy`, and `dtor` members in the `UT_icd`.

</div>

<div class="paragraph">

Here we take an example of a structure that contains an integer and a string. When this element is copied (such as when an element is pushed into the array), we want to "deep copy" the `s` pointer (so the original element and the new element point to their own copies of `s`). When an element is destructed, we want to "deep free" its copy of `s`. Lastly, this example is written to work even if `s` has the value `NULL`.

</div>

<div class="listingblock">

<div class="title">

Structure (complex)

</div>

<div class="content">

    #include <stdio.h>
    #include <stdlib.h>
    #include "utarray.h"

    typedef struct {
        int a;
        char *s;
    } intchar_t;

    void intchar_copy(void *_dst, const void *_src) {
      intchar_t *dst = (intchar_t*)_dst, *src = (intchar_t*)_src;
      dst->a = src->a;
      dst->s = src->s ? strdup(src->s) : NULL;
    }

    void intchar_dtor(void *_elt) {
      intchar_t *elt = (intchar_t*)_elt;
      if (elt->s) free(elt->s);
    }

    UT_icd intchar_icd = {sizeof(intchar_t), NULL, intchar_copy, intchar_dtor};

    int main() {
      UT_array *intchars;
      intchar_t ic, *p;
      utarray_new(intchars, &intchar_icd);

      ic.a=1; ic.s="hello"; utarray_push_back(intchars, &ic);
      ic.a=2; ic.s="world"; utarray_push_back(intchars, &ic);

      p=NULL;
      while( (p=(intchar_t*)utarray_next(intchars,p))) {
        printf("%d %s\n", p->a, (p->s ? p->s : "null"));
      }

      utarray_free(intchars);
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

This table lists all the utarray operations. These are loosely based on the C++ vector class.

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
<td align="left" valign="top"><p class="table"><code>utarray_new(UT_array *a, UT_icd *icd)</code></p></td>
<td align="left" valign="top"><p class="table">allocate a new array</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_free(UT_array *a)</code></p></td>
<td align="left" valign="top"><p class="table">free an allocated array</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_init(UT_array *a,UT_icd *icd)</code></p></td>
<td align="left" valign="top"><p class="table">init an array (non-alloc)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_done(UT_array *a)</code></p></td>
<td align="left" valign="top"><p class="table">dispose of an array (non-allocd)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_reserve(UT_array *a,int n)</code></p></td>
<td align="left" valign="top"><p class="table">ensure space available for <em>n</em> more elements</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_push_back(UT_array *a,void *p)</code></p></td>
<td align="left" valign="top"><p class="table">push element p onto a</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_pop_back(UT_array *a)</code></p></td>
<td align="left" valign="top"><p class="table">pop last element from a</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_extend_back(UT_array *a)</code></p></td>
<td align="left" valign="top"><p class="table">push empty element onto a</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_len(UT_array *a)</code></p></td>
<td align="left" valign="top"><p class="table">get length of a</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_eltptr(UT_array *a,int j)</code></p></td>
<td align="left" valign="top"><p class="table">get pointer of element from index</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_eltidx(UT_array *a,void *e)</code></p></td>
<td align="left" valign="top"><p class="table">get index of element from pointer</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_insert(UT_array *a,void *p, int j)</code></p></td>
<td align="left" valign="top"><p class="table">insert element p to index j</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_replace(UT_array *a,void *p, int j)</code></p></td>
<td align="left" valign="top"><p class="table">replace element p at index j</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_inserta(UT_array *a,UT_array *w, int j)</code></p></td>
<td align="left" valign="top"><p class="table">insert array w into array a at index j</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_resize(UT_array *dst,int num)</code></p></td>
<td align="left" valign="top"><p class="table">extend or shrink array to num elements</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_concat(UT_array *dst,UT_array *src)</code></p></td>
<td align="left" valign="top"><p class="table">copy src to end of dst array</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_erase(UT_array *a,int pos,int len)</code></p></td>
<td align="left" valign="top"><p class="table">remove len elements from a[pos]..a[pos+len-1]</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_clear(UT_array *a)</code></p></td>
<td align="left" valign="top"><p class="table">clear all elements from a, setting its length to zero</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_sort(UT_array *a,cmpfcn *cmp)</code></p></td>
<td align="left" valign="top"><p class="table">sort elements of a using comparison function</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_find(UT_array *a,void *v, cmpfcn *cmp)</code></p></td>
<td align="left" valign="top"><p class="table">find element v in utarray (must be sorted)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_front(UT_array *a)</code></p></td>
<td align="left" valign="top"><p class="table">get first element of a</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_next(UT_array *a,void *e)</code></p></td>
<td align="left" valign="top"><p class="table">get element of a following e (front if e is NULL)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_prev(UT_array *a,void *e)</code></p></td>
<td align="left" valign="top"><p class="table">get element of a before e (back if e is NULL)</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>utarray_back(UT_array *a)</code></p></td>
<td align="left" valign="top"><p class="table">get last element of a</p></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_notes-->

### Notes

<div class="olist arabic">

1.  `utarray_new` and `utarray_free` are used to allocate a new array and free it, while `utarray_init` and `utarray_done` can be used if the UT_array is already allocated and just needs to be initialized or have its internal resources freed.

2.  `utarray_reserve` takes the "delta" of elements to reserve, not the total desired capacity of the array. This differs from the C++ STL "reserve" notion.

3.  `utarray_sort` expects a comparison function having the usual `strcmp`-like convention where it accepts two elements (a and b) and returns a negative value if a precedes b, 0 if a and b sort equally, and positive if b precedes a. This is an example of a comparison function:

    <div class="literalblock">

    <div class="content">

        int intsort(const void *a, const void *b) {
            int _a = *(const int *)a;
            int _b = *(const int *)b;
            return (_a < _b) ? -1 : (_a > _b);
        }

    </div>

    </div>

4.  `utarray_find` uses a binary search to locate an element having a certain value according to the given comparison function. The utarray must be first sorted using the same comparison function. An example of using `utarray_find` with a utarray of strings is included in `tests/test61.c`.

5.  A *pointer* to a particular element (obtained using `utarray_eltptr` or `utarray_front`, `utarray_next`, `utarray_prev`, `utarray_back`) becomes invalid whenever another element is inserted into the utarray. This is because the internal memory management may need to `realloc` the element storage to a new address. For this reason, it’s usually better to refer to an element by its integer *index* in code whose duration may include element insertion.

6.  To override the default out-of-memory handling behavior (which calls `exit(-1)`), override the `utarray_oom()` macro before including `utarray.h`. For example,

    <div class="literalblock">

    <div class="content">

        #define utarray_oom() do { longjmp(error_handling_location); } while (0)
        ...
        #include "utarray.h"

    </div>

    </div>

</div>

</div>

</div>

</div>
