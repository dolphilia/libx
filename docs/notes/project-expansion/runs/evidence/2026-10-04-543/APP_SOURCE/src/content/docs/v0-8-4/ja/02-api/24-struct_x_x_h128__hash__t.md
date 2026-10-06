---
title: "XXH128_hash_t構造体（公開API・XXH3ファミリー）"
licenseSource: "xxhash-api"
---

<div class="contents xxhash-api">&#10;&#10;<p>128ビットハッシュの戻り値。  &#10; <a href="#details">詳細…</a></p>&#10;&#10;<p><code>#include &lt;<a class="el" href="/docs/xxhash/v0-8-4/ja/02-api/33-xxhash_8h_source/">xxhash.h</a>&gt;</code></p>&#10;<table class="memberdecls">&#10;<tbody><tr class="heading"><td colspan="2"><h2 id="header-pub-attribs" class="groupheader"><a id="pub-attribs" name="pub-attribs"></a>&#10;データフィールド</h2></td></tr>&#10;<tr class="memitem:a706323c9b3e76414ec77f8f93e8644ef" id="r_a706323c9b3e76414ec77f8f93e8644ef"><td class="memItemLeft"><a class="el" href="/docs/xxhash/v0-8-4/ja/02-api/20-group__public/#ga5406b285b18dfcefa93efed489e3b603">XXH64_hash_t</a>&nbsp;</td><td class="memItemRight"><a class="el" href="#a706323c9b3e76414ec77f8f93e8644ef">low64</a></td></tr>&#10;<tr class="memitem:ad4e0c851eb11bd3f8042ceebc15fe0a8" id="r_ad4e0c851eb11bd3f8042ceebc15fe0a8"><td class="memItemLeft"><a class="el" href="/docs/xxhash/v0-8-4/ja/02-api/20-group__public/#ga5406b285b18dfcefa93efed489e3b603">XXH64_hash_t</a>&nbsp;</td><td class="memItemRight"><a class="el" href="#ad4e0c851eb11bd3f8042ceebc15fe0a8">high64</a></td></tr>&#10;</tbody></table>&#10;<a name="details" id="details"></a><h2 id="header-details" class="groupheader">詳細説明</h2>&#10;<div class="textblock"><p>128ビットハッシュの戻り値。 </p>&#10;<p>リトルエンディアンの順序で格納しますが、各フィールド自体はネイティブのエンディアンです。 </p>&#10;</div><a name="doc-variable-members" id="doc-variable-members"></a><h2 id="header-doc-variable-members" class="groupheader">フィールドの説明</h2>&#10;<a id="a706323c9b3e76414ec77f8f93e8644ef" name="a706323c9b3e76414ec77f8f93e8644ef"></a>&#10;<h2 class="memtitle"><span class="permalink"><a href="#a706323c9b3e76414ec77f8f93e8644ef">◆&nbsp;</a></span>low64</h2>&#10;&#10;<div class="memitem">&#10;<div class="memproto">&#10;      <table class="memname">&#10;        <tbody><tr>&#10;          <td class="memname"><a class="el" href="/docs/xxhash/v0-8-4/ja/02-api/20-group__public/#ga5406b285b18dfcefa93efed489e3b603">XXH64_hash_t</a> XXH128_hash_t::low64</td>&#10;        </tr>&#10;      </tbody></table>&#10;</div><div class="memdoc">&#10;<p><span class="tt">value &amp; 0xFFFFFFFFFFFFFFFF</span> </p>&#10;&#10;</div>&#10;</div>&#10;<a id="ad4e0c851eb11bd3f8042ceebc15fe0a8" name="ad4e0c851eb11bd3f8042ceebc15fe0a8"></a>&#10;<h2 class="memtitle"><span class="permalink"><a href="#ad4e0c851eb11bd3f8042ceebc15fe0a8">◆&nbsp;</a></span>high64</h2>&#10;&#10;<div class="memitem">&#10;<div class="memproto">&#10;      <table class="memname">&#10;        <tbody><tr>&#10;          <td class="memname"><a class="el" href="/docs/xxhash/v0-8-4/ja/02-api/20-group__public/#ga5406b285b18dfcefa93efed489e3b603">XXH64_hash_t</a> XXH128_hash_t::high64</td>&#10;        </tr>&#10;      </tbody></table>&#10;</div><div class="memdoc">&#10;<p><span class="tt">value &gt;&gt; 64</span> </p>&#10;&#10;</div>&#10;</div>&#10;<hr>この構造体の文書は、次のファイルから生成しました：<ul>&#10;<li><a class="el" href="/docs/xxhash/v0-8-4/ja/02-api/33-xxhash_8h_source/">xxhash.h</a></li>&#10;</ul>&#10;</div>

## 出典と通知

記録した確認では、文書専用のライセンス表記は見つかりませんでした。ユーザー承認済みの運用方針に基づき、この注記とともにソフトウェアコンポーネントのBSD-2-Clauseライセンスを文書に適用します。これは運用上の判断であり、新たに許可を得たことを意味しません。

固定したソフトウェアのバージョン：**0.8.4**。ソースコミット：`c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0`。非公式の日本語訳です。書式、内部リンク、および明示した編集注記はLibxによる変更です。

[api-header](/docs/xxhash/v0-8-4/ja/03-notices/api-header/) · [dispatch-c](/docs/xxhash/v0-8-4/ja/03-notices/dispatch-c/) · [dispatch-h](/docs/xxhash/v0-8-4/ja/03-notices/dispatch-h/)

固定した公開[Doxyfile](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/Doxyfile) の`xxhash.h`と`xxh_x86dispatch.c`のファイルパターンを使って生成しました。

[xxhash.h — 固定した原典](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/xxhash.h) · [xxhash.h — 原文のダウンロード](/docs/xxhash/source/v0-8-4/xxhash.h.txt)

[xxh_x86dispatch.c — 固定した原典](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/xxh_x86dispatch.c) · [xxh_x86dispatch.c — 原文のダウンロード](/docs/xxhash/source/v0-8-4/xxh_x86dispatch.c.txt)

