---
title: "uthash ChangeLog"
author: "Document author unspecified"
licenseSource: uthash-ChangeLog-2.4.0
order: 7
---

<div id="preamble">

<div class="sectionbody">

<div class="paragraph">

Click to return to the [uthash home page](https://troydhanson.github.io/uthash/).

</div>

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">Note</div>
</td>
<td class="content">This ChangeLog may be incomplete and/or incorrect. See the git commit log.</td>
</tr></tbody></table>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_2_4_0_2026_06_25-->

## Version 2.4.0 (2026-06-25)

<div class="sectionbody">

<div class="ulist">

- add utarray_replace (thanks, xunicatt!)

- add LL_REVERSE/DL_REVERSE/CDL_REVERSE (thanks, xunicatt!)

- add CDL_CONCAT (thanks, xunicatt!)

- remove `oom` (deprecated in v2.2.0) in favor of `utarray_oom`

- remove HASH_DEFINE_OWN_STDINT (added in v2.2.0), on the theory nobody uses it

- use \_\_typeof on the MCST Elbrus C Compiler (thanks, utf-4096!)

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_2_3_0_2021_02_25-->

## Version 2.3.0 (2021-02-25)

<div class="sectionbody">

<div class="ulist">

- remove HASH_FCN; the HASH_FUNCTION and HASH_KEYCMP macros now behave similarly

- remove uthash_memcmp (deprecated in v2.1.0) in favor of HASH_KEYCMP

- silence -Wswitch-default warnings (thanks, Olaf Bergmann!)

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_2_2_0_2020_12_17-->

## Version 2.2.0 (2020-12-17)

<div class="sectionbody">

<div class="ulist">

- add HASH_NO_STDINT for platforms without C99 \<stdint.h\>

- silence many -Wcast-qual warnings (thanks, Olaf Bergmann!)

- skip hash computation when finding in an empty hash (thanks, Huansong Fu!)

- rename oom to utarray_oom, in utarray.h (thanks, Hong Xu!)

- rename oom to utstring_oom, in utstring.h (thanks, Hong Xu!)

- remove MurmurHash/HASH_MUR

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_2_1_0_2018_12_20-->

## Version 2.1.0 (2018-12-20)

<div class="sectionbody">

<div class="ulist">

- silence some Clang static analysis warnings

- add LL_INSERT_INORDER and LL_LOWER_BOUND etc (thanks, Jeffrey Lovitz and Mattias Eriksson!)

- add uthash_bzero for platforms without \<string.h\>

- fix a missing HASH_BLOOM_ADD in HASH_SELECT (thanks, Pawel Veselov!)

- permit malloc failure to be recoverable via HASH_NONFATAL_OOM (thanks, Pawel Veselov!)

- avoid repeated calls to uthash_strlen in HASH_FIND_STR

- rename uthash_memcmp to HASH_KEYCMP, leaving the old name for compatibility

- add utstack.h

- remove libut

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_2_0_2_2017_03_02-->

## Version 2.0.2 (2017-03-02)

<div class="sectionbody">

<div class="ulist">

- fix segfault in HASH_ADD_INORDER etc (thanks, Yana Kireyonok!)

- remove spurious cast to unsigned in utstring_len (thanks, Michal Sestrienka!)

- add uthash_memcmp and uthash_strlen for platforms without \<stdlib.h\> (thanks, Pawel Veselov!)

- fix a C++ incompatibility in utringbuffer

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_2_0_1_2016_07_05-->

## Version 2.0.1 (2016-07-05)

<div class="sectionbody">

<div class="ulist">

- in-order insertion macros HASH_ADD_INORDER etc (thanks, Thilo Schulz!)

- by-hashvalue insertion macros HASH_ADD_BYHASHVALUE etc

- during key comparison, check hashvalue before doing a full memcmp

- add utringbuffer.h

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_9_1_2014_11_18-->

## Version 1.9.9.1 (2014-11-18)

<div class="sectionbody">

<div class="ulist">

- inclusion of experimental libut bundle with utvector in opt/

- use shift in Bernstein hash instead of multiply (thanks, Jimmy Zhuo!)

- switch ssize_t types in utarray/utstring to size_t (thanks, Hong Xu!)

- fix utstring pointer math on \>4GB strings (thanks, Thomas Bottesch!)

- change FNV hash to FNV-1a varation (thanks, dwest1975!)

- fix bug in HASH_REPLACE_STR (thanks, Ilya Kaliman!)

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_9_2014_02_25-->

## Version 1.9.9 (2014-02-25)

<div class="sectionbody">

<div class="ulist">

- made HASH_ADD_STR compatible with char\* or char\[\] (thanks, Samuel Thibault!)

- fixed header inclusion of sys/types.h for ssize_t (thanks, Fernando Campos!)

- added LL_COUNT/DL_COUNT/CDL_COUNT (thansk, Paul Praet!)

- added LRU cache example in `tests/lru_cache` (thanks, Oliver Lorenz!)

- fix LL_DELETE2 for VS2008 (thanks, Greg Davydouski!)

- fix missing argument in `HASH_REPLACE_STR` (thanks, Alex!)

- bump version number in source files to match docs (thanks, John Crow!)

- add `HASH_OVERHEAD` macro to get overhead size for hash table

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_8_2013_03_10-->

## Version 1.9.8 (2013-03-10)

<div class="sectionbody">

<div class="ulist">

- `HASH_REPLACE` now in uthash (thanks, Nick Vatamaniuc!)

- fixed clang warnings (thanks wynnw!)

- fixed `utarray_insert` when inserting past array end (thanks Rob Willett!)

- you can now find [uthash on GitHub](http://troydhanson.github.io/uthash/)

- there’s a [uthash Google Group](https://groups.google.com/d/forum/uthash)

- uthash has been downloaded 29,000+ times since 2006 on SourceForge

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_7_2012_10_09-->

## Version 1.9.7 (2012-10-09)

<div class="sectionbody">

<div class="ulist">

- utstring now supports substring search using `utstring_find` (thanks, Joe Wei!)

- utlist now supports element *prepend* and *replace* (thanks, Zoltán Lajos Kis!)

- utlist element prev/next fields can now have any names (thanks, Pawel S. Veselov!)

- uthash cast quiets a clang warning (thanks, Roman Divacky and Baptiste Daroussin!)

- uthash userguide example shows how to check key uniqueness (thanks, Richard Cook!)

- uthash HASH_MUR compiles under MSVC++ 10 in C mode (thanks, Arun Kirthi Cherian!)

- `utstring_printf` now supports format checking (thanks, Donald Carr!)

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_6_2012_04_28-->

## Version 1.9.6 (2012-04-28)

<div class="sectionbody">

<div class="ulist">

- add utarray_prev (thanks, Ben Hiett!)

- add parens/casts for greater compatibility (thanks, Atis, Debasis Ganguly, and Steve McClellan!)

- added ifndef to uthash_malloc and related hooks (thanks, Holger Machens!)

- edit examples so they do not leak memory (thanks, 任晶磊!)

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_5_2011_11_16-->

## Version 1.9.5 (2011-11-16)

<div class="sectionbody">

<div class="ulist">

- added `utarray_renew`

- fixed memory leak in `uthash_clear` when using Bloom filter (thanks, Jan Hättig!)

- utarray now copies the UT_icd on array creation rather than storing a pointer

- add parentheses to `HASH_ADD` to fix preprocessing of certain arguments (thanks, Aaron Rosen!)

- more parenthesizations for greater macro argument flexibility

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_4_2011_06_05-->

## Version 1.9.4 (2011-06-05)

<div class="sectionbody">

<div class="ulist">

- uthash now supports MurmurHash v3

- utlist now includes concatenation macros (`LL_CONCAT` and `DL_CONCAT`)

- utarray now supports binary search (`utarray_find`)

- utstring now supports a new-or-clear-existing macro (`utstring_renew`)

- documented technique for a multi-level hash table

- clarified scope requirements for `UT_icd` in the utarray documentation

- fixed termination when `utstring_clear` is followed by `utstring_body`

- fixed utarray_inserta macro when used with complex arguments

- on Visual Studio define missing type `uint8_t`

- Debian/Ubuntu include uthash in the package `uthash-dev`.

- uthash has been downloaded 16,211 times.

</div>

<div class="paragraph">

Thanks to Yu Feng, Richard Cook, Dino Ciuffetti, Chris Groer, and Arun Cherian for feedback and fixes in this release!

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_3_2010_10_31-->

## Version 1.9.3 (2010-10-31)

<div class="sectionbody">

<div class="ulist">

- fix an `ifdef` for compatibility with Intel compiler (thanks, degski!)

- fix `HASH_ITER` macro to satisfy C++ casting rules (thanks, Erik Bai!)

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_2_2010_10_04-->

## Version 1.9.2 (2010-10-04)

<div class="sectionbody">

<div class="ulist">

- new `HASH_ITER` macro for more convenient deletion-safe iteration

- `hashscan` can now run on FreeBSD 8.1 and later (thanks, Markus Gebert!)

- More parens to evaluate complex macro arguments properly (thanks, ngg!)

- Add sz parameter to the `uthash_free` hook for platforms that do their own memory management. Hopefully this minor API change doesn’t cause too much breakage for people. (thanks, Niall Douglas!)

- uthash has been downloaded 12,294 times

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_1_2010_05_15-->

## Version 1.9.1 (2010-05-15)

<div class="sectionbody">

<div class="ulist">

- Fix a redefinition warning when using `uthash.h` and `utstring.h` together

- Fix a bug in `utstring_init`

- Added `HASH_FIND_PTR` and `HASH_ADD_PTR` (thanks, Niall Douglas!)

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_2010_03_31-->

## Version 1.9 (2010-03-31)

<div class="sectionbody">

<div class="ulist">

- uthash now supports Visual Studio 2008 and 2010 in C or C++ code!

- new headers [utarray.h](/docs/uthash-trial/v2-4-0/en/01-guides/03-utarray/) and [utstring.h](/docs/uthash-trial/v2-4-0/en/01-guides/06-utstring/) are now included. These implement dynamic arrays and strings using macros

- [utlist.h](/docs/uthash-trial/v2-4-0/en/01-guides/02-utlist/) now has deletion-safe iterators and search macros

- the test suite now runs under Visual Studio (thanks again degski!)

- special thanks for suggesting utarray and utlist features to Charalampos P.!

- uthash has been downloaded 9,616 times

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_8_2009_09_08-->

## Version 1.8 (2009-09-08)

<div class="sectionbody">

<div class="ulist">

- Added the `hashscan` utility that can report on the size and quality of hash tables in a running process (Linux-only)

- Added Bloom filter support. This has the potential to speed up certain types of programs that look up non-existant keys in sufficient numbers.

- Restored the MurmurHash, which can once again be used, if an additional symbol is defined. This is a "safety" by which the user declares they understand that `-fno-strict-aliasing` flag must be used if they are using MurmurHash under gcc with optimization.

- Unified the bucket/table malloc hooks; now there is only one malloc hook

- Re-organized the manual into a main section and advanced topics section

- Fixed a bug in `utlist.h` where sorting a singly-linked list threw a compile-time error.

- Fixed a bug in `utlist.h` where a doubly-linked list that is sorted did not maintain the special `head->prev` pointer back to the list tail.

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_7_2009_06_11-->

## Version 1.7 (2009-06-11)

<div class="sectionbody">

<div class="ulist">

- The MurmurHash has been removed, and Jenkin’s hash is once again the default. While MurmurHash performed well, it’s unsafe with regard to the strict aliasing rule. This results in incorrect code when compiled with optimization. It’s not possible to enable `-fno-strict-aliasing` from within a header file.

- The linked list macros in `utlist.h` now comply with the strict-aliasing rule so they generate correct code under high optimization levels (O2 or O3). The use of the `__typeof__` extension, which was originally a GNU extension, may reduce portability to other compilers that do not support this extension. This extension is used in the singly-linked list macros and the sort macros.

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_6_2009_05_08-->

## Version 1.6 (2009-05-08)

<div class="sectionbody">

<div class="paragraph">

Special thanks to Alfred Heisner for contributing several enhancements:

</div>

<div class="ulist">

- Support for two new hash functions:

  <div class="ulist">

  - the Paul Hsieh hash function (`HASH_SFH`)

  - Austin Appleby’s MurmurHash function (`HASH_MUR`)

  </div>

- Because of its excellent performance, MurmurHash is now the default hash function.

- `keystats` now has much better elapsed time accuracy under Cygwin and MinGW

- fixed casting in `HASH_FNV`, `HASH_SAX` and `HASH_OAT` for non-char keys

</div>

<div class="paragraph">

This release also includes:

</div>

<div class="ulist">

- a new `HASH_CLEAR` operation clears a hash table in one step.

- a new `HASH_SELECT` operation inserts those elements from one hash that satisfy a given condition into another hash. The selected items have dual presence in both hash tables. For example a game could select the visible polygons from a hash of all polygons.

- fixed a compile-time error which occurred if the final argument to `HASH_ADD_KEYPTR` was a pointer to an array member like `&a[i]`

- added another test script `tests/all_funcs` which executes the test suite using every supported hash function

</div>

<div class="paragraph">

And lastly,

</div>

<div class="ulist">

- a new, separate header called [utlist.h](/docs/uthash-trial/v2-4-0/en/01-guides/02-utlist/) is included which provides *linked list macros* for C structures, similar in style to the uthash macros

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_5_2009_02_19-->

## Version 1.5 (2009-02-19)

<div class="sectionbody">

<div class="ulist">

- now thread-safe for concurrent readers

- use scratch variables on stack rather than in table (thanks, Petter Arvidsson!). This change made HASH_FIND about 13% faster and enabled reader concurrency.

- made [BSD license](/docs/uthash-trial/v2-4-0/en/02-license/01-license/) terms even more permissive

- added [PDF version](userguide.pdf) of User Guide

- added [update news](http://troydhanson.wordpress.com/feed/) <span class="image"> ![(RSS)](/docs/uthash-trial/assets/uthash-v2-4-0/rss.png) </span>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_4_2008_09_23-->

## Version 1.4 (2008-09-23)

<div class="sectionbody">

<div class="ulist">

- Add `HASH_COUNT` for counting items in the hash

- Compatibility with C++. Satisfy additional casting requirements. Also in the `tests/` directory, running `make cplusplus` now compiles all the test programs with the C++ compiler.

- Eliminate `elmt` pointer from the UT_hash_handle. Calculate elmt from hash handle address by subtracting `hho` (hash handle offset).

- Contributed by L.S.Chin: Cast `void*` to char\* before pointer arithmetic to suppress compiler warnings. We assume compilers abide to C standards which impose requirement that `sizeof(void*) == sizeof(char*)`.

- Return meaningful exit status from do_tests per Tiago Cunha, so that package manager-based install can verify tests are successful

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_3_2008_07_27-->

## Version 1.3 (2008-07-27)

<div class="sectionbody">

<div class="ulist">

- use integer-only math-- no floating point! Support FPU-less CPU’s.

- eliminate `hash_q` metric, which measured the fraction of items with non-ideal chain positions. We only need to know if this fraction is below 0.5. This is now determined using fast bitwise tests.

- when an item is added to the hash, calculate the key’s hash value upfront and store it, instead of recomputing it as needed. This hashv is stored in the hash handle. Potentially major speed benefit for bucket expansion algorithm. Deleting is marginally improved too.

- fixed a minor bug in the calculation of the max ideal chain length; line 446 in v1.2 erroneously calculated a/b\*2 instead of a/(b\*2). The effect of this bug was that bucket expansion could occur more readily because the per-bucket *max chain length multiplier factor* (which delays bucket expansion when certain buckets are overused) was set to a lower, expansion-favoring value than intended.

- improved source commenting and improved variable names in structures

- remove `HASH_JSW`. Lengthy random number array made code less readable

- add `HASH_SRT(hh,hash,cmp)` as a generalized `HASH_SORT(hash,cmp)`. It was an omission in uthash 1.2 that there was no sort macro for hash handles with names other than hh.

- Corrected `HASH_FSCK` so it works with any name for the hash handle.

- behave properly in pathological `HASH_DEL(a,a)` case where the same variable references the head and the deletee (advancing the head then loses the correct reference to the deletee); fix by using scratch area in the hash table to store deletee hash handle.

- made tests runnable on MinGW

- 3000+ downloads since uthash-1.0

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_2_2006_11_22-->

## Version 1.2 (2006-11-22)

<div class="sectionbody">

<div class="ulist">

- new `HASH_SORT` macro

- Cygwin support

- User Guide now features a clickable Table of Contents. (The technique for generating the TOC on the browser was contributed back to the AsciiDoc project and incorporated into AsciiDoc v8.1.0).

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_1_2006_06_28-->

## Version 1.1 (2006-06-28)

<div class="sectionbody">

<div class="ulist">

- uthash-1.1 released

- supports several built-in user-selectable hash functions

- new keystats utility quantifies performance of hash functions

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_0_2006_06_02-->

## Version 1.0 (2006-06-02)

<div class="sectionbody">

<div class="ulist">

- Initial release

</div>

</div>

</div>
