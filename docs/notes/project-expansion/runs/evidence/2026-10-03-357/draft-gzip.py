from pathlib import Path
import re
app=Path('/private/tmp/libx-zlib-import-20261003/apps/zlib');src=(app/'src/content/docs/v1-3-2/en/01-api/06-gzip.md').read_text();part='<div data-zlib-block="143"'+src.split('<div data-zlib-block="143"',1)[1]
s='---\ntitle: "gzipファイルアクセス：翻訳中（143〜163）"\n---\n\n<aside data-editorial="draft-status"><p>ブロック143〜163の原稿です。章全体の組み立て・全文レビューは未完了で、公開ルートから除外しています。</p></aside>\n<div class="zlib-document">'+part
p={144:'''

     fileに対する次の<a href="./#gzread">gzread</a>または<a href="./#gzwrite">gzwrite</a>の開始位置を、whenceを基準とするoffsetへ設定します。
   offsetは非圧縮データストリーム内のバイト数です。whenceはlseek(2)と同じ定義ですが、
   SEEK_ENDには対応していません。

     読み込み用のファイルではこの関数をエミュレートしますが、極めて遅い場合があります。
   書き込み用では前方へのシークだけに対応し、<a href="./#gzseek">gzseek</a>は新しい開始位置までゼロの列を圧縮します。
   読み書きのどちらでも、実際のシークは次の読み書きまで遅延し、書き込み時にはクローズ操作でも
   実行します。

     <a href="./#gzseek">gzseek</a>は結果の位置を非圧縮ストリームの先頭からのバイト数で返し、エラー時には-1を返します。
   特に、書き込み用に開いたファイルで新しい開始位置が現在位置より前になる場合はエラーです。
''',146:'''
     fileを巻き戻します。読み込み時だけ対応しています。

     <a href="./#gzrewind">gzrewind</a>(file)は(int)<a href="./#gzseek">gzseek</a>(file, 0L, SEEK_SET)と同等です。
''',148:'''

     fileに対する次の<a href="./#gzread">gzread</a>または<a href="./#gzwrite">gzwrite</a>の開始位置を返します。
   位置は非圧縮データストリーム内のバイト数です。追記の場合や、<a href="./#gzdopen">gzdopen</a>()を使って
   ファイルの途中にあるgzipストリームを読む場合でも、開始時の位置は0です。

     <a href="./#gztell">gztell</a>(file)は<a href="./#gzseek">gzseek</a>(file, 0L, SEEK_CUR)と同等です。
''',150:'''

     fileの現在の圧縮データ上の（実際の）読み書きオフセットを返します。
   このオフセットには、追記時や<a href="./#gzdopen">gzdopen</a>()で読む場合など、gzipストリームより前にある
   バイト数も含めます。読み込み時には、バッファーにある未使用の入力は含めません。
   進捗表示に使える情報です。エラー時、<a href="./#gzoffset">gzoffset</a>()は-1を返します。
''',152:'''
     読み込み中にfileのファイル終端表示が設定されていれば真（1）、それ以外は偽（0）を返します。
   終端表示を設定するのは、入力の終端を超えて読もうとして、要求量を満たせなかった場合だけです。
   そのためfeof()と同様、最後の読み込み要求が入力ファイルに残るバイト数とちょうど同じだった場合、
   読むデータがもうなくても<a href="./#gzeof">gzeof</a>()は偽を返すことがあります。
   入力ファイルのサイズがバッファーサイズの整数倍なら、これが起こります。

     <a href="./#gzeof">gzeof</a>()が真を返せば、読み込み関数はそれ以上データを返しません。ただし、<a href="./#gzclearerr">gzclearerr</a>()で
   終端表示をリセットし、前回の終端検出後に入力ファイルが大きくなっていれば、再びデータを返せます。
''',154:'''
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
''',156:'''
     必要ならfileの保留中出力をすべてフラッシュし、fileを閉じ、圧縮・展開状態を解放します。
   fileを閉じると構造体を解放するため、そのfileで<a href="./#gzerror">gzerror</a>を呼び出せなくなることに注意してください。
   同じ確保済み領域にfreeを複数回呼んではいけないのと同様、同じfileで<a href="./#gzclose">gzclose</a>を
   複数回呼び出してはいけません。

     <a href="./#gzclose">gzclose</a>は、fileが不正ならZ_STREAM_ERROR、ファイル操作エラーならZ_ERRNO、
   メモリ不足ならZ_MEM_ERROR、最後の読み込みがgzipストリームの途中で終わっていればZ_BUF_ERROR、
   成功時にはZ_OKを返します。
''',158:'''
     <a href="./#gzclose">gzclose</a>()と同じですが、<a href="./#gzclose_r">gzclose_r</a>()は読み込み時だけ、<a href="./#gzclose_w">gzclose_w</a>()は書き込み・追記時だけ
   使用します。<a href="./#gzclose">gzclose</a>()の代わりに使う利点は、読み込みだけなら未使用の圧縮コードを、
   書き込みだけなら未使用の展開コードをリンクせずに済むことです。<a href="./#gzclose">gzclose</a>()を使うと、静的な
   zlibライブラリへのリンク時に圧縮・展開の両方のコードをアプリケーションへ取り込みます。
''',160:'''
     fileで最後に発生したエラーのメッセージを返します。errnumがNULLでなければ、*errnumを
   zlibのエラー番号に設定します。圧縮ライブラリではなくファイルシステムでエラーが起こった場合は、
   *errnumをZ_ERRNOに設定し、アプリケーションはerrnoで正確なエラーコードを調べられます。

     アプリケーションは返された文字列を変更してはいけません。この関数を後で呼び出すと、
   以前返した文字列が無効になる場合があります。fileを閉じれば、以前に<a href="./#gzerror">gzerror</a>が返した
   文字列は使用できなくなります。

     上述の関数のうち戻り値でエラーとファイル終端を区別しないものでは、<a href="./#gzerror">gzerror</a>()を使って
   両者を区別するべきです。
''',162:'''
     fileのエラーフラグとファイル終端フラグを解除します。stdioのclearerr()と同様です。
   同時に書き込まれているgzipファイルを読み続ける場合に役立ちます。
'''}
for k,v in p.items():
 pat=rf'(<div data-zlib-block="{k}">.*?</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">).*?(</div></div>)' if k in (144,148,150) else rf'(<div data-zlib-block="{k}"><div style="white-space:pre-wrap;overflow-wrap:anywhere">).*?(</div></div>)'
 s,n=re.subn(pat,lambda m:m[1]+v+m[2],s,flags=re.S);assert n==1,k
f=app/'meta/translation-drafts/06-gzip-143-163.md';assert not f.exists();f.write_text(s);print(f)
