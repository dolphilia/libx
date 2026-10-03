---
title: "tests/windows/README.md"
licenseSource: "xxhash-library"
---

Windows用テストスクリプト
====================

このディレクトリには、Windows用のテストスクリプトが含まれています。

前提条件
-------------

- Windows 10、バージョン1703以降
- Visual C++
- git
- cmake

使い方
----------

```bat
cmd.exe
cd /d "%PUBLIC%"
git clone https://github.com/Cyan4973/xxHash
cd xxHash
.\tests\windows\00-test-all.bat
```

失敗の診断
-------------------

テストスクリプトは、元の行を追跡するため、コマンドの先頭に`!__!`を付けます。
たとえば、`Error = 23`は、23行目のコマンドが失敗したことを意味します。

## 出典と通知

記録した確認では、文書専用のライセンス表記は見つかりませんでした。ユーザー承認済みの運用方針に基づき、この注記とともにソフトウェアコンポーネントのBSD-2-Clauseライセンスを文書に適用します。これは運用上の判断であり、新たに許可を得たことを意味しません。

固定したソフトウェアのバージョン：**0.8.4**。ソースコミット：`c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0`。非公式の日本語訳です。書式、内部リンク、および明示した編集注記はLibxによる変更です。

[library-root](/docs/xxhash/v0-8-4/ja/03-notices/library-root/)

[固定した原典](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/tests/windows/README.md) · [原文のダウンロード](/docs/xxhash/source/v0-8-4/tests/windows/README.md.txt)
