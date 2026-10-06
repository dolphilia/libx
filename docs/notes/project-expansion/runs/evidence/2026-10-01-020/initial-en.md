---
title: "Monitor reference"
description: "GLFW 3.5.1 Monitor reference"
---

<span id="details"></span>

## Description

This is the reference documentation for monitor related functions and types. For more task-oriented information, see the <a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/" class="el">Monitor guide</a>.

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="typedefs" class="groupheader"><span id="typedef-members"></span> Typedefs</h2></td>
</tr>
<tr id="r_ga8d9efd1cde9426692c73fe40437d0ae3" class="memitem:ga8d9efd1cde9426692c73fe40437d0ae3">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef struct <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a></td>
</tr>
<tr class="memdesc:ga8d9efd1cde9426692c73fe40437d0ae3">
<td class="mdescLeft"> </td>
<td class="mdescRight">Opaque monitor object.<br />
</td>
</tr>
<tr class="separator:ga8d9efd1cde9426692c73fe40437d0ae3">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaabe16caca8dea952504dfdebdf4cd249" class="memitem:gaabe16caca8dea952504dfdebdf4cd249">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gaabe16caca8dea952504dfdebdf4cd249" class="el">GLFWmonitorfun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, int event)</td>
</tr>
<tr class="memdesc:gaabe16caca8dea952504dfdebdf4cd249">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for monitor configuration callbacks.<br />
</td>
</tr>
<tr class="separator:gaabe16caca8dea952504dfdebdf4cd249">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga902c2816ac9b34b757282daab59b2565" class="memitem:ga902c2816ac9b34b757282daab59b2565">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef struct <a href="/docs/glfw/v3-5-1/en/04-reference/21-glfwvidmode/" class="el">GLFWvidmode</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga902c2816ac9b34b757282daab59b2565" class="el">GLFWvidmode</a></td>
</tr>
<tr class="memdesc:ga902c2816ac9b34b757282daab59b2565">
<td class="mdescLeft"> </td>
<td class="mdescRight">Video mode type.<br />
</td>
</tr>
<tr class="separator:ga902c2816ac9b34b757282daab59b2565">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga939cf093cb0af0498b7b54dc2e181404" class="memitem:ga939cf093cb0af0498b7b54dc2e181404">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef struct <a href="/docs/glfw/v3-5-1/en/04-reference/19-glfwgammaramp/" class="el">GLFWgammaramp</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga939cf093cb0af0498b7b54dc2e181404" class="el">GLFWgammaramp</a></td>
</tr>
<tr class="memdesc:ga939cf093cb0af0498b7b54dc2e181404">
<td class="mdescLeft"> </td>
<td class="mdescRight">Gamma ramp.<br />
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
<td colspan="2"><h2 id="functions" class="groupheader"><span id="func-members"></span> Functions</h2></td>
</tr>
<tr id="r_ga70b1156d5d24e9928f145d6c864369d2" class="memitem:ga70b1156d5d24e9928f145d6c864369d2">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> ** </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga70b1156d5d24e9928f145d6c864369d2" class="el">glfwGetMonitors</a> (int *count)</td>
</tr>
<tr class="memdesc:ga70b1156d5d24e9928f145d6c864369d2">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the currently connected monitors.<br />
</td>
</tr>
<tr class="separator:ga70b1156d5d24e9928f145d6c864369d2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac3adb24947eb709e1874028272e5dfc5" class="memitem:gac3adb24947eb709e1874028272e5dfc5">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gac3adb24947eb709e1874028272e5dfc5" class="el">glfwGetPrimaryMonitor</a> (void)</td>
</tr>
<tr class="memdesc:gac3adb24947eb709e1874028272e5dfc5">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the primary monitor.<br />
</td>
</tr>
<tr class="separator:gac3adb24947eb709e1874028272e5dfc5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga102f54e7acc9149edbcf0997152df8c9" class="memitem:ga102f54e7acc9149edbcf0997152df8c9">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga102f54e7acc9149edbcf0997152df8c9" class="el">glfwGetMonitorPos</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, int *xpos, int *ypos)</td>
</tr>
<tr class="memdesc:ga102f54e7acc9149edbcf0997152df8c9">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the position of the monitor's viewport on the virtual screen.<br />
</td>
</tr>
<tr class="separator:ga102f54e7acc9149edbcf0997152df8c9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0" class="memitem:ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0" class="el">glfwGetMonitorWorkarea</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, int *xpos, int *ypos, int *width, int *height)</td>
</tr>
<tr class="memdesc:ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0">
<td class="mdescLeft"> </td>
<td class="mdescRight">Retrieves the work area of the monitor.<br />
</td>
</tr>
<tr class="separator:ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7d8bffc6c55539286a6bd20d32a8d7ea" class="memitem:ga7d8bffc6c55539286a6bd20d32a8d7ea">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga7d8bffc6c55539286a6bd20d32a8d7ea" class="el">glfwGetMonitorPhysicalSize</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, int *widthMM, int *heightMM)</td>
</tr>
<tr class="memdesc:ga7d8bffc6c55539286a6bd20d32a8d7ea">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the physical size of the monitor.<br />
</td>
</tr>
<tr class="separator:ga7d8bffc6c55539286a6bd20d32a8d7ea">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad3152e84465fa620b601265ebfcdb21b" class="memitem:gad3152e84465fa620b601265ebfcdb21b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gad3152e84465fa620b601265ebfcdb21b" class="el">glfwGetMonitorContentScale</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, float *xscale, float *yscale)</td>
</tr>
<tr class="memdesc:gad3152e84465fa620b601265ebfcdb21b">
<td class="mdescLeft"> </td>
<td class="mdescRight">Retrieves the content scale for the specified monitor.<br />
</td>
</tr>
<tr class="separator:gad3152e84465fa620b601265ebfcdb21b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7af83e13489d90379588fb331b9e4b68" class="memitem:ga7af83e13489d90379588fb331b9e4b68">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga7af83e13489d90379588fb331b9e4b68" class="el">glfwGetMonitorName</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:ga7af83e13489d90379588fb331b9e4b68">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the name of the specified monitor.<br />
</td>
</tr>
<tr class="separator:ga7af83e13489d90379588fb331b9e4b68">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga702750e24313a686d3637297b6e85fda" class="memitem:ga702750e24313a686d3637297b6e85fda">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga702750e24313a686d3637297b6e85fda" class="el">glfwSetMonitorUserPointer</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, void *pointer)</td>
</tr>
<tr class="memdesc:ga702750e24313a686d3637297b6e85fda">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the user pointer of the specified monitor.<br />
</td>
</tr>
<tr class="separator:ga702750e24313a686d3637297b6e85fda">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1adbfbfb8cd58b23cfee82e574fbbdc5" class="memitem:ga1adbfbfb8cd58b23cfee82e574fbbdc5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga1adbfbfb8cd58b23cfee82e574fbbdc5" class="el">glfwGetMonitorUserPointer</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:ga1adbfbfb8cd58b23cfee82e574fbbdc5">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the user pointer of the specified monitor.<br />
</td>
</tr>
<tr class="separator:ga1adbfbfb8cd58b23cfee82e574fbbdc5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab39df645587c8518192aa746c2fb06c3" class="memitem:gab39df645587c8518192aa746c2fb06c3">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gaabe16caca8dea952504dfdebdf4cd249" class="el">GLFWmonitorfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gab39df645587c8518192aa746c2fb06c3" class="el">glfwSetMonitorCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gaabe16caca8dea952504dfdebdf4cd249" class="el">GLFWmonitorfun</a> callback)</td>
</tr>
<tr class="memdesc:gab39df645587c8518192aa746c2fb06c3">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the monitor configuration callback.<br />
</td>
</tr>
<tr class="separator:gab39df645587c8518192aa746c2fb06c3">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad2e24d2843cb7d6c26202cddd530fc1b" class="memitem:gad2e24d2843cb7d6c26202cddd530fc1b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const <a href="/docs/glfw/v3-5-1/en/04-reference/21-glfwvidmode/" class="el">GLFWvidmode</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gad2e24d2843cb7d6c26202cddd530fc1b" class="el">glfwGetVideoModes</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, int *count)</td>
</tr>
<tr class="memdesc:gad2e24d2843cb7d6c26202cddd530fc1b">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the available video modes for the specified monitor.<br />
</td>
</tr>
<tr class="separator:gad2e24d2843cb7d6c26202cddd530fc1b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaba376fa7e76634b4788bddc505d6c9d5" class="memitem:gaba376fa7e76634b4788bddc505d6c9d5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const <a href="/docs/glfw/v3-5-1/en/04-reference/21-glfwvidmode/" class="el">GLFWvidmode</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gaba376fa7e76634b4788bddc505d6c9d5" class="el">glfwGetVideoMode</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:gaba376fa7e76634b4788bddc505d6c9d5">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the current mode of the specified monitor.<br />
</td>
</tr>
<tr class="separator:gaba376fa7e76634b4788bddc505d6c9d5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6ac582625c990220785ddd34efa3169a" class="memitem:ga6ac582625c990220785ddd34efa3169a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga6ac582625c990220785ddd34efa3169a" class="el">glfwSetGamma</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, float gamma)</td>
</tr>
<tr class="memdesc:ga6ac582625c990220785ddd34efa3169a">
<td class="mdescLeft"> </td>
<td class="mdescRight">Generates a gamma ramp and sets it for the specified monitor.<br />
</td>
</tr>
<tr class="separator:ga6ac582625c990220785ddd34efa3169a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga76ba90debcf0062b5c4b73052b24f96f" class="memitem:ga76ba90debcf0062b5c4b73052b24f96f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const <a href="/docs/glfw/v3-5-1/en/04-reference/19-glfwgammaramp/" class="el">GLFWgammaramp</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga76ba90debcf0062b5c4b73052b24f96f" class="el">glfwGetGammaRamp</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:ga76ba90debcf0062b5c4b73052b24f96f">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the current gamma ramp for the specified monitor.<br />
</td>
</tr>
<tr class="separator:ga76ba90debcf0062b5c4b73052b24f96f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga583f0ffd0d29613d8cd172b996bbf0dd" class="memitem:ga583f0ffd0d29613d8cd172b996bbf0dd">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga583f0ffd0d29613d8cd172b996bbf0dd" class="el">glfwSetGammaRamp</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor, const <a href="/docs/glfw/v3-5-1/en/04-reference/19-glfwgammaramp/" class="el">GLFWgammaramp</a> *ramp)</td>
</tr>
<tr class="memdesc:ga583f0ffd0d29613d8cd172b996bbf0dd">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the current gamma ramp for the specified monitor.<br />
</td>
</tr>
<tr class="separator:ga583f0ffd0d29613d8cd172b996bbf0dd">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## Typedef Documentation

<span id="ga8d9efd1cde9426692c73fe40437d0ae3"></span>

## <span class="permalink">[◆ ](#ga8d9efd1cde9426692c73fe40437d0ae3)</span>GLFWmonitor

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef struct <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> |

</div>

<div class="memdoc">

Opaque monitor object.

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_object" class="el">Monitor objects</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gaabe16caca8dea952504dfdebdf4cd249"></span>

## <span class="permalink">[◆ ](#gaabe16caca8dea952504dfdebdf4cd249)</span>GLFWmonitorfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWmonitorfun) (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*monitor, int event) |

</div>

<div class="memdoc">

This is the function pointer type for monitor configuration callbacks. A monitor callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="code hl_typedef">GLFWmonitor</a>\* monitor, <span class="keywordtype">int</span> event)

</div>

<div id="agroup__monitor_html_ga8d9efd1cde9426692c73fe40437d0ae3" class="ttc">

<div class="ttname">

[GLFWmonitor](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3)

</div>

<div class="ttdeci">

struct GLFWmonitor GLFWmonitor

</div>

<div class="ttdoc">

Opaque monitor object.

</div>

<div class="ttdef">

**Definition** glfw3.h:1396

</div>

</div>

</div>

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | monitor | The monitor that was connected or disconnected. |
| \[in\] | event | One of `GLFW_CONNECTED` or `GLFW_DISCONNECTED`. Future releases may add more events. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_event" class="el">Monitor configuration changes</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gab39df645587c8518192aa746c2fb06c3" class="el">glfwSetMonitorCallback</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga902c2816ac9b34b757282daab59b2565"></span>

## <span class="permalink">[◆ ](#ga902c2816ac9b34b757282daab59b2565)</span>GLFWvidmode

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef struct <a href="/docs/glfw/v3-5-1/en/04-reference/21-glfwvidmode/" class="el">GLFWvidmode</a> <a href="/docs/glfw/v3-5-1/en/04-reference/21-glfwvidmode/" class="el">GLFWvidmode</a> |

</div>

<div class="memdoc">

This describes a single video mode.

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_modes" class="el">Video modes</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gaba376fa7e76634b4788bddc505d6c9d5" class="el">glfwGetVideoMode</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gad2e24d2843cb7d6c26202cddd530fc1b" class="el">glfwGetVideoModes</a>

<!-- -->

Since  
Added in version 1.0. **GLFW 3:** Added refresh rate member.

</div>

</div>

<span id="ga939cf093cb0af0498b7b54dc2e181404"></span>

## <span class="permalink">[◆ ](#ga939cf093cb0af0498b7b54dc2e181404)</span>GLFWgammaramp

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef struct <a href="/docs/glfw/v3-5-1/en/04-reference/19-glfwgammaramp/" class="el">GLFWgammaramp</a> <a href="/docs/glfw/v3-5-1/en/04-reference/19-glfwgammaramp/" class="el">GLFWgammaramp</a> |

</div>

<div class="memdoc">

This describes the gamma ramp for a monitor.

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_gamma" class="el">Gamma ramp</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga76ba90debcf0062b5c4b73052b24f96f" class="el">glfwGetGammaRamp</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga583f0ffd0d29613d8cd172b996bbf0dd" class="el">glfwSetGammaRamp</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

## Function Documentation

<span id="ga70b1156d5d24e9928f145d6c864369d2"></span>

## <span class="permalink">[◆ ](#ga70b1156d5d24e9928f145d6c864369d2)</span>glfwGetMonitors()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*\* glfwGetMonitors | ( | int \*  | *count* | ) |  |

</div>

<div class="memdoc">

This function returns an array of handles for all currently connected monitors. The primary monitor is always first in the returned array. If no monitors were found, this function returns `NULL`.

Parameters  
|  |  |  |
|----|----|----|
| \[out\] | count | Where to store the number of monitors in the returned array. This is set to zero if an error occurred. |

<!-- -->

Returns  
An array of monitor handles, or `NULL` if no monitors were found or if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Pointer lifetime  
The returned array is allocated and freed by GLFW. You should not free it yourself. It is guaranteed to be valid only until the monitor configuration changes or the library is terminated.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_monitors" class="el">Retrieving monitors</a>

<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_event" class="el">Monitor configuration changes</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gac3adb24947eb709e1874028272e5dfc5" class="el">glfwGetPrimaryMonitor</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gac3adb24947eb709e1874028272e5dfc5"></span>

## <span class="permalink">[◆ ](#gac3adb24947eb709e1874028272e5dfc5)</span>glfwGetPrimaryMonitor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \* glfwGetPrimaryMonitor | ( | void  |  | ) |  |

</div>

<div class="memdoc">

This function returns the primary monitor. This is usually the monitor where elements like the task bar or global menu bar are located.

Returns  
The primary monitor, or `NULL` if no monitors were found or if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

Remarks  
The primary monitor is always first in the array returned by <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga70b1156d5d24e9928f145d6c864369d2" class="el">glfwGetMonitors</a>.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_monitors" class="el">Retrieving monitors</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga70b1156d5d24e9928f145d6c864369d2" class="el">glfwGetMonitors</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga102f54e7acc9149edbcf0997152df8c9"></span>

## <span class="permalink">[◆ ](#ga102f54e7acc9149edbcf0997152df8c9)</span>glfwGetMonitorPos()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetMonitorPos | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | int \*  | *xpos*, |
|  |  | int \*  | *ypos*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function returns the position, in screen coordinates, of the upper-left corner of the specified monitor.

Any or all of the position arguments may be `NULL`. If an error occurs, all non-`NULL` position arguments will be set to zero.

Parameters  
|         |         |                                                     |
|---------|---------|-----------------------------------------------------|
| \[in\]  | monitor | The monitor to query.                               |
| \[out\] | xpos    | Where to store the monitor x-coordinate, or `NULL`. |
| \[out\] | ypos    | Where to store the monitor y-coordinate, or `NULL`. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_properties" class="el">Monitor properties</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0"></span>

## <span class="permalink">[◆ ](#ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0)</span>glfwGetMonitorWorkarea()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetMonitorWorkarea | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | int \*  | *xpos*, |
|  |  | int \*  | *ypos*, |
|  |  | int \*  | *width*, |
|  |  | int \*  | *height*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function returns the position, in screen coordinates, of the upper-left corner of the work area of the specified monitor along with the work area size in screen coordinates. The work area is defined as the area of the monitor not occluded by the window system task bar where present. If no task bar exists then the work area is the monitor resolution in screen coordinates.

Any or all of the position and size arguments may be `NULL`. If an error occurs, all non-`NULL` position and size arguments will be set to zero.

Parameters  
|         |         |                                                     |
|---------|---------|-----------------------------------------------------|
| \[in\]  | monitor | The monitor to query.                               |
| \[out\] | xpos    | Where to store the monitor x-coordinate, or `NULL`. |
| \[out\] | ypos    | Where to store the monitor y-coordinate, or `NULL`. |
| \[out\] | width   | Where to store the monitor width, or `NULL`.        |
| \[out\] | height  | Where to store the monitor height, or `NULL`.       |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_workarea" class="el">Work area</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="ga7d8bffc6c55539286a6bd20d32a8d7ea"></span>

## <span class="permalink">[◆ ](#ga7d8bffc6c55539286a6bd20d32a8d7ea)</span>glfwGetMonitorPhysicalSize()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetMonitorPhysicalSize | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | int \*  | *widthMM*, |
|  |  | int \*  | *heightMM*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function returns the size, in millimetres, of the display area of the specified monitor.

Some platforms do not provide accurate monitor size information, either because the monitor [EDID](https://en.wikipedia.org/wiki/Extended_display_identification_data) data is incorrect or because the driver does not report it accurately.

Any or all of the size arguments may be `NULL`. If an error occurs, all non-`NULL` size arguments will be set to zero.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | monitor | The monitor to query. |
| \[out\] | widthMM | Where to store the width, in millimetres, of the monitor's display area, or `NULL`. |
| \[out\] | heightMM | Where to store the height, in millimetres, of the monitor's display area, or `NULL`. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Remarks  
**Win32:** On Windows 8 and earlier the physical size is calculated from the current resolution and system DPI instead of querying the monitor EDID data.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_properties" class="el">Monitor properties</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gad3152e84465fa620b601265ebfcdb21b"></span>

## <span class="permalink">[◆ ](#gad3152e84465fa620b601265ebfcdb21b)</span>glfwGetMonitorContentScale()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetMonitorContentScale | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | float \*  | *xscale*, |
|  |  | float \*  | *yscale*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function retrieves the content scale for the specified monitor. The content scale is the ratio between the current DPI and the platform's default DPI. This is especially important for text and any UI elements. If the pixel dimensions of your UI scaled by this look appropriate on your machine then it should appear at a reasonable size on other machines regardless of their DPI and scaling settings. This relies on the system DPI and scaling settings being somewhat correct.

The content scale may depend on both the monitor resolution and pixel density and on user settings. It may be very different from the raw DPI calculated from the physical size and current resolution.

Parameters  
|         |         |                                                     |
|---------|---------|-----------------------------------------------------|
| \[in\]  | monitor | The monitor to query.                               |
| \[out\] | xscale  | Where to store the x-axis content scale, or `NULL`. |
| \[out\] | yscale  | Where to store the y-axis content scale, or `NULL`. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
**Wayland:** Fractional scaling information is not yet available for monitors, so this function only returns integer content scales.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_scale" class="el">Content scale</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaf5d31de9c19c4f994facea64d2b3106c" class="el">glfwGetWindowContentScale</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="ga7af83e13489d90379588fb331b9e4b68"></span>

## <span class="permalink">[◆ ](#ga7af83e13489d90379588fb331b9e4b68)</span>glfwGetMonitorName()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| const char \* glfwGetMonitorName | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

This function returns a human-readable name, encoded as UTF-8, of the specified monitor. The name typically reflects the make and model of the monitor and is not guaranteed to be unique among the connected monitors.

Parameters  
|        |         |                       |
|--------|---------|-----------------------|
| \[in\] | monitor | The monitor to query. |

<!-- -->

Returns  
The UTF-8 encoded name of the monitor, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Pointer lifetime  
The returned string is allocated and freed by GLFW. You should not free it yourself. It is valid until the specified monitor is disconnected or the library is terminated.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_properties" class="el">Monitor properties</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga702750e24313a686d3637297b6e85fda"></span>

## <span class="permalink">[◆ ](#ga702750e24313a686d3637297b6e85fda)</span>glfwSetMonitorUserPointer()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetMonitorUserPointer | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | void \*  | *pointer*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the user-defined pointer of the specified monitor. The current value is retained until the monitor is disconnected. The initial value is `NULL`.

This function may be called from the monitor callback, even for a monitor that is being disconnected.

Parameters  
|        |         |                                   |
|--------|---------|-----------------------------------|
| \[in\] | monitor | The monitor whose pointer to set. |
| \[in\] | pointer | The new value.                    |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_userptr" class="el">User pointer</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga1adbfbfb8cd58b23cfee82e574fbbdc5" class="el">glfwGetMonitorUserPointer</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="ga1adbfbfb8cd58b23cfee82e574fbbdc5"></span>

## <span class="permalink">[◆ ](#ga1adbfbfb8cd58b23cfee82e574fbbdc5)</span>glfwGetMonitorUserPointer()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void \* glfwGetMonitorUserPointer | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

This function returns the current value of the user-defined pointer of the specified monitor. The initial value is `NULL`.

This function may be called from the monitor callback, even for a monitor that is being disconnected.

Parameters  
|        |         |                                      |
|--------|---------|--------------------------------------|
| \[in\] | monitor | The monitor whose pointer to return. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_userptr" class="el">User pointer</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga702750e24313a686d3637297b6e85fda" class="el">glfwSetMonitorUserPointer</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="gab39df645587c8518192aa746c2fb06c3"></span>

## <span class="permalink">[◆ ](#gab39df645587c8518192aa746c2fb06c3)</span>glfwSetMonitorCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gaabe16caca8dea952504dfdebdf4cd249" class="el">GLFWmonitorfun</a> glfwSetMonitorCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gaabe16caca8dea952504dfdebdf4cd249" class="el">GLFWmonitorfun</a>  | *callback* | ) |  |

</div>

<div class="memdoc">

This function sets the monitor configuration callback, or removes the currently set callback. This is called when a monitor is connected to or disconnected from the system.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | callback | The new callback, or `NULL` to remove the currently set callback. |

<!-- -->

Returns  
The previously set callback, or `NULL` if no callback was set or the library had not been <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">initialized</a>.

<!-- -->

Callback signature  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="code hl_typedef">GLFWmonitor</a>\* monitor, <span class="keywordtype">int</span> event)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gaabe16caca8dea952504dfdebdf4cd249" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_event" class="el">Monitor configuration changes</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gad2e24d2843cb7d6c26202cddd530fc1b"></span>

## <span class="permalink">[◆ ](#gad2e24d2843cb7d6c26202cddd530fc1b)</span>glfwGetVideoModes()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| const <a href="/docs/glfw/v3-5-1/en/04-reference/21-glfwvidmode/" class="el">GLFWvidmode</a> \* glfwGetVideoModes | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | int \*  | *count*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function returns an array of all video modes supported by the specified monitor. The returned array is sorted in ascending order, first by color bit depth (the sum of all channel depths), then by resolution area (the product of width and height), then resolution width and finally by refresh rate.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | monitor | The monitor to query. |
| \[out\] | count | Where to store the number of video modes in the returned array. This is set to zero if an error occurred. |

<!-- -->

Returns  
An array of video modes, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Pointer lifetime  
The returned array is allocated and freed by GLFW. You should not free it yourself. It is valid until the specified monitor is disconnected, this function is called again for that monitor or the library is terminated.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_modes" class="el">Video modes</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gaba376fa7e76634b4788bddc505d6c9d5" class="el">glfwGetVideoMode</a>

<!-- -->

Since  
Added in version 1.0. **GLFW 3:** Changed to return an array of modes for a specific monitor.

</div>

</div>

<span id="gaba376fa7e76634b4788bddc505d6c9d5"></span>

## <span class="permalink">[◆ ](#gaba376fa7e76634b4788bddc505d6c9d5)</span>glfwGetVideoMode()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| const <a href="/docs/glfw/v3-5-1/en/04-reference/21-glfwvidmode/" class="el">GLFWvidmode</a> \* glfwGetVideoMode | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

This function returns the current video mode of the specified monitor. If you have created a full screen window for that monitor, the return value will depend on whether that window is iconified.

Parameters  
|        |         |                       |
|--------|---------|-----------------------|
| \[in\] | monitor | The monitor to query. |

<!-- -->

Returns  
The current mode of the monitor, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Pointer lifetime  
The returned array is allocated and freed by GLFW. You should not free it yourself. It is valid until the specified monitor is disconnected or the library is terminated.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_modes" class="el">Video modes</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gad2e24d2843cb7d6c26202cddd530fc1b" class="el">glfwGetVideoModes</a>

<!-- -->

Since  
Added in version 3.0. Replaces `glfwGetDesktopMode`.

</div>

</div>

<span id="ga6ac582625c990220785ddd34efa3169a"></span>

## <span class="permalink">[◆ ](#ga6ac582625c990220785ddd34efa3169a)</span>glfwSetGamma()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetGamma | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | float  | *gamma*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function generates an appropriately sized gamma ramp from the specified exponent and then calls <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga583f0ffd0d29613d8cd172b996bbf0dd" class="el">glfwSetGammaRamp</a> with it. The value must be a finite number greater than zero.

The software controlled gamma ramp is applied *in addition* to the hardware gamma correction, which today is usually an approximation of sRGB gamma. This means that setting a perfectly linear ramp, or gamma 1.0, will produce the default (usually sRGB-like) behavior.

For gamma correct rendering with OpenGL or OpenGL ES, see the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_SRGB_CAPABLE" class="el">GLFW_SRGB_CAPABLE</a> hint.

Parameters  
|        |         |                                      |
|--------|---------|--------------------------------------|
| \[in\] | monitor | The monitor whose gamma ramp to set. |
| \[in\] | gamma   | The desired exponent.                |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> (see remarks).

<!-- -->

Remarks  
**Wayland:** Monitor gamma is a privileged protocol, so this function cannot be implemented and emits <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_gamma" class="el">Gamma ramp</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga76ba90debcf0062b5c4b73052b24f96f"></span>

## <span class="permalink">[◆ ](#ga76ba90debcf0062b5c4b73052b24f96f)</span>glfwGetGammaRamp()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| const <a href="/docs/glfw/v3-5-1/en/04-reference/19-glfwgammaramp/" class="el">GLFWgammaramp</a> \* glfwGetGammaRamp | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

This function returns the current gamma ramp of the specified monitor.

Parameters  
|        |         |                       |
|--------|---------|-----------------------|
| \[in\] | monitor | The monitor to query. |

<!-- -->

Returns  
The current gamma ramp, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> (see remarks).

<!-- -->

Remarks  
**Wayland:** Monitor gamma is a privileged protocol, so this function cannot be implemented and emits <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> while returning `NULL`.

<!-- -->

Pointer lifetime  
The returned structure and its arrays are allocated and freed by GLFW. You should not free them yourself. They are valid until the specified monitor is disconnected, this function is called again for that monitor or the library is terminated.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_gamma" class="el">Gamma ramp</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga583f0ffd0d29613d8cd172b996bbf0dd"></span>

## <span class="permalink">[◆ ](#ga583f0ffd0d29613d8cd172b996bbf0dd)</span>glfwSetGammaRamp()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetGammaRamp | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor*, |
|  |  | const <a href="/docs/glfw/v3-5-1/en/04-reference/19-glfwgammaramp/" class="el">GLFWgammaramp</a> \*  | *ramp*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the current gamma ramp for the specified monitor. The original gamma ramp for that monitor is saved by GLFW the first time this function is called and is restored by <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a>.

The software controlled gamma ramp is applied *in addition* to the hardware gamma correction, which today is usually an approximation of sRGB gamma. This means that setting a perfectly linear ramp, or gamma 1.0, will produce the default (usually sRGB-like) behavior.

For gamma correct rendering with OpenGL or OpenGL ES, see the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_SRGB_CAPABLE" class="el">GLFW_SRGB_CAPABLE</a> hint.

Parameters  
|        |         |                                      |
|--------|---------|--------------------------------------|
| \[in\] | monitor | The monitor whose gamma ramp to set. |
| \[in\] | ramp    | The gamma ramp to use.               |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> (see remarks).

<!-- -->

Remarks  
The size of the specified gamma ramp should match the size of the current ramp for that monitor.

**Win32:** The gamma ramp size must be 256.

**Wayland:** Monitor gamma is a privileged protocol, so this function cannot be implemented and emits <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>.

<!-- -->

Pointer lifetime  
The specified gamma ramp is copied before this function returns.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_gamma" class="el">Gamma ramp</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>
