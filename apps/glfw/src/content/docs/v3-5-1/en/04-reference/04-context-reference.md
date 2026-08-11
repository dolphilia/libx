---
title: "Context reference"
description: "GLFW 3.5.1 Context reference"
licenseSource: "glfw-3.5.1"
---

> This reference page is an altered Markdown adaptation of the [official GLFW 3.5.1 documentation](https://www.glfw.org/docs/3.5.1/). Formatting, navigation and links were changed for libx; technical content comes from the GLFW 3.5.1 source distribution.

<span id="details"></span>

## Description

This is the reference documentation for OpenGL and OpenGL ES context related functions. For more task-oriented information, see the <a href="/docs/glfw/v3-5-1/en/03-guides/02-context-guide/" class="el">Context guide</a>.

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="typedefs" class="groupheader"><span id="typedef-members"></span> Typedefs</h2></td>
</tr>
<tr id="r_ga3d47c2d2fbe0be9c505d0e04e91a133c" class="memitem:ga3d47c2d2fbe0be9c505d0e04e91a133c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#ga3d47c2d2fbe0be9c505d0e04e91a133c" class="el">GLFWglproc</a>) (void)</td>
</tr>
<tr class="memdesc:ga3d47c2d2fbe0be9c505d0e04e91a133c">
<td class="mdescLeft"> </td>
<td class="mdescRight">Client API function pointer type.<br />
</td>
</tr>
<tr class="separator:ga3d47c2d2fbe0be9c505d0e04e91a133c">
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
<tr id="r_ga1c04dc242268f827290fe40aa1c91157" class="memitem:ga1c04dc242268f827290fe40aa1c91157">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#ga1c04dc242268f827290fe40aa1c91157" class="el">glfwMakeContextCurrent</a> (<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga1c04dc242268f827290fe40aa1c91157">
<td class="mdescLeft"> </td>
<td class="mdescRight">Makes the context of the specified window current for the calling thread.<br />
</td>
</tr>
<tr class="separator:ga1c04dc242268f827290fe40aa1c91157">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad94e80185397a6cf5fe2ab30567af71c" class="memitem:gad94e80185397a6cf5fe2ab30567af71c">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#gad94e80185397a6cf5fe2ab30567af71c" class="el">glfwGetCurrentContext</a> (void)</td>
</tr>
<tr class="memdesc:gad94e80185397a6cf5fe2ab30567af71c">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the window whose context is current on the calling thread.<br />
</td>
</tr>
<tr class="separator:gad94e80185397a6cf5fe2ab30567af71c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6d4e0cdf151b5e579bd67f13202994ed" class="memitem:ga6d4e0cdf151b5e579bd67f13202994ed">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#ga6d4e0cdf151b5e579bd67f13202994ed" class="el">glfwSwapInterval</a> (int interval)</td>
</tr>
<tr class="memdesc:ga6d4e0cdf151b5e579bd67f13202994ed">
<td class="mdescLeft"> </td>
<td class="mdescRight">Sets the swap interval for the current context.<br />
</td>
</tr>
<tr class="separator:ga6d4e0cdf151b5e579bd67f13202994ed">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga87425065c011cef1ebd6aac75e059dfa" class="memitem:ga87425065c011cef1ebd6aac75e059dfa">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#ga87425065c011cef1ebd6aac75e059dfa" class="el">glfwExtensionSupported</a> (const char *extension)</td>
</tr>
<tr class="memdesc:ga87425065c011cef1ebd6aac75e059dfa">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns whether the specified extension is available.<br />
</td>
</tr>
<tr class="separator:ga87425065c011cef1ebd6aac75e059dfa">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga35f1837e6f666781842483937612f163" class="memitem:ga35f1837e6f666781842483937612f163">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#ga3d47c2d2fbe0be9c505d0e04e91a133c" class="el">GLFWglproc</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#ga35f1837e6f666781842483937612f163" class="el">glfwGetProcAddress</a> (const char *procname)</td>
</tr>
<tr class="memdesc:ga35f1837e6f666781842483937612f163">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the address of the specified function for the current context.<br />
</td>
</tr>
<tr class="separator:ga35f1837e6f666781842483937612f163">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## Typedef Documentation

<span id="ga3d47c2d2fbe0be9c505d0e04e91a133c"></span>

## <span class="permalink">[◆ ](#ga3d47c2d2fbe0be9c505d0e04e91a133c)</span>GLFWglproc

<div class="memitem">

<div class="memproto">

|                                    |
|------------------------------------|
| typedef void(\* GLFWglproc) (void) |

</div>

<div class="memdoc">

Generic function pointer used for returning client API function pointers without forcing a cast from a regular pointer.

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/02-context-guide/#context_glext" class="el">OpenGL and OpenGL ES extensions</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#ga35f1837e6f666781842483937612f163" class="el">glfwGetProcAddress</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

## Function Documentation

<span id="ga1c04dc242268f827290fe40aa1c91157"></span>

## <span class="permalink">[◆ ](#ga1c04dc242268f827290fe40aa1c91157)</span>glfwMakeContextCurrent()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwMakeContextCurrent | ( | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

This function makes the OpenGL or OpenGL ES context of the specified window current on the calling thread. It can also detach the current context from the calling thread without making a new one current by passing in `NULL`.

A context must only be made current on a single thread at a time and each thread can have only a single current context at a time. Making a context current detaches any previously current context on the calling thread.

When moving a context between threads, you must detach it (make it non-current) on the old thread before making it current on the new one.

By default, making a context non-current implicitly forces a pipeline flush. On machines that support `GL_KHR_context_flush_control`, you can control whether a context performs this flush by setting the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CONTEXT_RELEASE_BEHAVIOR_hint" class="el">GLFW_CONTEXT_RELEASE_BEHAVIOR</a> hint.

The specified window must have an OpenGL or OpenGL ES context. Specifying a window without a context will generate a <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> error.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | window | The window whose context to make current, or `NULL` to detach the current context. |

<!-- -->

Remarks  
If the previously current context was created via a different context creation API than the one passed to this function, GLFW will still detach the previous one from its API before making the new one current.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/02-context-guide/#context_current" class="el">Current context</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#gad94e80185397a6cf5fe2ab30567af71c" class="el">glfwGetCurrentContext</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="gad94e80185397a6cf5fe2ab30567af71c"></span>

## <span class="permalink">[◆ ](#gad94e80185397a6cf5fe2ab30567af71c)</span>glfwGetCurrentContext()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \* glfwGetCurrentContext | ( | void  |  | ) |  |

</div>

<div class="memdoc">

This function returns the window whose OpenGL or OpenGL ES context is current on the calling thread.

Returns  
The window whose context is current, or `NULL` if no window's context is current.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/02-context-guide/#context_current" class="el">Current context</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#ga1c04dc242268f827290fe40aa1c91157" class="el">glfwMakeContextCurrent</a>

<!-- -->

Since  
Added in version 3.0.

</div>

</div>

<span id="ga6d4e0cdf151b5e579bd67f13202994ed"></span>

## <span class="permalink">[◆ ](#ga6d4e0cdf151b5e579bd67f13202994ed)</span>glfwSwapInterval()

<div class="memitem">

<div class="memproto">

|                       |     |      |            |     |     |
|-----------------------|-----|------|------------|-----|-----|
| void glfwSwapInterval | (   | int  | *interval* | )   |     |

</div>

<div class="memdoc">

This function sets the swap interval for the current OpenGL or OpenGL ES context, i.e. the number of screen updates to wait from the time <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga15a5a1ee5b3c2ca6b15ca209a12efd14" class="el">glfwSwapBuffers</a> was called before swapping the buffers and returning. This is sometimes called *vertical synchronization*, *vertical retrace synchronization* or just *vsync*.

A context that supports either of the `WGL_EXT_swap_control_tear` and `GLX_EXT_swap_control_tear` extensions also accepts *negative* swap intervals, which allows the driver to swap immediately even if a frame arrives a little bit late. You can check for these extensions with <a href="/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#ga87425065c011cef1ebd6aac75e059dfa" class="el">glfwExtensionSupported</a>.

A context must be current on the calling thread. Calling this function without a current context will cause a <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaa8290386e9528ccb9e42a3a4e16fc0d0" class="el">GLFW_NO_CURRENT_CONTEXT</a> error.

This function does not apply to Vulkan. If you are rendering with Vulkan, see the present mode of your swapchain instead.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | interval | The minimum number of screen updates to wait for until the buffers are swapped by <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga15a5a1ee5b3c2ca6b15ca209a12efd14" class="el">glfwSwapBuffers</a>. |

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaa8290386e9528ccb9e42a3a4e16fc0d0" class="el">GLFW_NO_CURRENT_CONTEXT</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
This function is not called during context creation, leaving the swap interval set to whatever is the default for that API. This is done because some swap interval extensions used by GLFW do not allow the swap interval to be reset to zero once it has been set to a non-zero value.

Some GPU drivers do not honor the requested swap interval, either because of a user setting that overrides the application's request or due to bugs in the driver.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#buffer_swap" class="el">Buffer swapping</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga15a5a1ee5b3c2ca6b15ca209a12efd14" class="el">glfwSwapBuffers</a>

<!-- -->

Since  
Added in version 1.0.

</div>

</div>

<span id="ga87425065c011cef1ebd6aac75e059dfa"></span>

## <span class="permalink">[◆ ](#ga87425065c011cef1ebd6aac75e059dfa)</span>glfwExtensionSupported()

<div class="memitem">

<div class="memproto">

|                            |     |                |             |     |     |
|----------------------------|-----|----------------|-------------|-----|-----|
| int glfwExtensionSupported | (   | const char \*  | *extension* | )   |     |

</div>

<div class="memdoc">

This function returns whether the specified <a href="/docs/glfw/v3-5-1/en/03-guides/02-context-guide/#context_glext" class="el">API extension</a> is supported by the current OpenGL or OpenGL ES context. It searches both for client API extension and context creation API extensions.

A context must be current on the calling thread. Calling this function without a current context will cause a <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaa8290386e9528ccb9e42a3a4e16fc0d0" class="el">GLFW_NO_CURRENT_CONTEXT</a> error.

As this functions retrieves and searches one or more extension strings each call, it is recommended that you cache its results if it is going to be used frequently. The extension strings will not change during the lifetime of a context, so there is no danger in doing this.

This function does not apply to Vulkan. If you are using Vulkan, see <a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a>, `vkEnumerateInstanceExtensionProperties` and `vkEnumerateDeviceExtensionProperties` instead.

Parameters  
|        |           |                                          |
|--------|-----------|------------------------------------------|
| \[in\] | extension | The ASCII encoded name of the extension. |

<!-- -->

Returns  
`GLFW_TRUE` if the extension is available, or `GLFW_FALSE` otherwise.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaa8290386e9528ccb9e42a3a4e16fc0d0" class="el">GLFW_NO_CURRENT_CONTEXT</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/02-context-guide/#context_glext" class="el">OpenGL and OpenGL ES extensions</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#ga35f1837e6f666781842483937612f163" class="el">glfwGetProcAddress</a>

<!-- -->

Since  
Added in version 1.0.

</div>

</div>

<span id="ga35f1837e6f666781842483937612f163"></span>

## <span class="permalink">[◆ ](#ga35f1837e6f666781842483937612f163)</span>glfwGetProcAddress()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#ga3d47c2d2fbe0be9c505d0e04e91a133c" class="el">GLFWglproc</a> glfwGetProcAddress | ( | const char \*  | *procname* | ) |  |

</div>

<div class="memdoc">

This function returns the address of the specified OpenGL or OpenGL ES <a href="/docs/glfw/v3-5-1/en/03-guides/02-context-guide/#context_glext" class="el">core or extension function</a>, if it is supported by the current context.

A context must be current on the calling thread. Calling this function without a current context will cause a <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaa8290386e9528ccb9e42a3a4e16fc0d0" class="el">GLFW_NO_CURRENT_CONTEXT</a> error.

This function does not apply to Vulkan. If you are rendering with Vulkan, see <a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#gadf228fac94c5fd8f12423ec9af9ff1e9" class="el">glfwGetInstanceProcAddress</a>, `vkGetInstanceProcAddr` and `vkGetDeviceProcAddr` instead.

Parameters  
|        |          |                                         |
|--------|----------|-----------------------------------------|
| \[in\] | procname | The ASCII encoded name of the function. |

<!-- -->

Returns  
The address of the function, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaa8290386e9528ccb9e42a3a4e16fc0d0" class="el">GLFW_NO_CURRENT_CONTEXT</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
The address of a given function is not guaranteed to be the same between contexts.

This function may return a non-`NULL` address despite the associated version or extension not being available. Always check the context version or extension string first.

<!-- -->

Pointer lifetime  
The returned function pointer is valid until the context is destroyed or the library is terminated.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/02-context-guide/#context_glext" class="el">OpenGL and OpenGL ES extensions</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#ga87425065c011cef1ebd6aac75e059dfa" class="el">glfwExtensionSupported</a>

<!-- -->

Since  
Added in version 1.0.

</div>

</div>
