---
title: "LZ4 trial: INSTALL"
licenseSource: "lz4-trial-01-install"
documentContext:
  - kind: source
    html: "<p>隔離候補変換試験。正式定本・翻訳・内容レビュー・通知配布の完了ではありません。文書専用ライセンスの表記が確認できないため、ソフトウェア本体のGPL-2.0-or-laterを文書にも適用する運用判断で掲載しています。</p>"
---

<pre>Installation
=============

```
make
make install     # this command may require root access
```

LZ4&#x27;s `Makefile` supports standard [Makefile conventions],
including [staged installs], [redirection], or [command redefinition].
It is compatible with parallel builds (`-j#`).

[Makefile conventions]: https://www.gnu.org/prep/standards/html_node/Makefile-Conventions.html
[staged installs]: https://www.gnu.org/prep/standards/html_node/DESTDIR.html
[redirection]: https://www.gnu.org/prep/standards/html_node/Directory-Variables.html
[command redefinition]: https://www.gnu.org/prep/standards/html_node/Utilities-in-Makefiles.html
</pre>