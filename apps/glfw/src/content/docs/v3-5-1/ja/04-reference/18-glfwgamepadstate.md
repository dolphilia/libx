---
title: "GLFWgamepadstate 構造体"
description: "GLFW 3.5.1 GLFWgamepadstate 構造体"
licenseSource: "glfw-3.5.1"
---

> このリファレンスページは、[GLFW 3.5.1 公式ドキュメント](https://www.glfw.org/docs/3.5.1/)を Markdown 向けに改変したものです。書式、ナビゲーション、リンクは libx 用に変更していますが、技術的内容は GLFW 3.5.1 ソース配布物に基づいています。

ゲームパッド入力状態。[詳細...](/docs/glfw/v3-5-1/ja/04-reference/18-glfwgamepadstate/#details)

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="data-fields" class="groupheader"><span id="pub-attribs"></span> データフィールド</h2></td>
</tr>
<tr id="r_a27e9896b51c65df15fba2c7139bfdb9a" class="memitem:a27e9896b51c65df15fba2c7139bfdb9a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">unsigned char </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/18-glfwgamepadstate/#a27e9896b51c65df15fba2c7139bfdb9a" class="el">buttons</a> [15]</td>
</tr>
<tr class="separator:a27e9896b51c65df15fba2c7139bfdb9a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_a8b2c8939b1d31458de5359998375c189" class="memitem:a8b2c8939b1d31458de5359998375c189">
<td class="memItemLeft" style="text-align: right;" data-valign="top">float </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/18-glfwgamepadstate/#a8b2c8939b1d31458de5359998375c189" class="el">axes</a> [6]</td>
</tr>
<tr class="separator:a8b2c8939b1d31458de5359998375c189">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

<span id="details"></span>

## 詳細説明

<div class="textblock">

これはゲームパッドの入力状態を表します。

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#gamepad" class="el">ゲームパッド入力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gadccddea8bce6113fa459de379ddaf051" class="el">glfwGetGamepadState</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

## フィールドの詳細

<span id="a27e9896b51c65df15fba2c7139bfdb9a"></span>

## <span class="permalink">[◆ ](#a27e9896b51c65df15fba2c7139bfdb9a)</span>buttons

<div class="memitem">

<div class="memproto">

|                                               |
|-----------------------------------------------|
| unsigned char GLFWgamepadstate::buttons\[15\] |

</div>

<div class="memdoc">

各<a href="/docs/glfw/v3-5-1/ja/04-reference/14-gamepad-buttons/" class="el">ゲームパッドボタン</a>の状態。`GLFW_PRESS` または `GLFW_RELEASE`。

</div>

</div>

<span id="a8b2c8939b1d31458de5359998375c189"></span>

## <span class="permalink">[◆ ](#a8b2c8939b1d31458de5359998375c189)</span>axes

<div class="memitem">

<div class="memproto">

|                                   |
|-----------------------------------|
| float GLFWgamepadstate::axes\[6\] |

</div>

<div class="memdoc">

各<a href="/docs/glfw/v3-5-1/ja/04-reference/15-gamepad-axes/" class="el">ゲームパッド軸</a>の状態。-1.0 以上 1.0 以下の範囲。

</div>

</div>

------------------------------------------------------------------------

この構造体のドキュメントは、次のファイルから生成されました。

- <a href="https://www.glfw.org/docs/3.5.1/glfw3_8h_source.html" class="el">glfw3.h</a>
