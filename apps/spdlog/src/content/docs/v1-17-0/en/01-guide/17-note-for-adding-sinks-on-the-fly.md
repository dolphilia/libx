---
title: "Note for adding sinks on the fly"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>Unofficial presentation of the official spdlog Wiki snapshot of 2025-10-15. <a href=\"https://github.com/gabime/spdlog/wiki/Note-for-adding-sinks-on-the-fly\">Original source</a>. Source SHA-256: <code>d2b87f7fdb6e34ae9542dbb57a1da40a7f6f07f22749f4419e3e70a2b1c59dad</code>. Software commit: <code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>. Wiki commit: <code>d384272cd5320e27b041ae92625040aa6db71a1e</code>. This independent Wiki snapshot is not a manual tagged for spdlog 1.17.0. <a href=\"/docs/spdlog/v1-17-0/en/02-reference/01-license/\">Full original licenses and notices</a>. This presentation, translations and version annotations are unofficial Libx changes.</p><p>No separate documentation license was identified for this Wiki. Under Libx’s operating policy, the software MIT License is applied to the Wiki with this annotation. This is an operational judgment, not newly obtained permission from the rights holder.</p></aside>"}]
---



<div data-spdlog-source-body="17-note-for-adding-sinks-on-the-fly">

We had a need to add a callback sink to our logs so we can reprocess log messages to different formats (json and MQTT) while keeping the original logging. I discovered a small trap based on not knowing the C++ standard inside out. To add a sink, be careful how you access `sinks()` in the logger. This doesn't work:

```cpp
auto sinks = log_->sinks();
sinks.push_back(std::make_shared<spdlog::sinks::callback_sink<std::mutex> >([this](const spdlog::details::log_msg& msg) {this->LogCallback(msg);}));
```

`"auto sinks = ..."` gives you a copy of the sinks vector so you're not modifying the sinks vector in the logger. The C++ compiler is actually doing what it should with the C++ standard, `"auto var = xyz"` is never supposed to give you a reference, it calls the copy constructor of the RHS object.

You need to use `auto&` or the original sink_ptr type defined in `common.h`, but it needs to be a reference to the vector. 

```cpp
auto& sinks = log_->sinks();
sinks.push_back( .....etc
```

Hopefully this saves someone else an hour of head-scratching. 

---

See details [#3014](https://github.com/gabime/spdlog/issues/3014)

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
