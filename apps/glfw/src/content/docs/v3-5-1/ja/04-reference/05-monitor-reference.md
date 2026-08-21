---
title: "モニターリファレンス"
description: "GLFW 3.5.1 モニターリファレンス"
---

<span id="details"></span>

## 説明

これは、モニター関連の関数と型に関するリファレンスドキュメントです。作業手順を中心とした情報については、<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/" class="el">モニターガイド</a>を参照してください。

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="typedefs" class="groupheader"><span id="typedef-members"></span> 型定義</h2></td>
</tr>
<tr id="r_ga8d9efd1cde9426692c73fe40437d0ae3" class="memitem:ga8d9efd1cde9426692c73fe40437d0ae3">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef struct <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a></td>
</tr>
<tr class="memdesc:ga8d9efd1cde9426692c73fe40437d0ae3">
<td class="mdescLeft"> </td>
<td class="mdescRight">不透明なモニターオブジェクト。<br />
</td>
</tr>
<tr class="separator:ga8d9efd1cde9426692c73fe40437d0ae3">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaabe16caca8dea952504dfdebdf4cd249" class="memitem:gaabe16caca8dea952504dfdebdf4cd249">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gaabe16caca8dea952504dfdebdf4cd249" class="el">GLFWmonitorfun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, int event)</td>
</tr>
<tr class="memdesc:gaabe16caca8dea952504dfdebdf4cd249">
<td class="mdescLeft"> </td>
<td class="mdescRight">モニター構成コールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:gaabe16caca8dea952504dfdebdf4cd249">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga902c2816ac9b34b757282daab59b2565" class="memitem:ga902c2816ac9b34b757282daab59b2565">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef struct <a href="/docs/glfw/v3-5-1/ja/04-reference/21-glfwvidmode/" class="el">GLFWvidmode</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga902c2816ac9b34b757282daab59b2565" class="el">GLFWvidmode</a></td>
</tr>
<tr class="memdesc:ga902c2816ac9b34b757282daab59b2565">
<td class="mdescLeft"> </td>
<td class="mdescRight">ビデオモード型。<br />
</td>
</tr>
<tr class="separator:ga902c2816ac9b34b757282daab59b2565">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga939cf093cb0af0498b7b54dc2e181404" class="memitem:ga939cf093cb0af0498b7b54dc2e181404">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef struct <a href="/docs/glfw/v3-5-1/ja/04-reference/19-glfwgammaramp/" class="el">GLFWgammaramp</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga939cf093cb0af0498b7b54dc2e181404" class="el">GLFWgammaramp</a></td>
</tr>
<tr class="memdesc:ga939cf093cb0af0498b7b54dc2e181404">
<td class="mdescLeft"> </td>
<td class="mdescRight">ガンマランプ。<br />
</td>
</tr>
<tr class="separator:ga939cf093cb0af0498b7b54dc2e181404">
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
<tr id="r_ga70b1156d5d24e9928f145d6c864369d2" class="memitem:ga70b1156d5d24e9928f145d6c864369d2">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> ** </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga70b1156d5d24e9928f145d6c864369d2" class="el">glfwGetMonitors</a> (int *count)</td>
</tr>
<tr class="memdesc:ga70b1156d5d24e9928f145d6c864369d2">
<td class="mdescLeft"> </td>
<td class="mdescRight">現在接続されているモニターを返します。<br />
</td>
</tr>
<tr class="separator:ga70b1156d5d24e9928f145d6c864369d2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac3adb24947eb709e1874028272e5dfc5" class="memitem:gac3adb24947eb709e1874028272e5dfc5">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gac3adb24947eb709e1874028272e5dfc5" class="el">glfwGetPrimaryMonitor</a> (void)</td>
</tr>
<tr class="memdesc:gac3adb24947eb709e1874028272e5dfc5">
<td class="mdescLeft"> </td>
<td class="mdescRight">プライマリモニターを返します。<br />
</td>
</tr>
<tr class="separator:gac3adb24947eb709e1874028272e5dfc5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga102f54e7acc9149edbcf0997152df8c9" class="memitem:ga102f54e7acc9149edbcf0997152df8c9">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga102f54e7acc9149edbcf0997152df8c9" class="el">glfwGetMonitorPos</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, int *xpos, int *ypos)</td>
</tr>
<tr class="memdesc:ga102f54e7acc9149edbcf0997152df8c9">
<td class="mdescLeft"> </td>
<td class="mdescRight">仮想スクリーン上のモニターのビューポート位置を返します。<br />
</td>
</tr>
<tr class="separator:ga102f54e7acc9149edbcf0997152df8c9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0" class="memitem:ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0" class="el">glfwGetMonitorWorkarea</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, int *xpos, int *ypos, int *width, int *height)</td>
</tr>
<tr class="memdesc:ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0">
<td class="mdescLeft"> </td>
<td class="mdescRight">モニターの作業領域を取得します。<br />
</td>
</tr>
<tr class="separator:ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7d8bffc6c55539286a6bd20d32a8d7ea" class="memitem:ga7d8bffc6c55539286a6bd20d32a8d7ea">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga7d8bffc6c55539286a6bd20d32a8d7ea" class="el">glfwGetMonitorPhysicalSize</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, int *widthMM, int *heightMM)</td>
</tr>
<tr class="memdesc:ga7d8bffc6c55539286a6bd20d32a8d7ea">
<td class="mdescLeft"> </td>
<td class="mdescRight">モニターの物理的な大きさを返します。<br />
</td>
</tr>
<tr class="separator:ga7d8bffc6c55539286a6bd20d32a8d7ea">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad3152e84465fa620b601265ebfcdb21b" class="memitem:gad3152e84465fa620b601265ebfcdb21b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gad3152e84465fa620b601265ebfcdb21b" class="el">glfwGetMonitorContentScale</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, float *xscale, float *yscale)</td>
</tr>
<tr class="memdesc:gad3152e84465fa620b601265ebfcdb21b">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたモニターのコンテンツスケールを取得します。<br />
</td>
</tr>
<tr class="separator:gad3152e84465fa620b601265ebfcdb21b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7af83e13489d90379588fb331b9e4b68" class="memitem:ga7af83e13489d90379588fb331b9e4b68">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga7af83e13489d90379588fb331b9e4b68" class="el">glfwGetMonitorName</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:ga7af83e13489d90379588fb331b9e4b68">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたモニターの名前を返します。<br />
</td>
</tr>
<tr class="separator:ga7af83e13489d90379588fb331b9e4b68">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga702750e24313a686d3637297b6e85fda" class="memitem:ga702750e24313a686d3637297b6e85fda">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga702750e24313a686d3637297b6e85fda" class="el">glfwSetMonitorUserPointer</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, void *pointer)</td>
</tr>
<tr class="memdesc:ga702750e24313a686d3637297b6e85fda">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたモニターのユーザーポインターを設定します。<br />
</td>
</tr>
<tr class="separator:ga702750e24313a686d3637297b6e85fda">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1adbfbfb8cd58b23cfee82e574fbbdc5" class="memitem:ga1adbfbfb8cd58b23cfee82e574fbbdc5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga1adbfbfb8cd58b23cfee82e574fbbdc5" class="el">glfwGetMonitorUserPointer</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:ga1adbfbfb8cd58b23cfee82e574fbbdc5">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたモニターのユーザーポインターを返します。<br />
</td>
</tr>
<tr class="separator:ga1adbfbfb8cd58b23cfee82e574fbbdc5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab39df645587c8518192aa746c2fb06c3" class="memitem:gab39df645587c8518192aa746c2fb06c3">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gaabe16caca8dea952504dfdebdf4cd249" class="el">GLFWmonitorfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gab39df645587c8518192aa746c2fb06c3" class="el">glfwSetMonitorCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gaabe16caca8dea952504dfdebdf4cd249" class="el">GLFWmonitorfun</a> callback)</td>
</tr>
<tr class="memdesc:gab39df645587c8518192aa746c2fb06c3">
<td class="mdescLeft"> </td>
<td class="mdescRight">モニター構成コールバックを設定します。<br />
</td>
</tr>
<tr class="separator:gab39df645587c8518192aa746c2fb06c3">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad2e24d2843cb7d6c26202cddd530fc1b" class="memitem:gad2e24d2843cb7d6c26202cddd530fc1b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const <a href="/docs/glfw/v3-5-1/ja/04-reference/21-glfwvidmode/" class="el">GLFWvidmode</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gad2e24d2843cb7d6c26202cddd530fc1b" class="el">glfwGetVideoModes</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, int *count)</td>
</tr>
<tr class="memdesc:gad2e24d2843cb7d6c26202cddd530fc1b">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたモニターで利用可能なビデオモードを返します。<br />
</td>
</tr>
<tr class="separator:gad2e24d2843cb7d6c26202cddd530fc1b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaba376fa7e76634b4788bddc505d6c9d5" class="memitem:gaba376fa7e76634b4788bddc505d6c9d5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const <a href="/docs/glfw/v3-5-1/ja/04-reference/21-glfwvidmode/" class="el">GLFWvidmode</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gaba376fa7e76634b4788bddc505d6c9d5" class="el">glfwGetVideoMode</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:gaba376fa7e76634b4788bddc505d6c9d5">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたモニターの現在のモードを返します。<br />
</td>
</tr>
<tr class="separator:gaba376fa7e76634b4788bddc505d6c9d5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6ac582625c990220785ddd34efa3169a" class="memitem:ga6ac582625c990220785ddd34efa3169a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga6ac582625c990220785ddd34efa3169a" class="el">glfwSetGamma</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, float gamma)</td>
</tr>
<tr class="memdesc:ga6ac582625c990220785ddd34efa3169a">
<td class="mdescLeft"> </td>
<td class="mdescRight">ガンマランプを生成し、指定されたモニターへ設定します。<br />
</td>
</tr>
<tr class="separator:ga6ac582625c990220785ddd34efa3169a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga76ba90debcf0062b5c4b73052b24f96f" class="memitem:ga76ba90debcf0062b5c4b73052b24f96f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const <a href="/docs/glfw/v3-5-1/ja/04-reference/19-glfwgammaramp/" class="el">GLFWgammaramp</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga76ba90debcf0062b5c4b73052b24f96f" class="el">glfwGetGammaRamp</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:ga76ba90debcf0062b5c4b73052b24f96f">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたモニターの現在のガンマランプを返します。<br />
</td>
</tr>
<tr class="separator:ga76ba90debcf0062b5c4b73052b24f96f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga583f0ffd0d29613d8cd172b996bbf0dd" class="memitem:ga583f0ffd0d29613d8cd172b996bbf0dd">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga583f0ffd0d29613d8cd172b996bbf0dd" class="el">glfwSetGammaRamp</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, const <a href="/docs/glfw/v3-5-1/ja/04-reference/19-glfwgammaramp/" class="el">GLFWgammaramp</a> *ramp)</td>
</tr>
<tr class="memdesc:ga583f0ffd0d29613d8cd172b996bbf0dd">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたモニターの現在のガンマランプを設定します。<br />
</td>
</tr>
<tr class="separator:ga583f0ffd0d29613d8cd172b996bbf0dd">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## 型定義の詳細

<span id="ga8d9efd1cde9426692c73fe40437d0ae3"></span>

## <span class="permalink">[◆ ](#ga8d9efd1cde9426692c73fe40437d0ae3)</span>GLFWmonitor

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef struct <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> |

</div>

<div class="memdoc">

不透明なモニターオブジェクトです。

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_object" class="el">モニターオブジェクト</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="gaabe16caca8dea952504dfdebdf4cd249"></span>

## <span class="permalink">[◆ ](#gaabe16caca8dea952504dfdebdf4cd249)</span>GLFWmonitorfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWmonitorfun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*monitor, int event) |

</div>

<div class="memdoc">

これは、モニター構成コールバックの関数ポインター型です。モニターコールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="code hl_typedef">GLFWmonitor</a>\* monitor, <span class="keywordtype">int</span> event)

</div>

<div id="agroup__monitor_html_ga8d9efd1cde9426692c73fe40437d0ae3" class="ttc">

<div class="ttname">

[GLFWmonitor](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3)

</div>

<div class="ttdeci">

struct GLFWmonitor GLFWmonitor

</div>

<div class="ttdoc">

不透明なモニターオブジェクトです。

</div>

<div class="ttdef">

**定義** glfw3.h:1396

</div>

</div>

</div>

引数  
|  |  |  |
|----|----|----|
| \[in\] | monitor | 接続または切断されたモニター。 |
| \[in\] | event | `GLFW_CONNECTED` または `GLFW_DISCONNECTED` のいずれか。将来のリリースでイベントが追加される可能性があります。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_event" class="el">モニター構成の変更</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gab39df645587c8518192aa746c2fb06c3" class="el">glfwSetMonitorCallback</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga902c2816ac9b34b757282daab59b2565"></span>

## <span class="permalink">[◆ ](#ga902c2816ac9b34b757282daab59b2565)</span>GLFWvidmode

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef struct <a href="/docs/glfw/v3-5-1/ja/04-reference/21-glfwvidmode/" class="el">GLFWvidmode</a> <a href="/docs/glfw/v3-5-1/ja/04-reference/21-glfwvidmode/" class="el">GLFWvidmode</a> |

</div>

<div class="memdoc">

これは、1つのビデオモードを表します。

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_modes" class="el">ビデオモード</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gaba376fa7e76634b4788bddc505d6c9d5" class="el">glfwGetVideoMode</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gad2e24d2843cb7d6c26202cddd530fc1b" class="el">glfwGetVideoModes</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。**GLFW 3:** リフレッシュレートのメンバーが追加されました。

</div>

</div>

<span id="ga939cf093cb0af0498b7b54dc2e181404"></span>

## <span class="permalink">[◆ ](#ga939cf093cb0af0498b7b54dc2e181404)</span>GLFWgammaramp

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef struct <a href="/docs/glfw/v3-5-1/ja/04-reference/19-glfwgammaramp/" class="el">GLFWgammaramp</a> <a href="/docs/glfw/v3-5-1/ja/04-reference/19-glfwgammaramp/" class="el">GLFWgammaramp</a> |

</div>

<div class="memdoc">

これは、モニターのガンマランプを表します。

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_gamma" class="el">ガンマランプ</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga76ba90debcf0062b5c4b73052b24f96f" class="el">glfwGetGammaRamp</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga583f0ffd0d29613d8cd172b996bbf0dd" class="el">glfwSetGammaRamp</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

## 関数の詳細

<span id="ga70b1156d5d24e9928f145d6c864369d2"></span>

## <span class="permalink">[◆ ](#ga70b1156d5d24e9928f145d6c864369d2)</span>glfwGetMonitors()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*\* glfwGetMonitors | ( | int \*  | *count* | ) |  |

</div>

<div class="memdoc">

この関数は、現在接続されているすべてのモニターのハンドル配列を返します。返される配列では、プライマリモニターが常に先頭です。モニターが見つからなかった場合、この関数は `NULL` を返します。

引数  
|  |  |  |
|----|----|----|
| \[out\] | count | 返される配列内のモニター数を格納する場所。エラーが発生した場合はゼロに設定されます。 |

<!-- -->

戻り値  
モニターハンドルの配列。モニターが見つからなかった場合、または<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

ポインターの有効期間  
返される配列は GLFW が割り当て、解放します。自分で解放しないでください。モニター構成が変更されるか、ライブラリが終了するまでのみ有効であることが保証されます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_monitors" class="el">モニターの取得</a>

<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_event" class="el">モニター構成の変更</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gac3adb24947eb709e1874028272e5dfc5" class="el">glfwGetPrimaryMonitor</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="gac3adb24947eb709e1874028272e5dfc5"></span>

## <span class="permalink">[◆ ](#gac3adb24947eb709e1874028272e5dfc5)</span>glfwGetPrimaryMonitor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \* glfwGetPrimaryMonitor | ( | void  |  | ) |  |

</div>

<div class="memdoc">

この関数はプライマリモニターを返します。通常、これはタスクバーやグローバルメニューバーなどの要素が配置されているモニターです。

戻り値  
プライマリモニター。モニターが見つからなかった場合、または<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

備考  
<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga70b1156d5d24e9928f145d6c864369d2" class="el">glfwGetMonitors</a> が返す配列では、プライマリモニターが常に先頭です。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_monitors" class="el">モニターの取得</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga70b1156d5d24e9928f145d6c864369d2" class="el">glfwGetMonitors</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga102f54e7acc9149edbcf0997152df8c9"></span>

## <span class="permalink">[◆ ](#ga102f54e7acc9149edbcf0997152df8c9)</span>glfwGetMonitorPos()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetMonitorPos | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | int \*  | *xpos*, |
|  |  | int \*  | *ypos*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたモニターの左上隅の位置をスクリーン座標で返します。

位置を受け取る引数は、一部またはすべてを `NULL` にできます。エラーが発生した場合、`NULL` でない位置の引数はすべてゼロに設定されます。

引数  
|         |         |                                                     |
|---------|---------|-----------------------------------------------------|
| \[in\]  | monitor | 照会するモニター。                               |
| \[out\] | xpos    | モニターの X 座標を格納する場所、または `NULL`。 |
| \[out\] | ypos    | モニターの Y 座標を格納する場所、または `NULL`。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_properties" class="el">モニターのプロパティ</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0"></span>

## <span class="permalink">[◆ ](#ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0)</span>glfwGetMonitorWorkarea()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetMonitorWorkarea | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | int \*  | *xpos*, |
|  |  | int \*  | *ypos*, |
|  |  | int \*  | *width*, |
|  |  | int \*  | *height*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたモニターの作業領域の左上隅の位置と作業領域の大きさを、スクリーン座標で返します。作業領域は、ウィンドウシステムのタスクバーが存在する場合に、それによって覆われていないモニター領域として定義されます。タスクバーが存在しない場合、作業領域はスクリーン座標で表したモニター解像度です。

位置と大きさを受け取る引数は、一部またはすべてを `NULL` にできます。エラーが発生した場合、`NULL` でない位置と大きさの引数はすべてゼロに設定されます。

引数  
|         |         |                                                     |
|---------|---------|-----------------------------------------------------|
| \[in\]  | monitor | 照会するモニター。                               |
| \[out\] | xpos    | モニターの X 座標を格納する場所、または `NULL`。 |
| \[out\] | ypos    | モニターの Y 座標を格納する場所、または `NULL`。 |
| \[out\] | width   | モニターの幅を格納する場所、または `NULL`。        |
| \[out\] | height  | モニターの高さを格納する場所、または `NULL`。       |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_workarea" class="el">作業領域</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="ga7d8bffc6c55539286a6bd20d32a8d7ea"></span>

## <span class="permalink">[◆ ](#ga7d8bffc6c55539286a6bd20d32a8d7ea)</span>glfwGetMonitorPhysicalSize()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetMonitorPhysicalSize | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | int \*  | *widthMM*, |
|  |  | int \*  | *heightMM*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたモニターの表示領域の大きさをミリメートル単位で返します。

一部のプラットフォームでは、モニターの [EDID](https://en.wikipedia.org/wiki/Extended_display_identification_data) データが誤っているか、ドライバーが正確に報告しないため、正確なモニターサイズ情報が提供されません。

大きさを受け取る引数は、一部またはすべてを `NULL` にできます。エラーが発生した場合、`NULL` でない大きさの引数はすべてゼロに設定されます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | monitor | 照会するモニター。 |
| \[out\] | widthMM | モニター表示領域の幅をミリメートル単位で格納する場所、または `NULL`。 |
| \[out\] | heightMM | モニター表示領域の高さをミリメートル単位で格納する場所、または `NULL`。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

備考  
**Win32:** Windows 8 以前では、モニターの EDID データを照会する代わりに、現在の解像度とシステム DPI から物理的な大きさを計算します。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_properties" class="el">モニターのプロパティ</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="gad3152e84465fa620b601265ebfcdb21b"></span>

## <span class="permalink">[◆ ](#gad3152e84465fa620b601265ebfcdb21b)</span>glfwGetMonitorContentScale()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetMonitorContentScale | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | float \*  | *xscale*, |
|  |  | float \*  | *yscale*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたモニターのコンテンツスケールを取得します。コンテンツスケールは、現在の DPI とプラットフォームの既定の DPI との比率です。これは、テキストやあらゆる UI 要素で特に重要です。この値で拡大縮小した UI のピクセル寸法が使用中のマシンで適切に見えるなら、他のマシンでも、その DPI やスケーリング設定にかかわらず妥当な大きさで表示されるはずです。これは、システムの DPI とスケーリング設定がある程度正しいことを前提とします。

コンテンツスケールは、モニターの解像度とピクセル密度、およびユーザー設定の両方に依存することがあります。物理的な大きさと現在の解像度から計算した生の DPI とは大きく異なる場合があります。

引数  
|         |         |                                                     |
|---------|---------|-----------------------------------------------------|
| \[in\]  | monitor | 照会するモニター。                               |
| \[out\] | xscale  | X 軸方向のコンテンツスケールを格納する場所、または `NULL`。 |
| \[out\] | yscale  | Y 軸方向のコンテンツスケールを格納する場所、または `NULL`。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
**Wayland:** モニターの小数スケーリング情報はまだ利用できないため、この関数は整数のコンテンツスケールだけを返します。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_scale" class="el">コンテンツスケール</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaf5d31de9c19c4f994facea64d2b3106c" class="el">glfwGetWindowContentScale</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="ga7af83e13489d90379588fb331b9e4b68"></span>

## <span class="permalink">[◆ ](#ga7af83e13489d90379588fb331b9e4b68)</span>glfwGetMonitorName()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| const char \* glfwGetMonitorName | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

この関数は、指定されたモニターの人間が読める名前を UTF-8 エンコードで返します。この名前は通常、モニターのメーカーとモデルを反映しますが、接続されているモニター間で一意であることは保証されません。

引数  
|        |         |                       |
|--------|---------|-----------------------|
| \[in\] | monitor | 照会するモニター。 |

<!-- -->

戻り値  
UTF-8 でエンコードされたモニター名。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

ポインターの有効期間  
返される文字列は GLFW が割り当て、解放します。自分で解放しないでください。指定されたモニターが切断されるか、ライブラリが終了するまで有効です。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_properties" class="el">モニターのプロパティ</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga702750e24313a686d3637297b6e85fda"></span>

## <span class="permalink">[◆ ](#ga702750e24313a686d3637297b6e85fda)</span>glfwSetMonitorUserPointer()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetMonitorUserPointer | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | void \*  | *pointer*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたモニターのユーザー定義ポインターを設定します。現在の値は、モニターが切断されるまで保持されます。初期値は `NULL` です。

この関数は、切断処理中のモニターに対しても、モニターコールバックから呼び出せます。

引数  
|        |         |                                   |
|--------|---------|-----------------------------------|
| \[in\] | monitor | ポインターを設定するモニター。 |
| \[in\] | pointer | 新しい値。                    |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、任意のスレッドから呼び出せます。アクセスは同期されません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_userptr" class="el">ユーザーポインター</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga1adbfbfb8cd58b23cfee82e574fbbdc5" class="el">glfwGetMonitorUserPointer</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="ga1adbfbfb8cd58b23cfee82e574fbbdc5"></span>

## <span class="permalink">[◆ ](#ga1adbfbfb8cd58b23cfee82e574fbbdc5)</span>glfwGetMonitorUserPointer()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void \* glfwGetMonitorUserPointer | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

この関数は、指定されたモニターのユーザー定義ポインターの現在値を返します。初期値は `NULL` です。

この関数は、切断処理中のモニターに対しても、モニターコールバックから呼び出せます。

引数  
|        |         |                                      |
|--------|---------|--------------------------------------|
| \[in\] | monitor | ポインターを返すモニター。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、任意のスレッドから呼び出せます。アクセスは同期されません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_userptr" class="el">ユーザーポインター</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga702750e24313a686d3637297b6e85fda" class="el">glfwSetMonitorUserPointer</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="gab39df645587c8518192aa746c2fb06c3"></span>

## <span class="permalink">[◆ ](#gab39df645587c8518192aa746c2fb06c3)</span>glfwSetMonitorCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gaabe16caca8dea952504dfdebdf4cd249" class="el">GLFWmonitorfun</a> glfwSetMonitorCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gaabe16caca8dea952504dfdebdf4cd249" class="el">GLFWmonitorfun</a>  | *callback* | ) |  |

</div>

<div class="memdoc">

この関数は、モニター構成コールバックを設定するか、現在設定されているコールバックを削除します。このコールバックは、モニターがシステムへ接続されたとき、またはシステムから切断されたときに呼び出されます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | callback | 新しいコールバック。現在設定されているコールバックを削除する場合は `NULL`。 |

<!-- -->

戻り値  
以前に設定されていたコールバック。コールバックが設定されていなかった場合、またはライブラリが<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化</a>されていなかった場合は `NULL`。

<!-- -->

コールバックのシグネチャ  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="code hl_typedef">GLFWmonitor</a>\* monitor, <span class="keywordtype">int</span> event)

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gaabe16caca8dea952504dfdebdf4cd249" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_event" class="el">モニター構成の変更</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="gad2e24d2843cb7d6c26202cddd530fc1b"></span>

## <span class="permalink">[◆ ](#gad2e24d2843cb7d6c26202cddd530fc1b)</span>glfwGetVideoModes()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| const <a href="/docs/glfw/v3-5-1/ja/04-reference/21-glfwvidmode/" class="el">GLFWvidmode</a> \* glfwGetVideoModes | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | int \*  | *count*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたモニターがサポートするすべてのビデオモードの配列を返します。返される配列は、まず色ビット深度（すべてのチャンネル深度の合計）、次に解像度の面積（幅と高さの積）、続いて解像度の幅、最後にリフレッシュレートの昇順で並びます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | monitor | 照会するモニター。 |
| \[out\] | count | 返される配列内のビデオモード数を格納する場所。エラーが発生した場合はゼロに設定されます。 |

<!-- -->

戻り値  
ビデオモードの配列。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

ポインターの有効期間  
返される配列は GLFW が割り当て、解放します。自分で解放しないでください。指定されたモニターが切断されるか、そのモニターについてこの関数が再び呼び出されるか、ライブラリが終了するまで有効です。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_modes" class="el">ビデオモード</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gaba376fa7e76634b4788bddc505d6c9d5" class="el">glfwGetVideoMode</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。**GLFW 3:** 特定のモニターのモード配列を返すように変更されました。

</div>

</div>

<span id="gaba376fa7e76634b4788bddc505d6c9d5"></span>

## <span class="permalink">[◆ ](#gaba376fa7e76634b4788bddc505d6c9d5)</span>glfwGetVideoMode()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| const <a href="/docs/glfw/v3-5-1/ja/04-reference/21-glfwvidmode/" class="el">GLFWvidmode</a> \* glfwGetVideoMode | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

この関数は、指定されたモニターの現在のビデオモードを返します。そのモニターにフルスクリーンウィンドウを作成している場合、戻り値はそのウィンドウがアイコン化されているかどうかによって決まります。

引数  
|        |         |                       |
|--------|---------|-----------------------|
| \[in\] | monitor | 照会するモニター。 |

<!-- -->

戻り値  
モニターの現在のモード。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

ポインターの有効期間  
返される配列は GLFW が割り当て、解放します。自分で解放しないでください。指定されたモニターが切断されるか、ライブラリが終了するまで有効です。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_modes" class="el">ビデオモード</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gad2e24d2843cb7d6c26202cddd530fc1b" class="el">glfwGetVideoModes</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。`glfwGetDesktopMode` を置き換えます。

</div>

</div>

<span id="ga6ac582625c990220785ddd34efa3169a"></span>

## <span class="permalink">[◆ ](#ga6ac582625c990220785ddd34efa3169a)</span>glfwSetGamma()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetGamma | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | float  | *gamma*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定された指数から適切な大きさのガンマランプを生成し、それを指定して <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga583f0ffd0d29613d8cd172b996bbf0dd" class="el">glfwSetGammaRamp</a> を呼び出します。値はゼロより大きい有限数でなければなりません。

ソフトウェア制御のガンマランプは、現在では通常 sRGB ガンマの近似であるハードウェアガンマ補正に*加えて*適用されます。つまり、完全に線形なランプ、すなわちガンマ 1.0 を設定すると、既定の（通常は sRGB に似た）動作になります。

OpenGL または OpenGL ES でガンマ補正されたレンダリングを行うには、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_SRGB_CAPABLE" class="el">GLFW_SRGB_CAPABLE</a> ヒントを参照してください。

引数  
|        |         |                                      |
|--------|---------|--------------------------------------|
| \[in\] | monitor | ガンマランプを設定するモニター。 |
| \[in\] | gamma   | 要求する指数。                |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>、および <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>（備考を参照）があります。

<!-- -->

備考  
**Wayland:** モニターガンマは特権プロトコルであるため、この関数は実装できず、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> を発生させます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_gamma" class="el">ガンマランプ</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga76ba90debcf0062b5c4b73052b24f96f"></span>

## <span class="permalink">[◆ ](#ga76ba90debcf0062b5c4b73052b24f96f)</span>glfwGetGammaRamp()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| const <a href="/docs/glfw/v3-5-1/ja/04-reference/19-glfwgammaramp/" class="el">GLFWgammaramp</a> \* glfwGetGammaRamp | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

この関数は、指定されたモニターの現在のガンマランプを返します。

引数  
|        |         |                       |
|--------|---------|-----------------------|
| \[in\] | monitor | 照会するモニター。 |

<!-- -->

戻り値  
現在のガンマランプ。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>、および <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>（備考を参照）があります。

<!-- -->

備考  
**Wayland:** モニターガンマは特権プロトコルであるため、この関数は実装できず、`NULL` を返しながら <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> を発生させます。

<!-- -->

ポインターの有効期間  
返される構造体とその配列は GLFW が割り当て、解放します。自分で解放しないでください。指定されたモニターが切断されるか、そのモニターについてこの関数が再び呼び出されるか、ライブラリが終了するまで有効です。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_gamma" class="el">ガンマランプ</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga583f0ffd0d29613d8cd172b996bbf0dd"></span>

## <span class="permalink">[◆ ](#ga583f0ffd0d29613d8cd172b996bbf0dd)</span>glfwSetGammaRamp()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetGammaRamp | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | const <a href="/docs/glfw/v3-5-1/ja/04-reference/19-glfwgammaramp/" class="el">GLFWgammaramp</a> \*  | *ramp*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたモニターの現在のガンマランプを設定します。そのモニターの元のガンマランプは、この関数が最初に呼び出されたときに GLFW によって保存され、<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a> によって復元されます。

ソフトウェア制御のガンマランプは、現在では通常 sRGB ガンマの近似であるハードウェアガンマ補正に*加えて*適用されます。つまり、完全に線形なランプ、すなわちガンマ 1.0 を設定すると、既定の（通常は sRGB に似た）動作になります。

OpenGL または OpenGL ES でガンマ補正されたレンダリングを行うには、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_SRGB_CAPABLE" class="el">GLFW_SRGB_CAPABLE</a> ヒントを参照してください。

引数  
|        |         |                                      |
|--------|---------|--------------------------------------|
| \[in\] | monitor | ガンマランプを設定するモニター。 |
| \[in\] | ramp    | 使用するガンマランプ。               |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>、および <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>（備考を参照）があります。

<!-- -->

備考  
指定するガンマランプの大きさは、そのモニターの現在のランプの大きさと一致させるべきです。

**Win32:** ガンマランプの大きさは 256 でなければなりません。

**Wayland:** モニターガンマは特権プロトコルであるため、この関数は実装できず、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> を発生させます。

<!-- -->

ポインターの有効期間  
指定されたガンマランプは、この関数が戻る前にコピーされます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_gamma" class="el">ガンマランプ</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>
