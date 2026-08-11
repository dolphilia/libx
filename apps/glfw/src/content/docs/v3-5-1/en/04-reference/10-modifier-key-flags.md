---
title: "Modifier key flags"
description: "GLFW 3.5.1 Modifier key flags"
licenseSource: "glfw-3.5.1"
---

> This reference page is an altered Markdown adaptation of the [official GLFW 3.5.1 documentation](https://www.glfw.org/docs/3.5.1/). Formatting, navigation and links were changed for libx; technical content comes from the GLFW 3.5.1 source distribution.

<span id="details"></span>

## Description

See <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_key" class="el">key input</a> for how these are used.

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="macros" class="groupheader"><span id="define-members"></span> Macros</h2></td>
</tr>
<tr id="r_ga14994d3196c290aaa347248e51740274" class="memitem:ga14994d3196c290aaa347248e51740274">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/10-modifier-key-flags/#ga14994d3196c290aaa347248e51740274" class="el">GLFW_MOD_SHIFT</a>   0x0001</td>
</tr>
<tr class="memdesc:ga14994d3196c290aaa347248e51740274">
<td class="mdescLeft"> </td>
<td class="mdescRight">If this bit is set one or more Shift keys were held down.<br />
</td>
</tr>
<tr class="separator:ga14994d3196c290aaa347248e51740274">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6ed94871c3208eefd85713fa929d45aa" class="memitem:ga6ed94871c3208eefd85713fa929d45aa">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/10-modifier-key-flags/#ga6ed94871c3208eefd85713fa929d45aa" class="el">GLFW_MOD_CONTROL</a>   0x0002</td>
</tr>
<tr class="memdesc:ga6ed94871c3208eefd85713fa929d45aa">
<td class="mdescLeft"> </td>
<td class="mdescRight">If this bit is set one or more Control keys were held down.<br />
</td>
</tr>
<tr class="separator:ga6ed94871c3208eefd85713fa929d45aa">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad2acd5633463c29e07008687ea73c0f4" class="memitem:gad2acd5633463c29e07008687ea73c0f4">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/10-modifier-key-flags/#gad2acd5633463c29e07008687ea73c0f4" class="el">GLFW_MOD_ALT</a>   0x0004</td>
</tr>
<tr class="memdesc:gad2acd5633463c29e07008687ea73c0f4">
<td class="mdescLeft"> </td>
<td class="mdescRight">If this bit is set one or more Alt keys were held down.<br />
</td>
</tr>
<tr class="separator:gad2acd5633463c29e07008687ea73c0f4">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6b64ba10ea0227cf6f42efd0a220aba1" class="memitem:ga6b64ba10ea0227cf6f42efd0a220aba1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/10-modifier-key-flags/#ga6b64ba10ea0227cf6f42efd0a220aba1" class="el">GLFW_MOD_SUPER</a>   0x0008</td>
</tr>
<tr class="memdesc:ga6b64ba10ea0227cf6f42efd0a220aba1">
<td class="mdescLeft"> </td>
<td class="mdescRight">If this bit is set one or more Super keys were held down.<br />
</td>
</tr>
<tr class="separator:ga6b64ba10ea0227cf6f42efd0a220aba1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaefeef8fcf825a6e43e241b337897200f" class="memitem:gaefeef8fcf825a6e43e241b337897200f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/10-modifier-key-flags/#gaefeef8fcf825a6e43e241b337897200f" class="el">GLFW_MOD_CAPS_LOCK</a>   0x0010</td>
</tr>
<tr class="memdesc:gaefeef8fcf825a6e43e241b337897200f">
<td class="mdescLeft"> </td>
<td class="mdescRight">If this bit is set the Caps Lock key is enabled.<br />
</td>
</tr>
<tr class="separator:gaefeef8fcf825a6e43e241b337897200f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga64e020b8a42af8376e944baf61feecbe" class="memitem:ga64e020b8a42af8376e944baf61feecbe">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/10-modifier-key-flags/#ga64e020b8a42af8376e944baf61feecbe" class="el">GLFW_MOD_NUM_LOCK</a>   0x0020</td>
</tr>
<tr class="memdesc:ga64e020b8a42af8376e944baf61feecbe">
<td class="mdescLeft"> </td>
<td class="mdescRight">If this bit is set the Num Lock key is enabled.<br />
</td>
</tr>
<tr class="separator:ga64e020b8a42af8376e944baf61feecbe">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## Macro Definition Documentation

<span id="ga14994d3196c290aaa347248e51740274"></span>

## <span class="permalink">[◆ ](#ga14994d3196c290aaa347248e51740274)</span>GLFW_MOD_SHIFT

<div class="memitem">

<div class="memproto">

|                                  |
|----------------------------------|
| \#define GLFW_MOD_SHIFT   0x0001 |

</div>

<div class="memdoc">

If this bit is set one or more Shift keys were held down.

</div>

</div>

<span id="ga6ed94871c3208eefd85713fa929d45aa"></span>

## <span class="permalink">[◆ ](#ga6ed94871c3208eefd85713fa929d45aa)</span>GLFW_MOD_CONTROL

<div class="memitem">

<div class="memproto">

|                                    |
|------------------------------------|
| \#define GLFW_MOD_CONTROL   0x0002 |

</div>

<div class="memdoc">

If this bit is set one or more Control keys were held down.

</div>

</div>

<span id="gad2acd5633463c29e07008687ea73c0f4"></span>

## <span class="permalink">[◆ ](#gad2acd5633463c29e07008687ea73c0f4)</span>GLFW_MOD_ALT

<div class="memitem">

<div class="memproto">

|                                |
|--------------------------------|
| \#define GLFW_MOD_ALT   0x0004 |

</div>

<div class="memdoc">

If this bit is set one or more Alt keys were held down.

</div>

</div>

<span id="ga6b64ba10ea0227cf6f42efd0a220aba1"></span>

## <span class="permalink">[◆ ](#ga6b64ba10ea0227cf6f42efd0a220aba1)</span>GLFW_MOD_SUPER

<div class="memitem">

<div class="memproto">

|                                  |
|----------------------------------|
| \#define GLFW_MOD_SUPER   0x0008 |

</div>

<div class="memdoc">

If this bit is set one or more Super keys were held down.

</div>

</div>

<span id="gaefeef8fcf825a6e43e241b337897200f"></span>

## <span class="permalink">[◆ ](#gaefeef8fcf825a6e43e241b337897200f)</span>GLFW_MOD_CAPS_LOCK

<div class="memitem">

<div class="memproto">

|                                      |
|--------------------------------------|
| \#define GLFW_MOD_CAPS_LOCK   0x0010 |

</div>

<div class="memdoc">

If this bit is set the Caps Lock key is enabled and the <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_LOCK_KEY_MODS" class="el">GLFW_LOCK_KEY_MODS</a> input mode is set.

</div>

</div>

<span id="ga64e020b8a42af8376e944baf61feecbe"></span>

## <span class="permalink">[◆ ](#ga64e020b8a42af8376e944baf61feecbe)</span>GLFW_MOD_NUM_LOCK

<div class="memitem">

<div class="memproto">

|                                     |
|-------------------------------------|
| \#define GLFW_MOD_NUM_LOCK   0x0020 |

</div>

<div class="memdoc">

If this bit is set the Num Lock key is enabled and the <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_LOCK_KEY_MODS" class="el">GLFW_LOCK_KEY_MODS</a> input mode is set.

</div>

</div>
