---
title: "GLFWallocator 構造体"
description: "GLFW 3.5.1 GLFWallocator 構造体"
licenseSource: "glfw-3.5.1"
---

> このリファレンスページは、[GLFW 3.5.1 公式ドキュメント](https://www.glfw.org/docs/3.5.1/)を Markdown 向けに改変したものです。書式、ナビゲーション、リンクは libx 用に変更していますが、技術的内容は GLFW 3.5.1 ソース配布物に基づいています。

独自ヒープメモリアロケーター。[詳細...](/docs/glfw/v3-5-1/ja/04-reference/17-glfwallocator/#details)

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="data-fields" class="groupheader"><span id="pub-attribs"></span> データフィールド</h2></td>
</tr>
<tr id="r_a18a798136f17a9cb105be18312193bf7" class="memitem:a18a798136f17a9cb105be18312193bf7">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga4306a564e9f60f4de8cc8f31731a3120" class="el">GLFWallocatefun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/17-glfwallocator/#a18a798136f17a9cb105be18312193bf7" class="el">allocate</a></td>
</tr>
<tr class="separator:a18a798136f17a9cb105be18312193bf7">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_af5a674af9e170095b968f467233437be" class="memitem:af5a674af9e170095b968f467233437be">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga3e88a829615d8efe8bec1746f7309c63" class="el">GLFWreallocatefun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/17-glfwallocator/#af5a674af9e170095b968f467233437be" class="el">reallocate</a></td>
</tr>
<tr class="separator:af5a674af9e170095b968f467233437be">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ab74cf9a969e73e6eb65a6112a591a988" class="memitem:ab74cf9a969e73e6eb65a6112a591a988">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga7181615eda94c4b07bd72bdcee39fa28" class="el">GLFWdeallocatefun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/17-glfwallocator/#ab74cf9a969e73e6eb65a6112a591a988" class="el">deallocate</a></td>
</tr>
<tr class="separator:ab74cf9a969e73e6eb65a6112a591a988">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_af6153be74dbaf7f0a7e8bd3bfc039910" class="memitem:af6153be74dbaf7f0a7e8bd3bfc039910">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/17-glfwallocator/#af6153be74dbaf7f0a7e8bd3bfc039910" class="el">user</a></td>
</tr>
<tr class="separator:af6153be74dbaf7f0a7e8bd3bfc039910">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

<span id="details"></span>

## 詳細説明

<div class="textblock">

これは GLFW 用の独自ヒープメモリアロケーターを表します。アロケーターを設定するには、ライブラリを初期化する前に <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6" class="el">glfwInitAllocator</a> へ渡します。

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#init_allocator" class="el">独自ヒープメモリアロケーター</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6" class="el">glfwInitAllocator</a>

<!-- -->

導入バージョン  
バージョン 3.4 で追加されました。

</div>

## フィールドの詳細

<span id="a18a798136f17a9cb105be18312193bf7"></span>

## <span class="permalink">[◆ ](#a18a798136f17a9cb105be18312193bf7)</span>allocate

<div class="memitem">

<div class="memproto">

|  |
|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga4306a564e9f60f4de8cc8f31731a3120" class="el">GLFWallocatefun</a> GLFWallocator::allocate |

</div>

<div class="memdoc">

メモリ確保関数。確保関数の詳細については <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga4306a564e9f60f4de8cc8f31731a3120" class="el">GLFWallocatefun</a> を参照してください。

</div>

</div>

<span id="af5a674af9e170095b968f467233437be"></span>

## <span class="permalink">[◆ ](#af5a674af9e170095b968f467233437be)</span>reallocate

<div class="memitem">

<div class="memproto">

|  |
|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga3e88a829615d8efe8bec1746f7309c63" class="el">GLFWreallocatefun</a> GLFWallocator::reallocate |

</div>

<div class="memdoc">

メモリ再確保関数。再確保関数の詳細については <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga3e88a829615d8efe8bec1746f7309c63" class="el">GLFWreallocatefun</a> を参照してください。

</div>

</div>

<span id="ab74cf9a969e73e6eb65a6112a591a988"></span>

## <span class="permalink">[◆ ](#ab74cf9a969e73e6eb65a6112a591a988)</span>deallocate

<div class="memitem">

<div class="memproto">

|  |
|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga7181615eda94c4b07bd72bdcee39fa28" class="el">GLFWdeallocatefun</a> GLFWallocator::deallocate |

</div>

<div class="memdoc">

メモリ解放関数。解放関数の詳細については <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga7181615eda94c4b07bd72bdcee39fa28" class="el">GLFWdeallocatefun</a> を参照してください。

</div>

</div>

<span id="af6153be74dbaf7f0a7e8bd3bfc039910"></span>

## <span class="permalink">[◆ ](#af6153be74dbaf7f0a7e8bd3bfc039910)</span>user

<div class="memitem">

<div class="memproto">

|                            |
|----------------------------|
| void\* GLFWallocator::user |

</div>

<div class="memdoc">

この独自アロケーターのユーザーポインター。この値はアロケーター関数へ渡されます。

</div>

</div>

------------------------------------------------------------------------

この構造体のドキュメントは、次のファイルから生成されました。

- <a href="https://www.glfw.org/docs/3.5.1/glfw3_8h_source.html" class="el">glfw3.h</a>
