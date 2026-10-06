---
title: "build/cmake/README.md"
licenseSource: "xxhash-fixed"
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



> 文書専用ライセンスの表記が確認できないため、ソフトウェア本体のCC0-1.0を文書にも適用する運用判断で掲載しています。原文英語の非公式形式変換・形式変換。


## Source and notices

[cmake-header](/docs/xxhash-trial/v0-8-4/en/03-notices/cmake-header/)

[Fixed source](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/build/cmake/README.md)

[Original text download](/docs/xxhash-trial/source/v0-8-4/build/cmake/README.md.txt)
