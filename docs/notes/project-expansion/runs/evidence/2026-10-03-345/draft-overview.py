from pathlib import Path
import re,html,json,hashlib
app=Path('/private/tmp/libx-zlib-import-20261003/apps/zlib');en=app/'src/content/docs/v1-3-2/en/01-api/01-overview.md';out=en.read_text().replace('title: "Overview and original notices"','title: "概要と原文の通知"')
prose={
0:''' <a href="./">zlib.h</a> -- 汎用圧縮ライブラリ「zlib」のインターフェース
  バージョン1.3.2、2026年2月17日

  Copyright (C) 1995-2026 Jean-loup Gailly and Mark Adler

  このソフトウェアは「現状のまま」提供され、明示・黙示を問わず一切の保証はありません。
  このソフトウェアの使用に起因する損害について、著作者はいかなる場合も責任を負いません。

  次の制限に従うことを条件として、商用用途を含むあらゆる目的での使用、
  改変、および自由な再配布を、すべての人に許可します。

  1. このソフトウェアの出自を偽ってはなりません。元のソフトウェアを自分が作成したと
     主張してはなりません。製品で使用する場合、製品の文書に謝辞を記載していただければ
     幸いですが、必須ではありません。
  2. 改変したソース版は、改変版であることを明確に示さなければならず、
     元のソフトウェアであるかのように表示してはなりません。
  3. この通知をソース配布物から削除したり、変更したりしてはなりません。

  Jean-loup Gailly        Mark Adler
  jloup@gzip.org          madler@alumni.caltech.edu


  zlibライブラリが使用するデータ形式は、RFC（Request for Comments）1950〜1952に
  記載されています。<a href="https://datatracker.ietf.org/doc/html/rfc1950">https://datatracker.ietf.org/doc/html/rfc1950</a>
  （zlib形式）、rfc1951（deflate形式）、rfc1952（gzip形式）を参照してください。
''',
2:'''
    「zlib」圧縮ライブラリは、メモリ上の圧縮・展開機能を提供し、展開後データの
  完全性チェックも含みます。この版が対応する圧縮方式は1種類（deflation）だけですが、
  今後ほかのアルゴリズムも追加され、同じストリームインターフェースを使用する予定です。

    バッファーが十分に大きければ、圧縮は1回の処理で行えます。
  圧縮関数を繰り返し呼び出す方法もあります。その場合、アプリケーションは各呼び出しの前に
  入力を追加するか、出力を取り出して空き領域を確保するか、またはその両方を行わなければなりません。

    メモリ上の関数が既定で使用する圧縮データ形式はzlib形式です。
  RFC 1950に記載されたzlibラッパーが、RFC 1951に記載されたdeflateストリームを包みます。

    また、このライブラリはgzip（.gz）形式のファイルの読み書きにも対応します。
  「gz」で始まる関数を使い、stdioに似たインターフェースで操作できます。
  gzip形式はzlib形式とは異なり、RFC 1952に記載されたgzipラッパーが
  deflateストリームを包みます。

    必要に応じて、メモリ上でgzipおよびraw deflateストリームを読み書きすることもできます。

    zlib形式は、メモリ上や通信路での利用に向け、小さく高速になるよう設計されています。
  gzip形式はファイルシステム上の単一ファイルの圧縮用に設計されており、
  ディレクトリ情報を保持するためzlibより大きなヘッダーを持ちます。
  また、zlibとは異なる、より低速なチェック方式を使います。

    このライブラリはシグナルハンドラーを設定しません。デコーダーは圧縮データの
  整合性を検査するため、入力が破損していてもライブラリがクラッシュすることはないはずです。
''',
4:'''
     zlibルーチンとの間で受け渡すgzipヘッダー情報です。
  各フィールドの意味の詳細はRFC 1952を参照してください。
''',
6:'''
     アプリケーションは、avail_inが0になったらnext_inとavail_inを更新しなければなりません。
   avail_outが0になったら、next_outとavail_outを更新しなければなりません。
   初期化関数を呼び出す前に、zalloc、zfree、opaqueを初期化しなければなりません。
   ほかのすべてのフィールドは圧縮ライブラリが設定するため、アプリケーションが更新してはなりません。

     アプリケーションが指定したopaqueの値は、zallocとzfreeを呼び出す際の第1引数に渡されます。
   独自のメモリ管理に役立つことがあります。圧縮ライブラリはopaqueの値に意味を与えません。

     対象オブジェクトに必要なメモリが足りない場合、zallocはZ_NULLを返さなければなりません。
   マルチスレッドのアプリケーションでzlibを使う場合、zallocとzfreeはスレッドセーフで
   なければなりません。その条件を満たせば、zlibはスレッドセーフです。
   初期化関数に入る時点でzallocとzfreeがZ_NULLなら、標準ライブラリ関数malloc()とfree()を
   使う内部ルーチンが設定されます。

     16ビットシステムでは、zallocとzfreeはちょうど65536バイトの領域を確保できなければ
   なりません。ただし、MAXSEG_64Kが定義されていれば、それを超える領域の確保は要求されません
   （<a href="../../02-appendix/01-zconf/">zconf.h</a>を参照）。警告：MSDOSでは、ちょうど65536バイトの
   オブジェクトに対してzallocが返すポインターのオフセットは、必ず0に正規化されていなければなりません。
   ライブラリの既定の確保関数はこれを保証します（zutil.cを参照）。
   メモリ要件を減らし、64Kのオブジェクトの確保を避けるには、圧縮率を犠牲にして
   -DMAX_WBITS=14を指定してライブラリをコンパイルします
   （<a href="../../02-appendix/01-zconf/">zconf.h</a>を参照）。

     total_inとtotal_outは統計情報や進捗報告に利用できます。圧縮後のtotal_inは
   非圧縮データの総サイズを保持しており、展開側で使うために保存できます。
   特に、展開側がすべてを1回の処理で展開したい場合に役立ちます。
'''}
for k,v in prose.items():
 pattern=rf'(<div data-zlib-block="{k}"><div style="white-space:pre-wrap;overflow-wrap:anywhere">).*?(</div></div>)'
 out,n=re.subn(pattern,lambda m:m[1]+v+m[2],out,flags=re.S);assert n==1
comments={
'next input byte':'次の入力バイト','number of bytes available at next_in':'next_inにある利用可能なバイト数','total number of input bytes read so far':'これまでに読み込んだ入力バイトの総数','next output byte will go here':'次の出力バイトの書き込み先','remaining free space at next_out':'next_outの残り空き領域','total number of bytes output so far':'これまでに出力したバイトの総数','last error message, NULL if no error':'直近のエラーメッセージ。エラーがなければNULL','not visible by applications':'アプリケーションからは参照できない','used to allocate the internal state':'内部状態の確保に使用','used to free the internal state':'内部状態の解放に使用','private data object passed to zalloc and zfree':'zallocとzfreeに渡す独自のデータオブジェクト','best guess about the data type: binary or text\n                           for deflate, or the decoding state for inflate':'データ型の最良の推定。deflateではバイナリーかテキスト、\n                           inflateではデコード状態','Adler-32 or CRC-32 value of the uncompressed data':'非圧縮データのAdler-32またはCRC-32値','reserved for future use':'将来の使用のために予約','true if compressed data believed to be text':'圧縮データがテキストと考えられる場合は真','modification time':'更新時刻','extra flags (not used when writing a gzip file)':'追加フラグ（gzipファイルの書き込み時には使用しない）','operating system':'オペレーティングシステム','pointer to extra field or Z_NULL if none':'追加フィールドへのポインター。なければZ_NULL','extra field length (valid if extra != Z_NULL)':'追加フィールドの長さ（extra != Z_NULLの場合に有効）','space at extra (only when reading header)':'extraの領域サイズ（ヘッダーの読み込み時のみ）','pointer to zero-terminated file name or Z_NULL':'ゼロ終端のファイル名へのポインター、またはZ_NULL','space at name (only when reading header)':'nameの領域サイズ（ヘッダーの読み込み時のみ）','pointer to zero-terminated comment or Z_NULL':'ゼロ終端のコメントへのポインター、またはZ_NULL','space at comment (only when reading header)':'commentの領域サイズ（ヘッダーの読み込み時のみ）','true if there was or will be a header crc':'ヘッダーCRCが存在した、または存在する予定なら真','true when done reading gzip header (not used\n                           when writing a gzip file)':'gzipヘッダーの読み込み完了時は真\n                           （gzipファイルの書き込み時には使用しない）'}
for old,new in comments.items():
 needle='/* '+old+' */';assert needle in out,old;out=out.replace(needle,'/* '+html.escape(new)+' */')
oldaside=re.search(r'<aside data-editorial="provenance">.*?</aside>',out,re.S)[0]
newaside='''<aside data-editorial="provenance"><p>固定したzlib 1.3.2の原文全体を整形した英語定本からの非公式な日本語訳です。原資料：zlib.h。<a href="https://zlib.net/zlib-1.3.2.tar.gz">公式配布物</a>のSHA-256：<code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>。原資料のSHA-256：<code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>。原文の通知は固定原資料と下記の英語原文に保持しています。この整形版と翻訳は非公式です。</p><p><a href="../../02-appendix/05-license/">ライセンス原文の全文</a>。本文の外にあるソース参照（deflate.c、zutil.c、test/example.c、test/minigzip.c、ChangeLog、contribなど）は、固定した公式配布物内を参照してください。</p></aside>'''
out=out.replace(oldaside,newaside)
original=json.loads((app/'meta/expected-blocks.json').read_text())['01-api/01-overview.md'][0]
out+='\n<aside data-editorial="original-notice"><details><summary>通知と導入の英語原文</summary><pre>'+html.escape(original)+'</pre></details></aside>\n'
# Preserve every non-comment byte of C fragments and all original links/anchors.
code=lambda s:[html.unescape(x) for x in re.findall(r'<pre><code>(.*?)</code></pre>',s,re.S)]
strip=lambda s:re.sub(r'/\*.*?\*/','',s,flags=re.S)
assert [strip(x) for x in code(en.read_text())]==[strip(x) for x in code(out)]
f=app/'src/content/docs/v1-3-2/ja/01-api/01-overview.md';f.parent.mkdir(parents=True,exist_ok=True);f.write_text(out)
print(json.dumps({'page':str(f),'sha256':hashlib.sha256(f.read_bytes()).hexdigest(),'blocks':8,'codeFragments':len(code(out)),'translatedInlineComments':len(comments),'status':'draft; separate full review and build pending'}))
