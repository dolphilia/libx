---
title: "概要"
description: "pugixml 1.16 公式マニュアルの概要章全文。"
licenseSource: "pugixml-manual-1.16"
---

<div class="sect1">

<span id="source-overview"></span>

## <a href="#source-overview" class="anchor"></a><a href="#source-overview" class="link">1. 概要</a>

<div class="sectionbody">

<div class="sect2">

<span id="source-overview.introduction"></span>

### <a href="#source-overview.introduction" class="anchor"></a><a href="#source-overview.introduction" class="link">1.1. はじめに</a>

<div class="paragraph">

[pugixml](https://pugixml.org/) は、軽量な C++ 用 XML 処理ライブラリです。豊富な走査・変更機能を備えた DOM 風のインターフェース、XML ファイルやバッファーから DOM ツリーを構築する非常に高速な XML パーサー、そしてデータに基づく複雑なツリー問い合わせのための [XPath 1.0 実装](/docs/pugixml/v1-16/ja/02-manual/08-xpath/#source-xpath) で構成されています。Unicode も完全にサポートしており、[2 種類の Unicode インターフェース](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-dom.unicode) と、異なる Unicode エンコーディング間の変換を利用できます。この変換は、解析・保存時に自動で行われます。[移植性が非常に高く](/docs/pugixml/v1-16/ja/02-manual/02-installation/#source-install.portability)、組み込みも利用も容易なライブラリです。pugixml は 2006 年から開発・保守されており、多くの利用者がいます。すべてのコードが [MIT ライセンス](#source-overview.license) で配布されているため、オープンソースのアプリケーションでもプロプライエタリなアプリケーションでも、完全に自由に利用できます。

</div>

<div class="paragraph">

pugixml を使うと、XML 文書を非常に高速かつ便利に、メモリーを効率よく使って処理できます。ただし、pugixml は DOM パーサーを備えているため、メモリーに収まらない XML 文書は処理できません。また、パーサーは妥当性検証を行わないので、DTD や XML Schema による検証が必要な場合、このライブラリは適していません。

</div>

<div class="paragraph">

これは pugixml の完全なマニュアルで、ライブラリのすべての機能を詳しく説明しています。できるだけ早くコードを書き始めたい場合は、[まずクイックスタートガイドを読む](/docs/pugixml/v1-16/ja/01-overview/01-quick-start/)ことをお勧めします。

</div>

<div class="admonitionblock note">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td class="icon"><div class="title">
注記
</div></td>
<td class="content">完璧な文書はなく、この文書も例外ではありません。誤りや抜けを見つけた場合は、遠慮なく、修正内容を添えて <a href="https://github.com/zeux/pugixml/issues/new">Issue を投稿するかプルリクエストを作成</a>してください。</td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<span id="source-overview.feedback"></span>

### <a href="#source-overview.feedback" class="anchor"></a><a href="#source-overview.feedback" class="link">1.2. フィードバック</a>

<div class="paragraph">

pugixml のバグを見つけたと思う場合は、[Issue 投稿フォーム](https://github.com/zeux/pugixml/issues/new)から報告してください。バグには、コンパイル時の問題（エラーや警告）、クラッシュ、性能低下、誤った動作が含まれます。再現できるよう、pugixml のバージョン、コンパイラーのバージョンと対象アーキテクチャー、pugixml を使ってバグを引き起こすコードなど、関係する情報を必ず添えてください。

</div>

<div class="paragraph">

機能の要望もバグと同じ方法で報告できます。pugixml に足りない機能がある場合や、API に使いにくい箇所があり改善案を提案できる場合は、[Issue を投稿](https://github.com/zeux/pugixml/issues/new)してください。ただし、API の変更には、旧バージョンとの互換性や API の重複など、多くの考慮事項があります。そのため、pugixml を変更せず小さな関数で実装できる機能は、一般には採用されません。もっとも、どの規則にも例外はあります。

</div>

<div class="paragraph">

何らかのビルドシステムや IDE 用のビルドスクリプト、よく設計されたヘルパー関数群、C++ 以外の言語向けのバインディングなど、pugixml への貢献がある場合は、[Issue を投稿するかプルリクエストを作成](https://github.com/zeux/pugixml/issues/new)してください。貢献する成果物は、pugixml のライセンスと互換性のあるライセンス条件で配布する必要があります。つまり、GPL/LGPL ライセンスのコードは受け付けられません。

</div>

<div class="paragraph">

<span id="source-email"></span>

プライバシーなどの事情で Issue を投稿できない場合は、pugixml の作者へ直接メールで連絡できます：<arseny.kapoulkine@gmail.com>。

</div>

</div>

<div class="sect2">

<span id="source-overview.thanks"></span>

### <a href="#source-overview.thanks" class="anchor"></a><a href="#source-overview.thanks" class="link">1.3. 謝辞</a>

<div class="paragraph">

pugixml は多くの方々の助けなしには開発できませんでした。この節では、そのうちの何人かを紹介します。pugixml の開発に関わったのに、この一覧にお名前がない方には、心よりおわびします。修正できるよう、[メールでお知らせ](#source-email)ください。

</div>

<div class="paragraph">

pugixml の基礎となった pugxml パーサーを作成した **Kristen Wegner** に感謝します。

</div>

<div class="paragraph">

pugxml パーサーへの貢献に対して、**Neville Franks** に感謝します。

</div>

<div class="paragraph">

遅延ギャップ縮小方式を提案した **Artyom Palvelev** に感謝します。

</div>

<div class="paragraph">

文書の校正とファズテストを行った **Vyacheslav Egorov** に感謝します。

</div>

</div>

<div class="sect2">

<span id="source-overview.license"></span>

### <a href="#source-overview.license" class="anchor"></a><a href="#source-overview.license" class="link">1.4. ライセンス</a>

<div class="paragraph">

pugixml ライブラリは、MIT ライセンスで配布されています。

</div>

<div class="literalblock">

<div class="content">

    Copyright (c) 2006-2026 Arseny Kapoulkine

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

</div>

</div>

<div class="paragraph">

これは、オープンソースかプロプライエタリかを問わず、アプリケーションで pugixml を自由に使えるということです。製品で pugixml を使用する場合は、次のような謝辞を製品の配布物へ追加すれば十分です。

</div>

<div class="literalblock">

<div class="content">

    This software is based on pugixml library (https://pugixml.org).
    pugixml is Copyright (C) 2006-2026 Arseny Kapoulkine.

</div>

</div>

</div>

</div>

</div>
