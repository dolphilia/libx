---
title: "tests/windows/README.md"
licenseSource: "xxhash-fixed"
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


> 文書専用ライセンスの表記が確認できないため、ソフトウェア本体のBSD-2-Clauseを文書にも適用する運用判断で掲載しています。原文英語の非公式形式変換・形式変換。


## Source and notices

[library-root](/docs/xxhash-trial/v0-8-4/en/03-notices/library-root/)

[Fixed source](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/tests/windows/README.md)

[Original text download](/docs/xxhash-trial/source/v0-8-4/tests/windows/README.md.txt)
