---
title: "xxh_x86dispatch.c File Reference"
licenseSource: "xxhash-fixed"
---

<div class="contents">&#10;<div class="textblock"><code>#include &lt;assert.h&gt;</code><br>&#10;</div><table class="memberdecls">&#10;<tbody><tr class="heading"><td colspan="2"><h2 id="header-define-members" class="groupheader"><a id="define-members" name="define-members"></a>&#10;Macros</h2></td></tr>&#10;<tr class="memitem:gab81e416548f2b86412f670dc435a979b" id="r_gab81e416548f2b86412f670dc435a979b"><td class="memItemLeft">#define&nbsp;</td><td class="memItemRight"><a class="el" href="/docs/xxhash-trial/v0-8-4/en/02-api/18-group__dispatch/#gab81e416548f2b86412f670dc435a979b">XXH_DISPATCH_SCALAR</a>&nbsp;&nbsp;&nbsp;1</td></tr>&#10;<tr class="memdesc:gab81e416548f2b86412f670dc435a979b"><td class="mdescLeft">&nbsp;</td><td class="mdescRight">Enables/dispatching the scalar code path.  <br></td></tr>&#10;<tr class="memitem:ga3f9ae9edb0b15907592a18f74996f523" id="r_ga3f9ae9edb0b15907592a18f74996f523"><td class="memItemLeft">#define&nbsp;</td><td class="memItemRight"><a class="el" href="/docs/xxhash-trial/v0-8-4/en/02-api/18-group__dispatch/#ga3f9ae9edb0b15907592a18f74996f523">XXH_DISPATCH_AVX2</a>&nbsp;&nbsp;&nbsp;0</td></tr>&#10;<tr class="memdesc:ga3f9ae9edb0b15907592a18f74996f523"><td class="mdescLeft">&nbsp;</td><td class="mdescRight">Enables/disables dispatching for AVX2.  <br></td></tr>&#10;<tr class="memitem:gae0ba94e5d5bf66251a96f86b3cd7e08a" id="r_gae0ba94e5d5bf66251a96f86b3cd7e08a"><td class="memItemLeft">#define&nbsp;</td><td class="memItemRight"><a class="el" href="/docs/xxhash-trial/v0-8-4/en/02-api/18-group__dispatch/#gae0ba94e5d5bf66251a96f86b3cd7e08a">XXH_DISPATCH_AVX512</a>&nbsp;&nbsp;&nbsp;0</td></tr>&#10;<tr class="memdesc:gae0ba94e5d5bf66251a96f86b3cd7e08a"><td class="mdescLeft">&nbsp;</td><td class="mdescRight">Enables/disables dispatching for AVX512.  <br></td></tr>&#10;</tbody></table>&#10;<a name="details" id="details"></a><h2 id="header-details" class="groupheader">Detailed Description</h2>&#10;<div class="textblock"><p>Automatic dispatcher code for the <a class="el" href="/docs/xxhash-trial/v0-8-4/en/02-api/14-group___x_x_h3__family/" title="XXH3 family">XXH3 family</a> on x86-based targets.</p>&#10;<p>Optional add-on.</p>&#10;<p><b>Compile this file with the default flags for your target.</b> Note that compiling with flags like <span class="tt">-mavx*</span>, <span class="tt">-march=native</span>, or <span class="tt">/arch:AVX*</span> will make the resulting binary incompatible with cpus not supporting the requested instruction set. </p>&#10;</div></div>

> 文書専用ライセンスの表記が確認できないため、ソフトウェア本体のBSD 2-Clause Licenseを文書にも適用する運用判断で掲載しています。非公式日本語訳・公式Doxyfileからの生成と形式変換。

[固定原ソース](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/xxhash.h)


## Source and notices

[api-header](/docs/xxhash-trial/v0-8-4/en/03-notices/api-header/) · [dispatch-c](/docs/xxhash-trial/v0-8-4/en/03-notices/dispatch-c/) · [dispatch-h](/docs/xxhash-trial/v0-8-4/en/03-notices/dispatch-h/)

[Fixed source](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/xxhash.h)
