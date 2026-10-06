from pathlib import Path
import re
app=Path('/private/tmp/libx-zlib-import-20261003/apps/zlib');page='02-appendix/03-faq.md';s=(app/'src/content/docs/v1-3-2/en'/page).read_text().replace('title: "Frequently asked questions"','title: "よくある質問"')
provenance='<aside data-editorial="provenance"><p>固定したzlib 1.3.2のFAQ全文を整形した英語定本からの非公式な日本語訳です。原資料：FAQ。<a href="https://zlib.net/zlib-1.3.2.tar.gz">公式配布物</a>のSHA-256：<code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>。原資料のSHA-256：<code>8f64fd44e4773233f22a07c9d7a8cd83646d78c1e7c9bb79c43a9876e6ddb0d5</code>。原通知はそのまま保持しています。この整形版と翻訳は非公式です。</p><p><a href="../05-license/">ライセンス原文の全文</a>。本文の外にあるソース参照（deflate.c、zutil.c、test/example.c、test/minigzip.c、ChangeLog、contribなど）は固定した公式配布物内を参照してください。</p></aside>'
s=re.sub(r'<aside data-editorial="provenance">.*?</aside>',lambda m:provenance,s,flags=re.S)
s=re.sub(r'<aside data-editorial="source-note">.*?</aside>',lambda m:'<aside data-editorial="source-note"><p>以下のセキュリティ、ライセンス、環境に関する記述は、固定したzlib 1.3.2に付属するFAQの記述です。FAQ32の原文の識別子strm_total_outは構造体フィールドtotal_outと異なります。原文を黙って修正せず、両方の表記を保持しています。contribの各項目にはそれぞれのライセンスがあります。</p></aside>',s,flags=re.S)
s=re.sub(r'<aside data-editorial="license">.*?</aside>',lambda m:'<aside data-editorial="license"><p>このFAQに固有の文書ライセンスは確認できませんでした。承認済みの運用方針に従い、この注釈を付けてソフトウェアのzlib LicenseをFAQに適用しています。文書固有の許諾を別途確認したという意味ではありません。原通知と免責事項は、ライセンス原文の全文へのリンクから確認できます。</p></aside>',s,flags=re.S)
entries={
0:(None,'                zlibについてよくある質問\n\nここに質問がない場合は、zlibホームページ\n{0}を確認してください。より新しい情報があるかもしれません。\n最新版のzlib FAQは{1}にあります。\n\n'),
1:('zlibは2000年問題に対応していますか？','はい。zlibは日付を扱いません。'),
2:('Windows DLL版はどこで入手できますか？','zlibのソースは、変更せずにコンパイルしてDLLを作成できます。\nzlib配布物内のwin32/DLL_FAQ.txtを参照してください。'),
3:('zlibのVisual Basicインターフェイスはどこで入手できますか？','次を参照してください：\n    * {0}\n    * zlib配布物内のwin32/DLL_FAQ.txt'),
4:('{0}()がZ_BUF_ERRORを返します。','{0}()を呼び出す前に、圧縮データ用バッファーの長さが0ではなく、\nそのバッファーの利用可能なサイズと等しくなっていることを確認してください。\nVisual Basicでは、この引数を値渡し（「as long」）ではなく、\n参照渡し（「as any」）にしていることを確認してください。'),
5:('{0}()または{1}()がZ_BUF_ERRORを返します。','呼び出す前に、avail_inとavail_outが0でないことを確認してください。\nflush引数をZ_FINISHに設定するときは、保留中の入力をすべて処理できるだけの\navail_outがあることも確認してください。Z_BUF_ERRORは致命的ではありません。\n入力や出力領域を増やして、{0}()または{1}()を再度呼び出せます。\nstrm.avail_outが0になって返ったとき、まだ出力が保留されているかどうかは判断できないため、\n使い方によってはZ_BUF_ERRORを避けられない場合もあります。\n詳しい注釈付きの例は{2}を参照してください。'),
6:('zlibの文書（manページなど）はどこにありますか？','{0}にあります。zlibの使用例はtest/example.cとtest/minigzip.cにあり、\nexamples/にも別の例があります。'),
7:('GNU autoconfやlibtoolなどを使わないのはなぜですか？','zlibを、とても小さく単純なパッケージのままにしておきたいからです。\nzlibはかなり移植性が高く、多くの設定を必要としません。'),
8:('zlibにバグを見つけました。','こうした問題の多くは、zlibの使い方が正しくないことが原因です。\n小さなプログラムで問題を再現し、そのソースをzlib@gzip.orgへ送ってください。\n事前の合意なく数メガバイトものデータファイルを送らないでください。'),
9:('「undefined reference to {0}」と表示されるのはなぜですか？','「make test」で、たとえば次のように表示される場合：\n\n   example.o(.text+0x154): undefined reference to `{0}\'\n\n/usr/lib、/usr/local/lib、/usr/X11R6/libに古いlibz.*ファイルがないことを確認してください。\n古い版を削除してから「make install」を実行してください。'),
10:('zlibのDelphiインターフェイスが必要です。','zlib配布物内のcontrib/delphiディレクトリを参照してください。'),
11:('zlibは.zipアーカイブを扱えますか？','zlib単体では扱えません。zlib配布物内のcontrib/minizipディレクトリを参照してください。'),
12:('zlibは.Zファイルを扱えますか？','残念ながら扱えません。uncompressまたはgunzipを子プロセスとして起動するか、\nuncompressのコードを自分で適合させる必要があります。'),
13:('Unixの共有ライブラリはどう作成しますか？','Unixでは、デフォルトで共有ライブラリと静的ライブラリをビルドします。したがって：\n\nmake distclean\n./configure\nmake'),
14:('Unixにzlibの共有ライブラリをインストールするには？','上記の後に、次を実行します：\n\nmake install\n\nただし、多くのUnixにはzlibの共有ライブラリがすでにインストールされています。\nzlibの共有版をコンパイルし、インストールしようとする前に、すでにあるか確認するとよいでしょう。\n#include &lt;{0}&gt;ができれば、そこにあります。-lzオプションでおそらくリンクできます。\n版は{1}の先頭、または{2}に定義されたZLIB_VERSIONで確認できます。'),
15:('OttoPDFについて質問があります。','私たちはOttoPDFの著作者ではありません。実際の著作者はOttoPDFのウェブサイトに記載されています：\nJoel Hainley、jhainley@myndkryme.com。'),
16:('zlibはAdobe PDFファイルのFlateデータを展開できますか？','はい。{0}を参照してください。PDFフォームを変更する場合は、\n{1}を参照してください。'),
17:('Solarisで「register_frame_info not found」エラーが出るのはなぜですか？','Solaris 2.6にzlib 1.1.4をインストールした後、zlibを使うアプリケーションを実行すると、\n次のようなエラーが発生します：\n\n    ld.so.1: rpm: fatal: relocation error: file /usr/local/lib/libz.so:\n    symbol __register_frame_info: referenced symbol not found\n\n__register_frame_infoはzlibの一部ではなく、Cコンパイラー（ccまたはgcc）が生成するシンボルです。\nこの問題があるzlib使用アプリケーションを再コンパイルしなければなりません。\nこの問題はSolarisに固有です。Solaris版のzlibとzlib使用アプリケーションについては、\n{0}を参照してください。'),
18:('compress/deflateで作ったファイルにgzipがエラーを出すのはなぜですか？','compressとdeflate関数が生成するのはzlib形式のデータで、gzip形式とは異なり、互換性がありません。\n一方、zlibのgz*関数はgzip形式を使用します。zlib形式とgzip形式は内部では同じ圧縮データ形式を使いますが、\n圧縮データの前後に付くヘッダーとトレーラーが異なります。'),
19:('では、なぜ異なる形式が2つあるのですか？','gzip形式は、単一のファイルの名前や最終更新日などのディレクトリ情報を保持するために設計されました。\n一方、zlib形式はメモリ上や通信チャネルでの用途向けに設計され、ヘッダーとトレーラーがはるかに小さく、\ngzipより高速な整合性検査を使います。'),
20:('それはわかりましたが、メモリ上にgzipファイルを作るには？','{0}()を使えば、deflateにzlib形式ではなくgzip形式を書き出すよう要求できます。\n{1}()を使えば、inflateにgzip形式を展開するよう要求することもできます。\n詳細は{2}を読んでください。'),
21:('zlibはスレッドセーフですか？','はい。ただし、zlibが使うライブラリルーチンと、アプリケーションが提供するメモリ確保ルーチンも、\nスレッドセーフでなければなりません。zlibのgz*関数はstdioのルーチンを使用し、\nzlibの大半の関数はデフォルトでライブラリのメモリ確保ルーチンを使用します。\nzlibの*Init*関数では、アプリケーション独自のメモリ確保ルーチンを提供できます。\n\nアトミック操作がないシステム（C11より前など）で、デフォルトではないBUILDFIXEDまたは\nDYNAMIC_CRC_TABLEを定義すると、{0}()と{1}()はスレッドセーフではなくなります。\n\nもちろん、同じzlibまたはgzipストリームを一度に操作するのは1つのスレッドだけにしてください。'),
22:('商用アプリケーションでzlibを使えますか？','はい。{0}のライセンスを読んでください。'),
23:('zlibはGNUのライセンスで提供されていますか？','いいえ。{0}のライセンスを読んでください。'),
24:('ライセンスには、改変したソース版を「明確に表示」しなければならないとあります。具体的に何をすればよいのですか？','{0}の#defineであるZLIB_VERSIONとZLIB_VERNUMを変更する必要があります。\n特に、最後の版番号を「f」に変更し、ZLIB_VERSIONに識別文字列を付けるべきです。\nx.x.x.fという版番号は、zlibの保守担当者以外による改変のために予約されています。\nたとえば、改変元のzlibが「1.2.3.4」であれば、{1}でZLIB_VERNUMを0x123fに、\nZLIB_VERSIONを「1.2.3.f-zachary-mods-v3」のように変更するべきです。\ndeflate.cとinftrees.cの版文字列も更新できます。\n\n改変したソースを配布する場合は、{2}、ChangeLog、READMEに、変更の出所と内容、\n変更日も記載するべきです。出所には少なくとも氏名（または会社名）と、\nライブラリの支援や問題について連絡するためのメールアドレスを含めるべきです。\n\nコンパイル済みのzlibライブラリを{3}と{4}とともに配布する場合も、\nソースの配布に当たります。そのため、ソース全体を配布するときと同様に、\nZLIB_VERSIONとZLIB_VERNUMを変更し、{5}に変更の出所と内容を記載するべきです。'),
25:('zlibはビッグエンディアンとリトルエンディアンの両方で動作し、両者の間で圧縮データを交換できますか？','どちらもできます。'),
26:('zlibは64ビットマシンで動作しますか？','はい。64ビットマシンでテスト済みで、どのデータ型についても長さが32ビットに制限されることには依存しません。\n問題があれば、完全な問題報告をzlib@gzip.orgへ送ってください。'),
27:('zlibはPKWare Data Compression Libraryのデータを展開できますか？','いいえ。PKWare DCLは、PKZIPやzlibとはまったく異なる圧縮データ形式を使用します。\nただし、問題の解決策として使える可能性があるので、zlibのcontrib/blastディレクトリを見てください。'),
28:('圧縮ストリーム内のデータにランダムアクセスできますか？','準備なしではできません。圧縮中に定期的にZ_FULL_FLUSHを使い、その時点の保留データを\nすべて確実に書き出し、その位置の索引を保持しておけば、その位置から展開を開始できます。\nただし、圧縮率が大きく悪化することがあるため、Z_FULL_FLUSHを頻繁に使いすぎないよう注意が必要です。\n別の方法として、deflateストリームを一度走査して索引を生成し、それをランダムアクセスに使うこともできます。\nexamples/zran.cを参照してください。'),
29:('zlibはMVS、OS/390、CICSなどで動作しますか？','過去には動作しましたが、最近の実績は聞いていません。MVSに移植して動作したzlib 1.1.4がありましたが、\nそのリンクはもう使えません。これらのOSで最近zlibを使って成功した例をご存じなら、教えてください。\nありがとうございます。'),
30:('deflate形式を理解するために、もっと単純で読みやすいinflateの版を見ることはできますか？','まずRFC 1951を読んでください。次に、答えは「はい」です。zlibのcontrib/puffディレクトリを見てください。'),
31:('zlibは何かの特許を侵害していますか？','私たちが知る限りでは、侵害していません。実際、それが当初zlibを作る目的のすべてでした。\n詳しい情報は次を参照してください：\n\n{0}'),
32:('zlibは4 GBを超えるデータを扱えますか？','はい。{0}()と{1}()は、どれだけの量のデータでも正しく処理します。\n{2}()または{3}()の各呼び出しで扱う入力・出力のチャンクは、\nコンパイラーの「unsigned int」型に格納できる最大値に制限されますが、チャンクの数に制限はありません。\nただし、strm.total_inとstrm_total_outのカウンターは4 GBに制限される場合があります。\nこれらは便宜のために提供され、{4}()や{5}()の内部では使いません。\nアプリケーションは、{6}()または{7}()の各呼び出しの後に更新する独自のカウンターを\n簡単に設けて、4 GBを超えて数えることができます。\n{8}()と{9}()は1回の呼び出しで処理するため、4 GBに制限される場合があります。\n{10}()と{11}()も、zlibのコンパイル方法によっては4 GBに制限される場合があります。\n{13}にある{12}()関数を参照してください。\n\n上で「場合があります」を何度も使ったのは、4 GBの制限があるのはコンパイラーの「long」型が\n32ビットの場合だけだからです。「long」型が64ビットであれば、上限は16エクサバイトです。'),
33:('zlibにセキュリティ上の脆弱性はありますか？','私たちが把握している唯一のものは、{0}()にある可能性です。\nzlibがsprintf()またはvsprintf()を使うようにコンパイルされている場合\n（そのためにはZLIB_INSECUREを定義する必要があります）、\n{2}()の呼び出し側が出力を8K以内に収めることを保証する以外には、\n8Kの文字列領域（または{1}()で設定した別の値）のバッファーオーバーフローを防ぐ手段がありません。\n一方、通常そうあるべきようにsnprintf()またはvsnprintf()を使ってコンパイルされていれば、脆弱性はありません。\n./configureスクリプトは、{3}()が安全でないsprintf()の変種を使う場合、警告を表示します。\nまた、{4}()関数は、{5}()が使うsprintf()の種類に関する情報を返します。\n\nsnprintf()やvsnprintf()がなく、必要であれば、ここにあるstb_sprintf.hに移植性の高い実装があります：\n\n    {6}\n\nzlibの最新版を使うべきであることに注意してください。1.1.3以前の版には二重解放の脆弱性があり、\n1.2.1と1.2.2では不正な圧縮データの展開時にアクセス例外が発生していました。'),
34:('Java版のzlibはありますか？','おそらく、必要なのはJavaからzlibを使うことでしょう。zlibはすでにJava SDKの\njava.util.zipパッケージに含まれています。本当にJava言語で書かれたzlibが必要であれば、\nzlibホームページでリンクを探してください：{0}。'),
35:('コンパイラーやソースコード検査ツールを最大限厳格にすると、さまざまな警告が出ます。きちんとしたコードを書けないのですか？','何年も前に、世界中のすべてのコンパイラーで警告を避けようとするのをやめました。\n時間の無駄になり、一部のコンパイラーはまったくばかげたうえに互いに矛盾していたからです。\n今では、コードが常に動作することだけを確認しています。'),
36:('Valgrindなどのメモリアクセス検査ツールが、deflateで未初期化の値に依存する条件分岐があると報告します。バグではありませんか？','いいえ。性能のために意図して行っており、deflateの出力には影響しません。\nこれが最近報告されるようになったのは、zlib 1.2.xがデフォルトのメモリ確保にmalloc()を使う一方、\n以前の版は確保したメモリを0で埋めるcalloc()を使っていたためです。\nコードは正しかったのですが、1.2.4以降では、これらの検査ツールが反応しないよう変更しました。'),
37:('zlibは（ここに古い、または難解な形式名を入れてください）圧縮データ形式を読めますか？','おそらく読めません。さまざまな形式と関連ソフトウェアへの案内は、comp.compression FAQを見てください。'),
38:('zlibでzipファイルを暗号化・復号するには？','zlibは暗号化に対応していません。元のPKZIPの暗号化は非常に弱く、\n自由に入手できるプログラムで破ることができます。強い暗号化を使うには、\nすでにzlibによる圧縮を含むGnuPG（{0}）を使ってください。\nPKZIPと互換性のある「暗号化」については、{1}を見てください。'),
39:('HTTP 1.1の「gzip」と「deflate」のエンコーディングは何が違いますか？','「gzip」はgzip形式、「deflate」はzlib形式です。生のdeflate圧縮データ形式との混同を避けるため、\n後者を「zlib」と呼ぶべきだったのでしょう。HTTP 1.1のRFC 2616は「deflate」転送エンコーディングについて\nRFC 1950のzlib仕様を正しく参照していますが、サーバーやブラウザーが、特にMicrosoftのものが、\nRFC 1951のdeflate仕様に従った生のdeflateデータを誤って生成したり期待したりするとの報告がありました。\nそのため、zlib形式の「deflate」転送エンコーディングの方が効率的な方法であり\n（実際、まさにそのためにzlib形式を設計しました）、それでもHTTP 1.1の著作者による\n不幸な命名のため、「gzip」転送エンコーディングを使う方がおそらく信頼できます。\n\n結論：HTTP 1.1のエンコーディングにはgzip形式を使ってください。'),
40:('PKWareが導入した新しい「Deflate64」形式にzlibは対応していますか？','いいえ。PKWareは以前の圧縮形式のように文書化していないため、この形式を独自仕様のままにすることに\n決めたようです。いずれにしても、より新しい他の手法と比べて圧縮率の改善はとても小さく、\n実装する労力に見合いません。'),
41:('zlibのzip関数に問題があります。助けてもらえますか？','zlibにはzip関数はありません。おそらく、zlibのcontribディレクトリにあるGiles Vollantのminizipを\n使っているのでしょう。それはzlibの一部ではありません。実際、contrib内のものは何もzlibの一部ではありません。\nそこにあるファイルはzlibの著作者によるサポートの対象外です。\n助けが必要な場合は、それぞれの提供物の著作者へ連絡しなければなりません。'),
42:('contribのmatch.asmはGNU General Public Licenseで提供されています。zlibの一部なので、zlib全体がGNU GPLになるのでは？','いいえ。contribのファイルはzlibの一部ではありません。他の著作者が提供し、\n利用者の便宜のためにzlib配布物に含めています。contribの各項目にはそれぞれのライセンスがあります。'),
43:('zlibは輸出規制の対象ですか？ECCNは何ですか？','zlibは輸出規制の対象ではなく、EAR99に分類されます。'),
44:('製品でこのソフトウェアを使えるよう、この長い法的文書に署名してファクスで返送してもらえますか？','いいえ。お帰りください。しっしっ。')
}
def fill(template,original):
 links=re.findall(r'<a\b[^>]*>.*?</a>',original,flags=re.S)
 refs=[int(x) for x in re.findall(r'\{(\d+)\}',template)]
 assert sorted(refs)==list(range(len(links))),(template,refs,len(links))
 return re.sub(r'\{(\d+)\}',lambda m:links[int(m[1])],template)
for i,(q,a) in entries.items():
 pattern=rf'(<section data-zlib-block="{i}">)(.*?)(</section>)'
 def section(m):
  content=m[2]
  if q is not None:
   content,n=re.subn(r'(<h2[^>]*>)(.*?)(</h2>)',lambda x:x[1]+str(i)+'. '+fill(q,x[2])+'\n\n'+x[3],content,flags=re.S);assert n==1
  content,n=re.subn(r'(<div style="white-space:pre-wrap;overflow-wrap:anywhere">)(.*?)(</div>)',lambda x:x[1]+fill(a,x[2])+'\n\n'+x[3],content,flags=re.S);assert n==1
  return m[1]+content+m[3]
 s,n=re.subn(pattern,section,s,flags=re.S);assert n==1,i
f=app/'src/content/docs/v1-3-2/ja'/page;assert not f.exists();f.write_text(s);print(f)
