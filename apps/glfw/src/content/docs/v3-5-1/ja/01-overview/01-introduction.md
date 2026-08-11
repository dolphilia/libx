---
title: "はじめに"
description: "公式ドキュメントの入口"
licenseSource: "glfw-3.5.1"
---

> このページは、[GLFW 3.5.1公式ドキュメント](https://www.glfw.org/docs/3.5.1/)をMarkdown形式へ変更して移植したものです。libx向けに書式、ナビゲーション、リンクを変更していますが、技術的な内容はGLFW 3.5.1のソース配布物に基づいています。

<a id="mainpage"></a>

# はじめに

GLFWは、OpenGL、OpenGL ES、Vulkanのアプリケーション開発に使用できる、自由なオープンソースのマルチプラットフォームライブラリです。ウィンドウ、コンテキスト、サーフェスの作成、入力の読み取り、イベントの処理などを行うための、プラットフォームに依存しない簡潔なAPIを提供します。

[リリースノート](/docs/glfw/v3-5-1/ja/05-migration-and-history/02-release-notes/#news)には、新機能、注意事項、非推奨になった機能が掲載されています。

[入門ガイド](/docs/glfw/v3-5-1/ja/02-getting-started/01-getting-started/#quick_guide)は、GLFWを初めて使う人のためのガイドです。小規模ながら完全に動作するプログラムを作成する手順を説明します。

APIの各領域には、次のガイドがあります。

- [API入門ガイド](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_guide) – 初期化、エラー処理、上位レベルの設計
- [ウィンドウガイド](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_guide) – ウィンドウとフレームバッファの作成および操作
- [コンテキストガイド](/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_guide) – OpenGLおよびOpenGL ESコンテキストの操作
- [Vulkanガイド](/docs/glfw/v3-5-1/ja/03-guides/06-vulkan-guide/#vulkan_guide) – Vulkanオブジェクトと拡張機能の操作
- [モニターガイド](/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_guide) – モニターとビデオモードの列挙および操作
- [入力ガイド](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_guide) – イベントの受信、ポーリング、入力の処理

プログラムを作成したら、[GLFWのコンパイルガイド](/docs/glfw/v3-5-1/ja/02-getting-started/02-compiling-glfw/#compile_guide)と[アプリケーションのビルドガイド](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#build_guide)を参照してください。

[APIリファレンス](/docs/glfw/v3-5-1/ja/)には、個々の関数について、さらに詳しい情報が掲載されています。

[GLFW 2から3への移行ガイド](/docs/glfw/v3-5-1/ja/05-migration-and-history/01-moving-from-2-to-3/#moving_guide)では、変更点と、新しいAPIを使用するために既存のコードを更新する方法を説明します。

[保証と制限](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#guarantees_limitations)の節では、ポインターの有効期間、再入可能性、スレッドセーフ性、イベントの順序、前方互換性と後方互換性について説明します。

最後に、[規格適合ガイド](/docs/glfw/v3-5-1/ja/03-guides/07-standards-conformance/#compat_guide)では、GLFWが使用するAPI、規格、プロトコルと、それらが対象のコンピューターに存在しない場合の動作を説明します。

このドキュメントはDoxygenを使用して生成されました。ドキュメントのソースは、[ソース配布物](https://www.glfw.org/download.html)と[GitHubリポジトリ](https://github.com/glfw/glfw)の両方で入手できます。
