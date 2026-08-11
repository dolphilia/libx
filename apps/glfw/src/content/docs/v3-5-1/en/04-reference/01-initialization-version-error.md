---
title: "Initialization, version and error reference"
description: "GLFW 3.5.1 Initialization, version and error reference"
licenseSource: "glfw-3.5.1"
---

> This reference page is an altered Markdown adaptation of the [official GLFW 3.5.1 documentation](https://www.glfw.org/docs/3.5.1/). Formatting, navigation and links were changed for libx; technical content comes from the GLFW 3.5.1 source distribution.

<span id="details"></span>

## Description

This is the reference documentation for initialization and termination of the library, version management and error handling. For more task-oriented information, see the <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/" class="el">Introduction to the API</a>.

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="modules" class="groupheader"><span id="groups"></span> Modules</h2></td>
</tr>
<tr id="r_group__errors" class="memitem:group__errors">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/" class="el">Error codes</a></td>
</tr>
<tr class="memdesc:group__errors">
<td class="mdescLeft"> </td>
<td class="mdescRight">Error codes.<br />
</td>
</tr>
<tr class="separator:">
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
<td colspan="2"><h2 id="macros" class="groupheader"><span id="define-members"></span> Macros</h2></td>
</tr>
<tr id="r_ga2744fbb29b5631bb28802dbe0cf36eba" class="memitem:ga2744fbb29b5631bb28802dbe0cf36eba">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga2744fbb29b5631bb28802dbe0cf36eba" class="el">GLFW_TRUE</a>   1</td>
</tr>
<tr class="memdesc:ga2744fbb29b5631bb28802dbe0cf36eba">
<td class="mdescLeft"> </td>
<td class="mdescRight">One.<br />
</td>
</tr>
<tr class="separator:ga2744fbb29b5631bb28802dbe0cf36eba">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac877fe3b627d21ef3a0a23e0a73ba8c5" class="memitem:gac877fe3b627d21ef3a0a23e0a73ba8c5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gac877fe3b627d21ef3a0a23e0a73ba8c5" class="el">GLFW_FALSE</a>   0</td>
</tr>
<tr class="memdesc:gac877fe3b627d21ef3a0a23e0a73ba8c5">
<td class="mdescLeft"> </td>
<td class="mdescRight">Zero.<br />
</td>
</tr>
<tr class="separator:gac877fe3b627d21ef3a0a23e0a73ba8c5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab9c0534709fda03ec8959201da3a9a18" class="memitem:gab9c0534709fda03ec8959201da3a9a18">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gab9c0534709fda03ec8959201da3a9a18" class="el">GLFW_JOYSTICK_HAT_BUTTONS</a>   0x00050001</td>
</tr>
<tr class="memdesc:gab9c0534709fda03ec8959201da3a9a18">
<td class="mdescLeft"> </td>
<td class="mdescRight">Joystick hat buttons init hint.<br />
</td>
</tr>
<tr class="separator:gab9c0534709fda03ec8959201da3a9a18">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaec269b24cf549ab46292c0125d8bbdce" class="memitem:gaec269b24cf549ab46292c0125d8bbdce">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaec269b24cf549ab46292c0125d8bbdce" class="el">GLFW_ANGLE_PLATFORM_TYPE</a>   0x00050002</td>
</tr>
<tr class="memdesc:gaec269b24cf549ab46292c0125d8bbdce">
<td class="mdescLeft"> </td>
<td class="mdescRight">ANGLE rendering backend init hint.<br />
</td>
</tr>
<tr class="separator:gaec269b24cf549ab46292c0125d8bbdce">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9d38bf1fdf4f91d6565401734a7cd967" class="memitem:ga9d38bf1fdf4f91d6565401734a7cd967">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga9d38bf1fdf4f91d6565401734a7cd967" class="el">GLFW_PLATFORM</a>   0x00050003</td>
</tr>
<tr class="memdesc:ga9d38bf1fdf4f91d6565401734a7cd967">
<td class="mdescLeft"> </td>
<td class="mdescRight">Platform selection init hint.<br />
</td>
</tr>
<tr class="separator:ga9d38bf1fdf4f91d6565401734a7cd967">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab937983147a3158d45f88fad7129d9f2" class="memitem:gab937983147a3158d45f88fad7129d9f2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gab937983147a3158d45f88fad7129d9f2" class="el">GLFW_COCOA_CHDIR_RESOURCES</a>   0x00051001</td>
</tr>
<tr class="memdesc:gab937983147a3158d45f88fad7129d9f2">
<td class="mdescLeft"> </td>
<td class="mdescRight">macOS specific init hint.<br />
</td>
</tr>
<tr class="separator:gab937983147a3158d45f88fad7129d9f2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga71e0b4ce2f2696a84a9b8c5e12dc70cf" class="memitem:ga71e0b4ce2f2696a84a9b8c5e12dc70cf">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga71e0b4ce2f2696a84a9b8c5e12dc70cf" class="el">GLFW_COCOA_MENUBAR</a>   0x00051002</td>
</tr>
<tr class="memdesc:ga71e0b4ce2f2696a84a9b8c5e12dc70cf">
<td class="mdescLeft"> </td>
<td class="mdescRight">macOS specific init hint.<br />
</td>
</tr>
<tr class="separator:ga71e0b4ce2f2696a84a9b8c5e12dc70cf">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa341e303ebeb8e4199b8ab8be84351f6" class="memitem:gaa341e303ebeb8e4199b8ab8be84351f6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaa341e303ebeb8e4199b8ab8be84351f6" class="el">GLFW_X11_XCB_VULKAN_SURFACE</a>   0x00052001</td>
</tr>
<tr class="memdesc:gaa341e303ebeb8e4199b8ab8be84351f6">
<td class="mdescLeft"> </td>
<td class="mdescRight">X11 specific init hint.<br />
</td>
</tr>
<tr class="separator:gaa341e303ebeb8e4199b8ab8be84351f6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga2a3f2fd7695902c498b050215b3db452" class="memitem:ga2a3f2fd7695902c498b050215b3db452">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga2a3f2fd7695902c498b050215b3db452" class="el">GLFW_WAYLAND_LIBDECOR</a>   0x00053001</td>
</tr>
<tr class="memdesc:ga2a3f2fd7695902c498b050215b3db452">
<td class="mdescLeft"> </td>
<td class="mdescRight">Wayland specific init hint.<br />
</td>
</tr>
<tr class="separator:ga2a3f2fd7695902c498b050215b3db452">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga18b2d37374d0dea28cd69194fa85b859" class="memitem:ga18b2d37374d0dea28cd69194fa85b859">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga18b2d37374d0dea28cd69194fa85b859" class="el">GLFW_ANY_PLATFORM</a>   0x00060000</td>
</tr>
<tr class="memdesc:ga18b2d37374d0dea28cd69194fa85b859">
<td class="mdescLeft"> </td>
<td class="mdescRight">Hint value that enables automatic platform selection.<br />
</td>
</tr>
<tr class="separator:ga18b2d37374d0dea28cd69194fa85b859">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8d3d17df2ab57492cef665da52c603a1" class="memitem:ga8d3d17df2ab57492cef665da52c603a1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga8d3d17df2ab57492cef665da52c603a1" class="el">GLFW_PLATFORM_WIN32</a>   0x00060001</td>
</tr>
<tr class="separator:ga8d3d17df2ab57492cef665da52c603a1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga83b18714254f75bc2f0cdbafa0f10b6b" class="memitem:ga83b18714254f75bc2f0cdbafa0f10b6b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga83b18714254f75bc2f0cdbafa0f10b6b" class="el">GLFW_PLATFORM_COCOA</a>   0x00060002</td>
</tr>
<tr class="separator:ga83b18714254f75bc2f0cdbafa0f10b6b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac4b08906a3cbf26c518a4a543eedd740" class="memitem:gac4b08906a3cbf26c518a4a543eedd740">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gac4b08906a3cbf26c518a4a543eedd740" class="el">GLFW_PLATFORM_WAYLAND</a>   0x00060003</td>
</tr>
<tr class="separator:gac4b08906a3cbf26c518a4a543eedd740">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf5333f3933e9c248a00cfda6523f386b" class="memitem:gaf5333f3933e9c248a00cfda6523f386b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaf5333f3933e9c248a00cfda6523f386b" class="el">GLFW_PLATFORM_X11</a>   0x00060004</td>
</tr>
<tr class="separator:gaf5333f3933e9c248a00cfda6523f386b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac06fad5a4866ae7a1d7b2675fac72d7f" class="memitem:gac06fad5a4866ae7a1d7b2675fac72d7f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gac06fad5a4866ae7a1d7b2675fac72d7f" class="el">GLFW_PLATFORM_NULL</a>   0x00060005</td>
</tr>
<tr class="separator:gac06fad5a4866ae7a1d7b2675fac72d7f">
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
<tr id="r_ga4306a564e9f60f4de8cc8f31731a3120" class="memitem:ga4306a564e9f60f4de8cc8f31731a3120">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void *(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga4306a564e9f60f4de8cc8f31731a3120" class="el">GLFWallocatefun</a>) (size_t size, void *user)</td>
</tr>
<tr class="memdesc:ga4306a564e9f60f4de8cc8f31731a3120">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for memory allocation callbacks.<br />
</td>
</tr>
<tr class="separator:ga4306a564e9f60f4de8cc8f31731a3120">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3e88a829615d8efe8bec1746f7309c63" class="memitem:ga3e88a829615d8efe8bec1746f7309c63">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void *(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga3e88a829615d8efe8bec1746f7309c63" class="el">GLFWreallocatefun</a>) (void *block, size_t size, void *user)</td>
</tr>
<tr class="memdesc:ga3e88a829615d8efe8bec1746f7309c63">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for memory reallocation callbacks.<br />
</td>
</tr>
<tr class="separator:ga3e88a829615d8efe8bec1746f7309c63">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7181615eda94c4b07bd72bdcee39fa28" class="memitem:ga7181615eda94c4b07bd72bdcee39fa28">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga7181615eda94c4b07bd72bdcee39fa28" class="el">GLFWdeallocatefun</a>) (void *block, void *user)</td>
</tr>
<tr class="memdesc:ga7181615eda94c4b07bd72bdcee39fa28">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for memory deallocation callbacks.<br />
</td>
</tr>
<tr class="separator:ga7181615eda94c4b07bd72bdcee39fa28">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8184701785c096b3862a75cda1bf44a3" class="memitem:ga8184701785c096b3862a75cda1bf44a3">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga8184701785c096b3862a75cda1bf44a3" class="el">GLFWerrorfun</a>) (int error_code, const char *description)</td>
</tr>
<tr class="memdesc:ga8184701785c096b3862a75cda1bf44a3">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for error callbacks.<br />
</td>
</tr>
<tr class="separator:ga8184701785c096b3862a75cda1bf44a3">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga145c57d7f2aeda0b704a5a4ba1d6104b" class="memitem:ga145c57d7f2aeda0b704a5a4ba1d6104b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef struct <a href="/docs/glfw/v3-5-1/en/04-reference/17-glfwallocator/" class="el">GLFWallocator</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga145c57d7f2aeda0b704a5a4ba1d6104b" class="el">GLFWallocator</a></td>
</tr>
<tr class="memdesc:ga145c57d7f2aeda0b704a5a4ba1d6104b">
<td class="mdescLeft"> </td>
<td class="mdescRight">Custom heap memory allocator.<br />
</td>
</tr>
<tr class="separator:ga145c57d7f2aeda0b704a5a4ba1d6104b">
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
<tr id="r_ga317aac130a235ab08c6db0834907d85e" class="memitem:ga317aac130a235ab08c6db0834907d85e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> (void)</td>
</tr>
<tr class="memdesc:ga317aac130a235ab08c6db0834907d85e">
<td class="mdescLeft"> </td>
<td class="mdescRight">Initializes the GLFW library.<br />
</td>
</tr>
<tr class="separator:ga317aac130a235ab08c6db0834907d85e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaaae48c0a18607ea4a4ba951d939f0901" class="memitem:gaaae48c0a18607ea4a4ba951d939f0901">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a> (void)</td>
</tr>
<tr class="memdesc:gaaae48c0a18607ea4a4ba951d939f0901">
<td class="mdescLeft"> </td>
<td class="mdescRight">Terminates the GLFW library.<br />
</td>
</tr>
<tr class="separator:gaaae48c0a18607ea4a4ba951d939f0901">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga110fd1d3f0412822b4f1908c026f724a" class="memitem:ga110fd1d3f0412822b4f1908c026f724a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga110fd1d3f0412822b4f1908c026f724a" class="el">glfwInitHint</a> (int hint, int value)</td>
</tr>
<tr class="memdesc:ga110fd1d3f0412822b4f1908c026f724a">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the specified init hint to the desired value.<br />
</td>
</tr>
<tr class="separator:ga110fd1d3f0412822b4f1908c026f724a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9dde93e9891fa7dd17e4194c9f3ae7c6" class="memitem:ga9dde93e9891fa7dd17e4194c9f3ae7c6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6" class="el">glfwInitAllocator</a> (const <a href="/docs/glfw/v3-5-1/en/04-reference/17-glfwallocator/" class="el">GLFWallocator</a> *allocator)</td>
</tr>
<tr class="memdesc:ga9dde93e9891fa7dd17e4194c9f3ae7c6">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the init allocator to the desired value.<br />
</td>
</tr>
<tr class="separator:ga9dde93e9891fa7dd17e4194c9f3ae7c6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga76af552d0307bb5f7791f245417d4752" class="memitem:ga76af552d0307bb5f7791f245417d4752">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga76af552d0307bb5f7791f245417d4752" class="el">glfwInitVulkanLoader</a> (PFN_vkGetInstanceProcAddr loader)</td>
</tr>
<tr class="memdesc:ga76af552d0307bb5f7791f245417d4752">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the desired Vulkan <code>vkGetInstanceProcAddr</code> function.<br />
</td>
</tr>
<tr class="separator:ga76af552d0307bb5f7791f245417d4752">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9f8ffaacf3c269cc48eafbf8b9b71197" class="memitem:ga9f8ffaacf3c269cc48eafbf8b9b71197">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga9f8ffaacf3c269cc48eafbf8b9b71197" class="el">glfwGetVersion</a> (int *major, int *minor, int *rev)</td>
</tr>
<tr class="memdesc:ga9f8ffaacf3c269cc48eafbf8b9b71197">
<td class="mdescLeft"> </td>
<td class="mdescRight">Retrieves the version of the GLFW library.<br />
</td>
</tr>
<tr class="separator:ga9f8ffaacf3c269cc48eafbf8b9b71197">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga026abd003c8e6501981ab1662062f1c0" class="memitem:ga026abd003c8e6501981ab1662062f1c0">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga026abd003c8e6501981ab1662062f1c0" class="el">glfwGetVersionString</a> (void)</td>
</tr>
<tr class="memdesc:ga026abd003c8e6501981ab1662062f1c0">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns a string describing the compile-time configuration.<br />
</td>
</tr>
<tr class="separator:ga026abd003c8e6501981ab1662062f1c0">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga944986b4ec0b928d488141f92982aa18" class="memitem:ga944986b4ec0b928d488141f92982aa18">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga944986b4ec0b928d488141f92982aa18" class="el">glfwGetError</a> (const char **description)</td>
</tr>
<tr class="memdesc:ga944986b4ec0b928d488141f92982aa18">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns and clears the last error for the calling thread.<br />
</td>
</tr>
<tr class="separator:ga944986b4ec0b928d488141f92982aa18">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaff45816610d53f0b83656092a4034f40" class="memitem:gaff45816610d53f0b83656092a4034f40">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga8184701785c096b3862a75cda1bf44a3" class="el">GLFWerrorfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaff45816610d53f0b83656092a4034f40" class="el">glfwSetErrorCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga8184701785c096b3862a75cda1bf44a3" class="el">GLFWerrorfun</a> callback)</td>
</tr>
<tr class="memdesc:gaff45816610d53f0b83656092a4034f40">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the error callback.<br />
</td>
</tr>
<tr class="separator:gaff45816610d53f0b83656092a4034f40">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6d6a983d38bd4e8fd786d7a9061d399e" class="memitem:ga6d6a983d38bd4e8fd786d7a9061d399e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga6d6a983d38bd4e8fd786d7a9061d399e" class="el">glfwGetPlatform</a> (void)</td>
</tr>
<tr class="memdesc:ga6d6a983d38bd4e8fd786d7a9061d399e">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the currently selected platform.<br />
</td>
</tr>
<tr class="separator:ga6d6a983d38bd4e8fd786d7a9061d399e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8785d2b6b36632368d803e78079d38ed" class="memitem:ga8785d2b6b36632368d803e78079d38ed">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga8785d2b6b36632368d803e78079d38ed" class="el">glfwPlatformSupported</a> (int platform)</td>
</tr>
<tr class="memdesc:ga8785d2b6b36632368d803e78079d38ed">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns whether the library includes support for the specified platform.<br />
</td>
</tr>
<tr class="separator:ga8785d2b6b36632368d803e78079d38ed">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## Macro Definition Documentation

<span id="ga6337d9ea43b22fc529b2bba066b4a576"></span>

## <span class="permalink">[◆ ](#ga6337d9ea43b22fc529b2bba066b4a576)</span>GLFW_VERSION_MAJOR

<div class="memitem">

<div class="memproto">

|                                 |
|---------------------------------|
| \#define GLFW_VERSION_MAJOR   3 |

</div>

<div class="memdoc">

The major version number of the GLFW header. This is incremented when the API is changed in non-compatible ways.

</div>

</div>

<span id="gaf80d40f0aea7088ff337606e9c48f7a3"></span>

## <span class="permalink">[◆ ](#gaf80d40f0aea7088ff337606e9c48f7a3)</span>GLFW_VERSION_MINOR

<div class="memitem">

<div class="memproto">

|                                 |
|---------------------------------|
| \#define GLFW_VERSION_MINOR   5 |

</div>

<div class="memdoc">

The minor version number of the GLFW header. This is incremented when features are added to the API but it remains backward-compatible.

</div>

</div>

<span id="gab72ae2e2035d9ea461abc3495eac0502"></span>

## <span class="permalink">[◆ ](#gab72ae2e2035d9ea461abc3495eac0502)</span>GLFW_VERSION_REVISION

<div class="memitem">

<div class="memproto">

|                                    |
|------------------------------------|
| \#define GLFW_VERSION_REVISION   1 |

</div>

<div class="memdoc">

The revision number of the GLFW header. This is incremented when a bug fix release is made that does not contain any API changes.

</div>

</div>

<span id="ga2744fbb29b5631bb28802dbe0cf36eba"></span>

## <span class="permalink">[◆ ](#ga2744fbb29b5631bb28802dbe0cf36eba)</span>GLFW_TRUE

<div class="memitem">

<div class="memproto">

|                        |
|------------------------|
| \#define GLFW_TRUE   1 |

</div>

<div class="memdoc">

This is only semantic sugar for the number 1. You can instead use `1` or `true` or `_True` or `GL_TRUE` or `VK_TRUE` or anything else that is equal to one.

</div>

</div>

<span id="gac877fe3b627d21ef3a0a23e0a73ba8c5"></span>

## <span class="permalink">[◆ ](#gac877fe3b627d21ef3a0a23e0a73ba8c5)</span>GLFW_FALSE

<div class="memitem">

<div class="memproto">

|                         |
|-------------------------|
| \#define GLFW_FALSE   0 |

</div>

<div class="memdoc">

This is only semantic sugar for the number 0. You can instead use `0` or `false` or `_False` or `GL_FALSE` or `VK_FALSE` or anything else that is equal to zero.

</div>

</div>

<span id="gab9c0534709fda03ec8959201da3a9a18"></span>

## <span class="permalink">[◆ ](#gab9c0534709fda03ec8959201da3a9a18)</span>GLFW_JOYSTICK_HAT_BUTTONS

<div class="memitem">

<div class="memproto">

|                                                 |
|-------------------------------------------------|
| \#define GLFW_JOYSTICK_HAT_BUTTONS   0x00050001 |

</div>

<div class="memdoc">

Joystick hat buttons <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#GLFW_JOYSTICK_HAT_BUTTONS" class="el">init hint</a>.

</div>

</div>

<span id="gaec269b24cf549ab46292c0125d8bbdce"></span>

## <span class="permalink">[◆ ](#gaec269b24cf549ab46292c0125d8bbdce)</span>GLFW_ANGLE_PLATFORM_TYPE

<div class="memitem">

<div class="memproto">

|                                                |
|------------------------------------------------|
| \#define GLFW_ANGLE_PLATFORM_TYPE   0x00050002 |

</div>

<div class="memdoc">

ANGLE rendering backend <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#GLFW_ANGLE_PLATFORM_TYPE_hint" class="el">init hint</a>.

</div>

</div>

<span id="ga9d38bf1fdf4f91d6565401734a7cd967"></span>

## <span class="permalink">[◆ ](#ga9d38bf1fdf4f91d6565401734a7cd967)</span>GLFW_PLATFORM

<div class="memitem">

<div class="memproto">

|                                     |
|-------------------------------------|
| \#define GLFW_PLATFORM   0x00050003 |

</div>

<div class="memdoc">

Platform selection <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#GLFW_PLATFORM" class="el">init hint</a>.

</div>

</div>

<span id="gab937983147a3158d45f88fad7129d9f2"></span>

## <span class="permalink">[◆ ](#gab937983147a3158d45f88fad7129d9f2)</span>GLFW_COCOA_CHDIR_RESOURCES

<div class="memitem">

<div class="memproto">

|                                                  |
|--------------------------------------------------|
| \#define GLFW_COCOA_CHDIR_RESOURCES   0x00051001 |

</div>

<div class="memdoc">

macOS specific <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#GLFW_COCOA_CHDIR_RESOURCES_hint" class="el">init hint</a>.

</div>

</div>

<span id="ga71e0b4ce2f2696a84a9b8c5e12dc70cf"></span>

## <span class="permalink">[◆ ](#ga71e0b4ce2f2696a84a9b8c5e12dc70cf)</span>GLFW_COCOA_MENUBAR

<div class="memitem">

<div class="memproto">

|                                          |
|------------------------------------------|
| \#define GLFW_COCOA_MENUBAR   0x00051002 |

</div>

<div class="memdoc">

macOS specific <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#GLFW_COCOA_MENUBAR_hint" class="el">init hint</a>.

</div>

</div>

<span id="gaa341e303ebeb8e4199b8ab8be84351f6"></span>

## <span class="permalink">[◆ ](#gaa341e303ebeb8e4199b8ab8be84351f6)</span>GLFW_X11_XCB_VULKAN_SURFACE

<div class="memitem">

<div class="memproto">

|                                                   |
|---------------------------------------------------|
| \#define GLFW_X11_XCB_VULKAN_SURFACE   0x00052001 |

</div>

<div class="memdoc">

X11 specific <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#GLFW_X11_XCB_VULKAN_SURFACE_hint" class="el">init hint</a>.

</div>

</div>

<span id="ga2a3f2fd7695902c498b050215b3db452"></span>

## <span class="permalink">[◆ ](#ga2a3f2fd7695902c498b050215b3db452)</span>GLFW_WAYLAND_LIBDECOR

<div class="memitem">

<div class="memproto">

|                                             |
|---------------------------------------------|
| \#define GLFW_WAYLAND_LIBDECOR   0x00053001 |

</div>

<div class="memdoc">

Wayland specific <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#GLFW_WAYLAND_LIBDECOR_hint" class="el">init hint</a>.

</div>

</div>

<span id="ga18b2d37374d0dea28cd69194fa85b859"></span>

## <span class="permalink">[◆ ](#ga18b2d37374d0dea28cd69194fa85b859)</span>GLFW_ANY_PLATFORM

<div class="memitem">

<div class="memproto">

|                                         |
|-----------------------------------------|
| \#define GLFW_ANY_PLATFORM   0x00060000 |

</div>

<div class="memdoc">

Hint value for <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#GLFW_PLATFORM" class="el">GLFW_PLATFORM</a> that enables automatic platform selection.

</div>

</div>

<span id="ga8d3d17df2ab57492cef665da52c603a1"></span>

## <span class="permalink">[◆ ](#ga8d3d17df2ab57492cef665da52c603a1)</span>GLFW_PLATFORM_WIN32

<div class="memitem">

<div class="memproto">

|                                           |
|-------------------------------------------|
| \#define GLFW_PLATFORM_WIN32   0x00060001 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga83b18714254f75bc2f0cdbafa0f10b6b"></span>

## <span class="permalink">[◆ ](#ga83b18714254f75bc2f0cdbafa0f10b6b)</span>GLFW_PLATFORM_COCOA

<div class="memitem">

<div class="memproto">

|                                           |
|-------------------------------------------|
| \#define GLFW_PLATFORM_COCOA   0x00060002 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gac4b08906a3cbf26c518a4a543eedd740"></span>

## <span class="permalink">[◆ ](#gac4b08906a3cbf26c518a4a543eedd740)</span>GLFW_PLATFORM_WAYLAND

<div class="memitem">

<div class="memproto">

|                                             |
|---------------------------------------------|
| \#define GLFW_PLATFORM_WAYLAND   0x00060003 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaf5333f3933e9c248a00cfda6523f386b"></span>

## <span class="permalink">[◆ ](#gaf5333f3933e9c248a00cfda6523f386b)</span>GLFW_PLATFORM_X11

<div class="memitem">

<div class="memproto">

|                                         |
|-----------------------------------------|
| \#define GLFW_PLATFORM_X11   0x00060004 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gac06fad5a4866ae7a1d7b2675fac72d7f"></span>

## <span class="permalink">[◆ ](#gac06fad5a4866ae7a1d7b2675fac72d7f)</span>GLFW_PLATFORM_NULL

<div class="memitem">

<div class="memproto">

|                                          |
|------------------------------------------|
| \#define GLFW_PLATFORM_NULL   0x00060005 |

</div>

<div class="memdoc">

</div>

</div>

## Typedef Documentation

<span id="ga4306a564e9f60f4de8cc8f31731a3120"></span>

## <span class="permalink">[◆ ](#ga4306a564e9f60f4de8cc8f31731a3120)</span>GLFWallocatefun

<div class="memitem">

<div class="memproto">

|                                                                |
|----------------------------------------------------------------|
| typedef void \*(\* GLFWallocatefun) (size_t size, void \*user) |

</div>

<div class="memdoc">

This is the function pointer type for memory allocation callbacks. A memory allocation callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span>\* function_name(<span class="keywordtype">size_t</span> size, <span class="keywordtype">void</span>\* user)

</div>

</div>

This function must return either a memory block at least `size` bytes long, or `NULL` if allocation failed. Note that not all parts of GLFW handle allocation failures gracefully yet.

This function must support being called during <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> but before the library is flagged as initialized, as well as during <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a> after the library is no longer flagged as initialized.

Any memory allocated via this function will be deallocated via the same allocator during library termination or earlier.

Any memory allocated via this function must be suitably aligned for any object type. If you are using C99 or earlier, this alignment is platform-dependent but will be the same as what `malloc` provides. If you are using C11 or later, this is the value of `alignof(max_align_t)`.

The size will always be greater than zero. Allocations of size zero are filtered out before reaching the custom allocator.

If this function returns `NULL`, GLFW will emit <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga9023953a2bcb98c2906afd071d21ee7f" class="el">GLFW_OUT_OF_MEMORY</a>.

This function must not call any GLFW function.

Parameters  
|        |      |                                                  |
|--------|------|--------------------------------------------------|
| \[in\] | size | The minimum size, in bytes, of the memory block. |
| \[in\] | user | The user-defined pointer from the allocator.     |

<!-- -->

Returns  
The address of the newly allocated memory block, or `NULL` if an error occurred.

<!-- -->

Pointer lifetime  
The returned memory block must be valid at least until it is deallocated.

<!-- -->

Reentrancy  
This function should not call any GLFW function.

<!-- -->

Thread safety  
This function must support being called from any thread that calls GLFW functions.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#init_allocator" class="el">Custom heap memory allocator</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/17-glfwallocator/" class="el">GLFWallocator</a>

<!-- -->

Since  
Added in version 3.4.

</div>

</div>

<span id="ga3e88a829615d8efe8bec1746f7309c63"></span>

## <span class="permalink">[◆ ](#ga3e88a829615d8efe8bec1746f7309c63)</span>GLFWreallocatefun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void \*(\* GLFWreallocatefun) (void \*block, size_t size, void \*user) |

</div>

<div class="memdoc">

This is the function pointer type for memory reallocation callbacks. A memory reallocation callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span>\* function_name(<span class="keywordtype">void</span>\* block, <span class="keywordtype">size_t</span> size, <span class="keywordtype">void</span>\* user)

</div>

</div>

This function must return a memory block at least `size` bytes long, or `NULL` if allocation failed. Note that not all parts of GLFW handle allocation failures gracefully yet.

This function must support being called during <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> but before the library is flagged as initialized, as well as during <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a> after the library is no longer flagged as initialized.

Any memory allocated via this function will be deallocated via the same allocator during library termination or earlier.

Any memory allocated via this function must be suitably aligned for any object type. If you are using C99 or earlier, this alignment is platform-dependent but will be the same as what `realloc` provides. If you are using C11 or later, this is the value of `alignof(max_align_t)`.

The block address will never be `NULL` and the size will always be greater than zero. Reallocations of a block to size zero are converted into deallocations before reaching the custom allocator. Reallocations of `NULL` to a non-zero size are converted into regular allocations before reaching the custom allocator.

If this function returns `NULL`, GLFW will emit <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga9023953a2bcb98c2906afd071d21ee7f" class="el">GLFW_OUT_OF_MEMORY</a>.

This function must not call any GLFW function.

Parameters  
|        |       |                                                      |
|--------|-------|------------------------------------------------------|
| \[in\] | block | The address of the memory block to reallocate.       |
| \[in\] | size  | The new minimum size, in bytes, of the memory block. |
| \[in\] | user  | The user-defined pointer from the allocator.         |

<!-- -->

Returns  
The address of the newly allocated or resized memory block, or `NULL` if an error occurred.

<!-- -->

Pointer lifetime  
The returned memory block must be valid at least until it is deallocated.

<!-- -->

Reentrancy  
This function should not call any GLFW function.

<!-- -->

Thread safety  
This function must support being called from any thread that calls GLFW functions.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#init_allocator" class="el">Custom heap memory allocator</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/17-glfwallocator/" class="el">GLFWallocator</a>

<!-- -->

Since  
Added in version 3.4.

</div>

</div>

<span id="ga7181615eda94c4b07bd72bdcee39fa28"></span>

## <span class="permalink">[◆ ](#ga7181615eda94c4b07bd72bdcee39fa28)</span>GLFWdeallocatefun

<div class="memitem">

<div class="memproto">

|                                                                |
|----------------------------------------------------------------|
| typedef void(\* GLFWdeallocatefun) (void \*block, void \*user) |

</div>

<div class="memdoc">

This is the function pointer type for memory deallocation callbacks. A memory deallocation callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<span class="keywordtype">void</span>\* block, <span class="keywordtype">void</span>\* user)

</div>

</div>

This function may deallocate the specified memory block. This memory block will have been allocated with the same allocator.

This function must support being called during <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> but before the library is flagged as initialized, as well as during <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a> after the library is no longer flagged as initialized.

The block address will never be `NULL`. Deallocations of `NULL` are filtered out before reaching the custom allocator.

If this function returns `NULL`, GLFW will emit <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga9023953a2bcb98c2906afd071d21ee7f" class="el">GLFW_OUT_OF_MEMORY</a>.

This function must not call any GLFW function.

Parameters  
|        |       |                                                |
|--------|-------|------------------------------------------------|
| \[in\] | block | The address of the memory block to deallocate. |
| \[in\] | user  | The user-defined pointer from the allocator.   |

<!-- -->

Pointer lifetime  
The specified memory block will not be accessed by GLFW after this function is called.

<!-- -->

Reentrancy  
This function should not call any GLFW function.

<!-- -->

Thread safety  
This function must support being called from any thread that calls GLFW functions.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#init_allocator" class="el">Custom heap memory allocator</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/17-glfwallocator/" class="el">GLFWallocator</a>

<!-- -->

Since  
Added in version 3.4.

</div>

</div>

<span id="ga8184701785c096b3862a75cda1bf44a3"></span>

## <span class="permalink">[◆ ](#ga8184701785c096b3862a75cda1bf44a3)</span>GLFWerrorfun

<div class="memitem">

<div class="memproto">

|                                                                          |
|--------------------------------------------------------------------------|
| typedef void(\* GLFWerrorfun) (int error_code, const char \*description) |

</div>

<div class="memdoc">

This is the function pointer type for error callbacks. An error callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> callback_name(<span class="keywordtype">int</span> error_code, <span class="keyword">const</span> <span class="keywordtype">char</span>\* description)

</div>

</div>

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | error_code | An <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/" class="el">error code</a>. Future releases may add more error codes. |
| \[in\] | description | A UTF-8 encoded string describing the error. |

<!-- -->

Pointer lifetime  
The error description string is valid until the callback function returns.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">Error handling</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaff45816610d53f0b83656092a4034f40" class="el">glfwSetErrorCallback</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga145c57d7f2aeda0b704a5a4ba1d6104b"></span>

## <span class="permalink">[◆ ](#ga145c57d7f2aeda0b704a5a4ba1d6104b)</span>GLFWallocator

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef struct <a href="/docs/glfw/v3-5-1/en/04-reference/17-glfwallocator/" class="el">GLFWallocator</a> <a href="/docs/glfw/v3-5-1/en/04-reference/17-glfwallocator/" class="el">GLFWallocator</a> |

</div>

<div class="memdoc">

This describes a custom heap memory allocator for GLFW. To set an allocator, pass it to <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6" class="el">glfwInitAllocator</a> before initializing the library.

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#init_allocator" class="el">Custom heap memory allocator</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6" class="el">glfwInitAllocator</a>

<!-- -->

Since  
Added in version 3.4.

</div>

</div>

## Function Documentation

<span id="ga317aac130a235ab08c6db0834907d85e"></span>

## <span class="permalink">[◆ ](#ga317aac130a235ab08c6db0834907d85e)</span>glfwInit()

<div class="memitem">

<div class="memproto">

|              |     |       |     |     |     |
|--------------|-----|-------|-----|-----|-----|
| int glfwInit | (   | void  |     | )   |     |

</div>

<div class="memdoc">

This function initializes the GLFW library. Before most GLFW functions can be used, GLFW must be initialized, and before an application terminates GLFW should be terminated in order to free any resources allocated during or after initialization.

If this function fails, it calls <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a> before returning. If it succeeds, you should call <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a> before the application exits.

Additional calls to this function after successful initialization but before termination will return `GLFW_TRUE` immediately.

The <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#GLFW_PLATFORM" class="el">GLFW_PLATFORM</a> init hint controls which platforms are considered during initialization. This also depends on which platforms the library was compiled to support.

Returns  
`GLFW_TRUE` if successful, or `GLFW_FALSE` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
**macOS:** This function will change the current directory of the application to the `Contents/Resources` subdirectory of the application's bundle, if present. This can be disabled with the <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gab937983147a3158d45f88fad7129d9f2" class="el">GLFW_COCOA_CHDIR_RESOURCES</a> init hint.

**macOS:** This function will create the main menu and dock icon for the application. If GLFW finds a `MainMenu.nib` it is loaded and assumed to contain a menu bar. Otherwise a minimal menu bar is created manually with common commands like Hide, Quit and About. The About entry opens a minimal about dialog with information from the application's bundle. The menu bar and dock icon can be disabled entirely with the <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga71e0b4ce2f2696a84a9b8c5e12dc70cf" class="el">GLFW_COCOA_MENUBAR</a> init hint.

**Wayland, X11:** If the library was compiled with support for both Wayland and X11, and the <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#GLFW_PLATFORM" class="el">GLFW_PLATFORM</a> init hint is set to `GLFW_ANY_PLATFORM`, the `XDG_SESSION_TYPE` environment variable affects which platform is picked. If the environment variable is not set, or is set to something other than `wayland` or `x11`, the regular detection mechanism will be used instead.

**X11:** This function will set the `LC_CTYPE` category of the application locale according to the current environment if that category is still "C". This is because the "C" locale breaks Unicode text input.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">Initialization and termination</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga110fd1d3f0412822b4f1908c026f724a" class="el">glfwInitHint</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6" class="el">glfwInitAllocator</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a>

<!-- -->

Since  
Added in version 1.0.

</div>

</div>

<span id="gaaae48c0a18607ea4a4ba951d939f0901"></span>

## <span class="permalink">[◆ ](#gaaae48c0a18607ea4a4ba951d939f0901)</span>glfwTerminate()

<div class="memitem">

<div class="memproto">

|                    |     |       |     |     |     |
|--------------------|-----|-------|-----|-----|-----|
| void glfwTerminate | (   | void  |     | )   |     |

</div>

<div class="memdoc">

This function destroys all remaining windows and cursors, restores any modified gamma ramps and frees any other allocated resources. Once this function is called, you must again call <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> successfully before you will be able to use most GLFW functions.

If GLFW has been successfully initialized, this function should be called before the application exits. If initialization fails, there is no need to call this function, as it is called by <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> before it returns failure.

This function has no effect if GLFW is not initialized.

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
This function may be called before <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a>.

<!-- -->

Warning  
The contexts of any remaining windows must not be current on any other thread when this function is called.

<!-- -->

Reentrancy  
This function must not be called from a callback.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">Initialization and termination</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a>

<!-- -->

Since  
Added in version 1.0.

</div>

</div>

<span id="ga110fd1d3f0412822b4f1908c026f724a"></span>

## <span class="permalink">[◆ ](#ga110fd1d3f0412822b4f1908c026f724a)</span>glfwInitHint()

<div class="memitem">

<div class="memproto">

|                   |     |      |          |
|-------------------|-----|------|----------|
| void glfwInitHint | (   | int  | *hint*,  |
|                   |     | int  | *value*  |
|                   | )   |      |          |

</div>

<div class="memdoc">

This function sets hints for the next initialization of GLFW.

The values you set hints to are never reset by GLFW, but they only take effect during initialization. Once GLFW has been initialized, any values you set will be ignored until the library is terminated and initialized again.

Some hints are platform specific. These may be set on any platform but they will only affect their specific platform. Other platforms will ignore them. Setting these hints requires no platform specific headers or functions.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | hint | The <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#init_hints" class="el">init hint</a> to set. |
| \[in\] | value | The new value of the init hint. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>.

<!-- -->

Remarks  
This function may be called before <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
init_hints

<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el" title="Initializes the GLFW library.">glfwInit</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="ga9dde93e9891fa7dd17e4194c9f3ae7c6"></span>

## <span class="permalink">[◆ ](#ga9dde93e9891fa7dd17e4194c9f3ae7c6)</span>glfwInitAllocator()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwInitAllocator | ( | const <a href="/docs/glfw/v3-5-1/en/04-reference/17-glfwallocator/" class="el">GLFWallocator</a> \*  | *allocator* | ) |  |

</div>

<div class="memdoc">

To use the default allocator, call this function with a `NULL` argument.

If you specify an allocator struct, every member must be a valid function pointer. If any member is `NULL`, this function will emit <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a> and the init allocator will be unchanged.

The functions in the allocator must fulfil a number of requirements. See the documentation for <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga4306a564e9f60f4de8cc8f31731a3120" class="el">GLFWallocatefun</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga3e88a829615d8efe8bec1746f7309c63" class="el">GLFWreallocatefun</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga7181615eda94c4b07bd72bdcee39fa28" class="el">GLFWdeallocatefun</a> for details.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | allocator | The allocator to use at the next initialization, or `NULL` to use the default one. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>.

<!-- -->

Pointer lifetime  
The specified allocator is copied before this function returns.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#init_allocator" class="el">Custom heap memory allocator</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a>

<!-- -->

Since  
Added in version 3.4.

</div>

</div>

<span id="ga76af552d0307bb5f7791f245417d4752"></span>

## <span class="permalink">[◆ ](#ga76af552d0307bb5f7791f245417d4752)</span>glfwInitVulkanLoader()

<div class="memitem">

<div class="memproto">

|                           |     |                            |          |     |     |
|---------------------------|-----|----------------------------|----------|-----|-----|
| void glfwInitVulkanLoader | (   | PFN_vkGetInstanceProcAddr  | *loader* | )   |     |

</div>

<div class="memdoc">

This function sets the `vkGetInstanceProcAddr` function that GLFW will use for all Vulkan related entry point queries.

This feature is mostly useful on macOS, if your copy of the Vulkan loader is in a location where GLFW cannot find it through dynamic loading, or if you are still using the static library version of the loader.

If set to `NULL`, GLFW will try to load the Vulkan loader dynamically by its standard name and get this function from there. This is the default behavior.

The standard name of the loader is `vulkan-1.dll` on Windows, `libvulkan.so.1` on Linux and other Unix-like systems and `libvulkan.1.dylib` on macOS. If your code is also loading it via these names then you probably don't need to use this function.

The function address you set is never reset by GLFW, but it only takes effect during initialization. Once GLFW has been initialized, any updates will be ignored until the library is terminated and initialized again.

Parameters  
|        |        |                                                |
|--------|--------|------------------------------------------------|
| \[in\] | loader | The address of the function to use, or `NULL`. |

<!-- -->

Loader function signature  
<div class="fragment">

<div class="line">

PFN_vkVoidFunction vkGetInstanceProcAddr(VkInstance instance, <span class="keyword">const</span> <span class="keywordtype">char</span>\* name)

</div>

</div>

For more information about this function, see the [Vulkan Registry](https://www.khronos.org/registry/vulkan/).

<!-- -->

Errors  
None.

<!-- -->

Remarks  
This function may be called before <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/06-vulkan-guide/#vulkan_loader" class="el">Finding the Vulkan loader</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a>

<!-- -->

Since  
Added in version 3.4.

</div>

</div>

<span id="ga9f8ffaacf3c269cc48eafbf8b9b71197"></span>

## <span class="permalink">[◆ ](#ga9f8ffaacf3c269cc48eafbf8b9b71197)</span>glfwGetVersion()

<div class="memitem">

<div class="memproto">

|                     |     |         |          |
|---------------------|-----|---------|----------|
| void glfwGetVersion | (   | int \*  | *major*, |
|                     |     | int \*  | *minor*, |
|                     |     | int \*  | *rev*    |
|                     | )   |         |          |

</div>

<div class="memdoc">

This function retrieves the major, minor and revision numbers of the GLFW library. It is intended for when you are using GLFW as a shared library and want to ensure that you are using the minimum required version.

Any or all of the version arguments may be `NULL`.

Parameters  
|         |       |                                                     |
|---------|-------|-----------------------------------------------------|
| \[out\] | major | Where to store the major version number, or `NULL`. |
| \[out\] | minor | Where to store the minor version number, or `NULL`. |
| \[out\] | rev   | Where to store the revision number, or `NULL`.      |

<!-- -->

Errors  
None.

<!-- -->

Remarks  
This function may be called before <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a>.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_version" class="el">Version management</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga026abd003c8e6501981ab1662062f1c0" class="el">glfwGetVersionString</a>

<!-- -->

Since  
Added in version 1.0.

</div>

</div>

<span id="ga026abd003c8e6501981ab1662062f1c0"></span>

## <span class="permalink">[◆ ](#ga026abd003c8e6501981ab1662062f1c0)</span>glfwGetVersionString()

<div class="memitem">

<div class="memproto">

|                                    |     |       |     |     |     |
|------------------------------------|-----|-------|-----|-----|-----|
| const char \* glfwGetVersionString | (   | void  |     | )   |     |

</div>

<div class="memdoc">

This function returns the compile-time generated <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_version_string" class="el">version string</a> of the GLFW library binary. It describes the version, platforms, compiler and any platform or operating system specific compile-time options. It should not be confused with the OpenGL or OpenGL ES version string, queried with `glGetString`.

**Do not use the version string** to parse the GLFW library version. The <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga9f8ffaacf3c269cc48eafbf8b9b71197" class="el">glfwGetVersion</a> function provides the version of the running library binary in numerical format.

**Do not use the version string** to parse what platforms are supported. The <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga8785d2b6b36632368d803e78079d38ed" class="el">glfwPlatformSupported</a> function lets you query platform support.

Returns  
The ASCII encoded GLFW version string.

<!-- -->

Errors  
None.

<!-- -->

Remarks  
This function may be called before <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a>.

<!-- -->

Pointer lifetime  
The returned string is static and compile-time generated.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_version" class="el">Version management</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga9f8ffaacf3c269cc48eafbf8b9b71197" class="el">glfwGetVersion</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga944986b4ec0b928d488141f92982aa18"></span>

## <span class="permalink">[◆ ](#ga944986b4ec0b928d488141f92982aa18)</span>glfwGetError()

<div class="memitem">

<div class="memproto">

|                  |     |                  |               |     |     |
|------------------|-----|------------------|---------------|-----|-----|
| int glfwGetError | (   | const char \*\*  | *description* | )   |     |

</div>

<div class="memdoc">

This function returns and clears the <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/" class="el">error code</a> of the last error that occurred on the calling thread, and optionally a UTF-8 encoded human-readable description of it. If no error has occurred since the last call, it returns <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gafa30deee5db4d69c4c93d116ed87dbf4" class="el">GLFW_NO_ERROR</a> (zero) and the description pointer is set to `NULL`.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | description | Where to store the error description pointer, or `NULL`. |

<!-- -->

Returns  
The last error code for the calling thread, or <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gafa30deee5db4d69c4c93d116ed87dbf4" class="el">GLFW_NO_ERROR</a> (zero).

<!-- -->

Errors  
None.

<!-- -->

Pointer lifetime  
The returned string is allocated and freed by GLFW. You should not free it yourself. It is guaranteed to be valid only until the next error occurs or the library is terminated.

<!-- -->

Remarks  
This function may be called before <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a>.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">Error handling</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaff45816610d53f0b83656092a4034f40" class="el">glfwSetErrorCallback</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="gaff45816610d53f0b83656092a4034f40"></span>

## <span class="permalink">[◆ ](#gaff45816610d53f0b83656092a4034f40)</span>glfwSetErrorCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga8184701785c096b3862a75cda1bf44a3" class="el">GLFWerrorfun</a> glfwSetErrorCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga8184701785c096b3862a75cda1bf44a3" class="el">GLFWerrorfun</a>  | *callback* | ) |  |

</div>

<div class="memdoc">

This function sets the error callback, which is called with an error code and a human-readable description each time a GLFW error occurs.

The error code is set before the callback is called. Calling <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga944986b4ec0b928d488141f92982aa18" class="el">glfwGetError</a> from the error callback will return the same value as the error code argument.

The error callback is called on the thread where the error occurred. If you are using GLFW from multiple threads, your error callback needs to be written accordingly.

Because the description string may have been generated specifically for that error, it is not guaranteed to be valid after the callback has returned. If you wish to use it after the callback returns, you need to make a copy.

Once set, the error callback remains set even after the library has been terminated.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | callback | The new callback, or `NULL` to remove the currently set callback. |

<!-- -->

Returns  
The previously set callback, or `NULL` if no callback was set.

<!-- -->

Callback signature  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> callback_name(<span class="keywordtype">int</span> error_code, <span class="keyword">const</span> <span class="keywordtype">char</span>\* description)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga8184701785c096b3862a75cda1bf44a3" class="el">callback pointer type</a>.

<!-- -->

Errors  
None.

<!-- -->

Remarks  
This function may be called before <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">Error handling</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga944986b4ec0b928d488141f92982aa18" class="el">glfwGetError</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga6d6a983d38bd4e8fd786d7a9061d399e"></span>

## <span class="permalink">[◆ ](#ga6d6a983d38bd4e8fd786d7a9061d399e)</span>glfwGetPlatform()

<div class="memitem">

<div class="memproto">

|                     |     |       |     |     |     |
|---------------------|-----|-------|-----|-----|-----|
| int glfwGetPlatform | (   | void  |     | )   |     |

</div>

<div class="memdoc">

This function returns the platform that was selected during initialization. The returned value will be one of `GLFW_PLATFORM_WIN32`, `GLFW_PLATFORM_COCOA`, `GLFW_PLATFORM_WAYLAND`, `GLFW_PLATFORM_X11` or `GLFW_PLATFORM_NULL`.

Returns  
The currently selected platform, or zero if an error occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#platform" class="el">Runtime platform selection</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga8785d2b6b36632368d803e78079d38ed" class="el">glfwPlatformSupported</a>

<!-- -->

Since  
Added in version 3.4.

</div>

</div>

<span id="ga8785d2b6b36632368d803e78079d38ed"></span>

## <span class="permalink">[◆ ](#ga8785d2b6b36632368d803e78079d38ed)</span>glfwPlatformSupported()

<div class="memitem">

<div class="memproto">

|                           |     |      |            |     |     |
|---------------------------|-----|------|------------|-----|-----|
| int glfwPlatformSupported | (   | int  | *platform* | )   |     |

</div>

<div class="memdoc">

This function returns whether the library was compiled with support for the specified platform. The platform must be one of `GLFW_PLATFORM_WIN32`, `GLFW_PLATFORM_COCOA`, `GLFW_PLATFORM_WAYLAND`, `GLFW_PLATFORM_X11` or `GLFW_PLATFORM_NULL`.

Parameters  
|        |          |                        |
|--------|----------|------------------------|
| \[in\] | platform | The platform to query. |

<!-- -->

Returns  
`GLFW_TRUE` if the platform is supported, or `GLFW_FALSE` otherwise.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>.

<!-- -->

Remarks  
This function may be called before <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a>.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#platform" class="el">Runtime platform selection</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga6d6a983d38bd4e8fd786d7a9061d399e" class="el">glfwGetPlatform</a>

<!-- -->

Since  
Added in version 3.4.

</div>

</div>
