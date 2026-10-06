---
title: "uthashユーザーガイド"
description: "uthash 2.4.0公式ユーザーガイドの全文日本語訳"
sourceURL: "https://github.com/troydhanson/uthash/blob/a49bed0b4abb7dff16c73906dcdc8a9718d582d2/doc/userguide.txt"
licenseSource: "uthash-userguide-2.4.0"
upstreamAuthors: ["Troy D. Hanson <tdh@tkhanson.net>","Arthur O'Dwyer <arthur.j.odwyer@gmail.com>"]
upstreamVersionHeader: "v2.4.0, June 2026"
---

<div id="preamble">

<div class="sectionbody">

<div class="paragraph">

v2.4.0, June 2026

</div>

<div class="paragraph">

uthashをダウンロードするには、[GitHubのプロジェクトページ](https://github.com/troydhanson/uthash)に戻ってください。著者の[他のプロジェクト](https://troydhanson.github.io/)に戻ることもできます。

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_a_hash_in_c-->

## Cで使うハッシュ

<div class="sectionbody">

<div class="paragraph">

この文書はCプログラマー向けに書かれています。この文書を読んでいる方なら、ハッシュがキーを使って要素を検索するためのものだとご存じでしょう。スクリプト言語では、ハッシュや「辞書」が日常的に使われます。Cには、言語自体にハッシュがありません。このソフトウェアは、Cの構造体を扱うハッシュテーブルを提供します。

</div>

<div class="sect2">

<!--libx-source-heading:_what_can_it_do-->

### 何ができますか？

<div class="paragraph">

このソフトウェアは、ハッシュテーブルの要素に対する次の操作をサポートします。

</div>

<div class="olist arabic">

1.  追加／置換

2.  検索

3.  削除

4.  要素数の取得

5.  反復処理

6.  ソート

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_is_it_fast-->

### 高速ですか？

<div class="paragraph">

追加・検索・削除は、通常、定数時間の操作です。これは、使用するキーの範囲とハッシュ関数の影響を受けます。

</div>

<div class="paragraph">

このハッシュは、最小限の構成と効率を目指しています。Cで約1000行です。マクロで実装されているため、自動的にインライン展開されます。ハッシュ関数がキーに適していれば高速です。既定のハッシュ関数を使うことも、性能を簡単に比較して他の複数の[組み込みハッシュ関数](#hash_functions)から選ぶこともできます。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_is_it_a_library-->

### ライブラリーですか？

<div class="paragraph">

いいえ、`uthash.h` という単一のヘッダーファイルだけです。ヘッダーファイルをプロジェクトにコピーし、次のように記述するだけで使えます。

</div>

<div class="literalblock">

<div class="content">

    #include "uthash.h"

</div>

</div>

<div class="paragraph">

uthashはヘッダーファイルだけで構成されるため、リンクするライブラリーのコードはありません。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_c_c_and_platforms-->

### C/C++とプラットフォーム

<div class="paragraph">

このソフトウェアは、CとC++のプログラムで使用できます。次の環境でテストされています。

</div>

<div class="ulist">

- Linux

- Visual Studio 2008および2010を使用するWindows

- Solaris

- OpenBSD

- FreeBSD

- Android

</div>

<div class="sect3">

<!--libx-source-heading:_test_suite-->

#### テストスイート

<div class="paragraph">

テストスイートを実行するには、`tests` ディレクトリに移動し、次の操作を行います。

</div>

<div class="ulist">

- Unixプラットフォームでは、`make` を実行します。

- Windowsでは、"do_tests_win32.cmd" バッチファイルを実行します（Visual Studioを標準以外の場所にインストールしている場合は、バッチファイルを編集できます）。

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_bsd_licensed-->

### BSDライセンス

<div class="paragraph">

このソフトウェアは、[修正版BSDライセンス](/docs/uthash/v2-4-0/ja/02-license/01-license/)で提供されています。無料で、オープンソースです。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_download_uthash-->

### uthashのダウンロード

<div class="paragraph">

<https://github.com/troydhanson/uthash>のリンクから、uthashをクローンするかzipファイルを取得してください。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_getting_help-->

### 質問するには

<div class="paragraph">

質問には[uthashのGoogleグループ](https://groups.google.com/d/forum/uthash)をご利用ください。<uthash@googlegroups.com>にメールを送ることもできます。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_contributing-->

### 貢献するには

<div class="paragraph">

GitHubを通じてプルリクエストを送ることができます。ただし、uthashのメンテナーは、装飾的な機能を追加するよりも、変更せずに保つことを重視しています。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_extras_included-->

### 同梱されている追加機能

<div class="paragraph">

uthashには3つの「追加機能」が同梱されています。リスト、動的配列、文字列を提供します。

</div>

<div class="ulist">

- [utlist.h](/docs/uthash/v2-4-0/ja/01-guides/02-utlist/)は、Cの構造体を扱う連結リストのマクロを提供します。

- [utarray.h](/docs/uthash/v2-4-0/ja/01-guides/03-utarray/)は、マクロを使って動的配列を実装します。

- [utstring.h](/docs/uthash/v2-4-0/ja/01-guides/06-utstring/)は、基本的な動的文字列を実装します。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_history-->

### 歴史

<div class="paragraph">

私は、自分の用途のために2004-2006年にuthashを書きました。当初はSourceForgeで公開していました。uthashは2006-2013年に約30,000回ダウンロードされ、その後GitHubへ移りました。商用ソフトウェア、学術研究、他のオープンソースソフトウェアに組み込まれています。また、複数のUnix系ディストリビューションの標準パッケージリポジトリにも追加されています。

</div>

<div class="paragraph">

uthashが書かれた当時、Cで汎用ハッシュテーブルを実現する選択肢は、現在よりも少数でした。現在は、より高速なハッシュテーブルや、メモリー効率が高く、APIも大きく異なるハッシュテーブルがあります。それでも、ミニバンを運転するのと同じように、uthashは便利で、多くの用途で必要な仕事をこなします。

</div>

<div class="paragraph">

2016年7月から、uthashはArthur O’Dwyerによって保守されています。

</div>

</div>

</div>

</div>
