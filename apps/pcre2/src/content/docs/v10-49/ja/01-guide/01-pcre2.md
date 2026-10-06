---
title: "PCRE2の概要"
description: "PCRE2 10.49の固定原典を全節収録した独自の日本語訳です。"
documentId: "pcre2:10.49:pcre2"
licenseSource: pcre2-manual
---


<div class="pcre2-original-content">
<h2 id="SEC1">はじめに</h2>
<p>PCRE2は、PCREライブラリーの改訂されたAPIを表す名称です。PCREはCで書かれた関数群で、わずかな相違点を除き、Perlと同じ構文と意味に従って正規表現のパターン照合を行います。20年近くが経過し、元のAPIの制約により開発が次第に難しくなっていました。新しいAPIは拡張しやすく、独立した最適化用の「study」関数を廃止して簡素化されています。PCRE2では、可能な場合はパターンが自動的に最適化されます。PCRE1から分岐した後、コードは広範囲にリファクタリングされ、新機能も追加されました。旧ライブラリーは現在では旧式となり、保守されていません。</p>
<p>Perl形式の正規表現パターンに加え、Perlよりも先にPythonや元のPCREへ導入された一部の機能を、Pythonの構文で使用できます。.NETとOnigurumaの一部の構文もサポートしており、ECMAScript（JavaScript）との互換性を高めるための小さな動作変更を指定するオプションもあります。</p>
<p>PCRE2のソースコードは、8ビット・16ビット・32ビットのコード単位からなる文字列を扱えるようにコンパイルできます。そのため、コード単位の大きさごとに、最大3つの独立したライブラリーをインストールできます。コード単位の大きさは、基盤となるハードウェアのビット数とは関係ありません。32ビットアプリケーションにも対応する64ビット環境では、64ビットモードと32ビットモードの両方でコンパイルしたPCRE2が必要になる場合があります。</p>
<p>PCREを16ビットと32ビットのコード単位へ拡張する最初の作業は、それぞれZoltan HerczegとChristian Perschが行いました。いずれのライブラリーでも、文字列は1コード単位を1文字として、またはUTFで符号化されたUnicodeとして解釈でき、Unicodeの一般カテゴリープロパティーを利用できます。Unicodeサポートはビルド時に省略できますが、既定では有効です。ただし、文字列をUTFのコード単位として処理するには、実行時に明示的に有効にする必要があります。使用しているUnicodeのバージョンは、次を実行すると確認できます。</p><pre><code>  pcre2test -C&#10;</code></pre>
<p></p>
<p>3つのライブラリーには同じ関数群が含まれ、それぞれ関数名の末尾が_8、_16、_32になります（例: <b>pcre2_compile_8()</b>）。ただし、PCRE2_CODE_UNIT_WIDTHを8、16、32のいずれかに定義すれば、コード単位の幅を1種類だけ使用するプログラムを、<b>pcre2_compile()</b>などの共通名で記述できます。この文書は、その方法を使うことを前提としています。</p>
<p>Perl互換の照合関数に加え、PCRE2には、同じコンパイル済みパターンを別の方法で照合する代替関数もあります。状況によっては、この代替関数に利点があります。2つの照合アルゴリズムについては、<a href="/docs/pcre2/v10-49/ja/01-guide/03-pcre2matching/"><b>pcre2matching</b></a>を参照してください。</p>
<p>Perlの正規表現機能のうち、PCRE2が対応するものと対応しないものの詳細は、別の文書に記載されています。<a href="/docs/pcre2/source/v10-49/html/pcre2pattern.html"><b>pcre2pattern</b></a>と<a href="/docs/pcre2/source/v10-49/html/pcre2compat.html"><b>pcre2compat</b></a>を参照してください。構文の概要は、<a href="/docs/pcre2/v10-49/ja/01-guide/05-pcre2syntax/"><b>pcre2syntax</b></a>にあります。</p>
<p>PCRE2の一部の機能は、ライブラリーのビルド時に組み込んだり、除外したり、変更したりできます。<a href="/docs/pcre2/source/v10-49/html/pcre2_config.html"><b>pcre2_config()</b></a>関数を使うと、クライアントは利用可能な機能を確認できます。機能自体については、<a href="/docs/pcre2/source/v10-49/html/pcre2build.html"><b>pcre2build</b></a>で説明しています。各種のOS向けにPCRE2をビルドする方法は、ソース配布物に含まれる<a href="/docs/pcre2/source/v10-49/html/README.txt"><b>README</b></a>と<a href="/docs/pcre2/source/v10-49/html/NON-AUTOTOOLS-BUILD.txt"><b>NON-AUTOTOOLS-BUILD</b></a>に記載されています。</p>
<p>ライブラリーには、公開されている複数の外部関数から利用される内部関数やデータテーブルがあり、これらは文書化されておらず、外部からの呼び出しを想定していません。その名前はすべて「_pcre2」で始まるため、名前の衝突は起こらないことを期待しています。共有ライブラリーのビルド時に、エクスポートする外部シンボルを制御できる環境もあります。その場合、文書化されていないシンボルはエクスポートされません。</p>
<h2 id="SEC2">セキュリティー上の考慮事項</h2>
<p>UTFを使用しないアプリケーションで、ユーザーが任意のパターンを指定してコンパイルできるようにしている場合、ユーザーがパターン内からUTFサポートを有効にできる機能に注意してください。たとえば「(*UTF)」で始まる8ビットのパターンはUTF-8モードを有効にし、パターンと対象文字列を、個別の8ビット文字ではなくUTF-8のコード単位列として解釈します。その結果、パターンと照合対象のデータの両方について、UTF-8としての妥当性が検査されます。データ文字列が非常に長い場合、この検査で多くの資源を使用し、アプリケーションの性能が低下する可能性があります。</p>
<p>この可能性に対処する方法の1つは、<b>pcre2_pattern_info()</b>関数で、コンパイル済みパターンのオプションにPCRE2_UTFが含まれているかを調べることです。別の方法として、<b>pcre2_compile()</b>を呼ぶ際にPCRE2_NEVER_UTFオプションを設定できます。この場合、パターンにUTFを設定するシーケンスが含まれていると、コンパイル時にエラーになります。</p>
<p>「(*UCP)」を指定すると、\dなどの文字型でUnicodeプロパティーを使うことも、パターン内から有効にできます。PCRE2_NEVER_UCPオプションを設定すると、この機能を禁止できます。</p>
<p>UTFに対応するアプリケーションでは、妥当性検査に時間がかかることに注意してください。同じデータ文字列を何度も照合する場合、2回目以降の照合ではPCRE2_NO_UTF_CHECKオプションを使い、重複する検査を避けることができます。</p>
<p>UTF-8またはUTF-16のパターンで\Cエスケープシーケンスを使うと、現在の照合位置が複数のコード単位からなる文字の途中に残る可能性があるため、問題が起こることがあります。アプリケーションはPCRE2_NEVER_BACKSLASH_Cオプションを使って\Cの使用を禁止できます。その場合、\Cが現れるとコンパイル時にエラーになります。また、\Cを恒久的に無効にしたPCRE2をビルドすることもできます。</p>
<p>非常に大きな探索木を持つパターンを、決して一致しない文字列へ適用することでも、性能が低下する可能性があります。よくある例は、パターン内で回数無制限の繰り返しを入れ子にすることです。PCRE2には一定の保護があります。<a href="/docs/pcre2/source/v10-49/html/pcre2api.html"><b>pcre2api</b></a>の<b>pcre2_set_match_limit()</b>関数を参照してください。使用するメモリー量の制限には、類似の<b>pcre2_set_depth_limit()</b>関数を使えます。</p>
<h2 id="SEC3">ユーザー文書</h2>
<p>PCRE2のユーザー文書は、複数の節から構成されます。man形式では、それぞれが独立したmanページです。HTML形式では、それぞれが索引ページからリンクされた独立したページです。プレーンテキスト形式では、<b>pcre2grep</b>と<b>pcre2test</b>のプログラムの説明は、それぞれ<b>pcre2grep.txt</b>と<b>pcre2test.txt</b>というファイルにあります。それ以外の節は、プログラムのリストである<b>pcre2demo</b>と、個々の関数についての短いページを除き、検索しやすいように<b>pcre2.txt</b>へ連結されています。各節は次のとおりです。</p><pre><code>  pcre2              この文書&#10;  pcre2-config       PCRE2のインストール構成情報の表示&#10;  pcre2api           PCRE2のネイティブC APIの詳細&#10;  pcre2build         PCRE2のビルド&#10;  pcre2callout       パターンのコールアウト機能の詳細&#10;  pcre2compat        Perlとの互換性について&#10;  pcre2convert       パターン変換関数の詳細&#10;  pcre2demo          PCRE2を使うCのサンプルプログラム&#10;  pcre2grep          pcre2grepコマンドの説明（8ビットのみ）&#10;  pcre2jit           JIT最適化サポートについて&#10;  pcre2limits        サイズなどの制限の詳細&#10;  pcre2matching      2つの照合アルゴリズムについて&#10;  pcre2partial       部分照合機能の詳細&#10;  pcre2pattern       サポートする正規表現パターンの構文と意味&#10;  pcre2perform       性能上の問題について&#10;  pcre2posix         8ビットライブラリーのPOSIX互換C API&#10;  pcre2sample        pcre2demoプログラムについて&#10;  pcre2serialize     パターンのシリアライズの詳細&#10;  pcre2syntax        構文のクイックリファレンス&#10;  pcre2test          pcre2testコマンドの説明&#10;  pcre2unicode       UnicodeとUTFのサポートについて&#10;</code></pre><p>man形式とHTML形式には、各Cライブラリー関数について、引数と結果を示す短いページもあります。</p><p></p>
<h2 id="SEC4">著者</h2>
<p>現在のPCRE2の保守担当者はNicholas WilsonとZoltan Herczegです。</p>
<p>PCRE2は、英国ケンブリッジのUniversity Computing Serviceに所属していたPhilip Hazelが作成しました。そのほか、多くの人が寄稿しています。</p>
<p>保守担当者へ連絡するには、プロジェクトのページで案内されているGitHubのissueトラッカーまたはPCRE2のメーリングリストを利用してください: <a href="https://github.com/PCRE2Project/pcre2">https://github.com/PCRE2Project/pcre2</a></p>
<h2 id="SEC5">改訂</h2>
<p>最終更新日: 2025年2月22日<br/>Copyright © 1997-2021 University of Cambridge.<br/></p>
</div>

