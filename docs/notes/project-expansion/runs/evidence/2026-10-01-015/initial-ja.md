---
title: "初期化・バージョン・エラーリファレンス"
description: "GLFW 3.5.1の初期化、バージョン、エラーに関するリファレンス"
---

<span id="details"></span>

## 説明

これは、ライブラリの初期化と終了、バージョン管理、エラー処理に関するリファレンスドキュメントです。作業手順を中心とした情報については、<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/" class="el">API入門</a>を参照してください。

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="modules" class="groupheader"><span id="groups"></span> モジュール</h2></td>
</tr>
<tr id="r_group__errors" class="memitem:group__errors">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/" class="el">エラーコード</a></td>
</tr>
<tr class="memdesc:group__errors">
<td class="mdescLeft"> </td>
<td class="mdescRight">エラーコード。<br />
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
<td colspan="2"><h2 id="macros" class="groupheader"><span id="define-members"></span> マクロ</h2></td>
</tr>
<tr id="r_ga2744fbb29b5631bb28802dbe0cf36eba" class="memitem:ga2744fbb29b5631bb28802dbe0cf36eba">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga2744fbb29b5631bb28802dbe0cf36eba" class="el">GLFW_TRUE</a>   1</td>
</tr>
<tr class="memdesc:ga2744fbb29b5631bb28802dbe0cf36eba">
<td class="mdescLeft"> </td>
<td class="mdescRight">1。<br />
</td>
</tr>
<tr class="separator:ga2744fbb29b5631bb28802dbe0cf36eba">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac877fe3b627d21ef3a0a23e0a73ba8c5" class="memitem:gac877fe3b627d21ef3a0a23e0a73ba8c5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gac877fe3b627d21ef3a0a23e0a73ba8c5" class="el">GLFW_FALSE</a>   0</td>
</tr>
<tr class="memdesc:gac877fe3b627d21ef3a0a23e0a73ba8c5">
<td class="mdescLeft"> </td>
<td class="mdescRight">0。<br />
</td>
</tr>
<tr class="separator:gac877fe3b627d21ef3a0a23e0a73ba8c5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab9c0534709fda03ec8959201da3a9a18" class="memitem:gab9c0534709fda03ec8959201da3a9a18">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gab9c0534709fda03ec8959201da3a9a18" class="el">GLFW_JOYSTICK_HAT_BUTTONS</a>   0x00050001</td>
</tr>
<tr class="memdesc:gab9c0534709fda03ec8959201da3a9a18">
<td class="mdescLeft"> </td>
<td class="mdescRight">ジョイスティックのハットボタンに関する初期化ヒント。<br />
</td>
</tr>
<tr class="separator:gab9c0534709fda03ec8959201da3a9a18">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaec269b24cf549ab46292c0125d8bbdce" class="memitem:gaec269b24cf549ab46292c0125d8bbdce">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaec269b24cf549ab46292c0125d8bbdce" class="el">GLFW_ANGLE_PLATFORM_TYPE</a>   0x00050002</td>
</tr>
<tr class="memdesc:gaec269b24cf549ab46292c0125d8bbdce">
<td class="mdescLeft"> </td>
<td class="mdescRight">ANGLEレンダリングバックエンドの初期化ヒント。<br />
</td>
</tr>
<tr class="separator:gaec269b24cf549ab46292c0125d8bbdce">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9d38bf1fdf4f91d6565401734a7cd967" class="memitem:ga9d38bf1fdf4f91d6565401734a7cd967">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9d38bf1fdf4f91d6565401734a7cd967" class="el">GLFW_PLATFORM</a>   0x00050003</td>
</tr>
<tr class="memdesc:ga9d38bf1fdf4f91d6565401734a7cd967">
<td class="mdescLeft"> </td>
<td class="mdescRight">プラットフォーム選択の初期化ヒント。<br />
</td>
</tr>
<tr class="separator:ga9d38bf1fdf4f91d6565401734a7cd967">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab937983147a3158d45f88fad7129d9f2" class="memitem:gab937983147a3158d45f88fad7129d9f2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gab937983147a3158d45f88fad7129d9f2" class="el">GLFW_COCOA_CHDIR_RESOURCES</a>   0x00051001</td>
</tr>
<tr class="memdesc:gab937983147a3158d45f88fad7129d9f2">
<td class="mdescLeft"> </td>
<td class="mdescRight">macOS固有の初期化ヒント。<br />
</td>
</tr>
<tr class="separator:gab937983147a3158d45f88fad7129d9f2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga71e0b4ce2f2696a84a9b8c5e12dc70cf" class="memitem:ga71e0b4ce2f2696a84a9b8c5e12dc70cf">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga71e0b4ce2f2696a84a9b8c5e12dc70cf" class="el">GLFW_COCOA_MENUBAR</a>   0x00051002</td>
</tr>
<tr class="memdesc:ga71e0b4ce2f2696a84a9b8c5e12dc70cf">
<td class="mdescLeft"> </td>
<td class="mdescRight">macOS固有の初期化ヒント。<br />
</td>
</tr>
<tr class="separator:ga71e0b4ce2f2696a84a9b8c5e12dc70cf">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa341e303ebeb8e4199b8ab8be84351f6" class="memitem:gaa341e303ebeb8e4199b8ab8be84351f6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaa341e303ebeb8e4199b8ab8be84351f6" class="el">GLFW_X11_XCB_VULKAN_SURFACE</a>   0x00052001</td>
</tr>
<tr class="memdesc:gaa341e303ebeb8e4199b8ab8be84351f6">
<td class="mdescLeft"> </td>
<td class="mdescRight">X11固有の初期化ヒント。<br />
</td>
</tr>
<tr class="separator:gaa341e303ebeb8e4199b8ab8be84351f6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga2a3f2fd7695902c498b050215b3db452" class="memitem:ga2a3f2fd7695902c498b050215b3db452">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga2a3f2fd7695902c498b050215b3db452" class="el">GLFW_WAYLAND_LIBDECOR</a>   0x00053001</td>
</tr>
<tr class="memdesc:ga2a3f2fd7695902c498b050215b3db452">
<td class="mdescLeft"> </td>
<td class="mdescRight">Wayland固有の初期化ヒント。<br />
</td>
</tr>
<tr class="separator:ga2a3f2fd7695902c498b050215b3db452">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga18b2d37374d0dea28cd69194fa85b859" class="memitem:ga18b2d37374d0dea28cd69194fa85b859">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga18b2d37374d0dea28cd69194fa85b859" class="el">GLFW_ANY_PLATFORM</a>   0x00060000</td>
</tr>
<tr class="memdesc:ga18b2d37374d0dea28cd69194fa85b859">
<td class="mdescLeft"> </td>
<td class="mdescRight">プラットフォームの自動選択を有効にするヒント値。<br />
</td>
</tr>
<tr class="separator:ga18b2d37374d0dea28cd69194fa85b859">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8d3d17df2ab57492cef665da52c603a1" class="memitem:ga8d3d17df2ab57492cef665da52c603a1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga8d3d17df2ab57492cef665da52c603a1" class="el">GLFW_PLATFORM_WIN32</a>   0x00060001</td>
</tr>
<tr class="separator:ga8d3d17df2ab57492cef665da52c603a1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga83b18714254f75bc2f0cdbafa0f10b6b" class="memitem:ga83b18714254f75bc2f0cdbafa0f10b6b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga83b18714254f75bc2f0cdbafa0f10b6b" class="el">GLFW_PLATFORM_COCOA</a>   0x00060002</td>
</tr>
<tr class="separator:ga83b18714254f75bc2f0cdbafa0f10b6b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac4b08906a3cbf26c518a4a543eedd740" class="memitem:gac4b08906a3cbf26c518a4a543eedd740">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gac4b08906a3cbf26c518a4a543eedd740" class="el">GLFW_PLATFORM_WAYLAND</a>   0x00060003</td>
</tr>
<tr class="separator:gac4b08906a3cbf26c518a4a543eedd740">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf5333f3933e9c248a00cfda6523f386b" class="memitem:gaf5333f3933e9c248a00cfda6523f386b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaf5333f3933e9c248a00cfda6523f386b" class="el">GLFW_PLATFORM_X11</a>   0x00060004</td>
</tr>
<tr class="separator:gaf5333f3933e9c248a00cfda6523f386b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac06fad5a4866ae7a1d7b2675fac72d7f" class="memitem:gac06fad5a4866ae7a1d7b2675fac72d7f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gac06fad5a4866ae7a1d7b2675fac72d7f" class="el">GLFW_PLATFORM_NULL</a>   0x00060005</td>
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
<td colspan="2"><h2 id="typedefs" class="groupheader"><span id="typedef-members"></span> 型定義</h2></td>
</tr>
<tr id="r_ga4306a564e9f60f4de8cc8f31731a3120" class="memitem:ga4306a564e9f60f4de8cc8f31731a3120">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void *(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga4306a564e9f60f4de8cc8f31731a3120" class="el">GLFWallocatefun</a>) (size_t size, void *user)</td>
</tr>
<tr class="memdesc:ga4306a564e9f60f4de8cc8f31731a3120">
<td class="mdescLeft"> </td>
<td class="mdescRight">メモリ割り当てコールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:ga4306a564e9f60f4de8cc8f31731a3120">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3e88a829615d8efe8bec1746f7309c63" class="memitem:ga3e88a829615d8efe8bec1746f7309c63">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void *(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga3e88a829615d8efe8bec1746f7309c63" class="el">GLFWreallocatefun</a>) (void *block, size_t size, void *user)</td>
</tr>
<tr class="memdesc:ga3e88a829615d8efe8bec1746f7309c63">
<td class="mdescLeft"> </td>
<td class="mdescRight">メモリ再割り当てコールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:ga3e88a829615d8efe8bec1746f7309c63">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7181615eda94c4b07bd72bdcee39fa28" class="memitem:ga7181615eda94c4b07bd72bdcee39fa28">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga7181615eda94c4b07bd72bdcee39fa28" class="el">GLFWdeallocatefun</a>) (void *block, void *user)</td>
</tr>
<tr class="memdesc:ga7181615eda94c4b07bd72bdcee39fa28">
<td class="mdescLeft"> </td>
<td class="mdescRight">メモリ解放コールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:ga7181615eda94c4b07bd72bdcee39fa28">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8184701785c096b3862a75cda1bf44a3" class="memitem:ga8184701785c096b3862a75cda1bf44a3">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga8184701785c096b3862a75cda1bf44a3" class="el">GLFWerrorfun</a>) (int error_code, const char *description)</td>
</tr>
<tr class="memdesc:ga8184701785c096b3862a75cda1bf44a3">
<td class="mdescLeft"> </td>
<td class="mdescRight">エラーコールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:ga8184701785c096b3862a75cda1bf44a3">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga145c57d7f2aeda0b704a5a4ba1d6104b" class="memitem:ga145c57d7f2aeda0b704a5a4ba1d6104b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef struct <a href="/docs/glfw/v3-5-1/ja/04-reference/17-glfwallocator/" class="el">GLFWallocator</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga145c57d7f2aeda0b704a5a4ba1d6104b" class="el">GLFWallocator</a></td>
</tr>
<tr class="memdesc:ga145c57d7f2aeda0b704a5a4ba1d6104b">
<td class="mdescLeft"> </td>
<td class="mdescRight">カスタムヒープメモリアロケータ。<br />
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
<td colspan="2"><h2 id="functions" class="groupheader"><span id="func-members"></span> 関数</h2></td>
</tr>
<tr id="r_ga317aac130a235ab08c6db0834907d85e" class="memitem:ga317aac130a235ab08c6db0834907d85e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> (void)</td>
</tr>
<tr class="memdesc:ga317aac130a235ab08c6db0834907d85e">
<td class="mdescLeft"> </td>
<td class="mdescRight">GLFWライブラリを初期化します。<br />
</td>
</tr>
<tr class="separator:ga317aac130a235ab08c6db0834907d85e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaaae48c0a18607ea4a4ba951d939f0901" class="memitem:gaaae48c0a18607ea4a4ba951d939f0901">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a> (void)</td>
</tr>
<tr class="memdesc:gaaae48c0a18607ea4a4ba951d939f0901">
<td class="mdescLeft"> </td>
<td class="mdescRight">GLFWライブラリを終了します。<br />
</td>
</tr>
<tr class="separator:gaaae48c0a18607ea4a4ba951d939f0901">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga110fd1d3f0412822b4f1908c026f724a" class="memitem:ga110fd1d3f0412822b4f1908c026f724a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga110fd1d3f0412822b4f1908c026f724a" class="el">glfwInitHint</a> (int hint, int value)</td>
</tr>
<tr class="memdesc:ga110fd1d3f0412822b4f1908c026f724a">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定した初期化ヒントを目的の値に設定します。<br />
</td>
</tr>
<tr class="separator:ga110fd1d3f0412822b4f1908c026f724a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9dde93e9891fa7dd17e4194c9f3ae7c6" class="memitem:ga9dde93e9891fa7dd17e4194c9f3ae7c6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6" class="el">glfwInitAllocator</a> (const <a href="/docs/glfw/v3-5-1/ja/04-reference/17-glfwallocator/" class="el">GLFWallocator</a> *allocator)</td>
</tr>
<tr class="memdesc:ga9dde93e9891fa7dd17e4194c9f3ae7c6">
<td class="mdescLeft"> </td>
<td class="mdescRight">初期化時のアロケータを目的の値に設定します。<br />
</td>
</tr>
<tr class="separator:ga9dde93e9891fa7dd17e4194c9f3ae7c6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga76af552d0307bb5f7791f245417d4752" class="memitem:ga76af552d0307bb5f7791f245417d4752">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga76af552d0307bb5f7791f245417d4752" class="el">glfwInitVulkanLoader</a> (PFN_vkGetInstanceProcAddr loader)</td>
</tr>
<tr class="memdesc:ga76af552d0307bb5f7791f245417d4752">
<td class="mdescLeft"> </td>
<td class="mdescRight">使用するVulkanの<code>vkGetInstanceProcAddr</code>関数を設定します。<br />
</td>
</tr>
<tr class="separator:ga76af552d0307bb5f7791f245417d4752">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9f8ffaacf3c269cc48eafbf8b9b71197" class="memitem:ga9f8ffaacf3c269cc48eafbf8b9b71197">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9f8ffaacf3c269cc48eafbf8b9b71197" class="el">glfwGetVersion</a> (int *major, int *minor, int *rev)</td>
</tr>
<tr class="memdesc:ga9f8ffaacf3c269cc48eafbf8b9b71197">
<td class="mdescLeft"> </td>
<td class="mdescRight">GLFWライブラリのバージョンを取得します。<br />
</td>
</tr>
<tr class="separator:ga9f8ffaacf3c269cc48eafbf8b9b71197">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga026abd003c8e6501981ab1662062f1c0" class="memitem:ga026abd003c8e6501981ab1662062f1c0">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga026abd003c8e6501981ab1662062f1c0" class="el">glfwGetVersionString</a> (void)</td>
</tr>
<tr class="memdesc:ga026abd003c8e6501981ab1662062f1c0">
<td class="mdescLeft"> </td>
<td class="mdescRight">コンパイル時の構成を説明する文字列を返します。<br />
</td>
</tr>
<tr class="separator:ga026abd003c8e6501981ab1662062f1c0">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga944986b4ec0b928d488141f92982aa18" class="memitem:ga944986b4ec0b928d488141f92982aa18">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga944986b4ec0b928d488141f92982aa18" class="el">glfwGetError</a> (const char **description)</td>
</tr>
<tr class="memdesc:ga944986b4ec0b928d488141f92982aa18">
<td class="mdescLeft"> </td>
<td class="mdescRight">呼び出し元スレッドの直前のエラーを返し、そのエラーを消去します。<br />
</td>
</tr>
<tr class="separator:ga944986b4ec0b928d488141f92982aa18">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaff45816610d53f0b83656092a4034f40" class="memitem:gaff45816610d53f0b83656092a4034f40">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga8184701785c096b3862a75cda1bf44a3" class="el">GLFWerrorfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaff45816610d53f0b83656092a4034f40" class="el">glfwSetErrorCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga8184701785c096b3862a75cda1bf44a3" class="el">GLFWerrorfun</a> callback)</td>
</tr>
<tr class="memdesc:gaff45816610d53f0b83656092a4034f40">
<td class="mdescLeft"> </td>
<td class="mdescRight">エラーコールバックを設定します。<br />
</td>
</tr>
<tr class="separator:gaff45816610d53f0b83656092a4034f40">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6d6a983d38bd4e8fd786d7a9061d399e" class="memitem:ga6d6a983d38bd4e8fd786d7a9061d399e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga6d6a983d38bd4e8fd786d7a9061d399e" class="el">glfwGetPlatform</a> (void)</td>
</tr>
<tr class="memdesc:ga6d6a983d38bd4e8fd786d7a9061d399e">
<td class="mdescLeft"> </td>
<td class="mdescRight">現在選択されているプラットフォームを返します。<br />
</td>
</tr>
<tr class="separator:ga6d6a983d38bd4e8fd786d7a9061d399e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8785d2b6b36632368d803e78079d38ed" class="memitem:ga8785d2b6b36632368d803e78079d38ed">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga8785d2b6b36632368d803e78079d38ed" class="el">glfwPlatformSupported</a> (int platform)</td>
</tr>
<tr class="memdesc:ga8785d2b6b36632368d803e78079d38ed">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定したプラットフォームのサポートがライブラリに含まれるかを返します。<br />
</td>
</tr>
<tr class="separator:ga8785d2b6b36632368d803e78079d38ed">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## マクロ定義の解説

<span id="ga6337d9ea43b22fc529b2bba066b4a576"></span>

## <span class="permalink">[◆ ](#ga6337d9ea43b22fc529b2bba066b4a576)</span>GLFW_VERSION_MAJOR

<div class="memitem">

<div class="memproto">

|                                 |
|---------------------------------|
| \#define GLFW_VERSION_MAJOR   3 |

</div>

<div class="memdoc">

GLFWヘッダーのメジャーバージョン番号です。APIに互換性のない変更が行われたときに増加します。

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

GLFWヘッダーのマイナーバージョン番号です。後方互換性を維持したままAPIへ機能が追加されたときに増加します。

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

GLFWヘッダーのリビジョン番号です。APIの変更を含まないバグ修正版がリリースされたときに増加します。

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

これは数値1を意味的に分かりやすくするためのものにすぎません。代わりに、`1`、`true`、`_True`、`GL_TRUE`、`VK_TRUE`、または1と等しいほかの任意の値を使用できます。

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

これは数値0を意味的に分かりやすくするためのものにすぎません。代わりに、`0`、`false`、`_False`、`GL_FALSE`、`VK_FALSE`、または0と等しいほかの任意の値を使用できます。

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

ジョイスティックのハットボタンに関する<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#GLFW_JOYSTICK_HAT_BUTTONS" class="el">初期化ヒント</a>です。

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

ANGLEレンダリングバックエンドの<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#GLFW_ANGLE_PLATFORM_TYPE_hint" class="el">初期化ヒント</a>です。

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

プラットフォーム選択の<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#GLFW_PLATFORM" class="el">初期化ヒント</a>です。

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

macOS固有の<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#GLFW_COCOA_CHDIR_RESOURCES_hint" class="el">初期化ヒント</a>です。

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

macOS固有の<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#GLFW_COCOA_MENUBAR_hint" class="el">初期化ヒント</a>です。

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

X11固有の<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#GLFW_X11_XCB_VULKAN_SURFACE_hint" class="el">初期化ヒント</a>です。

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

Wayland固有の<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#GLFW_WAYLAND_LIBDECOR_hint" class="el">初期化ヒント</a>です。

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

プラットフォームの自動選択を有効にする、<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#GLFW_PLATFORM" class="el">GLFW_PLATFORM</a>のヒント値です。

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

## 型定義の解説

<span id="ga4306a564e9f60f4de8cc8f31731a3120"></span>

## <span class="permalink">[◆ ](#ga4306a564e9f60f4de8cc8f31731a3120)</span>GLFWallocatefun

<div class="memitem">

<div class="memproto">

|                                                                |
|----------------------------------------------------------------|
| typedef void \*(\* GLFWallocatefun) (size_t size, void \*user) |

</div>

<div class="memdoc">

これは、メモリ割り当てコールバックの関数ポインター型です。メモリ割り当てコールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span>\* function_name(<span class="keywordtype">size_t</span> size, <span class="keywordtype">void</span>\* user)

</div>

</div>

この関数は、少なくとも `size` バイトのメモリブロックを返すか、割り当てに失敗した場合は `NULL` を返さなければなりません。GLFWのすべての部分が、割り当ての失敗を適切に処理できるわけではないことに注意してください。

この関数は、<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> の実行中で、ライブラリが初期化済みとされる前に呼び出される場合と、<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a> の実行中で、ライブラリが初期化済みではなくなった後に呼び出される場合の両方をサポートしなければなりません。

この関数を介して割り当てられたメモリは、ライブラリの終了中またはそれより前に、同じアロケータを介して解放されます。

この関数を介して割り当てられたメモリは、どのオブジェクト型にも適するようアラインされていなければなりません。C99以前を使用している場合、このアラインメントはプラットフォームに依存しますが、`malloc` が提供するものと同じです。C11以降を使用している場合は、`alignof(max_align_t)` の値です。

サイズは常に0より大きくなります。サイズ0の割り当ては、カスタムアロケータへ到達する前に除外されます。

この関数が `NULL` を返すと、GLFWは <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga9023953a2bcb98c2906afd071d21ee7f" class="el">GLFW_OUT_OF_MEMORY</a> を発生させます。

この関数は、どのGLFW関数も呼び出してはなりません。

引数  
|        |      |                                                  |
|--------|------|--------------------------------------------------|
| \[in\] | size | メモリブロックの最小サイズ（バイト単位）。 |
| \[in\] | user | アロケータに設定されたユーザー定義ポインター。 |

<!-- -->

戻り値  
新たに割り当てられたメモリブロックのアドレス。エラーが発生した場合は `NULL`。

<!-- -->

ポインターの有効期間  
返されたメモリブロックは、少なくとも解放されるまで有効でなければなりません。

<!-- -->

再入可能性  
この関数は、どのGLFW関数も呼び出すべきではありません。

<!-- -->

スレッドセーフ性  
この関数は、GLFW関数を呼び出すどのスレッドから呼び出される場合もサポートしなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#init_allocator" class="el">カスタムヒープメモリアロケータ</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/17-glfwallocator/" class="el">GLFWallocator</a>

<!-- -->

導入バージョン  
バージョン3.4で追加。

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

これは、メモリ再割り当てコールバックの関数ポインター型です。メモリ再割り当てコールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span>\* function_name(<span class="keywordtype">void</span>\* block, <span class="keywordtype">size_t</span> size, <span class="keywordtype">void</span>\* user)

</div>

</div>

この関数は、少なくとも `size` バイトのメモリブロックを返すか、割り当てに失敗した場合は `NULL` を返さなければなりません。GLFWのすべての部分が、割り当ての失敗を適切に処理できるわけではないことに注意してください。

この関数は、<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> の実行中で、ライブラリが初期化済みとされる前に呼び出される場合と、<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a> の実行中で、ライブラリが初期化済みではなくなった後に呼び出される場合の両方をサポートしなければなりません。

この関数を介して割り当てられたメモリは、ライブラリの終了中またはそれより前に、同じアロケータを介して解放されます。

この関数を介して割り当てられたメモリは、どのオブジェクト型にも適するようアラインされていなければなりません。C99以前を使用している場合、このアラインメントはプラットフォームに依存しますが、`realloc` が提供するものと同じです。C11以降を使用している場合は、`alignof(max_align_t)` の値です。

ブロックのアドレスが `NULL` になることはなく、サイズは常に0より大きくなります。ブロックをサイズ0へ再割り当てする処理は、カスタムアロケータへ到達する前に解放処理へ変換されます。`NULL` を0以外のサイズへ再割り当てする処理は、カスタムアロケータへ到達する前に通常の割り当て処理へ変換されます。

この関数が `NULL` を返すと、GLFWは <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga9023953a2bcb98c2906afd071d21ee7f" class="el">GLFW_OUT_OF_MEMORY</a> を発生させます。

この関数は、どのGLFW関数も呼び出してはなりません。

引数  
|        |       |                                                      |
|--------|-------|------------------------------------------------------|
| \[in\] | block | 再割り当てするメモリブロックのアドレス。 |
| \[in\] | size  | メモリブロックの新しい最小サイズ（バイト単位）。 |
| \[in\] | user  | アロケータに設定されたユーザー定義ポインター。 |

<!-- -->

戻り値  
新たに割り当てられたか、サイズを変更されたメモリブロックのアドレス。エラーが発生した場合は `NULL`。

<!-- -->

ポインターの有効期間  
返されたメモリブロックは、少なくとも解放されるまで有効でなければなりません。

<!-- -->

再入可能性  
この関数は、どのGLFW関数も呼び出すべきではありません。

<!-- -->

スレッドセーフ性  
この関数は、GLFW関数を呼び出すどのスレッドから呼び出される場合もサポートしなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#init_allocator" class="el">カスタムヒープメモリアロケータ</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/17-glfwallocator/" class="el">GLFWallocator</a>

<!-- -->

導入バージョン  
バージョン3.4で追加。

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

これは、メモリ解放コールバックの関数ポインター型です。メモリ解放コールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<span class="keywordtype">void</span>\* block, <span class="keywordtype">void</span>\* user)

</div>

</div>

この関数は、指定されたメモリブロックを解放できます。このメモリブロックは、同じアロケータによって割り当てられたものです。

この関数は、<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> の実行中で、ライブラリが初期化済みとされる前に呼び出される場合と、<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a> の実行中で、ライブラリが初期化済みではなくなった後に呼び出される場合の両方をサポートしなければなりません。

ブロックのアドレスが `NULL` になることはありません。`NULL` の解放は、カスタムアロケータへ到達する前に除外されます。

この関数が `NULL` を返すと、GLFWは <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga9023953a2bcb98c2906afd071d21ee7f" class="el">GLFW_OUT_OF_MEMORY</a> を発生させます。

この関数は、どのGLFW関数も呼び出してはなりません。

引数  
|        |       |                                                |
|--------|-------|------------------------------------------------|
| \[in\] | block | 解放するメモリブロックのアドレス。 |
| \[in\] | user  | アロケータに設定されたユーザー定義ポインター。 |

<!-- -->

ポインターの有効期間  
この関数が呼び出された後、GLFWは指定されたメモリブロックへアクセスしません。

<!-- -->

再入可能性  
この関数は、どのGLFW関数も呼び出すべきではありません。

<!-- -->

スレッドセーフ性  
この関数は、GLFW関数を呼び出すどのスレッドから呼び出される場合もサポートしなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#init_allocator" class="el">カスタムヒープメモリアロケータ</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/17-glfwallocator/" class="el">GLFWallocator</a>

<!-- -->

導入バージョン  
バージョン3.4で追加。

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

これは、エラーコールバックの関数ポインター型です。エラーコールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> callback_name(<span class="keywordtype">int</span> error_code, <span class="keyword">const</span> <span class="keywordtype">char</span>\* description)

</div>

</div>

引数  
|  |  |  |
|----|----|----|
| \[in\] | error_code | <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/" class="el">エラーコード</a>。将来のリリースでエラーコードが追加される場合があります。 |
| \[in\] | description | エラーを説明するUTF-8エンコード文字列。 |

<!-- -->

ポインターの有効期間  
エラー説明文字列は、コールバック関数が戻るまで有効です。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー処理</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaff45816610d53f0b83656092a4034f40" class="el">glfwSetErrorCallback</a>

<!-- -->

導入バージョン  
バージョン3.0で追加。

</div>

</div>

<span id="ga145c57d7f2aeda0b704a5a4ba1d6104b"></span>

## <span class="permalink">[◆ ](#ga145c57d7f2aeda0b704a5a4ba1d6104b)</span>GLFWallocator

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef struct <a href="/docs/glfw/v3-5-1/ja/04-reference/17-glfwallocator/" class="el">GLFWallocator</a> <a href="/docs/glfw/v3-5-1/ja/04-reference/17-glfwallocator/" class="el">GLFWallocator</a> |

</div>

<div class="memdoc">

これは、GLFW用のカスタムヒープメモリアロケータを表します。アロケータを設定するには、ライブラリを初期化する前に <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6" class="el">glfwInitAllocator</a> へ渡します。

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#init_allocator" class="el">カスタムヒープメモリアロケータ</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6" class="el">glfwInitAllocator</a>

<!-- -->

導入バージョン  
バージョン3.4で追加。

</div>

</div>

## 関数の解説

<span id="ga317aac130a235ab08c6db0834907d85e"></span>

## <span class="permalink">[◆ ](#ga317aac130a235ab08c6db0834907d85e)</span>glfwInit()

<div class="memitem">

<div class="memproto">

|              |     |       |     |     |     |
|--------------|-----|-------|-----|-----|-----|
| int glfwInit | (   | void  |     | )   |     |

</div>

<div class="memdoc">

この関数はGLFWライブラリを初期化します。ほとんどのGLFW関数を使用する前にGLFWを初期化しなければなりません。また、初期化中または初期化後に割り当てられたリソースを解放するため、アプリケーションを終了する前にGLFWを終了するべきです。

この関数が失敗した場合は、戻る前に <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a> を呼び出します。成功した場合は、アプリケーションを終了する前に <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a> を呼び出すべきです。

初期化に成功してから終了するまでの間にこの関数を再度呼び出すと、直ちに `GLFW_TRUE` が返されます。

<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#GLFW_PLATFORM" class="el">GLFW_PLATFORM</a> 初期化ヒントは、初期化時にどのプラットフォームを対象とするかを制御します。これは、ライブラリがどのプラットフォームをサポートするようコンパイルされたかにも依存します。

戻り値  
成功した場合は `GLFW_TRUE`、<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `GLFW_FALSE`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
**macOS:** アプリケーションのバンドルに `Contents/Resources` サブディレクトリが存在する場合、この関数はアプリケーションのカレントディレクトリをそこへ変更します。この動作は <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gab937983147a3158d45f88fad7129d9f2" class="el">GLFW_COCOA_CHDIR_RESOURCES</a> 初期化ヒントで無効にできます。

**macOS:** この関数は、アプリケーションのメインメニューとDockアイコンを作成します。GLFWが `MainMenu.nib` を見つけた場合は、それを読み込み、メニューバーが含まれているものとみなします。それ以外の場合は、Hide、Quit、Aboutなどの一般的なコマンドを備えた最小限のメニューバーを手動で作成します。About項目は、アプリケーションのバンドルから得た情報を表示する最小限の情報ダイアログを開きます。メニューバーとDockアイコンは、<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga71e0b4ce2f2696a84a9b8c5e12dc70cf" class="el">GLFW_COCOA_MENUBAR</a> 初期化ヒントで完全に無効にできます。

**Wayland、X11:** ライブラリがWaylandとX11の両方をサポートするようコンパイルされ、<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#GLFW_PLATFORM" class="el">GLFW_PLATFORM</a> 初期化ヒントが `GLFW_ANY_PLATFORM` に設定されている場合、どのプラットフォームが選択されるかは `XDG_SESSION_TYPE` 環境変数の影響を受けます。この環境変数が設定されていないか、`wayland` と `x11` のどちらでもない値に設定されている場合は、代わりに通常の検出機構が使用されます。

**X11:** アプリケーションロケールの `LC_CTYPE` カテゴリがまだ「C」の場合、この関数は現在の環境に従ってそのカテゴリを設定します。これは、「C」ロケールではUnicodeテキスト入力が機能しなくなるためです。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化と終了</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga110fd1d3f0412822b4f1908c026f724a" class="el">glfwInitHint</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6" class="el">glfwInitAllocator</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a>

<!-- -->

導入バージョン  
バージョン1.0で追加。

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

この関数は、残っているすべてのウィンドウとカーソルを破棄し、変更されたガンマランプを復元して、割り当てられたほかのすべてのリソースを解放します。この関数を呼び出した後、ほとんどのGLFW関数を使用するには、<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> を再度呼び出して成功させなければなりません。

GLFWの初期化に成功した場合は、アプリケーションを終了する前にこの関数を呼び出すべきです。初期化に失敗した場合は、<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> が失敗を返す前にこの関数を呼び出すため、呼び出す必要はありません。

GLFWが初期化されていない場合、この関数は何も行いません。

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
この関数は <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> より前に呼び出してもかまいません。

<!-- -->

警告  
この関数を呼び出すとき、残っているウィンドウのコンテキストは、ほかのどのスレッドでもカレントであってはなりません。

<!-- -->

再入可能性  
この関数はコールバックから呼び出してはなりません。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化と終了</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a>

<!-- -->

導入バージョン  
バージョン1.0で追加。

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

この関数は、次回GLFWを初期化するときのヒントを設定します。

ヒントへ設定した値がGLFWによってリセットされることはありませんが、その値が効果を持つのは初期化中だけです。GLFWが初期化されると、その後に設定した値は、ライブラリを終了して再び初期化するまで無視されます。

一部のヒントはプラットフォーム固有です。これらはどのプラットフォームでも設定できますが、該当するプラットフォームにだけ影響します。ほかのプラットフォームでは無視されます。これらのヒントを設定するために、プラットフォーム固有のヘッダーや関数は必要ありません。

引数  
|  |  |  |
|----|----|----|
| \[in\] | hint | 設定する<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#init_hints" class="el">初期化ヒント</a>。 |
| \[in\] | value | 初期化ヒントの新しい値。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a> があります。

<!-- -->

備考  
この関数は <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> より前に呼び出してもかまいません。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
init_hints

<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el" title="GLFWライブラリを初期化します。">glfwInit</a>

<!-- -->

導入バージョン  
バージョン3.3で追加。

</div>

</div>

<span id="ga9dde93e9891fa7dd17e4194c9f3ae7c6"></span>

## <span class="permalink">[◆ ](#ga9dde93e9891fa7dd17e4194c9f3ae7c6)</span>glfwInitAllocator()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwInitAllocator | ( | const <a href="/docs/glfw/v3-5-1/ja/04-reference/17-glfwallocator/" class="el">GLFWallocator</a> \*  | *allocator* | ) |  |

</div>

<div class="memdoc">

既定のアロケータを使用するには、この関数を `NULL` 引数で呼び出します。

アロケータ構造体を指定する場合は、すべてのメンバーが有効な関数ポインターでなければなりません。いずれかのメンバーが `NULL` の場合、この関数は <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a> を発生させ、初期化時のアロケータは変更されません。

アロケータ内の関数は、複数の要件を満たさなければなりません。詳細については、<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga4306a564e9f60f4de8cc8f31731a3120" class="el">GLFWallocatefun</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga3e88a829615d8efe8bec1746f7309c63" class="el">GLFWreallocatefun</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga7181615eda94c4b07bd72bdcee39fa28" class="el">GLFWdeallocatefun</a> の各ドキュメントを参照してください。

引数  
|  |  |  |
|----|----|----|
| \[in\] | allocator | 次回の初期化で使用するアロケータ。既定のアロケータを使用する場合は `NULL`。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a> があります。

<!-- -->

ポインターの有効期間  
指定されたアロケータは、この関数が戻る前にコピーされます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#init_allocator" class="el">カスタムヒープメモリアロケータ</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a>

<!-- -->

導入バージョン  
バージョン3.4で追加。

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

この関数は、Vulkanに関係するすべてのエントリーポイント照会にGLFWが使用する `vkGetInstanceProcAddr` 関数を設定します。

この機能は主にmacOSで、VulkanローダーがGLFWによる動的読み込みでは見つけられない場所にある場合や、ローダーの静的ライブラリ版を引き続き使用している場合に役立ちます。

`NULL` に設定すると、GLFWはVulkanローダーを標準名で動的に読み込み、そこからこの関数を取得しようとします。これが既定の動作です。

ローダーの標準名は、Windowsでは `vulkan-1.dll`、LinuxおよびほかのUnix系システムでは `libvulkan.so.1`、macOSでは `libvulkan.1.dylib` です。コード側でもこれらの名前で読み込んでいる場合、この関数を使用する必要はおそらくありません。

設定した関数アドレスがGLFWによってリセットされることはありませんが、そのアドレスが効果を持つのは初期化中だけです。GLFWが初期化されると、その後の更新は、ライブラリを終了して再び初期化するまで無視されます。

引数  
|        |        |                                                |
|--------|--------|------------------------------------------------|
| \[in\] | loader | 使用する関数のアドレス、または `NULL`。 |

<!-- -->

ローダー関数のシグネチャ  
<div class="fragment">

<div class="line">

PFN_vkVoidFunction vkGetInstanceProcAddr(VkInstance instance, <span class="keyword">const</span> <span class="keywordtype">char</span>\* name)

</div>

</div>

この関数の詳細については、[Vulkan Registry](https://www.khronos.org/registry/vulkan/)を参照してください。

<!-- -->

エラー  
なし。

<!-- -->

備考  
この関数は <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> より前に呼び出してもかまいません。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/06-vulkan-guide/#vulkan_loader" class="el">Vulkanローダーの検索</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a>

<!-- -->

導入バージョン  
バージョン3.4で追加。

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

この関数は、GLFWライブラリのメジャー、マイナー、リビジョン番号を取得します。GLFWを共有ライブラリとして使用していて、最低限必要なバージョンを使用していることを確認したい場合を想定しています。

バージョン引数は、その一部またはすべてを `NULL` にできます。

引数  
|         |       |                                                     |
|---------|-------|-----------------------------------------------------|
| \[out\] | major | メジャーバージョン番号の格納先、または `NULL`。 |
| \[out\] | minor | マイナーバージョン番号の格納先、または `NULL`。 |
| \[out\] | rev   | リビジョン番号の格納先、または `NULL`。 |

<!-- -->

エラー  
なし。

<!-- -->

備考  
この関数は <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> より前に呼び出してもかまいません。

<!-- -->

スレッドセーフ性  
この関数はどのスレッドからでも呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_version" class="el">バージョン管理</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga026abd003c8e6501981ab1662062f1c0" class="el">glfwGetVersionString</a>

<!-- -->

導入バージョン  
バージョン1.0で追加。

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

この関数は、GLFWライブラリのバイナリについて、コンパイル時に生成された<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_version_string" class="el">バージョン文字列</a>を返します。この文字列は、バージョン、プラットフォーム、コンパイラ、およびプラットフォームまたはオペレーティングシステム固有のコンパイル時オプションを表します。`glGetString` で照会するOpenGLまたはOpenGL ESのバージョン文字列と混同しないでください。

GLFWライブラリのバージョンを解析するために、**バージョン文字列を使用してはなりません**。<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9f8ffaacf3c269cc48eafbf8b9b71197" class="el">glfwGetVersion</a> 関数は、実行中のライブラリバイナリのバージョンを数値形式で提供します。

どのプラットフォームがサポートされているかを解析するために、**バージョン文字列を使用してはなりません**。<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga8785d2b6b36632368d803e78079d38ed" class="el">glfwPlatformSupported</a> 関数を使うと、プラットフォームのサポートを照会できます。

戻り値  
ASCIIでエンコードされたGLFWのバージョン文字列。

<!-- -->

エラー  
なし。

<!-- -->

備考  
この関数は <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> より前に呼び出してもかまいません。

<!-- -->

ポインターの有効期間  
返される文字列は静的であり、コンパイル時に生成されます。

<!-- -->

スレッドセーフ性  
この関数はどのスレッドからでも呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_version" class="el">バージョン管理</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9f8ffaacf3c269cc48eafbf8b9b71197" class="el">glfwGetVersion</a>

<!-- -->

導入バージョン  
バージョン3.0で追加。

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

この関数は、呼び出し元スレッドで最後に発生したエラーの<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/" class="el">エラーコード</a>を返して消去し、必要に応じてUTF-8でエンコードされた人間が読める説明も返します。前回の呼び出し以降にエラーが発生していない場合は、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gafa30deee5db4d69c4c93d116ed87dbf4" class="el">GLFW_NO_ERROR</a>（0）を返し、説明ポインターを `NULL` に設定します。

引数  
|  |  |  |
|----|----|----|
| \[in\] | description | エラー説明ポインターの格納先、または `NULL`。 |

<!-- -->

戻り値  
呼び出し元スレッドの直前のエラーコード、または <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gafa30deee5db4d69c4c93d116ed87dbf4" class="el">GLFW_NO_ERROR</a>（0）。

<!-- -->

エラー  
なし。

<!-- -->

ポインターの有効期間  
返される文字列はGLFWによって割り当ておよび解放されます。自身で解放するべきではありません。次のエラーが発生するか、ライブラリが終了するまでだけ有効であることが保証されます。

<!-- -->

備考  
この関数は <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> より前に呼び出してもかまいません。

<!-- -->

スレッドセーフ性  
この関数はどのスレッドからでも呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー処理</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaff45816610d53f0b83656092a4034f40" class="el">glfwSetErrorCallback</a>

<!-- -->

導入バージョン  
バージョン3.3で追加。

</div>

</div>

<span id="gaff45816610d53f0b83656092a4034f40"></span>

## <span class="permalink">[◆ ](#gaff45816610d53f0b83656092a4034f40)</span>glfwSetErrorCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga8184701785c096b3862a75cda1bf44a3" class="el">GLFWerrorfun</a> glfwSetErrorCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga8184701785c096b3862a75cda1bf44a3" class="el">GLFWerrorfun</a>  | *callback* | ) |  |

</div>

<div class="memdoc">

この関数はエラーコールバックを設定します。このコールバックは、GLFWエラーが発生するたびに、エラーコードと人間が読める説明を引数として呼び出されます。

エラーコードは、コールバックが呼び出される前に設定されます。エラーコールバックから <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga944986b4ec0b928d488141f92982aa18" class="el">glfwGetError</a> を呼び出すと、エラーコード引数と同じ値が返されます。

エラーコールバックは、エラーが発生したスレッド上で呼び出されます。複数のスレッドからGLFWを使用する場合は、それに対応するようエラーコールバックを記述する必要があります。

説明文字列はそのエラー専用に生成されている場合があるため、コールバックが戻った後も有効であることは保証されません。コールバックが戻った後に使用する場合は、コピーを作成する必要があります。

一度設定したエラーコールバックは、ライブラリの終了後も設定されたままです。

引数  
|  |  |  |
|----|----|----|
| \[in\] | callback | 新しいコールバック。現在設定されているコールバックを解除する場合は `NULL`。 |

<!-- -->

戻り値  
以前設定されていたコールバック。コールバックが設定されていなかった場合は `NULL`。

<!-- -->

コールバックのシグネチャ  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> callback_name(<span class="keywordtype">int</span> error_code, <span class="keyword">const</span> <span class="keywordtype">char</span>\* description)

</div>

</div>

コールバック引数の詳細については、<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga8184701785c096b3862a75cda1bf44a3" class="el">コールバックポインター型</a>を参照してください。

<!-- -->

エラー  
なし。

<!-- -->

備考  
この関数は <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> より前に呼び出してもかまいません。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー処理</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga944986b4ec0b928d488141f92982aa18" class="el">glfwGetError</a>

<!-- -->

導入バージョン  
バージョン3.0で追加。

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

この関数は、初期化時に選択されたプラットフォームを返します。戻り値は、`GLFW_PLATFORM_WIN32`、`GLFW_PLATFORM_COCOA`、`GLFW_PLATFORM_WAYLAND`、`GLFW_PLATFORM_X11`、`GLFW_PLATFORM_NULL` のいずれかです。

戻り値  
現在選択されているプラットフォーム。エラーが発生した場合は0。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数はどのスレッドからでも呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#platform" class="el">実行時のプラットフォーム選択</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga8785d2b6b36632368d803e78079d38ed" class="el">glfwPlatformSupported</a>

<!-- -->

導入バージョン  
バージョン3.4で追加。

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

この関数は、指定したプラットフォームをサポートするようライブラリがコンパイルされたかを返します。プラットフォームは、`GLFW_PLATFORM_WIN32`、`GLFW_PLATFORM_COCOA`、`GLFW_PLATFORM_WAYLAND`、`GLFW_PLATFORM_X11`、`GLFW_PLATFORM_NULL` のいずれかでなければなりません。

引数  
|        |          |                        |
|--------|----------|------------------------|
| \[in\] | platform | 照会するプラットフォーム。 |

<!-- -->

戻り値  
プラットフォームがサポートされている場合は `GLFW_TRUE`、それ以外の場合は `GLFW_FALSE`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> があります。

<!-- -->

備考  
この関数は <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e" class="el">glfwInit</a> より前に呼び出してもかまいません。

<!-- -->

スレッドセーフ性  
この関数はどのスレッドからでも呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#platform" class="el">実行時のプラットフォーム選択</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga6d6a983d38bd4e8fd786d7a9061d399e" class="el">glfwGetPlatform</a>

<!-- -->

導入バージョン  
バージョン3.4で追加。

</div>

</div>
