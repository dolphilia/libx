---
title: "入力リファレンス"
description: "GLFW 3.5.1 入力リファレンス"
---

<span id="details"></span>

## 説明

これは、入力関連の関数と型に関するリファレンスドキュメントです。作業手順を中心とした情報については、<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/" class="el">入力ガイド</a>を参照してください。

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="modules" class="groupheader"><span id="groups"></span> モジュール</h2></td>
</tr>
<tr id="r_group__gamepad__axes" class="memitem:group__gamepad__axes">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/15-gamepad-axes/" class="el">ゲームパッド軸</a></td>
</tr>
<tr class="memdesc:group__gamepad__axes">
<td class="mdescLeft"> </td>
<td class="mdescRight">ゲームパッド軸。<br />
</td>
</tr>
<tr class="separator:">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_group__gamepad__buttons" class="memitem:group__gamepad__buttons">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/14-gamepad-buttons/" class="el">ゲームパッドボタン</a></td>
</tr>
<tr class="memdesc:group__gamepad__buttons">
<td class="mdescLeft"> </td>
<td class="mdescRight">ゲームパッドボタン。<br />
</td>
</tr>
<tr class="separator:">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_group__hat__state" class="memitem:group__hat__state">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/13-joystick-hat-states/" class="el">ジョイスティックハット状態</a></td>
</tr>
<tr class="memdesc:group__hat__state">
<td class="mdescLeft"> </td>
<td class="mdescRight">ジョイスティックハット状態。<br />
</td>
</tr>
<tr class="separator:">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_group__joysticks" class="memitem:group__joysticks">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/12-joysticks/" class="el">ジョイスティック</a></td>
</tr>
<tr class="memdesc:group__joysticks">
<td class="mdescLeft"> </td>
<td class="mdescRight">ジョイスティック ID。<br />
</td>
</tr>
<tr class="separator:">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_group__keys" class="memitem:group__keys">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/09-keyboard-key-tokens/" class="el">キーボードキートークン</a></td>
</tr>
<tr class="memdesc:group__keys">
<td class="mdescLeft"> </td>
<td class="mdescRight">キーボードキートークン。<br />
</td>
</tr>
<tr class="separator:">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_group__mods" class="memitem:group__mods">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/10-modifier-key-flags/" class="el">修飾キーフラグ</a></td>
</tr>
<tr class="memdesc:group__mods">
<td class="mdescLeft"> </td>
<td class="mdescRight">修飾キーフラグ。<br />
</td>
</tr>
<tr class="separator:">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_group__buttons" class="memitem:group__buttons">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/11-mouse-buttons/" class="el">マウスボタン</a></td>
</tr>
<tr class="memdesc:group__buttons">
<td class="mdescLeft"> </td>
<td class="mdescRight">マウスボタン ID。<br />
</td>
</tr>
<tr class="separator:">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_group__shapes" class="memitem:group__shapes">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/" class="el">標準カーソル形状</a></td>
</tr>
<tr class="memdesc:group__shapes">
<td class="mdescLeft"> </td>
<td class="mdescRight">標準システムカーソル形状。<br />
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
<tr id="r_ga99aacc875b6b27a072552631e13775c7" class="memitem:ga99aacc875b6b27a072552631e13775c7">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga99aacc875b6b27a072552631e13775c7" class="el">GLFW_KEY_UNKNOWN</a>   -1</td>
</tr>
<tr class="separator:ga99aacc875b6b27a072552631e13775c7">
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
<tr id="r_ga89261ae18c75e863aaf2656ecdd238f4" class="memitem:ga89261ae18c75e863aaf2656ecdd238f4">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef struct <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a></td>
</tr>
<tr class="memdesc:ga89261ae18c75e863aaf2656ecdd238f4">
<td class="mdescLeft"> </td>
<td class="mdescRight">不透明なカーソルオブジェクト。<br />
</td>
</tr>
<tr class="separator:ga89261ae18c75e863aaf2656ecdd238f4">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga0184dcb59f6d85d735503dcaae809727" class="memitem:ga0184dcb59f6d85d735503dcaae809727">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga0184dcb59f6d85d735503dcaae809727" class="el">GLFWmousebuttonfun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int button, int action, int mods)</td>
</tr>
<tr class="memdesc:ga0184dcb59f6d85d735503dcaae809727">
<td class="mdescLeft"> </td>
<td class="mdescRight">マウスボタンコールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:ga0184dcb59f6d85d735503dcaae809727">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad6fae41b3ac2e4209aaa87b596c57f68" class="memitem:gad6fae41b3ac2e4209aaa87b596c57f68">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad6fae41b3ac2e4209aaa87b596c57f68" class="el">GLFWcursorposfun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, double xpos, double ypos)</td>
</tr>
<tr class="memdesc:gad6fae41b3ac2e4209aaa87b596c57f68">
<td class="mdescLeft"> </td>
<td class="mdescRight">カーソル位置コールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:gad6fae41b3ac2e4209aaa87b596c57f68">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa93dc4818ac9ab32532909d53a337cbe" class="memitem:gaa93dc4818ac9ab32532909d53a337cbe">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa93dc4818ac9ab32532909d53a337cbe" class="el">GLFWcursorenterfun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int entered)</td>
</tr>
<tr class="memdesc:gaa93dc4818ac9ab32532909d53a337cbe">
<td class="mdescLeft"> </td>
<td class="mdescRight">カーソル進入・退出コールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:gaa93dc4818ac9ab32532909d53a337cbe">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf656112c33de3efdb227fa58f0134cf5" class="memitem:gaf656112c33de3efdb227fa58f0134cf5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf656112c33de3efdb227fa58f0134cf5" class="el">GLFWscrollfun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, double xoffset, double yoffset)</td>
</tr>
<tr class="memdesc:gaf656112c33de3efdb227fa58f0134cf5">
<td class="mdescLeft"> </td>
<td class="mdescRight">スクロールコールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:gaf656112c33de3efdb227fa58f0134cf5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5bd751b27b90f865d2ea613533f0453c" class="memitem:ga5bd751b27b90f865d2ea613533f0453c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga5bd751b27b90f865d2ea613533f0453c" class="el">GLFWkeyfun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int key, int scancode, int action, int mods)</td>
</tr>
<tr class="memdesc:ga5bd751b27b90f865d2ea613533f0453c">
<td class="mdescLeft"> </td>
<td class="mdescRight">キーボードキーコールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:ga5bd751b27b90f865d2ea613533f0453c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1ab90a55cf3f58639b893c0f4118cb6e" class="memitem:ga1ab90a55cf3f58639b893c0f4118cb6e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga1ab90a55cf3f58639b893c0f4118cb6e" class="el">GLFWcharfun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, unsigned int codepoint)</td>
</tr>
<tr class="memdesc:ga1ab90a55cf3f58639b893c0f4118cb6e">
<td class="mdescLeft"> </td>
<td class="mdescRight">Unicode 文字コールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:ga1ab90a55cf3f58639b893c0f4118cb6e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac3cf64f90b6219c05ac7b7822d5a4b8f" class="memitem:gac3cf64f90b6219c05ac7b7822d5a4b8f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac3cf64f90b6219c05ac7b7822d5a4b8f" class="el">GLFWcharmodsfun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, unsigned int codepoint, int mods)</td>
</tr>
<tr class="memdesc:gac3cf64f90b6219c05ac7b7822d5a4b8f">
<td class="mdescLeft"> </td>
<td class="mdescRight">修飾キー付き Unicode 文字コールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:gac3cf64f90b6219c05ac7b7822d5a4b8f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaaba73c3274062c18723b7f05862d94b2" class="memitem:gaaba73c3274062c18723b7f05862d94b2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaaba73c3274062c18723b7f05862d94b2" class="el">GLFWdropfun</a>) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int path_count, const char *paths[])</td>
</tr>
<tr class="memdesc:gaaba73c3274062c18723b7f05862d94b2">
<td class="mdescLeft"> </td>
<td class="mdescRight">パスのドロップコールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:gaaba73c3274062c18723b7f05862d94b2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa21ad5986ae9a26077a40142efb56243" class="memitem:gaa21ad5986ae9a26077a40142efb56243">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa21ad5986ae9a26077a40142efb56243" class="el">GLFWjoystickfun</a>) (int jid, int event)</td>
</tr>
<tr class="memdesc:gaa21ad5986ae9a26077a40142efb56243">
<td class="mdescLeft"> </td>
<td class="mdescRight">ジョイスティック構成コールバックの関数ポインター型。<br />
</td>
</tr>
<tr class="separator:gaa21ad5986ae9a26077a40142efb56243">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga61acfb1f28f751438dd221225c5e725d" class="memitem:ga61acfb1f28f751438dd221225c5e725d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef struct <a href="/docs/glfw/v3-5-1/ja/04-reference/18-glfwgamepadstate/" class="el">GLFWgamepadstate</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga61acfb1f28f751438dd221225c5e725d" class="el">GLFWgamepadstate</a></td>
</tr>
<tr class="memdesc:ga61acfb1f28f751438dd221225c5e725d">
<td class="mdescLeft"> </td>
<td class="mdescRight">ゲームパッド入力状態。<br />
</td>
</tr>
<tr class="separator:ga61acfb1f28f751438dd221225c5e725d">
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
<tr id="r_gaf5b859dbe19bdf434e42695ea45cc5f4" class="memitem:gaf5b859dbe19bdf434e42695ea45cc5f4">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf5b859dbe19bdf434e42695ea45cc5f4" class="el">glfwGetInputMode</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int mode)</td>
</tr>
<tr class="memdesc:gaf5b859dbe19bdf434e42695ea45cc5f4">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウの入力オプション値を返します。<br />
</td>
</tr>
<tr class="separator:gaf5b859dbe19bdf434e42695ea45cc5f4">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa92336e173da9c8834558b54ee80563b" class="memitem:gaa92336e173da9c8834558b54ee80563b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa92336e173da9c8834558b54ee80563b" class="el">glfwSetInputMode</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int mode, int value)</td>
</tr>
<tr class="memdesc:gaa92336e173da9c8834558b54ee80563b">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウの入力オプションを設定します。<br />
</td>
</tr>
<tr class="separator:gaa92336e173da9c8834558b54ee80563b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae4ee0dbd0d256183e1ea4026d897e1c2" class="memitem:gae4ee0dbd0d256183e1ea4026d897e1c2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gae4ee0dbd0d256183e1ea4026d897e1c2" class="el">glfwRawMouseMotionSupported</a> (void)</td>
</tr>
<tr class="memdesc:gae4ee0dbd0d256183e1ea4026d897e1c2">
<td class="mdescLeft"> </td>
<td class="mdescRight">生のマウス移動がサポートされているかを返します。<br />
</td>
</tr>
<tr class="separator:gae4ee0dbd0d256183e1ea4026d897e1c2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaeaed62e69c3bd62b7ff8f7b19913ce4f" class="memitem:gaeaed62e69c3bd62b7ff8f7b19913ce4f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaeaed62e69c3bd62b7ff8f7b19913ce4f" class="el">glfwGetKeyName</a> (int key, int scancode)</td>
</tr>
<tr class="memdesc:gaeaed62e69c3bd62b7ff8f7b19913ce4f">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定された印字可能キーのレイアウト固有名を返します。<br />
</td>
</tr>
<tr class="separator:gaeaed62e69c3bd62b7ff8f7b19913ce4f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga67ddd1b7dcbbaff03e4a76c0ea67103a" class="memitem:ga67ddd1b7dcbbaff03e4a76c0ea67103a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga67ddd1b7dcbbaff03e4a76c0ea67103a" class="el">glfwGetKeyScancode</a> (int key)</td>
</tr>
<tr class="memdesc:ga67ddd1b7dcbbaff03e4a76c0ea67103a">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたキーのプラットフォーム固有スキャンコードを返します。<br />
</td>
</tr>
<tr class="separator:ga67ddd1b7dcbbaff03e4a76c0ea67103a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadd341da06bc8d418b4dc3a3518af9ad2" class="memitem:gadd341da06bc8d418b4dc3a3518af9ad2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gadd341da06bc8d418b4dc3a3518af9ad2" class="el">glfwGetKey</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int key)</td>
</tr>
<tr class="memdesc:gadd341da06bc8d418b4dc3a3518af9ad2">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウについて、キーボードキーの最後に報告された状態を返します。<br />
</td>
</tr>
<tr class="separator:gadd341da06bc8d418b4dc3a3518af9ad2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac1473feacb5996c01a7a5a33b5066704" class="memitem:gac1473feacb5996c01a7a5a33b5066704">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac1473feacb5996c01a7a5a33b5066704" class="el">glfwGetMouseButton</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int button)</td>
</tr>
<tr class="memdesc:gac1473feacb5996c01a7a5a33b5066704">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウについて、マウスボタンの最後に報告された状態を返します。<br />
</td>
</tr>
<tr class="separator:gac1473feacb5996c01a7a5a33b5066704">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga01d37b6c40133676b9cea60ca1d7c0cc" class="memitem:ga01d37b6c40133676b9cea60ca1d7c0cc">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga01d37b6c40133676b9cea60ca1d7c0cc" class="el">glfwGetCursorPos</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, double *xpos, double *ypos)</td>
</tr>
<tr class="memdesc:ga01d37b6c40133676b9cea60ca1d7c0cc">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウのコンテンツ領域を基準としたカーソル位置を取得します。<br />
</td>
</tr>
<tr class="separator:ga01d37b6c40133676b9cea60ca1d7c0cc">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga04b03af936d906ca123c8f4ee08b39e7" class="memitem:ga04b03af936d906ca123c8f4ee08b39e7">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga04b03af936d906ca123c8f4ee08b39e7" class="el">glfwSetCursorPos</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, double xpos, double ypos)</td>
</tr>
<tr class="memdesc:ga04b03af936d906ca123c8f4ee08b39e7">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウのコンテンツ領域を基準としたカーソル位置を設定します。<br />
</td>
</tr>
<tr class="separator:ga04b03af936d906ca123c8f4ee08b39e7">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga556f604f73af156c0db0e97c081373c3" class="memitem:ga556f604f73af156c0db0e97c081373c3">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga556f604f73af156c0db0e97c081373c3" class="el">glfwCreateCursor</a> (const <a href="/docs/glfw/v3-5-1/ja/04-reference/20-glfwimage/" class="el">GLFWimage</a> *image, int xhot, int yhot)</td>
</tr>
<tr class="memdesc:ga556f604f73af156c0db0e97c081373c3">
<td class="mdescLeft"> </td>
<td class="mdescRight">カスタムカーソルを作成します。<br />
</td>
</tr>
<tr class="separator:ga556f604f73af156c0db0e97c081373c3">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf2fb2eb2c9dd842d1cef8a34e3c6403e" class="memitem:gaf2fb2eb2c9dd842d1cef8a34e3c6403e">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf2fb2eb2c9dd842d1cef8a34e3c6403e" class="el">glfwCreateStandardCursor</a> (int shape)</td>
</tr>
<tr class="memdesc:gaf2fb2eb2c9dd842d1cef8a34e3c6403e">
<td class="mdescLeft"> </td>
<td class="mdescRight">標準形状のカーソルを作成します。<br />
</td>
</tr>
<tr class="separator:gaf2fb2eb2c9dd842d1cef8a34e3c6403e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga81b952cd1764274d0db7fb3c5a79ba6a" class="memitem:ga81b952cd1764274d0db7fb3c5a79ba6a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga81b952cd1764274d0db7fb3c5a79ba6a" class="el">glfwDestroyCursor</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> *cursor)</td>
</tr>
<tr class="memdesc:ga81b952cd1764274d0db7fb3c5a79ba6a">
<td class="mdescLeft"> </td>
<td class="mdescRight">カーソルを破棄します。<br />
</td>
</tr>
<tr class="separator:ga81b952cd1764274d0db7fb3c5a79ba6a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad3b4f38c8d5dae036bc8fa959e18343e" class="memitem:gad3b4f38c8d5dae036bc8fa959e18343e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad3b4f38c8d5dae036bc8fa959e18343e" class="el">glfwSetCursor</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> *cursor)</td>
</tr>
<tr class="memdesc:gad3b4f38c8d5dae036bc8fa959e18343e">
<td class="mdescLeft"> </td>
<td class="mdescRight">ウィンドウのカーソルを設定します。<br />
</td>
</tr>
<tr class="separator:gad3b4f38c8d5dae036bc8fa959e18343e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1caf18159767e761185e49a3be019f8d" class="memitem:ga1caf18159767e761185e49a3be019f8d">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga5bd751b27b90f865d2ea613533f0453c" class="el">GLFWkeyfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga1caf18159767e761185e49a3be019f8d" class="el">glfwSetKeyCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga5bd751b27b90f865d2ea613533f0453c" class="el">GLFWkeyfun</a> callback)</td>
</tr>
<tr class="memdesc:ga1caf18159767e761185e49a3be019f8d">
<td class="mdescLeft"> </td>
<td class="mdescRight">キーコールバックを設定します。<br />
</td>
</tr>
<tr class="separator:ga1caf18159767e761185e49a3be019f8d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab25c4a220fd8f5717718dbc487828996" class="memitem:gab25c4a220fd8f5717718dbc487828996">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga1ab90a55cf3f58639b893c0f4118cb6e" class="el">GLFWcharfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gab25c4a220fd8f5717718dbc487828996" class="el">glfwSetCharCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga1ab90a55cf3f58639b893c0f4118cb6e" class="el">GLFWcharfun</a> callback)</td>
</tr>
<tr class="memdesc:gab25c4a220fd8f5717718dbc487828996">
<td class="mdescLeft"> </td>
<td class="mdescRight">Unicode 文字コールバックを設定します。<br />
</td>
</tr>
<tr class="separator:gab25c4a220fd8f5717718dbc487828996">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga0b7f4ad13c2b17435ff13b6dcfb4e43c" class="memitem:ga0b7f4ad13c2b17435ff13b6dcfb4e43c">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac3cf64f90b6219c05ac7b7822d5a4b8f" class="el">GLFWcharmodsfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga0b7f4ad13c2b17435ff13b6dcfb4e43c" class="el">glfwSetCharModsCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac3cf64f90b6219c05ac7b7822d5a4b8f" class="el">GLFWcharmodsfun</a> callback)</td>
</tr>
<tr class="memdesc:ga0b7f4ad13c2b17435ff13b6dcfb4e43c">
<td class="mdescLeft"> </td>
<td class="mdescRight">修飾キー付き Unicode 文字コールバックを設定します。<br />
</td>
</tr>
<tr class="separator:ga0b7f4ad13c2b17435ff13b6dcfb4e43c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6ab84420974d812bee700e45284a723c" class="memitem:ga6ab84420974d812bee700e45284a723c">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga0184dcb59f6d85d735503dcaae809727" class="el">GLFWmousebuttonfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga6ab84420974d812bee700e45284a723c" class="el">glfwSetMouseButtonCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga0184dcb59f6d85d735503dcaae809727" class="el">GLFWmousebuttonfun</a> callback)</td>
</tr>
<tr class="memdesc:ga6ab84420974d812bee700e45284a723c">
<td class="mdescLeft"> </td>
<td class="mdescRight">マウスボタンコールバックを設定します。<br />
</td>
</tr>
<tr class="separator:ga6ab84420974d812bee700e45284a723c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac1f879ab7435d54d4d79bb469fe225d7" class="memitem:gac1f879ab7435d54d4d79bb469fe225d7">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad6fae41b3ac2e4209aaa87b596c57f68" class="el">GLFWcursorposfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac1f879ab7435d54d4d79bb469fe225d7" class="el">glfwSetCursorPosCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad6fae41b3ac2e4209aaa87b596c57f68" class="el">GLFWcursorposfun</a> callback)</td>
</tr>
<tr class="memdesc:gac1f879ab7435d54d4d79bb469fe225d7">
<td class="mdescLeft"> </td>
<td class="mdescRight">カーソル位置コールバックを設定します。<br />
</td>
</tr>
<tr class="separator:gac1f879ab7435d54d4d79bb469fe225d7">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad27f8ad0142c038a281466c0966817d8" class="memitem:gad27f8ad0142c038a281466c0966817d8">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa93dc4818ac9ab32532909d53a337cbe" class="el">GLFWcursorenterfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad27f8ad0142c038a281466c0966817d8" class="el">glfwSetCursorEnterCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa93dc4818ac9ab32532909d53a337cbe" class="el">GLFWcursorenterfun</a> callback)</td>
</tr>
<tr class="memdesc:gad27f8ad0142c038a281466c0966817d8">
<td class="mdescLeft"> </td>
<td class="mdescRight">カーソル進入・退出コールバックを設定します。<br />
</td>
</tr>
<tr class="separator:gad27f8ad0142c038a281466c0966817d8">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga571e45a030ae4061f746ed56cb76aede" class="memitem:ga571e45a030ae4061f746ed56cb76aede">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf656112c33de3efdb227fa58f0134cf5" class="el">GLFWscrollfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga571e45a030ae4061f746ed56cb76aede" class="el">glfwSetScrollCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf656112c33de3efdb227fa58f0134cf5" class="el">GLFWscrollfun</a> callback)</td>
</tr>
<tr class="memdesc:ga571e45a030ae4061f746ed56cb76aede">
<td class="mdescLeft"> </td>
<td class="mdescRight">スクロールコールバックを設定します。<br />
</td>
</tr>
<tr class="separator:ga571e45a030ae4061f746ed56cb76aede">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab773f0ee0a07cff77a210cea40bc1f6b" class="memitem:gab773f0ee0a07cff77a210cea40bc1f6b">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaaba73c3274062c18723b7f05862d94b2" class="el">GLFWdropfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gab773f0ee0a07cff77a210cea40bc1f6b" class="el">glfwSetDropCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaaba73c3274062c18723b7f05862d94b2" class="el">GLFWdropfun</a> callback)</td>
</tr>
<tr class="memdesc:gab773f0ee0a07cff77a210cea40bc1f6b">
<td class="mdescLeft"> </td>
<td class="mdescRight">パスのドロップコールバックを設定します。<br />
</td>
</tr>
<tr class="separator:gab773f0ee0a07cff77a210cea40bc1f6b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaed0966cee139d815317f9ffcba64c9f1" class="memitem:gaed0966cee139d815317f9ffcba64c9f1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a> (int jid)</td>
</tr>
<tr class="memdesc:gaed0966cee139d815317f9ffcba64c9f1">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたジョイスティックが存在するかを返します。<br />
</td>
</tr>
<tr class="separator:gaed0966cee139d815317f9ffcba64c9f1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaeb1c0191d3140a233a682987c61eb408" class="memitem:gaeb1c0191d3140a233a682987c61eb408">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const float * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaeb1c0191d3140a233a682987c61eb408" class="el">glfwGetJoystickAxes</a> (int jid, int *count)</td>
</tr>
<tr class="memdesc:gaeb1c0191d3140a233a682987c61eb408">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたジョイスティックの全軸の値を返します。<br />
</td>
</tr>
<tr class="separator:gaeb1c0191d3140a233a682987c61eb408">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5ffe34739d3dc97efe432ed2d81d9938" class="memitem:ga5ffe34739d3dc97efe432ed2d81d9938">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const unsigned char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga5ffe34739d3dc97efe432ed2d81d9938" class="el">glfwGetJoystickButtons</a> (int jid, int *count)</td>
</tr>
<tr class="memdesc:ga5ffe34739d3dc97efe432ed2d81d9938">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたジョイスティックの全ボタンの状態を返します。<br />
</td>
</tr>
<tr class="separator:ga5ffe34739d3dc97efe432ed2d81d9938">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga06e660841b3e79c54da4f54a932c5a2c" class="memitem:ga06e660841b3e79c54da4f54a932c5a2c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const unsigned char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga06e660841b3e79c54da4f54a932c5a2c" class="el">glfwGetJoystickHats</a> (int jid, int *count)</td>
</tr>
<tr class="memdesc:ga06e660841b3e79c54da4f54a932c5a2c">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたジョイスティックの全ハットの状態を返します。<br />
</td>
</tr>
<tr class="separator:ga06e660841b3e79c54da4f54a932c5a2c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac6a8e769e18e0bcfa9097793fc2c3978" class="memitem:gac6a8e769e18e0bcfa9097793fc2c3978">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac6a8e769e18e0bcfa9097793fc2c3978" class="el">glfwGetJoystickName</a> (int jid)</td>
</tr>
<tr class="memdesc:gac6a8e769e18e0bcfa9097793fc2c3978">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたジョイスティックの名前を返します。<br />
</td>
</tr>
<tr class="separator:gac6a8e769e18e0bcfa9097793fc2c3978">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6659411aec3c7fcef27780e2cb2d9600" class="memitem:ga6659411aec3c7fcef27780e2cb2d9600">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga6659411aec3c7fcef27780e2cb2d9600" class="el">glfwGetJoystickGUID</a> (int jid)</td>
</tr>
<tr class="memdesc:ga6659411aec3c7fcef27780e2cb2d9600">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたジョイスティックの SDL 互換 GUID を返します。<br />
</td>
</tr>
<tr class="separator:ga6659411aec3c7fcef27780e2cb2d9600">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6b2f72d64d636b48a727b437cbb7489e" class="memitem:ga6b2f72d64d636b48a727b437cbb7489e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga6b2f72d64d636b48a727b437cbb7489e" class="el">glfwSetJoystickUserPointer</a> (int jid, void *pointer)</td>
</tr>
<tr class="memdesc:ga6b2f72d64d636b48a727b437cbb7489e">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたジョイスティックのユーザーポインターを設定します。<br />
</td>
</tr>
<tr class="separator:ga6b2f72d64d636b48a727b437cbb7489e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga18cefd7265d1fa04f3fd38a6746db5f3" class="memitem:ga18cefd7265d1fa04f3fd38a6746db5f3">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga18cefd7265d1fa04f3fd38a6746db5f3" class="el">glfwGetJoystickUserPointer</a> (int jid)</td>
</tr>
<tr class="memdesc:ga18cefd7265d1fa04f3fd38a6746db5f3">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたジョイスティックのユーザーポインターを返します。<br />
</td>
</tr>
<tr class="separator:ga18cefd7265d1fa04f3fd38a6746db5f3">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad0f676860f329d80f7e47e9f06a96f00" class="memitem:gad0f676860f329d80f7e47e9f06a96f00">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad0f676860f329d80f7e47e9f06a96f00" class="el">glfwJoystickIsGamepad</a> (int jid)</td>
</tr>
<tr class="memdesc:gad0f676860f329d80f7e47e9f06a96f00">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたジョイスティックにゲームパッドマッピングがあるかを返します。<br />
</td>
</tr>
<tr class="separator:gad0f676860f329d80f7e47e9f06a96f00">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c" class="memitem:ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa21ad5986ae9a26077a40142efb56243" class="el">GLFWjoystickfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c" class="el">glfwSetJoystickCallback</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa21ad5986ae9a26077a40142efb56243" class="el">GLFWjoystickfun</a> callback)</td>
</tr>
<tr class="memdesc:ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c">
<td class="mdescLeft"> </td>
<td class="mdescRight">ジョイスティック構成コールバックを設定します。<br />
</td>
</tr>
<tr class="separator:ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaed5104612f2fa8e66aa6e846652ad00f" class="memitem:gaed5104612f2fa8e66aa6e846652ad00f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaed5104612f2fa8e66aa6e846652ad00f" class="el">glfwUpdateGamepadMappings</a> (const char *string)</td>
</tr>
<tr class="memdesc:gaed5104612f2fa8e66aa6e846652ad00f">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定された SDL_GameControllerDB ゲームパッドマッピングを追加します。<br />
</td>
</tr>
<tr class="separator:gaed5104612f2fa8e66aa6e846652ad00f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8aea73a1a25cc6c0486a617019f56728" class="memitem:ga8aea73a1a25cc6c0486a617019f56728">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga8aea73a1a25cc6c0486a617019f56728" class="el">glfwGetGamepadName</a> (int jid)</td>
</tr>
<tr class="memdesc:ga8aea73a1a25cc6c0486a617019f56728">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたジョイスティックの人間が読めるゲームパッド名を返します。<br />
</td>
</tr>
<tr class="separator:ga8aea73a1a25cc6c0486a617019f56728">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadccddea8bce6113fa459de379ddaf051" class="memitem:gadccddea8bce6113fa459de379ddaf051">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gadccddea8bce6113fa459de379ddaf051" class="el">glfwGetGamepadState</a> (int jid, <a href="/docs/glfw/v3-5-1/ja/04-reference/18-glfwgamepadstate/" class="el">GLFWgamepadstate</a> *state)</td>
</tr>
<tr class="memdesc:gadccddea8bce6113fa459de379ddaf051">
<td class="mdescLeft"> </td>
<td class="mdescRight">ゲームパッドとして再マッピングされた、指定されたジョイスティックの状態を取得します。<br />
</td>
</tr>
<tr class="separator:gadccddea8bce6113fa459de379ddaf051">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaba1f022c5eb07dfac421df34cdcd31dd" class="memitem:gaba1f022c5eb07dfac421df34cdcd31dd">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaba1f022c5eb07dfac421df34cdcd31dd" class="el">glfwSetClipboardString</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, const char *string)</td>
</tr>
<tr class="memdesc:gaba1f022c5eb07dfac421df34cdcd31dd">
<td class="mdescLeft"> </td>
<td class="mdescRight">クリップボードを指定された文字列に設定します。<br />
</td>
</tr>
<tr class="separator:gaba1f022c5eb07dfac421df34cdcd31dd">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga71a5b20808ea92193d65c21b82580355" class="memitem:ga71a5b20808ea92193d65c21b82580355">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga71a5b20808ea92193d65c21b82580355" class="el">glfwGetClipboardString</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga71a5b20808ea92193d65c21b82580355">
<td class="mdescLeft"> </td>
<td class="mdescRight">クリップボードの内容を文字列として返します。<br />
</td>
</tr>
<tr class="separator:ga71a5b20808ea92193d65c21b82580355">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa6cf4e7a77158a3b8fd00328b1720a4a" class="memitem:gaa6cf4e7a77158a3b8fd00328b1720a4a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">double </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa6cf4e7a77158a3b8fd00328b1720a4a" class="el">glfwGetTime</a> (void)</td>
</tr>
<tr class="memdesc:gaa6cf4e7a77158a3b8fd00328b1720a4a">
<td class="mdescLeft"> </td>
<td class="mdescRight">GLFW 時刻を返します。<br />
</td>
</tr>
<tr class="separator:gaa6cf4e7a77158a3b8fd00328b1720a4a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf59589ef6e8b8c8b5ad184b25afd4dc0" class="memitem:gaf59589ef6e8b8c8b5ad184b25afd4dc0">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf59589ef6e8b8c8b5ad184b25afd4dc0" class="el">glfwSetTime</a> (double time)</td>
</tr>
<tr class="memdesc:gaf59589ef6e8b8c8b5ad184b25afd4dc0">
<td class="mdescLeft"> </td>
<td class="mdescRight">GLFW 時刻を設定します。<br />
</td>
</tr>
<tr class="separator:gaf59589ef6e8b8c8b5ad184b25afd4dc0">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga09b2bd37d328e0b9456c7ec575cc26aa" class="memitem:ga09b2bd37d328e0b9456c7ec575cc26aa">
<td class="memItemLeft" style="text-align: right;" data-valign="top">uint64_t </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga09b2bd37d328e0b9456c7ec575cc26aa" class="el">glfwGetTimerValue</a> (void)</td>
</tr>
<tr class="memdesc:ga09b2bd37d328e0b9456c7ec575cc26aa">
<td class="mdescLeft"> </td>
<td class="mdescRight">生タイマーの現在値を返します。<br />
</td>
</tr>
<tr class="separator:ga09b2bd37d328e0b9456c7ec575cc26aa">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3289ee876572f6e91f06df3a24824443" class="memitem:ga3289ee876572f6e91f06df3a24824443">
<td class="memItemLeft" style="text-align: right;" data-valign="top">uint64_t </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga3289ee876572f6e91f06df3a24824443" class="el">glfwGetTimerFrequency</a> (void)</td>
</tr>
<tr class="memdesc:ga3289ee876572f6e91f06df3a24824443">
<td class="mdescLeft"> </td>
<td class="mdescRight">生タイマーの周波数を Hz 単位で返します。<br />
</td>
</tr>
<tr class="separator:ga3289ee876572f6e91f06df3a24824443">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## マクロ定義の詳細

<span id="gada11d965c4da13090ad336e030e4d11f"></span>

## <span class="permalink">[◆ ](#gada11d965c4da13090ad336e030e4d11f)</span>GLFW_RELEASE

<div class="memitem">

<div class="memproto">

|                           |
|---------------------------|
| \#define GLFW_RELEASE   0 |

</div>

<div class="memdoc">

キーまたはマウスボタンが解放されました。

</div>

</div>

<span id="ga2485743d0b59df3791c45951c4195265"></span>

## <span class="permalink">[◆ ](#ga2485743d0b59df3791c45951c4195265)</span>GLFW_PRESS

<div class="memitem">

<div class="memproto">

|                         |
|-------------------------|
| \#define GLFW_PRESS   1 |

</div>

<div class="memdoc">

キーまたはマウスボタンが押されました。

</div>

</div>

<span id="gac96fd3b9fc66c6f0eebaf6532595338f"></span>

## <span class="permalink">[◆ ](#gac96fd3b9fc66c6f0eebaf6532595338f)</span>GLFW_REPEAT

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_REPEAT   2 |

</div>

<div class="memdoc">

キーがリピートするまで押し続けられました。

</div>

</div>

<span id="ga99aacc875b6b27a072552631e13775c7"></span>

## <span class="permalink">[◆ ](#ga99aacc875b6b27a072552631e13775c7)</span>GLFW_KEY_UNKNOWN

<div class="memitem">

<div class="memproto">

|                                |
|--------------------------------|
| \#define GLFW_KEY_UNKNOWN   -1 |

</div>

<div class="memdoc">

</div>

</div>

## 型定義の詳細

<span id="ga89261ae18c75e863aaf2656ecdd238f4"></span>

## <span class="permalink">[◆ ](#ga89261ae18c75e863aaf2656ecdd238f4)</span>GLFWcursor

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef struct <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> |

</div>

<div class="memdoc">

不透明なカーソルオブジェクトです。

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_object" class="el">カーソルオブジェクト</a>

<!-- -->

導入バージョン  
バージョン 3.1 で追加されました。

</div>

</div>

<span id="ga0184dcb59f6d85d735503dcaae809727"></span>

## <span class="permalink">[◆ ](#ga0184dcb59f6d85d735503dcaae809727)</span>GLFWmousebuttonfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWmousebuttonfun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int button, int action, int mods) |

</div>

<div class="memdoc">

これは、マウスボタンコールバック関数の関数ポインター型です。マウスボタンコールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> button, <span class="keywordtype">int</span> action, <span class="keywordtype">int</span> mods)

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
| \[in\] | window | イベントを受け取ったウィンドウ。 |
| \[in\] | button | 押された、または解放された<a href="/docs/glfw/v3-5-1/ja/04-reference/11-mouse-buttons/" class="el">マウスボタン</a>。 |
| \[in\] | action | `GLFW_PRESS` または `GLFW_RELEASE` のいずれか。将来のリリースでアクションが追加される可能性があります。 |
| \[in\] | mods | どの<a href="/docs/glfw/v3-5-1/ja/04-reference/10-modifier-key-flags/" class="el">修飾キー</a>が押されていたかを表すビットフィールド。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_mouse_button" class="el">マウスボタン入力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga6ab84420974d812bee700e45284a723c" class="el">glfwSetMouseButtonCallback</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。**GLFW 3:** ウィンドウハンドルと修飾キーマスクの引数が追加されました。

</div>

</div>

<span id="gad6fae41b3ac2e4209aaa87b596c57f68"></span>

## <span class="permalink">[◆ ](#gad6fae41b3ac2e4209aaa87b596c57f68)</span>GLFWcursorposfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWcursorposfun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, double xpos, double ypos) |

</div>

<div class="memdoc">

これは、カーソル位置コールバックの関数ポインター型です。カーソル位置コールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">double</span> xpos, <span class="keywordtype">double</span> ypos);

</div>

</div>

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | イベントを受け取ったウィンドウ。 |
| \[in\] | xpos | コンテンツ領域の左端を基準とした、新しいカーソルの X 座標。 |
| \[in\] | ypos | コンテンツ領域の上端を基準とした、新しいカーソルの Y 座標。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_pos" class="el">カーソル位置</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac1f879ab7435d54d4d79bb469fe225d7" class="el">glfwSetCursorPosCallback</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。`GLFWmouseposfun` を置き換えます。

</div>

</div>

<span id="gaa93dc4818ac9ab32532909d53a337cbe"></span>

## <span class="permalink">[◆ ](#gaa93dc4818ac9ab32532909d53a337cbe)</span>GLFWcursorenterfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWcursorenterfun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int entered) |

</div>

<div class="memdoc">

これは、カーソル進入・退出コールバックの関数ポインター型です。カーソル進入・退出コールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> entered)

</div>

</div>

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | イベントを受け取ったウィンドウ。 |
| \[in\] | entered | カーソルがウィンドウのコンテンツ領域へ入った場合は `GLFW_TRUE`、出た場合は `GLFW_FALSE`。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_enter" class="el">カーソルの進入・退出イベント</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad27f8ad0142c038a281466c0966817d8" class="el">glfwSetCursorEnterCallback</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="gaf656112c33de3efdb227fa58f0134cf5"></span>

## <span class="permalink">[◆ ](#gaf656112c33de3efdb227fa58f0134cf5)</span>GLFWscrollfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWscrollfun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, double xoffset, double yoffset) |

</div>

<div class="memdoc">

これは、スクロールコールバックの関数ポインター型です。スクロールコールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">double</span> xoffset, <span class="keywordtype">double</span> yoffset)

</div>

</div>

引数  
|        |         |                                     |
|--------|---------|-------------------------------------|
| \[in\] | window  | イベントを受け取ったウィンドウ。 |
| \[in\] | xoffset | X 軸方向のスクロールオフセット。 |
| \[in\] | yoffset | Y 軸方向のスクロールオフセット。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#scrolling" class="el">スクロール入力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga571e45a030ae4061f746ed56cb76aede" class="el">glfwSetScrollCallback</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。`GLFWmousewheelfun` を置き換えます。

</div>

</div>

<span id="ga5bd751b27b90f865d2ea613533f0453c"></span>

## <span class="permalink">[◆ ](#ga5bd751b27b90f865d2ea613533f0453c)</span>GLFWkeyfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWkeyfun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int key, int scancode, int action, int mods) |

</div>

<div class="memdoc">

これは、キーボードキーコールバックの関数ポインター型です。キーボードキーコールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> key, <span class="keywordtype">int</span> scancode, <span class="keywordtype">int</span> action, <span class="keywordtype">int</span> mods)

</div>

</div>

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | イベントを受け取ったウィンドウ。 |
| \[in\] | key | 押された、または解放された<a href="/docs/glfw/v3-5-1/ja/04-reference/09-keyboard-key-tokens/" class="el">キーボードキー</a>。 |
| \[in\] | scancode | キーのプラットフォーム固有スキャンコード。 |
| \[in\] | action | `GLFW_PRESS`、`GLFW_RELEASE`、または `GLFW_REPEAT`。将来のリリースでアクションが追加される可能性があります。 |
| \[in\] | mods | どの<a href="/docs/glfw/v3-5-1/ja/04-reference/10-modifier-key-flags/" class="el">修飾キー</a>が押されていたかを表すビットフィールド。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_key" class="el">キー入力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga1caf18159767e761185e49a3be019f8d" class="el">glfwSetKeyCallback</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。**GLFW 3:** ウィンドウハンドル、スキャンコード、修飾キーマスクの引数が追加されました。

</div>

</div>

<span id="ga1ab90a55cf3f58639b893c0f4118cb6e"></span>

## <span class="permalink">[◆ ](#ga1ab90a55cf3f58639b893c0f4118cb6e)</span>GLFWcharfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWcharfun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, unsigned int codepoint) |

</div>

<div class="memdoc">

これは、Unicode 文字コールバックの関数ポインター型です。Unicode 文字コールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">unsigned</span> <span class="keywordtype">int</span> codepoint)

</div>

</div>

引数  
|        |           |                                          |
|--------|-----------|------------------------------------------|
| \[in\] | window    | イベントを受け取ったウィンドウ。      |
| \[in\] | codepoint | 文字の Unicode コードポイント。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_char" class="el">テキスト入力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gab25c4a220fd8f5717718dbc487828996" class="el">glfwSetCharCallback</a>

<!-- -->

導入バージョン  
バージョン 2.4 で追加されました。**GLFW 3:** ウィンドウハンドルの引数が追加されました。

</div>

</div>

<span id="gac3cf64f90b6219c05ac7b7822d5a4b8f"></span>

## <span class="permalink">[◆ ](#gac3cf64f90b6219c05ac7b7822d5a4b8f)</span>GLFWcharmodsfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWcharmodsfun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, unsigned int codepoint, int mods) |

</div>

<div class="memdoc">

これは、修飾キー付き Unicode 文字コールバックの関数ポインター型です。どの修飾キーが押されているかにかかわらず、入力文字ごとに呼び出されます。修飾キー付き Unicode 文字コールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">unsigned</span> <span class="keywordtype">int</span> codepoint, <span class="keywordtype">int</span> mods)

</div>

</div>

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | イベントを受け取ったウィンドウ。 |
| \[in\] | codepoint | 文字の Unicode コードポイント。 |
| \[in\] | mods | どの<a href="/docs/glfw/v3-5-1/ja/04-reference/10-modifier-key-flags/" class="el">修飾キー</a>が押されていたかを表すビットフィールド。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_char" class="el">テキスト入力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga0b7f4ad13c2b17435ff13b6dcfb4e43c" class="el">glfwSetCharModsCallback</a>

<!-- -->

**<a href="/docs/glfw/v3-5-1/ja/04-reference/22-deprecated-list/#_deprecated000001" class="el">非推奨:</a>**  
バージョン 4.0 で削除される予定です。

<!-- -->

導入バージョン  
バージョン 3.1 で追加されました。

</div>

</div>

<span id="gaaba73c3274062c18723b7f05862d94b2"></span>

## <span class="permalink">[◆ ](#gaaba73c3274062c18723b7f05862d94b2)</span>GLFWdropfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWdropfun) (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int path_count, const char \*paths\[\]) |

</div>

<div class="memdoc">

これは、パスのドロップコールバックの関数ポインター型です。パスのドロップコールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> path_count, <span class="keyword">const</span> <span class="keywordtype">char</span>\* paths\[\])

</div>

</div>

引数  
|        |            |                                                     |
|--------|------------|-----------------------------------------------------|
| \[in\] | window     | イベントを受け取ったウィンドウ。                 |
| \[in\] | path_count | ドロップされたパスの数。                        |
| \[in\] | paths      | UTF-8 でエンコードされたファイルおよびディレクトリのパス名。 |

<!-- -->

ポインターの有効期間  
パス配列とその文字列は、コールバック関数が戻るまで有効です。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#path_drop" class="el">パスのドロップ入力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gab773f0ee0a07cff77a210cea40bc1f6b" class="el">glfwSetDropCallback</a>

<!-- -->

導入バージョン  
バージョン 3.1 で追加されました。

</div>

</div>

<span id="gaa21ad5986ae9a26077a40142efb56243"></span>

## <span class="permalink">[◆ ](#gaa21ad5986ae9a26077a40142efb56243)</span>GLFWjoystickfun

<div class="memitem">

<div class="memproto">

|                                                       |
|-------------------------------------------------------|
| typedef void(\* GLFWjoystickfun) (int jid, int event) |

</div>

<div class="memdoc">

これは、ジョイスティック構成コールバックの関数ポインター型です。ジョイスティック構成コールバック関数は、次のシグネチャを持ちます。

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<span class="keywordtype">int</span> jid, <span class="keywordtype">int</span> event)

</div>

</div>

引数  
|  |  |  |
|----|----|----|
| \[in\] | jid | 接続または切断されたジョイスティック。 |
| \[in\] | event | `GLFW_CONNECTED` または `GLFW_DISCONNECTED` のいずれか。将来のリリースでイベントが追加される可能性があります。 |

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#joystick_event" class="el">ジョイスティック構成の変更</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c" class="el">glfwSetJoystickCallback</a>

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

</div>

</div>

<span id="ga61acfb1f28f751438dd221225c5e725d"></span>

## <span class="permalink">[◆ ](#ga61acfb1f28f751438dd221225c5e725d)</span>GLFWgamepadstate

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef struct <a href="/docs/glfw/v3-5-1/ja/04-reference/18-glfwgamepadstate/" class="el">GLFWgamepadstate</a> <a href="/docs/glfw/v3-5-1/ja/04-reference/18-glfwgamepadstate/" class="el">GLFWgamepadstate</a> |

</div>

<div class="memdoc">

これは、ゲームパッドの入力状態を表します。

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#gamepad" class="el">ゲームパッド入力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gadccddea8bce6113fa459de379ddaf051" class="el">glfwGetGamepadState</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

## 関数の詳細

<span id="gaf5b859dbe19bdf434e42695ea45cc5f4"></span>

## <span class="permalink">[◆ ](#gaf5b859dbe19bdf434e42695ea45cc5f4)</span>glfwGetInputMode()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetInputMode | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *mode*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウの入力オプション値を返します。モードは <a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_CURSOR" class="el">GLFW_CURSOR</a>、<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_STICKY_KEYS" class="el">GLFW_STICKY_KEYS</a>、<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_STICKY_MOUSE_BUTTONS" class="el">GLFW_STICKY_MOUSE_BUTTONS</a>、<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_LOCK_KEY_MODS" class="el">GLFW_LOCK_KEY_MODS</a>、または <a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_RAW_MOUSE_MOTION" class="el">GLFW_RAW_MOUSE_MOTION</a> のいずれかでなければなりません。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | 照会するウィンドウ。 |
| \[in\] | mode | `GLFW_CURSOR`、`GLFW_STICKY_KEYS`、`GLFW_STICKY_MOUSE_BUTTONS`、`GLFW_LOCK_KEY_MODS`、または `GLFW_RAW_MOUSE_MOTION` のいずれか。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa92336e173da9c8834558b54ee80563b" class="el">glfwSetInputMode</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="gaa92336e173da9c8834558b54ee80563b"></span>

## <span class="permalink">[◆ ](#gaa92336e173da9c8834558b54ee80563b)</span>glfwSetInputMode()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetInputMode | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *mode*, |
|  |  | int  | *value*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウの入力モードオプションを設定します。モードは <a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_CURSOR" class="el">GLFW_CURSOR</a>、<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_STICKY_KEYS" class="el">GLFW_STICKY_KEYS</a>、<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_STICKY_MOUSE_BUTTONS" class="el">GLFW_STICKY_MOUSE_BUTTONS</a>、<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_LOCK_KEY_MODS" class="el">GLFW_LOCK_KEY_MODS</a>、<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_RAW_MOUSE_MOTION" class="el">GLFW_RAW_MOUSE_MOTION</a>、または <a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_UNLIMITED_MOUSE_BUTTONS" class="el">GLFW_UNLIMITED_MOUSE_BUTTONS</a> のいずれかでなければなりません。

モードが `GLFW_CURSOR` の場合、値は次のカーソルモードのいずれかでなければなりません。

- `GLFW_CURSOR_NORMAL` はカーソルを表示し、通常どおり動作させます。
- `GLFW_CURSOR_HIDDEN` は、カーソルがウィンドウのコンテンツ領域上にあるとき非表示にしますが、領域外へ出ることは制限しません。
- `GLFW_CURSOR_DISABLED` はカーソルを非表示にして捕捉し、仮想的で無制限のカーソル移動を提供します。これは、たとえば3Dカメラ制御の実装に役立ちます。
- `GLFW_CURSOR_CAPTURED` はカーソルを表示し、ウィンドウのコンテンツ領域内に制限します。

モードが `GLFW_STICKY_KEYS` の場合、値はスティッキーキーを有効にする `GLFW_TRUE`、または無効にする `GLFW_FALSE` でなければなりません。スティッキーキーが有効な場合、呼び出し前にキーが解放されていても、キーが押されると次回の <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gadd341da06bc8d418b4dc3a3518af9ad2" class="el">glfwGetKey</a> は `GLFW_PRESS` を返します。これは、キーがいつ、どの順序で押されたかではなく、押されたかどうかだけに関心がある場合に役立ちます。

モードが `GLFW_STICKY_MOUSE_BUTTONS` の場合、値はスティッキーマウスボタンを有効にする `GLFW_TRUE`、または無効にする `GLFW_FALSE` でなければなりません。スティッキーマウスボタンが有効な場合、呼び出し前にマウスボタンが解放されていても、ボタンが押されると次回の <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac1473feacb5996c01a7a5a33b5066704" class="el">glfwGetMouseButton</a> は `GLFW_PRESS` を返します。これは、ボタンがいつ、どの順序で押されたかではなく、押されたかどうかだけに関心がある場合に役立ちます。

モードが `GLFW_LOCK_KEY_MODS` の場合、値はロックキー修飾ビットを有効にする `GLFW_TRUE`、または無効にする `GLFW_FALSE` でなければなりません。有効な場合、修飾ビットを受け取るコールバックでは、Caps Lock がオンの状態でイベントが生成されると <a href="/docs/glfw/v3-5-1/ja/04-reference/10-modifier-key-flags/#gaefeef8fcf825a6e43e241b337897200f" class="el">GLFW_MOD_CAPS_LOCK</a> ビットが、Num Lock がオンなら <a href="/docs/glfw/v3-5-1/ja/04-reference/10-modifier-key-flags/#ga64e020b8a42af8376e944baf61feecbe" class="el">GLFW_MOD_NUM_LOCK</a> ビットも設定されます。

モードが `GLFW_RAW_MOUSE_MOTION` の場合、値はカーソル無効時の生の（拡大縮小も加速もされない）マウス移動を有効にする `GLFW_TRUE`、または無効にする `GLFW_FALSE` でなければなりません。生の移動がサポートされていない場合、設定しようとすると <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> が発生します。サポートの確認には <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gae4ee0dbd0d256183e1ea4026d897e1c2" class="el">glfwRawMouseMotionSupported</a> を呼び出してください。

モードが `GLFW_UNLIMITED_MOUSE_BUTTONS` の場合、値はマウスボタンコールバック呼び出し時のボタン制限を無効にする `GLFW_TRUE`、またはコールバックへ送るボタンを `GLFW_MOUSE_BUTTON_LAST` までのマウスボタントークン値に制限する `GLFW_FALSE` でなければなりません。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | 入力モードを設定するウィンドウ。 |
| \[in\] | mode | `GLFW_CURSOR`、`GLFW_STICKY_KEYS`、`GLFW_STICKY_MOUSE_BUTTONS`、`GLFW_LOCK_KEY_MODS`、または `GLFW_RAW_MOUSE_MOTION` のいずれか。 |
| \[in\] | value | 指定された入力モードの新しい値。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>、および <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>（上記を参照）があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf5b859dbe19bdf434e42695ea45cc5f4" class="el">glfwGetInputMode</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。`glfwEnable` と `glfwDisable` を置き換えます。

</div>

</div>

<span id="gae4ee0dbd0d256183e1ea4026d897e1c2"></span>

## <span class="permalink">[◆ ](#gae4ee0dbd0d256183e1ea4026d897e1c2)</span>glfwRawMouseMotionSupported()

<div class="memitem">

<div class="memproto">

|                                 |     |       |     |     |     |
|---------------------------------|-----|-------|-----|-----|-----|
| int glfwRawMouseMotionSupported | (   | void  |     | )   |     |

</div>

<div class="memdoc">

この関数は、現在のシステムで生のマウス移動がサポートされているかを返します。この状態は GLFW の初期化後に変化しないため、確認は一度だけでかまいません。サポートしていないシステムで生の移動を有効にしようとすると、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> が発生します。

生のマウス移動は、面上での実際のマウスの動きに近いものです。デスクトップカーソルの移動に適用される拡大縮小や加速の影響を受けません。その処理はカーソルには適していますが、たとえば3Dカメラの制御には生の移動の方が適しています。このため、生のマウス移動はカーソルが無効な場合にのみ提供されます。

戻り値  
現在のマシンで生のマウス移動がサポートされている場合は `GLFW_TRUE`、それ以外の場合は `GLFW_FALSE`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#raw_mouse_motion" class="el">生のマウス移動</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa92336e173da9c8834558b54ee80563b" class="el">glfwSetInputMode</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="gaeaed62e69c3bd62b7ff8f7b19913ce4f"></span>

## <span class="permalink">[◆ ](#gaeaed62e69c3bd62b7ff8f7b19913ce4f)</span>glfwGetKeyName()

<div class="memitem">

<div class="memproto">

|                              |     |      |             |
|------------------------------|-----|------|-------------|
| const char \* glfwGetKeyName | (   | int  | *key*,      |
|                              |     | int  | *scancode*  |
|                              | )   |      |             |

</div>

<div class="memdoc">

この関数は、指定された印字可能キーの名前を UTF-8 エンコードで返します。これは通常、そのキーが修飾キーなしで生成する文字であり、ユーザーへキーバインドを表示するためのものです。デッドキーの場合は通常、文字へ付加されるダイアクリティカルマークです。

<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_char" class="el">テキスト入力</a>に**この関数を使用しないでください**。自分の言語ではたまたま動作しても、多くの言語のテキスト入力を壊します。

キーが `GLFW_KEY_UNKNOWN` の場合、キーの識別にスキャンコードが使用されます。それ以外の場合、スキャンコードは無視されます。印字不可能なキー、または `GLFW_KEY_UNKNOWN` と印字不可能なキーに対応するスキャンコードを指定すると、この関数は `NULL` を返しますが、エラーは発生させません。

この動作により、<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_key" class="el">キーコールバック</a>の引数を常に変更せず渡せます。

印字可能なキーは次のとおりです。

- `GLFW_KEY_APOSTROPHE`
- `GLFW_KEY_COMMA`
- `GLFW_KEY_MINUS`
- `GLFW_KEY_PERIOD`
- `GLFW_KEY_SLASH`
- `GLFW_KEY_SEMICOLON`
- `GLFW_KEY_EQUAL`
- `GLFW_KEY_LEFT_BRACKET`
- `GLFW_KEY_RIGHT_BRACKET`
- `GLFW_KEY_BACKSLASH`
- `GLFW_KEY_WORLD_1`
- `GLFW_KEY_WORLD_2`
- `GLFW_KEY_0` to `GLFW_KEY_9`
- `GLFW_KEY_A` to `GLFW_KEY_Z`
- `GLFW_KEY_KP_0` to `GLFW_KEY_KP_9`
- `GLFW_KEY_KP_DECIMAL`
- `GLFW_KEY_KP_DIVIDE`
- `GLFW_KEY_KP_MULTIPLY`
- `GLFW_KEY_KP_SUBTRACT`
- `GLFW_KEY_KP_ADD`
- `GLFW_KEY_KP_EQUAL`

印字可能なキーの名前はキーボードレイアウトに依存します。一方、印字不可能なキーの名前はレイアウト間で共通ですが、アプリケーションの言語に依存するため、他のユーザーインターフェイス文字列とともにローカライズすべきです。

引数  
|        |          |                                          |
|--------|----------|------------------------------------------|
| \[in\] | key      | 照会するキー、または `GLFW_KEY_UNKNOWN`。 |
| \[in\] | scancode | 照会するキーのスキャンコード。        |

<!-- -->

戻り値  
UTF-8 でエンコードされたレイアウト固有のキー名、または `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>、および <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
キーボードレイアウト変更イベントを受け取ると、返される文字列の内容が変わることがあります。

<!-- -->

ポインターの有効期間  
返される文字列は GLFW が割り当て、解放します。自分で解放しないでください。ライブラリが終了するまで有効です。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_key_name" class="el">キー名</a>

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

</div>

</div>

<span id="ga67ddd1b7dcbbaff03e4a76c0ea67103a"></span>

## <span class="permalink">[◆ ](#ga67ddd1b7dcbbaff03e4a76c0ea67103a)</span>glfwGetKeyScancode()

<div class="memitem">

<div class="memproto">

|                        |     |      |       |     |     |
|------------------------|-----|------|-------|-----|-----|
| int glfwGetKeyScancode | (   | int  | *key* | )   |     |

</div>

<div class="memdoc">

この関数は、指定されたキーのプラットフォーム固有スキャンコードを返します。

指定された<a href="/docs/glfw/v3-5-1/ja/04-reference/09-keyboard-key-tokens/" class="el">キートークン</a>が現在のプラットフォームでサポートされていない物理キーに対応する場合、この関数は `-1` を返します。キートークン以外を指定して呼び出すと、`-1` を返し、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> エラーを発生させます。

引数  
|        |     |                                                          |
|--------|-----|----------------------------------------------------------|
| \[in\] | key | 任意の<a href="/docs/glfw/v3-5-1/ja/04-reference/09-keyboard-key-tokens/" class="el">キートークン</a>。 |

<!-- -->

戻り値  
キーのプラットフォーム固有スキャンコード。キーが現在のプラットフォームでサポートされていない場合、または<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `-1`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、任意のスレッドから呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_key" class="el">キー入力</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="gadd341da06bc8d418b4dc3a3518af9ad2"></span>

## <span class="permalink">[◆ ](#gadd341da06bc8d418b4dc3a3518af9ad2)</span>glfwGetKey()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetKey | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *key*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウへ最後に報告された、指定されたキーの状態を返します。返される状態は `GLFW_PRESS` または `GLFW_RELEASE` のいずれかです。`GLFW_REPEAT` アクションはキーコールバックだけに報告されます。

<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_STICKY_KEYS" class="el">GLFW_STICKY_KEYS</a> 入力モードが有効な場合、押されたキーについて最初にこの関数を呼び出すと、そのキーがすでに解放されていても `GLFW_PRESS` を返します。

キー関数は物理キーを扱い、<a href="/docs/glfw/v3-5-1/ja/04-reference/09-keyboard-key-tokens/" class="el">キートークン</a>は標準的な米国キーボードレイアウトでの用途に基づいて命名されています。テキストを入力する場合は、代わりに Unicode 文字コールバックを使用してください。

<a href="/docs/glfw/v3-5-1/ja/04-reference/10-modifier-key-flags/" class="el">修飾キーのビットマスク</a>はキートークンではなく、この関数では使用できません。

<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_char" class="el">テキスト入力</a>の実装に**この関数を使用しないでください**。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | 対象のウィンドウ。 |
| \[in\] | key | 対象の<a href="/docs/glfw/v3-5-1/ja/04-reference/09-keyboard-key-tokens/" class="el">キーボードキー</a>。`GLFW_KEY_UNKNOWN` はこの関数では有効なキーではありません。 |

<!-- -->

戻り値  
`GLFW_PRESS` または `GLFW_RELEASE` のいずれか。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_key" class="el">キー入力</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。**GLFW 3:** ウィンドウハンドルの引数が追加されました。

</div>

</div>

<span id="gac1473feacb5996c01a7a5a33b5066704"></span>

## <span class="permalink">[◆ ](#gac1473feacb5996c01a7a5a33b5066704)</span>glfwGetMouseButton()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetMouseButton | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *button*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウへ最後に報告された、指定されたマウスボタンの状態を返します。返される状態は `GLFW_PRESS` または `GLFW_RELEASE` のいずれかです。

<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_STICKY_MOUSE_BUTTONS" class="el">GLFW_STICKY_MOUSE_BUTTONS</a> 入力モードが有効な場合、押されたマウスボタンについて最初にこの関数を呼び出すと、そのボタンがすでに解放されていても `GLFW_PRESS` を返します。

<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_UNLIMITED_MOUSE_BUTTONS" class="el">GLFW_UNLIMITED_MOUSE_BUTTONS</a> 入力モードは、この関数でポーリングできるボタンの上限には影響しません。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | 対象のウィンドウ。 |
| \[in\] | button | 対象の<a href="/docs/glfw/v3-5-1/ja/04-reference/11-mouse-buttons/" class="el">マウスボタントークン</a>。 |

<!-- -->

戻り値  
`GLFW_PRESS` または `GLFW_RELEASE` のいずれか。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_mouse_button" class="el">マウスボタン入力</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。**GLFW 3:** ウィンドウハンドルの引数が追加されました。

</div>

</div>

<span id="ga01d37b6c40133676b9cea60ca1d7c0cc"></span>

## <span class="permalink">[◆ ](#ga01d37b6c40133676b9cea60ca1d7c0cc)</span>glfwGetCursorPos()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetCursorPos | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | double \*  | *xpos*, |
|  |  | double \*  | *ypos*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのコンテンツ領域の左上隅を基準としたカーソル位置をスクリーン座標で返します。

カーソルが（`GLFW_CURSOR_DISABLED` で）無効になっている場合、カーソル位置は制約されず、`double` の最小値と最大値によってのみ制限されます。

座標は `floor` 関数で対応する整数値へ変換できます。整数型への直接キャストは正の座標では機能しますが、負の座標では正しく機能しません。

位置を受け取る引数は、一部またはすべてを `NULL` にできます。エラーが発生した場合、`NULL` でない位置の引数はすべてゼロに設定されます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | 対象のウィンドウ。 |
| \[out\] | xpos | コンテンツ領域の左端を基準としたカーソルの X 座標を格納する場所、または `NULL`。 |
| \[out\] | ypos | コンテンツ領域の上端を基準としたカーソルの Y 座標を格納する場所、または `NULL`。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_pos" class="el">カーソル位置</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga04b03af936d906ca123c8f4ee08b39e7" class="el">glfwSetCursorPos</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。`glfwGetMousePos` を置き換えます。

</div>

</div>

<span id="ga04b03af936d906ca123c8f4ee08b39e7"></span>

## <span class="permalink">[◆ ](#ga04b03af936d906ca123c8f4ee08b39e7)</span>glfwSetCursorPos()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetCursorPos | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | double  | *xpos*, |
|  |  | double  | *ypos*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのコンテンツ領域の左上隅を基準としたカーソル位置をスクリーン座標で設定します。ウィンドウは入力フォーカスを持っていなければなりません。この関数の呼び出し時にウィンドウが入力フォーカスを持っていない場合、何も報告せず失敗します。

カメラ制御などの実装に**この関数を使用しないでください**。GLFW は、カーソルを非表示にし、透過的に中央へ戻し、制約のないカーソル移動を提供する `GLFW_CURSOR_DISABLED` カーソルモードをすでに備えています。詳しくは <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa92336e173da9c8834558b54ee80563b" class="el">glfwSetInputMode</a> を参照してください。

カーソルモードが `GLFW_CURSOR_DISABLED` の場合、カーソル位置は制約されず、`double` の最小値と最大値によってのみ制限されます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | 対象のウィンドウ。 |
| \[in\] | xpos | コンテンツ領域の左端を基準とした、要求する X 座標。 |
| \[in\] | ypos | コンテンツ領域の上端を基準とした、要求する Y 座標。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>、および <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>（備考を参照）があります。

<!-- -->

備考  
**Wayland:** この関数は、カーソルモードが `GLFW_CURSOR_DISABLED` の場合にのみ動作します。それ以外の場合は <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> を発生させます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_pos" class="el">カーソル位置</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga01d37b6c40133676b9cea60ca1d7c0cc" class="el">glfwGetCursorPos</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。`glfwSetMousePos` を置き換えます。

</div>

</div>

<span id="ga556f604f73af156c0db0e97c081373c3"></span>

## <span class="permalink">[◆ ](#ga556f604f73af156c0db0e97c081373c3)</span>glfwCreateCursor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> \* glfwCreateCursor | ( | const <a href="/docs/glfw/v3-5-1/ja/04-reference/20-glfwimage/" class="el">GLFWimage</a> \*  | *image*, |
|  |  | int  | *xhot*, |
|  |  | int  | *yhot*  |
|  | ) |  |  |

</div>

<div class="memdoc">

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad3b4f38c8d5dae036bc8fa959e18343e" class="el">glfwSetCursor</a> でウィンドウへ設定できる、新しいカスタムカーソル画像を作成します。カーソルは <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga81b952cd1764274d0db7fb3c5a79ba6a" class="el">glfwDestroyCursor</a> で破棄できます。残っているカーソルは <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a> によって破棄されます。

ピクセルは32ビット、リトルエンディアン、非乗算済み RGBA、つまり赤チャンネルを先頭とする各チャンネル8ビットです。左上隅から始まる、パックされた連続行として標準的に配置されます。

カーソルのホットスポットは、カーソル画像の左上隅を基準としてピクセル単位で指定します。GLFW の他のすべての座標系と同様に、X 軸は右向き、Y 軸は下向きです。

引数  
|        |       |                                                             |
|--------|-------|-------------------------------------------------------------|
| \[in\] | image | 要求するカーソル画像。                                   |
| \[in\] | xhot  | カーソルホットスポットに要求する X 座標（ピクセル）。 |
| \[in\] | yhot  | カーソルホットスポットに要求する Y 座標（ピクセル）。 |

<!-- -->

戻り値  
作成されたカーソルのハンドル。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>、および <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

ポインターの有効期間  
指定された画像データは、この関数が戻る前にコピーされます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_object" class="el">カーソルオブジェクト</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga81b952cd1764274d0db7fb3c5a79ba6a" class="el">glfwDestroyCursor</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf2fb2eb2c9dd842d1cef8a34e3c6403e" class="el">glfwCreateStandardCursor</a>

<!-- -->

導入バージョン  
バージョン 3.1 で追加されました。

</div>

</div>

<span id="gaf2fb2eb2c9dd842d1cef8a34e3c6403e"></span>

## <span class="permalink">[◆ ](#gaf2fb2eb2c9dd842d1cef8a34e3c6403e)</span>glfwCreateStandardCursor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> \* glfwCreateStandardCursor | ( | int  | *shape* | ) |  |

</div>

<div class="memdoc">

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad3b4f38c8d5dae036bc8fa959e18343e" class="el">glfwSetCursor</a> でウィンドウへ設定できる標準形状のカーソルを返します。これらのカーソル画像はシステムのカーソルテーマから取得されるため、正確な外観はプラットフォームによって異なります。

これらの形状の大部分は、サポートされるすべてのプラットフォームに存在することが保証されていますが、一部は存在しない場合があります。詳しくは次の表を参照してください。

| カーソル形状 | Windows | macOS | X11 | Wayland |
|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#ga8ab0e717245b85506cb0eaefdea39d0a" class="el">GLFW_ARROW_CURSOR</a> | あり | あり | あり | あり |
| <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#ga36185f4375eaada1b04e431244774c86" class="el">GLFW_IBEAM_CURSOR</a> | あり | あり | あり | あり |
| <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#ga8af88c0ea05ab9e8f9ac1530e8873c22" class="el">GLFW_CROSSHAIR_CURSOR</a> | あり | あり | あり | あり |
| <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#gaad01a50929fb515bf27e4462c51f6ed0" class="el">GLFW_POINTING_HAND_CURSOR</a> | あり | あり | あり | あり |
| <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#ga2010a43dc1050a7c9154148a63cf01ad" class="el">GLFW_RESIZE_EW_CURSOR</a> | あり | あり | あり | あり |
| <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#gaa59214e8cdc8c8adf08fdf125ed68388" class="el">GLFW_RESIZE_NS_CURSOR</a> | あり | あり | あり | あり |
| <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#gadf2c0a495ec9cef4e1a364cc99aa78da" class="el">GLFW_RESIZE_NWSE_CURSOR</a> | あり | あり<sup>1</sup> | 場合による<sup>2</sup> | 場合による<sup>2</sup> |
| <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#gab06bba3b407f92807ba9b48de667a323" class="el">GLFW_RESIZE_NESW_CURSOR</a> | あり | あり<sup>1</sup> | 場合による<sup>2</sup> | 場合による<sup>2</sup> |
| <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#ga3a5f4811155f95ccafbbb4c9a899fc1d" class="el">GLFW_RESIZE_ALL_CURSOR</a> | あり | あり | あり | あり |
| <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#ga297c503095b034bc8891393b637844b1" class="el">GLFW_NOT_ALLOWED_CURSOR</a> | あり | あり | 場合による<sup>2</sup> | 場合による<sup>2</sup> |

1\) 非公開のシステム API を使用しているため、将来動作しなくなる可能性があります。

2\) 一部のカーソルテーマがサポートしていない新しい標準を使用しています。

要求された形状が利用できない場合、この関数は <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga09d6943923a70ddef3a085f5baee786c" class="el">GLFW_CURSOR_UNAVAILABLE</a> エラーを発生させ、`NULL` を返します。

引数  
|  |  |  |
|----|----|----|
| \[in\] | shape | <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/" class="el">標準形状</a>のいずれか。 |

<!-- -->

戻り値  
使用可能な新しいカーソル。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga09d6943923a70ddef3a085f5baee786c" class="el">GLFW_CURSOR_UNAVAILABLE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_standard" class="el">標準カーソルの作成</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga556f604f73af156c0db0e97c081373c3" class="el">glfwCreateCursor</a>

<!-- -->

導入バージョン  
バージョン 3.1 で追加されました。

</div>

</div>

<span id="ga81b952cd1764274d0db7fb3c5a79ba6a"></span>

## <span class="permalink">[◆ ](#ga81b952cd1764274d0db7fb3c5a79ba6a)</span>glfwDestroyCursor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwDestroyCursor | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> \*  | *cursor* | ) |  |

</div>

<div class="memdoc">

この関数は、以前 <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga556f604f73af156c0db0e97c081373c3" class="el">glfwCreateCursor</a> で作成したカーソルを破棄します。残っているカーソルは <a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a> によって破棄されます。

指定されたカーソルがいずれかのウィンドウで現在使用されている場合、そのウィンドウは既定のカーソルへ戻されます。これはカーソルモードには影響しません。

引数  
|        |        |                               |
|--------|--------|-------------------------------|
| \[in\] | cursor | 破棄するカーソルオブジェクト。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

再入可能性  
この関数は、コールバックから呼び出してはなりません。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_object" class="el">カーソルオブジェクト</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga556f604f73af156c0db0e97c081373c3" class="el">glfwCreateCursor</a>

<!-- -->

導入バージョン  
バージョン 3.1 で追加されました。

</div>

</div>

<span id="gad3b4f38c8d5dae036bc8fa959e18343e"></span>

## <span class="permalink">[◆ ](#gad3b4f38c8d5dae036bc8fa959e18343e)</span>glfwSetCursor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetCursor | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> \*  | *cursor*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、カーソルが指定されたウィンドウのコンテンツ領域上にあるときに使用するカーソル画像を設定します。設定したカーソルは、ウィンドウの<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_mode" class="el">カーソルモード</a>が `GLFW_CURSOR_NORMAL` の場合にのみ表示されます。

一部のプラットフォームでは、ウィンドウが入力フォーカスも持っていなければ、設定したカーソルが表示されないことがあります。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | カーソルを設定するウィンドウ。 |
| \[in\] | cursor | 設定するカーソル。既定の矢印カーソルへ戻す場合は `NULL`。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_object" class="el">カーソルオブジェクト</a>

<!-- -->

導入バージョン  
バージョン 3.1 で追加されました。

</div>

</div>

<span id="ga1caf18159767e761185e49a3be019f8d"></span>

## <span class="permalink">[◆ ](#ga1caf18159767e761185e49a3be019f8d)</span>glfwSetKeyCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga5bd751b27b90f865d2ea613533f0453c" class="el">GLFWkeyfun</a> glfwSetKeyCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga5bd751b27b90f865d2ea613533f0453c" class="el">GLFWkeyfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのキーコールバックを設定します。このコールバックは、キーが押されたとき、リピートしたとき、または解放されたときに呼び出されます。

キー関数は物理キーを扱い、レイアウトに依存しない<a href="/docs/glfw/v3-5-1/ja/04-reference/09-keyboard-key-tokens/" class="el">キートークン</a>は標準的な米国キーボードレイアウトでの値に基づいて命名されています。テキストを入力する場合は、代わりに<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gab25c4a220fd8f5717718dbc487828996" class="el">文字コールバック</a>を使用してください。

ウィンドウが入力フォーカスを失うと、関連するキートークンを持つ押下中のすべてのキーについて、合成されたキー解放イベントが生成されます。合成イベントはフォーカス喪失イベントの処理後、つまり<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gac2d83c4a10f071baf841f6730528e66c" class="el">ウィンドウフォーカスコールバック</a>の呼び出し後に生成されるため、ユーザー生成イベントと区別できます。

キーのスキャンコードは、そのプラットフォーム、場合によってはそのマシンに固有です。スキャンコードは、GLFW キートークンのないキーをユーザーが割り当てられるようにするためのものです。このようなキーでは `key` が `GLFW_KEY_UNKNOWN` に設定され、状態は保存されないため、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gadd341da06bc8d418b4dc3a3518af9ad2" class="el">glfwGetKey</a> では照会できません。

GLFW が合成キーイベントを生成する必要がある場合があり、そのときスキャンコードはゼロになることがあります。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | コールバックを設定するウィンドウ。 |
| \[in\] | callback | 新しいキーコールバック。現在設定されているコールバックを削除する場合は `NULL`。 |

<!-- -->

戻り値  
以前に設定されていたコールバック。コールバックが設定されていなかった場合、またはライブラリが<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化</a>されていなかった場合は `NULL`。

<!-- -->

コールバックのシグネチャ  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> key, <span class="keywordtype">int</span> scancode, <span class="keywordtype">int</span> action, <span class="keywordtype">int</span> mods)

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga5bd751b27b90f865d2ea613533f0453c" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_key" class="el">キー入力</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。**GLFW 3:** ウィンドウハンドルの引数と戻り値が追加されました。

</div>

</div>

<span id="gab25c4a220fd8f5717718dbc487828996"></span>

## <span class="permalink">[◆ ](#gab25c4a220fd8f5717718dbc487828996)</span>glfwSetCharCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga1ab90a55cf3f58639b893c0f4118cb6e" class="el">GLFWcharfun</a> glfwSetCharCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga1ab90a55cf3f58639b893c0f4118cb6e" class="el">GLFWcharfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウの文字コールバックを設定します。このコールバックは、Unicode 文字が入力されたときに呼び出されます。

文字コールバックは Unicode テキスト入力を目的とします。文字を扱うためキーボードレイアウトに依存しますが、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga1caf18159767e761185e49a3be019f8d" class="el">キーコールバック</a>は依存しません。1つのキーがゼロ個、1個、または複数の文字を生成することがあるため、文字と物理キーは1対1に対応しません。特定の物理キーが押されたか、または解放されたかを知るには、代わりにキーコールバックを参照してください。

文字コールバックは通常のシステムテキスト入力と同様に動作し、macOS の Super（Command）キーや Windows の Alt キーなど、そのプラットフォームで通常のテキスト入力を妨げる修飾キーが押されている場合は呼び出されません。

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

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">unsigned</span> <span class="keywordtype">int</span> codepoint)

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga1ab90a55cf3f58639b893c0f4118cb6e" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_char" class="el">テキスト入力</a>

<!-- -->

導入バージョン  
バージョン 2.4 で追加されました。**GLFW 3:** ウィンドウハンドルの引数と戻り値が追加されました。

</div>

</div>

<span id="ga0b7f4ad13c2b17435ff13b6dcfb4e43c"></span>

## <span class="permalink">[◆ ](#ga0b7f4ad13c2b17435ff13b6dcfb4e43c)</span>glfwSetCharModsCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac3cf64f90b6219c05ac7b7822d5a4b8f" class="el">GLFWcharmodsfun</a> glfwSetCharModsCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac3cf64f90b6219c05ac7b7822d5a4b8f" class="el">GLFWcharmodsfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウの修飾キー付き文字コールバックを設定します。このコールバックは、使用されている修飾キーにかかわらず Unicode 文字が入力されたときに呼び出されます。

修飾キー付き文字コールバックは、独自の Unicode 文字入力を実装するためのものです。通常の Unicode テキスト入力については、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gab25c4a220fd8f5717718dbc487828996" class="el">文字コールバック</a>を参照してください。文字コールバックと同様に、修飾キー付き文字コールバックは文字を扱い、キーボードレイアウトに依存します。1 つのキーから生成される文字は 0 個、1 個、または複数個の場合があるため、文字と物理キーは 1 対 1 には対応しません。特定の物理キーが押されたか離されたかを知りたい場合は、代わりに<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga1caf18159767e761185e49a3be019f8d" class="el">キーコールバック</a>を参照してください。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | コールバックを設定するウィンドウ。 |
| \[in\] | callback | 新しいコールバック。現在設定されているコールバックを削除する場合は `NULL`。 |

<!-- -->

戻り値  
以前に設定されていたコールバック。コールバックが設定されていなかった場合、または<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

コールバックのシグネチャ  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">unsigned</span> <span class="keywordtype">int</span> codepoint, <span class="keywordtype">int</span> mods)

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac3cf64f90b6219c05ac7b7822d5a4b8f" class="el">関数ポインター型</a>を参照してください。

<!-- -->

**<a href="/docs/glfw/v3-5-1/ja/04-reference/22-deprecated-list/#_deprecated000002" class="el">非推奨:</a>**  
バージョン 4.0 で削除される予定です。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_char" class="el">テキスト入力</a>

<!-- -->

導入バージョン  
バージョン 3.1 で追加されました。

</div>

</div>

<span id="ga6ab84420974d812bee700e45284a723c"></span>

## <span class="permalink">[◆ ](#ga6ab84420974d812bee700e45284a723c)</span>glfwSetMouseButtonCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga0184dcb59f6d85d735503dcaae809727" class="el">GLFWmousebuttonfun</a> glfwSetMouseButtonCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga0184dcb59f6d85d735503dcaae809727" class="el">GLFWmousebuttonfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのマウスボタンコールバックを設定します。このコールバックは、マウスボタンが押されたとき、または離されたときに呼び出されます。

ウィンドウが入力フォーカスを失うと、対応するボタントークンを持つ押下中のすべてのマウスボタンについて、合成されたボタン解放イベントが生成されます。この合成イベントは、フォーカス喪失イベントが処理された後、つまり<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gac2d83c4a10f071baf841f6730528e66c" class="el">ウィンドウフォーカスコールバック</a>が呼び出された後に生成されるため、ユーザーが生成したイベントと区別できます。

ボタンに対応する<a href="/docs/glfw/v3-5-1/ja/04-reference/11-mouse-buttons/" class="el">ボタントークン</a>がなく、<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_UNLIMITED_MOUSE_BUTTONS" class="el">GLFW_UNLIMITED_MOUSE_BUTTONS</a> 入力モードが設定されている場合、通知される `button` の値は `GLFW_MOUSE_BUTTON_LAST` より大きくなることがあります。

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

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> button, <span class="keywordtype">int</span> action, <span class="keywordtype">int</span> mods)

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga0184dcb59f6d85d735503dcaae809727" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_mouse_button" class="el">マウスボタン入力</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。**GLFW 3:** ウィンドウハンドルの引数と戻り値が追加されました。

</div>

</div>

<span id="gac1f879ab7435d54d4d79bb469fe225d7"></span>

## <span class="permalink">[◆ ](#gac1f879ab7435d54d4d79bb469fe225d7)</span>glfwSetCursorPosCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad6fae41b3ac2e4209aaa87b596c57f68" class="el">GLFWcursorposfun</a> glfwSetCursorPosCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad6fae41b3ac2e4209aaa87b596c57f68" class="el">GLFWcursorposfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのカーソル位置コールバックを設定します。このコールバックは、カーソルが移動したときに呼び出されます。コールバックには、ウィンドウのコンテンツ領域の左上隅を基準としたスクリーン座標での位置が渡されます。

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

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">double</span> xpos, <span class="keywordtype">double</span> ypos);

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad6fae41b3ac2e4209aaa87b596c57f68" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_pos" class="el">カーソル位置</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。`glfwSetMousePosCallback` を置き換えます。

</div>

</div>

<span id="gad27f8ad0142c038a281466c0966817d8"></span>

## <span class="permalink">[◆ ](#gad27f8ad0142c038a281466c0966817d8)</span>glfwSetCursorEnterCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa93dc4818ac9ab32532909d53a337cbe" class="el">GLFWcursorenterfun</a> glfwSetCursorEnterCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa93dc4818ac9ab32532909d53a337cbe" class="el">GLFWcursorenterfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのカーソル境界通過コールバックを設定します。このコールバックは、カーソルがウィンドウのコンテンツ領域に入ったとき、またはそこから出たときに呼び出されます。

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

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> entered)

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa93dc4818ac9ab32532909d53a337cbe" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_enter" class="el">カーソルの進入・退出イベント</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga571e45a030ae4061f746ed56cb76aede"></span>

## <span class="permalink">[◆ ](#ga571e45a030ae4061f746ed56cb76aede)</span>glfwSetScrollCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf656112c33de3efdb227fa58f0134cf5" class="el">GLFWscrollfun</a> glfwSetScrollCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf656112c33de3efdb227fa58f0134cf5" class="el">GLFWscrollfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのスクロールコールバックを設定します。このコールバックは、マウスホイールやタッチパッドのスクロール領域など、スクロール装置が使用されたときに呼び出されます。

スクロールコールバックは、マウスホイールやタッチパッドのスクロール領域などからの、すべてのスクロール入力を受け取ります。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | コールバックを設定するウィンドウ。 |
| \[in\] | callback | 新しいスクロールコールバック。現在設定されているコールバックを削除する場合は `NULL`。 |

<!-- -->

戻り値  
以前に設定されていたコールバック。コールバックが設定されていなかった場合、またはライブラリが<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化</a>されていなかった場合は `NULL`。

<!-- -->

コールバックのシグネチャ  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">double</span> xoffset, <span class="keywordtype">double</span> yoffset)

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf656112c33de3efdb227fa58f0134cf5" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#scrolling" class="el">スクロール入力</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。`glfwSetMouseWheelCallback` を置き換えます。

</div>

</div>

<span id="gab773f0ee0a07cff77a210cea40bc1f6b"></span>

## <span class="permalink">[◆ ](#gab773f0ee0a07cff77a210cea40bc1f6b)</span>glfwSetDropCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaaba73c3274062c18723b7f05862d94b2" class="el">GLFWdropfun</a> glfwSetDropCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaaba73c3274062c18723b7f05862d94b2" class="el">GLFWdropfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウのパスドロップコールバックを設定します。このコールバックは、ドラッグされた 1 つ以上のパスがウィンドウ上にドロップされたときに呼び出されます。

パス配列とその文字列は、そのイベント専用に生成されている可能性があるため、コールバックから戻った後も有効であるとは保証されません。コールバックから戻った後に使用する場合は、ディープコピーを作成する必要があります。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | コールバックを設定するウィンドウ。 |
| \[in\] | callback | 新しいファイルドロップコールバック。現在設定されているコールバックを削除する場合は `NULL`。 |

<!-- -->

戻り値  
以前に設定されていたコールバック。コールバックが設定されていなかった場合、またはライブラリが<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化</a>されていなかった場合は `NULL`。

<!-- -->

コールバックのシグネチャ  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> path_count, <span class="keyword">const</span> <span class="keywordtype">char</span>\* paths\[\])

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaaba73c3274062c18723b7f05862d94b2" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#path_drop" class="el">パスのドロップ入力</a>

<!-- -->

導入バージョン  
バージョン 3.1 で追加されました。

</div>

</div>

<span id="gaed0966cee139d815317f9ffcba64c9f1"></span>

## <span class="permalink">[◆ ](#gaed0966cee139d815317f9ffcba64c9f1)</span>glfwJoystickPresent()

<div class="memitem">

<div class="memproto">

|                         |     |      |       |     |     |
|-------------------------|-----|------|-------|-----|-----|
| int glfwJoystickPresent | (   | int  | *jid* | )   |     |

</div>

<div class="memdoc">

この関数は、指定されたジョイスティックが存在するかどうかを返します。

ジョイスティック ID を受け取るほかの関数は、いずれも処理を行う前にジョイスティックの存在を確認するため、それらの関数より先にこの関数を呼び出す必要はありません。

引数  
|  |  |  |
|----|----|----|
| \[in\] | jid | 問い合わせる<a href="/docs/glfw/v3-5-1/ja/04-reference/12-joysticks/" class="el">ジョイスティック</a>。 |

<!-- -->

戻り値  
ジョイスティックが存在する場合は `GLFW_TRUE`、それ以外の場合は `GLFW_FALSE`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#joystick" class="el">ジョイスティック入力</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。`glfwGetJoystickParam` を置き換えます。

</div>

</div>

<span id="gaeb1c0191d3140a233a682987c61eb408"></span>

## <span class="permalink">[◆ ](#gaeb1c0191d3140a233a682987c61eb408)</span>glfwGetJoystickAxes()

<div class="memitem">

<div class="memproto">

|                                    |     |         |          |
|------------------------------------|-----|---------|----------|
| const float \* glfwGetJoystickAxes | (   | int     | *jid*,   |
|                                    |     | int \*  | *count*  |
|                                    | )   |         |          |

</div>

<div class="memdoc">

この関数は、指定されたジョイスティックの全軸の値を返します。配列の各要素は -1.0 以上 1.0 以下の値です。

指定されたジョイスティックが存在しない場合、この関数は `NULL` を返しますが、エラーは生成しません。このため、先に <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a> を呼び出す代わりに使用できます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | jid | 問い合わせる<a href="/docs/glfw/v3-5-1/ja/04-reference/12-joysticks/" class="el">ジョイスティック</a>。 |
| \[out\] | count | 戻り値の配列に含まれる軸の値の数を格納する場所。ジョイスティックが存在しない場合、またはエラーが発生した場合は 0 に設定されます。 |

<!-- -->

戻り値  
軸の値の配列。ジョイスティックが存在しない場合、または<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

ポインターの有効期間  
戻り値の配列は GLFW によって確保および解放されます。自分で解放してはいけません。指定されたジョイスティックが切断されるか、ライブラリが終了するまで有効です。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#joystick_axis" class="el">ジョイスティックの軸状態</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。`glfwGetJoystickPos` を置き換えます。

</div>

</div>

<span id="ga5ffe34739d3dc97efe432ed2d81d9938"></span>

## <span class="permalink">[◆ ](#ga5ffe34739d3dc97efe432ed2d81d9938)</span>glfwGetJoystickButtons()

<div class="memitem">

<div class="memproto">

|                                               |     |         |          |
|-----------------------------------------------|-----|---------|----------|
| const unsigned char \* glfwGetJoystickButtons | (   | int     | *jid*,   |
|                                               |     | int \*  | *count*  |
|                                               | )   |         |          |

</div>

<div class="memdoc">

この関数は、指定されたジョイスティックの全ボタンの状態を返します。配列の各要素は `GLFW_PRESS` または `GLFW_RELEASE` のいずれかです。

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga06e660841b3e79c54da4f54a932c5a2c" class="el">glfwGetJoystickHats</a> がなかった以前のバージョンとの後方互換性のため、ボタン配列には、各ハットを 4 つのボタンとして表現した全ハットも含まれます。ハットの順序は **glfwGetJoystickHats** が返す順序と同じで、各ハットは*上*、*右*、*下*、*左*の順です。この追加ボタンを無効にするには、初期化前に <a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#GLFW_JOYSTICK_HAT_BUTTONS" class="el">GLFW_JOYSTICK_HAT_BUTTONS</a> 初期化ヒントを設定します。

指定されたジョイスティックが存在しない場合、この関数は `NULL` を返しますが、エラーは生成しません。このため、先に <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a> を呼び出す代わりに使用できます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | jid | 問い合わせる<a href="/docs/glfw/v3-5-1/ja/04-reference/12-joysticks/" class="el">ジョイスティック</a>。 |
| \[out\] | count | 戻り値の配列に含まれるボタン状態の数を格納する場所。ジョイスティックが存在しない場合、またはエラーが発生した場合は 0 に設定されます。 |

<!-- -->

戻り値  
ボタン状態の配列。ジョイスティックが存在しない場合、または<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

ポインターの有効期間  
戻り値の配列は GLFW によって確保および解放されます。自分で解放してはいけません。指定されたジョイスティックが切断されるか、ライブラリが終了するまで有効です。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#joystick_button" class="el">ジョイスティックのボタン状態</a>

<!-- -->

導入バージョン  
バージョン 2.2 で追加されました。**GLFW 3:** 動的配列を返すように変更されました。

</div>

</div>

<span id="ga06e660841b3e79c54da4f54a932c5a2c"></span>

## <span class="permalink">[◆ ](#ga06e660841b3e79c54da4f54a932c5a2c)</span>glfwGetJoystickHats()

<div class="memitem">

<div class="memproto">

|                                            |     |         |          |
|--------------------------------------------|-----|---------|----------|
| const unsigned char \* glfwGetJoystickHats | (   | int     | *jid*,   |
|                                            |     | int \*  | *count*  |
|                                            | )   |         |          |

</div>

<div class="memdoc">

この関数は、指定されたジョイスティックの全ハットの状態を返します。配列の各要素は次のいずれかの値です。

| 名前                  | 値                                  |
|-----------------------|-------------------------------------|
| `GLFW_HAT_CENTERED`   | 0                                   |
| `GLFW_HAT_UP`         | 1                                   |
| `GLFW_HAT_RIGHT`      | 2                                   |
| `GLFW_HAT_DOWN`       | 4                                   |
| `GLFW_HAT_LEFT`       | 8                                   |
| `GLFW_HAT_RIGHT_UP`   | `GLFW_HAT_RIGHT` \| `GLFW_HAT_UP`   |
| `GLFW_HAT_RIGHT_DOWN` | `GLFW_HAT_RIGHT` \| `GLFW_HAT_DOWN` |
| `GLFW_HAT_LEFT_UP`    | `GLFW_HAT_LEFT` \| `GLFW_HAT_UP`    |
| `GLFW_HAT_LEFT_DOWN`  | `GLFW_HAT_LEFT` \| `GLFW_HAT_DOWN`  |

斜め方向は、基本方向（上、右、下、左）のビット単位の組み合わせです。対応する方向との AND を取ることで、各方向を個別に検査できます。

<div class="fragment">

<div class="line">

<span class="keywordflow">if</span> (hats\[2\] & <a href="/docs/glfw/v3-5-1/ja/04-reference/13-joystick-hat-states/#ga252586e3bbde75f4b0e07ad3124867f5" class="code hl_define">GLFW_HAT_RIGHT</a>)

</div>

<div class="line">

{

</div>

<div class="line">

<span class="comment">// ハット 2 の状態は右上、右、右下のいずれか</span>

</div>

<div class="line">

}

</div>

<div id="agroup__hat__state_html_ga252586e3bbde75f4b0e07ad3124867f5" class="ttc">

<div class="ttname">

[GLFW_HAT_RIGHT](/docs/glfw/v3-5-1/ja/04-reference/13-joystick-hat-states/#ga252586e3bbde75f4b0e07ad3124867f5)

</div>

<div class="ttdeci">

\#define GLFW_HAT_RIGHT

</div>

<div class="ttdef">

**定義** glfw3.h:357

</div>

</div>

</div>

指定されたジョイスティックが存在しない場合、この関数は `NULL` を返しますが、エラーは生成しません。このため、先に <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a> を呼び出す代わりに使用できます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | jid | 問い合わせる<a href="/docs/glfw/v3-5-1/ja/04-reference/12-joysticks/" class="el">ジョイスティック</a>。 |
| \[out\] | count | 戻り値の配列に含まれるハット状態の数を格納する場所。ジョイスティックが存在しない場合、またはエラーが発生した場合は 0 に設定されます。 |

<!-- -->

戻り値  
ハット状態の配列。ジョイスティックが存在しない場合、または<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

ポインターの有効期間  
戻り値の配列は GLFW によって確保および解放されます。自分で解放してはいけません。指定されたジョイスティックが切断されるか、そのジョイスティックに対してこの関数が再び呼び出されるか、ライブラリが終了するまで有効です。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#joystick_hat" class="el">ジョイスティックのハット状態</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="gac6a8e769e18e0bcfa9097793fc2c3978"></span>

## <span class="permalink">[◆ ](#gac6a8e769e18e0bcfa9097793fc2c3978)</span>glfwGetJoystickName()

<div class="memitem">

<div class="memproto">

|                                   |     |      |       |     |     |
|-----------------------------------|-----|------|-------|-----|-----|
| const char \* glfwGetJoystickName | (   | int  | *jid* | )   |     |

</div>

<div class="memdoc">

この関数は、指定されたジョイスティックの名前を UTF-8 エンコードで返します。戻り値の文字列は GLFW によって確保および解放されます。自分で解放してはいけません。

指定されたジョイスティックが存在しない場合、この関数は `NULL` を返しますが、エラーは生成しません。このため、先に <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a> を呼び出す代わりに使用できます。

引数  
|  |  |  |
|----|----|----|
| \[in\] | jid | 問い合わせる<a href="/docs/glfw/v3-5-1/ja/04-reference/12-joysticks/" class="el">ジョイスティック</a>。 |

<!-- -->

戻り値  
UTF-8 エンコードされたジョイスティック名。ジョイスティックが存在しない場合、または<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

ポインターの有効期間  
戻り値の文字列は GLFW によって確保および解放されます。自分で解放してはいけません。指定されたジョイスティックが切断されるか、ライブラリが終了するまで有効です。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#joystick_name" class="el">ジョイスティック名</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga6659411aec3c7fcef27780e2cb2d9600"></span>

## <span class="permalink">[◆ ](#ga6659411aec3c7fcef27780e2cb2d9600)</span>glfwGetJoystickGUID()

<div class="memitem">

<div class="memproto">

|                                   |     |      |       |     |     |
|-----------------------------------|-----|------|-------|-----|-----|
| const char \* glfwGetJoystickGUID | (   | int  | *jid* | )   |     |

</div>

<div class="memdoc">

この関数は、指定されたジョイスティックの SDL 互換 GUID を、UTF-8 エンコードされた 16 進文字列として返します。戻り値の文字列は GLFW によって確保および解放されます。自分で解放してはいけません。

GUID は、ジョイスティックをゲームパッドマッピングに関連付けるものです。接続されたジョイスティックには、ゲームパッドマッピングが割り当てられていなくても常に GUID があります。

指定されたジョイスティックが存在しない場合、この関数は `NULL` を返しますが、エラーは生成しません。このため、先に <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a> を呼び出す代わりに使用できます。

GUID は SDL 2.0.5 で導入された形式を使用します。この GUID はジョイスティックのメーカーとモデルを一意に識別しようとしますが、個々の製品個体までは識別しません。たとえば、そのプラットフォーム上では、すべての有線 Xbox 360 コントローラーが同じ GUID を持ちます。プラットフォーム固有 API が提供するハードウェア情報に応じて、同じ個体でもプラットフォーム間で GUID が異なる場合があります。

引数  
|  |  |  |
|----|----|----|
| \[in\] | jid | 問い合わせる<a href="/docs/glfw/v3-5-1/ja/04-reference/12-joysticks/" class="el">ジョイスティック</a>。 |

<!-- -->

戻り値  
UTF-8 エンコードされたジョイスティックの GUID。ジョイスティックが存在しない場合、または<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

ポインターの有効期間  
戻り値の文字列は GLFW によって確保および解放されます。自分で解放してはいけません。指定されたジョイスティックが切断されるか、ライブラリが終了するまで有効です。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#gamepad" class="el">ゲームパッド入力</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="ga6b2f72d64d636b48a727b437cbb7489e"></span>

## <span class="permalink">[◆ ](#ga6b2f72d64d636b48a727b437cbb7489e)</span>glfwSetJoystickUserPointer()

<div class="memitem">

<div class="memproto">

|                                 |     |          |            |
|---------------------------------|-----|----------|------------|
| void glfwSetJoystickUserPointer | (   | int      | *jid*,     |
|                                 |     | void \*  | *pointer*  |
|                                 | )   |          |            |

</div>

<div class="memdoc">

この関数は、指定されたジョイスティックのユーザー定義ポインターを設定します。現在の値は、ジョイスティックが切断されるまで保持されます。初期値は `NULL` です。

この関数は、切断処理中のジョイスティックに対しても、ジョイスティックコールバックから呼び出せます。

引数  
|        |         |                                    |
|--------|---------|------------------------------------|
| \[in\] | jid     | ポインターを設定するジョイスティック。 |
| \[in\] | pointer | 新しい値。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#joystick_userptr" class="el">ジョイスティックのユーザーポインター</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga18cefd7265d1fa04f3fd38a6746db5f3" class="el">glfwGetJoystickUserPointer</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="ga18cefd7265d1fa04f3fd38a6746db5f3"></span>

## <span class="permalink">[◆ ](#ga18cefd7265d1fa04f3fd38a6746db5f3)</span>glfwGetJoystickUserPointer()

<div class="memitem">

<div class="memproto">

|                                    |     |      |       |     |     |
|------------------------------------|-----|------|-------|-----|-----|
| void \* glfwGetJoystickUserPointer | (   | int  | *jid* | )   |     |

</div>

<div class="memdoc">

この関数は、指定されたジョイスティックのユーザー定義ポインターの現在値を返します。初期値は `NULL` です。

この関数は、切断処理中のジョイスティックに対しても、ジョイスティックコールバックから呼び出せます。

引数  
|        |     |                                       |
|--------|-----|---------------------------------------|
| \[in\] | jid | ポインターを返すジョイスティック。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。アクセスは同期されません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#joystick_userptr" class="el">ジョイスティックのユーザーポインター</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga6b2f72d64d636b48a727b437cbb7489e" class="el">glfwSetJoystickUserPointer</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="gad0f676860f329d80f7e47e9f06a96f00"></span>

## <span class="permalink">[◆ ](#gad0f676860f329d80f7e47e9f06a96f00)</span>glfwJoystickIsGamepad()

<div class="memitem">

<div class="memproto">

|                           |     |      |       |     |     |
|---------------------------|-----|------|-------|-----|-----|
| int glfwJoystickIsGamepad | (   | int  | *jid* | )   |     |

</div>

<div class="memdoc">

この関数は、指定されたジョイスティックが存在し、かつゲームパッドマッピングを持つかどうかを返します。

指定されたジョイスティックが存在していてもゲームパッドマッピングを持たない場合、この関数は `GLFW_FALSE` を返しますが、エラーは生成しません。マッピングの有無にかかわらずジョイスティックが存在するかを確認するには、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a> を呼び出してください。

引数  
|  |  |  |
|----|----|----|
| \[in\] | jid | 問い合わせる<a href="/docs/glfw/v3-5-1/ja/04-reference/12-joysticks/" class="el">ジョイスティック</a>。 |

<!-- -->

戻り値  
ジョイスティックが存在し、かつゲームパッドマッピングを持つ場合は `GLFW_TRUE`、それ以外の場合は `GLFW_FALSE`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#gamepad" class="el">ゲームパッド入力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gadccddea8bce6113fa459de379ddaf051" class="el">glfwGetGamepadState</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c"></span>

## <span class="permalink">[◆ ](#ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c)</span>glfwSetJoystickCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa21ad5986ae9a26077a40142efb56243" class="el">GLFWjoystickfun</a> glfwSetJoystickCallback | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa21ad5986ae9a26077a40142efb56243" class="el">GLFWjoystickfun</a>  | *callback* | ) |  |

</div>

<div class="memdoc">

この関数は、ジョイスティック構成コールバックを設定するか、現在設定されているコールバックを削除します。このコールバックは、ジョイスティックがシステムに接続されたとき、またはシステムから切断されたときに呼び出されます。

すべてのプラットフォームでジョイスティックの接続・切断イベントを受け取るには、いずれかの<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#events" class="el">イベント処理</a>関数を呼び出す必要があります。ジョイスティック関数によって切断が検出され、コールバックが呼び出される場合もあります。その場合、その関数はジョイスティックが存在しないときの戻り値を返します。

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

<span class="keywordtype">void</span> function_name(<span class="keywordtype">int</span> jid, <span class="keywordtype">int</span> event)

</div>

</div>

コールバックの引数について詳しくは、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa21ad5986ae9a26077a40142efb56243" class="el">関数ポインター型</a>を参照してください。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#joystick_event" class="el">ジョイスティック構成の変更</a>

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

</div>

</div>

<span id="gaed5104612f2fa8e66aa6e846652ad00f"></span>

## <span class="permalink">[◆ ](#gaed5104612f2fa8e66aa6e846652ad00f)</span>glfwUpdateGamepadMappings()

<div class="memitem">

<div class="memproto">

|                               |     |                |          |     |     |
|-------------------------------|-----|----------------|----------|-----|-----|
| int glfwUpdateGamepadMappings | (   | const char \*  | *string* | )   |     |

</div>

<div class="memdoc">

この関数は、指定された ASCII エンコード文字列を解析し、見つかったゲームパッドマッピングで内部リストを更新します。この文字列には、単一のゲームパッドマッピング、または改行で区切られた複数のマッピングを含められます。パーサーは、空行やコメントを含む `gamecontrollerdb.txt` ソースファイルの完全な形式をサポートします。

形式の説明については、<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#gamepad_mapping" class="el">ゲームパッドマッピング</a>を参照してください。

指定された GUID のゲームパッドマッピングが内部リストにすでに存在する場合、この関数に渡されたマッピングで置き換えられます。ライブラリを終了して再初期化すると、内部リストは組み込みのデフォルトに戻ります。

引数  
|        |        |                                             |
|--------|--------|---------------------------------------------|
| \[in\] | string | ゲームパッドマッピングを含む文字列。 |

<!-- -->

戻り値  
成功した場合は `GLFW_TRUE`、<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `GLFW_FALSE`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#gamepad" class="el">ゲームパッド入力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad0f676860f329d80f7e47e9f06a96f00" class="el">glfwJoystickIsGamepad</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga8aea73a1a25cc6c0486a617019f56728" class="el">glfwGetGamepadName</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="ga8aea73a1a25cc6c0486a617019f56728"></span>

## <span class="permalink">[◆ ](#ga8aea73a1a25cc6c0486a617019f56728)</span>glfwGetGamepadName()

<div class="memitem">

<div class="memproto">

|                                  |     |      |       |     |     |
|----------------------------------|-----|------|-------|-----|-----|
| const char \* glfwGetGamepadName | (   | int  | *jid* | )   |     |

</div>

<div class="memdoc">

この関数は、指定されたジョイスティックに割り当てられたゲームパッドマッピングから、人が読めるゲームパッド名を返します。

指定されたジョイスティックが存在しないか、ゲームパッドマッピングを持たない場合、この関数は `NULL` を返しますが、エラーは生成しません。マッピングの有無にかかわらず存在を確認するには、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a> を呼び出してください。

引数  
|  |  |  |
|----|----|----|
| \[in\] | jid | 問い合わせる<a href="/docs/glfw/v3-5-1/ja/04-reference/12-joysticks/" class="el">ジョイスティック</a>。 |

<!-- -->

戻り値  
UTF-8 エンコードされたゲームパッド名。ジョイスティックが存在しない場合、マッピングを持たない場合、または<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> があります。

<!-- -->

ポインターの有効期間  
戻り値の文字列は GLFW によって確保および解放されます。自分で解放してはいけません。指定されたジョイスティックが切断されるか、ゲームパッドマッピングが更新されるか、ライブラリが終了するまで有効です。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#gamepad" class="el">ゲームパッド入力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad0f676860f329d80f7e47e9f06a96f00" class="el">glfwJoystickIsGamepad</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="gadccddea8bce6113fa459de379ddaf051"></span>

## <span class="permalink">[◆ ](#gadccddea8bce6113fa459de379ddaf051)</span>glfwGetGamepadState()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetGamepadState | ( | int  | *jid*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/18-glfwgamepadstate/" class="el">GLFWgamepadstate</a> \*  | *state*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたジョイスティックを Xbox 風ゲームパッドに再マッピングした状態を取得します。

指定されたジョイスティックが存在しないか、ゲームパッドマッピングを持たない場合、この関数は `GLFW_FALSE` を返しますが、エラーは生成しません。マッピングの有無にかかわらず存在を確認するには、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a> を呼び出してください。

ガイドボタンはシステムや Steam クライアントによってフックされることが多いため、入力に使用できない場合があります。

すべてのデバイスが <a href="/docs/glfw/v3-5-1/ja/04-reference/18-glfwgamepadstate/" class="el">GLFWgamepadstate</a> の提供する全ボタンおよび全軸を備えているわけではありません。使用できないボタンと軸は、それぞれ常に `GLFW_RELEASE` と 0.0 を通知します。

引数  
|  |  |  |
|----|----|----|
| \[in\] | jid | 問い合わせる<a href="/docs/glfw/v3-5-1/ja/04-reference/12-joysticks/" class="el">ジョイスティック</a>。 |
| \[out\] | state | ジョイスティックのゲームパッド入力状態。 |

<!-- -->

戻り値  
成功した場合は `GLFW_TRUE`。ジョイスティックが接続されていない場合、ゲームパッドマッピングがない場合、または<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `GLFW_FALSE`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#gamepad" class="el">ゲームパッド入力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaed5104612f2fa8e66aa6e846652ad00f" class="el">glfwUpdateGamepadMappings</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad0f676860f329d80f7e47e9f06a96f00" class="el">glfwJoystickIsGamepad</a>

<!-- -->

導入バージョン  
バージョン 3.3 で追加されました。

</div>

</div>

<span id="gaba1f022c5eb07dfac421df34cdcd31dd"></span>

## <span class="permalink">[◆ ](#gaba1f022c5eb07dfac421df34cdcd31dd)</span>glfwSetClipboardString()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetClipboardString | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | const char \*  | *string*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、システムのクリップボードに指定された UTF-8 エンコード文字列を設定します。

引数  
|        |        |                                         |
|--------|--------|-----------------------------------------|
| \[in\] | window | 非推奨。有効な任意のウィンドウ、または `NULL`。 |
| \[in\] | string | UTF-8 エンコード文字列。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
**Win32:** Windows のクリップボードには、読み書き用の単一のグローバルロックがあります。GLFW は数回ロックの取得を試み、ほとんどの場合はそれで十分です。ロックを取得できない場合、この関数は <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> を生成して戻ります。この関数を複数回試行しても安全です。

<!-- -->

ポインターの有効期間  
指定された文字列は、この関数から戻る前にコピーされます。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#clipboard" class="el">クリップボードの入出力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga71a5b20808ea92193d65c21b82580355" class="el">glfwGetClipboardString</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga71a5b20808ea92193d65c21b82580355"></span>

## <span class="permalink">[◆ ](#ga71a5b20808ea92193d65c21b82580355)</span>glfwGetClipboardString()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| const char \* glfwGetClipboardString | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

この関数は、システムのクリップボードに UTF-8 エンコード文字列が含まれているか、その形式に変換できる場合に、クリップボードの内容を返します。クリップボードが空の場合、または内容を変換できない場合は `NULL` を返し、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga196e125ef261d94184e2b55c05762f14" class="el">GLFW_FORMAT_UNAVAILABLE</a> エラーを生成します。

引数  
|        |        |                                         |
|--------|--------|-----------------------------------------|
| \[in\] | window | 非推奨。有効な任意のウィンドウ、または `NULL`。 |

<!-- -->

戻り値  
UTF-8 エンコード文字列としてのクリップボードの内容。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga196e125ef261d94184e2b55c05762f14" class="el">GLFW_FORMAT_UNAVAILABLE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
**Win32:** Windows のクリップボードには、読み書き用の単一のグローバルロックがあります。GLFW は数回ロックの取得を試み、ほとんどの場合はそれで十分です。ロックを取得できない場合、この関数は <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> を生成して戻ります。この関数を複数回試行しても安全です。

<!-- -->

ポインターの有効期間  
戻り値の文字列は GLFW によって確保および解放されます。自分で解放してはいけません。次に <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga71a5b20808ea92193d65c21b82580355" class="el">glfwGetClipboardString</a> または <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaba1f022c5eb07dfac421df34cdcd31dd" class="el">glfwSetClipboardString</a> が呼び出されるか、ライブラリが終了するまで有効です。

<!-- -->

スレッドセーフ性  
この関数は、メインスレッドからのみ呼び出さなければなりません。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#clipboard" class="el">クリップボードの入出力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaba1f022c5eb07dfac421df34cdcd31dd" class="el">glfwSetClipboardString</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="gaa6cf4e7a77158a3b8fd00328b1720a4a"></span>

## <span class="permalink">[◆ ](#gaa6cf4e7a77158a3b8fd00328b1720a4a)</span>glfwGetTime()

<div class="memitem">

<div class="memproto">

|                    |     |       |     |     |     |
|--------------------|-----|-------|-----|-----|-----|
| double glfwGetTime | (   | void  |     | )   |     |

</div>

<div class="memdoc">

この関数は、現在の GLFW 時刻を秒単位で返します。<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf59589ef6e8b8c8b5ad184b25afd4dc0" class="el">glfwSetTime</a> で時刻を設定していない場合は、GLFW の初期化から経過した時間を測定します。

この関数と <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf59589ef6e8b8c8b5ad184b25afd4dc0" class="el">glfwSetTime</a> は、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga3289ee876572f6e91f06df3a24824443" class="el">glfwGetTimerFrequency</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga09b2bd37d328e0b9456c7ec575cc26aa" class="el">glfwGetTimerValue</a> の上に構築されたヘルパー関数です。

タイマーの分解能はシステムに依存しますが、通常は数マイクロ秒または数ナノ秒程度です。各オペレーティングシステムで最も高分解能な単調増加時刻源を使用します。

戻り値  
現在時刻（秒単位）。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は 0。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。内部基準時刻の読み書きはアトミックではないため、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf59589ef6e8b8c8b5ad184b25afd4dc0" class="el">glfwSetTime</a> の呼び出しとの間で外部同期が必要です。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#time" class="el">時刻入力</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。

</div>

</div>

<span id="gaf59589ef6e8b8c8b5ad184b25afd4dc0"></span>

## <span class="permalink">[◆ ](#gaf59589ef6e8b8c8b5ad184b25afd4dc0)</span>glfwSetTime()

<div class="memitem">

<div class="memproto">

|                  |     |         |        |     |     |
|------------------|-----|---------|--------|-----|-----|
| void glfwSetTime | (   | double  | *time* | )   |     |

</div>

<div class="memdoc">

この関数は、現在の GLFW 時刻を秒単位で設定します。値は、約 584.5 年に相当する 18446744073.0 以下の、正の有限数でなければなりません。

この関数と <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa6cf4e7a77158a3b8fd00328b1720a4a" class="el">glfwGetTime</a> は、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga3289ee876572f6e91f06df3a24824443" class="el">glfwGetTimerFrequency</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga09b2bd37d328e0b9456c7ec575cc26aa" class="el">glfwGetTimerValue</a> の上に構築されたヘルパー関数です。

引数  
|        |      |                            |
|--------|------|----------------------------|
| \[in\] | time | 新しい値（秒単位）。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a> があります。

<!-- -->

備考  
GLFW 時刻の上限は floor((2<sup>64</sup> - 1) / 10<sup>9</sup>) として計算されます。これは、ナノ秒を 64 ビットで格納する実装によるものです。この上限は将来引き上げられる可能性があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。内部基準時刻の読み書きはアトミックではないため、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa6cf4e7a77158a3b8fd00328b1720a4a" class="el">glfwGetTime</a> の呼び出しとの間で外部同期が必要です。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#time" class="el">時刻入力</a>

<!-- -->

導入バージョン  
バージョン 2.2 で追加されました。

</div>

</div>

<span id="ga09b2bd37d328e0b9456c7ec575cc26aa"></span>

## <span class="permalink">[◆ ](#ga09b2bd37d328e0b9456c7ec575cc26aa)</span>glfwGetTimerValue()

<div class="memitem">

<div class="memproto">

|                            |     |       |     |     |     |
|----------------------------|-----|-------|-----|-----|-----|
| uint64_t glfwGetTimerValue | (   | void  |     | )   |     |

</div>

<div class="memdoc">

この関数は、生のタイマーの現在値を 1 / 周波数 秒単位で返します。周波数を取得するには、<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga3289ee876572f6e91f06df3a24824443" class="el">glfwGetTimerFrequency</a> を呼び出してください。

戻り値  
タイマーの値。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は 0。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#time" class="el">時刻入力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga3289ee876572f6e91f06df3a24824443" class="el">glfwGetTimerFrequency</a>

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

</div>

</div>

<span id="ga3289ee876572f6e91f06df3a24824443"></span>

## <span class="permalink">[◆ ](#ga3289ee876572f6e91f06df3a24824443)</span>glfwGetTimerFrequency()

<div class="memitem">

<div class="memproto">

|                                |     |       |     |     |     |
|--------------------------------|-----|-------|-----|-----|-----|
| uint64_t glfwGetTimerFrequency | (   | void  |     | )   |     |

</div>

<div class="memdoc">

この関数は、生のタイマーの周波数を Hz 単位で返します。

戻り値  
タイマーの周波数（Hz 単位）。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は 0。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#time" class="el">時刻入力</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga09b2bd37d328e0b9456c7ec575cc26aa" class="el">glfwGetTimerValue</a>

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

</div>

</div>
