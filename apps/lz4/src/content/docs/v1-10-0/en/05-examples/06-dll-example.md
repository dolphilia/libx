---
title: "LZ4: lib/dll/example/README.md"
licenseSource: "lz4-1-10-0-lib-dll-example-readme-md"
documentContext:
  - kind: source
    html: "<p>Unofficial Libx presentation of the fixed LZ4 1.10.0 English original. Formatting and link mapping: 2026-10-05. Original commit: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>; SHA-256: <code>3bfef50f199e2d06312368ecfb7198f7b5e34eff03720b9aee6783a76277cff2</code>. <a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/lib/dll/example/README.md\">Fixed upstream source</a>; <a href=\"/docs/lz4/source/v1-10-0/originals/lib/dll/example/README.md.txt\">Unmodified original and its notices</a>; <a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">Complete fixed upstream archive</a>; <a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">Upstream license allocation notice</a>. Original copyright, permission, and warranty notices are retained. Japanese translations are unofficial.</p><p>Under Libx’s operating policy, where no documentation-specific license statement was found, the software license identified for this material is applied to this documentation. Applicable terms: BSD-2-Clause. This is an operational decision, not a newly obtained permission.</p><p>Presentation changes: original Markdown unchanged except mapped local destinations. No technical prose has been silently corrected or summarized.</p>"
  - kind: editorial
    html: "<p>The original advertises HC levels 3–16 and -18. The fixed lz4hc.h declares LZ4HC_CLEVEL_MAX as 12. The original example description is retained; it is not a claim that the old levels work with v1.10.0.</p>"
---

LZ4 Windows binary package
====================================

#### The package contents

- `lz4.exe`                  : Command Line Utility, supporting gzip-like arguments
- `dll\msys-lz4-1.dll`       : The DLL of LZ4 library, compiled by msys
- `dll\liblz4.dll.a`         : The import library of LZ4 library for Visual C++
- `example\`                 : The example of usage of LZ4 library
- `include\`                 : Header files required with LZ4 library
- `static\liblz4_static.lib` : The static LZ4 library


#### Usage of Command Line Interface

Command Line Interface (CLI) supports gzip-like arguments.
By default CLI takes an input file and compresses it to an output file:
```
    Usage: lz4 [arg] [input] [output]
```
The full list of commands for CLI can be obtained with `-h` or `-H`. The ratio can
be improved with commands from `-3` to `-16` but higher levels also have slower
compression. CLI includes in-memory compression benchmark module with compression
levels starting from `-b` and ending with `-e` with iteration time of `-i` seconds.
CLI supports aggregation of parameters i.e. `-b1`, `-e18`, and `-i1` can be joined
into `-b1e18i1`.


#### The example of usage of static and dynamic LZ4 libraries with gcc/MinGW

Use `cd example` and `make` to build `fullbench-dll` and `fullbench-lib`.
`fullbench-dll` uses a dynamic LZ4 library from the `dll` directory.
`fullbench-lib` uses a static LZ4 library from the `lib` directory.


#### Using LZ4 DLL with gcc/MinGW

The header files from `include\` and the dynamic library `dll\msys-lz4-1.dll`
are required to compile a project using gcc/MinGW.
The dynamic library has to be added to linking options.
It means that if a project that uses LZ4 consists of a single `test-dll.c`
file it should be linked with `dll\msys-lz4-1.dll`. For example:
```
    gcc $(CFLAGS) -Iinclude\ test-dll.c -o test-dll dll\msys-lz4-1.dll
```
The compiled executable will require LZ4 DLL which is available at `dll\msys-lz4-1.dll`.


#### The example of usage of static and dynamic LZ4 libraries with Visual C++

Open `example\fullbench-dll.sln` to compile `fullbench-dll` that uses a
dynamic LZ4 library from the `dll` directory. The solution works with Visual C++
2010 or newer. When one will open the solution with Visual C++ newer than 2010
then the solution will be upgraded to the current version.


#### Using LZ4 DLL with Visual C++

The header files from `include\` and the import library `dll\liblz4.dll.a`
are required to compile a project using Visual C++.

1. The header files should be added to `Additional Include Directories` that can
   be found in project properties `C/C++` then `General`.
2. The import library has to be added to `Additional Dependencies` that can
   be found in project properties `Linker` then `Input`.
   If one will provide only the name `liblz4.dll.a` without a full path to the library
   the directory has to be added to `Linker\General\Additional Library Directories`.

The compiled executable will require LZ4 DLL which is available at `dll\msys-lz4-1.dll`.
