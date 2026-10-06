---
title: "tests/windows/README.md"
licenseSource: "xxhash-library"
documentContext: [{"kind":"source","html":"<h2 id=\"source-and-notices\">Source and notices</h2>\n<p>No documentation-specific license statement was found in the recorded checks. Under Libx’s operating policy, the software component’s BSD-2-Clause license is applied to this documentation with this annotation. This is an operational decision, not a newly obtained permission.</p>\n<p>Fixed software version: <strong>0.8.4</strong>. Source commit: <code>c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0</code>. This is an unofficial presentation; formatting, internal links and clearly marked editorial notes are Libx changes. The Japanese translation is provided separately when completed.</p>\n<p><a href=\"/docs/xxhash/v0-8-4/en/03-notices/library-root/\">library-root</a></p>\n<p><a href=\"https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/tests/windows/README.md\">Fixed original source</a> · <a href=\"/docs/xxhash/source/v0-8-4/tests/windows/README.md.txt\">Original text download</a></p>"}]
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


