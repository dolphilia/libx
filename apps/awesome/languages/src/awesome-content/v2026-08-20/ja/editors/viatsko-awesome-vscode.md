---
title: "Awesome Vscode"
description: "Vscodeを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-viatsko-awesome-vscode-readme-md"
---

# Awesome Vscode

Vscodeを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

# 目次

- [目次](#table-of-contents)
- [公式情報](#official)
- [構文](#syntax)
- [ほかのエディターからの移行](#migrating-from-other-editors)
  - [Vimから移行](#migrating-from-vim)
  - [Atomから移行](#migrating-from-atom)
  - [Sublime Textから移行](#migrating-from-sublime-text)
  - [Visual Studioから移行](#migrating-from-visual-studio)
  - [IntelliJ IDEAから移行](#migrating-from-intellij-idea)
  - [Xcodeから移行](#migrating-from-xcode)
  - [Camel Humps](#camel-humps)
- [特定技術でVS Codeを使う](#using-vs-code-with-particular-technologies)
- [LintとIntelliSense](#lint-and-intellisense)
  - [1C](#1c)
  - [AutoHotkey](#autohotkey)
    - [AutoHotkey Plus](#autohotkey-plus)
  - [Bash](#bash)
    - [Bash IDE](#bash-ide)
    - [Bash Debug](#bash-debug)
    - [Shellman](#shellman)
  - [C++](#c)
      - [その他](#more)
  - [C\#, ASP .NET and .NET Core](#c-asp-net-and-net-core)
  - [Clojure](#clojure)
    - [Calva](#calva)
  - [CSS](#css)
    - [CSS Peek](#css-peek)
  - [Go](#go)
  - [Groovy](#groovy)
  - [Haskell](#haskell)
  - [HLSL](#hlsl)
  - [Shell](#shell)
  - [Java](#java)
  - [JavaScript](#javascript)
    - [リンター](#linters)
    - [フレームワーク別](#framework-specific)
    - [Debugger for Chrome](#debugger-for-chrome)
    - [Facebook Flow](#facebook-flow)
    - [TypeScript](#typescript)
  - [MATLAB](#matlab)
  - [Markdown](#markdown)
    - [markdownlint](#markdownlint)
    - [Markdown All in One](#markdown-all-in-one)
    - [Markdown Emoji](#markdown-emoji)
    - [MEO](#meo)
  - [PHP](#php)
    - [PHP Tools](#php-tools)
    - [IntelliSense](#intellisense)
    - [Laravel](#laravel)
    - [Twig](#twig)
    - [Smarty](#smarty)
      - [Smarty Template Support](#smarty-template-support)
    - [その他の拡張機能](#other-extensions)
    - [関連資料](#read-more)
  - [POV-Ray](#pov-ray)
  - [Python](#python)
    - [TensorFlow](#tensorflow)
  - [ReasonML](#reasonml)
  - [Ruby](#ruby)
  - [Rust](#rust)
  - [Terraform](#terraform)
- [GitHub](#github)
  - [GitHub Pull Requests and Issues](#github-pull-requests-and-issues)
  - [GistPad](#gistpad)
  - [GitHub Actions](#github-actions)
  - [GitHub Repositories](#github-repositories)
  - [GitHub Pull Request Monitor](#github-pull-request-monitor)
- [生産性](#productivity)
  - [ARM Template Viewer](#arm-template-viewer)
  - [Azure Cosmos DB](#azure-cosmos-db)
  - [Azure IoT Toolkit](#azure-iot-toolkit)
  - [Bookmarks](#bookmarks)
  - [Microsoft Edge Tools](#microsoft-edge-tools)
  - [Color Tabs](#color-tabs)
  - [Create tests](#create-tests)
  - [Dendron](#dendron)
  - [Duplicate Action](#duplicate-action)
  - [Error Lens](#error-lens)
  - [Toggle](#toggle)
  - [ES7 React/Redux/GraphQL/React-Native snippets](#es7-reactreduxgraphqlreact-native-snippets)
    - [Gi](#gi)
  - [Git History](#git-history)
  - [Git Project Manager](#git-project-manager)
  - [GitLink](#gitlink)
  - [GitLens](#gitlens)
  - [GitLab Workflow](#gitlab-workflow)
      - [Gradle Tasks](#gradle-tasks)
  - [Icon Fonts](#icon-fonts)
  - [Import Cost](#import-cost)
  - [Jira and Bitbucket](#jira-and-bitbucket)
  - [Find-Jump](#find-jump)
  - [Kanban](#kanban)
  - [Live Server](#live-server)
  - [Clipboard Manager](#clipboard-manager)
  - [ngrok for VSCode](#ngrok-for-vscode)
  - [Dotnet Core Test Explorer](#dotnet-core-test-explorer)
  - [i18n Ally](#i18n-ally)
  - [Instant Markdown](#instant-markdown)
  - [npm Intellisense](#npm-intellisense)
  - [Parameter Hints](#parameter-hints)
  - [Partial Diff](#partial-diff)
    - [Paste JSON as Code](#paste-json-as-code)
  - [Path Autocomplete](#path-autocomplete)
  - [Path IntelliSense](#path-intellisense)
  - [Power Tools](#power-tools)
  - [PrintCode](#printcode)
  - [Project Manager](#project-manager)
  - [Project Dashboard](#project-dashboard)
  - [Rainbow CSV](#rainbow-csv)
  - [Remote Development](#remote-development)
  - [REST Client](#rest-client)
  - [Text Power Tools](#text-power-tools)
  - [Todo Tree](#todo-tree)
  - [Toggle Quotes](#toggle-quotes)
  - [Typescript Destructure](#typescript-destructure)
  - [WakaTime](#wakatime)
  - [Timing](#timing)
  - [httpYac](#httpyac)
  - [DevDb](#devdb)
  - [Keploy](#keploy)
  - [SemanticDiff](#semanticdiff)
  - [Trunk](#trunk)
  - [Peacock](#peacock)
  - [GitHub Copilot](#github-copilot)
- [整形と美化](#formatting--beautification)
  - [Better Align](#better-align)
  - [Auto Rename Tag](#auto-rename-tag)
  - [html2pug](#html2pug)
  - [Paste and Indent](#paste-and-indent)
  - [Sort Lines](#sort-lines)
  - [Surround](#surround)
  - [Wrap Selection](#wrap-selection)
  - [Formatting Toggle](#formatting-toggle)
  - [shell-format](#shell-format)
  - [Vscode Google Translate](#vscode-google-translate)
  - [エクスプローラーアイコン](#explorer-icons)
    - [City Lights Icons](#city-lights-icons)
    - [VSCode Icons](#vscode-icons)
    - [Seti Icons](#seti-icons)
    - [Material Icon Theme](#material-icon-theme)
- [未分類](#uncategorized)
  - [CodeRoad](#coderoad)
  - [Code Runner](#code-runner)
  - [Code Time](#code-time)
  - [Color Highlight](#color-highlight)
  - [Output Colorizer](#output-colorizer)
  - [Dash](#dash)
  - [Edit with Shell Command](#edit-with-shell-command)
  - [Editor Config for VS Code](#editor-config-for-vs-code)
  - [SFTP](#sftp)
  - [Highlight JSX/HTML tags](#highlight-jsxhtml-tags)
  - [Indent Rainbow](#indent-rainbow)
  - [iTerm2 Theme Sync](#iterm2-theme-sync)
  - [Password Generator](#password-generator)
  - [PlatformIO IDE](#platformio-ide)
  - [Polacode](#polacode)
  - [carbon-now-sh](#carbon-now-sh)
  - [Quokka](#quokka)
  - [Runner](#runner)
  - [SVG](#svg)
  - [Text Marker (Highlighter)](#text-marker-highlighter)
  - [Interface generator](#interface-generator)
  - [JFrog](#jfrog)
  - [SARIF Explorer](#sarif-explorer)
  - [Document Viewer](#document-viewer)
- [テーマ](#themes)
  - [UI](#ui)
  - [構文](#syntax-1)
    - [2077 theme by Endormi](#2077-theme-by-endormi)
    - [An Old Hope Theme by Dustin Sanders](#an-old-hope-theme-by-dustin-sanders)
    - [Ariake Dark by wart](#ariake-dark-by-wart)
    - [Atom One Dark Theme by Mahmoud Ali](#atom-one-dark-theme-by-mahmoud-ali)
    - [Atomize by emroussel](#atomize-by-emroussel)
    - [Ayu by teabyii](#ayu-by-teabyii)
    - [Borealis Theme by Alexander Eckert](#borealis-theme-by-alexander-eckert)
    - [Captain Sweetheart by ultradracula](#captain-sweetheart-by-ultradracula)
    - [City Lights by Yummygum](#city-lights-by-yummygum)
    - [Cobalt2 Theme Official by Wes Bos](#cobalt2-theme-official-by-wes-bos)
    - [Dracula Official by Dracula Theme](#dracula-official-by-dracula-theme)
    - [Edge by Bogdan Lazar](#edge-by-bogdan-lazar)
    - [Eva Theme by fisheva](#eva-theme-by-fisheva)
    - [Fairy Floss by nopjmp and sailorhg](#fairy-floss-by-nopjmp-and-sailorhg)
    - [GitHub Theme by Thomas Pink](#github-theme-by-thomas-pink)
    - [Jellybeans Theme by Dimitar Nonov](#jellybeans-theme-by-dimitar-nonov)
    - [Material Palenight Theme by whizkydee](#material-palenight-theme-by-whizkydee)
    - [Material Theme by Mattia Astorino](#material-theme-by-mattia-astorino)
    - [Mno by u29dc](#mno-by-u29dc)
    - [Omni by Rocketseat](#omni-by-rocketseat)
    - [One Monokai by azemoh](#one-monokai-by-azemoh)
    - [Monokai Pro by monokai (commercial)](#monokai-pro-by-monokai-commercial)
    - [Night Owl by Sarah Drasner](#night-owl-by-sarah-drasner)
    - [Plastic by Will Stone](#plastic-by-will-stone)
    - [Nord by arcticicestudio](#nord-by-arcticicestudio)
    - [Rainglow by Dayle Rees](#rainglow-by-dayle-rees)
    - [Relaxed Theme by Michael Kühnel](#relaxed-theme-by-michael-kühnel)
    - [Shades of Purple by Ahmad Awais](#shades-of-purple-by-ahmad-awais)
    - [Slime Theme by smlombardi](#slime-theme-by-smlombardi)
    - [Niketa Theme by Dejan Toteff](#niketa-theme-by-dejan-toteff)
- [フォローすべき人々](#people-to-follow)
- [拡張機能開発者向け資料](#resources-for-extension-developers)
  - [Documentation](#documentation)
  - [Libraries](#libraries)
  - [Tools](#tools)
- [オンライン講座](#online-courses)
  - [Visual Studio Code Power User Course (commercial)](#visual-studio-code-power-user-course-commercial)
- [貢献](#contribute)
- [ライセンス](#license)

# 公式情報

- [Official website](https://code.visualstudio.com/)
- [Source code](https://github.com/microsoft/vscode) on GitHub
- [Releases (stable channel)](https://code.visualstudio.com/download)
- [Releases (insiders channel)](https://code.visualstudio.com/insiders)
- [Monthly iteration plans](https://github.com/Microsoft/vscode/issues?utf8=%E2%9C%93&q=label%3Aiteration-plan+)

# 構文

構文に関するVS Code拡張機能・資料。

- [Arduino](https://marketplace.visualstudio.com/items?itemName=vscode-arduino.vscode-arduino-community)
- [Befunge](https://marketplace.visualstudio.com/items?itemName=kagof.befunge)
- [Blink (Nuke Tools)](https://marketplace.visualstudio.com/items?itemName=virgilsisoe.nuke-tools)
- [Bolt](https://marketplace.visualstudio.com/items?itemName=smkamranqadri.vscode-bolt-language)
- [Bond](https://marketplace.visualstudio.com/items?itemName=yiwwan.vscode-bond)
- [CMake](https://marketplace.visualstudio.com/items?itemName=twxs.cmake)
- [Dart](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code)
- [Dockerfile](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [EJS](https://marketplace.visualstudio.com/items?itemName=QassimFarid.ejs-language-support)
- [Elixir](https://marketplace.visualstudio.com/items?itemName=mjmcloug.vscode-elixir)
- [Elm](https://marketplace.visualstudio.com/items?itemName=sbrink.elm)
- [Erlang](https://marketplace.visualstudio.com/items?itemName=pgourlain.erlang)
- [F#](https://marketplace.visualstudio.com/items?itemName=Ionide.Ionide-fsharp)
- [Flatbuffers](https://marketplace.visualstudio.com/items?itemName=gaborv.flatbuffers)
- [Fortran](https://marketplace.visualstudio.com/items?itemName=Gimly81.fortran)
- [Hack(HHVM)](https://marketplace.visualstudio.com/items?itemName=pranayagarwal.vscode-hack)
- [Handlebars](https://marketplace.visualstudio.com/items?itemName=andrejunges.Handlebars)
- [Hive SQL](https://marketplace.visualstudio.com/items?itemName=josephtbradley.hive-sql)
- [Julia](https://marketplace.visualstudio.com/items?itemName=julialang.language-julia)
- [KL](https://marketplace.visualstudio.com/items?itemName=melmass.kl)
- [Kotlin](https://marketplace.visualstudio.com/items?itemName=mathiasfrohlich.Kotlin)
- [LaTeX](https://marketplace.visualstudio.com/items?itemName=torn4dom4n.latex-support)
- [MATLAB](https://marketplace.visualstudio.com/items?itemName=MathWorks.language-matlab)
- [Mason](https://marketplace.visualstudio.com/items?itemName=viatsko.html-mason)
- [openHAB](https://marketplace.visualstudio.com/items?itemName=openhab.openhab)
- [Parser 3](https://marketplace.visualstudio.com/items?itemName=viatsko.parser3)
- [Pascal](https://marketplace.visualstudio.com/items?itemName=alefragnani.pascal), or [OmniPascal](https://marketplace.visualstudio.com/items?itemName=Wosi.omnipascal) (only for Windows)
- [POV-Ray](https://marketplace.visualstudio.com/items?itemName=jmaxwilson.vscode-povray)
- [Protobuf](https://marketplace.visualstudio.com/items?itemName=peterj.proto)
- [Ruby](https://marketplace.visualstudio.com/items?itemName=Shopify.ruby-lsp)
- [Scala](https://marketplace.visualstudio.com/items?itemName=scalameta.metals)
- [Shaders (*HLSL*, *GLSL*, *Cg*) ](https://marketplace.visualstudio.com/items?itemName=slevesque.shader)
- [Stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)
- [Swift](https://marketplace.visualstudio.com/items?itemName=swiftlang.swift-vscode)
- [VEX](https://marketplace.visualstudio.com/items?itemName=melmass.vex)
- [Wenyan](https://github.com/antfu/wenyan-lang-vscode)
- [Zephir](https://marketplace.visualstudio.com/items?itemName=zephir-lang.zephir)

# ほかのエディターからの移行

ほかのエディターからの移行に関するVS Code拡張機能・資料。

## [Vimから移行](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)

> Vimから移行に関するVS Code拡張機能・資料。

## [Atomから移行](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings)

> Atomから移行に関するVS Code拡張機能・資料。

## [Sublime Textから移行](https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings)

> Sublime Textから移行に関するVS Code拡張機能・資料。

## [Visual Studioから移行](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vs-keybindings)

> Visual Studioから移行に関するVS Code拡張機能・資料。

## [IntelliJ IDEAから移行](https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings)

> IntelliJ IDEAから移行に関するVS Code拡張機能・資料。

## [Xcodeから移行](https://marketplace.visualstudio.com/items?itemName=stevemoser.xcode-keybindings)

> Xcodeから移行に関するVS Code拡張機能・資料。

## [Camel Humps](https://www.damirscorner.com/blog/posts/20190726-CamelHumpsNavigationInVsCode.html)

> Camel Humpsに関するVS Code拡張機能・資料。

# 特定技術でVS Codeを使う

特定技術でVS Codeを使うに関するVS Code拡張機能・資料。

特定技術でVS Codeを使うに関するVS Code拡張機能・資料。 関連情報: [Microsoft/vscode-recipes](https://github.com/Microsoft/vscode-recipes)。

# LintとIntelliSense

LintとIntelliSenseに関するVS Code拡張機能・資料。
> LintとIntelliSenseに関するVS Code拡張機能・資料。

LintとIntelliSenseに関するVS Code拡張機能・資料。 関連情報: [Languages](https://code.visualstudio.com/Docs/languages/overview)。

## 1C

- [1C/OScript](https://marketplace.visualstudio.com/items?itemName=1c-syntax.language-1c-bsl) - rich 1С:Enterprise 8 (BSL) language support in VSC - add syntax highlighting to *.bsl и *.os files in VSC, add IntelliSense and syntax helper for 1С lang

## AutoHotkey

### [AutoHotkey Plus](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-autohotkey-plus)
> AutoHotkey Plusに関するVS Code拡張機能・資料。

## Bash

### [Bash IDE](https://marketplace.visualstudio.com/items?itemName=mads-hartmann.bash-ide-vscode)
> Bash IDEに関するVS Code拡張機能・資料。

### [Bash Debug](https://marketplace.visualstudio.com/items?itemName=rogalmic.bash-debug)
> Bash Debugに関するVS Code拡張機能・資料。 関連情報: `bashdb`。

![Bash Debug](https://user-images.githubusercontent.com/10897048/47375120-1a9a9b80-d722-11e8-819d-a0090540b2ba.gif)

### [Shellman](https://marketplace.visualstudio.com/items?itemName=Remisa.shellman)
> Shellmanに関するVS Code拡張機能・資料。

![Shellman](https://raw.githubusercontent.com/yousefvand/shellman/master/images/banner.gif)

## C++

- [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) - C/C++ IntelliSense, debugging and code browsing by [Microsoft](https://www.microsoft.com); see the [official docs](https://code.visualstudio.com/docs/languages/cpp)
- [Clangd](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd) - Provides C/C++ language IDE features for VS Code using clangd: code completion, compile errors and warnings, go-to-definition and cross references, include management, code formatting, simple refactorings.
- [gnu-global-tags](https://marketplace.visualstudio.com/items?itemName=austin.code-gnu-global) - Provide Intellisense for C/C++ with the help of the GNU Global tool.

#### その他

- [Microsoft's tutorial on using VSCode for remote C/C++ development](https://devblogs.microsoft.com/cppblog/vscode-cpp-may-2019-update/)

## C\#, ASP .NET and .NET Core

- [C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) - C# extension by [Microsoft](https://www.microsoft.com), read [official documentation](https://code.visualstudio.com/docs/languages/csharp) for the details
- [C# Extensions](https://marketplace.visualstudio.com/items?itemName=jchannon.csharpextensions) - Provides extensions to the IDE that will speed up your development workflow.
- [MSBuild Project Tools](https://marketplace.visualstudio.com/items?itemName=tintoy.msbuild-project-tools)
- [VSCode Solution Explorer](https://marketplace.visualstudio.com/items?itemName=fernandoescolar.vscode-solution-explorer)
- [.NET Core Test Explorer](https://marketplace.visualstudio.com/items?itemName=formulahendry.dotnet-test-explorer)

![.NET Core Test Explorer](https://raw.githubusercontent.com/formulahendry/vscode-dotnet-test-explorer/master/images/test-explorer-065.gif)

## Clojure

### [Calva](https://marketplace.visualstudio.com/items?itemName=betterthantomorrow.calva)
> Calvaに関するVS Code拡張機能・資料。

![Calva](https://raw.githubusercontent.com/BetterThanTomorrow/calva/master/assets/howto/top-level-comment-eval.gif)

## CSS

### [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)
> CSS Peekに関するVS Code拡張機能・資料。

![CSS Peek](https://raw.githubusercontent.com/pranaygp/vscode-css-peek/master/readme/symbolProvider.gif)

- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - Lint CSS/SCSS.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Autocomplete, linting and hover previews for Tailwind CSS.
- [Autoprefixer](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-autoprefixer)
CSS Peekに関するVS Code拡張機能・資料。
  ![Autoprefixer](https://cloud.githubusercontent.com/assets/7034281/16823311/da82a3c6-496b-11e6-8d95-0bebbf0b9607.gif)

- [Intellisense for CSS class names](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion) - Provides CSS class name completion for the HTML class attribute based on the CSS files in your workspace. Also supports React's className attribute.

  ![Intellisense CSS class names](https://i.imgur.com/5crMfTj.gif)

## Go

- [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go) - Rich language support for the Go language.

## Groovy

- [VsCode Groovy Lint](https://marketplace.visualstudio.com/items?itemName=NicolasVuillamy.vscode-groovy-lint) - Groovy lint, format, prettify and auto-fix

![VsCode Groovy Lint](https://raw.githubusercontent.com/nvuillam/vscode-groovy-lint/master/images/vscode-anim.gif)

## Haskell

- [Haskell](https://marketplace.visualstudio.com/items?itemName=haskell.haskell) - Official Haskell support powered by the Haskell Language Server (HLS); supersedes the former Haskell IDE Engine and haskell-linter.

## HLSL

- [HLSL Tools](https://marketplace.visualstudio.com/items?itemName=TimGJones.hlsltools) - provides rich language support for editing HLSL files in VS Code
  ![Example of statement completion using HLSL Tools for VS Code](https://raw.githubusercontent.com/tgjones/HlslTools/master/src/ShaderTools.VSCode/art/statement-completion.gif)

## Shell

- [autocomplate-shell](https://marketplace.visualstudio.com/items?itemName=truman.autocomplate-shell)

## Java

- [Language Support for Java(TM) by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java)
- [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)
- [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven)

- [Lombok](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-lombok)

## JavaScript

- [TS/JS postfix completion](https://marketplace.visualstudio.com/items?itemName=ipatalas.vscode-postfix-ts)

![TS/JS postfix completion demo](https://raw.githubusercontent.com/ipatalas/vscode-postfix-ts/master/images/demo-multiline.gif)

- [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) - This extension provides AI-assisted development features including autocomplete and other insights based on understanding your code context.
![Visual Studio IntelliCode](https://docs.microsoft.com/en-us/visualstudio/intellicode/media/python-intellicode.gif)

JavaScriptに関するVS Code拡張機能・資料。 関連情報: [here](https://github.com/michaelgmcd/vscode-language-babel/issues/1)。

### リンター

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Linter for [eslint](https://eslint.org/).
- [XO](https://marketplace.visualstudio.com/items?itemName=samverschueren.linter-xo) - Linter for [XO](https://github.com/xojs/xo).
- [AVA](https://marketplace.visualstudio.com/items?itemName=samverschueren.ava) - Snippets for [AVA](https://github.com/avajs/ava).
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Opinionated code formatter for [Prettier](https://github.com/prettier/prettier-vscode).
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - Spelling Checker for Visual Studio Code (English). Also supports other languages via external extensions.

- [Schema.org Snippets](https://marketplace.visualstudio.com/items?itemName=austinleegordon.vscode-schema-dot-org) - Snippets for [Schema.org](https://schema.org/).

### フレームワーク別

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Official Vue language support (Volar). Supersedes Vetur, which is now in maintenance mode.

### [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

> Debugger for Chromeに関するVS Code拡張機能・資料。

### Facebook Flow

- [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode) - provides all the functionality you would expect — linting, intellisense, type tooltips and click-to-definition
- [vscode-flow-ide](https://marketplace.visualstudio.com/items?itemName=gcazaciuc.vscode-flow-ide) - an alternative Flowtype extension for Visual Studio Code

### TypeScript

- TSLint reached end-of-life in 2019 — use [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) with [typescript-eslint](https://typescript-eslint.io/) to lint TypeScript.

## [MATLAB](https://marketplace.visualstudio.com/items?itemName=MathWorks.language-matlab)
> MATLABに関するVS Code拡張機能・資料。

MATLABに関するVS Code拡張機能・資料。
   - Syntax highlighting
   - Code snippets
   - Commenting
   - Code folding

![Without MATLAB Installed](https://raw.githubusercontent.com/mathworks/MATLAB-extension-for-vscode/main/public/BasicFeatures.gif)

MATLABに関するVS Code拡張機能・資料。
   - Automatic code completion
   - Source code formatting (document formatting)
   - Code navigation
   - Code analysis, such as continuous code checking and automatic fixes

![MATLAB Installed](https://raw.githubusercontent.com/mathworks/MATLAB-extension-for-vscode/main/public/AdvancedFeatures.gif)

## Markdown

### [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

> markdownlintに関するVS Code拡張機能・資料。 関連情報: [markdownlint](https://github.com/DavidAnson/markdownlint)。

### [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

> Markdown All in Oneに関するVS Code拡張機能・資料。

![Markdown All in One](https://user-images.githubusercontent.com/10897048/47027336-d8a9ac80-d199-11e8-9836-b8dbc4a97d1a.gif)

### [Markdown Emoji](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji)
> Markdown Emojiに関するVS Code拡張機能・資料。

![Markdown Emoji](https://raw.githubusercontent.com/mjbvz/vscode-markdown-emoji/master/docs/example.png)

### [MEO](https://marketplace.visualstudio.com/items?itemName=vadimmelnicuk.meo)

> MEOに関するVS Code拡張機能・資料。

## PHP

### [PHP Tools](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.phptools-vscode)

> PHP Toolsに関するVS Code拡張機能・資料。

![PHP Tools Intellisense demo screenshot](https://raw.githubusercontent.com/DEVSENSE/phptools-docs/master/docs/vscode/imgs/completion-tooltip.gif)

### IntelliSense

- [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client) - The de-facto standard PHP language server: autocompletion, diagnostics, go-to-definition and more. (The former PHP IntelliSense by felixfbecker is deprecated.)

### Laravel

- [Laravel 5 Snippets](https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel5-snippets) - Laravel 5 snippets for Visual Studio Code
- [Laravel Blade Snippets](https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel-blade) - Laravel blade snippets and syntax highlight support

![Laravel blade snippets and syntax highlight support animation](https://raw.githubusercontent.com/onecentlin/laravel-blade-snippets-vscode/master/images/screenshot.gif)

- [Laravel Model Snippets](https://marketplace.visualstudio.com/items?itemName=ahinkle.laravel-model-snippets) - Quickly get models up and running with Laravel Model Snippets.

![Laravel Model Snippets animation](https://raw.githubusercontent.com/ahinkle/vscode-laravel-model-snippets/master/images/example.gif)

- [Laravel Artisan](https://marketplace.visualstudio.com/items?itemName=ryannaddy.laravel-artisan) - Laravel Artisan commands within Visual Studio Code

![Laravel Artisan commands within Visual Studio Code animation](https://raw.githubusercontent.com/TheColorRed/vscode-laravel-artisan/master/images/screens/make-controller.gif)

- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - Support for dotenv file syntax

![Support for dotenv file syntax screenshot](https://raw.githubusercontent.com/mikestead/vscode-dotenv/master/images/screenshot.png)

- [Laravel Pint](https://marketplace.visualstudio.com/items?itemName=open-southeners.laravel-pint) - Run and configure Laravel Pint, the opinionated PHP code-style fixer for Laravel.

### Twig

- [Twig Language 2](https://marketplace.visualstudio.com/items?itemName=mblode.twig-language-2)

Twigに関するVS Code拡張機能・資料。

```json
{
  "emmet.includeLanguages": {
    "twig": "html"
  }
}
```

### Smarty

#### [Smarty Template Support](https://marketplace.visualstudio.com/items?itemName=aswinkumar863.smarty-template-support)
> Smarty Template Supportに関するVS Code拡張機能・資料。

![Smarty Template Support](https://raw.githubusercontent.com/aswinkumar863/smarty-vscode-support/master/images/preview.gif)

### その他の拡張機能

- [Format HTML in PHP](https://marketplace.visualstudio.com/items?itemName=rifi2k.format-html-in-php) - Formatting for the HTML in PHP files. Runs before the save action so you can still have a PHP formatter.

![Format HTML in PHP](https://raw.githubusercontent.com/RiFi2k/format-html-in-php/master/format-html-in-php.gif)

- [Composer](https://marketplace.visualstudio.com/items?itemName=ikappas.composer)
- [PHP Create Class](https://marketplace.visualstudio.com/items?itemName=jaguadoromero.vscode-php-create-class) - Create PHP classes, interfaces, traits and enums from the context menu.
- [PHP Debug](https://marketplace.visualstudio.com/items?itemName=xdebug.php-debug) - XDebug extension for Visual Studio Code
- [PHP DocBlocker](https://marketplace.visualstudio.com/items?itemName=neilbrayfield.php-docblocker)
- [php cs fixer](https://marketplace.visualstudio.com/items?itemName=junstyle.php-cs-fixer) - PHP CS Fixer extension for VS Code, php formatter, php code beautify tool
- [phpcs](https://marketplace.visualstudio.com/items?itemName=ikappas.phpcs) - PHP CodeSniffer for Visual Studio Code
- [phpfmt](https://marketplace.visualstudio.com/items?itemName=kokororin.vscode-phpfmt) - phpfmt for Visual Studio Code

### 関連資料

- [Configuring Visual Studio Code for Drupal](https://www.drupal.org/docs/develop/development-tools/configuring-visual-studio-code)

## POV-Ray

- [POV-Ray](https://marketplace.visualstudio.com/items?itemName=jmaxwilson.vscode-povray) - Persistence of Vision Ray Tracer (POV-Ray) Extension, includes Syntax Highlighting and Snippets for common POV-Ray scene elements, Render the current scene from within Visual Studio Code

![Animated GIF of POV-Ray in Visual Studio Code](https://raw.githubusercontent.com/jmaxwilson/vscode-povray/master/images/vscode-povray-demo.gif)

## Python

- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) - Linting, Debugging (multi threaded, web apps), Intellisense, auto-completion, code formatting, snippets, unit testing, and more.

### TensorFlow

- [TensorFlow Snippets](https://marketplace.visualstudio.com/items?itemName=vahidk.tensorflow-snippets) - This extension includes a set of useful code snippets for developing TensorFlow models in Visual Studio Code.

## ReasonML

- [ReasonML](https://marketplace.visualstudio.com/items?itemName=jaredly.reason-vscode) - Intellisense, code formatting, refactoring, code lens and more

## Ruby

- [endwise](https://marketplace.visualstudio.com/items?itemName=kaiwood.endwise) - Automatically add `end` to Ruby code blocks as you type.

## Rust

- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) - Linting, auto-completion, code formatting, snippets and more

## Terraform

- [Terraform](https://marketplace.visualstudio.com/items?itemName=hashicorp.terraform) - Syntax highlighting, linting, formatting, and validation for Hashicorp's Terraform

# GitHub

## [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)

> GitHub Pull Requests and Issuesに関するVS Code拡張機能・資料。

## [GistPad](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.gistfs)

> GistPadに関するVS Code拡張機能・資料。

![GistPad gist management](https://user-images.githubusercontent.com/116461/69910156-96274b80-13fe-11ea-9be4-d801f4e9c377.gif)

## [GitHub Actions](https://marketplace.visualstudio.com/items?itemName=github.vscode-github-actions)

> GitHub Actionsに関するVS Code拡張機能・資料。

## [GitHub Repositories](https://marketplace.visualstudio.com/items?itemName=GitHub.remotehub)

> GitHub Repositoriesに関するVS Code拡張機能・資料。

## [GitHub Pull Request Monitor](https://marketplace.visualstudio.com/items?itemName=erichbehrens.pull-request-monitor)

> GitHub Pull Request Monitorに関するVS Code拡張機能・資料。

![GitHub Pull Request Monitor](https://raw.githubusercontent.com/erichbehrens/pull-request-monitor/master/images/statusBarItems.png)

# 生産性

## [ARM Template Viewer](https://marketplace.visualstudio.com/items?itemName=bencoleman.armview)

> ARM Template Viewerに関するVS Code拡張機能・資料。

![Displays a graphical preview of Azure Resource Manager (ARM) templates](https://raw.githubusercontent.com/benc-uk/armview-vscode/master/assets/readme/screen1.png)

## [Azure Cosmos DB](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-cosmosdb)

> Azure Cosmos DBに関するVS Code拡張機能・資料。

![Browse your database inside the vs code editor animation](https://media.giphy.com/media/fnK9fzP80e7YfO7JAq/giphy.gif)

## [Azure IoT Toolkit](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.azure-iot-toolkit)

> Azure IoT Toolkitに関するVS Code拡張機能・資料。

![Code snippets for Azure IoT Hub screenshot](https://raw.githubusercontent.com/formulahendry/vscode-azure-iot-toolkit/master/images/device-explorer.png)

## [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)

> Bookmarksに関するVS Code拡張機能・資料。

## [Microsoft Edge Tools](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools)

> Microsoft Edge Toolsに関するVS Code拡張機能・資料。

## [Color Tabs](https://marketplace.visualstudio.com/items?itemName=orepor.color-tabs-vscode-ext)

> Color Tabsに関するVS Code拡張機能・資料。

![Color your tabs and/or titlebar based on regex](https://raw.githubusercontent.com/oreporan/color-tabs-vscode/master/docs/coverGif.gif)

## [Create tests](https://marketplace.visualstudio.com/items?itemName=hardikmodha.create-tests)

> Create testsに関するVS Code拡張機能・資料。

![Create tests extension animation](https://media.giphy.com/media/1iqPhENd8SLd9SggeX/giphy.gif)

## [Dendron](https://marketplace.visualstudio.com/items?itemName=dendron.dendron)

> Dendronに関するVS Code拡張機能・資料。 関連情報: `dendron-cli`。

![dendron.dendron](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/graph-intro.gif)

## [Duplicate Action](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-duplicate)

> Duplicate Actionに関するVS Code拡張機能・資料。

## [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

> Error Lensに関するVS Code拡張機能・資料。

![error lens demo gif](https://user-images.githubusercontent.com/9638156/71784742-de421b00-3007-11ea-8862-8c6ea2836202.gif)

## [Toggle](https://marketplace.visualstudio.com/items?itemName=rebornix.toggle)

> Toggleに関するVS Code拡張機能・資料。

Toggleに関するVS Code拡張機能・資料。 関連情報: `typescript.inlayHints.functionLikeReturnTypes.enabled`。

![Toggle example demo](https://raw.githubusercontent.com/viatsko/awesome-vscode/9c3bf848287d3967a744e7c057ea49ec9e89b396/screenshots/toggle-example.gif)

## [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

> ES7 React/Redux/GraphQL/React-Native snippetsに関するVS Code拡張機能・資料。

![es7-reactreduxgraphqlreact-native-snippets](https://user-images.githubusercontent.com/37667437/46757404-aa365800-cce7-11e8-80ca-9207b7a68dea.png)

### [Gi](https://marketplace.visualstudio.com/items?itemName=rubbersheep.gi)
> Giに関するVS Code拡張機能・資料。

![.gitignore generation animation](https://raw.githubusercontent.com/hasit/vscode-gi/master/assets/gi.gif)

## [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)

> Git Historyに関するVS Code拡張機能・資料。

## [Git Project Manager](https://marketplace.visualstudio.com/items?itemName=felipecaputo.git-project-manager)

> Git Project Managerに関するVS Code拡張機能・資料。

## [GitLink](https://marketplace.visualstudio.com/items?itemName=qezhu.gitlink)

> GitLinkに関するVS Code拡張機能・資料。

![GoTo current file online animation](https://raw.githubusercontent.com/qinezh/vscode-gitlink/master/images/how_to_use_it.gif)

## [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

> GitLensに関するVS Code拡張機能・資料。

![GitLens inline git information animation](https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/revision-navigation.gif)

## [GitLab Workflow](https://marketplace.visualstudio.com/items?itemName=gitlab.gitlab-workflow)
> GitLab Workflowに関するVS Code拡張機能・資料。 関連情報: `.gitlab-ci.yml`。

#### [Gradle Tasks](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle)

> Gradle Tasksに関するVS Code拡張機能・資料。

![Gradle Tasks](https://raw.githubusercontent.com/microsoft/vscode-gradle/develop/images/gradle-tasks-view.png)

## [Icon Fonts](https://marketplace.visualstudio.com/items?itemName=idleberg.icon-fonts)

> Icon Fontsに関するVS Code拡張機能・資料。

## [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

> Import Costに関するVS Code拡張機能・資料。

## [Jira and Bitbucket](https://marketplace.visualstudio.com/items?itemName=Atlassian.atlascode)

> Jira and Bitbucketに関するVS Code拡張機能・資料。

![Jira and Bitbucket workflow](https://bitbucket.org/atlassianlabs/atlascode/raw/master/.readme/dev-workflow.gif)

## [Find-Jump](https://marketplace.visualstudio.com/items?itemName=usernamehw.find-jump)

> Find-Jumpに関するVS Code拡張機能・資料。

## [Kanban](https://marketplace.visualstudio.com/items?itemName=mkloubert.vscode-kanban)

![kanban](https://raw.githubusercontent.com/mkloubert/vscode-kanban/master/img/demo1.gif)

> Kanbanに関するVS Code拡張機能・資料。

## [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

> Live Serverに関するVS Code拡張機能・資料。

![live-server](https://raw.githubusercontent.com/ritwickdey/vscode-live-server/master/images/Screenshot/vscode-live-server-animated-demo.gif)

## [Clipboard Manager](https://marketplace.visualstudio.com/items?itemName=EdgardMessias.clipboard-manager)

> Clipboard Managerに関するVS Code拡張機能・資料。

## [ngrok for VSCode](https://marketplace.visualstudio.com/items?itemName=philnash.ngrok-for-vscode)

> ngrok for VSCodeに関するVS Code拡張機能・資料。 関連情報: [ngrok](https://ngrok.com/)。

![ngrok for VSCode](https://raw.githubusercontent.com/philnash/ngrok-for-vscode/master/images/start.gif)

## [Dotnet Core Test Explorer](https://marketplace.visualstudio.com/items?itemName=formulahendry.dotnet-test-explorer)

> Dotnet Core Test Explorerに関するVS Code拡張機能・資料。

![View and run your .NET Core tests directly in the editor animation](https://raw.githubusercontent.com/formulahendry/vscode-dotnet-test-explorer/master/images/test-explorer.gif)

## [i18n Ally](https://marketplace.visualstudio.com/items?itemName=antfu.i18n-ally)

> i18n Allyに関するVS Code拡張機能・資料。

![i18n Ally](https://raw.githubusercontent.com/antfu/i18n-ally/master/screenshots/overview.png)

## [Instant Markdown](https://marketplace.visualstudio.com/items?itemName=dbankier.vscode-instant-markdown)

> Instant Markdownに関するVS Code拡張機能・資料。

![Instant Markdown Screencast](https://raw.githubusercontent.com/dbankier/vscode-instant-markdown/master/vscode-instant-markdown.gif)

## [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)

> npm Intellisenseに関するVS Code拡張機能・資料。

![npm-intellisense](https://raw.githubusercontent.com/ChristianKohler/NpmIntellisense/master/images/auto_complete.gif)

## [Parameter Hints](https://marketplace.visualstudio.com/items?itemName=DominicVonk.parameter-hints)

> Parameter Hintsに関するVS Code拡張機能・資料。

![Parameter Hints](https://raw.githubusercontent.com/dominicvonk/vscode-parameter-hints/master/preview.png)

## [Partial Diff](https://marketplace.visualstudio.com/items?itemName=ryu1kn.partial-diff)

> Partial Diffに関するVS Code拡張機能・資料。

![Partial Diff](https://raw.githubusercontent.com/ryu1kn/vscode-partial-diff/master/images/public.gif)

### [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)

> Paste JSON as Codeに関するVS Code拡張機能・資料。

![Paste JSON as Code](https://raw.githubusercontent.com/quicktype/quicktype-vscode/master/media/demo.gif)

## [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)

> Path Autocompleteに関するVS Code拡張機能・資料。

![Path Autocomplete](https://raw.githubusercontent.com/ionutvmi/path-autocomplete/master/demo/path-autocomplete.gif)

## [Path IntelliSense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

> Path IntelliSenseに関するVS Code拡張機能・資料。

![Autocompletion for filenames animation](https://i.giphy.com/iaHeUiDeTUZuo.gif)

## [Power Tools](https://marketplace.visualstudio.com/items?itemName=egomobile.vscode-powertools)

> Power Toolsに関するVS Code拡張機能・資料。

![Power Tools](https://raw.githubusercontent.com/egomobile/vscode-powertools/master/img/demo.gif)

## [PrintCode](https://marketplace.visualstudio.com/items?itemName=nobuhito.printcode)

> PrintCodeに関するVS Code拡張機能・資料。

![PrintCode](https://raw.githubusercontent.com/nobuhito/vscode.printcode/master/printcode.gif)

## [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)

> Project Managerに関するVS Code拡張機能・資料。

![Switch between projects screenshot](https://raw.githubusercontent.com/alefragnani/vscode-project-manager/master/images/vscode-project-manager-side-bar.png)

## [Project Dashboard](https://marketplace.visualstudio.com/items?itemName=kruemelkatze.vscode-dashboard)

> Project Dashboardに関するVS Code拡張機能・資料。

![Project Dashboard](https://user-images.githubusercontent.com/5564731/79053450-b7663700-7c3d-11ea-8498-bbfe7723b47f.gif)

## [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)
> Rainbow CSVに関するVS Code拡張機能・資料。

![Rainbow CSV](https://i.imgur.com/PRFKVIN.png)

## [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

> Remote Developmentに関するVS Code拡張機能・資料。

![Remote SSH extension at work](https://microsoft.github.io/vscode-remote-release/images/ssh-readme.gif)

## [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

> REST Clientに関するVS Code拡張機能・資料。

![Send HTTP request and view response animation](https://raw.githubusercontent.com/Huachao/vscode-restclient/master/images/usage.gif)

## [Text Power Tools](https://marketplace.visualstudio.com/items?itemName=qcz.text-power-tools)

> Text Power Toolsに関するVS Code拡張機能・資料。

![Text Power Tools](https://raw.githubusercontent.com/qcz/vscode-text-power-tools/89a1d9d7be3edfc9bcf112fe427c662655cb60cc/images/filtering.gif)

## [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

> Todo Treeに関するVS Code拡張機能・資料。

![Todo Tree](https://raw.githubusercontent.com/Gruntfuggly/todo-tree/master/resources/screenshot.png)

## [Toggle Quotes](https://marketplace.visualstudio.com/items?itemName=BriteSnow.vscode-toggle-quotes)

> Toggle Quotesに関するVS Code拡張機能・資料。

![Toggle Quotes](https://d3vv6lp55qjaqc.cloudfront.net/items/2V092N0u2O1a393Y0f28/Screen%20Recording%202018-10-04%20at%2009.26%20AM.gif?X-CloudApp-Visitor-Id=26998&v=e2908c88)

## [Typescript Destructure](https://marketplace.visualstudio.com/items?itemName=tusaeff.vscode-typescript-destructure-plugin)

> Typescript Destructureに関するVS Code拡張機能・資料。

![Typescript Destructure](https://raw.githubusercontent.com/tusaeff/vscode-typescript-destructure-plugin/master/assets/destructure-to-constant.gif)

## [WakaTime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime)

> WakaTimeに関するVS Code拡張機能・資料。

## [Timing](https://marketplace.visualstudio.com/items?itemName=HaaLeo.timing)

> Timingに関するVS Code拡張機能・資料。

![Timing](https://raw.githubusercontent.com/HaaLeo/vscode-timing/master/doc/Convert_Sample.gif)

## [httpYac](https://marketplace.visualstudio.com/items?itemName=anweber.vscode-httpyac)

> httpYacに関するVS Code拡張機能・資料。

## [DevDb](https://marketplace.visualstudio.com/items?itemName=damms005.devdb)

> DevDbに関するVS Code拡張機能・資料。

## [Keploy](https://marketplace.visualstudio.com/items?itemName=Keploy.keployio)

> Keployに関するVS Code拡張機能・資料。

## [SemanticDiff](https://marketplace.visualstudio.com/items?itemName=semanticdiff.semanticdiff)

> SemanticDiffに関するVS Code拡張機能・資料。

## [Trunk](https://marketplace.visualstudio.com/items?itemName=Trunk.io)

> Trunkに関するVS Code拡張機能・資料。

## [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)

> Peacockに関するVS Code拡張機能・資料。

## [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)

> GitHub Copilotに関するVS Code拡張機能・資料。

# 整形と美化

## [Better Align](https://marketplace.visualstudio.com/items?itemName=wwm.better-align)

> Better Alignに関するVS Code拡張機能・資料。
> Better Alignに関するVS Code拡張機能・資料。
> Better Alignに関するVS Code拡張機能・資料。

![Better Align](https://raw.githubusercontent.com/WarWithinMe/better-align/master/images/2.gif)

## Auto Rename Tag

> Auto Rename Tagに関するVS Code拡張機能・資料。 関連情報: `"editor.linkedEditing": true`、`settings.json`。

> Auto Rename Tagに関するVS Code拡張機能・資料。

![Auto rename paired HTML/XML tags animation](https://raw.githubusercontent.com/formulahendry/vscode-auto-rename-tag/master/images/usage.gif)

## [html2pug](https://marketplace.visualstudio.com/items?itemName=dbalas.vscode-html2pug)

> html2pugに関するVS Code拡張機能・資料。

## [Paste and Indent](https://marketplace.visualstudio.com/items?itemName=Rubymaniac.vscode-paste-and-indent)

> Paste and Indentに関するVS Code拡張機能・資料。

![Indentation of pasted code animation](https://github.com/vikrantnegi/vscode-personal-preference-setting/blob/master/screenshots/pasteandindent.gif)

## [Sort Lines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)

> Sort Linesに関するVS Code拡張機能・資料。

![Sorts lines of text in specific order animation](https://raw.githubusercontent.com/Tyriar/vscode-sort-lines/master/images/usage-animation.gif)

## [Surround](https://marketplace.visualstudio.com/items?itemName=yatki.vscode-surround)

> Surroundに関するVS Code拡張機能・資料。

![Wrap a template around a code block](https://raw.githubusercontent.com/yatki/vscode-surround/master/images/demo.gif)

## [Wrap Selection](https://marketplace.visualstudio.com/items?itemName=konstantin.wrapSelection)

> Wrap Selectionに関するVS Code拡張機能・資料。

![Wraps selection or multiple selections with symbol or multiple symbols animation](https://github.com/gko/wrap/blob/master/features.gif)

## [Formatting Toggle](https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle)

> Formatting Toggleに関するVS Code拡張機能・資料。

## [shell-format](https://github.com/foxundermoon/vs-shell-format)
> shell-formatに関するVS Code拡張機能・資料。

![shell-format](https://raw.githubusercontent.com/foxundermoon/vs-shell-format/master/image/shell_format.gif)

## [Vscode Google Translate](https://marketplace.visualstudio.com/items?itemName=funkyremi.vscode-google-translate)
> Vscode Google Translateに関するVS Code拡張機能・資料。

![Vscode Google Translate](https://raw.githubusercontent.com/funkyremi/vscode-google-translate/master/demo.gif)

## エクスプローラーアイコン

### [City Lights Icons](https://marketplace.visualstudio.com/items?itemName=Yummygum.city-lights-icon-vsc)

![City Lights Icons](https://raw.githubusercontent.com/yummygum/city-lights-icons-vsc/master/city-lights-icon-preview.gif)

### [VSCode Icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)

![VSCode Icons](https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/images/screenshot.gif)

### [Seti Icons](https://marketplace.visualstudio.com/items?itemName=qinjia.seti-icons)

![Seti Icons](https://raw.githubusercontent.com/hellopao/vscode-seti-icons/master/screenshot.png)

### [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

![Material Icon Theme](https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/master/images/fileIcons.png)

# 未分類

## [CodeRoad](https://marketplace.visualstudio.com/items?itemName=CodeRoad.coderoad)

> CodeRoadに関するVS Code拡張機能・資料。

![CodeRoad Demo](https://raw.githubusercontent.com/coderoad/coderoad-vscode/master/docs/static/gif/coderoad-example.gif)

## [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

> Code Runnerに関するVS Code拡張機能・資料。

![Run a snippet or file animation](https://raw.githubusercontent.com/formulahendry/vscode-code-runner/master/images/usage.gif)

## [Code Time](https://marketplace.visualstudio.com/items?itemName=softwaredotcom.swdc-vscode)

> Code Timeに関するVS Code拡張機能・資料。

![Code Time](https://camo.githubusercontent.com/918d2dfc585074f3b20566723f3ab8ce32e9d23e/68747470733a2f2f737764632d7673636f64652e73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f636f64652d74696d652d66656174757265732e706e67)

## [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

> Color Highlightに関するVS Code拡張機能・資料。

![Highlight web colors in your editor screenshot](https://cdn-images-1.medium.com/v2/resize:fit:1600/1*ZwE7OHKR5opvDCJJOw9KeQ.png)

## [Output Colorizer](https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer)
> Output Colorizerに関するVS Code拡張機能・資料。

![IBM.output-colorizer](https://raw.githubusercontent.com/IBM-Bluemix/vscode-log-output-colorizer/master/github-assets/screenshot-1.jpg)

## [Dash](https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-dash)

> Dashに関するVS Code拡張機能・資料。

![Dash integration screenshot](https://cdn-images-1.medium.com/v2/resize:fit:2000/1*sqGllC-pgXNaEBfB-cxG9Q.png)

## [Edit with Shell Command](https://marketplace.visualstudio.com/items?itemName=ryu1kn.edit-with-shell)

> Edit with Shell Commandに関するVS Code拡張機能・資料。

![Edit with Shell Command](https://raw.githubusercontent.com/ryu1kn/vscode-edit-with-shell/master/images/animations/public.gif)

## [Editor Config for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

> Editor Config for VS Codeに関するVS Code拡張機能・資料。

## [SFTP](https://marketplace.visualstudio.com/items?itemName=Natizyskunk.sftp)

> SFTPに関するVS Code拡張機能・資料。

## [Highlight JSX/HTML tags](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)

> Highlight JSX/HTML tagsに関するVS Code拡張機能・資料。

![](https://camo.githubusercontent.com/010b886fb93f49c56e4c7308ba0a5a1aca8a2db7/68747470733a2f2f692e696d67626f782e636f6d2f4455584c467657372e676966)

## [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

> Indent Rainbowに関するVS Code拡張機能・資料。

![indent-rainbow](https://raw.githubusercontent.com/oderwat/vscode-indent-rainbow/master/assets/example.png)

## [iTerm2 Theme Sync](https://marketplace.visualstudio.com/items?itemName=tusaeff.vscode-iterm2-theme-sync)

> iTerm2 Theme Syncに関するVS Code拡張機能・資料。

![iTerm2 Theme Sync](https://raw.githubusercontent.com/tusaeff/vscode-iterm2-theme-sync/master/screencast.gif)

## [Password Generator](https://marketplace.visualstudio.com/items?itemName=ftonato.password-generator)

> Password Generatorに関するVS Code拡張機能・資料。

![Password Generator](https://raw.githubusercontent.com/ftonato/vscode-password-generator/master/preview.gif)

## [PlatformIO IDE](https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide)

> PlatformIO IDEに関するVS Code拡張機能・資料。

## [Polacode](https://marketplace.visualstudio.com/items?itemName=pnp.polacode)

> Polacodeに関するVS Code拡張機能・資料。

![Make a polaroid image of your code animation](https://raw.githubusercontent.com/octref/polacode/master/demo/usage.gif)

## [carbon-now-sh](https://marketplace.visualstudio.com/items?itemName=ericadamski.carbon-now-sh)
carbon-now-shに関するVS Code拡張機能・資料。 関連情報: [carbon.now.sh](https://carbon.now.sh)。
 ![Send your code to carbon.now.sh animation](https://user-images.githubusercontent.com/6516758/46617867-df765680-caeb-11e8-8899-95778cdcceb7.gif)

## [Quokka](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)

> Quokkaに関するVS Code拡張機能・資料。

![Integrated JavaScript/TypeScript playground animation](https://quokkajs.com/assets/img/main-video.gif)

## [Runner](https://marketplace.visualstudio.com/items?itemName=mattn.Runner)

> Runnerに関するVS Code拡張機能・資料。

![Run various scripts right from VS Code animation](https://raw.githubusercontent.com/mattn/vscode-runner/master/images/screenshot.gif)

## [SVG](https://marketplace.visualstudio.com/items?itemName=jock.svg)

> SVGに関するVS Code拡張機能・資料。

![SVG](https://raw.githubusercontent.com/lishu/vscode-svg/master/images/f1.png)

## [Text Marker (Highlighter)](https://marketplace.visualstudio.com/items?itemName=ryu1kn.text-marker)

> Text Marker (Highlighter)に関するVS Code拡張機能・資料。

![Text Marker (Highlighter)](https://raw.githubusercontent.com/ryu1kn/vscode-text-marker/master/images/animations/public.gif)

## [Interface generator](https://marketplace.visualstudio.com/items?itemName=dotup.dotup-vscode-interface-generator)

> Interface generatorに関するVS Code拡張機能・資料。

![Interface generator](https://raw.githubusercontent.com/dotupNET/dotup-vscode-interface-generator/master/images/video2.gif)

## [JFrog](https://marketplace.visualstudio.com/items?itemName=JFrog.jfrog-vscode-extension)

> JFrogに関するVS Code拡張機能・資料。

![JFrog](https://raw.githubusercontent.com/jfrog/jfrog-vscode-extension/master/resources/readme/introduction.png)

## [SARIF Explorer](https://marketplace.visualstudio.com/items?itemName=trailofbits.sarif-explorer)

> SARIF Explorerに関するVS Code拡張機能・資料。

## [Document Viewer](https://marketplace.visualstudio.com/items?itemName=SyncfusionInc.Document-Viewer-VSCode-Extensions)

> Document Viewerに関するVS Code拡張機能・資料。

# テーマ

## UI

UIに関するVS Code拡張機能・資料。

- [Essence](https://github.com/essence-language/vscode-extension)

## 構文

### [2077 theme by Endormi](https://vscodethemes.com/e/Endormi.2077-theme)

2077 theme by Endormiに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/Endormi.2077-theme">
  <img src="./themes/screenshots/endormi.2077-theme.png" width="600" />
</a>

### [An Old Hope Theme by Dustin Sanders](https://vscodethemes.com/e/dustinsanders.an-old-hope-theme-vscode)

An Old Hope Theme by Dustin Sandersに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/dustinsanders.an-old-hope-theme-vscode">
  <img src="./themes/screenshots/dustinsanders.an-old-hope-theme-vscode.png" width="600" />
</a>

### [Ariake Dark by wart](https://vscodethemes.com/e/wart.ariake-dark)

Ariake Dark by wartに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/wart.ariake-dark">
  <img src="./themes/screenshots/wart.ariake-dark.png" width="600" />
</a>

### [Atom One Dark Theme by Mahmoud Ali](https://vscodethemes.com/e/akamud.vscode-theme-onedark)

Atom One Dark Theme by Mahmoud Aliに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/akamud.vscode-theme-onedark">
  <img src="./themes/screenshots/akamud.vscode-theme-onedark.png" width="600" />
</a>

### [Atomize by emroussel](https://vscodethemes.com/e/emroussel.atomize-atom-one-dark-theme)

Atomize by emrousselに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/emroussel.atomize-atom-one-dark-theme">
  <img src="./themes/screenshots/atomize.png" width="600" />
</a>

### [Ayu by teabyii](https://vscodethemes.com/e/teabyii.ayu)

Ayu by teabyiiに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/teabyii.ayu">
  <img src="./themes/screenshots/teabyii.ayu.png" width="600" />
</a>

### [Borealis Theme by Alexander Eckert](https://vscodethemes.com/e/eckertalex.borealis)

Borealis Theme by Alexander Eckertに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/eckertalex.borealis">
  <img src="./themes/screenshots/eckertalex.borealis.png" width="600" />
</a>

### [Captain Sweetheart by ultradracula](https://vscodethemes.com/e/ultradracula.captain-sweetheart)

Captain Sweetheart by ultradraculaに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/ultradracula.captain-sweetheart">
  <img src="./themes/screenshots/ultradracula.captain-sweetheart.png" width="600" />
</a>

### [City Lights by Yummygum](https://vscodethemes.com/e/Yummygum.city-lights-theme)

City Lights by Yummygumに関するVS Code拡張機能・資料。

<a href="http://citylights.xyz">
  <img src="./themes/screenshots/city-lights-yummygum.png" width="600" />
</a>

### [Cobalt2 Theme Official by Wes Bos](https://vscodethemes.com/e/wesbos.theme-cobalt2)

Cobalt2 Theme Official by Wes Bosに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/wesbos.theme-cobalt2">
  <img src="./themes/screenshots/wesbos.theme-cobalt2.png" width="600" />
</a>

### [Dracula Official by Dracula Theme](https://vscodethemes.com/e/dracula-theme.theme-dracula)

Dracula Official by Dracula Themeに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/dracula-theme.theme-dracula">
  <img src="./themes/screenshots/dracula-theme.theme-dracula.png" width="600" />
</a>

### [Edge by Bogdan Lazar](https://vscodethemes.com/e/bogdanlazar.edge)

Edge by Bogdan Lazarに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/bogdanlazar.edge">
  <img src="./themes/screenshots/bogdanlazar.edge-theme.png" width="600" />
</a>

### [Eva Theme by fisheva](https://vscodethemes.com/e/fisheva.eva-theme)

Eva Theme by fishevaに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/fisheva.eva-theme">
  <img src="./themes/screenshots/fisheva.eva-theme.png" width="600" />
</a>

### [Fairy Floss by nopjmp and sailorhg](https://vscodethemes.com/e/nopjmp.fairyfloss)

Fairy Floss by nopjmp and sailorhgに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/nopjmp.fairyfloss">
  <img src="./themes/screenshots/nopjmp.fairyfloss.png" width="600" />
</a>

### [GitHub Theme by Thomas Pink](https://vscodethemes.com/e/thomaspink.theme-github)

GitHub Theme by Thomas Pinkに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/thomaspink.theme-github">
  <img src="./themes/screenshots/thomaspink.theme-github.png" width="600" />
</a>

### [Jellybeans Theme by Dimitar Nonov](https://vscodethemes.com/e/DimitarNonov.jellybeans-theme)

Jellybeans Theme by Dimitar Nonovに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/DimitarNonov.jellybeans-theme">
  <img src="./themes/screenshots/jellybeans-theme.png" width="600" />
</a>

### [Material Palenight Theme by whizkydee](https://vscodethemes.com/e/whizkydee.material-palenight-theme)

Material Palenight Theme by whizkydeeに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/whizkydee.material-palenight-theme">
  <img src="./themes/screenshots/whizkydee.material-palenight-theme.png" width="600" />
</a>

### [Material Theme by Mattia Astorino](https://vscodethemes.com/e/Equinusocio.vsc-material-theme)

Material Theme by Mattia Astorinoに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/Equinusocio.vsc-material-theme">
  <img src="./themes/screenshots/Equinusocio.vsc-material-theme.png" width="600" />
</a>

### [Mno by u29dc](https://vscodethemes.com/e/u29dc.mno)

Mno by u29dcに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/u29dc.mno">
  <img src="./themes/screenshots/u29dc.mno.png" width="600" />
</a>

### [Omni by Rocketseat](https://vscodethemes.com/e/rocketseat.theme-omni)

Omni by Rocketseatに関するVS Code拡張機能・資料。

<a href="https://marketplace.visualstudio.com/items?itemName=rocketseat.theme-omni">
  <img src="https://storage.googleapis.com/golden-wind/github/omni/omni.png" width="600" />
</a>

### [One Monokai by azemoh](https://vscodethemes.com/e/azemoh.one-monokai)

One Monokai by azemohに関するVS Code拡張機能・資料。

<a href="https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai">
  <img src="https://raw.githubusercontent.com/azemoh/vscode-one-monokai/master/screenshot-v0.2.0.png" width="600" />
</a>

### [Monokai Pro by monokai (commercial)](https://vscodethemes.com/e/monokai.theme-monokai-pro-vscode)

Monokai Pro by monokai (commercial)に関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/monokai.theme-monokai-pro-vscode">
  <img src="./themes/screenshots/1079cc76.png" width="600" />
</a>

### [Night Owl by Sarah Drasner](https://vscodethemes.com/e/sdras.night-owl)

Night Owl by Sarah Drasnerに関するVS Code拡張機能・資料。

<a href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl">
  <img src="./themes/screenshots/night-owl.png" width="600" />
</a>

### [Plastic by Will Stone](https://vscodethemes.com/e/will-stone.plastic)

Plastic by Will Stoneに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/will-stone.plastic">
  <img src="./themes/screenshots/will-stone.plastic.png" width="600" />
</a>

### [Nord by arcticicestudio](https://vscodethemes.com/e/arcticicestudio.nord-visual-studio-code)

Nord by arcticicestudioに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/arcticicestudio.nord-visual-studio-code">
  <img src="./themes/screenshots/arcticicestudio.nord-visual-studio-code.png" width="600" />
</a>

### [Rainglow by Dayle Rees](https://vscodethemes.com/e/daylerees.rainglow)

Rainglow by Dayle Reesに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/daylerees.rainglow">
  <img src="https://raw.githubusercontent.com/rainglow/examples/master/vscode/gloom-contrast.png" width="600" />
</a>

### [Relaxed Theme by Michael Kühnel](https://vscodethemes.com/e/mischah.relaxed-theme)

Relaxed Theme by Michael Kühnelに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/mischah.relaxed-theme">
  <img src="./themes/screenshots/relaxed-theme.png" width="600" />
</a>

### [Shades of Purple by Ahmad Awais](https://vscodethemes.com/e/ahmadawais.shades-of-purple)

Shades of Purple by Ahmad Awaisに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/ahmadawais.shades-of-purple">
  <img src="./themes/screenshots/ahmadawais.shades-of-purple.png" width="600" />
</a>

### [Slime Theme by smlombardi](https://vscodethemes.com/e/smlombardi.slime)

Slime Theme by smlombardiに関するVS Code拡張機能・資料。

<a href="https://vscodethemes.com/e/smlombardi.slime">
  <img src="./themes/screenshots/slime.png" width="600" />
</a>

### [Niketa Theme by Dejan Toteff](https://vscodethemes.com/e/selfrefactor.niketa-theme)

Niketa Theme by Dejan Toteffに関するVS Code拡張機能・資料。

 <a href="https://vscodethemes.com/e/mischah.relaxed-theme">
  <img src="./themes/screenshots/niketa-theme.png" width="600" />
</a>

# フォローすべき人々

フォローすべき人々に関するVS Code拡張機能・資料。

- [@code](https://twitter.com/code) - The official VS Code Twitter
- [@auchenberg](https://twitter.com/auchenberg) - VS Code Program Manager
- [@BenjaminPasero](https://twitter.com/BenjaminPasero) - VS Code Dev
- [@chrisdias](https://twitter.com/chrisdias) - VS Code Program Manager
- [@_clarkio](https://twitter.com/_clarkio) - Developer Advocate @ Azure. Creator of VS Code release highlight videos
- [@eamodio](https://twitter.com/eamodio) - GitLens creator
- [@ErichGamma](https://twitter.com/ErichGamma) - VS Code Dev
- [@IsidorN](https://twitter.com/IsidorN) - VS Code Dev
- [@joaomoreno](https://twitter.com/joaomoreno) - VS Code Dev
- [@lannonbr](https://twitter.com/lannonbr) - Creator of vscode.rocks & JS Parameter Annotations extension
- [@maeschli](https://twitter.com/maeschli) - VS Code Dev
- [@mattbierner](https://twitter.com/mattbierner) - VS Code Dev
- [@MrAhmadAwais](https://twitter.com/MrAhmadAwais) - JS/WordPress Core Dev. Creator of VSCode.pro course & Shades of Purple theme
- [@ramyanexus](https://twitter.com/ramyanexus) - VS Code Dev. Maintainer of Go extension
- [@Tyriar](https://twitter.com/Tyriar) - VS Code Dev. Creator of xterm.js

# 拡張機能開発者向け資料

## Documentation

- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) - The Better Comments extension will help you create more human-friendly comments in your code.
- [Visual Studio Code API](https://code.visualstudio.com/api) section of [Official Documentation](https://code.visualstudio.com/docs)

## Libraries

- [typed-vscode](https://www.npmjs.com/package/typed-vscode) - Generates types from contribution points of your extension manifest

## Tools

- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) - Visual Studio Live Share enables you to collaboratively edit and debug with others in real time, regardless what programming languages you're using or app types you're building.
- [Online TextMate Themes Editor](https://el-angel.github.io/theme-editor/) - since VS Code supports TextMate themes, you can create them in this online editor and then create a new VS Code package using [Yo Code](https://code.visualstudio.com/docs/extensions/yocode) tool
- [Yo Code - Extension Generator](https://code.visualstudio.com/docs/extensions/yocode)
- [Open in Code](https://github.com/sozercan/OpenInCode) - macOS Finder toolbar app to open current folder in Visual Studio Code

![macOS Finder toolbar app to open current folder in Visual Studio Code animation](https://camo.githubusercontent.com/edbae5fe27d6c7af23218e60cb07e3a5061bbbab/687474703a2f2f692e696d6775722e636f6d2f4c6d56484978572e676966)

- [Themer](https://themer.dev) - Easily create your own theme for VS Code (and matching ones for your other tools).
- [Azure Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack) - Microsoft's official Azure extension pack, bundling the core Azure extensions for working with Azure resources directly from VS Code.

- [Mark down preview](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) - Markdown Preview Enhanced is an extension that provides you with many useful functionalities such as automatic scroll sync, math typesetting, mermaid, PlantUML, pandoc, PDF export, code chunk, presentation writer, etc. A lot of its ideas are inspired by Markdown Preview Plus and RStudio Markdown.

# オンライン講座

## Visual Studio Code Power User Course (commercial)

Visual Studio Code Power User Course (commercial)に関するVS Code拡張機能・資料。 関連情報: [Ahmad Awais](https://twitter.com/MrAhmadAwais/)、[Shades of Purple theme](https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple)。

- [VSCode.pro](https://vscode.pro/) - 📺 Huge five hours 65 videos VSCode course.
- [Ahmad Awais](https://twitter.com/MrAhmadAwais/) - 🙌 Creator of Shades of Purple theme. Core Developer for WP/JS. OSS Dev Advocate.

# 貢献

貢献に関するVS Code拡張機能・資料。 関連情報: [contribution guidelines](https://github.com/viatsko/awesome-vscode/blob/9c3bf848287d3967a744e7c057ea49ec9e89b396/CONTRIBUTING.md)。

# ライセンス

ライセンスに関するVS Code拡張機能・資料。

ライセンスに関するVS Code拡張機能・資料。 関連情報: [![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)、https://creativecommons.org/publicdomain/zero/1.0/ 。

ライセンスに関するVS Code拡張機能・資料。 関連情報: [Valerii Iatsko](https://viatsko.me)。
