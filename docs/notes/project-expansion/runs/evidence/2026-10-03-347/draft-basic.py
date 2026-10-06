from pathlib import Path
import re
app=Path('/private/tmp/libx-zlib-import-20261003/apps/zlib');en=app/'src/content/docs/v1-3-2/en/01-api/03-basic.md';s=en.read_text().replace('title: "Basic functions"','title: "基本関数"')
p={24:' 基本関数 ',26:''' アプリケーションは、<a href="./#zlibVersion">zlibVersion</a>とZLIB_VERSIONを比較して整合性を確認できます。
   先頭文字が異なる場合、実際に使用するライブラリコードは、アプリケーションが使用する
   <a href="../01-overview/">zlib.h</a>ヘッダーファイルと互換性がありません。
   この検査は<a href="./#deflateInit">deflateInit</a>と<a href="./#inflateInit">inflateInit</a>が自動的に行います。
 ''',28:'''

     圧縮用の内部ストリーム状態を初期化します。呼び出し側は事前にzalloc、zfree、opaqueを
   初期化しなければなりません。zallocとzfreeがZ_NULLの場合、<a href="./#deflateInit">deflateInit</a>は
   既定の確保関数を使うよう更新します。total_in、total_out、adler、msgを初期化します。

     圧縮レベルはZ_DEFAULT_COMPRESSIONまたは0〜9でなければなりません。
   1は速度優先、9は圧縮率優先、0は圧縮なしです（入力を単にブロック単位でコピーします）。
   Z_DEFAULT_COMPRESSIONは速度と圧縮率の既定の折衷を要求します（現在はレベル6に相当します）。

     <a href="./#deflateInit">deflateInit</a>は、成功時にZ_OK、メモリ不足時にZ_MEM_ERROR、
   levelが有効な圧縮レベルでない場合にZ_STREAM_ERROR、zlibライブラリの版（zlib_version）が
   呼び出し側の想定する版（ZLIB_VERSION）と互換性がない場合にZ_VERSION_ERRORを返します。
   エラーメッセージがない場合、msgはnullになります。<a href="./#deflateInit">deflateInit</a>自体は圧縮せず、
   圧縮は<a href="./#deflate">deflate</a>()が行います。
''',30:'''
    deflateは可能な限りデータを圧縮し、入力バッファーが空になるか出力バッファーが満杯に
  なると停止します。フラッシュを強制した場合を除き、出力を生成せずに入力を読み込むことで、
  出力に遅延が生じることがあります。

    詳細な動作は次のとおりです。deflateは以下の一方または両方を行います。

  - next_inから追加の入力を圧縮し、next_inとavail_inを更新します。
    出力バッファーの空きが足りず入力をすべて処理できない場合も、next_inとavail_inを更新し、
    次の<a href="./#deflate">deflate</a>()呼び出しでその位置から処理を再開します。

  - next_outから追加の出力を生成し、next_outとavail_outを更新します。
    flushが0以外なら、この動作を強制します。頻繁なフラッシュの強制は圧縮率を下げるので、
    この引数は必要な場合だけ設定するべきです。flushが0でも出力が生成されることがあります。

    <a href="./#deflate">deflate</a>()を呼び出す前に、入力の追加、出力の取り出し、またはその両方を行い、
  avail_inまたはavail_outを更新して、少なくとも一方の動作が可能であることを確認するべきです。
  呼び出し前のavail_outは決して0にするべきではありません。圧縮出力は任意の時点で取り出せます。
  例えば出力バッファーが満杯（avail_out == 0）のときや、<a href="./#deflate">deflate</a>()の各呼び出し後です。
  <a href="./#deflate">deflate</a>がZ_OKを返し、avail_outが0なら、保留中の出力が残っている可能性があるため、
  出力領域を空けてから再び呼び出さなければなりません。必要に応じて、この場合に追加の出力が
  あるかを調べられる<a href="../04-advanced/#deflatePending">deflatePending</a>()も参照してください。

    通常、flushはZ_NO_FLUSHに設定します。圧縮率を最大化するため、出力前にどれだけの
  データを蓄積するかをdeflateが決められます。

    flushがZ_SYNC_FLUSHなら、保留中の出力をすべて出力バッファーへフラッシュし、
  出力をバイト境界にそろえます。これにより展開側は、それまでに利用可能な入力データを
  すべて取得できます。特に、呼び出し前に十分な出力領域を確保していれば、呼び出し後の
  avail_inは0です。フラッシュは圧縮アルゴリズムによって圧縮率を下げることがあるため、
  必要な場合だけ使うべきです。現在のdeflateブロックを完了し、空の非圧縮ブロックを続けます。
  このブロックは3ビットと次のバイト境界までの詰め物ビット、その後の4バイト（00 00 ff ff）です。

    flushがZ_PARTIAL_FLUSHなら、保留中の出力をすべて出力バッファーへフラッシュしますが、
  バイト境界にはそろえません。Z_SYNC_FLUSHと同様、それまでの入力データすべてを展開側が
  利用できます。現在のdeflateブロックを完了し、10ビット長の空の固定符号ブロックを続けます。
  これにより、展開側が空の固定符号ブロックの前のブロックを完了するために十分なバイトが
  出力されることを保証します。

    flushがZ_BLOCKなら、Z_SYNC_FLUSHと同様にdeflateブロックを完了して出力しますが、
  バイト境界にはそろえません。現在のブロックの最大7ビットを保留し、次のdeflateブロックが
  完了した後に次のバイトとして書き込みます。この場合、この時点では、圧縮側へ渡したデータを
  展開し終えるだけのビットが展開側に渡らないことがあり、次のブロックの出力を待つ必要が
  生じることがあります。deflateブロックの出力を制御する高度なアプリケーション向けです。

    flushがZ_FULL_FLUSHなら、Z_SYNC_FLUSHと同様に出力をすべてフラッシュし、圧縮状態を
  リセットします。以前の圧縮データが破損している場合やランダムアクセスを行いたい場合に、
  この位置から展開を再開できます。Z_FULL_FLUSHを頻繁に使うと圧縮率が大きく下がり得ます。

    <a href="./#deflate">deflate</a>がavail_out == 0で戻った場合、フラッシュが完了するまで、
  同じflush値と追加の出力領域（avail_outを更新）で再び呼び出さなければなりません。
  完了時には<a href="./#deflate">deflate</a>は0以外のavail_outで戻ります。
  Z_FULL_FLUSHまたはZ_SYNC_FLUSHでは、avail_out == 0で<a href="./#deflate">deflate</a>()を再び呼ぶ際に
  フラッシュマーカーが繰り返されないよう、マーカーの開始時にavail_outが6より大きいことを
  確認してください。

    flushがZ_FINISHなら、保留中の入力を処理し、保留中の出力をフラッシュします。
  十分な出力領域があれば<a href="./#deflate">deflate</a>はZ_STREAM_ENDを返します。
  <a href="./#deflate">deflate</a>がZ_OKまたはZ_BUF_ERRORを返した場合、Z_STREAM_ENDまたはエラーを返すまで、
  Z_FINISHと追加の出力領域（avail_outを更新）で再び呼び出さなければなりません。
  その際、入力データを追加してはいけません。Z_STREAM_END後に可能な操作は、
  <a href="../04-advanced/#deflateReset">deflateReset</a>または<a href="./#deflateEnd">deflateEnd</a>だけです。

    圧縮全体を1回で行う場合、<a href="./#deflateInit">deflateInit</a>後の最初のdeflate呼び出しで
  Z_FINISHを使えます。1回で完了するには、avail_outが後述の<a href="../04-advanced/#deflateBound">deflateBound</a>の
  戻り値以上でなければなりません。この場合、deflateは必ずZ_STREAM_ENDを返します。
  出力領域が足りなければZ_STREAM_ENDを返さず、上記のように再び呼び出さなければなりません。

    <a href="./#deflate">deflate</a>()はstrm-&gt;adlerを、これまでに読み込んだ全入力（total_inバイト）の
  Adler-32チェックサムに設定します。gzipストリームを生成する場合は、これまでの入力の
  CRC-32チェックサムになります（後述の<a href="../04-advanced/#deflateInit2">deflateInit2</a>を参照）。

    <a href="./#deflate">deflate</a>()は、入力のデータ型を適切に推定できる場合、strm-&gt;data_typeを
  Z_BINARYまたはZ_TEXTへ更新することがあります。判断できなければバイナリーと見なします。
  このフィールドは情報提供だけを目的とし、圧縮アルゴリズムには一切影響しません。

    <a href="./#deflate">deflate</a>()は、処理が進んだ場合（入力を追加処理したか出力を追加生成した場合）に
  Z_OK、全入力を消費して全出力を生成した場合にZ_STREAM_END（flushがZ_FINISHの場合のみ）、
  ストリーム状態が不整合の場合にZ_STREAM_ERROR（例えばnext_inかnext_outがZ_NULL、または
  アプリケーションが誤って状態を上書きした場合）、処理を進められない場合にZ_BUF_ERROR
  （例えばavail_inまたはavail_outが0の場合）を返します。Z_BUF_ERRORは致命的ではありません。
  入力と出力領域を追加して<a href="./#deflate">deflate</a>()を再び呼び出せば、圧縮を続けられます。
''',32:'''
     このストリーム用に動的に確保したデータ構造をすべて解放します。
   未処理の入力を破棄し、保留中の出力はフラッシュしません。

     <a href="./#deflateEnd">deflateEnd</a>は、成功時にZ_OK、ストリーム状態が不整合ならZ_STREAM_ERROR、
   ストリームを早すぎる段階で解放した場合（入力や出力の一部を破棄した場合）にZ_DATA_ERRORを
   返します。エラー時はmsgが設定されることがありますが、静的文字列を指します。
   この文字列を解放してはいけません。
''',34:'''

     展開用の内部ストリーム状態を初期化します。呼び出し側は事前にnext_in、avail_in、
   zalloc、zfree、opaqueを初期化しなければなりません。現在のinflateは渡された入力を
   読み込まず、消費もしません。スライディングウィンドウの確保は最初のinflate呼び出しまで
   遅延します（その最初の呼び出しで展開が完了しない場合）。zallocとzfreeがZ_NULLなら、
   <a href="./#inflateInit">inflateInit</a>は既定の確保関数を使うよう更新します。
   total_in、total_out、adler、msgを初期化します。

     <a href="./#inflateInit">inflateInit</a>は、成功時にZ_OK、メモリ不足時にZ_MEM_ERROR、ライブラリの版が
   呼び出し側の想定する版と互換性がない場合にZ_VERSION_ERROR、構造体へのnullポインターなど
   引数が不正な場合にZ_STREAM_ERRORを返します。エラーメッセージがなければmsgはnullです。
   <a href="./#inflateInit">inflateInit</a>自体は展開せず、実際の展開は<a href="./#inflate">inflate</a>()が行います。
   そのためnext_in、avail_in、next_out、avail_outは使用せず、変更もしません。
   現在の<a href="./#inflateInit">inflateInit</a>()はヘッダー情報を処理せず、
   <a href="./#inflate">inflate</a>()の呼び出しまで遅延します。
''',36:'''
    inflateは可能な限りデータを展開し、入力バッファーが空になるか出力バッファーが
  満杯になると停止します。フラッシュを強制した場合を除き、出力を生成せず入力を読み込む
  ことで、出力に遅延が生じることがあります。

    詳細な動作は次のとおりです。inflateは以下の一方または両方を行います。

  - next_inから追加の入力を展開し、next_inとavail_inを更新します。
    出力バッファーの空きが足りず入力をすべて処理できない場合も両者を更新し、
    次の<a href="./#inflate">inflate</a>()呼び出しでその位置から処理を再開します。

  - next_outから追加の出力を生成し、next_outとavail_outを更新します。
    <a href="./#inflate">inflate</a>()は、入力データまたは出力領域がなくなるまで可能な限り出力します
    （flush引数については後述します）。

    <a href="./#inflate">inflate</a>()を呼ぶ前に、入力の追加、出力の取り出し、またはその両方を行い、
  next_*とavail_*を更新して、少なくとも一方の動作が可能であることを確認するべきです。
  <a href="./#inflate">inflate</a>()の呼び出し側が、利用可能な入力と出力領域の両方を用意しなければ、
  処理が進まないことがあります。展開済み出力は任意の時点で取り出せます。例えば、
  出力バッファーが満杯（avail_out == 0）のときや、<a href="./#inflate">inflate</a>()の各呼び出し後です。
  <a href="./#inflate">inflate</a>がZ_OKを返し、avail_outが0なら、保留中の出力が残っている可能性があるため、
  出力領域を空けてから再び呼び出さなければなりません。

    <a href="./#inflate">inflate</a>()のflushにはZ_NO_FLUSH、Z_SYNC_FLUSH、Z_FINISH、Z_BLOCK、Z_TREESを使えます。
  Z_SYNC_FLUSHは<a href="./#inflate">inflate</a>()に、可能な限り出力バッファーへフラッシュするよう要求します。
  Z_BLOCKは、次のdeflateブロック境界に到達した時点で<a href="./#inflate">inflate</a>()を停止させます。
  zlibまたはgzip形式のデコードでは、<a href="./#inflate">inflate</a>()はヘッダー直後、最初のブロックの前で
  直ちに戻ります。raw inflateでは、<a href="./#inflate">inflate</a>()は最初のブロックを処理し、
  その終端に到達したとき、またはデータが尽きたときに戻ります。

    Z_BLOCKはdeflateストリームの追記や結合を支援します。そのため、<a href="./#inflate">inflate</a>()は戻る際に
  strm-&gt;data_typeへ、strm-&gt;next_inから取り込んだ入力中の未使用ビット数を常に設定します。
  <a href="./#inflate">inflate</a>()がdeflateストリームの最終ブロックをデコード中なら64を加算し、
  <a href="./#inflate">inflate</a>()がブロック終端符号のデコード直後、またはヘッダー全体をデコードして
  deflateストリームの先頭バイトの直前に到達した直後に戻ったなら128を加算します。
  そのブロックの非圧縮データすべてをstrm-&gt;next_outへ書き込むまで、ブロック終端は示しません。
  未使用ビット数は一般に7を超えることがあります。ただしdata_typeのビット7が立っている場合は
  8未満です。どのflush指定でも<a href="./#inflate">inflate</a>()が戻るたびにこのようにdata_typeを設定するので、
  現在消費している入力の量をビット単位で求めるために使えます。

    Z_TREESはZ_BLOCKと同様に動作しますが、各deflateブロックのヘッダー終端に到達した時点、
  つまりそのブロックの実データをデコードする前にも戻ります。これにより、呼び出し側は
  deflateブロック内のランダムアクセスに後で使うため、ヘッダーの長さを求められます。
  <a href="./#inflate">inflate</a>()がdeflateブロックのヘッダー終端直後に戻った場合、strm-&gt;data_typeに256を加算します。

    通常、<a href="./#inflate">inflate</a>()はZ_STREAM_ENDまたはエラーを返すまで呼び出すべきです。
  ただし、展開全体を1回のinflate呼び出しで行う場合、flushにはZ_FINISHを設定するべきです。
  この場合、保留中の入力をすべて処理し、保留中の出力をすべてフラッシュします。
  完了するには、avail_outが展開後データ全体を保持できる大きさでなければなりません。
  この目的のため、圧縮側が非圧縮データのサイズを保存している場合があります。
  1回での展開にZ_FINISHは必須ではありませんが、その1回の<a href="./#inflate">inflate</a>()で高速な方法を
  使えることを通知するために使えます。またZ_FINISHは、ストリームが完了するなら
  スライディングウィンドウを維持しないよう通知し、メモリ使用量を減らします。
  ストリーム全体が渡されていないか、出力領域が不足して完了しなかった場合はウィンドウを
  確保し、Z_NO_FLUSHを使ったかのように<a href="./#inflate">inflate</a>()を再び呼んで処理を続けられます。

    この実装の<a href="./#inflate">inflate</a>()は常に可能な限り出力バッファーへフラッシュし、最初の呼び出しでは
  常に高速な方法を使います。したがって、この実装でflushが影響するのは、後述のような
  <a href="./#inflate">inflate</a>()の戻り値、Z_BLOCKまたはZ_TREESにより<a href="./#inflate">inflate</a>()が早期に戻る場合、
  Z_FINISHにより<a href="./#inflate">inflate</a>()がスライディングウィンドウのメモリ確保を避ける場合です。

    呼び出し後に事前設定辞書が必要な場合（後述の<a href="../04-advanced/#inflateSetDictionary">inflateSetDictionary</a>を参照）、
  inflateはstrm-&gt;adlerを圧縮側が選んだ辞書のAdler-32チェックサムに設定し、Z_NEED_DICTを返します。
  それ以外の場合は、これまでの全出力（total_outバイト）のAdler-32チェックサムをstrm-&gt;adlerに
  設定し、後述のZ_OK、Z_STREAM_END、またはエラーコードを返します。ストリーム終端で
  <a href="./#inflate">inflate</a>()は算出したAdler-32を圧縮側が保存した値と比較し、一致する場合だけZ_STREAM_ENDを返します。

    <a href="./#inflate">inflate</a>()は、zlibラッパーまたはgzipラッパー付きのdeflateデータを展開し、検査できます。
  <a href="../04-advanced/#inflateInit2">inflateInit2</a>()での初期化時に要求した場合は、ヘッダー種別を自動検出します。
  <a href="../04-advanced/#inflateGetHeader">inflateGetHeader</a>()を使わない限り、gzipヘッダーの情報は保持しません。
  gzipラッパー付きデータの処理時、strm-&gt;adler32にはこれまでの出力のCRC-32を設定します。
  CRC-32をgzipトレーラーと照合し、非圧縮データの長さも2^32を法として照合します。

    <a href="./#inflate">inflate</a>()は、処理が進んだ場合（入力の追加処理または出力の追加生成）にZ_OK、
  圧縮データの終端に到達し展開済み出力すべてを生成した場合にZ_STREAM_END、この時点で
  事前設定辞書が必要ならZ_NEED_DICT、入力が破損している場合にZ_DATA_ERRORを返します。
  入力の破損とは、zlib形式に従わない入力ストリームやチェック値の誤りであり、その場合
  strm-&gt;msgはより具体的なエラー文字列を指します。ストリーム構造が不整合ならZ_STREAM_ERROR
  （next_inかnext_outがZ_NULL、またはアプリケーションが誤って状態を上書きした場合など）、
  メモリ不足ならZ_MEM_ERROR、処理を進められない場合、またはZ_FINISHで出力領域が
  足りない場合はZ_BUF_ERRORを返します。Z_BUF_ERRORは致命的ではありません。
  入力と出力領域を追加して<a href="./#inflate">inflate</a>()を再び呼び出せば、展開を続けられます。
  Z_DATA_ERRORの場合、データの部分復旧を試みるなら、続いて<a href="../04-advanced/#inflateSync">inflateSync</a>()を
  呼び出し、正常な圧縮ブロックを探せます。
''',38:'''
     このストリーム用に動的に確保したデータ構造をすべて解放します。
   未処理の入力を破棄し、保留中の出力はフラッシュしません。

     <a href="./#inflateEnd">inflateEnd</a>は、成功時にZ_OK、ストリーム状態が不整合ならZ_STREAM_ERRORを返します。
'''}
for k,v in p.items():
 if k==24:pat=rf'(<div data-zlib-block="{k}"><h2[^>]*>).*?(</h2></div>)'
 elif k in (28,34):pat=rf'(<div data-zlib-block="{k}">.*?</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">).*?(</div></div>)'
 else:pat=rf'(<div data-zlib-block="{k}"><div style="white-space:pre-wrap;overflow-wrap:anywhere">).*?(</div></div>)'
 s,n=re.subn(pat,lambda m:m[1]+v+m[2],s,flags=re.S);assert n==1,k
provenance=re.search(r'<aside data-editorial="provenance">.*?</aside>',(app/'src/content/docs/v1-3-2/ja/01-api/02-constants.md').read_text(),re.S)[0]
s=re.sub(r'<aside data-editorial="provenance">.*?</aside>',lambda m:provenance,s,flags=re.S)
s=s.replace('Original-source note: the stream structure defines adler; the inflate comment uses strm-&gt;adler32. Both original forms are preserved.','原資料についての注記：ストリーム構造体のフィールド名はadlerですが、inflateの説明ではstrm-&gt;adler32と記載されています。両方の原文表記を保持しています。')
f=app/'src/content/docs/v1-3-2/ja/01-api/03-basic.md';f.write_text(s);print(f)
