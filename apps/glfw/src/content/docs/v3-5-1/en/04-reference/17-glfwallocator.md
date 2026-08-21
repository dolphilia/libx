---
title: "GLFWallocator structure"
description: "GLFW 3.5.1 GLFWallocator structure"
---

Custom heap memory allocator. [More...](/docs/glfw/v3-5-1/en/04-reference/17-glfwallocator/#details)

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="data-fields" class="groupheader"><span id="pub-attribs"></span> Data Fields</h2></td>
</tr>
<tr id="r_a18a798136f17a9cb105be18312193bf7" class="memitem:a18a798136f17a9cb105be18312193bf7">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga4306a564e9f60f4de8cc8f31731a3120" class="el">GLFWallocatefun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/17-glfwallocator/#a18a798136f17a9cb105be18312193bf7" class="el">allocate</a></td>
</tr>
<tr class="separator:a18a798136f17a9cb105be18312193bf7">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_af5a674af9e170095b968f467233437be" class="memitem:af5a674af9e170095b968f467233437be">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga3e88a829615d8efe8bec1746f7309c63" class="el">GLFWreallocatefun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/17-glfwallocator/#af5a674af9e170095b968f467233437be" class="el">reallocate</a></td>
</tr>
<tr class="separator:af5a674af9e170095b968f467233437be">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ab74cf9a969e73e6eb65a6112a591a988" class="memitem:ab74cf9a969e73e6eb65a6112a591a988">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga7181615eda94c4b07bd72bdcee39fa28" class="el">GLFWdeallocatefun</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/17-glfwallocator/#ab74cf9a969e73e6eb65a6112a591a988" class="el">deallocate</a></td>
</tr>
<tr class="separator:ab74cf9a969e73e6eb65a6112a591a988">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_af6153be74dbaf7f0a7e8bd3bfc039910" class="memitem:af6153be74dbaf7f0a7e8bd3bfc039910">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/en/04-reference/17-glfwallocator/#af6153be74dbaf7f0a7e8bd3bfc039910" class="el">user</a></td>
</tr>
<tr class="separator:af6153be74dbaf7f0a7e8bd3bfc039910">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

<span id="details"></span>

## Detailed Description

<div class="textblock">

This describes a custom heap memory allocator for GLFW. To set an allocator, pass it to <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6" class="el">glfwInitAllocator</a> before initializing the library.

See also  
<a href="/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#init_allocator" class="el">Custom heap memory allocator</a>

<a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6" class="el">glfwInitAllocator</a>

<!-- -->

Since  
Added in version 3.4.

</div>

## Field Documentation

<span id="a18a798136f17a9cb105be18312193bf7"></span>

## <span class="permalink">[◆ ](#a18a798136f17a9cb105be18312193bf7)</span>allocate

<div class="memitem">

<div class="memproto">

|  |
|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga4306a564e9f60f4de8cc8f31731a3120" class="el">GLFWallocatefun</a> GLFWallocator::allocate |

</div>

<div class="memdoc">

The memory allocation function. See <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga4306a564e9f60f4de8cc8f31731a3120" class="el">GLFWallocatefun</a> for details about allocation function.

</div>

</div>

<span id="af5a674af9e170095b968f467233437be"></span>

## <span class="permalink">[◆ ](#af5a674af9e170095b968f467233437be)</span>reallocate

<div class="memitem">

<div class="memproto">

|  |
|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga3e88a829615d8efe8bec1746f7309c63" class="el">GLFWreallocatefun</a> GLFWallocator::reallocate |

</div>

<div class="memdoc">

The memory reallocation function. See <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga3e88a829615d8efe8bec1746f7309c63" class="el">GLFWreallocatefun</a> for details about reallocation function.

</div>

</div>

<span id="ab74cf9a969e73e6eb65a6112a591a988"></span>

## <span class="permalink">[◆ ](#ab74cf9a969e73e6eb65a6112a591a988)</span>deallocate

<div class="memitem">

<div class="memproto">

|  |
|----|
| <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga7181615eda94c4b07bd72bdcee39fa28" class="el">GLFWdeallocatefun</a> GLFWallocator::deallocate |

</div>

<div class="memdoc">

The memory deallocation function. See <a href="/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#ga7181615eda94c4b07bd72bdcee39fa28" class="el">GLFWdeallocatefun</a> for details about deallocation function.

</div>

</div>

<span id="af6153be74dbaf7f0a7e8bd3bfc039910"></span>

## <span class="permalink">[◆ ](#af6153be74dbaf7f0a7e8bd3bfc039910)</span>user

<div class="memitem">

<div class="memproto">

|                            |
|----------------------------|
| void\* GLFWallocator::user |

</div>

<div class="memdoc">

The user pointer for this custom allocator. This value will be passed to the allocator functions.

</div>

</div>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

- <a href="https://www.glfw.org/docs/3.5.1/glfw3_8h_source.html" class="el">glfw3.h</a>
