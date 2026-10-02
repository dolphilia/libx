---
title: "utlist: linked list macros for C structures"
description: "uthash 2.4.0 official source: utlist: linked list macros for C structures"
sourceURL: "https://github.com/troydhanson/uthash/blob/a49bed0b4abb7dff16c73906dcdc8a9718d582d2/doc/utlist.txt"
licenseSource: "uthash-utlist-2.4.0"
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

A set of general-purpose *linked list* macros for C structures are included with uthash in `utlist.h`. To use these macros in your own C program, just copy `utlist.h` into your source directory and use it in your programs.

</div>

<div class="literalblock">

<div class="content">

    #include "utlist.h"

</div>

</div>

<div class="paragraph">

These macros support the basic linked list operations: adding and deleting elements, sorting them and iterating over them.

</div>

<div class="sect2">

<!--libx-source-heading:_download-->

### Download

<div class="paragraph">

To download the `utlist.h` header file, follow the links on <https://github.com/troydhanson/uthash> to clone uthash or get a zip file, then look in the src/ sub-directory.

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

The *utlist* macros have been tested on:

</div>

<div class="ulist">

- Linux,

- Mac OS X, and

- Windows, using Visual Studio 2008, Visual Studio 2010, or Cygwin/MinGW.

</div>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_using_utlist-->

## Using utlist

<div class="sectionbody">

<div class="sect2">

<!--libx-source-heading:_types_of_lists-->

### Types of lists

<div class="paragraph">

Three types of linked lists are supported:

</div>

<div class="ulist">

- **singly-linked** lists,

- **doubly-linked** lists, and

- **circular, doubly-linked** lists

</div>

<div class="sect3">

<!--libx-source-heading:_efficiency-->

#### Efficiency

<div class="dlist">

Prepending elements  
Constant-time on all list types.

Appending  
*O(n)* on singly-linked lists; constant-time on doubly-linked list. (The utlist implementation of the doubly-linked list keeps a tail pointer in `head->prev` so that append can be done in constant time).

Deleting elements  
*O(n)* on singly-linked lists; constant-time on doubly-linked list.

Sorting  
*O(n log(n))* for all list types.

Insertion in order (for sorted lists)  
*O(n)* for all list types.

Iteration, counting and searching  
*O(n)* for all list types.

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_list_elements-->

### List elements

<div class="paragraph">

You can use any structure with these macros, as long as the structure contains a `next` pointer. If you want to make a doubly-linked list, the element also needs to have a `prev` pointer.

</div>

<div class="literalblock">

<div class="content">

    typedef struct element {
        char *name;
        struct element *prev; /* needed for a doubly-linked list only */
        struct element *next; /* needed for singly- or doubly-linked lists */
    } element;

</div>

</div>

<div class="paragraph">

You can name your structure anything. In the example above it is called `element`. Within a particular list, all elements must be of the same type.

</div>

<div class="sect3">

<!--libx-source-heading:_flexible_prev_next_naming-->

#### Flexible prev/next naming

<div class="paragraph">

You can name your `prev` and `next` pointers something else. If you do, there is a [family of macros](#flex_names) that work identically but take these names as extra arguments.

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_list_head-->

### List head

<div class="paragraph">

The list head is simply a pointer to your element structure. You can name it anything. **It must be initialized to `NULL`**.

</div>

<div class="literalblock">

<div class="content">

    element *head = NULL;

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_list_operations-->

### List operations

<div class="paragraph">

The lists support inserting or deleting elements, sorting the elements and iterating over them.

</div>

<div class="tableblock">

<table rules="cols" width="100%" frame="border" cellspacing="0" cellpadding="4">
<colgroup><col width="33%">
<col width="33%">
<col width="33%">
</colgroup><thead>
<tr>
<th align="left" valign="top">Singly-linked             </th>
<th align="left" valign="top"> Doubly-linked              </th>
<th align="left" valign="top"> Circular, doubly-linked</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_PREPEND(head,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_PREPEND(head,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_PREPEND(head,add);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_PREPEND_ELEM(head,ref,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_PREPEND_ELEM(head,ref,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_PREPEND_ELEM(head,ref,add);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_APPEND_ELEM(head,ref,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_APPEND_ELEM(head,ref,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_APPEND_ELEM(head,ref,add);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_REPLACE_ELEM(head,del,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_REPLACE_ELEM(head,del,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_REPLACE_ELEM(head,del,add);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_APPEND(head,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_APPEND(head,add);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_APPEND(head,add);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_INSERT_INORDER(head,add,cmp);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_INSERT_INORDER(head,add,cmp);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_INSERT_INORDER(head,add,cmp);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_CONCAT(head1,head2);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_CONCAT(head1,head2);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_CONCAT(head1,head2);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_DELETE(head,del);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_DELETE(head,del);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_DELETE(head,del);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_REVERSE(head);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_REVERSE(head);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_REVERSE(head);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_SORT(head,cmp);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_SORT(head,cmp);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_SORT(head,cmp);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_FOREACH(head,elt) {…}</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_FOREACH(head,elt) {…}</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_FOREACH(head,elt) {…}</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_FOREACH_SAFE(head,elt,tmp) {…}</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_FOREACH_SAFE(head,elt,tmp) {…}</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_FOREACH_SAFE(head,elt,tmp1,tmp2) {…}</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_SEARCH_SCALAR(head,elt,mbr,val);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_SEARCH_SCALAR(head,elt,mbr,val);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_SEARCH_SCALAR(head,elt,mbr,val);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_SEARCH(head,elt,like,cmp);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_SEARCH(head,elt,like,cmp);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_SEARCH(head,elt,like,cmp);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_LOWER_BOUND(head,elt,like,cmp);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_LOWER_BOUND(head,elt,like,cmp);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_LOWER_BOUND(head,elt,like,cmp);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_COUNT(head,elt,count);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_COUNT(head,elt,count);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_COUNT(head,elt,count);</code></p></td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

*Prepend* means to insert an element in front of the existing list head (if any), changing the list head to the new element. *Append* means to add an element at the end of the list, so it becomes the new tail element. *Concatenate* takes two properly constructed lists and appends the second list to the first. (Visual Studio 2008 does not support `LL_CONCAT` and `DL_CONCAT`, but VS2010 is ok.) To prepend before an arbitrary element instead of the list head, use the `_PREPEND_ELEM` macro family. To append after an arbitrary element element instead of the list head, use the `_APPEND_ELEM` macro family. To *replace* an arbitrary list element with another element use the `_REPLACE_ELEM` family of macros.

</div>

<div class="paragraph">

The *sort* operation never moves the elements in memory; rather it only adjusts the list order by altering the `prev` and `next` pointers in each element. Also the sort operation can change the list head to point to a new element.

</div>

<div class="paragraph">

The *foreach* operation is for easy iteration over the list from the head to the tail. A usage example is shown below. You can of course just use the `prev` and `next` pointers directly instead of using the *foreach* macros. The *foreach_safe* operation should be used if you plan to delete any of the list elements while iterating.

</div>

<div class="paragraph">

The *search* operation is a shortcut for iteration in search of a particular element. It is not any faster than manually iterating and testing each element. There are two forms: the "scalar" version searches for an element using a simple equality test on a given structure member, while the general version takes an element to which all others in the list will be compared using a `cmp` function.

</div>

<div class="paragraph">

The *lower_bound* operation finds the first element of the list which is no greater than the provided `like` element, according to the provided `cmp` function. The *lower_bound* operation sets `elt` to a suitable value for passing to `LL_APPEND_ELEM`; i.e., `elt=NULL` if the proper insertion point is at the front of the list, and `elt=p` if the proper insertion point is between `p` and `p->next`.

</div>

<div class="paragraph">

The *count* operation iterates over the list and increments a supplied counter.

</div>

<div class="paragraph">

The parameters shown in the table above are explained here:

</div>

<div class="dlist">

head  
The list head (a pointer to your list element structure).

add  
A pointer to the list element structure you are adding to the list.

del  
A pointer to the list element structure you are replacing or deleting from the list.

elt  
A pointer that will be assigned to each list element in succession (see example) in the case of iteration macros; or, the output pointer from the search macros.

ref  
Reference element for prepend and append operations that will be prepended before or appended after. If `ref` is a pointer with value NULL, the new element will be appended to the list for \_PREPEND_ELEM() operations and prepended for \_APPEND_ELEM() operations. `ref` must be the name of a pointer variable and cannot be literally NULL, use \_PREPEND() and \_APPEND() macro family instead.

like  
An element pointer, having the same type as `elt`, for which the search macro seeks a match (if found, the match is stored in `elt`). A match is determined by the given `cmp` function.

cmp  
pointer to comparison function which accepts two arguments-- these are pointers to two element structures to be compared. The comparison function must return an `int` that is negative, zero, or positive, which specifies whether the first item should sort before, equal to, or after the second item, respectively. (In other words, the same convention that is used by `strcmp`). Note that under Visual Studio 2008 you may need to declare the two arguments as `void *` and then cast them back to their actual types.

tmp  
A pointer of the same type as `elt`. Used internally. Need not be initialized.

mbr  
In the scalar search macro, the name of a member within the `elt` structure which will be tested (using `==`) for equality with the value `val`.

val  
In the scalar search macro, specifies the value of (of structure member `field`) of the element being sought.

count  
integer which will be set to the length of the list

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_example-->

### Example

<div class="paragraph">

This example program reads names from a text file (one name per line), and appends each name to a doubly-linked list. Then it sorts and prints them.

</div>

<div class="listingblock">

<div class="title">

A doubly-linked list

</div>

<div class="content">

    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    #include "utlist.h"

    #define BUFLEN 20

    typedef struct el {
        char bname[BUFLEN];
        struct el *next, *prev;
    } el;

    int namecmp(el *a, el *b) {
        return strcmp(a->bname,b->bname);
    }

    el *head = NULL; /* important- initialize to NULL! */

    int main(int argc, char *argv[]) {
        el *name, *elt, *tmp, etmp;

        char linebuf[BUFLEN];
        int count;
        FILE *file;

        if ( (file = fopen( "test11.dat", "r" )) == NULL ) {
            perror("can't open: ");
            exit(-1);
        }

        while (fgets(linebuf,BUFLEN,file) != NULL) {
            if ( (name = (el *)malloc(sizeof *name)) == NULL) exit(-1);
            strcpy(name->bname, linebuf);
            DL_APPEND(head, name);
        }
        DL_SORT(head, namecmp);
        DL_FOREACH(head,elt) printf("%s", elt->bname);
        DL_COUNT(head, elt, count);
        printf("%d number of elements in list\n", count);

        memcpy(&etmp.bname, "WES\n", 5);
        DL_SEARCH(head,elt,&etmp,namecmp);
        if (elt) printf("found %s\n", elt->bname);

        /* now delete each element, use the safe iterator */
        DL_FOREACH_SAFE(head,elt,tmp) {
          DL_DELETE(head,elt);
          free(elt);
        }

        fclose(file);

        return 0;
    }

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:flex_names-->

### Other names for prev and next

<div class="paragraph">

If the `prev` and `next` fields are named something else, a separate group of macros must be used. These work the same as the regular macros, but take the field names as extra parameters.

</div>

<div class="paragraph">

These "flexible field name" macros are shown below. They all end with `2`. Each operates the same as its counterpart without the `2`, but they take the name of the `prev` and `next` fields (as applicable) as trailing arguments.

</div>

<div class="tableblock">

<table rules="cols" width="100%" frame="border" cellspacing="0" cellpadding="4">
<colgroup><col width="33%">
<col width="33%">
<col width="33%">
</colgroup><thead>
<tr>
<th align="left" valign="top">Singly-linked                             </th>
<th align="left" valign="top"> Doubly-linked                               </th>
<th align="left" valign="top"> Circular, doubly-linked</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_PREPEND2(head,add,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_PREPEND2(head,add,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_PREPEND2(head,add,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_PREPEND_ELEM2(head,ref,add,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_PREPEND_ELEM2(head,ref,add,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_PREPEND_ELEM2(head,ref,add,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_APPEND_ELEM2(head,ref,add,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_APPEND_ELEM2(head,ref,add,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_APPEND_ELEM2(head,ref,add,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_REPLACE_ELEM2(head,del,add,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_REPLACE_ELEM2(head,del,add,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_REPLACE_ELEM2(head,del,add,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_APPEND2(head,add,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_APPEND2(head,add,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_APPEND2(head,add,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_INSERT_INORDER2(head,add,cmp,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_INSERT_INORDER2(head,add,cmp,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_INSERT_INORDER2(head,add,cmp,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_CONCAT2(head1,head2,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_CONCAT2(head1,head2,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_CONCAT2(head1,head2,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_DELETE2(head,del,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_DELETE2(head,del,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_DELETE2(head,del,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_REVERSE2(head,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_REVERSE2(head,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_REVERSE2(head,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_SORT2(head,cmp,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_SORT2(head,cmp,prev,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_SORT2(head,cmp,prev,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_FOREACH2(head,elt,next) {…}</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_FOREACH2(head,elt,next) {…}</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_FOREACH2(head,elt,next) {…}</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_FOREACH_SAFE2(head,elt,tmp,next) {…}</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_FOREACH_SAFE2(head,elt,tmp,next) {…}</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_FOREACH_SAFE2(head,elt,tmp1,tmp2,prev,next) {…}</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_SEARCH_SCALAR2(head,elt,mbr,val,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_SEARCH_SCALAR2(head,elt,mbr,val,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_SEARCH_SCALAR2(head,elt,mbr,val,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_SEARCH2(head,elt,like,cmp,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_SEARCH2(head,elt,like,cmp,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_SEARCH2(head,elt,like,cmp,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_LOWER_BOUND2(head,elt,like,cmp,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_LOWER_BOUND2(head,elt,like,cmp,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_LOWER_BOUND2(head,elt,like,cmp,next);</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>LL_COUNT2(head,elt,count,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>DL_COUNT2(head,elt,count,next);</code></p></td>
<td align="left" valign="top"><p class="table"><code>CDL_COUNT2(head,elt,count,next);</code></p></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>
