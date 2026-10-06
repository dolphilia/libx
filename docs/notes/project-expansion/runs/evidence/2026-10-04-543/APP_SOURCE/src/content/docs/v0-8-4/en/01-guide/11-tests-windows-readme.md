---
title: "tests/windows/README.md"
licenseSource: "xxhash-library"
---

Windows test scripts
====================

This directory contains test scripts for Windows.


Prerequisites
-------------

- Windows 10, version 1703 or later
- Visual C++
- git
- cmake


How to use
----------

```bat
cmd.exe
cd /d "%PUBLIC%"
git clone https://github.com/Cyan4973/xxHash
cd xxHash
.\tests\windows\00-test-all.bat
```


Failure diagnostics
-------------------

The test scripts prefix commands with `!__!` to track their source line.
For example, `Error = 23` means that the command on line 23 failed.


## Source and notices

No documentation-specific license statement was found in the recorded checks. Under the user-approved operating policy, the software component’s BSD-2-Clause license is applied to this documentation with this annotation. This is an operational decision, not a newly obtained permission.

Fixed software version: **0.8.4**. Source commit: `c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0`. This is an unofficial presentation; formatting, internal links and clearly marked editorial notes are Libx changes. The Japanese translation is provided separately when completed.

[library-root](/docs/xxhash/v0-8-4/en/03-notices/library-root/)

[Fixed original source](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/tests/windows/README.md) · [Original text download](/docs/xxhash/source/v0-8-4/tests/windows/README.md.txt)

