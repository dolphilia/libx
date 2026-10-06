---
title: "gzipファイルアクセス関数"
licenseSource: zlib-api
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>固定したzlib 1.3.2の原文全体を整形した英語定本からの非公式な日本語訳です。原資料：zlib.h。<a href="https://zlib.net/zlib-1.3.2.tar.gz">公式配布物</a>のSHA-256：<code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>。原資料のSHA-256：<code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>。原文の通知は固定原資料と<a href="../01-overview/">概要ページの英語原文</a>に保持しています。この整形版と翻訳は非公式です。</p><p><a href="../../02-appendix/05-license/">ライセンス原文の全文</a>。本文の外にあるソース参照（deflate.c、zutil.c、test/example.c、test/minigzip.c、ChangeLog、contribなど）は、固定した公式配布物内を参照してください。</p></aside><aside data-editorial="source-note"><p>原資料についての注記：gzopenの原文にはENONBLOCKと記載されており、その表記を保持しています。gzgetcのノンブロッキングに関する段落では、再試行先としてgzreadを記載しています。原文どおり保持しています。</p></aside>
<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="110"><h2 id="section-110" data-source-role="section"> gzipファイルアクセス関数 </h2></div><div data-zlib-block="111"><pre><code>

</code></pre></div><div data-zlib-block="112"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     このライブラリは、「gz」で始まる関数を使い、stdioに似たインターフェイスで
   gzip（.gz）形式のファイルの読み書きに対応します。gzip形式はzlib形式とは異なります。
   gzipはdeflateストリームをRFC 1952に記載されたgzipラッパーで包んだものです。
</div></div><a id="gzFile" data-editorial="anchor"></a><div data-zlib-block="113"><pre><code>

typedef struct gzFile_s *gzFile;    /* 一部が不透明なgzipファイル記述子 */

</code></pre></div><a id="gzopen" data-editorial="anchor"></a><h3 id="nav-114" data-editorial="navigation">gzopen</h3><div data-zlib-block="114"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN gzFile ZEXPORT gzopen(const char *path, const char *mode);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     pathにあるgzip（.gz）ファイルを、読み込みと展開、または圧縮と書き込みのために開きます。
   modeはfopenと同様に「rb」「wb」などを指定しますが、圧縮レベル（「wb9」）や方針も含められます。
   フィルター後のデータには「wb6f」のように'f'、Huffmanのみの圧縮には「wb1h」のように'h'、
   ランレングス符号化には「wb1R」のように'R'、固定符号の圧縮には「wb9F」のように'F'を指定します。
   （strategyの詳細は<a href="../04-advanced/#deflateInit2">deflateInit2</a>の説明を参照してください。）'T'は圧縮せず、gzip形式も
   使わない透過的な書き込み・追記を要求します。'T'で透過的な読み込みを強制することはできません。
   先頭にgzipヘッダーがなければ、自動的に透過的な読み込みを行います。'G'オプションで透過的な
   読み込みを無効にできます。その場合、gzipヘッダーがなければエラーを返します。
   'N'はノンブロッキングモードでファイルを開きます。

     'w'の代わりに'a'を使うと、書き込むgzipストリームをファイルへ追記するよう要求できます。
   同じgzipファイルの読み書きには対応していないため、'+'はエラーになります。
   書き込み時に'x'を加えると排他的にファイルを作成し、すでに存在すれば失敗します。
   対応するシステムでは、読み書き時に'e'を加えると、execve()呼び出し時にファイルを閉じる
   フラグを設定します。

     これらの関数はgzipと同様、ファイル内に連続するgzipストリームを読み、デコードします。
   <a href="./#gzopen">gzopen</a>()の追記機能でそのようなファイルを作れます。（別の方法は<a href="./#gzflush">gzflush</a>()も参照してください。）
   追記時の<a href="./#gzopen">gzopen</a>は、ファイルの先頭がgzipストリームかどうかを検査せず、追記開始位置を
   決めるためにgzipストリームの終端を探すこともしません。<a href="./#gzopen">gzopen</a>は既存ファイルへ
   gzipストリームを単に追記します。

     <a href="./#gzopen">gzopen</a>はgzip形式でないファイルの読み込みにも使えます。その場合、<a href="./#gzread">gzread</a>は
   展開せず、ファイルから直接読み込みます。読み込み時は、gzipヘッダーの識別用2バイトを
   調べて自動的に判別します。

     <a href="./#gzopen">gzopen</a>は、ファイルを開けなかった場合、<a href="./#gzFile">gzFile</a>状態を確保するメモリが足りない場合、
   または不正なmode（'r'、'w'、'a'のいずれもない、または'+'がある）を指定した場合にNULLを返します。
   <a href="./#gzopen">gzopen</a>の失敗理由がファイルを開けなかったことかどうかは、errnoを調べて判別できます。
   ノンブロッキングのためmodeに'N'があると、ブロックを避けるためopen()自体が失敗する場合があります。
   その場合、<a href="./#gzopen">gzopen</a>()はNULLを返し、errnoはEAGAINまたはENONBLOCKになります。
   その後、<a href="./#gzopen">gzopen</a>()を再試行できます。ファイルを開く際にはブロックしたい場合、
   O_NONBLOCKなしのopen()を使い、そのファイル記述子と'N'を含むmodeを<a href="./#gzdopen">gzdopen</a>()へ渡せます。
   これによりノンブロッキングに設定します。
</div></div><a id="gzdopen" data-editorial="anchor"></a><h3 id="nav-115" data-editorial="navigation">gzdopen</h3><div data-zlib-block="115"><pre><code>

ZEXTERN gzFile ZEXPORT gzdopen(int fd, const char *mode);
</code></pre></div><div data-zlib-block="116"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     ファイル記述子fdに<a href="./#gzFile">gzFile</a>を関連付けます。ファイル記述子はopen、dup、creat、pipe、
   fileno（すでにfopenで開いたファイルの場合）などの呼び出しから得ます。
   modeは<a href="./#gzopen">gzopen</a>と同じです。modeの'e'はexecve()呼び出し時にファイルを閉じるfdのフラグを
   設定します。'N'はfdのノンブロッキングフラグを設定します。

     返された<a href="./#gzFile">gzFile</a>に対する次の<a href="./#gzclose">gzclose</a>は、fclose(fdopen(fd, mode))と同様、ファイル記述子fdも
   閉じます。fdを開いたままにするには、fd = dup(fd_keep); gz = <a href="./#gzdopen">gzdopen</a>(fd, mode);を使ってください。
   <a href="./#gzdopen">gzdopen</a>は失敗時にfdを閉じないため、リークを避けるよう、複製した記述子を保存するべきです。
   FILE *からfileno()でファイル記述子を得る場合は、二重に閉じることを避けるためdup()を使う必要が
   あります。<a href="./#gzclose">gzclose</a>()とfclose()はどちらも関連付けられたファイル記述子を閉じるため、
   それぞれ異なる記述子が必要です。

     <a href="./#gzdopen">gzdopen</a>は、<a href="./#gzFile">gzFile</a>状態を確保するメモリが足りない場合、不正なmode
   （'r'、'w'、'a'のいずれもない、または'+'がある）を指定した場合、またはfdが-1の場合にNULLを返します。
   次のgz*による読み込み、書き込み、シーク、クローズまでは記述子を使わないため、
   <a href="./#gzdopen">gzdopen</a>はfdが-1でない限り、不正な記述子を検出しません。
</div></div><a id="gzbuffer" data-editorial="anchor"></a><h3 id="nav-117" data-editorial="navigation">gzbuffer</h3><div data-zlib-block="117"><pre><code>

ZEXTERN int ZEXPORT gzbuffer(gzFile file, unsigned size);
</code></pre></div><div data-zlib-block="118"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     fileに対してこのライブラリの関数が使う内部バッファーのサイズをsizeに設定します。
   既定のサイズは8192バイトです。<a href="./#gzopen">gzopen</a>()または<a href="./#gzdopen">gzdopen</a>()の後、ファイルを読み書きする
   ほかの呼び出しより前に呼び出さなければなりません。バッファーメモリの確保は常に最初の読み書きまで
   遅延します。指定サイズの3倍のバッファー領域を確保します。例えば64Kや128Kバイトへ大きくすると、
   展開（読み込み）の速度が目に見えて上がります。

     新しいバッファーサイズは、<a href="./#gzprintf">gzprintf</a>()の最大長にも影響します。

     <a href="./#gzbuffer">gzbuffer</a>()は、成功時に0、呼び出しが遅すぎた場合などの失敗時に-1を返します。
</div></div><a id="gzsetparams" data-editorial="anchor"></a><h3 id="nav-119" data-editorial="navigation">gzsetparams</h3><div data-zlib-block="119"><pre><code>

ZEXTERN int ZEXPORT gzsetparams(gzFile file, int level, int strategy);
</code></pre></div><div data-zlib-block="120"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     fileの圧縮レベルと方針を動的に更新します。引数の意味は<a href="../04-advanced/#deflateInit2">deflateInit2</a>の説明を
   参照してください。パラメーター変更を適用する前に、すでに渡されたデータをフラッシュします。

     <a href="./#gzsetparams">gzsetparams</a>は、成功時にZ_OK、書き込み用に開いていなければZ_STREAM_ERROR、
   フラッシュしたデータの書き込みエラー時にZ_ERRNO、メモリ確保エラー時にZ_MEM_ERRORを返します。
</div></div><a id="gzread" data-editorial="anchor"></a><h3 id="nav-121" data-editorial="navigation">gzread</h3><div data-zlib-block="121"><pre><code>

ZEXTERN int ZEXPORT gzread(gzFile file, voidp buf, unsigned len);
</code></pre></div><div data-zlib-block="122"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     fileから非圧縮データで最大lenバイトを読み、展開してbufへ入れます。入力ファイルがgzip形式で
   なければ、<a href="./#gzread">gzread</a>は指定したバイト数をファイルから直接バッファーへコピーします。

     入力内のgzipストリームの終端に達すると、<a href="./#gzread">gzread</a>は次のgzipストリームを探して読み込みを
   続けます。入力ファイルには任意の数のgzipストリームを連結でき、<a href="./#gzread">gzread</a>()はすべて展開します。
   gzipストリームの後にgzipストリームでないデータがあれば、その残りの不要なデータは無視し、
   エラーも返しません。

     <a href="./#gzread">gzread</a>は、同時に書き込まれているgzipファイルを読むためにも使えます。
   入力の終端に達すると、<a href="./#gzread">gzread</a>は利用可能なデータを返します。<a href="./#gzerror">gzerror</a>が返すエラーコードが
   Z_OKまたはZ_BUF_ERRORなら、<a href="./#gzclearerr">gzclearerr</a>でファイル終端表示を解除して、<a href="./#gzread">gzread</a>を再試行できます。
   Z_OKは直前の<a href="./#gzread">gzread</a>でgzipストリームが完了したことを示し、Z_BUF_ERRORは入力ファイルが
   gzipストリームの途中で終わったことを示します。不完全なgzipストリームでは<a href="./#gzread">gzread</a>は-1を
   返さないことに注意してください。このエラーは<a href="./#gzclose">gzclose</a>()まで遅延し、直前の<a href="./#gzread">gzread</a>がgzip
   ストリームの途中で終わっていればZ_BUF_ERRORを返します。代わりに、<a href="./#gzclose">gzclose</a>より前に<a href="./#gzerror">gzerror</a>で
   この状態を検出することもできます。

     <a href="./#gzread">gzread</a>はノンブロッキングデバイス上のgzipファイルを読むためにも使えます。入力が滞り、
   返せる非圧縮データがなければ、<a href="./#gzread">gzread</a>()は-1を返し、errnoはEAGAINまたはEWOULDBLOCKになります。
   その後、<a href="./#gzread">gzread</a>()を再び呼び出せます。

     <a href="./#gzread">gzread</a>は実際に読んだ非圧縮バイト数を返します。ファイル終端ではlen未満、エラー時は-1です。
   lenがintに収まらないほど大きければ何も読まず、-1を返してエラー状態をZ_STREAM_ERRORに設定します。
   エラー前にデータを読んでいれば、そのデータを使い切るまで返し、その後の次の呼び出しでエラーを示します。
</div></div><a id="gzfread" data-editorial="anchor"></a><h3 id="nav-123" data-editorial="navigation">gzfread</h3><div data-zlib-block="123"><pre><code>

ZEXTERN z_size_t ZEXPORT gzfread(voidp buf, z_size_t size, z_size_t nitems,
                                 gzFile file);
</code></pre></div><div data-zlib-block="124"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     fileから、1項目あたりsizeバイトのデータを最大nitems項目読み、展開してbufへ入れます。
   それ以外の動作は<a href="./#gzread">gzread</a>()と同じです。stdioのfread()と同じインターフェイスを、size_tの
   要求・戻り値の型で提供します。ライブラリがsize_tを定義していれば、z_size_tはsize_tと同じです。
   そうでなければ、z_size_tはポインターを収容できる符号なし整数型です。

     <a href="./#gzfread">gzfread</a>()はsizeバイトの完全な項目を読んだ数を返します。ファイル終端に達して完全な項目を
   読めなかった場合、またはエラー時には0を返します。0を返した場合は、エラーの有無を判別するために
   <a href="./#gzerror">gzerror</a>()を調べなければなりません。sizeとnitemsの積がオーバーフローしてz_size_tに収まらなければ、
   何も読まず、0を返し、エラー状態をZ_STREAM_ERRORに設定します。

     ファイル終端に達し、最後に項目の一部しかない場合（残りの非圧縮データ長がsizeの倍数でない場合）でも、
   その最後の不完全な項目をbufへ読み込み、ファイル終端フラグを設定します。読んだ不完全な項目の長さは
   提供しませんが、<a href="./#gztell">gztell</a>()の結果から推測できます。一般的なライブラリのfread()も同じ動作です。
   同時に書き込まれるファイルやノンブロッキングファイルをsize != 1で読む場合、データが失われる可能性が
   あります。その場合はsize == 1または<a href="./#gzread">gzread</a>()を使ってください。
</div></div><a id="gzwrite" data-editorial="anchor"></a><h3 id="nav-125" data-editorial="navigation">gzwrite</h3><div data-zlib-block="125"><pre><code>

ZEXTERN int ZEXPORT gzwrite(gzFile file, voidpc buf, unsigned len);
</code></pre></div><div data-zlib-block="126"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     bufにあるlenバイトの非圧縮データを圧縮してfileへ書き込みます。<a href="./#gzwrite">gzwrite</a>は書き込んだ
   非圧縮バイト数を返し、エラー時またはlenが0なら0を返します。書き込み先がノンブロッキングなら、
   <a href="./#gzwrite">gzwrite</a>()が返す書き込みバイト数は、0ではなくlen未満の場合があります。

     lenがintに収まらなければ、0を返して何も書き込みません。
</div></div><a id="gzfwrite" data-editorial="anchor"></a><h3 id="nav-127" data-editorial="navigation">gzfwrite</h3><div data-zlib-block="127"><pre><code>

ZEXTERN z_size_t ZEXPORT gzfwrite(voidpc buf, z_size_t size,
                                  z_size_t nitems, gzFile file);
</code></pre></div><div data-zlib-block="128"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     bufから、1項目あたりsizeバイトのデータをnitems項目圧縮してfileへ書き込みます。
   stdioのfwrite()と同じインターフェイスを、size_tの要求・戻り値の型で提供します。
   ライブラリがsize_tを定義していればz_size_tはsize_tと同じです。そうでなければ、z_size_tは
   ポインターを収容できる符号なし整数型です。

     <a href="./#gzfwrite">gzfwrite</a>()はsizeバイトの完全な項目を書いた数を返し、エラー時には0を返します。
   sizeとnitemsの積がオーバーフローしてz_size_tに収まらなければ、何も書かず、0を返し、
   エラー状態をZ_STREAM_ERRORに設定します。

     同時に読まれるファイルやノンブロッキングファイルをsize != 1で書く場合、項目の一部だけを
   書く可能性があり、どれだけ書かれなかったかを知る手段がないため、データが失われることがあります。
   その場合はsize == 1または<a href="./#gzwrite">gzwrite</a>()を使ってください。
</div></div><a id="gzprintf" data-editorial="anchor"></a><h3 id="nav-129" data-editorial="navigation">gzprintf</h3><div data-zlib-block="129"><pre><code>

#if defined(STDC) || defined(Z_HAVE_STDARG_H)
ZEXTERN int ZEXPORTVA gzprintf(gzFile file, const char *format, ...);
#else
ZEXTERN int ZEXPORTVA gzprintf();
#endif
</code></pre></div><div data-zlib-block="130"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     fprintfと同様、format文字列に従って引数（...）を変換、整形、圧縮してfileへ書き込みます。
   <a href="./#gzprintf">gzprintf</a>は実際に書いた非圧縮バイト数を返し、エラー時には負のzlibエラーコードを返します。
   書き込む非圧縮バイト数は8191、または<a href="./#gzbuffer">gzbuffer</a>()へ指定したバッファーサイズより1少ない値が
   上限です。呼び出し側はこの上限を超えないようにするべきです。超えた場合、<a href="./#gzprintf">gzprintf</a>()は
   何も書かずにエラー（0）を返します。

     この最後の場合には、予測不能な結果を招くバッファーオーバーフローも起こり得ます。
   ただし、安全なsnprintf()とvsnprintf()が使えなかったため、zlibを安全でないsprintf()や
   vsprintf()でコンパイルした場合に限ります。それは非ANSI Cコンパイラーの場合だけです。
   安全な関数が使えず、<a href="./#gzprintf">gzprintf</a>()を安全でないまま提供することも選べなかったため、
   <a href="./#gzprintf">gzprintf</a>()なしでzlibをビルドしている可能性もあります。その場合、<a href="./#gzprintf">gzprintf</a>()は
   Z_STREAM_ERRORを返します。これらの可能性はすべて<a href="../04-advanced/#zlibCompileFlags">zlibCompileFlags</a>()で判別できます。

     Z_BUF_ERRORを返した場合、ノンブロッキングの書き込み先が滞ったため、何も書き込まれていません。
</div></div><a id="gzputs" data-editorial="anchor"></a><h3 id="nav-131" data-editorial="navigation">gzputs</h3><div data-zlib-block="131"><pre><code>

ZEXTERN int ZEXPORT gzputs(gzFile file, const char *s);
</code></pre></div><div data-zlib-block="132"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     指定したnull終端文字列sを、終端のnull文字を除いて圧縮し、fileへ書き込みます。

     <a href="./#gzputs">gzputs</a>は書き込んだ文字数を返し、エラー時には-1を返します。
   書き込み先がノンブロッキングなら、書き込んだ文字数が文字列の長さより少ない場合があります。

     文字列の長さがintに収まらなければ、-1を返して何も書き込みません。
</div></div><a id="gzgets" data-editorial="anchor"></a><h3 id="nav-133" data-editorial="navigation">gzgets</h3><div data-zlib-block="133"><pre><code>

ZEXTERN char * ZEXPORT gzgets(gzFile file, char *buf, int len);
</code></pre></div><div data-zlib-block="134"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     fileからバイトを読み、展開してbufへ入れます。len-1文字を読むか、改行文字を読んでbufへ
   転送するか、ファイル終端に達するまで続けます。文字を読んだ場合、またはlenが1の場合、
   文字列をnull文字で終端します。ファイル終端のため文字を読めなかった場合、またはlenが1未満なら、
   バッファーは変更しません。

     <a href="./#gzgets">gzgets</a>はnull終端文字列であるbufを返し、ファイル終端またはエラー時にはNULLを返します。
   エラー前にデータを読んでいれば、そのデータを使い切るまで返し、その後の次の呼び出しで
   NULLを返してエラーを示します。

     <a href="./#gzgets">gzgets</a>は<a href="./#gzread">gzread</a>()と同様、同時に書き込まれているファイルやノンブロッキングデバイスにも
   使えます。ただし行が途中で分かれる場合があり、必要に応じた再結合はアプリケーションが行います。
</div></div><a id="gzputc" data-editorial="anchor"></a><h3 id="nav-135" data-editorial="navigation">gzputc</h3><div data-zlib-block="135"><pre><code>

ZEXTERN int ZEXPORT gzputc(gzFile file, int c);
</code></pre></div><div data-zlib-block="136"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     cをunsigned charへ変換し、圧縮してfileへ書き込みます。<a href="./#gzputc">gzputc</a>は書き込んだ値を返し、
   エラー時には-1を返します。
</div></div><a id="gzgetc" data-editorial="anchor"></a><h3 id="nav-137" data-editorial="navigation">gzgetc</h3><div data-zlib-block="137"><pre><code>

ZEXTERN int ZEXPORT gzgetc(gzFile file);
</code></pre></div><div data-zlib-block="138"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     fileから1バイトを読み、展開します。<a href="./#gzgetc">gzgetc</a>はそのバイトを返し、ファイル終端または
   エラー時には-1を返します。エラー前にデータを読んでいれば、そのデータを使い切るまで返し、
   その後の次の呼び出しで-1を返してエラーを示します。

     速度のためマクロとして実装しています。そのため、ほかの関数が行う検査をすべては行いません。
   fileがNULLかどうかも、fileが指す構造体の内容が壊されているかどうかも検査しません。

     <a href="./#gzgetc">gzgetc</a>はノンブロッキングデバイス上のgzipファイルを読むためにも使えます。
   入力が滞り、返せる非圧縮データがなければ、<a href="./#gzgetc">gzgetc</a>()は-1を返し、errnoは
   EAGAINまたはEWOULDBLOCKになります。その後、<a href="./#gzread">gzread</a>()を再び呼び出せます。
</div></div><a id="gzungetc" data-editorial="anchor"></a><h3 id="nav-139" data-editorial="navigation">gzungetc</h3><div data-zlib-block="139"><pre><code>

ZEXTERN int ZEXPORT gzungetc(int c, gzFile file);
</code></pre></div><div data-zlib-block="140"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     cをfileのストリームへ押し戻し、次の読み込みの最初の文字として読めるようにします。
   少なくとも1文字の押し戻しは常に許されます。<a href="./#gzungetc">gzungetc</a>()は押し戻した文字を返し、
   失敗時には-1を返します。cが-1なら<a href="./#gzungetc">gzungetc</a>()は失敗し、すでに押し戻した文字が
   まだ読まれていない場合も失敗する可能性があります。<a href="./#gzopen">gzopen</a>または<a href="./#gzdopen">gzdopen</a>の直後に
   <a href="./#gzungetc">gzungetc</a>を使う場合、少なくとも出力バッファーサイズ分の文字を押し戻せます。
   （前述の<a href="./#gzbuffer">gzbuffer</a>を参照してください。）<a href="./#gzseek">gzseek</a>()または<a href="./#gzrewind">gzrewind</a>()でストリームの位置を
   変えると、押し戻した文字は破棄します。

     <a href="./#gzungetc">gzungetc</a>(-1, file)は、保留中のシークを強制的に実行します。その後、要求したシークが
   ファイル終端に達していても、<a href="./#gztell">gztell</a>()は位置を報告します。これを使えば、gzipファイルを
   バッファーへ読み込まずに、非圧縮バイト数を求められます。
</div></div><a id="gzflush" data-editorial="anchor"></a><h3 id="nav-141" data-editorial="navigation">gzflush</h3><div data-zlib-block="141"><pre><code>

ZEXTERN int ZEXPORT gzflush(gzFile file, int flush);
</code></pre></div><div data-zlib-block="142"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     保留中の出力をすべてfileへフラッシュします。flushは<a href="../03-basic/#deflate">deflate</a>()の引数と同じです。
   戻り値はzlibのエラー番号です（後述の<a href="./#gzerror">gzerror</a>を参照してください）。<a href="./#gzflush">gzflush</a>を
   使えるのは書き込み時だけです。

     flushがZ_FINISHなら、残りのデータを書き込み、出力内のgzipストリームを完了します。
   再び<a href="./#gzwrite">gzwrite</a>()を呼び出すと、出力内で新しいgzipストリームを開始します。
   <a href="./#gzread">gzread</a>()は、そのように連結されたgzipストリームを読めます。

     <a href="./#gzflush">gzflush</a>は厳密に必要な場合だけ呼び出すべきです。頻繁に呼び出すと圧縮率が下がります。
</div></div><div data-zlib-block="143"><pre><code>

</code></pre></div><a id="gzseek" data-editorial="anchor"></a><h3 id="nav-144" data-editorial="navigation">gzseek</h3><div data-zlib-block="144"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN z_off_t ZEXPORT gzseek(gzFile file,
                               z_off_t offset, int whence);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     fileに対する次の<a href="./#gzread">gzread</a>または<a href="./#gzwrite">gzwrite</a>の開始位置を、whenceを基準とするoffsetへ設定します。
   offsetは非圧縮データストリーム内のバイト数です。whenceはlseek(2)と同じ定義ですが、
   SEEK_ENDには対応していません。

     読み込み用のファイルではこの関数をエミュレートしますが、極めて遅い場合があります。
   書き込み用では前方へのシークだけに対応し、<a href="./#gzseek">gzseek</a>は新しい開始位置までゼロの列を圧縮します。
   読み書きのどちらでも、実際のシークは次の読み書きまで遅延し、書き込み時にはクローズ操作でも
   実行します。

     <a href="./#gzseek">gzseek</a>は結果の位置を非圧縮ストリームの先頭からのバイト数で返し、エラー時には-1を返します。
   特に、書き込み用に開いたファイルで新しい開始位置が現在位置より前になる場合はエラーです。
</div></div><a id="gzrewind" data-editorial="anchor"></a><h3 id="nav-145" data-editorial="navigation">gzrewind</h3><div data-zlib-block="145"><pre><code>

ZEXTERN int ZEXPORT gzrewind(gzFile file);
</code></pre></div><div data-zlib-block="146"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     fileを巻き戻します。読み込み時だけ対応しています。

     <a href="./#gzrewind">gzrewind</a>(file)は(int)<a href="./#gzseek">gzseek</a>(file, 0L, SEEK_SET)と同等です。
</div></div><div data-zlib-block="147"><pre><code>

</code></pre></div><a id="gztell" data-editorial="anchor"></a><h3 id="nav-148" data-editorial="navigation">gztell</h3><div data-zlib-block="148"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN z_off_t ZEXPORT gztell(gzFile file);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     fileに対する次の<a href="./#gzread">gzread</a>または<a href="./#gzwrite">gzwrite</a>の開始位置を返します。
   位置は非圧縮データストリーム内のバイト数です。追記の場合や、<a href="./#gzdopen">gzdopen</a>()を使って
   ファイルの途中にあるgzipストリームを読む場合でも、開始時の位置は0です。

     <a href="./#gztell">gztell</a>(file)は<a href="./#gzseek">gzseek</a>(file, 0L, SEEK_CUR)と同等です。
</div></div><div data-zlib-block="149"><pre><code>

</code></pre></div><a id="gzoffset" data-editorial="anchor"></a><h3 id="nav-150" data-editorial="navigation">gzoffset</h3><div data-zlib-block="150"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN z_off_t ZEXPORT gzoffset(gzFile file);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     fileの現在の圧縮データ上の（実際の）読み書きオフセットを返します。
   このオフセットには、追記時や<a href="./#gzdopen">gzdopen</a>()で読む場合など、gzipストリームより前にある
   バイト数も含めます。読み込み時には、バッファーにある未使用の入力は含めません。
   進捗表示に使える情報です。エラー時、<a href="./#gzoffset">gzoffset</a>()は-1を返します。
</div></div><a id="gzeof" data-editorial="anchor"></a><h3 id="nav-151" data-editorial="navigation">gzeof</h3><div data-zlib-block="151"><pre><code>

ZEXTERN int ZEXPORT gzeof(gzFile file);
</code></pre></div><div data-zlib-block="152"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     読み込み中にfileのファイル終端表示が設定されていれば真（1）、それ以外は偽（0）を返します。
   終端表示を設定するのは、入力の終端を超えて読もうとして、要求量を満たせなかった場合だけです。
   そのためfeof()と同様、最後の読み込み要求が入力ファイルに残るバイト数とちょうど同じだった場合、
   読むデータがもうなくても<a href="./#gzeof">gzeof</a>()は偽を返すことがあります。
   入力ファイルのサイズがバッファーサイズの整数倍なら、これが起こります。

     <a href="./#gzeof">gzeof</a>()が真を返せば、読み込み関数はそれ以上データを返しません。ただし、<a href="./#gzclearerr">gzclearerr</a>()で
   終端表示をリセットし、前回の終端検出後に入力ファイルが大きくなっていれば、再びデータを返せます。
</div></div><a id="gzdirect" data-editorial="anchor"></a><h3 id="nav-153" data-editorial="navigation">gzdirect</h3><div data-zlib-block="153"><pre><code>

ZEXTERN int ZEXPORT gzdirect(gzFile file);
</code></pre></div><div data-zlib-block="154"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     読み込み中にfileを直接コピーしていれば真（1）、gzipストリームを展開していれば偽（0）を返します。

     空の入力ファイルにはgzipストリームがないため、<a href="./#gzdirect">gzdirect</a>()は真を返します。

     <a href="./#gzopen">gzopen</a>()または<a href="./#gzdopen">gzdopen</a>()の直後に<a href="./#gzdirect">gzdirect</a>()を使うと、gzipファイルかどうかを判別する
   読み込みのためにバッファーを確保します。そのため<a href="./#gzbuffer">gzbuffer</a>()を使う場合は、<a href="./#gzdirect">gzdirect</a>()より前に
   呼び出すべきです。同時に書き込まれる入力やノンブロッキングデバイスでは、入力が4バイト蓄積した後に
   <a href="./#gzdirect">gzdirect</a>()の答えが変わる場合があります。gzipヘッダーの有無を確認するには4バイトが必要です。
   それより前は<a href="./#gzdirect">gzdirect</a>()は真（1）を返します。

     書き込み時の<a href="./#gzdirect">gzdirect</a>()は、透過的な書き込み（<a href="./#gzopen">gzopen</a>()のmodeに「wT」）を要求した場合に
   真（1）、それ以外は偽（0）を返します。（注：書き込み時に<a href="./#gzdirect">gzdirect</a>()は必要ありません。
   透過的な書き込みは明示的に要求する必要があるため、アプリケーションは答えをすでに知っています。
   静的リンク時に<a href="./#gzdirect">gzdirect</a>()を使うと、gzipファイルの読み込みと展開に関するzlibコードを
   すべて取り込むため、望ましくない場合があります。）
</div></div><a id="gzclose" data-editorial="anchor"></a><h3 id="nav-155" data-editorial="navigation">gzclose</h3><div data-zlib-block="155"><pre><code>

ZEXTERN int ZEXPORT gzclose(gzFile file);
</code></pre></div><div data-zlib-block="156"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     必要ならfileの保留中出力をすべてフラッシュし、fileを閉じ、圧縮・展開状態を解放します。
   fileを閉じると構造体を解放するため、そのfileで<a href="./#gzerror">gzerror</a>を呼び出せなくなることに注意してください。
   同じ確保済み領域にfreeを複数回呼んではいけないのと同様、同じfileで<a href="./#gzclose">gzclose</a>を
   複数回呼び出してはいけません。

     <a href="./#gzclose">gzclose</a>は、fileが不正ならZ_STREAM_ERROR、ファイル操作エラーならZ_ERRNO、
   メモリ不足ならZ_MEM_ERROR、最後の読み込みがgzipストリームの途中で終わっていればZ_BUF_ERROR、
   成功時にはZ_OKを返します。
</div></div><a id="gzclose_w" data-editorial="anchor"></a><a id="gzclose_r" data-editorial="anchor"></a><h3 id="nav-157" data-editorial="navigation">gzclose_r</h3><div data-zlib-block="157"><pre><code>

ZEXTERN int ZEXPORT gzclose_r(gzFile file);
ZEXTERN int ZEXPORT gzclose_w(gzFile file);
</code></pre></div><div data-zlib-block="158"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="./#gzclose">gzclose</a>()と同じですが、<a href="./#gzclose_r">gzclose_r</a>()は読み込み時だけ、<a href="./#gzclose_w">gzclose_w</a>()は書き込み・追記時だけ
   使用します。<a href="./#gzclose">gzclose</a>()の代わりに使う利点は、読み込みだけなら未使用の圧縮コードを、
   書き込みだけなら未使用の展開コードをリンクせずに済むことです。<a href="./#gzclose">gzclose</a>()を使うと、静的な
   zlibライブラリへのリンク時に圧縮・展開の両方のコードをアプリケーションへ取り込みます。
</div></div><a id="gzerror" data-editorial="anchor"></a><h3 id="nav-159" data-editorial="navigation">gzerror</h3><div data-zlib-block="159"><pre><code>

ZEXTERN const char * ZEXPORT gzerror(gzFile file, int *errnum);
</code></pre></div><div data-zlib-block="160"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     fileで最後に発生したエラーのメッセージを返します。errnumがNULLでなければ、*errnumを
   zlibのエラー番号に設定します。圧縮ライブラリではなくファイルシステムでエラーが起こった場合は、
   *errnumをZ_ERRNOに設定し、アプリケーションはerrnoで正確なエラーコードを調べられます。

     アプリケーションは返された文字列を変更してはいけません。この関数を後で呼び出すと、
   以前返した文字列が無効になる場合があります。fileを閉じれば、以前に<a href="./#gzerror">gzerror</a>が返した
   文字列は使用できなくなります。

     上述の関数のうち戻り値でエラーとファイル終端を区別しないものでは、<a href="./#gzerror">gzerror</a>()を使って
   両者を区別するべきです。
</div></div><a id="gzclearerr" data-editorial="anchor"></a><h3 id="nav-161" data-editorial="navigation">gzclearerr</h3><div data-zlib-block="161"><pre><code>

ZEXTERN void ZEXPORT gzclearerr(gzFile file);
</code></pre></div><div data-zlib-block="162"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     fileのエラーフラグとファイル終端フラグを解除します。stdioのclearerr()と同様です。
   同時に書き込まれているgzipファイルを読み続ける場合に役立ちます。
</div></div><div data-zlib-block="163"><pre><code>

#endif /* !Z_SOLO */

                        </code></pre></div></div>
