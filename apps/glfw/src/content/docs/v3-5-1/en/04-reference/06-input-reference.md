---
title: "Input reference"
description: "GLFW 3.5.1 Input reference"
licenseSource: "glfw-3.5.1"
---

> This reference page is an altered Markdown adaptation of the [official GLFW 3.5.1 documentation](https://www.glfw.org/docs/3.5.1/). Formatting, navigation and links were changed for libx; technical content comes from the GLFW 3.5.1 source distribution.

<span id="details"></span>

## Description

This is the reference documentation for input related functions and types. For more task-oriented information, see the <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/" class="el">Input guide</a>.

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="modules" class="groupheader"><span id="groups"></span> Modules</h2></td>
</tr>
<tr id="r_group__gamepad__axes" class="memitem:group__gamepad__axes">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/15-gamepad-axes/" class="el">Gamepad axes</a></td>
</tr>
<tr class="memdesc:group__gamepad__axes">
<td class="mdescLeft"> </td>
<td class="mdescRight">Gamepad axes.<br />
</td>
</tr>
<tr class="separator:">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_group__gamepad__buttons" class="memitem:group__gamepad__buttons">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/14-gamepad-buttons/" class="el">Gamepad buttons</a></td>
</tr>
<tr class="memdesc:group__gamepad__buttons">
<td class="mdescLeft"> </td>
<td class="mdescRight">Gamepad buttons.<br />
</td>
</tr>
<tr class="separator:">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_group__hat__state" class="memitem:group__hat__state">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/13-joystick-hat-states/" class="el">Joystick hat states</a></td>
</tr>
<tr class="memdesc:group__hat__state">
<td class="mdescLeft"> </td>
<td class="mdescRight">Joystick hat states.<br />
</td>
</tr>
<tr class="separator:">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_group__joysticks" class="memitem:group__joysticks">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/12-joysticks/" class="el">Joysticks</a></td>
</tr>
<tr class="memdesc:group__joysticks">
<td class="mdescLeft"> </td>
<td class="mdescRight">Joystick IDs.<br />
</td>
</tr>
<tr class="separator:">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_group__keys" class="memitem:group__keys">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/" class="el">Keyboard key tokens</a></td>
</tr>
<tr class="memdesc:group__keys">
<td class="mdescLeft"> </td>
<td class="mdescRight">Keyboard key tokens.<br />
</td>
</tr>
<tr class="separator:">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_group__mods" class="memitem:group__mods">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/10-modifier-key-flags/" class="el">Modifier key flags</a></td>
</tr>
<tr class="memdesc:group__mods">
<td class="mdescLeft"> </td>
<td class="mdescRight">Modifier key flags.<br />
</td>
</tr>
<tr class="separator:">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_group__buttons" class="memitem:group__buttons">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/11-mouse-buttons/" class="el">Mouse buttons</a></td>
</tr>
<tr class="memdesc:group__buttons">
<td class="mdescLeft"> </td>
<td class="mdescRight">Mouse button IDs.<br />
</td>
</tr>
<tr class="separator:">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_group__shapes" class="memitem:group__shapes">
<td class="memItemLeft" style="text-align: right;" data-valign="top"> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/16-standard-cursor-shapes/" class="el">Standard cursor shapes</a></td>
</tr>
<tr class="memdesc:group__shapes">
<td class="mdescLeft"> </td>
<td class="mdescRight">Standard system cursor shapes.<br />
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
<tr id="r_ga99aacc875b6b27a072552631e13775c7" class="memitem:ga99aacc875b6b27a072552631e13775c7">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga99aacc875b6b27a072552631e13775c7" class="el">GLFW_KEY_UNKNOWN</a>   -1</td>
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
<td colspan="2"><h2 id="typedefs" class="groupheader"><span id="typedef-members"></span> Typedefs</h2></td>
</tr>
<tr id="r_ga89261ae18c75e863aaf2656ecdd238f4" class="memitem:ga89261ae18c75e863aaf2656ecdd238f4">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef struct <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a></td>
</tr>
<tr class="memdesc:ga89261ae18c75e863aaf2656ecdd238f4">
<td class="mdescLeft"> </td>
<td class="mdescRight">Opaque cursor object.<br />
</td>
</tr>
<tr class="separator:ga89261ae18c75e863aaf2656ecdd238f4">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga0184dcb59f6d85d735503dcaae809727" class="memitem:ga0184dcb59f6d85d735503dcaae809727">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga0184dcb59f6d85d735503dcaae809727" class="el">GLFWmousebuttonfun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int button, int action, int mods)</td>
</tr>
<tr class="memdesc:ga0184dcb59f6d85d735503dcaae809727">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for mouse button callbacks.<br />
</td>
</tr>
<tr class="separator:ga0184dcb59f6d85d735503dcaae809727">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad6fae41b3ac2e4209aaa87b596c57f68" class="memitem:gad6fae41b3ac2e4209aaa87b596c57f68">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gad6fae41b3ac2e4209aaa87b596c57f68" class="el">GLFWcursorposfun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, double xpos, double ypos)</td>
</tr>
<tr class="memdesc:gad6fae41b3ac2e4209aaa87b596c57f68">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for cursor position callbacks.<br />
</td>
</tr>
<tr class="separator:gad6fae41b3ac2e4209aaa87b596c57f68">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa93dc4818ac9ab32532909d53a337cbe" class="memitem:gaa93dc4818ac9ab32532909d53a337cbe">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa93dc4818ac9ab32532909d53a337cbe" class="el">GLFWcursorenterfun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int entered)</td>
</tr>
<tr class="memdesc:gaa93dc4818ac9ab32532909d53a337cbe">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for cursor enter/leave callbacks.<br />
</td>
</tr>
<tr class="separator:gaa93dc4818ac9ab32532909d53a337cbe">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf656112c33de3efdb227fa58f0134cf5" class="memitem:gaf656112c33de3efdb227fa58f0134cf5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaf656112c33de3efdb227fa58f0134cf5" class="el">GLFWscrollfun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, double xoffset, double yoffset)</td>
</tr>
<tr class="memdesc:gaf656112c33de3efdb227fa58f0134cf5">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for scroll callbacks.<br />
</td>
</tr>
<tr class="separator:gaf656112c33de3efdb227fa58f0134cf5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5bd751b27b90f865d2ea613533f0453c" class="memitem:ga5bd751b27b90f865d2ea613533f0453c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga5bd751b27b90f865d2ea613533f0453c" class="el">GLFWkeyfun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int key, int scancode, int action, int mods)</td>
</tr>
<tr class="memdesc:ga5bd751b27b90f865d2ea613533f0453c">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for keyboard key callbacks.<br />
</td>
</tr>
<tr class="separator:ga5bd751b27b90f865d2ea613533f0453c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1ab90a55cf3f58639b893c0f4118cb6e" class="memitem:ga1ab90a55cf3f58639b893c0f4118cb6e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga1ab90a55cf3f58639b893c0f4118cb6e" class="el">GLFWcharfun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, unsigned int codepoint)</td>
</tr>
<tr class="memdesc:ga1ab90a55cf3f58639b893c0f4118cb6e">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for Unicode character callbacks.<br />
</td>
</tr>
<tr class="separator:ga1ab90a55cf3f58639b893c0f4118cb6e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac3cf64f90b6219c05ac7b7822d5a4b8f" class="memitem:gac3cf64f90b6219c05ac7b7822d5a4b8f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gac3cf64f90b6219c05ac7b7822d5a4b8f" class="el">GLFWcharmodsfun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, unsigned int codepoint, int mods)</td>
</tr>
<tr class="memdesc:gac3cf64f90b6219c05ac7b7822d5a4b8f">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for Unicode character with modifiers callbacks.<br />
</td>
</tr>
<tr class="separator:gac3cf64f90b6219c05ac7b7822d5a4b8f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaaba73c3274062c18723b7f05862d94b2" class="memitem:gaaba73c3274062c18723b7f05862d94b2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaaba73c3274062c18723b7f05862d94b2" class="el">GLFWdropfun</a>) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int path_count, const char *paths[])</td>
</tr>
<tr class="memdesc:gaaba73c3274062c18723b7f05862d94b2">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for path drop callbacks.<br />
</td>
</tr>
<tr class="separator:gaaba73c3274062c18723b7f05862d94b2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa21ad5986ae9a26077a40142efb56243" class="memitem:gaa21ad5986ae9a26077a40142efb56243">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa21ad5986ae9a26077a40142efb56243" class="el">GLFWjoystickfun</a>) (int jid, int event)</td>
</tr>
<tr class="memdesc:gaa21ad5986ae9a26077a40142efb56243">
<td class="mdescLeft"> </td>
<td class="mdescRight">The function pointer type for joystick configuration callbacks.<br />
</td>
</tr>
<tr class="separator:gaa21ad5986ae9a26077a40142efb56243">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga61acfb1f28f751438dd221225c5e725d" class="memitem:ga61acfb1f28f751438dd221225c5e725d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef struct <a href="/docs/glfw/v3-5-1/en/04-reference/18-glfwgamepadstate/" class="el">GLFWgamepadstate</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga61acfb1f28f751438dd221225c5e725d" class="el">GLFWgamepadstate</a></td>
</tr>
<tr class="memdesc:ga61acfb1f28f751438dd221225c5e725d">
<td class="mdescLeft"> </td>
<td class="mdescRight">Gamepad input state.<br />
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
<td colspan="2"><h2 id="functions" class="groupheader"><span id="func-members"></span> Functions</h2></td>
</tr>
<tr id="r_gaf5b859dbe19bdf434e42695ea45cc5f4" class="memitem:gaf5b859dbe19bdf434e42695ea45cc5f4">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaf5b859dbe19bdf434e42695ea45cc5f4" class="el">glfwGetInputMode</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int mode)</td>
</tr>
<tr class="memdesc:gaf5b859dbe19bdf434e42695ea45cc5f4">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the value of an input option for the specified window.<br />
</td>
</tr>
<tr class="separator:gaf5b859dbe19bdf434e42695ea45cc5f4">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa92336e173da9c8834558b54ee80563b" class="memitem:gaa92336e173da9c8834558b54ee80563b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa92336e173da9c8834558b54ee80563b" class="el">glfwSetInputMode</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int mode, int value)</td>
</tr>
<tr class="memdesc:gaa92336e173da9c8834558b54ee80563b">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets an input option for the specified window.<br />
</td>
</tr>
<tr class="separator:gaa92336e173da9c8834558b54ee80563b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae4ee0dbd0d256183e1ea4026d897e1c2" class="memitem:gae4ee0dbd0d256183e1ea4026d897e1c2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gae4ee0dbd0d256183e1ea4026d897e1c2" class="el">glfwRawMouseMotionSupported</a> (void)</td>
</tr>
<tr class="memdesc:gae4ee0dbd0d256183e1ea4026d897e1c2">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns whether raw mouse motion is supported.<br />
</td>
</tr>
<tr class="separator:gae4ee0dbd0d256183e1ea4026d897e1c2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaeaed62e69c3bd62b7ff8f7b19913ce4f" class="memitem:gaeaed62e69c3bd62b7ff8f7b19913ce4f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaeaed62e69c3bd62b7ff8f7b19913ce4f" class="el">glfwGetKeyName</a> (int key, int scancode)</td>
</tr>
<tr class="memdesc:gaeaed62e69c3bd62b7ff8f7b19913ce4f">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the layout-specific name of the specified printable key.<br />
</td>
</tr>
<tr class="separator:gaeaed62e69c3bd62b7ff8f7b19913ce4f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga67ddd1b7dcbbaff03e4a76c0ea67103a" class="memitem:ga67ddd1b7dcbbaff03e4a76c0ea67103a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga67ddd1b7dcbbaff03e4a76c0ea67103a" class="el">glfwGetKeyScancode</a> (int key)</td>
</tr>
<tr class="memdesc:ga67ddd1b7dcbbaff03e4a76c0ea67103a">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the platform-specific scancode of the specified key.<br />
</td>
</tr>
<tr class="separator:ga67ddd1b7dcbbaff03e4a76c0ea67103a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadd341da06bc8d418b4dc3a3518af9ad2" class="memitem:gadd341da06bc8d418b4dc3a3518af9ad2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gadd341da06bc8d418b4dc3a3518af9ad2" class="el">glfwGetKey</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int key)</td>
</tr>
<tr class="memdesc:gadd341da06bc8d418b4dc3a3518af9ad2">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the last reported state of a keyboard key for the specified window.<br />
</td>
</tr>
<tr class="separator:gadd341da06bc8d418b4dc3a3518af9ad2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac1473feacb5996c01a7a5a33b5066704" class="memitem:gac1473feacb5996c01a7a5a33b5066704">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gac1473feacb5996c01a7a5a33b5066704" class="el">glfwGetMouseButton</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, int button)</td>
</tr>
<tr class="memdesc:gac1473feacb5996c01a7a5a33b5066704">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the last reported state of a mouse button for the specified window.<br />
</td>
</tr>
<tr class="separator:gac1473feacb5996c01a7a5a33b5066704">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga01d37b6c40133676b9cea60ca1d7c0cc" class="memitem:ga01d37b6c40133676b9cea60ca1d7c0cc">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga01d37b6c40133676b9cea60ca1d7c0cc" class="el">glfwGetCursorPos</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, double *xpos, double *ypos)</td>
</tr>
<tr class="memdesc:ga01d37b6c40133676b9cea60ca1d7c0cc">
<td class="mdescLeft"> </td>
<td class="mdescRight">Retrieves the position of the cursor relative to the content area of the window.<br />
</td>
</tr>
<tr class="separator:ga01d37b6c40133676b9cea60ca1d7c0cc">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga04b03af936d906ca123c8f4ee08b39e7" class="memitem:ga04b03af936d906ca123c8f4ee08b39e7">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga04b03af936d906ca123c8f4ee08b39e7" class="el">glfwSetCursorPos</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, double xpos, double ypos)</td>
</tr>
<tr class="memdesc:ga04b03af936d906ca123c8f4ee08b39e7">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the position of the cursor, relative to the content area of the window.<br />
</td>
</tr>
<tr class="separator:ga04b03af936d906ca123c8f4ee08b39e7">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga556f604f73af156c0db0e97c081373c3" class="memitem:ga556f604f73af156c0db0e97c081373c3">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga556f604f73af156c0db0e97c081373c3" class="el">glfwCreateCursor</a> (const <a href="/docs/glfw/v3-5-1/en/04-reference/20-glfwimage/" class="el">GLFWimage</a> *image, int xhot, int yhot)</td>
</tr>
<tr class="memdesc:ga556f604f73af156c0db0e97c081373c3">
<td class="mdescLeft"> </td>
<td class="mdescRight">Creates a custom cursor.<br />
</td>
</tr>
<tr class="separator:ga556f604f73af156c0db0e97c081373c3">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf2fb2eb2c9dd842d1cef8a34e3c6403e" class="memitem:gaf2fb2eb2c9dd842d1cef8a34e3c6403e">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaf2fb2eb2c9dd842d1cef8a34e3c6403e" class="el">glfwCreateStandardCursor</a> (int shape)</td>
</tr>
<tr class="memdesc:gaf2fb2eb2c9dd842d1cef8a34e3c6403e">
<td class="mdescLeft"> </td>
<td class="mdescRight">Creates a cursor with a standard shape.<br />
</td>
</tr>
<tr class="separator:gaf2fb2eb2c9dd842d1cef8a34e3c6403e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga81b952cd1764274d0db7fb3c5a79ba6a" class="memitem:ga81b952cd1764274d0db7fb3c5a79ba6a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga81b952cd1764274d0db7fb3c5a79ba6a" class="el">glfwDestroyCursor</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> *cursor)</td>
</tr>
<tr class="memdesc:ga81b952cd1764274d0db7fb3c5a79ba6a">
<td class="mdescLeft"> </td>
<td class="mdescRight">Destroys a cursor.<br />
</td>
</tr>
<tr class="separator:ga81b952cd1764274d0db7fb3c5a79ba6a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad3b4f38c8d5dae036bc8fa959e18343e" class="memitem:gad3b4f38c8d5dae036bc8fa959e18343e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gad3b4f38c8d5dae036bc8fa959e18343e" class="el">glfwSetCursor</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> *cursor)</td>
</tr>
<tr class="memdesc:gad3b4f38c8d5dae036bc8fa959e18343e">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the cursor for the window.<br />
</td>
</tr>
<tr class="separator:gad3b4f38c8d5dae036bc8fa959e18343e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1caf18159767e761185e49a3be019f8d" class="memitem:ga1caf18159767e761185e49a3be019f8d">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga5bd751b27b90f865d2ea613533f0453c" class="el">GLFWkeyfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga1caf18159767e761185e49a3be019f8d" class="el">glfwSetKeyCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga5bd751b27b90f865d2ea613533f0453c" class="el">GLFWkeyfun</a> callback)</td>
</tr>
<tr class="memdesc:ga1caf18159767e761185e49a3be019f8d">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the key callback.<br />
</td>
</tr>
<tr class="separator:ga1caf18159767e761185e49a3be019f8d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab25c4a220fd8f5717718dbc487828996" class="memitem:gab25c4a220fd8f5717718dbc487828996">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga1ab90a55cf3f58639b893c0f4118cb6e" class="el">GLFWcharfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gab25c4a220fd8f5717718dbc487828996" class="el">glfwSetCharCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga1ab90a55cf3f58639b893c0f4118cb6e" class="el">GLFWcharfun</a> callback)</td>
</tr>
<tr class="memdesc:gab25c4a220fd8f5717718dbc487828996">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the Unicode character callback.<br />
</td>
</tr>
<tr class="separator:gab25c4a220fd8f5717718dbc487828996">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga0b7f4ad13c2b17435ff13b6dcfb4e43c" class="memitem:ga0b7f4ad13c2b17435ff13b6dcfb4e43c">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gac3cf64f90b6219c05ac7b7822d5a4b8f" class="el">GLFWcharmodsfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga0b7f4ad13c2b17435ff13b6dcfb4e43c" class="el">glfwSetCharModsCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gac3cf64f90b6219c05ac7b7822d5a4b8f" class="el">GLFWcharmodsfun</a> callback)</td>
</tr>
<tr class="memdesc:ga0b7f4ad13c2b17435ff13b6dcfb4e43c">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the Unicode character with modifiers callback.<br />
</td>
</tr>
<tr class="separator:ga0b7f4ad13c2b17435ff13b6dcfb4e43c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6ab84420974d812bee700e45284a723c" class="memitem:ga6ab84420974d812bee700e45284a723c">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga0184dcb59f6d85d735503dcaae809727" class="el">GLFWmousebuttonfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga6ab84420974d812bee700e45284a723c" class="el">glfwSetMouseButtonCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga0184dcb59f6d85d735503dcaae809727" class="el">GLFWmousebuttonfun</a> callback)</td>
</tr>
<tr class="memdesc:ga6ab84420974d812bee700e45284a723c">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the mouse button callback.<br />
</td>
</tr>
<tr class="separator:ga6ab84420974d812bee700e45284a723c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac1f879ab7435d54d4d79bb469fe225d7" class="memitem:gac1f879ab7435d54d4d79bb469fe225d7">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gad6fae41b3ac2e4209aaa87b596c57f68" class="el">GLFWcursorposfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gac1f879ab7435d54d4d79bb469fe225d7" class="el">glfwSetCursorPosCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gad6fae41b3ac2e4209aaa87b596c57f68" class="el">GLFWcursorposfun</a> callback)</td>
</tr>
<tr class="memdesc:gac1f879ab7435d54d4d79bb469fe225d7">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the cursor position callback.<br />
</td>
</tr>
<tr class="separator:gac1f879ab7435d54d4d79bb469fe225d7">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad27f8ad0142c038a281466c0966817d8" class="memitem:gad27f8ad0142c038a281466c0966817d8">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa93dc4818ac9ab32532909d53a337cbe" class="el">GLFWcursorenterfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gad27f8ad0142c038a281466c0966817d8" class="el">glfwSetCursorEnterCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa93dc4818ac9ab32532909d53a337cbe" class="el">GLFWcursorenterfun</a> callback)</td>
</tr>
<tr class="memdesc:gad27f8ad0142c038a281466c0966817d8">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the cursor enter/leave callback.<br />
</td>
</tr>
<tr class="separator:gad27f8ad0142c038a281466c0966817d8">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga571e45a030ae4061f746ed56cb76aede" class="memitem:ga571e45a030ae4061f746ed56cb76aede">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaf656112c33de3efdb227fa58f0134cf5" class="el">GLFWscrollfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga571e45a030ae4061f746ed56cb76aede" class="el">glfwSetScrollCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaf656112c33de3efdb227fa58f0134cf5" class="el">GLFWscrollfun</a> callback)</td>
</tr>
<tr class="memdesc:ga571e45a030ae4061f746ed56cb76aede">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the scroll callback.<br />
</td>
</tr>
<tr class="separator:ga571e45a030ae4061f746ed56cb76aede">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab773f0ee0a07cff77a210cea40bc1f6b" class="memitem:gab773f0ee0a07cff77a210cea40bc1f6b">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaaba73c3274062c18723b7f05862d94b2" class="el">GLFWdropfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gab773f0ee0a07cff77a210cea40bc1f6b" class="el">glfwSetDropCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaaba73c3274062c18723b7f05862d94b2" class="el">GLFWdropfun</a> callback)</td>
</tr>
<tr class="memdesc:gab773f0ee0a07cff77a210cea40bc1f6b">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the path drop callback.<br />
</td>
</tr>
<tr class="separator:gab773f0ee0a07cff77a210cea40bc1f6b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaed0966cee139d815317f9ffcba64c9f1" class="memitem:gaed0966cee139d815317f9ffcba64c9f1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a> (int jid)</td>
</tr>
<tr class="memdesc:gaed0966cee139d815317f9ffcba64c9f1">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns whether the specified joystick is present.<br />
</td>
</tr>
<tr class="separator:gaed0966cee139d815317f9ffcba64c9f1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaeb1c0191d3140a233a682987c61eb408" class="memitem:gaeb1c0191d3140a233a682987c61eb408">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const float * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaeb1c0191d3140a233a682987c61eb408" class="el">glfwGetJoystickAxes</a> (int jid, int *count)</td>
</tr>
<tr class="memdesc:gaeb1c0191d3140a233a682987c61eb408">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the values of all axes of the specified joystick.<br />
</td>
</tr>
<tr class="separator:gaeb1c0191d3140a233a682987c61eb408">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5ffe34739d3dc97efe432ed2d81d9938" class="memitem:ga5ffe34739d3dc97efe432ed2d81d9938">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const unsigned char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga5ffe34739d3dc97efe432ed2d81d9938" class="el">glfwGetJoystickButtons</a> (int jid, int *count)</td>
</tr>
<tr class="memdesc:ga5ffe34739d3dc97efe432ed2d81d9938">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the state of all buttons of the specified joystick.<br />
</td>
</tr>
<tr class="separator:ga5ffe34739d3dc97efe432ed2d81d9938">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga06e660841b3e79c54da4f54a932c5a2c" class="memitem:ga06e660841b3e79c54da4f54a932c5a2c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const unsigned char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga06e660841b3e79c54da4f54a932c5a2c" class="el">glfwGetJoystickHats</a> (int jid, int *count)</td>
</tr>
<tr class="memdesc:ga06e660841b3e79c54da4f54a932c5a2c">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the state of all hats of the specified joystick.<br />
</td>
</tr>
<tr class="separator:ga06e660841b3e79c54da4f54a932c5a2c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac6a8e769e18e0bcfa9097793fc2c3978" class="memitem:gac6a8e769e18e0bcfa9097793fc2c3978">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gac6a8e769e18e0bcfa9097793fc2c3978" class="el">glfwGetJoystickName</a> (int jid)</td>
</tr>
<tr class="memdesc:gac6a8e769e18e0bcfa9097793fc2c3978">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the name of the specified joystick.<br />
</td>
</tr>
<tr class="separator:gac6a8e769e18e0bcfa9097793fc2c3978">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6659411aec3c7fcef27780e2cb2d9600" class="memitem:ga6659411aec3c7fcef27780e2cb2d9600">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga6659411aec3c7fcef27780e2cb2d9600" class="el">glfwGetJoystickGUID</a> (int jid)</td>
</tr>
<tr class="memdesc:ga6659411aec3c7fcef27780e2cb2d9600">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the SDL compatible GUID of the specified joystick.<br />
</td>
</tr>
<tr class="separator:ga6659411aec3c7fcef27780e2cb2d9600">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6b2f72d64d636b48a727b437cbb7489e" class="memitem:ga6b2f72d64d636b48a727b437cbb7489e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga6b2f72d64d636b48a727b437cbb7489e" class="el">glfwSetJoystickUserPointer</a> (int jid, void *pointer)</td>
</tr>
<tr class="memdesc:ga6b2f72d64d636b48a727b437cbb7489e">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the user pointer of the specified joystick.<br />
</td>
</tr>
<tr class="separator:ga6b2f72d64d636b48a727b437cbb7489e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga18cefd7265d1fa04f3fd38a6746db5f3" class="memitem:ga18cefd7265d1fa04f3fd38a6746db5f3">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga18cefd7265d1fa04f3fd38a6746db5f3" class="el">glfwGetJoystickUserPointer</a> (int jid)</td>
</tr>
<tr class="memdesc:ga18cefd7265d1fa04f3fd38a6746db5f3">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the user pointer of the specified joystick.<br />
</td>
</tr>
<tr class="separator:ga18cefd7265d1fa04f3fd38a6746db5f3">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad0f676860f329d80f7e47e9f06a96f00" class="memitem:gad0f676860f329d80f7e47e9f06a96f00">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gad0f676860f329d80f7e47e9f06a96f00" class="el">glfwJoystickIsGamepad</a> (int jid)</td>
</tr>
<tr class="memdesc:gad0f676860f329d80f7e47e9f06a96f00">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns whether the specified joystick has a gamepad mapping.<br />
</td>
</tr>
<tr class="separator:gad0f676860f329d80f7e47e9f06a96f00">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c" class="memitem:ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa21ad5986ae9a26077a40142efb56243" class="el">GLFWjoystickfun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c" class="el">glfwSetJoystickCallback</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa21ad5986ae9a26077a40142efb56243" class="el">GLFWjoystickfun</a> callback)</td>
</tr>
<tr class="memdesc:ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the joystick configuration callback.<br />
</td>
</tr>
<tr class="separator:ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaed5104612f2fa8e66aa6e846652ad00f" class="memitem:gaed5104612f2fa8e66aa6e846652ad00f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaed5104612f2fa8e66aa6e846652ad00f" class="el">glfwUpdateGamepadMappings</a> (const char *string)</td>
</tr>
<tr class="memdesc:gaed5104612f2fa8e66aa6e846652ad00f">
<td class="mdescLeft"> </td>
<td class="mdescRight">Adds the specified SDL_GameControllerDB gamepad mappings.<br />
</td>
</tr>
<tr class="separator:gaed5104612f2fa8e66aa6e846652ad00f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8aea73a1a25cc6c0486a617019f56728" class="memitem:ga8aea73a1a25cc6c0486a617019f56728">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga8aea73a1a25cc6c0486a617019f56728" class="el">glfwGetGamepadName</a> (int jid)</td>
</tr>
<tr class="memdesc:ga8aea73a1a25cc6c0486a617019f56728">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the human-readable gamepad name for the specified joystick.<br />
</td>
</tr>
<tr class="separator:ga8aea73a1a25cc6c0486a617019f56728">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadccddea8bce6113fa459de379ddaf051" class="memitem:gadccddea8bce6113fa459de379ddaf051">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gadccddea8bce6113fa459de379ddaf051" class="el">glfwGetGamepadState</a> (int jid, <a href="/docs/glfw/v3-5-1/en/04-reference/18-glfwgamepadstate/" class="el">GLFWgamepadstate</a> *state)</td>
</tr>
<tr class="memdesc:gadccddea8bce6113fa459de379ddaf051">
<td class="mdescLeft"> </td>
<td class="mdescRight">Retrieves the state of the specified joystick remapped as a gamepad.<br />
</td>
</tr>
<tr class="separator:gadccddea8bce6113fa459de379ddaf051">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaba1f022c5eb07dfac421df34cdcd31dd" class="memitem:gaba1f022c5eb07dfac421df34cdcd31dd">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaba1f022c5eb07dfac421df34cdcd31dd" class="el">glfwSetClipboardString</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, const char *string)</td>
</tr>
<tr class="memdesc:gaba1f022c5eb07dfac421df34cdcd31dd">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the clipboard to the specified string.<br />
</td>
</tr>
<tr class="separator:gaba1f022c5eb07dfac421df34cdcd31dd">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga71a5b20808ea92193d65c21b82580355" class="memitem:ga71a5b20808ea92193d65c21b82580355">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga71a5b20808ea92193d65c21b82580355" class="el">glfwGetClipboardString</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga71a5b20808ea92193d65c21b82580355">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the contents of the clipboard as a string.<br />
</td>
</tr>
<tr class="separator:ga71a5b20808ea92193d65c21b82580355">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa6cf4e7a77158a3b8fd00328b1720a4a" class="memitem:gaa6cf4e7a77158a3b8fd00328b1720a4a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">double </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa6cf4e7a77158a3b8fd00328b1720a4a" class="el">glfwGetTime</a> (void)</td>
</tr>
<tr class="memdesc:gaa6cf4e7a77158a3b8fd00328b1720a4a">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the GLFW time.<br />
</td>
</tr>
<tr class="separator:gaa6cf4e7a77158a3b8fd00328b1720a4a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf59589ef6e8b8c8b5ad184b25afd4dc0" class="memitem:gaf59589ef6e8b8c8b5ad184b25afd4dc0">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaf59589ef6e8b8c8b5ad184b25afd4dc0" class="el">glfwSetTime</a> (double time)</td>
</tr>
<tr class="memdesc:gaf59589ef6e8b8c8b5ad184b25afd4dc0">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the GLFW time.<br />
</td>
</tr>
<tr class="separator:gaf59589ef6e8b8c8b5ad184b25afd4dc0">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga09b2bd37d328e0b9456c7ec575cc26aa" class="memitem:ga09b2bd37d328e0b9456c7ec575cc26aa">
<td class="memItemLeft" style="text-align: right;" data-valign="top">uint64_t </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga09b2bd37d328e0b9456c7ec575cc26aa" class="el">glfwGetTimerValue</a> (void)</td>
</tr>
<tr class="memdesc:ga09b2bd37d328e0b9456c7ec575cc26aa">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the current value of the raw timer.<br />
</td>
</tr>
<tr class="separator:ga09b2bd37d328e0b9456c7ec575cc26aa">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3289ee876572f6e91f06df3a24824443" class="memitem:ga3289ee876572f6e91f06df3a24824443">
<td class="memItemLeft" style="text-align: right;" data-valign="top">uint64_t </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga3289ee876572f6e91f06df3a24824443" class="el">glfwGetTimerFrequency</a> (void)</td>
</tr>
<tr class="memdesc:ga3289ee876572f6e91f06df3a24824443">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the frequency, in Hz, of the raw timer.<br />
</td>
</tr>
<tr class="separator:ga3289ee876572f6e91f06df3a24824443">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## Macro Definition Documentation

<span id="gada11d965c4da13090ad336e030e4d11f"></span>

## <span class="permalink">[◆ ](#gada11d965c4da13090ad336e030e4d11f)</span>GLFW_RELEASE

<div class="memitem">

<div class="memproto">

|                           |
|---------------------------|
| \#define GLFW_RELEASE   0 |

</div>

<div class="memdoc">

The key or mouse button was released.

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

The key or mouse button was pressed.

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

The key was held down until it repeated.

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

## Typedef Documentation

<span id="ga89261ae18c75e863aaf2656ecdd238f4"></span>

## <span class="permalink">[◆ ](#ga89261ae18c75e863aaf2656ecdd238f4)</span>GLFWcursor

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef struct <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> |

</div>

<div class="memdoc">

Opaque cursor object.

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#cursor_object" class="el">Cursor objects</a>

<!-- -->

Since  
Added in version 3.1.

</div>

</div>

<span id="ga0184dcb59f6d85d735503dcaae809727"></span>

## <span class="permalink">[◆ ](#ga0184dcb59f6d85d735503dcaae809727)</span>GLFWmousebuttonfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWmousebuttonfun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int button, int action, int mods) |

</div>

<div class="memdoc">

This is the function pointer type for mouse button callback functions. A mouse button callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> button, <span class="keywordtype">int</span> action, <span class="keywordtype">int</span> mods)

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
| \[in\] | window | The window that received the event. |
| \[in\] | button | The <a href="/docs/glfw/v3-5-1/en/04-reference/11-mouse-buttons/" class="el">mouse button</a> that was pressed or released. |
| \[in\] | action | One of `GLFW_PRESS` or `GLFW_RELEASE`. Future releases may add more actions. |
| \[in\] | mods | Bit field describing which <a href="/docs/glfw/v3-5-1/en/04-reference/10-modifier-key-flags/" class="el">modifier keys</a> were held down. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_mouse_button" class="el">Mouse button input</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga6ab84420974d812bee700e45284a723c" class="el">glfwSetMouseButtonCallback</a>

<!-- -->

Since  
Added in version 1.0. **GLFW 3:** Added window handle and modifier mask parameters.

</div>

</div>

<span id="gad6fae41b3ac2e4209aaa87b596c57f68"></span>

## <span class="permalink">[◆ ](#gad6fae41b3ac2e4209aaa87b596c57f68)</span>GLFWcursorposfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWcursorposfun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, double xpos, double ypos) |

</div>

<div class="memdoc">

This is the function pointer type for cursor position callbacks. A cursor position callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">double</span> xpos, <span class="keywordtype">double</span> ypos);

</div>

</div>

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window that received the event. |
| \[in\] | xpos | The new cursor x-coordinate, relative to the left edge of the content area. |
| \[in\] | ypos | The new cursor y-coordinate, relative to the top edge of the content area. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#cursor_pos" class="el">Cursor position</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gac1f879ab7435d54d4d79bb469fe225d7" class="el">glfwSetCursorPosCallback</a>

<!-- -->

Since  
Added in version 3.0. Replaces `GLFWmouseposfun`.

</div>

</div>

<span id="gaa93dc4818ac9ab32532909d53a337cbe"></span>

## <span class="permalink">[◆ ](#gaa93dc4818ac9ab32532909d53a337cbe)</span>GLFWcursorenterfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWcursorenterfun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int entered) |

</div>

<div class="memdoc">

This is the function pointer type for cursor enter/leave callbacks. A cursor enter/leave callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> entered)

</div>

</div>

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window that received the event. |
| \[in\] | entered | `GLFW_TRUE` if the cursor entered the window's content area, or `GLFW_FALSE` if it left it. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#cursor_enter" class="el">Cursor enter/leave events</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gad27f8ad0142c038a281466c0966817d8" class="el">glfwSetCursorEnterCallback</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gaf656112c33de3efdb227fa58f0134cf5"></span>

## <span class="permalink">[◆ ](#gaf656112c33de3efdb227fa58f0134cf5)</span>GLFWscrollfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWscrollfun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, double xoffset, double yoffset) |

</div>

<div class="memdoc">

This is the function pointer type for scroll callbacks. A scroll callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">double</span> xoffset, <span class="keywordtype">double</span> yoffset)

</div>

</div>

Parameters  
|        |         |                                     |
|--------|---------|-------------------------------------|
| \[in\] | window  | The window that received the event. |
| \[in\] | xoffset | The scroll offset along the x-axis. |
| \[in\] | yoffset | The scroll offset along the y-axis. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#scrolling" class="el">Scroll input</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga571e45a030ae4061f746ed56cb76aede" class="el">glfwSetScrollCallback</a>

<!-- -->

Since  
Added in version 3.0. Replaces `GLFWmousewheelfun`.

</div>

</div>

<span id="ga5bd751b27b90f865d2ea613533f0453c"></span>

## <span class="permalink">[◆ ](#ga5bd751b27b90f865d2ea613533f0453c)</span>GLFWkeyfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWkeyfun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int key, int scancode, int action, int mods) |

</div>

<div class="memdoc">

This is the function pointer type for keyboard key callbacks. A keyboard key callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> key, <span class="keywordtype">int</span> scancode, <span class="keywordtype">int</span> action, <span class="keywordtype">int</span> mods)

</div>

</div>

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window that received the event. |
| \[in\] | key | The <a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/" class="el">keyboard key</a> that was pressed or released. |
| \[in\] | scancode | The platform-specific scancode of the key. |
| \[in\] | action | `GLFW_PRESS`, `GLFW_RELEASE` or `GLFW_REPEAT`. Future releases may add more actions. |
| \[in\] | mods | Bit field describing which <a href="/docs/glfw/v3-5-1/en/04-reference/10-modifier-key-flags/" class="el">modifier keys</a> were held down. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_key" class="el">Key input</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga1caf18159767e761185e49a3be019f8d" class="el">glfwSetKeyCallback</a>

<!-- -->

Since  
Added in version 1.0. **GLFW 3:** Added window handle, scancode and modifier mask parameters.

</div>

</div>

<span id="ga1ab90a55cf3f58639b893c0f4118cb6e"></span>

## <span class="permalink">[◆ ](#ga1ab90a55cf3f58639b893c0f4118cb6e)</span>GLFWcharfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWcharfun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, unsigned int codepoint) |

</div>

<div class="memdoc">

This is the function pointer type for Unicode character callbacks. A Unicode character callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">unsigned</span> <span class="keywordtype">int</span> codepoint)

</div>

</div>

Parameters  
|        |           |                                          |
|--------|-----------|------------------------------------------|
| \[in\] | window    | The window that received the event.      |
| \[in\] | codepoint | The Unicode code point of the character. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_char" class="el">Text input</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gab25c4a220fd8f5717718dbc487828996" class="el">glfwSetCharCallback</a>

<!-- -->

Since  
Added in version 2.4. **GLFW 3:** Added window handle parameter.

</div>

</div>

<span id="gac3cf64f90b6219c05ac7b7822d5a4b8f"></span>

## <span class="permalink">[◆ ](#gac3cf64f90b6219c05ac7b7822d5a4b8f)</span>GLFWcharmodsfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWcharmodsfun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, unsigned int codepoint, int mods) |

</div>

<div class="memdoc">

This is the function pointer type for Unicode character with modifiers callbacks. It is called for each input character, regardless of what modifier keys are held down. A Unicode character with modifiers callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">unsigned</span> <span class="keywordtype">int</span> codepoint, <span class="keywordtype">int</span> mods)

</div>

</div>

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window that received the event. |
| \[in\] | codepoint | The Unicode code point of the character. |
| \[in\] | mods | Bit field describing which <a href="/docs/glfw/v3-5-1/en/04-reference/10-modifier-key-flags/" class="el">modifier keys</a> were held down. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_char" class="el">Text input</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga0b7f4ad13c2b17435ff13b6dcfb4e43c" class="el">glfwSetCharModsCallback</a>

<!-- -->

**<a href="/docs/glfw/v3-5-1/en/04-reference/22-deprecated-list/#_deprecated000001" class="el">Deprecated:</a>**  
Scheduled for removal in version 4.0.

<!-- -->

Since  
Added in version 3.1.

</div>

</div>

<span id="gaaba73c3274062c18723b7f05862d94b2"></span>

## <span class="permalink">[◆ ](#gaaba73c3274062c18723b7f05862d94b2)</span>GLFWdropfun

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef void(\* GLFWdropfun) (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*window, int path_count, const char \*paths\[\]) |

</div>

<div class="memdoc">

This is the function pointer type for path drop callbacks. A path drop callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> path_count, <span class="keyword">const</span> <span class="keywordtype">char</span>\* paths\[\])

</div>

</div>

Parameters  
|        |            |                                                     |
|--------|------------|-----------------------------------------------------|
| \[in\] | window     | The window that received the event.                 |
| \[in\] | path_count | The number of dropped paths.                        |
| \[in\] | paths      | The UTF-8 encoded file and/or directory path names. |

<!-- -->

Pointer lifetime  
The path array and its strings are valid until the callback function returns.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#path_drop" class="el">Path drop input</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gab773f0ee0a07cff77a210cea40bc1f6b" class="el">glfwSetDropCallback</a>

<!-- -->

Since  
Added in version 3.1.

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

This is the function pointer type for joystick configuration callbacks. A joystick configuration callback function has the following signature:

<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<span class="keywordtype">int</span> jid, <span class="keywordtype">int</span> event)

</div>

</div>

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | jid | The joystick that was connected or disconnected. |
| \[in\] | event | One of `GLFW_CONNECTED` or `GLFW_DISCONNECTED`. Future releases may add more events. |

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#joystick_event" class="el">Joystick configuration changes</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c" class="el">glfwSetJoystickCallback</a>

<!-- -->

Since  
Added in version 3.2.

</div>

</div>

<span id="ga61acfb1f28f751438dd221225c5e725d"></span>

## <span class="permalink">[◆ ](#ga61acfb1f28f751438dd221225c5e725d)</span>GLFWgamepadstate

<div class="memitem">

<div class="memproto">

|  |
|----|
| typedef struct <a href="/docs/glfw/v3-5-1/en/04-reference/18-glfwgamepadstate/" class="el">GLFWgamepadstate</a> <a href="/docs/glfw/v3-5-1/en/04-reference/18-glfwgamepadstate/" class="el">GLFWgamepadstate</a> |

</div>

<div class="memdoc">

This describes the input state of a gamepad.

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#gamepad" class="el">Gamepad input</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gadccddea8bce6113fa459de379ddaf051" class="el">glfwGetGamepadState</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

## Function Documentation

<span id="gaf5b859dbe19bdf434e42695ea45cc5f4"></span>

## <span class="permalink">[◆ ](#gaf5b859dbe19bdf434e42695ea45cc5f4)</span>glfwGetInputMode()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetInputMode | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *mode*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function returns the value of an input option for the specified window. The mode must be one of <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_CURSOR" class="el">GLFW_CURSOR</a>, <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_STICKY_KEYS" class="el">GLFW_STICKY_KEYS</a>, <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_STICKY_MOUSE_BUTTONS" class="el">GLFW_STICKY_MOUSE_BUTTONS</a>, <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_LOCK_KEY_MODS" class="el">GLFW_LOCK_KEY_MODS</a> or <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_RAW_MOUSE_MOTION" class="el">GLFW_RAW_MOUSE_MOTION</a>.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window to query. |
| \[in\] | mode | One of `GLFW_CURSOR`, `GLFW_STICKY_KEYS`, `GLFW_STICKY_MOUSE_BUTTONS`, `GLFW_LOCK_KEY_MODS` or `GLFW_RAW_MOUSE_MOTION`. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa92336e173da9c8834558b54ee80563b" class="el">glfwSetInputMode</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gaa92336e173da9c8834558b54ee80563b"></span>

## <span class="permalink">[◆ ](#gaa92336e173da9c8834558b54ee80563b)</span>glfwSetInputMode()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetInputMode | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *mode*, |
|  |  | int  | *value*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets an input mode option for the specified window. The mode must be one of <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_CURSOR" class="el">GLFW_CURSOR</a>, <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_STICKY_KEYS" class="el">GLFW_STICKY_KEYS</a>, <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_STICKY_MOUSE_BUTTONS" class="el">GLFW_STICKY_MOUSE_BUTTONS</a>, <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_LOCK_KEY_MODS" class="el">GLFW_LOCK_KEY_MODS</a> <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_RAW_MOUSE_MOTION" class="el">GLFW_RAW_MOUSE_MOTION</a>, or <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_UNLIMITED_MOUSE_BUTTONS" class="el">GLFW_UNLIMITED_MOUSE_BUTTONS</a>.

If the mode is `GLFW_CURSOR`, the value must be one of the following cursor modes:

- `GLFW_CURSOR_NORMAL` makes the cursor visible and behaving normally.
- `GLFW_CURSOR_HIDDEN` makes the cursor invisible when it is over the content area of the window but does not restrict the cursor from leaving.
- `GLFW_CURSOR_DISABLED` hides and grabs the cursor, providing virtual and unlimited cursor movement. This is useful for implementing for example 3D camera controls.
- `GLFW_CURSOR_CAPTURED` makes the cursor visible and confines it to the content area of the window.

If the mode is `GLFW_STICKY_KEYS`, the value must be either `GLFW_TRUE` to enable sticky keys, or `GLFW_FALSE` to disable it. If sticky keys are enabled, a key press will ensure that <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gadd341da06bc8d418b4dc3a3518af9ad2" class="el">glfwGetKey</a> returns `GLFW_PRESS` the next time it is called even if the key had been released before the call. This is useful when you are only interested in whether keys have been pressed but not when or in which order.

If the mode is `GLFW_STICKY_MOUSE_BUTTONS`, the value must be either `GLFW_TRUE` to enable sticky mouse buttons, or `GLFW_FALSE` to disable it. If sticky mouse buttons are enabled, a mouse button press will ensure that <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gac1473feacb5996c01a7a5a33b5066704" class="el">glfwGetMouseButton</a> returns `GLFW_PRESS` the next time it is called even if the mouse button had been released before the call. This is useful when you are only interested in whether mouse buttons have been pressed but not when or in which order.

If the mode is `GLFW_LOCK_KEY_MODS`, the value must be either `GLFW_TRUE` to enable lock key modifier bits, or `GLFW_FALSE` to disable them. If enabled, callbacks that receive modifier bits will also have the <a href="/docs/glfw/v3-5-1/en/04-reference/10-modifier-key-flags/#gaefeef8fcf825a6e43e241b337897200f" class="el">GLFW_MOD_CAPS_LOCK</a> bit set when the event was generated with Caps Lock on, and the <a href="/docs/glfw/v3-5-1/en/04-reference/10-modifier-key-flags/#ga64e020b8a42af8376e944baf61feecbe" class="el">GLFW_MOD_NUM_LOCK</a> bit when Num Lock was on.

If the mode is `GLFW_RAW_MOUSE_MOTION`, the value must be either `GLFW_TRUE` to enable raw (unscaled and unaccelerated) mouse motion when the cursor is disabled, or `GLFW_FALSE` to disable it. If raw motion is not supported, attempting to set this will emit <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>. Call <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gae4ee0dbd0d256183e1ea4026d897e1c2" class="el">glfwRawMouseMotionSupported</a> to check for support.

If the mode is `GLFW_UNLIMITED_MOUSE_BUTTONS`, the value must be either `GLFW_TRUE` to disable the mouse button limit when calling the mouse button callback, or `GLFW_FALSE` to limit the mouse buttons sent to the callback to the mouse button token values up to `GLFW_MOUSE_BUTTON_LAST`.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose input mode to set. |
| \[in\] | mode | One of `GLFW_CURSOR`, `GLFW_STICKY_KEYS`, `GLFW_STICKY_MOUSE_BUTTONS`, `GLFW_LOCK_KEY_MODS` or `GLFW_RAW_MOUSE_MOTION`. |
| \[in\] | value | The new value of the specified input mode. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> (see above).

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaf5b859dbe19bdf434e42695ea45cc5f4" class="el">glfwGetInputMode</a>

<!-- -->

Since  
Added in version 3.0. Replaces `glfwEnable` and `glfwDisable`.

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

This function returns whether raw mouse motion is supported on the current system. This status does not change after GLFW has been initialized so you only need to check this once. If you attempt to enable raw motion on a system that does not support it, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> will be emitted.

Raw mouse motion is closer to the actual motion of the mouse across a surface. It is not affected by the scaling and acceleration applied to the motion of the desktop cursor. That processing is suitable for a cursor while raw motion is better for controlling for example a 3D camera. Because of this, raw mouse motion is only provided when the cursor is disabled.

Returns  
`GLFW_TRUE` if raw mouse motion is supported on the current machine, or `GLFW_FALSE` otherwise.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#raw_mouse_motion" class="el">Raw mouse motion</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa92336e173da9c8834558b54ee80563b" class="el">glfwSetInputMode</a>

<!-- -->

Since  
Added in version 3.3.

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

This function returns the name of the specified printable key, encoded as UTF-8. This is typically the character that key would produce without any modifier keys, intended for displaying key bindings to the user. For dead keys, it is typically the diacritic it would add to a character.

**Do not use this function** for <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_char" class="el">text input</a>. You will break text input for many languages even if it happens to work for yours.

If the key is `GLFW_KEY_UNKNOWN`, the scancode is used to identify the key, otherwise the scancode is ignored. If you specify a non-printable key, or `GLFW_KEY_UNKNOWN` and a scancode that maps to a non-printable key, this function returns `NULL` but does not emit an error.

This behavior allows you to always pass in the arguments in the <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_key" class="el">key callback</a> without modification.

The printable keys are:

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

Names for printable keys depend on keyboard layout, while names for non-printable keys are the same across layouts but depend on the application language and should be localized along with other user interface text.

Parameters  
|        |          |                                          |
|--------|----------|------------------------------------------|
| \[in\] | key      | The key to query, or `GLFW_KEY_UNKNOWN`. |
| \[in\] | scancode | The scancode of the key to query.        |

<!-- -->

Returns  
The UTF-8 encoded, layout-specific name of the key, or `NULL`.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
The contents of the returned string may change when a keyboard layout change event is received.

<!-- -->

Pointer lifetime  
The returned string is allocated and freed by GLFW. You should not free it yourself. It is valid until the library is terminated.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_key_name" class="el">Key names</a>

<!-- -->

Since  
Added in version 3.2.

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

This function returns the platform-specific scancode of the specified key.

If the specified <a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/" class="el">key token</a> corresponds to a physical key not supported on the current platform then this method will return `-1`. Calling this function with anything other than a key token will return `-1` and generate a <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> error.

Parameters  
|        |     |                                                          |
|--------|-----|----------------------------------------------------------|
| \[in\] | key | Any <a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/" class="el">key token</a>. |

<!-- -->

Returns  
The platform-specific scancode for the key, or `-1` if the key is not supported on the current platform or an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_key" class="el">Key input</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="gadd341da06bc8d418b4dc3a3518af9ad2"></span>

## <span class="permalink">[◆ ](#gadd341da06bc8d418b4dc3a3518af9ad2)</span>glfwGetKey()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetKey | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *key*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function returns the last state reported for the specified key to the specified window. The returned state is one of `GLFW_PRESS` or `GLFW_RELEASE`. The action `GLFW_REPEAT` is only reported to the key callback.

If the <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_STICKY_KEYS" class="el">GLFW_STICKY_KEYS</a> input mode is enabled, this function returns `GLFW_PRESS` the first time you call it for a key that was pressed, even if that key has already been released.

The key functions deal with physical keys, with <a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/" class="el">key tokens</a> named after their use on the standard US keyboard layout. If you want to input text, use the Unicode character callback instead.

The <a href="/docs/glfw/v3-5-1/en/04-reference/10-modifier-key-flags/" class="el">modifier key bit masks</a> are not key tokens and cannot be used with this function.

**Do not use this function** to implement <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_char" class="el">text input</a>.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The desired window. |
| \[in\] | key | The desired <a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/" class="el">keyboard key</a>. `GLFW_KEY_UNKNOWN` is not a valid key for this function. |

<!-- -->

Returns  
One of `GLFW_PRESS` or `GLFW_RELEASE`.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_key" class="el">Key input</a>

<!-- -->

Since  
Added in version 1.0. **GLFW 3:** Added window handle parameter.

</div>

</div>

<span id="gac1473feacb5996c01a7a5a33b5066704"></span>

## <span class="permalink">[◆ ](#gac1473feacb5996c01a7a5a33b5066704)</span>glfwGetMouseButton()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetMouseButton | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | int  | *button*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function returns the last state reported for the specified mouse button to the specified window. The returned state is one of `GLFW_PRESS` or `GLFW_RELEASE`.

If the <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_STICKY_MOUSE_BUTTONS" class="el">GLFW_STICKY_MOUSE_BUTTONS</a> input mode is enabled, this function returns `GLFW_PRESS` the first time you call it for a mouse button that was pressed, even if that mouse button has already been released.

The <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_UNLIMITED_MOUSE_BUTTONS" class="el">GLFW_UNLIMITED_MOUSE_BUTTONS</a> input mode does not effect the limit on buttons which can be polled with this function.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The desired window. |
| \[in\] | button | The desired <a href="/docs/glfw/v3-5-1/en/04-reference/11-mouse-buttons/" class="el">mouse button token</a>. |

<!-- -->

Returns  
One of `GLFW_PRESS` or `GLFW_RELEASE`.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_mouse_button" class="el">Mouse button input</a>

<!-- -->

Since  
Added in version 1.0. **GLFW 3:** Added window handle parameter.

</div>

</div>

<span id="ga01d37b6c40133676b9cea60ca1d7c0cc"></span>

## <span class="permalink">[◆ ](#ga01d37b6c40133676b9cea60ca1d7c0cc)</span>glfwGetCursorPos()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwGetCursorPos | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | double \*  | *xpos*, |
|  |  | double \*  | *ypos*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function returns the position of the cursor, in screen coordinates, relative to the upper-left corner of the content area of the specified window.

If the cursor is disabled (with `GLFW_CURSOR_DISABLED`) then the cursor position is unbounded and limited only by the minimum and maximum values of a `double`.

The coordinate can be converted to their integer equivalents with the `floor` function. Casting directly to an integer type works for positive coordinates, but fails for negative ones.

Any or all of the position arguments may be `NULL`. If an error occurs, all non-`NULL` position arguments will be set to zero.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The desired window. |
| \[out\] | xpos | Where to store the cursor x-coordinate, relative to the left edge of the content area, or `NULL`. |
| \[out\] | ypos | Where to store the cursor y-coordinate, relative to the to top edge of the content area, or `NULL`. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#cursor_pos" class="el">Cursor position</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga04b03af936d906ca123c8f4ee08b39e7" class="el">glfwSetCursorPos</a>

<!-- -->

Since  
Added in version 3.0. Replaces `glfwGetMousePos`.

</div>

</div>

<span id="ga04b03af936d906ca123c8f4ee08b39e7"></span>

## <span class="permalink">[◆ ](#ga04b03af936d906ca123c8f4ee08b39e7)</span>glfwSetCursorPos()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetCursorPos | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | double  | *xpos*, |
|  |  | double  | *ypos*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the position, in screen coordinates, of the cursor relative to the upper-left corner of the content area of the specified window. The window must have input focus. If the window does not have input focus when this function is called, it fails silently.

**Do not use this function** to implement things like camera controls. GLFW already provides the `GLFW_CURSOR_DISABLED` cursor mode that hides the cursor, transparently re-centers it and provides unconstrained cursor motion. See <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa92336e173da9c8834558b54ee80563b" class="el">glfwSetInputMode</a> for more information.

If the cursor mode is `GLFW_CURSOR_DISABLED` then the cursor position is unconstrained and limited only by the minimum and maximum values of a `double`.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The desired window. |
| \[in\] | xpos | The desired x-coordinate, relative to the left edge of the content area. |
| \[in\] | ypos | The desired y-coordinate, relative to the top edge of the content area. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a> (see remarks).

<!-- -->

Remarks  
**Wayland:** This function will only work when the cursor mode is `GLFW_CURSOR_DISABLED`, otherwise it will emit <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#cursor_pos" class="el">Cursor position</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga01d37b6c40133676b9cea60ca1d7c0cc" class="el">glfwGetCursorPos</a>

<!-- -->

Since  
Added in version 3.0. Replaces `glfwSetMousePos`.

</div>

</div>

<span id="ga556f604f73af156c0db0e97c081373c3"></span>

## <span class="permalink">[◆ ](#ga556f604f73af156c0db0e97c081373c3)</span>glfwCreateCursor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> \* glfwCreateCursor | ( | const <a href="/docs/glfw/v3-5-1/en/04-reference/20-glfwimage/" class="el">GLFWimage</a> \*  | *image*, |
|  |  | int  | *xhot*, |
|  |  | int  | *yhot*  |
|  | ) |  |  |

</div>

<div class="memdoc">

Creates a new custom cursor image that can be set for a window with <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gad3b4f38c8d5dae036bc8fa959e18343e" class="el">glfwSetCursor</a>. The cursor can be destroyed with <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga81b952cd1764274d0db7fb3c5a79ba6a" class="el">glfwDestroyCursor</a>. Any remaining cursors are destroyed by <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a>.

The pixels are 32-bit, little-endian, non-premultiplied RGBA, i.e. eight bits per channel with the red channel first. They are arranged canonically as packed sequential rows, starting from the top-left corner.

The cursor hotspot is specified in pixels, relative to the upper-left corner of the cursor image. Like all other coordinate systems in GLFW, the X-axis points to the right and the Y-axis points down.

Parameters  
|        |       |                                                             |
|--------|-------|-------------------------------------------------------------|
| \[in\] | image | The desired cursor image.                                   |
| \[in\] | xhot  | The desired x-coordinate, in pixels, of the cursor hotspot. |
| \[in\] | yhot  | The desired y-coordinate, in pixels, of the cursor hotspot. |

<!-- -->

Returns  
The handle of the created cursor, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Pointer lifetime  
The specified image data is copied before this function returns.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#cursor_object" class="el">Cursor objects</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga81b952cd1764274d0db7fb3c5a79ba6a" class="el">glfwDestroyCursor</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaf2fb2eb2c9dd842d1cef8a34e3c6403e" class="el">glfwCreateStandardCursor</a>

<!-- -->

Since  
Added in version 3.1.

</div>

</div>

<span id="gaf2fb2eb2c9dd842d1cef8a34e3c6403e"></span>

## <span class="permalink">[◆ ](#gaf2fb2eb2c9dd842d1cef8a34e3c6403e)</span>glfwCreateStandardCursor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> \* glfwCreateStandardCursor | ( | int  | *shape* | ) |  |

</div>

<div class="memdoc">

Returns a cursor with a standard shape, that can be set for a window with <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gad3b4f38c8d5dae036bc8fa959e18343e" class="el">glfwSetCursor</a>. The images for these cursors come from the system cursor theme and their exact appearance will vary between platforms.

Most of these shapes are guaranteed to exist on every supported platform but a few may not be present. See the table below for details.

| Cursor shape | Windows | macOS | X11 | Wayland |
|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/16-standard-cursor-shapes/#ga8ab0e717245b85506cb0eaefdea39d0a" class="el">GLFW_ARROW_CURSOR</a> | Yes | Yes | Yes | Yes |
| <a href="/docs/glfw/v3-5-1/en/04-reference/16-standard-cursor-shapes/#ga36185f4375eaada1b04e431244774c86" class="el">GLFW_IBEAM_CURSOR</a> | Yes | Yes | Yes | Yes |
| <a href="/docs/glfw/v3-5-1/en/04-reference/16-standard-cursor-shapes/#ga8af88c0ea05ab9e8f9ac1530e8873c22" class="el">GLFW_CROSSHAIR_CURSOR</a> | Yes | Yes | Yes | Yes |
| <a href="/docs/glfw/v3-5-1/en/04-reference/16-standard-cursor-shapes/#gaad01a50929fb515bf27e4462c51f6ed0" class="el">GLFW_POINTING_HAND_CURSOR</a> | Yes | Yes | Yes | Yes |
| <a href="/docs/glfw/v3-5-1/en/04-reference/16-standard-cursor-shapes/#ga2010a43dc1050a7c9154148a63cf01ad" class="el">GLFW_RESIZE_EW_CURSOR</a> | Yes | Yes | Yes | Yes |
| <a href="/docs/glfw/v3-5-1/en/04-reference/16-standard-cursor-shapes/#gaa59214e8cdc8c8adf08fdf125ed68388" class="el">GLFW_RESIZE_NS_CURSOR</a> | Yes | Yes | Yes | Yes |
| <a href="/docs/glfw/v3-5-1/en/04-reference/16-standard-cursor-shapes/#gadf2c0a495ec9cef4e1a364cc99aa78da" class="el">GLFW_RESIZE_NWSE_CURSOR</a> | Yes | Yes<sup>1</sup> | Maybe<sup>2</sup> | Maybe<sup>2</sup> |
| <a href="/docs/glfw/v3-5-1/en/04-reference/16-standard-cursor-shapes/#gab06bba3b407f92807ba9b48de667a323" class="el">GLFW_RESIZE_NESW_CURSOR</a> | Yes | Yes<sup>1</sup> | Maybe<sup>2</sup> | Maybe<sup>2</sup> |
| <a href="/docs/glfw/v3-5-1/en/04-reference/16-standard-cursor-shapes/#ga3a5f4811155f95ccafbbb4c9a899fc1d" class="el">GLFW_RESIZE_ALL_CURSOR</a> | Yes | Yes | Yes | Yes |
| <a href="/docs/glfw/v3-5-1/en/04-reference/16-standard-cursor-shapes/#ga297c503095b034bc8891393b637844b1" class="el">GLFW_NOT_ALLOWED_CURSOR</a> | Yes | Yes | Maybe<sup>2</sup> | Maybe<sup>2</sup> |

1\) This uses a private system API and may fail in the future.

2\) This uses a newer standard that not all cursor themes support.

If the requested shape is not available, this function emits a <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga09d6943923a70ddef3a085f5baee786c" class="el">GLFW_CURSOR_UNAVAILABLE</a> error and returns `NULL`.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | shape | One of the <a href="/docs/glfw/v3-5-1/en/04-reference/16-standard-cursor-shapes/" class="el">standard shapes</a>. |

<!-- -->

Returns  
A new cursor ready to use or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga09d6943923a70ddef3a085f5baee786c" class="el">GLFW_CURSOR_UNAVAILABLE</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#cursor_standard" class="el">Standard cursor creation</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga556f604f73af156c0db0e97c081373c3" class="el">glfwCreateCursor</a>

<!-- -->

Since  
Added in version 3.1.

</div>

</div>

<span id="ga81b952cd1764274d0db7fb3c5a79ba6a"></span>

## <span class="permalink">[◆ ](#ga81b952cd1764274d0db7fb3c5a79ba6a)</span>glfwDestroyCursor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwDestroyCursor | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> \*  | *cursor* | ) |  |

</div>

<div class="memdoc">

This function destroys a cursor previously created with <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga556f604f73af156c0db0e97c081373c3" class="el">glfwCreateCursor</a>. Any remaining cursors will be destroyed by <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901" class="el">glfwTerminate</a>.

If the specified cursor is current for any window, that window will be reverted to the default cursor. This does not affect the cursor mode.

Parameters  
|        |        |                               |
|--------|--------|-------------------------------|
| \[in\] | cursor | The cursor object to destroy. |

<!-- -->

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
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#cursor_object" class="el">Cursor objects</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga556f604f73af156c0db0e97c081373c3" class="el">glfwCreateCursor</a>

<!-- -->

Since  
Added in version 3.1.

</div>

</div>

<span id="gad3b4f38c8d5dae036bc8fa959e18343e"></span>

## <span class="permalink">[◆ ](#gad3b4f38c8d5dae036bc8fa959e18343e)</span>glfwSetCursor()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetCursor | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4" class="el">GLFWcursor</a> \*  | *cursor*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the cursor image to be used when the cursor is over the content area of the specified window. The set cursor will only be visible when the <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#cursor_mode" class="el">cursor mode</a> of the window is `GLFW_CURSOR_NORMAL`.

On some platforms, the set cursor may not be visible unless the window also has input focus.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window to set the cursor for. |
| \[in\] | cursor | The cursor to set, or `NULL` to switch back to the default arrow cursor. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#cursor_object" class="el">Cursor objects</a>

<!-- -->

Since  
Added in version 3.1.

</div>

</div>

<span id="ga1caf18159767e761185e49a3be019f8d"></span>

## <span class="permalink">[◆ ](#ga1caf18159767e761185e49a3be019f8d)</span>glfwSetKeyCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga5bd751b27b90f865d2ea613533f0453c" class="el">GLFWkeyfun</a> glfwSetKeyCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga5bd751b27b90f865d2ea613533f0453c" class="el">GLFWkeyfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the key callback of the specified window, which is called when a key is pressed, repeated or released.

The key functions deal with physical keys, with layout independent <a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/" class="el">key tokens</a> named after their values in the standard US keyboard layout. If you want to input text, use the <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gab25c4a220fd8f5717718dbc487828996" class="el">character callback</a> instead.

When a window loses input focus, it will generate synthetic key release events for all pressed keys with associated key tokens. You can tell these events from user-generated events by the fact that the synthetic ones are generated after the focus loss event has been processed, i.e. after the <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gac2d83c4a10f071baf841f6730528e66c" class="el">window focus callback</a> has been called.

The scancode of a key is specific to that platform or sometimes even to that machine. Scancodes are intended to allow users to bind keys that don't have a GLFW key token. Such keys have `key` set to `GLFW_KEY_UNKNOWN`, their state is not saved and so it cannot be queried with <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gadd341da06bc8d418b4dc3a3518af9ad2" class="el">glfwGetKey</a>.

Sometimes GLFW needs to generate synthetic key events, in which case the scancode may be zero.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose callback to set. |
| \[in\] | callback | The new key callback, or `NULL` to remove the currently set callback. |

<!-- -->

Returns  
The previously set callback, or `NULL` if no callback was set or the library had not been <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">initialized</a>.

<!-- -->

Callback signature  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> key, <span class="keywordtype">int</span> scancode, <span class="keywordtype">int</span> action, <span class="keywordtype">int</span> mods)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga5bd751b27b90f865d2ea613533f0453c" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_key" class="el">Key input</a>

<!-- -->

Since  
Added in version 1.0. **GLFW 3:** Added window handle parameter and return value.

</div>

</div>

<span id="gab25c4a220fd8f5717718dbc487828996"></span>

## <span class="permalink">[◆ ](#gab25c4a220fd8f5717718dbc487828996)</span>glfwSetCharCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga1ab90a55cf3f58639b893c0f4118cb6e" class="el">GLFWcharfun</a> glfwSetCharCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga1ab90a55cf3f58639b893c0f4118cb6e" class="el">GLFWcharfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the character callback of the specified window, which is called when a Unicode character is input.

The character callback is intended for Unicode text input. As it deals with characters, it is keyboard layout dependent, whereas the <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga1caf18159767e761185e49a3be019f8d" class="el">key callback</a> is not. Characters do not map 1:1 to physical keys, as a key may produce zero, one or more characters. If you want to know whether a specific physical key was pressed or released, see the key callback instead.

The character callback behaves as system text input normally does and will not be called if modifier keys are held down that would prevent normal text input on that platform, for example a Super (Command) key on macOS or Alt key on Windows.

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

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">unsigned</span> <span class="keywordtype">int</span> codepoint)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga1ab90a55cf3f58639b893c0f4118cb6e" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_char" class="el">Text input</a>

<!-- -->

Since  
Added in version 2.4. **GLFW 3:** Added window handle parameter and return value.

</div>

</div>

<span id="ga0b7f4ad13c2b17435ff13b6dcfb4e43c"></span>

## <span class="permalink">[◆ ](#ga0b7f4ad13c2b17435ff13b6dcfb4e43c)</span>glfwSetCharModsCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gac3cf64f90b6219c05ac7b7822d5a4b8f" class="el">GLFWcharmodsfun</a> glfwSetCharModsCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gac3cf64f90b6219c05ac7b7822d5a4b8f" class="el">GLFWcharmodsfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the character with modifiers callback of the specified window, which is called when a Unicode character is input regardless of what modifier keys are used.

The character with modifiers callback is intended for implementing custom Unicode character input. For regular Unicode text input, see the <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gab25c4a220fd8f5717718dbc487828996" class="el">character callback</a>. Like the character callback, the character with modifiers callback deals with characters and is keyboard layout dependent. Characters do not map 1:1 to physical keys, as a key may produce zero, one or more characters. If you want to know whether a specific physical key was pressed or released, see the <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga1caf18159767e761185e49a3be019f8d" class="el">key callback</a> instead.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose callback to set. |
| \[in\] | callback | The new callback, or `NULL` to remove the currently set callback. |

<!-- -->

Returns  
The previously set callback, or `NULL` if no callback was set or an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Callback signature  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">unsigned</span> <span class="keywordtype">int</span> codepoint, <span class="keywordtype">int</span> mods)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gac3cf64f90b6219c05ac7b7822d5a4b8f" class="el">function pointer type</a>.

<!-- -->

**<a href="/docs/glfw/v3-5-1/en/04-reference/22-deprecated-list/#_deprecated000002" class="el">Deprecated:</a>**  
Scheduled for removal in version 4.0.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_char" class="el">Text input</a>

<!-- -->

Since  
Added in version 3.1.

</div>

</div>

<span id="ga6ab84420974d812bee700e45284a723c"></span>

## <span class="permalink">[◆ ](#ga6ab84420974d812bee700e45284a723c)</span>glfwSetMouseButtonCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga0184dcb59f6d85d735503dcaae809727" class="el">GLFWmousebuttonfun</a> glfwSetMouseButtonCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga0184dcb59f6d85d735503dcaae809727" class="el">GLFWmousebuttonfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the mouse button callback of the specified window, which is called when a mouse button is pressed or released.

When a window loses input focus, it will generate synthetic mouse button release events for all pressed mouse buttons with associated button tokens. You can tell these events from user-generated events by the fact that the synthetic ones are generated after the focus loss event has been processed, i.e. after the <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gac2d83c4a10f071baf841f6730528e66c" class="el">window focus callback</a> has been called.

The reported `button` value can be higher than `GLFW_MOUSE_BUTTON_LAST` if the button does not have an associated <a href="/docs/glfw/v3-5-1/en/04-reference/11-mouse-buttons/" class="el">button token</a> and the <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_UNLIMITED_MOUSE_BUTTONS" class="el">GLFW_UNLIMITED_MOUSE_BUTTONS</a> input mode is set.

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

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> button, <span class="keywordtype">int</span> action, <span class="keywordtype">int</span> mods)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga0184dcb59f6d85d735503dcaae809727" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_mouse_button" class="el">Mouse button input</a>

<!-- -->

Since  
Added in version 1.0. **GLFW 3:** Added window handle parameter and return value.

</div>

</div>

<span id="gac1f879ab7435d54d4d79bb469fe225d7"></span>

## <span class="permalink">[◆ ](#gac1f879ab7435d54d4d79bb469fe225d7)</span>glfwSetCursorPosCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gad6fae41b3ac2e4209aaa87b596c57f68" class="el">GLFWcursorposfun</a> glfwSetCursorPosCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gad6fae41b3ac2e4209aaa87b596c57f68" class="el">GLFWcursorposfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the cursor position callback of the specified window, which is called when the cursor is moved. The callback is provided with the position, in screen coordinates, relative to the upper-left corner of the content area of the window.

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

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">double</span> xpos, <span class="keywordtype">double</span> ypos);

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gad6fae41b3ac2e4209aaa87b596c57f68" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#cursor_pos" class="el">Cursor position</a>

<!-- -->

Since  
Added in version 3.0. Replaces `glfwSetMousePosCallback`.

</div>

</div>

<span id="gad27f8ad0142c038a281466c0966817d8"></span>

## <span class="permalink">[◆ ](#gad27f8ad0142c038a281466c0966817d8)</span>glfwSetCursorEnterCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa93dc4818ac9ab32532909d53a337cbe" class="el">GLFWcursorenterfun</a> glfwSetCursorEnterCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa93dc4818ac9ab32532909d53a337cbe" class="el">GLFWcursorenterfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the cursor boundary crossing callback of the specified window, which is called when the cursor enters or leaves the content area of the window.

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

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> entered)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa93dc4818ac9ab32532909d53a337cbe" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#cursor_enter" class="el">Cursor enter/leave events</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga571e45a030ae4061f746ed56cb76aede"></span>

## <span class="permalink">[◆ ](#ga571e45a030ae4061f746ed56cb76aede)</span>glfwSetScrollCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaf656112c33de3efdb227fa58f0134cf5" class="el">GLFWscrollfun</a> glfwSetScrollCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaf656112c33de3efdb227fa58f0134cf5" class="el">GLFWscrollfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the scroll callback of the specified window, which is called when a scrolling device is used, such as a mouse wheel or scrolling area of a touchpad.

The scroll callback receives all scrolling input, like that from a mouse wheel or a touchpad scrolling area.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose callback to set. |
| \[in\] | callback | The new scroll callback, or `NULL` to remove the currently set callback. |

<!-- -->

Returns  
The previously set callback, or `NULL` if no callback was set or the library had not been <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">initialized</a>.

<!-- -->

Callback signature  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">double</span> xoffset, <span class="keywordtype">double</span> yoffset)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaf656112c33de3efdb227fa58f0134cf5" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#scrolling" class="el">Scroll input</a>

<!-- -->

Since  
Added in version 3.0. Replaces `glfwSetMouseWheelCallback`.

</div>

</div>

<span id="gab773f0ee0a07cff77a210cea40bc1f6b"></span>

## <span class="permalink">[◆ ](#gab773f0ee0a07cff77a210cea40bc1f6b)</span>glfwSetDropCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaaba73c3274062c18723b7f05862d94b2" class="el">GLFWdropfun</a> glfwSetDropCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaaba73c3274062c18723b7f05862d94b2" class="el">GLFWdropfun</a>  | *callback*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the path drop callback of the specified window, which is called when one or more dragged paths are dropped on the window.

Because the path array and its strings may have been generated specifically for that event, they are not guaranteed to be valid after the callback has returned. If you wish to use them after the callback returns, you need to make a deep copy.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose callback to set. |
| \[in\] | callback | The new file drop callback, or `NULL` to remove the currently set callback. |

<!-- -->

Returns  
The previously set callback, or `NULL` if no callback was set or the library had not been <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">initialized</a>.

<!-- -->

Callback signature  
<div class="fragment">

<div class="line">

<span class="keywordtype">void</span> function_name(<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="code hl_typedef">GLFWwindow</a>\* window, <span class="keywordtype">int</span> path_count, <span class="keyword">const</span> <span class="keywordtype">char</span>\* paths\[\])

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaaba73c3274062c18723b7f05862d94b2" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#path_drop" class="el">Path drop input</a>

<!-- -->

Since  
Added in version 3.1.

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

This function returns whether the specified joystick is present.

There is no need to call this function before other functions that accept a joystick ID, as they all check for presence before performing any other work.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | jid | The <a href="/docs/glfw/v3-5-1/en/04-reference/12-joysticks/" class="el">joystick</a> to query. |

<!-- -->

Returns  
`GLFW_TRUE` if the joystick is present, or `GLFW_FALSE` otherwise.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#joystick" class="el">Joystick input</a>

<!-- -->

Since  
Added in version 3.0. Replaces `glfwGetJoystickParam`.

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

This function returns the values of all axes of the specified joystick. Each element in the array is a value between -1.0 and 1.0.

If the specified joystick is not present this function will return `NULL` but will not generate an error. This can be used instead of first calling <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a>.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | jid | The <a href="/docs/glfw/v3-5-1/en/04-reference/12-joysticks/" class="el">joystick</a> to query. |
| \[out\] | count | Where to store the number of axis values in the returned array. This is set to zero if the joystick is not present or an error occurred. |

<!-- -->

Returns  
An array of axis values, or `NULL` if the joystick is not present or an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Pointer lifetime  
The returned array is allocated and freed by GLFW. You should not free it yourself. It is valid until the specified joystick is disconnected or the library is terminated.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#joystick_axis" class="el">Joystick axis states</a>

<!-- -->

Since  
Added in version 3.0. Replaces `glfwGetJoystickPos`.

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

This function returns the state of all buttons of the specified joystick. Each element in the array is either `GLFW_PRESS` or `GLFW_RELEASE`.

For backward compatibility with earlier versions that did not have <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga06e660841b3e79c54da4f54a932c5a2c" class="el">glfwGetJoystickHats</a>, the button array also includes all hats, each represented as four buttons. The hats are in the same order as returned by **glfwGetJoystickHats** and are in the order *up*, *right*, *down* and *left*. To disable these extra buttons, set the <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#GLFW_JOYSTICK_HAT_BUTTONS" class="el">GLFW_JOYSTICK_HAT_BUTTONS</a> init hint before initialization.

If the specified joystick is not present this function will return `NULL` but will not generate an error. This can be used instead of first calling <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a>.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | jid | The <a href="/docs/glfw/v3-5-1/en/04-reference/12-joysticks/" class="el">joystick</a> to query. |
| \[out\] | count | Where to store the number of button states in the returned array. This is set to zero if the joystick is not present or an error occurred. |

<!-- -->

Returns  
An array of button states, or `NULL` if the joystick is not present or an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Pointer lifetime  
The returned array is allocated and freed by GLFW. You should not free it yourself. It is valid until the specified joystick is disconnected or the library is terminated.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#joystick_button" class="el">Joystick button states</a>

<!-- -->

Since  
Added in version 2.2. **GLFW 3:** Changed to return a dynamic array.

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

This function returns the state of all hats of the specified joystick. Each element in the array is one of the following values:

| Name                  | Value                               |
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

The diagonal directions are bitwise combinations of the primary (up, right, down and left) directions and you can test for these individually by ANDing it with the corresponding direction.

<div class="fragment">

<div class="line">

<span class="keywordflow">if</span> (hats\[2\] & <a href="/docs/glfw/v3-5-1/en/04-reference/13-joystick-hat-states/#ga252586e3bbde75f4b0e07ad3124867f5" class="code hl_define">GLFW_HAT_RIGHT</a>)

</div>

<div class="line">

{

</div>

<div class="line">

<span class="comment">// State of hat 2 could be right-up, right or right-down</span>

</div>

<div class="line">

}

</div>

<div id="agroup__hat__state_html_ga252586e3bbde75f4b0e07ad3124867f5" class="ttc">

<div class="ttname">

[GLFW_HAT_RIGHT](/docs/glfw/v3-5-1/en/04-reference/13-joystick-hat-states/#ga252586e3bbde75f4b0e07ad3124867f5)

</div>

<div class="ttdeci">

\#define GLFW_HAT_RIGHT

</div>

<div class="ttdef">

**Definition** glfw3.h:357

</div>

</div>

</div>

If the specified joystick is not present this function will return `NULL` but will not generate an error. This can be used instead of first calling <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a>.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | jid | The <a href="/docs/glfw/v3-5-1/en/04-reference/12-joysticks/" class="el">joystick</a> to query. |
| \[out\] | count | Where to store the number of hat states in the returned array. This is set to zero if the joystick is not present or an error occurred. |

<!-- -->

Returns  
An array of hat states, or `NULL` if the joystick is not present or an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Pointer lifetime  
The returned array is allocated and freed by GLFW. You should not free it yourself. It is valid until the specified joystick is disconnected, this function is called again for that joystick or the library is terminated.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#joystick_hat" class="el">Joystick hat states</a>

<!-- -->

Since  
Added in version 3.3.

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

This function returns the name, encoded as UTF-8, of the specified joystick. The returned string is allocated and freed by GLFW. You should not free it yourself.

If the specified joystick is not present this function will return `NULL` but will not generate an error. This can be used instead of first calling <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a>.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | jid | The <a href="/docs/glfw/v3-5-1/en/04-reference/12-joysticks/" class="el">joystick</a> to query. |

<!-- -->

Returns  
The UTF-8 encoded name of the joystick, or `NULL` if the joystick is not present or an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Pointer lifetime  
The returned string is allocated and freed by GLFW. You should not free it yourself. It is valid until the specified joystick is disconnected or the library is terminated.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#joystick_name" class="el">Joystick name</a>

<!-- -->

Since  
Added in version 3.0.

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

This function returns the SDL compatible GUID, as a UTF-8 encoded hexadecimal string, of the specified joystick. The returned string is allocated and freed by GLFW. You should not free it yourself.

The GUID is what connects a joystick to a gamepad mapping. A connected joystick will always have a GUID even if there is no gamepad mapping assigned to it.

If the specified joystick is not present this function will return `NULL` but will not generate an error. This can be used instead of first calling <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a>.

The GUID uses the format introduced in SDL 2.0.5. This GUID tries to uniquely identify the make and model of a joystick but does not identify a specific unit, e.g. all wired Xbox 360 controllers will have the same GUID on that platform. The GUID for a unit may vary between platforms depending on what hardware information the platform specific APIs provide.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | jid | The <a href="/docs/glfw/v3-5-1/en/04-reference/12-joysticks/" class="el">joystick</a> to query. |

<!-- -->

Returns  
The UTF-8 encoded GUID of the joystick, or `NULL` if the joystick is not present or an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Pointer lifetime  
The returned string is allocated and freed by GLFW. You should not free it yourself. It is valid until the specified joystick is disconnected or the library is terminated.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#gamepad" class="el">Gamepad input</a>

<!-- -->

Since  
Added in version 3.3.

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

This function sets the user-defined pointer of the specified joystick. The current value is retained until the joystick is disconnected. The initial value is `NULL`.

This function may be called from the joystick callback, even for a joystick that is being disconnected.

Parameters  
|        |         |                                    |
|--------|---------|------------------------------------|
| \[in\] | jid     | The joystick whose pointer to set. |
| \[in\] | pointer | The new value.                     |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#joystick_userptr" class="el">Joystick user pointer</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga18cefd7265d1fa04f3fd38a6746db5f3" class="el">glfwGetJoystickUserPointer</a>

<!-- -->

Since  
Added in version 3.3.

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

This function returns the current value of the user-defined pointer of the specified joystick. The initial value is `NULL`.

This function may be called from the joystick callback, even for a joystick that is being disconnected.

Parameters  
|        |     |                                       |
|--------|-----|---------------------------------------|
| \[in\] | jid | The joystick whose pointer to return. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Access is not synchronized.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#joystick_userptr" class="el">Joystick user pointer</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga6b2f72d64d636b48a727b437cbb7489e" class="el">glfwSetJoystickUserPointer</a>

<!-- -->

Since  
Added in version 3.3.

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

This function returns whether the specified joystick is both present and has a gamepad mapping.

If the specified joystick is present but does not have a gamepad mapping this function will return `GLFW_FALSE` but will not generate an error. Call <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a> to check if a joystick is present regardless of whether it has a mapping.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | jid | The <a href="/docs/glfw/v3-5-1/en/04-reference/12-joysticks/" class="el">joystick</a> to query. |

<!-- -->

Returns  
`GLFW_TRUE` if a joystick is both present and has a gamepad mapping, or `GLFW_FALSE` otherwise.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#gamepad" class="el">Gamepad input</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gadccddea8bce6113fa459de379ddaf051" class="el">glfwGetGamepadState</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c"></span>

## <span class="permalink">[◆ ](#ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c)</span>glfwSetJoystickCallback()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa21ad5986ae9a26077a40142efb56243" class="el">GLFWjoystickfun</a> glfwSetJoystickCallback | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa21ad5986ae9a26077a40142efb56243" class="el">GLFWjoystickfun</a>  | *callback* | ) |  |

</div>

<div class="memdoc">

This function sets the joystick configuration callback, or removes the currently set callback. This is called when a joystick is connected to or disconnected from the system.

For joystick connection and disconnection events to be delivered on all platforms, you need to call one of the <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#events" class="el">event processing</a> functions. Joystick disconnection may also be detected and the callback called by joystick functions. The function will then return whatever it returns if the joystick is not present.

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

<span class="keywordtype">void</span> function_name(<span class="keywordtype">int</span> jid, <span class="keywordtype">int</span> event)

</div>

</div>

For more information about the callback parameters, see the <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa21ad5986ae9a26077a40142efb56243" class="el">function pointer type</a>.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#joystick_event" class="el">Joystick configuration changes</a>

<!-- -->

Since  
Added in version 3.2.

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

This function parses the specified ASCII encoded string and updates the internal list with any gamepad mappings it finds. This string may contain either a single gamepad mapping or many mappings separated by newlines. The parser supports the full format of the `gamecontrollerdb.txt` source file including empty lines and comments.

See <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#gamepad_mapping" class="el">Gamepad mappings</a> for a description of the format.

If there is already a gamepad mapping for a given GUID in the internal list, it will be replaced by the one passed to this function. If the library is terminated and re-initialized the internal list will revert to the built-in default.

Parameters  
|        |        |                                             |
|--------|--------|---------------------------------------------|
| \[in\] | string | The string containing the gamepad mappings. |

<!-- -->

Returns  
`GLFW_TRUE` if successful, or `GLFW_FALSE` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#gamepad" class="el">Gamepad input</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gad0f676860f329d80f7e47e9f06a96f00" class="el">glfwJoystickIsGamepad</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga8aea73a1a25cc6c0486a617019f56728" class="el">glfwGetGamepadName</a>

<!-- -->

Since  
Added in version 3.3.

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

This function returns the human-readable name of the gamepad from the gamepad mapping assigned to the specified joystick.

If the specified joystick is not present or does not have a gamepad mapping this function will return `NULL` but will not generate an error. Call <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a> to check whether it is present regardless of whether it has a mapping.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | jid | The <a href="/docs/glfw/v3-5-1/en/04-reference/12-joysticks/" class="el">joystick</a> to query. |

<!-- -->

Returns  
The UTF-8 encoded name of the gamepad, or `NULL` if the joystick is not present, does not have a mapping or an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>.

<!-- -->

Pointer lifetime  
The returned string is allocated and freed by GLFW. You should not free it yourself. It is valid until the specified joystick is disconnected, the gamepad mappings are updated or the library is terminated.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#gamepad" class="el">Gamepad input</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gad0f676860f329d80f7e47e9f06a96f00" class="el">glfwJoystickIsGamepad</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="gadccddea8bce6113fa459de379ddaf051"></span>

## <span class="permalink">[◆ ](#gadccddea8bce6113fa459de379ddaf051)</span>glfwGetGamepadState()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetGamepadState | ( | int  | *jid*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/18-glfwgamepadstate/" class="el">GLFWgamepadstate</a> \*  | *state*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function retrieves the state of the specified joystick remapped to an Xbox-like gamepad.

If the specified joystick is not present or does not have a gamepad mapping this function will return `GLFW_FALSE` but will not generate an error. Call <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1" class="el">glfwJoystickPresent</a> to check whether it is present regardless of whether it has a mapping.

The Guide button may not be available for input as it is often hooked by the system or the Steam client.

Not all devices have all the buttons or axes provided by <a href="/docs/glfw/v3-5-1/en/04-reference/18-glfwgamepadstate/" class="el">GLFWgamepadstate</a>. Unavailable buttons and axes will always report `GLFW_RELEASE` and 0.0 respectively.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | jid | The <a href="/docs/glfw/v3-5-1/en/04-reference/12-joysticks/" class="el">joystick</a> to query. |
| \[out\] | state | The gamepad input state of the joystick. |

<!-- -->

Returns  
`GLFW_TRUE` if successful, or `GLFW_FALSE` if no joystick is connected, it has no gamepad mapping or an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#gamepad" class="el">Gamepad input</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaed5104612f2fa8e66aa6e846652ad00f" class="el">glfwUpdateGamepadMappings</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gad0f676860f329d80f7e47e9f06a96f00" class="el">glfwJoystickIsGamepad</a>

<!-- -->

Since  
Added in version 3.3.

</div>

</div>

<span id="gaba1f022c5eb07dfac421df34cdcd31dd"></span>

## <span class="permalink">[◆ ](#gaba1f022c5eb07dfac421df34cdcd31dd)</span>glfwSetClipboardString()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| void glfwSetClipboardString | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | const char \*  | *string*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function sets the system clipboard to the specified, UTF-8 encoded string.

Parameters  
|        |        |                                         |
|--------|--------|-----------------------------------------|
| \[in\] | window | Deprecated. Any valid window or `NULL`. |
| \[in\] | string | A UTF-8 encoded string.                 |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
**Win32:** The clipboard on Windows has a single global lock for reading and writing. GLFW tries to acquire it a few times, which is almost always enough. If it cannot acquire the lock then this function emits <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> and returns. It is safe to try this multiple times.

<!-- -->

Pointer lifetime  
The specified string is copied before this function returns.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#clipboard" class="el">Clipboard input and output</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga71a5b20808ea92193d65c21b82580355" class="el">glfwGetClipboardString</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga71a5b20808ea92193d65c21b82580355"></span>

## <span class="permalink">[◆ ](#ga71a5b20808ea92193d65c21b82580355)</span>glfwGetClipboardString()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| const char \* glfwGetClipboardString | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

This function returns the contents of the system clipboard, if it contains or is convertible to a UTF-8 encoded string. If the clipboard is empty or if its contents cannot be converted, `NULL` is returned and a <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga196e125ef261d94184e2b55c05762f14" class="el">GLFW_FORMAT_UNAVAILABLE</a> error is generated.

Parameters  
|        |        |                                         |
|--------|--------|-----------------------------------------|
| \[in\] | window | Deprecated. Any valid window or `NULL`. |

<!-- -->

Returns  
The contents of the clipboard as a UTF-8 encoded string, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga196e125ef261d94184e2b55c05762f14" class="el">GLFW_FORMAT_UNAVAILABLE</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
**Win32:** The clipboard on Windows has a single global lock for reading and writing. GLFW tries to acquire it a few times, which is almost always enough. If it cannot acquire the lock then this function emits <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> and returns. It is safe to try this multiple times.

<!-- -->

Pointer lifetime  
The returned string is allocated and freed by GLFW. You should not free it yourself. It is valid until the next call to <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga71a5b20808ea92193d65c21b82580355" class="el">glfwGetClipboardString</a> or <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaba1f022c5eb07dfac421df34cdcd31dd" class="el">glfwSetClipboardString</a>, or until the library is terminated.

<!-- -->

Thread safety  
This function must only be called from the main thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#clipboard" class="el">Clipboard input and output</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaba1f022c5eb07dfac421df34cdcd31dd" class="el">glfwSetClipboardString</a>

<!-- -->

Since  
Added in version 3.0.

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

This function returns the current GLFW time, in seconds. Unless the time has been set using <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaf59589ef6e8b8c8b5ad184b25afd4dc0" class="el">glfwSetTime</a> it measures time elapsed since GLFW was initialized.

This function and <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaf59589ef6e8b8c8b5ad184b25afd4dc0" class="el">glfwSetTime</a> are helper functions on top of <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga3289ee876572f6e91f06df3a24824443" class="el">glfwGetTimerFrequency</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga09b2bd37d328e0b9456c7ec575cc26aa" class="el">glfwGetTimerValue</a>.

The resolution of the timer is system dependent, but is usually on the order of a few micro- or nanoseconds. It uses the highest-resolution monotonic time source on each operating system.

Returns  
The current time, in seconds, or zero if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function may be called from any thread. Reading and writing of the internal base time is not atomic, so it needs to be externally synchronized with calls to <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaf59589ef6e8b8c8b5ad184b25afd4dc0" class="el">glfwSetTime</a>.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#time" class="el">Time input</a>

<!-- -->

Since  
Added in version 1.0.

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

This function sets the current GLFW time, in seconds. The value must be a positive finite number less than or equal to 18446744073.0, which is approximately 584.5 years.

This function and <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa6cf4e7a77158a3b8fd00328b1720a4a" class="el">glfwGetTime</a> are helper functions on top of <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga3289ee876572f6e91f06df3a24824443" class="el">glfwGetTimerFrequency</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga09b2bd37d328e0b9456c7ec575cc26aa" class="el">glfwGetTimerValue</a>.

Parameters  
|        |      |                            |
|--------|------|----------------------------|
| \[in\] | time | The new value, in seconds. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>.

<!-- -->

Remarks  
The upper limit of GLFW time is calculated as floor((2<sup>64</sup> - 1) / 10<sup>9</sup>) and is due to implementations storing nanoseconds in 64 bits. The limit may be increased in the future.

<!-- -->

Thread safety  
This function may be called from any thread. Reading and writing of the internal base time is not atomic, so it needs to be externally synchronized with calls to <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa6cf4e7a77158a3b8fd00328b1720a4a" class="el">glfwGetTime</a>.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#time" class="el">Time input</a>

<!-- -->

Since  
Added in version 2.2.

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

This function returns the current value of the raw timer, measured in 1 / frequency seconds. To get the frequency, call <a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga3289ee876572f6e91f06df3a24824443" class="el">glfwGetTimerFrequency</a>.

Returns  
The value of the timer, or zero if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#time" class="el">Time input</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga3289ee876572f6e91f06df3a24824443" class="el">glfwGetTimerFrequency</a>

<!-- -->

Since  
Added in version 3.2.

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

This function returns the frequency, in Hz, of the raw timer.

Returns  
The frequency of the timer, in Hz, or zero if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#time" class="el">Time input</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga09b2bd37d328e0b9456c7ec575cc26aa" class="el">glfwGetTimerValue</a>

<!-- -->

Since  
Added in version 3.2.

</div>

</div>
