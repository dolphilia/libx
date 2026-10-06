from pathlib import Path
import re,html
app=Path('/private/tmp/libx-zlib-import-20261003/apps/zlib');s=(app/'src/content/docs/v1-3-2/en/02-appendix/04-manual.md').read_text().replace('title: "zlib manual page"','title: "zlibマニュアルページ"').replace('Library Functions Manual','ライブラリ関数マニュアル')
provenance='<aside data-editorial="provenance"><p>固定したzlib 1.3.2のzlib.3全文を整形した英語定本からの非公式な日本語訳です。原資料：zlib.3。<a href="https://zlib.net/zlib-1.3.2.tar.gz">公式配布物</a>のSHA-256：<code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>。原資料のSHA-256：<code>5eebcb61a9c1ef91ff6c8e6d37b32554f5eefff825b190b1b5e5982f35d87534</code>。原通知は下記に改変せず併記しています。この整形版と翻訳は非公式です。</p><p><a href="../05-license/">ライセンス原文の全文</a>。本文の外にあるソース参照（deflate.c、zutil.c、test/example.c、test/minigzip.c、ChangeLog、contribなど）は固定した公式配布物内を参照してください。</p></aside>';s=re.sub(r'<aside data-editorial="provenance">.*?</aside>',lambda m:provenance,s,flags=re.S)
paragraphs=[
'zlib — 圧縮・展開ライブラリ',
'[詳細は<i><a href="../../01-api/01-overview/">zlib.h</a></i>を参照してください]',
'<i>zlib</i>は汎用データ圧縮ライブラリです。メモリ確保ルーチンなど、使用する標準ライブラリの関数がスレッドセーフであるという前提で、コードもスレッドセーフです。非圧縮データの整合性検査を含む、メモリ上の圧縮・展開関数を提供します。この版では圧縮方式は1つ（deflation）だけですが、同じストリームインターフェイスで別のアルゴリズムを後から追加する可能性があります。',
'バッファーが十分大きければ1回で圧縮でき、圧縮関数を繰り返し呼び出す方法も使えます。後者では各呼び出しの前に、アプリケーションが入力を追加するか、出力を消費して出力領域を増やすか、両方を行わなければなりません。',
'stdioに似たインターフェイスで、<i>gzip</i>(1)（.gz）形式のファイルの読み書きにも対応します。',
'ライブラリはシグナルハンドラーを設置しません。デコーダーは圧縮データの整合性を検査するため、入力が破損していてもライブラリがクラッシュすることはないはずです。',
'圧縮ライブラリの全関数は<i><a href="../../01-api/01-overview/">zlib.h</a></i>で文書化しています。配布ソースの<i>test/example.c</i>と<i>test/minigzip.c</i>に使用例があり、<i>examples/</i>にも別の例があります。',
'この版の変更は、ソースに付属する<i>ChangeLog</i>に記載しています。',
'<i>zlib</i>は、Java、Python、.NET、PHP、Perl、Ruby、Swift、Goなど、多くの言語やOSに組み込まれています。この一覧に限りません。',
'Gilles Vollant（info@winimage.com）が<i>zlib</i>を使って作成した、.zip形式のファイルを読み書きする実験的パッケージは、次の場所にあります：',
'<i>zlib</i>のウェブサイト：',
'<i>zlib</i>が使用するデータ形式は、RFC（Request for Comments）1950〜1952で説明しています：',
'Mark NelsonはDr. Dobb\'s Journalの1997年1月号に<i>zlib</i>の記事を書きました。記事のコピーは次の場所にあります：',
'問題を報告する前に、<i>zlib</i>のウェブサイトで最新版を使用しているか確認してください。そうでなければ最新版を取得し、問題がまだ発生するか確認してください。<i>zlib</i> FAQも読んでください：',
'助けを求める前に上記FAQを読んでください。質問やコメントはzlib@gzip.orgへ、Windows DLL版についてはGilles Vollant（info@winimage.com）へ送ってください。',
'版1.3.2',
'Copyright (C) 1995-2026 Jean-loup Gailly and Mark Adler',
'このソフトウェアは「現状のまま」で提供され、明示・黙示を問わずいかなる保証もありません。このソフトウェアの使用によって生じるいかなる損害についても、著作者は責任を負いません。',
'以下の制限に従うことを条件に、商用アプリケーションを含むあらゆる目的でこのソフトウェアを使用し、自由に改変・再配布する許可を、すべての人に与えます。',
'Jean-loup Gailly Mark Adler\n  <br/>\n  jloup@gzip.org madler@alumni.caltech.edu',
'<i>zlib</i>が使うdeflate形式はPhil Katzが定義しました。deflateと<i>zlib</i>の仕様はL. Peter Deutschが作成しました。問題を報告し、さまざまな改善を提案してくださったすべての方に感謝します。人数が多く、ここで全員を挙げることはできません。',
'UNIXマニュアルページの作成者は、米国国立医学図書館のR. P. C. Rodgers（rodgers@nlm.nih.gov）です。']
i=iter(paragraphs);s,n=re.subn(r'(<p class="Pp">).*?(</p>)',lambda m:m[1]+next(i)+m[2],s,flags=re.S);assert n==len(paragraphs),(n,len(paragraphs))
for en,ja in [('NAME','名前'),('SYNOPSIS','概要'),('DESCRIPTION','説明'),('SEE\n  ALSO','関連項目'),('REPORTING\n  PROBLEMS','問題の報告'),('AUTHORS\n  AND LICENSE','著作者とライセンス')]:s=s.replace('>'+en+'</a></h1>','>'+ja+'</a></h1>')
s=s.replace(' and also in the\n      <i>contrib/minizip</i> directory of the main <i>zlib</i> source\n      distribution.','。<i>zlib</i>本体のソース配布物の<i>contrib/minizip</i>にもあります。').replace('(for the zlib header and\n      trailer format)','（zlibヘッダーとトレーラーの形式）').replace('(for the deflate compressed\n      data format)','（deflate圧縮データの形式）').replace('(for the gzip header and\n      trailer format)','（gzipヘッダーとトレーラーの形式）')
clauses=['このソフトウェアの出所を偽ってはいけません。元のソフトウェアを自分が作成したと主張してはいけません。製品で使用する場合、その製品の文書で謝辞を示していただければ幸いですが、必須ではありません。','改変したソース版には、改変したものであると明確に表示しなければなりません。元のソフトウェアであるかのように偽ってはいけません。','ソースを配布する際、この通知を削除したり改変したりしてはいけません。']
for num,v in enumerate(clauses,1):s,n=re.subn(rf'(<dt>{num}\.</dt>\s*<dd>).*?(</dd>)',lambda m:m[1]+v+m[2],s,flags=re.S);assert n==1
raw=(app/'upstream/v1.3.2/zlib.3').read_text();notice='.SH AUTHORS AND LICENSE'+raw.split('.SH AUTHORS AND LICENSE',1)[1].split('.LP\nThe deflate format used by',1)[0];s+='\n<aside data-editorial="original-notice"><details><summary>改変していない英語原通知（元のroff形式）</summary><pre style="white-space:pre-wrap;overflow-wrap:anywhere">'+html.escape(notice,quote=False)+'</pre></details></aside>\n';f=app/'src/content/docs/v1-3-2/ja/02-appendix/04-manual.md';assert not f.exists();f.write_text(s);print(f)
