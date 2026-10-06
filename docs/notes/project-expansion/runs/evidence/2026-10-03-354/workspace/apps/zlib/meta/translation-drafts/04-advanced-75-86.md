---
title: "高度な関数：翻訳中（ブロック75〜86）"
---

<aside data-editorial="draft-status"><p>ブロック75〜86の原稿です。章全体は未完了で、公開ルートから除外しています。</p></aside><aside data-editorial="source-note"><p>inflateGetHeaderの原文にはmuch eachという誤記があります。日本語では各ポインターに対する条件として訳しています。</p></aside>
<div class="zlib-document"><a id="inflateCopy" data-editorial="anchor"></a><h3 id="nav-75" data-editorial="navigation">inflateCopy</h3><div data-zlib-block="75"><pre><code>

ZEXTERN int ZEXPORT inflateCopy(z_streamp dest,
                                z_streamp source);
</code></pre></div><div data-zlib-block="76"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     出力先ストリームを元ストリームの完全なコピーに設定します。

     大きなストリームへランダムアクセスする場合に役立ちます。最初にストリームを
   読み進める際に、inflateの状態を定期的に記録しておけば、ランダムアクセス時に
   それらの地点からinflateを再開できます。

     <a href="./#inflateCopy">inflateCopy</a>は、成功時にZ_OK、メモリ不足時にZ_MEM_ERROR、元ストリーム状態が
   不整合な場合（zallocがZ_NULLなど）にZ_STREAM_ERRORを返します。
   元ストリームと出力先のどちらのmsgも変更しません。
</div></div><a id="inflateReset" data-editorial="anchor"></a><h3 id="nav-77" data-editorial="navigation">inflateReset</h3><div data-zlib-block="77"><pre><code>

ZEXTERN int ZEXPORT inflateReset(z_streamp strm);
</code></pre></div><div data-zlib-block="78"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="../03-basic/#inflateEnd">inflateEnd</a>の後に<a href="../03-basic/#inflateInit">inflateInit</a>を呼び出すことと同等ですが、内部の展開状態を
   解放して再確保することはありません。ストリームは、<a href="./#inflateInit2">inflateInit2</a>で設定した可能性のある
   属性を保持します。total_in、total_out、adler、msgは初期化します。

     <a href="./#inflateReset">inflateReset</a>は、成功時にZ_OK、元ストリーム状態が不整合な場合
   （zallocやstateがZ_NULLなど）にZ_STREAM_ERRORを返します。
</div></div><a id="inflateReset2" data-editorial="anchor"></a><h3 id="nav-79" data-editorial="navigation">inflateReset2</h3><div data-zlib-block="79"><pre><code>

ZEXTERN int ZEXPORT inflateReset2(z_streamp strm,
                                  int windowBits);
</code></pre></div><div data-zlib-block="80"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="./#inflateReset">inflateReset</a>と同じですが、ラッパーとウィンドウサイズの指定も変更できます。
   windowBitsは<a href="./#inflateInit2">inflateInit2</a>と同じように解釈します。ウィンドウサイズが変わる場合は、
   ウィンドウに確保したメモリを解放し、必要になったときに<a href="../03-basic/#inflate">inflate</a>()が再確保します。

     <a href="./#inflateReset2">inflateReset2</a>は、成功時にZ_OK、元ストリーム状態が不整合な場合
   （zallocやstateがZ_NULLなど）、またはwindowBitsが不正な場合にZ_STREAM_ERRORを返します。
</div></div><a id="inflatePrime" data-editorial="anchor"></a><h3 id="nav-81" data-editorial="navigation">inflatePrime</h3><div data-zlib-block="81"><pre><code>

ZEXTERN int ZEXPORT inflatePrime(z_streamp strm,
                                 int bits,
                                 int value);
</code></pre></div><div data-zlib-block="82"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     inflateの入力ストリームへビットを挿入します。<a href="./#inflatePrime">inflatePrime</a>()を使い、バイトの途中の
   ビット位置から展開を開始するための関数です。指定したビットはnext_inからのバイトより
   先に使います。raw inflateで、<a href="./#inflateInit2">inflateInit2</a>()または<a href="./#inflateReset">inflateReset</a>()の後、最初の
   <a href="../03-basic/#inflate">inflate</a>()呼び出しより前に使うべきです。Z_BLOCKを使用して、<a href="../03-basic/#inflate">inflate</a>()の戻り値が
   deflateブロックまたはヘッダーの終端を示した後にも使えます。bitsは16以下でなければならず、
   valueの下位からその数のビットを入力へ挿入します。valueのほかのビットはゼロでなくてもよく、
   無視します。

     bitsが負なら、入力ストリームのビットバッファーを空にします。その後、<a href="./#inflatePrime">inflatePrime</a>()を
   再び呼び出してビットをバッファーへ入れられます。inflateへブロック記述を渡した後、
   符号を渡す前に、残ったビットを取り除くために使います。

     <a href="./#inflatePrime">inflatePrime</a>は、成功時にZ_OK、元ストリーム状態が不整合な場合やbitsが範囲外の
   場合にZ_STREAM_ERRORを返します。inflateがヘッダー、トレーラー、非圧縮ブロックの長さを
   処理している途中なら、ビットバッファーには8ビットしか空きがない可能性があります。
   その場合、bits &gt; 8は範囲外とみなします。ただし、上記の方法で使う場合には、挿入用の
   空きが常に16ビットあります。前述の説明のとおり、inflateは戻る際にビットバッファー内の
   ビット数をdata_typeへ記録します。32からその数を引いた値が、挿入できるビット数です。
   <a href="./#inflatePrime">inflatePrime</a>は、バッファー内の新しいビット数でdata_typeを更新しません。
</div></div><a id="inflateMark" data-editorial="anchor"></a><h3 id="nav-83" data-editorial="navigation">inflateMark</h3><div data-zlib-block="83"><pre><code>

ZEXTERN long ZEXPORT inflateMark(z_streamp strm);
</code></pre></div><div data-zlib-block="84"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     戻り値の下位16ビットに1つ、残りの上位ビットにもう1つ、合計2つの値を返します。
   上位の値は戻り値を16ビット右へシフトして得ます。上位の値が-1、下位の値が0なら、
   <a href="../03-basic/#inflate">inflate</a>()はブロック外の情報をデコードしています。上位の値が-1、下位の値が0でなければ、
   inflateは非圧縮ブロックの途中にあり、下位の値は入力からまだコピーする必要のあるバイト数です。
   上位の値が-1でなければ、処理中の符号（リテラルまたは長さと距離の組）の入力内の位置が、
   現在のビット位置から何ビット前にあるかを表します。この場合、下位の値はその符号について
   すでに出力したバイト数です。

     inflateが符号のデコードを完了するための入力を待っている場合、またはデコードは
   完了したがリテラルや一致データを書き出すための出力領域を待っている場合、符号は処理中です。

     <a href="./#inflateMark">inflateMark</a>()は、ランダムアクセスのために入力データ内の位置（ビット単位の場合も
   あります）を記録し、符号の出力がランダムアクセス用ブロックの境界をまたぐ場合を把握するために
   使います。入力ストリーム内の現在位置は、inflateのZ_BLOCKフラッシュ引数の説明のとおり、
   avail_inとdata_typeから求められます。

     <a href="./#inflateMark">inflateMark</a>は上記の値を返します。指定した元ストリーム状態が不整合なら-65536を返します。
</div></div><a id="inflateGetHeader" data-editorial="anchor"></a><h3 id="nav-85" data-editorial="navigation">inflateGetHeader</h3><div data-zlib-block="85"><pre><code>

ZEXTERN int ZEXPORT inflateGetHeader(z_streamp strm,
                                     gz_headerp head);
</code></pre></div><div data-zlib-block="86"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="./#inflateGetHeader">inflateGetHeader</a>()は、指定した<a href="../01-overview/#gz_header">gz_header</a>構造体へgzipヘッダー情報を保存するよう
   要求します。<a href="./#inflateInit2">inflateInit2</a>()または<a href="./#inflateReset">inflateReset</a>()の後、最初の<a href="../03-basic/#inflate">inflate</a>()呼び出しより前に
   <a href="./#inflateGetHeader">inflateGetHeader</a>()を呼び出せます。<a href="../03-basic/#inflate">inflate</a>()がgzipストリームを処理する間、ヘッダーの
   完了まではhead-&gt;doneは0で、完了時に1へ設定します。zlibストリームをデコードしている場合は、
   gzipヘッダー情報が得られないことを示すためhead-&gt;doneを-1に設定します。Z_BLOCKまたはZ_TREESを
   使えば、ヘッダー処理が完了した直後、実データの展開前に<a href="../03-basic/#inflate">inflate</a>()を戻らせられます。

     text、time、xflags、osフィールドにはgzipヘッダーの内容が入ります。ヘッダーCRCがあれば
   hcrcを真に設定します。（doneが1ならヘッダーCRCは有効でした。）extra、name、commentの各ポインターは
   Z_NULLか、ヘッダーの情報を保存する領域を指していなければなりません。extraがZ_NULLでなければ、
   extra_maxにはextraへ書き込める最大バイト数を指定します。doneが真になれば、extra_lenには実際の
   extraフィールドの長さが入り、extraにはextraフィールドが入ります。extra_maxがextra_lenより小さい
   場合は、その領域に収まる部分だけが入ります。nameがZ_NULLでなければ、終端のゼロを含めて最大
   name_max文字を書き込みます。commentがZ_NULLでなければ、終端のゼロを含めて最大comm_max文字を
   書き込みます。終端のゼロがないことから、nameやcommentが指定した領域に収まらなかったと判断できます。
   extra、name、commentのいずれかがヘッダーに存在しなければ、そのフィールドのポインターをZ_NULLへ
   設定します。これにより、返された構造体を<a href="./#deflateSetHeader">deflateSetHeader</a>()に渡してヘッダーを複製できます。
   それらのフィールドが初めに確保済みメモリを指していた場合は、後で解放できるように、
   アプリケーションがそのポインターを別の場所へ保存しておく必要があります。

     <a href="./#inflateGetHeader">inflateGetHeader</a>を使わない場合、ヘッダー情報は単に破棄します。ヘッダーは、
   ヘッダーCRCがあればそれも含めて、常に妥当性を検査します。<a href="./#inflateReset">inflateReset</a>()は、ヘッダー情報を
   破棄する状態へ処理を戻します。次のgzipストリームのヘッダーを取得するには、アプリケーションが
   <a href="./#inflateGetHeader">inflateGetHeader</a>()を再び呼び出す必要があります。

     <a href="./#inflateGetHeader">inflateGetHeader</a>は、成功時にZ_OK、元ストリーム状態が不整合ならZ_STREAM_ERRORを返します。
</div></div></div>
