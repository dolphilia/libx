---
title: "Keyboard key tokens"
description: "GLFW 3.5.1 Keyboard key tokens"
licenseSource: "glfw-3.5.1"
---

> This reference page is an altered Markdown adaptation of the [official GLFW 3.5.1 documentation](https://www.glfw.org/docs/3.5.1/). Formatting, navigation and links were changed for libx; technical content comes from the GLFW 3.5.1 source distribution.

<span id="details"></span>

## Description

See <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_key" class="el">key input</a> for how these are used.

These key codes are inspired by the *USB HID Usage Tables v1.12* (p. 53-60), but re-arranged to map to 7-bit ASCII for printable keys (function keys are put in the 256+ range).

The naming of the key codes follow these rules:

- The US keyboard layout is used
- Names of printable alphanumeric characters are used (e.g. "A", "R", "3", etc.)
- For non-alphanumeric characters, Unicode:ish names are used (e.g. "COMMA", "LEFT_SQUARE_BRACKET", etc.). Note that some names do not correspond to the Unicode standard (usually for brevity)
- Keys that lack a clear US mapping are named "WORLD_x"
- For non-printable keys, custom names are used (e.g. "F4", "BACKSPACE", etc.)

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="macros" class="groupheader"><span id="define-members"></span> Macros</h2></td>
</tr>
<tr id="r_gaddb2c23772b97fd7e26e8ee66f1ad014" class="memitem:gaddb2c23772b97fd7e26e8ee66f1ad014">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaddb2c23772b97fd7e26e8ee66f1ad014" class="el">GLFW_KEY_SPACE</a>   32</td>
</tr>
<tr class="separator:gaddb2c23772b97fd7e26e8ee66f1ad014">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6059b0b048ba6980b6107fffbd3b4b24" class="memitem:ga6059b0b048ba6980b6107fffbd3b4b24">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga6059b0b048ba6980b6107fffbd3b4b24" class="el">GLFW_KEY_APOSTROPHE</a>   39 /* ' */</td>
</tr>
<tr class="separator:ga6059b0b048ba6980b6107fffbd3b4b24">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab3d5d72e59d3055f494627b0a524926c" class="memitem:gab3d5d72e59d3055f494627b0a524926c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gab3d5d72e59d3055f494627b0a524926c" class="el">GLFW_KEY_COMMA</a>   44 /* , */</td>
</tr>
<tr class="separator:gab3d5d72e59d3055f494627b0a524926c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac556b360f7f6fca4b70ba0aecf313fd4" class="memitem:gac556b360f7f6fca4b70ba0aecf313fd4">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gac556b360f7f6fca4b70ba0aecf313fd4" class="el">GLFW_KEY_MINUS</a>   45 /* - */</td>
</tr>
<tr class="separator:gac556b360f7f6fca4b70ba0aecf313fd4">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga37e296b650eab419fc474ff69033d927" class="memitem:ga37e296b650eab419fc474ff69033d927">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga37e296b650eab419fc474ff69033d927" class="el">GLFW_KEY_PERIOD</a>   46 /* . */</td>
</tr>
<tr class="separator:ga37e296b650eab419fc474ff69033d927">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadf3d753b2d479148d711de34b83fd0db" class="memitem:gadf3d753b2d479148d711de34b83fd0db">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gadf3d753b2d479148d711de34b83fd0db" class="el">GLFW_KEY_SLASH</a>   47 /* / */</td>
</tr>
<tr class="separator:gadf3d753b2d479148d711de34b83fd0db">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga50391730e9d7112ad4fd42d0bd1597c1" class="memitem:ga50391730e9d7112ad4fd42d0bd1597c1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga50391730e9d7112ad4fd42d0bd1597c1" class="el">GLFW_KEY_0</a>   48</td>
</tr>
<tr class="separator:ga50391730e9d7112ad4fd42d0bd1597c1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga05e4cae9ddb8d40cf6d82c8f11f2502f" class="memitem:ga05e4cae9ddb8d40cf6d82c8f11f2502f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga05e4cae9ddb8d40cf6d82c8f11f2502f" class="el">GLFW_KEY_1</a>   49</td>
</tr>
<tr class="separator:ga05e4cae9ddb8d40cf6d82c8f11f2502f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadc8e66b3a4c4b5c39ad1305cf852863c" class="memitem:gadc8e66b3a4c4b5c39ad1305cf852863c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gadc8e66b3a4c4b5c39ad1305cf852863c" class="el">GLFW_KEY_2</a>   50</td>
</tr>
<tr class="separator:gadc8e66b3a4c4b5c39ad1305cf852863c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga812f0273fe1a981e1fa002ae73e92271" class="memitem:ga812f0273fe1a981e1fa002ae73e92271">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga812f0273fe1a981e1fa002ae73e92271" class="el">GLFW_KEY_3</a>   51</td>
</tr>
<tr class="separator:ga812f0273fe1a981e1fa002ae73e92271">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9e14b6975a9cc8f66cdd5cb3d3861356" class="memitem:ga9e14b6975a9cc8f66cdd5cb3d3861356">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga9e14b6975a9cc8f66cdd5cb3d3861356" class="el">GLFW_KEY_4</a>   52</td>
</tr>
<tr class="separator:ga9e14b6975a9cc8f66cdd5cb3d3861356">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga4d74ddaa5d4c609993b4d4a15736c924" class="memitem:ga4d74ddaa5d4c609993b4d4a15736c924">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga4d74ddaa5d4c609993b4d4a15736c924" class="el">GLFW_KEY_5</a>   53</td>
</tr>
<tr class="separator:ga4d74ddaa5d4c609993b4d4a15736c924">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9ea4ab80c313a227b14d0a7c6f810b5d" class="memitem:ga9ea4ab80c313a227b14d0a7c6f810b5d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga9ea4ab80c313a227b14d0a7c6f810b5d" class="el">GLFW_KEY_6</a>   54</td>
</tr>
<tr class="separator:ga9ea4ab80c313a227b14d0a7c6f810b5d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab79b1cfae7bd630cfc4604c1f263c666" class="memitem:gab79b1cfae7bd630cfc4604c1f263c666">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gab79b1cfae7bd630cfc4604c1f263c666" class="el">GLFW_KEY_7</a>   55</td>
</tr>
<tr class="separator:gab79b1cfae7bd630cfc4604c1f263c666">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadeaa109a0f9f5afc94fe4a108e686f6f" class="memitem:gadeaa109a0f9f5afc94fe4a108e686f6f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gadeaa109a0f9f5afc94fe4a108e686f6f" class="el">GLFW_KEY_8</a>   56</td>
</tr>
<tr class="separator:gadeaa109a0f9f5afc94fe4a108e686f6f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga2924cb5349ebbf97c8987f3521c44f39" class="memitem:ga2924cb5349ebbf97c8987f3521c44f39">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga2924cb5349ebbf97c8987f3521c44f39" class="el">GLFW_KEY_9</a>   57</td>
</tr>
<tr class="separator:ga2924cb5349ebbf97c8987f3521c44f39">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga84233de9ee5bb3e8788a5aa07d80af7d" class="memitem:ga84233de9ee5bb3e8788a5aa07d80af7d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga84233de9ee5bb3e8788a5aa07d80af7d" class="el">GLFW_KEY_SEMICOLON</a>   59 /* ; */</td>
</tr>
<tr class="separator:ga84233de9ee5bb3e8788a5aa07d80af7d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae1a2de47240d6664423c204bdd91bd17" class="memitem:gae1a2de47240d6664423c204bdd91bd17">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gae1a2de47240d6664423c204bdd91bd17" class="el">GLFW_KEY_EQUAL</a>   61 /* = */</td>
</tr>
<tr class="separator:gae1a2de47240d6664423c204bdd91bd17">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga03e842608e1ea323370889d33b8f70ff" class="memitem:ga03e842608e1ea323370889d33b8f70ff">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga03e842608e1ea323370889d33b8f70ff" class="el">GLFW_KEY_A</a>   65</td>
</tr>
<tr class="separator:ga03e842608e1ea323370889d33b8f70ff">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8e3fb647ff3aca9e8dbf14fe66332941" class="memitem:ga8e3fb647ff3aca9e8dbf14fe66332941">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga8e3fb647ff3aca9e8dbf14fe66332941" class="el">GLFW_KEY_B</a>   66</td>
</tr>
<tr class="separator:ga8e3fb647ff3aca9e8dbf14fe66332941">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga00ccf3475d9ee2e679480d540d554669" class="memitem:ga00ccf3475d9ee2e679480d540d554669">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga00ccf3475d9ee2e679480d540d554669" class="el">GLFW_KEY_C</a>   67</td>
</tr>
<tr class="separator:ga00ccf3475d9ee2e679480d540d554669">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga011f7cdc9a654da984a2506479606933" class="memitem:ga011f7cdc9a654da984a2506479606933">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga011f7cdc9a654da984a2506479606933" class="el">GLFW_KEY_D</a>   68</td>
</tr>
<tr class="separator:ga011f7cdc9a654da984a2506479606933">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gabf48fcc3afbe69349df432b470c96ef2" class="memitem:gabf48fcc3afbe69349df432b470c96ef2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gabf48fcc3afbe69349df432b470c96ef2" class="el">GLFW_KEY_E</a>   69</td>
</tr>
<tr class="separator:gabf48fcc3afbe69349df432b470c96ef2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5df402e02aca08444240058fd9b42a55" class="memitem:ga5df402e02aca08444240058fd9b42a55">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga5df402e02aca08444240058fd9b42a55" class="el">GLFW_KEY_F</a>   70</td>
</tr>
<tr class="separator:ga5df402e02aca08444240058fd9b42a55">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae74ecddf7cc96104ab23989b1cdab536" class="memitem:gae74ecddf7cc96104ab23989b1cdab536">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gae74ecddf7cc96104ab23989b1cdab536" class="el">GLFW_KEY_G</a>   71</td>
</tr>
<tr class="separator:gae74ecddf7cc96104ab23989b1cdab536">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad4cc98fc8f35f015d9e2fb94bf136076" class="memitem:gad4cc98fc8f35f015d9e2fb94bf136076">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gad4cc98fc8f35f015d9e2fb94bf136076" class="el">GLFW_KEY_H</a>   72</td>
</tr>
<tr class="separator:gad4cc98fc8f35f015d9e2fb94bf136076">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga274655c8bfe39742684ca393cf8ed093" class="memitem:ga274655c8bfe39742684ca393cf8ed093">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga274655c8bfe39742684ca393cf8ed093" class="el">GLFW_KEY_I</a>   73</td>
</tr>
<tr class="separator:ga274655c8bfe39742684ca393cf8ed093">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga65ff2aedb129a3149ad9cb3e4159a75f" class="memitem:ga65ff2aedb129a3149ad9cb3e4159a75f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga65ff2aedb129a3149ad9cb3e4159a75f" class="el">GLFW_KEY_J</a>   74</td>
</tr>
<tr class="separator:ga65ff2aedb129a3149ad9cb3e4159a75f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga4ae8debadf6d2a691badae0b53ea3ba0" class="memitem:ga4ae8debadf6d2a691badae0b53ea3ba0">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga4ae8debadf6d2a691badae0b53ea3ba0" class="el">GLFW_KEY_K</a>   75</td>
</tr>
<tr class="separator:ga4ae8debadf6d2a691badae0b53ea3ba0">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaaa8b54a13f6b1eed85ac86f82d550db2" class="memitem:gaaa8b54a13f6b1eed85ac86f82d550db2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaaa8b54a13f6b1eed85ac86f82d550db2" class="el">GLFW_KEY_L</a>   76</td>
</tr>
<tr class="separator:gaaa8b54a13f6b1eed85ac86f82d550db2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga4d7f0260c82e4ea3d6ebc7a21d6e3716" class="memitem:ga4d7f0260c82e4ea3d6ebc7a21d6e3716">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga4d7f0260c82e4ea3d6ebc7a21d6e3716" class="el">GLFW_KEY_M</a>   77</td>
</tr>
<tr class="separator:ga4d7f0260c82e4ea3d6ebc7a21d6e3716">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae00856dfeb5d13aafebf59d44de5cdda" class="memitem:gae00856dfeb5d13aafebf59d44de5cdda">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gae00856dfeb5d13aafebf59d44de5cdda" class="el">GLFW_KEY_N</a>   78</td>
</tr>
<tr class="separator:gae00856dfeb5d13aafebf59d44de5cdda">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaecbbb79130df419d58dd7f09a169efe9" class="memitem:gaecbbb79130df419d58dd7f09a169efe9">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaecbbb79130df419d58dd7f09a169efe9" class="el">GLFW_KEY_O</a>   79</td>
</tr>
<tr class="separator:gaecbbb79130df419d58dd7f09a169efe9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8fc15819c1094fb2afa01d84546b33e1" class="memitem:ga8fc15819c1094fb2afa01d84546b33e1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga8fc15819c1094fb2afa01d84546b33e1" class="el">GLFW_KEY_P</a>   80</td>
</tr>
<tr class="separator:ga8fc15819c1094fb2afa01d84546b33e1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafdd01e38b120d67cf51e348bb47f3964" class="memitem:gafdd01e38b120d67cf51e348bb47f3964">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gafdd01e38b120d67cf51e348bb47f3964" class="el">GLFW_KEY_Q</a>   81</td>
</tr>
<tr class="separator:gafdd01e38b120d67cf51e348bb47f3964">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga4ce6c70a0c98c50b3fe4ab9a728d4d36" class="memitem:ga4ce6c70a0c98c50b3fe4ab9a728d4d36">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga4ce6c70a0c98c50b3fe4ab9a728d4d36" class="el">GLFW_KEY_R</a>   82</td>
</tr>
<tr class="separator:ga4ce6c70a0c98c50b3fe4ab9a728d4d36">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1570e2ccaab036ea82bed66fc1dab2a9" class="memitem:ga1570e2ccaab036ea82bed66fc1dab2a9">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga1570e2ccaab036ea82bed66fc1dab2a9" class="el">GLFW_KEY_S</a>   83</td>
</tr>
<tr class="separator:ga1570e2ccaab036ea82bed66fc1dab2a9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga90e0560422ec7a30e7f3f375bc9f37f9" class="memitem:ga90e0560422ec7a30e7f3f375bc9f37f9">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga90e0560422ec7a30e7f3f375bc9f37f9" class="el">GLFW_KEY_T</a>   84</td>
</tr>
<tr class="separator:ga90e0560422ec7a30e7f3f375bc9f37f9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gacad52f3bf7d378fc0ffa72a76769256d" class="memitem:gacad52f3bf7d378fc0ffa72a76769256d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gacad52f3bf7d378fc0ffa72a76769256d" class="el">GLFW_KEY_U</a>   85</td>
</tr>
<tr class="separator:gacad52f3bf7d378fc0ffa72a76769256d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga22c7763899ecf7788862e5f90eacce6b" class="memitem:ga22c7763899ecf7788862e5f90eacce6b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga22c7763899ecf7788862e5f90eacce6b" class="el">GLFW_KEY_V</a>   86</td>
</tr>
<tr class="separator:ga22c7763899ecf7788862e5f90eacce6b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa06a712e6202661fc03da5bdb7b6e545" class="memitem:gaa06a712e6202661fc03da5bdb7b6e545">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaa06a712e6202661fc03da5bdb7b6e545" class="el">GLFW_KEY_W</a>   87</td>
</tr>
<tr class="separator:gaa06a712e6202661fc03da5bdb7b6e545">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac1c42c0bf4192cea713c55598b06b744" class="memitem:gac1c42c0bf4192cea713c55598b06b744">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gac1c42c0bf4192cea713c55598b06b744" class="el">GLFW_KEY_X</a>   88</td>
</tr>
<tr class="separator:gac1c42c0bf4192cea713c55598b06b744">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafd9f115a549effdf8e372a787c360313" class="memitem:gafd9f115a549effdf8e372a787c360313">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gafd9f115a549effdf8e372a787c360313" class="el">GLFW_KEY_Y</a>   89</td>
</tr>
<tr class="separator:gafd9f115a549effdf8e372a787c360313">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac489e208c26afda8d4938ed88718760a" class="memitem:gac489e208c26afda8d4938ed88718760a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gac489e208c26afda8d4938ed88718760a" class="el">GLFW_KEY_Z</a>   90</td>
</tr>
<tr class="separator:gac489e208c26afda8d4938ed88718760a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad1c8d9adac53925276ecb1d592511d8a" class="memitem:gad1c8d9adac53925276ecb1d592511d8a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gad1c8d9adac53925276ecb1d592511d8a" class="el">GLFW_KEY_LEFT_BRACKET</a>   91 /* [ */</td>
</tr>
<tr class="separator:gad1c8d9adac53925276ecb1d592511d8a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab8155ea99d1ab27ff56f24f8dc73f8d1" class="memitem:gab8155ea99d1ab27ff56f24f8dc73f8d1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gab8155ea99d1ab27ff56f24f8dc73f8d1" class="el">GLFW_KEY_BACKSLASH</a>   92 /* \ */</td>
</tr>
<tr class="separator:gab8155ea99d1ab27ff56f24f8dc73f8d1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga86ef225fd6a66404caae71044cdd58d8" class="memitem:ga86ef225fd6a66404caae71044cdd58d8">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga86ef225fd6a66404caae71044cdd58d8" class="el">GLFW_KEY_RIGHT_BRACKET</a>   93 /* ] */</td>
</tr>
<tr class="separator:ga86ef225fd6a66404caae71044cdd58d8">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7a3701fb4e2a0b136ff4b568c3c8d668" class="memitem:ga7a3701fb4e2a0b136ff4b568c3c8d668">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga7a3701fb4e2a0b136ff4b568c3c8d668" class="el">GLFW_KEY_GRAVE_ACCENT</a>   96 /* ` */</td>
</tr>
<tr class="separator:ga7a3701fb4e2a0b136ff4b568c3c8d668">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadc78dad3dab76bcd4b5c20114052577a" class="memitem:gadc78dad3dab76bcd4b5c20114052577a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gadc78dad3dab76bcd4b5c20114052577a" class="el">GLFW_KEY_WORLD_1</a>   161 /* non-US #1 */</td>
</tr>
<tr class="separator:gadc78dad3dab76bcd4b5c20114052577a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga20494bfebf0bb4fc9503afca18ab2c5e" class="memitem:ga20494bfebf0bb4fc9503afca18ab2c5e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga20494bfebf0bb4fc9503afca18ab2c5e" class="el">GLFW_KEY_WORLD_2</a>   162 /* non-US #2 */</td>
</tr>
<tr class="separator:ga20494bfebf0bb4fc9503afca18ab2c5e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaac6596c350b635c245113b81c2123b93" class="memitem:gaac6596c350b635c245113b81c2123b93">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaac6596c350b635c245113b81c2123b93" class="el">GLFW_KEY_ESCAPE</a>   256</td>
</tr>
<tr class="separator:gaac6596c350b635c245113b81c2123b93">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9555a92ecbecdbc1f3435219c571d667" class="memitem:ga9555a92ecbecdbc1f3435219c571d667">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga9555a92ecbecdbc1f3435219c571d667" class="el">GLFW_KEY_ENTER</a>   257</td>
</tr>
<tr class="separator:ga9555a92ecbecdbc1f3435219c571d667">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6908a4bda9950a3e2b73f794bbe985df" class="memitem:ga6908a4bda9950a3e2b73f794bbe985df">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga6908a4bda9950a3e2b73f794bbe985df" class="el">GLFW_KEY_TAB</a>   258</td>
</tr>
<tr class="separator:ga6908a4bda9950a3e2b73f794bbe985df">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6c0df1fe2f156bbd5a98c66d76ff3635" class="memitem:ga6c0df1fe2f156bbd5a98c66d76ff3635">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga6c0df1fe2f156bbd5a98c66d76ff3635" class="el">GLFW_KEY_BACKSPACE</a>   259</td>
</tr>
<tr class="separator:ga6c0df1fe2f156bbd5a98c66d76ff3635">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga373ac7365435d6b0eb1068f470e34f47" class="memitem:ga373ac7365435d6b0eb1068f470e34f47">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga373ac7365435d6b0eb1068f470e34f47" class="el">GLFW_KEY_INSERT</a>   260</td>
</tr>
<tr class="separator:ga373ac7365435d6b0eb1068f470e34f47">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadb111e4df74b8a715f2c05dad58d2682" class="memitem:gadb111e4df74b8a715f2c05dad58d2682">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gadb111e4df74b8a715f2c05dad58d2682" class="el">GLFW_KEY_DELETE</a>   261</td>
</tr>
<tr class="separator:gadb111e4df74b8a715f2c05dad58d2682">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga06ba07662e8c291a4a84535379ffc7ac" class="memitem:ga06ba07662e8c291a4a84535379ffc7ac">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga06ba07662e8c291a4a84535379ffc7ac" class="el">GLFW_KEY_RIGHT</a>   262</td>
</tr>
<tr class="separator:ga06ba07662e8c291a4a84535379ffc7ac">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae12a010d33c309a67ab9460c51eb2462" class="memitem:gae12a010d33c309a67ab9460c51eb2462">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gae12a010d33c309a67ab9460c51eb2462" class="el">GLFW_KEY_LEFT</a>   263</td>
</tr>
<tr class="separator:gae12a010d33c309a67ab9460c51eb2462">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae2e3958c71595607416aa7bf082be2f9" class="memitem:gae2e3958c71595607416aa7bf082be2f9">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gae2e3958c71595607416aa7bf082be2f9" class="el">GLFW_KEY_DOWN</a>   264</td>
</tr>
<tr class="separator:gae2e3958c71595607416aa7bf082be2f9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga2f3342b194020d3544c67e3506b6f144" class="memitem:ga2f3342b194020d3544c67e3506b6f144">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga2f3342b194020d3544c67e3506b6f144" class="el">GLFW_KEY_UP</a>   265</td>
</tr>
<tr class="separator:ga2f3342b194020d3544c67e3506b6f144">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3ab731f9622f0db280178a5f3cc6d586" class="memitem:ga3ab731f9622f0db280178a5f3cc6d586">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga3ab731f9622f0db280178a5f3cc6d586" class="el">GLFW_KEY_PAGE_UP</a>   266</td>
</tr>
<tr class="separator:ga3ab731f9622f0db280178a5f3cc6d586">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaee0a8fa442001cc2147812f84b59041c" class="memitem:gaee0a8fa442001cc2147812f84b59041c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaee0a8fa442001cc2147812f84b59041c" class="el">GLFW_KEY_PAGE_DOWN</a>   267</td>
</tr>
<tr class="separator:gaee0a8fa442001cc2147812f84b59041c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga41452c7287195d481e43207318c126a7" class="memitem:ga41452c7287195d481e43207318c126a7">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga41452c7287195d481e43207318c126a7" class="el">GLFW_KEY_HOME</a>   268</td>
</tr>
<tr class="separator:ga41452c7287195d481e43207318c126a7">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga86587ea1df19a65978d3e3b8439bedd9" class="memitem:ga86587ea1df19a65978d3e3b8439bedd9">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga86587ea1df19a65978d3e3b8439bedd9" class="el">GLFW_KEY_END</a>   269</td>
</tr>
<tr class="separator:ga86587ea1df19a65978d3e3b8439bedd9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga92c1d2c9d63485f3d70f94f688d48672" class="memitem:ga92c1d2c9d63485f3d70f94f688d48672">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga92c1d2c9d63485f3d70f94f688d48672" class="el">GLFW_KEY_CAPS_LOCK</a>   280</td>
</tr>
<tr class="separator:ga92c1d2c9d63485f3d70f94f688d48672">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf622b63b9537f7084c2ab649b8365630" class="memitem:gaf622b63b9537f7084c2ab649b8365630">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaf622b63b9537f7084c2ab649b8365630" class="el">GLFW_KEY_SCROLL_LOCK</a>   281</td>
</tr>
<tr class="separator:gaf622b63b9537f7084c2ab649b8365630">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3946edc362aeff213b2be6304296cf43" class="memitem:ga3946edc362aeff213b2be6304296cf43">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga3946edc362aeff213b2be6304296cf43" class="el">GLFW_KEY_NUM_LOCK</a>   282</td>
</tr>
<tr class="separator:ga3946edc362aeff213b2be6304296cf43">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf964c2e65e97d0cf785a5636ee8df642" class="memitem:gaf964c2e65e97d0cf785a5636ee8df642">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaf964c2e65e97d0cf785a5636ee8df642" class="el">GLFW_KEY_PRINT_SCREEN</a>   283</td>
</tr>
<tr class="separator:gaf964c2e65e97d0cf785a5636ee8df642">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8116b9692d87382afb5849b6d8907f18" class="memitem:ga8116b9692d87382afb5849b6d8907f18">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga8116b9692d87382afb5849b6d8907f18" class="el">GLFW_KEY_PAUSE</a>   284</td>
</tr>
<tr class="separator:ga8116b9692d87382afb5849b6d8907f18">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafb8d66c573acf22e364049477dcbea30" class="memitem:gafb8d66c573acf22e364049477dcbea30">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gafb8d66c573acf22e364049477dcbea30" class="el">GLFW_KEY_F1</a>   290</td>
</tr>
<tr class="separator:gafb8d66c573acf22e364049477dcbea30">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga0900750aff94889b940f5e428c07daee" class="memitem:ga0900750aff94889b940f5e428c07daee">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga0900750aff94889b940f5e428c07daee" class="el">GLFW_KEY_F2</a>   291</td>
</tr>
<tr class="separator:ga0900750aff94889b940f5e428c07daee">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaed7cd729c0147a551bb8b7bb36c17015" class="memitem:gaed7cd729c0147a551bb8b7bb36c17015">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaed7cd729c0147a551bb8b7bb36c17015" class="el">GLFW_KEY_F3</a>   292</td>
</tr>
<tr class="separator:gaed7cd729c0147a551bb8b7bb36c17015">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9b61ebd0c63b44b7332fda2c9763eaa6" class="memitem:ga9b61ebd0c63b44b7332fda2c9763eaa6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga9b61ebd0c63b44b7332fda2c9763eaa6" class="el">GLFW_KEY_F4</a>   293</td>
</tr>
<tr class="separator:ga9b61ebd0c63b44b7332fda2c9763eaa6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf258dda9947daa428377938ed577c8c2" class="memitem:gaf258dda9947daa428377938ed577c8c2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaf258dda9947daa428377938ed577c8c2" class="el">GLFW_KEY_F5</a>   294</td>
</tr>
<tr class="separator:gaf258dda9947daa428377938ed577c8c2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6dc2d3f87b9d51ffbbbe2ef0299d8e1d" class="memitem:ga6dc2d3f87b9d51ffbbbe2ef0299d8e1d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga6dc2d3f87b9d51ffbbbe2ef0299d8e1d" class="el">GLFW_KEY_F6</a>   295</td>
</tr>
<tr class="separator:ga6dc2d3f87b9d51ffbbbe2ef0299d8e1d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gacca6ef8a2162c52a0ac1d881e8d9c38a" class="memitem:gacca6ef8a2162c52a0ac1d881e8d9c38a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gacca6ef8a2162c52a0ac1d881e8d9c38a" class="el">GLFW_KEY_F7</a>   296</td>
</tr>
<tr class="separator:gacca6ef8a2162c52a0ac1d881e8d9c38a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gac9d39390336ae14e4a93e295de43c7e8" class="memitem:gac9d39390336ae14e4a93e295de43c7e8">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gac9d39390336ae14e4a93e295de43c7e8" class="el">GLFW_KEY_F8</a>   297</td>
</tr>
<tr class="separator:gac9d39390336ae14e4a93e295de43c7e8">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gae40de0de1c9f21cd26c9afa3d7050851" class="memitem:gae40de0de1c9f21cd26c9afa3d7050851">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gae40de0de1c9f21cd26c9afa3d7050851" class="el">GLFW_KEY_F9</a>   298</td>
</tr>
<tr class="separator:gae40de0de1c9f21cd26c9afa3d7050851">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga718d11d2f7d57471a2f6a894235995b1" class="memitem:ga718d11d2f7d57471a2f6a894235995b1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga718d11d2f7d57471a2f6a894235995b1" class="el">GLFW_KEY_F10</a>   299</td>
</tr>
<tr class="separator:ga718d11d2f7d57471a2f6a894235995b1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga0bc04b11627e7d69339151e7306b2832" class="memitem:ga0bc04b11627e7d69339151e7306b2832">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga0bc04b11627e7d69339151e7306b2832" class="el">GLFW_KEY_F11</a>   300</td>
</tr>
<tr class="separator:ga0bc04b11627e7d69339151e7306b2832">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf5908fa9b0a906ae03fc2c61ac7aa3e2" class="memitem:gaf5908fa9b0a906ae03fc2c61ac7aa3e2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaf5908fa9b0a906ae03fc2c61ac7aa3e2" class="el">GLFW_KEY_F12</a>   301</td>
</tr>
<tr class="separator:gaf5908fa9b0a906ae03fc2c61ac7aa3e2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad637f4308655e1001bd6ad942bc0fd4b" class="memitem:gad637f4308655e1001bd6ad942bc0fd4b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gad637f4308655e1001bd6ad942bc0fd4b" class="el">GLFW_KEY_F13</a>   302</td>
</tr>
<tr class="separator:gad637f4308655e1001bd6ad942bc0fd4b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf14c66cff3396e5bd46e803c035e6c1f" class="memitem:gaf14c66cff3396e5bd46e803c035e6c1f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaf14c66cff3396e5bd46e803c035e6c1f" class="el">GLFW_KEY_F14</a>   303</td>
</tr>
<tr class="separator:gaf14c66cff3396e5bd46e803c035e6c1f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7f70970db6e8be1794da8516a6d14058" class="memitem:ga7f70970db6e8be1794da8516a6d14058">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga7f70970db6e8be1794da8516a6d14058" class="el">GLFW_KEY_F15</a>   304</td>
</tr>
<tr class="separator:ga7f70970db6e8be1794da8516a6d14058">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa582dbb1d2ba2050aa1dca0838095b27" class="memitem:gaa582dbb1d2ba2050aa1dca0838095b27">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaa582dbb1d2ba2050aa1dca0838095b27" class="el">GLFW_KEY_F16</a>   305</td>
</tr>
<tr class="separator:gaa582dbb1d2ba2050aa1dca0838095b27">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga972ce5c365e2394b36104b0e3125c748" class="memitem:ga972ce5c365e2394b36104b0e3125c748">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga972ce5c365e2394b36104b0e3125c748" class="el">GLFW_KEY_F17</a>   306</td>
</tr>
<tr class="separator:ga972ce5c365e2394b36104b0e3125c748">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaebf6391058d5566601e357edc5ea737c" class="memitem:gaebf6391058d5566601e357edc5ea737c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaebf6391058d5566601e357edc5ea737c" class="el">GLFW_KEY_F18</a>   307</td>
</tr>
<tr class="separator:gaebf6391058d5566601e357edc5ea737c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaec011d9ba044058cb54529da710e9791" class="memitem:gaec011d9ba044058cb54529da710e9791">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaec011d9ba044058cb54529da710e9791" class="el">GLFW_KEY_F19</a>   308</td>
</tr>
<tr class="separator:gaec011d9ba044058cb54529da710e9791">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga82b9c721ada04cd5ca8de767da38022f" class="memitem:ga82b9c721ada04cd5ca8de767da38022f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga82b9c721ada04cd5ca8de767da38022f" class="el">GLFW_KEY_F20</a>   309</td>
</tr>
<tr class="separator:ga82b9c721ada04cd5ca8de767da38022f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga356afb14d3440ff2bb378f74f7ebc60f" class="memitem:ga356afb14d3440ff2bb378f74f7ebc60f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga356afb14d3440ff2bb378f74f7ebc60f" class="el">GLFW_KEY_F21</a>   310</td>
</tr>
<tr class="separator:ga356afb14d3440ff2bb378f74f7ebc60f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga90960bd2a155f2b09675324d3dff1565" class="memitem:ga90960bd2a155f2b09675324d3dff1565">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga90960bd2a155f2b09675324d3dff1565" class="el">GLFW_KEY_F22</a>   311</td>
</tr>
<tr class="separator:ga90960bd2a155f2b09675324d3dff1565">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga43c21099aac10952d1be909a8ddee4d5" class="memitem:ga43c21099aac10952d1be909a8ddee4d5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga43c21099aac10952d1be909a8ddee4d5" class="el">GLFW_KEY_F23</a>   312</td>
</tr>
<tr class="separator:ga43c21099aac10952d1be909a8ddee4d5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8150374677b5bed3043408732152dea2" class="memitem:ga8150374677b5bed3043408732152dea2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga8150374677b5bed3043408732152dea2" class="el">GLFW_KEY_F24</a>   313</td>
</tr>
<tr class="separator:ga8150374677b5bed3043408732152dea2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa4bbd93ed73bb4c6ae7d83df880b7199" class="memitem:gaa4bbd93ed73bb4c6ae7d83df880b7199">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaa4bbd93ed73bb4c6ae7d83df880b7199" class="el">GLFW_KEY_F25</a>   314</td>
</tr>
<tr class="separator:gaa4bbd93ed73bb4c6ae7d83df880b7199">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga10515dafc55b71e7683f5b4fedd1c70d" class="memitem:ga10515dafc55b71e7683f5b4fedd1c70d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga10515dafc55b71e7683f5b4fedd1c70d" class="el">GLFW_KEY_KP_0</a>   320</td>
</tr>
<tr class="separator:ga10515dafc55b71e7683f5b4fedd1c70d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf3a29a334402c5eaf0b3439edf5587c3" class="memitem:gaf3a29a334402c5eaf0b3439edf5587c3">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaf3a29a334402c5eaf0b3439edf5587c3" class="el">GLFW_KEY_KP_1</a>   321</td>
</tr>
<tr class="separator:gaf3a29a334402c5eaf0b3439edf5587c3">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf82d5a802ab8213c72653d7480c16f13" class="memitem:gaf82d5a802ab8213c72653d7480c16f13">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaf82d5a802ab8213c72653d7480c16f13" class="el">GLFW_KEY_KP_2</a>   322</td>
</tr>
<tr class="separator:gaf82d5a802ab8213c72653d7480c16f13">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7e25ff30d56cd512828c1d4ae8d54ef2" class="memitem:ga7e25ff30d56cd512828c1d4ae8d54ef2">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga7e25ff30d56cd512828c1d4ae8d54ef2" class="el">GLFW_KEY_KP_3</a>   323</td>
</tr>
<tr class="separator:ga7e25ff30d56cd512828c1d4ae8d54ef2">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gada7ec86778b85e0b4de0beea72234aea" class="memitem:gada7ec86778b85e0b4de0beea72234aea">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gada7ec86778b85e0b4de0beea72234aea" class="el">GLFW_KEY_KP_4</a>   324</td>
</tr>
<tr class="separator:gada7ec86778b85e0b4de0beea72234aea">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9a5be274434866c51738cafbb6d26b45" class="memitem:ga9a5be274434866c51738cafbb6d26b45">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga9a5be274434866c51738cafbb6d26b45" class="el">GLFW_KEY_KP_5</a>   325</td>
</tr>
<tr class="separator:ga9a5be274434866c51738cafbb6d26b45">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafc141b0f8450519084c01092a3157faa" class="memitem:gafc141b0f8450519084c01092a3157faa">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gafc141b0f8450519084c01092a3157faa" class="el">GLFW_KEY_KP_6</a>   326</td>
</tr>
<tr class="separator:gafc141b0f8450519084c01092a3157faa">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8882f411f05d04ec77a9563974bbfa53" class="memitem:ga8882f411f05d04ec77a9563974bbfa53">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga8882f411f05d04ec77a9563974bbfa53" class="el">GLFW_KEY_KP_7</a>   327</td>
</tr>
<tr class="separator:ga8882f411f05d04ec77a9563974bbfa53">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab2ea2e6a12f89d315045af520ac78cec" class="memitem:gab2ea2e6a12f89d315045af520ac78cec">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gab2ea2e6a12f89d315045af520ac78cec" class="el">GLFW_KEY_KP_8</a>   328</td>
</tr>
<tr class="separator:gab2ea2e6a12f89d315045af520ac78cec">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafb21426b630ed4fcc084868699ba74c1" class="memitem:gafb21426b630ed4fcc084868699ba74c1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gafb21426b630ed4fcc084868699ba74c1" class="el">GLFW_KEY_KP_9</a>   329</td>
</tr>
<tr class="separator:gafb21426b630ed4fcc084868699ba74c1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga4e231d968796331a9ea0dbfb98d4005b" class="memitem:ga4e231d968796331a9ea0dbfb98d4005b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga4e231d968796331a9ea0dbfb98d4005b" class="el">GLFW_KEY_KP_DECIMAL</a>   330</td>
</tr>
<tr class="separator:ga4e231d968796331a9ea0dbfb98d4005b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gabca1733780a273d549129ad0f250d1e5" class="memitem:gabca1733780a273d549129ad0f250d1e5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gabca1733780a273d549129ad0f250d1e5" class="el">GLFW_KEY_KP_DIVIDE</a>   331</td>
</tr>
<tr class="separator:gabca1733780a273d549129ad0f250d1e5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9ada267eb0e78ed2ada8701dd24a56ef" class="memitem:ga9ada267eb0e78ed2ada8701dd24a56ef">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga9ada267eb0e78ed2ada8701dd24a56ef" class="el">GLFW_KEY_KP_MULTIPLY</a>   332</td>
</tr>
<tr class="separator:ga9ada267eb0e78ed2ada8701dd24a56ef">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa3dbd60782ff93d6082a124bce1fa236" class="memitem:gaa3dbd60782ff93d6082a124bce1fa236">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaa3dbd60782ff93d6082a124bce1fa236" class="el">GLFW_KEY_KP_SUBTRACT</a>   333</td>
</tr>
<tr class="separator:gaa3dbd60782ff93d6082a124bce1fa236">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad09c7c98acc79e89aa6a0a91275becac" class="memitem:gad09c7c98acc79e89aa6a0a91275becac">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gad09c7c98acc79e89aa6a0a91275becac" class="el">GLFW_KEY_KP_ADD</a>   334</td>
</tr>
<tr class="separator:gad09c7c98acc79e89aa6a0a91275becac">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga4f728f8738f2986bd63eedd3d412e8cf" class="memitem:ga4f728f8738f2986bd63eedd3d412e8cf">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga4f728f8738f2986bd63eedd3d412e8cf" class="el">GLFW_KEY_KP_ENTER</a>   335</td>
</tr>
<tr class="separator:ga4f728f8738f2986bd63eedd3d412e8cf">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaebdc76d4a808191e6d21b7e4ad2acd97" class="memitem:gaebdc76d4a808191e6d21b7e4ad2acd97">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaebdc76d4a808191e6d21b7e4ad2acd97" class="el">GLFW_KEY_KP_EQUAL</a>   336</td>
</tr>
<tr class="separator:gaebdc76d4a808191e6d21b7e4ad2acd97">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8a530a28a65c44ab5d00b759b756d3f6" class="memitem:ga8a530a28a65c44ab5d00b759b756d3f6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga8a530a28a65c44ab5d00b759b756d3f6" class="el">GLFW_KEY_LEFT_SHIFT</a>   340</td>
</tr>
<tr class="separator:ga8a530a28a65c44ab5d00b759b756d3f6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9f97b743e81460ac4b2deddecd10a464" class="memitem:ga9f97b743e81460ac4b2deddecd10a464">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga9f97b743e81460ac4b2deddecd10a464" class="el">GLFW_KEY_LEFT_CONTROL</a>   341</td>
</tr>
<tr class="separator:ga9f97b743e81460ac4b2deddecd10a464">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga7f27dabf63a7789daa31e1c96790219b" class="memitem:ga7f27dabf63a7789daa31e1c96790219b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga7f27dabf63a7789daa31e1c96790219b" class="el">GLFW_KEY_LEFT_ALT</a>   342</td>
</tr>
<tr class="separator:ga7f27dabf63a7789daa31e1c96790219b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gafb1207c91997fc295afd1835fbc5641a" class="memitem:gafb1207c91997fc295afd1835fbc5641a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gafb1207c91997fc295afd1835fbc5641a" class="el">GLFW_KEY_LEFT_SUPER</a>   343</td>
</tr>
<tr class="separator:gafb1207c91997fc295afd1835fbc5641a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaffca36b99c9dce1a19cb9befbadce691" class="memitem:gaffca36b99c9dce1a19cb9befbadce691">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gaffca36b99c9dce1a19cb9befbadce691" class="el">GLFW_KEY_RIGHT_SHIFT</a>   344</td>
</tr>
<tr class="separator:gaffca36b99c9dce1a19cb9befbadce691">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad1ca2094b2694e7251d0ab1fd34f8519" class="memitem:gad1ca2094b2694e7251d0ab1fd34f8519">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gad1ca2094b2694e7251d0ab1fd34f8519" class="el">GLFW_KEY_RIGHT_CONTROL</a>   345</td>
</tr>
<tr class="separator:gad1ca2094b2694e7251d0ab1fd34f8519">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga687b38009131cfdd07a8d05fff8fa446" class="memitem:ga687b38009131cfdd07a8d05fff8fa446">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga687b38009131cfdd07a8d05fff8fa446" class="el">GLFW_KEY_RIGHT_ALT</a>   346</td>
</tr>
<tr class="separator:ga687b38009131cfdd07a8d05fff8fa446">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad4547a3e8e247594acb60423fe6502db" class="memitem:gad4547a3e8e247594acb60423fe6502db">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#gad4547a3e8e247594acb60423fe6502db" class="el">GLFW_KEY_RIGHT_SUPER</a>   347</td>
</tr>
<tr class="separator:gad4547a3e8e247594acb60423fe6502db">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9845be48a745fc232045c9ec174d8820" class="memitem:ga9845be48a745fc232045c9ec174d8820">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga9845be48a745fc232045c9ec174d8820" class="el">GLFW_KEY_MENU</a>   348</td>
</tr>
<tr class="separator:ga9845be48a745fc232045c9ec174d8820">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga442cbaef7bfb9a4ba13594dd7fbf2789" class="memitem:ga442cbaef7bfb9a4ba13594dd7fbf2789">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga442cbaef7bfb9a4ba13594dd7fbf2789" class="el">GLFW_KEY_LAST</a>   <a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga9845be48a745fc232045c9ec174d8820" class="el">GLFW_KEY_MENU</a></td>
</tr>
<tr class="separator:ga442cbaef7bfb9a4ba13594dd7fbf2789">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## Macro Definition Documentation

<span id="gaddb2c23772b97fd7e26e8ee66f1ad014"></span>

## <span class="permalink">[◆ ](#gaddb2c23772b97fd7e26e8ee66f1ad014)</span>GLFW_KEY_SPACE

<div class="memitem">

<div class="memproto">

|                              |
|------------------------------|
| \#define GLFW_KEY_SPACE   32 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga6059b0b048ba6980b6107fffbd3b4b24"></span>

## <span class="permalink">[◆ ](#ga6059b0b048ba6980b6107fffbd3b4b24)</span>GLFW_KEY_APOSTROPHE

<div class="memitem">

<div class="memproto">

|                                             |
|---------------------------------------------|
| \#define GLFW_KEY_APOSTROPHE   39 /\* ' \*/ |

</div>

<div class="memdoc">

</div>

</div>

<span id="gab3d5d72e59d3055f494627b0a524926c"></span>

## <span class="permalink">[◆ ](#gab3d5d72e59d3055f494627b0a524926c)</span>GLFW_KEY_COMMA

<div class="memitem">

<div class="memproto">

|                                        |
|----------------------------------------|
| \#define GLFW_KEY_COMMA   44 /\* , \*/ |

</div>

<div class="memdoc">

</div>

</div>

<span id="gac556b360f7f6fca4b70ba0aecf313fd4"></span>

## <span class="permalink">[◆ ](#gac556b360f7f6fca4b70ba0aecf313fd4)</span>GLFW_KEY_MINUS

<div class="memitem">

<div class="memproto">

|                                        |
|----------------------------------------|
| \#define GLFW_KEY_MINUS   45 /\* - \*/ |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga37e296b650eab419fc474ff69033d927"></span>

## <span class="permalink">[◆ ](#ga37e296b650eab419fc474ff69033d927)</span>GLFW_KEY_PERIOD

<div class="memitem">

<div class="memproto">

|                                         |
|-----------------------------------------|
| \#define GLFW_KEY_PERIOD   46 /\* . \*/ |

</div>

<div class="memdoc">

</div>

</div>

<span id="gadf3d753b2d479148d711de34b83fd0db"></span>

## <span class="permalink">[◆ ](#gadf3d753b2d479148d711de34b83fd0db)</span>GLFW_KEY_SLASH

<div class="memitem">

<div class="memproto">

|                                        |
|----------------------------------------|
| \#define GLFW_KEY_SLASH   47 /\* / \*/ |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga50391730e9d7112ad4fd42d0bd1597c1"></span>

## <span class="permalink">[◆ ](#ga50391730e9d7112ad4fd42d0bd1597c1)</span>GLFW_KEY_0

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_0   48 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga05e4cae9ddb8d40cf6d82c8f11f2502f"></span>

## <span class="permalink">[◆ ](#ga05e4cae9ddb8d40cf6d82c8f11f2502f)</span>GLFW_KEY_1

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_1   49 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gadc8e66b3a4c4b5c39ad1305cf852863c"></span>

## <span class="permalink">[◆ ](#gadc8e66b3a4c4b5c39ad1305cf852863c)</span>GLFW_KEY_2

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_2   50 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga812f0273fe1a981e1fa002ae73e92271"></span>

## <span class="permalink">[◆ ](#ga812f0273fe1a981e1fa002ae73e92271)</span>GLFW_KEY_3

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_3   51 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga9e14b6975a9cc8f66cdd5cb3d3861356"></span>

## <span class="permalink">[◆ ](#ga9e14b6975a9cc8f66cdd5cb3d3861356)</span>GLFW_KEY_4

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_4   52 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga4d74ddaa5d4c609993b4d4a15736c924"></span>

## <span class="permalink">[◆ ](#ga4d74ddaa5d4c609993b4d4a15736c924)</span>GLFW_KEY_5

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_5   53 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga9ea4ab80c313a227b14d0a7c6f810b5d"></span>

## <span class="permalink">[◆ ](#ga9ea4ab80c313a227b14d0a7c6f810b5d)</span>GLFW_KEY_6

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_6   54 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gab79b1cfae7bd630cfc4604c1f263c666"></span>

## <span class="permalink">[◆ ](#gab79b1cfae7bd630cfc4604c1f263c666)</span>GLFW_KEY_7

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_7   55 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gadeaa109a0f9f5afc94fe4a108e686f6f"></span>

## <span class="permalink">[◆ ](#gadeaa109a0f9f5afc94fe4a108e686f6f)</span>GLFW_KEY_8

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_8   56 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga2924cb5349ebbf97c8987f3521c44f39"></span>

## <span class="permalink">[◆ ](#ga2924cb5349ebbf97c8987f3521c44f39)</span>GLFW_KEY_9

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_9   57 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga84233de9ee5bb3e8788a5aa07d80af7d"></span>

## <span class="permalink">[◆ ](#ga84233de9ee5bb3e8788a5aa07d80af7d)</span>GLFW_KEY_SEMICOLON

<div class="memitem">

<div class="memproto">

|                                            |
|--------------------------------------------|
| \#define GLFW_KEY_SEMICOLON   59 /\* ; \*/ |

</div>

<div class="memdoc">

</div>

</div>

<span id="gae1a2de47240d6664423c204bdd91bd17"></span>

## <span class="permalink">[◆ ](#gae1a2de47240d6664423c204bdd91bd17)</span>GLFW_KEY_EQUAL

<div class="memitem">

<div class="memproto">

|                                        |
|----------------------------------------|
| \#define GLFW_KEY_EQUAL   61 /\* = \*/ |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga03e842608e1ea323370889d33b8f70ff"></span>

## <span class="permalink">[◆ ](#ga03e842608e1ea323370889d33b8f70ff)</span>GLFW_KEY_A

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_A   65 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga8e3fb647ff3aca9e8dbf14fe66332941"></span>

## <span class="permalink">[◆ ](#ga8e3fb647ff3aca9e8dbf14fe66332941)</span>GLFW_KEY_B

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_B   66 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga00ccf3475d9ee2e679480d540d554669"></span>

## <span class="permalink">[◆ ](#ga00ccf3475d9ee2e679480d540d554669)</span>GLFW_KEY_C

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_C   67 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga011f7cdc9a654da984a2506479606933"></span>

## <span class="permalink">[◆ ](#ga011f7cdc9a654da984a2506479606933)</span>GLFW_KEY_D

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_D   68 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gabf48fcc3afbe69349df432b470c96ef2"></span>

## <span class="permalink">[◆ ](#gabf48fcc3afbe69349df432b470c96ef2)</span>GLFW_KEY_E

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_E   69 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga5df402e02aca08444240058fd9b42a55"></span>

## <span class="permalink">[◆ ](#ga5df402e02aca08444240058fd9b42a55)</span>GLFW_KEY_F

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_F   70 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gae74ecddf7cc96104ab23989b1cdab536"></span>

## <span class="permalink">[◆ ](#gae74ecddf7cc96104ab23989b1cdab536)</span>GLFW_KEY_G

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_G   71 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gad4cc98fc8f35f015d9e2fb94bf136076"></span>

## <span class="permalink">[◆ ](#gad4cc98fc8f35f015d9e2fb94bf136076)</span>GLFW_KEY_H

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_H   72 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga274655c8bfe39742684ca393cf8ed093"></span>

## <span class="permalink">[◆ ](#ga274655c8bfe39742684ca393cf8ed093)</span>GLFW_KEY_I

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_I   73 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga65ff2aedb129a3149ad9cb3e4159a75f"></span>

## <span class="permalink">[◆ ](#ga65ff2aedb129a3149ad9cb3e4159a75f)</span>GLFW_KEY_J

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_J   74 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga4ae8debadf6d2a691badae0b53ea3ba0"></span>

## <span class="permalink">[◆ ](#ga4ae8debadf6d2a691badae0b53ea3ba0)</span>GLFW_KEY_K

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_K   75 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaaa8b54a13f6b1eed85ac86f82d550db2"></span>

## <span class="permalink">[◆ ](#gaaa8b54a13f6b1eed85ac86f82d550db2)</span>GLFW_KEY_L

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_L   76 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga4d7f0260c82e4ea3d6ebc7a21d6e3716"></span>

## <span class="permalink">[◆ ](#ga4d7f0260c82e4ea3d6ebc7a21d6e3716)</span>GLFW_KEY_M

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_M   77 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gae00856dfeb5d13aafebf59d44de5cdda"></span>

## <span class="permalink">[◆ ](#gae00856dfeb5d13aafebf59d44de5cdda)</span>GLFW_KEY_N

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_N   78 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaecbbb79130df419d58dd7f09a169efe9"></span>

## <span class="permalink">[◆ ](#gaecbbb79130df419d58dd7f09a169efe9)</span>GLFW_KEY_O

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_O   79 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga8fc15819c1094fb2afa01d84546b33e1"></span>

## <span class="permalink">[◆ ](#ga8fc15819c1094fb2afa01d84546b33e1)</span>GLFW_KEY_P

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_P   80 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gafdd01e38b120d67cf51e348bb47f3964"></span>

## <span class="permalink">[◆ ](#gafdd01e38b120d67cf51e348bb47f3964)</span>GLFW_KEY_Q

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_Q   81 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga4ce6c70a0c98c50b3fe4ab9a728d4d36"></span>

## <span class="permalink">[◆ ](#ga4ce6c70a0c98c50b3fe4ab9a728d4d36)</span>GLFW_KEY_R

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_R   82 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga1570e2ccaab036ea82bed66fc1dab2a9"></span>

## <span class="permalink">[◆ ](#ga1570e2ccaab036ea82bed66fc1dab2a9)</span>GLFW_KEY_S

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_S   83 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga90e0560422ec7a30e7f3f375bc9f37f9"></span>

## <span class="permalink">[◆ ](#ga90e0560422ec7a30e7f3f375bc9f37f9)</span>GLFW_KEY_T

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_T   84 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gacad52f3bf7d378fc0ffa72a76769256d"></span>

## <span class="permalink">[◆ ](#gacad52f3bf7d378fc0ffa72a76769256d)</span>GLFW_KEY_U

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_U   85 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga22c7763899ecf7788862e5f90eacce6b"></span>

## <span class="permalink">[◆ ](#ga22c7763899ecf7788862e5f90eacce6b)</span>GLFW_KEY_V

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_V   86 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaa06a712e6202661fc03da5bdb7b6e545"></span>

## <span class="permalink">[◆ ](#gaa06a712e6202661fc03da5bdb7b6e545)</span>GLFW_KEY_W

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_W   87 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gac1c42c0bf4192cea713c55598b06b744"></span>

## <span class="permalink">[◆ ](#gac1c42c0bf4192cea713c55598b06b744)</span>GLFW_KEY_X

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_X   88 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gafd9f115a549effdf8e372a787c360313"></span>

## <span class="permalink">[◆ ](#gafd9f115a549effdf8e372a787c360313)</span>GLFW_KEY_Y

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_Y   89 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gac489e208c26afda8d4938ed88718760a"></span>

## <span class="permalink">[◆ ](#gac489e208c26afda8d4938ed88718760a)</span>GLFW_KEY_Z

<div class="memitem">

<div class="memproto">

|                          |
|--------------------------|
| \#define GLFW_KEY_Z   90 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gad1c8d9adac53925276ecb1d592511d8a"></span>

## <span class="permalink">[◆ ](#gad1c8d9adac53925276ecb1d592511d8a)</span>GLFW_KEY_LEFT_BRACKET

<div class="memitem">

<div class="memproto">

|                                                |
|------------------------------------------------|
| \#define GLFW_KEY_LEFT_BRACKET   91 /\* \[ \*/ |

</div>

<div class="memdoc">

</div>

</div>

<span id="gab8155ea99d1ab27ff56f24f8dc73f8d1"></span>

## <span class="permalink">[◆ ](#gab8155ea99d1ab27ff56f24f8dc73f8d1)</span>GLFW_KEY_BACKSLASH

<div class="memitem">

<div class="memproto">

|                                             |
|---------------------------------------------|
| \#define GLFW_KEY_BACKSLASH   92 /\* \\ \*/ |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga86ef225fd6a66404caae71044cdd58d8"></span>

## <span class="permalink">[◆ ](#ga86ef225fd6a66404caae71044cdd58d8)</span>GLFW_KEY_RIGHT_BRACKET

<div class="memitem">

<div class="memproto">

|                                                 |
|-------------------------------------------------|
| \#define GLFW_KEY_RIGHT_BRACKET   93 /\* \] \*/ |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga7a3701fb4e2a0b136ff4b568c3c8d668"></span>

## <span class="permalink">[◆ ](#ga7a3701fb4e2a0b136ff4b568c3c8d668)</span>GLFW_KEY_GRAVE_ACCENT

<div class="memitem">

<div class="memproto">

|                                                |
|------------------------------------------------|
| \#define GLFW_KEY_GRAVE_ACCENT   96 /\* \` \*/ |

</div>

<div class="memdoc">

</div>

</div>

<span id="gadc78dad3dab76bcd4b5c20114052577a"></span>

## <span class="permalink">[◆ ](#gadc78dad3dab76bcd4b5c20114052577a)</span>GLFW_KEY_WORLD_1

<div class="memitem">

<div class="memproto">

|                                                    |
|----------------------------------------------------|
| \#define GLFW_KEY_WORLD_1   161 /\* non-US \#1 \*/ |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga20494bfebf0bb4fc9503afca18ab2c5e"></span>

## <span class="permalink">[◆ ](#ga20494bfebf0bb4fc9503afca18ab2c5e)</span>GLFW_KEY_WORLD_2

<div class="memitem">

<div class="memproto">

|                                                    |
|----------------------------------------------------|
| \#define GLFW_KEY_WORLD_2   162 /\* non-US \#2 \*/ |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaac6596c350b635c245113b81c2123b93"></span>

## <span class="permalink">[◆ ](#gaac6596c350b635c245113b81c2123b93)</span>GLFW_KEY_ESCAPE

<div class="memitem">

<div class="memproto">

|                                |
|--------------------------------|
| \#define GLFW_KEY_ESCAPE   256 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga9555a92ecbecdbc1f3435219c571d667"></span>

## <span class="permalink">[◆ ](#ga9555a92ecbecdbc1f3435219c571d667)</span>GLFW_KEY_ENTER

<div class="memitem">

<div class="memproto">

|                               |
|-------------------------------|
| \#define GLFW_KEY_ENTER   257 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga6908a4bda9950a3e2b73f794bbe985df"></span>

## <span class="permalink">[◆ ](#ga6908a4bda9950a3e2b73f794bbe985df)</span>GLFW_KEY_TAB

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_TAB   258 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga6c0df1fe2f156bbd5a98c66d76ff3635"></span>

## <span class="permalink">[◆ ](#ga6c0df1fe2f156bbd5a98c66d76ff3635)</span>GLFW_KEY_BACKSPACE

<div class="memitem">

<div class="memproto">

|                                   |
|-----------------------------------|
| \#define GLFW_KEY_BACKSPACE   259 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga373ac7365435d6b0eb1068f470e34f47"></span>

## <span class="permalink">[◆ ](#ga373ac7365435d6b0eb1068f470e34f47)</span>GLFW_KEY_INSERT

<div class="memitem">

<div class="memproto">

|                                |
|--------------------------------|
| \#define GLFW_KEY_INSERT   260 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gadb111e4df74b8a715f2c05dad58d2682"></span>

## <span class="permalink">[◆ ](#gadb111e4df74b8a715f2c05dad58d2682)</span>GLFW_KEY_DELETE

<div class="memitem">

<div class="memproto">

|                                |
|--------------------------------|
| \#define GLFW_KEY_DELETE   261 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga06ba07662e8c291a4a84535379ffc7ac"></span>

## <span class="permalink">[◆ ](#ga06ba07662e8c291a4a84535379ffc7ac)</span>GLFW_KEY_RIGHT

<div class="memitem">

<div class="memproto">

|                               |
|-------------------------------|
| \#define GLFW_KEY_RIGHT   262 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gae12a010d33c309a67ab9460c51eb2462"></span>

## <span class="permalink">[◆ ](#gae12a010d33c309a67ab9460c51eb2462)</span>GLFW_KEY_LEFT

<div class="memitem">

<div class="memproto">

|                              |
|------------------------------|
| \#define GLFW_KEY_LEFT   263 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gae2e3958c71595607416aa7bf082be2f9"></span>

## <span class="permalink">[◆ ](#gae2e3958c71595607416aa7bf082be2f9)</span>GLFW_KEY_DOWN

<div class="memitem">

<div class="memproto">

|                              |
|------------------------------|
| \#define GLFW_KEY_DOWN   264 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga2f3342b194020d3544c67e3506b6f144"></span>

## <span class="permalink">[◆ ](#ga2f3342b194020d3544c67e3506b6f144)</span>GLFW_KEY_UP

<div class="memitem">

<div class="memproto">

|                            |
|----------------------------|
| \#define GLFW_KEY_UP   265 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga3ab731f9622f0db280178a5f3cc6d586"></span>

## <span class="permalink">[◆ ](#ga3ab731f9622f0db280178a5f3cc6d586)</span>GLFW_KEY_PAGE_UP

<div class="memitem">

<div class="memproto">

|                                 |
|---------------------------------|
| \#define GLFW_KEY_PAGE_UP   266 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaee0a8fa442001cc2147812f84b59041c"></span>

## <span class="permalink">[◆ ](#gaee0a8fa442001cc2147812f84b59041c)</span>GLFW_KEY_PAGE_DOWN

<div class="memitem">

<div class="memproto">

|                                   |
|-----------------------------------|
| \#define GLFW_KEY_PAGE_DOWN   267 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga41452c7287195d481e43207318c126a7"></span>

## <span class="permalink">[◆ ](#ga41452c7287195d481e43207318c126a7)</span>GLFW_KEY_HOME

<div class="memitem">

<div class="memproto">

|                              |
|------------------------------|
| \#define GLFW_KEY_HOME   268 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga86587ea1df19a65978d3e3b8439bedd9"></span>

## <span class="permalink">[◆ ](#ga86587ea1df19a65978d3e3b8439bedd9)</span>GLFW_KEY_END

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_END   269 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga92c1d2c9d63485f3d70f94f688d48672"></span>

## <span class="permalink">[◆ ](#ga92c1d2c9d63485f3d70f94f688d48672)</span>GLFW_KEY_CAPS_LOCK

<div class="memitem">

<div class="memproto">

|                                   |
|-----------------------------------|
| \#define GLFW_KEY_CAPS_LOCK   280 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaf622b63b9537f7084c2ab649b8365630"></span>

## <span class="permalink">[◆ ](#gaf622b63b9537f7084c2ab649b8365630)</span>GLFW_KEY_SCROLL_LOCK

<div class="memitem">

<div class="memproto">

|                                     |
|-------------------------------------|
| \#define GLFW_KEY_SCROLL_LOCK   281 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga3946edc362aeff213b2be6304296cf43"></span>

## <span class="permalink">[◆ ](#ga3946edc362aeff213b2be6304296cf43)</span>GLFW_KEY_NUM_LOCK

<div class="memitem">

<div class="memproto">

|                                  |
|----------------------------------|
| \#define GLFW_KEY_NUM_LOCK   282 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaf964c2e65e97d0cf785a5636ee8df642"></span>

## <span class="permalink">[◆ ](#gaf964c2e65e97d0cf785a5636ee8df642)</span>GLFW_KEY_PRINT_SCREEN

<div class="memitem">

<div class="memproto">

|                                      |
|--------------------------------------|
| \#define GLFW_KEY_PRINT_SCREEN   283 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga8116b9692d87382afb5849b6d8907f18"></span>

## <span class="permalink">[◆ ](#ga8116b9692d87382afb5849b6d8907f18)</span>GLFW_KEY_PAUSE

<div class="memitem">

<div class="memproto">

|                               |
|-------------------------------|
| \#define GLFW_KEY_PAUSE   284 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gafb8d66c573acf22e364049477dcbea30"></span>

## <span class="permalink">[◆ ](#gafb8d66c573acf22e364049477dcbea30)</span>GLFW_KEY_F1

<div class="memitem">

<div class="memproto">

|                            |
|----------------------------|
| \#define GLFW_KEY_F1   290 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga0900750aff94889b940f5e428c07daee"></span>

## <span class="permalink">[◆ ](#ga0900750aff94889b940f5e428c07daee)</span>GLFW_KEY_F2

<div class="memitem">

<div class="memproto">

|                            |
|----------------------------|
| \#define GLFW_KEY_F2   291 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaed7cd729c0147a551bb8b7bb36c17015"></span>

## <span class="permalink">[◆ ](#gaed7cd729c0147a551bb8b7bb36c17015)</span>GLFW_KEY_F3

<div class="memitem">

<div class="memproto">

|                            |
|----------------------------|
| \#define GLFW_KEY_F3   292 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga9b61ebd0c63b44b7332fda2c9763eaa6"></span>

## <span class="permalink">[◆ ](#ga9b61ebd0c63b44b7332fda2c9763eaa6)</span>GLFW_KEY_F4

<div class="memitem">

<div class="memproto">

|                            |
|----------------------------|
| \#define GLFW_KEY_F4   293 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaf258dda9947daa428377938ed577c8c2"></span>

## <span class="permalink">[◆ ](#gaf258dda9947daa428377938ed577c8c2)</span>GLFW_KEY_F5

<div class="memitem">

<div class="memproto">

|                            |
|----------------------------|
| \#define GLFW_KEY_F5   294 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga6dc2d3f87b9d51ffbbbe2ef0299d8e1d"></span>

## <span class="permalink">[◆ ](#ga6dc2d3f87b9d51ffbbbe2ef0299d8e1d)</span>GLFW_KEY_F6

<div class="memitem">

<div class="memproto">

|                            |
|----------------------------|
| \#define GLFW_KEY_F6   295 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gacca6ef8a2162c52a0ac1d881e8d9c38a"></span>

## <span class="permalink">[◆ ](#gacca6ef8a2162c52a0ac1d881e8d9c38a)</span>GLFW_KEY_F7

<div class="memitem">

<div class="memproto">

|                            |
|----------------------------|
| \#define GLFW_KEY_F7   296 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gac9d39390336ae14e4a93e295de43c7e8"></span>

## <span class="permalink">[◆ ](#gac9d39390336ae14e4a93e295de43c7e8)</span>GLFW_KEY_F8

<div class="memitem">

<div class="memproto">

|                            |
|----------------------------|
| \#define GLFW_KEY_F8   297 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gae40de0de1c9f21cd26c9afa3d7050851"></span>

## <span class="permalink">[◆ ](#gae40de0de1c9f21cd26c9afa3d7050851)</span>GLFW_KEY_F9

<div class="memitem">

<div class="memproto">

|                            |
|----------------------------|
| \#define GLFW_KEY_F9   298 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga718d11d2f7d57471a2f6a894235995b1"></span>

## <span class="permalink">[◆ ](#ga718d11d2f7d57471a2f6a894235995b1)</span>GLFW_KEY_F10

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_F10   299 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga0bc04b11627e7d69339151e7306b2832"></span>

## <span class="permalink">[◆ ](#ga0bc04b11627e7d69339151e7306b2832)</span>GLFW_KEY_F11

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_F11   300 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaf5908fa9b0a906ae03fc2c61ac7aa3e2"></span>

## <span class="permalink">[◆ ](#gaf5908fa9b0a906ae03fc2c61ac7aa3e2)</span>GLFW_KEY_F12

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_F12   301 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gad637f4308655e1001bd6ad942bc0fd4b"></span>

## <span class="permalink">[◆ ](#gad637f4308655e1001bd6ad942bc0fd4b)</span>GLFW_KEY_F13

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_F13   302 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaf14c66cff3396e5bd46e803c035e6c1f"></span>

## <span class="permalink">[◆ ](#gaf14c66cff3396e5bd46e803c035e6c1f)</span>GLFW_KEY_F14

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_F14   303 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga7f70970db6e8be1794da8516a6d14058"></span>

## <span class="permalink">[◆ ](#ga7f70970db6e8be1794da8516a6d14058)</span>GLFW_KEY_F15

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_F15   304 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaa582dbb1d2ba2050aa1dca0838095b27"></span>

## <span class="permalink">[◆ ](#gaa582dbb1d2ba2050aa1dca0838095b27)</span>GLFW_KEY_F16

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_F16   305 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga972ce5c365e2394b36104b0e3125c748"></span>

## <span class="permalink">[◆ ](#ga972ce5c365e2394b36104b0e3125c748)</span>GLFW_KEY_F17

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_F17   306 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaebf6391058d5566601e357edc5ea737c"></span>

## <span class="permalink">[◆ ](#gaebf6391058d5566601e357edc5ea737c)</span>GLFW_KEY_F18

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_F18   307 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaec011d9ba044058cb54529da710e9791"></span>

## <span class="permalink">[◆ ](#gaec011d9ba044058cb54529da710e9791)</span>GLFW_KEY_F19

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_F19   308 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga82b9c721ada04cd5ca8de767da38022f"></span>

## <span class="permalink">[◆ ](#ga82b9c721ada04cd5ca8de767da38022f)</span>GLFW_KEY_F20

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_F20   309 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga356afb14d3440ff2bb378f74f7ebc60f"></span>

## <span class="permalink">[◆ ](#ga356afb14d3440ff2bb378f74f7ebc60f)</span>GLFW_KEY_F21

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_F21   310 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga90960bd2a155f2b09675324d3dff1565"></span>

## <span class="permalink">[◆ ](#ga90960bd2a155f2b09675324d3dff1565)</span>GLFW_KEY_F22

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_F22   311 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga43c21099aac10952d1be909a8ddee4d5"></span>

## <span class="permalink">[◆ ](#ga43c21099aac10952d1be909a8ddee4d5)</span>GLFW_KEY_F23

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_F23   312 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga8150374677b5bed3043408732152dea2"></span>

## <span class="permalink">[◆ ](#ga8150374677b5bed3043408732152dea2)</span>GLFW_KEY_F24

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_F24   313 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaa4bbd93ed73bb4c6ae7d83df880b7199"></span>

## <span class="permalink">[◆ ](#gaa4bbd93ed73bb4c6ae7d83df880b7199)</span>GLFW_KEY_F25

<div class="memitem">

<div class="memproto">

|                             |
|-----------------------------|
| \#define GLFW_KEY_F25   314 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga10515dafc55b71e7683f5b4fedd1c70d"></span>

## <span class="permalink">[◆ ](#ga10515dafc55b71e7683f5b4fedd1c70d)</span>GLFW_KEY_KP_0

<div class="memitem">

<div class="memproto">

|                              |
|------------------------------|
| \#define GLFW_KEY_KP_0   320 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaf3a29a334402c5eaf0b3439edf5587c3"></span>

## <span class="permalink">[◆ ](#gaf3a29a334402c5eaf0b3439edf5587c3)</span>GLFW_KEY_KP_1

<div class="memitem">

<div class="memproto">

|                              |
|------------------------------|
| \#define GLFW_KEY_KP_1   321 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaf82d5a802ab8213c72653d7480c16f13"></span>

## <span class="permalink">[◆ ](#gaf82d5a802ab8213c72653d7480c16f13)</span>GLFW_KEY_KP_2

<div class="memitem">

<div class="memproto">

|                              |
|------------------------------|
| \#define GLFW_KEY_KP_2   322 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga7e25ff30d56cd512828c1d4ae8d54ef2"></span>

## <span class="permalink">[◆ ](#ga7e25ff30d56cd512828c1d4ae8d54ef2)</span>GLFW_KEY_KP_3

<div class="memitem">

<div class="memproto">

|                              |
|------------------------------|
| \#define GLFW_KEY_KP_3   323 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gada7ec86778b85e0b4de0beea72234aea"></span>

## <span class="permalink">[◆ ](#gada7ec86778b85e0b4de0beea72234aea)</span>GLFW_KEY_KP_4

<div class="memitem">

<div class="memproto">

|                              |
|------------------------------|
| \#define GLFW_KEY_KP_4   324 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga9a5be274434866c51738cafbb6d26b45"></span>

## <span class="permalink">[◆ ](#ga9a5be274434866c51738cafbb6d26b45)</span>GLFW_KEY_KP_5

<div class="memitem">

<div class="memproto">

|                              |
|------------------------------|
| \#define GLFW_KEY_KP_5   325 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gafc141b0f8450519084c01092a3157faa"></span>

## <span class="permalink">[◆ ](#gafc141b0f8450519084c01092a3157faa)</span>GLFW_KEY_KP_6

<div class="memitem">

<div class="memproto">

|                              |
|------------------------------|
| \#define GLFW_KEY_KP_6   326 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga8882f411f05d04ec77a9563974bbfa53"></span>

## <span class="permalink">[◆ ](#ga8882f411f05d04ec77a9563974bbfa53)</span>GLFW_KEY_KP_7

<div class="memitem">

<div class="memproto">

|                              |
|------------------------------|
| \#define GLFW_KEY_KP_7   327 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gab2ea2e6a12f89d315045af520ac78cec"></span>

## <span class="permalink">[◆ ](#gab2ea2e6a12f89d315045af520ac78cec)</span>GLFW_KEY_KP_8

<div class="memitem">

<div class="memproto">

|                              |
|------------------------------|
| \#define GLFW_KEY_KP_8   328 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gafb21426b630ed4fcc084868699ba74c1"></span>

## <span class="permalink">[◆ ](#gafb21426b630ed4fcc084868699ba74c1)</span>GLFW_KEY_KP_9

<div class="memitem">

<div class="memproto">

|                              |
|------------------------------|
| \#define GLFW_KEY_KP_9   329 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga4e231d968796331a9ea0dbfb98d4005b"></span>

## <span class="permalink">[◆ ](#ga4e231d968796331a9ea0dbfb98d4005b)</span>GLFW_KEY_KP_DECIMAL

<div class="memitem">

<div class="memproto">

|                                    |
|------------------------------------|
| \#define GLFW_KEY_KP_DECIMAL   330 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gabca1733780a273d549129ad0f250d1e5"></span>

## <span class="permalink">[◆ ](#gabca1733780a273d549129ad0f250d1e5)</span>GLFW_KEY_KP_DIVIDE

<div class="memitem">

<div class="memproto">

|                                   |
|-----------------------------------|
| \#define GLFW_KEY_KP_DIVIDE   331 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga9ada267eb0e78ed2ada8701dd24a56ef"></span>

## <span class="permalink">[◆ ](#ga9ada267eb0e78ed2ada8701dd24a56ef)</span>GLFW_KEY_KP_MULTIPLY

<div class="memitem">

<div class="memproto">

|                                     |
|-------------------------------------|
| \#define GLFW_KEY_KP_MULTIPLY   332 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaa3dbd60782ff93d6082a124bce1fa236"></span>

## <span class="permalink">[◆ ](#gaa3dbd60782ff93d6082a124bce1fa236)</span>GLFW_KEY_KP_SUBTRACT

<div class="memitem">

<div class="memproto">

|                                     |
|-------------------------------------|
| \#define GLFW_KEY_KP_SUBTRACT   333 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gad09c7c98acc79e89aa6a0a91275becac"></span>

## <span class="permalink">[◆ ](#gad09c7c98acc79e89aa6a0a91275becac)</span>GLFW_KEY_KP_ADD

<div class="memitem">

<div class="memproto">

|                                |
|--------------------------------|
| \#define GLFW_KEY_KP_ADD   334 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga4f728f8738f2986bd63eedd3d412e8cf"></span>

## <span class="permalink">[◆ ](#ga4f728f8738f2986bd63eedd3d412e8cf)</span>GLFW_KEY_KP_ENTER

<div class="memitem">

<div class="memproto">

|                                  |
|----------------------------------|
| \#define GLFW_KEY_KP_ENTER   335 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaebdc76d4a808191e6d21b7e4ad2acd97"></span>

## <span class="permalink">[◆ ](#gaebdc76d4a808191e6d21b7e4ad2acd97)</span>GLFW_KEY_KP_EQUAL

<div class="memitem">

<div class="memproto">

|                                  |
|----------------------------------|
| \#define GLFW_KEY_KP_EQUAL   336 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga8a530a28a65c44ab5d00b759b756d3f6"></span>

## <span class="permalink">[◆ ](#ga8a530a28a65c44ab5d00b759b756d3f6)</span>GLFW_KEY_LEFT_SHIFT

<div class="memitem">

<div class="memproto">

|                                    |
|------------------------------------|
| \#define GLFW_KEY_LEFT_SHIFT   340 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga9f97b743e81460ac4b2deddecd10a464"></span>

## <span class="permalink">[◆ ](#ga9f97b743e81460ac4b2deddecd10a464)</span>GLFW_KEY_LEFT_CONTROL

<div class="memitem">

<div class="memproto">

|                                      |
|--------------------------------------|
| \#define GLFW_KEY_LEFT_CONTROL   341 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga7f27dabf63a7789daa31e1c96790219b"></span>

## <span class="permalink">[◆ ](#ga7f27dabf63a7789daa31e1c96790219b)</span>GLFW_KEY_LEFT_ALT

<div class="memitem">

<div class="memproto">

|                                  |
|----------------------------------|
| \#define GLFW_KEY_LEFT_ALT   342 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gafb1207c91997fc295afd1835fbc5641a"></span>

## <span class="permalink">[◆ ](#gafb1207c91997fc295afd1835fbc5641a)</span>GLFW_KEY_LEFT_SUPER

<div class="memitem">

<div class="memproto">

|                                    |
|------------------------------------|
| \#define GLFW_KEY_LEFT_SUPER   343 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gaffca36b99c9dce1a19cb9befbadce691"></span>

## <span class="permalink">[◆ ](#gaffca36b99c9dce1a19cb9befbadce691)</span>GLFW_KEY_RIGHT_SHIFT

<div class="memitem">

<div class="memproto">

|                                     |
|-------------------------------------|
| \#define GLFW_KEY_RIGHT_SHIFT   344 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gad1ca2094b2694e7251d0ab1fd34f8519"></span>

## <span class="permalink">[◆ ](#gad1ca2094b2694e7251d0ab1fd34f8519)</span>GLFW_KEY_RIGHT_CONTROL

<div class="memitem">

<div class="memproto">

|                                       |
|---------------------------------------|
| \#define GLFW_KEY_RIGHT_CONTROL   345 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga687b38009131cfdd07a8d05fff8fa446"></span>

## <span class="permalink">[◆ ](#ga687b38009131cfdd07a8d05fff8fa446)</span>GLFW_KEY_RIGHT_ALT

<div class="memitem">

<div class="memproto">

|                                   |
|-----------------------------------|
| \#define GLFW_KEY_RIGHT_ALT   346 |

</div>

<div class="memdoc">

</div>

</div>

<span id="gad4547a3e8e247594acb60423fe6502db"></span>

## <span class="permalink">[◆ ](#gad4547a3e8e247594acb60423fe6502db)</span>GLFW_KEY_RIGHT_SUPER

<div class="memitem">

<div class="memproto">

|                                     |
|-------------------------------------|
| \#define GLFW_KEY_RIGHT_SUPER   347 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga9845be48a745fc232045c9ec174d8820"></span>

## <span class="permalink">[◆ ](#ga9845be48a745fc232045c9ec174d8820)</span>GLFW_KEY_MENU

<div class="memitem">

<div class="memproto">

|                              |
|------------------------------|
| \#define GLFW_KEY_MENU   348 |

</div>

<div class="memdoc">

</div>

</div>

<span id="ga442cbaef7bfb9a4ba13594dd7fbf2789"></span>

## <span class="permalink">[◆ ](#ga442cbaef7bfb9a4ba13594dd7fbf2789)</span>GLFW_KEY_LAST

<div class="memitem">

<div class="memproto">

|  |
|----|
| \#define GLFW_KEY_LAST   <a href="/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga9845be48a745fc232045c9ec174d8820" class="el">GLFW_KEY_MENU</a> |

</div>

<div class="memdoc">

</div>

</div>
