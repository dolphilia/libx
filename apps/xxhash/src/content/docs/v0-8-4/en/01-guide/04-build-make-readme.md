---
title: "build/make/README.md"
licenseSource: "xxhash-make"
documentContext: [{"kind":"source","html":"<h2 id=\"source-and-notices\">Source and notices</h2>\n<p>No documentation-specific license statement was found in the recorded checks. Under Libx’s operating policy, the software component’s GPL-2.0-or-later license is applied to this documentation with this annotation. This is an operational decision, not a newly obtained permission.</p>\n<p>Fixed software version: <strong>0.8.4</strong>. Source commit: <code>c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0</code>. This is an unofficial presentation; formatting, internal links and clearly marked editorial notes are Libx changes. The Japanese translation is provided separately when completed.</p>\n<p><a href=\"/docs/xxhash/v0-8-4/en/03-notices/make-header/\">make-header</a> · <a href=\"/docs/xxhash/v0-8-4/en/03-notices/gpl-v2/\">gpl-v2</a></p>\n<p><a href=\"https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/build/make/README.md\">Fixed original source</a> · <a href=\"/docs/xxhash/source/v0-8-4/build/make/README.md.txt\">Original text download</a></p>"}]
---

# multiconf.make

**multiconf.make** is a self-contained Makefile include that lets you build the **same targets under many different flag sets**. For example debug vs release, ASan vs UBSan, GCC vs Clang.
Each different set of flags generates object files into its own **dedicated cache directory**, so objects compiled with one configuration are never reused by another.
Object files from previous configurations are preserved, so swapping back to a previous configuration only requires compiling objects which have actually changed.

---

## Benefits at a glance

| Benefit | What `multiconf.make` does |
| --- | --- |
| **Isolated configs** | Stores objects into `cachedObjs/<hash>/`, one directory per unique flag set. |
| **Fast switching** | Reusing an old config is instant—link only, no recompilation. |
| **Header deps** | Edits to headers trigger only needed rebuilds. |
| **One-liner targets** | Macros (`c_program`, `cxx_program`, …) hide all rule boilerplate. |
| **Parallel-ready** | Safe with `make -j`, no duplicate compiles of shared sources. |
| **Controlled verbosity** | Default only lists objects, while `V=1` display full commands. |
| **`clean` included** | `make clean` deletes all objects, binaries and links. |

---

## Quick Start

### 1 · List your sources

```make
C_SRCDIRS   := src src/cdeps    # all .c are in these directories
CXX_SRCDIRS := src src/cxxdeps  # all .cpp are in these directories
```

### 2 · Add and include

```make
# root/Makefile
include multiconf.make
```

### 3 · Declare targets

```make
app:
$(eval $(call c_program,app,app.o cdeps/obj.o))

test:
$(eval $(call cxx_program,test, test.o cxxdeps/objcxx.o))

lib.a:
$(eval $(call static_library,lib.a, lib.o cdeps/obj.o))

lib.so:
$(eval $(call c_dynamic_library,lib.so, lib.o cdeps/obj.o))
```

### 4 · Build any config you like

```sh
# Release with GCC
make CFLAGS="-O3"

# Debug with Clang + AddressSanitizer (new cache dir)
make CC=clang CFLAGS="-g -O0 -fsanitize=address"

# Switch back to GCC release (objects still valid, relink only)
make CFLAGS="-O3"
```

Objects for each command live in different sub-folders; nothing overlaps.

---



