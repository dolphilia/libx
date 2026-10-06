---
title: "概要と原文の通知"
licenseSource: zlib-api
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>固定したzlib 1.3.2の原文全体を整形した英語定本からの非公式な日本語訳です。原資料：zlib.h。<a href="https://zlib.net/zlib-1.3.2.tar.gz">公式配布物</a>のSHA-256：<code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>。原資料のSHA-256：<code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>。原文の通知は固定原資料と下記の英語原文に保持しています。この整形版と翻訳は非公式です。</p><p><a href="../../02-appendix/05-license/">ライセンス原文の全文</a>。本文の外にあるソース参照（deflate.c、zutil.c、test/example.c、test/minigzip.c、ChangeLog、contribなど）は、固定した公式配布物内を参照してください。</p></aside>
<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="0"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> <a href="./">zlib.h</a> -- 汎用圧縮ライブラリ「zlib」のインターフェース
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
</div></div><div data-zlib-block="1"><pre><code>

#ifndef ZLIB_H
#define ZLIB_H

#ifdef ZLIB_BUILD
#  include &lt;zconf.h&gt;
#else
# include &quot;zconf.h&quot;
#endif

#ifdef __cplusplus
extern &quot;C&quot; {
#endif

#define ZLIB_VERSION &quot;1.3.2&quot;
#define ZLIB_VERNUM 0x1320
#define ZLIB_VER_MAJOR 1
#define ZLIB_VER_MINOR 3
#define ZLIB_VER_REVISION 2
#define ZLIB_VER_SUBREVISION 0

</code></pre></div><div data-zlib-block="2"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
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
</div></div><a id="free_func" data-editorial="anchor"></a><a id="alloc_func" data-editorial="anchor"></a><a id="z_stream" data-editorial="anchor"></a><div data-zlib-block="3"><pre><code>

typedef voidpf (*alloc_func)(voidpf opaque, uInt items, uInt size);
typedef void   (*free_func)(voidpf opaque, voidpf address);

struct internal_state;

typedef struct z_stream_s {
    z_const Bytef *next_in;     /* 次の入力バイト */
    uInt     avail_in;  /* next_inにある利用可能なバイト数 */
    uLong    total_in;  /* これまでに読み込んだ入力バイトの総数 */

    Bytef    *next_out; /* 次の出力バイトの書き込み先 */
    uInt     avail_out; /* next_outの残り空き領域 */
    uLong    total_out; /* これまでに出力したバイトの総数 */

    z_const char *msg;  /* 直近のエラーメッセージ。エラーがなければNULL */
    struct internal_state FAR *state; /* アプリケーションからは参照できない */

    alloc_func zalloc;  /* 内部状態の確保に使用 */
    free_func  zfree;   /* 内部状態の解放に使用 */
    voidpf     opaque;  /* zallocとzfreeに渡す独自のデータオブジェクト */

    int     data_type;  /* データ型の最良の推定。deflateではバイナリーかテキスト、
                           inflateではデコード状態 */
    uLong   adler;      /* 非圧縮データのAdler-32またはCRC-32値 */
    uLong   reserved;   /* 将来の使用のために予約 */
} z_stream;

typedef z_stream FAR *z_streamp;

</code></pre></div><div data-zlib-block="4"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     zlibルーチンとの間で受け渡すgzipヘッダー情報です。
  各フィールドの意味の詳細はRFC 1952を参照してください。
</div></div><a id="gz_header" data-editorial="anchor"></a><div data-zlib-block="5"><pre><code>
typedef struct gz_header_s {
    int     text;       /* 圧縮データがテキストと考えられる場合は真 */
    uLong   time;       /* 更新時刻 */
    int     xflags;     /* 追加フラグ（gzipファイルの書き込み時には使用しない） */
    int     os;         /* オペレーティングシステム */
    Bytef   *extra;     /* 追加フィールドへのポインター。なければZ_NULL */
    uInt    extra_len;  /* 追加フィールドの長さ（extra != Z_NULLの場合に有効） */
    uInt    extra_max;  /* extraの領域サイズ（ヘッダーの読み込み時のみ） */
    Bytef   *name;      /* ゼロ終端のファイル名へのポインター、またはZ_NULL */
    uInt    name_max;   /* nameの領域サイズ（ヘッダーの読み込み時のみ） */
    Bytef   *comment;   /* ゼロ終端のコメントへのポインター、またはZ_NULL */
    uInt    comm_max;   /* commentの領域サイズ（ヘッダーの読み込み時のみ） */
    int     hcrc;       /* ヘッダーCRCが存在した、または存在する予定なら真 */
    int     done;       /* gzipヘッダーの読み込み完了時は真
                           （gzipファイルの書き込み時には使用しない） */
} gz_header;

typedef gz_header FAR *gz_headerp;

</code></pre></div><div data-zlib-block="6"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
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
</div></div><div data-zlib-block="7"><pre><code>

                        </code></pre></div></div>

<aside data-editorial="original-notice"><details><summary>通知と導入の英語原文</summary><pre> zlib.h -- interface of the &#x27;zlib&#x27; general purpose compression library
  version 1.3.2, February 17th, 2026

  Copyright (C) 1995-2026 Jean-loup Gailly and Mark Adler

  This software is provided &#x27;as-is&#x27;, without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.

  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
  3. This notice may not be removed or altered from any source distribution.

  Jean-loup Gailly        Mark Adler
  jloup@gzip.org          madler@alumni.caltech.edu


  The data format used by the zlib library is described by RFCs (Request for
  Comments) 1950 to 1952 at https://datatracker.ietf.org/doc/html/rfc1950
  (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
</pre></details></aside>
