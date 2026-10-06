from pathlib import Path
import re
app=Path('/private/tmp/libx-zlib-import-20261003/apps/zlib');src=(app/'src/content/docs/v1-3-2/en/01-api/06-gzip.md').read_text();s=src.split('<a id="gzprintf"',1)[0]+'</div>\n';s=s.replace('title: "Gzip file access functions"','title: "gzipファイルアクセス：翻訳中（110〜128）"').replace('> gzip file access functions </h2>','> gzipファイルアクセス関数 </h2>').replace('/* semi-opaque gzip file descriptor */','/* 一部が不透明なgzipファイル記述子 */')
provenance=re.search(r'<aside data-editorial="provenance">.*?</aside>',(app/'src/content/docs/v1-3-2/ja/01-api/05-utility.md').read_text(),re.S)[0]
s=re.sub(r'<aside data-editorial="provenance">.*?</aside>',lambda m:provenance+'<aside data-editorial="draft-status"><p>ブロック110〜128の原稿です。章全体の翻訳・レビューは未完了で、公開ルートから除外しています。</p></aside><aside data-editorial="source-note"><p>gzopenの原文にあるENONBLOCK表記を保持しています。</p></aside>',s,flags=re.S)
p={112:'''
     このライブラリは、「gz」で始まる関数を使い、stdioに似たインターフェイスで
   gzip（.gz）形式のファイルの読み書きに対応します。gzip形式はzlib形式とは異なります。
   gzipはdeflateストリームをRFC 1952に記載されたgzipラッパーで包んだものです。
''',114:'''

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
''',116:'''
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
''',118:'''
     fileに対してこのライブラリの関数が使う内部バッファーのサイズをsizeに設定します。
   既定のサイズは8192バイトです。<a href="./#gzopen">gzopen</a>()または<a href="./#gzdopen">gzdopen</a>()の後、ファイルを読み書きする
   ほかの呼び出しより前に呼び出さなければなりません。バッファーメモリの確保は常に最初の読み書きまで
   遅延します。指定サイズの3倍のバッファー領域を確保します。例えば64Kや128Kバイトへ大きくすると、
   展開（読み込み）の速度が目に見えて上がります。

     新しいバッファーサイズは、<a href="./#gzprintf">gzprintf</a>()の最大長にも影響します。

     <a href="./#gzbuffer">gzbuffer</a>()は、成功時に0、呼び出しが遅すぎた場合などの失敗時に-1を返します。
''',120:'''
     fileの圧縮レベルと方針を動的に更新します。引数の意味は<a href="../04-advanced/#deflateInit2">deflateInit2</a>の説明を
   参照してください。パラメーター変更を適用する前に、すでに渡されたデータをフラッシュします。

     <a href="./#gzsetparams">gzsetparams</a>は、成功時にZ_OK、書き込み用に開いていなければZ_STREAM_ERROR、
   フラッシュしたデータの書き込みエラー時にZ_ERRNO、メモリ確保エラー時にZ_MEM_ERRORを返します。
''',122:'''
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
''',124:'''
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
''',126:'''
     bufにあるlenバイトの非圧縮データを圧縮してfileへ書き込みます。<a href="./#gzwrite">gzwrite</a>は書き込んだ
   非圧縮バイト数を返し、エラー時またはlenが0なら0を返します。書き込み先がノンブロッキングなら、
   <a href="./#gzwrite">gzwrite</a>()が返す書き込みバイト数は、0ではなくlen未満の場合があります。

     lenがintに収まらなければ、0を返して何も書き込みません。
''',128:'''
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
'''}
for k,v in p.items():
 pat=rf'(<div data-zlib-block="{k}">.*?</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">).*?(</div></div>)' if k==114 else rf'(<div data-zlib-block="{k}"><div style="white-space:pre-wrap;overflow-wrap:anywhere">).*?(</div></div>)'
 s,n=re.subn(pat,lambda m:m[1]+v+m[2],s,flags=re.S);assert n==1,k
f=app/'meta/translation-drafts/06-gzip-110-128.md';assert not f.exists();f.write_text(s);print(f)
