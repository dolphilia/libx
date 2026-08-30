---
title: "xen0l/awesome-dtrace"
description: "xen0l/awesome-dtrace の正規スナップショット"
licenseSource: "github-xen0l-awesome-dtrace-readme-md"
---

# Awesome DTrace [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

DTrace の優れた書籍、記事、動画、ツール、リソースを集めたリストです。

## 目次

- [学習](#learn)
- [記事](#articles)
- [動画](#videos)
- [ソフトウェア](#software)
- [ツール](#tools)
- [コミュニティ](#community)
- [コントリビューション](#contributing)

- - -

## 学習

DTrace を学ぶためのおすすめ資料です。

### 書籍

- [Dynamic Tracing Guide](http://dtrace.org/guide/preface.html) - Illumos.org の DTrace ガイドです。
- [DTrace：Oracle Solaris、Mac OS X、FreeBSD の動的トレーシング](http://www.dtracebook.com/index.php/Main_Page) - DTrace の公式書籍です。
- [DTrace と SystemTap による動的トレーシング](http://myaut.github.io/dtrace-stap-book/) - DTrace と SystemTap の両方を紹介する書籍です。

### その他

- [dtrace(1m) man ページ](https://illumos.org/man/1m/dtrace) - DTrace のマニュアルページです。
- [DTrace 早見表](http://www.brendangregg.com/DTrace/DTrace-cheatsheet.pdf) - Brendan Gregg による DTrace 早見表です。
- [DTrace ワンライナー](http://www.brendangregg.com/DTrace/dtrace_oneliners.txt) - 便利な DTrace ワンライナーコマンドです。
- [DTrace ワンライナー（FreeBSD）](https://wiki.freebsd.org/DTrace/One-Liners) - FreeBSD の DTrace ワンライナーです。
- [DTrace QuickStart](http://www.tablespace.net/quicksheet/dtrace-quickstart.html) - DTrace のクイックスタートガイドです。
- [DTrace 利用事例](https://github.com/NanXiao/using-dtrace-stories) - DTrace を使ったシステムデバッグ事例集です。
- [高度な DTrace のヒント、コツ、注意点](http://dtrace.org/resources/bmc/dtrace_tips.pdf) - DTrace を使うための高度なヒント集です。

## 記事

DTrace と実際のユースケースに関する興味深い記事です。

### PID Provider

- [pid provider：entry probe](http://dtrace.org/blogs/brendan/2011/02/09/dtrace-pid-provider/) - DTrace PID Provider について。
- [pid provider：entry arguments](http://dtrace.org/blogs/brendan/2011/02/11/dtrace-pid-provider-arguments/) - DTrace PID Provider の引数について。
- [pid provider：return](http://dtrace.org/blogs/brendan/2011/02/14/dtrace-pid-provider-return/) - DTrace PID Provider の return について。
- [pid provider：instructions](http://dtrace.org/blogs/brendan/2011/02/16/dtrace-pid-provider-instructions/) - DTrace PID Provider の命令について。
- [pid provider：overhead](http://dtrace.org/blogs/brendan/2011/02/18/dtrace-pid-provider-overhead/) - DTrace PID Provider のオーバーヘッドについて。
- [pid provider の内幕](http://dtrace.org/blogs/ahl/2005/03/01/pid-provider-exposed/) - Adam Leventhal による PID Provider の内部構造です。
- [魔法が衝突するとき](http://dtrace.org/blogs/bmc/2011/03/09/when-magic-collides/) - Bryan Cantrill による PID Provider のバグの詳細分析です。

### USDT Provider

- [DTrace ustack helper を理解する](http://dtrace.org/blogs/dap/2013/11/20/understanding-dtrace-ustack-helpers/) - DTrace ustack helper について。
- [USDT Provider 再考](http://dtrace.org/blogs/dap/2011/12/13/usdt-providers-redux/) - 独自アプリケーションで USDT Provider を構築するためのリファレンスです。

### Sysevent Provider

- [DTrace sysevent provider](https://blogs.oracle.com/eschrock/entry/dtrace_sysevent_provider) - DTrace 用 Solaris／illumos sysevent provider です。

### Ruby と DTrace

- [DTrace で Ruby の mutex 競合を測定する](https://vaneyckt.io/posts/using_dtrace_to_measure_mutex_contention_in_ruby/) - Ruby の mutex 競合を測定します。

### 可視化手法

- [フレームグラフ](http://www.brendangregg.com/flamegraphs.html) - プロファイリングしたソフトウェアを可視化し、最も頻繁なコードパスを迅速かつ正確に特定できます。
- [ヒートマップ](http://brendangregg.com/heatmaps.html) - 天気レーダー図のように色を1つの次元として使い、3次元のデータを可視化できます。

## 動画

DTrace に関する興味深い動画です。

- [DTrace レビュー](https://www.youtube.com/watch?v=TgmA48fILq8) - Bryan Cantrill が、DTrace によって開発環境と稼働中システム双方のデバッグを大幅に改善する方法を解説します。

### dtrace.conf

- [dtrace.conf 2008](https://youtu.be/RvyP61WeFdM?list=PL8516982CBF9FADCC)
    - [NFSv3 と iSCSI Provider](https://www.youtube.com/watch?v=sgBCz7bXkSo&index=4&list=PL8516982CBF9FADCC)
    - [ハードウェア向け DTrace](https://www.youtube.com/watch?v=1Bc2Dz8aS6s&list=PL8516982CBF9FADCC&index=5)
    - [Zone と DTrace](https://www.youtube.com/watch?v=D8_onK0pSvA&index=8&list=PL8516982CBF9FADCC)
    - [Solaris ビルドを DTrace する](https://www.youtube.com/watch?v=e55iXXYj-74&index=10&list=PL8516982CBF9FADCC)
    - [実戦事例](https://www.youtube.com/watch?v=yR39YqVXQOM&index=11&list=PL8516982CBF9FADCC)
    - [Sun ベンチマーク](https://www.youtube.com/watch?v=uK0DjEXo99w&list=PL8516982CBF9FADCC&index=12)
    - [Erlang](https://www.youtube.com/watch?v=PXIGE5GFAkE&index=13&list=PL8516982CBF9FADCC)
    - [Erlang（続編）](https://www.youtube.com/watch?v=YTNiCv9Za2Y&index=14&list=PL8516982CBF9FADCC)
    - [Adobe AIR を計測する](https://www.youtube.com/watch?v=4astU1_X5xM&index=15&list=PL8516982CBF9FADCC)
    - [HotSpot Runtime と Java](https://www.youtube.com/watch?v=8kdJDHqiByI&list=PL8516982CBF9FADCC&index=16)
    - [PostgreSQL：Solaris で内部を見る](https://www.youtube.com/watch?v=p5NKcxDny_4&list=PL8516982CBF9FADCC&index=17)
    - [PostgreSQL Provider](https://www.youtube.com/watch?v=SJykRURWgeU&list=PL8516982CBF9FADCC&index=18)
    - [分散 DTrace](https://www.youtube.com/watch?v=oYK1kgFwxk4&index=19&list=PL8516982CBF9FADCC)
    - [Apple による DTrace 移植](https://www.youtube.com/watch?v=OKSuox4eFrk&list=PL8516982CBF9FADCC&index=21)

- [dtrace.conf 2012](https://www.youtube.com/watch?v=l_7v7Fn7uMQ&list=PL973D48F273EB0360)
    - [DTrace の現状](https://www.youtube.com/watch?v=l_7v7Fn7uMQ&list=PL973D48F273EB0360)
    - [ユーザーレベル CTF](https://www.youtube.com/watch?v=0QF04ivO_WE&list=PL973D48F273EB0360&index=3)
    - [動的 Translator](https://www.youtube.com/watch?v=CqLcj0lVnp4&index=4&list=PL973D48F273EB0360)
    - [DTrace 用 Clang Parser](https://www.youtube.com/watch?v=6NqV_Uj8Ba4&index=7&list=PL973D48F273EB0360)
    - [可視化](https://www.youtube.com/watch?v=XD5hdaWnQM4&index=8&list=PL973D48F273EB0360)
    - [可視化、シームレスな USDT を実現するツールチェーン](https://www.youtube.com/watch?v=3Sqa8mmtnMM&index=9&list=PL973D48F273EB0360)
    - [さらなる可視化](https://www.youtube.com/watch?v=-B6u6wY3Iro&index=10&list=PL973D48F273EB0360)
    - [Node.js の DTrace](https://www.youtube.com/watch?v=0ZMvSh7lUdM&list=PL973D48F273EB0360&index=11)
    - [DTrace と Erlang](https://www.youtube.com/watch?v=4Si-7nAic2c&list=PL973D48F273EB0360&index=12)
    - [Linux の DTrace](https://www.youtube.com/watch?v=NElog3MvUC8&list=PL973D48F273EB0360&index=13)
    - [ZFS Provider](https://www.youtube.com/watch?v=m_V7yrrn49Y&index=14&list=PL973D48F273EB0360)
    - [FreeBSD の DTrace](https://www.youtube.com/watch?v=s5PpSiPfSNI&index=15&list=PL973D48F273EB0360)
    - [DTrace 普及の障壁](https://www.youtube.com/watch?v=P95LHZ-WOWw&index=16&list=PL973D48F273EB0360)

- [dtrace.conf 2016](https://www.joyent.com/about/events/2016/dtrace-conf)
    - [はじめに](https://player.vimeo.com/video/173346406)
    - [（役立つ！）DTrace 入門](https://player.vimeo.com/video/173346405)
    - [あらゆる場所に CTF！](https://player.vimeo.com/video/173346404)
    - [分散 DTrace](https://player.vimeo.com/video/173346403)
    - [アプリを DTrace する](https://player.vimeo.com/video/173346402)
    - [DTrace と JSON：ついに一緒に！](https://player.vimeo.com/video/173346401)
    - [DTrace probe としての ASSERT()（そして助けが必要な理由）](https://player.vimeo.com/video/173346400)
    - [FreeBSD で fds[] を実装する（またはしない）](https://player.vimeo.com/video/173346399)
    - [OpenDTrace](https://player.vimeo.com/video/173346398)
    - [常時オンの計測による DTrace 性能改善](https://player.vimeo.com/video/173300658)
    - [D 言語の改善](https://player.vimeo.com/video/173300657)
    - [D の糖衣構文](https://player.vimeo.com/video/173300656)
    - [DTrace と Go](https://player.vimeo.com/video/173300655)
    - [DTrace と Postgres](https://player.vimeo.com/video/173300654)
    - [Zone 内の DTrace](https://player.vimeo.com/video/173300653)
    - [DTrace ustack() の性能改善](https://player.vimeo.com/video/173300651)
    - [DTrace の活用](https://player.vimeo.com/video/173300650)

## ソフトウェア

DTrace 対応ソフトウェアの一覧です。

### プログラミング言語

#### Erlang

- [Erlang](http://erlang.org/doc/apps/runtime_tools/DTRACE.html) - DTrace と Erlang/OTP です。

#### Lua

- [lua-usdt](https://github.com/chrisa/lua-usdt) - Lua 用 Libusdt バインディングです。

#### Node.js

- [node-dtrace-provider](https://github.com/chrisa/node-dtrace-provider) - Node.js アプリ向けのネイティブ DTrace probe です。

#### Perl

- [perl-Devel-DTrace-Provider](https://github.com/chrisa/perl-Devel-DTrace-Provider) - libusdt の Perl ラッパーです。

#### PHP

- [PHP](https://secure.php.net/manual/en/features.dtrace.dtrace.php) - PHP と DTrace を使用します。

#### Python

- [Python](https://www.jcea.es/artic/python_dtrace.htm) - Python 2.7.x・3.x 用 DTrace パッチです。
- [python-usdt](https://github.com/nshalman/python-usdt) - Python 用 Libusdt バインディングです。

#### Ruby

- [Ruby](http://ruby-doc.org/core-2.3.1/doc/dtrace_probes_rdoc.html) - Ruby DTrace probe です。
- [ruby-usdt](https://github.com/kevinykchan/ruby-usdt) - Ruby アプリ向けのネイティブ DTrace probe です。

### データベース

- [MySQL](https://dev.mysql.com/doc/refman/5.7/en/dba-dtrace-mysqld-ref.html) - MySQL DTrace probe です。
- [PostgreSQL](https://www.postgresql.org/docs/current/static/dynamic-trace.html) - PostgreSQL DTrace probe です。

### Web サーバー

- [mod_usdt](https://github.com/davepacheco/mod_usdt) - 「httpd」DTrace provider です。

### 可視化

- [FlameGraph](https://github.com/brendangregg/FlameGraph) - スタックトレースの可視化ツールです。
- [node-stackvis](https://github.com/joyent/node-stackvis) - スタックトレースの可視化ツールです。

## ツール

- [DTraceToolkit](http://www.brendangregg.com/dtracetoolkit.html) - 文書化された便利な DTrace スクリプト集です。
- [dtrace-cloud-tools](https://github.com/brendangregg/dtrace-cloud-tools) - SmartOS／SmartDataCenter クラウド（illumos ベース）向けに書かれた DTrace ツールです。
- [pgsql tools](https://github.com/joyent/pgsqlstat) - PostgreSQL のトップレベル統計を報告します。
- [portsnoop](https://github.com/davepacheco/portsnoop) - イベントポートの動作をトレースします。
- [storage tools](https://github.com/richardelling/tools) - NFS、CIFS、iSCSI の統計を報告します。

## コミュニティ

- [コミュニティサイト](http://dtrace.org) - DTrace のコミュニティサイトです。
- [メーリングリスト](http://dtrace.org/blogs/mailing-list/) - DTrace コミュニティのメーリングリストです。
- [FreeBSD DTrace メーリングリスト](https://lists.freebsd.org/mailman/listinfo/freebsd-dtrace) - FreeBSD DTrace コミュニティのメーリングリストです。
- [China DTrace](http://chinadtrace.org/) - 中国語の DTrace サイトです。

## コントリビューション

コントリビューションを大歓迎します。まず[コントリビューションガイドライン](https://github.com/xen0l/awesome-dtrace/blob/master/CONTRIBUTING.md)をご覧ください。
