---
title: "LZ4: build/meson/README.md"
licenseSource: "lz4-1-10-0-build-meson-readme-md"
documentContext:
  - kind: source
    html: "<p>Unofficial Libx presentation of the fixed LZ4 1.10.0 English original. Formatting and link mapping: 2026-10-05. Original commit: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>; SHA-256: <code>16be5030767265e9887c595769c6c234f2ae2002a565fa6f430d95b8bb48f350</code>. <a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/build/meson/README.md\">Fixed upstream source</a>; <a href=\"/docs/lz4/source/v1-10-0/originals/build/meson/README.md.txt\">Unmodified original and its notices</a>; <a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">Complete fixed upstream archive</a>; <a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">Upstream license allocation notice</a>. Original copyright, permission, and warranty notices are retained. Japanese translations are unofficial.</p><p>Under Libx’s operating policy, where no documentation-specific license statement was found, the software license identified for this material is applied to this documentation. Applicable terms: GPL-2.0-or-later（本掲載はversion2条件を履行）. This is an operational decision, not a newly obtained permission.</p><p>Presentation changes: original Markdown unchanged except mapped local destinations. No technical prose has been silently corrected or summarized.</p>"
  - kind: editorial
    html: "<p>The original still names contrib/meson. This fixed release stores these files in build/meson; NEWS records the move. The original commands have been retained rather than silently corrected.</p>"
---

Meson build system for lz4
==========================

Meson is a build system designed to optimize programmer productivity.
It aims to do this by providing simple, out-of-the-box support for
modern software development tools and practices, such as unit tests,
coverage reports, Valgrind, CCache and the like.

This Meson build system is provided with no guarantee.

## How to build

`cd` to this meson directory (`contrib/meson`)

```sh
meson setup --buildtype=release -Ddefault_library=shared -Dprograms=true builddir
cd builddir
ninja             # to build
ninja install     # to install
```

You might want to install it in staging directory:

```sh
DESTDIR=./staging ninja install
```

To configure build options, use:

```sh
meson configure
```

See [man meson(1)](https://manpages.debian.org/testing/meson/meson.1.en.html).
