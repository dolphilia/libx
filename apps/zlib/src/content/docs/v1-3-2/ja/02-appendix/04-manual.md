---
title: "zlibマニュアルページ"
licenseSource: zlib-manual
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>固定したzlib 1.3.2のzlib.3全文を整形した英語定本からの非公式な日本語訳です。原資料：zlib.3。<a href=\"https://zlib.net/zlib-1.3.2.tar.gz\">公式配布物</a>のSHA-256：<code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>。原資料のSHA-256：<code>5eebcb61a9c1ef91ff6c8e6d37b32554f5eefff825b190b1b5e5982f35d87534</code>。原通知は下記に改変せず併記しています。この整形版と翻訳は非公式です。</p><p><a href=\"../05-license/\">ライセンス原文の全文</a>。本文の外にあるソース参照（deflate.c、zutil.c、test/example.c、test/minigzip.c、ChangeLog、contribなど）は固定した公式配布物内を参照してください。</p></aside>"}]
---


<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="0"><table class="head"><tr><td class="head-ltitle">ZLIB(3)</td><td class="head-vol">ライブラリ関数マニュアル</td><td class="head-rtitle">ZLIB(3)</td></tr></table></div><div data-zlib-block="1">
<section class="Sh">
<h1 class="Sh" id="NAME"><a class="permalink" href="#NAME">名前</a></h1>
<p class="Pp">zlib — 圧縮・展開ライブラリ</p>
</section>
<section class="Sh">
<h1 class="Sh" id="SYNOPSIS"><a class="permalink" href="#SYNOPSIS">概要</a></h1>
<p class="Pp">[詳細は<i><a href="../../01-api/01-overview/">zlib.h</a></i>を参照してください]</p>
</section>
<section class="Sh">
<h1 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">説明</a></h1>
<p class="Pp"><i>zlib</i>は汎用データ圧縮ライブラリです。メモリ確保ルーチンなど、使用する標準ライブラリの関数がスレッドセーフであるという前提で、コードもスレッドセーフです。非圧縮データの整合性検査を含む、メモリ上の圧縮・展開関数を提供します。この版では圧縮方式は1つ（deflation）だけですが、同じストリームインターフェイスで別のアルゴリズムを後から追加する可能性があります。</p>
<p class="Pp">バッファーが十分大きければ1回で圧縮でき、圧縮関数を繰り返し呼び出す方法も使えます。後者では各呼び出しの前に、アプリケーションが入力を追加するか、出力を消費して出力領域を増やすか、両方を行わなければなりません。</p>
<p class="Pp">stdioに似たインターフェイスで、<i>gzip</i>(1)（.gz）形式のファイルの読み書きにも対応します。</p>
<p class="Pp">ライブラリはシグナルハンドラーを設置しません。デコーダーは圧縮データの整合性を検査するため、入力が破損していてもライブラリがクラッシュすることはないはずです。</p>
<p class="Pp">圧縮ライブラリの全関数は<i><a href="../../01-api/01-overview/">zlib.h</a></i>で文書化しています。配布ソースの<i>test/example.c</i>と<i>test/minigzip.c</i>に使用例があり、<i>examples/</i>にも別の例があります。</p>
<p class="Pp">この版の変更は、ソースに付属する<i>ChangeLog</i>に記載しています。</p>
<p class="Pp"><i>zlib</i>は、Java、Python、.NET、PHP、Perl、Ruby、Swift、Goなど、多くの言語やOSに組み込まれています。この一覧に限りません。</p>
<p class="Pp">Gilles Vollant（info@winimage.com）が<i>zlib</i>を使って作成した、.zip形式のファイルを読み書きする実験的パッケージは、次の場所にあります：</p>
<dl class="Bl-tag">
  <dt></dt>
  <dd><a href="https://www.winimage.com/zLibDll/minizip.html">https://www.winimage.com/zLibDll/minizip.html</a>。<i>zlib</i>本体のソース配布物の<i>contrib/minizip</i>にもあります。</dd>
</dl>
</section>
<section class="Sh">
<h1 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">関連項目</a></h1>
<p class="Pp"><i>zlib</i>のウェブサイト：</p>
<dl class="Bl-tag">
  <dt></dt>
  <dd><a href="https://zlib.net/">https://zlib.net/</a></dd>
</dl>
<p class="Pp"><i>zlib</i>が使用するデータ形式は、RFC（Request for Comments）1950〜1952で説明しています：</p>
<dl class="Bl-tag">
  <dt></dt>
  <dd><a href="https://datatracker.ietf.org/doc/html/rfc1950">https://datatracker.ietf.org/doc/html/rfc1950</a> （zlibヘッダーとトレーラーの形式）
    <br/>
    <a href="https://datatracker.ietf.org/doc/html/rfc1951">https://datatracker.ietf.org/doc/html/rfc1951</a> （deflate圧縮データの形式）
    <br/>
    <a href="https://datatracker.ietf.org/doc/html/rfc1952">https://datatracker.ietf.org/doc/html/rfc1952</a> （gzipヘッダーとトレーラーの形式）</dd>
</dl>
<p class="Pp">Mark NelsonはDr. Dobb's Journalの1997年1月号に<i>zlib</i>の記事を書きました。記事のコピーは次の場所にあります：</p>
<dl class="Bl-tag">
  <dt></dt>
  <dd><a href="https://zlib.net/nelson/">https://zlib.net/nelson/</a></dd>
</dl>
</section>
<section class="Sh">
<h1 class="Sh" id="REPORTING_PROBLEMS"><a class="permalink" href="#REPORTING_PROBLEMS">問題の報告</a></h1>
<p class="Pp">問題を報告する前に、<i>zlib</i>のウェブサイトで最新版を使用しているか確認してください。そうでなければ最新版を取得し、問題がまだ発生するか確認してください。<i>zlib</i> FAQも読んでください：</p>
<dl class="Bl-tag">
  <dt></dt>
  <dd><a href="https://zlib.net/zlib_faq.html">https://zlib.net/zlib_faq.html</a></dd>
</dl>
<p class="Pp">助けを求める前に上記FAQを読んでください。質問やコメントはzlib@gzip.orgへ、Windows DLL版についてはGilles Vollant（info@winimage.com）へ送ってください。</p>
</section>
<section class="Sh">
<h1 class="Sh" id="AUTHORS_AND_LICENSE"><a class="permalink" href="#AUTHORS_AND_LICENSE">著作者とライセンス</a></h1>
<p class="Pp">版1.3.2</p>
<p class="Pp">Copyright (C) 1995-2026 Jean-loup Gailly and Mark Adler</p>
<p class="Pp">このソフトウェアは「現状のまま」で提供され、明示・黙示を問わずいかなる保証もありません。このソフトウェアの使用によって生じるいかなる損害についても、著作者は責任を負いません。</p>
<p class="Pp">以下の制限に従うことを条件に、商用アプリケーションを含むあらゆる目的でこのソフトウェアを使用し、自由に改変・再配布する許可を、すべての人に与えます。</p>
<dl class="Bl-tag">
  <dt>1.</dt>
  <dd>このソフトウェアの出所を偽ってはいけません。元のソフトウェアを自分が作成したと主張してはいけません。製品で使用する場合、その製品の文書で謝辞を示していただければ幸いですが、必須ではありません。</dd>
  <dt>2.</dt>
  <dd>改変したソース版には、改変したものであると明確に表示しなければなりません。元のソフトウェアであるかのように偽ってはいけません。</dd>
  <dt>3.</dt>
  <dd>ソースを配布する際、この通知を削除したり改変したりしてはいけません。</dd>
</dl>
<p class="Pp">Jean-loup Gailly Mark Adler
  <br/>
  jloup@gzip.org madler@alumni.caltech.edu</p>
<p class="Pp"><i>zlib</i>が使うdeflate形式はPhil Katzが定義しました。deflateと<i>zlib</i>の仕様はL. Peter Deutschが作成しました。問題を報告し、さまざまな改善を提案してくださったすべての方に感謝します。人数が多く、ここで全員を挙げることはできません。</p>
<p class="Pp">UNIXマニュアルページの作成者は、米国国立医学図書館のR. P. C. Rodgers（rodgers@nlm.nih.gov）です。</p>
</section></div><div data-zlib-block="2"><table class="foot"><tr><td class="foot-date">17 Feb 2026</td><td class="foot-os"></td></tr></table></div></div>

<aside data-editorial="original-notice"><details><summary>改変していない英語原通知（元のroff形式）</summary><pre style="white-space:pre-wrap;overflow-wrap:anywhere">.SH AUTHORS AND LICENSE
Version 1.3.2
.LP
Copyright (C) 1995-2026 Jean-loup Gailly and Mark Adler
.LP
This software is provided 'as-is', without any express or implied
warranty.  In no event will the authors be held liable for any damages
arising from the use of this software.
.LP
Permission is granted to anyone to use this software for any purpose,
including commercial applications, and to alter it and redistribute it
freely, subject to the following restrictions:
.LP
.nr step 1 1
.IP \n[step]. 3
The origin of this software must not be misrepresented; you must not
claim that you wrote the original software. If you use this software
in a product, an acknowledgment in the product documentation would be
appreciated but is not required.
.IP \n+[step].
Altered source versions must be plainly marked as such, and must not be
misrepresented as being the original software.
.IP \n+[step].
This notice may not be removed or altered from any source distribution.
.LP
Jean-loup Gailly        Mark Adler
.br
jloup@gzip.org          madler@alumni.caltech.edu
</pre></details></aside>
