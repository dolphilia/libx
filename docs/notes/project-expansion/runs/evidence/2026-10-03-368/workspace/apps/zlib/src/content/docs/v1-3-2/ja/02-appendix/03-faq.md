---
title: "よくある質問"
licenseSource: zlib-faq
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>固定したzlib 1.3.2のFAQ全文を整形した英語定本からの非公式な日本語訳です。原資料：FAQ。<a href="https://zlib.net/zlib-1.3.2.tar.gz">公式配布物</a>のSHA-256：<code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>。原資料のSHA-256：<code>8f64fd44e4773233f22a07c9d7a8cd83646d78c1e7c9bb79c43a9876e6ddb0d5</code>。原通知はそのまま保持しています。この整形版と翻訳は非公式です。</p><p><a href="../05-license/">ライセンス原文の全文</a>。本文の外にあるソース参照（deflate.c、zutil.c、test/example.c、test/minigzip.c、ChangeLog、contribなど）は固定した公式配布物内を参照してください。</p></aside><aside data-editorial="source-note"><p>以下のセキュリティ、ライセンス、環境に関する記述は、固定したzlib 1.3.2に付属するFAQの記述です。FAQ32の原文の識別子strm_total_outは構造体フィールドtotal_outと異なります。原文を黙って修正せず、両方の表記を保持しています。contribの各項目にはそれぞれのライセンスがあります。</p></aside><aside data-editorial="license"><p>このFAQに固有の文書ライセンスは確認できませんでした。承認済みの運用方針に従い、この注釈を付けてソフトウェアのzlib LicenseをFAQに適用しています。文書固有の許諾を別途確認したという意味ではありません。原通知と免責事項は、ライセンス原文の全文へのリンクから確認できます。</p></aside>
<div class="zlib-document" style="overflow-wrap:anywhere"><section data-zlib-block="0"><div style="white-space:pre-wrap;overflow-wrap:anywhere">                zlibについてよくある質問

ここに質問がない場合は、zlibホームページ
<a href="https://zlib.net/">https://zlib.net/</a>を確認してください。より新しい情報があるかもしれません。
最新版のzlib FAQは<a href="https://zlib.net/zlib_faq.html">https://zlib.net/zlib_faq.html</a>にあります。



</div></section><section data-zlib-block="1"><h2 data-source-role="question" id="faq-1">1. zlibは2000年問題に対応していますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">はい。zlibは日付を扱いません。

</div></section><section data-zlib-block="2"><h2 data-source-role="question" id="faq-2">2. Windows DLL版はどこで入手できますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">zlibのソースは、変更せずにコンパイルしてDLLを作成できます。
zlib配布物内のwin32/DLL_FAQ.txtを参照してください。

</div></section><section data-zlib-block="3"><h2 data-source-role="question" id="faq-3">3. zlibのVisual Basicインターフェイスはどこで入手できますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">次を参照してください：
    * <a href="https://zlib.net/nelson/">https://zlib.net/nelson/</a>
    * zlib配布物内のwin32/DLL_FAQ.txt

</div></section><section data-zlib-block="4"><h2 data-source-role="question" id="faq-4">4. <a href="../../01-api/05-utility/#compress">compress</a>()がZ_BUF_ERRORを返します。

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere"><a href="../../01-api/05-utility/#compress">compress</a>()を呼び出す前に、圧縮データ用バッファーの長さが0ではなく、
そのバッファーの利用可能なサイズと等しくなっていることを確認してください。
Visual Basicでは、この引数を値渡し（「as long」）ではなく、
参照渡し（「as any」）にしていることを確認してください。

</div></section><section data-zlib-block="5"><h2 data-source-role="question" id="faq-5">5. <a href="../../01-api/03-basic/#deflate">deflate</a>()または<a href="../../01-api/03-basic/#inflate">inflate</a>()がZ_BUF_ERRORを返します。

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">呼び出す前に、avail_inとavail_outが0でないことを確認してください。
flush引数をZ_FINISHに設定するときは、保留中の入力をすべて処理できるだけの
avail_outがあることも確認してください。Z_BUF_ERRORは致命的ではありません。
入力や出力領域を増やして、<a href="../../01-api/03-basic/#deflate">deflate</a>()または<a href="../../01-api/03-basic/#inflate">inflate</a>()を再度呼び出せます。
strm.avail_outが0になって返ったとき、まだ出力が保留されているかどうかは判断できないため、
使い方によってはZ_BUF_ERRORを避けられない場合もあります。
詳しい注釈付きの例は<a href="https://zlib.net/zlib_how.html">https://zlib.net/zlib_how.html</a>を参照してください。

</div></section><section data-zlib-block="6"><h2 data-source-role="question" id="faq-6">6. zlibの文書（manページなど）はどこにありますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere"><a href="../../01-api/01-overview/">zlib.h</a>にあります。zlibの使用例はtest/example.cとtest/minigzip.cにあり、
examples/にも別の例があります。

</div></section><section data-zlib-block="7"><h2 data-source-role="question" id="faq-7">7. GNU autoconfやlibtoolなどを使わないのはなぜですか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">zlibを、とても小さく単純なパッケージのままにしておきたいからです。
zlibはかなり移植性が高く、多くの設定を必要としません。

</div></section><section data-zlib-block="8"><h2 data-source-role="question" id="faq-8">8. zlibにバグを見つけました。

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">こうした問題の多くは、zlibの使い方が正しくないことが原因です。
小さなプログラムで問題を再現し、そのソースをzlib@gzip.orgへ送ってください。
事前の合意なく数メガバイトものデータファイルを送らないでください。

</div></section><section data-zlib-block="9"><h2 data-source-role="question" id="faq-9">9. 「undefined reference to <a href="../../01-api/06-gzip/#gzputc">gzputc</a>」と表示されるのはなぜですか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">「make test」で、たとえば次のように表示される場合：

   example.o(.text+0x154): undefined reference to `<a href="../../01-api/06-gzip/#gzputc">gzputc</a>'

/usr/lib、/usr/local/lib、/usr/X11R6/libに古いlibz.*ファイルがないことを確認してください。
古い版を削除してから「make install」を実行してください。

</div></section><section data-zlib-block="10"><h2 data-source-role="question" id="faq-10">10. zlibのDelphiインターフェイスが必要です。

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">zlib配布物内のcontrib/delphiディレクトリを参照してください。

</div></section><section data-zlib-block="11"><h2 data-source-role="question" id="faq-11">11. zlibは.zipアーカイブを扱えますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">zlib単体では扱えません。zlib配布物内のcontrib/minizipディレクトリを参照してください。

</div></section><section data-zlib-block="12"><h2 data-source-role="question" id="faq-12">12. zlibは.Zファイルを扱えますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">残念ながら扱えません。uncompressまたはgunzipを子プロセスとして起動するか、
uncompressのコードを自分で適合させる必要があります。

</div></section><section data-zlib-block="13"><h2 data-source-role="question" id="faq-13">13. Unixの共有ライブラリはどう作成しますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">Unixでは、デフォルトで共有ライブラリと静的ライブラリをビルドします。したがって：

make distclean
./configure
make

</div></section><section data-zlib-block="14"><h2 data-source-role="question" id="faq-14">14. Unixにzlibの共有ライブラリをインストールするには？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">上記の後に、次を実行します：

make install

ただし、多くのUnixにはzlibの共有ライブラリがすでにインストールされています。
zlibの共有版をコンパイルし、インストールしようとする前に、すでにあるか確認するとよいでしょう。
#include &lt;<a href="../../01-api/01-overview/">zlib.h</a>&gt;ができれば、そこにあります。-lzオプションでおそらくリンクできます。
版は<a href="../../01-api/01-overview/">zlib.h</a>の先頭、または<a href="../../01-api/01-overview/">zlib.h</a>に定義されたZLIB_VERSIONで確認できます。

</div></section><section data-zlib-block="15"><h2 data-source-role="question" id="faq-15">15. OttoPDFについて質問があります。

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">私たちはOttoPDFの著作者ではありません。実際の著作者はOttoPDFのウェブサイトに記載されています：
Joel Hainley、jhainley@myndkryme.com。

</div></section><section data-zlib-block="16"><h2 data-source-role="question" id="faq-16">16. zlibはAdobe PDFファイルのFlateデータを展開できますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">はい。<a href="https://www.pdflib.com/">https://www.pdflib.com/</a>を参照してください。PDFフォームを変更する場合は、
<a href="https://sourceforge.net/projects/acroformtool/">https://sourceforge.net/projects/acroformtool/</a>を参照してください。

</div></section><section data-zlib-block="17"><h2 data-source-role="question" id="faq-17">17. Solarisで「register_frame_info not found」エラーが出るのはなぜですか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">Solaris 2.6にzlib 1.1.4をインストールした後、zlibを使うアプリケーションを実行すると、
次のようなエラーが発生します：

    ld.so.1: rpm: fatal: relocation error: file /usr/local/lib/libz.so:
    symbol __register_frame_info: referenced symbol not found

__register_frame_infoはzlibの一部ではなく、Cコンパイラー（ccまたはgcc）が生成するシンボルです。
この問題があるzlib使用アプリケーションを再コンパイルしなければなりません。
この問題はSolarisに固有です。Solaris版のzlibとzlib使用アプリケーションについては、
<a href="http://www.sunfreeware.com">http://www.sunfreeware.com</a>を参照してください。

</div></section><section data-zlib-block="18"><h2 data-source-role="question" id="faq-18">18. compress/deflateで作ったファイルにgzipがエラーを出すのはなぜですか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">compressとdeflate関数が生成するのはzlib形式のデータで、gzip形式とは異なり、互換性がありません。
一方、zlibのgz*関数はgzip形式を使用します。zlib形式とgzip形式は内部では同じ圧縮データ形式を使いますが、
圧縮データの前後に付くヘッダーとトレーラーが異なります。

</div></section><section data-zlib-block="19"><h2 data-source-role="question" id="faq-19">19. では、なぜ異なる形式が2つあるのですか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">gzip形式は、単一のファイルの名前や最終更新日などのディレクトリ情報を保持するために設計されました。
一方、zlib形式はメモリ上や通信チャネルでの用途向けに設計され、ヘッダーとトレーラーがはるかに小さく、
gzipより高速な整合性検査を使います。

</div></section><section data-zlib-block="20"><h2 data-source-role="question" id="faq-20">20. それはわかりましたが、メモリ上にgzipファイルを作るには？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere"><a href="../../01-api/04-advanced/#deflateInit2">deflateInit2</a>()を使えば、deflateにzlib形式ではなくgzip形式を書き出すよう要求できます。
<a href="../../01-api/04-advanced/#inflateInit2">inflateInit2</a>()を使えば、inflateにgzip形式を展開するよう要求することもできます。
詳細は<a href="../../01-api/01-overview/">zlib.h</a>を読んでください。

</div></section><section data-zlib-block="21"><h2 data-source-role="question" id="faq-21">21. zlibはスレッドセーフですか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">はい。ただし、zlibが使うライブラリルーチンと、アプリケーションが提供するメモリ確保ルーチンも、
スレッドセーフでなければなりません。zlibのgz*関数はstdioのルーチンを使用し、
zlibの大半の関数はデフォルトでライブラリのメモリ確保ルーチンを使用します。
zlibの*Init*関数では、アプリケーション独自のメモリ確保ルーチンを提供できます。

アトミック操作がないシステム（C11より前など）で、デフォルトではないBUILDFIXEDまたは
DYNAMIC_CRC_TABLEを定義すると、<a href="../../01-api/03-basic/#inflate">inflate</a>()と<a href="../../01-api/07-checksum/#crc32">crc32</a>()はスレッドセーフではなくなります。

もちろん、同じzlibまたはgzipストリームを一度に操作するのは1つのスレッドだけにしてください。

</div></section><section data-zlib-block="22"><h2 data-source-role="question" id="faq-22">22. 商用アプリケーションでzlibを使えますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">はい。<a href="../../01-api/01-overview/">zlib.h</a>のライセンスを読んでください。

</div></section><section data-zlib-block="23"><h2 data-source-role="question" id="faq-23">23. zlibはGNUのライセンスで提供されていますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">いいえ。<a href="../../01-api/01-overview/">zlib.h</a>のライセンスを読んでください。

</div></section><section data-zlib-block="24"><h2 data-source-role="question" id="faq-24">24. ライセンスには、改変したソース版を「明確に表示」しなければならないとあります。具体的に何をすればよいのですか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere"><a href="../../01-api/01-overview/">zlib.h</a>の#defineであるZLIB_VERSIONとZLIB_VERNUMを変更する必要があります。
特に、最後の版番号を「f」に変更し、ZLIB_VERSIONに識別文字列を付けるべきです。
x.x.x.fという版番号は、zlibの保守担当者以外による改変のために予約されています。
たとえば、改変元のzlibが「1.2.3.4」であれば、<a href="../../01-api/01-overview/">zlib.h</a>でZLIB_VERNUMを0x123fに、
ZLIB_VERSIONを「1.2.3.f-zachary-mods-v3」のように変更するべきです。
deflate.cとinftrees.cの版文字列も更新できます。

改変したソースを配布する場合は、<a href="../../01-api/01-overview/">zlib.h</a>、ChangeLog、READMEに、変更の出所と内容、
変更日も記載するべきです。出所には少なくとも氏名（または会社名）と、
ライブラリの支援や問題について連絡するためのメールアドレスを含めるべきです。

コンパイル済みのzlibライブラリを<a href="../../01-api/01-overview/">zlib.h</a>と<a href="../01-zconf/">zconf.h</a>とともに配布する場合も、
ソースの配布に当たります。そのため、ソース全体を配布するときと同様に、
ZLIB_VERSIONとZLIB_VERNUMを変更し、<a href="../../01-api/01-overview/">zlib.h</a>に変更の出所と内容を記載するべきです。

</div></section><section data-zlib-block="25"><h2 data-source-role="question" id="faq-25">25. zlibはビッグエンディアンとリトルエンディアンの両方で動作し、両者の間で圧縮データを交換できますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">どちらもできます。

</div></section><section data-zlib-block="26"><h2 data-source-role="question" id="faq-26">26. zlibは64ビットマシンで動作しますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">はい。64ビットマシンでテスト済みで、どのデータ型についても長さが32ビットに制限されることには依存しません。
問題があれば、完全な問題報告をzlib@gzip.orgへ送ってください。

</div></section><section data-zlib-block="27"><h2 data-source-role="question" id="faq-27">27. zlibはPKWare Data Compression Libraryのデータを展開できますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">いいえ。PKWare DCLは、PKZIPやzlibとはまったく異なる圧縮データ形式を使用します。
ただし、問題の解決策として使える可能性があるので、zlibのcontrib/blastディレクトリを見てください。

</div></section><section data-zlib-block="28"><h2 data-source-role="question" id="faq-28">28. 圧縮ストリーム内のデータにランダムアクセスできますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">準備なしではできません。圧縮中に定期的にZ_FULL_FLUSHを使い、その時点の保留データを
すべて確実に書き出し、その位置の索引を保持しておけば、その位置から展開を開始できます。
ただし、圧縮率が大きく悪化することがあるため、Z_FULL_FLUSHを頻繁に使いすぎないよう注意が必要です。
別の方法として、deflateストリームを一度走査して索引を生成し、それをランダムアクセスに使うこともできます。
examples/zran.cを参照してください。

</div></section><section data-zlib-block="29"><h2 data-source-role="question" id="faq-29">29. zlibはMVS、OS/390、CICSなどで動作しますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">過去には動作しましたが、最近の実績は聞いていません。MVSに移植して動作したzlib 1.1.4がありましたが、
そのリンクはもう使えません。これらのOSで最近zlibを使って成功した例をご存じなら、教えてください。
ありがとうございます。

</div></section><section data-zlib-block="30"><h2 data-source-role="question" id="faq-30">30. deflate形式を理解するために、もっと単純で読みやすいinflateの版を見ることはできますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">まずRFC 1951を読んでください。次に、答えは「はい」です。zlibのcontrib/puffディレクトリを見てください。

</div></section><section data-zlib-block="31"><h2 data-source-role="question" id="faq-31">31. zlibは何かの特許を侵害していますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">私たちが知る限りでは、侵害していません。実際、それが当初zlibを作る目的のすべてでした。
詳しい情報は次を参照してください：

<a href="https://web.archive.org/web/20180729212847/http://www.gzip.org/#faq11">https://web.archive.org/web/20180729212847/http://www.gzip.org/#faq11</a>

</div></section><section data-zlib-block="32"><h2 data-source-role="question" id="faq-32">32. zlibは4 GBを超えるデータを扱えますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">はい。<a href="../../01-api/03-basic/#inflate">inflate</a>()と<a href="../../01-api/03-basic/#deflate">deflate</a>()は、どれだけの量のデータでも正しく処理します。
<a href="../../01-api/03-basic/#inflate">inflate</a>()または<a href="../../01-api/03-basic/#deflate">deflate</a>()の各呼び出しで扱う入力・出力のチャンクは、
コンパイラーの「unsigned int」型に格納できる最大値に制限されますが、チャンクの数に制限はありません。
ただし、strm.total_inとstrm_total_outのカウンターは4 GBに制限される場合があります。
これらは便宜のために提供され、<a href="../../01-api/03-basic/#inflate">inflate</a>()や<a href="../../01-api/03-basic/#deflate">deflate</a>()の内部では使いません。
アプリケーションは、<a href="../../01-api/03-basic/#inflate">inflate</a>()または<a href="../../01-api/03-basic/#deflate">deflate</a>()の各呼び出しの後に更新する独自のカウンターを
簡単に設けて、4 GBを超えて数えることができます。
<a href="../../01-api/05-utility/#compress">compress</a>()と<a href="../../01-api/05-utility/#uncompress">uncompress</a>()は1回の呼び出しで処理するため、4 GBに制限される場合があります。
<a href="../../01-api/06-gzip/#gzseek">gzseek</a>()と<a href="../../01-api/06-gzip/#gztell">gztell</a>()も、zlibのコンパイル方法によっては4 GBに制限される場合があります。
<a href="../../01-api/01-overview/">zlib.h</a>にある<a href="../../01-api/04-advanced/#zlibCompileFlags">zlibCompileFlags</a>()関数を参照してください。

上で「場合があります」を何度も使ったのは、4 GBの制限があるのはコンパイラーの「long」型が
32ビットの場合だけだからです。「long」型が64ビットであれば、上限は16エクサバイトです。

</div></section><section data-zlib-block="33"><h2 data-source-role="question" id="faq-33">33. zlibにセキュリティ上の脆弱性はありますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">私たちが把握している唯一のものは、<a href="../../01-api/06-gzip/#gzprintf">gzprintf</a>()にある可能性です。
zlibがsprintf()またはvsprintf()を使うようにコンパイルされている場合
（そのためにはZLIB_INSECUREを定義する必要があります）、
<a href="../../01-api/06-gzip/#gzprintf">gzprintf</a>()の呼び出し側が出力を8K以内に収めることを保証する以外には、
8Kの文字列領域（または<a href="../../01-api/06-gzip/#gzbuffer">gzbuffer</a>()で設定した別の値）のバッファーオーバーフローを防ぐ手段がありません。
一方、通常そうあるべきようにsnprintf()またはvsnprintf()を使ってコンパイルされていれば、脆弱性はありません。
./configureスクリプトは、<a href="../../01-api/06-gzip/#gzprintf">gzprintf</a>()が安全でないsprintf()の変種を使う場合、警告を表示します。
また、<a href="../../01-api/04-advanced/#zlibCompileFlags">zlibCompileFlags</a>()関数は、<a href="../../01-api/06-gzip/#gzprintf">gzprintf</a>()が使うsprintf()の種類に関する情報を返します。

snprintf()やvsnprintf()がなく、必要であれば、ここにあるstb_sprintf.hに移植性の高い実装があります：

    <a href="https://github.com/nothings/stb">https://github.com/nothings/stb</a>

zlibの最新版を使うべきであることに注意してください。1.1.3以前の版には二重解放の脆弱性があり、
1.2.1と1.2.2では不正な圧縮データの展開時にアクセス例外が発生していました。

</div></section><section data-zlib-block="34"><h2 data-source-role="question" id="faq-34">34. Java版のzlibはありますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">おそらく、必要なのはJavaからzlibを使うことでしょう。zlibはすでにJava SDKの
java.util.zipパッケージに含まれています。本当にJava言語で書かれたzlibが必要であれば、
zlibホームページでリンクを探してください：<a href="https://zlib.net/">https://zlib.net/</a>。

</div></section><section data-zlib-block="35"><h2 data-source-role="question" id="faq-35">35. コンパイラーやソースコード検査ツールを最大限厳格にすると、さまざまな警告が出ます。きちんとしたコードを書けないのですか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">何年も前に、世界中のすべてのコンパイラーで警告を避けようとするのをやめました。
時間の無駄になり、一部のコンパイラーはまったくばかげたうえに互いに矛盾していたからです。
今では、コードが常に動作することだけを確認しています。

</div></section><section data-zlib-block="36"><h2 data-source-role="question" id="faq-36">36. Valgrindなどのメモリアクセス検査ツールが、deflateで未初期化の値に依存する条件分岐があると報告します。バグではありませんか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">いいえ。性能のために意図して行っており、deflateの出力には影響しません。
これが最近報告されるようになったのは、zlib 1.2.xがデフォルトのメモリ確保にmalloc()を使う一方、
以前の版は確保したメモリを0で埋めるcalloc()を使っていたためです。
コードは正しかったのですが、1.2.4以降では、これらの検査ツールが反応しないよう変更しました。

</div></section><section data-zlib-block="37"><h2 data-source-role="question" id="faq-37">37. zlibは（ここに古い、または難解な形式名を入れてください）圧縮データ形式を読めますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">おそらく読めません。さまざまな形式と関連ソフトウェアへの案内は、comp.compression FAQを見てください。

</div></section><section data-zlib-block="38"><h2 data-source-role="question" id="faq-38">38. zlibでzipファイルを暗号化・復号するには？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">zlibは暗号化に対応していません。元のPKZIPの暗号化は非常に弱く、
自由に入手できるプログラムで破ることができます。強い暗号化を使うには、
すでにzlibによる圧縮を含むGnuPG（<a href="https://www.gnupg.org/">https://www.gnupg.org/</a>）を使ってください。
PKZIPと互換性のある「暗号化」については、<a href="https://infozip.sourceforge.net/">https://infozip.sourceforge.net/</a>を見てください。

</div></section><section data-zlib-block="39"><h2 data-source-role="question" id="faq-39">39. HTTP 1.1の「gzip」と「deflate」のエンコーディングは何が違いますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">「gzip」はgzip形式、「deflate」はzlib形式です。生のdeflate圧縮データ形式との混同を避けるため、
後者を「zlib」と呼ぶべきだったのでしょう。HTTP 1.1のRFC 2616は「deflate」転送エンコーディングについて
RFC 1950のzlib仕様を正しく参照していますが、サーバーやブラウザーが、特にMicrosoftのものが、
RFC 1951のdeflate仕様に従った生のdeflateデータを誤って生成したり期待したりするとの報告がありました。
そのため、zlib形式の「deflate」転送エンコーディングの方が効率的な方法であり
（実際、まさにそのためにzlib形式を設計しました）、それでもHTTP 1.1の著作者による
不幸な命名のため、「gzip」転送エンコーディングを使う方がおそらく信頼できます。

結論：HTTP 1.1のエンコーディングにはgzip形式を使ってください。

</div></section><section data-zlib-block="40"><h2 data-source-role="question" id="faq-40">40. PKWareが導入した新しい「Deflate64」形式にzlibは対応していますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">いいえ。PKWareは以前の圧縮形式のように文書化していないため、この形式を独自仕様のままにすることに
決めたようです。いずれにしても、より新しい他の手法と比べて圧縮率の改善はとても小さく、
実装する労力に見合いません。

</div></section><section data-zlib-block="41"><h2 data-source-role="question" id="faq-41">41. zlibのzip関数に問題があります。助けてもらえますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">zlibにはzip関数はありません。おそらく、zlibのcontribディレクトリにあるGiles Vollantのminizipを
使っているのでしょう。それはzlibの一部ではありません。実際、contrib内のものは何もzlibの一部ではありません。
そこにあるファイルはzlibの著作者によるサポートの対象外です。
助けが必要な場合は、それぞれの提供物の著作者へ連絡しなければなりません。

</div></section><section data-zlib-block="42"><h2 data-source-role="question" id="faq-42">42. contribのmatch.asmはGNU General Public Licenseで提供されています。zlibの一部なので、zlib全体がGNU GPLになるのでは？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">いいえ。contribのファイルはzlibの一部ではありません。他の著作者が提供し、
利用者の便宜のためにzlib配布物に含めています。contribの各項目にはそれぞれのライセンスがあります。

</div></section><section data-zlib-block="43"><h2 data-source-role="question" id="faq-43">43. zlibは輸出規制の対象ですか？ECCNは何ですか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">zlibは輸出規制の対象ではなく、EAR99に分類されます。

</div></section><section data-zlib-block="44"><h2 data-source-role="question" id="faq-44">44. 製品でこのソフトウェアを使えるよう、この長い法的文書に署名してファクスで返送してもらえますか？

</h2><div style="white-space:pre-wrap;overflow-wrap:anywhere">いいえ。お帰りください。しっしっ。

</div></section></div>
