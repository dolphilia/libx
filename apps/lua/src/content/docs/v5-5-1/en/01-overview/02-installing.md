---
title: "Installing Lua"
description: "Build, install and customize Lua 5.5"
licenseSource: "lua-5.5.1"
---

# <a id="install"></a>Installing Lua

Lua is distributed in [source](https://www.lua.org/ftp/) form. You need to build it before using it. Building Lua should be straightforward because Lua is implemented in pure ISO C and compiles unmodified in all known platforms that have an ISO C compiler. Lua also compiles unmodified as C++. The instructions given below for building Lua are for Unix-like platforms, such as Linux and macOS. See also [instructions for other systems](/docs/lua/v5-5-1/en/01-overview/02-installing/#other) and [customization options](/docs/lua/v5-5-1/en/01-overview/02-installing/#customization).

If you don't have the time or the inclination to compile Lua yourself, get a binary from [LuaBinaries](https://luabinaries.sourceforge.net).

## Building Lua

In most common Unix-like platforms, simply do "<kbd>make</kbd>". Here are the details.

1. Open a terminal window and move to the top-level directory, which is named `lua-5.5.1`. The `Makefile` there controls both the build process and the installation process.
2. Do "<kbd>make</kbd>". The `Makefile` will guess your platform and build Lua for it.
3. If the guess failed, do "<kbd>make help</kbd>" and see if your platform is listed. The platforms currently supported are:
  
  guess aix bsd c89 freebsd generic ios linux macosx mingw posix solaris
  
  If your platform is listed, just do "<kbd>make xxx</kbd>", where xxx is your platform name.
  
  If your platform is not listed, try the closest one or posix, generic, c89, in this order.
4. The compilation takes only a few moments and produces three files in the `src` directory: lua (the interpreter), luac (the compiler), and liblua.a (the library).
5. To check that Lua has been built correctly, do "<kbd>make test</kbd>" after building Lua. This will run the interpreter and print its version.

## Installing Lua

Once you have built Lua, you may want to install it in an official place in your system. In this case, do "<kbd>make install</kbd>". The official place and the way to install files are defined in the `Makefile`. You'll probably need the right permissions to install files, and so may need to do "<kbd>sudo make install</kbd>".

To build and install Lua in one step, do "<kbd>make all install</kbd>", or "<kbd>make xxx install</kbd>", where xxx is your platform name.

To install Lua locally after building it, do "<kbd>make local</kbd>". This will create a directory `install` with subdirectories `bin`, `include`, `lib`, `man`, `share`, and install Lua as listed below. To install Lua locally, but in some other directory, do "<kbd>make install INSTALL_TOP=xxx</kbd>", where xxx is your chosen directory. The installation starts in the `src` and `doc` directories, so take care if `INSTALL_TOP` is not an absolute path.

- **bin:**: lua luac
- **include:**: lua.h luaconf.h lualib.h lauxlib.h lua.hpp
- **lib:**: liblua.a
- **man/man1:**: lua.1 luac.1

These are the only directories you need for development. If you only want to run Lua programs, you only need the files in `bin` and `man`. The files in `include` and `lib` are needed for embedding Lua in C or C++ programs.

## <a id="customization"></a>Customization

Three kinds of things can be customized by editing a file:

- Where and how to install Lua — edit `Makefile`.
- How to build Lua — edit `src/Makefile`.
- Lua features — edit `src/luaconf.h`.

You don't actually need to edit the Makefiles because you may set the relevant variables in the command line when invoking make. Nevertheless, it's probably best to edit and save the Makefiles to record the changes you've made.

On the other hand, if you need to customize some Lua features, edit `src/luaconf.h` before building and installing Lua. The edited file will be the one installed, and it will be used by any Lua clients that you build, to ensure consistency. Further customization is available to experts by editing the Lua sources.

## <a id="other"></a>Building Lua on other systems

If you're not using the usual Unix tools, then the instructions for building Lua depend on the compiler you use. You'll need to create projects (or whatever your compiler uses) for building the library, the interpreter, and the compiler, as follows:

- **library:**: lapi.c lcode.c lctype.c ldebug.c ldo.c ldump.c lfunc.c lgc.c llex.c lmem.c lobject.c lopcodes.c lparser.c lstate.c lstring.c ltable.c ltm.c lundump.c lvm.c lzio.c lauxlib.c lbaselib.c lcorolib.c ldblib.c liolib.c lmathlib.c loadlib.c loslib.c lstrlib.c ltablib.c lutf8lib.c linit.c
- **interpreter:**: library, lua.c
- **compiler:**: library, luac.c

To use Lua as a library in your own programs, you need to know how to create and use libraries with your compiler. Moreover, to dynamically load C libraries for Lua, you'll need to know how to create dynamic libraries and you'll need to make sure that the Lua API functions are accessible to those dynamic libraries — but *don't* link the Lua library into each dynamic library. For Unix, we recommend that the Lua library be linked statically into the host program and its symbols exported for dynamic linking; `src/Makefile` does this for the Lua interpreter. For Windows, we recommend that the Lua library be a DLL. In all cases, the compiler luac should be linked statically.

As mentioned above, you may edit `src/luaconf.h` to customize some features before building Lua.
