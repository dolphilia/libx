---
title: "Native access"
description: "GLFW 3.5.1 Native access"
---

<span id="details"></span>

## Description

**By using the native access functions you assert that you know what you're doing and how to fix problems caused by using them. If you don't, you shouldn't be using them.**

Before the inclusion of <a href="https://www.glfw.org/docs/3.5.1/glfw3native_8h.html" class="el">glfw3native.h</a>, you may define zero or more window system API macro and zero or more context creation API macros.

The chosen backends must match those the library was compiled for. Failure to do this will cause a link-time error.

The available window API macros are:

- `GLFW_EXPOSE_NATIVE_WIN32`
- `GLFW_EXPOSE_NATIVE_COCOA`
- `GLFW_EXPOSE_NATIVE_X11`
- `GLFW_EXPOSE_NATIVE_WAYLAND`

The available context API macros are:

- `GLFW_EXPOSE_NATIVE_WGL`
- `GLFW_EXPOSE_NATIVE_NSGL`
- `GLFW_EXPOSE_NATIVE_GLX`
- `GLFW_EXPOSE_NATIVE_EGL`
- `GLFW_EXPOSE_NATIVE_OSMESA`

These macros select which of the native access functions that are declared and which platform-specific headers to include. It is then up your (by definition platform-specific) code to handle which of these should be defined.

If you do not want the platform-specific headers to be included, define `GLFW_NATIVE_INCLUDE_NONE` before including the <a href="https://www.glfw.org/docs/3.5.1/glfw3native_8h.html" class="el">glfw3native.h</a> header.

<div class="fragment">

<div class="line">

<span class="preprocessor">\#define GLFW_EXPOSE_NATIVE_WIN32</span>

</div>

<div class="line">

<span class="preprocessor">\#define GLFW_EXPOSE_NATIVE_WGL</span>

</div>

<div class="line">

<span class="preprocessor">\#define GLFW_NATIVE_INCLUDE_NONE</span>

</div>

<div class="line">

<span class="preprocessor">\#include \<<a href="https://www.glfw.org/docs/3.5.1/glfw3native_8h.html" class="code">GLFW/glfw3native.h</a>\></span>

</div>

<div id="aglfw3native_8h_html" class="ttc">

<div class="ttname">

[glfw3native.h](https://www.glfw.org/docs/3.5.1/glfw3native_8h.html)

</div>

<div class="ttdoc">

The header of the native access functions.

</div>

</div>

</div>

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="functions" class="groupheader"><span id="func-members"></span> Functions</h2></td>
</tr>
<tr id="r_gad4d3e9242536c0ba6be88a98f4c73a41" class="memitem:gad4d3e9242536c0ba6be88a98f4c73a41">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gad4d3e9242536c0ba6be88a98f4c73a41" class="el">glfwGetWin32Adapter</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:gad4d3e9242536c0ba6be88a98f4c73a41">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the adapter device name of the specified monitor.<br />
</td>
</tr>
<tr class="separator:gad4d3e9242536c0ba6be88a98f4c73a41">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac845f7dbe4c1d7fdd682a3c6fdae6766" class="memitem:gac845f7dbe4c1d7fdd682a3c6fdae6766">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gac845f7dbe4c1d7fdd682a3c6fdae6766" class="el">glfwGetWin32Monitor</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:gac845f7dbe4c1d7fdd682a3c6fdae6766">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the display device name of the specified monitor.<br />
</td>
</tr>
<tr class="separator:gac845f7dbe4c1d7fdd682a3c6fdae6766">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafe5079aa79038b0079fc09d5f0a8e667" class="memitem:gafe5079aa79038b0079fc09d5f0a8e667">
<td class="memItemLeft" style="text-align: right;" data-valign="top">HWND </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gafe5079aa79038b0079fc09d5f0a8e667" class="el">glfwGetWin32Window</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:gafe5079aa79038b0079fc09d5f0a8e667">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>HWND</code> of the specified window.<br />
</td>
</tr>
<tr class="separator:gafe5079aa79038b0079fc09d5f0a8e667">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadc4010d91d9cc1134d040eeb1202a143" class="memitem:gadc4010d91d9cc1134d040eeb1202a143">
<td class="memItemLeft" style="text-align: right;" data-valign="top">HGLRC </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gadc4010d91d9cc1134d040eeb1202a143" class="el">glfwGetWGLContext</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:gadc4010d91d9cc1134d040eeb1202a143">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>HGLRC</code> of the specified window.<br />
</td>
</tr>
<tr class="separator:gadc4010d91d9cc1134d040eeb1202a143">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf22f429aec4b1aab316142d66d9be3e6" class="memitem:gaf22f429aec4b1aab316142d66d9be3e6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">CGDirectDisplayID </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gaf22f429aec4b1aab316142d66d9be3e6" class="el">glfwGetCocoaMonitor</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:gaf22f429aec4b1aab316142d66d9be3e6">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>CGDirectDisplayID</code> of the specified monitor.<br />
</td>
</tr>
<tr class="separator:gaf22f429aec4b1aab316142d66d9be3e6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac3ed9d495d0c2bb9652de5a50c648715" class="memitem:gac3ed9d495d0c2bb9652de5a50c648715">
<td class="memItemLeft" style="text-align: right;" data-valign="top">id </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gac3ed9d495d0c2bb9652de5a50c648715" class="el">glfwGetCocoaWindow</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:gac3ed9d495d0c2bb9652de5a50c648715">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>NSWindow</code> of the specified window.<br />
</td>
</tr>
<tr class="separator:gac3ed9d495d0c2bb9652de5a50c648715">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7274fb6595894e880fc95dc63156e9b1" class="memitem:ga7274fb6595894e880fc95dc63156e9b1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">id </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga7274fb6595894e880fc95dc63156e9b1" class="el">glfwGetCocoaView</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga7274fb6595894e880fc95dc63156e9b1">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>NSView</code> of the specified window.<br />
</td>
</tr>
<tr class="separator:ga7274fb6595894e880fc95dc63156e9b1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga559e002e3cd63c979881770cd4dc63bc" class="memitem:ga559e002e3cd63c979881770cd4dc63bc">
<td class="memItemLeft" style="text-align: right;" data-valign="top">id </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga559e002e3cd63c979881770cd4dc63bc" class="el">glfwGetNSGLContext</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga559e002e3cd63c979881770cd4dc63bc">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>NSOpenGLContext</code> of the specified window.<br />
</td>
</tr>
<tr class="separator:ga559e002e3cd63c979881770cd4dc63bc">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6e7822385cc8a1cc3b18f60352830189" class="memitem:ga6e7822385cc8a1cc3b18f60352830189">
<td class="memItemLeft" style="text-align: right;" data-valign="top">Display * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga6e7822385cc8a1cc3b18f60352830189" class="el">glfwGetX11Display</a> (void)</td>
</tr>
<tr class="memdesc:ga6e7822385cc8a1cc3b18f60352830189">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>Display</code> used by GLFW.<br />
</td>
</tr>
<tr class="separator:ga6e7822385cc8a1cc3b18f60352830189">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga088fbfa80f50569402b41be71ad66e40" class="memitem:ga088fbfa80f50569402b41be71ad66e40">
<td class="memItemLeft" style="text-align: right;" data-valign="top">RRCrtc </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga088fbfa80f50569402b41be71ad66e40" class="el">glfwGetX11Adapter</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:ga088fbfa80f50569402b41be71ad66e40">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>RRCrtc</code> of the specified monitor.<br />
</td>
</tr>
<tr class="separator:ga088fbfa80f50569402b41be71ad66e40">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab2f8cc043905e9fa9b12bfdbbcfe874c" class="memitem:gab2f8cc043905e9fa9b12bfdbbcfe874c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">RROutput </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gab2f8cc043905e9fa9b12bfdbbcfe874c" class="el">glfwGetX11Monitor</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:gab2f8cc043905e9fa9b12bfdbbcfe874c">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>RROutput</code> of the specified monitor.<br />
</td>
</tr>
<tr class="separator:gab2f8cc043905e9fa9b12bfdbbcfe874c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga90ca676322740842db446999a1b1f21d" class="memitem:ga90ca676322740842db446999a1b1f21d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">Window </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga90ca676322740842db446999a1b1f21d" class="el">glfwGetX11Window</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga90ca676322740842db446999a1b1f21d">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>Window</code> of the specified window.<br />
</td>
</tr>
<tr class="separator:ga90ca676322740842db446999a1b1f21d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga55f879ab02d93367f966186b6f0133f7" class="memitem:ga55f879ab02d93367f966186b6f0133f7">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga55f879ab02d93367f966186b6f0133f7" class="el">glfwSetX11SelectionString</a> (const char *string)</td>
</tr>
<tr class="memdesc:ga55f879ab02d93367f966186b6f0133f7">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the current primary selection to the specified string.<br />
</td>
</tr>
<tr class="separator:ga55f879ab02d93367f966186b6f0133f7">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae084ef64dc0db140b455b1427256d3f7" class="memitem:gae084ef64dc0db140b455b1427256d3f7">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gae084ef64dc0db140b455b1427256d3f7" class="el">glfwGetX11SelectionString</a> (void)</td>
</tr>
<tr class="memdesc:gae084ef64dc0db140b455b1427256d3f7">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the contents of the current primary selection as a string.<br />
</td>
</tr>
<tr class="separator:gae084ef64dc0db140b455b1427256d3f7">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga62d884114b0abfcdc2930e89f20867e2" class="memitem:ga62d884114b0abfcdc2930e89f20867e2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">GLXContext </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga62d884114b0abfcdc2930e89f20867e2" class="el">glfwGetGLXContext</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga62d884114b0abfcdc2930e89f20867e2">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>GLXContext</code> of the specified window.<br />
</td>
</tr>
<tr class="separator:ga62d884114b0abfcdc2930e89f20867e2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1ed27b8766e859a21381e8f8ce18d049" class="memitem:ga1ed27b8766e859a21381e8f8ce18d049">
<td class="memItemLeft" style="text-align: right;" data-valign="top">GLXWindow </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga1ed27b8766e859a21381e8f8ce18d049" class="el">glfwGetGLXWindow</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga1ed27b8766e859a21381e8f8ce18d049">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>GLXWindow</code> of the specified window.<br />
</td>
</tr>
<tr class="separator:ga1ed27b8766e859a21381e8f8ce18d049">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gada0e83394c2258396bff9ba6b73abf98" class="memitem:gada0e83394c2258396bff9ba6b73abf98">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gada0e83394c2258396bff9ba6b73abf98" class="el">glfwGetGLXFBConfig</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, GLXFBConfig *config)</td>
</tr>
<tr class="memdesc:gada0e83394c2258396bff9ba6b73abf98">
<td class="mdescLeft"> </td>
<td class="mdescRight">Retrieves the <code>GLXFBConfig</code> of the specified window's <code>GLXWindow</code>.<br />
</td>
</tr>
<tr class="separator:gada0e83394c2258396bff9ba6b73abf98">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gacbe11f93ce20621de82989bbba94e62a" class="memitem:gacbe11f93ce20621de82989bbba94e62a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">struct wl_display * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gacbe11f93ce20621de82989bbba94e62a" class="el">glfwGetWaylandDisplay</a> (void)</td>
</tr>
<tr class="memdesc:gacbe11f93ce20621de82989bbba94e62a">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>struct wl_display*</code> used by GLFW.<br />
</td>
</tr>
<tr class="separator:gacbe11f93ce20621de82989bbba94e62a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga4f16066bd4c59e2f99418adfcb43dd16" class="memitem:ga4f16066bd4c59e2f99418adfcb43dd16">
<td class="memItemLeft" style="text-align: right;" data-valign="top">struct wl_output * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga4f16066bd4c59e2f99418adfcb43dd16" class="el">glfwGetWaylandMonitor</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:ga4f16066bd4c59e2f99418adfcb43dd16">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>struct wl_output*</code> of the specified monitor.<br />
</td>
</tr>
<tr class="separator:ga4f16066bd4c59e2f99418adfcb43dd16">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5c597f2841229d9626f0811cca41ceb3" class="memitem:ga5c597f2841229d9626f0811cca41ceb3">
<td class="memItemLeft" style="text-align: right;" data-valign="top">struct wl_surface * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga5c597f2841229d9626f0811cca41ceb3" class="el">glfwGetWaylandWindow</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga5c597f2841229d9626f0811cca41ceb3">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the main <code>struct wl_surface*</code> of the specified window.<br />
</td>
</tr>
<tr class="separator:ga5c597f2841229d9626f0811cca41ceb3">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1cd8d973f47aacb5532d368147cc3138" class="memitem:ga1cd8d973f47aacb5532d368147cc3138">
<td class="memItemLeft" style="text-align: right;" data-valign="top">EGLDisplay </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga1cd8d973f47aacb5532d368147cc3138" class="el">glfwGetEGLDisplay</a> (void)</td>
</tr>
<tr class="memdesc:ga1cd8d973f47aacb5532d368147cc3138">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>EGLDisplay</code> used by GLFW.<br />
</td>
</tr>
<tr class="separator:ga1cd8d973f47aacb5532d368147cc3138">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga671c5072becd085f4ab5771a9c8efcf1" class="memitem:ga671c5072becd085f4ab5771a9c8efcf1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">EGLContext </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga671c5072becd085f4ab5771a9c8efcf1" class="el">glfwGetEGLContext</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga671c5072becd085f4ab5771a9c8efcf1">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>EGLContext</code> of the specified window.<br />
</td>
</tr>
<tr class="separator:ga671c5072becd085f4ab5771a9c8efcf1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga2199b36117a6a695fec8441d8052eee6" class="memitem:ga2199b36117a6a695fec8441d8052eee6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">EGLSurface </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga2199b36117a6a695fec8441d8052eee6" class="el">glfwGetEGLSurface</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga2199b36117a6a695fec8441d8052eee6">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>EGLSurface</code> of the specified window.<br />
</td>
</tr>
<tr class="separator:ga2199b36117a6a695fec8441d8052eee6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaada9744377463b229b4817eb96384e8c" class="memitem:gaada9744377463b229b4817eb96384e8c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gaada9744377463b229b4817eb96384e8c" class="el">glfwGetEGLConfig</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, EGLConfig *config)</td>
</tr>
<tr class="memdesc:gaada9744377463b229b4817eb96384e8c">
<td class="mdescLeft"> </td>
<td class="mdescRight">Retrieves the <code>EGLConfig</code> of the specified window's <code>EGLSurface</code>.<br />
</td>
</tr>
<tr class="separator:gaada9744377463b229b4817eb96384e8c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3b36e3e3dcf308b776427b6bd73cc132" class="memitem:ga3b36e3e3dcf308b776427b6bd73cc132">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga3b36e3e3dcf308b776427b6bd73cc132" class="el">glfwGetOSMesaColorBuffer</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int *width, int *height, int *format, void **buffer)</td>
</tr>
<tr class="memdesc:ga3b36e3e3dcf308b776427b6bd73cc132">
<td class="mdescLeft"> </td>
<td class="mdescRight">Retrieves the color buffer associated with the specified window.<br />
</td>
</tr>
<tr class="separator:ga3b36e3e3dcf308b776427b6bd73cc132">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6b64039ffc88a7a2f57f0956c0c75d53" class="memitem:ga6b64039ffc88a7a2f57f0956c0c75d53">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga6b64039ffc88a7a2f57f0956c0c75d53" class="el">glfwGetOSMesaDepthBuffer</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int *width, int *height, int *bytesPerValue, void **buffer)</td>
</tr>
<tr class="memdesc:ga6b64039ffc88a7a2f57f0956c0c75d53">
<td class="mdescLeft"> </td>
<td class="mdescRight">Retrieves the depth buffer associated with the specified window.<br />
</td>
</tr>
<tr class="separator:ga6b64039ffc88a7a2f57f0956c0c75d53">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9e47700080094eb569cb053afaa88773" class="memitem:ga9e47700080094eb569cb053afaa88773">
<td class="memItemLeft" style="text-align: right;" data-valign="top">OSMesaContext </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga9e47700080094eb569cb053afaa88773" class="el">glfwGetOSMesaContext</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga9e47700080094eb569cb053afaa88773">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the <code>OSMesaContext</code> of the specified window.<br />
</td>
</tr>
<tr class="separator:ga9e47700080094eb569cb053afaa88773">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## Function Documentation

<span id="gad4d3e9242536c0ba6be88a98f4c73a41"></span>

## <span class="permalink">[◆ ](#gad4d3e9242536c0ba6be88a98f4c73a41)</span>glfwGetWin32Adapter()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| const char \* glfwGetWin32Adapter | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

Returns  
The UTF-8 encoded adapter device name (for example `\\.\DISPLAY1`) of the specified monitor, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.1.

</div>

</div>

<span id="gac845f7dbe4c1d7fdd682a3c6fdae6766"></span>

## <span class="permalink">[◆ ](#gac845f7dbe4c1d7fdd682a3c6fdae6766)</span>glfwGetWin32Monitor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| const char \* glfwGetWin32Monitor | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

Returns  
The UTF-8 encoded display device name (for example `\\.\DISPLAY1\Monitor0`) of the specified monitor, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.1.

</div>

</div>

<span id="gafe5079aa79038b0079fc09d5f0a8e667"></span>

## <span class="permalink">[◆ ](#gafe5079aa79038b0079fc09d5f0a8e667)</span>glfwGetWin32Window()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| HWND glfwGetWin32Window | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

Returns  
The `HWND` of the specified window, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>.

<!-- -->

Remarks  
The `HDC` associated with the window can be queried with the [GetDC](https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdc) function.

<div class="fragment">

<div class="line">

HDC dc = GetDC(<a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gafe5079aa79038b0079fc09d5f0a8e667" class="code hl_function">glfwGetWin32Window</a>(window));

</div>

<div id="agroup__native_html_gafe5079aa79038b0079fc09d5f0a8e667" class="ttc">

<div class="ttname">

[glfwGetWin32Window](/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gafe5079aa79038b0079fc09d5f0a8e667)

</div>

<div class="ttdeci">

HWND glfwGetWin32Window(GLFWwindow \*window)

</div>

<div class="ttdoc">

Returns the HWND of the specified window.

</div>

</div>

</div>

This DC is private and does not need to be released.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gadc4010d91d9cc1134d040eeb1202a143"></span>

## <span class="permalink">[◆ ](#gadc4010d91d9cc1134d040eeb1202a143)</span>glfwGetWGLContext()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| HGLRC glfwGetWGLContext | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

Returns  
The `HGLRC` of the specified window, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a>.

<!-- -->

Remarks  
The `HDC` associated with the window can be queried with the [GetDC](https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdc) function.

<div class="fragment">

<div class="line">

HDC dc = GetDC(<a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gafe5079aa79038b0079fc09d5f0a8e667" class="code hl_function">glfwGetWin32Window</a>(window));

</div>

</div>

This DC is private and does not need to be released.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gaf22f429aec4b1aab316142d66d9be3e6"></span>

## <span class="permalink">[◆ ](#gaf22f429aec4b1aab316142d66d9be3e6)</span>glfwGetCocoaMonitor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| CGDirectDisplayID glfwGetCocoaMonitor | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

Returns  
The `CGDirectDisplayID` of the specified monitor, or `kCGNullDirectDisplay` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.1.

</div>

</div>

<span id="gac3ed9d495d0c2bb9652de5a50c648715"></span>

## <span class="permalink">[◆ ](#gac3ed9d495d0c2bb9652de5a50c648715)</span>glfwGetCocoaWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| id glfwGetCocoaWindow | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

Returns  
The `NSWindow` of the specified window, or `nil` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga7274fb6595894e880fc95dc63156e9b1"></span>

## <span class="permalink">[◆ ](#ga7274fb6595894e880fc95dc63156e9b1)</span>glfwGetCocoaView()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| id glfwGetCocoaView | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

Returns  
The `NSView` of the specified window, or `nil` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.4.

</div>

</div>

<span id="ga559e002e3cd63c979881770cd4dc63bc"></span>

## <span class="permalink">[◆ ](#ga559e002e3cd63c979881770cd4dc63bc)</span>glfwGetNSGLContext()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| id glfwGetNSGLContext | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

Returns  
The `NSOpenGLContext` of the specified window, or `nil` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga6e7822385cc8a1cc3b18f60352830189"></span>

## <span class="permalink">[◆ ](#ga6e7822385cc8a1cc3b18f60352830189)</span>glfwGetX11Display()

<div class="memitem">

<div class="memproto">

|                              |     |       |     |     |     |
|------------------------------|-----|-------|-----|-----|-----|
| Display \* glfwGetX11Display | (   | void  |     | )   |     |

</div>

<div class="memdoc">

Returns  
The `Display` used by GLFW, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga088fbfa80f50569402b41be71ad66e40"></span>

## <span class="permalink">[◆ ](#ga088fbfa80f50569402b41be71ad66e40)</span>glfwGetX11Adapter()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| RRCrtc glfwGetX11Adapter | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

Returns  
The `RRCrtc` of the specified monitor, or `None` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.1.

</div>

</div>

<span id="gab2f8cc043905e9fa9b12bfdbbcfe874c"></span>

## <span class="permalink">[◆ ](#gab2f8cc043905e9fa9b12bfdbbcfe874c)</span>glfwGetX11Monitor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| RROutput glfwGetX11Monitor | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

Returns  
The `RROutput` of the specified monitor, or `None` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.1.

</div>

</div>

<span id="ga90ca676322740842db446999a1b1f21d"></span>

## <span class="permalink">[◆ ](#ga90ca676322740842db446999a1b1f21d)</span>glfwGetX11Window()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| Window glfwGetX11Window | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

Returns  
The `Window` of the specified window, or `None` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga55f879ab02d93367f966186b6f0133f7"></span>

## <span class="permalink">[◆ ](#ga55f879ab02d93367f966186b6f0133f7)</span>glfwSetX11SelectionString()

<div class="memitem">

<div class="memproto">

|                                |     |                |          |     |     |
|--------------------------------|-----|----------------|----------|-----|-----|
| void glfwSetX11SelectionString | (   | const char \*  | *string* | )   |     |

</div>

<div class="memdoc">

Parameters  
|        |        |                         |
|--------|--------|-------------------------|
| \[in\] | string | A UTF-8 encoded string. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Pointer lifetime  
The specified string is copied before this function returns.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#clipboard" class="el">Clipboard input and output</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gae084ef64dc0db140b455b1427256d3f7" class="el" title="Returns the contents of the current primary selection as a string.">glfwGetX11SelectionString</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaba1f022c5eb07dfac421df34cdcd31dd" class="el" title="Sets the clipboard to the specified string.">glfwSetClipboardString</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="gae084ef64dc0db140b455b1427256d3f7"></span>

## <span class="permalink">[◆ ](#gae084ef64dc0db140b455b1427256d3f7)</span>glfwGetX11SelectionString()

<div class="memitem">

<div class="memproto">

|                                         |     |       |     |     |     |
|-----------------------------------------|-----|-------|-----|-----|-----|
| const char \* glfwGetX11SelectionString | (   | void  |     | )   |     |

</div>

<div class="memdoc">

If the selection is empty or if its contents cannot be converted, `NULL` is returned and a <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga196e125ef261d94184e2b55c05762f14" class="el">GLFW_FORMAT_UNAVAILABLE</a> error is generated.

Returns  
The contents of the selection as a UTF-8 encoded string, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Pointer lifetime  
The returned string is allocated and freed by GLFW. You should not free it yourself. It is valid until the next call to <a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gae084ef64dc0db140b455b1427256d3f7" class="el">glfwGetX11SelectionString</a> or <a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga55f879ab02d93367f966186b6f0133f7" class="el">glfwSetX11SelectionString</a>, or until the library is terminated.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#clipboard" class="el">Clipboard input and output</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/08-native-access/#ga55f879ab02d93367f966186b6f0133f7" class="el" title="Sets the current primary selection to the specified string.">glfwSetX11SelectionString</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga71a5b20808ea92193d65c21b82580355" class="el" title="Returns the contents of the clipboard as a string.">glfwGetClipboardString</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="ga62d884114b0abfcdc2930e89f20867e2"></span>

## <span class="permalink">[◆ ](#ga62d884114b0abfcdc2930e89f20867e2)</span>glfwGetGLXContext()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| GLXContext glfwGetGLXContext | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

Returns  
The `GLXContext` of the specified window, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga1ed27b8766e859a21381e8f8ce18d049"></span>

## <span class="permalink">[◆ ](#ga1ed27b8766e859a21381e8f8ce18d049)</span>glfwGetGLXWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| GLXWindow glfwGetGLXWindow | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

Returns  
The `GLXWindow` of the specified window, or `None` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.2.

</div>

</div>

<span id="gada0e83394c2258396bff9ba6b73abf98"></span>

## <span class="permalink">[◆ ](#gada0e83394c2258396bff9ba6b73abf98)</span>glfwGetGLXFBConfig()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetGLXFBConfig | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | GLXFBConfig \*  | *config*  |
|  | ) |  |  |

</div>

<div class="memdoc">

Parameters  
|         |        |                                                            |
|---------|--------|------------------------------------------------------------|
| \[in\]  | window | The window whose `GLXWindow` to query.                     |
| \[out\] | config | The `GLXFBConfig` of the window `GLXWindow`, if available. |

<!-- -->

Returns  
`GLFW_TRUE` if successful, or `GLFW_FALSE` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>.

<!-- -->

Remarks  
`GLXFBConfig` is an opaque type. Unlike other GLFW functions, the `config` out parameter is not cleared on error, as core GLX does not define any invalid value.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.5

</div>

</div>

<span id="gacbe11f93ce20621de82989bbba94e62a"></span>

## <span class="permalink">[◆ ](#gacbe11f93ce20621de82989bbba94e62a)</span>glfwGetWaylandDisplay()

<div class="memitem">

<div class="memproto">

|                                            |     |       |     |     |     |
|--------------------------------------------|-----|-------|-----|-----|-----|
| struct wl_display \* glfwGetWaylandDisplay | (   | void  |     | )   |     |

</div>

<div class="memdoc">

Returns  
The `struct wl_display*` used by GLFW, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.2.

</div>

</div>

<span id="ga4f16066bd4c59e2f99418adfcb43dd16"></span>

## <span class="permalink">[◆ ](#ga4f16066bd4c59e2f99418adfcb43dd16)</span>glfwGetWaylandMonitor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| struct wl_output \* glfwGetWaylandMonitor | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

Returns  
The `struct wl_output*` of the specified monitor, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.2.

</div>

</div>

<span id="ga5c597f2841229d9626f0811cca41ceb3"></span>

## <span class="permalink">[◆ ](#ga5c597f2841229d9626f0811cca41ceb3)</span>glfwGetWaylandWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| struct wl_surface \* glfwGetWaylandWindow | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

Returns  
The main `struct wl_surface*` of the specified window, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.2.

</div>

</div>

<span id="ga1cd8d973f47aacb5532d368147cc3138"></span>

## <span class="permalink">[◆ ](#ga1cd8d973f47aacb5532d368147cc3138)</span>glfwGetEGLDisplay()

<div class="memitem">

<div class="memproto">

|                              |     |       |     |     |     |
|------------------------------|-----|-------|-----|-----|-----|
| EGLDisplay glfwGetEGLDisplay | (   | void  |     | )   |     |

</div>

<div class="memdoc">

Returns  
The `EGLDisplay` used by GLFW, or `EGL_NO_DISPLAY` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Remarks  
Because EGL is initialized on demand, this function will return `EGL_NO_DISPLAY` until the first context has been created via EGL.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga671c5072becd085f4ab5771a9c8efcf1"></span>

## <span class="permalink">[◆ ](#ga671c5072becd085f4ab5771a9c8efcf1)</span>glfwGetEGLContext()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| EGLContext glfwGetEGLContext | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

Returns  
The `EGLContext` of the specified window, or `EGL_NO_CONTEXT` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga2199b36117a6a695fec8441d8052eee6"></span>

## <span class="permalink">[◆ ](#ga2199b36117a6a695fec8441d8052eee6)</span>glfwGetEGLSurface()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| EGLSurface glfwGetEGLSurface | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

Returns  
The `EGLSurface` of the specified window, or `EGL_NO_SURFACE` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gaada9744377463b229b4817eb96384e8c"></span>

## <span class="permalink">[◆ ](#gaada9744377463b229b4817eb96384e8c)</span>glfwGetEGLConfig()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetEGLConfig | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | EGLConfig \*  | *config*  |
|  | ) |  |  |

</div>

<div class="memdoc">

Parameters  
|         |        |                                                           |
|---------|--------|-----------------------------------------------------------|
| \[in\]  | window | The window whose `EGLSurface` to query.                   |
| \[out\] | config | The `EGLConfig` of the window `EGLSurface`, if available. |

<!-- -->

Returns  
`GLFW_TRUE` if successful, or `GLFW_FALSE` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a>.

<!-- -->

Remarks  
`EGLConfig` is an opaque type. Unlike other GLFW functions, the `config` out parameter is not cleared on error, as core EGL does not define any invalid value.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.5.

</div>

</div>

<span id="ga3b36e3e3dcf308b776427b6bd73cc132"></span>

## <span class="permalink">[◆ ](#ga3b36e3e3dcf308b776427b6bd73cc132)</span>glfwGetOSMesaColorBuffer()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetOSMesaColorBuffer | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int \*  | *width*, |
|  |  | int \*  | *height*, |
|  |  | int \*  | *format*, |
|  |  | void \*\*  | *buffer*  |
|  | ) |  |  |

</div>

<div class="memdoc">

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose color buffer to retrieve. |
| \[out\] | width | Where to store the width of the color buffer, or `NULL`. |
| \[out\] | height | Where to store the height of the color buffer, or `NULL`. |
| \[out\] | format | Where to store the OSMesa pixel format of the color buffer, or `NULL`. |
| \[out\] | buffer | Where to store the address of the color buffer, or `NULL`. |

<!-- -->

Returns  
`GLFW_TRUE` if successful, or `GLFW_FALSE` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="ga6b64039ffc88a7a2f57f0956c0c75d53"></span>

## <span class="permalink">[◆ ](#ga6b64039ffc88a7a2f57f0956c0c75d53)</span>glfwGetOSMesaDepthBuffer()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetOSMesaDepthBuffer | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int \*  | *width*, |
|  |  | int \*  | *height*, |
|  |  | int \*  | *bytesPerValue*, |
|  |  | void \*\*  | *buffer*  |
|  | ) |  |  |

</div>

<div class="memdoc">

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose depth buffer to retrieve. |
| \[out\] | width | Where to store the width of the depth buffer, or `NULL`. |
| \[out\] | height | Where to store the height of the depth buffer, or `NULL`. |
| \[out\] | bytesPerValue | Where to store the number of bytes per depth buffer element, or `NULL`. |
| \[out\] | buffer | Where to store the address of the depth buffer, or `NULL`. |

<!-- -->

Returns  
`GLFW_TRUE` if successful, or `GLFW_FALSE` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="ga9e47700080094eb569cb053afaa88773"></span>

## <span class="permalink">[◆ ](#ga9e47700080094eb569cb053afaa88773)</span>glfwGetOSMesaContext()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| OSMesaContext glfwGetOSMesaContext | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

Returns  
The `OSMesaContext` of the specified window, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

Since  
Added in version 3.3.

</div>

</div>
