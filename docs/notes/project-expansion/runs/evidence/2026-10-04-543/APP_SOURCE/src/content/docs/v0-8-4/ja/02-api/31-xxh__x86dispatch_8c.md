---
title: "xxh_x86dispatch.cファイルの参照"
licenseSource: "xxhash-api"
---

<div class="contents xxhash-api">&#10;<div class="textblock"><code>#include &lt;assert.h&gt;</code><br>&#10;</div><table class="memberdecls">&#10;<tbody><tr class="heading"><td colspan="2"><h2 id="header-define-members" class="groupheader"><a id="define-members" name="define-members"></a>&#10;マクロ</h2></td></tr>&#10;<tr class="memitem:gab81e416548f2b86412f670dc435a979b" id="r_gab81e416548f2b86412f670dc435a979b"><td class="memItemLeft">#define&nbsp;</td><td class="memItemRight"><a class="el" href="/docs/xxhash/v0-8-4/ja/02-api/18-group__dispatch/#gab81e416548f2b86412f670dc435a979b">XXH_DISPATCH_SCALAR</a>&nbsp;&nbsp;&nbsp;1</td></tr>&#10;<tr class="memdesc:gab81e416548f2b86412f670dc435a979b"><td class="mdescLeft">&nbsp;</td><td class="mdescRight">スカラーの処理経路を有効にしてディスパッチします。  <br></td></tr>&#10;<tr class="memitem:ga3f9ae9edb0b15907592a18f74996f523" id="r_ga3f9ae9edb0b15907592a18f74996f523"><td class="memItemLeft">#define&nbsp;</td><td class="memItemRight"><a class="el" href="/docs/xxhash/v0-8-4/ja/02-api/18-group__dispatch/#ga3f9ae9edb0b15907592a18f74996f523">XXH_DISPATCH_AVX2</a>&nbsp;&nbsp;&nbsp;0</td></tr>&#10;<tr class="memdesc:ga3f9ae9edb0b15907592a18f74996f523"><td class="mdescLeft">&nbsp;</td><td class="mdescRight">AVX2用のディスパッチを有効または無効にします。  <br></td></tr>&#10;<tr class="memitem:gae0ba94e5d5bf66251a96f86b3cd7e08a" id="r_gae0ba94e5d5bf66251a96f86b3cd7e08a"><td class="memItemLeft">#define&nbsp;</td><td class="memItemRight"><a class="el" href="/docs/xxhash/v0-8-4/ja/02-api/18-group__dispatch/#gae0ba94e5d5bf66251a96f86b3cd7e08a">XXH_DISPATCH_AVX512</a>&nbsp;&nbsp;&nbsp;0</td></tr>&#10;<tr class="memdesc:gae0ba94e5d5bf66251a96f86b3cd7e08a"><td class="mdescLeft">&nbsp;</td><td class="mdescRight">AVX512用のディスパッチを有効または無効にします。  <br></td></tr>&#10;</tbody></table>&#10;<a name="details" id="details"></a><h2 id="header-details" class="groupheader">詳細説明</h2>&#10;<div class="textblock"><p>x86ベースの対象上で、 <a class="el" href="/docs/xxhash/v0-8-4/ja/02-api/14-group___x_x_h3__family/" title="XXH3ファミリー">XXH3ファミリー</a> 用の自動ディスパッチを行うコードです。</p>&#10;<p>任意で追加する機能です。</p>&#10;<p><b>このファイルは、対象のデフォルトのフラグでコンパイルしてください。</b> コンパイル時のフラグが、 <span class="tt">-mavx*</span>, <span class="tt">-march=native</span>、または <span class="tt">/arch:AVX*</span> などの場合、指定した命令セットに対応しないCPUとは、生成されたバイナリーの互換性がなくなることに注意してください。 </p>&#10;</div></div>

## 出典と通知

記録した確認では、文書専用のライセンス表記は見つかりませんでした。ユーザー承認済みの運用方針に基づき、この注記とともにソフトウェアコンポーネントのBSD-2-Clauseライセンスを文書に適用します。これは運用上の判断であり、新たに許可を得たことを意味しません。

固定したソフトウェアのバージョン：**0.8.4**。ソースコミット：`c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0`。非公式の日本語訳です。書式、内部リンク、および明示した編集注記はLibxによる変更です。

[api-header](/docs/xxhash/v0-8-4/ja/03-notices/api-header/) · [dispatch-c](/docs/xxhash/v0-8-4/ja/03-notices/dispatch-c/) · [dispatch-h](/docs/xxhash/v0-8-4/ja/03-notices/dispatch-h/)

固定した公開[Doxyfile](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/Doxyfile) の`xxhash.h`と`xxh_x86dispatch.c`のファイルパターンを使って生成しました。

[xxhash.h — 固定した原典](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/xxhash.h) · [xxhash.h — 原文のダウンロード](/docs/xxhash/source/v0-8-4/xxhash.h.txt)

[xxh_x86dispatch.c — 固定した原典](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/xxh_x86dispatch.c) · [xxh_x86dispatch.c — 原文のダウンロード](/docs/xxhash/source/v0-8-4/xxh_x86dispatch.c.txt)

