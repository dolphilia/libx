---
title: "utstack: intrusive stack macros for C"
description: "uthash 2.4.0 official source: utstack: intrusive stack macros for C"
sourceURL: "https://github.com/troydhanson/uthash/blob/a49bed0b4abb7dff16c73906dcdc8a9718d582d2/doc/utstack.txt"
licenseSource: "uthash-utstack-2.4.0"
upstreamAuthors: ["Arthur O'Dwyer <arthur.j.odwyer@gmail.com>"]
upstreamVersionHeader: "v2.4.0, June 2026"
---

<div id="preamble">

<div class="sectionbody">

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

A set of very simple stack macros for C structures are included with uthash in `utstack.h`. To use these macros in your own C program, just copy `utstack.h` into your source directory and use it in your programs.

</div>

<div class="literalblock">

<div class="content">

    #include "utstack.h"

</div>

</div>

<div class="paragraph">

These macros support the basic operations of a stack, implemented as an intrusive linked list. A stack supports the "push", "pop", and "count" operations, as well as the trivial operation of getting the top element of the stack.

</div>

<div class="sect2">

<!--libx-source-heading:_download-->

### Download

<div class="paragraph">

To download the `utstack.h` header file, follow the links on <https://github.com/troydhanson/uthash> to clone uthash or get a zip file, then look in the src/ sub-directory.

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

The *utstack* macros have been tested on:

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

<!--libx-source-heading:_stack_list_head-->

### Stack (list) head

<div class="paragraph">

The stack head is simply a pointer to your element structure. You can name it anything. **It must be initialized to `NULL`**. It doubles as a pointer to the top element of your stack.

</div>

<div class="literalblock">

<div class="content">

    element *stack = NULL;

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_stack_operations-->

### Stack operations

<div class="paragraph">

The only operations on a stack are O(1) pushing, O(1) popping, and O(n) counting the number of elements on the stack. None of the provided macros permit directly accessing stack elements other than the top element.

</div>

<div class="paragraph">

To increase the readability of your code, you can use the macro `STACK_EMPTY(head)` as a more readable alternative to `head == NULL`, and `STACK_TOP(head)` as a more readable alternative to `head`.

</div>

<div class="tableblock">

<table rules="none" width="100%" frame="border" cellspacing="0" cellpadding="4">
<colgroup><col width="55%">
<col width="44%">
</colgroup><tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>STACK_PUSH(stack,add);</code></p></td>
<td align="left" valign="top"><p class="table">push <code>add</code> onto <code>stack</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>STACK_POP(stack,elt);</code></p></td>
<td align="left" valign="top"><p class="table">pop <code>stack</code> and save previous top as <code>elt</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>STACK_COUNT(stack,tmp,count);</code></p></td>
<td align="left" valign="top"><p class="table">store number of elements into <code>count</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>STACK_TOP(stack)</code></p></td>
<td align="left" valign="top"><p class="table">return <code>stack</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>STACK_EMPTY(stack)</code></p></td>
<td align="left" valign="top"><p class="table">return <code>stack == NULL</code></p></td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

The parameters shown in the table above are explained here:

</div>

<div class="dlist">

stack  
The stack head (a pointer to your element structure).

add  
A pointer to the element structure you are adding to the stack.

elt  
A pointer that will be assigned the address of the popped element. Need not be initialized.

tmp  
A pointer of the same type as `elt`. Used internally. Need not be initialized.

count  
An integer that will be assigned the size of the stack. Need not be initialized.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_example-->

### Example

<div class="paragraph">

This example program reads names from a text file (one name per line), and pushes each name on the stack; then pops and prints them in reverse order.

</div>

<div class="listingblock">

<div class="title">

A stack of names

</div>

<div class="content">

    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    #include "utstack.h"

    #define BUFLEN 20

    typedef struct el {
        char bname[BUFLEN];
        struct el *next;
    } el;

    el *head = NULL; /* important- initialize to NULL! */

    int main(int argc, char *argv[]) {
        el *elt, *tmp;

        char linebuf[sizeof el->bname];
        int count;
        FILE *file = fopen("test11.dat", "r");
        if (file == NULL) {
            perror("can't open: ");
            exit(-1);
        }

        while (fgets(linebuf, sizeof linebuf, file) != NULL) {
            el *name = malloc(sizeof *name);
            if (name == NULL) exit(-1);
            strcpy(name->bname, linebuf);
            STACK_PUSH(head, name);
        }
        fclose(file);

        STACK_COUNT(head, elt, count);
        printf("%d elements were read into the stack\n", count);

        /* now pop, print, and delete each element */
        while (!STACK_EMPTY(head)) {
            printf("%s\n", STACK_TOP(head)->bname);
            STACK_POP(head, elt);
            free(elt);
        }

        return 0;
    }

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:flex_names-->

### Other names for next

<div class="paragraph">

If the element structure’s `next` field is named something else, a separate group of macros must be used. These work the same as the regular macros, but take the field name as an extra parameter.

</div>

<div class="paragraph">

These "flexible field name" macros are shown below. They all end with `2`. Each operates the same as its counterpart without the `2`, but they take the name of the `next` field as a trailing argument.

</div>

<div class="tableblock">

<table rules="none" width="100%" frame="border" cellspacing="0" cellpadding="4">
<colgroup><col width="55%">
<col width="44%">
</colgroup><tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>STACK_PUSH2(stack,add,next);</code></p></td>
<td align="left" valign="top"><p class="table">push <code>add</code> onto <code>stack</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>STACK_POP2(stack,elt,next);</code></p></td>
<td align="left" valign="top"><p class="table">pop <code>stack</code> and save previous top as <code>elt</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>STACK_COUNT2(stack,tmp,count,next);</code></p></td>
<td align="left" valign="top"><p class="table">store number of elements into <code>count</code></p></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>
