---
title: "GLFWvidmode 構造体"
description: "GLFW 3.5.1 GLFWvidmode 構造体"
---

ビデオモード型。[詳細...](/docs/glfw/v3-5-1/ja/04-reference/21-glfwvidmode/#details)

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="data-fields" class="groupheader"><span id="pub-attribs"></span> データフィールド</h2></td>
</tr>
<tr id="r_a698dcb200562051a7249cb6ae154c71d" class="memitem:a698dcb200562051a7249cb6ae154c71d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/21-glfwvidmode/#a698dcb200562051a7249cb6ae154c71d" class="el">width</a></td>
</tr>
<tr class="separator:a698dcb200562051a7249cb6ae154c71d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ac65942a5f6981695517437a9d571d03c" class="memitem:ac65942a5f6981695517437a9d571d03c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/21-glfwvidmode/#ac65942a5f6981695517437a9d571d03c" class="el">height</a></td>
</tr>
<tr class="separator:ac65942a5f6981695517437a9d571d03c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_a6066c4ecd251098700062d3b735dba1b" class="memitem:a6066c4ecd251098700062d3b735dba1b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/21-glfwvidmode/#a6066c4ecd251098700062d3b735dba1b" class="el">redBits</a></td>
</tr>
<tr class="separator:a6066c4ecd251098700062d3b735dba1b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_a292fdd281f3485fb3ff102a5bda43faa" class="memitem:a292fdd281f3485fb3ff102a5bda43faa">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/21-glfwvidmode/#a292fdd281f3485fb3ff102a5bda43faa" class="el">greenBits</a></td>
</tr>
<tr class="separator:a292fdd281f3485fb3ff102a5bda43faa">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_af310977f58d2e3b188175b6e3d314047" class="memitem:af310977f58d2e3b188175b6e3d314047">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/21-glfwvidmode/#af310977f58d2e3b188175b6e3d314047" class="el">blueBits</a></td>
</tr>
<tr class="separator:af310977f58d2e3b188175b6e3d314047">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_a791bdd6c7697b09f7e9c97054bf05649" class="memitem:a791bdd6c7697b09f7e9c97054bf05649">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/21-glfwvidmode/#a791bdd6c7697b09f7e9c97054bf05649" class="el">refreshRate</a></td>
</tr>
<tr class="separator:a791bdd6c7697b09f7e9c97054bf05649">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

<span id="details"></span>

## 詳細説明

<div class="textblock">

これは単一のビデオモードを表します。

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_modes" class="el">ビデオモード</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gaba376fa7e76634b4788bddc505d6c9d5" class="el">glfwGetVideoMode</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gad2e24d2843cb7d6c26202cddd530fc1b" class="el">glfwGetVideoModes</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。**GLFW 3:** リフレッシュレートのメンバーが追加されました。

</div>

## フィールドの詳細

<span id="a698dcb200562051a7249cb6ae154c71d"></span>

## <span class="permalink">[◆ ](#a698dcb200562051a7249cb6ae154c71d)</span>width

<div class="memitem">

<div class="memproto">

|                        |
|------------------------|
| int GLFWvidmode::width |

</div>

<div class="memdoc">

ビデオモードの幅（スクリーン座標単位）。

</div>

</div>

<span id="ac65942a5f6981695517437a9d571d03c"></span>

## <span class="permalink">[◆ ](#ac65942a5f6981695517437a9d571d03c)</span>height

<div class="memitem">

<div class="memproto">

|                         |
|-------------------------|
| int GLFWvidmode::height |

</div>

<div class="memdoc">

ビデオモードの高さ（スクリーン座標単位）。

</div>

</div>

<span id="a6066c4ecd251098700062d3b735dba1b"></span>

## <span class="permalink">[◆ ](#a6066c4ecd251098700062d3b735dba1b)</span>redBits

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| int GLFWvidmode::redBits |

</div>

<div class="memdoc">

ビデオモードの赤チャンネルのビット深度。

</div>

</div>

<span id="a292fdd281f3485fb3ff102a5bda43faa"></span>

## <span class="permalink">[◆ ](#a292fdd281f3485fb3ff102a5bda43faa)</span>greenBits

<div class="memitem">

<div class="memproto">

|                            |
|----------------------------|
| int GLFWvidmode::greenBits |

</div>

<div class="memdoc">

ビデオモードの緑チャンネルのビット深度。

</div>

</div>

<span id="af310977f58d2e3b188175b6e3d314047"></span>

## <span class="permalink">[◆ ](#af310977f58d2e3b188175b6e3d314047)</span>blueBits

<div class="memitem">

<div class="memproto">

|                           |
|---------------------------|
| int GLFWvidmode::blueBits |

</div>

<div class="memdoc">

ビデオモードの青チャンネルのビット深度。

</div>

</div>

<span id="a791bdd6c7697b09f7e9c97054bf05649"></span>

## <span class="permalink">[◆ ](#a791bdd6c7697b09f7e9c97054bf05649)</span>refreshRate

<div class="memitem">

<div class="memproto">

|                              |
|------------------------------|
| int GLFWvidmode::refreshRate |

</div>

<div class="memdoc">

ビデオモードのリフレッシュレート（Hz 単位）。

</div>

</div>

------------------------------------------------------------------------

この構造体のドキュメントは、次のファイルから生成されました。

- <a href="https://www.glfw.org/docs/3.5.1/glfw3_8h_source.html" class="el">glfw3.h</a>
