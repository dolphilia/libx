---
title: "Awesome WebAssembly"
description: "WebAssemblyを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-idematos-awesome-webassembly-readme-md"
---

# Awesome WebAssembly

WebAssemblyを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [リソース](#resources)
  - [基礎](#basics)
  - [記事](#articles)
  - [書籍](#books)
  - [動画](#videos)
- [プロジェクト](#projects)
  - [コンパイラー](#compilers)
  - [ランタイム](#runtimes)
  - [ライブラリー](#libraries)
  - [ツール](#tools)
  - [フレームワーク](#frameworks)
- [コミュニティ](#communities)

## リソース

### 基礎

- [WebAssembly MDN](https://developer.mozilla.org/en-US/docs/WebAssembly)
- [WebAssembly Specification](https://webassembly.github.io/spec/)

### 記事

- [What is WebAssembly?](https://medium.com/javascript-scene/what-is-webassembly-the-dawn-of-a-new-era-61256ec5a8f6) - Eric Elliott、2015年。
- [7 Things You Should Know About WebAssembly](https://auth0.com/blog/7-things-you-should-know-about-web-assembly/) - Sebastian Peyrott、2015年。
- [WebAssembly Demystified](https://floooh.github.io/2017/06/09/webassembly-demystified.html) - Andre Weissflog、2017年。
- [Why WebAssembly?](https://medium.com/dfinity/why-webassembly-f21967076e4) - Andreas Rossberg、2018年。
- [The world's easiest introduction to WebAssembly](https://medium.com/free-code-camp/webassembly-with-golang-is-fun-b243c0e34f02) - Martin Olsansky、2019年。
- [The Future of Programming: WebAssembly & Life After JavaScript](https://www.sitepoint.com/future-programming-webassembly-life-after-javascript/) - Eric Elliott、2024年。
- [The Web Assembles](https://blog.scottlogic.com/ceberhardt/assets/white-papers/the-web-assembles.pdf) - Chris Price と Colin Eberhardt、2017年。
- [An Empirical Study of Real-World WebAssembly Binaries](https://dlehmann.eu/publications/WasmBench-www2021.pdf) - Aaron Hilbig、Daniel Lehmann、Michael Pradel、2021年。
- [Not So Fast: Analyzing the Performance of WebAssembly vs. Native Code](https://www.usenix.org/system/files/atc19-jangda.pdf) - Abhinav Jangda、Bobby Powers、Emery D. Berger、Arjun Guha、2019年。
- [Provably-Safe Multilingual Software Sandboxing using WebAssembly](https://www.usenix.org/system/files/sec22-bosamiya.pdf) - Jay Bosamiya、Wen Shih Lim、Bryan Parno、2022年。
- [Wasabi: A Framework for Dynamically Analyzing WebAssembly](https://software-lab.org/publications/asplos2019_Wasabi.pdf) - Daniel Lehmann と Michael Pradel、2019年。
- [Bringing the Web up to Speed with WebAssembly](https://github.com/WebAssembly/spec/blob/main/papers/pldi2017.pdf) - Andreas Haas、Andreas Rossberg、Derek L. Schuff、Ben L. Titzer、Michael Holman、Dan Gohman、Luke Wagner、Alon Zakai、JF Bastien、2017年。

### 書籍

- [Rust and WebAssembly](https://rustwasm.github.io/docs/book/) - Rust と WebAssembly を併用する方法を説明するオープンソース書籍。
- [Programming WebAssembly with Rust](https://pragprog.com/titles/khrust/programming-webassembly-with-rust/) - Kevin Hoffman、2019年。
- [The Art of WebAssembly](https://nostarch.com/art-webassembly) - Rick Battagline、2021年。

### 動画

- [WebAssembly](https://www.youtube.com/watch?v=NhAPPQqKCi8) - Nick Bray、2015年。
- [What is WebAssembly?](https://www.youtube.com/watch?v=HktWin_LPf4) - Lin Clark、2017年。
- [Get Going with WebAssembly](https://www.youtube.com/watch?v=iTrx0BbUXI4) - Johan Brandhorst、2018年。
- [WebAssembly and the Death of JavaScript](https://www.youtube.com/watch?v=pBYqen3B2gc) - Colin Eberhardt、2018年。

## プロジェクト

### コンパイラー

- [Emscripten](https://emscripten.org/) - C と C++ を WebAssembly へコンパイルします。
- [AssemblyScript](https://www.assemblyscript.org/) - WebAssembly へコンパイルされる TypeScript に似た言語。
- [Binaryen](https://github.com/WebAssembly/binaryen) - WebAssembly 向けのコンパイラーインフラストラクチャ。
- [TinyGo](https://tinygo.org/) - WebAssembly 向け Go コンパイラー。

### ランタイム

- [Wasmtime](https://wasmtime.dev/) - スタンドアロンの WebAssembly ランタイム。
- [WasmEdge](https://github.com/WasmEdge/WasmEdge) - 高性能な WebAssembly ランタイム。
- [WAVM](https://github.com/WAVM/WAVM) - WebAssembly 仮想マシン。
- [Wasm3](https://github.com/wasm3/wasm3) - 小さく高速な WebAssembly インタープリター。
- [Wasmer](https://wasmer.io/) - デスクトップ、クラウド、エッジ向け WebAssembly ランタイム。

### ライブラリー

- [wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) - Rust と JavaScript の相互運用。
- [wasmer-js](https://github.com/wasmerio/wasmer-js) - JavaScript 向け WebAssembly ランタイム。
- [wasm-pack](https://github.com/rustwasm/wasm-pack) - Rust が生成した Wasm をビルド、テスト、公開します。
- [Wabt](https://github.com/WebAssembly/wabt) - WebAssembly バイナリーツールキット。
- [WASI](https://github.com/WebAssembly/WASI) - WebAssembly システムインターフェース。

### ツール

- [Wasm Explorer](https://mbebenita.github.io/WasmExplorer/) - WebAssembly バイナリーを可視化・デバッグします。
- [wasm2c](https://github.com/WebAssembly/wabt/tree/main/wasm2c) - WebAssembly バイナリーを C へ変換します。
- [Cross-Origin Isolation Checker](https://app.cinevva.com/tools/cross-origin-isolation-checker) - SharedArrayBuffer とマルチスレッド WebAssembly の要件である、ページのクロスオリジン分離（COOP/COEP）を確認します。

### フレームワーク

- [Blazor](https://blazor.net/) - WebAssembly 上で動作する .NET ウェブフレームワーク。
- [Yew](https://yew.rs/) - WebAssembly を使ってウェブアプリケーションを構築する Rust フレームワーク。
- [Leptos](https://github.com/leptos-rs/leptos) - WebAssembly ウェブアプリ向けのフルスタック Rust フレームワーク。

## コミュニティ

- [WebAssembly GitHub Organization](https://github.com/WebAssembly)
- [W3C WebAssembly Group](https://www.w3.org/wasm/)
- [WebAssembly Subreddit](https://www.reddit.com/r/webassembly/)


## 貢献

貢献を歓迎します。変更を送信する前に [contribution guidelines](https://github.com/idematos/awesome-webassembly/blob/main/contributing.md) をお読みください。
