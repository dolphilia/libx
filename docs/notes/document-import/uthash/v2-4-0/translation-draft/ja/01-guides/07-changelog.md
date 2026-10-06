---
title: "uthash変更履歴"
description: "uthash 2.4.0公式変更履歴の全文日本語訳"
sourceURL: "https://github.com/troydhanson/uthash/blob/a49bed0b4abb7dff16c73906dcdc8a9718d582d2/doc/ChangeLog.txt"
licenseSource: "uthash-ChangeLog-2.4.0"
upstreamAuthors: []
upstreamVersionHeader: null
---

<div id="preamble">

<div class="sectionbody">

<div class="paragraph">

[uthashのホームページ](https://troydhanson.github.io/uthash/)に戻ります。

</div>

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">注意</div>
</td>
<td class="content">この変更履歴には、不完全または不正確な記載がある可能性があります。gitのコミット履歴を参照してください。</td>
</tr></tbody></table>

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_2_4_0_2026_06_25-->

## バージョン 2.4.0 (2026-06-25)

<div class="sectionbody">

<div class="ulist">

- utarray_replaceを追加（xunicattに感謝）

- LL_REVERSE/DL_REVERSE/CDL_REVERSEを追加（xunicattに感謝）

- CDL_CONCATを追加（xunicattに感謝）

- `oom`（v2.2.0で非推奨化）を削除し、`utarray_oom` に置き換え

- 誰も使っていないという見込みで、HASH_DEFINE_OWN_STDINT（v2.2.0で追加）を削除

- MCST Elbrus C Compilerで\_\_typeofを使用（utf-4096に感謝）

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_2_3_0_2021_02_25-->

## バージョン 2.3.0 (2021-02-25)

<div class="sectionbody">

<div class="ulist">

- HASH_FCNを削除。HASH_FUNCTIONとHASH_KEYCMPマクロが同様に動作するように変更

- uthash_memcmp（v2.1.0で非推奨化）を削除し、HASH_KEYCMPに置き換え

- -Wswitch-default警告を抑制（Olaf Bergmannに感謝）

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_2_2_0_2020_12_17-->

## バージョン 2.2.0 (2020-12-17)

<div class="sectionbody">

<div class="ulist">

- C99の\<stdint.h\>がないプラットフォーム向けにHASH_NO_STDINTを追加

- 多数の-Wcast-qual警告を抑制（Olaf Bergmannに感謝）

- 空のハッシュで検索する場合はハッシュ計算を省略（Huansong Fuに感謝）

- utarray.hでoomをutarray_oomに改名（Hong Xuに感謝）

- utstring.hでoomをutstring_oomに改名（Hong Xuに感謝）

- MurmurHash/HASH_MURを削除

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_2_1_0_2018_12_20-->

## バージョン 2.1.0 (2018-12-20)

<div class="sectionbody">

<div class="ulist">

- Clangの静的解析による一部の警告を抑制

- LL_INSERT_INORDERとLL_LOWER_BOUNDなどを追加（Jeffrey Lovitz and Mattias Erikssonに感謝）

- \<string.h\>がないプラットフォーム向けにuthash_bzeroを追加

- HASH_SELECT内のHASH_BLOOM_ADD欠落を修正（Pawel Veselovに感謝）

- HASH_NONFATAL_OOMによってmalloc失敗から回復できるように変更（Pawel Veselovに感謝）

- HASH_FIND_STR内でuthash_strlenを繰り返し呼び出すことを回避

- uthash_memcmpをHASH_KEYCMPに改名し、互換性のため旧名を保持

- utstack.hを追加

- libutを削除

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_2_0_2_2017_03_02-->

## バージョン 2.0.2 (2017-03-02)

<div class="sectionbody">

<div class="ulist">

- HASH_ADD_INORDERなどのセグメンテーション違反を修正（Yana Kireyonokに感謝）

- utstring_len内の不要なunsignedへのキャストを削除（Michal Sestrienkaに感謝）

- \<stdlib.h\>がないプラットフォーム向けにuthash_memcmpとuthash_strlenを追加（Pawel Veselovに感謝）

- utringbufferのC++非互換性を修正

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_2_0_1_2016_07_05-->

## バージョン 2.0.1 (2016-07-05)

<div class="sectionbody">

<div class="ulist">

- 順序を保って挿入するマクロHASH_ADD_INORDERなどを追加（Thilo Schulzに感謝）

- ハッシュ値を指定して挿入するマクロHASH_ADD_BYHASHVALUEなどを追加

- キー比較時に、全体のmemcmpを行う前にハッシュ値を確認

- utringbuffer.hを追加

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_9_1_2014_11_18-->

## バージョン 1.9.9.1 (2014-11-18)

<div class="sectionbody">

<div class="ulist">

- utvectorを含む実験的なlibutバンドルをopt/に収録

- Bernsteinハッシュで乗算の代わりにシフトを使用（Jimmy Zhuoに感謝）

- utarray/utstringのssize_t型をsize_tに変更（Hong Xuに感謝）

- \>4GBの文字列に対するutstringのポインター計算を修正（Thomas Botteschに感謝）

- FNVハッシュをFNV-1a変種に変更（dwest1975に感謝）

- HASH_REPLACE_STRのバグを修正（Ilya Kalimanに感謝）

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_9_2014_02_25-->

## バージョン 1.9.9 (2014-02-25)

<div class="sectionbody">

<div class="ulist">

- HASH_ADD_STRをchar\*またはchar\[\]に対応させるように変更（Samuel Thibaultに感謝）

- ssize_t用のsys/types.hのインクルードを修正（Fernando Camposに感謝）

- LL_COUNT/DL_COUNT/CDL_COUNTを追加（Paul Praetに感謝）

- `tests/lru_cache` にLRUキャッシュの例を追加（Oliver Lorenzに感謝）

- VS2008向けにLL_DELETE2を修正（Greg Davydouskiに感謝）

- `HASH_REPLACE_STR` の引数欠落を修正（Alexに感謝）

- ソースファイルの版番号を文書に合わせて更新（John Crowに感謝）

- ハッシュテーブルのオーバーヘッドサイズを取得する `HASH_OVERHEAD` マクロを追加

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_8_2013_03_10-->

## バージョン 1.9.8 (2013-03-10)

<div class="sectionbody">

<div class="ulist">

- uthashに `HASH_REPLACE` を追加（Nick Vatamaniucに感謝）

- clang警告を修正（wynnwに感謝）

- 配列の末尾を越えて挿入する場合の `utarray_insert` を修正（Rob Willettに感謝）

- [GitHubのuthash](http://troydhanson.github.io/uthash/)を見つけられるようになった

- [uthashのGoogleグループ](https://groups.google.com/d/forum/uthash)がある

- uthashは2006年以来、SourceForgeで29,000+回ダウンロードされた

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_7_2012_10_09-->

## バージョン 1.9.7 (2012-10-09)

<div class="sectionbody">

<div class="ulist">

- utstringが `utstring_find` による部分文字列検索に対応（Joe Weiに感謝）

- utlistが要素の *先頭への追加* と *置換* に対応（Zoltán Lajos Kisに感謝）

- utlist要素のprev/nextフィールドに任意の名前を付けられるように変更（Pawel S. Veselovに感謝）

- uthashのキャストによってclang警告を抑制（Roman Divacky and Baptiste Daroussinに感謝）

- uthashのユーザーガイド例でキーの一意性を確認する方法を提示（Richard Cookに感謝）

- uthashのHASH_MURをMSVC++ 10のCモードでコンパイルできるように変更（Arun Kirthi Cherianに感謝）

- `utstring_printf` が書式検査に対応（Donald Carrに感謝）

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_6_2012_04_28-->

## バージョン 1.9.6 (2012-04-28)

<div class="sectionbody">

<div class="ulist">

- utarray_prevを追加（Ben Hiettに感謝）

- 互換性を高めるため括弧とキャストを追加（Atis, Debasis Ganguly, and Steve McClellanに感謝）

- uthash_mallocと関連フックにifndefを追加（Holger Machensに感謝）

- メモリーリークが起きないように例を修正（任晶磊に感謝）

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_5_2011_11_16-->

## バージョン 1.9.5 (2011-11-16)

<div class="sectionbody">

<div class="ulist">

- `utarray_renew` を追加

- Bloomフィルター使用時の `uthash_clear` のメモリーリークを修正（Jan Hättigに感謝）

- utarrayが配列作成時にUT_icdへのポインターを保持する代わりに、UT_icdをコピーするように変更

- 特定の引数のプリプロセスを修正するため `HASH_ADD` に括弧を追加（Aaron Rosenに感謝）

- マクロ引数の柔軟性を高めるため、さらに括弧を追加

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_4_2011_06_05-->

## バージョン 1.9.4 (2011-06-05)

<div class="sectionbody">

<div class="ulist">

- uthashがMurmurHash v3に対応

- utlistに連結マクロ（`LL_CONCAT` と `DL_CONCAT`）を追加

- utarrayが二分探索（`utarray_find`）に対応

- utstringが新規作成または既存内容を消去するマクロ（`utstring_renew`）に対応

- 多段ハッシュテーブルの手法を文書化

- utarray文書で `UT_icd` のスコープ要件を明確化

- `utstring_clear` の後に `utstring_body` を呼ぶ場合の終端を修正

- 複雑な引数で使う場合のutarray_insertaマクロを修正

- Visual Studioで欠けている型 `uint8_t` を定義

- Debian/Ubuntuが `uthash-dev` パッケージにuthashを収録

- uthashは16,211回ダウンロードされた

</div>

<div class="paragraph">

このリリースへのフィードバックと修正を提供したYu Feng、Richard Cook、Dino Ciuffetti、Chris Groer、Arun Cherianに感謝します。

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_3_2010_10_31-->

## バージョン 1.9.3 (2010-10-31)

<div class="sectionbody">

<div class="ulist">

- Intelコンパイラーとの互換性のため `ifdef` を修正（degskiに感謝）

- C++のキャスト規則を満たすよう `HASH_ITER` マクロを修正（Erik Baiに感謝）

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_2_2010_10_04-->

## バージョン 1.9.2 (2010-10-04)

<div class="sectionbody">

<div class="ulist">

- 削除に安全な反復処理をより便利に行える、新しい `HASH_ITER` マクロを追加

- `hashscan` がFreeBSD 8.1以降で動作するように変更（Markus Gebertに感謝）

- 複雑なマクロ引数を正しく評価するため、さらに括弧を追加（nggに感謝）

- 独自にメモリーを管理するプラットフォーム向けに、`uthash_free` フックにszパラメーターを追加。この小さなAPI変更で大きな互換性問題が起きないことを期待（Niall Douglasに感謝）

- uthashは12,294回ダウンロードされた

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_1_2010_05_15-->

## バージョン 1.9.1 (2010-05-15)

<div class="sectionbody">

<div class="ulist">

- `uthash.h` と `utstring.h` を併用した際の再定義警告を修正

- `utstring_init` のバグを修正

- `HASH_FIND_PTR` と `HASH_ADD_PTR` を追加（Niall Douglasに感謝）

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_9_2010_03_31-->

## バージョン 1.9 (2010-03-31)

<div class="sectionbody">

<div class="ulist">

- uthashがVisual Studio 2008と2010のCまたはC++コードに対応

- 新しいヘッダー[utarray.h](/docs/uthash/v2-4-0/ja/01-guides/03-utarray/)と[utstring.h](/docs/uthash/v2-4-0/ja/01-guides/06-utstring/)を収録。これらはマクロで動的配列と文字列を実装

- [utlist.h](/docs/uthash/v2-4-0/ja/01-guides/02-utlist/)に削除に安全なイテレーターと検索マクロを追加

- テストスイートがVisual Studio上で動作するように変更（degskiに感謝）

- utarrayとutlistの機能を提案したCharalampos P.に特別な感謝

- uthashは9,616回ダウンロードされた

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_8_2009_09_08-->

## バージョン 1.8 (2009-09-08)

<div class="sectionbody">

<div class="ulist">

- 実行中のプロセス内のハッシュテーブルのサイズと品質を報告できる `hashscan` ユーティリティーを追加（Linuxのみ）

- Bloomフィルターに対応。存在しないキーを十分な回数検索する特定の種類のプログラムで、高速化できる可能性がある

- MurmurHashを復活させ、追加のシンボルを定義すれば再び使えるように変更。これは、最適化を有効にしたgccでMurmurHashを使う場合は `-fno-strict-aliasing` フラグが必須であると理解していることを、利用者が表明するための「安全策」

- バケットとテーブルのmallocフックを統合し、mallocフックを1つに変更

- マニュアルを主な説明の節と高度なトピックの節に再編

- 単方向連結リストのソート時にコンパイルエラーが生じる `utlist.h` のバグを修正

- `utlist.h` で、ソート済み双方向連結リストが末尾を指す特別な `head->prev` ポインターを維持しないバグを修正

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_7_2009_06_11-->

## バージョン 1.7 (2009-06-11)

<div class="sectionbody">

<div class="ulist">

- MurmurHashを削除し、Jenkinのハッシュを再び既定に変更。MurmurHashは高性能だったが、厳密エイリアシング規則の面で安全ではなく、最適化してコンパイルすると誤ったコードを生成する。ヘッダーファイル内から `-fno-strict-aliasing` を有効にすることはできない

- `utlist.h` の連結リストマクロを厳密エイリアシング規則に準拠させ、高い最適化レベル（O2またはO3）でも正しいコードを生成するように変更。もともとGNU拡張だった `__typeof__` 拡張の使用は、この拡張をサポートしない他のコンパイラーへの移植性を下げる可能性がある。この拡張は単方向連結リストマクロとソートマクロで使用

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_6_2009_05_08-->

## バージョン 1.6 (2009-05-08)

<div class="sectionbody">

<div class="paragraph">

複数の改善を寄稿したAlfred Heisnerに特別な感謝を捧げます。

</div>

<div class="ulist">

- 2つの新しいハッシュ関数に対応

  <div class="ulist">

  - Paul Hsiehのハッシュ関数（`HASH_SFH`）

  - Austin ApplebyのMurmurHash関数（`HASH_MUR`）

  </div>

- 高い性能のため、MurmurHashを既定のハッシュ関数に変更

- `keystats` のCygwinとMinGWでの経過時間の精度を大幅に改善

- char以外のキーに対する `HASH_FNV`、`HASH_SAX`、`HASH_OAT` のキャストを修正

</div>

<div class="paragraph">

このリリースには、次の変更も含まれます。

</div>

<div class="ulist">

- 新しい `HASH_CLEAR` 操作でハッシュテーブルを1操作で消去

- 新しい `HASH_SELECT` 操作で、指定条件を満たす要素をあるハッシュから別のハッシュへ挿入。選択した要素は両方のハッシュテーブルに存在する。たとえばゲームでは、全ポリゴンのハッシュから表示対象のポリゴンを選択できる

- `HASH_ADD_KEYPTR` の最後の引数が `&a[i]` のような配列メンバーへのポインターの場合に生じるコンパイルエラーを修正

- 対応するすべてのハッシュ関数を使ってテストスイートを実行する、別のテストスクリプト `tests/all_funcs` を追加

</div>

<div class="paragraph">

最後に、次の追加もあります。

</div>

<div class="ulist">

- 新しい独立したヘッダー[utlist.h](/docs/uthash/v2-4-0/ja/01-guides/02-utlist/)を収録。uthashマクロと同じような書き方で、Cの構造体用の *連結リストマクロ* を提供

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_5_2009_02_19-->

## バージョン 1.5 (2009-02-19)

<div class="sectionbody">

<div class="ulist">

- 同時に読み取る複数のスレッドに対して安全に変更

- 作業変数をテーブル内ではなくスタック上に配置（Petter Arvidssonに感謝）。この変更でHASH_FINDが約13%高速化し、同時読み取りが可能になった

- [BSDライセンス](/docs/uthash/v2-4-0/ja/02-license/01-license/)の条件をさらに寛容に変更

- ユーザーガイドの[PDF版](https://troydhanson.github.io/uthash/userguide.pdf)を追加

- [更新ニュース](http://troydhanson.wordpress.com/feed/) <span class="image"> ![(RSS)](/docs/uthash/assets/uthash-v2-4-0/rss.png) </span>を追加

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_4_2008_09_23-->

## バージョン 1.4 (2008-09-23)

<div class="sectionbody">

<div class="ulist">

- ハッシュ内の要素を数える `HASH_COUNT` を追加

- C++に対応し、追加のキャスト要件を満たすように変更。`tests/` ディレクトリで `make cplusplus` を実行すると、すべてのテストプログラムをC++コンパイラーでコンパイルするように変更

- UT_hash_handleから `elmt` ポインターを削除。ハッシュハンドルのアドレスから `hho`（ハッシュハンドルのオフセット）を引いてelmtを計算

- L.S.Chinによる寄稿：コンパイラー警告を抑えるため、ポインター計算の前に `void*` をchar\*へキャスト。`sizeof(void*) == sizeof(char*)` を要求するC標準にコンパイラーが従うと仮定

- Tiago Cunhaの提案により、do_testsが意味のある終了ステータスを返すように変更し、パッケージマネージャーによるインストールでテスト成功を確認できるようにした

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_3_2008_07_27-->

## バージョン 1.3 (2008-07-27)

<div class="sectionbody">

<div class="ulist">

- 浮動小数点を使わず整数演算のみを使用。FPUのないCPUに対応

- 理想的でないチェーン位置の要素の割合を測る `hash_q` 指標を削除。必要なのはこの割合が0.5未満かどうかだけであり、高速なビット演算による検査で判定するように変更

- ハッシュへの要素追加時に、必要のたびに再計算する代わりにキーのハッシュ値を先に計算して保存。このhashvをハッシュハンドルに格納。バケット拡張アルゴリズムで大幅な高速化の可能性があり、削除もわずかに改善

- 最大理想チェーン長の計算の小さなバグを修正。v1.2の446行目はa/(b\*2)の代わりにa/b\*2を誤って計算していた。このバグにより、バケットごとの *最大チェーン長の乗数*（特定のバケットが多用されるときにバケット拡張を遅らせる係数）が、意図より小さい、拡張が起きやすい値となり、バケット拡張がより容易に起きていた

- ソースコメントと構造体内の変数名を改善

- `HASH_JSW` を削除。長い乱数配列がコードを読みにくくしていた

- `HASH_SRT(hh,hash,cmp)` を、`HASH_SORT(hash,cmp)` を一般化したものとして追加。hh以外の名前のハッシュハンドル用のソートマクロがなかったのは、uthash 1.2の欠落だった

- `HASH_FSCK` を、ハッシュハンドルの名前にかかわらず動作するように修正

- 同じ変数が先頭と削除対象を参照する特殊な `HASH_DEL(a,a)` の場合に正しく動作するように変更（先頭を進めると削除対象への正しい参照を失う）。ハッシュテーブル内の作業領域に削除対象のハッシュハンドルを保存して修正

- MinGWでテストを実行できるように変更

- uthash-1.0以来、3000+回ダウンロードされた

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_2_2006_11_22-->

## バージョン 1.2 (2006-11-22)

<div class="sectionbody">

<div class="ulist">

- 新しい `HASH_SORT` マクロを追加

- Cygwinに対応

- ユーザーガイドにクリックできる目次を追加（ブラウザー上で目次を生成する手法をAsciiDocプロジェクトに還元し、AsciiDoc v8.1.0に組み込まれた）

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_1_2006_06_28-->

## バージョン 1.1 (2006-06-28)

<div class="sectionbody">

<div class="ulist">

- uthash-1.1をリリース

- 利用者が選べる複数の組み込みハッシュ関数に対応

- 新しいkeystatsユーティリティーでハッシュ関数の性能を定量化

</div>

</div>

</div>

<div class="sect1">

<!--libx-source-heading:_version_1_0_2006_06_02-->

## バージョン 1.0 (2006-06-02)

<div class="sectionbody">

<div class="ulist">

- 初回リリース

</div>

</div>

</div>
