from pathlib import Path
import re
app=Path('/private/tmp/libx-zlib-import-20261003/apps/zlib');src=(app/'src/content/docs/v1-3-2/en/01-api/06-gzip.md').read_text();part='<a id="gzprintf"'+src.split('<a id="gzprintf"',1)[1].split('<div data-zlib-block="143"',1)[0]
s='---\ntitle: "gzipファイルアクセス：翻訳中（129〜142）"\n---\n\n<aside data-editorial="draft-status"><p>ブロック129〜142の原稿です。章全体は未完了で、公開ルートから除外しています。</p></aside><aside data-editorial="source-note"><p>gzgetcの原文はノンブロッキング時の再試行先としてgzreadを記載しています。原文どおり保持しています。</p></aside>\n<div class="zlib-document">'+part+'</div>\n'
p={130:'''
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
''',132:'''
     指定したnull終端文字列sを、終端のnull文字を除いて圧縮し、fileへ書き込みます。

     <a href="./#gzputs">gzputs</a>は書き込んだ文字数を返し、エラー時には-1を返します。
   書き込み先がノンブロッキングなら、書き込んだ文字数が文字列の長さより少ない場合があります。

     文字列の長さがintに収まらなければ、-1を返して何も書き込みません。
''',134:'''
     fileからバイトを読み、展開してbufへ入れます。len-1文字を読むか、改行文字を読んでbufへ
   転送するか、ファイル終端に達するまで続けます。文字を読んだ場合、またはlenが1の場合、
   文字列をnull文字で終端します。ファイル終端のため文字を読めなかった場合、またはlenが1未満なら、
   バッファーは変更しません。

     <a href="./#gzgets">gzgets</a>はnull終端文字列であるbufを返し、ファイル終端またはエラー時にはNULLを返します。
   エラー前にデータを読んでいれば、そのデータを使い切るまで返し、その後の次の呼び出しで
   NULLを返してエラーを示します。

     <a href="./#gzgets">gzgets</a>は<a href="./#gzread">gzread</a>()と同様、同時に書き込まれているファイルやノンブロッキングデバイスにも
   使えます。ただし行が途中で分かれる場合があり、必要に応じた再結合はアプリケーションが行います。
''',136:'''
     cをunsigned charへ変換し、圧縮してfileへ書き込みます。<a href="./#gzputc">gzputc</a>は書き込んだ値を返し、
   エラー時には-1を返します。
''',138:'''
     fileから1バイトを読み、展開します。<a href="./#gzgetc">gzgetc</a>はそのバイトを返し、ファイル終端または
   エラー時には-1を返します。エラー前にデータを読んでいれば、そのデータを使い切るまで返し、
   その後の次の呼び出しで-1を返してエラーを示します。

     速度のためマクロとして実装しています。そのため、ほかの関数が行う検査をすべては行いません。
   fileがNULLかどうかも、fileが指す構造体の内容が壊されているかどうかも検査しません。

     <a href="./#gzgetc">gzgetc</a>はノンブロッキングデバイス上のgzipファイルを読むためにも使えます。
   入力が滞り、返せる非圧縮データがなければ、<a href="./#gzgetc">gzgetc</a>()は-1を返し、errnoは
   EAGAINまたはEWOULDBLOCKになります。その後、<a href="./#gzread">gzread</a>()を再び呼び出せます。
''',140:'''
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
''',142:'''
     保留中の出力をすべてfileへフラッシュします。flushは<a href="../03-basic/#deflate">deflate</a>()の引数と同じです。
   戻り値はzlibのエラー番号です（後述の<a href="./#gzerror">gzerror</a>を参照してください）。<a href="./#gzflush">gzflush</a>を
   使えるのは書き込み時だけです。

     flushがZ_FINISHなら、残りのデータを書き込み、出力内のgzipストリームを完了します。
   再び<a href="./#gzwrite">gzwrite</a>()を呼び出すと、出力内で新しいgzipストリームを開始します。
   <a href="./#gzread">gzread</a>()は、そのように連結されたgzipストリームを読めます。

     <a href="./#gzflush">gzflush</a>は厳密に必要な場合だけ呼び出すべきです。頻繁に呼び出すと圧縮率が下がります。
'''}
for k,v in p.items():
 pat=rf'(<div data-zlib-block="{k}"><div style="white-space:pre-wrap;overflow-wrap:anywhere">).*?(</div></div>)';s,n=re.subn(pat,lambda m:m[1]+v+m[2],s,flags=re.S);assert n==1,k
f=app/'meta/translation-drafts/06-gzip-129-142.md';assert not f.exists();f.write_text(s);print(f)
