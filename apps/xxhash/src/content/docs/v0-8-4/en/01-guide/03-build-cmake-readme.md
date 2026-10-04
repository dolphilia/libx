---
title: "build/cmake/README.md"
licenseSource: "xxhash-cmake"
documentContext: [{"kind":"source","html":"<h2 id=\"source-and-notices\">Source and notices</h2>\n<p>No documentation-specific license statement was found in the recorded checks. Under Libx’s operating policy, the software component’s CC0-1.0 license is applied to this documentation with this annotation. This is an operational decision, not a newly obtained permission.</p>\n<p>Fixed software version: <strong>0.8.4</strong>. Source commit: <code>c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0</code>. This is an unofficial presentation; formatting, internal links and clearly marked editorial notes are Libx changes. The Japanese translation is provided separately when completed.</p>\n<p><a href=\"/docs/xxhash/v0-8-4/en/03-notices/cmake-header/\">cmake-header</a></p>\n<p><a href=\"https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/build/cmake/README.md\">Fixed original source</a> · <a href=\"/docs/xxhash/source/v0-8-4/build/cmake/README.md.txt\">Original text download</a></p>"}]
---


# xxHash CMake Integration

This document explains how to integrate xxHash into your CMake project. Choose the method that best fits your needs.

## Method 1: Install and Import (Recommended)

**Best for:** Projects that want to use xxHash as a system-wide library.

### Step 1: Build and Install xxHash

```bash
cd /path/to/xxHash
cmake -S build/cmake -B cmake_build
cmake --build cmake_build --parallel
cmake --install cmake_build
```

### Step 2: Use in Your Project

Add to your `CMakeLists.txt`:

```cmake
find_package(xxHash 0.8 CONFIG REQUIRED)
target_link_libraries(YourTarget PRIVATE xxHash::xxhash)
```

### Build Options

Configure the build with these options:

- `-DXXHASH_BUILD_XXHSUM=OFF` - Skip building the command line tool (default: ON)
- `-DBUILD_SHARED_LIBS=OFF` - Build static library instead of shared (default: ON)
- `-DCMAKE_INSTALL_PREFIX=/custom/path` - Install to custom location
- `-DDISPATCH=OFF` - Disable CPU dispatch optimization (default: ON for x64)

## Method 2: Add as Subdirectory

**Best for:** Projects that want to bundle xxHash directly without system installation.

Add to your `CMakeLists.txt`:

```cmake
# Optional: Configure xxHash before adding
set(XXHASH_BUILD_XXHSUM OFF)        # Don't build command line tool
option(BUILD_SHARED_LIBS OFF)       # Build static library

# Add xxHash to your project
add_subdirectory(path/to/xxHash/build/cmake xxhash_build EXCLUDE_FROM_ALL)

# Link to your target
target_link_libraries(YourTarget PRIVATE xxHash::xxhash)
```



