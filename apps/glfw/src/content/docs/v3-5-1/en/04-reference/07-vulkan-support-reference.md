---
title: "Vulkan support reference"
description: "GLFW 3.5.1 Vulkan support reference"
licenseSource: "glfw-3.5.1"
---

> This reference page is an altered Markdown adaptation of the [official GLFW 3.5.1 documentation](https://www.glfw.org/docs/3.5.1/). Formatting, navigation and links were changed for libx; technical content comes from the GLFW 3.5.1 source distribution.

<span id="details"></span>

## Description

This is the reference documentation for Vulkan related functions and types. For more task-oriented information, see the <a href="/docs/glfw/v3-5-1/en/03-guides/06-vulkan-guide/" class="el">Vulkan guide</a>.

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="typedefs" class="groupheader"><span id="typedef-members"></span> Typedefs</h2></td>
</tr>
<tr id="r_ga70c01918dc9d233a4fbe0681a43018af" class="memitem:ga70c01918dc9d233a4fbe0681a43018af">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga70c01918dc9d233a4fbe0681a43018af" class="el">GLFWvkproc</a>) (void)</td>
</tr>
<tr class="memdesc:ga70c01918dc9d233a4fbe0681a43018af">
<td class="mdescLeft"> </td>
<td class="mdescRight">Vulkan API function pointer type.<br />
</td>
</tr>
<tr class="separator:ga70c01918dc9d233a4fbe0681a43018af">
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
<tr id="r_ga2e7f30931e02464b5bc8d0d4b6f9fe2b" class="memitem:ga2e7f30931e02464b5bc8d0d4b6f9fe2b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga2e7f30931e02464b5bc8d0d4b6f9fe2b" class="el">glfwVulkanSupported</a> (void)</td>
</tr>
<tr class="memdesc:ga2e7f30931e02464b5bc8d0d4b6f9fe2b">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns whether the Vulkan loader and an ICD have been found.<br />
</td>
</tr>
<tr class="separator:ga2e7f30931e02464b5bc8d0d4b6f9fe2b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga99ad342d82f4a3421e2864978cb6d1d6" class="memitem:ga99ad342d82f4a3421e2864978cb6d1d6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char ** </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a> (uint32_t *count)</td>
</tr>
<tr class="memdesc:ga99ad342d82f4a3421e2864978cb6d1d6">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the Vulkan instance extensions required by GLFW.<br />
</td>
</tr>
<tr class="separator:ga99ad342d82f4a3421e2864978cb6d1d6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadf228fac94c5fd8f12423ec9af9ff1e9" class="memitem:gadf228fac94c5fd8f12423ec9af9ff1e9">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga70c01918dc9d233a4fbe0681a43018af" class="el">GLFWvkproc</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#gadf228fac94c5fd8f12423ec9af9ff1e9" class="el">glfwGetInstanceProcAddress</a> (VkInstance instance, const char *procname)</td>
</tr>
<tr class="memdesc:gadf228fac94c5fd8f12423ec9af9ff1e9">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns the address of the specified Vulkan instance function.<br />
</td>
</tr>
<tr class="separator:gadf228fac94c5fd8f12423ec9af9ff1e9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaff3823355cdd7e2f3f9f4d9ea9518d92" class="memitem:gaff3823355cdd7e2f3f9f4d9ea9518d92">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#gaff3823355cdd7e2f3f9f4d9ea9518d92" class="el">glfwGetPhysicalDevicePresentationSupport</a> (VkInstance instance, VkPhysicalDevice device, uint32_t queuefamily)</td>
</tr>
<tr class="memdesc:gaff3823355cdd7e2f3f9f4d9ea9518d92">
<td class="mdescLeft"> </td>
<td class="mdescRight">Returns whether the specified queue family can present images.<br />
</td>
</tr>
<tr class="separator:gaff3823355cdd7e2f3f9f4d9ea9518d92">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1a24536bec3f80b08ead18e28e6ae965" class="memitem:ga1a24536bec3f80b08ead18e28e6ae965">
<td class="memItemLeft" style="text-align: right;" data-valign="top">VkResult </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga1a24536bec3f80b08ead18e28e6ae965" class="el">glfwCreateWindowSurface</a> (VkInstance instance, <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, const VkAllocationCallbacks *allocator, VkSurfaceKHR *surface)</td>
</tr>
<tr class="memdesc:ga1a24536bec3f80b08ead18e28e6ae965">
<td class="mdescLeft"> </td>
<td class="mdescRight">Creates a Vulkan surface for the specified window.<br />
</td>
</tr>
<tr class="separator:ga1a24536bec3f80b08ead18e28e6ae965">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## Typedef Documentation

<span id="ga70c01918dc9d233a4fbe0681a43018af"></span>

## <span class="permalink">[◆ ](#ga70c01918dc9d233a4fbe0681a43018af)</span>GLFWvkproc

<div class="memitem">

<div class="memproto">

|                                    |
|------------------------------------|
| typedef void(\* GLFWvkproc) (void) |

</div>

<div class="memdoc">

Generic function pointer used for returning Vulkan API function pointers without forcing a cast from a regular pointer.

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/06-vulkan-guide/#vulkan_proc" class="el">Querying Vulkan function pointers</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#gadf228fac94c5fd8f12423ec9af9ff1e9" class="el">glfwGetInstanceProcAddress</a>

<!-- -->

Since  
Added in version 3.2.

</div>

</div>

## Function Documentation

<span id="ga2e7f30931e02464b5bc8d0d4b6f9fe2b"></span>

## <span class="permalink">[◆ ](#ga2e7f30931e02464b5bc8d0d4b6f9fe2b)</span>glfwVulkanSupported()

<div class="memitem">

<div class="memproto">

|                         |     |       |     |     |     |
|-------------------------|-----|-------|-----|-----|-----|
| int glfwVulkanSupported | (   | void  |     | )   |     |

</div>

<div class="memdoc">

This function returns whether the Vulkan loader and any minimally functional ICD have been found.

The availability of a Vulkan loader and even an ICD does not by itself guarantee that surface creation or even instance creation is possible. Call <a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a> to check whether the extensions necessary for Vulkan surface creation are available and <a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#gaff3823355cdd7e2f3f9f4d9ea9518d92" class="el">glfwGetPhysicalDevicePresentationSupport</a> to check whether a queue family of a physical device supports image presentation.

Returns  
`GLFW_TRUE` if Vulkan is minimally available, or `GLFW_FALSE` otherwise.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/06-vulkan-guide/#vulkan_support" class="el">Querying for Vulkan support</a>

<!-- -->

Since  
Added in version 3.2.

</div>

</div>

<span id="ga99ad342d82f4a3421e2864978cb6d1d6"></span>

## <span class="permalink">[◆ ](#ga99ad342d82f4a3421e2864978cb6d1d6)</span>glfwGetRequiredInstanceExtensions()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| const char \*\* glfwGetRequiredInstanceExtensions | ( | uint32_t \*  | *count* | ) |  |

</div>

<div class="memdoc">

This function returns an array of names of Vulkan instance extensions required by GLFW for creating Vulkan surfaces for GLFW windows. If successful, the list will always contain `VK_KHR_surface`, so if you don't require any additional extensions you can pass this list directly to the `VkInstanceCreateInfo` struct.

If Vulkan is not available on the machine, this function returns `NULL` and generates a <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a> error. Call <a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga2e7f30931e02464b5bc8d0d4b6f9fe2b" class="el">glfwVulkanSupported</a> to check whether Vulkan is at least minimally available.

If Vulkan is available but no set of extensions allowing window surface creation was found, this function returns `NULL`. You may still use Vulkan for off-screen rendering and compute work.

Parameters  
|  |  |  |
|----|----|----|
| \[out\] | count | Where to store the number of extensions in the returned array. This is set to zero if an error occurred. |

<!-- -->

Returns  
An array of ASCII encoded extension names, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a>.

<!-- -->

Remarks  
Additional extensions may be required by future versions of GLFW. You should check if any extensions you wish to enable are already in the returned array, as it is an error to specify an extension more than once in the `VkInstanceCreateInfo` struct.

<!-- -->

Pointer lifetime  
The returned array is allocated and freed by GLFW. You should not free it yourself. It is guaranteed to be valid only until the library is terminated.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/06-vulkan-guide/#vulkan_ext" class="el">Querying required Vulkan extensions</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga1a24536bec3f80b08ead18e28e6ae965" class="el">glfwCreateWindowSurface</a>

<!-- -->

Since  
Added in version 3.2.

</div>

</div>

<span id="gadf228fac94c5fd8f12423ec9af9ff1e9"></span>

## <span class="permalink">[◆ ](#gadf228fac94c5fd8f12423ec9af9ff1e9)</span>glfwGetInstanceProcAddress()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga70c01918dc9d233a4fbe0681a43018af" class="el">GLFWvkproc</a> glfwGetInstanceProcAddress | ( | VkInstance  | *instance*, |
|  |  | const char \*  | *procname*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function returns the address of the specified Vulkan core or extension function for the specified instance. If instance is set to `NULL` it can return any function exported from the Vulkan loader, including at least the following functions:

- `vkEnumerateInstanceExtensionProperties`
- `vkEnumerateInstanceLayerProperties`
- `vkCreateInstance`
- `vkGetInstanceProcAddr`

If Vulkan is not available on the machine, this function returns `NULL` and generates a <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a> error. Call <a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga2e7f30931e02464b5bc8d0d4b6f9fe2b" class="el">glfwVulkanSupported</a> to check whether Vulkan is at least minimally available.

This function is equivalent to calling `vkGetInstanceProcAddr` with a platform-specific query of the Vulkan loader as a fallback.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | instance | The Vulkan instance to query, or `NULL` to retrieve functions related to instance creation. |
| \[in\] | procname | The ASCII encoded name of the function. |

<!-- -->

Returns  
The address of the function, or `NULL` if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a>.

<!-- -->

Pointer lifetime  
The returned function pointer is valid until the library is terminated.

<!-- -->

Thread safety  
This function may be called from any thread.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/06-vulkan-guide/#vulkan_proc" class="el">Querying Vulkan function pointers</a>

<!-- -->

Since  
Added in version 3.2.

</div>

</div>

<span id="gaff3823355cdd7e2f3f9f4d9ea9518d92"></span>

## <span class="permalink">[◆ ](#gaff3823355cdd7e2f3f9f4d9ea9518d92)</span>glfwGetPhysicalDevicePresentationSupport()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetPhysicalDevicePresentationSupport | ( | VkInstance  | *instance*, |
|  |  | VkPhysicalDevice  | *device*, |
|  |  | uint32_t  | *queuefamily*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function returns whether the specified queue family of the specified physical device supports presentation to the platform GLFW was built for.

If Vulkan or the required window surface creation instance extensions are not available on the machine, or if the specified instance was not created with the required extensions, this function returns `GLFW_FALSE` and generates a <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a> error. Call <a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga2e7f30931e02464b5bc8d0d4b6f9fe2b" class="el">glfwVulkanSupported</a> to check whether Vulkan is at least minimally available and <a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a> to check what instance extensions are required.

Parameters  
|        |             |                                                       |
|--------|-------------|-------------------------------------------------------|
| \[in\] | instance    | The instance that the physical device belongs to.     |
| \[in\] | device      | The physical device that the queue family belongs to. |
| \[in\] | queuefamily | The index of the queue family to query.               |

<!-- -->

Returns  
`GLFW_TRUE` if the queue family supports presentation, or `GLFW_FALSE` otherwise.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>.

<!-- -->

Remarks  
**macOS:** This function currently always returns `GLFW_TRUE`, as the `VK_MVK_macos_surface` and `VK_EXT_metal_surface` extensions do not provide a `vkGetPhysicalDevice*PresentationSupport` type function.

<!-- -->

Thread safety  
This function may be called from any thread. For synchronization details of Vulkan objects, see the Vulkan specification.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/06-vulkan-guide/#vulkan_present" class="el">Querying for Vulkan presentation support</a>

<!-- -->

Since  
Added in version 3.2.

</div>

</div>

<span id="ga1a24536bec3f80b08ead18e28e6ae965"></span>

## <span class="permalink">[◆ ](#ga1a24536bec3f80b08ead18e28e6ae965)</span>glfwCreateWindowSurface()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| VkResult glfwCreateWindowSurface | ( | VkInstance  | *instance*, |
|  |  | <a href="/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | const VkAllocationCallbacks \*  | *allocator*, |
|  |  | VkSurfaceKHR \*  | *surface*  |
|  | ) |  |  |

</div>

<div class="memdoc">

This function creates a Vulkan surface for the specified window.

If the Vulkan loader or at least one minimally functional ICD were not found, this function returns `VK_ERROR_INITIALIZATION_FAILED` and generates a <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a> error. Call <a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga2e7f30931e02464b5bc8d0d4b6f9fe2b" class="el">glfwVulkanSupported</a> to check whether Vulkan is at least minimally available.

If the required window surface creation instance extensions are not available or if the specified instance was not created with these extensions enabled, this function returns `VK_ERROR_EXTENSION_NOT_PRESENT` and generates a <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a> error. Call <a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a> to check what instance extensions are required.

The window surface cannot be shared with another API so the window must have been created with the <a href="/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#GLFW_CLIENT_API_attrib" class="el">client api hint</a> set to `GLFW_NO_API` otherwise it generates a <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a> error and returns `VK_ERROR_NATIVE_WINDOW_IN_USE_KHR`.

The window surface must be destroyed before the specified Vulkan instance. It is the responsibility of the caller to destroy the window surface. GLFW does not destroy it for you. Call `vkDestroySurfaceKHR` to destroy the surface.

Parameters  
|  |  |  |
|----|----|----|
| \[in\] | instance | The Vulkan instance to create the surface in. |
| \[in\] | window | The window to create the surface for. |
| \[in\] | allocator | The allocator to use, or `NULL` to use the default allocator. |
| \[out\] | surface | Where to store the handle of the surface. This is set to `VK_NULL_HANDLE` if an error occurred. |

<!-- -->

Returns  
`VK_SUCCESS` if successful, or a Vulkan error code if an <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#error_handling" class="el">error</a> occurred.

<!-- -->

Errors  
Possible errors include <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a>, <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>

<!-- -->

Remarks  
If an error occurs before the creation call is made, GLFW returns the Vulkan error code most appropriate for the error. Appropriate use of <a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga2e7f30931e02464b5bc8d0d4b6f9fe2b" class="el">glfwVulkanSupported</a> and <a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a> should eliminate almost all occurrences of these errors.

**macOS:** GLFW prefers the `VK_EXT_metal_surface` extension, with the `VK_MVK_macos_surface` extension as a fallback. The name of the selected extension, if any, is included in the array returned by <a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a>.

**macOS:** This function creates and sets a `CAMetalLayer` instance for the window content view, which is required for MoltenVK to function.

**X11:** By default GLFW prefers the `VK_KHR_xcb_surface` extension, with the `VK_KHR_xlib_surface` extension as a fallback. You can make `VK_KHR_xlib_surface` the preferred extension by setting the <a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#GLFW_X11_XCB_VULKAN_SURFACE_hint" class="el">GLFW_X11_XCB_VULKAN_SURFACE</a> init hint. The name of the selected extension, if any, is included in the array returned by <a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a>.

<!-- -->

Thread safety  
This function may be called from any thread. For synchronization details of Vulkan objects, see the Vulkan specification.

<!-- -->

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/06-vulkan-guide/#vulkan_surface" class="el">Creating a Vulkan window surface</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a>

<!-- -->

Since  
Added in version 3.2.

</div>

</div>
