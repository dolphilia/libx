---
title: "Logger registry"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>Unofficial presentation of the official spdlog Wiki snapshot of 2025-10-15. <a href="https://github.com/gabime/spdlog/wiki/Logger-registry">Original source</a>. Source SHA-256: <code>ee3bce045fcd74fd092d50d21d1ba79fcb53dec6a5c213e456d0f3b0f491204c</code>. Software commit: <code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>. Wiki commit: <code>d384272cd5320e27b041ae92625040aa6db71a1e</code>. This independent Wiki snapshot is not a manual tagged for spdlog 1.17.0. <a href="/docs/spdlog/v1-17-0/en/02-reference/01-license/">Full original licenses and notices</a>. This presentation, translations and version annotations are unofficial Libx changes.</p><p>No separate documentation license was identified for this Wiki. Under the approved operating policy, the software MIT License is applied to the Wiki with this annotation. This is an operational judgment, not newly obtained permission from the rights holder.</p></aside>

<div data-spdlog-source-body="15-logger-registry">

spdlog maintains a global (per process) registry of the created loggers.

The purpose is for loggers to be accessed easily from anywhere in the project without passing them around.

```c++
spdlog::get("logger1")->info("hello");
.. 
.. 
some other source file..
..
auto l = spdlog::get("logger1");
l->info("hello again");
```

If a logger is not found, an empty shared pointer is returned. You use `if(l)` to check the validity of the pointer `l`.

### Registering new loggers
Normally  there is no need to register loggers as they are registered automatically for you.

To register manually created loggers(i.e. not created by the spdlog.h factory functions) use the ```register_logger(std::shared_ptr<logger>)``` function:
```c++
spdlog::register_logger(some_logger);
```
which will register ```some_logger``` using its name.

### Registry conflicts
spdlog will throw a ```spdlog::spdlog_ex``` exception  on attempting to register using a name that already exists in the registry

### Removing loggers from the registry
The "drop()" function can be used to remove a logger from the registry.

If no other shared_ptr pointing to the logger exists, the logger will be closed and all its resources will be freed.
```c++
spdlog::drop("logger_name");
//or remove them all
spdlog::drop_all()
```


</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
