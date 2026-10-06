---
title: "サンプルプログラム"
description: "PCRE2 10.49の固定原典を全節収録した独自の日本語訳です。"
documentId: "pcre2:10.49:pcre2sample"
licenseSource: pcre2-manual
---


<div class="pcre2-original-content">
<h2 id="SEC1">PCRE2のサンプルプログラム</h2>
<p>PCRE2の使用を始めるための、簡単で完全なサンプルプログラムが、PCRE2配布物の<b>src</b>ディレクトリーにある<i>pcre2demo.c</i>として提供されています。そのコードの一覧は、<a href="/docs/pcre2/source/v10-49/html/pcre2demo.html"><b>pcre2demo</b></a>の文書に掲載されています。PCRE2の配布物が手元にない場合は、この一覧を保存すれば<i>pcre2demo.c</i>の内容を再作成できます。</p>
<p>サンプルプログラムは、第1引数に指定された正規表現をコンパイルし、第2引数の対象文字列と照合します。PCRE2のオプションは設定せず、既定の文字テーブルを使用します。照合が成功すると、一致した対象文字列の部分と、捕捉された各部分文字列の内容を出力します。</p>
<p>コマンドラインで-gオプションを指定すると、プログラムは、同じ対象文字列に同じ正規表現がさらに一致するかを調べます。空文字列に一致する可能性があるため、処理のロジックは少し複雑です。何をしているかはコード内のコメントで説明しています。</p>
<p><b>pcre2demo.c</b>のコードは、PCRE2の8ビットライブラリーを使う8ビットのプログラムです。8ビットのコード単位で格納された文字列と文字を扱います。既定では1コード単位が1文字に対応しますが、パターンが「(*UTF)」で始まる場合、パターンと対象文字列の両方をUTF-8の文字列として扱い、1文字が複数のコード単位を占めることがあります。</p>
<p>PCRE2が、使用するOSの標準のインクルードディレクトリーとライブラリーディレクトリーにインストールされていれば、次のようなコマンドでサンプルプログラムをコンパイルできるはずです。</p><pre><code>  cc -o pcre2demo pcre2demo.c -lpcre2-8&#10;</code></pre><p>PCRE2が別の場所にインストールされている場合は、コマンドラインにオプションを追加する必要があるかもしれません。たとえば、Unix系のシステムでPCRE2を<i>/usr/local</i>にインストールしている場合、次のようなコマンドでコンパイルできます。</p><pre><code>  cc -o pcre2demo -I/usr/local/include pcre2demo.c -L/usr/local/lib -lpcre2-8&#10;</code></pre><p>サンプルプログラムをビルドすると、次のような簡単なテストを実行できます。</p><pre><code>  ./pcre2demo 'cat|dog' 'the cat sat on the mat'&#10;  ./pcre2demo -g 'cat|dog' 'the dog sat on the cat'&#10;  ./pcre2demo -i 'cat' 'the dog sat on the CAT'&#10;</code></pre><p>より包括的なテストプログラムとして、<a href="/docs/pcre2/source/v10-49/html/pcre2test.html"><b>pcre2test</b></a>があります。このプログラムは、PCRE2の3種類のライブラリーすべて（8ビット・16ビット・32ビット。ただし、すべてをインストールする必要はありません）を使って正規表現をテストする、さらに多くの機能を備えています。<a href="/docs/pcre2/source/v10-49/html/pcre2demo.html"><b>pcre2demo</b></a>は、比較的簡単なコードの例として提供されています。</p><p></p>
<p>PCRE2が標準のライブラリーディレクトリーにインストールされていない状態で<a href="/docs/pcre2/source/v10-49/html/pcre2demo.html"><b>pcre2demo</b></a>を実行しようとすると、一部のOS（たとえばSolaris）では、次のようなエラーが発生することがあります。</p><pre><code>  ld.so.1: pcre2demo: fatal: libpcre2-8.so.0: open failed: No such file or directory&#10;</code></pre><p>これは、そのシステムでの共有ライブラリーのサポート方法によるものです。この問題を回避するには、たとえば次を</p><pre><code>  -R/usr/local/lib&#10;</code></pre><p>コンパイルコマンドへ追加する必要があります。</p><p></p>
<h2 id="SEC2">著者</h2>
<p>Philip Hazel<br/>University Computing Serviceを退職<br/>英国ケンブリッジ。<br/></p>
<h2 id="SEC3">改訂</h2>
<p>最終更新日: 2025年2月28日<br/>Copyright © 1997-2016 University of Cambridge.<br/></p>
</div>

