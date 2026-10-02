---
title: "uthash User Guide"
description: "uthash 2.4.0 official source: uthash User Guide"
sourceURL: "https://github.com/troydhanson/uthash/blob/a49bed0b4abb7dff16c73906dcdc8a9718d582d2/doc/userguide.txt"
licenseSource: "uthash-userguide-2.4.0"
upstreamAuthors: ["Troy D. Hanson <tdh@tkhanson.net>","Arthur O'Dwyer <arthur.j.odwyer@gmail.com>"]
upstreamVersionHeader: "v2.4.0, June 2026"
---

<div id="preamble">

<div class="sectionbody">

<div class="paragraph">

v2.4.0, June 2026

</div>

<div class="paragraph">

To download uthash, follow this link back to the [GitHub project page](https://github.com/troydhanson/uthash). Back to my [other projects](https://troydhanson.github.io/).

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_a_hash_in_c-->

## A hash in C

<div class="sectionbody">

<div class="paragraph">

This document is written for C programmers. Since you’re reading this, chances are that you know a hash is used for looking up items using a key. In scripting languages, hashes or "dictionaries" are used all the time. In C, hashes don’t exist in the language itself. This software provides a hash table for C structures.

</div>

<div class="sect2">

<!--libx-source-heading:_what_can_it_do-->

### What can it do?

<div class="paragraph">

This software supports these operations on items in a hash table:

</div>

<div class="olist arabic">

1.  add/replace

2.  find

3.  delete

4.  count

5.  iterate

6.  sort

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_is_it_fast-->

### Is it fast?

<div class="paragraph">

Add, find and delete are normally constant-time operations. This is influenced by your key domain and the hash function.

</div>

<div class="paragraph">

This hash aims to be minimalistic and efficient. It’s around 1000 lines of C. It inlines automatically because it’s implemented as macros. It’s fast as long as the hash function is suited to your keys. You can use the default hash function, or easily compare performance and choose from among several other [built-in hash functions](#hash_functions).

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_is_it_a_library-->

### Is it a library?

<div class="paragraph">

No, it’s just a single header file: `uthash.h`. All you need to do is copy the header file into your project, and:

</div>

<div class="literalblock">

<div class="content">

    #include "uthash.h"

</div>

</div>

<div class="paragraph">

Since uthash is a header file only, there is no library code to link against.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_c_c_and_platforms-->

### C/C++ and platforms

<div class="paragraph">

This software can be used in C and C++ programs. It has been tested on:

</div>

<div class="ulist">

- Linux

- Windows using Visual Studio 2008 and 2010

- Solaris

- OpenBSD

- FreeBSD

- Android

</div>

<div class="sect3">

<!--libx-source-heading:_test_suite-->

#### Test suite

<div class="paragraph">

To run the test suite, enter the `tests` directory. Then,

</div>

<div class="ulist">

- on Unix platforms, run `make`

- on Windows, run the "do_tests_win32.cmd" batch file. (You may edit the batch file if your Visual Studio is installed in a non-standard location).

</div>

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

<!--libx-source-heading:_download_uthash-->

### Download uthash

<div class="paragraph">

Follow the links on <https://github.com/troydhanson/uthash> to clone uthash or get a zip file.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_getting_help-->

### Getting help

<div class="paragraph">

Please use the [uthash Google Group](https://groups.google.com/d/forum/uthash) to ask questions. You can email it at <uthash@googlegroups.com>.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_contributing-->

### Contributing

<div class="paragraph">

You may submit pull requests through GitHub. However, the maintainers of uthash value keeping it unchanged, rather than adding bells and whistles.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_extras_included-->

### Extras included

<div class="paragraph">

Three "extras" come with uthash. These provide lists, dynamic arrays and strings:

</div>

<div class="ulist">

- [utlist.h](/docs/uthash/v2-4-0/en/01-guides/02-utlist/) provides linked list macros for C structures.

- [utarray.h](/docs/uthash/v2-4-0/en/01-guides/03-utarray/) implements dynamic arrays using macros.

- [utstring.h](/docs/uthash/v2-4-0/en/01-guides/06-utstring/) implements a basic dynamic string.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_history-->

### History

<div class="paragraph">

I wrote uthash in 2004-2006 for my own purposes. Originally it was hosted on SourceForge. Uthash was downloaded around 30,000 times between 2006-2013 then transitioned to GitHub. It’s been incorporated into commercial software, academic research, and into other open-source software. It has also been added to the native package repositories for a number of Unix-y distros.

</div>

<div class="paragraph">

When uthash was written, there were fewer options for doing generic hash tables in C than exist today. There are faster hash tables, more memory-efficient hash tables, with very different API’s today. But, like driving a minivan, uthash is convenient, and gets the job done for many purposes.

</div>

<div class="paragraph">

As of July 2016, uthash is maintained by Arthur O’Dwyer.

</div>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_your_structure-->

## Your structure

<div class="sectionbody">

<div class="paragraph">

In uthash, a hash table is comprised of structures. Each structure represents a key-value association. One or more of the structure fields constitute the key. The structure pointer itself is the value.

</div>

<div class="listingblock">

<div class="title">

Defining a structure that can be hashed

</div>

<div class="content">

    #include "uthash.h"

    struct my_struct {
        int id;                    /* key */
        char name[10];
        UT_hash_handle hh;         /* makes this structure hashable */
    };

</div>

</div>

<div class="paragraph">

Note that, in uthash, your structure will never be moved or copied into another location when you add it into a hash table. This means that you can keep other data structures that safely point to your structure-- regardless of whether you add or delete it from a hash table during your program’s lifetime.

</div>

<div class="sect2">

<!--libx-source-heading:_the_key-->

### The key

<div class="paragraph">

There are no restrictions on the data type or name of the key field. The key can also comprise multiple contiguous fields, having any names and data types.

</div>

<div class="sidebarblock">

<div class="content">

<div class="title">

Any data type… really?

</div>

<div class="paragraph">

Yes, your key and structure can have any data type. Unlike function calls with fixed prototypes, uthash consists of macros-- whose arguments are untyped-- and thus able to work with any type of structure or key.

</div>

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_unique_keys-->

#### Unique keys

<div class="paragraph">

As with any hash, every item must have a unique key. Your application must enforce key uniqueness. Before you add an item to the hash table, you must first know (if in doubt, check!) that the key is not already in use. You can check whether a key already exists in the hash table using `HASH_FIND`.

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_the_hash_handle-->

### The hash handle

<div class="paragraph">

The `UT_hash_handle` field must be present in your structure. It is used for the internal bookkeeping that makes the hash work. It does not require initialization. It can be named anything, but you can simplify matters by naming it `hh`. This allows you to use the easier "convenience" macros to add, find and delete items.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_a_word_about_memory-->

### A word about memory

<div class="sect3">

<!--libx-source-heading:_overhead-->

#### Overhead

<div class="paragraph">

The hash handle consumes about 32 bytes per item on a 32-bit system, or 56 bytes per item on a 64-bit system. The other overhead costs-- the buckets and the table-- are negligible in comparison. You can use `HASH_OVERHEAD` to get the overhead size, in bytes, for a hash table. See [Macro Reference](#Macro_reference).

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_how_clean_up_occurs-->

#### How clean up occurs

<div class="paragraph">

Some have asked how uthash cleans up its internal memory. The answer is simple: *when you delete the final item* from a hash table, uthash releases all the internal memory associated with that hash table, and sets its pointer to NULL.

</div>

</div>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_hash_operations-->

## Hash operations

<div class="sectionbody">

<div class="paragraph">

This section introduces the uthash macros by example. For a more succinct listing, see [Macro Reference](#Macro_reference).

</div>

<div class="sidebarblock">

<div class="content">

<div class="title">

Convenience vs. general macros:

</div>

<div class="paragraph">

The uthash macros fall into two categories. The *convenience* macros can be used with integer, pointer or string keys (and require that you chose the conventional name `hh` for the `UT_hash_handle` field). The convenience macros take fewer arguments than the general macros, making their usage a bit simpler for these common types of keys.

</div>

<div class="paragraph">

The *general* macros can be used for any types of keys, or for multi-field keys, or when the `UT_hash_handle` has been named something other than `hh`. These macros take more arguments and offer greater flexibility in return. But if the convenience macros suit your needs, use them-- your code will be more readable.

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_declare_the_hash-->

### Declare the hash

<div class="paragraph">

Your hash must be declared as a `NULL`-initialized pointer to your structure.

</div>

<div class="literalblock">

<div class="content">

    struct my_struct *users = NULL;    /* important! initialize to NULL */

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_add_item-->

### Add item

<div class="paragraph">

Allocate and initialize your structure as you see fit. The only aspect of this that matters to uthash is that your key must be initialized to a unique value. Then call `HASH_ADD`. (Here we use the convenience macro `HASH_ADD_INT`, which offers simplified usage for keys of type `int`).

</div>

<div class="listingblock">

<div class="title">

Add an item to a hash

</div>

<div class="content">

    void add_user(int user_id, char *name) {
        struct my_struct *s;

        s = malloc(sizeof *s);
        s->id = user_id;
        strcpy(s->name, name);
        HASH_ADD_INT(users, id, s);  /* id: name of key field */
    }

</div>

</div>

<div class="paragraph">

The first parameter to `HASH_ADD_INT` is the hash table, and the second parameter is the *name* of the key field. Here, this is `id`. The last parameter is a pointer to the structure being added.

</div>

<div id="validc" class="sidebarblock">

<div class="content">

<div class="title">

Wait.. the parameter is a field name?

</div>

<div class="paragraph">

If you find it strange that `id`, which is the *name of a field* in the structure, can be passed as a parameter… welcome to the world of macros. Don’t worry; the C preprocessor expands this to valid C code.

</div>

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_key_must_not_be_modified_while_in_use-->

#### Key must not be modified while in-use

<div class="paragraph">

Once a structure has been added to the hash, do not change the value of its key. Instead, delete the item from the hash, change the key, and then re-add it.

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_checking_uniqueness-->

#### Checking uniqueness

<div class="paragraph">

In the example above, we didn’t check to see if `user_id` was already a key of some existing item in the hash. **If there’s any chance that duplicate keys could be generated by your program, you must explicitly check the uniqueness** before adding the key to the hash. If the key is already in the hash, you can simply modify the existing structure in the hash rather than adding the item. *It is an error to add two items with the same key to the hash table*.

</div>

<div class="paragraph">

Let’s rewrite the `add_user` function to check whether the id is in the hash. Only if the id is not present in the hash, do we create the item and add it. Otherwise we just modify the structure that already exists.

</div>

<div class="literalblock">

<div class="content">

    void add_user(int user_id, char *name) {
        struct my_struct *s;

</div>

</div>

<div class="literalblock">

<div class="content">

        HASH_FIND_INT(users, &user_id, s);  /* id already in the hash? */
        if (s == NULL) {
          s = (struct my_struct *)malloc(sizeof *s);
          s->id = user_id;
          HASH_ADD_INT(users, id, s);  /* id: name of key field */
        }
        strcpy(s->name, name);
    }

</div>

</div>

<div class="paragraph">

Why doesn’t uthash check key uniqueness for you? It saves the cost of a hash lookup for those programs which don’t need it- for example, programs whose keys are generated by an incrementing, non-repeating counter.

</div>

<div class="paragraph">

However, if replacement is a common operation, it is possible to use the `HASH_REPLACE` macro. This macro, before adding the item, will try to find an item with the same key and delete it first. It also returns a pointer to the replaced item, so the user has a chance to de-allocate its memory.

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_passing_the_hash_pointer_into_functions-->

#### Passing the hash pointer into functions

<div class="paragraph">

In the example above `users` is a global variable, but what if the caller wanted to pass the hash pointer *into* the `add_user` function? At first glance it would appear that you could simply pass `users` as an argument, but that won’t work right.

</div>

<div class="literalblock">

<div class="content">

    /* bad */
    void add_user(struct my_struct *users, int user_id, char *name) {
      ...
      HASH_ADD_INT(users, id, s);
    }

</div>

</div>

<div class="paragraph">

You really need to pass *a pointer* to the hash pointer:

</div>

<div class="literalblock">

<div class="content">

    /* good */
    void add_user(struct my_struct **users, int user_id, char *name) { ...
      ...
      HASH_ADD_INT(*users, id, s);
    }

</div>

</div>

<div class="paragraph">

Note that we dereferenced the pointer in the `HASH_ADD` also.

</div>

<div class="paragraph">

The reason it’s necessary to deal with a pointer to the hash pointer is simple: the hash macros modify it (in other words, they modify the *pointer itself* not just what it points to).

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_replace_item-->

### Replace item

<div class="paragraph">

`HASH_REPLACE` macros are equivalent to HASH_ADD macros except they attempt to find and delete the item first. If it finds and deletes an item, it will also return that items pointer as an output parameter.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_find_item-->

### Find item

<div class="paragraph">

To look up a structure in a hash, you need its key. Then call `HASH_FIND`. (Here we use the convenience macro `HASH_FIND_INT` for keys of type `int`).

</div>

<div class="listingblock">

<div class="title">

Find a structure using its key

</div>

<div class="content">

    struct my_struct *find_user(int user_id) {
        struct my_struct *s;

        HASH_FIND_INT(users, &user_id, s);  /* s: output pointer */
        return s;
    }

</div>

</div>

<div class="paragraph">

Here, the hash table is `users`, and `&user_id` points to the key (an integer in this case). Last, `s` is the *output* variable of `HASH_FIND_INT`. The final result is that `s` points to the structure with the given key, or is `NULL` if the key wasn’t found in the hash.

</div>

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">Note</div>
</td>
<td class="content">The middle argument is a <em>pointer</em> to the key. You can’t pass a literal key
value to <code>HASH_FIND</code>. Instead assign the literal value to a variable, and pass
a pointer to the variable.</td>
</tr></tbody></table>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_delete_item-->

### Delete item

<div class="paragraph">

To delete a structure from a hash, you must have a pointer to it. (If you only have the key, first do a `HASH_FIND` to get the structure pointer).

</div>

<div class="listingblock">

<div class="title">

Delete an item from a hash

</div>

<div class="content">

    void delete_user(struct my_struct *user) {
        HASH_DEL(users, user);  /* user: pointer to deletee */
        free(user);             /* optional; it's up to you! */
    }

</div>

</div>

<div class="paragraph">

Here again, `users` is the hash table, and `user` is a pointer to the structure we want to remove from the hash.

</div>

<div class="sect3">

<!--libx-source-heading:_uthash_never_frees_your_structure-->

#### uthash never frees your structure

<div class="paragraph">

Deleting a structure just removes it from the hash table-- it doesn’t `free` it. The choice of when to free your structure is entirely up to you; uthash will never free your structure. For example when using `HASH_REPLACE` macros, a replaced output argument is returned back, in order to make it possible for the user to de-allocate it.

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_delete_can_change_the_pointer-->

#### Delete can change the pointer

<div class="paragraph">

The hash table pointer (which initially points to the first item added to the hash) can change in response to `HASH_DEL` (i.e. if you delete the first item in the hash table).

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_iterative_deletion-->

#### Iterative deletion

<div class="paragraph">

The `HASH_ITER` macro is a deletion-safe iteration construct which expands to a simple *for* loop.

</div>

<div class="listingblock">

<div class="title">

Delete all items from a hash

</div>

<div class="content">

    void delete_all() {
      struct my_struct *current_user, *tmp;

      HASH_ITER(hh, users, current_user, tmp) {
        HASH_DEL(users, current_user);  /* delete; users advances to next */
        free(current_user);             /* optional- if you want to free  */
      }
    }

</div>

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_all_at_once_deletion-->

#### All-at-once deletion

<div class="paragraph">

If you only want to delete all the items, but not free them or do any per-element clean up, you can do this more efficiently in a single operation:

</div>

<div class="literalblock">

<div class="content">

    HASH_CLEAR(hh, users);

</div>

</div>

<div class="paragraph">

Afterward, the list head (here, `users`) will be set to `NULL`.

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_count_items-->

### Count items

<div class="paragraph">

The number of items in the hash table can be obtained using `HASH_COUNT`:

</div>

<div class="listingblock">

<div class="title">

Count of items in the hash table

</div>

<div class="content">

    unsigned int num_users;
    num_users = HASH_COUNT(users);
    printf("there are %u users\n", num_users);

</div>

</div>

<div class="paragraph">

Incidentally, this works even if the list head (here, `users`) is `NULL`, in which case the count is 0.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_iterating_and_sorting-->

### Iterating and sorting

<div class="paragraph">

You can loop over the items in the hash by starting from the beginning and following the `hh.next` pointer.

</div>

<div class="listingblock">

<div class="title">

Iterating over all the items in a hash

</div>

<div class="content">

    void print_users() {
        struct my_struct *s;

        for (s = users; s != NULL; s = s->hh.next) {
            printf("user id %d: name %s\n", s->id, s->name);
        }
    }

</div>

</div>

<div class="paragraph">

There is also an `hh.prev` pointer you could use to iterate backwards through the hash, starting from any known item.

</div>

<div class="sect3">

<!--libx-source-heading:deletesafe-->

#### Deletion-safe iteration

<div class="paragraph">

In the example above, it would not be safe to delete and free `s` in the body of the *for* loop, (because `s` is dereferenced each time the loop iterates). This is easy to rewrite correctly (by copying the `s->hh.next` pointer to a temporary variable *before* freeing `s`), but it comes up often enough that a deletion-safe iteration macro, `HASH_ITER`, is included. It expands to a `for`-loop header. Here is how it could be used to rewrite the last example:

</div>

<div class="literalblock">

<div class="content">

    struct my_struct *s, *tmp;

</div>

</div>

<div class="literalblock">

<div class="content">

    HASH_ITER(hh, users, s, tmp) {
        printf("user id %d: name %s\n", s->id, s->name);
        /* ... it is safe to delete and free s here */
    }

</div>

</div>

<div class="sidebarblock">

<div class="content">

<div class="title">

A hash is also a doubly-linked list.

</div>

<div class="paragraph">

Iterating backward and forward through the items in the hash is possible because of the `hh.prev` and `hh.next` fields. All the items in the hash can be reached by repeatedly following these pointers, thus the hash is also a doubly-linked list.

</div>

</div>

</div>

<div class="paragraph">

If you’re using uthash in a C++ program, you need an extra cast on the `for` iterator, e.g., `s = static_cast<my_struct*>(s->hh.next)`.

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_sorting-->

#### Sorting

<div class="paragraph">

The items in the hash are visited in "insertion order" when you follow the `hh.next` pointer. You can sort the items into a new order using `HASH_SORT`.

</div>

<div class="literalblock">

<div class="content">

    HASH_SORT(users, name_sort);

</div>

</div>

<div class="paragraph">

The second argument is a pointer to a comparison function. It must accept two pointer arguments (the items to compare), and must return an `int` which is less than zero, zero, or greater than zero, if the first item sorts before, equal to, or after the second item, respectively. (This is the same convention used by `strcmp` or `qsort` in the standard C library).

</div>

<div class="literalblock">

<div class="content">

    int sort_function(void *a, void *b) {
      /* compare a to b (cast a and b appropriately)
       * return (int) -1 if (a < b)
       * return (int)  0 if (a == b)
       * return (int)  1 if (a > b)
       */
    }

</div>

</div>

<div class="paragraph">

Below, `name_sort` and `id_sort` are two examples of sort functions.

</div>

<div class="listingblock">

<div class="title">

Sorting the items in the hash

</div>

<div class="content">

    int by_name(const struct my_struct *a, const struct my_struct *b) {
        return strcmp(a->name, b->name);
    }

    int by_id(const struct my_struct *a, const struct my_struct *b) {
        return (a->id - b->id);
    }

    void sort_by_name() {
        HASH_SORT(users, by_name);
    }

    void sort_by_id() {
        HASH_SORT(users, by_id);
    }

</div>

</div>

<div class="paragraph">

When the items in the hash are sorted, the first item may change position. In the example above, `users` may point to a different structure after calling `HASH_SORT`.

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_a_complete_example-->

### A complete example

<div class="paragraph">

We’ll repeat all the code and embellish it with a `main()` function to form a working example.

</div>

<div class="paragraph">

If this code was placed in a file called `example.c` in the same directory as `uthash.h`, it could be compiled and run like this:

</div>

<div class="literalblock">

<div class="content">

    cc -o example example.c
    ./example

</div>

</div>

<div class="paragraph">

Follow the prompts to try the program.

</div>

<div class="listingblock">

<div class="title">

A complete program

</div>

<div class="content">

    #include <stdio.h>   /* printf */
    #include <stdlib.h>  /* atoi, malloc */
    #include <string.h>  /* strcpy */
    #include "uthash.h"

    struct my_struct {
        int id;                    /* key */
        char name[21];
        UT_hash_handle hh;         /* makes this structure hashable */
    };

    struct my_struct *users = NULL;

    void add_user(int user_id, const char *name)
    {
        struct my_struct *s;

        HASH_FIND_INT(users, &user_id, s);  /* id already in the hash? */
        if (s == NULL) {
            s = (struct my_struct*)malloc(sizeof *s);
            s->id = user_id;
            HASH_ADD_INT(users, id, s);  /* id is the key field */
        }
        strcpy(s->name, name);
    }

    struct my_struct *find_user(int user_id)
    {
        struct my_struct *s;

        HASH_FIND_INT(users, &user_id, s);  /* s: output pointer */
        return s;
    }

    void delete_user(struct my_struct *user)
    {
        HASH_DEL(users, user);  /* user: pointer to deletee */
        free(user);
    }

    void delete_all()
    {
        struct my_struct *current_user;
        struct my_struct *tmp;

        HASH_ITER(hh, users, current_user, tmp) {
            HASH_DEL(users, current_user);  /* delete it (users advances to next) */
            free(current_user);             /* free it */
        }
    }

    void print_users()
    {
        struct my_struct *s;

        for (s = users; s != NULL; s = (struct my_struct*)(s->hh.next)) {
            printf("user id %d: name %s\n", s->id, s->name);
        }
    }

    int by_name(const struct my_struct *a, const struct my_struct *b)
    {
        return strcmp(a->name, b->name);
    }

    int by_id(const struct my_struct *a, const struct my_struct *b)
    {
        return (a->id - b->id);
    }

    const char *getl(const char *prompt)
    {
        static char buf[21];
        char *p;
        printf("%s? ", prompt); fflush(stdout);
        p = fgets(buf, sizeof(buf), stdin);
        if (p == NULL || (p = strchr(buf, '\n')) == NULL) {
            puts("Invalid input!");
            exit(EXIT_FAILURE);
        }
        *p = '\0';
        return buf;
    }

    int main()
    {
        int id = 1;
        int running = 1;
        struct my_struct *s;
        int temp;

        while (running) {
            printf(" 1. add user\n");
            printf(" 2. add or rename user by id\n");
            printf(" 3. find user\n");
            printf(" 4. delete user\n");
            printf(" 5. delete all users\n");
            printf(" 6. sort items by name\n");
            printf(" 7. sort items by id\n");
            printf(" 8. print users\n");
            printf(" 9. count users\n");
            printf("10. quit\n");
            switch (atoi(getl("Command"))) {
                case 1:
                    add_user(id++, getl("Name (20 char max)"));
                    break;
                case 2:
                    temp = atoi(getl("ID"));
                    add_user(temp, getl("Name (20 char max)"));
                    break;
                case 3:
                    s = find_user(atoi(getl("ID to find")));
                    printf("user: %s\n", s ? s->name : "unknown");
                    break;
                case 4:
                    s = find_user(atoi(getl("ID to delete")));
                    if (s) {
                        delete_user(s);
                    } else {
                        printf("id unknown\n");
                    }
                    break;
                case 5:
                    delete_all();
                    break;
                case 6:
                    HASH_SORT(users, by_name);
                    break;
                case 7:
                    HASH_SORT(users, by_id);
                    break;
                case 8:
                    print_users();
                    break;
                case 9:
                    temp = HASH_COUNT(users);
                    printf("there are %d users\n", temp);
                    break;
                case 10:
                    running = 0;
                    break;
            }
        }

        delete_all();  /* free any structures */
        return 0;
    }

</div>

</div>

<div class="paragraph">

This program is included in the distribution in `tests/example.c`. You can run `make example` in that directory to compile it easily.

</div>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_standard_key_types-->

## Standard key types

<div class="sectionbody">

<div class="paragraph">

This section goes into specifics of how to work with different kinds of keys. You can use nearly any type of key-- integers, strings, pointers, structures, etc.

</div>

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">Note</div>
</td>
<td class="content">
<div class="title">A note about float</div>
<div class="paragraph"><p>You can use floating point keys. This comes with the same caveats as with any
program that tests floating point equality. In other words, even the tiniest
difference in two floating point numbers makes them distinct keys.</p></div>
</td>
</tr></tbody></table>

</div>

<div class="sect2">

<!--libx-source-heading:_integer_keys-->

### Integer keys

<div class="paragraph">

The preceding examples demonstrated use of integer keys. To recap, use the convenience macros `HASH_ADD_INT` and `HASH_FIND_INT` for structures with integer keys. (The other operations such as `HASH_DELETE` and `HASH_SORT` are the same for all types of keys).

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_string_keys-->

### String keys

<div class="paragraph">

If your structure has a string key, the operations to use depend on whether your structure *points to* the key (`char *`) or the string resides `within` the structure (`char a[10]`). **This distinction is important**. As we’ll see below, you need to use `HASH_ADD_KEYPTR` when your structure *points* to a key (that is, the key itself is *outside* of the structure); in contrast, use `HASH_ADD_STR` for a string key that is contained **within** your structure.

</div>

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">Note</div>
</td>
<td class="content">
<div class="title">char[ ] vs. char*</div>
<div class="paragraph"><p>The string is <em>within</em> the structure in the first example below-- <code>name</code> is a
<code>char[10]</code> field.  In the second example, the key is <em>outside</em> of the
structure-- <code>name</code> is a <code>char *</code>. So the first example uses <code>HASH_ADD_STR</code> but
the second example uses <code>HASH_ADD_KEYPTR</code>.  For information on this macro, see
the <a href="#Macro_reference">Macro reference</a>.</p></div>
</td>
</tr></tbody></table>

</div>

<div class="sect3">

<!--libx-source-heading:_string_em_within_em_structure-->

#### String *within* structure

<div class="listingblock">

<div class="title">

A string-keyed hash (string within structure)

</div>

<div class="content">

    #include <string.h>  /* strcpy */
    #include <stdlib.h>  /* malloc */
    #include <stdio.h>   /* printf */
    #include "uthash.h"

    struct my_struct {
        char name[10];             /* key (string is WITHIN the structure) */
        int id;
        UT_hash_handle hh;         /* makes this structure hashable */
    };


    int main(int argc, char *argv[]) {
        const char *names[] = { "joe", "bob", "betty", NULL };
        struct my_struct *s, *tmp, *users = NULL;

        for (int i = 0; names[i]; ++i) {
            s = (struct my_struct *)malloc(sizeof *s);
            strcpy(s->name, names[i]);
            s->id = i;
            HASH_ADD_STR(users, name, s);
        }

        HASH_FIND_STR(users, "betty", s);
        if (s) printf("betty's id is %d\n", s->id);

        /* free the hash table contents */
        HASH_ITER(hh, users, s, tmp) {
          HASH_DEL(users, s);
          free(s);
        }
        return 0;
    }

</div>

</div>

<div class="paragraph">

This example is included in the distribution in `tests/test15.c`. It prints:

</div>

<div class="literalblock">

<div class="content">

    betty's id is 2

</div>

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_string_em_pointer_em_in_structure-->

#### String *pointer* in structure

<div class="paragraph">

Now, here is the same example but using a `char *` key instead of `char [ ]`:

</div>

<div class="listingblock">

<div class="title">

A string-keyed hash (structure points to string)

</div>

<div class="content">

    #include <string.h>  /* strcpy */
    #include <stdlib.h>  /* malloc */
    #include <stdio.h>   /* printf */
    #include "uthash.h"

    struct my_struct {
        const char *name;          /* key */
        int id;
        UT_hash_handle hh;         /* makes this structure hashable */
    };


    int main(int argc, char *argv[]) {
        const char *names[] = { "joe", "bob", "betty", NULL };
        struct my_struct *s, *tmp, *users = NULL;

        for (int i = 0; names[i]; ++i) {
            s = (struct my_struct *)malloc(sizeof *s);
            s->name = names[i];
            s->id = i;
            HASH_ADD_KEYPTR(hh, users, s->name, strlen(s->name), s);
        }

        HASH_FIND_STR(users, "betty", s);
        if (s) printf("betty's id is %d\n", s->id);

        /* free the hash table contents */
        HASH_ITER(hh, users, s, tmp) {
          HASH_DEL(users, s);
          free(s);
        }
        return 0;
    }

</div>

</div>

<div class="paragraph">

This example is included in `tests/test40.c`.

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_pointer_keys-->

### Pointer keys

<div class="paragraph">

Your key can be a pointer. To be very clear, this means the *pointer itself* can be the key (in contrast, if the thing *pointed to* is the key, this is a different use case handled by `HASH_ADD_KEYPTR`).

</div>

<div class="paragraph">

Here is a simple example where a structure has a pointer member, called `key`.

</div>

<div class="listingblock">

<div class="title">

A pointer key

</div>

<div class="content">

    #include <assert.h>
    #include <stdlib.h>
    #include "uthash.h"

    typedef struct {
      void *key;
      int i;
      UT_hash_handle hh;
    } el_t;

    el_t *hash = NULL;
    void *someaddr = &hash;

    int main() {
      el_t *d;
      el_t *e = (el_t *)malloc(sizeof *e);
      e->key = someaddr;
      e->i = 1;
      HASH_ADD_PTR(hash, key, e);
      HASH_FIND_PTR(hash, &someaddr, d);
      assert(d == e);

      /* release memory */
      HASH_DEL(hash, e);
      free(e);
      return 0;
    }

</div>

</div>

<div class="paragraph">

This example is included in `tests/test57.c`.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_structure_keys-->

### Structure keys

<div class="paragraph">

Your key field can have any data type. To uthash, it is just a sequence of bytes. Therefore, even a nested structure can be used as a key. We’ll use the general macros `HASH_ADD` and `HASH_FIND` to demonstrate.

</div>

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">Note</div>
</td>
<td class="content">Structures contain padding (wasted internal space used to fulfill
alignment requirements for the members of the structure). These padding bytes
<em>must be zeroed</em> before adding an item to the hash or looking up an item.
Therefore always zero the whole structure before setting the members of
interest. The example below does this-- see the two calls to <code>memset</code>.</td>
</tr></tbody></table>

</div>

<div class="listingblock">

<div class="title">

A key which is a structure

</div>

<div class="content">

    #include <stdlib.h>
    #include <stdio.h>
    #include "uthash.h"

    typedef struct {
      char a;
      int b;
    } record_key_t;

    typedef struct {
        record_key_t key;
        /* ... other data ... */
        UT_hash_handle hh;
    } record_t;

    int main(int argc, char *argv[]) {
        record_t l, *p, *r, *tmp, *records = NULL;

        r = (record_t *)malloc(sizeof *r);
        memset(r, 0, sizeof *r);
        r->key.a = 'a';
        r->key.b = 1;
        HASH_ADD(hh, records, key, sizeof(record_key_t), r);

        memset(&l, 0, sizeof(record_t));
        l.key.a = 'a';
        l.key.b = 1;
        HASH_FIND(hh, records, &l.key, sizeof(record_key_t), p);

        if (p) printf("found %c %d\n", p->key.a, p->key.b);

        HASH_ITER(hh, records, p, tmp) {
          HASH_DEL(records, p);
          free(p);
        }
        return 0;
    }

</div>

</div>

<div class="paragraph">

This usage is nearly the same as the usage of a compound key explained below.

</div>

<div class="paragraph">

Note that the general macros require the name of the `UT_hash_handle` to be passed as the first argument (here, this is `hh`). The general macros are documented in [Macro Reference](#Macro_reference).

</div>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_advanced_topics-->

## Advanced Topics

<div class="sectionbody">

<div class="sect2">

<!--libx-source-heading:_compound_keys-->

### Compound keys

<div class="paragraph">

Your key can even comprise multiple contiguous fields.

</div>

<div class="listingblock">

<div class="title">

A multi-field key

</div>

<div class="content">

    #include <stdlib.h>    /* malloc       */
    #include <stddef.h>    /* offsetof     */
    #include <stdio.h>     /* printf       */
    #include <string.h>    /* memset       */
    #include "uthash.h"

    #define UTF32 1

    typedef struct {
      UT_hash_handle hh;
      int len;
      char encoding;      /* these two fields */
      int text[];         /* comprise the key */
    } msg_t;

    typedef struct {
        char encoding;
        int text[];
    } lookup_key_t;

    int main(int argc, char *argv[]) {
        unsigned keylen;
        msg_t *msg, *tmp, *msgs = NULL;
        lookup_key_t *lookup_key;

        int beijing[] = {0x5317, 0x4eac};   /* UTF-32LE for 北京 */

        /* allocate and initialize our structure */
        msg = (msg_t *)malloc(sizeof(msg_t) + sizeof(beijing));
        memset(msg, 0, sizeof(msg_t)+sizeof(beijing)); /* zero fill */
        msg->len = sizeof(beijing);
        msg->encoding = UTF32;
        memcpy(msg->text, beijing, sizeof(beijing));

        /* calculate the key length including padding, using formula */
        keylen =   offsetof(msg_t, text)       /* offset of last key field */
                 + sizeof(beijing)             /* size of last key field */
                 - offsetof(msg_t, encoding);  /* offset of first key field */

        /* add our structure to the hash table */
        HASH_ADD(hh, msgs, encoding, keylen, msg);

        /* look it up to prove that it worked :-) */
        msg = NULL;

        lookup_key = (lookup_key_t *)malloc(sizeof(*lookup_key) + sizeof(beijing));
        memset(lookup_key, 0, sizeof(*lookup_key) + sizeof(beijing));
        lookup_key->encoding = UTF32;
        memcpy(lookup_key->text, beijing, sizeof(beijing));
        HASH_FIND(hh, msgs, &lookup_key->encoding, keylen, msg);
        if (msg) printf("found \n");
        free(lookup_key);

        HASH_ITER(hh, msgs, msg, tmp) {
          HASH_DEL(msgs, msg);
          free(msg);
        }
        return 0;
    }

</div>

</div>

<div class="paragraph">

This example is included in the distribution in `tests/test22.c`.

</div>

<div class="paragraph">

If you use multi-field keys, recognize that the compiler pads adjacent fields (by inserting unused space between them) in order to fulfill the alignment requirement of each field. For example a structure containing a `char` followed by an `int` will normally have 3 "wasted" bytes of padding after the char, in order to make the `int` field start on a multiple-of-4 address (4 is the length of the int).

</div>

<div id="multifield_note" class="sidebarblock">

<div class="content">

<div class="title">

Calculating the length of a multi-field key:

</div>

<div class="paragraph">

To determine the key length when using a multi-field key, you must include any intervening structure padding the compiler adds for alignment purposes.

</div>

<div class="paragraph">

An easy way to calculate the key length is to use the `offsetof` macro from `<stddef.h>`. The formula is:

</div>

<div class="literalblock">

<div class="content">

    key length =   offsetof(last_key_field)
                 + sizeof(last_key_field)
                 - offsetof(first_key_field)

</div>

</div>

<div class="paragraph">

In the example above, the `keylen` variable is set using this formula.

</div>

</div>

</div>

<div class="paragraph">

When dealing with a multi-field key, you must zero-fill your structure before `HASH_ADD`'ing it to a hash table, or using its fields in a `HASH_FIND` key.

</div>

<div class="paragraph">

In the previous example, `memset` is used to initialize the structure by zero-filling it. This zeroes out any padding between the key fields. If we didn’t zero-fill the structure, this padding would contain random values. The random values would lead to `HASH_FIND` failures; as two "identical" keys will appear to mismatch if there are any differences within their padding.

</div>

<div class="paragraph">

Alternatively, you can customize the global [key comparison function](#hash_keycompare) and [key hashing function](#hash_functions) to ignore the padding in your key. See [Specifying an alternate key comparison function](#hash_keycompare).

</div>

</div>

<div class="sect2">

<!--libx-source-heading:multilevel-->

### Multi-level hash tables

<div class="paragraph">

A multi-level hash table arises when each element of a hash table contains its own secondary hash table. There can be any number of levels. In a scripting language you might see:

</div>

<div class="literalblock">

<div class="content">

    $items{bob}{age}=37

</div>

</div>

<div class="paragraph">

The C program below builds this example in uthash: the hash table is called `items`. It contains one element (`bob`) whose own hash table contains one element (`age`) with value 37. No special functions are necessary to build a multi-level hash table.

</div>

<div class="paragraph">

While this example represents both levels (`bob` and `age`) using the same structure, it would also be fine to use two different structure definitions. It would also be fine if there were three or more levels instead of two.

</div>

<div class="listingblock">

<div class="title">

Multi-level hash table

</div>

<div class="content">

    #include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    #include "uthash.h"

    /* hash of hashes */
    typedef struct item {
      char name[10];
      struct item *sub;
      int val;
      UT_hash_handle hh;
    } item_t;

    item_t *items = NULL;

    int main(int argc, char *argvp[]) {
      item_t *item1, *item2, *tmp1, *tmp2;

      /* make initial element */
      item_t *i = malloc(sizeof(*i));
      strcpy(i->name, "bob");
      i->sub = NULL;
      i->val = 0;
      HASH_ADD_STR(items, name, i);

      /* add a sub hash table off this element */
      item_t *s = malloc(sizeof(*s));
      strcpy(s->name, "age");
      s->sub = NULL;
      s->val = 37;
      HASH_ADD_STR(i->sub, name, s);

      /* iterate over hash elements  */
      HASH_ITER(hh, items, item1, tmp1) {
        HASH_ITER(hh, item1->sub, item2, tmp2) {
          printf("$items{%s}{%s} = %d\n", item1->name, item2->name, item2->val);
        }
      }

      /* clean up both hash tables */
      HASH_ITER(hh, items, item1, tmp1) {
        HASH_ITER(hh, item1->sub, item2, tmp2) {
          HASH_DEL(item1->sub, item2);
          free(item2);
        }
        HASH_DEL(items, item1);
        free(item1);
      }

      return 0;
    }

</div>

</div>

<div class="paragraph">

The example above is included in `tests/test59.c`.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:multihash-->

### Items in several hash tables

<div class="paragraph">

A structure can be added to more than one hash table. A few reasons you might do this include:

</div>

<div class="ulist">

- each hash table may use a different key;

- each hash table may have its own sort order;

- or you might simply use multiple hash tables for grouping purposes. E.g., you could have users in an `admin_users` and a `users` hash table.

</div>

<div class="paragraph">

Your structure needs to have a `UT_hash_handle` field for each hash table to which it might be added. You can name them anything. E.g.,

</div>

<div class="literalblock">

<div class="content">

    UT_hash_handle hh1, hh2;

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_items_with_multiple_keys-->

### Items with multiple keys

<div class="paragraph">

You might create a hash table keyed on an ID field, and another hash table keyed on username (if usernames are unique). You can add the same user structure to both hash tables (without duplication of the structure), allowing lookup of a user structure by their name or ID. The way to achieve this is to have a separate `UT_hash_handle` for each hash to which the structure may be added.

</div>

<div class="listingblock">

<div class="title">

A structure with two different keys

</div>

<div class="content">

    struct my_struct {
        int id;                    /* first key */
        char username[10];         /* second key */
        UT_hash_handle hh1;        /* handle for first hash table */
        UT_hash_handle hh2;        /* handle for second hash table */
    };

</div>

</div>

<div class="paragraph">

In the example above, the structure can now be added to two separate hash tables. In one hash, `id` is its key, while in the other hash, `username` is its key. (There is no requirement that the two hashes have different key fields. They could both use the same key, such as `id`).

</div>

<div class="paragraph">

Notice the structure has two hash handles (`hh1` and `hh2`). In the code below, notice that each hash handle is used exclusively with a particular hash table. (`hh1` is always used with the `users_by_id` hash, while `hh2` is always used with the `users_by_name` hash table).

</div>

<div class="listingblock">

<div class="title">

Two keys on a structure

</div>

<div class="content">

        struct my_struct *users_by_id = NULL, *users_by_name = NULL, *s;
        int i;
        char *name;

        s = malloc(sizeof *s);
        s->id = 1;
        strcpy(s->username, "thanson");

        /* add the structure to both hash tables */
        HASH_ADD(hh1, users_by_id, id, sizeof(int), s);
        HASH_ADD(hh2, users_by_name, username, strlen(s->username), s);

        /* find user by ID in the "users_by_id" hash table */
        i = 1;
        HASH_FIND(hh1, users_by_id, &i, sizeof(int), s);
        if (s) printf("found id %d: %s\n", i, s->username);

        /* find user by username in the "users_by_name" hash table */
        name = "thanson";
        HASH_FIND(hh2, users_by_name, name, strlen(name), s);
        if (s) printf("found user %s: %d\n", name, s->id);

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_sorted_insertion_of_new_items-->

### Sorted insertion of new items

<div class="paragraph">

To maintain a sorted hash, you have two options. Your first option is to use the `HASH_SRT` macro, which will sort any unordered list in *O(n log(n))*. This is the best strategy if you’re just filling up a hash table with items in random order with a single final `HASH_SRT` operation when all is done. If you need the table to remain sorted as you add and remove items, you can use `HASH_SRT` after every insertion operation, but that gives a computational complexity of *O(n^2 log n)* to insert *n* items.

</div>

<div class="paragraph">

Your second option is to use the in-order add and replace macros. The `HASH_ADD_*_INORDER` macros work just like their `HASH_ADD_*` counterparts, but with an additional comparison-function argument:

</div>

<div class="literalblock">

<div class="content">

    int name_sort(struct my_struct *a, struct my_struct *b) {
      return strcmp(a->name, b->name);
    }

</div>

</div>

<div class="literalblock">

<div class="content">

    HASH_ADD_KEYPTR_INORDER(hh, items, &item->name, strlen(item->name), item, name_sort);

</div>

</div>

<div class="paragraph">

These macros assume that the hash is already sorted according to the comparison function, and insert the new item in its proper place. A single insertion takes *O(n)*, resulting in a total computational complexity of *O(n^2)* to insert all *n* items: slower than a single `HASH_SRT`, but faster than doing a `HASH_SRT` after every insertion.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_several_sort_orders-->

### Several sort orders

<div class="paragraph">

It comes as no surprise that two hash tables can have different sort orders, but this fact can also be used advantageously to sort the *same items* in several ways. This is based on the ability to store a structure in several hash tables.

</div>

<div class="paragraph">

Extending the previous example, suppose we have many users. We have added each user structure to the `users_by_id` hash table and the `users_by_name` hash table. (To reiterate, this is done without the need to have two copies of each structure.) Now we can define two sort functions, then use `HASH_SRT`.

</div>

<div class="literalblock">

<div class="content">

    int sort_by_id(struct my_struct *a, struct my_struct *b) {
      if (a->id == b->id) return 0;
      return (a->id < b->id) ? -1 : 1;
    }

</div>

</div>

<div class="literalblock">

<div class="content">

    int sort_by_name(struct my_struct *a, struct my_struct *b) {
      return strcmp(a->username, b->username);
    }

</div>

</div>

<div class="literalblock">

<div class="content">

    HASH_SRT(hh1, users_by_id, sort_by_id);
    HASH_SRT(hh2, users_by_name, sort_by_name);

</div>

</div>

<div class="paragraph">

Now iterating over the items in `users_by_id` will traverse them in id-order while, naturally, iterating over `users_by_name` will traverse them in name-order. The items are fully forward-and-backward linked in each order. So even for one set of users, we might store them in two hash tables to provide easy iteration in two different sort orders.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_bloom_filter_faster_misses-->

### Bloom filter (faster misses)

<div class="paragraph">

Programs that generate a fair miss rate (`HASH_FIND` that result in `NULL`) may benefit from the built-in Bloom filter support. This is disabled by default, because programs that generate only hits would incur a slight penalty from it. Also, programs that do deletes should not use the Bloom filter. While the program would operate correctly, deletes diminish the benefit of the filter. To enable the Bloom filter, simply compile with `-DHASH_BLOOM=n` like:

</div>

<div class="literalblock">

<div class="content">

    -DHASH_BLOOM=27

</div>

</div>

<div class="paragraph">

where the number can be any value up to 32 which determines the amount of memory used by the filter, as shown below. Using more memory makes the filter more accurate and has the potential to speed up your program by making misses bail out faster.

</div>

<div class="tableblock">

<table rules="none" width="50%" frame="border" cellspacing="0" cellpadding="4">
<caption class="title">Table 1. Bloom filter sizes for selected values of n</caption>
<colgroup><col width="25%">
<col width="75%">
</colgroup><thead>
<tr>
<th align="left" valign="top"> n   </th>
<th align="left" valign="top"> Bloom filter size (per hash table)</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>16</code></p></td>
<td align="left" valign="top"><p class="table">8 kilobytes</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>20</code></p></td>
<td align="left" valign="top"><p class="table">128 kilobytes</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>24</code></p></td>
<td align="left" valign="top"><p class="table">2 megabytes</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>28</code></p></td>
<td align="left" valign="top"><p class="table">32 megabytes</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>32</code></p></td>
<td align="left" valign="top"><p class="table">512 megabytes</p></td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

Bloom filters are only a performance feature; they do not change the results of hash operations in any way. The only way to gauge whether or not a Bloom filter is right for your program is to test it. Reasonable values for the size of the Bloom filter are 16-32 bits.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_select-->

### Select

<div class="paragraph">

An experimental *select* operation is provided that inserts those items from a source hash that satisfy a given condition into a destination hash. This insertion is done with somewhat more efficiency than if this were using `HASH_ADD`, namely because the hash function is not recalculated for keys of the selected items. This operation does not remove any items from the source hash. Rather the selected items obtain dual presence in both hashes. The destination hash may already have items in it; the selected items are added to it. In order for a structure to be usable with `HASH_SELECT`, it must have two or more hash handles. (As described [here](#multihash), a structure can exist in many hash tables at the same time; it must have a separate hash handle for each one).

</div>

<div class="literalblock">

<div class="content">

    user_t *users = NULL;   /* hash table of users */
    user_t *admins = NULL;  /* hash table of admins */

</div>

</div>

<div class="literalblock">

<div class="content">

    typedef struct {
        int id;
        UT_hash_handle hh;  /* handle for users hash */
        UT_hash_handle ah;  /* handle for admins hash */
    } user_t;

</div>

</div>

<div class="paragraph">

Now suppose we have added some users, and want to select just the administrator users who have id’s less than 1024.

</div>

<div class="literalblock">

<div class="content">

    #define is_admin(x) (((user_t*)x)->id < 1024)
    HASH_SELECT(ah, admins, hh, users, is_admin);

</div>

</div>

<div class="paragraph">

The first two parameters are the *destination* hash handle and hash table, the second two parameters are the *source* hash handle and hash table, and the last parameter is the *select condition*. Here we used a macro `is_admin(x)` but we could just as well have used a function.

</div>

<div class="literalblock">

<div class="content">

    int is_admin(const void *userv) {
      user_t *user = (const user_t*)userv;
      return (user->id < 1024) ? 1 : 0;
    }

</div>

</div>

<div class="paragraph">

If the select condition always evaluates to true, this operation is essentially a *merge* of the source hash into the destination hash.

</div>

<div class="paragraph">

`HASH_SELECT` adds items to the destination without removing them from the source; the source hash table remains unchanged. The destination hash table must not be the same as the source hash table.

</div>

<div class="paragraph">

An example of using `HASH_SELECT` is included in `tests/test36.c`.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:hash_keycompare-->

### Specifying an alternate key comparison function

<div class="paragraph">

When you call `HASH_FIND(hh, head, intfield, sizeof(int), out)`, uthash will first call [`HASH_FUNCTION`](#hash_functions)`(intfield, sizeof(int), hashvalue)` to determine the bucket `b` in which to search, and then, for each element `elt` of bucket `b`, uthash will evaluate `elt->hh.hashv == hashvalue && elt.hh.keylen == sizeof(int) && HASH_KEYCMP(intfield, elt->hh.key, sizeof(int)) == 0`. `HASH_KEYCMP` should return `0` to indicate that `elt` is a match and should be returned, and any non-zero value to indicate that the search for a matching element should continue.

</div>

<div class="paragraph">

By default, uthash defines `HASH_KEYCMP` as an alias for `memcmp`. On platforms that do not provide `memcmp`, you can substitute your own implementation.

</div>

<div class="listingblock">

<div class="content">

    #undef HASH_KEYCMP
    #define HASH_KEYCMP(a,b,len) bcmp(a, b, len)

</div>

</div>

<div class="paragraph">

Another reason to substitute your own key comparison function is if your "key" is not trivially comparable. In this case you will also need to substitute your own `HASH_FUNCTION`.

</div>

<div class="listingblock">

<div class="content">

    struct Key {
        short s;
        /* 2 bytes of padding */
        float f;
    };
    /* do not compare the padding bytes; do not use memcmp on floats */
    unsigned key_hash(struct Key *s) { return s + (unsigned)f; }
    bool key_equal(struct Key *a, struct Key *b) { return a.s == b.s && a.f == b.f; }

    #define HASH_FUNCTION(s,len,hashv) (hashv) = key_hash((struct Key *)s)
    #define HASH_KEYCMP(a,b,len) (!key_equal((struct Key *)a, (struct Key *)b))

</div>

</div>

<div class="paragraph">

Another reason to substitute your own key comparison function is to trade off correctness for raw speed. During its linear search of a bucket, uthash always compares the 32-bit `hashv` first, and calls `HASH_KEYCMP` only if the `hashv` compares equal. This means that `HASH_KEYCMP` is called at least once per successful find. Given a good hash function, we expect the `hashv` comparison to produce a "false positive" equality only once in four billion times. Therefore, we expect `HASH_KEYCMP` to produce `0` most of the time. If we expect many successful finds, and our application doesn’t mind the occasional false positive, we might substitute a no-op comparison function:

</div>

<div class="listingblock">

<div class="content">

    #undef HASH_KEYCMP
    #define HASH_KEYCMP(a,b,len) 0  /* occasionally wrong, but very fast */

</div>

</div>

<div class="paragraph">

Note: The global equality-comparison function `HASH_KEYCMP` has no relationship at all to the lessthan-comparison function passed as a parameter to `HASH_ADD_INORDER`.

</div>

</div>

<div class="sect2">

<!--libx-source-heading:hash_functions-->

### Built-in hash functions

<div class="paragraph">

Internally, a hash function transforms a key into a bucket number. You don’t have to take any action to use the default hash function, currently Jenkins.

</div>

<div class="paragraph">

Some programs may benefit from using another of the built-in hash functions. There is a simple analysis utility included with uthash to help you determine if another hash function will give you better performance.

</div>

<div class="paragraph">

You can use a different hash function by compiling your program with `-DHASH_FUNCTION=HASH_xyz` where `xyz` is one of the symbolic names listed below. E.g.,

</div>

<div class="literalblock">

<div class="content">

    cc -DHASH_FUNCTION=HASH_BER -o program program.c

</div>

</div>

<div class="tableblock">

<table rules="none" width="50%" frame="border" cellspacing="0" cellpadding="4">
<caption class="title">Table 2. Built-in hash functions</caption>
<colgroup><col width="20%">
<col width="80%">
</colgroup><thead>
<tr>
<th align="center" valign="top">Symbol </th>
<th align="left" valign="top">   Name</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center" valign="top"><p class="table"><code>JEN</code></p></td>
<td align="left" valign="top"><p class="table">Jenkins (default)</p></td>
</tr>
<tr>
<td align="center" valign="top"><p class="table"><code>BER</code></p></td>
<td align="left" valign="top"><p class="table">Bernstein</p></td>
</tr>
<tr>
<td align="center" valign="top"><p class="table"><code>SAX</code></p></td>
<td align="left" valign="top"><p class="table">Shift-Add-Xor</p></td>
</tr>
<tr>
<td align="center" valign="top"><p class="table"><code>OAT</code></p></td>
<td align="left" valign="top"><p class="table">One-at-a-time</p></td>
</tr>
<tr>
<td align="center" valign="top"><p class="table"><code>FNV</code></p></td>
<td align="left" valign="top"><p class="table">Fowler/Noll/Vo</p></td>
</tr>
<tr>
<td align="center" valign="top"><p class="table"><code>SFH</code></p></td>
<td align="left" valign="top"><p class="table">Paul Hsieh</p></td>
</tr>
</tbody>
</table>

</div>

<div class="sect3">

<!--libx-source-heading:_which_hash_function_is_best-->

#### Which hash function is best?

<div class="paragraph">

You can easily determine the best hash function for your key domain. To do so, you’ll need to run your program once in a data-collection pass, and then run the collected data through an included analysis utility.

</div>

<div class="paragraph">

First you must build the analysis utility. From the top-level directory,

</div>

<div class="literalblock">

<div class="content">

    cd tests/
    make

</div>

</div>

<div class="paragraph">

We’ll use `test14.c` to demonstrate the data-collection and analysis steps (here using `sh` syntax to redirect file descriptor 3 to a file):

</div>

<div class="listingblock">

<div class="title">

Using keystats

</div>

<div class="content">

    % cc -DHASH_EMIT_KEYS=3 -I../src -o test14 test14.c
    % ./test14 3>test14.keys
    % ./keystats test14.keys
    fcn  ideal%     #items   #buckets  dup%  fl   add_usec  find_usec  del-all usec
    ---  ------ ---------- ---------- -----  -- ---------- ----------  ------------
    SFH   91.6%       1219        256    0%  ok         92        131            25
    FNV   90.3%       1219        512    0%  ok        107         97            31
    SAX   88.7%       1219        512    0%  ok        111        109            32
    OAT   87.2%       1219        256    0%  ok         99        138            26
    JEN   86.7%       1219        256    0%  ok         87        130            27
    BER   86.2%       1219        256    0%  ok        121        129            27

</div>

</div>

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">Note</div>
</td>
<td class="content">The number 3 in <code>-DHASH_EMIT_KEYS=3</code> is a file descriptor. Any file descriptor
that your program doesn’t use for its own purposes can be used instead of 3.
The data-collection mode enabled by <code>-DHASH_EMIT_KEYS=x</code> should not be used in
production code.</td>
</tr></tbody></table>

</div>

<div class="paragraph">

Usually, you should just pick the first hash function that is listed. Here, this is `SFH`. This is the function that provides the most even distribution for your keys. If several have the same `ideal%`, then choose the fastest one according to the `find_usec` column.

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_keystats_column_reference-->

#### keystats column reference

<div class="dlist">

fcn  
symbolic name of hash function

ideal%  
The percentage of items in the hash table which can be looked up within an ideal number of steps. (Further explained below).

\#items  
the number of keys that were read in from the emitted key file

\#buckets  
the number of buckets in the hash after all the keys were added

dup%  
the percent of duplicate keys encountered in the emitted key file. Duplicates keys are filtered out to maintain key uniqueness. (Duplicates are normal. For example, if the application adds an item to a hash, deletes it, then re-adds it, the key is written twice to the emitted file.)

flags  
this is either `ok`, or `nx` (noexpand) if the expansion inhibited flag is set, described in [Expansion internals](#expansion). It is not recommended to use a hash function that has the `noexpand` flag set.

add_usec  
the clock time in microseconds required to add all the keys to a hash

find_usec  
the clock time in microseconds required to look up every key in the hash

del-all usec  
the clock time in microseconds required to delete every item in the hash

</div>

</div>

<div class="sect3">

<!--libx-source-heading:ideal-->

#### ideal%

<div class="sidebarblock">

<div class="content">

<div class="title">

What is ideal%?

</div>

<div class="paragraph">

The *n* items in a hash are distributed into *k* buckets. Ideally each bucket would contain an equal share *(n/k)* of the items. In other words, the maximum linear position of any item in a bucket chain would be *n/k* if every bucket is equally used. If some buckets are overused and others are underused, the overused buckets will contain items whose linear position surpasses *n/k*. Such items are considered non-ideal.

</div>

<div class="paragraph">

As you might guess, `ideal%` is the percentage of ideal items in the hash. These items have favorable linear positions in their bucket chains. As `ideal%` approaches 100%, the hash table approaches constant-time lookup performance.

</div>

</div>

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:hashscan-->

### hashscan

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">Note</div>
</td>
<td class="content">This utility is only available on Linux, and on FreeBSD (8.1 and up).</td>
</tr></tbody></table>

</div>

<div class="paragraph">

A utility called `hashscan` is included in the `tests/` directory. It is built automatically when you run `make` in that directory. This tool examines a running process and reports on the uthash tables that it finds in that program’s memory. It can also save the keys from each table in a format that can be fed into `keystats`.

</div>

<div class="paragraph">

Here is an example of using `hashscan`. First ensure that it is built:

</div>

<div class="literalblock">

<div class="content">

    cd tests/
    make

</div>

</div>

<div class="paragraph">

Since `hashscan` needs a running program to inspect, we’ll start up a simple program that makes a hash table and then sleeps as our test subject:

</div>

<div class="literalblock">

<div class="content">

    ./test_sleep &
    pid: 9711

</div>

</div>

<div class="paragraph">

Now that we have a test program, let’s run `hashscan` on it:

</div>

<div class="literalblock">

<div class="content">

    ./hashscan 9711
    Address            ideal    items  buckets mc fl bloom/sat fcn keys saved to
    ------------------ ----- -------- -------- -- -- --------- --- -------------
    0x862e038            81%    10000     4096 11 ok 16    14% JEN

</div>

</div>

<div class="paragraph">

If we wanted to copy out all its keys for external analysis using `keystats`, add the `-k` flag:

</div>

<div class="literalblock">

<div class="content">

    ./hashscan -k 9711
    Address            ideal    items  buckets mc fl bloom/sat fcn keys saved to
    ------------------ ----- -------- -------- -- -- --------- --- -------------
    0x862e038            81%    10000     4096 11 ok 16    14% JEN /tmp/9711-0.key

</div>

</div>

<div class="paragraph">

Now we could run `./keystats /tmp/9711-0.key` to analyze which hash function has the best characteristics on this set of keys.

</div>

<div class="sect3">

<!--libx-source-heading:_hashscan_column_reference-->

#### hashscan column reference

<div class="dlist">

Address  
virtual address of the hash table

ideal  
The percentage of items in the table which can be looked up within an ideal number of steps. See [\[ideal\]](#ideal) in the `keystats` section.

items  
number of items in the hash table

buckets  
number of buckets in the hash table

mc  
the maximum chain length found in the hash table (uthash usually tries to keep fewer than 10 items in each bucket, or in some cases a multiple of 10)

fl  
flags (either `ok`, or `NX` if the expansion-inhibited flag is set)

bloom/sat  
if the hash table uses a Bloom filter, this is the size (as a power of two) of the filter (e.g. 16 means the filter is 2^16 bits in size). The second number is the "saturation" of the bits expressed as a percentage. The lower the percentage, the more potential benefit to identify cache misses quickly.

fcn  
symbolic name of hash function

keys saved to  
file to which keys were saved, if any

</div>

<div class="sidebarblock">

<div class="content">

<div class="title">

How hashscan works

</div>

<div class="paragraph">

When hashscan runs, it attaches itself to the target process, which suspends the target process momentarily. During this brief suspension, it scans the target’s virtual memory for the signature of a uthash hash table. It then checks if a valid hash table structure accompanies the signature and reports what it finds. When it detaches, the target process resumes running normally. The hashscan is performed "read-only"-- the target process is not modified. Since hashscan is analyzing a momentary snapshot of a running process, it may return different results from one run to another.

</div>

</div>

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:expansion-->

### Expansion internals

<div class="paragraph">

Internally this hash manages the number of buckets, with the goal of having enough buckets so that each one contains only a small number of items.

</div>

<div class="sidebarblock">

<div class="content">

<div class="title">

Why does the number of buckets matter?

</div>

<div class="paragraph">

When looking up an item by its key, this hash scans linearly through the items in the appropriate bucket. In order for the linear scan to run in constant time, the number of items in each bucket must be bounded. This is accomplished by increasing the number of buckets as needed.

</div>

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_normal_expansion-->

#### Normal expansion

<div class="paragraph">

This hash attempts to keep fewer than 10 items in each bucket. When an item is added that would cause a bucket to exceed this number, the number of buckets in the hash is doubled and the items are redistributed into the new buckets. In an ideal world, each bucket will then contain half as many items as it did before.

</div>

<div class="paragraph">

Bucket expansion occurs automatically and invisibly as needed. There is no need for the application to know when it occurs.

</div>

<div class="sect4">

<!--libx-source-heading:_per_bucket_expansion_threshold-->

##### Per-bucket expansion threshold

<div class="paragraph">

Normally all buckets share the same threshold (10 items) at which point bucket expansion is triggered. During the process of bucket expansion, uthash can adjust this expansion-trigger threshold on a per-bucket basis if it sees that certain buckets are over-utilized.

</div>

<div class="paragraph">

When this threshold is adjusted, it goes from 10 to a multiple of 10 (for that particular bucket). The multiple is based on how many times greater the actual chain length is than the ideal length. It is a practical measure to reduce excess bucket expansion in the case where a hash function over-utilizes a few buckets but has good overall distribution. However, if the overall distribution gets too bad, uthash changes tactics.

</div>

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_inhibited_expansion-->

#### Inhibited expansion

<div class="paragraph">

You usually don’t need to know or worry about this, particularly if you used the `keystats` utility during development to select a good hash for your keys.

</div>

<div class="paragraph">

A hash function may yield an uneven distribution of items across the buckets. In moderation this is not a problem. Normal bucket expansion takes place as the chain lengths grow. But when significant imbalance occurs (because the hash function is not well suited to the key domain), bucket expansion may be ineffective at reducing the chain lengths.

</div>

<div class="paragraph">

Imagine a very bad hash function which always puts every item in bucket 0. No matter how many times the number of buckets is doubled, the chain length of bucket 0 stays the same. In a situation like this, the best behavior is to stop expanding, and accept *O(n)* lookup performance. This is what uthash does. It degrades gracefully if the hash function is ill-suited to the keys.

</div>

<div class="paragraph">

If two consecutive bucket expansions yield `ideal%` values below 50%, uthash inhibits expansion for that hash table. Once set, the *bucket expansion inhibited* flag remains in effect as long as the hash has items in it. Inhibited expansion may cause `HASH_FIND` to exhibit worse than constant-time performance.

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_diagnostic_hooks-->

#### Diagnostic hooks

<div class="paragraph">

There are two "notification" hooks which get executed if uthash is expanding buckets, or setting the *bucket expansion inhibited* flag. There is no need for the application to set these hooks or take action in response to these events. They are mainly for diagnostic purposes. Normally both of these hooks are undefined and thus compile away to nothing.

</div>

<div class="paragraph">

The `uthash_expand_fyi` hook can be defined to execute code whenever uthash performs a bucket expansion.

</div>

<div class="listingblock">

<div class="content">

    #undef uthash_expand_fyi
    #define uthash_expand_fyi(tbl) printf("expanded to %u buckets\n", tbl->num_buckets)

</div>

</div>

<div class="paragraph">

The `uthash_noexpand_fyi` hook can be defined to execute code whenever uthash sets the *bucket expansion inhibited* flag.

</div>

<div class="listingblock">

<div class="content">

    #undef uthash_noexpand_fyi
    #define uthash_noexpand_fyi(tbl) printf("warning: bucket expansion inhibited\n")

</div>

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_hooks-->

### Hooks

<div class="paragraph">

You don’t need to use these hooks — they are only here if you want to modify the behavior of uthash. Hooks can be used to replace standard library functions that might be unavailable on some platforms, to change how uthash allocates memory, or to run code in response to certain internal events.

</div>

<div class="paragraph">

The `uthash.h` header will define these hooks to default values, unless they are already defined. It is safe either to `#undef` and redefine them after including `uthash.h`, or to define them before inclusion; for example, by passing `-Duthash_malloc=my_malloc` on the command line.

</div>

<div class="sect3">

<!--libx-source-heading:_specifying_alternate_memory_management_functions-->

#### Specifying alternate memory management functions

<div class="paragraph">

By default, uthash uses `malloc` and `free` to manage memory. If your application uses its own custom allocator, uthash can use them too.

</div>

<div class="listingblock">

<div class="content">

    #include "uthash.h"

    /* undefine the defaults */
    #undef uthash_malloc
    #undef uthash_free

    /* re-define, specifying alternate functions */
    #define uthash_malloc(sz) my_malloc(sz)
    #define uthash_free(ptr, sz) my_free(ptr)

    ...

</div>

</div>

<div class="paragraph">

Notice that `uthash_free` receives two parameters. The `sz` parameter is for convenience on embedded platforms that manage their own memory.

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_specifying_alternate_standard_library_functions-->

#### Specifying alternate standard library functions

<div class="paragraph">

Uthash also uses `strlen` (in the `HASH_FIND_STR` convenience macro, for example) and `memset` (used only for zeroing memory). On platforms that do not provide these functions, you can substitute your own implementations.

</div>

<div class="listingblock">

<div class="content">

    #undef uthash_bzero
    #define uthash_bzero(a, len) my_bzero(a, len)

    #undef uthash_strlen
    #define uthash_strlen(s) my_strlen(s)

</div>

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_out_of_memory-->

#### Out of memory

<div class="paragraph">

If memory allocation fails (i.e., the `uthash_malloc` function returns `NULL`), the default behavior is to terminate the process by calling `exit(-1)`. This can be modified by re-defining the `uthash_fatal` macro.

</div>

<div class="listingblock">

<div class="content">

    #undef uthash_fatal
    #define uthash_fatal(msg) my_fatal_function(msg)

</div>

</div>

<div class="paragraph">

The fatal function should terminate the process or `longjmp` back to a safe place. Note that an allocation failure may leave allocated memory that cannot be recovered. After `uthash_fatal`, the hash table object should be considered unusable; it might not be safe even to run `HASH_CLEAR` on the hash table when it is in this state.

</div>

<div class="paragraph">

To enable "returning a failure" if memory cannot be allocated, define the macro `HASH_NONFATAL_OOM` before including the `uthash.h` header file. In this case, `uthash_fatal` is not used; instead, each allocation failure results in a single call to `uthash_nonfatal_oom(elt)` where `elt` is the address of the element whose insertion triggered the failure. The default behavior of `uthash_nonfatal_oom` is a no-op.

</div>

<div class="listingblock">

<div class="content">

    #undef uthash_nonfatal_oom
    #define uthash_nonfatal_oom(elt) perhaps_recover((element_t *) elt)

</div>

</div>

<div class="paragraph">

Before the call to `uthash_nonfatal_oom`, the hash table is rolled back to the state it was in prior to the problematic insertion; no memory is leaked. It is safe to `throw` or `longjmp` out of the `uthash_nonfatal_oom` handler.

</div>

<div class="paragraph">

The `elt` argument will be of the correct pointer-to-element type, unless `uthash_nonfatal_oom` is invoked from `HASH_SELECT`, in which case it will be of `void*` type and must be cast before using. In any case, `elt->hh.tbl` will be `NULL`.

</div>

<div class="paragraph">

Allocation failure is possible only when adding elements to the hash table (including the `ADD`, `REPLACE`, and `SELECT` operations). `uthash_free` is not allowed to fail.

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_debug_mode-->

### Debug mode

<div class="paragraph">

If a program that uses this hash is compiled with `-DHASH_DEBUG=1`, a special internal consistency-checking mode is activated. In this mode, the integrity of the whole hash is checked following every add or delete operation. This is for debugging the uthash software only, not for use in production code.

</div>

<div class="paragraph">

In the `tests/` directory, running `make debug` will run all the tests in this mode.

</div>

<div class="paragraph">

In this mode, any internal errors in the hash data structure will cause a message to be printed to `stderr` and the program to exit.

</div>

<div class="paragraph">

The `UT_hash_handle` data structure includes `next`, `prev`, `hh_next` and `hh_prev` fields. The former two fields determine the "application" ordering (that is, insertion order-- the order the items were added). The latter two fields determine the "bucket chain" order. These link the `UT_hash_handles` together in a doubly-linked list that is a bucket chain.

</div>

<div class="paragraph">

Checks performed in `-DHASH_DEBUG=1` mode:

</div>

<div class="ulist">

- the hash is walked in its entirety twice: once in *bucket* order and a second time in *application* order

- the total number of items encountered in both walks is checked against the stored number

- during the walk in *bucket* order, each item’s `hh_prev` pointer is compared for equality with the last visited item

- during the walk in *application* order, each item’s `prev` pointer is compared for equality with the last visited item

</div>

<div class="sidebarblock">

<div class="content">

<div class="title">

Macro debugging:

</div>

<div class="paragraph">

Sometimes it’s difficult to interpret a compiler warning on a line which contains a macro call. In the case of uthash, one macro can expand to dozens of lines. In this case, it is helpful to expand the macros and then recompile. By doing so, the warning message will refer to the exact line within the macro.

</div>

<div class="paragraph">

Here is an example of how to expand the macros and then recompile. This uses the `test1.c` program in the `tests/` subdirectory.

</div>

<div class="literalblock">

<div class="content">

    gcc -E -I../src test1.c > /tmp/a.c
    egrep -v '^#' /tmp/a.c > /tmp/b.c
    indent /tmp/b.c
    gcc -o /tmp/b /tmp/b.c

</div>

</div>

<div class="paragraph">

The last line compiles the original program (test1.c) with all macros expanded. If there was a warning, the referenced line number can be checked in `/tmp/b.c`.

</div>

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_thread_safety-->

### Thread safety

<div class="paragraph">

You can use uthash in a threaded program. But you must do the locking. Use a read-write lock to protect against concurrent writes. It is ok to have concurrent readers (since uthash 1.5).

</div>

<div class="paragraph">

For example using pthreads you can create an rwlock like this:

</div>

<div class="literalblock">

<div class="content">

    pthread_rwlock_t lock;
    if (pthread_rwlock_init(&lock, NULL) != 0) fatal("can't create rwlock");

</div>

</div>

<div class="paragraph">

Then, readers must acquire the read lock before doing any `HASH_FIND` calls or before iterating over the hash elements:

</div>

<div class="literalblock">

<div class="content">

    if (pthread_rwlock_rdlock(&lock) != 0) fatal("can't get rdlock");
    HASH_FIND_INT(elts, &i, e);
    pthread_rwlock_unlock(&lock);

</div>

</div>

<div class="paragraph">

Writers must acquire the exclusive write lock before doing any update. Add, delete, and sort are all updates that must be locked.

</div>

<div class="literalblock">

<div class="content">

    if (pthread_rwlock_wrlock(&lock) != 0) fatal("can't get wrlock");
    HASH_DEL(elts, e);
    pthread_rwlock_unlock(&lock);

</div>

</div>

<div class="paragraph">

If you prefer, you can use a mutex instead of a read-write lock, but this will reduce reader concurrency to a single thread at a time.

</div>

<div class="paragraph">

An example program using uthash with a read-write lock is included in `tests/threads/test1.c`.

</div>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:Macro_reference-->

## Macro reference

<div class="sectionbody">

<div class="sect2">

<!--libx-source-heading:_convenience_macros-->

### Convenience macros

<div class="paragraph">

The convenience macros do the same thing as the generalized macros, but require fewer arguments.

</div>

<div class="paragraph">

In order to use the convenience macros,

</div>

<div class="olist arabic">

1.  the structure’s `UT_hash_handle` field must be named `hh`, and

2.  for add or find, the key field must be of type `int` or `char[]` or pointer

</div>

<div class="tableblock">

<table rules="none" width="90%" frame="border" cellspacing="0" cellpadding="4">
<caption class="title">Table 3. Convenience macros</caption>
<colgroup><col width="25%">
<col width="75%">
</colgroup><thead>
<tr>
<th align="left" valign="top">macro            </th>
<th align="left" valign="top"> arguments</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_INT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_INT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr, replaced_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_FIND_INT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, key_ptr, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_STR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_STR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr, replaced_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_FIND_STR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, key_ptr, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_PTR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_PTR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr, replaced_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_FIND_PTR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, key_ptr, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_DEL</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_SORT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_COUNT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head)</code></p></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_general_macros-->

### General macros

<div class="paragraph">

These macros add, find, delete and sort the items in a hash. You need to use the general macros if your `UT_hash_handle` is named something other than `hh`, or if your key’s data type isn’t `int` or `char[]`.

</div>

<div class="tableblock">

<table rules="none" width="90%" frame="border" cellspacing="0" cellpadding="4">
<caption class="title">Table 4. General macros</caption>
<colgroup><col width="25%">
<col width="75%">
</colgroup><thead>
<tr>
<th align="left" valign="top">macro                               </th>
<th align="left" valign="top"> arguments</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_BYHASHVALUE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, hashv, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_KEYPTR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_KEYPTR_BYHASHVALUE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, hashv, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_BYHASHVALUE_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, hashv, item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_KEYPTR_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_KEYPTR_BYHASHVALUE_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, hashv, item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, item_ptr, replaced_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_BYHASHVALUE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, hashv, item_ptr, replaced_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, item_ptr, replaced_item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_BYHASHVALUE_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, hashv, item_ptr, replaced_item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_FIND</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_FIND_BYHASHVALUE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, hashv, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_DELETE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_VALUE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(key_ptr, key_len, hashv)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_SRT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_CNT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_CLEAR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_SELECT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(dst_hh_name, dst_head, src_hh_name, src_head, condition)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ITER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, item_ptr, tmp_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_OVERHEAD</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head)</code></p></td>
</tr>
</tbody>
</table>

</div>

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">Note</div>
</td>
<td class="content"><code>HASH_ADD_KEYPTR</code> is used when the structure contains a pointer to the
key, rather than the key itself.</td>
</tr></tbody></table>

</div>

<div class="paragraph">

The `HASH_VALUE` and `..._BYHASHVALUE` macros are a performance mechanism mainly for the special case of having different structures, in different hash tables, having identical keys. It allows the hash value to be obtained once and then passed in to the `..._BYHASHVALUE` macros, saving the expense of re-computing the hash value.

</div>

<div class="sect3">

<!--libx-source-heading:_argument_descriptions-->

#### Argument descriptions

<div class="dlist">

hh_name  
name of the `UT_hash_handle` field in the structure. Conventionally called `hh`.

head  
the structure pointer variable which acts as the "head" of the hash. So named because it initially points to the first item that is added to the hash.

keyfield_name  
the name of the key field in the structure. (In the case of a multi-field key, this is the first field of the key). If you’re new to macros, it might seem strange to pass the name of a field as a parameter. See [note](#validc).

key_len  
the length of the key field in bytes. E.g. for an integer key, this is `sizeof(int)`, while for a string key it’s `strlen(key)`. (For a multi-field key, see [this note](#multifield_note).)

key_ptr  
for `HASH_FIND`, this is a pointer to the key to look up in the hash (since it’s a pointer, you can’t directly pass a literal value here). For `HASH_ADD_KEYPTR`, this is the address of the key of the item being added.

hashv  
the hash value of the provided key. This is an input parameter for the `..._BYHASHVALUE` macros, and an output parameter for `HASH_VALUE`. Reusing a cached hash value can be a performance optimization if you’re going to do repeated lookups for the same key.

item_ptr  
pointer to the structure being added, deleted, replaced, or looked up, or the current pointer during iteration. This is an input parameter for the `HASH_ADD`, `HASH_DELETE`, and `HASH_REPLACE` macros, and an output parameter for `HASH_FIND` and `HASH_ITER`. (When using `HASH_ITER` to iterate, `tmp_item_ptr` is another variable of the same type as `item_ptr`, used internally).

replaced_item_ptr  
used in `HASH_REPLACE` macros. This is an output parameter that is set to point to the replaced item (if no item is replaced it is set to NULL).

cmp  
pointer to comparison function which accepts two arguments (pointers to items to compare) and returns an int specifying whether the first item should sort before, equal to, or after the second item (like `strcmp`).

condition  
a function or macro which accepts a single argument (a void pointer to a structure, which needs to be cast to the appropriate structure type). The function or macro should evaluate to a non-zero value if the structure should be "selected" for addition to the destination hash.

</div>

</div>

</div>

</div>

</div>
