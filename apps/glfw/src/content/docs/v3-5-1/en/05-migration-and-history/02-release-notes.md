---
title: "Release notes for version 3.5"
description: "Changes introduced in GLFW 3.5"
---

<a id="news"></a>

# Release notes for version 3.5
## Why was there no 3.5.0 release?

Due to a misconfigured tool, an incorrect `3.5.0` tag was briefly made available in the
main Git repository.  Thanks to the manual intervention of many packaging volunteers this
has been almost entirely rolled back.  To make sure the first actual release of GLFW 3.5
replaces the incorrect tag everywhere, the first release is named 3.5.1.


<a id="features"></a>

## New features
<a id="unlimited_mouse_buttons"></a>

### Unlimited mouse buttons
GLFW now has an input mode which allows an unlimited number of mouse buttons to
be reported by the mouse buttton callback, rather than just the associated
[mouse button tokens](/docs/glfw/v3-5-1/en/04-reference/11-mouse-buttons/). This allows using mouse buttons with
values over 8. For compatibility with older versions, the
[GLFW_UNLIMITED_MOUSE_BUTTONS](/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_UNLIMITED_MOUSE_BUTTONS) input mode needs to be set to make use of
this.


<a id="eglconfig"></a>

### EGLConfig native access function
GLFW now provides the [glfwGetEGLConfig](/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gaada9744377463b229b4817eb96384e8c) native access function for querying
the `EGLConfig` of a window that has a `EGLSurface`.


<a id="glxfbconfig"></a>

### GLXFBConfig native access function
GLFW now provides the [glfwGetGLXFBConfig](/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gada0e83394c2258396bff9ba6b73abf98) native access function for
querying the `GLXFBConfig` of a window that has a `GLXWindow`.


<a id="caveats"></a>

## Caveats
<a id="deprecations"></a>

## Deprecations
<a id="removals"></a>

## Removals
<a id="winxp_vista"></a>

### Windows XP and Vista support has been removed
Support for Windows XP and Vista has been removed.  Windows XP has been out of extended
support since 2014.


<a id="original_mingw"></a>

### Original MinGW support has been removed
Support for the now unmaintained original MinGW distribution has been removed.

This does not apply to the much more capable [MinGW-w64](https://www.mingw-w64.org/),
which remains fully supported.  MinGW-w64 can build both 32- and 64-bit binaries, is
actively maintained and available on many platforms.


<a id="new_symbols"></a>

## New symbols
<a id="new_functions"></a>

### New functions
 - [glfwGetEGLConfig](/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gaada9744377463b229b4817eb96384e8c)
 - [glfwGetGLXFBConfig](/docs/glfw/v3-5-1/en/04-reference/08-native-access/#gada0e83394c2258396bff9ba6b73abf98)


<a id="new_types"></a>

### New types
<a id="new_constants"></a>

### New constants
- [GLFW_UNLIMITED_MOUSE_BUTTONS](/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#GLFW_UNLIMITED_MOUSE_BUTTONS)

<a id="news_archive"></a>

## Release notes for earlier versions
- [Release notes for 3.4](https://www.glfw.org/docs/3.4/news.html)
- [Release notes for 3.3](https://www.glfw.org/docs/3.3/news.html)
- [Release notes for 3.2](https://www.glfw.org/docs/3.2/news.html)
- [Release notes for 3.1](https://www.glfw.org/docs/3.1/news.html)
- [Release notes for 3.0](https://www.glfw.org/docs/3.0/news.html)
