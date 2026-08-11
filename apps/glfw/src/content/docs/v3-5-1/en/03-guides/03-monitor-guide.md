---
title: "Monitor guide"
description: "Monitor objects, modes and gamma ramps"
licenseSource: "glfw-3.5.1"
---

> This page is an altered Markdown adaptation of the [official GLFW 3.5.1 documentation](https://www.glfw.org/docs/3.5.1/). Formatting, navigation and links were changed for libx; technical content comes from the GLFW 3.5.1 source distribution.

<a id="monitor_guide"></a>

# Monitor guide
This guide introduces the monitor related functions of GLFW.  For details on
a specific function in this category, see the [monitor](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/).  There are also
guides for the other areas of GLFW.

 - [intro_guide](/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_guide)
 - [window_guide](/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_guide)
 - [context_guide](/docs/glfw/v3-5-1/en/03-guides/02-context-guide/#context_guide)
 - [vulkan_guide](/docs/glfw/v3-5-1/en/03-guides/06-vulkan-guide/#vulkan_guide)
 - [input_guide](/docs/glfw/v3-5-1/en/03-guides/05-input-guide/#input_guide)


<a id="monitor_object"></a>

## Monitor objects
A monitor object represents a currently connected monitor and is represented as
a pointer to the [opaque](https://en.wikipedia.org/wiki/Opaque_data_type) type
[GLFWmonitor](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3).  Monitor objects cannot be created or destroyed by the
application and retain their addresses until the monitors they represent are
disconnected or until the library is [terminated](/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#intro_init_terminate).

Each monitor has a current video mode, a list of supported video modes,
a virtual position, a human-readable name, an estimated physical size and
a gamma ramp.  One of the monitors is the primary monitor.

The virtual position of a monitor is in
[screen coordinates](/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#coordinate_systems) and, together with the current
video mode, describes the viewports that the connected monitors provide into the
virtual desktop that spans them.

To see how GLFW views your monitor setup and its available video modes, run the
`monitors` test program.


<a id="monitor_monitors"></a>

### Retrieving monitors
The primary monitor is returned by [glfwGetPrimaryMonitor](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gac3adb24947eb709e1874028272e5dfc5).  It is the user's
preferred monitor and is usually the one with global UI elements like task bar
or menu bar.

```c
GLFWmonitor* primary = glfwGetPrimaryMonitor();
```

You can retrieve all currently connected monitors with [glfwGetMonitors](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga70b1156d5d24e9928f145d6c864369d2).
See the reference documentation for the lifetime of the returned array.

```c
int count;
GLFWmonitor** monitors = glfwGetMonitors(&count);
```

The primary monitor is always the first monitor in the returned array, but other
monitors may be moved to a different index when a monitor is connected or
disconnected.


<a id="monitor_event"></a>

### Monitor configuration changes
If you wish to be notified when a monitor is connected or disconnected, set
a monitor callback.

```c
glfwSetMonitorCallback(monitor_callback);
```

The callback function receives the handle for the monitor that has been
connected or disconnected and the event that occurred.

```c
void monitor_callback(GLFWmonitor* monitor, int event)
{
    if (event == GLFW_CONNECTED)
    {
        // The monitor was connected
    }
    else if (event == GLFW_DISCONNECTED)
    {
        // The monitor was disconnected
    }
}
```

If a monitor is disconnected, all windows that are full screen on it will be
switched to windowed mode before the callback is called.  Only [glfwGetMonitorName](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga7af83e13489d90379588fb331b9e4b68) and [glfwGetMonitorUserPointer](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga1adbfbfb8cd58b23cfee82e574fbbdc5) will return useful values
for a disconnected monitor and only before the monitor callback returns.


<a id="monitor_properties"></a>

## Monitor properties
Each monitor has a current video mode, a list of supported video modes,
a virtual position, a content scale, a human-readable name, a user pointer, an
estimated physical size and a gamma ramp.


<a id="monitor_modes"></a>

### Video modes
GLFW generally does a good job selecting a suitable video mode when you create
a full screen window, change its video mode or make a windowed one full
screen, but it is sometimes useful to know exactly which video modes are
supported.

Video modes are represented as [GLFWvidmode](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga902c2816ac9b34b757282daab59b2565) structures.  You can get an
array of the video modes supported by a monitor with [glfwGetVideoModes](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gad2e24d2843cb7d6c26202cddd530fc1b).
See the reference documentation for the lifetime of the returned array.

```c
int count;
GLFWvidmode* modes = glfwGetVideoModes(monitor, &count);
```

To get the current video mode of a monitor call [glfwGetVideoMode](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gaba376fa7e76634b4788bddc505d6c9d5).  See the
reference documentation for the lifetime of the returned pointer.

```c
const GLFWvidmode* mode = glfwGetVideoMode(monitor);
```

The resolution of a video mode is specified in
[screen coordinates](/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#coordinate_systems), not pixels.


<a id="monitor_size"></a>

### Physical size
The physical size of a monitor in millimetres, or an estimation of it, can be
retrieved with [glfwGetMonitorPhysicalSize](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga7d8bffc6c55539286a6bd20d32a8d7ea).  This has no relation to its
current _resolution_, i.e. the width and height of its current
[video mode](/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_modes).

```c
int width_mm, height_mm;
glfwGetMonitorPhysicalSize(monitor, &width_mm, &height_mm);
```

While this can be used to calculate the raw DPI of a monitor, this is often not
useful.  Instead, use the [monitor content scale](/docs/glfw/v3-5-1/en/03-guides/03-monitor-guide/#monitor_scale) and
[window content scale](/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_scale) to scale your content.


<a id="monitor_scale"></a>

### Content scale
The content scale for a monitor can be retrieved with [glfwGetMonitorContentScale](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#gad3152e84465fa620b601265ebfcdb21b).

```c
float xscale, yscale;
glfwGetMonitorContentScale(monitor, &xscale, &yscale);
```

For more information on what the content scale is and how to use it, see
[window content scale](/docs/glfw/v3-5-1/en/03-guides/04-window-guide/#window_scale).


<a id="monitor_pos"></a>

### Virtual position
The position of the monitor on the virtual desktop, in
[screen coordinates](/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#coordinate_systems), can be retrieved with [glfwGetMonitorPos](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga102f54e7acc9149edbcf0997152df8c9).

```c
int xpos, ypos;
glfwGetMonitorPos(monitor, &xpos, &ypos);
```


<a id="monitor_workarea"></a>

### Work area
The area of a monitor not occupied by global task bars or menu bars is the work
area.  This is specified in [screen coordinates](/docs/glfw/v3-5-1/en/03-guides/01-introduction-to-the-api/#coordinate_systems) and
can be retrieved with [glfwGetMonitorWorkarea](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0).

```c
int xpos, ypos, width, height;
glfwGetMonitorWorkarea(monitor, &xpos, &ypos, &width, &height);
```


<a id="monitor_name"></a>

### Human-readable name
The human-readable, UTF-8 encoded name of a monitor is returned by [glfwGetMonitorName](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga7af83e13489d90379588fb331b9e4b68).  See the reference documentation for the lifetime of the
returned string.

```c
const char* name = glfwGetMonitorName(monitor);
```

Monitor names are not guaranteed to be unique.  Two monitors of the same model
and make may have the same name.  Only the monitor handle is guaranteed to be
unique, and only until that monitor is disconnected.


<a id="monitor_userptr"></a>

### User pointer
Each monitor has a user pointer that can be set with [glfwSetMonitorUserPointer](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga702750e24313a686d3637297b6e85fda) and queried with [glfwGetMonitorUserPointer](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga1adbfbfb8cd58b23cfee82e574fbbdc5).  This
can be used for any purpose you need and will not be modified by GLFW.  The
value will be kept until the monitor is disconnected or until the library is
terminated.

The initial value of the pointer is `NULL`.


<a id="monitor_gamma"></a>

### Gamma ramp
The gamma ramp of a monitor can be set with [glfwSetGammaRamp](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga583f0ffd0d29613d8cd172b996bbf0dd), which accepts
a monitor handle and a pointer to a [GLFWgammaramp](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga939cf093cb0af0498b7b54dc2e181404) structure.

```c
GLFWgammaramp ramp;
unsigned short red[256], green[256], blue[256];

ramp.size = 256;
ramp.red = red;
ramp.green = green;
ramp.blue = blue;

for (i = 0;  i < ramp.size;  i++)
{
    // Fill out gamma ramp arrays as desired
}

glfwSetGammaRamp(monitor, &ramp);
```

The gamma ramp data is copied before the function returns, so there is no need
to keep it around once the ramp has been set.

It is recommended that your gamma ramp have the same size as the current gamma
ramp for that monitor.

The current gamma ramp for a monitor is returned by [glfwGetGammaRamp](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga76ba90debcf0062b5c4b73052b24f96f).  See
the reference documentation for the lifetime of the returned structure.

```c
const GLFWgammaramp* ramp = glfwGetGammaRamp(monitor);
```

If you wish to set a regular gamma ramp, you can have GLFW calculate it for you
from the desired exponent with [glfwSetGamma](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga6ac582625c990220785ddd34efa3169a), which in turn calls [glfwSetGammaRamp](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga583f0ffd0d29613d8cd172b996bbf0dd) with the resulting ramp.

```c
glfwSetGamma(monitor, 1.0);
```

To experiment with gamma correction via the [glfwSetGamma](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga6ac582625c990220785ddd34efa3169a) function, run the
`gamma` test program.

> **Note:** The software controlled gamma ramp is applied _in addition_ to the
hardware gamma correction, which today is typically an approximation of sRGB
gamma.  This means that setting a perfectly linear ramp, or gamma 1.0, will
produce the default (usually sRGB-like) behavior.

> **Note:** __Wayland:__ An application cannot read or modify the monitor gamma ramp.
The [glfwGetGammaRamp](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga76ba90debcf0062b5c4b73052b24f96f), [glfwSetGammaRamp](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga583f0ffd0d29613d8cd172b996bbf0dd) and [glfwSetGamma](/docs/glfw/v3-5-1/en/04-reference/05-monitor-reference/#ga6ac582625c990220785ddd34efa3169a) functions
emit [GLFW_FEATURE_UNAVAILABLE](/docs/glfw/v3-5-1/en/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5).
