---
title: "ネイティブアクセス"
description: "GLFW 3.5.1 ネイティブアクセス"
---

<span id="details"></span>

## 説明

**ネイティブアクセス関数を使用することは、自分が何をしているか、およびその使用によって生じた問題をどう修正するかを理解していると表明することです。理解していない場合は使用すべきではありません。**

<a href="https://www.glfw.org/docs/3.5.1/glfw3native_8h.html" class="el">glfw3native.h</a> をインクルードする前に、ウィンドウシステム API マクロを 0 個以上、コンテキスト作成 API マクロを 0 個以上定義できます。

選択するバックエンドは、ライブラリのコンパイル対象と一致していなければなりません。一致しない場合はリンク時エラーになります。

利用可能なウィンドウ API マクロは次のとおりです。

- `GLFW_EXPOSE_NATIVE_WIN32`
- `GLFW_EXPOSE_NATIVE_COCOA`
- `GLFW_EXPOSE_NATIVE_X11`
- `GLFW_EXPOSE_NATIVE_WAYLAND`

利用可能なコンテキスト API マクロは次のとおりです。

- `GLFW_EXPOSE_NATIVE_WGL`
- `GLFW_EXPOSE_NATIVE_NSGL`
- `GLFW_EXPOSE_NATIVE_GLX`
- `GLFW_EXPOSE_NATIVE_EGL`
- `GLFW_EXPOSE_NATIVE_OSMESA`

これらのマクロは、宣言するネイティブアクセス関数と、インクルードするプラットフォーム固有ヘッダーを選択します。どれを定義すべきかは、必然的にプラットフォーム固有となる利用側のコードで処理します。

プラットフォーム固有ヘッダーをインクルードしたくない場合は、<a href="https://www.glfw.org/docs/3.5.1/glfw3native_8h.html" class="el">glfw3native.h</a> ヘッダーをインクルードする前に `GLFW_NATIVE_INCLUDE_NONE` を定義してください。

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

ネイティブアクセス関数のヘッダー。

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
<td colspan="2"><h2 id="functions" class="groupheader"><span id="func-members"></span> 関数</h2></td>
</tr>
<tr id="r_gad4d3e9242536c0ba6be88a98f4c73a41" class="memitem:gad4d3e9242536c0ba6be88a98f4c73a41">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gad4d3e9242536c0ba6be88a98f4c73a41" class="el">glfwGetWin32Adapter</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:gad4d3e9242536c0ba6be88a98f4c73a41">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたモニターのアダプターデバイス名を返します。<br />
</td>
</tr>
<tr class="separator:gad4d3e9242536c0ba6be88a98f4c73a41">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac845f7dbe4c1d7fdd682a3c6fdae6766" class="memitem:gac845f7dbe4c1d7fdd682a3c6fdae6766">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gac845f7dbe4c1d7fdd682a3c6fdae6766" class="el">glfwGetWin32Monitor</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:gac845f7dbe4c1d7fdd682a3c6fdae6766">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたモニターのディスプレイデバイス名を返します。<br />
</td>
</tr>
<tr class="separator:gac845f7dbe4c1d7fdd682a3c6fdae6766">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafe5079aa79038b0079fc09d5f0a8e667" class="memitem:gafe5079aa79038b0079fc09d5f0a8e667">
<td class="memItemLeft" style="text-align: right;" data-valign="top">HWND </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gafe5079aa79038b0079fc09d5f0a8e667" class="el">glfwGetWin32Window</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:gafe5079aa79038b0079fc09d5f0a8e667">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウの <code>HWND</code> を返します。<br />
</td>
</tr>
<tr class="separator:gafe5079aa79038b0079fc09d5f0a8e667">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadc4010d91d9cc1134d040eeb1202a143" class="memitem:gadc4010d91d9cc1134d040eeb1202a143">
<td class="memItemLeft" style="text-align: right;" data-valign="top">HGLRC </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gadc4010d91d9cc1134d040eeb1202a143" class="el">glfwGetWGLContext</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:gadc4010d91d9cc1134d040eeb1202a143">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウの <code>HGLRC</code> を返します。<br />
</td>
</tr>
<tr class="separator:gadc4010d91d9cc1134d040eeb1202a143">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf22f429aec4b1aab316142d66d9be3e6" class="memitem:gaf22f429aec4b1aab316142d66d9be3e6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">CGDirectDisplayID </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gaf22f429aec4b1aab316142d66d9be3e6" class="el">glfwGetCocoaMonitor</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:gaf22f429aec4b1aab316142d66d9be3e6">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたモニターの <code>CGDirectDisplayID</code> を返します。<br />
</td>
</tr>
<tr class="separator:gaf22f429aec4b1aab316142d66d9be3e6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac3ed9d495d0c2bb9652de5a50c648715" class="memitem:gac3ed9d495d0c2bb9652de5a50c648715">
<td class="memItemLeft" style="text-align: right;" data-valign="top">id </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gac3ed9d495d0c2bb9652de5a50c648715" class="el">glfwGetCocoaWindow</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:gac3ed9d495d0c2bb9652de5a50c648715">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウの <code>NSWindow</code> を返します。<br />
</td>
</tr>
<tr class="separator:gac3ed9d495d0c2bb9652de5a50c648715">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7274fb6595894e880fc95dc63156e9b1" class="memitem:ga7274fb6595894e880fc95dc63156e9b1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">id </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga7274fb6595894e880fc95dc63156e9b1" class="el">glfwGetCocoaView</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga7274fb6595894e880fc95dc63156e9b1">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウの <code>NSView</code> を返します。<br />
</td>
</tr>
<tr class="separator:ga7274fb6595894e880fc95dc63156e9b1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga559e002e3cd63c979881770cd4dc63bc" class="memitem:ga559e002e3cd63c979881770cd4dc63bc">
<td class="memItemLeft" style="text-align: right;" data-valign="top">id </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga559e002e3cd63c979881770cd4dc63bc" class="el">glfwGetNSGLContext</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga559e002e3cd63c979881770cd4dc63bc">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウの <code>NSOpenGLContext</code> を返します。<br />
</td>
</tr>
<tr class="separator:ga559e002e3cd63c979881770cd4dc63bc">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6e7822385cc8a1cc3b18f60352830189" class="memitem:ga6e7822385cc8a1cc3b18f60352830189">
<td class="memItemLeft" style="text-align: right;" data-valign="top">Display * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga6e7822385cc8a1cc3b18f60352830189" class="el">glfwGetX11Display</a> (void)</td>
</tr>
<tr class="memdesc:ga6e7822385cc8a1cc3b18f60352830189">
<td class="mdescLeft"> </td>
<td class="mdescRight">GLFW が使用する <code>Display</code> を返します。<br />
</td>
</tr>
<tr class="separator:ga6e7822385cc8a1cc3b18f60352830189">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga088fbfa80f50569402b41be71ad66e40" class="memitem:ga088fbfa80f50569402b41be71ad66e40">
<td class="memItemLeft" style="text-align: right;" data-valign="top">RRCrtc </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga088fbfa80f50569402b41be71ad66e40" class="el">glfwGetX11Adapter</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:ga088fbfa80f50569402b41be71ad66e40">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたモニターの <code>RRCrtc</code> を返します。<br />
</td>
</tr>
<tr class="separator:ga088fbfa80f50569402b41be71ad66e40">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab2f8cc043905e9fa9b12bfdbbcfe874c" class="memitem:gab2f8cc043905e9fa9b12bfdbbcfe874c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">RROutput </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gab2f8cc043905e9fa9b12bfdbbcfe874c" class="el">glfwGetX11Monitor</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:gab2f8cc043905e9fa9b12bfdbbcfe874c">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたモニターの <code>RROutput</code> を返します。<br />
</td>
</tr>
<tr class="separator:gab2f8cc043905e9fa9b12bfdbbcfe874c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga90ca676322740842db446999a1b1f21d" class="memitem:ga90ca676322740842db446999a1b1f21d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">Window </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga90ca676322740842db446999a1b1f21d" class="el">glfwGetX11Window</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga90ca676322740842db446999a1b1f21d">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウの <code>Window</code> を返します。<br />
</td>
</tr>
<tr class="separator:ga90ca676322740842db446999a1b1f21d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga55f879ab02d93367f966186b6f0133f7" class="memitem:ga55f879ab02d93367f966186b6f0133f7">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga55f879ab02d93367f966186b6f0133f7" class="el">glfwSetX11SelectionString</a> (const char *string)</td>
</tr>
<tr class="memdesc:ga55f879ab02d93367f966186b6f0133f7">
<td class="mdescLeft"> </td>
<td class="mdescRight">現在のプライマリ選択を指定された文字列に設定します。<br />
</td>
</tr>
<tr class="separator:ga55f879ab02d93367f966186b6f0133f7">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae084ef64dc0db140b455b1427256d3f7" class="memitem:gae084ef64dc0db140b455b1427256d3f7">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gae084ef64dc0db140b455b1427256d3f7" class="el">glfwGetX11SelectionString</a> (void)</td>
</tr>
<tr class="memdesc:gae084ef64dc0db140b455b1427256d3f7">
<td class="mdescLeft"> </td>
<td class="mdescRight">現在のプライマリ選択の内容を文字列として返します。<br />
</td>
</tr>
<tr class="separator:gae084ef64dc0db140b455b1427256d3f7">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga62d884114b0abfcdc2930e89f20867e2" class="memitem:ga62d884114b0abfcdc2930e89f20867e2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">GLXContext </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga62d884114b0abfcdc2930e89f20867e2" class="el">glfwGetGLXContext</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga62d884114b0abfcdc2930e89f20867e2">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウの <code>GLXContext</code> を返します。<br />
</td>
</tr>
<tr class="separator:ga62d884114b0abfcdc2930e89f20867e2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1ed27b8766e859a21381e8f8ce18d049" class="memitem:ga1ed27b8766e859a21381e8f8ce18d049">
<td class="memItemLeft" style="text-align: right;" data-valign="top">GLXWindow </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga1ed27b8766e859a21381e8f8ce18d049" class="el">glfwGetGLXWindow</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga1ed27b8766e859a21381e8f8ce18d049">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウの <code>GLXWindow</code> を返します。<br />
</td>
</tr>
<tr class="separator:ga1ed27b8766e859a21381e8f8ce18d049">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gada0e83394c2258396bff9ba6b73abf98" class="memitem:gada0e83394c2258396bff9ba6b73abf98">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gada0e83394c2258396bff9ba6b73abf98" class="el">glfwGetGLXFBConfig</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, GLXFBConfig *config)</td>
</tr>
<tr class="memdesc:gada0e83394c2258396bff9ba6b73abf98">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウの <code>GLXWindow</code> に対応する <code>GLXFBConfig</code> を取得します。<br />
</td>
</tr>
<tr class="separator:gada0e83394c2258396bff9ba6b73abf98">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gacbe11f93ce20621de82989bbba94e62a" class="memitem:gacbe11f93ce20621de82989bbba94e62a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">struct wl_display * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gacbe11f93ce20621de82989bbba94e62a" class="el">glfwGetWaylandDisplay</a> (void)</td>
</tr>
<tr class="memdesc:gacbe11f93ce20621de82989bbba94e62a">
<td class="mdescLeft"> </td>
<td class="mdescRight">GLFW が使用する <code>struct wl_display*</code> を返します。<br />
</td>
</tr>
<tr class="separator:gacbe11f93ce20621de82989bbba94e62a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga4f16066bd4c59e2f99418adfcb43dd16" class="memitem:ga4f16066bd4c59e2f99418adfcb43dd16">
<td class="memItemLeft" style="text-align: right;" data-valign="top">struct wl_output * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga4f16066bd4c59e2f99418adfcb43dd16" class="el">glfwGetWaylandMonitor</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> *monitor)</td>
</tr>
<tr class="memdesc:ga4f16066bd4c59e2f99418adfcb43dd16">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたモニターの <code>struct wl_output*</code> を返します。<br />
</td>
</tr>
<tr class="separator:ga4f16066bd4c59e2f99418adfcb43dd16">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5c597f2841229d9626f0811cca41ceb3" class="memitem:ga5c597f2841229d9626f0811cca41ceb3">
<td class="memItemLeft" style="text-align: right;" data-valign="top">struct wl_surface * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga5c597f2841229d9626f0811cca41ceb3" class="el">glfwGetWaylandWindow</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga5c597f2841229d9626f0811cca41ceb3">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウのメイン <code>struct wl_surface*</code> を返します。<br />
</td>
</tr>
<tr class="separator:ga5c597f2841229d9626f0811cca41ceb3">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1cd8d973f47aacb5532d368147cc3138" class="memitem:ga1cd8d973f47aacb5532d368147cc3138">
<td class="memItemLeft" style="text-align: right;" data-valign="top">EGLDisplay </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga1cd8d973f47aacb5532d368147cc3138" class="el">glfwGetEGLDisplay</a> (void)</td>
</tr>
<tr class="memdesc:ga1cd8d973f47aacb5532d368147cc3138">
<td class="mdescLeft"> </td>
<td class="mdescRight">GLFW が使用する <code>EGLDisplay</code> を返します。<br />
</td>
</tr>
<tr class="separator:ga1cd8d973f47aacb5532d368147cc3138">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga671c5072becd085f4ab5771a9c8efcf1" class="memitem:ga671c5072becd085f4ab5771a9c8efcf1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">EGLContext </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga671c5072becd085f4ab5771a9c8efcf1" class="el">glfwGetEGLContext</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga671c5072becd085f4ab5771a9c8efcf1">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウの <code>EGLContext</code> を返します。<br />
</td>
</tr>
<tr class="separator:ga671c5072becd085f4ab5771a9c8efcf1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga2199b36117a6a695fec8441d8052eee6" class="memitem:ga2199b36117a6a695fec8441d8052eee6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">EGLSurface </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga2199b36117a6a695fec8441d8052eee6" class="el">glfwGetEGLSurface</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga2199b36117a6a695fec8441d8052eee6">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウの <code>EGLSurface</code> を返します。<br />
</td>
</tr>
<tr class="separator:ga2199b36117a6a695fec8441d8052eee6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaada9744377463b229b4817eb96384e8c" class="memitem:gaada9744377463b229b4817eb96384e8c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gaada9744377463b229b4817eb96384e8c" class="el">glfwGetEGLConfig</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, EGLConfig *config)</td>
</tr>
<tr class="memdesc:gaada9744377463b229b4817eb96384e8c">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウの <code>EGLSurface</code> に対応する <code>EGLConfig</code> を取得します。<br />
</td>
</tr>
<tr class="separator:gaada9744377463b229b4817eb96384e8c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3b36e3e3dcf308b776427b6bd73cc132" class="memitem:ga3b36e3e3dcf308b776427b6bd73cc132">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga3b36e3e3dcf308b776427b6bd73cc132" class="el">glfwGetOSMesaColorBuffer</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int *width, int *height, int *format, void **buffer)</td>
</tr>
<tr class="memdesc:ga3b36e3e3dcf308b776427b6bd73cc132">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウに関連付けられたカラーバッファを取得します。<br />
</td>
</tr>
<tr class="separator:ga3b36e3e3dcf308b776427b6bd73cc132">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6b64039ffc88a7a2f57f0956c0c75d53" class="memitem:ga6b64039ffc88a7a2f57f0956c0c75d53">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga6b64039ffc88a7a2f57f0956c0c75d53" class="el">glfwGetOSMesaDepthBuffer</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int *width, int *height, int *bytesPerValue, void **buffer)</td>
</tr>
<tr class="memdesc:ga6b64039ffc88a7a2f57f0956c0c75d53">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウに関連付けられた深度バッファを取得します。<br />
</td>
</tr>
<tr class="separator:ga6b64039ffc88a7a2f57f0956c0c75d53">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9e47700080094eb569cb053afaa88773" class="memitem:ga9e47700080094eb569cb053afaa88773">
<td class="memItemLeft" style="text-align: right;" data-valign="top">OSMesaContext </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga9e47700080094eb569cb053afaa88773" class="el">glfwGetOSMesaContext</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga9e47700080094eb569cb053afaa88773">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウの <code>OSMesaContext</code> を返します。<br />
</td>
</tr>
<tr class="separator:ga9e47700080094eb569cb053afaa88773">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## 関数の詳細

<span id="gad4d3e9242536c0ba6be88a98f4c73a41"></span>

## <span class="permalink">[◆ ](#gad4d3e9242536c0ba6be88a98f4c73a41)</span>glfwGetWin32Adapter()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| const char \* glfwGetWin32Adapter | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたモニターの UTF-8 エンコードされたアダプターデバイス名（例: `\\.\DISPLAY1`）。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.1 で追加されました。

</div>

</div>

<span id="gac845f7dbe4c1d7fdd682a3c6fdae6766"></span>

## <span class="permalink">[◆ ](#gac845f7dbe4c1d7fdd682a3c6fdae6766)</span>glfwGetWin32Monitor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| const char \* glfwGetWin32Monitor | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたモニターの UTF-8 エンコードされたディスプレイデバイス名（例: `\\.\DISPLAY1\Monitor0`）。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.1 で追加されました。

</div>

</div>

<span id="gafe5079aa79038b0079fc09d5f0a8e667"></span>

## <span class="permalink">[◆ ](#gafe5079aa79038b0079fc09d5f0a8e667)</span>glfwGetWin32Window()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| HWND glfwGetWin32Window | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたウィンドウの `HWND`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> があります。

<!-- -->

備考  
ウィンドウに関連付けられた `HDC` は、[GetDC](https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdc) 関数で照会できます。

<div class="fragment">

<div class="line">

HDC dc = GetDC(<a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gafe5079aa79038b0079fc09d5f0a8e667" class="code hl_function">glfwGetWin32Window</a>(window));

</div>

<div id="agroup__native_html_gafe5079aa79038b0079fc09d5f0a8e667" class="ttc">

<div class="ttname">

[glfwGetWin32Window](/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gafe5079aa79038b0079fc09d5f0a8e667)

</div>

<div class="ttdeci">

HWND glfwGetWin32Window(GLFWwindow \*window)

</div>

<div class="ttdoc">

指定されたウィンドウの HWND を返します。

</div>

</div>

</div>

この DC はプライベートであり、解放する必要はありません。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="gadc4010d91d9cc1134d040eeb1202a143"></span>

## <span class="permalink">[◆ ](#gadc4010d91d9cc1134d040eeb1202a143)</span>glfwGetWGLContext()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| HGLRC glfwGetWGLContext | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたウィンドウの `HGLRC`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> があります。

<!-- -->

備考  
ウィンドウに関連付けられた `HDC` は、[GetDC](https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdc) 関数で照会できます。

<div class="fragment">

<div class="line">

HDC dc = GetDC(<a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gafe5079aa79038b0079fc09d5f0a8e667" class="code hl_function">glfwGetWin32Window</a>(window));

</div>

</div>

この DC はプライベートであり、解放する必要はありません。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="gaf22f429aec4b1aab316142d66d9be3e6"></span>

## <span class="permalink">[◆ ](#gaf22f429aec4b1aab316142d66d9be3e6)</span>glfwGetCocoaMonitor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| CGDirectDisplayID glfwGetCocoaMonitor | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたモニターの `CGDirectDisplayID`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `kCGNullDirectDisplay`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.1 で追加されました。

</div>

</div>

<span id="gac3ed9d495d0c2bb9652de5a50c648715"></span>

## <span class="permalink">[◆ ](#gac3ed9d495d0c2bb9652de5a50c648715)</span>glfwGetCocoaWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| id glfwGetCocoaWindow | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたウィンドウの `NSWindow`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `nil`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga7274fb6595894e880fc95dc63156e9b1"></span>

## <span class="permalink">[◆ ](#ga7274fb6595894e880fc95dc63156e9b1)</span>glfwGetCocoaView()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| id glfwGetCocoaView | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたウィンドウの `NSView`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `nil`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.4 で追加されました。

</div>

</div>

<span id="ga559e002e3cd63c979881770cd4dc63bc"></span>

## <span class="permalink">[◆ ](#ga559e002e3cd63c979881770cd4dc63bc)</span>glfwGetNSGLContext()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| id glfwGetNSGLContext | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたウィンドウの `NSOpenGLContext`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `nil`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

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

戻り値  
GLFW が使用する `Display`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga088fbfa80f50569402b41be71ad66e40"></span>

## <span class="permalink">[◆ ](#ga088fbfa80f50569402b41be71ad66e40)</span>glfwGetX11Adapter()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| RRCrtc glfwGetX11Adapter | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたモニターの `RRCrtc`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `None`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.1 で追加されました。

</div>

</div>

<span id="gab2f8cc043905e9fa9b12bfdbbcfe874c"></span>

## <span class="permalink">[◆ ](#gab2f8cc043905e9fa9b12bfdbbcfe874c)</span>glfwGetX11Monitor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| RROutput glfwGetX11Monitor | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたモニターの `RROutput`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `None`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.1 で追加されました。

</div>

</div>

<span id="ga90ca676322740842db446999a1b1f21d"></span>

## <span class="permalink">[◆ ](#ga90ca676322740842db446999a1b1f21d)</span>glfwGetX11Window()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| Window glfwGetX11Window | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたウィンドウの `Window`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `None`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

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

引数  
|        |        |                         |
|--------|--------|-------------------------|
| \[in\] | string | UTF-8 エンコード文字列。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

ポインターの有効期間  
指定された文字列は、この関数から戻る前にコピーされます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#clipboard" class="el">クリップボードの入出力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gae084ef64dc0db140b455b1427256d3f7" class="el" title="現在のプライマリ選択の内容を文字列として返します。">glfwGetX11SelectionString</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaba1f022c5eb07dfac421df34cdcd31dd" class="el" title="クリップボードを指定された文字列に設定します。">glfwSetClipboardString</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

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

選択が空の場合、または内容を変換できない場合は `NULL` を返し、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga196e125ef261d94184e2b55c05762f14" class="el">GLFW_FORMAT_UNAVAILABLE</a> エラーを生成します。

戻り値  
UTF-8 エンコード文字列としての選択内容。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

ポインターの有効期間  
戻り値の文字列は GLFW によって確保および解放されます。自分で解放してはいけません。次に <a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gae084ef64dc0db140b455b1427256d3f7" class="el">glfwGetX11SelectionString</a> または <a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga55f879ab02d93367f966186b6f0133f7" class="el">glfwSetX11SelectionString</a> が呼び出されるか、ライブラリが終了するまで有効です。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#clipboard" class="el">クリップボードの入出力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga55f879ab02d93367f966186b6f0133f7" class="el" title="現在のプライマリ選択を指定された文字列に設定します。">glfwSetX11SelectionString</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga71a5b20808ea92193d65c21b82580355" class="el" title="クリップボードの内容を文字列として返します。">glfwGetClipboardString</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="ga62d884114b0abfcdc2930e89f20867e2"></span>

## <span class="permalink">[◆ ](#ga62d884114b0abfcdc2930e89f20867e2)</span>glfwGetGLXContext()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| GLXContext glfwGetGLXContext | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたウィンドウの `GLXContext`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga1ed27b8766e859a21381e8f8ce18d049"></span>

## <span class="permalink">[◆ ](#ga1ed27b8766e859a21381e8f8ce18d049)</span>glfwGetGLXWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| GLXWindow glfwGetGLXWindow | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたウィンドウの `GLXWindow`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `None`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

</div>

</div>

<span id="gada0e83394c2258396bff9ba6b73abf98"></span>

## <span class="permalink">[◆ ](#gada0e83394c2258396bff9ba6b73abf98)</span>glfwGetGLXFBConfig()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetGLXFBConfig | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | GLXFBConfig \*  | *config*  |
|  | ) |  |  |

</div>

<div class="memdoc">

引数  
|         |        |                                                            |
|---------|--------|------------------------------------------------------------|
| \[in\]  | window | `GLXWindow` を問い合わせるウィンドウ。 |
| \[out\] | config | 利用可能な場合は、ウィンドウの `GLXWindow` に対応する `GLXFBConfig`。 |

<!-- -->

戻り値  
成功した場合は `GLFW_TRUE`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `GLFW_FALSE`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> があります。

<!-- -->

備考  
`GLXFBConfig` は不透明型です。コア GLX は無効値を定義していないため、ほかの GLFW 関数とは異なり、エラー時に出力引数 `config` はクリアされません。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.5 で追加されました。

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

戻り値  
GLFW が使用する `struct wl_display*`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

</div>

</div>

<span id="ga4f16066bd4c59e2f99418adfcb43dd16"></span>

## <span class="permalink">[◆ ](#ga4f16066bd4c59e2f99418adfcb43dd16)</span>glfwGetWaylandMonitor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| struct wl_output \* glfwGetWaylandMonitor | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3" class="el">GLFWmonitor</a> \*  | *monitor* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたモニターの `struct wl_output*`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

</div>

</div>

<span id="ga5c597f2841229d9626f0811cca41ceb3"></span>

## <span class="permalink">[◆ ](#ga5c597f2841229d9626f0811cca41ceb3)</span>glfwGetWaylandWindow()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| struct wl_surface \* glfwGetWaylandWindow | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたウィンドウのメイン `struct wl_surface*`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

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

戻り値  
GLFW が使用する `EGLDisplay`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `EGL_NO_DISPLAY`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

備考  
EGL は必要に応じて初期化されるため、EGL を介して最初のコンテキストが作成されるまで、この関数は `EGL_NO_DISPLAY` を返します。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga671c5072becd085f4ab5771a9c8efcf1"></span>

## <span class="permalink">[◆ ](#ga671c5072becd085f4ab5771a9c8efcf1)</span>glfwGetEGLContext()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| EGLContext glfwGetEGLContext | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたウィンドウの `EGLContext`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `EGL_NO_CONTEXT`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga2199b36117a6a695fec8441d8052eee6"></span>

## <span class="permalink">[◆ ](#ga2199b36117a6a695fec8441d8052eee6)</span>glfwGetEGLSurface()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| EGLSurface glfwGetEGLSurface | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたウィンドウの `EGLSurface`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `EGL_NO_SURFACE`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="gaada9744377463b229b4817eb96384e8c"></span>

## <span class="permalink">[◆ ](#gaada9744377463b229b4817eb96384e8c)</span>glfwGetEGLConfig()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetEGLConfig | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | EGLConfig \*  | *config*  |
|  | ) |  |  |

</div>

<div class="memdoc">

引数  
|         |        |                                                           |
|---------|--------|-----------------------------------------------------------|
| \[in\]  | window | `EGLSurface` を問い合わせるウィンドウ。 |
| \[out\] | config | 利用可能な場合は、ウィンドウの `EGLSurface` に対応する `EGLConfig`。 |

<!-- -->

戻り値  
成功した場合は `GLFW_TRUE`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `GLFW_FALSE`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> があります。

<!-- -->

備考  
`EGLConfig` は不透明型です。コア EGL は無効値を定義していないため、ほかの GLFW 関数とは異なり、エラー時に出力引数 `config` はクリアされません。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.5 で追加されました。

</div>

</div>

<span id="ga3b36e3e3dcf308b776427b6bd73cc132"></span>

## <span class="permalink">[◆ ](#ga3b36e3e3dcf308b776427b6bd73cc132)</span>glfwGetOSMesaColorBuffer()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetOSMesaColorBuffer | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int \*  | *width*, |
|  |  | int \*  | *height*, |
|  |  | int \*  | *format*, |
|  |  | void \*\*  | *buffer*  |
|  | ) |  |  |

</div>

<div class="memdoc">

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | カラーバッファを取得するウィンドウ。 |
| \[out\] | width | カラーバッファの幅を格納する場所、または `NULL`。 |
| \[out\] | height | カラーバッファの高さを格納する場所、または `NULL`。 |
| \[out\] | format | カラーバッファの OSMesa ピクセル形式を格納する場所、または `NULL`。 |
| \[out\] | buffer | カラーバッファのアドレスを格納する場所、または `NULL`。 |

<!-- -->

戻り値  
成功した場合は `GLFW_TRUE`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `GLFW_FALSE`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="ga6b64039ffc88a7a2f57f0956c0c75d53"></span>

## <span class="permalink">[◆ ](#ga6b64039ffc88a7a2f57f0956c0c75d53)</span>glfwGetOSMesaDepthBuffer()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetOSMesaDepthBuffer | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int \*  | *width*, |
|  |  | int \*  | *height*, |
|  |  | int \*  | *bytesPerValue*, |
|  |  | void \*\*  | *buffer*  |
|  | ) |  |  |

</div>

<div class="memdoc">

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | 深度バッファを取得するウィンドウ。 |
| \[out\] | width | 深度バッファの幅を格納する場所、または `NULL`。 |
| \[out\] | height | 深度バッファの高さを格納する場所、または `NULL`。 |
| \[out\] | bytesPerValue | 深度バッファ要素あたりのバイト数を格納する場所、または `NULL`。 |
| \[out\] | buffer | 深度バッファのアドレスを格納する場所、または `NULL`。 |

<!-- -->

戻り値  
成功した場合は `GLFW_TRUE`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `GLFW_FALSE`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="ga9e47700080094eb569cb053afaa88773"></span>

## <span class="permalink">[◆ ](#ga9e47700080094eb569cb053afaa88773)</span>glfwGetOSMesaContext()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| OSMesaContext glfwGetOSMesaContext | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

戻り値  
指定されたウィンドウの `OSMesaContext`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>
