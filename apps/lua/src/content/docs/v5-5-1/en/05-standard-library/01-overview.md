---
title: "Standard libraries overview"
description: "Lua standard libraries and loading conventions"
licenseSource: "lua-5.5.1"
---

# 6 – <a id="6"></a>The Standard Libraries

The standard Lua libraries provide useful functions that are implemented in C through the C API. Some of these functions provide essential services to the language (e.g., [`type`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-type) and [`getmetatable`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-getmetatable)); others provide access to outside services (e.g., I/O); and others could be implemented in Lua itself, but that for different reasons deserve an implementation in C (e.g., [`table.sort`](/docs/lua/v5-5-1/en/05-standard-library/08-table-manipulation/#pdf-table.sort)).

All libraries are implemented through the official C API and are provided as separate C modules. Unless otherwise noted, these library functions do not adjust its number of arguments to its expected parameters. For instance, a function documented as `foo(arg)` should not be called without an argument.

The notation **fail** means a false value representing some kind of failure. (Currently, **fail** is equal to **nil**, but that may change in future versions. The recommendation is to always test the success of these functions with `(not status)`, instead of `(status == nil)`.)

Currently, Lua has the following standard libraries:

- basic library ([§6.2](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#6.2));
- coroutine library ([§6.3](/docs/lua/v5-5-1/en/05-standard-library/04-coroutine-manipulation/#6.3));
- package library ([§6.4](/docs/lua/v5-5-1/en/05-standard-library/05-modules/#6.4));
- string manipulation ([§6.5](/docs/lua/v5-5-1/en/05-standard-library/06-string-manipulation/#6.5));
- basic UTF-8 support ([§6.6](/docs/lua/v5-5-1/en/05-standard-library/07-utf8-support/#6.6));
- table manipulation ([§6.7](/docs/lua/v5-5-1/en/05-standard-library/08-table-manipulation/#6.7));
- mathematical functions ([§6.8](/docs/lua/v5-5-1/en/05-standard-library/09-mathematical-functions/#6.8)) (sin, log, etc.);
- input and output ([§6.9](/docs/lua/v5-5-1/en/05-standard-library/10-input-and-output/#6.9));
- operating system facilities ([§6.10](/docs/lua/v5-5-1/en/05-standard-library/11-operating-system/#6.10));
- debug facilities ([§6.11](/docs/lua/v5-5-1/en/05-standard-library/12-debug-library/#6.11)).

Except for the basic and the package libraries, each library provides all its functions as fields of a global table or as methods of its objects.
