---
title: "Error codes"
description: "GLFW 3.5.1 Error codes"
licenseSource: "glfw-3.5.1"
---

> This reference page is an altered Markdown adaptation of the [official GLFW 3.5.1 documentation](https://www.glfw.org/docs/3.5.1/). Formatting, navigation and links were changed for libx; technical content comes from the GLFW 3.5.1 source distribution.

<span id="details"></span>

## Description

See <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error handling</a> for how these are used.

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="macros" class="groupheader"><span id="define-members"></span> Macros</h2></td>
</tr>
<tr id="r_gafa30deee5db4d69c4c93d116ed87dbf4" class="memitem:gafa30deee5db4d69c4c93d116ed87dbf4">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gafa30deee5db4d69c4c93d116ed87dbf4" class="el">GLFW_NO_ERROR</a>   0</td>
</tr>
<tr class="memdesc:gafa30deee5db4d69c4c93d116ed87dbf4">
<td class="mdescLeft"> </td>
<td class="mdescRight">No error has occurred.<br />
</td>
</tr>
<tr class="separator:gafa30deee5db4d69c4c93d116ed87dbf4">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga2374ee02c177f12e1fa76ff3ed15e14a" class="memitem:ga2374ee02c177f12e1fa76ff3ed15e14a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>   0x00010001</td>
</tr>
<tr class="memdesc:ga2374ee02c177f12e1fa76ff3ed15e14a">
<td class="mdescLeft"> </td>
<td class="mdescRight">GLFW has not been initialized.<br />
</td>
</tr>
<tr class="separator:ga2374ee02c177f12e1fa76ff3ed15e14a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa8290386e9528ccb9e42a3a4e16fc0d0" class="memitem:gaa8290386e9528ccb9e42a3a4e16fc0d0">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaa8290386e9528ccb9e42a3a4e16fc0d0" class="el">GLFW_NO_CURRENT_CONTEXT</a>   0x00010002</td>
</tr>
<tr class="memdesc:gaa8290386e9528ccb9e42a3a4e16fc0d0">
<td class="mdescLeft"> </td>
<td class="mdescRight">No context is current for this thread.<br />
</td>
</tr>
<tr class="separator:gaa8290386e9528ccb9e42a3a4e16fc0d0">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga76f6bb9c4eea73db675f096b404593ce" class="memitem:ga76f6bb9c4eea73db675f096b404593ce">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>   0x00010003</td>
</tr>
<tr class="memdesc:ga76f6bb9c4eea73db675f096b404593ce">
<td class="mdescLeft"> </td>
<td class="mdescRight">One of the arguments to the function was an invalid enum value.<br />
</td>
</tr>
<tr class="separator:ga76f6bb9c4eea73db675f096b404593ce">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaaf2ef9aa8202c2b82ac2d921e554c687" class="memitem:gaaf2ef9aa8202c2b82ac2d921e554c687">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>   0x00010004</td>
</tr>
<tr class="memdesc:gaaf2ef9aa8202c2b82ac2d921e554c687">
<td class="mdescLeft"> </td>
<td class="mdescRight">One of the arguments to the function was an invalid value.<br />
</td>
</tr>
<tr class="separator:gaaf2ef9aa8202c2b82ac2d921e554c687">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9023953a2bcb98c2906afd071d21ee7f" class="memitem:ga9023953a2bcb98c2906afd071d21ee7f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga9023953a2bcb98c2906afd071d21ee7f" class="el">GLFW_OUT_OF_MEMORY</a>   0x00010005</td>
</tr>
<tr class="memdesc:ga9023953a2bcb98c2906afd071d21ee7f">
<td class="mdescLeft"> </td>
<td class="mdescRight">A memory allocation failed.<br />
</td>
</tr>
<tr class="separator:ga9023953a2bcb98c2906afd071d21ee7f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga56882b290db23261cc6c053c40c2d08e" class="memitem:ga56882b290db23261cc6c053c40c2d08e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a>   0x00010006</td>
</tr>
<tr class="memdesc:ga56882b290db23261cc6c053c40c2d08e">
<td class="mdescLeft"> </td>
<td class="mdescRight">GLFW could not find support for the requested API on the system.<br />
</td>
</tr>
<tr class="separator:ga56882b290db23261cc6c053c40c2d08e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad16c5565b4a69f9c2a9ac2c0dbc89462" class="memitem:gad16c5565b4a69f9c2a9ac2c0dbc89462">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad16c5565b4a69f9c2a9ac2c0dbc89462" class="el">GLFW_VERSION_UNAVAILABLE</a>   0x00010007</td>
</tr>
<tr class="memdesc:gad16c5565b4a69f9c2a9ac2c0dbc89462">
<td class="mdescLeft"> </td>
<td class="mdescRight">The requested OpenGL or OpenGL ES version is not available.<br />
</td>
</tr>
<tr class="separator:gad16c5565b4a69f9c2a9ac2c0dbc89462">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad44162d78100ea5e87cdd38426b8c7a1" class="memitem:gad44162d78100ea5e87cdd38426b8c7a1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>   0x00010008</td>
</tr>
<tr class="memdesc:gad44162d78100ea5e87cdd38426b8c7a1">
<td class="mdescLeft"> </td>
<td class="mdescRight">A platform-specific error occurred that does not match any of the more specific categories.<br />
</td>
</tr>
<tr class="separator:gad44162d78100ea5e87cdd38426b8c7a1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga196e125ef261d94184e2b55c05762f14" class="memitem:ga196e125ef261d94184e2b55c05762f14">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga196e125ef261d94184e2b55c05762f14" class="el">GLFW_FORMAT_UNAVAILABLE</a>   0x00010009</td>
</tr>
<tr class="memdesc:ga196e125ef261d94184e2b55c05762f14">
<td class="mdescLeft"> </td>
<td class="mdescRight">The requested format is not supported or available.<br />
</td>
</tr>
<tr class="separator:ga196e125ef261d94184e2b55c05762f14">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gacff24d2757da752ae4c80bf452356487" class="memitem:gacff24d2757da752ae4c80bf452356487">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a>   0x0001000A</td>
</tr>
<tr class="memdesc:gacff24d2757da752ae4c80bf452356487">
<td class="mdescLeft"> </td>
<td class="mdescRight">The specified window does not have an OpenGL or OpenGL ES context.<br />
</td>
</tr>
<tr class="separator:gacff24d2757da752ae4c80bf452356487">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga09d6943923a70ddef3a085f5baee786c" class="memitem:ga09d6943923a70ddef3a085f5baee786c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga09d6943923a70ddef3a085f5baee786c" class="el">GLFW_CURSOR_UNAVAILABLE</a>   0x0001000B</td>
</tr>
<tr class="memdesc:ga09d6943923a70ddef3a085f5baee786c">
<td class="mdescLeft"> </td>
<td class="mdescRight">The specified cursor shape is not available.<br />
</td>
</tr>
<tr class="separator:ga09d6943923a70ddef3a085f5baee786c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga526fba20a01504a8086c763b6ca53ce5" class="memitem:ga526fba20a01504a8086c763b6ca53ce5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>   0x0001000C</td>
</tr>
<tr class="memdesc:ga526fba20a01504a8086c763b6ca53ce5">
<td class="mdescLeft"> </td>
<td class="mdescRight">The requested feature is not provided by the platform.<br />
</td>
</tr>
<tr class="separator:ga526fba20a01504a8086c763b6ca53ce5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5dda77e023e83151e8bd55a6758f946a" class="memitem:ga5dda77e023e83151e8bd55a6758f946a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga5dda77e023e83151e8bd55a6758f946a" class="el">GLFW_FEATURE_UNIMPLEMENTED</a>   0x0001000D</td>
</tr>
<tr class="memdesc:ga5dda77e023e83151e8bd55a6758f946a">
<td class="mdescLeft"> </td>
<td class="mdescRight">The requested feature is not implemented for the platform.<br />
</td>
</tr>
<tr class="separator:ga5dda77e023e83151e8bd55a6758f946a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3608c6c29ab7a72f3bf019f4c3a2563d" class="memitem:ga3608c6c29ab7a72f3bf019f4c3a2563d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>   0x0001000E</td>
</tr>
<tr class="memdesc:ga3608c6c29ab7a72f3bf019f4c3a2563d">
<td class="mdescLeft"> </td>
<td class="mdescRight">Platform unavailable or no matching platform was found.<br />
</td>
</tr>
<tr class="separator:ga3608c6c29ab7a72f3bf019f4c3a2563d">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## Macro Definition Documentation

<span id="gafa30deee5db4d69c4c93d116ed87dbf4"></span>

## <span class="permalink">[◆ ](#gafa30deee5db4d69c4c93d116ed87dbf4)</span>GLFW_NO_ERROR

<div class="memitem">

<div class="memproto">

|                            |
|----------------------------|
| \#define GLFW_NO_ERROR   0 |

</div>

<div class="memdoc">

No error has occurred.

Analysis  
Yay.

</div>

</div>

<span id="ga2374ee02c177f12e1fa76ff3ed15e14a"></span>

## <span class="permalink">[◆ ](#ga2374ee02c177f12e1fa76ff3ed15e14a)</span>GLFW_NOT_INITIALIZED

<div class="memitem">

<div class="memproto">

|                                            |
|--------------------------------------------|
| \#define GLFW_NOT_INITIALIZED   0x00010001 |

</div>

<div class="memdoc">

This occurs if a GLFW function was called that must not be called unless the library is <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init" class="el">initialized</a>.

Analysis  
Application programmer error. Initialize GLFW before calling any function that requires initialization.

</div>

</div>

<span id="gaa8290386e9528ccb9e42a3a4e16fc0d0"></span>

## <span class="permalink">[◆ ](#gaa8290386e9528ccb9e42a3a4e16fc0d0)</span>GLFW_NO_CURRENT_CONTEXT

<div class="memitem">

<div class="memproto">

|                                               |
|-----------------------------------------------|
| \#define GLFW_NO_CURRENT_CONTEXT   0x00010002 |

</div>

<div class="memdoc">

This occurs if a GLFW function was called that needs and operates on the current OpenGL or OpenGL ES context but no context is current on the calling thread. One such function is <a href="/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#ga6d4e0cdf151b5e579bd67f13202994ed" class="el">glfwSwapInterval</a>.

Analysis  
Application programmer error. Ensure a context is current before calling functions that require a current context.

</div>

</div>

<span id="ga76f6bb9c4eea73db675f096b404593ce"></span>

## <span class="permalink">[◆ ](#ga76f6bb9c4eea73db675f096b404593ce)</span>GLFW_INVALID_ENUM

<div class="memitem">

<div class="memproto">

|                                         |
|-----------------------------------------|
| \#define GLFW_INVALID_ENUM   0x00010003 |

</div>

<div class="memdoc">

One of the arguments to the function was an invalid enum value, for example requesting <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_RED_BITS" class="el">GLFW_RED_BITS</a> with <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337" class="el">glfwGetWindowAttrib</a>.

Analysis  
Application programmer error. Fix the offending call.

</div>

</div>

<span id="gaaf2ef9aa8202c2b82ac2d921e554c687"></span>

## <span class="permalink">[◆ ](#gaaf2ef9aa8202c2b82ac2d921e554c687)</span>GLFW_INVALID_VALUE

<div class="memitem">

<div class="memproto">

|                                          |
|------------------------------------------|
| \#define GLFW_INVALID_VALUE   0x00010004 |

</div>

<div class="memdoc">

One of the arguments to the function was an invalid value, for example requesting a non-existent OpenGL or OpenGL ES version like 2.7.

Requesting a valid but unavailable OpenGL or OpenGL ES version will instead result in a <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad16c5565b4a69f9c2a9ac2c0dbc89462" class="el">GLFW_VERSION_UNAVAILABLE</a> error.

Analysis  
Application programmer error. Fix the offending call.

</div>

</div>

<span id="ga9023953a2bcb98c2906afd071d21ee7f"></span>

## <span class="permalink">[◆ ](#ga9023953a2bcb98c2906afd071d21ee7f)</span>GLFW_OUT_OF_MEMORY

<div class="memitem">

<div class="memproto">

|                                          |
|------------------------------------------|
| \#define GLFW_OUT_OF_MEMORY   0x00010005 |

</div>

<div class="memdoc">

A memory allocation failed.

Analysis  
A bug in GLFW or the underlying operating system. Report the bug to our [issue tracker](https://github.com/glfw/glfw/issues).

</div>

</div>

<span id="ga56882b290db23261cc6c053c40c2d08e"></span>

## <span class="permalink">[◆ ](#ga56882b290db23261cc6c053c40c2d08e)</span>GLFW_API_UNAVAILABLE

<div class="memitem">

<div class="memproto">

|                                            |
|--------------------------------------------|
| \#define GLFW_API_UNAVAILABLE   0x00010006 |

</div>

<div class="memdoc">

GLFW could not find support for the requested API on the system.

Analysis  
The installed graphics driver does not support the requested API, or does not support it via the chosen context creation API. Below are a few examples.

<!-- -->

  
Some pre-installed Windows graphics drivers do not support OpenGL. AMD only supports OpenGL ES via EGL, while Nvidia and Intel only support it via a WGL or GLX extension. macOS does not provide OpenGL ES at all. The Mesa EGL, OpenGL and OpenGL ES libraries do not interface with the Nvidia binary driver. Older graphics drivers do not support Vulkan.

</div>

</div>

<span id="gad16c5565b4a69f9c2a9ac2c0dbc89462"></span>

## <span class="permalink">[◆ ](#gad16c5565b4a69f9c2a9ac2c0dbc89462)</span>GLFW_VERSION_UNAVAILABLE

<div class="memitem">

<div class="memproto">

|                                                |
|------------------------------------------------|
| \#define GLFW_VERSION_UNAVAILABLE   0x00010007 |

</div>

<div class="memdoc">

The requested OpenGL or OpenGL ES version (including any requested context or framebuffer hints) is not available on this machine.

Analysis  
The machine does not support your requirements. If your application is sufficiently flexible, downgrade your requirements and try again. Otherwise, inform the user that their machine does not match your requirements.

<!-- -->

  
Future invalid OpenGL and OpenGL ES versions, for example OpenGL 4.8 if 5.0 comes out before the 4.x series gets that far, also fail with this error and not <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>, because GLFW cannot know what future versions will exist.

</div>

</div>

<span id="gad44162d78100ea5e87cdd38426b8c7a1"></span>

## <span class="permalink">[◆ ](#gad44162d78100ea5e87cdd38426b8c7a1)</span>GLFW_PLATFORM_ERROR

<div class="memitem">

<div class="memproto">

|                                           |
|-------------------------------------------|
| \#define GLFW_PLATFORM_ERROR   0x00010008 |

</div>

<div class="memdoc">

A platform-specific error occurred that does not match any of the more specific categories.

Analysis  
A bug or configuration error in GLFW, the underlying operating system or its drivers, or a lack of required resources. Report the issue to our [issue tracker](https://github.com/glfw/glfw/issues).

</div>

</div>

<span id="ga196e125ef261d94184e2b55c05762f14"></span>

## <span class="permalink">[◆ ](#ga196e125ef261d94184e2b55c05762f14)</span>GLFW_FORMAT_UNAVAILABLE

<div class="memitem">

<div class="memproto">

|                                               |
|-----------------------------------------------|
| \#define GLFW_FORMAT_UNAVAILABLE   0x00010009 |

</div>

<div class="memdoc">

If emitted during window creation, the requested pixel format is not supported.

If emitted when querying the clipboard, the contents of the clipboard could not be converted to the requested format.

Analysis  
If emitted during window creation, one or more <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_hints_hard" class="el">hard constraints</a> did not match any of the available pixel formats. If your application is sufficiently flexible, downgrade your requirements and try again. Otherwise, inform the user that their machine does not match your requirements.

<!-- -->

  
If emitted when querying the clipboard, ignore the error or report it to the user, as appropriate.

</div>

</div>

<span id="gacff24d2757da752ae4c80bf452356487"></span>

## <span class="permalink">[◆ ](#gacff24d2757da752ae4c80bf452356487)</span>GLFW_NO_WINDOW_CONTEXT

<div class="memitem">

<div class="memproto">

|                                              |
|----------------------------------------------|
| \#define GLFW_NO_WINDOW_CONTEXT   0x0001000A |

</div>

<div class="memdoc">

A window that does not have an OpenGL or OpenGL ES context was passed to a function that requires it to have one.

Analysis  
Application programmer error. Fix the offending call.

</div>

</div>

<span id="ga09d6943923a70ddef3a085f5baee786c"></span>

## <span class="permalink">[◆ ](#ga09d6943923a70ddef3a085f5baee786c)</span>GLFW_CURSOR_UNAVAILABLE

<div class="memitem">

<div class="memproto">

|                                               |
|-----------------------------------------------|
| \#define GLFW_CURSOR_UNAVAILABLE   0x0001000B |

</div>

<div class="memdoc">

The specified standard cursor shape is not available, either because the current platform cursor theme does not provide it or because it is not available on the platform.

Analysis  
Platform or system settings limitation. Pick another <a href="/docs/glfw/v3-5-1/en/04-reference/16-standard-cursor-shapes/" class="el">standard cursor shape</a> or create a <a href="/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#cursor_custom" class="el">custom cursor</a>.

</div>

</div>

<span id="ga526fba20a01504a8086c763b6ca53ce5"></span>

## <span class="permalink">[◆ ](#ga526fba20a01504a8086c763b6ca53ce5)</span>GLFW_FEATURE_UNAVAILABLE

<div class="memitem">

<div class="memproto">

|                                                |
|------------------------------------------------|
| \#define GLFW_FEATURE_UNAVAILABLE   0x0001000C |

</div>

<div class="memdoc">

The requested feature is not provided by the platform, so GLFW is unable to implement it. The documentation for each function notes if it could emit this error.

Analysis  
Platform or platform version limitation. The error can be ignored unless the feature is critical to the application.

<!-- -->

  
A function call that emits this error has no effect other than the error and updating any existing out parameters.

</div>

</div>

<span id="ga5dda77e023e83151e8bd55a6758f946a"></span>

## <span class="permalink">[◆ ](#ga5dda77e023e83151e8bd55a6758f946a)</span>GLFW_FEATURE_UNIMPLEMENTED

<div class="memitem">

<div class="memproto">

|                                                  |
|--------------------------------------------------|
| \#define GLFW_FEATURE_UNIMPLEMENTED   0x0001000D |

</div>

<div class="memdoc">

The requested feature has not yet been implemented in GLFW for this platform.

Analysis  
An incomplete implementation of GLFW for this platform, hopefully fixed in a future release. The error can be ignored unless the feature is critical to the application.

<!-- -->

  
A function call that emits this error has no effect other than the error and updating any existing out parameters.

</div>

</div>

<span id="ga3608c6c29ab7a72f3bf019f4c3a2563d"></span>

## <span class="permalink">[◆ ](#ga3608c6c29ab7a72f3bf019f4c3a2563d)</span>GLFW_PLATFORM_UNAVAILABLE

<div class="memitem">

<div class="memproto">

|                                                 |
|-------------------------------------------------|
| \#define GLFW_PLATFORM_UNAVAILABLE   0x0001000E |

</div>

<div class="memdoc">

If emitted during initialization, no matching platform was found. If the <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#GLFW_PLATFORM" class="el">GLFW_PLATFORM</a> init hint was set to `GLFW_ANY_PLATFORM`, GLFW could not detect any of the platforms supported by this library binary, except for the Null platform. If the init hint was set to a specific platform, it is either not supported by this library binary or GLFW was not able to detect it.

If emitted by a native access function, GLFW was initialized for a different platform than the function is for.

Analysis  
Failure to detect any platform usually only happens on non-macOS Unix systems, either when no window system is running or the program was run from a terminal that does not have the necessary environment variables. Fall back to a different platform if possible or notify the user that no usable platform was detected.

Failure to detect a specific platform may have the same cause as above or be because support for that platform was not compiled in. Call <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga8785d2b6b36632368d803e78079d38ed" class="el">glfwPlatformSupported</a> to check whether a specific platform is supported by a library binary.

</div>

</div>
