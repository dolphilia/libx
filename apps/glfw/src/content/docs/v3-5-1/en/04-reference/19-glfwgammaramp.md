---
title: "GLFWgammaramp structure"
description: "GLFW 3.5.1 GLFWgammaramp structure"
---

Gamma ramp. [More...](/docs/glfw/v3-5-1/en/04-reference/19-glfwgammaramp/#details)

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="data-fields" class="groupheader"><span id="pub-attribs"></span> Data Fields</h2></td>
</tr>
<tr id="r_a2cce5d968734b685623eef913e635138" class="memitem:a2cce5d968734b685623eef913e635138">
<td class="memItemLeft" style="text-align: right;" data-valign="top">unsigned short * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/19-glfwgammaramp/#a2cce5d968734b685623eef913e635138" class="el">red</a></td>
</tr>
<tr class="separator:a2cce5d968734b685623eef913e635138">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_affccc6f5df47820b6562d709da3a5a3a" class="memitem:affccc6f5df47820b6562d709da3a5a3a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">unsigned short * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/19-glfwgammaramp/#affccc6f5df47820b6562d709da3a5a3a" class="el">green</a></td>
</tr>
<tr class="separator:affccc6f5df47820b6562d709da3a5a3a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_acf0c836d0efe29c392fe8d1a1042744b" class="memitem:acf0c836d0efe29c392fe8d1a1042744b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">unsigned short * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/19-glfwgammaramp/#acf0c836d0efe29c392fe8d1a1042744b" class="el">blue</a></td>
</tr>
<tr class="separator:acf0c836d0efe29c392fe8d1a1042744b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ad620e1cffbff9a32c51bca46301b59a5" class="memitem:ad620e1cffbff9a32c51bca46301b59a5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">unsigned int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/19-glfwgammaramp/#ad620e1cffbff9a32c51bca46301b59a5" class="el">size</a></td>
</tr>
<tr class="separator:ad620e1cffbff9a32c51bca46301b59a5">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

<span id="details"></span>

## Detailed Description

<div class="textblock">

This describes the gamma ramp for a monitor.

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_gamma" class="el">Gamma ramp</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga76ba90debcf0062b5c4b73052b24f96f" class="el">glfwGetGammaRamp</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga583f0ffd0d29613d8cd172b996bbf0dd" class="el">glfwSetGammaRamp</a>

<!-- -->

Since  
Added in version 3.0.

</div>

## Field Documentation

<span id="a2cce5d968734b685623eef913e635138"></span>

## <span class="permalink">[◆ ](#a2cce5d968734b685623eef913e635138)</span>red

<div class="memitem">

<div class="memproto">

|                                     |
|-------------------------------------|
| unsigned short\* GLFWgammaramp::red |

</div>

<div class="memdoc">

An array of value describing the response of the red channel.

</div>

</div>

<span id="affccc6f5df47820b6562d709da3a5a3a"></span>

## <span class="permalink">[◆ ](#affccc6f5df47820b6562d709da3a5a3a)</span>green

<div class="memitem">

<div class="memproto">

|                                       |
|---------------------------------------|
| unsigned short\* GLFWgammaramp::green |

</div>

<div class="memdoc">

An array of value describing the response of the green channel.

</div>

</div>

<span id="acf0c836d0efe29c392fe8d1a1042744b"></span>

## <span class="permalink">[◆ ](#acf0c836d0efe29c392fe8d1a1042744b)</span>blue

<div class="memitem">

<div class="memproto">

|                                      |
|--------------------------------------|
| unsigned short\* GLFWgammaramp::blue |

</div>

<div class="memdoc">

An array of value describing the response of the blue channel.

</div>

</div>

<span id="ad620e1cffbff9a32c51bca46301b59a5"></span>

## <span class="permalink">[◆ ](#ad620e1cffbff9a32c51bca46301b59a5)</span>size

<div class="memitem">

<div class="memproto">

|                                  |
|----------------------------------|
| unsigned int GLFWgammaramp::size |

</div>

<div class="memdoc">

The number of elements in each array.

</div>

</div>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

- <a href="https://www.glfw.org/docs/3.5.1/glfw3_8h_source.html" class="el">glfw3.h</a>
