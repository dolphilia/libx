---
title: "Introduction"
description: "Official documentation entry point"
---

<a id="mainpage"></a>

# Introduction
GLFW is a free, Open Source, multi-platform library for OpenGL, OpenGL ES and
Vulkan application development.  It provides a simple, platform-independent API
for creating windows, contexts and surfaces, reading input, handling events, etc.

[news](/docs/glfw/v3-5-1/en/05-migration-and-history/02-release-notes/#news) list new features, caveats and deprecations.

[quick_guide](/docs/glfw/v3-5-1/en/02-getting-started/01-getting-started/#quick_guide) is a guide for users new to GLFW.  It takes you through how to
write a small but complete program.

There are guides for each section of the API:

 - [intro_guide](/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_guide) – initialization, error handling and high-level design
 - [window_guide](/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_guide) – creating and working with windows and framebuffers
 - [context_guide](/docs/glfw/v3-5-1/en/03-guides/02-context-guide/#context_guide) – working with OpenGL and OpenGL ES contexts
 - [vulkan_guide](/docs/glfw/v3-5-1/en/03-guides/06-vulkan-guide/#vulkan_guide) - working with Vulkan objects and extensions
 - [monitor_guide](/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_guide) – enumerating and working with monitors and video modes
 - [input_guide](/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_guide) – receiving events, polling and processing input

Once you have written a program, see [compile_guide](/docs/glfw/v3-5-1/en/02-getting-started/02-compiling-glfw/#compile_guide) and [build_guide](/docs/glfw/v3-5-1/en/02-getting-started/03-building-applications/#build_guide).

The [reference documentation](/docs/glfw/v3-5-1/en/) provides more detailed information
about specific functions.

[moving_guide](/docs/glfw/v3-5-1/en/05-migration-and-history/01-moving-from-2-to-3/#moving_guide) explains what has changed and how to update existing code to
use the new API.

There is a section on [guarantees_limitations](/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#guarantees_limitations) for pointer lifetimes,
reentrancy, thread safety, event order and backward and forward compatibility.

Finally, [compat_guide](/docs/glfw/v3-5-1/en/03-guides/07-standards-conformance/#compat_guide) explains what APIs, standards and protocols GLFW uses
and what happens when they are not present on a given machine.

This documentation was generated with Doxygen.  The sources for it are available
in both the [source distribution](https://www.glfw.org/download.html) and
[GitHub repository](https://github.com/glfw/glfw).
