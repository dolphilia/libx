---
title: "GLFWimage 構造体"
description: "GLFW 3.5.1 GLFWimage 構造体"
---

画像データ。[詳細...](/docs/glfw/v3-5-1/ja/04-reference/20-glfwimage/#details)

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="data-fields" class="groupheader"><span id="pub-attribs"></span> データフィールド</h2></td>
</tr>
<tr id="r_af6a71cc999fe6d3aea31dd7e9687d835" class="memitem:af6a71cc999fe6d3aea31dd7e9687d835">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/20-glfwimage/#af6a71cc999fe6d3aea31dd7e9687d835" class="el">width</a></td>
</tr>
<tr class="separator:af6a71cc999fe6d3aea31dd7e9687d835">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_a0b7d95368f0c80d5e5c9875057c7dbec" class="memitem:a0b7d95368f0c80d5e5c9875057c7dbec">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/20-glfwimage/#a0b7d95368f0c80d5e5c9875057c7dbec" class="el">height</a></td>
</tr>
<tr class="separator:a0b7d95368f0c80d5e5c9875057c7dbec">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_a0c532a5c2bb715555279b7817daba0fb" class="memitem:a0c532a5c2bb715555279b7817daba0fb">
<td class="memItemLeft" style="text-align: right;" data-valign="top">unsigned char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/20-glfwimage/#a0c532a5c2bb715555279b7817daba0fb" class="el">pixels</a></td>
</tr>
<tr class="separator:a0c532a5c2bb715555279b7817daba0fb">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

<span id="details"></span>

## 詳細説明

<div class="textblock">

これは単一の 2D 画像を表します。期待されるピクセル形式については、各関連関数のドキュメントを参照してください。

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_custom" class="el">独自カーソルの作成</a>

<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_icon" class="el">ウィンドウアイコン</a>

<!-- -->

導入バージョン  
バージョン 2.1 で追加されました。**GLFW 3:** format および bytes-per-pixel メンバーが削除されました。

</div>

## フィールドの詳細

<span id="af6a71cc999fe6d3aea31dd7e9687d835"></span>

## <span class="permalink">[◆ ](#af6a71cc999fe6d3aea31dd7e9687d835)</span>width

<div class="memitem">

<div class="memproto">

|                      |
|----------------------|
| int GLFWimage::width |

</div>

<div class="memdoc">

この画像の幅（ピクセル単位）。

</div>

</div>

<span id="a0b7d95368f0c80d5e5c9875057c7dbec"></span>

## <span class="permalink">[◆ ](#a0b7d95368f0c80d5e5c9875057c7dbec)</span>height

<div class="memitem">

<div class="memproto">

|                       |
|-----------------------|
| int GLFWimage::height |

</div>

<div class="memdoc">

この画像の高さ（ピクセル単位）。

</div>

</div>

<span id="a0c532a5c2bb715555279b7817daba0fb"></span>

## <span class="permalink">[◆ ](#a0c532a5c2bb715555279b7817daba0fb)</span>pixels

<div class="memitem">

<div class="memproto">

|                                   |
|-----------------------------------|
| unsigned char\* GLFWimage::pixels |

</div>

<div class="memdoc">

左から右、上から下の順に並んだ、この画像のピクセルデータ。

</div>

</div>

------------------------------------------------------------------------

この構造体のドキュメントは、次のファイルから生成されました。

- <a href="https://www.glfw.org/docs/3.5.1/glfw3_8h_source.html" class="el">glfw3.h</a>
