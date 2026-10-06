---
title: "Error handling"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>Unofficial presentation of the official spdlog Wiki snapshot of 2025-10-15. <a href=\"https://github.com/gabime/spdlog/wiki/Error-handling\">Original source</a>. Source SHA-256: <code>1357f3d73272b2d9665d106d5aa1dc5991308a19f3156f05492b3245898a3f5b</code>. Software commit: <code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>. Wiki commit: <code>d384272cd5320e27b041ae92625040aa6db71a1e</code>. This independent Wiki snapshot is not a manual tagged for spdlog 1.17.0. <a href=\"/docs/spdlog/v1-17-0/en/02-reference/01-license/\">Full original licenses and notices</a>. This presentation, translations and version annotations are unofficial Libx changes.</p><p>No separate documentation license was identified for this Wiki. Under Libx’s operating policy, the software MIT License is applied to the Wiki with this annotation. This is an operational judgment, not newly obtained permission from the rights holder.</p></aside>"}]
---



<div data-spdlog-source-body="08-error-handling">

Spdlog **will not** throw exceptions while logging (since version [39cdd08](https://github.com/gabime/spdlog/tree/39cdd08a5475c63959174747a140de86c24e4849)). 

It might throw during the construction of a logger or sink, because it is considered fatal.

If an error happens during logging, the library will print an error message to stderr.
To avoid flooding the screen with error messages, the rate is limited per logger to 1 message/minute.

This behaviour can be changed by calling ```spdlog::set_error_handler(new_handler_fun)``` or ```logger->set_error_handler(new_handler_fun)```:

**Globally change the error handler:**

```c++
    spdlog::set_error_handler([](const std::string& msg) {
        std::cerr << "my err handler: " << msg << std::endl;
    });
```


**For a specific logger:**

```c++
    critical_logger->set_error_handler([](const std::string& msg) {
        throw std::runtime_error(msg);
    });

```

**The default error handler**

`_default_err_handler` will use this to print error
```c++
    fmt::print(stderr, "[*** LOG ERROR ***] [{}] [{}] {}\n", date_buf, name(), msg);
```

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
