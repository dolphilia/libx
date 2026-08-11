---
title: "ウィンドウリファレンス"
description: "GLFW 3.5.1のウィンドウリファレンス"
licenseSource: "glfw-3.5.1"
---

> このリファレンスページは、[GLFW 3.5.1 公式ドキュメント](https://www.glfw.org/docs/3.5.1/)を改変して Markdown 化したものです。libx 向けに書式、ナビゲーション、リンクを変更していますが、技術的な内容は GLFW 3.5.1 のソース配布物に基づいています。

<span id="details"></span>

## 説明

これは、作成、削除、イベントのポーリングを含む、ウィンドウ関連の関数と型に関するリファレンスドキュメントです。作業手順を中心とした情報については、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/" class="el">ウィンドウガイド</a>を参照してください。

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="macros" class="groupheader"><span id="define-members"></span> マクロ</h2></td>
</tr>
<tr id="r_ga54ddb14825a1541a56e22afb5f832a9e" class="memitem:ga54ddb14825a1541a56e22afb5f832a9e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga54ddb14825a1541a56e22afb5f832a9e" class="el">GLFW_FOCUSED</a>   0x00020001</td>
</tr>
<tr class="memdesc:ga54ddb14825a1541a56e22afb5f832a9e">
<td class="mdescLeft"> </td>
<td class="mdescRight">入力フォーカスのウィンドウヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:ga54ddb14825a1541a56e22afb5f832a9e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga39d44b7c056e55e581355a92d240b58a" class="memitem:ga39d44b7c056e55e581355a92d240b58a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga39d44b7c056e55e581355a92d240b58a" class="el">GLFW_ICONIFIED</a>   0x00020002</td>
</tr>
<tr class="memdesc:ga39d44b7c056e55e581355a92d240b58a">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウのアイコン化に関するウィンドウ属性。<br />
</td>
</tr>
<tr class="separator:ga39d44b7c056e55e581355a92d240b58a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadba13c7a1b3aa40831eb2beedbd5bd1d" class="memitem:gadba13c7a1b3aa40831eb2beedbd5bd1d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gadba13c7a1b3aa40831eb2beedbd5bd1d" class="el">GLFW_RESIZABLE</a>   0x00020003</td>
</tr>
<tr class="memdesc:gadba13c7a1b3aa40831eb2beedbd5bd1d">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウのサイズ変更可否に関するウィンドウヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:gadba13c7a1b3aa40831eb2beedbd5bd1d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafb3cdc45297e06d8f1eb13adc69ca6c4" class="memitem:gafb3cdc45297e06d8f1eb13adc69ca6c4">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gafb3cdc45297e06d8f1eb13adc69ca6c4" class="el">GLFW_VISIBLE</a>   0x00020004</td>
</tr>
<tr class="memdesc:gafb3cdc45297e06d8f1eb13adc69ca6c4">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウの表示状態に関するウィンドウヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:gafb3cdc45297e06d8f1eb13adc69ca6c4">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga21b854d36314c94d65aed84405b2f25e" class="memitem:ga21b854d36314c94d65aed84405b2f25e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga21b854d36314c94d65aed84405b2f25e" class="el">GLFW_DECORATED</a>   0x00020005</td>
</tr>
<tr class="memdesc:ga21b854d36314c94d65aed84405b2f25e">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウ装飾に関するウィンドウヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:ga21b854d36314c94d65aed84405b2f25e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9d9874fc928200136a6dcdad726aa252" class="memitem:ga9d9874fc928200136a6dcdad726aa252">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga9d9874fc928200136a6dcdad726aa252" class="el">GLFW_AUTO_ICONIFY</a>   0x00020006</td>
</tr>
<tr class="memdesc:ga9d9874fc928200136a6dcdad726aa252">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウの自動アイコン化に関するウィンドウヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:ga9d9874fc928200136a6dcdad726aa252">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7fb0be51407783b41adbf5bec0b09d80" class="memitem:ga7fb0be51407783b41adbf5bec0b09d80">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga7fb0be51407783b41adbf5bec0b09d80" class="el">GLFW_FLOATING</a>   0x00020007</td>
</tr>
<tr class="memdesc:ga7fb0be51407783b41adbf5bec0b09d80">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウのフローティング状態に関するウィンドウヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:ga7fb0be51407783b41adbf5bec0b09d80">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad8ccb396253ad0b72c6d4c917eb38a03" class="memitem:gad8ccb396253ad0b72c6d4c917eb38a03">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gad8ccb396253ad0b72c6d4c917eb38a03" class="el">GLFW_MAXIMIZED</a>   0x00020008</td>
</tr>
<tr class="memdesc:gad8ccb396253ad0b72c6d4c917eb38a03">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウの最大化に関するウィンドウヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:gad8ccb396253ad0b72c6d4c917eb38a03">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5ac0847c0aa0b3619f2855707b8a7a77" class="memitem:ga5ac0847c0aa0b3619f2855707b8a7a77">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga5ac0847c0aa0b3619f2855707b8a7a77" class="el">GLFW_CENTER_CURSOR</a>   0x00020009</td>
</tr>
<tr class="memdesc:ga5ac0847c0aa0b3619f2855707b8a7a77">
<td class="mdescLeft"> </td>
<td class="mdescRight">カーソルの中央配置に関するウィンドウヒント。<br />
</td>
</tr>
<tr class="separator:ga5ac0847c0aa0b3619f2855707b8a7a77">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga60a0578c3b9449027d683a9c6abb9f14" class="memitem:ga60a0578c3b9449027d683a9c6abb9f14">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga60a0578c3b9449027d683a9c6abb9f14" class="el">GLFW_TRANSPARENT_FRAMEBUFFER</a>   0x0002000A</td>
</tr>
<tr class="memdesc:ga60a0578c3b9449027d683a9c6abb9f14">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウフレームバッファの透過性に関するヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:ga60a0578c3b9449027d683a9c6abb9f14">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8665c71c6fa3d22425c6a0e8a3f89d8a" class="memitem:ga8665c71c6fa3d22425c6a0e8a3f89d8a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga8665c71c6fa3d22425c6a0e8a3f89d8a" class="el">GLFW_HOVERED</a>   0x0002000B</td>
</tr>
<tr class="memdesc:ga8665c71c6fa3d22425c6a0e8a3f89d8a">
<td class="mdescLeft"> </td>
<td class="mdescRight">マウスカーソルのホバーに関するウィンドウ属性。<br />
</td>
</tr>
<tr class="separator:ga8665c71c6fa3d22425c6a0e8a3f89d8a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafa94b1da34bfd6488c0d709761504dfc" class="memitem:gafa94b1da34bfd6488c0d709761504dfc">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gafa94b1da34bfd6488c0d709761504dfc" class="el">GLFW_FOCUS_ON_SHOW</a>   0x0002000C</td>
</tr>
<tr class="memdesc:gafa94b1da34bfd6488c0d709761504dfc">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウ表示時の入力フォーカスに関するウィンドウヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:gafa94b1da34bfd6488c0d709761504dfc">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga88981797d29800808ec242274ab5c03a" class="memitem:ga88981797d29800808ec242274ab5c03a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga88981797d29800808ec242274ab5c03a" class="el">GLFW_MOUSE_PASSTHROUGH</a>   0x0002000D</td>
</tr>
<tr class="memdesc:ga88981797d29800808ec242274ab5c03a">
<td class="mdescLeft"> </td>
<td class="mdescRight">マウス入力の透過に関するウィンドウヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:ga88981797d29800808ec242274ab5c03a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaededa6b208b8e31343da56bb349c6fb2" class="memitem:gaededa6b208b8e31343da56bb349c6fb2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaededa6b208b8e31343da56bb349c6fb2" class="el">GLFW_POSITION_X</a>   0x0002000E</td>
</tr>
<tr class="memdesc:gaededa6b208b8e31343da56bb349c6fb2">
<td class="mdescLeft"> </td>
<td class="mdescRight">初期位置のx座標に関するウィンドウヒント。<br />
</td>
</tr>
<tr class="separator:gaededa6b208b8e31343da56bb349c6fb2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6b3ccf63683c81f479e2a98f5027200e" class="memitem:ga6b3ccf63683c81f479e2a98f5027200e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga6b3ccf63683c81f479e2a98f5027200e" class="el">GLFW_POSITION_Y</a>   0x0002000F</td>
</tr>
<tr class="memdesc:ga6b3ccf63683c81f479e2a98f5027200e">
<td class="mdescLeft"> </td>
<td class="mdescRight">初期位置のy座標に関するウィンドウヒント。<br />
</td>
</tr>
<tr class="separator:ga6b3ccf63683c81f479e2a98f5027200e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf78ed8e417dbcc1e354906cc2708c982" class="memitem:gaf78ed8e417dbcc1e354906cc2708c982">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaf78ed8e417dbcc1e354906cc2708c982" class="el">GLFW_RED_BITS</a>   0x00021001</td>
</tr>
<tr class="memdesc:gaf78ed8e417dbcc1e354906cc2708c982">
<td class="mdescLeft"> </td>
<td class="mdescRight">フレームバッファのビット深度に関するヒント。<br />
</td>
</tr>
<tr class="separator:gaf78ed8e417dbcc1e354906cc2708c982">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafba3b72638c914e5fb8a237dd4c50d4d" class="memitem:gafba3b72638c914e5fb8a237dd4c50d4d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gafba3b72638c914e5fb8a237dd4c50d4d" class="el">GLFW_GREEN_BITS</a>   0x00021002</td>
</tr>
<tr class="memdesc:gafba3b72638c914e5fb8a237dd4c50d4d">
<td class="mdescLeft"> </td>
<td class="mdescRight">フレームバッファのビット深度に関するヒント。<br />
</td>
</tr>
<tr class="separator:gafba3b72638c914e5fb8a237dd4c50d4d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab292ea403db6d514537b515311bf9ae3" class="memitem:gab292ea403db6d514537b515311bf9ae3">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gab292ea403db6d514537b515311bf9ae3" class="el">GLFW_BLUE_BITS</a>   0x00021003</td>
</tr>
<tr class="memdesc:gab292ea403db6d514537b515311bf9ae3">
<td class="mdescLeft"> </td>
<td class="mdescRight">フレームバッファのビット深度に関するヒント。<br />
</td>
</tr>
<tr class="separator:gab292ea403db6d514537b515311bf9ae3">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafed79a3f468997877da86c449bd43e8c" class="memitem:gafed79a3f468997877da86c449bd43e8c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gafed79a3f468997877da86c449bd43e8c" class="el">GLFW_ALPHA_BITS</a>   0x00021004</td>
</tr>
<tr class="memdesc:gafed79a3f468997877da86c449bd43e8c">
<td class="mdescLeft"> </td>
<td class="mdescRight">フレームバッファのビット深度に関するヒント。<br />
</td>
</tr>
<tr class="separator:gafed79a3f468997877da86c449bd43e8c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga318a55eac1fee57dfe593b6d38149d07" class="memitem:ga318a55eac1fee57dfe593b6d38149d07">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga318a55eac1fee57dfe593b6d38149d07" class="el">GLFW_DEPTH_BITS</a>   0x00021005</td>
</tr>
<tr class="memdesc:ga318a55eac1fee57dfe593b6d38149d07">
<td class="mdescLeft"> </td>
<td class="mdescRight">フレームバッファのビット深度に関するヒント。<br />
</td>
</tr>
<tr class="separator:ga318a55eac1fee57dfe593b6d38149d07">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5339890a45a1fb38e93cb9fcc5fd069d" class="memitem:ga5339890a45a1fb38e93cb9fcc5fd069d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga5339890a45a1fb38e93cb9fcc5fd069d" class="el">GLFW_STENCIL_BITS</a>   0x00021006</td>
</tr>
<tr class="memdesc:ga5339890a45a1fb38e93cb9fcc5fd069d">
<td class="mdescLeft"> </td>
<td class="mdescRight">フレームバッファのビット深度に関するヒント。<br />
</td>
</tr>
<tr class="separator:ga5339890a45a1fb38e93cb9fcc5fd069d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaead34a9a683b2bc20eecf30ba738bfc6" class="memitem:gaead34a9a683b2bc20eecf30ba738bfc6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaead34a9a683b2bc20eecf30ba738bfc6" class="el">GLFW_ACCUM_RED_BITS</a>   0x00021007</td>
</tr>
<tr class="memdesc:gaead34a9a683b2bc20eecf30ba738bfc6">
<td class="mdescLeft"> </td>
<td class="mdescRight">フレームバッファのビット深度に関するヒント。<br />
</td>
</tr>
<tr class="separator:gaead34a9a683b2bc20eecf30ba738bfc6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga65713cee1326f8e9d806fdf93187b471" class="memitem:ga65713cee1326f8e9d806fdf93187b471">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga65713cee1326f8e9d806fdf93187b471" class="el">GLFW_ACCUM_GREEN_BITS</a>   0x00021008</td>
</tr>
<tr class="memdesc:ga65713cee1326f8e9d806fdf93187b471">
<td class="mdescLeft"> </td>
<td class="mdescRight">フレームバッファのビット深度に関するヒント。<br />
</td>
</tr>
<tr class="separator:ga65713cee1326f8e9d806fdf93187b471">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga22bbe9104a8ce1f8b88fb4f186aa36ce" class="memitem:ga22bbe9104a8ce1f8b88fb4f186aa36ce">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga22bbe9104a8ce1f8b88fb4f186aa36ce" class="el">GLFW_ACCUM_BLUE_BITS</a>   0x00021009</td>
</tr>
<tr class="memdesc:ga22bbe9104a8ce1f8b88fb4f186aa36ce">
<td class="mdescLeft"> </td>
<td class="mdescRight">フレームバッファのビット深度に関するヒント。<br />
</td>
</tr>
<tr class="separator:ga22bbe9104a8ce1f8b88fb4f186aa36ce">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae829b55591c18169a40ab4067a041b1f" class="memitem:gae829b55591c18169a40ab4067a041b1f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gae829b55591c18169a40ab4067a041b1f" class="el">GLFW_ACCUM_ALPHA_BITS</a>   0x0002100A</td>
</tr>
<tr class="memdesc:gae829b55591c18169a40ab4067a041b1f">
<td class="mdescLeft"> </td>
<td class="mdescRight">フレームバッファのビット深度に関するヒント。<br />
</td>
</tr>
<tr class="separator:gae829b55591c18169a40ab4067a041b1f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab05108c5029443b371112b031d1fa174" class="memitem:gab05108c5029443b371112b031d1fa174">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gab05108c5029443b371112b031d1fa174" class="el">GLFW_AUX_BUFFERS</a>   0x0002100B</td>
</tr>
<tr class="memdesc:gab05108c5029443b371112b031d1fa174">
<td class="mdescLeft"> </td>
<td class="mdescRight">フレームバッファの補助バッファに関するヒント。<br />
</td>
</tr>
<tr class="separator:gab05108c5029443b371112b031d1fa174">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga83d991efca02537e2d69969135b77b03" class="memitem:ga83d991efca02537e2d69969135b77b03">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga83d991efca02537e2d69969135b77b03" class="el">GLFW_STEREO</a>   0x0002100C</td>
</tr>
<tr class="memdesc:ga83d991efca02537e2d69969135b77b03">
<td class="mdescLeft"> </td>
<td class="mdescRight">OpenGLのステレオレンダリングに関するヒント。<br />
</td>
</tr>
<tr class="separator:ga83d991efca02537e2d69969135b77b03">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga2cdf86fdcb7722fb8829c4e201607535" class="memitem:ga2cdf86fdcb7722fb8829c4e201607535">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga2cdf86fdcb7722fb8829c4e201607535" class="el">GLFW_SAMPLES</a>   0x0002100D</td>
</tr>
<tr class="memdesc:ga2cdf86fdcb7722fb8829c4e201607535">
<td class="mdescLeft"> </td>
<td class="mdescRight">フレームバッファのMSAAサンプル数に関するヒント。<br />
</td>
</tr>
<tr class="separator:ga2cdf86fdcb7722fb8829c4e201607535">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga444a8f00414a63220591f9fdb7b5642b" class="memitem:ga444a8f00414a63220591f9fdb7b5642b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga444a8f00414a63220591f9fdb7b5642b" class="el">GLFW_SRGB_CAPABLE</a>   0x0002100E</td>
</tr>
<tr class="memdesc:ga444a8f00414a63220591f9fdb7b5642b">
<td class="mdescLeft"> </td>
<td class="mdescRight">フレームバッファのsRGB対応に関するヒント。<br />
</td>
</tr>
<tr class="separator:ga444a8f00414a63220591f9fdb7b5642b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga0f20825e6e47ee8ba389024519682212" class="memitem:ga0f20825e6e47ee8ba389024519682212">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga0f20825e6e47ee8ba389024519682212" class="el">GLFW_REFRESH_RATE</a>   0x0002100F</td>
</tr>
<tr class="memdesc:ga0f20825e6e47ee8ba389024519682212">
<td class="mdescLeft"> </td>
<td class="mdescRight">モニターのリフレッシュレートに関するヒント。<br />
</td>
</tr>
<tr class="separator:ga0f20825e6e47ee8ba389024519682212">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga714a5d569e8a274ea58fdfa020955339" class="memitem:ga714a5d569e8a274ea58fdfa020955339">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga714a5d569e8a274ea58fdfa020955339" class="el">GLFW_DOUBLEBUFFER</a>   0x00021010</td>
</tr>
<tr class="memdesc:ga714a5d569e8a274ea58fdfa020955339">
<td class="mdescLeft"> </td>
<td class="mdescRight">フレームバッファのダブルバッファリングに関するヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:ga714a5d569e8a274ea58fdfa020955339">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga649309cf72a3d3de5b1348ca7936c95b" class="memitem:ga649309cf72a3d3de5b1348ca7936c95b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga649309cf72a3d3de5b1348ca7936c95b" class="el">GLFW_CLIENT_API</a>   0x00022001</td>
</tr>
<tr class="memdesc:ga649309cf72a3d3de5b1348ca7936c95b">
<td class="mdescLeft"> </td>
<td class="mdescRight">コンテキストのクライアントAPIに関するヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:ga649309cf72a3d3de5b1348ca7936c95b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafe5e4922de1f9932d7e9849bb053b0c0" class="memitem:gafe5e4922de1f9932d7e9849bb053b0c0">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gafe5e4922de1f9932d7e9849bb053b0c0" class="el">GLFW_CONTEXT_VERSION_MAJOR</a>   0x00022002</td>
</tr>
<tr class="memdesc:gafe5e4922de1f9932d7e9849bb053b0c0">
<td class="mdescLeft"> </td>
<td class="mdescRight">コンテキストのクライアントAPIのメジャーバージョンに関するヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:gafe5e4922de1f9932d7e9849bb053b0c0">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga31aca791e4b538c4e4a771eb95cc2d07" class="memitem:ga31aca791e4b538c4e4a771eb95cc2d07">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga31aca791e4b538c4e4a771eb95cc2d07" class="el">GLFW_CONTEXT_VERSION_MINOR</a>   0x00022003</td>
</tr>
<tr class="memdesc:ga31aca791e4b538c4e4a771eb95cc2d07">
<td class="mdescLeft"> </td>
<td class="mdescRight">コンテキストのクライアントAPIのマイナーバージョンに関するヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:ga31aca791e4b538c4e4a771eb95cc2d07">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafb9475071aa77c6fb05ca5a5c8678a08" class="memitem:gafb9475071aa77c6fb05ca5a5c8678a08">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gafb9475071aa77c6fb05ca5a5c8678a08" class="el">GLFW_CONTEXT_REVISION</a>   0x00022004</td>
</tr>
<tr class="memdesc:gafb9475071aa77c6fb05ca5a5c8678a08">
<td class="mdescLeft"> </td>
<td class="mdescRight">コンテキストのクライアントAPIのリビジョン番号に関する属性。<br />
</td>
</tr>
<tr class="separator:gafb9475071aa77c6fb05ca5a5c8678a08">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gade3593916b4c507900aa2d6844810e00" class="memitem:gade3593916b4c507900aa2d6844810e00">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gade3593916b4c507900aa2d6844810e00" class="el">GLFW_CONTEXT_ROBUSTNESS</a>   0x00022005</td>
</tr>
<tr class="memdesc:gade3593916b4c507900aa2d6844810e00">
<td class="mdescLeft"> </td>
<td class="mdescRight">コンテキストの堅牢性に関するヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:gade3593916b4c507900aa2d6844810e00">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga13d24b12465da8b28985f46c8557925b" class="memitem:ga13d24b12465da8b28985f46c8557925b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga13d24b12465da8b28985f46c8557925b" class="el">GLFW_OPENGL_FORWARD_COMPAT</a>   0x00022006</td>
</tr>
<tr class="memdesc:ga13d24b12465da8b28985f46c8557925b">
<td class="mdescLeft"> </td>
<td class="mdescRight">OpenGLの前方互換性に関するヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:ga13d24b12465da8b28985f46c8557925b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8d55e3afec73c7de0509c3b7ad1d9e3f" class="memitem:ga8d55e3afec73c7de0509c3b7ad1d9e3f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga8d55e3afec73c7de0509c3b7ad1d9e3f" class="el">GLFW_CONTEXT_DEBUG</a>   0x00022007</td>
</tr>
<tr class="memdesc:ga8d55e3afec73c7de0509c3b7ad1d9e3f">
<td class="mdescLeft"> </td>
<td class="mdescRight">デバッグモードのコンテキストヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:ga8d55e3afec73c7de0509c3b7ad1d9e3f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga87ec2df0b915201e950ca42d5d0831e1" class="memitem:ga87ec2df0b915201e950ca42d5d0831e1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga87ec2df0b915201e950ca42d5d0831e1" class="el">GLFW_OPENGL_DEBUG_CONTEXT</a>   <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga8d55e3afec73c7de0509c3b7ad1d9e3f" class="el">GLFW_CONTEXT_DEBUG</a></td>
</tr>
<tr class="memdesc:ga87ec2df0b915201e950ca42d5d0831e1">
<td class="mdescLeft"> </td>
<td class="mdescRight">互換性のための旧名称。<br />
</td>
</tr>
<tr class="separator:ga87ec2df0b915201e950ca42d5d0831e1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga44f3a6b4261fbe351e0b950b0f372e12" class="memitem:ga44f3a6b4261fbe351e0b950b0f372e12">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga44f3a6b4261fbe351e0b950b0f372e12" class="el">GLFW_OPENGL_PROFILE</a>   0x00022008</td>
</tr>
<tr class="memdesc:ga44f3a6b4261fbe351e0b950b0f372e12">
<td class="mdescLeft"> </td>
<td class="mdescRight">OpenGLプロファイルに関するヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:ga44f3a6b4261fbe351e0b950b0f372e12">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga72b648a8378fe3310c7c7bbecc0f7be6" class="memitem:ga72b648a8378fe3310c7c7bbecc0f7be6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga72b648a8378fe3310c7c7bbecc0f7be6" class="el">GLFW_CONTEXT_RELEASE_BEHAVIOR</a>   0x00022009</td>
</tr>
<tr class="memdesc:ga72b648a8378fe3310c7c7bbecc0f7be6">
<td class="mdescLeft"> </td>
<td class="mdescRight">コンテキスト解放時のフラッシュに関するヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:ga72b648a8378fe3310c7c7bbecc0f7be6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5a52fdfd46d8249c211f923675728082" class="memitem:ga5a52fdfd46d8249c211f923675728082">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga5a52fdfd46d8249c211f923675728082" class="el">GLFW_CONTEXT_NO_ERROR</a>   0x0002200A</td>
</tr>
<tr class="memdesc:ga5a52fdfd46d8249c211f923675728082">
<td class="mdescLeft"> </td>
<td class="mdescRight">コンテキストのエラー抑制に関するヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:ga5a52fdfd46d8249c211f923675728082">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5154cebfcd831c1cc63a4d5ac9bb4486" class="memitem:ga5154cebfcd831c1cc63a4d5ac9bb4486">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga5154cebfcd831c1cc63a4d5ac9bb4486" class="el">GLFW_CONTEXT_CREATION_API</a>   0x0002200B</td>
</tr>
<tr class="memdesc:ga5154cebfcd831c1cc63a4d5ac9bb4486">
<td class="mdescLeft"> </td>
<td class="mdescRight">コンテキスト作成APIに関するヒントおよび属性。<br />
</td>
</tr>
<tr class="separator:ga5154cebfcd831c1cc63a4d5ac9bb4486">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga620bc4280c7eab81ac9f02204500ed47" class="memitem:ga620bc4280c7eab81ac9f02204500ed47">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga620bc4280c7eab81ac9f02204500ed47" class="el">GLFW_SCALE_TO_MONITOR</a>   0x0002200C</td>
</tr>
<tr class="memdesc:ga620bc4280c7eab81ac9f02204500ed47">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウのコンテンツ領域のスケーリングに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_SCALE_TO_MONITOR" class="el">ウィンドウヒント</a>。<br />
</td>
</tr>
<tr class="separator:ga620bc4280c7eab81ac9f02204500ed47">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa5a9c6b4722670fd33d6e8a88f2e21bc" class="memitem:gaa5a9c6b4722670fd33d6e8a88f2e21bc">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaa5a9c6b4722670fd33d6e8a88f2e21bc" class="el">GLFW_SCALE_FRAMEBUFFER</a>   0x0002200D</td>
</tr>
<tr class="memdesc:gaa5a9c6b4722670fd33d6e8a88f2e21bc">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウフレームバッファのスケーリングに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_SCALE_FRAMEBUFFER_hint" class="el">ウィンドウヒント</a>。<br />
</td>
</tr>
<tr class="separator:gaa5a9c6b4722670fd33d6e8a88f2e21bc">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab6ef2d02eb55800d249ccf1af253c35e" class="memitem:gab6ef2d02eb55800d249ccf1af253c35e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gab6ef2d02eb55800d249ccf1af253c35e" class="el">GLFW_COCOA_RETINA_FRAMEBUFFER</a>   0x00023001</td>
</tr>
<tr class="memdesc:gab6ef2d02eb55800d249ccf1af253c35e">
<td class="mdescLeft"> </td>
<td class="mdescRight">互換性のための旧名称。<br />
</td>
</tr>
<tr class="separator:gab6ef2d02eb55800d249ccf1af253c35e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga70fa0fbc745de6aa824df79a580e84b5" class="memitem:ga70fa0fbc745de6aa824df79a580e84b5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga70fa0fbc745de6aa824df79a580e84b5" class="el">GLFW_COCOA_FRAME_NAME</a>   0x00023002</td>
</tr>
<tr class="memdesc:ga70fa0fbc745de6aa824df79a580e84b5">
<td class="mdescLeft"> </td>
<td class="mdescRight">macOS固有の<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_COCOA_FRAME_NAME_hint" class="el">ウィンドウヒント</a>。<br />
</td>
</tr>
<tr class="separator:ga70fa0fbc745de6aa824df79a580e84b5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga53c84ed2ddd94e15bbd44b1f6f7feafc" class="memitem:ga53c84ed2ddd94e15bbd44b1f6f7feafc">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga53c84ed2ddd94e15bbd44b1f6f7feafc" class="el">GLFW_COCOA_GRAPHICS_SWITCHING</a>   0x00023003</td>
</tr>
<tr class="memdesc:ga53c84ed2ddd94e15bbd44b1f6f7feafc">
<td class="mdescLeft"> </td>
<td class="mdescRight">macOS固有の<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_COCOA_GRAPHICS_SWITCHING_hint" class="el">ウィンドウヒント</a>。<br />
</td>
</tr>
<tr class="separator:ga53c84ed2ddd94e15bbd44b1f6f7feafc">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae5a9ea2fccccd92edbd343fc56461114" class="memitem:gae5a9ea2fccccd92edbd343fc56461114">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gae5a9ea2fccccd92edbd343fc56461114" class="el">GLFW_X11_CLASS_NAME</a>   0x00024001</td>
</tr>
<tr class="memdesc:gae5a9ea2fccccd92edbd343fc56461114">
<td class="mdescLeft"> </td>
<td class="mdescRight">X11固有の<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_X11_CLASS_NAME_hint" class="el">ウィンドウヒント</a>。<br />
</td>
</tr>
<tr class="separator:gae5a9ea2fccccd92edbd343fc56461114">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga494c3c0d911e4b860b946530a3e389e8" class="memitem:ga494c3c0d911e4b860b946530a3e389e8">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga494c3c0d911e4b860b946530a3e389e8" class="el">GLFW_X11_INSTANCE_NAME</a>   0x00024002</td>
</tr>
<tr class="memdesc:ga494c3c0d911e4b860b946530a3e389e8">
<td class="mdescLeft"> </td>
<td class="mdescRight">X11固有の<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_X11_CLASS_NAME_hint" class="el">ウィンドウヒント</a>。<br />
</td>
</tr>
<tr class="separator:ga494c3c0d911e4b860b946530a3e389e8">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf65ea8dafdc0edb07b821b9a336d5043" class="memitem:gaf65ea8dafdc0edb07b821b9a336d5043">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaf65ea8dafdc0edb07b821b9a336d5043" class="el">GLFW_WIN32_KEYBOARD_MENU</a>   0x00025001</td>
</tr>
<tr class="separator:gaf65ea8dafdc0edb07b821b9a336d5043">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gace10f3846571de62243b46f75d978487" class="memitem:gace10f3846571de62243b46f75d978487">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gace10f3846571de62243b46f75d978487" class="el">GLFW_WIN32_SHOWDEFAULT</a>   0x00025002</td>
</tr>
<tr class="memdesc:gace10f3846571de62243b46f75d978487">
<td class="mdescLeft"> </td>
<td class="mdescRight">Win32固有の<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_WIN32_SHOWDEFAULT_hint" class="el">ウィンドウヒント</a>。<br />
</td>
</tr>
<tr class="separator:gace10f3846571de62243b46f75d978487">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafbf1ce7a4362c75e602a4df9e1bdecd3" class="memitem:gafbf1ce7a4362c75e602a4df9e1bdecd3">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gafbf1ce7a4362c75e602a4df9e1bdecd3" class="el">GLFW_WAYLAND_APP_ID</a>   0x00026001</td>
</tr>
<tr class="memdesc:gafbf1ce7a4362c75e602a4df9e1bdecd3">
<td class="mdescLeft"> </td>
<td class="mdescRight">Wayland固有の<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_WAYLAND_APP_ID_hint" class="el">ウィンドウヒント</a>。<br />
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
<td colspan="2"><h2 id="typedefs" class="groupheader"><span id="typedef-members"></span> 型定義</h2></td>
</tr>
<tr id="r_ga3c96d80d363e67d13a41b5d1821f3242" class="memitem:ga3c96d80d363e67d13a41b5d1821f3242">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef struct <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a></td>
</tr>
<tr class="memdesc:ga3c96d80d363e67d13a41b5d1821f3242">
<td class="mdescLeft"> </td>
<td class="mdescRight">不透明なウィンドウオブジェクト。<br />
</td>
</tr>
<tr class="separator:ga3c96d80d363e67d13a41b5d1821f3242">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gabe287973a21a8f927cde4db06b8dcbe9" class="memitem:gabe287973a21a8f927cde4db06b8dcbe9">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabe287973a21a8f927cde4db06b8dcbe9" class="el">GLFWwindowposfun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int xpos, int ypos)</td>
</tr>
<tr class="memdesc:gabe287973a21a8f927cde4db06b8dcbe9">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウ位置コールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:gabe287973a21a8f927cde4db06b8dcbe9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaec0282944bb810f6f3163ec02da90350" class="memitem:gaec0282944bb810f6f3163ec02da90350">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaec0282944bb810f6f3163ec02da90350" class="el">GLFWwindowsizefun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int width, int height)</td>
</tr>
<tr class="memdesc:gaec0282944bb810f6f3163ec02da90350">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウサイズコールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:gaec0282944bb810f6f3163ec02da90350">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gabf859b936d80961b7d39013a9694cc3e" class="memitem:gabf859b936d80961b7d39013a9694cc3e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabf859b936d80961b7d39013a9694cc3e" class="el">GLFWwindowclosefun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:gabf859b936d80961b7d39013a9694cc3e">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウクローズコールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:gabf859b936d80961b7d39013a9694cc3e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga431663a1427d2eb3a273bc398b6737b5" class="memitem:ga431663a1427d2eb3a273bc398b6737b5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga431663a1427d2eb3a273bc398b6737b5" class="el">GLFWwindowrefreshfun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga431663a1427d2eb3a273bc398b6737b5">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウ内容の再描画コールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:ga431663a1427d2eb3a273bc398b6737b5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gabc58c47e9d93f6eb1862d615c3680f46" class="memitem:gabc58c47e9d93f6eb1862d615c3680f46">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabc58c47e9d93f6eb1862d615c3680f46" class="el">GLFWwindowfocusfun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int focused)</td>
</tr>
<tr class="memdesc:gabc58c47e9d93f6eb1862d615c3680f46">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウフォーカスコールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:gabc58c47e9d93f6eb1862d615c3680f46">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga35c658cccba236f26e7adee0e25f6a4f" class="memitem:ga35c658cccba236f26e7adee0e25f6a4f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga35c658cccba236f26e7adee0e25f6a4f" class="el">GLFWwindowiconifyfun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int iconified)</td>
</tr>
<tr class="memdesc:ga35c658cccba236f26e7adee0e25f6a4f">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウアイコン化コールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:ga35c658cccba236f26e7adee0e25f6a4f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3017196fdaec33ac3e095765176c2a90" class="memitem:ga3017196fdaec33ac3e095765176c2a90">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3017196fdaec33ac3e095765176c2a90" class="el">GLFWwindowmaximizefun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int maximized)</td>
</tr>
<tr class="memdesc:ga3017196fdaec33ac3e095765176c2a90">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウ最大化コールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:ga3017196fdaec33ac3e095765176c2a90">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae18026e294dde685ed2e5f759533144d" class="memitem:gae18026e294dde685ed2e5f759533144d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gae18026e294dde685ed2e5f759533144d" class="el">GLFWframebuffersizefun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int width, int height)</td>
</tr>
<tr class="memdesc:gae18026e294dde685ed2e5f759533144d">
<td class="mdescLeft"> </td>
<td class="mdescRight">フレームバッファサイズコールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:gae18026e294dde685ed2e5f759533144d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga77f288a2d04bb3c77c7d9615d08cf70e" class="memitem:ga77f288a2d04bb3c77c7d9615d08cf70e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga77f288a2d04bb3c77c7d9615d08cf70e" class="el">GLFWwindowcontentscalefun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, float xscale, float yscale)</td>
</tr>
<tr class="memdesc:ga77f288a2d04bb3c77c7d9615d08cf70e">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウのコンテンツスケールコールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:ga77f288a2d04bb3c77c7d9615d08cf70e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7cc0a09de172fa7250872046f8c4d2ca" class="memitem:ga7cc0a09de172fa7250872046f8c4d2ca">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef struct <a href="/docs/glfw/v3-5-1/ja/04-reference/20-glfwimage/" class="el">GLFWimage</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga7cc0a09de172fa7250872046f8c4d2ca" class="el">GLFWimage</a></td>
</tr>
<tr class="memdesc:ga7cc0a09de172fa7250872046f8c4d2ca">
<td class="mdescLeft"> </td>
<td class="mdescRight">画像データ。<br />
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
<td colspan="2"><h2 id="functions" class="groupheader"><span id="func-members"></span> 関数</h2></td>
</tr>
<tr id="r_gaa77c4898dfb83344a6b4f76aa16b9a4a" class="memitem:gaa77c4898dfb83344a6b4f76aa16b9a4a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaa77c4898dfb83344a6b4f76aa16b9a4a" class="el">glfwDefaultWindowHints</a> (void)</td>
</tr>
<tr class="memdesc:gaa77c4898dfb83344a6b4f76aa16b9a4a">
<td class="mdescLeft"> </td>
<td class="mdescRight">すべてのウィンドウヒントを既定値へ戻します。<br />
</td>
</tr>
<tr class="separator:gaa77c4898dfb83344a6b4f76aa16b9a4a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7d9c8c62384b1e2821c4dc48952d2033" class="memitem:ga7d9c8c62384b1e2821c4dc48952d2033">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga7d9c8c62384b1e2821c4dc48952d2033" class="el">glfwWindowHint</a> (int hint, int value)</td>
</tr>
<tr class="memdesc:ga7d9c8c62384b1e2821c4dc48952d2033">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウヒントを目的の値に設定します。<br />
</td>
</tr>
<tr class="separator:ga7d9c8c62384b1e2821c4dc48952d2033">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8cb2782861c9d997bcf2dea97f363e5f" class="memitem:ga8cb2782861c9d997bcf2dea97f363e5f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga8cb2782861c9d997bcf2dea97f363e5f" class="el">glfwWindowHintString</a> (int hint, const char *value)</td>
</tr>
<tr class="memdesc:ga8cb2782861c9d997bcf2dea97f363e5f">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウヒントを目的の値に設定します。<br />
</td>
</tr>
<tr class="separator:ga8cb2782861c9d997bcf2dea97f363e5f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3555a418df92ad53f917597fe2f64aeb" class="memitem:ga3555a418df92ad53f917597fe2f64aeb">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb" class="el">glfwCreateWindow</a> (int width, int height, const char *title, <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *share)</td>
</tr>
<tr class="memdesc:ga3555a418df92ad53f917597fe2f64aeb">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウとそれに関連付けられたコンテキストを作成します。<br />
</td>
</tr>
<tr class="separator:ga3555a418df92ad53f917597fe2f64aeb">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gacdf43e51376051d2c091662e9fe3d7b2" class="memitem:gacdf43e51376051d2c091662e9fe3d7b2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2" class="el">glfwDestroyWindow</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:gacdf43e51376051d2c091662e9fe3d7b2">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウとそのコンテキストを破棄します。<br />
</td>
</tr>
<tr class="separator:gacdf43e51376051d2c091662e9fe3d7b2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga24e02fbfefbb81fc45320989f8140ab5" class="memitem:ga24e02fbfefbb81fc45320989f8140ab5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga24e02fbfefbb81fc45320989f8140ab5" class="el">glfwWindowShouldClose</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga24e02fbfefbb81fc45320989f8140ab5">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのクローズフラグを確認します。<br />
</td>
</tr>
<tr class="separator:ga24e02fbfefbb81fc45320989f8140ab5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga49c449dde2a6f87d996f4daaa09d6708" class="memitem:ga49c449dde2a6f87d996f4daaa09d6708">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga49c449dde2a6f87d996f4daaa09d6708" class="el">glfwSetWindowShouldClose</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int value)</td>
</tr>
<tr class="memdesc:ga49c449dde2a6f87d996f4daaa09d6708">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのクローズフラグを設定します。<br />
</td>
</tr>
<tr class="separator:ga49c449dde2a6f87d996f4daaa09d6708">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac6151765c54b789c4fe66c6bc6215953" class="memitem:gac6151765c54b789c4fe66c6bc6215953">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gac6151765c54b789c4fe66c6bc6215953" class="el">glfwGetWindowTitle</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:gac6151765c54b789c4fe66c6bc6215953">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのタイトルを返します。<br />
</td>
</tr>
<tr class="separator:gac6151765c54b789c4fe66c6bc6215953">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5d877f09e968cef7a360b513306f17ff" class="memitem:ga5d877f09e968cef7a360b513306f17ff">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga5d877f09e968cef7a360b513306f17ff" class="el">glfwSetWindowTitle</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, const char *title)</td>
</tr>
<tr class="memdesc:ga5d877f09e968cef7a360b513306f17ff">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのタイトルを設定します。<br />
</td>
</tr>
<tr class="separator:ga5d877f09e968cef7a360b513306f17ff">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadd7ccd39fe7a7d1f0904666ae5932dc5" class="memitem:gadd7ccd39fe7a7d1f0904666ae5932dc5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gadd7ccd39fe7a7d1f0904666ae5932dc5" class="el">glfwSetWindowIcon</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int count, const <a href="/docs/glfw/v3-5-1/ja/04-reference/20-glfwimage/" class="el">GLFWimage</a> *images)</td>
</tr>
<tr class="memdesc:gadd7ccd39fe7a7d1f0904666ae5932dc5">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのアイコンを設定します。<br />
</td>
</tr>
<tr class="separator:gadd7ccd39fe7a7d1f0904666ae5932dc5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga73cb526c000876fd8ddf571570fdb634" class="memitem:ga73cb526c000876fd8ddf571570fdb634">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga73cb526c000876fd8ddf571570fdb634" class="el">glfwGetWindowPos</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int *xpos, int *ypos)</td>
</tr>
<tr class="memdesc:ga73cb526c000876fd8ddf571570fdb634">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのコンテンツ領域の位置を取得します。<br />
</td>
</tr>
<tr class="separator:ga73cb526c000876fd8ddf571570fdb634">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1abb6d690e8c88e0c8cd1751356dbca8" class="memitem:ga1abb6d690e8c88e0c8cd1751356dbca8">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga1abb6d690e8c88e0c8cd1751356dbca8" class="el">glfwSetWindowPos</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int xpos, int ypos)</td>
</tr>
<tr class="memdesc:ga1abb6d690e8c88e0c8cd1751356dbca8">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのコンテンツ領域の位置を設定します。<br />
</td>
</tr>
<tr class="separator:ga1abb6d690e8c88e0c8cd1751356dbca8">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaeea7cbc03373a41fb51cfbf9f2a5d4c6" class="memitem:gaeea7cbc03373a41fb51cfbf9f2a5d4c6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaeea7cbc03373a41fb51cfbf9f2a5d4c6" class="el">glfwGetWindowSize</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int *width, int *height)</td>
</tr>
<tr class="memdesc:gaeea7cbc03373a41fb51cfbf9f2a5d4c6">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのコンテンツ領域のサイズを取得します。<br />
</td>
</tr>
<tr class="separator:gaeea7cbc03373a41fb51cfbf9f2a5d4c6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac314fa6cec7d2d307be9963e2709cc90" class="memitem:gac314fa6cec7d2d307be9963e2709cc90">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gac314fa6cec7d2d307be9963e2709cc90" class="el">glfwSetWindowSizeLimits</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int minwidth, int minheight, int maxwidth, int maxheight)</td>
</tr>
<tr class="memdesc:gac314fa6cec7d2d307be9963e2709cc90">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのサイズ制限を設定します。<br />
</td>
</tr>
<tr class="separator:gac314fa6cec7d2d307be9963e2709cc90">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga72ac8cb1ee2e312a878b55153d81b937" class="memitem:ga72ac8cb1ee2e312a878b55153d81b937">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga72ac8cb1ee2e312a878b55153d81b937" class="el">glfwSetWindowAspectRatio</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int numer, int denom)</td>
</tr>
<tr class="memdesc:ga72ac8cb1ee2e312a878b55153d81b937">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのアスペクト比を設定します。<br />
</td>
</tr>
<tr class="separator:ga72ac8cb1ee2e312a878b55153d81b937">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga371911f12c74c504dd8d47d832d095cb" class="memitem:ga371911f12c74c504dd8d47d832d095cb">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga371911f12c74c504dd8d47d832d095cb" class="el">glfwSetWindowSize</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int width, int height)</td>
</tr>
<tr class="memdesc:ga371911f12c74c504dd8d47d832d095cb">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのコンテンツ領域のサイズを設定します。<br />
</td>
</tr>
<tr class="separator:ga371911f12c74c504dd8d47d832d095cb">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga0e2637a4161afb283f5300c7f94785c9" class="memitem:ga0e2637a4161afb283f5300c7f94785c9">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga0e2637a4161afb283f5300c7f94785c9" class="el">glfwGetFramebufferSize</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int *width, int *height)</td>
</tr>
<tr class="memdesc:ga0e2637a4161afb283f5300c7f94785c9">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのフレームバッファサイズを取得します。<br />
</td>
</tr>
<tr class="separator:ga0e2637a4161afb283f5300c7f94785c9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1a9fd382058c53101b21cf211898f1f1" class="memitem:ga1a9fd382058c53101b21cf211898f1f1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga1a9fd382058c53101b21cf211898f1f1" class="el">glfwGetWindowFrameSize</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int *left, int *top, int *right, int *bottom)</td>
</tr>
<tr class="memdesc:ga1a9fd382058c53101b21cf211898f1f1">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウフレームのサイズを取得します。<br />
</td>
</tr>
<tr class="separator:ga1a9fd382058c53101b21cf211898f1f1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf5d31de9c19c4f994facea64d2b3106c" class="memitem:gaf5d31de9c19c4f994facea64d2b3106c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaf5d31de9c19c4f994facea64d2b3106c" class="el">glfwGetWindowContentScale</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, float *xscale, float *yscale)</td>
</tr>
<tr class="memdesc:gaf5d31de9c19c4f994facea64d2b3106c">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのコンテンツスケールを取得します。<br />
</td>
</tr>
<tr class="separator:gaf5d31de9c19c4f994facea64d2b3106c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad09f0bd7a6307c4533b7061828480a84" class="memitem:gad09f0bd7a6307c4533b7061828480a84">
<td class="memItemLeft" style="text-align: right;" data-valign="top">float </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gad09f0bd7a6307c4533b7061828480a84" class="el">glfwGetWindowOpacity</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:gad09f0bd7a6307c4533b7061828480a84">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウ全体の不透明度を返します。<br />
</td>
</tr>
<tr class="separator:gad09f0bd7a6307c4533b7061828480a84">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac31caeb3d1088831b13d2c8a156802e9" class="memitem:gac31caeb3d1088831b13d2c8a156802e9">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gac31caeb3d1088831b13d2c8a156802e9" class="el">glfwSetWindowOpacity</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, float opacity)</td>
</tr>
<tr class="memdesc:gac31caeb3d1088831b13d2c8a156802e9">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウ全体の不透明度を設定します。<br />
</td>
</tr>
<tr class="separator:gac31caeb3d1088831b13d2c8a156802e9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1bb559c0ebaad63c5c05ad2a066779c4" class="memitem:ga1bb559c0ebaad63c5c05ad2a066779c4">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga1bb559c0ebaad63c5c05ad2a066779c4" class="el">glfwIconifyWindow</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga1bb559c0ebaad63c5c05ad2a066779c4">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウをアイコン化します。<br />
</td>
</tr>
<tr class="separator:ga1bb559c0ebaad63c5c05ad2a066779c4">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga52527a5904b47d802b6b4bb519cdebc7" class="memitem:ga52527a5904b47d802b6b4bb519cdebc7">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga52527a5904b47d802b6b4bb519cdebc7" class="el">glfwRestoreWindow</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga52527a5904b47d802b6b4bb519cdebc7">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウを復元します。<br />
</td>
</tr>
<tr class="separator:ga52527a5904b47d802b6b4bb519cdebc7">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3f541387449d911274324ae7f17ec56b" class="memitem:ga3f541387449d911274324ae7f17ec56b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3f541387449d911274324ae7f17ec56b" class="el">glfwMaximizeWindow</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga3f541387449d911274324ae7f17ec56b">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウを最大化します。<br />
</td>
</tr>
<tr class="separator:ga3f541387449d911274324ae7f17ec56b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga61be47917b72536a148300f46494fc66" class="memitem:ga61be47917b72536a148300f46494fc66">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga61be47917b72536a148300f46494fc66" class="el">glfwShowWindow</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga61be47917b72536a148300f46494fc66">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウを表示します。<br />
</td>
</tr>
<tr class="separator:ga61be47917b72536a148300f46494fc66">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga49401f82a1ba5f15db5590728314d47c" class="memitem:ga49401f82a1ba5f15db5590728314d47c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga49401f82a1ba5f15db5590728314d47c" class="el">glfwHideWindow</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga49401f82a1ba5f15db5590728314d47c">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウを非表示にします。<br />
</td>
</tr>
<tr class="separator:ga49401f82a1ba5f15db5590728314d47c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga873780357abd3f3a081d71a40aae45a1" class="memitem:ga873780357abd3f3a081d71a40aae45a1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga873780357abd3f3a081d71a40aae45a1" class="el">glfwFocusWindow</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga873780357abd3f3a081d71a40aae45a1">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウを前面へ移動し、入力フォーカスを設定します。<br />
</td>
</tr>
<tr class="separator:ga873780357abd3f3a081d71a40aae45a1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga2f8d59323fc4692c1d54ba08c863a703" class="memitem:ga2f8d59323fc4692c1d54ba08c863a703">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga2f8d59323fc4692c1d54ba08c863a703" class="el">glfwRequestWindowAttention</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga2f8d59323fc4692c1d54ba08c863a703">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウへユーザーの注意を引くよう要求します。<br />
</td>
</tr>
<tr class="separator:ga2f8d59323fc4692c1d54ba08c863a703">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga4d766499ac02c60f02221a9dfab87299" class="memitem:ga4d766499ac02c60f02221a9dfab87299">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga4d766499ac02c60f02221a9dfab87299" class="el">glfwGetWindowMonitor</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga4d766499ac02c60f02221a9dfab87299">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウがフルスクリーンモードで使用するモニターを返します。<br />
</td>
</tr>
<tr class="separator:ga4d766499ac02c60f02221a9dfab87299">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga81c76c418af80a1cce7055bccb0ae0a7" class="memitem:ga81c76c418af80a1cce7055bccb0ae0a7">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga81c76c418af80a1cce7055bccb0ae0a7" class="el">glfwSetWindowMonitor</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, int xpos, int ypos, int width, int height, int refreshRate)</td>
</tr>
<tr class="memdesc:ga81c76c418af80a1cce7055bccb0ae0a7">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウのモード、モニター、ビデオモード、配置を設定します。<br />
</td>
</tr>
<tr class="separator:ga81c76c418af80a1cce7055bccb0ae0a7">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gacccb29947ea4b16860ebef42c2cb9337" class="memitem:gacccb29947ea4b16860ebef42c2cb9337">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337" class="el">glfwGetWindowAttrib</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int attrib)</td>
</tr>
<tr class="memdesc:gacccb29947ea4b16860ebef42c2cb9337">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウの属性を返します。<br />
</td>
</tr>
<tr class="separator:gacccb29947ea4b16860ebef42c2cb9337">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gace2afda29b4116ec012e410a6819033e" class="memitem:gace2afda29b4116ec012e410a6819033e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gace2afda29b4116ec012e410a6819033e" class="el">glfwSetWindowAttrib</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int attrib, int value)</td>
</tr>
<tr class="memdesc:gace2afda29b4116ec012e410a6819033e">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウの属性を設定します。<br />
</td>
</tr>
<tr class="separator:gace2afda29b4116ec012e410a6819033e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3d2fc6026e690ab31a13f78bc9fd3651" class="memitem:ga3d2fc6026e690ab31a13f78bc9fd3651">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3d2fc6026e690ab31a13f78bc9fd3651" class="el">glfwSetWindowUserPointer</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, void *pointer)</td>
</tr>
<tr class="memdesc:ga3d2fc6026e690ab31a13f78bc9fd3651">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのユーザーポインターを設定します。<br />
</td>
</tr>
<tr class="separator:ga3d2fc6026e690ab31a13f78bc9fd3651">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae77a4add0d2023ca21ff1443ced01653" class="memitem:gae77a4add0d2023ca21ff1443ced01653">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gae77a4add0d2023ca21ff1443ced01653" class="el">glfwGetWindowUserPointer</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:gae77a4add0d2023ca21ff1443ced01653">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのユーザーポインターを返します。<br />
</td>
</tr>
<tr class="separator:gae77a4add0d2023ca21ff1443ced01653">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga08bdfbba88934f9c4f92fd757979ac74" class="memitem:ga08bdfbba88934f9c4f92fd757979ac74">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabe287973a21a8f927cde4db06b8dcbe9" class="el">GLFWwindowposfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga08bdfbba88934f9c4f92fd757979ac74" class="el">glfwSetWindowPosCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabe287973a21a8f927cde4db06b8dcbe9" class="el">GLFWwindowposfun</a> callback)</td>
</tr>
<tr class="memdesc:ga08bdfbba88934f9c4f92fd757979ac74">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウの位置コールバックを設定します。<br />
</td>
</tr>
<tr class="separator:ga08bdfbba88934f9c4f92fd757979ac74">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad91b8b047a0c4c6033c38853864c34f8" class="memitem:gad91b8b047a0c4c6033c38853864c34f8">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaec0282944bb810f6f3163ec02da90350" class="el">GLFWwindowsizefun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gad91b8b047a0c4c6033c38853864c34f8" class="el">glfwSetWindowSizeCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaec0282944bb810f6f3163ec02da90350" class="el">GLFWwindowsizefun</a> callback)</td>
</tr>
<tr class="memdesc:gad91b8b047a0c4c6033c38853864c34f8">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのサイズコールバックを設定します。<br />
</td>
</tr>
<tr class="separator:gad91b8b047a0c4c6033c38853864c34f8">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gada646d775a7776a95ac000cfc1885331" class="memitem:gada646d775a7776a95ac000cfc1885331">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabf859b936d80961b7d39013a9694cc3e" class="el">GLFWwindowclosefun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gada646d775a7776a95ac000cfc1885331" class="el">glfwSetWindowCloseCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabf859b936d80961b7d39013a9694cc3e" class="el">GLFWwindowclosefun</a> callback)</td>
</tr>
<tr class="memdesc:gada646d775a7776a95ac000cfc1885331">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのクローズコールバックを設定します。<br />
</td>
</tr>
<tr class="separator:gada646d775a7776a95ac000cfc1885331">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1c5c7eb889c33c7f4d10dd35b327654e" class="memitem:ga1c5c7eb889c33c7f4d10dd35b327654e">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga431663a1427d2eb3a273bc398b6737b5" class="el">GLFWwindowrefreshfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga1c5c7eb889c33c7f4d10dd35b327654e" class="el">glfwSetWindowRefreshCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga431663a1427d2eb3a273bc398b6737b5" class="el">GLFWwindowrefreshfun</a> callback)</td>
</tr>
<tr class="memdesc:ga1c5c7eb889c33c7f4d10dd35b327654e">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウの再描画コールバックを設定します。<br />
</td>
</tr>
<tr class="separator:ga1c5c7eb889c33c7f4d10dd35b327654e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac2d83c4a10f071baf841f6730528e66c" class="memitem:gac2d83c4a10f071baf841f6730528e66c">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabc58c47e9d93f6eb1862d615c3680f46" class="el">GLFWwindowfocusfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gac2d83c4a10f071baf841f6730528e66c" class="el">glfwSetWindowFocusCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabc58c47e9d93f6eb1862d615c3680f46" class="el">GLFWwindowfocusfun</a> callback)</td>
</tr>
<tr class="memdesc:gac2d83c4a10f071baf841f6730528e66c">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのフォーカスコールバックを設定します。<br />
</td>
</tr>
<tr class="separator:gac2d83c4a10f071baf841f6730528e66c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac793e9efd255567b5fb8b445052cfd3e" class="memitem:gac793e9efd255567b5fb8b445052cfd3e">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga35c658cccba236f26e7adee0e25f6a4f" class="el">GLFWwindowiconifyfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gac793e9efd255567b5fb8b445052cfd3e" class="el">glfwSetWindowIconifyCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga35c658cccba236f26e7adee0e25f6a4f" class="el">GLFWwindowiconifyfun</a> callback)</td>
</tr>
<tr class="memdesc:gac793e9efd255567b5fb8b445052cfd3e">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのアイコン化コールバックを設定します。<br />
</td>
</tr>
<tr class="separator:gac793e9efd255567b5fb8b445052cfd3e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gacbe64c339fbd94885e62145563b6dc93" class="memitem:gacbe64c339fbd94885e62145563b6dc93">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3017196fdaec33ac3e095765176c2a90" class="el">GLFWwindowmaximizefun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacbe64c339fbd94885e62145563b6dc93" class="el">glfwSetWindowMaximizeCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3017196fdaec33ac3e095765176c2a90" class="el">GLFWwindowmaximizefun</a> callback)</td>
</tr>
<tr class="memdesc:gacbe64c339fbd94885e62145563b6dc93">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウの最大化コールバックを設定します。<br />
</td>
</tr>
<tr class="separator:gacbe64c339fbd94885e62145563b6dc93">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab3fb7c3366577daef18c0023e2a8591f" class="memitem:gab3fb7c3366577daef18c0023e2a8591f">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gae18026e294dde685ed2e5f759533144d" class="el">GLFWframebuffersizefun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gab3fb7c3366577daef18c0023e2a8591f" class="el">glfwSetFramebufferSizeCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gae18026e294dde685ed2e5f759533144d" class="el">GLFWframebuffersizefun</a> callback)</td>
</tr>
<tr class="memdesc:gab3fb7c3366577daef18c0023e2a8591f">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのフレームバッファサイズ変更コールバックを設定します。<br />
</td>
</tr>
<tr class="separator:gab3fb7c3366577daef18c0023e2a8591f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf2832ebb5aa6c252a2d261de002c92d6" class="memitem:gaf2832ebb5aa6c252a2d261de002c92d6">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga77f288a2d04bb3c77c7d9615d08cf70e" class="el">GLFWwindowcontentscalefun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaf2832ebb5aa6c252a2d261de002c92d6" class="el">glfwSetWindowContentScaleCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga77f288a2d04bb3c77c7d9615d08cf70e" class="el">GLFWwindowcontentscalefun</a> callback)</td>
</tr>
<tr class="memdesc:gaf2832ebb5aa6c252a2d261de002c92d6">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのコンテンツスケールコールバックを設定します。<br />
</td>
</tr>
<tr class="separator:gaf2832ebb5aa6c252a2d261de002c92d6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga37bd57223967b4211d60ca1a0bf3c832" class="memitem:ga37bd57223967b4211d60ca1a0bf3c832">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga37bd57223967b4211d60ca1a0bf3c832" class="el">glfwPollEvents</a> (void)</td>
</tr>
<tr class="memdesc:ga37bd57223967b4211d60ca1a0bf3c832">
<td class="mdescLeft"> </td>
<td class="mdescRight">保留中のすべてのイベントを処理します。<br />
</td>
</tr>
<tr class="separator:ga37bd57223967b4211d60ca1a0bf3c832">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga554e37d781f0a997656c26b2c56c835e" class="memitem:ga554e37d781f0a997656c26b2c56c835e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga554e37d781f0a997656c26b2c56c835e" class="el">glfwWaitEvents</a> (void)</td>
</tr>
<tr class="memdesc:ga554e37d781f0a997656c26b2c56c835e">
<td class="mdescLeft"> </td>
<td class="mdescRight">イベントがキューへ追加されるまで待機し、それらを処理します。<br />
</td>
</tr>
<tr class="separator:ga554e37d781f0a997656c26b2c56c835e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga605a178db92f1a7f1a925563ef3ea2cf" class="memitem:ga605a178db92f1a7f1a925563ef3ea2cf">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga605a178db92f1a7f1a925563ef3ea2cf" class="el">glfwWaitEventsTimeout</a> (double timeout)</td>
</tr>
<tr class="memdesc:ga605a178db92f1a7f1a925563ef3ea2cf">
<td class="mdescLeft"> </td>
<td class="mdescRight">タイムアウト付きでイベントがキューへ追加されるまで待機し、それらを処理します。<br />
</td>
</tr>
<tr class="separator:ga605a178db92f1a7f1a925563ef3ea2cf">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab5997a25187e9fd5c6f2ecbbc8dfd7e9" class="memitem:gab5997a25187e9fd5c6f2ecbbc8dfd7e9">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gab5997a25187e9fd5c6f2ecbbc8dfd7e9" class="el">glfwPostEmptyEvent</a> (void)</td>
</tr>
<tr class="memdesc:gab5997a25187e9fd5c6f2ecbbc8dfd7e9">
<td class="mdescLeft"> </td>
<td class="mdescRight">空のイベントをイベントキューへ送ります。<br />
</td>
</tr>
<tr class="separator:gab5997a25187e9fd5c6f2ecbbc8dfd7e9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga15a5a1ee5b3c2ca6b15ca209a12efd14" class="memitem:ga15a5a1ee5b3c2ca6b15ca209a12efd14">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga15a5a1ee5b3c2ca6b15ca209a12efd14" class="el">glfwSwapBuffers</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga15a5a1ee5b3c2ca6b15ca209a12efd14">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したウィンドウのフロントバッファとバックバッファを交換します。<br />
</td>
</tr>
<tr class="separator:ga15a5a1ee5b3c2ca6b15ca209a12efd14">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## マクロ定義の解説

<span id="ga54ddb14825a1541a56e22afb5f832a9e"></span>

## <span class="permalink">[◆ ](#ga54ddb14825a1541a56e22afb5f832a9e)</span>GLFW_FOCUSED

<div class="memitem">

<div class="memproto">

|                                    |
|------------------------------------|
| \#define GLFW_FOCUSED   0x00020001 |

</div>

<div class="memdoc">

入力フォーカスに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FOCUSED_hint" class="el">ウィンドウヒント</a>または<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FOCUSED_attrib" class="el">ウィンドウ属性</a>です。

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

ウィンドウのアイコン化に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_ICONIFIED_attrib" class="el">ウィンドウ属性</a>です。

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

ウィンドウのサイズ変更可否に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_RESIZABLE_hint" class="el">ウィンドウヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_RESIZABLE_attrib" class="el">ウィンドウ属性</a>です。

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

ウィンドウの表示状態に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_VISIBLE_hint" class="el">ウィンドウヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_VISIBLE_attrib" class="el">ウィンドウ属性</a>です。

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

ウィンドウ装飾に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_DECORATED_hint" class="el">ウィンドウヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_DECORATED_attrib" class="el">ウィンドウ属性</a>です。

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

ウィンドウの自動アイコン化に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_AUTO_ICONIFY_hint" class="el">ウィンドウヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_AUTO_ICONIFY_attrib" class="el">ウィンドウ属性</a>です。

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

ウィンドウのフローティング状態に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FLOATING_hint" class="el">ウィンドウヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FLOATING_attrib" class="el">ウィンドウ属性</a>です。

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

ウィンドウの最大化に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_MAXIMIZED_hint" class="el">ウィンドウヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_MAXIMIZED_attrib" class="el">ウィンドウ属性</a>です。

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

カーソルの中央配置に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CENTER_CURSOR_hint" class="el">ウィンドウヒント</a>です。

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

ウィンドウフレームバッファの透過性に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_TRANSPARENT_FRAMEBUFFER_hint" class="el">ウィンドウヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_TRANSPARENT_FRAMEBUFFER_attrib" class="el">ウィンドウ属性</a>です。

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

マウスカーソルのホバーに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_HOVERED_attrib" class="el">ウィンドウ属性</a>です。

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

入力フォーカスに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FOCUS_ON_SHOW_hint" class="el">ウィンドウヒント</a>または<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FOCUS_ON_SHOW_attrib" class="el">ウィンドウ属性</a>です。

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

マウス入力の透過に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_MOUSE_PASSTHROUGH_hint" class="el">ウィンドウヒント</a>または<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_MOUSE_PASSTHROUGH_attrib" class="el">ウィンドウ属性</a>です。

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

初期位置のx座標に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_POSITION_X" class="el">ウィンドウヒント</a>です。

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

初期位置のy座標に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_POSITION_Y" class="el">ウィンドウヒント</a>です。

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

フレームバッファのビット深度に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_RED_BITS" class="el">ヒント</a>です。

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

フレームバッファのビット深度に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_GREEN_BITS" class="el">ヒント</a>です。

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

フレームバッファのビット深度に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_BLUE_BITS" class="el">ヒント</a>です。

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

フレームバッファのビット深度に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_ALPHA_BITS" class="el">ヒント</a>です。

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

フレームバッファのビット深度に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_DEPTH_BITS" class="el">ヒント</a>です。

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

フレームバッファのビット深度に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_STENCIL_BITS" class="el">ヒント</a>です。

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

フレームバッファのビット深度に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_ACCUM_RED_BITS" class="el">ヒント</a>です。

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

フレームバッファのビット深度に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_ACCUM_GREEN_BITS" class="el">ヒント</a>です。

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

フレームバッファのビット深度に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_ACCUM_BLUE_BITS" class="el">ヒント</a>です。

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

フレームバッファのビット深度に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_ACCUM_ALPHA_BITS" class="el">ヒント</a>です。

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

フレームバッファの補助バッファに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_AUX_BUFFERS" class="el">ヒント</a>です。

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

OpenGLのステレオレンダリングに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_STEREO" class="el">ヒント</a>です。

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

フレームバッファのMSAAサンプル数に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_SAMPLES" class="el">ヒント</a>です。

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

フレームバッファのsRGB対応に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_SRGB_CAPABLE" class="el">ヒント</a>です。

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

モニターのリフレッシュレートに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_REFRESH_RATE" class="el">ヒント</a>です。

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

フレームバッファのダブルバッファリングに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_DOUBLEBUFFER_hint" class="el">ヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_DOUBLEBUFFER_attrib" class="el">属性</a>です。

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

コンテキストのクライアントAPIに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CLIENT_API_hint" class="el">ヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CLIENT_API_attrib" class="el">属性</a>です。

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

コンテキストのクライアントAPIのメジャーバージョンに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_VERSION_MAJOR_hint" class="el">ヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_VERSION_MAJOR_attrib" class="el">属性</a>です。

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

コンテキストのクライアントAPIのマイナーバージョンに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_VERSION_MINOR_hint" class="el">ヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_VERSION_MINOR_attrib" class="el">属性</a>です。

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

コンテキストのクライアントAPIのリビジョン番号に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_REVISION_attrib" class="el">属性</a>です。

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

コンテキストの堅牢性に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_ROBUSTNESS_hint" class="el">ヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_ROBUSTNESS_attrib" class="el">属性</a>です。

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

OpenGLの前方互換性に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_OPENGL_FORWARD_COMPAT_hint" class="el">ヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_OPENGL_FORWARD_COMPAT_attrib" class="el">属性</a>です。

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

デバッグモードのコンテキストに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_DEBUG_hint" class="el">ヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_DEBUG_attrib" class="el">属性</a>です。

</div>

</div>

<span id="ga87ec2df0b915201e950ca42d5d0831e1"></span>

## <span class="permalink">[◆ ](#ga87ec2df0b915201e950ca42d5d0831e1)</span>GLFW_OPENGL_DEBUG_CONTEXT

<div class="memitem">

<div class="memproto">

|  |
|----|
| \#define GLFW_OPENGL_DEBUG_CONTEXT   <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga8d55e3afec73c7de0509c3b7ad1d9e3f" class="el">GLFW_CONTEXT_DEBUG</a> |

</div>

<div class="memdoc">

これは、以前のバージョンとの互換性のための別名です。

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

OpenGLプロファイルに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_OPENGL_PROFILE_hint" class="el">ヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_OPENGL_PROFILE_attrib" class="el">属性</a>です。

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

コンテキスト解放時のフラッシュに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_RELEASE_BEHAVIOR_hint" class="el">ヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_RELEASE_BEHAVIOR_attrib" class="el">属性</a>です。

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

コンテキストのエラー抑制に関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_NO_ERROR_hint" class="el">ヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_NO_ERROR_attrib" class="el">属性</a>です。

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

コンテキスト作成APIに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_CREATION_API_hint" class="el">ヒント</a>および<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_CREATION_API_attrib" class="el">属性</a>です。

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

これは、以前のバージョンとの互換性のために用意された、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_SCALE_FRAMEBUFFER_hint" class="el">GLFW_SCALE_FRAMEBUFFER</a> ウィンドウヒントの別名です。

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

Waylandのapp_idを指定できるようにします。

</div>

</div>

## 型定義の解説

<span id="ga3c96d80d363e67d13a41b5d1821f3242"></span>

## <span class="permalink">[◆ ](#ga3c96d80d363e67d13a41b5d1821f3242)</span>GLFWwindow

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef struct <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> |

</div>

<div class="memdoc">

不透明なウィンドウオブジェクトです。

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_object" class="el">ウィンドウオブジェクト</a>

<!-- -->

導入バージョン  
バージョン3.0で追加。

</div>

</div>

<span id="gabe287973a21a8f927cde4db06b8dcbe9"></span>

## <span class="permalink">[◆ ](#gabe287973a21a8f927cde4db06b8dcbe9)</span>GLFWwindowposfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWwindowposfun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int xpos, int ypos) |

</div>

<div class="memdoc">

これは、ウィンドウ位置コールバックの関数ポインター型です。ウィンドウ位置コールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> callback_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> xpos, <span class="keywordtype">int</span> ypos)

</div>

<div id="agroup__window_html_ga3c96d80d363e67d13a41b5d1821f3242" class="ttc">

<div class="ttname">

[GLFWwindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242)

</div>

<div class="ttdeci">

struct GLFWwindow GLFWwindow

</div>

<div class="ttdoc">

不透明なウィンドウオブジェクトです。

</div>

<div class="ttdef">

**定義** glfw3.h:1408

</div>

</div>

</div>

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | 移動したウィンドウ。 |
| \[in\] | xpos | ウィンドウのコンテンツ領域の左上隅について、新しいスクリーン座標系のx座標。 |
| \[in\] | ypos | ウィンドウのコンテンツ領域の左上隅について、新しいスクリーン座標系のy座標。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_pos" class="el">ウィンドウの位置</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga08bdfbba88934f9c4f92fd757979ac74" class="el">glfwSetWindowPosCallback</a>

<!-- -->

導入バージョン  
バージョン3.0で追加。

</div>

</div>

<span id="gaec0282944bb810f6f3163ec02da90350"></span>

## <span class="permalink">[◆ ](#gaec0282944bb810f6f3163ec02da90350)</span>GLFWwindowsizefun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWwindowsizefun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int width, int height) |

</div>

<div class="memdoc">

これは、ウィンドウサイズコールバックの関数ポインター型です。ウィンドウサイズコールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> callback_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> width, <span class="keywordtype">int</span> height)

</div>

</div>

引数  
|        |        |                                                       |
|--------|--------|-------------------------------------------------------|
| \[in\] | window | サイズが変更されたウィンドウ。 |
| \[in\] | width  | ウィンドウの新しい幅（スクリーン座標単位）。 |
| \[in\] | height | ウィンドウの新しい高さ（スクリーン座標単位）。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_size" class="el">ウィンドウサイズ</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gad91b8b047a0c4c6033c38853864c34f8" class="el">glfwSetWindowSizeCallback</a>

<!-- -->

導入バージョン  
バージョン1.0で追加。**GLFW 3:** ウィンドウハンドル引数を追加。

</div>

</div>

<span id="gabf859b936d80961b7d39013a9694cc3e"></span>

## <span class="permalink">[◆ ](#gabf859b936d80961b7d39013a9694cc3e)</span>GLFWwindowclosefun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWwindowclosefun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window) |

</div>

<div class="memdoc">

これは、ウィンドウクローズコールバックの関数ポインター型です。ウィンドウクローズコールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window)

</div>

</div>

引数  
|        |        |                                              |
|--------|--------|----------------------------------------------|
| \[in\] | window | ユーザーが閉じようとしたウィンドウ。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_close" class="el">ウィンドウを閉じる操作とクローズフラグ</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gada646d775a7776a95ac000cfc1885331" class="el">glfwSetWindowCloseCallback</a>

<!-- -->

導入バージョン  
バージョン2.5で追加。**GLFW 3:** ウィンドウハンドル引数を追加。

</div>

</div>

<span id="ga431663a1427d2eb3a273bc398b6737b5"></span>

## <span class="permalink">[◆ ](#ga431663a1427d2eb3a273bc398b6737b5)</span>GLFWwindowrefreshfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWwindowrefreshfun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window) |

</div>

<div class="memdoc">

これは、ウィンドウ内容の再描画コールバックの関数ポインター型です。ウィンドウ内容の再描画コールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window);

</div>

</div>

引数  
|        |        |                                                 |
|--------|--------|-------------------------------------------------|
| \[in\] | window | 内容を再描画する必要があるウィンドウ。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_refresh" class="el">ウィンドウの損傷と再描画</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga1c5c7eb889c33c7f4d10dd35b327654e" class="el">glfwSetWindowRefreshCallback</a>

<!-- -->

導入バージョン  
バージョン2.5で追加。**GLFW 3:** ウィンドウハンドル引数を追加。

</div>

</div>

<span id="gabc58c47e9d93f6eb1862d615c3680f46"></span>

## <span class="permalink">[◆ ](#gabc58c47e9d93f6eb1862d615c3680f46)</span>GLFWwindowfocusfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWwindowfocusfun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int focused) |

</div>

<div class="memdoc">

これは、ウィンドウフォーカスコールバックの関数ポインター型です。ウィンドウフォーカスコールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> focused)

</div>

</div>

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | 入力フォーカスを獲得または喪失したウィンドウ。 |
| \[in\] | focused | ウィンドウへ入力フォーカスが与えられた場合は `GLFW_TRUE`、失った場合は `GLFW_FALSE`。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_focus" class="el">ウィンドウの入力フォーカス</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gac2d83c4a10f071baf841f6730528e66c" class="el">glfwSetWindowFocusCallback</a>

<!-- -->

導入バージョン  
バージョン3.0で追加。

</div>

</div>

<span id="ga35c658cccba236f26e7adee0e25f6a4f"></span>

## <span class="permalink">[◆ ](#ga35c658cccba236f26e7adee0e25f6a4f)</span>GLFWwindowiconifyfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWwindowiconifyfun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int iconified) |

</div>

<div class="memdoc">

これは、ウィンドウアイコン化コールバックの関数ポインター型です。ウィンドウアイコン化コールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> iconified)

</div>

</div>

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | アイコン化または復元されたウィンドウ。 |
| \[in\] | iconified | ウィンドウがアイコン化された場合は `GLFW_TRUE`、復元された場合は `GLFW_FALSE`。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_iconify" class="el">ウィンドウのアイコン化</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gac793e9efd255567b5fb8b445052cfd3e" class="el">glfwSetWindowIconifyCallback</a>

<!-- -->

導入バージョン  
バージョン3.0で追加。

</div>

</div>

<span id="ga3017196fdaec33ac3e095765176c2a90"></span>

## <span class="permalink">[◆ ](#ga3017196fdaec33ac3e095765176c2a90)</span>GLFWwindowmaximizefun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWwindowmaximizefun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int maximized) |

</div>

<div class="memdoc">

これは、ウィンドウ最大化コールバックの関数ポインター型です。ウィンドウ最大化コールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> maximized)

</div>

</div>

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | 最大化または復元されたウィンドウ。 |
| \[in\] | maximized | ウィンドウが最大化された場合は `GLFW_TRUE`、復元された場合は `GLFW_FALSE`。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_maximize" class="el">ウィンドウの最大化</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacbe64c339fbd94885e62145563b6dc93" class="el" title="指定したウィンドウの最大化コールバックを設定します。">glfwSetWindowMaximizeCallback</a>

<!-- -->

導入バージョン  
バージョン3.3で追加。

</div>

</div>

<span id="gae18026e294dde685ed2e5f759533144d"></span>

## <span class="permalink">[◆ ](#gae18026e294dde685ed2e5f759533144d)</span>GLFWframebuffersizefun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWframebuffersizefun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int width, int height) |

</div>

<div class="memdoc">

これは、フレームバッファサイズコールバックの関数ポインター型です。フレームバッファサイズコールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> width, <span class="keywordtype">int</span> height)

</div>

</div>

引数  
|        |        |                                                |
|--------|--------|------------------------------------------------|
| \[in\] | window | フレームバッファのサイズが変更されたウィンドウ。 |
| \[in\] | width  | フレームバッファの新しい幅（ピクセル単位）。 |
| \[in\] | height | フレームバッファの新しい高さ（ピクセル単位）。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_fbsize" class="el">フレームバッファサイズ</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gab3fb7c3366577daef18c0023e2a8591f" class="el">glfwSetFramebufferSizeCallback</a>

<!-- -->

導入バージョン  
バージョン3.0で追加。

</div>

</div>

<span id="ga77f288a2d04bb3c77c7d9615d08cf70e"></span>

## <span class="permalink">[◆ ](#ga77f288a2d04bb3c77c7d9615d08cf70e)</span>GLFWwindowcontentscalefun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWwindowcontentscalefun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, float xscale, float yscale) |

</div>

<div class="memdoc">

これは、ウィンドウのコンテンツスケールコールバックの関数ポインター型です。ウィンドウのコンテンツスケールコールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">float</span> xscale, <span class="keywordtype">float</span> yscale)

</div>

</div>

引数  
|        |        |                                             |
|--------|--------|---------------------------------------------|
| \[in\] | window | コンテンツスケールが変更されたウィンドウ。 |
| \[in\] | xscale | ウィンドウの新しいx軸方向のコンテンツスケール。 |
| \[in\] | yscale | ウィンドウの新しいy軸方向のコンテンツスケール。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_scale" class="el">ウィンドウのコンテンツスケール</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaf2832ebb5aa6c252a2d261de002c92d6" class="el">glfwSetWindowContentScaleCallback</a>

<!-- -->

導入バージョン  
バージョン3.3で追加。

</div>

</div>

<span id="ga7cc0a09de172fa7250872046f8c4d2ca"></span>

## <span class="permalink">[◆ ](#ga7cc0a09de172fa7250872046f8c4d2ca)</span>GLFWimage

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef struct <a href="/docs/glfw/v3-5-1/ja/04-reference/20-glfwimage/" class="el">GLFWimage</a> <a href="/docs/glfw/v3-5-1/ja/04-reference/20-glfwimage/" class="el">GLFWimage</a> |

</div>

<div class="memdoc">

これは1枚の2D画像を表します。要求されるピクセルフォーマットについては、関連する各関数のドキュメントを参照してください。

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_custom" class="el">カスタムカーソルの作成</a>

<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_icon" class="el">ウィンドウアイコン</a>

<!-- -->

導入バージョン  
バージョン2.1で追加。**GLFW 3:** フォーマットおよびピクセル当たりのバイト数を表すメンバーを削除。

</div>

</div>

## 関数の解説

<span id="gaa77c4898dfb83344a6b4f76aa16b9a4a"></span>

## <span class="permalink">[◆ ](#gaa77c4898dfb83344a6b4f76aa16b9a4a)</span>glfwDefaultWindowHints()

<div class="memitem">

<div class="memproto">

|                             |     |       |     |     |     |
|-----------------------------|-----|-------|-----|-----|-----|
| void glfwDefaultWindowHints | (   | void  |     | )   |     |

</div>

<div class="memdoc">

この関数は、すべてのウィンドウヒントを<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hints_values" class="el">既定値</a>へ戻します。

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hints" class="el">ウィンドウ作成ヒント</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga7d9c8c62384b1e2821c4dc48952d2033" class="el">glfwWindowHint</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga8cb2782861c9d997bcf2dea97f363e5f" class="el">glfwWindowHintString</a>

<!-- -->

導入バージョン  
バージョン3.0で追加。

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

この関数は、次に <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb" class="el">glfwCreateWindow</a> を呼び出す際のヒントを設定します。一度設定されたヒントは、この関数または <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaa77c4898dfb83344a6b4f76aa16b9a4a" class="el">glfwDefaultWindowHints</a> の呼び出しによって変更されるか、ライブラリが終了するまで値を保持します。

この関数で設定できるのは整数値のヒントだけです。文字列値のヒントは <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga8cb2782861c9d997bcf2dea97f363e5f" class="el">glfwWindowHintString</a> で設定します。

この関数は、指定したヒント値が有効かどうかを確認しません。ヒントに無効な値を設定した場合、次に <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb" class="el">glfwCreateWindow</a> を呼び出したときに報告されます。

一部のヒントはプラットフォーム固有です。これらはどのプラットフォームでも設定できますが、該当するプラットフォームにだけ影響します。ほかのプラットフォームでは無視されます。これらのヒントを設定するために、プラットフォーム固有のヘッダーや関数は必要ありません。

引数  
|  |  |  |
|----|----|----|
| \[in\] | hint | 設定する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hints" class="el">ウィンドウヒント</a>。 |
| \[in\] | value | ウィンドウヒントの新しい値。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hints" class="el">ウィンドウ作成ヒント</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga8cb2782861c9d997bcf2dea97f363e5f" class="el">glfwWindowHintString</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaa77c4898dfb83344a6b4f76aa16b9a4a" class="el">glfwDefaultWindowHints</a>

<!-- -->

導入バージョン  
バージョン3.0で追加。`glfwOpenWindowHint` を置き換えます。

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

この関数は、次に <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb" class="el">glfwCreateWindow</a> を呼び出す際のヒントを設定します。一度設定されたヒントは、この関数または <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaa77c4898dfb83344a6b4f76aa16b9a4a" class="el">glfwDefaultWindowHints</a> の呼び出しによって変更されるか、ライブラリが終了するまで値を保持します。

この関数で設定できるのは文字列型のヒントだけです。整数値のヒントは <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga7d9c8c62384b1e2821c4dc48952d2033" class="el">glfwWindowHint</a> で設定します。

この関数は、指定したヒント値が有効かどうかを確認しません。ヒントに無効な値を設定した場合、次に <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb" class="el">glfwCreateWindow</a> を呼び出したときに報告されます。

一部のヒントはプラットフォーム固有です。これらはどのプラットフォームでも設定できますが、該当するプラットフォームにだけ影響します。ほかのプラットフォームでは無視されます。これらのヒントを設定するために、プラットフォーム固有のヘッダーや関数は必要ありません。

引数  
|  |  |  |
|----|----|----|
| \[in\] | hint | 設定する<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hints" class="el">ウィンドウヒント</a>。 |
| \[in\] | value | ウィンドウヒントの新しい値。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> があります。

<!-- -->

ポインターの有効期間  
指定された文字列は、この関数が戻る前にコピーされます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hints" class="el">ウィンドウ作成ヒント</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga7d9c8c62384b1e2821c4dc48952d2033" class="el">glfwWindowHint</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaa77c4898dfb83344a6b4f76aa16b9a4a" class="el">glfwDefaultWindowHints</a>

<!-- -->

導入バージョン  
バージョン3.3で追加。

</div>

</div>

<span id="ga3555a418df92ad53f917597fe2f64aeb"></span>

## <span class="permalink">[◆ ](#ga3555a418df92ad53f917597fe2f64aeb)</span>glfwCreateWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \* glfwCreateWindow | ( | int  | *width*, |
|  |  | int  | *height*, |
|  |  | const char \*  | *title*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *share*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、ウィンドウと、それに関連付けられたOpenGLまたはOpenGL ESコンテキストを作成します。ウィンドウとコンテキストの作成方法を制御するオプションの大部分は、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hints" class="el">ウィンドウヒント</a>で指定します。

作成に成功しても、どのコンテキストがカレントかは変わりません。新しく作成したコンテキストを使用する前に、そのコンテキストを<a href="/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_current" class="el">カレントにする</a>必要があります。`share` 引数については、<a href="/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_sharing" class="el">コンテキストオブジェクトの共有</a>を参照してください。

すべての引数とヒントが<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hints_hard" class="el">厳密な制約</a>ではないため、作成されたウィンドウ、フレームバッファ、コンテキストは要求したものと異なる場合があります。特にフルスクリーンウィンドウでは、ウィンドウサイズもこれに含まれます。作成されたウィンドウ、フレームバッファ、コンテキストの実際の属性を照会するには、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337" class="el">glfwGetWindowAttrib</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaeea7cbc03373a41fb51cfbf9f2a5d4c6" class="el">glfwGetWindowSize</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga0e2637a4161afb283f5300c7f94785c9" class="el">glfwGetFramebufferSize</a> を参照してください。

フルスクリーンウィンドウを作成するには、ウィンドウが覆うモニターを指定する必要があります。モニターを指定しない場合、ウィンドウはウィンドウモードになります。ユーザーが特定のモニターを選択できる仕組みがない限り、プライマリモニターを選ぶことを推奨します。接続されているモニターの照会方法については、<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_monitors" class="el">モニターの取得</a>を参照してください。

フルスクリーンウィンドウでは、指定したサイズがウィンドウの*希望するビデオモード*の解像度になります。フルスクリーンウィンドウがアイコン化されていない間は、希望するビデオモードにもっとも近い、サポート対象のビデオモードが指定したモニターへ設定されます。いわゆる*ウィンドウフルスクリーン*または*ボーダーレスフルスクリーン*ウィンドウの作成を含む、フルスクリーンウィンドウの詳細については、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_windowed_full_screen" class="el">「ウィンドウフルスクリーン」ウィンドウ</a>を参照してください。

ウィンドウを作成した後は、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga81c76c418af80a1cce7055bccb0ae0a7" class="el">glfwSetWindowMonitor</a> を使って、ウィンドウモードとフルスクリーンモードを切り替えられます。この操作は、ウィンドウのOpenGLまたはOpenGL ESコンテキストに影響しません。

既定では、新しく作成されるウィンドウは、ウィンドウシステムが推奨する配置を使用します。特定の位置にウィンドウを作成するには、作成前に <a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_POSITION_X" class="el">GLFW_POSITION_X</a> と <a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_POSITION_Y" class="el">GLFW_POSITION_Y</a> ウィンドウヒントを設定します。既定の動作へ戻すには、一方または両方のヒントを `GLFW_ANY_POSITION` へ戻します。

少なくとも1つのフルスクリーンウィンドウがアイコン化されていない間は、スクリーンセーバーの起動が禁止されます。

ウィンドウシステムはウィンドウサイズに制限を設けています。極端に大きい、または小さいウィンドウの寸法は、作成時にウィンドウシステムによって上書きされる場合があります。作成後に実際の<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_size" class="el">サイズ</a>を確認してください。

<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#buffer_swap" class="el">スワップ間隔</a>はウィンドウ作成時には設定されず、初期値はドライバーの設定や既定値によって異なる場合があります。

引数  
|  |  |  |
|----|----|----|
| \[in\] | width | ウィンドウの希望する幅（スクリーン座標単位）。0より大きくなければなりません。 |
| \[in\] | height | ウィンドウの希望する高さ（スクリーン座標単位）。0より大きくなければなりません。 |
| \[in\] | title | UTF-8でエンコードされたウィンドウの初期タイトル。 |
| \[in\] | monitor | フルスクリーンモードで使用するモニター。ウィンドウモードの場合は `NULL`。 |
| \[in\] | share | リソースを共有するコンテキストを持つウィンドウ。リソースを共有しない場合は `NULL`。 |

<!-- -->

戻り値  
作成されたウィンドウのハンドル。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad16c5565b4a69f9c2a9ac2c0dbc89462" class="el">GLFW_VERSION_UNAVAILABLE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga196e125ef261d94184e2b55c05762f14" class="el">GLFW_FORMAT_UNAVAILABLE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
**Win32:** Microsoft GDIソフトウェアOpenGL実装しか利用できない場合、ウィンドウの作成は失敗します。

**Win32:** 実行ファイルに `GLFW_ICON,` という名前のアイコンリソースがある場合、それがウィンドウの初期アイコンとして設定されます。そのようなアイコンがない場合は、代わりに `IDI_APPLICATION` アイコンが使用されます。別のアイコンを設定する方法については、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gadd7ccd39fe7a7d1f0904666ae5932dc5" class="el">glfwSetWindowIcon</a> を参照してください。

**Win32:** リソース共有元のコンテキストは、ほかのどのスレッドでもカレントであってはなりません。

**macOS:** OSがサポートするOpenGL 3.2以降のコンテキストは、コアプロファイルコンテキストだけです。OpenGL 3.2以降のコンテキストを作成する前に、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_OPENGL_PROFILE_hint" class="el">GLFW_OPENGL_PROFILE</a> ヒントをそれに応じて設定しなければなりません。macOSはOpenGL 3.0および3.1のコンテキストをまったくサポートしていません。

**macOS:** GLFWウィンドウはドキュメントウィンドウではないためアイコンを持ちませんが、Dockアイコンはアプリケーションバンドルのアイコンと同じになります。バンドルの詳細については、Mac Developer Libraryの[Bundle Programming Guide](https://developer.apple.com/library/mac/documentation/CoreFoundation/Conceptual/CFBundles/)を参照してください。

**macOS:** <a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_SCALE_FRAMEBUFFER_hint" class="el">GLFW_SCALE_FRAMEBUFFER</a> ヒントが `GLFW_TRUE` であり、アプリケーションバンドルの `Info.plist` で `NSHighResolutionCapable` キーが有効になっていない限り、Retinaディスプレイでウィンドウフレームはフル解像度で描画されません。詳細については、Mac Developer Libraryの[High Resolution Guidelines for OS X](https://developer.apple.com/library/mac/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Explained/Explained.html)を参照してください。GLFWのテストおよびサンプルプログラムは、このためにカスタム `Info.plist` テンプレートを使用しています。これはソースツリーの `CMake/Info.plist.in` にあります。

**macOS:** <a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_COCOA_FRAME_NAME_hint" class="el">GLFW_COCOA_FRAME_NAME</a> でフレームの自動保存を有効にすると、指定したウィンドウサイズと位置が以前保存された値によって上書きされる場合があります。

**Wayland:** GLFWは、利用できる場合、ウィンドウ装飾の作成に[libdecor](https://gitlab.freedesktop.org/libdecor/libdecor)を使用します。libdecorは、利用できる場合はサーバー側のXDG装飾を使用し、GNOMEなどのコンポジターでは高品質なクライアント側装飾を提供します。XDG装飾とlibdecorの両方を利用できない場合、GLFWは、移動、サイズ変更、ウィンドウマネージャーの右クリックメニューだけをサポートする非常に簡素なウィンドウ装飾へフォールバックします。

**X11:** 一部のウィンドウマネージャーは、初期状態で非表示のウィンドウについて、指定された配置を尊重しません。

**X11:** X11は非同期で動作するため、ウィンドウが要求された状態へ到達するまで少し時間がかかる場合があります。このため、ウィンドウの作成直後には、最終的なサイズ、位置、その他の属性を照会できないことがあります。

**X11:** `WM_CLASS` ウィンドウプロパティのclass部分には、既定でこの関数へ渡されたウィンドウタイトルが設定されます。instance部分には、`RESOURCE_NAME` 環境変数が存在し、空でなければその内容が使われ、それ以外の場合はウィンドウタイトルへフォールバックします。この動作を上書きするには、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_X11_CLASS_NAME_hint" class="el">GLFW_X11_CLASS_NAME</a> と <a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_X11_INSTANCE_NAME_hint" class="el">GLFW_X11_INSTANCE_NAME</a> ウィンドウヒントを設定します。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_creation" class="el">ウィンドウの作成</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2" class="el">glfwDestroyWindow</a>

<!-- -->

導入バージョン  
バージョン3.0で追加。`glfwOpenWindow` を置き換えます。

</div>

</div>

<span id="gacdf43e51376051d2c091662e9fe3d7b2"></span>

## <span class="permalink">[◆ ](#gacdf43e51376051d2c091662e9fe3d7b2)</span>glfwDestroyWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwDestroyWindow | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

この関数は、指定したウィンドウとそのコンテキストを破棄します。この関数を呼び出すと、そのウィンドウについて以後コールバックは呼び出されません。

指定したウィンドウのコンテキストがメインスレッドでカレントになっている場合は、破棄される前に切り離されます。

引数  
|        |        |                        |
|--------|--------|------------------------|
| \[in\] | window | 破棄するウィンドウ。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

注記  
この関数を呼び出すとき、指定したウィンドウのコンテキストは、ほかのどのスレッドでもカレントであってはなりません。

<!-- -->

再入可能性  
この関数はコールバックから呼び出してはなりません。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_creation" class="el">ウィンドウの作成</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb" class="el">glfwCreateWindow</a>

<!-- -->

導入バージョン  
バージョン3.0で追加。`glfwCloseWindow` を置き換えます。

</div>

</div>

<span id="ga24e02fbfefbb81fc45320989f8140ab5"></span>

## <span class="permalink">[◆ ](#ga24e02fbfefbb81fc45320989f8140ab5)</span>glfwWindowShouldClose()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| int glfwWindowShouldClose | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

この関数は、指定したウィンドウのクローズフラグの値を返します。

引数  
|        |        |                      |
|--------|--------|----------------------|
| \[in\] | window | 照会するウィンドウ。 |

<!-- -->

戻り値  
クローズフラグの値。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数はどのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_close" class="el">ウィンドウを閉じる操作とクローズフラグ</a>

<!-- -->

導入バージョン  
バージョン3.0で追加。

</div>

</div>

<span id="ga49c449dde2a6f87d996f4daaa09d6708"></span>

## <span class="permalink">[◆ ](#ga49c449dde2a6f87d996f4daaa09d6708)</span>glfwSetWindowShouldClose()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowShouldClose | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *value*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定したウィンドウのクローズフラグの値を設定します。ユーザーがウィンドウを閉じようとした操作を取り消したり、ウィンドウを閉じるべきことを通知したりするために使用できます。

引数  
|        |        |                                  |
|--------|--------|----------------------------------|
| \[in\] | window | フラグを変更するウィンドウ。 |
| \[in\] | value  | 新しい値。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数はどのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_close" class="el">ウィンドウを閉じる操作とクローズフラグ</a>

<!-- -->

導入バージョン  
バージョン3.0で追加。

</div>

</div>

<span id="gac6151765c54b789c4fe66c6bc6215953"></span>

## <span class="permalink">[◆ ](#gac6151765c54b789c4fe66c6bc6215953)</span>glfwGetWindowTitle()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| const char \* glfwGetWindowTitle | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

この関数は、指定したウィンドウのUTF-8でエンコードされたタイトルを返します。これは、以前に <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb" class="el">glfwCreateWindow</a> または <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga5d877f09e968cef7a360b513306f17ff" class="el">glfwSetWindowTitle</a> で設定されたタイトルです。

引数  
|        |        |                      |
|--------|--------|----------------------|
| \[in\] | window | 照会するウィンドウ。 |

<!-- -->

戻り値  
UTF-8でエンコードされたウィンドウタイトル。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

備考  
現在返されるタイトルは、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb" class="el">glfwCreateWindow</a> または <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga5d877f09e968cef7a360b513306f17ff" class="el">glfwSetWindowTitle</a> で最後に設定されたタイトルのコピーです。プラットフォームまたは別のプログラムによって追加される可能性のある文字列は含まれません。

<!-- -->

ポインターの有効期間  
返される文字列はGLFWによって割り当ておよび解放されます。自身で解放するべきではありません。次に <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gac6151765c54b789c4fe66c6bc6215953" class="el">glfwGetWindowTitle</a> または <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga5d877f09e968cef7a360b513306f17ff" class="el">glfwSetWindowTitle</a> が呼び出されるか、ライブラリが終了するまで有効です。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_title" class="el">ウィンドウタイトル</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga5d877f09e968cef7a360b513306f17ff" class="el">glfwSetWindowTitle</a>

<!-- -->

導入バージョン  
バージョン3.4で追加。

</div>

</div>

<span id="ga5d877f09e968cef7a360b513306f17ff"></span>

## <span class="permalink">[◆ ](#ga5d877f09e968cef7a360b513306f17ff)</span>glfwSetWindowTitle()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowTitle | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | const char \*  | *title*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定したウィンドウのタイトルをUTF-8でエンコードされた文字列で設定します。

引数  
|        |        |                                   |
|--------|--------|-----------------------------------|
| \[in\] | window | タイトルを変更するウィンドウ。 |
| \[in\] | title  | UTF-8でエンコードされたウィンドウタイトル。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
**macOS:** ウィンドウタイトルは、次にイベントを処理するまで更新されません。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_title" class="el">ウィンドウタイトル</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gac6151765c54b789c4fe66c6bc6215953" class="el">glfwGetWindowTitle</a>

<!-- -->

導入バージョン  
バージョン1.0で追加。**GLFW 3:** ウィンドウハンドル引数を追加。

</div>

</div>

<span id="gadd7ccd39fe7a7d1f0904666ae5932dc5"></span>

## <span class="permalink">[◆ ](#gadd7ccd39fe7a7d1f0904666ae5932dc5)</span>glfwSetWindowIcon()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowIcon | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *count*, |
|  |  | const <a href="/docs/glfw/v3-5-1/ja/04-reference/20-glfwimage/" class="el">GLFWimage</a> \*  | *images*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定したウィンドウのアイコンを設定します。候補画像の配列を渡すと、システムが要求するサイズ、またはそれにもっとも近いサイズの画像が選択されます。画像を指定しない場合、ウィンドウは既定のアイコンへ戻ります。

ピクセルは32ビット、リトルエンディアン、乗算済みではないRGBA形式です。つまり、各チャンネルが8ビットで、赤チャンネルが先頭です。左上隅から始まる、連続した行を詰めた標準的な形式で配置します。

要求される画像サイズは、プラットフォームとシステム設定によって異なります。選択された画像は必要に応じて拡大縮小されます。適切なサイズには、16x16、32x32、48x48があります。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | アイコンを設定するウィンドウ。 |
| \[in\] | count | 指定した配列内の画像数。既定のウィンドウアイコンへ戻す場合は0。 |
| \[in\] | images | アイコンの作成元となる画像。countが0の場合は無視されます。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>（備考を参照）があります。

<!-- -->

ポインターの有効期間  
指定された画像データは、この関数が戻る前にコピーされます。

<!-- -->

備考  
**macOS:** macOSの通常のウィンドウはアイコンを持ちません。この関数は <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> を発生させます。Dockアイコンはアプリケーションバンドルのアイコンと同じになります。バンドルの詳細については、Mac Developer Libraryの[Bundle Programming Guide](https://developer.apple.com/library/mac/documentation/CoreFoundation/Conceptual/CFBundles/)を参照してください。

**Wayland:** アイコンを変更する既存のプロトコルがないため、ウィンドウはアプリケーションのdesktopファイルに定義されたアイコンを継承します。この関数は <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> を発生させます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_icon" class="el">ウィンドウアイコン</a>

<!-- -->

導入バージョン  
バージョン3.2で追加。

</div>

</div>

<span id="ga73cb526c000876fd8ddf571570fdb634"></span>

## <span class="permalink">[◆ ](#ga73cb526c000876fd8ddf571570fdb634)</span>glfwGetWindowPos()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetWindowPos | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int \*  | *xpos*, |
|  |  | int \*  | *ypos*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定したウィンドウのコンテンツ領域の左上隅について、スクリーン座標系の位置を取得します。

位置引数は、その一部またはすべてを `NULL` にできます。エラーが発生した場合、`NULL` ではないすべての位置引数が0に設定されます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | 照会するウィンドウ。 |
| \[out\] | xpos | コンテンツ領域の左上隅のx座標の格納先、または `NULL`。 |
| \[out\] | ypos | コンテンツ領域の左上隅のy座標の格納先、または `NULL`。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>（備考を参照）があります。

<!-- -->

備考  
**Wayland:** 現在、ウィンドウ位置は一般的なWaylandプロトコルのどれにも含まれていないため、この関数は実装できず、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> を発生させます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_pos" class="el">ウィンドウの位置</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga1abb6d690e8c88e0c8cd1751356dbca8" class="el">glfwSetWindowPos</a>

<!-- -->

導入バージョン  
バージョン3.0で追加。

</div>

</div>

<span id="ga1abb6d690e8c88e0c8cd1751356dbca8"></span>

## <span class="permalink">[◆ ](#ga1abb6d690e8c88e0c8cd1751356dbca8)</span>glfwSetWindowPos()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowPos | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *xpos*, |
|  |  | int  | *ypos*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定したウィンドウモードのウィンドウについて、コンテンツ領域の左上隅の位置をスクリーン座標系で設定します。ウィンドウがフルスクリーンウィンドウの場合、この関数は何も行いません。

そうするための十分な理由がない限り、すでに表示されているウィンドウを移動するために、**この関数を使用してはなりません**。ユーザーを混乱させ、不快にさせるためです。

ウィンドウマネージャーは、許可される位置に制限を設ける場合があります。GLFWはこれらの制限を上書きできず、上書きするべきでもありません。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | 位置を設定するウィンドウ。 |
| \[in\] | xpos | コンテンツ領域の左上隅のx座標。 |
| \[in\] | ypos | コンテンツ領域の左上隅のy座標。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>（備考を参照）があります。

<!-- -->

備考  
**Wayland:** 現在、ウィンドウ位置は一般的なWaylandプロトコルのどれにも含まれていないため、この関数は実装できず、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> を発生させます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_pos" class="el">ウィンドウの位置</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga73cb526c000876fd8ddf571570fdb634" class="el">glfwGetWindowPos</a>

<!-- -->

導入バージョン  
バージョン1.0で追加。**GLFW 3:** ウィンドウハンドル引数を追加。

</div>

</div>

<span id="gaeea7cbc03373a41fb51cfbf9f2a5d4c6"></span>

## <span class="permalink">[◆ ](#gaeea7cbc03373a41fb51cfbf9f2a5d4c6)</span>glfwGetWindowSize()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetWindowSize | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int \*  | *width*, |
|  |  | int \*  | *height*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定したウィンドウのコンテンツ領域のサイズをスクリーン座標単位で取得します。ウィンドウのフレームバッファサイズをピクセル単位で取得する場合は、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga0e2637a4161afb283f5300c7f94785c9" class="el">glfwGetFramebufferSize</a> を参照してください。

サイズ引数は、その一部またはすべてを `NULL` にできます。エラーが発生した場合、`NULL` ではないすべてのサイズ引数が0に設定されます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | サイズを取得するウィンドウ。 |
| \[out\] | width | コンテンツ領域の幅（スクリーン座標単位）の格納先、または `NULL`。 |
| \[out\] | height | コンテンツ領域の高さ（スクリーン座標単位）の格納先、または `NULL`。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_size" class="el">ウィンドウサイズ</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga371911f12c74c504dd8d47d832d095cb" class="el">glfwSetWindowSize</a>

<!-- -->

導入バージョン  
バージョン1.0で追加。**GLFW 3:** ウィンドウハンドル引数を追加。

</div>

</div>

<span id="gac314fa6cec7d2d307be9963e2709cc90"></span>

## <span class="permalink">[◆ ](#gac314fa6cec7d2d307be9963e2709cc90)</span>glfwSetWindowSizeLimits()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowSizeLimits | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *minwidth*, |
|  |  | int  | *minheight*, |
|  |  | int  | *maxwidth*, |
|  |  | int  | *maxheight*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定したウィンドウのコンテンツ領域のサイズ制限を設定します。ウィンドウがフルスクリーンの場合、サイズ制限はウィンドウモードになってから有効になります。ウィンドウのサイズを変更できない場合、この関数は何も行いません。

サイズ制限はウィンドウモードのウィンドウへ直ちに適用され、ウィンドウのサイズが変更される場合があります。

最大寸法は最小寸法以上でなければならず、すべての寸法が0以上でなければなりません。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | 制限を設定するウィンドウ。 |
| \[in\] | minwidth | コンテンツ領域の最小幅（スクリーン座標単位）、または `GLFW_DONT_CARE`。 |
| \[in\] | minheight | コンテンツ領域の最小高さ（スクリーン座標単位）、または `GLFW_DONT_CARE`。 |
| \[in\] | maxwidth | コンテンツ領域の最大幅（スクリーン座標単位）、または `GLFW_DONT_CARE`。 |
| \[in\] | maxheight | コンテンツ領域の最大高さ（スクリーン座標単位）、または `GLFW_DONT_CARE`。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
互いに矛盾するサイズ制限とアスペクト比を設定した場合、結果は未定義です。

**Wayland:** サイズ制限は、ユーザーまたはコンポジターによってウィンドウのサイズが実際に変更されるまで適用されません。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_sizelimits" class="el">ウィンドウのサイズ制限</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga72ac8cb1ee2e312a878b55153d81b937" class="el">glfwSetWindowAspectRatio</a>

<!-- -->

導入バージョン  
バージョン3.2で追加。

</div>

</div>

<span id="ga72ac8cb1ee2e312a878b55153d81b937"></span>

## <span class="permalink">[◆ ](#ga72ac8cb1ee2e312a878b55153d81b937)</span>glfwSetWindowAspectRatio()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowAspectRatio | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *numer*, |
|  |  | int  | *denom*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定したウィンドウのコンテンツ領域に要求するアスペクト比を設定します。ウィンドウがフルスクリーンの場合、アスペクト比はウィンドウモードになってから有効になります。ウィンドウのサイズを変更できない場合、この関数は何も行いません。

アスペクト比は分子と分母で指定し、どちらの値も0より大きくなければなりません。たとえば、一般的な16:9のアスペクト比は、それぞれ16と9で指定します。

分子と分母を `GLFW_DONT_CARE` に設定すると、アスペクト比の制限は無効になります。

アスペクト比はウィンドウモードのウィンドウへ直ちに適用され、ウィンドウのサイズが変更される場合があります。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | 制限を設定するウィンドウ。 |
| \[in\] | numer | 希望するアスペクト比の分子、または `GLFW_DONT_CARE`。 |
| \[in\] | denom | 希望するアスペクト比の分母、または `GLFW_DONT_CARE`。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
互いに矛盾するサイズ制限とアスペクト比を設定した場合、結果は未定義です。

**Wayland:** アスペクト比は、ユーザーまたはコンポジターによってウィンドウのサイズが実際に変更されるまで適用されません。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_sizelimits" class="el">ウィンドウのサイズ制限</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gac314fa6cec7d2d307be9963e2709cc90" class="el">glfwSetWindowSizeLimits</a>

<!-- -->

導入バージョン  
バージョン3.2で追加。

</div>

</div>

<span id="ga371911f12c74c504dd8d47d832d095cb"></span>

## <span class="permalink">[◆ ](#ga371911f12c74c504dd8d47d832d095cb)</span>glfwSetWindowSize()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowSize | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *width*, |
|  |  | int  | *height*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのコンテンツ領域の大きさをスクリーン座標で設定します。

フルスクリーンウィンドウの場合、この関数はウィンドウが要求するビデオモードの解像度を更新し、ウィンドウのコンテキストに影響を与えることなく、最も近いビデオモードへ切り替えます。コンテキストは影響を受けないため、フレームバッファのビット深度は変わりません。

要求するビデオモードの解像度に加えてリフレッシュレートも更新する場合は、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga81c76c418af80a1cce7055bccb0ae0a7" class="el">glfwSetWindowMonitor</a> を参照してください。

ウィンドウマネージャーによって、許可される大きさが制限されることがあります。GLFW はこれらの制限を上書きできず、また上書きすべきでもありません。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | 大きさを変更するウィンドウ。 |
| \[in\] | width | ウィンドウのコンテンツ領域に要求する幅（スクリーン座標）。 |
| \[in\] | height | ウィンドウのコンテンツ領域に要求する高さ（スクリーン座標）。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_size" class="el">ウィンドウの大きさ</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaeea7cbc03373a41fb51cfbf9f2a5d4c6" class="el">glfwGetWindowSize</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga81c76c418af80a1cce7055bccb0ae0a7" class="el">glfwSetWindowMonitor</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。**GLFW 3:** ウィンドウハンドルの引数が追加されました。

</div>

</div>

<span id="ga0e2637a4161afb283f5300c7f94785c9"></span>

## <span class="permalink">[◆ ](#ga0e2637a4161afb283f5300c7f94785c9)</span>glfwGetFramebufferSize()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetFramebufferSize | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int \*  | *width*, |
|  |  | int \*  | *height*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのフレームバッファの大きさをピクセル単位で取得します。ウィンドウの大きさをスクリーン座標で取得する場合は、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaeea7cbc03373a41fb51cfbf9f2a5d4c6" class="el">glfwGetWindowSize</a> を参照してください。

大きさを受け取る引数は、一部またはすべてを `NULL` にできます。エラーが発生した場合、`NULL` でない大きさの引数はすべてゼロに設定されます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | フレームバッファを照会するウィンドウ。 |
| \[out\] | width | フレームバッファの幅をピクセル単位で格納する場所、または `NULL`。 |
| \[out\] | height | フレームバッファの高さをピクセル単位で格納する場所、または `NULL`。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_fbsize" class="el">フレームバッファの大きさ</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gab3fb7c3366577daef18c0023e2a8591f" class="el">glfwSetFramebufferSizeCallback</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga1a9fd382058c53101b21cf211898f1f1"></span>

## <span class="permalink">[◆ ](#ga1a9fd382058c53101b21cf211898f1f1)</span>glfwGetWindowFrameSize()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetWindowFrameSize | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int \*  | *left*, |
|  |  | int \*  | *top*, |
|  |  | int \*  | *right*, |
|  |  | int \*  | *bottom*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのフレームの各辺の大きさをスクリーン座標で取得します。ウィンドウにタイトルバーがある場合、この大きさにはタイトルバーも含まれます。フレームの大きさは、ウィンドウの作成に使用した<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hints_wnd" class="el">ウィンドウ関連のヒント</a>によって異なることがあります。

この関数が取得するのはウィンドウフレームの各辺の大きさであり、特定の座標軸に沿ったオフセットではないため、取得される値は常にゼロ以上です。

大きさを受け取る引数は、一部またはすべてを `NULL` にできます。エラーが発生した場合、`NULL` でない大きさの引数はすべてゼロに設定されます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | フレームの大きさを照会するウィンドウ。 |
| \[out\] | left | ウィンドウフレームの左辺の大きさをスクリーン座標で格納する場所、または `NULL`。 |
| \[out\] | top | ウィンドウフレームの上辺の大きさをスクリーン座標で格納する場所、または `NULL`。 |
| \[out\] | right | ウィンドウフレームの右辺の大きさをスクリーン座標で格納する場所、または `NULL`。 |
| \[out\] | bottom | ウィンドウフレームの下辺の大きさをスクリーン座標で格納する場所、または `NULL`。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_size" class="el">ウィンドウの大きさ</a>

<!-- -->

導入バージョン  
バージョン 3.1 で追加されました。

</div>

</div>

<span id="gaf5d31de9c19c4f994facea64d2b3106c"></span>

## <span class="permalink">[◆ ](#gaf5d31de9c19c4f994facea64d2b3106c)</span>glfwGetWindowContentScale()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetWindowContentScale | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | float \*  | *xscale*, |
|  |  | float \*  | *yscale*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのコンテンツスケールを取得します。コンテンツスケールは、現在の DPI とプラットフォームの既定の DPI との比率です。これは、テキストやあらゆる UI 要素で特に重要です。この値で拡大縮小した UI のピクセル寸法が使用中のマシンで適切に見えるなら、他のマシンでも、その DPI やスケーリング設定にかかわらず妥当な大きさで表示されるはずです。これは、システムの DPI とスケーリング設定がある程度正しいことを前提とします。

モニターごとに固有のコンテンツスケールを設定できるプラットフォームでは、ウィンドウのコンテンツスケールは、そのウィンドウがどのモニター上にあるとシステムが判断するかによって決まります。

引数  
|         |        |                                                     |
|---------|--------|-----------------------------------------------------|
| \[in\]  | window | 照会するウィンドウ。                                |
| \[out\] | xscale | X 軸方向のコンテンツスケールを格納する場所、または `NULL`。 |
| \[out\] | yscale | Y 軸方向のコンテンツスケールを格納する場所、または `NULL`。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_scale" class="el">ウィンドウのコンテンツスケール</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaf2832ebb5aa6c252a2d261de002c92d6" class="el">glfwSetWindowContentScaleCallback</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gad3152e84465fa620b601265ebfcdb21b" class="el">glfwGetMonitorContentScale</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="gad09f0bd7a6307c4533b7061828480a84"></span>

## <span class="permalink">[◆ ](#gad09f0bd7a6307c4533b7061828480a84)</span>glfwGetWindowOpacity()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| float glfwGetWindowOpacity | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

この関数は、装飾を含むウィンドウの不透明度を返します。

不透明度（アルファ）値はゼロから 1 までの正の有限数で、ゼロは完全な透明、1 は完全な不透明を表します。システムがウィンドウ全体の透過をサポートしていない場合、この関数は常に 1 を返します。

新しく作成されたウィンドウの初期不透明度は 1 です。

引数  
|        |        |                      |
|--------|--------|----------------------|
| \[in\] | window | 照会するウィンドウ。 |

<!-- -->

戻り値  
指定されたウィンドウの不透明度。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_transparency" class="el">ウィンドウの透過</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gac31caeb3d1088831b13d2c8a156802e9" class="el">glfwSetWindowOpacity</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="gac31caeb3d1088831b13d2c8a156802e9"></span>

## <span class="permalink">[◆ ](#gac31caeb3d1088831b13d2c8a156802e9)</span>glfwSetWindowOpacity()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowOpacity | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | float  | *opacity*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、装飾を含むウィンドウの不透明度を設定します。

不透明度（アルファ）値はゼロから 1 までの正の有限数で、ゼロは完全な透明、1 は完全な不透明を表します。

新しく作成されたウィンドウの初期不透明度は 1 です。

フレームバッファ透過を有効にして作成したウィンドウでは、ウィンドウ全体の透過を使用できないことがあります。これを行った場合の結果は未定義です。

引数  
|        |         |                                              |
|--------|---------|----------------------------------------------|
| \[in\] | window  | 不透明度を設定するウィンドウ。           |
| \[in\] | opacity | 指定されたウィンドウに要求する不透明度。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>、および <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>（備考を参照）があります。

<!-- -->

備考  
**Wayland:** ウィンドウの不透明度係数を設定する方法はありません。この関数は <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> を発生させます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_transparency" class="el">ウィンドウの透過</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gad09f0bd7a6307c4533b7061828480a84" class="el">glfwGetWindowOpacity</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="ga1bb559c0ebaad63c5c05ad2a066779c4"></span>

## <span class="permalink">[◆ ](#ga1bb559c0ebaad63c5c05ad2a066779c4)</span>glfwIconifyWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwIconifyWindow | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウが復元状態であれば、アイコン化（最小化）します。ウィンドウがすでにアイコン化されている場合、この関数は何もしません。

指定されたウィンドウがフルスクリーンウィンドウの場合、GLFW はモニターの元のビデオモードを復元します。ウィンドウを復元すると、ウィンドウが要求するビデオモードが再び設定されます。

引数  
|        |        |                        |
|--------|--------|------------------------|
| \[in\] | window | アイコン化するウィンドウ。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_iconify" class="el">ウィンドウのアイコン化</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga52527a5904b47d802b6b4bb519cdebc7" class="el">glfwRestoreWindow</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3f541387449d911274324ae7f17ec56b" class="el">glfwMaximizeWindow</a>

<!-- -->

導入バージョン  
バージョン 2.1 で追加されました。**GLFW 3:** ウィンドウハンドルの引数が追加されました。

</div>

</div>

<span id="ga52527a5904b47d802b6b4bb519cdebc7"></span>

## <span class="permalink">[◆ ](#ga52527a5904b47d802b6b4bb519cdebc7)</span>glfwRestoreWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwRestoreWindow | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウがアイコン化（最小化）または最大化されていれば復元します。ウィンドウがすでに復元されている場合、この関数は何もしません。

指定されたウィンドウがアイコン化されたフルスクリーンウィンドウの場合、ウィンドウを復元すると、そのモニターに要求するビデオモードが再び設定されます。

引数  
|        |        |                        |
|--------|--------|------------------------|
| \[in\] | window | 復元するウィンドウ。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
**Wayland:** 最大化されたウィンドウの復元は、現在、共通の Wayland プロトコルには含まれていないため、この関数が復元できるのは最大化されたウィンドウに限られます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_iconify" class="el">ウィンドウのアイコン化</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga1bb559c0ebaad63c5c05ad2a066779c4" class="el">glfwIconifyWindow</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3f541387449d911274324ae7f17ec56b" class="el">glfwMaximizeWindow</a>

<!-- -->

導入バージョン  
バージョン 2.1 で追加されました。**GLFW 3:** ウィンドウハンドルの引数が追加されました。

</div>

</div>

<span id="ga3f541387449d911274324ae7f17ec56b"></span>

## <span class="permalink">[◆ ](#ga3f541387449d911274324ae7f17ec56b)</span>glfwMaximizeWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwMaximizeWindow | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウが最大化されていなければ最大化します。ウィンドウがすでに最大化されている場合、この関数は何もしません。

指定されたウィンドウがフルスクリーンウィンドウの場合、この関数は何もしません。

引数  
|        |        |                         |
|--------|--------|-------------------------|
| \[in\] | window | 最大化するウィンドウ。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_iconify" class="el">ウィンドウのアイコン化</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga1bb559c0ebaad63c5c05ad2a066779c4" class="el">glfwIconifyWindow</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga52527a5904b47d802b6b4bb519cdebc7" class="el">glfwRestoreWindow</a>

<!-- -->

導入バージョン  
GLFW 3.2 で追加されました。

</div>

</div>

<span id="ga61be47917b72536a148300f46494fc66"></span>

## <span class="permalink">[◆ ](#ga61be47917b72536a148300f46494fc66)</span>glfwShowWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwShowWindow | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウが非表示であれば表示します。ウィンドウがすでに表示されている場合、またはフルスクリーンモードの場合、この関数は何もしません。

既定では、ウィンドウモードのウィンドウは表示時にフォーカスされます。新しく作成するすべてのウィンドウについてこの動作を変更するには、ウィンドウヒント <a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FOCUS_ON_SHOW_hint" class="el">GLFW_FOCUS_ON_SHOW</a> を設定します。既存のウィンドウについては、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gace2afda29b4116ec012e410a6819033e" class="el">glfwSetWindowAttrib</a> で動作を変更できます。

引数  
|        |        |                             |
|--------|--------|-----------------------------|
| \[in\] | window | 表示するウィンドウ。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
**Wayland:** Wayland はデスクトップの各フレームが完全であることを求めるため、この関数はウィンドウを即座には表示しません。代わりに、この呼び出し後にウィンドウのフレームバッファが次に更新されたときに表示されます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hide" class="el">ウィンドウの表示状態</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga49401f82a1ba5f15db5590728314d47c" class="el">glfwHideWindow</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga49401f82a1ba5f15db5590728314d47c"></span>

## <span class="permalink">[◆ ](#ga49401f82a1ba5f15db5590728314d47c)</span>glfwHideWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwHideWindow | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウが表示されていれば非表示にします。ウィンドウがすでに非表示の場合、またはフルスクリーンモードの場合、この関数は何もしません。

引数  
|        |        |                     |
|--------|--------|---------------------|
| \[in\] | window | 非表示にするウィンドウ。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hide" class="el">ウィンドウの表示状態</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga61be47917b72536a148300f46494fc66" class="el">glfwShowWindow</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga873780357abd3f3a081d71a40aae45a1"></span>

## <span class="permalink">[◆ ](#ga873780357abd3f3a081d71a40aae45a1)</span>glfwFocusWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwFocusWindow | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウを前面へ移動し、入力フォーカスを設定します。ウィンドウはすでに表示され、アイコン化されていない必要があります。

既定では、ウィンドウモードとフルスクリーンモードのどちらのウィンドウも、最初の作成時にフォーカスされます。この動作を無効にするには、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FOCUSED_hint" class="el">GLFW_FOCUSED</a> を設定します。

また既定では、ウィンドウモードのウィンドウは <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga61be47917b72536a148300f46494fc66" class="el">glfwShowWindow</a> で表示したときにフォーカスされます。この動作を無効にするには、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FOCUS_ON_SHOW_hint" class="el">GLFW_FOCUS_ON_SHOW</a> を設定します。

ユーザーがそれを望んでいると確信できる場合を除き、他のアプリケーションからフォーカスを奪うために**この関数を使用しないでください**。フォーカスの奪取は、ユーザーの作業を著しく妨げることがあります。

ユーザーの注意をより穏当な方法で引くには、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_attention" class="el">注意要求</a>を参照してください。

引数  
|        |        |                                 |
|--------|--------|---------------------------------|
| \[in\] | window | 入力フォーカスを与えるウィンドウ。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
**Wayland:** 同じアプリケーションが作成した別のウィンドウがすでに入力フォーカスを持っている場合を除き、コンポジターはフォーカス要求を無視する可能性があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_focus" class="el">ウィンドウの入力フォーカス</a>

<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_attention" class="el">ウィンドウの注意要求</a>

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

</div>

</div>

<span id="ga2f8d59323fc4692c1d54ba08c863a703"></span>

## <span class="permalink">[◆ ](#ga2f8d59323fc4692c1d54ba08c863a703)</span>glfwRequestWindowAttention()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwRequestWindowAttention | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウへユーザーの注意を引くよう要求します。これがサポートされていないプラットフォームでは、アプリケーション全体に対して注意を要求します。

通常はウィンドウまたはアプリケーションをフォーカスすることでユーザーが注意を向けると、システムは要求を自動的に終了します。

引数  
|        |        |                                     |
|--------|--------|-------------------------------------|
| \[in\] | window | 注意を要求するウィンドウ。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
**macOS:** 特定のウィンドウではなく、アプリケーション全体に対して注意を要求します。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_attention" class="el">ウィンドウの注意要求</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="ga4d766499ac02c60f02221a9dfab87299"></span>

## <span class="permalink">[◆ ](#ga4d766499ac02c60f02221a9dfab87299)</span>glfwGetWindowMonitor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \* glfwGetWindowMonitor | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウがフルスクリーン表示されているモニターのハンドルを返します。

引数  
|        |        |                      |
|--------|--------|----------------------|
| \[in\] | window | 照会するウィンドウ。 |

<!-- -->

戻り値  
モニター。ウィンドウがウィンドウモードの場合、または<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_monitor" class="el">ウィンドウのモニター</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga81c76c418af80a1cce7055bccb0ae0a7" class="el">glfwSetWindowMonitor</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga81c76c418af80a1cce7055bccb0ae0a7"></span>

## <span class="permalink">[◆ ](#ga81c76c418af80a1cce7055bccb0ae0a7)</span>glfwSetWindowMonitor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowMonitor | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | int  | *xpos*, |
|  |  | int  | *ypos*, |
|  |  | int  | *width*, |
|  |  | int  | *height*, |
|  |  | int  | *refreshRate*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、ウィンドウがフルスクリーンモードで使用するモニターを設定します。モニターが `NULL` の場合は、ウィンドウモードにします。

モニターを設定すると、この関数は要求するビデオモードの幅、高さ、リフレッシュレートを更新し、それに最も近いビデオモードへ切り替えます。モニターを設定する場合、ウィンドウ位置は無視されます。

モニターが `NULL` の場合、位置、幅、高さを使用してウィンドウのコンテンツ領域を配置します。モニターが指定されていない場合、リフレッシュレートは無視されます。

フルスクリーンウィンドウの解像度、またはウィンドウモードのウィンドウの大きさだけを更新する場合は、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga371911f12c74c504dd8d47d832d095cb" class="el">glfwSetWindowSize</a> を参照してください。

ウィンドウがフルスクリーンからウィンドウモードへ移行するとき、この関数は、装飾、フローティング、サイズ変更の可否、大きさやアスペクト比の制限など、以前のウィンドウ設定を復元します。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | モニター、大きさ、またはビデオモードを設定するウィンドウ。 |
| \[in\] | monitor | 要求するモニター。ウィンドウモードにする場合は `NULL`。 |
| \[in\] | xpos | コンテンツ領域の左上隅に要求する X 座標。 |
| \[in\] | ypos | コンテンツ領域の左上隅に要求する Y 座標。 |
| \[in\] | width | コンテンツ領域またはビデオモードに要求する幅（スクリーン座標）。 |
| \[in\] | height | コンテンツ領域またはビデオモードに要求する高さ（スクリーン座標）。 |
| \[in\] | refreshRate | ビデオモードに要求するリフレッシュレート（Hz）、または `GLFW_DONT_CARE`。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
大きさの変更やモードの切り替えによって OpenGL または OpenGL ES コンテキストが破棄されたり、その他の影響を受けたりすることはありません。ただし、フレームバッファの大きさが変わった場合は、ビューポートを更新する必要があります。

**Wayland:** ウィンドウ位置は、現在、共通の Wayland プロトコルには含まれていません。ウィンドウ位置の引数は無視されます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_monitor" class="el">ウィンドウのモニター</a>

<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_full_screen" class="el">フルスクリーンウィンドウ</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga4d766499ac02c60f02221a9dfab87299" class="el">glfwGetWindowMonitor</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga371911f12c74c504dd8d47d832d095cb" class="el">glfwSetWindowSize</a>

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

</div>

</div>

<span id="gacccb29947ea4b16860ebef42c2cb9337"></span>

## <span class="permalink">[◆ ](#gacccb29947ea4b16860ebef42c2cb9337)</span>glfwGetWindowAttrib()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetWindowAttrib | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *attrib*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウ、またはその OpenGL もしくは OpenGL ES コンテキストの属性値を返します。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | 照会するウィンドウ。 |
| \[in\] | attrib | 値を返す<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_attribs" class="el">ウィンドウ属性</a>。 |

<!-- -->

戻り値  
属性の値。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合はゼロ。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>、および <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
フレームバッファ関連のヒントはウィンドウ属性ではありません。詳しくは、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_attribs_fb" class="el">フレームバッファ関連の属性</a>を参照してください。

多くのウィンドウおよびコンテキスト関連属性ではゼロが有効な値であるため、戻り値のゼロをエラーの目印として使用することはできません。ただし、有効な引数を渡し、ライブラリが<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化</a>されている限り、この関数は失敗しないはずです。

**Wayland:** ウィンドウがアイコン化されているかの確認は、現在、共通の Wayland プロトコルには含まれていません。そのため、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga39d44b7c056e55e581355a92d240b58a" class="el">GLFW_ICONIFIED</a> 属性は実装できず、常に `GLFW_FALSE` です。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_attribs" class="el">ウィンドウ属性</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gace2afda29b4116ec012e410a6819033e" class="el">glfwSetWindowAttrib</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。`glfwGetWindowParam` と `glfwGetGLVersion` を置き換えます。

</div>

</div>

<span id="gace2afda29b4116ec012e410a6819033e"></span>

## <span class="permalink">[◆ ](#gace2afda29b4116ec012e410a6819033e)</span>glfwSetWindowAttrib()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowAttrib | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *attrib*, |
|  |  | int  | *value*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウの属性値を設定します。

サポートされる属性は、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_DECORATED_attrib" class="el">GLFW_DECORATED</a>、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_RESIZABLE_attrib" class="el">GLFW_RESIZABLE</a>、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FLOATING_attrib" class="el">GLFW_FLOATING</a>、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_AUTO_ICONIFY_attrib" class="el">GLFW_AUTO_ICONIFY</a>、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FOCUS_ON_SHOW_attrib" class="el">GLFW_FOCUS_ON_SHOW</a>、および <a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_MOUSE_PASSTHROUGH_attrib" class="el">GLFW_MOUSE_PASSTHROUGH</a> です。

これらの属性の一部は、フルスクリーンウィンドウでは無視されます。後でウィンドウモードにすると、新しい値が有効になります。

これらの属性の一部は、ウィンドウモードのウィンドウでは無視されます。後でフルスクリーンにすると、新しい値が有効になります。

引数  
|        |        |                                      |
|--------|--------|--------------------------------------|
| \[in\] | window | 属性を設定するウィンドウ。 |
| \[in\] | attrib | サポートされるウィンドウ属性。        |
| \[in\] | value  | `GLFW_TRUE` または `GLFW_FALSE`。         |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>、および <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>（備考を参照）があります。

<!-- -->

備考  
<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337" class="el">glfwGetWindowAttrib</a> を呼び出すと、その値が現在のウィンドウモードで無視されている場合でも、常に最新の値が返されます。

**Wayland:** ウィンドウ属性 <a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FLOATING_attrib" class="el">GLFW_FLOATING</a> はサポートされていません。これを設定すると、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> が発生します。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_attribs" class="el">ウィンドウ属性</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337" class="el">glfwGetWindowAttrib</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="ga3d2fc6026e690ab31a13f78bc9fd3651"></span>

## <span class="permalink">[◆ ](#ga3d2fc6026e690ab31a13f78bc9fd3651)</span>glfwSetWindowUserPointer()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetWindowUserPointer | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | void \*  | *pointer*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのユーザー定義ポインターを設定します。現在の値は、ウィンドウが破棄されるまで保持されます。初期値は `NULL` です。

引数  
|        |         |                                  |
|--------|---------|----------------------------------|
| \[in\] | window  | ポインターを設定するウィンドウ。 |
| \[in\] | pointer | 新しい値。                   |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、任意のスレッドから呼び出せます。アクセスは同期されません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_userptr" class="el">ユーザーポインター</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gae77a4add0d2023ca21ff1443ced01653" class="el">glfwGetWindowUserPointer</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="gae77a4add0d2023ca21ff1443ced01653"></span>

## <span class="permalink">[◆ ](#gae77a4add0d2023ca21ff1443ced01653)</span>glfwGetWindowUserPointer()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void \* glfwGetWindowUserPointer | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのユーザー定義ポインターの現在値を返します。初期値は `NULL` です。

引数  
|        |        |                                     |
|--------|--------|-------------------------------------|
| \[in\] | window | ポインターを返すウィンドウ。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、任意のスレッドから呼び出せます。アクセスは同期されません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_userptr" class="el">ユーザーポインター</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3d2fc6026e690ab31a13f78bc9fd3651" class="el">glfwSetWindowUserPointer</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga08bdfbba88934f9c4f92fd757979ac74"></span>

## <span class="permalink">[◆ ](#ga08bdfbba88934f9c4f92fd757979ac74)</span>glfwSetWindowPosCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabe287973a21a8f927cde4db06b8dcbe9" class="el">GLFWwindowposfun</a> glfwSetWindowPosCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabe287973a21a8f927cde4db06b8dcbe9" class="el">GLFWwindowposfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウの位置コールバックを設定します。このコールバックは、ウィンドウが移動したときに呼び出されます。コールバックには、ウィンドウのコンテンツ領域の左上隅の位置がスクリーン座標で渡されます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | コールバックを設定するウィンドウ。 |
| \[in\] | callback | 新しいコールバック。現在設定されているコールバックを削除する場合は `NULL`。 |

<!-- -->

戻り値  
以前に設定されていたコールバック。コールバックが設定されていなかった場合、またはライブラリが<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化</a>されていなかった場合は `NULL`。

<!-- -->

コールバックのシグネチャ  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> xpos, <span class="keywordtype">int</span> ypos)

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabe287973a21a8f927cde4db06b8dcbe9" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

備考  
**Wayland:** このコールバックは呼び出されません。Wayland プロトコルには、ウィンドウの移動を通知する方法がありません。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_pos" class="el">ウィンドウ位置</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="gad91b8b047a0c4c6033c38853864c34f8"></span>

## <span class="permalink">[◆ ](#gad91b8b047a0c4c6033c38853864c34f8)</span>glfwSetWindowSizeCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaec0282944bb810f6f3163ec02da90350" class="el">GLFWwindowsizefun</a> glfwSetWindowSizeCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaec0282944bb810f6f3163ec02da90350" class="el">GLFWwindowsizefun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウの大きさコールバックを設定します。このコールバックは、ウィンドウの大きさが変更されたときに呼び出されます。コールバックには、ウィンドウのコンテンツ領域の大きさがスクリーン座標で渡されます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | コールバックを設定するウィンドウ。 |
| \[in\] | callback | 新しいコールバック。現在設定されているコールバックを削除する場合は `NULL`。 |

<!-- -->

戻り値  
以前に設定されていたコールバック。コールバックが設定されていなかった場合、またはライブラリが<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化</a>されていなかった場合は `NULL`。

<!-- -->

コールバックのシグネチャ  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> width, <span class="keywordtype">int</span> height)

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaec0282944bb810f6f3163ec02da90350" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_size" class="el">ウィンドウの大きさ</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。**GLFW 3:** ウィンドウハンドルの引数と戻り値が追加されました。

</div>

</div>

<span id="gada646d775a7776a95ac000cfc1885331"></span>

## <span class="permalink">[◆ ](#gada646d775a7776a95ac000cfc1885331)</span>glfwSetWindowCloseCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabf859b936d80961b7d39013a9694cc3e" class="el">GLFWwindowclosefun</a> glfwSetWindowCloseCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabf859b936d80961b7d39013a9694cc3e" class="el">GLFWwindowclosefun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウの終了コールバックを設定します。このコールバックは、たとえばタイトルバーの閉じるウィジェットをクリックするなど、ユーザーがウィンドウを閉じようとしたときに呼び出されます。

終了フラグは、このコールバックが呼び出される前に設定されますが、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga49c449dde2a6f87d996f4daaa09d6708" class="el">glfwSetWindowShouldClose</a> を使用すればいつでも変更できます。

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2" class="el">glfwDestroyWindow</a> では、終了コールバックは呼び出されません。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | コールバックを設定するウィンドウ。 |
| \[in\] | callback | 新しいコールバック。現在設定されているコールバックを削除する場合は `NULL`。 |

<!-- -->

戻り値  
以前に設定されていたコールバック。コールバックが設定されていなかった場合、またはライブラリが<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化</a>されていなかった場合は `NULL`。

<!-- -->

コールバックのシグネチャ  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window)

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabf859b936d80961b7d39013a9694cc3e" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

備考  
**macOS:** アプリケーションメニューから「終了」を選択すると、すべてのウィンドウの終了コールバックが呼び出されます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_close" class="el">ウィンドウの終了と終了フラグ</a>

<!-- -->

導入バージョン  
バージョン 2.5 で追加されました。**GLFW 3:** ウィンドウハンドルの引数と戻り値が追加されました。

</div>

</div>

<span id="ga1c5c7eb889c33c7f4d10dd35b327654e"></span>

## <span class="permalink">[◆ ](#ga1c5c7eb889c33c7f4d10dd35b327654e)</span>glfwSetWindowRefreshCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga431663a1427d2eb3a273bc398b6737b5" class="el">GLFWwindowrefreshfun</a> glfwSetWindowRefreshCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga431663a1427d2eb3a273bc398b6737b5" class="el">GLFWwindowrefreshfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウの再描画コールバックを設定します。このコールバックは、たとえば別のウィンドウに覆われていたウィンドウが露出した場合など、ウィンドウのコンテンツ領域を再描画する必要があるときに呼び出されます。

Aero、Compiz、Aqua、Wayland など、ウィンドウの内容が画面外に保存されるコンポジット型ウィンドウシステムでは、このコールバックはごくまれにしか呼び出されないか、まったく呼び出されないことがあります。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | コールバックを設定するウィンドウ。 |
| \[in\] | callback | 新しいコールバック。現在設定されているコールバックを削除する場合は `NULL`。 |

<!-- -->

戻り値  
以前に設定されていたコールバック。コールバックが設定されていなかった場合、またはライブラリが<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化</a>されていなかった場合は `NULL`。

<!-- -->

コールバックのシグネチャ  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window);

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga431663a1427d2eb3a273bc398b6737b5" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_refresh" class="el">ウィンドウの損傷と再描画</a>

<!-- -->

導入バージョン  
バージョン 2.5 で追加されました。**GLFW 3:** ウィンドウハンドルの引数と戻り値が追加されました。

</div>

</div>

<span id="gac2d83c4a10f071baf841f6730528e66c"></span>

## <span class="permalink">[◆ ](#gac2d83c4a10f071baf841f6730528e66c)</span>glfwSetWindowFocusCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabc58c47e9d93f6eb1862d615c3680f46" class="el">GLFWwindowfocusfun</a> glfwSetWindowFocusCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabc58c47e9d93f6eb1862d615c3680f46" class="el">GLFWwindowfocusfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのフォーカスコールバックを設定します。このコールバックは、ウィンドウが入力フォーカスを得たとき、または失ったときに呼び出されます。

入力フォーカスを失ったウィンドウについてフォーカスコールバックが呼び出された後、押されていたすべてのキーとマウスボタンに対して、合成された解放イベントが生成されます。詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga1caf18159767e761185e49a3be019f8d" class="el">glfwSetKeyCallback</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga6ab84420974d812bee700e45284a723c" class="el">glfwSetMouseButtonCallback</a> を参照してください。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | コールバックを設定するウィンドウ。 |
| \[in\] | callback | 新しいコールバック。現在設定されているコールバックを削除する場合は `NULL`。 |

<!-- -->

戻り値  
以前に設定されていたコールバック。コールバックが設定されていなかった場合、またはライブラリが<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化</a>されていなかった場合は `NULL`。

<!-- -->

コールバックのシグネチャ  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> focused)

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gabc58c47e9d93f6eb1862d615c3680f46" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_focus" class="el">ウィンドウの入力フォーカス</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="gac793e9efd255567b5fb8b445052cfd3e"></span>

## <span class="permalink">[◆ ](#gac793e9efd255567b5fb8b445052cfd3e)</span>glfwSetWindowIconifyCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga35c658cccba236f26e7adee0e25f6a4f" class="el">GLFWwindowiconifyfun</a> glfwSetWindowIconifyCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga35c658cccba236f26e7adee0e25f6a4f" class="el">GLFWwindowiconifyfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのアイコン化コールバックを設定します。このコールバックは、ウィンドウがアイコン化または復元されたときに呼び出されます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | コールバックを設定するウィンドウ。 |
| \[in\] | callback | 新しいコールバック。現在設定されているコールバックを削除する場合は `NULL`。 |

<!-- -->

戻り値  
以前に設定されていたコールバック。コールバックが設定されていなかった場合、またはライブラリが<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化</a>されていなかった場合は `NULL`。

<!-- -->

コールバックのシグネチャ  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> iconified)

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga35c658cccba236f26e7adee0e25f6a4f" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

備考  
**Wayland:** このコールバックは呼び出されません。Wayland プロトコルには、ウィンドウのアイコン化を通知する方法も、ウィンドウが現在アイコン化されているかを確認する方法もありません。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_iconify" class="el">ウィンドウのアイコン化</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="gacbe64c339fbd94885e62145563b6dc93"></span>

## <span class="permalink">[◆ ](#gacbe64c339fbd94885e62145563b6dc93)</span>glfwSetWindowMaximizeCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3017196fdaec33ac3e095765176c2a90" class="el">GLFWwindowmaximizefun</a> glfwSetWindowMaximizeCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3017196fdaec33ac3e095765176c2a90" class="el">GLFWwindowmaximizefun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウの最大化コールバックを設定します。このコールバックは、ウィンドウが最大化または復元されたときに呼び出されます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | コールバックを設定するウィンドウ。 |
| \[in\] | callback | 新しいコールバック。現在設定されているコールバックを削除する場合は `NULL`。 |

<!-- -->

戻り値  
以前に設定されていたコールバック。コールバックが設定されていなかった場合、またはライブラリが<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化</a>されていなかった場合は `NULL`。

<!-- -->

コールバックのシグネチャ  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> maximized)

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3017196fdaec33ac3e095765176c2a90" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_maximize" class="el">ウィンドウの最大化</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="gab3fb7c3366577daef18c0023e2a8591f"></span>

## <span class="permalink">[◆ ](#gab3fb7c3366577daef18c0023e2a8591f)</span>glfwSetFramebufferSizeCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gae18026e294dde685ed2e5f759533144d" class="el">GLFWframebuffersizefun</a> glfwSetFramebufferSizeCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gae18026e294dde685ed2e5f759533144d" class="el">GLFWframebuffersizefun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのフレームバッファサイズ変更コールバックを設定します。このコールバックは、指定されたウィンドウのフレームバッファの大きさが変更されたときに呼び出されます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | コールバックを設定するウィンドウ。 |
| \[in\] | callback | 新しいコールバック。現在設定されているコールバックを削除する場合は `NULL`。 |

<!-- -->

戻り値  
以前に設定されていたコールバック。コールバックが設定されていなかった場合、またはライブラリが<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化</a>されていなかった場合は `NULL`。

<!-- -->

コールバックのシグネチャ  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> width, <span class="keywordtype">int</span> height)

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gae18026e294dde685ed2e5f759533144d" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_fbsize" class="el">フレームバッファの大きさ</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="gaf2832ebb5aa6c252a2d261de002c92d6"></span>

## <span class="permalink">[◆ ](#gaf2832ebb5aa6c252a2d261de002c92d6)</span>glfwSetWindowContentScaleCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga77f288a2d04bb3c77c7d9615d08cf70e" class="el">GLFWwindowcontentscalefun</a> glfwSetWindowContentScaleCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga77f288a2d04bb3c77c7d9615d08cf70e" class="el">GLFWwindowcontentscalefun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのコンテンツスケールコールバックを設定します。このコールバックは、指定されたウィンドウのコンテンツスケールが変化したときに呼び出されます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | コールバックを設定するウィンドウ。 |
| \[in\] | callback | 新しいコールバック。現在設定されているコールバックを削除する場合は `NULL`。 |

<!-- -->

戻り値  
以前に設定されていたコールバック。コールバックが設定されていなかった場合、またはライブラリが<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化</a>されていなかった場合は `NULL`。

<!-- -->

コールバックのシグネチャ  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">float</span> xscale, <span class="keywordtype">float</span> yscale)

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga77f288a2d04bb3c77c7d9615d08cf70e" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_scale" class="el">ウィンドウのコンテンツスケール</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaf5d31de9c19c4f994facea64d2b3106c" class="el">glfwGetWindowContentScale</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

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

この関数は、イベントキューにすでに入っているイベントだけを処理し、直ちに戻ります。イベントを処理すると、それらのイベントに関連付けられたウィンドウおよび入力コールバックが呼び出されます。

一部のプラットフォームでは、ウィンドウの移動、大きさの変更、またはメニュー操作によって、イベント処理がブロックされます。これは、それらのプラットフォームにおけるイベント処理の設計によるものです。このような操作中に必要に応じてウィンドウの内容を再描画するには、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_refresh" class="el">ウィンドウ再描画コールバック</a>を使用できます。

設定したコールバックが、この関数のようなイベント処理関数への応答として*のみ*呼び出されるとは想定しないでください。イベントをポーリングする必要はありますが、GLFW 自身のコールバック登録を必要とするウィンドウシステムでは、多くのウィンドウシステム関数の呼び出しに応じて GLFW へイベントが渡されることがあります。GLFW は戻る前に、それらのイベントをアプリケーションのコールバックへ渡します。

ジョイスティック入力を受け取るためにイベント処理は必要ありません。ジョイスティック入力関数またはゲームパッド入力関数が呼び出されたときに、ジョイスティックの状態がポーリングされます。

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

再入可能性  
この関数は、コールバックから呼び出してはなりません。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#events" class="el">イベント処理</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga554e37d781f0a997656c26b2c56c835e" class="el">glfwWaitEvents</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga605a178db92f1a7f1a925563ef3ea2cf" class="el">glfwWaitEventsTimeout</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。

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

この関数は、イベントキューで少なくとも1つのイベントが利用可能になるまで、呼び出し元スレッドをスリープさせます。1つ以上のイベントが利用可能になると、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga37bd57223967b4211d60ca1a0bf3c832" class="el">glfwPollEvents</a> とまったく同じように動作します。つまり、キュー内のイベントを処理した後、関数は直ちに戻ります。イベントを処理すると、それらのイベントに関連付けられたウィンドウおよび入力コールバックが呼び出されます。

すべてのイベントがコールバックに関連付けられているわけではないため、すべてのコールバックを監視していても、コールバックが呼び出されないままこの関数が戻ることがあります。

一部のプラットフォームでは、ウィンドウの移動、大きさの変更、またはメニュー操作によって、イベント処理がブロックされます。これは、それらのプラットフォームにおけるイベント処理の設計によるものです。このような操作中に必要に応じてウィンドウの内容を再描画するには、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_refresh" class="el">ウィンドウ再描画コールバック</a>を使用できます。

設定したコールバックが、この関数のようなイベント処理関数への応答として*のみ*呼び出されるとは想定しないでください。イベントをポーリングする必要はありますが、GLFW 自身のコールバック登録を必要とするウィンドウシステムでは、多くのウィンドウシステム関数の呼び出しに応じて GLFW へイベントが渡されることがあります。GLFW は戻る前に、それらのイベントをアプリケーションのコールバックへ渡します。

ジョイスティック入力を受け取るためにイベント処理は必要ありません。ジョイスティック入力関数またはゲームパッド入力関数が呼び出されたときに、ジョイスティックの状態がポーリングされます。

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

再入可能性  
この関数は、コールバックから呼び出してはなりません。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#events" class="el">イベント処理</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga37bd57223967b4211d60ca1a0bf3c832" class="el">glfwPollEvents</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga605a178db92f1a7f1a925563ef3ea2cf" class="el">glfwWaitEventsTimeout</a>

<!-- -->

導入バージョン  
バージョン 2.5 で追加されました。

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

この関数は、イベントキューで少なくとも1つのイベントが利用可能になるか、指定されたタイムアウトに達するまで、呼び出し元スレッドをスリープさせます。1つ以上のイベントが利用可能になると、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga37bd57223967b4211d60ca1a0bf3c832" class="el">glfwPollEvents</a> とまったく同じように動作します。つまり、キュー内のイベントを処理した後、関数は直ちに戻ります。イベントを処理すると、それらのイベントに関連付けられたウィンドウおよび入力コールバックが呼び出されます。

タイムアウト値は、正の有限数でなければなりません。

すべてのイベントがコールバックに関連付けられているわけではないため、すべてのコールバックを監視していても、コールバックが呼び出されないままこの関数が戻ることがあります。

一部のプラットフォームでは、ウィンドウの移動、大きさの変更、またはメニュー操作によって、イベント処理がブロックされます。これは、それらのプラットフォームにおけるイベント処理の設計によるものです。このような操作中に必要に応じてウィンドウの内容を再描画するには、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_refresh" class="el">ウィンドウ再描画コールバック</a>を使用できます。

設定したコールバックが、この関数のようなイベント処理関数への応答として*のみ*呼び出されるとは想定しないでください。イベントをポーリングする必要はありますが、GLFW 自身のコールバック登録を必要とするウィンドウシステムでは、多くのウィンドウシステム関数の呼び出しに応じて GLFW へイベントが渡されることがあります。GLFW は戻る前に、それらのイベントをアプリケーションのコールバックへ渡します。

ジョイスティック入力を受け取るためにイベント処理は必要ありません。ジョイスティック入力関数またはゲームパッド入力関数が呼び出されたときに、ジョイスティックの状態がポーリングされます。

引数  
|        |         |                                                  |
|--------|---------|--------------------------------------------------|
| \[in\] | timeout | 待機する最大時間（秒）。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>、および <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

再入可能性  
この関数は、コールバックから呼び出してはなりません。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#events" class="el">イベント処理</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga37bd57223967b4211d60ca1a0bf3c832" class="el">glfwPollEvents</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga554e37d781f0a997656c26b2c56c835e" class="el">glfwWaitEvents</a>

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

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

この関数は、現在のスレッドからイベントキューへ空のイベントを送信し、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga554e37d781f0a997656c26b2c56c835e" class="el">glfwWaitEvents</a> または <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga605a178db92f1a7f1a925563ef3ea2cf" class="el">glfwWaitEventsTimeout</a> を戻らせます。

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、任意のスレッドから呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#events" class="el">イベント処理</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga554e37d781f0a997656c26b2c56c835e" class="el">glfwWaitEvents</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga605a178db92f1a7f1a925563ef3ea2cf" class="el">glfwWaitEventsTimeout</a>

<!-- -->

導入バージョン  
バージョン 3.1 で追加されました。

</div>

</div>

<span id="ga15a5a1ee5b3c2ca6b15ca209a12efd14"></span>

## <span class="permalink">[◆ ](#ga15a5a1ee5b3c2ca6b15ca209a12efd14)</span>glfwSwapBuffers()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwSwapBuffers | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

この関数は、OpenGL または OpenGL ES でレンダリングするとき、指定されたウィンドウのフロントバッファとバックバッファを交換します。スワップ間隔がゼロより大きい場合、GPU ドライバーは指定された回数の画面更新を待ってからバッファを交換します。

指定されたウィンドウは、OpenGL または OpenGL ES コンテキストを持っていなければなりません。コンテキストのないウィンドウを指定すると、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> エラーが発生します。

この関数は Vulkan には適用されません。Vulkan でレンダリングする場合は、代わりに `vkQueuePresentKHR` を参照してください。

引数  
|        |        |                                   |
|--------|--------|-----------------------------------|
| \[in\] | window | バッファを交換するウィンドウ。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a>、および <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
**Wayland:** スワップ間隔がゼロより大きく、ウィンドウが表示範囲内にない場合、この関数が戻るまでに数ミリ秒余分にかかることがあります。

**EGL:** 指定されたウィンドウのコンテキストは、呼び出し元スレッドでカレントになっていなければなりません。

<!-- -->

スレッドセーフ性  
この関数は、任意のスレッドから呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#buffer_swap" class="el">バッファの交換</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga6d4e0cdf151b5e579bd67f13202994ed" class="el">glfwSwapInterval</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。**GLFW 3:** ウィンドウハンドルの引数が追加されました。

</div>

</div>
