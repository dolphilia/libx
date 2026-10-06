---
title: "Integrating into Eclipse IDE"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>Unofficial presentation of the official spdlog Wiki snapshot of 2025-10-15. <a href="https://github.com/gabime/spdlog/wiki/Integrating-into-Eclipse-IDE">Original source</a>. Source SHA-256: <code>643339b22d8e1a5b7464db1126348fdd869f870d4d30d76face16fd1768f2bc8</code>. Software commit: <code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>. Wiki commit: <code>d384272cd5320e27b041ae92625040aa6db71a1e</code>. This independent Wiki snapshot is not a manual tagged for spdlog 1.17.0. <a href="/docs/spdlog/v1-17-0/en/02-reference/01-license/">Full original licenses and notices</a>. This presentation, translations and version annotations are unofficial Libx changes.</p><p>No separate documentation license was identified for this Wiki. Under the approved operating policy, the software MIT License is applied to the Wiki with this annotation. This is an operational judgment, not newly obtained permission from the rights holder.</p></aside>

<div data-spdlog-source-body="13-integrating-into-eclipse-ide">

This short guide can help you get started with integrating the C++ **spdlog** library into the Eclipse IDE.
The whole configuration consists of 5 simple steps.

Note: We can use git clone. Of course :)<br>
Note: In many cases, it is advisable to choose a parent folder named '_ThirdParty_' or '_libs_' or any other name that immediately tells us that it is a folder with third-party files. I chose as the parent folder, a folder called '_ThirdParty_'...

1) We will copy/unpack the content of the archive, which we previously downloaded from [the project pages](https://github.com/gabime/spdlog), into the newly created or already existing project. Or you can clone it from [github](https://github.com/gabime/spdlog)

2) From the menu bar choose `Project > Properties > C/C+ Build > GCC C++ Compiler > Preprocessor`, and here you have to add a definition by clicking the Add button (define symbol `-D`) and add the following definition `SPDLOG_COMPILED_LIB`. Attention, keep the size of the letters!

3) Then click `Includes` (We are still here:` Project > Properties > C/C++ Build > GCC C++ Compiler`) and add the path to the folder with headers for the library **spdlog**.
For example: `thirdParty/spdlog/include`

4) Click on `apply and close`.

5) Click `Project > Indexer > rebuild`


Happy Coding ;) 

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
