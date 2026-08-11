---
title: "GLFWgamepadstate structure"
description: "GLFW 3.5.1 GLFWgamepadstate structure"
licenseSource: "glfw-3.5.1"
---

> This reference page is an altered Markdown adaptation of the [official GLFW 3.5.1 documentation](https://www.glfw.org/docs/3.5.1/). Formatting, navigation and links were changed for libx; technical content comes from the GLFW 3.5.1 source distribution.

Gamepad input state. [More...](/docs/glfw/v3-5-1/en/04-reference/18-glfwgamepadstate/#details)

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="data-fields" class="groupheader"><span id="pub-attribs"></span> Data Fields</h2></td>
</tr>
<tr id="r_a27e9896b51c65df15fba2c7139bfdb9a" class="memitem:a27e9896b51c65df15fba2c7139bfdb9a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">unsigned char </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/18-glfwgamepadstate/#a27e9896b51c65df15fba2c7139bfdb9a" class="el">buttons</a> [15]</td>
</tr>
<tr class="separator:a27e9896b51c65df15fba2c7139bfdb9a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_a8b2c8939b1d31458de5359998375c189" class="memitem:a8b2c8939b1d31458de5359998375c189">
<td class="memItemLeft" style="text-align: right;" data-valign="top">float </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/18-glfwgamepadstate/#a8b2c8939b1d31458de5359998375c189" class="el">axes</a> [6]</td>
</tr>
<tr class="separator:a8b2c8939b1d31458de5359998375c189">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

<span id="details"></span>

## Detailed Description

<div class="textblock">

This describes the input state of a gamepad.

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#gamepad" class="el">Gamepad input</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gadccddea8bce6113fa459de379ddaf051" class="el">glfwGetGamepadState</a>

<!-- -->

Since  
Added in version 3.3.

</div>

## Field Documentation

<span id="a27e9896b51c65df15fba2c7139bfdb9a"></span>

## <span class="permalink">[◆ ](#a27e9896b51c65df15fba2c7139bfdb9a)</span>buttons

<div class="memitem">

<div class="memproto">

|                                               |
|-----------------------------------------------|
| unsigned char GLFWgamepadstate::buttons\[15\] |

</div>

<div class="memdoc">

The states of each <a href="/docs/glfw/v3-5-1/en/04-reference/14-gamepad-buttons/" class="el">gamepad button</a>, `GLFW_PRESS` or `GLFW_RELEASE`.

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

The states of each <a href="/docs/glfw/v3-5-1/en/04-reference/15-gamepad-axes/" class="el">gamepad axis</a>, in the range -1.0 to 1.0 inclusive.

</div>

</div>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

- <a href="https://www.glfw.org/docs/3.5.1/glfw3_8h_source.html" class="el">glfw3.h</a>
