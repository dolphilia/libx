---
title: "README"
licenseSource: zlib-readme
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>固定したzlib 1.3.2のREADME全文の非公式な日本語訳です。原資料：README。<a href=\"https://zlib.net/zlib-1.3.2.tar.gz\">公式配布物</a>のSHA-256：<code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>。原資料のSHA-256：<code>4026d921213bb2e311d8d42b44ef53361c102d5d45ae32f93f8e52eaee8d068f</code>。原通知は下記に改変せず併記しています。この整形版と翻訳は非公式です。</p><p><a href=\"../05-license/\">ライセンス原文の全文</a>。本文の外にあるソース参照（deflate.c、zutil.c、test/example.c、test/minigzip.c、ChangeLog、contribなど）は固定した公式配布物内を参照してください。</p></aside>"}]
---


<div class="zlib-document" style="overflow-wrap:anywhere"><section data-zlib-block="0"><div style="white-space:pre-wrap;overflow-wrap:anywhere">ZLIBデータ圧縮ライブラリ

</div></section><section data-zlib-block="1"><div style="white-space:pre-wrap;overflow-wrap:anywhere">zlib 1.3.2は汎用データ圧縮ライブラリです。コードはすべてスレッドセーフです
（ただし注意事項はFAQを参照してください）。zlibが使用するデータ形式は、
RFC（Request for Comments）1950〜1952で説明しています。
<a href="https://datatracker.ietf.org/doc/html/rfc1950">https://datatracker.ietf.org/doc/html/rfc1950</a>がzlib形式、
rfc1951がdeflate形式、rfc1952がgzip形式です。

</div></section><section data-zlib-block="2"><div style="white-space:pre-wrap;overflow-wrap:anywhere">圧縮ライブラリの全関数は<a href="../../01-api/01-overview/">zlib.h</a>で文書化しています。
（manページを書くボランティアを歓迎します。連絡先はzlib@gzip.orgです。）
使用例はtest/example.cにあり、ライブラリが正しく動作するかの検査も行います。
別の例はtest/minigzip.cにあります。圧縮ライブラリ自体はルートディレクトリ内の
すべてのソースファイルから構成されます。

</div></section><section data-zlib-block="3"><div style="white-space:pre-wrap;overflow-wrap:anywhere">全ファイルをコンパイルしテストプログラムを実行するには、Makefile.inの冒頭の指示に
従ってください。簡単には「./configure; make test」です。成功すれば、ほとんどのUnixで
「make install」が動作するはずです。Windowsではwin32/またはcontrib/vstudio/の
専用makefileを使ってください。VMSではmake_vms.comを使ってください。

</div></section><section data-zlib-block="4"><div style="white-space:pre-wrap;overflow-wrap:anywhere">zlibへの質問は&lt;zlib@gzip.org&gt;へ、Windows DLL版についてはGilles Vollant
&lt;info@winimage.com&gt;へ送ってください。ホームページは<a href="https://zlib.net/">https://zlib.net/</a>です。
問題を報告する前に、このサイトで最新版を使用しているか確認してください。
そうでなければ最新版を取得し、問題がまだ発生するか確認してください。

</div></section><section data-zlib-block="5"><div style="white-space:pre-wrap;overflow-wrap:anywhere">助けを求める前に、必ずzlib FAQ <a href="https://zlib.net/zlib_faq.html">https://zlib.net/zlib_faq.html</a>を読んでください。

</div></section><section data-zlib-block="6"><div style="white-space:pre-wrap;overflow-wrap:anywhere">Mark Nelson &lt;markn@ieee.org&gt;はDr. Dobb's Journalの1997年1月号にzlibの記事を
書きました。記事のコピーは<a href="https://zlib.net/nelson/">https://zlib.net/nelson/</a>で読めます。

</div></section><section data-zlib-block="7"><div style="white-space:pre-wrap;overflow-wrap:anywhere">版1.3.2の変更はChangeLogに記載しています。

</div></section><section data-zlib-block="8"><div style="white-space:pre-wrap;overflow-wrap:anywhere">サポート対象外の第三者による貢献はcontrib/にあります。

</div></section><section data-zlib-block="9"><div style="white-space:pre-wrap;overflow-wrap:anywhere">Javaではjava.util.zipパッケージでzlibを使用できます。
<a href="https://docs.oracle.com/search/?q=java.util.zip">https://docs.oracle.com/search/?q=java.util.zip</a>のAPI Documentationリンクを参照してください。

</div></section><section data-zlib-block="10"><div style="white-space:pre-wrap;overflow-wrap:anywhere">Paul Marquess &lt;pmqs@cpan.org&gt;が作成したzlibとbzip2のPerlインターフェイスは
<a href="https://github.com/pmqs/IO-Compress">https://github.com/pmqs/IO-Compress</a>にあります。

</div></section><section data-zlib-block="11"><div style="white-space:pre-wrap;overflow-wrap:anywhere">A.M. Kuchling &lt;amk@amk.ca&gt;が作成したzlibのPythonインターフェイスは
Python 1.5以降で使用できます。<a href="https://docs.python.org/3/library/zlib.html">https://docs.python.org/3/library/zlib.html</a>を参照してください。

</div></section><section data-zlib-block="12"><div style="white-space:pre-wrap;overflow-wrap:anywhere">zlibはtclへ組み込まれています：<a href="https://wiki.tcl-lang.org/page/zlib">https://wiki.tcl-lang.org/page/zlib</a>。

</div></section><section data-zlib-block="13"><div style="white-space:pre-wrap;overflow-wrap:anywhere">Gilles Vollant &lt;info@winimage.com&gt;がzlibを使って作成した、.zip形式のファイルを
読み書きする実験的なパッケージは、zlibのcontrib/minizipディレクトリにあります。


</div></section><section data-zlib-block="14"><div style="white-space:pre-wrap;overflow-wrap:anywhere">一部の対象環境についての注記：

</div></section><section data-zlib-block="15"><div style="white-space:pre-wrap;overflow-wrap:anywhere">- Windows DLL版はwin32/DLL_FAQ.txtを参照してください。

</div></section><section data-zlib-block="16"><div style="white-space:pre-wrap;overflow-wrap:anywhere">- 64ビットIrixでは、deflate.cを最適化なしでコンパイルしなければなりません。
  -Oではlibpngのテストが1つ失敗します。32ビットモード（コンパイラーフラグ-n32）では
  成功します。コンパイラーのバグはSGIへ報告済みです。

</div></section><section data-zlib-block="17"><div style="white-space:pre-wrap;overflow-wrap:anywhere">- OSF/1 2.1上のDEC 3000/300LXではgcc 2.6.3でzlibは動作しません。
  ccでコンパイルすると動作します。

</div></section><section data-zlib-block="18"><div style="white-space:pre-wrap;overflow-wrap:anywhere">- AlphaServerのDigital Unix 4.0D（旧OSF/1）では、<a href="../../01-api/06-gzip/#gzprintf">gzprintf</a>を正しく動かすため
  ccの-std1オプションが必要です。configureが設定します。

</div></section><section data-zlib-block="19"><div style="white-space:pre-wrap;overflow-wrap:anywhere">- HP-UX 9.05の一部の/bin/ccではzlibは動作しません。他のコンパイラーでは動作します。
  「make test」でコンパイラーを検査してください。

</div></section><section data-zlib-block="20"><div style="white-space:pre-wrap;overflow-wrap:anywhere">- PalmOsは<a href="https://palmzlib.sourceforge.net/">https://palmzlib.sourceforge.net/</a>を参照してください。


</div></section><section data-zlib-block="21"><div style="white-space:pre-wrap;overflow-wrap:anywhere">謝辞：

</div></section><section data-zlib-block="22"><div style="white-space:pre-wrap;overflow-wrap:anywhere">  zlibが使うdeflate形式はPhil Katzが定義しました。deflateとzlibの仕様は
  L. Peter Deutschが作成しました。問題を報告し、さまざまな改善を提案してくださった
  すべての方に感謝します。人数が多く、ここで全員を挙げることはできません。

</div></section><section data-zlib-block="23"><div style="white-space:pre-wrap;overflow-wrap:anywhere">著作権表示：

</div></section><section data-zlib-block="24"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> (C) 1995-2026 Jean-loup Gailly and Mark Adler

</div></section><section data-zlib-block="25"><div style="white-space:pre-wrap;overflow-wrap:anywhere">  このソフトウェアは「現状のまま」で提供され、明示・黙示を問わずいかなる保証もありません。
  このソフトウェアの使用によって生じるいかなる損害についても、著作者は責任を負いません。

</div></section><section data-zlib-block="26"><div style="white-space:pre-wrap;overflow-wrap:anywhere">  以下の制限に従うことを条件に、商用アプリケーションを含むあらゆる目的でこのソフトウェアを
  使用し、自由に改変・再配布する許可を、すべての人に与えます。

</div></section><section data-zlib-block="27"><div style="white-space:pre-wrap;overflow-wrap:anywhere">  1. このソフトウェアの出所を偽ってはいけません。元のソフトウェアを自分が作成したと
     主張してはいけません。製品で使用する場合、その製品の文書で謝辞を示していただければ
     幸いですが、必須ではありません。
  2. 改変したソース版には、改変したものであると明確に表示しなければなりません。
     元のソフトウェアであるかのように偽ってはいけません。
  3. ソースを配布する際、この通知を削除したり改変したりしてはいけません。

</div></section><section data-zlib-block="28"><div style="white-space:pre-wrap;overflow-wrap:anywhere">  Jean-loup Gailly        Mark Adler
  jloup@gzip.org          madler@alumni.caltech.edu

</div></section><section data-zlib-block="29"><div style="white-space:pre-wrap;overflow-wrap:anywhere">製品でzlibを使用する場合、署名を求める長い法的文書を送らないでいただければ幸いです。
ソースは無料で提供しますが、いかなる保証もありません。ライブラリはJean-loup Gaillyと
Mark Adlerだけが作成し、第三者のコードを含みません。このプロジェクトへの貢献と配布は
すべて個人の立場だけで行っており、第三者の知的財産についての権利を許諾するものではありません。

</div></section><section data-zlib-block="30"><div style="white-space:pre-wrap;overflow-wrap:anywhere">改変したソースを再配布する場合は、ChangeLogへ変更を記録する履歴情報を入れていただければ
幸いです。改変版ソースの配布についての詳細はFAQを読んでください。
</div></section></div>

<aside data-editorial="original-notice"><details><summary>改変していない英語原通知</summary><pre style="white-space:pre-wrap;overflow-wrap:anywhere">Copyright notice:

 (C) 1995-2026 Jean-loup Gailly and Mark Adler

  This software is provided 'as-is', without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.

  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
  3. This notice may not be removed or altered from any source distribution.

  Jean-loup Gailly        Mark Adler
  jloup@gzip.org          madler@alumni.caltech.edu

</pre></details></aside>
