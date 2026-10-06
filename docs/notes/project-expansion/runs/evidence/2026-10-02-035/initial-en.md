---
title: "GLFWimage structure"
description: "GLFW 3.5.1 GLFWimage structure"
---

Image data. [More...](/docs/glfw/v3-5-1/en/04-reference/20-glfwimage/#details)

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="data-fields" class="groupheader"><span id="pub-attribs"></span> Data Fields</h2></td>
</tr>
<tr id="r_af6a71cc999fe6d3aea31dd7e9687d835" class="memitem:af6a71cc999fe6d3aea31dd7e9687d835">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/20-glfwimage/#af6a71cc999fe6d3aea31dd7e9687d835" class="el">width</a></td>
</tr>
<tr class="separator:af6a71cc999fe6d3aea31dd7e9687d835">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_a0b7d95368f0c80d5e5c9875057c7dbec" class="memitem:a0b7d95368f0c80d5e5c9875057c7dbec">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/20-glfwimage/#a0b7d95368f0c80d5e5c9875057c7dbec" class="el">height</a></td>
</tr>
<tr class="separator:a0b7d95368f0c80d5e5c9875057c7dbec">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_a0c532a5c2bb715555279b7817daba0fb" class="memitem:a0c532a5c2bb715555279b7817daba0fb">
<td class="memItemLeft" style="text-align: right;" data-valign="top">unsigned char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/20-glfwimage/#a0c532a5c2bb715555279b7817daba0fb" class="el">pixels</a></td>
</tr>
<tr class="separator:a0c532a5c2bb715555279b7817daba0fb">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

<span id="details"></span>

## Detailed Description

<div class="textblock">

This describes a single 2D image. See the documentation for each related function what the expected pixel format is.

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#cursor_custom" class="el">Custom cursor creation</a>

<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_icon" class="el">Window icon</a>

<!-- -->

Since  
Added in version 2.1. **GLFW 3:** Removed format and bytes-per-pixel members.

</div>

## Field Documentation

<span id="af6a71cc999fe6d3aea31dd7e9687d835"></span>

## <span class="permalink">[◆ ](#af6a71cc999fe6d3aea31dd7e9687d835)</span>width

<div class="memitem">

<div class="memproto">

|                      |
|----------------------|
| int GLFWimage::width |

</div>

<div class="memdoc">

The width, in pixels, of this image.

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

The height, in pixels, of this image.

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

The pixel data of this image, arranged left-to-right, top-to-bottom.

</div>

</div>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

- <a href="https://www.glfw.org/docs/3.5.1/glfw3_8h_source.html" class="el">glfw3.h</a>
