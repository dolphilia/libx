from pathlib import Path
import re,html
app=Path('/private/tmp/libx-zlib-import-20261003/apps/zlib');page='02-appendix/01-zconf.md';s=(app/'src/content/docs/v1-3-2/en'/page).read_text();s=s.replace('title: "zconf.h original appendix"','title: "zconf.h設定ヘッダー"')
provenance='<aside data-editorial="provenance"><p>固定したzlib 1.3.2のzconf.h全文を整形した英語定本からの非公式な日本語訳です。原資料：zconf.h。<a href="https://zlib.net/zlib-1.3.2.tar.gz">公式配布物</a>のSHA-256：<code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>。原資料のSHA-256：<code>cb7c2c84211473b4699223edd363d3207b43b9578e739b5bf638f42204ea6e0f</code>。原通知は下記に改変せず併記しています。この整形版と翻訳は非公式です。</p><p><a href="../05-license/">ライセンス原文の全文</a>。本文の外にあるソース参照（deflate.c、zutil.c、test/example.c、test/minigzip.c、ChangeLog、contribなど）は固定した公式配布物内を参照してください。</p></aside>'
s=re.sub(r'<aside data-editorial="provenance">.*?</aside>',lambda m:provenance,s,flags=re.S)
texts={
0:' <a href="./">zconf.h</a> — zlib圧縮ライブラリの設定\n Copyright (C) 1995-2026 Jean-loup Gailly, Mark Adler\n 配布・使用条件については<a href="../../01-api/01-overview/">zlib.h</a>の著作権通知を参照してください\n ',
2:' @(#) $Id$ ',
4:'\n すべての型とライブラリ関数に固有の接頭辞が本当に必要な場合は、\n -DZ_PREFIXを指定してコンパイルしてください。「標準」のzlibは、この指定なしでコンパイルするべきです。\n -DZ_PREFIXを指定してコンパイルするより、configureで\n 「./configure --zprefix」を使い、<a href="./">zconf.h</a>にこの設定を恒久的に反映する方がさらによい方法です。\n ',
6:' リンクされるすべてのシンボルと初期化マクロ ',
8:' <a href="../../01-api/01-overview/">zlib.h</a>と<a href="./">zconf.h</a>にあるすべてのzlibのtypedef ',
10:' <a href="../../01-api/01-overview/">zlib.h</a>と<a href="./">zconf.h</a>にあるすべてのzlibの構造体 ',
12:'\n メモリ確保関数が一度に64kバイトを超えて確保できない場合は、\n -DMAXSEG_64Kを指定してコンパイルしてください（intが16ビットのシステムで必要です）。\n ',
14:' <a href="../../01-api/04-advanced/#deflateInit2">deflateInit2</a>で使うmemLevelの最大値 ',
16:' <a href="../../01-api/04-advanced/#deflateInit2">deflateInit2</a>と<a href="../../01-api/04-advanced/#inflateInit2">inflateInit2</a>で使うwindowBitsの最大値。\n 警告：MAX_WBITSを小さくすると、minigzipはgzipが作成した.gzファイルを展開できなくなります。\n （minigzipが作成したファイルは、引き続きgzipで展開できます。）\n ',
18:' deflateに必要なメモリ量（バイト）は次のとおりです：\n            (1 &lt;&lt; (windowBits+2)) +  (1 &lt;&lt; (memLevel+9))\n つまり、windowBits=15に対する128KとmemLevel=8に対する128K（デフォルト値）、\n さらに小さいオブジェクト用に数キロバイトが必要です。たとえば、\n デフォルトの必要メモリ量を256Kから128Kに減らしたい場合は、次の指定でコンパイルします：\n     make CFLAGS=&quot;-O -DMAX_WBITS=14 -DMAX_MEM_LEVEL=7&quot;\n もちろん、一般に圧縮率は悪くなります（ただで得られるものはありません）。\n\n   inflateに必要なメモリ量（バイト）は1 &lt;&lt; windowBitsです。\n つまり、windowBits=15（デフォルト値）に対する32Kと、\n さらに小さいオブジェクト用に約7キロバイトが必要です。\n',
20:' 型宣言 ',
22:' FARに関する以下の定義は、MSDOSで混合モデルのプログラミングを行う場合にのみ必要です\n （一部をfarとして確保するsmallまたはmediumモデル）。\n テストしたのはMSCだけです。他のMSDOSコンパイラーでは、zutil.hでNO_MEMCPYを\n 定義しなければならない場合があります。混合モデルが不要であれば、FARを空に定義するだけで構いません。\n ',
24:' MSCのsmallまたはmediumモデル ',
26:' Turbo Cのsmallまたはmediumモデル ',
28:' zlibをDLLとしてビルドするかDLLとして使う場合は、ZLIB_DLLを定義してください。\n    必須ではありませんが、性能が少し向上します。\n    ',
30:' WINAPI/WINAPIV呼び出し規約でzlibをビルドするか使用する場合は、\n    ZLIB_WINAPIを定義してください。\n    注意：標準のZLIB1.DLLは、ZLIB_WINAPIを使ってコンパイルされていません。\n    ',
32:' _exportは不要です。代わりにZLIB.DEFを使ってください。 ',
34:' Windowsとの完全な互換性を得るには、__stdcallではなくWINAPIを使ってください。 ',
36:' Borland C/C++と一部の古いMSCの版は、typedef内のFARを無視します ',
38:' 「#define _LARGEFILE64_SOURCE」と「#define _LARGEFILE64_SOURCE 1」の\n 両方を64ビット操作の要求として扱うための小さな工夫です\n （前者はLFS文書に適合しません）。一方、\n 「#undef _LARGEFILE64_SOURCE」と「#define _LARGEFILE64_SOURCE 0」は、\n 同じく64ビット操作を要求しないものとして扱います。\n ',
40:' MVSリンカーは8バイトを超える外部名に対応していません '
}
for i,t in texts.items():
 pattern=rf'(<div data-zlib-block="{i}"><div style="white-space:pre-wrap;overflow-wrap:anywhere">).*?(</div></div>)'
 s,n=re.subn(pattern,lambda m:m[1]+t+m[2],s,flags=re.S);assert n==1,(i,n)
comments={
'may be set to #if 1 by ./configure':'./configureによって#if 1に設定される場合があります',
'iSeries (formerly AS/400).':'iSeries（旧AS/400）。',
'cannot use !defined(STDC) &amp;&amp; !defined(const) on Mac':'Macでは!defined(STDC) &amp;&amp; !defined(const)を使用できません',
'note: need a more gentle solution here':'注意：ここには、より穏当な解決方法が必要です',
'32K LZ77 window':'32KのLZ77ウィンドウ',
'function prototypes':'関数プロトタイプ',
'8 bits':'8ビット',
'16 bits or more':'16ビット以上',
'32 bits or more':'32ビット以上',
'for off_t':'off_t用',
'for va_list':'va_list用',
'for wchar_t':'wchar_t用',
'for SEEK_*, off_t, and _LFS64_LARGEFILE':'SEEK_*、off_t、_LFS64_LARGEFILE用',
'Seek from beginning of file.':'ファイルの先頭を基準にシークします。',
'Seek from current position.':'現在位置を基準にシークします。',
'Set file pointer to EOF plus &quot;offset&quot;':'ファイルポインターをEOFに「offset」を加えた位置に設定します'
}
for en,ja in comments.items():
 assert en in s,en
 s=s.replace('/* '+en+' */','/* '+ja+' */')
import json
original=json.loads((app/'meta/expected-blocks.json').read_text())[page][0]
s+='\n<aside data-editorial="original-notice"><details><summary>改変していない英語原通知</summary><pre style="white-space:pre-wrap;overflow-wrap:anywhere">'+html.escape(original,quote=False)+'</pre></details></aside>\n'
f=app/'src/content/docs/v1-3-2/ja'/page;assert not f.exists();f.write_text(s);print(f)
