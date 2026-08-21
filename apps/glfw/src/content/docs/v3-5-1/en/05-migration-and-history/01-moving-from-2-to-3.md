---
title: "Moving from GLFW 2 to 3"
description: "Migration guide for GLFW 2 users"
---

<a id="moving_guide"></a>

# Moving from GLFW 2 to 3
This is a transition guide for moving from GLFW 2 to 3.  It describes what has
changed or been removed, but does _not_ include
[new features](/docs/glfw/v3-5-1/en/05-migration-and-history/02-release-notes/#news) unless they are required when moving an existing code
base onto the new API.  For example, the new multi-monitor functions are
required to create full screen windows with GLFW 3.


<a id="moving_removed"></a>

## Changed and removed features
<a id="moving_renamed_files"></a>

### Renamed library and header file
The GLFW 3 header is named [glfw3](https://github.com/glfw/glfw/blob/3.5.1/include/GLFW/glfw3.h).h and moved to the `GLFW` directory, to
avoid collisions with the headers of other major versions.  Similarly, the GLFW
3 library is named `glfw3,` except when it's installed as a shared library on
Unix-like systems, where it uses the [soname][] `libglfw.so.3`.

[soname]: https://en.wikipedia.org/wiki/soname

__Old syntax__
```c
#include <GL/glfw.h>
```

__New syntax__
```c
#include <GLFW/glfw3.h>
```


<a id="moving_threads"></a>

### Removal of threading functions
The threading functions have been removed, including the per-thread sleep
function.  They were fairly primitive, under-used, poorly integrated and took
time away from the focus of GLFW (i.e.  context, input and window).  There are
better threading libraries available and native threading support is available
in both [C++11][] and [C11][], both of which are gaining traction.

[C++11]: https://en.cppreference.com/w/cpp/thread
[C11]: https://en.cppreference.com/w/c/thread

If you wish to use the C++11 or C11 facilities but your compiler doesn't yet
support them, see the [TinyThread++][] and [TinyCThread][] projects created by
the original author of GLFW.  These libraries implement a usable subset of the
threading APIs in C++11 and C11, and in fact some GLFW 3 test programs use
TinyCThread.

[TinyThread++]: https://gitorious.org/tinythread/tinythreadpp
[TinyCThread]: https://github.com/tinycthread/tinycthread

However, GLFW 3 has better support for _use from multiple threads_ than GLFW
2 had.  Contexts can be made current on any thread, although only a single
thread at a time, and the documentation explicitly states which functions may be
used from any thread and which must only be used from the main thread.

__Removed functions__
> `glfwSleep`, `glfwCreateThread`, `glfwDestroyThread`, `glfwWaitThread`,
> `glfwGetThreadID`, `glfwCreateMutex`, `glfwDestroyMutex`, `glfwLockMutex`,
> `glfwUnlockMutex`, `glfwCreateCond`, `glfwDestroyCond`, `glfwWaitCond`,
> `glfwSignalCond`, `glfwBroadcastCond` and `glfwGetNumberOfProcessors`.

__Removed types__
> `GLFWthreadfun`


<a id="moving_image"></a>

### Removal of image and texture loading
The image and texture loading functions have been removed.  They only supported
the Targa image format, making them mostly useful for beginner level examples.
To become of sufficiently high quality to warrant keeping them in GLFW 3, they
would need not only to support other formats, but also modern extensions to
OpenGL texturing.  This would either add a number of external
dependencies (libjpeg, libpng, etc.), or force GLFW to ship with inline versions
of these libraries.

As there already are libraries doing this, it is unnecessary both to duplicate
the work and to tie the duplicate to GLFW.  The resulting library would also be
platform-independent, as both OpenGL and stdio are available wherever GLFW is.

__Removed functions__
> `glfwReadImage`, `glfwReadMemoryImage`, `glfwFreeImage`, `glfwLoadTexture2D`,
> `glfwLoadMemoryTexture2D` and `glfwLoadTextureImage2D`.


<a id="moving_stdcall"></a>

### Removal of GLFWCALL macro
The `GLFWCALL` macro, which made callback functions use [\_\_stdcall][stdcall]
on Windows, has been removed.  GLFW is written in C, not Pascal.  Removing this
macro means there's one less thing for application programmers to remember, i.e.
the requirement to mark all callback functions with `GLFWCALL`.  It also
simplifies the creation of DLLs and DLL link libraries, as there's no need to
explicitly disable `@n` entry point suffixes.

[stdcall]: https://msdn.microsoft.com/en-us/library/zxk0tw93.aspx

__Old syntax__
```c
void GLFWCALL callback_function(...);
```

__New syntax__
```c
void callback_function(...);
```


<a id="moving_window_handles"></a>

### Window handle parameters
Because GLFW 3 supports multiple windows, window handle parameters have been
added to all window-related GLFW functions and callbacks.  The handle of
a newly created window is returned by [glfwCreateWindow](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb) (formerly
`glfwOpenWindow`).  Window handles are pointers to the
[opaque][opaque-type] type [GLFWwindow](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242).

[opaque-type]: https://en.wikipedia.org/wiki/Opaque_data_type

__Old syntax__
```c
glfwSetWindowTitle("New Window Title");
```

__New syntax__
```c
glfwSetWindowTitle(window, "New Window Title");
```


<a id="moving_monitor"></a>

### Explicit monitor selection
GLFW 3 provides support for multiple monitors.  To request a full screen mode window,
instead of passing `GLFW_FULLSCREEN` you specify which monitor you wish the
window to use.  The [glfwGetPrimaryMonitor](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gac3adb24947eb709e1874028272e5dfc5) function returns the monitor that
GLFW 2 would have selected, but there are many other
[monitor functions](/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_guide).  Monitor handles are pointers to the
[opaque][opaque-type] type [GLFWmonitor](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3).

__Old basic full screen__
```c
glfwOpenWindow(640, 480, 8, 8, 8, 0, 24, 0, GLFW_FULLSCREEN);
```

__New basic full screen__
```c
window = glfwCreateWindow(640, 480, "My Window", glfwGetPrimaryMonitor(), NULL);
```

> **Note:** The framebuffer bit depth parameters of `glfwOpenWindow` have been turned
into [window hints](/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_hints), but as they have been given
[sane defaults](/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_hints_values) you rarely need to set these hints.


<a id="moving_autopoll"></a>

### Removal of automatic event polling
GLFW 3 does not automatically poll for events in [glfwSwapBuffers](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga15a5a1ee5b3c2ca6b15ca209a12efd14), meaning
you need to call [glfwPollEvents](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga37bd57223967b4211d60ca1a0bf3c832) or [glfwWaitEvents](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga554e37d781f0a997656c26b2c56c835e) yourself.  Unlike
buffer swap, which acts on a single window, the event processing functions act
on all windows at once.

__Old basic main loop__
```c
while (...)
{
    // Process input
    // Render output
    glfwSwapBuffers();
}
```

__New basic main loop__
```c
while (...)
{
    // Process input
    // Render output
    glfwSwapBuffers(window);
    glfwPollEvents();
}
```


<a id="moving_context"></a>

### Explicit context management
Each GLFW 3 window has its own OpenGL context and only you, the application
programmer, can know which context should be current on which thread at any
given time.  Therefore, GLFW 3 leaves that decision to you.

This means that you need to call [glfwMakeContextCurrent](/docs/glfw/v3-5-1/en/04-reference/04-context-reference/#ga1c04dc242268f827290fe40aa1c91157) after creating
a window before you can call any OpenGL functions.


<a id="moving_hidpi"></a>

### Separation of window and framebuffer sizes
Window positions and sizes now use screen coordinates, which may not be the same
as pixels on machines with high-DPI monitors.  This is important as OpenGL uses
pixels, not screen coordinates.  For example, the rectangle specified with
`glViewport` needs to use pixels.  Therefore, framebuffer size functions have
been added.  You can retrieve the size of the framebuffer of a window with [glfwGetFramebufferSize](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga0e2637a4161afb283f5300c7f94785c9) function.  A framebuffer size callback has also been
added, which can be set with [glfwSetFramebufferSizeCallback](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gab3fb7c3366577daef18c0023e2a8591f).

__Old basic viewport setup__
```c
glfwGetWindowSize(&width, &height);
glViewport(0, 0, width, height);
```

__New basic viewport setup__
```c
glfwGetFramebufferSize(window, &width, &height);
glViewport(0, 0, width, height);
```


<a id="moving_window_close"></a>

### Window closing changes
The `GLFW_OPENED` window parameter has been removed.  As long as the window has
not been destroyed, whether through [glfwDestroyWindow](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2) or [glfwTerminate](/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901), the window is "open".

A user attempting to close a window is now just an event like any other.  Unlike
GLFW 2, windows and contexts created with GLFW 3 will never be destroyed unless
you choose them to be.  Each window now has a close flag that is set to
`GLFW_TRUE` when the user attempts to close that window.  By default, nothing else
happens and the window stays visible.  It is then up to you to either destroy
the window, take some other action or ignore the request.

You can query the close flag at any time with [glfwWindowShouldClose](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga24e02fbfefbb81fc45320989f8140ab5) and set
it at any time with [glfwSetWindowShouldClose](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga49c449dde2a6f87d996f4daaa09d6708).

__Old basic main loop__
```c
while (glfwGetWindowParam(GLFW_OPENED))
{
    ...
}
```

__New basic main loop__
```c
while (!glfwWindowShouldClose(window))
{
    ...
}
```

The close callback no longer returns a value.  Instead, it is called after the
close flag has been set, so it can optionally override its value, before
event processing completes.  You may however not call [glfwDestroyWindow](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2)
from the close callback (or any other window related callback).

__Old syntax__
```c
int GLFWCALL window_close_callback(void);
```

__New syntax__
```c
void window_close_callback(GLFWwindow* window);
```

> **Note:** GLFW never clears the close flag to `GLFW_FALSE`, meaning you can use it
for other reasons to close the window as well, for example the user choosing
Quit from an in-game menu.


<a id="moving_hints"></a>

### Persistent window hints
The `glfwOpenWindowHint` function has been renamed to [glfwWindowHint](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga7d9c8c62384b1e2821c4dc48952d2033).

Window hints are no longer reset to their default values on window creation, but
instead retain their values until modified by [glfwWindowHint](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga7d9c8c62384b1e2821c4dc48952d2033) or [glfwDefaultWindowHints](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gaa77c4898dfb83344a6b4f76aa16b9a4a), or until the library is terminated and re-initialized.


<a id="moving_video_modes"></a>

### Video mode enumeration
Video mode enumeration is now per-monitor.  The [glfwGetVideoModes](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gad2e24d2843cb7d6c26202cddd530fc1b) function
now returns all available modes for a specific monitor instead of requiring you
to guess how large an array you need.  The `glfwGetDesktopMode` function, which
had poorly defined behavior, has been replaced by [glfwGetVideoMode](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gaba376fa7e76634b4788bddc505d6c9d5), which
returns the current mode of a monitor.


<a id="moving_char_up"></a>

### Removal of character actions
The action parameter of the [character callback](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga1ab90a55cf3f58639b893c0f4118cb6e) has been
removed.  This was an artefact of the origin of GLFW, i.e. being developed in
English by a Swede.  However, many keyboard layouts require more than one key to
produce characters with diacritical marks. Even the Swedish keyboard layout
requires this for uncommon cases like ü.

__Old syntax__
```c
void GLFWCALL character_callback(int character, int action);
```

__New syntax__
```c
void character_callback(GLFWwindow* window, int character);
```


<a id="moving_cursorpos"></a>

### Cursor position changes
The `glfwGetMousePos` function has been renamed to [glfwGetCursorPos](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga01d37b6c40133676b9cea60ca1d7c0cc),
`glfwSetMousePos` to [glfwSetCursorPos](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga04b03af936d906ca123c8f4ee08b39e7) and `glfwSetMousePosCallback` to [glfwSetCursorPosCallback](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gac1f879ab7435d54d4d79bb469fe225d7).

The cursor position is now `double` instead of `int`, both for the direct
functions and for the callback.  Some platforms can provide sub-pixel cursor
movement and this data is now passed on to the application where available.  On
platforms where this is not provided, the decimal part is zero.

GLFW 3 only allows you to position the cursor within a window using [glfwSetCursorPos](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga04b03af936d906ca123c8f4ee08b39e7) (formerly `glfwSetMousePos`) when that window is active.
Unless the window is active, the function fails silently.


<a id="moving_wheel"></a>

### Wheel position replaced by scroll offsets
The `glfwGetMouseWheel` function has been removed.  Scrolling is the input of
offsets and has no absolute position.  The mouse wheel callback has been
replaced by a [scroll callback](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaf656112c33de3efdb227fa58f0134cf5) that receives
two-dimensional floating point scroll offsets.  This allows you to receive
precise scroll data from for example modern touchpads.

__Old syntax__
```c
void GLFWCALL mouse_wheel_callback(int position);
```

__New syntax__
```c
void scroll_callback(GLFWwindow* window, double xoffset, double yoffset);
```

__Removed functions__
> `glfwGetMouseWheel`


<a id="moving_repeat"></a>

### Key repeat action
The `GLFW_KEY_REPEAT` enable has been removed and key repeat is always enabled
for both keys and characters.  A new key action, `GLFW_REPEAT`, has been added
to allow the [key callback](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga5bd751b27b90f865d2ea613533f0453c) to distinguish an initial key press
from a repeat.  Note that [glfwGetKey](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gadd341da06bc8d418b4dc3a3518af9ad2) still returns only `GLFW_PRESS` or
`GLFW_RELEASE`.


<a id="moving_keys"></a>

### Physical key input
GLFW 3 key tokens map to physical keys, unlike in GLFW 2 where they mapped to
the values generated by the current keyboard layout.  The tokens are named
according to the values they would have in the standard US layout, but this
is only a convenience, as most programmers are assumed to know that layout.
This means that (for example) `GLFW_KEY_LEFT_BRACKET` is always a single key and
is the same key in the same place regardless of what keyboard layouts the users
of your program have.

The key input facility was never meant for text input, although using it that
way worked slightly better in GLFW 2.  If you were using it to input text, you
should be using the character callback instead, on both GLFW 2 and 3.  This will
give you the characters being input, as opposed to the keys being pressed.

GLFW 3 has key tokens for all keys on a standard 105 key keyboard, so instead of
having to remember whether to check for `a` or `A`, you now check for
[GLFW_KEY_A](/docs/glfw/v3-5-1/en/04-reference/09-keyboard-key-tokens/#ga03e842608e1ea323370889d33b8f70ff).


<a id="moving_joystick"></a>

### Joystick function changes
The `glfwGetJoystickPos` function has been renamed to [glfwGetJoystickAxes](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaeb1c0191d3140a233a682987c61eb408).

The `glfwGetJoystickParam` function and the `GLFW_PRESENT`, `GLFW_AXES` and
`GLFW_BUTTONS` tokens have been replaced by the [glfwJoystickPresent](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1)
function as well as axis and button counts returned by the [glfwGetJoystickAxes](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaeb1c0191d3140a233a682987c61eb408) and [glfwGetJoystickButtons](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga5ffe34739d3dc97efe432ed2d81d9938) functions.


<a id="moving_mbcs"></a>

### Win32 MBCS support
The Win32 port of GLFW 3 will not compile in [MBCS mode][MBCS].  However,
because the use of the Unicode version of the Win32 API doesn't affect the
process as a whole, but only those windows created using it, it's perfectly
possible to call MBCS functions from other parts of the same application.
Therefore, even if an application using GLFW has MBCS mode code, there's no need
for GLFW itself to support it.

[MBCS]: https://msdn.microsoft.com/en-us/library/5z097dxa.aspx


<a id="moving_windows"></a>

### Support for versions of Windows older than XP
All explicit support for version of Windows older than XP has been removed.
There is no code that actively prevents GLFW 3 from running on these earlier
versions, but it uses Win32 functions that those versions lack.

Windows XP was released in 2001, and by now (January 2015) it has not only
replaced almost all earlier versions of Windows, but is itself rapidly being
replaced by Windows 7 and 8.  The MSDN library doesn't even provide
documentation for version older than Windows 2000, making it difficult to
maintain compatibility with these versions even if it was deemed worth the
effort.

The Win32 API has also not stood still, and GLFW 3 uses many functions only
present on Windows XP or later.  Even supporting an OS as new as XP (new
from the perspective of GLFW 2, which still supports Windows 95) requires
runtime checking for a number of functions that are present only on modern
version of Windows.


<a id="moving_syskeys"></a>

### Capture of system-wide hotkeys
The ability to disable and capture system-wide hotkeys like Alt+Tab has been
removed.  Modern applications, whether they're games, scientific visualisations
or something else, are nowadays expected to be good desktop citizens and allow
these hotkeys to function even when running in full screen mode.


<a id="moving_terminate"></a>

### Automatic termination
GLFW 3 does not register [glfwTerminate](/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901) with `atexit` at initialization,
because `exit` calls registered functions from the calling thread and while it
is permitted to call `exit` from any thread, [glfwTerminate](/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901) must only be
called from the main thread.

To release all resources allocated by GLFW, you should call [glfwTerminate](/docs/glfw/v3-5-1/en/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901)
yourself, from the main thread, before the program terminates.  Note that this
destroys all windows not already destroyed with [glfwDestroyWindow](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2),
invalidating any window handles you may still have.


<a id="moving_glu"></a>

### GLU header inclusion
GLFW 3 does not by default include the GLU header and GLU itself has been
deprecated by [Khronos][].  __New projects should not use GLU__, but if you need
it for legacy code that has been moved to GLFW 3, you can request that the GLFW
header includes it by defining [GLFW_INCLUDE_GLU](/docs/glfw/v3-5-1/en/02-getting-started/03-building-applications/#GLFW_INCLUDE_GLU) before the inclusion of the
GLFW header.

[Khronos]: https://en.wikipedia.org/wiki/Khronos_Group

__Old syntax__
```c
#include <GL/glfw.h>
```

__New syntax__
```c
#define GLFW_INCLUDE_GLU
#include <GLFW/glfw3.h>
```

There are many libraries that offer replacements for the functionality offered
by GLU.  For the matrix helper functions, see math libraries like [GLM][] (for
C++), [linmath.h][] (for C) and others.  For the tessellation functions, see for
example [libtess2][].

[GLM]: https://github.com/g-truc/glm
[linmath.h]: https://github.com/datenwolf/linmath.h
[libtess2]: https://github.com/memononen/libtess2


<a id="moving_tables"></a>

## Name change tables
<a id="moving_renamed_functions"></a>

### Renamed functions
| GLFW 2                      | GLFW 3                        | Notes |
| --------------------------- | ----------------------------- | ----- |
| `glfwOpenWindow`            | [glfwCreateWindow](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb)         | All channel bit depths are now hints
| `glfwCloseWindow`           | [glfwDestroyWindow](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2)        |       |
| `glfwOpenWindowHint`        | [glfwWindowHint](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#ga7d9c8c62384b1e2821c4dc48952d2033)           | Now accepts all `GLFW_*_BITS` tokens |
| `glfwEnable`                | [glfwSetInputMode](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa92336e173da9c8834558b54ee80563b)         |       |
| `glfwDisable`               | [glfwSetInputMode](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa92336e173da9c8834558b54ee80563b)         |       |
| `glfwGetMousePos`           | [glfwGetCursorPos](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga01d37b6c40133676b9cea60ca1d7c0cc)         |       |
| `glfwSetMousePos`           | [glfwSetCursorPos](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga04b03af936d906ca123c8f4ee08b39e7)         |       |
| `glfwSetMousePosCallback`   | [glfwSetCursorPosCallback](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gac1f879ab7435d54d4d79bb469fe225d7) |       |
| `glfwSetMouseWheelCallback` | [glfwSetScrollCallback](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga571e45a030ae4061f746ed56cb76aede)    | Accepts two-dimensional scroll offsets as doubles |
| `glfwGetJoystickPos`        | [glfwGetJoystickAxes](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaeb1c0191d3140a233a682987c61eb408)      |       |
| `glfwGetWindowParam`        | [glfwGetWindowAttrib](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337)      |       |
| `glfwGetGLVersion`          | [glfwGetWindowAttrib](/docs/glfw/v3-5-1/en/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337)      | Use `GLFW_CONTEXT_VERSION_MAJOR`, `GLFW_CONTEXT_VERSION_MINOR` and `GLFW_CONTEXT_REVISION` |
| `glfwGetDesktopMode`        | [glfwGetVideoMode](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gaba376fa7e76634b4788bddc505d6c9d5)         | Returns the current mode of a monitor |
| `glfwGetJoystickParam`      | [glfwJoystickPresent](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1)      | The axis and button counts are provided by [glfwGetJoystickAxes](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaeb1c0191d3140a233a682987c61eb408) and [glfwGetJoystickButtons](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#ga5ffe34739d3dc97efe432ed2d81d9938) |


<a id="moving_renamed_types"></a>

### Renamed types
| GLFW 2              | GLFW 3                | Notes |
| ------------------- | --------------------- |       |
| `GLFWmousewheelfun` | [GLFWscrollfun](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaf656112c33de3efdb227fa58f0134cf5)    |       |
| `GLFWmouseposfun`   | [GLFWcursorposfun](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gad6fae41b3ac2e4209aaa87b596c57f68) |       |


<a id="moving_renamed_tokens"></a>

### Renamed tokens
| GLFW 2                      | GLFW 3                       | Notes |
| --------------------------- | ---------------------------- | ----- |
| `GLFW_OPENGL_VERSION_MAJOR` | `GLFW_CONTEXT_VERSION_MAJOR` | Renamed as it applies to OpenGL ES as well |
| `GLFW_OPENGL_VERSION_MINOR` | `GLFW_CONTEXT_VERSION_MINOR` | Renamed as it applies to OpenGL ES as well |
| `GLFW_FSAA_SAMPLES`         | `GLFW_SAMPLES`               | Renamed to match the OpenGL API |
| `GLFW_ACTIVE`               | `GLFW_FOCUSED`               | Renamed to match the window focus callback |
| `GLFW_WINDOW_NO_RESIZE`     | `GLFW_RESIZABLE`             | The default has been inverted |
| `GLFW_MOUSE_CURSOR`         | `GLFW_CURSOR`                | Used with [glfwSetInputMode](/docs/glfw/v3-5-1/en/04-reference/06-input-reference/#gaa92336e173da9c8834558b54ee80563b) |
| `GLFW_KEY_ESC`              | `GLFW_KEY_ESCAPE`            |       |
| `GLFW_KEY_DEL`              | `GLFW_KEY_DELETE`            |       |
| `GLFW_KEY_PAGEUP`           | `GLFW_KEY_PAGE_UP`           |       |
| `GLFW_KEY_PAGEDOWN`         | `GLFW_KEY_PAGE_DOWN`         |       |
| `GLFW_KEY_KP_NUM_LOCK`      | `GLFW_KEY_NUM_LOCK`          |       |
| `GLFW_KEY_LCTRL`            | `GLFW_KEY_LEFT_CONTROL`      |       |
| `GLFW_KEY_LSHIFT`           | `GLFW_KEY_LEFT_SHIFT`        |       |
| `GLFW_KEY_LALT`             | `GLFW_KEY_LEFT_ALT`          |       |
| `GLFW_KEY_LSUPER`           | `GLFW_KEY_LEFT_SUPER`        |       |
| `GLFW_KEY_RCTRL`            | `GLFW_KEY_RIGHT_CONTROL`     |       |
| `GLFW_KEY_RSHIFT`           | `GLFW_KEY_RIGHT_SHIFT`       |       |
| `GLFW_KEY_RALT`             | `GLFW_KEY_RIGHT_ALT`         |       |
| `GLFW_KEY_RSUPER`           | `GLFW_KEY_RIGHT_SUPER`       |       |
