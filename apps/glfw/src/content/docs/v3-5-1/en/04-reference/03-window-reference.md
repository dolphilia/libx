---
title: "Window reference"
description: "GLFW 3.5.1 Window reference"
---

<span id="details"></span>

## Description

This is the reference documentation for window related functions and types, including creation, deletion and event polling. For more task-oriented information, see the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/" class="el">Window guide</a>.

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="macros" class="groupheader"><span id="define-members"></span> Macros</h2></td>
</tr>
<tr id="r_ga54ddb14825a1541a56e22afb5f832a9e" class="memitem:ga54ddb14825a1541a56e22afb5f832a9e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga54ddb14825a1541a56e22afb5f832a9e" class="el">GLFW_FOCUSED</a>   0x00020001</td>
</tr>
<tr class="memdesc:ga54ddb14825a1541a56e22afb5f832a9e">
<td class="mdescLeft"> </td>
<td class="mdescRight">Input focus window hint and attribute.<br />
</td>
</tr>
<tr class="separator:ga54ddb14825a1541a56e22afb5f832a9e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga39d44b7c056e55e581355a92d240b58a" class="memitem:ga39d44b7c056e55e581355a92d240b58a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga39d44b7c056e55e581355a92d240b58a" class="el">GLFW_ICONIFIED</a>   0x00020002</td>
</tr>
<tr class="memdesc:ga39d44b7c056e55e581355a92d240b58a">
<td class="mdescLeft"> </td>
<td class="mdescRight">Window iconification window attribute.<br />
</td>
</tr>
<tr class="separator:ga39d44b7c056e55e581355a92d240b58a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadba13c7a1b3aa40831eb2beedbd5bd1d" class="memitem:gadba13c7a1b3aa40831eb2beedbd5bd1d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gadba13c7a1b3aa40831eb2beedbd5bd1d" class="el">GLFW_RESIZABLE</a>   0x00020003</td>
</tr>
<tr class="memdesc:gadba13c7a1b3aa40831eb2beedbd5bd1d">
<td class="mdescLeft"> </td>
<td class="mdescRight">Window resize-ability window hint and attribute.<br />
</td>
</tr>
<tr class="separator:gadba13c7a1b3aa40831eb2beedbd5bd1d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafb3cdc45297e06d8f1eb13adc69ca6c4" class="memitem:gafb3cdc45297e06d8f1eb13adc69ca6c4">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gafb3cdc45297e06d8f1eb13adc69ca6c4" class="el">GLFW_VISIBLE</a>   0x00020004</td>
</tr>
<tr class="memdesc:gafb3cdc45297e06d8f1eb13adc69ca6c4">
<td class="mdescLeft"> </td>
<td class="mdescRight">Window visibility window hint and attribute.<br />
</td>
</tr>
<tr class="separator:gafb3cdc45297e06d8f1eb13adc69ca6c4">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga21b854d36314c94d65aed84405b2f25e" class="memitem:ga21b854d36314c94d65aed84405b2f25e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga21b854d36314c94d65aed84405b2f25e" class="el">GLFW_DECORATED</a>   0x00020005</td>
</tr>
<tr class="memdesc:ga21b854d36314c94d65aed84405b2f25e">
<td class="mdescLeft"> </td>
<td class="mdescRight">Window decoration window hint and attribute.<br />
</td>
</tr>
<tr class="separator:ga21b854d36314c94d65aed84405b2f25e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9d9874fc928200136a6dcdad726aa252" class="memitem:ga9d9874fc928200136a6dcdad726aa252">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga9d9874fc928200136a6dcdad726aa252" class="el">GLFW_AUTO_ICONIFY</a>   0x00020006</td>
</tr>
<tr class="memdesc:ga9d9874fc928200136a6dcdad726aa252">
<td class="mdescLeft"> </td>
<td class="mdescRight">Window auto-iconification window hint and attribute.<br />
</td>
</tr>
<tr class="separator:ga9d9874fc928200136a6dcdad726aa252">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7fb0be51407783b41adbf5bec0b09d80" class="memitem:ga7fb0be51407783b41adbf5bec0b09d80">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga7fb0be51407783b41adbf5bec0b09d80" class="el">GLFW_FLOATING</a>   0x00020007</td>
</tr>
<tr class="memdesc:ga7fb0be51407783b41adbf5bec0b09d80">
<td class="mdescLeft"> </td>
<td class="mdescRight">Window decoration window hint and attribute.<br />
</td>
</tr>
<tr class="separator:ga7fb0be51407783b41adbf5bec0b09d80">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad8ccb396253ad0b72c6d4c917eb38a03" class="memitem:gad8ccb396253ad0b72c6d4c917eb38a03">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gad8ccb396253ad0b72c6d4c917eb38a03" class="el">GLFW_MAXIMIZED</a>   0x00020008</td>
</tr>
<tr class="memdesc:gad8ccb396253ad0b72c6d4c917eb38a03">
<td class="mdescLeft"> </td>
<td class="mdescRight">Window maximization window hint and attribute.<br />
</td>
</tr>
<tr class="separator:gad8ccb396253ad0b72c6d4c917eb38a03">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5ac0847c0aa0b3619f2855707b8a7a77" class="memitem:ga5ac0847c0aa0b3619f2855707b8a7a77">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga5ac0847c0aa0b3619f2855707b8a7a77" class="el">GLFW_CENTER_CURSOR</a>   0x00020009</td>
</tr>
<tr class="memdesc:ga5ac0847c0aa0b3619f2855707b8a7a77">
<td class="mdescLeft"> </td>
<td class="mdescRight">Cursor centering window hint.<br />
</td>
</tr>
<tr class="separator:ga5ac0847c0aa0b3619f2855707b8a7a77">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga60a0578c3b9449027d683a9c6abb9f14" class="memitem:ga60a0578c3b9449027d683a9c6abb9f14">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga60a0578c3b9449027d683a9c6abb9f14" class="el">GLFW_TRANSPARENT_FRAMEBUFFER</a>   0x0002000A</td>
</tr>
<tr class="memdesc:ga60a0578c3b9449027d683a9c6abb9f14">
<td class="mdescLeft"> </td>
<td class="mdescRight">Window framebuffer transparency hint and attribute.<br />
</td>
</tr>
<tr class="separator:ga60a0578c3b9449027d683a9c6abb9f14">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8665c71c6fa3d22425c6a0e8a3f89d8a" class="memitem:ga8665c71c6fa3d22425c6a0e8a3f89d8a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga8665c71c6fa3d22425c6a0e8a3f89d8a" class="el">GLFW_HOVERED</a>   0x0002000B</td>
</tr>
<tr class="memdesc:ga8665c71c6fa3d22425c6a0e8a3f89d8a">
<td class="mdescLeft"> </td>
<td class="mdescRight">Mouse cursor hover window attribute.<br />
</td>
</tr>
<tr class="separator:ga8665c71c6fa3d22425c6a0e8a3f89d8a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafa94b1da34bfd6488c0d709761504dfc" class="memitem:gafa94b1da34bfd6488c0d709761504dfc">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gafa94b1da34bfd6488c0d709761504dfc" class="el">GLFW_FOCUS_ON_SHOW</a>   0x0002000C</td>
</tr>
<tr class="memdesc:gafa94b1da34bfd6488c0d709761504dfc">
<td class="mdescLeft"> </td>
<td class="mdescRight">Input focus on calling show window hint and attribute.<br />
</td>
</tr>
<tr class="separator:gafa94b1da34bfd6488c0d709761504dfc">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga88981797d29800808ec242274ab5c03a" class="memitem:ga88981797d29800808ec242274ab5c03a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga88981797d29800808ec242274ab5c03a" class="el">GLFW_MOUSE_PASSTHROUGH</a>   0x0002000D</td>
</tr>
<tr class="memdesc:ga88981797d29800808ec242274ab5c03a">
<td class="mdescLeft"> </td>
<td class="mdescRight">Mouse input transparency window hint and attribute.<br />
</td>
</tr>
<tr class="separator:ga88981797d29800808ec242274ab5c03a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaededa6b208b8e31343da56bb349c6fb2" class="memitem:gaededa6b208b8e31343da56bb349c6fb2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaededa6b208b8e31343da56bb349c6fb2" class="el">GLFW_POSITION_X</a>   0x0002000E</td>
</tr>
<tr class="memdesc:gaededa6b208b8e31343da56bb349c6fb2">
<td class="mdescLeft"> </td>
<td class="mdescRight">Initial position x-coordinate window hint.<br />
</td>
</tr>
<tr class="separator:gaededa6b208b8e31343da56bb349c6fb2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6b3ccf63683c81f479e2a98f5027200e" class="memitem:ga6b3ccf63683c81f479e2a98f5027200e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga6b3ccf63683c81f479e2a98f5027200e" class="el">GLFW_POSITION_Y</a>   0x0002000F</td>
</tr>
<tr class="memdesc:ga6b3ccf63683c81f479e2a98f5027200e">
<td class="mdescLeft"> </td>
<td class="mdescRight">Initial position y-coordinate window hint.<br />
</td>
</tr>
<tr class="separator:ga6b3ccf63683c81f479e2a98f5027200e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf78ed8e417dbcc1e354906cc2708c982" class="memitem:gaf78ed8e417dbcc1e354906cc2708c982">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaf78ed8e417dbcc1e354906cc2708c982" class="el">GLFW_RED_BITS</a>   0x00021001</td>
</tr>
<tr class="memdesc:gaf78ed8e417dbcc1e354906cc2708c982">
<td class="mdescLeft"> </td>
<td class="mdescRight">Framebuffer bit depth hint.<br />
</td>
</tr>
<tr class="separator:gaf78ed8e417dbcc1e354906cc2708c982">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafba3b72638c914e5fb8a237dd4c50d4d" class="memitem:gafba3b72638c914e5fb8a237dd4c50d4d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gafba3b72638c914e5fb8a237dd4c50d4d" class="el">GLFW_GREEN_BITS</a>   0x00021002</td>
</tr>
<tr class="memdesc:gafba3b72638c914e5fb8a237dd4c50d4d">
<td class="mdescLeft"> </td>
<td class="mdescRight">Framebuffer bit depth hint.<br />
</td>
</tr>
<tr class="separator:gafba3b72638c914e5fb8a237dd4c50d4d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab292ea403db6d514537b515311bf9ae3" class="memitem:gab292ea403db6d514537b515311bf9ae3">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gab292ea403db6d514537b515311bf9ae3" class="el">GLFW_BLUE_BITS</a>   0x00021003</td>
</tr>
<tr class="memdesc:gab292ea403db6d514537b515311bf9ae3">
<td class="mdescLeft"> </td>
<td class="mdescRight">Framebuffer bit depth hint.<br />
</td>
</tr>
<tr class="separator:gab292ea403db6d514537b515311bf9ae3">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafed79a3f468997877da86c449bd43e8c" class="memitem:gafed79a3f468997877da86c449bd43e8c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gafed79a3f468997877da86c449bd43e8c" class="el">GLFW_ALPHA_BITS</a>   0x00021004</td>
</tr>
<tr class="memdesc:gafed79a3f468997877da86c449bd43e8c">
<td class="mdescLeft"> </td>
<td class="mdescRight">Framebuffer bit depth hint.<br />
</td>
</tr>
<tr class="separator:gafed79a3f468997877da86c449bd43e8c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga318a55eac1fee57dfe593b6d38149d07" class="memitem:ga318a55eac1fee57dfe593b6d38149d07">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga318a55eac1fee57dfe593b6d38149d07" class="el">GLFW_DEPTH_BITS</a>   0x00021005</td>
</tr>
<tr class="memdesc:ga318a55eac1fee57dfe593b6d38149d07">
<td class="mdescLeft"> </td>
<td class="mdescRight">Framebuffer bit depth hint.<br />
</td>
</tr>
<tr class="separator:ga318a55eac1fee57dfe593b6d38149d07">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5339890a45a1fb38e93cb9fcc5fd069d" class="memitem:ga5339890a45a1fb38e93cb9fcc5fd069d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga5339890a45a1fb38e93cb9fcc5fd069d" class="el">GLFW_STENCIL_BITS</a>   0x00021006</td>
</tr>
<tr class="memdesc:ga5339890a45a1fb38e93cb9fcc5fd069d">
<td class="mdescLeft"> </td>
<td class="mdescRight">Framebuffer bit depth hint.<br />
</td>
</tr>
<tr class="separator:ga5339890a45a1fb38e93cb9fcc5fd069d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaead34a9a683b2bc20eecf30ba738bfc6" class="memitem:gaead34a9a683b2bc20eecf30ba738bfc6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaead34a9a683b2bc20eecf30ba738bfc6" class="el">GLFW_ACCUM_RED_BITS</a>   0x00021007</td>
</tr>
<tr class="memdesc:gaead34a9a683b2bc20eecf30ba738bfc6">
<td class="mdescLeft"> </td>
<td class="mdescRight">Framebuffer bit depth hint.<br />
</td>
</tr>
<tr class="separator:gaead34a9a683b2bc20eecf30ba738bfc6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga65713cee1326f8e9d806fdf93187b471" class="memitem:ga65713cee1326f8e9d806fdf93187b471">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga65713cee1326f8e9d806fdf93187b471" class="el">GLFW_ACCUM_GREEN_BITS</a>   0x00021008</td>
</tr>
<tr class="memdesc:ga65713cee1326f8e9d806fdf93187b471">
<td class="mdescLeft"> </td>
<td class="mdescRight">Framebuffer bit depth hint.<br />
</td>
</tr>
<tr class="separator:ga65713cee1326f8e9d806fdf93187b471">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga22bbe9104a8ce1f8b88fb4f186aa36ce" class="memitem:ga22bbe9104a8ce1f8b88fb4f186aa36ce">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga22bbe9104a8ce1f8b88fb4f186aa36ce" class="el">GLFW_ACCUM_BLUE_BITS</a>   0x00021009</td>
</tr>
<tr class="memdesc:ga22bbe9104a8ce1f8b88fb4f186aa36ce">
<td class="mdescLeft"> </td>
<td class="mdescRight">Framebuffer bit depth hint.<br />
</td>
</tr>
<tr class="separator:ga22bbe9104a8ce1f8b88fb4f186aa36ce">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae829b55591c18169a40ab4067a041b1f" class="memitem:gae829b55591c18169a40ab4067a041b1f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gae829b55591c18169a40ab4067a041b1f" class="el">GLFW_ACCUM_ALPHA_BITS</a>   0x0002100A</td>
</tr>
<tr class="memdesc:gae829b55591c18169a40ab4067a041b1f">
<td class="mdescLeft"> </td>
<td class="mdescRight">Framebuffer bit depth hint.<br />
</td>
</tr>
<tr class="separator:gae829b55591c18169a40ab4067a041b1f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab05108c5029443b371112b031d1fa174" class="memitem:gab05108c5029443b371112b031d1fa174">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gab05108c5029443b371112b031d1fa174" class="el">GLFW_AUX_BUFFERS</a>   0x0002100B</td>
</tr>
<tr class="memdesc:gab05108c5029443b371112b031d1fa174">
<td class="mdescLeft"> </td>
<td class="mdescRight">Framebuffer auxiliary buffer hint.<br />
</td>
</tr>
<tr class="separator:gab05108c5029443b371112b031d1fa174">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga83d991efca02537e2d69969135b77b03" class="memitem:ga83d991efca02537e2d69969135b77b03">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga83d991efca02537e2d69969135b77b03" class="el">GLFW_STEREO</a>   0x0002100C</td>
</tr>
<tr class="memdesc:ga83d991efca02537e2d69969135b77b03">
<td class="mdescLeft"> </td>
<td class="mdescRight">OpenGL stereoscopic rendering hint.<br />
</td>
</tr>
<tr class="separator:ga83d991efca02537e2d69969135b77b03">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga2cdf86fdcb7722fb8829c4e201607535" class="memitem:ga2cdf86fdcb7722fb8829c4e201607535">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga2cdf86fdcb7722fb8829c4e201607535" class="el">GLFW_SAMPLES</a>   0x0002100D</td>
</tr>
<tr class="memdesc:ga2cdf86fdcb7722fb8829c4e201607535">
<td class="mdescLeft"> </td>
<td class="mdescRight">Framebuffer MSAA samples hint.<br />
</td>
</tr>
<tr class="separator:ga2cdf86fdcb7722fb8829c4e201607535">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga444a8f00414a63220591f9fdb7b5642b" class="memitem:ga444a8f00414a63220591f9fdb7b5642b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga444a8f00414a63220591f9fdb7b5642b" class="el">GLFW_SRGB_CAPABLE</a>   0x0002100E</td>
</tr>
<tr class="memdesc:ga444a8f00414a63220591f9fdb7b5642b">
<td class="mdescLeft"> </td>
<td class="mdescRight">Framebuffer sRGB hint.<br />
</td>
</tr>
<tr class="separator:ga444a8f00414a63220591f9fdb7b5642b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga0f20825e6e47ee8ba389024519682212" class="memitem:ga0f20825e6e47ee8ba389024519682212">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga0f20825e6e47ee8ba389024519682212" class="el">GLFW_REFRESH_RATE</a>   0x0002100F</td>
</tr>
<tr class="memdesc:ga0f20825e6e47ee8ba389024519682212">
<td class="mdescLeft"> </td>
<td class="mdescRight">Monitor refresh rate hint.<br />
</td>
</tr>
<tr class="separator:ga0f20825e6e47ee8ba389024519682212">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga714a5d569e8a274ea58fdfa020955339" class="memitem:ga714a5d569e8a274ea58fdfa020955339">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga714a5d569e8a274ea58fdfa020955339" class="el">GLFW_DOUBLEBUFFER</a>   0x00021010</td>
</tr>
<tr class="memdesc:ga714a5d569e8a274ea58fdfa020955339">
<td class="mdescLeft"> </td>
<td class="mdescRight">Framebuffer double buffering hint and attribute.<br />
</td>
</tr>
<tr class="separator:ga714a5d569e8a274ea58fdfa020955339">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga649309cf72a3d3de5b1348ca7936c95b" class="memitem:ga649309cf72a3d3de5b1348ca7936c95b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga649309cf72a3d3de5b1348ca7936c95b" class="el">GLFW_CLIENT_API</a>   0x00022001</td>
</tr>
<tr class="memdesc:ga649309cf72a3d3de5b1348ca7936c95b">
<td class="mdescLeft"> </td>
<td class="mdescRight">Context client API hint and attribute.<br />
</td>
</tr>
<tr class="separator:ga649309cf72a3d3de5b1348ca7936c95b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafe5e4922de1f9932d7e9849bb053b0c0" class="memitem:gafe5e4922de1f9932d7e9849bb053b0c0">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gafe5e4922de1f9932d7e9849bb053b0c0" class="el">GLFW_CONTEXT_VERSION_MAJOR</a>   0x00022002</td>
</tr>
<tr class="memdesc:gafe5e4922de1f9932d7e9849bb053b0c0">
<td class="mdescLeft"> </td>
<td class="mdescRight">Context client API major version hint and attribute.<br />
</td>
</tr>
<tr class="separator:gafe5e4922de1f9932d7e9849bb053b0c0">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga31aca791e4b538c4e4a771eb95cc2d07" class="memitem:ga31aca791e4b538c4e4a771eb95cc2d07">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga31aca791e4b538c4e4a771eb95cc2d07" class="el">GLFW_CONTEXT_VERSION_MINOR</a>   0x00022003</td>
</tr>
<tr class="memdesc:ga31aca791e4b538c4e4a771eb95cc2d07">
<td class="mdescLeft"> </td>
<td class="mdescRight">Context client API minor version hint and attribute.<br />
</td>
</tr>
<tr class="separator:ga31aca791e4b538c4e4a771eb95cc2d07">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafb9475071aa77c6fb05ca5a5c8678a08" class="memitem:gafb9475071aa77c6fb05ca5a5c8678a08">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gafb9475071aa77c6fb05ca5a5c8678a08" class="el">GLFW_CONTEXT_REVISION</a>   0x00022004</td>
</tr>
<tr class="memdesc:gafb9475071aa77c6fb05ca5a5c8678a08">
<td class="mdescLeft"> </td>
<td class="mdescRight">Context client API revision number attribute.<br />
</td>
</tr>
<tr class="separator:gafb9475071aa77c6fb05ca5a5c8678a08">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gade3593916b4c507900aa2d6844810e00" class="memitem:gade3593916b4c507900aa2d6844810e00">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gade3593916b4c507900aa2d6844810e00" class="el">GLFW_CONTEXT_ROBUSTNESS</a>   0x00022005</td>
</tr>
<tr class="memdesc:gade3593916b4c507900aa2d6844810e00">
<td class="mdescLeft"> </td>
<td class="mdescRight">Context robustness hint and attribute.<br />
</td>
</tr>
<tr class="separator:gade3593916b4c507900aa2d6844810e00">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga13d24b12465da8b28985f46c8557925b" class="memitem:ga13d24b12465da8b28985f46c8557925b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga13d24b12465da8b28985f46c8557925b" class="el">GLFW_OPENGL_FORWARD_COMPAT</a>   0x00022006</td>
</tr>
<tr class="memdesc:ga13d24b12465da8b28985f46c8557925b">
<td class="mdescLeft"> </td>
<td class="mdescRight">OpenGL forward-compatibility hint and attribute.<br />
</td>
</tr>
<tr class="separator:ga13d24b12465da8b28985f46c8557925b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8d55e3afec73c7de0509c3b7ad1d9e3f" class="memitem:ga8d55e3afec73c7de0509c3b7ad1d9e3f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga8d55e3afec73c7de0509c3b7ad1d9e3f" class="el">GLFW_CONTEXT_DEBUG</a>   0x00022007</td>
</tr>
<tr class="memdesc:ga8d55e3afec73c7de0509c3b7ad1d9e3f">
<td class="mdescLeft"> </td>
<td class="mdescRight">Debug mode context hint and attribute.<br />
</td>
</tr>
<tr class="separator:ga8d55e3afec73c7de0509c3b7ad1d9e3f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga87ec2df0b915201e950ca42d5d0831e1" class="memitem:ga87ec2df0b915201e950ca42d5d0831e1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga87ec2df0b915201e950ca42d5d0831e1" class="el">GLFW_OPENGL_DEBUG_CONTEXT</a>   <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga8d55e3afec73c7de0509c3b7ad1d9e3f" class="el">GLFW_CONTEXT_DEBUG</a></td>
</tr>
<tr class="memdesc:ga87ec2df0b915201e950ca42d5d0831e1">
<td class="mdescLeft"> </td>
<td class="mdescRight">Legacy name for compatibility.<br />
</td>
</tr>
<tr class="separator:ga87ec2df0b915201e950ca42d5d0831e1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga44f3a6b4261fbe351e0b950b0f372e12" class="memitem:ga44f3a6b4261fbe351e0b950b0f372e12">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga44f3a6b4261fbe351e0b950b0f372e12" class="el">GLFW_OPENGL_PROFILE</a>   0x00022008</td>
</tr>
<tr class="memdesc:ga44f3a6b4261fbe351e0b950b0f372e12">
<td class="mdescLeft"> </td>
<td class="mdescRight">OpenGL profile hint and attribute.<br />
</td>
</tr>
<tr class="separator:ga44f3a6b4261fbe351e0b950b0f372e12">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga72b648a8378fe3310c7c7bbecc0f7be6" class="memitem:ga72b648a8378fe3310c7c7bbecc0f7be6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga72b648a8378fe3310c7c7bbecc0f7be6" class="el">GLFW_CONTEXT_RELEASE_BEHAVIOR</a>   0x00022009</td>
</tr>
<tr class="memdesc:ga72b648a8378fe3310c7c7bbecc0f7be6">
<td class="mdescLeft"> </td>
<td class="mdescRight">Context flush-on-release hint and attribute.<br />
</td>
</tr>
<tr class="separator:ga72b648a8378fe3310c7c7bbecc0f7be6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5a52fdfd46d8249c211f923675728082" class="memitem:ga5a52fdfd46d8249c211f923675728082">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga5a52fdfd46d8249c211f923675728082" class="el">GLFW_CONTEXT_NO_ERROR</a>   0x0002200A</td>
</tr>
<tr class="memdesc:ga5a52fdfd46d8249c211f923675728082">
<td class="mdescLeft"> </td>
<td class="mdescRight">Context error suppression hint and attribute.<br />
</td>
</tr>
<tr class="separator:ga5a52fdfd46d8249c211f923675728082">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5154cebfcd831c1cc63a4d5ac9bb4486" class="memitem:ga5154cebfcd831c1cc63a4d5ac9bb4486">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga5154cebfcd831c1cc63a4d5ac9bb4486" class="el">GLFW_CONTEXT_CREATION_API</a>   0x0002200B</td>
</tr>
<tr class="memdesc:ga5154cebfcd831c1cc63a4d5ac9bb4486">
<td class="mdescLeft"> </td>
<td class="mdescRight">Context creation API hint and attribute.<br />
</td>
</tr>
<tr class="separator:ga5154cebfcd831c1cc63a4d5ac9bb4486">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga620bc4280c7eab81ac9f02204500ed47" class="memitem:ga620bc4280c7eab81ac9f02204500ed47">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga620bc4280c7eab81ac9f02204500ed47" class="el">GLFW_SCALE_TO_MONITOR</a>   0x0002200C</td>
</tr>
<tr class="memdesc:ga620bc4280c7eab81ac9f02204500ed47">
<td class="mdescLeft"> </td>
<td class="mdescRight">Window content area scaling window <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_SCALE_TO_MONITOR" class="el">window hint</a>.<br />
</td>
</tr>
<tr class="separator:ga620bc4280c7eab81ac9f02204500ed47">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa5a9c6b4722670fd33d6e8a88f2e21bc" class="memitem:gaa5a9c6b4722670fd33d6e8a88f2e21bc">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaa5a9c6b4722670fd33d6e8a88f2e21bc" class="el">GLFW_SCALE_FRAMEBUFFER</a>   0x0002200D</td>
</tr>
<tr class="memdesc:gaa5a9c6b4722670fd33d6e8a88f2e21bc">
<td class="mdescLeft"> </td>
<td class="mdescRight">Window framebuffer scaling <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_SCALE_FRAMEBUFFER_hint" class="el">window hint</a>.<br />
</td>
</tr>
<tr class="separator:gaa5a9c6b4722670fd33d6e8a88f2e21bc">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab6ef2d02eb55800d249ccf1af253c35e" class="memitem:gab6ef2d02eb55800d249ccf1af253c35e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gab6ef2d02eb55800d249ccf1af253c35e" class="el">GLFW_COCOA_RETINA_FRAMEBUFFER</a>   0x00023001</td>
</tr>
<tr class="memdesc:gab6ef2d02eb55800d249ccf1af253c35e">
<td class="mdescLeft"> </td>
<td class="mdescRight">Legacy name for compatibility.<br />
</td>
</tr>
<tr class="separator:gab6ef2d02eb55800d249ccf1af253c35e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga70fa0fbc745de6aa824df79a580e84b5" class="memitem:ga70fa0fbc745de6aa824df79a580e84b5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga70fa0fbc745de6aa824df79a580e84b5" class="el">GLFW_COCOA_FRAME_NAME</a>   0x00023002</td>
</tr>
<tr class="memdesc:ga70fa0fbc745de6aa824df79a580e84b5">
<td class="mdescLeft"> </td>
<td class="mdescRight">macOS specific <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_COCOA_FRAME_NAME_hint" class="el">window hint</a>.<br />
</td>
</tr>
<tr class="separator:ga70fa0fbc745de6aa824df79a580e84b5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga53c84ed2ddd94e15bbd44b1f6f7feafc" class="memitem:ga53c84ed2ddd94e15bbd44b1f6f7feafc">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga53c84ed2ddd94e15bbd44b1f6f7feafc" class="el">GLFW_COCOA_GRAPHICS_SWITCHING</a>   0x00023003</td>
</tr>
<tr class="memdesc:ga53c84ed2ddd94e15bbd44b1f6f7feafc">
<td class="mdescLeft"> </td>
<td class="mdescRight">macOS specific <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_COCOA_GRAPHICS_SWITCHING_hint" class="el">window hint</a>.<br />
</td>
</tr>
<tr class="separator:ga53c84ed2ddd94e15bbd44b1f6f7feafc">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae5a9ea2fccccd92edbd343fc56461114" class="memitem:gae5a9ea2fccccd92edbd343fc56461114">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gae5a9ea2fccccd92edbd343fc56461114" class="el">GLFW_X11_CLASS_NAME</a>   0x00024001</td>
</tr>
<tr class="memdesc:gae5a9ea2fccccd92edbd343fc56461114">
<td class="mdescLeft"> </td>
<td class="mdescRight">X11 specific <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_X11_CLASS_NAME_hint" class="el">window hint</a>.<br />
</td>
</tr>
<tr class="separator:gae5a9ea2fccccd92edbd343fc56461114">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga494c3c0d911e4b860b946530a3e389e8" class="memitem:ga494c3c0d911e4b860b946530a3e389e8">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga494c3c0d911e4b860b946530a3e389e8" class="el">GLFW_X11_INSTANCE_NAME</a>   0x00024002</td>
</tr>
<tr class="memdesc:ga494c3c0d911e4b860b946530a3e389e8">
<td class="mdescLeft"> </td>
<td class="mdescRight">X11 specific <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_X11_CLASS_NAME_hint" class="el">window hint</a>.<br />
</td>
</tr>
<tr class="separator:ga494c3c0d911e4b860b946530a3e389e8">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf65ea8dafdc0edb07b821b9a336d5043" class="memitem:gaf65ea8dafdc0edb07b821b9a336d5043">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaf65ea8dafdc0edb07b821b9a336d5043" class="el">GLFW_WIN32_KEYBOARD_MENU</a>   0x00025001</td>
</tr>
<tr class="separator:gaf65ea8dafdc0edb07b821b9a336d5043">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gace10f3846571de62243b46f75d978487" class="memitem:gace10f3846571de62243b46f75d978487">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gace10f3846571de62243b46f75d978487" class="el">GLFW_WIN32_SHOWDEFAULT</a>   0x00025002</td>
</tr>
<tr class="memdesc:gace10f3846571de62243b46f75d978487">
<td class="mdescLeft"> </td>
<td class="mdescRight">Win32 specific <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_WIN32_SHOWDEFAULT_hint" class="el">window hint</a>.<br />
</td>
</tr>
<tr class="separator:gace10f3846571de62243b46f75d978487">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafbf1ce7a4362c75e602a4df9e1bdecd3" class="memitem:gafbf1ce7a4362c75e602a4df9e1bdecd3">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gafbf1ce7a4362c75e602a4df9e1bdecd3" class="el">GLFW_WAYLAND_APP_ID</a>   0x00026001</td>
</tr>
<tr class="memdesc:gafbf1ce7a4362c75e602a4df9e1bdecd3">
<td class="mdescLeft"> </td>
<td class="mdescRight">Wayland specific <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_WAYLAND_APP_ID_hint" class="el">window hint</a>.<br />
</td>
</tr>
<tr class="separator:gafbf1ce7a4362c75e602a4df9e1bdecd3">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="typedefs" class="groupheader"><span id="typedef-members"></span> Typedefs</h2></td>
</tr>
<tr id="r_ga3c96d80d363e67d13a41b5d1821f3242" class="memitem:ga3c96d80d363e67d13a41b5d1821f3242">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef struct <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a></td>
</tr>
<tr class="memdesc:ga3c96d80d363e67d13a41b5d1821f3242">
<td class="mdescLeft"> </td>
<td class="mdescRight">Opaque window object.<br />
</td>
</tr>
<tr class="separator:ga3c96d80d363e67d13a41b5d1821f3242">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gabe287973a21a8f927cde4db06b8dcbe9" class="memitem:gabe287973a21a8f927cde4db06b8dcbe9">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabe287973a21a8f927cde4db06b8dcbe9" class="el">GLFWwindowposfun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int xpos, int ypos)</td>
</tr>
<tr class="memdesc:gabe287973a21a8f927cde4db06b8dcbe9">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for window position callbacks.<br />
</td>
</tr>
<tr class="separator:gabe287973a21a8f927cde4db06b8dcbe9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaec0282944bb810f6f3163ec02da90350" class="memitem:gaec0282944bb810f6f3163ec02da90350">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaec0282944bb810f6f3163ec02da90350" class="el">GLFWwindowsizefun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int width, int height)</td>
</tr>
<tr class="memdesc:gaec0282944bb810f6f3163ec02da90350">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for window size callbacks.<br />
</td>
</tr>
<tr class="separator:gaec0282944bb810f6f3163ec02da90350">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gabf859b936d80961b7d39013a9694cc3e" class="memitem:gabf859b936d80961b7d39013a9694cc3e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabf859b936d80961b7d39013a9694cc3e" class="el">GLFWwindowclosefun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:gabf859b936d80961b7d39013a9694cc3e">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for window close callbacks.<br />
</td>
</tr>
<tr class="separator:gabf859b936d80961b7d39013a9694cc3e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga431663a1427d2eb3a273bc398b6737b5" class="memitem:ga431663a1427d2eb3a273bc398b6737b5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga431663a1427d2eb3a273bc398b6737b5" class="el">GLFWwindowrefreshfun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga431663a1427d2eb3a273bc398b6737b5">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for window content refresh callbacks.<br />
</td>
</tr>
<tr class="separator:ga431663a1427d2eb3a273bc398b6737b5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gabc58c47e9d93f6eb1862d615c3680f46" class="memitem:gabc58c47e9d93f6eb1862d615c3680f46">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabc58c47e9d93f6eb1862d615c3680f46" class="el">GLFWwindowfocusfun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int focused)</td>
</tr>
<tr class="memdesc:gabc58c47e9d93f6eb1862d615c3680f46">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for window focus callbacks.<br />
</td>
</tr>
<tr class="separator:gabc58c47e9d93f6eb1862d615c3680f46">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga35c658cccba236f26e7adee0e25f6a4f" class="memitem:ga35c658cccba236f26e7adee0e25f6a4f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga35c658cccba236f26e7adee0e25f6a4f" class="el">GLFWwindowiconifyfun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int iconified)</td>
</tr>
<tr class="memdesc:ga35c658cccba236f26e7adee0e25f6a4f">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for window iconify callbacks.<br />
</td>
</tr>
<tr class="separator:ga35c658cccba236f26e7adee0e25f6a4f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3017196fdaec33ac3e095765176c2a90" class="memitem:ga3017196fdaec33ac3e095765176c2a90">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3017196fdaec33ac3e095765176c2a90" class="el">GLFWwindowmaximizefun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int maximized)</td>
</tr>
<tr class="memdesc:ga3017196fdaec33ac3e095765176c2a90">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for window maximize callbacks.<br />
</td>
</tr>
<tr class="separator:ga3017196fdaec33ac3e095765176c2a90">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae18026e294dde685ed2e5f759533144d" class="memitem:gae18026e294dde685ed2e5f759533144d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gae18026e294dde685ed2e5f759533144d" class="el">GLFWframebuffersizefun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int width, int height)</td>
</tr>
<tr class="memdesc:gae18026e294dde685ed2e5f759533144d">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for framebuffer size callbacks.<br />
</td>
</tr>
<tr class="separator:gae18026e294dde685ed2e5f759533144d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga77f288a2d04bb3c77c7d9615d08cf70e" class="memitem:ga77f288a2d04bb3c77c7d9615d08cf70e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga77f288a2d04bb3c77c7d9615d08cf70e" class="el">GLFWwindowcontentscalefun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, float xscale, float yscale)</td>
</tr>
<tr class="memdesc:ga77f288a2d04bb3c77c7d9615d08cf70e">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for window content scale callbacks.<br />
</td>
</tr>
<tr class="separator:ga77f288a2d04bb3c77c7d9615d08cf70e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7cc0a09de172fa7250872046f8c4d2ca" class="memitem:ga7cc0a09de172fa7250872046f8c4d2ca">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef struct <a href="/docs/glfw/v3-5-1/en/04-reference/20-glfwimage/" class="el">GLFWimage</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga7cc0a09de172fa7250872046f8c4d2ca" class="el">GLFWimage</a></td>
</tr>
<tr class="memdesc:ga7cc0a09de172fa7250872046f8c4d2ca">
<td class="mdescLeft"> </td>
<td class="mdescRight">Image data.<br />
</td>
</tr>
<tr class="separator:ga7cc0a09de172fa7250872046f8c4d2ca">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="functions" class="groupheader"><span id="func-members"></span> Functions</h2></td>
</tr>
<tr id="r_gaa77c4898dfb83344a6b4f76aa16b9a4a" class="memitem:gaa77c4898dfb83344a6b4f76aa16b9a4a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaa77c4898dfb83344a6b4f76aa16b9a4a" class="el">glfwDefaultWindowHints</a> (void)</td>
</tr>
<tr class="memdesc:gaa77c4898dfb83344a6b4f76aa16b9a4a">
<td class="mdescLeft"> </td>
<td class="mdescRight">Resets all window hints to their default values.<br />
</td>
</tr>
<tr class="separator:gaa77c4898dfb83344a6b4f76aa16b9a4a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7d9c8c62384b1e2821c4dc48952d2033" class="memitem:ga7d9c8c62384b1e2821c4dc48952d2033">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga7d9c8c62384b1e2821c4dc48952d2033" class="el">glfwWindowHint</a> (int hint, int value)</td>
</tr>
<tr class="memdesc:ga7d9c8c62384b1e2821c4dc48952d2033">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the specified window hint to the desired value.<br />
</td>
</tr>
<tr class="separator:ga7d9c8c62384b1e2821c4dc48952d2033">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8cb2782861c9d997bcf2dea97f363e5f" class="memitem:ga8cb2782861c9d997bcf2dea97f363e5f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga8cb2782861c9d997bcf2dea97f363e5f" class="el">glfwWindowHintString</a> (int hint, const char *value)</td>
</tr>
<tr class="memdesc:ga8cb2782861c9d997bcf2dea97f363e5f">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the specified window hint to the desired value.<br />
</td>
</tr>
<tr class="separator:ga8cb2782861c9d997bcf2dea97f363e5f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3555a418df92ad53f917597fe2f64aeb" class="memitem:ga3555a418df92ad53f917597fe2f64aeb">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb" class="el">glfwCreateWindow</a> (int width, int height, const char *title, <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *share)</td>
</tr>
<tr class="memdesc:ga3555a418df92ad53f917597fe2f64aeb">
<td class="mdescLeft"> </td>
<td class="mdescRight">Creates a window and its associated context.<br />
</td>
</tr>
<tr class="separator:ga3555a418df92ad53f917597fe2f64aeb">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gacdf43e51376051d2c091662e9fe3d7b2" class="memitem:gacdf43e51376051d2c091662e9fe3d7b2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2" class="el">glfwDestroyWindow</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:gacdf43e51376051d2c091662e9fe3d7b2">
<td class="mdescLeft"> </td>
<td class="mdescRight">Destroys the specified window and its context.<br />
</td>
</tr>
<tr class="separator:gacdf43e51376051d2c091662e9fe3d7b2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga24e02fbfefbb81fc45320989f8140ab5" class="memitem:ga24e02fbfefbb81fc45320989f8140ab5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga24e02fbfefbb81fc45320989f8140ab5" class="el">glfwWindowShouldClose</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga24e02fbfefbb81fc45320989f8140ab5">
<td class="mdescLeft"> </td>
<td class="mdescRight">Checks the close flag of the specified window.<br />
</td>
</tr>
<tr class="separator:ga24e02fbfefbb81fc45320989f8140ab5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga49c449dde2a6f87d996f4daaa09d6708" class="memitem:ga49c449dde2a6f87d996f4daaa09d6708">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga49c449dde2a6f87d996f4daaa09d6708" class="el">glfwSetWindowShouldClose</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int value)</td>
</tr>
<tr class="memdesc:ga49c449dde2a6f87d996f4daaa09d6708">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the close flag of the specified window.<br />
</td>
</tr>
<tr class="separator:ga49c449dde2a6f87d996f4daaa09d6708">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac6151765c54b789c4fe66c6bc6215953" class="memitem:gac6151765c54b789c4fe66c6bc6215953">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gac6151765c54b789c4fe66c6bc6215953" class="el">glfwGetWindowTitle</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:gac6151765c54b789c4fe66c6bc6215953">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the title of the specified window.<br />
</td>
</tr>
<tr class="separator:gac6151765c54b789c4fe66c6bc6215953">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5d877f09e968cef7a360b513306f17ff" class="memitem:ga5d877f09e968cef7a360b513306f17ff">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga5d877f09e968cef7a360b513306f17ff" class="el">glfwSetWindowTitle</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, const char *title)</td>
</tr>
<tr class="memdesc:ga5d877f09e968cef7a360b513306f17ff">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the title of the specified window.<br />
</td>
</tr>
<tr class="separator:ga5d877f09e968cef7a360b513306f17ff">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadd7ccd39fe7a7d1f0904666ae5932dc5" class="memitem:gadd7ccd39fe7a7d1f0904666ae5932dc5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gadd7ccd39fe7a7d1f0904666ae5932dc5" class="el">glfwSetWindowIcon</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int count, const <a href="/docs/glfw/v3-5-1/en/04-reference/20-glfwimage/" class="el">GLFWimage</a> *images)</td>
</tr>
<tr class="memdesc:gadd7ccd39fe7a7d1f0904666ae5932dc5">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the icon for the specified window.<br />
</td>
</tr>
<tr class="separator:gadd7ccd39fe7a7d1f0904666ae5932dc5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga73cb526c000876fd8ddf571570fdb634" class="memitem:ga73cb526c000876fd8ddf571570fdb634">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga73cb526c000876fd8ddf571570fdb634" class="el">glfwGetWindowPos</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int *xpos, int *ypos)</td>
</tr>
<tr class="memdesc:ga73cb526c000876fd8ddf571570fdb634">
<td class="mdescLeft"> </td>
<td class="mdescRight">Retrieves the position of the content area of the specified window.<br />
</td>
</tr>
<tr class="separator:ga73cb526c000876fd8ddf571570fdb634">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1abb6d690e8c88e0c8cd1751356dbca8" class="memitem:ga1abb6d690e8c88e0c8cd1751356dbca8">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga1abb6d690e8c88e0c8cd1751356dbca8" class="el">glfwSetWindowPos</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int xpos, int ypos)</td>
</tr>
<tr class="memdesc:ga1abb6d690e8c88e0c8cd1751356dbca8">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the position of the content area of the specified window.<br />
</td>
</tr>
<tr class="separator:ga1abb6d690e8c88e0c8cd1751356dbca8">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaeea7cbc03373a41fb51cfbf9f2a5d4c6" class="memitem:gaeea7cbc03373a41fb51cfbf9f2a5d4c6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaeea7cbc03373a41fb51cfbf9f2a5d4c6" class="el">glfwGetWindowSize</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int *width, int *height)</td>
</tr>
<tr class="memdesc:gaeea7cbc03373a41fb51cfbf9f2a5d4c6">
<td class="mdescLeft"> </td>
<td class="mdescRight">Retrieves the size of the content area of the specified window.<br />
</td>
</tr>
<tr class="separator:gaeea7cbc03373a41fb51cfbf9f2a5d4c6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac314fa6cec7d2d307be9963e2709cc90" class="memitem:gac314fa6cec7d2d307be9963e2709cc90">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gac314fa6cec7d2d307be9963e2709cc90" class="el">glfwSetWindowSizeLimits</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int minwidth, int minheight, int maxwidth, int maxheight)</td>
</tr>
<tr class="memdesc:gac314fa6cec7d2d307be9963e2709cc90">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the size limits of the specified window.<br />
</td>
</tr>
<tr class="separator:gac314fa6cec7d2d307be9963e2709cc90">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga72ac8cb1ee2e312a878b55153d81b937" class="memitem:ga72ac8cb1ee2e312a878b55153d81b937">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga72ac8cb1ee2e312a878b55153d81b937" class="el">glfwSetWindowAspectRatio</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int numer, int denom)</td>
</tr>
<tr class="memdesc:ga72ac8cb1ee2e312a878b55153d81b937">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the aspect ratio of the specified window.<br />
</td>
</tr>
<tr class="separator:ga72ac8cb1ee2e312a878b55153d81b937">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga371911f12c74c504dd8d47d832d095cb" class="memitem:ga371911f12c74c504dd8d47d832d095cb">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga371911f12c74c504dd8d47d832d095cb" class="el">glfwSetWindowSize</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int width, int height)</td>
</tr>
<tr class="memdesc:ga371911f12c74c504dd8d47d832d095cb">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the size of the content area of the specified window.<br />
</td>
</tr>
<tr class="separator:ga371911f12c74c504dd8d47d832d095cb">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga0e2637a4161afb283f5300c7f94785c9" class="memitem:ga0e2637a4161afb283f5300c7f94785c9">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga0e2637a4161afb283f5300c7f94785c9" class="el">glfwGetFramebufferSize</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int *width, int *height)</td>
</tr>
<tr class="memdesc:ga0e2637a4161afb283f5300c7f94785c9">
<td class="mdescLeft"> </td>
<td class="mdescRight">Retrieves the size of the framebuffer of the specified window.<br />
</td>
</tr>
<tr class="separator:ga0e2637a4161afb283f5300c7f94785c9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1a9fd382058c53101b21cf211898f1f1" class="memitem:ga1a9fd382058c53101b21cf211898f1f1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga1a9fd382058c53101b21cf211898f1f1" class="el">glfwGetWindowFrameSize</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int *left, int *top, int *right, int *bottom)</td>
</tr>
<tr class="memdesc:ga1a9fd382058c53101b21cf211898f1f1">
<td class="mdescLeft"> </td>
<td class="mdescRight">Retrieves the size of the frame of the window.<br />
</td>
</tr>
<tr class="separator:ga1a9fd382058c53101b21cf211898f1f1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf5d31de9c19c4f994facea64d2b3106c" class="memitem:gaf5d31de9c19c4f994facea64d2b3106c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaf5d31de9c19c4f994facea64d2b3106c" class="el">glfwGetWindowContentScale</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, float *xscale, float *yscale)</td>
</tr>
<tr class="memdesc:gaf5d31de9c19c4f994facea64d2b3106c">
<td class="mdescLeft"> </td>
<td class="mdescRight">Retrieves the content scale for the specified window.<br />
</td>
</tr>
<tr class="separator:gaf5d31de9c19c4f994facea64d2b3106c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad09f0bd7a6307c4533b7061828480a84" class="memitem:gad09f0bd7a6307c4533b7061828480a84">
<td class="memItemLeft" style="text-align: right;" data-valign="top">float </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gad09f0bd7a6307c4533b7061828480a84" class="el">glfwGetWindowOpacity</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:gad09f0bd7a6307c4533b7061828480a84">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the opacity of the whole window.<br />
</td>
</tr>
<tr class="separator:gad09f0bd7a6307c4533b7061828480a84">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac31caeb3d1088831b13d2c8a156802e9" class="memitem:gac31caeb3d1088831b13d2c8a156802e9">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gac31caeb3d1088831b13d2c8a156802e9" class="el">glfwSetWindowOpacity</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, float opacity)</td>
</tr>
<tr class="memdesc:gac31caeb3d1088831b13d2c8a156802e9">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the opacity of the whole window.<br />
</td>
</tr>
<tr class="separator:gac31caeb3d1088831b13d2c8a156802e9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1bb559c0ebaad63c5c05ad2a066779c4" class="memitem:ga1bb559c0ebaad63c5c05ad2a066779c4">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga1bb559c0ebaad63c5c05ad2a066779c4" class="el">glfwIconifyWindow</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga1bb559c0ebaad63c5c05ad2a066779c4">
<td class="mdescLeft"> </td>
<td class="mdescRight">Iconifies the specified window.<br />
</td>
</tr>
<tr class="separator:ga1bb559c0ebaad63c5c05ad2a066779c4">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga52527a5904b47d802b6b4bb519cdebc7" class="memitem:ga52527a5904b47d802b6b4bb519cdebc7">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga52527a5904b47d802b6b4bb519cdebc7" class="el">glfwRestoreWindow</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga52527a5904b47d802b6b4bb519cdebc7">
<td class="mdescLeft"> </td>
<td class="mdescRight">Restores the specified window.<br />
</td>
</tr>
<tr class="separator:ga52527a5904b47d802b6b4bb519cdebc7">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3f541387449d911274324ae7f17ec56b" class="memitem:ga3f541387449d911274324ae7f17ec56b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3f541387449d911274324ae7f17ec56b" class="el">glfwMaximizeWindow</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga3f541387449d911274324ae7f17ec56b">
<td class="mdescLeft"> </td>
<td class="mdescRight">Maximizes the specified window.<br />
</td>
</tr>
<tr class="separator:ga3f541387449d911274324ae7f17ec56b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga61be47917b72536a148300f46494fc66" class="memitem:ga61be47917b72536a148300f46494fc66">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga61be47917b72536a148300f46494fc66" class="el">glfwShowWindow</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga61be47917b72536a148300f46494fc66">
<td class="mdescLeft"> </td>
<td class="mdescRight">Makes the specified window visible.<br />
</td>
</tr>
<tr class="separator:ga61be47917b72536a148300f46494fc66">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga49401f82a1ba5f15db5590728314d47c" class="memitem:ga49401f82a1ba5f15db5590728314d47c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga49401f82a1ba5f15db5590728314d47c" class="el">glfwHideWindow</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga49401f82a1ba5f15db5590728314d47c">
<td class="mdescLeft"> </td>
<td class="mdescRight">Hides the specified window.<br />
</td>
</tr>
<tr class="separator:ga49401f82a1ba5f15db5590728314d47c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga873780357abd3f3a081d71a40aae45a1" class="memitem:ga873780357abd3f3a081d71a40aae45a1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga873780357abd3f3a081d71a40aae45a1" class="el">glfwFocusWindow</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga873780357abd3f3a081d71a40aae45a1">
<td class="mdescLeft"> </td>
<td class="mdescRight">Brings the specified window to front and sets input focus.<br />
</td>
</tr>
<tr class="separator:ga873780357abd3f3a081d71a40aae45a1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga2f8d59323fc4692c1d54ba08c863a703" class="memitem:ga2f8d59323fc4692c1d54ba08c863a703">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga2f8d59323fc4692c1d54ba08c863a703" class="el">glfwRequestWindowAttention</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga2f8d59323fc4692c1d54ba08c863a703">
<td class="mdescLeft"> </td>
<td class="mdescRight">Requests user attention to the specified window.<br />
</td>
</tr>
<tr class="separator:ga2f8d59323fc4692c1d54ba08c863a703">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga4d766499ac02c60f02221a9dfab87299" class="memitem:ga4d766499ac02c60f02221a9dfab87299">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga4d766499ac02c60f02221a9dfab87299" class="el">glfwGetWindowMonitor</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga4d766499ac02c60f02221a9dfab87299">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the monitor that the window uses for full screen mode.<br />
</td>
</tr>
<tr class="separator:ga4d766499ac02c60f02221a9dfab87299">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga81c76c418af80a1cce7055bccb0ae0a7" class="memitem:ga81c76c418af80a1cce7055bccb0ae0a7">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga81c76c418af80a1cce7055bccb0ae0a7" class="el">glfwSetWindowMonitor</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, int xpos, int ypos, int width, int height, int refreshRate)</td>
</tr>
<tr class="memdesc:ga81c76c418af80a1cce7055bccb0ae0a7">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the mode, monitor, video mode and placement of a window.<br />
</td>
</tr>
<tr class="separator:ga81c76c418af80a1cce7055bccb0ae0a7">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gacccb29947ea4b16860ebef42c2cb9337" class="memitem:gacccb29947ea4b16860ebef42c2cb9337">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337" class="el">glfwGetWindowAttrib</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int attrib)</td>
</tr>
<tr class="memdesc:gacccb29947ea4b16860ebef42c2cb9337">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns an attribute of the specified window.<br />
</td>
</tr>
<tr class="separator:gacccb29947ea4b16860ebef42c2cb9337">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gace2afda29b4116ec012e410a6819033e" class="memitem:gace2afda29b4116ec012e410a6819033e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gace2afda29b4116ec012e410a6819033e" class="el">glfwSetWindowAttrib</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int attrib, int value)</td>
</tr>
<tr class="memdesc:gace2afda29b4116ec012e410a6819033e">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets an attribute of the specified window.<br />
</td>
</tr>
<tr class="separator:gace2afda29b4116ec012e410a6819033e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3d2fc6026e690ab31a13f78bc9fd3651" class="memitem:ga3d2fc6026e690ab31a13f78bc9fd3651">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3d2fc6026e690ab31a13f78bc9fd3651" class="el">glfwSetWindowUserPointer</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, void *pointer)</td>
</tr>
<tr class="memdesc:ga3d2fc6026e690ab31a13f78bc9fd3651">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the user pointer of the specified window.<br />
</td>
</tr>
<tr class="separator:ga3d2fc6026e690ab31a13f78bc9fd3651">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae77a4add0d2023ca21ff1443ced01653" class="memitem:gae77a4add0d2023ca21ff1443ced01653">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gae77a4add0d2023ca21ff1443ced01653" class="el">glfwGetWindowUserPointer</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:gae77a4add0d2023ca21ff1443ced01653">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the user pointer of the specified window.<br />
</td>
</tr>
<tr class="separator:gae77a4add0d2023ca21ff1443ced01653">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga08bdfbba88934f9c4f92fd757979ac74" class="memitem:ga08bdfbba88934f9c4f92fd757979ac74">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabe287973a21a8f927cde4db06b8dcbe9" class="el">GLFWwindowposfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga08bdfbba88934f9c4f92fd757979ac74" class="el">glfwSetWindowPosCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabe287973a21a8f927cde4db06b8dcbe9" class="el">GLFWwindowposfun</a> callback)</td>
</tr>
<tr class="memdesc:ga08bdfbba88934f9c4f92fd757979ac74">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the position callback for the specified window.<br />
</td>
</tr>
<tr class="separator:ga08bdfbba88934f9c4f92fd757979ac74">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad91b8b047a0c4c6033c38853864c34f8" class="memitem:gad91b8b047a0c4c6033c38853864c34f8">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaec0282944bb810f6f3163ec02da90350" class="el">GLFWwindowsizefun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gad91b8b047a0c4c6033c38853864c34f8" class="el">glfwSetWindowSizeCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaec0282944bb810f6f3163ec02da90350" class="el">GLFWwindowsizefun</a> callback)</td>
</tr>
<tr class="memdesc:gad91b8b047a0c4c6033c38853864c34f8">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the size callback for the specified window.<br />
</td>
</tr>
<tr class="separator:gad91b8b047a0c4c6033c38853864c34f8">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gada646d775a7776a95ac000cfc1885331" class="memitem:gada646d775a7776a95ac000cfc1885331">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabf859b936d80961b7d39013a9694cc3e" class="el">GLFWwindowclosefun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gada646d775a7776a95ac000cfc1885331" class="el">glfwSetWindowCloseCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabf859b936d80961b7d39013a9694cc3e" class="el">GLFWwindowclosefun</a> callback)</td>
</tr>
<tr class="memdesc:gada646d775a7776a95ac000cfc1885331">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the close callback for the specified window.<br />
</td>
</tr>
<tr class="separator:gada646d775a7776a95ac000cfc1885331">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1c5c7eb889c33c7f4d10dd35b327654e" class="memitem:ga1c5c7eb889c33c7f4d10dd35b327654e">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga431663a1427d2eb3a273bc398b6737b5" class="el">GLFWwindowrefreshfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga1c5c7eb889c33c7f4d10dd35b327654e" class="el">glfwSetWindowRefreshCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga431663a1427d2eb3a273bc398b6737b5" class="el">GLFWwindowrefreshfun</a> callback)</td>
</tr>
<tr class="memdesc:ga1c5c7eb889c33c7f4d10dd35b327654e">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the refresh callback for the specified window.<br />
</td>
</tr>
<tr class="separator:ga1c5c7eb889c33c7f4d10dd35b327654e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac2d83c4a10f071baf841f6730528e66c" class="memitem:gac2d83c4a10f071baf841f6730528e66c">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabc58c47e9d93f6eb1862d615c3680f46" class="el">GLFWwindowfocusfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gac2d83c4a10f071baf841f6730528e66c" class="el">glfwSetWindowFocusCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabc58c47e9d93f6eb1862d615c3680f46" class="el">GLFWwindowfocusfun</a> callback)</td>
</tr>
<tr class="memdesc:gac2d83c4a10f071baf841f6730528e66c">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the focus callback for the specified window.<br />
</td>
</tr>
<tr class="separator:gac2d83c4a10f071baf841f6730528e66c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac793e9efd255567b5fb8b445052cfd3e" class="memitem:gac793e9efd255567b5fb8b445052cfd3e">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga35c658cccba236f26e7adee0e25f6a4f" class="el">GLFWwindowiconifyfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gac793e9efd255567b5fb8b445052cfd3e" class="el">glfwSetWindowIconifyCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga35c658cccba236f26e7adee0e25f6a4f" class="el">GLFWwindowiconifyfun</a> callback)</td>
</tr>
<tr class="memdesc:gac793e9efd255567b5fb8b445052cfd3e">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the iconify callback for the specified window.<br />
</td>
</tr>
<tr class="separator:gac793e9efd255567b5fb8b445052cfd3e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gacbe64c339fbd94885e62145563b6dc93" class="memitem:gacbe64c339fbd94885e62145563b6dc93">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3017196fdaec33ac3e095765176c2a90" class="el">GLFWwindowmaximizefun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gacbe64c339fbd94885e62145563b6dc93" class="el">glfwSetWindowMaximizeCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3017196fdaec33ac3e095765176c2a90" class="el">GLFWwindowmaximizefun</a> callback)</td>
</tr>
<tr class="memdesc:gacbe64c339fbd94885e62145563b6dc93">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the maximize callback for the specified window.<br />
</td>
</tr>
<tr class="separator:gacbe64c339fbd94885e62145563b6dc93">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab3fb7c3366577daef18c0023e2a8591f" class="memitem:gab3fb7c3366577daef18c0023e2a8591f">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gae18026e294dde685ed2e5f759533144d" class="el">GLFWframebuffersizefun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gab3fb7c3366577daef18c0023e2a8591f" class="el">glfwSetFramebufferSizeCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gae18026e294dde685ed2e5f759533144d" class="el">GLFWframebuffersizefun</a> callback)</td>
</tr>
<tr class="memdesc:gab3fb7c3366577daef18c0023e2a8591f">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the framebuffer resize callback for the specified window.<br />
</td>
</tr>
<tr class="separator:gab3fb7c3366577daef18c0023e2a8591f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf2832ebb5aa6c252a2d261de002c92d6" class="memitem:gaf2832ebb5aa6c252a2d261de002c92d6">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga77f288a2d04bb3c77c7d9615d08cf70e" class="el">GLFWwindowcontentscalefun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaf2832ebb5aa6c252a2d261de002c92d6" class="el">glfwSetWindowContentScaleCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga77f288a2d04bb3c77c7d9615d08cf70e" class="el">GLFWwindowcontentscalefun</a> callback)</td>
</tr>
<tr class="memdesc:gaf2832ebb5aa6c252a2d261de002c92d6">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the window content scale callback for the specified window.<br />
</td>
</tr>
<tr class="separator:gaf2832ebb5aa6c252a2d261de002c92d6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga37bd57223967b4211d60ca1a0bf3c832" class="memitem:ga37bd57223967b4211d60ca1a0bf3c832">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga37bd57223967b4211d60ca1a0bf3c832" class="el">glfwPollEvents</a> (void)</td>
</tr>
<tr class="memdesc:ga37bd57223967b4211d60ca1a0bf3c832">
<td class="mdescLeft"> </td>
<td class="mdescRight">Processes all pending events.<br />
</td>
</tr>
<tr class="separator:ga37bd57223967b4211d60ca1a0bf3c832">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga554e37d781f0a997656c26b2c56c835e" class="memitem:ga554e37d781f0a997656c26b2c56c835e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga554e37d781f0a997656c26b2c56c835e" class="el">glfwWaitEvents</a> (void)</td>
</tr>
<tr class="memdesc:ga554e37d781f0a997656c26b2c56c835e">
<td class="mdescLeft"> </td>
<td class="mdescRight">Waits until events are queued and processes them.<br />
</td>
</tr>
<tr class="separator:ga554e37d781f0a997656c26b2c56c835e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga605a178db92f1a7f1a925563ef3ea2cf" class="memitem:ga605a178db92f1a7f1a925563ef3ea2cf">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga605a178db92f1a7f1a925563ef3ea2cf" class="el">glfwWaitEventsTimeout</a> (double timeout)</td>
</tr>
<tr class="memdesc:ga605a178db92f1a7f1a925563ef3ea2cf">
<td class="mdescLeft"> </td>
<td class="mdescRight">Waits with timeout until events are queued and processes them.<br />
</td>
</tr>
<tr class="separator:ga605a178db92f1a7f1a925563ef3ea2cf">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab5997a25187e9fd5c6f2ecbbc8dfd7e9" class="memitem:gab5997a25187e9fd5c6f2ecbbc8dfd7e9">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gab5997a25187e9fd5c6f2ecbbc8dfd7e9" class="el">glfwPostEmptyEvent</a> (void)</td>
</tr>
<tr class="memdesc:gab5997a25187e9fd5c6f2ecbbc8dfd7e9">
<td class="mdescLeft"> </td>
<td class="mdescRight">Posts an empty event to the event queue.<br />
</td>
</tr>
<tr class="separator:gab5997a25187e9fd5c6f2ecbbc8dfd7e9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga15a5a1ee5b3c2ca6b15ca209a12efd14" class="memitem:ga15a5a1ee5b3c2ca6b15ca209a12efd14">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga15a5a1ee5b3c2ca6b15ca209a12efd14" class="el">glfwSwapBuffers</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga15a5a1ee5b3c2ca6b15ca209a12efd14">
<td class="mdescLeft"> </td>
<td class="mdescRight">Swaps the front and back buffers of the specified window.<br />
</td>
</tr>
<tr class="separator:ga15a5a1ee5b3c2ca6b15ca209a12efd14">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## Macro Definition Documentation

<span id="ga54ddb14825a1541a56e22afb5f832a9e"></span>

## <span class="permalink">[◆ ](#ga54ddb14825a1541a56e22afb5f832a9e)</span>GLFW_FOCUSED

<div class="memitem">

<div class="memproto">

|                                    |
|------------------------------------|
| \#define GLFW_FOCUSED   0x00020001 |

</div>

<div class="memdoc">

Input focus <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_FOCUSED_hint" class="el">window hint</a> or <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_FOCUSED_attrib" class="el">window attribute</a>.

</div>

</div>

<span id="ga39d44b7c056e55e581355a92d240b58a"></span>

## <span class="permalink">[◆ ](#ga39d44b7c056e55e581355a92d240b58a)</span>GLFW_ICONIFIED

<div class="memitem">

<div class="memproto">

|                                      |
|--------------------------------------|
| \#define GLFW_ICONIFIED   0x00020002 |

</div>

<div class="memdoc">

Window iconification <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_ICONIFIED_attrib" class="el">window attribute</a>.

</div>

</div>

<span id="gadba13c7a1b3aa40831eb2beedbd5bd1d"></span>

## <span class="permalink">[◆ ](#gadba13c7a1b3aa40831eb2beedbd5bd1d)</span>GLFW_RESIZABLE

<div class="memitem">

<div class="memproto">

|                                      |
|--------------------------------------|
| \#define GLFW_RESIZABLE   0x00020003 |

</div>

<div class="memdoc">

Window resize-ability <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_RESIZABLE_hint" class="el">window hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_RESIZABLE_attrib" class="el">window attribute</a>.

</div>

</div>

<span id="gafb3cdc45297e06d8f1eb13adc69ca6c4"></span>

## <span class="permalink">[◆ ](#gafb3cdc45297e06d8f1eb13adc69ca6c4)</span>GLFW_VISIBLE

<div class="memitem">

<div class="memproto">

|                                    |
|------------------------------------|
| \#define GLFW_VISIBLE   0x00020004 |

</div>

<div class="memdoc">

Window visibility <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_VISIBLE_hint" class="el">window hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_VISIBLE_attrib" class="el">window attribute</a>.

</div>

</div>

<span id="ga21b854d36314c94d65aed84405b2f25e"></span>

## <span class="permalink">[◆ ](#ga21b854d36314c94d65aed84405b2f25e)</span>GLFW_DECORATED

<div class="memitem">

<div class="memproto">

|                                      |
|--------------------------------------|
| \#define GLFW_DECORATED   0x00020005 |

</div>

<div class="memdoc">

Window decoration <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_DECORATED_hint" class="el">window hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_DECORATED_attrib" class="el">window attribute</a>.

</div>

</div>

<span id="ga9d9874fc928200136a6dcdad726aa252"></span>

## <span class="permalink">[◆ ](#ga9d9874fc928200136a6dcdad726aa252)</span>GLFW_AUTO_ICONIFY

<div class="memitem">

<div class="memproto">

|                                         |
|-----------------------------------------|
| \#define GLFW_AUTO_ICONIFY   0x00020006 |

</div>

<div class="memdoc">

Window auto-iconification <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_AUTO_ICONIFY_hint" class="el">window hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_AUTO_ICONIFY_attrib" class="el">window attribute</a>.

</div>

</div>

<span id="ga7fb0be51407783b41adbf5bec0b09d80"></span>

## <span class="permalink">[◆ ](#ga7fb0be51407783b41adbf5bec0b09d80)</span>GLFW_FLOATING

<div class="memitem">

<div class="memproto">

|                                     |
|-------------------------------------|
| \#define GLFW_FLOATING   0x00020007 |

</div>

<div class="memdoc">

Window decoration <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_FLOATING_hint" class="el">window hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_FLOATING_attrib" class="el">window attribute</a>.

</div>

</div>

<span id="gad8ccb396253ad0b72c6d4c917eb38a03"></span>

## <span class="permalink">[◆ ](#gad8ccb396253ad0b72c6d4c917eb38a03)</span>GLFW_MAXIMIZED

<div class="memitem">

<div class="memproto">

|                                      |
|--------------------------------------|
| \#define GLFW_MAXIMIZED   0x00020008 |

</div>

<div class="memdoc">

Window maximization <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_MAXIMIZED_hint" class="el">window hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_MAXIMIZED_attrib" class="el">window attribute</a>.

</div>

</div>

<span id="ga5ac0847c0aa0b3619f2855707b8a7a77"></span>

## <span class="permalink">[◆ ](#ga5ac0847c0aa0b3619f2855707b8a7a77)</span>GLFW_CENTER_CURSOR

<div class="memitem">

<div class="memproto">

|                                          |
|------------------------------------------|
| \#define GLFW_CENTER_CURSOR   0x00020009 |

</div>

<div class="memdoc">

Cursor centering <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CENTER_CURSOR_hint" class="el">window hint</a>.

</div>

</div>

<span id="ga60a0578c3b9449027d683a9c6abb9f14"></span>

## <span class="permalink">[◆ ](#ga60a0578c3b9449027d683a9c6abb9f14)</span>GLFW_TRANSPARENT_FRAMEBUFFER

<div class="memitem">

<div class="memproto">

|                                                    |
|----------------------------------------------------|
| \#define GLFW_TRANSPARENT_FRAMEBUFFER   0x0002000A |

</div>

<div class="memdoc">

Window framebuffer transparency <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_TRANSPARENT_FRAMEBUFFER_hint" class="el">window hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_TRANSPARENT_FRAMEBUFFER_attrib" class="el">window attribute</a>.

</div>

</div>

<span id="ga8665c71c6fa3d22425c6a0e8a3f89d8a"></span>

## <span class="permalink">[◆ ](#ga8665c71c6fa3d22425c6a0e8a3f89d8a)</span>GLFW_HOVERED

<div class="memitem">

<div class="memproto">

|                                    |
|------------------------------------|
| \#define GLFW_HOVERED   0x0002000B |

</div>

<div class="memdoc">

Mouse cursor hover <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_HOVERED_attrib" class="el">window attribute</a>.

</div>

</div>

<span id="gafa94b1da34bfd6488c0d709761504dfc"></span>

## <span class="permalink">[◆ ](#gafa94b1da34bfd6488c0d709761504dfc)</span>GLFW_FOCUS_ON_SHOW

<div class="memitem">

<div class="memproto">

|                                          |
|------------------------------------------|
| \#define GLFW_FOCUS_ON_SHOW   0x0002000C |

</div>

<div class="memdoc">

Input focus <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_FOCUS_ON_SHOW_hint" class="el">window hint</a> or <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_FOCUS_ON_SHOW_attrib" class="el">window attribute</a>.

</div>

</div>

<span id="ga88981797d29800808ec242274ab5c03a"></span>

## <span class="permalink">[◆ ](#ga88981797d29800808ec242274ab5c03a)</span>GLFW_MOUSE_PASSTHROUGH

<div class="memitem">

<div class="memproto">

|                                              |
|----------------------------------------------|
| \#define GLFW_MOUSE_PASSTHROUGH   0x0002000D |

</div>

<div class="memdoc">

Mouse input transparency <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_MOUSE_PASSTHROUGH_hint" class="el">window hint</a> or <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_MOUSE_PASSTHROUGH_attrib" class="el">window attribute</a>.

</div>

</div>

<span id="gaededa6b208b8e31343da56bb349c6fb2"></span>

## <span class="permalink">[◆ ](#gaededa6b208b8e31343da56bb349c6fb2)</span>GLFW_POSITION_X

<div class="memitem">

<div class="memproto">

|                                       |
|---------------------------------------|
| \#define GLFW_POSITION_X   0x0002000E |

</div>

<div class="memdoc">

Initial position x-coordinate <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_POSITION_X" class="el">window hint</a>.

</div>

</div>

<span id="ga6b3ccf63683c81f479e2a98f5027200e"></span>

## <span class="permalink">[◆ ](#ga6b3ccf63683c81f479e2a98f5027200e)</span>GLFW_POSITION_Y

<div class="memitem">

<div class="memproto">

|                                       |
|---------------------------------------|
| \#define GLFW_POSITION_Y   0x0002000F |

</div>

<div class="memdoc">

Initial position y-coordinate <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_POSITION_Y" class="el">window hint</a>.

</div>

</div>

<span id="gaf78ed8e417dbcc1e354906cc2708c982"></span>

## <span class="permalink">[◆ ](#gaf78ed8e417dbcc1e354906cc2708c982)</span>GLFW_RED_BITS

<div class="memitem">

<div class="memproto">

|                                     |
|-------------------------------------|
| \#define GLFW_RED_BITS   0x00021001 |

</div>

<div class="memdoc">

Framebuffer bit depth <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_RED_BITS" class="el">hint</a>.

</div>

</div>

<span id="gafba3b72638c914e5fb8a237dd4c50d4d"></span>

## <span class="permalink">[◆ ](#gafba3b72638c914e5fb8a237dd4c50d4d)</span>GLFW_GREEN_BITS

<div class="memitem">

<div class="memproto">

|                                       |
|---------------------------------------|
| \#define GLFW_GREEN_BITS   0x00021002 |

</div>

<div class="memdoc">

Framebuffer bit depth <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_GREEN_BITS" class="el">hint</a>.

</div>

</div>

<span id="gab292ea403db6d514537b515311bf9ae3"></span>

## <span class="permalink">[◆ ](#gab292ea403db6d514537b515311bf9ae3)</span>GLFW_BLUE_BITS

<div class="memitem">

<div class="memproto">

|                                      |
|--------------------------------------|
| \#define GLFW_BLUE_BITS   0x00021003 |

</div>

<div class="memdoc">

Framebuffer bit depth <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_BLUE_BITS" class="el">hint</a>.

</div>

</div>

<span id="gafed79a3f468997877da86c449bd43e8c"></span>

## <span class="permalink">[◆ ](#gafed79a3f468997877da86c449bd43e8c)</span>GLFW_ALPHA_BITS

<div class="memitem">

<div class="memproto">

|                                       |
|---------------------------------------|
| \#define GLFW_ALPHA_BITS   0x00021004 |

</div>

<div class="memdoc">

Framebuffer bit depth <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_ALPHA_BITS" class="el">hint</a>.

</div>

</div>

<span id="ga318a55eac1fee57dfe593b6d38149d07"></span>

## <span class="permalink">[◆ ](#ga318a55eac1fee57dfe593b6d38149d07)</span>GLFW_DEPTH_BITS

<div class="memitem">

<div class="memproto">

|                                       |
|---------------------------------------|
| \#define GLFW_DEPTH_BITS   0x00021005 |

</div>

<div class="memdoc">

Framebuffer bit depth <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_DEPTH_BITS" class="el">hint</a>.

</div>

</div>

<span id="ga5339890a45a1fb38e93cb9fcc5fd069d"></span>

## <span class="permalink">[◆ ](#ga5339890a45a1fb38e93cb9fcc5fd069d)</span>GLFW_STENCIL_BITS

<div class="memitem">

<div class="memproto">

|                                         |
|-----------------------------------------|
| \#define GLFW_STENCIL_BITS   0x00021006 |

</div>

<div class="memdoc">

Framebuffer bit depth <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_STENCIL_BITS" class="el">hint</a>.

</div>

</div>

<span id="gaead34a9a683b2bc20eecf30ba738bfc6"></span>

## <span class="permalink">[◆ ](#gaead34a9a683b2bc20eecf30ba738bfc6)</span>GLFW_ACCUM_RED_BITS

<div class="memitem">

<div class="memproto">

|                                           |
|-------------------------------------------|
| \#define GLFW_ACCUM_RED_BITS   0x00021007 |

</div>

<div class="memdoc">

Framebuffer bit depth <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_ACCUM_RED_BITS" class="el">hint</a>.

</div>

</div>

<span id="ga65713cee1326f8e9d806fdf93187b471"></span>

## <span class="permalink">[◆ ](#ga65713cee1326f8e9d806fdf93187b471)</span>GLFW_ACCUM_GREEN_BITS

<div class="memitem">

<div class="memproto">

|                                             |
|---------------------------------------------|
| \#define GLFW_ACCUM_GREEN_BITS   0x00021008 |

</div>

<div class="memdoc">

Framebuffer bit depth <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_ACCUM_GREEN_BITS" class="el">hint</a>.

</div>

</div>

<span id="ga22bbe9104a8ce1f8b88fb4f186aa36ce"></span>

## <span class="permalink">[◆ ](#ga22bbe9104a8ce1f8b88fb4f186aa36ce)</span>GLFW_ACCUM_BLUE_BITS

<div class="memitem">

<div class="memproto">

|                                            |
|--------------------------------------------|
| \#define GLFW_ACCUM_BLUE_BITS   0x00021009 |

</div>

<div class="memdoc">

Framebuffer bit depth <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_ACCUM_BLUE_BITS" class="el">hint</a>.

</div>

</div>

<span id="gae829b55591c18169a40ab4067a041b1f"></span>

## <span class="permalink">[◆ ](#gae829b55591c18169a40ab4067a041b1f)</span>GLFW_ACCUM_ALPHA_BITS

<div class="memitem">

<div class="memproto">

|                                             |
|---------------------------------------------|
| \#define GLFW_ACCUM_ALPHA_BITS   0x0002100A |

</div>

<div class="memdoc">

Framebuffer bit depth <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_ACCUM_ALPHA_BITS" class="el">hint</a>.

</div>

</div>

<span id="gab05108c5029443b371112b031d1fa174"></span>

## <span class="permalink">[◆ ](#gab05108c5029443b371112b031d1fa174)</span>GLFW_AUX_BUFFERS

<div class="memitem">

<div class="memproto">

|                                        |
|----------------------------------------|
| \#define GLFW_AUX_BUFFERS   0x0002100B |

</div>

<div class="memdoc">

Framebuffer auxiliary buffer <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_AUX_BUFFERS" class="el">hint</a>.

</div>

</div>

<span id="ga83d991efca02537e2d69969135b77b03"></span>

## <span class="permalink">[◆ ](#ga83d991efca02537e2d69969135b77b03)</span>GLFW_STEREO

<div class="memitem">

<div class="memproto">

|                                   |
|-----------------------------------|
| \#define GLFW_STEREO   0x0002100C |

</div>

<div class="memdoc">

OpenGL stereoscopic rendering <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_STEREO" class="el">hint</a>.

</div>

</div>

<span id="ga2cdf86fdcb7722fb8829c4e201607535"></span>

## <span class="permalink">[◆ ](#ga2cdf86fdcb7722fb8829c4e201607535)</span>GLFW_SAMPLES

<div class="memitem">

<div class="memproto">

|                                    |
|------------------------------------|
| \#define GLFW_SAMPLES   0x0002100D |

</div>

<div class="memdoc">

Framebuffer MSAA samples <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_SAMPLES" class="el">hint</a>.

</div>

</div>

<span id="ga444a8f00414a63220591f9fdb7b5642b"></span>

## <span class="permalink">[◆ ](#ga444a8f00414a63220591f9fdb7b5642b)</span>GLFW_SRGB_CAPABLE

<div class="memitem">

<div class="memproto">

|                                         |
|-----------------------------------------|
| \#define GLFW_SRGB_CAPABLE   0x0002100E |

</div>

<div class="memdoc">

Framebuffer sRGB <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_SRGB_CAPABLE" class="el">hint</a>.

</div>

</div>

<span id="ga0f20825e6e47ee8ba389024519682212"></span>

## <span class="permalink">[◆ ](#ga0f20825e6e47ee8ba389024519682212)</span>GLFW_REFRESH_RATE

<div class="memitem">

<div class="memproto">

|                                         |
|-----------------------------------------|
| \#define GLFW_REFRESH_RATE   0x0002100F |

</div>

<div class="memdoc">

Monitor refresh rate <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_REFRESH_RATE" class="el">hint</a>.

</div>

</div>

<span id="ga714a5d569e8a274ea58fdfa020955339"></span>

## <span class="permalink">[◆ ](#ga714a5d569e8a274ea58fdfa020955339)</span>GLFW_DOUBLEBUFFER

<div class="memitem">

<div class="memproto">

|                                         |
|-----------------------------------------|
| \#define GLFW_DOUBLEBUFFER   0x00021010 |

</div>

<div class="memdoc">

Framebuffer double buffering <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_DOUBLEBUFFER_hint" class="el">hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_DOUBLEBUFFER_attrib" class="el">attribute</a>.

</div>

</div>

<span id="ga649309cf72a3d3de5b1348ca7936c95b"></span>

## <span class="permalink">[◆ ](#ga649309cf72a3d3de5b1348ca7936c95b)</span>GLFW_CLIENT_API

<div class="memitem">

<div class="memproto">

|                                       |
|---------------------------------------|
| \#define GLFW_CLIENT_API   0x00022001 |

</div>

<div class="memdoc">

Context client API <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CLIENT_API_hint" class="el">hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CLIENT_API_attrib" class="el">attribute</a>.

</div>

</div>

<span id="gafe5e4922de1f9932d7e9849bb053b0c0"></span>

## <span class="permalink">[◆ ](#gafe5e4922de1f9932d7e9849bb053b0c0)</span>GLFW_CONTEXT_VERSION_MAJOR

<div class="memitem">

<div class="memproto">

|                                                  |
|--------------------------------------------------|
| \#define GLFW_CONTEXT_VERSION_MAJOR   0x00022002 |

</div>

<div class="memdoc">

Context client API major version <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CONTEXT_VERSION_MAJOR_hint" class="el">hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CONTEXT_VERSION_MAJOR_attrib" class="el">attribute</a>.

</div>

</div>

<span id="ga31aca791e4b538c4e4a771eb95cc2d07"></span>

## <span class="permalink">[◆ ](#ga31aca791e4b538c4e4a771eb95cc2d07)</span>GLFW_CONTEXT_VERSION_MINOR

<div class="memitem">

<div class="memproto">

|                                                  |
|--------------------------------------------------|
| \#define GLFW_CONTEXT_VERSION_MINOR   0x00022003 |

</div>

<div class="memdoc">

Context client API minor version <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CONTEXT_VERSION_MINOR_hint" class="el">hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CONTEXT_VERSION_MINOR_attrib" class="el">attribute</a>.

</div>

</div>

<span id="gafb9475071aa77c6fb05ca5a5c8678a08"></span>

## <span class="permalink">[◆ ](#gafb9475071aa77c6fb05ca5a5c8678a08)</span>GLFW_CONTEXT_REVISION

<div class="memitem">

<div class="memproto">

|                                             |
|---------------------------------------------|
| \#define GLFW_CONTEXT_REVISION   0x00022004 |

</div>

<div class="memdoc">

Context client API revision number <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CONTEXT_REVISION_attrib" class="el">attribute</a>.

</div>

</div>

<span id="gade3593916b4c507900aa2d6844810e00"></span>

## <span class="permalink">[◆ ](#gade3593916b4c507900aa2d6844810e00)</span>GLFW_CONTEXT_ROBUSTNESS

<div class="memitem">

<div class="memproto">

|                                               |
|-----------------------------------------------|
| \#define GLFW_CONTEXT_ROBUSTNESS   0x00022005 |

</div>

<div class="memdoc">

Context client API revision number <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CONTEXT_ROBUSTNESS_hint" class="el">hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CONTEXT_ROBUSTNESS_attrib" class="el">attribute</a>.

</div>

</div>

<span id="ga13d24b12465da8b28985f46c8557925b"></span>

## <span class="permalink">[◆ ](#ga13d24b12465da8b28985f46c8557925b)</span>GLFW_OPENGL_FORWARD_COMPAT

<div class="memitem">

<div class="memproto">

|                                                  |
|--------------------------------------------------|
| \#define GLFW_OPENGL_FORWARD_COMPAT   0x00022006 |

</div>

<div class="memdoc">

OpenGL forward-compatibility <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_OPENGL_FORWARD_COMPAT_hint" class="el">hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_OPENGL_FORWARD_COMPAT_attrib" class="el">attribute</a>.

</div>

</div>

<span id="ga8d55e3afec73c7de0509c3b7ad1d9e3f"></span>

## <span class="permalink">[◆ ](#ga8d55e3afec73c7de0509c3b7ad1d9e3f)</span>GLFW_CONTEXT_DEBUG

<div class="memitem">

<div class="memproto">

|                                          |
|------------------------------------------|
| \#define GLFW_CONTEXT_DEBUG   0x00022007 |

</div>

<div class="memdoc">

Debug mode context <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CONTEXT_DEBUG_hint" class="el">hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CONTEXT_DEBUG_attrib" class="el">attribute</a>.

</div>

</div>

<span id="ga87ec2df0b915201e950ca42d5d0831e1"></span>

## <span class="permalink">[◆ ](#ga87ec2df0b915201e950ca42d5d0831e1)</span>GLFW_OPENGL_DEBUG_CONTEXT

<div class="memitem">

<div class="memproto">

|  |
|----|
| \#define GLFW_OPENGL_DEBUG_CONTEXT   <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga8d55e3afec73c7de0509c3b7ad1d9e3f" class="el">GLFW_CONTEXT_DEBUG</a> |

</div>

<div class="memdoc">

This is an alias for compatibility with earlier versions.

</div>

</div>

<span id="ga44f3a6b4261fbe351e0b950b0f372e12"></span>

## <span class="permalink">[◆ ](#ga44f3a6b4261fbe351e0b950b0f372e12)</span>GLFW_OPENGL_PROFILE

<div class="memitem">

<div class="memproto">

|                                           |
|-------------------------------------------|
| \#define GLFW_OPENGL_PROFILE   0x00022008 |

</div>

<div class="memdoc">

OpenGL profile <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_OPENGL_PROFILE_hint" class="el">hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_OPENGL_PROFILE_attrib" class="el">attribute</a>.

</div>

</div>

<span id="ga72b648a8378fe3310c7c7bbecc0f7be6"></span>

## <span class="permalink">[◆ ](#ga72b648a8378fe3310c7c7bbecc0f7be6)</span>GLFW_CONTEXT_RELEASE_BEHAVIOR

<div class="memitem">

<div class="memproto">

|                                                     |
|-----------------------------------------------------|
| \#define GLFW_CONTEXT_RELEASE_BEHAVIOR   0x00022009 |

</div>

<div class="memdoc">

Context flush-on-release <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CONTEXT_RELEASE_BEHAVIOR_hint" class="el">hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CONTEXT_RELEASE_BEHAVIOR_attrib" class="el">attribute</a>.

</div>

</div>

<span id="ga5a52fdfd46d8249c211f923675728082"></span>

## <span class="permalink">[◆ ](#ga5a52fdfd46d8249c211f923675728082)</span>GLFW_CONTEXT_NO_ERROR

<div class="memitem">

<div class="memproto">

|                                             |
|---------------------------------------------|
| \#define GLFW_CONTEXT_NO_ERROR   0x0002200A |

</div>

<div class="memdoc">

Context error suppression <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CONTEXT_NO_ERROR_hint" class="el">hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CONTEXT_NO_ERROR_attrib" class="el">attribute</a>.

</div>

</div>

<span id="ga5154cebfcd831c1cc63a4d5ac9bb4486"></span>

## <span class="permalink">[◆ ](#ga5154cebfcd831c1cc63a4d5ac9bb4486)</span>GLFW_CONTEXT_CREATION_API

<div class="memitem">

<div class="memproto">

|                                                 |
|-------------------------------------------------|
| \#define GLFW_CONTEXT_CREATION_API   0x0002200B |

</div>

<div class="memdoc">

Context creation API <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CONTEXT_CREATION_API_hint" class="el">hint</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CONTEXT_CREATION_API_attrib" class="el">attribute</a>.

</div>

</div>

<span id="ga620bc4280c7eab81ac9f02204500ed47"></span>

## <span class="permalink">[◆ ](#ga620bc4280c7eab81ac9f02204500ed47)</span>GLFW_SCALE_TO_MONITOR

<div class="memitem">

<div class="memproto">

|                                             |
|---------------------------------------------|
| \#define GLFW_SCALE_TO_MONITOR   0x0002200C |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaa5a9c6b4722670fd33d6e8a88f2e21bc"></span>

## <span class="permalink">[◆ ](#gaa5a9c6b4722670fd33d6e8a88f2e21bc)</span>GLFW_SCALE_FRAMEBUFFER

<div class="memitem">

<div class="memproto">

|                                              |
|----------------------------------------------|
| \#define GLFW_SCALE_FRAMEBUFFER   0x0002200D |

</div>

<div class="memdoc">

</div>

</div>

<span id="gab6ef2d02eb55800d249ccf1af253c35e"></span>

## <span class="permalink">[◆ ](#gab6ef2d02eb55800d249ccf1af253c35e)</span>GLFW_COCOA_RETINA_FRAMEBUFFER

<div class="memitem">

<div class="memproto">

|                                                     |
|-----------------------------------------------------|
| \#define GLFW_COCOA_RETINA_FRAMEBUFFER   0x00023001 |

</div>

<div class="memdoc">

This is an alias for the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_SCALE_FRAMEBUFFER_hint" class="el">GLFW_SCALE_FRAMEBUFFER</a> window hint for compatibility with earlier versions.

</div>

</div>

<span id="ga70fa0fbc745de6aa824df79a580e84b5"></span>

## <span class="permalink">[◆ ](#ga70fa0fbc745de6aa824df79a580e84b5)</span>GLFW_COCOA_FRAME_NAME

<div class="memitem">

<div class="memproto">

|                                             |
|---------------------------------------------|
| \#define GLFW_COCOA_FRAME_NAME   0x00023002 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga53c84ed2ddd94e15bbd44b1f6f7feafc"></span>

## <span class="permalink">[◆ ](#ga53c84ed2ddd94e15bbd44b1f6f7feafc)</span>GLFW_COCOA_GRAPHICS_SWITCHING

<div class="memitem">

<div class="memproto">

|                                                     |
|-----------------------------------------------------|
| \#define GLFW_COCOA_GRAPHICS_SWITCHING   0x00023003 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gae5a9ea2fccccd92edbd343fc56461114"></span>

## <span class="permalink">[◆ ](#gae5a9ea2fccccd92edbd343fc56461114)</span>GLFW_X11_CLASS_NAME

<div class="memitem">

<div class="memproto">

|                                           |
|-------------------------------------------|
| \#define GLFW_X11_CLASS_NAME   0x00024001 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga494c3c0d911e4b860b946530a3e389e8"></span>

## <span class="permalink">[◆ ](#ga494c3c0d911e4b860b946530a3e389e8)</span>GLFW_X11_INSTANCE_NAME

<div class="memitem">

<div class="memproto">

|                                              |
|----------------------------------------------|
| \#define GLFW_X11_INSTANCE_NAME   0x00024002 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaf65ea8dafdc0edb07b821b9a336d5043"></span>

## <span class="permalink">[◆ ](#gaf65ea8dafdc0edb07b821b9a336d5043)</span>GLFW_WIN32_KEYBOARD_MENU

<div class="memitem">

<div class="memproto">

|                                                |
|------------------------------------------------|
| \#define GLFW_WIN32_KEYBOARD_MENU   0x00025001 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gace10f3846571de62243b46f75d978487"></span>

## <span class="permalink">[◆ ](#gace10f3846571de62243b46f75d978487)</span>GLFW_WIN32_SHOWDEFAULT

<div class="memitem">

<div class="memproto">

|                                              |
|----------------------------------------------|
| \#define GLFW_WIN32_SHOWDEFAULT   0x00025002 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gafbf1ce7a4362c75e602a4df9e1bdecd3"></span>

## <span class="permalink">[◆ ](#gafbf1ce7a4362c75e602a4df9e1bdecd3)</span>GLFW_WAYLAND_APP_ID

<div class="memitem">

<div class="memproto">

|                                           |
|-------------------------------------------|
| \#define GLFW_WAYLAND_APP_ID   0x00026001 |

</div>

<div class="memdoc">

Allows specification of the Wayland app_id.

</div>

</div>

## Typedef Documentation

<span id="ga3c96d80d363e67d13a41b5d1821f3242"></span>

## <span class="permalink">[◆ ](#ga3c96d80d363e67d13a41b5d1821f3242)</span>GLFWwindow

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef struct <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> |

</div>

<div class="memdoc">

Opaque window object.

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_object" class="el">Window objects</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gabe287973a21a8f927cde4db06b8dcbe9"></span>

## <span class="permalink">[◆ ](#gabe287973a21a8f927cde4db06b8dcbe9)</span>GLFWwindowposfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWwindowposfun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int xpos, int ypos) |

</div>

<div class="memdoc">

This is the function pointer type for window position callbacks. A window position callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> callback_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> xpos, <span class="keywordtype">int</span> ypos)

</div>

<div id="agroup__window_html_ga3c96d80d363e67d13a41b5d1821f3242" class="ttc">

<div class="ttname">

[GLFWwindow](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242)

</div>

<div class="ttdeci">

struct GLFWwindow GLFWwindow

</div>

<div class="ttdoc">

Opaque window object.

</div>

<div class="ttdef">

**Definition** glfw3.h:1408

</div>

</div>

</div>

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window that was moved. |
| \[in\] | xpos | The new x-coordinate, in screen coordinates, of the upper-left corner of the content area of the window. |
| \[in\] | ypos | The new y-coordinate, in screen coordinates, of the upper-left corner of the content area of the window. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_pos" class="el">Window position</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga08bdfbba88934f9c4f92fd757979ac74" class="el">glfwSetWindowPosCallback</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gaec0282944bb810f6f3163ec02da90350"></span>

## <span class="permalink">[◆ ](#gaec0282944bb810f6f3163ec02da90350)</span>GLFWwindowsizefun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWwindowsizefun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int width, int height) |

</div>

<div class="memdoc">

This is the function pointer type for window size callbacks. A window size callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> callback_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> width, <span class="keywordtype">int</span> height)

</div>

</div>

Parameters  
|        |        |                                                       |
|--------|--------|-------------------------------------------------------|
| \[in\] | window | The window that was resized.                          |
| \[in\] | width  | The new width, in screen coordinates, of the window.  |
| \[in\] | height | The new height, in screen coordinates, of the window. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_size" class="el">Window size</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gad91b8b047a0c4c6033c38853864c34f8" class="el">glfwSetWindowSizeCallback</a>

<!-- -->

Since  
Added in version 1.0. **GLFW 3:** Added window handle parameter.

</div>

</div>

<span id="gabf859b936d80961b7d39013a9694cc3e"></span>

## <span class="permalink">[◆ ](#gabf859b936d80961b7d39013a9694cc3e)</span>GLFWwindowclosefun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWwindowclosefun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window) |

</div>

<div class="memdoc">

This is the function pointer type for window close callbacks. A window close callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window)

</div>

</div>

Parameters  
|        |        |                                              |
|--------|--------|----------------------------------------------|
| \[in\] | window | The window that the user attempted to close. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_close" class="el">Window closing and close flag</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gada646d775a7776a95ac000cfc1885331" class="el">glfwSetWindowCloseCallback</a>

<!-- -->

Since  
Added in version 2.5. **GLFW 3:** Added window handle parameter.

</div>

</div>

<span id="ga431663a1427d2eb3a273bc398b6737b5"></span>

## <span class="permalink">[◆ ](#ga431663a1427d2eb3a273bc398b6737b5)</span>GLFWwindowrefreshfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWwindowrefreshfun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window) |

</div>

<div class="memdoc">

This is the function pointer type for window content refresh callbacks. A window content refresh callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window);

</div>

</div>

Parameters  
|        |        |                                                 |
|--------|--------|-------------------------------------------------|
| \[in\] | window | The window whose content needs to be refreshed. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_refresh" class="el">Window damage and refresh</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga1c5c7eb889c33c7f4d10dd35b327654e" class="el">glfwSetWindowRefreshCallback</a>

<!-- -->

Since  
Added in version 2.5. **GLFW 3:** Added window handle parameter.

</div>

</div>

<span id="gabc58c47e9d93f6eb1862d615c3680f46"></span>

## <span class="permalink">[◆ ](#gabc58c47e9d93f6eb1862d615c3680f46)</span>GLFWwindowfocusfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWwindowfocusfun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int focused) |

</div>

<div class="memdoc">

This is the function pointer type for window focus callbacks. A window focus callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> focused)

</div>

</div>

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window that gained or lost input focus. |
| \[in\] | focused | `GLFW_TRUE` if the window was given input focus, or `GLFW_FALSE` if it lost it. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_focus" class="el">Window input focus</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gac2d83c4a10f071baf841f6730528e66c" class="el">glfwSetWindowFocusCallback</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga35c658cccba236f26e7adee0e25f6a4f"></span>

## <span class="permalink">[◆ ](#ga35c658cccba236f26e7adee0e25f6a4f)</span>GLFWwindowiconifyfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWwindowiconifyfun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int iconified) |

</div>

<div class="memdoc">

This is the function pointer type for window iconify callbacks. A window iconify callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> iconified)

</div>

</div>

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window that was iconified or restored. |
| \[in\] | iconified | `GLFW_TRUE` if the window was iconified, or `GLFW_FALSE` if it was restored. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_iconify" class="el">Window iconification</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gac793e9efd255567b5fb8b445052cfd3e" class="el">glfwSetWindowIconifyCallback</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga3017196fdaec33ac3e095765176c2a90"></span>

## <span class="permalink">[◆ ](#ga3017196fdaec33ac3e095765176c2a90)</span>GLFWwindowmaximizefun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWwindowmaximizefun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int maximized) |

</div>

<div class="memdoc">

This is the function pointer type for window maximize callbacks. A window maximize callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> maximized)

</div>

</div>

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window that was maximized or restored. |
| \[in\] | maximized | `GLFW_TRUE` if the window was maximized, or `GLFW_FALSE` if it was restored. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_maximize" class="el">Window maximization</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gacbe64c339fbd94885e62145563b6dc93" class="el" title="Sets the maximize callback for the specified window.">glfwSetWindowMaximizeCallback</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="gae18026e294dde685ed2e5f759533144d"></span>

## <span class="permalink">[◆ ](#gae18026e294dde685ed2e5f759533144d)</span>GLFWframebuffersizefun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWframebuffersizefun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int width, int height) |

</div>

<div class="memdoc">

This is the function pointer type for framebuffer size callbacks. A framebuffer size callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> width, <span class="keywordtype">int</span> height)

</div>

</div>

Parameters  
|        |        |                                                |
|--------|--------|------------------------------------------------|
| \[in\] | window | The window whose framebuffer was resized.      |
| \[in\] | width  | The new width, in pixels, of the framebuffer.  |
| \[in\] | height | The new height, in pixels, of the framebuffer. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_fbsize" class="el">Framebuffer size</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gab3fb7c3366577daef18c0023e2a8591f" class="el">glfwSetFramebufferSizeCallback</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga77f288a2d04bb3c77c7d9615d08cf70e"></span>

## <span class="permalink">[◆ ](#ga77f288a2d04bb3c77c7d9615d08cf70e)</span>GLFWwindowcontentscalefun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWwindowcontentscalefun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, float xscale, float yscale) |

</div>

<div class="memdoc">

This is the function pointer type for window content scale callbacks. A window content scale callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">float</span> xscale, <span class="keywordtype">float</span> yscale)

</div>

</div>

Parameters  
|        |        |                                             |
|--------|--------|---------------------------------------------|
| \[in\] | window | The window whose content scale changed.     |
| \[in\] | xscale | The new x-axis content scale of the window. |
| \[in\] | yscale | The new y-axis content scale of the window. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_scale" class="el">Window content scale</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaf2832ebb5aa6c252a2d261de002c92d6" class="el">glfwSetWindowContentScaleCallback</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="ga7cc0a09de172fa7250872046f8c4d2ca"></span>

## <span class="permalink">[◆ ](#ga7cc0a09de172fa7250872046f8c4d2ca)</span>GLFWimage

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef struct <a href="/docs/glfw/v3-5-1/en/04-reference/20-glfwimage/" class="el">GLFWimage</a> <a href="/docs/glfw/v3-5-1/en/04-reference/20-glfwimage/" class="el">GLFWimage</a> |

</div>

<div class="memdoc">

This describes a single 2D image. See the documentation for each related function what the expected pixel format is.

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#cursor_custom" class="el">Custom cursor creation</a>

<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_icon" class="el">Window icon</a>

<!-- -->

Since  
Added in version 2.1. **GLFW 3:** Removed format and bytes-per-pixel members.

</div>

</div>

## Function Documentation

<span id="gaa77c4898dfb83344a6b4f76aa16b9a4a"></span>

## <span class="permalink">[◆ ](#gaa77c4898dfb83344a6b4f76aa16b9a4a)</span>glfwDefaultWindowHints()

<div class="memitem">

<div class="memproto">

|                             |     |       |     |     |     |
|-----------------------------|-----|-------|-----|-----|-----|
| void glfwDefaultWindowHints | (   | void  |     | )   |     |

</div>

<div class="memdoc">

This function resets all window hints to their <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_hints_values" class="el">default values</a>.

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_hints" class="el">Window creation hints</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga7d9c8c62384b1e2821c4dc48952d2033" class="el">glfwWindowHint</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga8cb2782861c9d997bcf2dea97f363e5f" class="el">glfwWindowHintString</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga7d9c8c62384b1e2821c4dc48952d2033"></span>

## <span class="permalink">[◆ ](#ga7d9c8c62384b1e2821c4dc48952d2033)</span>glfwWindowHint()

<div class="memitem">

<div class="memproto">

|                     |     |      |          |
|---------------------|-----|------|----------|
| void glfwWindowHint | (   | int  | *hint*,  |
|                     |     | int  | *value*  |
|                     | )   |      |          |

</div>

<div class="memdoc">

This function sets hints for the next call to <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb" class="el">glfwCreateWindow</a>. The hints, once set, retain their values until changed by a call to this function or <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaa77c4898dfb83344a6b4f76aa16b9a4a" class="el">glfwDefaultWindowHints</a>, or until the library is terminated.

Only integer value hints can be set with this function. String value hints are set with <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga8cb2782861c9d997bcf2dea97f363e5f" class="el">glfwWindowHintString</a>.

This function does not check whether the specified hint values are valid. If you set hints to invalid values this will instead be reported by the next call to <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb" class="el">glfwCreateWindow</a>.

Some hints are platform specific. These may be set on any platform but they will only affect their specific platform. Other platforms will ignore them. Setting these hints requires no platform specific headers or functions.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | hint | The <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_hints" class="el">window hint</a> to set. |
| \[in\] | value | The new value of the window hint. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_hints" class="el">Window creation hints</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga8cb2782861c9d997bcf2dea97f363e5f" class="el">glfwWindowHintString</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaa77c4898dfb83344a6b4f76aa16b9a4a" class="el">glfwDefaultWindowHints</a>

<!-- -->

Since  
Added in version 3.0. Replaces `glfwOpenWindowHint`.

</div>

</div>

<span id="ga8cb2782861c9d997bcf2dea97f363e5f"></span>

## <span class="permalink">[◆ ](#ga8cb2782861c9d997bcf2dea97f363e5f)</span>glfwWindowHintString()

<div class="memitem">

<div class="memproto">

|                           |     |                |          |
|---------------------------|-----|----------------|----------|
| void glfwWindowHintString | (   | int            | *hint*,  |
|                           |     | const char \*  | *value*  |
|                           | )   |                |          |

</div>

<div class="memdoc">

This function sets hints for the next call to <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb" class="el">glfwCreateWindow</a>. The hints, once set, retain their values until changed by a call to this function or <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaa77c4898dfb83344a6b4f76aa16b9a4a" class="el">glfwDefaultWindowHints</a>, or until the library is terminated.

Only string type hints can be set with this function. Integer value hints are set with <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga7d9c8c62384b1e2821c4dc48952d2033" class="el">glfwWindowHint</a>.

This function does not check whether the specified hint values are valid. If you set hints to invalid values this will instead be reported by the next call to <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb" class="el">glfwCreateWindow</a>.

Some hints are platform specific. These may be set on any platform but they will only affect their specific platform. Other platforms will ignore them. Setting these hints requires no platform specific headers or functions.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | hint | The <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_hints" class="el">window hint</a> to set. |
| \[in\] | value | The new value of the window hint. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>.

<!-- -->

Pointer lifetime  
The specified string is copied before this function returns.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_hints" class="el">Window creation hints</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga7d9c8c62384b1e2821c4dc48952d2033" class="el">glfwWindowHint</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaa77c4898dfb83344a6b4f76aa16b9a4a" class="el">glfwDefaultWindowHints</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="ga3555a418df92ad53f917597fe2f64aeb"></span>

## <span class="permalink">[◆ ](#ga3555a418df92ad53f917597fe2f64aeb)</span>glfwCreateWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \* glfwCreateWindow | ( | int  | *width*, |
|  |  | int  | *height*, |
|  |  | const char \*  | *title*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *share*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function creates a window and its associated OpenGL or OpenGL ES context. Most of the options controlling how the window and its context should be created are specified with <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_hints" class="el">window hints</a>.

Successful creation does not change which context is current. Before you can use the newly created context, you need to <a href="/docs/glfw/v3-5-1/en/03-guides/02-context-guide/#context_current" class="el">make it current</a>. For information about the `share` parameter, see <a href="/docs/glfw/v3-5-1/en/03-guides/02-context-guide/#context_sharing" class="el">Context object sharing</a>.

The created window, framebuffer and context may differ from what you requested, as not all parameters and hints are <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_hints_hard" class="el">hard constraints</a>. This includes the size of the window, especially for full screen windows. To query the actual attributes of the created window, framebuffer and context, see <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337" class="el">glfwGetWindowAttrib</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaeea7cbc03373a41fb51cfbf9f2a5d4c6" class="el">glfwGetWindowSize</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga0e2637a4161afb283f5300c7f94785c9" class="el">glfwGetFramebufferSize</a>.

To create a full screen window, you need to specify the monitor the window will cover. If no monitor is specified, the window will be windowed mode. Unless you have a way for the user to choose a specific monitor, it is recommended that you pick the primary monitor. For more information on how to query connected monitors, see <a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_monitors" class="el">Retrieving monitors</a>.

For full screen windows, the specified size becomes the resolution of the window's *desired video mode*. As long as a full screen window is not iconified, the supported video mode most closely matching the desired video mode is set for the specified monitor. For more information about full screen windows, including the creation of so called *windowed full screen* or *borderless full screen* windows, see <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_windowed_full_screen" class="el">"Windowed full screen" windows</a>.

Once you have created the window, you can switch it between windowed and full screen mode with <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga81c76c418af80a1cce7055bccb0ae0a7" class="el">glfwSetWindowMonitor</a>. This will not affect its OpenGL or OpenGL ES context.

By default, newly created windows use the placement recommended by the window system. To create the window at a specific position, set the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_POSITION_X" class="el">GLFW_POSITION_X</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_POSITION_Y" class="el">GLFW_POSITION_Y</a> window hints before creation. To restore the default behavior, set either or both hints back to `GLFW_ANY_POSITION`.

As long as at least one full screen window is not iconified, the screensaver is prohibited from starting.

Window systems put limits on window sizes. Very large or very small window dimensions may be overridden by the window system on creation. Check the actual <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_size" class="el">size</a> after creation.

The <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#buffer_swap" class="el">swap interval</a> is not set during window creation and the initial value may vary depending on driver settings and defaults.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | width | The desired width, in screen coordinates, of the window. This must be greater than zero. |
| \[in\] | height | The desired height, in screen coordinates, of the window. This must be greater than zero. |
| \[in\] | title | The initial, UTF-8 encoded window title. |
| \[in\] | monitor | The monitor to use for full screen mode, or `NULL` for windowed mode. |
| \[in\] | share | The window whose context to share resources with, or `NULL` to not share resources. |

<!-- -->

Returns  
The handle of the created window, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad16c5565b4a69f9c2a9ac2c0dbc89462" class="el">GLFW_VERSION_UNAVAILABLE</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga196e125ef261d94184e2b55c05762f14" class="el">GLFW_FORMAT_UNAVAILABLE</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
**Win32:** Window creation will fail if the Microsoft GDI software OpenGL implementation is the only one available.

**Win32:** If the executable has an icon resource named `GLFW_ICON,` it will be set as the initial icon for the window. If no such icon is present, the `IDI_APPLICATION` icon will be used instead. To set a different icon, see <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gadd7ccd39fe7a7d1f0904666ae5932dc5" class="el">glfwSetWindowIcon</a>.

**Win32:** The context to share resources with must not be current on any other thread.

**macOS:** The OS only supports core profile contexts for OpenGL versions 3.2 and later. Before creating an OpenGL context of version 3.2 or later you must set the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_OPENGL_PROFILE_hint" class="el">GLFW_OPENGL_PROFILE</a> hint accordingly. OpenGL 3.0 and 3.1 contexts are not supported at all on macOS.

**macOS:** The GLFW window has no icon, as it is not a document window, but the dock icon will be the same as the application bundle's icon. For more information on bundles, see the [Bundle Programming Guide](https://developer.apple.com/library/mac/documentation/CoreFoundation/Conceptual/CFBundles/) in the Mac Developer Library.

**macOS:** The window frame will not be rendered at full resolution on Retina displays unless the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_SCALE_FRAMEBUFFER_hint" class="el">GLFW_SCALE_FRAMEBUFFER</a> hint is `GLFW_TRUE` and the `NSHighResolutionCapable` key is enabled in the application bundle's `Info.plist`. For more information, see [High Resolution Guidelines for OS X](https://developer.apple.com/library/mac/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Explained/Explained.html) in the Mac Developer Library. The GLFW test and example programs use a custom `Info.plist` template for this, which can be found as `CMake/Info.plist.in` in the source tree.

**macOS:** When activating frame autosaving with <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_COCOA_FRAME_NAME_hint" class="el">GLFW_COCOA_FRAME_NAME</a>, the specified window size and position may be overridden by previously saved values.

**Wayland:** GLFW uses [libdecor](https://gitlab.freedesktop.org/libdecor/libdecor) where available to create its window decorations. This in turn uses server-side XDG decorations where available and provides high quality client-side decorations on compositors like GNOME. If both XDG decorations and libdecor are unavailable, GLFW falls back to a very simple set of window decorations that only support moving, resizing and the window manager's right-click menu.

**X11:** Some window managers will not respect the placement of initially hidden windows.

**X11:** Due to the asynchronous nature of X11, it may take a moment for a window to reach its requested state. This means you may not be able to query the final size, position or other attributes directly after window creation.

**X11:** The class part of the `WM_CLASS` window property will by default be set to the window title passed to this function. The instance part will use the contents of the `RESOURCE_NAME` environment variable, if present and not empty, or fall back to the window title. Set the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_X11_CLASS_NAME_hint" class="el">GLFW_X11_CLASS_NAME</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_X11_INSTANCE_NAME_hint" class="el">GLFW_X11_INSTANCE_NAME</a> window hints to override this.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_creation" class="el">Window creation</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2" class="el">glfwDestroyWindow</a>

<!-- -->

Since  
Added in version 3.0. Replaces `glfwOpenWindow`.

</div>

</div>

<span id="gacdf43e51376051d2c091662e9fe3d7b2"></span>

## <span class="permalink">[◆ ](#gacdf43e51376051d2c091662e9fe3d7b2)</span>glfwDestroyWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwDestroyWindow | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

This function destroys the specified window and its context. On calling this function, no further callbacks will be called for that window.

If the context of the specified window is current on the main thread, it is detached before being destroyed.

Parameters  
|        |        |                        |
|--------|--------|------------------------|
| \[in\] | window | The window to destroy. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Note  
The context of the specified window must not be current on any other thread when this function is called.

<!-- -->

Reentrancy  
This function must not be called from a callback.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_creation" class="el">Window creation</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb" class="el">glfwCreateWindow</a>

<!-- -->

Since  
Added in version 3.0. Replaces `glfwCloseWindow`.

</div>

</div>

<span id="ga24e02fbfefbb81fc45320989f8140ab5"></span>

## <span class="permalink">[◆ ](#ga24e02fbfefbb81fc45320989f8140ab5)</span>glfwWindowShouldClose()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| int glfwWindowShouldClose | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

This function returns the value of the close flag of the specified window.

Parameters  
|        |        |                      |
|--------|--------|----------------------|
| \[in\] | window | The window to query. |

<!-- -->

Returns  
The value of the close flag.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_close" class="el">Window closing and close flag</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga49c449dde2a6f87d996f4daaa09d6708"></span>

## <span class="permalink">[◆ ](#ga49c449dde2a6f87d996f4daaa09d6708)</span>glfwSetWindowShouldClose()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowShouldClose | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *value*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the value of the close flag of the specified window. This can be used to override the user's attempt to close the window, or to signal that it should be closed.

Parameters  
|        |        |                                  |
|--------|--------|----------------------------------|
| \[in\] | window | The window whose flag to change. |
| \[in\] | value  | The new value.                   |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_close" class="el">Window closing and close flag</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gac6151765c54b789c4fe66c6bc6215953"></span>

## <span class="permalink">[◆ ](#gac6151765c54b789c4fe66c6bc6215953)</span>glfwGetWindowTitle()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| const char \* glfwGetWindowTitle | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

This function returns the window title, encoded as UTF-8, of the specified window. This is the title set previously by <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb" class="el">glfwCreateWindow</a> or <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga5d877f09e968cef7a360b513306f17ff" class="el">glfwSetWindowTitle</a>.

Parameters  
|        |        |                      |
|--------|--------|----------------------|
| \[in\] | window | The window to query. |

<!-- -->

Returns  
The UTF-8 encoded window title, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Remarks  
The returned title is currently a copy of the title last set by <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb" class="el">glfwCreateWindow</a> or <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga5d877f09e968cef7a360b513306f17ff" class="el">glfwSetWindowTitle</a>. It does not include any additional text which may be appended by the platform or another program.

<!-- -->

Pointer lifetime  
The returned string is allocated and freed by GLFW. You should not free it yourself. It is valid until the next call to <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gac6151765c54b789c4fe66c6bc6215953" class="el">glfwGetWindowTitle</a> or <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga5d877f09e968cef7a360b513306f17ff" class="el">glfwSetWindowTitle</a>, or until the library is terminated.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_title" class="el">Window title</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga5d877f09e968cef7a360b513306f17ff" class="el">glfwSetWindowTitle</a>

<!-- -->

Since  
Added in version 3.4.

</div>

</div>

<span id="ga5d877f09e968cef7a360b513306f17ff"></span>

## <span class="permalink">[◆ ](#ga5d877f09e968cef7a360b513306f17ff)</span>glfwSetWindowTitle()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowTitle | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | const char \*  | *title*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the window title, encoded as UTF-8, of the specified window.

Parameters  
|        |        |                                   |
|--------|--------|-----------------------------------|
| \[in\] | window | The window whose title to change. |
| \[in\] | title  | The UTF-8 encoded window title.   |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
**macOS:** The window title will not be updated until the next time you process events.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_title" class="el">Window title</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gac6151765c54b789c4fe66c6bc6215953" class="el">glfwGetWindowTitle</a>

<!-- -->

Since  
Added in version 1.0. **GLFW 3:** Added window handle parameter.

</div>

</div>

<span id="gadd7ccd39fe7a7d1f0904666ae5932dc5"></span>

## <span class="permalink">[◆ ](#gadd7ccd39fe7a7d1f0904666ae5932dc5)</span>glfwSetWindowIcon()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowIcon | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *count*, |
|  |  | const <a href="/docs/glfw/v3-5-1/en/04-reference/20-glfwimage/" class="el">GLFWimage</a> \*  | *images*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the icon of the specified window. If passed an array of candidate images, those of or closest to the sizes desired by the system are selected. If no images are specified, the window reverts to its default icon.

The pixels are 32-bit, little-endian, non-premultiplied RGBA, i.e. eight bits per channel with the red channel first. They are arranged canonically as packed sequential rows, starting from the top-left corner.

The desired image sizes varies depending on platform and system settings. The selected images will be rescaled as needed. Good sizes include 16x16, 32x32 and 48x48.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose icon to set. |
| \[in\] | count | The number of images in the specified array, or zero to revert to the default window icon. |
| \[in\] | images | The images to create the icon from. This is ignored if count is zero. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> (see remarks).

<!-- -->

Pointer lifetime  
The specified image data is copied before this function returns.

<!-- -->

Remarks  
**macOS:** Regular windows do not have icons on macOS. This function will emit <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>. The dock icon will be the same as the application bundle's icon. For more information on bundles, see the [Bundle Programming Guide](https://developer.apple.com/library/mac/documentation/CoreFoundation/Conceptual/CFBundles/) in the Mac Developer Library.

**Wayland:** There is no existing protocol to change an icon, the window will thus inherit the one defined in the application's desktop file. This function will emit <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_icon" class="el">Window icon</a>

<!-- -->

Since  
Added in version 3.2.

</div>

</div>

<span id="ga73cb526c000876fd8ddf571570fdb634"></span>

## <span class="permalink">[◆ ](#ga73cb526c000876fd8ddf571570fdb634)</span>glfwGetWindowPos()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetWindowPos | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int \*  | *xpos*, |
|  |  | int \*  | *ypos*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function retrieves the position, in screen coordinates, of the upper-left corner of the content area of the specified window.

Any or all of the position arguments may be `NULL`. If an error occurs, all non-`NULL` position arguments will be set to zero.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window to query. |
| \[out\] | xpos | Where to store the x-coordinate of the upper-left corner of the content area, or `NULL`. |
| \[out\] | ypos | Where to store the y-coordinate of the upper-left corner of the content area, or `NULL`. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> (see remarks).

<!-- -->

Remarks  
**Wayland:** Window positions are not currently part of any common Wayland protocol, so this function cannot be implemented and will emit <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_pos" class="el">Window position</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga1abb6d690e8c88e0c8cd1751356dbca8" class="el">glfwSetWindowPos</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga1abb6d690e8c88e0c8cd1751356dbca8"></span>

## <span class="permalink">[◆ ](#ga1abb6d690e8c88e0c8cd1751356dbca8)</span>glfwSetWindowPos()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowPos | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *xpos*, |
|  |  | int  | *ypos*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the position, in screen coordinates, of the upper-left corner of the content area of the specified windowed mode window. If the window is a full screen window, this function does nothing.

**Do not use this function** to move an already visible window unless you have very good reasons for doing so, as it will confuse and annoy the user.

The window manager may put limits on what positions are allowed. GLFW cannot and should not override these limits.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window to query. |
| \[in\] | xpos | The x-coordinate of the upper-left corner of the content area. |
| \[in\] | ypos | The y-coordinate of the upper-left corner of the content area. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> (see remarks).

<!-- -->

Remarks  
**Wayland:** Window positions are not currently part of any common Wayland protocol, so this function cannot be implemented and will emit <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_pos" class="el">Window position</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga73cb526c000876fd8ddf571570fdb634" class="el">glfwGetWindowPos</a>

<!-- -->

Since  
Added in version 1.0. **GLFW 3:** Added window handle parameter.

</div>

</div>

<span id="gaeea7cbc03373a41fb51cfbf9f2a5d4c6"></span>

## <span class="permalink">[◆ ](#gaeea7cbc03373a41fb51cfbf9f2a5d4c6)</span>glfwGetWindowSize()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetWindowSize | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int \*  | *width*, |
|  |  | int \*  | *height*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function retrieves the size, in screen coordinates, of the content area of the specified window. If you wish to retrieve the size of the framebuffer of the window in pixels, see <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga0e2637a4161afb283f5300c7f94785c9" class="el">glfwGetFramebufferSize</a>.

Any or all of the size arguments may be `NULL`. If an error occurs, all non-`NULL` size arguments will be set to zero.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose size to retrieve. |
| \[out\] | width | Where to store the width, in screen coordinates, of the content area, or `NULL`. |
| \[out\] | height | Where to store the height, in screen coordinates, of the content area, or `NULL`. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_size" class="el">Window size</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga371911f12c74c504dd8d47d832d095cb" class="el">glfwSetWindowSize</a>

<!-- -->

Since  
Added in version 1.0. **GLFW 3:** Added window handle parameter.

</div>

</div>

<span id="gac314fa6cec7d2d307be9963e2709cc90"></span>

## <span class="permalink">[◆ ](#gac314fa6cec7d2d307be9963e2709cc90)</span>glfwSetWindowSizeLimits()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowSizeLimits | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *minwidth*, |
|  |  | int  | *minheight*, |
|  |  | int  | *maxwidth*, |
|  |  | int  | *maxheight*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the size limits of the content area of the specified window. If the window is full screen, the size limits only take effect once it is made windowed. If the window is not resizable, this function does nothing.

The size limits are applied immediately to a windowed mode window and may cause it to be resized.

The maximum dimensions must be greater than or equal to the minimum dimensions and all must be greater than or equal to zero.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window to set limits for. |
| \[in\] | minwidth | The minimum width, in screen coordinates, of the content area, or `GLFW_DONT_CARE`. |
| \[in\] | minheight | The minimum height, in screen coordinates, of the content area, or `GLFW_DONT_CARE`. |
| \[in\] | maxwidth | The maximum width, in screen coordinates, of the content area, or `GLFW_DONT_CARE`. |
| \[in\] | maxheight | The maximum height, in screen coordinates, of the content area, or `GLFW_DONT_CARE`. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
If you set size limits and an aspect ratio that conflict, the results are undefined.

**Wayland:** The size limits will not be applied until the window is actually resized, either by the user or by the compositor.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_sizelimits" class="el">Window size limits</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga72ac8cb1ee2e312a878b55153d81b937" class="el">glfwSetWindowAspectRatio</a>

<!-- -->

Since  
Added in version 3.2.

</div>

</div>

<span id="ga72ac8cb1ee2e312a878b55153d81b937"></span>

## <span class="permalink">[◆ ](#ga72ac8cb1ee2e312a878b55153d81b937)</span>glfwSetWindowAspectRatio()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowAspectRatio | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *numer*, |
|  |  | int  | *denom*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the required aspect ratio of the content area of the specified window. If the window is full screen, the aspect ratio only takes effect once it is made windowed. If the window is not resizable, this function does nothing.

The aspect ratio is specified as a numerator and a denominator and both values must be greater than zero. For example, the common 16:9 aspect ratio is specified as 16 and 9, respectively.

If the numerator and denominator is set to `GLFW_DONT_CARE` then the aspect ratio limit is disabled.

The aspect ratio is applied immediately to a windowed mode window and may cause it to be resized.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window to set limits for. |
| \[in\] | numer | The numerator of the desired aspect ratio, or `GLFW_DONT_CARE`. |
| \[in\] | denom | The denominator of the desired aspect ratio, or `GLFW_DONT_CARE`. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
If you set size limits and an aspect ratio that conflict, the results are undefined.

**Wayland:** The aspect ratio will not be applied until the window is actually resized, either by the user or by the compositor.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_sizelimits" class="el">Window size limits</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gac314fa6cec7d2d307be9963e2709cc90" class="el">glfwSetWindowSizeLimits</a>

<!-- -->

Since  
Added in version 3.2.

</div>

</div>

<span id="ga371911f12c74c504dd8d47d832d095cb"></span>

## <span class="permalink">[◆ ](#ga371911f12c74c504dd8d47d832d095cb)</span>glfwSetWindowSize()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowSize | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *width*, |
|  |  | int  | *height*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the size, in screen coordinates, of the content area of the specified window.

For full screen windows, this function updates the resolution of its desired video mode and switches to the video mode closest to it, without affecting the window's context. As the context is unaffected, the bit depths of the framebuffer remain unchanged.

If you wish to update the refresh rate of the desired video mode in addition to its resolution, see <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga81c76c418af80a1cce7055bccb0ae0a7" class="el">glfwSetWindowMonitor</a>.

The window manager may put limits on what sizes are allowed. GLFW cannot and should not override these limits.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window to resize. |
| \[in\] | width | The desired width, in screen coordinates, of the window content area. |
| \[in\] | height | The desired height, in screen coordinates, of the window content area. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_size" class="el">Window size</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaeea7cbc03373a41fb51cfbf9f2a5d4c6" class="el">glfwGetWindowSize</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga81c76c418af80a1cce7055bccb0ae0a7" class="el">glfwSetWindowMonitor</a>

<!-- -->

Since  
Added in version 1.0. **GLFW 3:** Added window handle parameter.

</div>

</div>

<span id="ga0e2637a4161afb283f5300c7f94785c9"></span>

## <span class="permalink">[◆ ](#ga0e2637a4161afb283f5300c7f94785c9)</span>glfwGetFramebufferSize()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetFramebufferSize | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int \*  | *width*, |
|  |  | int \*  | *height*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function retrieves the size, in pixels, of the framebuffer of the specified window. If you wish to retrieve the size of the window in screen coordinates, see <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaeea7cbc03373a41fb51cfbf9f2a5d4c6" class="el">glfwGetWindowSize</a>.

Any or all of the size arguments may be `NULL`. If an error occurs, all non-`NULL` size arguments will be set to zero.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose framebuffer to query. |
| \[out\] | width | Where to store the width, in pixels, of the framebuffer, or `NULL`. |
| \[out\] | height | Where to store the height, in pixels, of the framebuffer, or `NULL`. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_fbsize" class="el">Framebuffer size</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gab3fb7c3366577daef18c0023e2a8591f" class="el">glfwSetFramebufferSizeCallback</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga1a9fd382058c53101b21cf211898f1f1"></span>

## <span class="permalink">[◆ ](#ga1a9fd382058c53101b21cf211898f1f1)</span>glfwGetWindowFrameSize()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetWindowFrameSize | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int \*  | *left*, |
|  |  | int \*  | *top*, |
|  |  | int \*  | *right*, |
|  |  | int \*  | *bottom*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function retrieves the size, in screen coordinates, of each edge of the frame of the specified window. This size includes the title bar, if the window has one. The size of the frame may vary depending on the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_hints_wnd" class="el">window-related hints</a> used to create it.

Because this function retrieves the size of each window frame edge and not the offset along a particular coordinate axis, the retrieved values will always be zero or positive.

Any or all of the size arguments may be `NULL`. If an error occurs, all non-`NULL` size arguments will be set to zero.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose frame size to query. |
| \[out\] | left | Where to store the size, in screen coordinates, of the left edge of the window frame, or `NULL`. |
| \[out\] | top | Where to store the size, in screen coordinates, of the top edge of the window frame, or `NULL`. |
| \[out\] | right | Where to store the size, in screen coordinates, of the right edge of the window frame, or `NULL`. |
| \[out\] | bottom | Where to store the size, in screen coordinates, of the bottom edge of the window frame, or `NULL`. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_size" class="el">Window size</a>

<!-- -->

Since  
Added in version 3.1.

</div>

</div>

<span id="gaf5d31de9c19c4f994facea64d2b3106c"></span>

## <span class="permalink">[◆ ](#gaf5d31de9c19c4f994facea64d2b3106c)</span>glfwGetWindowContentScale()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetWindowContentScale | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | float \*  | *xscale*, |
|  |  | float \*  | *yscale*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function retrieves the content scale for the specified window. The content scale is the ratio between the current DPI and the platform's default DPI. This is especially important for text and any UI elements. If the pixel dimensions of your UI scaled by this look appropriate on your machine then it should appear at a reasonable size on other machines regardless of their DPI and scaling settings. This relies on the system DPI and scaling settings being somewhat correct.

On platforms where each monitors can have its own content scale, the window content scale will depend on which monitor the system considers the window to be on.

Parameters  
|         |        |                                                     |
|---------|--------|-----------------------------------------------------|
| \[in\]  | window | The window to query.                                |
| \[out\] | xscale | Where to store the x-axis content scale, or `NULL`. |
| \[out\] | yscale | Where to store the y-axis content scale, or `NULL`. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_scale" class="el">Window content scale</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaf2832ebb5aa6c252a2d261de002c92d6" class="el">glfwSetWindowContentScaleCallback</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gad3152e84465fa620b601265ebfcdb21b" class="el">glfwGetMonitorContentScale</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="gad09f0bd7a6307c4533b7061828480a84"></span>

## <span class="permalink">[◆ ](#gad09f0bd7a6307c4533b7061828480a84)</span>glfwGetWindowOpacity()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| float glfwGetWindowOpacity | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

This function returns the opacity of the window, including any decorations.

The opacity (or alpha) value is a positive finite number between zero and one, where zero is fully transparent and one is fully opaque. If the system does not support whole window transparency, this function always returns one.

The initial opacity value for newly created windows is one.

Parameters  
|        |        |                      |
|--------|--------|----------------------|
| \[in\] | window | The window to query. |

<!-- -->

Returns  
The opacity value of the specified window.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_transparency" class="el">Window transparency</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gac31caeb3d1088831b13d2c8a156802e9" class="el">glfwSetWindowOpacity</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="gac31caeb3d1088831b13d2c8a156802e9"></span>

## <span class="permalink">[◆ ](#gac31caeb3d1088831b13d2c8a156802e9)</span>glfwSetWindowOpacity()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowOpacity | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | float  | *opacity*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the opacity of the window, including any decorations.

The opacity (or alpha) value is a positive finite number between zero and one, where zero is fully transparent and one is fully opaque.

The initial opacity value for newly created windows is one.

A window created with framebuffer transparency may not use whole window transparency. The results of doing this are undefined.

Parameters  
|        |         |                                              |
|--------|---------|----------------------------------------------|
| \[in\] | window  | The window to set the opacity for.           |
| \[in\] | opacity | The desired opacity of the specified window. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> (see remarks).

<!-- -->

Remarks  
**Wayland:** There is no way to set an opacity factor for a window. This function will emit <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_transparency" class="el">Window transparency</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gad09f0bd7a6307c4533b7061828480a84" class="el">glfwGetWindowOpacity</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="ga1bb559c0ebaad63c5c05ad2a066779c4"></span>

## <span class="permalink">[◆ ](#ga1bb559c0ebaad63c5c05ad2a066779c4)</span>glfwIconifyWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwIconifyWindow | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

This function iconifies (minimizes) the specified window if it was previously restored. If the window is already iconified, this function does nothing.

If the specified window is a full screen window, GLFW restores the original video mode of the monitor. The window's desired video mode is set again when the window is restored.

Parameters  
|        |        |                        |
|--------|--------|------------------------|
| \[in\] | window | The window to iconify. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_iconify" class="el">Window iconification</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga52527a5904b47d802b6b4bb519cdebc7" class="el">glfwRestoreWindow</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3f541387449d911274324ae7f17ec56b" class="el">glfwMaximizeWindow</a>

<!-- -->

Since  
Added in version 2.1. **GLFW 3:** Added window handle parameter.

</div>

</div>

<span id="ga52527a5904b47d802b6b4bb519cdebc7"></span>

## <span class="permalink">[◆ ](#ga52527a5904b47d802b6b4bb519cdebc7)</span>glfwRestoreWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwRestoreWindow | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

This function restores the specified window if it was previously iconified (minimized) or maximized. If the window is already restored, this function does nothing.

If the specified window is an iconified full screen window, its desired video mode is set again for its monitor when the window is restored.

Parameters  
|        |        |                        |
|--------|--------|------------------------|
| \[in\] | window | The window to restore. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
**Wayland:** Restoring a window from maximization is not currently part of any common Wayland protocol, so this function can only restore windows from maximization.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_iconify" class="el">Window iconification</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga1bb559c0ebaad63c5c05ad2a066779c4" class="el">glfwIconifyWindow</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3f541387449d911274324ae7f17ec56b" class="el">glfwMaximizeWindow</a>

<!-- -->

Since  
Added in version 2.1. **GLFW 3:** Added window handle parameter.

</div>

</div>

<span id="ga3f541387449d911274324ae7f17ec56b"></span>

## <span class="permalink">[◆ ](#ga3f541387449d911274324ae7f17ec56b)</span>glfwMaximizeWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwMaximizeWindow | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

This function maximizes the specified window if it was previously not maximized. If the window is already maximized, this function does nothing.

If the specified window is a full screen window, this function does nothing.

Parameters  
|        |        |                         |
|--------|--------|-------------------------|
| \[in\] | window | The window to maximize. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread Safety  
This function may only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_iconify" class="el">Window iconification</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga1bb559c0ebaad63c5c05ad2a066779c4" class="el">glfwIconifyWindow</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga52527a5904b47d802b6b4bb519cdebc7" class="el">glfwRestoreWindow</a>

<!-- -->

Since  
Added in GLFW 3.2.

</div>

</div>

<span id="ga61be47917b72536a148300f46494fc66"></span>

## <span class="permalink">[◆ ](#ga61be47917b72536a148300f46494fc66)</span>glfwShowWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwShowWindow | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

This function makes the specified window visible if it was previously hidden. If the window is already visible or is in full screen mode, this function does nothing.

By default, windowed mode windows are focused when shown Set the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_FOCUS_ON_SHOW_hint" class="el">GLFW_FOCUS_ON_SHOW</a> window hint to change this behavior for all newly created windows, or change the behavior for an existing window with <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gace2afda29b4116ec012e410a6819033e" class="el">glfwSetWindowAttrib</a>.

Parameters  
|        |        |                             |
|--------|--------|-----------------------------|
| \[in\] | window | The window to make visible. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
**Wayland:** Because Wayland wants every frame of the desktop to be complete, this function does not immediately make the window visible. Instead it will become visible the next time the window framebuffer is updated after this call.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_hide" class="el">Window visibility</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga49401f82a1ba5f15db5590728314d47c" class="el">glfwHideWindow</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga49401f82a1ba5f15db5590728314d47c"></span>

## <span class="permalink">[◆ ](#ga49401f82a1ba5f15db5590728314d47c)</span>glfwHideWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwHideWindow | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

This function hides the specified window if it was previously visible. If the window is already hidden or is in full screen mode, this function does nothing.

Parameters  
|        |        |                     |
|--------|--------|---------------------|
| \[in\] | window | The window to hide. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_hide" class="el">Window visibility</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga61be47917b72536a148300f46494fc66" class="el">glfwShowWindow</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga873780357abd3f3a081d71a40aae45a1"></span>

## <span class="permalink">[◆ ](#ga873780357abd3f3a081d71a40aae45a1)</span>glfwFocusWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwFocusWindow | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

This function brings the specified window to front and sets input focus. The window should already be visible and not iconified.

By default, both windowed and full screen mode windows are focused when initially created. Set the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_FOCUSED_hint" class="el">GLFW_FOCUSED</a> to disable this behavior.

Also by default, windowed mode windows are focused when shown with <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga61be47917b72536a148300f46494fc66" class="el">glfwShowWindow</a>. Set the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_FOCUS_ON_SHOW_hint" class="el">GLFW_FOCUS_ON_SHOW</a> to disable this behavior.

**Do not use this function** to steal focus from other applications unless you are certain that is what the user wants. Focus stealing can be extremely disruptive.

For a less disruptive way of getting the user's attention, see <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_attention" class="el">attention requests</a>.

Parameters  
|        |        |                                 |
|--------|--------|---------------------------------|
| \[in\] | window | The window to give input focus. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
**Wayland:** The compositor will likely ignore focus requests unless another window created by the same application already has input focus.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_focus" class="el">Window input focus</a>

<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_attention" class="el">Window attention request</a>

<!-- -->

Since  
Added in version 3.2.

</div>

</div>

<span id="ga2f8d59323fc4692c1d54ba08c863a703"></span>

## <span class="permalink">[◆ ](#ga2f8d59323fc4692c1d54ba08c863a703)</span>glfwRequestWindowAttention()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwRequestWindowAttention | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

This function requests user attention to the specified window. On platforms where this is not supported, attention is requested to the application as a whole.

Once the user has given attention, usually by focusing the window or application, the system will end the request automatically.

Parameters  
|        |        |                                     |
|--------|--------|-------------------------------------|
| \[in\] | window | The window to request attention to. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
**macOS:** Attention is requested to the application as a whole, not the specific window.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_attention" class="el">Window attention request</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="ga4d766499ac02c60f02221a9dfab87299"></span>

## <span class="permalink">[◆ ](#ga4d766499ac02c60f02221a9dfab87299)</span>glfwGetWindowMonitor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \* glfwGetWindowMonitor | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

This function returns the handle of the monitor that the specified window is in full screen on.

Parameters  
|        |        |                      |
|--------|--------|----------------------|
| \[in\] | window | The window to query. |

<!-- -->

Returns  
The monitor, or `NULL` if the window is in windowed mode or an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_monitor" class="el">Window monitor</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga81c76c418af80a1cce7055bccb0ae0a7" class="el">glfwSetWindowMonitor</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga81c76c418af80a1cce7055bccb0ae0a7"></span>

## <span class="permalink">[◆ ](#ga81c76c418af80a1cce7055bccb0ae0a7)</span>glfwSetWindowMonitor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowMonitor | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | int  | *xpos*, |
|  |  | int  | *ypos*, |
|  |  | int  | *width*, |
|  |  | int  | *height*, |
|  |  | int  | *refreshRate*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the monitor that the window uses for full screen mode or, if the monitor is `NULL`, makes it windowed mode.

When setting a monitor, this function updates the width, height and refresh rate of the desired video mode and switches to the video mode closest to it. The window position is ignored when setting a monitor.

When the monitor is `NULL`, the position, width and height are used to place the window content area. The refresh rate is ignored when no monitor is specified.

If you only wish to update the resolution of a full screen window or the size of a windowed mode window, see <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga371911f12c74c504dd8d47d832d095cb" class="el">glfwSetWindowSize</a>.

When a window transitions from full screen to windowed mode, this function restores any previous window settings such as whether it is decorated, floating, resizable, has size or aspect ratio limits, etc.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose monitor, size or video mode to set. |
| \[in\] | monitor | The desired monitor, or `NULL` to set windowed mode. |
| \[in\] | xpos | The desired x-coordinate of the upper-left corner of the content area. |
| \[in\] | ypos | The desired y-coordinate of the upper-left corner of the content area. |
| \[in\] | width | The desired with, in screen coordinates, of the content area or video mode. |
| \[in\] | height | The desired height, in screen coordinates, of the content area or video mode. |
| \[in\] | refreshRate | The desired refresh rate, in Hz, of the video mode, or `GLFW_DONT_CARE`. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
The OpenGL or OpenGL ES context will not be destroyed or otherwise affected by any resizing or mode switching, although you may need to update your viewport if the framebuffer size has changed.

**Wayland:** Window positions are not currently part of any common Wayland protocol. The window position arguments are ignored.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_monitor" class="el">Window monitor</a>

<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_full_screen" class="el">Full screen windows</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga4d766499ac02c60f02221a9dfab87299" class="el">glfwGetWindowMonitor</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga371911f12c74c504dd8d47d832d095cb" class="el">glfwSetWindowSize</a>

<!-- -->

Since  
Added in version 3.2.

</div>

</div>

<span id="gacccb29947ea4b16860ebef42c2cb9337"></span>

## <span class="permalink">[◆ ](#gacccb29947ea4b16860ebef42c2cb9337)</span>glfwGetWindowAttrib()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetWindowAttrib | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *attrib*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function returns the value of an attribute of the specified window or its OpenGL or OpenGL ES context.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window to query. |
| \[in\] | attrib | The <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_attribs" class="el">window attribute</a> whose value to return. |

<!-- -->

Returns  
The value of the attribute, or zero if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
Framebuffer related hints are not window attributes. See <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_attribs_fb" class="el">Framebuffer related attributes</a> for more information.

Zero is a valid value for many window and context related attributes so you cannot use a return value of zero as an indication of errors. However, this function should not fail as long as it is passed valid arguments and the library has been <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">initialized</a>.

**Wayland:** Checking whether a window is iconified is not currently part of any common Wayland protocol, so the <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga39d44b7c056e55e581355a92d240b58a" class="el">GLFW_ICONIFIED</a> attribute cannot be implemented and is always `GLFW_FALSE`.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_attribs" class="el">Window attributes</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gace2afda29b4116ec012e410a6819033e" class="el">glfwSetWindowAttrib</a>

<!-- -->

Since  
Added in version 3.0. Replaces `glfwGetWindowParam` and `glfwGetGLVersion`.

</div>

</div>

<span id="gace2afda29b4116ec012e410a6819033e"></span>

## <span class="permalink">[◆ ](#gace2afda29b4116ec012e410a6819033e)</span>glfwSetWindowAttrib()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowAttrib | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *attrib*, |
|  |  | int  | *value*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the value of an attribute of the specified window.

The supported attributes are <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_DECORATED_attrib" class="el">GLFW_DECORATED</a>, <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_RESIZABLE_attrib" class="el">GLFW_RESIZABLE</a>, <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_FLOATING_attrib" class="el">GLFW_FLOATING</a>, <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_AUTO_ICONIFY_attrib" class="el">GLFW_AUTO_ICONIFY</a> and <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_FOCUS_ON_SHOW_attrib" class="el">GLFW_FOCUS_ON_SHOW</a>. <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_MOUSE_PASSTHROUGH_attrib" class="el">GLFW_MOUSE_PASSTHROUGH</a>

Some of these attributes are ignored for full screen windows. The new value will take effect if the window is later made windowed.

Some of these attributes are ignored for windowed mode windows. The new value will take effect if the window is later made full screen.

Parameters  
|        |        |                                      |
|--------|--------|--------------------------------------|
| \[in\] | window | The window to set the attribute for. |
| \[in\] | attrib | A supported window attribute.        |
| \[in\] | value  | `GLFW_TRUE` or `GLFW_FALSE`.         |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> (see remarks).

<!-- -->

Remarks  
Calling <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337" class="el">glfwGetWindowAttrib</a> will always return the latest value, even if that value is ignored by the current mode of the window.

**Wayland:** The <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_FLOATING_attrib" class="el">GLFW_FLOATING</a> window attribute is not supported. Setting this will emit <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_attribs" class="el">Window attributes</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337" class="el">glfwGetWindowAttrib</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="ga3d2fc6026e690ab31a13f78bc9fd3651"></span>

## <span class="permalink">[◆ ](#ga3d2fc6026e690ab31a13f78bc9fd3651)</span>glfwSetWindowUserPointer()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowUserPointer | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | void \*  | *pointer*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the user-defined pointer of the specified window. The current value is retained until the window is destroyed. The initial value is `NULL`.

Parameters  
|        |         |                                  |
|--------|---------|----------------------------------|
| \[in\] | window  | The window whose pointer to set. |
| \[in\] | pointer | The new value.                   |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_userptr" class="el">User pointer</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gae77a4add0d2023ca21ff1443ced01653" class="el">glfwGetWindowUserPointer</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gae77a4add0d2023ca21ff1443ced01653"></span>

## <span class="permalink">[◆ ](#gae77a4add0d2023ca21ff1443ced01653)</span>glfwGetWindowUserPointer()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void \* glfwGetWindowUserPointer | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

This function returns the current value of the user-defined pointer of the specified window. The initial value is `NULL`.

Parameters  
|        |        |                                     |
|--------|--------|-------------------------------------|
| \[in\] | window | The window whose pointer to return. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_userptr" class="el">User pointer</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3d2fc6026e690ab31a13f78bc9fd3651" class="el">glfwSetWindowUserPointer</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga08bdfbba88934f9c4f92fd757979ac74"></span>

## <span class="permalink">[◆ ](#ga08bdfbba88934f9c4f92fd757979ac74)</span>glfwSetWindowPosCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabe287973a21a8f927cde4db06b8dcbe9" class="el">GLFWwindowposfun</a> glfwSetWindowPosCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabe287973a21a8f927cde4db06b8dcbe9" class="el">GLFWwindowposfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the position callback of the specified window, which is called when the window is moved. The callback is provided with the position, in screen coordinates, of the upper-left corner of the content area of the window.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose callback to set. |
| \[in\] | callback | The new callback, or `NULL` to remove the currently set callback. |

<!-- -->

Returns  
The previously set callback, or `NULL` if no callback was set or the library had not been <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">initialized</a>.

<!-- -->

Callback signature  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> xpos, <span class="keywordtype">int</span> ypos)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabe287973a21a8f927cde4db06b8dcbe9" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Remarks  
**Wayland:** This callback will not be called. The Wayland protocol provides no way to be notified of when a window is moved.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_pos" class="el">Window position</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gad91b8b047a0c4c6033c38853864c34f8"></span>

## <span class="permalink">[◆ ](#gad91b8b047a0c4c6033c38853864c34f8)</span>glfwSetWindowSizeCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaec0282944bb810f6f3163ec02da90350" class="el">GLFWwindowsizefun</a> glfwSetWindowSizeCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaec0282944bb810f6f3163ec02da90350" class="el">GLFWwindowsizefun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the size callback of the specified window, which is called when the window is resized. The callback is provided with the size, in screen coordinates, of the content area of the window.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose callback to set. |
| \[in\] | callback | The new callback, or `NULL` to remove the currently set callback. |

<!-- -->

Returns  
The previously set callback, or `NULL` if no callback was set or the library had not been <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">initialized</a>.

<!-- -->

Callback signature  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> width, <span class="keywordtype">int</span> height)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaec0282944bb810f6f3163ec02da90350" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_size" class="el">Window size</a>

<!-- -->

Since  
Added in version 1.0. **GLFW 3:** Added window handle parameter and return value.

</div>

</div>

<span id="gada646d775a7776a95ac000cfc1885331"></span>

## <span class="permalink">[◆ ](#gada646d775a7776a95ac000cfc1885331)</span>glfwSetWindowCloseCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabf859b936d80961b7d39013a9694cc3e" class="el">GLFWwindowclosefun</a> glfwSetWindowCloseCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabf859b936d80961b7d39013a9694cc3e" class="el">GLFWwindowclosefun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the close callback of the specified window, which is called when the user attempts to close the window, for example by clicking the close widget in the title bar.

The close flag is set before this callback is called, but you can modify it at any time with <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga49c449dde2a6f87d996f4daaa09d6708" class="el">glfwSetWindowShouldClose</a>.

The close callback is not triggered by <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2" class="el">glfwDestroyWindow</a>.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose callback to set. |
| \[in\] | callback | The new callback, or `NULL` to remove the currently set callback. |

<!-- -->

Returns  
The previously set callback, or `NULL` if no callback was set or the library had not been <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">initialized</a>.

<!-- -->

Callback signature  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabf859b936d80961b7d39013a9694cc3e" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Remarks  
**macOS:** Selecting Quit from the application menu will trigger the close callback for all windows.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_close" class="el">Window closing and close flag</a>

<!-- -->

Since  
Added in version 2.5. **GLFW 3:** Added window handle parameter and return value.

</div>

</div>

<span id="ga1c5c7eb889c33c7f4d10dd35b327654e"></span>

## <span class="permalink">[◆ ](#ga1c5c7eb889c33c7f4d10dd35b327654e)</span>glfwSetWindowRefreshCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga431663a1427d2eb3a273bc398b6737b5" class="el">GLFWwindowrefreshfun</a> glfwSetWindowRefreshCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga431663a1427d2eb3a273bc398b6737b5" class="el">GLFWwindowrefreshfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the refresh callback of the specified window, which is called when the content area of the window needs to be redrawn, for example if the window has been exposed after having been covered by another window.

On compositing window systems such as Aero, Compiz, Aqua or Wayland, where the window contents are saved off-screen, this callback may be called only very infrequently or never at all.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose callback to set. |
| \[in\] | callback | The new callback, or `NULL` to remove the currently set callback. |

<!-- -->

Returns  
The previously set callback, or `NULL` if no callback was set or the library had not been <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">initialized</a>.

<!-- -->

Callback signature  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window);

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga431663a1427d2eb3a273bc398b6737b5" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_refresh" class="el">Window damage and refresh</a>

<!-- -->

Since  
Added in version 2.5. **GLFW 3:** Added window handle parameter and return value.

</div>

</div>

<span id="gac2d83c4a10f071baf841f6730528e66c"></span>

## <span class="permalink">[◆ ](#gac2d83c4a10f071baf841f6730528e66c)</span>glfwSetWindowFocusCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabc58c47e9d93f6eb1862d615c3680f46" class="el">GLFWwindowfocusfun</a> glfwSetWindowFocusCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabc58c47e9d93f6eb1862d615c3680f46" class="el">GLFWwindowfocusfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the focus callback of the specified window, which is called when the window gains or loses input focus.

After the focus callback is called for a window that lost input focus, synthetic key and mouse button release events will be generated for all such that had been pressed. For more information, see <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga1caf18159767e761185e49a3be019f8d" class="el">glfwSetKeyCallback</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga6ab84420974d812bee700e45284a723c" class="el">glfwSetMouseButtonCallback</a>.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose callback to set. |
| \[in\] | callback | The new callback, or `NULL` to remove the currently set callback. |

<!-- -->

Returns  
The previously set callback, or `NULL` if no callback was set or the library had not been <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">initialized</a>.

<!-- -->

Callback signature  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> focused)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gabc58c47e9d93f6eb1862d615c3680f46" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_focus" class="el">Window input focus</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gac793e9efd255567b5fb8b445052cfd3e"></span>

## <span class="permalink">[◆ ](#gac793e9efd255567b5fb8b445052cfd3e)</span>glfwSetWindowIconifyCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga35c658cccba236f26e7adee0e25f6a4f" class="el">GLFWwindowiconifyfun</a> glfwSetWindowIconifyCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga35c658cccba236f26e7adee0e25f6a4f" class="el">GLFWwindowiconifyfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the iconification callback of the specified window, which is called when the window is iconified or restored.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose callback to set. |
| \[in\] | callback | The new callback, or `NULL` to remove the currently set callback. |

<!-- -->

Returns  
The previously set callback, or `NULL` if no callback was set or the library had not been <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">initialized</a>.

<!-- -->

Callback signature  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> iconified)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga35c658cccba236f26e7adee0e25f6a4f" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Remarks  
**Wayland:** This callback will not be called. The Wayland protocol provides no way to be notified of when a window is iconified, and no way to check whether a window is currently iconified.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_iconify" class="el">Window iconification</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gacbe64c339fbd94885e62145563b6dc93"></span>

## <span class="permalink">[◆ ](#gacbe64c339fbd94885e62145563b6dc93)</span>glfwSetWindowMaximizeCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3017196fdaec33ac3e095765176c2a90" class="el">GLFWwindowmaximizefun</a> glfwSetWindowMaximizeCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3017196fdaec33ac3e095765176c2a90" class="el">GLFWwindowmaximizefun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the maximization callback of the specified window, which is called when the window is maximized or restored.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose callback to set. |
| \[in\] | callback | The new callback, or `NULL` to remove the currently set callback. |

<!-- -->

Returns  
The previously set callback, or `NULL` if no callback was set or the library had not been <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">initialized</a>.

<!-- -->

Callback signature  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> maximized)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3017196fdaec33ac3e095765176c2a90" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_maximize" class="el">Window maximization</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="gab3fb7c3366577daef18c0023e2a8591f"></span>

## <span class="permalink">[◆ ](#gab3fb7c3366577daef18c0023e2a8591f)</span>glfwSetFramebufferSizeCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gae18026e294dde685ed2e5f759533144d" class="el">GLFWframebuffersizefun</a> glfwSetFramebufferSizeCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gae18026e294dde685ed2e5f759533144d" class="el">GLFWframebuffersizefun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the framebuffer resize callback of the specified window, which is called when the framebuffer of the specified window is resized.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose callback to set. |
| \[in\] | callback | The new callback, or `NULL` to remove the currently set callback. |

<!-- -->

Returns  
The previously set callback, or `NULL` if no callback was set or the library had not been <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">initialized</a>.

<!-- -->

Callback signature  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> width, <span class="keywordtype">int</span> height)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gae18026e294dde685ed2e5f759533144d" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_fbsize" class="el">Framebuffer size</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gaf2832ebb5aa6c252a2d261de002c92d6"></span>

## <span class="permalink">[◆ ](#gaf2832ebb5aa6c252a2d261de002c92d6)</span>glfwSetWindowContentScaleCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga77f288a2d04bb3c77c7d9615d08cf70e" class="el">GLFWwindowcontentscalefun</a> glfwSetWindowContentScaleCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga77f288a2d04bb3c77c7d9615d08cf70e" class="el">GLFWwindowcontentscalefun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the window content scale callback of the specified window, which is called when the content scale of the specified window changes.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose callback to set. |
| \[in\] | callback | The new callback, or `NULL` to remove the currently set callback. |

<!-- -->

Returns  
The previously set callback, or `NULL` if no callback was set or the library had not been <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">initialized</a>.

<!-- -->

Callback signature  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">float</span> xscale, <span class="keywordtype">float</span> yscale)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga77f288a2d04bb3c77c7d9615d08cf70e" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_scale" class="el">Window content scale</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaf5d31de9c19c4f994facea64d2b3106c" class="el">glfwGetWindowContentScale</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="ga37bd57223967b4211d60ca1a0bf3c832"></span>

## <span class="permalink">[◆ ](#ga37bd57223967b4211d60ca1a0bf3c832)</span>glfwPollEvents()

<div class="memitem">

<div class="memproto">

|                     |     |       |     |     |     |
|---------------------|-----|-------|-----|-----|-----|
| void glfwPollEvents | (   | void  |     | )   |     |

</div>

<div class="memdoc">

This function processes only those events that are already in the event queue and then returns immediately. Processing events will cause the window and input callbacks associated with those events to be called.

On some platforms, a window move, resize or menu operation will cause event processing to block. This is due to how event processing is designed on those platforms. You can use the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_refresh" class="el">window refresh callback</a> to redraw the contents of your window when necessary during such operations.

Do not assume that callbacks you set will *only* be called in response to event processing functions like this one. While it is necessary to poll for events, window systems that require GLFW to register callbacks of its own can pass events to GLFW in response to many window system function calls. GLFW will pass those events on to the application callbacks before returning.

Event processing is not required to receive joystick input. Joystick state is polled when a joystick input or gamepad input function is called.

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Reentrancy  
This function must not be called from a callback.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#events" class="el">Event processing</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga554e37d781f0a997656c26b2c56c835e" class="el">glfwWaitEvents</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga605a178db92f1a7f1a925563ef3ea2cf" class="el">glfwWaitEventsTimeout</a>

<!-- -->

Since  
Added in version 1.0.

</div>

</div>

<span id="ga554e37d781f0a997656c26b2c56c835e"></span>

## <span class="permalink">[◆ ](#ga554e37d781f0a997656c26b2c56c835e)</span>glfwWaitEvents()

<div class="memitem">

<div class="memproto">

|                     |     |       |     |     |     |
|---------------------|-----|-------|-----|-----|-----|
| void glfwWaitEvents | (   | void  |     | )   |     |

</div>

<div class="memdoc">

This function puts the calling thread to sleep until at least one event is available in the event queue. Once one or more events are available, it behaves exactly like <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga37bd57223967b4211d60ca1a0bf3c832" class="el">glfwPollEvents</a>, i.e. the events in the queue are processed and the function then returns immediately. Processing events will cause the window and input callbacks associated with those events to be called.

Since not all events are associated with callbacks, this function may return without a callback having been called even if you are monitoring all callbacks.

On some platforms, a window move, resize or menu operation will cause event processing to block. This is due to how event processing is designed on those platforms. You can use the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_refresh" class="el">window refresh callback</a> to redraw the contents of your window when necessary during such operations.

Do not assume that callbacks you set will *only* be called in response to event processing functions like this one. While it is necessary to poll for events, window systems that require GLFW to register callbacks of its own can pass events to GLFW in response to many window system function calls. GLFW will pass those events on to the application callbacks before returning.

Event processing is not required to receive joystick input. Joystick state is polled when a joystick input or gamepad input function is called.

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Reentrancy  
This function must not be called from a callback.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#events" class="el">Event processing</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga37bd57223967b4211d60ca1a0bf3c832" class="el">glfwPollEvents</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga605a178db92f1a7f1a925563ef3ea2cf" class="el">glfwWaitEventsTimeout</a>

<!-- -->

Since  
Added in version 2.5.

</div>

</div>

<span id="ga605a178db92f1a7f1a925563ef3ea2cf"></span>

## <span class="permalink">[◆ ](#ga605a178db92f1a7f1a925563ef3ea2cf)</span>glfwWaitEventsTimeout()

<div class="memitem">

<div class="memproto">

|                            |     |         |           |     |     |
|----------------------------|-----|---------|-----------|-----|-----|
| void glfwWaitEventsTimeout | (   | double  | *timeout* | )   |     |

</div>

<div class="memdoc">

This function puts the calling thread to sleep until at least one event is available in the event queue, or until the specified timeout is reached. If one or more events are available, it behaves exactly like <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga37bd57223967b4211d60ca1a0bf3c832" class="el">glfwPollEvents</a>, i.e. the events in the queue are processed and the function then returns immediately. Processing events will cause the window and input callbacks associated with those events to be called.

The timeout value must be a positive finite number.

Since not all events are associated with callbacks, this function may return without a callback having been called even if you are monitoring all callbacks.

On some platforms, a window move, resize or menu operation will cause event processing to block. This is due to how event processing is designed on those platforms. You can use the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_refresh" class="el">window refresh callback</a> to redraw the contents of your window when necessary during such operations.

Do not assume that callbacks you set will *only* be called in response to event processing functions like this one. While it is necessary to poll for events, window systems that require GLFW to register callbacks of its own can pass events to GLFW in response to many window system function calls. GLFW will pass those events on to the application callbacks before returning.

Event processing is not required to receive joystick input. Joystick state is polled when a joystick input or gamepad input function is called.

Parameters  
|        |         |                                                  |
|--------|---------|--------------------------------------------------|
| \[in\] | timeout | The maximum amount of time, in seconds, to wait. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Reentrancy  
This function must not be called from a callback.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#events" class="el">Event processing</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga37bd57223967b4211d60ca1a0bf3c832" class="el">glfwPollEvents</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga554e37d781f0a997656c26b2c56c835e" class="el">glfwWaitEvents</a>

<!-- -->

Since  
Added in version 3.2.

</div>

</div>

<span id="gab5997a25187e9fd5c6f2ecbbc8dfd7e9"></span>

## <span class="permalink">[◆ ](#gab5997a25187e9fd5c6f2ecbbc8dfd7e9)</span>glfwPostEmptyEvent()

<div class="memitem">

<div class="memproto">

|                         |     |       |     |     |     |
|-------------------------|-----|-------|-----|-----|-----|
| void glfwPostEmptyEvent | (   | void  |     | )   |     |

</div>

<div class="memdoc">

This function posts an empty event from the current thread to the event queue, causing <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga554e37d781f0a997656c26b2c56c835e" class="el">glfwWaitEvents</a> or <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga605a178db92f1a7f1a925563ef3ea2cf" class="el">glfwWaitEventsTimeout</a> to return.

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#events" class="el">Event processing</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga554e37d781f0a997656c26b2c56c835e" class="el">glfwWaitEvents</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga605a178db92f1a7f1a925563ef3ea2cf" class="el">glfwWaitEventsTimeout</a>

<!-- -->

Since  
Added in version 3.1.

</div>

</div>

<span id="ga15a5a1ee5b3c2ca6b15ca209a12efd14"></span>

## <span class="permalink">[◆ ](#ga15a5a1ee5b3c2ca6b15ca209a12efd14)</span>glfwSwapBuffers()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwSwapBuffers | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

This function swaps the front and back buffers of the specified window when rendering with OpenGL or OpenGL ES. If the swap interval is greater than zero, the GPU driver waits the specified number of screen updates before swapping the buffers.

The specified window must have an OpenGL or OpenGL ES context. Specifying a window without a context will generate a <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> error.

This function does not apply to Vulkan. If you are rendering with Vulkan, see `vkQueuePresentKHR` instead.

Parameters  
|        |        |                                   |
|--------|--------|-----------------------------------|
| \[in\] | window | The window whose buffers to swap. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
**Wayland:** When the swap interval is greater than zero and the window is not in view, this function may take a few extra milliseconds to return.

**EGL:** The context of the specified window must be current on the calling thread.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#buffer_swap" class="el">Buffer swapping</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#ga6d4e0cdf151b5e579bd67f13202994ed" class="el">glfwSwapInterval</a>

<!-- -->

Since  
Added in version 1.0. **GLFW 3:** Added window handle parameter.

</div>

</div>
