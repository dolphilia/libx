---
title: "LZ4: contrib/djgpp/README.MD"
licenseSource: "lz4-1-10-0-contrib-djgpp-readme-md"
documentContext:
  - kind: source
    html: "<p>Unofficial Libx presentation of the fixed LZ4 1.10.0 English original. Formatting and link mapping: 2026-10-05. Original commit: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>; SHA-256: <code>1ec3f0dd6c6644bc3938fb52bc6caf29be557610f61ea60590c05d1bc02dd30c</code>. <a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/contrib/djgpp/README.MD\">Fixed upstream source</a>; <a href=\"/docs/lz4/source/v1-10-0/originals/contrib/djgpp/README.MD.txt\">Unmodified original and its notices</a>; <a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">Complete fixed upstream archive</a>; <a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">Upstream license allocation notice</a>. Original copyright, permission, and warranty notices are retained. Japanese translations are unofficial.</p><p>Under Libx’s operating policy, where no documentation-specific license statement was found, the software license identified for this material is applied to this documentation. Applicable terms: BSD-2-Clause. This is an operational decision, not a newly obtained permission.</p><p>Presentation changes: original Markdown unchanged except mapped local destinations. No technical prose has been silently corrected or summarized.</p>"
---

# lz4 for DOS/djgpp
This file details on how to compile lz4.exe, and liblz4.a for use on DOS/djgpp using
Andrew Wu's build-djgpp cross compilers ([GH][0], [Binaries][1]) on OSX, Linux.

## Setup
* Download a djgpp tarball [binaries][1] for your platform.  
* Extract and install it (`tar jxvf djgpp-linux64-gcc492.tar.bz2`).  Note the path.  We'll assume `/home/user/djgpp`.
* Add the `bin` folder to your `PATH`.  In bash, do `export PATH=/home/user/djgpp/bin:$PATH`.
* The `Makefile` in `contrib/djgpp/` sets up `CC`, `AR`, `LD` for you.  So, `CC=i586-pc-msdosdjgpp-gcc`, `AR=i586-pc-msdosdjgpp-ar`, `LD=i586-pc-msdosdjgpp-gcc`.

## Building LZ4 for DOS
In the base dir of lz4 and with `contrib/djgpp/Makefile`, try:
Try:
* `make -f contrib/djgpp/Makefile`
* `make -f contrib/djgpp/Makefile liblz4.a`
* `make -f contrib/djgpp/Makefile lz4.exe`
* `make -f contrib/djgpp/Makefile DESTDIR=/home/user/dos install`, however it doesn't make much sense on a \*nix.
* You can also do `make -f contrib/djgpp/Makefile uninstall`

[0]: https://github.com/andrewwutw/build-djgpp
[1]: https://github.com/andrewwutw/build-djgpp/releases
